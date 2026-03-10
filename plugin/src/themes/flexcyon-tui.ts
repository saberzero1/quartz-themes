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
  --accent-h: 105.5;
  --accent-l: 59.5%;
  --accent-s: 77.5%;
  --background-modifier-active-hover: #24262C;
  --background-modifier-border: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --background-modifier-border-focus: color-mix(
    in hsl,
    #24262C,
    #4D566B
  );
  --background-modifier-border-hover: transparent;
  --background-modifier-error: rgba(
    rgb(192, 58, 71),
    0.85
  );
  --background-modifier-error-hover: #C03A47;
  --background-modifier-error-rgb: rgb(192, 58, 71);
  --background-modifier-form-field: #24262C;
  --background-modifier-form-field-hover: #24262C;
  --background-modifier-hover: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --background-modifier-message: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --background-modifier-success: #A1C05C;
  --background-modifier-success-rgb: rgb(161, 192, 92);
  --background-primary: #191D28;
  --background-primary-alt: #24262C;
  --background-secondary: #14161C;
  --background-secondary-alt: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --bases-border-r: 16px;
  --bases-cards-background: #191D28;
  --bases-cards-cover-background: #14161C;
  --bases-cards-group-padding: 16px;
  --bases-cards-radius: 4px;
  --bases-cards-shadow: 0 0 0 1px color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --bases-cards-shadow-hover: 0 0 0 1px transparent;
  --bases-embed-border-color: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --bases-embed-border-radius: 2px;
  --bases-embed-padding: 4px;
  --bases-group-heading-property-color: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --bases-group-heading-property-size: 12.94424px;
  --bases-no-img-str: 'No image path could be found for this file';
  --bases-table-border-color: #6F768566;
  --bases-table-cell-background-active: #191D28;
  --bases-table-cell-background-disabled: #24262C;
  --bases-table-cell-background-selected: rgba(112, 233, 73, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(
    in hsl,
    #24262C,
    #4D566B
  );
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(147, 238, 109);
  --bases-table-container-border-radius: 2px;
  --bases-table-group-background: #24262C;
  --bases-table-header-background: #191D28;
  --bases-table-header-background-hover: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --bases-table-header-color: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --bases-table-row-background-hover: #191D28;
  --bases-table-summary-background: #191D28;
  --bases-table-summary-background-hover: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --blockquote-border-color: rgb(147, 238, 109);
  --blur-background: color-mix(in srgb, color-mix(
    in hsl,
    #14161C,
    #191D28
  ) 65%, transparent) linear-gradient(color-mix(
    in hsl,
    #14161C,
    #191D28
  ), color-mix(in srgb, color-mix(
    in hsl,
    #14161C,
    #191D28
  ) 65%, transparent));
  --bold-color: #C03A47;
  --button-radius: 0px;
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
  --canvas-background: #191D28;
  --canvas-card-label-color: #6F768599;
  --canvas-color-1: rgb(192, 58, 71);
  --canvas-color-2: rgb(204, 132, 73);
  --canvas-color-3: rgb(194, 158, 66);
  --canvas-color-4: rgb(161, 192, 92);
  --canvas-color-5: rgb(60, 185, 194);
  --canvas-color-6: rgb(164, 97, 200);
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: color-mix(
    in hsl,
    #24262C,
    #4D566B
  );
  --caret-color: #D3D5D3;
  --checkbox-border-color: #5a8fcd;
  --checkbox-border-color-hover: color-mix(
    in hsl shorter hue,
    #A461C8,
    #898C93
  );
  --checkbox-color: #A461C8;
  --checkbox-color-hover: color-mix(
    in hsl shorter hue,
    #A461C8,
    #898C93
  );
  --checkbox-marker-color: #191D28;
  --checkbox-radius: 2px;
  --checklist-done-color: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --clickable-icon-radius: 0;
  --cm-font-size: 15.37127px;
  --cm-panel-bg: #14161C;
  --code-background: #14161C;
  --code-border-color: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --code-bracket-background: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --code-comment: #6F768599;
  --code-function: #C29E42;
  --code-important: #C03A47;
  --code-keyword: #3CB9C2;
  --code-normal: #D3D5D3;
  --code-operator: #5a8fcd;
  --code-property: #3CB9C2;
  --code-punctuation: rgba(rgb(192, 58, 71), 0.55);
  --code-radius: 2px;
  --code-string: #A1C05C;
  --code-tag: #898C93;
  --code-value: #C29E42;
  --collapse-icon-color: #6F768599;
  --collapse-icon-color-collapsed: rgb(147, 238, 109);
  --color-accent: rgb(112, 233, 73);
  --color-accent-1: rgb(147, 238, 109);
  --color-accent-2: hsla(
    85.5,
    66%,
    65%,
    88%
  );
  --color-accent-hsl: 105.5, 77.5%, 59.5%;
  --color-base-00: #14161C;
  --color-base-05: color-mix(
    in hsl,
    #14161C,
    #191D28
  );
  --color-base-10: #191D28;
  --color-base-100: #D3D5D3;
  --color-base-20: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --color-base-25: #24262C;
  --color-base-30: color-mix(
    in hsl,
    #24262C,
    #4D566B
  );
  --color-base-35: #4D566B;
  --color-base-40: color-mix(
    in hsl,
    #4D566B,
    #6F7685
  );
  --color-base-50: #6F7685;
  --color-base-60: #898C93;
  --color-base-70: color-mix(
    in hsl,
    #D3D5D3,
    #898C93
  );
  --color-blue: #5a8fcd;
  --color-blue-cyan-mix: color-mix(
    in hsl,
    #5a8fcd,
    #3CB9C2
  );
  --color-blue-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5a8fcd, #3CB9C2)
      20%,
    transparent
  );
  --color-blue-green-mix: color-mix(
    in hsl,
    #5a8fcd,
    #A1C05C
  );
  --color-blue-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5a8fcd, #A1C05C)
      20%,
    transparent
  );
  --color-blue-orange-mix: color-mix(
    in hsl,
    #5a8fcd,
    #CC8449
  );
  --color-blue-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5a8fcd, #CC8449)
      20%,
    transparent
  );
  --color-blue-pink-mix: color-mix(
    in hsl,
    #5a8fcd,
    #D458A3
  );
  --color-blue-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5a8fcd, #D458A3)
      20%,
    transparent
  );
  --color-blue-purple-mix: color-mix(
    in hsl,
    #5a8fcd,
    #A461C8
  );
  --color-blue-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5a8fcd, #A461C8)
      20%,
    transparent
  );
  --color-blue-red-mix: color-mix(
    in hsl,
    #5a8fcd,
    #C03A47
  );
  --color-blue-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5a8fcd, #C03A47)
      20%,
    transparent
  );
  --color-blue-rgb: 90, 143, 205;
  --color-blue-yellow-mix: color-mix(
    in hsl,
    #5a8fcd,
    #C29E42
  );
  --color-blue-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5a8fcd, #C29E42)
      20%,
    transparent
  );
  --color-cyan: #3CB9C2;
  --color-cyan-blue-mix: color-mix(
    in hsl,
    #3CB9C2,
    #5a8fcd
  );
  --color-cyan-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3CB9C2, #5a8fcd)
      20%,
    transparent
  );
  --color-cyan-green-mix: color-mix(
    in hsl,
    #3CB9C2,
    #A1C05C
  );
  --color-cyan-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3CB9C2, #A1C05C)
      20%,
    transparent
  );
  --color-cyan-orange-mix: color-mix(
    in hsl,
    #3CB9C2,
    #CC8449
  );
  --color-cyan-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3CB9C2, #CC8449)
      20%,
    transparent
  );
  --color-cyan-pink-mix: color-mix(
    in hsl,
    #3CB9C2,
    #D458A3
  );
  --color-cyan-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3CB9C2, #D458A3)
      20%,
    transparent
  );
  --color-cyan-purple-mix: color-mix(
    in hsl,
    #3CB9C2,
    #A461C8
  );
  --color-cyan-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3CB9C2, #A461C8)
      20%,
    transparent
  );
  --color-cyan-red-mix: color-mix(
    in hsl,
    #3CB9C2,
    #C03A47
  );
  --color-cyan-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3CB9C2, #C03A47)
      20%,
    transparent
  );
  --color-cyan-rgb: rgb(60, 185, 194);
  --color-cyan-yellow-mix: color-mix(
    in hsl,
    #3CB9C2,
    #C29E42
  );
  --color-cyan-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3CB9C2, #C29E42)
      20%,
    transparent
  );
  --color-green: #A1C05C;
  --color-green-blue-mix: color-mix(
    in hsl,
    #A1C05C,
    #5a8fcd
  );
  --color-green-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A1C05C, #5a8fcd)
      20%,
    transparent
  );
  --color-green-cyan-mix: color-mix(
    in hsl,
    #A1C05C,
    #3CB9C2
  );
  --color-green-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A1C05C, #3CB9C2)
      20%,
    transparent
  );
  --color-green-orange-mix: color-mix(
    in hsl,
    #A1C05C,
    #CC8449
  );
  --color-green-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A1C05C, #CC8449)
      20%,
    transparent
  );
  --color-green-pink-mix: color-mix(
    in hsl,
    #A1C05C,
    #D458A3
  );
  --color-green-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A1C05C, #D458A3)
      20%,
    transparent
  );
  --color-green-purple-mix: color-mix(
    in hsl,
    #A1C05C,
    #A461C8
  );
  --color-green-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A1C05C, #A461C8)
      20%,
    transparent
  );
  --color-green-red-mix: color-mix(
    in hsl,
    #A1C05C,
    #C03A47
  );
  --color-green-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A1C05C, #C03A47)
      20%,
    transparent
  );
  --color-green-rgb: rgb(161, 192, 92);
  --color-green-yellow-mix: color-mix(
    in hsl,
    #A1C05C,
    #C29E42
  );
  --color-green-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A1C05C, #C29E42)
      20%,
    transparent
  );
  --color-orange: #CC8449;
  --color-orange-blue-mix: color-mix(
    in hsl,
    #CC8449,
    #5a8fcd
  );
  --color-orange-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #CC8449, #5a8fcd)
      20%,
    transparent
  );
  --color-orange-cyan-mix: color-mix(
    in hsl,
    #CC8449,
    #3CB9C2
  );
  --color-orange-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #CC8449, #3CB9C2)
      20%,
    transparent
  );
  --color-orange-green-mix: color-mix(
    in hsl,
    #CC8449,
    #A1C05C
  );
  --color-orange-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #CC8449, #A1C05C)
      20%,
    transparent
  );
  --color-orange-pink-mix: color-mix(
    in hsl,
    #CC8449,
    #D458A3
  );
  --color-orange-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #CC8449, #D458A3)
      20%,
    transparent
  );
  --color-orange-purple-mix: color-mix(
    in hsl,
    #CC8449,
    #A461C8
  );
  --color-orange-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #CC8449, #A461C8)
      20%,
    transparent
  );
  --color-orange-red-mix: color-mix(
    in hsl,
    #CC8449,
    #C03A47
  );
  --color-orange-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #CC8449, #C03A47)
      20%,
    transparent
  );
  --color-orange-rgb: rgb(204, 132, 73);
  --color-orange-yellow-mix: color-mix(
    in hsl,
    #CC8449,
    #C29E42
  );
  --color-orange-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #CC8449, #C29E42)
      20%,
    transparent
  );
  --color-pink: #D458A3;
  --color-pink-blue-mix: color-mix(
    in hsl,
    #D458A3,
    #5a8fcd
  );
  --color-pink-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #D458A3, #5a8fcd)
      20%,
    transparent
  );
  --color-pink-cyan-mix: color-mix(
    in hsl,
    #D458A3,
    #3CB9C2
  );
  --color-pink-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #D458A3, #3CB9C2)
      20%,
    transparent
  );
  --color-pink-green-mix: color-mix(
    in hsl,
    #D458A3,
    #A1C05C
  );
  --color-pink-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #D458A3, #A1C05C)
      20%,
    transparent
  );
  --color-pink-orange-mix: color-mix(
    in hsl,
    #D458A3,
    #CC8449
  );
  --color-pink-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #D458A3, #CC8449)
      20%,
    transparent
  );
  --color-pink-purple-mix: color-mix(
    in hsl,
    #D458A3,
    #A461C8
  );
  --color-pink-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #D458A3, #A461C8)
      20%,
    transparent
  );
  --color-pink-red-mix: color-mix(
    in hsl,
    #D458A3,
    #C03A47
  );
  --color-pink-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #D458A3, #C03A47)
      20%,
    transparent
  );
  --color-pink-rgb: rgb(212, 88, 163);
  --color-pink-yellow-mix: color-mix(
    in hsl,
    #D458A3,
    #C29E42
  );
  --color-pink-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #D458A3, #C29E42)
      20%,
    transparent
  );
  --color-purple: #A461C8;
  --color-purple-blue-mix: color-mix(
    in hsl,
    #A461C8,
    #5a8fcd
  );
  --color-purple-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A461C8, #5a8fcd)
      20%,
    transparent
  );
  --color-purple-cyan-mix: color-mix(
    in hsl,
    #A461C8,
    #3CB9C2
  );
  --color-purple-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A461C8, #3CB9C2)
      20%,
    transparent
  );
  --color-purple-green-mix: color-mix(
    in hsl,
    #A461C8,
    #A1C05C
  );
  --color-purple-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A461C8, #A1C05C)
      20%,
    transparent
  );
  --color-purple-orange-mix: color-mix(
    in hsl,
    #A461C8,
    #CC8449
  );
  --color-purple-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A461C8, #CC8449)
      20%,
    transparent
  );
  --color-purple-pink-mix: color-mix(
    in hsl,
    #A461C8,
    #D458A3
  );
  --color-purple-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A461C8, #D458A3)
      20%,
    transparent
  );
  --color-purple-red-mix: color-mix(
    in hsl,
    #A461C8,
    #C03A47
  );
  --color-purple-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A461C8, #C03A47)
      20%,
    transparent
  );
  --color-purple-rgb: rgb(164, 97, 200);
  --color-purple-yellow-mix: color-mix(
    in hsl,
    #A461C8,
    #C29E42
  );
  --color-purple-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #A461C8, #C29E42)
      20%,
    transparent
  );
  --color-red: #C03A47;
  --color-red-blue-mix: color-mix(
    in hsl,
    #C03A47,
    #5a8fcd
  );
  --color-red-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C03A47, #5a8fcd)
      20%,
    transparent
  );
  --color-red-cyan-mix: color-mix(
    in hsl,
    #C03A47,
    #3CB9C2
  );
  --color-red-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C03A47, #3CB9C2)
      20%,
    transparent
  );
  --color-red-green-mix: color-mix(
    in hsl,
    #C03A47,
    #A1C05C
  );
  --color-red-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C03A47, #A1C05C)
      20%,
    transparent
  );
  --color-red-orange-mix: color-mix(
    in hsl,
    #C03A47,
    #CC8449
  );
  --color-red-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C03A47, #CC8449)
      20%,
    transparent
  );
  --color-red-pink-mix: color-mix(
    in hsl,
    #C03A47,
    #D458A3
  );
  --color-red-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C03A47, #D458A3)
      20%,
    transparent
  );
  --color-red-purple-mix: color-mix(
    in hsl,
    #C03A47,
    #A461C8
  );
  --color-red-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C03A47, #A461C8)
      20%,
    transparent
  );
  --color-red-rgb: rgb(192, 58, 71);
  --color-red-yellow-mix: color-mix(
    in hsl,
    #C03A47,
    #C29E42
  );
  --color-red-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C03A47, #C29E42)
      20%,
    transparent
  );
  --color-yellow: #C29E42;
  --color-yellow-blue-mix: color-mix(
    in hsl,
    #C29E42,
    #5a8fcd
  );
  --color-yellow-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C29E42, #5a8fcd)
      20%,
    transparent
  );
  --color-yellow-cyan-mix: color-mix(
    in hsl,
    #C29E42,
    #3CB9C2
  );
  --color-yellow-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C29E42, #3CB9C2)
      20%,
    transparent
  );
  --color-yellow-green-mix: color-mix(
    in hsl,
    #C29E42,
    #A1C05C
  );
  --color-yellow-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C29E42, #A1C05C)
      20%,
    transparent
  );
  --color-yellow-orange-mix: color-mix(
    in hsl,
    #C29E42,
    #CC8449
  );
  --color-yellow-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C29E42, #CC8449)
      20%,
    transparent
  );
  --color-yellow-pink-mix: color-mix(
    in hsl,
    #C29E42,
    #D458A3
  );
  --color-yellow-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C29E42, #D458A3)
      20%,
    transparent
  );
  --color-yellow-purple-mix: color-mix(
    in hsl,
    #C29E42,
    #A461C8
  );
  --color-yellow-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C29E42, #A461C8)
      20%,
    transparent
  );
  --color-yellow-red-mix: color-mix(
    in hsl,
    #C29E42,
    #C03A47
  );
  --color-yellow-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #C29E42, #C03A47)
      20%,
    transparent
  );
  --color-yellow-rgb: rgb(194, 158, 66);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --dimmed: 0.55;
  --divider-color: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --divider-color-hover: rgb(147, 238, 109);
  --drag-ghost-background: #24262C;
  --drag-ghost-text-color: rgb(147, 238, 109);
  --dropdown-background: color-mix(
    in hsl,
    #14161C,
    #191D28
  );
  --dropdown-background-hover: #191D28;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in hsl,
    #191D28,
    #24262C
  ), inset 0 0 0 1px color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --embed-border-start: 2px solid rgb(147, 238, 109);
  --expand: 110%;
  --file-header-background: #191D28;
  --file-header-background-focused: #191D28;
  --file-header-font-size: 14.56227px;
  --file-line-width: 50rem;
  --flair-background: color-mix(
    in hsl,
    #14161C,
    #191D28
  );
  --flair-color: #D3D5D3;
  --flexcyon-accent: #92A871;
  --flexcyon-accent-h: 105.5;
  --flexcyon-accent-l: 59.5%;
  --flexcyon-accent-s: 77.5%;
  --flexcyon-active-indicator: '>> ';
  --flexcyon-anim-duration: 0.3s;
  --flexcyon-anim-easing: ease-in-out;
  --flexcyon-anim-rotate-amount: 50deg;
  --flexcyon-anim-slide-amount: 56.63105px;
  --flexcyon-anim-start-opacity: 0.55;
  --flexcyon-anim-start-scale-amt: 0.33;
  --flexcyon-ascii-alignment: left;
  --flexcyon-ascii-art: ' _______________ ___ ____/__ /________ ____________ ______________ __ /_ __ /_ _ \\_ |/_/ ___/_ / / / __ \\_ __ \\ _ __/ _ / / __/_ / /__ _ /_/ // /_/ / / / / /_/ /_/ \\___//_/|_| \\___/ _\\__, / \\____//_/ /_/ /____/  ';
  --flexcyon-ascii-checkboxes-font-size: 1.2rem;
  --flexcyon-ascii-line-height: 1.5;
  --flexcyon-ascii-max-font-size: 14px;
  --flexcyon-ascii-max-width: 50rem;
  --flexcyon-ascii-scaling-factor: 1;
  --flexcyon-base-01: #14161C;
  --flexcyon-base-01-02-mix: color-mix(
    in hsl,
    #14161C,
    #191D28
  );
  --flexcyon-base-02: #191D28;
  --flexcyon-base-02-03-mix: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --flexcyon-base-03: #24262C;
  --flexcyon-base-03-04-mix: color-mix(
    in hsl,
    #24262C,
    #4D566B
  );
  --flexcyon-base-04: #4D566B;
  --flexcyon-base-04-05-mix: color-mix(
    in hsl,
    #4D566B,
    #6F7685
  );
  --flexcyon-base-05: #6F7685;
  --flexcyon-base-grey-dark: #898C93;
  --flexcyon-base-grey-light: #D3D5D3;
  --flexcyon-base-grey-mix: color-mix(
    in hsl,
    #D3D5D3,
    #898C93
  );
  --flexcyon-base-grey-scroll: #3f495e;
  --flexcyon-base-grey-scroll-hover: #5c6782;
  --flexcyon-base-grey-tab: #71777f;
  --flexcyon-base-grey-token: #586582;
  --flexcyon-bases-card-delay-factor: 12.5;
  --flexcyon-bases-card-flex-gorw: 0.55;
  --flexcyon-bases-card-flex-grow: 0.55;
  --flexcyon-bases-card-padding: 8px
    0px
    0px
    2px;
  --flexcyon-bases-card-padding-bottom: 0px;
  --flexcyon-bases-card-padding-left: 2px;
  --flexcyon-bases-card-padding-right: 0px;
  --flexcyon-bases-card-padding-top: 8px;
  --flexcyon-bases-padding-horiz: 16px;
  --flexcyon-bases-padding-verti: 16px;
  --flexcyon-bases-table-content-alignment: left;
  --flexcyon-bases-td-padding-l: 2px;
  --flexcyon-bg-image-blend-mode: darken;
  --flexcyon-bg-image-blur: 0px;
  --flexcyon-bg-image-position: center;
  --flexcyon-bg-image-repeat: no-repeat;
  --flexcyon-bg-image-sidebar-left-url: url("");
  --flexcyon-bg-image-sidebar-right-url: url("");
  --flexcyon-bg-image-size: contain;
  --flexcyon-block-label-opacity: 0.55;
  --flexcyon-blue: #5a8fcd;
  --flexcyon-brightness-ratio: 1;
  --flexcyon-callout-bg-opacity: 20%;
  --flexcyon-callout-first-codeblock-margin-top: 1rem;
  --flexcyon-callout-flashcard-animation-duration: 0.5s;
  --flexcyon-callout-horiz-padding: 24px;
  --flexcyon-callout-icon-right-padding: 4px;
  --flexcyon-callout-pop-animation-duration: 0.2s;
  --flexcyon-callout-radix: 16px;
  --flexcyon-callout-verti-padding: 12px;
  --flexcyon-callout-vertical-margin: 1em;
  --flexcyon-callouts-flashcard-height: 250px;
  --flexcyon-callouts-flashcard-width: 250px;
  --flexcyon-canvas-blur-intensity: 1px;
  --flexcyon-code-error: #C03A47;
  --flexcyon-code-file-ext-font-w: 500;
  --flexcyon-code-file-ext-prefix: '.';
  --flexcyon-code-function: #C29E42;
  --flexcyon-code-keyword: #3CB9C2;
  --flexcyon-code-operator: #5a8fcd;
  --flexcyon-code-variable: #3CB9C2;
  --flexcyon-codeblock-fmt-ext: lowercase;
  --flexcyon-comm-item-opacity: 0.89;
  --flexcyon-comm-text-padding: 3px 16px;
  --flexcyon-contrast-ratio: 1;
  --flexcyon-cursor-duration: 42.5ms;
  --flexcyon-cursor-timing-fn: ease-in;
  --flexcyon-cust-hr-str: 'f';
  --flexcyon-cust-hr-str-font-size: 1.11803em;
  --flexcyon-cust-hr-str-horiz-padding: 8px;
  --flexcyon-cyan: #3CB9C2;
  --flexcyon-dataview-horizontal-padding: 8px;
  --flexcyon-default-ol-style: decimal;
  --flexcyon-editor-bg-color: color-mix(
    in oklch,
    color-mix(
    in hsl,
    #14161C,
    #191D28
  ) 70%,
    #191D28 30%
  );
  --flexcyon-editor-bg-color-2: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --flexcyon-editor-bg-rotation: 0deg;
  --flexcyon-editor-bg-width: 15px;
  --flexcyon-editor-dot-size: 2.5px;
  --flexcyon-editor-margin-top: 18px;
  --flexcyon-editor-writing-indentation: 16px;
  --flexcyon-exp-dimmed-nav-size: 13.3623px;
  --flexcyon-external-link-color: #5A8FCD;
  --flexcyon-external-link-hover: color-mix(
    in hsl shorter hue,
    #5A8FCD,
    #898C93
  );
  --flexcyon-fc-dimmed-items-opacity: 0.89;
  --flexcyon-heading-1-alignment: left;
  --flexcyon-heading-2-alignment: left;
  --flexcyon-heading-3-alignment: left;
  --flexcyon-heading-4-alignment: left;
  --flexcyon-heading-5-alignment: left;
  --flexcyon-heading-6-alignment: left;
  --flexcyon-highlight-border-radius: 4px;
  --flexcyon-highlight-horiz-padding: 2.5px;
  --flexcyon-highlight-verti-padding: 1px;
  --flexcyon-input-horiz-padding: 8px;
  --flexcyon-input-verti-padding: 8px;
  --flexcyon-l-spacing: 0px;
  --flexcyon-lime-green: #A1C05C;
  --flexcyon-link-color: #A461C8;
  --flexcyon-link-hover: color-mix(
    in hsl shorter hue,
    #A461C8,
    #898C93
  );
  --flexcyon-link-unresolved-color: #A461C8;
  --flexcyon-media-embed-vertical-margin: 8px;
  --flexcyon-meta-container-padding-left: 14px;
  --flexcyon-modal-bg-url: url("");
  --flexcyon-modal-dark-intensity: 1;
  --flexcyon-modal-image-blend-mode: lighten;
  --flexcyon-modal-image-blur: 0px;
  --flexcyon-modal-image-position: center;
  --flexcyon-modal-image-repeat: no-repeat;
  --flexcyon-modal-image-size: cover;
  --flexcyon-mode-view-header-title-horiz-padding: 12px;
  --flexcyon-mode-view-header-title-verti-padding: 4px;
  --flexcyon-new-tab-bg-wrapper: linear-gradient(
    to right,
    rgb(147, 238, 109),
    #5a8fcd,
    #3CB9C2
  );
  --flexcyon-omnisearch-body-margin-left: 1.45rem;
  --flexcyon-orange: #CC8449;
  --flexcyon-os-detail-padding-r: 24px;
  --flexcyon-palette-cyan-hover: color-mix(
    in hsl shorter hue,
    #3CB9C2,
    #898C93
  );
  --flexcyon-palette-lilac-hover: color-mix(
    in hsl shorter hue,
    #A461C8,
    #898C93
  );
  --flexcyon-pink: #D458A3;
  --flexcyon-purple-lilac: #A461C8;
  --flexcyon-quote-credit: 'bladeacer';
  --flexcyon-quote-credit-prefix: '-';
  --flexcyon-quote-font-size: 24px;
  --flexcyon-quote-val: 'This is a placeholder quotein the Flexcyon Theme.';
  --flexcyon-red-salmon: #C03A47;
  --flexcyon-repl-active-line-str: '-';
  --flexcyon-repl-active-str-space: 0px;
  --flexcyon-saturation-ratio: 1;
  --flexcyon-screen-dimens-padding-l: 16px;
  --flexcyon-search-container-horiz-padding: 16px;
  --flexcyon-search-container-verti-padding: 8px;
  --flexcyon-settings-installed-tooltip-left-margin: 1rem;
  --flexcyon-side-toggle-button-no-ribbon: 11px 16px 7px 0px;
  --flexcyon-status-hide-hover-duration: 0.35s;
  --flexcyon-status-hide-hover-function: ease-out;
  --flexcyon-status-hide-until-hover-text: 'Show status';
  --flexcyon-status-hide-until-hover-translation: 80vw;
  --flexcyon-status-live-text: 'LIVE';
  --flexcyon-status-reading-text: 'READ';
  --flexcyon-status-source-text: 'SOURCE';
  --flexcyon-style-settings-indent-width: 4px;
  --flexcyon-suggestion-horiz-padding: 12px;
  --flexcyon-suggestion-verti-padding: 8px;
  --flexcyon-table-reading-mode-width: 100%;
  --flexcyon-td-horiz-padding: 10px;
  --flexcyon-td-live-pad-scale: 0.2;
  --flexcyon-td-verti-padding: 5px;
  --flexcyon-text-muted: #6F768599;
  --flexcyon-top-actions-alignment: center;
  --flexcyon-tree-item-horiz-padding: 10px;
  --flexcyon-tree-item-verti-padding: 2px;
  --flexcyon-var-comps-sugg-horiz-padding: 12px;
  --flexcyon-var-comps-sugg-vert-padding: 7px;
  --flexcyon-view-header-breadcrumb-max-w: 12.5vw;
  --flexcyon-vim-bottom-pos-w-status: 40px;
  --flexcyon-vim-bottom-positioning: -4px;
  --flexcyon-vim-command-text: 'COMMAND';
  --flexcyon-vim-insert-text: 'INSERT';
  --flexcyon-vim-left-positioning: 6px;
  --flexcyon-vim-normal-text: 'NORMAL';
  --flexcyon-w-spacing: 0px;
  --flexcyon-yellow: #C29E42;
  --flexyon-base-grey-token: #586582;
  --font-mermaid: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-ui-large: 17.79833px;
  --font-ui-medium: 16.1803px;
  --font-ui-small: 14.56227px;
  --font-ui-smaller: 12.94424px;
  --footnote-divider-color: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --footnote-id-color: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --footnote-id-color-no-occurrences: #6F768599;
  --footnote-input-background-active: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --footnote-line-height: 1.4;
  --footnote-radius: 2px;
  --graph-control-horiz-padding: 12px;
  --graph-control-verti-padding: 6px;
  --graph-line: #24262C;
  --graph-node: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --graph-node-attachment: #C29E42;
  --graph-node-focused: rgb(147, 238, 109);
  --graph-node-tag: #A461C8;
  --graph-node-unresolved: #C03A47;
  --graph-text: #D3D5D3;
  --gray: var(--text-muted);
  --h: tan(atan2(1380px, 1px));
  --h1-color: #5a8fcd;
  --h1-line-height: 1.61;
  --h1-size: 1.81803em;
  --h2-color: #A461C8;
  --h2-line-height: 1.51;
  --h2-size: 1.61803em;
  --h2-weight: 675;
  --h3-color: #3CB9C2;
  --h3-line-height: 1.41;
  --h3-size: 1.41803em;
  --h3-weight: 650;
  --h4-color: #D458A3;
  --h4-line-height: 1.31;
  --h4-size: 1.21803em;
  --h4-weight: 625;
  --h5-color: #A1C05C;
  --h5-line-height: 1.21;
  --h5-size: 1.11803em;
  --h5-weight: 600;
  --h6-color: #C29E42;
  --h6-line-height: 1.21;
  --h6-size: 1.01803em;
  --h6-weight: 575;
  --heading-formatting: #6F768599;
  --highlight: var(--text-highlight-bg);
  --hr-color: #393E48;
  --icon-color: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --icon-color-active: rgb(147, 238, 109);
  --icon-color-focused: rgb(147, 238, 109);
  --icon-color-hover: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --icon-stroke: 2px;
  --icon-xs: 12.25px;
  --img-border-radius: 15px;
  --inline-title-color: #5a8fcd;
  --inline-title-size: 1.802em;
  --input-date-separator: #6F768599;
  --input-padding: 8px
    8px;
  --input-placeholder-color: #6F768599;
  --input-radius: 0px;
  --interactive-accent: rgb(147, 238, 109);
  --interactive-accent-hover: color-mix(
    in hsl shorter hue,
    #92A871 75%,
    transparent
  );
  --interactive-accent-hsl: 105.5, 77.5%, 59.5%;
  --interactive-hover: #191D28;
  --interactive-normal: color-mix(
    in hsl,
    #14161C,
    #191D28
  );
  --italic-color: #92A871;
  --less-letter-spacing: -3px;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.4;
  --line-height-tight: 1.25;
  --link-color: #A461C8;
  --link-color-hover: color-mix(
    in hsl shorter hue,
    #A461C8,
    #898C93
  );
  --link-external-color: #5A8FCD;
  --link-external-color-hover: color-mix(
    in hsl shorter hue,
    #5A8FCD,
    #898C93
  );
  --link-unresolved-color: #A461C8;
  --link-unresolved-decoration-color: #A461C8;
  --link-unresolved-decoration-style: dashed;
  --list-marker-color: #A461C8;
  --list-marker-color-collapsed: #A1C05C;
  --list-marker-color-hover: color-mix(
    in hsl shorter hue,
    #A461C8,
    #898C93
  );
  --menu-background: #14161C;
  --menu-border-color: transparent;
  --menu-radius: 4px;
  --metadata-border-color: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --metadata-divider-color: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --metadata-input-background-active: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --metadata-input-text-color: #D3D5D3;
  --metadata-label-background-active: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --metadata-label-text-color: #A461C8;
  --metadata-label-text-color-hover: color-mix(
    in hsl shorter hue,
    #A461C8,
    #898C93
  );
  --metadata-property-background-active: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(
    in hsl,
    #24262C,
    #4D566B
  );
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent;
  --metadata-sidebar-input-font-size: 14.56227px;
  --metadata-sidebar-label-font-size: 14.56227px;
  --modal-background: #191D28;
  --modal-border-color: #191D28;
  --modal-radius: 6px;
  --nav-collapse-icon-color: #6F768599;
  --nav-collapse-icon-color-collapsed: #6F768599;
  --nav-heading-color: #D3D5D3;
  --nav-heading-color-collapsed: #6F768599;
  --nav-heading-color-collapsed-hover: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --nav-heading-color-hover: #D3D5D3;
  --nav-item-background-active: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --nav-item-background-hover: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --nav-item-background-selected: #24262C;
  --nav-item-color: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --nav-item-color-active: rgb(147, 238, 109);
  --nav-item-color-highlighted: rgb(147, 238, 109);
  --nav-item-color-hover: #D3D5D3;
  --nav-item-color-selected: #CC8449;
  --nav-item-radius: 2px;
  --nav-item-size: 14.56227px;
  --nav-tag-color: #6F768599;
  --nav-tag-color-active: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --nav-tag-color-hover: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --nav-tag-radius: 2px;
  --oz-fta-all-panes-active-text-color: #D3D5D3;
  --oz-fta-file-font-size: calc(16.1803px - 0.1rem);
  --oz-fta-file-pane-file-name-color: #6F768599;
  --oz-fta-folder-font-size: calc(16.1803px - 0.1rem);
  --oz-fta-folder-pane-file-name-color: #D3D5D3;
  --oz-fta-folder-panes-file-name-color: #d3d5d3;
  --pdf-background: #191D28;
  --pdf-page-background: #191D28;
  --pdf-shadow: 0 0 0 1px color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --pdf-sidebar-background: #191D28;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --pill-border-color: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --pill-border-color-hover: transparent;
  --pill-color: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --pill-color-hover: #D3D5D3;
  --pill-color-remove: #6F768599;
  --pill-color-remove-hover: rgb(147, 238, 109);
  --prompt-background: #191D28;
  --prompt-border-color: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --r-background-color: color-mix(
    in hsl,
    #14161C,
    #191D28
  );
  --r-heading-color: #D3D5D3;
  --r-heading-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --r-heading-margin: 16px 0px;
  --r-heading-text-transform: capitalize;
  --r-heading1-size: 1.81803em;
  --r-heading2-size: 1.61803em;
  --r-heading3-size: 1.41803em;
  --r-heading4-size: 1.21803em;
  --r-link-color: hsla(
    85.5,
    66%,
    65%,
    88%
  );
  --r-main-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --r-main-font-size: max-content;
  --radius-l: 6px;
  --radius-m: 4px;
  --radius-s: 2px;
  --radius-x1: 8px;
  --radius-xl: 8px;
  --raised-background: color-mix(in srgb, color-mix(
    in hsl,
    #14161C,
    #191D28
  ) 65%, transparent) linear-gradient(color-mix(
    in hsl,
    #14161C,
    #191D28
  ), color-mix(in srgb, color-mix(
    in hsl,
    #14161C,
    #191D28
  ) 65%, transparent));
  --ribbon-background: #14161C;
  --ribbon-background-collapsed: #14161C;
  --ribbon-width: 48px;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 6px;
  --search-clear-button-color: #C03A47;
  --search-icon-color: #92A871;
  --search-result-background: #191D28;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #D3D5D3;
  --setting-group-heading-size: 16.1803px;
  --setting-items-background: #24262C;
  --setting-items-border-color: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --setting-items-radius: 6px;
  --slider-thumb-border-color: transparent;
  --slider-track-background: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --status-bar-background: #14161C;
  --status-bar-border-color: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --status-bar-font-size: 13.753255px;
  --status-bar-position: absolute;
  --status-bar-radius: 4px 0 0 0;
  --status-bar-text-color: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --suggestion-background: #191D28;
  --sync-avatar-color-1: #C03A47;
  --sync-avatar-color-2: #CC8449;
  --sync-avatar-color-3: #C29E42;
  --sync-avatar-color-4: #A1C05C;
  --sync-avatar-color-5: #3CB9C2;
  --sync-avatar-color-6: #5a8fcd;
  --sync-avatar-color-7: #A461C8;
  --sync-avatar-color-8: #D458A3;
  --tab-background-active: #191D28;
  --tab-container-background: #14161C;
  --tab-curve: 0px;
  --tab-divider-color: #14161C;
  --tab-font-size: 14.56227px;
  --tab-outline-color: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --tab-outline-width: 0px;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-stacked-font-size: 14.56227px;
  --tab-switcher-background: #14161C;
  --tab-switcher-menubar-background: linear-gradient(to top, #14161C, transparent);
  --tab-switcher-preview-radius: 8px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(112, 233, 73);
  --tab-text-color: #6F7685;
  --tab-text-color-active: rgb(147, 238, 109);
  --tab-text-color-focused: #6F7685;
  --tab-text-color-focused-active: rgb(147, 238, 109);
  --tab-text-color-focused-active-current: rgb(147, 238, 109);
  --tab-text-color-focused-highlighted: rgb(147, 238, 109);
  --table-add-button-border-color: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --table-background: #191D28;
  --table-border-color: #6F768566;
  --table-column-alt-background: #191D28;
  --table-drag-handle-background-active: rgb(147, 238, 109);
  --table-drag-handle-color: #6F768599;
  --table-drag-handle-color-active: #24262C;
  --table-header-background: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --table-header-background-hover: #191D28;
  --table-header-border-color: #6F768566;
  --table-header-color: #D3D5D3;
  --table-header-size: large;
  --table-line-height: 1.25;
  --table-row-alt-background-hover: #191D28;
  --table-row-background-hover: #191D28;
  --table-selection: rgba(112, 233, 73, 0.1);
  --table-selection-border-color: rgb(147, 238, 109);
  --tag-background: color-mix(
    in hsl shorter hue,
    #3CB9C2 25%,
    transparent
  );
  --tag-background-hover: color-mix(
    in hsl shorter hue,
    color-mix(
    in hsl shorter hue,
    #3CB9C2,
    #898C93
  ) 25%,
    transparent
  );
  --tag-border-color: rgba(112, 233, 73, 0.15);
  --tag-border-color-hover: rgba(112, 233, 73, 0.15);
  --tag-color: #3CB9C2;
  --tag-color-hover: color-mix(
    in hsl shorter hue,
    #3CB9C2,
    #898C93
  );
  --tag-decoration-hover: underline;
  --tertiary: var(--interactive-accent-hover);
  --text-accent: rgb(147, 238, 109);
  --text-error: #C03A47;
  --text-faint: #6F768599;
  --text-highlight-bg: color-mix(in hsl, #3CB9C2 20%, transparent);
  --text-muted: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --text-normal: #D3D5D3;
  --text-on-accent: #24262C;
  --text-selection: rgba(112, 233, 73, 0.33);
  --text-success: #A1C05C;
  --text-warning: #C03A47;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #14161C;
  --titlebar-background-focused: #14161C;
  --titlebar-border-color: color-mix(
    in hsl,
    #191D28,
    #24262C
  );
  --titlebar-text-color: #6F768599;
  --titlebar-text-color-focused: color-mix(
    in hsl,
    #6F768599,
    #D3D5D3
  );
  --toggle-thumb-color: #24262C;
  --upsize: 103%;
  --vault-name-color: rgb(147, 238, 109);
  --vault-profile-color: #D3D5D3;
  --vault-profile-color-hover: #D3D5D3;
  --vault-profile-font-size: 14.56227px;
  --w: tan(atan2(2538px, 1px));
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 22, 28);
  color: rgb(211, 213, 211);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(25, 29, 40);
  color: rgb(211, 213, 211);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 22, 28);
  color: rgb(211, 213, 211);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.118646 0.130793 0.165667);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 22, 28);
  border-left-color: color(srgb 0.118646 0.130793 0.165667);
  color: rgb(211, 213, 211);
}

body div#quartz-root {
  background-color: rgb(25, 29, 40);
  color: rgb(211, 213, 211);
}`,
    typography: `body .page article p > b, b {
  color: rgb(192, 58, 71);
  outline: rgb(192, 58, 71) none 0px;
  text-decoration: rgb(192, 58, 71);
  text-decoration-color: rgb(192, 58, 71);
}

body .page article p > em, em {
  color: rgb(146, 168, 113);
  outline: rgb(146, 168, 113) none 0px;
  text-decoration: rgb(146, 168, 113);
  text-decoration-color: rgb(146, 168, 113);
}

body .page article p > i, i {
  color: rgb(146, 168, 113);
  outline: rgb(146, 168, 113) none 0px;
  text-decoration: rgb(146, 168, 113);
  text-decoration-color: rgb(146, 168, 113);
}

body .page article p > strong, strong {
  color: rgb(192, 58, 71);
  outline: rgb(192, 58, 71) none 0px;
  text-decoration: rgb(192, 58, 71);
  text-decoration-color: rgb(192, 58, 71);
}

body .text-highlight {
  background-color: color(srgb 0.235294 0.72549 0.760784 / 0.2);
  color: rgb(211, 213, 211);
  font-weight: 525;
  outline: rgb(211, 213, 211) none 0px;
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body del {
  color: rgb(211, 213, 211);
  outline: rgb(211, 213, 211) none 0px;
  text-decoration: line-through rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body p {
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  outline: color(srgb 0.684468 0.713571 0.708941 / 0.8) none 0px;
  text-decoration: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  text-decoration-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}`,
    links: `body a.external, footer a {
  color: rgb(90, 143, 205);
  outline: rgb(90, 143, 205) none 0px;
  text-decoration: underline rgb(90, 143, 205);
  text-decoration-color: rgb(90, 143, 205);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(164, 97, 200);
  outline: rgb(164, 97, 200) none 0px;
  text-decoration: underline rgb(164, 97, 200);
  text-decoration-color: rgb(164, 97, 200);
}

body a.internal.broken {
  color: rgb(164, 97, 200);
  outline: rgb(164, 97, 200) none 0px;
  text-decoration: underline dashed rgb(164, 97, 200);
  text-decoration-color: rgb(164, 97, 200);
  text-decoration-style: dashed;
}`,
    lists: `body dd {
  color: rgb(211, 213, 211);
}

body dt {
  color: rgb(211, 213, 211);
}

body ol > li {
  color: rgb(211, 213, 211);
}

body ol.overflow {
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

body ul > li {
  color: rgb(211, 213, 211);
}

body ul.overflow {
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(111, 118, 133, 0.6);
  text-decoration: rgba(111, 118, 133, 0.6);
}`,
    tables: `body .spacer {
  background-color: color(srgb 0.0887695 0.100144 0.132799);
}

body .table-container {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

body table {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: rgb(211, 213, 211);
  width: 766px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(25, 29, 40);
}

body td {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: rgb(211, 213, 211);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

body th {
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
}

body thead {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
}

body tr {
  background-color: color(srgb 0.118646 0.130793 0.165667);
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(20, 22, 28);
  border-bottom-color: color(srgb 0.118646 0.130793 0.165667);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.118646 0.130793 0.165667);
  border-right-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(20, 22, 28);
  border-bottom-color: color(srgb 0.118646 0.130793 0.165667);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.118646 0.130793 0.165667);
  border-right-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(211, 213, 211);
}

body pre > code > [data-line] {
  border-left-color: rgb(194, 158, 66);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(194, 158, 66);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(194, 158, 66);
  border-left-color: rgb(194, 158, 66);
  border-right-color: rgb(194, 158, 66);
  border-top-color: rgb(194, 158, 66);
}

body pre > code, pre:has(> code) {
  background-color: rgb(20, 22, 28);
  border-bottom-color: color(srgb 0.118646 0.130793 0.165667);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.118646 0.130793 0.165667);
  border-right-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body pre:has(> code) {
  background-color: rgb(20, 22, 28);
  border-bottom-color: color(srgb 0.118646 0.130793 0.165667);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.118646 0.130793 0.165667);
  border-right-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `body audio {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figcaption {
  color: rgb(211, 213, 211);
}

body figure {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

body img {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

body video {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}`,
    embeds: `body .file-embed {
  background-color: rgb(36, 38, 44);
  border-bottom-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-right-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-top-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .footnotes {
  border-top-color: rgb(211, 213, 211);
  color: rgb(211, 213, 211);
}

body .transclude {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(148, 238, 111);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

body .transclude-inner {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(148, 238, 111);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  text-decoration: line-through color(srgb 0.684468 0.713571 0.708941 / 0.8);
  text-decoration-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}

body input[type=checkbox] {
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(90, 143, 205);
  border-right-color: rgb(90, 143, 205);
  border-top-color: rgb(90, 143, 205);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='*'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='-'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='/'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='>'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='?'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='I'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='S'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='b'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='c'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='d'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='f'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='i'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='k'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='l'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='p'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='u'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body li.task-list-item[data-task='w'] {
  color: rgb(211, 213, 211);
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  background-color: rgb(25, 29, 40);
  border-bottom-color: color(srgb 0.118646 0.130793 0.165667);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.118646 0.130793 0.165667);
  border-right-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(211, 213, 211);
}

body .search > .search-container > .search-space {
  background-color: rgb(25, 29, 40);
  border-bottom-color: color(srgb 0.118646 0.130793 0.165667);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: color(srgb 0.118646 0.130793 0.165667);
  border-right-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > * {
  color: rgb(211, 213, 211);
  outline: rgb(211, 213, 211) none 0px;
  text-decoration: rgb(211, 213, 211);
  text-decoration-color: rgb(211, 213, 211);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(211, 213, 211);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(211, 213, 211);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.118646 0.130793 0.165667);
  color: rgb(211, 213, 211);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.118646 0.130793 0.165667);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: color(srgb 0.118646 0.130793 0.165667);
  border-right-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 22, 28);
  border-left-color: rgb(148, 238, 111);
  border-right-color: rgb(148, 238, 111);
  border-top-color: rgb(148, 238, 111);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: color(srgb 0.118646 0.130793 0.165667);
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.118646 0.130793 0.165667);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(211, 213, 211);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0.235294 0.72549 0.760784 / 0.25);
  border-bottom-color: rgba(110, 232, 72, 0.15);
  border-left-color: rgba(110, 232, 72, 0.15);
  border-right-color: rgba(110, 232, 72, 0.15);
  border-top-color: rgba(110, 232, 72, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(60, 185, 194);
}

body h1 {
  color: rgb(90, 143, 205);
}

body h2 {
  color: rgb(164, 97, 200);
}

body h2.page-title, h2.page-title a {
  color: rgb(90, 143, 205);
}

body h3 {
  color: rgb(60, 185, 194);
}

body h4 {
  color: rgb(212, 88, 163);
}

body h5 {
  color: rgb(161, 192, 92);
}

body h6 {
  color: rgb(194, 158, 66);
}

body hr {
  border-bottom-color: color(srgb 0.118646 0.130793 0.165667);
  border-left-color: color(srgb 0.118646 0.130793 0.165667);
  border-right-color: color(srgb 0.118646 0.130793 0.165667);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
}

body ::-webkit-scrollbar-corner {
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
}

body ::-webkit-scrollbar-track {
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  text-decoration: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  text-decoration: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  text-decoration: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: color(srgb 0.118646 0.130793 0.165667);
  border-bottom-color: rgb(148, 238, 111);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(148, 238, 111);
  border-right-color: rgb(148, 238, 111);
  border-top-color: rgb(148, 238, 111);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(148, 238, 111);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-right-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-top-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-left-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-left-width: 0px;
  border-right-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-top-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-top-left-radius: 4px;
  border-top-width: 0px;
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}

body footer ul li a {
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  text-decoration: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(211, 213, 211);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  color: rgb(211, 213, 211);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  text-decoration: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

body li.section-li > .section .meta {
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}

body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  text-decoration: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}

body ul.section-ul {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-right-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-top-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}

body .darkmode svg {
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  stroke: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}`,
    breadcrumbs: `body .breadcrumb-container {
  background-color: color(srgb 0.118646 0.130793 0.165667);
  border-bottom-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-right-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-top-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-top-left-radius: 16px;
  border-top-right-radius: 2px;
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}

body .breadcrumb-element p {
  color: rgba(111, 118, 133, 0.6);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  color: rgb(211, 213, 211);
}

body .metadata {
  border-bottom-color: color(srgb 0.118646 0.130793 0.165667);
  border-left-color: color(srgb 0.118646 0.130793 0.165667);
  border-right-color: color(srgb 0.118646 0.130793 0.165667);
  border-top-color: color(srgb 0.118646 0.130793 0.165667);
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  padding-left: 14px;
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-left-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-right-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  border-top-color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
  color: color(srgb 0.684468 0.713571 0.708941 / 0.8);
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(211, 213, 211);
}

body abbr {
  color: rgb(211, 213, 211);
  text-decoration: underline dotted rgb(211, 213, 211);
}

body details {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

body input[type=text] {
  border-bottom-color: rgb(164, 97, 200);
  border-left-color: rgb(164, 97, 200);
  border-right-color: rgb(164, 97, 200);
  border-top-color: rgb(164, 97, 200);
  color: rgb(164, 97, 200);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}

body sub {
  color: rgb(211, 213, 211);
}

body summary {
  color: rgb(211, 213, 211);
}

body sup {
  color: rgb(211, 213, 211);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 225;
  --accent-l: 53%;
  --accent-s: 41%;
  --background-modifier-active-hover: #DDDCD6;
  --background-modifier-border: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --background-modifier-border-focus: color-mix(
    in hsl,
    #DDDCD6,
    #D3D3CE
  );
  --background-modifier-border-hover: transparent;
  --background-modifier-error: rgba(
    rgb(235, 83, 37),
    0.85
  );
  --background-modifier-error-hover: #EB5325;
  --background-modifier-error-rgb: rgb(235, 83, 37);
  --background-modifier-form-field: #FAF7EF;
  --background-modifier-form-field-hover: #FAF7EF;
  --background-modifier-hover: #EDEBE5;
  --background-modifier-message: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --background-modifier-success: #689523;
  --background-modifier-success-rgb: rgb(104, 149, 35);
  --background-primary: #FAF7EF;
  --background-primary-alt: #EDEBE5;
  --background-secondary: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --background-secondary-alt: #EDEBE5;
  --bases-border-r: 16px;
  --bases-cards-background: #FAF7EF;
  --bases-cards-cover-background: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --bases-cards-group-padding: 16px;
  --bases-cards-radius: 4px;
  --bases-cards-shadow: 0 0 0 1px color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --bases-cards-shadow-hover: 0 0 0 1px transparent;
  --bases-embed-border-color: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --bases-embed-border-radius: 2px;
  --bases-embed-padding: 4px;
  --bases-group-heading-property-color: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --bases-group-heading-property-size: 12.94424px;
  --bases-no-img-str: 'No image path could be found for this file';
  --bases-table-border-color: #6F768566;
  --bases-table-cell-background-active: #FAF7EF;
  --bases-table-cell-background-disabled: #EDEBE5;
  --bases-table-cell-background-selected: rgba(86, 111, 184, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(
    in hsl,
    #DDDCD6,
    #D3D3CE
  );
  --bases-table-cell-shadow-focus: 0 0 0 2px #5770B9;
  --bases-table-container-border-radius: 2px;
  --bases-table-group-background: #EDEBE5;
  --bases-table-header-background: #FAF7EF;
  --bases-table-header-background-hover: #EDEBE5;
  --bases-table-header-color: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --bases-table-row-background-hover: #FAF7EF;
  --bases-table-summary-background: #FAF7EF;
  --bases-table-summary-background-hover: #EDEBE5;
  --blockquote-border-color: #5770B9;
  --blur-background: color-mix(in srgb, #FAF7EF 65%, transparent) linear-gradient(#FAF7EF, color-mix(in srgb, #FAF7EF 65%, transparent));
  --bold-color: #EB5325;
  --button-radius: 0px;
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
  --canvas-background: #FAF7EF;
  --canvas-card-label-color: #6F768599;
  --canvas-color-1: rgb(235, 83, 37);
  --canvas-color-2: rgb(237, 129, 38);
  --canvas-color-3: rgb(232, 198, 42);
  --canvas-color-4: rgb(104, 149, 35);
  --canvas-color-5: rgb(59, 155, 161);
  --canvas-color-6: rgb(111, 73, 174);
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: color-mix(
    in hsl,
    #DDDCD6,
    #D3D3CE
  );
  --caret-color: #080808;
  --checkbox-border-color: #5c9fe4;
  --checkbox-border-color-hover: color-mix(
    in hsl shorter hue,
    #6F49AE,
    #797876
  );
  --checkbox-color: #6F49AE;
  --checkbox-color-hover: color-mix(
    in hsl shorter hue,
    #6F49AE,
    #797876
  );
  --checkbox-marker-color: #FAF7EF;
  --checkbox-radius: 2px;
  --checklist-done-color: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --clickable-icon-radius: 0;
  --cm-font-size: 15.37127px;
  --cm-panel-bg: color-mix(
    in srgb,
    color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  ) 55%,
    #EDEBE5 45%
  );
  --code-background: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --code-border-color: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --code-bracket-background: #EDEBE5;
  --code-comment: #6F768599;
  --code-function: #E8C62A;
  --code-important: #EB5325;
  --code-keyword: #3B9BA1;
  --code-normal: #080808;
  --code-operator: #5c9fe4;
  --code-property: #3B9BA1;
  --code-punctuation: rgba(rgb(235, 83, 37), 0.55);
  --code-radius: 2px;
  --code-string: #689523;
  --code-tag: #797876;
  --code-value: #E8C62A;
  --collapse-icon-color: #6F768599;
  --collapse-icon-color-collapsed: #5770B9;
  --color-accent: rgb(86, 111, 184);
  --color-accent-1: rgb(114, 139, 197);
  --color-accent-2: hsla(
    205,
    35%,
    58%,
    88%
  );
  --color-accent-hsl: 225, 41%, 53%;
  --color-base-00: #FAF7EF;
  --color-base-05: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --color-base-10: #EDEBE5;
  --color-base-100: #080808;
  --color-base-20: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --color-base-25: #DDDCD6;
  --color-base-30: color-mix(
    in hsl,
    #DDDCD6,
    #D3D3CE
  );
  --color-base-35: #D3D3CE;
  --color-base-40: color-mix(
    in hsl,
    #D3D3CE,
    #B4B3AF
  );
  --color-base-50: #B4B3AF;
  --color-base-60: #797876;
  --color-base-70: color-mix(
    in hsl,
    #080808,
    #797876
  );
  --color-blue: #5c9fe4;
  --color-blue-cyan-mix: color-mix(
    in hsl,
    #5c9fe4,
    #3B9BA1
  );
  --color-blue-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5c9fe4, #3B9BA1)
      20%,
    transparent
  );
  --color-blue-green-mix: color-mix(
    in hsl,
    #5c9fe4,
    #689523
  );
  --color-blue-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5c9fe4, #689523)
      20%,
    transparent
  );
  --color-blue-orange-mix: color-mix(
    in hsl,
    #5c9fe4,
    #ED8126
  );
  --color-blue-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5c9fe4, #ED8126)
      20%,
    transparent
  );
  --color-blue-pink-mix: color-mix(
    in hsl,
    #5c9fe4,
    #E389CA
  );
  --color-blue-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5c9fe4, #E389CA)
      20%,
    transparent
  );
  --color-blue-purple-mix: color-mix(
    in hsl,
    #5c9fe4,
    #6F49AE
  );
  --color-blue-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5c9fe4, #6F49AE)
      20%,
    transparent
  );
  --color-blue-red-mix: color-mix(
    in hsl,
    #5c9fe4,
    #EB5325
  );
  --color-blue-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5c9fe4, #EB5325)
      20%,
    transparent
  );
  --color-blue-rgb: 92, 159, 228;
  --color-blue-yellow-mix: color-mix(
    in hsl,
    #5c9fe4,
    #E8C62A
  );
  --color-blue-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #5c9fe4, #E8C62A)
      20%,
    transparent
  );
  --color-cyan: #3B9BA1;
  --color-cyan-blue-mix: color-mix(
    in hsl,
    #3B9BA1,
    #5c9fe4
  );
  --color-cyan-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3B9BA1, #5c9fe4)
      20%,
    transparent
  );
  --color-cyan-green-mix: color-mix(
    in hsl,
    #3B9BA1,
    #689523
  );
  --color-cyan-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3B9BA1, #689523)
      20%,
    transparent
  );
  --color-cyan-orange-mix: color-mix(
    in hsl,
    #3B9BA1,
    #ED8126
  );
  --color-cyan-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3B9BA1, #ED8126)
      20%,
    transparent
  );
  --color-cyan-pink-mix: color-mix(
    in hsl,
    #3B9BA1,
    #E389CA
  );
  --color-cyan-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3B9BA1, #E389CA)
      20%,
    transparent
  );
  --color-cyan-purple-mix: color-mix(
    in hsl,
    #3B9BA1,
    #6F49AE
  );
  --color-cyan-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3B9BA1, #6F49AE)
      20%,
    transparent
  );
  --color-cyan-red-mix: color-mix(
    in hsl,
    #3B9BA1,
    #EB5325
  );
  --color-cyan-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3B9BA1, #EB5325)
      20%,
    transparent
  );
  --color-cyan-rgb: rgb(59, 155, 161);
  --color-cyan-yellow-mix: color-mix(
    in hsl,
    #3B9BA1,
    #E8C62A
  );
  --color-cyan-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #3B9BA1, #E8C62A)
      20%,
    transparent
  );
  --color-green: #689523;
  --color-green-blue-mix: color-mix(
    in hsl,
    #689523,
    #5c9fe4
  );
  --color-green-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #689523, #5c9fe4)
      20%,
    transparent
  );
  --color-green-cyan-mix: color-mix(
    in hsl,
    #689523,
    #3B9BA1
  );
  --color-green-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #689523, #3B9BA1)
      20%,
    transparent
  );
  --color-green-orange-mix: color-mix(
    in hsl,
    #689523,
    #ED8126
  );
  --color-green-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #689523, #ED8126)
      20%,
    transparent
  );
  --color-green-pink-mix: color-mix(
    in hsl,
    #689523,
    #E389CA
  );
  --color-green-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #689523, #E389CA)
      20%,
    transparent
  );
  --color-green-purple-mix: color-mix(
    in hsl,
    #689523,
    #6F49AE
  );
  --color-green-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #689523, #6F49AE)
      20%,
    transparent
  );
  --color-green-red-mix: color-mix(
    in hsl,
    #689523,
    #EB5325
  );
  --color-green-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #689523, #EB5325)
      20%,
    transparent
  );
  --color-green-rgb: rgb(104, 149, 35);
  --color-green-yellow-mix: color-mix(
    in hsl,
    #689523,
    #E8C62A
  );
  --color-green-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #689523, #E8C62A)
      20%,
    transparent
  );
  --color-orange: #ED8126;
  --color-orange-blue-mix: color-mix(
    in hsl,
    #ED8126,
    #5c9fe4
  );
  --color-orange-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #ED8126, #5c9fe4)
      20%,
    transparent
  );
  --color-orange-cyan-mix: color-mix(
    in hsl,
    #ED8126,
    #3B9BA1
  );
  --color-orange-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #ED8126, #3B9BA1)
      20%,
    transparent
  );
  --color-orange-green-mix: color-mix(
    in hsl,
    #ED8126,
    #689523
  );
  --color-orange-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #ED8126, #689523)
      20%,
    transparent
  );
  --color-orange-pink-mix: color-mix(
    in hsl,
    #ED8126,
    #E389CA
  );
  --color-orange-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #ED8126, #E389CA)
      20%,
    transparent
  );
  --color-orange-purple-mix: color-mix(
    in hsl,
    #ED8126,
    #6F49AE
  );
  --color-orange-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #ED8126, #6F49AE)
      20%,
    transparent
  );
  --color-orange-red-mix: color-mix(
    in hsl,
    #ED8126,
    #EB5325
  );
  --color-orange-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #ED8126, #EB5325)
      20%,
    transparent
  );
  --color-orange-rgb: rgb(237, 129, 38);
  --color-orange-yellow-mix: color-mix(
    in hsl,
    #ED8126,
    #E8C62A
  );
  --color-orange-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #ED8126, #E8C62A)
      20%,
    transparent
  );
  --color-pink: #E389CA;
  --color-pink-blue-mix: color-mix(
    in hsl,
    #E389CA,
    #5c9fe4
  );
  --color-pink-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E389CA, #5c9fe4)
      20%,
    transparent
  );
  --color-pink-cyan-mix: color-mix(
    in hsl,
    #E389CA,
    #3B9BA1
  );
  --color-pink-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E389CA, #3B9BA1)
      20%,
    transparent
  );
  --color-pink-green-mix: color-mix(
    in hsl,
    #E389CA,
    #689523
  );
  --color-pink-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E389CA, #689523)
      20%,
    transparent
  );
  --color-pink-orange-mix: color-mix(
    in hsl,
    #E389CA,
    #ED8126
  );
  --color-pink-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E389CA, #ED8126)
      20%,
    transparent
  );
  --color-pink-purple-mix: color-mix(
    in hsl,
    #E389CA,
    #6F49AE
  );
  --color-pink-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E389CA, #6F49AE)
      20%,
    transparent
  );
  --color-pink-red-mix: color-mix(
    in hsl,
    #E389CA,
    #EB5325
  );
  --color-pink-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E389CA, #EB5325)
      20%,
    transparent
  );
  --color-pink-rgb: rgb(227, 137, 202);
  --color-pink-yellow-mix: color-mix(
    in hsl,
    #E389CA,
    #E8C62A
  );
  --color-pink-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E389CA, #E8C62A)
      20%,
    transparent
  );
  --color-purple: #6F49AE;
  --color-purple-blue-mix: color-mix(
    in hsl,
    #6F49AE,
    #5c9fe4
  );
  --color-purple-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #6F49AE, #5c9fe4)
      20%,
    transparent
  );
  --color-purple-cyan-mix: color-mix(
    in hsl,
    #6F49AE,
    #3B9BA1
  );
  --color-purple-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #6F49AE, #3B9BA1)
      20%,
    transparent
  );
  --color-purple-green-mix: color-mix(
    in hsl,
    #6F49AE,
    #689523
  );
  --color-purple-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #6F49AE, #689523)
      20%,
    transparent
  );
  --color-purple-orange-mix: color-mix(
    in hsl,
    #6F49AE,
    #ED8126
  );
  --color-purple-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #6F49AE, #ED8126)
      20%,
    transparent
  );
  --color-purple-pink-mix: color-mix(
    in hsl,
    #6F49AE,
    #E389CA
  );
  --color-purple-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #6F49AE, #E389CA)
      20%,
    transparent
  );
  --color-purple-red-mix: color-mix(
    in hsl,
    #6F49AE,
    #EB5325
  );
  --color-purple-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #6F49AE, #EB5325)
      20%,
    transparent
  );
  --color-purple-rgb: rgb(111, 73, 174);
  --color-purple-yellow-mix: color-mix(
    in hsl,
    #6F49AE,
    #E8C62A
  );
  --color-purple-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #6F49AE, #E8C62A)
      20%,
    transparent
  );
  --color-red: #EB5325;
  --color-red-blue-mix: color-mix(
    in hsl,
    #EB5325,
    #5c9fe4
  );
  --color-red-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #EB5325, #5c9fe4)
      20%,
    transparent
  );
  --color-red-cyan-mix: color-mix(
    in hsl,
    #EB5325,
    #3B9BA1
  );
  --color-red-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #EB5325, #3B9BA1)
      20%,
    transparent
  );
  --color-red-green-mix: color-mix(
    in hsl,
    #EB5325,
    #689523
  );
  --color-red-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #EB5325, #689523)
      20%,
    transparent
  );
  --color-red-orange-mix: color-mix(
    in hsl,
    #EB5325,
    #ED8126
  );
  --color-red-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #EB5325, #ED8126)
      20%,
    transparent
  );
  --color-red-pink-mix: color-mix(
    in hsl,
    #EB5325,
    #E389CA
  );
  --color-red-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #EB5325, #E389CA)
      20%,
    transparent
  );
  --color-red-purple-mix: color-mix(
    in hsl,
    #EB5325,
    #6F49AE
  );
  --color-red-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #EB5325, #6F49AE)
      20%,
    transparent
  );
  --color-red-rgb: rgb(235, 83, 37);
  --color-red-yellow-mix: color-mix(
    in hsl,
    #EB5325,
    #E8C62A
  );
  --color-red-yellow-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #EB5325, #E8C62A)
      20%,
    transparent
  );
  --color-yellow: #E8C62A;
  --color-yellow-blue-mix: color-mix(
    in hsl,
    #E8C62A,
    #5c9fe4
  );
  --color-yellow-blue-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E8C62A, #5c9fe4)
      20%,
    transparent
  );
  --color-yellow-cyan-mix: color-mix(
    in hsl,
    #E8C62A,
    #3B9BA1
  );
  --color-yellow-cyan-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E8C62A, #3B9BA1)
      20%,
    transparent
  );
  --color-yellow-green-mix: color-mix(
    in hsl,
    #E8C62A,
    #689523
  );
  --color-yellow-green-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E8C62A, #689523)
      20%,
    transparent
  );
  --color-yellow-orange-mix: color-mix(
    in hsl,
    #E8C62A,
    #ED8126
  );
  --color-yellow-orange-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E8C62A, #ED8126)
      20%,
    transparent
  );
  --color-yellow-pink-mix: color-mix(
    in hsl,
    #E8C62A,
    #E389CA
  );
  --color-yellow-pink-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E8C62A, #E389CA)
      20%,
    transparent
  );
  --color-yellow-purple-mix: color-mix(
    in hsl,
    #E8C62A,
    #6F49AE
  );
  --color-yellow-purple-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E8C62A, #6F49AE)
      20%,
    transparent
  );
  --color-yellow-red-mix: color-mix(
    in hsl,
    #E8C62A,
    #EB5325
  );
  --color-yellow-red-mix-bg: color-mix(
    in hsl,
    color-mix(in hsl, #E8C62A, #EB5325)
      20%,
    transparent
  );
  --color-yellow-rgb: rgb(232, 198, 42);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --dimmed: 0.55;
  --divider-color: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --divider-color-hover: #5770B9;
  --drag-ghost-background: #DDDCD6;
  --drag-ghost-text-color: #5770B9;
  --dropdown-background: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --dropdown-background-hover: #FAF7EF;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  ), inset 0 0 0 1px color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --embed-border-start: 2px solid #5770B9;
  --expand: 110%;
  --file-header-background: #FAF7EF;
  --file-header-background-focused: #FAF7EF;
  --file-header-font-size: 14.56227px;
  --file-line-width: 50rem;
  --flair-background: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --flair-color: #080808;
  --flexcyon-accent: #5770B9;
  --flexcyon-accent-h: 225;
  --flexcyon-accent-l: 53%;
  --flexcyon-accent-s: 41%;
  --flexcyon-active-indicator: '>> ';
  --flexcyon-anim-duration: 0.3s;
  --flexcyon-anim-easing: ease-in-out;
  --flexcyon-anim-rotate-amount: 50deg;
  --flexcyon-anim-slide-amount: 56.63105px;
  --flexcyon-anim-start-opacity: 0.55;
  --flexcyon-anim-start-scale-amt: 0.33;
  --flexcyon-ascii-alignment: left;
  --flexcyon-ascii-art: ' _______________ ___ ____/__ /________ ____________ ______________ __ /_ __ /_ _ \\_ |/_/ ___/_ / / / __ \\_ __ \\ _ __/ _ / / __/_ / /__ _ /_/ // /_/ / / / / /_/ /_/ \\___//_/|_| \\___/ _\\__, / \\____//_/ /_/ /____/  ';
  --flexcyon-ascii-checkboxes-font-size: 1.2rem;
  --flexcyon-ascii-line-height: 1.5;
  --flexcyon-ascii-max-font-size: 14px;
  --flexcyon-ascii-max-width: 50rem;
  --flexcyon-ascii-scaling-factor: 1;
  --flexcyon-base-01: #FAF7EF;
  --flexcyon-base-01-02-mix: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --flexcyon-base-02: #EDEBE5;
  --flexcyon-base-02-03-mix: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --flexcyon-base-03: #DDDCD6;
  --flexcyon-base-03-04-mix: color-mix(
    in hsl,
    #DDDCD6,
    #D3D3CE
  );
  --flexcyon-base-04: #D3D3CE;
  --flexcyon-base-04-05-mix: color-mix(
    in hsl,
    #D3D3CE,
    #B4B3AF
  );
  --flexcyon-base-05: #B4B3AF;
  --flexcyon-base-grey-dark: #797876;
  --flexcyon-base-grey-light: #080808;
  --flexcyon-base-grey-mix: color-mix(
    in hsl,
    #080808,
    #797876
  );
  --flexcyon-base-grey-scroll: #3f495e;
  --flexcyon-base-grey-scroll-hover: #5c6782;
  --flexcyon-base-grey-tab: #71777f;
  --flexcyon-base-grey-token: #586582;
  --flexcyon-bases-card-delay-factor: 12.5;
  --flexcyon-bases-card-flex-gorw: 0.55;
  --flexcyon-bases-card-flex-grow: 0.55;
  --flexcyon-bases-card-padding: 8px
    0px
    0px
    2px;
  --flexcyon-bases-card-padding-bottom: 0px;
  --flexcyon-bases-card-padding-left: 2px;
  --flexcyon-bases-card-padding-right: 0px;
  --flexcyon-bases-card-padding-top: 8px;
  --flexcyon-bases-padding-horiz: 16px;
  --flexcyon-bases-padding-verti: 16px;
  --flexcyon-bases-table-content-alignment: left;
  --flexcyon-bases-td-padding-l: 2px;
  --flexcyon-bg-image-blend-mode: darken;
  --flexcyon-bg-image-blur: 0px;
  --flexcyon-bg-image-position: center;
  --flexcyon-bg-image-repeat: no-repeat;
  --flexcyon-bg-image-sidebar-left-url: url("");
  --flexcyon-bg-image-sidebar-right-url: url("");
  --flexcyon-bg-image-size: contain;
  --flexcyon-block-label-opacity: 0.55;
  --flexcyon-blue: #5c9fe4;
  --flexcyon-brightness-ratio: 1;
  --flexcyon-callout-bg-opacity: 20%;
  --flexcyon-callout-first-codeblock-margin-top: 1rem;
  --flexcyon-callout-flashcard-animation-duration: 0.5s;
  --flexcyon-callout-horiz-padding: 24px;
  --flexcyon-callout-icon-right-padding: 4px;
  --flexcyon-callout-pop-animation-duration: 0.2s;
  --flexcyon-callout-radix: 16px;
  --flexcyon-callout-verti-padding: 12px;
  --flexcyon-callout-vertical-margin: 1em;
  --flexcyon-callouts-flashcard-height: 250px;
  --flexcyon-callouts-flashcard-width: 250px;
  --flexcyon-canvas-blur-intensity: 1px;
  --flexcyon-code-error: #EB5325;
  --flexcyon-code-file-ext-font-w: 500;
  --flexcyon-code-file-ext-prefix: '.';
  --flexcyon-code-function: #E8C62A;
  --flexcyon-code-keyword: #3B9BA1;
  --flexcyon-code-operator: #5c9fe4;
  --flexcyon-code-variable: #3B9BA1;
  --flexcyon-codeblock-fmt-ext: lowercase;
  --flexcyon-comm-item-opacity: 0.89;
  --flexcyon-comm-text-padding: 3px 16px;
  --flexcyon-contrast-ratio: 1;
  --flexcyon-cursor-duration: 42.5ms;
  --flexcyon-cursor-timing-fn: ease-in;
  --flexcyon-cust-hr-str: 'f';
  --flexcyon-cust-hr-str-font-size: 1.11803em;
  --flexcyon-cust-hr-str-horiz-padding: 8px;
  --flexcyon-cyan: #3B9BA1;
  --flexcyon-dataview-horizontal-padding: 8px;
  --flexcyon-default-ol-style: decimal;
  --flexcyon-editor-bg-color: color-mix(
    in oklch,
    color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  ),
    #EDEBE5
  );
  --flexcyon-editor-bg-color-2: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --flexcyon-editor-bg-rotation: 0deg;
  --flexcyon-editor-bg-width: 15px;
  --flexcyon-editor-dot-size: 2.5px;
  --flexcyon-editor-margin-top: 18px;
  --flexcyon-editor-writing-indentation: 16px;
  --flexcyon-exp-dimmed-nav-size: 13.3623px;
  --flexcyon-external-link-color: #5C9FE4;
  --flexcyon-external-link-hover: color-mix(
    in hsl shorter hue,
    #5C9FE4,
    #797876
  );
  --flexcyon-fc-dimmed-items-opacity: 0.89;
  --flexcyon-heading-1-alignment: left;
  --flexcyon-heading-2-alignment: left;
  --flexcyon-heading-3-alignment: left;
  --flexcyon-heading-4-alignment: left;
  --flexcyon-heading-5-alignment: left;
  --flexcyon-heading-6-alignment: left;
  --flexcyon-highlight-border-radius: 4px;
  --flexcyon-highlight-horiz-padding: 2.5px;
  --flexcyon-highlight-verti-padding: 1px;
  --flexcyon-input-horiz-padding: 8px;
  --flexcyon-input-verti-padding: 8px;
  --flexcyon-l-spacing: 0px;
  --flexcyon-lime-green: #689523;
  --flexcyon-link-color: #6F49AE;
  --flexcyon-link-hover: color-mix(
    in hsl shorter hue,
    #6F49AE,
    #797876
  );
  --flexcyon-link-unresolved-color: #6F49AE;
  --flexcyon-media-embed-vertical-margin: 8px;
  --flexcyon-meta-container-padding-left: 14px;
  --flexcyon-modal-bg-url: url("");
  --flexcyon-modal-dark-intensity: 1;
  --flexcyon-modal-image-blend-mode: lighten;
  --flexcyon-modal-image-blur: 0px;
  --flexcyon-modal-image-position: center;
  --flexcyon-modal-image-repeat: no-repeat;
  --flexcyon-modal-image-size: cover;
  --flexcyon-mode-view-header-title-horiz-padding: 12px;
  --flexcyon-mode-view-header-title-verti-padding: 4px;
  --flexcyon-new-tab-bg-wrapper: linear-gradient(
    to right,
    #5770B9,
    #E389CA,
    #689523
  );
  --flexcyon-omnisearch-body-margin-left: 1.45rem;
  --flexcyon-orange: #ED8126;
  --flexcyon-os-detail-padding-r: 24px;
  --flexcyon-palette-cyan-hover: color-mix(
    in hsl shorter hue,
    #3B9BA1,
    #797876
  );
  --flexcyon-palette-lilac-hover: color-mix(
    in hsl shorter hue,
    #6F49AE,
    #797876
  );
  --flexcyon-pink: #E389CA;
  --flexcyon-purple-lilac: #6F49AE;
  --flexcyon-quote-credit: 'bladeacer';
  --flexcyon-quote-credit-prefix: '-';
  --flexcyon-quote-font-size: 24px;
  --flexcyon-quote-val: 'This is a placeholder quotein the Flexcyon Theme.';
  --flexcyon-red-salmon: #EB5325;
  --flexcyon-repl-active-line-str: '-';
  --flexcyon-repl-active-str-space: 0px;
  --flexcyon-saturation-ratio: 1;
  --flexcyon-screen-dimens-padding-l: 16px;
  --flexcyon-search-container-horiz-padding: 16px;
  --flexcyon-search-container-verti-padding: 8px;
  --flexcyon-settings-installed-tooltip-left-margin: 1rem;
  --flexcyon-side-toggle-button-no-ribbon: 11px 16px 7px 0px;
  --flexcyon-status-hide-hover-duration: 0.35s;
  --flexcyon-status-hide-hover-function: ease-out;
  --flexcyon-status-hide-until-hover-text: 'Show status';
  --flexcyon-status-hide-until-hover-translation: 80vw;
  --flexcyon-status-live-text: 'LIVE';
  --flexcyon-status-reading-text: 'READ';
  --flexcyon-status-source-text: 'SOURCE';
  --flexcyon-style-settings-indent-width: 4px;
  --flexcyon-suggestion-horiz-padding: 12px;
  --flexcyon-suggestion-verti-padding: 8px;
  --flexcyon-table-reading-mode-width: 100%;
  --flexcyon-td-horiz-padding: 10px;
  --flexcyon-td-live-pad-scale: 0.2;
  --flexcyon-td-verti-padding: 5px;
  --flexcyon-text-muted: #6F768599;
  --flexcyon-top-actions-alignment: center;
  --flexcyon-tree-item-horiz-padding: 10px;
  --flexcyon-tree-item-verti-padding: 2px;
  --flexcyon-var-comps-sugg-horiz-padding: 12px;
  --flexcyon-var-comps-sugg-vert-padding: 7px;
  --flexcyon-view-header-breadcrumb-max-w: 12.5vw;
  --flexcyon-vim-bottom-pos-w-status: 40px;
  --flexcyon-vim-bottom-positioning: -4px;
  --flexcyon-vim-command-text: 'COMMAND';
  --flexcyon-vim-insert-text: 'INSERT';
  --flexcyon-vim-left-positioning: 6px;
  --flexcyon-vim-normal-text: 'NORMAL';
  --flexcyon-w-spacing: 0px;
  --flexcyon-yellow: #E8C62A;
  --flexyon-base-grey-token: #586582;
  --font-mermaid: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-ui-large: 17.79833px;
  --font-ui-medium: 16.1803px;
  --font-ui-small: 14.56227px;
  --font-ui-smaller: 12.94424px;
  --footnote-divider-color: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --footnote-id-color: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --footnote-id-color-no-occurrences: #6F768599;
  --footnote-input-background-active: #EDEBE5;
  --footnote-line-height: 1.4;
  --footnote-radius: 2px;
  --graph-control-horiz-padding: 12px;
  --graph-control-verti-padding: 6px;
  --graph-line: #DDDCD6;
  --graph-node: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --graph-node-attachment: #E8C62A;
  --graph-node-focused: #5770B9;
  --graph-node-tag: #6F49AE;
  --graph-node-unresolved: #EB5325;
  --graph-text: #080808;
  --gray: var(--text-muted);
  --h: tan(atan2(1380px, 1px));
  --h1-color: #5c9fe4;
  --h1-line-height: 1.61;
  --h1-size: 1.81803em;
  --h2-color: #6F49AE;
  --h2-line-height: 1.51;
  --h2-size: 1.61803em;
  --h2-weight: 675;
  --h3-color: #3B9BA1;
  --h3-line-height: 1.41;
  --h3-size: 1.41803em;
  --h3-weight: 650;
  --h4-color: #E389CA;
  --h4-line-height: 1.31;
  --h4-size: 1.21803em;
  --h4-weight: 625;
  --h5-color: #689523;
  --h5-line-height: 1.21;
  --h5-size: 1.11803em;
  --h5-weight: 600;
  --h6-color: #E8C62A;
  --h6-line-height: 1.21;
  --h6-size: 1.01803em;
  --h6-weight: 575;
  --heading-formatting: #6F768599;
  --highlight: var(--text-highlight-bg);
  --hr-color: #393E48;
  --icon-color: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --icon-color-active: #5770B9;
  --icon-color-focused: #5770B9;
  --icon-color-hover: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --icon-stroke: 2px;
  --icon-xs: 12.25px;
  --img-border-radius: 15px;
  --inline-title-color: #5c9fe4;
  --inline-title-size: 1.802em;
  --input-date-separator: #6F768599;
  --input-padding: 8px
    8px;
  --input-placeholder-color: #6F768599;
  --input-radius: 0px;
  --interactive-accent: #5770B9;
  --interactive-accent-hover: color-mix(
    in hsl shorter hue,
    #5770B9 75%,
    transparent
  );
  --interactive-accent-hsl: 225, 41%, 53%;
  --interactive-hover: #FAF7EF;
  --interactive-normal: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --italic-color: #5770B9;
  --less-letter-spacing: -3px;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.4;
  --line-height-tight: 1.25;
  --link-color: #6F49AE;
  --link-color-hover: color-mix(
    in hsl shorter hue,
    #6F49AE,
    #797876
  );
  --link-external-color: #5C9FE4;
  --link-external-color-hover: color-mix(
    in hsl shorter hue,
    #5C9FE4,
    #797876
  );
  --link-unresolved-color: #6F49AE;
  --link-unresolved-decoration-color: #6F49AE;
  --link-unresolved-decoration-style: dashed;
  --list-marker-color: #3B9BA1;
  --list-marker-color-collapsed: #689523;
  --list-marker-color-hover: color-mix(
    in hsl shorter hue,
    #3B9BA1,
    #797876
  );
  --menu-background: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --menu-border-color: transparent;
  --menu-radius: 4px;
  --metadata-border-color: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --metadata-divider-color: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --metadata-input-background-active: #EDEBE5;
  --metadata-input-text-color: #080808;
  --metadata-label-background-active: #EDEBE5;
  --metadata-label-text-color: #6F49AE;
  --metadata-label-text-color-hover: color-mix(
    in hsl shorter hue,
    #6F49AE,
    #797876
  );
  --metadata-property-background-active: #EDEBE5;
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(
    in hsl,
    #DDDCD6,
    #D3D3CE
  );
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent;
  --metadata-sidebar-input-font-size: 14.56227px;
  --metadata-sidebar-label-font-size: 14.56227px;
  --modal-background: #FAF7EF;
  --modal-border-color: #EDEBE5;
  --modal-radius: 6px;
  --nav-collapse-icon-color: #6F768599;
  --nav-collapse-icon-color-collapsed: #6F768599;
  --nav-heading-color: #080808;
  --nav-heading-color-collapsed: #6F768599;
  --nav-heading-color-collapsed-hover: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --nav-heading-color-hover: #080808;
  --nav-item-background-active: #EDEBE5;
  --nav-item-background-hover: #EDEBE5;
  --nav-item-background-selected: #DDDCD6;
  --nav-item-color: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --nav-item-color-active: #5770B9;
  --nav-item-color-highlighted: #5770B9;
  --nav-item-color-hover: #080808;
  --nav-item-color-selected: #ED8126;
  --nav-item-radius: 2px;
  --nav-item-size: 14.56227px;
  --nav-tag-color: #6F768599;
  --nav-tag-color-active: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --nav-tag-color-hover: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --nav-tag-radius: 2px;
  --oz-fta-all-panes-active-text-color: #080808;
  --oz-fta-file-font-size: calc(16.1803px - 0.1rem);
  --oz-fta-file-pane-file-name-color: #6F768599;
  --oz-fta-folder-font-size: calc(16.1803px - 0.1rem);
  --oz-fta-folder-pane-file-name-color: #080808;
  --oz-fta-folder-panes-file-name-color: #080808;
  --pdf-background: #FAF7EF;
  --pdf-page-background: #FAF7EF;
  --pdf-sidebar-background: #FAF7EF;
  --pill-border-color: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --pill-border-color-hover: transparent;
  --pill-color: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --pill-color-hover: #080808;
  --pill-color-remove: #6F768599;
  --pill-color-remove-hover: #5770B9;
  --prompt-background: #FAF7EF;
  --prompt-border-color: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --r-background-color: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --r-heading-color: #080808;
  --r-heading-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --r-heading-margin: 16px 0px;
  --r-heading-text-transform: capitalize;
  --r-heading1-size: 1.81803em;
  --r-heading2-size: 1.61803em;
  --r-heading3-size: 1.41803em;
  --r-heading4-size: 1.21803em;
  --r-link-color: hsla(
    205,
    35%,
    58%,
    88%
  );
  --r-main-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --r-main-font-size: max-content;
  --radius-l: 6px;
  --radius-m: 4px;
  --radius-s: 2px;
  --radius-x1: 8px;
  --radius-xl: 8px;
  --raised-background: color-mix(in srgb, #FAF7EF 65%, transparent) linear-gradient(#FAF7EF, color-mix(in srgb, #FAF7EF 65%, transparent));
  --ribbon-background: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --ribbon-background-collapsed: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --ribbon-width: 48px;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 6px;
  --search-clear-button-color: #EB5325;
  --search-icon-color: #5770B9;
  --search-result-background: #FAF7EF;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #080808;
  --setting-group-heading-size: 16.1803px;
  --setting-items-background: #EDEBE5;
  --setting-items-border-color: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --setting-items-radius: 6px;
  --slider-thumb-border-color: transparent;
  --slider-track-background: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --status-bar-background: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --status-bar-border-color: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --status-bar-font-size: 13.753255px;
  --status-bar-position: absolute;
  --status-bar-radius: 4px 0 0 0;
  --status-bar-text-color: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --suggestion-background: #FAF7EF;
  --sync-avatar-color-1: #EB5325;
  --sync-avatar-color-2: #ED8126;
  --sync-avatar-color-3: #E8C62A;
  --sync-avatar-color-4: #689523;
  --sync-avatar-color-5: #3B9BA1;
  --sync-avatar-color-6: #5c9fe4;
  --sync-avatar-color-7: #6F49AE;
  --sync-avatar-color-8: #E389CA;
  --tab-background-active: #FAF7EF;
  --tab-container-background: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --tab-curve: 0px;
  --tab-divider-color: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --tab-font-size: 14.56227px;
  --tab-outline-color: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --tab-outline-width: 0px;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-stacked-font-size: 14.56227px;
  --tab-switcher-background: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  ), transparent);
  --tab-switcher-preview-radius: 8px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(86, 111, 184);
  --tab-text-color: #B4B3AF;
  --tab-text-color-active: #5770B9;
  --tab-text-color-focused: #B4B3AF;
  --tab-text-color-focused-active: #5770B9;
  --tab-text-color-focused-active-current: #5770B9;
  --tab-text-color-focused-highlighted: #5770B9;
  --table-add-button-border-color: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --table-background: #FAF7EF;
  --table-border-color: #6F768566;
  --table-column-alt-background: #FAF7EF;
  --table-drag-handle-background-active: #5770B9;
  --table-drag-handle-color: #6F768599;
  --table-drag-handle-color-active: #DDDCD6;
  --table-header-background: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --table-header-background-hover: #FAF7EF;
  --table-header-border-color: #6F768566;
  --table-header-color: #080808;
  --table-header-size: large;
  --table-line-height: 1.25;
  --table-row-alt-background-hover: #FAF7EF;
  --table-row-background-hover: #FAF7EF;
  --table-selection: rgba(86, 111, 184, 0.1);
  --table-selection-border-color: #5770B9;
  --tag-background: color-mix(
    in hsl shorter hue,
    #3B9BA1 25%,
    transparent
  );
  --tag-background-hover: color-mix(
    in hsl shorter hue,
    color-mix(
    in hsl shorter hue,
    #3B9BA1,
    #797876
  ) 25%,
    transparent
  );
  --tag-border-color: rgba(86, 111, 184, 0.15);
  --tag-border-color-hover: rgba(86, 111, 184, 0.15);
  --tag-color: #3B9BA1;
  --tag-color-hover: color-mix(
    in hsl shorter hue,
    #3B9BA1,
    #797876
  );
  --tag-decoration-hover: underline;
  --tertiary: var(--interactive-accent-hover);
  --text-accent: #5770B9;
  --text-error: #EB5325;
  --text-faint: #6F768599;
  --text-highlight-bg: color-mix(in hsl, #3B9BA1 20%, transparent);
  --text-muted: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --text-normal: #080808;
  --text-on-accent: #DDDCD6;
  --text-selection: color-mix(
    in hsl shorter hue,
    #D3D3CE 20%,
    transparent
  );
  --text-success: #689523;
  --text-warning: #EB5325;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --titlebar-background-focused: color-mix(
    in hsl,
    #FAF7EF 70%,
    #EDEBE5 30%
  );
  --titlebar-border-color: color-mix(
    in hsl,
    #EDEBE5,
    #DDDCD6
  );
  --titlebar-text-color: #6F768599;
  --titlebar-text-color-focused: color-mix(
    in hsl,
    #6F768599,
    #080808
  );
  --toggle-thumb-color: #DDDCD6;
  --upsize: 103%;
  --vault-name-color: #5770B9;
  --vault-profile-color: #080808;
  --vault-profile-color-hover: #080808;
  --vault-profile-font-size: 14.56227px;
  --w: tan(atan2(2538px, 1px));
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: color(srgb 0.968337 0.956082 0.922251);
  color: rgb(8, 8, 8);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(250, 247, 239);
  color: rgb(8, 8, 8);
}

body .page > div#quartz-body div.sidebar {
  background-color: color(srgb 0.968337 0.956082 0.922251);
  color: rgb(8, 8, 8);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.899384 0.893078 0.867283);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: color(srgb 0.968337 0.956082 0.922251);
  border-left-color: color(srgb 0.899384 0.893078 0.867283);
  color: rgb(8, 8, 8);
}

body div#quartz-root {
  background-color: rgb(250, 247, 239);
  color: rgb(8, 8, 8);
}`,
    typography: `body .page article p > b, b {
  color: rgb(235, 83, 37);
  outline: rgb(235, 83, 37) none 0px;
  text-decoration: rgb(235, 83, 37);
  text-decoration-color: rgb(235, 83, 37);
}

body .page article p > em, em {
  color: rgb(87, 112, 185);
  outline: rgb(87, 112, 185) none 0px;
  text-decoration: rgb(87, 112, 185);
  text-decoration-color: rgb(87, 112, 185);
}

body .page article p > i, i {
  color: rgb(87, 112, 185);
  outline: rgb(87, 112, 185) none 0px;
  text-decoration: rgb(87, 112, 185);
  text-decoration-color: rgb(87, 112, 185);
}

body .page article p > strong, strong {
  color: rgb(235, 83, 37);
  outline: rgb(235, 83, 37) none 0px;
  text-decoration: rgb(235, 83, 37);
  text-decoration-color: rgb(235, 83, 37);
}

body .text-highlight {
  background-color: color(srgb 0.231373 0.607843 0.631373 / 0.2);
  color: rgb(8, 8, 8);
  font-weight: 525;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body del {
  color: rgb(8, 8, 8);
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: line-through rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body p {
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  outline: color(srgb 0.19229 0.196573 0.205749 / 0.8) none 0px;
  text-decoration: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  text-decoration-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}`,
    links: `body a.external, footer a {
  color: rgb(92, 159, 228);
  outline: rgb(92, 159, 228) none 0px;
  text-decoration: underline rgb(92, 159, 228);
  text-decoration-color: rgb(92, 159, 228);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(111, 73, 174);
  outline: rgb(111, 73, 174) none 0px;
  text-decoration: underline rgb(111, 73, 174);
  text-decoration-color: rgb(111, 73, 174);
}

body a.internal.broken {
  color: rgb(111, 73, 174);
  outline: rgb(111, 73, 174) none 0px;
  text-decoration: underline dashed rgb(111, 73, 174);
  text-decoration-color: rgb(111, 73, 174);
  text-decoration-style: dashed;
}`,
    lists: `body dd {
  color: rgb(8, 8, 8);
}

body dt {
  color: rgb(8, 8, 8);
}

body ol > li {
  color: rgb(8, 8, 8);
}

body ol.overflow {
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body ul > li {
  color: rgb(8, 8, 8);
}

body ul.overflow {
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(111, 118, 133, 0.6);
  text-decoration: rgba(111, 118, 133, 0.6);
}`,
    tables: `body .spacer {
  background-color: color(srgb 0.968337 0.956082 0.922251);
}

body .table-container {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body table {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: rgb(8, 8, 8);
  width: 766px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(250, 247, 239);
}

body td {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: rgb(8, 8, 8);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

body th {
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
}

body thead {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
}

body tr {
  background-color: color(srgb 0.899384 0.893078 0.867283);
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.968337 0.956082 0.922251);
  border-bottom-color: color(srgb 0.899384 0.893078 0.867283);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.899384 0.893078 0.867283);
  border-right-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.968337 0.956082 0.922251);
  border-bottom-color: color(srgb 0.899384 0.893078 0.867283);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.899384 0.893078 0.867283);
  border-right-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(8, 8, 8);
}

body pre > code > [data-line] {
  border-left-color: rgb(232, 198, 42);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(232, 198, 42);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(232, 198, 42);
  border-left-color: rgb(232, 198, 42);
  border-right-color: rgb(232, 198, 42);
  border-top-color: rgb(232, 198, 42);
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0.968337 0.956082 0.922251);
  border-bottom-color: color(srgb 0.899384 0.893078 0.867283);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.899384 0.893078 0.867283);
  border-right-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body pre:has(> code) {
  background-color: color(srgb 0.968337 0.956082 0.922251);
  border-bottom-color: color(srgb 0.899384 0.893078 0.867283);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.899384 0.893078 0.867283);
  border-right-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `body audio {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figcaption {
  color: rgb(8, 8, 8);
}

body figure {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body img {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body video {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    embeds: `body .file-embed {
  background-color: rgb(237, 235, 229);
  border-bottom-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-right-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-top-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .footnotes {
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

body .transclude {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(87, 112, 185);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body .transclude-inner {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(87, 112, 185);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  text-decoration: line-through color(srgb 0.19229 0.196573 0.205749 / 0.8);
  text-decoration-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}

body input[type=checkbox] {
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(92, 159, 228);
  border-right-color: rgb(92, 159, 228);
  border-top-color: rgb(92, 159, 228);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='*'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='-'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='/'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='>'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='?'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='I'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='S'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='b'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='c'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='d'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='f'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='i'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='k'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='l'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='p'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='u'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='w'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  background-color: rgb(250, 247, 239);
  border-bottom-color: color(srgb 0.899384 0.893078 0.867283);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.899384 0.893078 0.867283);
  border-right-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space {
  background-color: rgb(250, 247, 239);
  border-bottom-color: color(srgb 0.899384 0.893078 0.867283);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: color(srgb 0.899384 0.893078 0.867283);
  border-right-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > * {
  color: rgb(8, 8, 8);
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(237, 235, 229);
  color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.899384 0.893078 0.867283);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: color(srgb 0.899384 0.893078 0.867283);
  border-right-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0.968337 0.956082 0.922251);
  border-left-color: rgb(87, 112, 185);
  border-right-color: rgb(87, 112, 185);
  border-top-color: rgb(87, 112, 185);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(237, 235, 229);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(8, 8, 8);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0.231373 0.607843 0.631373 / 0.25);
  border-bottom-color: rgba(86, 111, 184, 0.15);
  border-left-color: rgba(86, 111, 184, 0.15);
  border-right-color: rgba(86, 111, 184, 0.15);
  border-top-color: rgba(86, 111, 184, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(59, 155, 161);
}

body h1 {
  color: rgb(92, 159, 228);
}

body h2 {
  color: rgb(111, 73, 174);
}

body h2.page-title, h2.page-title a {
  color: rgb(92, 159, 228);
}

body h3 {
  color: rgb(59, 155, 161);
}

body h4 {
  color: rgb(227, 137, 202);
}

body h5 {
  color: rgb(104, 149, 35);
}

body h6 {
  color: rgb(232, 198, 42);
}

body hr {
  border-bottom-color: color(srgb 0.899384 0.893078 0.867283);
  border-left-color: color(srgb 0.899384 0.893078 0.867283);
  border-right-color: color(srgb 0.899384 0.893078 0.867283);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
}

body ::-webkit-scrollbar-corner {
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
}

body ::-webkit-scrollbar-track {
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  text-decoration: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  text-decoration: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  text-decoration: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(237, 235, 229);
  border-bottom-color: rgb(87, 112, 185);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(87, 112, 185);
  border-right-color: rgb(87, 112, 185);
  border-top-color: rgb(87, 112, 185);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(87, 112, 185);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-right-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-top-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-left-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-left-width: 0px;
  border-right-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-top-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-top-left-radius: 4px;
  border-top-width: 0px;
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}

body footer ul li a {
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  text-decoration: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(8, 8, 8);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  text-decoration: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body li.section-li > .section .meta {
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}

body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  text-decoration: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}

body ul.section-ul {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-right-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-top-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}

body .darkmode svg {
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  stroke: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}`,
    breadcrumbs: `body .breadcrumb-container {
  background-color: color(srgb 0.899384 0.893078 0.867283);
  border-bottom-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-right-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-top-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-top-left-radius: 16px;
  border-top-right-radius: 2px;
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}

body .breadcrumb-element p {
  color: rgba(111, 118, 133, 0.6);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

body .metadata {
  border-bottom-color: color(srgb 0.899384 0.893078 0.867283);
  border-left-color: color(srgb 0.899384 0.893078 0.867283);
  border-right-color: color(srgb 0.899384 0.893078 0.867283);
  border-top-color: color(srgb 0.899384 0.893078 0.867283);
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  padding-left: 14px;
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-left-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-right-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  border-top-color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
  color: color(srgb 0.19229 0.196573 0.205749 / 0.8);
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(8, 8, 8);
}

body abbr {
  color: rgb(8, 8, 8);
  text-decoration: underline dotted rgb(8, 8, 8);
}

body details {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body input[type=text] {
  border-bottom-color: rgb(111, 73, 174);
  border-left-color: rgb(111, 73, 174);
  border-right-color: rgb(111, 73, 174);
  border-top-color: rgb(111, 73, 174);
  color: rgb(111, 73, 174);
}

body kbd {
  background-color: color(srgb 0.968337 0.956082 0.922251);
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

body progress {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body sub {
  color: rgb(8, 8, 8);
}

body summary {
  color: rgb(8, 8, 8);
}

body sup {
  color: rgb(8, 8, 8);
}`,
  },
};
