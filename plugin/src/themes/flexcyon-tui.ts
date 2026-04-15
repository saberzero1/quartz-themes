import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "flexcyon.tui",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 105.5 !important;
  --accent-l: 59.5% !important;
  --accent-s: 77.5% !important;
  --background-modifier-active-hover: #24262C !important;
  --background-modifier-border: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --background-modifier-border-focus: color-mix(
    in oklch,
    #24262C,
    #4D566B
  ) !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-error: rgb(
    rgb(192, 58, 71),
    0.85
  ) !important;
  --background-modifier-error-hover: #C03A47 !important;
  --background-modifier-error-rgb: rgb(192, 58, 71) !important;
  --background-modifier-form-field: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --background-modifier-form-field-hover: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --background-modifier-hover: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --background-modifier-message: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --background-modifier-success: #A1C05C !important;
  --background-modifier-success-rgb: rgb(161, 192, 92) !important;
  --background-primary: #191D28 !important;
  --background-primary-alt: #24262C !important;
  --background-secondary: #14161C !important;
  --background-secondary-alt: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --bases-border-r: 16px !important;
  --bases-cards-background: #191D28 !important;
  --bases-cards-cover-background: #14161C !important;
  --bases-cards-group-padding: 16px !important;
  --bases-cards-radius: 4px !important;
  --bases-cards-shadow: 0 0 0 1px color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-embed-border-color: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --bases-embed-border-radius: 2px !important;
  --bases-embed-padding: 4px !important;
  --bases-group-heading-property-color: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --bases-group-heading-property-size: 12.94424px !important;
  --bases-no-img-str: 'No image path could be found for this file' !important;
  --bases-table-border-color: #6F768566 !important;
  --bases-table-cell-background-active: #191D28 !important;
  --bases-table-cell-background-disabled: #24262C !important;
  --bases-table-cell-background-selected: hsla(105.5, 77.5%, 59.5%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(
    in oklch,
    #24262C,
    #4D566B
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ) !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-group-background: #24262C !important;
  --bases-table-header-background: #191D28 !important;
  --bases-table-header-background-hover: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --bases-table-header-color: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --bases-table-row-background-hover: #191D28 !important;
  --bases-table-summary-background: #191D28 !important;
  --bases-table-summary-background-hover: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --blockquote-border-color: color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ) !important;
  --blur-background: color-mix(in srgb, color-mix(
    in oklch,
    #14161C,
    #191D28
  ) 65%, transparent) linear-gradient(color-mix(
    in oklch,
    #14161C,
    #191D28
  ), color-mix(in srgb, color-mix(
    in oklch,
    #14161C,
    #191D28
  ) 65%, transparent)) !important;
  --bold-color: #C03A47 !important;
  --button-radius: 0px !important;
  --callout-bug: rgb(192, 58, 71);
  --callout-default: 90, 143, 205;
  --callout-error: rgb(192, 58, 71);
  --callout-example: rgb(164, 97, 200);
  --callout-fail: rgb(192, 58, 71);
  --callout-important: rgb(60, 185, 194);
  --callout-info: 90, 143, 205;
  --callout-padding: 12px
    24px;
  --callout-question: rgb(204, 132, 73);
  --callout-radius: 2px;
  --callout-success: rgb(161, 192, 92);
  --callout-summary: rgb(60, 185, 194);
  --callout-tip: rgb(60, 185, 194);
  --callout-todo: 90, 143, 205;
  --callout-warning: rgb(204, 132, 73);
  --canvas-background: #191D28 !important;
  --canvas-card-label-color: #6F768599 !important;
  --canvas-color-1: rgb(192, 58, 71) !important;
  --canvas-color-2: rgb(204, 132, 73) !important;
  --canvas-color-3: rgb(194, 158, 66) !important;
  --canvas-color-4: rgb(161, 192, 92) !important;
  --canvas-color-5: rgb(60, 185, 194) !important;
  --canvas-color-6: rgb(164, 97, 200) !important;
  --canvas-controls-radius: 2px !important;
  --canvas-dot-pattern: color-mix(
    in oklch,
    #24262C,
    #4D566B
  ) !important;
  --caret-color: #D3D5D3 !important;
  --checkbox-border-color: #5a8fcd !important;
  --checkbox-border-color-hover: color-mix(
    in oklch shorter hue,
    #A461C8,
    #898C93
  ) !important;
  --checkbox-color: #A461C8 !important;
  --checkbox-color-hover: color-mix(
    in oklch shorter hue,
    #A461C8,
    #898C93
  ) !important;
  --checkbox-marker-color: #191D28 !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --clickable-icon-radius: 0 !important;
  --cm-font-size: 15.37127px !important;
  --cm-panel-bg: #14161C !important;
  --code-background: #14161C !important;
  --code-border-color: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --code-bracket-background: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --code-comment: #6F768599 !important;
  --code-function: #C29E42 !important;
  --code-important: #C03A47 !important;
  --code-keyword: #3CB9C2 !important;
  --code-normal: #D3D5D3 !important;
  --code-operator: #5a8fcd !important;
  --code-property: #3CB9C2 !important;
  --code-punctuation: rgb(rgb(192, 58, 71), 0.55) !important;
  --code-radius: 2px !important;
  --code-string: #A1C05C !important;
  --code-tag: #898C93 !important;
  --code-value: #C29E42 !important;
  --collapse-icon-color: #6F768599 !important;
  --collapse-icon-color-collapsed: hsl(
    102.5 79.05%
      68.425%
  ) !important;
  --color-accent: hsl(105.5, 77.5%, 59.5%) !important;
  --color-accent-1: hsl(
    102.5 79.05%
      68.425%
  ) !important;
  --color-accent-2: hsl(
    85.5 65.875%
      65.45% / 87.5%
  ) !important;
  --color-accent-hsl: 105.5, 77.5%, 59.5% !important;
  --color-base-00: #14161C !important;
  --color-base-05: color-mix(
    in oklch,
    #14161C,
    #191D28
  ) !important;
  --color-base-10: #191D28 !important;
  --color-base-100: #D3D5D3 !important;
  --color-base-20: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --color-base-25: #24262C !important;
  --color-base-30: color-mix(
    in oklch,
    #24262C,
    #4D566B
  ) !important;
  --color-base-35: #4D566B !important;
  --color-base-40: color-mix(
    in oklch,
    #4D566B,
    #6F7685
  ) !important;
  --color-base-50: #6F7685 !important;
  --color-base-60: #898C93 !important;
  --color-base-70: color-mix(
    in oklch,
    #D3D5D3,
    #898C93
  ) !important;
  --color-blue: #5a8fcd !important;
  --color-blue-cyan-mix: color-mix(
    in oklch,
    #5a8fcd,
    #3CB9C2
  ) !important;
  --color-blue-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5a8fcd, #3CB9C2)
      20%,
    transparent
  ) !important;
  --color-blue-green-mix: color-mix(
    in oklch,
    #5a8fcd,
    #A1C05C
  ) !important;
  --color-blue-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5a8fcd, #A1C05C)
      20%,
    transparent
  ) !important;
  --color-blue-orange-mix: color-mix(
    in oklch,
    #5a8fcd,
    #CC8449
  ) !important;
  --color-blue-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5a8fcd, #CC8449)
      20%,
    transparent
  ) !important;
  --color-blue-pink-mix: color-mix(
    in oklch,
    #5a8fcd,
    #D458A3
  ) !important;
  --color-blue-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5a8fcd, #D458A3)
      20%,
    transparent
  ) !important;
  --color-blue-purple-mix: color-mix(
    in oklch,
    #5a8fcd,
    #A461C8
  ) !important;
  --color-blue-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5a8fcd, #A461C8)
      20%,
    transparent
  ) !important;
  --color-blue-red-mix: color-mix(
    in oklch,
    #5a8fcd,
    #C03A47
  ) !important;
  --color-blue-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5a8fcd, #C03A47)
      20%,
    transparent
  ) !important;
  --color-blue-rgb: 90, 143, 205 !important;
  --color-blue-yellow-mix: color-mix(
    in oklch,
    #5a8fcd,
    #C29E42
  ) !important;
  --color-blue-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5a8fcd, #C29E42)
      20%,
    transparent
  ) !important;
  --color-cyan: #3CB9C2 !important;
  --color-cyan-blue-mix: color-mix(
    in oklch,
    #3CB9C2,
    #5a8fcd
  ) !important;
  --color-cyan-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3CB9C2, #5a8fcd)
      20%,
    transparent
  ) !important;
  --color-cyan-green-mix: color-mix(
    in oklch,
    #3CB9C2,
    #A1C05C
  ) !important;
  --color-cyan-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3CB9C2, #A1C05C)
      20%,
    transparent
  ) !important;
  --color-cyan-orange-mix: color-mix(
    in oklch,
    #3CB9C2,
    #CC8449
  ) !important;
  --color-cyan-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3CB9C2, #CC8449)
      20%,
    transparent
  ) !important;
  --color-cyan-pink-mix: color-mix(
    in oklch,
    #3CB9C2,
    #D458A3
  ) !important;
  --color-cyan-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3CB9C2, #D458A3)
      20%,
    transparent
  ) !important;
  --color-cyan-purple-mix: color-mix(
    in oklch,
    #3CB9C2,
    #A461C8
  ) !important;
  --color-cyan-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3CB9C2, #A461C8)
      20%,
    transparent
  ) !important;
  --color-cyan-red-mix: color-mix(
    in oklch,
    #3CB9C2,
    #C03A47
  ) !important;
  --color-cyan-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3CB9C2, #C03A47)
      20%,
    transparent
  ) !important;
  --color-cyan-rgb: rgb(60, 185, 194) !important;
  --color-cyan-yellow-mix: color-mix(
    in oklch,
    #3CB9C2,
    #C29E42
  ) !important;
  --color-cyan-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3CB9C2, #C29E42)
      20%,
    transparent
  ) !important;
  --color-green: #A1C05C !important;
  --color-green-blue-mix: color-mix(
    in oklch,
    #A1C05C,
    #5a8fcd
  ) !important;
  --color-green-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A1C05C, #5a8fcd)
      20%,
    transparent
  ) !important;
  --color-green-cyan-mix: color-mix(
    in oklch,
    #A1C05C,
    #3CB9C2
  ) !important;
  --color-green-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A1C05C, #3CB9C2)
      20%,
    transparent
  ) !important;
  --color-green-orange-mix: color-mix(
    in oklch,
    #A1C05C,
    #CC8449
  ) !important;
  --color-green-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A1C05C, #CC8449)
      20%,
    transparent
  ) !important;
  --color-green-pink-mix: color-mix(
    in oklch,
    #A1C05C,
    #D458A3
  ) !important;
  --color-green-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A1C05C, #D458A3)
      20%,
    transparent
  ) !important;
  --color-green-purple-mix: color-mix(
    in oklch,
    #A1C05C,
    #A461C8
  ) !important;
  --color-green-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A1C05C, #A461C8)
      20%,
    transparent
  ) !important;
  --color-green-red-mix: color-mix(
    in oklch,
    #A1C05C,
    #C03A47
  ) !important;
  --color-green-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A1C05C, #C03A47)
      20%,
    transparent
  ) !important;
  --color-green-rgb: rgb(161, 192, 92) !important;
  --color-green-yellow-mix: color-mix(
    in oklch,
    #A1C05C,
    #C29E42
  ) !important;
  --color-green-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A1C05C, #C29E42)
      20%,
    transparent
  ) !important;
  --color-orange: #CC8449 !important;
  --color-orange-blue-mix: color-mix(
    in oklch,
    #CC8449,
    #5a8fcd
  ) !important;
  --color-orange-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #CC8449, #5a8fcd)
      20%,
    transparent
  ) !important;
  --color-orange-cyan-mix: color-mix(
    in oklch,
    #CC8449,
    #3CB9C2
  ) !important;
  --color-orange-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #CC8449, #3CB9C2)
      20%,
    transparent
  ) !important;
  --color-orange-green-mix: color-mix(
    in oklch,
    #CC8449,
    #A1C05C
  ) !important;
  --color-orange-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #CC8449, #A1C05C)
      20%,
    transparent
  ) !important;
  --color-orange-pink-mix: color-mix(
    in oklch,
    #CC8449,
    #D458A3
  ) !important;
  --color-orange-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #CC8449, #D458A3)
      20%,
    transparent
  ) !important;
  --color-orange-purple-mix: color-mix(
    in oklch,
    #CC8449,
    #A461C8
  ) !important;
  --color-orange-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #CC8449, #A461C8)
      20%,
    transparent
  ) !important;
  --color-orange-red-mix: color-mix(
    in oklch,
    #CC8449,
    #C03A47
  ) !important;
  --color-orange-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #CC8449, #C03A47)
      20%,
    transparent
  ) !important;
  --color-orange-rgb: rgb(204, 132, 73) !important;
  --color-orange-yellow-mix: color-mix(
    in oklch,
    #CC8449,
    #C29E42
  ) !important;
  --color-orange-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #CC8449, #C29E42)
      20%,
    transparent
  ) !important;
  --color-pink: #D458A3 !important;
  --color-pink-blue-mix: color-mix(
    in oklch,
    #D458A3,
    #5a8fcd
  ) !important;
  --color-pink-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #D458A3, #5a8fcd)
      20%,
    transparent
  ) !important;
  --color-pink-cyan-mix: color-mix(
    in oklch,
    #D458A3,
    #3CB9C2
  ) !important;
  --color-pink-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #D458A3, #3CB9C2)
      20%,
    transparent
  ) !important;
  --color-pink-green-mix: color-mix(
    in oklch,
    #D458A3,
    #A1C05C
  ) !important;
  --color-pink-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #D458A3, #A1C05C)
      20%,
    transparent
  ) !important;
  --color-pink-orange-mix: color-mix(
    in oklch,
    #D458A3,
    #CC8449
  ) !important;
  --color-pink-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #D458A3, #CC8449)
      20%,
    transparent
  ) !important;
  --color-pink-purple-mix: color-mix(
    in oklch,
    #D458A3,
    #A461C8
  ) !important;
  --color-pink-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #D458A3, #A461C8)
      20%,
    transparent
  ) !important;
  --color-pink-red-mix: color-mix(
    in oklch,
    #D458A3,
    #C03A47
  ) !important;
  --color-pink-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #D458A3, #C03A47)
      20%,
    transparent
  ) !important;
  --color-pink-rgb: rgb(212, 88, 163) !important;
  --color-pink-yellow-mix: color-mix(
    in oklch,
    #D458A3,
    #C29E42
  ) !important;
  --color-pink-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #D458A3, #C29E42)
      20%,
    transparent
  ) !important;
  --color-purple: #A461C8 !important;
  --color-purple-blue-mix: color-mix(
    in oklch,
    #A461C8,
    #5a8fcd
  ) !important;
  --color-purple-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A461C8, #5a8fcd)
      20%,
    transparent
  ) !important;
  --color-purple-cyan-mix: color-mix(
    in oklch,
    #A461C8,
    #3CB9C2
  ) !important;
  --color-purple-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A461C8, #3CB9C2)
      20%,
    transparent
  ) !important;
  --color-purple-green-mix: color-mix(
    in oklch,
    #A461C8,
    #A1C05C
  ) !important;
  --color-purple-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A461C8, #A1C05C)
      20%,
    transparent
  ) !important;
  --color-purple-orange-mix: color-mix(
    in oklch,
    #A461C8,
    #CC8449
  ) !important;
  --color-purple-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A461C8, #CC8449)
      20%,
    transparent
  ) !important;
  --color-purple-pink-mix: color-mix(
    in oklch,
    #A461C8,
    #D458A3
  ) !important;
  --color-purple-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A461C8, #D458A3)
      20%,
    transparent
  ) !important;
  --color-purple-red-mix: color-mix(
    in oklch,
    #A461C8,
    #C03A47
  ) !important;
  --color-purple-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A461C8, #C03A47)
      20%,
    transparent
  ) !important;
  --color-purple-rgb: rgb(164, 97, 200) !important;
  --color-purple-yellow-mix: color-mix(
    in oklch,
    #A461C8,
    #C29E42
  ) !important;
  --color-purple-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #A461C8, #C29E42)
      20%,
    transparent
  ) !important;
  --color-red: #C03A47 !important;
  --color-red-blue-mix: color-mix(
    in oklch,
    #C03A47,
    #5a8fcd
  ) !important;
  --color-red-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C03A47, #5a8fcd)
      20%,
    transparent
  ) !important;
  --color-red-cyan-mix: color-mix(
    in oklch,
    #C03A47,
    #3CB9C2
  ) !important;
  --color-red-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C03A47, #3CB9C2)
      20%,
    transparent
  ) !important;
  --color-red-green-mix: color-mix(
    in oklch,
    #C03A47,
    #A1C05C
  ) !important;
  --color-red-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C03A47, #A1C05C)
      20%,
    transparent
  ) !important;
  --color-red-orange-mix: color-mix(
    in oklch,
    #C03A47,
    #CC8449
  ) !important;
  --color-red-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C03A47, #CC8449)
      20%,
    transparent
  ) !important;
  --color-red-pink-mix: color-mix(
    in oklch,
    #C03A47,
    #D458A3
  ) !important;
  --color-red-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C03A47, #D458A3)
      20%,
    transparent
  ) !important;
  --color-red-purple-mix: color-mix(
    in oklch,
    #C03A47,
    #A461C8
  ) !important;
  --color-red-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C03A47, #A461C8)
      20%,
    transparent
  ) !important;
  --color-red-rgb: rgb(192, 58, 71) !important;
  --color-red-yellow-mix: color-mix(
    in oklch,
    #C03A47,
    #C29E42
  ) !important;
  --color-red-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C03A47, #C29E42)
      20%,
    transparent
  ) !important;
  --color-yellow: #C29E42 !important;
  --color-yellow-blue-mix: color-mix(
    in oklch,
    #C29E42,
    #5a8fcd
  ) !important;
  --color-yellow-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C29E42, #5a8fcd)
      20%,
    transparent
  ) !important;
  --color-yellow-cyan-mix: color-mix(
    in oklch,
    #C29E42,
    #3CB9C2
  ) !important;
  --color-yellow-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C29E42, #3CB9C2)
      20%,
    transparent
  ) !important;
  --color-yellow-green-mix: color-mix(
    in oklch,
    #C29E42,
    #A1C05C
  ) !important;
  --color-yellow-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C29E42, #A1C05C)
      20%,
    transparent
  ) !important;
  --color-yellow-orange-mix: color-mix(
    in oklch,
    #C29E42,
    #CC8449
  ) !important;
  --color-yellow-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C29E42, #CC8449)
      20%,
    transparent
  ) !important;
  --color-yellow-pink-mix: color-mix(
    in oklch,
    #C29E42,
    #D458A3
  ) !important;
  --color-yellow-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C29E42, #D458A3)
      20%,
    transparent
  ) !important;
  --color-yellow-purple-mix: color-mix(
    in oklch,
    #C29E42,
    #A461C8
  ) !important;
  --color-yellow-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C29E42, #A461C8)
      20%,
    transparent
  ) !important;
  --color-yellow-red-mix: color-mix(
    in oklch,
    #C29E42,
    #C03A47
  ) !important;
  --color-yellow-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #C29E42, #C03A47)
      20%,
    transparent
  ) !important;
  --color-yellow-rgb: rgb(194, 158, 66) !important;
  --dark: #D3D5D3 !important;
  --darkgray: #D3D5D3 !important;
  --dimmed: 0.55 !important;
  --divider-color: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --divider-color-hover: color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ) !important;
  --drag-ghost-background: #24262C !important;
  --drag-ghost-text-color: color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ) !important;
  --dropdown-background: color-mix(
    in oklch,
    #14161C,
    #191D28
  ) !important;
  --dropdown-background-hover: #191D28 !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in oklch,
    #191D28,
    #24262C
  ), inset 0 0 0 1px color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --embed-border-start: 2px solid color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ) !important;
  --expand: 110% !important;
  --file-header-background: #191D28 !important;
  --file-header-background-focused: #191D28 !important;
  --file-header-font-size: 14.56227px !important;
  --file-line-width: 50rem !important;
  --flair-background: color-mix(
    in oklch,
    #14161C,
    #191D28
  ) !important;
  --flair-color: #D3D5D3 !important;
  --flexcyon-accent: #92A871 !important;
  --flexcyon-accent-h: 105.5 !important;
  --flexcyon-accent-l: 59.5% !important;
  --flexcyon-accent-s: 77.5% !important;
  --flexcyon-active-indicator: '>> ' !important;
  --flexcyon-alt-link-opacity: 55% !important;
  --flexcyon-anim-duration: 0.3ms !important;
  --flexcyon-anim-easing: ease-in-out !important;
  --flexcyon-anim-rotate-amount: 50deg !important;
  --flexcyon-anim-slide-amount: 56.63105px !important;
  --flexcyon-anim-start-opacity: 0.55 !important;
  --flexcyon-anim-start-scale-amt: 0.33 !important;
  --flexcyon-ascii-alignment: left !important;
  --flexcyon-ascii-art: ' _______________ ___ ____/__ /________ ____________ ______________ __ /_ __ /_ _ \\_ |/_/ ___/_ / / / __ \\_ __ \\ _ __/ _ / / __/_ / /__ _ /_/ // /_/ / / / / /_/ /_/ \\___//_/|_| \\___/ _\\__, / \\____//_/ /_/ /____/  ' !important;
  --flexcyon-ascii-checkboxes-font-size: 1.2rem !important;
  --flexcyon-ascii-line-height: 1.5 !important;
  --flexcyon-ascii-max-font-size: 14px !important;
  --flexcyon-ascii-max-width: 50rem !important;
  --flexcyon-ascii-scaling-factor: 1 !important;
  --flexcyon-base-01: #14161C !important;
  --flexcyon-base-01-02-mix: color-mix(
    in oklch,
    #14161C,
    #191D28
  ) !important;
  --flexcyon-base-02: #191D28 !important;
  --flexcyon-base-02-03-mix: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --flexcyon-base-03: #24262C !important;
  --flexcyon-base-03-04-mix: color-mix(
    in oklch,
    #24262C,
    #4D566B
  ) !important;
  --flexcyon-base-04: #4D566B !important;
  --flexcyon-base-04-05-mix: color-mix(
    in oklch,
    #4D566B,
    #6F7685
  ) !important;
  --flexcyon-base-05: #6F7685 !important;
  --flexcyon-base-grey-dark: #898C93 !important;
  --flexcyon-base-grey-light: #D3D5D3 !important;
  --flexcyon-base-grey-mix: color-mix(
    in oklch,
    #D3D5D3,
    #898C93
  ) !important;
  --flexcyon-base-grey-scroll: #3f495e !important;
  --flexcyon-base-grey-scroll-hover: #5c6782 !important;
  --flexcyon-base-grey-tab: #71777f !important;
  --flexcyon-base-grey-token: #586582 !important;
  --flexcyon-bases-card-delay-factor: 12.5 !important;
  --flexcyon-bases-card-flex-grow: 0.55 !important;
  --flexcyon-bases-card-padding: 8px
    0px
    0px
    2px !important;
  --flexcyon-bases-card-padding-bottom: 0px !important;
  --flexcyon-bases-card-padding-left: 2px !important;
  --flexcyon-bases-card-padding-right: 0px !important;
  --flexcyon-bases-card-padding-top: 8px !important;
  --flexcyon-bases-cards-label-opacity: 0.85 !important;
  --flexcyon-bases-padding-horiz: 16px !important;
  --flexcyon-bases-padding-verti: 16px !important;
  --flexcyon-bases-table-content-alignment: left !important;
  --flexcyon-bases-td-padding-l: 2px !important;
  --flexcyon-bg-image-blend-mode: darken !important;
  --flexcyon-bg-image-blur: 0px !important;
  --flexcyon-bg-image-position: center !important;
  --flexcyon-bg-image-repeat: no-repeat !important;
  --flexcyon-bg-image-sidebar-left-url: url("") !important;
  --flexcyon-bg-image-sidebar-right-url: url("") !important;
  --flexcyon-bg-image-size: contain !important;
  --flexcyon-block-label-opacity: 0.55 !important;
  --flexcyon-blue: #5a8fcd !important;
  --flexcyon-brightness-ratio: 1 !important;
  --flexcyon-callout-bg-opacity: 20% !important;
  --flexcyon-callout-first-codeblock-margin-top: 1rem !important;
  --flexcyon-callout-flashcard-animation-duration: 0.5ms !important;
  --flexcyon-callout-horiz-padding: 24px !important;
  --flexcyon-callout-icon-right-padding: 4px !important;
  --flexcyon-callout-pop-animation-duration: 0.2ms !important;
  --flexcyon-callout-radix: 16px !important;
  --flexcyon-callout-verti-padding: 12px !important;
  --flexcyon-callout-vertical-margin: 1em !important;
  --flexcyon-callouts-flashcard-height: 250px !important;
  --flexcyon-callouts-flashcard-width: 250px !important;
  --flexcyon-canvas-blur-intensity: 1px !important;
  --flexcyon-code-error: #C03A47 !important;
  --flexcyon-code-file-ext-font-w: 500 !important;
  --flexcyon-code-file-ext-prefix: '.' !important;
  --flexcyon-code-function: #C29E42 !important;
  --flexcyon-code-keyword: #3CB9C2 !important;
  --flexcyon-code-operator: #5a8fcd !important;
  --flexcyon-code-variable: #3CB9C2 !important;
  --flexcyon-codeblock-fmt-ext: lowercase !important;
  --flexcyon-comm-item-opacity: 0.89 !important;
  --flexcyon-comm-text-padding: 3px 16px !important;
  --flexcyon-contrast-ratio: 1 !important;
  --flexcyon-cursor-duration: 42.5ms !important;
  --flexcyon-cursor-timing-fn: ease-in !important;
  --flexcyon-cursor-type: auto !important;
  --flexcyon-cust-hr-str: 'f' !important;
  --flexcyon-cust-hr-str-font-size: 1.11803em !important;
  --flexcyon-cust-hr-str-horiz-padding: 8px !important;
  --flexcyon-cyan: #3CB9C2 !important;
  --flexcyon-dataview-horizontal-padding: 8px !important;
  --flexcyon-default-ol-style: decimal !important;
  --flexcyon-editor-bg-color: color-mix(
    in oklch,
    color-mix(
    in oklch,
    #14161C,
    #191D28
  ) 70%,
    #191D28 30%
  ) !important;
  --flexcyon-editor-bg-color-2: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --flexcyon-editor-bg-rotation: 0deg !important;
  --flexcyon-editor-bg-width: 15px !important;
  --flexcyon-editor-dot-size: 2.5px !important;
  --flexcyon-editor-margin-top: 18px !important;
  --flexcyon-editor-writing-indentation: 16px !important;
  --flexcyon-exp-dimmed-nav-size: 13.3623px !important;
  --flexcyon-external-link-color: #5A8FCD !important;
  --flexcyon-external-link-hover: color-mix(
    in oklch shorter hue,
    #5A8FCD,
    #898C93
  ) !important;
  --flexcyon-fc-dimmed-items-opacity: 0.89 !important;
  --flexcyon-h1-color: #5a8fcd !important;
  --flexcyon-h2-color: #A461C8 !important;
  --flexcyon-h3-color: #3CB9C2 !important;
  --flexcyon-h4-color: #D458A3 !important;
  --flexcyon-h5-color: #A1C05C !important;
  --flexcyon-h6-color: #C29E42 !important;
  --flexcyon-heading-1-alignment: left !important;
  --flexcyon-heading-2-alignment: left !important;
  --flexcyon-heading-3-alignment: left !important;
  --flexcyon-heading-4-alignment: left !important;
  --flexcyon-heading-5-alignment: left !important;
  --flexcyon-heading-6-alignment: left !important;
  --flexcyon-highlight-active-line-opacity: 7.5% !important;
  --flexcyon-highlight-border-radius: 4px !important;
  --flexcyon-highlight-colour: #3CB9C2 !important;
  --flexcyon-highlight-horiz-padding: 2.5px !important;
  --flexcyon-highlight-opacity: 22.5% !important;
  --flexcyon-highlight-verti-padding: 1px !important;
  --flexcyon-input-horiz-padding: 8px !important;
  --flexcyon-input-verti-padding: 8px !important;
  --flexcyon-l-spacing: 0px !important;
  --flexcyon-lime-green: #A1C05C !important;
  --flexcyon-link-color: #A461C8 !important;
  --flexcyon-link-hover: color-mix(
    in oklch shorter hue,
    #A461C8,
    #898C93
  ) !important;
  --flexcyon-link-unresolved-color: #A461C8 !important;
  --flexcyon-media-embed-vertical-margin: 8px !important;
  --flexcyon-meta-container-padding-left: 14px !important;
  --flexcyon-modal-bg-url: url("") !important;
  --flexcyon-modal-dark-intensity: 1 !important;
  --flexcyon-modal-image-blend-mode: lighten !important;
  --flexcyon-modal-image-blur: 0px !important;
  --flexcyon-modal-image-position: center !important;
  --flexcyon-modal-image-repeat: no-repeat !important;
  --flexcyon-modal-image-size: cover !important;
  --flexcyon-mode-view-header-title-horiz-padding: 12px !important;
  --flexcyon-mode-view-header-title-verti-padding: 4px !important;
  --flexcyon-new-tab-bg-wrapper: linear-gradient(
    to right,
    hsl(
    102.5 79.05%
      68.425%
  ),
    #5a8fcd,
    #3CB9C2
  ) !important;
  --flexcyon-new-tab-font-group: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --flexcyon-omnisearch-body-margin-left: 1.45rem !important;
  --flexcyon-orange: #CC8449 !important;
  --flexcyon-os-detail-padding-l: 12px !important;
  --flexcyon-os-detail-padding-r: 24px !important;
  --flexcyon-palette-cyan-hover: color-mix(
    in oklch shorter hue,
    #3CB9C2,
    #898C93
  ) !important;
  --flexcyon-palette-lilac-hover: color-mix(
    in oklch shorter hue,
    #A461C8,
    #898C93
  ) !important;
  --flexcyon-pink: #D458A3 !important;
  --flexcyon-purple-lilac: #A461C8 !important;
  --flexcyon-quote-credit: 'bladeacer' !important;
  --flexcyon-quote-credit-prefix: '-' !important;
  --flexcyon-quote-font-size: 24px !important;
  --flexcyon-quote-val: 'This is a placeholder quotein the Flexcyon Theme.' !important;
  --flexcyon-red-salmon: #C03A47 !important;
  --flexcyon-repl-active-line-str: '-' !important;
  --flexcyon-repl-active-str-space: 0px !important;
  --flexcyon-saturation-ratio: 1 !important;
  --flexcyon-screen-dimens-padding-l: 16px !important;
  --flexcyon-search-container-horiz-padding: 16px !important;
  --flexcyon-search-container-verti-padding: 8px !important;
  --flexcyon-settings-installed-tooltip-left-margin: 1rem !important;
  --flexcyon-side-toggle-button-no-ribbon: 11px 16px 7px 0px !important;
  --flexcyon-status-hide-hover-duration: 0.35ms !important;
  --flexcyon-status-hide-hover-function: ease-out !important;
  --flexcyon-status-hide-trigger-translation: 50px !important;
  --flexcyon-status-hide-until-hover-text: 'Show status' !important;
  --flexcyon-status-hide-until-hover-translation: 80vw !important;
  --flexcyon-status-live-text: 'LIVE' !important;
  --flexcyon-status-new-tab-opacity: 0.55 !important;
  --flexcyon-status-reading-text: 'READ' !important;
  --flexcyon-status-source-text: 'SOURCE' !important;
  --flexcyon-style-settings-indent-width: 4px !important;
  --flexcyon-suggestion-horiz-padding: 12px !important;
  --flexcyon-suggestion-verti-padding: 8px !important;
  --flexcyon-table-reading-mode-width: 100% !important;
  --flexcyon-td-horiz-padding: 10px !important;
  --flexcyon-td-live-pad-scale: 0.2 !important;
  --flexcyon-td-table-alignment: left !important;
  --flexcyon-td-verti-padding: 5px !important;
  --flexcyon-text-muted: #6F768599 !important;
  --flexcyon-th-horiz-padding: 10px !important;
  --flexcyon-th-live-pad-scale: 0.2 !important;
  --flexcyon-th-table-alignment: left !important;
  --flexcyon-th-verti-padding: 5px !important;
  --flexcyon-top-actions-alignment: center !important;
  --flexcyon-tree-item-horiz-padding: 10px !important;
  --flexcyon-tree-item-verti-padding: 2px !important;
  --flexcyon-typewriter-mode-opacity: 0.55 !important;
  --flexcyon-var-comps-sugg-horiz-padding: 12px !important;
  --flexcyon-var-comps-sugg-vert-padding: 7px !important;
  --flexcyon-view-header-breadcrumb-max-w: 12.5vw !important;
  --flexcyon-vim-bottom-positioning: -4px !important;
  --flexcyon-vim-command-text: 'COMMAND' !important;
  --flexcyon-vim-insert-text: 'INSERT' !important;
  --flexcyon-vim-left-positioning: 6px !important;
  --flexcyon-vim-normal-text: 'NORMAL' !important;
  --flexcyon-w-spacing: 0px !important;
  --flexcyon-yellow: #C29E42 !important;
  --flexyon-base-grey-token: #586582 !important;
  --font-mermaid: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-ui-large: 17.79833px !important;
  --font-ui-medium: 16.1803px !important;
  --font-ui-small: 14.56227px !important;
  --font-ui-smaller: 12.94424px !important;
  --footnote-divider-color: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --footnote-id-color: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --footnote-id-color-no-occurrences: #6F768599 !important;
  --footnote-input-background-active: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --footnote-line-height: 1.4 !important;
  --footnote-radius: 2px !important;
  --graph-control-horiz-padding: 12px !important;
  --graph-control-verti-padding: 6px !important;
  --graph-line: #24262C !important;
  --graph-node: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --graph-node-attachment: #C29E42 !important;
  --graph-node-focused: hsl(
    102.5 79.05%
      68.425%
  ) !important;
  --graph-node-tag: #A461C8 !important;
  --graph-node-unresolved: #C03A47 !important;
  --graph-text: #D3D5D3 !important;
  --gray: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --h: tan(atan2(1380px, 1px)) !important;
  --h1-color: #5a8fcd !important;
  --h1-line-height: 1.61 !important;
  --h1-size: 1.81803em !important;
  --h2-color: #A461C8 !important;
  --h2-line-height: 1.51 !important;
  --h2-size: 1.61803em !important;
  --h2-weight: 675 !important;
  --h3-color: #3CB9C2 !important;
  --h3-line-height: 1.41 !important;
  --h3-size: 1.41803em !important;
  --h3-weight: 650 !important;
  --h4-color: #D458A3 !important;
  --h4-line-height: 1.31 !important;
  --h4-size: 1.21803em !important;
  --h4-weight: 625 !important;
  --h5-color: #A1C05C !important;
  --h5-line-height: 1.21 !important;
  --h5-size: 1.11803em !important;
  --h5-weight: 600 !important;
  --h6-color: #C29E42 !important;
  --h6-line-height: 1.21 !important;
  --h6-size: 1.01803em !important;
  --h6-weight: 575 !important;
  --heading-formatting: #6F768599 !important;
  --highlight: color-mix(
    in oklch,
    #3CB9C2 22.5%,
    transparent
  ) !important;
  --hr-color: #393E48 !important;
  --icon-color: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --icon-color-active: color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ) !important;
  --icon-color-focused: color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ) !important;
  --icon-color-hover: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --icon-stroke: 2px !important;
  --icon-xs: 12.25px !important;
  --img-border-radius: 15px !important;
  --inline-title-color: #5a8fcd !important;
  --inline-title-size: 1.802em !important;
  --input-date-separator: #6F768599 !important;
  --input-padding: 8px
    8px !important;
  --input-placeholder-color: #6F768599 !important;
  --input-radius: 0px !important;
  --interactive-accent: color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ) !important;
  --interactive-accent-hover: color-mix(
    in oklch shorter hue,
    #92A871 75%,
    transparent
  ) !important;
  --interactive-accent-hsl: 105.5, 77.5%, 59.5% !important;
  --interactive-hover: #191D28 !important;
  --interactive-normal: color-mix(
    in oklch,
    #14161C,
    #191D28
  ) !important;
  --italic-color: #92A871 !important;
  --less-letter-spacing: -3px !important;
  --light: #191D28 !important;
  --lightgray: #14161C !important;
  --line-height-normal: 1.4 !important;
  --line-height-tight: 1.25 !important;
  --link-color: #A461C8 !important;
  --link-color-hover: color-mix(
    in oklch shorter hue,
    #A461C8,
    #898C93
  ) !important;
  --link-external-color: #5A8FCD !important;
  --link-external-color-hover: color-mix(
    in oklch shorter hue,
    #5A8FCD,
    #898C93
  ) !important;
  --link-unresolved-color: #A461C8 !important;
  --link-unresolved-decoration-color: #A461C8 !important;
  --link-unresolved-decoration-style: dashed !important;
  --list-marker-color: #A461C8 !important;
  --list-marker-color-collapsed: #A1C05C !important;
  --list-marker-color-hover: color-mix(
    in oklch shorter hue,
    #A461C8,
    #898C93
  ) !important;
  --menu-background: #14161C !important;
  --menu-border-color: transparent !important;
  --menu-radius: 4px !important;
  --metadata-border-color: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --metadata-divider-color: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --metadata-input-background-active: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --metadata-input-text-color: #D3D5D3 !important;
  --metadata-label-background-active: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --metadata-label-text-color: #A461C8 !important;
  --metadata-label-text-color-hover: color-mix(
    in oklch shorter hue,
    #A461C8,
    #898C93
  ) !important;
  --metadata-property-background-active: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(
    in oklch,
    #24262C,
    #4D566B
  ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --metadata-sidebar-input-font-size: 14.56227px !important;
  --metadata-sidebar-label-font-size: 14.56227px !important;
  --modal-background: #191D28 !important;
  --modal-border-color: #191D28 !important;
  --modal-radius: 6px !important;
  --nav-collapse-icon-color: #6F768599 !important;
  --nav-collapse-icon-color-collapsed: #6F768599 !important;
  --nav-heading-color: #D3D5D3 !important;
  --nav-heading-color-collapsed: #6F768599 !important;
  --nav-heading-color-collapsed-hover: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --nav-heading-color-hover: #D3D5D3 !important;
  --nav-item-background-active: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --nav-item-background-hover: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --nav-item-background-selected: #24262C !important;
  --nav-item-color: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --nav-item-color-active: color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ) !important;
  --nav-item-color-highlighted: hsl(
    102.5 79.05%
      68.425%
  ) !important;
  --nav-item-color-hover: #D3D5D3 !important;
  --nav-item-color-selected: #CC8449 !important;
  --nav-item-radius: 2px !important;
  --nav-item-size: 14.56227px !important;
  --nav-tag-color: #6F768599 !important;
  --nav-tag-color-active: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --nav-tag-color-hover: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --nav-tag-radius: 2px !important;
  --oz-fta-all-panes-active-text-color: #D3D5D3 !important;
  --oz-fta-file-font-size: calc(16.1803px - 0.1rem) !important;
  --oz-fta-file-pane-file-name-color: #6F768599 !important;
  --oz-fta-folder-font-size: calc(16.1803px - 0.1rem) !important;
  --oz-fta-folder-pane-file-name-color: #D3D5D3 !important;
  --oz-fta-folder-panes-file-name-color: #d3d5d3 !important;
  --pdf-background: #191D28 !important;
  --pdf-page-background: #191D28 !important;
  --pdf-shadow: 0 0 0 1px color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --pdf-sidebar-background: #191D28 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --pill-border-color: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --pill-border-color-hover: transparent !important;
  --pill-color: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --pill-color-hover: #D3D5D3 !important;
  --pill-color-remove: #6F768599 !important;
  --pill-color-remove-hover: hsl(
    102.5 79.05%
      68.425%
  ) !important;
  --prompt-background: #191D28 !important;
  --prompt-border-color: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --r-background-color: color-mix(
    in oklch,
    #14161C,
    #191D28
  ) !important;
  --r-heading-color: #D3D5D3 !important;
  --r-heading-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --r-heading-margin: 16px 0px !important;
  --r-heading-text-transform: capitalize !important;
  --r-heading1-size: 1.81803em !important;
  --r-heading2-size: 1.61803em !important;
  --r-heading3-size: 1.41803em !important;
  --r-heading4-size: 1.21803em !important;
  --r-link-color: hsl(
    85.5 65.875%
      65.45% / 87.5%
  ) !important;
  --r-main-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --r-main-font-size: max-content !important;
  --radius-l: 6px !important;
  --radius-m: 4px !important;
  --radius-s: 2px !important;
  --radius-x1: 8px !important;
  --radius-xl: 8px !important;
  --raised-background: color-mix(in srgb, color-mix(
    in oklch,
    #14161C,
    #191D28
  ) 65%, transparent) linear-gradient(color-mix(
    in oklch,
    #14161C,
    #191D28
  ), color-mix(in srgb, color-mix(
    in oklch,
    #14161C,
    #191D28
  ) 65%, transparent)) !important;
  --ribbon-background: #14161C !important;
  --ribbon-background-collapsed: #14161C !important;
  --ribbon-width: 48px !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-radius: 6px !important;
  --search-clear-button-color: #C03A47 !important;
  --search-icon-color: #92A871 !important;
  --search-result-background: #191D28 !important;
  --secondary: hsl(
    102.5 79.05%
      68.425%
  ) !important;
  --setting-group-heading-color: #D3D5D3 !important;
  --setting-group-heading-size: 16.1803px !important;
  --setting-items-border-color: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --setting-items-padding: 2px 0px !important;
  --settings-background: color-mix(
    in oklch,
    #14161C,
    #191D28
  ) !important;
  --slider-thumb-border-color: transparent !important;
  --slider-track-background: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --status-bar-background: #14161C !important;
  --status-bar-border-color: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --status-bar-font-size: 13.753255px !important;
  --status-bar-position: absolute !important;
  --status-bar-radius: 4px 0 0 0 !important;
  --status-bar-text-color: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --suggestion-background: #191D28 !important;
  --sync-avatar-color-1: #C03A47 !important;
  --sync-avatar-color-2: #CC8449 !important;
  --sync-avatar-color-3: #C29E42 !important;
  --sync-avatar-color-4: #A1C05C !important;
  --sync-avatar-color-5: #3CB9C2 !important;
  --sync-avatar-color-6: #5a8fcd !important;
  --sync-avatar-color-7: #A461C8 !important;
  --sync-avatar-color-8: #D458A3 !important;
  --tab-background-active: #191D28 !important;
  --tab-container-background: #14161C !important;
  --tab-curve: 0px !important;
  --tab-divider-color: #14161C !important;
  --tab-font-size: 14.56227px !important;
  --tab-outline-color: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --tab-outline-width: 0px !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-stacked-font-size: 14.56227px !important;
  --tab-switcher-background: #14161C !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #14161C, transparent) !important;
  --tab-switcher-preview-radius: 8px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(105.5, 77.5%, 59.5%) !important;
  --tab-text-color: #6F7685 !important;
  --tab-text-color-active: hsl(
    102.5 79.05%
      68.425%
  ) !important;
  --tab-text-color-focused: #6F7685 !important;
  --tab-text-color-focused-active: hsl(
    102.5 79.05%
      68.425%
  ) !important;
  --tab-text-color-focused-active-current: hsl(
    102.5 79.05%
      68.425%
  ) !important;
  --tab-text-color-focused-highlighted: hsl(
    102.5 79.05%
      68.425%
  ) !important;
  --table-add-button-border-color: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --table-background: #191D28 !important;
  --table-border-color: #6F768566 !important;
  --table-column-alt-background: #191D28 !important;
  --table-drag-handle-background-active: color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ) !important;
  --table-drag-handle-color: #6F768599 !important;
  --table-drag-handle-color-active: #24262C !important;
  --table-header-background: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --table-header-background-hover: #191D28 !important;
  --table-header-border-color: #6F768566 !important;
  --table-header-color: #D3D5D3 !important;
  --table-header-size: large !important;
  --table-line-height: 1.25 !important;
  --table-row-alt-background-hover: #191D28 !important;
  --table-row-background-hover: #191D28 !important;
  --table-selection: hsla(105.5, 77.5%, 59.5%, 0.1) !important;
  --table-selection-border-color: color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ) !important;
  --table-text-size: 16.1803px !important;
  --tag-background: color-mix(in oklch, #3CB9C2 25%, transparent) !important;
  --tag-background-hover: color-mix(
    in oklch,
    color-mix(
    in oklch shorter hue,
    #3CB9C2,
    #898C93
  ) 25%,
    transparent
  ) !important;
  --tag-border-color: hsla(105.5, 77.5%, 59.5%, 0.15) !important;
  --tag-border-color-hover: hsla(105.5, 77.5%, 59.5%, 0.15) !important;
  --tag-color: #3CB9C2 !important;
  --tag-color-hover: color-mix(
    in oklch shorter hue,
    #3CB9C2,
    #898C93
  ) !important;
  --tag-decoration-hover: underline !important;
  --tertiary: color-mix(
    in oklch shorter hue,
    #92A871 75%,
    transparent
  ) !important;
  --text-accent: hsl(
    102.5 79.05%
      68.425%
  ) !important;
  --text-error: #C03A47 !important;
  --text-faint: #6F768599 !important;
  --text-highlight-bg: color-mix(
    in oklch,
    #3CB9C2 22.5%,
    transparent
  ) !important;
  --text-muted: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --text-normal: #D3D5D3 !important;
  --text-on-accent: #24262C !important;
  --text-selection: hsla(105.5, 77.5%, 59.5%, 0.33) !important;
  --text-success: #A1C05C !important;
  --text-warning: #C03A47 !important;
  --textHighlight: color-mix(
    in oklch,
    #3CB9C2 22.5%,
    transparent
  ) !important;
  --titlebar-background: #14161C !important;
  --titlebar-background-focused: #14161C !important;
  --titlebar-border-color: color-mix(
    in oklch,
    #191D28,
    #24262C
  ) !important;
  --titlebar-text-color: #6F768599 !important;
  --titlebar-text-color-focused: color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ) !important;
  --toggle-thumb-color: #24262C !important;
  --upsize: 103% !important;
  --vault-name-color: color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ) !important;
  --vault-profile-color: #D3D5D3 !important;
  --vault-profile-color-hover: #D3D5D3 !important;
  --vault-profile-font-size: 14.56227px !important;
  --w: tan(atan2(2538px, 1px)) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 22, 28);
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(25, 29, 40);
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgba(111, 118, 133, 0.4);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(25, 29, 40);
  border-color: rgba(111, 118, 133, 0.4);
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(20, 22, 28);
  border-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .note-properties {
  border-color: oklch(0.25047 0.0168382 269.118);
}

html[saved-theme="dark"] body .note-properties-key {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: oklch(0.722355 0.107178 202.06 / 0.25);
  color: rgb(60, 185, 194);
}

html[saved-theme="dark"] body .note-properties-value {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 22, 28);
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 22, 28);
  border-left-color: oklch(0.25047 0.0168382 269.118);
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(25, 29, 40);
  color: rgb(211, 213, 211);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(192, 58, 71);
  outline: rgb(192, 58, 71) none 0px;
  text-decoration-color: rgb(192, 58, 71);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(146, 168, 113);
  outline: rgb(146, 168, 113) none 0px;
  text-decoration-color: rgb(146, 168, 113);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(146, 168, 113);
  outline: rgb(146, 168, 113) none 0px;
  text-decoration-color: rgb(146, 168, 113);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(192, 58, 71);
  outline: rgb(192, 58, 71) none 0px;
  text-decoration-color: rgb(192, 58, 71);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: oklch(0.722355 0.107178 202.06 / 0.225);
  color: rgb(211, 213, 211);
  font-weight: 525;
  outline: rgb(211, 213, 211) none 0px;
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body del {
  color: rgb(211, 213, 211);
  outline: rgb(211, 213, 211) none 0px;
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(211, 213, 211);
  font-size: 14.5623px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(90, 143, 205);
  border-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(164, 97, 200);
  border-color: rgb(164, 97, 200);
}

html[saved-theme="dark"] body p {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
  outline: oklch(0.756226 0.0113969 265.685 / 0.8) none 0px;
  text-decoration-color: oklch(0.756226 0.0113969 265.685 / 0.8);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(90, 143, 205);
  outline: rgb(90, 143, 205) none 0px;
  text-decoration-color: rgb(90, 143, 205);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(164, 97, 200);
  outline: rgb(164, 97, 200) none 0px;
  text-decoration-color: rgb(164, 97, 200);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(164, 97, 200);
  outline: rgb(164, 97, 200) none 0px;
  text-decoration: underline dashed rgb(164, 97, 200);
  text-decoration-color: rgb(164, 97, 200);
  text-decoration-style: dashed;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body dt {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(111, 118, 133, 0.6);
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: oklch(0.216334 0.0172956 269.118);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: rgb(211, 213, 211);
  width: 766px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(25, 29, 40);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: rgb(211, 213, 211);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  text-align: left;
}

html[saved-theme="dark"] body th {
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: rgb(211, 213, 211);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  text-align: left;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
}

html[saved-theme="dark"] body tr {
  background-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(20, 22, 28);
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(20, 22, 28);
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(194, 158, 66);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(194, 158, 66);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(194, 158, 66);
  border-left-color: rgb(194, 158, 66);
  border-right-color: rgb(194, 158, 66);
  border-top-color: rgb(194, 158, 66);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(20, 22, 28);
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(20, 22, 28);
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(90, 143, 205);
  border-left-color: rgb(90, 143, 205);
  border-right-color: rgb(90, 143, 205);
  border-top-color: rgb(90, 143, 205);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(36, 38, 44);
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(211, 213, 211);
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: oklch(0.86535 0.184813 137.419 / 0.8);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(90, 143, 205);
  border-right-color: rgb(90, 143, 205);
  border-top-color: rgb(90, 143, 205);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(194, 158, 66);
  content: "--";
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(164, 97, 200);
  content: "!";
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(212, 88, 163);
  content: "?";
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  color: rgb(194, 158, 66);
  content: "...";
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  color: rgb(60, 185, 194);
  content: "‘";
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(161, 192, 92);
  content: "“";
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(90, 143, 205);
  content: "@";
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(164, 97, 200);
  content: "*";
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(204, 132, 73);
  content: "/";
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  color: rgb(161, 192, 92);
  content: "#";
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  color: rgb(212, 88, 163);
  content: "%";
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(161, 192, 92);
  content: "+";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(204, 132, 73);
  content: "<";
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(60, 185, 194);
  content: ">";
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(192, 58, 71);
  content: "~";
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  color: rgb(192, 58, 71);
  content: "$";
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 58, 71);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 58, 71);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 58, 71);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 58, 71);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(60, 185, 194);
  content: "i";
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 158, 66);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 158, 66);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(164, 97, 200);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 58, 71);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(161, 192, 92);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(161, 192, 92);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(161, 192, 92);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(111, 118, 133, 0.6);
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: #6F768599;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: #6F768599;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: #6F768599;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: #6F768599;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: #6F768599;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: #6F768599;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: #6F768599;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: #6F768599;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: #6F768599;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: #6F768599;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: #6F768599;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: #6F768599;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: #6F768599;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(25, 29, 40);
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(25, 29, 40);
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(211, 213, 211);
  outline: rgb(211, 213, 211) none 0px;
  text-decoration-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: oklch(0.25047 0.0168382 269.118);
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 22, 28);
  border-left-color: oklch(0.86535 0.184813 137.419 / 0.8);
  border-right-color: oklch(0.86535 0.184813 137.419 / 0.8);
  border-top-color: oklch(0.86535 0.184813 137.419 / 0.8);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: oklch(0.722355 0.107178 202.06 / 0.25);
  border-bottom-color: rgba(110, 232, 72, 0.15);
  border-left-color: rgba(110, 232, 72, 0.15);
  border-right-color: rgba(110, 232, 72, 0.15);
  border-top-color: rgba(110, 232, 72, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(60, 185, 194);
}

html[saved-theme="dark"] body h1 {
  color: rgb(90, 143, 205);
}

html[saved-theme="dark"] body h2 {
  color: rgb(164, 97, 200);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(90, 143, 205);
}

html[saved-theme="dark"] body h3 {
  color: rgb(60, 185, 194);
}

html[saved-theme="dark"] body h4 {
  color: rgb(212, 88, 163);
}

html[saved-theme="dark"] body h5 {
  color: rgb(161, 192, 92);
}

html[saved-theme="dark"] body h6 {
  color: rgb(194, 158, 66);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: #6F768599;
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(211, 213, 211);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-left-radius: 4px;
  border-top-width: 0px;
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body footer ul li a {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body .darkmode svg {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
  stroke: oklch(0.756226 0.0113969 265.685 / 0.8);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  background-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 0px;
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-left-radius: 16px;
  border-top-right-radius: 0px;
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(111, 118, 133, 0.6);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-top-color: oklch(0.25047 0.0168382 269.118);
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
  padding-left: 14px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body abbr {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(164, 97, 200);
  border-left-color: rgb(164, 97, 200);
  border-right-color: rgb(164, 97, 200);
  border-top-color: rgb(164, 97, 200);
  color: rgb(164, 97, 200);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(20, 22, 28);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body sub {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body summary {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body sup {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: oklch(0.722355 0.107178 202.06 / 0.25);
  border-bottom-color: rgba(110, 232, 72, 0.15);
  border-left-color: rgba(110, 232, 72, 0.15);
  border-right-color: rgba(110, 232, 72, 0.15);
  border-top-color: rgba(110, 232, 72, 0.15);
  color: rgb(60, 185, 194);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 225 !important;
  --accent-l: 53% !important;
  --accent-s: 41% !important;
  --background-modifier-active-hover: #DDDCD6 !important;
  --background-modifier-border: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --background-modifier-border-focus: color-mix(
    in oklch,
    #DDDCD6,
    #D3D3CE
  ) !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-error: rgb(
    rgb(235, 83, 37),
    0.85
  ) !important;
  --background-modifier-error-hover: #EB5325 !important;
  --background-modifier-error-rgb: rgb(235, 83, 37) !important;
  --background-modifier-form-field: #FAF7EF !important;
  --background-modifier-form-field-hover: #FAF7EF !important;
  --background-modifier-hover: #EDEBE5 !important;
  --background-modifier-message: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --background-modifier-success: #689523 !important;
  --background-modifier-success-rgb: rgb(104, 149, 35) !important;
  --background-primary: #FAF7EF !important;
  --background-primary-alt: #EDEBE5 !important;
  --background-secondary: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --background-secondary-alt: #EDEBE5 !important;
  --bases-border-r: 16px !important;
  --bases-cards-background: #FAF7EF !important;
  --bases-cards-cover-background: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --bases-cards-group-padding: 16px !important;
  --bases-cards-radius: 4px !important;
  --bases-cards-shadow: 0 0 0 1px color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-embed-border-color: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --bases-embed-border-radius: 2px !important;
  --bases-embed-padding: 4px !important;
  --bases-group-heading-property-color: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --bases-group-heading-property-size: 12.94424px !important;
  --bases-no-img-str: 'No image path could be found for this file' !important;
  --bases-table-border-color: #6F768566 !important;
  --bases-table-cell-background-active: #FAF7EF !important;
  --bases-table-cell-background-disabled: #EDEBE5 !important;
  --bases-table-cell-background-selected: hsla(225, 41%, 53%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(
    in oklch,
    #DDDCD6,
    #D3D3CE
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ) !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-group-background: #EDEBE5 !important;
  --bases-table-header-background: #FAF7EF !important;
  --bases-table-header-background-hover: #EDEBE5 !important;
  --bases-table-header-color: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --bases-table-row-background-hover: #FAF7EF !important;
  --bases-table-summary-background: #FAF7EF !important;
  --bases-table-summary-background-hover: #EDEBE5 !important;
  --blockquote-border-color: color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ) !important;
  --blur-background: color-mix(in srgb, #FAF7EF 65%, transparent) linear-gradient(#FAF7EF, color-mix(in srgb, #FAF7EF 65%, transparent)) !important;
  --bold-color: #EB5325 !important;
  --button-radius: 0px !important;
  --callout-bug: rgb(235, 83, 37);
  --callout-default: 92, 159, 228;
  --callout-error: rgb(235, 83, 37);
  --callout-example: rgb(111, 73, 174);
  --callout-fail: rgb(235, 83, 37);
  --callout-important: rgb(59, 155, 161);
  --callout-info: 92, 159, 228;
  --callout-padding: 12px
    24px;
  --callout-question: rgb(237, 129, 38);
  --callout-radius: 2px;
  --callout-success: rgb(104, 149, 35);
  --callout-summary: rgb(59, 155, 161);
  --callout-tip: rgb(59, 155, 161);
  --callout-todo: 92, 159, 228;
  --callout-warning: rgb(237, 129, 38);
  --canvas-background: #FAF7EF !important;
  --canvas-card-label-color: #6F768599 !important;
  --canvas-color-1: rgb(235, 83, 37) !important;
  --canvas-color-2: rgb(237, 129, 38) !important;
  --canvas-color-3: rgb(232, 198, 42) !important;
  --canvas-color-4: rgb(104, 149, 35) !important;
  --canvas-color-5: rgb(59, 155, 161) !important;
  --canvas-color-6: rgb(111, 73, 174) !important;
  --canvas-controls-radius: 2px !important;
  --canvas-dot-pattern: color-mix(
    in oklch,
    #DDDCD6,
    #D3D3CE
  ) !important;
  --caret-color: #080808 !important;
  --checkbox-border-color: #5c9fe4 !important;
  --checkbox-border-color-hover: color-mix(
    in oklch shorter hue,
    #6F49AE,
    #797876
  ) !important;
  --checkbox-color: #6F49AE !important;
  --checkbox-color-hover: color-mix(
    in oklch shorter hue,
    #6F49AE,
    #797876
  ) !important;
  --checkbox-marker-color: #FAF7EF !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --clickable-icon-radius: 0 !important;
  --cm-font-size: 15.37127px !important;
  --cm-panel-bg: color-mix(
    in srgb,
    color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) 55%,
    #EDEBE5 45%
  ) !important;
  --code-background: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --code-border-color: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --code-bracket-background: #EDEBE5 !important;
  --code-comment: #6F768599 !important;
  --code-function: #E8C62A !important;
  --code-important: #EB5325 !important;
  --code-keyword: #3B9BA1 !important;
  --code-normal: #080808 !important;
  --code-operator: #5c9fe4 !important;
  --code-property: #3B9BA1 !important;
  --code-punctuation: rgb(rgb(235, 83, 37), 0.55) !important;
  --code-radius: 2px !important;
  --code-string: #689523 !important;
  --code-tag: #797876 !important;
  --code-value: #E8C62A !important;
  --collapse-icon-color: #6F768599 !important;
  --collapse-icon-color-collapsed: #5770B9 !important;
  --color-accent: hsl(225, 41%, 53%) !important;
  --color-accent-1: hsl(
    222 41.82%
      60.95%
  ) !important;
  --color-accent-2: hsl(
    205 34.85%
      58.3% / 87.5%
  ) !important;
  --color-accent-hsl: 225, 41%, 53% !important;
  --color-base-00: #FAF7EF !important;
  --color-base-05: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --color-base-10: #EDEBE5 !important;
  --color-base-100: #080808 !important;
  --color-base-20: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --color-base-25: #DDDCD6 !important;
  --color-base-30: color-mix(
    in oklch,
    #DDDCD6,
    #D3D3CE
  ) !important;
  --color-base-35: #D3D3CE !important;
  --color-base-40: color-mix(
    in oklch,
    #D3D3CE,
    #B4B3AF
  ) !important;
  --color-base-50: #B4B3AF !important;
  --color-base-60: #797876 !important;
  --color-base-70: color-mix(
    in oklch,
    #080808,
    #797876
  ) !important;
  --color-blue: #5c9fe4 !important;
  --color-blue-cyan-mix: color-mix(
    in oklch,
    #5c9fe4,
    #3B9BA1
  ) !important;
  --color-blue-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5c9fe4, #3B9BA1)
      20%,
    transparent
  ) !important;
  --color-blue-green-mix: color-mix(
    in oklch,
    #5c9fe4,
    #689523
  ) !important;
  --color-blue-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5c9fe4, #689523)
      20%,
    transparent
  ) !important;
  --color-blue-orange-mix: color-mix(
    in oklch,
    #5c9fe4,
    #ED8126
  ) !important;
  --color-blue-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5c9fe4, #ED8126)
      20%,
    transparent
  ) !important;
  --color-blue-pink-mix: color-mix(
    in oklch,
    #5c9fe4,
    #E389CA
  ) !important;
  --color-blue-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5c9fe4, #E389CA)
      20%,
    transparent
  ) !important;
  --color-blue-purple-mix: color-mix(
    in oklch,
    #5c9fe4,
    #6F49AE
  ) !important;
  --color-blue-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5c9fe4, #6F49AE)
      20%,
    transparent
  ) !important;
  --color-blue-red-mix: color-mix(
    in oklch,
    #5c9fe4,
    #EB5325
  ) !important;
  --color-blue-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5c9fe4, #EB5325)
      20%,
    transparent
  ) !important;
  --color-blue-rgb: 92, 159, 228 !important;
  --color-blue-yellow-mix: color-mix(
    in oklch,
    #5c9fe4,
    #E8C62A
  ) !important;
  --color-blue-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #5c9fe4, #E8C62A)
      20%,
    transparent
  ) !important;
  --color-cyan: #3B9BA1 !important;
  --color-cyan-blue-mix: color-mix(
    in oklch,
    #3B9BA1,
    #5c9fe4
  ) !important;
  --color-cyan-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3B9BA1, #5c9fe4)
      20%,
    transparent
  ) !important;
  --color-cyan-green-mix: color-mix(
    in oklch,
    #3B9BA1,
    #689523
  ) !important;
  --color-cyan-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3B9BA1, #689523)
      20%,
    transparent
  ) !important;
  --color-cyan-orange-mix: color-mix(
    in oklch,
    #3B9BA1,
    #ED8126
  ) !important;
  --color-cyan-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3B9BA1, #ED8126)
      20%,
    transparent
  ) !important;
  --color-cyan-pink-mix: color-mix(
    in oklch,
    #3B9BA1,
    #E389CA
  ) !important;
  --color-cyan-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3B9BA1, #E389CA)
      20%,
    transparent
  ) !important;
  --color-cyan-purple-mix: color-mix(
    in oklch,
    #3B9BA1,
    #6F49AE
  ) !important;
  --color-cyan-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3B9BA1, #6F49AE)
      20%,
    transparent
  ) !important;
  --color-cyan-red-mix: color-mix(
    in oklch,
    #3B9BA1,
    #EB5325
  ) !important;
  --color-cyan-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3B9BA1, #EB5325)
      20%,
    transparent
  ) !important;
  --color-cyan-rgb: rgb(59, 155, 161) !important;
  --color-cyan-yellow-mix: color-mix(
    in oklch,
    #3B9BA1,
    #E8C62A
  ) !important;
  --color-cyan-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #3B9BA1, #E8C62A)
      20%,
    transparent
  ) !important;
  --color-green: #689523 !important;
  --color-green-blue-mix: color-mix(
    in oklch,
    #689523,
    #5c9fe4
  ) !important;
  --color-green-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #689523, #5c9fe4)
      20%,
    transparent
  ) !important;
  --color-green-cyan-mix: color-mix(
    in oklch,
    #689523,
    #3B9BA1
  ) !important;
  --color-green-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #689523, #3B9BA1)
      20%,
    transparent
  ) !important;
  --color-green-orange-mix: color-mix(
    in oklch,
    #689523,
    #ED8126
  ) !important;
  --color-green-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #689523, #ED8126)
      20%,
    transparent
  ) !important;
  --color-green-pink-mix: color-mix(
    in oklch,
    #689523,
    #E389CA
  ) !important;
  --color-green-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #689523, #E389CA)
      20%,
    transparent
  ) !important;
  --color-green-purple-mix: color-mix(
    in oklch,
    #689523,
    #6F49AE
  ) !important;
  --color-green-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #689523, #6F49AE)
      20%,
    transparent
  ) !important;
  --color-green-red-mix: color-mix(
    in oklch,
    #689523,
    #EB5325
  ) !important;
  --color-green-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #689523, #EB5325)
      20%,
    transparent
  ) !important;
  --color-green-rgb: rgb(104, 149, 35) !important;
  --color-green-yellow-mix: color-mix(
    in oklch,
    #689523,
    #E8C62A
  ) !important;
  --color-green-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #689523, #E8C62A)
      20%,
    transparent
  ) !important;
  --color-orange: #ED8126 !important;
  --color-orange-blue-mix: color-mix(
    in oklch,
    #ED8126,
    #5c9fe4
  ) !important;
  --color-orange-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #ED8126, #5c9fe4)
      20%,
    transparent
  ) !important;
  --color-orange-cyan-mix: color-mix(
    in oklch,
    #ED8126,
    #3B9BA1
  ) !important;
  --color-orange-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #ED8126, #3B9BA1)
      20%,
    transparent
  ) !important;
  --color-orange-green-mix: color-mix(
    in oklch,
    #ED8126,
    #689523
  ) !important;
  --color-orange-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #ED8126, #689523)
      20%,
    transparent
  ) !important;
  --color-orange-pink-mix: color-mix(
    in oklch,
    #ED8126,
    #E389CA
  ) !important;
  --color-orange-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #ED8126, #E389CA)
      20%,
    transparent
  ) !important;
  --color-orange-purple-mix: color-mix(
    in oklch,
    #ED8126,
    #6F49AE
  ) !important;
  --color-orange-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #ED8126, #6F49AE)
      20%,
    transparent
  ) !important;
  --color-orange-red-mix: color-mix(
    in oklch,
    #ED8126,
    #EB5325
  ) !important;
  --color-orange-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #ED8126, #EB5325)
      20%,
    transparent
  ) !important;
  --color-orange-rgb: rgb(237, 129, 38) !important;
  --color-orange-yellow-mix: color-mix(
    in oklch,
    #ED8126,
    #E8C62A
  ) !important;
  --color-orange-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #ED8126, #E8C62A)
      20%,
    transparent
  ) !important;
  --color-pink: #E389CA !important;
  --color-pink-blue-mix: color-mix(
    in oklch,
    #E389CA,
    #5c9fe4
  ) !important;
  --color-pink-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E389CA, #5c9fe4)
      20%,
    transparent
  ) !important;
  --color-pink-cyan-mix: color-mix(
    in oklch,
    #E389CA,
    #3B9BA1
  ) !important;
  --color-pink-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E389CA, #3B9BA1)
      20%,
    transparent
  ) !important;
  --color-pink-green-mix: color-mix(
    in oklch,
    #E389CA,
    #689523
  ) !important;
  --color-pink-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E389CA, #689523)
      20%,
    transparent
  ) !important;
  --color-pink-orange-mix: color-mix(
    in oklch,
    #E389CA,
    #ED8126
  ) !important;
  --color-pink-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E389CA, #ED8126)
      20%,
    transparent
  ) !important;
  --color-pink-purple-mix: color-mix(
    in oklch,
    #E389CA,
    #6F49AE
  ) !important;
  --color-pink-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E389CA, #6F49AE)
      20%,
    transparent
  ) !important;
  --color-pink-red-mix: color-mix(
    in oklch,
    #E389CA,
    #EB5325
  ) !important;
  --color-pink-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E389CA, #EB5325)
      20%,
    transparent
  ) !important;
  --color-pink-rgb: rgb(227, 137, 202) !important;
  --color-pink-yellow-mix: color-mix(
    in oklch,
    #E389CA,
    #E8C62A
  ) !important;
  --color-pink-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E389CA, #E8C62A)
      20%,
    transparent
  ) !important;
  --color-purple: #6F49AE !important;
  --color-purple-blue-mix: color-mix(
    in oklch,
    #6F49AE,
    #5c9fe4
  ) !important;
  --color-purple-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #6F49AE, #5c9fe4)
      20%,
    transparent
  ) !important;
  --color-purple-cyan-mix: color-mix(
    in oklch,
    #6F49AE,
    #3B9BA1
  ) !important;
  --color-purple-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #6F49AE, #3B9BA1)
      20%,
    transparent
  ) !important;
  --color-purple-green-mix: color-mix(
    in oklch,
    #6F49AE,
    #689523
  ) !important;
  --color-purple-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #6F49AE, #689523)
      20%,
    transparent
  ) !important;
  --color-purple-orange-mix: color-mix(
    in oklch,
    #6F49AE,
    #ED8126
  ) !important;
  --color-purple-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #6F49AE, #ED8126)
      20%,
    transparent
  ) !important;
  --color-purple-pink-mix: color-mix(
    in oklch,
    #6F49AE,
    #E389CA
  ) !important;
  --color-purple-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #6F49AE, #E389CA)
      20%,
    transparent
  ) !important;
  --color-purple-red-mix: color-mix(
    in oklch,
    #6F49AE,
    #EB5325
  ) !important;
  --color-purple-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #6F49AE, #EB5325)
      20%,
    transparent
  ) !important;
  --color-purple-rgb: rgb(111, 73, 174) !important;
  --color-purple-yellow-mix: color-mix(
    in oklch,
    #6F49AE,
    #E8C62A
  ) !important;
  --color-purple-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #6F49AE, #E8C62A)
      20%,
    transparent
  ) !important;
  --color-red: #EB5325 !important;
  --color-red-blue-mix: color-mix(
    in oklch,
    #EB5325,
    #5c9fe4
  ) !important;
  --color-red-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #EB5325, #5c9fe4)
      20%,
    transparent
  ) !important;
  --color-red-cyan-mix: color-mix(
    in oklch,
    #EB5325,
    #3B9BA1
  ) !important;
  --color-red-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #EB5325, #3B9BA1)
      20%,
    transparent
  ) !important;
  --color-red-green-mix: color-mix(
    in oklch,
    #EB5325,
    #689523
  ) !important;
  --color-red-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #EB5325, #689523)
      20%,
    transparent
  ) !important;
  --color-red-orange-mix: color-mix(
    in oklch,
    #EB5325,
    #ED8126
  ) !important;
  --color-red-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #EB5325, #ED8126)
      20%,
    transparent
  ) !important;
  --color-red-pink-mix: color-mix(
    in oklch,
    #EB5325,
    #E389CA
  ) !important;
  --color-red-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #EB5325, #E389CA)
      20%,
    transparent
  ) !important;
  --color-red-purple-mix: color-mix(
    in oklch,
    #EB5325,
    #6F49AE
  ) !important;
  --color-red-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #EB5325, #6F49AE)
      20%,
    transparent
  ) !important;
  --color-red-rgb: rgb(235, 83, 37) !important;
  --color-red-yellow-mix: color-mix(
    in oklch,
    #EB5325,
    #E8C62A
  ) !important;
  --color-red-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #EB5325, #E8C62A)
      20%,
    transparent
  ) !important;
  --color-yellow: #E8C62A !important;
  --color-yellow-blue-mix: color-mix(
    in oklch,
    #E8C62A,
    #5c9fe4
  ) !important;
  --color-yellow-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E8C62A, #5c9fe4)
      20%,
    transparent
  ) !important;
  --color-yellow-cyan-mix: color-mix(
    in oklch,
    #E8C62A,
    #3B9BA1
  ) !important;
  --color-yellow-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E8C62A, #3B9BA1)
      20%,
    transparent
  ) !important;
  --color-yellow-green-mix: color-mix(
    in oklch,
    #E8C62A,
    #689523
  ) !important;
  --color-yellow-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E8C62A, #689523)
      20%,
    transparent
  ) !important;
  --color-yellow-orange-mix: color-mix(
    in oklch,
    #E8C62A,
    #ED8126
  ) !important;
  --color-yellow-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E8C62A, #ED8126)
      20%,
    transparent
  ) !important;
  --color-yellow-pink-mix: color-mix(
    in oklch,
    #E8C62A,
    #E389CA
  ) !important;
  --color-yellow-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E8C62A, #E389CA)
      20%,
    transparent
  ) !important;
  --color-yellow-purple-mix: color-mix(
    in oklch,
    #E8C62A,
    #6F49AE
  ) !important;
  --color-yellow-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E8C62A, #6F49AE)
      20%,
    transparent
  ) !important;
  --color-yellow-red-mix: color-mix(
    in oklch,
    #E8C62A,
    #EB5325
  ) !important;
  --color-yellow-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, #E8C62A, #EB5325)
      20%,
    transparent
  ) !important;
  --color-yellow-rgb: rgb(232, 198, 42) !important;
  --dark: #080808 !important;
  --darkgray: #080808 !important;
  --dimmed: 0.55 !important;
  --divider-color: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --divider-color-hover: color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ) !important;
  --drag-ghost-background: #DDDCD6 !important;
  --drag-ghost-text-color: color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ) !important;
  --dropdown-background: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --dropdown-background-hover: #FAF7EF !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ), inset 0 0 0 1px color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --embed-border-start: 2px solid color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ) !important;
  --expand: 110% !important;
  --file-header-background: #FAF7EF !important;
  --file-header-background-focused: #FAF7EF !important;
  --file-header-font-size: 14.56227px !important;
  --file-line-width: 50rem !important;
  --flair-background: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --flair-color: #080808 !important;
  --flexcyon-accent: #5770B9 !important;
  --flexcyon-accent-h: 225 !important;
  --flexcyon-accent-l: 53% !important;
  --flexcyon-accent-s: 41% !important;
  --flexcyon-active-indicator: '>> ' !important;
  --flexcyon-alt-link-opacity: 55% !important;
  --flexcyon-anim-duration: 0.3ms !important;
  --flexcyon-anim-easing: ease-in-out !important;
  --flexcyon-anim-rotate-amount: 50deg !important;
  --flexcyon-anim-slide-amount: 56.63105px !important;
  --flexcyon-anim-start-opacity: 0.55 !important;
  --flexcyon-anim-start-scale-amt: 0.33 !important;
  --flexcyon-ascii-alignment: left !important;
  --flexcyon-ascii-art: ' _______________ ___ ____/__ /________ ____________ ______________ __ /_ __ /_ _ \\_ |/_/ ___/_ / / / __ \\_ __ \\ _ __/ _ / / __/_ / /__ _ /_/ // /_/ / / / / /_/ /_/ \\___//_/|_| \\___/ _\\__, / \\____//_/ /_/ /____/  ' !important;
  --flexcyon-ascii-checkboxes-font-size: 1.2rem !important;
  --flexcyon-ascii-line-height: 1.5 !important;
  --flexcyon-ascii-max-font-size: 14px !important;
  --flexcyon-ascii-max-width: 50rem !important;
  --flexcyon-ascii-scaling-factor: 1 !important;
  --flexcyon-base-01: #FAF7EF !important;
  --flexcyon-base-01-02-mix: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --flexcyon-base-02: #EDEBE5 !important;
  --flexcyon-base-02-03-mix: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --flexcyon-base-03: #DDDCD6 !important;
  --flexcyon-base-03-04-mix: color-mix(
    in oklch,
    #DDDCD6,
    #D3D3CE
  ) !important;
  --flexcyon-base-04: #D3D3CE !important;
  --flexcyon-base-04-05-mix: color-mix(
    in oklch,
    #D3D3CE,
    #B4B3AF
  ) !important;
  --flexcyon-base-05: #B4B3AF !important;
  --flexcyon-base-grey-dark: #797876 !important;
  --flexcyon-base-grey-light: #080808 !important;
  --flexcyon-base-grey-mix: color-mix(
    in oklch,
    #080808,
    #797876
  ) !important;
  --flexcyon-base-grey-scroll: #3f495e !important;
  --flexcyon-base-grey-scroll-hover: #5c6782 !important;
  --flexcyon-base-grey-tab: #71777f !important;
  --flexcyon-base-grey-token: #586582 !important;
  --flexcyon-bases-card-delay-factor: 12.5 !important;
  --flexcyon-bases-card-flex-grow: 0.55 !important;
  --flexcyon-bases-card-padding: 8px
    0px
    0px
    2px !important;
  --flexcyon-bases-card-padding-bottom: 0px !important;
  --flexcyon-bases-card-padding-left: 2px !important;
  --flexcyon-bases-card-padding-right: 0px !important;
  --flexcyon-bases-card-padding-top: 8px !important;
  --flexcyon-bases-cards-label-opacity: 0.85 !important;
  --flexcyon-bases-padding-horiz: 16px !important;
  --flexcyon-bases-padding-verti: 16px !important;
  --flexcyon-bases-table-content-alignment: left !important;
  --flexcyon-bases-td-padding-l: 2px !important;
  --flexcyon-bg-image-blend-mode: darken !important;
  --flexcyon-bg-image-blur: 0px !important;
  --flexcyon-bg-image-position: center !important;
  --flexcyon-bg-image-repeat: no-repeat !important;
  --flexcyon-bg-image-sidebar-left-url: url("") !important;
  --flexcyon-bg-image-sidebar-right-url: url("") !important;
  --flexcyon-bg-image-size: contain !important;
  --flexcyon-block-label-opacity: 0.55 !important;
  --flexcyon-blue: #5c9fe4 !important;
  --flexcyon-brightness-ratio: 1 !important;
  --flexcyon-callout-bg-opacity: 20% !important;
  --flexcyon-callout-first-codeblock-margin-top: 1rem !important;
  --flexcyon-callout-flashcard-animation-duration: 0.5ms !important;
  --flexcyon-callout-horiz-padding: 24px !important;
  --flexcyon-callout-icon-right-padding: 4px !important;
  --flexcyon-callout-pop-animation-duration: 0.2ms !important;
  --flexcyon-callout-radix: 16px !important;
  --flexcyon-callout-verti-padding: 12px !important;
  --flexcyon-callout-vertical-margin: 1em !important;
  --flexcyon-callouts-flashcard-height: 250px !important;
  --flexcyon-callouts-flashcard-width: 250px !important;
  --flexcyon-canvas-blur-intensity: 1px !important;
  --flexcyon-code-error: #EB5325 !important;
  --flexcyon-code-file-ext-font-w: 500 !important;
  --flexcyon-code-file-ext-prefix: '.' !important;
  --flexcyon-code-function: #E8C62A !important;
  --flexcyon-code-keyword: #3B9BA1 !important;
  --flexcyon-code-operator: #5c9fe4 !important;
  --flexcyon-code-variable: #3B9BA1 !important;
  --flexcyon-codeblock-fmt-ext: lowercase !important;
  --flexcyon-comm-item-opacity: 0.89 !important;
  --flexcyon-comm-text-padding: 3px 16px !important;
  --flexcyon-contrast-ratio: 1 !important;
  --flexcyon-cursor-duration: 42.5ms !important;
  --flexcyon-cursor-timing-fn: ease-in !important;
  --flexcyon-cursor-type: auto !important;
  --flexcyon-cust-hr-str: 'f' !important;
  --flexcyon-cust-hr-str-font-size: 1.11803em !important;
  --flexcyon-cust-hr-str-horiz-padding: 8px !important;
  --flexcyon-cyan: #3B9BA1 !important;
  --flexcyon-dataview-horizontal-padding: 8px !important;
  --flexcyon-default-ol-style: decimal !important;
  --flexcyon-editor-bg-color: color-mix(
    in oklch,
    color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ),
    #EDEBE5
  ) !important;
  --flexcyon-editor-bg-color-2: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --flexcyon-editor-bg-rotation: 0deg !important;
  --flexcyon-editor-bg-width: 15px !important;
  --flexcyon-editor-dot-size: 2.5px !important;
  --flexcyon-editor-margin-top: 18px !important;
  --flexcyon-editor-writing-indentation: 16px !important;
  --flexcyon-exp-dimmed-nav-size: 13.3623px !important;
  --flexcyon-external-link-color: #5C9FE4 !important;
  --flexcyon-external-link-hover: color-mix(
    in oklch shorter hue,
    #5C9FE4,
    #797876
  ) !important;
  --flexcyon-fc-dimmed-items-opacity: 0.89 !important;
  --flexcyon-h1-color: #5c9fe4 !important;
  --flexcyon-h2-color: #6F49AE !important;
  --flexcyon-h3-color: #3B9BA1 !important;
  --flexcyon-h4-color: #E389CA !important;
  --flexcyon-h5-color: #689523 !important;
  --flexcyon-h6-color: #E8C62A !important;
  --flexcyon-heading-1-alignment: left !important;
  --flexcyon-heading-2-alignment: left !important;
  --flexcyon-heading-3-alignment: left !important;
  --flexcyon-heading-4-alignment: left !important;
  --flexcyon-heading-5-alignment: left !important;
  --flexcyon-heading-6-alignment: left !important;
  --flexcyon-highlight-active-line-opacity: 7.5% !important;
  --flexcyon-highlight-border-radius: 4px !important;
  --flexcyon-highlight-colour: #3B9BA1 !important;
  --flexcyon-highlight-horiz-padding: 2.5px !important;
  --flexcyon-highlight-opacity: 22.5% !important;
  --flexcyon-highlight-verti-padding: 1px !important;
  --flexcyon-input-horiz-padding: 8px !important;
  --flexcyon-input-verti-padding: 8px !important;
  --flexcyon-l-spacing: 0px !important;
  --flexcyon-lime-green: #689523 !important;
  --flexcyon-link-color: #6F49AE !important;
  --flexcyon-link-hover: color-mix(
    in oklch shorter hue,
    #6F49AE,
    #797876
  ) !important;
  --flexcyon-link-unresolved-color: #6F49AE !important;
  --flexcyon-media-embed-vertical-margin: 8px !important;
  --flexcyon-meta-container-padding-left: 14px !important;
  --flexcyon-modal-bg-url: url("") !important;
  --flexcyon-modal-dark-intensity: 1 !important;
  --flexcyon-modal-image-blend-mode: lighten !important;
  --flexcyon-modal-image-blur: 0px !important;
  --flexcyon-modal-image-position: center !important;
  --flexcyon-modal-image-repeat: no-repeat !important;
  --flexcyon-modal-image-size: cover !important;
  --flexcyon-mode-view-header-title-horiz-padding: 12px !important;
  --flexcyon-mode-view-header-title-verti-padding: 4px !important;
  --flexcyon-new-tab-bg-wrapper: linear-gradient(
    to right,
    #5770B9,
    #E389CA,
    #689523
  ) !important;
  --flexcyon-new-tab-font-group: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --flexcyon-omnisearch-body-margin-left: 1.45rem !important;
  --flexcyon-orange: #ED8126 !important;
  --flexcyon-os-detail-padding-l: 12px !important;
  --flexcyon-os-detail-padding-r: 24px !important;
  --flexcyon-palette-cyan-hover: color-mix(
    in oklch shorter hue,
    #3B9BA1,
    #797876
  ) !important;
  --flexcyon-palette-lilac-hover: color-mix(
    in oklch shorter hue,
    #6F49AE,
    #797876
  ) !important;
  --flexcyon-pink: #E389CA !important;
  --flexcyon-purple-lilac: #6F49AE !important;
  --flexcyon-quote-credit: 'bladeacer' !important;
  --flexcyon-quote-credit-prefix: '-' !important;
  --flexcyon-quote-font-size: 24px !important;
  --flexcyon-quote-val: 'This is a placeholder quotein the Flexcyon Theme.' !important;
  --flexcyon-red-salmon: #EB5325 !important;
  --flexcyon-repl-active-line-str: '-' !important;
  --flexcyon-repl-active-str-space: 0px !important;
  --flexcyon-saturation-ratio: 1 !important;
  --flexcyon-screen-dimens-padding-l: 16px !important;
  --flexcyon-search-container-horiz-padding: 16px !important;
  --flexcyon-search-container-verti-padding: 8px !important;
  --flexcyon-settings-installed-tooltip-left-margin: 1rem !important;
  --flexcyon-side-toggle-button-no-ribbon: 11px 16px 7px 0px !important;
  --flexcyon-status-hide-hover-duration: 0.35ms !important;
  --flexcyon-status-hide-hover-function: ease-out !important;
  --flexcyon-status-hide-trigger-translation: 50px !important;
  --flexcyon-status-hide-until-hover-text: 'Show status' !important;
  --flexcyon-status-hide-until-hover-translation: 80vw !important;
  --flexcyon-status-live-text: 'LIVE' !important;
  --flexcyon-status-new-tab-opacity: 0.55 !important;
  --flexcyon-status-reading-text: 'READ' !important;
  --flexcyon-status-source-text: 'SOURCE' !important;
  --flexcyon-style-settings-indent-width: 4px !important;
  --flexcyon-suggestion-horiz-padding: 12px !important;
  --flexcyon-suggestion-verti-padding: 8px !important;
  --flexcyon-table-reading-mode-width: 100% !important;
  --flexcyon-td-horiz-padding: 10px !important;
  --flexcyon-td-live-pad-scale: 0.2 !important;
  --flexcyon-td-table-alignment: left !important;
  --flexcyon-td-verti-padding: 5px !important;
  --flexcyon-text-muted: #6F768599 !important;
  --flexcyon-th-horiz-padding: 10px !important;
  --flexcyon-th-live-pad-scale: 0.2 !important;
  --flexcyon-th-table-alignment: left !important;
  --flexcyon-th-verti-padding: 5px !important;
  --flexcyon-top-actions-alignment: center !important;
  --flexcyon-tree-item-horiz-padding: 10px !important;
  --flexcyon-tree-item-verti-padding: 2px !important;
  --flexcyon-typewriter-mode-opacity: 0.55 !important;
  --flexcyon-var-comps-sugg-horiz-padding: 12px !important;
  --flexcyon-var-comps-sugg-vert-padding: 7px !important;
  --flexcyon-view-header-breadcrumb-max-w: 12.5vw !important;
  --flexcyon-vim-bottom-positioning: -4px !important;
  --flexcyon-vim-command-text: 'COMMAND' !important;
  --flexcyon-vim-insert-text: 'INSERT' !important;
  --flexcyon-vim-left-positioning: 6px !important;
  --flexcyon-vim-normal-text: 'NORMAL' !important;
  --flexcyon-w-spacing: 0px !important;
  --flexcyon-yellow: #E8C62A !important;
  --flexyon-base-grey-token: #586582 !important;
  --font-mermaid: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-ui-large: 17.79833px !important;
  --font-ui-medium: 16.1803px !important;
  --font-ui-small: 14.56227px !important;
  --font-ui-smaller: 12.94424px !important;
  --footnote-divider-color: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --footnote-id-color: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --footnote-id-color-no-occurrences: #6F768599 !important;
  --footnote-input-background-active: #EDEBE5 !important;
  --footnote-line-height: 1.4 !important;
  --footnote-radius: 2px !important;
  --graph-control-horiz-padding: 12px !important;
  --graph-control-verti-padding: 6px !important;
  --graph-line: #DDDCD6 !important;
  --graph-node: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --graph-node-attachment: #E8C62A !important;
  --graph-node-focused: #5770B9 !important;
  --graph-node-tag: #6F49AE !important;
  --graph-node-unresolved: #EB5325 !important;
  --graph-text: #080808 !important;
  --gray: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --h: tan(atan2(1380px, 1px)) !important;
  --h1-color: #5c9fe4 !important;
  --h1-line-height: 1.61 !important;
  --h1-size: 1.81803em !important;
  --h2-color: #6F49AE !important;
  --h2-line-height: 1.51 !important;
  --h2-size: 1.61803em !important;
  --h2-weight: 675 !important;
  --h3-color: #3B9BA1 !important;
  --h3-line-height: 1.41 !important;
  --h3-size: 1.41803em !important;
  --h3-weight: 650 !important;
  --h4-color: #E389CA !important;
  --h4-line-height: 1.31 !important;
  --h4-size: 1.21803em !important;
  --h4-weight: 625 !important;
  --h5-color: #689523 !important;
  --h5-line-height: 1.21 !important;
  --h5-size: 1.11803em !important;
  --h5-weight: 600 !important;
  --h6-color: #E8C62A !important;
  --h6-line-height: 1.21 !important;
  --h6-size: 1.01803em !important;
  --h6-weight: 575 !important;
  --heading-formatting: #6F768599 !important;
  --highlight: color-mix(
    in oklch,
    #3B9BA1 22.5%,
    transparent
  ) !important;
  --hr-color: #393E48 !important;
  --icon-color: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --icon-color-active: color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ) !important;
  --icon-color-focused: color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ) !important;
  --icon-color-hover: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --icon-stroke: 2px !important;
  --icon-xs: 12.25px !important;
  --img-border-radius: 15px !important;
  --inline-title-color: #5c9fe4 !important;
  --inline-title-size: 1.802em !important;
  --input-date-separator: #6F768599 !important;
  --input-padding: 8px
    8px !important;
  --input-placeholder-color: #6F768599 !important;
  --input-radius: 0px !important;
  --interactive-accent: color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ) !important;
  --interactive-accent-hover: color-mix(
    in oklch shorter hue,
    #5770B9 75%,
    transparent
  ) !important;
  --interactive-accent-hsl: 225, 41%, 53% !important;
  --interactive-hover: #FAF7EF !important;
  --interactive-normal: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --italic-color: #5770B9 !important;
  --less-letter-spacing: -3px !important;
  --light: #FAF7EF !important;
  --lightgray: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --line-height-normal: 1.4 !important;
  --line-height-tight: 1.25 !important;
  --link-color: #6F49AE !important;
  --link-color-hover: color-mix(
    in oklch shorter hue,
    #6F49AE,
    #797876
  ) !important;
  --link-external-color: #5C9FE4 !important;
  --link-external-color-hover: color-mix(
    in oklch shorter hue,
    #5C9FE4,
    #797876
  ) !important;
  --link-unresolved-color: #6F49AE !important;
  --link-unresolved-decoration-color: #6F49AE !important;
  --link-unresolved-decoration-style: dashed !important;
  --list-marker-color: #3B9BA1 !important;
  --list-marker-color-collapsed: #689523 !important;
  --list-marker-color-hover: color-mix(
    in oklch shorter hue,
    #3B9BA1,
    #797876
  ) !important;
  --menu-background: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --menu-border-color: transparent !important;
  --menu-radius: 4px !important;
  --metadata-border-color: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --metadata-divider-color: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --metadata-input-background-active: #EDEBE5 !important;
  --metadata-input-text-color: #080808 !important;
  --metadata-label-background-active: #EDEBE5 !important;
  --metadata-label-text-color: #6F49AE !important;
  --metadata-label-text-color-hover: color-mix(
    in oklch shorter hue,
    #6F49AE,
    #797876
  ) !important;
  --metadata-property-background-active: #EDEBE5 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(
    in oklch,
    #DDDCD6,
    #D3D3CE
  ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --metadata-sidebar-input-font-size: 14.56227px !important;
  --metadata-sidebar-label-font-size: 14.56227px !important;
  --modal-background: #FAF7EF !important;
  --modal-border-color: #EDEBE5 !important;
  --modal-radius: 6px !important;
  --nav-collapse-icon-color: #6F768599 !important;
  --nav-collapse-icon-color-collapsed: #6F768599 !important;
  --nav-heading-color: #080808 !important;
  --nav-heading-color-collapsed: #6F768599 !important;
  --nav-heading-color-collapsed-hover: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --nav-heading-color-hover: #080808 !important;
  --nav-item-background-active: #EDEBE5 !important;
  --nav-item-background-hover: #EDEBE5 !important;
  --nav-item-background-selected: #DDDCD6 !important;
  --nav-item-color: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --nav-item-color-active: color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ) !important;
  --nav-item-color-highlighted: #5770B9 !important;
  --nav-item-color-hover: #080808 !important;
  --nav-item-color-selected: #ED8126 !important;
  --nav-item-radius: 2px !important;
  --nav-item-size: 14.56227px !important;
  --nav-tag-color: #6F768599 !important;
  --nav-tag-color-active: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --nav-tag-color-hover: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --nav-tag-radius: 2px !important;
  --oz-fta-all-panes-active-text-color: #080808 !important;
  --oz-fta-file-font-size: calc(16.1803px - 0.1rem) !important;
  --oz-fta-file-pane-file-name-color: #6F768599 !important;
  --oz-fta-folder-font-size: calc(16.1803px - 0.1rem) !important;
  --oz-fta-folder-pane-file-name-color: #080808 !important;
  --oz-fta-folder-panes-file-name-color: #080808 !important;
  --pdf-background: #FAF7EF !important;
  --pdf-page-background: #FAF7EF !important;
  --pdf-sidebar-background: #FAF7EF !important;
  --pill-border-color: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --pill-border-color-hover: transparent !important;
  --pill-color: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --pill-color-hover: #080808 !important;
  --pill-color-remove: #6F768599 !important;
  --pill-color-remove-hover: #5770B9 !important;
  --prompt-background: #FAF7EF !important;
  --prompt-border-color: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --r-background-color: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --r-heading-color: #080808 !important;
  --r-heading-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --r-heading-margin: 16px 0px !important;
  --r-heading-text-transform: capitalize !important;
  --r-heading1-size: 1.81803em !important;
  --r-heading2-size: 1.61803em !important;
  --r-heading3-size: 1.41803em !important;
  --r-heading4-size: 1.21803em !important;
  --r-link-color: hsl(
    205 34.85%
      58.3% / 87.5%
  ) !important;
  --r-main-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --r-main-font-size: max-content !important;
  --radius-l: 6px !important;
  --radius-m: 4px !important;
  --radius-s: 2px !important;
  --radius-x1: 8px !important;
  --radius-xl: 8px !important;
  --raised-background: color-mix(in srgb, #FAF7EF 65%, transparent) linear-gradient(#FAF7EF, color-mix(in srgb, #FAF7EF 65%, transparent)) !important;
  --ribbon-background: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --ribbon-background-collapsed: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --ribbon-width: 48px !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-radius: 6px !important;
  --search-clear-button-color: #EB5325 !important;
  --search-icon-color: #5770B9 !important;
  --search-result-background: #FAF7EF !important;
  --secondary: #5770B9 !important;
  --setting-group-heading-color: #080808 !important;
  --setting-group-heading-size: 16.1803px !important;
  --setting-items-border-color: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --setting-items-padding: 2px 0px !important;
  --settings-background: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --slider-thumb-border-color: transparent !important;
  --slider-track-background: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --status-bar-background: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --status-bar-border-color: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --status-bar-font-size: 13.753255px !important;
  --status-bar-position: absolute !important;
  --status-bar-radius: 4px 0 0 0 !important;
  --status-bar-text-color: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --suggestion-background: #FAF7EF !important;
  --sync-avatar-color-1: #EB5325 !important;
  --sync-avatar-color-2: #ED8126 !important;
  --sync-avatar-color-3: #E8C62A !important;
  --sync-avatar-color-4: #689523 !important;
  --sync-avatar-color-5: #3B9BA1 !important;
  --sync-avatar-color-6: #5c9fe4 !important;
  --sync-avatar-color-7: #6F49AE !important;
  --sync-avatar-color-8: #E389CA !important;
  --tab-background-active: #FAF7EF !important;
  --tab-container-background: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --tab-font-size: 14.56227px !important;
  --tab-outline-color: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --tab-outline-width: 0px !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-stacked-font-size: 14.56227px !important;
  --tab-switcher-background: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ), transparent) !important;
  --tab-switcher-preview-radius: 8px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(225, 41%, 53%) !important;
  --tab-text-color: #B4B3AF !important;
  --tab-text-color-active: #5770B9 !important;
  --tab-text-color-focused: #B4B3AF !important;
  --tab-text-color-focused-active: #5770B9 !important;
  --tab-text-color-focused-active-current: #5770B9 !important;
  --tab-text-color-focused-highlighted: #5770B9 !important;
  --table-add-button-border-color: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --table-background: #FAF7EF !important;
  --table-border-color: #6F768566 !important;
  --table-column-alt-background: #FAF7EF !important;
  --table-drag-handle-background-active: color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ) !important;
  --table-drag-handle-color: #6F768599 !important;
  --table-drag-handle-color-active: #DDDCD6 !important;
  --table-header-background: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --table-header-background-hover: #FAF7EF !important;
  --table-header-border-color: #6F768566 !important;
  --table-header-color: #080808 !important;
  --table-header-size: large !important;
  --table-line-height: 1.25 !important;
  --table-row-alt-background-hover: #FAF7EF !important;
  --table-row-background-hover: #FAF7EF !important;
  --table-selection: hsla(225, 41%, 53%, 0.1) !important;
  --table-selection-border-color: color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ) !important;
  --table-text-size: 16.1803px !important;
  --tag-background: color-mix(in oklch, #3B9BA1 25%, transparent) !important;
  --tag-background-hover: color-mix(
    in oklch,
    color-mix(
    in oklch shorter hue,
    #3B9BA1,
    #797876
  ) 25%,
    transparent
  ) !important;
  --tag-border-color: hsla(225, 41%, 53%, 0.15) !important;
  --tag-border-color-hover: hsla(225, 41%, 53%, 0.15) !important;
  --tag-color: #3B9BA1 !important;
  --tag-color-hover: color-mix(
    in oklch shorter hue,
    #3B9BA1,
    #797876
  ) !important;
  --tag-decoration-hover: underline !important;
  --tertiary: color-mix(
    in oklch shorter hue,
    #5770B9 75%,
    transparent
  ) !important;
  --text-accent: #5770B9 !important;
  --text-error: #EB5325 !important;
  --text-faint: #6F768599 !important;
  --text-highlight-bg: color-mix(
    in oklch,
    #3B9BA1 22.5%,
    transparent
  ) !important;
  --text-muted: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --text-normal: #080808 !important;
  --text-on-accent: #DDDCD6 !important;
  --text-selection: color-mix(
    in oklch shorter hue,
    #D3D3CE 20%,
    transparent
  ) !important;
  --text-success: #689523 !important;
  --text-warning: #EB5325 !important;
  --textHighlight: color-mix(
    in oklch,
    #3B9BA1 22.5%,
    transparent
  ) !important;
  --titlebar-background: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --titlebar-background-focused: color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) !important;
  --titlebar-border-color: color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ) !important;
  --titlebar-text-color: #6F768599 !important;
  --titlebar-text-color-focused: color-mix(
    in oklch,
    #6F768599,
    #080808
  ) !important;
  --toggle-thumb-color: #DDDCD6 !important;
  --upsize: 103% !important;
  --vault-name-color: color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ) !important;
  --vault-profile-color: #080808 !important;
  --vault-profile-color-hover: #080808 !important;
  --vault-profile-font-size: 14.56227px !important;
  --w: tan(atan2(2538px, 1px)) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.965356 0.0102416 none);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(250, 247, 239);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgba(111, 118, 133, 0.4);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(250, 247, 239);
  border-color: rgba(111, 118, 133, 0.4);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(250, 247, 239);
  border-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .note-properties {
  border-color: oklch(0.916763 0.00824887 none);
}

html[saved-theme="light"] body .note-properties-key {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: oklch(0.636083 0.0886418 200.983 / 0.25);
  color: rgb(59, 155, 161);
}

html[saved-theme="light"] body .note-properties-value {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.965356 0.0102416 none);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.916763 0.00824887 none);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.965356 0.0102416 none);
  border-left-color: oklch(0.916763 0.00824887 none);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 247, 239);
  color: rgb(8, 8, 8);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(235, 83, 37);
  outline: rgb(235, 83, 37) none 0px;
  text-decoration-color: rgb(235, 83, 37);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(87, 112, 185);
  outline: rgb(87, 112, 185) none 0px;
  text-decoration-color: rgb(87, 112, 185);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(87, 112, 185);
  outline: rgb(87, 112, 185) none 0px;
  text-decoration-color: rgb(87, 112, 185);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(235, 83, 37);
  outline: rgb(235, 83, 37) none 0px;
  text-decoration-color: rgb(235, 83, 37);
}

html[saved-theme="light"] body .text-highlight {
  background-color: oklch(0.636083 0.0886418 200.983 / 0.225);
  color: rgb(8, 8, 8);
  font-weight: 525;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body del {
  color: rgb(8, 8, 8);
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(8, 8, 8);
  font-size: 14.5623px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(92, 159, 228);
  border-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(111, 73, 174);
  border-color: rgb(111, 73, 174);
}

html[saved-theme="light"] body p {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
  outline: oklch(0.29593 0.00924516 265.685 / 0.8) none 0px;
  text-decoration-color: oklch(0.29593 0.00924516 265.685 / 0.8);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(92, 159, 228);
  outline: rgb(92, 159, 228) none 0px;
  text-decoration-color: rgb(92, 159, 228);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(111, 73, 174);
  outline: rgb(111, 73, 174) none 0px;
  text-decoration-color: rgb(111, 73, 174);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(111, 73, 174);
  outline: rgb(111, 73, 174) none 0px;
  text-decoration: underline dashed rgb(111, 73, 174);
  text-decoration-color: rgb(111, 73, 174);
  text-decoration-style: dashed;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body dt {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ol > li {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ul > li {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(111, 118, 133, 0.6);
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: oklch(0.965356 0.0102416 none);
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: rgb(8, 8, 8);
  width: 766px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(250, 247, 239);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: rgb(8, 8, 8);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  text-align: left;
}

html[saved-theme="light"] body th {
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: rgb(8, 8, 8);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  text-align: left;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
}

html[saved-theme="light"] body tr {
  background-color: oklch(0.916763 0.00824887 none);
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.965356 0.0102416 none);
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-right-color: oklch(0.916763 0.00824887 none);
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.965356 0.0102416 none);
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-right-color: oklch(0.916763 0.00824887 none);
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(232, 198, 42);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(232, 198, 42);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(232, 198, 42);
  border-left-color: rgb(232, 198, 42);
  border-right-color: rgb(232, 198, 42);
  border-top-color: rgb(232, 198, 42);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: oklch(0.965356 0.0102416 none);
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-right-color: oklch(0.916763 0.00824887 none);
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: oklch(0.965356 0.0102416 none);
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-right-color: oklch(0.916763 0.00824887 none);
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(92, 159, 228);
  border-left-color: rgb(92, 159, 228);
  border-right-color: rgb(92, 159, 228);
  border-top-color: rgb(92, 159, 228);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(237, 235, 229);
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: oklch(0.559434 0.117277 268.207 / 0.8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(92, 159, 228);
  border-right-color: rgb(92, 159, 228);
  border-top-color: rgb(92, 159, 228);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(232, 198, 42);
  content: "--";
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(111, 73, 174);
  content: "!";
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(227, 137, 202);
  content: "?";
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  color: rgb(232, 198, 42);
  content: "...";
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  color: rgb(59, 155, 161);
  content: "‘";
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(104, 149, 35);
  content: "“";
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(92, 159, 228);
  content: "@";
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(111, 73, 174);
  content: "*";
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(237, 129, 38);
  content: "/";
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  color: rgb(104, 149, 35);
  content: "#";
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  color: rgb(227, 137, 202);
  content: "%";
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(104, 149, 35);
  content: "+";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(237, 129, 38);
  content: "<";
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(59, 155, 161);
  content: ">";
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(235, 83, 37);
  content: "~";
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  color: rgb(235, 83, 37);
  content: "$";
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 83, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 83, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 83, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 83, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(59, 155, 161);
  content: "i";
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 198, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 198, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(111, 73, 174);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 83, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 149, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 149, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 149, 35);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(111, 118, 133, 0.6);
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: #6F768599;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: #6F768599;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: #6F768599;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: #6F768599;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: #6F768599;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: #6F768599;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: #6F768599;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: #6F768599;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: #6F768599;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: #6F768599;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: #6F768599;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: #6F768599;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: #6F768599;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(250, 247, 239);
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-right-color: oklch(0.916763 0.00824887 none);
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(250, 247, 239);
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-right-color: oklch(0.916763 0.00824887 none);
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(8, 8, 8);
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(237, 235, 229);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-right-color: oklch(0.916763 0.00824887 none);
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: oklch(0.965356 0.0102416 none);
  border-left-color: oklch(0.559434 0.117277 268.207 / 0.8);
  border-right-color: oklch(0.559434 0.117277 268.207 / 0.8);
  border-top-color: oklch(0.559434 0.117277 268.207 / 0.8);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(237, 235, 229);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(237, 235, 229);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: oklch(0.636083 0.0886418 200.983 / 0.25);
  border-bottom-color: rgba(86, 111, 184, 0.15);
  border-left-color: rgba(86, 111, 184, 0.15);
  border-right-color: rgba(86, 111, 184, 0.15);
  border-top-color: rgba(86, 111, 184, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(59, 155, 161);
}

html[saved-theme="light"] body h1 {
  color: rgb(92, 159, 228);
}

html[saved-theme="light"] body h2 {
  color: rgb(111, 73, 174);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(92, 159, 228);
}

html[saved-theme="light"] body h3 {
  color: rgb(59, 155, 161);
}

html[saved-theme="light"] body h4 {
  color: rgb(227, 137, 202);
}

html[saved-theme="light"] body h5 {
  color: rgb(104, 149, 35);
}

html[saved-theme="light"] body h6 {
  color: rgb(232, 198, 42);
}

html[saved-theme="light"] body hr {
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-left-color: oklch(0.916763 0.00824887 none);
  border-right-color: oklch(0.916763 0.00824887 none);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: #6F768599;
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(8, 8, 8);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-left-radius: 4px;
  border-top-width: 0px;
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body footer ul li a {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body .darkmode svg {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
  stroke: oklch(0.29593 0.00924516 265.685 / 0.8);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  background-color: oklch(0.916763 0.00824887 none);
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 0px;
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-left-radius: 16px;
  border-top-right-radius: 0px;
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(111, 118, 133, 0.6);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-left-color: oklch(0.916763 0.00824887 none);
  border-right-color: oklch(0.916763 0.00824887 none);
  border-top-color: oklch(0.916763 0.00824887 none);
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
  padding-left: 14px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body abbr {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(111, 73, 174);
  border-left-color: rgb(111, 73, 174);
  border-right-color: rgb(111, 73, 174);
  border-top-color: rgb(111, 73, 174);
  color: rgb(111, 73, 174);
}

html[saved-theme="light"] body kbd {
  background-color: oklch(0.965356 0.0102416 none);
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body sub {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body summary {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body sup {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: oklch(0.636083 0.0886418 200.983 / 0.25);
  border-bottom-color: rgba(86, 111, 184, 0.15);
  border-left-color: rgba(86, 111, 184, 0.15);
  border-right-color: rgba(86, 111, 184, 0.15);
  border-top-color: rgba(86, 111, 184, 0.15);
  color: rgb(59, 155, 161);
}`,
  },
};
