import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "primary",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cascadia-code"],
    fontFiles: [
      {
        family: "Cascadia Code",
        style: "normal",
        weight: "400",
        file: "cascadia-code.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Inter",
        style: "normal",
        weight: "100 900",
        file: "inter.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Inter",
        style: "italic",
        weight: "100 900",
        file: "inter-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "primary-theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 31;
  --accent-l: 24%;
  --accent-s: 27%;
  --active-line-bg: var(--color-base-20, hsla(33, 20%, 17%, 1));
  --alternating-color-1: var(--color-d-yellow-30, hsla(40, 78%, 48%, 1));
  --alternating-color-1-hover-active: var(--color-d-yellow-40, hsla(38, 76%, 42%, 1));
  --alternating-color-2: var(--color-d-red-30, hsla(4, 88%, 61%, 1));
  --alternating-color-2-hover-active: var(--color-d-red-40, hsla(2, 75%, 52%, 1));
  --alternating-color-3: var(--color-d-blue-30, hsla(197, 48%, 49%, 1));
  --alternating-color-3-hover-active: var(--color-d-blue-40, hsla(201, 45%, 40%, 1));
  --amount-chbx-color: hsla(152, 46%, 38%, 1);
  --amount-chbx-icon-color: white;
  --amount-chbx-radius: 100%;
  --anim-popdown: 0.4s slideDown forwards;
  --anim-popup: 0.3s slideUp forwards;
  --anim-popup-alt: 0.335s slideUpAlt forwards;
  --background-anim: background var(--anim-duration-fast) var(--anim-motion-smooth);
  --background-modifier-active-hover: var(--color-d-gray-70, hsla(31, 27%, 25%, 1));
  --background-modifier-border: var(--color-d-gray-80, hsla(28, 22%, 19%, 1));
  --background-modifier-border-focus: color-mix(in srgb, var(--color-d-gray-70) 40%, var(--color-d-gray-80));
  --background-modifier-border-hover: color-mix(in srgb, var(--color-d-gray-70) 40%, var(--color-d-gray-80));
  --background-modifier-error: var(--color-d-red-40, hsla(2, 75%, 52%, 1));
  --background-modifier-error-hover: var(--color-d-red-30, hsla(4, 88%, 61%, 1));
  --background-modifier-error-rgb: var(--color-red-rgb, 228,87,78);
  --background-modifier-form-field: var(--color-d-gray-130, hsla(24, 18%, 11%, 1));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsla(24, 18%, 11%, 1));
  --background-modifier-message: var(--color-d-gray-70, hsla(31, 27%, 25%, 1));
  --background-modifier-success: var(--color-d-green-30, hsla(155, 78%, 29%, 1));
  --background-modifier-success-rgb: var(--color-green-rgb, 100,194,113);
  --background-modifier-warning: var(--color-d-orange-40, hsla(19, 81%, 41%, 1));
  --background-modifier-warning-hover: var(--color-d-orange-30, hsla(22, 82%, 47%, 1));
  --background-primary: var(--color-d-gray-100, hsla(30, 19%, 15%, 1));
  --background-primary-alt: var(--color-d-gray-110, hsla(30, 17%, 14%, 1));
  --background-secondary: var(--color-d-gray-120, hsla(29, 16%, 13%, 1));
  --background-secondary-alt: var(--color-d-gray-120, hsla(29, 16%, 13%, 1));
  --bases-cards-background: var(--background-primary, hsla(30, 19%, 15%, 1));
  --bases-cards-cover-background: var(--background-primary-alt, hsla(30, 17%, 14%, 1));
  --bases-embed-border-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --bases-group-heading-property-color: var(--text-muted, hsla(35, 27%, 55%, 1));
  --bases-group-heading-property-weight: var(--font-normal, 450);
  --bases-group-heading-value-weight: var(--font-semibold, 650);
  --bases-table-border-color: var(--table-border-color, hsla(28, 22%, 19%, 1));
  --bases-table-cell-background-active: var(--background-primary, hsla(30, 19%, 15%, 1));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsla(30, 17%, 14%, 1));
  --bases-table-cell-background-selected: var(--table-selection, hsla(31,27%,24%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsla(30, 17%, 14%, 1));
  --bases-table-header-background: var(--background-primary, hsla(30, 19%, 15%, 1));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.3));
  --bases-table-header-color: var(--text-muted, hsla(35, 27%, 55%, 1));
  --bases-table-header-weight: var(--font-weight, 450);
  --bases-table-row-background-hover: var(--table-row-background-hover, hsla(29, 16%, 13%, 1));
  --bases-table-summary-background: var(--background-primary, hsla(30, 19%, 15%, 1));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.3));
  --blockquote-background-color: var(--color-d-gray-120, hsla(29, 16%, 13%, 1));
  --blockquote-border-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --bodyFont: var(--font-text-theme, "Inter");
  --bold-color: var(--color-d-red-30, hsla(4, 88%, 61%, 1));
  --bold-highlight-bg: var(--color-d-alpha-red, hsla(350, 84%, 63%, 0.2));
  --bold-highlight-color: var(--text-normal, hsla(34, 39%, 74%, 1));
  --bold-italic-color: var(--color-d-gray-10, hsla(32, 48%, 85%, 1));
  --bold-italic-highlight-bg: var(--color-d-alpha-green, hsla(74, 69%, 44%, 0.2));
  --bold-italic-highlight-color: var(--bold-italic-color, hsla(32, 48%, 85%, 1));
  --bold-italic-strikethrough-color: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --bold-italic-weight: var(--font-bold, 750);
  --bold-weight: var(--font-bold, 750);
  --bookmark-chbx-color: hsla(21, 81%, 54%, 1);
  --bookmark-folder-1-bg-color: var(--nav-folder-1-bg-color, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent));
  --bookmark-folder-1-bg-color-hover: var(--nav-folder-1-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-1-collapse-color: var(--nav-folder-1-collapse-color, color-mix(in srgb, hsla(4, 88%, 61%, 1) 50%, transparent));
  --bookmark-folder-1-color: var(--nav-folder-1-color, hsla(4, 88%, 61%, 1));
  --bookmark-folder-1-indent-color: var(--nav-folder-1-indent-color, color-mix(in srgb, hsla(4, 88%, 61%, 1) 25%, transparent));
  --bookmark-folder-10-bg-color: var(--nav-folder-10-bg-color, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent));
  --bookmark-folder-10-bg-color-hover: var(--nav-folder-10-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-10-collapse-color: var(--nav-folder-10-collapse-color, color-mix(in srgb, hsla(154, 57%, 42%, 1) 50%, transparent));
  --bookmark-folder-10-color: var(--nav-folder-10-color, hsla(154, 57%, 42%, 1));
  --bookmark-folder-10-indent-color: var(--nav-folder-10-indent-color, color-mix(in srgb, hsla(154, 57%, 42%, 1) 25%, transparent));
  --bookmark-folder-11-bg-color: var(--nav-folder-11-bg-color, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent));
  --bookmark-folder-11-bg-color-hover: var(--nav-folder-11-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-11-collapse-color: var(--nav-folder-11-collapse-color, color-mix(in srgb, hsla(194, 59%, 56%, 1) 50%, transparent));
  --bookmark-folder-11-color: var(--nav-folder-11-color, hsla(194, 59%, 56%, 1));
  --bookmark-folder-11-indent-color: var(--nav-folder-11-indent-color, color-mix(in srgb, hsla(194, 59%, 56%, 1) 25%, transparent));
  --bookmark-folder-12-bg-color: var(--nav-folder-12-bg-color, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent));
  --bookmark-folder-12-bg-color-hover: var(--nav-folder-12-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-12-collapse-color: var(--nav-folder-12-collapse-color, color-mix(in srgb, hsla(242, 52%, 69%, 1) 50%, transparent));
  --bookmark-folder-12-color: var(--nav-folder-12-color, hsla(242, 52%, 69%, 1));
  --bookmark-folder-12-indent-color: var(--nav-folder-12-indent-color, color-mix(in srgb, hsla(242, 52%, 69%, 1) 25%, transparent));
  --bookmark-folder-2-bg-color: var(--nav-folder-2-bg-color, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent));
  --bookmark-folder-2-bg-color-hover: var(--nav-folder-2-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-2-collapse-color: var(--nav-folder-2-collapse-color, color-mix(in srgb, hsla(24, 84%, 50%, 1) 50%, transparent));
  --bookmark-folder-2-color: var(--nav-folder-2-color, hsla(24, 84%, 50%, 1));
  --bookmark-folder-2-indent-color: var(--nav-folder-2-indent-color, color-mix(in srgb, hsla(24, 84%, 50%, 1) 25%, transparent));
  --bookmark-folder-3-bg-color: var(--nav-folder-3-bg-color, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent));
  --bookmark-folder-3-bg-color-hover: var(--nav-folder-3-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-3-collapse-color: var(--nav-folder-3-collapse-color, color-mix(in srgb, hsla(42, 79%, 51%, 1) 50%, transparent));
  --bookmark-folder-3-color: var(--nav-folder-3-color, hsla(42, 79%, 51%, 1));
  --bookmark-folder-3-indent-color: var(--nav-folder-3-indent-color, color-mix(in srgb, hsla(42, 79%, 51%, 1) 25%, transparent));
  --bookmark-folder-4-bg-color: var(--nav-folder-4-bg-color, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent));
  --bookmark-folder-4-bg-color-hover: var(--nav-folder-4-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-4-collapse-color: var(--nav-folder-4-collapse-color, color-mix(in srgb, hsla(154, 57%, 42%, 1) 50%, transparent));
  --bookmark-folder-4-color: var(--nav-folder-4-color, hsla(154, 57%, 42%, 1));
  --bookmark-folder-4-indent-color: var(--nav-folder-4-indent-color, color-mix(in srgb, hsla(154, 57%, 42%, 1) 25%, transparent));
  --bookmark-folder-5-bg-color: var(--nav-folder-5-bg-color, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent));
  --bookmark-folder-5-bg-color-hover: var(--nav-folder-5-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-5-collapse-color: var(--nav-folder-5-collapse-color, color-mix(in srgb, hsla(194, 59%, 56%, 1) 50%, transparent));
  --bookmark-folder-5-color: var(--nav-folder-5-color, hsla(194, 59%, 56%, 1));
  --bookmark-folder-5-indent-color: var(--nav-folder-5-indent-color, color-mix(in srgb, hsla(194, 59%, 56%, 1) 25%, transparent));
  --bookmark-folder-6-bg-color: var(--nav-folder-6-bg-color, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent));
  --bookmark-folder-6-bg-color-hover: var(--nav-folder-6-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-6-collapse-color: var(--nav-folder-6-collapse-color, color-mix(in srgb, hsla(242, 52%, 69%, 1) 50%, transparent));
  --bookmark-folder-6-color: var(--nav-folder-6-color, hsla(242, 52%, 69%, 1));
  --bookmark-folder-6-indent-color: var(--nav-folder-6-indent-color, color-mix(in srgb, hsla(242, 52%, 69%, 1) 25%, transparent));
  --bookmark-folder-7-bg-color: var(--nav-folder-7-bg-color, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent));
  --bookmark-folder-7-bg-color-hover: var(--nav-folder-7-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-7-collapse-color: var(--nav-folder-7-collapse-color, color-mix(in srgb, hsla(4, 88%, 61%, 1) 50%, transparent));
  --bookmark-folder-7-color: var(--nav-folder-7-color, hsla(4, 88%, 61%, 1));
  --bookmark-folder-7-indent-color: var(--nav-folder-7-indent-color, color-mix(in srgb, hsla(4, 88%, 61%, 1) 25%, transparent));
  --bookmark-folder-8-bg-color: var(--nav-folder-8-bg-color, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent));
  --bookmark-folder-8-bg-color-hover: var(--nav-folder-8-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-8-collapse-color: var(--nav-folder-8-collapse-color, color-mix(in srgb, hsla(24, 84%, 50%, 1) 50%, transparent));
  --bookmark-folder-8-color: var(--nav-folder-8-color, hsla(24, 84%, 50%, 1));
  --bookmark-folder-8-indent-color: var(--nav-folder-8-indent-color, color-mix(in srgb, hsla(24, 84%, 50%, 1) 25%, transparent));
  --bookmark-folder-9-bg-color: var(--nav-folder-9-bg-color, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent));
  --bookmark-folder-9-bg-color-hover: var(--nav-folder-9-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-9-collapse-color: var(--nav-folder-9-collapse-color, color-mix(in srgb, hsla(42, 79%, 51%, 1) 50%, transparent));
  --bookmark-folder-9-color: var(--nav-folder-9-color, hsla(42, 79%, 51%, 1));
  --bookmark-folder-9-indent-color: var(--nav-folder-9-indent-color, color-mix(in srgb, hsla(42, 79%, 51%, 1) 25%, transparent));
  --breadcrumb-bg-hover: var(--color-d-gray-80, hsla(28, 22%, 19%, 1));
  --breadcrumb-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --breadcrumb-color-hover: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --breadcrumb-separator-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --button-accent-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 2px rgba(0, 0, 0, 0.26),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.35),0px 4px 4px -5.6px rgba(0, 0, 0, 0.37),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 4px -1px rgba(0, 0, 0, 0.14);
  --button-accent-shadow-active: var(--input-shadow-active, inset 0px 0px 0px 1px rgba(0, 0, 0, 0.45),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.15),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.57),0px 0px 0px 1px rgba(255, 255, 255, 0.02));
  --button-accent-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.28),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 2px rgba(0, 0, 0, 0.11),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 6px -1px rgba(0, 0, 0, 0.24),0px 0px 0px 3px var(--color-d-alpha-gray);
  --button-accent-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.34),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 2px rgba(0, 0, 0, 0.26),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.35),0px 4px 4px -5.6px rgba(0, 0, 0, 0.37),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.19);
  --button-anim: var(--anim-duration-fast) var(--anim-motion-jumpy, 140ms cubic-bezier(0.68, -0.55, 0.27, 1.55));
  --button-axis-offset: 2px;
  --button-inset-shadow-size: 2px;
  --button-metadata-padding: var(--size-2-3) var(--size-4-2) calc(var(--size-2-3) + var(--button-inset-shadow-size)) var(--size-2-3, 6px 8px 8px 6px);
  --button-metadata-padding-active: calc(var(--size-2-2) + var(--button-inset-shadow-size)) var(--size-4-2) var(--size-2-3) var(--size-2-3);
  --button-opacity-active: 0.5;
  --button-padding: var(--size-4-2) var(--size-4-3) calc(var(--size-4-2) + var(--button-inset-shadow-size)) var(--size-4-3, 8px 12px 10px 12px);
  --button-padding-active: calc(var(--size-4-2) + var(--button-inset-shadow-size)) var(--size-4-3) var(--size-4-2) var(--size-4-3);
  --button-radius: var(--size-4-2, 8px);
  --button-s-padding: var(--size-2-2) var(--size-4-2) var(--size-2-2) var(--size-4-2, 4px 8px 4px 8px);
  --button-s-radius: calc(var(--button-radius)*0.8);
  --button-shadow: var(--input-shadow, inset 0px 1px 0px 0px rgba(255, 255, 255, 0.02),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.25),0px 2px 4px -1px rgba(0, 0, 0, 0.2));
  --button-shadow-active: var(--input-shadow-active, inset 0px 0px 0px 1px rgba(0, 0, 0, 0.45),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.15),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.57),0px 0px 0px 1px rgba(255, 255, 255, 0.02));
  --button-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.05),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 2px rgba(0, 0, 0, 0.24),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.25),0px 0px 0px 3px var(--color-d-alpha-gray);
  --button-shadow-hover: var(--input-shadow-hover, inset 0px 1px 0px 0px rgba(255, 255, 255, 0.06),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.25));
  --callout-border-opacity: 0.1;
  --callout-bug: var(--color-red-rgb, 228,87,78);
  --callout-color-opacity: 32.5%;
  --callout-container-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.18),0px 2px 6px 0px rgba(0, 0, 0, 0.28);
  --callout-content-background: color-mix( in srgb, var(--background-primary-alt) 50%, var(--editor-bg-color) );
  --callout-content-padding: var(--size-4-1) var(--size-4-4) calc(var(--size-4-1) + var(--callout-shadow-offset)) var(--size-4-4, 4px 16px 8px 16px);
  --callout-content-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.18),inset 0px calc(var(--callout-shadow-offset)*-1 - 1px) var(--callout-content-shadow-blur) 0px rgba(0, 0, 0, 0.3);
  --callout-content-shadow-blur: 3px;
  --callout-default: var(--color-blue-rgb, 99,156,192);
  --callout-error: var(--color-red-rgb, 228,87,78);
  --callout-example: var(--color-purple-rgb, 139,113,185);
  --callout-fail: var(--color-red-rgb, 228,87,78);
  --callout-icon-abstract: loader;
  --callout-icon-attention: megaphone;
  --callout-icon-bug: bug;
  --callout-icon-caution: construction;
  --callout-icon-check: check-check;
  --callout-icon-cite: book-marked;
  --callout-icon-danger: shield-alert;
  --callout-icon-done: check-check;
  --callout-icon-error: ban;
  --callout-icon-example: scroll-text;
  --callout-icon-fail: circle-slash;
  --callout-icon-faq: circle-help;
  --callout-icon-fold-filter: brightness(1);
  --callout-icon-general: shapes;
  --callout-icon-help: life-buoy;
  --callout-icon-hint: search-slash;
  --callout-icon-important: square-asterisk;
  --callout-icon-info: badge-info;
  --callout-icon-missing: search;
  --callout-icon-note: sticker;
  --callout-icon-question: circle-help;
  --callout-icon-quote: message-square-note;
  --callout-icon-success: check-check;
  --callout-icon-summary: align-justify;
  --callout-icon-tip: clover;
  --callout-icon-tldr: book-open-text;
  --callout-icon-todo: list-todo;
  --callout-icon-warning: triangle-alert;
  --callout-important: var(--color-cyan-rgb, 91,175,183);
  --callout-info: var(--color-blue-rgb, 99,156,192);
  --callout-question: var(--color-orange-rgb, 238,163,89);
  --callout-quote: var(--callout-rgb-quote, 173,214,171);
  --callout-radius: var(--radius-m, 8px);
  --callout-rgb-abstract: 34,152,225;
  --callout-rgb-attention: 255,161,32;
  --callout-rgb-bug: 153,93,133;
  --callout-rgb-caution: 255,161,32;
  --callout-rgb-check: 87,200,83;
  --callout-rgb-cite: 237,217,162;
  --callout-rgb-danger: 226,72,86;
  --callout-rgb-done: 87,200,83;
  --callout-rgb-error: 226,72,86;
  --callout-rgb-example: 216,141,130;
  --callout-rgb-fail: 226,72,86;
  --callout-rgb-faq: 130,190,235;
  --callout-rgb-general: 182,196,182;
  --callout-rgb-help: 250,128,96;
  --callout-rgb-hint: 70,206,185;
  --callout-rgb-important: 246,113,118;
  --callout-rgb-info: 71,162,187;
  --callout-rgb-missing: 226,72,86;
  --callout-rgb-note: 200,175,155;
  --callout-rgb-question: 130,190,235;
  --callout-rgb-quote: 173,214,171;
  --callout-rgb-success: 87,200,83;
  --callout-rgb-summary: 234,181,52;
  --callout-rgb-tip: 70,206,185;
  --callout-rgb-tldr: 240,180,225;
  --callout-rgb-todo: 58,173,252;
  --callout-rgb-warning: 255,161,32;
  --callout-shadow-offset: 4px;
  --callout-success: var(--color-green-rgb, 100,194,113);
  --callout-summary: var(--color-cyan-rgb, 91,175,183);
  --callout-tip: var(--color-cyan-rgb, 91,175,183);
  --callout-title-color: var(--text-normal, hsla(34, 39%, 74%, 1));
  --callout-title-padding: var(--size-4-3) var(--size-4-4, 12px 16px);
  --callout-title-shadow: inset 0px -1px 1px 0px rgba(0, 0, 0, 0.25),inset 0px 1px 1px 0px rgba(255, 255, 255, 0.1);
  --callout-todo: var(--color-blue-rgb, 99,156,192);
  --callout-warning: var(--color-orange-rgb, 238,163,89);
  --cancelled-chbx-color: hsla(32, 10%, 58%, 1);
  --cancelled-chbx-text-color: var(--text-faint, hsla(34, 24%, 46%, 1));
  --cancelled-chbx-text-decoration: line-through;
  --canvas-background: var(--editor-bg-color, hsla(30, 19%, 15%, 1));
  --canvas-card-label-color: var(--text-faint, hsla(34, 24%, 46%, 1));
  --canvas-color: var(--color-gray-rgb, 166,150,142);
  --canvas-color-1: var(--color-red-rgb, 228,87,78);
  --canvas-color-2: var(--color-orange-rgb, 238,163,89);
  --canvas-color-3: var(--color-yellow-rgb, 249,207,81);
  --canvas-color-4: var(--color-green-rgb, 100,194,113);
  --canvas-color-5: var(--color-blue-rgb, 99,156,192);
  --canvas-color-6: var(--color-purple-rgb, 139,113,185);
  --canvas-controls-icon-size: var(--icon-s, 15px);
  --canvas-dot-pattern: var(--color-base-30, hsla(31, 27%, 25%, 1));
  --canvas-icon-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --canvas-icon-color-disabled: var(--color-d-gray-70, hsla(31, 27%, 25%, 1));
  --canvas-icon-color-hover: var(--color-d-gray-30, hsla(34, 31%, 68%, 1));
  --canvas-menu-bg: color-mix(in srgb, var(--color-d-gray-90) 60%, var(--color-d-gray-100));
  --canvas-menu-bg-hover: color-mix(in srgb, var(--color-d-gray-90) 10%, var(--color-d-gray-100));
  --canvas-menu-border: 1px solid var(--background-modifier-border);
  --canvas-menu-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.14),0px 1px 4px -2.1px rgba(0, 0, 0, 0.22),0px 2px 8px -1.2px rgba(0, 0, 0, 0.15);
  --caret-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --checkbox-border-color: var(--color-d-gray-70, hsla(31, 27%, 25%, 1));
  --checkbox-border-color-hover: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --checkbox-color: var(--color-d-green-40, hsla(154, 75%, 26%, 1));
  --checkbox-color-hover: var(--color-d-green-30, hsla(155, 78%, 29%, 1));
  --checkbox-marker-color: var(--background-primary, white);
  --checked-border-color: rgba(255, 255, 255, 0.15);
  --checked-border-color-hover: rgba(255, 255, 255, 0.1);
  --checklist-bg: var(--color-d-gray-110, hsla(30, 17%, 14%, 1));
  --checklist-done-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --checklist-shadow-hover: 0px 0px 0px 3px rgba(0, 0, 0, 0.3);
  --clickable-icon-radius: calc(var(--radius-s) + 1px);
  --clock-chbx-color: hsla(210, 39%, 52%, 1);
  --close-button-radius: var(--radius-l, 12px);
  --code-background: var(--background-primary-alt, hsla(30, 17%, 14%, 1));
  --code-border-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --code-bracket-background: var(--background-modifier-hover, rgba(0, 0, 0, 0.3));
  --code-comment: var(--text-faint, hsla(34, 24%, 46%, 1));
  --code-function: var(--color-yellow, rgb(225, 178, 67));
  --code-important: var(--color-orange, rgb(203, 128, 53));
  --code-keyword: var(--color-pink, rgb(180, 100, 100));
  --code-normal: var(--text-normal, hsla(34, 39%, 74%, 1));
  --code-operator: var(--color-red, rgb(192, 78, 78));
  --code-property: var(--color-cyan, rgb(70, 169, 180));
  --code-punctuation: var(--text-muted, hsla(35, 27%, 55%, 1));
  --code-radius: var(--radius-m, 8px);
  --code-string: var(--color-green, rgb(80, 196, 101));
  --code-tag: var(--color-red, rgb(192, 78, 78));
  --code-value: var(--color-purple, rgb(113, 97, 194));
  --collapse-icon-color: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --collapse-icon-color-collapsed: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --color-accent-1: hsl( calc(var(--accent-h) - 3), calc(var(--accent-s)*1.02), calc(var(--accent-l)*1.15) );
  --color-accent-2: hsl( calc(var(--accent-h) - 5), calc(var(--accent-s)*1.16), calc(var(--accent-l)*1.34) );
  --color-accent-hsl: var(--accent-h),var(--accent-s),var(--accent-l);
  --color-base-00: var(--color-d-gray-140, hsla(32, 21%, 9%, 1));
  --color-base-05: var(--color-d-gray-120, hsla(29, 16%, 13%, 1));
  --color-base-10: var(--color-d-gray-100, hsla(30, 19%, 15%, 1));
  --color-base-100: var(--color-d-gray-10, hsla(32, 48%, 85%, 1));
  --color-base-20: var(--color-d-gray-90, hsla(33, 20%, 17%, 1));
  --color-base-25: var(--color-d-gray-80, hsla(28, 22%, 19%, 1));
  --color-base-30: var(--color-d-gray-70, hsla(31, 27%, 25%, 1));
  --color-base-35: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --color-base-40: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --color-base-50: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --color-base-60: var(--color-d-gray-30, hsla(34, 31%, 68%, 1));
  --color-base-70: var(--color-d-gray-20, hsla(34, 39%, 74%, 1));
  --color-blue: rgb(63, 137, 176);
  --color-blue-rgb: 99,156,192;
  --color-cyan: rgb(70, 169, 180);
  --color-cyan-rgb: 91,175,183;
  --color-d-alpha-blue: hsla(186, 64%, 46%, 0.2);
  --color-d-alpha-gray: hsla(34, 24%, 40%, 0.2);
  --color-d-alpha-green: hsla(74, 69%, 44%, 0.2);
  --color-d-alpha-orange: hsla(27, 100%, 50%, 0.2);
  --color-d-alpha-purple: hsla(236, 100%, 72%, 0.2);
  --color-d-alpha-red: hsla(350, 84%, 63%, 0.2);
  --color-d-alpha-yellow: hsla(44, 100%, 50%, 0.2);
  --color-d-blue-10: hsla(191, 54%, 62%, 1);
  --color-d-blue-20: hsla(194, 59%, 56%, 1);
  --color-d-blue-30: hsla(197, 48%, 49%, 1);
  --color-d-blue-40: hsla(201, 45%, 40%, 1);
  --color-d-gray-10: hsla(32, 48%, 85%, 1);
  --color-d-gray-100: hsla(30, 19%, 15%, 1);
  --color-d-gray-110: hsla(30, 17%, 14%, 1);
  --color-d-gray-120: hsla(29, 16%, 13%, 1);
  --color-d-gray-130: hsla(24, 18%, 11%, 1);
  --color-d-gray-140: hsla(32, 21%, 9%, 1);
  --color-d-gray-20: hsla(34, 39%, 74%, 1);
  --color-d-gray-30: hsla(34, 31%, 68%, 1);
  --color-d-gray-40: hsla(35, 27%, 55%, 1);
  --color-d-gray-50: hsla(34, 24%, 46%, 1);
  --color-d-gray-60: hsla(33, 27%, 33%, 1);
  --color-d-gray-70: hsla(31, 27%, 25%, 1);
  --color-d-gray-80: hsla(28, 22%, 19%, 1);
  --color-d-gray-90: hsla(33, 20%, 17%, 1);
  --color-d-green-10: hsla(152, 51%, 54%, 1);
  --color-d-green-20: hsla(154, 57%, 42%, 1);
  --color-d-green-30: hsla(155, 78%, 29%, 1);
  --color-d-green-40: hsla(154, 75%, 26%, 1);
  --color-d-orange-10: hsla(26, 85%, 58%, 1);
  --color-d-orange-20: hsla(24, 84%, 50%, 1);
  --color-d-orange-30: hsla(22, 82%, 47%, 1);
  --color-d-orange-40: hsla(19, 81%, 41%, 1);
  --color-d-purple-10: hsla(242, 52%, 69%, 1);
  --color-d-purple-20: hsla(241, 45%, 57%, 1);
  --color-d-purple-30: hsla(239, 45%, 51%, 1);
  --color-d-purple-40: hsla(238, 47%, 48%, 1);
  --color-d-red-10: hsla(5, 94%, 73%, 1);
  --color-d-red-20: hsla(4, 91%, 67%, 1);
  --color-d-red-30: hsla(4, 88%, 61%, 1);
  --color-d-red-40: hsla(2, 75%, 52%, 1);
  --color-d-yellow-10: hsla(43, 69%, 63%, 1);
  --color-d-yellow-20: hsla(42, 79%, 51%, 1);
  --color-d-yellow-30: hsla(40, 78%, 48%, 1);
  --color-d-yellow-40: hsla(38, 76%, 42%, 1);
  --color-gray: rgb(166, 150, 141);
  --color-gray-rgb: 166,150,142;
  --color-green: rgb(80, 196, 101);
  --color-green-rgb: 100,194,113;
  --color-orange: rgb(203, 128, 53);
  --color-orange-rgb: 238,163,89;
  --color-pink: rgb(180, 100, 100);
  --color-pink-rgb: 224,108,138;
  --color-purple: rgb(113, 97, 194);
  --color-purple-rgb: 139,113,185;
  --color-red: rgb(192, 78, 78);
  --color-red-rgb: 228,87,78;
  --color-yellow: rgb(225, 178, 67);
  --color-yellow-rgb: 249,207,81;
  --community-item-flair-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  --community-item-selected-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.18),0px 1px 3px -2.6px rgba(0, 0, 0, 0.33),0px 2px 6px -4.2px rgba(0, 0, 0, 0.29),0px 4px 12px -6px rgba(0, 0, 0, 0.9);
  --community-item-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03);
  --community-item-shadow-hover: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1);
  --component-font-weight: var(--font-medium, 550);
  --con-chbx-color: hsla(12, 64%, 47%, 1);
  --copy-code-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.39),0px 2px 4px -2px rgba(0, 0, 0, 0.39);
  --copy-code-button-radius: var(--radius-s, 4px);
  --cursor: pointer;
  --dark: var(--text-normal, var(--color-d-gray-20, hsla(34, 39%, 74%, 1)));
  --darkgray: var(--text-normal, var(--color-d-gray-20, hsla(34, 39%, 74%, 1)));
  --disabled-component-opacity: 0.3;
  --divider-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --divider-color-hover: var(--background-modifier-border-hover, color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)));
  --divider-radius: var(--radius-m, 8px);
  --divider-width-hover: 4px;
  --down-chbx-color: hsla(4, 56%, 54%, 1);
  --drag-ghost-background: var(--interactive-accent, hsl( 28, 27.54%, 27.6% ));
  --drag-ghost-text-color: var(--text-on-accent, hsla(32, 48%, 85%, 1));
  --dropdown-background: var(--interactive-normal, hsla(29, 16%, 13%, 1));
  --dropdown-background-hover: var(--interactive-hover, color-mix(in hsl, hsla(30, 19%, 15%, 1) 50%, hsla(29, 16%, 13%, 1)));
  --dropdown-height: calc(var(--font-ui-small) + var(--size-4-4) + var(--button-inset-shadow-size));
  --editor-bg-color: var(--background-primary, hsla(30, 19%, 15%, 1));
  --editor-bgpattern-color: var(--color-d-gray-70, hsla(31, 27%, 25%, 1));
  --editor-bgpattern-size: 50px 50px;
  --editor-border-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --editor-border-radius: var(--radius-l, 12px);
  --editor-border-width: 1px;
  --editor-header-icon: var(--icon-s, 15px);
  --editor-pane-margin: 10px;
  --editor-tab-icon: var(--icon-s, 15px);
  --embed-background: var(--embed-bg-color-mix, color-mix( in srgb, hsla(30, 17%, 14%, 1) 50%, hsla(30, 19%, 15%, 1) ));
  --embed-bg-color-mix: color-mix( in srgb, var(--background-primary-alt) 50%, var(--editor-bg-color) );
  --embed-border-bottom: var(--embed-border-bottom-width) var(--embed-border-bottom-style) var(--embed-border-bottom-color, 1px solid hsla(28, 22%, 19%, 1));
  --embed-border-bottom-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --embed-border-bottom-style: solid;
  --embed-border-bottom-width: 1px;
  --embed-border-end: var(--embed-border-end-width) var(--embed-border-end-style) var(--embed-border-end-color, 1px solid hsla(28, 22%, 19%, 1));
  --embed-border-end-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --embed-border-end-style: solid;
  --embed-border-end-width: 1px;
  --embed-border-radius: var(--radius-l, 12px);
  --embed-border-start: var(--embed-border-start-width) var(--embed-border-start-style) var(--embed-border-start-color, 1px solid hsla(28, 22%, 19%, 1));
  --embed-border-start-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --embed-border-start-style: solid;
  --embed-border-start-width: 1px;
  --embed-border-top: var(--embed-border-top-width) var(--embed-border-top-style) var(--embed-border-top-color, 1px solid hsla(28, 22%, 19%, 1));
  --embed-border-top-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --embed-border-top-style: solid;
  --embed-border-top-width: 1px;
  --embed-edit-btn-bg: color-mix(in srgb, var(--color-d-gray-130) 70%, transparent);
  --embed-edit-btn-bg-hover: color-mix(in srgb, var(--color-d-gray-130) 100%, transparent);
  --embed-edit-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.5),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.5);
  --embed-edit-btn-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.5),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.5),0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  --embed-left-right-padding: var(--size-4-4, 16px);
  --embed-media-border-radius: var(--radius-m, 8px);
  --embed-padding: var(--size-2-3) var(--embed-left-right-padding, 6px 16px 0px) 0px;
  --embed-title-border: var(--embed-title-border-width) var(--embed-title-border-style) var(--embed-title-border-color, 1px solid hsla(28, 22%, 19%, 1));
  --embed-title-border-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --embed-title-border-style: solid;
  --embed-title-border-width: 1px;
  --embed-title-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --embed-title-font-size: var(--font-text-size, 16px);
  --embed-title-font-weight: var(--font-medium, 550);
  --embed-title-letter-spacing: normal;
  --embed-title-margin-bottom: var(--size-4-2, 8px);
  --embed-title-text-transform: none;
  --empty-state-action-btn-bg: var(--background-primary-alt, hsla(30, 17%, 14%, 1));
  --file-header-background: var(--background-primary, hsla(30, 19%, 15%, 1));
  --file-header-background-focused: var(--background-primary, hsla(30, 19%, 15%, 1));
  --file-header-border: var(--file-header-border-width) solid var(--file-header-border-color, 1px solid hsla(28, 22%, 19%, 1));
  --file-header-border-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --file-header-border-width: 1px;
  --file-header-font: var(--font-interface, "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-title-color: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --file-line-width: 40rem;
  --file-max-line-width: 88%;
  --file-tab-gap: 0px;
  --flair-background: var(--interactive-normal, hsla(29, 16%, 13%, 1));
  --flair-color: var(--text-normal, hsla(34, 39%, 74%, 1));
  --flair-count-bg-color: var(--color-d-gray-120, hsla(29, 16%, 13%, 1));
  --flair-count-color: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --flair-count-padding: 2px 4px;
  --flair-count-radius: calc(var(--radius-s) + 1px);
  --font-bold: 750;
  --font-extrabold: 850;
  --font-extralight: 250;
  --font-interface-theme: "Inter";
  --font-light: 350;
  --font-medium: 550;
  --font-mermaid: var(--font-text, "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "Cascadia Code";
  --font-normal: 450;
  --font-semibold: 650;
  --font-text-theme: "Inter";
  --font-thin: 150;
  --font-ui-smallest: 11px;
  --font-weight: var(--font-normal, 450);
  --footnote-divider-color: var(--metadata-divider-color, hsla(28, 22%, 19%, 1));
  --footnote-id-color: var(--text-muted, hsla(35, 27%, 55%, 1));
  --footnote-id-color-no-occurrences: var(--text-faint, hsla(34, 24%, 46%, 1));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(0, 0, 0, 0.2));
  --graph-arrow: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --graph-line: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --graph-node: var(--color-d-blue-30, hsla(197, 48%, 49%, 1));
  --graph-node-attachment: var(--color-d-green-30, hsla(155, 78%, 29%, 1));
  --graph-node-focused: var(--color-d-gray-20, hsla(34, 39%, 74%, 1));
  --graph-node-highlight-fill: var(--color-d-gray-30, hsla(34, 31%, 68%, 1));
  --graph-node-highlight-line: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --graph-node-tag: var(--color-d-red-30, hsla(4, 88%, 61%, 1));
  --graph-node-unresolved: var(--color-d-yellow-20, hsla(42, 79%, 51%, 1));
  --graph-node-unresolved-opacity: 1;
  --graph-text: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --gray: var(--text-muted, var(--color-d-gray-40, hsla(35, 27%, 55%, 1)));
  --gutter-color: color-mix(in srgb, var(--color-d-gray-60) 40%, var(--color-d-gray-70));
  --gutter-color-active: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --h1-bg-color: transparent;
  --h1-border-bottom-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h1-border-left-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h1-border-radius: 0px;
  --h1-border-right-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h1-border-style: solid;
  --h1-border-top-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h1-border-width: 0px;
  --h1-color: var(--color-d-gray-10, hsla(32, 48%, 85%, 1));
  --h1-text-align: left;
  --h1-text-transform: normal;
  --h1-weight: var(--font-semibold, 650);
  --h2-bg-color: transparent;
  --h2-border-bottom-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h2-border-left-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h2-border-radius: 0px;
  --h2-border-right-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h2-border-style: solid;
  --h2-border-top-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h2-border-width: 0px;
  --h2-color: var(--color-d-gray-10, hsla(32, 48%, 85%, 1));
  --h2-text-align: left;
  --h2-text-transform: normal;
  --h2-weight: var(--font-semibold, 650);
  --h3-bg-color: transparent;
  --h3-border-bottom-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h3-border-left-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h3-border-radius: 0px;
  --h3-border-right-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h3-border-style: solid;
  --h3-border-top-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h3-border-width: 0px;
  --h3-color: var(--color-d-gray-10, hsla(32, 48%, 85%, 1));
  --h3-text-align: left;
  --h3-text-transform: normal;
  --h3-weight: var(--font-semibold, 650);
  --h4-bg-color: transparent;
  --h4-border-bottom-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h4-border-left-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h4-border-radius: 0px;
  --h4-border-right-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h4-border-style: solid;
  --h4-border-top-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h4-border-width: 0px;
  --h4-color: var(--color-d-gray-10, hsla(32, 48%, 85%, 1));
  --h4-text-align: left;
  --h4-text-transform: normal;
  --h4-weight: var(--font-semibold, 650);
  --h5-bg-color: transparent;
  --h5-border-bottom-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h5-border-left-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h5-border-radius: 0px;
  --h5-border-right-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h5-border-style: solid;
  --h5-border-top-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h5-border-width: 0px;
  --h5-color: var(--color-d-gray-10, hsla(32, 48%, 85%, 1));
  --h5-text-align: left;
  --h5-text-transform: normal;
  --h5-weight: var(--font-semibold, 650);
  --h6-bg-color: transparent;
  --h6-border-bottom-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h6-border-left-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h6-border-radius: 0px;
  --h6-border-right-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h6-border-style: solid;
  --h6-border-top-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --h6-border-width: 0px;
  --h6-color: var(--color-d-gray-10, hsla(32, 48%, 85%, 1));
  --h6-text-align: left;
  --h6-text-transform: normal;
  --h6-weight: var(--font-semibold, 650);
  --header-height: 46px;
  --headerFont: var(--font-text-theme, "Inter");
  --heading-formatting: var(--text-faint, hsla(34, 24%, 46%, 1));
  --highlight: var(--text-highlight-bg, var(--color-d-alpha-yellow, hsla(44, 100%, 50%, 0.2)));
  --hr-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --hr-thickness: 1px;
  --icon-bg: transparent;
  --icon-bg-active: var(--color-d-gray-80, hsla(28, 22%, 19%, 1));
  --icon-bg-active-menu: transparent;
  --icon-bg-hover: transparent;
  --icon-bg-pressed: transparent;
  --icon-color: color-mix(in srgb, var(--color-d-gray-60) 30%, var(--color-d-gray-50));
  --icon-color-active: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --icon-color-focused: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --icon-color-hover: color-mix(in srgb, var(--color-d-gray-50) 70%, var(--color-d-gray-40));
  --icon-container-radius: 0px;
  --icon-m: 16px;
  --icon-opacity: 1;
  --icon-s: 15px;
  --icon-size: var(--ribbon-icon, 16px);
  --icon-xl: 24px;
  --icon-xs: 13px;
  --idea-chbx-color: hsla(30, 72%, 62%, 1);
  --important-chbx-color: hsla(17, 83%, 47%);
  --important-chbx-icon-color: white;
  --important-chbx-radius: 100%;
  --indentation-guide-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --indentation-guide-color-active: var(--background-modifier-border-focus, color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)));
  --indentation-guide-reading-indent: -1em;
  --info-chbx-color: hsla(178, 31%, 41%, 1);
  --info-chbx-icon-color: white;
  --inline-code-bg: var(--color-d-gray-130, hsla(24, 18%, 11%, 1));
  --inline-code-color: var(--color-d-red-20, hsla(4, 91%, 67%, 1));
  --inline-code-radius: var(--radius-s, 4px);
  --inline-query-bg: color-mix(in srgb, var(--background-secondary) 25%, var(--background-primary));
  --inline-query-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.26);
  --inline-title-color: var(--color-d-gray-10, hsla(32, 48%, 85%, 1));
  --inline-title-weight: var(--h1-weight, 650);
  --inprogress-chbx-border-color: color-mix(in srgb, var(--inprogress-chbx-color) 15%, var(--color-base-60));
  --inprogress-chbx-color: hsla(31, 85%, 59%, 1);
  --inprogress-chbx-color-hover: hsla(32, 95%, 65%, 1);
  --input-date-separator: var(--text-faint, hsla(34, 24%, 46%, 1));
  --input-font-weight: var(--font-normal, 450);
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, hsla(34, 24%, 46%, 1));
  --input-radius: var(--button-radius, 8px);
  --input-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.02),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.25),0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  --input-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.45),inset 0px 0px 0px calc(1px + var(--button-inset-shadow-size)) rgba(0, 0, 0, 0.15),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.57),0px 0px 0px 1px rgba(255, 255, 255, 0.02);
  --input-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.06),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.25);
  --interactive-accent: var(--color-accent-1, hsl( 28, 27.54%, 27.6% ));
  --interactive-accent-hover: var(--color-accent-2, hsl( 26, 31.32%, 32.16% ));
  --interactive-accent-hsl: var(--color-accent-hsl, 31,27%,24%);
  --interactive-hover: color-mix(in hsl, var(--color-d-gray-100) 50%, var(--interactive-normal));
  --interactive-normal: var(--color-d-gray-120, hsla(29, 16%, 13%, 1));
  --interface-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0;
  --italic-color: var(--color-d-blue-20, hsla(194, 59%, 56%, 1));
  --italic-highlight-bg: var(--color-d-alpha-blue, hsla(186, 64%, 46%, 0.2));
  --italic-highlight-color: var(--text-normal, hsla(34, 39%, 74%, 1));
  --kanban-drag-item-border: none;
  --kanban-drag-item-shadow: 0px 8.3px 22.8px -9px rgba(0, 0, 0, 0.49),0px 6.2px 10.1px -4.2px rgba(0, 0, 0, 0.52),0px 2.1px 6.8px -3.2px rgba(0, 0, 0, 0.59);
  --kanban-item-bg: var(--color-d-gray-90, hsla(33, 20%, 17%, 1));
  --kanban-item-border: none;
  --kanban-item-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.4),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.19),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.06),0px 2px 2px 0px rgba(0, 0, 0, 0.13);
  --kanban-lane-bg: color-mix(in srgb, var(--background-primary-alt) 50%, var(--background-secondary));
  --kanban-lane-border: 1px solid color-mix(in srgb, var(--color-d-gray-90) 40%, var(--color-d-gray-100));
  --kanban-lane-shadow: none;
  --kanban-new-item-bg: transparent;
  --kanban-new-item-bg-hover: var(--color-d-gray-100, hsla(30, 19%, 15%, 1));
  --kanban-new-item-color: var(--text-faint, hsla(34, 24%, 46%, 1));
  --kanban-new-item-color-hover: var(--text-muted, hsla(35, 27%, 55%, 1));
  --kanban-new-item-shadow: none;
  --kanban-new-item-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.22),0px 2px 4px 0px rgba(0, 0, 0, 0.14);
  --kanban-title-count-bg: var(--color-d-gray-80, hsla(28, 22%, 19%, 1));
  --kanban-title-count-color: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --kanban-title-count-radius: var(--radius-l, 12px);
  --kanban-title-text-input-color: var(--text-normal, hsla(34, 39%, 74%, 1));
  --kbd-background: var(--color-d-gray-110, hsla(30, 17%, 14%, 1));
  --kbd-color: var(--color-d-red-20, hsla(4, 91%, 67%, 1));
  --kbd-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.17),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 0px rgba(0, 0, 0, 0.2);
  --language-chbx-color: hsla(7, 63%, 62%, 1);
  --law-chbx-color: hsla(34, 34%, 52%, 1);
  --light: var(--background-primary, var(--color-d-gray-100, hsla(30, 19%, 15%, 1)));
  --lightgray: var(--background-secondary, var(--color-d-gray-120, hsla(29, 16%, 13%, 1)));
  --link-ahref-color: var(--color-d-red-20, hsla(4, 91%, 67%, 1));
  --link-ahref-color-hover: var(--color-d-red-10, hsla(5, 94%, 73%, 1));
  --link-ahref-decoration-color: color-mix(in srgb, currentColor var(--link-decoration-opacity), transparent);
  --link-ahref-decoration-color-hover: color-mix(in srgb, var(--link-ahref-color-hover) var(--link-decoration-opacity), transparent);
  --link-color: var(--color-d-yellow-20, hsla(42, 79%, 51%, 1));
  --link-color-hover: var(--color-d-yellow-10, hsla(43, 69%, 63%, 1));
  --link-decoration-color: color-mix(in srgb, var(--link-color) var(--link-decoration-opacity), transparent);
  --link-decoration-color-hover: color-mix(in srgb, var(--link-color-hover) var(--link-decoration-opacity), transparent);
  --link-decoration-opacity: 22%;
  --link-decoration-thickness: 1.5px;
  --link-external-color: var(--color-d-green-20, hsla(154, 57%, 42%, 1));
  --link-external-color-hover: var(--color-d-green-10, hsla(152, 51%, 54%, 1));
  --link-external-decoration-color: color-mix(in srgb, var(--link-external-color) var(--link-decoration-opacity), transparent);
  --link-external-decoration-color-hover: color-mix(in srgb, var(--link-external-color-hover) var(--link-decoration-opacity), transparent);
  --link-opacity-active: 0.5;
  --link-underline-offset: 2px;
  --link-unresolved-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --link-unresolved-color-hover: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --link-unresolved-decoration-color: color-mix(in srgb, var(--link-unresolved-color) var(--link-decoration-opacity), transparent);
  --link-unresolved-decoration-color-hover: color-mix(in srgb, var(--link-unresolved-color-hover) var(--link-decoration-opacity), transparent);
  --link-unresolved-opacity: 1;
  --link-weight: var(--font-weight, 450);
  --list-bullet-indent-reading: -1em;
  --list-indent-editing: 0.6em;
  --list-marker-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --list-marker-color-collapsed: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --list-marker-color-hover: var(--color-d-gray-30, hsla(34, 31%, 68%, 1));
  --loading-line-bg-color: var(--background-secondary, hsla(29, 16%, 13%, 1));
  --loading-line-color: var(--color-d-blue-10, hsla(191, 54%, 62%, 1));
  --loading-line-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1);
  --location-chbox-color: hsla(0, 56%, 48%, 1);
  --menu-background: var(--background-secondary, hsla(29, 16%, 13%, 1));
  --menu-border-color: var(--background-modifier-border-hover, color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)));
  --menu-item-bg-active: var(--color-d-gray-130, hsla(24, 18%, 11%, 1));
  --menu-item-bg-hover: rgba(0, 0, 0, 0.25);
  --menu-item-color-active: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --menu-item-icon-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --menu-item-icon-color-active: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --menu-item-radius: calc(var(--radius-m) - 1px);
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.228),0px 3.4px 6.7px rgba(0, 0, 0, 0.242),0px 15px 30px rgba(0, 0, 0, 0.27));
  --metadata-background: color-mix(in srgb, var(--editor-bg-color) 50%, var(--background-primary-alt));
  --metadata-border-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --metadata-border-radius: var(--radius-m, 8px);
  --metadata-border-width: 1px;
  --metadata-container-padding: var(--size-4-3) var(--size-4-3, 12px 12px);
  --metadata-divider-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --metadata-divider-width: 0px;
  --metadata-input-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.2));
  --metadata-input-font: var(--font-interface, "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-shadow-active: inset 0px 0px 0px 1px var(--background-modifier-border),0px 0px 0px 1px var(--background-modifier-border);
  --metadata-input-shadow-hover: none;
  --metadata-input-text-color: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --metadata-key-input-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --metadata-key-input-color-active: var(--color-d-gray-30, hsla(34, 31%, 68%, 1));
  --metadata-label-background-active: var(--metadata-input-background-active, rgba(0, 0, 0, 0.2));
  --metadata-label-font: var(--font-interface, "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsla(35, 27%, 55%, 1));
  --metadata-label-text-color-hover: var(--text-muted, hsla(35, 27%, 55%, 1));
  --metadata-properties-title-color: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --metadata-properties-title-color-collapsed: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --metadata-properties-title-color-hover: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.3));
  --metadata-property-radius: calc(var(--radius-m) - 1px);
  --metadata-tab-background: var(--background-secondary, hsla(29, 16%, 13%, 1));
  --modal-background: var(--background-primary, hsla(30, 19%, 15%, 1));
  --modal-border-color: var(--background-modifier-border-hover, color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)));
  --modal-close-button-size: 20px;
  --modal-radius: var(--radius-xl, 16px);
  --monospace-font-feature: "calt" 1,"ss01" 1,"ss02" 1,"ss03" 1,"ss05" 1,"ss19" 1,"zero" 1;
  --nav-collapse-icon-color: var(--collapse-icon-color, hsla(33, 27%, 33%, 1));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsla(34, 24%, 46%, 1));
  --nav-file-padding-active: calc(var(--size-4-1)) var(--size-4-2) calc(var(--size-4-1) + var(--button-inset-shadow-size)) var(--size-4-6);
  --nav-file-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.27),inset 0px calc(var(--button-axis-offset)*-1) 0px var(--button-axis-offset) rgba(0, 0, 0, 0.24),0px 2px 3px 0px rgba(0, 0, 0, 0.22);
  --nav-file-tag-bg: transparent;
  --nav-file-tag-color: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --nav-folder-1-bg-color: color-mix(in srgb, var(--color-d-alpha-red) 60%, transparent);
  --nav-folder-1-bg-color-hover: color-mix(in srgb, var(--nav-folder-1-bg-color) 70%, transparent);
  --nav-folder-1-collapse-color: color-mix(in srgb, var(--nav-folder-1-color) 50%, transparent);
  --nav-folder-1-color: var(--color-d-red-30, hsla(4, 88%, 61%, 1));
  --nav-folder-1-indent-color: color-mix(in srgb, var(--nav-folder-1-color) 25%, transparent);
  --nav-folder-10-bg-color: color-mix(in srgb, var(--color-d-alpha-green) 60%, transparent);
  --nav-folder-10-bg-color-hover: color-mix(in srgb, var(--nav-folder-10-bg-color) 70%, transparent);
  --nav-folder-10-collapse-color: color-mix(in srgb, var(--nav-folder-10-color) 50%, transparent);
  --nav-folder-10-color: var(--color-d-green-20, hsla(154, 57%, 42%, 1));
  --nav-folder-10-indent-color: color-mix(in srgb, var(--nav-folder-10-color) 25%, transparent);
  --nav-folder-11-bg-color: color-mix(in srgb, var(--color-d-alpha-blue) 60%, transparent);
  --nav-folder-11-bg-color-hover: color-mix(in srgb, var(--nav-folder-11-bg-color) 70%, transparent);
  --nav-folder-11-collapse-color: color-mix(in srgb, var(--nav-folder-11-color) 50%, transparent);
  --nav-folder-11-color: var(--color-d-blue-20, hsla(194, 59%, 56%, 1));
  --nav-folder-11-indent-color: color-mix(in srgb, var(--nav-folder-11-color) 25%, transparent);
  --nav-folder-12-bg-color: color-mix(in srgb, var(--color-d-alpha-purple) 60%, transparent);
  --nav-folder-12-bg-color-hover: color-mix(in srgb, var(--nav-folder-12-bg-color) 70%, transparent);
  --nav-folder-12-collapse-color: color-mix(in srgb, var(--nav-folder-12-color) 50%, transparent);
  --nav-folder-12-color: var(--color-d-purple-10, hsla(242, 52%, 69%, 1));
  --nav-folder-12-indent-color: color-mix(in srgb, var(--nav-folder-12-color) 25%, transparent);
  --nav-folder-2-bg-color: color-mix(in srgb, var(--color-d-alpha-orange) 60%, transparent);
  --nav-folder-2-bg-color-hover: color-mix(in srgb, var(--nav-folder-2-bg-color) 70%, transparent);
  --nav-folder-2-collapse-color: color-mix(in srgb, var(--nav-folder-2-color) 50%, transparent);
  --nav-folder-2-color: var(--color-d-orange-20, hsla(24, 84%, 50%, 1));
  --nav-folder-2-indent-color: color-mix(in srgb, var(--nav-folder-2-color) 25%, transparent);
  --nav-folder-3-bg-color: color-mix(in srgb, var(--color-d-alpha-yellow) 60%, transparent);
  --nav-folder-3-bg-color-hover: color-mix(in srgb, var(--nav-folder-3-bg-color) 70%, transparent);
  --nav-folder-3-collapse-color: color-mix(in srgb, var(--nav-folder-3-color) 50%, transparent);
  --nav-folder-3-color: var(--color-d-yellow-20, hsla(42, 79%, 51%, 1));
  --nav-folder-3-indent-color: color-mix(in srgb, var(--nav-folder-3-color) 25%, transparent);
  --nav-folder-4-bg-color: color-mix(in srgb, var(--color-d-alpha-green) 60%, transparent);
  --nav-folder-4-bg-color-hover: color-mix(in srgb, var(--nav-folder-4-bg-color) 70%, transparent);
  --nav-folder-4-collapse-color: color-mix(in srgb, var(--nav-folder-4-color) 50%, transparent);
  --nav-folder-4-color: var(--color-d-green-20, hsla(154, 57%, 42%, 1));
  --nav-folder-4-indent-color: color-mix(in srgb, var(--nav-folder-4-color) 25%, transparent);
  --nav-folder-5-bg-color: color-mix(in srgb, var(--color-d-alpha-blue) 60%, transparent);
  --nav-folder-5-bg-color-hover: color-mix(in srgb, var(--nav-folder-5-bg-color) 70%, transparent);
  --nav-folder-5-collapse-color: color-mix(in srgb, var(--nav-folder-5-color) 50%, transparent);
  --nav-folder-5-color: var(--color-d-blue-20, hsla(194, 59%, 56%, 1));
  --nav-folder-5-indent-color: color-mix(in srgb, var(--nav-folder-5-color) 25%, transparent);
  --nav-folder-6-bg-color: color-mix(in srgb, var(--color-d-alpha-purple) 60%, transparent);
  --nav-folder-6-bg-color-hover: color-mix(in srgb, var(--nav-folder-6-bg-color) 70%, transparent);
  --nav-folder-6-collapse-color: color-mix(in srgb, var(--nav-folder-6-color) 50%, transparent);
  --nav-folder-6-color: var(--color-d-purple-10, hsla(242, 52%, 69%, 1));
  --nav-folder-6-indent-color: color-mix(in srgb, var(--nav-folder-6-color) 25%, transparent);
  --nav-folder-7-bg-color: color-mix(in srgb, var(--color-d-alpha-red) 60%, transparent);
  --nav-folder-7-bg-color-hover: color-mix(in srgb, var(--nav-folder-7-bg-color) 70%, transparent);
  --nav-folder-7-collapse-color: color-mix(in srgb, var(--nav-folder-7-color) 50%, transparent);
  --nav-folder-7-color: var(--color-d-red-30, hsla(4, 88%, 61%, 1));
  --nav-folder-7-indent-color: color-mix(in srgb, var(--nav-folder-7-color) 25%, transparent);
  --nav-folder-8-bg-color: color-mix(in srgb, var(--color-d-alpha-orange) 60%, transparent);
  --nav-folder-8-bg-color-hover: color-mix(in srgb, var(--nav-folder-8-bg-color) 70%, transparent);
  --nav-folder-8-collapse-color: color-mix(in srgb, var(--nav-folder-8-color) 50%, transparent);
  --nav-folder-8-color: var(--color-d-orange-20, hsla(24, 84%, 50%, 1));
  --nav-folder-8-indent-color: color-mix(in srgb, var(--nav-folder-8-color) 25%, transparent);
  --nav-folder-9-bg-color: color-mix(in srgb, var(--color-d-alpha-yellow) 60%, transparent);
  --nav-folder-9-bg-color-hover: color-mix(in srgb, var(--nav-folder-9-bg-color) 70%, transparent);
  --nav-folder-9-collapse-color: color-mix(in srgb, var(--nav-folder-9-color) 50%, transparent);
  --nav-folder-9-color: var(--color-d-yellow-20, hsla(42, 79%, 51%, 1));
  --nav-folder-9-indent-color: color-mix(in srgb, var(--nav-folder-9-color) 25%, transparent);
  --nav-folder-bg-color: transparent;
  --nav-folder-bg-color-hover: var(--nav-item-background-hover, rgba(0, 0, 0, 0.125));
  --nav-folder-collapse-color: var(--nav-collapse-icon-color, hsla(33, 27%, 33%, 1));
  --nav-folder-color: var(--nav-item-color, hsla(35, 27%, 55%, 1));
  --nav-heading-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --nav-heading-color-collapsed: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --nav-heading-color-collapsed-hover: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --nav-heading-color-hover: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --nav-heading-weight: var(--font-medium, 550);
  --nav-heading-weight-hover: var(--font-medium, 550);
  --nav-indentation-guide-color: var(--indentation-guide-color, hsla(28, 22%, 19%, 1));
  --nav-item-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.125));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.125));
  --nav-item-background-selected-hover: hsla(197, 45%, 29%, 0.4);
  --nav-item-color: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --nav-item-color-active: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --nav-item-color-highlighted: var(--text-accent-hover, hsl( 26, 31.32%, 32.16% ));
  --nav-item-color-hover: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --nav-item-color-selected: var(--color-d-gray-20, hsla(34, 39%, 74%, 1));
  --nav-item-padding: calc(var(--size-4-1) + 1px) var(--size-4-2) calc(var(--size-4-1) + 1px) var(--size-4-6);
  --nav-item-parent-padding: var(--nav-item-padding, 5px 8px 5px 24px);
  --nav-item-radius: var(--radius-s, 6px);
  --nav-item-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.23);
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, hsla(34, 24%, 46%, 1));
  --nav-tag-color-active: var(--text-muted, hsla(35, 27%, 55%, 1));
  --nav-tag-color-hover: var(--text-muted, hsla(35, 27%, 55%, 1));
  --nav-tag-weight: var(--font-semibold, 650);
  --new-tab-btn-radius: 2em;
  --non-alternating-color: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --non-alternating-color-hover-active: var(--color-d-gray-70, hsla(31, 27%, 25%, 1));
  --normal-highlight-bg: var(--color-d-alpha-yellow, hsla(44, 100%, 50%, 0.2));
  --normal-highlight-color: var(--text-normal, hsla(34, 39%, 74%, 1));
  --note-chbx-color: hsla(8, 51%, 53%, 1);
  --notice-color: var(--text-normal, hsla(34, 39%, 74%, 1));
  --notice-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),0px 2px 9px -2.1px rgba(0, 0, 0, 0.4),0px 3px 17px -4.3px rgba(0, 0, 0, 0.3),0px 7px 30px -5.5px rgba(0, 0, 0, 0.2);
  --pcr-btn-shadow: inset 0px 0px 0px 1.5px rgba(255, 255, 255, 0.2);
  --pdf-background: var(--background-primary, hsla(30, 19%, 15%, 1));
  --pdf-page-background: var(--background-primary, hsla(30, 19%, 15%, 1));
  --pdf-sidebar-background: var(--background-primary, hsla(30, 19%, 15%, 1));
  --pill-background: rgba(0, 0, 0, 0.2);
  --pill-background-hover: var(--pill-background, rgba(0, 0, 0, 0.2));
  --pill-border-color: color-mix(in srgb, var(--background-modifier-border) 50%, transparent);
  --pill-border-color-hover: color-mix(in srgb, var(--background-modifier-border-hover) 50%, transparent);
  --pill-color: var(--color-d-gray-30, hsla(34, 31%, 68%, 1));
  --pill-color-hover: var(--color-d-gray-20, hsla(34, 39%, 74%, 1));
  --pill-color-remove: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --pill-color-remove-hover: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --pill-tag-bg-1: var(--color-d-alpha-yellow, hsla(44, 100%, 50%, 0.2));
  --pill-tag-bg-2: var(--color-d-alpha-red, hsla(350, 84%, 63%, 0.2));
  --pill-tag-bg-3: var(--color-d-alpha-blue, hsla(186, 64%, 46%, 0.2));
  --pill-tag-color-1: var(--color-d-yellow-20, hsla(42, 79%, 51%, 1));
  --pill-tag-color-2: var(--color-d-red-20, hsla(4, 91%, 67%, 1));
  --pill-tag-color-3: var(--color-d-blue-20, hsla(194, 59%, 56%, 1));
  --pill-tag-shadow-hover: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.05);
  --pill-tag-weight: var(--component-font-weight, 550);
  --pmr-cal-td-padding: var(--size-4-1) var(--size-4-1) calc(var(--size-4-1) + var(--button-inset-shadow-size)) var(--size-4-1, 4px 4px 6px 4px);
  --pmr-cal-td-radius: calc(var(--radius-s) + 1px);
  --popup-bg-blur: 3px;
  --pro-chbx-color: hsla(149, 36%, 47%, 1);
  --progress-background: var(--color-d-gray-120, hsla(29, 16%, 13%, 1));
  --progress-bar-outline: rgba(255, 255, 255, 0.1);
  --progress-border-width: 1px;
  --progress-color-1: var(--color-d-red-30, hsla(4, 88%, 61%, 1));
  --progress-color-2: var(--color-d-orange-30, hsla(22, 82%, 47%, 1));
  --progress-color-3: var(--color-d-yellow-30, hsla(40, 78%, 48%, 1));
  --progress-color-4: var(--color-d-green-40, hsla(154, 75%, 26%, 1));
  --progress-color-5: linear-gradient(45deg, var(--progress-gradient-1), var(--progress-gradient-2), var(--progress-gradient-3));
  --progress-gradient-1: var(--color-d-red-30, hsla(4, 88%, 61%, 1));
  --progress-gradient-2: var(--color-d-yellow-20, hsla(42, 79%, 51%, 1));
  --progress-gradient-3: var(--color-d-blue-20, hsla(194, 59%, 56%, 1));
  --progress-height: 8px;
  --progress-value-outline: rgba(255, 255, 255, 0.21);
  --progress-value-radius: var(--progress-height, 8px);
  --progress-width: 220px;
  --prompt-background: var(--background-primary, hsla(30, 19%, 15%, 1));
  --prompt-border-color: var(--background-modifier-border-focus, color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)));
  --prompt-input-background: var(--background-primary, hsla(30, 19%, 15%, 1));
  --prompt-instructions-background: color-mix(in hsl, var(--editor-bg-color) 60%, var(--background-secondary));
  --prompt-results-background: var(--background-primary, hsla(30, 19%, 15%, 1));
  --prompt-separator-border: 1px solid var(--color-d-gray-90);
  --prompt-suggestion-background-selected: rgba(0, 0, 0, 0.1);
  --prompt-suggestion-color: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --prompt-suggestion-color-selected: var(--color-d-gray-20, hsla(34, 39%, 74%, 1));
  --prompt-suggestion-highlight-color: color-mix(in srgb, var(--prompt-suggestion-color) 70%, white);
  --prompt-suggestion-highlight-color-selected: var(--color-d-gray-20, hsla(34, 39%, 74%, 1));
  --prompt-suggestion-shadow-selected: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.14),0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  --question-chbx-color: hsla(281, 37%, 54%, 1);
  --question-chbx-icon-color: white;
  --quote-chbx-color: hsla(206, 47%, 48%, 1);
  --quote-chbx-icon-color: white;
  --radius-xs: 2px;
  --raised-background: var(--blur-background, color-mix(in srgb, hsla(29, 16%, 13%, 1) 65%, transparent) linear-gradient(hsla(29, 16%, 13%, 1), color-mix(in srgb, hsla(29, 16%, 13%, 1) 65%, transparent)));
  --resched-chbx-color: hsla(178, 19%, 55%, 1);
  --ribbon-background: var(--background-secondary, hsla(29, 16%, 13%, 1));
  --ribbon-background-collapsed: var(--background-primary, hsla(30, 19%, 15%, 1));
  --ribbon-border-width: 1px;
  --ribbon-icon: var(--icon-s, 15px);
  --ribbon-icon-spacing: var(--size-2-2, 4px);
  --ribbon-margin-bottom: var(--editor-pane-margin, 10px);
  --ribbon-radius: var(--editor-border-radius, 12px);
  --ribbon-slideout-background: var(--color-d-gray-110, hsla(30, 17%, 14%, 1));
  --ribbon-slideout-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.35),0px 5px 5px -5px rgba(0, 0, 0, 0.38);
  --sched-chbx-color: hsla(32, 10%, 58%, 1);
  --scrollbar-active-thumb-bg: var(--background-modifier-border-hover, color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)));
  --scrollbar-thumb-bg: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --search-clear-button-color: var(--icon-color, color-mix(in srgb, hsla(33, 27%, 33%, 1) 30%, hsla(34, 24%, 46%, 1)));
  --search-clear-button-color-hover: var(--background-modifier-error-hover, hsla(4, 88%, 61%, 1));
  --search-clear-button-size: 12px;
  --search-icon-color: var(--icon-color, color-mix(in srgb, hsla(33, 27%, 33%, 1) 30%, hsla(34, 24%, 46%, 1)));
  --search-icon-size: 14px;
  --search-result-background: var(--background-primary-alt, hsla(30, 17%, 14%, 1));
  --search-result-background-hover: color-mix(in srgb, var(--color-d-gray-130) 50%, var(--color-d-gray-140));
  --search-result-dest-file-bg: var(--color-d-gray-120, hsla(29, 16%, 13%, 1));
  --search-result-dest-file-bg-hover: var(--color-d-gray-140, hsla(32, 21%, 9%, 1));
  --search-result-dest-file-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --search-result-dest-file-icon-color: var(--color-d-gray-70, hsla(31, 27%, 25%, 1));
  --search-result-dest-file-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.25);
  --search-result-dest-file-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.25),0px 2px 3px 0px rgba(0, 0, 0, 0.29);
  --secondary: var(--text-accent, var(--color-accent, hsl(31, 27%, 24%)));
  --setting-group-heading-color: var(--text-normal, hsla(34, 39%, 74%, 1));
  --setting-group-heading-weight: var(--font-semibold, 650);
  --setting-items-background: var(--background-primary-alt, hsla(30, 17%, 14%, 1));
  --setting-items-border-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --settings-nav-group-title-color: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --settings-nav-item-active-color: var(--color-d-gray-100, hsla(30, 19%, 15%, 1));
  --settings-nav-item-bg-active: var(--color-d-gray-130, hsla(24, 18%, 11%, 1));
  --settings-nav-item-bg-hover: transparent;
  --settings-nav-item-padding: calc(var(--size-2-3) + 1px) var(--size-4-3) calc(var(--size-2-3) + 1px) var(--size-4-3);
  --settings-nav-item-padding-active: var(--size-2-3) var(--size-4-3) calc(var(--size-2-3) + var(--button-inset-shadow-size)) var(--size-4-5, 6px 12px 8px 20px);
  --settings-nav-item-padding-hover: calc(var(--size-2-3) + 1px) var(--size-4-3) calc(var(--size-2-3) + 1px) var(--size-4-5);
  --settings-nav-item-radius: calc(var(--radius-m) - 1px);
  --settings-nav-item-text-color: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --settings-nav-item-text-color-active: var(--color-d-gray-70, hsla(31, 27%, 25%, 1));
  --settings-nav-item-text-color-hover: var(--color-d-gray-20, hsla(34, 39%, 74%, 1));
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.271),0px 6.3px 24.7px rgba(0, 0, 0, 0.312),0px 30px 90px rgba(0, 0, 0, 0.4);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.228),0px 3.4px 6.7px rgba(0, 0, 0, 0.242),0px 15px 30px rgba(0, 0, 0, 0.27);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsla(35, 27%, 55%, 1));
  --shiki-code-background: var(--code-background, hsla(30, 17%, 14%, 1));
  --shiki-code-block-border-radius: var(--code-radius, 8px);
  --shiki-code-comment: var(--text-faint, hsla(34, 24%, 46%, 1));
  --shiki-code-function: var(--color-green, rgb(80, 196, 101));
  --shiki-code-important: var(--color-orange, rgb(203, 128, 53));
  --shiki-code-keyword: var(--color-pink, rgb(180, 100, 100));
  --shiki-code-normal: var(--text-muted, hsla(35, 27%, 55%, 1));
  --shiki-code-property: var(--color-cyan, rgb(70, 169, 180));
  --shiki-code-punctuation: var(--text-muted, hsla(35, 27%, 55%, 1));
  --shiki-code-string: var(--color-yellow, rgb(225, 178, 67));
  --shiki-code-value: var(--color-purple, rgb(113, 97, 194));
  --shiki-gutter-border-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --shiki-gutter-text-color: var(--text-faint, hsla(34, 24%, 46%, 1));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsla(35, 27%, 55%, 1));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsla(35, 27%, 55%, 1));
  --shiki-terminal-dots-color: var(--text-faint, hsla(34, 24%, 46%, 1));
  --shiki-tooltip-background: var(--background-modifier-message, hsla(31, 27%, 25%, 1));
  --sidebar-nav-icon: var(--icon-s, 15px);
  --sidebar-tab-icon: var(--icon-s, 15px);
  --slider-thumb-bg: var(--color-d-gray-20, hsla(34, 39%, 74%, 1));
  --slider-thumb-border-color: var(--background-modifier-border-hover, color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)));
  --slider-thumb-border-width: var(--border-width, 0px);
  --slider-thumb-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.35),inset 0pc 1px 0px 1px rgba(255, 255, 255, 0.3),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.29),0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  --slider-thumb-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.35),inset 0pc 1px 0px 1px rgba(255, 255, 255, 0.3),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.29),0px 1px 2px 0px rgba(0, 0, 0, 0.5),0px 0px 0px 6px rgba(255, 255, 255, 0.08);
  --slider-track-background: var(--color-d-gray-120, hsla(29, 16%, 13%, 1));
  --slider-track-height: 5px;
  --slider-track-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.04);
  --star-chbx-color: hsla(40, 95%, 46%, 1);
  --star-chbx-icon-color: white;
  --status-bar-background: var(--background-secondary, hsla(29, 16%, 13%, 1));
  --status-bar-border-color: var(--divider-color, hsla(28, 22%, 19%, 1));
  --status-bar-floating-bg: var(--color-d-gray-110, hsla(30, 17%, 14%, 1));
  --status-bar-floating-offset: var(--size-2-2, 4px);
  --status-bar-floating-opacity: 0.5;
  --status-bar-floating-opacity-hover: 1;
  --status-bar-floating-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.35),0px 5px 5px -5px rgba(0, 0, 0, 0.38);
  --status-bar-item-bg-hover: transparent;
  --status-bar-item-clickable-bg-active: transparent;
  --status-bar-item-clickable-color-active: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --status-bar-item-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --status-bar-item-color-hover: var(--color-d-gray-30, hsla(34, 31%, 68%, 1));
  --status-bar-text-color: var(--text-muted, hsla(35, 27%, 55%, 1));
  --strikethrough-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --strikethrough-highlight-bg: var(--color-d-alpha-yellow, hsla(44, 100%, 50%, 0.2));
  --strikethrough-highlight-color: var(--strikethrough-color, hsla(34, 24%, 46%, 1));
  --style-settings-container-bg: color-mix(in srgb, var(--background-primary-alt) 50%, transparent);
  --suggestion-background: var(--background-primary, hsla(30, 19%, 15%, 1));
  --sync-avatar-color-1: var(--color-red, rgb(192, 78, 78));
  --sync-avatar-color-2: var(--color-orange, rgb(203, 128, 53));
  --sync-avatar-color-3: var(--color-yellow, rgb(225, 178, 67));
  --sync-avatar-color-4: var(--color-green, rgb(80, 196, 101));
  --sync-avatar-color-5: var(--color-cyan, rgb(70, 169, 180));
  --sync-avatar-color-6: var(--color-blue, rgb(63, 137, 176));
  --sync-avatar-color-7: var(--color-purple, rgb(113, 97, 194));
  --sync-avatar-color-8: var(--color-pink, rgb(180, 100, 100));
  --sync-icon-success: var(--color-d-green-40, hsla(154, 75%, 26%, 1));
  --sync-icon-success-active: var(--status-bar-item-clickable-color-active, hsla(33, 27%, 33%, 1));
  --sync-icon-success-hover: var(--color-d-green-30, hsla(155, 78%, 29%, 1));
  --sync-icon-working: var(--color-d-orange-40, hsla(19, 81%, 41%, 1));
  --sync-icon-working-active: var(--status-bar-item-clickable-color-active, hsla(33, 27%, 33%, 1));
  --sync-icon-working-hover: var(--color-d-orange-30, hsla(22, 82%, 47%, 1));
  --tab-active-bg: var(--background-primary, hsla(30, 19%, 15%, 1));
  --tab-active-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 1px rgba(0, 0, 0, 0.25),0px 1px 2px -0.1px rgba(0, 0, 0, 0.47);
  --tab-background-active: var(--background-primary, hsla(30, 19%, 15%, 1));
  --tab-bg: transparent;
  --tab-container-background: var(--background-secondary, hsla(29, 16%, 13%, 1));
  --tab-curves-display: none;
  --tab-divider-color: var(--background-modifier-border-hover, color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)));
  --tab-header-container-border-bottom: none;
  --tab-header-container-inner-margin: default;
  --tab-header-container-inner-padding: var(--button-axis-offset, 2px);
  --tab-header-container-padding: 0 var(--editor-border-radius) var(--size-4-1) var(--editor-border-radius);
  --tab-header-container-transition: padding-bottom none;
  --tab-outline-color: var(--divider-color, transparent);
  --tab-stacked-header-width: var(--header-height, 46px);
  --tab-stacked-shadow: -2.9px 0 10.5px -6.2px rgba(0, 0, 0, 0.31),-6.2px 0 3.6px -5.2px rgba(0, 0, 0, 0.27),-9.4px 0 8.4px -4.1px rgba(0, 0, 0, 0.2);
  --tab-status-radius: var(--radius-s, 4px);
  --tab-switcher-background: var(--background-secondary, hsla(29, 16%, 13%, 1));
  --tab-text-color: var(--text-faint, hsla(34, 24%, 46%, 1));
  --tab-text-color-active: var(--text-muted, hsla(35, 27%, 55%, 1));
  --tab-text-color-focused: var(--text-muted, hsla(35, 27%, 55%, 1));
  --tab-text-color-focused-active: var(--text-muted, hsla(35, 27%, 55%, 1));
  --tab-text-color-focused-active-current: var(--text-normal, hsla(34, 39%, 74%, 1));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(31, 27%, 24%));
  --tab-z-index: 1;
  --table-add-button-border-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --table-background: var(--color-d-gray-120, hsla(29, 16%, 13%, 1));
  --table-border-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --table-column-alt-background: var(--color-d-gray-130, hsla(24, 18%, 11%, 1));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl( 28, 27.54%, 27.6% ));
  --table-drag-handle-color: var(--text-faint, hsla(34, 24%, 46%, 1));
  --table-drag-handle-color-active: var(--text-on-accent, hsla(32, 48%, 85%, 1));
  --table-header-background: var(--color-d-gray-130, hsla(24, 18%, 11%, 1));
  --table-header-background-hover: var(--table-header-background, hsla(24, 18%, 11%, 1));
  --table-header-border-color: var(--table-border-color, hsla(28, 22%, 19%, 1));
  --table-header-color: var(--text-normal, hsla(34, 39%, 74%, 1));
  --table-row-alt-background: var(--table-background, hsla(29, 16%, 13%, 1));
  --table-row-alt-background-hover: var(--table-background, hsla(29, 16%, 13%, 1));
  --table-row-background-hover: var(--table-background, hsla(29, 16%, 13%, 1));
  --table-selection-border-color: var(--interactive-accent, hsl( 28, 27.54%, 27.6% ));
  --tag-border-width: 1px;
  --tag-color: var(--color-d-blue-30, hsla(197, 48%, 49%, 1));
  --tag-color-hover: var(--color-d-blue-20, hsla(194, 59%, 56%, 1));
  --tag-padding-x: 0.6em;
  --tag-padding-y: 0.15em;
  --tag-radius: 1em;
  --tag-shadow: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.2);
  --tag-shadow-active: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.2);
  --tag-shadow-hover: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 3px rgba(0, 0, 0, 0.15);
  --telephone-chbx-color: hsla(148, 48%, 42%, 1);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl( 26, 31.32%, 32.16% )));
  --text-accent: var(--color-accent, hsl(31, 27%, 24%));
  --text-accent-hover: var(--color-accent-2, hsl( 26, 31.32%, 32.16% ));
  --text-error: var(--color-d-red-30, hsla(4, 88%, 61%, 1));
  --text-faint: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --text-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0;
  --text-highlight-bg: var(--color-d-alpha-yellow, hsla(44, 100%, 50%, 0.2));
  --text-highlight-bg-rgb: var(--color-yellow-rgb, 249,207,81);
  --text-input-bg-active: var(--color-d-gray-140, hsla(32, 21%, 9%, 1));
  --text-input-border-color: var(--color-d-gray-140, hsla(32, 21%, 9%, 1));
  --text-input-color: var(--color-d-gray-20, hsla(34, 39%, 74%, 1));
  --text-input-color-focused: var(--color-d-gray-20, hsla(34, 39%, 74%, 1));
  --text-input-shadow-active: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.03),inset 0px -1px 0px 0px rgba(0, 0, 0, 0.39),0px 1px 6px 0px rgba(0, 0, 0, 0.37);
  --text-muted: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --text-normal: var(--color-d-gray-20, hsla(34, 39%, 74%, 1));
  --text-on-accent: var(--color-d-gray-10, hsla(32, 48%, 85%, 1));
  --text-on-accent-inverted: var(--color-d-gray-140, hsla(32, 21%, 9%, 1));
  --text-selection: var(--color-d-alpha-gray, hsla(34, 24%, 40%, 0.2));
  --text-selection-theme-bg: color-mix(in srgb, var(--color-d-gray-50) 30%, transparent);
  --text-selection-theme-text-color: color-mix(in srgb, currentColor 70%, white);
  --text-success: var(--color-d-green-30, hsla(155, 78%, 29%, 1));
  --text-warning: var(--color-d-orange-30, hsla(22, 82%, 47%, 1));
  --textHighlight: var(--text-highlight-bg, var(--color-d-alpha-yellow, hsla(44, 100%, 50%, 0.2)));
  --titleFont: var(--font-text-theme, "Inter");
  --titlebar-background: var(--background-secondary, hsla(29, 16%, 13%, 1));
  --titlebar-background-focused: var(--background-secondary, hsla(29, 16%, 13%, 1));
  --titlebar-border-color: var(--background-modifier-border, hsla(28, 22%, 19%, 1));
  --titlebar-text-color: var(--color-d-gray-70, hsla(31, 27%, 25%, 1));
  --titlebar-text-color-focused: var(--color-d-gray-60, hsla(33, 27%, 33%, 1));
  --titlebar-text-weight: var(--font-normal, 450);
  --toggle-bg: color-mix(in srgb, var(--color-d-gray-70) 50%, var(--color-d-gray-60));
  --toggle-bg-enabled: var(--color-d-green-40, hsla(154, 75%, 26%, 1));
  --toggle-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.19),inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),inset 0 0 1px rgba(0, 0, 0, 0.4);
  --toggle-shadow-focus: inset 0 6px 20px rgba(0, 0, 0, 0.28),inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),inset 0 0 1px rgba(0, 0, 0, 0.44),0px 0px 0px 5px rgba(255, 255, 255, 0.08);
  --toggle-shadow-hover: inset 0 6px 20px rgba(0, 0, 0, 0.28),inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),inset 0 0 1px rgba(0, 0, 0, 0.44);
  --toggle-thumb-color: var(--color-d-gray-10, hsla(32, 48%, 85%, 1));
  --toggle-thumb-shadow: inset 0px 1px 0px 1px rgba(255, 255, 255, 0.5),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25),0 2px 2px rgba(0, 0, 0, 0.35);
  --tooltip-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.3),0px 2px 4px -1.4px rgba(0, 0, 0, 0.3),0px 3px 10px -1.7px rgba(0, 0, 0, 0.14);
  --traffic-lights-offset-x: var(--header-height, 46px);
  --traffic-lights-offset-y: var(--header-height, 46px);
  --underline-color: var(--text-normal, hsla(34, 39%, 74%, 1));
  --underline-decoration-color: color-mix(in srgb, currentColor var(--link-decoration-opacity), transparent);
  --underline-decoration-opacity: 22%;
  --up-chbx-color: hsla(146, 38%, 51%, 1);
  --vault-name-background: var(--color-d-gray-110, hsla(30, 17%, 14%, 1));
  --vault-name-border: 1px solid var(--background-modifier-border);
  --vault-name-border-width: 1px;
  --vault-name-color: var(--color-d-gray-40, hsla(35, 27%, 55%, 1));
  --vault-name-color-hover: var(--color-d-gray-30, hsla(34, 31%, 68%, 1));
  --vault-profile-color: var(--vault-name-color, hsla(35, 27%, 55%, 1));
  --vault-profile-color-hover: var(--vault-profile-color, hsla(35, 27%, 55%, 1));
  --vault-profile-font-weight: var(--font-semibold, 650);
  --yaml-atom-color: var(--color-d-blue-10, hsla(191, 54%, 62%, 1));
  --yaml-base-color: var(--color-d-red-20, hsla(4, 91%, 67%, 1));
  --yaml-def-meta-color: var(--color-d-gray-50, hsla(34, 24%, 46%, 1));
  --yaml-keyword-color: var(--color-d-yellow-30, hsla(40, 78%, 48%, 1));
  --yaml-number-color: var(--color-d-red-20, hsla(4, 91%, 67%, 1));
  --yaml-string-color: var(--color-d-yellow-30, hsla(40, 78%, 48%, 1));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsla(29, 16%, 13%, 1));
  background-color: var(--tab-container-background, rgb(38, 33, 28));
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(38, 33, 28));
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(38, 33, 28));
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  --divider-vertical-height: calc(100% - var(--header-height) - var(--editor-pane-margin) - var(--editor-border-radius)*2);
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsla(29, 16%, 13%, 1));
  --divider-vertical-height: calc(100% - var(--header-height) - var(--editor-pane-margin) - var(--editor-border-radius)*2);
  background-color: var(--tab-container-background, rgb(38, 33, 28));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(215, 192, 163);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(243, 80, 68));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(243, 80, 68) none 0px;
  text-decoration-color: rgb(243, 80, 68);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(77, 178, 209));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(77, 178, 209) none 0px;
  text-decoration-color: rgb(77, 178, 209);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(77, 178, 209));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(77, 178, 209) none 0px;
  text-decoration-color: rgb(77, 178, 209);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--bold-italic-color, rgb(235, 218, 198));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--bold-italic-weight, 750);
  outline: rgb(235, 218, 198) none 0px;
  text-decoration-color: rgb(235, 218, 198);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(243, 80, 68));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(243, 80, 68) none 0px;
  text-decoration-color: rgb(243, 80, 68);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--normal-highlight-bg, rgba(255, 187, 0, 0.2));
  color: var(--normal-highlight-color, rgb(215, 192, 163));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(215, 192, 163) none 0px;
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body del {
  color: var(--strikethrough-color, rgb(145, 121, 89));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(145, 121, 89) none 0px;
  text-decoration-color: rgb(145, 121, 89);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(42, 36, 30);
  border-color: rgb(81, 64, 47);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(17, 116, 73));
  border-color: rgba(255, 255, 255, 0.15);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(171, 145, 109));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(171, 145, 109) none 0px;
  text-decoration-color: rgb(171, 145, 109);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  --font-weight: var(--link-weight, 450);
  color: var(--link-external-color, rgb(46, 168, 115));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 450);
  outline: rgb(46, 168, 115) none 0px;
  text-decoration: underline 1.5px color(srgb 0.1806 0.6594 0.45192 / 0.22);
  text-decoration-color: var(--link-external-decoration-color, color(srgb 0.1806 0.6594 0.45192 / 0.22));
  text-decoration-thickness: var(--link-decoration-thickness, 1.5px);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  --font-weight: var(--link-weight, 450);
  color: var(--link-color, rgb(229, 170, 31));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 450);
  outline: rgb(229, 170, 31) none 0px;
  text-decoration: underline 1.5px color(srgb 0.8971 0.66484 0.1229 / 0.22);
  text-decoration-color: var(--link-decoration-color, color(srgb 0.8971 0.66484 0.1229 / 0.22));
  text-decoration-thickness: var(--link-decoration-thickness, 1.5px);
}

html[saved-theme="dark"] body a.internal-link.broken {
  --font-weight: var(--link-weight, 450);
  color: var(--link-unresolved-color, rgb(145, 121, 89));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 450);
  outline: rgb(145, 121, 89) none 0px;
  text-decoration: underline 1.5px color(srgb 0.5704 0.47472 0.3496 / 0.22);
  text-decoration-color: var(--link-unresolved-decoration-color, color(srgb 0.5704 0.47472 0.3496 / 0.22));
  text-decoration-thickness: var(--link-decoration-thickness, 1.5px);
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  color: rgb(215, 192, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  color: rgb(215, 192, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  --font-weight: var(--link-weight, 450);
  color: var(--text-faint, rgb(145, 121, 89));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(38, 33, 28));
  color: var(--blockquote-color, rgb(215, 192, 163));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body table {
  color: rgb(215, 192, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgb(38, 33, 28));
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgb(38, 33, 28));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(59, 48, 38);
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  color: var(--table-text-color, rgb(215, 192, 163));
  font-weight: 450;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(59, 48, 38);
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  color: var(--table-header-color, rgb(215, 192, 163));
  font-weight: var(--table-header-weight, 650);
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgb(33, 27, 23));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(33, 27, 23));
  border-bottom-color: rgb(59, 48, 38);
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  color: var(--inline-code-color, rgb(247, 104, 94));
  font-family: var(--font-monospace, "??", "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(42, 36, 30));
  border-bottom-color: rgb(59, 48, 38);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(215, 192, 163);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(215, 192, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, hsla(30, 17%, 14%, 1));
  border-bottom-color: rgb(215, 192, 163);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(235, 218, 198);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(235, 218, 198);
  border-radius: 8px;
  border-right-color: rgb(235, 218, 198);
  border-top-color: rgb(235, 218, 198);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(215, 192, 163);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(215, 192, 163);
  border-radius: 8px;
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(42, 36, 30));
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: var(--text-muted, rgb(171, 145, 109));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(215, 192, 163);
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--embed-background, color(srgb 0.17115 0.145 0.11885));
  border-bottom-color: rgb(59, 48, 38);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(59, 48, 38);
  border-left-width: 1px;
  border-radius: 12px;
  border-right-color: rgb(59, 48, 38);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(59, 48, 38);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--embed-background, color(srgb 0.17115 0.145 0.11885));
  border-bottom-color: rgb(215, 192, 163);
  border-bottom-style: solid;
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-right-style: solid;
  border-top-color: rgb(215, 192, 163);
  border-top-style: solid;
  color: rgb(215, 192, 163);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(81, 64, 47);
  border-left-color: rgb(81, 64, 47);
  border-right-color: rgb(81, 64, 47);
  border-top-color: rgb(81, 64, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(145, 121, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(145, 121, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(145, 121, 89);
  text-decoration: line-through;
  text-decoration-color: rgb(145, 121, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(159, 149, 137);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' viewBox='0 0 24 24' class='humbleicons hi-exclamation'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M13.253 5.98L12 13.5l-1.253-7.52a1.27 1.27 0 112.506 0z'/%3E%3Ccircle xmlns='http://www.w3.org/2000/svg' cx='12' cy='19' r='1' stroke='currentColor' stroke-width='2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' viewBox='0 0 24 24' class='humbleicons hi-exclamation'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M13.253 5.98L12 13.5l-1.253-7.52a1.27 1.27 0 112.506 0z'/%3E%3Ccircle xmlns='http://www.w3.org/2000/svg' cx='12' cy='19' r='1' stroke='currentColor' stroke-width='2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg height='100%25' viewBox='0 0 32 32' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m13.774 26.028a2.06 2.06 1080 1 0 4.12 0 2.06 2.06 1080 1 0 -4.12 0zm5.69-7.776c2.898-1.596 4.37-3.91 4.37-6.876 0-5.094-4.018-7.376-8-7.376-3.878 0-8 2.818-8 8.042 0 1.104.894 2 2 2s2-.896 2-2c0-2.778 2.074-4.042 4-4.042 1.494 0 4 .438 4 3.376 0 1.042-.274 2.258-2.298 3.374-1.376.754-3.702 2.712-3.702 5.25 0 1.104.894 2 2 2s2-.896 2-2c0-.372.79-1.286 1.63-1.748z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg height='100%25' viewBox='0 0 32 32' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m13.774 26.028a2.06 2.06 1080 1 0 4.12 0 2.06 2.06 1080 1 0 -4.12 0zm5.69-7.776c2.898-1.596 4.37-3.91 4.37-6.876 0-5.094-4.018-7.376-8-7.376-3.878 0-8 2.818-8 8.042 0 1.104.894 2 2 2s2-.896 2-2c0-2.778 2.074-4.042 4-4.042 1.494 0 4 .438 4 3.376 0 1.042-.274 2.258-2.298 3.374-1.376.754-3.702 2.712-3.702 5.25 0 1.104.894 2 2 2s2-.896 2-2c0-.372.79-1.286 1.63-1.748z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2220\\%22 height=\\%2220\\%22 preserveAspectRatio=\\%22xMidYMid meet\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22white\\%22 d=\\%22M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2220\\%22 height=\\%2220\\%22 preserveAspectRatio=\\%22xMidYMid meet\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22white\\%22 d=\\%22M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-star'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-star'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(159, 149, 137);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(118, 162, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m15.75 3.25h-7.5a2.75 2.75 0 0 0 -2.75 2.75v14a.75.75 0 0 0 1.18.62l5.32-3.71 5.32 3.71a.75.75 0 0 0 .43.13.85.85 0 0 0 .35-.08.77.77 0 0 0 .4-.67v-14a2.75 2.75 0 0 0 -2.75-2.75z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m15.75 3.25h-7.5a2.75 2.75 0 0 0 -2.75 2.75v14a.75.75 0 0 0 1.18.62l5.32-3.71 5.32 3.71a.75.75 0 0 0 .43.13.85.85 0 0 0 .35-.08.77.77 0 0 0 .4-.67v-14a2.75 2.75 0 0 0 -2.75-2.75z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 109, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'%3E%3Cpath fill='currentColor' d='M3.008 6.684H1.003a.99.99 0 0 0-.71.301A1.043 1.043 0 0 0 0 7.713v8.23c0 .545.211 1.069.587 1.454A1.98 1.98 0 0 0 2.005 18a1.98 1.98 0 0 0 1.418-.603c.376-.385.587-.909.587-1.454v-8.23c0-.273-.105-.535-.293-.728a.99.99 0 0 0-.71-.301Zm12.987 0H12.03l1.562-4.63a1.868 1.868 0 0 0-.268-1.211 1.79 1.79 0 0 0-.96-.757 1.74 1.74 0 0 0-1.21.048 1.8 1.8 0 0 0-.902.83 25.486 25.486 0 0 1-4.238 5.514v9.862h.115c2.114.6 4.913 1.66 7.505 1.66 1.403 0 1.596-.541 1.885-1.355l2.36-7.201a2.109 2.109 0 0 0-.243-1.883 2.022 2.022 0 0 0-.717-.645 1.964 1.964 0 0 0-.925-.232Z'/%3E%3C/svg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'%3E%3Cpath fill='currentColor' d='M3.008 6.684H1.003a.99.99 0 0 0-.71.301A1.043 1.043 0 0 0 0 7.713v8.23c0 .545.211 1.069.587 1.454A1.98 1.98 0 0 0 2.005 18a1.98 1.98 0 0 0 1.418-.603c.376-.385.587-.909.587-1.454v-8.23c0-.273-.105-.535-.293-.728a.99.99 0 0 0-.71-.301Zm12.987 0H12.03l1.562-4.63a1.868 1.868 0 0 0-.268-1.211 1.79 1.79 0 0 0-.96-.757 1.74 1.74 0 0 0-1.21.048 1.8 1.8 0 0 0-.902.83 25.486 25.486 0 0 1-4.238 5.514v9.862h.115c2.114.6 4.913 1.66 7.505 1.66 1.403 0 1.596-.541 1.885-1.355l2.36-7.201a2.109 2.109 0 0 0-.243-1.883 2.022 2.022 0 0 0-.717-.645 1.964 1.964 0 0 0-.925-.232Z'/%3E%3C/svg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 74, 43);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-trending-down'%3E%3Cpolyline points='22 17 13.5 8.5 8.5 13.5 2 7'/%3E%3Cpolyline points='16 17 22 17 22 11'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-trending-down'%3E%3Cpolyline points='22 17 13.5 8.5 8.5 13.5 2 7'/%3E%3Cpolyline points='16 17 22 17 22 11'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(203, 81, 72);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg fill='none' height='100%25' viewBox='0 0 20 20' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m12.3945 2.55279c-.1283-.25655-.3605-.44566-.6377-.51928-.2773-.07363-.5728-.02466-.8114.13444-.3459.23063-.614.55813-.8225.87996-.21435.33063-.40304.71357-.5699 1.11575-.33361.80407-.61389 1.76829-.83925 2.73412-.28623 1.2267-.49807 2.51909-.61371 3.57982-.48419-.3264-.76513-.69233-.94523-1.06656-.32752-.68058-.39745-1.53384-.39745-2.65365 0-.40447-.24364-.7691-.61732-.92388-.37367-.15479-.80379-.06923-1.08979.21677-1.36664 1.36664-2.05025 3.15985-2.05025 4.94972 0 1.7899.68361 3.5831 2.05025 4.9498 2.73367 2.7336 7.16585 2.7336 9.89945 0 1.3667-1.3667 2.0503-3.1599 2.0503-4.9498 0-1.78987-.6836-3.58308-2.0503-4.94972-.5913-.59139-.9801-.98575-1.3476-1.46748-.3631-.47592-.724-1.06289-1.2076-2.03001zm-.2732 12.56851c-1.1716 1.1716-3.07105 1.1716-4.24262 0-.58579-.5858-.87868-1.3535-.87868-2.1213 0 0 .87868.5 2.50005.5 0-1 .49995-4 1.24995-4.5.5 1 .7855 1.2929 1.3713 1.8787s.8787 1.3535.8787 2.1213-.2929 1.5355-.8787 2.1213z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg fill='none' height='100%25' viewBox='0 0 20 20' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m12.3945 2.55279c-.1283-.25655-.3605-.44566-.6377-.51928-.2773-.07363-.5728-.02466-.8114.13444-.3459.23063-.614.55813-.8225.87996-.21435.33063-.40304.71357-.5699 1.11575-.33361.80407-.61389 1.76829-.83925 2.73412-.28623 1.2267-.49807 2.51909-.61371 3.57982-.48419-.3264-.76513-.69233-.94523-1.06656-.32752-.68058-.39745-1.53384-.39745-2.65365 0-.40447-.24364-.7691-.61732-.92388-.37367-.15479-.80379-.06923-1.08979.21677-1.36664 1.36664-2.05025 3.15985-2.05025 4.94972 0 1.7899.68361 3.5831 2.05025 4.9498 2.73367 2.7336 7.16585 2.7336 9.89945 0 1.3667-1.3667 2.0503-3.1599 2.0503-4.9498 0-1.78987-.6836-3.58308-2.0503-4.94972-.5913-.59139-.9801-.98575-1.3476-1.46748-.3631-.47592-.724-1.06289-1.2076-2.03001zm-.2732 12.56851c-1.1716 1.1716-3.07105 1.1716-4.24262 0-.58579-.5858-.87868-1.3535-.87868-2.1213 0 0 .87868.5 2.50005.5 0-1 .49995-4 1.24995-4.5.5 1 .7855 1.2929 1.3713 1.8787s.8787 1.3535.8787 2.1213-.2929 1.5355-.8787 2.1213z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2220\\%22 height=\\%2220\\%22 preserveAspectRatio=\\%22xMidYMid meet\\%22 viewBox=\\%220 0 512 512\\%22%3E%3Cpath fill=\\%22none\\%22 stroke=\\%22white\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22 stroke-width=\\%2240\\%22 d=\\%22M196 220h64v172\\%22%2F%3E%3Cpath fill=\\%22none\\%22 stroke=\\%22white\\%22 stroke-linecap=\\%22round\\%22 stroke-miterlimit=\\%2210\\%22 stroke-width=\\%2240\\%22 d=\\%22M187 396h138\\%22%2F%3E%3Cpath fill=\\%22white\\%22 d=\\%22M256 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2220\\%22 height=\\%2220\\%22 preserveAspectRatio=\\%22xMidYMid meet\\%22 viewBox=\\%220 0 512 512\\%22%3E%3Cpath fill=\\%22none\\%22 stroke=\\%22white\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22 stroke-width=\\%2240\\%22 d=\\%22M196 220h64v172\\%22%2F%3E%3Cpath fill=\\%22none\\%22 stroke=\\%22white\\%22 stroke-linecap=\\%22round\\%22 stroke-miterlimit=\\%2210\\%22 stroke-width=\\%2240\\%22 d=\\%22M187 396h138\\%22%2F%3E%3Cpath fill=\\%22white\\%22 d=\\%22M256 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M10.922,7.113A5,5,0,0,1,14,16.578V20a2,2,0,0,1-4,0V16.578a5,5,0,0,1,.922-9.465ZM13,4V3a1,1,0,0,0-2,0V4a1,1,0,0,0,2,0Zm5.707,1.293a1,1,0,0,0-1.414,0L16.586,6A1,1,0,1,0,18,7.414l.707-.707A1,1,0,0,0,18.707,5.293ZM5.293,18.707a1,1,0,0,0,1.414,0L7.414,18A1,1,0,0,0,6,16.586l-.707.707A1,1,0,0,0,5.293,18.707ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM4,11H3a1,1,0,0,0,0,2H4a1,1,0,0,0,0-2Zm14,5.586A1,1,0,0,0,16.586,18l.707.707a1,1,0,0,0,1.414-1.414ZM6.707,5.293A1,1,0,0,0,5.293,6.707L6,7.414A1,1,0,0,0,7.414,6Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M10.922,7.113A5,5,0,0,1,14,16.578V20a2,2,0,0,1-4,0V16.578a5,5,0,0,1,.922-9.465ZM13,4V3a1,1,0,0,0-2,0V4a1,1,0,0,0,2,0Zm5.707,1.293a1,1,0,0,0-1.414,0L16.586,6A1,1,0,1,0,18,7.414l.707-.707A1,1,0,0,0,18.707,5.293ZM5.293,18.707a1,1,0,0,0,1.414,0L7.414,18A1,1,0,0,0,6,16.586l-.707.707A1,1,0,0,0,5.293,18.707ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM4,11H3a1,1,0,0,0,0,2H4a1,1,0,0,0,0-2Zm14,5.586A1,1,0,0,0,16.586,18l.707.707a1,1,0,0,0,1.414-1.414ZM6.707,5.293A1,1,0,0,0,5.293,6.707L6,7.414A1,1,0,0,0,7.414,6Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 158, 88);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg fill='none' height='100%25' viewBox='0 0 20 20' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m5.05025 4.05025c2.73367-2.73367 7.16585-2.73367 9.89945 0 2.7337 2.73367 2.7337 7.16585 0 9.89945l-4.9497 4.9498-4.94975-4.9498c-2.73367-2.7336-2.73367-7.16578 0-9.89945zm4.94975 6.94975c1.1046 0 2-.8954 2-2 0-1.10457-.8954-2-2-2-1.10457 0-2 .89543-2 2 0 1.1046.89543 2 2 2z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg fill='none' height='100%25' viewBox='0 0 20 20' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m5.05025 4.05025c2.73367-2.73367 7.16585-2.73367 9.89945 0 2.7337 2.73367 2.7337 7.16585 0 9.89945l-4.9497 4.9498-4.94975-4.9498c-2.73367-2.7336-2.73367-7.16578 0-9.89945zm4.94975 6.94975c1.1046 0 2-.8954 2-2 0-1.10457-.8954-2-2-2-1.10457 0-2 .89543-2 2 0 1.1046.89543 2 2 2z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 54, 54);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-language' width='100%25' height='100%25' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4' /%3E%3Cpath d='M11 19l4 -9l4 9m-.9 -2h-6.2' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-language' width='100%25' height='100%25' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4' /%3E%3Cpath d='M11 19l4 -9l4 9m-.9 -2h-6.2' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 111, 97);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-pin'%3E%3Cpath d='M12 17v5'/%3E%3Cpath d='M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-pin'%3E%3Cpath d='M12 17v5'/%3E%3Cpath d='M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 90, 74);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'%3E%3Cpath fill='currentColor' d='M3.008 6.684H1.003a.99.99 0 0 0-.71.301A1.043 1.043 0 0 0 0 7.713v8.23c0 .545.211 1.069.587 1.454A1.98 1.98 0 0 0 2.005 18a1.98 1.98 0 0 0 1.418-.603c.376-.385.587-.909.587-1.454v-8.23c0-.273-.105-.535-.293-.728a.99.99 0 0 0-.71-.301Zm12.987 0H12.03l1.562-4.63a1.868 1.868 0 0 0-.268-1.211 1.79 1.79 0 0 0-.96-.757 1.74 1.74 0 0 0-1.21.048 1.8 1.8 0 0 0-.902.83 25.486 25.486 0 0 1-4.238 5.514v9.862h.115c2.114.6 4.913 1.66 7.505 1.66 1.403 0 1.596-.541 1.885-1.355l2.36-7.201a2.109 2.109 0 0 0-.243-1.883 2.022 2.022 0 0 0-.717-.645 1.964 1.964 0 0 0-.925-.232Z'/%3E%3C/svg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'%3E%3Cpath fill='currentColor' d='M3.008 6.684H1.003a.99.99 0 0 0-.71.301A1.043 1.043 0 0 0 0 7.713v8.23c0 .545.211 1.069.587 1.454A1.98 1.98 0 0 0 2.005 18a1.98 1.98 0 0 0 1.418-.603c.376-.385.587-.909.587-1.454v-8.23c0-.273-.105-.535-.293-.728a.99.99 0 0 0-.71-.301Zm12.987 0H12.03l1.562-4.63a1.868 1.868 0 0 0-.268-1.211 1.79 1.79 0 0 0-.96-.757 1.74 1.74 0 0 0-1.21.048 1.8 1.8 0 0 0-.902.83 25.486 25.486 0 0 1-4.238 5.514v9.862h.115c2.114.6 4.913 1.66 7.505 1.66 1.403 0 1.596-.541 1.885-1.355l2.36-7.201a2.109 2.109 0 0 0-.243-1.883 2.022 2.022 0 0 0-.717-.645 1.964 1.964 0 0 0-.925-.232Z'/%3E%3C/svg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(77, 163, 118);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M21.9,11.553l-3-6a.846.846,0,0,0-.164-.225A.987.987,0,0,0,18,5H13V3a1,1,0,0,0-2,0V5H6a.987.987,0,0,0-.731.328.846.846,0,0,0-.164.225l-3,6a.982.982,0,0,0-.1.447H2a4,4,0,0,0,8,0H9.99a.982.982,0,0,0-.1-.447L7.618,7H11V20H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2H13V7h3.382l-2.277,4.553a.982.982,0,0,0-.1.447H14a4,4,0,0,0,8,0h-.01A.982.982,0,0,0,21.9,11.553ZM7.882,12H4.118L6,8.236Zm8.236,0L18,8.236,19.882,12Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M21.9,11.553l-3-6a.846.846,0,0,0-.164-.225A.987.987,0,0,0,18,5H13V3a1,1,0,0,0-2,0V5H6a.987.987,0,0,0-.731.328.846.846,0,0,0-.164.225l-3,6a.982.982,0,0,0-.1.447H2a4,4,0,0,0,8,0H9.99a.982.982,0,0,0-.1-.447L7.618,7H11V20H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2H13V7h3.382l-2.277,4.553a.982.982,0,0,0-.1.447H14a4,4,0,0,0,8,0h-.01A.982.982,0,0,0,21.9,11.553ZM7.882,12H4.118L6,8.236Zm8.236,0L18,8.236,19.882,12Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(174, 138, 91);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg fill='none' height='100%25' viewBox='0 0 32 32' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m22.7875 20.56c-.04-2.6-1.91-6.46-6.89-6.46-2.85 0-3.24-1.74-3.27-2.39.03-.81.4-2.69 3.23-2.69 2.94 0 3.28 2.07 3.31 2.71.03.99.88 1.84 1.85 1.75 1-.02 1.79-.85 1.76-1.85-.05-2.17-1.49-5.24-5.1-6.03l.03-1.77c.01-1-.79-1.82-1.79-1.83-.01 0-.01 0-.02 0-.99 0-1.8.8-1.81 1.79l-.02 1.8c-3.64.77-5.04 3.88-5.06 6.11.04 2.42 1.91 6.02 6.89 6.02 2.81 0 3.21 2.04 3.27 2.8-.08.49-.54 2.28-3.27 2.28-2.77 0-3.21-1.86-3.28-2.41-.09-1-.95-1.72-1.97-1.64-1 .09-1.73.97-1.64 1.96.15 1.71 1.44 4.75 5.07 5.52v2.07c0 1 .81 1.81 1.81 1.81s1.82-.81 1.82-1.81v-2.07c3.63-.76 4.92-3.78 5.07-5.48l.01-.1z' fill='currentColor'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg fill='none' height='100%25' viewBox='0 0 32 32' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m22.7875 20.56c-.04-2.6-1.91-6.46-6.89-6.46-2.85 0-3.24-1.74-3.27-2.39.03-.81.4-2.69 3.23-2.69 2.94 0 3.28 2.07 3.31 2.71.03.99.88 1.84 1.85 1.75 1-.02 1.79-.85 1.76-1.85-.05-2.17-1.49-5.24-5.1-6.03l.03-1.77c.01-1-.79-1.82-1.79-1.83-.01 0-.01 0-.02 0-.99 0-1.8.8-1.81 1.79l-.02 1.8c-3.64.77-5.04 3.88-5.06 6.11.04 2.42 1.91 6.02 6.89 6.02 2.81 0 3.21 2.04 3.27 2.8-.08.49-.54 2.28-3.27 2.28-2.77 0-3.21-1.86-3.28-2.41-.09-1-.95-1.72-1.97-1.64-1 .09-1.73.97-1.64 1.96.15 1.71 1.44 4.75 5.07 5.52v2.07c0 1 .81 1.81 1.81 1.81s1.82-.81 1.82-1.81v-2.07c3.63-.76 4.92-3.78 5.07-5.48l.01-.1z' fill='currentColor'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm11-5a1 1 0 10-2 0v3.764a3 3 0 001.658 2.683l2.895 1.447a1 1 0 10.894-1.788l-2.894-1.448a1 1 0 01-.553-.894V7z' fill='currentColor'/%3E%3C/svg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm11-5a1 1 0 10-2 0v3.764a3 3 0 001.658 2.683l2.895 1.447a1 1 0 10.894-1.788l-2.894-1.448a1 1 0 01-.553-.894V7z' fill='currentColor'/%3E%3C/svg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(85, 133, 180);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m497.39 361.8-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6a370.66 370.66 0 0 1 -177.19-177.19l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112a24.16 24.16 0 0 0 -27.5-13.9l-104 24a24 24 0 0 0 -18.6 23.39c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0 -14.01-27.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m497.39 361.8-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6a370.66 370.66 0 0 1 -177.19-177.19l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112a24.16 24.16 0 0 0 -27.5-13.9l-104 24a24 24 0 0 0 -18.6 23.39c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0 -14.01-27.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(56, 159, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-trending-up'%3E%3Cpolyline points='22 7 13.5 15.5 8.5 10.5 2 17'/%3E%3Cpolyline points='16 7 22 7 22 13'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-trending-up'%3E%3Cpolyline points='22 7 13.5 15.5 8.5 10.5 2 17'/%3E%3Cpolyline points='16 7 22 7 22 13'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 178, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg height='32' viewBox='0 0 32 32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m26 7h-2v-1a2.0023 2.0023 0 0 0 -2-2h-12a2.0023 2.0023 0 0 0 -2 2v1h-2a2.0023 2.0023 0 0 0 -2 2v3a4.0045 4.0045 0 0 0 4 4h.322a8.1689 8.1689 0 0 0 6.678 5.9341v4.0659h-5v2h12v-2h-5v-4.0689a7.9661 7.9661 0 0 0 6.74-5.9311h.26a4.0045 4.0045 0 0 0 4-4v-3a2.0023 2.0023 0 0 0 -2-2zm-18 7a2.0023 2.0023 0 0 1 -2-2v-3h2zm18-2a2.0023 2.0023 0 0 1 -2 2v-5h2z'/%3E%3Cpath d='m0 0h32v32h-32z' fill='none'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg height='32' viewBox='0 0 32 32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m26 7h-2v-1a2.0023 2.0023 0 0 0 -2-2h-12a2.0023 2.0023 0 0 0 -2 2v1h-2a2.0023 2.0023 0 0 0 -2 2v3a4.0045 4.0045 0 0 0 4 4h.322a8.1689 8.1689 0 0 0 6.678 5.9341v4.0659h-5v2h12v-2h-5v-4.0689a7.9661 7.9661 0 0 0 6.74-5.9311h.26a4.0045 4.0045 0 0 0 4-4v-3a2.0023 2.0023 0 0 0 -2-2zm-18 7a2.0023 2.0023 0 0 1 -2-2v-3h2zm18-2a2.0023 2.0023 0 0 1 -2 2v-5h2z'/%3E%3Cpath d='m0 0h32v32h-32z' fill='none'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-rgb-abstract, 34,152,225);
  --callout-icon: var(--callout-icon-abstract, loader);
  background: color(srgb 0.163821 0.294975 0.368777) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(34, 152, 225, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(34, 152, 225, 0.1);
  border-right-color: rgba(34, 152, 225, 0.1);
  border-top-color: rgba(34, 152, 225, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-rgb-bug, 153,93,133);
  --callout-icon: var(--callout-icon-bug, bug);
  background: color(srgb 0.315488 0.219779 0.251522) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(153, 93, 133, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(153, 93, 133, 0.1);
  border-right-color: rgba(153, 93, 133, 0.1);
  border-top-color: rgba(153, 93, 133, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-rgb-danger, 226,72,86);
  --callout-icon: var(--callout-icon-danger, shield-alert);
  background: color(srgb 0.408527 0.193015 0.19162) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(226, 72, 86, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(226, 72, 86, 0.1);
  border-right-color: rgba(226, 72, 86, 0.1);
  border-top-color: rgba(226, 72, 86, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-rgb-example, 216,141,130);
  --callout-icon: var(--callout-icon-example, scroll-text);
  background: color(srgb 0.395782 0.280956 0.247699) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(216, 141, 130, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(216, 141, 130, 0.1);
  border-right-color: rgba(216, 141, 130, 0.1);
  border-top-color: rgba(216, 141, 130, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-rgb-fail, 226,72,86);
  --callout-icon: var(--callout-icon-fail, circle-slash);
  background: color(srgb 0.408527 0.193015 0.19162) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(226, 72, 86, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(226, 72, 86, 0.1);
  border-right-color: rgba(226, 72, 86, 0.1);
  border-top-color: rgba(226, 72, 86, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-rgb-info, 71,162,187);
  --callout-icon: var(--callout-icon-info, badge-info);
  background: color(srgb 0.210978 0.307721 0.320346) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(71, 162, 187, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(71, 162, 187, 0.1);
  border-right-color: rgba(71, 162, 187, 0.1);
  border-top-color: rgba(71, 162, 187, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-rgb-note, 200,175,155);
  --callout-icon: var(--callout-icon-note, sticker);
  background: color(srgb 0.375389 0.324289 0.279562) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(200, 175, 155, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(200, 175, 155, 0.1);
  border-right-color: rgba(200, 175, 155, 0.1);
  border-top-color: rgba(200, 175, 155, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-rgb-question, 130,190,235);
  --callout-icon: var(--callout-icon-general, help-circle);
  background: color(srgb 0.286174 0.343407 0.381522) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(130, 190, 235, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(130, 190, 235, 0.1);
  border-right-color: rgba(130, 190, 235, 0.1);
  border-top-color: rgba(130, 190, 235, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-rgb-quote, 173,214,171);
  --callout-icon: var(--callout-icon-general, quote-glyph);
  background: color(srgb 0.340978 0.373995 0.299954) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(173, 214, 171, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(173, 214, 171, 0.1);
  border-right-color: rgba(173, 214, 171, 0.1);
  border-top-color: rgba(173, 214, 171, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-rgb-success, 87,200,83);
  --callout-icon: var(--callout-icon-success, check-check);
  background: color(srgb 0.23137 0.356152 0.187797) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(87, 200, 83, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(87, 200, 83, 0.1);
  border-right-color: rgba(87, 200, 83, 0.1);
  border-top-color: rgba(87, 200, 83, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-rgb-tip, 70,206,185);
  --callout-icon: var(--callout-icon-tip, clover);
  background: color(srgb 0.209703 0.363799 0.317797) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(70, 206, 185, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(70, 206, 185, 0.1);
  border-right-color: rgba(70, 206, 185, 0.1);
  border-top-color: rgba(70, 206, 185, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-rgb-todo, 58,173,252);
  --callout-icon: var(--callout-icon-todo, list-todo);
  background: color(srgb 0.194409 0.32174 0.403189) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(58, 173, 252, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(58, 173, 252, 0.1);
  border-right-color: rgba(58, 173, 252, 0.1);
  border-top-color: rgba(58, 173, 252, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-rgb-warning, 255,161,32);
  --callout-icon: var(--callout-icon-general, lucide-alert-triangle);
  background: color(srgb 0.445487 0.306446 0.122797) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(255, 161, 32, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 161, 32, 0.1);
  border-right-color: rgba(255, 161, 32, 0.1);
  border-top-color: rgba(255, 161, 32, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(215, 192, 163));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  background: color(srgb 0.17115 0.145 0.11885) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.17115 0.145 0.11885));
  color: rgb(215, 192, 163);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z'/%3E%3Cpath d='M15 3v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M8 13h.01'/%3E%3Cpath d='M16 13h.01'/%3E%3Cpath d='M10 16s.8 1 2 1c1.3 0 2-1 2-1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: var(--callout-icon-abstract, loader);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: var(--callout-icon-bug, bug);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: var(--callout-icon-danger, shield-alert);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: var(--callout-icon-example, scroll-text);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: var(--callout-icon-fail, circle-slash);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: var(--callout-icon-info, badge-info);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: var(--callout-icon-note, sticker);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: var(--callout-icon-general, help-circle);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: var(--callout-icon-general, quote-glyph);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: var(--callout-icon-success, check-check);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: var(--callout-icon-tip, clover);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: var(--callout-icon-todo, list-todo);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: var(--callout-icon-general, lucide-alert-triangle);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(33, 27, 23);
  border-bottom-color: rgb(59, 48, 38);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-input-color, rgb(215, 192, 163));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(46, 38, 31));
  border-bottom-color: color(srgb 0.26608 0.213228 0.16192);
  border-left-color: color(srgb 0.26608 0.213228 0.16192);
  border-right-color: color(srgb 0.26608 0.213228 0.16192);
  border-top-color: color(srgb 0.26608 0.213228 0.16192);
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.27) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.314) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.4) 0px 30px 90px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  background-color: rgb(46, 38, 31);
  color: rgb(215, 192, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(215, 192, 163) none 0px;
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--prompt-suggestion-color-selected, rgb(215, 192, 163));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(215, 192, 163);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: var(--prompt-suggestion-color-selected, rgb(215, 192, 163));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  color: var(--prompt-suggestion-color-selected, rgb(215, 192, 163));
  font-weight: 450;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.26608 0.213228 0.16192);
  border-left-color: color(srgb 0.26608 0.213228 0.16192);
  border-right-color: color(srgb 0.26608 0.213228 0.16192);
  border-top-color: color(srgb 0.26608 0.213228 0.16192);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(46, 38, 31);
  border-bottom-color: rgb(52, 44, 35);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  border-bottom-color: rgb(215, 192, 163);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: var(--prompt-suggestion-color-selected, rgb(215, 192, 163));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: var(--prompt-suggestion-color-selected, rgb(215, 192, 163));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --icon-size: var(--icon-xs, 13px);
  --pill-background: var(--tag-background, rgba(0, 0, 0, 0.3));
  --pill-background-hover: var(--tag-background-hover, rgba(0, 0, 0, 0.2));
  --pill-border-color: var(--tag-border-color, rgba(0, 0, 0, 0.25));
  --pill-border-color-hover: var(--tag-border-color-hover, rgba(0, 0, 0, 0.35));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsla(197, 48%, 49%, 1));
  --pill-color-hover: var(--tag-color-hover, hsla(194, 59%, 56%, 1));
  --pill-color-remove: var(--tag-color, hsla(197, 48%, 49%, 1));
  --pill-color-remove-hover: var(--tag-color-hover, hsla(194, 59%, 56%, 1));
  --pill-padding-x: var(--tag-padding-x, 0.6em);
  --pill-padding-y: var(--tag-padding-y, 0.15em);
  --pill-radius: var(--tag-radius, 1em);
  --pill-weight: var(--pill-tag-weight, 550);
  background-color: var(--pill-background, rgba(255, 187, 0, 0.2));
  border-bottom-color: rgb(229, 170, 31);
  border-bottom-left-radius: 13.062px;
  border-bottom-right-radius: 13.062px;
  border-left-color: rgb(229, 170, 31);
  border-right-color: rgb(229, 170, 31);
  border-top-color: rgb(229, 170, 31);
  border-top-left-radius: 13.062px;
  border-top-right-radius: 13.062px;
  color: var(--pill-tag-color-1, rgb(229, 170, 31));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 13.062px;
  font-weight: var(--pill-weight, 550);
  line-height: var(--line-height-tight, 13.062px);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(229, 170, 31);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 650);
  border-bottom-color: var(--h1-border-bottom-color, rgb(59, 48, 38));
  border-bottom-style: solid;
  border-left-color: var(--h1-border-left-color, rgb(59, 48, 38));
  border-left-style: solid;
  border-right-color: var(--h1-border-right-color, rgb(59, 48, 38));
  border-right-style: solid;
  border-top-color: var(--h1-border-top-color, rgb(59, 48, 38));
  border-top-style: solid;
  color: var(--h1-color, rgb(235, 218, 198));
  font-family: var(--h1-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 650);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(235, 218, 198));
  font-weight: var(--inline-title-weight, 650);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 650);
  border-bottom-color: var(--h2-border-bottom-color, rgb(59, 48, 38));
  border-bottom-style: solid;
  border-left-color: var(--h2-border-left-color, rgb(59, 48, 38));
  border-left-style: solid;
  border-right-color: var(--h2-border-right-color, rgb(59, 48, 38));
  border-right-style: solid;
  border-top-color: var(--h2-border-top-color, rgb(59, 48, 38));
  border-top-style: solid;
  color: var(--h2-color, rgb(235, 218, 198));
  font-family: var(--h2-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 650);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(235, 218, 198);
  border-left-color: rgb(235, 218, 198);
  border-right-color: rgb(235, 218, 198);
  border-top-color: rgb(235, 218, 198);
  color: var(--inline-title-color, rgb(235, 218, 198));
  font-family: var(--inline-title-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--inline-title-weight, 650);
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 650);
  border-bottom-color: var(--h3-border-bottom-color, rgb(59, 48, 38));
  border-bottom-style: solid;
  border-left-color: var(--h3-border-left-color, rgb(59, 48, 38));
  border-left-style: solid;
  border-right-color: var(--h3-border-right-color, rgb(59, 48, 38));
  border-right-style: solid;
  border-top-color: var(--h3-border-top-color, rgb(59, 48, 38));
  border-top-style: solid;
  color: var(--h3-color, rgb(235, 218, 198));
  font-family: var(--h3-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 650);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 650);
  border-bottom-color: var(--h4-border-bottom-color, rgb(59, 48, 38));
  border-bottom-style: solid;
  border-left-color: var(--h4-border-left-color, rgb(59, 48, 38));
  border-left-style: solid;
  border-right-color: var(--h4-border-right-color, rgb(59, 48, 38));
  border-right-style: solid;
  border-top-color: var(--h4-border-top-color, rgb(59, 48, 38));
  border-top-style: solid;
  color: var(--h4-color, rgb(235, 218, 198));
  font-family: var(--h4-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 650);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 650);
  border-bottom-color: var(--h5-border-bottom-color, rgb(59, 48, 38));
  border-bottom-style: solid;
  border-left-color: var(--h5-border-left-color, rgb(59, 48, 38));
  border-left-style: solid;
  border-right-color: var(--h5-border-right-color, rgb(59, 48, 38));
  border-right-style: solid;
  border-top-color: var(--h5-border-top-color, rgb(59, 48, 38));
  border-top-style: solid;
  color: var(--h5-color, rgb(235, 218, 198));
  font-family: var(--h5-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 650);
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 650);
  border-bottom-color: var(--h6-border-bottom-color, rgb(59, 48, 38));
  border-bottom-style: solid;
  border-left-color: var(--h6-border-left-color, rgb(59, 48, 38));
  border-left-style: solid;
  border-right-color: var(--h6-border-right-color, rgb(59, 48, 38));
  border-right-style: solid;
  border-top-color: var(--h6-border-top-color, rgb(59, 48, 38));
  border-top-style: solid;
  color: var(--h6-color, rgb(235, 218, 198));
  font-family: var(--h6-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 650);
}

html[saved-theme="dark"] body hr {
  --divider-vertical-height: calc(100% - var(--header-height) - var(--editor-pane-margin) - var(--editor-border-radius)*2);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-rgb-note, 200,175,155);
  --callout-icon: var(--callout-icon-note, sticker);
  border-bottom-color: rgba(200, 175, 155, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(200, 175, 155, 0.1);
  border-right-color: rgba(200, 175, 155, 0.1);
  border-top-color: rgba(200, 175, 155, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(59, 48, 38);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-folder-color, rgb(171, 145, 109));
  cursor: var(--cursor, pointer);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 450);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-folder-color, rgb(171, 145, 109));
  cursor: var(--cursor, pointer);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 450);
}

html[saved-theme="dark"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
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

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}

html[saved-theme="dark"] body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 450);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.52501 0.433977 0.31699);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: color(srgb 0.52501 0.433977 0.31699);
  border-right-color: color(srgb 0.52501 0.433977 0.31699);
  border-top-color: color(srgb 0.52501 0.433977 0.31699);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--icon-color, color(srgb 0.52501 0.433977 0.31699));
  cursor: var(--cursor, pointer);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(38, 33, 28));
  border-bottom-color: rgb(59, 48, 38);
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  color: var(--status-bar-text-color, rgb(171, 145, 109));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: var(--status-bar-item-color, rgb(145, 121, 89));
  font-weight: 450;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(215, 192, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(171, 145, 109));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 145, 109);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(171, 145, 109);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(171, 145, 109));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: color(srgb 0.52501 0.433977 0.31699);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: color(srgb 0.52501 0.433977 0.31699);
  border-right-color: color(srgb 0.52501 0.433977 0.31699);
  border-top-color: color(srgb 0.52501 0.433977 0.31699);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--icon-color, color(srgb 0.52501 0.433977 0.31699));
  cursor: var(--cursor, pointer);
}

html[saved-theme="dark"] body .darkmode svg {
  color: color(srgb 0.52501 0.433977 0.31699);
  stroke: color(srgb 0.52501 0.433977 0.31699);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(145, 121, 89);
  border-left-color: rgb(145, 121, 89);
  border-right-color: rgb(145, 121, 89);
  border-top-color: rgb(145, 121, 89);
  color: var(--breadcrumb-color, rgb(145, 121, 89));
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--breadcrumb-separator-color, rgb(59, 48, 38));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(215, 192, 163));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, color(srgb 0.1938 0.16404 0.1302));
  border-color: rgb(59, 48, 38);
  box-shadow: var(--canvas-menu-shadow, rgba(0, 0, 0, 0.14) 0px 1px 2px 1px, rgba(0, 0, 0, 0.22) 0px 1px 4px -2.1px, rgba(0, 0, 0, 0.15) 0px 2px 8px -1.2px);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgb(38, 33, 28));
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(59, 48, 38);
  color: var(--table-header-color, rgb(215, 192, 163));
  font-weight: var(--table-header-weight, 650);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: var(--metadata-background, color(srgb 0.17115 0.145 0.11885));
  border-bottom-color: rgb(59, 48, 38);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(59, 48, 38);
  border-left-width: 1px;
  border-right-color: rgb(59, 48, 38);
  border-right-width: 1px;
  border-top-color: rgb(59, 48, 38);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--text-muted, rgb(171, 145, 109));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(171, 145, 109);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(171, 145, 109);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: var(--size-4-2, 0px);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(171, 145, 109);
  font-family: var(--metadata-label-font, "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: 14.928px;
  font-weight: 450;
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(171, 145, 109);
  font-family: var(--metadata-input-font, "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: 14.928px;
}

html[saved-theme="dark"] body .note-properties {
  background-color: var(--metadata-background, color(srgb 0.17115 0.145 0.11885));
  border-color: rgb(59, 48, 38);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(171, 145, 109);
  font-weight: 450;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .note-properties-tags {
  --icon-size: var(--icon-xs, 13px);
  --pill-background: var(--tag-background, rgba(0, 0, 0, 0.3));
  --pill-background-hover: var(--tag-background-hover, rgba(0, 0, 0, 0.2));
  --pill-border-color: var(--tag-border-color, rgba(0, 0, 0, 0.25));
  --pill-border-color-hover: var(--tag-border-color-hover, rgba(0, 0, 0, 0.35));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsla(197, 48%, 49%, 1));
  --pill-color-hover: var(--tag-color-hover, hsla(194, 59%, 56%, 1));
  --pill-color-remove: var(--tag-color, hsla(197, 48%, 49%, 1));
  --pill-color-remove-hover: var(--tag-color-hover, hsla(194, 59%, 56%, 1));
  --pill-padding-x: var(--tag-padding-x, 0.6em);
  --pill-padding-y: var(--tag-padding-y, 0.15em);
  --pill-radius: var(--tag-radius, 1em);
  --pill-weight: var(--pill-tag-weight, 550);
  background-color: var(--pill-background, rgba(255, 187, 0, 0.2));
  border-radius: 13.062px;
  color: var(--pill-tag-color-1, rgb(229, 170, 31));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(46, 38, 31));
  color: var(--text-normal, rgb(215, 192, 163));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(38, 33, 28));
  border-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(38, 33, 28));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(215, 192, 163);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(38, 33, 28));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: var(--file-header-title-color, rgb(171, 145, 109));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(145, 121, 89);
  border-left-color: rgb(145, 121, 89);
  border-right-color: rgb(145, 121, 89);
  border-top-color: rgb(145, 121, 89);
  color: var(--metadata-key-input-color-active, rgb(145, 121, 89));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(42, 36, 30));
  border-bottom-color: rgb(247, 104, 94);
  border-left-color: rgb(247, 104, 94);
  border-right-color: rgb(247, 104, 94);
  border-top-color: rgb(247, 104, 94);
  box-shadow: var(--kbd-shadow, rgba(0, 0, 0, 0.17) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.2) 0px -2px 0px 0px inset);
  color: var(--kbd-color, rgb(247, 104, 94));
  font-family: var(--font-monospace, "??", "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body sub {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body summary {
  color: rgb(215, 192, 163);
  font-weight: 450;
}

html[saved-theme="dark"] body sup {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body ul.tags > li {
  --font-weight: var(--link-weight, 450);
  background-color: var(--tag-background, rgba(0, 0, 0, 0.3));
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 12.25px;
  border-bottom-right-radius: 12.25px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.25);
  border-top-left-radius: 12.25px;
  border-top-right-radius: 12.25px;
  border-top-width: 1px;
  color: var(--tag-color, rgb(65, 151, 185));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 31;
  --accent-l: 50%;
  --accent-s: 23%;
  --active-line-bg: var(--color-base-00, hsla(36, 38%, 98%, 1));
  --alternating-color-1: var(--color-l-yellow-30, hsla(40, 79%, 47%, 1));
  --alternating-color-1-hover-active: var(--color-l-yellow-40, hsla(40, 98%, 36%, 1));
  --alternating-color-2: var(--color-l-red-30, hsla(4, 56%, 48%, 1));
  --alternating-color-2-hover-active: var(--color-l-red-40, hsla(4, 72%, 35%, 1));
  --alternating-color-3: var(--color-l-blue-30, hsla(200, 64%, 37%, 1));
  --alternating-color-3-hover-active: var(--color-l-blue-40, hsla(205, 85%, 25%, 1));
  --amount-chbx-color: hsla(152, 42%, 41%, 1);
  --amount-chbx-icon-color: white;
  --amount-chbx-radius: 100%;
  --anim-popdown: 0.4s slideDown forwards;
  --anim-popup: 0.3s slideUp forwards;
  --anim-popup-alt: 0.335s slideUpAlt forwards;
  --background-anim: background var(--anim-duration-fast) var(--anim-motion-smooth);
  --background-modifier-active-hover: var(--color-l-gray-60, hsla(37, 38%, 83%, 1));
  --background-modifier-border: var(--color-l-gray-60, hsla(37, 38%, 83%, 1));
  --background-modifier-border-focus: color-mix(in hsl, var(--color-l-gray-70) 60%, var(--color-l-gray-60));
  --background-modifier-border-hover: color-mix(in hsl, var(--color-l-gray-70) 60%, var(--color-l-gray-60));
  --background-modifier-error: var(--color-l-red-30, hsla(4, 56%, 48%, 1));
  --background-modifier-error-hover: var(--color-l-red-20, hsla(4, 72%, 55%, 1));
  --background-modifier-error-rgb: var(--color-red-rgb, 223,90,90);
  --background-modifier-form-field: var(--color-l-gray-30, hsla(35, 37%, 92%, 1));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsla(35, 37%, 92%, 1));
  --background-modifier-message: var(--color-l-gray-100, hsla(35, 28%, 40%, 1));
  --background-modifier-success: var(--color-l-green-30, hsla(149, 50%, 39%, 1));
  --background-modifier-success-rgb: var(--color-green-rgb, 87,185,132);
  --background-modifier-warning: var(--color-l-orange-30, hsla(18, 69%, 50%, 1));
  --background-modifier-warning-hover: var(--color-l-orange-20, hsla(21, 81%, 59%, 1));
  --background-primary: var(--color-l-gray-20, hsla(35, 36%, 96%, 1));
  --background-primary-alt: var(--color-l-gray-30, hsla(35, 37%, 92%, 1));
  --background-secondary: var(--color-l-gray-40, hsla(34, 34%, 90%, 1));
  --background-secondary-alt: var(--color-l-gray-40, hsla(34, 34%, 90%, 1));
  --bases-cards-background: var(--background-primary, hsla(35, 36%, 96%, 1));
  --bases-cards-cover-background: var(--background-primary-alt, hsla(35, 37%, 92%, 1));
  --bases-embed-border-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --bases-group-heading-property-color: var(--text-muted, hsla(35, 28%, 40%, 1));
  --bases-group-heading-property-weight: var(--font-normal, 450);
  --bases-group-heading-value-weight: var(--font-semibold, 650);
  --bases-table-border-color: var(--table-border-color, hsla(37, 38%, 83%, 1));
  --bases-table-cell-background-active: var(--background-primary, hsla(35, 36%, 96%, 1));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsla(35, 37%, 92%, 1));
  --bases-table-cell-background-selected: var(--table-selection, hsla(31,23%,50%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsla(35, 37%, 92%, 1));
  --bases-table-header-background: var(--background-primary, hsla(35, 36%, 96%, 1));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.5));
  --bases-table-header-color: var(--text-muted, hsla(35, 28%, 40%, 1));
  --bases-table-header-weight: var(--font-weight, 450);
  --bases-table-row-background-hover: var(--table-row-background-hover, hsla(36, 38%, 98%, 1));
  --bases-table-summary-background: var(--background-primary, hsla(35, 36%, 96%, 1));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.5));
  --blockquote-background-color: var(--color-l-gray-10, hsla(36, 38%, 98%, 1));
  --blockquote-border-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --bodyFont: var(--font-text-theme, "Inter");
  --bold-color: var(--color-l-red-30, hsla(4, 56%, 48%, 1));
  --bold-highlight-bg: var(--color-l-alpha-red, hsla(350, 84%, 63%, 0.2));
  --bold-highlight-color: var(--text-normal, hsla(31, 45%, 24%, 1));
  --bold-italic-color: var(--color-l-gray-140, hsla(33, 54%, 17%, 1));
  --bold-italic-highlight-bg: var(--color-l-alpha-green, hsla(74, 69%, 44%, 0.2));
  --bold-italic-highlight-color: var(--bold-italic-color, hsla(33, 54%, 17%, 1));
  --bold-italic-strikethrough-color: var(--color-l-gray-90, hsla(31, 23%, 50%, 1));
  --bold-italic-weight: var(--font-bold, 750);
  --bold-weight: var(--font-bold, 750);
  --bookmark-chbx-color: hsla(21, 81%, 59%, 1);
  --bookmark-folder-1-bg-color: var(--nav-folder-1-bg-color, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent));
  --bookmark-folder-1-bg-color-hover: var(--nav-folder-1-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-1-collapse-color: var(--nav-folder-1-collapse-color, color-mix(in srgb, hsla(4, 56%, 48%, 1) 50%, transparent));
  --bookmark-folder-1-color: var(--nav-folder-1-color, hsla(4, 56%, 48%, 1));
  --bookmark-folder-1-indent-color: var(--nav-folder-1-indent-color, color-mix(in srgb, hsla(4, 56%, 48%, 1) 25%, transparent));
  --bookmark-folder-10-bg-color: var(--nav-folder-10-bg-color, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent));
  --bookmark-folder-10-bg-color-hover: var(--nav-folder-10-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-10-collapse-color: var(--nav-folder-10-collapse-color, color-mix(in srgb, hsla(153, 65%, 29%, 1) 50%, transparent));
  --bookmark-folder-10-color: var(--nav-folder-10-color, hsla(153, 65%, 29%, 1));
  --bookmark-folder-10-indent-color: var(--nav-folder-10-indent-color, color-mix(in srgb, hsla(153, 65%, 29%, 1) 25%, transparent));
  --bookmark-folder-11-bg-color: var(--nav-folder-11-bg-color, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent));
  --bookmark-folder-11-bg-color-hover: var(--nav-folder-11-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-11-collapse-color: var(--nav-folder-11-collapse-color, color-mix(in srgb, hsla(200, 64%, 37%, 1) 50%, transparent));
  --bookmark-folder-11-color: var(--nav-folder-11-color, hsla(200, 64%, 37%, 1));
  --bookmark-folder-11-indent-color: var(--nav-folder-11-indent-color, color-mix(in srgb, hsla(200, 64%, 37%, 1) 25%, transparent));
  --bookmark-folder-12-bg-color: var(--nav-folder-12-bg-color, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent));
  --bookmark-folder-12-bg-color-hover: var(--nav-folder-12-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-12-collapse-color: var(--nav-folder-12-collapse-color, color-mix(in srgb, hsla(275, 37%, 43%, 1) 50%, transparent));
  --bookmark-folder-12-color: var(--nav-folder-12-color, hsla(275, 37%, 43%, 1));
  --bookmark-folder-12-indent-color: var(--nav-folder-12-indent-color, color-mix(in srgb, hsla(275, 37%, 43%, 1) 25%, transparent));
  --bookmark-folder-2-bg-color: var(--nav-folder-2-bg-color, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent));
  --bookmark-folder-2-bg-color-hover: var(--nav-folder-2-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-2-collapse-color: var(--nav-folder-2-collapse-color, color-mix(in srgb, hsla(18, 69%, 50%, 1) 50%, transparent));
  --bookmark-folder-2-color: var(--nav-folder-2-color, hsla(18, 69%, 50%, 1));
  --bookmark-folder-2-indent-color: var(--nav-folder-2-indent-color, color-mix(in srgb, hsla(18, 69%, 50%, 1) 25%, transparent));
  --bookmark-folder-3-bg-color: var(--nav-folder-3-bg-color, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent));
  --bookmark-folder-3-bg-color-hover: var(--nav-folder-3-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-3-collapse-color: var(--nav-folder-3-collapse-color, color-mix(in srgb, hsla(40, 98%, 36%, 1) 50%, transparent));
  --bookmark-folder-3-color: var(--nav-folder-3-color, hsla(40, 98%, 36%, 1));
  --bookmark-folder-3-indent-color: var(--nav-folder-3-indent-color, color-mix(in srgb, hsla(40, 98%, 36%, 1) 25%, transparent));
  --bookmark-folder-4-bg-color: var(--nav-folder-4-bg-color, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent));
  --bookmark-folder-4-bg-color-hover: var(--nav-folder-4-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-4-collapse-color: var(--nav-folder-4-collapse-color, color-mix(in srgb, hsla(153, 65%, 29%, 1) 50%, transparent));
  --bookmark-folder-4-color: var(--nav-folder-4-color, hsla(153, 65%, 29%, 1));
  --bookmark-folder-4-indent-color: var(--nav-folder-4-indent-color, color-mix(in srgb, hsla(153, 65%, 29%, 1) 25%, transparent));
  --bookmark-folder-5-bg-color: var(--nav-folder-5-bg-color, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent));
  --bookmark-folder-5-bg-color-hover: var(--nav-folder-5-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-5-collapse-color: var(--nav-folder-5-collapse-color, color-mix(in srgb, hsla(200, 64%, 37%, 1) 50%, transparent));
  --bookmark-folder-5-color: var(--nav-folder-5-color, hsla(200, 64%, 37%, 1));
  --bookmark-folder-5-indent-color: var(--nav-folder-5-indent-color, color-mix(in srgb, hsla(200, 64%, 37%, 1) 25%, transparent));
  --bookmark-folder-6-bg-color: var(--nav-folder-6-bg-color, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent));
  --bookmark-folder-6-bg-color-hover: var(--nav-folder-6-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-6-collapse-color: var(--nav-folder-6-collapse-color, color-mix(in srgb, hsla(275, 37%, 43%, 1) 50%, transparent));
  --bookmark-folder-6-color: var(--nav-folder-6-color, hsla(275, 37%, 43%, 1));
  --bookmark-folder-6-indent-color: var(--nav-folder-6-indent-color, color-mix(in srgb, hsla(275, 37%, 43%, 1) 25%, transparent));
  --bookmark-folder-7-bg-color: var(--nav-folder-7-bg-color, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent));
  --bookmark-folder-7-bg-color-hover: var(--nav-folder-7-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-7-collapse-color: var(--nav-folder-7-collapse-color, color-mix(in srgb, hsla(4, 56%, 48%, 1) 50%, transparent));
  --bookmark-folder-7-color: var(--nav-folder-7-color, hsla(4, 56%, 48%, 1));
  --bookmark-folder-7-indent-color: var(--nav-folder-7-indent-color, color-mix(in srgb, hsla(4, 56%, 48%, 1) 25%, transparent));
  --bookmark-folder-8-bg-color: var(--nav-folder-8-bg-color, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent));
  --bookmark-folder-8-bg-color-hover: var(--nav-folder-8-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-8-collapse-color: var(--nav-folder-8-collapse-color, color-mix(in srgb, hsla(18, 69%, 50%, 1) 50%, transparent));
  --bookmark-folder-8-color: var(--nav-folder-8-color, hsla(18, 69%, 50%, 1));
  --bookmark-folder-8-indent-color: var(--nav-folder-8-indent-color, color-mix(in srgb, hsla(18, 69%, 50%, 1) 25%, transparent));
  --bookmark-folder-9-bg-color: var(--nav-folder-9-bg-color, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent));
  --bookmark-folder-9-bg-color-hover: var(--nav-folder-9-bg-color-hover, color-mix(in srgb, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) 70%, transparent));
  --bookmark-folder-9-collapse-color: var(--nav-folder-9-collapse-color, color-mix(in srgb, hsla(40, 98%, 36%, 1) 50%, transparent));
  --bookmark-folder-9-color: var(--nav-folder-9-color, hsla(40, 98%, 36%, 1));
  --bookmark-folder-9-indent-color: var(--nav-folder-9-indent-color, color-mix(in srgb, hsla(40, 98%, 36%, 1) 25%, transparent));
  --breadcrumb-bg-hover: var(--color-l-gray-40, hsla(34, 34%, 90%, 1));
  --breadcrumb-color: var(--color-l-gray-90, hsla(31, 23%, 50%, 1));
  --breadcrumb-color-hover: var(--color-l-gray-90, hsla(31, 23%, 50%, 1));
  --breadcrumb-separator-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --button-accent-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.09),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 2px rgba(0, 0, 0, 0.15),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.22),0px 2px 4px -1px rgba(0, 0, 0, 0.19);
  --button-accent-shadow-active: var(--input-shadow-active, inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.09),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.6));
  --button-accent-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.28),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 2px rgba(0, 0, 0, 0.15),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 6px -1px rgba(0, 0, 0, 0.24),0px 0px 0px 3px var(--color-l-alpha-gray);
  --button-accent-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.19),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 2px rgba(0, 0, 0, 0.15),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 6px -1px rgba(0, 0, 0, 0.24);
  --button-anim: var(--anim-duration-fast) var(--anim-motion-jumpy, 140ms cubic-bezier(0.68, -0.55, 0.27, 1.55));
  --button-axis-offset: 2px;
  --button-inset-shadow-size: 2px;
  --button-metadata-padding: var(--size-2-3) var(--size-4-2) calc(var(--size-2-3) + var(--button-inset-shadow-size)) var(--size-2-3, 6px 8px 8px 6px);
  --button-metadata-padding-active: calc(var(--size-2-2) + var(--button-inset-shadow-size)) var(--size-4-2) var(--size-2-3) var(--size-2-3);
  --button-opacity-active: 0.5;
  --button-padding: var(--size-4-2) var(--size-4-3) calc(var(--size-4-2) + var(--button-inset-shadow-size)) var(--size-4-3, 8px 12px 10px 12px);
  --button-padding-active: calc(var(--size-4-2) + var(--button-inset-shadow-size)) var(--size-4-3) var(--size-4-2) var(--size-4-3);
  --button-radius: var(--size-4-2, 8px);
  --button-s-padding: var(--size-2-2) var(--size-4-2) var(--size-2-2) var(--size-4-2, 4px 8px 4px 8px);
  --button-s-radius: calc(var(--button-radius)*0.8);
  --button-shadow: var(--input-shadow, inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.1),0px 2px 4px -1px rgba(0, 0, 0, 0.05));
  --button-shadow-active: var(--input-shadow-active, inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.09),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.6));
  --button-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.1),0px 2px 4px -1px rgba(0, 0, 0, 0.05),0px 0px 0px 3px var(--color-l-alpha-gray);
  --button-shadow-hover: var(--input-shadow-hover, inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.15),0px 2px 6px -1px rgba(0, 0, 0, 0.1));
  --callout-border-opacity: 0.2;
  --callout-bug: var(--color-red-rgb, 223,90,90);
  --callout-color-opacity: 32.5%;
  --callout-container-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08),0px 1px 6px 0px rgba(0, 0, 0, 0.12);
  --callout-content-background: color-mix( in srgb, var(--background-primary-alt) 50%, var(--background-primary) );
  --callout-content-padding: var(--size-4-1) var(--size-4-4) calc(var(--size-4-1) + var(--callout-shadow-offset)) var(--size-4-4, 4px 16px 8px 16px);
  --callout-content-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08),inset 0px calc(var(--callout-shadow-offset)*-1) var(--callout-content-shadow-blur) 0px rgba(100, 100, 100, 0.13);
  --callout-content-shadow-blur: 3px;
  --callout-default: var(--color-blue-rgb, 99,164,198);
  --callout-error: var(--color-red-rgb, 223,90,90);
  --callout-example: var(--color-purple-rgb, 135,106,193);
  --callout-fail: var(--color-red-rgb, 223,90,90);
  --callout-icon-abstract: loader;
  --callout-icon-attention: megaphone;
  --callout-icon-bug: bug;
  --callout-icon-caution: construction;
  --callout-icon-check: check-check;
  --callout-icon-cite: book-marked;
  --callout-icon-danger: shield-alert;
  --callout-icon-done: check-check;
  --callout-icon-error: ban;
  --callout-icon-example: scroll-text;
  --callout-icon-fail: circle-slash;
  --callout-icon-faq: circle-help;
  --callout-icon-fold-filter: brightness(0.8);
  --callout-icon-general: shapes;
  --callout-icon-help: life-buoy;
  --callout-icon-hint: search-slash;
  --callout-icon-important: square-asterisk;
  --callout-icon-info: badge-info;
  --callout-icon-missing: search;
  --callout-icon-note: sticker;
  --callout-icon-question: circle-help;
  --callout-icon-quote: message-square-note;
  --callout-icon-success: check-check;
  --callout-icon-summary: align-justify;
  --callout-icon-tip: clover;
  --callout-icon-tldr: book-open-text;
  --callout-icon-todo: list-todo;
  --callout-icon-warning: triangle-alert;
  --callout-important: var(--color-cyan-rgb, 124,180,206);
  --callout-info: var(--color-blue-rgb, 99,164,198);
  --callout-question: var(--color-orange-rgb, 231,130,63);
  --callout-quote: var(--callout-rgb-quote, 173,214,171);
  --callout-radius: var(--radius-m, 8px);
  --callout-rgb-abstract: 34,152,225;
  --callout-rgb-attention: 255,161,32;
  --callout-rgb-bug: 153,93,133;
  --callout-rgb-caution: 255,161,32;
  --callout-rgb-check: 87,200,83;
  --callout-rgb-cite: 237,217,162;
  --callout-rgb-danger: 226,72,86;
  --callout-rgb-done: 87,200,83;
  --callout-rgb-error: 226,72,86;
  --callout-rgb-example: 216,141,130;
  --callout-rgb-fail: 226,72,86;
  --callout-rgb-faq: 130,190,235;
  --callout-rgb-general: 182,196,182;
  --callout-rgb-help: 250,128,96;
  --callout-rgb-hint: 70,206,185;
  --callout-rgb-important: 246,113,118;
  --callout-rgb-info: 71,162,187;
  --callout-rgb-missing: 226,72,86;
  --callout-rgb-note: 200,175,155;
  --callout-rgb-question: 130,190,235;
  --callout-rgb-quote: 173,214,171;
  --callout-rgb-success: 87,200,83;
  --callout-rgb-summary: 234,181,52;
  --callout-rgb-tip: 70,206,185;
  --callout-rgb-tldr: 240,180,225;
  --callout-rgb-todo: 58,173,252;
  --callout-rgb-warning: 255,161,32;
  --callout-shadow-offset: 4px;
  --callout-success: var(--color-green-rgb, 87,185,132);
  --callout-summary: var(--color-cyan-rgb, 124,180,206);
  --callout-tip: var(--color-cyan-rgb, 124,180,206);
  --callout-title-color: var(--text-normal, hsla(31, 45%, 24%, 1));
  --callout-title-padding: var(--size-4-3) var(--size-4-4, 12px 16px);
  --callout-title-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 1px 0px rgba(255, 255, 255, 0.2);
  --callout-todo: var(--color-blue-rgb, 99,164,198);
  --callout-warning: var(--color-orange-rgb, 231,130,63);
  --cancelled-chbx-color: hsla(32, 10%, 68%, 1);
  --cancelled-chbx-text-color: var(--text-faint, hsla(34, 29%, 60%, 1));
  --cancelled-chbx-text-decoration: line-through;
  --canvas-background: var(--editor-bg-color, hsla(35, 36%, 96%, 1));
  --canvas-card-label-color: var(--text-faint, hsla(34, 29%, 60%, 1));
  --canvas-color: var(--color-gray-rgb, 182,175,166);
  --canvas-color-1: var(--color-red-rgb, 223,90,90);
  --canvas-color-2: var(--color-orange-rgb, 231,130,63);
  --canvas-color-3: var(--color-yellow-rgb, 248,197,46);
  --canvas-color-4: var(--color-green-rgb, 87,185,132);
  --canvas-color-5: var(--color-blue-rgb, 99,164,198);
  --canvas-color-6: var(--color-purple-rgb, 135,106,193);
  --canvas-controls-icon-size: var(--icon-s, 15px);
  --canvas-dot-pattern: var(--color-base-30, hsla(37, 38%, 83%, 1));
  --canvas-icon-color: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --canvas-icon-color-disabled: var(--color-l-gray-60, hsla(37, 38%, 83%, 1));
  --canvas-icon-color-hover: var(--color-l-gray-120, hsla(36, 32%, 30%, 1));
  --canvas-menu-bg: color-mix(in hsl, var(--color-l-gray-10) 50%, var(--color-l-gray-20));
  --canvas-menu-bg-hover: var(--color-l-gray-10, hsla(36, 38%, 98%, 1));
  --canvas-menu-border: 1px solid var(--background-modifier-border);
  --canvas-menu-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.02),0px 1px 4px -2.1px rgba(0, 0, 0, 0.1),0px 2px 8px -1.2px rgba(0, 0, 0, 0.03);
  --caret-color: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --checkbox-border-color: var(--color-l-gray-60, hsla(37, 38%, 83%, 1));
  --checkbox-border-color-hover: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --checkbox-color: var(--color-l-green-30, hsla(149, 50%, 39%, 1));
  --checkbox-color-hover: var(--color-l-green-20, hsla(148, 48%, 47%, 1));
  --checkbox-marker-color: var(--background-primary, white);
  --checked-border-color: rgba(0, 0, 0, 0.15);
  --checked-border-color-hover: rgba(0, 0, 0, 0.1);
  --checklist-bg: var(--color-l-gray-10, hsla(36, 38%, 98%, 1));
  --checklist-done-color: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --checklist-shadow-hover: 0px 0px 0px 3px rgba(0, 0, 0, 0.07);
  --clickable-icon-radius: calc(var(--radius-s) + 1px);
  --clock-chbx-color: hsla(210, 39%, 49%, 1);
  --close-button-radius: var(--radius-l, 12px);
  --code-background: var(--background-primary-alt, hsla(35, 37%, 92%, 1));
  --code-border-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.5));
  --code-comment: var(--text-faint, hsla(34, 29%, 60%, 1));
  --code-function: var(--color-yellow, hsla(42, 89%, 46%, 1));
  --code-important: var(--color-orange, hsla(30, 66%, 52%, 1));
  --code-keyword: var(--color-pink, hsla(351, 44%, 61%, 1));
  --code-normal: var(--text-normal, hsla(31, 45%, 24%, 1));
  --code-operator: var(--color-red, hsla(0, 58%, 53%, 1));
  --code-property: var(--color-cyan, hsla(178, 39%, 49%, 1));
  --code-punctuation: var(--text-muted, hsla(35, 28%, 40%, 1));
  --code-radius: var(--radius-m, 8px);
  --code-string: var(--color-green, hsla(146, 37%, 49%, 1));
  --code-tag: var(--color-red, hsla(0, 58%, 53%, 1));
  --code-value: var(--color-purple, hsla(249, 39%, 60%, 1));
  --collapse-icon-color: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --collapse-icon-color-collapsed: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --color-accent-1: hsl( calc(var(--accent-h) - 1), calc(var(--accent-s)*1.01), calc(var(--accent-l)*1.075) );
  --color-accent-2: hsl( calc(var(--accent-h) - 3), calc(var(--accent-s)*1.33), calc(var(--accent-l)*1.19) );
  --color-accent-hsl: var(--accent-h),var(--accent-s),var(--accent-l);
  --color-base-00: var(--color-l-gray-10, hsla(36, 38%, 98%, 1));
  --color-base-05: var(--color-l-gray-20, hsla(35, 36%, 96%, 1));
  --color-base-10: var(--color-l-gray-30, hsla(35, 37%, 92%, 1));
  --color-base-100: var(--color-l-gray-140, hsla(33, 54%, 17%, 1));
  --color-base-20: var(--color-l-gray-40, hsla(34, 34%, 90%, 1));
  --color-base-25: var(--color-l-gray-50, hsla(36, 35%, 88%, 1));
  --color-base-30: var(--color-l-gray-60, hsla(37, 38%, 83%, 1));
  --color-base-35: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --color-base-40: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --color-base-50: var(--color-l-gray-90, hsla(31, 23%, 50%, 1));
  --color-base-60: var(--color-l-gray-100, hsla(35, 28%, 40%, 1));
  --color-base-70: var(--color-l-gray-120, hsla(36, 32%, 30%, 1));
  --color-blue: hsla(206, 57%, 44%, 1);
  --color-blue-rgb: 99,164,198;
  --color-cyan: hsla(178, 39%, 49%, 1);
  --color-cyan-rgb: 124,180,206;
  --color-gray: hsla(34, 9.9%, 68.2%, 1);
  --color-gray-rgb: 182,175,166;
  --color-green: hsla(146, 37%, 49%, 1);
  --color-green-rgb: 87,185,132;
  --color-l-alpha-blue: hsla(186, 64%, 46%, 0.2);
  --color-l-alpha-gray: hsla(34, 37%, 70%, 0.15);
  --color-l-alpha-green: hsla(74, 69%, 44%, 0.2);
  --color-l-alpha-orange: hsla(27, 100%, 50%, 0.2);
  --color-l-alpha-purple: hsla(236, 100%, 72%, 0.2);
  --color-l-alpha-red: hsla(350, 84%, 63%, 0.2);
  --color-l-alpha-yellow: hsla(44, 100%, 50%, 0.2);
  --color-l-blue-10: hsla(197, 39%, 56%, 1);
  --color-l-blue-20: hsla(202, 66%, 48%, 1);
  --color-l-blue-30: hsla(200, 64%, 37%, 1);
  --color-l-blue-40: hsla(205, 85%, 25%, 1);
  --color-l-gray-10: hsla(36, 38%, 98%, 1);
  --color-l-gray-100: hsla(35, 28%, 40%, 1);
  --color-l-gray-110: hsla(34, 30%, 37%, 1);
  --color-l-gray-120: hsla(36, 32%, 30%, 1);
  --color-l-gray-130: hsla(31, 45%, 24%, 1);
  --color-l-gray-140: hsla(33, 54%, 17%, 1);
  --color-l-gray-20: hsla(35, 36%, 96%, 1);
  --color-l-gray-30: hsla(35, 37%, 92%, 1);
  --color-l-gray-40: hsla(34, 34%, 90%, 1);
  --color-l-gray-50: hsla(36, 35%, 88%, 1);
  --color-l-gray-60: hsla(37, 38%, 83%, 1);
  --color-l-gray-70: hsla(34, 37%, 70%, 1);
  --color-l-gray-80: hsla(34, 29%, 60%, 1);
  --color-l-gray-90: hsla(31, 23%, 50%, 1);
  --color-l-green-10: hsla(148, 30%, 65%, 1);
  --color-l-green-20: hsla(148, 48%, 47%, 1);
  --color-l-green-30: hsla(149, 50%, 39%, 1);
  --color-l-green-40: hsla(153, 65%, 29%, 1);
  --color-l-orange-10: hsla(26, 70%, 63%, 1);
  --color-l-orange-20: hsla(21, 81%, 59%, 1);
  --color-l-orange-30: hsla(18, 69%, 50%, 1);
  --color-l-orange-40: hsla(18, 96%, 35%, 1);
  --color-l-purple-10: hsla(280, 43%, 76%, 1);
  --color-l-purple-20: hsla(277, 35%, 59%, 1);
  --color-l-purple-30: hsla(275, 37%, 43%, 1);
  --color-l-purple-40: hsla(265, 70%, 30%, 1);
  --color-l-red-10: hsla(4, 59%, 64%, 1);
  --color-l-red-20: hsla(4, 72%, 55%, 1);
  --color-l-red-30: hsla(4, 56%, 48%, 1);
  --color-l-red-40: hsla(4, 72%, 35%, 1);
  --color-l-yellow-10: hsla(43, 71%, 67%, 1);
  --color-l-yellow-20: hsla(43, 83%, 57%, 1);
  --color-l-yellow-30: hsla(40, 79%, 47%, 1);
  --color-l-yellow-40: hsla(40, 98%, 36%, 1);
  --color-orange: hsla(30, 66%, 52%, 1);
  --color-orange-rgb: 231,130,63;
  --color-pink: hsla(351, 44%, 61%, 1);
  --color-pink-rgb: 217,102,122;
  --color-purple: hsla(249, 39%, 60%, 1);
  --color-purple-rgb: 135,106,193;
  --color-red: hsla(0, 58%, 53%, 1);
  --color-red-rgb: 223,90,90;
  --color-yellow: hsla(42, 89%, 46%, 1);
  --color-yellow-rgb: 248,197,46;
  --community-item-flair-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  --community-item-selected-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.23),0px 1px 3px -2.6px rgba(0, 0, 0, 0.23),0px 2px 6px -4.2px rgba(0, 0, 0, 0.19),0px 4px 12px -6px rgba(0, 0, 0, 0.9);
  --community-item-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  --community-item-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  --component-font-weight: var(--font-medium, 550);
  --con-chbx-color: hsla(12, 62%, 45%, 1);
  --copy-code-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.09),0px 2px 4px -2px rgba(0, 0, 0, 0.06);
  --copy-code-button-radius: var(--radius-s, 4px);
  --cursor: pointer;
  --dark: var(--text-normal, var(--color-l-gray-130, hsla(31, 45%, 24%, 1)));
  --darkgray: var(--text-normal, var(--color-l-gray-130, hsla(31, 45%, 24%, 1)));
  --disabled-component-opacity: 0.3;
  --divider-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --divider-color-hover: var(--background-modifier-border-hover, color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)));
  --divider-radius: var(--radius-m, 8px);
  --divider-width-hover: 4px;
  --down-chbx-color: hsla(4, 56%, 48%, 1);
  --drag-ghost-background: var(--interactive-accent, hsl( 30, 23.23%, 53.75% ));
  --drag-ghost-text-color: var(--text-on-accent, hsla(36, 38%, 98%, 1));
  --dropdown-background: var(--interactive-normal, hsla(35, 37%, 92%, 1));
  --dropdown-background-hover: var(--interactive-hover, color-mix(in hsl, hsla(36, 38%, 98%, 1) 50%, hsla(35, 37%, 92%, 1)));
  --dropdown-height: calc(var(--font-ui-small) + var(--size-4-4) + var(--button-inset-shadow-size));
  --editor-bg-color: var(--background-primary, hsla(35, 36%, 96%, 1));
  --editor-bgpattern-color: var(--color-l-gray-60, hsla(37, 38%, 83%, 1));
  --editor-bgpattern-size: 50px 50px;
  --editor-border-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --editor-border-radius: var(--radius-l, 12px);
  --editor-border-width: 1px;
  --editor-header-icon: var(--icon-s, 15px);
  --editor-pane-margin: 10px;
  --editor-tab-icon: var(--icon-s, 15px);
  --embed-background: var(--embed-bg-color-mix, color-mix( in srgb, hsla(35, 37%, 92%, 1) 50%, hsla(35, 36%, 96%, 1) ));
  --embed-bg-color-mix: color-mix( in srgb, var(--background-primary-alt) 50%, var(--editor-bg-color) );
  --embed-border-bottom: var(--embed-border-bottom-width) var(--embed-border-bottom-style) var(--embed-border-bottom-color, 1px solid hsla(37, 38%, 83%, 1));
  --embed-border-bottom-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --embed-border-bottom-style: solid;
  --embed-border-bottom-width: 1px;
  --embed-border-end: var(--embed-border-end-width) var(--embed-border-end-style) var(--embed-border-end-color, 1px solid hsla(37, 38%, 83%, 1));
  --embed-border-end-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --embed-border-end-style: solid;
  --embed-border-end-width: 1px;
  --embed-border-radius: var(--radius-l, 12px);
  --embed-border-start: var(--embed-border-start-width) var(--embed-border-start-style) var(--embed-border-start-color, 1px solid hsla(37, 38%, 83%, 1));
  --embed-border-start-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --embed-border-start-style: solid;
  --embed-border-start-width: 1px;
  --embed-border-top: var(--embed-border-top-width) var(--embed-border-top-style) var(--embed-border-top-color, 1px solid hsla(37, 38%, 83%, 1));
  --embed-border-top-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --embed-border-top-style: solid;
  --embed-border-top-width: 1px;
  --embed-edit-btn-bg: color-mix(in srgb, var(--color-l-gray-20) 70%, transparent);
  --embed-edit-btn-bg-hover: color-mix(in srgb, var(--color-l-gray-20) 100%, transparent);
  --embed-edit-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.1);
  --embed-edit-btn-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  --embed-left-right-padding: var(--size-4-4, 16px);
  --embed-media-border-radius: var(--radius-m, 8px);
  --embed-padding: var(--size-2-3) var(--embed-left-right-padding, 6px 16px 0px) 0px;
  --embed-title-border: var(--embed-title-border-width) var(--embed-title-border-style) var(--embed-title-border-color, 1px solid hsla(37, 38%, 83%, 1));
  --embed-title-border-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --embed-title-border-style: solid;
  --embed-title-border-width: 1px;
  --embed-title-color: var(--color-l-gray-90, hsla(31, 23%, 50%, 1));
  --embed-title-font-size: var(--font-text-size, 16px);
  --embed-title-font-weight: var(--font-medium, 550);
  --embed-title-letter-spacing: normal;
  --embed-title-margin-bottom: var(--size-4-2, 8px);
  --embed-title-text-transform: none;
  --empty-state-action-btn-bg: color-mix(in srgb, var(--background-primary-alt) 50%, transparent);
  --file-header-background: var(--background-primary, hsla(35, 36%, 96%, 1));
  --file-header-background-focused: var(--background-primary, hsla(35, 36%, 96%, 1));
  --file-header-border: var(--file-header-border-width) solid var(--file-header-border-color, 1px solid hsla(37, 38%, 83%, 1));
  --file-header-border-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --file-header-border-width: 1px;
  --file-header-font: var(--font-interface, "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-title-color: var(--color-l-gray-120, hsla(36, 32%, 30%, 1));
  --file-line-width: 40rem;
  --file-max-line-width: 88%;
  --file-tab-gap: 0px;
  --flair-background: var(--interactive-normal, hsla(35, 37%, 92%, 1));
  --flair-color: var(--text-normal, hsla(31, 45%, 24%, 1));
  --flair-count-bg-color: var(--color-l-gray-40, hsla(34, 34%, 90%, 1));
  --flair-count-color: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --flair-count-padding: 2px 4px;
  --flair-count-radius: calc(var(--radius-s) + 1px);
  --font-bold: 750;
  --font-extrabold: 850;
  --font-extralight: 250;
  --font-interface-theme: "Inter";
  --font-light: 350;
  --font-medium: 550;
  --font-mermaid: var(--font-text, "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "Cascadia Code";
  --font-normal: 450;
  --font-semibold: 650;
  --font-text-theme: "Inter";
  --font-thin: 150;
  --font-ui-smallest: 11px;
  --font-weight: var(--font-normal, 450);
  --footnote-divider-color: var(--metadata-divider-color, hsla(37, 38%, 83%, 1));
  --footnote-id-color: var(--text-muted, hsla(35, 28%, 40%, 1));
  --footnote-id-color-no-occurrences: var(--text-faint, hsla(34, 29%, 60%, 1));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.45));
  --graph-arrow: var(--color-l-gray-90, hsla(31, 23%, 50%, 1));
  --graph-line: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --graph-node: var(--color-l-blue-20, hsla(202, 66%, 48%, 1));
  --graph-node-attachment: var(--color-l-green-10, hsla(148, 30%, 65%, 1));
  --graph-node-focused: var(--color-l-gray-130, hsla(31, 45%, 24%, 1));
  --graph-node-highlight-fill: var(--color-l-gray-90, hsla(31, 23%, 50%, 1));
  --graph-node-highlight-line: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --graph-node-tag: var(--color-l-red-20, hsla(4, 72%, 55%, 1));
  --graph-node-unresolved: var(--color-l-yellow-20, hsla(43, 83%, 57%, 1));
  --graph-node-unresolved-opacity: 1;
  --graph-text: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --gray: var(--text-muted, var(--color-l-gray-100, hsla(35, 28%, 40%, 1)));
  --gutter-color: color-mix(in hsl, var(--color-l-gray-60) 40%, var(--color-l-gray-70));
  --gutter-color-active: var(--color-l-gray-90, hsla(31, 23%, 50%, 1));
  --h1-bg-color: transparent;
  --h1-border-bottom-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h1-border-left-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h1-border-radius: 0px;
  --h1-border-right-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h1-border-style: solid;
  --h1-border-top-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h1-border-width: 0px;
  --h1-color: var(--color-l-gray-140, hsla(33, 54%, 17%, 1));
  --h1-text-align: left;
  --h1-text-transform: normal;
  --h1-weight: var(--font-semibold, 650);
  --h2-bg-color: transparent;
  --h2-border-bottom-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h2-border-left-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h2-border-radius: 0px;
  --h2-border-right-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h2-border-style: solid;
  --h2-border-top-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h2-border-width: 0px;
  --h2-color: var(--color-l-gray-140, hsla(33, 54%, 17%, 1));
  --h2-text-align: left;
  --h2-text-transform: normal;
  --h2-weight: var(--font-semibold, 650);
  --h3-bg-color: transparent;
  --h3-border-bottom-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h3-border-left-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h3-border-radius: 0px;
  --h3-border-right-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h3-border-style: solid;
  --h3-border-top-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h3-border-width: 0px;
  --h3-color: var(--color-l-gray-140, hsla(33, 54%, 17%, 1));
  --h3-text-align: left;
  --h3-text-transform: normal;
  --h3-weight: var(--font-semibold, 650);
  --h4-bg-color: transparent;
  --h4-border-bottom-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h4-border-left-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h4-border-radius: 0px;
  --h4-border-right-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h4-border-style: solid;
  --h4-border-top-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h4-border-width: 0px;
  --h4-color: var(--color-l-gray-140, hsla(33, 54%, 17%, 1));
  --h4-text-align: left;
  --h4-text-transform: normal;
  --h4-weight: var(--font-semibold, 650);
  --h5-bg-color: transparent;
  --h5-border-bottom-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h5-border-left-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h5-border-radius: 0px;
  --h5-border-right-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h5-border-style: solid;
  --h5-border-top-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h5-border-width: 0px;
  --h5-color: var(--color-l-gray-140, hsla(33, 54%, 17%, 1));
  --h5-text-align: left;
  --h5-text-transform: normal;
  --h5-weight: var(--font-semibold, 650);
  --h6-bg-color: transparent;
  --h6-border-bottom-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h6-border-left-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h6-border-radius: 0px;
  --h6-border-right-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h6-border-style: solid;
  --h6-border-top-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --h6-border-width: 0px;
  --h6-color: var(--color-l-gray-140, hsla(33, 54%, 17%, 1));
  --h6-text-align: left;
  --h6-text-transform: normal;
  --h6-weight: var(--font-semibold, 650);
  --header-height: 46px;
  --headerFont: var(--font-text-theme, "Inter");
  --heading-formatting: var(--text-faint, hsla(34, 29%, 60%, 1));
  --highlight: var(--text-highlight-bg, var(--color-l-alpha-yellow, hsla(44, 100%, 50%, 0.2)));
  --hr-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --hr-thickness: 1px;
  --icon-bg: transparent;
  --icon-bg-active: var(--color-l-gray-60, hsla(37, 38%, 83%, 1));
  --icon-bg-active-menu: transparent;
  --icon-bg-hover: transparent;
  --icon-bg-pressed: transparent;
  --icon-color: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --icon-color-active: var(--color-l-gray-100, hsla(35, 28%, 40%, 1));
  --icon-color-focused: var(--color-l-gray-90, hsla(31, 23%, 50%, 1));
  --icon-color-hover: var(--color-l-gray-90, hsla(31, 23%, 50%, 1));
  --icon-container-radius: 0px;
  --icon-m: 16px;
  --icon-opacity: 1;
  --icon-s: 15px;
  --icon-size: var(--ribbon-icon, 16px);
  --icon-xl: 24px;
  --icon-xs: 13px;
  --idea-chbx-color: hsla(30, 72%, 62%, 1);
  --important-chbx-color: hsla(17, 83%, 52%, 1);
  --important-chbx-icon-color: white;
  --important-chbx-radius: 100%;
  --indentation-guide-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --indentation-guide-color-active: var(--background-modifier-border-focus, color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)));
  --indentation-guide-reading-indent: -1em;
  --info-chbx-color: hsla(178, 29%, 45%, 1);
  --info-chbx-icon-color: white;
  --inline-code-bg: var(--color-l-gray-10, hsla(36, 38%, 98%, 1));
  --inline-code-color: var(--color-l-red-10, hsla(4, 59%, 64%, 1));
  --inline-code-radius: var(--radius-s, 4px);
  --inline-query-bg: color-mix(in srgb, var(--background-secondary) 20%, var(--editor-bg-color));
  --inline-query-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.06);
  --inline-title-color: var(--color-l-gray-140, hsla(33, 54%, 17%, 1));
  --inline-title-weight: var(--h1-weight, 650);
  --inprogress-chbx-border-color: color-mix(in srgb, var(--inprogress-chbx-color) 65%, var(--color-base-60));
  --inprogress-chbx-color: hsla(34, 82%, 57%, 1);
  --inprogress-chbx-color-hover: hsla(34, 82%, 64%, 1);
  --input-date-separator: var(--text-faint, hsla(34, 29%, 60%, 1));
  --input-font-weight: var(--font-normal, 450);
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, hsla(34, 29%, 60%, 1));
  --input-radius: var(--button-radius, 8px);
  --input-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.1),0px 2px 4px -1px rgba(0, 0, 0, 0.05);
  --input-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px 0px 0px calc(1px + var(--button-inset-shadow-size)) rgba(0, 0, 0, 0.09),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.6);
  --input-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.15),0px 2px 6px -1px rgba(0, 0, 0, 0.1);
  --interactive-accent: var(--color-accent-1, hsl( 30, 23.23%, 53.75% ));
  --interactive-accent-hover: var(--color-accent-2, hsl( 28, 30.59%, 59.5% ));
  --interactive-accent-hsl: var(--color-accent-hsl, 31,23%,50%);
  --interactive-hover: color-mix(in hsl, var(--color-l-gray-10) 50%, var(--interactive-normal));
  --interactive-normal: var(--color-l-gray-30, hsla(35, 37%, 92%, 1));
  --interface-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0;
  --italic-color: var(--color-l-blue-30, hsla(200, 64%, 37%, 1));
  --italic-highlight-bg: var(--color-l-alpha-blue, hsla(186, 64%, 46%, 0.2));
  --italic-highlight-color: var(--text-normal, hsla(31, 45%, 24%, 1));
  --kanban-drag-item-border: none;
  --kanban-drag-item-shadow: 0px 8.3px 22.8px -9px rgba(0, 0, 0, 0.19),0px 6.2px 10.1px -4.2px rgba(0, 0, 0, 0.22),0px 2.1px 6.8px -3.2px rgba(0, 0, 0, 0.29);
  --kanban-item-bg: var(--color-l-gray-10, hsla(36, 38%, 98%, 1));
  --kanban-item-border: none;
  --kanban-item-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.09),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.06),0px 2px 2px 0px rgba(0, 0, 0, 0.03);
  --kanban-lane-bg: color-mix(in srgb, var(--background-primary-alt) 50%, var(--editor-bg-color));
  --kanban-lane-border: 1px solid var(--color-l-gray-40);
  --kanban-lane-shadow: none;
  --kanban-new-item-bg: transparent;
  --kanban-new-item-bg-hover: var(--background-primary, hsla(35, 36%, 96%, 1));
  --kanban-new-item-color: var(--text-faint, hsla(34, 29%, 60%, 1));
  --kanban-new-item-color-hover: var(--text-muted, hsla(35, 28%, 40%, 1));
  --kanban-new-item-shadow: none;
  --kanban-new-item-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12),0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  --kanban-title-count-bg: var(--color-l-gray-60, hsla(37, 38%, 83%, 1));
  --kanban-title-count-color: var(--color-l-gray-120, hsla(36, 32%, 30%, 1));
  --kanban-title-count-radius: var(--radius-l, 12px);
  --kanban-title-text-input-color: var(--text-normal, hsla(31, 45%, 24%, 1));
  --kbd-background: var(--color-l-gray-40, hsla(34, 34%, 90%, 1));
  --kbd-color: var(--color-l-red-10, hsla(4, 59%, 64%, 1));
  --kbd-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.03),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 0px rgba(0, 0, 0, 0.06);
  --language-chbx-color: hsla(7, 59%, 64%, 1);
  --law-chbx-color: hsla(34, 34%, 52%, 1);
  --light: var(--background-primary, var(--color-l-gray-20, hsla(35, 36%, 96%, 1)));
  --lightgray: var(--background-secondary, var(--color-l-gray-40, hsla(34, 34%, 90%, 1)));
  --link-ahref-color: var(--color-l-red-20, hsla(4, 72%, 55%, 1));
  --link-ahref-color-hover: var(--color-l-red-10, hsla(4, 59%, 64%, 1));
  --link-ahref-decoration-color: color-mix(in srgb, currentColor var(--link-decoration-opacity), transparent);
  --link-ahref-decoration-color-hover: color-mix(in srgb, var(--link-ahref-color-hover) var(--link-decoration-opacity), transparent);
  --link-color: var(--color-l-yellow-30, hsla(40, 79%, 47%, 1));
  --link-color-hover: var(--color-l-yellow-20, hsla(43, 83%, 57%, 1));
  --link-decoration-color: color-mix(in srgb, var(--link-color) var(--link-decoration-opacity), transparent);
  --link-decoration-color-hover: color-mix(in srgb, var(--link-color-hover) var(--link-decoration-opacity), transparent);
  --link-decoration-opacity: 22%;
  --link-decoration-thickness: 1.5px;
  --link-external-color: var(--color-l-green-30, hsla(149, 50%, 39%, 1));
  --link-external-color-hover: var(--color-l-green-20, hsla(148, 48%, 47%, 1));
  --link-external-decoration-color: color-mix(in srgb, var(--link-external-color) var(--link-decoration-opacity), transparent);
  --link-external-decoration-color-hover: color-mix(in srgb, var(--link-external-color-hover) var(--link-decoration-opacity), transparent);
  --link-opacity-active: 0.5;
  --link-underline-offset: 2px;
  --link-unresolved-color: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --link-unresolved-color-hover: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --link-unresolved-decoration-color: color-mix(in srgb, var(--link-unresolved-color) var(--link-decoration-opacity), transparent);
  --link-unresolved-decoration-color-hover: color-mix(in srgb, var(--link-unresolved-color-hover) var(--link-decoration-opacity), transparent);
  --link-unresolved-opacity: 1;
  --link-weight: var(--font-weight, 450);
  --list-bullet-indent-reading: -1em;
  --list-indent-editing: 0.6em;
  --list-marker-color: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --list-marker-color-collapsed: var(--color-l-gray-90, hsla(31, 23%, 50%, 1));
  --list-marker-color-hover: var(--color-l-gray-100, hsla(35, 28%, 40%, 1));
  --loading-line-bg-color: var(--background-secondary, hsla(34, 34%, 90%, 1));
  --loading-line-color: var(--color-l-blue-10, hsla(197, 39%, 56%, 1));
  --loading-line-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  --location-chbox-color: hsla(0, 56%, 48%, 1);
  --menu-background: var(--background-secondary, hsla(34, 34%, 90%, 1));
  --menu-border-color: var(--background-modifier-border-hover, color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)));
  --menu-item-bg-active: var(--color-l-gray-50, hsla(36, 35%, 88%, 1));
  --menu-item-bg-hover: rgba(255, 255, 255, 0.35);
  --menu-item-color-active: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --menu-item-icon-color: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --menu-item-icon-color-active: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --menu-item-radius: calc(var(--radius-m) - 1px);
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.028),0px 3.4px 6.7px rgba(0, 0, 0, 0.042),0px 15px 30px rgba(0, 0, 0, 0.07));
  --metadata-background: color-mix(in srgb, var(--editor-bg-color) 50%, var(--background-primary-alt));
  --metadata-border-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --metadata-border-radius: var(--radius-m, 8px);
  --metadata-border-width: 1px;
  --metadata-container-padding: var(--size-4-3) var(--size-4-3, 12px 12px);
  --metadata-divider-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --metadata-divider-width: 0px;
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.45));
  --metadata-input-font: var(--font-interface, "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-shadow-active: inset 0px 0px 0px 1px var(--background-modifier-border),0px 0px 0px 1px var(--background-modifier-border);
  --metadata-input-shadow-hover: none;
  --metadata-input-text-color: var(--color-l-gray-120, hsla(36, 32%, 30%, 1));
  --metadata-key-input-color: var(--color-l-gray-100, hsla(35, 28%, 40%, 1));
  --metadata-key-input-color-active: var(--color-l-gray-120, hsla(36, 32%, 30%, 1));
  --metadata-label-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.45));
  --metadata-label-font: var(--font-interface, "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsla(35, 28%, 40%, 1));
  --metadata-label-text-color-hover: var(--text-muted, hsla(35, 28%, 40%, 1));
  --metadata-properties-title-color: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --metadata-properties-title-color-collapsed: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --metadata-properties-title-color-hover: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.5));
  --metadata-property-radius: calc(var(--radius-m) - 1px);
  --metadata-tab-background: var(--background-secondary, hsla(34, 34%, 90%, 1));
  --modal-background: var(--background-primary, hsla(35, 36%, 96%, 1));
  --modal-border-color: var(--background-modifier-border-hover, color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)));
  --modal-close-button-size: 20px;
  --modal-radius: var(--radius-xl, 16px);
  --monospace-font-feature: "calt" 1,"ss01" 1,"ss02" 1,"ss03" 1,"ss05" 1,"ss19" 1,"zero" 1;
  --nav-collapse-icon-color: var(--collapse-icon-color, hsla(34, 37%, 70%, 1));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsla(34, 29%, 60%, 1));
  --nav-file-padding-active: calc(var(--size-4-1)) var(--size-4-2) calc(var(--size-4-1) + var(--button-inset-shadow-size)) var(--size-4-6);
  --nav-file-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.09),inset 0px calc(var(--button-axis-offset)*-1) 0px var(--button-axis-offset) rgba(0, 0, 0, 0.07),0px 2px 3px 0px rgba(0, 0, 0, 0.05);
  --nav-file-tag-bg: transparent;
  --nav-file-tag-color: var(--color-l-gray-90, hsla(31, 23%, 50%, 1));
  --nav-folder-1-bg-color: color-mix(in srgb, var(--color-l-alpha-red) 60%, transparent);
  --nav-folder-1-bg-color-hover: color-mix(in srgb, var(--nav-folder-1-bg-color) 70%, transparent);
  --nav-folder-1-collapse-color: color-mix(in srgb, var(--nav-folder-1-color) 50%, transparent);
  --nav-folder-1-color: var(--color-l-red-30, hsla(4, 56%, 48%, 1));
  --nav-folder-1-indent-color: color-mix(in srgb, var(--nav-folder-1-color) 25%, transparent);
  --nav-folder-10-bg-color: color-mix(in srgb, var(--color-l-alpha-green) 60%, transparent);
  --nav-folder-10-bg-color-hover: color-mix(in srgb, var(--nav-folder-10-bg-color) 70%, transparent);
  --nav-folder-10-collapse-color: color-mix(in srgb, var(--nav-folder-10-color) 50%, transparent);
  --nav-folder-10-color: var(--color-l-green-40, hsla(153, 65%, 29%, 1));
  --nav-folder-10-indent-color: color-mix(in srgb, var(--nav-folder-10-color) 25%, transparent);
  --nav-folder-11-bg-color: color-mix(in srgb, var(--color-l-alpha-blue) 60%, transparent);
  --nav-folder-11-bg-color-hover: color-mix(in srgb, var(--nav-folder-11-bg-color) 70%, transparent);
  --nav-folder-11-collapse-color: color-mix(in srgb, var(--nav-folder-11-color) 50%, transparent);
  --nav-folder-11-color: var(--color-l-blue-30, hsla(200, 64%, 37%, 1));
  --nav-folder-11-indent-color: color-mix(in srgb, var(--nav-folder-11-color) 25%, transparent);
  --nav-folder-12-bg-color: color-mix(in srgb, var(--color-l-alpha-purple) 60%, transparent);
  --nav-folder-12-bg-color-hover: color-mix(in srgb, var(--nav-folder-12-bg-color) 70%, transparent);
  --nav-folder-12-collapse-color: color-mix(in srgb, var(--nav-folder-12-color) 50%, transparent);
  --nav-folder-12-color: var(--color-l-purple-30, hsla(275, 37%, 43%, 1));
  --nav-folder-12-indent-color: color-mix(in srgb, var(--nav-folder-12-color) 25%, transparent);
  --nav-folder-2-bg-color: color-mix(in srgb, var(--color-l-alpha-orange) 60%, transparent);
  --nav-folder-2-bg-color-hover: color-mix(in srgb, var(--nav-folder-2-bg-color) 70%, transparent);
  --nav-folder-2-collapse-color: color-mix(in srgb, var(--nav-folder-2-color) 50%, transparent);
  --nav-folder-2-color: var(--color-l-orange-30, hsla(18, 69%, 50%, 1));
  --nav-folder-2-indent-color: color-mix(in srgb, var(--nav-folder-2-color) 25%, transparent);
  --nav-folder-3-bg-color: color-mix(in srgb, var(--color-l-alpha-yellow) 60%, transparent);
  --nav-folder-3-bg-color-hover: color-mix(in srgb, var(--nav-folder-3-bg-color) 70%, transparent);
  --nav-folder-3-collapse-color: color-mix(in srgb, var(--nav-folder-3-color) 50%, transparent);
  --nav-folder-3-color: var(--color-l-yellow-40, hsla(40, 98%, 36%, 1));
  --nav-folder-3-indent-color: color-mix(in srgb, var(--nav-folder-3-color) 25%, transparent);
  --nav-folder-4-bg-color: color-mix(in srgb, var(--color-l-alpha-green) 60%, transparent);
  --nav-folder-4-bg-color-hover: color-mix(in srgb, var(--nav-folder-4-bg-color) 70%, transparent);
  --nav-folder-4-collapse-color: color-mix(in srgb, var(--nav-folder-4-color) 50%, transparent);
  --nav-folder-4-color: var(--color-l-green-40, hsla(153, 65%, 29%, 1));
  --nav-folder-4-indent-color: color-mix(in srgb, var(--nav-folder-4-color) 25%, transparent);
  --nav-folder-5-bg-color: color-mix(in srgb, var(--color-l-alpha-blue) 60%, transparent);
  --nav-folder-5-bg-color-hover: color-mix(in srgb, var(--nav-folder-5-bg-color) 70%, transparent);
  --nav-folder-5-collapse-color: color-mix(in srgb, var(--nav-folder-5-color) 50%, transparent);
  --nav-folder-5-color: var(--color-l-blue-30, hsla(200, 64%, 37%, 1));
  --nav-folder-5-indent-color: color-mix(in srgb, var(--nav-folder-5-color) 25%, transparent);
  --nav-folder-6-bg-color: color-mix(in srgb, var(--color-l-alpha-purple) 60%, transparent);
  --nav-folder-6-bg-color-hover: color-mix(in srgb, var(--nav-folder-6-bg-color) 70%, transparent);
  --nav-folder-6-collapse-color: color-mix(in srgb, var(--nav-folder-6-color) 50%, transparent);
  --nav-folder-6-color: var(--color-l-purple-30, hsla(275, 37%, 43%, 1));
  --nav-folder-6-indent-color: color-mix(in srgb, var(--nav-folder-6-color) 25%, transparent);
  --nav-folder-7-bg-color: color-mix(in srgb, var(--color-l-alpha-red) 60%, transparent);
  --nav-folder-7-bg-color-hover: color-mix(in srgb, var(--nav-folder-7-bg-color) 70%, transparent);
  --nav-folder-7-collapse-color: color-mix(in srgb, var(--nav-folder-7-color) 50%, transparent);
  --nav-folder-7-color: var(--color-l-red-30, hsla(4, 56%, 48%, 1));
  --nav-folder-7-indent-color: color-mix(in srgb, var(--nav-folder-7-color) 25%, transparent);
  --nav-folder-8-bg-color: color-mix(in srgb, var(--color-l-alpha-orange) 60%, transparent);
  --nav-folder-8-bg-color-hover: color-mix(in srgb, var(--nav-folder-8-bg-color) 70%, transparent);
  --nav-folder-8-collapse-color: color-mix(in srgb, var(--nav-folder-8-color) 50%, transparent);
  --nav-folder-8-color: var(--color-l-orange-30, hsla(18, 69%, 50%, 1));
  --nav-folder-8-indent-color: color-mix(in srgb, var(--nav-folder-8-color) 25%, transparent);
  --nav-folder-9-bg-color: color-mix(in srgb, var(--color-l-alpha-yellow) 60%, transparent);
  --nav-folder-9-bg-color-hover: color-mix(in srgb, var(--nav-folder-9-bg-color) 70%, transparent);
  --nav-folder-9-collapse-color: color-mix(in srgb, var(--nav-folder-9-color) 50%, transparent);
  --nav-folder-9-color: var(--color-l-yellow-40, hsla(40, 98%, 36%, 1));
  --nav-folder-9-indent-color: color-mix(in srgb, var(--nav-folder-9-color) 25%, transparent);
  --nav-folder-bg-color: transparent;
  --nav-folder-bg-color-hover: var(--nav-item-background-hover, rgba(255, 255, 255, 0.25));
  --nav-folder-collapse-color: var(--nav-collapse-icon-color, hsla(34, 37%, 70%, 1));
  --nav-folder-color: var(--nav-item-color, hsla(34, 30%, 37%, 1));
  --nav-heading-color: var(--color-l-gray-100, hsla(35, 28%, 40%, 1));
  --nav-heading-color-collapsed: var(--color-l-gray-100, hsla(35, 28%, 40%, 1));
  --nav-heading-color-collapsed-hover: var(--color-l-gray-100, hsla(35, 28%, 40%, 1));
  --nav-heading-color-hover: var(--color-l-gray-100, hsla(35, 28%, 40%, 1));
  --nav-heading-weight: var(--font-medium, 550);
  --nav-heading-weight-hover: var(--font-medium, 550);
  --nav-indentation-guide-color: var(--indentation-guide-color, hsla(37, 38%, 83%, 1));
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.25));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.25));
  --nav-item-background-selected-hover: hsla(197, 82%, 27%, 0.4);
  --nav-item-color: var(--color-l-gray-110, hsla(34, 30%, 37%, 1));
  --nav-item-color-active: var(--color-l-gray-110, hsla(34, 30%, 37%, 1));
  --nav-item-color-highlighted: var(--text-accent-hover, hsl( 28, 30.59%, 59.5% ));
  --nav-item-color-hover: var(--color-l-gray-110, hsla(34, 30%, 37%, 1));
  --nav-item-color-selected: var(--color-l-gray-20, hsla(35, 36%, 96%, 1));
  --nav-item-padding: calc(var(--size-4-1) + 1px) var(--size-4-2) calc(var(--size-4-1) + 1px) var(--size-4-6);
  --nav-item-parent-padding: var(--nav-item-padding, 5px 8px 5px 24px);
  --nav-item-radius: var(--radius-s, 6px);
  --nav-item-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06);
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, hsla(34, 29%, 60%, 1));
  --nav-tag-color-active: var(--text-muted, hsla(35, 28%, 40%, 1));
  --nav-tag-color-hover: var(--text-muted, hsla(35, 28%, 40%, 1));
  --nav-tag-weight: var(--font-semibold, 650);
  --new-tab-btn-radius: 2em;
  --non-alternating-color: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --non-alternating-color-hover-active: var(--color-l-gray-60, hsla(37, 38%, 83%, 1));
  --normal-highlight-bg: var(--color-l-alpha-yellow, hsla(44, 100%, 50%, 0.2));
  --normal-highlight-color: var(--text-normal, hsla(31, 45%, 24%, 1));
  --note-chbx-color: hsla(8, 51%, 53%, 1);
  --notice-color: var(--text-on-accent, hsla(36, 38%, 98%, 1));
  --notice-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12),0px 2px 9px -2.1px rgba(0, 0, 0, 0.38),0px 3px 17px -4.3px rgba(0, 0, 0, 0.12),0px 7px 30px -5.5px rgba(0, 0, 0, 0.09);
  --pcr-btn-shadow: inset 0px 0px 0px 1.5px rgba(0, 0, 0, 0.2);
  --pdf-background: var(--background-primary, hsla(35, 36%, 96%, 1));
  --pdf-page-background: var(--background-primary, hsla(35, 36%, 96%, 1));
  --pdf-sidebar-background: var(--background-primary, hsla(35, 36%, 96%, 1));
  --pill-background: rgba(255, 255, 255, 0.4);
  --pill-background-hover: var(--pill-background, rgba(255, 255, 255, 0.4));
  --pill-border-color: color-mix(in srgb, var(--background-modifier-border) 50%, transparent);
  --pill-border-color-hover: color-mix(in srgb, var(--background-modifier-border-hover) 50%, transparent);
  --pill-color: var(--color-l-gray-120, hsla(36, 32%, 30%, 1));
  --pill-color-hover: var(--color-l-gray-140, hsla(33, 54%, 17%, 1));
  --pill-color-remove: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --pill-color-remove-hover: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --pill-tag-bg-1: var(--color-l-alpha-yellow, hsla(44, 100%, 50%, 0.2));
  --pill-tag-bg-2: var(--color-l-alpha-red, hsla(350, 84%, 63%, 0.2));
  --pill-tag-bg-3: var(--color-l-alpha-blue, hsla(186, 64%, 46%, 0.2));
  --pill-tag-color-1: var(--color-l-yellow-40, hsla(40, 98%, 36%, 1));
  --pill-tag-color-2: var(--color-l-red-40, hsla(4, 72%, 35%, 1));
  --pill-tag-color-3: var(--color-l-blue-40, hsla(205, 85%, 25%, 1));
  --pill-tag-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
  --pill-tag-weight: var(--component-font-weight, 550);
  --pmr-cal-td-padding: var(--size-4-1) var(--size-4-1) calc(var(--size-4-1) + var(--button-inset-shadow-size)) var(--size-4-1, 4px 4px 6px 4px);
  --pmr-cal-td-radius: calc(var(--radius-s) + 1px);
  --popup-bg-blur: 3px;
  --pro-chbx-color: hsla(149, 34%, 44%, 1);
  --progress-background: var(--color-l-gray-40, hsla(34, 34%, 90%, 1));
  --progress-bar-outline: rgba(0, 0, 0, 0.1);
  --progress-border-width: 1px;
  --progress-color-1: var(--color-l-red-20, hsla(4, 72%, 55%, 1));
  --progress-color-2: var(--color-l-orange-20, hsla(21, 81%, 59%, 1));
  --progress-color-3: var(--color-l-yellow-20, hsla(43, 83%, 57%, 1));
  --progress-color-4: var(--color-l-green-30, hsla(149, 50%, 39%, 1));
  --progress-color-5: linear-gradient(45deg, var(--progress-gradient-1), var(--progress-gradient-2), var(--progress-gradient-3));
  --progress-gradient-1: var(--color-l-red-10, hsla(4, 59%, 64%, 1));
  --progress-gradient-2: var(--color-l-yellow-10, hsla(43, 71%, 67%, 1));
  --progress-gradient-3: var(--color-l-blue-10, hsla(197, 39%, 56%, 1));
  --progress-height: 8px;
  --progress-value-outline: rgba(0, 0, 0, 0.18);
  --progress-value-radius: var(--progress-height, 8px);
  --progress-width: 220px;
  --prompt-background: var(--background-primary, hsla(35, 36%, 96%, 1));
  --prompt-border-color: var(--background-modifier-border-focus, color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)));
  --prompt-input-background: var(--background-primary, hsla(35, 36%, 96%, 1));
  --prompt-instructions-background: color-mix(in hsl, var(--background-primary) 60%, var(--background-secondary));
  --prompt-results-background: var(--background-primary, hsla(35, 36%, 96%, 1));
  --prompt-separator-border: 1px solid var(--color-l-gray-40);
  --prompt-suggestion-background-selected: rgba(255, 255, 255, 0.35);
  --prompt-suggestion-color: var(--color-l-gray-90, hsla(31, 23%, 50%, 1));
  --prompt-suggestion-color-selected: var(--color-l-gray-130, hsla(31, 45%, 24%, 1));
  --prompt-suggestion-highlight-color: color-mix(in srgb, var(--prompt-suggestion-color) 70%, black);
  --prompt-suggestion-highlight-color-selected: var(--color-l-gray-130, hsla(31, 45%, 24%, 1));
  --prompt-suggestion-shadow-selected: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08),0px 2px 6px 0px rgba(0, 0, 0, 0.03);
  --question-chbx-color: hsla(281, 33%, 54%, 1);
  --question-chbx-icon-color: white;
  --quote-chbx-color: hsla(206, 47%, 48%, 1);
  --quote-chbx-icon-color: white;
  --radius-xs: 2px;
  --raised-background: var(--blur-background, color-mix(in srgb, hsla(35, 36%, 96%, 1) 65%, transparent) linear-gradient(hsla(35, 36%, 96%, 1), color-mix(in srgb, hsla(35, 36%, 96%, 1) 65%, transparent)));
  --resched-chbx-color: hsla(178, 18%, 59%, 1);
  --ribbon-background: var(--background-secondary, hsla(34, 34%, 90%, 1));
  --ribbon-background-collapsed: var(--background-primary, hsla(35, 36%, 96%, 1));
  --ribbon-border-width: 1px;
  --ribbon-icon: var(--icon-s, 15px);
  --ribbon-icon-spacing: var(--size-2-2, 4px);
  --ribbon-margin-bottom: var(--editor-pane-margin, 10px);
  --ribbon-radius: var(--editor-border-radius, 12px);
  --ribbon-slideout-background: var(--color-l-gray-30, hsla(35, 37%, 92%, 1));
  --ribbon-slideout-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.12),0px 5px 5px -5px rgba(0, 0, 0, 0.15);
  --sched-chbx-color: hsla(32, 10%, 68%, 1);
  --scrollbar-active-thumb-bg: var(--background-modifier-border-hover, color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)));
  --scrollbar-thumb-bg: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --search-clear-button-color: var(--icon-color, hsla(34, 29%, 60%, 1));
  --search-clear-button-color-hover: var(--background-modifier-error-hover, hsla(4, 72%, 55%, 1));
  --search-clear-button-size: 12px;
  --search-icon-color: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --search-icon-size: 14px;
  --search-result-background: var(--background-primary-alt, hsla(35, 37%, 92%, 1));
  --search-result-background-hover: color-mix(in srgb, var(--color-l-gray-10) 50%, var(--color-l-gray-20));
  --search-result-dest-file-bg: var(--color-l-gray-20, hsla(35, 36%, 96%, 1));
  --search-result-dest-file-bg-hover: color-mix(in srgb, var(--color-l-gray-20) 50%, var(--color-l-gray-10));
  --search-result-dest-file-color: var(--color-l-gray-100, hsla(35, 28%, 40%, 1));
  --search-result-dest-file-icon-color: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --search-result-dest-file-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.05);
  --search-result-dest-file-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.05),0px 2px 3px 0px rgba(0, 0, 0, 0.09);
  --secondary: var(--text-accent, var(--color-accent, hsl(31, 23%, 50%)));
  --setting-group-heading-color: var(--text-normal, hsla(31, 45%, 24%, 1));
  --setting-group-heading-weight: var(--font-semibold, 650);
  --setting-items-background: var(--background-primary-alt, hsla(35, 37%, 92%, 1));
  --setting-items-border-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --settings-nav-group-title-color: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --settings-nav-item-active-color: var(--color-l-gray-10, hsla(36, 38%, 98%, 1));
  --settings-nav-item-bg-hover: transparent;
  --settings-nav-item-padding: calc(var(--size-2-3) + 1px) var(--size-4-3) calc(var(--size-2-3) + 1px) var(--size-4-3);
  --settings-nav-item-padding-active: var(--size-2-3) var(--size-4-3) calc(var(--size-2-3) + var(--button-inset-shadow-size)) var(--size-4-5, 6px 12px 8px 20px);
  --settings-nav-item-padding-hover: calc(var(--size-2-3) + 1px) var(--size-4-3) calc(var(--size-2-3) + 1px) var(--size-4-5);
  --settings-nav-item-radius: calc(var(--radius-m) - 1px);
  --settings-nav-item-text-color: var(--color-l-gray-110, hsla(34, 30%, 37%, 1));
  --settings-nav-item-text-color-active: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --settings-nav-item-text-color-hover: var(--color-l-gray-130, hsla(31, 45%, 24%, 1));
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.091),0px 6.3px 24.7px rgba(0, 0, 0, 0.132),0px 30px 90px rgba(0, 0, 0, 0.22);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),0px 3.4px 6.7px rgba(0, 0, 0, 0.042),0px 15px 30px rgba(0, 0, 0, 0.07);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsla(35, 28%, 40%, 1));
  --shiki-code-background: var(--code-background, hsla(35, 37%, 92%, 1));
  --shiki-code-block-border-radius: var(--code-radius, 8px);
  --shiki-code-comment: var(--text-faint, hsla(34, 29%, 60%, 1));
  --shiki-code-function: var(--color-green, hsla(146, 37%, 49%, 1));
  --shiki-code-important: var(--color-orange, hsla(30, 66%, 52%, 1));
  --shiki-code-keyword: var(--color-pink, hsla(351, 44%, 61%, 1));
  --shiki-code-normal: var(--text-muted, hsla(35, 28%, 40%, 1));
  --shiki-code-property: var(--color-cyan, hsla(178, 39%, 49%, 1));
  --shiki-code-punctuation: var(--text-muted, hsla(35, 28%, 40%, 1));
  --shiki-code-string: var(--color-yellow, hsla(42, 89%, 46%, 1));
  --shiki-code-value: var(--color-purple, hsla(249, 39%, 60%, 1));
  --shiki-gutter-border-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --shiki-gutter-text-color: var(--text-faint, hsla(34, 29%, 60%, 1));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsla(35, 28%, 40%, 1));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsla(35, 28%, 40%, 1));
  --shiki-terminal-dots-color: var(--text-faint, hsla(34, 29%, 60%, 1));
  --shiki-tooltip-background: var(--background-modifier-message, hsla(35, 28%, 40%, 1));
  --sidebar-nav-icon: var(--icon-s, 15px);
  --sidebar-tab-icon: var(--icon-s, 15px);
  --slider-thumb-bg: var(--color-l-gray-10, hsla(36, 38%, 98%, 1));
  --slider-thumb-border-color: var(--background-modifier-border-hover, color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)));
  --slider-thumb-border-width: var(--border-width, 0px);
  --slider-thumb-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0pc 1px 0px 1px rgb(255, 255, 255),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.09),0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  --slider-thumb-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0pc 1px 0px 1px rgb(255, 255, 255),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.09),0px 1px 2px 0px rgba(0, 0, 0, 0.1),0px 0px 0px 6px rgba(0, 0, 0, 0.05);
  --slider-track-background: var(--color-l-gray-60, hsla(37, 38%, 83%, 1));
  --slider-track-height: 5px;
  --slider-track-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08),0px 0px 0px 1px rgba(255, 255, 255, 0.08);
  --star-chbx-color: hsla(40, 93%, 51%, 1);
  --star-chbx-icon-color: white;
  --status-bar-background: var(--background-secondary, hsla(34, 34%, 90%, 1));
  --status-bar-border-color: var(--divider-color, hsla(37, 38%, 83%, 1));
  --status-bar-floating-bg: var(--color-l-gray-30, hsla(35, 37%, 92%, 1));
  --status-bar-floating-offset: var(--size-2-2, 4px);
  --status-bar-floating-opacity: 0.5;
  --status-bar-floating-opacity-hover: 1;
  --status-bar-floating-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.12),0px 5px 5px -5px rgba(0, 0, 0, 0.15);
  --status-bar-item-bg-hover: transparent;
  --status-bar-item-clickable-bg-active: transparent;
  --status-bar-item-clickable-color-active: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --status-bar-item-color: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --status-bar-item-color-hover: var(--color-l-gray-100, hsla(35, 28%, 40%, 1));
  --status-bar-text-color: var(--text-muted, hsla(35, 28%, 40%, 1));
  --strikethrough-color: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --strikethrough-highlight-bg: var(--color-l-alpha-yellow, hsla(44, 100%, 50%, 0.2));
  --strikethrough-highlight-color: var(--strikethrough-color, hsla(34, 29%, 60%, 1));
  --style-settings-container-bg: color-mix(in srgb, var(--background-primary-alt) 50%, transparent);
  --suggestion-background: var(--background-primary, hsla(35, 36%, 96%, 1));
  --sync-avatar-color-1: var(--color-red, hsla(0, 58%, 53%, 1));
  --sync-avatar-color-2: var(--color-orange, hsla(30, 66%, 52%, 1));
  --sync-avatar-color-3: var(--color-yellow, hsla(42, 89%, 46%, 1));
  --sync-avatar-color-4: var(--color-green, hsla(146, 37%, 49%, 1));
  --sync-avatar-color-5: var(--color-cyan, hsla(178, 39%, 49%, 1));
  --sync-avatar-color-6: var(--color-blue, hsla(206, 57%, 44%, 1));
  --sync-avatar-color-7: var(--color-purple, hsla(249, 39%, 60%, 1));
  --sync-avatar-color-8: var(--color-pink, hsla(351, 44%, 61%, 1));
  --sync-icon-success: var(--color-l-green-30, hsla(149, 50%, 39%, 1));
  --sync-icon-success-active: var(--status-bar-item-clickable-color-active, hsla(34, 37%, 70%, 1));
  --sync-icon-success-hover: var(--color-l-green-20, hsla(148, 48%, 47%, 1));
  --sync-icon-working: var(--color-l-orange-10, hsla(26, 70%, 63%, 1));
  --sync-icon-working-active: var(--status-bar-item-clickable-color-active, hsla(34, 37%, 70%, 1));
  --sync-icon-working-hover: var(--color-l-orange-20, hsla(21, 81%, 59%, 1));
  --tab-active-bg: var(--background-primary, hsla(35, 36%, 96%, 1));
  --tab-active-shadow: inset 0px 1px 0px 0px rgb(255, 255, 255),inset 0px calc(var(--button-inset-shadow-size)*-1) 0px 1px rgba(0, 0, 0, 0.09),0px 1px 2px -0.1px rgba(0, 0, 0, 0.15);
  --tab-background-active: var(--background-primary, hsla(35, 36%, 96%, 1));
  --tab-bg: transparent;
  --tab-container-background: var(--background-secondary, hsla(34, 34%, 90%, 1));
  --tab-curves-display: none;
  --tab-divider-color: var(--background-modifier-border-hover, color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)));
  --tab-header-container-border-bottom: none;
  --tab-header-container-inner-margin: default;
  --tab-header-container-inner-padding: var(--button-axis-offset, 2px);
  --tab-header-container-padding: 0 var(--editor-border-radius) var(--size-4-1) var(--editor-border-radius);
  --tab-header-container-transition: padding-bottom none;
  --tab-outline-color: var(--divider-color, transparent);
  --tab-stacked-header-width: var(--header-height, 46px);
  --tab-stacked-shadow: -2.9px 0 10.5px -6.2px rgba(0, 0, 0, 0.08),-6.2px 0 3.6px -5.2px rgba(0, 0, 0, 0.04),-9.4px 0 8.4px -4.1px rgba(0, 0, 0, 0.06);
  --tab-status-radius: var(--radius-s, 4px);
  --tab-switcher-background: var(--background-secondary, hsla(34, 34%, 90%, 1));
  --tab-text-color: var(--text-faint, hsla(34, 29%, 60%, 1));
  --tab-text-color-active: var(--text-muted, hsla(35, 28%, 40%, 1));
  --tab-text-color-focused: var(--text-muted, hsla(35, 28%, 40%, 1));
  --tab-text-color-focused-active: var(--text-muted, hsla(35, 28%, 40%, 1));
  --tab-text-color-focused-active-current: var(--text-normal, hsla(31, 45%, 24%, 1));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(31, 23%, 50%));
  --tab-z-index: 1;
  --table-add-button-border-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --table-background: var(--color-l-gray-10, hsla(36, 38%, 98%, 1));
  --table-border-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --table-column-alt-background: var(--color-l-gray-30, hsla(35, 37%, 92%, 1));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl( 30, 23.23%, 53.75% ));
  --table-drag-handle-color: var(--text-faint, hsla(34, 29%, 60%, 1));
  --table-drag-handle-color-active: var(--text-on-accent, hsla(36, 38%, 98%, 1));
  --table-header-background: var(--color-l-gray-30, hsla(35, 37%, 92%, 1));
  --table-header-background-hover: var(--table-header-background, hsla(35, 37%, 92%, 1));
  --table-header-border-color: var(--table-border-color, hsla(37, 38%, 83%, 1));
  --table-header-color: var(--text-normal, hsla(31, 45%, 24%, 1));
  --table-row-alt-background: var(--table-background, hsla(36, 38%, 98%, 1));
  --table-row-alt-background-hover: var(--table-background, hsla(36, 38%, 98%, 1));
  --table-row-background-hover: var(--table-background, hsla(36, 38%, 98%, 1));
  --table-selection-border-color: var(--interactive-accent, hsl( 30, 23.23%, 53.75% ));
  --tag-border-width: 1px;
  --tag-color: var(--color-l-blue-30, hsla(200, 64%, 37%, 1));
  --tag-color-hover: var(--color-l-blue-20, hsla(202, 66%, 48%, 1));
  --tag-padding-x: 0.6em;
  --tag-padding-y: 0.15em;
  --tag-radius: 1em;
  --tag-shadow: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.1);
  --tag-shadow-active: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.1);
  --tag-shadow-hover: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.1),0px 0px 0px 3px rgba(0, 0, 0, 0.03);
  --telephone-chbx-color: hsla(148, 47%, 47%, 1);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl( 28, 30.59%, 59.5% )));
  --text-accent: var(--color-accent, hsl(31, 23%, 50%));
  --text-accent-hover: var(--color-accent-2, hsl( 28, 30.59%, 59.5% ));
  --text-error: var(--color-l-red-30, hsla(4, 56%, 48%, 1));
  --text-faint: var(--color-l-gray-80, hsla(34, 29%, 60%, 1));
  --text-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0;
  --text-highlight-bg: var(--color-l-alpha-yellow, hsla(44, 100%, 50%, 0.2));
  --text-highlight-bg-rgb: var(--color-yellow-rgb, 248,197,46);
  --text-input-bg-active: color-mix(in hsl, var(--background-modifier-form-field) 40%, var(--color-l-gray-10));
  --text-input-border-color: var(--color-l-gray-60, hsla(37, 38%, 83%, 1));
  --text-input-color: var(--color-l-gray-130, hsla(31, 45%, 24%, 1));
  --text-input-color-focused: var(--color-l-gray-130, hsla(31, 45%, 24%, 1));
  --text-input-shadow-active: inset 0px 1px 0px 0px rgb(255, 255, 255),inset 0px -1px 0px 0px rgba(0, 0, 0, 0.04),0px 1px 6px 0px rgba(0, 0, 0, 0.07);
  --text-muted: var(--color-l-gray-100, hsla(35, 28%, 40%, 1));
  --text-normal: var(--color-l-gray-130, hsla(31, 45%, 24%, 1));
  --text-on-accent: var(--color-l-gray-10, hsla(36, 38%, 98%, 1));
  --text-on-accent-inverted: var(--color-l-gray-140, hsla(33, 54%, 17%, 1));
  --text-selection: var(--color-l-alpha-gray, hsla(34, 37%, 70%, 0.15));
  --text-selection-theme-bg: color-mix(in srgb, var(--color-l-gray-70) 30%, transparent);
  --text-selection-theme-text-color: color-mix(in srgb, currentColor 70%, black);
  --text-success: var(--color-l-green-30, hsla(149, 50%, 39%, 1));
  --text-warning: var(--color-l-orange-30, hsla(18, 69%, 50%, 1));
  --textHighlight: var(--text-highlight-bg, var(--color-l-alpha-yellow, hsla(44, 100%, 50%, 0.2)));
  --titleFont: var(--font-text-theme, "Inter");
  --titlebar-background: var(--background-secondary, hsla(34, 34%, 90%, 1));
  --titlebar-background-focused: var(--background-secondary, hsla(34, 34%, 90%, 1));
  --titlebar-border-color: var(--background-modifier-border, hsla(37, 38%, 83%, 1));
  --titlebar-text-color: var(--color-l-gray-60, hsla(37, 38%, 83%, 1));
  --titlebar-text-color-focused: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --titlebar-text-weight: var(--font-normal, 450);
  --toggle-bg: color-mix(in hsl, var(--color-l-gray-60) 80%, var(--color-l-gray-70));
  --toggle-bg-enabled: var(--color-l-green-30, hsla(149, 50%, 39%, 1));
  --toggle-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.09),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06),inset 0 0 1px rgba(0, 0, 0, 0.28);
  --toggle-shadow-focus: inset 0 6px 20px rgba(0, 0, 0, 0.18),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06),inset 0 0 1px rgba(0, 0, 0, 0.32),0px 0px 0px 5px rgba(0, 0, 0, 0.05);
  --toggle-shadow-hover: inset 0 6px 20px rgba(0, 0, 0, 0.18),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06),inset 0 0 1px rgba(0, 0, 0, 0.32);
  --toggle-thumb-color: var(--color-l-gray-10, hsla(36, 38%, 98%, 1));
  --toggle-thumb-shadow: inset 0px 1px 0px 1px rgb(255, 255, 255),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),0 2px 2px rgba(0, 0, 0, 0.2);
  --tooltip-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.12),0px 2px 4px -1.4px rgba(0, 0, 0, 0.3),0px 3px 10px -1.7px rgba(0, 0, 0, 0.14);
  --traffic-lights-offset-x: var(--header-height, 46px);
  --traffic-lights-offset-y: var(--header-height, 46px);
  --underline-color: var(--text-normal, hsla(31, 45%, 24%, 1));
  --underline-decoration-color: color-mix(in srgb, currentColor var(--underline-decoration-opacity), transparent);
  --underline-decoration-opacity: 22%;
  --up-chbx-color: hsla(146, 37%, 49%, 1);
  --vault-name-background: var(--color-l-gray-30, hsla(35, 37%, 92%, 1));
  --vault-name-border: var(--vault-name-border-width) solid var(--background-modifier-border, 1px solid hsla(37, 38%, 83%, 1));
  --vault-name-border-width: 1px;
  --vault-name-color: var(--color-l-gray-100, hsla(35, 28%, 40%, 1));
  --vault-name-color-hover: var(--color-l-gray-120, hsla(36, 32%, 30%, 1));
  --vault-profile-color: var(--vault-name-color, hsla(35, 28%, 40%, 1));
  --vault-profile-color-hover: var(--vault-profile-color, hsla(35, 28%, 40%, 1));
  --vault-profile-font-weight: var(--font-semibold, 650);
  --yaml-atom-color: var(--color-l-blue-10, hsla(197, 39%, 56%, 1));
  --yaml-base-color: var(--color-l-red-10, hsla(4, 59%, 64%, 1));
  --yaml-def-meta-color: var(--color-l-gray-70, hsla(34, 37%, 70%, 1));
  --yaml-keyword-color: var(--color-l-yellow-30, hsla(40, 79%, 47%, 1));
  --yaml-number-color: var(--color-l-red-10, hsla(4, 59%, 64%, 1));
  --yaml-string-color: var(--color-l-yellow-30, hsla(40, 79%, 47%, 1));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsla(34, 34%, 90%, 1));
  background-color: var(--tab-container-background, rgb(238, 231, 221));
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(238, 231, 221));
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(238, 231, 221));
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  --divider-vertical-height: calc(100% - var(--header-height) - var(--editor-pane-margin) - var(--editor-border-radius)*2);
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsla(34, 34%, 90%, 1));
  --divider-vertical-height: calc(100% - var(--header-height) - var(--editor-pane-margin) - var(--editor-border-radius)*2);
  background-color: var(--tab-container-background, rgb(238, 231, 221));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(89, 62, 34);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(191, 63, 54));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 63, 54) none 0px;
  text-decoration-color: rgb(191, 63, 54);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(34, 114, 155));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(34, 114, 155) none 0px;
  text-decoration-color: rgb(34, 114, 155);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(34, 114, 155));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(34, 114, 155) none 0px;
  text-decoration-color: rgb(34, 114, 155);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--bold-italic-color, rgb(67, 46, 20));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--bold-italic-weight, 750);
  outline: rgb(67, 46, 20) none 0px;
  text-decoration-color: rgb(67, 46, 20);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(191, 63, 54));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 63, 54) none 0px;
  text-decoration-color: rgb(191, 63, 54);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--normal-highlight-bg, rgba(255, 187, 0, 0.2));
  color: var(--normal-highlight-color, rgb(89, 62, 34));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(89, 62, 34) none 0px;
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body del {
  color: var(--strikethrough-color, rgb(183, 157, 123));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(183, 157, 123) none 0px;
  text-decoration-color: rgb(183, 157, 123);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(252, 250, 248);
  border-color: rgb(228, 215, 195);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(50, 149, 98));
  border-color: rgba(0, 0, 0, 0.15);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(131, 107, 73));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(131, 107, 73) none 0px;
  text-decoration-color: rgb(131, 107, 73);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  --font-weight: var(--link-weight, 450);
  color: var(--link-external-color, rgb(50, 149, 98));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 450);
  outline: rgb(50, 149, 98) none 0px;
  text-decoration: underline 1.5px color(srgb 0.195 0.585 0.3835 / 0.22);
  text-decoration-color: var(--link-external-decoration-color, color(srgb 0.195 0.585 0.3835 / 0.22));
  text-decoration-thickness: var(--link-decoration-thickness, 1.5px);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  --font-weight: var(--link-weight, 450);
  color: var(--link-color, rgb(215, 151, 25));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 450);
  outline: rgb(215, 151, 25) none 0px;
  text-decoration: underline 1.5px color(srgb 0.8413 0.593767 0.0987 / 0.22);
  text-decoration-color: var(--link-decoration-color, color(srgb 0.8413 0.593767 0.0987 / 0.22));
  text-decoration-thickness: var(--link-decoration-thickness, 1.5px);
}

html[saved-theme="light"] body a.internal-link.broken {
  --font-weight: var(--link-weight, 450);
  color: var(--link-unresolved-color, rgb(183, 157, 123));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 450);
  outline: rgb(183, 157, 123) none 0px;
  text-decoration: underline 1.5px color(srgb 0.716 0.615467 0.484 / 0.22);
  text-decoration-color: var(--link-unresolved-decoration-color, color(srgb 0.716 0.615467 0.484 / 0.22));
  text-decoration-thickness: var(--link-decoration-thickness, 1.5px);
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  color: rgb(89, 62, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  color: rgb(89, 62, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

html[saved-theme="light"] body ol > li {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body ul > li {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  --font-weight: var(--link-weight, 450);
  color: var(--text-faint, rgb(183, 157, 123));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(252, 250, 248));
  color: var(--blockquote-color, rgb(89, 62, 34));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body table {
  color: rgb(89, 62, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgb(252, 250, 248));
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgb(252, 250, 248));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(228, 215, 195);
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  color: var(--table-text-color, rgb(89, 62, 34));
  font-weight: 450;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(228, 215, 195);
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  color: var(--table-header-color, rgb(89, 62, 34));
  font-weight: var(--table-header-weight, 650);
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgb(242, 236, 227));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(252, 250, 248));
  border-bottom-color: rgb(228, 215, 195);
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  color: var(--inline-code-color, rgb(217, 116, 109));
  font-family: var(--font-monospace, "??", "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(242, 236, 227));
  border-bottom-color: rgb(228, 215, 195);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(89, 62, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(89, 62, 34);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, hsla(35, 37%, 92%, 1));
  border-bottom-color: rgb(89, 62, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(67, 46, 20);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(67, 46, 20);
  border-radius: 8px;
  border-right-color: rgb(67, 46, 20);
  border-top-color: rgb(67, 46, 20);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(89, 62, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 62, 34);
  border-radius: 8px;
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(242, 236, 227));
  border-bottom-color: rgb(131, 107, 73);
  border-left-color: rgb(131, 107, 73);
  border-right-color: rgb(131, 107, 73);
  border-top-color: rgb(131, 107, 73);
  color: var(--text-muted, rgb(131, 107, 73));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(89, 62, 34);
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .transclude {
  background-color: var(--embed-background, color(srgb 0.962 0.943667 0.918));
  border-bottom-color: rgb(228, 215, 195);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(228, 215, 195);
  border-left-width: 1px;
  border-radius: 12px;
  border-right-color: rgb(228, 215, 195);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(228, 215, 195);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--embed-background, color(srgb 0.962 0.943667 0.918));
  border-bottom-color: rgb(89, 62, 34);
  border-bottom-style: solid;
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-right-style: solid;
  border-top-color: rgb(89, 62, 34);
  border-top-style: solid;
  color: rgb(89, 62, 34);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(228, 215, 195);
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(183, 157, 123);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(183, 157, 123);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(183, 157, 123);
  text-decoration: line-through;
  text-decoration-color: rgb(183, 157, 123);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(182, 174, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' viewBox='0 0 24 24' class='humbleicons hi-exclamation'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M13.253 5.98L12 13.5l-1.253-7.52a1.27 1.27 0 112.506 0z'/%3E%3Ccircle xmlns='http://www.w3.org/2000/svg' cx='12' cy='19' r='1' stroke='currentColor' stroke-width='2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' viewBox='0 0 24 24' class='humbleicons hi-exclamation'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M13.253 5.98L12 13.5l-1.253-7.52a1.27 1.27 0 112.506 0z'/%3E%3Ccircle xmlns='http://www.w3.org/2000/svg' cx='12' cy='19' r='1' stroke='currentColor' stroke-width='2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg height='100%25' viewBox='0 0 32 32' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m13.774 26.028a2.06 2.06 1080 1 0 4.12 0 2.06 2.06 1080 1 0 -4.12 0zm5.69-7.776c2.898-1.596 4.37-3.91 4.37-6.876 0-5.094-4.018-7.376-8-7.376-3.878 0-8 2.818-8 8.042 0 1.104.894 2 2 2s2-.896 2-2c0-2.778 2.074-4.042 4-4.042 1.494 0 4 .438 4 3.376 0 1.042-.274 2.258-2.298 3.374-1.376.754-3.702 2.712-3.702 5.25 0 1.104.894 2 2 2s2-.896 2-2c0-.372.79-1.286 1.63-1.748z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg height='100%25' viewBox='0 0 32 32' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m13.774 26.028a2.06 2.06 1080 1 0 4.12 0 2.06 2.06 1080 1 0 -4.12 0zm5.69-7.776c2.898-1.596 4.37-3.91 4.37-6.876 0-5.094-4.018-7.376-8-7.376-3.878 0-8 2.818-8 8.042 0 1.104.894 2 2 2s2-.896 2-2c0-2.778 2.074-4.042 4-4.042 1.494 0 4 .438 4 3.376 0 1.042-.274 2.258-2.298 3.374-1.376.754-3.702 2.712-3.702 5.25 0 1.104.894 2 2 2s2-.896 2-2c0-.372.79-1.286 1.63-1.748z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2220\\%22 height=\\%2220\\%22 preserveAspectRatio=\\%22xMidYMid meet\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22white\\%22 d=\\%22M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2220\\%22 height=\\%2220\\%22 preserveAspectRatio=\\%22xMidYMid meet\\%22 viewBox=\\%220 0 24 24\\%22%3E%3Cpath fill=\\%22white\\%22 d=\\%22M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-star'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-star'%3E%3Cpolygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(182, 174, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(132, 169, 168);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m15.75 3.25h-7.5a2.75 2.75 0 0 0 -2.75 2.75v14a.75.75 0 0 0 1.18.62l5.32-3.71 5.32 3.71a.75.75 0 0 0 .43.13.85.85 0 0 0 .35-.08.77.77 0 0 0 .4-.67v-14a2.75 2.75 0 0 0 -2.75-2.75z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m15.75 3.25h-7.5a2.75 2.75 0 0 0 -2.75 2.75v14a.75.75 0 0 0 1.18.62l5.32-3.71 5.32 3.71a.75.75 0 0 0 .43.13.85.85 0 0 0 .35-.08.77.77 0 0 0 .4-.67v-14a2.75 2.75 0 0 0 -2.75-2.75z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 125, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'%3E%3Cpath fill='currentColor' d='M3.008 6.684H1.003a.99.99 0 0 0-.71.301A1.043 1.043 0 0 0 0 7.713v8.23c0 .545.211 1.069.587 1.454A1.98 1.98 0 0 0 2.005 18a1.98 1.98 0 0 0 1.418-.603c.376-.385.587-.909.587-1.454v-8.23c0-.273-.105-.535-.293-.728a.99.99 0 0 0-.71-.301Zm12.987 0H12.03l1.562-4.63a1.868 1.868 0 0 0-.268-1.211 1.79 1.79 0 0 0-.96-.757 1.74 1.74 0 0 0-1.21.048 1.8 1.8 0 0 0-.902.83 25.486 25.486 0 0 1-4.238 5.514v9.862h.115c2.114.6 4.913 1.66 7.505 1.66 1.403 0 1.596-.541 1.885-1.355l2.36-7.201a2.109 2.109 0 0 0-.243-1.883 2.022 2.022 0 0 0-.717-.645 1.964 1.964 0 0 0-.925-.232Z'/%3E%3C/svg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'%3E%3Cpath fill='currentColor' d='M3.008 6.684H1.003a.99.99 0 0 0-.71.301A1.043 1.043 0 0 0 0 7.713v8.23c0 .545.211 1.069.587 1.454A1.98 1.98 0 0 0 2.005 18a1.98 1.98 0 0 0 1.418-.603c.376-.385.587-.909.587-1.454v-8.23c0-.273-.105-.535-.293-.728a.99.99 0 0 0-.71-.301Zm12.987 0H12.03l1.562-4.63a1.868 1.868 0 0 0-.268-1.211 1.79 1.79 0 0 0-.96-.757 1.74 1.74 0 0 0-1.21.048 1.8 1.8 0 0 0-.902.83 25.486 25.486 0 0 1-4.238 5.514v9.862h.115c2.114.6 4.913 1.66 7.505 1.66 1.403 0 1.596-.541 1.885-1.355l2.36-7.201a2.109 2.109 0 0 0-.243-1.883 2.022 2.022 0 0 0-.717-.645 1.964 1.964 0 0 0-.925-.232Z'/%3E%3C/svg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(186, 72, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-trending-down'%3E%3Cpolyline points='22 17 13.5 8.5 8.5 13.5 2 7'/%3E%3Cpolyline points='16 17 22 17 22 11'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-trending-down'%3E%3Cpolyline points='22 17 13.5 8.5 8.5 13.5 2 7'/%3E%3Cpolyline points='16 17 22 17 22 11'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 63, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg fill='none' height='100%25' viewBox='0 0 20 20' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m12.3945 2.55279c-.1283-.25655-.3605-.44566-.6377-.51928-.2773-.07363-.5728-.02466-.8114.13444-.3459.23063-.614.55813-.8225.87996-.21435.33063-.40304.71357-.5699 1.11575-.33361.80407-.61389 1.76829-.83925 2.73412-.28623 1.2267-.49807 2.51909-.61371 3.57982-.48419-.3264-.76513-.69233-.94523-1.06656-.32752-.68058-.39745-1.53384-.39745-2.65365 0-.40447-.24364-.7691-.61732-.92388-.37367-.15479-.80379-.06923-1.08979.21677-1.36664 1.36664-2.05025 3.15985-2.05025 4.94972 0 1.7899.68361 3.5831 2.05025 4.9498 2.73367 2.7336 7.16585 2.7336 9.89945 0 1.3667-1.3667 2.0503-3.1599 2.0503-4.9498 0-1.78987-.6836-3.58308-2.0503-4.94972-.5913-.59139-.9801-.98575-1.3476-1.46748-.3631-.47592-.724-1.06289-1.2076-2.03001zm-.2732 12.56851c-1.1716 1.1716-3.07105 1.1716-4.24262 0-.58579-.5858-.87868-1.3535-.87868-2.1213 0 0 .87868.5 2.50005.5 0-1 .49995-4 1.24995-4.5.5 1 .7855 1.2929 1.3713 1.8787s.8787 1.3535.8787 2.1213-.2929 1.5355-.8787 2.1213z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg fill='none' height='100%25' viewBox='0 0 20 20' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m12.3945 2.55279c-.1283-.25655-.3605-.44566-.6377-.51928-.2773-.07363-.5728-.02466-.8114.13444-.3459.23063-.614.55813-.8225.87996-.21435.33063-.40304.71357-.5699 1.11575-.33361.80407-.61389 1.76829-.83925 2.73412-.28623 1.2267-.49807 2.51909-.61371 3.57982-.48419-.3264-.76513-.69233-.94523-1.06656-.32752-.68058-.39745-1.53384-.39745-2.65365 0-.40447-.24364-.7691-.61732-.92388-.37367-.15479-.80379-.06923-1.08979.21677-1.36664 1.36664-2.05025 3.15985-2.05025 4.94972 0 1.7899.68361 3.5831 2.05025 4.9498 2.73367 2.7336 7.16585 2.7336 9.89945 0 1.3667-1.3667 2.0503-3.1599 2.0503-4.9498 0-1.78987-.6836-3.58308-2.0503-4.94972-.5913-.59139-.9801-.98575-1.3476-1.46748-.3631-.47592-.724-1.06289-1.2076-2.03001zm-.2732 12.56851c-1.1716 1.1716-3.07105 1.1716-4.24262 0-.58579-.5858-.87868-1.3535-.87868-2.1213 0 0 .87868.5 2.50005.5 0-1 .49995-4 1.24995-4.5.5 1 .7855 1.2929 1.3713 1.8787s.8787 1.3535.8787 2.1213-.2929 1.5355-.8787 2.1213z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2220\\%22 height=\\%2220\\%22 preserveAspectRatio=\\%22xMidYMid meet\\%22 viewBox=\\%220 0 512 512\\%22%3E%3Cpath fill=\\%22none\\%22 stroke=\\%22white\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22 stroke-width=\\%2240\\%22 d=\\%22M196 220h64v172\\%22%2F%3E%3Cpath fill=\\%22none\\%22 stroke=\\%22white\\%22 stroke-linecap=\\%22round\\%22 stroke-miterlimit=\\%2210\\%22 stroke-width=\\%2240\\%22 d=\\%22M187 396h138\\%22%2F%3E%3Cpath fill=\\%22white\\%22 d=\\%22M256 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2220\\%22 height=\\%2220\\%22 preserveAspectRatio=\\%22xMidYMid meet\\%22 viewBox=\\%220 0 512 512\\%22%3E%3Cpath fill=\\%22none\\%22 stroke=\\%22white\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22 stroke-width=\\%2240\\%22 d=\\%22M196 220h64v172\\%22%2F%3E%3Cpath fill=\\%22none\\%22 stroke=\\%22white\\%22 stroke-linecap=\\%22round\\%22 stroke-miterlimit=\\%2210\\%22 stroke-width=\\%2240\\%22 d=\\%22M187 396h138\\%22%2F%3E%3Cpath fill=\\%22white\\%22 d=\\%22M256 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M10.922,7.113A5,5,0,0,1,14,16.578V20a2,2,0,0,1-4,0V16.578a5,5,0,0,1,.922-9.465ZM13,4V3a1,1,0,0,0-2,0V4a1,1,0,0,0,2,0Zm5.707,1.293a1,1,0,0,0-1.414,0L16.586,6A1,1,0,1,0,18,7.414l.707-.707A1,1,0,0,0,18.707,5.293ZM5.293,18.707a1,1,0,0,0,1.414,0L7.414,18A1,1,0,0,0,6,16.586l-.707.707A1,1,0,0,0,5.293,18.707ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM4,11H3a1,1,0,0,0,0,2H4a1,1,0,0,0,0-2Zm14,5.586A1,1,0,0,0,16.586,18l.707.707a1,1,0,0,0,1.414-1.414ZM6.707,5.293A1,1,0,0,0,5.293,6.707L6,7.414A1,1,0,0,0,7.414,6Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M10.922,7.113A5,5,0,0,1,14,16.578V20a2,2,0,0,1-4,0V16.578a5,5,0,0,1,.922-9.465ZM13,4V3a1,1,0,0,0-2,0V4a1,1,0,0,0,2,0Zm5.707,1.293a1,1,0,0,0-1.414,0L16.586,6A1,1,0,1,0,18,7.414l.707-.707A1,1,0,0,0,18.707,5.293ZM5.293,18.707a1,1,0,0,0,1.414,0L7.414,18A1,1,0,0,0,6,16.586l-.707.707A1,1,0,0,0,5.293,18.707ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM4,11H3a1,1,0,0,0,0,2H4a1,1,0,0,0,0-2Zm14,5.586A1,1,0,0,0,16.586,18l.707.707a1,1,0,0,0,1.414-1.414ZM6.707,5.293A1,1,0,0,0,5.293,6.707L6,7.414A1,1,0,0,0,7.414,6Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 158, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg fill='none' height='100%25' viewBox='0 0 20 20' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m5.05025 4.05025c2.73367-2.73367 7.16585-2.73367 9.89945 0 2.7337 2.73367 2.7337 7.16585 0 9.89945l-4.9497 4.9498-4.94975-4.9498c-2.73367-2.7336-2.73367-7.16578 0-9.89945zm4.94975 6.94975c1.1046 0 2-.8954 2-2 0-1.10457-.8954-2-2-2-1.10457 0-2 .89543-2 2 0 1.1046.89543 2 2 2z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg fill='none' height='100%25' viewBox='0 0 20 20' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m5.05025 4.05025c2.73367-2.73367 7.16585-2.73367 9.89945 0 2.7337 2.73367 2.7337 7.16585 0 9.89945l-4.9497 4.9498-4.94975-4.9498c-2.73367-2.7336-2.73367-7.16578 0-9.89945zm4.94975 6.94975c1.1046 0 2-.8954 2-2 0-1.10457-.8954-2-2-2-1.10457 0-2 .89543-2 2 0 1.1046.89543 2 2 2z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 54, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-language' width='100%25' height='100%25' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4' /%3E%3Cpath d='M11 19l4 -9l4 9m-.9 -2h-6.2' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-language' width='100%25' height='100%25' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4' /%3E%3Cpath d='M11 19l4 -9l4 9m-.9 -2h-6.2' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(217, 122, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-pin'%3E%3Cpath d='M12 17v5'/%3E%3Cpath d='M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-pin'%3E%3Cpath d='M12 17v5'/%3E%3Cpath d='M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 90, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'%3E%3Cpath fill='currentColor' d='M3.008 6.684H1.003a.99.99 0 0 0-.71.301A1.043 1.043 0 0 0 0 7.713v8.23c0 .545.211 1.069.587 1.454A1.98 1.98 0 0 0 2.005 18a1.98 1.98 0 0 0 1.418-.603c.376-.385.587-.909.587-1.454v-8.23c0-.273-.105-.535-.293-.728a.99.99 0 0 0-.71-.301Zm12.987 0H12.03l1.562-4.63a1.868 1.868 0 0 0-.268-1.211 1.79 1.79 0 0 0-.96-.757 1.74 1.74 0 0 0-1.21.048 1.8 1.8 0 0 0-.902.83 25.486 25.486 0 0 1-4.238 5.514v9.862h.115c2.114.6 4.913 1.66 7.505 1.66 1.403 0 1.596-.541 1.885-1.355l2.36-7.201a2.109 2.109 0 0 0-.243-1.883 2.022 2.022 0 0 0-.717-.645 1.964 1.964 0 0 0-.925-.232Z'/%3E%3C/svg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'%3E%3Cpath fill='currentColor' d='M3.008 6.684H1.003a.99.99 0 0 0-.71.301A1.043 1.043 0 0 0 0 7.713v8.23c0 .545.211 1.069.587 1.454A1.98 1.98 0 0 0 2.005 18a1.98 1.98 0 0 0 1.418-.603c.376-.385.587-.909.587-1.454v-8.23c0-.273-.105-.535-.293-.728a.99.99 0 0 0-.71-.301Zm12.987 0H12.03l1.562-4.63a1.868 1.868 0 0 0-.268-1.211 1.79 1.79 0 0 0-.96-.757 1.74 1.74 0 0 0-1.21.048 1.8 1.8 0 0 0-.902.83 25.486 25.486 0 0 1-4.238 5.514v9.862h.115c2.114.6 4.913 1.66 7.505 1.66 1.403 0 1.596-.541 1.885-1.355l2.36-7.201a2.109 2.109 0 0 0-.243-1.883 2.022 2.022 0 0 0-.717-.645 1.964 1.964 0 0 0-.925-.232Z'/%3E%3C/svg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 150, 111);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M21.9,11.553l-3-6a.846.846,0,0,0-.164-.225A.987.987,0,0,0,18,5H13V3a1,1,0,0,0-2,0V5H6a.987.987,0,0,0-.731.328.846.846,0,0,0-.164.225l-3,6a.982.982,0,0,0-.1.447H2a4,4,0,0,0,8,0H9.99a.982.982,0,0,0-.1-.447L7.618,7H11V20H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2H13V7h3.382l-2.277,4.553a.982.982,0,0,0-.1.447H14a4,4,0,0,0,8,0h-.01A.982.982,0,0,0,21.9,11.553ZM7.882,12H4.118L6,8.236Zm8.236,0L18,8.236,19.882,12Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M21.9,11.553l-3-6a.846.846,0,0,0-.164-.225A.987.987,0,0,0,18,5H13V3a1,1,0,0,0-2,0V5H6a.987.987,0,0,0-.731.328.846.846,0,0,0-.164.225l-3,6a.982.982,0,0,0-.1.447H2a4,4,0,0,0,8,0H9.99a.982.982,0,0,0-.1-.447L7.618,7H11V20H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2H13V7h3.382l-2.277,4.553a.982.982,0,0,0-.1.447H14a4,4,0,0,0,8,0h-.01A.982.982,0,0,0,21.9,11.553ZM7.882,12H4.118L6,8.236Zm8.236,0L18,8.236,19.882,12Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(174, 138, 91);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg fill='none' height='100%25' viewBox='0 0 32 32' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m22.7875 20.56c-.04-2.6-1.91-6.46-6.89-6.46-2.85 0-3.24-1.74-3.27-2.39.03-.81.4-2.69 3.23-2.69 2.94 0 3.28 2.07 3.31 2.71.03.99.88 1.84 1.85 1.75 1-.02 1.79-.85 1.76-1.85-.05-2.17-1.49-5.24-5.1-6.03l.03-1.77c.01-1-.79-1.82-1.79-1.83-.01 0-.01 0-.02 0-.99 0-1.8.8-1.81 1.79l-.02 1.8c-3.64.77-5.04 3.88-5.06 6.11.04 2.42 1.91 6.02 6.89 6.02 2.81 0 3.21 2.04 3.27 2.8-.08.49-.54 2.28-3.27 2.28-2.77 0-3.21-1.86-3.28-2.41-.09-1-.95-1.72-1.97-1.64-1 .09-1.73.97-1.64 1.96.15 1.71 1.44 4.75 5.07 5.52v2.07c0 1 .81 1.81 1.81 1.81s1.82-.81 1.82-1.81v-2.07c3.63-.76 4.92-3.78 5.07-5.48l.01-.1z' fill='currentColor'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg fill='none' height='100%25' viewBox='0 0 32 32' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m22.7875 20.56c-.04-2.6-1.91-6.46-6.89-6.46-2.85 0-3.24-1.74-3.27-2.39.03-.81.4-2.69 3.23-2.69 2.94 0 3.28 2.07 3.31 2.71.03.99.88 1.84 1.85 1.75 1-.02 1.79-.85 1.76-1.85-.05-2.17-1.49-5.24-5.1-6.03l.03-1.77c.01-1-.79-1.82-1.79-1.83-.01 0-.01 0-.02 0-.99 0-1.8.8-1.81 1.79l-.02 1.8c-3.64.77-5.04 3.88-5.06 6.11.04 2.42 1.91 6.02 6.89 6.02 2.81 0 3.21 2.04 3.27 2.8-.08.49-.54 2.28-3.27 2.28-2.77 0-3.21-1.86-3.28-2.41-.09-1-.95-1.72-1.97-1.64-1 .09-1.73.97-1.64 1.96.15 1.71 1.44 4.75 5.07 5.52v2.07c0 1 .81 1.81 1.81 1.81s1.82-.81 1.82-1.81v-2.07c3.63-.76 4.92-3.78 5.07-5.48l.01-.1z' fill='currentColor'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm11-5a1 1 0 10-2 0v3.764a3 3 0 001.658 2.683l2.895 1.447a1 1 0 10.894-1.788l-2.894-1.448a1 1 0 01-.553-.894V7z' fill='currentColor'/%3E%3C/svg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm11-5a1 1 0 10-2 0v3.764a3 3 0 001.658 2.683l2.895 1.447a1 1 0 10.894-1.788l-2.894-1.448a1 1 0 01-.553-.894V7z' fill='currentColor'/%3E%3C/svg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(76, 125, 174);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m497.39 361.8-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6a370.66 370.66 0 0 1 -177.19-177.19l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112a24.16 24.16 0 0 0 -27.5-13.9l-104 24a24 24 0 0 0 -18.6 23.39c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0 -14.01-27.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m497.39 361.8-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6a370.66 370.66 0 0 1 -177.19-177.19l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112a24.16 24.16 0 0 0 -27.5-13.9l-104 24a24 24 0 0 0 -18.6 23.39c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0 -14.01-27.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 176, 116);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-trending-up'%3E%3Cpolyline points='22 7 13.5 15.5 8.5 10.5 2 17'/%3E%3Cpolyline points='16 7 22 7 22 13'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-trending-up'%3E%3Cpolyline points='22 7 13.5 15.5 8.5 10.5 2 17'/%3E%3Cpolyline points='16 7 22 7 22 13'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(79, 171, 119);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg height='32' viewBox='0 0 32 32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m26 7h-2v-1a2.0023 2.0023 0 0 0 -2-2h-12a2.0023 2.0023 0 0 0 -2 2v1h-2a2.0023 2.0023 0 0 0 -2 2v3a4.0045 4.0045 0 0 0 4 4h.322a8.1689 8.1689 0 0 0 6.678 5.9341v4.0659h-5v2h12v-2h-5v-4.0689a7.9661 7.9661 0 0 0 6.74-5.9311h.26a4.0045 4.0045 0 0 0 4-4v-3a2.0023 2.0023 0 0 0 -2-2zm-18 7a2.0023 2.0023 0 0 1 -2-2v-3h2zm18-2a2.0023 2.0023 0 0 1 -2 2v-5h2z'/%3E%3Cpath d='m0 0h32v32h-32z' fill='none'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg height='32' viewBox='0 0 32 32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m26 7h-2v-1a2.0023 2.0023 0 0 0 -2-2h-12a2.0023 2.0023 0 0 0 -2 2v1h-2a2.0023 2.0023 0 0 0 -2 2v3a4.0045 4.0045 0 0 0 4 4h.322a8.1689 8.1689 0 0 0 6.678 5.9341v4.0659h-5v2h12v-2h-5v-4.0689a7.9661 7.9661 0 0 0 6.74-5.9311h.26a4.0045 4.0045 0 0 0 4-4v-3a2.0023 2.0023 0 0 0 -2-2zm-18 7a2.0023 2.0023 0 0 1 -2-2v-3h2zm18-2a2.0023 2.0023 0 0 1 -2 2v-5h2z'/%3E%3Cpath d='m0 0h32v32h-32z' fill='none'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-rgb-abstract, 34,152,225);
  --callout-icon: var(--callout-icon-abstract, loader);
  background: color(srgb 0.701053 0.843345 0.925045) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(34, 152, 225, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(34, 152, 225, 0.2);
  border-right-color: rgba(34, 152, 225, 0.2);
  border-top-color: rgba(34, 152, 225, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-rgb-bug, 153,93,133);
  --callout-icon: var(--callout-icon-bug, bug);
  background: color(srgb 0.85272 0.768149 0.80779) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(153, 93, 133, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(153, 93, 133, 0.2);
  border-right-color: rgba(153, 93, 133, 0.2);
  border-top-color: rgba(153, 93, 133, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-rgb-danger, 226,72,86);
  --callout-icon: var(--callout-icon-danger, shield-alert);
  background: color(srgb 0.945759 0.741385 0.747888) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(226, 72, 86, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(226, 72, 86, 0.2);
  border-right-color: rgba(226, 72, 86, 0.2);
  border-top-color: rgba(226, 72, 86, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-rgb-example, 216,141,130);
  --callout-icon: var(--callout-icon-example, scroll-text);
  background: color(srgb 0.933014 0.829326 0.803966) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(216, 141, 130, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(216, 141, 130, 0.2);
  border-right-color: rgba(216, 141, 130, 0.2);
  border-top-color: rgba(216, 141, 130, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-rgb-fail, 226,72,86);
  --callout-icon: var(--callout-icon-fail, circle-slash);
  background: color(srgb 0.945759 0.741385 0.747888) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(226, 72, 86, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(226, 72, 86, 0.2);
  border-right-color: rgba(226, 72, 86, 0.2);
  border-top-color: rgba(226, 72, 86, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-rgb-info, 71,162,187);
  --callout-icon: var(--callout-icon-info, badge-info);
  background: color(srgb 0.74821 0.856091 0.876613) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(71, 162, 187, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(71, 162, 187, 0.2);
  border-right-color: rgba(71, 162, 187, 0.2);
  border-top-color: rgba(71, 162, 187, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-rgb-note, 200,175,155);
  --callout-icon: var(--callout-icon-note, sticker);
  background: color(srgb 0.912622 0.872659 0.835829) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(200, 175, 155, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(200, 175, 155, 0.2);
  border-right-color: rgba(200, 175, 155, 0.2);
  border-top-color: rgba(200, 175, 155, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-rgb-question, 130,190,235);
  --callout-icon: var(--callout-icon-general, help-circle);
  background: color(srgb 0.823406 0.891777 0.93779) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(130, 190, 235, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(130, 190, 235, 0.2);
  border-right-color: rgba(130, 190, 235, 0.2);
  border-top-color: rgba(130, 190, 235, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-rgb-quote, 173,214,171);
  --callout-icon: var(--callout-icon-general, quote-glyph);
  background: color(srgb 0.87821 0.922365 0.856221) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(173, 214, 171, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(173, 214, 171, 0.2);
  border-right-color: rgba(173, 214, 171, 0.2);
  border-top-color: rgba(173, 214, 171, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-rgb-success, 87,200,83);
  --callout-icon: var(--callout-icon-success, check-check);
  background: color(srgb 0.768602 0.904522 0.744064) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(87, 200, 83, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(87, 200, 83, 0.2);
  border-right-color: rgba(87, 200, 83, 0.2);
  border-top-color: rgba(87, 200, 83, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-rgb-tip, 70,206,185);
  --callout-icon: var(--callout-icon-tip, clover);
  background: color(srgb 0.746936 0.912169 0.874064) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(70, 206, 185, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(70, 206, 185, 0.2);
  border-right-color: rgba(70, 206, 185, 0.2);
  border-top-color: rgba(70, 206, 185, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-rgb-todo, 58,173,252);
  --callout-icon: var(--callout-icon-todo, list-todo);
  background: color(srgb 0.731642 0.87011 0.959456) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(58, 173, 252, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(58, 173, 252, 0.2);
  border-right-color: rgba(58, 173, 252, 0.2);
  border-top-color: rgba(58, 173, 252, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-rgb-warning, 255,161,32);
  --callout-icon: var(--callout-icon-general, lucide-alert-triangle);
  background: color(srgb 0.98272 0.854816 0.679064) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color-mix(in srgb,rgba(var(--callout-color)) var(--callout-color-opacity),var(--editor-bg-color));
  border-bottom-color: rgba(255, 161, 32, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 161, 32, 0.2);
  border-right-color: rgba(255, 161, 32, 0.2);
  border-top-color: rgba(255, 161, 32, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 200,175,155;
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 650);
  color: var(--callout-title-color, rgb(89, 62, 34));
  font-weight: var(--font-semibold, 650);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  background: color(srgb 0.962 0.943667 0.918) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--callout-content-background, color(srgb 0.962 0.943667 0.918));
  color: rgb(89, 62, 34);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z'/%3E%3Cpath d='M15 3v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M8 13h.01'/%3E%3Cpath d='M16 13h.01'/%3E%3Cpath d='M10 16s.8 1 2 1c1.3 0 2-1 2-1'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: var(--callout-icon-abstract, loader);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: var(--callout-icon-bug, bug);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: var(--callout-icon-danger, shield-alert);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: var(--callout-icon-example, scroll-text);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: var(--callout-icon-fail, circle-slash);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: var(--callout-icon-info, badge-info);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: var(--callout-icon-note, sticker);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: var(--callout-icon-general, help-circle);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: var(--callout-icon-general, quote-glyph);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: var(--callout-icon-success, check-check);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: var(--callout-icon-tip, clover);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: var(--callout-icon-todo, list-todo);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: var(--callout-icon-general, lucide-alert-triangle);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(242, 236, 227);
  border-bottom-color: rgb(228, 215, 195);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-input-color, rgb(89, 62, 34));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(248, 245, 241));
  border-bottom-color: color(srgb 0.844752 0.768077 0.659248);
  border-left-color: color(srgb 0.844752 0.768077 0.659248);
  border-right-color: color(srgb 0.844752 0.768077 0.659248);
  border-top-color: color(srgb 0.844752 0.768077 0.659248);
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.09) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.133) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.22) 0px 30px 90px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  background-color: rgb(248, 245, 241);
  color: rgb(89, 62, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(89, 62, 34) none 0px;
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--prompt-suggestion-color-selected, rgb(89, 62, 34));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(89, 62, 34);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: var(--prompt-suggestion-color-selected, rgb(89, 62, 34));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.35));
  color: var(--prompt-suggestion-color-selected, rgb(89, 62, 34));
  font-weight: 450;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.844752 0.768077 0.659248);
  border-left-color: color(srgb 0.844752 0.768077 0.659248);
  border-right-color: color(srgb 0.844752 0.768077 0.659248);
  border-top-color: color(srgb 0.844752 0.768077 0.659248);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(238, 231, 221);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.35));
  border-bottom-color: rgb(89, 62, 34);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: var(--prompt-suggestion-color-selected, rgb(89, 62, 34));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.35));
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: var(--prompt-suggestion-color-selected, rgb(89, 62, 34));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --icon-size: var(--icon-xs, 13px);
  --pill-background: var(--tag-background, rgba(255, 255, 255, 0.5));
  --pill-background-hover: var(--tag-background-hover, rgba(255, 255, 255, 0.8));
  --pill-border-color: var(--tag-border-color, rgba(0, 0, 0, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, rgba(0, 0, 0, 0.25));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsla(200, 64%, 37%, 1));
  --pill-color-hover: var(--tag-color-hover, hsla(202, 66%, 48%, 1));
  --pill-color-remove: var(--tag-color, hsla(200, 64%, 37%, 1));
  --pill-color-remove-hover: var(--tag-color-hover, hsla(202, 66%, 48%, 1));
  --pill-padding-x: var(--tag-padding-x, 0.6em);
  --pill-padding-y: var(--tag-padding-y, 0.15em);
  --pill-radius: var(--tag-radius, 1em);
  --pill-weight: var(--pill-tag-weight, 550);
  background-color: var(--pill-background, rgba(255, 187, 0, 0.2));
  border-bottom-color: rgb(182, 122, 2);
  border-bottom-left-radius: 13.062px;
  border-bottom-right-radius: 13.062px;
  border-left-color: rgb(182, 122, 2);
  border-right-color: rgb(182, 122, 2);
  border-top-color: rgb(182, 122, 2);
  border-top-left-radius: 13.062px;
  border-top-right-radius: 13.062px;
  color: var(--pill-tag-color-1, rgb(182, 122, 2));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 13.062px;
  font-weight: var(--pill-weight, 550);
  line-height: var(--line-height-tight, 13.062px);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(182, 122, 2);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 650);
  border-bottom-color: var(--h1-border-bottom-color, rgb(228, 215, 195));
  border-bottom-style: solid;
  border-left-color: var(--h1-border-left-color, rgb(228, 215, 195));
  border-left-style: solid;
  border-right-color: var(--h1-border-right-color, rgb(228, 215, 195));
  border-right-style: solid;
  border-top-color: var(--h1-border-top-color, rgb(228, 215, 195));
  border-top-style: solid;
  color: var(--h1-color, rgb(67, 46, 20));
  font-family: var(--h1-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 650);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(67, 46, 20));
  font-weight: var(--inline-title-weight, 650);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 650);
  border-bottom-color: var(--h2-border-bottom-color, rgb(228, 215, 195));
  border-bottom-style: solid;
  border-left-color: var(--h2-border-left-color, rgb(228, 215, 195));
  border-left-style: solid;
  border-right-color: var(--h2-border-right-color, rgb(228, 215, 195));
  border-right-style: solid;
  border-top-color: var(--h2-border-top-color, rgb(228, 215, 195));
  border-top-style: solid;
  color: var(--h2-color, rgb(67, 46, 20));
  font-family: var(--h2-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 650);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(67, 46, 20);
  border-left-color: rgb(67, 46, 20);
  border-right-color: rgb(67, 46, 20);
  border-top-color: rgb(67, 46, 20);
  color: var(--inline-title-color, rgb(67, 46, 20));
  font-family: var(--inline-title-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--inline-title-weight, 650);
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 650);
  border-bottom-color: var(--h3-border-bottom-color, rgb(228, 215, 195));
  border-bottom-style: solid;
  border-left-color: var(--h3-border-left-color, rgb(228, 215, 195));
  border-left-style: solid;
  border-right-color: var(--h3-border-right-color, rgb(228, 215, 195));
  border-right-style: solid;
  border-top-color: var(--h3-border-top-color, rgb(228, 215, 195));
  border-top-style: solid;
  color: var(--h3-color, rgb(67, 46, 20));
  font-family: var(--h3-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 650);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 650);
  border-bottom-color: var(--h4-border-bottom-color, rgb(228, 215, 195));
  border-bottom-style: solid;
  border-left-color: var(--h4-border-left-color, rgb(228, 215, 195));
  border-left-style: solid;
  border-right-color: var(--h4-border-right-color, rgb(228, 215, 195));
  border-right-style: solid;
  border-top-color: var(--h4-border-top-color, rgb(228, 215, 195));
  border-top-style: solid;
  color: var(--h4-color, rgb(67, 46, 20));
  font-family: var(--h4-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 650);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 650);
  border-bottom-color: var(--h5-border-bottom-color, rgb(228, 215, 195));
  border-bottom-style: solid;
  border-left-color: var(--h5-border-left-color, rgb(228, 215, 195));
  border-left-style: solid;
  border-right-color: var(--h5-border-right-color, rgb(228, 215, 195));
  border-right-style: solid;
  border-top-color: var(--h5-border-top-color, rgb(228, 215, 195));
  border-top-style: solid;
  color: var(--h5-color, rgb(67, 46, 20));
  font-family: var(--h5-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 650);
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 650);
  border-bottom-color: var(--h6-border-bottom-color, rgb(228, 215, 195));
  border-bottom-style: solid;
  border-left-color: var(--h6-border-left-color, rgb(228, 215, 195));
  border-left-style: solid;
  border-right-color: var(--h6-border-right-color, rgb(228, 215, 195));
  border-right-style: solid;
  border-top-color: var(--h6-border-top-color, rgb(228, 215, 195));
  border-top-style: solid;
  color: var(--h6-color, rgb(67, 46, 20));
  font-family: var(--h6-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 650);
}

html[saved-theme="light"] body hr {
  --divider-vertical-height: calc(100% - var(--header-height) - var(--editor-pane-margin) - var(--editor-border-radius)*2);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-rgb-note, 200,175,155);
  --callout-icon: var(--callout-icon-note, sticker);
  border-bottom-color: rgba(200, 175, 155, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(200, 175, 155, 0.2);
  border-right-color: rgba(200, 175, 155, 0.2);
  border-top-color: rgba(200, 175, 155, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(228, 215, 195);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-folder-color, rgb(123, 98, 66));
  cursor: var(--cursor, pointer);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 450);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-folder-color, rgb(123, 98, 66));
  cursor: var(--cursor, pointer);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 450);
}

html[saved-theme="light"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}

html[saved-theme="light"] body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 450);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(183, 157, 123);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(183, 157, 123);
  border-right-color: rgb(183, 157, 123);
  border-top-color: rgb(183, 157, 123);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--icon-color, rgb(183, 157, 123));
  cursor: var(--cursor, pointer);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(238, 231, 221));
  border-bottom-color: rgb(228, 215, 195);
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  color: var(--status-bar-text-color, rgb(131, 107, 73));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: var(--status-bar-item-color, rgb(183, 157, 123));
  font-weight: 450;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(89, 62, 34);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(123, 98, 66));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(123, 98, 66);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(123, 98, 66);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(123, 98, 66));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(183, 157, 123);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(183, 157, 123);
  border-right-color: rgb(183, 157, 123);
  border-top-color: rgb(183, 157, 123);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--icon-color, rgb(183, 157, 123));
  cursor: var(--cursor, pointer);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(183, 157, 123);
  stroke: rgb(183, 157, 123);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(157, 128, 98);
  border-left-color: rgb(157, 128, 98);
  border-right-color: rgb(157, 128, 98);
  border-top-color: rgb(157, 128, 98);
  color: var(--breadcrumb-color, rgb(157, 128, 98));
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--breadcrumb-separator-color, rgb(228, 215, 195));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(89, 62, 34));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, color(srgb 0.9811 0.972035 0.9589));
  border-color: rgb(228, 215, 195);
  box-shadow: var(--canvas-menu-shadow, rgba(0, 0, 0, 0.02) 0px 1px 2px 1px, rgba(0, 0, 0, 0.1) 0px 1px 4px -2.1px, rgba(0, 0, 0, 0.03) 0px 2px 8px -1.2px);
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgb(252, 250, 248));
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(228, 215, 195);
  color: var(--table-header-color, rgb(89, 62, 34));
  font-weight: var(--table-header-weight, 650);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: var(--metadata-background, color(srgb 0.962 0.943667 0.918));
  border-bottom-color: rgb(228, 215, 195);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(228, 215, 195);
  border-left-width: 1px;
  border-right-color: rgb(228, 215, 195);
  border-right-width: 1px;
  border-top-color: rgb(228, 215, 195);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--text-muted, rgb(131, 107, 73));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(131, 107, 73);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(131, 107, 73);
  border-right-color: rgb(131, 107, 73);
  border-top-color: rgb(131, 107, 73);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(131, 107, 73);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: var(--size-4-2, 0px);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(131, 107, 73);
  border-left-color: rgb(131, 107, 73);
  border-right-color: rgb(131, 107, 73);
  border-top-color: rgb(131, 107, 73);
  color: rgb(131, 107, 73);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(131, 107, 73);
  font-family: var(--metadata-label-font, "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: 14.928px;
  font-weight: 450;
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(131, 107, 73);
  font-family: var(--metadata-input-font, "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: 14.928px;
}

html[saved-theme="light"] body .note-properties {
  background-color: var(--metadata-background, color(srgb 0.962 0.943667 0.918));
  border-color: rgb(228, 215, 195);
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(131, 107, 73);
  font-weight: 450;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(131, 107, 73);
}

html[saved-theme="light"] body .note-properties-tags {
  --icon-size: var(--icon-xs, 13px);
  --pill-background: var(--tag-background, rgba(255, 255, 255, 0.5));
  --pill-background-hover: var(--tag-background-hover, rgba(255, 255, 255, 0.8));
  --pill-border-color: var(--tag-border-color, rgba(0, 0, 0, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, rgba(0, 0, 0, 0.25));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsla(200, 64%, 37%, 1));
  --pill-color-hover: var(--tag-color-hover, hsla(202, 66%, 48%, 1));
  --pill-color-remove: var(--tag-color, hsla(200, 64%, 37%, 1));
  --pill-color-remove-hover: var(--tag-color-hover, hsla(202, 66%, 48%, 1));
  --pill-padding-x: var(--tag-padding-x, 0.6em);
  --pill-padding-y: var(--tag-padding-y, 0.15em);
  --pill-radius: var(--tag-radius, 1em);
  --pill-weight: var(--pill-tag-weight, 550);
  background-color: var(--pill-background, rgba(255, 187, 0, 0.2));
  border-radius: 13.062px;
  color: var(--pill-tag-color-1, rgb(182, 122, 2));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(131, 107, 73);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(248, 245, 241));
  color: var(--text-normal, rgb(89, 62, 34));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(238, 231, 221));
  border-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(238, 231, 221));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(89, 62, 34);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(238, 231, 221));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(101, 81, 52);
  border-left-color: rgb(101, 81, 52);
  border-right-color: rgb(101, 81, 52);
  border-top-color: rgb(101, 81, 52);
  color: var(--file-header-title-color, rgb(101, 81, 52));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(131, 107, 73);
  border-left-color: rgb(131, 107, 73);
  border-right-color: rgb(131, 107, 73);
  border-top-color: rgb(131, 107, 73);
  color: var(--metadata-key-input-color-active, rgb(131, 107, 73));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(238, 231, 221));
  border-bottom-color: rgb(217, 116, 109);
  border-left-color: rgb(217, 116, 109);
  border-right-color: rgb(217, 116, 109);
  border-top-color: rgb(217, 116, 109);
  box-shadow: var(--kbd-shadow, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.06) 0px -2px 0px 0px inset);
  color: var(--kbd-color, rgb(217, 116, 109));
  font-family: var(--font-monospace, "??", "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body sub {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body summary {
  color: rgb(89, 62, 34);
  font-weight: 450;
}

html[saved-theme="light"] body sup {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body ul.tags > li {
  --font-weight: var(--link-weight, 450);
  background-color: var(--tag-background, rgba(255, 255, 255, 0.5));
  border-bottom-color: rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 12.25px;
  border-bottom-right-radius: 12.25px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.15);
  border-top-left-radius: 12.25px;
  border-top-right-radius: 12.25px;
  border-top-width: 1px;
  color: var(--tag-color, rgb(34, 114, 155));
}`,
  },
  classSettings: {
    "zero-tab-anim": {
      general: `body.zero-tab-anim .workspace-tab-header.workspace-tab-header:not(.is-active), body.zero-tab-anim .workspace-tab-header.workspace-tab-header:not(.is-active):active, body.zero-tab-anim .workspace-tab-header.workspace-tab-header:not(.is-active):hover {
transition:transform none;
transform:unset;
}`,
    },
    "zero-popup-popdown": {
      general: `body.zero-popup-popdown {
--anim-popup:none;
--anim-popdown:none;
}`,
    },
    "zero-popup-blur": {
      general: `body.zero-popup-blur {
--popup-bg-blur:0px;
}`,
    },
    "active-line-highlight": {
      general: `body.active-line-highlight .cm-active {
background:var(--active-line-bg);
box-shadow:-25vw 0 var(--active-line-bg),25vw 0 var(--active-line-bg);
}`,
    },
    "h1-vt-align-center": {
      general: `body.h1-vt-align-center .cm-s-obsidian .cm-line.HyperMD-header {
padding:unset;
}

body.h1-vt-align-center .cm-s-obsidian .cm-line.HyperMD-header-1 {
padding-top:calc(var(--p-spacing)/2);
padding-bottom:calc(var(--p-spacing)/2);
}`,
    },
    "h2-vt-align-center": {
      general: `body.h2-vt-align-center .cm-s-obsidian .cm-line.HyperMD-header {
padding:unset;
}

body.h2-vt-align-center .cm-s-obsidian .cm-line.HyperMD-header-2 {
padding-top:calc(var(--p-spacing)/2);
padding-bottom:calc(var(--p-spacing)/2);
}`,
    },
    "h3-vt-align-center": {
      general: `body.h3-vt-align-center .cm-s-obsidian .cm-line.HyperMD-header {
padding:unset;
}

body.h3-vt-align-center .cm-s-obsidian .cm-line.HyperMD-header-3 {
padding-top:calc(var(--p-spacing)/2);
padding-bottom:calc(var(--p-spacing)/2);
}`,
    },
    "h4-vt-align-center": {
      general: `body.h4-vt-align-center .cm-s-obsidian .cm-line.HyperMD-header {
padding:unset;
}

body.h4-vt-align-center .cm-s-obsidian .cm-line.HyperMD-header-4 {
padding-top:calc(var(--p-spacing)/2);
padding-bottom:calc(var(--p-spacing)/2);
}`,
    },
    "h5-vt-align-center": {
      general: `body.h5-vt-align-center .cm-s-obsidian .cm-line.HyperMD-header {
padding:unset;
}

body.h5-vt-align-center .cm-s-obsidian .cm-line.HyperMD-header-5 {
padding-top:calc(var(--p-spacing)/2);
padding-bottom:calc(var(--p-spacing)/2);
}`,
    },
    "h6-vt-align-center": {
      general: `body.h6-vt-align-center .cm-s-obsidian .cm-line.HyperMD-header {
padding:unset;
}

body.h6-vt-align-center .cm-s-obsidian .cm-line.HyperMD-header-6 {
padding-top:calc(var(--p-spacing)/2);
padding-bottom:calc(var(--p-spacing)/2);
}`,
    },
    "no-decor-link": {
      general: `body.no-decor-link {
--link-decoration:none;
--link-decoration-hover:none;
--link-external-decoration:none;
--link-external-decoration-hover:none;
--link-unresolved-decoration-style:none;
}`,
    },
    "embed-hide-title": {
      general: `body.embed-hide-title .embed-title {
display:none;
}`,
    },
    "alt-folder-icons": {
      general: `body.alt-folder-icons .is-mobile [data-type=bookmarks] .tree-item-icon svg.right-triangle {
width:var(--mobile-folder-icon-size);
height:var(--mobile-folder-icon-size);
}

body.alt-folder-icons [data-type=bookmarks] .tree-item-icon svg.right-triangle {
width:var(--icon-size);
height:var(--icon-size);
stroke-width:var(--icon-stroke);
background:currentColor;
}

body.alt-folder-icons [data-type=bookmarks] .tree-item-icon.is-collapsed svg.right-triangle {
transform:unset;
-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-folder'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E");
}

body.alt-folder-icons [data-type=bookmarks] .tree-item-icon:not(.is-collapsed) svg.right-triangle {
transform:unset;
-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-folder-open'%3E%3Cpath d='m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2'/%3E%3C/svg%3E");
}

body.is-mobile .nav-folder .tree-item-icon svg.right-triangle, body.is-tablet .nav-folder .tree-item-icon svg.right-triangle {
width:var(--mobile-folder-icon-size);
height:var(--mobile-folder-icon-size);
}

body.alt-folder-icons .nav-folder .tree-item-icon svg.right-triangle {
width:var(--icon-size);
height:var(--icon-size);
stroke-width:var(--icon-stroke);
background:currentColor;
}

body.alt-folder-icons .nav-folder .tree-item-icon.is-collapsed svg.right-triangle {
transform:unset;
-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-folder'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E");
}

body.alt-folder-icons .nav-folder .tree-item-icon:not(.is-collapsed) svg.right-triangle {
transform:unset;
-webkit-mask-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-folder-open'%3E%3Cpath d='m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2'/%3E%3C/svg%3E");
}`,
    },
    "colorful-folders_text": {
      general: `body.colorful-folders_text [data-type=bookmarks] .tree-item:nth-child(12n+2) {
--nav-folder-color:var(--nav-folder-1-color);
--nav-folder-bg-color-hover:var(--nav-folder-1-bg-color-hover);
}

body.colorful-folders_text [data-type=bookmarks] .tree-item:nth-child(12n+3) {
--nav-folder-color:var(--nav-folder-2-color);
--nav-folder-bg-color-hover:var(--nav-folder-2-bg-color-hover);
}

body.colorful-folders_text [data-type=bookmarks] .tree-item:nth-child(12n+4) {
--nav-folder-color:var(--nav-folder-3-color);
--nav-folder-bg-color-hover:var(--nav-folder-3-bg-color-hover);
}

body.colorful-folders_text [data-type=bookmarks] .tree-item:nth-child(12n+5) {
--nav-folder-color:var(--nav-folder-4-color);
--nav-folder-bg-color-hover:var(--nav-folder-4-bg-color-hover);
}

body.colorful-folders_text [data-type=bookmarks] .tree-item:nth-child(12n+6) {
--nav-folder-color:var(--nav-folder-5-color);
--nav-folder-bg-color-hover:var(--nav-folder-5-bg-color-hover);
}

body.colorful-folders_text [data-type=bookmarks] .tree-item:nth-child(12n+7) {
--nav-folder-color:var(--nav-folder-6-color);
--nav-folder-bg-color-hover:var(--nav-folder-6-bg-color-hover);
}

body.colorful-folders_text [data-type=bookmarks] .tree-item:nth-child(12n+8) {
--nav-folder-color:var(--nav-folder-7-color);
--nav-folder-bg-color-hover:var(--nav-folder-7-bg-color-hover);
}

body.colorful-folders_text [data-type=bookmarks] .tree-item:nth-child(12n+9) {
--nav-folder-color:var(--nav-folder-8-color);
--nav-folder-bg-color-hover:var(--nav-folder-8-bg-color-hover);
}

body.colorful-folders_text [data-type=bookmarks] .tree-item:nth-child(12n+10) {
--nav-folder-color:var(--nav-folder-9-color);
--nav-folder-bg-color-hover:var(--nav-folder-9-bg-color-hover);
}

body.colorful-folders_text [data-type=bookmarks] .tree-item:nth-child(12n+11) {
--nav-folder-color:var(--nav-folder-10-color);
--nav-folder-bg-color-hover:var(--nav-folder-10-bg-color-hover);
}

body.colorful-folders_text [data-type=bookmarks] .tree-item:nth-child(12n+12) {
--nav-folder-color:var(--nav-folder-11-color);
--nav-folder-bg-color-hover:var(--nav-folder-11-bg-color-hover);
}

body.colorful-folders_text [data-type=bookmarks] .tree-item:nth-child(12n+13) {
--nav-folder-color:var(--nav-folder-12-color);
--nav-folder-bg-color-hover:var(--nav-folder-12-bg-color-hover);
}

body.colorful-folders_text .nav-files-container>div>.nav-folder:nth-child(12n+2), body.colorful-folders_text .nav-folder-children>.nav-folder:nth-child(12n+2) {
--nav-folder-color:var(--nav-folder-1-color);
--nav-folder-bg-color-hover:var(--nav-folder-1-bg-color-hover);
}

body.colorful-folders_text .nav-files-container>div>.nav-folder:nth-child(12n+3), body.colorful-folders_text .nav-folder-children>.nav-folder:nth-child(12n+3) {
--nav-folder-color:var(--nav-folder-2-color);
--nav-folder-bg-color-hover:var(--nav-folder-2-bg-color-hover);
}

body.colorful-folders_text .nav-files-container>div>.nav-folder:nth-child(12n+4), body.colorful-folders_text .nav-folder-children>.nav-folder:nth-child(12n+4) {
--nav-folder-color:var(--nav-folder-3-color);
--nav-folder-bg-color-hover:var(--nav-folder-3-bg-color-hover);
}

body.colorful-folders_text .nav-files-container>div>.nav-folder:nth-child(12n+5), body.colorful-folders_text .nav-folder-children>.nav-folder:nth-child(12n+5) {
--nav-folder-color:var(--nav-folder-4-color);
--nav-folder-bg-color-hover:var(--nav-folder-4-bg-color-hover);
}

body.colorful-folders_text .nav-files-container>div>.nav-folder:nth-child(12n+6), body.colorful-folders_text .nav-folder-children>.nav-folder:nth-child(12n+6) {
--nav-folder-color:var(--nav-folder-5-color);
--nav-folder-bg-color-hover:var(--nav-folder-5-bg-color-hover);
}

body.colorful-folders_text .nav-files-container>div>.nav-folder:nth-child(12n+7), body.colorful-folders_text .nav-folder-children>.nav-folder:nth-child(12n+7) {
--nav-folder-color:var(--nav-folder-6-color);
--nav-folder-bg-color-hover:var(--nav-folder-6-bg-color-hover);
}

body.colorful-folders_text .nav-files-container>div>.nav-folder:nth-child(12n+8), body.colorful-folders_text .nav-folder-children>.nav-folder:nth-child(12n+8) {
--nav-folder-color:var(--nav-folder-7-color);
--nav-folder-bg-color-hover:var(--nav-folder-7-bg-color-hover);
}

body.colorful-folders_text .nav-files-container>div>.nav-folder:nth-child(12n+9), body.colorful-folders_text .nav-folder-children>.nav-folder:nth-child(12n+9) {
--nav-folder-color:var(--nav-folder-8-color);
--nav-folder-bg-color-hover:var(--nav-folder-8-bg-color-hover);
}

body.colorful-folders_text .nav-files-container>div>.nav-folder:nth-child(12n+10), body.colorful-folders_text .nav-folder-children>.nav-folder:nth-child(12n+10) {
--nav-folder-color:var(--nav-folder-9-color);
--nav-folder-bg-color-hover:var(--nav-folder-9-bg-color-hover);
}

body.colorful-folders_text .nav-files-container>div>.nav-folder:nth-child(12n+11), body.colorful-folders_text .nav-folder-children>.nav-folder:nth-child(12n+11) {
--nav-folder-color:var(--nav-folder-10-color);
--nav-folder-bg-color-hover:var(--nav-folder-10-bg-color-hover);
}

body.colorful-folders_text .nav-files-container>div>.nav-folder:nth-child(12n+12), body.colorful-folders_text .nav-folder-children>.nav-folder:nth-child(12n+12) {
--nav-folder-color:var(--nav-folder-11-color);
--nav-folder-bg-color-hover:var(--nav-folder-11-bg-color-hover);
}

body.colorful-folders_text .nav-files-container>div>.nav-folder:nth-child(12n+13), body.colorful-folders_text .nav-folder-children>.nav-folder:nth-child(12n+13) {
--nav-folder-color:var(--nav-folder-12-color);
--nav-folder-bg-color-hover:var(--nav-folder-12-bg-color-hover);
}`,
    },
    "colorful-folders_collapse-indicator": {
      general: `body.colorful-folders_collapse-indicator [data-type=bookmarks] .tree-item:nth-child(12n+2) {
--nav-folder-collapse-color:var(--nav-folder-1-collapse-color);
}

body.colorful-folders_collapse-indicator [data-type=bookmarks] .tree-item:nth-child(12n+3) {
--nav-folder-collapse-color:var(--nav-folder-2-collapse-color);
}

body.colorful-folders_collapse-indicator [data-type=bookmarks] .tree-item:nth-child(12n+4) {
--nav-folder-collapse-color:var(--nav-folder-3-collapse-color);
}

body.colorful-folders_collapse-indicator [data-type=bookmarks] .tree-item:nth-child(12n+5) {
--nav-folder-collapse-color:var(--nav-folder-4-collapse-color);
}

body.colorful-folders_collapse-indicator [data-type=bookmarks] .tree-item:nth-child(12n+6) {
--nav-folder-collapse-color:var(--nav-folder-5-collapse-color);
}

body.colorful-folders_collapse-indicator [data-type=bookmarks] .tree-item:nth-child(12n+7) {
--nav-folder-collapse-color:var(--nav-folder-6-collapse-color);
}

body.colorful-folders_collapse-indicator [data-type=bookmarks] .tree-item:nth-child(12n+8) {
--nav-folder-collapse-color:var(--nav-folder-7-collapse-color);
}

body.colorful-folders_collapse-indicator [data-type=bookmarks] .tree-item:nth-child(12n+9) {
--nav-folder-collapse-color:var(--nav-folder-8-collapse-color);
}

body.colorful-folders_collapse-indicator [data-type=bookmarks] .tree-item:nth-child(12n+10) {
--nav-folder-collapse-color:var(--nav-folder-9-collapse-color);
}

body.colorful-folders_collapse-indicator [data-type=bookmarks] .tree-item:nth-child(12n+11) {
--nav-folder-collapse-color:var(--nav-folder-10-collapse-color);
}

body.colorful-folders_collapse-indicator [data-type=bookmarks] .tree-item:nth-child(12n+12) {
--nav-folder-collapse-color:var(--nav-folder-11-collapse-color);
}

body.colorful-folders_collapse-indicator [data-type=bookmarks] .tree-item:nth-child(12n+13) {
--nav-folder-collapse-color:var(--nav-folder-12-collapse-color);
}

body.colorful-folders_collapse-indicator .nav-files-container>div>.nav-folder:nth-child(12n+2), body.colorful-folders_collapse-indicator .nav-folder-children>.nav-folder:nth-child(12n+2) {
--nav-folder-collapse-color:var(--nav-folder-1-collapse-color);
}

body.colorful-folders_collapse-indicator .nav-files-container>div>.nav-folder:nth-child(12n+3), body.colorful-folders_collapse-indicator .nav-folder-children>.nav-folder:nth-child(12n+3) {
--nav-folder-collapse-color:var(--nav-folder-2-collapse-color);
}

body.colorful-folders_collapse-indicator .nav-files-container>div>.nav-folder:nth-child(12n+4), body.colorful-folders_collapse-indicator .nav-folder-children>.nav-folder:nth-child(12n+4) {
--nav-folder-collapse-color:var(--nav-folder-3-collapse-color);
}

body.colorful-folders_collapse-indicator .nav-files-container>div>.nav-folder:nth-child(12n+5), body.colorful-folders_collapse-indicator .nav-folder-children>.nav-folder:nth-child(12n+5) {
--nav-folder-collapse-color:var(--nav-folder-4-collapse-color);
}

body.colorful-folders_collapse-indicator .nav-files-container>div>.nav-folder:nth-child(12n+6), body.colorful-folders_collapse-indicator .nav-folder-children>.nav-folder:nth-child(12n+6) {
--nav-folder-collapse-color:var(--nav-folder-5-collapse-color);
}

body.colorful-folders_collapse-indicator .nav-files-container>div>.nav-folder:nth-child(12n+7), body.colorful-folders_collapse-indicator .nav-folder-children>.nav-folder:nth-child(12n+7) {
--nav-folder-collapse-color:var(--nav-folder-6-collapse-color);
}

body.colorful-folders_collapse-indicator .nav-files-container>div>.nav-folder:nth-child(12n+8), body.colorful-folders_collapse-indicator .nav-folder-children>.nav-folder:nth-child(12n+8) {
--nav-folder-collapse-color:var(--nav-folder-7-collapse-color);
}

body.colorful-folders_collapse-indicator .nav-files-container>div>.nav-folder:nth-child(12n+9), body.colorful-folders_collapse-indicator .nav-folder-children>.nav-folder:nth-child(12n+9) {
--nav-folder-collapse-color:var(--nav-folder-8-collapse-color);
}

body.colorful-folders_collapse-indicator .nav-files-container>div>.nav-folder:nth-child(12n+10), body.colorful-folders_collapse-indicator .nav-folder-children>.nav-folder:nth-child(12n+10) {
--nav-folder-collapse-color:var(--nav-folder-9-collapse-color);
}

body.colorful-folders_collapse-indicator .nav-files-container>div>.nav-folder:nth-child(12n+11), body.colorful-folders_collapse-indicator .nav-folder-children>.nav-folder:nth-child(12n+11) {
--nav-folder-collapse-color:var(--nav-folder-10-collapse-color);
}

body.colorful-folders_collapse-indicator .nav-files-container>div>.nav-folder:nth-child(12n+12), body.colorful-folders_collapse-indicator .nav-folder-children>.nav-folder:nth-child(12n+12) {
--nav-folder-collapse-color:var(--nav-folder-11-collapse-color);
}

body.colorful-folders_collapse-indicator .nav-files-container>div>.nav-folder:nth-child(12n+13), body.colorful-folders_collapse-indicator .nav-folder-children>.nav-folder:nth-child(12n+13) {
--nav-folder-collapse-color:var(--nav-folder-12-collapse-color);
}`,
    },
    "colorful-folders_background": {
      general: `body.colorful-folders_background [data-type=bookmarks] .tree-item:nth-child(12n+2) {
--nav-folder-bg-color:var(--nav-folder-1-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-1-bg-color-hover);
}

body.colorful-folders_background [data-type=bookmarks] .tree-item:nth-child(12n+3):has(.mod-collapsible) {
--nav-folder-bg-color:var(--nav-folder-2-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-2-bg-color-hover);
}

body.colorful-folders_background [data-type=bookmarks] .tree-item:nth-child(12n+4):has(.mod-collapsible) {
--nav-folder-bg-color:var(--nav-folder-3-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-3-bg-color-hover);
}

body.colorful-folders_background [data-type=bookmarks] .tree-item:nth-child(12n+5):has(.mod-collapsible) {
--nav-folder-bg-color:var(--nav-folder-4-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-4-bg-color-hover);
}

body.colorful-folders_background [data-type=bookmarks] .tree-item:nth-child(12n+6):has(.mod-collapsible) {
--nav-folder-bg-color:var(--nav-folder-5-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-5-bg-color-hover);
}

body.colorful-folders_background [data-type=bookmarks] .tree-item:nth-child(12n+7):has(.mod-collapsible) {
--nav-folder-bg-color:var(--nav-folder-6-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-6-bg-color-hover);
}

body.colorful-folders_background [data-type=bookmarks] .tree-item:nth-child(12n+8):has(.mod-collapsible) {
--nav-folder-bg-color:var(--nav-folder-7-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-7-bg-color-hover);
}

body.colorful-folders_background [data-type=bookmarks] .tree-item:nth-child(12n+9):has(.mod-collapsible) {
--nav-folder-bg-color:var(--nav-folder-8-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-8-bg-color-hover);
}

body.colorful-folders_background [data-type=bookmarks] .tree-item:nth-child(12n+10):has(.mod-collapsible) {
--nav-folder-bg-color:var(--nav-folder-9-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-9-bg-color-hover);
}

body.colorful-folders_background [data-type=bookmarks] .tree-item:nth-child(12n+11):has(.mod-collapsible) {
--nav-folder-bg-color:var(--nav-folder-10-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-10-bg-color-hover);
}

body.colorful-folders_background [data-type=bookmarks] .tree-item:nth-child(12n+12):has(.mod-collapsible) {
--nav-folder-bg-color:var(--nav-folder-11-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-11-bg-color-hover);
}

body.colorful-folders_background [data-type=bookmarks] .tree-item:nth-child(12n+13):has(.mod-collapsible) {
--nav-folder-bg-color:var(--nav-folder-12-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-12-bg-color-hover);
}

body.colorful-folders_background .nav-files-container>div>.nav-folder:nth-child(12n+2), body.colorful-folders_background .nav-folder-children>.nav-folder:nth-child(12n+2) {
--nav-folder-bg-color:var(--nav-folder-1-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-1-bg-color-hover);
}

body.colorful-folders_background .nav-files-container>div>.nav-folder:nth-child(12n+3), body.colorful-folders_background .nav-folder-children>.nav-folder:nth-child(12n+3) {
--nav-folder-bg-color:var(--nav-folder-2-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-2-bg-color-hover);
}

body.colorful-folders_background .nav-files-container>div>.nav-folder:nth-child(12n+4), body.colorful-folders_background .nav-folder-children>.nav-folder:nth-child(12n+4) {
--nav-folder-bg-color:var(--nav-folder-3-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-3-bg-color-hover);
}

body.colorful-folders_background .nav-files-container>div>.nav-folder:nth-child(12n+5), body.colorful-folders_background .nav-folder-children>.nav-folder:nth-child(12n+5) {
--nav-folder-bg-color:var(--nav-folder-4-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-4-bg-color-hover);
}

body.colorful-folders_background .nav-files-container>div>.nav-folder:nth-child(12n+6), body.colorful-folders_background .nav-folder-children>.nav-folder:nth-child(12n+6) {
--nav-folder-bg-color:var(--nav-folder-5-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-5-bg-color-hover);
}

body.colorful-folders_background .nav-files-container>div>.nav-folder:nth-child(12n+7), body.colorful-folders_background .nav-folder-children>.nav-folder:nth-child(12n+7) {
--nav-folder-bg-color:var(--nav-folder-6-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-6-bg-color-hover);
}

body.colorful-folders_background .nav-files-container>div>.nav-folder:nth-child(12n+8), body.colorful-folders_background .nav-folder-children>.nav-folder:nth-child(12n+8) {
--nav-folder-bg-color:var(--nav-folder-7-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-7-bg-color-hover);
}

body.colorful-folders_background .nav-files-container>div>.nav-folder:nth-child(12n+9), body.colorful-folders_background .nav-folder-children>.nav-folder:nth-child(12n+9) {
--nav-folder-bg-color:var(--nav-folder-8-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-8-bg-color-hover);
}

body.colorful-folders_background .nav-files-container>div>.nav-folder:nth-child(12n+10), body.colorful-folders_background .nav-folder-children>.nav-folder:nth-child(12n+10) {
--nav-folder-bg-color:var(--nav-folder-9-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-9-bg-color-hover);
}

body.colorful-folders_background .nav-files-container>div>.nav-folder:nth-child(12n+11), body.colorful-folders_background .nav-folder-children>.nav-folder:nth-child(12n+11) {
--nav-folder-bg-color:var(--nav-folder-10-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-10-bg-color-hover);
}

body.colorful-folders_background .nav-files-container>div>.nav-folder:nth-child(12n+12), body.colorful-folders_background .nav-folder-children>.nav-folder:nth-child(12n+12) {
--nav-folder-bg-color:var(--nav-folder-11-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-11-bg-color-hover);
}

body.colorful-folders_background .nav-files-container>div>.nav-folder:nth-child(12n+13), body.colorful-folders_background .nav-folder-children>.nav-folder:nth-child(12n+13) {
--nav-folder-bg-color:var(--nav-folder-12-bg-color);
--nav-folder-bg-color-hover:var(--nav-folder-12-bg-color-hover);
}`,
    },
    "colorful-folders_indentation-guide": {
      general: `body.colorful-folders_indentation-guide [data-type=bookmarks] .tree-item:nth-child(12n+2) {
--nav-indentation-guide-color:var(--nav-folder-1-indent-color);
}

body.colorful-folders_indentation-guide [data-type=bookmarks] .tree-item:nth-child(12n+3) {
--nav-indentation-guide-color:var(--nav-folder-2-indent-color);
}

body.colorful-folders_indentation-guide [data-type=bookmarks] .tree-item:nth-child(12n+4) {
--nav-indentation-guide-color:var(--nav-folder-3-indent-color);
}

body.colorful-folders_indentation-guide [data-type=bookmarks] .tree-item:nth-child(12n+5) {
--nav-indentation-guide-color:var(--nav-folder-4-indent-color);
}

body.colorful-folders_indentation-guide [data-type=bookmarks] .tree-item:nth-child(12n+6) {
--nav-indentation-guide-color:var(--nav-folder-5-indent-color);
}

body.colorful-folders_indentation-guide [data-type=bookmarks] .tree-item:nth-child(12n+7) {
--nav-indentation-guide-color:var(--nav-folder-6-indent-color);
}

body.colorful-folders_indentation-guide [data-type=bookmarks] .tree-item:nth-child(12n+8) {
--nav-indentation-guide-color:var(--nav-folder-7-indent-color);
}

body.colorful-folders_indentation-guide [data-type=bookmarks] .tree-item:nth-child(12n+9) {
--nav-indentation-guide-color:var(--nav-folder-8-indent-color);
}

body.colorful-folders_indentation-guide [data-type=bookmarks] .tree-item:nth-child(12n+10) {
--nav-indentation-guide-color:var(--nav-folder-9-indent-color);
}

body.colorful-folders_indentation-guide [data-type=bookmarks] .tree-item:nth-child(12n+11) {
--nav-indentation-guide-color:var(--nav-folder-10-indent-color);
}

body.colorful-folders_indentation-guide [data-type=bookmarks] .tree-item:nth-child(12n+12) {
--nav-indentation-guide-color:var(--nav-folder-11-indent-color);
}

body.colorful-folders_indentation-guide [data-type=bookmarks] .tree-item:nth-child(12n+13) {
--nav-indentation-guide-color:var(--nav-folder-12-indent-color);
}

body.colorful-folders_indentation-guide .nav-files-container>div>.nav-folder:nth-child(12n+2), body.colorful-folders_indentation-guide .nav-folder-children>.nav-folder:nth-child(12n+2) {
--nav-indentation-guide-color:var(--nav-folder-1-indent-color);
}

body.colorful-folders_indentation-guide .nav-files-container>div>.nav-folder:nth-child(12n+3), body.colorful-folders_indentation-guide .nav-folder-children>.nav-folder:nth-child(12n+3) {
--nav-indentation-guide-color:var(--nav-folder-2-indent-color);
}

body.colorful-folders_indentation-guide .nav-files-container>div>.nav-folder:nth-child(12n+4), body.colorful-folders_indentation-guide .nav-folder-children>.nav-folder:nth-child(12n+4) {
--nav-indentation-guide-color:var(--nav-folder-3-indent-color);
}

body.colorful-folders_indentation-guide .nav-files-container>div>.nav-folder:nth-child(12n+5), body.colorful-folders_indentation-guide .nav-folder-children>.nav-folder:nth-child(12n+5) {
--nav-indentation-guide-color:var(--nav-folder-4-indent-color);
}

body.colorful-folders_indentation-guide .nav-files-container>div>.nav-folder:nth-child(12n+6), body.colorful-folders_indentation-guide .nav-folder-children>.nav-folder:nth-child(12n+6) {
--nav-indentation-guide-color:var(--nav-folder-5-indent-color);
}

body.colorful-folders_indentation-guide .nav-files-container>div>.nav-folder:nth-child(12n+7), body.colorful-folders_indentation-guide .nav-folder-children>.nav-folder:nth-child(12n+7) {
--nav-indentation-guide-color:var(--nav-folder-6-indent-color);
}

body.colorful-folders_indentation-guide .nav-files-container>div>.nav-folder:nth-child(12n+8), body.colorful-folders_indentation-guide .nav-folder-children>.nav-folder:nth-child(12n+8) {
--nav-indentation-guide-color:var(--nav-folder-7-indent-color);
}

body.colorful-folders_indentation-guide .nav-files-container>div>.nav-folder:nth-child(12n+9), body.colorful-folders_indentation-guide .nav-folder-children>.nav-folder:nth-child(12n+9) {
--nav-indentation-guide-color:var(--nav-folder-8-indent-color);
}

body.colorful-folders_indentation-guide .nav-files-container>div>.nav-folder:nth-child(12n+10), body.colorful-folders_indentation-guide .nav-folder-children>.nav-folder:nth-child(12n+10) {
--nav-indentation-guide-color:var(--nav-folder-9-indent-color);
}

body.colorful-folders_indentation-guide .nav-files-container>div>.nav-folder:nth-child(12n+11), body.colorful-folders_indentation-guide .nav-folder-children>.nav-folder:nth-child(12n+11) {
--nav-indentation-guide-color:var(--nav-folder-10-indent-color);
}

body.colorful-folders_indentation-guide .nav-files-container>div>.nav-folder:nth-child(12n+12), body.colorful-folders_indentation-guide .nav-folder-children>.nav-folder:nth-child(12n+12) {
--nav-indentation-guide-color:var(--nav-folder-11-indent-color);
}

body.colorful-folders_indentation-guide .nav-files-container>div>.nav-folder:nth-child(12n+13), body.colorful-folders_indentation-guide .nav-folder-children>.nav-folder:nth-child(12n+13) {
--nav-indentation-guide-color:var(--nav-folder-12-indent-color);
}`,
    },
    "colorful-folders_inherit-color": {
      general: `body.colorful-folders_inherit-color .workspace-leaf-content[data-type=bookmarks] .tree-item .tree-item {
--nav-folder-color:inherit;
--nav-folder-bg-color:inherit;
--nav-folder-bg-color-hover:inherit;
--nav-folder-collapse-color:inherit;
--nav-indentation-guide-color:inherit;
}

body.colorful-folders_inherit-color .nav-files-container .nav-folder.nav-folder .nav-folder {
--nav-folder-color:inherit;
--nav-folder-bg-color:inherit;
--nav-folder-bg-color-hover:inherit;
--nav-folder-collapse-color:inherit;
--nav-indentation-guide-color:inherit;
}`,
    },
    "colorful-folders_different-bookmark-colors": {
      general: `body.colorful-folders_different-bookmark-colors [data-type=bookmarks] .tree-item {
--nav-folder-1-color:var(--bookmark-folder-1-color);
--nav-folder-1-bg-color:var(--bookmark-folder-1-bg-color);
--nav-folder-1-bg-color-hover:var(--bookmark-folder-1-bg-color-hover);
--nav-folder-1-collapse-color:var(--bookmark-folder-1-collapse-color);
--nav-folder-1-indent-color:var(--bookmark-folder-1-indent-color);
--nav-folder-2-color:var(--bookmark-folder-2-color);
--nav-folder-2-bg-color:var(--bookmark-folder-2-bg-color);
--nav-folder-2-bg-color-hover:var(--bookmark-folder-2-bg-color-hover);
--nav-folder-2-collapse-color:var(--bookmark-folder-2-collapse-color);
--nav-folder-2-indent-color:var(--bookmark-folder-2-indent-color);
--nav-folder-3-color:var(--bookmark-folder-3-color);
--nav-folder-3-bg-color:var(--bookmark-folder-3-bg-color);
--nav-folder-3-bg-color-hover:var(--bookmark-folder-3-bg-color-hover);
--nav-folder-3-collapse-color:var(--bookmark-folder-3-collapse-color);
--nav-folder-3-indent-color:var(--bookmark-folder-3-indent-color);
--nav-folder-4-color:var(--bookmark-folder-4-color);
--nav-folder-4-bg-color:var(--bookmark-folder-4-bg-color);
--nav-folder-4-bg-color-hover:var(--bookmark-folder-4-bg-color-hover);
--nav-folder-4-collapse-color:var(--bookmark-folder-4-collapse-color);
--nav-folder-4-indent-color:var(--bookmark-folder-4-indent-color);
--nav-folder-5-color:var(--bookmark-folder-5-color);
--nav-folder-5-bg-color:var(--bookmark-folder-5-bg-color);
--nav-folder-5-bg-color-hover:var(--bookmark-folder-5-bg-color-hover);
--nav-folder-5-collapse-color:var(--bookmark-folder-5-collapse-color);
--nav-folder-5-indent-color:var(--bookmark-folder-5-indent-color);
--nav-folder-6-color:var(--bookmark-folder-6-color);
--nav-folder-6-bg-color:var(--bookmark-folder-6-bg-color);
--nav-folder-6-bg-color-hover:var(--bookmark-folder-6-bg-color-hover);
--nav-folder-6-collapse-color:var(--bookmark-folder-6-collapse-color);
--nav-folder-6-indent-color:var(--bookmark-folder-6-indent-color);
--nav-folder-7-color:var(--bookmark-folder-7-color);
--nav-folder-7-bg-color:var(--bookmark-folder-7-bg-color);
--nav-folder-7-bg-color-hover:var(--bookmark-folder-7-bg-color-hover);
--nav-folder-7-collapse-color:var(--bookmark-folder-7-collapse-color);
--nav-folder-7-indent-color:var(--bookmark-folder-7-indent-color);
--nav-folder-8-color:var(--bookmark-folder-8-color);
--nav-folder-8-bg-color:var(--bookmark-folder-8-bg-color);
--nav-folder-8-bg-color-hover:var(--bookmark-folder-8-bg-color-hover);
--nav-folder-8-collapse-color:var(--bookmark-folder-8-collapse-color);
--nav-folder-8-indent-color:var(--bookmark-folder-8-indent-color);
--nav-folder-9-color:var(--bookmark-folder-9-color);
--nav-folder-9-bg-color:var(--bookmark-folder-9-bg-color);
--nav-folder-9-bg-color-hover:var(--bookmark-folder-9-bg-color-hover);
--nav-folder-9-collapse-color:var(--bookmark-folder-9-collapse-color);
--nav-folder-9-indent-color:var(--bookmark-folder-9-indent-color);
--nav-folder-10-color:var(--bookmark-folder-10-color);
--nav-folder-10-bg-color:var(--bookmark-folder-10-bg-color);
--nav-folder-10-bg-color-hover:var(--bookmark-folder-10-bg-color-hover);
--nav-folder-10-collapse-color:var(--bookmark-folder-10-collapse-color);
--nav-folder-10-indent-color:var(--bookmark-folder-10-indent-color);
--nav-folder-11-color:var(--bookmark-folder-11-color);
--nav-folder-11-bg-color:var(--bookmark-folder-11-bg-color);
--nav-folder-11-bg-color-hover:var(--bookmark-folder-11-bg-color-hover);
--nav-folder-11-collapse-color:var(--bookmark-folder-11-collapse-color);
--nav-folder-11-indent-color:var(--bookmark-folder-11-indent-color);
--nav-folder-12-color:var(--bookmark-folder-12-color);
--nav-folder-12-bg-color:var(--bookmark-folder-12-bg-color);
--nav-folder-12-bg-color-hover:var(--bookmark-folder-12-bg-color-hover);
--nav-folder-12-collapse-color:var(--bookmark-folder-12-collapse-color);
--nav-folder-12-indent-color:var(--bookmark-folder-12-indent-color);
}`,
    },
  },
};
