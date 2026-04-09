import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "primary",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cascadia-code"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 31 !important;
  --accent-l: 24% !important;
  --accent-s: 27% !important;
  --active-line-bg: hsla(33, 20%, 17%, 1) !important;
  --alternating-color-1: hsla(40, 78%, 48%, 1) !important;
  --alternating-color-1-hover-active: hsla(38, 76%, 42%, 1) !important;
  --alternating-color-2: hsla(4, 88%, 61%, 1) !important;
  --alternating-color-2-hover-active: hsla(2, 75%, 52%, 1) !important;
  --alternating-color-3: hsla(197, 48%, 49%, 1) !important;
  --alternating-color-3-hover-active: hsla(201, 45%, 40%, 1) !important;
  --amount-chbx-color: hsla(152, 46%, 38%, 1) !important;
  --amount-chbx-icon-color: white !important;
  --amount-chbx-radius: 100% !important;
  --anim-popdown: 0.4s slideDown forwards !important;
  --anim-popup: 0.3s slideUp forwards !important;
  --anim-popup-alt: 0.335s slideUpAlt forwards !important;
  --background-anim: background 140ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --background-modifier-active-hover: hsla(31, 27%, 25%, 1) !important;
  --background-modifier-border: hsla(28, 22%, 19%, 1) !important;
  --background-modifier-border-focus: color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --background-modifier-border-hover: color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --background-modifier-error: hsla(2, 75%, 52%, 1) !important;
  --background-modifier-error-hover: hsla(4, 88%, 61%, 1) !important;
  --background-modifier-error-rgb: 228,87,78 !important;
  --background-modifier-form-field: hsla(24, 18%, 11%, 1) !important;
  --background-modifier-form-field-hover: hsla(24, 18%, 11%, 1) !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-message: hsla(31, 27%, 25%, 1) !important;
  --background-modifier-success: hsla(155, 78%, 29%, 1) !important;
  --background-modifier-success-rgb: 100,194,113 !important;
  --background-modifier-warning: hsla(19, 81%, 41%, 1) !important;
  --background-modifier-warning-hover: hsla(22, 82%, 47%, 1) !important;
  --background-primary: hsla(30, 19%, 15%, 1) !important;
  --background-primary-alt: hsla(30, 17%, 14%, 1) !important;
  --background-secondary: hsla(29, 16%, 13%, 1) !important;
  --background-secondary-alt: hsla(29, 16%, 13%, 1) !important;
  --bases-cards-background: hsla(30, 19%, 15%, 1) !important;
  --bases-cards-cover-background: hsla(30, 17%, 14%, 1) !important;
  --bases-cards-shadow: 0 0 0 1px hsla(28, 22%, 19%, 1) !important;
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --bases-embed-border-color: hsla(28, 22%, 19%, 1) !important;
  --bases-group-heading-property-color: hsla(35, 27%, 55%, 1) !important;
  --bases-group-heading-property-weight: 450 !important;
  --bases-group-heading-value-weight: 650 !important;
  --bases-table-border-color: hsla(28, 22%, 19%, 1) !important;
  --bases-table-cell-background-active: hsla(30, 19%, 15%, 1) !important;
  --bases-table-cell-background-disabled: hsla(30, 17%, 14%, 1) !important;
  --bases-table-cell-background-selected: hsla(31,27%,24%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl( 28, 27.54%, 27.6% ) !important;
  --bases-table-group-background: hsla(30, 17%, 14%, 1) !important;
  --bases-table-header-background: hsla(30, 19%, 15%, 1) !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.3) !important;
  --bases-table-header-color: hsla(35, 27%, 55%, 1) !important;
  --bases-table-header-weight: 450 !important;
  --bases-table-row-background-hover: hsla(29, 16%, 13%, 1) !important;
  --bases-table-summary-background: hsla(30, 19%, 15%, 1) !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.3) !important;
  --blockquote-background-color: hsla(29, 16%, 13%, 1) !important;
  --blockquote-border-color: hsla(28, 22%, 19%, 1) !important;
  --blur-background: color-mix(in srgb, hsla(29, 16%, 13%, 1) 65%, transparent) linear-gradient(hsla(29, 16%, 13%, 1), color-mix(in srgb, hsla(29, 16%, 13%, 1) 65%, transparent)) !important;
  --bodyFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsla(4, 88%, 61%, 1) !important;
  --bold-highlight-bg: hsla(350, 84%, 63%, 0.2) !important;
  --bold-highlight-color: hsla(34, 39%, 74%, 1) !important;
  --bold-italic-color: hsla(32, 48%, 85%, 1) !important;
  --bold-italic-highlight-bg: hsla(74, 69%, 44%, 0.2) !important;
  --bold-italic-highlight-color: hsla(32, 48%, 85%, 1) !important;
  --bold-italic-strikethrough-color: hsla(35, 27%, 55%, 1) !important;
  --bold-italic-weight: 750 !important;
  --bold-weight: 750 !important;
  --bookmark-chbx-color: hsla(21, 81%, 54%, 1) !important;
  --bookmark-folder-1-bg-color: color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) !important;
  --bookmark-folder-1-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-1-collapse-color: color-mix(in srgb, hsla(4, 88%, 61%, 1) 50%, transparent) !important;
  --bookmark-folder-1-color: hsla(4, 88%, 61%, 1) !important;
  --bookmark-folder-1-indent-color: color-mix(in srgb, hsla(4, 88%, 61%, 1) 25%, transparent) !important;
  --bookmark-folder-10-bg-color: color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) !important;
  --bookmark-folder-10-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-10-collapse-color: color-mix(in srgb, hsla(154, 57%, 42%, 1) 50%, transparent) !important;
  --bookmark-folder-10-color: hsla(154, 57%, 42%, 1) !important;
  --bookmark-folder-10-indent-color: color-mix(in srgb, hsla(154, 57%, 42%, 1) 25%, transparent) !important;
  --bookmark-folder-11-bg-color: color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) !important;
  --bookmark-folder-11-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-11-collapse-color: color-mix(in srgb, hsla(194, 59%, 56%, 1) 50%, transparent) !important;
  --bookmark-folder-11-color: hsla(194, 59%, 56%, 1) !important;
  --bookmark-folder-11-indent-color: color-mix(in srgb, hsla(194, 59%, 56%, 1) 25%, transparent) !important;
  --bookmark-folder-12-bg-color: color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) !important;
  --bookmark-folder-12-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-12-collapse-color: color-mix(in srgb, hsla(242, 52%, 69%, 1) 50%, transparent) !important;
  --bookmark-folder-12-color: hsla(242, 52%, 69%, 1) !important;
  --bookmark-folder-12-indent-color: color-mix(in srgb, hsla(242, 52%, 69%, 1) 25%, transparent) !important;
  --bookmark-folder-2-bg-color: color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) !important;
  --bookmark-folder-2-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-2-collapse-color: color-mix(in srgb, hsla(24, 84%, 50%, 1) 50%, transparent) !important;
  --bookmark-folder-2-color: hsla(24, 84%, 50%, 1) !important;
  --bookmark-folder-2-indent-color: color-mix(in srgb, hsla(24, 84%, 50%, 1) 25%, transparent) !important;
  --bookmark-folder-3-bg-color: color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) !important;
  --bookmark-folder-3-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-3-collapse-color: color-mix(in srgb, hsla(42, 79%, 51%, 1) 50%, transparent) !important;
  --bookmark-folder-3-color: hsla(42, 79%, 51%, 1) !important;
  --bookmark-folder-3-indent-color: color-mix(in srgb, hsla(42, 79%, 51%, 1) 25%, transparent) !important;
  --bookmark-folder-4-bg-color: color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) !important;
  --bookmark-folder-4-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-4-collapse-color: color-mix(in srgb, hsla(154, 57%, 42%, 1) 50%, transparent) !important;
  --bookmark-folder-4-color: hsla(154, 57%, 42%, 1) !important;
  --bookmark-folder-4-indent-color: color-mix(in srgb, hsla(154, 57%, 42%, 1) 25%, transparent) !important;
  --bookmark-folder-5-bg-color: color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) !important;
  --bookmark-folder-5-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-5-collapse-color: color-mix(in srgb, hsla(194, 59%, 56%, 1) 50%, transparent) !important;
  --bookmark-folder-5-color: hsla(194, 59%, 56%, 1) !important;
  --bookmark-folder-5-indent-color: color-mix(in srgb, hsla(194, 59%, 56%, 1) 25%, transparent) !important;
  --bookmark-folder-6-bg-color: color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) !important;
  --bookmark-folder-6-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-6-collapse-color: color-mix(in srgb, hsla(242, 52%, 69%, 1) 50%, transparent) !important;
  --bookmark-folder-6-color: hsla(242, 52%, 69%, 1) !important;
  --bookmark-folder-6-indent-color: color-mix(in srgb, hsla(242, 52%, 69%, 1) 25%, transparent) !important;
  --bookmark-folder-7-bg-color: color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) !important;
  --bookmark-folder-7-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-7-collapse-color: color-mix(in srgb, hsla(4, 88%, 61%, 1) 50%, transparent) !important;
  --bookmark-folder-7-color: hsla(4, 88%, 61%, 1) !important;
  --bookmark-folder-7-indent-color: color-mix(in srgb, hsla(4, 88%, 61%, 1) 25%, transparent) !important;
  --bookmark-folder-8-bg-color: color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) !important;
  --bookmark-folder-8-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-8-collapse-color: color-mix(in srgb, hsla(24, 84%, 50%, 1) 50%, transparent) !important;
  --bookmark-folder-8-color: hsla(24, 84%, 50%, 1) !important;
  --bookmark-folder-8-indent-color: color-mix(in srgb, hsla(24, 84%, 50%, 1) 25%, transparent) !important;
  --bookmark-folder-9-bg-color: color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) !important;
  --bookmark-folder-9-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-9-collapse-color: color-mix(in srgb, hsla(42, 79%, 51%, 1) 50%, transparent) !important;
  --bookmark-folder-9-color: hsla(42, 79%, 51%, 1) !important;
  --bookmark-folder-9-indent-color: color-mix(in srgb, hsla(42, 79%, 51%, 1) 25%, transparent) !important;
  --breadcrumb-bg-hover: hsla(28, 22%, 19%, 1) !important;
  --breadcrumb-color: hsla(34, 24%, 46%, 1) !important;
  --breadcrumb-color-hover: hsla(34, 24%, 46%, 1) !important;
  --breadcrumb-separator-color: hsla(28, 22%, 19%, 1) !important;
  --button-accent-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.26),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.35),0px 4px 4px -5.6px rgba(0, 0, 0, 0.37),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 4px -1px rgba(0, 0, 0, 0.14) !important;
  --button-accent-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.45),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.15),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.57),0px 0px 0px 1px rgba(255, 255, 255, 0.02) !important;
  --button-accent-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.28),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.11),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 6px -1px rgba(0, 0, 0, 0.24),0px 0px 0px 3px hsla(34, 24%, 40%, 0.2) !important;
  --button-accent-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.34),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.26),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.35),0px 4px 4px -5.6px rgba(0, 0, 0, 0.37),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.19) !important;
  --button-anim: 140ms cubic-bezier(0.68, -0.55, 0.27, 1.55) !important;
  --button-axis-offset: 2px !important;
  --button-inset-shadow-size: 2px !important;
  --button-metadata-padding: 6px 8px 8px 6px !important;
  --button-metadata-padding-active: 6px 8px 6px 6px !important;
  --button-opacity-active: 0.5 !important;
  --button-padding: 8px 12px 10px 12px !important;
  --button-padding-active: 10px 12px 8px 12px !important;
  --button-radius: 8px !important;
  --button-s-padding: 4px 8px 4px 8px !important;
  --button-s-radius: 6.4px !important;
  --button-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.02),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.25),0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;
  --button-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.45),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.15),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.57),0px 0px 0px 1px rgba(255, 255, 255, 0.02) !important;
  --button-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.05),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.24),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.25),0px 0px 0px 3px hsla(34, 24%, 40%, 0.2) !important;
  --button-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.06),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.25) !important;
  --callout-border-opacity: 0.1;
  --callout-bug: 228,87,78;
  --callout-color-opacity: 32.5%;
  --callout-container-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.18),0px 2px 6px 0px rgba(0, 0, 0, 0.28);
  --callout-content-background: color-mix( in srgb, hsla(30, 17%, 14%, 1) 50%, hsla(30, 19%, 15%, 1) );
  --callout-content-padding: 4px 16px 8px 16px;
  --callout-content-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.18),inset 0px -5px 3px 0px rgba(0, 0, 0, 0.3);
  --callout-content-shadow-blur: 3px;
  --callout-default: 99,156,192;
  --callout-error: 228,87,78;
  --callout-example: 139,113,185;
  --callout-fail: 228,87,78;
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
  --callout-important: 91,175,183;
  --callout-info: 99,156,192;
  --callout-question: 238,163,89;
  --callout-radius: 8px;
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
  --callout-success: 100,194,113;
  --callout-summary: 91,175,183;
  --callout-tip: 91,175,183;
  --callout-title-color: hsla(34, 39%, 74%, 1);
  --callout-title-padding: 12px 16px;
  --callout-title-shadow: inset 0px -1px 1px 0px rgba(0, 0, 0, 0.25),inset 0px 1px 1px 0px rgba(255, 255, 255, 0.1);
  --callout-title-weight: 650;
  --callout-todo: 99,156,192;
  --callout-warning: 238,163,89;
  --cancelled-chbx-color: hsla(32, 10%, 58%, 1) !important;
  --cancelled-chbx-text-color: hsla(34, 24%, 46%, 1) !important;
  --cancelled-chbx-text-decoration: line-through !important;
  --canvas-background: hsla(30, 19%, 15%, 1) !important;
  --canvas-card-label-color: hsla(34, 24%, 46%, 1) !important;
  --canvas-color: 166,150,142 !important;
  --canvas-color-1: 228,87,78 !important;
  --canvas-color-2: 238,163,89 !important;
  --canvas-color-3: 249,207,81 !important;
  --canvas-color-4: 100,194,113 !important;
  --canvas-color-5: 99,156,192 !important;
  --canvas-color-6: 139,113,185 !important;
  --canvas-controls-icon-size: 15px !important;
  --canvas-dot-pattern: hsla(31, 27%, 25%, 1) !important;
  --canvas-icon-color: hsla(34, 24%, 46%, 1) !important;
  --canvas-icon-color-disabled: hsla(31, 27%, 25%, 1) !important;
  --canvas-icon-color-hover: hsla(34, 31%, 68%, 1) !important;
  --canvas-menu-bg: color-mix(in srgb, hsla(33, 20%, 17%, 1) 60%, hsla(30, 19%, 15%, 1)) !important;
  --canvas-menu-bg-hover: color-mix(in srgb, hsla(33, 20%, 17%, 1) 10%, hsla(30, 19%, 15%, 1)) !important;
  --canvas-menu-border: 1px solid hsla(28, 22%, 19%, 1) !important;
  --canvas-menu-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.14),0px 1px 4px -2.1px rgba(0, 0, 0, 0.22),0px 2px 8px -1.2px rgba(0, 0, 0, 0.15) !important;
  --caret-color: hsla(34, 24%, 46%, 1) !important;
  --checkbox-border-color: hsla(31, 27%, 25%, 1) !important;
  --checkbox-border-color-hover: hsla(33, 27%, 33%, 1) !important;
  --checkbox-color: hsla(154, 75%, 26%, 1) !important;
  --checkbox-color-hover: hsla(155, 78%, 29%, 1) !important;
  --checkbox-marker-color: white !important;
  --checked-border-color: rgba(255, 255, 255, 0.15) !important;
  --checked-border-color-hover: rgba(255, 255, 255, 0.1) !important;
  --checklist-bg: hsla(30, 17%, 14%, 1) !important;
  --checklist-done-color: hsla(34, 24%, 46%, 1) !important;
  --checklist-shadow-hover: 0px 0px 0px 3px rgba(0, 0, 0, 0.3) !important;
  --clickable-icon-radius: 5px !important;
  --clock-chbx-color: hsla(210, 39%, 52%, 1) !important;
  --close-button-radius: 12px !important;
  --code-background: hsla(30, 17%, 14%, 1) !important;
  --code-border-color: hsla(28, 22%, 19%, 1) !important;
  --code-bracket-background: rgba(0, 0, 0, 0.3) !important;
  --code-comment: hsla(34, 24%, 46%, 1) !important;
  --code-function: rgb(225, 178, 67) !important;
  --code-important: rgb(203, 128, 53) !important;
  --code-keyword: rgb(180, 100, 100) !important;
  --code-normal: hsla(34, 39%, 74%, 1) !important;
  --code-operator: rgb(192, 78, 78) !important;
  --code-property: rgb(70, 169, 180) !important;
  --code-punctuation: hsla(35, 27%, 55%, 1) !important;
  --code-radius: 8px !important;
  --code-string: rgb(80, 196, 101) !important;
  --code-tag: rgb(192, 78, 78) !important;
  --code-value: rgb(113, 97, 194) !important;
  --codeFont: "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsla(33, 27%, 33%, 1) !important;
  --collapse-icon-color-collapsed: hsla(33, 27%, 33%, 1) !important;
  --color-accent: hsl(31, 27%, 24%) !important;
  --color-accent-1: hsl( 28, 27.54%, 27.6% ) !important;
  --color-accent-2: hsl( 26, 31.32%, 32.16% ) !important;
  --color-accent-hsl: 31,27%,24% !important;
  --color-base-00: hsla(32, 21%, 9%, 1) !important;
  --color-base-05: hsla(29, 16%, 13%, 1) !important;
  --color-base-10: hsla(30, 19%, 15%, 1) !important;
  --color-base-100: hsla(32, 48%, 85%, 1) !important;
  --color-base-20: hsla(33, 20%, 17%, 1) !important;
  --color-base-25: hsla(28, 22%, 19%, 1) !important;
  --color-base-30: hsla(31, 27%, 25%, 1) !important;
  --color-base-35: hsla(33, 27%, 33%, 1) !important;
  --color-base-40: hsla(34, 24%, 46%, 1) !important;
  --color-base-50: hsla(35, 27%, 55%, 1) !important;
  --color-base-60: hsla(34, 31%, 68%, 1) !important;
  --color-base-70: hsla(34, 39%, 74%, 1) !important;
  --color-blue: rgb(63, 137, 176) !important;
  --color-blue-rgb: 99,156,192 !important;
  --color-cyan: rgb(70, 169, 180) !important;
  --color-cyan-rgb: 91,175,183 !important;
  --color-d-alpha-blue: hsla(186, 64%, 46%, 0.2) !important;
  --color-d-alpha-gray: hsla(34, 24%, 40%, 0.2) !important;
  --color-d-alpha-green: hsla(74, 69%, 44%, 0.2) !important;
  --color-d-alpha-orange: hsla(27, 100%, 50%, 0.2) !important;
  --color-d-alpha-purple: hsla(236, 100%, 72%, 0.2) !important;
  --color-d-alpha-red: hsla(350, 84%, 63%, 0.2) !important;
  --color-d-alpha-yellow: hsla(44, 100%, 50%, 0.2) !important;
  --color-d-blue-10: hsla(191, 54%, 62%, 1) !important;
  --color-d-blue-20: hsla(194, 59%, 56%, 1) !important;
  --color-d-blue-30: hsla(197, 48%, 49%, 1) !important;
  --color-d-blue-40: hsla(201, 45%, 40%, 1) !important;
  --color-d-gray-10: hsla(32, 48%, 85%, 1) !important;
  --color-d-gray-100: hsla(30, 19%, 15%, 1) !important;
  --color-d-gray-110: hsla(30, 17%, 14%, 1) !important;
  --color-d-gray-120: hsla(29, 16%, 13%, 1) !important;
  --color-d-gray-130: hsla(24, 18%, 11%, 1) !important;
  --color-d-gray-140: hsla(32, 21%, 9%, 1) !important;
  --color-d-gray-20: hsla(34, 39%, 74%, 1) !important;
  --color-d-gray-30: hsla(34, 31%, 68%, 1) !important;
  --color-d-gray-40: hsla(35, 27%, 55%, 1) !important;
  --color-d-gray-50: hsla(34, 24%, 46%, 1) !important;
  --color-d-gray-60: hsla(33, 27%, 33%, 1) !important;
  --color-d-gray-70: hsla(31, 27%, 25%, 1) !important;
  --color-d-gray-80: hsla(28, 22%, 19%, 1) !important;
  --color-d-gray-90: hsla(33, 20%, 17%, 1) !important;
  --color-d-green-10: hsla(152, 51%, 54%, 1) !important;
  --color-d-green-20: hsla(154, 57%, 42%, 1) !important;
  --color-d-green-30: hsla(155, 78%, 29%, 1) !important;
  --color-d-green-40: hsla(154, 75%, 26%, 1) !important;
  --color-d-orange-10: hsla(26, 85%, 58%, 1) !important;
  --color-d-orange-20: hsla(24, 84%, 50%, 1) !important;
  --color-d-orange-30: hsla(22, 82%, 47%, 1) !important;
  --color-d-orange-40: hsla(19, 81%, 41%, 1) !important;
  --color-d-purple-10: hsla(242, 52%, 69%, 1) !important;
  --color-d-purple-20: hsla(241, 45%, 57%, 1) !important;
  --color-d-purple-30: hsla(239, 45%, 51%, 1) !important;
  --color-d-purple-40: hsla(238, 47%, 48%, 1) !important;
  --color-d-red-10: hsla(5, 94%, 73%, 1) !important;
  --color-d-red-20: hsla(4, 91%, 67%, 1) !important;
  --color-d-red-30: hsla(4, 88%, 61%, 1) !important;
  --color-d-red-40: hsla(2, 75%, 52%, 1) !important;
  --color-d-yellow-10: hsla(43, 69%, 63%, 1) !important;
  --color-d-yellow-20: hsla(42, 79%, 51%, 1) !important;
  --color-d-yellow-30: hsla(40, 78%, 48%, 1) !important;
  --color-d-yellow-40: hsla(38, 76%, 42%, 1) !important;
  --color-gray: rgb(166, 150, 141) !important;
  --color-gray-rgb: 166,150,142 !important;
  --color-green: rgb(80, 196, 101) !important;
  --color-green-rgb: 100,194,113 !important;
  --color-orange: rgb(203, 128, 53) !important;
  --color-orange-rgb: 238,163,89 !important;
  --color-pink: rgb(180, 100, 100) !important;
  --color-pink-rgb: 224,108,138 !important;
  --color-purple: rgb(113, 97, 194) !important;
  --color-purple-rgb: 139,113,185 !important;
  --color-red: rgb(192, 78, 78) !important;
  --color-red-rgb: 228,87,78 !important;
  --color-yellow: rgb(225, 178, 67) !important;
  --color-yellow-rgb: 249,207,81 !important;
  --community-item-flair-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1) !important;
  --community-item-selected-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.18),0px 1px 3px -2.6px rgba(0, 0, 0, 0.33),0px 2px 6px -4.2px rgba(0, 0, 0, 0.29),0px 4px 12px -6px rgba(0, 0, 0, 0.9) !important;
  --community-item-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03) !important;
  --community-item-shadow-hover: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1) !important;
  --component-font-weight: 550 !important;
  --con-chbx-color: hsla(12, 64%, 47%, 1) !important;
  --copy-code-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.39),0px 2px 4px -2px rgba(0, 0, 0, 0.39) !important;
  --copy-code-button-radius: 4px !important;
  --cursor: pointer !important;
  --dark: hsla(34, 39%, 74%, 1) !important;
  --darkgray: hsla(34, 39%, 74%, 1) !important;
  --disabled-component-opacity: 0.3 !important;
  --divider-color: hsla(28, 22%, 19%, 1) !important;
  --divider-color-hover: color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --divider-radius: 8px !important;
  --divider-width-hover: 4px !important;
  --down-chbx-color: hsla(4, 56%, 54%, 1) !important;
  --drag-ghost-background: hsl( 28, 27.54%, 27.6% ) !important;
  --drag-ghost-text-color: hsla(32, 48%, 85%, 1) !important;
  --dropdown-background: hsla(29, 16%, 13%, 1) !important;
  --dropdown-background-hover: color-mix(in hsl, hsla(30, 19%, 15%, 1) 50%, hsla(29, 16%, 13%, 1)) !important;
  --dropdown-height: 31px !important;
  --editor-bg-color: hsla(30, 19%, 15%, 1) !important;
  --editor-bgpattern-color: hsla(31, 27%, 25%, 1) !important;
  --editor-bgpattern-size: 50px 50px !important;
  --editor-border-color: hsla(28, 22%, 19%, 1) !important;
  --editor-border-radius: 12px !important;
  --editor-border-width: 1px !important;
  --editor-header-icon: 15px !important;
  --editor-pane-margin: 10px !important;
  --editor-tab-icon: 15px !important;
  --embed-background: color-mix( in srgb, hsla(30, 17%, 14%, 1) 50%, hsla(30, 19%, 15%, 1) ) !important;
  --embed-bg-color-mix: color-mix( in srgb, hsla(30, 17%, 14%, 1) 50%, hsla(30, 19%, 15%, 1) ) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-bottom: 1px solid hsla(28, 22%, 19%, 1) !important;
  --embed-border-bottom-color: hsla(28, 22%, 19%, 1) !important;
  --embed-border-bottom-style: solid !important;
  --embed-border-bottom-width: 1px !important;
  --embed-border-end: 1px solid hsla(28, 22%, 19%, 1) !important;
  --embed-border-end-color: hsla(28, 22%, 19%, 1) !important;
  --embed-border-end-style: solid !important;
  --embed-border-end-width: 1px !important;
  --embed-border-radius: 12px !important;
  --embed-border-start: 1px solid hsla(28, 22%, 19%, 1) !important;
  --embed-border-start-color: hsla(28, 22%, 19%, 1) !important;
  --embed-border-start-style: solid !important;
  --embed-border-start-width: 1px !important;
  --embed-border-top: 1px solid hsla(28, 22%, 19%, 1) !important;
  --embed-border-top-color: hsla(28, 22%, 19%, 1) !important;
  --embed-border-top-style: solid !important;
  --embed-border-top-width: 1px !important;
  --embed-edit-btn-bg: color-mix(in srgb, hsla(24, 18%, 11%, 1) 70%, transparent) !important;
  --embed-edit-btn-bg-hover: color-mix(in srgb, hsla(24, 18%, 11%, 1) 100%, transparent) !important;
  --embed-edit-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.5),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.5) !important;
  --embed-edit-btn-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.5),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.5),0px 1px 2px 0px rgba(0, 0, 0, 0.5) !important;
  --embed-left-right-padding: 16px !important;
  --embed-media-border-radius: 8px !important;
  --embed-padding: 6px 16px 0px !important;
  --embed-title-border: 1px solid hsla(28, 22%, 19%, 1) !important;
  --embed-title-border-color: hsla(28, 22%, 19%, 1) !important;
  --embed-title-border-style: solid !important;
  --embed-title-border-width: 1px !important;
  --embed-title-color: hsla(34, 24%, 46%, 1) !important;
  --embed-title-font-size: 16px !important;
  --embed-title-font-weight: 550 !important;
  --embed-title-letter-spacing: normal !important;
  --embed-title-margin-bottom: 8px !important;
  --embed-title-text-transform: none !important;
  --empty-state-action-btn-bg: hsla(30, 17%, 14%, 1) !important;
  --file-header-background: hsla(30, 19%, 15%, 1) !important;
  --file-header-background-focused: hsla(30, 19%, 15%, 1) !important;
  --file-header-border: 1px solid hsla(28, 22%, 19%, 1) !important;
  --file-header-border-color: hsla(28, 22%, 19%, 1) !important;
  --file-header-border-width: 1px !important;
  --file-header-font: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-title-color: hsla(35, 27%, 55%, 1) !important;
  --file-line-width: 40rem !important;
  --file-max-line-width: 88% !important;
  --file-tab-gap: 0px !important;
  --flair-background: hsla(29, 16%, 13%, 1) !important;
  --flair-color: hsla(34, 39%, 74%, 1) !important;
  --flair-count-bg-color: hsla(29, 16%, 13%, 1) !important;
  --flair-count-color: hsla(33, 27%, 33%, 1) !important;
  --flair-count-padding: 2px 4px !important;
  --flair-count-radius: 5px !important;
  --font-bold: 750 !important;
  --font-extrabold: 850 !important;
  --font-extralight: 250 !important;
  --font-interface: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Inter" !important;
  --font-light: 350 !important;
  --font-medium: 550 !important;
  --font-mermaid: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Cascadia Code" !important;
  --font-normal: 450 !important;
  --font-print: "Inter", Arial' !important;
  --font-semibold: 650 !important;
  --font-text: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Inter" !important;
  --font-thin: 150 !important;
  --font-ui-smallest: 11px !important;
  --font-weight: 450 !important;
  --footnote-divider-color: hsla(28, 22%, 19%, 1) !important;
  --footnote-id-color: hsla(35, 27%, 55%, 1) !important;
  --footnote-id-color-no-occurrences: hsla(34, 24%, 46%, 1) !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.2) !important;
  --graph-arrow: hsla(34, 24%, 46%, 1) !important;
  --graph-line: hsla(28, 22%, 19%, 1) !important;
  --graph-node: hsla(197, 48%, 49%, 1) !important;
  --graph-node-attachment: hsla(155, 78%, 29%, 1) !important;
  --graph-node-focused: hsla(34, 39%, 74%, 1) !important;
  --graph-node-highlight-fill: hsla(34, 31%, 68%, 1) !important;
  --graph-node-highlight-line: hsla(33, 27%, 33%, 1) !important;
  --graph-node-tag: hsla(4, 88%, 61%, 1) !important;
  --graph-node-unresolved: hsla(42, 79%, 51%, 1) !important;
  --graph-node-unresolved-opacity: 1 !important;
  --graph-text: hsla(34, 24%, 46%, 1) !important;
  --gray: hsla(35, 27%, 55%, 1) !important;
  --gutter-color: color-mix(in srgb, hsla(33, 27%, 33%, 1) 40%, hsla(31, 27%, 25%, 1)) !important;
  --gutter-color-active: hsla(34, 24%, 46%, 1) !important;
  --h1-bg-color: transparent !important;
  --h1-border-bottom-color: hsla(28, 22%, 19%, 1) !important;
  --h1-border-left-color: hsla(28, 22%, 19%, 1) !important;
  --h1-border-radius: 0px !important;
  --h1-border-right-color: hsla(28, 22%, 19%, 1) !important;
  --h1-border-style: solid !important;
  --h1-border-top-color: hsla(28, 22%, 19%, 1) !important;
  --h1-border-width: 0px !important;
  --h1-color: hsla(32, 48%, 85%, 1) !important;
  --h1-text-align: left !important;
  --h1-text-transform: normal !important;
  --h1-weight: 650 !important;
  --h2-bg-color: transparent !important;
  --h2-border-bottom-color: hsla(28, 22%, 19%, 1) !important;
  --h2-border-left-color: hsla(28, 22%, 19%, 1) !important;
  --h2-border-radius: 0px !important;
  --h2-border-right-color: hsla(28, 22%, 19%, 1) !important;
  --h2-border-style: solid !important;
  --h2-border-top-color: hsla(28, 22%, 19%, 1) !important;
  --h2-border-width: 0px !important;
  --h2-color: hsla(32, 48%, 85%, 1) !important;
  --h2-text-align: left !important;
  --h2-text-transform: normal !important;
  --h2-weight: 650 !important;
  --h3-bg-color: transparent !important;
  --h3-border-bottom-color: hsla(28, 22%, 19%, 1) !important;
  --h3-border-left-color: hsla(28, 22%, 19%, 1) !important;
  --h3-border-radius: 0px !important;
  --h3-border-right-color: hsla(28, 22%, 19%, 1) !important;
  --h3-border-style: solid !important;
  --h3-border-top-color: hsla(28, 22%, 19%, 1) !important;
  --h3-border-width: 0px !important;
  --h3-color: hsla(32, 48%, 85%, 1) !important;
  --h3-text-align: left !important;
  --h3-text-transform: normal !important;
  --h3-weight: 650 !important;
  --h4-bg-color: transparent !important;
  --h4-border-bottom-color: hsla(28, 22%, 19%, 1) !important;
  --h4-border-left-color: hsla(28, 22%, 19%, 1) !important;
  --h4-border-radius: 0px !important;
  --h4-border-right-color: hsla(28, 22%, 19%, 1) !important;
  --h4-border-style: solid !important;
  --h4-border-top-color: hsla(28, 22%, 19%, 1) !important;
  --h4-border-width: 0px !important;
  --h4-color: hsla(32, 48%, 85%, 1) !important;
  --h4-text-align: left !important;
  --h4-text-transform: normal !important;
  --h4-weight: 650 !important;
  --h5-bg-color: transparent !important;
  --h5-border-bottom-color: hsla(28, 22%, 19%, 1) !important;
  --h5-border-left-color: hsla(28, 22%, 19%, 1) !important;
  --h5-border-radius: 0px !important;
  --h5-border-right-color: hsla(28, 22%, 19%, 1) !important;
  --h5-border-style: solid !important;
  --h5-border-top-color: hsla(28, 22%, 19%, 1) !important;
  --h5-border-width: 0px !important;
  --h5-color: hsla(32, 48%, 85%, 1) !important;
  --h5-text-align: left !important;
  --h5-text-transform: normal !important;
  --h5-weight: 650 !important;
  --h6-bg-color: transparent !important;
  --h6-border-bottom-color: hsla(28, 22%, 19%, 1) !important;
  --h6-border-left-color: hsla(28, 22%, 19%, 1) !important;
  --h6-border-radius: 0px !important;
  --h6-border-right-color: hsla(28, 22%, 19%, 1) !important;
  --h6-border-style: solid !important;
  --h6-border-top-color: hsla(28, 22%, 19%, 1) !important;
  --h6-border-width: 0px !important;
  --h6-color: hsla(32, 48%, 85%, 1) !important;
  --h6-text-align: left !important;
  --h6-text-transform: normal !important;
  --h6-weight: 650 !important;
  --header-height: 46px !important;
  --headerFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsla(34, 24%, 46%, 1) !important;
  --highlight: hsla(44, 100%, 50%, 0.2) !important;
  --hr-color: hsla(28, 22%, 19%, 1) !important;
  --hr-thickness: 1px !important;
  --icon-bg: transparent !important;
  --icon-bg-active: hsla(28, 22%, 19%, 1) !important;
  --icon-bg-active-menu: transparent !important;
  --icon-bg-hover: transparent !important;
  --icon-bg-pressed: transparent !important;
  --icon-color: color-mix(in srgb, hsla(33, 27%, 33%, 1) 30%, hsla(34, 24%, 46%, 1)) !important;
  --icon-color-active: hsla(35, 27%, 55%, 1) !important;
  --icon-color-focused: hsla(34, 24%, 46%, 1) !important;
  --icon-color-hover: color-mix(in srgb, hsla(34, 24%, 46%, 1) 70%, hsla(35, 27%, 55%, 1)) !important;
  --icon-container-radius: 0px !important;
  --icon-m: 16px !important;
  --icon-opacity: 1 !important;
  --icon-s: 15px !important;
  --icon-size: 16px !important;
  --icon-xl: 24px !important;
  --icon-xs: 13px !important;
  --idea-chbx-color: hsla(30, 72%, 62%, 1) !important;
  --important-chbx-color: hsla(17, 83%, 47%) !important;
  --important-chbx-icon-color: white !important;
  --important-chbx-radius: 100% !important;
  --indentation-guide-color: hsla(28, 22%, 19%, 1) !important;
  --indentation-guide-color-active: color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --indentation-guide-reading-indent: -1em !important;
  --info-chbx-color: hsla(178, 31%, 41%, 1) !important;
  --info-chbx-icon-color: white !important;
  --inline-code-bg: hsla(24, 18%, 11%, 1) !important;
  --inline-code-color: hsla(4, 91%, 67%, 1) !important;
  --inline-code-radius: 4px !important;
  --inline-query-bg: color-mix(in srgb, hsla(29, 16%, 13%, 1) 25%, hsla(30, 19%, 15%, 1)) !important;
  --inline-query-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.26) !important;
  --inline-title-color: hsla(32, 48%, 85%, 1) !important;
  --inline-title-weight: 650 !important;
  --inprogress-chbx-border-color: color-mix(in srgb, hsla(31, 85%, 59%, 1) 15%, hsla(34, 31%, 68%, 1)) !important;
  --inprogress-chbx-color: hsla(31, 85%, 59%, 1) !important;
  --inprogress-chbx-color-hover: hsla(32, 95%, 65%, 1) !important;
  --input-date-separator: hsla(34, 24%, 46%, 1) !important;
  --input-font-weight: 450 !important;
  --input-height: 32px !important;
  --input-placeholder-color: hsla(34, 24%, 46%, 1) !important;
  --input-radius: 8px !important;
  --input-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.02),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.25),0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;
  --input-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.45),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.15),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.57),0px 0px 0px 1px rgba(255, 255, 255, 0.02) !important;
  --input-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.06),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.25) !important;
  --interactive-accent: hsl( 28, 27.54%, 27.6% ) !important;
  --interactive-accent-hover: hsl( 26, 31.32%, 32.16% ) !important;
  --interactive-accent-hsl: 31,27%,24% !important;
  --interactive-hover: color-mix(in hsl, hsla(30, 19%, 15%, 1) 50%, hsla(29, 16%, 13%, 1)) !important;
  --interactive-normal: hsla(29, 16%, 13%, 1) !important;
  --interface-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0 !important;
  --italic-color: hsla(194, 59%, 56%, 1) !important;
  --italic-highlight-bg: hsla(186, 64%, 46%, 0.2) !important;
  --italic-highlight-color: hsla(34, 39%, 74%, 1) !important;
  --kanban-drag-item-border: none !important;
  --kanban-drag-item-shadow: 0px 8.3px 22.8px -9px rgba(0, 0, 0, 0.49),0px 6.2px 10.1px -4.2px rgba(0, 0, 0, 0.52),0px 2.1px 6.8px -3.2px rgba(0, 0, 0, 0.59) !important;
  --kanban-item-bg: hsla(33, 20%, 17%, 1) !important;
  --kanban-item-border: none !important;
  --kanban-item-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.4),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.19),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.06),0px 2px 2px 0px rgba(0, 0, 0, 0.13) !important;
  --kanban-lane-bg: color-mix(in srgb, hsla(30, 17%, 14%, 1) 50%, hsla(29, 16%, 13%, 1)) !important;
  --kanban-lane-border: 1px solid color-mix(in srgb, hsla(33, 20%, 17%, 1) 40%, hsla(30, 19%, 15%, 1)) !important;
  --kanban-lane-shadow: none !important;
  --kanban-new-item-bg: transparent !important;
  --kanban-new-item-bg-hover: hsla(30, 19%, 15%, 1) !important;
  --kanban-new-item-color: hsla(34, 24%, 46%, 1) !important;
  --kanban-new-item-color-hover: hsla(35, 27%, 55%, 1) !important;
  --kanban-new-item-shadow: none !important;
  --kanban-new-item-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.22),0px 2px 4px 0px rgba(0, 0, 0, 0.14) !important;
  --kanban-title-count-bg: hsla(28, 22%, 19%, 1) !important;
  --kanban-title-count-color: hsla(35, 27%, 55%, 1) !important;
  --kanban-title-count-radius: 12px !important;
  --kanban-title-text-input-color: hsla(34, 39%, 74%, 1) !important;
  --kbd-background: hsla(30, 17%, 14%, 1) !important;
  --kbd-color: hsla(4, 91%, 67%, 1) !important;
  --kbd-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.17),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.2) !important;
  --language-chbx-color: hsla(7, 63%, 62%, 1) !important;
  --law-chbx-color: hsla(34, 34%, 52%, 1) !important;
  --light: hsla(30, 19%, 15%, 1) !important;
  --lightgray: hsla(29, 16%, 13%, 1) !important;
  --link-ahref-color: hsla(4, 91%, 67%, 1) !important;
  --link-ahref-color-hover: hsla(5, 94%, 73%, 1) !important;
  --link-ahref-decoration-color: color-mix(in srgb, currentColor 22%, transparent) !important;
  --link-ahref-decoration-color-hover: color-mix(in srgb, hsla(5, 94%, 73%, 1) 22%, transparent) !important;
  --link-color: hsla(42, 79%, 51%, 1) !important;
  --link-color-hover: hsla(43, 69%, 63%, 1) !important;
  --link-decoration-color: color-mix(in srgb, hsla(42, 79%, 51%, 1) 22%, transparent) !important;
  --link-decoration-color-hover: color-mix(in srgb, hsla(43, 69%, 63%, 1) 22%, transparent) !important;
  --link-decoration-opacity: 22% !important;
  --link-decoration-thickness: 1.5px !important;
  --link-external-color: hsla(154, 57%, 42%, 1) !important;
  --link-external-color-hover: hsla(152, 51%, 54%, 1) !important;
  --link-external-decoration-color: color-mix(in srgb, hsla(154, 57%, 42%, 1) 22%, transparent) !important;
  --link-external-decoration-color-hover: color-mix(in srgb, hsla(152, 51%, 54%, 1) 22%, transparent) !important;
  --link-opacity-active: 0.5 !important;
  --link-underline-offset: 2px !important;
  --link-unresolved-color: hsla(34, 24%, 46%, 1) !important;
  --link-unresolved-color-hover: hsla(35, 27%, 55%, 1) !important;
  --link-unresolved-decoration-color: color-mix(in srgb, hsla(34, 24%, 46%, 1) 22%, transparent) !important;
  --link-unresolved-decoration-color-hover: color-mix(in srgb, hsla(35, 27%, 55%, 1) 22%, transparent) !important;
  --link-unresolved-opacity: 1 !important;
  --link-weight: 450 !important;
  --list-bullet-indent-reading: -1em !important;
  --list-indent-editing: 0.6em !important;
  --list-marker-color: hsla(34, 24%, 46%, 1) !important;
  --list-marker-color-collapsed: hsla(35, 27%, 55%, 1) !important;
  --list-marker-color-hover: hsla(34, 31%, 68%, 1) !important;
  --loading-line-bg-color: hsla(29, 16%, 13%, 1) !important;
  --loading-line-color: hsla(191, 54%, 62%, 1) !important;
  --loading-line-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1) !important;
  --location-chbox-color: hsla(0, 56%, 48%, 1) !important;
  --menu-background: hsla(29, 16%, 13%, 1) !important;
  --menu-border-color: color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --menu-item-bg-active: hsla(24, 18%, 11%, 1) !important;
  --menu-item-bg-hover: rgba(0, 0, 0, 0.25) !important;
  --menu-item-color-active: hsla(33, 27%, 33%, 1) !important;
  --menu-item-icon-color: hsla(34, 24%, 46%, 1) !important;
  --menu-item-icon-color-active: hsla(33, 27%, 33%, 1) !important;
  --menu-item-radius: 7px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.228),0px 3.4px 6.7px rgba(0, 0, 0, 0.242),0px 15px 30px rgba(0, 0, 0, 0.27) !important;
  --metadata-background: color-mix(in srgb, hsla(30, 19%, 15%, 1) 50%, hsla(30, 17%, 14%, 1)) !important;
  --metadata-border-color: hsla(28, 22%, 19%, 1) !important;
  --metadata-border-radius: 8px !important;
  --metadata-border-width: 1px !important;
  --metadata-container-padding: 12px 12px !important;
  --metadata-divider-color: hsla(28, 22%, 19%, 1) !important;
  --metadata-divider-width: 0px !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.2) !important;
  --metadata-input-font: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-shadow-active: inset 0px 0px 0px 1px hsla(28, 22%, 19%, 1),0px 0px 0px 1px hsla(28, 22%, 19%, 1) !important;
  --metadata-input-shadow-hover: none !important;
  --metadata-input-text-color: hsla(35, 27%, 55%, 1) !important;
  --metadata-key-input-color: hsla(34, 24%, 46%, 1) !important;
  --metadata-key-input-color-active: hsla(34, 31%, 68%, 1) !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.2) !important;
  --metadata-label-font: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsla(35, 27%, 55%, 1) !important;
  --metadata-label-text-color-hover: hsla(35, 27%, 55%, 1) !important;
  --metadata-properties-title-color: hsla(33, 27%, 33%, 1) !important;
  --metadata-properties-title-color-collapsed: hsla(33, 27%, 33%, 1) !important;
  --metadata-properties-title-color-hover: hsla(34, 24%, 46%, 1) !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.3) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --metadata-property-radius: 7px !important;
  --metadata-tab-background: hsla(29, 16%, 13%, 1) !important;
  --modal-background: hsla(30, 19%, 15%, 1) !important;
  --modal-border-color: color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --modal-close-button-size: 20px !important;
  --modal-radius: 16px !important;
  --monospace-font-feature: "calt" 1,"ss01" 1,"ss02" 1,"ss03" 1,"ss05" 1,"ss19" 1,"zero" 1 !important;
  --nav-collapse-icon-color: hsla(33, 27%, 33%, 1) !important;
  --nav-collapse-icon-color-collapsed: hsla(34, 24%, 46%, 1) !important;
  --nav-file-padding-active: 4px 8px 6px 24px !important;
  --nav-file-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.27),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.24),0px 2px 3px 0px rgba(0, 0, 0, 0.22) !important;
  --nav-file-tag-bg: transparent !important;
  --nav-file-tag-color: hsla(33, 27%, 33%, 1) !important;
  --nav-folder-1-bg-color: color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) !important;
  --nav-folder-1-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-1-collapse-color: color-mix(in srgb, hsla(4, 88%, 61%, 1) 50%, transparent) !important;
  --nav-folder-1-color: hsla(4, 88%, 61%, 1) !important;
  --nav-folder-1-indent-color: color-mix(in srgb, hsla(4, 88%, 61%, 1) 25%, transparent) !important;
  --nav-folder-10-bg-color: color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) !important;
  --nav-folder-10-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-10-collapse-color: color-mix(in srgb, hsla(154, 57%, 42%, 1) 50%, transparent) !important;
  --nav-folder-10-color: hsla(154, 57%, 42%, 1) !important;
  --nav-folder-10-indent-color: color-mix(in srgb, hsla(154, 57%, 42%, 1) 25%, transparent) !important;
  --nav-folder-11-bg-color: color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) !important;
  --nav-folder-11-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-11-collapse-color: color-mix(in srgb, hsla(194, 59%, 56%, 1) 50%, transparent) !important;
  --nav-folder-11-color: hsla(194, 59%, 56%, 1) !important;
  --nav-folder-11-indent-color: color-mix(in srgb, hsla(194, 59%, 56%, 1) 25%, transparent) !important;
  --nav-folder-12-bg-color: color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) !important;
  --nav-folder-12-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-12-collapse-color: color-mix(in srgb, hsla(242, 52%, 69%, 1) 50%, transparent) !important;
  --nav-folder-12-color: hsla(242, 52%, 69%, 1) !important;
  --nav-folder-12-indent-color: color-mix(in srgb, hsla(242, 52%, 69%, 1) 25%, transparent) !important;
  --nav-folder-2-bg-color: color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) !important;
  --nav-folder-2-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-2-collapse-color: color-mix(in srgb, hsla(24, 84%, 50%, 1) 50%, transparent) !important;
  --nav-folder-2-color: hsla(24, 84%, 50%, 1) !important;
  --nav-folder-2-indent-color: color-mix(in srgb, hsla(24, 84%, 50%, 1) 25%, transparent) !important;
  --nav-folder-3-bg-color: color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) !important;
  --nav-folder-3-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-3-collapse-color: color-mix(in srgb, hsla(42, 79%, 51%, 1) 50%, transparent) !important;
  --nav-folder-3-color: hsla(42, 79%, 51%, 1) !important;
  --nav-folder-3-indent-color: color-mix(in srgb, hsla(42, 79%, 51%, 1) 25%, transparent) !important;
  --nav-folder-4-bg-color: color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) !important;
  --nav-folder-4-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-4-collapse-color: color-mix(in srgb, hsla(154, 57%, 42%, 1) 50%, transparent) !important;
  --nav-folder-4-color: hsla(154, 57%, 42%, 1) !important;
  --nav-folder-4-indent-color: color-mix(in srgb, hsla(154, 57%, 42%, 1) 25%, transparent) !important;
  --nav-folder-5-bg-color: color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) !important;
  --nav-folder-5-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-5-collapse-color: color-mix(in srgb, hsla(194, 59%, 56%, 1) 50%, transparent) !important;
  --nav-folder-5-color: hsla(194, 59%, 56%, 1) !important;
  --nav-folder-5-indent-color: color-mix(in srgb, hsla(194, 59%, 56%, 1) 25%, transparent) !important;
  --nav-folder-6-bg-color: color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) !important;
  --nav-folder-6-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-6-collapse-color: color-mix(in srgb, hsla(242, 52%, 69%, 1) 50%, transparent) !important;
  --nav-folder-6-color: hsla(242, 52%, 69%, 1) !important;
  --nav-folder-6-indent-color: color-mix(in srgb, hsla(242, 52%, 69%, 1) 25%, transparent) !important;
  --nav-folder-7-bg-color: color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) !important;
  --nav-folder-7-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-7-collapse-color: color-mix(in srgb, hsla(4, 88%, 61%, 1) 50%, transparent) !important;
  --nav-folder-7-color: hsla(4, 88%, 61%, 1) !important;
  --nav-folder-7-indent-color: color-mix(in srgb, hsla(4, 88%, 61%, 1) 25%, transparent) !important;
  --nav-folder-8-bg-color: color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) !important;
  --nav-folder-8-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-8-collapse-color: color-mix(in srgb, hsla(24, 84%, 50%, 1) 50%, transparent) !important;
  --nav-folder-8-color: hsla(24, 84%, 50%, 1) !important;
  --nav-folder-8-indent-color: color-mix(in srgb, hsla(24, 84%, 50%, 1) 25%, transparent) !important;
  --nav-folder-9-bg-color: color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) !important;
  --nav-folder-9-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-9-collapse-color: color-mix(in srgb, hsla(42, 79%, 51%, 1) 50%, transparent) !important;
  --nav-folder-9-color: hsla(42, 79%, 51%, 1) !important;
  --nav-folder-9-indent-color: color-mix(in srgb, hsla(42, 79%, 51%, 1) 25%, transparent) !important;
  --nav-folder-bg-color: transparent !important;
  --nav-folder-bg-color-hover: rgba(0, 0, 0, 0.125) !important;
  --nav-folder-collapse-color: hsla(33, 27%, 33%, 1) !important;
  --nav-folder-color: hsla(35, 27%, 55%, 1) !important;
  --nav-heading-color: hsla(34, 24%, 46%, 1) !important;
  --nav-heading-color-collapsed: hsla(34, 24%, 46%, 1) !important;
  --nav-heading-color-collapsed-hover: hsla(34, 24%, 46%, 1) !important;
  --nav-heading-color-hover: hsla(34, 24%, 46%, 1) !important;
  --nav-heading-weight: 550 !important;
  --nav-heading-weight-hover: 550 !important;
  --nav-indentation-guide-color: hsla(28, 22%, 19%, 1) !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.125) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.125) !important;
  --nav-item-background-selected: hsla(197, 45%, 29%, 0.5) !important;
  --nav-item-background-selected-hover: hsla(197, 45%, 29%, 0.4) !important;
  --nav-item-color: hsla(35, 27%, 55%, 1) !important;
  --nav-item-color-active: hsla(35, 27%, 55%, 1) !important;
  --nav-item-color-highlighted: hsl( 26, 31.32%, 32.16% ) !important;
  --nav-item-color-hover: hsla(35, 27%, 55%, 1) !important;
  --nav-item-color-selected: hsla(34, 39%, 74%, 1) !important;
  --nav-item-padding: 5px 8px 5px 24px !important;
  --nav-item-parent-padding: 5px 8px 5px 24px !important;
  --nav-item-radius: 6px !important;
  --nav-item-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.23) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: hsla(34, 24%, 46%, 1) !important;
  --nav-tag-color-active: hsla(35, 27%, 55%, 1) !important;
  --nav-tag-color-hover: hsla(35, 27%, 55%, 1) !important;
  --nav-tag-weight: 650 !important;
  --new-tab-btn-radius: 2em !important;
  --non-alternating-color: hsla(33, 27%, 33%, 1) !important;
  --non-alternating-color-hover-active: hsla(31, 27%, 25%, 1) !important;
  --normal-highlight-bg: hsla(44, 100%, 50%, 0.2) !important;
  --normal-highlight-color: hsla(34, 39%, 74%, 1) !important;
  --note-chbx-color: hsla(8, 51%, 53%, 1) !important;
  --notice-color: hsla(34, 39%, 74%, 1) !important;
  --notice-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),0px 2px 9px -2.1px rgba(0, 0, 0, 0.4),0px 3px 17px -4.3px rgba(0, 0, 0, 0.3),0px 7px 30px -5.5px rgba(0, 0, 0, 0.2) !important;
  --pcr-btn-shadow: inset 0px 0px 0px 1.5px rgba(255, 255, 255, 0.2) !important;
  --pdf-background: hsla(30, 19%, 15%, 1) !important;
  --pdf-page-background: hsla(30, 19%, 15%, 1) !important;
  --pdf-shadow: 0 0 0 1px hsla(28, 22%, 19%, 1) !important;
  --pdf-sidebar-background: hsla(30, 19%, 15%, 1) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(28, 22%, 19%, 1) !important;
  --pill-background: rgba(0, 0, 0, 0.2) !important;
  --pill-background-hover: rgba(0, 0, 0, 0.2) !important;
  --pill-border-color: color-mix(in srgb, hsla(28, 22%, 19%, 1) 50%, transparent) !important;
  --pill-border-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) 50%, transparent) !important;
  --pill-color: hsla(34, 31%, 68%, 1) !important;
  --pill-color-hover: hsla(34, 39%, 74%, 1) !important;
  --pill-color-remove: hsla(33, 27%, 33%, 1) !important;
  --pill-color-remove-hover: hsla(33, 27%, 33%, 1) !important;
  --pill-tag-bg-1: hsla(44, 100%, 50%, 0.2) !important;
  --pill-tag-bg-2: hsla(350, 84%, 63%, 0.2) !important;
  --pill-tag-bg-3: hsla(186, 64%, 46%, 0.2) !important;
  --pill-tag-color-1: hsla(42, 79%, 51%, 1) !important;
  --pill-tag-color-2: hsla(4, 91%, 67%, 1) !important;
  --pill-tag-color-3: hsla(194, 59%, 56%, 1) !important;
  --pill-tag-shadow-hover: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.05) !important;
  --pill-tag-weight: 550 !important;
  --pmr-cal-td-padding: 4px 4px 6px 4px !important;
  --pmr-cal-td-radius: 5px !important;
  --popup-bg-blur: 3px !important;
  --pro-chbx-color: hsla(149, 36%, 47%, 1) !important;
  --progress-background: hsla(29, 16%, 13%, 1) !important;
  --progress-bar-outline: rgba(255, 255, 255, 0.1) !important;
  --progress-border-width: 1px !important;
  --progress-color-1: hsla(4, 88%, 61%, 1) !important;
  --progress-color-2: hsla(22, 82%, 47%, 1) !important;
  --progress-color-3: hsla(40, 78%, 48%, 1) !important;
  --progress-color-4: hsla(154, 75%, 26%, 1) !important;
  --progress-color-5: linear-gradient(45deg, hsla(4, 88%, 61%, 1), hsla(42, 79%, 51%, 1), hsla(194, 59%, 56%, 1)) !important;
  --progress-gradient-1: hsla(4, 88%, 61%, 1) !important;
  --progress-gradient-2: hsla(42, 79%, 51%, 1) !important;
  --progress-gradient-3: hsla(194, 59%, 56%, 1) !important;
  --progress-height: 8px !important;
  --progress-value-outline: rgba(255, 255, 255, 0.21) !important;
  --progress-value-radius: 8px !important;
  --progress-width: 220px !important;
  --prompt-background: hsla(30, 19%, 15%, 1) !important;
  --prompt-border-color: color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --prompt-input-background: hsla(30, 19%, 15%, 1) !important;
  --prompt-instructions-background: color-mix(in hsl, hsla(30, 19%, 15%, 1) 60%, hsla(29, 16%, 13%, 1)) !important;
  --prompt-results-background: hsla(30, 19%, 15%, 1) !important;
  --prompt-separator-border: 1px solid hsla(33, 20%, 17%, 1) !important;
  --prompt-suggestion-background-selected: rgba(0, 0, 0, 0.1) !important;
  --prompt-suggestion-color: hsla(35, 27%, 55%, 1) !important;
  --prompt-suggestion-color-selected: hsla(34, 39%, 74%, 1) !important;
  --prompt-suggestion-highlight-color: color-mix(in srgb, hsla(35, 27%, 55%, 1) 70%, white) !important;
  --prompt-suggestion-highlight-color-selected: hsla(34, 39%, 74%, 1) !important;
  --prompt-suggestion-shadow-selected: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.14),0px 2px 6px 0px rgba(0, 0, 0, 0.12) !important;
  --question-chbx-color: hsla(281, 37%, 54%, 1) !important;
  --question-chbx-icon-color: white !important;
  --quote-chbx-color: hsla(206, 47%, 48%, 1) !important;
  --quote-chbx-icon-color: white !important;
  --radius-xs: 2px !important;
  --raised-background: color-mix(in srgb, hsla(29, 16%, 13%, 1) 65%, transparent) linear-gradient(hsla(29, 16%, 13%, 1), color-mix(in srgb, hsla(29, 16%, 13%, 1) 65%, transparent)) !important;
  --resched-chbx-color: hsla(178, 19%, 55%, 1) !important;
  --ribbon-background: hsla(29, 16%, 13%, 1) !important;
  --ribbon-background-collapsed: hsla(30, 19%, 15%, 1) !important;
  --ribbon-border-width: 1px !important;
  --ribbon-icon: 15px !important;
  --ribbon-icon-spacing: 4px !important;
  --ribbon-margin-bottom: 10px !important;
  --ribbon-radius: 12px !important;
  --ribbon-slideout-background: hsla(30, 17%, 14%, 1) !important;
  --ribbon-slideout-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.35),0px 5px 5px -5px rgba(0, 0, 0, 0.38) !important;
  --sched-chbx-color: hsla(32, 10%, 58%, 1) !important;
  --scrollbar-active-thumb-bg: color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: hsla(28, 22%, 19%, 1) !important;
  --search-clear-button-color: color-mix(in srgb, hsla(33, 27%, 33%, 1) 30%, hsla(34, 24%, 46%, 1)) !important;
  --search-clear-button-color-hover: hsla(4, 88%, 61%, 1) !important;
  --search-clear-button-size: 12px !important;
  --search-icon-color: color-mix(in srgb, hsla(33, 27%, 33%, 1) 30%, hsla(34, 24%, 46%, 1)) !important;
  --search-icon-size: 14px !important;
  --search-result-background: hsla(30, 17%, 14%, 1) !important;
  --search-result-background-hover: color-mix(in srgb, hsla(24, 18%, 11%, 1) 50%, hsla(32, 21%, 9%, 1)) !important;
  --search-result-dest-file-bg: hsla(29, 16%, 13%, 1) !important;
  --search-result-dest-file-bg-hover: hsla(32, 21%, 9%, 1) !important;
  --search-result-dest-file-color: hsla(34, 24%, 46%, 1) !important;
  --search-result-dest-file-icon-color: hsla(31, 27%, 25%, 1) !important;
  --search-result-dest-file-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.25) !important;
  --search-result-dest-file-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.25),0px 2px 3px 0px rgba(0, 0, 0, 0.29) !important;
  --secondary: hsl(31, 27%, 24%) !important;
  --setting-group-heading-color: hsla(34, 39%, 74%, 1) !important;
  --setting-group-heading-weight: 650 !important;
  --setting-items-background: hsla(30, 17%, 14%, 1) !important;
  --setting-items-border-color: hsla(28, 22%, 19%, 1) !important;
  --settings-nav-group-title-color: hsla(33, 27%, 33%, 1) !important;
  --settings-nav-item-active-color: hsla(30, 19%, 15%, 1) !important;
  --settings-nav-item-bg-active: hsla(24, 18%, 11%, 1) !important;
  --settings-nav-item-bg-hover: transparent !important;
  --settings-nav-item-padding: 7px 12px 7px 12px !important;
  --settings-nav-item-padding-active: 6px 12px 8px 20px !important;
  --settings-nav-item-padding-hover: 7px 12px 7px 20px !important;
  --settings-nav-item-radius: 7px !important;
  --settings-nav-item-text-color: hsla(35, 27%, 55%, 1) !important;
  --settings-nav-item-text-color-active: hsla(31, 27%, 25%, 1) !important;
  --settings-nav-item-text-color-hover: hsla(34, 39%, 74%, 1) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.271),0px 6.3px 24.7px rgba(0, 0, 0, 0.312),0px 30px 90px rgba(0, 0, 0, 0.4) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.228),0px 3.4px 6.7px rgba(0, 0, 0, 0.242),0px 15px 30px rgba(0, 0, 0, 0.27) !important;
  --sidebar-nav-icon: 15px !important;
  --sidebar-tab-icon: 15px !important;
  --slider-thumb-bg: hsla(34, 39%, 74%, 1) !important;
  --slider-thumb-border-color: color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --slider-thumb-border-width: 0px !important;
  --slider-thumb-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.35),inset 0pc 1px 0px 1px rgba(255, 255, 255, 0.3),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.29),0px 1px 2px 0px rgba(0, 0, 0, 0.5) !important;
  --slider-thumb-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.35),inset 0pc 1px 0px 1px rgba(255, 255, 255, 0.3),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.29),0px 1px 2px 0px rgba(0, 0, 0, 0.5),0px 0px 0px 6px rgba(255, 255, 255, 0.08) !important;
  --slider-track-background: hsla(29, 16%, 13%, 1) !important;
  --slider-track-height: 5px !important;
  --slider-track-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.04) !important;
  --star-chbx-color: hsla(40, 95%, 46%, 1) !important;
  --star-chbx-icon-color: white !important;
  --status-bar-background: hsla(29, 16%, 13%, 1) !important;
  --status-bar-border-color: hsla(28, 22%, 19%, 1) !important;
  --status-bar-floating-bg: hsla(30, 17%, 14%, 1) !important;
  --status-bar-floating-offset: 4px !important;
  --status-bar-floating-opacity: 0.5 !important;
  --status-bar-floating-opacity-hover: 1 !important;
  --status-bar-floating-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.35),0px 5px 5px -5px rgba(0, 0, 0, 0.38) !important;
  --status-bar-item-bg-hover: transparent !important;
  --status-bar-item-clickable-bg-active: transparent !important;
  --status-bar-item-clickable-color-active: hsla(33, 27%, 33%, 1) !important;
  --status-bar-item-color: hsla(34, 24%, 46%, 1) !important;
  --status-bar-item-color-hover: hsla(34, 31%, 68%, 1) !important;
  --status-bar-text-color: hsla(35, 27%, 55%, 1) !important;
  --strikethrough-color: hsla(34, 24%, 46%, 1) !important;
  --strikethrough-highlight-bg: hsla(44, 100%, 50%, 0.2) !important;
  --strikethrough-highlight-color: hsla(34, 24%, 46%, 1) !important;
  --style-settings-container-bg: color-mix(in srgb, hsla(30, 17%, 14%, 1) 50%, transparent) !important;
  --suggestion-background: hsla(30, 19%, 15%, 1) !important;
  --swatch-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3) !important;
  --sync-avatar-color-1: rgb(192, 78, 78) !important;
  --sync-avatar-color-2: rgb(203, 128, 53) !important;
  --sync-avatar-color-3: rgb(225, 178, 67) !important;
  --sync-avatar-color-4: rgb(80, 196, 101) !important;
  --sync-avatar-color-5: rgb(70, 169, 180) !important;
  --sync-avatar-color-6: rgb(63, 137, 176) !important;
  --sync-avatar-color-7: rgb(113, 97, 194) !important;
  --sync-avatar-color-8: rgb(180, 100, 100) !important;
  --sync-icon-success: hsla(154, 75%, 26%, 1) !important;
  --sync-icon-success-active: hsla(33, 27%, 33%, 1) !important;
  --sync-icon-success-hover: hsla(155, 78%, 29%, 1) !important;
  --sync-icon-working: hsla(19, 81%, 41%, 1) !important;
  --sync-icon-working-active: hsla(33, 27%, 33%, 1) !important;
  --sync-icon-working-hover: hsla(22, 82%, 47%, 1) !important;
  --tab-active-bg: hsla(30, 19%, 15%, 1) !important;
  --tab-active-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1),inset 0px -2px 0px 1px rgba(0, 0, 0, 0.25),0px 1px 2px -0.1px rgba(0, 0, 0, 0.47) !important;
  --tab-background-active: hsla(30, 19%, 15%, 1) !important;
  --tab-bg: transparent !important;
  --tab-container-background: hsla(29, 16%, 13%, 1) !important;
  --tab-curves-display: none !important;
  --tab-divider-color: color-mix(in srgb, hsla(31, 27%, 25%, 1) 40%, hsla(28, 22%, 19%, 1)) !important;
  --tab-header-container-border-bottom: none !important;
  --tab-header-container-inner-margin: default !important;
  --tab-header-container-inner-padding: 2px !important;
  --tab-header-container-padding: 0 12px 4px 12px !important;
  --tab-header-container-transition: padding-bottom none !important;
  --tab-outline-color: transparent !important;
  --tab-stacked-header-width: 46px !important;
  --tab-stacked-shadow: -2.9px 0 10.5px -6.2px rgba(0, 0, 0, 0.31),-6.2px 0 3.6px -5.2px rgba(0, 0, 0, 0.27),-9.4px 0 8.4px -4.1px rgba(0, 0, 0, 0.2) !important;
  --tab-status-radius: 4px !important;
  --tab-switcher-background: hsla(29, 16%, 13%, 1) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(29, 16%, 13%, 1), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(31, 27%, 24%) !important;
  --tab-text-color: hsla(34, 24%, 46%, 1) !important;
  --tab-text-color-active: hsla(35, 27%, 55%, 1) !important;
  --tab-text-color-focused: hsla(35, 27%, 55%, 1) !important;
  --tab-text-color-focused-active: hsla(35, 27%, 55%, 1) !important;
  --tab-text-color-focused-active-current: hsla(34, 39%, 74%, 1) !important;
  --tab-text-color-focused-highlighted: hsl(31, 27%, 24%) !important;
  --tab-z-index: 1 !important;
  --table-add-button-border-color: hsla(28, 22%, 19%, 1) !important;
  --table-background: hsla(29, 16%, 13%, 1) !important;
  --table-border-color: hsla(28, 22%, 19%, 1) !important;
  --table-column-alt-background: hsla(24, 18%, 11%, 1) !important;
  --table-drag-handle-background-active: hsl( 28, 27.54%, 27.6% ) !important;
  --table-drag-handle-color: hsla(34, 24%, 46%, 1) !important;
  --table-drag-handle-color-active: hsla(32, 48%, 85%, 1) !important;
  --table-header-background: hsla(24, 18%, 11%, 1) !important;
  --table-header-background-hover: hsla(24, 18%, 11%, 1) !important;
  --table-header-border-color: hsla(28, 22%, 19%, 1) !important;
  --table-header-color: hsla(34, 39%, 74%, 1) !important;
  --table-header-weight: 650 !important;
  --table-row-alt-background: hsla(29, 16%, 13%, 1) !important;
  --table-row-alt-background-hover: hsla(29, 16%, 13%, 1) !important;
  --table-row-background-hover: hsla(29, 16%, 13%, 1) !important;
  --table-selection: hsla(31,27%,24%, 0.1) !important;
  --table-selection-border-color: hsl( 28, 27.54%, 27.6% ) !important;
  --tag-background: rgba(0, 0, 0, 0.3) !important;
  --tag-background-hover: rgba(0, 0, 0, 0.2) !important;
  --tag-border-color: rgba(0, 0, 0, 0.25) !important;
  --tag-border-color-hover: rgba(0, 0, 0, 0.35) !important;
  --tag-border-width: 1px !important;
  --tag-color: hsla(197, 48%, 49%, 1) !important;
  --tag-color-hover: hsla(194, 59%, 56%, 1) !important;
  --tag-padding-x: 0.6em !important;
  --tag-padding-y: 0.15em !important;
  --tag-radius: 1em !important;
  --tag-shadow: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.2) !important;
  --tag-shadow-active: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.2) !important;
  --tag-shadow-hover: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 3px rgba(0, 0, 0, 0.15) !important;
  --telephone-chbx-color: hsla(148, 48%, 42%, 1) !important;
  --tertiary: hsl( 26, 31.32%, 32.16% ) !important;
  --text-accent: hsl(31, 27%, 24%) !important;
  --text-accent-hover: hsl( 26, 31.32%, 32.16% ) !important;
  --text-error: hsla(4, 88%, 61%, 1) !important;
  --text-faint: hsla(34, 24%, 46%, 1) !important;
  --text-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0 !important;
  --text-highlight-bg: hsla(44, 100%, 50%, 0.2) !important;
  --text-highlight-bg-rgb: 249,207,81 !important;
  --text-input-bg-active: hsla(32, 21%, 9%, 1) !important;
  --text-input-border-color: hsla(32, 21%, 9%, 1) !important;
  --text-input-color: hsla(34, 39%, 74%, 1) !important;
  --text-input-color-focused: hsla(34, 39%, 74%, 1) !important;
  --text-input-shadow-active: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.03),inset 0px -1px 0px 0px rgba(0, 0, 0, 0.39),0px 1px 6px 0px rgba(0, 0, 0, 0.37) !important;
  --text-muted: hsla(35, 27%, 55%, 1) !important;
  --text-normal: hsla(34, 39%, 74%, 1) !important;
  --text-on-accent: hsla(32, 48%, 85%, 1) !important;
  --text-on-accent-inverted: hsla(32, 21%, 9%, 1) !important;
  --text-selection: hsla(34, 24%, 40%, 0.2) !important;
  --text-selection-theme-bg: color-mix(in srgb, hsla(34, 24%, 46%, 1) 30%, transparent) !important;
  --text-selection-theme-text-color: color-mix(in srgb, currentColor 70%, white) !important;
  --text-success: hsla(155, 78%, 29%, 1) !important;
  --text-warning: hsla(22, 82%, 47%, 1) !important;
  --textHighlight: hsla(44, 100%, 50%, 0.2) !important;
  --titleFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsla(29, 16%, 13%, 1) !important;
  --titlebar-background-focused: hsla(29, 16%, 13%, 1) !important;
  --titlebar-border-color: hsla(28, 22%, 19%, 1) !important;
  --titlebar-text-color: hsla(31, 27%, 25%, 1) !important;
  --titlebar-text-color-focused: hsla(33, 27%, 33%, 1) !important;
  --titlebar-text-weight: 450 !important;
  --toggle-bg: color-mix(in srgb, hsla(31, 27%, 25%, 1) 50%, hsla(33, 27%, 33%, 1)) !important;
  --toggle-bg-enabled: hsla(154, 75%, 26%, 1) !important;
  --toggle-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.19),inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),inset 0 0 1px rgba(0, 0, 0, 0.4) !important;
  --toggle-shadow-focus: inset 0 6px 20px rgba(0, 0, 0, 0.28),inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),inset 0 0 1px rgba(0, 0, 0, 0.44),0px 0px 0px 5px rgba(255, 255, 255, 0.08) !important;
  --toggle-shadow-hover: inset 0 6px 20px rgba(0, 0, 0, 0.28),inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),inset 0 0 1px rgba(0, 0, 0, 0.44) !important;
  --toggle-thumb-color: hsla(32, 48%, 85%, 1) !important;
  --toggle-thumb-shadow: inset 0px 1px 0px 1px rgba(255, 255, 255, 0.5),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25),0 2px 2px rgba(0, 0, 0, 0.35) !important;
  --tooltip-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.3),0px 2px 4px -1.4px rgba(0, 0, 0, 0.3),0px 3px 10px -1.7px rgba(0, 0, 0, 0.14) !important;
  --traffic-lights-offset-x: 46px !important;
  --traffic-lights-offset-y: 46px !important;
  --underline-color: hsla(34, 39%, 74%, 1) !important;
  --underline-decoration-color: color-mix(in srgb, currentColor 22%, transparent) !important;
  --underline-decoration-opacity: 22% !important;
  --up-chbx-color: hsla(146, 38%, 51%, 1) !important;
  --vault-name-background: hsla(30, 17%, 14%, 1) !important;
  --vault-name-border: 1px solid hsla(28, 22%, 19%, 1) !important;
  --vault-name-border-width: 1px !important;
  --vault-name-color: hsla(35, 27%, 55%, 1) !important;
  --vault-name-color-hover: hsla(34, 31%, 68%, 1) !important;
  --vault-profile-color: hsla(35, 27%, 55%, 1) !important;
  --vault-profile-color-hover: hsla(35, 27%, 55%, 1) !important;
  --vault-profile-font-weight: 650 !important;
  --yaml-atom-color: hsla(191, 54%, 62%, 1) !important;
  --yaml-base-color: hsla(4, 91%, 67%, 1) !important;
  --yaml-def-meta-color: hsla(34, 24%, 46%, 1) !important;
  --yaml-keyword-color: hsla(40, 78%, 48%, 1) !important;
  --yaml-number-color: hsla(4, 91%, 67%, 1) !important;
  --yaml-string-color: hsla(40, 78%, 48%, 1) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 33, 28);
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(38, 33, 28);
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(38, 33, 28);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(59, 48, 38);
  color: rgb(215, 192, 163);
  font-weight: 650;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: color(srgb 0.1938 0.16404 0.1302);
  border-color: rgb(59, 48, 38);
  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 2px 1px, rgba(0, 0, 0, 0.22) 0px 1px 4px -2.1px, rgba(0, 0, 0, 0.15) 0px 2px 8px -1.2px;
}

html[saved-theme="dark"] body .note-properties {
  background-color: color(srgb 0.17115 0.145 0.11885);
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
  background-color: rgba(255, 187, 0, 0.2);
  border-radius: 13.062px;
  color: rgb(229, 170, 31);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 33, 28);
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(38, 33, 28);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(46, 38, 31);
  color: rgb(215, 192, 163);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(243, 80, 68);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(243, 80, 68) none 0px;
  text-decoration-color: rgb(243, 80, 68);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(77, 178, 209);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(77, 178, 209) none 0px;
  text-decoration-color: rgb(77, 178, 209);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(77, 178, 209);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(77, 178, 209) none 0px;
  text-decoration-color: rgb(77, 178, 209);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(243, 80, 68);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(243, 80, 68) none 0px;
  text-decoration-color: rgb(243, 80, 68);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 187, 0, 0.2);
  color: rgb(215, 192, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(215, 192, 163) none 0px;
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body del {
  color: rgb(145, 121, 89);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(145, 121, 89) none 0px;
  text-decoration-color: rgb(145, 121, 89);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(42, 36, 30);
  border-color: rgb(81, 64, 47);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(17, 116, 73);
  border-color: rgba(255, 255, 255, 0.15);
}

html[saved-theme="dark"] body p {
  color: rgb(171, 145, 109);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(171, 145, 109) none 0px;
  text-decoration-color: rgb(171, 145, 109);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(46, 168, 115);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(46, 168, 115) none 0px;
  text-decoration: underline 1.5px color(srgb 0.1806 0.6594 0.45192 / 0.22);
  text-decoration-color: color(srgb 0.1806 0.6594 0.45192 / 0.22);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(229, 170, 31);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(229, 170, 31) none 0px;
  text-decoration: underline 1.5px color(srgb 0.8971 0.66484 0.1229 / 0.22);
  text-decoration-color: color(srgb 0.8971 0.66484 0.1229 / 0.22);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(145, 121, 89);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(145, 121, 89) none 0px;
  text-decoration: underline 1.5px color(srgb 0.5704 0.47472 0.3496 / 0.22);
  text-decoration-color: color(srgb 0.5704 0.47472 0.3496 / 0.22);
  text-decoration-thickness: 1.5px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body dt {
  color: rgb(215, 192, 163);
  font-weight: 450;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
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
  color: rgb(145, 121, 89);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(38, 33, 28);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  width: 594px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(38, 33, 28);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(38, 33, 28);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(59, 48, 38);
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  color: rgb(215, 192, 163);
  font-weight: 450;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(59, 48, 38);
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  color: rgb(215, 192, 163);
  font-weight: 650;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(33, 27, 23);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(215, 192, 163);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
  font-family: "??", "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(42, 36, 30);
  border-bottom-color: rgb(59, 48, 38);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(42, 36, 30);
  border-bottom-color: rgb(59, 48, 38);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(225, 178, 67);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(225, 178, 67);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(225, 178, 67);
  border-left-color: rgb(225, 178, 67);
  border-right-color: rgb(225, 178, 67);
  border-top-color: rgb(225, 178, 67);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(42, 36, 30);
  border-bottom-color: rgb(59, 48, 38);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(42, 36, 30);
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
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
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
  background-color: rgb(42, 36, 30);
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(215, 192, 163);
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .transclude {
  background-color: color(srgb 0.17115 0.145 0.11885);
  border-bottom-color: rgb(59, 48, 38);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(59, 48, 38);
  border-left-width: 1px;
  border-right-color: rgb(59, 48, 38);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(59, 48, 38);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: color(srgb 0.17115 0.145 0.11885);
  border-bottom-color: rgb(215, 192, 163);
  border-bottom-style: solid;
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-right-style: solid;
  border-top-color: rgb(215, 192, 163);
  border-top-style: solid;
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
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(215, 192, 163);
  font-weight: 650;
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: color(srgb 0.17115 0.145 0.11885);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 34,152,225;
  background-color: color(srgb 0.163821 0.294975 0.368777);
  border-bottom-color: rgba(34, 152, 225, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(34, 152, 225, 0.1);
  border-right-color: rgba(34, 152, 225, 0.1);
  border-top-color: rgba(34, 152, 225, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 153,93,133;
  background-color: color(srgb 0.315488 0.219779 0.251522);
  border-bottom-color: rgba(153, 93, 133, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(153, 93, 133, 0.1);
  border-right-color: rgba(153, 93, 133, 0.1);
  border-top-color: rgba(153, 93, 133, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 226,72,86;
  background-color: color(srgb 0.408527 0.193015 0.19162);
  border-bottom-color: rgba(226, 72, 86, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(226, 72, 86, 0.1);
  border-right-color: rgba(226, 72, 86, 0.1);
  border-top-color: rgba(226, 72, 86, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 216,141,130;
  background-color: color(srgb 0.395782 0.280956 0.247699);
  border-bottom-color: rgba(216, 141, 130, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(216, 141, 130, 0.1);
  border-right-color: rgba(216, 141, 130, 0.1);
  border-top-color: rgba(216, 141, 130, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 226,72,86;
  background-color: color(srgb 0.408527 0.193015 0.19162);
  border-bottom-color: rgba(226, 72, 86, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(226, 72, 86, 0.1);
  border-right-color: rgba(226, 72, 86, 0.1);
  border-top-color: rgba(226, 72, 86, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 71,162,187;
  background-color: color(srgb 0.210978 0.307721 0.320346);
  border-bottom-color: rgba(71, 162, 187, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(71, 162, 187, 0.1);
  border-right-color: rgba(71, 162, 187, 0.1);
  border-top-color: rgba(71, 162, 187, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 200,175,155;
  background-color: color(srgb 0.375389 0.324289 0.279562);
  border-bottom-color: rgba(200, 175, 155, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(200, 175, 155, 0.1);
  border-right-color: rgba(200, 175, 155, 0.1);
  border-top-color: rgba(200, 175, 155, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 130,190,235;
  background-color: color(srgb 0.286174 0.343407 0.381522);
  border-bottom-color: rgba(130, 190, 235, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(130, 190, 235, 0.1);
  border-right-color: rgba(130, 190, 235, 0.1);
  border-top-color: rgba(130, 190, 235, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 173,214,171;
  background-color: color(srgb 0.340978 0.373995 0.299954);
  border-bottom-color: rgba(173, 214, 171, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(173, 214, 171, 0.1);
  border-right-color: rgba(173, 214, 171, 0.1);
  border-top-color: rgba(173, 214, 171, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 87,200,83;
  background-color: color(srgb 0.23137 0.356152 0.187797);
  border-bottom-color: rgba(87, 200, 83, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(87, 200, 83, 0.1);
  border-right-color: rgba(87, 200, 83, 0.1);
  border-top-color: rgba(87, 200, 83, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 70,206,185;
  background-color: color(srgb 0.209703 0.363799 0.317797);
  border-bottom-color: rgba(70, 206, 185, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(70, 206, 185, 0.1);
  border-right-color: rgba(70, 206, 185, 0.1);
  border-top-color: rgba(70, 206, 185, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 58,173,252;
  background-color: color(srgb 0.194409 0.32174 0.403189);
  border-bottom-color: rgba(58, 173, 252, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(58, 173, 252, 0.1);
  border-right-color: rgba(58, 173, 252, 0.1);
  border-top-color: rgba(58, 173, 252, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255,161,32;
  background-color: color(srgb 0.445487 0.306446 0.122797);
  border-bottom-color: rgba(255, 161, 32, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 161, 32, 0.1);
  border-right-color: rgba(255, 161, 32, 0.1);
  border-top-color: rgba(255, 161, 32, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z'/%3E%3Cpath d='M15 3v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M8 13h.01'/%3E%3Cpath d='M16 13h.01'/%3E%3Cpath d='M10 16s.8 1 2 1c1.3 0 2-1 2-1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v4'/%3E%3Cpath d='m16.2 7.8 2.9-2.9'/%3E%3Cpath d='M18 12h4'/%3E%3Cpath d='m16.2 16.2 2.9 2.9'/%3E%3Cpath d='M12 18v4'/%3E%3Cpath d='m4.9 19.1 2.9-2.9'/%3E%3Cpath d='M2 12h4'/%3E%3Cpath d='m4.9 4.9 2.9 2.9'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'/%3E%3Cpath d='M12 8v4'/%3E%3Cpath d='M12 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 12h-5'/%3E%3Cpath d='M15 8h-5'/%3E%3Cpath d='M19 17V5a2 2 0 0 0-2-2H4'/%3E%3Cpath d='M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cline x1='9' x2='15' y1='15' y2='9'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'/%3E%3Cline x1='12' x2='12' y1='16' y2='12'/%3E%3Cline x1='12' x2='12.01' y1='8' y2='8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z'/%3E%3Cpath d='M15 3v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M8 13h.01'/%3E%3Cpath d='M16 13h.01'/%3E%3Cpath d='M10 16s.8 1 2 1c1.3 0 2-1 2-1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 7 17l-5-5'/%3E%3Cpath d='m22 10-7.5 7.5L13 16'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16.17 7.83 2 22'/%3E%3Cpath d='M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12'/%3E%3Cpath d='m7.83 7.83 8.34 8.34'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 5h8'/%3E%3Cpath d='M13 12h8'/%3E%3Cpath d='M13 19h8'/%3E%3Cpath d='m3 17 2 2 4-4'/%3E%3Crect x='3' y='4' width='6' height='6' rx='1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
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
  color: rgb(215, 192, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(46, 38, 31);
  border-bottom-color: color(srgb 0.26608 0.213228 0.16192);
  border-left-color: color(srgb 0.26608 0.213228 0.16192);
  border-right-color: color(srgb 0.26608 0.213228 0.16192);
  border-top-color: color(srgb 0.26608 0.213228 0.16192);
  box-shadow: rgba(0, 0, 0, 0.27) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.314) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.4) 0px 30px 90px 0px;
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
  color: rgb(215, 192, 163);
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
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.1);
  color: rgb(215, 192, 163);
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
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgb(215, 192, 163);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(255, 187, 0, 0.2);
  border-bottom-color: rgb(229, 170, 31);
  border-bottom-left-radius: 13.062px;
  border-bottom-right-radius: 13.062px;
  border-left-color: rgb(229, 170, 31);
  border-right-color: rgb(229, 170, 31);
  border-top-color: rgb(229, 170, 31);
  border-top-left-radius: 13.062px;
  border-top-right-radius: 13.062px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 550;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(229, 170, 31);
}

html[saved-theme="dark"] body h1 {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 200,175,155;
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
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(46, 38, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 38, 31);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(46, 38, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 38, 31);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(46, 38, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 38, 31);
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 38, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 38, 31);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 38, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 38, 31);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(46, 38, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 38, 31);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(171, 145, 109);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(171, 145, 109);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(59, 48, 38);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 450;
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
  color: color(srgb 0.52501 0.433977 0.31699);
  cursor: pointer;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(38, 33, 28);
  border-bottom-color: rgb(59, 48, 38);
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  color: rgb(171, 145, 109);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(145, 121, 89);
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
  color: rgb(171, 145, 109);
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
  color: rgb(171, 145, 109);
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
  color: color(srgb 0.52501 0.433977 0.31699);
  cursor: pointer;
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
  color: rgb(145, 121, 89);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(59, 48, 38);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .metadata {
  background-color: color(srgb 0.17115 0.145 0.11885);
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
  color: rgb(171, 145, 109);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(38, 33, 28);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(171, 145, 109);
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
  color: rgb(145, 121, 89);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(42, 36, 30);
  border-bottom-color: rgb(247, 104, 94);
  border-left-color: rgb(247, 104, 94);
  border-right-color: rgb(247, 104, 94);
  border-top-color: rgb(247, 104, 94);
  box-shadow: rgba(0, 0, 0, 0.17) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.2) 0px -2px 0px 0px inset;
  color: rgb(247, 104, 94);
  font-family: "??", "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
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
  background-color: rgba(0, 0, 0, 0.3);
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
  color: rgb(65, 151, 185);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 31 !important;
  --accent-l: 50% !important;
  --accent-s: 23% !important;
  --active-line-bg: hsla(36, 38%, 98%, 1) !important;
  --alternating-color-1: hsla(40, 79%, 47%, 1) !important;
  --alternating-color-1-hover-active: hsla(40, 98%, 36%, 1) !important;
  --alternating-color-2: hsla(4, 56%, 48%, 1) !important;
  --alternating-color-2-hover-active: hsla(4, 72%, 35%, 1) !important;
  --alternating-color-3: hsla(200, 64%, 37%, 1) !important;
  --alternating-color-3-hover-active: hsla(205, 85%, 25%, 1) !important;
  --amount-chbx-color: hsla(152, 42%, 41%, 1) !important;
  --amount-chbx-icon-color: white !important;
  --amount-chbx-radius: 100% !important;
  --anim-popdown: 0.4s slideDown forwards !important;
  --anim-popup: 0.3s slideUp forwards !important;
  --anim-popup-alt: 0.335s slideUpAlt forwards !important;
  --background-anim: background 140ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --background-modifier-active-hover: hsla(37, 38%, 83%, 1) !important;
  --background-modifier-border: hsla(37, 38%, 83%, 1) !important;
  --background-modifier-border-focus: color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --background-modifier-border-hover: color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --background-modifier-error: hsla(4, 56%, 48%, 1) !important;
  --background-modifier-error-hover: hsla(4, 72%, 55%, 1) !important;
  --background-modifier-error-rgb: 223,90,90 !important;
  --background-modifier-form-field: hsla(35, 37%, 92%, 1) !important;
  --background-modifier-form-field-hover: hsla(35, 37%, 92%, 1) !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.5) !important;
  --background-modifier-message: hsla(35, 28%, 40%, 1) !important;
  --background-modifier-success: hsla(149, 50%, 39%, 1) !important;
  --background-modifier-success-rgb: 87,185,132 !important;
  --background-modifier-warning: hsla(18, 69%, 50%, 1) !important;
  --background-modifier-warning-hover: hsla(21, 81%, 59%, 1) !important;
  --background-primary: hsla(35, 36%, 96%, 1) !important;
  --background-primary-alt: hsla(35, 37%, 92%, 1) !important;
  --background-secondary: hsla(34, 34%, 90%, 1) !important;
  --background-secondary-alt: hsla(34, 34%, 90%, 1) !important;
  --bases-cards-background: hsla(35, 36%, 96%, 1) !important;
  --bases-cards-cover-background: hsla(35, 37%, 92%, 1) !important;
  --bases-cards-shadow: 0 0 0 1px hsla(37, 38%, 83%, 1) !important;
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --bases-embed-border-color: hsla(37, 38%, 83%, 1) !important;
  --bases-group-heading-property-color: hsla(35, 28%, 40%, 1) !important;
  --bases-group-heading-property-weight: 450 !important;
  --bases-group-heading-value-weight: 650 !important;
  --bases-table-border-color: hsla(37, 38%, 83%, 1) !important;
  --bases-table-cell-background-active: hsla(35, 36%, 96%, 1) !important;
  --bases-table-cell-background-disabled: hsla(35, 37%, 92%, 1) !important;
  --bases-table-cell-background-selected: hsla(31,23%,50%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl( 30, 23.23%, 53.75% ) !important;
  --bases-table-group-background: hsla(35, 37%, 92%, 1) !important;
  --bases-table-header-background: hsla(35, 36%, 96%, 1) !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.5) !important;
  --bases-table-header-color: hsla(35, 28%, 40%, 1) !important;
  --bases-table-header-weight: 450 !important;
  --bases-table-row-background-hover: hsla(36, 38%, 98%, 1) !important;
  --bases-table-summary-background: hsla(35, 36%, 96%, 1) !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.5) !important;
  --blockquote-background-color: hsla(36, 38%, 98%, 1) !important;
  --blockquote-border-color: hsla(37, 38%, 83%, 1) !important;
  --blur-background: color-mix(in srgb, hsla(35, 36%, 96%, 1) 65%, transparent) linear-gradient(hsla(35, 36%, 96%, 1), color-mix(in srgb, hsla(35, 36%, 96%, 1) 65%, transparent)) !important;
  --bodyFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsla(4, 56%, 48%, 1) !important;
  --bold-highlight-bg: hsla(350, 84%, 63%, 0.2) !important;
  --bold-highlight-color: hsla(31, 45%, 24%, 1) !important;
  --bold-italic-color: hsla(33, 54%, 17%, 1) !important;
  --bold-italic-highlight-bg: hsla(74, 69%, 44%, 0.2) !important;
  --bold-italic-highlight-color: hsla(33, 54%, 17%, 1) !important;
  --bold-italic-strikethrough-color: hsla(31, 23%, 50%, 1) !important;
  --bold-italic-weight: 750 !important;
  --bold-weight: 750 !important;
  --bookmark-chbx-color: hsla(21, 81%, 59%, 1) !important;
  --bookmark-folder-1-bg-color: color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) !important;
  --bookmark-folder-1-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-1-collapse-color: color-mix(in srgb, hsla(4, 56%, 48%, 1) 50%, transparent) !important;
  --bookmark-folder-1-color: hsla(4, 56%, 48%, 1) !important;
  --bookmark-folder-1-indent-color: color-mix(in srgb, hsla(4, 56%, 48%, 1) 25%, transparent) !important;
  --bookmark-folder-10-bg-color: color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) !important;
  --bookmark-folder-10-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-10-collapse-color: color-mix(in srgb, hsla(153, 65%, 29%, 1) 50%, transparent) !important;
  --bookmark-folder-10-color: hsla(153, 65%, 29%, 1) !important;
  --bookmark-folder-10-indent-color: color-mix(in srgb, hsla(153, 65%, 29%, 1) 25%, transparent) !important;
  --bookmark-folder-11-bg-color: color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) !important;
  --bookmark-folder-11-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-11-collapse-color: color-mix(in srgb, hsla(200, 64%, 37%, 1) 50%, transparent) !important;
  --bookmark-folder-11-color: hsla(200, 64%, 37%, 1) !important;
  --bookmark-folder-11-indent-color: color-mix(in srgb, hsla(200, 64%, 37%, 1) 25%, transparent) !important;
  --bookmark-folder-12-bg-color: color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) !important;
  --bookmark-folder-12-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-12-collapse-color: color-mix(in srgb, hsla(275, 37%, 43%, 1) 50%, transparent) !important;
  --bookmark-folder-12-color: hsla(275, 37%, 43%, 1) !important;
  --bookmark-folder-12-indent-color: color-mix(in srgb, hsla(275, 37%, 43%, 1) 25%, transparent) !important;
  --bookmark-folder-2-bg-color: color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) !important;
  --bookmark-folder-2-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-2-collapse-color: color-mix(in srgb, hsla(18, 69%, 50%, 1) 50%, transparent) !important;
  --bookmark-folder-2-color: hsla(18, 69%, 50%, 1) !important;
  --bookmark-folder-2-indent-color: color-mix(in srgb, hsla(18, 69%, 50%, 1) 25%, transparent) !important;
  --bookmark-folder-3-bg-color: color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) !important;
  --bookmark-folder-3-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-3-collapse-color: color-mix(in srgb, hsla(40, 98%, 36%, 1) 50%, transparent) !important;
  --bookmark-folder-3-color: hsla(40, 98%, 36%, 1) !important;
  --bookmark-folder-3-indent-color: color-mix(in srgb, hsla(40, 98%, 36%, 1) 25%, transparent) !important;
  --bookmark-folder-4-bg-color: color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) !important;
  --bookmark-folder-4-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-4-collapse-color: color-mix(in srgb, hsla(153, 65%, 29%, 1) 50%, transparent) !important;
  --bookmark-folder-4-color: hsla(153, 65%, 29%, 1) !important;
  --bookmark-folder-4-indent-color: color-mix(in srgb, hsla(153, 65%, 29%, 1) 25%, transparent) !important;
  --bookmark-folder-5-bg-color: color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) !important;
  --bookmark-folder-5-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-5-collapse-color: color-mix(in srgb, hsla(200, 64%, 37%, 1) 50%, transparent) !important;
  --bookmark-folder-5-color: hsla(200, 64%, 37%, 1) !important;
  --bookmark-folder-5-indent-color: color-mix(in srgb, hsla(200, 64%, 37%, 1) 25%, transparent) !important;
  --bookmark-folder-6-bg-color: color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) !important;
  --bookmark-folder-6-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-6-collapse-color: color-mix(in srgb, hsla(275, 37%, 43%, 1) 50%, transparent) !important;
  --bookmark-folder-6-color: hsla(275, 37%, 43%, 1) !important;
  --bookmark-folder-6-indent-color: color-mix(in srgb, hsla(275, 37%, 43%, 1) 25%, transparent) !important;
  --bookmark-folder-7-bg-color: color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) !important;
  --bookmark-folder-7-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-7-collapse-color: color-mix(in srgb, hsla(4, 56%, 48%, 1) 50%, transparent) !important;
  --bookmark-folder-7-color: hsla(4, 56%, 48%, 1) !important;
  --bookmark-folder-7-indent-color: color-mix(in srgb, hsla(4, 56%, 48%, 1) 25%, transparent) !important;
  --bookmark-folder-8-bg-color: color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) !important;
  --bookmark-folder-8-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-8-collapse-color: color-mix(in srgb, hsla(18, 69%, 50%, 1) 50%, transparent) !important;
  --bookmark-folder-8-color: hsla(18, 69%, 50%, 1) !important;
  --bookmark-folder-8-indent-color: color-mix(in srgb, hsla(18, 69%, 50%, 1) 25%, transparent) !important;
  --bookmark-folder-9-bg-color: color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) !important;
  --bookmark-folder-9-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-9-collapse-color: color-mix(in srgb, hsla(40, 98%, 36%, 1) 50%, transparent) !important;
  --bookmark-folder-9-color: hsla(40, 98%, 36%, 1) !important;
  --bookmark-folder-9-indent-color: color-mix(in srgb, hsla(40, 98%, 36%, 1) 25%, transparent) !important;
  --breadcrumb-bg-hover: hsla(34, 34%, 90%, 1) !important;
  --breadcrumb-color: hsla(31, 23%, 50%, 1) !important;
  --breadcrumb-color-hover: hsla(31, 23%, 50%, 1) !important;
  --breadcrumb-separator-color: hsla(37, 38%, 83%, 1) !important;
  --button-accent-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.09),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.15),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.22),0px 2px 4px -1px rgba(0, 0, 0, 0.19) !important;
  --button-accent-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.09),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.6) !important;
  --button-accent-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.28),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.15),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 6px -1px rgba(0, 0, 0, 0.24),0px 0px 0px 3px hsla(34, 37%, 70%, 0.15) !important;
  --button-accent-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.19),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.15),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 6px -1px rgba(0, 0, 0, 0.24) !important;
  --button-anim: 140ms cubic-bezier(0.68, -0.55, 0.27, 1.55) !important;
  --button-axis-offset: 2px !important;
  --button-inset-shadow-size: 2px !important;
  --button-metadata-padding: 6px 8px 8px 6px !important;
  --button-metadata-padding-active: 6px 8px 6px 6px !important;
  --button-opacity-active: 0.5 !important;
  --button-padding: 8px 12px 10px 12px !important;
  --button-padding-active: 10px 12px 8px 12px !important;
  --button-radius: 8px !important;
  --button-s-padding: 4px 8px 4px 8px !important;
  --button-s-radius: 6.4px !important;
  --button-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.1),0px 2px 4px -1px rgba(0, 0, 0, 0.05) !important;
  --button-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.09),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.6) !important;
  --button-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.1),0px 2px 4px -1px rgba(0, 0, 0, 0.05),0px 0px 0px 3px hsla(34, 37%, 70%, 0.15) !important;
  --button-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.15),0px 2px 6px -1px rgba(0, 0, 0, 0.1) !important;
  --callout-border-opacity: 0.2;
  --callout-bug: 223,90,90;
  --callout-color-opacity: 32.5%;
  --callout-container-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08),0px 1px 6px 0px rgba(0, 0, 0, 0.12);
  --callout-content-background: color-mix( in srgb, hsla(35, 37%, 92%, 1) 50%, hsla(35, 36%, 96%, 1) );
  --callout-content-padding: 4px 16px 8px 16px;
  --callout-content-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08),inset 0px -4px 3px 0px rgba(100, 100, 100, 0.13);
  --callout-content-shadow-blur: 3px;
  --callout-default: 99,164,198;
  --callout-error: 223,90,90;
  --callout-example: 135,106,193;
  --callout-fail: 223,90,90;
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
  --callout-important: 124,180,206;
  --callout-info: 99,164,198;
  --callout-question: 231,130,63;
  --callout-radius: 8px;
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
  --callout-success: 87,185,132;
  --callout-summary: 124,180,206;
  --callout-tip: 124,180,206;
  --callout-title-color: hsla(31, 45%, 24%, 1);
  --callout-title-padding: 12px 16px;
  --callout-title-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 1px 0px rgba(255, 255, 255, 0.2);
  --callout-title-weight: 650;
  --callout-todo: 99,164,198;
  --callout-warning: 231,130,63;
  --cancelled-chbx-color: hsla(32, 10%, 68%, 1) !important;
  --cancelled-chbx-text-color: hsla(34, 29%, 60%, 1) !important;
  --cancelled-chbx-text-decoration: line-through !important;
  --canvas-background: hsla(35, 36%, 96%, 1) !important;
  --canvas-card-label-color: hsla(34, 29%, 60%, 1) !important;
  --canvas-color: 182,175,166 !important;
  --canvas-color-1: 223,90,90 !important;
  --canvas-color-2: 231,130,63 !important;
  --canvas-color-3: 248,197,46 !important;
  --canvas-color-4: 87,185,132 !important;
  --canvas-color-5: 99,164,198 !important;
  --canvas-color-6: 135,106,193 !important;
  --canvas-controls-icon-size: 15px !important;
  --canvas-dot-pattern: hsla(37, 38%, 83%, 1) !important;
  --canvas-icon-color: hsla(34, 29%, 60%, 1) !important;
  --canvas-icon-color-disabled: hsla(37, 38%, 83%, 1) !important;
  --canvas-icon-color-hover: hsla(36, 32%, 30%, 1) !important;
  --canvas-menu-bg: color-mix(in hsl, hsla(36, 38%, 98%, 1) 50%, hsla(35, 36%, 96%, 1)) !important;
  --canvas-menu-bg-hover: hsla(36, 38%, 98%, 1) !important;
  --canvas-menu-border: 1px solid hsla(37, 38%, 83%, 1) !important;
  --canvas-menu-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.02),0px 1px 4px -2.1px rgba(0, 0, 0, 0.1),0px 2px 8px -1.2px rgba(0, 0, 0, 0.03) !important;
  --caret-color: hsla(34, 29%, 60%, 1) !important;
  --checkbox-border-color: hsla(37, 38%, 83%, 1) !important;
  --checkbox-border-color-hover: hsla(34, 37%, 70%, 1) !important;
  --checkbox-color: hsla(149, 50%, 39%, 1) !important;
  --checkbox-color-hover: hsla(148, 48%, 47%, 1) !important;
  --checkbox-marker-color: white !important;
  --checked-border-color: rgba(0, 0, 0, 0.15) !important;
  --checked-border-color-hover: rgba(0, 0, 0, 0.1) !important;
  --checklist-bg: hsla(36, 38%, 98%, 1) !important;
  --checklist-done-color: hsla(34, 29%, 60%, 1) !important;
  --checklist-shadow-hover: 0px 0px 0px 3px rgba(0, 0, 0, 0.07) !important;
  --clickable-icon-radius: 5px !important;
  --clock-chbx-color: hsla(210, 39%, 49%, 1) !important;
  --close-button-radius: 12px !important;
  --code-background: hsla(35, 37%, 92%, 1) !important;
  --code-border-color: hsla(37, 38%, 83%, 1) !important;
  --code-bracket-background: rgba(255, 255, 255, 0.5) !important;
  --code-comment: hsla(34, 29%, 60%, 1) !important;
  --code-function: hsla(42, 89%, 46%, 1) !important;
  --code-important: hsla(30, 66%, 52%, 1) !important;
  --code-keyword: hsla(351, 44%, 61%, 1) !important;
  --code-normal: hsla(31, 45%, 24%, 1) !important;
  --code-operator: hsla(0, 58%, 53%, 1) !important;
  --code-property: hsla(178, 39%, 49%, 1) !important;
  --code-punctuation: hsla(35, 28%, 40%, 1) !important;
  --code-radius: 8px !important;
  --code-string: hsla(146, 37%, 49%, 1) !important;
  --code-tag: hsla(0, 58%, 53%, 1) !important;
  --code-value: hsla(249, 39%, 60%, 1) !important;
  --codeFont: "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsla(34, 37%, 70%, 1) !important;
  --collapse-icon-color-collapsed: hsla(34, 37%, 70%, 1) !important;
  --color-accent: hsl(31, 23%, 50%) !important;
  --color-accent-1: hsl( 30, 23.23%, 53.75% ) !important;
  --color-accent-2: hsl( 28, 30.59%, 59.5% ) !important;
  --color-accent-hsl: 31,23%,50% !important;
  --color-base-00: hsla(36, 38%, 98%, 1) !important;
  --color-base-05: hsla(35, 36%, 96%, 1) !important;
  --color-base-10: hsla(35, 37%, 92%, 1) !important;
  --color-base-100: hsla(33, 54%, 17%, 1) !important;
  --color-base-20: hsla(34, 34%, 90%, 1) !important;
  --color-base-25: hsla(36, 35%, 88%, 1) !important;
  --color-base-30: hsla(37, 38%, 83%, 1) !important;
  --color-base-35: hsla(34, 37%, 70%, 1) !important;
  --color-base-40: hsla(34, 29%, 60%, 1) !important;
  --color-base-50: hsla(31, 23%, 50%, 1) !important;
  --color-base-60: hsla(35, 28%, 40%, 1) !important;
  --color-base-70: hsla(36, 32%, 30%, 1) !important;
  --color-blue: hsla(206, 57%, 44%, 1) !important;
  --color-blue-rgb: 99,164,198 !important;
  --color-cyan: hsla(178, 39%, 49%, 1) !important;
  --color-cyan-rgb: 124,180,206 !important;
  --color-gray: hsla(34, 9.9%, 68.2%, 1) !important;
  --color-gray-rgb: 182,175,166 !important;
  --color-green: hsla(146, 37%, 49%, 1) !important;
  --color-green-rgb: 87,185,132 !important;
  --color-l-alpha-blue: hsla(186, 64%, 46%, 0.2) !important;
  --color-l-alpha-gray: hsla(34, 37%, 70%, 0.15) !important;
  --color-l-alpha-green: hsla(74, 69%, 44%, 0.2) !important;
  --color-l-alpha-orange: hsla(27, 100%, 50%, 0.2) !important;
  --color-l-alpha-purple: hsla(236, 100%, 72%, 0.2) !important;
  --color-l-alpha-red: hsla(350, 84%, 63%, 0.2) !important;
  --color-l-alpha-yellow: hsla(44, 100%, 50%, 0.2) !important;
  --color-l-blue-10: hsla(197, 39%, 56%, 1) !important;
  --color-l-blue-20: hsla(202, 66%, 48%, 1) !important;
  --color-l-blue-30: hsla(200, 64%, 37%, 1) !important;
  --color-l-blue-40: hsla(205, 85%, 25%, 1) !important;
  --color-l-gray-10: hsla(36, 38%, 98%, 1) !important;
  --color-l-gray-100: hsla(35, 28%, 40%, 1) !important;
  --color-l-gray-110: hsla(34, 30%, 37%, 1) !important;
  --color-l-gray-120: hsla(36, 32%, 30%, 1) !important;
  --color-l-gray-130: hsla(31, 45%, 24%, 1) !important;
  --color-l-gray-140: hsla(33, 54%, 17%, 1) !important;
  --color-l-gray-20: hsla(35, 36%, 96%, 1) !important;
  --color-l-gray-30: hsla(35, 37%, 92%, 1) !important;
  --color-l-gray-40: hsla(34, 34%, 90%, 1) !important;
  --color-l-gray-50: hsla(36, 35%, 88%, 1) !important;
  --color-l-gray-60: hsla(37, 38%, 83%, 1) !important;
  --color-l-gray-70: hsla(34, 37%, 70%, 1) !important;
  --color-l-gray-80: hsla(34, 29%, 60%, 1) !important;
  --color-l-gray-90: hsla(31, 23%, 50%, 1) !important;
  --color-l-green-10: hsla(148, 30%, 65%, 1) !important;
  --color-l-green-20: hsla(148, 48%, 47%, 1) !important;
  --color-l-green-30: hsla(149, 50%, 39%, 1) !important;
  --color-l-green-40: hsla(153, 65%, 29%, 1) !important;
  --color-l-orange-10: hsla(26, 70%, 63%, 1) !important;
  --color-l-orange-20: hsla(21, 81%, 59%, 1) !important;
  --color-l-orange-30: hsla(18, 69%, 50%, 1) !important;
  --color-l-orange-40: hsla(18, 96%, 35%, 1) !important;
  --color-l-purple-10: hsla(280, 43%, 76%, 1) !important;
  --color-l-purple-20: hsla(277, 35%, 59%, 1) !important;
  --color-l-purple-30: hsla(275, 37%, 43%, 1) !important;
  --color-l-purple-40: hsla(265, 70%, 30%, 1) !important;
  --color-l-red-10: hsla(4, 59%, 64%, 1) !important;
  --color-l-red-20: hsla(4, 72%, 55%, 1) !important;
  --color-l-red-30: hsla(4, 56%, 48%, 1) !important;
  --color-l-red-40: hsla(4, 72%, 35%, 1) !important;
  --color-l-yellow-10: hsla(43, 71%, 67%, 1) !important;
  --color-l-yellow-20: hsla(43, 83%, 57%, 1) !important;
  --color-l-yellow-30: hsla(40, 79%, 47%, 1) !important;
  --color-l-yellow-40: hsla(40, 98%, 36%, 1) !important;
  --color-orange: hsla(30, 66%, 52%, 1) !important;
  --color-orange-rgb: 231,130,63 !important;
  --color-pink: hsla(351, 44%, 61%, 1) !important;
  --color-pink-rgb: 217,102,122 !important;
  --color-purple: hsla(249, 39%, 60%, 1) !important;
  --color-purple-rgb: 135,106,193 !important;
  --color-red: hsla(0, 58%, 53%, 1) !important;
  --color-red-rgb: 223,90,90 !important;
  --color-yellow: hsla(42, 89%, 46%, 1) !important;
  --color-yellow-rgb: 248,197,46 !important;
  --community-item-flair-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1) !important;
  --community-item-selected-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.23),0px 1px 3px -2.6px rgba(0, 0, 0, 0.23),0px 2px 6px -4.2px rgba(0, 0, 0, 0.19),0px 4px 12px -6px rgba(0, 0, 0, 0.9) !important;
  --community-item-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08) !important;
  --community-item-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2) !important;
  --component-font-weight: 550 !important;
  --con-chbx-color: hsla(12, 62%, 45%, 1) !important;
  --copy-code-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.09),0px 2px 4px -2px rgba(0, 0, 0, 0.06) !important;
  --copy-code-button-radius: 4px !important;
  --cursor: pointer !important;
  --dark: hsla(31, 45%, 24%, 1) !important;
  --darkgray: hsla(31, 45%, 24%, 1) !important;
  --disabled-component-opacity: 0.3 !important;
  --divider-color: hsla(37, 38%, 83%, 1) !important;
  --divider-color-hover: color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --divider-radius: 8px !important;
  --divider-width-hover: 4px !important;
  --down-chbx-color: hsla(4, 56%, 48%, 1) !important;
  --drag-ghost-background: hsl( 30, 23.23%, 53.75% ) !important;
  --drag-ghost-text-color: hsla(36, 38%, 98%, 1) !important;
  --dropdown-background: hsla(35, 37%, 92%, 1) !important;
  --dropdown-background-hover: color-mix(in hsl, hsla(36, 38%, 98%, 1) 50%, hsla(35, 37%, 92%, 1)) !important;
  --dropdown-height: 31px !important;
  --editor-bg-color: hsla(35, 36%, 96%, 1) !important;
  --editor-bgpattern-color: hsla(37, 38%, 83%, 1) !important;
  --editor-bgpattern-size: 50px 50px !important;
  --editor-border-color: hsla(37, 38%, 83%, 1) !important;
  --editor-border-radius: 12px !important;
  --editor-border-width: 1px !important;
  --editor-header-icon: 15px !important;
  --editor-pane-margin: 10px !important;
  --editor-tab-icon: 15px !important;
  --embed-background: color-mix( in srgb, hsla(35, 37%, 92%, 1) 50%, hsla(35, 36%, 96%, 1) ) !important;
  --embed-bg-color-mix: color-mix( in srgb, hsla(35, 37%, 92%, 1) 50%, hsla(35, 36%, 96%, 1) ) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-bottom: 1px solid hsla(37, 38%, 83%, 1) !important;
  --embed-border-bottom-color: hsla(37, 38%, 83%, 1) !important;
  --embed-border-bottom-style: solid !important;
  --embed-border-bottom-width: 1px !important;
  --embed-border-end: 1px solid hsla(37, 38%, 83%, 1) !important;
  --embed-border-end-color: hsla(37, 38%, 83%, 1) !important;
  --embed-border-end-style: solid !important;
  --embed-border-end-width: 1px !important;
  --embed-border-radius: 12px !important;
  --embed-border-start: 1px solid hsla(37, 38%, 83%, 1) !important;
  --embed-border-start-color: hsla(37, 38%, 83%, 1) !important;
  --embed-border-start-style: solid !important;
  --embed-border-start-width: 1px !important;
  --embed-border-top: 1px solid hsla(37, 38%, 83%, 1) !important;
  --embed-border-top-color: hsla(37, 38%, 83%, 1) !important;
  --embed-border-top-style: solid !important;
  --embed-border-top-width: 1px !important;
  --embed-edit-btn-bg: color-mix(in srgb, hsla(35, 36%, 96%, 1) 70%, transparent) !important;
  --embed-edit-btn-bg-hover: color-mix(in srgb, hsla(35, 36%, 96%, 1) 100%, transparent) !important;
  --embed-edit-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.1) !important;
  --embed-edit-btn-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.1) !important;
  --embed-left-right-padding: 16px !important;
  --embed-media-border-radius: 8px !important;
  --embed-padding: 6px 16px 0px !important;
  --embed-title-border: 1px solid hsla(37, 38%, 83%, 1) !important;
  --embed-title-border-color: hsla(37, 38%, 83%, 1) !important;
  --embed-title-border-style: solid !important;
  --embed-title-border-width: 1px !important;
  --embed-title-color: hsla(31, 23%, 50%, 1) !important;
  --embed-title-font-size: 16px !important;
  --embed-title-font-weight: 550 !important;
  --embed-title-letter-spacing: normal !important;
  --embed-title-margin-bottom: 8px !important;
  --embed-title-text-transform: none !important;
  --empty-state-action-btn-bg: color-mix(in srgb, hsla(35, 37%, 92%, 1) 50%, transparent) !important;
  --file-header-background: hsla(35, 36%, 96%, 1) !important;
  --file-header-background-focused: hsla(35, 36%, 96%, 1) !important;
  --file-header-border: 1px solid hsla(37, 38%, 83%, 1) !important;
  --file-header-border-color: hsla(37, 38%, 83%, 1) !important;
  --file-header-border-width: 1px !important;
  --file-header-font: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-title-color: hsla(36, 32%, 30%, 1) !important;
  --file-line-width: 40rem !important;
  --file-max-line-width: 88% !important;
  --file-tab-gap: 0px !important;
  --flair-background: hsla(35, 37%, 92%, 1) !important;
  --flair-color: hsla(31, 45%, 24%, 1) !important;
  --flair-count-bg-color: hsla(34, 34%, 90%, 1) !important;
  --flair-count-color: hsla(34, 29%, 60%, 1) !important;
  --flair-count-padding: 2px 4px !important;
  --flair-count-radius: 5px !important;
  --font-bold: 750 !important;
  --font-extrabold: 850 !important;
  --font-extralight: 250 !important;
  --font-interface: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Inter" !important;
  --font-light: 350 !important;
  --font-medium: 550 !important;
  --font-mermaid: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Cascadia Code" !important;
  --font-normal: 450 !important;
  --font-print: "Inter", Arial' !important;
  --font-semibold: 650 !important;
  --font-text: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Inter" !important;
  --font-thin: 150 !important;
  --font-ui-smallest: 11px !important;
  --font-weight: 450 !important;
  --footnote-divider-color: hsla(37, 38%, 83%, 1) !important;
  --footnote-id-color: hsla(35, 28%, 40%, 1) !important;
  --footnote-id-color-no-occurrences: hsla(34, 29%, 60%, 1) !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.45) !important;
  --graph-arrow: hsla(31, 23%, 50%, 1) !important;
  --graph-line: hsla(37, 38%, 83%, 1) !important;
  --graph-node: hsla(202, 66%, 48%, 1) !important;
  --graph-node-attachment: hsla(148, 30%, 65%, 1) !important;
  --graph-node-focused: hsla(31, 45%, 24%, 1) !important;
  --graph-node-highlight-fill: hsla(31, 23%, 50%, 1) !important;
  --graph-node-highlight-line: hsla(34, 37%, 70%, 1) !important;
  --graph-node-tag: hsla(4, 72%, 55%, 1) !important;
  --graph-node-unresolved: hsla(43, 83%, 57%, 1) !important;
  --graph-node-unresolved-opacity: 1 !important;
  --graph-text: hsla(34, 29%, 60%, 1) !important;
  --gray: hsla(35, 28%, 40%, 1) !important;
  --gutter-color: color-mix(in hsl, hsla(37, 38%, 83%, 1) 40%, hsla(34, 37%, 70%, 1)) !important;
  --gutter-color-active: hsla(31, 23%, 50%, 1) !important;
  --h1-bg-color: transparent !important;
  --h1-border-bottom-color: hsla(37, 38%, 83%, 1) !important;
  --h1-border-left-color: hsla(37, 38%, 83%, 1) !important;
  --h1-border-radius: 0px !important;
  --h1-border-right-color: hsla(37, 38%, 83%, 1) !important;
  --h1-border-style: solid !important;
  --h1-border-top-color: hsla(37, 38%, 83%, 1) !important;
  --h1-border-width: 0px !important;
  --h1-color: hsla(33, 54%, 17%, 1) !important;
  --h1-text-align: left !important;
  --h1-text-transform: normal !important;
  --h1-weight: 650 !important;
  --h2-bg-color: transparent !important;
  --h2-border-bottom-color: hsla(37, 38%, 83%, 1) !important;
  --h2-border-left-color: hsla(37, 38%, 83%, 1) !important;
  --h2-border-radius: 0px !important;
  --h2-border-right-color: hsla(37, 38%, 83%, 1) !important;
  --h2-border-style: solid !important;
  --h2-border-top-color: hsla(37, 38%, 83%, 1) !important;
  --h2-border-width: 0px !important;
  --h2-color: hsla(33, 54%, 17%, 1) !important;
  --h2-text-align: left !important;
  --h2-text-transform: normal !important;
  --h2-weight: 650 !important;
  --h3-bg-color: transparent !important;
  --h3-border-bottom-color: hsla(37, 38%, 83%, 1) !important;
  --h3-border-left-color: hsla(37, 38%, 83%, 1) !important;
  --h3-border-radius: 0px !important;
  --h3-border-right-color: hsla(37, 38%, 83%, 1) !important;
  --h3-border-style: solid !important;
  --h3-border-top-color: hsla(37, 38%, 83%, 1) !important;
  --h3-border-width: 0px !important;
  --h3-color: hsla(33, 54%, 17%, 1) !important;
  --h3-text-align: left !important;
  --h3-text-transform: normal !important;
  --h3-weight: 650 !important;
  --h4-bg-color: transparent !important;
  --h4-border-bottom-color: hsla(37, 38%, 83%, 1) !important;
  --h4-border-left-color: hsla(37, 38%, 83%, 1) !important;
  --h4-border-radius: 0px !important;
  --h4-border-right-color: hsla(37, 38%, 83%, 1) !important;
  --h4-border-style: solid !important;
  --h4-border-top-color: hsla(37, 38%, 83%, 1) !important;
  --h4-border-width: 0px !important;
  --h4-color: hsla(33, 54%, 17%, 1) !important;
  --h4-text-align: left !important;
  --h4-text-transform: normal !important;
  --h4-weight: 650 !important;
  --h5-bg-color: transparent !important;
  --h5-border-bottom-color: hsla(37, 38%, 83%, 1) !important;
  --h5-border-left-color: hsla(37, 38%, 83%, 1) !important;
  --h5-border-radius: 0px !important;
  --h5-border-right-color: hsla(37, 38%, 83%, 1) !important;
  --h5-border-style: solid !important;
  --h5-border-top-color: hsla(37, 38%, 83%, 1) !important;
  --h5-border-width: 0px !important;
  --h5-color: hsla(33, 54%, 17%, 1) !important;
  --h5-text-align: left !important;
  --h5-text-transform: normal !important;
  --h5-weight: 650 !important;
  --h6-bg-color: transparent !important;
  --h6-border-bottom-color: hsla(37, 38%, 83%, 1) !important;
  --h6-border-left-color: hsla(37, 38%, 83%, 1) !important;
  --h6-border-radius: 0px !important;
  --h6-border-right-color: hsla(37, 38%, 83%, 1) !important;
  --h6-border-style: solid !important;
  --h6-border-top-color: hsla(37, 38%, 83%, 1) !important;
  --h6-border-width: 0px !important;
  --h6-color: hsla(33, 54%, 17%, 1) !important;
  --h6-text-align: left !important;
  --h6-text-transform: normal !important;
  --h6-weight: 650 !important;
  --header-height: 46px !important;
  --headerFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsla(34, 29%, 60%, 1) !important;
  --highlight: hsla(44, 100%, 50%, 0.2) !important;
  --hr-color: hsla(37, 38%, 83%, 1) !important;
  --hr-thickness: 1px !important;
  --icon-bg: transparent !important;
  --icon-bg-active: hsla(37, 38%, 83%, 1) !important;
  --icon-bg-active-menu: transparent !important;
  --icon-bg-hover: transparent !important;
  --icon-bg-pressed: transparent !important;
  --icon-color: hsla(34, 29%, 60%, 1) !important;
  --icon-color-active: hsla(35, 28%, 40%, 1) !important;
  --icon-color-focused: hsla(31, 23%, 50%, 1) !important;
  --icon-color-hover: hsla(31, 23%, 50%, 1) !important;
  --icon-container-radius: 0px !important;
  --icon-m: 16px !important;
  --icon-opacity: 1 !important;
  --icon-s: 15px !important;
  --icon-size: 16px !important;
  --icon-xl: 24px !important;
  --icon-xs: 13px !important;
  --idea-chbx-color: hsla(30, 72%, 62%, 1) !important;
  --important-chbx-color: hsla(17, 83%, 52%, 1) !important;
  --important-chbx-icon-color: white !important;
  --important-chbx-radius: 100% !important;
  --indentation-guide-color: hsla(37, 38%, 83%, 1) !important;
  --indentation-guide-color-active: color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --indentation-guide-reading-indent: -1em !important;
  --info-chbx-color: hsla(178, 29%, 45%, 1) !important;
  --info-chbx-icon-color: white !important;
  --inline-code-bg: hsla(36, 38%, 98%, 1) !important;
  --inline-code-color: hsla(4, 59%, 64%, 1) !important;
  --inline-code-radius: 4px !important;
  --inline-query-bg: color-mix(in srgb, hsla(34, 34%, 90%, 1) 20%, hsla(35, 36%, 96%, 1)) !important;
  --inline-query-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.06) !important;
  --inline-title-color: hsla(33, 54%, 17%, 1) !important;
  --inline-title-weight: 650 !important;
  --inprogress-chbx-border-color: color-mix(in srgb, hsla(34, 82%, 57%, 1) 65%, hsla(35, 28%, 40%, 1)) !important;
  --inprogress-chbx-color: hsla(34, 82%, 57%, 1) !important;
  --inprogress-chbx-color-hover: hsla(34, 82%, 64%, 1) !important;
  --input-date-separator: hsla(34, 29%, 60%, 1) !important;
  --input-font-weight: 450 !important;
  --input-height: 32px !important;
  --input-placeholder-color: hsla(34, 29%, 60%, 1) !important;
  --input-radius: 8px !important;
  --input-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.1),0px 2px 4px -1px rgba(0, 0, 0, 0.05) !important;
  --input-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.09),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.6) !important;
  --input-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.15),0px 2px 6px -1px rgba(0, 0, 0, 0.1) !important;
  --interactive-accent: hsl( 30, 23.23%, 53.75% ) !important;
  --interactive-accent-hover: hsl( 28, 30.59%, 59.5% ) !important;
  --interactive-accent-hsl: 31,23%,50% !important;
  --interactive-hover: color-mix(in hsl, hsla(36, 38%, 98%, 1) 50%, hsla(35, 37%, 92%, 1)) !important;
  --interactive-normal: hsla(35, 37%, 92%, 1) !important;
  --interface-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0 !important;
  --italic-color: hsla(200, 64%, 37%, 1) !important;
  --italic-highlight-bg: hsla(186, 64%, 46%, 0.2) !important;
  --italic-highlight-color: hsla(31, 45%, 24%, 1) !important;
  --kanban-drag-item-border: none !important;
  --kanban-drag-item-shadow: 0px 8.3px 22.8px -9px rgba(0, 0, 0, 0.19),0px 6.2px 10.1px -4.2px rgba(0, 0, 0, 0.22),0px 2.1px 6.8px -3.2px rgba(0, 0, 0, 0.29) !important;
  --kanban-item-bg: hsla(36, 38%, 98%, 1) !important;
  --kanban-item-border: none !important;
  --kanban-item-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.09),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.06),0px 2px 2px 0px rgba(0, 0, 0, 0.03) !important;
  --kanban-lane-bg: color-mix(in srgb, hsla(35, 37%, 92%, 1) 50%, hsla(35, 36%, 96%, 1)) !important;
  --kanban-lane-border: 1px solid hsla(34, 34%, 90%, 1) !important;
  --kanban-lane-shadow: none !important;
  --kanban-new-item-bg: transparent !important;
  --kanban-new-item-bg-hover: hsla(35, 36%, 96%, 1) !important;
  --kanban-new-item-color: hsla(34, 29%, 60%, 1) !important;
  --kanban-new-item-color-hover: hsla(35, 28%, 40%, 1) !important;
  --kanban-new-item-shadow: none !important;
  --kanban-new-item-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12),0px 2px 4px 0px rgba(0, 0, 0, 0.04) !important;
  --kanban-title-count-bg: hsla(37, 38%, 83%, 1) !important;
  --kanban-title-count-color: hsla(36, 32%, 30%, 1) !important;
  --kanban-title-count-radius: 12px !important;
  --kanban-title-text-input-color: hsla(31, 45%, 24%, 1) !important;
  --kbd-background: hsla(34, 34%, 90%, 1) !important;
  --kbd-color: hsla(4, 59%, 64%, 1) !important;
  --kbd-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.03),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.06) !important;
  --language-chbx-color: hsla(7, 59%, 64%, 1) !important;
  --law-chbx-color: hsla(34, 34%, 52%, 1) !important;
  --light: hsla(35, 36%, 96%, 1) !important;
  --lightgray: hsla(34, 34%, 90%, 1) !important;
  --link-ahref-color: hsla(4, 72%, 55%, 1) !important;
  --link-ahref-color-hover: hsla(4, 59%, 64%, 1) !important;
  --link-ahref-decoration-color: color-mix(in srgb, currentColor 22%, transparent) !important;
  --link-ahref-decoration-color-hover: color-mix(in srgb, hsla(4, 59%, 64%, 1) 22%, transparent) !important;
  --link-color: hsla(40, 79%, 47%, 1) !important;
  --link-color-hover: hsla(43, 83%, 57%, 1) !important;
  --link-decoration-color: color-mix(in srgb, hsla(40, 79%, 47%, 1) 22%, transparent) !important;
  --link-decoration-color-hover: color-mix(in srgb, hsla(43, 83%, 57%, 1) 22%, transparent) !important;
  --link-decoration-opacity: 22% !important;
  --link-decoration-thickness: 1.5px !important;
  --link-external-color: hsla(149, 50%, 39%, 1) !important;
  --link-external-color-hover: hsla(148, 48%, 47%, 1) !important;
  --link-external-decoration-color: color-mix(in srgb, hsla(149, 50%, 39%, 1) 22%, transparent) !important;
  --link-external-decoration-color-hover: color-mix(in srgb, hsla(148, 48%, 47%, 1) 22%, transparent) !important;
  --link-opacity-active: 0.5 !important;
  --link-underline-offset: 2px !important;
  --link-unresolved-color: hsla(34, 29%, 60%, 1) !important;
  --link-unresolved-color-hover: hsla(34, 37%, 70%, 1) !important;
  --link-unresolved-decoration-color: color-mix(in srgb, hsla(34, 29%, 60%, 1) 22%, transparent) !important;
  --link-unresolved-decoration-color-hover: color-mix(in srgb, hsla(34, 37%, 70%, 1) 22%, transparent) !important;
  --link-unresolved-opacity: 1 !important;
  --link-weight: 450 !important;
  --list-bullet-indent-reading: -1em !important;
  --list-indent-editing: 0.6em !important;
  --list-marker-color: hsla(34, 29%, 60%, 1) !important;
  --list-marker-color-collapsed: hsla(31, 23%, 50%, 1) !important;
  --list-marker-color-hover: hsla(35, 28%, 40%, 1) !important;
  --loading-line-bg-color: hsla(34, 34%, 90%, 1) !important;
  --loading-line-color: hsla(197, 39%, 56%, 1) !important;
  --loading-line-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1) !important;
  --location-chbox-color: hsla(0, 56%, 48%, 1) !important;
  --menu-background: hsla(34, 34%, 90%, 1) !important;
  --menu-border-color: color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --menu-item-bg-active: hsla(36, 35%, 88%, 1) !important;
  --menu-item-bg-hover: rgba(255, 255, 255, 0.35) !important;
  --menu-item-color-active: hsla(34, 37%, 70%, 1) !important;
  --menu-item-icon-color: hsla(34, 29%, 60%, 1) !important;
  --menu-item-icon-color-active: hsla(34, 37%, 70%, 1) !important;
  --menu-item-radius: 7px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),0px 3.4px 6.7px rgba(0, 0, 0, 0.042),0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --metadata-background: color-mix(in srgb, hsla(35, 36%, 96%, 1) 50%, hsla(35, 37%, 92%, 1)) !important;
  --metadata-border-color: hsla(37, 38%, 83%, 1) !important;
  --metadata-border-radius: 8px !important;
  --metadata-border-width: 1px !important;
  --metadata-container-padding: 12px 12px !important;
  --metadata-divider-color: hsla(37, 38%, 83%, 1) !important;
  --metadata-divider-width: 0px !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.45) !important;
  --metadata-input-font: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-shadow-active: inset 0px 0px 0px 1px hsla(37, 38%, 83%, 1),0px 0px 0px 1px hsla(37, 38%, 83%, 1) !important;
  --metadata-input-shadow-hover: none !important;
  --metadata-input-text-color: hsla(36, 32%, 30%, 1) !important;
  --metadata-key-input-color: hsla(35, 28%, 40%, 1) !important;
  --metadata-key-input-color-active: hsla(36, 32%, 30%, 1) !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.45) !important;
  --metadata-label-font: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsla(35, 28%, 40%, 1) !important;
  --metadata-label-text-color-hover: hsla(35, 28%, 40%, 1) !important;
  --metadata-properties-title-color: hsla(34, 37%, 70%, 1) !important;
  --metadata-properties-title-color-collapsed: hsla(34, 37%, 70%, 1) !important;
  --metadata-properties-title-color-hover: hsla(34, 29%, 60%, 1) !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.5) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --metadata-property-radius: 7px !important;
  --metadata-tab-background: hsla(34, 34%, 90%, 1) !important;
  --modal-background: hsla(35, 36%, 96%, 1) !important;
  --modal-border-color: color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --modal-close-button-size: 20px !important;
  --modal-radius: 16px !important;
  --monospace-font-feature: "calt" 1,"ss01" 1,"ss02" 1,"ss03" 1,"ss05" 1,"ss19" 1,"zero" 1 !important;
  --nav-collapse-icon-color: hsla(34, 37%, 70%, 1) !important;
  --nav-collapse-icon-color-collapsed: hsla(34, 29%, 60%, 1) !important;
  --nav-file-padding-active: 4px 8px 6px 24px !important;
  --nav-file-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.09),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.07),0px 2px 3px 0px rgba(0, 0, 0, 0.05) !important;
  --nav-file-tag-bg: transparent !important;
  --nav-file-tag-color: hsla(31, 23%, 50%, 1) !important;
  --nav-folder-1-bg-color: color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) !important;
  --nav-folder-1-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-1-collapse-color: color-mix(in srgb, hsla(4, 56%, 48%, 1) 50%, transparent) !important;
  --nav-folder-1-color: hsla(4, 56%, 48%, 1) !important;
  --nav-folder-1-indent-color: color-mix(in srgb, hsla(4, 56%, 48%, 1) 25%, transparent) !important;
  --nav-folder-10-bg-color: color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) !important;
  --nav-folder-10-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-10-collapse-color: color-mix(in srgb, hsla(153, 65%, 29%, 1) 50%, transparent) !important;
  --nav-folder-10-color: hsla(153, 65%, 29%, 1) !important;
  --nav-folder-10-indent-color: color-mix(in srgb, hsla(153, 65%, 29%, 1) 25%, transparent) !important;
  --nav-folder-11-bg-color: color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) !important;
  --nav-folder-11-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-11-collapse-color: color-mix(in srgb, hsla(200, 64%, 37%, 1) 50%, transparent) !important;
  --nav-folder-11-color: hsla(200, 64%, 37%, 1) !important;
  --nav-folder-11-indent-color: color-mix(in srgb, hsla(200, 64%, 37%, 1) 25%, transparent) !important;
  --nav-folder-12-bg-color: color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) !important;
  --nav-folder-12-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-12-collapse-color: color-mix(in srgb, hsla(275, 37%, 43%, 1) 50%, transparent) !important;
  --nav-folder-12-color: hsla(275, 37%, 43%, 1) !important;
  --nav-folder-12-indent-color: color-mix(in srgb, hsla(275, 37%, 43%, 1) 25%, transparent) !important;
  --nav-folder-2-bg-color: color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) !important;
  --nav-folder-2-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-2-collapse-color: color-mix(in srgb, hsla(18, 69%, 50%, 1) 50%, transparent) !important;
  --nav-folder-2-color: hsla(18, 69%, 50%, 1) !important;
  --nav-folder-2-indent-color: color-mix(in srgb, hsla(18, 69%, 50%, 1) 25%, transparent) !important;
  --nav-folder-3-bg-color: color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) !important;
  --nav-folder-3-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-3-collapse-color: color-mix(in srgb, hsla(40, 98%, 36%, 1) 50%, transparent) !important;
  --nav-folder-3-color: hsla(40, 98%, 36%, 1) !important;
  --nav-folder-3-indent-color: color-mix(in srgb, hsla(40, 98%, 36%, 1) 25%, transparent) !important;
  --nav-folder-4-bg-color: color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) !important;
  --nav-folder-4-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(74, 69%, 44%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-4-collapse-color: color-mix(in srgb, hsla(153, 65%, 29%, 1) 50%, transparent) !important;
  --nav-folder-4-color: hsla(153, 65%, 29%, 1) !important;
  --nav-folder-4-indent-color: color-mix(in srgb, hsla(153, 65%, 29%, 1) 25%, transparent) !important;
  --nav-folder-5-bg-color: color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) !important;
  --nav-folder-5-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(186, 64%, 46%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-5-collapse-color: color-mix(in srgb, hsla(200, 64%, 37%, 1) 50%, transparent) !important;
  --nav-folder-5-color: hsla(200, 64%, 37%, 1) !important;
  --nav-folder-5-indent-color: color-mix(in srgb, hsla(200, 64%, 37%, 1) 25%, transparent) !important;
  --nav-folder-6-bg-color: color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) !important;
  --nav-folder-6-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(236, 100%, 72%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-6-collapse-color: color-mix(in srgb, hsla(275, 37%, 43%, 1) 50%, transparent) !important;
  --nav-folder-6-color: hsla(275, 37%, 43%, 1) !important;
  --nav-folder-6-indent-color: color-mix(in srgb, hsla(275, 37%, 43%, 1) 25%, transparent) !important;
  --nav-folder-7-bg-color: color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) !important;
  --nav-folder-7-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(350, 84%, 63%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-7-collapse-color: color-mix(in srgb, hsla(4, 56%, 48%, 1) 50%, transparent) !important;
  --nav-folder-7-color: hsla(4, 56%, 48%, 1) !important;
  --nav-folder-7-indent-color: color-mix(in srgb, hsla(4, 56%, 48%, 1) 25%, transparent) !important;
  --nav-folder-8-bg-color: color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) !important;
  --nav-folder-8-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(27, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-8-collapse-color: color-mix(in srgb, hsla(18, 69%, 50%, 1) 50%, transparent) !important;
  --nav-folder-8-color: hsla(18, 69%, 50%, 1) !important;
  --nav-folder-8-indent-color: color-mix(in srgb, hsla(18, 69%, 50%, 1) 25%, transparent) !important;
  --nav-folder-9-bg-color: color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) !important;
  --nav-folder-9-bg-color-hover: color-mix(in srgb, color-mix(in srgb, hsla(44, 100%, 50%, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-9-collapse-color: color-mix(in srgb, hsla(40, 98%, 36%, 1) 50%, transparent) !important;
  --nav-folder-9-color: hsla(40, 98%, 36%, 1) !important;
  --nav-folder-9-indent-color: color-mix(in srgb, hsla(40, 98%, 36%, 1) 25%, transparent) !important;
  --nav-folder-bg-color: transparent !important;
  --nav-folder-bg-color-hover: rgba(255, 255, 255, 0.25) !important;
  --nav-folder-collapse-color: hsla(34, 37%, 70%, 1) !important;
  --nav-folder-color: hsla(34, 30%, 37%, 1) !important;
  --nav-heading-color: hsla(35, 28%, 40%, 1) !important;
  --nav-heading-color-collapsed: hsla(35, 28%, 40%, 1) !important;
  --nav-heading-color-collapsed-hover: hsla(35, 28%, 40%, 1) !important;
  --nav-heading-color-hover: hsla(35, 28%, 40%, 1) !important;
  --nav-heading-weight: 550 !important;
  --nav-heading-weight-hover: 550 !important;
  --nav-indentation-guide-color: hsla(37, 38%, 83%, 1) !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.25) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.25) !important;
  --nav-item-background-selected: hsla(197, 82%, 27%, 0.5) !important;
  --nav-item-background-selected-hover: hsla(197, 82%, 27%, 0.4) !important;
  --nav-item-color: hsla(34, 30%, 37%, 1) !important;
  --nav-item-color-active: hsla(34, 30%, 37%, 1) !important;
  --nav-item-color-highlighted: hsl( 28, 30.59%, 59.5% ) !important;
  --nav-item-color-hover: hsla(34, 30%, 37%, 1) !important;
  --nav-item-color-selected: hsla(35, 36%, 96%, 1) !important;
  --nav-item-padding: 5px 8px 5px 24px !important;
  --nav-item-parent-padding: 5px 8px 5px 24px !important;
  --nav-item-radius: 6px !important;
  --nav-item-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: hsla(34, 29%, 60%, 1) !important;
  --nav-tag-color-active: hsla(35, 28%, 40%, 1) !important;
  --nav-tag-color-hover: hsla(35, 28%, 40%, 1) !important;
  --nav-tag-weight: 650 !important;
  --new-tab-btn-radius: 2em !important;
  --non-alternating-color: hsla(34, 37%, 70%, 1) !important;
  --non-alternating-color-hover-active: hsla(37, 38%, 83%, 1) !important;
  --normal-highlight-bg: hsla(44, 100%, 50%, 0.2) !important;
  --normal-highlight-color: hsla(31, 45%, 24%, 1) !important;
  --note-chbx-color: hsla(8, 51%, 53%, 1) !important;
  --notice-color: hsla(36, 38%, 98%, 1) !important;
  --notice-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12),0px 2px 9px -2.1px rgba(0, 0, 0, 0.38),0px 3px 17px -4.3px rgba(0, 0, 0, 0.12),0px 7px 30px -5.5px rgba(0, 0, 0, 0.09) !important;
  --pcr-btn-shadow: inset 0px 0px 0px 1.5px rgba(0, 0, 0, 0.2) !important;
  --pdf-background: hsla(35, 36%, 96%, 1) !important;
  --pdf-page-background: hsla(35, 36%, 96%, 1) !important;
  --pdf-sidebar-background: hsla(35, 36%, 96%, 1) !important;
  --pill-background: rgba(255, 255, 255, 0.4) !important;
  --pill-background-hover: rgba(255, 255, 255, 0.4) !important;
  --pill-border-color: color-mix(in srgb, hsla(37, 38%, 83%, 1) 50%, transparent) !important;
  --pill-border-color-hover: color-mix(in srgb, color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) 50%, transparent) !important;
  --pill-color: hsla(36, 32%, 30%, 1) !important;
  --pill-color-hover: hsla(33, 54%, 17%, 1) !important;
  --pill-color-remove: hsla(34, 37%, 70%, 1) !important;
  --pill-color-remove-hover: hsla(34, 37%, 70%, 1) !important;
  --pill-tag-bg-1: hsla(44, 100%, 50%, 0.2) !important;
  --pill-tag-bg-2: hsla(350, 84%, 63%, 0.2) !important;
  --pill-tag-bg-3: hsla(186, 64%, 46%, 0.2) !important;
  --pill-tag-color-1: hsla(40, 98%, 36%, 1) !important;
  --pill-tag-color-2: hsla(4, 72%, 35%, 1) !important;
  --pill-tag-color-3: hsla(205, 85%, 25%, 1) !important;
  --pill-tag-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.05) !important;
  --pill-tag-weight: 550 !important;
  --pmr-cal-td-padding: 4px 4px 6px 4px !important;
  --pmr-cal-td-radius: 5px !important;
  --popup-bg-blur: 3px !important;
  --pro-chbx-color: hsla(149, 34%, 44%, 1) !important;
  --progress-background: hsla(34, 34%, 90%, 1) !important;
  --progress-bar-outline: rgba(0, 0, 0, 0.1) !important;
  --progress-border-width: 1px !important;
  --progress-color-1: hsla(4, 72%, 55%, 1) !important;
  --progress-color-2: hsla(21, 81%, 59%, 1) !important;
  --progress-color-3: hsla(43, 83%, 57%, 1) !important;
  --progress-color-4: hsla(149, 50%, 39%, 1) !important;
  --progress-color-5: linear-gradient(45deg, hsla(4, 59%, 64%, 1), hsla(43, 71%, 67%, 1), hsla(197, 39%, 56%, 1)) !important;
  --progress-gradient-1: hsla(4, 59%, 64%, 1) !important;
  --progress-gradient-2: hsla(43, 71%, 67%, 1) !important;
  --progress-gradient-3: hsla(197, 39%, 56%, 1) !important;
  --progress-height: 8px !important;
  --progress-value-outline: rgba(0, 0, 0, 0.18) !important;
  --progress-value-radius: 8px !important;
  --progress-width: 220px !important;
  --prompt-background: hsla(35, 36%, 96%, 1) !important;
  --prompt-border-color: color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --prompt-input-background: hsla(35, 36%, 96%, 1) !important;
  --prompt-instructions-background: color-mix(in hsl, hsla(35, 36%, 96%, 1) 60%, hsla(34, 34%, 90%, 1)) !important;
  --prompt-results-background: hsla(35, 36%, 96%, 1) !important;
  --prompt-separator-border: 1px solid hsla(34, 34%, 90%, 1) !important;
  --prompt-suggestion-background-selected: rgba(255, 255, 255, 0.35) !important;
  --prompt-suggestion-color: hsla(31, 23%, 50%, 1) !important;
  --prompt-suggestion-color-selected: hsla(31, 45%, 24%, 1) !important;
  --prompt-suggestion-highlight-color: color-mix(in srgb, hsla(31, 23%, 50%, 1) 70%, black) !important;
  --prompt-suggestion-highlight-color-selected: hsla(31, 45%, 24%, 1) !important;
  --prompt-suggestion-shadow-selected: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08),0px 2px 6px 0px rgba(0, 0, 0, 0.03) !important;
  --question-chbx-color: hsla(281, 33%, 54%, 1) !important;
  --question-chbx-icon-color: white !important;
  --quote-chbx-color: hsla(206, 47%, 48%, 1) !important;
  --quote-chbx-icon-color: white !important;
  --radius-xs: 2px !important;
  --raised-background: color-mix(in srgb, hsla(35, 36%, 96%, 1) 65%, transparent) linear-gradient(hsla(35, 36%, 96%, 1), color-mix(in srgb, hsla(35, 36%, 96%, 1) 65%, transparent)) !important;
  --resched-chbx-color: hsla(178, 18%, 59%, 1) !important;
  --ribbon-background: hsla(34, 34%, 90%, 1) !important;
  --ribbon-background-collapsed: hsla(35, 36%, 96%, 1) !important;
  --ribbon-border-width: 1px !important;
  --ribbon-icon: 15px !important;
  --ribbon-icon-spacing: 4px !important;
  --ribbon-margin-bottom: 10px !important;
  --ribbon-radius: 12px !important;
  --ribbon-slideout-background: hsla(35, 37%, 92%, 1) !important;
  --ribbon-slideout-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.12),0px 5px 5px -5px rgba(0, 0, 0, 0.15) !important;
  --sched-chbx-color: hsla(32, 10%, 68%, 1) !important;
  --scrollbar-active-thumb-bg: color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: hsla(37, 38%, 83%, 1) !important;
  --search-clear-button-color: hsla(34, 29%, 60%, 1) !important;
  --search-clear-button-color-hover: hsla(4, 72%, 55%, 1) !important;
  --search-clear-button-size: 12px !important;
  --search-icon-color: hsla(34, 29%, 60%, 1) !important;
  --search-icon-size: 14px !important;
  --search-result-background: hsla(35, 37%, 92%, 1) !important;
  --search-result-background-hover: color-mix(in srgb, hsla(36, 38%, 98%, 1) 50%, hsla(35, 36%, 96%, 1)) !important;
  --search-result-dest-file-bg: hsla(35, 36%, 96%, 1) !important;
  --search-result-dest-file-bg-hover: color-mix(in srgb, hsla(35, 36%, 96%, 1) 50%, hsla(36, 38%, 98%, 1)) !important;
  --search-result-dest-file-color: hsla(35, 28%, 40%, 1) !important;
  --search-result-dest-file-icon-color: hsla(34, 37%, 70%, 1) !important;
  --search-result-dest-file-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.05) !important;
  --search-result-dest-file-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.05),0px 2px 3px 0px rgba(0, 0, 0, 0.09) !important;
  --secondary: hsl(31, 23%, 50%) !important;
  --setting-group-heading-color: hsla(31, 45%, 24%, 1) !important;
  --setting-group-heading-weight: 650 !important;
  --setting-items-background: hsla(35, 37%, 92%, 1) !important;
  --setting-items-border-color: hsla(37, 38%, 83%, 1) !important;
  --settings-nav-group-title-color: hsla(34, 37%, 70%, 1) !important;
  --settings-nav-item-active-color: hsla(36, 38%, 98%, 1) !important;
  --settings-nav-item-bg-hover: transparent !important;
  --settings-nav-item-padding: 7px 12px 7px 12px !important;
  --settings-nav-item-padding-active: 6px 12px 8px 20px !important;
  --settings-nav-item-padding-hover: 7px 12px 7px 20px !important;
  --settings-nav-item-radius: 7px !important;
  --settings-nav-item-text-color: hsla(34, 30%, 37%, 1) !important;
  --settings-nav-item-text-color-active: hsla(34, 29%, 60%, 1) !important;
  --settings-nav-item-text-color-hover: hsla(31, 45%, 24%, 1) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.091),0px 6.3px 24.7px rgba(0, 0, 0, 0.132),0px 30px 90px rgba(0, 0, 0, 0.22) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),0px 3.4px 6.7px rgba(0, 0, 0, 0.042),0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --sidebar-nav-icon: 15px !important;
  --sidebar-tab-icon: 15px !important;
  --slider-thumb-bg: hsla(36, 38%, 98%, 1) !important;
  --slider-thumb-border-color: color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --slider-thumb-border-width: 0px !important;
  --slider-thumb-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0pc 1px 0px 1px rgb(255, 255, 255),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.09),0px 1px 2px 0px rgba(0, 0, 0, 0.1) !important;
  --slider-thumb-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0pc 1px 0px 1px rgb(255, 255, 255),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.09),0px 1px 2px 0px rgba(0, 0, 0, 0.1),0px 0px 0px 6px rgba(0, 0, 0, 0.05) !important;
  --slider-track-background: hsla(37, 38%, 83%, 1) !important;
  --slider-track-height: 5px !important;
  --slider-track-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08),0px 0px 0px 1px rgba(255, 255, 255, 0.08) !important;
  --star-chbx-color: hsla(40, 93%, 51%, 1) !important;
  --star-chbx-icon-color: white !important;
  --status-bar-background: hsla(34, 34%, 90%, 1) !important;
  --status-bar-border-color: hsla(37, 38%, 83%, 1) !important;
  --status-bar-floating-bg: hsla(35, 37%, 92%, 1) !important;
  --status-bar-floating-offset: 4px !important;
  --status-bar-floating-opacity: 0.5 !important;
  --status-bar-floating-opacity-hover: 1 !important;
  --status-bar-floating-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.12),0px 5px 5px -5px rgba(0, 0, 0, 0.15) !important;
  --status-bar-item-bg-hover: transparent !important;
  --status-bar-item-clickable-bg-active: transparent !important;
  --status-bar-item-clickable-color-active: hsla(34, 37%, 70%, 1) !important;
  --status-bar-item-color: hsla(34, 29%, 60%, 1) !important;
  --status-bar-item-color-hover: hsla(35, 28%, 40%, 1) !important;
  --status-bar-text-color: hsla(35, 28%, 40%, 1) !important;
  --strikethrough-color: hsla(34, 29%, 60%, 1) !important;
  --strikethrough-highlight-bg: hsla(44, 100%, 50%, 0.2) !important;
  --strikethrough-highlight-color: hsla(34, 29%, 60%, 1) !important;
  --style-settings-container-bg: color-mix(in srgb, hsla(35, 37%, 92%, 1) 50%, transparent) !important;
  --suggestion-background: hsla(35, 36%, 96%, 1) !important;
  --swatch-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2) !important;
  --sync-avatar-color-1: hsla(0, 58%, 53%, 1) !important;
  --sync-avatar-color-2: hsla(30, 66%, 52%, 1) !important;
  --sync-avatar-color-3: hsla(42, 89%, 46%, 1) !important;
  --sync-avatar-color-4: hsla(146, 37%, 49%, 1) !important;
  --sync-avatar-color-5: hsla(178, 39%, 49%, 1) !important;
  --sync-avatar-color-6: hsla(206, 57%, 44%, 1) !important;
  --sync-avatar-color-7: hsla(249, 39%, 60%, 1) !important;
  --sync-avatar-color-8: hsla(351, 44%, 61%, 1) !important;
  --sync-icon-success: hsla(149, 50%, 39%, 1) !important;
  --sync-icon-success-active: hsla(34, 37%, 70%, 1) !important;
  --sync-icon-success-hover: hsla(148, 48%, 47%, 1) !important;
  --sync-icon-working: hsla(26, 70%, 63%, 1) !important;
  --sync-icon-working-active: hsla(34, 37%, 70%, 1) !important;
  --sync-icon-working-hover: hsla(21, 81%, 59%, 1) !important;
  --tab-active-bg: hsla(35, 36%, 96%, 1) !important;
  --tab-active-shadow: inset 0px 1px 0px 0px rgb(255, 255, 255),inset 0px -2px 0px 1px rgba(0, 0, 0, 0.09),0px 1px 2px -0.1px rgba(0, 0, 0, 0.15) !important;
  --tab-background-active: hsla(35, 36%, 96%, 1) !important;
  --tab-bg: transparent !important;
  --tab-container-background: hsla(34, 34%, 90%, 1) !important;
  --tab-curves-display: none !important;
  --tab-divider-color: color-mix(in hsl, hsla(34, 37%, 70%, 1) 60%, hsla(37, 38%, 83%, 1)) !important;
  --tab-header-container-border-bottom: none !important;
  --tab-header-container-inner-margin: default !important;
  --tab-header-container-inner-padding: 2px !important;
  --tab-header-container-padding: 0 12px 4px 12px !important;
  --tab-header-container-transition: padding-bottom none !important;
  --tab-outline-color: transparent !important;
  --tab-stacked-header-width: 46px !important;
  --tab-stacked-shadow: -2.9px 0 10.5px -6.2px rgba(0, 0, 0, 0.08),-6.2px 0 3.6px -5.2px rgba(0, 0, 0, 0.04),-9.4px 0 8.4px -4.1px rgba(0, 0, 0, 0.06) !important;
  --tab-status-radius: 4px !important;
  --tab-switcher-background: hsla(34, 34%, 90%, 1) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(34, 34%, 90%, 1), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(31, 23%, 50%) !important;
  --tab-text-color: hsla(34, 29%, 60%, 1) !important;
  --tab-text-color-active: hsla(35, 28%, 40%, 1) !important;
  --tab-text-color-focused: hsla(35, 28%, 40%, 1) !important;
  --tab-text-color-focused-active: hsla(35, 28%, 40%, 1) !important;
  --tab-text-color-focused-active-current: hsla(31, 45%, 24%, 1) !important;
  --tab-text-color-focused-highlighted: hsl(31, 23%, 50%) !important;
  --tab-z-index: 1 !important;
  --table-add-button-border-color: hsla(37, 38%, 83%, 1) !important;
  --table-background: hsla(36, 38%, 98%, 1) !important;
  --table-border-color: hsla(37, 38%, 83%, 1) !important;
  --table-column-alt-background: hsla(35, 37%, 92%, 1) !important;
  --table-drag-handle-background-active: hsl( 30, 23.23%, 53.75% ) !important;
  --table-drag-handle-color: hsla(34, 29%, 60%, 1) !important;
  --table-drag-handle-color-active: hsla(36, 38%, 98%, 1) !important;
  --table-header-background: hsla(35, 37%, 92%, 1) !important;
  --table-header-background-hover: hsla(35, 37%, 92%, 1) !important;
  --table-header-border-color: hsla(37, 38%, 83%, 1) !important;
  --table-header-color: hsla(31, 45%, 24%, 1) !important;
  --table-header-weight: 650 !important;
  --table-row-alt-background: hsla(36, 38%, 98%, 1) !important;
  --table-row-alt-background-hover: hsla(36, 38%, 98%, 1) !important;
  --table-row-background-hover: hsla(36, 38%, 98%, 1) !important;
  --table-selection: hsla(31,23%,50%, 0.1) !important;
  --table-selection-border-color: hsl( 30, 23.23%, 53.75% ) !important;
  --tag-background: rgba(255, 255, 255, 0.5) !important;
  --tag-background-hover: rgba(255, 255, 255, 0.8) !important;
  --tag-border-color: rgba(0, 0, 0, 0.15) !important;
  --tag-border-color-hover: rgba(0, 0, 0, 0.25) !important;
  --tag-border-width: 1px !important;
  --tag-color: hsla(200, 64%, 37%, 1) !important;
  --tag-color-hover: hsla(202, 66%, 48%, 1) !important;
  --tag-padding-x: 0.6em !important;
  --tag-padding-y: 0.15em !important;
  --tag-radius: 1em !important;
  --tag-shadow: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.1) !important;
  --tag-shadow-active: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.1) !important;
  --tag-shadow-hover: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.1),0px 0px 0px 3px rgba(0, 0, 0, 0.03) !important;
  --telephone-chbx-color: hsla(148, 47%, 47%, 1) !important;
  --tertiary: hsl( 28, 30.59%, 59.5% ) !important;
  --text-accent: hsl(31, 23%, 50%) !important;
  --text-accent-hover: hsl( 28, 30.59%, 59.5% ) !important;
  --text-error: hsla(4, 56%, 48%, 1) !important;
  --text-faint: hsla(34, 29%, 60%, 1) !important;
  --text-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0 !important;
  --text-highlight-bg: hsla(44, 100%, 50%, 0.2) !important;
  --text-highlight-bg-rgb: 248,197,46 !important;
  --text-input-bg-active: color-mix(in hsl, hsla(35, 37%, 92%, 1) 40%, hsla(36, 38%, 98%, 1)) !important;
  --text-input-border-color: hsla(37, 38%, 83%, 1) !important;
  --text-input-color: hsla(31, 45%, 24%, 1) !important;
  --text-input-color-focused: hsla(31, 45%, 24%, 1) !important;
  --text-input-shadow-active: inset 0px 1px 0px 0px rgb(255, 255, 255),inset 0px -1px 0px 0px rgba(0, 0, 0, 0.04),0px 1px 6px 0px rgba(0, 0, 0, 0.07) !important;
  --text-muted: hsla(35, 28%, 40%, 1) !important;
  --text-normal: hsla(31, 45%, 24%, 1) !important;
  --text-on-accent: hsla(36, 38%, 98%, 1) !important;
  --text-on-accent-inverted: hsla(33, 54%, 17%, 1) !important;
  --text-selection: hsla(34, 37%, 70%, 0.15) !important;
  --text-selection-theme-bg: color-mix(in srgb, hsla(34, 37%, 70%, 1) 30%, transparent) !important;
  --text-selection-theme-text-color: color-mix(in srgb, currentColor 70%, black) !important;
  --text-success: hsla(149, 50%, 39%, 1) !important;
  --text-warning: hsla(18, 69%, 50%, 1) !important;
  --textHighlight: hsla(44, 100%, 50%, 0.2) !important;
  --titleFont: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsla(34, 34%, 90%, 1) !important;
  --titlebar-background-focused: hsla(34, 34%, 90%, 1) !important;
  --titlebar-border-color: hsla(37, 38%, 83%, 1) !important;
  --titlebar-text-color: hsla(37, 38%, 83%, 1) !important;
  --titlebar-text-color-focused: hsla(34, 37%, 70%, 1) !important;
  --titlebar-text-weight: 450 !important;
  --toggle-bg: color-mix(in hsl, hsla(37, 38%, 83%, 1) 80%, hsla(34, 37%, 70%, 1)) !important;
  --toggle-bg-enabled: hsla(149, 50%, 39%, 1) !important;
  --toggle-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.09),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06),inset 0 0 1px rgba(0, 0, 0, 0.28) !important;
  --toggle-shadow-focus: inset 0 6px 20px rgba(0, 0, 0, 0.18),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06),inset 0 0 1px rgba(0, 0, 0, 0.32),0px 0px 0px 5px rgba(0, 0, 0, 0.05) !important;
  --toggle-shadow-hover: inset 0 6px 20px rgba(0, 0, 0, 0.18),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06),inset 0 0 1px rgba(0, 0, 0, 0.32) !important;
  --toggle-thumb-color: hsla(36, 38%, 98%, 1) !important;
  --toggle-thumb-shadow: inset 0px 1px 0px 1px rgb(255, 255, 255),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),0 2px 2px rgba(0, 0, 0, 0.2) !important;
  --tooltip-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.12),0px 2px 4px -1.4px rgba(0, 0, 0, 0.3),0px 3px 10px -1.7px rgba(0, 0, 0, 0.14) !important;
  --traffic-lights-offset-x: 46px !important;
  --traffic-lights-offset-y: 46px !important;
  --underline-color: hsla(31, 45%, 24%, 1) !important;
  --underline-decoration-color: color-mix(in srgb, currentColor 22%, transparent) !important;
  --underline-decoration-opacity: 22% !important;
  --up-chbx-color: hsla(146, 37%, 49%, 1) !important;
  --vault-name-background: hsla(35, 37%, 92%, 1) !important;
  --vault-name-border: 1px solid hsla(37, 38%, 83%, 1) !important;
  --vault-name-border-width: 1px !important;
  --vault-name-color: hsla(35, 28%, 40%, 1) !important;
  --vault-name-color-hover: hsla(36, 32%, 30%, 1) !important;
  --vault-profile-color: hsla(35, 28%, 40%, 1) !important;
  --vault-profile-color-hover: hsla(35, 28%, 40%, 1) !important;
  --vault-profile-font-weight: 650 !important;
  --yaml-atom-color: hsla(197, 39%, 56%, 1) !important;
  --yaml-base-color: hsla(4, 59%, 64%, 1) !important;
  --yaml-def-meta-color: hsla(34, 37%, 70%, 1) !important;
  --yaml-keyword-color: hsla(40, 79%, 47%, 1) !important;
  --yaml-number-color: hsla(4, 59%, 64%, 1) !important;
  --yaml-string-color: hsla(40, 79%, 47%, 1) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 231, 221);
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(238, 231, 221);
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(252, 250, 248);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(228, 215, 195);
  color: rgb(89, 62, 34);
  font-weight: 650;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: color(srgb 0.9811 0.972035 0.9589);
  border-color: rgb(228, 215, 195);
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 2px 1px, rgba(0, 0, 0, 0.1) 0px 1px 4px -2.1px, rgba(0, 0, 0, 0.03) 0px 2px 8px -1.2px;
}

html[saved-theme="light"] body .note-properties {
  background-color: color(srgb 0.962 0.943667 0.918);
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
  background-color: rgba(255, 187, 0, 0.2);
  border-radius: 13.062px;
  color: rgb(182, 122, 2);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(131, 107, 73);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(238, 231, 221);
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 231, 221);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(248, 245, 241);
  color: rgb(89, 62, 34);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(191, 63, 54);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(191, 63, 54) none 0px;
  text-decoration-color: rgb(191, 63, 54);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(34, 114, 155);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(34, 114, 155) none 0px;
  text-decoration-color: rgb(34, 114, 155);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(34, 114, 155);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(34, 114, 155) none 0px;
  text-decoration-color: rgb(34, 114, 155);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(191, 63, 54);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(191, 63, 54) none 0px;
  text-decoration-color: rgb(191, 63, 54);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 187, 0, 0.2);
  color: rgb(89, 62, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(89, 62, 34) none 0px;
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body del {
  color: rgb(183, 157, 123);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(183, 157, 123) none 0px;
  text-decoration-color: rgb(183, 157, 123);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(101, 81, 52);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(252, 250, 248);
  border-color: rgb(228, 215, 195);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(50, 149, 98);
  border-color: rgba(0, 0, 0, 0.15);
}

html[saved-theme="light"] body p {
  color: rgb(131, 107, 73);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(131, 107, 73) none 0px;
  text-decoration-color: rgb(131, 107, 73);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(50, 149, 98);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(50, 149, 98) none 0px;
  text-decoration: underline 1.5px color(srgb 0.195 0.585 0.3835 / 0.22);
  text-decoration-color: color(srgb 0.195 0.585 0.3835 / 0.22);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(215, 151, 25);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(215, 151, 25) none 0px;
  text-decoration: underline 1.5px color(srgb 0.8413 0.593767 0.0987 / 0.22);
  text-decoration-color: color(srgb 0.8413 0.593767 0.0987 / 0.22);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(183, 157, 123);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(183, 157, 123) none 0px;
  text-decoration: underline 1.5px color(srgb 0.716 0.615467 0.484 / 0.22);
  text-decoration-color: color(srgb 0.716 0.615467 0.484 / 0.22);
  text-decoration-thickness: 1.5px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body dt {
  color: rgb(89, 62, 34);
  font-weight: 450;
}

html[saved-theme="light"] body ol > li {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
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
  color: rgb(183, 157, 123);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(252, 250, 248);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  width: 594px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(252, 250, 248);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(252, 250, 248);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(228, 215, 195);
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  color: rgb(89, 62, 34);
  font-weight: 450;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(228, 215, 195);
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  color: rgb(89, 62, 34);
  font-weight: 650;
}

html[saved-theme="light"] body tr {
  background-color: rgb(242, 236, 227);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(89, 62, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
  font-family: "??", "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(242, 236, 227);
  border-bottom-color: rgb(228, 215, 195);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(242, 236, 227);
  border-bottom-color: rgb(228, 215, 195);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(222, 159, 13);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(222, 159, 13);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(222, 159, 13);
  border-left-color: rgb(222, 159, 13);
  border-right-color: rgb(222, 159, 13);
  border-top-color: rgb(222, 159, 13);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(242, 236, 227);
  border-bottom-color: rgb(228, 215, 195);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(242, 236, 227);
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
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
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
  background-color: rgb(242, 236, 227);
  border-bottom-color: rgb(131, 107, 73);
  border-left-color: rgb(131, 107, 73);
  border-right-color: rgb(131, 107, 73);
  border-top-color: rgb(131, 107, 73);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(89, 62, 34);
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .transclude {
  background-color: color(srgb 0.962 0.943667 0.918);
  border-bottom-color: rgb(228, 215, 195);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(228, 215, 195);
  border-left-width: 1px;
  border-right-color: rgb(228, 215, 195);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(228, 215, 195);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: color(srgb 0.962 0.943667 0.918);
  border-bottom-color: rgb(89, 62, 34);
  border-bottom-style: solid;
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-right-style: solid;
  border-top-color: rgb(89, 62, 34);
  border-top-style: solid;
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
  border-bottom-color: rgb(200, 175, 155);
  border-left-color: rgb(200, 175, 155);
  border-right-color: rgb(200, 175, 155);
  border-top-color: rgb(200, 175, 155);
  color: rgb(200, 175, 155);
  gap: 8px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(89, 62, 34);
  font-weight: 650;
}

html[saved-theme="light"] body .callout > .callout-content {
  background-color: color(srgb 0.962 0.943667 0.918);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 34,152,225;
  background-color: color(srgb 0.701053 0.843345 0.925045);
  border-bottom-color: rgba(34, 152, 225, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(34, 152, 225, 0.2);
  border-right-color: rgba(34, 152, 225, 0.2);
  border-top-color: rgba(34, 152, 225, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 153,93,133;
  background-color: color(srgb 0.85272 0.768149 0.80779);
  border-bottom-color: rgba(153, 93, 133, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(153, 93, 133, 0.2);
  border-right-color: rgba(153, 93, 133, 0.2);
  border-top-color: rgba(153, 93, 133, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 226,72,86;
  background-color: color(srgb 0.945759 0.741385 0.747888);
  border-bottom-color: rgba(226, 72, 86, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(226, 72, 86, 0.2);
  border-right-color: rgba(226, 72, 86, 0.2);
  border-top-color: rgba(226, 72, 86, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 216,141,130;
  background-color: color(srgb 0.933014 0.829326 0.803966);
  border-bottom-color: rgba(216, 141, 130, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(216, 141, 130, 0.2);
  border-right-color: rgba(216, 141, 130, 0.2);
  border-top-color: rgba(216, 141, 130, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 226,72,86;
  background-color: color(srgb 0.945759 0.741385 0.747888);
  border-bottom-color: rgba(226, 72, 86, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(226, 72, 86, 0.2);
  border-right-color: rgba(226, 72, 86, 0.2);
  border-top-color: rgba(226, 72, 86, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 71,162,187;
  background-color: color(srgb 0.74821 0.856091 0.876613);
  border-bottom-color: rgba(71, 162, 187, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(71, 162, 187, 0.2);
  border-right-color: rgba(71, 162, 187, 0.2);
  border-top-color: rgba(71, 162, 187, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 200,175,155;
  background-color: color(srgb 0.912622 0.872659 0.835829);
  border-bottom-color: rgba(200, 175, 155, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(200, 175, 155, 0.2);
  border-right-color: rgba(200, 175, 155, 0.2);
  border-top-color: rgba(200, 175, 155, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 130,190,235;
  background-color: color(srgb 0.823406 0.891777 0.93779);
  border-bottom-color: rgba(130, 190, 235, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(130, 190, 235, 0.2);
  border-right-color: rgba(130, 190, 235, 0.2);
  border-top-color: rgba(130, 190, 235, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 173,214,171;
  background-color: color(srgb 0.87821 0.922365 0.856221);
  border-bottom-color: rgba(173, 214, 171, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(173, 214, 171, 0.2);
  border-right-color: rgba(173, 214, 171, 0.2);
  border-top-color: rgba(173, 214, 171, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 87,200,83;
  background-color: color(srgb 0.768602 0.904522 0.744064);
  border-bottom-color: rgba(87, 200, 83, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(87, 200, 83, 0.2);
  border-right-color: rgba(87, 200, 83, 0.2);
  border-top-color: rgba(87, 200, 83, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 70,206,185;
  background-color: color(srgb 0.746936 0.912169 0.874064);
  border-bottom-color: rgba(70, 206, 185, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(70, 206, 185, 0.2);
  border-right-color: rgba(70, 206, 185, 0.2);
  border-top-color: rgba(70, 206, 185, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 58,173,252;
  background-color: color(srgb 0.731642 0.87011 0.959456);
  border-bottom-color: rgba(58, 173, 252, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(58, 173, 252, 0.2);
  border-right-color: rgba(58, 173, 252, 0.2);
  border-top-color: rgba(58, 173, 252, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 255,161,32;
  background-color: color(srgb 0.98272 0.854816 0.679064);
  border-bottom-color: rgba(255, 161, 32, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 161, 32, 0.2);
  border-right-color: rgba(255, 161, 32, 0.2);
  border-top-color: rgba(255, 161, 32, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z'/%3E%3Cpath d='M15 3v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M8 13h.01'/%3E%3Cpath d='M16 13h.01'/%3E%3Cpath d='M10 16s.8 1 2 1c1.3 0 2-1 2-1'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v4'/%3E%3Cpath d='m16.2 7.8 2.9-2.9'/%3E%3Cpath d='M18 12h4'/%3E%3Cpath d='m16.2 16.2 2.9 2.9'/%3E%3Cpath d='M12 18v4'/%3E%3Cpath d='m4.9 19.1 2.9-2.9'/%3E%3Cpath d='M2 12h4'/%3E%3Cpath d='m4.9 4.9 2.9 2.9'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'/%3E%3Cpath d='M12 8v4'/%3E%3Cpath d='M12 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 12h-5'/%3E%3Cpath d='M15 8h-5'/%3E%3Cpath d='M19 17V5a2 2 0 0 0-2-2H4'/%3E%3Cpath d='M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cline x1='9' x2='15' y1='15' y2='9'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'/%3E%3Cline x1='12' x2='12' y1='16' y2='12'/%3E%3Cline x1='12' x2='12.01' y1='8' y2='8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z'/%3E%3Cpath d='M15 3v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M8 13h.01'/%3E%3Cpath d='M16 13h.01'/%3E%3Cpath d='M10 16s.8 1 2 1c1.3 0 2-1 2-1'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 7 17l-5-5'/%3E%3Cpath d='m22 10-7.5 7.5L13 16'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16.17 7.83 2 22'/%3E%3Cpath d='M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12'/%3E%3Cpath d='m7.83 7.83 8.34 8.34'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 5h8'/%3E%3Cpath d='M13 12h8'/%3E%3Cpath d='M13 19h8'/%3E%3Cpath d='m3 17 2 2 4-4'/%3E%3Crect x='3' y='4' width='6' height='6' rx='1'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
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
  color: rgb(89, 62, 34);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(248, 245, 241);
  border-bottom-color: color(srgb 0.844752 0.768077 0.659248);
  border-left-color: color(srgb 0.844752 0.768077 0.659248);
  border-right-color: color(srgb 0.844752 0.768077 0.659248);
  border-top-color: color(srgb 0.844752 0.768077 0.659248);
  box-shadow: rgba(0, 0, 0, 0.09) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.133) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.22) 0px 30px 90px 0px;
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
  color: rgb(89, 62, 34);
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
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.35);
  color: rgb(89, 62, 34);
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
  background-color: rgba(255, 255, 255, 0.35);
  border-bottom-color: rgb(89, 62, 34);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(255, 187, 0, 0.2);
  border-bottom-color: rgb(182, 122, 2);
  border-bottom-left-radius: 13.062px;
  border-bottom-right-radius: 13.062px;
  border-left-color: rgb(182, 122, 2);
  border-right-color: rgb(182, 122, 2);
  border-top-color: rgb(182, 122, 2);
  border-top-left-radius: 13.062px;
  border-top-right-radius: 13.062px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 550;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(182, 122, 2);
}

html[saved-theme="light"] body h1 {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 200,175,155;
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
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(248, 245, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 241);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(248, 245, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 241);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(248, 245, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 245, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 241);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 245, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 241);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(248, 245, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 241);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(123, 98, 66);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(123, 98, 66);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(228, 215, 195);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 450;
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
  color: rgb(183, 157, 123);
  cursor: pointer;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(228, 215, 195);
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  color: rgb(131, 107, 73);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(183, 157, 123);
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
  color: rgb(123, 98, 66);
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
  color: rgb(123, 98, 66);
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
  color: rgb(183, 157, 123);
  cursor: pointer;
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
  color: rgb(157, 128, 98);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(228, 215, 195);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .metadata {
  background-color: color(srgb 0.962 0.943667 0.918);
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
  color: rgb(131, 107, 73);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(131, 107, 73);
  border-left-color: rgb(131, 107, 73);
  border-right-color: rgb(131, 107, 73);
  border-top-color: rgb(131, 107, 73);
  color: rgb(131, 107, 73);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(238, 231, 221);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(101, 81, 52);
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
  color: rgb(131, 107, 73);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(217, 116, 109);
  border-left-color: rgb(217, 116, 109);
  border-right-color: rgb(217, 116, 109);
  border-top-color: rgb(217, 116, 109);
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.06) 0px -2px 0px 0px inset;
  color: rgb(217, 116, 109);
  font-family: "??", "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
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
  background-color: rgba(255, 255, 255, 0.5);
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
  color: rgb(34, 114, 155);
}`,
  },
};
