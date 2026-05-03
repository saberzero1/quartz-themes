import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "faded",
    modes: ["dark"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "Roboto Condensed",
        style: "normal italic",
        weight: "100 900",
        file: "roboto-condensed.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "its",
        style: "normal",
        weight: "400",
        file: "its.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Font Awesome 6 Free Regular",
        style: "normal italic",
        weight: "100 900",
        file: "font-awesome-6-free-regular.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Font Awesome 6 Free Solid",
        style: "normal italic",
        weight: "100 900",
        file: "font-awesome-6-free-solid.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Cuprum",
        style: "normal italic",
        weight: "100 900",
        file: "cuprum.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Gemunu Libre",
        style: "normal italic",
        weight: "100 900",
        file: "gemunu-libre.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Kreon",
        style: "normal italic",
        weight: "100 900",
        file: "kreon.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: ["test", "Faded-Theme-Sliding-Panes-Options"],
  },
  dark: {
    base: `:root:root {
  --Blue-Accent-1: #2799ad;
  --Blue-Accent-1-Lite: #16bfe0;
  --Blue-Accent-2: #2f61ac;
  --Blue-Accent-2-Dark: #2255a1;
  --Blue-Grey-Accent-1: #8292a2;
  --FA6Regular: 'Font Awesome 6 Free Regular';
  --FA6Solid: 'Font Awesome 6 Free Solid';
  --Gold-Accent-1: #d6ba7c;
  --Gold-Accent-1-Lite: #ddc48e;
  --Gold-Accent-1-Liter: #e4d1aa;
  --Gold-Accent-1-Litest: #f1e4c8;
  --Grey-Accent-1: #1a1e24;
  --Grey-Accent-1-Dark: #14171b;
  --Grey-Accent-1-Darken: #171a1f;
  --Grey-Accent-1-Darker: #0b0f13;
  --Grey-Accent-1-Darker-Darken: #090c0f;
  --Grey-Accent-1-Darkest: #050708;
  --Grey-Accent-1-Lighten: #232830;
  --Grey-Accent-1-Lite: #252b33;
  --Grey-Accent-1-Lite-Lighten: #2f3641;
  --Grey-Accent-2: #919191;
  --Grey-Accent-3: #2a2c2d;
  --Grey-Accent-3-Dark: #121415;
  --Grey-Accent-3-Lite: #414344;
  --Minimum-Page-Width: 700px;
  --Purple-Accent-1: #797fd8;
  --Purple-Accent-2: #ae81ff;
  --Red-Accent-1: #ad3939;
  --Red-Accent-1-Dark: #963232;
  --Red-Accent-1-Darker: #752727;
  --Red-Accent-1-Darkest: #461818;
  --Red-Accent-1-Darkest-Lighten: #521c1c;
  --Red-Accent-1-Lighten: #b34141;
  --Red-Accent-1-Lite: #b94a4a;
  --Red-Accent-2: #aa3c5d;
  --White-00: #dcddde;
  --White-Accent-2: #aab3ca;
  --accent-h: 254;
  --accent-l: 68%;
  --accent-s: 80%;
  --amber-100: #fef3c7;
  --amber-200: #fde68a;
  --amber-300: #fcd34d;
  --amber-400: #fbbf24;
  --amber-50: #fffbeb;
  --amber-500: #f59e0b;
  --amber-600: #d97706;
  --amber-700: #b45309;
  --amber-800: #92400e;
  --amber-900: #78350f;
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border-focus: var(--color-base-40, #555);
  --background-modifier-border-hover: var(--color-base-35, #3F3F3F);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
  --background-modifier-success: var(--color-green, #44CF6E);
  --background-primary: var(--custom-black-600, #1a1e24);
  --background-primary-active: var(--custom-black-500, #232830);
  --background-primary-alt: var(--custom-black-800, #14171b);
  --background-secondary: var(--custom-black-800, #14171b);
  --background-secondary-alt: var(--custom-black-950, #050708);
  --bases-cards-background: var(--background-primary, #1a1e24);
  --bases-cards-cover-background: var(--background-primary-alt, #14171b);
  --bases-group-heading-property-color: var(--text-muted, #bababa);
  --bases-table-cell-background-active: var(--background-primary, #1a1e24);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #14171b);
  --bases-table-cell-background-selected: var(--table-selection, hsla(254,
                80%,
                68%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #14171b);
  --bases-table-header-background: var(--background-primary, #1a1e24);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --bases-table-header-color: var(--text-muted, #bababa);
  --bases-table-summary-background: var(--background-primary, #1a1e24);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --black: #000000;
  --blockquote-background-color: var(--custom-black-700, #171a1f);
  --blockquote-border-color: var(--black, #000000);
  --blue-100: #dbeafe;
  --blue-200: #bfdbfe;
  --blue-300: #93c5fd;
  --blue-400: #60a5fa;
  --blue-50: #eff6ff;
  --blue-500: #3b82f6;
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;
  --blue-800: #1e40af;
  --blue-900: #1e3a8a;
  --bold-weight: var(--font-semibold, 600);
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-gap: 0.5rem;
  --callout-margin: 5px;
  --callout-min-width: 200px;
  --canvas-background: var(--background-primary, #1a1e24);
  --canvas-card-label-color: var(--text-faint, #666);
  --checkbox-border-color: var(--text-faint, #666);
  --checkbox-border-color-hover: var(--text-muted, #bababa);
  --checkbox-color: var(--interactive-accent, #d6ba7c);
  --checkbox-color-hover: var(--transparent, rgba(255, 255, 255, 0));
  --checkbox-marker-color: var(--custom-gold-950, #d6ba7c);
  --checkbox-size: var(--font-text-size, 15px);
  --checklist-done-color: var(--text-faint, #666);
  --checklist-done-decoration: none;
  --code-background: var(--background-primary-alt, #14171b);
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --code-comment: var(--text-faint, #666);
  --code-function: var(--color-yellow, #E0DE71);
  --code-important: var(--color-orange, #E9973F);
  --code-keyword: var(--color-pink, #FA99CD);
  --code-normal: var(--custom-gold-950, #d6ba7c);
  --code-property: var(--color-cyan, #53DFDD);
  --code-punctuation: var(--text-muted, #bababa);
  --code-string: var(--color-green, #44CF6E);
  --col-rule-color: var(--background-modifier-border, #363636);
  --col-rule-width: 1px;
  --collapse-icon-color: var(--text-normal, #dadada);
  --collapse-icon-color-collapsed: var(--white, #ffffff);
  --color-accent: var(--custom-gold-950, #d6ba7c);
  --color-accent-1: var(--custom-gold-2-500, #d6ba7c);
  --color-accent-2: var(--custom-gold-2-950, #ffdd93);
  --color-accent-hsl: var(--accent-h),
                var(--accent-s),
                var(--accent-l);
  --color-base-35: #3F3F3F;
  --color-base-40: #555;
  --color-base-50: #666;
  --color-base-60: #999;
  --color-base-70: #bababa;
  --color-cyan: #53DFDD;
  --color-green: #44CF6E;
  --color-orange: #E9973F;
  --color-pink: #FA99CD;
  --color-yellow: #E0DE71;
  --custom-active-page-shadow: inset 0px 0px 15px 8px var(--custom-black-850);
  --custom-admonition-border-color: var(--custom-black-950, #050708);
  --custom-background-tertiary: var(--custom-black-850, #0c0f11);
  --custom-black-100: #58606d;
  --custom-black-200: #4a525f;
  --custom-black-300: #2f3641;
  --custom-black-400: #252b33;
  --custom-black-500: #232830;
  --custom-black-600: #1a1e24;
  --custom-black-700: #171a1f;
  --custom-black-800: #14171b;
  --custom-black-850: #0c0f11;
  --custom-black-900: #090c0f;
  --custom-black-950: #050708;
  --custom-blockquote-border-accent-color: var(--custom-red-600, #963232);
  --custom-callout-background-color: var(--custom-black-700, #171a1f);
  --custom-checkbox-background-gradient-color-1-checked: var(--white, #ffffff);
  --custom-checkbox-background-gradient-color-2-checked: var(--custom-gold-950, #d6ba7c);
  --custom-checkbox-background-gradient-degree-checked: 45deg;
  --custom-checkbox-border-image-gradient-color-1-checked: var(--transparent, rgba(255, 255, 255, 0));
  --custom-checkbox-border-image-gradient-color-1-unchecked: var(--transparent, rgba(255, 255, 255, 0));
  --custom-checkbox-border-image-gradient-color-2-checked: var(--custom-red-600, #963232);
  --custom-checkbox-border-image-gradient-color-2-unchecked: var(--custom-red-600, #963232);
  --custom-checkbox-border-image-gradient-degree-checked: 45deg;
  --custom-checkbox-border-image-gradient-degree-unchecked: 45deg;
  --custom-code-border-color: var(--black, #000000);
  --custom-file-icon: var(--custom-white-200, #aab3ca);
  --custom-file-icon-hover: var(--custom-white-100, #dcddde);
  --custom-folder-file-icon-rename: var(--white, #ffffff);
  --custom-folder-icon-closed: var(--custom-red-600, #963232);
  --custom-folder-icon-hover: var(--custom-red-300, #b94a4a);
  --custom-folder-icon-open: var(--Red-Accent-1, #ad3939);
  --custom-font-size: 0.95em;
  --custom-formatting-link-edit-color: var(--custom-red-700, #752727);
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px var(--custom-black-800)) drop-shadow(0px 0px 2px var(--custom-black-800));
  --custom-gold-2-500: #d6ba7c;
  --custom-gold-2-750: #f3d28c;
  --custom-gold-2-950: #ffdd93;
  --custom-gold-250: #f1e4c8;
  --custom-gold-500: #e4d1aa;
  --custom-gold-750: #ddc48e;
  --custom-gold-950: #d6ba7c;
  --custom-gradientDegree: 135deg;
  --custom-grey-100: #d6deea;
  --custom-grey-250: #919191;
  --custom-grey-500: #414344;
  --custom-grey-750: #2a2c2d;
  --custom-grey-950: #121415;
  --custom-h1-gradiant-1: var(--custom-gold-2-950, #ffdd93);
  --custom-h1-gradiant-1-percent: 0;
  --custom-h1-gradiant-2: var(--red-400, #f87171);
  --custom-h1-gradiant-2-percent: 30%;
  --custom-h1-gradiant-inline-1-percent: 0;
  --custom-h1-gradiant-inline-2-percent: 100%;
  --custom-h2-gradiant-1: var(--red-300, #fca5a5);
  --custom-h2-gradiant-1-percent: 0;
  --custom-h2-gradiant-2: var(--pink-500, #ec4899);
  --custom-h2-gradiant-2-percent: 30%;
  --custom-h2-gradiant-inline-1-percent: 0;
  --custom-h2-gradiant-inline-2-percent: 100%;
  --custom-h3-gradiant-1: var(--pink-400, #f472b6);
  --custom-h3-gradiant-1-percent: 0;
  --custom-h3-gradiant-2: var(--fuchsia-500, #d946ef);
  --custom-h3-gradiant-2-percent: 30%;
  --custom-h3-gradiant-inline-1-percent: 0;
  --custom-h3-gradiant-inline-2-percent: 100%;
  --custom-h4-gradiant-1: var(--fuchsia-400, #e879f9);
  --custom-h4-gradiant-1-percent: 0;
  --custom-h4-gradiant-2: var(--blue-500, #3b82f6);
  --custom-h4-gradiant-2-percent: 30%;
  --custom-h4-gradiant-inline-1-percent: 0;
  --custom-h4-gradiant-inline-2-percent: 100%;
  --custom-h5-gradiant-1: var(--blue-400, #60a5fa);
  --custom-h5-gradiant-1-percent: 0;
  --custom-h5-gradiant-2: var(--cyan-300, #67e8f9);
  --custom-h5-gradiant-2-percent: 30%;
  --custom-h5-gradiant-inline-1-percent: 0;
  --custom-h5-gradiant-inline-2-percent: 100%;
  --custom-h6-gradiant-1: var(--cyan-200, #a5f3fc);
  --custom-h6-gradiant-1-percent: 0;
  --custom-h6-gradiant-2: var(--green-400, #4ade80);
  --custom-h6-gradiant-2-percent: 30%;
  --custom-h6-gradiant-inline-1-percent: 0;
  --custom-h6-gradiant-inline-2-percent: 100%;
  --custom-heading-filter-brightness: .9;
  --custom-heading-filter-contrast: 1.25;
  --custom-heading-filter-drop-shadow-blur: 6px;
  --custom-heading-filter-drop-shadow-color: black;
  --custom-heading-filter-saturate: 1.15;
  --custom-highlight-bg-color: var(--custom-red-900, #461818);
  --custom-inline-heading-border-color: var(--custom-black-950, #050708);
  --custom-inline-heading-border-style: solid;
  --custom-inline-heading-border-width: 1px;
  --custom-inline-heading-box-shadow-inset-blur: 0px;
  --custom-inline-heading-box-shadow-inset-color: var(--custom-white-200, #aab3ca);
  --custom-inline-heading-box-shadow-inset-width: 1px;
  --custom-inline-heading-box-shadow-outer-blur: 0px;
  --custom-inline-heading-box-shadow-outer-color: var(--custom-black-950, #050708);
  --custom-inline-heading-box-shadow-outer-width: 0px;
  --custom-inline-heading-color: var(--custom-black-800, #14171b);
  --custom-interactive-accent-active: var(--custom-gold-2-950, #ffdd93);
  --custom-link-background-color: var(--custom-red-900, #461818);
  --custom-link-box-shadow: inset 0px 0px 0px 1px var(--custom-white-100);
  --custom-link-edit-color: var(--custom-gold-2-950, #ffdd93);
  --custom-link-hover-animation-color-1: var(--white, #ffffff);
  --custom-link-hover-animation-color-2: var(--custom-white-200, #aab3ca);
  --custom-link-hover-animation-color-3: var(--custom-gold-950, #d6ba7c);
  --custom-link-radius: 4px;
  --custom-list-bullet-color: var(--custom-red-600, #963232);
  --custom-list-bullet-color-even: var(--custom-grey-250, #919191);
  --custom-list-bullet-content: "\\e802";
  --custom-list-bullet-family: var(--its, 'its');
  --custom-list-bullet-font-size: 16px;
  --custom-list-line-color-even: var(--custom-grey-250, #919191);
  --custom-list-line-color-odd: var(--custom-red-600, #963232);
  --custom-list-line-width: 2px;
  --custom-match-found-indicator-color: var(--white, #ffffff);
  --custom-no-match-found-input-color: var(--custom-red-600, #963232);
  --custom-no-match-found-input-color-hover: var(--custom-red-800, #521c1c);
  --custom-ol-list-font-weight: 500;
  --custom-ordered-list-bullet-color: var(--custom-gold-950, #d6ba7c);
  --custom-outliner-indent-lines-color: var(--custom-red-500, #ad3939);
  --custom-outliner-indent-lines-color-hover: var(--custom-gold-950, #d6ba7c);
  --custom-outliner-indent-lines-width: 1px;
  --custom-red-2-500: #aa3c5d;
  --custom-red-300: #b94a4a;
  --custom-red-300-hsl: 0, 44%, 51%;
  --custom-red-400: #b34141;
  --custom-red-400-hsl: 0, 47%, 48%;
  --custom-red-500: #ad3939;
  --custom-red-500-hsl: 0, 50%, 45%;
  --custom-red-600: #963232;
  --custom-red-600-hsl: 0, 50%, 39%;
  --custom-red-700: #752727;
  --custom-red-700-hsl: 0, 50%, 31%;
  --custom-red-800: #521c1c;
  --custom-red-800-hsl: 0, 49%, 22%;
  --custom-red-900: #461818;
  --custom-red-900-hsl: 0, 49%, 18%;
  --custom-scrollbar-acive-track: var(--custom-grey-950, #121415);
  --custom-scrollbar-height: 12px;
  --custom-scrollbar-thumb-bg-hover: var(--custom-gold-950, #d6ba7c);
  --custom-scrollbar-thumb-bg-window-inactive: var(--custom-grey-500, #414344);
  --custom-scrollbar-track-bg-hover: var(--custom-grey-950, #121415);
  --custom-scrollbar-track-bg-window-inactive: var(--custom-grey-950, #121415);
  --custom-scrollbar-width: 12px;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px var(--custom-black-900)) drop-shadow(0px 0px 2px var(--custom-black-900));
  --custom-tag-box-shadow-color: var(--custom-white-100, #dcddde);
  --custom-tag-hover-animation-color-1: var(--white, #ffffff);
  --custom-tag-hover-animation-color-2: var(--custom-white-200, #aab3ca);
  --custom-tag-hover-animation-color-3: var(--custom-gold-950, #d6ba7c);
  --custom-text-highlight-bg: rgba(168, 60, 60, 0.4);
  --custom-text-highlight-bg-active: rgba(253, 115, 115, 0.4);
  --custom-text-highlight-box-shadow-active: var(--custom-gold-2-950, #ffdd93);
  --custom-titlebar-drop-shadow: drop-shadow(0px 2px 3px black) drop-shadow(0px 2px 6px black);
  --custom-white-100: #dcddde;
  --custom-white-2-100: #f2f3f3;
  --custom-white-2-200: #e8eaeb;
  --custom-white-2-300: #dcddde;
  --custom-white-2-400: #cccfd1;
  --custom-white-2-500: #bfc2c4;
  --custom-white-2-600: #adb0b3;
  --custom-white-2-700: #9a9c9e;
  --custom-white-2-800: #87898b;
  --custom-white-2-900: #777b7e;
  --custom-white-200: #aab3ca;
  --cyan-100: #cffafe;
  --cyan-200: #a5f3fc;
  --cyan-300: #67e8f9;
  --cyan-400: #22d3ee;
  --cyan-50: #ecfeff;
  --cyan-500: #06b6d4;
  --cyan-600: #0891b2;
  --cyan-700: #0e7490;
  --cyan-800: #155e75;
  --cyan-900: #164e63;
  --dark: var(--text-muted, var(--color-base-70, #bababa));
  --darkgray: var(--text-muted, var(--color-base-70, #bababa));
  --divider-color-hover: var(--interactive-accent, #d6ba7c);
  --dropdown-background: var(--interactive-normal, #1e1e1e);
  --dropdown-background-hover: var(--interactive-hover, #242424);
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
      inset 0 0 0 1px var(--background-modifier-border);
  --embed-border-left: 2px solid var(--interactive-accent);
  --embed-border-right: none;
  --emerald-100: #d1fae5;
  --emerald-200: #a7f3d0;
  --emerald-300: #6ee7b7;
  --emerald-400: #34d399;
  --emerald-50: #ecfdf5;
  --emerald-500: #10b981;
  --emerald-600: #059669;
  --emerald-700: #047857;
  --emerald-800: #065f46;
  --emerald-900: #064e3b;
  --file-header-background: var(--background-primary, #1a1e24);
  --file-header-background-focused: var(--background-primary, #1a1e24);
  --file-margins: var(--size-4-8, 32px);
  --flair-background: var(--interactive-normal, #1e1e1e);
  --float-large-width: 600px;
  --float-medium-width: 400px;
  --float-small-width: 300px;
  --font: "Cuprum";
  --footnote-id-color: var(--text-muted, #bababa);
  --footnote-id-color-no-occurrences: var(--text-faint, #666);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.075));
  --fuchsia-100: #fae8ff;
  --fuchsia-200: #f5d0fe;
  --fuchsia-300: #f0abfc;
  --fuchsia-400: #e879f9;
  --fuchsia-50: #fdf4ff;
  --fuchsia-500: #d946ef;
  --fuchsia-600: #c026d3;
  --fuchsia-700: #a21caf;
  --fuchsia-800: #86198f;
  --fuchsia-900: #701a75;
  --graph-node: var(--text-muted, #bababa);
  --graph-node-attachment: var(--color-yellow, #E0DE71);
  --graph-node-focused: var(--text-accent, #d6ba7c);
  --graph-node-tag: var(--color-green, #44CF6E);
  --graph-node-unresolved: var(--text-faint, #666);
  --gray: var(--text-muted, var(--color-base-70, #bababa));
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-50: #f9fafb;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  --green-100: #dcfce7;
  --green-200: #bbf7d0;
  --green-300: #86efac;
  --green-400: #4ade80;
  --green-50: #f0fdf4;
  --green-500: #22c55e;
  --green-600: #16a34a;
  --green-700: #15803d;
  --green-800: #166534;
  --green-900: #14532d;
  --h1-size: 2em;
  --h2-size: 1.6em;
  --h2-weight: 700;
  --h3-size: 1.37em;
  --h3-weight: 700;
  --h4-size: 1.25em;
  --h4-weight: 700;
  --h5-size: 1.12em;
  --h5-weight: 700;
  --h6-size: 1.12em;
  --h6-weight: 700;
  --heading-formatting: var(--text-faint, #666);
  --highlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --highlight-mix-blend-mode: normal;
  --hr-color: var(--custom-gold-950, #d6ba7c);
  --icon-color: var(--text-muted, #bababa);
  --icon-color-active: var(--text-accent, #d6ba7c);
  --icon-color-hover: var(--custom-gold-950, #d6ba7c);
  --indigo-100: #e0e7ff;
  --indigo-200: #c7d2fe;
  --indigo-300: #a5b4fc;
  --indigo-400: #818cf8;
  --indigo-50: #eef2ff;
  --indigo-500: #6366f1;
  --indigo-600: #4f46e5;
  --indigo-700: #4338ca;
  --indigo-800: #3730a3;
  --indigo-900: #312e81;
  --inline-title-size: var(--h1-size, 2em);
  --input-date-separator: var(--text-faint, #666);
  --input-placeholder-color: var(--text-faint, #666);
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
            0 2px 4px 0 rgba(0, 0, 0, 0.15),
            0 1px 1.5px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.2),
            0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
            0 2px 3px 0 rgba(0, 0, 0, 0.3),
            0 1px 1.5px 0 rgba(0, 0, 0, 0.2),
            0 1px 2px 0 rgba(0, 0, 0, 0.4),
            0 0 0 0 transparent;
  --interactive-accent: var(--custom-gold-950, #d6ba7c);
  --interactive-accent-hover: var(--custom-gold-500, #e4d1aa);
  --interactive-accent-hsl: var(--color-accent-hsl, 254,
                80%,
                68%);
  --interactive-hover: var(--color-base-10, #242424);
  --interactive-normal: var(--color-base-00, #1e1e1e);
  --its: 'its';
  --light: var(--background-primary, var(--custom-black-600, #1a1e24));
  --lightgray: var(--background-secondary, var(--custom-black-800, #14171b));
  --lime-100: #ecfccb;
  --lime-200: #d9f99d;
  --lime-300: #bef264;
  --lime-400: #a3e635;
  --lime-50: #f7fee7;
  --lime-500: #84cc16;
  --lime-600: #65a30d;
  --lime-700: #4d7c0f;
  --lime-800: #3f6212;
  --lime-900: #365314;
  --link-color: var(--custom-white-100, #dcddde);
  --link-color-hover: var(--pure-white, rgb(255, 255, 255));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, #d6ba7c);
  --link-external-color-hover: var(--text-accent-hover, #ffdd93);
  --link-unresolved-color: var(--text-faint, #666);
  --list-bullet-size: 5px;
  --list-grid-min-width: 250px;
  --list-marker-color: var(--text-faint, transparent);
  --list-marker-color-collapsed: var(--text-accent, #d6ba7c);
  --list-marker-color-hover: var(--text-muted, #bababa);
  --list-min-width: 200px;
  --mcl-card-bg-color: var(--background-secondary, #14171b);
  --mcl-card-border-color: var(--background-modifier-border, #363636);
  --mcl-card-border-width: 1px;
  --mcl-card-gap: 0.2em;
  --mcl-card-header-border-width: 1px;
  --menu-background: var(--background-secondary, #14171b);
  --menu-border-color: var(--background-modifier-border-hover, #3F3F3F);
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-label-text-color: var(--text-muted, #bababa);
  --metadata-label-text-color-hover: var(--text-muted, #bababa);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --modal-background: var(--background-primary, #1a1e24);
  --modal-radius: var(--radius-l, 10px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #dadada);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #666);
  --nav-heading-color-collapsed: var(--text-faint, #666);
  --nav-heading-color-collapsed-hover: var(--text-muted, #bababa);
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-background-selected: hsla(var(--color-accent-hsl), 0.2);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: var(--text-muted, #bababa);
  --nav-item-color-highlighted: var(--text-accent-hover, #ffdd93);
  --nav-item-padding: var(--size-4-1) var(--size-4-2, 4px 8px);
  --nav-item-parent-padding: var(--nav-item-padding, 4px 8px);
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, #666);
  --nav-tag-color-active: var(--text-muted, #bababa);
  --nav-tag-color-hover: var(--text-muted, #bababa);
  --neutral-100: #f5f5f5;
  --neutral-200: #e5e5e5;
  --neutral-300: #d4d4d4;
  --neutral-400: #a3a3a3;
  --neutral-50: #fafafa;
  --neutral-500: #737373;
  --neutral-600: #525252;
  --neutral-700: #404040;
  --neutral-800: #262626;
  --neutral-900: #171717;
  --orange-100: #ffedd5;
  --orange-200: #fed7aa;
  --orange-300: #fdba74;
  --orange-400: #fb923c;
  --orange-50: #fff7ed;
  --orange-500: #f97316;
  --orange-600: #ea580c;
  --orange-700: #c2410c;
  --orange-800: #9a3412;
  --orange-900: #7c2d12;
  --pdf-background: var(--background-primary, #1a1e24);
  --pdf-page-background: var(--background-primary, #1a1e24);
  --pdf-sidebar-background: var(--background-primary, #1a1e24);
  --pill-border-color-hover: var(--background-modifier-border-hover, #3F3F3F);
  --pill-color: var(--text-muted, #bababa);
  --pill-color-remove: var(--text-faint, #666);
  --pill-color-remove-hover: var(--text-accent, #d6ba7c);
  --pink-100: #fce7f3;
  --pink-200: #fbcfe8;
  --pink-300: #f9a8d4;
  --pink-400: #f472b6;
  --pink-50: #fdf2f8;
  --pink-500: #ec4899;
  --pink-600: #db2777;
  --pink-700: #be185d;
  --pink-800: #9d174d;
  --pink-900: #831843;
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: var(--background-primary, #1a1e24);
  --pure-black: rgb(0, 0, 0);
  --pure-white: rgb(255, 255, 255);
  --purple-100: #f3e8ff;
  --purple-200: #e9d5ff;
  --purple-300: #d8b4fe;
  --purple-400: #c084fc;
  --purple-50: #faf5ff;
  --purple-500: #a855f7;
  --purple-600: #9333ea;
  --purple-700: #7e22ce;
  --purple-800: #6b21a8;
  --purple-900: #581c87;
  --radius-l: 10px;
  --raised-background: var(--blur-background, color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent)));
  --red-100: #fee2e2;
  --red-200: #fecaca;
  --red-300: #fca5a5;
  --red-400: #f87171;
  --red-50: #fef2f2;
  --red-500: #ef4444;
  --red-600: #dc2626;
  --red-700: #b91c1c;
  --red-800: #991b1b;
  --red-900: #7f1d1d;
  --ribbon-background: var(--custom-background-tertiary, #0c0f11);
  --ribbon-background-collapsed: var(--background-primary, #1a1e24);
  --rose-100: #ffe4e6;
  --rose-200: #fecdd3;
  --rose-300: #fda4af;
  --rose-400: #fb7185;
  --rose-50: #fff1f2;
  --rose-500: #f43f5e;
  --rose-600: #e11d48;
  --rose-700: #be123c;
  --rose-800: #9f1239;
  --rose-900: #881337;
  --scrollbar-active-thumb-bg: var(--custom-gold-950, #d6ba7c);
  --scrollbar-bg: var(--custom-grey-950, #121415);
  --scrollbar-radius: var(--radius-l, 10px);
  --scrollbar-thumb-bg: var(--custom-grey-500, #414344);
  --search-clear-button-color: var(--text-muted, #bababa);
  --search-icon-color: var(--text-muted, #bababa);
  --search-result-background: var(--background-primary, #1a1e24);
  --secondary: var(--text-accent, var(--color-accent, #d6ba7c));
  --setting-items-background: var(--background-primary-alt, #14171b);
  --setting-items-radius: var(--radius-l, 10px);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
            0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
            0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #bababa);
  --shiki-code-background: var(--code-background, #14171b);
  --shiki-code-comment: var(--text-faint, #666);
  --shiki-code-function: var(--color-green, #44CF6E);
  --shiki-code-important: var(--color-orange, #E9973F);
  --shiki-code-keyword: var(--color-pink, #FA99CD);
  --shiki-code-normal: var(--text-muted, #bababa);
  --shiki-code-property: var(--color-cyan, #53DFDD);
  --shiki-code-punctuation: var(--text-muted, #bababa);
  --shiki-code-string: var(--color-yellow, #E0DE71);
  --shiki-gutter-text-color: var(--text-faint, #666);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #bababa);
  --shiki-highlight-neutral: var(--shiki-code-normal, #bababa);
  --shiki-terminal-dots-color: var(--text-faint, #666);
  --sky-100: #e0f2fe;
  --sky-200: #bae6fd;
  --sky-300: #7dd3fc;
  --sky-400: #38bdf8;
  --sky-50: #f0f9ff;
  --sky-500: #0ea5e9;
  --sky-600: #0284c7;
  --sky-700: #0369a1;
  --sky-800: #075985;
  --sky-900: #0c4a6e;
  --slate-100: #f1f5f9;
  --slate-200: #e2e8f0;
  --slate-300: #cbd5e1;
  --slate-400: #94a3b8;
  --slate-50: #f8fafc;
  --slate-500: #64748b;
  --slate-600: #475569;
  --slate-700: #334155;
  --slate-800: #1e293b;
  --slate-900: #0f172a;
  --slider-thumb-border-color: var(--background-modifier-border-hover, #3F3F3F);
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --status-bar-background: var(--custom-background-tertiary, #0c0f11);
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 1px 0 1px 0px);
  --status-bar-radius: var(--radius-m, 0 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #bababa);
  --stone-100: #f5f5f4;
  --stone-200: #e7e5e4;
  --stone-300: #d6d3d1;
  --stone-400: #a8a29e;
  --stone-50: #fafaf9;
  --stone-500: #78716c;
  --stone-600: #57534e;
  --stone-700: #44403c;
  --stone-800: #292524;
  --stone-900: #1c1917;
  --suggestion-background: var(--background-primary, #1a1e24);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-2: var(--color-orange, #E9973F);
  --sync-avatar-color-3: var(--color-yellow, #E0DE71);
  --sync-avatar-color-4: var(--color-green, #44CF6E);
  --sync-avatar-color-5: var(--color-cyan, #53DFDD);
  --sync-avatar-color-8: var(--color-pink, #FA99CD);
  --tab-background-active: var(--background-primary, #1a1e24);
  --tab-container-background: var(--background-secondary, #14171b);
  --tab-divider-color: var(--background-modifier-border-hover, #3F3F3F);
  --tab-stacked-text-align: left;
  --tab-switcher-background: var(--background-secondary, #14171b);
  --tab-text-color: var(--text-muted, #bababa);
  --tab-text-color-active: var(--text-muted, #bababa);
  --tab-text-color-focused: var(--text-muted, #bababa);
  --tab-text-color-focused-active: var(--text-normal, #dadada);
  --tab-text-color-focused-highlighted: var(--text-accent, #d6ba7c);
  --table-border-color: var(--divider-color, #363636);
  --table-drag-handle-background-active: var(--table-selection-border-color, #d6ba7c);
  --table-drag-handle-color: var(--text-faint, #666);
  --table-drag-handle-color-active: var(--text-on-accent, #232830);
  --table-header-color: var(--white, #ffffff);
  --table-header-font: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --table-header-size: var(--font-smaller, 0.875em);
  --table-header-weight: var(--font-normal, 400);
  --table-selection-blend-mode: var(--highlight-mix-blend-mode, normal);
  --table-selection-border-color: var(--interactive-accent, #d6ba7c);
  --table-white-space: normal;
  --tag-background: var(--background-primary-alt, #14171b);
  --tag-background-hover: var(--background-primary-alt, #14171b);
  --tag-color: var(--custom-red-500, #ad3939);
  --tag-color-hover: var(--white, #ffffff);
  --tag-padding-x: 4px;
  --tag-padding-y: 2px;
  --tag-radius: 4px;
  --tag-size: var(--custom-font-size, 0.95em);
  --teal-100: #ccfbf1;
  --teal-200: #99f6e4;
  --teal-300: #5eead4;
  --teal-400: #2dd4bf;
  --teal-50: #f0fdfa;
  --teal-500: #14b8a6;
  --teal-600: #0d9488;
  --teal-700: #0f766e;
  --teal-800: #115e59;
  --teal-900: #134e4a;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #ffdd93));
  --text-accent: var(--color-accent, #d6ba7c);
  --text-accent-hover: var(--color-accent-2, #ffdd93);
  --text-faint: var(--color-base-50, #666);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: var(--color-base-70, #bababa);
  --text-on-accent: var(--background-primary-active, #232830);
  --text-selection: hsla(var(--custom-red-500-hsl), 0.25);
  --text-success: var(--color-green, #44CF6E);
  --text-warning: var(--color-orange, #E9973F);
  --textHighlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --titlebar-background: var(--custom-background-tertiary, #0c0f11);
  --titlebar-background-focused: var(--background-secondary-alt, #050708);
  --titlebar-text-color: var(--text-muted, #bababa);
  --titlebar-text-color-highlighted: var(--text-accent-hover, #ffdd93);
  --transparent: rgba(255, 255, 255, 0);
  --vault-name-color: var(--text-normal, #dadada);
  --vault-name-font-size: var(--font-ui-small, 13px);
  --vault-name-font-weight: var(--font-medium, 500);
  --violet-100: #ede9fe;
  --violet-200: #ddd6fe;
  --violet-300: #c4b5fd;
  --violet-400: #a78bfa;
  --violet-50: #f5f3ff;
  --violet-500: #8b5cf6;
  --violet-600: #7c3aed;
  --violet-700: #6d28d9;
  --violet-800: #5b21b6;
  --violet-900: #4c1d95;
  --white: #ffffff;
  --yellow-100: #fef9c3;
  --yellow-200: #fef08a;
  --yellow-300: #fde047;
  --yellow-400: #facc15;
  --yellow-50: #fefce8;
  --yellow-500: #eab308;
  --yellow-600: #ca8a04;
  --yellow-700: #a16207;
  --yellow-800: #854d0e;
  --yellow-900: #713f12;
  --zinc-100: #f4f4f5;
  --zinc-200: #e4e4e7;
  --zinc-300: #d4d4d8;
  --zinc-400: #a1a1aa;
  --zinc-50: #fafafa;
  --zinc-500: #71717a;
  --zinc-600: #52525b;
  --zinc-700: #3f3f46;
  --zinc-800: #27272a;
  --zinc-850: #1d1d20;
  --zinc-900: #18181b;
  --zinc-950: #0f0f11;
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #14171b);
  background-color: var(--tab-container-background, rgb(20, 23, 27));
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(26, 30, 36));
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(20, 23, 27));
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #14171b);
  background-color: var(--tab-container-background, rgb(20, 23, 27));
}`,
    typography: `html body .markdown-rendered > h1 {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h1-weight, 700);
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(218, 218, 218));
  content: "\\f2c7 ";
  font-family: var(--h1-font, "Font Awesome 6 Free Solid");
  font-size: var(--h1-size, 32px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.48px);
  line-height: var(--h1-line-height, 38.4px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(0, 0, 0, 0));
  border-color: rgba(0, 0, 0, 0);
}

html body li.task-list-item[data-task="!"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(150, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(150, 50, 50);
  border-left-width: 0px;
  border-right-color: rgb(150, 50, 50);
  border-right-width: 0px;
  border-top-color: rgb(150, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(150, 50, 50);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="*"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(145, 145, 145);
  border-left-width: 0px;
  border-right-color: rgb(145, 145, 145);
  border-right-width: 0px;
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(145, 145, 145);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="-"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(145, 145, 145);
  border-left-width: 0px;
  border-right-color: rgb(145, 145, 145);
  border-right-width: 0px;
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(145, 145, 145);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="/"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(145, 145, 145);
  border-left-width: 0px;
  border-right-color: rgb(145, 145, 145);
  border-right-width: 0px;
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(145, 145, 145);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="?"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(145, 145, 145);
  border-left-width: 0px;
  border-right-color: rgb(145, 145, 145);
  border-right-width: 0px;
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(145, 145, 145);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body p {
  color: var(--text-muted, rgb(186, 186, 186));
  font-family: Cuprum;
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--link-external-color, rgb(214, 186, 124));
  outline: rgb(214, 186, 124) none 0px;
  text-decoration-color: rgb(214, 186, 124);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  background-color: rgb(70, 24, 24);
  box-shadow: var(--custom-link-box-shadow, rgb(220, 221, 222) 0px 0px 0px 1px inset);
  color: var(--link-color, rgb(220, 221, 222));
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body a.internal-link.broken {
  background-color: rgb(70, 24, 24);
  box-shadow: var(--custom-link-box-shadow, rgb(220, 221, 222) 0px 0px 0px 1px inset);
  color: var(--link-unresolved-color, rgb(102, 102, 102));
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: rgba(139, 108, 239, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(139, 108, 239, 0.3));
}`,
    lists: `html body ul.overflow {
  border-bottom-color: rgb(214, 186, 124);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-top-color: rgb(214, 186, 124);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    blockquotes: `html body blockquote {
  background-color: var(--blockquote-background-color, rgb(23, 26, 31));
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html body table {
  width: 181.953px;
}

html body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgba(0, 0, 0, 0.15));
}

html body td {
  background-color: rgba(0, 0, 0, 0.15);
}

html body th {
  color: var(--table-header-color, rgb(255, 255, 255));
  font-weight: var(--table-header-weight, 400);
}`,
    code: `html body code {
  background-color: var(--code-background, rgb(20, 23, 27));
  border-bottom-color: rgb(214, 186, 124);
  border-bottom-width: 1px;
  border-left-color: rgb(214, 186, 124);
  border-left-width: 1px;
  border-right-color: rgb(214, 186, 124);
  border-right-width: 1px;
  border-top-color: rgb(214, 186, 124);
  border-top-width: 1px;
  color: var(--code-normal, rgb(214, 186, 124));
}

html body pre:has(> code) {
  background-color: var(--code-background, rgb(20, 23, 27));
}`,
    images: `html body figure {
  --code-background: var(--ec-frm-edBg, #14171b);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(20, 23, 27));
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html body .transclude {
  border-left-color: rgb(214, 186, 124);
}`,
    checkboxes: `html body html {
  --FA6Regular: 'Font Awesome 6 Free Regular';
  --FA6Solid: 'Font Awesome 6 Free Solid';
  --font: "";
  --its: 'its';
}

html body input[type=checkbox] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
  border-top-width: 3px;
  margin-bottom: 1px;
  margin-right: 1px;
  margin-top: 1px;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
  transition: transform 0.3s ease-in-out;
  width: var(--checkbox-size, 18px);
}

html body li.task-list-item[data-task=">"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(145, 145, 145);
  border-left-width: 0px;
  border-right-color: rgb(145, 145, 145);
  border-right-width: 0px;
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(145, 145, 145);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="I"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(145, 145, 145);
  border-left-width: 0px;
  border-right-color: rgb(145, 145, 145);
  border-right-width: 0px;
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(145, 145, 145);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="S"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(145, 145, 145);
  border-left-width: 0px;
  border-right-color: rgb(145, 145, 145);
  border-right-width: 0px;
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(145, 145, 145);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(102, 102, 102);
  text-decoration-line: none;
}

html body li.task-list-item[data-task="b"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(150, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(150, 50, 50);
  border-left-width: 0px;
  border-right-color: rgb(150, 50, 50);
  border-right-width: 0px;
  border-top-color: rgb(150, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(150, 50, 50);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="c"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(145, 145, 145);
  border-left-width: 0px;
  border-right-color: rgb(145, 145, 145);
  border-right-width: 0px;
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(145, 145, 145);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="d"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(150, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(150, 50, 50);
  border-left-width: 0px;
  border-right-color: rgb(150, 50, 50);
  border-right-width: 0px;
  border-top-color: rgb(150, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(150, 50, 50);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="f"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(150, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(150, 50, 50);
  border-left-width: 0px;
  border-right-color: rgb(150, 50, 50);
  border-right-width: 0px;
  border-top-color: rgb(150, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(150, 50, 50);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="i"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(145, 145, 145);
  border-left-width: 0px;
  border-right-color: rgb(145, 145, 145);
  border-right-width: 0px;
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(145, 145, 145);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="k"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(145, 145, 145);
  border-left-width: 0px;
  border-right-color: rgb(145, 145, 145);
  border-right-width: 0px;
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(145, 145, 145);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="l"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(150, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(150, 50, 50);
  border-left-width: 0px;
  border-right-color: rgb(150, 50, 50);
  border-right-width: 0px;
  border-top-color: rgb(150, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(150, 50, 50);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="p"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(150, 50, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(150, 50, 50);
  border-left-width: 0px;
  border-right-color: rgb(150, 50, 50);
  border-right-width: 0px;
  border-top-color: rgb(150, 50, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(150, 50, 50);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="u"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(145, 145, 145);
  border-left-width: 0px;
  border-right-color: rgb(145, 145, 145);
  border-right-width: 0px;
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(145, 145, 145);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="w"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: #363636;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(145, 145, 145);
  border-left-width: 0px;
  border-right-color: rgb(145, 145, 145);
  border-right-width: 0px;
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(145, 145, 145);
  content: "\\e802";
  font-family: its;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: -22px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(102, 102, 102);
  text-decoration-line: none;
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, #00b0ff);
  background: rgb(23, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--custom-callout-background-color, rgb(23, 26, 31));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 176, 255);
  border-left-width: 1px;
  border-right-color: rgb(0, 176, 255);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, #f50057);
  background: rgb(23, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--custom-callout-background-color, rgb(23, 26, 31));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(245, 0, 87);
  border-left-width: 1px;
  border-right-color: rgb(245, 0, 87);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, #ff1744);
  background: rgb(23, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--custom-callout-background-color, rgb(23, 26, 31));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(255, 23, 68);
  border-left-width: 1px;
  border-right-color: rgb(255, 23, 68);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, #7c4dff);
  background: rgb(23, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--custom-callout-background-color, rgb(23, 26, 31));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(124, 77, 255);
  border-left-width: 1px;
  border-right-color: rgb(124, 77, 255);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, #ff5252);
  background: rgb(23, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--custom-callout-background-color, rgb(23, 26, 31));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(255, 82, 82);
  border-left-width: 1px;
  border-right-color: rgb(255, 82, 82);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, #00b8d4);
  background: rgb(23, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--custom-callout-background-color, rgb(23, 26, 31));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 1px;
  border-right-color: rgb(0, 184, 212);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="multi-column"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--interactive-accent, #d6ba7c);
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: var(--custom-callout-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="multi-column-flex-height"] {
  --background-modifier-active-hover: hsla(254,
                80%,
                68%, 0.15);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #3F3F3F;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #44CF6E;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #1a1e24;
  --background-primary-active: #232830;
  --background-primary-alt: #14171b;
  --background-secondary: #14171b;
  --background-secondary-alt: #050708;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-background-color: #171a1f;
  --blockquote-border-color: #000000;
  --blur-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--interactive-accent, #d6ba7c);
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
  --canvas-background: #1a1e24;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bababa;
  --checkbox-color: #d6ba7c;
  --checkbox-color-hover: rgba(255, 255, 255, 0);
  --checkbox-marker-color: #d6ba7c;
  --checkbox-radius: 4px;
  --checkbox-size: 15px;
  --checklist-done-color: #666;
  --clickable-icon-radius: 4px;
  --code-background: #14171b;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #666;
  --code-function: #E0DE71;
  --code-important: #E9973F;
  --code-keyword: #FA99CD;
  --code-normal: #d6ba7c;
  --code-operator: #fb464c;
  --code-property: #53DFDD;
  --code-punctuation: #bababa;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44CF6E;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: #363636;
  --collapse-icon-color: #dadada;
  --collapse-icon-color-collapsed: #ffffff;
  --color-accent: #d6ba7c;
  --color-accent-1: #d6ba7c;
  --color-accent-2: #ffdd93;
  --color-accent-hsl: 254,
                80%,
                68%;
  --custom-active-page-shadow: inset 0px 0px 15px 8px #0c0f11;
  --custom-admonition-border-color: #050708;
  --custom-background-tertiary: #0c0f11;
  --custom-blockquote-border-accent-color: #963232;
  --custom-callout-background-color: #171a1f;
  --custom-checkbox-background-gradient-color-1-checked: #ffffff;
  --custom-checkbox-background-gradient-color-2-checked: #d6ba7c;
  --custom-checkbox-border-image-gradient-color-1-checked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-1-unchecked: rgba(255, 255, 255, 0);
  --custom-checkbox-border-image-gradient-color-2-checked: #963232;
  --custom-checkbox-border-image-gradient-color-2-unchecked: #963232;
  --custom-code-border-color: #000000;
  --custom-file-icon: #aab3ca;
  --custom-file-icon-hover: #dcddde;
  --custom-folder-file-icon-rename: #ffffff;
  --custom-folder-icon-closed: #963232;
  --custom-folder-icon-hover: #b94a4a;
  --custom-folder-icon-open: #ad3939;
  --custom-formatting-link-edit-color: #752727;
  --custom-global-drop-shadow: drop-shadow(2px 2px 1px #14171b) drop-shadow(0px 0px 2px #14171b);
  --custom-h1-gradiant-1: #ffdd93;
  --custom-h1-gradiant-2: #f87171;
  --custom-h2-gradiant-1: #fca5a5;
  --custom-h2-gradiant-2: #ec4899;
  --custom-h3-gradiant-1: #f472b6;
  --custom-h3-gradiant-2: #d946ef;
  --custom-h4-gradiant-1: #e879f9;
  --custom-h4-gradiant-2: #3b82f6;
  --custom-h5-gradiant-1: #60a5fa;
  --custom-h5-gradiant-2: #67e8f9;
  --custom-h6-gradiant-1: #a5f3fc;
  --custom-h6-gradiant-2: #4ade80;
  --custom-highlight-bg-color: #461818;
  --custom-inline-heading-border-color: #050708;
  --custom-inline-heading-box-shadow-inset-color: #aab3ca;
  --custom-inline-heading-box-shadow-outer-color: #050708;
  --custom-inline-heading-color: #14171b;
  --custom-interactive-accent-active: #ffdd93;
  --custom-link-background-color: #461818;
  --custom-link-box-shadow: inset 0px 0px 0px 1px #dcddde;
  --custom-link-edit-color: #ffdd93;
  --custom-link-hover-animation-color-1: #ffffff;
  --custom-link-hover-animation-color-2: #aab3ca;
  --custom-link-hover-animation-color-3: #d6ba7c;
  --custom-list-bullet-color: #963232;
  --custom-list-bullet-color-even: #919191;
  --custom-list-bullet-family: 'its';
  --custom-list-line-color-even: #919191;
  --custom-list-line-color-odd: #963232;
  --custom-match-found-indicator-color: #ffffff;
  --custom-no-match-found-input-color: #963232;
  --custom-no-match-found-input-color-hover: #521c1c;
  --custom-ordered-list-bullet-color: #d6ba7c;
  --custom-outliner-indent-lines-color: #ad3939;
  --custom-outliner-indent-lines-color-hover: #d6ba7c;
  --custom-scrollbar-acive-track: #121415;
  --custom-scrollbar-thumb-bg-hover: #d6ba7c;
  --custom-scrollbar-thumb-bg-window-inactive: #414344;
  --custom-scrollbar-track-bg-hover: #121415;
  --custom-scrollbar-track-bg-window-inactive: #121415;
  --custom-statusbar-drop-shadow: drop-shadow(2px 2px 1px #090c0f) drop-shadow(0px 0px 2px #090c0f);
  --custom-tag-box-shadow-color: #dcddde;
  --custom-tag-hover-animation-color-1: #ffffff;
  --custom-tag-hover-animation-color-2: #aab3ca;
  --custom-tag-hover-animation-color-3: #d6ba7c;
  --custom-text-highlight-box-shadow-active: #ffdd93;
  --divider-color: #363636;
  --divider-color-hover: #d6ba7c;
  --divider-vertical-height: 100%;
  --dropdown-background: #1e1e1e;
  --dropdown-background-hover: #242424;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1e1e1e;
  --flair-color: #dadada;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3F3F3F;
  --graph-node: #bababa;
  --graph-node-attachment: #E0DE71;
  --graph-node-focused: #d6ba7c;
  --graph-node-tag: #44CF6E;
  --graph-node-unresolved: #666;
  --graph-text: #dadada;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #666;
  --heading-spacing: 2.5rem;
  --hr-color: #d6ba7c;
  --interactive-accent: #d6ba7c;
  --interactive-accent-hover: #e4d1aa;
  --interactive-accent-hsl: 254,
                80%,
                68%;
  --interactive-hover: #242424;
  --interactive-normal: #1e1e1e;
  --link-color: #dcddde;
  --link-color-hover: rgb(255, 255, 255);
  --link-external-color: #d6ba7c;
  --link-external-color-hover: #ffdd93;
  --link-unresolved-color: #666;
  --link-unresolved-decoration-color: hsla(254,
                80%,
                68%, 0.3);
  --link-weight: 400;
  --list-indent: 2em;
  --mcl-card-bg-color: #14171b;
  --mcl-card-border-color: #363636;
  --menu-background: #14171b;
  --menu-border-color: #3F3F3F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
            0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
            0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1a1e24;
  --pdf-page-background: #1a1e24;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1a1e24;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1e1e1e 65%, transparent) linear-gradient(#1e1e1e, color-mix(in srgb, #1e1e1e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: #d6ba7c;
  --scrollbar-bg: #121415;
  --scrollbar-radius: 10px;
  --scrollbar-thumb-bg: #414344;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #1a1e24;
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #14171b;
  --setting-items-border-color: #363636;
  --setting-items-padding: 20px;
  --setting-items-radius: 10px;
  --shiki-active-tab-border-color: #bababa;
  --shiki-code-background: #14171b;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666;
  --shiki-code-function: #44CF6E;
  --shiki-code-important: #E9973F;
  --shiki-code-keyword: #FA99CD;
  --shiki-code-normal: #bababa;
  --shiki-code-property: #53DFDD;
  --shiki-code-punctuation: #bababa;
  --shiki-code-string: #E0DE71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666;
  --shiki-gutter-text-color-highlight: #bababa;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #bababa;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1a1e24;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #E9973F;
  --sync-avatar-color-3: #E0DE71;
  --sync-avatar-color-4: #44CF6E;
  --sync-avatar-color-5: #53DFDD;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #FA99CD;
  --tab-background-active: #1a1e24;
  --tab-divider-color: #3F3F3F;
  --tab-font-size: 13px;
  --tab-outline-color: #363636;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #14171b;
  --tab-switcher-menubar-background: linear-gradient(to top, #14171b, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d6ba7c;
  --tab-text-color: #bababa;
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: #d6ba7c;
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #d6ba7c;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #232830;
  --table-header-background: transparent;
  --table-header-border-color: #363636;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --table-header-size: 0.875em;
  --table-header-weight: 400;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(254,
                80%,
                68%, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: #d6ba7c;
  --tag-background: #14171b;
  --tag-background-hover: #14171b;
  --tag-border-color: hsla(254,
                80%,
                68%, 0.15);
  --tag-border-color-hover: hsla(254,
                80%,
                68%, 0.15);
  --tag-color: #ad3939;
  --tag-color-hover: #ffffff;
  --tag-size: 0.95em;
  --text-accent: #d6ba7c;
  --text-accent-hover: #ffdd93;
  --text-error: #fb464c;
  --text-faint: #666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #bababa;
  --text-normal: #dadada;
  --text-on-accent: #232830;
  --text-selection: hsla(0, 50%, 45%, 0.25);
  --text-success: #44CF6E;
  --text-warning: #E9973F;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unstacked-tabs-header-width: 6px;
  background-color: var(--custom-callout-background-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .callout[data-callout="note"] {
  --callout-color: var(--interactive-accent, #d6ba7c);
  background: rgb(23, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--custom-callout-background-color, rgb(23, 26, 31));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(214, 186, 124);
  border-left-width: 1px;
  border-right-color: rgb(214, 186, 124);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, #64dd17);
  background: rgb(23, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--custom-callout-background-color, rgb(23, 26, 31));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(100, 221, 23);
  border-left-width: 1px;
  border-right-color: rgb(100, 221, 23);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, #9e9e9e);
  background: rgb(23, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--custom-callout-background-color, rgb(23, 26, 31));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 1px;
  border-right-color: rgb(158, 158, 158);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, #00c853);
  background: rgb(23, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--custom-callout-background-color, rgb(23, 26, 31));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 200, 83);
  border-left-width: 1px;
  border-right-color: rgb(0, 200, 83);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, #00bfa5);
  background: rgb(23, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--custom-callout-background-color, rgb(23, 26, 31));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 191, 165);
  border-left-width: 1px;
  border-right-color: rgb(0, 191, 165);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, #00b8d4);
  background: rgb(23, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--custom-callout-background-color, rgb(23, 26, 31));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 1px;
  border-right-color: rgb(0, 184, 212);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, #ff9100);
  background: rgb(23, 26, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--custom-callout-background-color, rgb(23, 26, 31));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(255, 145, 0);
  border-left-width: 1px;
  border-right-color: rgb(255, 145, 0);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: #d6ba7c;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: var(--text-normal, rgb(218, 218, 218));
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(218, 218, 218));
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="multi-column-flex-height"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(20, 23, 27);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: Inter, sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(26, 30, 36));
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: var(--custom-link-box-shadow, rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(20, 23, 27);
  border-bottom-color: rgb(54, 54, 54);
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-style: solid;
  border-top-width: 1px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, #14171b);
  --pill-background-hover: var(--tag-background-hover, #14171b);
  --pill-border-color: var(--tag-border-color, hsla(254,
                80%,
                68%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(254,
                80%,
                68%, 0.15));
  --pill-color: var(--tag-color, #ad3939);
  --pill-color-hover: var(--tag-color-hover, #ffffff);
  --pill-color-remove: var(--tag-color, #ad3939);
  --pill-color-remove-hover: var(--tag-color-hover, #ffffff);
  --pill-padding-x: var(--tag-padding-x, 4px);
  --pill-padding-y: var(--tag-padding-y, 2px);
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgb(20, 23, 27));
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body a.internal-link.tag-link::before {
  color: rgb(173, 57, 57);
}

html body h1.article-title {
  font-size: var(--inline-title-size, 32px);
}

html body h1::after {
  --font-weight: var(--h1-weight, 700);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(218, 218, 218));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 700px;
}

html body h2 {
  --font-weight: var(--h2-weight, 700);
}

html body h2.page-title, html h2.page-title a::after {
  background: rgb(214, 186, 124) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(214, 186, 124);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(218, 218, 218));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 700px;
}

html body h2::after {
  --font-weight: var(--h2-weight, 700);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(218, 218, 218));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 642.203px;
}

html body h3 {
  --font-weight: var(--h3-weight, 700);
}

html body h3::after {
  --font-weight: var(--h3-weight, 700);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(218, 218, 218));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 608.406px;
}

html body h4 {
  --font-weight: var(--h4-weight, 700);
}

html body h4::after {
  --font-weight: var(--h4-weight, 700);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(218, 218, 218));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 574.609px;
}

html body h5 {
  --font-weight: var(--h5-weight, 700);
}

html body h5::after {
  --font-weight: var(--h5-weight, 700);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(218, 218, 218));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 540.812px;
}

html body h6 {
  --font-weight: var(--h6-weight, 700);
}

html body h6::after {
  --font-weight: var(--h6-weight, 700);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(218, 218, 218));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 507px;
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--interactive-accent, #d6ba7c);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(214, 186, 124);
  border-left-width: 1px;
  border-right-color: rgb(214, 186, 124);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 1px;
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(186, 186, 186));
  font-family: Cuprum;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(186, 186, 186));
  font-family: Cuprum;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: var(--icon-color, rgb(186, 186, 186));
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgb(12, 15, 17));
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-top-left-radius: 0px;
  color: var(--status-bar-text-color, rgb(186, 186, 186));
  font-family: Cuprum;
}

html body footer ul li a {
  color: rgb(186, 186, 186);
}`,
    recentNotes: `html body .recent-notes > h3 {
  font-family: Cuprum;
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(186, 186, 186));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 186, 186);
  font-family: Cuprum;
}`,
    listPage: `html body li.section-li > .section .meta {
  color: rgb(186, 186, 186);
  font-family: Cuprum;
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(186, 186, 186));
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: var(--icon-color, rgb(186, 186, 186));
}

html body .darkmode svg {
  color: rgb(186, 186, 186);
  stroke: rgb(186, 186, 186);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    canvas: `html body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(20, 23, 27));
  box-shadow: var(--custom-link-box-shadow, rgba(255, 255, 255, 0.09) 0px 0.5px 0.5px 0.5px inset, rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1.5px 0px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px);
}`,
    bases: `html body .bases-table thead th {
  color: var(--table-header-color, rgb(255, 255, 255));
  font-weight: var(--table-header-weight, 400);
}`,
    properties: `html body .metadata {
  color: var(--text-muted, rgb(186, 186, 186));
}

html body .metadata-properties {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html body .note-properties-key {
  color: rgb(186, 186, 186);
}

html body .note-properties-row {
  border-color: rgb(186, 186, 186);
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, #14171b);
  --pill-background-hover: var(--tag-background-hover, #14171b);
  --pill-border-color: var(--tag-border-color, hsla(254,
                80%,
                68%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(254,
                80%,
                68%, 0.15));
  --pill-color: var(--tag-color, #ad3939);
  --pill-color-hover: var(--tag-color-hover, #ffffff);
  --pill-color-remove: var(--tag-color, #ad3939);
  --pill-color-remove-hover: var(--tag-color-hover, #ffffff);
  --pill-padding-x: var(--tag-padding-x, 4px);
  --pill-padding-y: var(--tag-padding-y, 2px);
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgb(20, 23, 27));
  border-radius: 4px;
  color: var(--pill-color, rgb(173, 57, 57));
}

html body .note-properties-value {
  color: rgb(186, 186, 186);
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(26, 30, 36));
}

html body ol.overflow {
  border-bottom-color: rgb(214, 186, 124);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-top-color: rgb(214, 186, 124);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(20, 23, 27));
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(12, 15, 17));
}`,
    misc: `html body .navigation-progress {
  background-color: var(--status-bar-background, rgb(12, 15, 17));
}

html body input[type=text] {
  background-color: rgb(20, 23, 27);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-width: 1px;
  color: var(--text-normal, rgb(186, 186, 186));
  font-family: Inter, sans-serif;
}

html body kbd {
  background-color: var(--code-background, rgb(20, 23, 27));
  border-bottom-color: rgb(214, 186, 124);
  border-left-color: rgb(214, 186, 124);
  border-right-color: rgb(214, 186, 124);
  border-top-color: rgb(214, 186, 124);
  color: var(--code-normal, rgb(214, 186, 124));
}

html body ul.tags > li {
  background-color: var(--tag-background, rgb(20, 23, 27));
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--tag-color, rgb(173, 57, 57));
}`,
  },
  light: {},
  classSettings: {
    "font-Cuprum": {
      general: `body.font-Cuprum {
--font: "Cuprum";
}`,
    },
    "font-Kreon": {
      general: `body.font-Kreon {
--font: "Kreon";
}`,
    },
    "font-Roboto-Condensed": {
      general: `body.font-Roboto-Condensed {
--font: "Roboto Condensed";
}`,
    },
    "font-Gemunu-Libre": {
      general: `body.font-Gemunu-Libre {
--font: "Gemunu Libre";
}`,
    },
    gradientBulletPointLines: {
      general: `.gradientBulletPointLines li {
border-image:linear-gradient(-180deg, var(--custom-red-900) 0%, var(--custom-red-900) 5%, var(--custom-red-700) 50%, var(--custom-red-700) 100%) 1;
}

.gradientBulletPointLines li:nth-child(even) {
border-image:linear-gradient(-180deg, var(--custom-red-700) 0%, var(--custom-red-700) 5%, var(--custom-grey-250) 25%, var(--custom-grey-250) 75%, var(--custom-red-900) 95%, var(--custom-red-900) 100%) 1;
}

.gradientBulletPointLines li:nth-child(even):last-child {
border-image:linear-gradient(-180deg, var(--custom-red-700) 0%, var(--custom-red-700) 5%, var(--custom-grey-250) 25%, var(--custom-grey-250) 75%, var(--custom-grey-250) 95%, var(--custom-grey-250) 100%) 1;
}`,
    },
    headerIcons: {
      general: `.headerIcons .markdown-preview-view h1:before, .headerIcons .cm-header.cm-header-1:not(.cm-formatting-header):not(.cm-formatting):before {
font-family: var(--FA6Solid);
content: "\\f2c7\\ ";
}

.headerIcons .markdown-preview-view h2:before, .headerIcons .cm-header.cm-header-2:not(.cm-formatting-header):not(.cm-formatting):before {
font-family: var(--FA6Solid);
content: "\\f2c8\\ ";
}

.headerIcons .markdown-preview-view h3:before, .headerIcons .cm-header.cm-header-3:not(.cm-formatting-header):not(.cm-formatting):before {
font-family: var(--FA6Solid);
content: "\\f2c9\\ ";
}

.headerIcons .markdown-preview-view h4:before, .headerIcons .cm-header.cm-header-4:not(.cm-formatting-header):not(.cm-formatting):before {
font-family: var(--FA6Solid);
content: "\\f2ca\\ ";
}

.headerIcons .markdown-preview-view h5:before, .headerIcons .cm-header.cm-header-5:not(.cm-formatting-header):not(.cm-formatting):before {
font-family: var(--FA6Solid);
content: "\\f2ca\\ ";
}

.headerIcons .markdown-preview-view h6:before, .headerIcons .cm-header.cm-header-6:not(.cm-formatting-header):not(.cm-formatting):before {
font-family: var(--FA6Solid);
content: "\\f2cb\\ ";
}`,
    },
    folderIcons: {
      general: `.folderIcons .nav-folder-children .nav-folder .nav-folder-title-content::before {
content: '\\e801';
color: var(--custom-folder-icon-open);
}

.folderIcons .nav-folder.is-collapsed .nav-folder-title-content:before {
color: var(--custom-folder-icon-closed);
}

.folderIcons .nav-folder > .nav-folder-title:hover > .nav-folder-title-content::before {
color: var(--custom-folder-icon-hover);
}

.folderIcons .file-tree-plugin-view .oz-folder-element .oz-icon-div::before {
content: '\\e801';
color: var(--custom-folder-icon-open);
}

.folderIcons .file-tree-plugin-view .oz-folder-element:hover .oz-icon-div::before {
color: var(--custom-folder-icon-hover);
}`,
    },
    fileIcons: {
      general: `.fileIcons .nav-file-icon::before {
content: '\\e800';
text-align: center;
color: var(--custom-file-icon);
font-family: 'its';
margin-right: 6px;
vertical-align: top;
font-size: 13px;
font-weight: 10 !important;
}

.fileIcons .nav-folder-children .nav-file-title > .nav-file-title-content::before {
content: '\\e800';
text-align: center;
color: var(--custom-file-icon);
}

.fileIcons .nav-file-title:hover > .nav-file-title-content::before {
color: var(--custom-file-icon-hover);
}

.fileIcons .file-tree-plugin-view .oz-nav-file-title .oz-nav-file-title-content::before {
content: '\\e800';
text-align: center;
color: var(--custom-file-icon);
}

.fileIcons .file-tree-plugin-view .oz-nav-file-title:hover .oz-nav-file-title-content::before {
color: var(--custom-file-icon-hover);
}`,
    },
    vaultTitle: {
      general: `.vaultTitle .nav-folder.mod-root > .nav-folder-title {
border-left: 5px solid var(--custom-background-tertiary);
border-top: 5px solid var(--interactive-accent);
border-right: 5px solid var(--interactive-accent);
border-bottom: 5px solid var(--interactive-accent);
box-shadow: inset 0px 15px 0px 22px var(--custom-background-tertiary);
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
background: linear-gradient(90deg, #ffffff 0%, var(--interactive-accent) 55%, var(--interactive-accent) 100%);
justify-content: center;
/* color: #ffffff; */
/* animation-name: text-shadow_color_change_V2;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate; */
padding: 10px 0px;
position: relative;
margin-left: -12px;
margin-right: -12px;
}`,
    },
    stackedPanes: {
      general: `.stackedPanes .mod-root.workspace-split.mod-vertical .mod-stacked > .workspace-tab-container {
--unstacked-tabs-header-width: 6px;
/* <- 36px is the header height in the default theme */
}

.stackedPanes .mod-root.workspace-split.mod-vertical .mod-stacked > .workspace-tab-container > div.workspace-leaf {
/* NOTE For Some Reason We Cant Use var(--stacked-tabs-header-width) Here - So We Need To Manually Type Value Of 40px*/
min-width: calc(var(--Minimum-Page-Width) - 40px)!important;
position:sticky;
left:0;
}

.stackedPanes .mod-root.workspace-split.mod-vertical .mod-stacked > .workspace-tab-container > div.workspace-tab-header {
position:sticky;
}

.stackedPanes .mod-root.workspace-split.mod-vertical .mod-stacked > .workspace-tab-container > div.workspace-leaf:nth-child(8n-6) {
left: calc(var(--stacked-tabs-header-width) * 1)!important;
/* background-color: green;  */
z-index: 7;
}

.stackedPanes .mod-root.workspace-split.mod-vertical .mod-stacked > .workspace-tab-container > div.workspace-leaf:nth-child(8n-4) {
left: calc(var(--stacked-tabs-header-width) * 2)!important;
/* background-color: red;  */
z-index: 5;
}

.stackedPanes .mod-root.workspace-split.mod-vertical .mod-stacked > .workspace-tab-container > div.workspace-leaf:nth-child(8n-2) {
left: calc(var(--stacked-tabs-header-width) * 3)!important;
/* background-color: purple;  */
z-index: 3;
}

.stackedPanes .mod-root.workspace-split.mod-vertical .mod-stacked > .workspace-tab-container > div.workspace-leaf:nth-child(8n+0) {
left: calc(var(--stacked-tabs-header-width) * 4)!important;
/* background-color: orange;  */
z-index: 1;
}

.stackedPanes .mod-root.workspace-split.mod-vertical .mod-stacked > .workspace-tab-container > div.workspace-tab-header:nth-child(8n-7) {
left: calc(40px * 0)!important;
right: calc(700px - var(--stacked-tabs-header-width) * 0)!important;
right: 0px!important;
/* background-color: green; */
z-index: 8;
/* NOTE Nudge Every 1st Pane Off The Edge So That It's Not Visible Until It Is Scrolled Into View*/
right: - var(--stacked-tabs-header-width)!important;
}

.stackedPanes .mod-root.workspace-split.mod-vertical .mod-stacked > .workspace-tab-container > div.workspace-tab-header:nth-child(8n-5) {
left: calc(40px * 1)!important;
right: calc(700px - var(--stacked-tabs-header-width) * 1)!important;
right: 0px!important;
/* background-color: red; */
z-index: 6;
}

.stackedPanes .mod-root.workspace-split.mod-vertical .mod-stacked > .workspace-tab-container > div.workspace-tab-header:nth-child(8n-3) {
left: calc(40px * 2)!important;
right: calc(700px - var(--stacked-tabs-header-width) * 2)!important;
right: 0px!important;
/* background-color: purple; */
z-index: 4;
}

.stackedPanes .mod-root.workspace-split.mod-vertical .mod-stacked > .workspace-tab-container > div.workspace-tab-header:nth-child(8n-1) {
left: calc(40px * 3)!important;
right: calc(700px - var(--stacked-tabs-header-width) * 3)!important;
right: 0px!important;
/* background-color: orange; */
z-index: 2;
}

.stackedPanes .mod-root.workspace-split.mod-vertical > div {
min-width: calc(var(--Minimum-Page-Width) + var(--unstacked-tabs-header-width));
/* <-- 700px is the default theme's "readable" max-width */
box-shadow: 0px 0px 20px 20px rgba(0,0,0,0.35);
position:sticky;
left:0;
z-index: 1;
}

.stackedPanes .mod-root.workspace-split.mod-vertical > div:nth-child(10n-8) {
left: calc(var(--unstacked-tabs-header-width) * 0);
}

.stackedPanes .mod-root.workspace-split.mod-vertical > div:nth-child(10n-7) {
left: calc(var(--unstacked-tabs-header-width) * 1);
}

.stackedPanes .mod-root.workspace-split.mod-vertical > div:nth-child(10n-6) {
left: calc(var(--unstacked-tabs-header-width) * 2);
}

.stackedPanes .mod-root.workspace-split.mod-vertical > div:nth-child(10n-5) {
left: calc(var(--unstacked-tabs-header-width) * 3);
}

.stackedPanes .mod-root.workspace-split.mod-vertical > div:nth-child(10n-4) {
left: calc(var(--unstacked-tabs-header-width) * 4);
}

.stackedPanes .mod-root.workspace-split.mod-vertical > div:nth-child(10n-3) {
left: calc(var(--unstacked-tabs-header-width) * 5);
}

.stackedPanes .mod-root.workspace-split.mod-vertical > div:nth-child(10n-2) {
left: calc(var(--unstacked-tabs-header-width) * 6);
}

.stackedPanes .mod-root.workspace-split.mod-vertical > div:nth-child(10n-1) {
left: calc(var(--unstacked-tabs-header-width) * 7);
}

.stackedPanes .mod-root.workspace-split.mod-vertical > div:nth-child(10n+0) {
left: calc(var(--unstacked-tabs-header-width) * 8);
}

.stackedPanes .mod-root.workspace-split.mod-vertical > div:nth-child(10n+1) {
left: calc(var(--unstacked-tabs-header-width) * 9);
}

.stackedPanes .mod-root.workspace-split.mod-vertical .workspace-split.mod-horizontal .workspace-split.mod-vertical > div {
min-width: calc(var(--Minimum-Page-Width) + var(--unstacked-tabs-header-width));
box-shadow: 0px 0px 20px 20px rgba(0,0,0,0.25);
position:sticky;
left:0;
}

.stackedPanes .mod-root.workspace-split.mod-vertical .workspace-split.mod-horizontal .workspace-split.mod-vertical > div:nth-child(10n-8) {
left: calc(var(--unstacked-tabs-header-width) * 0);
}

.stackedPanes .mod-root.workspace-split.mod-vertical .workspace-split.mod-horizontal .workspace-split.mod-vertical > div:nth-child(10n-7) {
left: calc(var(--unstacked-tabs-header-width) * 1);
}

.stackedPanes .mod-root.workspace-split.mod-vertical .workspace-split.mod-horizontal .workspace-split.mod-vertical > div:nth-child(10n-6) {
left: calc(var(--unstacked-tabs-header-width) * 2);
}

.stackedPanes .mod-root.workspace-split.mod-vertical .workspace-split.mod-horizontal .workspace-split.mod-vertical > div:nth-child(10n-5) {
left: calc(var(--unstacked-tabs-header-width) * 3);
}

.stackedPanes .mod-root.workspace-split.mod-vertical .workspace-split.mod-horizontal .workspace-split.mod-vertical > div:nth-child(10n-4) {
left: calc(var(--unstacked-tabs-header-width) * 4);
}

.stackedPanes .mod-root.workspace-split.mod-vertical .workspace-split.mod-horizontal .workspace-split.mod-vertical > div:nth-child(10n-3) {
left: calc(var(--unstacked-tabs-header-width) * 5);
}

.stackedPanes .mod-root.workspace-split.mod-vertical .workspace-split.mod-horizontal .workspace-split.mod-vertical > div:nth-child(10n-2) {
left: calc(var(--unstacked-tabs-header-width) * 6);
}

.stackedPanes .mod-root.workspace-split.mod-vertical .workspace-split.mod-horizontal .workspace-split.mod-vertical > div:nth-child(10n-1) {
left: calc(var(--unstacked-tabs-header-width) * 7);
}

.stackedPanes .mod-root.workspace-split.mod-vertical .workspace-split.mod-horizontal .workspace-split.mod-vertical > div:nth-child(10n+0) {
left: calc(var(--unstacked-tabs-header-width) * 8);
}

.stackedPanes .mod-root.workspace-split.mod-vertical .workspace-split.mod-horizontal .workspace-split.mod-vertical > div:nth-child(10n+1) {
left: calc(var(--unstacked-tabs-header-width) * 9);
}

.stackedPanes .mod-root.workspace-split.mod-vertical .workspace-split.mod-horizontal .workspace-split.mod-vertical > .workspace-leaf-resize-handle {
/* width: calc((700px + var(--unstacked-tabs-header-width)) * 20); */
/* right: 0!important; */
}`,
    },
  },
};
