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
  --active-line-bg: rgb(52, 44, 35) !important;
  --alternating-color-1: rgb(218, 154, 27) !important;
  --alternating-color-1-hover-active: rgb(188, 129, 26) !important;
  --alternating-color-2: rgb(243, 80, 68) !important;
  --alternating-color-2-hover-active: rgb(224, 47, 41) !important;
  --alternating-color-3: rgb(65, 151, 185) !important;
  --alternating-color-3-hover-active: rgb(56, 116, 148) !important;
  --amount-chbx-color: rgb(52, 141, 100) !important;
  --amount-chbx-icon-color: white !important;
  --amount-chbx-radius: 100% !important;
  --anim-popdown: 0.4s slideDown forwards !important;
  --anim-popup: 0.3s slideUp forwards !important;
  --anim-popup-alt: 0.335s slideUpAlt forwards !important;
  --background-anim: background 140ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --background-modifier-active-hover: rgb(81, 64, 47) !important;
  --background-modifier-border: rgb(59, 48, 38) !important;
  --background-modifier-border-focus: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --background-modifier-border-hover: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --background-modifier-error: rgb(224, 47, 41) !important;
  --background-modifier-error-hover: rgb(243, 80, 68) !important;
  --background-modifier-error-rgb: 228,87,78 !important;
  --background-modifier-form-field: rgb(33, 27, 23) !important;
  --background-modifier-form-field-hover: rgb(33, 27, 23) !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-message: rgb(81, 64, 47) !important;
  --background-modifier-success: rgb(16, 132, 84) !important;
  --background-modifier-success-rgb: 100,194,113 !important;
  --background-modifier-warning: rgb(189, 73, 20) !important;
  --background-modifier-warning-hover: rgb(218, 94, 22) !important;
  --background-primary: rgb(46, 38, 31) !important;
  --background-primary-alt: rgb(42, 36, 30) !important;
  --background-secondary: rgb(38, 33, 28) !important;
  --background-secondary-alt: rgb(38, 33, 28) !important;
  --bases-cards-background: rgb(46, 38, 31) !important;
  --bases-cards-cover-background: rgb(42, 36, 30) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(59, 48, 38) !important;
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --bases-embed-border-color: rgb(59, 48, 38) !important;
  --bases-group-heading-property-color: rgb(171, 145, 109) !important;
  --bases-group-heading-property-weight: 450 !important;
  --bases-group-heading-value-weight: 650 !important;
  --bases-table-border-color: rgb(59, 48, 38) !important;
  --bases-table-cell-background-active: rgb(46, 38, 31) !important;
  --bases-table-cell-background-disabled: rgb(42, 36, 30) !important;
  --bases-table-cell-background-selected: rgba(78, 62, 45, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(91, 70, 51) !important;
  --bases-table-group-background: rgb(42, 36, 30) !important;
  --bases-table-header-background: rgb(46, 38, 31) !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.3) !important;
  --bases-table-header-color: rgb(171, 145, 109) !important;
  --bases-table-header-weight: 450 !important;
  --bases-table-row-background-hover: rgb(38, 33, 28) !important;
  --bases-table-summary-background: rgb(46, 38, 31) !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.3) !important;
  --blockquote-background-color: rgb(38, 33, 28) !important;
  --blockquote-border-color: rgb(59, 48, 38) !important;
  --blur-background: color-mix(in srgb, rgb(38, 33, 28) 65%, transparent) linear-gradient(rgb(38, 33, 28), color-mix(in srgb, rgb(38, 33, 28) 65%, transparent)) !important;
  --bodyFont: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(243, 80, 68) !important;
  --bold-highlight-bg: rgba(240, 81, 108, 0.2) !important;
  --bold-highlight-color: rgb(215, 192, 163) !important;
  --bold-italic-color: rgb(235, 218, 198) !important;
  --bold-italic-highlight-bg: rgba(153, 190, 35, 0.2) !important;
  --bold-italic-highlight-color: rgb(235, 218, 198) !important;
  --bold-italic-strikethrough-color: rgb(171, 145, 109) !important;
  --bold-italic-weight: 750 !important;
  --bold-weight: 750 !important;
  --bookmark-chbx-color: rgb(233, 109, 43) !important;
  --bookmark-folder-1-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) !important;
  --bookmark-folder-1-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-1-collapse-color: color-mix(in srgb, rgb(243, 80, 68) 50%, transparent) !important;
  --bookmark-folder-1-color: rgb(243, 80, 68) !important;
  --bookmark-folder-1-indent-color: color-mix(in srgb, rgb(243, 80, 68) 25%, transparent) !important;
  --bookmark-folder-10-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) !important;
  --bookmark-folder-10-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-10-collapse-color: color-mix(in srgb, rgb(46, 168, 115) 50%, transparent) !important;
  --bookmark-folder-10-color: rgb(46, 168, 115) !important;
  --bookmark-folder-10-indent-color: color-mix(in srgb, rgb(46, 168, 115) 25%, transparent) !important;
  --bookmark-folder-11-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) !important;
  --bookmark-folder-11-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-11-collapse-color: color-mix(in srgb, rgb(77, 178, 209) 50%, transparent) !important;
  --bookmark-folder-11-color: rgb(77, 178, 209) !important;
  --bookmark-folder-11-indent-color: color-mix(in srgb, rgb(77, 178, 209) 25%, transparent) !important;
  --bookmark-folder-12-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) !important;
  --bookmark-folder-12-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-12-collapse-color: color-mix(in srgb, rgb(138, 135, 217) 50%, transparent) !important;
  --bookmark-folder-12-color: rgb(138, 135, 217) !important;
  --bookmark-folder-12-indent-color: color-mix(in srgb, rgb(138, 135, 217) 25%, transparent) !important;
  --bookmark-folder-2-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) !important;
  --bookmark-folder-2-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-2-collapse-color: color-mix(in srgb, rgb(235, 106, 20) 50%, transparent) !important;
  --bookmark-folder-2-color: rgb(235, 106, 20) !important;
  --bookmark-folder-2-indent-color: color-mix(in srgb, rgb(235, 106, 20) 25%, transparent) !important;
  --bookmark-folder-3-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) !important;
  --bookmark-folder-3-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-3-collapse-color: color-mix(in srgb, rgb(229, 170, 31) 50%, transparent) !important;
  --bookmark-folder-3-color: rgb(229, 170, 31) !important;
  --bookmark-folder-3-indent-color: color-mix(in srgb, rgb(229, 170, 31) 25%, transparent) !important;
  --bookmark-folder-4-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) !important;
  --bookmark-folder-4-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-4-collapse-color: color-mix(in srgb, rgb(46, 168, 115) 50%, transparent) !important;
  --bookmark-folder-4-color: rgb(46, 168, 115) !important;
  --bookmark-folder-4-indent-color: color-mix(in srgb, rgb(46, 168, 115) 25%, transparent) !important;
  --bookmark-folder-5-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) !important;
  --bookmark-folder-5-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-5-collapse-color: color-mix(in srgb, rgb(77, 178, 209) 50%, transparent) !important;
  --bookmark-folder-5-color: rgb(77, 178, 209) !important;
  --bookmark-folder-5-indent-color: color-mix(in srgb, rgb(77, 178, 209) 25%, transparent) !important;
  --bookmark-folder-6-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) !important;
  --bookmark-folder-6-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-6-collapse-color: color-mix(in srgb, rgb(138, 135, 217) 50%, transparent) !important;
  --bookmark-folder-6-color: rgb(138, 135, 217) !important;
  --bookmark-folder-6-indent-color: color-mix(in srgb, rgb(138, 135, 217) 25%, transparent) !important;
  --bookmark-folder-7-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) !important;
  --bookmark-folder-7-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-7-collapse-color: color-mix(in srgb, rgb(243, 80, 68) 50%, transparent) !important;
  --bookmark-folder-7-color: rgb(243, 80, 68) !important;
  --bookmark-folder-7-indent-color: color-mix(in srgb, rgb(243, 80, 68) 25%, transparent) !important;
  --bookmark-folder-8-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) !important;
  --bookmark-folder-8-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-8-collapse-color: color-mix(in srgb, rgb(235, 106, 20) 50%, transparent) !important;
  --bookmark-folder-8-color: rgb(235, 106, 20) !important;
  --bookmark-folder-8-indent-color: color-mix(in srgb, rgb(235, 106, 20) 25%, transparent) !important;
  --bookmark-folder-9-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) !important;
  --bookmark-folder-9-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-9-collapse-color: color-mix(in srgb, rgb(229, 170, 31) 50%, transparent) !important;
  --bookmark-folder-9-color: rgb(229, 170, 31) !important;
  --bookmark-folder-9-indent-color: color-mix(in srgb, rgb(229, 170, 31) 25%, transparent) !important;
  --breadcrumb-bg-hover: rgb(59, 48, 38) !important;
  --breadcrumb-color: rgb(145, 121, 89) !important;
  --breadcrumb-color-hover: rgb(145, 121, 89) !important;
  --breadcrumb-separator-color: rgb(59, 48, 38) !important;
  --button-accent-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.26),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.35),0px 4px 4px -5.6px rgba(0, 0, 0, 0.37),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 4px -1px rgba(0, 0, 0, 0.14) !important;
  --button-accent-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.45),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.15),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.57),0px 0px 0px 1px rgba(255, 255, 255, 0.02) !important;
  --button-accent-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.28),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.11),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 6px -1px rgba(0, 0, 0, 0.24),0px 0px 0px 3px rgba(126, 105, 78, 0.2) !important;
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
  --button-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.05),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.24),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.25),0px 0px 0px 3px rgba(126, 105, 78, 0.2) !important;
  --button-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.06),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.25) !important;
  --callout-border-opacity: 0.1;
  --callout-bug: 228,87,78;
  --callout-color-opacity: 32.5%;
  --callout-container-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.18),0px 2px 6px 0px rgba(0, 0, 0, 0.28);
  --callout-content-background: color-mix( in srgb, rgb(42, 36, 30) 50%, rgb(46, 38, 31) );
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
  --callout-title-color: rgb(215, 192, 163);
  --callout-title-padding: 12px 16px;
  --callout-title-shadow: inset 0px -1px 1px 0px rgba(0, 0, 0, 0.25),inset 0px 1px 1px 0px rgba(255, 255, 255, 0.1);
  --callout-title-weight: 650;
  --callout-todo: 99,156,192;
  --callout-warning: 238,163,89;
  --cancelled-chbx-color: rgb(159, 149, 137) !important;
  --cancelled-chbx-text-color: rgb(145, 121, 89) !important;
  --cancelled-chbx-text-decoration: line-through !important;
  --canvas-background: rgb(46, 38, 31) !important;
  --canvas-card-label-color: rgb(145, 121, 89) !important;
  --canvas-color: 166,150,142 !important;
  --canvas-color-1: 228,87,78 !important;
  --canvas-color-2: 238,163,89 !important;
  --canvas-color-3: 249,207,81 !important;
  --canvas-color-4: 100,194,113 !important;
  --canvas-color-5: 99,156,192 !important;
  --canvas-color-6: 139,113,185 !important;
  --canvas-controls-icon-size: 15px !important;
  --canvas-dot-pattern: rgb(81, 64, 47) !important;
  --canvas-icon-color: rgb(145, 121, 89) !important;
  --canvas-icon-color-disabled: rgb(81, 64, 47) !important;
  --canvas-icon-color-hover: rgb(199, 177, 148) !important;
  --canvas-menu-bg: color-mix(in srgb, rgb(52, 44, 35) 60%, rgb(46, 38, 31)) !important;
  --canvas-menu-bg-hover: color-mix(in srgb, rgb(52, 44, 35) 10%, rgb(46, 38, 31)) !important;
  --canvas-menu-border: 1px solid rgb(59, 48, 38) !important;
  --canvas-menu-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.14),0px 1px 4px -2.1px rgba(0, 0, 0, 0.22),0px 2px 8px -1.2px rgba(0, 0, 0, 0.15) !important;
  --caret-color: rgb(145, 121, 89) !important;
  --checkbox-border-color: rgb(81, 64, 47) !important;
  --checkbox-border-color-hover: rgb(107, 86, 61) !important;
  --checkbox-color: rgb(17, 116, 73) !important;
  --checkbox-color-hover: rgb(16, 132, 84) !important;
  --checkbox-marker-color: white !important;
  --checked-border-color: rgba(255, 255, 255, 0.15) !important;
  --checked-border-color-hover: rgba(255, 255, 255, 0.1) !important;
  --checklist-bg: rgb(42, 36, 30) !important;
  --checklist-done-color: rgb(145, 121, 89) !important;
  --checklist-shadow-hover: 0px 0px 0px 3px rgba(0, 0, 0, 0.3) !important;
  --clickable-icon-radius: 5px !important;
  --clock-chbx-color: rgb(85, 133, 180) !important;
  --close-button-radius: 12px !important;
  --code-background: rgb(42, 36, 30) !important;
  --code-border-color: rgb(59, 48, 38) !important;
  --code-bracket-background: rgba(0, 0, 0, 0.3) !important;
  --code-comment: rgb(145, 121, 89) !important;
  --code-function: rgb(225, 178, 67) !important;
  --code-important: rgb(203, 128, 53) !important;
  --code-keyword: rgb(180, 100, 100) !important;
  --code-normal: rgb(215, 192, 163) !important;
  --code-operator: rgb(192, 78, 78) !important;
  --code-property: rgb(70, 169, 180) !important;
  --code-punctuation: rgb(171, 145, 109) !important;
  --code-radius: 8px !important;
  --code-string: rgb(80, 196, 101) !important;
  --code-tag: rgb(192, 78, 78) !important;
  --code-value: rgb(113, 97, 194) !important;
  --codeFont: '??', "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(107, 86, 61) !important;
  --collapse-icon-color-collapsed: rgb(107, 86, 61) !important;
  --color-accent: rgb(78, 62, 45) !important;
  --color-accent-1: rgb(91, 70, 51) !important;
  --color-accent-2: rgb(107, 78, 56) !important;
  --color-accent-hsl: 31,27%,24% !important;
  --color-base-00: rgb(28, 23, 18) !important;
  --color-base-05: rgb(38, 33, 28) !important;
  --color-base-10: rgb(46, 38, 31) !important;
  --color-base-100: rgb(235, 218, 198) !important;
  --color-base-20: rgb(52, 44, 35) !important;
  --color-base-25: rgb(59, 48, 38) !important;
  --color-base-30: rgb(81, 64, 47) !important;
  --color-base-35: rgb(107, 86, 61) !important;
  --color-base-40: rgb(145, 121, 89) !important;
  --color-base-50: rgb(171, 145, 109) !important;
  --color-base-60: rgb(199, 177, 148) !important;
  --color-base-70: rgb(215, 192, 163) !important;
  --color-blue: rgb(63, 137, 176) !important;
  --color-blue-rgb: 99,156,192 !important;
  --color-cyan: rgb(70, 169, 180) !important;
  --color-cyan-rgb: 91,175,183 !important;
  --color-d-alpha-blue: rgba(42, 177, 192, 0.2) !important;
  --color-d-alpha-gray: rgba(126, 105, 78, 0.2) !important;
  --color-d-alpha-green: rgba(153, 190, 35, 0.2) !important;
  --color-d-alpha-orange: rgba(255, 115, 0, 0.2) !important;
  --color-d-alpha-purple: rgba(112, 122, 255, 0.2) !important;
  --color-d-alpha-red: rgba(240, 81, 108, 0.2) !important;
  --color-d-alpha-yellow: rgba(255, 187, 0, 0.2) !important;
  --color-d-blue-10: rgb(106, 191, 210) !important;
  --color-d-blue-20: rgb(77, 178, 209) !important;
  --color-d-blue-30: rgb(65, 151, 185) !important;
  --color-d-blue-40: rgb(56, 116, 148) !important;
  --color-d-gray-10: rgb(235, 218, 198) !important;
  --color-d-gray-100: rgb(46, 38, 31) !important;
  --color-d-gray-110: rgb(42, 36, 30) !important;
  --color-d-gray-120: rgb(38, 33, 28) !important;
  --color-d-gray-130: rgb(33, 27, 23) !important;
  --color-d-gray-140: rgb(28, 23, 18) !important;
  --color-d-gray-20: rgb(215, 192, 163) !important;
  --color-d-gray-30: rgb(199, 177, 148) !important;
  --color-d-gray-40: rgb(171, 145, 109) !important;
  --color-d-gray-50: rgb(145, 121, 89) !important;
  --color-d-gray-60: rgb(107, 86, 61) !important;
  --color-d-gray-70: rgb(81, 64, 47) !important;
  --color-d-gray-80: rgb(59, 48, 38) !important;
  --color-d-gray-90: rgb(52, 44, 35) !important;
  --color-d-green-10: rgb(78, 198, 142) !important;
  --color-d-green-20: rgb(46, 168, 115) !important;
  --color-d-green-30: rgb(16, 132, 84) !important;
  --color-d-green-40: rgb(17, 116, 73) !important;
  --color-d-orange-10: rgb(239, 136, 57) !important;
  --color-d-orange-20: rgb(235, 106, 20) !important;
  --color-d-orange-30: rgb(218, 94, 22) !important;
  --color-d-orange-40: rgb(189, 73, 20) !important;
  --color-d-purple-10: rgb(138, 135, 217) !important;
  --color-d-purple-20: rgb(98, 96, 195) !important;
  --color-d-purple-30: rgb(74, 76, 186) !important;
  --color-d-purple-40: rgb(65, 69, 180) !important;
  --color-d-red-10: rgb(251, 132, 121) !important;
  --color-d-red-20: rgb(247, 104, 94) !important;
  --color-d-red-30: rgb(243, 80, 68) !important;
  --color-d-red-40: rgb(224, 47, 41) !important;
  --color-d-yellow-10: rgb(226, 189, 96) !important;
  --color-d-yellow-20: rgb(229, 170, 31) !important;
  --color-d-yellow-30: rgb(218, 154, 27) !important;
  --color-d-yellow-40: rgb(188, 129, 26) !important;
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
  --con-chbx-color: rgb(197, 74, 43) !important;
  --copy-code-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.39),0px 2px 4px -2px rgba(0, 0, 0, 0.39) !important;
  --copy-code-button-radius: 4px !important;
  --cursor: pointer !important;
  --dark: rgb(215, 192, 163) !important;
  --darkgray: rgb(215, 192, 163) !important;
  --disabled-component-opacity: 0.3 !important;
  --divider-color: rgb(59, 48, 38) !important;
  --divider-color-hover: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --divider-radius: 8px !important;
  --divider-width-hover: 4px !important;
  --down-chbx-color: rgb(203, 81, 72) !important;
  --drag-ghost-background: rgb(91, 70, 51) !important;
  --drag-ghost-text-color: rgb(235, 218, 198) !important;
  --dropdown-background: rgb(38, 33, 28) !important;
  --dropdown-background-hover: color-mix(in hsl, rgb(46, 38, 31) 50%, rgb(38, 33, 28)) !important;
  --dropdown-height: 31px !important;
  --editor-bg-color: rgb(46, 38, 31) !important;
  --editor-bgpattern-color: rgb(81, 64, 47) !important;
  --editor-bgpattern-size: 50px 50px !important;
  --editor-border-color: rgb(59, 48, 38) !important;
  --editor-border-radius: 12px !important;
  --editor-border-width: 1px !important;
  --editor-header-icon: 15px !important;
  --editor-pane-margin: 10px !important;
  --editor-tab-icon: 15px !important;
  --embed-background: color-mix( in srgb, rgb(42, 36, 30) 50%, rgb(46, 38, 31) ) !important;
  --embed-bg-color-mix: color-mix( in srgb, rgb(42, 36, 30) 50%, rgb(46, 38, 31) ) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-bottom: 1px solid rgb(59, 48, 38) !important;
  --embed-border-bottom-color: rgb(59, 48, 38) !important;
  --embed-border-bottom-style: solid !important;
  --embed-border-bottom-width: 1px !important;
  --embed-border-end: 1px solid rgb(59, 48, 38) !important;
  --embed-border-end-color: rgb(59, 48, 38) !important;
  --embed-border-end-style: solid !important;
  --embed-border-end-width: 1px !important;
  --embed-border-radius: 12px !important;
  --embed-border-start: 1px solid rgb(59, 48, 38) !important;
  --embed-border-start-color: rgb(59, 48, 38) !important;
  --embed-border-start-style: solid !important;
  --embed-border-start-width: 1px !important;
  --embed-border-top: 1px solid rgb(59, 48, 38) !important;
  --embed-border-top-color: rgb(59, 48, 38) !important;
  --embed-border-top-style: solid !important;
  --embed-border-top-width: 1px !important;
  --embed-edit-btn-bg: color-mix(in srgb, rgb(33, 27, 23) 70%, transparent) !important;
  --embed-edit-btn-bg-hover: color-mix(in srgb, rgb(33, 27, 23) 100%, transparent) !important;
  --embed-edit-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.5),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.5) !important;
  --embed-edit-btn-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.5),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.5),0px 1px 2px 0px rgba(0, 0, 0, 0.5) !important;
  --embed-left-right-padding: 16px !important;
  --embed-media-border-radius: 8px !important;
  --embed-padding: 6px 16px 0px !important;
  --embed-title-border: 1px solid rgb(59, 48, 38) !important;
  --embed-title-border-color: rgb(59, 48, 38) !important;
  --embed-title-border-style: solid !important;
  --embed-title-border-width: 1px !important;
  --embed-title-color: rgb(145, 121, 89) !important;
  --embed-title-font-size: 16px !important;
  --embed-title-font-weight: 550 !important;
  --embed-title-letter-spacing: normal !important;
  --embed-title-margin-bottom: 8px !important;
  --embed-title-text-transform: none !important;
  --empty-state-action-btn-bg: rgb(42, 36, 30) !important;
  --file-header-background: rgb(46, 38, 31) !important;
  --file-header-background-focused: rgb(46, 38, 31) !important;
  --file-header-border: 1px solid rgb(59, 48, 38) !important;
  --file-header-border-color: rgb(59, 48, 38) !important;
  --file-header-border-width: 1px !important;
  --file-header-font: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-title-color: rgb(171, 145, 109) !important;
  --file-line-width: 40rem !important;
  --file-max-line-width: 88% !important;
  --file-tab-gap: 0px !important;
  --flair-background: rgb(38, 33, 28) !important;
  --flair-color: rgb(215, 192, 163) !important;
  --flair-count-bg-color: rgb(38, 33, 28) !important;
  --flair-count-color: rgb(107, 86, 61) !important;
  --flair-count-padding: 2px 4px !important;
  --flair-count-radius: 5px !important;
  --font-bold: 750 !important;
  --font-extrabold: 850 !important;
  --font-extralight: 250 !important;
  --font-interface: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Inter" !important;
  --font-light: 350 !important;
  --font-medium: 550 !important;
  --font-mermaid: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Cascadia Code" !important;
  --font-normal: 450 !important;
  --font-print: '??', '??', "Inter", 'Arial' !important;
  --font-semibold: 650 !important;
  --font-text: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Inter" !important;
  --font-thin: 150 !important;
  --font-ui-smallest: 11px !important;
  --font-weight: 450 !important;
  --footnote-divider-color: rgb(59, 48, 38) !important;
  --footnote-id-color: rgb(171, 145, 109) !important;
  --footnote-id-color-no-occurrences: rgb(145, 121, 89) !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.2) !important;
  --graph-arrow: rgb(145, 121, 89) !important;
  --graph-line: rgb(59, 48, 38) !important;
  --graph-node: rgb(65, 151, 185) !important;
  --graph-node-attachment: rgb(16, 132, 84) !important;
  --graph-node-focused: rgb(215, 192, 163) !important;
  --graph-node-highlight-fill: rgb(199, 177, 148) !important;
  --graph-node-highlight-line: rgb(107, 86, 61) !important;
  --graph-node-tag: rgb(243, 80, 68) !important;
  --graph-node-unresolved: rgb(229, 170, 31) !important;
  --graph-node-unresolved-opacity: 1 !important;
  --graph-text: rgb(145, 121, 89) !important;
  --gray: rgb(171, 145, 109) !important;
  --gutter-color: color-mix(in srgb, rgb(107, 86, 61) 40%, rgb(81, 64, 47)) !important;
  --gutter-color-active: rgb(145, 121, 89) !important;
  --h1-bg-color: transparent !important;
  --h1-border-bottom-color: rgb(59, 48, 38) !important;
  --h1-border-left-color: rgb(59, 48, 38) !important;
  --h1-border-radius: 0px !important;
  --h1-border-right-color: rgb(59, 48, 38) !important;
  --h1-border-style: solid !important;
  --h1-border-top-color: rgb(59, 48, 38) !important;
  --h1-border-width: 0px !important;
  --h1-color: rgb(235, 218, 198) !important;
  --h1-text-align: left !important;
  --h1-text-transform: normal !important;
  --h1-weight: 650 !important;
  --h2-bg-color: transparent !important;
  --h2-border-bottom-color: rgb(59, 48, 38) !important;
  --h2-border-left-color: rgb(59, 48, 38) !important;
  --h2-border-radius: 0px !important;
  --h2-border-right-color: rgb(59, 48, 38) !important;
  --h2-border-style: solid !important;
  --h2-border-top-color: rgb(59, 48, 38) !important;
  --h2-border-width: 0px !important;
  --h2-color: rgb(235, 218, 198) !important;
  --h2-text-align: left !important;
  --h2-text-transform: normal !important;
  --h2-weight: 650 !important;
  --h3-bg-color: transparent !important;
  --h3-border-bottom-color: rgb(59, 48, 38) !important;
  --h3-border-left-color: rgb(59, 48, 38) !important;
  --h3-border-radius: 0px !important;
  --h3-border-right-color: rgb(59, 48, 38) !important;
  --h3-border-style: solid !important;
  --h3-border-top-color: rgb(59, 48, 38) !important;
  --h3-border-width: 0px !important;
  --h3-color: rgb(235, 218, 198) !important;
  --h3-text-align: left !important;
  --h3-text-transform: normal !important;
  --h3-weight: 650 !important;
  --h4-bg-color: transparent !important;
  --h4-border-bottom-color: rgb(59, 48, 38) !important;
  --h4-border-left-color: rgb(59, 48, 38) !important;
  --h4-border-radius: 0px !important;
  --h4-border-right-color: rgb(59, 48, 38) !important;
  --h4-border-style: solid !important;
  --h4-border-top-color: rgb(59, 48, 38) !important;
  --h4-border-width: 0px !important;
  --h4-color: rgb(235, 218, 198) !important;
  --h4-text-align: left !important;
  --h4-text-transform: normal !important;
  --h4-weight: 650 !important;
  --h5-bg-color: transparent !important;
  --h5-border-bottom-color: rgb(59, 48, 38) !important;
  --h5-border-left-color: rgb(59, 48, 38) !important;
  --h5-border-radius: 0px !important;
  --h5-border-right-color: rgb(59, 48, 38) !important;
  --h5-border-style: solid !important;
  --h5-border-top-color: rgb(59, 48, 38) !important;
  --h5-border-width: 0px !important;
  --h5-color: rgb(235, 218, 198) !important;
  --h5-text-align: left !important;
  --h5-text-transform: normal !important;
  --h5-weight: 650 !important;
  --h6-bg-color: transparent !important;
  --h6-border-bottom-color: rgb(59, 48, 38) !important;
  --h6-border-left-color: rgb(59, 48, 38) !important;
  --h6-border-radius: 0px !important;
  --h6-border-right-color: rgb(59, 48, 38) !important;
  --h6-border-style: solid !important;
  --h6-border-top-color: rgb(59, 48, 38) !important;
  --h6-border-width: 0px !important;
  --h6-color: rgb(235, 218, 198) !important;
  --h6-text-align: left !important;
  --h6-text-transform: normal !important;
  --h6-weight: 650 !important;
  --header-height: 46px !important;
  --headerFont: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(145, 121, 89) !important;
  --highlight: rgba(255, 187, 0, 0.2) !important;
  --hr-color: rgb(59, 48, 38) !important;
  --hr-thickness: 1px !important;
  --icon-bg: transparent !important;
  --icon-bg-active: rgb(59, 48, 38) !important;
  --icon-bg-active-menu: transparent !important;
  --icon-bg-hover: transparent !important;
  --icon-bg-pressed: transparent !important;
  --icon-color: color-mix(in srgb, rgb(107, 86, 61) 30%, rgb(145, 121, 89)) !important;
  --icon-color-active: rgb(171, 145, 109) !important;
  --icon-color-focused: rgb(145, 121, 89) !important;
  --icon-color-hover: color-mix(in srgb, rgb(145, 121, 89) 70%, rgb(171, 145, 109)) !important;
  --icon-container-radius: 0px !important;
  --icon-m: 16px !important;
  --icon-opacity: 1 !important;
  --icon-s: 15px !important;
  --icon-size: 16px !important;
  --icon-xl: 24px !important;
  --icon-xs: 13px !important;
  --idea-chbx-color: rgb(228, 158, 88) !important;
  --important-chbx-color: rgba(219, 77, 20, 0) !important;
  --important-chbx-icon-color: white !important;
  --important-chbx-radius: 100% !important;
  --indentation-guide-color: rgb(59, 48, 38) !important;
  --indentation-guide-color-active: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --indentation-guide-reading-indent: -1em !important;
  --info-chbx-color: rgb(72, 137, 135) !important;
  --info-chbx-icon-color: white !important;
  --inline-code-bg: rgb(33, 27, 23) !important;
  --inline-code-color: rgb(247, 104, 94) !important;
  --inline-code-radius: 4px !important;
  --inline-query-bg: color-mix(in srgb, rgb(38, 33, 28) 25%, rgb(46, 38, 31)) !important;
  --inline-query-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.26) !important;
  --inline-title-color: rgb(235, 218, 198) !important;
  --inline-title-weight: 650 !important;
  --inprogress-chbx-border-color: color-mix(in srgb, rgb(239, 153, 62) 15%, rgb(199, 177, 148)) !important;
  --inprogress-chbx-color: rgb(239, 153, 62) !important;
  --inprogress-chbx-color-hover: rgb(251, 171, 81) !important;
  --input-date-separator: rgb(145, 121, 89) !important;
  --input-font-weight: 450 !important;
  --input-height: 32px !important;
  --input-placeholder-color: rgb(145, 121, 89) !important;
  --input-radius: 8px !important;
  --input-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.02),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.25),0px 2px 4px -1px rgba(0, 0, 0, 0.2) !important;
  --input-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.45),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.15),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.57),0px 0px 0px 1px rgba(255, 255, 255, 0.02) !important;
  --input-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.06),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.25) !important;
  --interactive-accent: rgb(91, 70, 51) !important;
  --interactive-accent-hover: rgb(107, 78, 56) !important;
  --interactive-accent-hsl: 31,27%,24% !important;
  --interactive-hover: color-mix(in hsl, rgb(46, 38, 31) 50%, rgb(38, 33, 28)) !important;
  --interactive-normal: rgb(38, 33, 28) !important;
  --interface-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0 !important;
  --italic-color: rgb(77, 178, 209) !important;
  --italic-highlight-bg: rgba(42, 177, 192, 0.2) !important;
  --italic-highlight-color: rgb(215, 192, 163) !important;
  --kanban-drag-item-border: none !important;
  --kanban-drag-item-shadow: 0px 8.3px 22.8px -9px rgba(0, 0, 0, 0.49),0px 6.2px 10.1px -4.2px rgba(0, 0, 0, 0.52),0px 2.1px 6.8px -3.2px rgba(0, 0, 0, 0.59) !important;
  --kanban-item-bg: rgb(52, 44, 35) !important;
  --kanban-item-border: none !important;
  --kanban-item-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.4),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.19),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.06),0px 2px 2px 0px rgba(0, 0, 0, 0.13) !important;
  --kanban-lane-bg: color-mix(in srgb, rgb(42, 36, 30) 50%, rgb(38, 33, 28)) !important;
  --kanban-lane-border: 1px solid color-mix(in srgb, rgb(52, 44, 35) 40%, rgb(46, 38, 31)) !important;
  --kanban-lane-shadow: none !important;
  --kanban-new-item-bg: transparent !important;
  --kanban-new-item-bg-hover: rgb(46, 38, 31) !important;
  --kanban-new-item-color: rgb(145, 121, 89) !important;
  --kanban-new-item-color-hover: rgb(171, 145, 109) !important;
  --kanban-new-item-shadow: none !important;
  --kanban-new-item-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.22),0px 2px 4px 0px rgba(0, 0, 0, 0.14) !important;
  --kanban-title-count-bg: rgb(59, 48, 38) !important;
  --kanban-title-count-color: rgb(171, 145, 109) !important;
  --kanban-title-count-radius: 12px !important;
  --kanban-title-text-input-color: rgb(215, 192, 163) !important;
  --kbd-background: rgb(42, 36, 30) !important;
  --kbd-color: rgb(247, 104, 94) !important;
  --kbd-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.17),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.2) !important;
  --language-chbx-color: rgb(219, 111, 97) !important;
  --law-chbx-color: rgb(174, 138, 91) !important;
  --light: rgb(46, 38, 31) !important;
  --lightgray: rgb(38, 33, 28) !important;
  --link-ahref-color: rgb(247, 104, 94) !important;
  --link-ahref-color-hover: rgb(251, 132, 121) !important;
  --link-ahref-decoration-color: color-mix(in srgb, currentColor 22%, transparent) !important;
  --link-ahref-decoration-color-hover: color-mix(in srgb, rgb(251, 132, 121) 22%, transparent) !important;
  --link-color: rgb(229, 170, 31) !important;
  --link-color-hover: rgb(226, 189, 96) !important;
  --link-decoration-color: color-mix(in srgb, rgb(229, 170, 31) 22%, transparent) !important;
  --link-decoration-color-hover: color-mix(in srgb, rgb(226, 189, 96) 22%, transparent) !important;
  --link-decoration-opacity: 22% !important;
  --link-decoration-thickness: 1.5px !important;
  --link-external-color: rgb(46, 168, 115) !important;
  --link-external-color-hover: rgb(78, 198, 142) !important;
  --link-external-decoration-color: color-mix(in srgb, rgb(46, 168, 115) 22%, transparent) !important;
  --link-external-decoration-color-hover: color-mix(in srgb, rgb(78, 198, 142) 22%, transparent) !important;
  --link-opacity-active: 0.5 !important;
  --link-underline-offset: 2px !important;
  --link-unresolved-color: rgb(145, 121, 89) !important;
  --link-unresolved-color-hover: rgb(171, 145, 109) !important;
  --link-unresolved-decoration-color: color-mix(in srgb, rgb(145, 121, 89) 22%, transparent) !important;
  --link-unresolved-decoration-color-hover: color-mix(in srgb, rgb(171, 145, 109) 22%, transparent) !important;
  --link-unresolved-opacity: 1 !important;
  --link-weight: 450 !important;
  --list-bullet-indent-reading: -1em !important;
  --list-indent-editing: 0.6em !important;
  --list-marker-color: rgb(145, 121, 89) !important;
  --list-marker-color-collapsed: rgb(171, 145, 109) !important;
  --list-marker-color-hover: rgb(199, 177, 148) !important;
  --loading-line-bg-color: rgb(38, 33, 28) !important;
  --loading-line-color: rgb(106, 191, 210) !important;
  --loading-line-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1) !important;
  --location-chbox-color: rgb(191, 54, 54) !important;
  --menu-background: rgb(38, 33, 28) !important;
  --menu-border-color: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --menu-item-bg-active: rgb(33, 27, 23) !important;
  --menu-item-bg-hover: rgba(0, 0, 0, 0.25) !important;
  --menu-item-color-active: rgb(107, 86, 61) !important;
  --menu-item-icon-color: rgb(145, 121, 89) !important;
  --menu-item-icon-color-active: rgb(107, 86, 61) !important;
  --menu-item-radius: 7px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.228),0px 3.4px 6.7px rgba(0, 0, 0, 0.242),0px 15px 30px rgba(0, 0, 0, 0.27) !important;
  --metadata-background: color-mix(in srgb, rgb(46, 38, 31) 50%, rgb(42, 36, 30)) !important;
  --metadata-border-color: rgb(59, 48, 38) !important;
  --metadata-border-radius: 8px !important;
  --metadata-border-width: 1px !important;
  --metadata-container-padding: 12px 12px !important;
  --metadata-divider-color: rgb(59, 48, 38) !important;
  --metadata-divider-width: 0px !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.2) !important;
  --metadata-input-font: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-shadow-active: inset 0px 0px 0px 1px rgb(59, 48, 38),0px 0px 0px 1px rgb(59, 48, 38) !important;
  --metadata-input-shadow-hover: none !important;
  --metadata-input-text-color: rgb(171, 145, 109) !important;
  --metadata-key-input-color: rgb(145, 121, 89) !important;
  --metadata-key-input-color-active: rgb(199, 177, 148) !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.2) !important;
  --metadata-label-font: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(171, 145, 109) !important;
  --metadata-label-text-color-hover: rgb(171, 145, 109) !important;
  --metadata-properties-title-color: rgb(107, 86, 61) !important;
  --metadata-properties-title-color-collapsed: rgb(107, 86, 61) !important;
  --metadata-properties-title-color-hover: rgb(145, 121, 89) !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.3) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --metadata-property-radius: 7px !important;
  --metadata-tab-background: rgb(38, 33, 28) !important;
  --modal-background: rgb(46, 38, 31) !important;
  --modal-border-color: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --modal-close-button-size: 20px !important;
  --modal-radius: 16px !important;
  --monospace-font-feature: "calt" 1,"ss01" 1,"ss02" 1,"ss03" 1,"ss05" 1,"ss19" 1,"zero" 1 !important;
  --nav-collapse-icon-color: rgb(107, 86, 61) !important;
  --nav-collapse-icon-color-collapsed: rgb(145, 121, 89) !important;
  --nav-file-padding-active: 4px 8px 6px 24px !important;
  --nav-file-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.27),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.24),0px 2px 3px 0px rgba(0, 0, 0, 0.22) !important;
  --nav-file-tag-bg: transparent !important;
  --nav-file-tag-color: rgb(107, 86, 61) !important;
  --nav-folder-1-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) !important;
  --nav-folder-1-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-1-collapse-color: color-mix(in srgb, rgb(243, 80, 68) 50%, transparent) !important;
  --nav-folder-1-color: rgb(243, 80, 68) !important;
  --nav-folder-1-indent-color: color-mix(in srgb, rgb(243, 80, 68) 25%, transparent) !important;
  --nav-folder-10-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) !important;
  --nav-folder-10-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-10-collapse-color: color-mix(in srgb, rgb(46, 168, 115) 50%, transparent) !important;
  --nav-folder-10-color: rgb(46, 168, 115) !important;
  --nav-folder-10-indent-color: color-mix(in srgb, rgb(46, 168, 115) 25%, transparent) !important;
  --nav-folder-11-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) !important;
  --nav-folder-11-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-11-collapse-color: color-mix(in srgb, rgb(77, 178, 209) 50%, transparent) !important;
  --nav-folder-11-color: rgb(77, 178, 209) !important;
  --nav-folder-11-indent-color: color-mix(in srgb, rgb(77, 178, 209) 25%, transparent) !important;
  --nav-folder-12-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) !important;
  --nav-folder-12-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-12-collapse-color: color-mix(in srgb, rgb(138, 135, 217) 50%, transparent) !important;
  --nav-folder-12-color: rgb(138, 135, 217) !important;
  --nav-folder-12-indent-color: color-mix(in srgb, rgb(138, 135, 217) 25%, transparent) !important;
  --nav-folder-2-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) !important;
  --nav-folder-2-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-2-collapse-color: color-mix(in srgb, rgb(235, 106, 20) 50%, transparent) !important;
  --nav-folder-2-color: rgb(235, 106, 20) !important;
  --nav-folder-2-indent-color: color-mix(in srgb, rgb(235, 106, 20) 25%, transparent) !important;
  --nav-folder-3-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) !important;
  --nav-folder-3-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-3-collapse-color: color-mix(in srgb, rgb(229, 170, 31) 50%, transparent) !important;
  --nav-folder-3-color: rgb(229, 170, 31) !important;
  --nav-folder-3-indent-color: color-mix(in srgb, rgb(229, 170, 31) 25%, transparent) !important;
  --nav-folder-4-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) !important;
  --nav-folder-4-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-4-collapse-color: color-mix(in srgb, rgb(46, 168, 115) 50%, transparent) !important;
  --nav-folder-4-color: rgb(46, 168, 115) !important;
  --nav-folder-4-indent-color: color-mix(in srgb, rgb(46, 168, 115) 25%, transparent) !important;
  --nav-folder-5-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) !important;
  --nav-folder-5-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-5-collapse-color: color-mix(in srgb, rgb(77, 178, 209) 50%, transparent) !important;
  --nav-folder-5-color: rgb(77, 178, 209) !important;
  --nav-folder-5-indent-color: color-mix(in srgb, rgb(77, 178, 209) 25%, transparent) !important;
  --nav-folder-6-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) !important;
  --nav-folder-6-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-6-collapse-color: color-mix(in srgb, rgb(138, 135, 217) 50%, transparent) !important;
  --nav-folder-6-color: rgb(138, 135, 217) !important;
  --nav-folder-6-indent-color: color-mix(in srgb, rgb(138, 135, 217) 25%, transparent) !important;
  --nav-folder-7-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) !important;
  --nav-folder-7-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-7-collapse-color: color-mix(in srgb, rgb(243, 80, 68) 50%, transparent) !important;
  --nav-folder-7-color: rgb(243, 80, 68) !important;
  --nav-folder-7-indent-color: color-mix(in srgb, rgb(243, 80, 68) 25%, transparent) !important;
  --nav-folder-8-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) !important;
  --nav-folder-8-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-8-collapse-color: color-mix(in srgb, rgb(235, 106, 20) 50%, transparent) !important;
  --nav-folder-8-color: rgb(235, 106, 20) !important;
  --nav-folder-8-indent-color: color-mix(in srgb, rgb(235, 106, 20) 25%, transparent) !important;
  --nav-folder-9-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) !important;
  --nav-folder-9-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-9-collapse-color: color-mix(in srgb, rgb(229, 170, 31) 50%, transparent) !important;
  --nav-folder-9-color: rgb(229, 170, 31) !important;
  --nav-folder-9-indent-color: color-mix(in srgb, rgb(229, 170, 31) 25%, transparent) !important;
  --nav-folder-bg-color: transparent !important;
  --nav-folder-bg-color-hover: rgba(0, 0, 0, 0.125) !important;
  --nav-folder-collapse-color: rgb(107, 86, 61) !important;
  --nav-folder-color: rgb(171, 145, 109) !important;
  --nav-heading-color: rgb(145, 121, 89) !important;
  --nav-heading-color-collapsed: rgb(145, 121, 89) !important;
  --nav-heading-color-collapsed-hover: rgb(145, 121, 89) !important;
  --nav-heading-color-hover: rgb(145, 121, 89) !important;
  --nav-heading-weight: 550 !important;
  --nav-heading-weight-hover: 550 !important;
  --nav-indentation-guide-color: rgb(59, 48, 38) !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.125) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.125) !important;
  --nav-item-background-selected: rgba(41, 88, 107, 0.5) !important;
  --nav-item-background-selected-hover: rgba(41, 88, 107, 0.4) !important;
  --nav-item-color: rgb(171, 145, 109) !important;
  --nav-item-color-active: rgb(171, 145, 109) !important;
  --nav-item-color-highlighted: rgb(107, 78, 56) !important;
  --nav-item-color-hover: rgb(171, 145, 109) !important;
  --nav-item-color-selected: rgb(215, 192, 163) !important;
  --nav-item-padding: 5px 8px 5px 24px !important;
  --nav-item-parent-padding: 5px 8px 5px 24px !important;
  --nav-item-radius: 6px !important;
  --nav-item-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.23) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgb(145, 121, 89) !important;
  --nav-tag-color-active: rgb(171, 145, 109) !important;
  --nav-tag-color-hover: rgb(171, 145, 109) !important;
  --nav-tag-weight: 650 !important;
  --new-tab-btn-radius: 2em !important;
  --non-alternating-color: rgb(107, 86, 61) !important;
  --non-alternating-color-hover-active: rgb(81, 64, 47) !important;
  --normal-highlight-bg: rgba(255, 187, 0, 0.2) !important;
  --normal-highlight-color: rgb(215, 192, 163) !important;
  --note-chbx-color: rgb(196, 90, 74) !important;
  --notice-color: rgb(215, 192, 163) !important;
  --notice-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),0px 2px 9px -2.1px rgba(0, 0, 0, 0.4),0px 3px 17px -4.3px rgba(0, 0, 0, 0.3),0px 7px 30px -5.5px rgba(0, 0, 0, 0.2) !important;
  --pcr-btn-shadow: inset 0px 0px 0px 1.5px rgba(255, 255, 255, 0.2) !important;
  --pdf-background: rgb(46, 38, 31) !important;
  --pdf-page-background: rgb(46, 38, 31) !important;
  --pdf-shadow: 0 0 0 1px rgb(59, 48, 38) !important;
  --pdf-sidebar-background: rgb(46, 38, 31) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(59, 48, 38) !important;
  --pill-background: rgba(0, 0, 0, 0.2) !important;
  --pill-background-hover: rgba(0, 0, 0, 0.2) !important;
  --pill-border-color: color-mix(in srgb, rgb(59, 48, 38) 50%, transparent) !important;
  --pill-border-color-hover: color-mix(in srgb, color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) 50%, transparent) !important;
  --pill-color: rgb(199, 177, 148) !important;
  --pill-color-hover: rgb(215, 192, 163) !important;
  --pill-color-remove: rgb(107, 86, 61) !important;
  --pill-color-remove-hover: rgb(107, 86, 61) !important;
  --pill-tag-bg-1: rgba(255, 187, 0, 0.2) !important;
  --pill-tag-bg-2: rgba(240, 81, 108, 0.2) !important;
  --pill-tag-bg-3: rgba(42, 177, 192, 0.2) !important;
  --pill-tag-color-1: rgb(229, 170, 31) !important;
  --pill-tag-color-2: rgb(247, 104, 94) !important;
  --pill-tag-color-3: rgb(77, 178, 209) !important;
  --pill-tag-shadow-hover: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.05) !important;
  --pill-tag-weight: 550 !important;
  --pmr-cal-td-padding: 4px 4px 6px 4px !important;
  --pmr-cal-td-radius: 5px !important;
  --popup-bg-blur: 3px !important;
  --pro-chbx-color: rgb(77, 163, 118) !important;
  --progress-background: rgb(38, 33, 28) !important;
  --progress-bar-outline: rgba(255, 255, 255, 0.1) !important;
  --progress-border-width: 1px !important;
  --progress-color-1: rgb(243, 80, 68) !important;
  --progress-color-2: rgb(218, 94, 22) !important;
  --progress-color-3: rgb(218, 154, 27) !important;
  --progress-color-4: rgb(17, 116, 73) !important;
  --progress-color-5: linear-gradient(45deg, rgb(243, 80, 68), rgb(229, 170, 31), rgb(77, 178, 209)) !important;
  --progress-gradient-1: rgb(243, 80, 68) !important;
  --progress-gradient-2: rgb(229, 170, 31) !important;
  --progress-gradient-3: rgb(77, 178, 209) !important;
  --progress-height: 8px !important;
  --progress-value-outline: rgba(255, 255, 255, 0.21) !important;
  --progress-value-radius: 8px !important;
  --progress-width: 220px !important;
  --prompt-background: rgb(46, 38, 31) !important;
  --prompt-border-color: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --prompt-input-background: rgb(46, 38, 31) !important;
  --prompt-instructions-background: color-mix(in hsl, rgb(46, 38, 31) 60%, rgb(38, 33, 28)) !important;
  --prompt-results-background: rgb(46, 38, 31) !important;
  --prompt-separator-border: 1px solid rgb(52, 44, 35) !important;
  --prompt-suggestion-background-selected: rgba(0, 0, 0, 0.1) !important;
  --prompt-suggestion-color: rgb(171, 145, 109) !important;
  --prompt-suggestion-color-selected: rgb(215, 192, 163) !important;
  --prompt-suggestion-highlight-color: color-mix(in srgb, rgb(171, 145, 109) 70%, white) !important;
  --prompt-suggestion-highlight-color-selected: rgb(215, 192, 163) !important;
  --prompt-suggestion-shadow-selected: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.14),0px 2px 6px 0px rgba(0, 0, 0, 0.12) !important;
  --question-chbx-color: rgb(154, 94, 181) !important;
  --question-chbx-icon-color: white !important;
  --quote-chbx-color: rgb(65, 130, 180) !important;
  --quote-chbx-icon-color: white !important;
  --radius-xs: 2px !important;
  --raised-background: color-mix(in srgb, rgb(38, 33, 28) 65%, transparent) linear-gradient(rgb(38, 33, 28), color-mix(in srgb, rgb(38, 33, 28) 65%, transparent)) !important;
  --resched-chbx-color: rgb(118, 162, 161) !important;
  --ribbon-background: rgb(38, 33, 28) !important;
  --ribbon-background-collapsed: rgb(46, 38, 31) !important;
  --ribbon-border-width: 1px !important;
  --ribbon-icon: 15px !important;
  --ribbon-icon-spacing: 4px !important;
  --ribbon-margin-bottom: 10px !important;
  --ribbon-radius: 12px !important;
  --ribbon-slideout-background: rgb(42, 36, 30) !important;
  --ribbon-slideout-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.35),0px 5px 5px -5px rgba(0, 0, 0, 0.38) !important;
  --sched-chbx-color: rgb(159, 149, 137) !important;
  --scrollbar-active-thumb-bg: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: rgb(59, 48, 38) !important;
  --search-clear-button-color: color-mix(in srgb, rgb(107, 86, 61) 30%, rgb(145, 121, 89)) !important;
  --search-clear-button-color-hover: rgb(243, 80, 68) !important;
  --search-clear-button-size: 12px !important;
  --search-icon-color: color-mix(in srgb, rgb(107, 86, 61) 30%, rgb(145, 121, 89)) !important;
  --search-icon-size: 14px !important;
  --search-result-background: rgb(42, 36, 30) !important;
  --search-result-background-hover: color-mix(in srgb, rgb(33, 27, 23) 50%, rgb(28, 23, 18)) !important;
  --search-result-dest-file-bg: rgb(38, 33, 28) !important;
  --search-result-dest-file-bg-hover: rgb(28, 23, 18) !important;
  --search-result-dest-file-color: rgb(145, 121, 89) !important;
  --search-result-dest-file-icon-color: rgb(81, 64, 47) !important;
  --search-result-dest-file-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.25) !important;
  --search-result-dest-file-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.25),0px 2px 3px 0px rgba(0, 0, 0, 0.29) !important;
  --secondary: rgb(78, 62, 45) !important;
  --setting-group-heading-color: rgb(215, 192, 163) !important;
  --setting-group-heading-weight: 650 !important;
  --setting-items-background: rgb(42, 36, 30) !important;
  --setting-items-border-color: rgb(59, 48, 38) !important;
  --settings-nav-group-title-color: rgb(107, 86, 61) !important;
  --settings-nav-item-active-color: rgb(46, 38, 31) !important;
  --settings-nav-item-bg-active: rgb(33, 27, 23) !important;
  --settings-nav-item-bg-hover: transparent !important;
  --settings-nav-item-padding: 7px 12px 7px 12px !important;
  --settings-nav-item-padding-active: 6px 12px 8px 20px !important;
  --settings-nav-item-padding-hover: 7px 12px 7px 20px !important;
  --settings-nav-item-radius: 7px !important;
  --settings-nav-item-text-color: rgb(171, 145, 109) !important;
  --settings-nav-item-text-color-active: rgb(81, 64, 47) !important;
  --settings-nav-item-text-color-hover: rgb(215, 192, 163) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.271),0px 6.3px 24.7px rgba(0, 0, 0, 0.312),0px 30px 90px rgba(0, 0, 0, 0.4) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.228),0px 3.4px 6.7px rgba(0, 0, 0, 0.242),0px 15px 30px rgba(0, 0, 0, 0.27) !important;
  --sidebar-nav-icon: 15px !important;
  --sidebar-tab-icon: 15px !important;
  --slider-thumb-bg: rgb(215, 192, 163) !important;
  --slider-thumb-border-color: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --slider-thumb-border-width: 0px !important;
  --slider-thumb-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.35),inset 0pc 1px 0px 1px rgba(255, 255, 255, 0.3),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.29),0px 1px 2px 0px rgba(0, 0, 0, 0.5) !important;
  --slider-thumb-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.35),inset 0pc 1px 0px 1px rgba(255, 255, 255, 0.3),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.29),0px 1px 2px 0px rgba(0, 0, 0, 0.5),0px 0px 0px 6px rgba(255, 255, 255, 0.08) !important;
  --slider-track-background: rgb(38, 33, 28) !important;
  --slider-track-height: 5px !important;
  --slider-track-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.04) !important;
  --star-chbx-color: rgb(229, 154, 6) !important;
  --star-chbx-icon-color: white !important;
  --status-bar-background: rgb(38, 33, 28) !important;
  --status-bar-border-color: rgb(59, 48, 38) !important;
  --status-bar-floating-bg: rgb(42, 36, 30) !important;
  --status-bar-floating-offset: 4px !important;
  --status-bar-floating-opacity: 0.5 !important;
  --status-bar-floating-opacity-hover: 1 !important;
  --status-bar-floating-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.35),0px 5px 5px -5px rgba(0, 0, 0, 0.38) !important;
  --status-bar-item-bg-hover: transparent !important;
  --status-bar-item-clickable-bg-active: transparent !important;
  --status-bar-item-clickable-color-active: rgb(107, 86, 61) !important;
  --status-bar-item-color: rgb(145, 121, 89) !important;
  --status-bar-item-color-hover: rgb(199, 177, 148) !important;
  --status-bar-text-color: rgb(171, 145, 109) !important;
  --strikethrough-color: rgb(145, 121, 89) !important;
  --strikethrough-highlight-bg: rgba(255, 187, 0, 0.2) !important;
  --strikethrough-highlight-color: rgb(145, 121, 89) !important;
  --style-settings-container-bg: color-mix(in srgb, rgb(42, 36, 30) 50%, transparent) !important;
  --suggestion-background: rgb(46, 38, 31) !important;
  --swatch-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3) !important;
  --sync-avatar-color-1: rgb(192, 78, 78) !important;
  --sync-avatar-color-2: rgb(203, 128, 53) !important;
  --sync-avatar-color-3: rgb(225, 178, 67) !important;
  --sync-avatar-color-4: rgb(80, 196, 101) !important;
  --sync-avatar-color-5: rgb(70, 169, 180) !important;
  --sync-avatar-color-6: rgb(63, 137, 176) !important;
  --sync-avatar-color-7: rgb(113, 97, 194) !important;
  --sync-avatar-color-8: rgb(180, 100, 100) !important;
  --sync-icon-success: rgb(17, 116, 73) !important;
  --sync-icon-success-active: rgb(107, 86, 61) !important;
  --sync-icon-success-hover: rgb(16, 132, 84) !important;
  --sync-icon-working: rgb(189, 73, 20) !important;
  --sync-icon-working-active: rgb(107, 86, 61) !important;
  --sync-icon-working-hover: rgb(218, 94, 22) !important;
  --tab-active-bg: rgb(46, 38, 31) !important;
  --tab-active-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1),inset 0px -2px 0px 1px rgba(0, 0, 0, 0.25),0px 1px 2px -0.1px rgba(0, 0, 0, 0.47) !important;
  --tab-background-active: rgb(46, 38, 31) !important;
  --tab-bg: transparent !important;
  --tab-container-background: rgb(38, 33, 28) !important;
  --tab-curves-display: none !important;
  --tab-divider-color: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) !important;
  --tab-header-container-border-bottom: none !important;
  --tab-header-container-inner-margin: default !important;
  --tab-header-container-inner-padding: 2px !important;
  --tab-header-container-padding: 0 12px 4px 12px !important;
  --tab-header-container-transition: padding-bottom none !important;
  --tab-outline-color: transparent !important;
  --tab-stacked-header-width: 46px !important;
  --tab-stacked-shadow: -2.9px 0 10.5px -6.2px rgba(0, 0, 0, 0.31),-6.2px 0 3.6px -5.2px rgba(0, 0, 0, 0.27),-9.4px 0 8.4px -4.1px rgba(0, 0, 0, 0.2) !important;
  --tab-status-radius: 4px !important;
  --tab-switcher-background: rgb(38, 33, 28) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(38, 33, 28), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(78, 62, 45) !important;
  --tab-text-color: rgb(145, 121, 89) !important;
  --tab-text-color-active: rgb(171, 145, 109) !important;
  --tab-text-color-focused: rgb(171, 145, 109) !important;
  --tab-text-color-focused-active: rgb(171, 145, 109) !important;
  --tab-text-color-focused-active-current: rgb(215, 192, 163) !important;
  --tab-text-color-focused-highlighted: rgb(78, 62, 45) !important;
  --tab-z-index: 1 !important;
  --table-add-button-border-color: rgb(59, 48, 38) !important;
  --table-background: rgb(38, 33, 28) !important;
  --table-border-color: rgb(59, 48, 38) !important;
  --table-column-alt-background: rgb(33, 27, 23) !important;
  --table-drag-handle-background-active: rgb(91, 70, 51) !important;
  --table-drag-handle-color: rgb(145, 121, 89) !important;
  --table-drag-handle-color-active: rgb(235, 218, 198) !important;
  --table-header-background: rgb(33, 27, 23) !important;
  --table-header-background-hover: rgb(33, 27, 23) !important;
  --table-header-border-color: rgb(59, 48, 38) !important;
  --table-header-color: rgb(215, 192, 163) !important;
  --table-header-weight: 650 !important;
  --table-row-alt-background: rgb(38, 33, 28) !important;
  --table-row-alt-background-hover: rgb(38, 33, 28) !important;
  --table-row-background-hover: rgb(38, 33, 28) !important;
  --table-selection: rgba(78, 62, 45, 0.1) !important;
  --table-selection-border-color: rgb(91, 70, 51) !important;
  --tag-background: rgba(0, 0, 0, 0.3) !important;
  --tag-background-hover: rgba(0, 0, 0, 0.2) !important;
  --tag-border-color: rgba(0, 0, 0, 0.25) !important;
  --tag-border-color-hover: rgba(0, 0, 0, 0.35) !important;
  --tag-border-width: 1px !important;
  --tag-color: rgb(65, 151, 185) !important;
  --tag-color-hover: rgb(77, 178, 209) !important;
  --tag-padding-x: 0.6em !important;
  --tag-padding-y: 0.15em !important;
  --tag-radius: 1em !important;
  --tag-shadow: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.2) !important;
  --tag-shadow-active: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.2) !important;
  --tag-shadow-hover: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 3px rgba(0, 0, 0, 0.15) !important;
  --telephone-chbx-color: rgb(56, 159, 104) !important;
  --tertiary: rgb(107, 78, 56) !important;
  --text-accent: rgb(78, 62, 45) !important;
  --text-accent-hover: rgb(107, 78, 56) !important;
  --text-error: rgb(243, 80, 68) !important;
  --text-faint: rgb(145, 121, 89) !important;
  --text-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0 !important;
  --text-highlight-bg: rgba(255, 187, 0, 0.2) !important;
  --text-highlight-bg-rgb: 249,207,81 !important;
  --text-input-bg-active: rgb(28, 23, 18) !important;
  --text-input-border-color: rgb(28, 23, 18) !important;
  --text-input-color: rgb(215, 192, 163) !important;
  --text-input-color-focused: rgb(215, 192, 163) !important;
  --text-input-shadow-active: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.03),inset 0px -1px 0px 0px rgba(0, 0, 0, 0.39),0px 1px 6px 0px rgba(0, 0, 0, 0.37) !important;
  --text-muted: rgb(171, 145, 109) !important;
  --text-normal: rgb(215, 192, 163) !important;
  --text-on-accent: rgb(235, 218, 198) !important;
  --text-on-accent-inverted: rgb(28, 23, 18) !important;
  --text-selection: rgba(126, 105, 78, 0.2) !important;
  --text-selection-theme-bg: color-mix(in srgb, rgb(145, 121, 89) 30%, transparent) !important;
  --text-selection-theme-text-color: color-mix(in srgb, currentColor 70%, white) !important;
  --text-success: rgb(16, 132, 84) !important;
  --text-warning: rgb(218, 94, 22) !important;
  --textHighlight: rgba(255, 187, 0, 0.2) !important;
  --titleFont: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(38, 33, 28) !important;
  --titlebar-background-focused: rgb(38, 33, 28) !important;
  --titlebar-border-color: rgb(59, 48, 38) !important;
  --titlebar-text-color: rgb(81, 64, 47) !important;
  --titlebar-text-color-focused: rgb(107, 86, 61) !important;
  --titlebar-text-weight: 450 !important;
  --toggle-bg: color-mix(in srgb, rgb(81, 64, 47) 50%, rgb(107, 86, 61)) !important;
  --toggle-bg-enabled: rgb(17, 116, 73) !important;
  --toggle-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.19),inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),inset 0 0 1px rgba(0, 0, 0, 0.4) !important;
  --toggle-shadow-focus: inset 0 6px 20px rgba(0, 0, 0, 0.28),inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),inset 0 0 1px rgba(0, 0, 0, 0.44),0px 0px 0px 5px rgba(255, 255, 255, 0.08) !important;
  --toggle-shadow-hover: inset 0 6px 20px rgba(0, 0, 0, 0.28),inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),inset 0 0 1px rgba(0, 0, 0, 0.44) !important;
  --toggle-thumb-color: rgb(235, 218, 198) !important;
  --toggle-thumb-shadow: inset 0px 1px 0px 1px rgba(255, 255, 255, 0.5),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25),0 2px 2px rgba(0, 0, 0, 0.35) !important;
  --tooltip-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.3),0px 2px 4px -1.4px rgba(0, 0, 0, 0.3),0px 3px 10px -1.7px rgba(0, 0, 0, 0.14) !important;
  --traffic-lights-offset-x: 46px !important;
  --traffic-lights-offset-y: 46px !important;
  --underline-color: rgb(215, 192, 163) !important;
  --underline-decoration-color: color-mix(in srgb, currentColor 22%, transparent) !important;
  --underline-decoration-opacity: 22% !important;
  --up-chbx-color: rgb(83, 178, 124) !important;
  --vault-name-background: rgb(42, 36, 30) !important;
  --vault-name-border: 1px solid rgb(59, 48, 38) !important;
  --vault-name-border-width: 1px !important;
  --vault-name-color: rgb(171, 145, 109) !important;
  --vault-name-color-hover: rgb(199, 177, 148) !important;
  --vault-profile-color: rgb(171, 145, 109) !important;
  --vault-profile-color-hover: rgb(171, 145, 109) !important;
  --vault-profile-font-weight: 650 !important;
  --yaml-atom-color: rgb(106, 191, 210) !important;
  --yaml-base-color: rgb(247, 104, 94) !important;
  --yaml-def-meta-color: rgb(145, 121, 89) !important;
  --yaml-keyword-color: rgb(218, 154, 27) !important;
  --yaml-number-color: rgb(247, 104, 94) !important;
  --yaml-string-color: rgb(218, 154, 27) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 33, 28);
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(38, 33, 28);
  color: rgb(215, 192, 163);
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
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(243, 80, 68);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(243, 80, 68) none 0px;
  text-decoration: rgb(243, 80, 68);
  text-decoration-color: rgb(243, 80, 68);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(77, 178, 209);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(77, 178, 209) none 0px;
  text-decoration: rgb(77, 178, 209);
  text-decoration-color: rgb(77, 178, 209);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(77, 178, 209);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(77, 178, 209) none 0px;
  text-decoration: rgb(77, 178, 209);
  text-decoration-color: rgb(77, 178, 209);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(243, 80, 68);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(243, 80, 68) none 0px;
  text-decoration: rgb(243, 80, 68);
  text-decoration-color: rgb(243, 80, 68);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 187, 0, 0.2);
  color: rgb(215, 192, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(215, 192, 163) none 0px;
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body del {
  color: rgb(215, 192, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(215, 192, 163) none 0px;
  text-decoration: line-through rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body p {
  color: rgb(171, 145, 109);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(171, 145, 109) none 0px;
  text-decoration: rgb(171, 145, 109);
  text-decoration-color: rgb(171, 145, 109);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(46, 168, 115);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(46, 168, 115) none 0px;
  text-decoration: underline 1.5px color(srgb 0.1806 0.6594 0.45192 / 0.22);
  text-decoration-color: color(srgb 0.1806 0.6594 0.45192 / 0.22);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
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
  background-color: rgb(46, 38, 31);
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(46, 38, 31);
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(145, 121, 89);
  text-decoration: rgb(145, 121, 89);
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

html[saved-theme="dark"] body pre > code, pre:has(> code) {
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
  border-bottom-color: rgb(215, 192, 163);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(215, 192, 163);
  border-radius: 8px;
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
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
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(145, 121, 89);
  text-decoration: line-through rgb(145, 121, 89);
  text-decoration-color: rgb(145, 121, 89);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(81, 64, 47);
  border-left-color: rgb(81, 64, 47);
  border-right-color: rgb(81, 64, 47);
  border-top-color: rgb(81, 64, 47);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(145, 121, 89);
  text-decoration: line-through rgb(145, 121, 89);
  text-decoration-color: rgb(145, 121, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
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
  text-decoration: rgb(215, 192, 163);
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.1);
  color: rgb(215, 192, 163);
  font-weight: 450;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(215, 192, 163);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
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
  text-decoration: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(171, 145, 109);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  text-decoration: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(171, 145, 109);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  text-decoration: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0.125);
  border-bottom-color: rgb(171, 145, 109);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(171, 145, 109);
  cursor: pointer;
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
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
  text-decoration: rgb(145, 121, 89);
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
  text-decoration: rgb(171, 145, 109);
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
  text-decoration: rgb(171, 145, 109);
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
  text-decoration: underline dotted rgb(215, 192, 163);
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
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 31 !important;
  --accent-l: 50% !important;
  --accent-s: 23% !important;
  --active-line-bg: rgb(252, 250, 248) !important;
  --alternating-color-1: rgb(215, 151, 25) !important;
  --alternating-color-1-hover-active: rgb(182, 122, 2) !important;
  --alternating-color-2: rgb(191, 63, 54) !important;
  --alternating-color-2-hover-active: rgb(154, 34, 25) !important;
  --alternating-color-3: rgb(34, 114, 155) !important;
  --alternating-color-3-hover-active: rgb(10, 73, 118) !important;
  --amount-chbx-color: rgb(61, 148, 107) !important;
  --amount-chbx-icon-color: white !important;
  --amount-chbx-radius: 100% !important;
  --anim-popdown: 0.4s slideDown forwards !important;
  --anim-popup: 0.3s slideUp forwards !important;
  --anim-popup-alt: 0.335s slideUpAlt forwards !important;
  --background-anim: background 140ms cubic-bezier(0.45, 0.05, 0.55, 0.95) !important;
  --background-modifier-active-hover: rgb(228, 215, 195) !important;
  --background-modifier-border: rgb(228, 215, 195) !important;
  --background-modifier-border-focus: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --background-modifier-border-hover: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --background-modifier-error: rgb(191, 63, 54) !important;
  --background-modifier-error-hover: rgb(223, 69, 58) !important;
  --background-modifier-error-rgb: 223,90,90 !important;
  --background-modifier-form-field: rgb(242, 236, 227) !important;
  --background-modifier-form-field-hover: rgb(242, 236, 227) !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.5) !important;
  --background-modifier-message: rgb(131, 107, 73) !important;
  --background-modifier-success: rgb(50, 149, 98) !important;
  --background-modifier-success-rgb: 87,185,132 !important;
  --background-modifier-warning: rgb(215, 92, 40) !important;
  --background-modifier-warning-hover: rgb(235, 125, 66) !important;
  --background-primary: rgb(248, 245, 241) !important;
  --background-primary-alt: rgb(242, 236, 227) !important;
  --background-secondary: rgb(238, 231, 221) !important;
  --background-secondary-alt: rgb(238, 231, 221) !important;
  --bases-cards-background: rgb(248, 245, 241) !important;
  --bases-cards-cover-background: rgb(242, 236, 227) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(228, 215, 195) !important;
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --bases-embed-border-color: rgb(228, 215, 195) !important;
  --bases-group-heading-property-color: rgb(131, 107, 73) !important;
  --bases-group-heading-property-weight: 450 !important;
  --bases-group-heading-value-weight: 650 !important;
  --bases-table-border-color: rgb(228, 215, 195) !important;
  --bases-table-cell-background-active: rgb(248, 245, 241) !important;
  --bases-table-cell-background-disabled: rgb(242, 236, 227) !important;
  --bases-table-cell-background-selected: rgba(157, 128, 98, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(165, 138, 111) !important;
  --bases-table-group-background: rgb(242, 236, 227) !important;
  --bases-table-header-background: rgb(248, 245, 241) !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.5) !important;
  --bases-table-header-color: rgb(131, 107, 73) !important;
  --bases-table-header-weight: 450 !important;
  --bases-table-row-background-hover: rgb(252, 250, 248) !important;
  --bases-table-summary-background: rgb(248, 245, 241) !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.5) !important;
  --blockquote-background-color: rgb(252, 250, 248) !important;
  --blockquote-border-color: rgb(228, 215, 195) !important;
  --blur-background: color-mix(in srgb, rgb(248, 245, 241) 65%, transparent) linear-gradient(rgb(248, 245, 241), color-mix(in srgb, rgb(248, 245, 241) 65%, transparent)) !important;
  --bodyFont: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(191, 63, 54) !important;
  --bold-highlight-bg: rgba(240, 81, 108, 0.2) !important;
  --bold-highlight-color: rgb(89, 62, 34) !important;
  --bold-italic-color: rgb(67, 46, 20) !important;
  --bold-italic-highlight-bg: rgba(153, 190, 35, 0.2) !important;
  --bold-italic-highlight-color: rgb(67, 46, 20) !important;
  --bold-italic-strikethrough-color: rgb(157, 128, 98) !important;
  --bold-italic-weight: 750 !important;
  --bold-weight: 750 !important;
  --bookmark-chbx-color: rgb(235, 125, 66) !important;
  --bookmark-folder-1-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) !important;
  --bookmark-folder-1-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-1-collapse-color: color-mix(in srgb, rgb(191, 63, 54) 50%, transparent) !important;
  --bookmark-folder-1-color: rgb(191, 63, 54) !important;
  --bookmark-folder-1-indent-color: color-mix(in srgb, rgb(191, 63, 54) 25%, transparent) !important;
  --bookmark-folder-10-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) !important;
  --bookmark-folder-10-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-10-collapse-color: color-mix(in srgb, rgb(26, 122, 79) 50%, transparent) !important;
  --bookmark-folder-10-color: rgb(26, 122, 79) !important;
  --bookmark-folder-10-indent-color: color-mix(in srgb, rgb(26, 122, 79) 25%, transparent) !important;
  --bookmark-folder-11-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) !important;
  --bookmark-folder-11-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-11-collapse-color: color-mix(in srgb, rgb(34, 114, 155) 50%, transparent) !important;
  --bookmark-folder-11-color: rgb(34, 114, 155) !important;
  --bookmark-folder-11-indent-color: color-mix(in srgb, rgb(34, 114, 155) 25%, transparent) !important;
  --bookmark-folder-12-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) !important;
  --bookmark-folder-12-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-12-collapse-color: color-mix(in srgb, rgb(116, 69, 150) 50%, transparent) !important;
  --bookmark-folder-12-color: rgb(116, 69, 150) !important;
  --bookmark-folder-12-indent-color: color-mix(in srgb, rgb(116, 69, 150) 25%, transparent) !important;
  --bookmark-folder-2-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) !important;
  --bookmark-folder-2-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-2-collapse-color: color-mix(in srgb, rgb(215, 92, 40) 50%, transparent) !important;
  --bookmark-folder-2-color: rgb(215, 92, 40) !important;
  --bookmark-folder-2-indent-color: color-mix(in srgb, rgb(215, 92, 40) 25%, transparent) !important;
  --bookmark-folder-3-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) !important;
  --bookmark-folder-3-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-3-collapse-color: color-mix(in srgb, rgb(182, 122, 2) 50%, transparent) !important;
  --bookmark-folder-3-color: rgb(182, 122, 2) !important;
  --bookmark-folder-3-indent-color: color-mix(in srgb, rgb(182, 122, 2) 25%, transparent) !important;
  --bookmark-folder-4-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) !important;
  --bookmark-folder-4-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-4-collapse-color: color-mix(in srgb, rgb(26, 122, 79) 50%, transparent) !important;
  --bookmark-folder-4-color: rgb(26, 122, 79) !important;
  --bookmark-folder-4-indent-color: color-mix(in srgb, rgb(26, 122, 79) 25%, transparent) !important;
  --bookmark-folder-5-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) !important;
  --bookmark-folder-5-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-5-collapse-color: color-mix(in srgb, rgb(34, 114, 155) 50%, transparent) !important;
  --bookmark-folder-5-color: rgb(34, 114, 155) !important;
  --bookmark-folder-5-indent-color: color-mix(in srgb, rgb(34, 114, 155) 25%, transparent) !important;
  --bookmark-folder-6-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) !important;
  --bookmark-folder-6-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-6-collapse-color: color-mix(in srgb, rgb(116, 69, 150) 50%, transparent) !important;
  --bookmark-folder-6-color: rgb(116, 69, 150) !important;
  --bookmark-folder-6-indent-color: color-mix(in srgb, rgb(116, 69, 150) 25%, transparent) !important;
  --bookmark-folder-7-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) !important;
  --bookmark-folder-7-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-7-collapse-color: color-mix(in srgb, rgb(191, 63, 54) 50%, transparent) !important;
  --bookmark-folder-7-color: rgb(191, 63, 54) !important;
  --bookmark-folder-7-indent-color: color-mix(in srgb, rgb(191, 63, 54) 25%, transparent) !important;
  --bookmark-folder-8-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) !important;
  --bookmark-folder-8-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-8-collapse-color: color-mix(in srgb, rgb(215, 92, 40) 50%, transparent) !important;
  --bookmark-folder-8-color: rgb(215, 92, 40) !important;
  --bookmark-folder-8-indent-color: color-mix(in srgb, rgb(215, 92, 40) 25%, transparent) !important;
  --bookmark-folder-9-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) !important;
  --bookmark-folder-9-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --bookmark-folder-9-collapse-color: color-mix(in srgb, rgb(182, 122, 2) 50%, transparent) !important;
  --bookmark-folder-9-color: rgb(182, 122, 2) !important;
  --bookmark-folder-9-indent-color: color-mix(in srgb, rgb(182, 122, 2) 25%, transparent) !important;
  --breadcrumb-bg-hover: rgb(238, 231, 221) !important;
  --breadcrumb-color: rgb(157, 128, 98) !important;
  --breadcrumb-color-hover: rgb(157, 128, 98) !important;
  --breadcrumb-separator-color: rgb(228, 215, 195) !important;
  --button-accent-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.09),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.15),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.22),0px 2px 4px -1px rgba(0, 0, 0, 0.19) !important;
  --button-accent-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.09),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.6) !important;
  --button-accent-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.28),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.15),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 6px -1px rgba(0, 0, 0, 0.24),0px 0px 0px 3px rgba(207, 182, 150, 0.15) !important;
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
  --button-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.1),0px 2px 4px -1px rgba(0, 0, 0, 0.05),0px 0px 0px 3px rgba(207, 182, 150, 0.15) !important;
  --button-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.15),0px 2px 6px -1px rgba(0, 0, 0, 0.1) !important;
  --callout-border-opacity: 0.2;
  --callout-bug: 223,90,90;
  --callout-color-opacity: 32.5%;
  --callout-container-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08),0px 1px 6px 0px rgba(0, 0, 0, 0.12);
  --callout-content-background: color-mix( in srgb, rgb(242, 236, 227) 50%, rgb(248, 245, 241) );
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
  --callout-title-color: rgb(89, 62, 34);
  --callout-title-padding: 12px 16px;
  --callout-title-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.05),inset 0px 1px 1px 0px rgba(255, 255, 255, 0.2);
  --callout-title-weight: 650;
  --callout-todo: 99,164,198;
  --callout-warning: 231,130,63;
  --cancelled-chbx-color: rgb(182, 174, 165) !important;
  --cancelled-chbx-text-color: rgb(183, 157, 123) !important;
  --cancelled-chbx-text-decoration: line-through !important;
  --canvas-background: rgb(248, 245, 241) !important;
  --canvas-card-label-color: rgb(183, 157, 123) !important;
  --canvas-color: 182,175,166 !important;
  --canvas-color-1: 223,90,90 !important;
  --canvas-color-2: 231,130,63 !important;
  --canvas-color-3: 248,197,46 !important;
  --canvas-color-4: 87,185,132 !important;
  --canvas-color-5: 99,164,198 !important;
  --canvas-color-6: 135,106,193 !important;
  --canvas-controls-icon-size: 15px !important;
  --canvas-dot-pattern: rgb(228, 215, 195) !important;
  --canvas-icon-color: rgb(183, 157, 123) !important;
  --canvas-icon-color-disabled: rgb(228, 215, 195) !important;
  --canvas-icon-color-hover: rgb(101, 81, 52) !important;
  --canvas-menu-bg: color-mix(in hsl, rgb(252, 250, 248) 50%, rgb(248, 245, 241)) !important;
  --canvas-menu-bg-hover: rgb(252, 250, 248) !important;
  --canvas-menu-border: 1px solid rgb(228, 215, 195) !important;
  --canvas-menu-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.02),0px 1px 4px -2.1px rgba(0, 0, 0, 0.1),0px 2px 8px -1.2px rgba(0, 0, 0, 0.03) !important;
  --caret-color: rgb(183, 157, 123) !important;
  --checkbox-border-color: rgb(228, 215, 195) !important;
  --checkbox-border-color-hover: rgb(207, 182, 150) !important;
  --checkbox-color: rgb(50, 149, 98) !important;
  --checkbox-color-hover: rgb(62, 177, 116) !important;
  --checkbox-marker-color: white !important;
  --checked-border-color: rgba(0, 0, 0, 0.15) !important;
  --checked-border-color-hover: rgba(0, 0, 0, 0.1) !important;
  --checklist-bg: rgb(252, 250, 248) !important;
  --checklist-done-color: rgb(183, 157, 123) !important;
  --checklist-shadow-hover: 0px 0px 0px 3px rgba(0, 0, 0, 0.07) !important;
  --clickable-icon-radius: 5px !important;
  --clock-chbx-color: rgb(76, 125, 174) !important;
  --close-button-radius: 12px !important;
  --code-background: rgb(242, 236, 227) !important;
  --code-border-color: rgb(228, 215, 195) !important;
  --code-bracket-background: rgba(255, 255, 255, 0.5) !important;
  --code-comment: rgb(183, 157, 123) !important;
  --code-function: rgb(222, 159, 13) !important;
  --code-important: rgb(213, 133, 52) !important;
  --code-keyword: rgb(199, 112, 125) !important;
  --code-normal: rgb(89, 62, 34) !important;
  --code-operator: rgb(205, 66, 66) !important;
  --code-property: rgb(76, 174, 170) !important;
  --code-punctuation: rgb(131, 107, 73) !important;
  --code-radius: 8px !important;
  --code-string: rgb(79, 171, 119) !important;
  --code-tag: rgb(205, 66, 66) !important;
  --code-value: rgb(125, 113, 193) !important;
  --codeFont: '??', "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(207, 182, 150) !important;
  --collapse-icon-color-collapsed: rgb(207, 182, 150) !important;
  --color-accent: rgb(157, 128, 98) !important;
  --color-accent-1: rgb(165, 138, 111) !important;
  --color-accent-2: rgb(185, 151, 121) !important;
  --color-accent-hsl: 31,23%,50% !important;
  --color-base-00: rgb(252, 250, 248) !important;
  --color-base-05: rgb(248, 245, 241) !important;
  --color-base-10: rgb(242, 236, 227) !important;
  --color-base-100: rgb(67, 46, 20) !important;
  --color-base-20: rgb(238, 231, 221) !important;
  --color-base-25: rgb(235, 227, 214) !important;
  --color-base-30: rgb(228, 215, 195) !important;
  --color-base-35: rgb(207, 182, 150) !important;
  --color-base-40: rgb(183, 157, 123) !important;
  --color-base-50: rgb(157, 128, 98) !important;
  --color-base-60: rgb(131, 107, 73) !important;
  --color-base-70: rgb(101, 81, 52) !important;
  --color-blue: rgb(48, 121, 176) !important;
  --color-blue-rgb: 99,164,198 !important;
  --color-cyan: rgb(76, 174, 170) !important;
  --color-cyan-rgb: 124,180,206 !important;
  --color-gray: rgb(182, 174, 165) !important;
  --color-gray-rgb: 182,175,166 !important;
  --color-green: rgb(79, 171, 119) !important;
  --color-green-rgb: 87,185,132 !important;
  --color-l-alpha-blue: rgba(42, 177, 192, 0.2) !important;
  --color-l-alpha-gray: rgba(207, 182, 150, 0.15) !important;
  --color-l-alpha-green: rgba(153, 190, 35, 0.2) !important;
  --color-l-alpha-orange: rgba(255, 115, 0, 0.2) !important;
  --color-l-alpha-purple: rgba(112, 122, 255, 0.2) !important;
  --color-l-alpha-red: rgba(240, 81, 108, 0.2) !important;
  --color-l-alpha-yellow: rgba(255, 187, 0, 0.2) !important;
  --color-l-blue-10: rgb(99, 162, 187) !important;
  --color-l-blue-20: rgb(42, 144, 203) !important;
  --color-l-blue-30: rgb(34, 114, 155) !important;
  --color-l-blue-40: rgb(10, 73, 118) !important;
  --color-l-gray-10: rgb(252, 250, 248) !important;
  --color-l-gray-100: rgb(131, 107, 73) !important;
  --color-l-gray-110: rgb(123, 98, 66) !important;
  --color-l-gray-120: rgb(101, 81, 52) !important;
  --color-l-gray-130: rgb(89, 62, 34) !important;
  --color-l-gray-140: rgb(67, 46, 20) !important;
  --color-l-gray-20: rgb(248, 245, 241) !important;
  --color-l-gray-30: rgb(242, 236, 227) !important;
  --color-l-gray-40: rgb(238, 231, 221) !important;
  --color-l-gray-50: rgb(235, 227, 214) !important;
  --color-l-gray-60: rgb(228, 215, 195) !important;
  --color-l-gray-70: rgb(207, 182, 150) !important;
  --color-l-gray-80: rgb(183, 157, 123) !important;
  --color-l-gray-90: rgb(157, 128, 98) !important;
  --color-l-green-10: rgb(139, 193, 164) !important;
  --color-l-green-20: rgb(62, 177, 116) !important;
  --color-l-green-30: rgb(50, 149, 98) !important;
  --color-l-green-40: rgb(26, 122, 79) !important;
  --color-l-orange-10: rgb(227, 152, 95) !important;
  --color-l-orange-20: rgb(235, 125, 66) !important;
  --color-l-orange-30: rgb(215, 92, 40) !important;
  --color-l-orange-40: rgb(175, 55, 4) !important;
  --color-l-purple-10: rgb(203, 167, 220) !important;
  --color-l-purple-20: rgb(159, 114, 187) !important;
  --color-l-purple-30: rgb(116, 69, 150) !important;
  --color-l-purple-40: rgb(68, 23, 130) !important;
  --color-l-red-10: rgb(217, 116, 109) !important;
  --color-l-red-20: rgb(223, 69, 58) !important;
  --color-l-red-30: rgb(191, 63, 54) !important;
  --color-l-red-40: rgb(154, 34, 25) !important;
  --color-l-yellow-10: rgb(231, 197, 111) !important;
  --color-l-yellow-20: rgb(236, 185, 54) !important;
  --color-l-yellow-30: rgb(215, 151, 25) !important;
  --color-l-yellow-40: rgb(182, 122, 2) !important;
  --color-orange: rgb(213, 133, 52) !important;
  --color-orange-rgb: 231,130,63 !important;
  --color-pink: rgb(199, 112, 125) !important;
  --color-pink-rgb: 217,102,122 !important;
  --color-purple: rgb(125, 113, 193) !important;
  --color-purple-rgb: 135,106,193 !important;
  --color-red: rgb(205, 66, 66) !important;
  --color-red-rgb: 223,90,90 !important;
  --color-yellow: rgb(222, 159, 13) !important;
  --color-yellow-rgb: 248,197,46 !important;
  --community-item-flair-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1) !important;
  --community-item-selected-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.23),0px 1px 3px -2.6px rgba(0, 0, 0, 0.23),0px 2px 6px -4.2px rgba(0, 0, 0, 0.19),0px 4px 12px -6px rgba(0, 0, 0, 0.9) !important;
  --community-item-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08) !important;
  --community-item-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2) !important;
  --component-font-weight: 550 !important;
  --con-chbx-color: rgb(186, 72, 44) !important;
  --copy-code-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.09),0px 2px 4px -2px rgba(0, 0, 0, 0.06) !important;
  --copy-code-button-radius: 4px !important;
  --cursor: pointer !important;
  --dark: rgb(89, 62, 34) !important;
  --darkgray: rgb(89, 62, 34) !important;
  --disabled-component-opacity: 0.3 !important;
  --divider-color: rgb(228, 215, 195) !important;
  --divider-color-hover: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --divider-radius: 8px !important;
  --divider-width-hover: 4px !important;
  --down-chbx-color: rgb(191, 63, 54) !important;
  --drag-ghost-background: rgb(165, 138, 111) !important;
  --drag-ghost-text-color: rgb(252, 250, 248) !important;
  --dropdown-background: rgb(242, 236, 227) !important;
  --dropdown-background-hover: color-mix(in hsl, rgb(252, 250, 248) 50%, rgb(242, 236, 227)) !important;
  --dropdown-height: 31px !important;
  --editor-bg-color: rgb(248, 245, 241) !important;
  --editor-bgpattern-color: rgb(228, 215, 195) !important;
  --editor-bgpattern-size: 50px 50px !important;
  --editor-border-color: rgb(228, 215, 195) !important;
  --editor-border-radius: 12px !important;
  --editor-border-width: 1px !important;
  --editor-header-icon: 15px !important;
  --editor-pane-margin: 10px !important;
  --editor-tab-icon: 15px !important;
  --embed-background: color-mix( in srgb, rgb(242, 236, 227) 50%, rgb(248, 245, 241) ) !important;
  --embed-bg-color-mix: color-mix( in srgb, rgb(242, 236, 227) 50%, rgb(248, 245, 241) ) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-bottom: 1px solid rgb(228, 215, 195) !important;
  --embed-border-bottom-color: rgb(228, 215, 195) !important;
  --embed-border-bottom-style: solid !important;
  --embed-border-bottom-width: 1px !important;
  --embed-border-end: 1px solid rgb(228, 215, 195) !important;
  --embed-border-end-color: rgb(228, 215, 195) !important;
  --embed-border-end-style: solid !important;
  --embed-border-end-width: 1px !important;
  --embed-border-radius: 12px !important;
  --embed-border-start: 1px solid rgb(228, 215, 195) !important;
  --embed-border-start-color: rgb(228, 215, 195) !important;
  --embed-border-start-style: solid !important;
  --embed-border-start-width: 1px !important;
  --embed-border-top: 1px solid rgb(228, 215, 195) !important;
  --embed-border-top-color: rgb(228, 215, 195) !important;
  --embed-border-top-style: solid !important;
  --embed-border-top-width: 1px !important;
  --embed-edit-btn-bg: color-mix(in srgb, rgb(248, 245, 241) 70%, transparent) !important;
  --embed-edit-btn-bg-hover: color-mix(in srgb, rgb(248, 245, 241) 100%, transparent) !important;
  --embed-edit-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.1) !important;
  --embed-edit-btn-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.1) !important;
  --embed-left-right-padding: 16px !important;
  --embed-media-border-radius: 8px !important;
  --embed-padding: 6px 16px 0px !important;
  --embed-title-border: 1px solid rgb(228, 215, 195) !important;
  --embed-title-border-color: rgb(228, 215, 195) !important;
  --embed-title-border-style: solid !important;
  --embed-title-border-width: 1px !important;
  --embed-title-color: rgb(157, 128, 98) !important;
  --embed-title-font-size: 16px !important;
  --embed-title-font-weight: 550 !important;
  --embed-title-letter-spacing: normal !important;
  --embed-title-margin-bottom: 8px !important;
  --embed-title-text-transform: none !important;
  --empty-state-action-btn-bg: color-mix(in srgb, rgb(242, 236, 227) 50%, transparent) !important;
  --file-header-background: rgb(248, 245, 241) !important;
  --file-header-background-focused: rgb(248, 245, 241) !important;
  --file-header-border: 1px solid rgb(228, 215, 195) !important;
  --file-header-border-color: rgb(228, 215, 195) !important;
  --file-header-border-width: 1px !important;
  --file-header-font: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-title-color: rgb(101, 81, 52) !important;
  --file-line-width: 40rem !important;
  --file-max-line-width: 88% !important;
  --file-tab-gap: 0px !important;
  --flair-background: rgb(242, 236, 227) !important;
  --flair-color: rgb(89, 62, 34) !important;
  --flair-count-bg-color: rgb(238, 231, 221) !important;
  --flair-count-color: rgb(183, 157, 123) !important;
  --flair-count-padding: 2px 4px !important;
  --flair-count-radius: 5px !important;
  --font-bold: 750 !important;
  --font-extrabold: 850 !important;
  --font-extralight: 250 !important;
  --font-interface: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Inter" !important;
  --font-light: 350 !important;
  --font-medium: 550 !important;
  --font-mermaid: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Cascadia Code" !important;
  --font-normal: 450 !important;
  --font-print: '??', '??', "Inter", 'Arial' !important;
  --font-semibold: 650 !important;
  --font-text: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Inter" !important;
  --font-thin: 150 !important;
  --font-ui-smallest: 11px !important;
  --font-weight: 450 !important;
  --footnote-divider-color: rgb(228, 215, 195) !important;
  --footnote-id-color: rgb(131, 107, 73) !important;
  --footnote-id-color-no-occurrences: rgb(183, 157, 123) !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.45) !important;
  --graph-arrow: rgb(157, 128, 98) !important;
  --graph-line: rgb(228, 215, 195) !important;
  --graph-node: rgb(42, 144, 203) !important;
  --graph-node-attachment: rgb(139, 193, 164) !important;
  --graph-node-focused: rgb(89, 62, 34) !important;
  --graph-node-highlight-fill: rgb(157, 128, 98) !important;
  --graph-node-highlight-line: rgb(207, 182, 150) !important;
  --graph-node-tag: rgb(223, 69, 58) !important;
  --graph-node-unresolved: rgb(236, 185, 54) !important;
  --graph-node-unresolved-opacity: 1 !important;
  --graph-text: rgb(183, 157, 123) !important;
  --gray: rgb(131, 107, 73) !important;
  --gutter-color: color-mix(in hsl, rgb(228, 215, 195) 40%, rgb(207, 182, 150)) !important;
  --gutter-color-active: rgb(157, 128, 98) !important;
  --h1-bg-color: transparent !important;
  --h1-border-bottom-color: rgb(228, 215, 195) !important;
  --h1-border-left-color: rgb(228, 215, 195) !important;
  --h1-border-radius: 0px !important;
  --h1-border-right-color: rgb(228, 215, 195) !important;
  --h1-border-style: solid !important;
  --h1-border-top-color: rgb(228, 215, 195) !important;
  --h1-border-width: 0px !important;
  --h1-color: rgb(67, 46, 20) !important;
  --h1-text-align: left !important;
  --h1-text-transform: normal !important;
  --h1-weight: 650 !important;
  --h2-bg-color: transparent !important;
  --h2-border-bottom-color: rgb(228, 215, 195) !important;
  --h2-border-left-color: rgb(228, 215, 195) !important;
  --h2-border-radius: 0px !important;
  --h2-border-right-color: rgb(228, 215, 195) !important;
  --h2-border-style: solid !important;
  --h2-border-top-color: rgb(228, 215, 195) !important;
  --h2-border-width: 0px !important;
  --h2-color: rgb(67, 46, 20) !important;
  --h2-text-align: left !important;
  --h2-text-transform: normal !important;
  --h2-weight: 650 !important;
  --h3-bg-color: transparent !important;
  --h3-border-bottom-color: rgb(228, 215, 195) !important;
  --h3-border-left-color: rgb(228, 215, 195) !important;
  --h3-border-radius: 0px !important;
  --h3-border-right-color: rgb(228, 215, 195) !important;
  --h3-border-style: solid !important;
  --h3-border-top-color: rgb(228, 215, 195) !important;
  --h3-border-width: 0px !important;
  --h3-color: rgb(67, 46, 20) !important;
  --h3-text-align: left !important;
  --h3-text-transform: normal !important;
  --h3-weight: 650 !important;
  --h4-bg-color: transparent !important;
  --h4-border-bottom-color: rgb(228, 215, 195) !important;
  --h4-border-left-color: rgb(228, 215, 195) !important;
  --h4-border-radius: 0px !important;
  --h4-border-right-color: rgb(228, 215, 195) !important;
  --h4-border-style: solid !important;
  --h4-border-top-color: rgb(228, 215, 195) !important;
  --h4-border-width: 0px !important;
  --h4-color: rgb(67, 46, 20) !important;
  --h4-text-align: left !important;
  --h4-text-transform: normal !important;
  --h4-weight: 650 !important;
  --h5-bg-color: transparent !important;
  --h5-border-bottom-color: rgb(228, 215, 195) !important;
  --h5-border-left-color: rgb(228, 215, 195) !important;
  --h5-border-radius: 0px !important;
  --h5-border-right-color: rgb(228, 215, 195) !important;
  --h5-border-style: solid !important;
  --h5-border-top-color: rgb(228, 215, 195) !important;
  --h5-border-width: 0px !important;
  --h5-color: rgb(67, 46, 20) !important;
  --h5-text-align: left !important;
  --h5-text-transform: normal !important;
  --h5-weight: 650 !important;
  --h6-bg-color: transparent !important;
  --h6-border-bottom-color: rgb(228, 215, 195) !important;
  --h6-border-left-color: rgb(228, 215, 195) !important;
  --h6-border-radius: 0px !important;
  --h6-border-right-color: rgb(228, 215, 195) !important;
  --h6-border-style: solid !important;
  --h6-border-top-color: rgb(228, 215, 195) !important;
  --h6-border-width: 0px !important;
  --h6-color: rgb(67, 46, 20) !important;
  --h6-text-align: left !important;
  --h6-text-transform: normal !important;
  --h6-weight: 650 !important;
  --header-height: 46px !important;
  --headerFont: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(183, 157, 123) !important;
  --highlight: rgba(255, 187, 0, 0.2) !important;
  --hr-color: rgb(228, 215, 195) !important;
  --hr-thickness: 1px !important;
  --icon-bg: transparent !important;
  --icon-bg-active: rgb(228, 215, 195) !important;
  --icon-bg-active-menu: transparent !important;
  --icon-bg-hover: transparent !important;
  --icon-bg-pressed: transparent !important;
  --icon-color: rgb(183, 157, 123) !important;
  --icon-color-active: rgb(131, 107, 73) !important;
  --icon-color-focused: rgb(157, 128, 98) !important;
  --icon-color-hover: rgb(157, 128, 98) !important;
  --icon-container-radius: 0px !important;
  --icon-m: 16px !important;
  --icon-opacity: 1 !important;
  --icon-s: 15px !important;
  --icon-size: 16px !important;
  --icon-xl: 24px !important;
  --icon-xs: 13px !important;
  --idea-chbx-color: rgb(228, 158, 88) !important;
  --important-chbx-color: rgb(234, 89, 31) !important;
  --important-chbx-icon-color: white !important;
  --important-chbx-radius: 100% !important;
  --indentation-guide-color: rgb(228, 215, 195) !important;
  --indentation-guide-color-active: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --indentation-guide-reading-indent: -1em !important;
  --info-chbx-color: rgb(81, 148, 146) !important;
  --info-chbx-icon-color: white !important;
  --inline-code-bg: rgb(252, 250, 248) !important;
  --inline-code-color: rgb(217, 116, 109) !important;
  --inline-code-radius: 4px !important;
  --inline-query-bg: color-mix(in srgb, rgb(238, 231, 221) 20%, rgb(248, 245, 241)) !important;
  --inline-query-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.06) !important;
  --inline-title-color: rgb(67, 46, 20) !important;
  --inline-title-weight: 650 !important;
  --inprogress-chbx-border-color: color-mix(in srgb, rgb(235, 157, 55) 65%, rgb(131, 107, 73)) !important;
  --inprogress-chbx-color: rgb(235, 157, 55) !important;
  --inprogress-chbx-color-hover: rgb(238, 173, 88) !important;
  --input-date-separator: rgb(183, 157, 123) !important;
  --input-font-weight: 450 !important;
  --input-height: 32px !important;
  --input-placeholder-color: rgb(183, 157, 123) !important;
  --input-radius: 8px !important;
  --input-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.1),0px 2px 4px -1px rgba(0, 0, 0, 0.05) !important;
  --input-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.09),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.6) !important;
  --input-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.15),0px 2px 6px -1px rgba(0, 0, 0, 0.1) !important;
  --interactive-accent: rgb(165, 138, 111) !important;
  --interactive-accent-hover: rgb(185, 151, 121) !important;
  --interactive-accent-hsl: 31,23%,50% !important;
  --interactive-hover: color-mix(in hsl, rgb(252, 250, 248) 50%, rgb(242, 236, 227)) !important;
  --interactive-normal: rgb(242, 236, 227) !important;
  --interface-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0 !important;
  --italic-color: rgb(34, 114, 155) !important;
  --italic-highlight-bg: rgba(42, 177, 192, 0.2) !important;
  --italic-highlight-color: rgb(89, 62, 34) !important;
  --kanban-drag-item-border: none !important;
  --kanban-drag-item-shadow: 0px 8.3px 22.8px -9px rgba(0, 0, 0, 0.19),0px 6.2px 10.1px -4.2px rgba(0, 0, 0, 0.22),0px 2.1px 6.8px -3.2px rgba(0, 0, 0, 0.29) !important;
  --kanban-item-bg: rgb(252, 250, 248) !important;
  --kanban-item-border: none !important;
  --kanban-item-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.09),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.06),0px 2px 2px 0px rgba(0, 0, 0, 0.03) !important;
  --kanban-lane-bg: color-mix(in srgb, rgb(242, 236, 227) 50%, rgb(248, 245, 241)) !important;
  --kanban-lane-border: 1px solid rgb(238, 231, 221) !important;
  --kanban-lane-shadow: none !important;
  --kanban-new-item-bg: transparent !important;
  --kanban-new-item-bg-hover: rgb(248, 245, 241) !important;
  --kanban-new-item-color: rgb(183, 157, 123) !important;
  --kanban-new-item-color-hover: rgb(131, 107, 73) !important;
  --kanban-new-item-shadow: none !important;
  --kanban-new-item-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12),0px 2px 4px 0px rgba(0, 0, 0, 0.04) !important;
  --kanban-title-count-bg: rgb(228, 215, 195) !important;
  --kanban-title-count-color: rgb(101, 81, 52) !important;
  --kanban-title-count-radius: 12px !important;
  --kanban-title-text-input-color: rgb(89, 62, 34) !important;
  --kbd-background: rgb(238, 231, 221) !important;
  --kbd-color: rgb(217, 116, 109) !important;
  --kbd-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.03),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.06) !important;
  --language-chbx-color: rgb(217, 122, 109) !important;
  --law-chbx-color: rgb(174, 138, 91) !important;
  --light: rgb(248, 245, 241) !important;
  --lightgray: rgb(238, 231, 221) !important;
  --link-ahref-color: rgb(223, 69, 58) !important;
  --link-ahref-color-hover: rgb(217, 116, 109) !important;
  --link-ahref-decoration-color: color-mix(in srgb, currentColor 22%, transparent) !important;
  --link-ahref-decoration-color-hover: color-mix(in srgb, rgb(217, 116, 109) 22%, transparent) !important;
  --link-color: rgb(215, 151, 25) !important;
  --link-color-hover: rgb(236, 185, 54) !important;
  --link-decoration-color: color-mix(in srgb, rgb(215, 151, 25) 22%, transparent) !important;
  --link-decoration-color-hover: color-mix(in srgb, rgb(236, 185, 54) 22%, transparent) !important;
  --link-decoration-opacity: 22% !important;
  --link-decoration-thickness: 1.5px !important;
  --link-external-color: rgb(50, 149, 98) !important;
  --link-external-color-hover: rgb(62, 177, 116) !important;
  --link-external-decoration-color: color-mix(in srgb, rgb(50, 149, 98) 22%, transparent) !important;
  --link-external-decoration-color-hover: color-mix(in srgb, rgb(62, 177, 116) 22%, transparent) !important;
  --link-opacity-active: 0.5 !important;
  --link-underline-offset: 2px !important;
  --link-unresolved-color: rgb(183, 157, 123) !important;
  --link-unresolved-color-hover: rgb(207, 182, 150) !important;
  --link-unresolved-decoration-color: color-mix(in srgb, rgb(183, 157, 123) 22%, transparent) !important;
  --link-unresolved-decoration-color-hover: color-mix(in srgb, rgb(207, 182, 150) 22%, transparent) !important;
  --link-unresolved-opacity: 1 !important;
  --link-weight: 450 !important;
  --list-bullet-indent-reading: -1em !important;
  --list-indent-editing: 0.6em !important;
  --list-marker-color: rgb(183, 157, 123) !important;
  --list-marker-color-collapsed: rgb(157, 128, 98) !important;
  --list-marker-color-hover: rgb(131, 107, 73) !important;
  --loading-line-bg-color: rgb(238, 231, 221) !important;
  --loading-line-color: rgb(99, 162, 187) !important;
  --loading-line-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1) !important;
  --location-chbox-color: rgb(191, 54, 54) !important;
  --menu-background: rgb(238, 231, 221) !important;
  --menu-border-color: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --menu-item-bg-active: rgb(235, 227, 214) !important;
  --menu-item-bg-hover: rgba(255, 255, 255, 0.35) !important;
  --menu-item-color-active: rgb(207, 182, 150) !important;
  --menu-item-icon-color: rgb(183, 157, 123) !important;
  --menu-item-icon-color-active: rgb(207, 182, 150) !important;
  --menu-item-radius: 7px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),0px 3.4px 6.7px rgba(0, 0, 0, 0.042),0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --metadata-background: color-mix(in srgb, rgb(248, 245, 241) 50%, rgb(242, 236, 227)) !important;
  --metadata-border-color: rgb(228, 215, 195) !important;
  --metadata-border-radius: 8px !important;
  --metadata-border-width: 1px !important;
  --metadata-container-padding: 12px 12px !important;
  --metadata-divider-color: rgb(228, 215, 195) !important;
  --metadata-divider-width: 0px !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.45) !important;
  --metadata-input-font: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-shadow-active: inset 0px 0px 0px 1px rgb(228, 215, 195),0px 0px 0px 1px rgb(228, 215, 195) !important;
  --metadata-input-shadow-hover: none !important;
  --metadata-input-text-color: rgb(101, 81, 52) !important;
  --metadata-key-input-color: rgb(131, 107, 73) !important;
  --metadata-key-input-color-active: rgb(101, 81, 52) !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.45) !important;
  --metadata-label-font: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(131, 107, 73) !important;
  --metadata-label-text-color-hover: rgb(131, 107, 73) !important;
  --metadata-properties-title-color: rgb(207, 182, 150) !important;
  --metadata-properties-title-color-collapsed: rgb(207, 182, 150) !important;
  --metadata-properties-title-color-hover: rgb(183, 157, 123) !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.5) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --metadata-property-radius: 7px !important;
  --metadata-tab-background: rgb(238, 231, 221) !important;
  --modal-background: rgb(248, 245, 241) !important;
  --modal-border-color: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --modal-close-button-size: 20px !important;
  --modal-radius: 16px !important;
  --monospace-font-feature: "calt" 1,"ss01" 1,"ss02" 1,"ss03" 1,"ss05" 1,"ss19" 1,"zero" 1 !important;
  --nav-collapse-icon-color: rgb(207, 182, 150) !important;
  --nav-collapse-icon-color-collapsed: rgb(183, 157, 123) !important;
  --nav-file-padding-active: 4px 8px 6px 24px !important;
  --nav-file-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.09),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.07),0px 2px 3px 0px rgba(0, 0, 0, 0.05) !important;
  --nav-file-tag-bg: transparent !important;
  --nav-file-tag-color: rgb(157, 128, 98) !important;
  --nav-folder-1-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) !important;
  --nav-folder-1-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-1-collapse-color: color-mix(in srgb, rgb(191, 63, 54) 50%, transparent) !important;
  --nav-folder-1-color: rgb(191, 63, 54) !important;
  --nav-folder-1-indent-color: color-mix(in srgb, rgb(191, 63, 54) 25%, transparent) !important;
  --nav-folder-10-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) !important;
  --nav-folder-10-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-10-collapse-color: color-mix(in srgb, rgb(26, 122, 79) 50%, transparent) !important;
  --nav-folder-10-color: rgb(26, 122, 79) !important;
  --nav-folder-10-indent-color: color-mix(in srgb, rgb(26, 122, 79) 25%, transparent) !important;
  --nav-folder-11-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) !important;
  --nav-folder-11-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-11-collapse-color: color-mix(in srgb, rgb(34, 114, 155) 50%, transparent) !important;
  --nav-folder-11-color: rgb(34, 114, 155) !important;
  --nav-folder-11-indent-color: color-mix(in srgb, rgb(34, 114, 155) 25%, transparent) !important;
  --nav-folder-12-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) !important;
  --nav-folder-12-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-12-collapse-color: color-mix(in srgb, rgb(116, 69, 150) 50%, transparent) !important;
  --nav-folder-12-color: rgb(116, 69, 150) !important;
  --nav-folder-12-indent-color: color-mix(in srgb, rgb(116, 69, 150) 25%, transparent) !important;
  --nav-folder-2-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) !important;
  --nav-folder-2-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-2-collapse-color: color-mix(in srgb, rgb(215, 92, 40) 50%, transparent) !important;
  --nav-folder-2-color: rgb(215, 92, 40) !important;
  --nav-folder-2-indent-color: color-mix(in srgb, rgb(215, 92, 40) 25%, transparent) !important;
  --nav-folder-3-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) !important;
  --nav-folder-3-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-3-collapse-color: color-mix(in srgb, rgb(182, 122, 2) 50%, transparent) !important;
  --nav-folder-3-color: rgb(182, 122, 2) !important;
  --nav-folder-3-indent-color: color-mix(in srgb, rgb(182, 122, 2) 25%, transparent) !important;
  --nav-folder-4-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) !important;
  --nav-folder-4-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-4-collapse-color: color-mix(in srgb, rgb(26, 122, 79) 50%, transparent) !important;
  --nav-folder-4-color: rgb(26, 122, 79) !important;
  --nav-folder-4-indent-color: color-mix(in srgb, rgb(26, 122, 79) 25%, transparent) !important;
  --nav-folder-5-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) !important;
  --nav-folder-5-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-5-collapse-color: color-mix(in srgb, rgb(34, 114, 155) 50%, transparent) !important;
  --nav-folder-5-color: rgb(34, 114, 155) !important;
  --nav-folder-5-indent-color: color-mix(in srgb, rgb(34, 114, 155) 25%, transparent) !important;
  --nav-folder-6-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) !important;
  --nav-folder-6-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-6-collapse-color: color-mix(in srgb, rgb(116, 69, 150) 50%, transparent) !important;
  --nav-folder-6-color: rgb(116, 69, 150) !important;
  --nav-folder-6-indent-color: color-mix(in srgb, rgb(116, 69, 150) 25%, transparent) !important;
  --nav-folder-7-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) !important;
  --nav-folder-7-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-7-collapse-color: color-mix(in srgb, rgb(191, 63, 54) 50%, transparent) !important;
  --nav-folder-7-color: rgb(191, 63, 54) !important;
  --nav-folder-7-indent-color: color-mix(in srgb, rgb(191, 63, 54) 25%, transparent) !important;
  --nav-folder-8-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) !important;
  --nav-folder-8-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-8-collapse-color: color-mix(in srgb, rgb(215, 92, 40) 50%, transparent) !important;
  --nav-folder-8-color: rgb(215, 92, 40) !important;
  --nav-folder-8-indent-color: color-mix(in srgb, rgb(215, 92, 40) 25%, transparent) !important;
  --nav-folder-9-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) !important;
  --nav-folder-9-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent) !important;
  --nav-folder-9-collapse-color: color-mix(in srgb, rgb(182, 122, 2) 50%, transparent) !important;
  --nav-folder-9-color: rgb(182, 122, 2) !important;
  --nav-folder-9-indent-color: color-mix(in srgb, rgb(182, 122, 2) 25%, transparent) !important;
  --nav-folder-bg-color: transparent !important;
  --nav-folder-bg-color-hover: rgba(255, 255, 255, 0.25) !important;
  --nav-folder-collapse-color: rgb(207, 182, 150) !important;
  --nav-folder-color: rgb(123, 98, 66) !important;
  --nav-heading-color: rgb(131, 107, 73) !important;
  --nav-heading-color-collapsed: rgb(131, 107, 73) !important;
  --nav-heading-color-collapsed-hover: rgb(131, 107, 73) !important;
  --nav-heading-color-hover: rgb(131, 107, 73) !important;
  --nav-heading-weight: 550 !important;
  --nav-heading-weight-hover: 550 !important;
  --nav-indentation-guide-color: rgb(228, 215, 195) !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.25) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.25) !important;
  --nav-item-background-selected: rgba(12, 93, 125, 0.5) !important;
  --nav-item-background-selected-hover: rgba(12, 93, 125, 0.4) !important;
  --nav-item-color: rgb(123, 98, 66) !important;
  --nav-item-color-active: rgb(123, 98, 66) !important;
  --nav-item-color-highlighted: rgb(185, 151, 121) !important;
  --nav-item-color-hover: rgb(123, 98, 66) !important;
  --nav-item-color-selected: rgb(248, 245, 241) !important;
  --nav-item-padding: 5px 8px 5px 24px !important;
  --nav-item-parent-padding: 5px 8px 5px 24px !important;
  --nav-item-radius: 6px !important;
  --nav-item-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgb(183, 157, 123) !important;
  --nav-tag-color-active: rgb(131, 107, 73) !important;
  --nav-tag-color-hover: rgb(131, 107, 73) !important;
  --nav-tag-weight: 650 !important;
  --new-tab-btn-radius: 2em !important;
  --non-alternating-color: rgb(207, 182, 150) !important;
  --non-alternating-color-hover-active: rgb(228, 215, 195) !important;
  --normal-highlight-bg: rgba(255, 187, 0, 0.2) !important;
  --normal-highlight-color: rgb(89, 62, 34) !important;
  --note-chbx-color: rgb(196, 90, 74) !important;
  --notice-color: rgb(252, 250, 248) !important;
  --notice-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12),0px 2px 9px -2.1px rgba(0, 0, 0, 0.38),0px 3px 17px -4.3px rgba(0, 0, 0, 0.12),0px 7px 30px -5.5px rgba(0, 0, 0, 0.09) !important;
  --pcr-btn-shadow: inset 0px 0px 0px 1.5px rgba(0, 0, 0, 0.2) !important;
  --pdf-background: rgb(248, 245, 241) !important;
  --pdf-page-background: rgb(248, 245, 241) !important;
  --pdf-sidebar-background: rgb(248, 245, 241) !important;
  --pill-background: rgba(255, 255, 255, 0.4) !important;
  --pill-background-hover: rgba(255, 255, 255, 0.4) !important;
  --pill-border-color: color-mix(in srgb, rgb(228, 215, 195) 50%, transparent) !important;
  --pill-border-color-hover: color-mix(in srgb, color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) 50%, transparent) !important;
  --pill-color: rgb(101, 81, 52) !important;
  --pill-color-hover: rgb(67, 46, 20) !important;
  --pill-color-remove: rgb(207, 182, 150) !important;
  --pill-color-remove-hover: rgb(207, 182, 150) !important;
  --pill-tag-bg-1: rgba(255, 187, 0, 0.2) !important;
  --pill-tag-bg-2: rgba(240, 81, 108, 0.2) !important;
  --pill-tag-bg-3: rgba(42, 177, 192, 0.2) !important;
  --pill-tag-color-1: rgb(182, 122, 2) !important;
  --pill-tag-color-2: rgb(154, 34, 25) !important;
  --pill-tag-color-3: rgb(10, 73, 118) !important;
  --pill-tag-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.05) !important;
  --pill-tag-weight: 550 !important;
  --pmr-cal-td-padding: 4px 4px 6px 4px !important;
  --pmr-cal-td-radius: 5px !important;
  --popup-bg-blur: 3px !important;
  --pro-chbx-color: rgb(74, 150, 111) !important;
  --progress-background: rgb(238, 231, 221) !important;
  --progress-bar-outline: rgba(0, 0, 0, 0.1) !important;
  --progress-border-width: 1px !important;
  --progress-color-1: rgb(223, 69, 58) !important;
  --progress-color-2: rgb(235, 125, 66) !important;
  --progress-color-3: rgb(236, 185, 54) !important;
  --progress-color-4: rgb(50, 149, 98) !important;
  --progress-color-5: linear-gradient(45deg, rgb(217, 116, 109), rgb(231, 197, 111), rgb(99, 162, 187)) !important;
  --progress-gradient-1: rgb(217, 116, 109) !important;
  --progress-gradient-2: rgb(231, 197, 111) !important;
  --progress-gradient-3: rgb(99, 162, 187) !important;
  --progress-height: 8px !important;
  --progress-value-outline: rgba(0, 0, 0, 0.18) !important;
  --progress-value-radius: 8px !important;
  --progress-width: 220px !important;
  --prompt-background: rgb(248, 245, 241) !important;
  --prompt-border-color: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --prompt-input-background: rgb(248, 245, 241) !important;
  --prompt-instructions-background: color-mix(in hsl, rgb(248, 245, 241) 60%, rgb(238, 231, 221)) !important;
  --prompt-results-background: rgb(248, 245, 241) !important;
  --prompt-separator-border: 1px solid rgb(238, 231, 221) !important;
  --prompt-suggestion-background-selected: rgba(255, 255, 255, 0.35) !important;
  --prompt-suggestion-color: rgb(157, 128, 98) !important;
  --prompt-suggestion-color-selected: rgb(89, 62, 34) !important;
  --prompt-suggestion-highlight-color: color-mix(in srgb, rgb(157, 128, 98) 70%, black) !important;
  --prompt-suggestion-highlight-color-selected: rgb(89, 62, 34) !important;
  --prompt-suggestion-shadow-selected: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08),0px 2px 6px 0px rgba(0, 0, 0, 0.03) !important;
  --question-chbx-color: rgb(152, 99, 176) !important;
  --question-chbx-icon-color: white !important;
  --quote-chbx-color: rgb(65, 130, 180) !important;
  --quote-chbx-icon-color: white !important;
  --radius-xs: 2px !important;
  --raised-background: color-mix(in srgb, rgb(248, 245, 241) 65%, transparent) linear-gradient(rgb(248, 245, 241), color-mix(in srgb, rgb(248, 245, 241) 65%, transparent)) !important;
  --resched-chbx-color: rgb(132, 169, 168) !important;
  --ribbon-background: rgb(238, 231, 221) !important;
  --ribbon-background-collapsed: rgb(248, 245, 241) !important;
  --ribbon-border-width: 1px !important;
  --ribbon-icon: 15px !important;
  --ribbon-icon-spacing: 4px !important;
  --ribbon-margin-bottom: 10px !important;
  --ribbon-radius: 12px !important;
  --ribbon-slideout-background: rgb(242, 236, 227) !important;
  --ribbon-slideout-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.12),0px 5px 5px -5px rgba(0, 0, 0, 0.15) !important;
  --sched-chbx-color: rgb(182, 174, 165) !important;
  --scrollbar-active-thumb-bg: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: rgb(228, 215, 195) !important;
  --search-clear-button-color: rgb(183, 157, 123) !important;
  --search-clear-button-color-hover: rgb(223, 69, 58) !important;
  --search-clear-button-size: 12px !important;
  --search-icon-color: rgb(183, 157, 123) !important;
  --search-icon-size: 14px !important;
  --search-result-background: rgb(242, 236, 227) !important;
  --search-result-background-hover: color-mix(in srgb, rgb(252, 250, 248) 50%, rgb(248, 245, 241)) !important;
  --search-result-dest-file-bg: rgb(248, 245, 241) !important;
  --search-result-dest-file-bg-hover: color-mix(in srgb, rgb(248, 245, 241) 50%, rgb(252, 250, 248)) !important;
  --search-result-dest-file-color: rgb(131, 107, 73) !important;
  --search-result-dest-file-icon-color: rgb(207, 182, 150) !important;
  --search-result-dest-file-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.05) !important;
  --search-result-dest-file-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.05),0px 2px 3px 0px rgba(0, 0, 0, 0.09) !important;
  --secondary: rgb(157, 128, 98) !important;
  --setting-group-heading-color: rgb(89, 62, 34) !important;
  --setting-group-heading-weight: 650 !important;
  --setting-items-background: rgb(242, 236, 227) !important;
  --setting-items-border-color: rgb(228, 215, 195) !important;
  --settings-nav-group-title-color: rgb(207, 182, 150) !important;
  --settings-nav-item-active-color: rgb(252, 250, 248) !important;
  --settings-nav-item-bg-hover: transparent !important;
  --settings-nav-item-padding: 7px 12px 7px 12px !important;
  --settings-nav-item-padding-active: 6px 12px 8px 20px !important;
  --settings-nav-item-padding-hover: 7px 12px 7px 20px !important;
  --settings-nav-item-radius: 7px !important;
  --settings-nav-item-text-color: rgb(123, 98, 66) !important;
  --settings-nav-item-text-color-active: rgb(183, 157, 123) !important;
  --settings-nav-item-text-color-hover: rgb(89, 62, 34) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.091),0px 6.3px 24.7px rgba(0, 0, 0, 0.132),0px 30px 90px rgba(0, 0, 0, 0.22) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),0px 3.4px 6.7px rgba(0, 0, 0, 0.042),0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --sidebar-nav-icon: 15px !important;
  --sidebar-tab-icon: 15px !important;
  --slider-thumb-bg: rgb(252, 250, 248) !important;
  --slider-thumb-border-color: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --slider-thumb-border-width: 0px !important;
  --slider-thumb-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0pc 1px 0px 1px rgb(255, 255, 255),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.09),0px 1px 2px 0px rgba(0, 0, 0, 0.1) !important;
  --slider-thumb-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0pc 1px 0px 1px rgb(255, 255, 255),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.09),0px 1px 2px 0px rgba(0, 0, 0, 0.1),0px 0px 0px 6px rgba(0, 0, 0, 0.05) !important;
  --slider-track-background: rgb(228, 215, 195) !important;
  --slider-track-height: 5px !important;
  --slider-track-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08),0px 0px 0px 1px rgba(255, 255, 255, 0.08) !important;
  --star-chbx-color: rgb(246, 169, 14) !important;
  --star-chbx-icon-color: white !important;
  --status-bar-background: rgb(238, 231, 221) !important;
  --status-bar-border-color: rgb(228, 215, 195) !important;
  --status-bar-floating-bg: rgb(242, 236, 227) !important;
  --status-bar-floating-offset: 4px !important;
  --status-bar-floating-opacity: 0.5 !important;
  --status-bar-floating-opacity-hover: 1 !important;
  --status-bar-floating-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.12),0px 5px 5px -5px rgba(0, 0, 0, 0.15) !important;
  --status-bar-item-bg-hover: transparent !important;
  --status-bar-item-clickable-bg-active: transparent !important;
  --status-bar-item-clickable-color-active: rgb(207, 182, 150) !important;
  --status-bar-item-color: rgb(183, 157, 123) !important;
  --status-bar-item-color-hover: rgb(131, 107, 73) !important;
  --status-bar-text-color: rgb(131, 107, 73) !important;
  --strikethrough-color: rgb(183, 157, 123) !important;
  --strikethrough-highlight-bg: rgba(255, 187, 0, 0.2) !important;
  --strikethrough-highlight-color: rgb(183, 157, 123) !important;
  --style-settings-container-bg: color-mix(in srgb, rgb(242, 236, 227) 50%, transparent) !important;
  --suggestion-background: rgb(248, 245, 241) !important;
  --swatch-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2) !important;
  --sync-avatar-color-1: rgb(205, 66, 66) !important;
  --sync-avatar-color-2: rgb(213, 133, 52) !important;
  --sync-avatar-color-3: rgb(222, 159, 13) !important;
  --sync-avatar-color-4: rgb(79, 171, 119) !important;
  --sync-avatar-color-5: rgb(76, 174, 170) !important;
  --sync-avatar-color-6: rgb(48, 121, 176) !important;
  --sync-avatar-color-7: rgb(125, 113, 193) !important;
  --sync-avatar-color-8: rgb(199, 112, 125) !important;
  --sync-icon-success: rgb(50, 149, 98) !important;
  --sync-icon-success-active: rgb(207, 182, 150) !important;
  --sync-icon-success-hover: rgb(62, 177, 116) !important;
  --sync-icon-working: rgb(227, 152, 95) !important;
  --sync-icon-working-active: rgb(207, 182, 150) !important;
  --sync-icon-working-hover: rgb(235, 125, 66) !important;
  --tab-active-bg: rgb(248, 245, 241) !important;
  --tab-active-shadow: inset 0px 1px 0px 0px rgb(255, 255, 255),inset 0px -2px 0px 1px rgba(0, 0, 0, 0.09),0px 1px 2px -0.1px rgba(0, 0, 0, 0.15) !important;
  --tab-background-active: rgb(248, 245, 241) !important;
  --tab-bg: transparent !important;
  --tab-container-background: rgb(238, 231, 221) !important;
  --tab-curves-display: none !important;
  --tab-divider-color: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) !important;
  --tab-header-container-border-bottom: none !important;
  --tab-header-container-inner-margin: default !important;
  --tab-header-container-inner-padding: 2px !important;
  --tab-header-container-padding: 0 12px 4px 12px !important;
  --tab-header-container-transition: padding-bottom none !important;
  --tab-outline-color: transparent !important;
  --tab-stacked-header-width: 46px !important;
  --tab-stacked-shadow: -2.9px 0 10.5px -6.2px rgba(0, 0, 0, 0.08),-6.2px 0 3.6px -5.2px rgba(0, 0, 0, 0.04),-9.4px 0 8.4px -4.1px rgba(0, 0, 0, 0.06) !important;
  --tab-status-radius: 4px !important;
  --tab-switcher-background: rgb(238, 231, 221) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(238, 231, 221), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(157, 128, 98) !important;
  --tab-text-color: rgb(183, 157, 123) !important;
  --tab-text-color-active: rgb(131, 107, 73) !important;
  --tab-text-color-focused: rgb(131, 107, 73) !important;
  --tab-text-color-focused-active: rgb(131, 107, 73) !important;
  --tab-text-color-focused-active-current: rgb(89, 62, 34) !important;
  --tab-text-color-focused-highlighted: rgb(157, 128, 98) !important;
  --tab-z-index: 1 !important;
  --table-add-button-border-color: rgb(228, 215, 195) !important;
  --table-background: rgb(252, 250, 248) !important;
  --table-border-color: rgb(228, 215, 195) !important;
  --table-column-alt-background: rgb(242, 236, 227) !important;
  --table-drag-handle-background-active: rgb(165, 138, 111) !important;
  --table-drag-handle-color: rgb(183, 157, 123) !important;
  --table-drag-handle-color-active: rgb(252, 250, 248) !important;
  --table-header-background: rgb(242, 236, 227) !important;
  --table-header-background-hover: rgb(242, 236, 227) !important;
  --table-header-border-color: rgb(228, 215, 195) !important;
  --table-header-color: rgb(89, 62, 34) !important;
  --table-header-weight: 650 !important;
  --table-row-alt-background: rgb(252, 250, 248) !important;
  --table-row-alt-background-hover: rgb(252, 250, 248) !important;
  --table-row-background-hover: rgb(252, 250, 248) !important;
  --table-selection: rgba(157, 128, 98, 0.1) !important;
  --table-selection-border-color: rgb(165, 138, 111) !important;
  --tag-background: rgba(255, 255, 255, 0.5) !important;
  --tag-background-hover: rgba(255, 255, 255, 0.8) !important;
  --tag-border-color: rgba(0, 0, 0, 0.15) !important;
  --tag-border-color-hover: rgba(0, 0, 0, 0.25) !important;
  --tag-border-width: 1px !important;
  --tag-color: rgb(34, 114, 155) !important;
  --tag-color-hover: rgb(42, 144, 203) !important;
  --tag-padding-x: 0.6em !important;
  --tag-padding-y: 0.15em !important;
  --tag-radius: 1em !important;
  --tag-shadow: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.1) !important;
  --tag-shadow-active: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.1) !important;
  --tag-shadow-hover: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.1),0px 0px 0px 3px rgba(0, 0, 0, 0.03) !important;
  --telephone-chbx-color: rgb(64, 176, 116) !important;
  --tertiary: rgb(185, 151, 121) !important;
  --text-accent: rgb(157, 128, 98) !important;
  --text-accent-hover: rgb(185, 151, 121) !important;
  --text-error: rgb(191, 63, 54) !important;
  --text-faint: rgb(183, 157, 123) !important;
  --text-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0 !important;
  --text-highlight-bg: rgba(255, 187, 0, 0.2) !important;
  --text-highlight-bg-rgb: 248,197,46 !important;
  --text-input-bg-active: color-mix(in hsl, rgb(242, 236, 227) 40%, rgb(252, 250, 248)) !important;
  --text-input-border-color: rgb(228, 215, 195) !important;
  --text-input-color: rgb(89, 62, 34) !important;
  --text-input-color-focused: rgb(89, 62, 34) !important;
  --text-input-shadow-active: inset 0px 1px 0px 0px rgb(255, 255, 255),inset 0px -1px 0px 0px rgba(0, 0, 0, 0.04),0px 1px 6px 0px rgba(0, 0, 0, 0.07) !important;
  --text-muted: rgb(131, 107, 73) !important;
  --text-normal: rgb(89, 62, 34) !important;
  --text-on-accent: rgb(252, 250, 248) !important;
  --text-on-accent-inverted: rgb(67, 46, 20) !important;
  --text-selection: rgba(207, 182, 150, 0.15) !important;
  --text-selection-theme-bg: color-mix(in srgb, rgb(207, 182, 150) 30%, transparent) !important;
  --text-selection-theme-text-color: color-mix(in srgb, currentColor 70%, black) !important;
  --text-success: rgb(50, 149, 98) !important;
  --text-warning: rgb(215, 92, 40) !important;
  --textHighlight: rgba(255, 187, 0, 0.2) !important;
  --titleFont: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(238, 231, 221) !important;
  --titlebar-background-focused: rgb(238, 231, 221) !important;
  --titlebar-border-color: rgb(228, 215, 195) !important;
  --titlebar-text-color: rgb(228, 215, 195) !important;
  --titlebar-text-color-focused: rgb(207, 182, 150) !important;
  --titlebar-text-weight: 450 !important;
  --toggle-bg: color-mix(in hsl, rgb(228, 215, 195) 80%, rgb(207, 182, 150)) !important;
  --toggle-bg-enabled: rgb(50, 149, 98) !important;
  --toggle-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.09),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06),inset 0 0 1px rgba(0, 0, 0, 0.28) !important;
  --toggle-shadow-focus: inset 0 6px 20px rgba(0, 0, 0, 0.18),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06),inset 0 0 1px rgba(0, 0, 0, 0.32),0px 0px 0px 5px rgba(0, 0, 0, 0.05) !important;
  --toggle-shadow-hover: inset 0 6px 20px rgba(0, 0, 0, 0.18),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06),inset 0 0 1px rgba(0, 0, 0, 0.32) !important;
  --toggle-thumb-color: rgb(252, 250, 248) !important;
  --toggle-thumb-shadow: inset 0px 1px 0px 1px rgb(255, 255, 255),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),0 2px 2px rgba(0, 0, 0, 0.2) !important;
  --tooltip-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.12),0px 2px 4px -1.4px rgba(0, 0, 0, 0.3),0px 3px 10px -1.7px rgba(0, 0, 0, 0.14) !important;
  --traffic-lights-offset-x: 46px !important;
  --traffic-lights-offset-y: 46px !important;
  --underline-color: rgb(89, 62, 34) !important;
  --underline-decoration-color: color-mix(in srgb, currentColor 22%, transparent) !important;
  --underline-decoration-opacity: 22% !important;
  --up-chbx-color: rgb(79, 171, 119) !important;
  --vault-name-background: rgb(242, 236, 227) !important;
  --vault-name-border: 1px solid rgb(228, 215, 195) !important;
  --vault-name-border-width: 1px !important;
  --vault-name-color: rgb(131, 107, 73) !important;
  --vault-name-color-hover: rgb(101, 81, 52) !important;
  --vault-profile-color: rgb(131, 107, 73) !important;
  --vault-profile-color-hover: rgb(131, 107, 73) !important;
  --vault-profile-font-weight: 650 !important;
  --yaml-atom-color: rgb(99, 162, 187) !important;
  --yaml-base-color: rgb(217, 116, 109) !important;
  --yaml-def-meta-color: rgb(207, 182, 150) !important;
  --yaml-keyword-color: rgb(215, 151, 25) !important;
  --yaml-number-color: rgb(217, 116, 109) !important;
  --yaml-string-color: rgb(215, 151, 25) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 231, 221);
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(238, 231, 221);
  color: rgb(89, 62, 34);
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
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(191, 63, 54);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(191, 63, 54) none 0px;
  text-decoration: rgb(191, 63, 54);
  text-decoration-color: rgb(191, 63, 54);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(34, 114, 155);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(34, 114, 155) none 0px;
  text-decoration: rgb(34, 114, 155);
  text-decoration-color: rgb(34, 114, 155);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(34, 114, 155);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(34, 114, 155) none 0px;
  text-decoration: rgb(34, 114, 155);
  text-decoration-color: rgb(34, 114, 155);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(191, 63, 54);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(191, 63, 54) none 0px;
  text-decoration: rgb(191, 63, 54);
  text-decoration-color: rgb(191, 63, 54);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 187, 0, 0.2);
  color: rgb(89, 62, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(89, 62, 34) none 0px;
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body del {
  color: rgb(89, 62, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(89, 62, 34) none 0px;
  text-decoration: line-through rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body p {
  color: rgb(131, 107, 73);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(131, 107, 73) none 0px;
  text-decoration: rgb(131, 107, 73);
  text-decoration-color: rgb(131, 107, 73);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(50, 149, 98);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(50, 149, 98) none 0px;
  text-decoration: underline 1.5px color(srgb 0.195 0.585 0.3835 / 0.22);
  text-decoration-color: color(srgb 0.195 0.585 0.3835 / 0.22);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
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
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body ul > li {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(183, 157, 123);
  text-decoration: rgb(183, 157, 123);
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

html[saved-theme="light"] body pre > code, pre:has(> code) {
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
  border-bottom-color: rgb(89, 62, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 62, 34);
  border-radius: 8px;
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
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
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(183, 157, 123);
  text-decoration: line-through rgb(183, 157, 123);
  text-decoration-color: rgb(183, 157, 123);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(228, 215, 195);
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(183, 157, 123);
  text-decoration: line-through rgb(183, 157, 123);
  text-decoration-color: rgb(183, 157, 123);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
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
  text-decoration: rgb(89, 62, 34);
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.35);
  color: rgb(89, 62, 34);
  font-weight: 450;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(89, 62, 34);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body h2.page-title, h2.page-title a {
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
  text-decoration: rgb(123, 98, 66);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(123, 98, 66);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  text-decoration: rgb(123, 98, 66);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(123, 98, 66);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  text-decoration: rgb(123, 98, 66);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.25);
  border-bottom-color: rgb(123, 98, 66);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(123, 98, 66);
  border-right-color: rgb(123, 98, 66);
  border-top-color: rgb(123, 98, 66);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(123, 98, 66);
  cursor: pointer;
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
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
  text-decoration: rgb(183, 157, 123);
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
  text-decoration: rgb(123, 98, 66);
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
  text-decoration: rgb(123, 98, 66);
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
  text-decoration: underline dotted rgb(89, 62, 34);
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
}`,
  },
};
