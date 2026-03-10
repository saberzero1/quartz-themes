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
  --accent-h: 31;
  --accent-l: 24%;
  --accent-s: 27%;
  --active-line-bg: rgb(52, 44, 35);
  --alternating-color-1: rgb(218, 154, 27);
  --alternating-color-1-hover-active: rgb(188, 129, 26);
  --alternating-color-2: rgb(243, 80, 68);
  --alternating-color-2-hover-active: rgb(224, 47, 41);
  --alternating-color-3: rgb(65, 151, 185);
  --alternating-color-3-hover-active: rgb(56, 116, 148);
  --amount-chbx-color: rgb(52, 141, 100);
  --amount-chbx-icon-color: white;
  --amount-chbx-radius: 100%;
  --anim-popdown: 0.4s slideDown forwards;
  --anim-popup: 0.3s slideUp forwards;
  --anim-popup-alt: 0.335s slideUpAlt forwards;
  --background-anim: background 140ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --background-modifier-active-hover: rgb(81, 64, 47);
  --background-modifier-border: rgb(59, 48, 38);
  --background-modifier-border-focus: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --background-modifier-border-hover: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --background-modifier-error: rgb(224, 47, 41);
  --background-modifier-error-hover: rgb(243, 80, 68);
  --background-modifier-error-rgb: 228,87,78;
  --background-modifier-form-field: rgb(33, 27, 23);
  --background-modifier-form-field-hover: rgb(33, 27, 23);
  --background-modifier-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-message: rgb(81, 64, 47);
  --background-modifier-success: rgb(16, 132, 84);
  --background-modifier-success-rgb: 100,194,113;
  --background-modifier-warning: rgb(189, 73, 20);
  --background-modifier-warning-hover: rgb(218, 94, 22);
  --background-primary: rgb(46, 38, 31);
  --background-primary-alt: rgb(42, 36, 30);
  --background-secondary: rgb(38, 33, 28);
  --background-secondary-alt: rgb(38, 33, 28);
  --bases-cards-background: rgb(46, 38, 31);
  --bases-cards-cover-background: rgb(42, 36, 30);
  --bases-cards-shadow: 0 0 0 1px rgb(59, 48, 38);
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --bases-embed-border-color: rgb(59, 48, 38);
  --bases-group-heading-property-color: rgb(171, 145, 109);
  --bases-group-heading-property-weight: 450;
  --bases-group-heading-value-weight: 650;
  --bases-table-border-color: rgb(59, 48, 38);
  --bases-table-cell-background-active: rgb(46, 38, 31);
  --bases-table-cell-background-disabled: rgb(42, 36, 30);
  --bases-table-cell-background-selected: rgba(78, 62, 45, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(91, 70, 51);
  --bases-table-group-background: rgb(42, 36, 30);
  --bases-table-header-background: rgb(46, 38, 31);
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.3);
  --bases-table-header-color: rgb(171, 145, 109);
  --bases-table-header-weight: 450;
  --bases-table-row-background-hover: rgb(38, 33, 28);
  --bases-table-summary-background: rgb(46, 38, 31);
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.3);
  --blockquote-background-color: rgb(38, 33, 28);
  --blockquote-border-color: rgb(59, 48, 38);
  --blur-background: color-mix(in srgb, rgb(38, 33, 28) 65%, transparent) linear-gradient(rgb(38, 33, 28), color-mix(in srgb, rgb(38, 33, 28) 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: rgb(243, 80, 68);
  --bold-highlight-bg: rgba(240, 81, 108, 0.2);
  --bold-highlight-color: rgb(215, 192, 163);
  --bold-italic-color: rgb(235, 218, 198);
  --bold-italic-highlight-bg: rgba(153, 190, 35, 0.2);
  --bold-italic-highlight-color: rgb(235, 218, 198);
  --bold-italic-strikethrough-color: rgb(171, 145, 109);
  --bold-italic-weight: 750;
  --bold-weight: 750;
  --bookmark-chbx-color: rgb(233, 109, 43);
  --bookmark-folder-1-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent);
  --bookmark-folder-1-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-1-collapse-color: color-mix(in srgb, rgb(243, 80, 68) 50%, transparent);
  --bookmark-folder-1-color: rgb(243, 80, 68);
  --bookmark-folder-1-indent-color: color-mix(in srgb, rgb(243, 80, 68) 25%, transparent);
  --bookmark-folder-10-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent);
  --bookmark-folder-10-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-10-collapse-color: color-mix(in srgb, rgb(46, 168, 115) 50%, transparent);
  --bookmark-folder-10-color: rgb(46, 168, 115);
  --bookmark-folder-10-indent-color: color-mix(in srgb, rgb(46, 168, 115) 25%, transparent);
  --bookmark-folder-11-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent);
  --bookmark-folder-11-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-11-collapse-color: color-mix(in srgb, rgb(77, 178, 209) 50%, transparent);
  --bookmark-folder-11-color: rgb(77, 178, 209);
  --bookmark-folder-11-indent-color: color-mix(in srgb, rgb(77, 178, 209) 25%, transparent);
  --bookmark-folder-12-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent);
  --bookmark-folder-12-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-12-collapse-color: color-mix(in srgb, rgb(138, 135, 217) 50%, transparent);
  --bookmark-folder-12-color: rgb(138, 135, 217);
  --bookmark-folder-12-indent-color: color-mix(in srgb, rgb(138, 135, 217) 25%, transparent);
  --bookmark-folder-2-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent);
  --bookmark-folder-2-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-2-collapse-color: color-mix(in srgb, rgb(235, 106, 20) 50%, transparent);
  --bookmark-folder-2-color: rgb(235, 106, 20);
  --bookmark-folder-2-indent-color: color-mix(in srgb, rgb(235, 106, 20) 25%, transparent);
  --bookmark-folder-3-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent);
  --bookmark-folder-3-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-3-collapse-color: color-mix(in srgb, rgb(229, 170, 31) 50%, transparent);
  --bookmark-folder-3-color: rgb(229, 170, 31);
  --bookmark-folder-3-indent-color: color-mix(in srgb, rgb(229, 170, 31) 25%, transparent);
  --bookmark-folder-4-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent);
  --bookmark-folder-4-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-4-collapse-color: color-mix(in srgb, rgb(46, 168, 115) 50%, transparent);
  --bookmark-folder-4-color: rgb(46, 168, 115);
  --bookmark-folder-4-indent-color: color-mix(in srgb, rgb(46, 168, 115) 25%, transparent);
  --bookmark-folder-5-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent);
  --bookmark-folder-5-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-5-collapse-color: color-mix(in srgb, rgb(77, 178, 209) 50%, transparent);
  --bookmark-folder-5-color: rgb(77, 178, 209);
  --bookmark-folder-5-indent-color: color-mix(in srgb, rgb(77, 178, 209) 25%, transparent);
  --bookmark-folder-6-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent);
  --bookmark-folder-6-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-6-collapse-color: color-mix(in srgb, rgb(138, 135, 217) 50%, transparent);
  --bookmark-folder-6-color: rgb(138, 135, 217);
  --bookmark-folder-6-indent-color: color-mix(in srgb, rgb(138, 135, 217) 25%, transparent);
  --bookmark-folder-7-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent);
  --bookmark-folder-7-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-7-collapse-color: color-mix(in srgb, rgb(243, 80, 68) 50%, transparent);
  --bookmark-folder-7-color: rgb(243, 80, 68);
  --bookmark-folder-7-indent-color: color-mix(in srgb, rgb(243, 80, 68) 25%, transparent);
  --bookmark-folder-8-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent);
  --bookmark-folder-8-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-8-collapse-color: color-mix(in srgb, rgb(235, 106, 20) 50%, transparent);
  --bookmark-folder-8-color: rgb(235, 106, 20);
  --bookmark-folder-8-indent-color: color-mix(in srgb, rgb(235, 106, 20) 25%, transparent);
  --bookmark-folder-9-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent);
  --bookmark-folder-9-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-9-collapse-color: color-mix(in srgb, rgb(229, 170, 31) 50%, transparent);
  --bookmark-folder-9-color: rgb(229, 170, 31);
  --bookmark-folder-9-indent-color: color-mix(in srgb, rgb(229, 170, 31) 25%, transparent);
  --breadcrumb-bg-hover: rgb(59, 48, 38);
  --breadcrumb-color: rgb(145, 121, 89);
  --breadcrumb-color-hover: rgb(145, 121, 89);
  --breadcrumb-separator-color: rgb(59, 48, 38);
  --button-accent-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.26),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.35),0px 4px 4px -5.6px rgba(0, 0, 0, 0.37),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 4px -1px rgba(0, 0, 0, 0.14);
  --button-accent-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.45),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.15),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.57),0px 0px 0px 1px rgba(255, 255, 255, 0.02);
  --button-accent-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.28),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.11),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 6px -1px rgba(0, 0, 0, 0.24),0px 0px 0px 3px rgba(126, 105, 78, 0.2);
  --button-accent-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.34),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.26),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.35),0px 4px 4px -5.6px rgba(0, 0, 0, 0.37),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.19);
  --button-anim: 140ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
  --button-axis-offset: 2px;
  --button-inset-shadow-size: 2px;
  --button-metadata-padding: 6px 8px 8px 6px;
  --button-metadata-padding-active: 6px 8px 6px 6px;
  --button-opacity-active: 0.5;
  --button-padding: 8px 12px 10px 12px;
  --button-padding-active: 10px 12px 8px 12px;
  --button-radius: 8px;
  --button-s-padding: 4px 8px 4px 8px;
  --button-s-radius: 6.4px;
  --button-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.02),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.25),0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  --button-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.45),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.15),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.57),0px 0px 0px 1px rgba(255, 255, 255, 0.02);
  --button-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.05),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.24),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.25),0px 0px 0px 3px rgba(126, 105, 78, 0.2);
  --button-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.06),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.25);
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
  --cancelled-chbx-color: rgb(159, 149, 137);
  --cancelled-chbx-text-color: rgb(145, 121, 89);
  --cancelled-chbx-text-decoration: line-through;
  --canvas-background: rgb(46, 38, 31);
  --canvas-card-label-color: rgb(145, 121, 89);
  --canvas-color: 166,150,142;
  --canvas-color-1: 228,87,78;
  --canvas-color-2: 238,163,89;
  --canvas-color-3: 249,207,81;
  --canvas-color-4: 100,194,113;
  --canvas-color-5: 99,156,192;
  --canvas-color-6: 139,113,185;
  --canvas-controls-icon-size: 15px;
  --canvas-dot-pattern: rgb(81, 64, 47);
  --canvas-icon-color: rgb(145, 121, 89);
  --canvas-icon-color-disabled: rgb(81, 64, 47);
  --canvas-icon-color-hover: rgb(199, 177, 148);
  --canvas-menu-bg: color-mix(in srgb, rgb(52, 44, 35) 60%, rgb(46, 38, 31));
  --canvas-menu-bg-hover: color-mix(in srgb, rgb(52, 44, 35) 10%, rgb(46, 38, 31));
  --canvas-menu-border: 1px solid rgb(59, 48, 38);
  --canvas-menu-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.14),0px 1px 4px -2.1px rgba(0, 0, 0, 0.22),0px 2px 8px -1.2px rgba(0, 0, 0, 0.15);
  --caret-color: rgb(145, 121, 89);
  --checkbox-border-color: rgb(81, 64, 47);
  --checkbox-border-color-hover: rgb(107, 86, 61);
  --checkbox-color: rgb(17, 116, 73);
  --checkbox-color-hover: rgb(16, 132, 84);
  --checkbox-marker-color: white;
  --checked-border-color: rgba(255, 255, 255, 0.15);
  --checked-border-color-hover: rgba(255, 255, 255, 0.1);
  --checklist-bg: rgb(42, 36, 30);
  --checklist-done-color: rgb(145, 121, 89);
  --checklist-shadow-hover: 0px 0px 0px 3px rgba(0, 0, 0, 0.3);
  --clickable-icon-radius: 5px;
  --clock-chbx-color: rgb(85, 133, 180);
  --close-button-radius: 12px;
  --code-background: rgb(42, 36, 30);
  --code-border-color: rgb(59, 48, 38);
  --code-bracket-background: rgba(0, 0, 0, 0.3);
  --code-comment: rgb(145, 121, 89);
  --code-function: rgb(225, 178, 67);
  --code-important: rgb(203, 128, 53);
  --code-keyword: rgb(180, 100, 100);
  --code-normal: rgb(215, 192, 163);
  --code-operator: rgb(192, 78, 78);
  --code-property: rgb(70, 169, 180);
  --code-punctuation: rgb(171, 145, 109);
  --code-radius: 8px;
  --code-string: rgb(80, 196, 101);
  --code-tag: rgb(192, 78, 78);
  --code-value: rgb(113, 97, 194);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(107, 86, 61);
  --collapse-icon-color-collapsed: rgb(107, 86, 61);
  --color-accent: rgb(78, 62, 45);
  --color-accent-1: rgb(91, 70, 51);
  --color-accent-2: rgb(107, 78, 56);
  --color-accent-hsl: 31,27%,24%;
  --color-base-00: rgb(28, 23, 18);
  --color-base-05: rgb(38, 33, 28);
  --color-base-10: rgb(46, 38, 31);
  --color-base-100: rgb(235, 218, 198);
  --color-base-20: rgb(52, 44, 35);
  --color-base-25: rgb(59, 48, 38);
  --color-base-30: rgb(81, 64, 47);
  --color-base-35: rgb(107, 86, 61);
  --color-base-40: rgb(145, 121, 89);
  --color-base-50: rgb(171, 145, 109);
  --color-base-60: rgb(199, 177, 148);
  --color-base-70: rgb(215, 192, 163);
  --color-blue: rgb(63, 137, 176);
  --color-blue-rgb: 99,156,192;
  --color-cyan: rgb(70, 169, 180);
  --color-cyan-rgb: 91,175,183;
  --color-d-alpha-blue: rgba(42, 177, 192, 0.2);
  --color-d-alpha-gray: rgba(126, 105, 78, 0.2);
  --color-d-alpha-green: rgba(153, 190, 35, 0.2);
  --color-d-alpha-orange: rgba(255, 115, 0, 0.2);
  --color-d-alpha-purple: rgba(112, 122, 255, 0.2);
  --color-d-alpha-red: rgba(240, 81, 108, 0.2);
  --color-d-alpha-yellow: rgba(255, 187, 0, 0.2);
  --color-d-blue-10: rgb(106, 191, 210);
  --color-d-blue-20: rgb(77, 178, 209);
  --color-d-blue-30: rgb(65, 151, 185);
  --color-d-blue-40: rgb(56, 116, 148);
  --color-d-gray-10: rgb(235, 218, 198);
  --color-d-gray-100: rgb(46, 38, 31);
  --color-d-gray-110: rgb(42, 36, 30);
  --color-d-gray-120: rgb(38, 33, 28);
  --color-d-gray-130: rgb(33, 27, 23);
  --color-d-gray-140: rgb(28, 23, 18);
  --color-d-gray-20: rgb(215, 192, 163);
  --color-d-gray-30: rgb(199, 177, 148);
  --color-d-gray-40: rgb(171, 145, 109);
  --color-d-gray-50: rgb(145, 121, 89);
  --color-d-gray-60: rgb(107, 86, 61);
  --color-d-gray-70: rgb(81, 64, 47);
  --color-d-gray-80: rgb(59, 48, 38);
  --color-d-gray-90: rgb(52, 44, 35);
  --color-d-green-10: rgb(78, 198, 142);
  --color-d-green-20: rgb(46, 168, 115);
  --color-d-green-30: rgb(16, 132, 84);
  --color-d-green-40: rgb(17, 116, 73);
  --color-d-orange-10: rgb(239, 136, 57);
  --color-d-orange-20: rgb(235, 106, 20);
  --color-d-orange-30: rgb(218, 94, 22);
  --color-d-orange-40: rgb(189, 73, 20);
  --color-d-purple-10: rgb(138, 135, 217);
  --color-d-purple-20: rgb(98, 96, 195);
  --color-d-purple-30: rgb(74, 76, 186);
  --color-d-purple-40: rgb(65, 69, 180);
  --color-d-red-10: rgb(251, 132, 121);
  --color-d-red-20: rgb(247, 104, 94);
  --color-d-red-30: rgb(243, 80, 68);
  --color-d-red-40: rgb(224, 47, 41);
  --color-d-yellow-10: rgb(226, 189, 96);
  --color-d-yellow-20: rgb(229, 170, 31);
  --color-d-yellow-30: rgb(218, 154, 27);
  --color-d-yellow-40: rgb(188, 129, 26);
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
  --component-font-weight: 550;
  --con-chbx-color: rgb(197, 74, 43);
  --copy-code-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.39),0px 2px 4px -2px rgba(0, 0, 0, 0.39);
  --copy-code-button-radius: 4px;
  --cursor: pointer;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --disabled-component-opacity: 0.3;
  --divider-color: rgb(59, 48, 38);
  --divider-color-hover: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --divider-radius: 8px;
  --divider-width-hover: 4px;
  --down-chbx-color: rgb(203, 81, 72);
  --drag-ghost-background: rgb(91, 70, 51);
  --drag-ghost-text-color: rgb(235, 218, 198);
  --dropdown-background: rgb(38, 33, 28);
  --dropdown-background-hover: color-mix(in hsl, rgb(46, 38, 31) 50%, rgb(38, 33, 28));
  --dropdown-height: 31px;
  --editor-bg-color: rgb(46, 38, 31);
  --editor-bgpattern-color: rgb(81, 64, 47);
  --editor-bgpattern-size: 50px 50px;
  --editor-border-color: rgb(59, 48, 38);
  --editor-border-radius: 12px;
  --editor-border-width: 1px;
  --editor-header-icon: 15px;
  --editor-pane-margin: 10px;
  --editor-tab-icon: 15px;
  --embed-background: color-mix( in srgb, rgb(42, 36, 30) 50%, rgb(46, 38, 31) );
  --embed-bg-color-mix: color-mix( in srgb, rgb(42, 36, 30) 50%, rgb(46, 38, 31) );
  --embed-block-shadow-hover: none;
  --embed-border-bottom: 1px solid rgb(59, 48, 38);
  --embed-border-bottom-color: rgb(59, 48, 38);
  --embed-border-bottom-style: solid;
  --embed-border-bottom-width: 1px;
  --embed-border-end: 1px solid rgb(59, 48, 38);
  --embed-border-end-color: rgb(59, 48, 38);
  --embed-border-end-style: solid;
  --embed-border-end-width: 1px;
  --embed-border-radius: 12px;
  --embed-border-start: 1px solid rgb(59, 48, 38);
  --embed-border-start-color: rgb(59, 48, 38);
  --embed-border-start-style: solid;
  --embed-border-start-width: 1px;
  --embed-border-top: 1px solid rgb(59, 48, 38);
  --embed-border-top-color: rgb(59, 48, 38);
  --embed-border-top-style: solid;
  --embed-border-top-width: 1px;
  --embed-edit-btn-bg: color-mix(in srgb, rgb(33, 27, 23) 70%, transparent);
  --embed-edit-btn-bg-hover: color-mix(in srgb, rgb(33, 27, 23) 100%, transparent);
  --embed-edit-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.5),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.5);
  --embed-edit-btn-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.5),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.5),0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  --embed-left-right-padding: 16px;
  --embed-media-border-radius: 8px;
  --embed-padding: 6px 16px 0px;
  --embed-title-border: 1px solid rgb(59, 48, 38);
  --embed-title-border-color: rgb(59, 48, 38);
  --embed-title-border-style: solid;
  --embed-title-border-width: 1px;
  --embed-title-color: rgb(145, 121, 89);
  --embed-title-font-size: 16px;
  --embed-title-font-weight: 550;
  --embed-title-letter-spacing: normal;
  --embed-title-margin-bottom: 8px;
  --embed-title-text-transform: none;
  --empty-state-action-btn-bg: rgb(42, 36, 30);
  --file-header-background: rgb(46, 38, 31);
  --file-header-background-focused: rgb(46, 38, 31);
  --file-header-border: 1px solid rgb(59, 48, 38);
  --file-header-border-color: rgb(59, 48, 38);
  --file-header-border-width: 1px;
  --file-header-font: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-title-color: rgb(171, 145, 109);
  --file-line-width: 40rem;
  --file-max-line-width: 88%;
  --file-tab-gap: 0px;
  --flair-background: rgb(38, 33, 28);
  --flair-color: rgb(215, 192, 163);
  --flair-count-bg-color: rgb(38, 33, 28);
  --flair-count-color: rgb(107, 86, 61);
  --flair-count-padding: 2px 4px;
  --flair-count-radius: 5px;
  --font-bold: 750;
  --font-extrabold: 850;
  --font-extralight: 250;
  --font-interface: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Inter";
  --font-light: 350;
  --font-medium: 550;
  --font-mermaid: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Cascadia Code";
  --font-normal: 450;
  --font-print: '??', '??', "Inter", 'Arial';
  --font-semibold: 650;
  --font-text: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Inter";
  --font-thin: 150;
  --font-ui-smallest: 11px;
  --font-weight: 450;
  --footnote-divider-color: rgb(59, 48, 38);
  --footnote-id-color: rgb(171, 145, 109);
  --footnote-id-color-no-occurrences: rgb(145, 121, 89);
  --footnote-input-background-active: rgba(0, 0, 0, 0.2);
  --graph-arrow: rgb(145, 121, 89);
  --graph-line: rgb(59, 48, 38);
  --graph-node: rgb(65, 151, 185);
  --graph-node-attachment: rgb(16, 132, 84);
  --graph-node-focused: rgb(215, 192, 163);
  --graph-node-highlight-fill: rgb(199, 177, 148);
  --graph-node-highlight-line: rgb(107, 86, 61);
  --graph-node-tag: rgb(243, 80, 68);
  --graph-node-unresolved: rgb(229, 170, 31);
  --graph-node-unresolved-opacity: 1;
  --graph-text: rgb(145, 121, 89);
  --gray: var(--text-muted);
  --gutter-color: color-mix(in srgb, rgb(107, 86, 61) 40%, rgb(81, 64, 47));
  --gutter-color-active: rgb(145, 121, 89);
  --h1-bg-color: transparent;
  --h1-border-bottom-color: rgb(59, 48, 38);
  --h1-border-left-color: rgb(59, 48, 38);
  --h1-border-radius: 0px;
  --h1-border-right-color: rgb(59, 48, 38);
  --h1-border-style: solid;
  --h1-border-top-color: rgb(59, 48, 38);
  --h1-border-width: 0px;
  --h1-color: rgb(235, 218, 198);
  --h1-text-align: left;
  --h1-text-transform: normal;
  --h1-weight: 650;
  --h2-bg-color: transparent;
  --h2-border-bottom-color: rgb(59, 48, 38);
  --h2-border-left-color: rgb(59, 48, 38);
  --h2-border-radius: 0px;
  --h2-border-right-color: rgb(59, 48, 38);
  --h2-border-style: solid;
  --h2-border-top-color: rgb(59, 48, 38);
  --h2-border-width: 0px;
  --h2-color: rgb(235, 218, 198);
  --h2-text-align: left;
  --h2-text-transform: normal;
  --h2-weight: 650;
  --h3-bg-color: transparent;
  --h3-border-bottom-color: rgb(59, 48, 38);
  --h3-border-left-color: rgb(59, 48, 38);
  --h3-border-radius: 0px;
  --h3-border-right-color: rgb(59, 48, 38);
  --h3-border-style: solid;
  --h3-border-top-color: rgb(59, 48, 38);
  --h3-border-width: 0px;
  --h3-color: rgb(235, 218, 198);
  --h3-text-align: left;
  --h3-text-transform: normal;
  --h3-weight: 650;
  --h4-bg-color: transparent;
  --h4-border-bottom-color: rgb(59, 48, 38);
  --h4-border-left-color: rgb(59, 48, 38);
  --h4-border-radius: 0px;
  --h4-border-right-color: rgb(59, 48, 38);
  --h4-border-style: solid;
  --h4-border-top-color: rgb(59, 48, 38);
  --h4-border-width: 0px;
  --h4-color: rgb(235, 218, 198);
  --h4-text-align: left;
  --h4-text-transform: normal;
  --h4-weight: 650;
  --h5-bg-color: transparent;
  --h5-border-bottom-color: rgb(59, 48, 38);
  --h5-border-left-color: rgb(59, 48, 38);
  --h5-border-radius: 0px;
  --h5-border-right-color: rgb(59, 48, 38);
  --h5-border-style: solid;
  --h5-border-top-color: rgb(59, 48, 38);
  --h5-border-width: 0px;
  --h5-color: rgb(235, 218, 198);
  --h5-text-align: left;
  --h5-text-transform: normal;
  --h5-weight: 650;
  --h6-bg-color: transparent;
  --h6-border-bottom-color: rgb(59, 48, 38);
  --h6-border-left-color: rgb(59, 48, 38);
  --h6-border-radius: 0px;
  --h6-border-right-color: rgb(59, 48, 38);
  --h6-border-style: solid;
  --h6-border-top-color: rgb(59, 48, 38);
  --h6-border-width: 0px;
  --h6-color: rgb(235, 218, 198);
  --h6-text-align: left;
  --h6-text-transform: normal;
  --h6-weight: 650;
  --header-height: 46px;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(145, 121, 89);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(59, 48, 38);
  --hr-thickness: 1px;
  --icon-bg: transparent;
  --icon-bg-active: rgb(59, 48, 38);
  --icon-bg-active-menu: transparent;
  --icon-bg-hover: transparent;
  --icon-bg-pressed: transparent;
  --icon-color: color-mix(in srgb, rgb(107, 86, 61) 30%, rgb(145, 121, 89));
  --icon-color-active: rgb(171, 145, 109);
  --icon-color-focused: rgb(145, 121, 89);
  --icon-color-hover: color-mix(in srgb, rgb(145, 121, 89) 70%, rgb(171, 145, 109));
  --icon-container-radius: 0px;
  --icon-m: 16px;
  --icon-opacity: 1;
  --icon-s: 15px;
  --icon-size: 16px;
  --icon-xl: 24px;
  --icon-xs: 13px;
  --idea-chbx-color: rgb(228, 158, 88);
  --important-chbx-color: rgba(219, 77, 20, 0);
  --important-chbx-icon-color: white;
  --important-chbx-radius: 100%;
  --indentation-guide-color: rgb(59, 48, 38);
  --indentation-guide-color-active: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --indentation-guide-reading-indent: -1em;
  --info-chbx-color: rgb(72, 137, 135);
  --info-chbx-icon-color: white;
  --inline-code-bg: rgb(33, 27, 23);
  --inline-code-color: rgb(247, 104, 94);
  --inline-code-radius: 4px;
  --inline-query-bg: color-mix(in srgb, rgb(38, 33, 28) 25%, rgb(46, 38, 31));
  --inline-query-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.26);
  --inline-title-color: rgb(235, 218, 198);
  --inline-title-weight: 650;
  --inprogress-chbx-border-color: color-mix(in srgb, rgb(239, 153, 62) 15%, rgb(199, 177, 148));
  --inprogress-chbx-color: rgb(239, 153, 62);
  --inprogress-chbx-color-hover: rgb(251, 171, 81);
  --input-date-separator: rgb(145, 121, 89);
  --input-font-weight: 450;
  --input-height: 32px;
  --input-placeholder-color: rgb(145, 121, 89);
  --input-radius: 8px;
  --input-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.02),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.25),0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  --input-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.45),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.15),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.57),0px 0px 0px 1px rgba(255, 255, 255, 0.02);
  --input-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.06),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.2),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.25),0px 4px 4px -5.6px rgba(0, 0, 0, 0.55),0px 2px 4px -2.7px rgba(0, 0, 0, 0.3),0px 2px 6px -1px rgba(0, 0, 0, 0.25);
  --interactive-accent: rgb(91, 70, 51);
  --interactive-accent-hover: rgb(107, 78, 56);
  --interactive-accent-hsl: 31,27%,24%;
  --interactive-hover: color-mix(in hsl, rgb(46, 38, 31) 50%, rgb(38, 33, 28));
  --interactive-normal: rgb(38, 33, 28);
  --interface-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0;
  --italic-color: rgb(77, 178, 209);
  --italic-highlight-bg: rgba(42, 177, 192, 0.2);
  --italic-highlight-color: rgb(215, 192, 163);
  --kanban-drag-item-border: none;
  --kanban-drag-item-shadow: 0px 8.3px 22.8px -9px rgba(0, 0, 0, 0.49),0px 6.2px 10.1px -4.2px rgba(0, 0, 0, 0.52),0px 2.1px 6.8px -3.2px rgba(0, 0, 0, 0.59);
  --kanban-item-bg: rgb(52, 44, 35);
  --kanban-item-border: none;
  --kanban-item-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.4),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.19),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.06),0px 2px 2px 0px rgba(0, 0, 0, 0.13);
  --kanban-lane-bg: color-mix(in srgb, rgb(42, 36, 30) 50%, rgb(38, 33, 28));
  --kanban-lane-border: 1px solid color-mix(in srgb, rgb(52, 44, 35) 40%, rgb(46, 38, 31));
  --kanban-lane-shadow: none;
  --kanban-new-item-bg: transparent;
  --kanban-new-item-bg-hover: rgb(46, 38, 31);
  --kanban-new-item-color: rgb(145, 121, 89);
  --kanban-new-item-color-hover: rgb(171, 145, 109);
  --kanban-new-item-shadow: none;
  --kanban-new-item-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.22),0px 2px 4px 0px rgba(0, 0, 0, 0.14);
  --kanban-title-count-bg: rgb(59, 48, 38);
  --kanban-title-count-color: rgb(171, 145, 109);
  --kanban-title-count-radius: 12px;
  --kanban-title-text-input-color: rgb(215, 192, 163);
  --kbd-background: rgb(42, 36, 30);
  --kbd-color: rgb(247, 104, 94);
  --kbd-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.17),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.2);
  --language-chbx-color: rgb(219, 111, 97);
  --law-chbx-color: rgb(174, 138, 91);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-ahref-color: rgb(247, 104, 94);
  --link-ahref-color-hover: rgb(251, 132, 121);
  --link-ahref-decoration-color: color-mix(in srgb, currentColor 22%, transparent);
  --link-ahref-decoration-color-hover: color-mix(in srgb, rgb(251, 132, 121) 22%, transparent);
  --link-color: rgb(229, 170, 31);
  --link-color-hover: rgb(226, 189, 96);
  --link-decoration-color: color-mix(in srgb, rgb(229, 170, 31) 22%, transparent);
  --link-decoration-color-hover: color-mix(in srgb, rgb(226, 189, 96) 22%, transparent);
  --link-decoration-opacity: 22%;
  --link-decoration-thickness: 1.5px;
  --link-external-color: rgb(46, 168, 115);
  --link-external-color-hover: rgb(78, 198, 142);
  --link-external-decoration-color: color-mix(in srgb, rgb(46, 168, 115) 22%, transparent);
  --link-external-decoration-color-hover: color-mix(in srgb, rgb(78, 198, 142) 22%, transparent);
  --link-opacity-active: 0.5;
  --link-underline-offset: 2px;
  --link-unresolved-color: rgb(145, 121, 89);
  --link-unresolved-color-hover: rgb(171, 145, 109);
  --link-unresolved-decoration-color: color-mix(in srgb, rgb(145, 121, 89) 22%, transparent);
  --link-unresolved-decoration-color-hover: color-mix(in srgb, rgb(171, 145, 109) 22%, transparent);
  --link-unresolved-opacity: 1;
  --link-weight: 450;
  --list-bullet-indent-reading: -1em;
  --list-indent-editing: 0.6em;
  --list-marker-color: rgb(145, 121, 89);
  --list-marker-color-collapsed: rgb(171, 145, 109);
  --list-marker-color-hover: rgb(199, 177, 148);
  --loading-line-bg-color: rgb(38, 33, 28);
  --loading-line-color: rgb(106, 191, 210);
  --loading-line-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1);
  --location-chbox-color: rgb(191, 54, 54);
  --menu-background: rgb(38, 33, 28);
  --menu-border-color: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --menu-item-bg-active: rgb(33, 27, 23);
  --menu-item-bg-hover: rgba(0, 0, 0, 0.25);
  --menu-item-color-active: rgb(107, 86, 61);
  --menu-item-icon-color: rgb(145, 121, 89);
  --menu-item-icon-color-active: rgb(107, 86, 61);
  --menu-item-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.228),0px 3.4px 6.7px rgba(0, 0, 0, 0.242),0px 15px 30px rgba(0, 0, 0, 0.27);
  --metadata-background: color-mix(in srgb, rgb(46, 38, 31) 50%, rgb(42, 36, 30));
  --metadata-border-color: rgb(59, 48, 38);
  --metadata-border-radius: 8px;
  --metadata-border-width: 1px;
  --metadata-container-padding: 12px 12px;
  --metadata-divider-color: rgb(59, 48, 38);
  --metadata-divider-width: 0px;
  --metadata-input-background-active: rgba(0, 0, 0, 0.2);
  --metadata-input-font: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-shadow-active: inset 0px 0px 0px 1px rgb(59, 48, 38),0px 0px 0px 1px rgb(59, 48, 38);
  --metadata-input-shadow-hover: none;
  --metadata-input-text-color: rgb(171, 145, 109);
  --metadata-key-input-color: rgb(145, 121, 89);
  --metadata-key-input-color-active: rgb(199, 177, 148);
  --metadata-label-background-active: rgba(0, 0, 0, 0.2);
  --metadata-label-font: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(171, 145, 109);
  --metadata-label-text-color-hover: rgb(171, 145, 109);
  --metadata-properties-title-color: rgb(107, 86, 61);
  --metadata-properties-title-color-collapsed: rgb(107, 86, 61);
  --metadata-properties-title-color-hover: rgb(145, 121, 89);
  --metadata-property-background-active: rgba(0, 0, 0, 0.3);
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --metadata-property-radius: 7px;
  --metadata-tab-background: rgb(38, 33, 28);
  --modal-background: rgb(46, 38, 31);
  --modal-border-color: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --modal-close-button-size: 20px;
  --modal-radius: 16px;
  --monospace-font-feature: "calt" 1,"ss01" 1,"ss02" 1,"ss03" 1,"ss05" 1,"ss19" 1,"zero" 1;
  --nav-collapse-icon-color: rgb(107, 86, 61);
  --nav-collapse-icon-color-collapsed: rgb(145, 121, 89);
  --nav-file-padding-active: 4px 8px 6px 24px;
  --nav-file-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.27),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.24),0px 2px 3px 0px rgba(0, 0, 0, 0.22);
  --nav-file-tag-bg: transparent;
  --nav-file-tag-color: rgb(107, 86, 61);
  --nav-folder-1-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent);
  --nav-folder-1-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-1-collapse-color: color-mix(in srgb, rgb(243, 80, 68) 50%, transparent);
  --nav-folder-1-color: rgb(243, 80, 68);
  --nav-folder-1-indent-color: color-mix(in srgb, rgb(243, 80, 68) 25%, transparent);
  --nav-folder-10-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent);
  --nav-folder-10-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-10-collapse-color: color-mix(in srgb, rgb(46, 168, 115) 50%, transparent);
  --nav-folder-10-color: rgb(46, 168, 115);
  --nav-folder-10-indent-color: color-mix(in srgb, rgb(46, 168, 115) 25%, transparent);
  --nav-folder-11-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent);
  --nav-folder-11-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-11-collapse-color: color-mix(in srgb, rgb(77, 178, 209) 50%, transparent);
  --nav-folder-11-color: rgb(77, 178, 209);
  --nav-folder-11-indent-color: color-mix(in srgb, rgb(77, 178, 209) 25%, transparent);
  --nav-folder-12-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent);
  --nav-folder-12-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-12-collapse-color: color-mix(in srgb, rgb(138, 135, 217) 50%, transparent);
  --nav-folder-12-color: rgb(138, 135, 217);
  --nav-folder-12-indent-color: color-mix(in srgb, rgb(138, 135, 217) 25%, transparent);
  --nav-folder-2-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent);
  --nav-folder-2-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-2-collapse-color: color-mix(in srgb, rgb(235, 106, 20) 50%, transparent);
  --nav-folder-2-color: rgb(235, 106, 20);
  --nav-folder-2-indent-color: color-mix(in srgb, rgb(235, 106, 20) 25%, transparent);
  --nav-folder-3-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent);
  --nav-folder-3-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-3-collapse-color: color-mix(in srgb, rgb(229, 170, 31) 50%, transparent);
  --nav-folder-3-color: rgb(229, 170, 31);
  --nav-folder-3-indent-color: color-mix(in srgb, rgb(229, 170, 31) 25%, transparent);
  --nav-folder-4-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent);
  --nav-folder-4-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-4-collapse-color: color-mix(in srgb, rgb(46, 168, 115) 50%, transparent);
  --nav-folder-4-color: rgb(46, 168, 115);
  --nav-folder-4-indent-color: color-mix(in srgb, rgb(46, 168, 115) 25%, transparent);
  --nav-folder-5-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent);
  --nav-folder-5-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-5-collapse-color: color-mix(in srgb, rgb(77, 178, 209) 50%, transparent);
  --nav-folder-5-color: rgb(77, 178, 209);
  --nav-folder-5-indent-color: color-mix(in srgb, rgb(77, 178, 209) 25%, transparent);
  --nav-folder-6-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent);
  --nav-folder-6-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-6-collapse-color: color-mix(in srgb, rgb(138, 135, 217) 50%, transparent);
  --nav-folder-6-color: rgb(138, 135, 217);
  --nav-folder-6-indent-color: color-mix(in srgb, rgb(138, 135, 217) 25%, transparent);
  --nav-folder-7-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent);
  --nav-folder-7-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-7-collapse-color: color-mix(in srgb, rgb(243, 80, 68) 50%, transparent);
  --nav-folder-7-color: rgb(243, 80, 68);
  --nav-folder-7-indent-color: color-mix(in srgb, rgb(243, 80, 68) 25%, transparent);
  --nav-folder-8-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent);
  --nav-folder-8-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-8-collapse-color: color-mix(in srgb, rgb(235, 106, 20) 50%, transparent);
  --nav-folder-8-color: rgb(235, 106, 20);
  --nav-folder-8-indent-color: color-mix(in srgb, rgb(235, 106, 20) 25%, transparent);
  --nav-folder-9-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent);
  --nav-folder-9-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-9-collapse-color: color-mix(in srgb, rgb(229, 170, 31) 50%, transparent);
  --nav-folder-9-color: rgb(229, 170, 31);
  --nav-folder-9-indent-color: color-mix(in srgb, rgb(229, 170, 31) 25%, transparent);
  --nav-folder-bg-color: transparent;
  --nav-folder-bg-color-hover: rgba(0, 0, 0, 0.125);
  --nav-folder-collapse-color: rgb(107, 86, 61);
  --nav-folder-color: rgb(171, 145, 109);
  --nav-heading-color: rgb(145, 121, 89);
  --nav-heading-color-collapsed: rgb(145, 121, 89);
  --nav-heading-color-collapsed-hover: rgb(145, 121, 89);
  --nav-heading-color-hover: rgb(145, 121, 89);
  --nav-heading-weight: 550;
  --nav-heading-weight-hover: 550;
  --nav-indentation-guide-color: rgb(59, 48, 38);
  --nav-item-background-active: rgba(0, 0, 0, 0.125);
  --nav-item-background-hover: rgba(0, 0, 0, 0.125);
  --nav-item-background-selected: rgba(41, 88, 107, 0.5);
  --nav-item-background-selected-hover: rgba(41, 88, 107, 0.4);
  --nav-item-color: rgb(171, 145, 109);
  --nav-item-color-active: rgb(171, 145, 109);
  --nav-item-color-highlighted: rgb(107, 78, 56);
  --nav-item-color-hover: rgb(171, 145, 109);
  --nav-item-color-selected: rgb(215, 192, 163);
  --nav-item-padding: 5px 8px 5px 24px;
  --nav-item-parent-padding: 5px 8px 5px 24px;
  --nav-item-radius: 6px;
  --nav-item-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.23);
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(145, 121, 89);
  --nav-tag-color-active: rgb(171, 145, 109);
  --nav-tag-color-hover: rgb(171, 145, 109);
  --nav-tag-weight: 650;
  --new-tab-btn-radius: 2em;
  --non-alternating-color: rgb(107, 86, 61);
  --non-alternating-color-hover-active: rgb(81, 64, 47);
  --normal-highlight-bg: rgba(255, 187, 0, 0.2);
  --normal-highlight-color: rgb(215, 192, 163);
  --note-chbx-color: rgb(196, 90, 74);
  --notice-color: rgb(215, 192, 163);
  --notice-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),0px 2px 9px -2.1px rgba(0, 0, 0, 0.4),0px 3px 17px -4.3px rgba(0, 0, 0, 0.3),0px 7px 30px -5.5px rgba(0, 0, 0, 0.2);
  --pcr-btn-shadow: inset 0px 0px 0px 1.5px rgba(255, 255, 255, 0.2);
  --pdf-background: rgb(46, 38, 31);
  --pdf-page-background: rgb(46, 38, 31);
  --pdf-shadow: 0 0 0 1px rgb(59, 48, 38);
  --pdf-sidebar-background: rgb(46, 38, 31);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(59, 48, 38);
  --pill-background: rgba(0, 0, 0, 0.2);
  --pill-background-hover: rgba(0, 0, 0, 0.2);
  --pill-border-color: color-mix(in srgb, rgb(59, 48, 38) 50%, transparent);
  --pill-border-color-hover: color-mix(in srgb, color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38)) 50%, transparent);
  --pill-color: rgb(199, 177, 148);
  --pill-color-hover: rgb(215, 192, 163);
  --pill-color-remove: rgb(107, 86, 61);
  --pill-color-remove-hover: rgb(107, 86, 61);
  --pill-tag-bg-1: rgba(255, 187, 0, 0.2);
  --pill-tag-bg-2: rgba(240, 81, 108, 0.2);
  --pill-tag-bg-3: rgba(42, 177, 192, 0.2);
  --pill-tag-color-1: rgb(229, 170, 31);
  --pill-tag-color-2: rgb(247, 104, 94);
  --pill-tag-color-3: rgb(77, 178, 209);
  --pill-tag-shadow-hover: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.05);
  --pill-tag-weight: 550;
  --pmr-cal-td-padding: 4px 4px 6px 4px;
  --pmr-cal-td-radius: 5px;
  --popup-bg-blur: 3px;
  --pro-chbx-color: rgb(77, 163, 118);
  --progress-background: rgb(38, 33, 28);
  --progress-bar-outline: rgba(255, 255, 255, 0.1);
  --progress-border-width: 1px;
  --progress-color-1: rgb(243, 80, 68);
  --progress-color-2: rgb(218, 94, 22);
  --progress-color-3: rgb(218, 154, 27);
  --progress-color-4: rgb(17, 116, 73);
  --progress-color-5: linear-gradient(45deg, rgb(243, 80, 68), rgb(229, 170, 31), rgb(77, 178, 209));
  --progress-gradient-1: rgb(243, 80, 68);
  --progress-gradient-2: rgb(229, 170, 31);
  --progress-gradient-3: rgb(77, 178, 209);
  --progress-height: 8px;
  --progress-value-outline: rgba(255, 255, 255, 0.21);
  --progress-value-radius: 8px;
  --progress-width: 220px;
  --prompt-background: rgb(46, 38, 31);
  --prompt-border-color: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --prompt-input-background: rgb(46, 38, 31);
  --prompt-instructions-background: color-mix(in hsl, rgb(46, 38, 31) 60%, rgb(38, 33, 28));
  --prompt-results-background: rgb(46, 38, 31);
  --prompt-separator-border: 1px solid rgb(52, 44, 35);
  --prompt-suggestion-background-selected: rgba(0, 0, 0, 0.1);
  --prompt-suggestion-color: rgb(171, 145, 109);
  --prompt-suggestion-color-selected: rgb(215, 192, 163);
  --prompt-suggestion-highlight-color: color-mix(in srgb, rgb(171, 145, 109) 70%, white);
  --prompt-suggestion-highlight-color-selected: rgb(215, 192, 163);
  --prompt-suggestion-shadow-selected: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.14),0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  --question-chbx-color: rgb(154, 94, 181);
  --question-chbx-icon-color: white;
  --quote-chbx-color: rgb(65, 130, 180);
  --quote-chbx-icon-color: white;
  --radius-xs: 2px;
  --raised-background: color-mix(in srgb, rgb(38, 33, 28) 65%, transparent) linear-gradient(rgb(38, 33, 28), color-mix(in srgb, rgb(38, 33, 28) 65%, transparent));
  --resched-chbx-color: rgb(118, 162, 161);
  --ribbon-background: rgb(38, 33, 28);
  --ribbon-background-collapsed: rgb(46, 38, 31);
  --ribbon-border-width: 1px;
  --ribbon-icon: 15px;
  --ribbon-icon-spacing: 4px;
  --ribbon-margin-bottom: 10px;
  --ribbon-radius: 12px;
  --ribbon-slideout-background: rgb(42, 36, 30);
  --ribbon-slideout-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.35),0px 5px 5px -5px rgba(0, 0, 0, 0.38);
  --sched-chbx-color: rgb(159, 149, 137);
  --scrollbar-active-thumb-bg: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --scrollbar-bg: transparent;
  --scrollbar-thumb-bg: rgb(59, 48, 38);
  --search-clear-button-color: color-mix(in srgb, rgb(107, 86, 61) 30%, rgb(145, 121, 89));
  --search-clear-button-color-hover: rgb(243, 80, 68);
  --search-clear-button-size: 12px;
  --search-icon-color: color-mix(in srgb, rgb(107, 86, 61) 30%, rgb(145, 121, 89));
  --search-icon-size: 14px;
  --search-result-background: rgb(42, 36, 30);
  --search-result-background-hover: color-mix(in srgb, rgb(33, 27, 23) 50%, rgb(28, 23, 18));
  --search-result-dest-file-bg: rgb(38, 33, 28);
  --search-result-dest-file-bg-hover: rgb(28, 23, 18);
  --search-result-dest-file-color: rgb(145, 121, 89);
  --search-result-dest-file-icon-color: rgb(81, 64, 47);
  --search-result-dest-file-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.25);
  --search-result-dest-file-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.25),0px 2px 3px 0px rgba(0, 0, 0, 0.29);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(215, 192, 163);
  --setting-group-heading-weight: 650;
  --setting-items-background: rgb(42, 36, 30);
  --setting-items-border-color: rgb(59, 48, 38);
  --settings-nav-group-title-color: rgb(107, 86, 61);
  --settings-nav-item-active-color: rgb(46, 38, 31);
  --settings-nav-item-bg-active: rgb(33, 27, 23);
  --settings-nav-item-bg-hover: transparent;
  --settings-nav-item-padding: 7px 12px 7px 12px;
  --settings-nav-item-padding-active: 6px 12px 8px 20px;
  --settings-nav-item-padding-hover: 7px 12px 7px 20px;
  --settings-nav-item-radius: 7px;
  --settings-nav-item-text-color: rgb(171, 145, 109);
  --settings-nav-item-text-color-active: rgb(81, 64, 47);
  --settings-nav-item-text-color-hover: rgb(215, 192, 163);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.271),0px 6.3px 24.7px rgba(0, 0, 0, 0.312),0px 30px 90px rgba(0, 0, 0, 0.4);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.228),0px 3.4px 6.7px rgba(0, 0, 0, 0.242),0px 15px 30px rgba(0, 0, 0, 0.27);
  --sidebar-nav-icon: 15px;
  --sidebar-tab-icon: 15px;
  --slider-thumb-bg: rgb(215, 192, 163);
  --slider-thumb-border-color: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --slider-thumb-border-width: 0px;
  --slider-thumb-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.35),inset 0pc 1px 0px 1px rgba(255, 255, 255, 0.3),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.29),0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  --slider-thumb-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.35),inset 0pc 1px 0px 1px rgba(255, 255, 255, 0.3),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.29),0px 1px 2px 0px rgba(0, 0, 0, 0.5),0px 0px 0px 6px rgba(255, 255, 255, 0.08);
  --slider-track-background: rgb(38, 33, 28);
  --slider-track-height: 5px;
  --slider-track-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.04);
  --star-chbx-color: rgb(229, 154, 6);
  --star-chbx-icon-color: white;
  --status-bar-background: rgb(38, 33, 28);
  --status-bar-border-color: rgb(59, 48, 38);
  --status-bar-floating-bg: rgb(42, 36, 30);
  --status-bar-floating-offset: 4px;
  --status-bar-floating-opacity: 0.5;
  --status-bar-floating-opacity-hover: 1;
  --status-bar-floating-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.35),0px 5px 5px -5px rgba(0, 0, 0, 0.38);
  --status-bar-item-bg-hover: transparent;
  --status-bar-item-clickable-bg-active: transparent;
  --status-bar-item-clickable-color-active: rgb(107, 86, 61);
  --status-bar-item-color: rgb(145, 121, 89);
  --status-bar-item-color-hover: rgb(199, 177, 148);
  --status-bar-text-color: rgb(171, 145, 109);
  --strikethrough-color: rgb(145, 121, 89);
  --strikethrough-highlight-bg: rgba(255, 187, 0, 0.2);
  --strikethrough-highlight-color: rgb(145, 121, 89);
  --style-settings-container-bg: color-mix(in srgb, rgb(42, 36, 30) 50%, transparent);
  --suggestion-background: rgb(46, 38, 31);
  --swatch-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3);
  --sync-avatar-color-1: rgb(192, 78, 78);
  --sync-avatar-color-2: rgb(203, 128, 53);
  --sync-avatar-color-3: rgb(225, 178, 67);
  --sync-avatar-color-4: rgb(80, 196, 101);
  --sync-avatar-color-5: rgb(70, 169, 180);
  --sync-avatar-color-6: rgb(63, 137, 176);
  --sync-avatar-color-7: rgb(113, 97, 194);
  --sync-avatar-color-8: rgb(180, 100, 100);
  --sync-icon-success: rgb(17, 116, 73);
  --sync-icon-success-active: rgb(107, 86, 61);
  --sync-icon-success-hover: rgb(16, 132, 84);
  --sync-icon-working: rgb(189, 73, 20);
  --sync-icon-working-active: rgb(107, 86, 61);
  --sync-icon-working-hover: rgb(218, 94, 22);
  --tab-active-bg: rgb(46, 38, 31);
  --tab-active-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1),inset 0px -2px 0px 1px rgba(0, 0, 0, 0.25),0px 1px 2px -0.1px rgba(0, 0, 0, 0.47);
  --tab-background-active: rgb(46, 38, 31);
  --tab-bg: transparent;
  --tab-container-background: rgb(38, 33, 28);
  --tab-curves-display: none;
  --tab-divider-color: color-mix(in srgb, rgb(81, 64, 47) 40%, rgb(59, 48, 38));
  --tab-header-container-border-bottom: none;
  --tab-header-container-inner-margin: default;
  --tab-header-container-inner-padding: 2px;
  --tab-header-container-padding: 0 12px 4px 12px;
  --tab-header-container-transition: padding-bottom none;
  --tab-outline-color: transparent;
  --tab-stacked-header-width: 46px;
  --tab-stacked-shadow: -2.9px 0 10.5px -6.2px rgba(0, 0, 0, 0.31),-6.2px 0 3.6px -5.2px rgba(0, 0, 0, 0.27),-9.4px 0 8.4px -4.1px rgba(0, 0, 0, 0.2);
  --tab-status-radius: 4px;
  --tab-switcher-background: rgb(38, 33, 28);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(38, 33, 28), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(78, 62, 45);
  --tab-text-color: rgb(145, 121, 89);
  --tab-text-color-active: rgb(171, 145, 109);
  --tab-text-color-focused: rgb(171, 145, 109);
  --tab-text-color-focused-active: rgb(171, 145, 109);
  --tab-text-color-focused-active-current: rgb(215, 192, 163);
  --tab-text-color-focused-highlighted: rgb(78, 62, 45);
  --tab-z-index: 1;
  --table-add-button-border-color: rgb(59, 48, 38);
  --table-background: rgb(38, 33, 28);
  --table-border-color: rgb(59, 48, 38);
  --table-column-alt-background: rgb(33, 27, 23);
  --table-drag-handle-background-active: rgb(91, 70, 51);
  --table-drag-handle-color: rgb(145, 121, 89);
  --table-drag-handle-color-active: rgb(235, 218, 198);
  --table-header-background: rgb(33, 27, 23);
  --table-header-background-hover: rgb(33, 27, 23);
  --table-header-border-color: rgb(59, 48, 38);
  --table-header-color: rgb(215, 192, 163);
  --table-header-weight: 650;
  --table-row-alt-background: rgb(38, 33, 28);
  --table-row-alt-background-hover: rgb(38, 33, 28);
  --table-row-background-hover: rgb(38, 33, 28);
  --table-selection: rgba(78, 62, 45, 0.1);
  --table-selection-border-color: rgb(91, 70, 51);
  --tag-background: rgba(0, 0, 0, 0.3);
  --tag-background-hover: rgba(0, 0, 0, 0.2);
  --tag-border-color: rgba(0, 0, 0, 0.25);
  --tag-border-color-hover: rgba(0, 0, 0, 0.35);
  --tag-border-width: 1px;
  --tag-color: rgb(65, 151, 185);
  --tag-color-hover: rgb(77, 178, 209);
  --tag-padding-x: 0.6em;
  --tag-padding-y: 0.15em;
  --tag-radius: 1em;
  --tag-shadow: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.2);
  --tag-shadow-active: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.2);
  --tag-shadow-hover: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 3px rgba(0, 0, 0, 0.15);
  --telephone-chbx-color: rgb(56, 159, 104);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(78, 62, 45);
  --text-accent-hover: rgb(107, 78, 56);
  --text-error: rgb(243, 80, 68);
  --text-faint: rgb(145, 121, 89);
  --text-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0;
  --text-highlight-bg: rgba(255, 187, 0, 0.2);
  --text-highlight-bg-rgb: 249,207,81;
  --text-input-bg-active: rgb(28, 23, 18);
  --text-input-border-color: rgb(28, 23, 18);
  --text-input-color: rgb(215, 192, 163);
  --text-input-color-focused: rgb(215, 192, 163);
  --text-input-shadow-active: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.03),inset 0px -1px 0px 0px rgba(0, 0, 0, 0.39),0px 1px 6px 0px rgba(0, 0, 0, 0.37);
  --text-muted: rgb(171, 145, 109);
  --text-normal: rgb(215, 192, 163);
  --text-on-accent: rgb(235, 218, 198);
  --text-on-accent-inverted: rgb(28, 23, 18);
  --text-selection: rgba(126, 105, 78, 0.2);
  --text-selection-theme-bg: color-mix(in srgb, rgb(145, 121, 89) 30%, transparent);
  --text-selection-theme-text-color: color-mix(in srgb, currentColor 70%, white);
  --text-success: rgb(16, 132, 84);
  --text-warning: rgb(218, 94, 22);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(38, 33, 28);
  --titlebar-background-focused: rgb(38, 33, 28);
  --titlebar-border-color: rgb(59, 48, 38);
  --titlebar-text-color: rgb(81, 64, 47);
  --titlebar-text-color-focused: rgb(107, 86, 61);
  --titlebar-text-weight: 450;
  --toggle-bg: color-mix(in srgb, rgb(81, 64, 47) 50%, rgb(107, 86, 61));
  --toggle-bg-enabled: rgb(17, 116, 73);
  --toggle-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.19),inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),inset 0 0 1px rgba(0, 0, 0, 0.4);
  --toggle-shadow-focus: inset 0 6px 20px rgba(0, 0, 0, 0.28),inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),inset 0 0 1px rgba(0, 0, 0, 0.44),0px 0px 0px 5px rgba(255, 255, 255, 0.08);
  --toggle-shadow-hover: inset 0 6px 20px rgba(0, 0, 0, 0.28),inset 0px 0px 0px 1px rgba(255, 255, 255, 0.09),inset 0 0 1px rgba(0, 0, 0, 0.44);
  --toggle-thumb-color: rgb(235, 218, 198);
  --toggle-thumb-shadow: inset 0px 1px 0px 1px rgba(255, 255, 255, 0.5),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25),0 2px 2px rgba(0, 0, 0, 0.35);
  --tooltip-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.3),0px 2px 4px -1.4px rgba(0, 0, 0, 0.3),0px 3px 10px -1.7px rgba(0, 0, 0, 0.14);
  --traffic-lights-offset-x: 46px;
  --traffic-lights-offset-y: 46px;
  --underline-color: rgb(215, 192, 163);
  --underline-decoration-color: color-mix(in srgb, currentColor 22%, transparent);
  --underline-decoration-opacity: 22%;
  --up-chbx-color: rgb(83, 178, 124);
  --vault-name-background: rgb(42, 36, 30);
  --vault-name-border: 1px solid rgb(59, 48, 38);
  --vault-name-border-width: 1px;
  --vault-name-color: rgb(171, 145, 109);
  --vault-name-color-hover: rgb(199, 177, 148);
  --vault-profile-color: rgb(171, 145, 109);
  --vault-profile-color-hover: rgb(171, 145, 109);
  --vault-profile-font-weight: 650;
  --yaml-atom-color: rgb(106, 191, 210);
  --yaml-base-color: rgb(247, 104, 94);
  --yaml-def-meta-color: rgb(145, 121, 89);
  --yaml-keyword-color: rgb(218, 154, 27);
  --yaml-number-color: rgb(247, 104, 94);
  --yaml-string-color: rgb(218, 154, 27);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 33, 28);
  color: rgb(215, 192, 163);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(38, 33, 28);
  color: rgb(215, 192, 163);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 33, 28);
  color: rgb(215, 192, 163);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(38, 33, 28);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(215, 192, 163);
}

body div#quartz-root {
  background-color: rgb(46, 38, 31);
  color: rgb(215, 192, 163);
}`,
    typography: `body .page article p > b, b {
  color: rgb(243, 80, 68);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(243, 80, 68) none 0px;
  text-decoration: rgb(243, 80, 68);
  text-decoration-color: rgb(243, 80, 68);
}

body .page article p > em, em {
  color: rgb(77, 178, 209);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(77, 178, 209) none 0px;
  text-decoration: rgb(77, 178, 209);
  text-decoration-color: rgb(77, 178, 209);
}

body .page article p > i, i {
  color: rgb(77, 178, 209);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(77, 178, 209) none 0px;
  text-decoration: rgb(77, 178, 209);
  text-decoration-color: rgb(77, 178, 209);
}

body .page article p > strong, strong {
  color: rgb(243, 80, 68);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(243, 80, 68) none 0px;
  text-decoration: rgb(243, 80, 68);
  text-decoration-color: rgb(243, 80, 68);
}

body .text-highlight {
  background-color: rgba(255, 187, 0, 0.2);
  color: rgb(215, 192, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(215, 192, 163) none 0px;
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body del {
  color: rgb(215, 192, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(215, 192, 163) none 0px;
  text-decoration: line-through rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body p {
  color: rgb(171, 145, 109);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(171, 145, 109) none 0px;
  text-decoration: rgb(171, 145, 109);
  text-decoration-color: rgb(171, 145, 109);
}`,
    links: `body a.external, footer a {
  color: rgb(46, 168, 115);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(46, 168, 115) none 0px;
  text-decoration: underline 1.5px color(srgb 0.1806 0.6594 0.45192 / 0.22);
  text-decoration-color: color(srgb 0.1806 0.6594 0.45192 / 0.22);
  text-decoration-thickness: 1.5px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(229, 170, 31);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(229, 170, 31) none 0px;
  text-decoration: underline 1.5px color(srgb 0.8971 0.66484 0.1229 / 0.22);
  text-decoration-color: color(srgb 0.8971 0.66484 0.1229 / 0.22);
  text-decoration-thickness: 1.5px;
}

body a.internal.broken {
  color: rgb(145, 121, 89);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(145, 121, 89) none 0px;
  text-decoration: underline 1.5px color(srgb 0.5704 0.47472 0.3496 / 0.22);
  text-decoration-color: color(srgb 0.5704 0.47472 0.3496 / 0.22);
  text-decoration-thickness: 1.5px;
}`,
    lists: `body dd {
  color: rgb(215, 192, 163);
}

body dt {
  color: rgb(215, 192, 163);
  font-weight: 450;
}

body ol > li {
  color: rgb(215, 192, 163);
}

body ol.overflow {
  background-color: rgb(46, 38, 31);
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

body ul > li {
  color: rgb(215, 192, 163);
}

body ul.overflow {
  background-color: rgb(46, 38, 31);
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(145, 121, 89);
  text-decoration: rgb(145, 121, 89);
}

body blockquote {
  background-color: rgb(38, 33, 28);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

body table {
  color: rgb(215, 192, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 594px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(38, 33, 28);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(38, 33, 28);
}

body td {
  border-bottom-color: rgb(59, 48, 38);
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  color: rgb(215, 192, 163);
  font-weight: 450;
}

body th {
  border-bottom-color: rgb(59, 48, 38);
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  color: rgb(215, 192, 163);
  font-weight: 650;
}

body tr {
  background-color: rgb(33, 27, 23);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(225, 178, 67);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(225, 178, 67);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(225, 178, 67);
  border-left-color: rgb(225, 178, 67);
  border-right-color: rgb(225, 178, 67);
  border-top-color: rgb(225, 178, 67);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(215, 192, 163);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figcaption {
  color: rgb(215, 192, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

body img {
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

body video {
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
    embeds: `body .file-embed {
  background-color: rgb(42, 36, 30);
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
}

body .footnotes {
  border-top-color: rgb(215, 192, 163);
  color: rgb(215, 192, 163);
}

body .transclude {
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

body .transclude-inner {
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
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(145, 121, 89);
  text-decoration: line-through rgb(145, 121, 89);
  text-decoration-color: rgb(145, 121, 89);
}

body input[type=checkbox] {
  border-bottom-color: rgb(81, 64, 47);
  border-left-color: rgb(81, 64, 47);
  border-right-color: rgb(81, 64, 47);
  border-top-color: rgb(81, 64, 47);
}

body li.task-list-item[data-task='!'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='*'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='-'] {
  color: rgb(145, 121, 89);
  text-decoration: line-through rgb(145, 121, 89);
  text-decoration-color: rgb(145, 121, 89);
}

body li.task-list-item[data-task='/'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='>'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='?'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='I'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='S'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='b'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='c'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='d'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='f'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='i'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='k'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='l'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='p'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='u'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body li.task-list-item[data-task='w'] {
  color: rgb(215, 192, 163);
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}`,
    callouts: `body .callout .callout-title {
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

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 650;
}

body .callout > .callout-content {
  background-color: color(srgb 0.17115 0.145 0.11885);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgb(46, 38, 31);
  border-bottom-color: color(srgb 0.26608 0.213228 0.16192);
  border-left-color: color(srgb 0.26608 0.213228 0.16192);
  border-right-color: color(srgb 0.26608 0.213228 0.16192);
  border-top-color: color(srgb 0.26608 0.213228 0.16192);
  box-shadow: rgba(0, 0, 0, 0.27) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.314) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.4) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  background-color: rgb(46, 38, 31);
  color: rgb(215, 192, 163);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(215, 192, 163) none 0px;
  text-decoration: rgb(215, 192, 163);
  text-decoration-color: rgb(215, 192, 163);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(215, 192, 163);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(215, 192, 163);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(215, 192, 163);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.1);
  color: rgb(215, 192, 163);
  font-weight: 450;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.26608 0.213228 0.16192);
  border-left-color: color(srgb 0.26608 0.213228 0.16192);
  border-right-color: color(srgb 0.26608 0.213228 0.16192);
  border-top-color: color(srgb 0.26608 0.213228 0.16192);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(46, 38, 31);
  border-bottom-color: rgb(52, 44, 35);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(215, 192, 163);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(229, 170, 31);
}

body h1 {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(235, 218, 198);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(46, 38, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 38, 31);
}

body ::-webkit-scrollbar-corner {
  background: rgb(46, 38, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 38, 31);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(46, 38, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 38, 31);
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 38, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 38, 31);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 38, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 38, 31);
}

body ::-webkit-scrollbar-track {
  background: rgb(46, 38, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 38, 31);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(171, 145, 109);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  text-decoration: rgb(171, 145, 109);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(171, 145, 109);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  text-decoration: rgb(171, 145, 109);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(171, 145, 109);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  text-decoration: rgb(171, 145, 109);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    toc: `body li.depth-0 {
  font-weight: 450;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(38, 33, 28);
  border-bottom-color: rgb(59, 48, 38);
  border-left-color: rgb(59, 48, 38);
  border-right-color: rgb(59, 48, 38);
  border-top-color: rgb(59, 48, 38);
  color: rgb(171, 145, 109);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(145, 121, 89);
  text-decoration: rgb(145, 121, 89);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(215, 192, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  color: rgb(215, 192, 163);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 145, 109);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

body li.section-li > .section .meta {
  color: rgb(171, 145, 109);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(171, 145, 109);
  text-decoration: rgb(171, 145, 109);
}

body ul.section-ul {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: color(srgb 0.52501 0.433977 0.31699);
  stroke: color(srgb 0.52501 0.433977 0.31699);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(145, 121, 89);
  border-left-color: rgb(145, 121, 89);
  border-right-color: rgb(145, 121, 89);
  border-top-color: rgb(145, 121, 89);
  color: rgb(145, 121, 89);
}

body .breadcrumb-element p {
  color: rgb(59, 48, 38);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
  color: rgb(215, 192, 163);
}

body .metadata {
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

body .metadata-properties {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(38, 33, 28);
}

body .page-header h2.page-title {
  color: rgb(171, 145, 109);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(215, 192, 163);
  text-decoration: underline dotted rgb(215, 192, 163);
}

body details {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

body input[type=text] {
  border-bottom-color: rgb(145, 121, 89);
  border-left-color: rgb(145, 121, 89);
  border-right-color: rgb(145, 121, 89);
  border-top-color: rgb(145, 121, 89);
  color: rgb(145, 121, 89);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(215, 192, 163);
  border-left-color: rgb(215, 192, 163);
  border-right-color: rgb(215, 192, 163);
  border-top-color: rgb(215, 192, 163);
}

body sub {
  color: rgb(215, 192, 163);
}

body summary {
  color: rgb(215, 192, 163);
  font-weight: 450;
}

body sup {
  color: rgb(215, 192, 163);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 31;
  --accent-l: 50%;
  --accent-s: 23%;
  --active-line-bg: rgb(252, 250, 248);
  --alternating-color-1: rgb(215, 151, 25);
  --alternating-color-1-hover-active: rgb(182, 122, 2);
  --alternating-color-2: rgb(191, 63, 54);
  --alternating-color-2-hover-active: rgb(154, 34, 25);
  --alternating-color-3: rgb(34, 114, 155);
  --alternating-color-3-hover-active: rgb(10, 73, 118);
  --amount-chbx-color: rgb(61, 148, 107);
  --amount-chbx-icon-color: white;
  --amount-chbx-radius: 100%;
  --anim-popdown: 0.4s slideDown forwards;
  --anim-popup: 0.3s slideUp forwards;
  --anim-popup-alt: 0.335s slideUpAlt forwards;
  --background-anim: background 140ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --background-modifier-active-hover: rgb(228, 215, 195);
  --background-modifier-border: rgb(228, 215, 195);
  --background-modifier-border-focus: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --background-modifier-border-hover: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --background-modifier-error: rgb(191, 63, 54);
  --background-modifier-error-hover: rgb(223, 69, 58);
  --background-modifier-error-rgb: 223,90,90;
  --background-modifier-form-field: rgb(242, 236, 227);
  --background-modifier-form-field-hover: rgb(242, 236, 227);
  --background-modifier-hover: rgba(255, 255, 255, 0.5);
  --background-modifier-message: rgb(131, 107, 73);
  --background-modifier-success: rgb(50, 149, 98);
  --background-modifier-success-rgb: 87,185,132;
  --background-modifier-warning: rgb(215, 92, 40);
  --background-modifier-warning-hover: rgb(235, 125, 66);
  --background-primary: rgb(248, 245, 241);
  --background-primary-alt: rgb(242, 236, 227);
  --background-secondary: rgb(238, 231, 221);
  --background-secondary-alt: rgb(238, 231, 221);
  --bases-cards-background: rgb(248, 245, 241);
  --bases-cards-cover-background: rgb(242, 236, 227);
  --bases-cards-shadow: 0 0 0 1px rgb(228, 215, 195);
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --bases-embed-border-color: rgb(228, 215, 195);
  --bases-group-heading-property-color: rgb(131, 107, 73);
  --bases-group-heading-property-weight: 450;
  --bases-group-heading-value-weight: 650;
  --bases-table-border-color: rgb(228, 215, 195);
  --bases-table-cell-background-active: rgb(248, 245, 241);
  --bases-table-cell-background-disabled: rgb(242, 236, 227);
  --bases-table-cell-background-selected: rgba(157, 128, 98, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(165, 138, 111);
  --bases-table-group-background: rgb(242, 236, 227);
  --bases-table-header-background: rgb(248, 245, 241);
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.5);
  --bases-table-header-color: rgb(131, 107, 73);
  --bases-table-header-weight: 450;
  --bases-table-row-background-hover: rgb(252, 250, 248);
  --bases-table-summary-background: rgb(248, 245, 241);
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.5);
  --blockquote-background-color: rgb(252, 250, 248);
  --blockquote-border-color: rgb(228, 215, 195);
  --blur-background: color-mix(in srgb, rgb(248, 245, 241) 65%, transparent) linear-gradient(rgb(248, 245, 241), color-mix(in srgb, rgb(248, 245, 241) 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: rgb(191, 63, 54);
  --bold-highlight-bg: rgba(240, 81, 108, 0.2);
  --bold-highlight-color: rgb(89, 62, 34);
  --bold-italic-color: rgb(67, 46, 20);
  --bold-italic-highlight-bg: rgba(153, 190, 35, 0.2);
  --bold-italic-highlight-color: rgb(67, 46, 20);
  --bold-italic-strikethrough-color: rgb(157, 128, 98);
  --bold-italic-weight: 750;
  --bold-weight: 750;
  --bookmark-chbx-color: rgb(235, 125, 66);
  --bookmark-folder-1-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent);
  --bookmark-folder-1-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-1-collapse-color: color-mix(in srgb, rgb(191, 63, 54) 50%, transparent);
  --bookmark-folder-1-color: rgb(191, 63, 54);
  --bookmark-folder-1-indent-color: color-mix(in srgb, rgb(191, 63, 54) 25%, transparent);
  --bookmark-folder-10-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent);
  --bookmark-folder-10-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-10-collapse-color: color-mix(in srgb, rgb(26, 122, 79) 50%, transparent);
  --bookmark-folder-10-color: rgb(26, 122, 79);
  --bookmark-folder-10-indent-color: color-mix(in srgb, rgb(26, 122, 79) 25%, transparent);
  --bookmark-folder-11-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent);
  --bookmark-folder-11-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-11-collapse-color: color-mix(in srgb, rgb(34, 114, 155) 50%, transparent);
  --bookmark-folder-11-color: rgb(34, 114, 155);
  --bookmark-folder-11-indent-color: color-mix(in srgb, rgb(34, 114, 155) 25%, transparent);
  --bookmark-folder-12-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent);
  --bookmark-folder-12-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-12-collapse-color: color-mix(in srgb, rgb(116, 69, 150) 50%, transparent);
  --bookmark-folder-12-color: rgb(116, 69, 150);
  --bookmark-folder-12-indent-color: color-mix(in srgb, rgb(116, 69, 150) 25%, transparent);
  --bookmark-folder-2-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent);
  --bookmark-folder-2-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-2-collapse-color: color-mix(in srgb, rgb(215, 92, 40) 50%, transparent);
  --bookmark-folder-2-color: rgb(215, 92, 40);
  --bookmark-folder-2-indent-color: color-mix(in srgb, rgb(215, 92, 40) 25%, transparent);
  --bookmark-folder-3-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent);
  --bookmark-folder-3-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-3-collapse-color: color-mix(in srgb, rgb(182, 122, 2) 50%, transparent);
  --bookmark-folder-3-color: rgb(182, 122, 2);
  --bookmark-folder-3-indent-color: color-mix(in srgb, rgb(182, 122, 2) 25%, transparent);
  --bookmark-folder-4-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent);
  --bookmark-folder-4-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-4-collapse-color: color-mix(in srgb, rgb(26, 122, 79) 50%, transparent);
  --bookmark-folder-4-color: rgb(26, 122, 79);
  --bookmark-folder-4-indent-color: color-mix(in srgb, rgb(26, 122, 79) 25%, transparent);
  --bookmark-folder-5-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent);
  --bookmark-folder-5-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-5-collapse-color: color-mix(in srgb, rgb(34, 114, 155) 50%, transparent);
  --bookmark-folder-5-color: rgb(34, 114, 155);
  --bookmark-folder-5-indent-color: color-mix(in srgb, rgb(34, 114, 155) 25%, transparent);
  --bookmark-folder-6-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent);
  --bookmark-folder-6-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-6-collapse-color: color-mix(in srgb, rgb(116, 69, 150) 50%, transparent);
  --bookmark-folder-6-color: rgb(116, 69, 150);
  --bookmark-folder-6-indent-color: color-mix(in srgb, rgb(116, 69, 150) 25%, transparent);
  --bookmark-folder-7-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent);
  --bookmark-folder-7-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-7-collapse-color: color-mix(in srgb, rgb(191, 63, 54) 50%, transparent);
  --bookmark-folder-7-color: rgb(191, 63, 54);
  --bookmark-folder-7-indent-color: color-mix(in srgb, rgb(191, 63, 54) 25%, transparent);
  --bookmark-folder-8-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent);
  --bookmark-folder-8-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-8-collapse-color: color-mix(in srgb, rgb(215, 92, 40) 50%, transparent);
  --bookmark-folder-8-color: rgb(215, 92, 40);
  --bookmark-folder-8-indent-color: color-mix(in srgb, rgb(215, 92, 40) 25%, transparent);
  --bookmark-folder-9-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent);
  --bookmark-folder-9-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent);
  --bookmark-folder-9-collapse-color: color-mix(in srgb, rgb(182, 122, 2) 50%, transparent);
  --bookmark-folder-9-color: rgb(182, 122, 2);
  --bookmark-folder-9-indent-color: color-mix(in srgb, rgb(182, 122, 2) 25%, transparent);
  --breadcrumb-bg-hover: rgb(238, 231, 221);
  --breadcrumb-color: rgb(157, 128, 98);
  --breadcrumb-color-hover: rgb(157, 128, 98);
  --breadcrumb-separator-color: rgb(228, 215, 195);
  --button-accent-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.09),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.15),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.22),0px 2px 4px -1px rgba(0, 0, 0, 0.19);
  --button-accent-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.09),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.6);
  --button-accent-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.28),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.15),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 6px -1px rgba(0, 0, 0, 0.24),0px 0px 0px 3px rgba(207, 182, 150, 0.15);
  --button-accent-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.19),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.15),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.2),0px 4px 4px -5.6px rgba(0, 0, 0, 0.52),0px 2px 4px -2.7px rgba(0, 0, 0, 0.27),0px 2px 6px -1px rgba(0, 0, 0, 0.24);
  --button-anim: 140ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
  --button-axis-offset: 2px;
  --button-inset-shadow-size: 2px;
  --button-metadata-padding: 6px 8px 8px 6px;
  --button-metadata-padding-active: 6px 8px 6px 6px;
  --button-opacity-active: 0.5;
  --button-padding: 8px 12px 10px 12px;
  --button-padding-active: 10px 12px 8px 12px;
  --button-radius: 8px;
  --button-s-padding: 4px 8px 4px 8px;
  --button-s-radius: 6.4px;
  --button-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.1),0px 2px 4px -1px rgba(0, 0, 0, 0.05);
  --button-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.09),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.6);
  --button-shadow-focus: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.1),0px 2px 4px -1px rgba(0, 0, 0, 0.05),0px 0px 0px 3px rgba(207, 182, 150, 0.15);
  --button-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.15),0px 2px 6px -1px rgba(0, 0, 0, 0.1);
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
  --cancelled-chbx-color: rgb(182, 174, 165);
  --cancelled-chbx-text-color: rgb(183, 157, 123);
  --cancelled-chbx-text-decoration: line-through;
  --canvas-background: rgb(248, 245, 241);
  --canvas-card-label-color: rgb(183, 157, 123);
  --canvas-color: 182,175,166;
  --canvas-color-1: 223,90,90;
  --canvas-color-2: 231,130,63;
  --canvas-color-3: 248,197,46;
  --canvas-color-4: 87,185,132;
  --canvas-color-5: 99,164,198;
  --canvas-color-6: 135,106,193;
  --canvas-controls-icon-size: 15px;
  --canvas-dot-pattern: rgb(228, 215, 195);
  --canvas-icon-color: rgb(183, 157, 123);
  --canvas-icon-color-disabled: rgb(228, 215, 195);
  --canvas-icon-color-hover: rgb(101, 81, 52);
  --canvas-menu-bg: color-mix(in hsl, rgb(252, 250, 248) 50%, rgb(248, 245, 241));
  --canvas-menu-bg-hover: rgb(252, 250, 248);
  --canvas-menu-border: 1px solid rgb(228, 215, 195);
  --canvas-menu-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.02),0px 1px 4px -2.1px rgba(0, 0, 0, 0.1),0px 2px 8px -1.2px rgba(0, 0, 0, 0.03);
  --caret-color: rgb(183, 157, 123);
  --checkbox-border-color: rgb(228, 215, 195);
  --checkbox-border-color-hover: rgb(207, 182, 150);
  --checkbox-color: rgb(50, 149, 98);
  --checkbox-color-hover: rgb(62, 177, 116);
  --checkbox-marker-color: white;
  --checked-border-color: rgba(0, 0, 0, 0.15);
  --checked-border-color-hover: rgba(0, 0, 0, 0.1);
  --checklist-bg: rgb(252, 250, 248);
  --checklist-done-color: rgb(183, 157, 123);
  --checklist-shadow-hover: 0px 0px 0px 3px rgba(0, 0, 0, 0.07);
  --clickable-icon-radius: 5px;
  --clock-chbx-color: rgb(76, 125, 174);
  --close-button-radius: 12px;
  --code-background: rgb(242, 236, 227);
  --code-border-color: rgb(228, 215, 195);
  --code-bracket-background: rgba(255, 255, 255, 0.5);
  --code-comment: rgb(183, 157, 123);
  --code-function: rgb(222, 159, 13);
  --code-important: rgb(213, 133, 52);
  --code-keyword: rgb(199, 112, 125);
  --code-normal: rgb(89, 62, 34);
  --code-operator: rgb(205, 66, 66);
  --code-property: rgb(76, 174, 170);
  --code-punctuation: rgb(131, 107, 73);
  --code-radius: 8px;
  --code-string: rgb(79, 171, 119);
  --code-tag: rgb(205, 66, 66);
  --code-value: rgb(125, 113, 193);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(207, 182, 150);
  --collapse-icon-color-collapsed: rgb(207, 182, 150);
  --color-accent: rgb(157, 128, 98);
  --color-accent-1: rgb(165, 138, 111);
  --color-accent-2: rgb(185, 151, 121);
  --color-accent-hsl: 31,23%,50%;
  --color-base-00: rgb(252, 250, 248);
  --color-base-05: rgb(248, 245, 241);
  --color-base-10: rgb(242, 236, 227);
  --color-base-100: rgb(67, 46, 20);
  --color-base-20: rgb(238, 231, 221);
  --color-base-25: rgb(235, 227, 214);
  --color-base-30: rgb(228, 215, 195);
  --color-base-35: rgb(207, 182, 150);
  --color-base-40: rgb(183, 157, 123);
  --color-base-50: rgb(157, 128, 98);
  --color-base-60: rgb(131, 107, 73);
  --color-base-70: rgb(101, 81, 52);
  --color-blue: rgb(48, 121, 176);
  --color-blue-rgb: 99,164,198;
  --color-cyan: rgb(76, 174, 170);
  --color-cyan-rgb: 124,180,206;
  --color-gray: rgb(182, 174, 165);
  --color-gray-rgb: 182,175,166;
  --color-green: rgb(79, 171, 119);
  --color-green-rgb: 87,185,132;
  --color-l-alpha-blue: rgba(42, 177, 192, 0.2);
  --color-l-alpha-gray: rgba(207, 182, 150, 0.15);
  --color-l-alpha-green: rgba(153, 190, 35, 0.2);
  --color-l-alpha-orange: rgba(255, 115, 0, 0.2);
  --color-l-alpha-purple: rgba(112, 122, 255, 0.2);
  --color-l-alpha-red: rgba(240, 81, 108, 0.2);
  --color-l-alpha-yellow: rgba(255, 187, 0, 0.2);
  --color-l-blue-10: rgb(99, 162, 187);
  --color-l-blue-20: rgb(42, 144, 203);
  --color-l-blue-30: rgb(34, 114, 155);
  --color-l-blue-40: rgb(10, 73, 118);
  --color-l-gray-10: rgb(252, 250, 248);
  --color-l-gray-100: rgb(131, 107, 73);
  --color-l-gray-110: rgb(123, 98, 66);
  --color-l-gray-120: rgb(101, 81, 52);
  --color-l-gray-130: rgb(89, 62, 34);
  --color-l-gray-140: rgb(67, 46, 20);
  --color-l-gray-20: rgb(248, 245, 241);
  --color-l-gray-30: rgb(242, 236, 227);
  --color-l-gray-40: rgb(238, 231, 221);
  --color-l-gray-50: rgb(235, 227, 214);
  --color-l-gray-60: rgb(228, 215, 195);
  --color-l-gray-70: rgb(207, 182, 150);
  --color-l-gray-80: rgb(183, 157, 123);
  --color-l-gray-90: rgb(157, 128, 98);
  --color-l-green-10: rgb(139, 193, 164);
  --color-l-green-20: rgb(62, 177, 116);
  --color-l-green-30: rgb(50, 149, 98);
  --color-l-green-40: rgb(26, 122, 79);
  --color-l-orange-10: rgb(227, 152, 95);
  --color-l-orange-20: rgb(235, 125, 66);
  --color-l-orange-30: rgb(215, 92, 40);
  --color-l-orange-40: rgb(175, 55, 4);
  --color-l-purple-10: rgb(203, 167, 220);
  --color-l-purple-20: rgb(159, 114, 187);
  --color-l-purple-30: rgb(116, 69, 150);
  --color-l-purple-40: rgb(68, 23, 130);
  --color-l-red-10: rgb(217, 116, 109);
  --color-l-red-20: rgb(223, 69, 58);
  --color-l-red-30: rgb(191, 63, 54);
  --color-l-red-40: rgb(154, 34, 25);
  --color-l-yellow-10: rgb(231, 197, 111);
  --color-l-yellow-20: rgb(236, 185, 54);
  --color-l-yellow-30: rgb(215, 151, 25);
  --color-l-yellow-40: rgb(182, 122, 2);
  --color-orange: rgb(213, 133, 52);
  --color-orange-rgb: 231,130,63;
  --color-pink: rgb(199, 112, 125);
  --color-pink-rgb: 217,102,122;
  --color-purple: rgb(125, 113, 193);
  --color-purple-rgb: 135,106,193;
  --color-red: rgb(205, 66, 66);
  --color-red-rgb: 223,90,90;
  --color-yellow: rgb(222, 159, 13);
  --color-yellow-rgb: 248,197,46;
  --community-item-flair-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  --community-item-selected-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.23),0px 1px 3px -2.6px rgba(0, 0, 0, 0.23),0px 2px 6px -4.2px rgba(0, 0, 0, 0.19),0px 4px 12px -6px rgba(0, 0, 0, 0.9);
  --community-item-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  --community-item-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  --component-font-weight: 550;
  --con-chbx-color: rgb(186, 72, 44);
  --copy-code-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.09),0px 2px 4px -2px rgba(0, 0, 0, 0.06);
  --copy-code-button-radius: 4px;
  --cursor: pointer;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --disabled-component-opacity: 0.3;
  --divider-color: rgb(228, 215, 195);
  --divider-color-hover: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --divider-radius: 8px;
  --divider-width-hover: 4px;
  --down-chbx-color: rgb(191, 63, 54);
  --drag-ghost-background: rgb(165, 138, 111);
  --drag-ghost-text-color: rgb(252, 250, 248);
  --dropdown-background: rgb(242, 236, 227);
  --dropdown-background-hover: color-mix(in hsl, rgb(252, 250, 248) 50%, rgb(242, 236, 227));
  --dropdown-height: 31px;
  --editor-bg-color: rgb(248, 245, 241);
  --editor-bgpattern-color: rgb(228, 215, 195);
  --editor-bgpattern-size: 50px 50px;
  --editor-border-color: rgb(228, 215, 195);
  --editor-border-radius: 12px;
  --editor-border-width: 1px;
  --editor-header-icon: 15px;
  --editor-pane-margin: 10px;
  --editor-tab-icon: 15px;
  --embed-background: color-mix( in srgb, rgb(242, 236, 227) 50%, rgb(248, 245, 241) );
  --embed-bg-color-mix: color-mix( in srgb, rgb(242, 236, 227) 50%, rgb(248, 245, 241) );
  --embed-block-shadow-hover: none;
  --embed-border-bottom: 1px solid rgb(228, 215, 195);
  --embed-border-bottom-color: rgb(228, 215, 195);
  --embed-border-bottom-style: solid;
  --embed-border-bottom-width: 1px;
  --embed-border-end: 1px solid rgb(228, 215, 195);
  --embed-border-end-color: rgb(228, 215, 195);
  --embed-border-end-style: solid;
  --embed-border-end-width: 1px;
  --embed-border-radius: 12px;
  --embed-border-start: 1px solid rgb(228, 215, 195);
  --embed-border-start-color: rgb(228, 215, 195);
  --embed-border-start-style: solid;
  --embed-border-start-width: 1px;
  --embed-border-top: 1px solid rgb(228, 215, 195);
  --embed-border-top-color: rgb(228, 215, 195);
  --embed-border-top-style: solid;
  --embed-border-top-width: 1px;
  --embed-edit-btn-bg: color-mix(in srgb, rgb(248, 245, 241) 70%, transparent);
  --embed-edit-btn-bg-hover: color-mix(in srgb, rgb(248, 245, 241) 100%, transparent);
  --embed-edit-btn-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.1);
  --embed-edit-btn-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 1px 1px rgba(0, 0, 0, 0.1),0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  --embed-left-right-padding: 16px;
  --embed-media-border-radius: 8px;
  --embed-padding: 6px 16px 0px;
  --embed-title-border: 1px solid rgb(228, 215, 195);
  --embed-title-border-color: rgb(228, 215, 195);
  --embed-title-border-style: solid;
  --embed-title-border-width: 1px;
  --embed-title-color: rgb(157, 128, 98);
  --embed-title-font-size: 16px;
  --embed-title-font-weight: 550;
  --embed-title-letter-spacing: normal;
  --embed-title-margin-bottom: 8px;
  --embed-title-text-transform: none;
  --empty-state-action-btn-bg: color-mix(in srgb, rgb(242, 236, 227) 50%, transparent);
  --file-header-background: rgb(248, 245, 241);
  --file-header-background-focused: rgb(248, 245, 241);
  --file-header-border: 1px solid rgb(228, 215, 195);
  --file-header-border-color: rgb(228, 215, 195);
  --file-header-border-width: 1px;
  --file-header-font: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-title-color: rgb(101, 81, 52);
  --file-line-width: 40rem;
  --file-max-line-width: 88%;
  --file-tab-gap: 0px;
  --flair-background: rgb(242, 236, 227);
  --flair-color: rgb(89, 62, 34);
  --flair-count-bg-color: rgb(238, 231, 221);
  --flair-count-color: rgb(183, 157, 123);
  --flair-count-padding: 2px 4px;
  --flair-count-radius: 5px;
  --font-bold: 750;
  --font-extrabold: 850;
  --font-extralight: 250;
  --font-interface: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Inter";
  --font-light: 350;
  --font-medium: 550;
  --font-mermaid: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Cascadia Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Cascadia Code";
  --font-normal: 450;
  --font-print: '??', '??', "Inter", 'Arial';
  --font-semibold: 650;
  --font-text: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Inter";
  --font-thin: 150;
  --font-ui-smallest: 11px;
  --font-weight: 450;
  --footnote-divider-color: rgb(228, 215, 195);
  --footnote-id-color: rgb(131, 107, 73);
  --footnote-id-color-no-occurrences: rgb(183, 157, 123);
  --footnote-input-background-active: rgba(255, 255, 255, 0.45);
  --graph-arrow: rgb(157, 128, 98);
  --graph-line: rgb(228, 215, 195);
  --graph-node: rgb(42, 144, 203);
  --graph-node-attachment: rgb(139, 193, 164);
  --graph-node-focused: rgb(89, 62, 34);
  --graph-node-highlight-fill: rgb(157, 128, 98);
  --graph-node-highlight-line: rgb(207, 182, 150);
  --graph-node-tag: rgb(223, 69, 58);
  --graph-node-unresolved: rgb(236, 185, 54);
  --graph-node-unresolved-opacity: 1;
  --graph-text: rgb(183, 157, 123);
  --gray: var(--text-muted);
  --gutter-color: color-mix(in hsl, rgb(228, 215, 195) 40%, rgb(207, 182, 150));
  --gutter-color-active: rgb(157, 128, 98);
  --h1-bg-color: transparent;
  --h1-border-bottom-color: rgb(228, 215, 195);
  --h1-border-left-color: rgb(228, 215, 195);
  --h1-border-radius: 0px;
  --h1-border-right-color: rgb(228, 215, 195);
  --h1-border-style: solid;
  --h1-border-top-color: rgb(228, 215, 195);
  --h1-border-width: 0px;
  --h1-color: rgb(67, 46, 20);
  --h1-text-align: left;
  --h1-text-transform: normal;
  --h1-weight: 650;
  --h2-bg-color: transparent;
  --h2-border-bottom-color: rgb(228, 215, 195);
  --h2-border-left-color: rgb(228, 215, 195);
  --h2-border-radius: 0px;
  --h2-border-right-color: rgb(228, 215, 195);
  --h2-border-style: solid;
  --h2-border-top-color: rgb(228, 215, 195);
  --h2-border-width: 0px;
  --h2-color: rgb(67, 46, 20);
  --h2-text-align: left;
  --h2-text-transform: normal;
  --h2-weight: 650;
  --h3-bg-color: transparent;
  --h3-border-bottom-color: rgb(228, 215, 195);
  --h3-border-left-color: rgb(228, 215, 195);
  --h3-border-radius: 0px;
  --h3-border-right-color: rgb(228, 215, 195);
  --h3-border-style: solid;
  --h3-border-top-color: rgb(228, 215, 195);
  --h3-border-width: 0px;
  --h3-color: rgb(67, 46, 20);
  --h3-text-align: left;
  --h3-text-transform: normal;
  --h3-weight: 650;
  --h4-bg-color: transparent;
  --h4-border-bottom-color: rgb(228, 215, 195);
  --h4-border-left-color: rgb(228, 215, 195);
  --h4-border-radius: 0px;
  --h4-border-right-color: rgb(228, 215, 195);
  --h4-border-style: solid;
  --h4-border-top-color: rgb(228, 215, 195);
  --h4-border-width: 0px;
  --h4-color: rgb(67, 46, 20);
  --h4-text-align: left;
  --h4-text-transform: normal;
  --h4-weight: 650;
  --h5-bg-color: transparent;
  --h5-border-bottom-color: rgb(228, 215, 195);
  --h5-border-left-color: rgb(228, 215, 195);
  --h5-border-radius: 0px;
  --h5-border-right-color: rgb(228, 215, 195);
  --h5-border-style: solid;
  --h5-border-top-color: rgb(228, 215, 195);
  --h5-border-width: 0px;
  --h5-color: rgb(67, 46, 20);
  --h5-text-align: left;
  --h5-text-transform: normal;
  --h5-weight: 650;
  --h6-bg-color: transparent;
  --h6-border-bottom-color: rgb(228, 215, 195);
  --h6-border-left-color: rgb(228, 215, 195);
  --h6-border-radius: 0px;
  --h6-border-right-color: rgb(228, 215, 195);
  --h6-border-style: solid;
  --h6-border-top-color: rgb(228, 215, 195);
  --h6-border-width: 0px;
  --h6-color: rgb(67, 46, 20);
  --h6-text-align: left;
  --h6-text-transform: normal;
  --h6-weight: 650;
  --header-height: 46px;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(183, 157, 123);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(228, 215, 195);
  --hr-thickness: 1px;
  --icon-bg: transparent;
  --icon-bg-active: rgb(228, 215, 195);
  --icon-bg-active-menu: transparent;
  --icon-bg-hover: transparent;
  --icon-bg-pressed: transparent;
  --icon-color: rgb(183, 157, 123);
  --icon-color-active: rgb(131, 107, 73);
  --icon-color-focused: rgb(157, 128, 98);
  --icon-color-hover: rgb(157, 128, 98);
  --icon-container-radius: 0px;
  --icon-m: 16px;
  --icon-opacity: 1;
  --icon-s: 15px;
  --icon-size: 16px;
  --icon-xl: 24px;
  --icon-xs: 13px;
  --idea-chbx-color: rgb(228, 158, 88);
  --important-chbx-color: rgb(234, 89, 31);
  --important-chbx-icon-color: white;
  --important-chbx-radius: 100%;
  --indentation-guide-color: rgb(228, 215, 195);
  --indentation-guide-color-active: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --indentation-guide-reading-indent: -1em;
  --info-chbx-color: rgb(81, 148, 146);
  --info-chbx-icon-color: white;
  --inline-code-bg: rgb(252, 250, 248);
  --inline-code-color: rgb(217, 116, 109);
  --inline-code-radius: 4px;
  --inline-query-bg: color-mix(in srgb, rgb(238, 231, 221) 20%, rgb(248, 245, 241));
  --inline-query-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.06);
  --inline-title-color: rgb(67, 46, 20);
  --inline-title-weight: 650;
  --inprogress-chbx-border-color: color-mix(in srgb, rgb(235, 157, 55) 65%, rgb(131, 107, 73));
  --inprogress-chbx-color: rgb(235, 157, 55);
  --inprogress-chbx-color-hover: rgb(238, 173, 88);
  --input-date-separator: rgb(183, 157, 123);
  --input-font-weight: 450;
  --input-height: 32px;
  --input-placeholder-color: rgb(183, 157, 123);
  --input-radius: 8px;
  --input-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.2),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.1),0px 2px 4px -1px rgba(0, 0, 0, 0.05);
  --input-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px 0px 0px 3px rgba(0, 0, 0, 0.09),inset 0px 2px 8px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 1px rgba(255, 255, 255, 0.6);
  --input-shadow-hover: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.09),inset 0px -2px 4px 0px rgba(0, 0, 0, 0.1),0px 4px 4px -5.6px rgba(0, 0, 0, 0.4),0px 2px 4px -2.7px rgba(0, 0, 0, 0.15),0px 2px 6px -1px rgba(0, 0, 0, 0.1);
  --interactive-accent: rgb(165, 138, 111);
  --interactive-accent-hover: rgb(185, 151, 121);
  --interactive-accent-hsl: 31,23%,50%;
  --interactive-hover: color-mix(in hsl, rgb(252, 250, 248) 50%, rgb(242, 236, 227));
  --interactive-normal: rgb(242, 236, 227);
  --interface-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0;
  --italic-color: rgb(34, 114, 155);
  --italic-highlight-bg: rgba(42, 177, 192, 0.2);
  --italic-highlight-color: rgb(89, 62, 34);
  --kanban-drag-item-border: none;
  --kanban-drag-item-shadow: 0px 8.3px 22.8px -9px rgba(0, 0, 0, 0.19),0px 6.2px 10.1px -4.2px rgba(0, 0, 0, 0.22),0px 2.1px 6.8px -3.2px rgba(0, 0, 0, 0.29);
  --kanban-item-bg: rgb(252, 250, 248);
  --kanban-item-border: none;
  --kanban-item-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.09),inset 0px 1px 0px 0px rgba(255, 255, 255, 0.6),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.06),0px 2px 2px 0px rgba(0, 0, 0, 0.03);
  --kanban-lane-bg: color-mix(in srgb, rgb(242, 236, 227) 50%, rgb(248, 245, 241));
  --kanban-lane-border: 1px solid rgb(238, 231, 221);
  --kanban-lane-shadow: none;
  --kanban-new-item-bg: transparent;
  --kanban-new-item-bg-hover: rgb(248, 245, 241);
  --kanban-new-item-color: rgb(183, 157, 123);
  --kanban-new-item-color-hover: rgb(131, 107, 73);
  --kanban-new-item-shadow: none;
  --kanban-new-item-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12),0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  --kanban-title-count-bg: rgb(228, 215, 195);
  --kanban-title-count-color: rgb(101, 81, 52);
  --kanban-title-count-radius: 12px;
  --kanban-title-text-input-color: rgb(89, 62, 34);
  --kbd-background: rgb(238, 231, 221);
  --kbd-color: rgb(217, 116, 109);
  --kbd-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.03),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.06);
  --language-chbx-color: rgb(217, 122, 109);
  --law-chbx-color: rgb(174, 138, 91);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-ahref-color: rgb(223, 69, 58);
  --link-ahref-color-hover: rgb(217, 116, 109);
  --link-ahref-decoration-color: color-mix(in srgb, currentColor 22%, transparent);
  --link-ahref-decoration-color-hover: color-mix(in srgb, rgb(217, 116, 109) 22%, transparent);
  --link-color: rgb(215, 151, 25);
  --link-color-hover: rgb(236, 185, 54);
  --link-decoration-color: color-mix(in srgb, rgb(215, 151, 25) 22%, transparent);
  --link-decoration-color-hover: color-mix(in srgb, rgb(236, 185, 54) 22%, transparent);
  --link-decoration-opacity: 22%;
  --link-decoration-thickness: 1.5px;
  --link-external-color: rgb(50, 149, 98);
  --link-external-color-hover: rgb(62, 177, 116);
  --link-external-decoration-color: color-mix(in srgb, rgb(50, 149, 98) 22%, transparent);
  --link-external-decoration-color-hover: color-mix(in srgb, rgb(62, 177, 116) 22%, transparent);
  --link-opacity-active: 0.5;
  --link-underline-offset: 2px;
  --link-unresolved-color: rgb(183, 157, 123);
  --link-unresolved-color-hover: rgb(207, 182, 150);
  --link-unresolved-decoration-color: color-mix(in srgb, rgb(183, 157, 123) 22%, transparent);
  --link-unresolved-decoration-color-hover: color-mix(in srgb, rgb(207, 182, 150) 22%, transparent);
  --link-unresolved-opacity: 1;
  --link-weight: 450;
  --list-bullet-indent-reading: -1em;
  --list-indent-editing: 0.6em;
  --list-marker-color: rgb(183, 157, 123);
  --list-marker-color-collapsed: rgb(157, 128, 98);
  --list-marker-color-hover: rgb(131, 107, 73);
  --loading-line-bg-color: rgb(238, 231, 221);
  --loading-line-color: rgb(99, 162, 187);
  --loading-line-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  --location-chbox-color: rgb(191, 54, 54);
  --menu-background: rgb(238, 231, 221);
  --menu-border-color: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --menu-item-bg-active: rgb(235, 227, 214);
  --menu-item-bg-hover: rgba(255, 255, 255, 0.35);
  --menu-item-color-active: rgb(207, 182, 150);
  --menu-item-icon-color: rgb(183, 157, 123);
  --menu-item-icon-color-active: rgb(207, 182, 150);
  --menu-item-radius: 7px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),0px 3.4px 6.7px rgba(0, 0, 0, 0.042),0px 15px 30px rgba(0, 0, 0, 0.07);
  --metadata-background: color-mix(in srgb, rgb(248, 245, 241) 50%, rgb(242, 236, 227));
  --metadata-border-color: rgb(228, 215, 195);
  --metadata-border-radius: 8px;
  --metadata-border-width: 1px;
  --metadata-container-padding: 12px 12px;
  --metadata-divider-color: rgb(228, 215, 195);
  --metadata-divider-width: 0px;
  --metadata-input-background-active: rgba(255, 255, 255, 0.45);
  --metadata-input-font: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-shadow-active: inset 0px 0px 0px 1px rgb(228, 215, 195),0px 0px 0px 1px rgb(228, 215, 195);
  --metadata-input-shadow-hover: none;
  --metadata-input-text-color: rgb(101, 81, 52);
  --metadata-key-input-color: rgb(131, 107, 73);
  --metadata-key-input-color-active: rgb(101, 81, 52);
  --metadata-label-background-active: rgba(255, 255, 255, 0.45);
  --metadata-label-font: '??', "Inter", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(131, 107, 73);
  --metadata-label-text-color-hover: rgb(131, 107, 73);
  --metadata-properties-title-color: rgb(207, 182, 150);
  --metadata-properties-title-color-collapsed: rgb(207, 182, 150);
  --metadata-properties-title-color-hover: rgb(183, 157, 123);
  --metadata-property-background-active: rgba(255, 255, 255, 0.5);
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --metadata-property-radius: 7px;
  --metadata-tab-background: rgb(238, 231, 221);
  --modal-background: rgb(248, 245, 241);
  --modal-border-color: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --modal-close-button-size: 20px;
  --modal-radius: 16px;
  --monospace-font-feature: "calt" 1,"ss01" 1,"ss02" 1,"ss03" 1,"ss05" 1,"ss19" 1,"zero" 1;
  --nav-collapse-icon-color: rgb(207, 182, 150);
  --nav-collapse-icon-color-collapsed: rgb(183, 157, 123);
  --nav-file-padding-active: 4px 8px 6px 24px;
  --nav-file-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.09),inset 0px -2px 0px 2px rgba(0, 0, 0, 0.07),0px 2px 3px 0px rgba(0, 0, 0, 0.05);
  --nav-file-tag-bg: transparent;
  --nav-file-tag-color: rgb(157, 128, 98);
  --nav-folder-1-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent);
  --nav-folder-1-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-1-collapse-color: color-mix(in srgb, rgb(191, 63, 54) 50%, transparent);
  --nav-folder-1-color: rgb(191, 63, 54);
  --nav-folder-1-indent-color: color-mix(in srgb, rgb(191, 63, 54) 25%, transparent);
  --nav-folder-10-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent);
  --nav-folder-10-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-10-collapse-color: color-mix(in srgb, rgb(26, 122, 79) 50%, transparent);
  --nav-folder-10-color: rgb(26, 122, 79);
  --nav-folder-10-indent-color: color-mix(in srgb, rgb(26, 122, 79) 25%, transparent);
  --nav-folder-11-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent);
  --nav-folder-11-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-11-collapse-color: color-mix(in srgb, rgb(34, 114, 155) 50%, transparent);
  --nav-folder-11-color: rgb(34, 114, 155);
  --nav-folder-11-indent-color: color-mix(in srgb, rgb(34, 114, 155) 25%, transparent);
  --nav-folder-12-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent);
  --nav-folder-12-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-12-collapse-color: color-mix(in srgb, rgb(116, 69, 150) 50%, transparent);
  --nav-folder-12-color: rgb(116, 69, 150);
  --nav-folder-12-indent-color: color-mix(in srgb, rgb(116, 69, 150) 25%, transparent);
  --nav-folder-2-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent);
  --nav-folder-2-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-2-collapse-color: color-mix(in srgb, rgb(215, 92, 40) 50%, transparent);
  --nav-folder-2-color: rgb(215, 92, 40);
  --nav-folder-2-indent-color: color-mix(in srgb, rgb(215, 92, 40) 25%, transparent);
  --nav-folder-3-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent);
  --nav-folder-3-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-3-collapse-color: color-mix(in srgb, rgb(182, 122, 2) 50%, transparent);
  --nav-folder-3-color: rgb(182, 122, 2);
  --nav-folder-3-indent-color: color-mix(in srgb, rgb(182, 122, 2) 25%, transparent);
  --nav-folder-4-bg-color: color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent);
  --nav-folder-4-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(153, 190, 35, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-4-collapse-color: color-mix(in srgb, rgb(26, 122, 79) 50%, transparent);
  --nav-folder-4-color: rgb(26, 122, 79);
  --nav-folder-4-indent-color: color-mix(in srgb, rgb(26, 122, 79) 25%, transparent);
  --nav-folder-5-bg-color: color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent);
  --nav-folder-5-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(42, 177, 192, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-5-collapse-color: color-mix(in srgb, rgb(34, 114, 155) 50%, transparent);
  --nav-folder-5-color: rgb(34, 114, 155);
  --nav-folder-5-indent-color: color-mix(in srgb, rgb(34, 114, 155) 25%, transparent);
  --nav-folder-6-bg-color: color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent);
  --nav-folder-6-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(112, 122, 255, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-6-collapse-color: color-mix(in srgb, rgb(116, 69, 150) 50%, transparent);
  --nav-folder-6-color: rgb(116, 69, 150);
  --nav-folder-6-indent-color: color-mix(in srgb, rgb(116, 69, 150) 25%, transparent);
  --nav-folder-7-bg-color: color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent);
  --nav-folder-7-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(240, 81, 108, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-7-collapse-color: color-mix(in srgb, rgb(191, 63, 54) 50%, transparent);
  --nav-folder-7-color: rgb(191, 63, 54);
  --nav-folder-7-indent-color: color-mix(in srgb, rgb(191, 63, 54) 25%, transparent);
  --nav-folder-8-bg-color: color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent);
  --nav-folder-8-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 115, 0, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-8-collapse-color: color-mix(in srgb, rgb(215, 92, 40) 50%, transparent);
  --nav-folder-8-color: rgb(215, 92, 40);
  --nav-folder-8-indent-color: color-mix(in srgb, rgb(215, 92, 40) 25%, transparent);
  --nav-folder-9-bg-color: color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent);
  --nav-folder-9-bg-color-hover: color-mix(in srgb, color-mix(in srgb, rgba(255, 187, 0, 0.2) 60%, transparent) 70%, transparent);
  --nav-folder-9-collapse-color: color-mix(in srgb, rgb(182, 122, 2) 50%, transparent);
  --nav-folder-9-color: rgb(182, 122, 2);
  --nav-folder-9-indent-color: color-mix(in srgb, rgb(182, 122, 2) 25%, transparent);
  --nav-folder-bg-color: transparent;
  --nav-folder-bg-color-hover: rgba(255, 255, 255, 0.25);
  --nav-folder-collapse-color: rgb(207, 182, 150);
  --nav-folder-color: rgb(123, 98, 66);
  --nav-heading-color: rgb(131, 107, 73);
  --nav-heading-color-collapsed: rgb(131, 107, 73);
  --nav-heading-color-collapsed-hover: rgb(131, 107, 73);
  --nav-heading-color-hover: rgb(131, 107, 73);
  --nav-heading-weight: 550;
  --nav-heading-weight-hover: 550;
  --nav-indentation-guide-color: rgb(228, 215, 195);
  --nav-item-background-active: rgba(255, 255, 255, 0.25);
  --nav-item-background-hover: rgba(255, 255, 255, 0.25);
  --nav-item-background-selected: rgba(12, 93, 125, 0.5);
  --nav-item-background-selected-hover: rgba(12, 93, 125, 0.4);
  --nav-item-color: rgb(123, 98, 66);
  --nav-item-color-active: rgb(123, 98, 66);
  --nav-item-color-highlighted: rgb(185, 151, 121);
  --nav-item-color-hover: rgb(123, 98, 66);
  --nav-item-color-selected: rgb(248, 245, 241);
  --nav-item-padding: 5px 8px 5px 24px;
  --nav-item-parent-padding: 5px 8px 5px 24px;
  --nav-item-radius: 6px;
  --nav-item-shadow-active: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06);
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(183, 157, 123);
  --nav-tag-color-active: rgb(131, 107, 73);
  --nav-tag-color-hover: rgb(131, 107, 73);
  --nav-tag-weight: 650;
  --new-tab-btn-radius: 2em;
  --non-alternating-color: rgb(207, 182, 150);
  --non-alternating-color-hover-active: rgb(228, 215, 195);
  --normal-highlight-bg: rgba(255, 187, 0, 0.2);
  --normal-highlight-color: rgb(89, 62, 34);
  --note-chbx-color: rgb(196, 90, 74);
  --notice-color: rgb(252, 250, 248);
  --notice-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.12),0px 2px 9px -2.1px rgba(0, 0, 0, 0.38),0px 3px 17px -4.3px rgba(0, 0, 0, 0.12),0px 7px 30px -5.5px rgba(0, 0, 0, 0.09);
  --pcr-btn-shadow: inset 0px 0px 0px 1.5px rgba(0, 0, 0, 0.2);
  --pdf-background: rgb(248, 245, 241);
  --pdf-page-background: rgb(248, 245, 241);
  --pdf-sidebar-background: rgb(248, 245, 241);
  --pill-background: rgba(255, 255, 255, 0.4);
  --pill-background-hover: rgba(255, 255, 255, 0.4);
  --pill-border-color: color-mix(in srgb, rgb(228, 215, 195) 50%, transparent);
  --pill-border-color-hover: color-mix(in srgb, color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195)) 50%, transparent);
  --pill-color: rgb(101, 81, 52);
  --pill-color-hover: rgb(67, 46, 20);
  --pill-color-remove: rgb(207, 182, 150);
  --pill-color-remove-hover: rgb(207, 182, 150);
  --pill-tag-bg-1: rgba(255, 187, 0, 0.2);
  --pill-tag-bg-2: rgba(240, 81, 108, 0.2);
  --pill-tag-bg-3: rgba(42, 177, 192, 0.2);
  --pill-tag-color-1: rgb(182, 122, 2);
  --pill-tag-color-2: rgb(154, 34, 25);
  --pill-tag-color-3: rgb(10, 73, 118);
  --pill-tag-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
  --pill-tag-weight: 550;
  --pmr-cal-td-padding: 4px 4px 6px 4px;
  --pmr-cal-td-radius: 5px;
  --popup-bg-blur: 3px;
  --pro-chbx-color: rgb(74, 150, 111);
  --progress-background: rgb(238, 231, 221);
  --progress-bar-outline: rgba(0, 0, 0, 0.1);
  --progress-border-width: 1px;
  --progress-color-1: rgb(223, 69, 58);
  --progress-color-2: rgb(235, 125, 66);
  --progress-color-3: rgb(236, 185, 54);
  --progress-color-4: rgb(50, 149, 98);
  --progress-color-5: linear-gradient(45deg, rgb(217, 116, 109), rgb(231, 197, 111), rgb(99, 162, 187));
  --progress-gradient-1: rgb(217, 116, 109);
  --progress-gradient-2: rgb(231, 197, 111);
  --progress-gradient-3: rgb(99, 162, 187);
  --progress-height: 8px;
  --progress-value-outline: rgba(0, 0, 0, 0.18);
  --progress-value-radius: 8px;
  --progress-width: 220px;
  --prompt-background: rgb(248, 245, 241);
  --prompt-border-color: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --prompt-input-background: rgb(248, 245, 241);
  --prompt-instructions-background: color-mix(in hsl, rgb(248, 245, 241) 60%, rgb(238, 231, 221));
  --prompt-results-background: rgb(248, 245, 241);
  --prompt-separator-border: 1px solid rgb(238, 231, 221);
  --prompt-suggestion-background-selected: rgba(255, 255, 255, 0.35);
  --prompt-suggestion-color: rgb(157, 128, 98);
  --prompt-suggestion-color-selected: rgb(89, 62, 34);
  --prompt-suggestion-highlight-color: color-mix(in srgb, rgb(157, 128, 98) 70%, black);
  --prompt-suggestion-highlight-color-selected: rgb(89, 62, 34);
  --prompt-suggestion-shadow-selected: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08),0px 2px 6px 0px rgba(0, 0, 0, 0.03);
  --question-chbx-color: rgb(152, 99, 176);
  --question-chbx-icon-color: white;
  --quote-chbx-color: rgb(65, 130, 180);
  --quote-chbx-icon-color: white;
  --radius-xs: 2px;
  --raised-background: color-mix(in srgb, rgb(248, 245, 241) 65%, transparent) linear-gradient(rgb(248, 245, 241), color-mix(in srgb, rgb(248, 245, 241) 65%, transparent));
  --resched-chbx-color: rgb(132, 169, 168);
  --ribbon-background: rgb(238, 231, 221);
  --ribbon-background-collapsed: rgb(248, 245, 241);
  --ribbon-border-width: 1px;
  --ribbon-icon: 15px;
  --ribbon-icon-spacing: 4px;
  --ribbon-margin-bottom: 10px;
  --ribbon-radius: 12px;
  --ribbon-slideout-background: rgb(242, 236, 227);
  --ribbon-slideout-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.12),0px 5px 5px -5px rgba(0, 0, 0, 0.15);
  --sched-chbx-color: rgb(182, 174, 165);
  --scrollbar-active-thumb-bg: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --scrollbar-bg: transparent;
  --scrollbar-thumb-bg: rgb(228, 215, 195);
  --search-clear-button-color: rgb(183, 157, 123);
  --search-clear-button-color-hover: rgb(223, 69, 58);
  --search-clear-button-size: 12px;
  --search-icon-color: rgb(183, 157, 123);
  --search-icon-size: 14px;
  --search-result-background: rgb(242, 236, 227);
  --search-result-background-hover: color-mix(in srgb, rgb(252, 250, 248) 50%, rgb(248, 245, 241));
  --search-result-dest-file-bg: rgb(248, 245, 241);
  --search-result-dest-file-bg-hover: color-mix(in srgb, rgb(248, 245, 241) 50%, rgb(252, 250, 248));
  --search-result-dest-file-color: rgb(131, 107, 73);
  --search-result-dest-file-icon-color: rgb(207, 182, 150);
  --search-result-dest-file-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.05);
  --search-result-dest-file-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),inset 0px -2px 0px 0px rgba(0, 0, 0, 0.05),0px 2px 3px 0px rgba(0, 0, 0, 0.09);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(89, 62, 34);
  --setting-group-heading-weight: 650;
  --setting-items-background: rgb(242, 236, 227);
  --setting-items-border-color: rgb(228, 215, 195);
  --settings-nav-group-title-color: rgb(207, 182, 150);
  --settings-nav-item-active-color: rgb(252, 250, 248);
  --settings-nav-item-bg-hover: transparent;
  --settings-nav-item-padding: 7px 12px 7px 12px;
  --settings-nav-item-padding-active: 6px 12px 8px 20px;
  --settings-nav-item-padding-hover: 7px 12px 7px 20px;
  --settings-nav-item-radius: 7px;
  --settings-nav-item-text-color: rgb(123, 98, 66);
  --settings-nav-item-text-color-active: rgb(183, 157, 123);
  --settings-nav-item-text-color-hover: rgb(89, 62, 34);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.091),0px 6.3px 24.7px rgba(0, 0, 0, 0.132),0px 30px 90px rgba(0, 0, 0, 0.22);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),0px 3.4px 6.7px rgba(0, 0, 0, 0.042),0px 15px 30px rgba(0, 0, 0, 0.07);
  --sidebar-nav-icon: 15px;
  --sidebar-tab-icon: 15px;
  --slider-thumb-bg: rgb(252, 250, 248);
  --slider-thumb-border-color: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --slider-thumb-border-width: 0px;
  --slider-thumb-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0pc 1px 0px 1px rgb(255, 255, 255),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.09),0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  --slider-thumb-shadow-hover: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),inset 0pc 1px 0px 1px rgb(255, 255, 255),inset 0px -1px 0px 1px rgba(0, 0, 0, 0.09),0px 1px 2px 0px rgba(0, 0, 0, 0.1),0px 0px 0px 6px rgba(0, 0, 0, 0.05);
  --slider-track-background: rgb(228, 215, 195);
  --slider-track-height: 5px;
  --slider-track-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08),0px 0px 0px 1px rgba(255, 255, 255, 0.08);
  --star-chbx-color: rgb(246, 169, 14);
  --star-chbx-icon-color: white;
  --status-bar-background: rgb(238, 231, 221);
  --status-bar-border-color: rgb(228, 215, 195);
  --status-bar-floating-bg: rgb(242, 236, 227);
  --status-bar-floating-offset: 4px;
  --status-bar-floating-opacity: 0.5;
  --status-bar-floating-opacity-hover: 1;
  --status-bar-floating-shadow: 8px 7px 21px -4px rgba(0, 0, 0, 0.12),0px 5px 5px -5px rgba(0, 0, 0, 0.15);
  --status-bar-item-bg-hover: transparent;
  --status-bar-item-clickable-bg-active: transparent;
  --status-bar-item-clickable-color-active: rgb(207, 182, 150);
  --status-bar-item-color: rgb(183, 157, 123);
  --status-bar-item-color-hover: rgb(131, 107, 73);
  --status-bar-text-color: rgb(131, 107, 73);
  --strikethrough-color: rgb(183, 157, 123);
  --strikethrough-highlight-bg: rgba(255, 187, 0, 0.2);
  --strikethrough-highlight-color: rgb(183, 157, 123);
  --style-settings-container-bg: color-mix(in srgb, rgb(242, 236, 227) 50%, transparent);
  --suggestion-background: rgb(248, 245, 241);
  --swatch-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  --sync-avatar-color-1: rgb(205, 66, 66);
  --sync-avatar-color-2: rgb(213, 133, 52);
  --sync-avatar-color-3: rgb(222, 159, 13);
  --sync-avatar-color-4: rgb(79, 171, 119);
  --sync-avatar-color-5: rgb(76, 174, 170);
  --sync-avatar-color-6: rgb(48, 121, 176);
  --sync-avatar-color-7: rgb(125, 113, 193);
  --sync-avatar-color-8: rgb(199, 112, 125);
  --sync-icon-success: rgb(50, 149, 98);
  --sync-icon-success-active: rgb(207, 182, 150);
  --sync-icon-success-hover: rgb(62, 177, 116);
  --sync-icon-working: rgb(227, 152, 95);
  --sync-icon-working-active: rgb(207, 182, 150);
  --sync-icon-working-hover: rgb(235, 125, 66);
  --tab-active-bg: rgb(248, 245, 241);
  --tab-active-shadow: inset 0px 1px 0px 0px rgb(255, 255, 255),inset 0px -2px 0px 1px rgba(0, 0, 0, 0.09),0px 1px 2px -0.1px rgba(0, 0, 0, 0.15);
  --tab-background-active: rgb(248, 245, 241);
  --tab-bg: transparent;
  --tab-container-background: rgb(238, 231, 221);
  --tab-curves-display: none;
  --tab-divider-color: color-mix(in hsl, rgb(207, 182, 150) 60%, rgb(228, 215, 195));
  --tab-header-container-border-bottom: none;
  --tab-header-container-inner-margin: default;
  --tab-header-container-inner-padding: 2px;
  --tab-header-container-padding: 0 12px 4px 12px;
  --tab-header-container-transition: padding-bottom none;
  --tab-outline-color: transparent;
  --tab-stacked-header-width: 46px;
  --tab-stacked-shadow: -2.9px 0 10.5px -6.2px rgba(0, 0, 0, 0.08),-6.2px 0 3.6px -5.2px rgba(0, 0, 0, 0.04),-9.4px 0 8.4px -4.1px rgba(0, 0, 0, 0.06);
  --tab-status-radius: 4px;
  --tab-switcher-background: rgb(238, 231, 221);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(238, 231, 221), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(157, 128, 98);
  --tab-text-color: rgb(183, 157, 123);
  --tab-text-color-active: rgb(131, 107, 73);
  --tab-text-color-focused: rgb(131, 107, 73);
  --tab-text-color-focused-active: rgb(131, 107, 73);
  --tab-text-color-focused-active-current: rgb(89, 62, 34);
  --tab-text-color-focused-highlighted: rgb(157, 128, 98);
  --tab-z-index: 1;
  --table-add-button-border-color: rgb(228, 215, 195);
  --table-background: rgb(252, 250, 248);
  --table-border-color: rgb(228, 215, 195);
  --table-column-alt-background: rgb(242, 236, 227);
  --table-drag-handle-background-active: rgb(165, 138, 111);
  --table-drag-handle-color: rgb(183, 157, 123);
  --table-drag-handle-color-active: rgb(252, 250, 248);
  --table-header-background: rgb(242, 236, 227);
  --table-header-background-hover: rgb(242, 236, 227);
  --table-header-border-color: rgb(228, 215, 195);
  --table-header-color: rgb(89, 62, 34);
  --table-header-weight: 650;
  --table-row-alt-background: rgb(252, 250, 248);
  --table-row-alt-background-hover: rgb(252, 250, 248);
  --table-row-background-hover: rgb(252, 250, 248);
  --table-selection: rgba(157, 128, 98, 0.1);
  --table-selection-border-color: rgb(165, 138, 111);
  --tag-background: rgba(255, 255, 255, 0.5);
  --tag-background-hover: rgba(255, 255, 255, 0.8);
  --tag-border-color: rgba(0, 0, 0, 0.15);
  --tag-border-color-hover: rgba(0, 0, 0, 0.25);
  --tag-border-width: 1px;
  --tag-color: rgb(34, 114, 155);
  --tag-color-hover: rgb(42, 144, 203);
  --tag-padding-x: 0.6em;
  --tag-padding-y: 0.15em;
  --tag-radius: 1em;
  --tag-shadow: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.1);
  --tag-shadow-active: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.1);
  --tag-shadow-hover: inset 0px -0.1em 0px 0px rgba(0, 0, 0, 0.1),0px 0px 0px 3px rgba(0, 0, 0, 0.03);
  --telephone-chbx-color: rgb(64, 176, 116);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(157, 128, 98);
  --text-accent-hover: rgb(185, 151, 121);
  --text-error: rgb(191, 63, 54);
  --text-faint: rgb(183, 157, 123);
  --text-font-feature: "calt" 1,"case" 0,"ccmp" 1,"ss03" 1,"cv01" 1,"cv05" 1,"cv06" 1,"cv08" 0,"cv11" 1,"cv12" 0,"cv13" 0;
  --text-highlight-bg: rgba(255, 187, 0, 0.2);
  --text-highlight-bg-rgb: 248,197,46;
  --text-input-bg-active: color-mix(in hsl, rgb(242, 236, 227) 40%, rgb(252, 250, 248));
  --text-input-border-color: rgb(228, 215, 195);
  --text-input-color: rgb(89, 62, 34);
  --text-input-color-focused: rgb(89, 62, 34);
  --text-input-shadow-active: inset 0px 1px 0px 0px rgb(255, 255, 255),inset 0px -1px 0px 0px rgba(0, 0, 0, 0.04),0px 1px 6px 0px rgba(0, 0, 0, 0.07);
  --text-muted: rgb(131, 107, 73);
  --text-normal: rgb(89, 62, 34);
  --text-on-accent: rgb(252, 250, 248);
  --text-on-accent-inverted: rgb(67, 46, 20);
  --text-selection: rgba(207, 182, 150, 0.15);
  --text-selection-theme-bg: color-mix(in srgb, rgb(207, 182, 150) 30%, transparent);
  --text-selection-theme-text-color: color-mix(in srgb, currentColor 70%, black);
  --text-success: rgb(50, 149, 98);
  --text-warning: rgb(215, 92, 40);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(238, 231, 221);
  --titlebar-background-focused: rgb(238, 231, 221);
  --titlebar-border-color: rgb(228, 215, 195);
  --titlebar-text-color: rgb(228, 215, 195);
  --titlebar-text-color-focused: rgb(207, 182, 150);
  --titlebar-text-weight: 450;
  --toggle-bg: color-mix(in hsl, rgb(228, 215, 195) 80%, rgb(207, 182, 150));
  --toggle-bg-enabled: rgb(50, 149, 98);
  --toggle-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.09),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06),inset 0 0 1px rgba(0, 0, 0, 0.28);
  --toggle-shadow-focus: inset 0 6px 20px rgba(0, 0, 0, 0.18),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06),inset 0 0 1px rgba(0, 0, 0, 0.32),0px 0px 0px 5px rgba(0, 0, 0, 0.05);
  --toggle-shadow-hover: inset 0 6px 20px rgba(0, 0, 0, 0.18),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.06),inset 0 0 1px rgba(0, 0, 0, 0.32);
  --toggle-thumb-color: rgb(252, 250, 248);
  --toggle-thumb-shadow: inset 0px 1px 0px 1px rgb(255, 255, 255),inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15),0 2px 2px rgba(0, 0, 0, 0.2);
  --tooltip-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.12),0px 2px 4px -1.4px rgba(0, 0, 0, 0.3),0px 3px 10px -1.7px rgba(0, 0, 0, 0.14);
  --traffic-lights-offset-x: 46px;
  --traffic-lights-offset-y: 46px;
  --underline-color: rgb(89, 62, 34);
  --underline-decoration-color: color-mix(in srgb, currentColor 22%, transparent);
  --underline-decoration-opacity: 22%;
  --up-chbx-color: rgb(79, 171, 119);
  --vault-name-background: rgb(242, 236, 227);
  --vault-name-border: 1px solid rgb(228, 215, 195);
  --vault-name-border-width: 1px;
  --vault-name-color: rgb(131, 107, 73);
  --vault-name-color-hover: rgb(101, 81, 52);
  --vault-profile-color: rgb(131, 107, 73);
  --vault-profile-color-hover: rgb(131, 107, 73);
  --vault-profile-font-weight: 650;
  --yaml-atom-color: rgb(99, 162, 187);
  --yaml-base-color: rgb(217, 116, 109);
  --yaml-def-meta-color: rgb(207, 182, 150);
  --yaml-keyword-color: rgb(215, 151, 25);
  --yaml-number-color: rgb(217, 116, 109);
  --yaml-string-color: rgb(215, 151, 25);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 231, 221);
  color: rgb(89, 62, 34);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(238, 231, 221);
  color: rgb(89, 62, 34);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(238, 231, 221);
  color: rgb(89, 62, 34);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 231, 221);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(89, 62, 34);
}

body div#quartz-root {
  background-color: rgb(248, 245, 241);
  color: rgb(89, 62, 34);
}`,
    typography: `body .page article p > b, b {
  color: rgb(191, 63, 54);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(191, 63, 54) none 0px;
  text-decoration: rgb(191, 63, 54);
  text-decoration-color: rgb(191, 63, 54);
}

body .page article p > em, em {
  color: rgb(34, 114, 155);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(34, 114, 155) none 0px;
  text-decoration: rgb(34, 114, 155);
  text-decoration-color: rgb(34, 114, 155);
}

body .page article p > i, i {
  color: rgb(34, 114, 155);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(34, 114, 155) none 0px;
  text-decoration: rgb(34, 114, 155);
  text-decoration-color: rgb(34, 114, 155);
}

body .page article p > strong, strong {
  color: rgb(191, 63, 54);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(191, 63, 54) none 0px;
  text-decoration: rgb(191, 63, 54);
  text-decoration-color: rgb(191, 63, 54);
}

body .text-highlight {
  background-color: rgba(255, 187, 0, 0.2);
  color: rgb(89, 62, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(89, 62, 34) none 0px;
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body del {
  color: rgb(89, 62, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(89, 62, 34) none 0px;
  text-decoration: line-through rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body p {
  color: rgb(131, 107, 73);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(131, 107, 73) none 0px;
  text-decoration: rgb(131, 107, 73);
  text-decoration-color: rgb(131, 107, 73);
}`,
    links: `body a.external, footer a {
  color: rgb(50, 149, 98);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(50, 149, 98) none 0px;
  text-decoration: underline 1.5px color(srgb 0.195 0.585 0.3835 / 0.22);
  text-decoration-color: color(srgb 0.195 0.585 0.3835 / 0.22);
  text-decoration-thickness: 1.5px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(215, 151, 25);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(215, 151, 25) none 0px;
  text-decoration: underline 1.5px color(srgb 0.8413 0.593767 0.0987 / 0.22);
  text-decoration-color: color(srgb 0.8413 0.593767 0.0987 / 0.22);
  text-decoration-thickness: 1.5px;
}

body a.internal.broken {
  color: rgb(183, 157, 123);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(183, 157, 123) none 0px;
  text-decoration: underline 1.5px color(srgb 0.716 0.615467 0.484 / 0.22);
  text-decoration-color: color(srgb 0.716 0.615467 0.484 / 0.22);
  text-decoration-thickness: 1.5px;
}`,
    lists: `body dd {
  color: rgb(89, 62, 34);
}

body dt {
  color: rgb(89, 62, 34);
  font-weight: 450;
}

body ol > li {
  color: rgb(89, 62, 34);
}

body ol.overflow {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

body ul > li {
  color: rgb(89, 62, 34);
}

body ul.overflow {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(183, 157, 123);
  text-decoration: rgb(183, 157, 123);
}

body blockquote {
  background-color: rgb(252, 250, 248);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

body table {
  color: rgb(89, 62, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 594px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(252, 250, 248);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(252, 250, 248);
}

body td {
  border-bottom-color: rgb(228, 215, 195);
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  color: rgb(89, 62, 34);
  font-weight: 450;
}

body th {
  border-bottom-color: rgb(228, 215, 195);
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  color: rgb(89, 62, 34);
  font-weight: 650;
}

body tr {
  background-color: rgb(242, 236, 227);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(222, 159, 13);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(222, 159, 13);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(222, 159, 13);
  border-left-color: rgb(222, 159, 13);
  border-right-color: rgb(222, 159, 13);
  border-top-color: rgb(222, 159, 13);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(89, 62, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figcaption {
  color: rgb(89, 62, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

body img {
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

body video {
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
    embeds: `body .file-embed {
  background-color: rgb(242, 236, 227);
  border-bottom-color: rgb(131, 107, 73);
  border-left-color: rgb(131, 107, 73);
  border-right-color: rgb(131, 107, 73);
  border-top-color: rgb(131, 107, 73);
}

body .footnotes {
  border-top-color: rgb(89, 62, 34);
  color: rgb(89, 62, 34);
}

body .transclude {
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

body .transclude-inner {
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
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(183, 157, 123);
  text-decoration: line-through rgb(183, 157, 123);
  text-decoration-color: rgb(183, 157, 123);
}

body input[type=checkbox] {
  border-bottom-color: rgb(228, 215, 195);
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
}

body li.task-list-item[data-task='!'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='*'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='-'] {
  color: rgb(183, 157, 123);
  text-decoration: line-through rgb(183, 157, 123);
  text-decoration-color: rgb(183, 157, 123);
}

body li.task-list-item[data-task='/'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='>'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='?'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='I'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='S'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='b'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='c'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='d'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='f'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='i'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='k'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='l'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='p'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='u'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body li.task-list-item[data-task='w'] {
  color: rgb(89, 62, 34);
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}`,
    callouts: `body .callout .callout-title {
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

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 650;
}

body .callout > .callout-content {
  background-color: color(srgb 0.962 0.943667 0.918);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgb(248, 245, 241);
  border-bottom-color: color(srgb 0.844752 0.768077 0.659248);
  border-left-color: color(srgb 0.844752 0.768077 0.659248);
  border-right-color: color(srgb 0.844752 0.768077 0.659248);
  border-top-color: color(srgb 0.844752 0.768077 0.659248);
  box-shadow: rgba(0, 0, 0, 0.09) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.133) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.22) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  background-color: rgb(248, 245, 241);
  color: rgb(89, 62, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  outline: rgb(89, 62, 34) none 0px;
  text-decoration: rgb(89, 62, 34);
  text-decoration-color: rgb(89, 62, 34);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(89, 62, 34);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(89, 62, 34);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(89, 62, 34);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.35);
  color: rgb(89, 62, 34);
  font-weight: 450;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.844752 0.768077 0.659248);
  border-left-color: color(srgb 0.844752 0.768077 0.659248);
  border-right-color: color(srgb 0.844752 0.768077 0.659248);
  border-top-color: color(srgb 0.844752 0.768077 0.659248);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(238, 231, 221);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(89, 62, 34);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(182, 122, 2);
}

body h1 {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(67, 46, 20);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(248, 245, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 241);
}

body ::-webkit-scrollbar-corner {
  background: rgb(248, 245, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 241);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(248, 245, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 241);
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 245, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 241);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 245, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 241);
}

body ::-webkit-scrollbar-track {
  background: rgb(248, 245, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 241);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(123, 98, 66);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  text-decoration: rgb(123, 98, 66);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(123, 98, 66);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  text-decoration: rgb(123, 98, 66);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(123, 98, 66);
  cursor: pointer;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
  text-decoration: rgb(123, 98, 66);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    toc: `body li.depth-0 {
  font-weight: 450;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(228, 215, 195);
  border-left-color: rgb(228, 215, 195);
  border-right-color: rgb(228, 215, 195);
  border-top-color: rgb(228, 215, 195);
  color: rgb(131, 107, 73);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(183, 157, 123);
  text-decoration: rgb(183, 157, 123);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(89, 62, 34);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  color: rgb(89, 62, 34);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(123, 98, 66);
  text-decoration: rgb(123, 98, 66);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(123, 98, 66);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

body li.section-li > .section .meta {
  color: rgb(123, 98, 66);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(123, 98, 66);
  text-decoration: rgb(123, 98, 66);
}

body ul.section-ul {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(183, 157, 123);
  stroke: rgb(183, 157, 123);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(157, 128, 98);
  border-left-color: rgb(157, 128, 98);
  border-right-color: rgb(157, 128, 98);
  border-top-color: rgb(157, 128, 98);
  color: rgb(157, 128, 98);
}

body .breadcrumb-element p {
  color: rgb(228, 215, 195);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
  color: rgb(89, 62, 34);
}

body .metadata {
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

body .metadata-properties {
  border-bottom-color: rgb(131, 107, 73);
  border-left-color: rgb(131, 107, 73);
  border-right-color: rgb(131, 107, 73);
  border-top-color: rgb(131, 107, 73);
  color: rgb(131, 107, 73);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(238, 231, 221);
}

body .page-header h2.page-title {
  color: rgb(101, 81, 52);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(89, 62, 34);
  text-decoration: underline dotted rgb(89, 62, 34);
}

body details {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

body input[type=text] {
  border-bottom-color: rgb(131, 107, 73);
  border-left-color: rgb(131, 107, 73);
  border-right-color: rgb(131, 107, 73);
  border-top-color: rgb(131, 107, 73);
  color: rgb(131, 107, 73);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(89, 62, 34);
  border-left-color: rgb(89, 62, 34);
  border-right-color: rgb(89, 62, 34);
  border-top-color: rgb(89, 62, 34);
}

body sub {
  color: rgb(89, 62, 34);
}

body summary {
  color: rgb(89, 62, 34);
  font-weight: 450;
}

body sup {
  color: rgb(89, 62, 34);
}`,
  },
};
