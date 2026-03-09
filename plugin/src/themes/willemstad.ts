import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "willemstad",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["crimson-pro", "dm-mono", "dm-sans", "manrope", "icons/remixicon"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --PComm001-col-today: oklch(40.14% 0.0638 202.51deg);
  --PComm001-col-year: oklch(40.14% 0.0638 202.51deg);
  --PComm002-sp-maxheight: 33vh;
  --PComm002-wp-maxheight: 33vh;
  --PComm007-toolbar-justification: left;
  --PComm007-toolbar-title-justification: 0 auto 0 0;
  --account-scrollbar-border: 2px;
  --account-scrollbar-size: 8px;
  --advanced-tables-helper-size: 28px;
  --alh-ext-length: max(32px 32px, 50vw - 350px);
  --aside-float: right;
  --aside-infobox-float: right;
  --aside-margin-left: 0.75rem;
  --aside-margin-right: 0;
  --aside-padding: 12px;
  --aside-text-align: left;
  --aspect-ratio-bw-iframe: auto 16/9;
  --background-modifier-active-hover: oklch(from oklch(40.14% 0.0638 202.51deg) l c h / 10%);
  --background-modifier-border: oklch(0.3 0 0);
  --background-modifier-border-focus: oklch(0.48 0 0);
  --background-modifier-border-hover: oklch(0.38 0 0);
  --background-modifier-box-shadow: none;
  --background-modifier-error-hover: oklch(from #fb464c calc(l - 0.1) c calc(h + 4));
  --background-modifier-form-field: oklch(0.15 0 0);
  --background-modifier-form-field-hover: oklch(0.15 0 0);
  --background-modifier-message: rgb(0 0 0 / 80%);
  --background-primary: oklch(0.13 0 0);
  --background-primary-alt: oklch(0.17 0 0);
  --background-secondary: oklch(0.19 0 0);
  --background-secondary-alt: oklch(0.21 0 0);
  --bases-cards-background: oklch(0.13 0 0);
  --bases-cards-cover-background: oklch(0.17 0 0);
  --bases-cards-radius: 6px;
  --bases-cards-shadow: 0 0 0 1px oklch(0.3 0 0);
  --bases-cards-shadow-hover: 0 0 0 1px oklch(0.38 0 0);
  --bases-embed-border-color: oklch(0.3 0 0);
  --bases-embed-border-radius: 3px;
  --bases-group-heading-property-color: oklch(0.68 0 0);
  --bases-table-border-color: oklch(0.3 0 0);
  --bases-table-cell-background-active: oklch(0.13 0 0);
  --bases-table-cell-background-disabled: oklch(0.17 0 0);
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(0.48 0 0);
  --bases-table-cell-shadow-focus: 0 0 0 2px oklch(40.14% 0.0638 202.51deg);
  --bases-table-container-border-radius: 3px;
  --bases-table-group-background: oklch(0.17 0 0);
  --bases-table-header-background: oklch(0.13 0 0);
  --bases-table-header-color: oklch(0.68 0 0);
  --bases-table-summary-background: oklch(0.13 0 0);
  --blockquote-background-color: oklch(0.17 0 0);
  --blockquote-border-color: oklch(0.21 0 0);
  --blockquote-border-thickness: 4px;
  --blur-0: blur(0.5px);
  --blur-1: blur(1px);
  --blur-2: blur(2px);
  --blur-4: blur(4px);
  --blur-8: blur(8px);
  --blur-background: color-mix(in srgb, oklch(0.19 0 0) 65%, transparent) linear-gradient(oklch(0.19 0 0), color-mix(in srgb, oklch(0.19 0 0) 65%, transparent));
  --border-scrollbar-non-native: 2px;
  --brightness-25: brightness(25%);
  --brightness-50: brightness(50%);
  --brightness-75: brightness(75%);
  --button-radius: 3px;
  --callout-blend-mode: normal;
  --callout-border-base-width: 0px;
  --callout-border-left-extra: 5px;
  --callout-border-left-width: 5px;
  --callout-border-other-width: 0px;
  --callout-columns-margin-top: 0.75em;
  --callout-gap: 0.5em;
  --callout-radius: 3px;
  --callout-title-gap: 0.75em;
  --canvas-background: oklch(0.13 0 0);
  --canvas-card-label-color: oklch(0.48 0 0);
  --canvas-controls-radius: 3px;
  --canvas-dot-pattern: oklch(0.24 0 0);
  --canvas-dot-size: 0.7;
  --canvas-group-font-size: 1.5em;
  --canvas-node-font-size: 1em;
  --caret-color: oklch(0.98 0 0);
  --ch-color-base-d-c-00: 0;
  --ch-color-base-d-c-00-set: 0;
  --ch-color-base-d-c-05: 0;
  --ch-color-base-d-c-05-set: 0;
  --ch-color-base-d-c-10: 0;
  --ch-color-base-d-c-10-set: 0;
  --ch-color-base-d-c-100: 0;
  --ch-color-base-d-c-100-set: 0;
  --ch-color-base-d-c-15: 0;
  --ch-color-base-d-c-15-set: 0;
  --ch-color-base-d-c-20: 0;
  --ch-color-base-d-c-20-set: 0;
  --ch-color-base-d-c-25: 0;
  --ch-color-base-d-c-25-set: 0;
  --ch-color-base-d-c-30: 0;
  --ch-color-base-d-c-30-set: 0;
  --ch-color-base-d-c-35: 0;
  --ch-color-base-d-c-35-set: 0;
  --ch-color-base-d-c-40: 0;
  --ch-color-base-d-c-40-set: 0;
  --ch-color-base-d-c-45: 0;
  --ch-color-base-d-c-45-set: 0;
  --ch-color-base-d-c-50: 0;
  --ch-color-base-d-c-50-set: 0;
  --ch-color-base-d-c-55: 0;
  --ch-color-base-d-c-55-set: 0;
  --ch-color-base-d-c-60: 0;
  --ch-color-base-d-c-60-set: 0;
  --ch-color-base-d-c-65: 0;
  --ch-color-base-d-c-65-set: 0;
  --ch-color-base-d-c-70: 0;
  --ch-color-base-d-c-70-set: 0;
  --ch-color-base-d-c-75: 0;
  --ch-color-base-d-c-75-set: 0;
  --ch-color-base-d-c-80: 0;
  --ch-color-base-d-c-80-set: 0;
  --ch-color-base-d-c-85: 0;
  --ch-color-base-d-c-85-set: 0;
  --ch-color-base-d-c-90: 0;
  --ch-color-base-d-c-90-set: 0;
  --ch-color-base-d-c-95: 0;
  --ch-color-base-d-c-95-set: 0;
  --ch-color-base-d-c-pax-delta: 0;
  --ch-color-base-d-c-pax-num: 0.035;
  --ch-color-base-d-h-00: 0;
  --ch-color-base-d-h-00-set: 0;
  --ch-color-base-d-h-05: 0;
  --ch-color-base-d-h-05-set: 0;
  --ch-color-base-d-h-10: 0;
  --ch-color-base-d-h-10-set: 0;
  --ch-color-base-d-h-100: 0;
  --ch-color-base-d-h-100-set: 0;
  --ch-color-base-d-h-15: 0;
  --ch-color-base-d-h-15-set: 0;
  --ch-color-base-d-h-20: 0;
  --ch-color-base-d-h-20-set: 0;
  --ch-color-base-d-h-25: 0;
  --ch-color-base-d-h-25-set: 0;
  --ch-color-base-d-h-30: 0;
  --ch-color-base-d-h-30-set: 0;
  --ch-color-base-d-h-35: 0;
  --ch-color-base-d-h-35-set: 0;
  --ch-color-base-d-h-40: 0;
  --ch-color-base-d-h-40-set: 0;
  --ch-color-base-d-h-45: 0;
  --ch-color-base-d-h-45-set: 0;
  --ch-color-base-d-h-50: 0;
  --ch-color-base-d-h-50-set: 0;
  --ch-color-base-d-h-55: 0;
  --ch-color-base-d-h-55-set: 0;
  --ch-color-base-d-h-60: 0;
  --ch-color-base-d-h-60-set: 0;
  --ch-color-base-d-h-65: 0;
  --ch-color-base-d-h-65-set: 0;
  --ch-color-base-d-h-70: 0;
  --ch-color-base-d-h-70-set: 0;
  --ch-color-base-d-h-75: 0;
  --ch-color-base-d-h-75-set: 0;
  --ch-color-base-d-h-80: 0;
  --ch-color-base-d-h-80-set: 0;
  --ch-color-base-d-h-85: 0;
  --ch-color-base-d-h-85-set: 0;
  --ch-color-base-d-h-90: 0;
  --ch-color-base-d-h-90-set: 0;
  --ch-color-base-d-h-95: 0;
  --ch-color-base-d-h-95-set: 0;
  --ch-color-base-d-h-pax-delta: 0;
  --ch-color-base-d-h-pax-num: 270;
  --ch-color-base-d-l-00: 0.13;
  --ch-color-base-d-l-00-set: 0.13;
  --ch-color-base-d-l-05: 0.15;
  --ch-color-base-d-l-05-set: 0.15;
  --ch-color-base-d-l-10: 0.17;
  --ch-color-base-d-l-10-set: 0.17;
  --ch-color-base-d-l-100: 0.98;
  --ch-color-base-d-l-100-set: 0.98;
  --ch-color-base-d-l-15: 0.18;
  --ch-color-base-d-l-15-set: 0.18;
  --ch-color-base-d-l-20: 0.19;
  --ch-color-base-d-l-20-set: 0.19;
  --ch-color-base-d-l-25: 0.21;
  --ch-color-base-d-l-25-set: 0.21;
  --ch-color-base-d-l-30: 0.24;
  --ch-color-base-d-l-30-set: 0.24;
  --ch-color-base-d-l-35: 0.3;
  --ch-color-base-d-l-35-set: 0.3;
  --ch-color-base-d-l-40: 0.38;
  --ch-color-base-d-l-40-set: 0.38;
  --ch-color-base-d-l-45: 0.48;
  --ch-color-base-d-l-45-set: 0.48;
  --ch-color-base-d-l-50: 0.58;
  --ch-color-base-d-l-50-set: 0.58;
  --ch-color-base-d-l-55: 0.63;
  --ch-color-base-d-l-55-set: 0.63;
  --ch-color-base-d-l-60: 0.68;
  --ch-color-base-d-l-60-set: 0.68;
  --ch-color-base-d-l-65: 0.78;
  --ch-color-base-d-l-65-set: 0.78;
  --ch-color-base-d-l-70: 0.86;
  --ch-color-base-d-l-70-set: 0.86;
  --ch-color-base-d-l-75: 0.9;
  --ch-color-base-d-l-75-set: 0.9;
  --ch-color-base-d-l-80: 0.92;
  --ch-color-base-d-l-80-set: 0.92;
  --ch-color-base-d-l-85: 0.94;
  --ch-color-base-d-l-85-set: 0.94;
  --ch-color-base-d-l-90: 0.95;
  --ch-color-base-d-l-90-set: 0.95;
  --ch-color-base-d-l-95: 0.96;
  --ch-color-base-d-l-95-set: 0.96;
  --ch-color-base-l-c-00: 0;
  --ch-color-base-l-c-05: 0;
  --ch-color-base-l-c-10: 0;
  --ch-color-base-l-c-100: 0;
  --ch-color-base-l-c-15: 0;
  --ch-color-base-l-c-20: 0;
  --ch-color-base-l-c-25: 0;
  --ch-color-base-l-c-30: 0;
  --ch-color-base-l-c-35: 0;
  --ch-color-base-l-c-40: 0;
  --ch-color-base-l-c-45: 0;
  --ch-color-base-l-c-50: 0;
  --ch-color-base-l-c-55: 0;
  --ch-color-base-l-c-60: 0;
  --ch-color-base-l-c-65: 0;
  --ch-color-base-l-c-70: 0;
  --ch-color-base-l-c-75: 0;
  --ch-color-base-l-c-80: 0;
  --ch-color-base-l-c-85: 0;
  --ch-color-base-l-c-90: 0;
  --ch-color-base-l-c-95: 0;
  --ch-color-base-l-c-pax-delta: 0;
  --ch-color-base-l-c-pax-num: 0.035;
  --ch-color-base-l-h-00: 0;
  --ch-color-base-l-h-05: 0;
  --ch-color-base-l-h-10: 0;
  --ch-color-base-l-h-100: 0;
  --ch-color-base-l-h-15: 0;
  --ch-color-base-l-h-20: 0;
  --ch-color-base-l-h-25: 0;
  --ch-color-base-l-h-30: 0;
  --ch-color-base-l-h-35: 0;
  --ch-color-base-l-h-40: 0;
  --ch-color-base-l-h-45: 0;
  --ch-color-base-l-h-50: 0;
  --ch-color-base-l-h-55: 0;
  --ch-color-base-l-h-60: 0;
  --ch-color-base-l-h-65: 0;
  --ch-color-base-l-h-70: 0;
  --ch-color-base-l-h-75: 0;
  --ch-color-base-l-h-80: 0;
  --ch-color-base-l-h-85: 0;
  --ch-color-base-l-h-90: 0;
  --ch-color-base-l-h-95: 0;
  --ch-color-base-l-h-pax-delta: 0;
  --ch-color-base-l-h-pax-num: 270;
  --ch-color-base-l-l-00: 100%;
  --ch-color-base-l-l-05: 99%;
  --ch-color-base-l-l-10: 98%;
  --ch-color-base-l-l-100: 0%;
  --ch-color-base-l-l-15: 97%;
  --ch-color-base-l-l-20: 95%;
  --ch-color-base-l-l-25: 93%;
  --ch-color-base-l-l-30: 88%;
  --ch-color-base-l-l-35: 80%;
  --ch-color-base-l-l-40: 70%;
  --ch-color-base-l-l-45: 60%;
  --ch-color-base-l-l-50: 50%;
  --ch-color-base-l-l-55: 40%;
  --ch-color-base-l-l-60: 30%;
  --ch-color-base-l-l-65: 20%;
  --ch-color-base-l-l-70: 12%;
  --ch-color-base-l-l-75: 7%;
  --ch-color-base-l-l-80: 5%;
  --ch-color-base-l-l-85: 3%;
  --ch-color-base-l-l-90: 2%;
  --ch-color-base-l-l-95: 1%;
  --checkbox-border-color: oklch(0.48 0 0);
  --checkbox-border-color-hover: oklch(0.68 0 0);
  --checkbox-color: oklch(40.14% 0.0638 202.51deg);
  --checkbox-color-hover: oklch(70.7% 0.1737 155.3deg);
  --checkbox-margin-inline-end: 0.25em;
  --checkbox-marker-color: oklch(0.13 0 0);
  --checkbox-radius: 50rem;
  --checklist-done-color: oklch(0.68 0 0);
  --clickable-icon-radius: 3px;
  --code-background: oklch(0.18 0 0);
  --code-border-color: oklch(0.3 0 0);
  --code-comment: oklch(0.48 0 0);
  --code-normal: oklch(0.98 0 0);
  --code-punctuation: oklch(0.68 0 0);
  --code-radius: 3px;
  --col-background-activeline: oklch(from oklch(0.58 0 0) l c h / calc(alpha - calc(1 - 0.25)));
  --col-base-alpha-alh: 0.25;
  --col-base-bg-alh: oklch(0.58 0 0);
  --col-frontmatter-atom: oklch(40.14% 0.0638 202.51deg);
  --col-frontmatter-default: oklch(82.77% 0.1667 79.6deg);
  --col-frontmatter-meta: oklch(70.7% 0.1737 155.3deg);
  --col-frontmatter-number: oklch(82.77% 0.1667 79.6deg);
  --col-h1: oklch(from oklch(40.14% 0.0638 202.51deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h);
  --col-h1-bg: oklch(40.14% 0.0638 202.51deg);
  --col-h2: oklch(from oklch(70.7% 0.1737 155.3deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h);
  --col-h2-bg: oklch(70.7% 0.1737 155.3deg);
  --col-h3: oklch(from oklch(82.77% 0.1667 79.6deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h);
  --col-h3-bg: oklch(82.77% 0.1667 79.6deg);
  --col-h4: oklch(from oklch(40.14% 0.0638 202.51deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h);
  --col-h4-bg: oklch(40.14% 0.0638 202.51deg);
  --col-h5: oklch(from oklch(70.7% 0.1737 155.3deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h);
  --col-h5-bg: oklch(70.7% 0.1737 155.3deg);
  --col-h6: oklch(from oklch(82.77% 0.1667 79.6deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h);
  --col-h6-bg: oklch(82.77% 0.1667 79.6deg);
  --col-highlight-0: rgb(0, 0, 0);
  --col-highlight-0-org: rgb(0, 0, 0);
  --col-highlight-1: rgb(0, 0, 0);
  --col-highlight-1-org: rgb(0, 0, 0);
  --col-highlight-2: rgb(0, 0, 0);
  --col-highlight-2-org: rgb(0, 0, 0);
  --col-highlight-3: rgb(0, 0, 0);
  --col-highlight-3-org: rgb(0, 0, 0);
  --col-highlight-text: rgb(0, 0, 0);
  --col-highlight-text-pickr: rgb(0, 0, 0);
  --col-tab-style: oklch(40.14% 0.0638 202.51deg);
  --col-titlebar-accent: oklch(40.14% 0.0638 202.51deg);
  --collapse-icon-color: oklch(0.48 0 0);
  --collapse-icon-color-collapsed: oklch(70.7% 0.1737 155.3deg);
  --color-accent: oklch(40.14% 0.0638 202.51deg);
  --color-accent-1: oklch(70.7% 0.1737 155.3deg);
  --color-accent-2: oklch(82.77% 0.1667 79.6deg);
  --color-background-progress-bar-message: rgb(0, 0, 0);
  --color-base-00: oklch(0.13 0 0);
  --color-base-05: oklch(0.15 0 0);
  --color-base-10: oklch(0.17 0 0);
  --color-base-100: oklch(0.98 0 0);
  --color-base-15: oklch(0.18 0 0);
  --color-base-20: oklch(0.19 0 0);
  --color-base-25: oklch(0.21 0 0);
  --color-base-30: oklch(0.24 0 0);
  --color-base-35: oklch(0.3 0 0);
  --color-base-40: oklch(0.38 0 0);
  --color-base-45: oklch(0.48 0 0);
  --color-base-50: oklch(0.58 0 0);
  --color-base-55: oklch(0.63 0 0);
  --color-base-60: oklch(0.68 0 0);
  --color-base-65: oklch(0.78 0 0);
  --color-base-70: oklch(0.86 0 0);
  --color-base-75: oklch(0.9 0 0);
  --color-base-80: oklch(0.92 0 0);
  --color-base-85: oklch(0.94 0 0);
  --color-base-90: oklch(0.95 0 0);
  --color-base-95: oklch(0.96 0 0);
  --color-bloemfontein: oklch(70.7% 0.1737 155.3deg);
  --color-d-accent: oklch(40.14% 0.0638 202.51deg);
  --color-d-accent-1: oklch(70.7% 0.1737 155.3deg);
  --color-d-accent-2: oklch(82.77% 0.1667 79.6deg);
  --color-red-2: oklch(from #fb464c calc(l - 0.1) c calc(h + 4));
  --color-selection: oklch(80.92% 0.170357 75.4802deg);
  --color-set-d-selection: oklch(80.92% 0.170357 75.4802deg);
  --color-set-l-selection: oklch(80.92% 0.170357 75.4802deg);
  --color-table-even: oklch(0.17 0 0);
  --color-table-head: oklch(0.19 0 0);
  --color-table-head-hover: rgba(255, 255, 255, 0.067);
  --color-table-odd: oklch(0.13 0 0);
  --cssc-banner-gradient-mask: linear-gradient(to bottom,
  black 0%,
  black 50%,
  oklch(0% 0 0deg / 80%) 75%,
  oklch(0% 0 0deg / 50%) 80%,
  oklch(0% 0 0deg / 30%) 85%,
  oklch(0% 0 0deg / 15%) 90%,
  oklch(0% 0 0deg / 8%) 95%,
  transparent 100%
  );
  --cssc-banner-height: 200px;
  --cssc-banner-residual: 0px;
  --cssc-cornell-align-left: max(125px, 25%);
  --cssc-cornell-aside-max: 25%;
  --cssc-cornell-aside-min: 125px;
  --cssc-cornell-gap: 0.75rem;
  --cssc-cornell-text-align: justify;
  --cssc-cornell-text-align-last: right;
  --cssc-latex-font-reading: "MathJax Main", "MJXZERO", "MJXTEX";
  --cssc-latex-font-size: 14pt;
  --cssc-latex-font-source: "DM Mono" ,"MathJax Main", "MJXZERO", "MJXTEX";
  --cssc-latex-text-indent: 0em;
  --default-font: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --distant-opacity: 0.2;
  --divider-color: oklch(0.3 0 0);
  --divider-color-hover: oklch(40.14% 0.0638 202.51deg);
  --dropdown-background: oklch(0.19 0 0);
  --dropdown-background-hover: oklch(0.24 0 0);
  --elements-padding: 4px;
  --embed-block-shadow-hover: 0 0 0 1px oklch(0.3 0 0), inset 0 0 0 1px oklch(0.3 0 0);
  --embed-border-start: 2px solid oklch(40.14% 0.0638 202.51deg);
  --empty-state-background: oklch(0.17 0 0);
  --file-header-background: oklch(0.13 0 0);
  --file-header-background-focused: oklch(0.13 0 0);
  --file-header-border: 0px;
  --file-header-font: '??', "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --flair-background: oklch(0.19 0 0);
  --flair-color: oklch(0.98 0 0);
  --font-editor: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --font-editor-m: "Inter 4.1", "DM Sans", "Manrope";
  --font-heading: "Manrope", "Inter 4.1", "DM Sans";
  --font-interface: '??', "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --font-interface-theme: "Manrope", "Inter 4.1", "DM Sans";
  --font-menu: "Manrope", "Inter 4.1", "DM Sans";
  --font-menu-m: "Manrope", "Inter 4.1", "DM Sans";
  --font-mermaid: "Inter 4.1", "DM Sans", "Manrope";
  --font-monospace: '??', "DM Mono", "DM Mono";
  --font-monospace-theme: "DM Mono";
  --font-print: '??', '??', "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", 'Arial';
  --font-reveal: "Inter 4.1", "DM Sans", "Manrope";
  --font-text: '??', "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", '??', "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --font-text-theme: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --font-ui: "Manrope", "Inter 4.1", "DM Sans";
  --font-ui-m: "Manrope", "Inter 4.1", "DM Sans";
  --footnote-divider-color: oklch(0.3 0 0);
  --footnote-id-color: oklch(0.68 0 0);
  --footnote-id-color-no-occurrences: oklch(0.48 0 0);
  --footnote-radius: 3px;
  --gap-callouts-img-grid: 4px;
  --global-block-width-mode: auto;
  --graph-line: oklch(0.3 0 0);
  --graph-node: oklch(0.68 0 0);
  --graph-node-focused: oklch(70.7% 0.1737 155.3deg);
  --graph-node-unresolved: oklch(0.48 0 0);
  --graph-text: oklch(0.98 0 0);
  --grid-columns-container-comm-modal: 5;
  --h1-size: 1.8em;
  --h1-weight: 600;
  --h2-size: 1.6em;
  --h2-weight: 600;
  --h3-size: 1.45em;
  --h3-weight: 600;
  --h4-size: 1.3em;
  --h4-weight: 500;
  --h5-size: 1.15em;
  --h5-weight: 500;
  --h6-size: 1.05em;
  --h6-weight: 500;
  --header-height: 36px;
  --header-icon-size: 16px;
  --header-icon-size-hover: 19px;
  --header-margin: 4px;
  --header-margin-half: 2px;
  --header-padding: 6px;
  --header-padding-hover: 4.5px;
  --heading-formatting: oklch(0.48 0 0);
  --heading-spacing: 0;
  --height-hover-sd: 50%;
  --height-norm-sd: 25%;
  --height-progress-bar-subline: 4px;
  --highlight-mix-blend-mode: normal;
  --hover-diff: 1.5px;
  --hover-diff-sidebar: 1.25px;
  --hover-diff-tab: 1.75px;
  --hover-frac: 0.25;
  --hover-frac-sidebar: 0.25;
  --hover-frac-tab: 0.25;
  --hr-color: oklch(0.3 0 0);
  --icon-color: oklch(0.68 0 0);
  --icon-color-active: oklch(70.7% 0.1737 155.3deg);
  --icon-color-focused: oklch(70.7% 0.1737 155.3deg);
  --icon-color-hover: oklch(82.77% 0.1667 79.6deg);
  --icon-diff: 2px;
  --icon-diff-sidebar: 2px;
  --icon-width-sidebar: 24%;
  --indentation-guide-editing-indent: 1em;
  --infobox-max-width: 50%;
  --infobox-set-width: 50%;
  --infobox-title-font-size: 1.6em;
  --inline-title-size: 1.8em;
  --inline-title-weight: 600;
  --input-border-width: 0;
  --input-date-separator: oklch(0.48 0 0);
  --input-height: 28px;
  --input-placeholder-color: oklch(0.48 0 0);
  --input-radius: 3px;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: oklch(40.14% 0.0638 202.51deg);
  --interactive-accent-hover: oklch(70.7% 0.1737 155.3deg);
  --interactive-focus: oklch(0.38 0 0);
  --interactive-hover: oklch(0.24 0 0);
  --interactive-normal: oklch(0.19 0 0);
  --l: clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975);
  --l-threshold: 0.7;
  --link-color: oklch(70.7% 0.1737 155.3deg);
  --link-color-hover: oklch(82.77% 0.1667 79.6deg);
  --link-external-color: oklch(70.7% 0.1737 155.3deg);
  --link-external-color-hover: oklch(82.77% 0.1667 79.6deg);
  --link-unresolved-color: oklch(70.7% 0.1737 155.3deg);
  --list-marker-color: oklch(0.48 0 0);
  --list-marker-color-collapsed: oklch(70.7% 0.1737 155.3deg);
  --list-marker-color-hover: oklch(0.68 0 0);
  --logo-icon-filled: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'  class='logo-full'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='82.85' y1='30.41' x2='51.26' y2='105.9' gradientTransform='matrix(1, 0, 0, -1, -22.41, 110.97)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%236c56cc'%3E%3C/stop%3E%3Cstop offset='1' stop-color='%239785e5'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points='62.61,0 30.91,17.52 18,45.45 37.57,90.47 65.35,100 70.44,89.8 81,26.39 62.61,0' fill='%2334208c'%3E%3C/polygon%3E%3Cpolygon points='81,26.39 61.44,14.41 34.43,35.7 65.35,100 70.44,89.8 81,26.39' fill='url(%23a)'%3E%3C/polygon%3E%3Cpolygon points='81,26.39 81,26.39 62.61,0 61.44,14.41 81,26.39' fill='%23af9ff4'%3E%3C/polygon%3E%3Cpolygon points='61.44,14.41 62.61,0 30.91,17.52 34.43,35.7 61.44,14.41' fill='%234a37a0'%3E%3C/polygon%3E%3Cpolygon points='34.43,35.7 37.57,90.47 65.35,100 34.43,35.7' fill='%234a37a0'%3E%3C/polygon%3E%3C/svg%3E");
  --logo-icon-filled-flat: url("data:image/svg+xml,%3Csvg alt='Obsidian' viewBox='0 0 20 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23A88BFA' d='m6.91927 14.5955c.64053-.1907 1.67255-.4839 2.85923-.5565-.71191-1.7968-.88376-3.3691-.74554-4.76905.15962-1.61678.72977-2.9662 1.28554-4.11442.1186-.24501.2326-.47313.3419-.69198.1549-.30984.3004-.60109.4365-.8953.2266-.48978.3948-.92231.4798-1.32416.0836-.39515.0841-.74806-.0148-1.08657-.099-.338982-.3093-.703864-.7093-1.1038132-.5222-.1353116-1.1017-.0165173-1.53613.3742922l-5.15591 4.638241c-.28758.25871-.47636.60929-.53406.99179l-.44455 2.94723c.69903.6179 2.42435 2.41414 3.47374 4.90644.09364.2224.1819.4505.26358.6838z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m2.97347 10.3512c-.02431.1037-.05852.205-.10221.3024l-2.724986 6.0735c-.279882.6238-.15095061 1.3552.325357 1.8457l4.288349 4.4163c2.1899-3.2306 1.87062-6.2699.87032-8.6457-.75846-1.8013-1.90801-3.2112-2.65683-3.9922z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m5.7507 23.5094c.07515.012.15135.0192.2281.0215.81383.0244 2.18251.0952 3.29249.2997.90551.1669 2.70051.6687 4.17761 1.1005 1.1271.3294 2.2886-.5707 2.4522-1.7336.1192-.8481.343-1.8075.7553-2.6869l-.0095.0033c-.6982-1.9471-1.5865-3.2044-2.5178-4.0073-.9284-.8004-1.928-1.1738-2.8932-1.3095-1.60474-.2257-3.07497.1961-4.00103.4682.55465 2.3107.38396 5.0295-1.48417 7.8441z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m17.3708 19.3102c.9267-1.3985 1.5868-2.4862 1.9352-3.0758.1742-.295.1427-.6648-.0638-.9383-.5377-.7126-1.5666-2.1607-2.1272-3.5015-.5764-1.3785-.6624-3.51876-.6673-4.56119-.0019-.39626-.1275-.78328-.3726-1.09465l-3.3311-4.23183c-.0117.19075-.0392.37998-.0788.56747-.1109.52394-.32 1.04552-.5585 1.56101-.1398.30214-.3014.62583-.4646.95284-.1086.21764-.218.4368-.3222.652-.5385 1.11265-1.0397 2.32011-1.1797 3.73901-.1299 1.31514.0478 2.84484.8484 4.67094.1333.0113.2675.0262.4023.0452 1.1488.1615 2.3546.6115 3.4647 1.5685.9541.8226 1.8163 2.0012 2.5152 3.6463z'%3E%3C/path%3E%3C/svg%3E");
  --logo-icon-filled-new: url("data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20height%3D%22100%25%22%20width%3D%22100%25%22%20viewBox%3D%220%200%20512%20512%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3CradialGradient%20id%3D%22logo-bottom-left%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-59%20-225%20150%20-39%20161.4%20470)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.4%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-opacity%3D%22.1%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-top-right%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(50%20-379%20280%2037%20360%20374.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.6%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.1%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-top-left%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(69%20-319%20218%2047%20175.4%20307)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.8%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.4%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-bottom-right%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-96%20-163%20187%20-111%20335.3%20512.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.3%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-opacity%3D%22.3%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-top-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-36%20166%20-112%20-24%20310%20128.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-left-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(88%2089%20-190%20187%20111%20220.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.4%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-bottom-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(9%20130%20-276%2020%20215%20284)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.3%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-middle-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-198%20-104%20327%20-623%20400%20399.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.3%22%2F%3E%3C%2FradialGradient%3E%3CclipPath%20id%3D%22clip%22%3E%3Cpath%20d%3D%22M.2.2h512v512H.2z%22%2F%3E%3C%2FclipPath%3E%3Cg%20clip-path%3D%22url(%23clip)%22%3E%3Cpath%20d%3D%22M382.3%20475.6c-3.1%2023.4-26%2041.6-48.7%2035.3-32.4-8.9-69.9-22.8-103.6-25.4l-51.7-4a34%2034%200%200%201-22-10.2l-89-91.7a34%2034%200%200%201-6.7-37.7s55-121%2057.1-127.3c2-6.3%209.6-61.2%2014-90.6%201.2-7.9%205-15%2011-20.3L248%208.9a34.1%2034.1%200%200%201%2049.6%204.3L386%20125.6a37%2037%200%200%201%207.6%2022.4c0%2021.3%201.8%2065%2013.6%2093.2%2011.5%2027.3%2032.5%2057%2043.5%2071.5a17.3%2017.3%200%200%201%201.3%2019.2%201494%201494%200%200%201-44.8%2070.6c-15%2022.3-21.9%2049.9-25%2073.1z%22%20fill%3D%22%236c31e3%22%2F%3E%3Cpath%20d%3D%22M165.9%20478.3c41.4-84%2040.2-144.2%2022.6-187-16.2-39.6-46.3-64.5-70-80-.6%202.3-1.3%204.4-2.2%206.5L60.6%20342a34%2034%200%200%200%206.6%2037.7l89.1%2091.7a34%2034%200%200%200%209.6%207z%22%20fill%3D%22url(%23logo-bottom-left)%22%2F%3E%3Cpath%20d%3D%22M278.4%20307.8c11.2%201.2%2022.2%203.6%2032.8%207.6%2034%2012.7%2065%2041.2%2090.5%2096.3%201.8-3.1%203.6-6.2%205.6-9.2a1536%201536%200%200%200%2044.8-70.6%2017%2017%200%200%200-1.3-19.2c-11-14.6-32-44.2-43.5-71.5-11.8-28.2-13.5-72-13.6-93.2%200-8.1-2.6-16-7.6-22.4L297.6%2013.2a34%2034%200%200%200-1.5-1.7%2096%2096%200%200%201%202%2054%20198.3%20198.3%200%200%201-17.6%2041.3l-7.2%2014.2a171%20171%200%200%200-19.4%2071c-1.2%2029.4%204.8%2066.4%2024.5%20115.8z%22%20fill%3D%22url(%23logo-top-right)%22%2F%3E%3Cpath%20d%3D%22M278.4%20307.8c-19.7-49.4-25.8-86.4-24.5-115.9a171%20171%200%200%201%2019.4-71c2.3-4.8%204.8-9.5%207.2-14.1%207.1-13.9%2014-27%2017.6-41.4a96%2096%200%200%200-2-54A34.1%2034.1%200%200%200%20248%209l-105.4%2094.8a34.1%2034.1%200%200%200-10.9%2020.3l-12.8%2085-.5%202.3c23.8%2015.5%2054%2040.4%2070.1%2080a147%20147%200%200%201%207.8%2024.8c28-6.8%2055.7-11%2082.1-8.3z%22%20fill%3D%22url(%23logo-top-left)%22%2F%3E%3Cpath%20d%3D%22M333.6%20511c22.7%206.2%2045.6-12%2048.7-35.4a187%20187%200%200%201%2019.4-63.9c-25.6-55-56.5-83.6-90.4-96.3-36-13.4-75.2-9-115%20.7%208.9%2040.4%203.6%2093.3-30.4%20162.2%204%201.8%208.1%203%2012.5%203.3%200%200%2024.4%202%2053.6%204.1%2029%202%2072.4%2017.1%20101.6%2025.2z%22%20fill%3D%22url(%23logo-bottom-right)%22%2F%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M254.1%20190c-1.3%2029.2%202.4%2062.8%2022.1%20112.1l-6.2-.5c-17.7-51.5-21.5-78-20.2-107.6a174.7%20174.7%200%200%201%2020.4-72c2.4-4.9%208-14.1%2010.5-18.8%207.1-13.7%2011.9-21%2016-33.6%205.7-17.5%204.5-25.9%203.8-34.1%204.6%2029.9-12.7%2056-25.7%2082.4a177.1%20177.1%200%200%200-20.7%2072z%22%20fill%3D%22url(%23logo-top-edge)%22%2F%3E%3Cpath%20d%3D%22M194.3%20293.4c2.4%205.4%204.6%209.8%206%2016.5L195%20311c-2.1-7.8-3.8-13.4-6.8-20-17.8-42-46.3-63.6-69.7-79.5%2028.2%2015.2%2057.2%2039%2075.7%2081.9z%22%20fill%3D%22url(%23logo-left-edge)%22%2F%3E%3Cpath%20d%3D%22M200.6%20315.1c9.8%2046-1.2%20104.2-33.6%20160.9%2027.1-56.2%2040.2-110.1%2029.3-160z%22%20fill%3D%22url(%23logo-bottom-edge)%22%2F%3E%3Cpath%20d%3D%22M312.5%20311c53.1%2019.9%2073.6%2063.6%2088.9%20100-19-38.1-45.2-80.3-90.8-96-34.8-11.8-64.1-10.4-114.3%201l-1.1-5c53.2-12.1%2081-13.5%20117.3%200z%22%20fill%3D%22url(%23logo-middle-edge)%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  --logo-icon-line: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z'%3E%3C/path%3E%3C/svg%3E");
  --logo-icon-line-new: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='none' stroke='white' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --magnifier-bw-bases: 1.5;
  --magnifier-bw-iframe: 1.5;
  --magnifier-bw-pdfembed: 1.5;
  --magnifier-bw-table: 1.5;
  --margin-callout: 0.75em;
  --medium-transition: 300ms ease-in-out;
  --menu-background: oklch(0.19 0 0);
  --menu-border-color: oklch(0.38 0 0);
  --menu-font: "Manrope", "Inter 4.1", "DM Sans";
  --menu-padding: 4px;
  --menu-radius: 6px;
  --menu-shadow: none;
  --metadata-border-color: oklch(0.3 0 0);
  --metadata-divider-color: oklch(0.3 0 0);
  --metadata-input-font: '??', "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --metadata-input-text-color: oklch(0.98 0 0);
  --metadata-label-font: '??', "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --metadata-label-text-color: oklch(0.68 0 0);
  --metadata-label-text-color-hover: oklch(0.68 0 0);
  --metadata-padding: 0.25em 0.25em;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(0.48 0 0);
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(0.38 0 0);
  --metadata-property-radius: 3px;
  --metadata-property-radius-focus: 3px;
  --metadata-property-radius-hover: 3px;
  --mod-settings-left-column-spacing: 0px;
  --modal-background: oklch(0.13 0 0);
  --modal-border-color: oklch(0.38 0 0);
  --modal-border-width: 0;
  --modal-height-community-plugin: 85vh;
  --modal-height-community-theme: 85vh;
  --modal-height-publish: 85vh;
  --modal-height-settings: 85vh;
  --modal-radius: 6px;
  --modal-sidebar-background: oklch(0.19 0 0);
  --modal-width-community-plugin: 90vw;
  --modal-width-community-theme: 90vw;
  --modal-width-publish: 90vw;
  --modal-width-settings: 90vw;
  --nav-collapse-icon-color: oklch(0.48 0 0);
  --nav-collapse-icon-color-collapsed: oklch(0.48 0 0);
  --nav-heading-color: oklch(0.98 0 0);
  --nav-heading-color-collapsed: oklch(0.48 0 0);
  --nav-heading-color-collapsed-hover: oklch(0.68 0 0);
  --nav-heading-color-hover: oklch(0.98 0 0);
  --nav-item-color: oklch(0.68 0 0);
  --nav-item-color-active: oklch(0.98 0 0);
  --nav-item-color-highlighted: oklch(70.7% 0.1737 155.3deg);
  --nav-item-color-hover: oklch(0.98 0 0);
  --nav-item-color-selected: oklch(0.98 0 0);
  --nav-item-padding-left-no-icon: 12px;
  --nav-item-radius: 3px;
  --nav-padding: 0 2px 0 4px;
  --nav-tag-color: oklch(0.48 0 0);
  --nav-tag-color-active: oklch(0.68 0 0);
  --nav-tag-color-hover: oklch(0.68 0 0);
  --nav-tag-radius: 3px;
  --nav-title-margin: 2px;
  --near-fade-factor: 0.15;
  --opacity-sd: 100%;
  --p-root-number: 0.75;
  --p-spacing: 0.75em;
  --p-spacing-root: 0.75rem;
  --padding-graph-control: 6px;
  --padding-headers: 0.15em 0.25em;
  --padding-headers-lr: 0.25em;
  --padding-headers-td: 0.15em;
  --padding-highlight-LR: 3px;
  --padding-highlight-TB: 2px;
  --padding-modal-side: 4px;
  --padding-multi-select: 2px;
  --padding-print: 2cm;
  --padding-ss: 0.75em;
  --pdf-background: oklch(0.13 0 0);
  --pdf-page-background: oklch(0.13 0 0);
  --pdf-shadow: 0 0 0 1px oklch(0.3 0 0);
  --pdf-sidebar-background: oklch(0.13 0 0);
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(0.3 0 0);
  --pill-border-color: oklch(0.3 0 0);
  --pill-border-color-hover: oklch(0.38 0 0);
  --pill-color: oklch(0.68 0 0);
  --pill-color-hover: oklch(0.98 0 0);
  --pill-color-remove: oklch(0.48 0 0);
  --pill-color-remove-hover: oklch(70.7% 0.1737 155.3deg);
  --pill-radius: 3px;
  --prompt-background: oklch(0.13 0 0);
  --prompt-border-color: oklch(0.38 0 0);
  --prompt-border-width: 0;
  --prompt-padding: 6px;
  --quick-transition: 140ms ease-in-out;
  --quicker-transition: 70ms ease-in-out;
  --radius-callouts-gallery: 3px;
  --radius-callouts-img-grid: 3px;
  --radius-image: 3px;
  --radius-l: 9px;
  --radius-m: 6px;
  --radius-s: 3px;
  --raised-background: color-mix(in srgb, oklch(0.19 0 0) 65%, transparent) linear-gradient(oklch(0.19 0 0), color-mix(in srgb, oklch(0.19 0 0) 65%, transparent));
  --ratio-bw-bases-reading: 0.96;
  --ratio-bw-bases-source: 1;
  --ratio-bw-iframe-reading: 0.96;
  --ratio-bw-iframe-source: 1;
  --ratio-bw-pdfembed-reading: 0.96;
  --ratio-bw-pdfembed-source: 1;
  --ratio-bw-table-reading: 0.96;
  --ratio-bw-table-source: 1;
  --ribbon-background: oklch(0.19 0 0);
  --ribbon-background-collapsed: oklch(0.13 0 0);
  --ribbon-float-color: oklch(0.19 0 0);
  --ribbon-padding: 4px;
  --ribbon-width: 36px;
  --sbb-divider-width: 1px;
  --scrollbar-bg: oklch(0.3 0 0);
  --scrollbar-radius: 9px;
  --search-clear-button-color: oklch(0.68 0 0);
  --search-icon-color: oklch(0.68 0 0);
  --search-result-background: oklch(0.13 0 0);
  --setting-group-heading-color: oklch(0.98 0 0);
  --setting-heading: "Inter 4.1", "DM Sans", "Manrope";
  --setting-items-background: oklch(0.17 0 0);
  --setting-items-border-color: oklch(0.3 0 0);
  --setting-items-radius: 9px;
  --settings-background: oklch(0.17 0 0);
  --shadow-l: none;
  --shadow-s: none;
  --shape-roundish: 6px;
  --sidebar-icon-padding: 5px;
  --sidebar-icon-size: 18px;
  --sidebar-icon-size-hover: 20.5px;
  --sidebar-padding-hover: 3.75px;
  --size-bw-bases: size * 1.5;
  --size-bw-iframe: size * 1.5;
  --size-bw-pdfembed: size * 1.5;
  --size-bw-table: size * 1.5;
  --size-scrollbar-non-native: 8px;
  --slider-thumb-border-color: oklch(0.38 0 0);
  --slider-track-background: oklch(0.3 0 0);
  --slow-transition: 560ms ease-in-out;
  --smallcap-font: "Inter 4.1", "DM Sans", "Manrope";
  --spacing-comm-modal: 4px;
  --ssopt-bw-table-content-fit: 0;
  --ssopt-callout-style: 0;
  --ssopt-callouts-images-display: 0;
  --ssopt-status-bar-full-style: 1;
  --startup-background-image: 50px;
  --startup-obsidian-image: url("data:image/svg+xml,%3Csvg alt='Obsidian' viewBox='0 0 20 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23A88BFA' d='m6.91927 14.5955c.64053-.1907 1.67255-.4839 2.85923-.5565-.71191-1.7968-.88376-3.3691-.74554-4.76905.15962-1.61678.72977-2.9662 1.28554-4.11442.1186-.24501.2326-.47313.3419-.69198.1549-.30984.3004-.60109.4365-.8953.2266-.48978.3948-.92231.4798-1.32416.0836-.39515.0841-.74806-.0148-1.08657-.099-.338982-.3093-.703864-.7093-1.1038132-.5222-.1353116-1.1017-.0165173-1.53613.3742922l-5.15591 4.638241c-.28758.25871-.47636.60929-.53406.99179l-.44455 2.94723c.69903.6179 2.42435 2.41414 3.47374 4.90644.09364.2224.1819.4505.26358.6838z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m2.97347 10.3512c-.02431.1037-.05852.205-.10221.3024l-2.724986 6.0735c-.279882.6238-.15095061 1.3552.325357 1.8457l4.288349 4.4163c2.1899-3.2306 1.87062-6.2699.87032-8.6457-.75846-1.8013-1.90801-3.2112-2.65683-3.9922z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m5.7507 23.5094c.07515.012.15135.0192.2281.0215.81383.0244 2.18251.0952 3.29249.2997.90551.1669 2.70051.6687 4.17761 1.1005 1.1271.3294 2.2886-.5707 2.4522-1.7336.1192-.8481.343-1.8075.7553-2.6869l-.0095.0033c-.6982-1.9471-1.5865-3.2044-2.5178-4.0073-.9284-.8004-1.928-1.1738-2.8932-1.3095-1.60474-.2257-3.07497.1961-4.00103.4682.55465 2.3107.38396 5.0295-1.48417 7.8441z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m17.3708 19.3102c.9267-1.3985 1.5868-2.4862 1.9352-3.0758.1742-.295.1427-.6648-.0638-.9383-.5377-.7126-1.5666-2.1607-2.1272-3.5015-.5764-1.3785-.6624-3.51876-.6673-4.56119-.0019-.39626-.1275-.78328-.3726-1.09465l-3.3311-4.23183c-.0117.19075-.0392.37998-.0788.56747-.1109.52394-.32 1.04552-.5585 1.56101-.1398.30214-.3014.62583-.4646.95284-.1086.21764-.218.4368-.3222.652-.5385 1.11265-1.0397 2.32011-1.1797 3.73901-.1299 1.31514.0478 2.84484.8484 4.67094.1333.0113.2675.0262.4023.0452 1.1488.1615 2.3546.6115 3.4647 1.5685.9541.8226 1.8163 2.0012 2.5152 3.6463z'%3E%3C/path%3E%3C/svg%3E");
  --status-bar-background: oklch(0.19 0 0);
  --status-bar-border-color: oklch(0.3 0 0);
  --status-bar-bottom-float-margin: 8px;
  --status-bar-full-justify-content: right;
  --status-bar-glass-blur: 4px;
  --status-bar-max-width: 85%;
  --status-bar-min-height: 21.86667px;
  --status-bar-min-height-intermediary: 13.86667px;
  --status-bar-padding: 4px;
  --status-bar-position: absolute;
  --status-bar-radius: 6px 0 0 0;
  --status-bar-shift-workspace-padding-bottom: 30.86667px;
  --status-bar-text-color: oklch(0.68 0 0);
  --suggestion-background: oklch(0.13 0 0);
  --tab-background-active: oklch(0.13 0 0);
  --tab-container-background: oklch(0.19 0 0);
  --tab-divider-color: oklch(0.38 0 0);
  --tab-focus-border-width: 1px;
  --tab-icon-size: 14px;
  --tab-icon-size-hover: 17.5px;
  --tab-outline-color: oklch(0.3 0 0);
  --tab-outline-width: 0px;
  --tab-padding: 7px;
  --tab-padding-hover: 5.25px;
  --tab-radius: 3px;
  --tab-stacked-header-width: 36px;
  --tab-stacked-shadow: -1px 0 0 0 oklch(0.3 0 0);
  --tab-switcher-background: oklch(0.19 0 0);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(0.19 0 0), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px oklch(40.14% 0.0638 202.51deg);
  --tab-text-color: oklch(0.48 0 0);
  --tab-text-color-active: oklch(0.68 0 0);
  --tab-text-color-focused: oklch(0.68 0 0);
  --tab-text-color-focused-active: oklch(0.68 0 0);
  --tab-text-color-focused-active-current: oklch(70.7% 0.1737 155.3deg);
  --tab-text-color-focused-highlighted: oklch(70.7% 0.1737 155.3deg);
  --table-add-button-border-color: oklch(0.3 0 0);
  --table-border-color: oklch(0.3 0 0);
  --table-drag-handle-background-active: oklch(40.14% 0.0638 202.51deg);
  --table-drag-handle-color: oklch(0.48 0 0);
  --table-drag-handle-size: 16px;
  --table-header-background: oklch(0.19 0 0);
  --table-header-background-hover: rgba(255, 255, 255, 0.067);
  --table-header-border-color: oklch(0.3 0 0);
  --table-header-color: oklch(0.98 0 0);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: oklch(40.14% 0.0638 202.51deg);
  --tag-color: oklch(70.7% 0.1737 155.3deg);
  --tag-color-hover: oklch(70.7% 0.1737 155.3deg);
  --tag-radius: 3px;
  --text-accent: oklch(70.7% 0.1737 155.3deg);
  --text-accent-hover: oklch(82.77% 0.1667 79.6deg);
  --text-error-hover: oklch(from #fb464c calc(l - 0.1) c calc(h + 4));
  --text-faint: oklch(0.48 0 0);
  --text-highlight-bg: rgb(0, 0, 0);
  --text-highlight-bg-active: rgb(0, 0, 0);
  --text-message-progress-bar: oklch(0.98 0 0);
  --text-muted: oklch(0.68 0 0);
  --text-normal: oklch(0.98 0 0);
  --text-selection: oklch(80.92% 0.170357 75.4802deg);
  --theme-alternative-checkboxes: disable;
  --titlebar-background: oklch(0.19 0 0);
  --titlebar-background-focused: oklch(0.21 0 0);
  --titlebar-border-color: oklch(0.3 0 0);
  --titlebar-text-color: oklch(0.68 0 0);
  --titlebar-text-color-focused: oklch(0.98 0 0);
  --toggle-border-width: 0;
  --toggle-s-border-width: 0px;
  --touch-radius-l: 9px;
  --touch-radius-m: 6px;
  --touch-radius-s: 3px;
  --touch-radius-xl: 9px;
  --touch-radius-xs: 3px;
  --touch-radius-xxs: 3px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  --ui-font: "Manrope", "Inter 4.1", "DM Sans";
  --vault-profile-color: oklch(0.98 0 0);
  --vault-profile-color-hover: oklch(0.98 0 0);
  --width-norm-sd: 36px;
  --width-vll: 700px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.19 0 0);
  color: oklch(0.98 0 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: oklch(0.13 0 0);
  color: oklch(0.98 0 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.17 0 0);
  color: oklch(0.98 0 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.3 0 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.19 0 0);
  border-left-color: oklch(0.3 0 0);
  color: oklch(0.98 0 0);
}

body div#quartz-root {
  background-color: oklch(0.13 0 0);
  color: oklch(0.98 0 0);
}`,
    typography: `body .page article p > b, b {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.98 0 0) none 0px;
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body .page article p > em, em {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.98 0 0) none 0px;
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body .page article p > i, i {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.98 0 0) none 0px;
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body .page article p > strong, strong {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.98 0 0) none 0px;
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body .text-highlight {
  background-color: rgb(255, 195, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.98 0 0) none 0px;
  text-decoration: line-through oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body p {
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.68 0 0) none 0px;
  text-decoration: oklch(0.68 0 0);
  text-decoration-color: oklch(0.68 0 0);
}`,
    links: `body a.external, footer a {
  color: oklch(0.707 0.1737 155.3);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.707 0.1737 155.3) none 0px;
  text-decoration: underline oklch(0.707 0.1737 155.3);
  text-decoration-color: oklch(0.707 0.1737 155.3);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.707 0.1737 155.3);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.707 0.1737 155.3) none 0px;
  text-decoration: underline oklch(0.707 0.1737 155.3);
  text-decoration-color: oklch(0.707 0.1737 155.3);
}

body a.internal.broken {
  color: oklch(0.707 0.1737 155.3);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.707 0.1737 155.3) none 0px;
}`,
    lists: `body dd {
  color: oklch(0.98 0 0);
}

body dt {
  color: oklch(0.98 0 0);
}

body ol > li {
  color: oklch(0.98 0 0);
}

body ol.overflow {
  background-color: oklch(0.13 0 0);
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

body ul > li {
  color: oklch(0.98 0 0);
}

body ul.overflow {
  background-color: oklch(0.13 0 0);
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: oklch(0.48 0 0);
  text-decoration: oklch(0.48 0 0);
}

body blockquote {
  background-color: oklch(0.17 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `body .table-container {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

body table {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  margin-top: 12px;
  width: 194.844px;
}

body tbody tr:nth-child(even) {
  background-color: oklch(0.17 0 0);
}

body tbody tr:nth-child(odd) {
  background-color: oklch(0.13 0 0);
}

body td {
  border-bottom-color: oklch(0.3 0 0);
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  color: oklch(0.98 0 0);
}

body th {
  border-bottom-color: oklch(0.3 0 0);
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  color: oklch(0.98 0 0);
}

body tr {
  background-color: oklch(0.19 0 0);
}`,
    code: `body code {
  border-bottom-color: oklch(0.98 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.98 0 0);
  font-family: "??", "DM Mono", "DM Mono";
}

body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.18 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.18 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.98 0 0);
}

body pre > code, pre:has(> code) {
  background-color: oklch(0.18 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  background-color: oklch(0.18 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body audio {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

body figcaption {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body figure {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

body img {
  border-bottom-color: oklch(0.98 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.98 0 0);
  border-radius: 3px;
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body video {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}`,
    embeds: `body .file-embed {
  background-color: oklch(0.17 0 0);
  border-bottom-color: oklch(0.68 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.68 0 0);
  border-right-color: oklch(0.68 0 0);
  border-top-color: oklch(0.68 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .footnotes {
  border-top-color: oklch(0.98 0 0);
  color: oklch(0.98 0 0);
}

body .transclude {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

body .transclude-inner {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: oklch(0.68 0 0);
  text-decoration: line-through oklch(0.68 0 0);
  text-decoration-color: oklch(0.68 0 0);
}

body input[type=checkbox] {
  border-bottom-color: oklch(0.48 0 0);
  border-bottom-left-radius: 800px;
  border-bottom-right-radius: 800px;
  border-left-color: oklch(0.48 0 0);
  border-right-color: oklch(0.48 0 0);
  border-top-color: oklch(0.48 0 0);
  border-top-left-radius: 800px;
  border-top-right-radius: 800px;
  margin-right: 8.64px;
}

body li.task-list-item[data-task='!'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='*'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='-'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='/'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='>'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='?'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='I'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='S'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='b'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='c'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='d'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='f'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='i'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='k'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='l'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='p'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='u'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body li.task-list-item[data-task='w'] {
  color: oklch(0.98 0 0);
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(0, 191, 111);
  border-left-color: rgb(0, 191, 111);
  border-right-color: rgb(0, 191, 111);
  border-top-color: rgb(0, 191, 111);
  gap: 8px;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 6px;
}

body .callout > .callout-content {
  background-color: oklch(0.17 0 0);
  padding-left: 16px;
  padding-right: 16px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 91, 197, 219;
  background-color: rgba(91, 197, 219, 0.125);
  border-bottom-color: oklch(0.769454 0.101799 213.329);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(91, 197, 219);
  border-right-color: oklch(0.769454 0.101799 213.329);
  border-top-color: oklch(0.769454 0.101799 213.329);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="bug"] {
  --callout-color: 164, 103, 80;
  background-color: rgba(164, 103, 80, 0.125);
  border-bottom-color: oklch(0.574652 0.0862245 41.3449);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(164, 103, 80);
  border-right-color: oklch(0.574652 0.0862245 41.3449);
  border-top-color: oklch(0.574652 0.0862245 41.3449);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="danger"] {
  --callout-color: 241, 0, 34;
  background-color: rgba(241, 0, 34, 0.125);
  border-bottom-color: oklch(0.603065 0.245145 26.0471);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(241, 0, 34);
  border-right-color: oklch(0.603065 0.245145 26.0471);
  border-top-color: oklch(0.603065 0.245145 26.0471);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="example"] {
  --callout-color: 125, 84, 178;
  background-color: rgba(125, 84, 178, 0.125);
  border-bottom-color: oklch(0.533415 0.145739 301.819);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(125, 84, 178);
  border-right-color: oklch(0.533415 0.145739 301.819);
  border-top-color: oklch(0.533415 0.145739 301.819);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="failure"] {
  --callout-color: 161, 40, 100;
  background-color: rgba(161, 40, 100, 0.125);
  border-bottom-color: oklch(0.486186 0.165241 354.996);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(161, 40, 100);
  border-right-color: oklch(0.486186 0.165241 354.996);
  border-top-color: oklch(0.486186 0.165241 354.996);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="info"] {
  --callout-color: 0, 170, 199;
  background-color: rgba(0, 170, 199, 0.125);
  border-bottom-color: oklch(0.67965 0.120454 215.668);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 170, 199);
  border-right-color: oklch(0.67965 0.120454 215.668);
  border-top-color: oklch(0.67965 0.120454 215.668);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="note"] {
  --callout-color: 0, 191, 111;
  background-color: rgba(0, 191, 111, 0.125);
  border-bottom-color: oklch(0.706959 0.173724 155.295);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 111);
  border-right-color: oklch(0.706959 0.173724 155.295);
  border-top-color: oklch(0.706959 0.173724 155.295);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="question"] {
  --callout-color: 160, 199, 92;
  background-color: rgba(160, 199, 92, 0.125);
  border-bottom-color: oklch(0.778552 0.142252 126.135);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(160, 199, 92);
  border-right-color: oklch(0.778552 0.142252 126.135);
  border-top-color: oklch(0.778552 0.142252 126.135);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="quote"] {
  --callout-color: 161, 169, 173;
  background-color: rgba(161, 169, 173, 0.125);
  border-bottom-color: oklch(0.729631 0.0107511 229.015);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(161, 169, 173);
  border-right-color: oklch(0.729631 0.0107511 229.015);
  border-top-color: oklch(0.729631 0.0107511 229.015);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="success"] {
  --callout-color: 0, 158, 76;
  background-color: rgba(0, 158, 76, 0.125);
  border-bottom-color: oklch(0.611761 0.164617 150.979);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 158, 76);
  border-right-color: oklch(0.611761 0.164617 150.979);
  border-top-color: oklch(0.611761 0.164617 150.979);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="tip"] {
  --callout-color: 34, 148, 1;
  background-color: rgba(34, 148, 1, 0.125);
  border-bottom-color: oklch(0.58165 0.190605 140.918);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(34, 148, 1);
  border-right-color: oklch(0.58165 0.190605 140.918);
  border-top-color: oklch(0.58165 0.190605 140.918);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="todo"] {
  --callout-color: 0, 170, 199;
  background-color: rgba(0, 170, 199, 0.125);
  border-bottom-color: oklch(0.67965 0.120454 215.668);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 170, 199);
  border-right-color: oklch(0.67965 0.120454 215.668);
  border-top-color: oklch(0.67965 0.120454 215.668);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 182, 26;
  background-color: rgba(255, 182, 26, 0.125);
  border-bottom-color: oklch(0.823912 0.166913 78.6248);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 182, 26);
  border-right-color: oklch(0.823912 0.166913 78.6248);
  border-top-color: oklch(0.823912 0.166913 78.6248);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    search: `body .search > .search-button {
  background-color: oklch(0.15 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.3 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.3 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: oklch(0.98 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body .search > .search-container > .search-space {
  background-color: oklch(0.13 0 0);
  border-bottom-color: oklch(0.38 0 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.38 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.38 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.38 0 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > * {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.98 0 0) none 0px;
  text-decoration: oklch(0.98 0 0);
  text-decoration-color: oklch(0.98 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0.98 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0.98 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: oklch(0.98 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: oklch(0.98 0 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.38 0 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.38 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.38 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.38 0 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: oklch(0.19 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: oklch(0.98 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.98 0 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.98 0 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body a.internal.tag-link::before {
  color: oklch(0.707 0.1737 155.3);
}

body h1 {
  color: oklch(0.975 0.03 202.51);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

body h2 {
  color: oklch(0.3 0.03 155.3);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

body h2.page-title, h2.page-title a {
  color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body h3 {
  color: oklch(0.3 0.03 79.6);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

body h4 {
  color: oklch(0.975 0.03 202.51);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

body h5 {
  color: oklch(0.3 0.03 155.3);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

body h6 {
  color: oklch(0.3 0.03 79.6);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

body hr {
  border-bottom-color: oklch(0.3 0 0);
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 0, 191, 111;
  border-bottom-color: oklch(0.706959 0.173724 155.295);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 111);
  border-right-color: oklch(0.706959 0.173724 155.295);
  border-top-color: oklch(0.706959 0.173724 155.295);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: oklch(0.13 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.13 0 0);
}

body ::-webkit-scrollbar-corner {
  background: oklch(0.13 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.13 0 0);
}

body ::-webkit-scrollbar-thumb {
  background: oklch(0.13 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.13 0 0);
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.13 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.13 0 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.13 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.13 0 0);
}

body ::-webkit-scrollbar-track {
  background: oklch(0.13 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.13 0 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  text-decoration: oklch(0.68 0 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  text-decoration: oklch(0.68 0 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  text-decoration: oklch(0.68 0 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: oklch(0.98 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.98 0 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.68 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.68 0 0);
  border-right-color: oklch(0.68 0 0);
  border-top-color: oklch(0.68 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.68 0 0);
}`,
    footer: `body footer {
  background-color: oklch(0.19 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-right-width: 1px;
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body footer ul li a {
  color: oklch(0.68 0 0);
  text-decoration: oklch(0.68 0 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: oklch(0.98 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  color: oklch(0.98 0 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.68 0 0);
  text-decoration: oklch(0.68 0 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}`,
    listPage: `body li.section-li {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

body li.section-li > .section .meta {
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.68 0 0);
  text-decoration: oklch(0.68 0 0);
}

body ul.section-ul {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: oklch(0.707 0.1737 155.3);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.707 0.1737 155.3);
  border-right-color: oklch(0.707 0.1737 155.3);
  border-top-color: oklch(0.707 0.1737 155.3);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.707 0.1737 155.3);
}

body .darkmode svg {
  color: oklch(0.707 0.1737 155.3);
  stroke: oklch(0.707 0.1737 155.3);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: oklch(0.68 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.68 0 0);
  border-right-color: oklch(0.68 0 0);
  border-top-color: oklch(0.68 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.68 0 0);
}

body .breadcrumb-element p {
  color: oklch(0.48 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}`,
    misc: `body .katex-display {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  color: oklch(0.98 0 0);
}

body .metadata {
  background-color: oklch(0.17 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.68 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body .metadata-properties {
  border-bottom-color: oklch(0.68 0 0);
  border-left-color: oklch(0.68 0 0);
  border-right-color: oklch(0.68 0 0);
  border-top-color: oklch(0.68 0 0);
  color: oklch(0.68 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body .navigation-progress {
  background-color: oklch(0.19 0 0);
}

body .page-header h2.page-title {
  color: oklch(0.98 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body abbr {
  color: oklch(0.98 0 0);
  text-decoration: underline dotted oklch(0.98 0 0);
}

body details {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

body input[type=text] {
  border-bottom-color: oklch(0.68 0 0);
  border-left-color: oklch(0.68 0 0);
  border-right-color: oklch(0.68 0 0);
  border-top-color: oklch(0.68 0 0);
  color: oklch(0.68 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body kbd {
  background-color: oklch(0.18 0 0);
  border-bottom-color: oklch(0.98 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: oklch(0.98 0 0);
  font-family: "??", "DM Mono", "DM Mono";
  padding-bottom: 2px;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 2px;
}

body progress {
  border-bottom-color: oklch(0.98 0 0);
  border-left-color: oklch(0.98 0 0);
  border-right-color: oklch(0.98 0 0);
  border-top-color: oklch(0.98 0 0);
}

body sub {
  color: oklch(0.98 0 0);
}

body summary {
  color: oklch(0.98 0 0);
}

body sup {
  color: oklch(0.98 0 0);
}`,
  },
  light: {
    base: `:root:root {
  --PComm001-col-today: oklch(40.14% 0.0638 202.51deg);
  --PComm001-col-year: oklch(40.14% 0.0638 202.51deg);
  --PComm002-sp-maxheight: 33vh;
  --PComm002-wp-maxheight: 33vh;
  --PComm007-toolbar-justification: left;
  --PComm007-toolbar-title-justification: 0 auto 0 0;
  --account-scrollbar-border: 2px;
  --account-scrollbar-size: 8px;
  --advanced-tables-helper-size: 28px;
  --alh-ext-length: max(32px 32px, 50vw - 350px);
  --aside-float: right;
  --aside-infobox-float: right;
  --aside-margin-left: 0.75rem;
  --aside-margin-right: 0;
  --aside-padding: 12px;
  --aside-text-align: left;
  --aspect-ratio-bw-iframe: auto 16/9;
  --background-modifier-active-hover: oklch(from oklch(40.14% 0.0638 202.51deg) l c h / 10%);
  --background-modifier-border: oklch(0.8 0 0);
  --background-modifier-border-focus: oklch(0.6 0 0);
  --background-modifier-border-hover: oklch(0.7 0 0);
  --background-modifier-box-shadow: none;
  --background-modifier-form-field: oklch(0.99 0 0);
  --background-modifier-form-field-hover: oklch(0.99 0 0);
  --background-modifier-message: rgb(0 0 0 / 80%);
  --background-primary: oklch(1 0 0);
  --background-primary-alt: oklch(0.98 0 0);
  --background-secondary: oklch(0.95 0 0);
  --background-secondary-alt: oklch(0.93 0 0);
  --bases-cards-background: oklch(1 0 0);
  --bases-cards-cover-background: oklch(0.98 0 0);
  --bases-cards-radius: 6px;
  --bases-cards-shadow: 0 0 0 1px oklch(0.8 0 0);
  --bases-cards-shadow-hover: 0 0 0 1px oklch(0.7 0 0);
  --bases-embed-border-color: oklch(0.8 0 0);
  --bases-embed-border-radius: 3px;
  --bases-group-heading-property-color: oklch(0.3 0 0);
  --bases-table-border-color: oklch(0.8 0 0);
  --bases-table-cell-background-active: oklch(1 0 0);
  --bases-table-cell-background-disabled: oklch(0.98 0 0);
  --bases-table-cell-background-selected: oklch(from oklch(40.14% 0.0638 202.51deg) l c h / 10%);
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(0.6 0 0);
  --bases-table-cell-shadow-focus: 0 0 0 2px oklch(70.7% 0.1737 155.3deg);
  --bases-table-container-border-radius: 3px;
  --bases-table-group-background: oklch(0.98 0 0);
  --bases-table-header-background: oklch(1 0 0);
  --bases-table-header-color: oklch(0.3 0 0);
  --bases-table-summary-background: oklch(1 0 0);
  --blockquote-background-color: oklch(0.98 0 0);
  --blockquote-border-color: oklch(0.93 0 0);
  --blockquote-border-thickness: 4px;
  --blur-0: blur(0.5px);
  --blur-1: blur(1px);
  --blur-2: blur(2px);
  --blur-4: blur(4px);
  --blur-8: blur(8px);
  --blur-background: color-mix(in srgb, oklch(1 0 0) 65%, transparent) linear-gradient(oklch(1 0 0), color-mix(in srgb, oklch(1 0 0) 65%, transparent));
  --border-scrollbar-non-native: 2px;
  --brightness-25: brightness(25%);
  --brightness-50: brightness(50%);
  --brightness-75: brightness(75%);
  --button-radius: 3px;
  --callout-blend-mode: normal;
  --callout-border-base-width: 0px;
  --callout-border-left-extra: 5px;
  --callout-border-left-width: 5px;
  --callout-border-other-width: 0px;
  --callout-columns-margin-top: 0.75em;
  --callout-gap: 0.5em;
  --callout-radius: 3px;
  --callout-title-gap: 0.75em;
  --canvas-background: oklch(1 0 0);
  --canvas-card-label-color: oklch(0.6 0 0);
  --canvas-controls-radius: 3px;
  --canvas-dot-pattern: oklch(0.88 0 0);
  --canvas-dot-size: 0.7;
  --canvas-group-font-size: 1.5em;
  --canvas-node-font-size: 1em;
  --caret-color: oklch(0 0 0);
  --ch-color-base-d-c-00: 0;
  --ch-color-base-d-c-05: 0;
  --ch-color-base-d-c-10: 0;
  --ch-color-base-d-c-100: 0;
  --ch-color-base-d-c-15: 0;
  --ch-color-base-d-c-20: 0;
  --ch-color-base-d-c-25: 0;
  --ch-color-base-d-c-30: 0;
  --ch-color-base-d-c-35: 0;
  --ch-color-base-d-c-40: 0;
  --ch-color-base-d-c-45: 0;
  --ch-color-base-d-c-50: 0;
  --ch-color-base-d-c-55: 0;
  --ch-color-base-d-c-60: 0;
  --ch-color-base-d-c-65: 0;
  --ch-color-base-d-c-70: 0;
  --ch-color-base-d-c-75: 0;
  --ch-color-base-d-c-80: 0;
  --ch-color-base-d-c-85: 0;
  --ch-color-base-d-c-90: 0;
  --ch-color-base-d-c-95: 0;
  --ch-color-base-d-c-pax-delta: 0;
  --ch-color-base-d-c-pax-num: 0.035;
  --ch-color-base-d-h-00: 0;
  --ch-color-base-d-h-05: 0;
  --ch-color-base-d-h-10: 0;
  --ch-color-base-d-h-100: 0;
  --ch-color-base-d-h-15: 0;
  --ch-color-base-d-h-20: 0;
  --ch-color-base-d-h-25: 0;
  --ch-color-base-d-h-30: 0;
  --ch-color-base-d-h-35: 0;
  --ch-color-base-d-h-40: 0;
  --ch-color-base-d-h-45: 0;
  --ch-color-base-d-h-50: 0;
  --ch-color-base-d-h-55: 0;
  --ch-color-base-d-h-60: 0;
  --ch-color-base-d-h-65: 0;
  --ch-color-base-d-h-70: 0;
  --ch-color-base-d-h-75: 0;
  --ch-color-base-d-h-80: 0;
  --ch-color-base-d-h-85: 0;
  --ch-color-base-d-h-90: 0;
  --ch-color-base-d-h-95: 0;
  --ch-color-base-d-h-pax-delta: 0;
  --ch-color-base-d-h-pax-num: 270;
  --ch-color-base-d-l-00: 13%;
  --ch-color-base-d-l-05: 15%;
  --ch-color-base-d-l-10: 17%;
  --ch-color-base-d-l-100: 98%;
  --ch-color-base-d-l-15: 18%;
  --ch-color-base-d-l-20: 19%;
  --ch-color-base-d-l-25: 21%;
  --ch-color-base-d-l-30: 24%;
  --ch-color-base-d-l-35: 30%;
  --ch-color-base-d-l-40: 38%;
  --ch-color-base-d-l-45: 48%;
  --ch-color-base-d-l-50: 58%;
  --ch-color-base-d-l-55: 63%;
  --ch-color-base-d-l-60: 68%;
  --ch-color-base-d-l-65: 78%;
  --ch-color-base-d-l-70: 86%;
  --ch-color-base-d-l-75: 90%;
  --ch-color-base-d-l-80: 92%;
  --ch-color-base-d-l-85: 94%;
  --ch-color-base-d-l-90: 95%;
  --ch-color-base-d-l-95: 96%;
  --ch-color-base-l-c-00: 0;
  --ch-color-base-l-c-00-set: 0;
  --ch-color-base-l-c-05: 0;
  --ch-color-base-l-c-05-set: 0;
  --ch-color-base-l-c-10: 0;
  --ch-color-base-l-c-10-set: 0;
  --ch-color-base-l-c-100: 0;
  --ch-color-base-l-c-100-set: 0;
  --ch-color-base-l-c-15: 0;
  --ch-color-base-l-c-15-set: 0;
  --ch-color-base-l-c-20: 0;
  --ch-color-base-l-c-20-set: 0;
  --ch-color-base-l-c-25: 0;
  --ch-color-base-l-c-25-set: 0;
  --ch-color-base-l-c-30: 0;
  --ch-color-base-l-c-30-set: 0;
  --ch-color-base-l-c-35: 0;
  --ch-color-base-l-c-35-set: 0;
  --ch-color-base-l-c-40: 0;
  --ch-color-base-l-c-40-set: 0;
  --ch-color-base-l-c-45: 0;
  --ch-color-base-l-c-45-set: 0;
  --ch-color-base-l-c-50: 0;
  --ch-color-base-l-c-50-set: 0;
  --ch-color-base-l-c-55: 0;
  --ch-color-base-l-c-55-set: 0;
  --ch-color-base-l-c-60: 0;
  --ch-color-base-l-c-60-set: 0;
  --ch-color-base-l-c-65: 0;
  --ch-color-base-l-c-65-set: 0;
  --ch-color-base-l-c-70: 0;
  --ch-color-base-l-c-70-set: 0;
  --ch-color-base-l-c-75: 0;
  --ch-color-base-l-c-75-set: 0;
  --ch-color-base-l-c-80: 0;
  --ch-color-base-l-c-80-set: 0;
  --ch-color-base-l-c-85: 0;
  --ch-color-base-l-c-85-set: 0;
  --ch-color-base-l-c-90: 0;
  --ch-color-base-l-c-90-set: 0;
  --ch-color-base-l-c-95: 0;
  --ch-color-base-l-c-95-set: 0;
  --ch-color-base-l-c-pax-delta: 0;
  --ch-color-base-l-c-pax-num: 0.035;
  --ch-color-base-l-h-00: 0;
  --ch-color-base-l-h-00-set: 0;
  --ch-color-base-l-h-05: 0;
  --ch-color-base-l-h-05-set: 0;
  --ch-color-base-l-h-10: 0;
  --ch-color-base-l-h-10-set: 0;
  --ch-color-base-l-h-100: 0;
  --ch-color-base-l-h-100-set: 0;
  --ch-color-base-l-h-15: 0;
  --ch-color-base-l-h-15-set: 0;
  --ch-color-base-l-h-20: 0;
  --ch-color-base-l-h-20-set: 0;
  --ch-color-base-l-h-25: 0;
  --ch-color-base-l-h-25-set: 0;
  --ch-color-base-l-h-30: 0;
  --ch-color-base-l-h-30-set: 0;
  --ch-color-base-l-h-35: 0;
  --ch-color-base-l-h-35-set: 0;
  --ch-color-base-l-h-40: 0;
  --ch-color-base-l-h-40-set: 0;
  --ch-color-base-l-h-45: 0;
  --ch-color-base-l-h-45-set: 0;
  --ch-color-base-l-h-50: 0;
  --ch-color-base-l-h-50-set: 0;
  --ch-color-base-l-h-55: 0;
  --ch-color-base-l-h-55-set: 0;
  --ch-color-base-l-h-60: 0;
  --ch-color-base-l-h-60-set: 0;
  --ch-color-base-l-h-65: 0;
  --ch-color-base-l-h-65-set: 0;
  --ch-color-base-l-h-70: 0;
  --ch-color-base-l-h-70-set: 0;
  --ch-color-base-l-h-75: 0;
  --ch-color-base-l-h-75-set: 0;
  --ch-color-base-l-h-80: 0;
  --ch-color-base-l-h-80-set: 0;
  --ch-color-base-l-h-85: 0;
  --ch-color-base-l-h-85-set: 0;
  --ch-color-base-l-h-90: 0;
  --ch-color-base-l-h-90-set: 0;
  --ch-color-base-l-h-95: 0;
  --ch-color-base-l-h-95-set: 0;
  --ch-color-base-l-h-pax-delta: 0;
  --ch-color-base-l-h-pax-num: 270;
  --ch-color-base-l-l-00: 1;
  --ch-color-base-l-l-00-set: 1;
  --ch-color-base-l-l-05: 0.99;
  --ch-color-base-l-l-05-set: 0.99;
  --ch-color-base-l-l-10: 0.98;
  --ch-color-base-l-l-10-set: 0.98;
  --ch-color-base-l-l-100: 0;
  --ch-color-base-l-l-100-set: 0;
  --ch-color-base-l-l-15: 0.97;
  --ch-color-base-l-l-15-set: 0.97;
  --ch-color-base-l-l-20: 0.95;
  --ch-color-base-l-l-20-set: 0.95;
  --ch-color-base-l-l-25: 0.93;
  --ch-color-base-l-l-25-set: 0.93;
  --ch-color-base-l-l-30: 0.88;
  --ch-color-base-l-l-30-set: 0.88;
  --ch-color-base-l-l-35: 0.8;
  --ch-color-base-l-l-35-set: 0.8;
  --ch-color-base-l-l-40: 0.7;
  --ch-color-base-l-l-40-set: 0.7;
  --ch-color-base-l-l-45: 0.6;
  --ch-color-base-l-l-45-set: 0.6;
  --ch-color-base-l-l-50: 0.5;
  --ch-color-base-l-l-50-set: 0.5;
  --ch-color-base-l-l-55: 0.4;
  --ch-color-base-l-l-55-set: 0.4;
  --ch-color-base-l-l-60: 0.3;
  --ch-color-base-l-l-60-set: 0.3;
  --ch-color-base-l-l-65: 0.2;
  --ch-color-base-l-l-65-set: 0.2;
  --ch-color-base-l-l-70: 0.12;
  --ch-color-base-l-l-70-set: 0.12;
  --ch-color-base-l-l-75: 0.07;
  --ch-color-base-l-l-75-set: 0.07;
  --ch-color-base-l-l-80: 0.05;
  --ch-color-base-l-l-80-set: 0.05;
  --ch-color-base-l-l-85: 0.03;
  --ch-color-base-l-l-85-set: 0.03;
  --ch-color-base-l-l-90: 0.02;
  --ch-color-base-l-l-90-set: 0.02;
  --ch-color-base-l-l-95: 0.01;
  --ch-color-base-l-l-95-set: 0.01;
  --checkbox-border-color: oklch(0.6 0 0);
  --checkbox-border-color-hover: oklch(0.3 0 0);
  --checkbox-color: oklch(70.7% 0.1737 155.3deg);
  --checkbox-color-hover: oklch(82.77% 0.1667 79.6deg);
  --checkbox-margin-inline-end: 0.25em;
  --checkbox-marker-color: oklch(1 0 0);
  --checkbox-radius: 50rem;
  --checklist-done-color: oklch(0.3 0 0);
  --clickable-icon-radius: 3px;
  --code-background: oklch(0.97 0 0);
  --code-border-color: oklch(0.8 0 0);
  --code-comment: oklch(0.6 0 0);
  --code-normal: oklch(0 0 0);
  --code-punctuation: oklch(0.3 0 0);
  --code-radius: 3px;
  --col-background-activeline: oklch(from oklch(0.5 0 0) l c h / calc(alpha - calc(1 - 0.25)));
  --col-base-alpha-alh: 0.25;
  --col-base-bg-alh: oklch(0.5 0 0);
  --col-frontmatter-atom: oklch(40.14% 0.0638 202.51deg);
  --col-frontmatter-default: oklch(82.77% 0.1667 79.6deg);
  --col-frontmatter-meta: oklch(70.7% 0.1737 155.3deg);
  --col-frontmatter-number: oklch(82.77% 0.1667 79.6deg);
  --col-h1: oklch(from oklch(40.14% 0.0638 202.51deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h);
  --col-h1-bg: oklch(40.14% 0.0638 202.51deg);
  --col-h2: oklch(from oklch(70.7% 0.1737 155.3deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h);
  --col-h2-bg: oklch(70.7% 0.1737 155.3deg);
  --col-h3: oklch(from oklch(82.77% 0.1667 79.6deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h);
  --col-h3-bg: oklch(82.77% 0.1667 79.6deg);
  --col-h4: oklch(from oklch(40.14% 0.0638 202.51deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h);
  --col-h4-bg: oklch(40.14% 0.0638 202.51deg);
  --col-h5: oklch(from oklch(70.7% 0.1737 155.3deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h);
  --col-h5-bg: oklch(70.7% 0.1737 155.3deg);
  --col-h6: oklch(from oklch(82.77% 0.1667 79.6deg) clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975) 0.03 h);
  --col-h6-bg: oklch(82.77% 0.1667 79.6deg);
  --col-highlight-0: rgb(0, 0, 0);
  --col-highlight-0-org: rgb(0, 0, 0);
  --col-highlight-1: rgb(0, 0, 0);
  --col-highlight-1-org: rgb(0, 0, 0);
  --col-highlight-2: rgb(0, 0, 0);
  --col-highlight-2-org: rgb(0, 0, 0);
  --col-highlight-3: rgb(0, 0, 0);
  --col-highlight-3-org: rgb(0, 0, 0);
  --col-highlight-text: rgb(0, 0, 0);
  --col-highlight-text-pickr: rgb(0, 0, 0);
  --col-tab-style: oklch(40.14% 0.0638 202.51deg);
  --col-titlebar-accent: oklch(40.14% 0.0638 202.51deg);
  --collapse-icon-color: oklch(0.6 0 0);
  --collapse-icon-color-collapsed: oklch(40.14% 0.0638 202.51deg);
  --color-accent: oklch(40.14% 0.0638 202.51deg);
  --color-accent-1: oklch(70.7% 0.1737 155.3deg);
  --color-accent-2: oklch(82.77% 0.1667 79.6deg);
  --color-background-progress-bar-message: rgb(0, 0, 0);
  --color-base-00: oklch(1 0 0);
  --color-base-05: oklch(0.99 0 0);
  --color-base-10: oklch(0.98 0 0);
  --color-base-100: oklch(0 0 0);
  --color-base-15: oklch(0.97 0 0);
  --color-base-20: oklch(0.95 0 0);
  --color-base-25: oklch(0.93 0 0);
  --color-base-30: oklch(0.88 0 0);
  --color-base-35: oklch(0.8 0 0);
  --color-base-40: oklch(0.7 0 0);
  --color-base-45: oklch(0.6 0 0);
  --color-base-50: oklch(0.5 0 0);
  --color-base-55: oklch(0.4 0 0);
  --color-base-60: oklch(0.3 0 0);
  --color-base-65: oklch(0.2 0 0);
  --color-base-70: oklch(0.12 0 0);
  --color-base-75: oklch(0.07 0 0);
  --color-base-80: oklch(0.05 0 0);
  --color-base-85: oklch(0.03 0 0);
  --color-base-90: oklch(0.02 0 0);
  --color-base-95: oklch(0.01 0 0);
  --color-bloemfontein: oklch(40.14% 0.0638 202.51deg);
  --color-l-accent: oklch(40.14% 0.0638 202.51deg);
  --color-l-accent-1: oklch(70.7% 0.1737 155.3deg);
  --color-l-accent-2: oklch(82.77% 0.1667 79.6deg);
  --color-red-2: oklch(from #e93147 calc(l - 0.1) c calc(h + 4));
  --color-selection: oklch(80.92% 0.170357 75.4802deg);
  --color-set-d-selection: oklch(80.92% 0.170357 75.4802deg);
  --color-set-l-selection: oklch(80.92% 0.170357 75.4802deg);
  --color-table-even: oklch(0.98 0 0);
  --color-table-head: oklch(0.95 0 0);
  --color-table-head-hover: rgba(0, 0, 0, 0.067);
  --color-table-odd: oklch(1 0 0);
  --cssc-banner-gradient-mask: linear-gradient(to bottom,
  black 0%,
  black 50%,
  oklch(0% 0 0deg / 80%) 75%,
  oklch(0% 0 0deg / 50%) 80%,
  oklch(0% 0 0deg / 30%) 85%,
  oklch(0% 0 0deg / 15%) 90%,
  oklch(0% 0 0deg / 8%) 95%,
  transparent 100%
  );
  --cssc-banner-height: 200px;
  --cssc-banner-residual: 0px;
  --cssc-cornell-align-left: max(125px, 25%);
  --cssc-cornell-aside-max: 25%;
  --cssc-cornell-aside-min: 125px;
  --cssc-cornell-gap: 0.75rem;
  --cssc-cornell-text-align: justify;
  --cssc-cornell-text-align-last: right;
  --cssc-latex-font-reading: "MathJax Main", "MJXZERO", "MJXTEX";
  --cssc-latex-font-size: 14pt;
  --cssc-latex-font-source: "DM Mono" ,"MathJax Main", "MJXZERO", "MJXTEX";
  --cssc-latex-text-indent: 0em;
  --default-font: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --distant-opacity: 0.2;
  --divider-color: oklch(0.8 0 0);
  --divider-color-hover: oklch(70.7% 0.1737 155.3deg);
  --dropdown-background: oklch(0.95 0 0);
  --dropdown-background-hover: oklch(0.88 0 0);
  --elements-padding: 4px;
  --embed-block-shadow-hover: 0 0 0 1px oklch(0.8 0 0), inset 0 0 0 1px oklch(0.8 0 0);
  --embed-border-start: 2px solid oklch(70.7% 0.1737 155.3deg);
  --empty-state-background: oklch(0.98 0 0);
  --file-header-background: oklch(1 0 0);
  --file-header-background-focused: oklch(1 0 0);
  --file-header-border: 0px;
  --file-header-font: '??', "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --flair-background: oklch(0.95 0 0);
  --flair-color: oklch(0 0 0);
  --font-editor: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --font-editor-m: "Inter 4.1", "DM Sans", "Manrope";
  --font-heading: "Manrope", "Inter 4.1", "DM Sans";
  --font-interface: '??', "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --font-interface-theme: "Manrope", "Inter 4.1", "DM Sans";
  --font-menu: "Manrope", "Inter 4.1", "DM Sans";
  --font-menu-m: "Manrope", "Inter 4.1", "DM Sans";
  --font-mermaid: "Inter 4.1", "DM Sans", "Manrope";
  --font-monospace: '??', "DM Mono", "DM Mono";
  --font-monospace-theme: "DM Mono";
  --font-print: '??', '??', "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", 'Arial';
  --font-reveal: "Inter 4.1", "DM Sans", "Manrope";
  --font-text: '??', "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", '??', "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --font-text-theme: "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --font-ui: "Manrope", "Inter 4.1", "DM Sans";
  --font-ui-m: "Manrope", "Inter 4.1", "DM Sans";
  --footnote-divider-color: oklch(0.8 0 0);
  --footnote-id-color: oklch(0.3 0 0);
  --footnote-id-color-no-occurrences: oklch(0.6 0 0);
  --footnote-radius: 3px;
  --gap-callouts-img-grid: 4px;
  --global-block-width-mode: auto;
  --graph-line: oklch(0.8 0 0);
  --graph-node: oklch(0.3 0 0);
  --graph-node-focused: oklch(40.14% 0.0638 202.51deg);
  --graph-node-unresolved: oklch(0.6 0 0);
  --graph-text: oklch(0 0 0);
  --grid-columns-container-comm-modal: 5;
  --h1-size: 1.8em;
  --h1-weight: 600;
  --h2-size: 1.6em;
  --h2-weight: 600;
  --h3-size: 1.45em;
  --h3-weight: 600;
  --h4-size: 1.3em;
  --h4-weight: 500;
  --h5-size: 1.15em;
  --h5-weight: 500;
  --h6-size: 1.05em;
  --h6-weight: 500;
  --header-height: 36px;
  --header-icon-size: 16px;
  --header-icon-size-hover: 19px;
  --header-margin: 4px;
  --header-margin-half: 2px;
  --header-padding: 6px;
  --header-padding-hover: 4.5px;
  --heading-formatting: oklch(0.6 0 0);
  --heading-spacing: 0;
  --height-hover-sd: 50%;
  --height-norm-sd: 25%;
  --height-progress-bar-subline: 4px;
  --highlight-mix-blend-mode: normal;
  --hover-diff: 1.5px;
  --hover-diff-sidebar: 1.25px;
  --hover-diff-tab: 1.75px;
  --hover-frac: 0.25;
  --hover-frac-sidebar: 0.25;
  --hover-frac-tab: 0.25;
  --hr-color: oklch(0.8 0 0);
  --icon-color: oklch(0.3 0 0);
  --icon-color-active: oklch(40.14% 0.0638 202.51deg);
  --icon-color-focused: oklch(40.14% 0.0638 202.51deg);
  --icon-color-hover: oklch(70.7% 0.1737 155.3deg);
  --icon-diff: 2px;
  --icon-diff-sidebar: 2px;
  --icon-width-sidebar: 24%;
  --indentation-guide-editing-indent: 1em;
  --infobox-max-width: 50%;
  --infobox-set-width: 50%;
  --infobox-title-font-size: 1.6em;
  --inline-title-size: 1.8em;
  --inline-title-weight: 600;
  --input-border-width: 0;
  --input-date-separator: oklch(0.6 0 0);
  --input-height: 28px;
  --input-placeholder-color: oklch(0.6 0 0);
  --input-radius: 3px;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: oklch(70.7% 0.1737 155.3deg);
  --interactive-accent-hover: oklch(82.77% 0.1667 79.6deg);
  --interactive-focus: oklch(0.7 0 0);
  --interactive-hover: oklch(0.88 0 0);
  --interactive-normal: oklch(0.95 0 0);
  --l: clamp(0.3, (l / 0.7 - 1) * -infinity, 0.975);
  --l-threshold: 0.7;
  --link-color: oklch(40.14% 0.0638 202.51deg);
  --link-color-hover: oklch(82.77% 0.1667 79.6deg);
  --link-external-color: oklch(40.14% 0.0638 202.51deg);
  --link-external-color-hover: oklch(82.77% 0.1667 79.6deg);
  --link-unresolved-color: oklch(40.14% 0.0638 202.51deg);
  --link-unresolved-decoration-color: oklch(from oklch(70.7% 0.1737 155.3deg) l c h / 30%);
  --list-marker-color: oklch(0.6 0 0);
  --list-marker-color-collapsed: oklch(40.14% 0.0638 202.51deg);
  --list-marker-color-hover: oklch(0.3 0 0);
  --logo-icon-filled: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'  class='logo-full'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='82.85' y1='30.41' x2='51.26' y2='105.9' gradientTransform='matrix(1, 0, 0, -1, -22.41, 110.97)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%236c56cc'%3E%3C/stop%3E%3Cstop offset='1' stop-color='%239785e5'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points='62.61,0 30.91,17.52 18,45.45 37.57,90.47 65.35,100 70.44,89.8 81,26.39 62.61,0' fill='%2334208c'%3E%3C/polygon%3E%3Cpolygon points='81,26.39 61.44,14.41 34.43,35.7 65.35,100 70.44,89.8 81,26.39' fill='url(%23a)'%3E%3C/polygon%3E%3Cpolygon points='81,26.39 81,26.39 62.61,0 61.44,14.41 81,26.39' fill='%23af9ff4'%3E%3C/polygon%3E%3Cpolygon points='61.44,14.41 62.61,0 30.91,17.52 34.43,35.7 61.44,14.41' fill='%234a37a0'%3E%3C/polygon%3E%3Cpolygon points='34.43,35.7 37.57,90.47 65.35,100 34.43,35.7' fill='%234a37a0'%3E%3C/polygon%3E%3C/svg%3E");
  --logo-icon-filled-flat: url("data:image/svg+xml,%3Csvg alt='Obsidian' viewBox='0 0 20 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23A88BFA' d='m6.91927 14.5955c.64053-.1907 1.67255-.4839 2.85923-.5565-.71191-1.7968-.88376-3.3691-.74554-4.76905.15962-1.61678.72977-2.9662 1.28554-4.11442.1186-.24501.2326-.47313.3419-.69198.1549-.30984.3004-.60109.4365-.8953.2266-.48978.3948-.92231.4798-1.32416.0836-.39515.0841-.74806-.0148-1.08657-.099-.338982-.3093-.703864-.7093-1.1038132-.5222-.1353116-1.1017-.0165173-1.53613.3742922l-5.15591 4.638241c-.28758.25871-.47636.60929-.53406.99179l-.44455 2.94723c.69903.6179 2.42435 2.41414 3.47374 4.90644.09364.2224.1819.4505.26358.6838z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m2.97347 10.3512c-.02431.1037-.05852.205-.10221.3024l-2.724986 6.0735c-.279882.6238-.15095061 1.3552.325357 1.8457l4.288349 4.4163c2.1899-3.2306 1.87062-6.2699.87032-8.6457-.75846-1.8013-1.90801-3.2112-2.65683-3.9922z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m5.7507 23.5094c.07515.012.15135.0192.2281.0215.81383.0244 2.18251.0952 3.29249.2997.90551.1669 2.70051.6687 4.17761 1.1005 1.1271.3294 2.2886-.5707 2.4522-1.7336.1192-.8481.343-1.8075.7553-2.6869l-.0095.0033c-.6982-1.9471-1.5865-3.2044-2.5178-4.0073-.9284-.8004-1.928-1.1738-2.8932-1.3095-1.60474-.2257-3.07497.1961-4.00103.4682.55465 2.3107.38396 5.0295-1.48417 7.8441z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m17.3708 19.3102c.9267-1.3985 1.5868-2.4862 1.9352-3.0758.1742-.295.1427-.6648-.0638-.9383-.5377-.7126-1.5666-2.1607-2.1272-3.5015-.5764-1.3785-.6624-3.51876-.6673-4.56119-.0019-.39626-.1275-.78328-.3726-1.09465l-3.3311-4.23183c-.0117.19075-.0392.37998-.0788.56747-.1109.52394-.32 1.04552-.5585 1.56101-.1398.30214-.3014.62583-.4646.95284-.1086.21764-.218.4368-.3222.652-.5385 1.11265-1.0397 2.32011-1.1797 3.73901-.1299 1.31514.0478 2.84484.8484 4.67094.1333.0113.2675.0262.4023.0452 1.1488.1615 2.3546.6115 3.4647 1.5685.9541.8226 1.8163 2.0012 2.5152 3.6463z'%3E%3C/path%3E%3C/svg%3E");
  --logo-icon-filled-new: url("data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20height%3D%22100%25%22%20width%3D%22100%25%22%20viewBox%3D%220%200%20512%20512%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3CradialGradient%20id%3D%22logo-bottom-left%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-59%20-225%20150%20-39%20161.4%20470)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.4%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-opacity%3D%22.1%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-top-right%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(50%20-379%20280%2037%20360%20374.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.6%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.1%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-top-left%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(69%20-319%20218%2047%20175.4%20307)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.8%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.4%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-bottom-right%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-96%20-163%20187%20-111%20335.3%20512.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.3%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-opacity%3D%22.3%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-top-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-36%20166%20-112%20-24%20310%20128.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-left-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(88%2089%20-190%20187%20111%20220.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.4%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-bottom-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(9%20130%20-276%2020%20215%20284)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.3%22%2F%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22logo-middle-edge%22%20cx%3D%220%22%20cy%3D%220%22%20gradientTransform%3D%22matrix(-198%20-104%20327%20-623%20400%20399.2)%22%20gradientUnits%3D%22userSpaceOnUse%22%20r%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%22.5%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.2%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%22.3%22%2F%3E%3C%2FradialGradient%3E%3CclipPath%20id%3D%22clip%22%3E%3Cpath%20d%3D%22M.2.2h512v512H.2z%22%2F%3E%3C%2FclipPath%3E%3Cg%20clip-path%3D%22url(%23clip)%22%3E%3Cpath%20d%3D%22M382.3%20475.6c-3.1%2023.4-26%2041.6-48.7%2035.3-32.4-8.9-69.9-22.8-103.6-25.4l-51.7-4a34%2034%200%200%201-22-10.2l-89-91.7a34%2034%200%200%201-6.7-37.7s55-121%2057.1-127.3c2-6.3%209.6-61.2%2014-90.6%201.2-7.9%205-15%2011-20.3L248%208.9a34.1%2034.1%200%200%201%2049.6%204.3L386%20125.6a37%2037%200%200%201%207.6%2022.4c0%2021.3%201.8%2065%2013.6%2093.2%2011.5%2027.3%2032.5%2057%2043.5%2071.5a17.3%2017.3%200%200%201%201.3%2019.2%201494%201494%200%200%201-44.8%2070.6c-15%2022.3-21.9%2049.9-25%2073.1z%22%20fill%3D%22%236c31e3%22%2F%3E%3Cpath%20d%3D%22M165.9%20478.3c41.4-84%2040.2-144.2%2022.6-187-16.2-39.6-46.3-64.5-70-80-.6%202.3-1.3%204.4-2.2%206.5L60.6%20342a34%2034%200%200%200%206.6%2037.7l89.1%2091.7a34%2034%200%200%200%209.6%207z%22%20fill%3D%22url(%23logo-bottom-left)%22%2F%3E%3Cpath%20d%3D%22M278.4%20307.8c11.2%201.2%2022.2%203.6%2032.8%207.6%2034%2012.7%2065%2041.2%2090.5%2096.3%201.8-3.1%203.6-6.2%205.6-9.2a1536%201536%200%200%200%2044.8-70.6%2017%2017%200%200%200-1.3-19.2c-11-14.6-32-44.2-43.5-71.5-11.8-28.2-13.5-72-13.6-93.2%200-8.1-2.6-16-7.6-22.4L297.6%2013.2a34%2034%200%200%200-1.5-1.7%2096%2096%200%200%201%202%2054%20198.3%20198.3%200%200%201-17.6%2041.3l-7.2%2014.2a171%20171%200%200%200-19.4%2071c-1.2%2029.4%204.8%2066.4%2024.5%20115.8z%22%20fill%3D%22url(%23logo-top-right)%22%2F%3E%3Cpath%20d%3D%22M278.4%20307.8c-19.7-49.4-25.8-86.4-24.5-115.9a171%20171%200%200%201%2019.4-71c2.3-4.8%204.8-9.5%207.2-14.1%207.1-13.9%2014-27%2017.6-41.4a96%2096%200%200%200-2-54A34.1%2034.1%200%200%200%20248%209l-105.4%2094.8a34.1%2034.1%200%200%200-10.9%2020.3l-12.8%2085-.5%202.3c23.8%2015.5%2054%2040.4%2070.1%2080a147%20147%200%200%201%207.8%2024.8c28-6.8%2055.7-11%2082.1-8.3z%22%20fill%3D%22url(%23logo-top-left)%22%2F%3E%3Cpath%20d%3D%22M333.6%20511c22.7%206.2%2045.6-12%2048.7-35.4a187%20187%200%200%201%2019.4-63.9c-25.6-55-56.5-83.6-90.4-96.3-36-13.4-75.2-9-115%20.7%208.9%2040.4%203.6%2093.3-30.4%20162.2%204%201.8%208.1%203%2012.5%203.3%200%200%2024.4%202%2053.6%204.1%2029%202%2072.4%2017.1%20101.6%2025.2z%22%20fill%3D%22url(%23logo-bottom-right)%22%2F%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M254.1%20190c-1.3%2029.2%202.4%2062.8%2022.1%20112.1l-6.2-.5c-17.7-51.5-21.5-78-20.2-107.6a174.7%20174.7%200%200%201%2020.4-72c2.4-4.9%208-14.1%2010.5-18.8%207.1-13.7%2011.9-21%2016-33.6%205.7-17.5%204.5-25.9%203.8-34.1%204.6%2029.9-12.7%2056-25.7%2082.4a177.1%20177.1%200%200%200-20.7%2072z%22%20fill%3D%22url(%23logo-top-edge)%22%2F%3E%3Cpath%20d%3D%22M194.3%20293.4c2.4%205.4%204.6%209.8%206%2016.5L195%20311c-2.1-7.8-3.8-13.4-6.8-20-17.8-42-46.3-63.6-69.7-79.5%2028.2%2015.2%2057.2%2039%2075.7%2081.9z%22%20fill%3D%22url(%23logo-left-edge)%22%2F%3E%3Cpath%20d%3D%22M200.6%20315.1c9.8%2046-1.2%20104.2-33.6%20160.9%2027.1-56.2%2040.2-110.1%2029.3-160z%22%20fill%3D%22url(%23logo-bottom-edge)%22%2F%3E%3Cpath%20d%3D%22M312.5%20311c53.1%2019.9%2073.6%2063.6%2088.9%20100-19-38.1-45.2-80.3-90.8-96-34.8-11.8-64.1-10.4-114.3%201l-1.1-5c53.2-12.1%2081-13.5%20117.3%200z%22%20fill%3D%22url(%23logo-middle-edge)%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  --logo-icon-line: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z'%3E%3C/path%3E%3C/svg%3E");
  --logo-icon-line-new: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='none' stroke='black' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --magnifier-bw-bases: 1.5;
  --magnifier-bw-iframe: 1.5;
  --magnifier-bw-pdfembed: 1.5;
  --magnifier-bw-table: 1.5;
  --margin-callout: 0.75em;
  --medium-transition: 300ms ease-in-out;
  --menu-background: oklch(0.95 0 0);
  --menu-border-color: oklch(0.7 0 0);
  --menu-font: "Manrope", "Inter 4.1", "DM Sans";
  --menu-padding: 4px;
  --menu-radius: 6px;
  --menu-shadow: none;
  --metadata-border-color: oklch(0.8 0 0);
  --metadata-divider-color: oklch(0.8 0 0);
  --metadata-input-font: '??', "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --metadata-input-text-color: oklch(0 0 0);
  --metadata-label-font: '??', "Manrope", "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", "Manrope";
  --metadata-label-text-color: oklch(0.3 0 0);
  --metadata-label-text-color-hover: oklch(0.3 0 0);
  --metadata-padding: 0.25em 0.25em;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(0.6 0 0);
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(0.7 0 0);
  --metadata-property-radius: 3px;
  --metadata-property-radius-focus: 3px;
  --metadata-property-radius-hover: 3px;
  --mod-settings-left-column-spacing: 0px;
  --modal-background: oklch(1 0 0);
  --modal-border-color: oklch(0.7 0 0);
  --modal-border-width: 0;
  --modal-height-community-plugin: 85vh;
  --modal-height-community-theme: 85vh;
  --modal-height-publish: 85vh;
  --modal-height-settings: 85vh;
  --modal-radius: 6px;
  --modal-sidebar-background: oklch(0.95 0 0);
  --modal-width-community-plugin: 90vw;
  --modal-width-community-theme: 90vw;
  --modal-width-publish: 90vw;
  --modal-width-settings: 90vw;
  --nav-collapse-icon-color: oklch(0.6 0 0);
  --nav-collapse-icon-color-collapsed: oklch(0.6 0 0);
  --nav-heading-color: oklch(0 0 0);
  --nav-heading-color-collapsed: oklch(0.6 0 0);
  --nav-heading-color-collapsed-hover: oklch(0.3 0 0);
  --nav-heading-color-hover: oklch(0 0 0);
  --nav-item-background-selected: oklch(from oklch(40.14% 0.0638 202.51deg) l c h / 15%);
  --nav-item-color: oklch(0.3 0 0);
  --nav-item-color-active: oklch(0 0 0);
  --nav-item-color-highlighted: oklch(40.14% 0.0638 202.51deg);
  --nav-item-color-hover: oklch(0 0 0);
  --nav-item-color-selected: oklch(0 0 0);
  --nav-item-padding-left-no-icon: 12px;
  --nav-item-radius: 3px;
  --nav-padding: 0 2px 0 4px;
  --nav-tag-color: oklch(0.6 0 0);
  --nav-tag-color-active: oklch(0.3 0 0);
  --nav-tag-color-hover: oklch(0.3 0 0);
  --nav-tag-radius: 3px;
  --nav-title-margin: 2px;
  --near-fade-factor: 0.15;
  --opacity-sd: 100%;
  --p-root-number: 0.75;
  --p-spacing: 0.75em;
  --p-spacing-root: 0.75rem;
  --padding-graph-control: 6px;
  --padding-headers: 0.15em 0.25em;
  --padding-headers-lr: 0.25em;
  --padding-headers-td: 0.15em;
  --padding-highlight-LR: 3px;
  --padding-highlight-TB: 2px;
  --padding-modal-side: 4px;
  --padding-multi-select: 2px;
  --padding-print: 2cm;
  --padding-ss: 0.75em;
  --pdf-background: oklch(1 0 0);
  --pdf-page-background: oklch(1 0 0);
  --pdf-sidebar-background: oklch(1 0 0);
  --pill-border-color: oklch(0.8 0 0);
  --pill-border-color-hover: oklch(0.7 0 0);
  --pill-color: oklch(0.3 0 0);
  --pill-color-hover: oklch(0 0 0);
  --pill-color-remove: oklch(0.6 0 0);
  --pill-color-remove-hover: oklch(40.14% 0.0638 202.51deg);
  --pill-radius: 3px;
  --prompt-background: oklch(1 0 0);
  --prompt-border-color: oklch(0.7 0 0);
  --prompt-border-width: 0;
  --prompt-padding: 6px;
  --quick-transition: 140ms ease-in-out;
  --quicker-transition: 70ms ease-in-out;
  --radius-callouts-gallery: 3px;
  --radius-callouts-img-grid: 3px;
  --radius-image: 3px;
  --radius-l: 9px;
  --radius-m: 6px;
  --radius-s: 3px;
  --raised-background: color-mix(in srgb, oklch(1 0 0) 65%, transparent) linear-gradient(oklch(1 0 0), color-mix(in srgb, oklch(1 0 0) 65%, transparent));
  --ratio-bw-bases-reading: 0.96;
  --ratio-bw-bases-source: 1;
  --ratio-bw-iframe-reading: 0.96;
  --ratio-bw-iframe-source: 1;
  --ratio-bw-pdfembed-reading: 0.96;
  --ratio-bw-pdfembed-source: 1;
  --ratio-bw-table-reading: 0.96;
  --ratio-bw-table-source: 1;
  --ribbon-background: oklch(0.95 0 0);
  --ribbon-background-collapsed: oklch(1 0 0);
  --ribbon-float-color: oklch(0.95 0 0);
  --ribbon-padding: 4px;
  --ribbon-width: 36px;
  --sbb-divider-width: 1px;
  --scrollbar-bg: oklch(0.8 0 0);
  --scrollbar-radius: 9px;
  --search-clear-button-color: oklch(0.3 0 0);
  --search-icon-color: oklch(0.3 0 0);
  --search-result-background: oklch(1 0 0);
  --setting-group-heading-color: oklch(0 0 0);
  --setting-heading: "Inter 4.1", "DM Sans", "Manrope";
  --setting-items-background: oklch(0.98 0 0);
  --setting-items-border-color: oklch(0.8 0 0);
  --setting-items-radius: 9px;
  --settings-background: oklch(0.98 0 0);
  --shadow-l: none;
  --shadow-s: none;
  --shape-roundish: 6px;
  --sidebar-icon-padding: 5px;
  --sidebar-icon-size: 18px;
  --sidebar-icon-size-hover: 20.5px;
  --sidebar-padding-hover: 3.75px;
  --size-bw-bases: size * 1.5;
  --size-bw-iframe: size * 1.5;
  --size-bw-pdfembed: size * 1.5;
  --size-bw-table: size * 1.5;
  --size-scrollbar-non-native: 8px;
  --slider-thumb-border-color: oklch(0.7 0 0);
  --slider-track-background: oklch(0.8 0 0);
  --slow-transition: 560ms ease-in-out;
  --smallcap-font: "Inter 4.1", "DM Sans", "Manrope";
  --spacing-comm-modal: 4px;
  --ssopt-bw-table-content-fit: 0;
  --ssopt-callout-style: 0;
  --ssopt-callouts-images-display: 0;
  --ssopt-status-bar-full-style: 1;
  --startup-background-image: 50px;
  --startup-obsidian-image: url("data:image/svg+xml,%3Csvg alt='Obsidian' viewBox='0 0 20 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23A88BFA' d='m6.91927 14.5955c.64053-.1907 1.67255-.4839 2.85923-.5565-.71191-1.7968-.88376-3.3691-.74554-4.76905.15962-1.61678.72977-2.9662 1.28554-4.11442.1186-.24501.2326-.47313.3419-.69198.1549-.30984.3004-.60109.4365-.8953.2266-.48978.3948-.92231.4798-1.32416.0836-.39515.0841-.74806-.0148-1.08657-.099-.338982-.3093-.703864-.7093-1.1038132-.5222-.1353116-1.1017-.0165173-1.53613.3742922l-5.15591 4.638241c-.28758.25871-.47636.60929-.53406.99179l-.44455 2.94723c.69903.6179 2.42435 2.41414 3.47374 4.90644.09364.2224.1819.4505.26358.6838z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m2.97347 10.3512c-.02431.1037-.05852.205-.10221.3024l-2.724986 6.0735c-.279882.6238-.15095061 1.3552.325357 1.8457l4.288349 4.4163c2.1899-3.2306 1.87062-6.2699.87032-8.6457-.75846-1.8013-1.90801-3.2112-2.65683-3.9922z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m5.7507 23.5094c.07515.012.15135.0192.2281.0215.81383.0244 2.18251.0952 3.29249.2997.90551.1669 2.70051.6687 4.17761 1.1005 1.1271.3294 2.2886-.5707 2.4522-1.7336.1192-.8481.343-1.8075.7553-2.6869l-.0095.0033c-.6982-1.9471-1.5865-3.2044-2.5178-4.0073-.9284-.8004-1.928-1.1738-2.8932-1.3095-1.60474-.2257-3.07497.1961-4.00103.4682.55465 2.3107.38396 5.0295-1.48417 7.8441z'%3E%3C/path%3E%3Cpath fill='%23A88BFA' d='m17.3708 19.3102c.9267-1.3985 1.5868-2.4862 1.9352-3.0758.1742-.295.1427-.6648-.0638-.9383-.5377-.7126-1.5666-2.1607-2.1272-3.5015-.5764-1.3785-.6624-3.51876-.6673-4.56119-.0019-.39626-.1275-.78328-.3726-1.09465l-3.3311-4.23183c-.0117.19075-.0392.37998-.0788.56747-.1109.52394-.32 1.04552-.5585 1.56101-.1398.30214-.3014.62583-.4646.95284-.1086.21764-.218.4368-.3222.652-.5385 1.11265-1.0397 2.32011-1.1797 3.73901-.1299 1.31514.0478 2.84484.8484 4.67094.1333.0113.2675.0262.4023.0452 1.1488.1615 2.3546.6115 3.4647 1.5685.9541.8226 1.8163 2.0012 2.5152 3.6463z'%3E%3C/path%3E%3C/svg%3E");
  --status-bar-background: oklch(0.95 0 0);
  --status-bar-border-color: oklch(0.8 0 0);
  --status-bar-bottom-float-margin: 8px;
  --status-bar-full-justify-content: right;
  --status-bar-glass-blur: 4px;
  --status-bar-max-width: 85%;
  --status-bar-min-height: 21.86667px;
  --status-bar-min-height-intermediary: 13.86667px;
  --status-bar-padding: 4px;
  --status-bar-position: absolute;
  --status-bar-radius: 6px 0 0 0;
  --status-bar-shift-workspace-padding-bottom: 30.86667px;
  --status-bar-text-color: oklch(0.3 0 0);
  --suggestion-background: oklch(1 0 0);
  --tab-background-active: oklch(1 0 0);
  --tab-container-background: oklch(0.95 0 0);
  --tab-divider-color: oklch(0.7 0 0);
  --tab-focus-border-width: 1px;
  --tab-icon-size: 14px;
  --tab-icon-size-hover: 17.5px;
  --tab-outline-color: oklch(0.8 0 0);
  --tab-outline-width: 0px;
  --tab-padding: 7px;
  --tab-padding-hover: 5.25px;
  --tab-radius: 3px;
  --tab-stacked-header-width: 36px;
  --tab-stacked-shadow: -1px 0 0 0 oklch(0.8 0 0);
  --tab-switcher-background: oklch(0.95 0 0);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(0.95 0 0), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px oklch(40.14% 0.0638 202.51deg);
  --tab-text-color: oklch(0.6 0 0);
  --tab-text-color-active: oklch(0.3 0 0);
  --tab-text-color-focused: oklch(0.3 0 0);
  --tab-text-color-focused-active: oklch(0.3 0 0);
  --tab-text-color-focused-active-current: oklch(40.14% 0.0638 202.51deg);
  --tab-text-color-focused-highlighted: oklch(40.14% 0.0638 202.51deg);
  --table-add-button-border-color: oklch(0.8 0 0);
  --table-border-color: oklch(0.8 0 0);
  --table-drag-handle-background-active: oklch(70.7% 0.1737 155.3deg);
  --table-drag-handle-color: oklch(0.6 0 0);
  --table-drag-handle-size: 16px;
  --table-header-background: oklch(0.95 0 0);
  --table-header-background-hover: rgba(0, 0, 0, 0.067);
  --table-header-border-color: oklch(0.8 0 0);
  --table-header-color: oklch(0 0 0);
  --table-selection: oklch(from oklch(40.14% 0.0638 202.51deg) l c h / 10%);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: oklch(70.7% 0.1737 155.3deg);
  --tag-background: oklch(from oklch(70.7% 0.1737 155.3deg) l c h / 10%);
  --tag-background-hover: oklch(from oklch(70.7% 0.1737 155.3deg) l c h / 20%);
  --tag-border-color: oklch(from oklch(70.7% 0.1737 155.3deg) l c h / 15%);
  --tag-border-color-hover: oklch(from oklch(70.7% 0.1737 155.3deg) l c h / 15%);
  --tag-color: oklch(40.14% 0.0638 202.51deg);
  --tag-color-hover: oklch(40.14% 0.0638 202.51deg);
  --tag-radius: 3px;
  --text-accent: oklch(40.14% 0.0638 202.51deg);
  --text-accent-hover: oklch(82.77% 0.1667 79.6deg);
  --text-error-hover: oklch(from #e93147 calc(l - 0.1) c calc(h + 4));
  --text-faint: oklch(0.6 0 0);
  --text-highlight-bg: rgb(0, 0, 0);
  --text-highlight-bg-active: rgb(0, 0, 0);
  --text-message-progress-bar: oklch(0 0 0);
  --text-muted: oklch(0.3 0 0);
  --text-normal: oklch(0 0 0);
  --text-selection: oklch(80.92% 0.170357 75.4802deg);
  --theme-alternative-checkboxes: disable;
  --titlebar-background: oklch(0.95 0 0);
  --titlebar-background-focused: oklch(0.93 0 0);
  --titlebar-border-color: oklch(0.8 0 0);
  --titlebar-text-color: oklch(0.3 0 0);
  --titlebar-text-color-focused: oklch(0 0 0);
  --toggle-border-width: 0;
  --toggle-s-border-width: 0px;
  --touch-radius-l: 9px;
  --touch-radius-m: 6px;
  --touch-radius-s: 3px;
  --touch-radius-xl: 9px;
  --touch-radius-xs: 3px;
  --touch-radius-xxs: 3px;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  --ui-font: "Manrope", "Inter 4.1", "DM Sans";
  --vault-profile-color: oklch(0 0 0);
  --vault-profile-color-hover: oklch(0 0 0);
  --width-norm-sd: 36px;
  --width-vll: 700px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.95 0 0);
  color: oklch(0 0 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: oklch(1 0 0);
  color: oklch(0 0 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.98 0 0);
  color: oklch(0 0 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.8 0 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.95 0 0);
  border-left-color: oklch(0.8 0 0);
  color: oklch(0 0 0);
}

body div#quartz-root {
  background-color: oklch(1 0 0);
  color: oklch(0 0 0);
}`,
    typography: `body .page article p > b, b {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0 0 0) none 0px;
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body .page article p > em, em {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0 0 0) none 0px;
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body .page article p > i, i {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0 0 0) none 0px;
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body .page article p > strong, strong {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0 0 0) none 0px;
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body .text-highlight {
  background-color: rgb(255, 195, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0 0 0) none 0px;
  text-decoration: line-through oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body p {
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.3 0 0) none 0px;
  text-decoration: oklch(0.3 0 0);
  text-decoration-color: oklch(0.3 0 0);
}`,
    links: `body a.external, footer a {
  color: oklch(0.4014 0.0638 202.51);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.4014 0.0638 202.51) none 0px;
  text-decoration: underline oklch(0.4014 0.0638 202.51);
  text-decoration-color: oklch(0.4014 0.0638 202.51);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.4014 0.0638 202.51);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.4014 0.0638 202.51) none 0px;
  text-decoration: underline oklch(0.4014 0.0638 202.51);
  text-decoration-color: oklch(0.4014 0.0638 202.51);
}

body a.internal.broken {
  color: oklch(0.4014 0.0638 202.51);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0.4014 0.0638 202.51) none 0px;
  text-decoration: underline oklch(0.707 0.1737 155.3 / 0.3);
  text-decoration-color: oklch(0.707 0.1737 155.3 / 0.3);
}`,
    lists: `body dd {
  color: oklch(0 0 0);
}

body dt {
  color: oklch(0 0 0);
}

body ol > li {
  color: oklch(0 0 0);
}

body ol.overflow {
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body ul > li {
  color: oklch(0 0 0);
}

body ul.overflow {
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: oklch(0.6 0 0);
  text-decoration: oklch(0.6 0 0);
}

body blockquote {
  background-color: oklch(0.98 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `body .table-container {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body table {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  margin-top: 12px;
  width: 194.844px;
}

body tbody tr:nth-child(even) {
  background-color: oklch(0.98 0 0);
}

body tbody tr:nth-child(odd) {
  background-color: oklch(1 0 0);
}

body td {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  color: oklch(0 0 0);
}

body th {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  color: oklch(0 0 0);
}

body tr {
  background-color: oklch(0.95 0 0);
}`,
    code: `body code {
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0 0 0);
  font-family: "??", "DM Mono", "DM Mono";
}

body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0 0 0);
}

body pre > code, pre:has(> code) {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body audio {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body figcaption {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body figure {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body img {
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0 0 0);
  border-radius: 3px;
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body video {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    embeds: `body .file-embed {
  background-color: oklch(0.98 0 0);
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .footnotes {
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

body .transclude {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body .transclude-inner {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: oklch(0.3 0 0);
  text-decoration: line-through oklch(0.3 0 0);
  text-decoration-color: oklch(0.3 0 0);
}

body input[type=checkbox] {
  border-bottom-color: oklch(0.6 0 0);
  border-bottom-left-radius: 800px;
  border-bottom-right-radius: 800px;
  border-left-color: oklch(0.6 0 0);
  border-right-color: oklch(0.6 0 0);
  border-top-color: oklch(0.6 0 0);
  border-top-left-radius: 800px;
  border-top-right-radius: 800px;
  margin-right: 8.64px;
}

body li.task-list-item[data-task='!'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='*'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='-'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='/'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='>'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='?'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='I'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='S'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='b'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='c'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='d'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='f'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='i'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='k'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='l'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='p'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='u'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='w'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(0, 191, 111);
  border-left-color: rgb(0, 191, 111);
  border-right-color: rgb(0, 191, 111);
  border-top-color: rgb(0, 191, 111);
  gap: 8px;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 6px;
}

body .callout > .callout-content {
  background-color: oklch(0.98 0 0);
  padding-left: 16px;
  padding-right: 16px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 91, 197, 219;
  background-color: rgba(91, 197, 219, 0.125);
  border-bottom-color: oklch(0.769454 0.101799 213.329);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(91, 197, 219);
  border-right-color: oklch(0.769454 0.101799 213.329);
  border-top-color: oklch(0.769454 0.101799 213.329);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="bug"] {
  --callout-color: 164, 103, 80;
  background-color: rgba(164, 103, 80, 0.125);
  border-bottom-color: oklch(0.574652 0.0862245 41.3449);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(164, 103, 80);
  border-right-color: oklch(0.574652 0.0862245 41.3449);
  border-top-color: oklch(0.574652 0.0862245 41.3449);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="danger"] {
  --callout-color: 241, 0, 34;
  background-color: rgba(241, 0, 34, 0.125);
  border-bottom-color: oklch(0.603065 0.245145 26.0471);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(241, 0, 34);
  border-right-color: oklch(0.603065 0.245145 26.0471);
  border-top-color: oklch(0.603065 0.245145 26.0471);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="example"] {
  --callout-color: 125, 84, 178;
  background-color: rgba(125, 84, 178, 0.125);
  border-bottom-color: oklch(0.533415 0.145739 301.819);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(125, 84, 178);
  border-right-color: oklch(0.533415 0.145739 301.819);
  border-top-color: oklch(0.533415 0.145739 301.819);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="failure"] {
  --callout-color: 161, 40, 100;
  background-color: rgba(161, 40, 100, 0.125);
  border-bottom-color: oklch(0.486186 0.165241 354.996);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(161, 40, 100);
  border-right-color: oklch(0.486186 0.165241 354.996);
  border-top-color: oklch(0.486186 0.165241 354.996);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="info"] {
  --callout-color: 0, 170, 199;
  background-color: rgba(0, 170, 199, 0.125);
  border-bottom-color: oklch(0.67965 0.120454 215.668);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 170, 199);
  border-right-color: oklch(0.67965 0.120454 215.668);
  border-top-color: oklch(0.67965 0.120454 215.668);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="note"] {
  --callout-color: 0, 191, 111;
  background-color: rgba(0, 191, 111, 0.125);
  border-bottom-color: oklch(0.706959 0.173724 155.295);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 111);
  border-right-color: oklch(0.706959 0.173724 155.295);
  border-top-color: oklch(0.706959 0.173724 155.295);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="question"] {
  --callout-color: 160, 199, 92;
  background-color: rgba(160, 199, 92, 0.125);
  border-bottom-color: oklch(0.778552 0.142252 126.135);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(160, 199, 92);
  border-right-color: oklch(0.778552 0.142252 126.135);
  border-top-color: oklch(0.778552 0.142252 126.135);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="quote"] {
  --callout-color: 161, 169, 173;
  background-color: rgba(161, 169, 173, 0.125);
  border-bottom-color: oklch(0.729631 0.0107511 229.015);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(161, 169, 173);
  border-right-color: oklch(0.729631 0.0107511 229.015);
  border-top-color: oklch(0.729631 0.0107511 229.015);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="success"] {
  --callout-color: 0, 158, 76;
  background-color: rgba(0, 158, 76, 0.125);
  border-bottom-color: oklch(0.611761 0.164617 150.979);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 158, 76);
  border-right-color: oklch(0.611761 0.164617 150.979);
  border-top-color: oklch(0.611761 0.164617 150.979);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="tip"] {
  --callout-color: 34, 148, 1;
  background-color: rgba(34, 148, 1, 0.125);
  border-bottom-color: oklch(0.58165 0.190605 140.918);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(34, 148, 1);
  border-right-color: oklch(0.58165 0.190605 140.918);
  border-top-color: oklch(0.58165 0.190605 140.918);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="todo"] {
  --callout-color: 0, 170, 199;
  background-color: rgba(0, 170, 199, 0.125);
  border-bottom-color: oklch(0.67965 0.120454 215.668);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 170, 199);
  border-right-color: oklch(0.67965 0.120454 215.668);
  border-top-color: oklch(0.67965 0.120454 215.668);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 182, 26;
  background-color: rgba(255, 182, 26, 0.125);
  border-bottom-color: oklch(0.823912 0.166913 78.6248);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(255, 182, 26);
  border-right-color: oklch(0.823912 0.166913 78.6248);
  border-top-color: oklch(0.823912 0.166913 78.6248);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    search: `body .search > .search-button {
  background-color: oklch(0.99 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.8 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.8 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  color: oklch(0 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body .search > .search-container > .search-space {
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0.7 0 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.7 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.7 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.7 0 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > * {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  outline: oklch(0 0 0) none 0px;
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: oklch(0 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: oklch(0 0 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.7 0 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.7 0 0);
  border-left-width: 0px;
  border-right-color: oklch(0.7 0 0);
  border-right-width: 0px;
  border-top-color: oklch(0.7 0 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: oklch(0.95 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0 0 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0 0 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: oklch(0.707 0.1737 155.3 / 0.1);
  border-bottom-color: oklch(0.707 0.1737 155.3 / 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.707 0.1737 155.3 / 0.15);
  border-right-color: oklch(0.707 0.1737 155.3 / 0.15);
  border-top-color: oklch(0.707 0.1737 155.3 / 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body a.internal.tag-link::before {
  color: oklch(0.4014 0.0638 202.51);
}

body h1 {
  color: oklch(0.975 0.03 202.51);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

body h2 {
  color: oklch(0.3 0.03 155.3);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

body h2.page-title, h2.page-title a {
  color: oklch(0 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body h3 {
  color: oklch(0.3 0.03 79.6);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

body h4 {
  color: oklch(0.975 0.03 202.51);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

body h5 {
  color: oklch(0.3 0.03 155.3);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

body h6 {
  color: oklch(0.3 0.03 79.6);
  font-family: Manrope, "Inter 4.1", "DM Sans";
}

body hr {
  border-bottom-color: oklch(0.8 0 0);
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 0, 191, 111;
  border-bottom-color: oklch(0.706959 0.173724 155.295);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(0, 191, 111);
  border-right-color: oklch(0.706959 0.173724 155.295);
  border-top-color: oklch(0.706959 0.173724 155.295);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

body ::-webkit-scrollbar-corner {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

body ::-webkit-scrollbar-thumb {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

body ::-webkit-scrollbar-track {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  text-decoration: oklch(0.3 0 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  text-decoration: oklch(0.3 0 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  text-decoration: oklch(0.3 0 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0 0 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.3 0 0);
}`,
    footer: `body footer {
  background-color: oklch(0.95 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-right-width: 1px;
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body footer ul li a {
  color: oklch(0.3 0 0);
  text-decoration: oklch(0.3 0 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: oklch(0 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.3 0 0);
  text-decoration: oklch(0.3 0 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}`,
    listPage: `body li.section-li {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body li.section-li > .section .meta {
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.3 0 0);
  text-decoration: oklch(0.3 0 0);
}

body ul.section-ul {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: oklch(0.4014 0.0638 202.51);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.4014 0.0638 202.51);
  border-right-color: oklch(0.4014 0.0638 202.51);
  border-top-color: oklch(0.4014 0.0638 202.51);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.4014 0.0638 202.51);
}

body .darkmode svg {
  color: oklch(0.4014 0.0638 202.51);
  stroke: oklch(0.4014 0.0638 202.51);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: oklch(0.3 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.3 0 0);
}

body .breadcrumb-element p {
  color: oklch(0.6 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}`,
    misc: `body .katex-display {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

body .metadata {
  background-color: oklch(0.98 0 0);
  border-bottom-color: oklch(0.8 0 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: oklch(0.8 0 0);
  border-right-color: oklch(0.8 0 0);
  border-top-color: oklch(0.8 0 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: oklch(0.3 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body .metadata-properties {
  border-bottom-color: oklch(0.3 0 0);
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  color: oklch(0.3 0 0);
  font-family: "??", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body .navigation-progress {
  background-color: oklch(0.95 0 0);
}

body .page-header h2.page-title {
  color: oklch(0 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body abbr {
  color: oklch(0 0 0);
  text-decoration: underline dotted oklch(0 0 0);
}

body details {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body input[type=text] {
  border-bottom-color: oklch(0.3 0 0);
  border-left-color: oklch(0.3 0 0);
  border-right-color: oklch(0.3 0 0);
  border-top-color: oklch(0.3 0 0);
  color: oklch(0.3 0 0);
  font-family: "??", Manrope, "Inter 4.1", "DM Sans", "Inter 4.1", "DM Sans", "Inter 4.1", Manrope;
}

body kbd {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: oklch(0 0 0);
  font-family: "??", "DM Mono", "DM Mono";
  padding-bottom: 2px;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 2px;
}

body progress {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body sub {
  color: oklch(0 0 0);
}

body summary {
  color: oklch(0 0 0);
}

body sup {
  color: oklch(0 0 0);
}`,
  },
};
