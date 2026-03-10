import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ebullientworks",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 344;
  --accent-l: 51%;
  --accent-s: 30%;
  --background-modifier-active-hover: rgba(168, 93, 113, 0.15);
  --background-modifier-border: #1b1b1b;
  --background-modifier-border-focus: #070707;
  --background-modifier-border-hover: black;
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #7a302f;
  --background-modifier-error-hover: #c24c4a;
  --background-modifier-error-rgb: 122,48,47;
  --background-modifier-form-field: #3f3f3f;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: #3f3f3f;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-info: #2c496e;
  --background-modifier-message: #3f3f3f;
  --background-modifier-success: #3a4d3e;
  --background-modifier-success-rgb: 58,77,62;
  --background-modifier-warning: #8d6e3b;
  --background-modifier-warning-hover: #c49a52;
  --background-primary-alt: #272727;
  --background-secondary: #2f2f2f;
  --background-secondary-alt: #212121;
  --bases-cards-cover-background: #272727;
  --bases-cards-shadow: 0 0 0 1px #1b1b1b;
  --bases-cards-shadow-hover: 0 0 0 1px black;
  --bases-embed-border-color: #1b1b1b;
  --bases-group-heading-property-color: #b8b8b8;
  --bases-table-border-color: #1b1b1b;
  --bases-table-cell-background-disabled: #272727;
  --bases-table-cell-background-selected: rgba(168, 93, 113, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #070707;
  --bases-table-cell-shadow-focus: 0 0 0 2px #594054;
  --bases-table-group-background: #272727;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075);
  --bases-table-header-color: #b8b8b8;
  --bases-table-row-background-hover: rgba(142, 103, 135, 0.2);
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075);
  --blockquote-border-color: #5c7a62;
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
  --blur-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: #7fa4ca;
  --callout-border-opacity: 0.4;
  --callout-border-width: 0 0.05rem 0 0.1rem;
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
  --callout-todo: 159,187,216;
  --callout-warning: 227,172,151;
  --canvas-card-label-color: #a0a0a0;
  --canvas-color-1: 237,166,165;
  --canvas-color-2: 227,172,151;
  --canvas-color-3: 236,201,134;
  --canvas-color-4: 173,188,176;
  --canvas-color-5: 158,190,188;
  --canvas-color-6: 198,178,195;
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
  --checkbox-question: #c49a52;
  --checkbox-review: #91a695;
  --checklist-done-color: #b8b8b8;
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
  --code-string: #adbcb0;
  --code-tag: #eda6a5;
  --code-value: #c6b2c3;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #a0a0a0;
  --collapse-icon-color-collapsed: #c6b2c3;
  --color-accent: rgb(168, 93, 113);
  --color-accent-1: rgb(183, 118, 139);
  --color-accent-2: rgb(196, 141, 160);
  --color-accent-hsl: 344, 30%, 51%;
  --color-base-00: #070707;
  --color-base-05: #1b1b1b;
  --color-base-10: #1e1e1e;
  --color-base-100: #cdcdcd;
  --color-base-20: #212121;
  --color-base-25: #272727;
  --color-base-30: #2f2f2f;
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
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --day-planner-progress-bg: #3a4d3e;
  --day-planner-progress-fg: #91a695;
  --divider-color: #070707;
  --divider-color-hover: #594054;
  --dropdown-background: #3f3f3f;
  --dropdown-background-hover: #8e6787;
  --ebw-alpha2: rgba(0, 0, 0, 0.2);
  --ebw-alpha4: rgba(0, 0, 0, 0.4);
  --ebw-calendar-month: #91a695;
  --ebw-calendar-year: #b399ae;
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
  --ebw-embed-border-color: #2f2f2f;
  --ebw-font-callout-title: "Architects Daughter";
  --ebw-font-monospace: "Fira Code", "Source Code Pro", Jetbrains Mono;
  --ebw-font-tags: "Architects Daughter";
  --ebw-font-text: "IBM Plex Sans", Helvetica Neue;
  --ebw-he-title-border: #070707;
  --ebw-header-font: "Architects Daughter";
  --ebw-header-font-caps-variant: normal;
  --ebw-header-modifier: 1.4;
  --ebw-link-hidden: #058080;
  --ebw-link-underline: #058080;
  --ebw-p-modifier: 1;
  --ebw-row-alt: rgba(0, 0, 0, 0.2);
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
  --embed-block-shadow-hover: 0 0 0 1px #1b1b1b, inset 0 0 0 1px #1b1b1b;
  --embed-border-left: 0.0625rem solid #2f2f2f;
  --embed-border-right: 0.0625rem solid #2f2f2f;
  --embed-border-start: 2px solid #594054;
  --embed-padding: 2px 8px;
  --file-header-font: '??', "IBM Plex Sans", Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-margins: 8px 32px;
  --flair-background: #3f3f3f;
  --flair-color: #cdcdcd;
  --font-interface: '??', "IBM Plex Sans", Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "IBM Plex Sans", Helvetica Neue;
  --font-mermaid: "Fira Code", "Source Code Pro", Jetbrains Mono;
  --font-monospace: '??', "Fira Code", "Source Code Pro", Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Fira Code", "Source Code Pro", Jetbrains Mono;
  --font-print: '??', '??', "IBM Plex Sans", Helvetica Neue, 'Arial';
  --font-text: '??', "IBM Plex Sans", Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "IBM Plex Sans", Helvetica Neue;
  --footnote-divider-color: #2f2f2f;
  --footnote-id-color: #b8b8b8;
  --footnote-id-color-no-occurrences: #a0a0a0;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075);
  --graph-line: #484848;
  --graph-node: #8e6787;
  --graph-node-attachment: #adbcb0;
  --graph-node-focused: #ecc986;
  --graph-node-tag: #91a695;
  --graph-node-unresolved: #b8b8b8;
  --graph-text: #cdcdcd;
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
  --h1-color: #e0b15e;
  --h1-font: "Architects Daughter";
  --h1-line-height: 1.5;
  --h1-size: 2em;
  --h1-variant: common-ligatures;
  --h1-weight: 500;
  --h2-color: #91a695;
  --h2-font: "Architects Daughter";
  --h2-line-height: 1.5;
  --h2-size: 1.8em;
  --h2-variant: common-ligatures;
  --h2-weight: 500;
  --h3-color: #41b0b0;
  --h3-font: "Architects Daughter";
  --h3-line-height: 1.5;
  --h3-size: 1.6em;
  --h3-variant: common-ligatures;
  --h3-weight: 500;
  --h4-color: #7fa4ca;
  --h4-font: "Architects Daughter";
  --h4-line-height: 1.5;
  --h4-size: 1.4em;
  --h4-variant: common-ligatures;
  --h4-weight: 500;
  --h5-color: #b399ae;
  --h5-font: "Architects Daughter";
  --h5-size: 1.2em;
  --h5-variant: common-ligatures;
  --h5-weight: 500;
  --h6-color: #d38d9f;
  --h6-font: "Architects Daughter";
  --h6-size: 1.2em;
  --h6-variant: common-ligatures;
  --h6-weight: 500;
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
  --headerFont: var(--font-text);
  --heading-formatting: #a0a0a0;
  --heading-spacing: 22.4px;
  --highlight: var(--text-highlight-bg);
  --hr-color: #1b1b1b;
  --icon-color: #b8b8b8;
  --icon-color-active: #c6b2c3;
  --icon-color-focused: #cdcdcd;
  --icon-color-hover: #b8b8b8;
  --indentation-guide: #2f2f2f;
  --indentation-guide-active: #3f3f3f;
  --inline-title-color: #e0b15e;
  --inline-title-font: "Architects Daughter";
  --inline-title-line-height: 1.5;
  --inline-title-size: 2em;
  --inline-title-variant: common-ligatures;
  --inline-title-weight: 500;
  --input-date-separator: #a0a0a0;
  --input-placeholder-color: #a0a0a0;
  --interactive-accent: #594054;
  --interactive-accent-hover: #8e6787;
  --interactive-accent-hsl: 344, 30%, 51%;
  --interactive-disabled: #3f3f3f;
  --interactive-hover: #8e6787;
  --interactive-normal: #3f3f3f;
  --interactive-toggle: #5c7a62;
  --italic-color: #deaab8;
  --light: var(--background-primary-alt);
  --lightgray: var(--background-secondary);
  --link-color: #cdcdcd;
  --link-color-hover: #74c6c5;
  --link-external-color: #cdcdcd;
  --link-external-color-hover: #74c6c5;
  --link-unresolved-color: #cdcdcd;
  --link-unresolved-decoration-color: #058080;
  --link-unresolved-decoration-style: dotted;
  --link-unresolved-opacity: 0.9;
  --list-marker-color: #a0a0a0;
  --list-marker-color-collapsed: #c6b2c3;
  --list-marker-color-hover: #b8b8b8;
  --menu-background: #2f2f2f;
  --menu-border-color: black;
  --metadata-border-color: #1b1b1b;
  --metadata-border-radius: 4px;
  --metadata-border-width: 1px;
  --metadata-divider-color: #2f2f2f;
  --metadata-divider-width: 1px;
  --metadata-gap: 0;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075);
  --metadata-input-font: '??', "IBM Plex Sans", Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #cdcdcd;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075);
  --metadata-label-font: '??', "IBM Plex Sans", Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #b8b8b8;
  --metadata-label-text-color-hover: #b8b8b8;
  --metadata-padding: 0;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px #070707;
  --metadata-property-box-shadow-hover: 0 0 0 1px black;
  --metadata-property-radius: 4px;
  --modal-border-color: #484848;
  --modifier-text: #fafafa;
  --modifier-text-accent: #f8f8f8;
  --nav-collapse-icon-color: #a0a0a0;
  --nav-collapse-icon-color-collapsed: #a0a0a0;
  --nav-heading-color: #cdcdcd;
  --nav-heading-color-collapsed: #a0a0a0;
  --nav-heading-color-collapsed-hover: #b8b8b8;
  --nav-heading-color-hover: #cdcdcd;
  --nav-item-background-active: rgba(255, 255, 255, 0.075);
  --nav-item-background-hover: rgba(255, 255, 255, 0.075);
  --nav-item-background-selected: rgba(168, 93, 113, 0.15);
  --nav-item-color: #b8b8b8;
  --nav-item-color-active: #cdcdcd;
  --nav-item-color-highlighted: #c6b2c3;
  --nav-item-color-hover: #cdcdcd;
  --nav-item-color-selected: #cdcdcd;
  --nav-tag-color: #a0a0a0;
  --nav-tag-color-active: #b8b8b8;
  --nav-tag-color-hover: #b8b8b8;
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
  --p-spacing: 16px;
  --pdf-shadow: 0 0 0 1px #1b1b1b;
  --pdf-thumbnail-shadow: 0 0 0 1px #1b1b1b;
  --pill-border-color: #1b1b1b;
  --pill-border-color-hover: black;
  --pill-color: #b8b8b8;
  --pill-color-hover: #cdcdcd;
  --pill-color-remove: #a0a0a0;
  --pill-color-remove-hover: #c6b2c3;
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
  --primary-accent-0: #e2d9e1;
  --primary-accent-1: #d7c9d5;
  --primary-accent-1-rgb: 215,201,213;
  --primary-accent-2: #c6b2c3;
  --primary-accent-3: #b399ae;
  --primary-accent-4: #8e6787;
  --primary-accent-4-rgb: 142,103,135;
  --primary-accent-5: #594054;
  --primary-accent-6: #392a37;
  --prompt-border-color: #484848;
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
  --raised-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
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
  --ribbon-background: #212121;
  --ribbon-background-collapsed: #212121;
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --secondary: var(--text-accent);
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
  --setting-items-background: #272727;
  --setting-items-border-color: #1b1b1b;
  --slider-thumb-border-color: black;
  --slider-track-background: #1b1b1b;
  --status-bar-background: #212121;
  --status-bar-border-color: #070707;
  --status-bar-text-color: #b8b8b8;
  --sync-avatar-color-1: #eda6a5;
  --sync-avatar-color-2: #e3ac97;
  --sync-avatar-color-3: #e0b15e;
  --sync-avatar-color-4: #adbcb0;
  --sync-avatar-color-5: #74c6c5;
  --sync-avatar-color-6: #9fbbd8;
  --sync-avatar-color-7: #c6b2c3;
  --sync-avatar-color-8: #deaab8;
  --tab-container-background: #2f2f2f;
  --tab-divider-color: black;
  --tab-outline-color: #070707;
  --tab-switcher-background: #2f2f2f;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f2f2f, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(168, 93, 113);
  --tab-text-color: #b8b8b8;
  --tab-text-color-active: #b8b8b8;
  --tab-text-color-focused: #cdcdcd;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #cdcdcd;
  --tab-text-color-focused-highlighted: #c6b2c3;
  --table-add-button-border-color: #1b1b1b;
  --table-background: rgba(0, 0, 0, 0.2);
  --table-border-color: #1b1b1b;
  --table-drag-handle-background-active: #594054;
  --table-drag-handle-color: #a0a0a0;
  --table-drag-handle-color-active: #fafafa;
  --table-header-background: #594054;
  --table-header-background-hover: #8e6787;
  --table-header-border-color: #1b1b1b;
  --table-header-color: #fafafa;
  --table-header-size: 0.933em;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.2);
  --table-row-background-hover: rgba(142, 103, 135, 0.2);
  --table-selection: rgba(168, 93, 113, 0.1);
  --table-selection-border-color: #594054;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: rgba(168, 93, 113, 0.15);
  --tag-border-color-hover: rgba(168, 93, 113, 0.15);
  --tag-color: #c6b2c3;
  --tag-color-hover: #c6b2c3;
  --tag-padding-x: 0;
  --tertiary: var(--text-accent-hover);
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
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #2f2f2f;
  --titlebar-background-focused: #212121;
  --titlebar-border-color: #1b1b1b;
  --titlebar-text-color: #b8b8b8;
  --titlebar-text-color-focused: #cdcdcd;
  --vault-profile-color: #cdcdcd;
  --vault-profile-color-hover: #cdcdcd;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(47, 47, 47);
  color: rgb(205, 205, 205);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(205, 205, 205);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(47, 47, 47);
  color: rgb(205, 205, 205);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(7, 7, 7);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(47, 47, 47);
  border-left-color: rgb(7, 7, 7);
  color: rgb(205, 205, 205);
}

body div#quartz-root {
  color: rgb(205, 205, 205);
}`,
    typography: `body .page article p > b, b {
  color: rgb(127, 164, 202);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(127, 164, 202) none 0px;
  text-decoration: rgb(127, 164, 202);
  text-decoration-color: rgb(127, 164, 202);
}

body .page article p > em, em {
  color: rgb(222, 170, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 170, 184) none 0px;
  text-decoration: rgb(222, 170, 184);
  text-decoration-color: rgb(222, 170, 184);
}

body .page article p > i, i {
  color: rgb(222, 170, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 170, 184) none 0px;
  text-decoration: rgb(222, 170, 184);
  text-decoration-color: rgb(222, 170, 184);
}

body .page article p > strong, strong {
  color: rgb(127, 164, 202);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(127, 164, 202) none 0px;
  text-decoration: rgb(127, 164, 202);
  text-decoration-color: rgb(127, 164, 202);
}

body .text-highlight {
  background-color: rgb(198, 178, 195);
  color: rgb(47, 47, 47);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body del {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration: line-through rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body p {
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(184, 184, 184) none 0px;
  text-decoration: rgb(184, 184, 184);
  text-decoration-color: rgb(184, 184, 184);
}`,
    links: `body a.external, footer a {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration: underline rgb(5, 128, 128);
  text-decoration-color: rgb(5, 128, 128);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration: underline rgb(5, 128, 128);
  text-decoration-color: rgb(5, 128, 128);
}

body a.internal.broken {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration: underline dotted rgb(5, 128, 128);
  text-decoration-color: rgb(5, 128, 128);
  text-decoration-style: dotted;
}`,
    lists: `body dd {
  color: rgb(205, 205, 205);
}

body dt {
  color: rgb(205, 205, 205);
}

body ol > li {
  color: rgb(205, 205, 205);
}

body ol.overflow {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

body ul > li {
  color: rgb(205, 205, 205);
}

body ul.overflow {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}

body blockquote {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

body table {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 181.844px;
}

body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.2);
}

body td {
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
  color: rgb(205, 205, 205);
}

body th {
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
  color: rgb(250, 250, 250);
}

body tr {
  background-color: rgb(89, 64, 84);
}`,
    code: `body code {
  border-bottom-color: rgb(159, 187, 216);
  border-left-color: rgb(159, 187, 216);
  border-right-color: rgb(159, 187, 216);
  border-top-color: rgb(159, 187, 216);
  color: rgb(159, 187, 216);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
  color: rgb(205, 205, 205);
}

body pre > code > [data-line] {
  border-left-color: rgb(224, 177, 94);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(224, 177, 94);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(224, 177, 94);
  border-left-color: rgb(224, 177, 94);
  border-right-color: rgb(224, 177, 94);
  border-top-color: rgb(224, 177, 94);
}

body pre > code, pre:has(> code) {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
}

body pre:has(> code) {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
}`,
    images: `body audio {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

body figcaption {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

body img {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

body video {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    embeds: `body .file-embed {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

body .footnotes {
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}

body .transclude {
  border-bottom-color: rgb(205, 205, 205);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(89, 64, 84);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .transclude-inner {
  border-bottom-color: rgb(205, 205, 205);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(89, 64, 84);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body input[type=checkbox] {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='!'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='*'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='-'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='/'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='>'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='?'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='I'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='S'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='b'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='c'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='d'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='f'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='i'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='k'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='l'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='p'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='u'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body li.task-list-item[data-task='w'] {
  color: rgb(205, 205, 205);
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(148, 189, 223);
  border-left-color: rgb(148, 189, 223);
  border-right-color: rgb(148, 189, 223);
  border-top-color: rgb(148, 189, 223);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout > .callout-content {
  background-color: rgb(30, 30, 30);
  padding-left: 8px;
  padding-right: 8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 199, 178, 195;
  background-color: rgba(199, 178, 195, 0.1);
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
}

body .callout[data-callout="bug"] {
  --callout-color: 180, 152, 175;
  background-color: rgba(180, 152, 175, 0.1);
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
}

body .callout[data-callout="danger"] {
  --callout-color: 230, 133, 132;
  background-color: rgba(230, 133, 132, 0.1);
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
}

body .callout[data-callout="example"] {
  --callout-color: 142, 103, 135;
  background-color: rgba(142, 103, 135, 0.1);
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
}

body .callout[data-callout="failure"] {
  --callout-color: 211, 141, 159;
  background-color: rgba(211, 141, 159, 0.1);
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
}

body .callout[data-callout="info"] {
  --callout-color: 111, 166, 211;
  background-color: rgba(111, 166, 211, 0.1);
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
}

body .callout[data-callout="note"] {
  --callout-color: 148, 189, 223;
  background-color: rgba(148, 189, 223, 0.1);
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
}

body .callout[data-callout="question"] {
  --callout-color: 89, 174, 170;
  background-color: rgba(89, 174, 170, 0.1);
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
}

body .callout[data-callout="quote"] {
  --callout-color: 53, 120, 175;
  background-color: rgba(53, 120, 175, 0.1);
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
}

body .callout[data-callout="success"] {
  --callout-color: 139, 167, 145;
  background-color: rgba(139, 167, 145, 0.1);
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
}

body .callout[data-callout="tip"] {
  --callout-color: 134, 196, 193;
  background-color: rgba(134, 196, 193, 0.1);
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
}

body .callout[data-callout="todo"] {
  --callout-color: 111, 166, 211;
  background-color: rgba(111, 166, 211, 0.1);
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
}

body .callout[data-callout="warning"] {
  --callout-color: 234, 175, 0;
  background-color: rgba(234, 175, 0, 0.1);
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
}`,
    search: `body .search > .search-button {
  background-color: rgb(63, 63, 63);
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(27, 27, 27);
  border-right-color: rgb(27, 27, 27);
  border-top-color: rgb(27, 27, 27);
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

body .search > .search-container > .search-space > * {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(205, 205, 205) none 0px;
  text-decoration: rgb(205, 205, 205);
  text-decoration-color: rgb(205, 205, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(205, 205, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(205, 205, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(205, 205, 205);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(205, 205, 205);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(168, 93, 113, 0.15);
  border-left-color: rgba(168, 93, 113, 0.15);
  border-right-color: rgba(168, 93, 113, 0.15);
  border-top-color: rgba(168, 93, 113, 0.15);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(198, 178, 195);
}

body h1 {
  color: rgb(224, 177, 94);
  font-family: "Architects Daughter";
}

body h2 {
  color: rgb(145, 166, 149);
  font-family: "Architects Daughter";
}

body h2.page-title, h2.page-title a {
  color: rgb(224, 177, 94);
  font-family: "Architects Daughter";
}

body h3 {
  color: rgb(65, 176, 176);
  font-family: "Architects Daughter";
}

body h4 {
  color: rgb(127, 164, 202);
  font-family: "Architects Daughter";
}

body h5 {
  color: rgb(179, 153, 174);
  font-family: "Architects Daughter";
}

body h6 {
  color: rgb(211, 141, 159);
  font-family: "Architects Daughter";
}

body hr {
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
}`,
    scrollbars: `body .callout {
  --callout-color: 148, 189, 223;
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
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(184, 184, 184);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(184, 184, 184);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(184, 184, 184);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}`,
    footer: `body footer {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

body li.section-li > .section .meta {
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

body ul.section-ul {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

body .darkmode svg {
  color: rgb(184, 184, 184);
  stroke: rgb(184, 184, 184);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

body .breadcrumb-element p {
  color: rgb(160, 160, 160);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(205, 205, 205);
}

body .metadata {
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
  color: rgb(184, 184, 184);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  margin-bottom: 0px;
  margin-left: 25px;
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body .navigation-progress {
  background-color: rgb(33, 33, 33);
}

body .page-header h2.page-title {
  color: rgb(205, 205, 205);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(205, 205, 205);
  text-decoration: underline dotted rgb(205, 205, 205);
}

body details {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

body input[type=text] {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(159, 187, 216);
  border-left-color: rgb(159, 187, 216);
  border-right-color: rgb(159, 187, 216);
  border-top-color: rgb(159, 187, 216);
  color: rgb(159, 187, 216);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

body sub {
  color: rgb(205, 205, 205);
}

body summary {
  color: rgb(205, 205, 205);
}

body sup {
  color: rgb(205, 205, 205);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 344;
  --accent-l: 51%;
  --accent-s: 30%;
  --background-modifier-active-hover: rgba(168, 93, 113, 0.15);
  --background-modifier-border: #cdcdcd;
  --background-modifier-border-focus: #b8b8b8;
  --background-modifier-border-hover: #dbdbdb;
  --background-modifier-error: #c24c4a;
  --background-modifier-error-hover: #e68584;
  --background-modifier-error-rgb: 194,76,74;
  --background-modifier-form-field: #f8f8f8;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
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
  --bases-cards-background: #f8f8f8;
  --bases-cards-cover-background: #f1f1f1;
  --bases-cards-shadow: 0 0 0 1px #cdcdcd;
  --bases-cards-shadow-hover: 0 0 0 1px #dbdbdb;
  --bases-embed-border-color: #cdcdcd;
  --bases-group-heading-property-color: #5d5d5d;
  --bases-table-border-color: #cdcdcd;
  --bases-table-cell-background-active: #f8f8f8;
  --bases-table-cell-background-disabled: #f1f1f1;
  --bases-table-cell-background-selected: rgba(168, 93, 113, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #b8b8b8;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8e6787;
  --bases-table-group-background: #f1f1f1;
  --bases-table-header-background: #f8f8f8;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075);
  --bases-table-header-color: #5d5d5d;
  --bases-table-row-background-hover: rgba(142, 103, 135, 0.05);
  --bases-table-summary-background: #f8f8f8;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075);
  --blockquote-border-color: #adbcb0;
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
  --blur-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: #4575ae;
  --callout-border-opacity: 0.4;
  --callout-border-width: 0 0.05rem 0 0.1rem;
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
  --callout-todo: 69,117,174;
  --callout-warning: 157,101,83;
  --canvas-background: #f8f8f8;
  --canvas-card-label-color: #a0a0a0;
  --canvas-color-1: 194,76,74;
  --canvas-color-2: 157,101,83;
  --canvas-color-3: 196,154,82;
  --canvas-color-4: 92,122,98;
  --canvas-color-5: 62,125,121;
  --canvas-color-6: 142,103,135;
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
  --checkbox-review: #91a695;
  --checklist-done-color: #5d5d5d;
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
  --code-string: #5c7a62;
  --code-tag: #c24c4a;
  --code-value: #8e6787;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #a0a0a0;
  --collapse-icon-color-collapsed: #8e6787;
  --color-accent: rgb(168, 93, 113);
  --color-accent-1: rgb(175, 106, 125);
  --color-accent-2: rgb(183, 118, 139);
  --color-accent-hsl: 344, 30%, 51%;
  --color-base-00: #fafafa;
  --color-base-05: #f8f8f8;
  --color-base-10: #f5f5f5;
  --color-base-100: #212121;
  --color-base-20: #f1f1f1;
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
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --day-planner-progress-bg: #f8f8f8;
  --day-planner-progress-fg: #c5d0c8;
  --divider-color: #b8b8b8;
  --divider-color-hover: #8e6787;
  --dropdown-background: #f1f1f1;
  --dropdown-background-hover: #d7c9d5;
  --ebw-calendar-month: #5c7a62;
  --ebw-calendar-year: #8e6787;
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
  --ebw-embed-border-color: #d7c9d5;
  --ebw-font-callout-title: "Architects Daughter";
  --ebw-font-monospace: "Fira Code", "Source Code Pro", Jetbrains Mono;
  --ebw-font-tags: "Architects Daughter";
  --ebw-font-text: "IBM Plex Sans", Helvetica Neue;
  --ebw-he-title-border: #737373;
  --ebw-header-font: "Architects Daughter";
  --ebw-header-font-caps-variant: normal;
  --ebw-header-modifier: 1.4;
  --ebw-link-hidden: #74c6c5;
  --ebw-link-underline: #41b0b0;
  --ebw-p-modifier: 1;
  --ebw-row-alt: rgba(0, 0, 0, 0.05);
  --ebw-row-alt-hover: rgba(142, 103, 135, 0.05);
  --ebw-strong-em: #c49a52;
  --ebw-tab-title-active-bg: #5c7a62;
  --ebw-tab-title-active-fg: white;
  --ebw-tab-title-active-focused-bg: #8e6787;
  --ebw-tab-title-inactive-bg: #737373;
  --ebw-table-header-alt: rgba(142, 103, 135, 0.4);
  --ebw-today-hover: #484848;
  --ebw-today-text: #8e6787;
  --embed-block-shadow-hover: 0 0 0 1px #cdcdcd, inset 0 0 0 1px #cdcdcd;
  --embed-border-left: 0.0625rem solid #d7c9d5;
  --embed-border-right: 0.0625rem solid #d7c9d5;
  --embed-border-start: 2px solid #8e6787;
  --embed-padding: 2px 8px;
  --file-header-background: #f8f8f8;
  --file-header-background-focused: #f8f8f8;
  --file-header-font: '??', "IBM Plex Sans", Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-margins: 8px 32px;
  --flair-background: #f1f1f1;
  --flair-color: #484848;
  --font-interface: '??', "IBM Plex Sans", Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "IBM Plex Sans", Helvetica Neue;
  --font-mermaid: "Fira Code", "Source Code Pro", Jetbrains Mono;
  --font-monospace: '??', "Fira Code", "Source Code Pro", Jetbrains Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Fira Code", "Source Code Pro", Jetbrains Mono;
  --font-print: '??', '??', "IBM Plex Sans", Helvetica Neue, 'Arial';
  --font-text: '??', "IBM Plex Sans", Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "IBM Plex Sans", Helvetica Neue;
  --footnote-divider-color: #e3e3e3;
  --footnote-id-color: #5d5d5d;
  --footnote-id-color-no-occurrences: #a0a0a0;
  --footnote-input-background-active: rgba(0, 0, 0, 0.075);
  --graph-line: #cdcdcd;
  --graph-node: #c6b2c3;
  --graph-node-attachment: #adbcb0;
  --graph-node-focused: #ecc986;
  --graph-node-tag: #91a695;
  --graph-node-unresolved: #b8b8b8;
  --graph-text: #484848;
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
  --h1-color: #c49a52;
  --h1-font: "Architects Daughter";
  --h1-line-height: 1.5;
  --h1-size: 2em;
  --h1-variant: common-ligatures;
  --h1-weight: 500;
  --h2-color: #5c7a62;
  --h2-font: "Architects Daughter";
  --h2-line-height: 1.5;
  --h2-size: 1.8em;
  --h2-variant: common-ligatures;
  --h2-weight: 500;
  --h3-color: #41b0b0;
  --h3-font: "Architects Daughter";
  --h3-line-height: 1.5;
  --h3-size: 1.6em;
  --h3-variant: common-ligatures;
  --h3-weight: 500;
  --h4-color: #4575ae;
  --h4-font: "Architects Daughter";
  --h4-line-height: 1.5;
  --h4-size: 1.4em;
  --h4-variant: common-ligatures;
  --h4-weight: 500;
  --h5-color: #8e6787;
  --h5-font: "Architects Daughter";
  --h5-size: 1.2em;
  --h5-variant: common-ligatures;
  --h5-weight: 500;
  --h6-color: #a75c70;
  --h6-font: "Architects Daughter";
  --h6-size: 1.2em;
  --h6-variant: common-ligatures;
  --h6-weight: 500;
  --he-text-on-accent-active: #f1f1f1;
  --he-text-on-accent-inactive: #484848;
  --he-title-bar-active-bg: #91a695;
  --he-title-bar-active-fg: white;
  --he-title-bar-active-pinned-bg: #b399ae;
  --he-title-bar-height: 22px;
  --he-title-bar-inactive-bg: #a0a0a0;
  --he-title-bar-inactive-fg: #f1f1f1;
  --he-title-bar-inactive-pinned-bg: #a0a0a0;
  --he-view-header-height: 22px;
  --headerFont: var(--font-text);
  --heading-formatting: #a0a0a0;
  --heading-spacing: 22.4px;
  --highlight: var(--text-highlight-bg);
  --hr-color: #cdcdcd;
  --icon-color: #5d5d5d;
  --icon-color-active: #8e6787;
  --icon-color-focused: #484848;
  --icon-color-hover: #5d5d5d;
  --inline-title-color: #c49a52;
  --inline-title-font: "Architects Daughter";
  --inline-title-line-height: 1.5;
  --inline-title-size: 2em;
  --inline-title-variant: common-ligatures;
  --inline-title-weight: 500;
  --input-date-separator: #a0a0a0;
  --input-placeholder-color: #a0a0a0;
  --interactive-accent: #8e6787;
  --interactive-accent-hover: #b399ae;
  --interactive-accent-hsl: 344, 30%, 51%;
  --interactive-disabled: #e3e3e3;
  --interactive-hover: #d7c9d5;
  --interactive-normal: #f1f1f1;
  --interactive-toggle: #91a695;
  --italic-color: #a75c70;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #737373;
  --link-color-hover: #058080;
  --link-external-color: #737373;
  --link-external-color-hover: #058080;
  --link-unresolved-color: #737373;
  --link-unresolved-decoration-color: #41b0b0;
  --link-unresolved-decoration-style: dotted;
  --link-unresolved-opacity: 0.9;
  --list-marker-color: #a0a0a0;
  --list-marker-color-collapsed: #8e6787;
  --list-marker-color-hover: #5d5d5d;
  --menu-background: #e3e3e3;
  --menu-border-color: #dbdbdb;
  --metadata-border-color: #cdcdcd;
  --metadata-border-radius: 4px;
  --metadata-border-width: 1px;
  --metadata-divider-color: #e3e3e3;
  --metadata-divider-width: 1px;
  --metadata-gap: 0;
  --metadata-input-background-active: rgba(0, 0, 0, 0.075);
  --metadata-input-font: '??', "IBM Plex Sans", Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #484848;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075);
  --metadata-label-font: '??', "IBM Plex Sans", Helvetica Neue, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #5d5d5d;
  --metadata-label-text-color-hover: #5d5d5d;
  --metadata-padding: 0;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px #b8b8b8;
  --metadata-property-box-shadow-hover: 0 0 0 1px #dbdbdb;
  --metadata-property-radius: 4px;
  --modal-background: #f8f8f8;
  --modal-border-color: #b8b8b8;
  --modifier-text: white;
  --modifier-text-accent: #f8f8f8;
  --nav-collapse-icon-color: #a0a0a0;
  --nav-collapse-icon-color-collapsed: #a0a0a0;
  --nav-heading-color: #484848;
  --nav-heading-color-collapsed: #a0a0a0;
  --nav-heading-color-collapsed-hover: #5d5d5d;
  --nav-heading-color-hover: #484848;
  --nav-item-background-active: rgba(0, 0, 0, 0.075);
  --nav-item-background-hover: rgba(0, 0, 0, 0.075);
  --nav-item-background-selected: rgba(168, 93, 113, 0.15);
  --nav-item-color: #5d5d5d;
  --nav-item-color-active: #484848;
  --nav-item-color-highlighted: #8e6787;
  --nav-item-color-hover: #484848;
  --nav-item-color-selected: #484848;
  --nav-tag-color: #a0a0a0;
  --nav-tag-color-active: #5d5d5d;
  --nav-tag-color-hover: #5d5d5d;
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
  --p-spacing: 16px;
  --pdf-background: #f8f8f8;
  --pdf-page-background: #f8f8f8;
  --pdf-sidebar-background: #f8f8f8;
  --pill-border-color: #cdcdcd;
  --pill-border-color-hover: #dbdbdb;
  --pill-color: #5d5d5d;
  --pill-color-hover: #484848;
  --pill-color-remove: #a0a0a0;
  --pill-color-remove-hover: #8e6787;
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
  --primary-accent-0: #e2d9e1;
  --primary-accent-1: #d7c9d5;
  --primary-accent-1-rgb: 215,201,213;
  --primary-accent-2: #c6b2c3;
  --primary-accent-3: #b399ae;
  --primary-accent-4: #8e6787;
  --primary-accent-4-rgb: 142,103,135;
  --primary-accent-5: #594054;
  --primary-accent-6: #392a37;
  --prompt-background: #f8f8f8;
  --prompt-border-color: #b8b8b8;
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
  --raised-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
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
  --ribbon-background: #ebebeb;
  --ribbon-background-collapsed: #ebebeb;
  --search-clear-button-color: #5d5d5d;
  --search-icon-color: #5d5d5d;
  --search-result-background: #f8f8f8;
  --secondary: var(--text-accent);
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
  --setting-items-background: #f1f1f1;
  --setting-items-border-color: #cdcdcd;
  --show-whitespace-color: #dbdbdb;
  --slider-thumb-border-color: #dbdbdb;
  --slider-track-background: #cdcdcd;
  --status-bar-background: #ebebeb;
  --status-bar-border-color: #b8b8b8;
  --status-bar-text-color: #5d5d5d;
  --suggestion-background: #f8f8f8;
  --sync-avatar-color-1: #c24c4a;
  --sync-avatar-color-2: #9d6553;
  --sync-avatar-color-3: #c49a52;
  --sync-avatar-color-4: #5c7a62;
  --sync-avatar-color-5: #058080;
  --sync-avatar-color-6: #4575ae;
  --sync-avatar-color-7: #8e6787;
  --sync-avatar-color-8: #a75c70;
  --tab-background-active: #f8f8f8;
  --tab-container-background: #e3e3e3;
  --tab-divider-color: #dbdbdb;
  --tab-outline-color: #b8b8b8;
  --tab-switcher-background: #e3e3e3;
  --tab-switcher-menubar-background: linear-gradient(to top, #e3e3e3, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(168, 93, 113);
  --tab-text-color: #5d5d5d;
  --tab-text-color-active: #5d5d5d;
  --tab-text-color-focused: #484848;
  --tab-text-color-focused-active: #5d5d5d;
  --tab-text-color-focused-active-current: #484848;
  --tab-text-color-focused-highlighted: #8e6787;
  --table-add-button-border-color: #cdcdcd;
  --table-background: rgba(0, 0, 0, 0.05);
  --table-border-color: #cdcdcd;
  --table-drag-handle-background-active: #8e6787;
  --table-drag-handle-color: #a0a0a0;
  --table-drag-handle-color-active: #fafafa;
  --table-header-background: #d7c9d5;
  --table-header-background-hover: rgba(142, 103, 135, 0.4);
  --table-header-border-color: #b399ae;
  --table-header-color: #2f2f2f;
  --table-header-size: 0.933em;
  --table-header-weight: 600;
  --table-row-alt-background-hover: rgba(142, 103, 135, 0.05);
  --table-row-background-hover: rgba(142, 103, 135, 0.05);
  --table-selection: rgba(168, 93, 113, 0.1);
  --table-selection-border-color: #8e6787;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-border-color: rgba(168, 93, 113, 0.15);
  --tag-border-color-hover: rgba(168, 93, 113, 0.15);
  --tag-color: #8e6787;
  --tag-color-hover: #8e6787;
  --tag-padding-x: 0;
  --tertiary: var(--text-accent-hover);
  --text-accent: #8e6787;
  --text-accent-hover: #594054;
  --text-error: #c24c4a;
  --text-faint: #a0a0a0;
  --text-highlight-bg: rgba(142, 103, 135, 0.2);
  --text-highlight-bg-rgb: 142,103,135;
  --text-highlight-fg: #2f2f2f;
  --text-muted: #5d5d5d;
  --text-normal: #484848;
  --text-on-accent: #fafafa;
  --text-selection: rgba(92, 122, 98, 0.2);
  --text-success: #5c7a62;
  --text-warning: #9d6553;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #e3e3e3;
  --titlebar-background-focused: #ebebeb;
  --titlebar-border-color: #cdcdcd;
  --titlebar-text-color: #5d5d5d;
  --titlebar-text-color-focused: #484848;
  --vault-profile-color: #484848;
  --vault-profile-color-hover: #484848;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(227, 227, 227);
  color: rgb(72, 72, 72);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(227, 227, 227);
  color: rgb(72, 72, 72);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(184, 184, 184);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(227, 227, 227);
  border-left-color: rgb(184, 184, 184);
  color: rgb(72, 72, 72);
}

body div#quartz-root {
  background-color: rgb(248, 248, 248);
  color: rgb(72, 72, 72);
}`,
    typography: `body .page article p > b, b {
  color: rgb(69, 117, 174);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(69, 117, 174) none 0px;
  text-decoration: rgb(69, 117, 174);
  text-decoration-color: rgb(69, 117, 174);
}

body .page article p > em, em {
  color: rgb(167, 92, 112);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(167, 92, 112) none 0px;
  text-decoration: rgb(167, 92, 112);
  text-decoration-color: rgb(167, 92, 112);
}

body .page article p > i, i {
  color: rgb(167, 92, 112);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(167, 92, 112) none 0px;
  text-decoration: rgb(167, 92, 112);
  text-decoration-color: rgb(167, 92, 112);
}

body .page article p > strong, strong {
  color: rgb(69, 117, 174);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(69, 117, 174) none 0px;
  text-decoration: rgb(69, 117, 174);
  text-decoration-color: rgb(69, 117, 174);
}

body .text-highlight {
  background-color: rgba(142, 103, 135, 0.2);
  color: rgb(47, 47, 47);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body del {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(72, 72, 72) none 0px;
  text-decoration: line-through rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body p {
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 93, 93) none 0px;
  text-decoration: rgb(93, 93, 93);
  text-decoration-color: rgb(93, 93, 93);
}`,
    links: `body a.external, footer a {
  color: rgb(115, 115, 115);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: underline rgb(65, 176, 176);
  text-decoration-color: rgb(65, 176, 176);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(115, 115, 115);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: underline rgb(65, 176, 176);
  text-decoration-color: rgb(65, 176, 176);
}

body a.internal.broken {
  color: rgb(115, 115, 115);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: underline dotted rgb(65, 176, 176);
  text-decoration-color: rgb(65, 176, 176);
  text-decoration-style: dotted;
}`,
    lists: `body dd {
  color: rgb(72, 72, 72);
}

body dt {
  color: rgb(72, 72, 72);
}

body ol > li {
  color: rgb(72, 72, 72);
}

body ol.overflow {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

body ul > li {
  color: rgb(72, 72, 72);
}

body ul.overflow {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}

body blockquote {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

body table {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 181.844px;
}

body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

body td {
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(72, 72, 72);
}

body th {
  border-bottom-color: rgb(179, 153, 174);
  border-left-color: rgb(179, 153, 174);
  border-right-color: rgb(179, 153, 174);
  border-top-color: rgb(179, 153, 174);
  color: rgb(47, 47, 47);
}

body tr {
  background-color: rgb(215, 201, 213);
}`,
    code: `body code {
  border-bottom-color: rgb(69, 117, 174);
  border-left-color: rgb(69, 117, 174);
  border-right-color: rgb(69, 117, 174);
  border-top-color: rgb(69, 117, 174);
  color: rgb(69, 117, 174);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(241, 241, 241);
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(241, 241, 241);
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(72, 72, 72);
}

body pre > code > [data-line] {
  border-left-color: rgb(196, 154, 82);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(196, 154, 82);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(196, 154, 82);
  border-left-color: rgb(196, 154, 82);
  border-right-color: rgb(196, 154, 82);
  border-top-color: rgb(196, 154, 82);
}

body pre > code, pre:has(> code) {
  background-color: rgb(241, 241, 241);
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}

body pre:has(> code) {
  background-color: rgb(241, 241, 241);
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
}`,
    images: `body audio {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

body figcaption {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

body img {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

body video {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}`,
    embeds: `body .file-embed {
  background-color: rgb(241, 241, 241);
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
}

body .footnotes {
  border-top-color: rgb(72, 72, 72);
  color: rgb(72, 72, 72);
}

body .transclude {
  border-bottom-color: rgb(72, 72, 72);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(142, 103, 135);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .transclude-inner {
  border-bottom-color: rgb(72, 72, 72);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(142, 103, 135);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body input[type=checkbox] {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='!'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='*'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='-'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='/'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='>'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='?'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='I'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='S'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='b'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='c'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='d'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='f'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='i'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='k'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='l'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='p'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='u'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body li.task-list-item[data-task='w'] {
  color: rgb(72, 72, 72);
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(33, 75, 109);
  border-left-color: rgb(33, 75, 109);
  border-right-color: rgb(33, 75, 109);
  border-top-color: rgb(33, 75, 109);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout > .callout-content {
  background-color: rgb(248, 248, 248);
  padding-left: 8px;
  padding-right: 8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 88, 64, 84;
  background-color: rgba(88, 64, 84, 0.1);
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
}

body .callout[data-callout="bug"] {
  --callout-color: 180, 152, 175;
  background-color: rgba(180, 152, 175, 0.1);
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
}

body .callout[data-callout="danger"] {
  --callout-color: 167, 92, 112;
  background-color: rgba(167, 92, 112, 0.1);
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
}

body .callout[data-callout="example"] {
  --callout-color: 142, 103, 135;
  background-color: rgba(142, 103, 135, 0.1);
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
}

body .callout[data-callout="failure"] {
  --callout-color: 211, 141, 159;
  background-color: rgba(211, 141, 159, 0.1);
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
}

body .callout[data-callout="info"] {
  --callout-color: 53, 119, 174;
  background-color: rgba(53, 119, 174, 0.1);
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
}

body .callout[data-callout="note"] {
  --callout-color: 33, 75, 109;
  background-color: rgba(33, 75, 109, 0.1);
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
}

body .callout[data-callout="question"] {
  --callout-color: 89, 174, 170;
  background-color: rgba(89, 174, 170, 0.1);
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
}

body .callout[data-callout="quote"] {
  --callout-color: 53, 120, 175;
  background-color: rgba(53, 120, 175, 0.1);
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
}

body .callout[data-callout="success"] {
  --callout-color: 92, 122, 99;
  background-color: rgba(92, 122, 99, 0.1);
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
}

body .callout[data-callout="tip"] {
  --callout-color: 61, 126, 123;
  background-color: rgba(61, 126, 123, 0.1);
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
}

body .callout[data-callout="todo"] {
  --callout-color: 53, 119, 174;
  background-color: rgba(53, 119, 174, 0.1);
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
}

body .callout[data-callout="warning"] {
  --callout-color: 234, 175, 0;
  background-color: rgba(234, 175, 0, 0.1);
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
}`,
    search: `body .search > .search-button {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(205, 205, 205);
  border-left-color: rgb(205, 205, 205);
  border-right-color: rgb(205, 205, 205);
  border-top-color: rgb(205, 205, 205);
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

body .search > .search-container > .search-space > * {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(72, 72, 72) none 0px;
  text-decoration: rgb(72, 72, 72);
  text-decoration-color: rgb(72, 72, 72);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(72, 72, 72);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(72, 72, 72);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(72, 72, 72);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(227, 227, 227);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  color: rgb(72, 72, 72);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(72, 72, 72);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(168, 93, 113, 0.15);
  border-left-color: rgba(168, 93, 113, 0.15);
  border-right-color: rgba(168, 93, 113, 0.15);
  border-top-color: rgba(168, 93, 113, 0.15);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(142, 103, 135);
}

body h1 {
  color: rgb(196, 154, 82);
  font-family: "Architects Daughter";
}

body h2 {
  color: rgb(92, 122, 98);
  font-family: "Architects Daughter";
}

body h2.page-title, h2.page-title a {
  color: rgb(196, 154, 82);
  font-family: "Architects Daughter";
}

body h3 {
  color: rgb(65, 176, 176);
  font-family: "Architects Daughter";
}

body h4 {
  color: rgb(69, 117, 174);
  font-family: "Architects Daughter";
}

body h5 {
  color: rgb(142, 103, 135);
  font-family: "Architects Daughter";
}

body h6 {
  color: rgb(167, 92, 112);
  font-family: "Architects Daughter";
}

body hr {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
}`,
    scrollbars: `body .callout {
  --callout-color: 33, 75, 109;
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
}

body ::-webkit-scrollbar {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}

body ::-webkit-scrollbar-corner {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}

body ::-webkit-scrollbar-track {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(93, 93, 93);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(93, 93, 93);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(93, 93, 93);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  color: rgb(72, 72, 72);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: rgb(93, 93, 93);
}`,
    footer: `body footer {
  background-color: rgb(235, 235, 235);
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(93, 93, 93);
  text-decoration: rgb(93, 93, 93);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  color: rgb(72, 72, 72);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(93, 93, 93);
  text-decoration: rgb(93, 93, 93);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

body li.section-li > .section .meta {
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(93, 93, 93);
  text-decoration: rgb(93, 93, 93);
}

body ul.section-ul {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: rgb(93, 93, 93);
}

body .darkmode svg {
  color: rgb(93, 93, 93);
  stroke: rgb(93, 93, 93);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: rgb(93, 93, 93);
}

body .breadcrumb-element p {
  color: rgb(160, 160, 160);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
  color: rgb(72, 72, 72);
}

body .metadata {
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
  color: rgb(93, 93, 93);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  margin-bottom: 0px;
  margin-left: 25px;
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: rgb(93, 93, 93);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body .navigation-progress {
  background-color: rgb(235, 235, 235);
}

body .page-header h2.page-title {
  color: rgb(72, 72, 72);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(72, 72, 72);
  text-decoration: underline dotted rgb(72, 72, 72);
}

body details {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

body input[type=text] {
  border-bottom-color: rgb(93, 93, 93);
  border-left-color: rgb(93, 93, 93);
  border-right-color: rgb(93, 93, 93);
  border-top-color: rgb(93, 93, 93);
  color: rgb(93, 93, 93);
  font-family: "??", "IBM Plex Sans", "Helvetica Neue", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(235, 235, 235);
  border-bottom-color: rgb(69, 117, 174);
  border-left-color: rgb(69, 117, 174);
  border-right-color: rgb(69, 117, 174);
  border-top-color: rgb(69, 117, 174);
  color: rgb(69, 117, 174);
  font-family: "??", "Fira Code", "Source Code Pro", "Jetbrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(72, 72, 72);
  border-left-color: rgb(72, 72, 72);
  border-right-color: rgb(72, 72, 72);
  border-top-color: rgb(72, 72, 72);
}

body sub {
  color: rgb(72, 72, 72);
}

body summary {
  color: rgb(72, 72, 72);
}

body sup {
  color: rgb(72, 72, 72);
}`,
  },
};
