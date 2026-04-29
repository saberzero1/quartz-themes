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
  --accent-h: var(--flexcyon-accent-h, 105.5);
  --accent-l: var(--flexcyon-accent-l, 59.5%);
  --accent-s: var(--flexcyon-accent-s, 77.5%);
  --background-modifier-active-hover: var(--color-base-25, #24262C);
  --background-modifier-border: var(--color-base-20, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --background-modifier-border-focus: var(--color-base-30, color-mix(
    in oklch,
    #24262C,
    #4D566B
  ));
  --background-modifier-border-hover: var(--color-base-35, transparent);
  --background-modifier-error: rgb(
    var(--color-red-rgb),
    calc(var(--dimmed) + 0.3)
  );
  --background-modifier-error-hover: var(--color-red, #C03A47);
  --background-modifier-error-rgb: var(--color-red-rgb, rgb(192, 58, 71));
  --background-modifier-form-field: var(--color-base-20, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --background-modifier-hover: var(--color-base-20, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --background-modifier-message: var(--color-base-20, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --background-modifier-success: var(--color-green, #A1C05C);
  --background-modifier-success-rgb: var(--color-green-rgb, rgb(161, 192, 92));
  --background-primary: var(--color-base-10, #191D28);
  --background-primary-alt: var(--color-base-25, #24262C);
  --background-secondary: var(--color-base-00, #14161C);
  --background-secondary-alt: var(--color-base-20, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --bases-border-r: 16px;
  --bases-cards-background: var(--background-primary, #191D28);
  --bases-cards-cover-background: var(--background-secondary, #14161C);
  --bases-cards-group-padding: 16px;
  --bases-cards-radius: var(--radius-m, 4px);
  --bases-embed-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-embed-padding: 4px;
  --bases-group-heading-property-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --bases-group-heading-property-size: var(--font-ui-smaller, 12.94424px);
  --bases-no-img-str: 'No image path could be found for this file';
  --bases-table-border-color: var(--table-border-color, #6F768566);
  --bases-table-cell-background-active: var(--background-primary, #191D28);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #24262C);
  --bases-table-cell-background-selected: var(--table-selection, hsla(105.5, 77.5%, 59.5%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-group-background: var(--background-primary-alt, #24262C);
  --bases-table-header-background: var(--background-primary, #191D28);
  --bases-table-header-background-hover: var(--background-modifier-hover, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --bases-table-header-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --bases-table-row-background-hover: var(--table-row-background-hover, #191D28);
  --bases-table-summary-background: var(--background-primary, #191D28);
  --bases-table-summary-background-hover: var(--background-modifier-hover, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --blockquote-border-color: var(--interactive-accent, color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ));
  --bold-color: var(--flexcyon-red-salmon, #C03A47);
  --button-radius: var(--input-radius, 0px);
  --callout-bug: var(--color-red-rgb, rgb(192, 58, 71));
  --callout-default: var(--color-blue-rgb, 90, 143, 205);
  --callout-error: var(--color-red-rgb, rgb(192, 58, 71));
  --callout-example: var(--color-purple-rgb, rgb(164, 97, 200));
  --callout-fail: var(--color-red-rgb, rgb(192, 58, 71));
  --callout-important: var(--color-cyan-rgb, rgb(60, 185, 194));
  --callout-info: var(--color-blue-rgb, 90, 143, 205);
  --callout-padding: var(--flexcyon-callout-verti-padding)
    var(--flexcyon-callout-horiz-padding, 12px
    24px);
  --callout-question: var(--color-orange-rgb, rgb(204, 132, 73));
  --callout-radius: var(--radius-s, 2px);
  --callout-success: var(--color-green-rgb, rgb(161, 192, 92));
  --callout-summary: var(--color-cyan-rgb, rgb(60, 185, 194));
  --callout-tip: var(--color-cyan-rgb, rgb(60, 185, 194));
  --callout-todo: var(--color-blue-rgb, 90, 143, 205);
  --callout-warning: var(--color-orange-rgb, rgb(204, 132, 73));
  --canvas-background: var(--background-primary, #191D28);
  --canvas-card-label-color: var(--text-faint, #6F768599);
  --canvas-color-1: var(--color-red-rgb, rgb(192, 58, 71));
  --canvas-color-2: var(--color-orange-rgb, rgb(204, 132, 73));
  --canvas-color-3: var(--color-yellow-rgb, rgb(194, 158, 66));
  --canvas-color-4: var(--color-green-rgb, rgb(161, 192, 92));
  --canvas-color-5: var(--color-cyan-rgb, rgb(60, 185, 194));
  --canvas-color-6: var(--color-purple-rgb, rgb(164, 97, 200));
  --canvas-controls-radius: var(--radius-s, 2px);
  --canvas-dot-pattern: var(--color-base-30, color-mix(
    in oklch,
    #24262C,
    #4D566B
  ));
  --caret-color: var(--text-normal, #D3D5D3);
  --checkbox-border-color: var(--flexcyon-blue, #5a8fcd);
  --checkbox-border-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #A461C8,
    #898C93
  ));
  --checkbox-color: var(--flexcyon-purple-lilac, #A461C8);
  --checkbox-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #A461C8,
    #898C93
  ));
  --checkbox-marker-color: var(--background-primary, #191D28);
  --checkbox-radius: var(--radius-s, 2px);
  --checklist-done-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --clickable-icon-radius: var(--radius-s, 0);
  --cm-font-size: calc(var(--font-ui-small) + 0.809px);
  --cm-panel-bg: var(--color-base-00, #14161C);
  --code-background: var(--flexcyon-base-01, #14161C);
  --code-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --code-bracket-background: var(--background-modifier-hover, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --code-comment: var(--text-faint, #6F768599);
  --code-function: var(--flexcyon-code-function, #C29E42);
  --code-important: var(--flexcyon-code-error, #C03A47);
  --code-keyword: var(--flexcyon-code-keyword, #3CB9C2);
  --code-normal: var(--text-normal, #D3D5D3);
  --code-operator: var(--flexcyon-code-operator, #5a8fcd);
  --code-property: var(--flexcyon-cyan, #3CB9C2);
  --code-punctuation: rgb(var(--color-red-rgb), var(--dimmed));
  --code-radius: var(--radius-s, 2px);
  --code-string: var(--flexcyon-lime-green, #A1C05C);
  --code-tag: var(--flexcyon-base-grey-dark, #898C93);
  --code-value: var(--flexcyon-yellow, #C29E42);
  --collapse-icon-color: var(--text-faint, #6F768599);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(
    102.5 79.05%
      68.425%
  ));
  --color-accent: hsl(
    var(--accent-h) var(--accent-s) var(--accent-l) / var(--dimmed)
  );
  --color-accent-1: hsl(
    calc(var(--accent-h) - 3) calc(var(--accent-s)*1.02)
      calc(var(--accent-l)*1.15)
  );
  --color-accent-2: hsl(
    calc(var(--accent-h) - 20) calc(var(--accent-s)*0.85)
      calc(var(--accent-l)*1.1) / 87.5%
  );
  --color-base-00: var(--flexcyon-base-01, #14161C);
  --color-base-05: var(--flexcyon-base-01-02-mix, color-mix(
    in oklch,
    #14161C,
    #191D28
  ));
  --color-base-10: var(--flexcyon-base-02, #191D28);
  --color-base-100: var(--flexcyon-base-grey-light, #D3D5D3);
  --color-base-20: var(--flexcyon-base-02-03-mix, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --color-base-25: var(--flexcyon-base-03, #24262C);
  --color-base-30: var(--flexcyon-base-03-04-mix, color-mix(
    in oklch,
    #24262C,
    #4D566B
  ));
  --color-base-35: var(--flexcyon-base-04, #4D566B);
  --color-base-40: var(--flexcyon-base-04-05-mix, color-mix(
    in oklch,
    #4D566B,
    #6F7685
  ));
  --color-base-50: var(--flexcyon-base-05, #6F7685);
  --color-base-60: var(--flexcyon-base-grey-dark, #898C93);
  --color-base-70: var(--flexcyon-base-grey-mix, color-mix(
    in oklch,
    #D3D5D3,
    #898C93
  ));
  --color-blue: var(--flexcyon-blue, #5a8fcd);
  --color-blue-cyan-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-cyan)
  );
  --color-blue-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-blue-green-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-green)
  );
  --color-blue-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-blue-orange-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-orange)
  );
  --color-blue-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-blue-pink-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-pink)
  );
  --color-blue-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-blue-purple-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-purple)
  );
  --color-blue-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-blue-red-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-red)
  );
  --color-blue-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-blue-rgb: 90, 143, 205;
  --color-blue-yellow-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-yellow)
  );
  --color-blue-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan: var(--flexcyon-cyan, #3CB9C2);
  --color-cyan-blue-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-blue)
  );
  --color-cyan-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan-green-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-green)
  );
  --color-cyan-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan-orange-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-orange)
  );
  --color-cyan-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan-pink-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-pink)
  );
  --color-cyan-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan-purple-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-purple)
  );
  --color-cyan-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan-red-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-red)
  );
  --color-cyan-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan-rgb: rgb(60, 185, 194);
  --color-cyan-yellow-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-yellow)
  );
  --color-cyan-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green: var(--flexcyon-lime-green, #A1C05C);
  --color-green-blue-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-blue)
  );
  --color-green-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green-cyan-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-cyan)
  );
  --color-green-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green-orange-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-orange)
  );
  --color-green-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green-pink-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-pink)
  );
  --color-green-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green-purple-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-purple)
  );
  --color-green-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green-red-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-red)
  );
  --color-green-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green-rgb: rgb(161, 192, 92);
  --color-green-yellow-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-yellow)
  );
  --color-green-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange: var(--flexcyon-orange, #CC8449);
  --color-orange-blue-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-blue)
  );
  --color-orange-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange-cyan-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-cyan)
  );
  --color-orange-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange-green-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-green)
  );
  --color-orange-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange-pink-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-pink)
  );
  --color-orange-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange-purple-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-purple)
  );
  --color-orange-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange-red-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-red)
  );
  --color-orange-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange-rgb: rgb(204, 132, 73);
  --color-orange-yellow-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-yellow)
  );
  --color-orange-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink: var(--flexcyon-pink, #D458A3);
  --color-pink-blue-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-blue)
  );
  --color-pink-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink-cyan-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-cyan)
  );
  --color-pink-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink-green-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-green)
  );
  --color-pink-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink-orange-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-orange)
  );
  --color-pink-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink-purple-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-purple)
  );
  --color-pink-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink-red-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-red)
  );
  --color-pink-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink-rgb: rgb(212, 88, 163);
  --color-pink-yellow-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-yellow)
  );
  --color-pink-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple: var(--flexcyon-purple-lilac, #A461C8);
  --color-purple-blue-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-blue)
  );
  --color-purple-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple-cyan-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-cyan)
  );
  --color-purple-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple-green-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-green)
  );
  --color-purple-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple-orange-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-orange)
  );
  --color-purple-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple-pink-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-pink)
  );
  --color-purple-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple-red-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-red)
  );
  --color-purple-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple-rgb: rgb(164, 97, 200);
  --color-purple-yellow-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-yellow)
  );
  --color-purple-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red: var(--flexcyon-red-salmon, #C03A47);
  --color-red-blue-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-blue)
  );
  --color-red-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red-cyan-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-cyan)
  );
  --color-red-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red-green-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-green)
  );
  --color-red-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red-orange-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-orange)
  );
  --color-red-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red-pink-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-pink)
  );
  --color-red-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red-purple-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-purple)
  );
  --color-red-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red-rgb: rgb(192, 58, 71);
  --color-red-yellow-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-yellow)
  );
  --color-red-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow: var(--flexcyon-yellow, #C29E42);
  --color-yellow-blue-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-blue)
  );
  --color-yellow-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-cyan-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-cyan)
  );
  --color-yellow-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-green-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-green)
  );
  --color-yellow-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-orange-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-orange)
  );
  --color-yellow-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-pink-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-pink)
  );
  --color-yellow-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-purple-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-purple)
  );
  --color-yellow-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-red-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-red)
  );
  --color-yellow-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-rgb: rgb(194, 158, 66);
  --dark: var(--text-normal, var(--color-base-100, #D3D5D3));
  --darkgray: var(--text-normal, var(--color-base-100, #D3D5D3));
  --dimmed: 0.55;
  --divider-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --divider-color-hover: var(--interactive-accent, color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ));
  --drag-ghost-background: var(--flexcyon-base-03, #24262C);
  --drag-ghost-text-color: var(--interactive-accent, color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ));
  --dropdown-background: var(--interactive-normal, color-mix(
    in oklch,
    #14161C,
    #191D28
  ));
  --dropdown-background-hover: var(--interactive-hover, #191D28);
  --expand: 110%;
  --file-header-background: var(--background-primary, #191D28);
  --file-header-background-focused: var(--background-primary, #191D28);
  --file-header-font-size: var(--font-ui-small, 14.56227px);
  --file-line-width: 50rem;
  --flair-background: var(--interactive-normal, color-mix(
    in oklch,
    #14161C,
    #191D28
  ));
  --flair-color: var(--text-normal, #D3D5D3);
  --flexcyon-accent: #92A871;
  --flexcyon-accent-h: 105.5;
  --flexcyon-accent-l: 59.5%;
  --flexcyon-accent-s: 77.5%;
  --flexcyon-active-indicator: '>> ';
  --flexcyon-alt-link-opacity: 55%;
  --flexcyon-anim-duration: 0.3ms;
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
    in oklch,
    var(--flexcyon-base-01),
    var(--flexcyon-base-02)
  );
  --flexcyon-base-02: #191D28;
  --flexcyon-base-02-03-mix: color-mix(
    in oklch,
    var(--flexcyon-base-02),
    var(--flexcyon-base-03)
  );
  --flexcyon-base-03: #24262C;
  --flexcyon-base-03-04-mix: color-mix(
    in oklch,
    var(--flexcyon-base-03),
    var(--flexcyon-base-04)
  );
  --flexcyon-base-04: #4D566B;
  --flexcyon-base-04-05-mix: color-mix(
    in oklch,
    var(--flexcyon-base-04),
    var(--flexcyon-base-05)
  );
  --flexcyon-base-05: #6F7685;
  --flexcyon-base-grey-dark: #898C93;
  --flexcyon-base-grey-light: #D3D5D3;
  --flexcyon-base-grey-mix: color-mix(
    in oklch,
    var(--flexcyon-base-grey-light),
    var(--flexcyon-base-grey-dark)
  );
  --flexcyon-base-grey-scroll: #3f495e;
  --flexcyon-base-grey-scroll-hover: #5c6782;
  --flexcyon-base-grey-tab: #71777f;
  --flexcyon-base-grey-token: #586582;
  --flexcyon-bases-card-delay-factor: 12.5;
  --flexcyon-bases-card-flex-grow: 0.55;
  --flexcyon-bases-card-padding: var(--flexcyon-bases-card-padding-top)
    var(--flexcyon-bases-card-padding-right)
    var(--flexcyon-bases-card-padding-bottom)
    var(--flexcyon-bases-card-padding-left, 8px
    0px
    0px
    2px);
  --flexcyon-bases-card-padding-bottom: 0px;
  --flexcyon-bases-card-padding-left: 2px;
  --flexcyon-bases-card-padding-right: 0px;
  --flexcyon-bases-card-padding-top: 8px;
  --flexcyon-bases-cards-label-opacity: 0.85;
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
  --flexcyon-callout-flashcard-animation-duration: 0.5ms;
  --flexcyon-callout-horiz-padding: 24px;
  --flexcyon-callout-icon-right-padding: 4px;
  --flexcyon-callout-pop-animation-duration: 0.2ms;
  --flexcyon-callout-radix: 16px;
  --flexcyon-callout-verti-padding: 12px;
  --flexcyon-callout-vertical-margin: 1em;
  --flexcyon-callouts-flashcard-height: 250px;
  --flexcyon-callouts-flashcard-width: 250px;
  --flexcyon-canvas-blur-intensity: 1px;
  --flexcyon-code-error: var(--flexcyon-red-salmon, #C03A47);
  --flexcyon-code-file-ext-font-w: 500;
  --flexcyon-code-file-ext-prefix: '.';
  --flexcyon-code-function: var(--flexcyon-yellow, #C29E42);
  --flexcyon-code-keyword: var(--flexcyon-cyan, #3CB9C2);
  --flexcyon-code-operator: var(--flexcyon-blue, #5a8fcd);
  --flexcyon-code-variable: var(--flexcyon-cyan, #3CB9C2);
  --flexcyon-codeblock-fmt-ext: lowercase;
  --flexcyon-comm-item-opacity: 0.89;
  --flexcyon-comm-text-padding: 3px 16px;
  --flexcyon-contrast-ratio: 1;
  --flexcyon-cursor-duration: 42.5ms;
  --flexcyon-cursor-timing-fn: ease-in;
  --flexcyon-cursor-type: auto;
  --flexcyon-cust-hr-str: 'f';
  --flexcyon-cust-hr-str-font-size: 1.11803em;
  --flexcyon-cust-hr-str-horiz-padding: 8px;
  --flexcyon-cyan: #3CB9C2;
  --flexcyon-dataview-horizontal-padding: 8px;
  --flexcyon-default-ol-style: decimal;
  --flexcyon-editor-bg-color: color-mix(
    in oklch,
    var(--color-base-05) 70%,
    var(--color-base-10) 30%
  );
  --flexcyon-editor-bg-color-2: var(--color-base-20, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --flexcyon-editor-bg-rotation: 0deg;
  --flexcyon-editor-bg-width: 15px;
  --flexcyon-editor-dot-size: 2.5px;
  --flexcyon-editor-margin-top: 18px;
  --flexcyon-editor-writing-indentation: 16px;
  --flexcyon-exp-dimmed-nav-size: 13.3623px;
  --flexcyon-external-link-color: #5A8FCD;
  --flexcyon-external-link-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-external-link-color),
    var(--flexcyon-base-grey-dark)
  );
  --flexcyon-fc-dimmed-items-opacity: 0.89;
  --flexcyon-h1-color: var(--color-blue, #5a8fcd);
  --flexcyon-h2-color: var(--color-purple, #A461C8);
  --flexcyon-h3-color: var(--color-cyan, #3CB9C2);
  --flexcyon-h4-color: var(--color-pink, #D458A3);
  --flexcyon-h5-color: var(--color-green, #A1C05C);
  --flexcyon-h6-color: var(--color-yellow, #C29E42);
  --flexcyon-heading-1-alignment: left;
  --flexcyon-heading-2-alignment: left;
  --flexcyon-heading-3-alignment: left;
  --flexcyon-heading-4-alignment: left;
  --flexcyon-heading-5-alignment: left;
  --flexcyon-heading-6-alignment: left;
  --flexcyon-highlight-active-line-opacity: 7.5%;
  --flexcyon-highlight-border-radius: 4px;
  --flexcyon-highlight-colour: var(--color-cyan, #3CB9C2);
  --flexcyon-highlight-horiz-padding: 2.5px;
  --flexcyon-highlight-opacity: 22.5%;
  --flexcyon-highlight-verti-padding: 1px;
  --flexcyon-input-horiz-padding: 8px;
  --flexcyon-input-verti-padding: 8px;
  --flexcyon-l-spacing: 0px;
  --flexcyon-lime-green: #A1C05C;
  --flexcyon-link-color: #A461C8;
  --flexcyon-link-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-link-color),
    var(--flexcyon-base-grey-dark)
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
    var(--text-accent),
    var(--color-blue),
    var(--color-cyan)
  );
  --flexcyon-new-tab-font-group: var(--font-monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace);
  --flexcyon-omnisearch-body-margin-left: 1.45rem;
  --flexcyon-orange: #CC8449;
  --flexcyon-os-detail-padding-l: 12px;
  --flexcyon-os-detail-padding-r: 24px;
  --flexcyon-palette-cyan-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-cyan),
    var(--flexcyon-base-grey-dark)
  );
  --flexcyon-palette-lilac-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-purple-lilac),
    var(--flexcyon-base-grey-dark)
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
  --flexcyon-status-hide-hover-duration: 0.35ms;
  --flexcyon-status-hide-hover-function: ease-out;
  --flexcyon-status-hide-trigger-translation: 50px;
  --flexcyon-status-hide-until-hover-text: 'Show status';
  --flexcyon-status-hide-until-hover-translation: 80vw;
  --flexcyon-status-live-text: 'LIVE';
  --flexcyon-status-new-tab-opacity: 0.55;
  --flexcyon-status-reading-text: 'READ';
  --flexcyon-status-source-text: 'SOURCE';
  --flexcyon-style-settings-indent-width: 4px;
  --flexcyon-suggestion-horiz-padding: 12px;
  --flexcyon-suggestion-verti-padding: 8px;
  --flexcyon-table-reading-mode-width: 100%;
  --flexcyon-td-horiz-padding: 10px;
  --flexcyon-td-live-pad-scale: 0.2;
  --flexcyon-td-table-alignment: left;
  --flexcyon-td-verti-padding: 5px;
  --flexcyon-text-muted: #6F768599;
  --flexcyon-th-horiz-padding: 10px;
  --flexcyon-th-live-pad-scale: 0.2;
  --flexcyon-th-table-alignment: left;
  --flexcyon-th-verti-padding: 5px;
  --flexcyon-top-actions-alignment: center;
  --flexcyon-tree-item-horiz-padding: 10px;
  --flexcyon-tree-item-verti-padding: 2px;
  --flexcyon-typewriter-mode-opacity: 0.55;
  --flexcyon-var-comps-sugg-horiz-padding: 12px;
  --flexcyon-var-comps-sugg-vert-padding: 7px;
  --flexcyon-view-header-breadcrumb-max-w: 12.5vw;
  --flexcyon-vim-bottom-positioning: -4px;
  --flexcyon-vim-command-text: 'COMMAND';
  --flexcyon-vim-insert-text: 'INSERT';
  --flexcyon-vim-left-positioning: 6px;
  --flexcyon-vim-normal-text: 'NORMAL';
  --flexcyon-w-spacing: 0px;
  --flexcyon-yellow: #C29E42;
  --flexyon-base-grey-token: #586582;
  --font-mermaid: var(--font-monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace);
  --font-ui-large: 17.79833px;
  --font-ui-medium: 16.1803px;
  --font-ui-small: 14.56227px;
  --font-ui-smaller: 12.94424px;
  --footnote-divider-color: var(--metadata-divider-color, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --footnote-id-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --footnote-id-color-no-occurrences: var(--text-faint, #6F768599);
  --footnote-input-background-active: var(--metadata-input-background-active, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --footnote-line-height: var(--line-height-normal, 1.4);
  --footnote-radius: var(--radius-s, 2px);
  --graph-control-horiz-padding: 12px;
  --graph-control-verti-padding: 6px;
  --graph-line: var(--flexcyon-base-03, #24262C);
  --graph-node: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --graph-node-attachment: var(--color-yellow, #C29E42);
  --graph-node-focused: var(--text-accent, hsl(
    102.5 79.05%
      68.425%
  ));
  --graph-node-tag: var(--flexcyon-purple-lilac, #A461C8);
  --graph-node-unresolved: var(--flexcyon-red-salmon, #C03A47);
  --graph-text: var(--text-normal, #D3D5D3);
  --gray: var(--text-muted, color-mix(
    in oklch,
    var(--flexcyon-text-muted),
    var(--text-normal)
  ));
  --h: tan(atan2(1380px, 1px));
  --h1-color: var(--flexcyon-h1-color, #5a8fcd);
  --h1-line-height: 1.61;
  --h1-size: 1.81803em;
  --h2-color: var(--flexcyon-h2-color, #A461C8);
  --h2-line-height: 1.51;
  --h2-size: 1.61803em;
  --h2-weight: 675;
  --h3-color: var(--flexcyon-h3-color, #3CB9C2);
  --h3-line-height: 1.41;
  --h3-size: 1.41803em;
  --h3-weight: 650;
  --h4-color: var(--flexcyon-h4-color, #D458A3);
  --h4-line-height: 1.31;
  --h4-size: 1.21803em;
  --h4-weight: 625;
  --h5-color: var(--flexcyon-h5-color, #A1C05C);
  --h5-line-height: var(--line-height-normal, 1.21);
  --h5-size: 1.11803em;
  --h5-weight: 600;
  --h6-color: var(--flexcyon-h6-color, #C29E42);
  --h6-line-height: var(--line-height-normal, 1.21);
  --h6-size: 1.01803em;
  --h6-weight: 575;
  --heading-formatting: var(--text-faint, #6F768599);
  --highlight: var(--text-highlight-bg, color-mix(
    in oklch,
    var(--flexcyon-highlight-colour) var(--flexcyon-highlight-opacity),
    transparent
  ));
  --hr-color: var(--background-modifier-border, #393E48);
  --icon-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --icon-color-active: var(--interactive-accent, color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ));
  --icon-color-focused: var(--interactive-accent, color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ));
  --icon-color-hover: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --icon-stroke: var(--icon-m-stroke-width, 2px);
  --icon-xs: 12.25px;
  --img-border-radius: 15px;
  --inline-title-color: var(--h1-color, #5a8fcd);
  --inline-title-size: var(--h1-size, 1.802em);
  --input-date-separator: var(--text-faint, #6F768599);
  --input-padding: var(--flexcyon-input-verti-padding)
    var(--flexcyon-input-horiz-padding, 8px
    8px);
  --input-placeholder-color: var(--text-faint, #6F768599);
  --input-radius: 0px;
  --interactive-accent: color-mix(
    in oklch,
    var(--text-accent) 80%,
    transparent 20%
  );
  --interactive-accent-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-accent) 75%,
    transparent
  );
  --interactive-accent-hsl: var(--accent-h), var(--accent-s), var(--accent-l);
  --interactive-hover: var(--background-primary, #191D28);
  --interactive-normal: var(--color-base-05, color-mix(
    in oklch,
    #14161C,
    #191D28
  ));
  --italic-color: var(--flexcyon-accent, #92A871);
  --less-letter-spacing: -3px;
  --light: var(--background-primary, var(--color-base-10, #191D28));
  --lightgray: var(--background-secondary, var(--color-base-00, #14161C));
  --line-height-normal: 1.4;
  --line-height-tight: 1.25;
  --link-color: var(--flexcyon-link-color, #A461C8);
  --link-color-hover: var(--flexcyon-link-hover, color-mix(
    in oklch shorter hue,
    #A461C8,
    #898C93
  ));
  --link-external-color: var(--flexcyon-external-link-color, #5A8FCD);
  --link-external-color-hover: var(--flexcyon-external-link-hover, color-mix(
    in oklch shorter hue,
    #5A8FCD,
    #898C93
  ));
  --link-unresolved-color: var(--flexcyon-link-unresolved-color, #A461C8);
  --link-unresolved-decoration-color: var(--flexcyon-link-unresolved-color, #A461C8);
  --link-unresolved-decoration-style: dashed;
  --list-marker-color: var(--flexcyon-purple-lilac, #A461C8);
  --list-marker-color-collapsed: var(--flexcyon-lime-green, #A1C05C);
  --list-marker-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #A461C8,
    #898C93
  ));
  --list-numbered-style: var(--flexcyon-default-ol-style, decimal);
  --menu-background: var(--background-secondary, #14161C);
  --menu-border-color: var(--background-modifier-border-hover, transparent);
  --menu-radius: var(--radius-m, 4px);
  --metadata-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --metadata-divider-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --metadata-input-background-active: var(--background-modifier-hover, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --metadata-input-text-color: var(--text-normal, #D3D5D3);
  --metadata-label-background-active: var(--background-modifier-hover, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --metadata-label-text-color: var(--flexcyon-purple-lilac, #A461C8);
  --metadata-label-text-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #A461C8,
    #898C93
  ));
  --metadata-property-background-active: var(--background-modifier-hover, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14.56227px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14.56227px);
  --modal-background: var(--background-primary, #191D28);
  --modal-border-color: var(--flexcyon-base-02, #191D28);
  --modal-radius: var(--radius-l, 6px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #6F768599);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #6F768599);
  --nav-heading-color: var(--text-normal, #D3D5D3);
  --nav-heading-color-collapsed: var(--text-faint, #6F768599);
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --nav-heading-color-hover: var(--text-normal, #D3D5D3);
  --nav-item-background-active: var(--background-modifier-hover, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --nav-item-background-hover: var(--background-modifier-hover, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --nav-item-background-selected: var(--flexcyon-base-03, #24262C);
  --nav-item-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --nav-item-color-active: var(--interactive-accent, color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ));
  --nav-item-color-highlighted: var(--text-accent, hsl(
    102.5 79.05%
      68.425%
  ));
  --nav-item-color-hover: var(--text-normal, #D3D5D3);
  --nav-item-color-selected: var(--flexcyon-orange, #CC8449);
  --nav-item-radius: var(--radius-s, 2px);
  --nav-item-size: var(--font-ui-small, 14.56227px);
  --nav-tag-color: var(--text-faint, #6F768599);
  --nav-tag-color-active: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --nav-tag-color-hover: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --nav-tag-radius: var(--radius-s, 2px);
  --oz-fta-all-panes-active-text-color: #D3D5D3;
  --oz-fta-file-font-size: calc(var(--font-ui-medium) - 0.1rem);
  --oz-fta-file-pane-file-name-color: #6F768599;
  --oz-fta-folder-font-size: calc(var(--font-ui-medium) - 0.1rem);
  --oz-fta-folder-pane-file-name-color: #D3D5D3;
  --oz-fta-folder-panes-file-name-color: #d3d5d3;
  --pdf-background: var(--background-primary, #191D28);
  --pdf-page-background: var(--background-primary, #191D28);
  --pdf-sidebar-background: var(--background-primary, #191D28);
  --pill-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --pill-border-color-hover: var(--background-modifier-border-hover, transparent);
  --pill-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --pill-color-hover: var(--text-normal, #D3D5D3);
  --pill-color-remove: var(--text-faint, #6F768599);
  --pill-color-remove-hover: var(--text-accent, hsl(
    102.5 79.05%
      68.425%
  ));
  --prompt-background: var(--background-primary, #191D28);
  --prompt-border-color: var(--flexcyon-base-02-03-mix, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --r-background-color: var(--color-base-05, color-mix(
    in oklch,
    #14161C,
    #191D28
  ));
  --r-heading-color: var(--text-normal, #D3D5D3);
  --r-heading-font: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --r-heading-margin: 16px 0px;
  --r-heading-text-transform: capitalize;
  --r-heading1-size: var(--h1-size, 1.81803em);
  --r-heading2-size: var(--h2-size, 1.61803em);
  --r-heading3-size: var(--h3-size, 1.41803em);
  --r-heading4-size: var(--h4-size, 1.21803em);
  --r-link-color: var(--color-accent-2, hsl(
    85.5 65.875%
      65.45% / 87.5%
  ));
  --r-main-font: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --r-main-font-size: max-content;
  --radius-l: 6px;
  --radius-m: 4px;
  --radius-s: 2px;
  --radius-x1: 8px;
  --radius-xl: 8px;
  --raised-background: var(--blur-background, color-mix(in srgb, color-mix(
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
  ) 65%, transparent)));
  --ribbon-background: var(--background-secondary, #14161C);
  --ribbon-background-collapsed: var(--ribbon-background, #14161C);
  --ribbon-width: 48px;
  --scrollbar-radius: var(--radius-l, 6px);
  --search-clear-button-color: var(--flexcyon-red-salmon, #C03A47);
  --search-icon-color: var(--flexcyon-accent, #92A871);
  --search-result-background: var(--background-primary, #191D28);
  --secondary: var(--text-accent, var(--flexcyon-accent, hsl(
    102.5 79.05%
      68.425%
  )));
  --setting-group-heading-color: var(--text-normal, #D3D5D3);
  --setting-group-heading-size: var(--font-ui-medium, 16.1803px);
  --setting-items-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --setting-items-padding: var(--size-4-5, 2px 0px);
  --settings-background: var(--color-base-05, color-mix(
    in oklch,
    #14161C,
    #191D28
  ));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --shiki-code-background: var(--code-background, #14161C);
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-comment: var(--text-faint, #6F768599);
  --shiki-code-function: var(--color-green, #A1C05C);
  --shiki-code-important: var(--color-orange, #CC8449);
  --shiki-code-keyword: var(--color-pink, #D458A3);
  --shiki-code-normal: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --shiki-code-property: var(--color-cyan, #3CB9C2);
  --shiki-code-punctuation: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --shiki-code-string: var(--color-yellow, #C29E42);
  --shiki-code-value: var(--color-purple, #A461C8);
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --shiki-gutter-text-color: var(--text-faint, #6F768599);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --shiki-terminal-dots-color: var(--text-faint, #6F768599);
  --shiki-tooltip-background: var(--background-modifier-message, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --slider-thumb-border-color: var(--background-modifier-border-hover, transparent);
  --slider-track-background: var(--background-modifier-border, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --status-bar-background: var(--background-secondary, #14161C);
  --status-bar-border-color: var(--divider-color, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --status-bar-font-size: var(--font-ui-smaller, 13.753255px);
  --status-bar-position: absolute;
  --status-bar-radius: var(--radius-m, 4px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --suggestion-background: var(--background-primary, #191D28);
  --sync-avatar-color-1: var(--color-red, #C03A47);
  --sync-avatar-color-2: var(--color-orange, #CC8449);
  --sync-avatar-color-3: var(--color-yellow, #C29E42);
  --sync-avatar-color-4: var(--color-green, #A1C05C);
  --sync-avatar-color-5: var(--color-cyan, #3CB9C2);
  --sync-avatar-color-6: var(--color-blue, #5a8fcd);
  --sync-avatar-color-7: var(--color-purple, #A461C8);
  --sync-avatar-color-8: var(--color-pink, #D458A3);
  --tab-background-active: var(--background-primary, #191D28);
  --tab-container-background: var(--background-secondary, #14161C);
  --tab-curve: 0px;
  --tab-divider-color: var(--titlebar-background, #14161C);
  --tab-font-size: var(--font-ui-small, 14.56227px);
  --tab-outline-color: var(--divider-color, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --tab-outline-width: 0px;
  --tab-radius: var(--radius-s, 0px);
  --tab-radius-active: 0px;
  --tab-stacked-font-size: var(--font-ui-small, 14.56227px);
  --tab-switcher-background: var(--background-secondary, #14161C);
  --tab-switcher-preview-radius: var(--radius-xl, 8px);
  --tab-text-color: var(--flexcyon-base-05, #6F7685);
  --tab-text-color-active: var(--text-accent, hsl(
    102.5 79.05%
      68.425%
  ));
  --tab-text-color-focused: var(--flexcyon-base-05, #6F7685);
  --tab-text-color-focused-active: var(--text-accent, hsl(
    102.5 79.05%
      68.425%
  ));
  --tab-text-color-focused-active-current: var(--text-accent, hsl(
    102.5 79.05%
      68.425%
  ));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(
    102.5 79.05%
      68.425%
  ));
  --table-add-button-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --table-background: var(--background-primary, #191D28);
  --table-border-color: var(--background-modifier-border, #6F768566);
  --table-column-alt-background: var(--table-background, #191D28);
  --table-drag-handle-background-active: var(--table-selection-border-color, color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ));
  --table-drag-handle-color: var(--text-faint, #6F768599);
  --table-drag-handle-color-active: var(--text-on-accent, #24262C);
  --table-header-background: var(--color-base-20, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --table-header-background-hover: var(--table-background, #191D28);
  --table-header-border-color: var(--table-border-color, #6F768566);
  --table-header-color: var(--text-normal, #D3D5D3);
  --table-header-size: var(--font-ui-large, large);
  --table-line-height: var(--line-height-tight, 1.25);
  --table-row-alt-background-hover: var(--table-background, #191D28);
  --table-row-background-hover: var(--table-background, #191D28);
  --table-selection-border-color: var(--interactive-accent, color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ));
  --table-text-size: var(--font-ui-medium, 16.1803px);
  --tag-background: color-mix(in oklch, var(--tag-color) 25%, transparent);
  --tag-background-hover: color-mix(
    in oklch,
    var(--tag-color-hover) 25%,
    transparent
  );
  --tag-color: var(--flexcyon-cyan, #3CB9C2);
  --tag-color-hover: var(--flexcyon-palette-cyan-hover, color-mix(
    in oklch shorter hue,
    #3CB9C2,
    #898C93
  ));
  --tag-decoration-hover: underline;
  --tag-size: var(--code-size, 0.875em);
  --tertiary: var(--interactive-accent-hover, color-mix(
    in oklch shorter hue,
    var(--flexcyon-accent) 75%,
    transparent
  ));
  --text-accent: var(--flexcyon-accent, hsl(
    102.5 79.05%
      68.425%
  ));
  --text-error: var(--flexcyon-red-salmon, #C03A47);
  --text-faint: var(--flexcyon-text-muted, #6F768599);
  --text-highlight-bg: color-mix(
    in oklch,
    var(--flexcyon-highlight-colour) var(--flexcyon-highlight-opacity),
    transparent
  );
  --text-muted: color-mix(
    in oklch,
    var(--flexcyon-text-muted),
    var(--text-normal)
  );
  --text-normal: var(--color-base-100, #D3D5D3);
  --text-on-accent: var(--flexcyon-base-03, #24262C);
  --text-selection: color-mix(
    in oklch shorter hue,
    var(--flexcyon-base-04) 20%,
    transparent
  );
  --text-success: var(--flexcyon-lime-green, #A1C05C);
  --text-warning: var(--flexcyon-red-salmon, #C03A47);
  --textHighlight: var(--text-highlight-bg, color-mix(
    in oklch,
    var(--flexcyon-highlight-colour) var(--flexcyon-highlight-opacity),
    transparent
  ));
  --titlebar-background: var(--background-secondary, #14161C);
  --titlebar-background-focused: var(--background-secondary, #14161C);
  --titlebar-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191D28,
    #24262C
  ));
  --titlebar-text-color: var(--text-faint, #6F768599);
  --titlebar-text-color-focused: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #D3D5D3
  ));
  --toggle-thumb-color: var(--text-on-accent, #24262C);
  --upsize: 103%;
  --vault-name-color: var(--interactive-accent, color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ));
  --vault-profile-color: var(--text-normal, #D3D5D3);
  --vault-profile-color-hover: var(--vault-profile-color, #D3D5D3);
  --vault-profile-font-size: var(--font-ui-small, 14.56227px);
  --w: tan(atan2(2538px, 1px));
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(20, 22, 28));
  color: var(--color-accent-2, rgb(211, 213, 211));
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(25, 29, 40));
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(20, 22, 28));
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(20, 22, 28));
  border-left-color: oklch(0.25047 0.0168382 269.118);
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body html {
  --h: tan(atan2(var(--h-raw), 1px));
  --w: tan(atan2(var(--w-raw), 1px));
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(192, 58, 71));
  outline: rgb(192, 58, 71) none 0px;
  text-decoration-color: rgb(192, 58, 71);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(146, 168, 113));
  outline: rgb(146, 168, 113) none 0px;
  text-decoration-color: rgb(146, 168, 113);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(146, 168, 113));
  outline: rgb(146, 168, 113) none 0px;
  text-decoration-color: rgb(146, 168, 113);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(192, 58, 71));
  outline: rgb(192, 58, 71) none 0px;
  text-decoration-color: rgb(192, 58, 71);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, oklch(0.722355 0.107178 202.06 / 0.225));
  color: var(--text-normal, rgb(211, 213, 211));
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
  color: var(--text-normal, rgb(211, 213, 211));
  font-size: 14.5623px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(90, 143, 205);
  border-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(164, 97, 200));
  border-color: rgb(164, 97, 200);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, oklch(0.756226 0.0113969 265.685 / 0.8));
  outline: oklch(0.756226 0.0113969 265.685 / 0.8) none 0px;
  text-decoration-color: oklch(0.756226 0.0113969 265.685 / 0.8);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(90, 143, 205));
  outline: rgb(90, 143, 205) none 0px;
  text-decoration-color: rgb(90, 143, 205);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(164, 97, 200));
  outline: rgb(164, 97, 200) none 0px;
  text-decoration-color: rgb(164, 97, 200);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(164, 97, 200));
  outline: rgb(164, 97, 200) none 0px;
  text-decoration: underline dashed rgb(164, 97, 200);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(164, 97, 200));
  text-decoration-style: var(--link-unresolved-decoration-style, dashed);
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
  color: var(--text-faint, rgba(111, 118, 133, 0.6));
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: var(--color-base-05, oklch(0.216334 0.0172956 269.118));
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
  background-color: var(--table-background, rgb(25, 29, 40));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: var(--table-text-color, rgb(211, 213, 211));
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  text-align: var(--flexcyon-td-table-alignment, left);
}

html[saved-theme="dark"] body th {
  background-color: var(--table-column-alt-background, rgb(25, 29, 40));
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: var(--table-header-color, rgb(211, 213, 211));
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  text-align: var(--flexcyon-td-table-alignment, left);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, oklch(0.25047 0.0168382 269.118));
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(20, 22, 28));
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(211, 213, 211));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(20, 22, 28));
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
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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
  background-color: var(--background-primary-alt, rgb(36, 38, 44));
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(211, 213, 211);
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
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(25, 29, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 29, 40);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(211, 213, 211);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
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
  background-color: var(--background-primary, rgb(25, 29, 40));
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-normal, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(25, 29, 40));
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
  background-color: var(--background-modifier-hover, oklch(0.25047 0.0168382 269.118));
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
  background-color: var(--background-modifier-hover, oklch(0.25047 0.0168382 269.118));
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
  background-color: var(--background-modifier-hover, oklch(0.25047 0.0168382 269.118));
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, oklch(0.722355 0.107178 202.06 / 0.25));
  border-bottom-color: rgba(110, 232, 72, 0.15);
  border-left-color: rgba(110, 232, 72, 0.15);
  border-right-color: rgba(110, 232, 72, 0.15);
  border-top-color: rgba(110, 232, 72, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(60, 185, 194);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(90, 143, 205));
  font-size: var(--inline-title-size, 28.832px);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(164, 97, 200));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(60, 185, 194));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(212, 88, 163));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(161, 192, 92));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(194, 158, 66));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--text-faint, #6F768599);
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
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, oklch(0.756226 0.0113969 265.685 / 0.8));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, oklch(0.756226 0.0113969 265.685 / 0.8));
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
  color: var(--icon-color, oklch(0.756226 0.0113969 265.685 / 0.8));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-left-radius: 4px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, oklch(0.756226 0.0113969 265.685 / 0.8));
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
  color: var(--nav-item-color, oklch(0.756226 0.0113969 265.685 / 0.8));
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
  color: var(--nav-item-color, oklch(0.756226 0.0113969 265.685 / 0.8));
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
  color: var(--icon-color, oklch(0.756226 0.0113969 265.685 / 0.8));
}

html[saved-theme="dark"] body .darkmode svg {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
  stroke: oklch(0.756226 0.0113969 265.685 / 0.8);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  background-color: var(--color-base-20, oklch(0.25047 0.0168382 269.118));
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
  color: var(--text-faint, rgba(111, 118, 133, 0.6));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(20, 22, 28));
  border-color: rgb(211, 213, 211);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgba(111, 118, 133, 0.4);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: var(--table-column-alt-background, rgb(25, 29, 40));
  border-color: rgba(111, 118, 133, 0.4);
  color: var(--table-header-color, rgb(211, 213, 211));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-top-color: oklch(0.25047 0.0168382 269.118);
  color: var(--text-muted, oklch(0.756226 0.0113969 265.685 / 0.8));
  padding-left: 14px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
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
  background-color: var(--pill-background, oklch(0.722355 0.107178 202.06 / 0.25));
  color: var(--pill-color, rgb(60, 185, 194));
}

html[saved-theme="dark"] body .note-properties-value {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--color-base-00, rgb(25, 29, 40));
  color: var(--text-normal, rgb(211, 213, 211));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(20, 22, 28));
  border-color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(20, 22, 28));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(211, 213, 211);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(211, 213, 211);
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(211, 213, 211));
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
  color: var(--text-normal, rgb(164, 97, 200));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(20, 22, 28));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(211, 213, 211);
  border-right-color: rgb(211, 213, 211);
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(211, 213, 211));
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
  background-color: var(--tag-background, oklch(0.722355 0.107178 202.06 / 0.25));
  border-bottom-color: rgba(110, 232, 72, 0.15);
  border-left-color: rgba(110, 232, 72, 0.15);
  border-right-color: rgba(110, 232, 72, 0.15);
  border-top-color: rgba(110, 232, 72, 0.15);
  color: var(--tag-color, rgb(60, 185, 194));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: var(--flexcyon-accent-h, 225);
  --accent-l: var(--flexcyon-accent-l, 53%);
  --accent-s: var(--flexcyon-accent-s, 41%);
  --background-modifier-active-hover: var(--color-base-25, #DDDCD6);
  --background-modifier-border: var(--color-base-20, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --background-modifier-border-focus: var(--color-base-30, color-mix(
    in oklch,
    #DDDCD6,
    #D3D3CE
  ));
  --background-modifier-border-hover: var(--color-base-35, transparent);
  --background-modifier-error: rgb(
    var(--color-red-rgb),
    calc(var(--dimmed) + 0.3)
  );
  --background-modifier-error-hover: var(--color-red, #EB5325);
  --background-modifier-error-rgb: var(--color-red-rgb, rgb(235, 83, 37));
  --background-modifier-form-field: var(--color-base-00, #FAF7EF);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #FAF7EF);
  --background-modifier-hover: var(--color-base-10, #EDEBE5);
  --background-modifier-message: var(--color-base-20, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --background-modifier-success: var(--color-green, #689523);
  --background-modifier-success-rgb: var(--color-green-rgb, rgb(104, 149, 35));
  --background-primary: var(--color-base-00, #FAF7EF);
  --background-primary-alt: var(--color-base-10, #EDEBE5);
  --background-secondary: var(--color-base-05, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --background-secondary-alt: var(--color-base-10, #EDEBE5);
  --bases-border-r: 16px;
  --bases-cards-background: var(--background-primary, #FAF7EF);
  --bases-cards-cover-background: var(--background-secondary, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --bases-cards-group-padding: 16px;
  --bases-cards-radius: var(--radius-m, 4px);
  --bases-embed-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-embed-padding: 4px;
  --bases-group-heading-property-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --bases-group-heading-property-size: var(--font-ui-smaller, 12.94424px);
  --bases-no-img-str: 'No image path could be found for this file';
  --bases-table-border-color: var(--table-border-color, #6F768566);
  --bases-table-cell-background-active: var(--background-primary, #FAF7EF);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #EDEBE5);
  --bases-table-cell-background-selected: var(--table-selection, hsla(225, 41%, 53%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-group-background: var(--background-primary-alt, #EDEBE5);
  --bases-table-header-background: var(--background-primary, #FAF7EF);
  --bases-table-header-background-hover: var(--background-modifier-hover, #EDEBE5);
  --bases-table-header-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --bases-table-row-background-hover: var(--table-row-background-hover, #FAF7EF);
  --bases-table-summary-background: var(--background-primary, #FAF7EF);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #EDEBE5);
  --blockquote-border-color: var(--interactive-accent, color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ));
  --bold-color: var(--flexcyon-red-salmon, #EB5325);
  --button-radius: var(--input-radius, 0px);
  --callout-bug: var(--color-red-rgb, rgb(235, 83, 37));
  --callout-default: var(--color-blue-rgb, 92, 159, 228);
  --callout-error: var(--color-red-rgb, rgb(235, 83, 37));
  --callout-example: var(--color-purple-rgb, rgb(111, 73, 174));
  --callout-fail: var(--color-red-rgb, rgb(235, 83, 37));
  --callout-important: var(--color-cyan-rgb, rgb(59, 155, 161));
  --callout-info: var(--color-blue-rgb, 92, 159, 228);
  --callout-padding: var(--flexcyon-callout-verti-padding)
    var(--flexcyon-callout-horiz-padding, 12px
    24px);
  --callout-question: var(--color-orange-rgb, rgb(237, 129, 38));
  --callout-radius: var(--radius-s, 2px);
  --callout-success: var(--color-green-rgb, rgb(104, 149, 35));
  --callout-summary: var(--color-cyan-rgb, rgb(59, 155, 161));
  --callout-tip: var(--color-cyan-rgb, rgb(59, 155, 161));
  --callout-todo: var(--color-blue-rgb, 92, 159, 228);
  --callout-warning: var(--color-orange-rgb, rgb(237, 129, 38));
  --canvas-background: var(--background-primary, #FAF7EF);
  --canvas-card-label-color: var(--text-faint, #6F768599);
  --canvas-color-1: var(--color-red-rgb, rgb(235, 83, 37));
  --canvas-color-2: var(--color-orange-rgb, rgb(237, 129, 38));
  --canvas-color-3: var(--color-yellow-rgb, rgb(232, 198, 42));
  --canvas-color-4: var(--color-green-rgb, rgb(104, 149, 35));
  --canvas-color-5: var(--color-cyan-rgb, rgb(59, 155, 161));
  --canvas-color-6: var(--color-purple-rgb, rgb(111, 73, 174));
  --canvas-controls-radius: var(--radius-s, 2px);
  --canvas-dot-pattern: var(--color-base-30, color-mix(
    in oklch,
    #DDDCD6,
    #D3D3CE
  ));
  --caret-color: var(--text-normal, #080808);
  --checkbox-border-color: var(--flexcyon-blue, #5c9fe4);
  --checkbox-border-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #6F49AE,
    #797876
  ));
  --checkbox-color: var(--flexcyon-purple-lilac, #6F49AE);
  --checkbox-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #6F49AE,
    #797876
  ));
  --checkbox-marker-color: var(--background-primary, #FAF7EF);
  --checkbox-radius: var(--radius-s, 2px);
  --checklist-done-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --clickable-icon-radius: var(--radius-s, 0);
  --cm-font-size: calc(var(--font-ui-small) + 0.809px);
  --cm-panel-bg: color-mix(
    in srgb,
    var(--color-base-05) 55%,
    var(--color-base-10) 45%
  );
  --code-background: var(--flexcyon-base-01-02-mix, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --code-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --code-bracket-background: var(--background-modifier-hover, #EDEBE5);
  --code-comment: var(--text-faint, #6F768599);
  --code-function: var(--flexcyon-code-function, #E8C62A);
  --code-important: var(--flexcyon-code-error, #EB5325);
  --code-keyword: var(--flexcyon-code-keyword, #3B9BA1);
  --code-normal: var(--text-normal, #080808);
  --code-operator: var(--flexcyon-code-operator, #5c9fe4);
  --code-property: var(--flexcyon-cyan, #3B9BA1);
  --code-punctuation: rgb(var(--color-red-rgb), var(--dimmed));
  --code-radius: var(--radius-s, 2px);
  --code-string: var(--flexcyon-lime-green, #689523);
  --code-tag: var(--flexcyon-base-grey-dark, #797876);
  --code-value: var(--flexcyon-yellow, #E8C62A);
  --collapse-icon-color: var(--text-faint, #6F768599);
  --collapse-icon-color-collapsed: var(--text-accent, #5770B9);
  --color-accent: hsl(
    var(--accent-h) var(--accent-s) var(--accent-l) / var(--dimmed)
  );
  --color-accent-1: hsl(
    calc(var(--accent-h) - 3) calc(var(--accent-s)*1.02)
      calc(var(--accent-l)*1.15)
  );
  --color-accent-2: hsl(
    calc(var(--accent-h) - 20) calc(var(--accent-s)*0.85)
      calc(var(--accent-l)*1.1) / 87.5%
  );
  --color-base-00: var(--flexcyon-base-01, #FAF7EF);
  --color-base-05: var(--flexcyon-base-01-02-mix, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --color-base-10: var(--flexcyon-base-02, #EDEBE5);
  --color-base-100: var(--flexcyon-base-grey-light, #080808);
  --color-base-20: var(--flexcyon-base-02-03-mix, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --color-base-25: var(--flexcyon-base-03, #DDDCD6);
  --color-base-30: var(--flexcyon-base-03-04-mix, color-mix(
    in oklch,
    #DDDCD6,
    #D3D3CE
  ));
  --color-base-35: var(--flexcyon-base-04, #D3D3CE);
  --color-base-40: var(--flexcyon-base-04-05-mix, color-mix(
    in oklch,
    #D3D3CE,
    #B4B3AF
  ));
  --color-base-50: var(--flexcyon-base-05, #B4B3AF);
  --color-base-60: var(--flexcyon-base-grey-dark, #797876);
  --color-base-70: var(--flexcyon-base-grey-mix, color-mix(
    in oklch,
    #080808,
    #797876
  ));
  --color-blue: var(--flexcyon-blue, #5c9fe4);
  --color-blue-cyan-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-cyan)
  );
  --color-blue-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-blue-green-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-green)
  );
  --color-blue-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-blue-orange-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-orange)
  );
  --color-blue-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-blue-pink-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-pink)
  );
  --color-blue-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-blue-purple-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-purple)
  );
  --color-blue-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-blue-red-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-red)
  );
  --color-blue-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-blue-rgb: 92, 159, 228;
  --color-blue-yellow-mix: color-mix(
    in oklch,
    var(--color-blue),
    var(--color-yellow)
  );
  --color-blue-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-blue), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan: var(--flexcyon-cyan, #3B9BA1);
  --color-cyan-blue-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-blue)
  );
  --color-cyan-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan-green-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-green)
  );
  --color-cyan-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan-orange-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-orange)
  );
  --color-cyan-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan-pink-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-pink)
  );
  --color-cyan-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan-purple-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-purple)
  );
  --color-cyan-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan-red-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-red)
  );
  --color-cyan-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-cyan-rgb: rgb(59, 155, 161);
  --color-cyan-yellow-mix: color-mix(
    in oklch,
    var(--color-cyan),
    var(--color-yellow)
  );
  --color-cyan-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-cyan), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green: var(--flexcyon-lime-green, #689523);
  --color-green-blue-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-blue)
  );
  --color-green-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green-cyan-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-cyan)
  );
  --color-green-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green-orange-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-orange)
  );
  --color-green-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green-pink-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-pink)
  );
  --color-green-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green-purple-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-purple)
  );
  --color-green-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green-red-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-red)
  );
  --color-green-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-green-rgb: rgb(104, 149, 35);
  --color-green-yellow-mix: color-mix(
    in oklch,
    var(--color-green),
    var(--color-yellow)
  );
  --color-green-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-green), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange: var(--flexcyon-orange, #ED8126);
  --color-orange-blue-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-blue)
  );
  --color-orange-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange-cyan-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-cyan)
  );
  --color-orange-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange-green-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-green)
  );
  --color-orange-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange-pink-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-pink)
  );
  --color-orange-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange-purple-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-purple)
  );
  --color-orange-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange-red-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-red)
  );
  --color-orange-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-orange-rgb: rgb(237, 129, 38);
  --color-orange-yellow-mix: color-mix(
    in oklch,
    var(--color-orange),
    var(--color-yellow)
  );
  --color-orange-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-orange), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink: var(--flexcyon-pink, #E389CA);
  --color-pink-blue-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-blue)
  );
  --color-pink-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink-cyan-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-cyan)
  );
  --color-pink-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink-green-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-green)
  );
  --color-pink-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink-orange-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-orange)
  );
  --color-pink-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink-purple-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-purple)
  );
  --color-pink-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink-red-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-red)
  );
  --color-pink-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-pink-rgb: rgb(227, 137, 202);
  --color-pink-yellow-mix: color-mix(
    in oklch,
    var(--color-pink),
    var(--color-yellow)
  );
  --color-pink-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-pink), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple: var(--flexcyon-purple-lilac, #6F49AE);
  --color-purple-blue-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-blue)
  );
  --color-purple-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple-cyan-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-cyan)
  );
  --color-purple-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple-green-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-green)
  );
  --color-purple-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple-orange-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-orange)
  );
  --color-purple-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple-pink-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-pink)
  );
  --color-purple-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple-red-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-red)
  );
  --color-purple-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-purple-rgb: rgb(111, 73, 174);
  --color-purple-yellow-mix: color-mix(
    in oklch,
    var(--color-purple),
    var(--color-yellow)
  );
  --color-purple-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-purple), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red: var(--flexcyon-red-salmon, #EB5325);
  --color-red-blue-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-blue)
  );
  --color-red-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red-cyan-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-cyan)
  );
  --color-red-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red-green-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-green)
  );
  --color-red-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red-orange-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-orange)
  );
  --color-red-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red-pink-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-pink)
  );
  --color-red-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red-purple-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-purple)
  );
  --color-red-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-red-rgb: rgb(235, 83, 37);
  --color-red-yellow-mix: color-mix(
    in oklch,
    var(--color-red),
    var(--color-yellow)
  );
  --color-red-yellow-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-red), var(--color-yellow))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow: var(--flexcyon-yellow, #E8C62A);
  --color-yellow-blue-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-blue)
  );
  --color-yellow-blue-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-blue))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-cyan-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-cyan)
  );
  --color-yellow-cyan-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-cyan))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-green-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-green)
  );
  --color-yellow-green-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-green))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-orange-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-orange)
  );
  --color-yellow-orange-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-orange))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-pink-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-pink)
  );
  --color-yellow-pink-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-pink))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-purple-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-purple)
  );
  --color-yellow-purple-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-purple))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-red-mix: color-mix(
    in oklch,
    var(--color-yellow),
    var(--color-red)
  );
  --color-yellow-red-mix-bg: color-mix(
    in oklch,
    color-mix(in oklch, var(--color-yellow), var(--color-red))
      var(--flexcyon-callout-bg-opacity),
    transparent
  );
  --color-yellow-rgb: rgb(232, 198, 42);
  --dark: var(--text-normal, var(--color-base-100, #080808));
  --darkgray: var(--text-normal, var(--color-base-100, #080808));
  --dimmed: 0.55;
  --divider-color: var(--background-modifier-border, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --divider-color-hover: var(--interactive-accent, color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ));
  --drag-ghost-background: var(--flexcyon-base-03, #DDDCD6);
  --drag-ghost-text-color: var(--interactive-accent, color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ));
  --dropdown-background: var(--interactive-normal, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --dropdown-background-hover: var(--interactive-hover, #FAF7EF);
  --expand: 110%;
  --file-header-background: var(--background-primary, #FAF7EF);
  --file-header-background-focused: var(--background-primary, #FAF7EF);
  --file-header-font-size: var(--font-ui-small, 14.56227px);
  --file-line-width: 50rem;
  --flair-background: var(--interactive-normal, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --flair-color: var(--text-normal, #080808);
  --flexcyon-accent: #5770B9;
  --flexcyon-accent-h: 225;
  --flexcyon-accent-l: 53%;
  --flexcyon-accent-s: 41%;
  --flexcyon-active-indicator: '>> ';
  --flexcyon-alt-link-opacity: 55%;
  --flexcyon-anim-duration: 0.3ms;
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
    in oklch,
    var(--flexcyon-base-01) 70%,
    var(--flexcyon-base-02) 30%
  );
  --flexcyon-base-02: #EDEBE5;
  --flexcyon-base-02-03-mix: color-mix(
    in oklch,
    var(--flexcyon-base-02),
    var(--flexcyon-base-03)
  );
  --flexcyon-base-03: #DDDCD6;
  --flexcyon-base-03-04-mix: color-mix(
    in oklch,
    var(--flexcyon-base-03),
    var(--flexcyon-base-04)
  );
  --flexcyon-base-04: #D3D3CE;
  --flexcyon-base-04-05-mix: color-mix(
    in oklch,
    var(--flexcyon-base-04),
    var(--flexcyon-base-05)
  );
  --flexcyon-base-05: #B4B3AF;
  --flexcyon-base-grey-dark: #797876;
  --flexcyon-base-grey-light: #080808;
  --flexcyon-base-grey-mix: color-mix(
    in oklch,
    var(--flexcyon-base-grey-light),
    var(--flexcyon-base-grey-dark)
  );
  --flexcyon-base-grey-scroll: #3f495e;
  --flexcyon-base-grey-scroll-hover: #5c6782;
  --flexcyon-base-grey-tab: #71777f;
  --flexcyon-base-grey-token: #586582;
  --flexcyon-bases-card-delay-factor: 12.5;
  --flexcyon-bases-card-flex-grow: 0.55;
  --flexcyon-bases-card-padding: var(--flexcyon-bases-card-padding-top)
    var(--flexcyon-bases-card-padding-right)
    var(--flexcyon-bases-card-padding-bottom)
    var(--flexcyon-bases-card-padding-left, 8px
    0px
    0px
    2px);
  --flexcyon-bases-card-padding-bottom: 0px;
  --flexcyon-bases-card-padding-left: 2px;
  --flexcyon-bases-card-padding-right: 0px;
  --flexcyon-bases-card-padding-top: 8px;
  --flexcyon-bases-cards-label-opacity: 0.85;
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
  --flexcyon-callout-flashcard-animation-duration: 0.5ms;
  --flexcyon-callout-horiz-padding: 24px;
  --flexcyon-callout-icon-right-padding: 4px;
  --flexcyon-callout-pop-animation-duration: 0.2ms;
  --flexcyon-callout-radix: 16px;
  --flexcyon-callout-verti-padding: 12px;
  --flexcyon-callout-vertical-margin: 1em;
  --flexcyon-callouts-flashcard-height: 250px;
  --flexcyon-callouts-flashcard-width: 250px;
  --flexcyon-canvas-blur-intensity: 1px;
  --flexcyon-code-error: var(--flexcyon-red-salmon, #EB5325);
  --flexcyon-code-file-ext-font-w: 500;
  --flexcyon-code-file-ext-prefix: '.';
  --flexcyon-code-function: var(--flexcyon-yellow, #E8C62A);
  --flexcyon-code-keyword: var(--flexcyon-cyan, #3B9BA1);
  --flexcyon-code-operator: var(--flexcyon-blue, #5c9fe4);
  --flexcyon-code-variable: var(--flexcyon-cyan, #3B9BA1);
  --flexcyon-codeblock-fmt-ext: lowercase;
  --flexcyon-comm-item-opacity: 0.89;
  --flexcyon-comm-text-padding: 3px 16px;
  --flexcyon-contrast-ratio: 1;
  --flexcyon-cursor-duration: 42.5ms;
  --flexcyon-cursor-timing-fn: ease-in;
  --flexcyon-cursor-type: auto;
  --flexcyon-cust-hr-str: 'f';
  --flexcyon-cust-hr-str-font-size: 1.11803em;
  --flexcyon-cust-hr-str-horiz-padding: 8px;
  --flexcyon-cyan: #3B9BA1;
  --flexcyon-dataview-horizontal-padding: 8px;
  --flexcyon-default-ol-style: decimal;
  --flexcyon-editor-bg-color: color-mix(
    in oklch,
    var(--color-base-05),
    var(--color-base-10)
  );
  --flexcyon-editor-bg-color-2: var(--color-base-20, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --flexcyon-editor-bg-rotation: 0deg;
  --flexcyon-editor-bg-width: 15px;
  --flexcyon-editor-dot-size: 2.5px;
  --flexcyon-editor-margin-top: 18px;
  --flexcyon-editor-writing-indentation: 16px;
  --flexcyon-exp-dimmed-nav-size: 13.3623px;
  --flexcyon-external-link-color: #5C9FE4;
  --flexcyon-external-link-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-external-link-color),
    var(--flexcyon-base-grey-dark)
  );
  --flexcyon-fc-dimmed-items-opacity: 0.89;
  --flexcyon-h1-color: var(--color-blue, #5c9fe4);
  --flexcyon-h2-color: var(--color-purple, #6F49AE);
  --flexcyon-h3-color: var(--color-cyan, #3B9BA1);
  --flexcyon-h4-color: var(--color-pink, #E389CA);
  --flexcyon-h5-color: var(--color-green, #689523);
  --flexcyon-h6-color: var(--color-yellow, #E8C62A);
  --flexcyon-heading-1-alignment: left;
  --flexcyon-heading-2-alignment: left;
  --flexcyon-heading-3-alignment: left;
  --flexcyon-heading-4-alignment: left;
  --flexcyon-heading-5-alignment: left;
  --flexcyon-heading-6-alignment: left;
  --flexcyon-highlight-active-line-opacity: 7.5%;
  --flexcyon-highlight-border-radius: 4px;
  --flexcyon-highlight-colour: var(--color-cyan, #3B9BA1);
  --flexcyon-highlight-horiz-padding: 2.5px;
  --flexcyon-highlight-opacity: 22.5%;
  --flexcyon-highlight-verti-padding: 1px;
  --flexcyon-input-horiz-padding: 8px;
  --flexcyon-input-verti-padding: 8px;
  --flexcyon-l-spacing: 0px;
  --flexcyon-lime-green: #689523;
  --flexcyon-link-color: #6F49AE;
  --flexcyon-link-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-link-color),
    var(--flexcyon-base-grey-dark)
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
    var(--text-accent),
    var(--color-pink),
    var(--color-green)
  );
  --flexcyon-new-tab-font-group: var(--font-monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace);
  --flexcyon-omnisearch-body-margin-left: 1.45rem;
  --flexcyon-orange: #ED8126;
  --flexcyon-os-detail-padding-l: 12px;
  --flexcyon-os-detail-padding-r: 24px;
  --flexcyon-palette-cyan-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-cyan),
    var(--flexcyon-base-grey-dark)
  );
  --flexcyon-palette-lilac-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-purple-lilac),
    var(--flexcyon-base-grey-dark)
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
  --flexcyon-status-hide-hover-duration: 0.35ms;
  --flexcyon-status-hide-hover-function: ease-out;
  --flexcyon-status-hide-trigger-translation: 50px;
  --flexcyon-status-hide-until-hover-text: 'Show status';
  --flexcyon-status-hide-until-hover-translation: 80vw;
  --flexcyon-status-live-text: 'LIVE';
  --flexcyon-status-new-tab-opacity: 0.55;
  --flexcyon-status-reading-text: 'READ';
  --flexcyon-status-source-text: 'SOURCE';
  --flexcyon-style-settings-indent-width: 4px;
  --flexcyon-suggestion-horiz-padding: 12px;
  --flexcyon-suggestion-verti-padding: 8px;
  --flexcyon-table-reading-mode-width: 100%;
  --flexcyon-td-horiz-padding: 10px;
  --flexcyon-td-live-pad-scale: 0.2;
  --flexcyon-td-table-alignment: left;
  --flexcyon-td-verti-padding: 5px;
  --flexcyon-text-muted: #6F768599;
  --flexcyon-th-horiz-padding: 10px;
  --flexcyon-th-live-pad-scale: 0.2;
  --flexcyon-th-table-alignment: left;
  --flexcyon-th-verti-padding: 5px;
  --flexcyon-top-actions-alignment: center;
  --flexcyon-tree-item-horiz-padding: 10px;
  --flexcyon-tree-item-verti-padding: 2px;
  --flexcyon-typewriter-mode-opacity: 0.55;
  --flexcyon-var-comps-sugg-horiz-padding: 12px;
  --flexcyon-var-comps-sugg-vert-padding: 7px;
  --flexcyon-view-header-breadcrumb-max-w: 12.5vw;
  --flexcyon-vim-bottom-positioning: -4px;
  --flexcyon-vim-command-text: 'COMMAND';
  --flexcyon-vim-insert-text: 'INSERT';
  --flexcyon-vim-left-positioning: 6px;
  --flexcyon-vim-normal-text: 'NORMAL';
  --flexcyon-w-spacing: 0px;
  --flexcyon-yellow: #E8C62A;
  --flexyon-base-grey-token: #586582;
  --font-mermaid: var(--font-monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace);
  --font-ui-large: 17.79833px;
  --font-ui-medium: 16.1803px;
  --font-ui-small: 14.56227px;
  --font-ui-smaller: 12.94424px;
  --footnote-divider-color: var(--metadata-divider-color, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --footnote-id-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --footnote-id-color-no-occurrences: var(--text-faint, #6F768599);
  --footnote-input-background-active: var(--metadata-input-background-active, #EDEBE5);
  --footnote-line-height: var(--line-height-normal, 1.4);
  --footnote-radius: var(--radius-s, 2px);
  --graph-control-horiz-padding: 12px;
  --graph-control-verti-padding: 6px;
  --graph-line: var(--flexcyon-base-03, #DDDCD6);
  --graph-node: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --graph-node-attachment: var(--color-yellow, #E8C62A);
  --graph-node-focused: var(--text-accent, #5770B9);
  --graph-node-tag: var(--flexcyon-purple-lilac, #6F49AE);
  --graph-node-unresolved: var(--flexcyon-red-salmon, #EB5325);
  --graph-text: var(--text-normal, #080808);
  --gray: var(--text-muted, color-mix(
    in oklch,
    var(--flexcyon-text-muted),
    var(--text-normal)
  ));
  --h: tan(atan2(1380px, 1px));
  --h1-color: var(--flexcyon-h1-color, #5c9fe4);
  --h1-line-height: 1.61;
  --h1-size: 1.81803em;
  --h2-color: var(--flexcyon-h2-color, #6F49AE);
  --h2-line-height: 1.51;
  --h2-size: 1.61803em;
  --h2-weight: 675;
  --h3-color: var(--flexcyon-h3-color, #3B9BA1);
  --h3-line-height: 1.41;
  --h3-size: 1.41803em;
  --h3-weight: 650;
  --h4-color: var(--flexcyon-h4-color, #E389CA);
  --h4-line-height: 1.31;
  --h4-size: 1.21803em;
  --h4-weight: 625;
  --h5-color: var(--flexcyon-h5-color, #689523);
  --h5-line-height: var(--line-height-normal, 1.21);
  --h5-size: 1.11803em;
  --h5-weight: 600;
  --h6-color: var(--flexcyon-h6-color, #E8C62A);
  --h6-line-height: var(--line-height-normal, 1.21);
  --h6-size: 1.01803em;
  --h6-weight: 575;
  --heading-formatting: var(--text-faint, #6F768599);
  --highlight: var(--text-highlight-bg, color-mix(
    in oklch,
    var(--flexcyon-highlight-colour) var(--flexcyon-highlight-opacity),
    transparent
  ));
  --hr-color: var(--background-modifier-border, #393E48);
  --icon-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --icon-color-active: var(--interactive-accent, color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ));
  --icon-color-focused: var(--interactive-accent, color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ));
  --icon-color-hover: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --icon-stroke: var(--icon-m-stroke-width, 2px);
  --icon-xs: 12.25px;
  --img-border-radius: 15px;
  --inline-title-color: var(--h1-color, #5c9fe4);
  --inline-title-size: var(--h1-size, 1.802em);
  --input-date-separator: var(--text-faint, #6F768599);
  --input-padding: var(--flexcyon-input-verti-padding)
    var(--flexcyon-input-horiz-padding, 8px
    8px);
  --input-placeholder-color: var(--text-faint, #6F768599);
  --input-radius: 0px;
  --interactive-accent: color-mix(
    in oklch,
    var(--text-accent) 80%,
    transparent 20%
  );
  --interactive-accent-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-accent) 75%,
    transparent
  );
  --interactive-accent-hsl: var(--accent-h), var(--accent-s), var(--accent-l);
  --interactive-hover: var(--background-primary, #FAF7EF);
  --interactive-normal: var(--color-base-05, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --italic-color: var(--flexcyon-accent, #5770B9);
  --less-letter-spacing: -3px;
  --light: var(--background-primary, var(--color-base-00, #FAF7EF));
  --lightgray: var(--background-secondary, var(--color-base-05, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  )));
  --line-height-normal: 1.4;
  --line-height-tight: 1.25;
  --link-color: var(--flexcyon-link-color, #6F49AE);
  --link-color-hover: var(--flexcyon-link-hover, color-mix(
    in oklch shorter hue,
    #6F49AE,
    #797876
  ));
  --link-external-color: var(--flexcyon-external-link-color, #5C9FE4);
  --link-external-color-hover: var(--flexcyon-external-link-hover, color-mix(
    in oklch shorter hue,
    #5C9FE4,
    #797876
  ));
  --link-unresolved-color: var(--flexcyon-link-unresolved-color, #6F49AE);
  --link-unresolved-decoration-color: var(--flexcyon-link-unresolved-color, #6F49AE);
  --link-unresolved-decoration-style: dashed;
  --list-marker-color: var(--flexcyon-cyan, #3B9BA1);
  --list-marker-color-collapsed: var(--flexcyon-lime-green, #689523);
  --list-marker-color-hover: var(--flexcyon-palette-cyan-hover, color-mix(
    in oklch shorter hue,
    #3B9BA1,
    #797876
  ));
  --list-numbered-style: var(--flexcyon-default-ol-style, decimal);
  --menu-background: var(--background-secondary, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --menu-border-color: var(--background-modifier-border-hover, transparent);
  --menu-radius: var(--radius-m, 4px);
  --metadata-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --metadata-divider-color: var(--background-modifier-border, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --metadata-input-background-active: var(--background-modifier-hover, #EDEBE5);
  --metadata-input-text-color: var(--text-normal, #080808);
  --metadata-label-background-active: var(--background-modifier-hover, #EDEBE5);
  --metadata-label-text-color: var(--flexcyon-purple-lilac, #6F49AE);
  --metadata-label-text-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #6F49AE,
    #797876
  ));
  --metadata-property-background-active: var(--background-modifier-hover, #EDEBE5);
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14.56227px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14.56227px);
  --modal-background: var(--background-primary, #FAF7EF);
  --modal-border-color: var(--flexcyon-base-02, #EDEBE5);
  --modal-radius: var(--radius-l, 6px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #6F768599);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #6F768599);
  --nav-heading-color: var(--text-normal, #080808);
  --nav-heading-color-collapsed: var(--text-faint, #6F768599);
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --nav-heading-color-hover: var(--text-normal, #080808);
  --nav-item-background-active: var(--background-modifier-hover, #EDEBE5);
  --nav-item-background-hover: var(--background-modifier-hover, #EDEBE5);
  --nav-item-background-selected: var(--flexcyon-base-03, #DDDCD6);
  --nav-item-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --nav-item-color-active: var(--interactive-accent, color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ));
  --nav-item-color-highlighted: var(--text-accent, #5770B9);
  --nav-item-color-hover: var(--text-normal, #080808);
  --nav-item-color-selected: var(--flexcyon-orange, #ED8126);
  --nav-item-radius: var(--radius-s, 2px);
  --nav-item-size: var(--font-ui-small, 14.56227px);
  --nav-tag-color: var(--text-faint, #6F768599);
  --nav-tag-color-active: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --nav-tag-color-hover: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --nav-tag-radius: var(--radius-s, 2px);
  --oz-fta-all-panes-active-text-color: #080808;
  --oz-fta-file-font-size: calc(var(--font-ui-medium) - 0.1rem);
  --oz-fta-file-pane-file-name-color: #6F768599;
  --oz-fta-folder-font-size: calc(var(--font-ui-medium) - 0.1rem);
  --oz-fta-folder-pane-file-name-color: #080808;
  --oz-fta-folder-panes-file-name-color: #080808;
  --pdf-background: var(--background-primary, #FAF7EF);
  --pdf-page-background: var(--background-primary, #FAF7EF);
  --pdf-sidebar-background: var(--background-primary, #FAF7EF);
  --pill-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --pill-border-color-hover: var(--background-modifier-border-hover, transparent);
  --pill-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --pill-color-hover: var(--text-normal, #080808);
  --pill-color-remove: var(--text-faint, #6F768599);
  --pill-color-remove-hover: var(--text-accent, #5770B9);
  --prompt-background: var(--background-primary, #FAF7EF);
  --prompt-border-color: var(--flexcyon-base-02-03-mix, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --r-background-color: var(--color-base-05, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --r-heading-color: var(--text-normal, #080808);
  --r-heading-font: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --r-heading-margin: 16px 0px;
  --r-heading-text-transform: capitalize;
  --r-heading1-size: var(--h1-size, 1.81803em);
  --r-heading2-size: var(--h2-size, 1.61803em);
  --r-heading3-size: var(--h3-size, 1.41803em);
  --r-heading4-size: var(--h4-size, 1.21803em);
  --r-link-color: var(--color-accent-2, hsl(
    205 34.85%
      58.3% / 87.5%
  ));
  --r-main-font: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --r-main-font-size: max-content;
  --radius-l: 6px;
  --radius-m: 4px;
  --radius-s: 2px;
  --radius-x1: 8px;
  --radius-xl: 8px;
  --raised-background: var(--blur-background, color-mix(in srgb, #FAF7EF 65%, transparent) linear-gradient(#FAF7EF, color-mix(in srgb, #FAF7EF 65%, transparent)));
  --ribbon-background: var(--background-secondary, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --ribbon-background-collapsed: var(--ribbon-background, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --ribbon-width: 48px;
  --scrollbar-radius: var(--radius-l, 6px);
  --search-clear-button-color: var(--flexcyon-red-salmon, #EB5325);
  --search-icon-color: var(--flexcyon-accent, #5770B9);
  --search-result-background: var(--background-primary, #FAF7EF);
  --secondary: var(--text-accent, var(--flexcyon-accent, #5770B9));
  --setting-group-heading-color: var(--text-normal, #080808);
  --setting-group-heading-size: var(--font-ui-medium, 16.1803px);
  --setting-items-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --setting-items-padding: var(--size-4-5, 2px 0px);
  --settings-background: var(--color-base-05, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --shiki-code-background: var(--code-background, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-comment: var(--text-faint, #6F768599);
  --shiki-code-function: var(--color-green, #689523);
  --shiki-code-important: var(--color-orange, #ED8126);
  --shiki-code-keyword: var(--color-pink, #E389CA);
  --shiki-code-normal: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --shiki-code-property: var(--color-cyan, #3B9BA1);
  --shiki-code-punctuation: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --shiki-code-string: var(--color-yellow, #E8C62A);
  --shiki-code-value: var(--color-purple, #6F49AE);
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --shiki-gutter-text-color: var(--text-faint, #6F768599);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --shiki-terminal-dots-color: var(--text-faint, #6F768599);
  --shiki-tooltip-background: var(--background-modifier-message, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --slider-thumb-border-color: var(--background-modifier-border-hover, transparent);
  --slider-track-background: var(--background-modifier-border, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --status-bar-background: var(--background-secondary, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --status-bar-border-color: var(--divider-color, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --status-bar-font-size: var(--font-ui-smaller, 13.753255px);
  --status-bar-position: absolute;
  --status-bar-radius: var(--radius-m, 4px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --suggestion-background: var(--background-primary, #FAF7EF);
  --sync-avatar-color-1: var(--color-red, #EB5325);
  --sync-avatar-color-2: var(--color-orange, #ED8126);
  --sync-avatar-color-3: var(--color-yellow, #E8C62A);
  --sync-avatar-color-4: var(--color-green, #689523);
  --sync-avatar-color-5: var(--color-cyan, #3B9BA1);
  --sync-avatar-color-6: var(--color-blue, #5c9fe4);
  --sync-avatar-color-7: var(--color-purple, #6F49AE);
  --sync-avatar-color-8: var(--color-pink, #E389CA);
  --tab-background-active: var(--background-primary, #FAF7EF);
  --tab-container-background: var(--background-secondary, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --tab-curve: 0px;
  --tab-divider-color: var(--titlebar-background, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --tab-font-size: var(--font-ui-small, 14.56227px);
  --tab-outline-color: var(--divider-color, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --tab-outline-width: 0px;
  --tab-radius: var(--radius-s, 0px);
  --tab-radius-active: 0px;
  --tab-stacked-font-size: var(--font-ui-small, 14.56227px);
  --tab-switcher-background: var(--background-secondary, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --tab-switcher-preview-radius: var(--radius-xl, 8px);
  --tab-text-color: var(--flexcyon-base-05, #B4B3AF);
  --tab-text-color-active: var(--text-accent, #5770B9);
  --tab-text-color-focused: var(--flexcyon-base-05, #B4B3AF);
  --tab-text-color-focused-active: var(--text-accent, #5770B9);
  --tab-text-color-focused-active-current: var(--text-accent, #5770B9);
  --tab-text-color-focused-highlighted: var(--text-accent, #5770B9);
  --table-add-button-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --table-background: var(--background-primary, #FAF7EF);
  --table-border-color: var(--background-modifier-border, #6F768566);
  --table-column-alt-background: var(--table-background, #FAF7EF);
  --table-drag-handle-background-active: var(--table-selection-border-color, color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ));
  --table-drag-handle-color: var(--text-faint, #6F768599);
  --table-drag-handle-color-active: var(--text-on-accent, #DDDCD6);
  --table-header-background: var(--color-base-20, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --table-header-background-hover: var(--table-background, #FAF7EF);
  --table-header-border-color: var(--table-border-color, #6F768566);
  --table-header-color: var(--text-normal, #080808);
  --table-header-size: var(--font-ui-large, large);
  --table-line-height: var(--line-height-tight, 1.25);
  --table-row-alt-background-hover: var(--table-background, #FAF7EF);
  --table-row-background-hover: var(--table-background, #FAF7EF);
  --table-selection-border-color: var(--interactive-accent, color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ));
  --table-text-size: var(--font-ui-medium, 16.1803px);
  --tag-background: color-mix(in oklch, var(--tag-color) 25%, transparent);
  --tag-background-hover: color-mix(
    in oklch,
    var(--tag-color-hover) 25%,
    transparent
  );
  --tag-color: var(--flexcyon-cyan, #3B9BA1);
  --tag-color-hover: var(--flexcyon-palette-cyan-hover, color-mix(
    in oklch shorter hue,
    #3B9BA1,
    #797876
  ));
  --tag-decoration-hover: underline;
  --tag-size: var(--code-size, 0.875em);
  --tertiary: var(--interactive-accent-hover, color-mix(
    in oklch shorter hue,
    var(--flexcyon-accent) 75%,
    transparent
  ));
  --text-accent: var(--flexcyon-accent, #5770B9);
  --text-error: var(--flexcyon-red-salmon, #EB5325);
  --text-faint: var(--flexcyon-text-muted, #6F768599);
  --text-highlight-bg: color-mix(
    in oklch,
    var(--flexcyon-highlight-colour) var(--flexcyon-highlight-opacity),
    transparent
  );
  --text-muted: color-mix(
    in oklch,
    var(--flexcyon-text-muted),
    var(--text-normal)
  );
  --text-normal: var(--color-base-100, #080808);
  --text-on-accent: var(--flexcyon-base-03, #DDDCD6);
  --text-selection: color-mix(
    in oklch shorter hue,
    var(--flexcyon-base-04) 20%,
    transparent
  );
  --text-success: var(--flexcyon-lime-green, #689523);
  --text-warning: var(--flexcyon-red-salmon, #EB5325);
  --textHighlight: var(--text-highlight-bg, color-mix(
    in oklch,
    var(--flexcyon-highlight-colour) var(--flexcyon-highlight-opacity),
    transparent
  ));
  --titlebar-background: var(--background-secondary, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --titlebar-background-focused: var(--background-secondary, color-mix(
    in oklch,
    #FAF7EF 70%,
    #EDEBE5 30%
  ));
  --titlebar-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #EDEBE5,
    #DDDCD6
  ));
  --titlebar-text-color: var(--text-faint, #6F768599);
  --titlebar-text-color-focused: var(--text-muted, color-mix(
    in oklch,
    #6F768599,
    #080808
  ));
  --toggle-thumb-color: var(--text-on-accent, #DDDCD6);
  --upsize: 103%;
  --vault-name-color: var(--interactive-accent, color-mix(
    in oklch,
    #5770B9 80%,
    transparent 20%
  ));
  --vault-profile-color: var(--text-normal, #080808);
  --vault-profile-color-hover: var(--vault-profile-color, #080808);
  --vault-profile-font-size: var(--font-ui-small, 14.56227px);
  --w: tan(atan2(2538px, 1px));
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, oklch(0.965356 0.0102416 none));
  color: var(--color-accent-2, rgb(8, 8, 8));
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(250, 247, 239));
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, oklch(0.965356 0.0102416 none));
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.916763 0.00824887 none);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, oklch(0.965356 0.0102416 none));
  border-left-color: oklch(0.916763 0.00824887 none);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body html {
  --h: tan(atan2(var(--h-raw), 1px));
  --w: tan(atan2(var(--w-raw), 1px));
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(235, 83, 37));
  outline: rgb(235, 83, 37) none 0px;
  text-decoration-color: rgb(235, 83, 37);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(87, 112, 185));
  outline: rgb(87, 112, 185) none 0px;
  text-decoration-color: rgb(87, 112, 185);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(87, 112, 185));
  outline: rgb(87, 112, 185) none 0px;
  text-decoration-color: rgb(87, 112, 185);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(235, 83, 37));
  outline: rgb(235, 83, 37) none 0px;
  text-decoration-color: rgb(235, 83, 37);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, oklch(0.636083 0.0886418 200.983 / 0.225));
  color: var(--text-normal, rgb(8, 8, 8));
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
  color: var(--text-normal, rgb(8, 8, 8));
  font-size: 14.5623px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(92, 159, 228);
  border-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(111, 73, 174));
  border-color: rgb(111, 73, 174);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, oklch(0.29593 0.00924516 265.685 / 0.8));
  outline: oklch(0.29593 0.00924516 265.685 / 0.8) none 0px;
  text-decoration-color: oklch(0.29593 0.00924516 265.685 / 0.8);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(92, 159, 228));
  outline: rgb(92, 159, 228) none 0px;
  text-decoration-color: rgb(92, 159, 228);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(111, 73, 174));
  outline: rgb(111, 73, 174) none 0px;
  text-decoration-color: rgb(111, 73, 174);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(111, 73, 174));
  outline: rgb(111, 73, 174) none 0px;
  text-decoration: underline dashed rgb(111, 73, 174);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(111, 73, 174));
  text-decoration-style: var(--link-unresolved-decoration-style, dashed);
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
  color: var(--text-faint, rgba(111, 118, 133, 0.6));
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: var(--color-base-05, oklch(0.965356 0.0102416 none));
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
  background-color: var(--table-background, rgb(250, 247, 239));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: var(--table-text-color, rgb(8, 8, 8));
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  text-align: var(--flexcyon-td-table-alignment, left);
}

html[saved-theme="light"] body th {
  background-color: var(--table-column-alt-background, rgb(250, 247, 239));
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
  color: var(--table-header-color, rgb(8, 8, 8));
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  text-align: var(--flexcyon-td-table-alignment, left);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, oklch(0.916763 0.00824887 none));
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-left-color: rgba(111, 118, 133, 0.4);
  border-right-color: rgba(111, 118, 133, 0.4);
  border-top-color: rgba(111, 118, 133, 0.4);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, oklch(0.965356 0.0102416 none));
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-right-color: oklch(0.916763 0.00824887 none);
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(8, 8, 8));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, oklch(0.965356 0.0102416 none));
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
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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
  background-color: var(--background-primary-alt, rgb(237, 235, 229));
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(8, 8, 8);
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
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(8, 8, 8));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(8, 8, 8));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(8, 8, 8));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(8, 8, 8));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(8, 8, 8));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(8, 8, 8));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(8, 8, 8));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(8, 8, 8));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(8, 8, 8));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(8, 8, 8));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(8, 8, 8));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(8, 8, 8));
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--text-faint, #6F768599);
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--text-faint, rgb(8, 8, 8));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: #6F768599;
  background: rgb(250, 247, 239) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 247, 239);
  border-bottom-color: rgba(111, 118, 133, 0.6);
  border-left-color: rgba(111, 118, 133, 0.6);
  border-right-color: rgba(111, 118, 133, 0.6);
  border-top-color: rgba(111, 118, 133, 0.6);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(8, 8, 8);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
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
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-right-color: oklch(0.916763 0.00824887 none);
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-normal, rgb(8, 8, 8));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(250, 247, 239));
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
  background-color: var(--background-modifier-hover, rgb(237, 235, 229));
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
  background-color: var(--background-modifier-hover, rgb(237, 235, 229));
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
  background-color: var(--background-modifier-hover, rgb(237, 235, 229));
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, oklch(0.636083 0.0886418 200.983 / 0.25));
  border-bottom-color: rgba(86, 111, 184, 0.15);
  border-left-color: rgba(86, 111, 184, 0.15);
  border-right-color: rgba(86, 111, 184, 0.15);
  border-top-color: rgba(86, 111, 184, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(59, 155, 161);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(92, 159, 228));
  font-size: var(--inline-title-size, 28.832px);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(111, 73, 174));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(59, 155, 161));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(227, 137, 202));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(104, 149, 35));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(232, 198, 42));
}

html[saved-theme="light"] body hr {
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-left-color: oklch(0.916763 0.00824887 none);
  border-right-color: oklch(0.916763 0.00824887 none);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--text-faint, #6F768599);
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
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, oklch(0.29593 0.00924516 265.685 / 0.8));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, oklch(0.29593 0.00924516 265.685 / 0.8));
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
  color: var(--icon-color, oklch(0.29593 0.00924516 265.685 / 0.8));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-left-radius: 4px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, oklch(0.29593 0.00924516 265.685 / 0.8));
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
  color: var(--nav-item-color, oklch(0.29593 0.00924516 265.685 / 0.8));
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
  color: var(--nav-item-color, oklch(0.29593 0.00924516 265.685 / 0.8));
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
  color: var(--icon-color, oklch(0.29593 0.00924516 265.685 / 0.8));
}

html[saved-theme="light"] body .darkmode svg {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
  stroke: oklch(0.29593 0.00924516 265.685 / 0.8);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  background-color: var(--color-base-20, oklch(0.916763 0.00824887 none));
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
  color: var(--text-faint, rgba(111, 118, 133, 0.6));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(8, 8, 8));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(250, 247, 239));
  border-color: rgb(8, 8, 8);
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgba(111, 118, 133, 0.4);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: var(--table-column-alt-background, rgb(250, 247, 239));
  border-color: rgba(111, 118, 133, 0.4);
  color: var(--table-header-color, rgb(8, 8, 8));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-left-color: oklch(0.916763 0.00824887 none);
  border-right-color: oklch(0.916763 0.00824887 none);
  border-top-color: oklch(0.916763 0.00824887 none);
  color: var(--text-muted, oklch(0.29593 0.00924516 265.685 / 0.8));
  padding-left: 14px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
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
  background-color: var(--pill-background, oklch(0.636083 0.0886418 200.983 / 0.25));
  color: var(--pill-color, rgb(59, 155, 161));
}

html[saved-theme="light"] body .note-properties-value {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--color-base-00, rgb(250, 247, 239));
  color: var(--text-normal, rgb(8, 8, 8));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, oklch(0.965356 0.0102416 none));
  border-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, oklch(0.965356 0.0102416 none));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(8, 8, 8);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(8, 8, 8));
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
  color: var(--text-normal, rgb(111, 73, 174));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, oklch(0.965356 0.0102416 none));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(8, 8, 8));
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
  background-color: var(--tag-background, oklch(0.636083 0.0886418 200.983 / 0.25));
  border-bottom-color: rgba(86, 111, 184, 0.15);
  border-left-color: rgba(86, 111, 184, 0.15);
  border-right-color: rgba(86, 111, 184, 0.15);
  border-top-color: rgba(86, 111, 184, 0.15);
  color: var(--tag-color, rgb(59, 155, 161));
}`,
  },
};
