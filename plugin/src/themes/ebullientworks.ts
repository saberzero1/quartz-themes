import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ebullientworks",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "Architects Daughter",
        style: "normal",
        weight: "400",
        file: "architects-daughter.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Sans",
        style: "italic",
        weight: "300",
        file: "ibm-plex-sans.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Sans",
        style: "normal",
        weight: "300",
        file: "ibm-plex-sans-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Sans",
        style: "italic",
        weight: "400",
        file: "ibm-plex-sans-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Sans",
        style: "normal",
        weight: "400",
        file: "ibm-plex-sans-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Sans",
        style: "italic",
        weight: "700",
        file: "ibm-plex-sans-4.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Sans",
        style: "normal",
        weight: "700",
        file: "ibm-plex-sans-5.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Fira Code",
        style: "normal",
        weight: "400",
        file: "fira-code.woff2",
        format: "woff2",
        unicodeRange:
          "U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
      },
      {
        family: "Fira Code",
        style: "normal",
        weight: "400",
        file: "fira-code-1.woff2",
        format: "woff2",
        unicodeRange:
          "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
      },
    ],
    styleSettingsId: "ebullientworks-theme-16",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 344;
  --accent-l: 51%;
  --accent-s: 30%;
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: var(--gray-dark-9, #1b1b1b);
  --background-modifier-border-focus: var(--gray-dark-10, #070707);
  --background-modifier-border-hover: var(--color-base-35, black);
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: var(--red-5, #7a302f);
  --background-modifier-error-hover: var(--red-4, #c24c4a);
  --background-modifier-error-rgb: var(--red-5-rgb, 122,48,47);
  --background-modifier-form-field: var(--gray-dark-6, #3f3f3f);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #3f3f3f);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
  --background-modifier-info: var(--blue-5, #2c496e);
  --background-modifier-message: var(--gray-dark-6, #3f3f3f);
  --background-modifier-success: var(--green-5, #3a4d3e);
  --background-modifier-success-rgb: var(--green-5-rgb, 58,77,62);
  --background-modifier-warning: var(--yellow-4, #8d6e3b);
  --background-modifier-warning-hover: var(--yellow-3, #c49a52);
  --background-primary: var(--gray-dark-85, #1e1e1e);
  --background-primary-alt: var(--gray-dark-75, #272727);
  --background-secondary: var(--gray-dark-7, #2f2f2f);
  --background-secondary-alt: var(--gray-dark-8, #212121);
  --bases-cards-cover-background: var(--background-primary-alt, #272727);
  --bases-embed-border-color: var(--background-modifier-border, #1b1b1b);
  --bases-group-heading-property-color: var(--text-muted, #b8b8b8);
  --bases-table-border-color: var(--table-border-color, #1b1b1b);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #272727);
  --bases-table-cell-background-selected: var(--table-selection, hsla(344, 30%, 51%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #272727);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --bases-table-header-color: var(--text-muted, #b8b8b8);
  --bases-table-row-background-hover: var(--table-row-background-hover, rgba(142, 103, 135, 0.2));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --blockquote-border-color: var(--secondary-accent-4, #5c7a62);
  --blockquote-border-thickness: 0.05rem;
  --blue-0: #ceddeb;
  --blue-1: #bbd0e4;
  --blue-1-rgb: 187,208,228;
  --blue-2: #9fbbd8;
  --blue-2-rgb: 159,187,216;
  --blue-3: #7fa4ca;
  --blue-4: #4575ae;
  --blue-4-rgb: 69,117,174;
  --blue-5: #2c496e;
  --blue-5-rgb: 44,73,110;
  --blue-6: #1d3048;
  --bodyFont: var(--font-text-theme, var(--ebw-font-text, 'IBM Plex Sans', Helvetica Neue));
  --bold-color: var(--blue-3, #7fa4ca);
  --callout-border-opacity: 0.4;
  --callout-border-width: 0 0.05rem 0 0.1rem;
  --callout-bug: var(--color-red-rgb, 237,166,165);
  --callout-content-padding: 0 var(--size-4-2);
  --callout-default: var(--color-blue-rgb, 159,187,216);
  --callout-error: var(--color-red-rgb, 237,166,165);
  --callout-example: var(--color-purple-rgb, 198,178,195);
  --callout-fail: var(--color-red-rgb, 237,166,165);
  --callout-important: var(--color-cyan-rgb, 158,190,188);
  --callout-info: var(--color-blue-rgb, 159,187,216);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 0);
  --callout-question: var(--color-orange-rgb, 227,172,151);
  --callout-radius: var(--radius-m, 8px);
  --callout-success: var(--color-green-rgb, 173,188,176);
  --callout-summary: var(--color-cyan-rgb, 158,190,188);
  --callout-tip: var(--color-cyan-rgb, 158,190,188);
  --callout-title-padding: var(--size-4-2, 8px);
  --callout-todo: var(--color-blue-rgb, 159,187,216);
  --callout-warning: var(--color-orange-rgb, 227,172,151);
  --canvas-card-label-color: var(--text-faint, #a0a0a0);
  --canvas-color-1: var(--color-red-rgb, 237,166,165);
  --canvas-color-2: var(--color-orange-rgb, 227,172,151);
  --canvas-color-3: var(--color-yellow-rgb, 236,201,134);
  --canvas-color-4: var(--color-green-rgb, 173,188,176);
  --canvas-color-5: var(--color-cyan-rgb, 158,190,188);
  --canvas-color-6: var(--color-purple-rgb, 198,178,195);
  --canvas-dot-pattern: var(--color-base-30, #2f2f2f);
  --caret-color: var(--text-normal, #cdcdcd);
  --checkbox-border-color: var(--text-faint, #a0a0a0);
  --checkbox-border-color-hover: var(--text-muted, #b8b8b8);
  --checkbox-cancelled: var(--gray-dark-3, #737373);
  --checkbox-checked: var(--green-4, #5c7a62);
  --checkbox-color: var(--interactive-accent, #594054);
  --checkbox-color-hover: var(--interactive-accent-hover, #8e6787);
  --checkbox-deferred: var(--blue-3, #7fa4ca);
  --checkbox-hover: var(--gray-dark-2, #898989);
  --checkbox-important: var(--pink-4, #a75c70);
  --checkbox-in-progress: var(--cyan-4, #058080);
  --checkbox-question: var(--yellow-3, #c49a52);
  --checkbox-review: var(--green-3, #91a695);
  --checklist-done-color: var(--text-muted, #b8b8b8);
  --code-background: var(--background-primary-alt, #272727);
  --code-border-color: var(--background-modifier-border, #1b1b1b);
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --code-comment: var(--text-faint, #a0a0a0);
  --code-function: var(--color-yellow, #e0b15e);
  --code-important: var(--color-orange, #e3ac97);
  --code-keyword: var(--color-pink, #deaab8);
  --code-normal: var(--blue-2, #9fbbd8);
  --code-operator: var(--color-red, #eda6a5);
  --code-property: var(--color-cyan, #74c6c5);
  --code-punctuation: var(--text-muted, #b8b8b8);
  --code-string: var(--color-green, #adbcb0);
  --code-tag: var(--color-red, #eda6a5);
  --code-value: var(--color-purple, #c6b2c3);
  --collapse-icon-color: var(--text-faint, #a0a0a0);
  --collapse-icon-color-collapsed: var(--text-accent, #c6b2c3);
  --color-base-00: var(--gray-dark-10, #070707);
  --color-base-05: var(--gray-dark-9, #1b1b1b);
  --color-base-10: var(--gray-dark-85, #1e1e1e);
  --color-base-100: var(--gray-light-1, #cdcdcd);
  --color-base-20: var(--gray-dark-8, #212121);
  --color-base-25: var(--gray-dark-75, #272727);
  --color-base-30: var(--gray-dark-7, #2f2f2f);
  --color-base-35: var(--gray-dark-6, #3f3f3f);
  --color-base-40: var(--gray-dark-5, #484848);
  --color-base-50: var(--gray-dark-3, #737373);
  --color-base-60: var(--gray-dark-1, #a0a0a0);
  --color-base-70: var(--gray, #b8b8b8);
  --color-blue: var(--blue-2, #9fbbd8);
  --color-blue-rgb: var(--blue-2-rgb, 159,187,216);
  --color-cyan: var(--cyan-2, #74c6c5);
  --color-cyan-rgb: var(--cyan-2-rgb, 158,190,188);
  --color-green: var(--green-2, #adbcb0);
  --color-green-rgb: var(--green-2-rgb, 173,188,176);
  --color-orange: var(--orange-2, #e3ac97);
  --color-orange-rgb: var(--orange-2-rgb, 227,172,151);
  --color-pink: var(--pink-2, #deaab8);
  --color-pink-rgb: var(--pink-2-rgb, 222,170,184);
  --color-purple: var(--purple-2, #c6b2c3);
  --color-purple-rgb: var(--purple-2-rgb, 198,178,195);
  --color-red: var(--red-2, #eda6a5);
  --color-red-rgb: var(--red-2-rgb, 237,166,165);
  --color-yellow: var(--yellow-2, #e0b15e);
  --color-yellow-rgb: var(--yellow-2-rgb, 236,201,134);
  --cyan-0: #bbe3e3;
  --cyan-1: #9fd8d8;
  --cyan-1-rgb: 187,210,209;
  --cyan-2: #74c6c5;
  --cyan-2-rgb: 158,190,188;
  --cyan-3: #41b0b0;
  --cyan-4: #058080;
  --cyan-4-rgb: 62,125,121;
  --cyan-5: #03616E;
  --cyan-5-rgb: 3, 97, 110;
  --cyan-6: #024448;
  --dark: var(--text-normal, var(--gray-light-1, #cdcdcd));
  --darkgray: var(--text-normal, var(--gray-light-1, #cdcdcd));
  --day-planner-progress-bg: var(--secondary-accent-5, #3a4d3e);
  --day-planner-progress-fg: var(--secondary-accent-3, #91a695);
  --divider-color: var(--background-modifier-border-focus, #070707);
  --divider-color-hover: var(--interactive-accent, #594054);
  --dropdown-background: var(--interactive-normal, #3f3f3f);
  --dropdown-background-hover: var(--interactive-hover, #8e6787);
  --ebw-alpha2: rgba(0, 0, 0, 0.2);
  --ebw-alpha4: rgba(0, 0, 0, 0.4);
  --ebw-calendar-month: var(--secondary-accent-3, #91a695);
  --ebw-calendar-year: var(--primary-accent-3, #b399ae);
  --ebw-callout-abstract: 199, 178, 195;
  --ebw-callout-bug: 180, 152, 175;
  --ebw-callout-chat: 61, 126, 123;
  --ebw-callout-danger: 230, 133, 132;
  --ebw-callout-example: 142, 103, 135;
  --ebw-callout-failure: 211, 141, 159;
  --ebw-callout-info: 111, 166, 211;
  --ebw-callout-note: 148, 189, 223;
  --ebw-callout-question: 89, 174, 170;
  --ebw-callout-quote: 53, 120, 175;
  --ebw-callout-reference: 183, 183, 183;
  --ebw-callout-success: 139, 167, 145;
  --ebw-callout-tip: 134, 196, 193;
  --ebw-callout-toc: 235, 235, 235;
  --ebw-callout-warning: 234, 175, 0;
  --ebw-embed-border-color: var(--gray-dark-7, #2f2f2f);
  --ebw-font-callout-title: var(--ebw-header-font, 'Architects Daughter');
  --ebw-font-monospace: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --ebw-font-tags: var(--ebw-header-font, 'Architects Daughter');
  --ebw-font-text: 'IBM Plex Sans', Helvetica Neue;
  --ebw-he-title-border: var(--tab-outline-color, #070707);
  --ebw-header-font: 'Architects Daughter';
  --ebw-header-font-caps-variant: normal;
  --ebw-header-modifier: 1.4;
  --ebw-link-hidden: var(--cyan-4, #058080);
  --ebw-link-underline: var(--cyan-4, #058080);
  --ebw-p-modifier: 1;
  --ebw-row-alt: rgba(0, 0, 0, 0.2);
  --ebw-row-alt-hover: rgba(var(--primary-accent-4-rgb), .2);
  --ebw-strong-em: var(--yellow-2, #e0b15e);
  --ebw-tab-title-active-bg: var(--secondary-accent-5, #3a4d3e);
  --ebw-tab-title-active-fg: var(--text-normal, #cdcdcd);
  --ebw-tab-title-active-focused-bg: var(--primary-accent-5, #594054);
  --ebw-tab-title-inactive-bg: var(--gray-dark-4, #5d5d5d);
  --ebw-tab-title-inactive-focused-bg: var(--gray-dark-4, #5d5d5d);
  --ebw-table-header-alt: var(--primary-accent-4, #8e6787);
  --ebw-today-hover: var(--gray-light-5, #f1f1f1);
  --ebw-today-text: var(--primary-accent-3, #b399ae);
  --embed-border-left: 0.0625rem solid var(--ebw-embed-border-color);
  --embed-border-right: 0.0625rem solid var(--ebw-embed-border-color);
  --embed-padding: var(--size-2-1) var(--size-4-2, 2px 8px);
  --file-header-font: var(--font-interface, IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-margins: var(--size-4-2) var(--size-4-8, 8px 32px);
  --flair-background: var(--interactive-normal, #3f3f3f);
  --flair-color: var(--text-normal, #cdcdcd);
  --font-interface-theme: var(--ebw-font-text, 'IBM Plex Sans', Helvetica Neue);
  --font-mermaid: var(--ebw-font-monospace, 'Fira Code', 'Source Code Pro', Jetbrains Mono);
  --font-monospace-theme: var(--ebw-font-monospace, 'Fira Code', 'Source Code Pro', Jetbrains Mono);
  --font-text-theme: var(--ebw-font-text, 'IBM Plex Sans', Helvetica Neue);
  --footnote-divider-color: var(--metadata-divider-color, #2f2f2f);
  --footnote-id-color: var(--text-muted, #b8b8b8);
  --footnote-id-color-no-occurrences: var(--text-faint, #a0a0a0);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.075));
  --graph-line: var(--gray-dark-5, #484848);
  --graph-node: var(--primary-accent-4, #8e6787);
  --graph-node-attachment: var(--secondary-accent-2, #adbcb0);
  --graph-node-focused: var(--yellow-1, #ecc986);
  --graph-node-tag: var(--secondary-accent-3, #91a695);
  --graph-node-unresolved: var(--gray, #b8b8b8);
  --graph-text: var(--text-normal, #cdcdcd);
  --gray: #b8b8b8;
  --gray-dark-1: #a0a0a0;
  --gray-dark-10: #070707;
  --gray-dark-2: #898989;
  --gray-dark-3: #737373;
  --gray-dark-4: #5d5d5d;
  --gray-dark-5: #484848;
  --gray-dark-6: #3f3f3f;
  --gray-dark-7: #2f2f2f;
  --gray-dark-75: #272727;
  --gray-dark-8: #212121;
  --gray-dark-85: #1e1e1e;
  --gray-dark-9: #1b1b1b;
  --gray-light-1: #cdcdcd;
  --gray-light-2: #dbdbdb;
  --gray-light-3: #e3e3e3;
  --gray-light-4: #ebebeb;
  --gray-light-5: #f1f1f1;
  --gray-light-6: #f5f5f5;
  --gray-light-7: #f8f8f8;
  --gray-light-8: #fafafa;
  --green-0: #d6ddd7;
  --green-1: #c5d0c8;
  --green-1-rgb: 197,208,200;
  --green-2: #adbcb0;
  --green-2-rgb: 173,188,176;
  --green-3: #91a695;
  --green-4: #5c7a62;
  --green-4-rgb: 92,122,98;
  --green-5: #3a4d3e;
  --green-5-rgb: 58,77,62;
  --green-6: #263228;
  --h1-color: var(--yellow-2, #e0b15e);
  --h1-font: var(--ebw-header-font, 'Architects Daughter');
  --h1-line-height: var(--line-height-normal, 1.5);
  --h1-size: 2em;
  --h1-variant: common-ligatures;
  --h1-weight: 500;
  --h2-color: var(--green-3, #91a695);
  --h2-font: var(--ebw-header-font, 'Architects Daughter');
  --h2-line-height: var(--line-height-normal, 1.5);
  --h2-size: 1.8em;
  --h2-variant: common-ligatures;
  --h2-weight: 500;
  --h3-color: var(--cyan-3, #41b0b0);
  --h3-font: var(--ebw-header-font, 'Architects Daughter');
  --h3-line-height: var(--line-height-normal, 1.5);
  --h3-size: 1.6em;
  --h3-variant: common-ligatures;
  --h3-weight: 500;
  --h4-color: var(--blue-3, #7fa4ca);
  --h4-font: var(--ebw-header-font, 'Architects Daughter');
  --h4-line-height: var(--line-height-normal, 1.5);
  --h4-size: 1.4em;
  --h4-variant: common-ligatures;
  --h4-weight: 500;
  --h5-color: var(--purple-3, #b399ae);
  --h5-font: var(--ebw-header-font, 'Architects Daughter');
  --h5-size: 1.2em;
  --h5-variant: common-ligatures;
  --h5-weight: 500;
  --h6-color: var(--pink-3, #d38d9f);
  --h6-font: var(--ebw-header-font, 'Architects Daughter');
  --h6-size: 1.2em;
  --h6-variant: common-ligatures;
  --h6-weight: 500;
  --he-text-on-accent-active: var(--gray-light-5, #f1f1f1);
  --he-text-on-accent-inactive: var(--gray-dark-7, #2f2f2f);
  --he-title-bar-active-bg: var(--secondary-accent-4, #5c7a62);
  --he-title-bar-active-fg: var(--gray-light-6, #f5f5f5);
  --he-title-bar-active-pinned-bg: var(--primary-accent-4, #8e6787);
  --he-title-bar-height: calc(var(--icon-s) + var(--size-2-3));
  --he-title-bar-inactive-bg: var(--gray-dark-3, #737373);
  --he-title-bar-inactive-fg: var(--gray-light-3, #e3e3e3);
  --he-title-bar-inactive-pinned-bg: var(--gray-dark-3, #737373);
  --he-view-header-height: calc(var(--icon-s) + var(--size-2-3));
  --headerFont: var(--font-text-theme, var(--ebw-font-text, 'IBM Plex Sans', Helvetica Neue));
  --heading-formatting: var(--text-faint, #a0a0a0);
  --heading-spacing: calc(var(--p-spacing)*var(--ebw-header-modifier));
  --highlight: var(--text-highlight-bg, var(--primary-accent-2, #c6b2c3));
  --hr-color: var(--background-modifier-border, #1b1b1b);
  --icon-color: var(--text-muted, #b8b8b8);
  --icon-color-active: var(--text-accent, #c6b2c3);
  --icon-color-focused: var(--text-normal, #cdcdcd);
  --icon-color-hover: var(--text-muted, #b8b8b8);
  --indentation-guide: var(--gray-dark-7, #2f2f2f);
  --indentation-guide-active: var(--gray-dark-6, #3f3f3f);
  --inline-title-color: var(--h1-color, #e0b15e);
  --inline-title-font: var(--h1-font, 'Architects Daughter');
  --inline-title-line-height: var(--h1-line-height, 1.5);
  --inline-title-size: var(--h1-size, 2em);
  --inline-title-variant: var(--h1-variant, common-ligatures);
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, #a0a0a0);
  --input-placeholder-color: var(--text-faint, #a0a0a0);
  --interactive-accent: var(--primary-accent-5, #594054);
  --interactive-accent-hover: var(--primary-accent-4, #8e6787);
  --interactive-accent-hsl: var(--color-accent-hsl, 344, 30%, 51%);
  --interactive-disabled: var(--background-modifier-form-field, #3f3f3f);
  --interactive-hover: var(--primary-accent-4, #8e6787);
  --interactive-normal: var(--gray-dark-6, #3f3f3f);
  --interactive-toggle: var(--secondary-accent-4, #5c7a62);
  --italic-color: var(--pink-2, #deaab8);
  --light: var(--background-primary, var(--gray-dark-85, #1e1e1e));
  --lightgray: var(--background-secondary, var(--gray-dark-7, #2f2f2f));
  --link-color: var(--gray-light-1, #cdcdcd);
  --link-color-hover: var(--cyan-2, #74c6c5);
  --link-external-color: var(--link-color, #cdcdcd);
  --link-external-color-hover: var(--link-color-hover, #74c6c5);
  --link-unresolved-color: var(--link-color, #cdcdcd);
  --link-unresolved-decoration-color: var(--ebw-link-underline, #058080);
  --link-unresolved-decoration-style: dotted;
  --link-unresolved-opacity: 0.9;
  --list-marker-color: var(--text-faint, #a0a0a0);
  --list-marker-color-collapsed: var(--text-accent, #c6b2c3);
  --list-marker-color-hover: var(--text-muted, #b8b8b8);
  --menu-background: var(--background-secondary, #2f2f2f);
  --menu-border-color: var(--background-modifier-border-hover, black);
  --metadata-border-color: var(--background-modifier-border, #1b1b1b);
  --metadata-border-radius: 4px;
  --metadata-border-width: 1px;
  --metadata-divider-color: var(--background-secondary, #2f2f2f);
  --metadata-divider-width: 1px;
  --metadata-gap: 0;
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-input-font: var(--font-interface, IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #cdcdcd);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-label-font: var(--font-interface, IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #b8b8b8);
  --metadata-label-text-color-hover: var(--text-muted, #b8b8b8);
  --metadata-padding: var(--size-4-2, 0) 0;
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-property-radius: var(--radius-s, 4px);
  --modifier-text: var(--gray-light-8, #fafafa);
  --modifier-text-accent: var(--gray-light-7, #f8f8f8);
  --nav-collapse-icon-color: var(--collapse-icon-color, #a0a0a0);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #a0a0a0);
  --nav-heading-color: var(--text-normal, #cdcdcd);
  --nav-heading-color-collapsed: var(--text-faint, #a0a0a0);
  --nav-heading-color-collapsed-hover: var(--text-muted, #b8b8b8);
  --nav-heading-color-hover: var(--text-normal, #cdcdcd);
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-color: var(--text-muted, #b8b8b8);
  --nav-item-color-active: var(--text-normal, #cdcdcd);
  --nav-item-color-highlighted: var(--text-accent, #c6b2c3);
  --nav-item-color-hover: var(--text-normal, #cdcdcd);
  --nav-item-color-selected: var(--text-normal, #cdcdcd);
  --nav-tag-color: var(--text-faint, #a0a0a0);
  --nav-tag-color-active: var(--text-muted, #b8b8b8);
  --nav-tag-color-hover: var(--text-muted, #b8b8b8);
  --orange-0: #f1d6cb;
  --orange-1: #ecc5b7;
  --orange-1-rgb: 236,197,183;
  --orange-2: #e3ac97;
  --orange-2-rgb: 227,172,151;
  --orange-3: #da8d73;
  --orange-4: #9d6553;
  --orange-4-rgb: 157,101,83;
  --orange-5: #633f34;
  --orange-5-rgb: 99,63,52;
  --orange-6: #412922;
  --p-spacing: calc(var(--font-text-size)*var(--ebw-p-modifier));
  --pill-border-color: var(--background-modifier-border, #1b1b1b);
  --pill-border-color-hover: var(--background-modifier-border-hover, black);
  --pill-color: var(--text-muted, #b8b8b8);
  --pill-color-hover: var(--text-normal, #cdcdcd);
  --pill-color-remove: var(--text-faint, #a0a0a0);
  --pill-color-remove-hover: var(--text-accent, #c6b2c3);
  --pink-0: #efd5dc;
  --pink-1: #e8c4ce;
  --pink-1-rgb: 232,196,206;
  --pink-2: #deaab8;
  --pink-2-rgb: 222,170,184;
  --pink-3: #d38d9f;
  --pink-4: #a75c70;
  --pink-4-rgb: 167,92,112;
  --pink-5: #693a46;
  --pink-5-rgb: 105,58,70;
  --pink-6: #45262e;
  --primary-accent-0: var(--purple-0, #e2d9e1);
  --primary-accent-1: var(--purple-1, #d7c9d5);
  --primary-accent-1-rgb: var(--purple-1-rgb, 215,201,213);
  --primary-accent-2: var(--purple-2, #c6b2c3);
  --primary-accent-3: var(--purple-3, #b399ae);
  --primary-accent-4: var(--purple-4, #8e6787);
  --primary-accent-4-rgb: var(--purple-4-rgb, 142,103,135);
  --primary-accent-5: var(--purple-5, #594054);
  --primary-accent-6: var(--purple-6, #392a37);
  --purple-0: #e2d9e1;
  --purple-1: #d7c9d5;
  --purple-1-rgb: 215,201,213;
  --purple-2: #c6b2c3;
  --purple-2-rgb: 198,178,195;
  --purple-3: #b399ae;
  --purple-4: #8e6787;
  --purple-4-rgb: 142,103,135;
  --purple-5: #594054;
  --purple-5-rgb: 89,64,84;
  --purple-6: #392a37;
  --raised-background: var(--blur-background, color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent)));
  --red-0: #f6d3d3;
  --red-1: #f3c2c1;
  --red-1-rgb: 243,194,193;
  --red-2: #eda6a5;
  --red-2-rgb: 237,166,165;
  --red-3: #e68584;
  --red-3-rgb: 230,133,132;
  --red-4: #c24c4a;
  --red-4-rgb: 194,76,74;
  --red-5: #7a302f;
  --red-5-rgb: 122,48,47;
  --red-6: #50201f;
  --ribbon-background: var(--titlebar-background-focused, #212121);
  --ribbon-background-collapsed: var(--titlebar-background-focused, #212121);
  --search-clear-button-color: var(--text-muted, #b8b8b8);
  --search-icon-color: var(--text-muted, #b8b8b8);
  --secondary: var(--text-accent, var(--primary-accent-2, #c6b2c3));
  --secondary-accent-0: var(--green-0, #d6ddd7);
  --secondary-accent-1: var(--green-1, #c5d0c8);
  --secondary-accent-1-rgb: var(--green-1-rgb, 197,208,200);
  --secondary-accent-2: var(--green-2, #adbcb0);
  --secondary-accent-3: var(--green-3, #91a695);
  --secondary-accent-4: var(--green-4, #5c7a62);
  --secondary-accent-4-rgb: var(--green-4-rgb, 92,122,98);
  --secondary-accent-5: var(--green-5, #3a4d3e);
  --secondary-accent-6: var(--green-6, #263228);
  --setting-group-heading-color: var(--text-normal, #cdcdcd);
  --setting-items-background: var(--background-primary-alt, #272727);
  --setting-items-border-color: var(--background-modifier-border, #1b1b1b);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #b8b8b8);
  --shiki-code-background: var(--code-background, #272727);
  --shiki-code-block-spacing: var(--p-spacing, 16px);
  --shiki-code-comment: var(--text-faint, #a0a0a0);
  --shiki-code-function: var(--color-green, #adbcb0);
  --shiki-code-important: var(--color-orange, #e3ac97);
  --shiki-code-keyword: var(--color-pink, #deaab8);
  --shiki-code-normal: var(--text-muted, #b8b8b8);
  --shiki-code-property: var(--color-cyan, #74c6c5);
  --shiki-code-punctuation: var(--text-muted, #b8b8b8);
  --shiki-code-string: var(--color-yellow, #e0b15e);
  --shiki-code-value: var(--color-purple, #c6b2c3);
  --shiki-gutter-border-color: var(--background-modifier-border, #1b1b1b);
  --shiki-gutter-text-color: var(--text-faint, #a0a0a0);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #b8b8b8);
  --shiki-highlight-neutral: var(--shiki-code-normal, #b8b8b8);
  --shiki-terminal-dots-color: var(--text-faint, #a0a0a0);
  --shiki-tooltip-background: var(--background-modifier-message, #3f3f3f);
  --slider-thumb-border-color: var(--background-modifier-border-hover, black);
  --slider-track-background: var(--background-modifier-border, #1b1b1b);
  --status-bar-background: var(--titlebar-background-focused, #212121);
  --status-bar-border-color: var(--divider-color, #070707);
  --status-bar-text-color: var(--text-muted, #b8b8b8);
  --sync-avatar-color-1: var(--color-red, #eda6a5);
  --sync-avatar-color-2: var(--color-orange, #e3ac97);
  --sync-avatar-color-3: var(--color-yellow, #e0b15e);
  --sync-avatar-color-4: var(--color-green, #adbcb0);
  --sync-avatar-color-5: var(--color-cyan, #74c6c5);
  --sync-avatar-color-6: var(--color-blue, #9fbbd8);
  --sync-avatar-color-7: var(--color-purple, #c6b2c3);
  --sync-avatar-color-8: var(--color-pink, #deaab8);
  --tab-container-background: var(--background-secondary, #2f2f2f);
  --tab-divider-color: var(--background-modifier-border-hover, black);
  --tab-outline-color: var(--background-modifier-border-focus, #070707);
  --tab-switcher-background: var(--background-secondary, #2f2f2f);
  --tab-text-color: var(--icon-color, #b8b8b8);
  --tab-text-color-active: var(--text-muted, #b8b8b8);
  --tab-text-color-focused: var(--icon-color-focused, #cdcdcd);
  --tab-text-color-focused-active: var(--text-muted, #b8b8b8);
  --tab-text-color-focused-active-current: var(--text-normal, #cdcdcd);
  --tab-text-color-focused-highlighted: var(--text-accent, #c6b2c3);
  --table-add-button-border-color: var(--background-modifier-border, #1b1b1b);
  --table-background: var(--ebw-row-alt, rgba(0, 0, 0, 0.2));
  --table-border-color: var(--background-modifier-border, #1b1b1b);
  --table-drag-handle-background-active: var(--table-selection-border-color, #594054);
  --table-drag-handle-color: var(--text-faint, #a0a0a0);
  --table-drag-handle-color-active: var(--text-on-accent, #fafafa);
  --table-header-background: var(--primary-accent-5, #594054);
  --table-header-background-hover: var(--ebw-table-header-alt, #8e6787);
  --table-header-border-color: var(--table-border-color, #1b1b1b);
  --table-header-color: var(--text-on-accent, #fafafa);
  --table-header-size: var(--font-small, 0.933em);
  --table-row-alt-background-hover: var(--ebw-row-alt-hover, rgba(142, 103, 135, 0.2));
  --table-row-background-hover: var(--ebw-row-alt-hover, rgba(142, 103, 135, 0.2));
  --table-selection-border-color: var(--interactive-accent, #594054);
  --tag-color: var(--text-accent, #c6b2c3);
  --tag-color-hover: var(--text-accent, #c6b2c3);
  --tag-padding-x: 0;
  --tertiary: var(--text-accent-hover, var(--primary-accent-1, #d7c9d5));
  --text-accent: var(--primary-accent-2, #c6b2c3);
  --text-accent-hover: var(--primary-accent-1, #d7c9d5);
  --text-error: var(--red-3, #e68584);
  --text-faint: var(--gray-dark-1, #a0a0a0);
  --text-highlight-bg: var(--primary-accent-2, #c6b2c3);
  --text-highlight-fg: var(--gray-dark-7, #2f2f2f);
  --text-muted: var(--gray, #b8b8b8);
  --text-normal: var(--gray-light-1, #cdcdcd);
  --text-on-accent: var(--gray-light-8, #fafafa);
  --text-selection: rgba(var(--primary-accent-4-rgb), 0.2);
  --text-selection-active: rgba(var(--primary-accent-4-rgb), 0.01);
  --text-success: var(--green-3, #91a695);
  --text-warning: var(--color-orange, #e3ac97);
  --textHighlight: var(--text-highlight-bg, var(--primary-accent-2, #c6b2c3));
  --titleFont: var(--font-text-theme, var(--ebw-font-text, 'IBM Plex Sans', Helvetica Neue));
  --titlebar-background: var(--background-secondary, #2f2f2f);
  --titlebar-background-focused: var(--background-secondary-alt, #212121);
  --titlebar-border-color: var(--background-modifier-border, #1b1b1b);
  --titlebar-text-color: var(--text-muted, #b8b8b8);
  --titlebar-text-color-focused: var(--text-normal, #cdcdcd);
  --vault-profile-color: var(--text-normal, #cdcdcd);
  --vault-profile-color-hover: var(--vault-profile-color, #cdcdcd);
  --yellow-0: #f1d9a9;
  --yellow-1: #ecc986;
  --yellow-1-rgb: 241,217,169;
  --yellow-2: #e0b15e;
  --yellow-2-rgb: 236,201,134;
  --yellow-3: #c49a52;
  --yellow-3-rgb: 196,154,82;
  --yellow-4: #8d6e3b;
  --yellow-4-rgb: 141,110,59;
  --yellow-5: #594525;
  --yellow-bright: #fdfaf3;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(47, 47, 47));
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(47, 47, 47));
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(7, 7, 7);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(47, 47, 47));
  border-left-color: rgb(7, 7, 7);
  color: rgb(205, 205, 205);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(127, 164, 202));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(127, 164, 202) none 0px;
  text-decoration-color: rgb(127, 164, 202);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(222, 170, 184));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 170, 184) none 0px;
  text-decoration-color: rgb(222, 170, 184);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(222, 170, 184));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 170, 184) none 0px;
  text-decoration-color: rgb(222, 170, 184);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(127, 164, 202));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(127, 164, 202) none 0px;
  text-decoration-color: rgb(127, 164, 202);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(198, 178, 195));
  color: var(--text-highlight-fg, rgb(47, 47, 47));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration-color: rgb(47, 47, 47);
}

html[saved-theme="dark"] body del {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(205, 205, 205));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(89, 64, 84));
  border-color: rgb(89, 64, 84);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(184, 184, 184));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(184, 184, 184) none 0px;
  text-decoration-color: rgb(184, 184, 184);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(205, 205, 205));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration: underline rgb(5, 128, 128);
  text-decoration-color: var(--ebw-link-underline, rgb(5, 128, 128));
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(205, 205, 205));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration: underline rgb(5, 128, 128);
  text-decoration-color: var(--ebw-link-underline, rgb(5, 128, 128));
}

html[saved-theme="dark"] body a.internal-link.broken {
  --background-modifier-active-hover: hsla(344, 30%, 51%, 0.15);
  --background-modifier-border: #1b1b1b;
  --background-modifier-border-focus: #070707;
  --background-modifier-border-hover: black;
  --background-modifier-error: #7a302f;
  --background-modifier-error-hover: #c24c4a;
  --background-modifier-error-rgb: 122,48,47;
  --background-modifier-form-field: #3f3f3f;
  --background-modifier-form-field-hover: #3f3f3f;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-info: #2c496e;
  --background-modifier-message: #3f3f3f;
  --background-modifier-success: #3a4d3e;
  --background-modifier-success-rgb: 58,77,62;
  --background-modifier-warning: #8d6e3b;
  --background-modifier-warning-hover: #c49a52;
  --background-primary: #1e1e1e;
  --background-primary-alt: #272727;
  --background-secondary: #2f2f2f;
  --background-secondary-alt: #212121;
  --blockquote-border-color: #5c7a62;
  --blur-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: #7fa4ca;
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 237,166,165;
  --callout-content-padding: 0 8px;
  --callout-default: 159,187,216;
  --callout-error: 237,166,165;
  --callout-example: 198,178,195;
  --callout-fail: 237,166,165;
  --callout-important: 158,190,188;
  --callout-info: 159,187,216;
  --callout-padding: 0;
  --callout-question: 227,172,151;
  --callout-radius: 8px;
  --callout-success: 173,188,176;
  --callout-summary: 158,190,188;
  --callout-tip: 158,190,188;
  --callout-title-padding: 8px;
  --callout-title-weight: 600;
  --callout-todo: 159,187,216;
  --callout-warning: 227,172,151;
  --canvas-background: #1e1e1e;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #2f2f2f;
  --caret-color: #cdcdcd;
  --checkbox-border-color: #a0a0a0;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-cancelled: #737373;
  --checkbox-checked: #5c7a62;
  --checkbox-color: #594054;
  --checkbox-color-hover: #8e6787;
  --checkbox-deferred: #7fa4ca;
  --checkbox-hover: #898989;
  --checkbox-important: #a75c70;
  --checkbox-in-progress: #058080;
  --checkbox-marker-color: #1e1e1e;
  --checkbox-question: #c49a52;
  --checkbox-radius: 4px;
  --checkbox-review: #91a695;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #272727;
  --code-border-color: #1b1b1b;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #a0a0a0;
  --code-function: #e0b15e;
  --code-important: #e3ac97;
  --code-keyword: #deaab8;
  --code-normal: #9fbbd8;
  --code-operator: #eda6a5;
  --code-property: #74c6c5;
  --code-punctuation: #b8b8b8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #adbcb0;
  --code-tag: #eda6a5;
  --code-value: #c6b2c3;
  --collapse-icon-color: #a0a0a0;
  --collapse-icon-color-collapsed: #c6b2c3;
  --color-accent: hsl(344, 30%, 51%);
  --color-accent-1: hsl(341, 30.6%, 58.65%);
  --color-accent-2: hsl(339, 31.5%, 65.79%);
  --color-accent-hsl: 344, 30%, 51%;
  --color-base-00: #070707;
  --color-base-05: #1b1b1b;
  --color-base-10: #1e1e1e;
  --color-base-100: #cdcdcd;
  --color-base-20: #212121;
  --color-base-25: #272727;
  --color-base-30: #2f2f2f;
  --color-base-35: #3f3f3f;
  --color-base-40: #484848;
  --color-base-50: #737373;
  --color-base-60: #a0a0a0;
  --color-base-70: #b8b8b8;
  --color-blue: #9fbbd8;
  --color-blue-rgb: 159,187,216;
  --color-cyan: #74c6c5;
  --color-cyan-rgb: 158,190,188;
  --color-green: #adbcb0;
  --color-green-rgb: 173,188,176;
  --color-orange: #e3ac97;
  --color-orange-rgb: 227,172,151;
  --color-pink: #deaab8;
  --color-pink-rgb: 222,170,184;
  --color-purple: #c6b2c3;
  --color-purple-rgb: 198,178,195;
  --color-red: #eda6a5;
  --color-red-rgb: 237,166,165;
  --color-yellow: #e0b15e;
  --color-yellow-rgb: 236,201,134;
  --day-planner-progress-bg: #3a4d3e;
  --day-planner-progress-fg: #91a695;
  --divider-color: #070707;
  --divider-color-hover: #594054;
  --divider-vertical-height: 100%;
  --dropdown-background: #3f3f3f;
  --dropdown-background-hover: #8e6787;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --ebw-calendar-month: #91a695;
  --ebw-calendar-year: #b399ae;
  --ebw-embed-border-color: #2f2f2f;
  --ebw-font-callout-title: 'Architects Daughter';
  --ebw-font-tags: 'Architects Daughter';
  --ebw-he-title-border: #070707;
  --ebw-link-hidden: #058080;
  --ebw-link-underline: #058080;
  --ebw-row-alt-hover: rgba(142, 103, 135, 0.2);
  --ebw-strong-em: #e0b15e;
  --ebw-tab-title-active-bg: #3a4d3e;
  --ebw-tab-title-active-fg: #cdcdcd;
  --ebw-tab-title-active-focused-bg: #594054;
  --ebw-tab-title-inactive-bg: #5d5d5d;
  --ebw-tab-title-inactive-focused-bg: #5d5d5d;
  --ebw-table-header-alt: #8e6787;
  --ebw-today-hover: #f1f1f1;
  --ebw-today-text: #b399ae;
  --flair-background: #3f3f3f;
  --flair-color: #cdcdcd;
  --font-interface: '??', 'IBM Plex Sans', Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-mermaid: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-monospace: '??', 'Fira Code', 'Source Code Pro', Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-print: '??', '??', 'IBM Plex Sans', Helvetica Neue, 'Arial';
  --font-text: '??', 'IBM Plex Sans', Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-weight: var(--link-weight, 400);
  --graph-line: #484848;
  --graph-node: #8e6787;
  --graph-node-attachment: #adbcb0;
  --graph-node-focused: #ecc986;
  --graph-node-tag: #91a695;
  --graph-node-unresolved: #b8b8b8;
  --graph-text: #cdcdcd;
  --h1-color: #e0b15e;
  --h1-font: 'Architects Daughter';
  --h1-line-height: 1.5;
  --h2-color: #91a695;
  --h2-font: 'Architects Daughter';
  --h2-line-height: 1.5;
  --h3-color: #41b0b0;
  --h3-font: 'Architects Daughter';
  --h3-line-height: 1.5;
  --h4-color: #7fa4ca;
  --h4-font: 'Architects Daughter';
  --h4-line-height: 1.5;
  --h5-color: #b399ae;
  --h5-font: 'Architects Daughter';
  --h5-line-height: 1.5;
  --h6-color: #d38d9f;
  --h6-font: 'Architects Daughter';
  --h6-line-height: 1.5;
  --he-text-on-accent-active: #f1f1f1;
  --he-text-on-accent-inactive: #2f2f2f;
  --he-title-bar-active-bg: #5c7a62;
  --he-title-bar-active-fg: #f5f5f5;
  --he-title-bar-active-pinned-bg: #8e6787;
  --he-title-bar-height: 22px;
  --he-title-bar-inactive-bg: #737373;
  --he-title-bar-inactive-fg: #e3e3e3;
  --he-title-bar-inactive-pinned-bg: #737373;
  --he-view-header-height: 22px;
  --heading-formatting: #a0a0a0;
  --heading-spacing: 22.4px;
  --hr-color: #1b1b1b;
  --interactive-accent: #594054;
  --interactive-accent-hover: #8e6787;
  --interactive-accent-hsl: 344, 30%, 51%;
  --interactive-disabled: #3f3f3f;
  --interactive-hover: #8e6787;
  --interactive-normal: #3f3f3f;
  --interactive-toggle: #5c7a62;
  --italic-color: #deaab8;
  --link-color: #cdcdcd;
  --link-color-hover: #74c6c5;
  --link-external-color: #cdcdcd;
  --link-external-color-hover: #74c6c5;
  --link-unresolved-color: #cdcdcd;
  --link-unresolved-decoration-color: #058080;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #2f2f2f;
  --menu-border-color: black;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --modifier-text: #fafafa;
  --modifier-text-accent: #f8f8f8;
  --p-spacing: 16px;
  --pdf-background: #1e1e1e;
  --pdf-page-background: #1e1e1e;
  --pdf-shadow: 0 0 0 1px #1b1b1b;
  --pdf-sidebar-background: #1e1e1e;
  --pdf-thumbnail-shadow: 0 0 0 1px #1b1b1b;
  --popover-font-size: 16px;
  --primary-accent-0: #e2d9e1;
  --primary-accent-1: #d7c9d5;
  --primary-accent-1-rgb: 215,201,213;
  --primary-accent-2: #c6b2c3;
  --primary-accent-3: #b399ae;
  --primary-accent-4: #8e6787;
  --primary-accent-4-rgb: 142,103,135;
  --primary-accent-5: #594054;
  --primary-accent-6: #392a37;
  --raised-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --resizer-size: 20px;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #1e1e1e;
  --secondary-accent-0: #d6ddd7;
  --secondary-accent-1: #c5d0c8;
  --secondary-accent-1-rgb: 197,208,200;
  --secondary-accent-2: #adbcb0;
  --secondary-accent-3: #91a695;
  --secondary-accent-4: #5c7a62;
  --secondary-accent-4-rgb: 92,122,98;
  --secondary-accent-5: #3a4d3e;
  --secondary-accent-6: #263228;
  --setting-group-heading-color: #cdcdcd;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #272727;
  --setting-items-border-color: #1b1b1b;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #272727;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 16px;
  --shiki-code-comment: #a0a0a0;
  --shiki-code-function: #adbcb0;
  --shiki-code-important: #e3ac97;
  --shiki-code-keyword: #deaab8;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #74c6c5;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #e0b15e;
  --shiki-code-value: #c6b2c3;
  --shiki-gutter-border-color: #1b1b1b;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #a0a0a0;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(173, 188, 176, 0.5);
  --shiki-highlight-green-background: rgba(173, 188, 176, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(237, 166, 165, 0.5);
  --shiki-highlight-red-background: rgba(237, 166, 165, 0.1);
  --shiki-terminal-dots-color: #a0a0a0;
  --shiki-tooltip-background: #3f3f3f;
  --suggestion-background: #1e1e1e;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #eda6a5;
  --sync-avatar-color-2: #e3ac97;
  --sync-avatar-color-3: #e0b15e;
  --sync-avatar-color-4: #adbcb0;
  --sync-avatar-color-5: #74c6c5;
  --sync-avatar-color-6: #9fbbd8;
  --sync-avatar-color-7: #c6b2c3;
  --sync-avatar-color-8: #deaab8;
  --tab-background-active: #1e1e1e;
  --tab-divider-color: black;
  --tab-font-size: 13px;
  --tab-outline-color: #070707;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #2f2f2f;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f2f2f, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(344, 30%, 51%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #b8b8b8;
  --tab-text-color-focused: #cdcdcd;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #cdcdcd;
  --tab-text-color-focused-highlighted: #c6b2c3;
  --table-add-button-border-color: #1b1b1b;
  --table-add-button-border-width: 1px;
  --table-background: rgba(0, 0, 0, 0.2);
  --table-border-color: #1b1b1b;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #594054;
  --table-drag-handle-color: #a0a0a0;
  --table-drag-handle-color-active: #fafafa;
  --table-header-background: #594054;
  --table-header-background-hover: #8e6787;
  --table-header-border-color: #1b1b1b;
  --table-header-border-width: 1px;
  --table-header-color: #fafafa;
  --table-header-size: 0.933em;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.2);
  --table-row-background-hover: rgba(142, 103, 135, 0.2);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(344, 30%, 51%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #594054;
  --table-text-size: 16px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: hsla(344, 30%, 51%, 0.15);
  --tag-border-color-hover: hsla(344, 30%, 51%, 0.15);
  --tag-color: #c6b2c3;
  --tag-color-hover: #c6b2c3;
  --tag-size: 0.875em;
  --text-accent: #c6b2c3;
  --text-accent-hover: #d7c9d5;
  --text-error: #e68584;
  --text-faint: #a0a0a0;
  --text-highlight-bg: #c6b2c3;
  --text-highlight-fg: #2f2f2f;
  --text-muted: #b8b8b8;
  --text-normal: #cdcdcd;
  --text-on-accent: #fafafa;
  --text-selection: rgba(142, 103, 135, 0.2);
  --text-selection-active: rgba(142, 103, 135, 0.01);
  --text-success: #91a695;
  --text-warning: #e3ac97;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --zoom-multiplier: 1;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(5, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(5, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(5, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(5, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--link-unresolved-color, rgb(5, 128, 128));
  content: " ✎";
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 400);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(205, 205, 205) none 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration: underline dotted rgb(5, 128, 128);
  text-decoration-color: var(--ebw-link-underline, rgb(5, 128, 128));
  text-decoration-style: var(--link-unresolved-decoration-style, dotted);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body dt {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(160, 160, 160));
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body table {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 181.844px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgba(0, 0, 0, 0.2));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
  color: var(--table-text-color, rgb(205, 205, 205));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
  color: var(--table-header-color, rgb(250, 250, 250));
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgb(89, 64, 84));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(39, 39, 39));
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
  color: var(--code-normal, rgb(159, 187, 216));
  font-family: var(--font-monospace, "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(39, 39, 39));
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(224, 177, 94);
  border-left-color: rgb(224, 177, 94);
  border-right-color: rgb(224, 177, 94);
  border-top-color: rgb(224, 177, 94);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(39, 39, 39));
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(205, 205, 205);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(89, 64, 84);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(205, 205, 205);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(205, 205, 205);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(205, 205, 205);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(115, 115, 115);
  content: "-";
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(167, 92, 112);
  content: "!";
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgba(0, 0, 0, 0);
  content: "?";
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 177, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(116, 198, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgba(0, 0, 0, 0);
  content: ">";
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgba(0, 0, 0, 0);
  content: "🧱";
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 166, 165);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 166, 165);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 166, 165);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(159, 187, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 177, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 177, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(198, 178, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 166, 165);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 188, 176);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(145, 166, 149);
  content: "👀";
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 188, 176);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 188, 176);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  color: rgb(92, 122, 98);
  content: "✓";
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--ebw-callout-abstract, 199, 178, 195);
  background: rgba(199, 178, 195, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(199, 178, 195, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(199, 178, 195, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(199, 178, 195, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(199, 178, 195, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--ebw-callout-bug, 180, 152, 175);
  background: rgba(180, 152, 175, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(180, 152, 175, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(180, 152, 175, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(180, 152, 175, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(180, 152, 175, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="chat"] {
  --background-modifier-active-hover: hsla(344, 30%, 51%, 0.15);
  --background-modifier-border: #1b1b1b;
  --background-modifier-border-focus: #070707;
  --background-modifier-border-hover: black;
  --background-modifier-error: #7a302f;
  --background-modifier-error-hover: #c24c4a;
  --background-modifier-error-rgb: 122,48,47;
  --background-modifier-form-field: #3f3f3f;
  --background-modifier-form-field-hover: #3f3f3f;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-info: #2c496e;
  --background-modifier-message: #3f3f3f;
  --background-modifier-success: #3a4d3e;
  --background-modifier-success-rgb: 58,77,62;
  --background-modifier-warning: #8d6e3b;
  --background-modifier-warning-hover: #c49a52;
  --background-primary: #1e1e1e;
  --background-primary-alt: #272727;
  --background-secondary: #2f2f2f;
  --background-secondary-alt: #212121;
  --blockquote-border-color: #5c7a62;
  --blur-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: #7fa4ca;
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 237,166,165;
  --callout-color: var(--ebw-callout-chat, 61, 126, 123);
  --callout-content-padding: 0 8px;
  --callout-default: 159,187,216;
  --callout-error: 237,166,165;
  --callout-example: 198,178,195;
  --callout-fail: 237,166,165;
  --callout-important: 158,190,188;
  --callout-info: 159,187,216;
  --callout-padding: 0;
  --callout-question: 227,172,151;
  --callout-radius: 8px;
  --callout-success: 173,188,176;
  --callout-summary: 158,190,188;
  --callout-tip: 158,190,188;
  --callout-title-padding: 8px;
  --callout-title-weight: 600;
  --callout-todo: 159,187,216;
  --callout-warning: 227,172,151;
  --canvas-background: #1e1e1e;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #2f2f2f;
  --caret-color: #cdcdcd;
  --checkbox-border-color: #a0a0a0;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-cancelled: #737373;
  --checkbox-checked: #5c7a62;
  --checkbox-color: #594054;
  --checkbox-color-hover: #8e6787;
  --checkbox-deferred: #7fa4ca;
  --checkbox-hover: #898989;
  --checkbox-important: #a75c70;
  --checkbox-in-progress: #058080;
  --checkbox-marker-color: #1e1e1e;
  --checkbox-question: #c49a52;
  --checkbox-radius: 4px;
  --checkbox-review: #91a695;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #272727;
  --code-border-color: #1b1b1b;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #a0a0a0;
  --code-function: #e0b15e;
  --code-important: #e3ac97;
  --code-keyword: #deaab8;
  --code-normal: #9fbbd8;
  --code-operator: #eda6a5;
  --code-property: #74c6c5;
  --code-punctuation: #b8b8b8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #adbcb0;
  --code-tag: #eda6a5;
  --code-value: #c6b2c3;
  --collapse-icon-color: #a0a0a0;
  --collapse-icon-color-collapsed: #c6b2c3;
  --color-accent: hsl(344, 30%, 51%);
  --color-accent-1: hsl(341, 30.6%, 58.65%);
  --color-accent-2: hsl(339, 31.5%, 65.79%);
  --color-accent-hsl: 344, 30%, 51%;
  --color-base-00: #070707;
  --color-base-05: #1b1b1b;
  --color-base-10: #1e1e1e;
  --color-base-100: #cdcdcd;
  --color-base-20: #212121;
  --color-base-25: #272727;
  --color-base-30: #2f2f2f;
  --color-base-35: #3f3f3f;
  --color-base-40: #484848;
  --color-base-50: #737373;
  --color-base-60: #a0a0a0;
  --color-base-70: #b8b8b8;
  --color-blue: #9fbbd8;
  --color-blue-rgb: 159,187,216;
  --color-cyan: #74c6c5;
  --color-cyan-rgb: 158,190,188;
  --color-green: #adbcb0;
  --color-green-rgb: 173,188,176;
  --color-orange: #e3ac97;
  --color-orange-rgb: 227,172,151;
  --color-pink: #deaab8;
  --color-pink-rgb: 222,170,184;
  --color-purple: #c6b2c3;
  --color-purple-rgb: 198,178,195;
  --color-red: #eda6a5;
  --color-red-rgb: 237,166,165;
  --color-yellow: #e0b15e;
  --color-yellow-rgb: 236,201,134;
  --day-planner-progress-bg: #3a4d3e;
  --day-planner-progress-fg: #91a695;
  --divider-color: #070707;
  --divider-color-hover: #594054;
  --divider-vertical-height: 100%;
  --dropdown-background: #3f3f3f;
  --dropdown-background-hover: #8e6787;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --ebw-calendar-month: #91a695;
  --ebw-calendar-year: #b399ae;
  --ebw-embed-border-color: #2f2f2f;
  --ebw-font-callout-title: 'Architects Daughter';
  --ebw-font-tags: 'Architects Daughter';
  --ebw-he-title-border: #070707;
  --ebw-link-hidden: #058080;
  --ebw-link-underline: #058080;
  --ebw-row-alt-hover: rgba(142, 103, 135, 0.2);
  --ebw-strong-em: #e0b15e;
  --ebw-tab-title-active-bg: #3a4d3e;
  --ebw-tab-title-active-fg: #cdcdcd;
  --ebw-tab-title-active-focused-bg: #594054;
  --ebw-tab-title-inactive-bg: #5d5d5d;
  --ebw-tab-title-inactive-focused-bg: #5d5d5d;
  --ebw-table-header-alt: #8e6787;
  --ebw-today-hover: #f1f1f1;
  --ebw-today-text: #b399ae;
  --flair-background: #3f3f3f;
  --flair-color: #cdcdcd;
  --font-interface: '??', 'IBM Plex Sans', Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-mermaid: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-monospace: '??', 'Fira Code', 'Source Code Pro', Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-print: '??', '??', 'IBM Plex Sans', Helvetica Neue, 'Arial';
  --font-text: '??', 'IBM Plex Sans', Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-weight: 400;
  --graph-line: #484848;
  --graph-node: #8e6787;
  --graph-node-attachment: #adbcb0;
  --graph-node-focused: #ecc986;
  --graph-node-tag: #91a695;
  --graph-node-unresolved: #b8b8b8;
  --graph-text: #cdcdcd;
  --h1-color: #e0b15e;
  --h1-font: 'Architects Daughter';
  --h1-line-height: 1.5;
  --h2-color: #91a695;
  --h2-font: 'Architects Daughter';
  --h2-line-height: 1.5;
  --h3-color: #41b0b0;
  --h3-font: 'Architects Daughter';
  --h3-line-height: 1.5;
  --h4-color: #7fa4ca;
  --h4-font: 'Architects Daughter';
  --h4-line-height: 1.5;
  --h5-color: #b399ae;
  --h5-font: 'Architects Daughter';
  --h5-line-height: 1.5;
  --h6-color: #d38d9f;
  --h6-font: 'Architects Daughter';
  --h6-line-height: 1.5;
  --he-text-on-accent-active: #f1f1f1;
  --he-text-on-accent-inactive: #2f2f2f;
  --he-title-bar-active-bg: #5c7a62;
  --he-title-bar-active-fg: #f5f5f5;
  --he-title-bar-active-pinned-bg: #8e6787;
  --he-title-bar-height: 22px;
  --he-title-bar-inactive-bg: #737373;
  --he-title-bar-inactive-fg: #e3e3e3;
  --he-title-bar-inactive-pinned-bg: #737373;
  --he-view-header-height: 22px;
  --heading-formatting: #a0a0a0;
  --heading-spacing: 22.4px;
  --hr-color: #1b1b1b;
  --interactive-accent: #594054;
  --interactive-accent-hover: #8e6787;
  --interactive-accent-hsl: 344, 30%, 51%;
  --interactive-disabled: #3f3f3f;
  --interactive-hover: #8e6787;
  --interactive-normal: #3f3f3f;
  --interactive-toggle: #5c7a62;
  --italic-color: #deaab8;
  --link-color: #cdcdcd;
  --link-color-hover: #74c6c5;
  --link-external-color: #cdcdcd;
  --link-external-color-hover: #74c6c5;
  --link-unresolved-color: #cdcdcd;
  --link-unresolved-decoration-color: #058080;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #2f2f2f;
  --menu-border-color: black;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --modifier-text: #fafafa;
  --modifier-text-accent: #f8f8f8;
  --p-spacing: 16px;
  --pdf-background: #1e1e1e;
  --pdf-page-background: #1e1e1e;
  --pdf-shadow: 0 0 0 1px #1b1b1b;
  --pdf-sidebar-background: #1e1e1e;
  --pdf-thumbnail-shadow: 0 0 0 1px #1b1b1b;
  --popover-font-size: 16px;
  --primary-accent-0: #e2d9e1;
  --primary-accent-1: #d7c9d5;
  --primary-accent-1-rgb: 215,201,213;
  --primary-accent-2: #c6b2c3;
  --primary-accent-3: #b399ae;
  --primary-accent-4: #8e6787;
  --primary-accent-4-rgb: 142,103,135;
  --primary-accent-5: #594054;
  --primary-accent-6: #392a37;
  --raised-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #1e1e1e;
  --secondary-accent-0: #d6ddd7;
  --secondary-accent-1: #c5d0c8;
  --secondary-accent-1-rgb: 197,208,200;
  --secondary-accent-2: #adbcb0;
  --secondary-accent-3: #91a695;
  --secondary-accent-4: #5c7a62;
  --secondary-accent-4-rgb: 92,122,98;
  --secondary-accent-5: #3a4d3e;
  --secondary-accent-6: #263228;
  --setting-group-heading-color: #cdcdcd;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #272727;
  --setting-items-border-color: #1b1b1b;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #272727;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 16px;
  --shiki-code-comment: #a0a0a0;
  --shiki-code-function: #adbcb0;
  --shiki-code-important: #e3ac97;
  --shiki-code-keyword: #deaab8;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #74c6c5;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #e0b15e;
  --shiki-code-value: #c6b2c3;
  --shiki-gutter-border-color: #1b1b1b;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #a0a0a0;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(173, 188, 176, 0.5);
  --shiki-highlight-green-background: rgba(173, 188, 176, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(237, 166, 165, 0.5);
  --shiki-highlight-red-background: rgba(237, 166, 165, 0.1);
  --shiki-terminal-dots-color: #a0a0a0;
  --shiki-tooltip-background: #3f3f3f;
  --suggestion-background: #1e1e1e;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #eda6a5;
  --sync-avatar-color-2: #e3ac97;
  --sync-avatar-color-3: #e0b15e;
  --sync-avatar-color-4: #adbcb0;
  --sync-avatar-color-5: #74c6c5;
  --sync-avatar-color-6: #9fbbd8;
  --sync-avatar-color-7: #c6b2c3;
  --sync-avatar-color-8: #deaab8;
  --tab-background-active: #1e1e1e;
  --tab-divider-color: black;
  --tab-font-size: 13px;
  --tab-outline-color: #070707;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #2f2f2f;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f2f2f, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(344, 30%, 51%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #b8b8b8;
  --tab-text-color-focused: #cdcdcd;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #cdcdcd;
  --tab-text-color-focused-highlighted: #c6b2c3;
  --table-add-button-border-color: #1b1b1b;
  --table-add-button-border-width: 1px;
  --table-background: rgba(0, 0, 0, 0.2);
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #594054;
  --table-drag-handle-color: #a0a0a0;
  --table-drag-handle-color-active: #fafafa;
  --table-header-background: #594054;
  --table-header-background-hover: #8e6787;
  --table-header-border-color: #1b1b1b;
  --table-header-border-width: 1px;
  --table-header-color: #fafafa;
  --table-header-size: 0.933em;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.2);
  --table-row-background-hover: rgba(142, 103, 135, 0.2);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(344, 30%, 51%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #594054;
  --table-text-size: 16px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: hsla(344, 30%, 51%, 0.15);
  --tag-border-color-hover: hsla(344, 30%, 51%, 0.15);
  --tag-color: #c6b2c3;
  --tag-color-hover: #c6b2c3;
  --tag-size: 0.875em;
  --text-accent: #c6b2c3;
  --text-accent-hover: #d7c9d5;
  --text-error: #e68584;
  --text-faint: #a0a0a0;
  --text-highlight-bg: #c6b2c3;
  --text-highlight-fg: #2f2f2f;
  --text-muted: #b8b8b8;
  --text-normal: #cdcdcd;
  --text-on-accent: #fafafa;
  --text-selection: rgba(142, 103, 135, 0.2);
  --text-selection-active: rgba(142, 103, 135, 0.01);
  --text-success: #91a695;
  --text-warning: #e3ac97;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(61, 126, 123, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(61, 126, 123, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(61, 126, 123, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(61, 126, 123, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--ebw-callout-danger, 230, 133, 132);
  background: rgba(230, 133, 132, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(230, 133, 132, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(230, 133, 132, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(230, 133, 132, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(230, 133, 132, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--ebw-callout-example, 142, 103, 135);
  background: rgba(142, 103, 135, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(142, 103, 135, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(142, 103, 135, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(142, 103, 135, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(142, 103, 135, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="excerpt"] {
  --background-modifier-active-hover: hsla(344, 30%, 51%, 0.15);
  --background-modifier-border: #1b1b1b;
  --background-modifier-border-focus: #070707;
  --background-modifier-border-hover: black;
  --background-modifier-error: #7a302f;
  --background-modifier-error-hover: #c24c4a;
  --background-modifier-error-rgb: 122,48,47;
  --background-modifier-form-field: #3f3f3f;
  --background-modifier-form-field-hover: #3f3f3f;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-info: #2c496e;
  --background-modifier-message: #3f3f3f;
  --background-modifier-success: #3a4d3e;
  --background-modifier-success-rgb: 58,77,62;
  --background-modifier-warning: #8d6e3b;
  --background-modifier-warning-hover: #c49a52;
  --background-primary: #1e1e1e;
  --background-primary-alt: #272727;
  --background-secondary: #2f2f2f;
  --background-secondary-alt: #212121;
  --blockquote-border-color: #5c7a62;
  --blur-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: #7fa4ca;
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 237,166,165;
  --callout-color: var(--ebw-callout-quote, 53, 120, 175);
  --callout-content-padding: 0 8px;
  --callout-default: 159,187,216;
  --callout-error: 237,166,165;
  --callout-example: 198,178,195;
  --callout-fail: 237,166,165;
  --callout-important: 158,190,188;
  --callout-info: 159,187,216;
  --callout-padding: 0;
  --callout-question: 227,172,151;
  --callout-radius: 8px;
  --callout-success: 173,188,176;
  --callout-summary: 158,190,188;
  --callout-tip: 158,190,188;
  --callout-title-padding: 8px;
  --callout-title-weight: 600;
  --callout-todo: 159,187,216;
  --callout-warning: 227,172,151;
  --canvas-background: #1e1e1e;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #2f2f2f;
  --caret-color: #cdcdcd;
  --checkbox-border-color: #a0a0a0;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-cancelled: #737373;
  --checkbox-checked: #5c7a62;
  --checkbox-color: #594054;
  --checkbox-color-hover: #8e6787;
  --checkbox-deferred: #7fa4ca;
  --checkbox-hover: #898989;
  --checkbox-important: #a75c70;
  --checkbox-in-progress: #058080;
  --checkbox-marker-color: #1e1e1e;
  --checkbox-question: #c49a52;
  --checkbox-radius: 4px;
  --checkbox-review: #91a695;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #272727;
  --code-border-color: #1b1b1b;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #a0a0a0;
  --code-function: #e0b15e;
  --code-important: #e3ac97;
  --code-keyword: #deaab8;
  --code-normal: #9fbbd8;
  --code-operator: #eda6a5;
  --code-property: #74c6c5;
  --code-punctuation: #b8b8b8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #adbcb0;
  --code-tag: #eda6a5;
  --code-value: #c6b2c3;
  --collapse-icon-color: #a0a0a0;
  --collapse-icon-color-collapsed: #c6b2c3;
  --color-accent: hsl(344, 30%, 51%);
  --color-accent-1: hsl(341, 30.6%, 58.65%);
  --color-accent-2: hsl(339, 31.5%, 65.79%);
  --color-accent-hsl: 344, 30%, 51%;
  --color-base-00: #070707;
  --color-base-05: #1b1b1b;
  --color-base-10: #1e1e1e;
  --color-base-100: #cdcdcd;
  --color-base-20: #212121;
  --color-base-25: #272727;
  --color-base-30: #2f2f2f;
  --color-base-35: #3f3f3f;
  --color-base-40: #484848;
  --color-base-50: #737373;
  --color-base-60: #a0a0a0;
  --color-base-70: #b8b8b8;
  --color-blue: #9fbbd8;
  --color-blue-rgb: 159,187,216;
  --color-cyan: #74c6c5;
  --color-cyan-rgb: 158,190,188;
  --color-green: #adbcb0;
  --color-green-rgb: 173,188,176;
  --color-orange: #e3ac97;
  --color-orange-rgb: 227,172,151;
  --color-pink: #deaab8;
  --color-pink-rgb: 222,170,184;
  --color-purple: #c6b2c3;
  --color-purple-rgb: 198,178,195;
  --color-red: #eda6a5;
  --color-red-rgb: 237,166,165;
  --color-yellow: #e0b15e;
  --color-yellow-rgb: 236,201,134;
  --day-planner-progress-bg: #3a4d3e;
  --day-planner-progress-fg: #91a695;
  --divider-color: #070707;
  --divider-color-hover: #594054;
  --divider-vertical-height: 100%;
  --dropdown-background: #3f3f3f;
  --dropdown-background-hover: #8e6787;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --ebw-calendar-month: #91a695;
  --ebw-calendar-year: #b399ae;
  --ebw-embed-border-color: #2f2f2f;
  --ebw-font-callout-title: 'Architects Daughter';
  --ebw-font-tags: 'Architects Daughter';
  --ebw-he-title-border: #070707;
  --ebw-link-hidden: #058080;
  --ebw-link-underline: #058080;
  --ebw-row-alt-hover: rgba(142, 103, 135, 0.2);
  --ebw-strong-em: #e0b15e;
  --ebw-tab-title-active-bg: #3a4d3e;
  --ebw-tab-title-active-fg: #cdcdcd;
  --ebw-tab-title-active-focused-bg: #594054;
  --ebw-tab-title-inactive-bg: #5d5d5d;
  --ebw-tab-title-inactive-focused-bg: #5d5d5d;
  --ebw-table-header-alt: #8e6787;
  --ebw-today-hover: #f1f1f1;
  --ebw-today-text: #b399ae;
  --flair-background: #3f3f3f;
  --flair-color: #cdcdcd;
  --font-interface: '??', 'IBM Plex Sans', Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-mermaid: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-monospace: '??', 'Fira Code', 'Source Code Pro', Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-print: '??', '??', 'IBM Plex Sans', Helvetica Neue, 'Arial';
  --font-text: '??', 'IBM Plex Sans', Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-weight: 400;
  --graph-line: #484848;
  --graph-node: #8e6787;
  --graph-node-attachment: #adbcb0;
  --graph-node-focused: #ecc986;
  --graph-node-tag: #91a695;
  --graph-node-unresolved: #b8b8b8;
  --graph-text: #cdcdcd;
  --h1-color: #e0b15e;
  --h1-font: 'Architects Daughter';
  --h1-line-height: 1.5;
  --h2-color: #91a695;
  --h2-font: 'Architects Daughter';
  --h2-line-height: 1.5;
  --h3-color: #41b0b0;
  --h3-font: 'Architects Daughter';
  --h3-line-height: 1.5;
  --h4-color: #7fa4ca;
  --h4-font: 'Architects Daughter';
  --h4-line-height: 1.5;
  --h5-color: #b399ae;
  --h5-font: 'Architects Daughter';
  --h5-line-height: 1.5;
  --h6-color: #d38d9f;
  --h6-font: 'Architects Daughter';
  --h6-line-height: 1.5;
  --he-text-on-accent-active: #f1f1f1;
  --he-text-on-accent-inactive: #2f2f2f;
  --he-title-bar-active-bg: #5c7a62;
  --he-title-bar-active-fg: #f5f5f5;
  --he-title-bar-active-pinned-bg: #8e6787;
  --he-title-bar-height: 22px;
  --he-title-bar-inactive-bg: #737373;
  --he-title-bar-inactive-fg: #e3e3e3;
  --he-title-bar-inactive-pinned-bg: #737373;
  --he-view-header-height: 22px;
  --heading-formatting: #a0a0a0;
  --heading-spacing: 22.4px;
  --hr-color: #1b1b1b;
  --interactive-accent: #594054;
  --interactive-accent-hover: #8e6787;
  --interactive-accent-hsl: 344, 30%, 51%;
  --interactive-disabled: #3f3f3f;
  --interactive-hover: #8e6787;
  --interactive-normal: #3f3f3f;
  --interactive-toggle: #5c7a62;
  --italic-color: #deaab8;
  --link-color: #cdcdcd;
  --link-color-hover: #74c6c5;
  --link-external-color: #cdcdcd;
  --link-external-color-hover: #74c6c5;
  --link-unresolved-color: #cdcdcd;
  --link-unresolved-decoration-color: #058080;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #2f2f2f;
  --menu-border-color: black;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --modifier-text: #fafafa;
  --modifier-text-accent: #f8f8f8;
  --p-spacing: 16px;
  --pdf-background: #1e1e1e;
  --pdf-page-background: #1e1e1e;
  --pdf-shadow: 0 0 0 1px #1b1b1b;
  --pdf-sidebar-background: #1e1e1e;
  --pdf-thumbnail-shadow: 0 0 0 1px #1b1b1b;
  --popover-font-size: 16px;
  --primary-accent-0: #e2d9e1;
  --primary-accent-1: #d7c9d5;
  --primary-accent-1-rgb: 215,201,213;
  --primary-accent-2: #c6b2c3;
  --primary-accent-3: #b399ae;
  --primary-accent-4: #8e6787;
  --primary-accent-4-rgb: 142,103,135;
  --primary-accent-5: #594054;
  --primary-accent-6: #392a37;
  --raised-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #1e1e1e;
  --secondary-accent-0: #d6ddd7;
  --secondary-accent-1: #c5d0c8;
  --secondary-accent-1-rgb: 197,208,200;
  --secondary-accent-2: #adbcb0;
  --secondary-accent-3: #91a695;
  --secondary-accent-4: #5c7a62;
  --secondary-accent-4-rgb: 92,122,98;
  --secondary-accent-5: #3a4d3e;
  --secondary-accent-6: #263228;
  --setting-group-heading-color: #cdcdcd;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #272727;
  --setting-items-border-color: #1b1b1b;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #272727;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 16px;
  --shiki-code-comment: #a0a0a0;
  --shiki-code-function: #adbcb0;
  --shiki-code-important: #e3ac97;
  --shiki-code-keyword: #deaab8;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #74c6c5;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #e0b15e;
  --shiki-code-value: #c6b2c3;
  --shiki-gutter-border-color: #1b1b1b;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #a0a0a0;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(173, 188, 176, 0.5);
  --shiki-highlight-green-background: rgba(173, 188, 176, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(237, 166, 165, 0.5);
  --shiki-highlight-red-background: rgba(237, 166, 165, 0.1);
  --shiki-terminal-dots-color: #a0a0a0;
  --shiki-tooltip-background: #3f3f3f;
  --suggestion-background: #1e1e1e;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #eda6a5;
  --sync-avatar-color-2: #e3ac97;
  --sync-avatar-color-3: #e0b15e;
  --sync-avatar-color-4: #adbcb0;
  --sync-avatar-color-5: #74c6c5;
  --sync-avatar-color-6: #9fbbd8;
  --sync-avatar-color-7: #c6b2c3;
  --sync-avatar-color-8: #deaab8;
  --tab-background-active: #1e1e1e;
  --tab-divider-color: black;
  --tab-font-size: 13px;
  --tab-outline-color: #070707;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #2f2f2f;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f2f2f, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(344, 30%, 51%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #b8b8b8;
  --tab-text-color-focused: #cdcdcd;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #cdcdcd;
  --tab-text-color-focused-highlighted: #c6b2c3;
  --table-add-button-border-color: #1b1b1b;
  --table-add-button-border-width: 1px;
  --table-background: rgba(0, 0, 0, 0.2);
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #594054;
  --table-drag-handle-color: #a0a0a0;
  --table-drag-handle-color-active: #fafafa;
  --table-header-background: #594054;
  --table-header-background-hover: #8e6787;
  --table-header-border-color: #1b1b1b;
  --table-header-border-width: 1px;
  --table-header-color: #fafafa;
  --table-header-size: 0.933em;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.2);
  --table-row-background-hover: rgba(142, 103, 135, 0.2);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(344, 30%, 51%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #594054;
  --table-text-size: 16px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: hsla(344, 30%, 51%, 0.15);
  --tag-border-color-hover: hsla(344, 30%, 51%, 0.15);
  --tag-color: #c6b2c3;
  --tag-color-hover: #c6b2c3;
  --tag-size: 0.875em;
  --text-accent: #c6b2c3;
  --text-accent-hover: #d7c9d5;
  --text-error: #e68584;
  --text-faint: #a0a0a0;
  --text-highlight-bg: #c6b2c3;
  --text-highlight-fg: #2f2f2f;
  --text-muted: #b8b8b8;
  --text-normal: #cdcdcd;
  --text-on-accent: #fafafa;
  --text-selection: rgba(142, 103, 135, 0.2);
  --text-selection-active: rgba(142, 103, 135, 0.01);
  --text-success: #91a695;
  --text-warning: #e3ac97;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(53, 120, 175, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(53, 120, 175, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(53, 120, 175, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(53, 120, 175, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--ebw-callout-failure, 211, 141, 159);
  background: rgba(211, 141, 159, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(211, 141, 159, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(211, 141, 159, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(211, 141, 159, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(211, 141, 159, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--ebw-callout-info, 111, 166, 211);
  background: rgba(111, 166, 211, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(111, 166, 211, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(111, 166, 211, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(111, 166, 211, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(111, 166, 211, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--ebw-callout-note, 148, 189, 223);
  background: rgba(148, 189, 223, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(148, 189, 223, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(148, 189, 223, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(148, 189, 223, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(148, 189, 223, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--ebw-callout-question, 89, 174, 170);
  background: rgba(89, 174, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(89, 174, 170, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(89, 174, 170, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(89, 174, 170, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(89, 174, 170, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--ebw-callout-quote, 53, 120, 175);
  background: rgba(53, 120, 175, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(53, 120, 175, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(53, 120, 175, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(53, 120, 175, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(53, 120, 175, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="reference"] {
  --background-modifier-active-hover: hsla(344, 30%, 51%, 0.15);
  --background-modifier-border: #1b1b1b;
  --background-modifier-border-focus: #070707;
  --background-modifier-border-hover: black;
  --background-modifier-error: #7a302f;
  --background-modifier-error-hover: #c24c4a;
  --background-modifier-error-rgb: 122,48,47;
  --background-modifier-form-field: #3f3f3f;
  --background-modifier-form-field-hover: #3f3f3f;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-info: #2c496e;
  --background-modifier-message: #3f3f3f;
  --background-modifier-success: #3a4d3e;
  --background-modifier-success-rgb: 58,77,62;
  --background-modifier-warning: #8d6e3b;
  --background-modifier-warning-hover: #c49a52;
  --background-primary: #1e1e1e;
  --background-primary-alt: #272727;
  --background-secondary: #2f2f2f;
  --background-secondary-alt: #212121;
  --blockquote-border-color: #5c7a62;
  --blur-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: #7fa4ca;
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 237,166,165;
  --callout-color: var(--ebw-callout-reference, 183, 183, 183);
  --callout-content-padding: 0 8px;
  --callout-default: 159,187,216;
  --callout-error: 237,166,165;
  --callout-example: 198,178,195;
  --callout-fail: 237,166,165;
  --callout-important: 158,190,188;
  --callout-info: 159,187,216;
  --callout-padding: 0;
  --callout-question: 227,172,151;
  --callout-radius: 8px;
  --callout-success: 173,188,176;
  --callout-summary: 158,190,188;
  --callout-tip: 158,190,188;
  --callout-title-padding: 8px;
  --callout-title-weight: 600;
  --callout-todo: 159,187,216;
  --callout-warning: 227,172,151;
  --canvas-background: #1e1e1e;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #2f2f2f;
  --caret-color: #cdcdcd;
  --checkbox-border-color: #a0a0a0;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-cancelled: #737373;
  --checkbox-checked: #5c7a62;
  --checkbox-color: #594054;
  --checkbox-color-hover: #8e6787;
  --checkbox-deferred: #7fa4ca;
  --checkbox-hover: #898989;
  --checkbox-important: #a75c70;
  --checkbox-in-progress: #058080;
  --checkbox-marker-color: #1e1e1e;
  --checkbox-question: #c49a52;
  --checkbox-radius: 4px;
  --checkbox-review: #91a695;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #272727;
  --code-border-color: #1b1b1b;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #a0a0a0;
  --code-function: #e0b15e;
  --code-important: #e3ac97;
  --code-keyword: #deaab8;
  --code-normal: #9fbbd8;
  --code-operator: #eda6a5;
  --code-property: #74c6c5;
  --code-punctuation: #b8b8b8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #adbcb0;
  --code-tag: #eda6a5;
  --code-value: #c6b2c3;
  --collapse-icon-color: #a0a0a0;
  --collapse-icon-color-collapsed: #c6b2c3;
  --color-accent: hsl(344, 30%, 51%);
  --color-accent-1: hsl(341, 30.6%, 58.65%);
  --color-accent-2: hsl(339, 31.5%, 65.79%);
  --color-accent-hsl: 344, 30%, 51%;
  --color-base-00: #070707;
  --color-base-05: #1b1b1b;
  --color-base-10: #1e1e1e;
  --color-base-100: #cdcdcd;
  --color-base-20: #212121;
  --color-base-25: #272727;
  --color-base-30: #2f2f2f;
  --color-base-35: #3f3f3f;
  --color-base-40: #484848;
  --color-base-50: #737373;
  --color-base-60: #a0a0a0;
  --color-base-70: #b8b8b8;
  --color-blue: #9fbbd8;
  --color-blue-rgb: 159,187,216;
  --color-cyan: #74c6c5;
  --color-cyan-rgb: 158,190,188;
  --color-green: #adbcb0;
  --color-green-rgb: 173,188,176;
  --color-orange: #e3ac97;
  --color-orange-rgb: 227,172,151;
  --color-pink: #deaab8;
  --color-pink-rgb: 222,170,184;
  --color-purple: #c6b2c3;
  --color-purple-rgb: 198,178,195;
  --color-red: #eda6a5;
  --color-red-rgb: 237,166,165;
  --color-yellow: #e0b15e;
  --color-yellow-rgb: 236,201,134;
  --day-planner-progress-bg: #3a4d3e;
  --day-planner-progress-fg: #91a695;
  --divider-color: #070707;
  --divider-color-hover: #594054;
  --divider-vertical-height: 100%;
  --dropdown-background: #3f3f3f;
  --dropdown-background-hover: #8e6787;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --ebw-calendar-month: #91a695;
  --ebw-calendar-year: #b399ae;
  --ebw-embed-border-color: #2f2f2f;
  --ebw-font-callout-title: 'Architects Daughter';
  --ebw-font-tags: 'Architects Daughter';
  --ebw-he-title-border: #070707;
  --ebw-link-hidden: #058080;
  --ebw-link-underline: #058080;
  --ebw-row-alt-hover: rgba(142, 103, 135, 0.2);
  --ebw-strong-em: #e0b15e;
  --ebw-tab-title-active-bg: #3a4d3e;
  --ebw-tab-title-active-fg: #cdcdcd;
  --ebw-tab-title-active-focused-bg: #594054;
  --ebw-tab-title-inactive-bg: #5d5d5d;
  --ebw-tab-title-inactive-focused-bg: #5d5d5d;
  --ebw-table-header-alt: #8e6787;
  --ebw-today-hover: #f1f1f1;
  --ebw-today-text: #b399ae;
  --flair-background: #3f3f3f;
  --flair-color: #cdcdcd;
  --font-interface: '??', 'IBM Plex Sans', Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-mermaid: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-monospace: '??', 'Fira Code', 'Source Code Pro', Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-print: '??', '??', 'IBM Plex Sans', Helvetica Neue, 'Arial';
  --font-text: '??', 'IBM Plex Sans', Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-weight: 400;
  --graph-line: #484848;
  --graph-node: #8e6787;
  --graph-node-attachment: #adbcb0;
  --graph-node-focused: #ecc986;
  --graph-node-tag: #91a695;
  --graph-node-unresolved: #b8b8b8;
  --graph-text: #cdcdcd;
  --h1-color: #e0b15e;
  --h1-font: 'Architects Daughter';
  --h1-line-height: 1.5;
  --h2-color: #91a695;
  --h2-font: 'Architects Daughter';
  --h2-line-height: 1.5;
  --h3-color: #41b0b0;
  --h3-font: 'Architects Daughter';
  --h3-line-height: 1.5;
  --h4-color: #7fa4ca;
  --h4-font: 'Architects Daughter';
  --h4-line-height: 1.5;
  --h5-color: #b399ae;
  --h5-font: 'Architects Daughter';
  --h5-line-height: 1.5;
  --h6-color: #d38d9f;
  --h6-font: 'Architects Daughter';
  --h6-line-height: 1.5;
  --he-text-on-accent-active: #f1f1f1;
  --he-text-on-accent-inactive: #2f2f2f;
  --he-title-bar-active-bg: #5c7a62;
  --he-title-bar-active-fg: #f5f5f5;
  --he-title-bar-active-pinned-bg: #8e6787;
  --he-title-bar-height: 22px;
  --he-title-bar-inactive-bg: #737373;
  --he-title-bar-inactive-fg: #e3e3e3;
  --he-title-bar-inactive-pinned-bg: #737373;
  --he-view-header-height: 22px;
  --heading-formatting: #a0a0a0;
  --heading-spacing: 22.4px;
  --hr-color: #1b1b1b;
  --interactive-accent: #594054;
  --interactive-accent-hover: #8e6787;
  --interactive-accent-hsl: 344, 30%, 51%;
  --interactive-disabled: #3f3f3f;
  --interactive-hover: #8e6787;
  --interactive-normal: #3f3f3f;
  --interactive-toggle: #5c7a62;
  --italic-color: #deaab8;
  --link-color: #cdcdcd;
  --link-color-hover: #74c6c5;
  --link-external-color: #cdcdcd;
  --link-external-color-hover: #74c6c5;
  --link-unresolved-color: #cdcdcd;
  --link-unresolved-decoration-color: #058080;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #2f2f2f;
  --menu-border-color: black;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --modifier-text: #fafafa;
  --modifier-text-accent: #f8f8f8;
  --p-spacing: 16px;
  --pdf-background: #1e1e1e;
  --pdf-page-background: #1e1e1e;
  --pdf-shadow: 0 0 0 1px #1b1b1b;
  --pdf-sidebar-background: #1e1e1e;
  --pdf-thumbnail-shadow: 0 0 0 1px #1b1b1b;
  --popover-font-size: 16px;
  --primary-accent-0: #e2d9e1;
  --primary-accent-1: #d7c9d5;
  --primary-accent-1-rgb: 215,201,213;
  --primary-accent-2: #c6b2c3;
  --primary-accent-3: #b399ae;
  --primary-accent-4: #8e6787;
  --primary-accent-4-rgb: 142,103,135;
  --primary-accent-5: #594054;
  --primary-accent-6: #392a37;
  --raised-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #1e1e1e;
  --secondary-accent-0: #d6ddd7;
  --secondary-accent-1: #c5d0c8;
  --secondary-accent-1-rgb: 197,208,200;
  --secondary-accent-2: #adbcb0;
  --secondary-accent-3: #91a695;
  --secondary-accent-4: #5c7a62;
  --secondary-accent-4-rgb: 92,122,98;
  --secondary-accent-5: #3a4d3e;
  --secondary-accent-6: #263228;
  --setting-group-heading-color: #cdcdcd;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #272727;
  --setting-items-border-color: #1b1b1b;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #272727;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 16px;
  --shiki-code-comment: #a0a0a0;
  --shiki-code-function: #adbcb0;
  --shiki-code-important: #e3ac97;
  --shiki-code-keyword: #deaab8;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #74c6c5;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #e0b15e;
  --shiki-code-value: #c6b2c3;
  --shiki-gutter-border-color: #1b1b1b;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #a0a0a0;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(173, 188, 176, 0.5);
  --shiki-highlight-green-background: rgba(173, 188, 176, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(237, 166, 165, 0.5);
  --shiki-highlight-red-background: rgba(237, 166, 165, 0.1);
  --shiki-terminal-dots-color: #a0a0a0;
  --shiki-tooltip-background: #3f3f3f;
  --suggestion-background: #1e1e1e;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #eda6a5;
  --sync-avatar-color-2: #e3ac97;
  --sync-avatar-color-3: #e0b15e;
  --sync-avatar-color-4: #adbcb0;
  --sync-avatar-color-5: #74c6c5;
  --sync-avatar-color-6: #9fbbd8;
  --sync-avatar-color-7: #c6b2c3;
  --sync-avatar-color-8: #deaab8;
  --tab-background-active: #1e1e1e;
  --tab-divider-color: black;
  --tab-font-size: 13px;
  --tab-outline-color: #070707;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #2f2f2f;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f2f2f, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(344, 30%, 51%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #b8b8b8;
  --tab-text-color-focused: #cdcdcd;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #cdcdcd;
  --tab-text-color-focused-highlighted: #c6b2c3;
  --table-add-button-border-color: #1b1b1b;
  --table-add-button-border-width: 1px;
  --table-background: rgba(0, 0, 0, 0.2);
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #594054;
  --table-drag-handle-color: #a0a0a0;
  --table-drag-handle-color-active: #fafafa;
  --table-header-background: #594054;
  --table-header-background-hover: #8e6787;
  --table-header-border-color: #1b1b1b;
  --table-header-border-width: 1px;
  --table-header-color: #fafafa;
  --table-header-size: 0.933em;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.2);
  --table-row-background-hover: rgba(142, 103, 135, 0.2);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(344, 30%, 51%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #594054;
  --table-text-size: 16px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: hsla(344, 30%, 51%, 0.15);
  --tag-border-color-hover: hsla(344, 30%, 51%, 0.15);
  --tag-color: #c6b2c3;
  --tag-color-hover: #c6b2c3;
  --tag-size: 0.875em;
  --text-accent: #c6b2c3;
  --text-accent-hover: #d7c9d5;
  --text-error: #e68584;
  --text-faint: #a0a0a0;
  --text-highlight-bg: #c6b2c3;
  --text-highlight-fg: #2f2f2f;
  --text-muted: #b8b8b8;
  --text-normal: #cdcdcd;
  --text-on-accent: #fafafa;
  --text-selection: rgba(142, 103, 135, 0.2);
  --text-selection-active: rgba(142, 103, 135, 0.01);
  --text-success: #91a695;
  --text-warning: #e3ac97;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(183, 183, 183, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(183, 183, 183, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(183, 183, 183, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(183, 183, 183, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--ebw-callout-success, 139, 167, 145);
  background: rgba(139, 167, 145, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(139, 167, 145, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(139, 167, 145, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(139, 167, 145, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(139, 167, 145, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--ebw-callout-tip, 134, 196, 193);
  background: rgba(134, 196, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(134, 196, 193, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(134, 196, 193, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(134, 196, 193, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(134, 196, 193, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="toc"] {
  --background-modifier-active-hover: hsla(344, 30%, 51%, 0.15);
  --background-modifier-border: #1b1b1b;
  --background-modifier-border-focus: #070707;
  --background-modifier-border-hover: black;
  --background-modifier-error: #7a302f;
  --background-modifier-error-hover: #c24c4a;
  --background-modifier-error-rgb: 122,48,47;
  --background-modifier-form-field: #3f3f3f;
  --background-modifier-form-field-hover: #3f3f3f;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-info: #2c496e;
  --background-modifier-message: #3f3f3f;
  --background-modifier-success: #3a4d3e;
  --background-modifier-success-rgb: 58,77,62;
  --background-modifier-warning: #8d6e3b;
  --background-modifier-warning-hover: #c49a52;
  --background-primary: #1e1e1e;
  --background-primary-alt: #272727;
  --background-secondary: #2f2f2f;
  --background-secondary-alt: #212121;
  --blockquote-border-color: #5c7a62;
  --blur-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: #7fa4ca;
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 237,166,165;
  --callout-color: var(--ebw-callout-toc, 235, 235, 235);
  --callout-content-padding: 0 8px;
  --callout-default: 159,187,216;
  --callout-error: 237,166,165;
  --callout-example: 198,178,195;
  --callout-fail: 237,166,165;
  --callout-important: 158,190,188;
  --callout-info: 159,187,216;
  --callout-padding: 0;
  --callout-question: 227,172,151;
  --callout-radius: 8px;
  --callout-success: 173,188,176;
  --callout-summary: 158,190,188;
  --callout-tip: 158,190,188;
  --callout-title-padding: 8px;
  --callout-title-weight: 600;
  --callout-todo: 159,187,216;
  --callout-warning: 227,172,151;
  --canvas-background: #1e1e1e;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #2f2f2f;
  --caret-color: #cdcdcd;
  --checkbox-border-color: #a0a0a0;
  --checkbox-border-color-hover: #b8b8b8;
  --checkbox-cancelled: #737373;
  --checkbox-checked: #5c7a62;
  --checkbox-color: #594054;
  --checkbox-color-hover: #8e6787;
  --checkbox-deferred: #7fa4ca;
  --checkbox-hover: #898989;
  --checkbox-important: #a75c70;
  --checkbox-in-progress: #058080;
  --checkbox-marker-color: #1e1e1e;
  --checkbox-question: #c49a52;
  --checkbox-radius: 4px;
  --checkbox-review: #91a695;
  --checkbox-size: 16px;
  --checklist-done-color: #b8b8b8;
  --clickable-icon-radius: 4px;
  --code-background: #272727;
  --code-border-color: #1b1b1b;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #a0a0a0;
  --code-function: #e0b15e;
  --code-important: #e3ac97;
  --code-keyword: #deaab8;
  --code-normal: #9fbbd8;
  --code-operator: #eda6a5;
  --code-property: #74c6c5;
  --code-punctuation: #b8b8b8;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #adbcb0;
  --code-tag: #eda6a5;
  --code-value: #c6b2c3;
  --collapse-icon-color: #a0a0a0;
  --collapse-icon-color-collapsed: #c6b2c3;
  --color-accent: hsl(344, 30%, 51%);
  --color-accent-1: hsl(341, 30.6%, 58.65%);
  --color-accent-2: hsl(339, 31.5%, 65.79%);
  --color-accent-hsl: 344, 30%, 51%;
  --color-base-00: #070707;
  --color-base-05: #1b1b1b;
  --color-base-10: #1e1e1e;
  --color-base-100: #cdcdcd;
  --color-base-20: #212121;
  --color-base-25: #272727;
  --color-base-30: #2f2f2f;
  --color-base-35: #3f3f3f;
  --color-base-40: #484848;
  --color-base-50: #737373;
  --color-base-60: #a0a0a0;
  --color-base-70: #b8b8b8;
  --color-blue: #9fbbd8;
  --color-blue-rgb: 159,187,216;
  --color-cyan: #74c6c5;
  --color-cyan-rgb: 158,190,188;
  --color-green: #adbcb0;
  --color-green-rgb: 173,188,176;
  --color-orange: #e3ac97;
  --color-orange-rgb: 227,172,151;
  --color-pink: #deaab8;
  --color-pink-rgb: 222,170,184;
  --color-purple: #c6b2c3;
  --color-purple-rgb: 198,178,195;
  --color-red: #eda6a5;
  --color-red-rgb: 237,166,165;
  --color-yellow: #e0b15e;
  --color-yellow-rgb: 236,201,134;
  --day-planner-progress-bg: #3a4d3e;
  --day-planner-progress-fg: #91a695;
  --divider-color: #070707;
  --divider-color-hover: #594054;
  --divider-vertical-height: 100%;
  --dropdown-background: #3f3f3f;
  --dropdown-background-hover: #8e6787;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --ebw-calendar-month: #91a695;
  --ebw-calendar-year: #b399ae;
  --ebw-embed-border-color: #2f2f2f;
  --ebw-font-callout-title: 'Architects Daughter';
  --ebw-font-tags: 'Architects Daughter';
  --ebw-he-title-border: #070707;
  --ebw-link-hidden: #058080;
  --ebw-link-underline: #058080;
  --ebw-row-alt-hover: rgba(142, 103, 135, 0.2);
  --ebw-strong-em: #e0b15e;
  --ebw-tab-title-active-bg: #3a4d3e;
  --ebw-tab-title-active-fg: #cdcdcd;
  --ebw-tab-title-active-focused-bg: #594054;
  --ebw-tab-title-inactive-bg: #5d5d5d;
  --ebw-tab-title-inactive-focused-bg: #5d5d5d;
  --ebw-table-header-alt: #8e6787;
  --ebw-today-hover: #f1f1f1;
  --ebw-today-text: #b399ae;
  --flair-background: #3f3f3f;
  --flair-color: #cdcdcd;
  --font-interface: '??', 'IBM Plex Sans', Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-mermaid: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-monospace: '??', 'Fira Code', 'Source Code Pro', Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-print: '??', '??', 'IBM Plex Sans', Helvetica Neue, 'Arial';
  --font-text: '??', 'IBM Plex Sans', Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-weight: 400;
  --graph-line: #484848;
  --graph-node: #8e6787;
  --graph-node-attachment: #adbcb0;
  --graph-node-focused: #ecc986;
  --graph-node-tag: #91a695;
  --graph-node-unresolved: #b8b8b8;
  --graph-text: #cdcdcd;
  --h1-color: #e0b15e;
  --h1-font: 'Architects Daughter';
  --h1-line-height: 1.5;
  --h2-color: #91a695;
  --h2-font: 'Architects Daughter';
  --h2-line-height: 1.5;
  --h3-color: #41b0b0;
  --h3-font: 'Architects Daughter';
  --h3-line-height: 1.5;
  --h4-color: #7fa4ca;
  --h4-font: 'Architects Daughter';
  --h4-line-height: 1.5;
  --h5-color: #b399ae;
  --h5-font: 'Architects Daughter';
  --h5-line-height: 1.5;
  --h6-color: #d38d9f;
  --h6-font: 'Architects Daughter';
  --h6-line-height: 1.5;
  --he-text-on-accent-active: #f1f1f1;
  --he-text-on-accent-inactive: #2f2f2f;
  --he-title-bar-active-bg: #5c7a62;
  --he-title-bar-active-fg: #f5f5f5;
  --he-title-bar-active-pinned-bg: #8e6787;
  --he-title-bar-height: 22px;
  --he-title-bar-inactive-bg: #737373;
  --he-title-bar-inactive-fg: #e3e3e3;
  --he-title-bar-inactive-pinned-bg: #737373;
  --he-view-header-height: 22px;
  --heading-formatting: #a0a0a0;
  --heading-spacing: 22.4px;
  --hr-color: #1b1b1b;
  --interactive-accent: #594054;
  --interactive-accent-hover: #8e6787;
  --interactive-accent-hsl: 344, 30%, 51%;
  --interactive-disabled: #3f3f3f;
  --interactive-hover: #8e6787;
  --interactive-normal: #3f3f3f;
  --interactive-toggle: #5c7a62;
  --italic-color: #deaab8;
  --link-color: #cdcdcd;
  --link-color-hover: #74c6c5;
  --link-external-color: #cdcdcd;
  --link-external-color-hover: #74c6c5;
  --link-unresolved-color: #cdcdcd;
  --link-unresolved-decoration-color: #058080;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #2f2f2f;
  --menu-border-color: black;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --modifier-text: #fafafa;
  --modifier-text-accent: #f8f8f8;
  --p-spacing: 16px;
  --pdf-background: #1e1e1e;
  --pdf-page-background: #1e1e1e;
  --pdf-shadow: 0 0 0 1px #1b1b1b;
  --pdf-sidebar-background: #1e1e1e;
  --pdf-thumbnail-shadow: 0 0 0 1px #1b1b1b;
  --popover-font-size: 16px;
  --primary-accent-0: #e2d9e1;
  --primary-accent-1: #d7c9d5;
  --primary-accent-1-rgb: 215,201,213;
  --primary-accent-2: #c6b2c3;
  --primary-accent-3: #b399ae;
  --primary-accent-4: #8e6787;
  --primary-accent-4-rgb: 142,103,135;
  --primary-accent-5: #594054;
  --primary-accent-6: #392a37;
  --raised-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #1e1e1e;
  --secondary-accent-0: #d6ddd7;
  --secondary-accent-1: #c5d0c8;
  --secondary-accent-1-rgb: 197,208,200;
  --secondary-accent-2: #adbcb0;
  --secondary-accent-3: #91a695;
  --secondary-accent-4: #5c7a62;
  --secondary-accent-4-rgb: 92,122,98;
  --secondary-accent-5: #3a4d3e;
  --secondary-accent-6: #263228;
  --setting-group-heading-color: #cdcdcd;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #272727;
  --setting-items-border-color: #1b1b1b;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #272727;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 16px;
  --shiki-code-comment: #a0a0a0;
  --shiki-code-function: #adbcb0;
  --shiki-code-important: #e3ac97;
  --shiki-code-keyword: #deaab8;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-property: #74c6c5;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-code-string: #e0b15e;
  --shiki-code-value: #c6b2c3;
  --shiki-gutter-border-color: #1b1b1b;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #a0a0a0;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-green: rgba(173, 188, 176, 0.5);
  --shiki-highlight-green-background: rgba(173, 188, 176, 0.1);
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(237, 166, 165, 0.5);
  --shiki-highlight-red-background: rgba(237, 166, 165, 0.1);
  --shiki-terminal-dots-color: #a0a0a0;
  --shiki-tooltip-background: #3f3f3f;
  --suggestion-background: #1e1e1e;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #eda6a5;
  --sync-avatar-color-2: #e3ac97;
  --sync-avatar-color-3: #e0b15e;
  --sync-avatar-color-4: #adbcb0;
  --sync-avatar-color-5: #74c6c5;
  --sync-avatar-color-6: #9fbbd8;
  --sync-avatar-color-7: #c6b2c3;
  --sync-avatar-color-8: #deaab8;
  --tab-background-active: #1e1e1e;
  --tab-divider-color: black;
  --tab-font-size: 13px;
  --tab-outline-color: #070707;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #2f2f2f;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f2f2f, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(344, 30%, 51%);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #b8b8b8;
  --tab-text-color-focused: #cdcdcd;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #cdcdcd;
  --tab-text-color-focused-highlighted: #c6b2c3;
  --table-add-button-border-color: #1b1b1b;
  --table-add-button-border-width: 1px;
  --table-background: rgba(0, 0, 0, 0.2);
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #594054;
  --table-drag-handle-color: #a0a0a0;
  --table-drag-handle-color-active: #fafafa;
  --table-header-background: #594054;
  --table-header-background-hover: #8e6787;
  --table-header-border-color: #1b1b1b;
  --table-header-border-width: 1px;
  --table-header-color: #fafafa;
  --table-header-size: 0.933em;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.2);
  --table-row-background-hover: rgba(142, 103, 135, 0.2);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(344, 30%, 51%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #594054;
  --table-text-size: 16px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: hsla(344, 30%, 51%, 0.15);
  --tag-border-color-hover: hsla(344, 30%, 51%, 0.15);
  --tag-color: #c6b2c3;
  --tag-color-hover: #c6b2c3;
  --tag-size: 0.875em;
  --text-accent: #c6b2c3;
  --text-accent-hover: #d7c9d5;
  --text-error: #e68584;
  --text-faint: #a0a0a0;
  --text-highlight-bg: #c6b2c3;
  --text-highlight-fg: #2f2f2f;
  --text-muted: #b8b8b8;
  --text-normal: #cdcdcd;
  --text-on-accent: #fafafa;
  --text-selection: rgba(142, 103, 135, 0.2);
  --text-selection-active: rgba(142, 103, 135, 0.01);
  --text-success: #91a695;
  --text-warning: #e3ac97;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(235, 235, 235, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(235, 235, 235, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(235, 235, 235, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(235, 235, 235, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--ebw-callout-info, 111, 166, 211);
  background: rgba(111, 166, 211, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(111, 166, 211, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(111, 166, 211, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(111, 166, 211, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(111, 166, 211, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--ebw-callout-warning, 234, 175, 0);
  background: rgba(234, 175, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(234, 175, 0, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(234, 175, 0, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(234, 175, 0, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(234, 175, 0, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(30, 30, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(205, 205, 205);
  padding-left: 8px;
  padding-right: 8px;
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

html[saved-theme="dark"] body .callout[data-callout="chat"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="excerpt"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="reference"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="toc"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(63, 63, 63);
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
  color: var(--text-normal, rgb(205, 205, 205));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(168, 93, 113, 0.15);
  border-left-color: rgba(168, 93, 113, 0.15);
  border-right-color: rgba(168, 93, 113, 0.15);
  border-top-color: rgba(168, 93, 113, 0.15);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(198, 178, 195);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(224, 177, 94));
  font-family: var(--h1-font, "Architects Daughter");
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(224, 177, 94));
  font-size: var(--inline-title-size, 32px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(145, 166, 149));
  font-family: var(--h2-font, "Architects Daughter");
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(224, 177, 94));
  font-family: var(--inline-title-font, "Architects Daughter");
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(65, 176, 176));
  font-family: var(--h3-font, "Architects Daughter");
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(127, 164, 202));
  font-family: var(--h4-font, "Architects Daughter");
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(179, 153, 174));
  font-family: var(--h5-font, "Architects Daughter");
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(211, 141, 159));
  font-family: var(--h6-font, "Architects Daughter");
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--ebw-callout-note, 148, 189, 223);
  border-bottom-color: rgba(148, 189, 223, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(148, 189, 223, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(148, 189, 223, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(148, 189, 223, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(184, 184, 184));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(184, 184, 184));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(205, 205, 205);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: var(--icon-color, rgb(184, 184, 184));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(33, 33, 33));
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  color: var(--status-bar-text-color, rgb(184, 184, 184));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(184, 184, 184);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(184, 184, 184));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(184, 184, 184));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: var(--icon-color, rgb(184, 184, 184));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(184, 184, 184);
  stroke: rgb(184, 184, 184);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(160, 160, 160));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(205, 205, 205));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(47, 47, 47));
  border-color: rgb(205, 205, 205);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(27, 27, 27);
  color: var(--table-header-color, rgb(250, 250, 250));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(27, 27, 27);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(27, 27, 27);
  border-left-width: 1px;
  border-right-color: rgb(27, 27, 27);
  border-right-width: 1px;
  border-top-color: rgb(27, 27, 27);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: var(--text-muted, rgb(184, 184, 184));
  font-family: var(--font-monospace, "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  margin-bottom: 0px;
  margin-left: 25px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(27, 27, 27);
  border-radius: 4px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  color: var(--pill-color, rgb(198, 178, 195));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body div#quartz-root {
  color: var(--text-normal, rgb(205, 205, 205));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(47, 47, 47));
  border-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(33, 33, 33));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(205, 205, 205);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(33, 33, 33));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(205, 205, 205));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: var(--text-normal, rgb(184, 184, 184));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--background-secondary-alt, rgb(33, 33, 33));
  border-bottom-color: rgb(159, 187, 216);
  border-left-color: rgb(159, 187, 216);
  border-right-color: rgb(159, 187, 216);
  border-top-color: rgb(159, 187, 216);
  color: var(--code-normal, rgb(159, 187, 216));
  font-family: var(--font-monospace, "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body sub {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body summary {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body sup {
  color: rgb(205, 205, 205);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(168, 93, 113, 0.15);
  border-left-color: rgba(168, 93, 113, 0.15);
  border-right-color: rgba(168, 93, 113, 0.15);
  border-top-color: rgba(168, 93, 113, 0.15);
  color: var(--tag-color, rgb(198, 178, 195));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 344;
  --accent-l: 51%;
  --accent-s: 30%;
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: var(--gray-light-1, #cdcdcd);
  --background-modifier-border-focus: var(--gray, #b8b8b8);
  --background-modifier-border-hover: var(--gray-light-2, #dbdbdb);
  --background-modifier-error: var(--red-4, #c24c4a);
  --background-modifier-error-hover: var(--red-3, #e68584);
  --background-modifier-error-rgb: var(--red-4-rgb, 194,76,74);
  --background-modifier-form-field: var(--background-primary, #f8f8f8);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #f8f8f8);
  --background-modifier-info: var(--blue-4, #4575ae);
  --background-modifier-success: var(--green-4, #5c7a62);
  --background-modifier-success-rgb: var(--green-4-rgb, 92,122,98);
  --background-modifier-warning: var(--yellow-3, #c49a52);
  --background-modifier-warning-hover: var(--yellow-4, #8d6e3b);
  --background-primary: var(--gray-light-7, #f8f8f8);
  --background-primary-alt: var(--gray-light-5, #f1f1f1);
  --background-secondary: var(--gray-light-3, #e3e3e3);
  --background-secondary-alt: var(--gray-light-4, #ebebeb);
  --bases-cards-background: var(--background-primary, #f8f8f8);
  --bases-cards-cover-background: var(--background-primary-alt, #f1f1f1);
  --bases-embed-border-color: var(--background-modifier-border, #cdcdcd);
  --bases-group-heading-property-color: var(--text-muted, #5d5d5d);
  --bases-table-border-color: var(--table-border-color, #cdcdcd);
  --bases-table-cell-background-active: var(--background-primary, #f8f8f8);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #f1f1f1);
  --bases-table-cell-background-selected: var(--table-selection, hsla(344, 30%, 51%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #f1f1f1);
  --bases-table-header-background: var(--background-primary, #f8f8f8);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --bases-table-header-color: var(--text-muted, #5d5d5d);
  --bases-table-row-background-hover: var(--table-row-background-hover, rgba(142, 103, 135, 0.05));
  --bases-table-summary-background: var(--background-primary, #f8f8f8);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --blockquote-border-color: var(--secondary-accent-2, #adbcb0);
  --blockquote-border-thickness: 0.05rem;
  --blue-0: #ceddeb;
  --blue-1: #bbd0e4;
  --blue-1-rgb: 187,208,228;
  --blue-2: #9fbbd8;
  --blue-2-rgb: 159,187,216;
  --blue-3: #7fa4ca;
  --blue-4: #4575ae;
  --blue-4-rgb: 69,117,174;
  --blue-5: #2c496e;
  --blue-5-rgb: 44,73,110;
  --blue-6: #1d3048;
  --bodyFont: var(--font-text-theme, var(--ebw-font-text, 'IBM Plex Sans', Helvetica Neue));
  --bold-color: var(--blue-4, #4575ae);
  --callout-border-opacity: 0.4;
  --callout-border-width: 0 0.05rem 0 0.1rem;
  --callout-bug: var(--color-red-rgb, 194,76,74);
  --callout-content-padding: 0 var(--size-4-2);
  --callout-default: var(--color-blue-rgb, 69,117,174);
  --callout-error: var(--color-red-rgb, 194,76,74);
  --callout-example: var(--color-purple-rgb, 142,103,135);
  --callout-fail: var(--color-red-rgb, 194,76,74);
  --callout-important: var(--color-cyan-rgb, 62,125,121);
  --callout-info: var(--color-blue-rgb, 69,117,174);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 0);
  --callout-question: var(--color-orange-rgb, 157,101,83);
  --callout-radius: var(--radius-m, 8px);
  --callout-success: var(--color-green-rgb, 92,122,98);
  --callout-summary: var(--color-cyan-rgb, 62,125,121);
  --callout-tip: var(--color-cyan-rgb, 62,125,121);
  --callout-title-padding: var(--size-4-2, 8px);
  --callout-todo: var(--color-blue-rgb, 69,117,174);
  --callout-warning: var(--color-orange-rgb, 157,101,83);
  --canvas-background: var(--background-primary, #f8f8f8);
  --canvas-card-label-color: var(--text-faint, #a0a0a0);
  --canvas-color-1: var(--color-red-rgb, 194,76,74);
  --canvas-color-2: var(--color-orange-rgb, 157,101,83);
  --canvas-color-3: var(--color-yellow-rgb, 196,154,82);
  --canvas-color-4: var(--color-green-rgb, 92,122,98);
  --canvas-color-5: var(--color-cyan-rgb, 62,125,121);
  --canvas-color-6: var(--color-purple-rgb, 142,103,135);
  --canvas-dot-pattern: var(--color-base-30, #dbdbdb);
  --caret-color: var(--text-normal, #484848);
  --checkbox-border-color: var(--text-faint, #a0a0a0);
  --checkbox-border-color-hover: var(--text-muted, #5d5d5d);
  --checkbox-cancelled: var(--gray-dark-1, #a0a0a0);
  --checkbox-checked: var(--green-3, #91a695);
  --checkbox-color: var(--interactive-accent, #8e6787);
  --checkbox-color-hover: var(--interactive-accent-hover, #b399ae);
  --checkbox-deferred: var(--blue-3, #7fa4ca);
  --checkbox-hover: var(--gray-light-2, #dbdbdb);
  --checkbox-important: var(--red-4, #c24c4a);
  --checkbox-in-progress: var(--cyan-3, #41b0b0);
  --checkbox-marker-color: var(--background-primary, #f8f8f8);
  --checkbox-question: var(--yellow-3, #c49a52);
  --checkbox-review: var(--green-3, #91a695);
  --checklist-done-color: var(--text-muted, #5d5d5d);
  --code-background: var(--background-primary-alt, #f1f1f1);
  --code-border-color: var(--background-modifier-border, #cdcdcd);
  --code-bracket-background: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --code-comment: var(--text-faint, #a0a0a0);
  --code-function: var(--color-yellow, #c49a52);
  --code-important: var(--color-orange, #9d6553);
  --code-keyword: var(--color-pink, #a75c70);
  --code-normal: var(--blue-4, #4575ae);
  --code-operator: var(--color-red, #c24c4a);
  --code-property: var(--color-cyan, #058080);
  --code-punctuation: var(--text-muted, #5d5d5d);
  --code-string: var(--color-green, #5c7a62);
  --code-tag: var(--color-red, #c24c4a);
  --code-value: var(--color-purple, #8e6787);
  --collapse-icon-color: var(--text-faint, #a0a0a0);
  --collapse-icon-color-collapsed: var(--text-accent, #8e6787);
  --color-base-00: var(--gray-light-8, #fafafa);
  --color-base-05: var(--gray-light-7, #f8f8f8);
  --color-base-10: var(--gray-light-6, #f5f5f5);
  --color-base-100: var(--gray-dark-8, #212121);
  --color-base-20: var(--gray-light-5, #f1f1f1);
  --color-base-25: var(--gray-light-3, #e3e3e3);
  --color-base-30: var(--gray-light-2, #dbdbdb);
  --color-base-35: var(--gray-light-1, #cdcdcd);
  --color-base-40: var(--gray, #b8b8b8);
  --color-base-50: var(--gray-dark-1, #a0a0a0);
  --color-base-60: var(--gray-dark-3, #737373);
  --color-base-70: var(--gray-dark-4, #5d5d5d);
  --color-blue: var(--blue-4, #4575ae);
  --color-blue-rgb: var(--blue-4-rgb, 69,117,174);
  --color-cyan: var(--cyan-4, #058080);
  --color-cyan-rgb: var(--cyan-4-rgb, 62,125,121);
  --color-green: var(--green-4, #5c7a62);
  --color-green-rgb: var(--green-4-rgb, 92,122,98);
  --color-orange: var(--orange-4, #9d6553);
  --color-orange-rgb: var(--orange-4-rgb, 157,101,83);
  --color-pink: var(--pink-4, #a75c70);
  --color-pink-rgb: var(--pink-4-rgb, 167,92,112);
  --color-purple: var(--purple-4, #8e6787);
  --color-purple-rgb: var(--purple-4-rgb, 142,103,135);
  --color-red: var(--red-4, #c24c4a);
  --color-red-rgb: var(--red-4-rgb, 194,76,74);
  --color-yellow: var(--yellow-3, #c49a52);
  --color-yellow-rgb: var(--yellow-3-rgb, 196,154,82);
  --cyan-0: #bbe3e3;
  --cyan-1: #9fd8d8;
  --cyan-1-rgb: 187,210,209;
  --cyan-2: #74c6c5;
  --cyan-2-rgb: 158,190,188;
  --cyan-3: #41b0b0;
  --cyan-4: #058080;
  --cyan-4-rgb: 62,125,121;
  --cyan-5: #03616E;
  --cyan-5-rgb: 3, 97, 110;
  --cyan-6: #024448;
  --dark: var(--text-normal, var(--gray-dark-5, #484848));
  --darkgray: var(--text-normal, var(--gray-dark-5, #484848));
  --day-planner-progress-bg: var(--background-primary, #f8f8f8);
  --day-planner-progress-fg: var(--secondary-accent-1, #c5d0c8);
  --divider-color: var(--background-modifier-border-focus, #b8b8b8);
  --divider-color-hover: var(--interactive-accent, #8e6787);
  --dropdown-background: var(--interactive-normal, #f1f1f1);
  --dropdown-background-hover: var(--interactive-hover, #d7c9d5);
  --ebw-calendar-month: var(--secondary-accent-4, #5c7a62);
  --ebw-calendar-year: var(--primary-accent-4, #8e6787);
  --ebw-callout-abstract: 88, 64, 84;
  --ebw-callout-bug: 180, 152, 175;
  --ebw-callout-chat: 61, 126, 123;
  --ebw-callout-danger: 167, 92, 112;
  --ebw-callout-example: 142, 103, 135;
  --ebw-callout-failure: 211, 141, 159;
  --ebw-callout-info: 53, 119, 174;
  --ebw-callout-note: 33, 75, 109;
  --ebw-callout-question: 89, 174, 170;
  --ebw-callout-quote: 53, 120, 175;
  --ebw-callout-reference: 137, 137, 137;
  --ebw-callout-success: 92, 122, 99;
  --ebw-callout-tip: 61, 126, 123;
  --ebw-callout-toc: 159, 159, 159;
  --ebw-callout-warning: 234, 175, 0;
  --ebw-embed-border-color: var(--primary-accent-1, #d7c9d5);
  --ebw-font-callout-title: var(--ebw-header-font, 'Architects Daughter');
  --ebw-font-monospace: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --ebw-font-tags: var(--ebw-header-font, 'Architects Daughter');
  --ebw-font-text: 'IBM Plex Sans', Helvetica Neue;
  --ebw-he-title-border: var(--gray-dark-3, #737373);
  --ebw-header-font: 'Architects Daughter';
  --ebw-header-font-caps-variant: normal;
  --ebw-header-modifier: 1.4;
  --ebw-link-hidden: var(--cyan-2, #74c6c5);
  --ebw-link-underline: var(--cyan-3, #41b0b0);
  --ebw-p-modifier: 1;
  --ebw-row-alt: rgba(0, 0, 0, 0.05);
  --ebw-row-alt-hover: rgba(var(--primary-accent-4-rgb), .05);
  --ebw-strong-em: var(--yellow-3, #c49a52);
  --ebw-tab-title-active-bg: var(--secondary-accent-4, #5c7a62);
  --ebw-tab-title-active-fg: white;
  --ebw-tab-title-active-focused-bg: var(--primary-accent-4, #8e6787);
  --ebw-tab-title-inactive-bg: var(--gray-dark-3, #737373);
  --ebw-table-header-alt: rgba(var(--primary-accent-4-rgb), .4);
  --ebw-today-hover: var(--gray-dark-5, #484848);
  --ebw-today-text: var(--primary-accent-4, #8e6787);
  --embed-border-left: 0.0625rem solid var(--ebw-embed-border-color);
  --embed-border-right: 0.0625rem solid var(--ebw-embed-border-color);
  --embed-padding: var(--size-2-1) var(--size-4-2, 2px 8px);
  --file-header-background: var(--background-primary, #f8f8f8);
  --file-header-background-focused: var(--background-primary, #f8f8f8);
  --file-header-font: var(--font-interface, IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-margins: var(--size-4-2) var(--size-4-8, 8px 32px);
  --flair-background: var(--interactive-normal, #f1f1f1);
  --flair-color: var(--text-normal, #484848);
  --font-interface-theme: var(--ebw-font-text, 'IBM Plex Sans', Helvetica Neue);
  --font-mermaid: var(--ebw-font-monospace, 'Fira Code', 'Source Code Pro', Jetbrains Mono);
  --font-monospace-theme: var(--ebw-font-monospace, 'Fira Code', 'Source Code Pro', Jetbrains Mono);
  --font-text-theme: var(--ebw-font-text, 'IBM Plex Sans', Helvetica Neue);
  --footnote-divider-color: var(--metadata-divider-color, #e3e3e3);
  --footnote-id-color: var(--text-muted, #5d5d5d);
  --footnote-id-color-no-occurrences: var(--text-faint, #a0a0a0);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(0, 0, 0, 0.075));
  --graph-line: var(--gray-light-1, #cdcdcd);
  --graph-node: var(--primary-accent-2, #c6b2c3);
  --graph-node-attachment: var(--secondary-accent-2, #adbcb0);
  --graph-node-focused: var(--yellow-1, #ecc986);
  --graph-node-tag: var(--secondary-accent-3, #91a695);
  --graph-node-unresolved: var(--gray, #b8b8b8);
  --graph-text: var(--text-normal, #484848);
  --gray: #b8b8b8;
  --gray-dark-1: #a0a0a0;
  --gray-dark-10: #070707;
  --gray-dark-2: #898989;
  --gray-dark-3: #737373;
  --gray-dark-4: #5d5d5d;
  --gray-dark-5: #484848;
  --gray-dark-6: #3f3f3f;
  --gray-dark-7: #2f2f2f;
  --gray-dark-75: #272727;
  --gray-dark-8: #212121;
  --gray-dark-85: #1e1e1e;
  --gray-dark-9: #1b1b1b;
  --gray-light-1: #cdcdcd;
  --gray-light-2: #dbdbdb;
  --gray-light-3: #e3e3e3;
  --gray-light-4: #ebebeb;
  --gray-light-5: #f1f1f1;
  --gray-light-6: #f5f5f5;
  --gray-light-7: #f8f8f8;
  --gray-light-8: #fafafa;
  --green-0: #d6ddd7;
  --green-1: #c5d0c8;
  --green-1-rgb: 197,208,200;
  --green-2: #adbcb0;
  --green-2-rgb: 173,188,176;
  --green-3: #91a695;
  --green-4: #5c7a62;
  --green-4-rgb: 92,122,98;
  --green-5: #3a4d3e;
  --green-5-rgb: 58,77,62;
  --green-6: #263228;
  --h1-color: var(--yellow-3, #c49a52);
  --h1-font: var(--ebw-header-font, 'Architects Daughter');
  --h1-line-height: var(--line-height-normal, 1.5);
  --h1-size: 2em;
  --h1-variant: common-ligatures;
  --h1-weight: 500;
  --h2-color: var(--green-4, #5c7a62);
  --h2-font: var(--ebw-header-font, 'Architects Daughter');
  --h2-line-height: var(--line-height-normal, 1.5);
  --h2-size: 1.8em;
  --h2-variant: common-ligatures;
  --h2-weight: 500;
  --h3-color: var(--cyan-3, #41b0b0);
  --h3-font: var(--ebw-header-font, 'Architects Daughter');
  --h3-line-height: var(--line-height-normal, 1.5);
  --h3-size: 1.6em;
  --h3-variant: common-ligatures;
  --h3-weight: 500;
  --h4-color: var(--blue-4, #4575ae);
  --h4-font: var(--ebw-header-font, 'Architects Daughter');
  --h4-line-height: var(--line-height-normal, 1.5);
  --h4-size: 1.4em;
  --h4-variant: common-ligatures;
  --h4-weight: 500;
  --h5-color: var(--purple-4, #8e6787);
  --h5-font: var(--ebw-header-font, 'Architects Daughter');
  --h5-size: 1.2em;
  --h5-variant: common-ligatures;
  --h5-weight: 500;
  --h6-color: var(--pink-4, #a75c70);
  --h6-font: var(--ebw-header-font, 'Architects Daughter');
  --h6-size: 1.2em;
  --h6-variant: common-ligatures;
  --h6-weight: 500;
  --he-text-on-accent-active: var(--gray-light-5, #f1f1f1);
  --he-text-on-accent-inactive: var(--gray-dark-5, #484848);
  --he-title-bar-active-bg: var(--secondary-accent-3, #91a695);
  --he-title-bar-active-fg: white;
  --he-title-bar-active-pinned-bg: var(--primary-accent-3, #b399ae);
  --he-title-bar-height: calc(var(--icon-s) + var(--size-2-3));
  --he-title-bar-inactive-bg: var(--gray-dark-1, #a0a0a0);
  --he-title-bar-inactive-fg: var(--gray-light-5, #f1f1f1);
  --he-title-bar-inactive-pinned-bg: var(--gray-dark-1, #a0a0a0);
  --he-view-header-height: calc(var(--icon-s) + var(--size-2-3));
  --headerFont: var(--font-text-theme, var(--ebw-font-text, 'IBM Plex Sans', Helvetica Neue));
  --heading-formatting: var(--text-faint, #a0a0a0);
  --heading-spacing: calc(var(--p-spacing)*var(--ebw-header-modifier));
  --highlight: var(--text-highlight-bg, rgba(var(--text-highlight-bg-rgb), 0.2));
  --hr-color: var(--background-modifier-border, #cdcdcd);
  --icon-color: var(--text-muted, #5d5d5d);
  --icon-color-active: var(--text-accent, #8e6787);
  --icon-color-focused: var(--text-normal, #484848);
  --icon-color-hover: var(--text-muted, #5d5d5d);
  --inline-title-color: var(--h1-color, #c49a52);
  --inline-title-font: var(--h1-font, 'Architects Daughter');
  --inline-title-line-height: var(--h1-line-height, 1.5);
  --inline-title-size: var(--h1-size, 2em);
  --inline-title-variant: var(--h1-variant, common-ligatures);
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, #a0a0a0);
  --input-placeholder-color: var(--text-faint, #a0a0a0);
  --interactive-accent: var(--primary-accent-4, #8e6787);
  --interactive-accent-hover: var(--primary-accent-3, #b399ae);
  --interactive-accent-hsl: var(--color-accent-hsl, 344, 30%, 51%);
  --interactive-disabled: var(--gray-light-3, #e3e3e3);
  --interactive-hover: var(--primary-accent-1, #d7c9d5);
  --interactive-normal: var(--background-primary-alt, #f1f1f1);
  --interactive-toggle: var(--secondary-accent-3, #91a695);
  --italic-color: var(--pink-4, #a75c70);
  --light: var(--background-primary, var(--gray-light-7, #f8f8f8));
  --lightgray: var(--background-secondary, var(--gray-light-3, #e3e3e3));
  --link-color: var(--gray-dark-3, #737373);
  --link-color-hover: var(--cyan-4, #058080);
  --link-external-color: var(--link-color, #737373);
  --link-external-color-hover: var(--link-color-hover, #058080);
  --link-unresolved-color: var(--link-color, #737373);
  --link-unresolved-decoration-color: var(--ebw-link-underline, #41b0b0);
  --link-unresolved-decoration-style: dotted;
  --link-unresolved-opacity: 0.9;
  --list-marker-color: var(--text-faint, #a0a0a0);
  --list-marker-color-collapsed: var(--text-accent, #8e6787);
  --list-marker-color-hover: var(--text-muted, #5d5d5d);
  --menu-background: var(--background-secondary, #e3e3e3);
  --menu-border-color: var(--background-modifier-border-hover, #dbdbdb);
  --metadata-border-color: var(--background-modifier-border, #cdcdcd);
  --metadata-border-radius: 4px;
  --metadata-border-width: 1px;
  --metadata-divider-color: var(--background-secondary, #e3e3e3);
  --metadata-divider-width: 1px;
  --metadata-gap: 0;
  --metadata-input-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-input-font: var(--font-interface, IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #484848);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-label-font: var(--font-interface, IBM Plex Sans, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #5d5d5d);
  --metadata-label-text-color-hover: var(--text-muted, #5d5d5d);
  --metadata-padding: var(--size-4-2, 0) 0;
  --metadata-property-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --metadata-property-radius: var(--radius-s, 4px);
  --modal-background: var(--background-primary, #f8f8f8);
  --modifier-text: white;
  --modifier-text-accent: var(--gray-light-7, #f8f8f8);
  --nav-collapse-icon-color: var(--collapse-icon-color, #a0a0a0);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #a0a0a0);
  --nav-heading-color: var(--text-normal, #484848);
  --nav-heading-color-collapsed: var(--text-faint, #a0a0a0);
  --nav-heading-color-collapsed-hover: var(--text-muted, #5d5d5d);
  --nav-heading-color-hover: var(--text-normal, #484848);
  --nav-item-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  --nav-item-color: var(--text-muted, #5d5d5d);
  --nav-item-color-active: var(--text-normal, #484848);
  --nav-item-color-highlighted: var(--text-accent, #8e6787);
  --nav-item-color-hover: var(--text-normal, #484848);
  --nav-item-color-selected: var(--text-normal, #484848);
  --nav-tag-color: var(--text-faint, #a0a0a0);
  --nav-tag-color-active: var(--text-muted, #5d5d5d);
  --nav-tag-color-hover: var(--text-muted, #5d5d5d);
  --orange-0: #f1d6cb;
  --orange-1: #ecc5b7;
  --orange-1-rgb: 236,197,183;
  --orange-2: #e3ac97;
  --orange-2-rgb: 227,172,151;
  --orange-3: #da8d73;
  --orange-4: #9d6553;
  --orange-4-rgb: 157,101,83;
  --orange-5: #633f34;
  --orange-5-rgb: 99,63,52;
  --orange-6: #412922;
  --p-spacing: calc(var(--font-text-size)*var(--ebw-p-modifier));
  --pdf-background: var(--background-primary, #f8f8f8);
  --pdf-page-background: var(--background-primary, #f8f8f8);
  --pdf-sidebar-background: var(--background-primary, #f8f8f8);
  --pill-border-color: var(--background-modifier-border, #cdcdcd);
  --pill-border-color-hover: var(--background-modifier-border-hover, #dbdbdb);
  --pill-color: var(--text-muted, #5d5d5d);
  --pill-color-hover: var(--text-normal, #484848);
  --pill-color-remove: var(--text-faint, #a0a0a0);
  --pill-color-remove-hover: var(--text-accent, #8e6787);
  --pink-0: #efd5dc;
  --pink-1: #e8c4ce;
  --pink-1-rgb: 232,196,206;
  --pink-2: #deaab8;
  --pink-2-rgb: 222,170,184;
  --pink-3: #d38d9f;
  --pink-4: #a75c70;
  --pink-4-rgb: 167,92,112;
  --pink-5: #693a46;
  --pink-5-rgb: 105,58,70;
  --pink-6: #45262e;
  --primary-accent-0: var(--purple-0, #e2d9e1);
  --primary-accent-1: var(--purple-1, #d7c9d5);
  --primary-accent-1-rgb: var(--purple-1-rgb, 215,201,213);
  --primary-accent-2: var(--purple-2, #c6b2c3);
  --primary-accent-3: var(--purple-3, #b399ae);
  --primary-accent-4: var(--purple-4, #8e6787);
  --primary-accent-4-rgb: var(--purple-4-rgb, 142,103,135);
  --primary-accent-5: var(--purple-5, #594054);
  --primary-accent-6: var(--purple-6, #392a37);
  --prompt-background: var(--background-primary, #f8f8f8);
  --purple-0: #e2d9e1;
  --purple-1: #d7c9d5;
  --purple-1-rgb: 215,201,213;
  --purple-2: #c6b2c3;
  --purple-2-rgb: 198,178,195;
  --purple-3: #b399ae;
  --purple-4: #8e6787;
  --purple-4-rgb: 142,103,135;
  --purple-5: #594054;
  --purple-5-rgb: 89,64,84;
  --purple-6: #392a37;
  --raised-background: var(--blur-background, color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent)));
  --red-0: #f6d3d3;
  --red-1: #f3c2c1;
  --red-1-rgb: 243,194,193;
  --red-2: #eda6a5;
  --red-2-rgb: 237,166,165;
  --red-3: #e68584;
  --red-3-rgb: 230,133,132;
  --red-4: #c24c4a;
  --red-4-rgb: 194,76,74;
  --red-5: #7a302f;
  --red-5-rgb: 122,48,47;
  --red-6: #50201f;
  --ribbon-background: var(--titlebar-background-focused, #ebebeb);
  --ribbon-background-collapsed: var(--titlebar-background-focused, #ebebeb);
  --search-clear-button-color: var(--text-muted, #5d5d5d);
  --search-icon-color: var(--text-muted, #5d5d5d);
  --search-result-background: var(--background-primary, #f8f8f8);
  --secondary: var(--text-accent, var(--primary-accent-4, #8e6787));
  --secondary-accent-0: var(--green-0, #d6ddd7);
  --secondary-accent-1: var(--green-1, #c5d0c8);
  --secondary-accent-1-rgb: var(--green-1-rgb, 197,208,200);
  --secondary-accent-2: var(--green-2, #adbcb0);
  --secondary-accent-3: var(--green-3, #91a695);
  --secondary-accent-4: var(--green-4, #5c7a62);
  --secondary-accent-4-rgb: var(--green-4-rgb, 92,122,98);
  --secondary-accent-5: var(--green-5, #3a4d3e);
  --secondary-accent-6: var(--green-6, #263228);
  --setting-group-heading-color: var(--text-normal, #484848);
  --setting-items-background: var(--background-primary-alt, #f1f1f1);
  --setting-items-border-color: var(--background-modifier-border, #cdcdcd);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #5d5d5d);
  --shiki-code-background: var(--code-background, #f1f1f1);
  --shiki-code-block-spacing: var(--p-spacing, 16px);
  --shiki-code-comment: var(--text-faint, #a0a0a0);
  --shiki-code-function: var(--color-green, #5c7a62);
  --shiki-code-important: var(--color-orange, #9d6553);
  --shiki-code-keyword: var(--color-pink, #a75c70);
  --shiki-code-normal: var(--text-muted, #5d5d5d);
  --shiki-code-property: var(--color-cyan, #058080);
  --shiki-code-punctuation: var(--text-muted, #5d5d5d);
  --shiki-code-string: var(--color-yellow, #c49a52);
  --shiki-code-value: var(--color-purple, #8e6787);
  --shiki-gutter-border-color: var(--background-modifier-border, #cdcdcd);
  --shiki-gutter-text-color: var(--text-faint, #a0a0a0);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #5d5d5d);
  --shiki-highlight-neutral: var(--shiki-code-normal, #5d5d5d);
  --shiki-terminal-dots-color: var(--text-faint, #a0a0a0);
  --show-whitespace-color: var(--color-base-30, #dbdbdb);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #dbdbdb);
  --slider-track-background: var(--background-modifier-border, #cdcdcd);
  --status-bar-background: var(--titlebar-background-focused, #ebebeb);
  --status-bar-border-color: var(--divider-color, #b8b8b8);
  --status-bar-text-color: var(--text-muted, #5d5d5d);
  --suggestion-background: var(--background-primary, #f8f8f8);
  --sync-avatar-color-1: var(--color-red, #c24c4a);
  --sync-avatar-color-2: var(--color-orange, #9d6553);
  --sync-avatar-color-3: var(--color-yellow, #c49a52);
  --sync-avatar-color-4: var(--color-green, #5c7a62);
  --sync-avatar-color-5: var(--color-cyan, #058080);
  --sync-avatar-color-6: var(--color-blue, #4575ae);
  --sync-avatar-color-7: var(--color-purple, #8e6787);
  --sync-avatar-color-8: var(--color-pink, #a75c70);
  --tab-background-active: var(--background-primary, #f8f8f8);
  --tab-container-background: var(--background-secondary, #e3e3e3);
  --tab-divider-color: var(--background-modifier-border-hover, #dbdbdb);
  --tab-outline-color: var(--background-modifier-border-focus, #b8b8b8);
  --tab-switcher-background: var(--background-secondary, #e3e3e3);
  --tab-text-color: var(--icon-color, #5d5d5d);
  --tab-text-color-active: var(--text-muted, #5d5d5d);
  --tab-text-color-focused: var(--icon-color-focused, #484848);
  --tab-text-color-focused-active: var(--text-muted, #5d5d5d);
  --tab-text-color-focused-active-current: var(--text-normal, #484848);
  --tab-text-color-focused-highlighted: var(--text-accent, #8e6787);
  --table-add-button-border-color: var(--background-modifier-border, #cdcdcd);
  --table-background: var(--ebw-row-alt, rgba(0, 0, 0, 0.05));
  --table-border-color: var(--background-modifier-border, #cdcdcd);
  --table-drag-handle-background-active: var(--table-selection-border-color, #8e6787);
  --table-drag-handle-color: var(--text-faint, #a0a0a0);
  --table-drag-handle-color-active: var(--text-on-accent, #fafafa);
  --table-header-background: var(--primary-accent-1, #d7c9d5);
  --table-header-background-hover: var(--ebw-table-header-alt, rgba(142, 103, 135, 0.4));
  --table-header-border-color: var(--primary-accent-3, #b399ae);
  --table-header-color: var(--gray-dark-7, #2f2f2f);
  --table-header-size: var(--font-small, 0.933em);
  --table-header-weight: var(--font-semibold, 600);
  --table-row-alt-background-hover: var(--ebw-row-alt-hover, rgba(142, 103, 135, 0.05));
  --table-row-background-hover: var(--ebw-row-alt-hover, rgba(142, 103, 135, 0.05));
  --table-selection-border-color: var(--interactive-accent, #8e6787);
  --tag-color: var(--text-accent, #8e6787);
  --tag-color-hover: var(--text-accent, #8e6787);
  --tag-padding-x: 0;
  --tertiary: var(--text-accent-hover, var(--primary-accent-5, #594054));
  --text-accent: var(--primary-accent-4, #8e6787);
  --text-accent-hover: var(--primary-accent-5, #594054);
  --text-error: var(--red-4, #c24c4a);
  --text-faint: var(--gray-dark-1, #a0a0a0);
  --text-highlight-bg: rgba(var(--text-highlight-bg-rgb), 0.2);
  --text-highlight-bg-rgb: var(--primary-accent-4-rgb, 142,103,135);
  --text-highlight-fg: var(--gray-dark-7, #2f2f2f);
  --text-muted: var(--gray-dark-4, #5d5d5d);
  --text-normal: var(--gray-dark-5, #484848);
  --text-on-accent: var(--gray-light-8, #fafafa);
  --text-selection: rgba(var(--secondary-accent-4-rgb), 0.2);
  --text-success: var(--green-4, #5c7a62);
  --text-warning: var(--color-orange, #9d6553);
  --textHighlight: var(--text-highlight-bg, rgba(var(--text-highlight-bg-rgb), 0.2));
  --titleFont: var(--font-text-theme, var(--ebw-font-text, 'IBM Plex Sans', Helvetica Neue));
  --titlebar-background: var(--background-secondary, #e3e3e3);
  --titlebar-background-focused: var(--background-secondary-alt, #ebebeb);
  --titlebar-border-color: var(--background-modifier-border, #cdcdcd);
  --titlebar-text-color: var(--text-muted, #5d5d5d);
  --titlebar-text-color-focused: var(--text-normal, #484848);
  --vault-profile-color: var(--text-normal, #484848);
  --vault-profile-color-hover: var(--vault-profile-color, #484848);
  --yellow-0: #f1d9a9;
  --yellow-1: #ecc986;
  --yellow-1-rgb: 241,217,169;
  --yellow-2: #e0b15e;
  --yellow-2-rgb: 236,201,134;
  --yellow-3: #c49a52;
  --yellow-3-rgb: 196,154,82;
  --yellow-4: #8d6e3b;
  --yellow-4-rgb: 141,110,59;
  --yellow-5: #594525;
  --yellow-bright: #fdfaf3;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(227, 227, 227));
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(227, 227, 227));
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(184, 184, 184);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(227, 227, 227));
  border-left-color: rgb(184, 184, 184);
  color: rgb(72, 72, 72);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(69, 117, 174));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(69, 117, 174) none 0px;
  text-decoration-color: rgb(69, 117, 174);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(167, 92, 112));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(167, 92, 112) none 0px;
  text-decoration-color: rgb(167, 92, 112);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(167, 92, 112));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(167, 92, 112) none 0px;
  text-decoration-color: rgb(167, 92, 112);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(69, 117, 174));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(69, 117, 174) none 0px;
  text-decoration-color: rgb(69, 117, 174);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(142, 103, 135, 0.2));
  color: var(--text-highlight-fg, rgb(47, 47, 47));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration-color: rgb(47, 47, 47);
}

html[saved-theme="light"] body del {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(72, 72, 72) none 0px;
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(72, 72, 72));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(160, 160, 160);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(142, 103, 135));
  border-color: rgb(142, 103, 135);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(93, 93, 93));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 93, 93) none 0px;
  text-decoration-color: rgb(93, 93, 93);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(115, 115, 115));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: underline rgb(65, 176, 176);
  text-decoration-color: var(--ebw-link-underline, rgb(65, 176, 176));
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(115, 115, 115));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: underline rgb(65, 176, 176);
  text-decoration-color: var(--ebw-link-underline, rgb(65, 176, 176));
}

html[saved-theme="light"] body a.internal-link.broken {
  --background-modifier-active-hover: hsla(344, 30%, 51%, 0.15);
  --background-modifier-border: #cdcdcd;
  --background-modifier-border-focus: #b8b8b8;
  --background-modifier-border-hover: #dbdbdb;
  --background-modifier-error: #c24c4a;
  --background-modifier-error-hover: #e68584;
  --background-modifier-error-rgb: 194,76,74;
  --background-modifier-form-field: #f8f8f8;
  --background-modifier-form-field-hover: #f8f8f8;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-info: #4575ae;
  --background-modifier-success: #5c7a62;
  --background-modifier-success-rgb: 92,122,98;
  --background-modifier-warning: #c49a52;
  --background-modifier-warning-hover: #8d6e3b;
  --background-primary: #f8f8f8;
  --background-primary-alt: #f1f1f1;
  --background-secondary: #e3e3e3;
  --background-secondary-alt: #ebebeb;
  --blockquote-border-color: #adbcb0;
  --blur-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: #4575ae;
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 194,76,74;
  --callout-content-padding: 0 8px;
  --callout-default: 69,117,174;
  --callout-error: 194,76,74;
  --callout-example: 142,103,135;
  --callout-fail: 194,76,74;
  --callout-important: 62,125,121;
  --callout-info: 69,117,174;
  --callout-padding: 0;
  --callout-question: 157,101,83;
  --callout-radius: 8px;
  --callout-success: 92,122,98;
  --callout-summary: 62,125,121;
  --callout-tip: 62,125,121;
  --callout-title-padding: 8px;
  --callout-title-weight: 600;
  --callout-todo: 69,117,174;
  --callout-warning: 157,101,83;
  --canvas-background: #f8f8f8;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #dbdbdb;
  --caret-color: #484848;
  --checkbox-border-color: #a0a0a0;
  --checkbox-border-color-hover: #5d5d5d;
  --checkbox-cancelled: #a0a0a0;
  --checkbox-checked: #91a695;
  --checkbox-color: #8e6787;
  --checkbox-color-hover: #b399ae;
  --checkbox-deferred: #7fa4ca;
  --checkbox-hover: #dbdbdb;
  --checkbox-important: #c24c4a;
  --checkbox-in-progress: #41b0b0;
  --checkbox-marker-color: #f8f8f8;
  --checkbox-question: #c49a52;
  --checkbox-radius: 4px;
  --checkbox-review: #91a695;
  --checkbox-size: 16px;
  --checklist-done-color: #5d5d5d;
  --clickable-icon-radius: 4px;
  --code-background: #f1f1f1;
  --code-border-color: #cdcdcd;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: #a0a0a0;
  --code-function: #c49a52;
  --code-important: #9d6553;
  --code-keyword: #a75c70;
  --code-normal: #4575ae;
  --code-operator: #c24c4a;
  --code-property: #058080;
  --code-punctuation: #5d5d5d;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #5c7a62;
  --code-tag: #c24c4a;
  --code-value: #8e6787;
  --collapse-icon-color: #a0a0a0;
  --collapse-icon-color-collapsed: #8e6787;
  --color-accent: hsl(344, 30%, 51%);
  --color-accent-1: hsl(343, 30.3%, 54.825%);
  --color-accent-2: hsl(341, 30.6%, 58.65%);
  --color-accent-hsl: 344, 30%, 51%;
  --color-base-00: #fafafa;
  --color-base-05: #f8f8f8;
  --color-base-10: #f5f5f5;
  --color-base-100: #212121;
  --color-base-20: #f1f1f1;
  --color-base-25: #e3e3e3;
  --color-base-30: #dbdbdb;
  --color-base-35: #cdcdcd;
  --color-base-40: #b8b8b8;
  --color-base-50: #a0a0a0;
  --color-base-60: #737373;
  --color-base-70: #5d5d5d;
  --color-blue: #4575ae;
  --color-blue-rgb: 69,117,174;
  --color-cyan: #058080;
  --color-cyan-rgb: 62,125,121;
  --color-green: #5c7a62;
  --color-green-rgb: 92,122,98;
  --color-orange: #9d6553;
  --color-orange-rgb: 157,101,83;
  --color-pink: #a75c70;
  --color-pink-rgb: 167,92,112;
  --color-purple: #8e6787;
  --color-purple-rgb: 142,103,135;
  --color-red: #c24c4a;
  --color-red-rgb: 194,76,74;
  --color-yellow: #c49a52;
  --color-yellow-rgb: 196,154,82;
  --day-planner-progress-bg: #f8f8f8;
  --day-planner-progress-fg: #c5d0c8;
  --divider-color: #b8b8b8;
  --divider-color-hover: #8e6787;
  --divider-vertical-height: 100%;
  --dropdown-background: #f1f1f1;
  --dropdown-background-hover: #d7c9d5;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --ebw-calendar-month: #5c7a62;
  --ebw-calendar-year: #8e6787;
  --ebw-embed-border-color: #d7c9d5;
  --ebw-font-callout-title: 'Architects Daughter';
  --ebw-font-tags: 'Architects Daughter';
  --ebw-he-title-border: #737373;
  --ebw-link-hidden: #74c6c5;
  --ebw-link-underline: #41b0b0;
  --ebw-row-alt-hover: rgba(142, 103, 135, 0.05);
  --ebw-strong-em: #c49a52;
  --ebw-tab-title-active-bg: #5c7a62;
  --ebw-tab-title-active-focused-bg: #8e6787;
  --ebw-tab-title-inactive-bg: #737373;
  --ebw-table-header-alt: rgba(142, 103, 135, 0.4);
  --ebw-today-hover: #484848;
  --ebw-today-text: #8e6787;
  --flair-background: #f1f1f1;
  --flair-color: #484848;
  --font-interface: '??', 'IBM Plex Sans', Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-mermaid: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-monospace: '??', 'Fira Code', 'Source Code Pro', Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-print: '??', '??', 'IBM Plex Sans', Helvetica Neue, 'Arial';
  --font-text: '??', 'IBM Plex Sans', Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-weight: var(--link-weight, 400);
  --graph-line: #cdcdcd;
  --graph-node: #c6b2c3;
  --graph-node-attachment: #adbcb0;
  --graph-node-focused: #ecc986;
  --graph-node-tag: #91a695;
  --graph-node-unresolved: #b8b8b8;
  --graph-text: #484848;
  --h1-color: #c49a52;
  --h1-font: 'Architects Daughter';
  --h1-line-height: 1.5;
  --h2-color: #5c7a62;
  --h2-font: 'Architects Daughter';
  --h2-line-height: 1.5;
  --h3-color: #41b0b0;
  --h3-font: 'Architects Daughter';
  --h3-line-height: 1.5;
  --h4-color: #4575ae;
  --h4-font: 'Architects Daughter';
  --h4-line-height: 1.5;
  --h5-color: #8e6787;
  --h5-font: 'Architects Daughter';
  --h5-line-height: 1.5;
  --h6-color: #a75c70;
  --h6-font: 'Architects Daughter';
  --h6-line-height: 1.5;
  --he-text-on-accent-active: #f1f1f1;
  --he-text-on-accent-inactive: #484848;
  --he-title-bar-active-bg: #91a695;
  --he-title-bar-active-pinned-bg: #b399ae;
  --he-title-bar-height: 22px;
  --he-title-bar-inactive-bg: #a0a0a0;
  --he-title-bar-inactive-fg: #f1f1f1;
  --he-title-bar-inactive-pinned-bg: #a0a0a0;
  --he-view-header-height: 22px;
  --heading-formatting: #a0a0a0;
  --heading-spacing: 22.4px;
  --hr-color: #cdcdcd;
  --interactive-accent: #8e6787;
  --interactive-accent-hover: #b399ae;
  --interactive-accent-hsl: 344, 30%, 51%;
  --interactive-disabled: #e3e3e3;
  --interactive-hover: #d7c9d5;
  --interactive-normal: #f1f1f1;
  --interactive-toggle: #91a695;
  --italic-color: #a75c70;
  --link-color: #737373;
  --link-color-hover: #058080;
  --link-external-color: #737373;
  --link-external-color-hover: #058080;
  --link-unresolved-color: #737373;
  --link-unresolved-decoration-color: #41b0b0;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #e3e3e3;
  --menu-border-color: #dbdbdb;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --modifier-text-accent: #f8f8f8;
  --p-spacing: 16px;
  --pdf-background: #f8f8f8;
  --pdf-page-background: #f8f8f8;
  --pdf-sidebar-background: #f8f8f8;
  --popover-font-size: 16px;
  --primary-accent-0: #e2d9e1;
  --primary-accent-1: #d7c9d5;
  --primary-accent-1-rgb: 215,201,213;
  --primary-accent-2: #c6b2c3;
  --primary-accent-3: #b399ae;
  --primary-accent-4: #8e6787;
  --primary-accent-4-rgb: 142,103,135;
  --primary-accent-5: #594054;
  --primary-accent-6: #392a37;
  --raised-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --resizer-size: 20px;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5d5d5d;
  --search-icon-color: #5d5d5d;
  --search-result-background: #f8f8f8;
  --secondary-accent-0: #d6ddd7;
  --secondary-accent-1: #c5d0c8;
  --secondary-accent-1-rgb: 197,208,200;
  --secondary-accent-2: #adbcb0;
  --secondary-accent-3: #91a695;
  --secondary-accent-4: #5c7a62;
  --secondary-accent-4-rgb: 92,122,98;
  --secondary-accent-5: #3a4d3e;
  --secondary-accent-6: #263228;
  --setting-group-heading-color: #484848;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #f1f1f1;
  --setting-items-border-color: #cdcdcd;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --shiki-active-tab-border-color: #5d5d5d;
  --shiki-code-background: #f1f1f1;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 16px;
  --shiki-code-comment: #a0a0a0;
  --shiki-code-function: #5c7a62;
  --shiki-code-important: #9d6553;
  --shiki-code-keyword: #a75c70;
  --shiki-code-normal: #5d5d5d;
  --shiki-code-property: #058080;
  --shiki-code-punctuation: #5d5d5d;
  --shiki-code-string: #c49a52;
  --shiki-code-value: #8e6787;
  --shiki-gutter-border-color: #cdcdcd;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #a0a0a0;
  --shiki-gutter-text-color-highlight: #5d5d5d;
  --shiki-highlight-green: rgba(92, 122, 98, 0.5);
  --shiki-highlight-green-background: rgba(92, 122, 98, 0.1);
  --shiki-highlight-neutral: #5d5d5d;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(194, 76, 74, 0.5);
  --shiki-highlight-red-background: rgba(194, 76, 74, 0.1);
  --shiki-terminal-dots-color: #a0a0a0;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #f8f8f8;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #c24c4a;
  --sync-avatar-color-2: #9d6553;
  --sync-avatar-color-3: #c49a52;
  --sync-avatar-color-4: #5c7a62;
  --sync-avatar-color-5: #058080;
  --sync-avatar-color-6: #4575ae;
  --sync-avatar-color-7: #8e6787;
  --sync-avatar-color-8: #a75c70;
  --tab-background-active: #f8f8f8;
  --tab-divider-color: #dbdbdb;
  --tab-font-size: 13px;
  --tab-outline-color: #b8b8b8;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #e3e3e3;
  --tab-switcher-menubar-background: linear-gradient(to top, #e3e3e3, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(344, 30%, 51%);
  --tab-text-color: #5d5d5d;
  --tab-text-color-active: #5d5d5d;
  --tab-text-color-focused: #484848;
  --tab-text-color-focused-active: #5d5d5d;
  --tab-text-color-focused-active-current: #484848;
  --tab-text-color-focused-highlighted: #8e6787;
  --table-add-button-border-color: #cdcdcd;
  --table-add-button-border-width: 1px;
  --table-background: rgba(0, 0, 0, 0.05);
  --table-border-color: #cdcdcd;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #8e6787;
  --table-drag-handle-color: #a0a0a0;
  --table-drag-handle-color-active: #fafafa;
  --table-header-background: #d7c9d5;
  --table-header-background-hover: rgba(142, 103, 135, 0.4);
  --table-header-border-color: #b399ae;
  --table-header-border-width: 1px;
  --table-header-color: #2f2f2f;
  --table-header-size: 0.933em;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.05);
  --table-row-background-hover: rgba(142, 103, 135, 0.05);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(344, 30%, 51%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #8e6787;
  --table-text-size: 16px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: hsla(344, 30%, 51%, 0.15);
  --tag-border-color-hover: hsla(344, 30%, 51%, 0.15);
  --tag-color: #8e6787;
  --tag-color-hover: #8e6787;
  --tag-size: 0.875em;
  --text-accent: #8e6787;
  --text-accent-hover: #594054;
  --text-error: #c24c4a;
  --text-faint: #a0a0a0;
  --text-highlight-bg: rgba(142, 103, 135, 0.2);
  --text-highlight-fg: #2f2f2f;
  --text-muted: #5d5d5d;
  --text-normal: #484848;
  --text-on-accent: #fafafa;
  --text-selection: rgba(92, 122, 98, 0.2);
  --text-success: #5c7a62;
  --text-warning: #9d6553;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --zoom-multiplier: 1;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(65, 176, 176);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(65, 176, 176);
  border-left-width: 0px;
  border-right-color: rgb(65, 176, 176);
  border-right-width: 0px;
  border-top-color: rgb(65, 176, 176);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--link-unresolved-color, rgb(65, 176, 176));
  content: " ✎";
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 400);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(115, 115, 115) none 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration: underline dotted rgb(65, 176, 176);
  text-decoration-color: var(--ebw-link-underline, rgb(65, 176, 176));
  text-decoration-style: var(--link-unresolved-decoration-style, dotted);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body dt {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body ol > li {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body ul > li {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(160, 160, 160));
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body table {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 181.844px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgba(0, 0, 0, 0.05));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: var(--table-text-color, rgb(72, 72, 72));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(179, 153, 174);
  border-left-color: rgb(179, 153, 174);
  border-right-color: rgb(179, 153, 174);
  border-top-color: rgb(179, 153, 174);
  color: var(--table-header-color, rgb(47, 47, 47));
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgb(215, 201, 213));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(241, 241, 241));
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: var(--code-normal, rgb(69, 117, 174));
  font-family: var(--font-monospace, "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(241, 241, 241));
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body figcaption {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(196, 154, 82);
  border-left-color: rgb(196, 154, 82);
  border-right-color: rgb(196, 154, 82);
  border-top-color: rgb(196, 154, 82);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(241, 241, 241));
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(72, 72, 72);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(72, 72, 72);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(142, 103, 135);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(72, 72, 72);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(72, 72, 72);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(72, 72, 72);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(160, 160, 160);
  content: "-";
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(194, 76, 74);
  content: "!";
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgba(0, 0, 0, 0);
  content: "?";
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(160, 160, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 154, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(5, 128, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgba(0, 0, 0, 0);
  content: ">";
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgba(0, 0, 0, 0);
  content: "🧱";
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 76, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 76, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 76, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 117, 174);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 154, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 154, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(142, 103, 135);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 76, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 122, 98);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(145, 166, 149);
  content: "👀";
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 122, 98);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 122, 98);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  color: rgb(145, 166, 149);
  content: "✓";
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--ebw-callout-abstract, 88, 64, 84);
  background: rgba(88, 64, 84, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(88, 64, 84, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(88, 64, 84, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(88, 64, 84, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(88, 64, 84, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--ebw-callout-bug, 180, 152, 175);
  background: rgba(180, 152, 175, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(180, 152, 175, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(180, 152, 175, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(180, 152, 175, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(180, 152, 175, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="chat"] {
  --background-modifier-active-hover: hsla(344, 30%, 51%, 0.15);
  --background-modifier-border: #cdcdcd;
  --background-modifier-border-focus: #b8b8b8;
  --background-modifier-border-hover: #dbdbdb;
  --background-modifier-error: #c24c4a;
  --background-modifier-error-hover: #e68584;
  --background-modifier-error-rgb: 194,76,74;
  --background-modifier-form-field: #f8f8f8;
  --background-modifier-form-field-hover: #f8f8f8;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-info: #4575ae;
  --background-modifier-success: #5c7a62;
  --background-modifier-success-rgb: 92,122,98;
  --background-modifier-warning: #c49a52;
  --background-modifier-warning-hover: #8d6e3b;
  --background-primary: #f8f8f8;
  --background-primary-alt: #f1f1f1;
  --background-secondary: #e3e3e3;
  --background-secondary-alt: #ebebeb;
  --blockquote-border-color: #adbcb0;
  --blur-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: #4575ae;
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 194,76,74;
  --callout-color: var(--ebw-callout-chat, 61, 126, 123);
  --callout-content-padding: 0 8px;
  --callout-default: 69,117,174;
  --callout-error: 194,76,74;
  --callout-example: 142,103,135;
  --callout-fail: 194,76,74;
  --callout-important: 62,125,121;
  --callout-info: 69,117,174;
  --callout-padding: 0;
  --callout-question: 157,101,83;
  --callout-radius: 8px;
  --callout-success: 92,122,98;
  --callout-summary: 62,125,121;
  --callout-tip: 62,125,121;
  --callout-title-padding: 8px;
  --callout-title-weight: 600;
  --callout-todo: 69,117,174;
  --callout-warning: 157,101,83;
  --canvas-background: #f8f8f8;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #dbdbdb;
  --caret-color: #484848;
  --checkbox-border-color: #a0a0a0;
  --checkbox-border-color-hover: #5d5d5d;
  --checkbox-cancelled: #a0a0a0;
  --checkbox-checked: #91a695;
  --checkbox-color: #8e6787;
  --checkbox-color-hover: #b399ae;
  --checkbox-deferred: #7fa4ca;
  --checkbox-hover: #dbdbdb;
  --checkbox-important: #c24c4a;
  --checkbox-in-progress: #41b0b0;
  --checkbox-marker-color: #f8f8f8;
  --checkbox-question: #c49a52;
  --checkbox-radius: 4px;
  --checkbox-review: #91a695;
  --checkbox-size: 16px;
  --checklist-done-color: #5d5d5d;
  --clickable-icon-radius: 4px;
  --code-background: #f1f1f1;
  --code-border-color: #cdcdcd;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: #a0a0a0;
  --code-function: #c49a52;
  --code-important: #9d6553;
  --code-keyword: #a75c70;
  --code-normal: #4575ae;
  --code-operator: #c24c4a;
  --code-property: #058080;
  --code-punctuation: #5d5d5d;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #5c7a62;
  --code-tag: #c24c4a;
  --code-value: #8e6787;
  --collapse-icon-color: #a0a0a0;
  --collapse-icon-color-collapsed: #8e6787;
  --color-accent: hsl(344, 30%, 51%);
  --color-accent-1: hsl(343, 30.3%, 54.825%);
  --color-accent-2: hsl(341, 30.6%, 58.65%);
  --color-accent-hsl: 344, 30%, 51%;
  --color-base-00: #fafafa;
  --color-base-05: #f8f8f8;
  --color-base-10: #f5f5f5;
  --color-base-100: #212121;
  --color-base-20: #f1f1f1;
  --color-base-25: #e3e3e3;
  --color-base-30: #dbdbdb;
  --color-base-35: #cdcdcd;
  --color-base-40: #b8b8b8;
  --color-base-50: #a0a0a0;
  --color-base-60: #737373;
  --color-base-70: #5d5d5d;
  --color-blue: #4575ae;
  --color-blue-rgb: 69,117,174;
  --color-cyan: #058080;
  --color-cyan-rgb: 62,125,121;
  --color-green: #5c7a62;
  --color-green-rgb: 92,122,98;
  --color-orange: #9d6553;
  --color-orange-rgb: 157,101,83;
  --color-pink: #a75c70;
  --color-pink-rgb: 167,92,112;
  --color-purple: #8e6787;
  --color-purple-rgb: 142,103,135;
  --color-red: #c24c4a;
  --color-red-rgb: 194,76,74;
  --color-yellow: #c49a52;
  --color-yellow-rgb: 196,154,82;
  --day-planner-progress-bg: #f8f8f8;
  --day-planner-progress-fg: #c5d0c8;
  --divider-color: #b8b8b8;
  --divider-color-hover: #8e6787;
  --divider-vertical-height: 100%;
  --dropdown-background: #f1f1f1;
  --dropdown-background-hover: #d7c9d5;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --ebw-calendar-month: #5c7a62;
  --ebw-calendar-year: #8e6787;
  --ebw-embed-border-color: #d7c9d5;
  --ebw-font-callout-title: 'Architects Daughter';
  --ebw-font-tags: 'Architects Daughter';
  --ebw-he-title-border: #737373;
  --ebw-link-hidden: #74c6c5;
  --ebw-link-underline: #41b0b0;
  --ebw-row-alt-hover: rgba(142, 103, 135, 0.05);
  --ebw-strong-em: #c49a52;
  --ebw-tab-title-active-bg: #5c7a62;
  --ebw-tab-title-active-focused-bg: #8e6787;
  --ebw-tab-title-inactive-bg: #737373;
  --ebw-table-header-alt: rgba(142, 103, 135, 0.4);
  --ebw-today-hover: #484848;
  --ebw-today-text: #8e6787;
  --flair-background: #f1f1f1;
  --flair-color: #484848;
  --font-interface: '??', 'IBM Plex Sans', Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-mermaid: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-monospace: '??', 'Fira Code', 'Source Code Pro', Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-print: '??', '??', 'IBM Plex Sans', Helvetica Neue, 'Arial';
  --font-text: '??', 'IBM Plex Sans', Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-weight: 400;
  --graph-line: #cdcdcd;
  --graph-node: #c6b2c3;
  --graph-node-attachment: #adbcb0;
  --graph-node-focused: #ecc986;
  --graph-node-tag: #91a695;
  --graph-node-unresolved: #b8b8b8;
  --graph-text: #484848;
  --h1-color: #c49a52;
  --h1-font: 'Architects Daughter';
  --h1-line-height: 1.5;
  --h2-color: #5c7a62;
  --h2-font: 'Architects Daughter';
  --h2-line-height: 1.5;
  --h3-color: #41b0b0;
  --h3-font: 'Architects Daughter';
  --h3-line-height: 1.5;
  --h4-color: #4575ae;
  --h4-font: 'Architects Daughter';
  --h4-line-height: 1.5;
  --h5-color: #8e6787;
  --h5-font: 'Architects Daughter';
  --h5-line-height: 1.5;
  --h6-color: #a75c70;
  --h6-font: 'Architects Daughter';
  --h6-line-height: 1.5;
  --he-text-on-accent-active: #f1f1f1;
  --he-text-on-accent-inactive: #484848;
  --he-title-bar-active-bg: #91a695;
  --he-title-bar-active-pinned-bg: #b399ae;
  --he-title-bar-height: 22px;
  --he-title-bar-inactive-bg: #a0a0a0;
  --he-title-bar-inactive-fg: #f1f1f1;
  --he-title-bar-inactive-pinned-bg: #a0a0a0;
  --he-view-header-height: 22px;
  --heading-formatting: #a0a0a0;
  --heading-spacing: 22.4px;
  --hr-color: #cdcdcd;
  --interactive-accent: #8e6787;
  --interactive-accent-hover: #b399ae;
  --interactive-accent-hsl: 344, 30%, 51%;
  --interactive-disabled: #e3e3e3;
  --interactive-hover: #d7c9d5;
  --interactive-normal: #f1f1f1;
  --interactive-toggle: #91a695;
  --italic-color: #a75c70;
  --link-color: #737373;
  --link-color-hover: #058080;
  --link-external-color: #737373;
  --link-external-color-hover: #058080;
  --link-unresolved-color: #737373;
  --link-unresolved-decoration-color: #41b0b0;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #e3e3e3;
  --menu-border-color: #dbdbdb;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --modifier-text-accent: #f8f8f8;
  --p-spacing: 16px;
  --pdf-background: #f8f8f8;
  --pdf-page-background: #f8f8f8;
  --pdf-sidebar-background: #f8f8f8;
  --popover-font-size: 16px;
  --primary-accent-0: #e2d9e1;
  --primary-accent-1: #d7c9d5;
  --primary-accent-1-rgb: 215,201,213;
  --primary-accent-2: #c6b2c3;
  --primary-accent-3: #b399ae;
  --primary-accent-4: #8e6787;
  --primary-accent-4-rgb: 142,103,135;
  --primary-accent-5: #594054;
  --primary-accent-6: #392a37;
  --raised-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5d5d5d;
  --search-icon-color: #5d5d5d;
  --search-result-background: #f8f8f8;
  --secondary-accent-0: #d6ddd7;
  --secondary-accent-1: #c5d0c8;
  --secondary-accent-1-rgb: 197,208,200;
  --secondary-accent-2: #adbcb0;
  --secondary-accent-3: #91a695;
  --secondary-accent-4: #5c7a62;
  --secondary-accent-4-rgb: 92,122,98;
  --secondary-accent-5: #3a4d3e;
  --secondary-accent-6: #263228;
  --setting-group-heading-color: #484848;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #f1f1f1;
  --setting-items-border-color: #cdcdcd;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5d5d5d;
  --shiki-code-background: #f1f1f1;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 16px;
  --shiki-code-comment: #a0a0a0;
  --shiki-code-function: #5c7a62;
  --shiki-code-important: #9d6553;
  --shiki-code-keyword: #a75c70;
  --shiki-code-normal: #5d5d5d;
  --shiki-code-property: #058080;
  --shiki-code-punctuation: #5d5d5d;
  --shiki-code-string: #c49a52;
  --shiki-code-value: #8e6787;
  --shiki-gutter-border-color: #cdcdcd;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #a0a0a0;
  --shiki-gutter-text-color-highlight: #5d5d5d;
  --shiki-highlight-green: rgba(92, 122, 98, 0.5);
  --shiki-highlight-green-background: rgba(92, 122, 98, 0.1);
  --shiki-highlight-neutral: #5d5d5d;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(194, 76, 74, 0.5);
  --shiki-highlight-red-background: rgba(194, 76, 74, 0.1);
  --shiki-terminal-dots-color: #a0a0a0;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #f8f8f8;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #c24c4a;
  --sync-avatar-color-2: #9d6553;
  --sync-avatar-color-3: #c49a52;
  --sync-avatar-color-4: #5c7a62;
  --sync-avatar-color-5: #058080;
  --sync-avatar-color-6: #4575ae;
  --sync-avatar-color-7: #8e6787;
  --sync-avatar-color-8: #a75c70;
  --tab-background-active: #f8f8f8;
  --tab-divider-color: #dbdbdb;
  --tab-font-size: 13px;
  --tab-outline-color: #b8b8b8;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #e3e3e3;
  --tab-switcher-menubar-background: linear-gradient(to top, #e3e3e3, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(344, 30%, 51%);
  --tab-text-color: #5d5d5d;
  --tab-text-color-active: #5d5d5d;
  --tab-text-color-focused: #484848;
  --tab-text-color-focused-active: #5d5d5d;
  --tab-text-color-focused-active-current: #484848;
  --tab-text-color-focused-highlighted: #8e6787;
  --table-add-button-border-color: #cdcdcd;
  --table-add-button-border-width: 1px;
  --table-background: rgba(0, 0, 0, 0.05);
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #8e6787;
  --table-drag-handle-color: #a0a0a0;
  --table-drag-handle-color-active: #fafafa;
  --table-header-background: #d7c9d5;
  --table-header-background-hover: rgba(142, 103, 135, 0.4);
  --table-header-border-color: #b399ae;
  --table-header-border-width: 1px;
  --table-header-color: #2f2f2f;
  --table-header-size: 0.933em;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.05);
  --table-row-background-hover: rgba(142, 103, 135, 0.05);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(344, 30%, 51%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #8e6787;
  --table-text-size: 16px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: hsla(344, 30%, 51%, 0.15);
  --tag-border-color-hover: hsla(344, 30%, 51%, 0.15);
  --tag-color: #8e6787;
  --tag-color-hover: #8e6787;
  --tag-size: 0.875em;
  --text-accent: #8e6787;
  --text-accent-hover: #594054;
  --text-error: #c24c4a;
  --text-faint: #a0a0a0;
  --text-highlight-bg: rgba(142, 103, 135, 0.2);
  --text-highlight-fg: #2f2f2f;
  --text-muted: #5d5d5d;
  --text-normal: #484848;
  --text-on-accent: #fafafa;
  --text-selection: rgba(92, 122, 98, 0.2);
  --text-success: #5c7a62;
  --text-warning: #9d6553;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(61, 126, 123, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(61, 126, 123, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(61, 126, 123, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(61, 126, 123, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--ebw-callout-danger, 167, 92, 112);
  background: rgba(167, 92, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(167, 92, 112, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(167, 92, 112, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(167, 92, 112, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(167, 92, 112, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--ebw-callout-example, 142, 103, 135);
  background: rgba(142, 103, 135, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(142, 103, 135, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(142, 103, 135, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(142, 103, 135, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(142, 103, 135, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="excerpt"] {
  --background-modifier-active-hover: hsla(344, 30%, 51%, 0.15);
  --background-modifier-border: #cdcdcd;
  --background-modifier-border-focus: #b8b8b8;
  --background-modifier-border-hover: #dbdbdb;
  --background-modifier-error: #c24c4a;
  --background-modifier-error-hover: #e68584;
  --background-modifier-error-rgb: 194,76,74;
  --background-modifier-form-field: #f8f8f8;
  --background-modifier-form-field-hover: #f8f8f8;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-info: #4575ae;
  --background-modifier-success: #5c7a62;
  --background-modifier-success-rgb: 92,122,98;
  --background-modifier-warning: #c49a52;
  --background-modifier-warning-hover: #8d6e3b;
  --background-primary: #f8f8f8;
  --background-primary-alt: #f1f1f1;
  --background-secondary: #e3e3e3;
  --background-secondary-alt: #ebebeb;
  --blockquote-border-color: #adbcb0;
  --blur-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: #4575ae;
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 194,76,74;
  --callout-color: var(--ebw-callout-quote, 53, 120, 175);
  --callout-content-padding: 0 8px;
  --callout-default: 69,117,174;
  --callout-error: 194,76,74;
  --callout-example: 142,103,135;
  --callout-fail: 194,76,74;
  --callout-important: 62,125,121;
  --callout-info: 69,117,174;
  --callout-padding: 0;
  --callout-question: 157,101,83;
  --callout-radius: 8px;
  --callout-success: 92,122,98;
  --callout-summary: 62,125,121;
  --callout-tip: 62,125,121;
  --callout-title-padding: 8px;
  --callout-title-weight: 600;
  --callout-todo: 69,117,174;
  --callout-warning: 157,101,83;
  --canvas-background: #f8f8f8;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #dbdbdb;
  --caret-color: #484848;
  --checkbox-border-color: #a0a0a0;
  --checkbox-border-color-hover: #5d5d5d;
  --checkbox-cancelled: #a0a0a0;
  --checkbox-checked: #91a695;
  --checkbox-color: #8e6787;
  --checkbox-color-hover: #b399ae;
  --checkbox-deferred: #7fa4ca;
  --checkbox-hover: #dbdbdb;
  --checkbox-important: #c24c4a;
  --checkbox-in-progress: #41b0b0;
  --checkbox-marker-color: #f8f8f8;
  --checkbox-question: #c49a52;
  --checkbox-radius: 4px;
  --checkbox-review: #91a695;
  --checkbox-size: 16px;
  --checklist-done-color: #5d5d5d;
  --clickable-icon-radius: 4px;
  --code-background: #f1f1f1;
  --code-border-color: #cdcdcd;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: #a0a0a0;
  --code-function: #c49a52;
  --code-important: #9d6553;
  --code-keyword: #a75c70;
  --code-normal: #4575ae;
  --code-operator: #c24c4a;
  --code-property: #058080;
  --code-punctuation: #5d5d5d;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #5c7a62;
  --code-tag: #c24c4a;
  --code-value: #8e6787;
  --collapse-icon-color: #a0a0a0;
  --collapse-icon-color-collapsed: #8e6787;
  --color-accent: hsl(344, 30%, 51%);
  --color-accent-1: hsl(343, 30.3%, 54.825%);
  --color-accent-2: hsl(341, 30.6%, 58.65%);
  --color-accent-hsl: 344, 30%, 51%;
  --color-base-00: #fafafa;
  --color-base-05: #f8f8f8;
  --color-base-10: #f5f5f5;
  --color-base-100: #212121;
  --color-base-20: #f1f1f1;
  --color-base-25: #e3e3e3;
  --color-base-30: #dbdbdb;
  --color-base-35: #cdcdcd;
  --color-base-40: #b8b8b8;
  --color-base-50: #a0a0a0;
  --color-base-60: #737373;
  --color-base-70: #5d5d5d;
  --color-blue: #4575ae;
  --color-blue-rgb: 69,117,174;
  --color-cyan: #058080;
  --color-cyan-rgb: 62,125,121;
  --color-green: #5c7a62;
  --color-green-rgb: 92,122,98;
  --color-orange: #9d6553;
  --color-orange-rgb: 157,101,83;
  --color-pink: #a75c70;
  --color-pink-rgb: 167,92,112;
  --color-purple: #8e6787;
  --color-purple-rgb: 142,103,135;
  --color-red: #c24c4a;
  --color-red-rgb: 194,76,74;
  --color-yellow: #c49a52;
  --color-yellow-rgb: 196,154,82;
  --day-planner-progress-bg: #f8f8f8;
  --day-planner-progress-fg: #c5d0c8;
  --divider-color: #b8b8b8;
  --divider-color-hover: #8e6787;
  --divider-vertical-height: 100%;
  --dropdown-background: #f1f1f1;
  --dropdown-background-hover: #d7c9d5;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --ebw-calendar-month: #5c7a62;
  --ebw-calendar-year: #8e6787;
  --ebw-embed-border-color: #d7c9d5;
  --ebw-font-callout-title: 'Architects Daughter';
  --ebw-font-tags: 'Architects Daughter';
  --ebw-he-title-border: #737373;
  --ebw-link-hidden: #74c6c5;
  --ebw-link-underline: #41b0b0;
  --ebw-row-alt-hover: rgba(142, 103, 135, 0.05);
  --ebw-strong-em: #c49a52;
  --ebw-tab-title-active-bg: #5c7a62;
  --ebw-tab-title-active-focused-bg: #8e6787;
  --ebw-tab-title-inactive-bg: #737373;
  --ebw-table-header-alt: rgba(142, 103, 135, 0.4);
  --ebw-today-hover: #484848;
  --ebw-today-text: #8e6787;
  --flair-background: #f1f1f1;
  --flair-color: #484848;
  --font-interface: '??', 'IBM Plex Sans', Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-mermaid: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-monospace: '??', 'Fira Code', 'Source Code Pro', Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-print: '??', '??', 'IBM Plex Sans', Helvetica Neue, 'Arial';
  --font-text: '??', 'IBM Plex Sans', Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-weight: 400;
  --graph-line: #cdcdcd;
  --graph-node: #c6b2c3;
  --graph-node-attachment: #adbcb0;
  --graph-node-focused: #ecc986;
  --graph-node-tag: #91a695;
  --graph-node-unresolved: #b8b8b8;
  --graph-text: #484848;
  --h1-color: #c49a52;
  --h1-font: 'Architects Daughter';
  --h1-line-height: 1.5;
  --h2-color: #5c7a62;
  --h2-font: 'Architects Daughter';
  --h2-line-height: 1.5;
  --h3-color: #41b0b0;
  --h3-font: 'Architects Daughter';
  --h3-line-height: 1.5;
  --h4-color: #4575ae;
  --h4-font: 'Architects Daughter';
  --h4-line-height: 1.5;
  --h5-color: #8e6787;
  --h5-font: 'Architects Daughter';
  --h5-line-height: 1.5;
  --h6-color: #a75c70;
  --h6-font: 'Architects Daughter';
  --h6-line-height: 1.5;
  --he-text-on-accent-active: #f1f1f1;
  --he-text-on-accent-inactive: #484848;
  --he-title-bar-active-bg: #91a695;
  --he-title-bar-active-pinned-bg: #b399ae;
  --he-title-bar-height: 22px;
  --he-title-bar-inactive-bg: #a0a0a0;
  --he-title-bar-inactive-fg: #f1f1f1;
  --he-title-bar-inactive-pinned-bg: #a0a0a0;
  --he-view-header-height: 22px;
  --heading-formatting: #a0a0a0;
  --heading-spacing: 22.4px;
  --hr-color: #cdcdcd;
  --interactive-accent: #8e6787;
  --interactive-accent-hover: #b399ae;
  --interactive-accent-hsl: 344, 30%, 51%;
  --interactive-disabled: #e3e3e3;
  --interactive-hover: #d7c9d5;
  --interactive-normal: #f1f1f1;
  --interactive-toggle: #91a695;
  --italic-color: #a75c70;
  --link-color: #737373;
  --link-color-hover: #058080;
  --link-external-color: #737373;
  --link-external-color-hover: #058080;
  --link-unresolved-color: #737373;
  --link-unresolved-decoration-color: #41b0b0;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #e3e3e3;
  --menu-border-color: #dbdbdb;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --modifier-text-accent: #f8f8f8;
  --p-spacing: 16px;
  --pdf-background: #f8f8f8;
  --pdf-page-background: #f8f8f8;
  --pdf-sidebar-background: #f8f8f8;
  --popover-font-size: 16px;
  --primary-accent-0: #e2d9e1;
  --primary-accent-1: #d7c9d5;
  --primary-accent-1-rgb: 215,201,213;
  --primary-accent-2: #c6b2c3;
  --primary-accent-3: #b399ae;
  --primary-accent-4: #8e6787;
  --primary-accent-4-rgb: 142,103,135;
  --primary-accent-5: #594054;
  --primary-accent-6: #392a37;
  --raised-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5d5d5d;
  --search-icon-color: #5d5d5d;
  --search-result-background: #f8f8f8;
  --secondary-accent-0: #d6ddd7;
  --secondary-accent-1: #c5d0c8;
  --secondary-accent-1-rgb: 197,208,200;
  --secondary-accent-2: #adbcb0;
  --secondary-accent-3: #91a695;
  --secondary-accent-4: #5c7a62;
  --secondary-accent-4-rgb: 92,122,98;
  --secondary-accent-5: #3a4d3e;
  --secondary-accent-6: #263228;
  --setting-group-heading-color: #484848;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #f1f1f1;
  --setting-items-border-color: #cdcdcd;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5d5d5d;
  --shiki-code-background: #f1f1f1;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 16px;
  --shiki-code-comment: #a0a0a0;
  --shiki-code-function: #5c7a62;
  --shiki-code-important: #9d6553;
  --shiki-code-keyword: #a75c70;
  --shiki-code-normal: #5d5d5d;
  --shiki-code-property: #058080;
  --shiki-code-punctuation: #5d5d5d;
  --shiki-code-string: #c49a52;
  --shiki-code-value: #8e6787;
  --shiki-gutter-border-color: #cdcdcd;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #a0a0a0;
  --shiki-gutter-text-color-highlight: #5d5d5d;
  --shiki-highlight-green: rgba(92, 122, 98, 0.5);
  --shiki-highlight-green-background: rgba(92, 122, 98, 0.1);
  --shiki-highlight-neutral: #5d5d5d;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(194, 76, 74, 0.5);
  --shiki-highlight-red-background: rgba(194, 76, 74, 0.1);
  --shiki-terminal-dots-color: #a0a0a0;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #f8f8f8;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #c24c4a;
  --sync-avatar-color-2: #9d6553;
  --sync-avatar-color-3: #c49a52;
  --sync-avatar-color-4: #5c7a62;
  --sync-avatar-color-5: #058080;
  --sync-avatar-color-6: #4575ae;
  --sync-avatar-color-7: #8e6787;
  --sync-avatar-color-8: #a75c70;
  --tab-background-active: #f8f8f8;
  --tab-divider-color: #dbdbdb;
  --tab-font-size: 13px;
  --tab-outline-color: #b8b8b8;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #e3e3e3;
  --tab-switcher-menubar-background: linear-gradient(to top, #e3e3e3, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(344, 30%, 51%);
  --tab-text-color: #5d5d5d;
  --tab-text-color-active: #5d5d5d;
  --tab-text-color-focused: #484848;
  --tab-text-color-focused-active: #5d5d5d;
  --tab-text-color-focused-active-current: #484848;
  --tab-text-color-focused-highlighted: #8e6787;
  --table-add-button-border-color: #cdcdcd;
  --table-add-button-border-width: 1px;
  --table-background: rgba(0, 0, 0, 0.05);
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #8e6787;
  --table-drag-handle-color: #a0a0a0;
  --table-drag-handle-color-active: #fafafa;
  --table-header-background: #d7c9d5;
  --table-header-background-hover: rgba(142, 103, 135, 0.4);
  --table-header-border-color: #b399ae;
  --table-header-border-width: 1px;
  --table-header-color: #2f2f2f;
  --table-header-size: 0.933em;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.05);
  --table-row-background-hover: rgba(142, 103, 135, 0.05);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(344, 30%, 51%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #8e6787;
  --table-text-size: 16px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: hsla(344, 30%, 51%, 0.15);
  --tag-border-color-hover: hsla(344, 30%, 51%, 0.15);
  --tag-color: #8e6787;
  --tag-color-hover: #8e6787;
  --tag-size: 0.875em;
  --text-accent: #8e6787;
  --text-accent-hover: #594054;
  --text-error: #c24c4a;
  --text-faint: #a0a0a0;
  --text-highlight-bg: rgba(142, 103, 135, 0.2);
  --text-highlight-fg: #2f2f2f;
  --text-muted: #5d5d5d;
  --text-normal: #484848;
  --text-on-accent: #fafafa;
  --text-selection: rgba(92, 122, 98, 0.2);
  --text-success: #5c7a62;
  --text-warning: #9d6553;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(53, 120, 175, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(53, 120, 175, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(53, 120, 175, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(53, 120, 175, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--ebw-callout-failure, 211, 141, 159);
  background: rgba(211, 141, 159, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(211, 141, 159, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(211, 141, 159, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(211, 141, 159, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(211, 141, 159, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--ebw-callout-info, 53, 119, 174);
  background: rgba(53, 119, 174, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(53, 119, 174, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(53, 119, 174, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(53, 119, 174, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(53, 119, 174, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--ebw-callout-note, 33, 75, 109);
  background: rgba(33, 75, 109, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(33, 75, 109, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(33, 75, 109, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(33, 75, 109, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(33, 75, 109, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--ebw-callout-question, 89, 174, 170);
  background: rgba(89, 174, 170, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(89, 174, 170, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(89, 174, 170, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(89, 174, 170, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(89, 174, 170, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--ebw-callout-quote, 53, 120, 175);
  background: rgba(53, 120, 175, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(53, 120, 175, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(53, 120, 175, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(53, 120, 175, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(53, 120, 175, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="reference"] {
  --background-modifier-active-hover: hsla(344, 30%, 51%, 0.15);
  --background-modifier-border: #cdcdcd;
  --background-modifier-border-focus: #b8b8b8;
  --background-modifier-border-hover: #dbdbdb;
  --background-modifier-error: #c24c4a;
  --background-modifier-error-hover: #e68584;
  --background-modifier-error-rgb: 194,76,74;
  --background-modifier-form-field: #f8f8f8;
  --background-modifier-form-field-hover: #f8f8f8;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-info: #4575ae;
  --background-modifier-success: #5c7a62;
  --background-modifier-success-rgb: 92,122,98;
  --background-modifier-warning: #c49a52;
  --background-modifier-warning-hover: #8d6e3b;
  --background-primary: #f8f8f8;
  --background-primary-alt: #f1f1f1;
  --background-secondary: #e3e3e3;
  --background-secondary-alt: #ebebeb;
  --blockquote-border-color: #adbcb0;
  --blur-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: #4575ae;
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 194,76,74;
  --callout-color: var(--ebw-callout-reference, 137, 137, 137);
  --callout-content-padding: 0 8px;
  --callout-default: 69,117,174;
  --callout-error: 194,76,74;
  --callout-example: 142,103,135;
  --callout-fail: 194,76,74;
  --callout-important: 62,125,121;
  --callout-info: 69,117,174;
  --callout-padding: 0;
  --callout-question: 157,101,83;
  --callout-radius: 8px;
  --callout-success: 92,122,98;
  --callout-summary: 62,125,121;
  --callout-tip: 62,125,121;
  --callout-title-padding: 8px;
  --callout-title-weight: 600;
  --callout-todo: 69,117,174;
  --callout-warning: 157,101,83;
  --canvas-background: #f8f8f8;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #dbdbdb;
  --caret-color: #484848;
  --checkbox-border-color: #a0a0a0;
  --checkbox-border-color-hover: #5d5d5d;
  --checkbox-cancelled: #a0a0a0;
  --checkbox-checked: #91a695;
  --checkbox-color: #8e6787;
  --checkbox-color-hover: #b399ae;
  --checkbox-deferred: #7fa4ca;
  --checkbox-hover: #dbdbdb;
  --checkbox-important: #c24c4a;
  --checkbox-in-progress: #41b0b0;
  --checkbox-marker-color: #f8f8f8;
  --checkbox-question: #c49a52;
  --checkbox-radius: 4px;
  --checkbox-review: #91a695;
  --checkbox-size: 16px;
  --checklist-done-color: #5d5d5d;
  --clickable-icon-radius: 4px;
  --code-background: #f1f1f1;
  --code-border-color: #cdcdcd;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: #a0a0a0;
  --code-function: #c49a52;
  --code-important: #9d6553;
  --code-keyword: #a75c70;
  --code-normal: #4575ae;
  --code-operator: #c24c4a;
  --code-property: #058080;
  --code-punctuation: #5d5d5d;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #5c7a62;
  --code-tag: #c24c4a;
  --code-value: #8e6787;
  --collapse-icon-color: #a0a0a0;
  --collapse-icon-color-collapsed: #8e6787;
  --color-accent: hsl(344, 30%, 51%);
  --color-accent-1: hsl(343, 30.3%, 54.825%);
  --color-accent-2: hsl(341, 30.6%, 58.65%);
  --color-accent-hsl: 344, 30%, 51%;
  --color-base-00: #fafafa;
  --color-base-05: #f8f8f8;
  --color-base-10: #f5f5f5;
  --color-base-100: #212121;
  --color-base-20: #f1f1f1;
  --color-base-25: #e3e3e3;
  --color-base-30: #dbdbdb;
  --color-base-35: #cdcdcd;
  --color-base-40: #b8b8b8;
  --color-base-50: #a0a0a0;
  --color-base-60: #737373;
  --color-base-70: #5d5d5d;
  --color-blue: #4575ae;
  --color-blue-rgb: 69,117,174;
  --color-cyan: #058080;
  --color-cyan-rgb: 62,125,121;
  --color-green: #5c7a62;
  --color-green-rgb: 92,122,98;
  --color-orange: #9d6553;
  --color-orange-rgb: 157,101,83;
  --color-pink: #a75c70;
  --color-pink-rgb: 167,92,112;
  --color-purple: #8e6787;
  --color-purple-rgb: 142,103,135;
  --color-red: #c24c4a;
  --color-red-rgb: 194,76,74;
  --color-yellow: #c49a52;
  --color-yellow-rgb: 196,154,82;
  --day-planner-progress-bg: #f8f8f8;
  --day-planner-progress-fg: #c5d0c8;
  --divider-color: #b8b8b8;
  --divider-color-hover: #8e6787;
  --divider-vertical-height: 100%;
  --dropdown-background: #f1f1f1;
  --dropdown-background-hover: #d7c9d5;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --ebw-calendar-month: #5c7a62;
  --ebw-calendar-year: #8e6787;
  --ebw-embed-border-color: #d7c9d5;
  --ebw-font-callout-title: 'Architects Daughter';
  --ebw-font-tags: 'Architects Daughter';
  --ebw-he-title-border: #737373;
  --ebw-link-hidden: #74c6c5;
  --ebw-link-underline: #41b0b0;
  --ebw-row-alt-hover: rgba(142, 103, 135, 0.05);
  --ebw-strong-em: #c49a52;
  --ebw-tab-title-active-bg: #5c7a62;
  --ebw-tab-title-active-focused-bg: #8e6787;
  --ebw-tab-title-inactive-bg: #737373;
  --ebw-table-header-alt: rgba(142, 103, 135, 0.4);
  --ebw-today-hover: #484848;
  --ebw-today-text: #8e6787;
  --flair-background: #f1f1f1;
  --flair-color: #484848;
  --font-interface: '??', 'IBM Plex Sans', Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-mermaid: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-monospace: '??', 'Fira Code', 'Source Code Pro', Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-print: '??', '??', 'IBM Plex Sans', Helvetica Neue, 'Arial';
  --font-text: '??', 'IBM Plex Sans', Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-weight: 400;
  --graph-line: #cdcdcd;
  --graph-node: #c6b2c3;
  --graph-node-attachment: #adbcb0;
  --graph-node-focused: #ecc986;
  --graph-node-tag: #91a695;
  --graph-node-unresolved: #b8b8b8;
  --graph-text: #484848;
  --h1-color: #c49a52;
  --h1-font: 'Architects Daughter';
  --h1-line-height: 1.5;
  --h2-color: #5c7a62;
  --h2-font: 'Architects Daughter';
  --h2-line-height: 1.5;
  --h3-color: #41b0b0;
  --h3-font: 'Architects Daughter';
  --h3-line-height: 1.5;
  --h4-color: #4575ae;
  --h4-font: 'Architects Daughter';
  --h4-line-height: 1.5;
  --h5-color: #8e6787;
  --h5-font: 'Architects Daughter';
  --h5-line-height: 1.5;
  --h6-color: #a75c70;
  --h6-font: 'Architects Daughter';
  --h6-line-height: 1.5;
  --he-text-on-accent-active: #f1f1f1;
  --he-text-on-accent-inactive: #484848;
  --he-title-bar-active-bg: #91a695;
  --he-title-bar-active-pinned-bg: #b399ae;
  --he-title-bar-height: 22px;
  --he-title-bar-inactive-bg: #a0a0a0;
  --he-title-bar-inactive-fg: #f1f1f1;
  --he-title-bar-inactive-pinned-bg: #a0a0a0;
  --he-view-header-height: 22px;
  --heading-formatting: #a0a0a0;
  --heading-spacing: 22.4px;
  --hr-color: #cdcdcd;
  --interactive-accent: #8e6787;
  --interactive-accent-hover: #b399ae;
  --interactive-accent-hsl: 344, 30%, 51%;
  --interactive-disabled: #e3e3e3;
  --interactive-hover: #d7c9d5;
  --interactive-normal: #f1f1f1;
  --interactive-toggle: #91a695;
  --italic-color: #a75c70;
  --link-color: #737373;
  --link-color-hover: #058080;
  --link-external-color: #737373;
  --link-external-color-hover: #058080;
  --link-unresolved-color: #737373;
  --link-unresolved-decoration-color: #41b0b0;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #e3e3e3;
  --menu-border-color: #dbdbdb;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --modifier-text-accent: #f8f8f8;
  --p-spacing: 16px;
  --pdf-background: #f8f8f8;
  --pdf-page-background: #f8f8f8;
  --pdf-sidebar-background: #f8f8f8;
  --popover-font-size: 16px;
  --primary-accent-0: #e2d9e1;
  --primary-accent-1: #d7c9d5;
  --primary-accent-1-rgb: 215,201,213;
  --primary-accent-2: #c6b2c3;
  --primary-accent-3: #b399ae;
  --primary-accent-4: #8e6787;
  --primary-accent-4-rgb: 142,103,135;
  --primary-accent-5: #594054;
  --primary-accent-6: #392a37;
  --raised-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5d5d5d;
  --search-icon-color: #5d5d5d;
  --search-result-background: #f8f8f8;
  --secondary-accent-0: #d6ddd7;
  --secondary-accent-1: #c5d0c8;
  --secondary-accent-1-rgb: 197,208,200;
  --secondary-accent-2: #adbcb0;
  --secondary-accent-3: #91a695;
  --secondary-accent-4: #5c7a62;
  --secondary-accent-4-rgb: 92,122,98;
  --secondary-accent-5: #3a4d3e;
  --secondary-accent-6: #263228;
  --setting-group-heading-color: #484848;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #f1f1f1;
  --setting-items-border-color: #cdcdcd;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5d5d5d;
  --shiki-code-background: #f1f1f1;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 16px;
  --shiki-code-comment: #a0a0a0;
  --shiki-code-function: #5c7a62;
  --shiki-code-important: #9d6553;
  --shiki-code-keyword: #a75c70;
  --shiki-code-normal: #5d5d5d;
  --shiki-code-property: #058080;
  --shiki-code-punctuation: #5d5d5d;
  --shiki-code-string: #c49a52;
  --shiki-code-value: #8e6787;
  --shiki-gutter-border-color: #cdcdcd;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #a0a0a0;
  --shiki-gutter-text-color-highlight: #5d5d5d;
  --shiki-highlight-green: rgba(92, 122, 98, 0.5);
  --shiki-highlight-green-background: rgba(92, 122, 98, 0.1);
  --shiki-highlight-neutral: #5d5d5d;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(194, 76, 74, 0.5);
  --shiki-highlight-red-background: rgba(194, 76, 74, 0.1);
  --shiki-terminal-dots-color: #a0a0a0;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #f8f8f8;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #c24c4a;
  --sync-avatar-color-2: #9d6553;
  --sync-avatar-color-3: #c49a52;
  --sync-avatar-color-4: #5c7a62;
  --sync-avatar-color-5: #058080;
  --sync-avatar-color-6: #4575ae;
  --sync-avatar-color-7: #8e6787;
  --sync-avatar-color-8: #a75c70;
  --tab-background-active: #f8f8f8;
  --tab-divider-color: #dbdbdb;
  --tab-font-size: 13px;
  --tab-outline-color: #b8b8b8;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #e3e3e3;
  --tab-switcher-menubar-background: linear-gradient(to top, #e3e3e3, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(344, 30%, 51%);
  --tab-text-color: #5d5d5d;
  --tab-text-color-active: #5d5d5d;
  --tab-text-color-focused: #484848;
  --tab-text-color-focused-active: #5d5d5d;
  --tab-text-color-focused-active-current: #484848;
  --tab-text-color-focused-highlighted: #8e6787;
  --table-add-button-border-color: #cdcdcd;
  --table-add-button-border-width: 1px;
  --table-background: rgba(0, 0, 0, 0.05);
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #8e6787;
  --table-drag-handle-color: #a0a0a0;
  --table-drag-handle-color-active: #fafafa;
  --table-header-background: #d7c9d5;
  --table-header-background-hover: rgba(142, 103, 135, 0.4);
  --table-header-border-color: #b399ae;
  --table-header-border-width: 1px;
  --table-header-color: #2f2f2f;
  --table-header-size: 0.933em;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.05);
  --table-row-background-hover: rgba(142, 103, 135, 0.05);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(344, 30%, 51%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #8e6787;
  --table-text-size: 16px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: hsla(344, 30%, 51%, 0.15);
  --tag-border-color-hover: hsla(344, 30%, 51%, 0.15);
  --tag-color: #8e6787;
  --tag-color-hover: #8e6787;
  --tag-size: 0.875em;
  --text-accent: #8e6787;
  --text-accent-hover: #594054;
  --text-error: #c24c4a;
  --text-faint: #a0a0a0;
  --text-highlight-bg: rgba(142, 103, 135, 0.2);
  --text-highlight-fg: #2f2f2f;
  --text-muted: #5d5d5d;
  --text-normal: #484848;
  --text-on-accent: #fafafa;
  --text-selection: rgba(92, 122, 98, 0.2);
  --text-success: #5c7a62;
  --text-warning: #9d6553;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(137, 137, 137, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(137, 137, 137, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(137, 137, 137, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(137, 137, 137, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--ebw-callout-success, 92, 122, 99);
  background: rgba(92, 122, 99, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(92, 122, 99, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(92, 122, 99, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(92, 122, 99, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(92, 122, 99, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--ebw-callout-tip, 61, 126, 123);
  background: rgba(61, 126, 123, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(61, 126, 123, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(61, 126, 123, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(61, 126, 123, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(61, 126, 123, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="toc"] {
  --background-modifier-active-hover: hsla(344, 30%, 51%, 0.15);
  --background-modifier-border: #cdcdcd;
  --background-modifier-border-focus: #b8b8b8;
  --background-modifier-border-hover: #dbdbdb;
  --background-modifier-error: #c24c4a;
  --background-modifier-error-hover: #e68584;
  --background-modifier-error-rgb: 194,76,74;
  --background-modifier-form-field: #f8f8f8;
  --background-modifier-form-field-hover: #f8f8f8;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-info: #4575ae;
  --background-modifier-success: #5c7a62;
  --background-modifier-success-rgb: 92,122,98;
  --background-modifier-warning: #c49a52;
  --background-modifier-warning-hover: #8d6e3b;
  --background-primary: #f8f8f8;
  --background-primary-alt: #f1f1f1;
  --background-secondary: #e3e3e3;
  --background-secondary-alt: #ebebeb;
  --blockquote-border-color: #adbcb0;
  --blur-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: #4575ae;
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 194,76,74;
  --callout-color: var(--ebw-callout-toc, 159, 159, 159);
  --callout-content-padding: 0 8px;
  --callout-default: 69,117,174;
  --callout-error: 194,76,74;
  --callout-example: 142,103,135;
  --callout-fail: 194,76,74;
  --callout-important: 62,125,121;
  --callout-info: 69,117,174;
  --callout-padding: 0;
  --callout-question: 157,101,83;
  --callout-radius: 8px;
  --callout-success: 92,122,98;
  --callout-summary: 62,125,121;
  --callout-tip: 62,125,121;
  --callout-title-padding: 8px;
  --callout-title-weight: 600;
  --callout-todo: 69,117,174;
  --callout-warning: 157,101,83;
  --canvas-background: #f8f8f8;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #dbdbdb;
  --caret-color: #484848;
  --checkbox-border-color: #a0a0a0;
  --checkbox-border-color-hover: #5d5d5d;
  --checkbox-cancelled: #a0a0a0;
  --checkbox-checked: #91a695;
  --checkbox-color: #8e6787;
  --checkbox-color-hover: #b399ae;
  --checkbox-deferred: #7fa4ca;
  --checkbox-hover: #dbdbdb;
  --checkbox-important: #c24c4a;
  --checkbox-in-progress: #41b0b0;
  --checkbox-marker-color: #f8f8f8;
  --checkbox-question: #c49a52;
  --checkbox-radius: 4px;
  --checkbox-review: #91a695;
  --checkbox-size: 16px;
  --checklist-done-color: #5d5d5d;
  --clickable-icon-radius: 4px;
  --code-background: #f1f1f1;
  --code-border-color: #cdcdcd;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: #a0a0a0;
  --code-function: #c49a52;
  --code-important: #9d6553;
  --code-keyword: #a75c70;
  --code-normal: #4575ae;
  --code-operator: #c24c4a;
  --code-property: #058080;
  --code-punctuation: #5d5d5d;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #5c7a62;
  --code-tag: #c24c4a;
  --code-value: #8e6787;
  --collapse-icon-color: #a0a0a0;
  --collapse-icon-color-collapsed: #8e6787;
  --color-accent: hsl(344, 30%, 51%);
  --color-accent-1: hsl(343, 30.3%, 54.825%);
  --color-accent-2: hsl(341, 30.6%, 58.65%);
  --color-accent-hsl: 344, 30%, 51%;
  --color-base-00: #fafafa;
  --color-base-05: #f8f8f8;
  --color-base-10: #f5f5f5;
  --color-base-100: #212121;
  --color-base-20: #f1f1f1;
  --color-base-25: #e3e3e3;
  --color-base-30: #dbdbdb;
  --color-base-35: #cdcdcd;
  --color-base-40: #b8b8b8;
  --color-base-50: #a0a0a0;
  --color-base-60: #737373;
  --color-base-70: #5d5d5d;
  --color-blue: #4575ae;
  --color-blue-rgb: 69,117,174;
  --color-cyan: #058080;
  --color-cyan-rgb: 62,125,121;
  --color-green: #5c7a62;
  --color-green-rgb: 92,122,98;
  --color-orange: #9d6553;
  --color-orange-rgb: 157,101,83;
  --color-pink: #a75c70;
  --color-pink-rgb: 167,92,112;
  --color-purple: #8e6787;
  --color-purple-rgb: 142,103,135;
  --color-red: #c24c4a;
  --color-red-rgb: 194,76,74;
  --color-yellow: #c49a52;
  --color-yellow-rgb: 196,154,82;
  --day-planner-progress-bg: #f8f8f8;
  --day-planner-progress-fg: #c5d0c8;
  --divider-color: #b8b8b8;
  --divider-color-hover: #8e6787;
  --divider-vertical-height: 100%;
  --dropdown-background: #f1f1f1;
  --dropdown-background-hover: #d7c9d5;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --ebw-calendar-month: #5c7a62;
  --ebw-calendar-year: #8e6787;
  --ebw-embed-border-color: #d7c9d5;
  --ebw-font-callout-title: 'Architects Daughter';
  --ebw-font-tags: 'Architects Daughter';
  --ebw-he-title-border: #737373;
  --ebw-link-hidden: #74c6c5;
  --ebw-link-underline: #41b0b0;
  --ebw-row-alt-hover: rgba(142, 103, 135, 0.05);
  --ebw-strong-em: #c49a52;
  --ebw-tab-title-active-bg: #5c7a62;
  --ebw-tab-title-active-focused-bg: #8e6787;
  --ebw-tab-title-inactive-bg: #737373;
  --ebw-table-header-alt: rgba(142, 103, 135, 0.4);
  --ebw-today-hover: #484848;
  --ebw-today-text: #8e6787;
  --flair-background: #f1f1f1;
  --flair-color: #484848;
  --font-interface: '??', 'IBM Plex Sans', Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-mermaid: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-monospace: '??', 'Fira Code', 'Source Code Pro', Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Fira Code', 'Source Code Pro', Jetbrains Mono;
  --font-print: '??', '??', 'IBM Plex Sans', Helvetica Neue, 'Arial';
  --font-text: '??', 'IBM Plex Sans', Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'IBM Plex Sans', Helvetica Neue;
  --font-weight: 400;
  --graph-line: #cdcdcd;
  --graph-node: #c6b2c3;
  --graph-node-attachment: #adbcb0;
  --graph-node-focused: #ecc986;
  --graph-node-tag: #91a695;
  --graph-node-unresolved: #b8b8b8;
  --graph-text: #484848;
  --h1-color: #c49a52;
  --h1-font: 'Architects Daughter';
  --h1-line-height: 1.5;
  --h2-color: #5c7a62;
  --h2-font: 'Architects Daughter';
  --h2-line-height: 1.5;
  --h3-color: #41b0b0;
  --h3-font: 'Architects Daughter';
  --h3-line-height: 1.5;
  --h4-color: #4575ae;
  --h4-font: 'Architects Daughter';
  --h4-line-height: 1.5;
  --h5-color: #8e6787;
  --h5-font: 'Architects Daughter';
  --h5-line-height: 1.5;
  --h6-color: #a75c70;
  --h6-font: 'Architects Daughter';
  --h6-line-height: 1.5;
  --he-text-on-accent-active: #f1f1f1;
  --he-text-on-accent-inactive: #484848;
  --he-title-bar-active-bg: #91a695;
  --he-title-bar-active-pinned-bg: #b399ae;
  --he-title-bar-height: 22px;
  --he-title-bar-inactive-bg: #a0a0a0;
  --he-title-bar-inactive-fg: #f1f1f1;
  --he-title-bar-inactive-pinned-bg: #a0a0a0;
  --he-view-header-height: 22px;
  --heading-formatting: #a0a0a0;
  --heading-spacing: 22.4px;
  --hr-color: #cdcdcd;
  --interactive-accent: #8e6787;
  --interactive-accent-hover: #b399ae;
  --interactive-accent-hsl: 344, 30%, 51%;
  --interactive-disabled: #e3e3e3;
  --interactive-hover: #d7c9d5;
  --interactive-normal: #f1f1f1;
  --interactive-toggle: #91a695;
  --italic-color: #a75c70;
  --link-color: #737373;
  --link-color-hover: #058080;
  --link-external-color: #737373;
  --link-external-color-hover: #058080;
  --link-unresolved-color: #737373;
  --link-unresolved-decoration-color: #41b0b0;
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #e3e3e3;
  --menu-border-color: #dbdbdb;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --modifier-text-accent: #f8f8f8;
  --p-spacing: 16px;
  --pdf-background: #f8f8f8;
  --pdf-page-background: #f8f8f8;
  --pdf-sidebar-background: #f8f8f8;
  --popover-font-size: 16px;
  --primary-accent-0: #e2d9e1;
  --primary-accent-1: #d7c9d5;
  --primary-accent-1-rgb: 215,201,213;
  --primary-accent-2: #c6b2c3;
  --primary-accent-3: #b399ae;
  --primary-accent-4: #8e6787;
  --primary-accent-4-rgb: 142,103,135;
  --primary-accent-5: #594054;
  --primary-accent-6: #392a37;
  --raised-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5d5d5d;
  --search-icon-color: #5d5d5d;
  --search-result-background: #f8f8f8;
  --secondary-accent-0: #d6ddd7;
  --secondary-accent-1: #c5d0c8;
  --secondary-accent-1-rgb: 197,208,200;
  --secondary-accent-2: #adbcb0;
  --secondary-accent-3: #91a695;
  --secondary-accent-4: #5c7a62;
  --secondary-accent-4-rgb: 92,122,98;
  --secondary-accent-5: #3a4d3e;
  --secondary-accent-6: #263228;
  --setting-group-heading-color: #484848;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #f1f1f1;
  --setting-items-border-color: #cdcdcd;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #5d5d5d;
  --shiki-code-background: #f1f1f1;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 16px;
  --shiki-code-comment: #a0a0a0;
  --shiki-code-function: #5c7a62;
  --shiki-code-important: #9d6553;
  --shiki-code-keyword: #a75c70;
  --shiki-code-normal: #5d5d5d;
  --shiki-code-property: #058080;
  --shiki-code-punctuation: #5d5d5d;
  --shiki-code-string: #c49a52;
  --shiki-code-value: #8e6787;
  --shiki-gutter-border-color: #cdcdcd;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #a0a0a0;
  --shiki-gutter-text-color-highlight: #5d5d5d;
  --shiki-highlight-green: rgba(92, 122, 98, 0.5);
  --shiki-highlight-green-background: rgba(92, 122, 98, 0.1);
  --shiki-highlight-neutral: #5d5d5d;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(194, 76, 74, 0.5);
  --shiki-highlight-red-background: rgba(194, 76, 74, 0.1);
  --shiki-terminal-dots-color: #a0a0a0;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #f8f8f8;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #c24c4a;
  --sync-avatar-color-2: #9d6553;
  --sync-avatar-color-3: #c49a52;
  --sync-avatar-color-4: #5c7a62;
  --sync-avatar-color-5: #058080;
  --sync-avatar-color-6: #4575ae;
  --sync-avatar-color-7: #8e6787;
  --sync-avatar-color-8: #a75c70;
  --tab-background-active: #f8f8f8;
  --tab-divider-color: #dbdbdb;
  --tab-font-size: 13px;
  --tab-outline-color: #b8b8b8;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #e3e3e3;
  --tab-switcher-menubar-background: linear-gradient(to top, #e3e3e3, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(344, 30%, 51%);
  --tab-text-color: #5d5d5d;
  --tab-text-color-active: #5d5d5d;
  --tab-text-color-focused: #484848;
  --tab-text-color-focused-active: #5d5d5d;
  --tab-text-color-focused-active-current: #484848;
  --tab-text-color-focused-highlighted: #8e6787;
  --table-add-button-border-color: #cdcdcd;
  --table-add-button-border-width: 1px;
  --table-background: rgba(0, 0, 0, 0.05);
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #8e6787;
  --table-drag-handle-color: #a0a0a0;
  --table-drag-handle-color-active: #fafafa;
  --table-header-background: #d7c9d5;
  --table-header-background-hover: rgba(142, 103, 135, 0.4);
  --table-header-border-color: #b399ae;
  --table-header-border-width: 1px;
  --table-header-color: #2f2f2f;
  --table-header-size: 0.933em;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.05);
  --table-row-background-hover: rgba(142, 103, 135, 0.05);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(344, 30%, 51%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #8e6787;
  --table-text-size: 16px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: hsla(344, 30%, 51%, 0.15);
  --tag-border-color-hover: hsla(344, 30%, 51%, 0.15);
  --tag-color: #8e6787;
  --tag-color-hover: #8e6787;
  --tag-size: 0.875em;
  --text-accent: #8e6787;
  --text-accent-hover: #594054;
  --text-error: #c24c4a;
  --text-faint: #a0a0a0;
  --text-highlight-bg: rgba(142, 103, 135, 0.2);
  --text-highlight-fg: #2f2f2f;
  --text-muted: #5d5d5d;
  --text-normal: #484848;
  --text-on-accent: #fafafa;
  --text-selection: rgba(92, 122, 98, 0.2);
  --text-success: #5c7a62;
  --text-warning: #9d6553;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(159, 159, 159, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(159, 159, 159, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(159, 159, 159, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--ebw-callout-info, 53, 119, 174);
  background: rgba(53, 119, 174, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(53, 119, 174, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(53, 119, 174, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(53, 119, 174, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(53, 119, 174, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--ebw-callout-warning, 234, 175, 0);
  background: rgba(234, 175, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(234, 175, 0, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(234, 175, 0, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(234, 175, 0, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(234, 175, 0, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 61, 126, 123;
  border-bottom-color: rgb(61, 126, 123);
  border-left-color: rgb(61, 126, 123);
  border-right-color: rgb(61, 126, 123);
  border-top-color: rgb(61, 126, 123);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(61, 126, 123));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: rgb(72, 72, 72);
  padding-left: 8px;
  padding-right: 8px;
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

html[saved-theme="light"] body .callout[data-callout="chat"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="excerpt"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="reference"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="toc"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: var(--text-normal, rgb(72, 72, 72));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(248, 248, 248));
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(72, 72, 72) none 0px;
  text-decoration-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(227, 227, 227);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.075));
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(168, 93, 113, 0.15);
  border-left-color: rgba(168, 93, 113, 0.15);
  border-right-color: rgba(168, 93, 113, 0.15);
  border-top-color: rgba(168, 93, 113, 0.15);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(142, 103, 135);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(196, 154, 82));
  font-family: var(--h1-font, "Architects Daughter");
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(196, 154, 82));
  font-size: var(--inline-title-size, 32px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(92, 122, 98));
  font-family: var(--h2-font, "Architects Daughter");
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(196, 154, 82));
  font-family: var(--inline-title-font, "Architects Daughter");
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(65, 176, 176));
  font-family: var(--h3-font, "Architects Daughter");
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(69, 117, 174));
  font-family: var(--h4-font, "Architects Daughter");
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(142, 103, 135));
  font-family: var(--h5-font, "Architects Daughter");
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(167, 92, 112));
  font-family: var(--h6-font, "Architects Daughter");
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--ebw-callout-note, 33, 75, 109);
  border-bottom-color: rgba(33, 75, 109, 0.4);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(33, 75, 109, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(33, 75, 109, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(33, 75, 109, 0.4);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(93, 93, 93));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(93, 93, 93));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(72, 72, 72);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: var(--icon-color, rgb(93, 93, 93));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(235, 235, 235));
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: var(--status-bar-text-color, rgb(93, 93, 93));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(93, 93, 93);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(93, 93, 93));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(93, 93, 93));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: var(--icon-color, rgb(93, 93, 93));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(93, 93, 93);
  stroke: rgb(93, 93, 93);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: rgb(93, 93, 93);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(160, 160, 160));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(72, 72, 72));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(248, 248, 248));
  border-color: rgb(72, 72, 72);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(179, 153, 174);
  color: var(--table-header-color, rgb(47, 47, 47));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(205, 205, 205);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(205, 205, 205);
  border-left-width: 1px;
  border-right-color: rgb(205, 205, 205);
  border-right-width: 1px;
  border-top-color: rgb(205, 205, 205);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: var(--text-muted, rgb(93, 93, 93));
  font-family: var(--font-monospace, "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  margin-bottom: 0px;
  margin-left: 25px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: rgb(93, 93, 93);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(205, 205, 205);
  border-radius: 4px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(93, 93, 93);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(93, 93, 93);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  color: var(--pill-color, rgb(142, 103, 135));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(93, 93, 93);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(248, 248, 248));
  color: var(--text-normal, rgb(72, 72, 72));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(227, 227, 227));
  border-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(235, 235, 235));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(72, 72, 72);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(235, 235, 235));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(72, 72, 72));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: var(--text-normal, rgb(93, 93, 93));
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--background-secondary-alt, rgb(235, 235, 235));
  border-bottom-color: rgb(69, 117, 174);
  border-left-color: rgb(69, 117, 174);
  border-right-color: rgb(69, 117, 174);
  border-top-color: rgb(69, 117, 174);
  color: var(--code-normal, rgb(69, 117, 174));
  font-family: var(--font-monospace, "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

html[saved-theme="light"] body sub {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body summary {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body sup {
  color: rgb(72, 72, 72);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(168, 93, 113, 0.15);
  border-left-color: rgba(168, 93, 113, 0.15);
  border-right-color: rgba(168, 93, 113, 0.15);
  border-top-color: rgba(168, 93, 113, 0.15);
  color: var(--tag-color, rgb(142, 103, 135));
}`,
  },
  classSettings: {
    "ebullientworks-reverse-view-header-actions": {
      general: `.ebullientworks-reverse-view-header-actions .popover.hover-editor .popover-content .workspace-leaf-content .view-header > .view-header-icon, .ebullientworks-reverse-view-header-actions .workspace-tabs .view-header > .view-header-icon {
order: 0;
}

.ebullientworks-reverse-view-header-actions .popover.hover-editor .popover-content .workspace-leaf-content .view-header > .view-actions, .ebullientworks-reverse-view-header-actions .workspace-tabs .view-header > .view-actions {
order: 0;
flex-direction: row-reverse;
padding: 0 var(--size-2-3);
}

.ebullientworks-reverse-view-header-actions .popover.hover-editor .popover-content .workspace-leaf-content .view-header > .view-header-nav-buttons, .ebullientworks-reverse-view-header-actions .workspace-tabs .view-header > .view-header-nav-buttons {
order: 1;
}

.ebullientworks-reverse-view-header-actions .popover.hover-editor .popover-content .workspace-leaf-content .view-header > .view-header-title-container, .ebullientworks-reverse-view-header-actions .workspace-tabs .view-header > .view-header-title-container {
order: 1;
justify-content: flex-start;
}`,
    },
    "ebullientworks-floating-frontmatter": {
      general: `.ebullientworks-floating-frontmatter .markdown-rendered pre.frontmatter, .is-mobile .markdown-rendered pre.frontmatter {
float: right;
position: absolute;
right: 0.15em;
top: 0.65rem;
width: 2rem;
height: 2rem;
overflow: hidden;
border: none !important;
background-color: transparent;
}

.ebullientworks-floating-frontmatter .markdown-rendered pre.frontmatter code, .is-mobile .markdown-rendered pre.frontmatter code {
visibility: hidden;
}

.ebullientworks-floating-frontmatter .markdown-rendered pre.frontmatter .mod-failed, .is-mobile .markdown-rendered pre.frontmatter .mod-failed {
position: absolute;
}

.ebullientworks-floating-frontmatter .markdown-rendered pre.frontmatter .mod-failed .mod-error, .is-mobile .markdown-rendered pre.frontmatter .mod-failed .mod-error {
visibility: hidden;
}

.ebullientworks-floating-frontmatter .markdown-rendered pre.frontmatter .mod-failed:hover .mod-error, .is-mobile .markdown-rendered pre.frontmatter .mod-failed:hover .mod-error {
visibility: visible;
}

.ebullientworks-floating-frontmatter .markdown-rendered pre.frontmatter::before, .is-mobile .markdown-rendered pre.frontmatter::before {
content: "✧";
font-size: 20px;
color: var(--primary-accent-3);
float: right;
}

.ebullientworks-floating-frontmatter .markdown-rendered pre.frontmatter:not(:hover) > button.copy-code-button, .is-mobile .markdown-rendered pre.frontmatter:not(:hover) > button.copy-code-button {
display: none;
}

.ebullientworks-floating-frontmatter .markdown-rendered pre.frontmatter:hover, .is-mobile .markdown-rendered pre.frontmatter:hover {
border: 1px solid var(--background-modifier-border);
background-color: var(--background-secondary);
filter: drop-shadow(-0.1rem 0.1rem 0.1rem var(--background-secondary-alt));
width: 60%;
min-width: 200px;
height: unset;
z-index: 3;
}

.ebullientworks-floating-frontmatter .markdown-rendered pre.frontmatter:hover code, .is-mobile .markdown-rendered pre.frontmatter:hover code {
visibility: visible;
background-color: var(---background-secondary);
}

.ebullientworks-floating-frontmatter .markdown-rendered .metadata-container, .ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container, .is-mobile .markdown-rendered .metadata-container, .is-mobile .markdown-rendered .frontmatter-container {
float: right;
position: absolute;
right: 0.6rem;
top: 0;
width: 2rem;
height: 2rem;
overflow: hidden;
border: none;
background-color: transparent;
}

.ebullientworks-floating-frontmatter .markdown-rendered .metadata-container .metadata-properties-heading, .ebullientworks-floating-frontmatter .markdown-rendered .metadata-container .metadata-content, .ebullientworks-floating-frontmatter .markdown-rendered .metadata-container .frontmatter-container-header, .ebullientworks-floating-frontmatter .markdown-rendered .metadata-container .frontmatter-section, .ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container .metadata-properties-heading, .ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container .metadata-content, .ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container .frontmatter-container-header, .ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container .frontmatter-section, .is-mobile .markdown-rendered .metadata-container .metadata-properties-heading, .is-mobile .markdown-rendered .metadata-container .metadata-content, .is-mobile .markdown-rendered .metadata-container .frontmatter-container-header, .is-mobile .markdown-rendered .metadata-container .frontmatter-section, .is-mobile .markdown-rendered .frontmatter-container .metadata-properties-heading, .is-mobile .markdown-rendered .frontmatter-container .metadata-content, .is-mobile .markdown-rendered .frontmatter-container .frontmatter-container-header, .is-mobile .markdown-rendered .frontmatter-container .frontmatter-section {
visibility: hidden;
}

.ebullientworks-floating-frontmatter .markdown-rendered .metadata-container::before, .ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container::before, .is-mobile .markdown-rendered .metadata-container::before, .is-mobile .markdown-rendered .frontmatter-container::before {
content: "✧";
font-size: 20px;
color: var(--primary-accent-3);
float: right;
}

.ebullientworks-floating-frontmatter .markdown-rendered .metadata-container:hover .metadata-properties-heading, .ebullientworks-floating-frontmatter .markdown-rendered .metadata-container:hover .frontmatter-container-header, .ebullientworks-floating-frontmatter .markdown-rendered .metadata-container:hover .metadata-content, .ebullientworks-floating-frontmatter .markdown-rendered .metadata-container:hover .frontmatter-section, .ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container:hover .metadata-properties-heading, .ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container:hover .frontmatter-container-header, .ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container:hover .metadata-content, .ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container:hover .frontmatter-section, .is-mobile .markdown-rendered .metadata-container:hover .metadata-properties-heading, .is-mobile .markdown-rendered .metadata-container:hover .frontmatter-container-header, .is-mobile .markdown-rendered .metadata-container:hover .metadata-content, .is-mobile .markdown-rendered .metadata-container:hover .frontmatter-section, .is-mobile .markdown-rendered .frontmatter-container:hover .metadata-properties-heading, .is-mobile .markdown-rendered .frontmatter-container:hover .frontmatter-container-header, .is-mobile .markdown-rendered .frontmatter-container:hover .metadata-content, .is-mobile .markdown-rendered .frontmatter-container:hover .frontmatter-section {
visibility: visible;
}

.ebullientworks-floating-frontmatter .markdown-rendered .metadata-container:hover .frontmatter-collapse-indicator, .ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container:hover .frontmatter-collapse-indicator, .is-mobile .markdown-rendered .metadata-container:hover .frontmatter-collapse-indicator, .is-mobile .markdown-rendered .frontmatter-container:hover .frontmatter-collapse-indicator {
display: none;
}

.ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container:hover, .is-mobile .markdown-rendered .frontmatter-container:hover {
border: 1px solid var(--background-modifier-border);
background-color: var(--background-primary-alt);
filter: drop-shadow(-0.1rem 0.1rem 0.1rem var(--background-modifier-border));
width: 50%;
min-width: 200px;
height: unset;
z-index: 3;
}

.ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container:hover .frontmatter-container-header, .is-mobile .markdown-rendered .frontmatter-container:hover .frontmatter-container-header {
padding: var(--size-4-2) var(--size-4-2) 0 var(--size-4-2);
}

.ebullientworks-floating-frontmatter .markdown-rendered .frontmatter-container:hover .frontmatter-section, .is-mobile .markdown-rendered .frontmatter-container:hover .frontmatter-section {
padding: 0 var(--size-4-2) var(--size-2-1) var(--size-4-2);
}

.ebullientworks-floating-frontmatter .markdown-rendered .metadata-container:hover, .is-mobile .markdown-rendered .metadata-container:hover {
border: 1px solid var(--background-modifier-border);
background-color: var(--background-primary-alt);
filter: drop-shadow(-0.1rem 0.1rem 0.1rem var(--background-modifier-border));
width: 80%;
min-width: 200px;
height: unset;
z-index: 3;
}

.ebullientworks-floating-frontmatter .markdown-rendered .metadata-container:hover .metadata-property, .ebullientworks-floating-frontmatter .markdown-rendered .metadata-container:hover .metadata-property[data-property-key=tags], .is-mobile .markdown-rendered .metadata-container:hover .metadata-property, .is-mobile .markdown-rendered .metadata-container:hover .metadata-property[data-property-key=tags] {
--pill-background: var(--background-primary);
}`,
    },
    "ebullientworks-hide-embedded-heading": {
      general: `.ebullientworks-hide-embedded-heading .markdown-embed .markdown-embed-title, .ebullientworks-hide-embedded-heading .markdown-embed .mod-header {
display: none;
}

.ebullientworks-hide-embedded-heading .markdown-embed div.markdown-preview-section div.mod-header + div > h1[data-heading], .ebullientworks-hide-embedded-heading .markdown-embed div.markdown-preview-section div.mod-header + div > h2[data-heading], .ebullientworks-hide-embedded-heading .markdown-embed div.markdown-preview-section div.mod-header + div > h3[data-heading], .ebullientworks-hide-embedded-heading .markdown-embed div.markdown-preview-section div.mod-header + div > h4[data-heading], .ebullientworks-hide-embedded-heading .markdown-embed div.markdown-preview-section div.mod-header + div > h5[data-heading], .ebullientworks-hide-embedded-heading .markdown-embed div.markdown-preview-section div.mod-header + div > h6[data-heading] {
display: none;
}`,
    },
  },
};
