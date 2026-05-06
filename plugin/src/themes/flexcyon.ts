import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "flexcyon",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "flexcyon",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: var(--flexcyon-accent-h, 105.5);
  --accent-l: var(--flexcyon-accent-l, 59.5%);
  --accent-s: var(--flexcyon-accent-s, 77.5%);
  --background-modifier-active-hover: var(--color-base-25, #24262c);
  --background-modifier-border: var(--color-base-20, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --background-modifier-border-focus: var(--color-base-30, color-mix(
    in oklch,
    #24262c,
    #4d566b
  ));
  --background-modifier-border-hover: var(--color-base-35, transparent);
  --background-modifier-error: rgb(
    var(--color-red-rgb),
    calc(var(--dimmed) + 0.3)
  );
  --background-modifier-error-hover: var(--color-red, #c03a47);
  --background-modifier-error-rgb: var(--color-red-rgb, 192, 58, 71);
  --background-modifier-form-field: var(--color-base-20, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --background-modifier-hover: var(--color-base-20, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --background-modifier-message: var(--color-base-20, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --background-modifier-success: var(--color-green, #a1c05c);
  --background-modifier-success-rgb: var(--color-green-rgb, 161, 192, 92);
  --background-primary: var(--color-base-10, #191d28);
  --background-primary-alt: var(--color-base-25, #24262c);
  --background-secondary: var(--color-base-00, #14161c);
  --background-secondary-alt: var(--color-base-20, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --bases-border-r: 16px;
  --bases-cards-background: var(--background-primary, #191d28);
  --bases-cards-cover-background: var(--background-secondary, #14161c);
  --bases-cards-group-padding: 16px;
  --bases-cards-radius: var(--radius-m, 4px);
  --bases-embed-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-embed-padding: 4px;
  --bases-group-heading-property-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --bases-group-heading-property-size: var(--font-ui-smaller, 12.9442px);
  --bases-no-img-str: "No image path could be found for this file";
  --bases-table-border-color: var(--table-border-color, #6f768566);
  --bases-table-cell-background-active: var(--background-primary, #191d28);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #24262c);
  --bases-table-cell-background-selected: var(--table-selection, hsla(105.5, 77.5%, 59.5%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-group-background: var(--background-primary-alt, #24262c);
  --bases-table-header-background: var(--background-primary, #191d28);
  --bases-table-header-background-hover: var(--background-modifier-hover, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --bases-table-header-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --bases-table-row-background-hover: var(--table-row-background-hover, #191d28);
  --bases-table-summary-background: var(--background-primary, #191d28);
  --bases-table-summary-background-hover: var(--background-modifier-hover, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --blockquote-border-color: var(--interactive-accent, color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ));
  --bold-color: var(--flexcyon-red-salmon, #c03a47);
  --button-radius: var(--input-radius, 0px);
  --callout-bug: var(--color-red-rgb, 192, 58, 71);
  --callout-default: var(--color-blue-rgb, 90, 143, 205);
  --callout-error: var(--color-red-rgb, 192, 58, 71);
  --callout-example: var(--color-purple-rgb, 164, 97, 200);
  --callout-fail: var(--color-red-rgb, 192, 58, 71);
  --callout-important: var(--color-cyan-rgb, 60, 185, 194);
  --callout-info: var(--color-blue-rgb, 90, 143, 205);
  --callout-padding: var(--flexcyon-callout-verti-padding)
    var(--flexcyon-callout-horiz-padding, 12px
    24px);
  --callout-question: var(--color-orange-rgb, 204, 132, 73);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 2px);
  --callout-success: var(--color-green-rgb, 161, 192, 92);
  --callout-summary: var(--color-cyan-rgb, 60, 185, 194);
  --callout-tip: var(--color-cyan-rgb, 60, 185, 194);
  --callout-todo: var(--color-blue-rgb, 90, 143, 205);
  --callout-warning: var(--color-orange-rgb, 204, 132, 73);
  --canvas-background: var(--background-primary, #191d28);
  --canvas-card-label-color: var(--text-faint, #6f768599);
  --canvas-color-1: var(--color-red-rgb, 192, 58, 71);
  --canvas-color-2: var(--color-orange-rgb, 204, 132, 73);
  --canvas-color-3: var(--color-yellow-rgb, 194, 158, 66);
  --canvas-color-4: var(--color-green-rgb, 161, 192, 92);
  --canvas-color-5: var(--color-cyan-rgb, 60, 185, 194);
  --canvas-color-6: var(--color-purple-rgb, 164, 97, 200);
  --canvas-controls-radius: var(--radius-s, 2px);
  --canvas-dot-pattern: var(--color-base-30, color-mix(
    in oklch,
    #24262c,
    #4d566b
  ));
  --caret-color: var(--text-normal, #d3d5d3);
  --checkbox-border-color: var(--flexcyon-blue, #5a8fcd);
  --checkbox-border-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #a461c8,
    #898c93
  ));
  --checkbox-color: var(--flexcyon-purple-lilac, #a461c8);
  --checkbox-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #a461c8,
    #898c93
  ));
  --checkbox-marker-color: var(--background-primary, #191d28);
  --checkbox-radius: var(--radius-s, 2px);
  --checklist-done-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --clickable-icon-radius: var(--radius-s, 0);
  --cm-font-size: calc(var(--font-ui-small) + 0.809px);
  --cm-panel-bg: var(--color-base-00, #14161c);
  --code-background: var(--flexcyon-base-01, #14161c);
  --code-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --code-bracket-background: var(--background-modifier-hover, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --code-comment: var(--text-faint, #6f768599);
  --code-function: var(--flexcyon-code-function, #c29e42);
  --code-important: var(--flexcyon-code-error, #c03a47);
  --code-keyword: var(--flexcyon-code-keyword, #a461c8);
  --code-normal: var(--flexcyon-cyan, #3cb9c2);
  --code-operator: var(--flexcyon-code-operator, #cc8449);
  --code-property: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --code-punctuation: var(--flexcyon-purple-lilac, #a461c8);
  --code-radius: var(--radius-s, 2px);
  --code-string: var(--flexcyon-lime-green, #a1c05c);
  --code-tag: var(--flexcyon-base-grey-dark, #898c93);
  --code-value: var(--color-purple, #a461c8);
  --collapse-icon-color: var(--text-faint, #6f768599);
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
  --color-base-00: var(--flexcyon-base-01, #14161c);
  --color-base-05: var(--flexcyon-base-01-02-mix, color-mix(
    in oklch,
    #14161c,
    #191d28
  ));
  --color-base-10: var(--flexcyon-base-02, #191d28);
  --color-base-100: var(--flexcyon-base-grey-light, #d3d5d3);
  --color-base-20: var(--flexcyon-base-02-03-mix, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --color-base-25: var(--flexcyon-base-03, #24262c);
  --color-base-30: var(--flexcyon-base-03-04-mix, color-mix(
    in oklch,
    #24262c,
    #4d566b
  ));
  --color-base-35: var(--flexcyon-base-04, #4d566b);
  --color-base-40: var(--flexcyon-base-04-05-mix, color-mix(
    in oklch,
    #4d566b,
    #6f7685
  ));
  --color-base-50: var(--flexcyon-base-05, #6f7685);
  --color-base-60: var(--flexcyon-base-grey-dark, #898c93);
  --color-base-70: var(--flexcyon-base-grey-mix, color-mix(
    in oklch,
    #d3d5d3,
    #898c93
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
  --color-cyan: var(--flexcyon-cyan, #3cb9c2);
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
  --color-cyan-rgb: 60, 185, 194;
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
  --color-green: var(--flexcyon-lime-green, #a1c05c);
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
  --color-green-rgb: 161, 192, 92;
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
  --color-orange: var(--flexcyon-orange, #cc8449);
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
  --color-orange-rgb: 204, 132, 73;
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
  --color-pink: var(--flexcyon-pink, #d458a3);
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
  --color-pink-rgb: 212, 88, 163;
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
  --color-purple: var(--flexcyon-purple-lilac, #a461c8);
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
  --color-purple-rgb: 164, 97, 200;
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
  --color-red: var(--flexcyon-red-salmon, #c03a47);
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
  --color-red-rgb: 192, 58, 71;
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
  --color-yellow: var(--flexcyon-yellow, #c29e42);
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
  --color-yellow-rgb: 194, 158, 66;
  --dark: var(--text-normal, var(--color-base-100, #d3d5d3));
  --darkgray: var(--text-normal, var(--color-base-100, #d3d5d3));
  --dimmed: 0.55;
  --divider-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --divider-color-hover: var(--interactive-accent, color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ));
  --drag-ghost-background: var(--flexcyon-base-03, #24262c);
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
    #14161c,
    #191d28
  ));
  --dropdown-background-hover: var(--interactive-hover, #191d28);
  --expand: 110%;
  --file-header-background: var(--background-primary, #191d28);
  --file-header-background-focused: var(--background-primary, #191d28);
  --file-header-font-size: var(--font-ui-small, 14.5622px);
  --file-line-width: 50rem;
  --flair-background: var(--interactive-normal, color-mix(
    in oklch,
    #14161c,
    #191d28
  ));
  --flair-color: var(--text-normal, #d3d5d3);
  --flexcyon-accent: #92a871;
  --flexcyon-accent-h: 105.5;
  --flexcyon-accent-l: 59.5%;
  --flexcyon-accent-s: 77.5%;
  --flexcyon-active-indicator: ">>";
  --flexcyon-alt-link-opacity: 55%;
  --flexcyon-anim-duration: 300ms;
  --flexcyon-anim-easing: ease-in-out;
  --flexcyon-anim-rotate-amount: 50deg;
  --flexcyon-anim-slide-amount: 56.6311px;
  --flexcyon-anim-start-opacity: 0.55;
  --flexcyon-anim-start-scale-amt: 0.33;
  --flexcyon-ascii-alignment: left;
  --flexcyon-ascii-art: " \\a\\
  _______________                                       \\a\\
  ___  ____/__  /________  ____________  ______________ \\a\\
  __  /_   __  /_  _ \\\\_  |/_/  ___/_  / / /  __ \\\\_  __ \\\\ \\a\\
  _  __/   _  / /  __/_>  < / /__ _  /_/ // /_/ /  / / / \\a\\
  /_/      /_/  \\\\___//_/|_| \\\\___/ _\\\\__, / \\\\____//_/ /_/ \\a\\
                                  /____/                \\a\\a\\a ";
  --flexcyon-ascii-checkboxes-font-size: 1.2rem;
  --flexcyon-ascii-line-height: 1;
  --flexcyon-ascii-max-font-size: 14px;
  --flexcyon-ascii-max-width: 50rem;
  --flexcyon-ascii-scaling-factor: 1;
  --flexcyon-base-01: #14161c;
  --flexcyon-base-01-02-mix: color-mix(
    in oklch,
    var(--flexcyon-base-01),
    var(--flexcyon-base-02)
  );
  --flexcyon-base-02: #191d28;
  --flexcyon-base-02-03-mix: color-mix(
    in oklch,
    var(--flexcyon-base-02),
    var(--flexcyon-base-03)
  );
  --flexcyon-base-03: #24262c;
  --flexcyon-base-03-04-mix: color-mix(
    in oklch,
    var(--flexcyon-base-03),
    var(--flexcyon-base-04)
  );
  --flexcyon-base-04: #4d566b;
  --flexcyon-base-04-05-mix: color-mix(
    in oklch,
    var(--flexcyon-base-04),
    var(--flexcyon-base-05)
  );
  --flexcyon-base-05: #6f7685;
  --flexcyon-base-grey-dark: #898c93;
  --flexcyon-base-grey-light: #d3d5d3;
  --flexcyon-base-grey-mix: color-mix(
    in oklch,
    var(--flexcyon-base-grey-light),
    var(--flexcyon-base-grey-dark)
  );
  --flexcyon-base-grey-scroll: #3f495e;
  --flexcyon-base-grey-scroll-hover: #5c6782;
  --flexcyon-base-grey-tab: #71777f;
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
  --flexcyon-bg-image-size: cover;
  --flexcyon-block-label-opacity: 0.55;
  --flexcyon-blue: #5a8fcd;
  --flexcyon-brightness-ratio: 1;
  --flexcyon-callout-bg-opacity: 20%;
  --flexcyon-callout-first-codeblock-margin-top: 1rem;
  --flexcyon-callout-flashcard-animation-duration: 500ms;
  --flexcyon-callout-horiz-padding: 24px;
  --flexcyon-callout-icon-right-padding: 4px;
  --flexcyon-callout-pop-animation-duration: 200ms;
  --flexcyon-callout-radix: 16px;
  --flexcyon-callout-verti-padding: 12px;
  --flexcyon-callout-vertical-margin: 1em;
  --flexcyon-callouts-flashcard-height: 250px;
  --flexcyon-callouts-flashcard-width: 250px;
  --flexcyon-canvas-blur-intensity: 1px;
  --flexcyon-code-error: var(--flexcyon-red-salmon, #c03a47);
  --flexcyon-code-file-ext-font-w: 500;
  --flexcyon-code-file-ext-prefix: ".";
  --flexcyon-code-function: var(--flexcyon-yellow, #c29e42);
  --flexcyon-code-keyword: var(--flexcyon-purple-lilac, #a461c8);
  --flexcyon-code-operator: var(--flexcyon-orange, #cc8449);
  --flexcyon-code-variable: var(--flexcyon-base-grey-dark, #898c93);
  --flexcyon-codeblock-fmt-ext: lowercase;
  --flexcyon-comm-item-opacity: 0.89;
  --flexcyon-comm-text-padding: 3px 16px;
  --flexcyon-contrast-ratio: 1;
  --flexcyon-cursor-duration: 42.5ms;
  --flexcyon-cursor-timing-fn: ease-in;
  --flexcyon-cursor-type: auto;
  --flexcyon-cust-hr-str: "f";
  --flexcyon-cust-hr-str-font-size: 1.118em;
  --flexcyon-cust-hr-str-horiz-padding: 8px;
  --flexcyon-cyan: #3cb9c2;
  --flexcyon-dataview-horizontal-padding: 8px;
  --flexcyon-default-ol-style: decimal;
  --flexcyon-editor-bg-color: color-mix(
    in oklch,
    var(--color-base-05) 70%,
    var(--color-base-10) 30%
  );
  --flexcyon-editor-bg-color-2: var(--color-base-20, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --flexcyon-editor-bg-rotation: 0deg;
  --flexcyon-editor-bg-width: 15px;
  --flexcyon-editor-dot-size: 2.5px;
  --flexcyon-editor-margin-top: 18px;
  --flexcyon-editor-writing-indentation: 16px;
  --flexcyon-exp-dimmed-nav-size: 13.3623px;
  --flexcyon-external-link-color: #5a8fcd;
  --flexcyon-external-link-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-external-link-color),
    var(--flexcyon-base-grey-dark)
  );
  --flexcyon-fc-dimmed-items-opacity: 0.89;
  --flexcyon-h1-color: var(--color-blue, #5a8fcd);
  --flexcyon-h2-color: var(--color-purple, #a461c8);
  --flexcyon-h3-color: var(--color-cyan, #3cb9c2);
  --flexcyon-h4-color: var(--color-pink, #d458a3);
  --flexcyon-h5-color: var(--color-green, #a1c05c);
  --flexcyon-h6-color: var(--color-yellow, #c29e42);
  --flexcyon-heading-1-alignment: left;
  --flexcyon-heading-2-alignment: left;
  --flexcyon-heading-3-alignment: left;
  --flexcyon-heading-4-alignment: left;
  --flexcyon-heading-5-alignment: left;
  --flexcyon-heading-6-alignment: left;
  --flexcyon-highlight-active-line-opacity: 7.5%;
  --flexcyon-highlight-border-radius: 4px;
  --flexcyon-highlight-colour: var(--color-cyan, #3cb9c2);
  --flexcyon-highlight-horiz-padding: 2.5px;
  --flexcyon-highlight-opacity: 22.5%;
  --flexcyon-highlight-verti-padding: 1px;
  --flexcyon-input-horiz-padding: 8px;
  --flexcyon-input-verti-padding: 4px;
  --flexcyon-l-spacing: 0px;
  --flexcyon-lime-green: #a1c05c;
  --flexcyon-link-color: #a461c8;
  --flexcyon-link-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-link-color),
    var(--flexcyon-base-grey-dark)
  );
  --flexcyon-link-unresolved-color: #a461c8;
  --flexcyon-media-embed-vertical-margin: 8px;
  --flexcyon-meta-container-padding-left: 14px;
  --flexcyon-modal-bg-url: url("");
  --flexcyon-modal-dark-intensity: 1;
  --flexcyon-modal-image-blend-mode: darken;
  --flexcyon-modal-image-blur: 0px;
  --flexcyon-modal-image-brightness: 2;
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
  --flexcyon-orange: #cc8449;
  --flexcyon-os-detail-padding-l: 12px;
  --flexcyon-os-detail-padding-r: 8px;
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
  --flexcyon-pink: #d458a3;
  --flexcyon-purple-lilac: #a461c8;
  --flexcyon-quote-credit: "bladeacer";
  --flexcyon-quote-credit-prefix: "-";
  --flexcyon-quote-font-size: 24px;
  --flexcyon-quote-val: "This is a placeholder quote\\ain the Flexcyon Theme.";
  --flexcyon-red-salmon: #c03a47;
  --flexcyon-repl-active-line-str: "->";
  --flexcyon-repl-active-str-space: 0px;
  --flexcyon-saturation-ratio: 1;
  --flexcyon-screen-dimens-padding-l: 16px;
  --flexcyon-search-container-horiz-padding: 16px;
  --flexcyon-search-container-verti-padding: 8px;
  --flexcyon-settings-installed-tooltip-left-margin: 1rem;
  --flexcyon-side-toggle-button-no-ribbon: 11px 16px 7px 0px;
  --flexcyon-status-hide-hover-duration: 325ms;
  --flexcyon-status-hide-hover-function: ease-out;
  --flexcyon-status-hide-trigger-translation: 50px;
  --flexcyon-status-hide-until-hover-text: "Show status";
  --flexcyon-status-hide-until-hover-translation: 80vw;
  --flexcyon-status-live-text: "LIVE";
  --flexcyon-status-new-tab-opacity: 0.55;
  --flexcyon-status-reading-text: "READ";
  --flexcyon-status-source-text: "SOURCE";
  --flexcyon-style-settings-indent-width: 4px;
  --flexcyon-suggestion-horiz-padding: 12px;
  --flexcyon-suggestion-verti-padding: 8px;
  --flexcyon-table-reading-mode-width: 100%;
  --flexcyon-td-horiz-padding: 10px;
  --flexcyon-td-live-pad-scale: 0.2;
  --flexcyon-td-table-alignment: left;
  --flexcyon-td-verti-padding: 5px;
  --flexcyon-text-muted: #6f768599;
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
  --flexcyon-vim-command-text: "COMMAND";
  --flexcyon-vim-insert-text: "INSERT";
  --flexcyon-vim-left-positioning: 6px;
  --flexcyon-vim-normal-text: "NORMAL";
  --flexcyon-w-spacing: 0px;
  --flexcyon-yellow: #c29e42;
  --flexyon-base-grey-token: #586582;
  --font-mermaid: var(--font-monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace);
  --font-ui-large: 17.7983px;
  --font-ui-medium: 16.1803px;
  --font-ui-small: 14.5622px;
  --font-ui-smaller: 12.9442px;
  --footnote-divider-color: var(--metadata-divider-color, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --footnote-id-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --footnote-id-color-no-occurrences: var(--text-faint, #6f768599);
  --footnote-input-background-active: var(--metadata-input-background-active, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --footnote-line-height: var(--line-height-normal, 1.4);
  --footnote-radius: var(--radius-s, 2px);
  --graph-control-horiz-padding: 12px;
  --graph-control-verti-padding: 6px;
  --graph-line: var(--flexcyon-base-03, #24262c);
  --graph-node: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --graph-node-attachment: var(--color-yellow, #c29e42);
  --graph-node-focused: var(--text-accent, hsl(
    102.5 79.05%
      68.425%
  ));
  --graph-node-tag: var(--flexcyon-purple-lilac, #a461c8);
  --graph-node-unresolved: var(--flexcyon-red-salmon, #c03a47);
  --graph-text: var(--text-normal, #d3d5d3);
  --gray: var(--text-muted, color-mix(
    in oklch,
    var(--flexcyon-text-muted),
    var(--text-normal)
  ));
  --h: tan(atan2(1380px, 1px));
  --h1-color: var(--flexcyon-h1-color, #5a8fcd);
  --h1-line-height: 1.61;
  --h1-size: 1.818em;
  --h2-color: var(--flexcyon-h2-color, #a461c8);
  --h2-line-height: 1.51;
  --h2-size: 1.618em;
  --h2-weight: 675;
  --h3-color: var(--flexcyon-h3-color, #3cb9c2);
  --h3-line-height: 1.41;
  --h3-size: 1.418em;
  --h3-weight: 650;
  --h4-color: var(--flexcyon-h4-color, #d458a3);
  --h4-line-height: 1.31;
  --h4-size: 1.218em;
  --h4-weight: 625;
  --h5-color: var(--flexcyon-h5-color, #a1c05c);
  --h5-line-height: var(--line-height-normal, 1.21);
  --h5-size: 1.118em;
  --h5-weight: 600;
  --h6-color: var(--flexcyon-h6-color, #c29e42);
  --h6-line-height: var(--line-height-normal, 1.21);
  --h6-size: 1.018em;
  --h6-weight: 575;
  --heading-formatting: var(--text-faint, #6f768599);
  --highlight: var(--text-highlight-bg, color-mix(
    in oklch,
    var(--flexcyon-highlight-colour) var(--flexcyon-highlight-opacity),
    transparent
  ));
  --hr-color: var(--background-modifier-border, #393e48);
  --icon-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
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
    #6f768599,
    #d3d5d3
  ));
  --icon-stroke: var(--icon-m-stroke-width, 2px);
  --icon-xs: 12.25px;
  --inline-title-color: var(--h1-color, #5a8fcd);
  --inline-title-line-height: var(--h1-line-height, 1.61);
  --inline-title-size: var(--h1-size, 1.818em);
  --input-date-separator: var(--text-faint, #6f768599);
  --input-padding: var(--flexcyon-input-verti-padding)
    var(--flexcyon-input-horiz-padding, 4px
    8px);
  --input-placeholder-color: var(--text-faint, #6f768599);
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
  --interactive-hover: var(--background-primary, #191d28);
  --interactive-normal: var(--color-base-05, color-mix(
    in oklch,
    #14161c,
    #191d28
  ));
  --italic-color: var(--flexcyon-accent, #92a871);
  --less-letter-spacing: -3px;
  --light: var(--background-primary, var(--color-base-10, #191d28));
  --lightgray: var(--background-secondary, var(--color-base-00, #14161c));
  --line-height-normal: 1.4;
  --line-height-tight: 1.25;
  --link-color: var(--flexcyon-link-color, #a461c8);
  --link-color-hover: var(--flexcyon-link-hover, color-mix(
    in oklch shorter hue,
    #a461c8,
    #898c93
  ));
  --link-external-color: var(--flexcyon-external-link-color, #5a8fcd);
  --link-external-color-hover: var(--flexcyon-external-link-hover, color-mix(
    in oklch shorter hue,
    #5a8fcd,
    #898c93
  ));
  --link-unresolved-color: var(--flexcyon-link-unresolved-color, #a461c8);
  --link-unresolved-decoration-color: var(--flexcyon-link-unresolved-color, #a461c8);
  --link-unresolved-decoration-style: dashed;
  --list-marker-color: var(--flexcyon-purple-lilac, #a461c8);
  --list-marker-color-collapsed: var(--flexcyon-lime-green, #a1c05c);
  --list-marker-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #a461c8,
    #898c93
  ));
  --list-numbered-style: var(--flexcyon-default-ol-style, decimal);
  --menu-background: var(--background-secondary, #14161c);
  --menu-border-color: var(--background-modifier-border-hover, transparent);
  --menu-radius: var(--radius-m, 4px);
  --metadata-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --metadata-divider-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --metadata-input-background-active: var(--background-modifier-hover, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --metadata-input-text-color: var(--text-normal, #d3d5d3);
  --metadata-label-background-active: var(--background-modifier-hover, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --metadata-label-text-color: var(--flexcyon-purple-lilac, #a461c8);
  --metadata-label-text-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #a461c8,
    #898c93
  ));
  --metadata-property-background-active: var(--background-modifier-hover, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14.5622px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14.5622px);
  --modal-background: var(--background-primary, #191d28);
  --modal-border-color: var(--flexcyon-base-02, #191d28);
  --modal-radius: var(--radius-l, 6px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #6f768599);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #6f768599);
  --nav-heading-color: var(--text-normal, #d3d5d3);
  --nav-heading-color-collapsed: var(--text-faint, #6f768599);
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --nav-heading-color-hover: var(--text-normal, #d3d5d3);
  --nav-item-background-active: var(--background-modifier-hover, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --nav-item-background-hover: var(--background-modifier-hover, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --nav-item-background-selected: var(--flexcyon-base-03, #24262c);
  --nav-item-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
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
  --nav-item-color-hover: var(--text-normal, #d3d5d3);
  --nav-item-color-selected: var(--flexcyon-orange, #cc8449);
  --nav-item-radius: var(--radius-s, 2px);
  --nav-item-size: var(--font-ui-small, 14.5622px);
  --nav-tag-color: var(--text-faint, #6f768599);
  --nav-tag-color-active: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --nav-tag-color-hover: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --nav-tag-radius: var(--radius-s, 2px);
  --oz-fta-all-panes-active-text-color: #d3d5d3;
  --oz-fta-file-font-size: calc(var(--font-ui-medium) - 0.1rem);
  --oz-fta-folder-font-size: calc(var(--font-ui-medium) - 0.1rem);
  --oz-fta-folder-panes-file-name-color: #d3d5d3;
  --pdf-background: var(--background-primary, #191d28);
  --pdf-page-background: var(--background-primary, #191d28);
  --pdf-sidebar-background: var(--background-primary, #191d28);
  --pill-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --pill-border-color-hover: var(--background-modifier-border-hover, transparent);
  --pill-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --pill-color-hover: var(--text-normal, #d3d5d3);
  --pill-color-remove: var(--text-faint, #6f768599);
  --pill-color-remove-hover: var(--text-accent, hsl(
    102.5 79.05%
      68.425%
  ));
  --prompt-background: var(--background-primary, #191d28);
  --prompt-border-color: var(--flexcyon-base-02-03-mix, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --r-background-color: var(--color-base-05, color-mix(
    in oklch,
    #14161c,
    #191d28
  ));
  --r-heading-color: var(--text-normal, #d3d5d3);
  --r-heading-font: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --r-heading-margin: 16px 0px;
  --r-heading-text-transform: capitalize;
  --r-heading1-size: var(--h1-size, 1.818em);
  --r-heading2-size: var(--h2-size, 1.618em);
  --r-heading3-size: var(--h3-size, 1.418em);
  --r-heading4-size: var(--h4-size, 1.218em);
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
  --raised-background: var(--blur-background, color-mix(in srgb, color-mix(
    in oklch,
    #14161c,
    #191d28
  ) 65%, transparent) linear-gradient(color-mix(
    in oklch,
    #14161c,
    #191d28
  ), color-mix(in srgb, color-mix(
    in oklch,
    #14161c,
    #191d28
  ) 65%, transparent)));
  --ribbon-background: var(--background-secondary, #14161c);
  --ribbon-background-collapsed: var(--ribbon-background, #14161c);
  --ribbon-width: 48px;
  --scrollbar-radius: var(--radius-l, 6px);
  --search-clear-button-color: var(--flexcyon-red-salmon, #c03a47);
  --search-icon-color: var(--flexcyon-accent, #92a871);
  --search-result-background: var(--background-primary, #191d28);
  --secondary: var(--text-accent, var(--flexcyon-accent, hsl(
    102.5 79.05%
      68.425%
  )));
  --setting-group-heading-color: var(--text-normal, #d3d5d3);
  --setting-group-heading-size: var(--font-ui-medium, 16.1803px);
  --setting-items-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --setting-items-padding: var(--size-4-5, 2px 0px);
  --settings-background: var(--color-base-05, color-mix(
    in oklch,
    #14161c,
    #191d28
  ));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --shiki-code-background: var(--code-background, #14161c);
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-comment: var(--text-faint, #6f768599);
  --shiki-code-function: var(--color-green, #a1c05c);
  --shiki-code-important: var(--color-orange, #cc8449);
  --shiki-code-keyword: var(--color-pink, #d458a3);
  --shiki-code-normal: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --shiki-code-property: var(--color-cyan, #3cb9c2);
  --shiki-code-punctuation: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --shiki-code-string: var(--color-yellow, #c29e42);
  --shiki-code-value: var(--color-purple, #a461c8);
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --shiki-gutter-text-color: var(--text-faint, #6f768599);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --shiki-terminal-dots-color: var(--text-faint, #6f768599);
  --shiki-tooltip-background: var(--background-modifier-message, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --slider-thumb-border-color: var(--background-modifier-border-hover, transparent);
  --slider-track-background: var(--background-modifier-border, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --status-bar-background: var(--background-secondary, #14161c);
  --status-bar-border-color: var(--divider-color, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --status-bar-font-size: var(--font-ui-smaller, 13.7533px);
  --status-bar-position: absolute;
  --status-bar-radius: var(--radius-m, 4px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --suggestion-background: var(--background-primary, #191d28);
  --sync-avatar-color-1: var(--color-red, #c03a47);
  --sync-avatar-color-2: var(--color-orange, #cc8449);
  --sync-avatar-color-3: var(--color-yellow, #c29e42);
  --sync-avatar-color-4: var(--color-green, #a1c05c);
  --sync-avatar-color-5: var(--color-cyan, #3cb9c2);
  --sync-avatar-color-6: var(--color-blue, #5a8fcd);
  --sync-avatar-color-7: var(--color-purple, #a461c8);
  --sync-avatar-color-8: var(--color-pink, #d458a3);
  --tab-background-active: var(--background-primary, #191d28);
  --tab-container-background: var(--background-secondary, #14161c);
  --tab-curve: 0px;
  --tab-divider-color: var(--titlebar-background, #14161c);
  --tab-font-size: var(--font-ui-small, 14.5622px);
  --tab-outline-color: var(--divider-color, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --tab-outline-width: 0px;
  --tab-radius: var(--radius-s, 0px);
  --tab-radius-active: 0px;
  --tab-stacked-font-size: var(--font-ui-small, 14.5622px);
  --tab-switcher-background: var(--background-secondary, #14161c);
  --tab-text-color: var(--flexcyon-base-05, #6f7685);
  --tab-text-color-active: var(--text-accent, hsl(
    102.5 79.05%
      68.425%
  ));
  --tab-text-color-focused: var(--flexcyon-base-05, #6f7685);
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
    #191d28,
    #24262c
  ));
  --table-background: var(--background-primary, #191d28);
  --table-border-color: var(--background-modifier-border, #6f768566);
  --table-column-alt-background: var(--table-background, #191d28);
  --table-drag-handle-background-active: var(--table-selection-border-color, color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ));
  --table-drag-handle-color: var(--text-faint, #6f768599);
  --table-drag-handle-color-active: var(--text-on-accent, #24262c);
  --table-header-background: var(--color-base-20, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --table-header-background-hover: var(--table-background, #191d28);
  --table-header-border-color: var(--table-border-color, #6f768566);
  --table-header-color: var(--text-normal, #d3d5d3);
  --table-header-size: var(--font-ui-large, 17.7983px);
  --table-line-height: var(--line-height-tight, 1.25);
  --table-row-alt-background-hover: var(--table-background, #191d28);
  --table-row-background-hover: var(--table-background, #191d28);
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
  --tag-color: var(--flexcyon-cyan, #3cb9c2);
  --tag-color-hover: var(--flexcyon-palette-cyan-hover, color-mix(
    in oklch shorter hue,
    #3cb9c2,
    #898c93
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
  --text-error: var(--flexcyon-red-salmon, #c03a47);
  --text-faint: var(--flexcyon-text-muted, #6f768599);
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
  --text-normal: var(--color-base-100, #d3d5d3);
  --text-on-accent: var(--flexcyon-base-03, #24262c);
  --text-selection: color-mix(
    in oklch shorter hue,
    var(--flexcyon-base-04) 20%,
    transparent
  );
  --text-success: var(--flexcyon-lime-green, #a1c05c);
  --text-warning: var(--flexcyon-red-salmon, #c03a47);
  --textHighlight: var(--text-highlight-bg, color-mix(
    in oklch,
    var(--flexcyon-highlight-colour) var(--flexcyon-highlight-opacity),
    transparent
  ));
  --titlebar-background: var(--background-secondary, #14161c);
  --titlebar-background-focused: var(--background-secondary, #14161c);
  --titlebar-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #191d28,
    #24262c
  ));
  --titlebar-text-color: var(--text-faint, #6f768599);
  --titlebar-text-color-focused: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #d3d5d3
  ));
  --toggle-thumb-color: var(--text-on-accent, #24262c);
  --upsize: 103%;
  --vault-name-color: var(--interactive-accent, color-mix(
    in oklch,
    hsl(
    102.5 79.05%
      68.425%
  ) 80%,
    transparent 20%
  ));
  --vault-profile-color: var(--text-normal, #d3d5d3);
  --vault-profile-color-hover: var(--vault-profile-color, #d3d5d3);
  --vault-profile-font-size: var(--font-ui-small, 14.5622px);
  --w: tan(atan2(2538px, 1px));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #14161c);
  --icon-size: var(--icon-xs, 18px);
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
  --bases-table-header-background: var(--background-secondary, #14161c);
  background-color: var(--tab-container-background, rgb(20, 22, 28));
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-left-width: 0px;
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

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
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
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgba(111, 118, 133, 0.6));
}

html[saved-theme="dark"] body blockquote {
  color: var(--blockquote-color, rgb(211, 213, 211));
  line-height: 22.4px;
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: var(--color-base-05, oklch(0.216334 0.0172956 269.118));
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-bottom-width: 0px;
  border-left-color: rgba(111, 118, 133, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(111, 118, 133, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(111, 118, 133, 0.4);
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgb(25, 29, 40));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-bottom-width: 0px;
  border-left-color: rgba(111, 118, 133, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(111, 118, 133, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(111, 118, 133, 0.4);
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: rgba(111, 118, 133, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(111, 118, 133, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(111, 118, 133, 0.4);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(211, 213, 211));
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  text-align: var(--flexcyon-td-table-alignment, left);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-bottom-width: 0px;
  border-left-color: rgba(111, 118, 133, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(111, 118, 133, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(111, 118, 133, 0.4);
  border-top-width: 0px;
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, oklch(0.25047 0.0168382 269.118));
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-bottom-width: 0px;
  border-left-color: rgba(111, 118, 133, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(111, 118, 133, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(111, 118, 133, 0.4);
  border-top-width: 0px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(20, 22, 28));
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-left-width: 0px;
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-right-width: 0px;
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(60, 185, 194));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(20, 22, 28));
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-left-width: 0px;
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-right-width: 0px;
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #14161c);
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(36, 38, 44));
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-left-width: 0px;
  border-radius: 4px;
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--text-muted, oklch(0.756226 0.0113969 265.685 / 0.8));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-width: 0px;
  border-left-color: oklch(0.86535 0.184813 137.419 / 0.8);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
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
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 60, 185, 194);
  background: rgba(60, 185, 194, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(60, 185, 194, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(60, 185, 194, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(60, 185, 194, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(60, 185, 194, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 192, 58, 71);
  background: rgba(192, 58, 71, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(192, 58, 71, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(192, 58, 71, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(192, 58, 71, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(192, 58, 71, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 192, 58, 71);
  background: rgba(192, 58, 71, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(192, 58, 71, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(192, 58, 71, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(192, 58, 71, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(192, 58, 71, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 164, 97, 200);
  background: rgba(164, 97, 200, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(164, 97, 200, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(164, 97, 200, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(164, 97, 200, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(164, 97, 200, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 192, 58, 71);
  background: rgba(192, 58, 71, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(192, 58, 71, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(192, 58, 71, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(192, 58, 71, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(192, 58, 71, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 90, 143, 205);
  background: rgba(90, 143, 205, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(90, 143, 205, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(90, 143, 205, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(90, 143, 205, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(90, 143, 205, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 90, 143, 205);
  background: rgba(90, 143, 205, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(90, 143, 205, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(90, 143, 205, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(90, 143, 205, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(90, 143, 205, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 204, 132, 73);
  background: rgba(204, 132, 73, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(204, 132, 73, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(204, 132, 73, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(204, 132, 73, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(204, 132, 73, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 161, 192, 92);
  background: rgba(161, 192, 92, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(161, 192, 92, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(161, 192, 92, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(161, 192, 92, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(161, 192, 92, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 60, 185, 194);
  background: rgba(60, 185, 194, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(60, 185, 194, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(60, 185, 194, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(60, 185, 194, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(60, 185, 194, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 90, 143, 205);
  background: rgba(90, 143, 205, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(90, 143, 205, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(90, 143, 205, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(90, 143, 205, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(90, 143, 205, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 204, 132, 73);
  background: rgba(204, 132, 73, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(204, 132, 73, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(204, 132, 73, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(204, 132, 73, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(204, 132, 73, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 90, 143, 205;
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(90, 143, 205));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(211, 213, 211);
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
  border-bottom-width: 0px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-left-width: 0px;
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-right-width: 0px;
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--text-normal, rgb(211, 213, 211));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(25, 29, 40));
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-left-width: 0px;
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-right-width: 0px;
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-left-width: 0px;
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-right-width: 0px;
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 22, 28);
  border-bottom-width: 0px;
  border-left-color: oklch(0.86535 0.184813 137.419 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.86535 0.184813 137.419 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.86535 0.184813 137.419 / 0.8);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, oklch(0.25047 0.0168382 269.118));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
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
  --icon-size: var(--icon-xs, 12.25px);
  --pill-background: var(--tag-background, color-mix(in oklch, #3cb9c2 25%, transparent));
  --pill-background-hover: var(--tag-background-hover, color-mix(
    in oklch,
    color-mix(
    in oklch shorter hue,
    #3cb9c2,
    #898c93
  ) 25%,
    transparent
  ));
  --pill-border-color: var(--tag-border-color, hsla(105.5, 77.5%, 59.5%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(105.5, 77.5%, 59.5%, 0.15));
  --pill-color: var(--tag-color, #3cb9c2);
  --pill-color-hover: var(--tag-color-hover, color-mix(
    in oklch shorter hue,
    #3cb9c2,
    #898c93
  ));
  --pill-color-remove: var(--tag-color, #3cb9c2);
  --pill-color-remove-hover: var(--tag-color-hover, color-mix(
    in oklch shorter hue,
    #3cb9c2,
    #898c93
  ));
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  background-color: var(--pill-background, oklch(0.722355 0.107178 202.06 / 0.25));
  border-bottom-color: rgba(110, 232, 72, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(110, 232, 72, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(110, 232, 72, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(110, 232, 72, 0.15);
  border-top-width: 0px;
  color: var(--pill-color, rgb(60, 185, 194));
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(60, 185, 194);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
  color: var(--h1-color, rgb(90, 143, 205));
  font-size: var(--h1-size, 29.088px);
  letter-spacing: var(--h1-letter-spacing, -0.43632px);
  line-height: var(--h1-line-height, 46.8317px);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(90, 143, 205));
  font-size: var(--inline-title-size, 29.088px);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 675);
  border-bottom-color: rgb(164, 97, 200);
  border-bottom-width: 0px;
  border-left-color: rgb(164, 97, 200);
  border-left-width: 0px;
  border-right-color: rgb(164, 97, 200);
  border-right-width: 0px;
  border-top-color: rgb(164, 97, 200);
  border-top-width: 0px;
  color: var(--h2-color, rgb(164, 97, 200));
  font-size: var(--h2-size, 25.888px);
  font-weight: var(--font-weight, 675);
  letter-spacing: var(--h2-letter-spacing, -0.284768px);
  line-height: var(--h2-line-height, 39.0909px);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(90, 143, 205);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 143, 205);
  border-left-width: 0px;
  border-right-color: rgb(90, 143, 205);
  border-right-width: 0px;
  border-top-color: rgb(90, 143, 205);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(90, 143, 205));
  font-size: var(--inline-title-size, 29.088px);
  letter-spacing: -0.43632px;
  line-height: var(--inline-title-line-height, 46.8317px);
  margin-bottom: 14.544px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 650);
  border-bottom-color: rgb(60, 185, 194);
  border-bottom-width: 0px;
  border-left-color: rgb(60, 185, 194);
  border-left-width: 0px;
  border-right-color: rgb(60, 185, 194);
  border-right-width: 0px;
  border-top-color: rgb(60, 185, 194);
  border-top-width: 0px;
  color: var(--h3-color, rgb(60, 185, 194));
  font-size: var(--h3-size, 22.688px);
  font-weight: var(--font-weight, 650);
  letter-spacing: var(--h3-letter-spacing, -0.181504px);
  line-height: var(--h3-line-height, 31.9901px);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 625);
  border-bottom-color: rgb(212, 88, 163);
  border-bottom-width: 0px;
  border-left-color: rgb(212, 88, 163);
  border-left-width: 0px;
  border-right-color: rgb(212, 88, 163);
  border-right-width: 0px;
  border-top-color: rgb(212, 88, 163);
  border-top-width: 0px;
  color: var(--h4-color, rgb(212, 88, 163));
  font-size: var(--h4-size, 19.488px);
  font-weight: var(--font-weight, 625);
  letter-spacing: var(--h4-letter-spacing, -0.09744px);
  line-height: var(--h4-line-height, 25.5293px);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 600);
  border-bottom-color: rgb(161, 192, 92);
  border-bottom-width: 0px;
  border-left-color: rgb(161, 192, 92);
  border-left-width: 0px;
  border-right-color: rgb(161, 192, 92);
  border-right-width: 0px;
  border-top-color: rgb(161, 192, 92);
  border-top-width: 0px;
  color: var(--h5-color, rgb(161, 192, 92));
  font-size: var(--h5-size, 17.888px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.035776px);
  line-height: var(--h5-line-height, 21.6445px);
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 575);
  border-bottom-color: rgb(194, 158, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(194, 158, 66);
  border-left-width: 0px;
  border-right-color: rgb(194, 158, 66);
  border-right-width: 0px;
  border-top-color: rgb(194, 158, 66);
  border-top-width: 0px;
  color: var(--h6-color, rgb(194, 158, 66));
  font-size: var(--h6-size, 16.288px);
  font-weight: var(--font-weight, 575);
  line-height: var(--h6-line-height, 19.7085px);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(0.25047 0.0168382 269.118);
  border-bottom-width: 0px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-left-width: 0px;
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 90, 143, 205);
  border-bottom-color: rgba(90, 143, 205, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(90, 143, 205, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(90, 143, 205, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(90, 143, 205, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 24px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, oklch(0.756226 0.0113969 265.685 / 0.8));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, oklch(0.756226 0.0113969 265.685 / 0.8));
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
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(211, 213, 211);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--icon-color, oklch(0.756226 0.0113969 265.685 / 0.8));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-bottom-width: 0px;
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-left-radius: 4px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, oklch(0.756226 0.0113969 265.685 / 0.8));
  font-size: var(--status-bar-font-size, 16.1803px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: var(--size-4-2, 25.38px);
  padding-top: 0px;
}

html[saved-theme="dark"] body footer ul li a {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
  font-size: 16.1803px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, oklch(0.756226 0.0113969 265.685 / 0.8));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-left-radius: 16px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: oklch(0.25047 0.0168382 269.118);
  border-left-width: 0px;
  border-right-color: oklch(0.25047 0.0168382 269.118);
  border-right-width: 0px;
  border-top-color: oklch(0.25047 0.0168382 269.118);
  border-top-width: 0px;
  color: var(--text-muted, oklch(0.756226 0.0113969 265.685 / 0.8));
  padding-bottom: 0px;
  padding-left: 14px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-bottom-width: 0px;
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-width: 0px;
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-bottom-width: 0px;
  border-left-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.756226 0.0113969 265.685 / 0.8);
  border-top-width: 0px;
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body .metadata-property-key {
  color: oklch(0.756226 0.0113969 265.685 / 0.8);
}

html[saved-theme="dark"] body .metadata-property-value {
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
  --icon-size: var(--icon-xs, 12.25px);
  --pill-background: var(--tag-background, color-mix(in oklch, #3cb9c2 25%, transparent));
  --pill-background-hover: var(--tag-background-hover, color-mix(
    in oklch,
    color-mix(
    in oklch shorter hue,
    #3cb9c2,
    #898c93
  ) 25%,
    transparent
  ));
  --pill-border-color: var(--tag-border-color, hsla(105.5, 77.5%, 59.5%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(105.5, 77.5%, 59.5%, 0.15));
  --pill-color: var(--tag-color, #3cb9c2);
  --pill-color-hover: var(--tag-color-hover, color-mix(
    in oklch shorter hue,
    #3cb9c2,
    #898c93
  ));
  --pill-color-remove: var(--tag-color, #3cb9c2);
  --pill-color-remove-hover: var(--tag-color-hover, color-mix(
    in oklch shorter hue,
    #3cb9c2,
    #898c93
  ));
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
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
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  background: oklch(0.216334 0.0172956 269.118) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--color-base-05, oklch(0.216334 0.0172956 269.118));
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-right-radius: 16px;
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-right-radius: 16px;
  border-top-width: 0px;
  color: var(--text-normal, rgb(211, 213, 211));
  font-size: 14.5622px;
  line-height: 18.2027px;
  margin-bottom: 0px;
  margin-left: -1.5px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body abbr {
  color: rgb(211, 213, 211);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(164, 97, 200);
  border-bottom-width: 0px;
  border-left-color: rgb(164, 97, 200);
  border-left-width: 0px;
  border-right-color: rgb(164, 97, 200);
  border-right-width: 0px;
  border-top-color: rgb(164, 97, 200);
  border-top-width: 0px;
  color: var(--text-normal, rgb(164, 97, 200));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(20, 22, 28));
  border-bottom-color: rgb(60, 185, 194);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(60, 185, 194);
  border-left-width: 0px;
  border-right-color: rgb(60, 185, 194);
  border-right-width: 0px;
  border-top-color: rgb(60, 185, 194);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(60, 185, 194));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(211, 213, 211);
  border-bottom-width: 0px;
  border-left-color: rgb(211, 213, 211);
  border-left-width: 0px;
  border-right-color: rgb(211, 213, 211);
  border-right-width: 0px;
  border-top-color: rgb(211, 213, 211);
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: rgba(110, 232, 72, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(110, 232, 72, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(110, 232, 72, 0.15);
  border-top-width: 0px;
  color: var(--tag-color, rgb(60, 185, 194));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: var(--flexcyon-accent-h, 225);
  --accent-l: var(--flexcyon-accent-l, 53%);
  --accent-s: var(--flexcyon-accent-s, 41%);
  --background-modifier-active-hover: var(--color-base-25, #dddcd6);
  --background-modifier-border: var(--color-base-20, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --background-modifier-border-focus: var(--color-base-30, color-mix(
    in oklch,
    #dddcd6,
    #d3d3ce
  ));
  --background-modifier-border-hover: var(--color-base-35, transparent);
  --background-modifier-error: rgb(
    var(--color-red-rgb),
    calc(var(--dimmed) + 0.3)
  );
  --background-modifier-error-hover: var(--color-red, #eb5325);
  --background-modifier-error-rgb: var(--color-red-rgb, 235, 83, 87);
  --background-modifier-form-field: var(--color-base-00, #faf7ef);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #faf7ef);
  --background-modifier-hover: var(--color-base-10, #edebe5);
  --background-modifier-message: var(--color-base-20, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --background-modifier-success: var(--color-green, #689523);
  --background-modifier-success-rgb: var(--color-green-rgb, 104, 149, 35);
  --background-primary: var(--color-base-00, #faf7ef);
  --background-primary-alt: var(--color-base-10, #edebe5);
  --background-secondary: var(--color-base-05, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --background-secondary-alt: var(--color-base-10, #edebe5);
  --bases-border-r: 16px;
  --bases-cards-background: var(--background-primary, #faf7ef);
  --bases-cards-cover-background: var(--background-secondary, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --bases-cards-group-padding: 16px;
  --bases-cards-radius: var(--radius-m, 4px);
  --bases-embed-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-embed-padding: 4px;
  --bases-group-heading-property-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --bases-group-heading-property-size: var(--font-ui-smaller, 12.9442px);
  --bases-no-img-str: "No image path could be found for this file";
  --bases-table-border-color: var(--table-border-color, #6f768566);
  --bases-table-cell-background-active: var(--background-primary, #faf7ef);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #edebe5);
  --bases-table-cell-background-selected: var(--table-selection, hsla(225, 41%, 53%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-group-background: var(--background-primary-alt, #edebe5);
  --bases-table-header-background: var(--background-primary, #faf7ef);
  --bases-table-header-background-hover: var(--background-modifier-hover, #edebe5);
  --bases-table-header-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --bases-table-row-background-hover: var(--table-row-background-hover, #faf7ef);
  --bases-table-summary-background: var(--background-primary, #faf7ef);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #edebe5);
  --blockquote-border-color: var(--interactive-accent, color-mix(
    in oklch,
    #5770b9 80%,
    transparent 20%
  ));
  --bold-color: var(--flexcyon-red-salmon, #eb5325);
  --button-radius: var(--input-radius, 0px);
  --callout-bug: var(--color-red-rgb, 235, 83, 87);
  --callout-default: var(--color-blue-rgb, 92, 159, 228);
  --callout-error: var(--color-red-rgb, 235, 83, 87);
  --callout-example: var(--color-purple-rgb, 111, 73, 174);
  --callout-fail: var(--color-red-rgb, 235, 83, 87);
  --callout-important: var(--color-cyan-rgb, 59, 155, 161);
  --callout-info: var(--color-blue-rgb, 92, 159, 228);
  --callout-padding: var(--flexcyon-callout-verti-padding)
    var(--flexcyon-callout-horiz-padding, 12px
    24px);
  --callout-question: var(--color-orange-rgb, 237, 129, 38);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 2px);
  --callout-success: var(--color-green-rgb, 104, 149, 35);
  --callout-summary: var(--color-cyan-rgb, 59, 155, 161);
  --callout-tip: var(--color-cyan-rgb, 59, 155, 161);
  --callout-todo: var(--color-blue-rgb, 92, 159, 228);
  --callout-warning: var(--color-orange-rgb, 237, 129, 38);
  --canvas-background: var(--background-primary, #faf7ef);
  --canvas-card-label-color: var(--text-faint, #6f768599);
  --canvas-color-1: var(--color-red-rgb, 235, 83, 87);
  --canvas-color-2: var(--color-orange-rgb, 237, 129, 38);
  --canvas-color-3: var(--color-yellow-rgb, 232, 198, 42);
  --canvas-color-4: var(--color-green-rgb, 104, 149, 35);
  --canvas-color-5: var(--color-cyan-rgb, 59, 155, 161);
  --canvas-color-6: var(--color-purple-rgb, 111, 73, 174);
  --canvas-controls-radius: var(--radius-s, 2px);
  --canvas-dot-pattern: var(--color-base-30, color-mix(
    in oklch,
    #dddcd6,
    #d3d3ce
  ));
  --caret-color: var(--text-normal, #080808);
  --checkbox-border-color: var(--flexcyon-blue, #5c9fe4);
  --checkbox-border-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #6f49ae,
    #797876
  ));
  --checkbox-color: var(--flexcyon-purple-lilac, #6f49ae);
  --checkbox-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #6f49ae,
    #797876
  ));
  --checkbox-marker-color: var(--background-primary, #faf7ef);
  --checkbox-radius: var(--radius-s, 2px);
  --checklist-done-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
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
    #faf7ef 70%,
    #edebe5 30%
  ));
  --code-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --code-bracket-background: var(--background-modifier-hover, #edebe5);
  --code-comment: var(--text-faint, #6f768599);
  --code-function: var(--flexcyon-code-function, #e8c62a);
  --code-important: var(--flexcyon-code-error, #eb5325);
  --code-keyword: var(--flexcyon-code-keyword, #6f49ae);
  --code-normal: var(--flexcyon-cyan, #3b9ba1);
  --code-operator: var(--flexcyon-code-operator, #ed8126);
  --code-property: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --code-punctuation: var(--flexcyon-purple-lilac, #6f49ae);
  --code-radius: var(--radius-s, 2px);
  --code-string: var(--flexcyon-lime-green, #689523);
  --code-tag: var(--flexcyon-base-grey-dark, #797876);
  --code-value: var(--color-purple, #6f49ae);
  --collapse-icon-color: var(--text-faint, #6f768599);
  --collapse-icon-color-collapsed: var(--text-accent, #5770b9);
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
  --color-base-00: var(--flexcyon-base-01, #faf7ef);
  --color-base-05: var(--flexcyon-base-01-02-mix, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --color-base-10: var(--flexcyon-base-02, #edebe5);
  --color-base-100: var(--flexcyon-base-grey-light, #080808);
  --color-base-20: var(--flexcyon-base-02-03-mix, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --color-base-25: var(--flexcyon-base-03, #dddcd6);
  --color-base-30: var(--flexcyon-base-03-04-mix, color-mix(
    in oklch,
    #dddcd6,
    #d3d3ce
  ));
  --color-base-35: var(--flexcyon-base-04, #d3d3ce);
  --color-base-40: var(--flexcyon-base-04-05-mix, color-mix(
    in oklch,
    #d3d3ce,
    #b4b3af
  ));
  --color-base-50: var(--flexcyon-base-05, #b4b3af);
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
  --color-cyan: var(--flexcyon-cyan, #3b9ba1);
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
  --color-cyan-rgb: 59, 155, 161;
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
  --color-green-rgb: 104, 149, 35;
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
  --color-orange: var(--flexcyon-orange, #ed8126);
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
  --color-orange-rgb: 237, 129, 38;
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
  --color-pink: var(--flexcyon-pink, #e389ca);
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
  --color-pink-rgb: 227, 137, 202;
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
  --color-purple: var(--flexcyon-purple-lilac, #6f49ae);
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
  --color-purple-rgb: 111, 73, 174;
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
  --color-red: var(--flexcyon-red-salmon, #eb5325);
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
  --color-red-rgb: 235, 83, 87;
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
  --color-yellow: var(--flexcyon-yellow, #e8c62a);
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
  --color-yellow-rgb: 232, 198, 42;
  --dark: var(--text-normal, var(--color-base-100, #080808));
  --darkgray: var(--text-normal, var(--color-base-100, #080808));
  --dimmed: 0.55;
  --divider-color: var(--background-modifier-border, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --divider-color-hover: var(--interactive-accent, color-mix(
    in oklch,
    #5770b9 80%,
    transparent 20%
  ));
  --drag-ghost-background: var(--flexcyon-base-03, #dddcd6);
  --drag-ghost-text-color: var(--interactive-accent, color-mix(
    in oklch,
    #5770b9 80%,
    transparent 20%
  ));
  --dropdown-background: var(--interactive-normal, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --dropdown-background-hover: var(--interactive-hover, #faf7ef);
  --expand: 110%;
  --file-header-background: var(--background-primary, #faf7ef);
  --file-header-background-focused: var(--background-primary, #faf7ef);
  --file-header-font-size: var(--font-ui-small, 14.5622px);
  --file-line-width: 50rem;
  --flair-background: var(--interactive-normal, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --flair-color: var(--text-normal, #080808);
  --flexcyon-accent: #5770b9;
  --flexcyon-accent-h: 225;
  --flexcyon-accent-l: 53%;
  --flexcyon-accent-s: 41%;
  --flexcyon-active-indicator: ">>";
  --flexcyon-alt-link-opacity: 55%;
  --flexcyon-anim-duration: 300ms;
  --flexcyon-anim-easing: ease-in-out;
  --flexcyon-anim-rotate-amount: 50deg;
  --flexcyon-anim-slide-amount: 56.6311px;
  --flexcyon-anim-start-opacity: 0.55;
  --flexcyon-anim-start-scale-amt: 0.33;
  --flexcyon-ascii-alignment: left;
  --flexcyon-ascii-art: " \\a\\
  _______________                                       \\a\\
  ___  ____/__  /________  ____________  ______________ \\a\\
  __  /_   __  /_  _ \\\\_  |/_/  ___/_  / / /  __ \\\\_  __ \\\\ \\a\\
  _  __/   _  / /  __/_>  < / /__ _  /_/ // /_/ /  / / / \\a\\
  /_/      /_/  \\\\___//_/|_| \\\\___/ _\\\\__, / \\\\____//_/ /_/ \\a\\
                                  /____/                \\a\\a\\a ";
  --flexcyon-ascii-checkboxes-font-size: 1.2rem;
  --flexcyon-ascii-line-height: 1;
  --flexcyon-ascii-max-font-size: 14px;
  --flexcyon-ascii-max-width: 50rem;
  --flexcyon-ascii-scaling-factor: 1;
  --flexcyon-base-01: #faf7ef;
  --flexcyon-base-01-02-mix: color-mix(
    in oklch,
    var(--flexcyon-base-01) 70%,
    var(--flexcyon-base-02) 30%
  );
  --flexcyon-base-02: #edebe5;
  --flexcyon-base-02-03-mix: color-mix(
    in oklch,
    var(--flexcyon-base-02),
    var(--flexcyon-base-03)
  );
  --flexcyon-base-03: #dddcd6;
  --flexcyon-base-03-04-mix: color-mix(
    in oklch,
    var(--flexcyon-base-03),
    var(--flexcyon-base-04)
  );
  --flexcyon-base-04: #d3d3ce;
  --flexcyon-base-04-05-mix: color-mix(
    in oklch,
    var(--flexcyon-base-04),
    var(--flexcyon-base-05)
  );
  --flexcyon-base-05: #b4b3af;
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
  --flexcyon-bg-image-size: cover;
  --flexcyon-block-label-opacity: 0.55;
  --flexcyon-blue: #5c9fe4;
  --flexcyon-brightness-ratio: 1;
  --flexcyon-callout-bg-opacity: 20%;
  --flexcyon-callout-first-codeblock-margin-top: 1rem;
  --flexcyon-callout-flashcard-animation-duration: 500ms;
  --flexcyon-callout-horiz-padding: 24px;
  --flexcyon-callout-icon-right-padding: 4px;
  --flexcyon-callout-pop-animation-duration: 200ms;
  --flexcyon-callout-radix: 16px;
  --flexcyon-callout-verti-padding: 12px;
  --flexcyon-callout-vertical-margin: 1em;
  --flexcyon-callouts-flashcard-height: 250px;
  --flexcyon-callouts-flashcard-width: 250px;
  --flexcyon-canvas-blur-intensity: 1px;
  --flexcyon-code-error: var(--flexcyon-red-salmon, #eb5325);
  --flexcyon-code-file-ext-font-w: 500;
  --flexcyon-code-file-ext-prefix: ".";
  --flexcyon-code-function: var(--flexcyon-yellow, #e8c62a);
  --flexcyon-code-keyword: var(--flexcyon-purple-lilac, #6f49ae);
  --flexcyon-code-operator: var(--flexcyon-orange, #ed8126);
  --flexcyon-code-variable: var(--flexcyon-base-grey-dark, #797876);
  --flexcyon-codeblock-fmt-ext: lowercase;
  --flexcyon-comm-item-opacity: 0.89;
  --flexcyon-comm-text-padding: 3px 16px;
  --flexcyon-contrast-ratio: 1;
  --flexcyon-cursor-duration: 42.5ms;
  --flexcyon-cursor-timing-fn: ease-in;
  --flexcyon-cursor-type: auto;
  --flexcyon-cust-hr-str: "f";
  --flexcyon-cust-hr-str-font-size: 1.118em;
  --flexcyon-cust-hr-str-horiz-padding: 8px;
  --flexcyon-cyan: #3b9ba1;
  --flexcyon-dataview-horizontal-padding: 8px;
  --flexcyon-default-ol-style: decimal;
  --flexcyon-editor-bg-color: color-mix(
    in oklch,
    var(--color-base-05),
    var(--color-base-10)
  );
  --flexcyon-editor-bg-color-2: var(--color-base-20, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --flexcyon-editor-bg-rotation: 0deg;
  --flexcyon-editor-bg-width: 15px;
  --flexcyon-editor-dot-size: 2.5px;
  --flexcyon-editor-margin-top: 18px;
  --flexcyon-editor-writing-indentation: 16px;
  --flexcyon-exp-dimmed-nav-size: 13.3623px;
  --flexcyon-external-link-color: #5c9fe4;
  --flexcyon-external-link-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-external-link-color),
    var(--flexcyon-base-grey-dark)
  );
  --flexcyon-fc-dimmed-items-opacity: 0.89;
  --flexcyon-h1-color: var(--color-blue, #5c9fe4);
  --flexcyon-h2-color: var(--color-purple, #6f49ae);
  --flexcyon-h3-color: var(--color-cyan, #3b9ba1);
  --flexcyon-h4-color: var(--color-pink, #e389ca);
  --flexcyon-h5-color: var(--color-green, #689523);
  --flexcyon-h6-color: var(--color-yellow, #e8c62a);
  --flexcyon-heading-1-alignment: left;
  --flexcyon-heading-2-alignment: left;
  --flexcyon-heading-3-alignment: left;
  --flexcyon-heading-4-alignment: left;
  --flexcyon-heading-5-alignment: left;
  --flexcyon-heading-6-alignment: left;
  --flexcyon-highlight-active-line-opacity: 7.5%;
  --flexcyon-highlight-border-radius: 4px;
  --flexcyon-highlight-colour: var(--color-cyan, #3b9ba1);
  --flexcyon-highlight-horiz-padding: 2.5px;
  --flexcyon-highlight-opacity: 22.5%;
  --flexcyon-highlight-verti-padding: 1px;
  --flexcyon-input-horiz-padding: 8px;
  --flexcyon-input-verti-padding: 4px;
  --flexcyon-l-spacing: 0px;
  --flexcyon-lime-green: #689523;
  --flexcyon-link-color: #6f49ae;
  --flexcyon-link-hover: color-mix(
    in oklch shorter hue,
    var(--flexcyon-link-color),
    var(--flexcyon-base-grey-dark)
  );
  --flexcyon-link-unresolved-color: #6f49ae;
  --flexcyon-media-embed-vertical-margin: 8px;
  --flexcyon-meta-container-padding-left: 14px;
  --flexcyon-modal-bg-url: url("");
  --flexcyon-modal-dark-intensity: 1;
  --flexcyon-modal-image-blend-mode: darken;
  --flexcyon-modal-image-blur: 0px;
  --flexcyon-modal-image-brightness: 2;
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
  --flexcyon-orange: #ed8126;
  --flexcyon-os-detail-padding-l: 12px;
  --flexcyon-os-detail-padding-r: 8px;
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
  --flexcyon-pink: #e389ca;
  --flexcyon-purple-lilac: #6f49ae;
  --flexcyon-quote-credit: "bladeacer";
  --flexcyon-quote-credit-prefix: "-";
  --flexcyon-quote-font-size: 24px;
  --flexcyon-quote-val: "This is a placeholder quote\\ain the Flexcyon Theme.";
  --flexcyon-red-salmon: #eb5325;
  --flexcyon-repl-active-line-str: "->";
  --flexcyon-repl-active-str-space: 0px;
  --flexcyon-saturation-ratio: 1;
  --flexcyon-screen-dimens-padding-l: 16px;
  --flexcyon-search-container-horiz-padding: 16px;
  --flexcyon-search-container-verti-padding: 8px;
  --flexcyon-settings-installed-tooltip-left-margin: 1rem;
  --flexcyon-side-toggle-button-no-ribbon: 11px 16px 7px 0px;
  --flexcyon-status-hide-hover-duration: 325ms;
  --flexcyon-status-hide-hover-function: ease-out;
  --flexcyon-status-hide-trigger-translation: 50px;
  --flexcyon-status-hide-until-hover-text: "Show status";
  --flexcyon-status-hide-until-hover-translation: 80vw;
  --flexcyon-status-live-text: "LIVE";
  --flexcyon-status-new-tab-opacity: 0.55;
  --flexcyon-status-reading-text: "READ";
  --flexcyon-status-source-text: "SOURCE";
  --flexcyon-style-settings-indent-width: 4px;
  --flexcyon-suggestion-horiz-padding: 12px;
  --flexcyon-suggestion-verti-padding: 8px;
  --flexcyon-table-reading-mode-width: 100%;
  --flexcyon-td-horiz-padding: 10px;
  --flexcyon-td-live-pad-scale: 0.2;
  --flexcyon-td-table-alignment: left;
  --flexcyon-td-verti-padding: 5px;
  --flexcyon-text-muted: #6f768599;
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
  --flexcyon-vim-command-text: "COMMAND";
  --flexcyon-vim-insert-text: "INSERT";
  --flexcyon-vim-left-positioning: 6px;
  --flexcyon-vim-normal-text: "NORMAL";
  --flexcyon-w-spacing: 0px;
  --flexcyon-yellow: #e8c62a;
  --flexyon-base-grey-token: #586582;
  --font-mermaid: var(--font-monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace);
  --font-ui-large: 17.7983px;
  --font-ui-medium: 16.1803px;
  --font-ui-small: 14.5622px;
  --font-ui-smaller: 12.9442px;
  --footnote-divider-color: var(--metadata-divider-color, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --footnote-id-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --footnote-id-color-no-occurrences: var(--text-faint, #6f768599);
  --footnote-input-background-active: var(--metadata-input-background-active, #edebe5);
  --footnote-line-height: var(--line-height-normal, 1.4);
  --footnote-radius: var(--radius-s, 2px);
  --graph-control-horiz-padding: 12px;
  --graph-control-verti-padding: 6px;
  --graph-line: var(--flexcyon-base-03, #dddcd6);
  --graph-node: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --graph-node-attachment: var(--color-yellow, #e8c62a);
  --graph-node-focused: var(--text-accent, #5770b9);
  --graph-node-tag: var(--flexcyon-purple-lilac, #6f49ae);
  --graph-node-unresolved: var(--flexcyon-red-salmon, #eb5325);
  --graph-text: var(--text-normal, #080808);
  --gray: var(--text-muted, color-mix(
    in oklch,
    var(--flexcyon-text-muted),
    var(--text-normal)
  ));
  --h: tan(atan2(1380px, 1px));
  --h1-color: var(--flexcyon-h1-color, #5c9fe4);
  --h1-line-height: 1.61;
  --h1-size: 1.818em;
  --h2-color: var(--flexcyon-h2-color, #6f49ae);
  --h2-line-height: 1.51;
  --h2-size: 1.618em;
  --h2-weight: 675;
  --h3-color: var(--flexcyon-h3-color, #3b9ba1);
  --h3-line-height: 1.41;
  --h3-size: 1.418em;
  --h3-weight: 650;
  --h4-color: var(--flexcyon-h4-color, #e389ca);
  --h4-line-height: 1.31;
  --h4-size: 1.218em;
  --h4-weight: 625;
  --h5-color: var(--flexcyon-h5-color, #689523);
  --h5-line-height: var(--line-height-normal, 1.21);
  --h5-size: 1.118em;
  --h5-weight: 600;
  --h6-color: var(--flexcyon-h6-color, #e8c62a);
  --h6-line-height: var(--line-height-normal, 1.21);
  --h6-size: 1.018em;
  --h6-weight: 575;
  --heading-formatting: var(--text-faint, #6f768599);
  --highlight: var(--text-highlight-bg, color-mix(
    in oklch,
    var(--flexcyon-highlight-colour) var(--flexcyon-highlight-opacity),
    transparent
  ));
  --hr-color: var(--background-modifier-border, #393e48);
  --icon-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --icon-color-active: var(--interactive-accent, color-mix(
    in oklch,
    #5770b9 80%,
    transparent 20%
  ));
  --icon-color-focused: var(--interactive-accent, color-mix(
    in oklch,
    #5770b9 80%,
    transparent 20%
  ));
  --icon-color-hover: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --icon-stroke: var(--icon-m-stroke-width, 2px);
  --icon-xs: 12.25px;
  --inline-title-color: var(--h1-color, #5c9fe4);
  --inline-title-line-height: var(--h1-line-height, 1.61);
  --inline-title-size: var(--h1-size, 1.818em);
  --input-date-separator: var(--text-faint, #6f768599);
  --input-padding: var(--flexcyon-input-verti-padding)
    var(--flexcyon-input-horiz-padding, 4px
    8px);
  --input-placeholder-color: var(--text-faint, #6f768599);
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
  --interactive-hover: var(--background-primary, #faf7ef);
  --interactive-normal: var(--color-base-05, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --italic-color: var(--flexcyon-accent, #5770b9);
  --less-letter-spacing: -3px;
  --light: var(--background-primary, var(--color-base-00, #faf7ef));
  --lightgray: var(--background-secondary, var(--color-base-05, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  )));
  --line-height-normal: 1.4;
  --line-height-tight: 1.25;
  --link-color: var(--flexcyon-link-color, #6f49ae);
  --link-color-hover: var(--flexcyon-link-hover, color-mix(
    in oklch shorter hue,
    #6f49ae,
    #797876
  ));
  --link-external-color: var(--flexcyon-external-link-color, #5c9fe4);
  --link-external-color-hover: var(--flexcyon-external-link-hover, color-mix(
    in oklch shorter hue,
    #5c9fe4,
    #797876
  ));
  --link-unresolved-color: var(--flexcyon-link-unresolved-color, #6f49ae);
  --link-unresolved-decoration-color: var(--flexcyon-link-unresolved-color, #6f49ae);
  --link-unresolved-decoration-style: dashed;
  --list-marker-color: var(--flexcyon-cyan, #3b9ba1);
  --list-marker-color-collapsed: var(--flexcyon-lime-green, #689523);
  --list-marker-color-hover: var(--flexcyon-palette-cyan-hover, color-mix(
    in oklch shorter hue,
    #3b9ba1,
    #797876
  ));
  --list-numbered-style: var(--flexcyon-default-ol-style, decimal);
  --menu-background: var(--background-secondary, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --menu-border-color: var(--background-modifier-border-hover, transparent);
  --menu-radius: var(--radius-m, 4px);
  --metadata-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --metadata-divider-color: var(--background-modifier-border, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --metadata-input-background-active: var(--background-modifier-hover, #edebe5);
  --metadata-input-text-color: var(--text-normal, #080808);
  --metadata-label-background-active: var(--background-modifier-hover, #edebe5);
  --metadata-label-text-color: var(--flexcyon-purple-lilac, #6f49ae);
  --metadata-label-text-color-hover: var(--flexcyon-palette-lilac-hover, color-mix(
    in oklch shorter hue,
    #6f49ae,
    #797876
  ));
  --metadata-property-background-active: var(--background-modifier-hover, #edebe5);
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14.5622px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14.5622px);
  --modal-background: var(--background-primary, #faf7ef);
  --modal-border-color: var(--flexcyon-base-02, #edebe5);
  --modal-radius: var(--radius-l, 6px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #6f768599);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #6f768599);
  --nav-heading-color: var(--text-normal, #080808);
  --nav-heading-color-collapsed: var(--text-faint, #6f768599);
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --nav-heading-color-hover: var(--text-normal, #080808);
  --nav-item-background-active: var(--background-modifier-hover, #edebe5);
  --nav-item-background-hover: var(--background-modifier-hover, #edebe5);
  --nav-item-background-selected: var(--flexcyon-base-03, #dddcd6);
  --nav-item-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --nav-item-color-active: var(--interactive-accent, color-mix(
    in oklch,
    #5770b9 80%,
    transparent 20%
  ));
  --nav-item-color-highlighted: var(--text-accent, #5770b9);
  --nav-item-color-hover: var(--text-normal, #080808);
  --nav-item-color-selected: var(--flexcyon-orange, #ed8126);
  --nav-item-radius: var(--radius-s, 2px);
  --nav-item-size: var(--font-ui-small, 14.5622px);
  --nav-tag-color: var(--text-faint, #6f768599);
  --nav-tag-color-active: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --nav-tag-color-hover: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --nav-tag-radius: var(--radius-s, 2px);
  --oz-fta-all-panes-active-text-color: #080808;
  --oz-fta-file-font-size: calc(var(--font-ui-medium) - 0.1rem);
  --oz-fta-folder-font-size: calc(var(--font-ui-medium) - 0.1rem);
  --oz-fta-folder-panes-file-name-color: #080808;
  --pdf-background: var(--background-primary, #faf7ef);
  --pdf-page-background: var(--background-primary, #faf7ef);
  --pdf-sidebar-background: var(--background-primary, #faf7ef);
  --pill-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --pill-border-color-hover: var(--background-modifier-border-hover, transparent);
  --pill-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --pill-color-hover: var(--text-normal, #080808);
  --pill-color-remove: var(--text-faint, #6f768599);
  --pill-color-remove-hover: var(--text-accent, #5770b9);
  --prompt-background: var(--background-primary, #faf7ef);
  --prompt-border-color: var(--flexcyon-base-02-03-mix, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --r-background-color: var(--color-base-05, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --r-heading-color: var(--text-normal, #080808);
  --r-heading-font: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --r-heading-margin: 16px 0px;
  --r-heading-text-transform: capitalize;
  --r-heading1-size: var(--h1-size, 1.818em);
  --r-heading2-size: var(--h2-size, 1.618em);
  --r-heading3-size: var(--h3-size, 1.418em);
  --r-heading4-size: var(--h4-size, 1.218em);
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
  --raised-background: var(--blur-background, color-mix(in srgb, #faf7ef 65%, transparent) linear-gradient(#faf7ef, color-mix(in srgb, #faf7ef 65%, transparent)));
  --ribbon-background: var(--background-secondary, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --ribbon-background-collapsed: var(--ribbon-background, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --ribbon-width: 48px;
  --scrollbar-radius: var(--radius-l, 6px);
  --search-clear-button-color: var(--flexcyon-red-salmon, #eb5325);
  --search-icon-color: var(--flexcyon-accent, #5770b9);
  --search-result-background: var(--background-primary, #faf7ef);
  --secondary: var(--text-accent, var(--flexcyon-accent, #5770b9));
  --setting-group-heading-color: var(--text-normal, #080808);
  --setting-group-heading-size: var(--font-ui-medium, 16.1803px);
  --setting-items-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --setting-items-padding: var(--size-4-5, 2px 0px);
  --settings-background: var(--color-base-05, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --shiki-code-background: var(--code-background, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-comment: var(--text-faint, #6f768599);
  --shiki-code-function: var(--color-green, #689523);
  --shiki-code-important: var(--color-orange, #ed8126);
  --shiki-code-keyword: var(--color-pink, #e389ca);
  --shiki-code-normal: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --shiki-code-property: var(--color-cyan, #3b9ba1);
  --shiki-code-punctuation: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --shiki-code-string: var(--color-yellow, #e8c62a);
  --shiki-code-value: var(--color-purple, #6f49ae);
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --shiki-gutter-text-color: var(--text-faint, #6f768599);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --shiki-terminal-dots-color: var(--text-faint, #6f768599);
  --shiki-tooltip-background: var(--background-modifier-message, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --slider-thumb-border-color: var(--background-modifier-border-hover, transparent);
  --slider-track-background: var(--background-modifier-border, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --status-bar-background: var(--background-secondary, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --status-bar-border-color: var(--divider-color, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --status-bar-font-size: var(--font-ui-smaller, 13.7533px);
  --status-bar-position: absolute;
  --status-bar-radius: var(--radius-m, 4px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --suggestion-background: var(--background-primary, #faf7ef);
  --sync-avatar-color-1: var(--color-red, #eb5325);
  --sync-avatar-color-2: var(--color-orange, #ed8126);
  --sync-avatar-color-3: var(--color-yellow, #e8c62a);
  --sync-avatar-color-4: var(--color-green, #689523);
  --sync-avatar-color-5: var(--color-cyan, #3b9ba1);
  --sync-avatar-color-6: var(--color-blue, #5c9fe4);
  --sync-avatar-color-7: var(--color-purple, #6f49ae);
  --sync-avatar-color-8: var(--color-pink, #e389ca);
  --tab-background-active: var(--background-primary, #faf7ef);
  --tab-container-background: var(--background-secondary, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --tab-curve: 0px;
  --tab-divider-color: var(--titlebar-background, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --tab-font-size: var(--font-ui-small, 14.5622px);
  --tab-outline-color: var(--divider-color, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --tab-outline-width: 0px;
  --tab-radius: var(--radius-s, 0px);
  --tab-radius-active: 0px;
  --tab-stacked-font-size: var(--font-ui-small, 14.5622px);
  --tab-switcher-background: var(--background-secondary, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --tab-text-color: var(--flexcyon-base-05, #b4b3af);
  --tab-text-color-active: var(--text-accent, #5770b9);
  --tab-text-color-focused: var(--flexcyon-base-05, #b4b3af);
  --tab-text-color-focused-active: var(--text-accent, #5770b9);
  --tab-text-color-focused-active-current: var(--text-accent, #5770b9);
  --tab-text-color-focused-highlighted: var(--text-accent, #5770b9);
  --table-add-button-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --table-background: var(--background-primary, #faf7ef);
  --table-border-color: var(--background-modifier-border, #6f768566);
  --table-column-alt-background: var(--table-background, #faf7ef);
  --table-drag-handle-background-active: var(--table-selection-border-color, color-mix(
    in oklch,
    #5770b9 80%,
    transparent 20%
  ));
  --table-drag-handle-color: var(--text-faint, #6f768599);
  --table-drag-handle-color-active: var(--text-on-accent, #dddcd6);
  --table-header-background: var(--color-base-20, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --table-header-background-hover: var(--table-background, #faf7ef);
  --table-header-border-color: var(--table-border-color, #6f768566);
  --table-header-color: var(--text-normal, #080808);
  --table-header-size: var(--font-ui-large, 17.7983px);
  --table-line-height: var(--line-height-tight, 1.25);
  --table-row-alt-background-hover: var(--table-background, #faf7ef);
  --table-row-background-hover: var(--table-background, #faf7ef);
  --table-selection-border-color: var(--interactive-accent, color-mix(
    in oklch,
    #5770b9 80%,
    transparent 20%
  ));
  --table-text-size: var(--font-ui-medium, 16.1803px);
  --tag-background: color-mix(in oklch, var(--tag-color) 25%, transparent);
  --tag-background-hover: color-mix(
    in oklch,
    var(--tag-color-hover) 25%,
    transparent
  );
  --tag-color: var(--flexcyon-cyan, #3b9ba1);
  --tag-color-hover: var(--flexcyon-palette-cyan-hover, color-mix(
    in oklch shorter hue,
    #3b9ba1,
    #797876
  ));
  --tag-decoration-hover: underline;
  --tag-size: var(--code-size, 0.875em);
  --tertiary: var(--interactive-accent-hover, color-mix(
    in oklch shorter hue,
    var(--flexcyon-accent) 75%,
    transparent
  ));
  --text-accent: var(--flexcyon-accent, #5770b9);
  --text-error: var(--flexcyon-red-salmon, #eb5325);
  --text-faint: var(--flexcyon-text-muted, #6f768599);
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
  --text-on-accent: var(--flexcyon-base-03, #dddcd6);
  --text-selection: color-mix(
    in oklch shorter hue,
    var(--flexcyon-base-04) 20%,
    transparent
  );
  --text-success: var(--flexcyon-lime-green, #689523);
  --text-warning: var(--flexcyon-red-salmon, #eb5325);
  --textHighlight: var(--text-highlight-bg, color-mix(
    in oklch,
    var(--flexcyon-highlight-colour) var(--flexcyon-highlight-opacity),
    transparent
  ));
  --titlebar-background: var(--background-secondary, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --titlebar-background-focused: var(--background-secondary, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --titlebar-border-color: var(--background-modifier-border, color-mix(
    in oklch,
    #edebe5,
    #dddcd6
  ));
  --titlebar-text-color: var(--text-faint, #6f768599);
  --titlebar-text-color-focused: var(--text-muted, color-mix(
    in oklch,
    #6f768599,
    #080808
  ));
  --toggle-thumb-color: var(--text-on-accent, #dddcd6);
  --upsize: 103%;
  --vault-name-color: var(--interactive-accent, color-mix(
    in oklch,
    #5770b9 80%,
    transparent 20%
  ));
  --vault-profile-color: var(--text-normal, #080808);
  --vault-profile-color-hover: var(--vault-profile-color, #080808);
  --vault-profile-font-size: var(--font-ui-small, 14.5622px);
  --w: tan(atan2(2538px, 1px));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  --icon-size: var(--icon-xs, 18px);
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
  --bases-table-header-background: var(--background-secondary, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  background-color: var(--tab-container-background, oklch(0.965356 0.0102416 none));
  border-left-color: oklch(0.916763 0.00824887 none);
  border-left-width: 0px;
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

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
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
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgba(111, 118, 133, 0.6));
}

html[saved-theme="light"] body blockquote {
  color: var(--blockquote-color, rgb(8, 8, 8));
  line-height: 22.4px;
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: var(--color-base-05, oklch(0.965356 0.0102416 none));
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
}

html[saved-theme="light"] body table {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-bottom-width: 0px;
  border-left-color: rgba(111, 118, 133, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(111, 118, 133, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(111, 118, 133, 0.4);
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgb(250, 247, 239));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-bottom-width: 0px;
  border-left-color: rgba(111, 118, 133, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(111, 118, 133, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(111, 118, 133, 0.4);
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: rgba(111, 118, 133, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(111, 118, 133, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(111, 118, 133, 0.4);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(8, 8, 8));
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  text-align: var(--flexcyon-td-table-alignment, left);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-bottom-width: 0px;
  border-left-color: rgba(111, 118, 133, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(111, 118, 133, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(111, 118, 133, 0.4);
  border-top-width: 0px;
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, oklch(0.916763 0.00824887 none));
  border-bottom-color: rgba(111, 118, 133, 0.4);
  border-bottom-width: 0px;
  border-left-color: rgba(111, 118, 133, 0.4);
  border-left-width: 0px;
  border-right-color: rgba(111, 118, 133, 0.4);
  border-right-width: 0px;
  border-top-color: rgba(111, 118, 133, 0.4);
  border-top-width: 0px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, oklch(0.965356 0.0102416 none));
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-left-width: 0px;
  border-right-color: oklch(0.916763 0.00824887 none);
  border-right-width: 0px;
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(59, 155, 161));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, oklch(0.965356 0.0102416 none));
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-left-width: 0px;
  border-right-color: oklch(0.916763 0.00824887 none);
  border-right-width: 0px;
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 0px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, color-mix(
    in oklch,
    #faf7ef 70%,
    #edebe5 30%
  ));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(237, 235, 229));
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-left-width: 0px;
  border-radius: 4px;
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--text-muted, oklch(0.29593 0.00924516 265.685 / 0.8));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-width: 0px;
  border-left-color: oklch(0.559434 0.117277 268.207 / 0.8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
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
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 59, 155, 161);
  background: rgba(59, 155, 161, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(59, 155, 161, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(59, 155, 161, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(59, 155, 161, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(59, 155, 161, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 235, 83, 87);
  background: rgba(235, 83, 87, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(235, 83, 87, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(235, 83, 87, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(235, 83, 87, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(235, 83, 87, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 235, 83, 87);
  background: rgba(235, 83, 87, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(235, 83, 87, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(235, 83, 87, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(235, 83, 87, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(235, 83, 87, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 111, 73, 174);
  background: rgba(111, 73, 174, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(111, 73, 174, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(111, 73, 174, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(111, 73, 174, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(111, 73, 174, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 235, 83, 87);
  background: rgba(235, 83, 87, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(235, 83, 87, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(235, 83, 87, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(235, 83, 87, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(235, 83, 87, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 92, 159, 228);
  background: rgba(92, 159, 228, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(92, 159, 228, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(92, 159, 228, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(92, 159, 228, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(92, 159, 228, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 92, 159, 228);
  background: rgba(92, 159, 228, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(92, 159, 228, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(92, 159, 228, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(92, 159, 228, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(92, 159, 228, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 237, 129, 38);
  background: rgba(237, 129, 38, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(237, 129, 38, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(237, 129, 38, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(237, 129, 38, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(237, 129, 38, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 104, 149, 35);
  background: rgba(104, 149, 35, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(104, 149, 35, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(104, 149, 35, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(104, 149, 35, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(104, 149, 35, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 59, 155, 161);
  background: rgba(59, 155, 161, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(59, 155, 161, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(59, 155, 161, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(59, 155, 161, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(59, 155, 161, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 92, 159, 228);
  background: rgba(92, 159, 228, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(92, 159, 228, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(92, 159, 228, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(92, 159, 228, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(92, 159, 228, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 237, 129, 38);
  background: rgba(237, 129, 38, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(237, 129, 38, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(237, 129, 38, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(237, 129, 38, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(237, 129, 38, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 92, 159, 228;
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(92, 159, 228));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(8, 8, 8);
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
  border-bottom-width: 0px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-left-width: 0px;
  border-right-color: oklch(0.916763 0.00824887 none);
  border-right-width: 0px;
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--text-normal, rgb(8, 8, 8));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(250, 247, 239));
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-left-width: 0px;
  border-right-color: oklch(0.916763 0.00824887 none);
  border-right-width: 0px;
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-left-width: 0px;
  border-right-color: oklch(0.916763 0.00824887 none);
  border-right-width: 0px;
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: oklch(0.965356 0.0102416 none);
  border-bottom-width: 0px;
  border-left-color: oklch(0.559434 0.117277 268.207 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.559434 0.117277 268.207 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.559434 0.117277 268.207 / 0.8);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(237, 235, 229));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
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
  --icon-size: var(--icon-xs, 12.25px);
  --pill-background: var(--tag-background, color-mix(in oklch, #3b9ba1 25%, transparent));
  --pill-background-hover: var(--tag-background-hover, color-mix(
    in oklch,
    color-mix(
    in oklch shorter hue,
    #3b9ba1,
    #797876
  ) 25%,
    transparent
  ));
  --pill-border-color: var(--tag-border-color, hsla(225, 41%, 53%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(225, 41%, 53%, 0.15));
  --pill-color: var(--tag-color, #3b9ba1);
  --pill-color-hover: var(--tag-color-hover, color-mix(
    in oklch shorter hue,
    #3b9ba1,
    #797876
  ));
  --pill-color-remove: var(--tag-color, #3b9ba1);
  --pill-color-remove-hover: var(--tag-color-hover, color-mix(
    in oklch shorter hue,
    #3b9ba1,
    #797876
  ));
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  background-color: var(--pill-background, oklch(0.636083 0.0886418 200.983 / 0.25));
  border-bottom-color: rgba(86, 111, 184, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(86, 111, 184, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(86, 111, 184, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(86, 111, 184, 0.15);
  border-top-width: 0px;
  color: var(--pill-color, rgb(59, 155, 161));
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(59, 155, 161);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
  color: var(--h1-color, rgb(92, 159, 228));
  font-size: var(--h1-size, 29.088px);
  letter-spacing: var(--h1-letter-spacing, -0.43632px);
  line-height: var(--h1-line-height, 46.8317px);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(92, 159, 228));
  font-size: var(--inline-title-size, 29.088px);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 675);
  border-bottom-color: rgb(111, 73, 174);
  border-bottom-width: 0px;
  border-left-color: rgb(111, 73, 174);
  border-left-width: 0px;
  border-right-color: rgb(111, 73, 174);
  border-right-width: 0px;
  border-top-color: rgb(111, 73, 174);
  border-top-width: 0px;
  color: var(--h2-color, rgb(111, 73, 174));
  font-size: var(--h2-size, 25.888px);
  font-weight: var(--font-weight, 675);
  letter-spacing: var(--h2-letter-spacing, -0.284768px);
  line-height: var(--h2-line-height, 39.0909px);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(92, 159, 228);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 159, 228);
  border-left-width: 0px;
  border-right-color: rgb(92, 159, 228);
  border-right-width: 0px;
  border-top-color: rgb(92, 159, 228);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(92, 159, 228));
  font-size: var(--inline-title-size, 29.088px);
  letter-spacing: -0.43632px;
  line-height: var(--inline-title-line-height, 46.8317px);
  margin-bottom: 14.544px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 650);
  border-bottom-color: rgb(59, 155, 161);
  border-bottom-width: 0px;
  border-left-color: rgb(59, 155, 161);
  border-left-width: 0px;
  border-right-color: rgb(59, 155, 161);
  border-right-width: 0px;
  border-top-color: rgb(59, 155, 161);
  border-top-width: 0px;
  color: var(--h3-color, rgb(59, 155, 161));
  font-size: var(--h3-size, 22.688px);
  font-weight: var(--font-weight, 650);
  letter-spacing: var(--h3-letter-spacing, -0.181504px);
  line-height: var(--h3-line-height, 31.9901px);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 625);
  border-bottom-color: rgb(227, 137, 202);
  border-bottom-width: 0px;
  border-left-color: rgb(227, 137, 202);
  border-left-width: 0px;
  border-right-color: rgb(227, 137, 202);
  border-right-width: 0px;
  border-top-color: rgb(227, 137, 202);
  border-top-width: 0px;
  color: var(--h4-color, rgb(227, 137, 202));
  font-size: var(--h4-size, 19.488px);
  font-weight: var(--font-weight, 625);
  letter-spacing: var(--h4-letter-spacing, -0.09744px);
  line-height: var(--h4-line-height, 25.5293px);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 600);
  border-bottom-color: rgb(104, 149, 35);
  border-bottom-width: 0px;
  border-left-color: rgb(104, 149, 35);
  border-left-width: 0px;
  border-right-color: rgb(104, 149, 35);
  border-right-width: 0px;
  border-top-color: rgb(104, 149, 35);
  border-top-width: 0px;
  color: var(--h5-color, rgb(104, 149, 35));
  font-size: var(--h5-size, 17.888px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.035776px);
  line-height: var(--h5-line-height, 21.6445px);
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 575);
  border-bottom-color: rgb(232, 198, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 198, 42);
  border-left-width: 0px;
  border-right-color: rgb(232, 198, 42);
  border-right-width: 0px;
  border-top-color: rgb(232, 198, 42);
  border-top-width: 0px;
  color: var(--h6-color, rgb(232, 198, 42));
  font-size: var(--h6-size, 16.288px);
  font-weight: var(--font-weight, 575);
  line-height: var(--h6-line-height, 19.7085px);
}

html[saved-theme="light"] body hr {
  border-bottom-color: oklch(0.916763 0.00824887 none);
  border-bottom-width: 0px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-left-width: 0px;
  border-right-color: oklch(0.916763 0.00824887 none);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 92, 159, 228);
  border-bottom-color: rgba(92, 159, 228, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgba(92, 159, 228, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(92, 159, 228, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(92, 159, 228, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 24px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, oklch(0.29593 0.00924516 265.685 / 0.8));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, oklch(0.29593 0.00924516 265.685 / 0.8));
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
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(8, 8, 8);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--icon-color, oklch(0.29593 0.00924516 265.685 / 0.8));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-bottom-width: 0px;
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-left-radius: 4px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, oklch(0.29593 0.00924516 265.685 / 0.8));
  font-size: var(--status-bar-font-size, 16.1803px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: var(--size-4-2, 25.38px);
  padding-top: 0px;
}

html[saved-theme="light"] body footer ul li a {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
  font-size: 16.1803px;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, oklch(0.29593 0.00924516 265.685 / 0.8));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-left-radius: 16px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: oklch(0.916763 0.00824887 none);
  border-left-width: 0px;
  border-right-color: oklch(0.916763 0.00824887 none);
  border-right-width: 0px;
  border-top-color: oklch(0.916763 0.00824887 none);
  border-top-width: 0px;
  color: var(--text-muted, oklch(0.29593 0.00924516 265.685 / 0.8));
  padding-bottom: 0px;
  padding-left: 14px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-bottom-width: 0px;
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-width: 0px;
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-bottom-width: 0px;
  border-left-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-left-width: 0px;
  border-right-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-right-width: 0px;
  border-top-color: oklch(0.29593 0.00924516 265.685 / 0.8);
  border-top-width: 0px;
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body .metadata-property-key {
  color: oklch(0.29593 0.00924516 265.685 / 0.8);
}

html[saved-theme="light"] body .metadata-property-value {
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
  --icon-size: var(--icon-xs, 12.25px);
  --pill-background: var(--tag-background, color-mix(in oklch, #3b9ba1 25%, transparent));
  --pill-background-hover: var(--tag-background-hover, color-mix(
    in oklch,
    color-mix(
    in oklch shorter hue,
    #3b9ba1,
    #797876
  ) 25%,
    transparent
  ));
  --pill-border-color: var(--tag-border-color, hsla(225, 41%, 53%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(225, 41%, 53%, 0.15));
  --pill-color: var(--tag-color, #3b9ba1);
  --pill-color-hover: var(--tag-color-hover, color-mix(
    in oklch shorter hue,
    #3b9ba1,
    #797876
  ));
  --pill-color-remove: var(--tag-color, #3b9ba1);
  --pill-color-remove-hover: var(--tag-color-hover, color-mix(
    in oklch shorter hue,
    #3b9ba1,
    #797876
  ));
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
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
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page-header h2.page-title {
  background: oklch(0.965356 0.0102416 none) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--color-base-05, oklch(0.965356 0.0102416 none));
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-right-radius: 16px;
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-right-radius: 16px;
  border-top-width: 0px;
  color: var(--text-normal, rgb(8, 8, 8));
  font-size: 14.5622px;
  line-height: 18.2027px;
  margin-bottom: 0px;
  margin-left: -1.5px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 4px;
}

html[saved-theme="light"] body abbr {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(111, 73, 174);
  border-bottom-width: 0px;
  border-left-color: rgb(111, 73, 174);
  border-left-width: 0px;
  border-right-color: rgb(111, 73, 174);
  border-right-width: 0px;
  border-top-color: rgb(111, 73, 174);
  border-top-width: 0px;
  color: var(--text-normal, rgb(111, 73, 174));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, oklch(0.965356 0.0102416 none));
  border-bottom-color: rgb(59, 155, 161);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 0px;
  border-left-color: rgb(59, 155, 161);
  border-left-width: 0px;
  border-right-color: rgb(59, 155, 161);
  border-right-width: 0px;
  border-top-color: rgb(59, 155, 161);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(59, 155, 161));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(8, 8, 8);
  border-bottom-width: 0px;
  border-left-color: rgb(8, 8, 8);
  border-left-width: 0px;
  border-right-color: rgb(8, 8, 8);
  border-right-width: 0px;
  border-top-color: rgb(8, 8, 8);
  border-top-width: 0px;
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
  border-bottom-width: 0px;
  border-left-color: rgba(86, 111, 184, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(86, 111, 184, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(86, 111, 184, 0.15);
  border-top-width: 0px;
  color: var(--tag-color, rgb(59, 155, 161));
}`,
  },
  classSettings: {
    "flexcyon-rtz-mode": {
      general: `body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .workspace-leaf > div > div > div.empty-state > div.empty-state-container::before {
display: inline;
font-family: var(--flexcyon-new-tab-font-group);
font-size: calc(10 * var(--flexcyon-ascii-max-font-size));
font-weight: bold;
line-height: var(--flexcyon-ascii-line-height);
text-align: center;
white-space: pre;
content: "0" !important;
background: var(--text-accent);
background-clip: text;
-webkit-text-fill-color: transparent;
}

body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .workspace-leaf > div > div > div.empty-state > div.empty-state-action-list {
display: none;
}

body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .workspace-leaf > div > div > div.empty-state > .sidebar-toggle-button {
display: none;
}

body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .graph-controls, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .oz-folders-action-items.file-tree-header-fixed, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .oz-flex-container, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .nav-header, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .titlebar-button-container, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .view-header-left, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .view-actions, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .side-dock-ribbon, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .workspace-tab-header-new-tab, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .workspace-tab-header-tab-list, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .workspace-sidedock-vault-profile {
opacity: 0;
}

body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .graph-controls:hover, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .oz-folders-action-items.file-tree-header-fixed:hover, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .oz-flex-container:hover, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .nav-header:hover, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .titlebar-button-container:hover, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .view-header-left:hover, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .view-actions:hover, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .side-dock-ribbon:hover, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .workspace-tab-header-new-tab:hover, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .workspace-tab-header-tab-list:hover, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .workspace-sidedock-vault-profile:hover {
opacity: unset;
}

body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .cm-gutter, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .metadata-container, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .status-bar {
opacity: var(--dimmed);
}

body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .cm-gutter:hover, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .metadata-container:hover, body.flexcyon-rtz-mode:not(.flexcyon-flex-max-mode) .status-bar:hover {
opacity: unset;
}

body.flexcyon-rtz-mode {
counter-reset: numTab 0;
}

body.flexcyon-rtz-mode .workspace-tab-header-inner-title::before {
margin-inline-end: 12px;
overflow: hidden;
font-size: var(--font-ui-medium);
font-weight: bold;
color: inherit;
content: counter(numTab);
}

body.flexcyon-rtz-mode .workspace-tab-header {
counter-increment: numTab;
}

body.flexcyon-rtz-mode .mod-stacked .workspace-tab-header-inner-title::before {
margin-block-end: 12px;
}

body.flexcyon-rtz-mode {
--tab-stacked-font-size: 0px;
}

body.flexcyon-rtz-mode .workspace-tabs .workspace-tab-header {
--tab-width: 90px;
}

body.flexcyon-rtz-mode .workspace-tabs .workspace-tab-header .workspace-tab-header-inner-title {
font-size: 0;
}

body.flexcyon-rtz-mode .workspace-tabs .workspace-tab-header .workspace-tab-header-inner-title::before {
margin-inline-end: 0;
}`,
    },
    "flexcyon-flex-max-mode": {
      general: `body.flexcyon-flex-max-mode {
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
}

body.flexcyon-flex-max-mode .view-header-title-parent :nth-of-type(5n + 1) {
background-color: var(--color-base-20);
}

body.flexcyon-flex-max-mode .view-header-title-parent :nth-of-type(5n + 1)::after {
background-color: var(--color-base-25);
}

body.flexcyon-flex-max-mode .view-header-title-parent :nth-of-type(5n + 3) {
background-color: var(--color-base-25);
}

body.flexcyon-flex-max-mode .view-header-title-parent :nth-of-type(5n + 3)::after {
background-color: var(--color-base-05);
}

body.flexcyon-flex-max-mode .view-header-title-parent :nth-of-type(5n) {
background-color: var(--color-base-05);
}

body.flexcyon-flex-max-mode .view-header-title-parent :nth-of-type(5n)::after {
background-color: var(--color-base-20);
}

body.flexcyon-flex-max-mode .view-header-title-parent :has(+ :last-child)::after {
background-color: var(--color-base-05);
}

body.flexcyon-flex-max-mode .view-header-title {
padding: var(--flexcyon-mode-view-header-title-verti-padding) var(--flexcyon-mode-view-header-title-horiz-padding);
margin-inline-start: -1.5px;
background-color: var(--color-base-05);
border-radius: var(--flexcyon-callout-radix);
border-start-start-radius: 0;
border-end-start-radius: 0;
}

body.flexcyon-flex-max-mode .view-header-breadcrumb-separator {
display: none;
padding: 0;
}

body.flexcyon-flex-max-mode .view-header, body.flexcyon-flex-max-mode .view-header-title-container {
gap: 0;
}

body.flexcyon-flex-max-mode .view-header-title-container:not(:has(.view-header-breadcrumb)) .view-header-title {
border-radius: var(--flexcyon-callout-radix);
}

body.flexcyon-flex-max-mode .view-header-title-parent .view-header-breadcrumb {
padding: 4px 0;
border-radius: 0;
}

body.flexcyon-flex-max-mode .view-header-title-parent .view-header-breadcrumb::after {
position: relative;
inline-size: inherit;
block-size: inherit;
padding: 10px 6px;
color: transparent;
content: "e";
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 70% 50%);
}

body.flexcyon-flex-max-mode .view-header-title-parent :first-child.view-header-breadcrumb {
padding-inline-start: 12px;
border-start-start-radius: 16px;
border-end-start-radius: 16px;
}

body.flexcyon-flex-max-mode input[data-task="!"]:checked, body.flexcyon-flex-max-mode li[data-task="!"] > input:checked, body.flexcyon-flex-max-mode li[data-task="!"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="!"]:checked:hover, body.flexcyon-flex-max-mode li[data-task="!"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="!"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="!"]:checked::after, body.flexcyon-flex-max-mode li[data-task="!"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="!"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-purple);
text-align: center;
content: "!";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task=">"]:checked, body.flexcyon-flex-max-mode li[data-task=">"] > input:checked, body.flexcyon-flex-max-mode li[data-task=">"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task=">"]:checked:hover, body.flexcyon-flex-max-mode li[data-task=">"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task=">"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task=">"]:checked::after, body.flexcyon-flex-max-mode li[data-task=">"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task=">"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-cyan);
text-align: center;
content: ">";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="?"]:checked, body.flexcyon-flex-max-mode li[data-task="?"] > input:checked, body.flexcyon-flex-max-mode li[data-task="?"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="?"]:checked:hover, body.flexcyon-flex-max-mode li[data-task="?"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="?"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="?"]:checked::after, body.flexcyon-flex-max-mode li[data-task="?"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="?"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-pink);
text-align: center;
content: "?";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="#"]:checked, body.flexcyon-flex-max-mode li[data-task="#"] > input:checked, body.flexcyon-flex-max-mode li[data-task="#"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="#"]:checked:hover, body.flexcyon-flex-max-mode li[data-task="#"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="#"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="#"]:checked::after, body.flexcyon-flex-max-mode li[data-task="#"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="#"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-green);
text-align: center;
content: "#";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="."]:checked, body.flexcyon-flex-max-mode li[data-task="."] > input:checked, body.flexcyon-flex-max-mode li[data-task="."] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="."]:checked:hover, body.flexcyon-flex-max-mode li[data-task="."] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="."] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="."]:checked::after, body.flexcyon-flex-max-mode li[data-task="."] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="."] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-yellow);
text-align: center;
content: ".";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="<"]:checked, body.flexcyon-flex-max-mode li[data-task="<"] > input:checked, body.flexcyon-flex-max-mode li[data-task="<"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="<"]:checked:hover, body.flexcyon-flex-max-mode li[data-task="<"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="<"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="<"]:checked::after, body.flexcyon-flex-max-mode li[data-task="<"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="<"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-orange);
text-align: center;
content: "<";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="$"]:checked, body.flexcyon-flex-max-mode li[data-task="$"] > input:checked, body.flexcyon-flex-max-mode li[data-task="$"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="$"]:checked:hover, body.flexcyon-flex-max-mode li[data-task="$"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="$"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="$"]:checked::after, body.flexcyon-flex-max-mode li[data-task="$"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="$"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-red);
text-align: center;
content: "$";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="*"]:checked, body.flexcyon-flex-max-mode li[data-task="*"] > input:checked, body.flexcyon-flex-max-mode li[data-task="*"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="*"]:checked:hover, body.flexcyon-flex-max-mode li[data-task="*"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="*"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="*"]:checked::after, body.flexcyon-flex-max-mode li[data-task="*"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="*"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-purple);
text-align: center;
content: "*";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="'"]:checked, body.flexcyon-flex-max-mode li[data-task="'"] > input:checked, body.flexcyon-flex-max-mode li[data-task="'"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="'"]:checked:hover, body.flexcyon-flex-max-mode li[data-task="'"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="'"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="'"]:checked::after, body.flexcyon-flex-max-mode li[data-task="'"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="'"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-cyan);
text-align: center;
content: "'";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="@"]:checked, body.flexcyon-flex-max-mode li[data-task="@"] > input:checked, body.flexcyon-flex-max-mode li[data-task="@"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="@"]:checked:hover, body.flexcyon-flex-max-mode li[data-task="@"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="@"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="@"]:checked::after, body.flexcyon-flex-max-mode li[data-task="@"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="@"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-blue);
text-align: center;
content: "@";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="%"]:checked, body.flexcyon-flex-max-mode li[data-task="%"] > input:checked, body.flexcyon-flex-max-mode li[data-task="%"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="%"]:checked:hover, body.flexcyon-flex-max-mode li[data-task="%"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="%"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="%"]:checked::after, body.flexcyon-flex-max-mode li[data-task="%"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="%"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-pink);
text-align: center;
content: "%";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="+"]:checked, body.flexcyon-flex-max-mode li[data-task="+"] > input:checked, body.flexcyon-flex-max-mode li[data-task="+"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="+"]:checked:hover, body.flexcyon-flex-max-mode li[data-task="+"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="+"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="+"]:checked::after, body.flexcyon-flex-max-mode li[data-task="+"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="+"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-green);
text-align: center;
content: "+";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="-"]:checked, body.flexcyon-flex-max-mode li[data-task="-"] > input:checked, body.flexcyon-flex-max-mode li[data-task="-"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="-"]:checked:hover, body.flexcyon-flex-max-mode li[data-task="-"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="-"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="-"]:checked::after, body.flexcyon-flex-max-mode li[data-task="-"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="-"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-yellow);
text-align: center;
content: "-";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="/"]:checked, body.flexcyon-flex-max-mode li[data-task="/"] > input:checked, body.flexcyon-flex-max-mode li[data-task="/"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="/"]:checked:hover, body.flexcyon-flex-max-mode li[data-task="/"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="/"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="/"]:checked::after, body.flexcyon-flex-max-mode li[data-task="/"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="/"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-orange);
text-align: center;
content: "/";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="~"]:checked, body.flexcyon-flex-max-mode li[data-task="~"] > input:checked, body.flexcyon-flex-max-mode li[data-task="~"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task="~"]:checked:hover, body.flexcyon-flex-max-mode li[data-task="~"] > input:checked:hover, body.flexcyon-flex-max-mode li[data-task="~"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-flex-max-mode input[data-task="~"]:checked::after, body.flexcyon-flex-max-mode li[data-task="~"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="~"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-red);
text-align: center;
content: "~";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task="?"]:checked::after, body.flexcyon-flex-max-mode li[data-task="?"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="?"] > p > input:checked::after, body.flexcyon-flex-max-mode input[data-task="!"]:checked::after, body.flexcyon-flex-max-mode li[data-task="!"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="!"] > p > input:checked::after {
inset-block-start: -0.15em;
}

body.flexcyon-flex-max-mode input[data-task="'"]:checked::after, body.flexcyon-flex-max-mode li[data-task="'"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="'"] > p > input:checked::after {
inset-block-start: -0.175rem;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) + 0.3rem);
content: "‘";
}

body.flexcyon-flex-max-mode input[data-task="#"]:checked::after, body.flexcyon-flex-max-mode li[data-task="#"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="#"] > p > input:checked::after, body.flexcyon-flex-max-mode input[data-task="$"]:checked::after, body.flexcyon-flex-max-mode li[data-task="$"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="$"] > p > input:checked::after, body.flexcyon-flex-max-mode input[data-task="/"]:checked::after, body.flexcyon-flex-max-mode li[data-task="/"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="/"] > p > input:checked::after, body.flexcyon-flex-max-mode input[data-task="<"]:checked::after, body.flexcyon-flex-max-mode li[data-task="<"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="<"] > p > input:checked::after, body.flexcyon-flex-max-mode input[data-task=">"]:checked::after, body.flexcyon-flex-max-mode li[data-task=">"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task=">"] > p > input:checked::after {
inset-block-start: -0.175rem;
transform: scaleY(1.1);
}

body.flexcyon-flex-max-mode input[data-task="."]:checked::after, body.flexcyon-flex-max-mode li[data-task="."] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="."] > p > input:checked::after {
inset-block-start: -0.1rem;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) - 0.2rem);
letter-spacing: -0.5px;
content: "...";
}

body.flexcyon-flex-max-mode input[data-task="*"]:checked::after, body.flexcyon-flex-max-mode li[data-task="*"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="*"] > p > input:checked::after {
inset-block-start: -0.25rem;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) + 0.75rem);
}

body.flexcyon-flex-max-mode input[data-task="@"]:checked::after, body.flexcyon-flex-max-mode li[data-task="@"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="@"] > p > input:checked::after {
inset-block-start: -0.125rem;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) - 0.1rem);
}

body.flexcyon-flex-max-mode input[data-task="%"]:checked::after, body.flexcyon-flex-max-mode li[data-task="%"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="%"] > p > input:checked::after {
inset-block-start: -0.05rem;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) - 0.2rem);
}

body.flexcyon-flex-max-mode input[data-task="+"]:checked::after, body.flexcyon-flex-max-mode li[data-task="+"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="+"] > p > input:checked::after {
inset-block-start: -0.1rem;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) - 0.05rem);
}

body.flexcyon-flex-max-mode input[data-task="-"]:checked::after, body.flexcyon-flex-max-mode li[data-task="-"] > input:checked::after, body.flexcyon-flex-max-mode li[data-task="-"] > p > input:checked::after {
inset-block-start: -0.3rem;
margin-inline-start: -7.5%;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) + 0.2rem);
letter-spacing: var(--less-letter-spacing);
content: "--";
}

body.flexcyon-flex-max-mode input[data-task='"']:checked, body.flexcyon-flex-max-mode li[data-task='"'] > input:checked, body.flexcyon-flex-max-mode li[data-task='"'] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task='"']:checked::after, body.flexcyon-flex-max-mode li[data-task='"'] > input:checked::after, body.flexcyon-flex-max-mode li[data-task='"'] > p > input:checked::after {
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) + 0.3rem);
font-weight: 900;
color: var(--color-green);
text-align: center;
content: "“";
background-color: inherit;
mask-image: none;
}

body.flexcyon-flex-max-mode input[data-task=i]:checked, body.flexcyon-flex-max-mode li[data-task=i] > input:checked, body.flexcyon-flex-max-mode li[data-task=i] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-flex-max-mode input[data-task=i]:checked::after, body.flexcyon-flex-max-mode li[data-task=i] > input:checked::after, body.flexcyon-flex-max-mode li[data-task=i] > p > input:checked::after {
inset-block-start: -0.075rem;
padding-block-start: 10%;
margin-inline-start: -1.5px;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) - 0.425rem);
font-weight: 900;
line-height: 1.1;
color: var(--color-cyan);
text-align: center;
content: "i";
background-color: inherit;
border: 1.5px solid var(--color-blue);
border-radius: 50%;
mask-image: none;
scale: var(--upsize);
}

body.flexcyon-flex-max-mode input[data-task=s]:checked, body.flexcyon-flex-max-mode li[data-task=s] > input:checked, body.flexcyon-flex-max-mode li[data-task=s] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-purple);
border: none;
clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

body.flexcyon-flex-max-mode input[data-task=s]:checked::after, body.flexcyon-flex-max-mode li[data-task=s] > input:checked::after, body.flexcyon-flex-max-mode li[data-task=s] > p > input:checked::after {
display: none;
}

body.flexcyon-flex-max-mode input[data-task=c]:checked, body.flexcyon-flex-max-mode li[data-task=c] > input:checked, body.flexcyon-flex-max-mode li[data-task=c] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-cyan);
border: none;
clip-path: circle();
}

body.flexcyon-flex-max-mode input[data-task=c]:checked::after, body.flexcyon-flex-max-mode li[data-task=c] > input:checked::after, body.flexcyon-flex-max-mode li[data-task=c] > p > input:checked::after {
display: none;
}

body.flexcyon-flex-max-mode input[data-task=h]:checked, body.flexcyon-flex-max-mode li[data-task=h] > input:checked, body.flexcyon-flex-max-mode li[data-task=h] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-blue);
border: none;
clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

body.flexcyon-flex-max-mode input[data-task=h]:checked::after, body.flexcyon-flex-max-mode li[data-task=h] > input:checked::after, body.flexcyon-flex-max-mode li[data-task=h] > p > input:checked::after {
display: none;
}

body.flexcyon-flex-max-mode input[data-task=m]:checked, body.flexcyon-flex-max-mode li[data-task=m] > input:checked, body.flexcyon-flex-max-mode li[data-task=m] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-pink);
border: none;
clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
}

body.flexcyon-flex-max-mode input[data-task=m]:checked::after, body.flexcyon-flex-max-mode li[data-task=m] > input:checked::after, body.flexcyon-flex-max-mode li[data-task=m] > p > input:checked::after {
display: none;
}

body.flexcyon-flex-max-mode input[data-task=t]:checked, body.flexcyon-flex-max-mode li[data-task=t] > input:checked, body.flexcyon-flex-max-mode li[data-task=t] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-green);
border: none;
clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}

body.flexcyon-flex-max-mode input[data-task=t]:checked::after, body.flexcyon-flex-max-mode li[data-task=t] > input:checked::after, body.flexcyon-flex-max-mode li[data-task=t] > p > input:checked::after {
display: none;
}

body.flexcyon-flex-max-mode input[data-task=r]:checked, body.flexcyon-flex-max-mode li[data-task=r] > input:checked, body.flexcyon-flex-max-mode li[data-task=r] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-yellow);
border: none;
clip-path: rect();
}

body.flexcyon-flex-max-mode input[data-task=r]:checked::after, body.flexcyon-flex-max-mode li[data-task=r] > input:checked::after, body.flexcyon-flex-max-mode li[data-task=r] > p > input:checked::after {
display: none;
}

body.flexcyon-flex-max-mode input[data-task=d]:checked, body.flexcyon-flex-max-mode li[data-task=d] > input:checked, body.flexcyon-flex-max-mode li[data-task=d] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-orange);
border: none;
clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 50% 90%, 0% 25%);
}

body.flexcyon-flex-max-mode input[data-task=d]:checked::after, body.flexcyon-flex-max-mode li[data-task=d] > input:checked::after, body.flexcyon-flex-max-mode li[data-task=d] > p > input:checked::after {
display: none;
}

body.flexcyon-flex-max-mode input[data-task=l]:checked, body.flexcyon-flex-max-mode li[data-task=l] > input:checked, body.flexcyon-flex-max-mode li[data-task=l] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-red);
border: none;
clip-path: polygon(30% 0%, 50% 15%, 70% 0%, 90% 10%, 100% 35%, 80% 70%, 50% 100%, 20% 70%, 0% 35%, 10% 10%);
}

body.flexcyon-flex-max-mode input[data-task=l]:checked::after, body.flexcyon-flex-max-mode li[data-task=l] > input:checked::after, body.flexcyon-flex-max-mode li[data-task=l] > p > input:checked::after {
display: none;
}

body.flexcyon-flex-max-mode div.side-dock-actions {
opacity: var(--dimmed);
scale: var(--upsize);
}

body.flexcyon-flex-max-mode div.side-dock-actions:hover {
opacity: 1;
}

body.flexcyon-flex-max-mode div.side-dock-actions :hover {
scale: var(--expand);
}

body.flexcyon-flex-max-mode div.side-dock-actions :nth-of-type(8n + 0):hover {
color: var(--color-purple);
}

body.flexcyon-flex-max-mode div.side-dock-actions :nth-of-type(8n + 1):hover {
color: var(--color-cyan);
}

body.flexcyon-flex-max-mode div.side-dock-actions :nth-of-type(8n + 2):hover {
color: var(--color-blue);
}

body.flexcyon-flex-max-mode div.side-dock-actions :nth-of-type(8n + 3):hover {
color: var(--color-pink);
}

body.flexcyon-flex-max-mode div.side-dock-actions :nth-of-type(8n + 4):hover {
color: var(--color-green);
}

body.flexcyon-flex-max-mode div.side-dock-actions :nth-of-type(8n + 5):hover {
color: var(--color-yellow);
}

body.flexcyon-flex-max-mode div.side-dock-actions :nth-of-type(8n + 6):hover {
color: var(--color-orange);
}

body.flexcyon-flex-max-mode div.side-dock-actions :nth-of-type(8n + 7):hover {
color: var(--color-red);
}

body.flexcyon-flex-max-mode [aria-label^=Uninstall] {
color: rgb(var(--color-red-rgb), 0.9);
}

body.flexcyon-flex-max-mode [aria-label^=Options] {
color: rgb(var(--color-blue-rgb), 0.9);
}

body.flexcyon-flex-max-mode [aria-label^="Customise this command"], body.flexcyon-flex-max-mode [aria-label^="Customize this command"], body.flexcyon-flex-max-mode [aria-label^=Hotkeys], body.flexcyon-flex-max-mode [aria-label^="Open snippets folder"], body.flexcyon-flex-max-mode [aria-label^="Open plugins folder"] {
color: rgb(var(--color-green-rgb), 0.9);
}

body.flexcyon-flex-max-mode [aria-label^="Donate to support"] {
color: rgb(var(--color-pink-rgb), 0.9);
}

body.flexcyon-flex-max-mode [aria-label^="Reload plugins"], body.flexcyon-flex-max-mode [aria-label^="Reload snippets"] {
color: rgb(var(--color-cyan-rgb), 0.9);
}

body.flexcyon-flex-max-mode [aria-label^="Restore default"] {
color: rgb(var(--color-purple-rgb), 0.9);
}

body.flexcyon-flex-max-mode .titlebar-button.mod-minimize:hover {
color: var(--color-cyan);
}

body.flexcyon-flex-max-mode .titlebar-button.mod-maximize:hover {
color: var(--color-blue);
}

body.flexcyon-flex-max-mode .titlebar-button.mod-close:hover {
color: var(--text-normal);
}

body.flexcyon-flex-max-mode .titlebar-button {
opacity: var(--dimmed);
}

body.flexcyon-flex-max-mode .titlebar-button:hover {
opacity: unset;
scale: var(--expand);
}

body.flexcyon-flex-max-mode {
--scrollbar-bg: transparent;
}

body.flexcyon-flex-max-mode div.community-modal-search-results-wrapper ::-webkit-scrollbar-thumb, body.flexcyon-flex-max-mode div.modal.mod-settings .vertical-tab-header ::-webkit-scrollbar-thumb, body.flexcyon-flex-max-mode div.modal-content.vertical-tabs-container ::-webkit-scrollbar-thumb {
display: none;
}

body.flexcyon-flex-max-mode .workspace-split.mod-sidedock .workspace-tab-header.is-active {
aspect-ratio: 0.8660254038;
clip-path: polygon(-50% 50%, 50% 100%, 150% 50%, 50% 0);
}

body.flexcyon-flex-max-mode .workspace-split.mod-sidedock .workspace-tab-header.is-active .workspace-tab-header-inner {
border-block-end: none;
}

body.flexcyon-flex-max-mode .view-actions, body.flexcyon-flex-max-mode .view-header-left .view-header-nav-buttons {
z-index: 10;
background-color: var(--color-base-20);
border: 1px solid var(--color-base-20);
border-radius: var(--flexcyon-callout-radix);
opacity: 1;
}

body.flexcyon-flex-max-mode .view-actions button, body.flexcyon-flex-max-mode .view-header-left .view-header-nav-buttons button {
border-radius: var(--flexcyon-callout-radix);
}

body.flexcyon-flex-max-mode .view-actions {
padding: 4px 2px;
margin-block-start: 8px;
}

body.flexcyon-flex-max-mode .view-actions button {
border-radius: var(--flexcyon-callout-radix);
}

body.flexcyon-flex-max-mode .nav-files-container > div > div div[data-path$=".md"] > div.nav-file-tag, body.flexcyon-flex-max-mode .nav-folder:not(.is-collapsed) > div > div div[data-path$=".md"] > div.nav-file-tag {
display: none;
}

body.flexcyon-flex-max-mode .nav-files-container > div > div div[data-path$=".md"]::after, body.flexcyon-flex-max-mode .nav-folder:not(.is-collapsed) > div > div div[data-path$=".md"]::after {
content: ".md";
opacity: var(--dimmed);
}

body.flexcyon-flex-max-mode .nav-files-container > div > div div:not([data-path$=".md"]) > div.nav-file-tag, body.flexcyon-flex-max-mode .nav-folder:not(.is-collapsed) > div > div div:not([data-path$=".md"]) > div.nav-file-tag {
padding: unset;
margin: unset;
font-size: var(--flexcyon-exp-dimmed-nav-size);
font-weight: unset;
color: var(--text-muted);
text-transform: lowercase;
opacity: var(--dimmed);
}

body.flexcyon-flex-max-mode .nav-files-container > div > div div:not([data-path$=".md"]) > div.nav-file-tag::before, body.flexcyon-flex-max-mode .nav-folder:not(.is-collapsed) > div > div div:not([data-path$=".md"]) > div.nav-file-tag::before {
content: ".";
}

body.flexcyon-flex-max-mode .tree-item-inner {
overflow: visible;
text-overflow: clip;
white-space: collapse;
}

body.flexcyon-flex-max-mode .tree-item-self.is-active .tree-item-inner::before, body.flexcyon-flex-max-mode .vertical-tab-nav-item.is-active::before {
padding-inline-end: 4px;
content: var(--flexcyon-active-indicator);
}

body.flexcyon-flex-max-mode .markdown-source-view.mod-cm6 .cm-panels.cm-panels-bottom {
padding-block-start: 6px;
border-block-start: unset;
}

body.flexcyon-flex-max-mode .markdown-source-view.mod-cm6 .cm-editor .cm-scroller:not(.cm-vimMode) .cm-sizer:has(+ .cm-vimCursorLayer)::before {
position: fixed;
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: var(--flexcyon-vim-left-positioning);
z-index: 2;
block-size: 30px;
padding: 0 8px;
font-family: var(--font-interface);
font-size: var(--cm-font-size);
color: var(--text-muted);
content: var(--flexcyon-vim-insert-text);
background-color: var(--cm-panel-bg);
}

body.flexcyon-flex-max-mode .markdown-source-view.mod-cm6 .cm-editor .cm-scroller.cm-vimMode:not(:has(+ .cm-panels)) .cm-sizer:has(+ .cm-vimCursorLayer)::before {
position: fixed;
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: var(--flexcyon-vim-left-positioning);
z-index: 2;
block-size: 30px;
padding: 0 8px;
font-family: var(--font-interface);
font-size: var(--cm-font-size);
color: var(--text-muted);
content: var(--flexcyon-vim-normal-text);
background-color: var(--cm-panel-bg);
}

body.flexcyon-flex-max-mode .cm-panels .cm-panel div div:not(.cm-vim-message) span:first-child {
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: 75px;
}

body.flexcyon-flex-max-mode .cm-panels .cm-panel {
padding-block-start: 5px;
font-weight: 500;
background-color: var(--color-base-00);
}

body.flexcyon-flex-max-mode .cm-panels input {
z-index: 16;
font-size: 0.9rem;
transform: translateY(-4px);
}

body.flexcyon-flex-max-mode .cm-editor > .cm-scroller + .cm-panels .cm-panel div div:not(.cm-vim-message)::before {
inset-block-end: var(--flexcyon-vim-bottom-positioning);
padding-inline-end: 4px;
font-family: var(--font-interface);
font-size: var(--cm-font-size);
content: var(--flexcyon-vim-command-text);
}

body.flexcyon-flex-max-mode .cm-editor > .cm-scroller + .cm-panels .cm-panel div {
color: var(--text-muted);
}

body.flexcyon-flex-max-mode div.cm-vim-message {
font-weight: bold;
color: var(--color-red) !important;
}

body.flexcyon-flex-max-mode .plugin-editor-status .status-bar-item-icon svg {
display: none;
}

body.flexcyon-flex-max-mode .plugin-editor-status::before {
font-weight: bold;
}

body.flexcyon-flex-max-mode .plugin-editor-status[aria-label=Reading]::before {
content: var(--flexcyon-status-reading-text);
}

body.flexcyon-flex-max-mode .plugin-editor-status[aria-label="Source mode"]::before {
content: var(--flexcyon-status-source-text);
}

body.flexcyon-flex-max-mode .plugin-editor-status[aria-label="Live Preview"]::before {
content: var(--flexcyon-status-live-text);
}

body.flexcyon-flex-max-mode .status-bar:hover::before {
transform: translateY(var(--flexcyon-status-hide-trigger-translation));
transition: transform var(--flexcyon-status-hide-hover-duration) var(--flexcyon-status-hide-hover-function);
}

body.flexcyon-flex-max-mode .status-bar:hover {
transform: unset;
transition: transform var(--flexcyon-status-hide-hover-duration) var(--flexcyon-status-hide-hover-function);
}

body.flexcyon-flex-max-mode:not(:has(.mod-active > [data-type=empty])) .status-bar::before {
inset-inline-end: 28px;
}

body.flexcyon-flex-max-mode .status-bar {
gap: 0;
padding-inline-end: 1vw;
background-color: transparent;
border: transparent;
scale: var(--expand);
}

body.flexcyon-flex-max-mode .status-bar::before {
inset-inline-end: 0;
}

body.flexcyon-flex-max-mode .status-bar .status-bar-item .status-bar-item-icon {
transform: translateX(-1px);
}

body.flexcyon-flex-max-mode .status-bar .status-bar-item[style="display: none;"] + .status-bar-item {
padding-inline-start: 12px;
border-start-start-radius: 16px;
border-end-start-radius: 16px;
}

body.flexcyon-flex-max-mode .status-bar .status-bar-item {
padding: 0;
padding-inline-start: 2px;
}

body.flexcyon-flex-max-mode .status-bar .status-bar-item::after {
position: relative;
inline-size: inherit;
block-size: inherit;
padding: 4px;
color: transparent;
content: "e";
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 70% 50%);
}

body.flexcyon-flex-max-mode .status-bar :first-child:empty, body.flexcyon-flex-max-mode .status-bar :first-child.status-bar-item {
padding-inline-start: 6px;
border-start-start-radius: 16px;
border-end-start-radius: 16px;
}

body.flexcyon-flex-max-mode .status-bar :last-child.status-bar-item, body.flexcyon-flex-max-mode .status-bar :nth-last-child(2).status-bar-item {
margin-inline-end: 1.25vw;
border-start-end-radius: 16px;
border-end-end-radius: 16px;
}

body.flexcyon-flex-max-mode .status-bar :last-child.status-bar-item *, body.flexcyon-flex-max-mode .status-bar :nth-last-child(2).status-bar-item * {
margin-inline-end: 0;
}

body.flexcyon-flex-max-mode .status-bar :nth-child(2n+1).status-bar-item {
background-color: var(--color-base-20);
}

body.flexcyon-flex-max-mode .status-bar :nth-child(2n+1).status-bar-item::after {
background-color: var(--color-base-05);
}

body.flexcyon-flex-max-mode .status-bar :nth-child(2n).status-bar-item {
background-color: var(--color-base-05);
}

body.flexcyon-flex-max-mode .status-bar :nth-child(2n).status-bar-item::after {
background-color: var(--color-base-20);
}

body.flexcyon-flex-max-mode .status-bar :nth-last-child(2).status-bar-item::after, body.flexcyon-flex-max-mode .status-bar :last-child.status-bar-item, body.flexcyon-flex-max-mode .status-bar :last-child.status-bar-item::after {
background-color: transparent;
}

body.flexcyon-flex-max-mode div.empty-state {
content-visibility: auto;
}

body.flexcyon-flex-max-mode div.empty-state-title {
display: unset;
}

body.flexcyon-flex-max-mode div.empty-state-container {
max-inline-size: var(--flexcyon-ascii-max-width);
max-block-size: unset;
scale: var(--flexcyon-ascii-scaling-factor);
}

body.flexcyon-flex-max-mode .reveal .pause-overlay::before, body.flexcyon-flex-max-mode div.empty-state-container::before {
display: inline;
font-family: var(--flexcyon-new-tab-font-group);
font-size: min(5vw - 3.25px, var(--flexcyon-ascii-max-font-size));
font-weight: bold;
line-height: var(--flexcyon-ascii-line-height);
text-align: var(--flexcyon-ascii-alignment);
white-space: pre;
content: var(--flexcyon-ascii-art);
background: var(--flexcyon-new-tab-bg-wrapper);
background-clip: text;
-webkit-text-fill-color: transparent;
}

body.flexcyon-flex-max-mode .reveal .pause-overlay::before {
position: absolute;
inset: 0 0 40px 36px;
max-inline-size: max-content;
max-block-size: max-content;
margin: auto;
line-height: calc(var(--flexcyon-ascii-line-height) + 0.25);
}

body.is-mobile.flexcyon-flex-max-mode .workspace-leaf > div > div > div.empty-state > div.empty-state-container::before {
margin-block-end: 1rem;
font-size: min(3.5vw - 3px, var(--flexcyon-ascii-max-font-size));
line-height: 0.8;
}

body.flexcyon-flex-max-mode .workspace-leaf > div > div > div.empty-state > div.empty-state-title {
display: none;
}

body.flexcyon-flex-max-mode .el-hr::before, body.flexcyon-flex-max-mode .hr::before {
position: absolute;
inset-inline: 0px 0;
display: flex;
justify-content: center;
inline-size: fit-content;
max-inline-size: 85%;
padding: 0 var(--flexcyon-cust-hr-str-horiz-padding);
margin: 0 auto;
font-size: var(--flexcyon-cust-hr-str-font-size);
font-style: italic;
color: var(--hr-color);
content: var(--flexcyon-cust-hr-str);
background-color: var(--background-primary);
}

body.flexcyon-flex-max-mode .el-hr::before {
transform: translateY(-12px);
}

body.flexcyon-flex-max-mode .markdown-embed:has(.el-hr) .markdown-preview-sizer {
padding-block-end: 12px !important;
}

body.flexcyon-flex-max-mode .mod-stacked .workspace-leaf.mod-active .workspace-leaf-content:not([data-type=file-explorer], [data-type=undefined]), body.flexcyon-flex-max-mode .view-content {
animation: fade-in var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}

body.flexcyon-flex-max-mode .modal .community-modal-info, body.flexcyon-flex-max-mode .modal .vertical-tab-content, body.flexcyon-flex-max-mode .modal, body.flexcyon-flex-max-mode .style-settings-container, body.flexcyon-flex-max-mode .prompt {
animation: slide-in-left var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}

body.flexcyon-flex-max-mode:not([class*=iconic]) div.setting-item-control div.checkbox-container {
font-weight: bolder;
background-color: var(--color-base-05);
box-shadow: unset;
}

body.flexcyon-flex-max-mode:not([class*=iconic]) div.setting-item-control div.checkbox-container::after {
inline-size: fit-content;
block-size: fit-content;
color: var(--color-red);
content: ":(";
background-color: inherit;
border-radius: 25%;
box-shadow: unset;
transform: translateY(-10%);
}

body.flexcyon-flex-max-mode:not([class*=iconic]) div.setting-item-control div.checkbox-container.is-enabled::after {
color: var(--color-green);
content: ":)";
transform: translate(16px, -10%);
}

body.flexcyon-flex-max-mode:not([class*=iconic]) div.setting-item-control input.slider {
border-radius: unset;
}

body.flexcyon-flex-max-mode div.oz-nav-file-title div svg {
display: none;
}

body.flexcyon-flex-max-mode div.oz-nav-file-title {
padding: var(--flexcyon-tree-item-verti-padding) var(--flexcyon-tree-item-horiz-padding);
}

body.flexcyon-flex-max-mode div.oz-nav-file-title .oz-nav-file-title-content {
inline-size: unset;
}

body.flexcyon-flex-max-mode div.oz-nav-file-title span.oz-nav-file-tag {
padding: unset;
margin: unset;
font-size: var(--font-ui-small);
font-weight: unset;
color: var(--oz-fta-file-pane-file-name-color);
text-transform: lowercase;
letter-spacing: unset;
background-color: unset;
border: unset;
opacity: var(--dimmed);
}

body.flexcyon-flex-max-mode div.oz-nav-file-title span.oz-nav-file-tag::before {
content: ".";
}

body.flexcyon-flex-max-mode div.oz-nav-file-title[data-path$=".md"] div svg {
display: none;
}

body.flexcyon-flex-max-mode div.oz-nav-file-title[data-path$=".md"] span.oz-nav-file-tag {
display: none;
}

body.flexcyon-flex-max-mode div.oz-nav-file-title[data-path$=".md"] div::after {
font-size: var(--font-ui-small);
content: ".md";
opacity: var(--dimmed);
}`,
      dark: `body.flexcyon-flex-max-mode .hr::before {
background-color: var(--color-base-10);
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected {
background-color: var(--background-primary);
border: none;
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected span.flair.mod-pop {
background-color: rgb(var(--color-yellow-rgb), var(--dimmed));
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected .community-item-name {
font-weight: bold;
color: var(--color-red);
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected .community-item-author {
font-weight: bold;
color: var(--color-blue);
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected .community-item-downloads {
font-weight: bold;
color: var(--color-pink);
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected .community-item-updated {
font-weight: bold;
color: var(--color-purple);
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected .community-item-desc {
color: var(--text-normal);
}`,
      light: `body.flexcyon-flex-max-mode .hr::before {
background-color: var(--color-base-00);
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected {
background-color: var(--background-primary);
border: none;
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected span.flair.mod-pop {
background-color: rgb(var(--color-blue-rgb), var(--dimmed));
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected .community-item-name {
font-weight: bold;
color: var(--color-red);
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected .community-item-author {
font-weight: bold;
color: var(--color-yellow);
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected .community-item-downloads {
font-weight: bold;
color: var(--color-purple);
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected .community-item-updated {
font-weight: bold;
color: var(--color-green);
}

body.flexcyon-flex-max-mode:not(.is-phone) .community-item.is-selected .community-item-desc {
color: var(--text-normal);
}

body.flexcyon-flex-max-mode:not([class*=iconic]) div.setting-item-control div.checkbox-container::after {
font-weight: bold;
filter: saturate(2.5);
}`,
    },
    "flexcyon-typewriter-mode": {
      general: `body.flexcyon-typewriter-mode .cm-line:not(.cm-active, .HyperMD-codeblock) {
opacity: var(--flexcyon-typewriter-mode-opacity);
}`,
    },
    "flexcyon-reverse-mode": {
      general: `body.flexcyon-reverse-mode .workspace-tabs {
flex-direction: column-reverse;
}

body.flexcyon-reverse-mode .status-bar {
inset-block-end: 40px;
--flexcyon-status-hide-trigger-translation: 80px;
}

body.flexcyon-reverse-mode .workspace-leaf-content {
flex-direction: column-reverse;
}

body.flexcyon-reverse-mode .workspace-sidedock-vault-profile {
flex-direction: row-reverse;
}`,
    },
    "flexcyon-editor-writing": {
      general: `.flexcyon-editor-writing .cm-line {
margin-block-end: calc(1.25 * var(--p-spacing));
text-indent: var(--flexcyon-editor-writing-indentation);
overflow-wrap: break-word;
white-space: initial;
}`,
    },
    "flexcyon-revert-nav-item-alignment": {
      general: `body.is-mobile.is-phone .nav-buttons-container {
inset-block: unset;
}

body.is-mobile.is-phone .nav-header ~ div:last-child {
padding-block-start: 60px;
}

body.is-mobile .nav-files-container {
overflow-y: scroll;
overscroll-behavior: contain;
}

body.is-mobile .workspace-drawer-header {
padding-block-end: 8px;
}

body.is-mobile .workspace-drawer-inner {
flex-direction: column-reverse;
}

body.is-mobile .workspace-leaf-content {
overflow-y: scroll;
overscroll-behavior: contain;
}

body.is-mobile .workspace-leaf {
overflow-y: scroll;
overscroll-behavior: contain;
}

body.is-mobile .workspace-drawer-active-tab-content > * {
block-size: unset;
}

body.is-mobile .workspace-drawer-active-tab-container {
flex-direction: column-reverse;
gap: 2px;
}`,
    },
    "flexcyon-ext-colors-enabled": {
      general: `body.flexcyon-ext-colors-enabled {
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
}`,
    },
    "flexcyon-coloured-headings": {
      general: `body.flexcyon-coloured-headings {
--h1-color: var(--flexcyon-h1-color);
--h2-color: var(--flexcyon-h2-color);
--h3-color: var(--flexcyon-h3-color);
--h4-color: var(--flexcyon-h4-color);
--h5-color: var(--flexcyon-h5-color);
--h6-color: var(--flexcyon-h6-color);
}

body.flexcyon-coloured-headings .print :is(h1, h2, h3, h4, h5, h6) {
color: var(--text-normal);
}

body.flexcyon-coloured-headings .print :is(h1, h2, h3, h4, h5, h6) {
color: var(--text-normal);
}`,
    },
    "flexcyon-headings-glow-enabled": {
      general: `body.flexcyon-headings-glow-enabled h1, body.flexcyon-headings-glow-enabled .cm-header-1 {
text-shadow: 2px 2px 4px var(--h1-color);
}

body.flexcyon-headings-glow-enabled h2, body.flexcyon-headings-glow-enabled .cm-header-2 {
text-shadow: 1.75px 1.75px 3.5px var(--h2-color);
}

body.flexcyon-headings-glow-enabled h3, body.flexcyon-headings-glow-enabled .cm-header-3 {
text-shadow: 1.5px 1.5px 3px var(--h3-color);
}

body.flexcyon-headings-glow-enabled h4, body.flexcyon-headings-glow-enabled .cm-header-4 {
text-shadow: 1.25px 1.25px 2.5px var(--h4-color);
}

body.flexcyon-headings-glow-enabled h5, body.flexcyon-headings-glow-enabled .cm-header-5 {
text-shadow: 1px 1px 2px var(--h5-color);
}

body.flexcyon-headings-glow-enabled h6, body.flexcyon-headings-glow-enabled .cm-header-6 {
text-shadow: 0.75px 0.75px 1.5px var(--h6-color);
}

body.flexcyon-headings-glow-enabled .cm-formatting-header {
text-shadow: none;
}`,
    },
    "flexcyon-headings-indicator-h1": {
      general: `.flexcyon-headings-indicator-h1 .workspace-leaf-content[data-type=markdown] h1:not(:hover)::before, .flexcyon-headings-indicator-h1 .workspace-leaf-content[data-type=markdown] .HyperMD-header-1::before {
position: relative;
padding-inline-end: 8px;
font-size: var(--font-ui-medium);
color: var(--h1-color);
content: "h1";
opacity: calc(var(--dimmed) + 0.25);
}

.flexcyon-headings-indicator-h1 .workspace-leaf-content[data-type=markdown] h1:not(:hover) svg, .flexcyon-headings-indicator-h1 .workspace-leaf-content[data-type=markdown] .HyperMD-header-1 svg {
transform: translateX(-28px);
}`,
    },
    "flexcyon-h1-underline-enabled": {
      general: `body.flexcyon-h1-underline-enabled .HyperMD-header-1, body.flexcyon-h1-underline-enabled h1 {
border-block-end: calc((var(--h1-weight) - 200) / 100 * 1px) solid var(--h1-color);
}`,
    },
    "flexcyon-headings-indicator-h2": {
      general: `.flexcyon-headings-indicator-h2 .workspace-leaf-content[data-type=markdown] h2:not(:hover)::before, .flexcyon-headings-indicator-h2 .workspace-leaf-content[data-type=markdown] .HyperMD-header-2::before {
position: relative;
padding-inline-end: 8px;
font-size: var(--font-ui-medium);
color: var(--h2-color);
content: "h2";
opacity: calc(var(--dimmed) + 0.25);
}

.flexcyon-headings-indicator-h2 .workspace-leaf-content[data-type=markdown] h2:not(:hover) svg, .flexcyon-headings-indicator-h2 .workspace-leaf-content[data-type=markdown] .HyperMD-header-2 svg {
transform: translateX(-28px);
}`,
    },
    "flexcyon-h2-underline-enabled": {
      general: `body.flexcyon-h2-underline-enabled .HyperMD-header-2, body.flexcyon-h2-underline-enabled h2 {
border-block-end: calc((var(--h2-weight) - 200) / 100 * 1px) solid var(--h2-color);
}`,
    },
    "flexcyon-headings-indicator-h3": {
      general: `.flexcyon-headings-indicator-h3 .workspace-leaf-content[data-type=markdown] h3:not(:hover)::before, .flexcyon-headings-indicator-h3 .workspace-leaf-content[data-type=markdown] .HyperMD-header-3::before {
position: relative;
padding-inline-end: 8px;
font-size: var(--font-ui-medium);
color: var(--h3-color);
content: "h3";
opacity: calc(var(--dimmed) + 0.25);
}

.flexcyon-headings-indicator-h3 .workspace-leaf-content[data-type=markdown] h3:not(:hover) svg, .flexcyon-headings-indicator-h3 .workspace-leaf-content[data-type=markdown] .HyperMD-header-3 svg {
transform: translateX(-28px);
}`,
    },
    "flexcyon-h3-underline-enabled": {
      general: `body.flexcyon-h3-underline-enabled .HyperMD-header-3, body.flexcyon-h3-underline-enabled h3 {
border-block-end: calc((var(--h3-weight) - 200) / 100 * 1px) solid var(--h3-color);
}`,
    },
    "flexcyon-headings-indicator-h4": {
      general: `.flexcyon-headings-indicator-h4 .workspace-leaf-content[data-type=markdown] h4:not(:hover)::before, .flexcyon-headings-indicator-h4 .workspace-leaf-content[data-type=markdown] .HyperMD-header-4::before {
position: relative;
padding-inline-end: 8px;
font-size: var(--font-ui-medium);
color: var(--h4-color);
content: "h4";
opacity: calc(var(--dimmed) + 0.25);
}

.flexcyon-headings-indicator-h4 .workspace-leaf-content[data-type=markdown] h4:not(:hover) svg, .flexcyon-headings-indicator-h4 .workspace-leaf-content[data-type=markdown] .HyperMD-header-4 svg {
transform: translateX(-28px);
}`,
    },
    "flexcyon-h4-underline-enabled": {
      general: `body.flexcyon-h4-underline-enabled .HyperMD-header-4, body.flexcyon-h4-underline-enabled h4 {
border-block-end: calc((var(--h4-weight) - 200) / 100 * 1px) solid var(--h4-color);
}`,
    },
    "flexcyon-headings-indicator-h5": {
      general: `.flexcyon-headings-indicator-h5 .workspace-leaf-content[data-type=markdown] h5:not(:hover)::before, .flexcyon-headings-indicator-h5 .workspace-leaf-content[data-type=markdown] .HyperMD-header-5::before {
position: relative;
padding-inline-end: 8px;
font-size: var(--font-ui-medium);
color: var(--h5-color);
content: "h5";
opacity: calc(var(--dimmed) + 0.25);
}

.flexcyon-headings-indicator-h5 .workspace-leaf-content[data-type=markdown] h5:not(:hover) svg, .flexcyon-headings-indicator-h5 .workspace-leaf-content[data-type=markdown] .HyperMD-header-5 svg {
transform: translateX(-28px);
}`,
    },
    "flexcyon-h5-underline-enabled": {
      general: `body.flexcyon-h5-underline-enabled .HyperMD-header-5, body.flexcyon-h5-underline-enabled h5 {
border-block-end: calc((var(--h5-weight) - 200) / 100 * 1px) solid var(--h5-color);
}`,
    },
    "flexcyon-headings-indicator-h6": {
      general: `.flexcyon-headings-indicator-h6 .workspace-leaf-content[data-type=markdown] h6:not(:hover)::before, .flexcyon-headings-indicator-h6 .workspace-leaf-content[data-type=markdown] .HyperMD-header-6::before {
position: relative;
padding-inline-end: 8px;
font-size: var(--font-ui-medium);
color: var(--h6-color);
content: "h6";
opacity: calc(var(--dimmed) + 0.25);
}

.flexcyon-headings-indicator-h6 .workspace-leaf-content[data-type=markdown] h6:not(:hover) svg, .flexcyon-headings-indicator-h6 .workspace-leaf-content[data-type=markdown] .HyperMD-header-6 svg {
transform: translateX(-28px);
}`,
    },
    "flexcyon-h6-underline-enabled": {
      general: `body.flexcyon-h6-underline-enabled .HyperMD-header-6, body.flexcyon-h6-underline-enabled h6 {
border-block-end: calc((var(--h6-weight) - 200) / 100 * 1px) solid var(--h6-color);
}`,
    },
    "flexcyon-no-inline-title": {
      general: `body.flexcyon-no-inline-title .inline-title {
display: none;
}`,
    },
    "flexcyon-syntax-catppuccin": {
      general: `body.flexcyon-syntax-catppuccin {
--flexcyon-code-variable: var(--flexcyon-cyan);
--flexcyon-code-function: var(--flexcyon-yellow);
--flexcyon-code-operator: var(--flexcyon-blue);
--flexcyon-code-error: var(--flexcyon-red-salmon);
--flexcyon-code-keyword: var(--flexcyon-cyan);
--code-normal: var(--text-normal);
--code-comment: var(--text-faint);
--code-function: var(--flexcyon-code-function);
--code-important: var(--flexcyon-code-error);
--code-keyword: var(--flexcyon-code-keyword);
--code-property: var(--flexcyon-cyan);
--code-operator: var(--flexcyon-code-operator);
--code-punctuation: rgb(var(--color-red-rgb), var(--dimmed));
--code-string: var(--flexcyon-lime-green);
--code-tag: var(--flexcyon-base-grey-dark);
--code-value: var(--flexcyon-yellow);
}

body.flexcyon-syntax-catppuccin .cm-def {
color: var(--flexcyon-blue);
}`,
    },
    "flexcyon-syntax-lego": {
      general: `body.flexcyon-syntax-lego {
--flexcyon-code-variable: var(--text-normal);
--flexcyon-code-function: var(--text-accent);
--flexcyon-code-operator: var(--flexcyon-pink);
--flexcyon-code-error: var(--flexcyon-orange);
--flexcyon-code-keyword: var(--flexcyon-red-salmon);
--code-normal: var(--text-normal);
--code-comment: var(--text-faint);
--code-function: var(--flexcyon-code-function);
--code-important: var(--flexcyon-code-error);
--code-keyword: var(--flexcyon-code-keyword);
--code-property: var(--text-normal);
--code-operator: var(--flexcyon-code-operator);
--code-punctuation: var(--text-normal);
--code-string: var(--flexcyon-cyan);
--code-tag: var(--flexcyon-base-grey-dark);
--code-value: var(--text-normal);
}

body.flexcyon-syntax-lego .cm-def {
color: var(--flexcyon-blue);
}`,
    },
    "flexcyon-syntax-monochrome": {
      general: `body.flexcyon-syntax-monochrome {
--flexcyon-code-variable: var(--text-normal);
--flexcyon-code-function: var(--text-muted);
--flexcyon-code-operator: var(--text-normal);
--flexcyon-code-error: var(--text-muted);
--flexcyon-code-keyword: var(--text-normal);
--code-normal: var(--text-normal);
--code-comment: var(--text-faint);
--code-function: var(--flexcyon-code-function);
--code-important: var(--flexcyon-code-error);
--code-keyword: var(--flexcyon-code-keyword);
--code-property: var(--text-normal);
--code-operator: var(--flexcyon-code-operator);
--code-punctuation: var(--text-normal);
--code-string: var(--text-normal);
--code-tag: var(--flexcyon-base-grey-dark);
--code-value: var(--text-normal);
}

body.flexcyon-syntax-monochrome .cm-def {
color: var(--text-normal);
}`,
    },
    "flexcyon-codeblock-prefix-ext": {
      general: `body.flexcyon-codeblock-prefix-ext .HyperMD-codeblock span.code-block-flair::before {
content: var(--flexcyon-code-file-ext-prefix);
}`,
    },
    "flexcyon-file-exp-dimmed-file-exts-enabled": {
      general: `body.flexcyon-file-exp-dimmed-file-exts-enabled .nav-files-container > div > div div[data-path$=".md"] > div.nav-file-tag, body.flexcyon-file-exp-dimmed-file-exts-enabled .nav-folder:not(.is-collapsed) > div > div div[data-path$=".md"] > div.nav-file-tag {
display: none;
}

body.flexcyon-file-exp-dimmed-file-exts-enabled .nav-files-container > div > div div[data-path$=".md"]::after, body.flexcyon-file-exp-dimmed-file-exts-enabled .nav-folder:not(.is-collapsed) > div > div div[data-path$=".md"]::after {
content: ".md";
opacity: var(--dimmed);
}

body.flexcyon-file-exp-dimmed-file-exts-enabled .nav-files-container > div > div div:not([data-path$=".md"]) > div.nav-file-tag, body.flexcyon-file-exp-dimmed-file-exts-enabled .nav-folder:not(.is-collapsed) > div > div div:not([data-path$=".md"]) > div.nav-file-tag {
padding: unset;
margin: unset;
font-size: var(--flexcyon-exp-dimmed-nav-size);
font-weight: unset;
color: var(--text-muted);
text-transform: lowercase;
opacity: var(--dimmed);
}

body.flexcyon-file-exp-dimmed-file-exts-enabled .nav-files-container > div > div div:not([data-path$=".md"]) > div.nav-file-tag::before, body.flexcyon-file-exp-dimmed-file-exts-enabled .nav-folder:not(.is-collapsed) > div > div div:not([data-path$=".md"]) > div.nav-file-tag::before {
content: ".";
}`,
    },
    "flexcyon-enable-active-indicator": {
      general: `body.flexcyon-enable-active-indicator .tree-item-self.is-active .tree-item-inner::before, body.flexcyon-enable-active-indicator .vertical-tab-nav-item.is-active::before {
padding-inline-end: 4px;
content: var(--flexcyon-active-indicator);
}`,
    },
    "flexcyon-vertical-nav": {
      general: `body.flexcyon-stylised-pins.flexcyon-vertical-nav :is(.mod-left-split, .mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header-inner-icon:has(+ div + div.workspace-tab-header-status-container > .mod-pinned) {
transform: translateY(8px);
}

body.flexcyon-stylised-pins.flexcyon-vertical-nav :is(.mod-left-split, .mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header-inner-icon + div + div.workspace-tab-header-status-container .mod-pinned {
--icon-size: var(--icon-xs);
color: var(--color-accent-2);
transform: translate(5px, -22px);
}

body.flexcyon-vertical-nav .workspace.is-right-sidedock-open .mod-right-split .mod-top .view-content {
padding-block-start: 40px;
}

body:not(.show-ribbon).flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs div.workspace-tab-header-container-inner, body:not(.show-ribbon).flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs div.workspace-tab-header-container-inner {
margin-block-start: 48px;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs {
display: flex;
flex-direction: row;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs div, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs div {
flex-direction: inherit;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs div div.sidebar-toggle-button.mod-left, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs div div.sidebar-toggle-button.mod-left {
position: absolute;
margin-inline-start: 1px;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs div.workspace-leaf-content[data-type*=search], body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs div.workspace-leaf-content[data-type*=search] {
flex-direction: column;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs div.workspace-leaf-content[data-type*=undefined]:has(.file-tree-plugin-view), body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs div.workspace-leaf-content[data-type*=undefined]:has(.file-tree-plugin-view) {
flex-direction: column;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs .oz-explorer-container .oz-file-tree-header-wrapper, body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs .oz-folders-tree-wrapper, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs .oz-explorer-container .oz-file-tree-header-wrapper, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs .oz-folders-tree-wrapper {
flex-direction: row;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs .fc-header-toolbar, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs .fc-header-toolbar {
gap: 0;
padding: 0;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs div.workspace-leaf-content[data-type*=calendar], body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs div.workspace-leaf-content[data-type*=calendar] {
flex-direction: column;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs div.workspace-leaf-content[data-type*=calendar] .fc-header-toolbar .fc-button-group, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs div.workspace-leaf-content[data-type*=calendar] .fc-header-toolbar .fc-button-group {
flex-direction: row;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs .nav-header, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs .nav-header {
inline-size: min-content;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs .metadata-properties, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs .metadata-properties {
flex-direction: column;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs .metadata-property, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs .metadata-property {
flex-direction: column;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs .metadata-property div, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs .metadata-property div {
flex-direction: row;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs .metadata-property .metadata-property-key, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs .metadata-property .metadata-property-key {
inline-size: 100%;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs .nav-buttons-container, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs .nav-buttons-container {
gap: 8px;
margin-block-start: 8px;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs .workspace-tab-header-container-inner, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs .workspace-tab-header-container-inner {
flex-direction: column;
gap: 8px;
block-size: min-content;
margin-block-start: 8px;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs .workspace-leaf-content, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs .workspace-leaf-content {
inline-size: 100%;
}

body.flexcyon-vertical-nav .mod-sidedock.mod-right-split .workspace-tabs .workspace-leaf-content .nav-header + div, body.flexcyon-vertical-nav .mod-sidedock.mod-left-split .workspace-tabs .workspace-leaf-content .nav-header + div {
flex-direction: row;
margin-block-start: 12px;
}

body.is-hidden-frameless:not(.is-fullscreen) .is-right-sidedock-open .workspace-tabs.mod-top-right-space .workspace-tab-header-container {
padding-inline-end: 0;
}`,
    },
    "flexcyon-rainbow-folders": {
      general: `body.flexcyon-rainbow-folders .tree-item-children {
border-inline-start: none;
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 0) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 0) .nav-folder-title {
color: var(--color-purple);
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 0) .nav-folder .nav-folder-title {
color: rgb(var(--color-purple-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 0) .nav-folder .nav-folder-title .collapse-icon svg {
color: rgb(var(--color-purple-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 1) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 1) .nav-folder-title {
color: var(--color-cyan);
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 1) .nav-folder .nav-folder-title {
color: rgb(var(--color-cyan-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 1) .nav-folder .nav-folder-title .collapse-icon svg {
color: rgb(var(--color-cyan-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 2) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 2) .nav-folder-title {
color: var(--color-blue);
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 2) .nav-folder .nav-folder-title {
color: rgb(var(--color-blue-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 2) .nav-folder .nav-folder-title .collapse-icon svg {
color: rgb(var(--color-blue-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 3) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 3) .nav-folder-title {
color: var(--color-pink);
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 3) .nav-folder .nav-folder-title {
color: rgb(var(--color-pink-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 3) .nav-folder .nav-folder-title .collapse-icon svg {
color: rgb(var(--color-pink-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 4) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 4) .nav-folder-title {
color: var(--color-green);
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 4) .nav-folder .nav-folder-title {
color: rgb(var(--color-green-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 4) .nav-folder .nav-folder-title .collapse-icon svg {
color: rgb(var(--color-green-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 5) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 5) .nav-folder-title {
color: var(--color-yellow);
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 5) .nav-folder .nav-folder-title {
color: rgb(var(--color-yellow-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 5) .nav-folder .nav-folder-title .collapse-icon svg {
color: rgb(var(--color-yellow-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 6) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 6) .nav-folder-title {
color: var(--color-orange);
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 6) .nav-folder .nav-folder-title {
color: rgb(var(--color-orange-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 6) .nav-folder .nav-folder-title .collapse-icon svg {
color: rgb(var(--color-orange-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 7) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 7) .nav-folder-title {
color: var(--color-red);
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 7) .nav-folder .nav-folder-title {
color: rgb(var(--color-red-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders .nav-files-container div .nav-folder:nth-of-type(8n + 7) .nav-folder .nav-folder-title .collapse-icon svg {
color: rgb(var(--color-red-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 0) .nav-folder-title .collapse-icon svg, body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 0) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-purple);
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 0) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-purple-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 0) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 1) .nav-folder-title .collapse-icon svg, body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 1) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-cyan);
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 1) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-cyan-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 1) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 2) .nav-folder-title .collapse-icon svg, body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 2) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-blue);
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 2) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-blue-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 2) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 3) .nav-folder-title .collapse-icon svg, body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 3) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-pink);
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 3) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-pink-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 3) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 4) .nav-folder-title .collapse-icon svg, body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 4) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-green);
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 4) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-green-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 4) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 5) .nav-folder-title .collapse-icon svg, body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 5) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-yellow);
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 5) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-yellow-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 5) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 6) .nav-folder-title .collapse-icon svg, body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 6) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-orange);
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 6) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-orange-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 6) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 7) .nav-folder-title .collapse-icon svg, body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 7) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-red);
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 7) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-red-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 7) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}`,
    },
    "flexcyon-alt-folder-style": {
      general: `body.flexcyon-alt-folder-style .nav-folder .collapse-icon svg {
color: var(--color-blue);
}

body.flexcyon-alt-folder-style .nav-folder .nav-folder-title {
color: var(--color-blue);
}

body.flexcyon-alt-folder-style .nav-folder.is-collapsed .nav-folder-title {
color: unset;
}

body.flexcyon-alt-folder-style .nav-folder.is-collapsed .nav-folder-title-content {
color: unset;
}

body.flexcyon-alt-folder-style .nav-folder.is-collapsed .collapse-icon svg {
color: unset;
}

body.flexcyon-alt-folder-style .nav-file-title.is-active .nav-file-title-content {
font-weight: bold;
transform: all ease-in-out 350ms;
}`,
    },
    "flexcyon-md-file-tree-style": {
      general: `body.flexcyon-md-file-tree-style .nav-file, body.flexcyon-md-file-tree-style .nav-folder, body.flexcyon-md-file-tree-style .nav-folder-children {
position: relative;
padding-inline-start: 2px;
}

body.flexcyon-md-file-tree-style .nav-file::before, body.flexcyon-md-file-tree-style .nav-folder-children::before {
position: absolute;
content: "";
background: var(--nav-collapse-icon-color);
}

body.flexcyon-md-file-tree-style .tree-item.nav-file::before, body.flexcyon-md-file-tree-style .tree-item.nav-folder::before {
inset-block-start: 50%;
inline-size: 20px;
block-size: 1px;
margin-inline-start: -3px;
transform: translate(0, -50%);
}

body.flexcyon-md-file-tree-style .tree-item-children.nav-folder-children:not(:has(.nav-file))::before {
inset-block-end: 6px;
}

body.flexcyon-md-file-tree-style .tree-item-children.nav-folder-children {
border-inline-start-width: 0;
}

body.flexcyon-md-file-tree-style .tree-item-children.nav-folder-children::before {
inset-block: 0 12px;
inset-inline-start: 0;
inline-size: 1px;
}

body.flexcyon-md-file-tree-style .nav-files-container > div > .tree-item.nav-file::before, body.flexcyon-md-file-tree-style .nav-files-container > div > .tree-item.nav-folder::before {
content: none;
}`,
    },
    "flexcyon-is-bg-rainbow": {
      general: `body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 0) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 0) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-purple);
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 0) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-purple-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 0) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 1) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 1) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-cyan);
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 1) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-cyan-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 1) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 2) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 2) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-blue);
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 2) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-blue-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 2) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 3) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 3) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-pink);
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 3) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-pink-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 3) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 4) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 4) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-green);
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 4) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-green-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 4) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 5) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 5) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-yellow);
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 5) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-yellow-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 5) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 6) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 6) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-orange);
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 6) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-orange-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 6) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 7) .nav-folder-title .collapse-icon svg, body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 7) .nav-folder-title {
color: var(--text-normal);
background-color: var(--color-red);
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 7) .nav-folder .nav-folder-title {
color: var(--text-normal);
background-color: rgb(var(--color-red-rgb), calc(var(--dimmed) + 0.2));
}

body.flexcyon-rainbow-folders.flexcyon-is-bg-rainbow .nav-files-container div .nav-folder:nth-of-type(8n + 7) .nav-folder .nav-folder-title .collapse-icon svg {
color: var(--text-normal);
background-color: transparent;
}`,
    },
    "flexcyon-minimalist-tree": {
      general: `body.flexcyon-minimalist-tree .collapse-icon svg {
display: none;
}

body.flexcyon-minimalist-tree .tree-item-children {
border-inline-start: none;
}

body.flexcyon-minimalist-tree .nav-file-title {
opacity: 0.85;
}`,
    },
    "flexcyon-wrap-long-filenames": {
      general: `body.flexcyon-wrap-long-filenames .tree-item-inner {
overflow: visible;
text-overflow: clip;
white-space: collapse;
}

body.flexcyon-wrap-long-filenames div.oz-folder-name, body.flexcyon-wrap-long-filenames div.oz-nav-file-title-content {
overflow: visible;
text-overflow: clip;
white-space: normal;
}`,
    },
    "flexcyon-reverse-workspace-content": {
      general: `body.flexcyon-reverse-workspace-content .workspace-leaf-content {
flex-direction: column-reverse;
}`,
    },
    "flexcyon-prompt-align-bottom-left": {
      general: `body.flexcyon-prompt-align-bottom-left .modal-container .prompt {
inset-block-start: 30vh;
inset-inline-start: 0;
}`,
    },
    "flexcyon-prompt-align-bottom-center": {
      general: `body.flexcyon-prompt-align-bottom-center .modal-container .prompt {
inset-block-start: 30vh;
}`,
    },
    "flexcyon-anims-slide-ltr": {
      general: `body.flexcyon-anims-slide-ltr .mod-stacked .workspace-leaf.mod-active .workspace-leaf-content:not([data-type=file-explorer], [data-type=undefined]), body.flexcyon-anims-slide-ltr .view-content {
animation: slide-in-left var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-anims-slide-rtl": {
      general: `body.flexcyon-anims-slide-rtl .mod-stacked .workspace-leaf.mod-active .workspace-leaf-content:not([data-type=file-explorer], [data-type=undefined]), body.flexcyon-anims-slide-rtl .view-content {
animation: slide-in-right var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-anims-slide-tb": {
      general: `body.flexcyon-anims-slide-tb .mod-stacked .workspace-leaf.mod-active .workspace-leaf-content:not([data-type=file-explorer], [data-type=undefined]), body.flexcyon-anims-slide-tb .view-content {
animation: slide-in-tb var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-anims-slide-bt": {
      general: `body.flexcyon-anims-slide-bt .mod-stacked .workspace-leaf.mod-active .workspace-leaf-content:not([data-type=file-explorer], [data-type=undefined]), body.flexcyon-anims-slide-bt .view-content {
animation: slide-in-bt var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-anims-spin-bt": {
      general: `body.flexcyon-anims-spin-bt .mod-stacked .workspace-leaf.mod-active .workspace-leaf-content:not([data-type=file-explorer], [data-type=undefined]), body.flexcyon-anims-spin-bt .view-content {
animation: spin-in-bt var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-anims-spin-rl": {
      general: `body.flexcyon-anims-spin-rl .mod-stacked .workspace-leaf.mod-active .workspace-leaf-content:not([data-type=file-explorer], [data-type=undefined]), body.flexcyon-anims-spin-rl .view-content {
animation: spin-in-rl var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-anims-scale-up": {
      general: `body.flexcyon-anims-scale-up .mod-stacked .workspace-leaf.mod-active .workspace-leaf-content:not([data-type=file-explorer], [data-type=undefined]), body.flexcyon-anims-scale-up .view-content {
animation: scale-up var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-anims-fade-in": {
      general: `body.flexcyon-anims-fade-in .mod-stacked .workspace-leaf.mod-active .workspace-leaf-content:not([data-type=file-explorer], [data-type=undefined]), body.flexcyon-anims-fade-in .view-content {
animation: fade-in var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-modal-anims-slide-ltr": {
      general: `body.flexcyon-modal-anims-slide-ltr .modal .community-modal-info, body.flexcyon-modal-anims-slide-ltr .modal .vertical-tab-content, body.flexcyon-modal-anims-slide-ltr .modal, body.flexcyon-modal-anims-slide-ltr .prompt {
animation: slide-in-left var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-modal-anims-slide-rtl": {
      general: `body.flexcyon-modal-anims-slide-rtl .modal .community-modal-info, body.flexcyon-modal-anims-slide-rtl .modal .vertical-tab-content, body.flexcyon-modal-anims-slide-rtl .modal, body.flexcyon-modal-anims-slide-rtl .prompt {
animation: slide-in-right var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-modal-anims-slide-tb": {
      general: `body.flexcyon-modal-anims-slide-tb .modal .community-modal-info, body.flexcyon-modal-anims-slide-tb .modal .vertical-tab-content, body.flexcyon-modal-anims-slide-tb .modal, body.flexcyon-modal-anims-slide-tb .prompt {
animation: slide-in-tb var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-modal-anims-slide-bt": {
      general: `body.flexcyon-modal-anims-slide-bt .modal .community-modal-info, body.flexcyon-modal-anims-slide-bt .modal .vertical-tab-content, body.flexcyon-modal-anims-slide-bt .modal, body.flexcyon-modal-anims-slide-bt .prompt {
animation: slide-in-bt var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-modal-anims-spin-bt": {
      general: `body.flexcyon-modal-anims-spin-bt .modal .community-modal-info, body.flexcyon-modal-anims-spin-bt .modal .vertical-tab-content, body.flexcyon-modal-anims-spin-bt .modal, body.flexcyon-modal-anims-spin-bt .prompt {
animation: spin-in-bt var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-modal-anims-spin-rl": {
      general: `body.flexcyon-modal-anims-spin-rl .modal .community-modal-info, body.flexcyon-modal-anims-spin-rl .modal .vertical-tab-content, body.flexcyon-modal-anims-spin-rl .modal, body.flexcyon-modal-anims-spin-rl .prompt {
animation: spin-in-rl var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-modal-anims-scale-up": {
      general: `body.flexcyon-modal-anims-scale-up .modal .community-modal-info, body.flexcyon-modal-anims-scale-up .modal .vertical-tab-content, body.flexcyon-modal-anims-scale-up .modal, body.flexcyon-modal-anims-scale-up .prompt {
animation: scale-up var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-modal-anims-fade-in": {
      general: `body.flexcyon-modal-anims-fade-in .modal .community-modal-info, body.flexcyon-modal-anims-fade-in .modal .vertical-tab-content, body.flexcyon-modal-anims-fade-in .modal, body.flexcyon-modal-anims-fade-in .prompt {
animation: fade-in var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-anim-style-settings-contain": {
      general: `body.flexcyon-anims-modal-scale-up.flexcyon-anim-style-settings-contain .style-settings-container {
animation: scale-up var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}

body.flexcyon-anims-modal-slide-rtl.flexcyon-anim-style-settings-contain .style-settings-container {
animation: slide-in-right var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}

body.flexcyon-anims-modal-slide-ltr.flexcyon-anim-style-settings-contain .style-settings-container {
animation: slide-in-left var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}

body.flexcyon-anims-modal-slide-tb.flexcyon-anim-style-settings-contain .style-settings-container {
animation: slide-in-tb var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}

body.flexcyon-anims-modal-slide-bt.flexcyon-anim-style-settings-contain .style-settings-container {
animation: slide-in-bt var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}

body.flexcyon-anims-modal-spin-rl.flexcyon-anim-style-settings-contain .style-settings-container {
animation: spin-in-rl var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}

body.flexcyon-anims-modal-spin-bt.flexcyon-anim-style-settings-contain .style-settings-container {
animation: spin-in-bt var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}

body.flexcyon-anims-modal-fade-in.flexcyon-anim-style-settings-contain .style-settings-container {
animation: fade-in var(--flexcyon-anim-duration) var(--flexcyon-anim-easing);
}`,
    },
    "flexcyon-editor-grid": {
      general: `body.flexcyon-editor-grid .canvas-background, body.flexcyon-editor-grid .kanban-plugin div, body.flexcyon-editor-grid .view-content [class*=markdown-] {
background-image: repeating-linear-gradient(var(--flexcyon-editor-bg-rotation), var(--flexcyon-editor-bg-color), var(--flexcyon-editor-bg-color) 1px, transparent 1px, transparent var(--flexcyon-editor-bg-width)), repeating-linear-gradient(calc(90deg + var(--flexcyon-editor-bg-rotation)), var(--flexcyon-editor-bg-color), var(--flexcyon-editor-bg-color) 1px, transparent 1px, transparent var(--flexcyon-editor-bg-width));
}

body.flexcyon-editor-grid .canvas-background *, body.flexcyon-editor-grid .kanban-plugin div *, body.flexcyon-editor-grid .view-content [class*=markdown-] * {
background-image: none;
}`,
    },
    "flexcyon-editor-dots": {
      general: `body.flexcyon-editor-dots .canvas-background, body.flexcyon-editor-dots .kanban-plugin div, body.flexcyon-editor-dots .view-content [class*=markdown-] {
background-image: radial-gradient(var(--flexcyon-editor-bg-color) var(--flexcyon-editor-dot-size), transparent 1px);
background-repeat: repeat;
background-size: var(--flexcyon-editor-bg-width) var(--flexcyon-editor-bg-width);
}

body.flexcyon-editor-dots .canvas-background *, body.flexcyon-editor-dots .kanban-plugin div *, body.flexcyon-editor-dots .view-content [class*=markdown-] * {
background-image: none;
}`,
    },
    "flexcyon-editor-rhombus": {
      general: `body.flexcyon-editor-rhombus .canvas-background, body.flexcyon-editor-rhombus .kanban-plugin div, body.flexcyon-editor-rhombus .view-content [class*=markdown-] {
background-image: repeating-linear-gradient(calc(30deg + var(--flexcyon-editor-bg-rotation)), var(--flexcyon-editor-bg-color), var(--flexcyon-editor-bg-color) 1px, transparent 1px, transparent var(--flexcyon-editor-bg-width)), repeating-linear-gradient(calc(150deg + var(--flexcyon-editor-bg-rotation)), var(--flexcyon-editor-bg-color), var(--flexcyon-editor-bg-color) 1px, transparent 1px, transparent var(--flexcyon-editor-bg-width));
}

body.flexcyon-editor-rhombus .canvas-background .canvas-background, body.flexcyon-editor-rhombus .kanban-plugin div .canvas-background, body.flexcyon-editor-rhombus .view-content [class*=markdown-] .canvas-background {
display: none;
}

body.flexcyon-editor-rhombus .canvas-background *, body.flexcyon-editor-rhombus .kanban-plugin div *, body.flexcyon-editor-rhombus .view-content [class*=markdown-] * {
background-image: none;
}`,
    },
    "flexcyon-workspace-card-layout": {
      general: `body.flexcyon-workspace-card-layout .view-header-breadcrumb-separator {
display: none;
}

body.flexcyon-workspace-card-layout .view-header-breadcrumb {
padding: 4px 8px;
border-radius: var(--flexcyon-callout-radix);
}

body.flexcyon-workspace-card-layout .view-header-title-container {
gap: 8px;
}

body.flexcyon-workspace-card-layout .view-header-title-parent {
gap: 8px;
}

body.flexcyon-workspace-card-layout .view-header-title-parent :nth-of-type(5n + 1) {
background-color: var(--color-base-20);
}

body.flexcyon-workspace-card-layout .view-header-title-parent :nth-of-type(5n + 3) {
background-color: var(--color-base-25);
}

body.flexcyon-workspace-card-layout .view-header-title-parent :nth-of-type(5n) {
background-color: var(--color-base-05);
}

body.flexcyon-workspace-card-layout .view-header-title-parent :has(+ :last-child)::after {
background-color: var(--color-base-05);
}

body:not(.show-ribbon).flexcyon-workspace-cards-tui-ext .sidebar-toggle-button.mod-left {
padding-block-start: 9px;
}

body.flexcyon-workspace-card-layout {
--titlebar-background: transparent;
--titlebar-background-focused: transparent;
}

body.flexcyon-workspace-card-layout .workspace-leaf-content {
border-radius: var(--flexcyon-callout-radix);
}

body.flexcyon-workspace-card-layout .workspace-leaf-content:not([data-type=markdown]) {
margin: 10px;
}

body.flexcyon-workspace-card-layout .workspace-split:not(.mod-left-split, .mod-right-split) .metadata-container {
border: 2px solid var(--color-base-20);
border-radius: var(--flexcyon-callout-radix);
}

body.flexcyon-workspace-card-layout .workspace-split:not(.mod-left-split, .mod-right-split) .metadata-container .metadata-content {
padding: 0 8px;
}

body.flexcyon-workspace-card-layout .workspace-tab-container, body.flexcyon-workspace-card-layout .workspace-tab-header-container {
margin: 4px 8px;
border: 2px solid var(--color-base-20);
border-radius: var(--flexcyon-callout-radix);
}

body.flexcyon-workspace-card-layout .workspace-split.mod-vertical.mod-root .workspace-tab-container {
border: var(--color-base-00);
}

body.flexcyon-workspace-card-layout .workspace-tabs.mod-active .workspace-tab-header-container {
border: 2px solid var(--text-on-accent);
}

body.flexcyon-workspace-card-layout .workspace-split.mod-right-split :last-child .workspace-tab-container {
margin-block-end: 38px;
}

body.flexcyon-workspace-card-layout .titlebar {
margin-block-start: 4px;
margin-inline-end: 16px;
}

body.flexcyon-workspace-card-layout .workspace-ribbon {
background-color: var(--color-base-00);
border-inline-end: none;
}

body.flexcyon-workspace-card-layout .workspace-ribbon.mod-left {
margin-block-start: 50px;
border: none;
}

body.flexcyon-workspace-card-layout .workspace-ribbon.mod-left::before {
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout .sidebar-toggle-button.mod-left {
margin: 8px 0;
}

body.flexcyon-workspace-card-layout .sidebar-toggle-button.mod-right {
margin-block-start: -2px;
}

body.flexcyon-workspace-card-layout .side-dock-actions {
margin-block-start: 2px;
}

body.flexcyon-workspace-card-layout .workspace-split .workspace-tabs .workspace-tab-header-container-inner > .workspace-tab-header, body.flexcyon-workspace-card-layout .workspace-split:not(.mod-left-split, .mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner > .workspace-tab-header {
padding: 3px;
transform: translateX(8px);
}

body.flexcyon-workspace-cards-tui-ext .sidebar-toggle-button.mod-left {
padding-block-start: 7px;
}

body.flexcyon-workspace-cards-tui-ext .workspace-split:not(.mod-left-split, .mod-right-split) .metadata-container {
border: 2px solid rgb(var(--color-purple-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .metadata-properties-heading {
position: absolute;
inset-block-start: -15px;
inset-inline-start: 32px;
}

body.flexcyon-workspace-cards-tui-ext .metadata-properties-heading * {
color: rgb(var(--color-purple-rgb), 0.9);
}

body.flexcyon-workspace-cards-tui-ext .metadata-properties-heading div.collapse-indicator, body.flexcyon-workspace-cards-tui-ext .metadata-properties-heading .metadata-properties-title {
padding: 0 8px;
background-color: var(--color-base-10);
}

body.flexcyon-workspace-cards-tui-ext .metadata-content {
margin-block-start: 4px;
}

body.flexcyon-workspace-card-layout .community-modal-info-name {
padding: var(--flexcyon-comm-text-padding);
padding-block-start: 16px;
margin-block: 8px 0;
border: 2px solid var(--text-faint);
border-block-end: 0;
border-start-start-radius: 16px;
border-start-end-radius: 16px;
}

body.flexcyon-workspace-card-layout .community-modal-info-downloads, body.flexcyon-workspace-card-layout .community-modal-info-version, body.flexcyon-workspace-card-layout .community-modal-info-author, body.flexcyon-workspace-card-layout .community-modal-info-repo, body.flexcyon-workspace-card-layout .community-modal-info-desc {
padding: var(--flexcyon-comm-text-padding);
overflow-wrap: break-word;
border: 2px solid var(--text-faint);
border-block-start: 0;
border-block-end: 0;
}

body.flexcyon-workspace-card-layout .community-modal-info-desc {
margin-block-start: 0;
}

body.flexcyon-workspace-card-layout .community-modal-info-downloads {
inline-size: 100%;
margin-block-start: 0;
}

body.flexcyon-workspace-card-layout .community-modal-button-container {
padding: 16px;
padding-block-end: 24px;
margin: 0;
border: 2px solid var(--text-faint);
border-block-start: 0;
border-end-start-radius: 16px;
border-end-end-radius: 16px;
}

body.flexcyon-workspace-card-layout .community-modal-readme {
margin-block-start: 32px;
}`,
      dark: `body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-explorer]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-blue-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-explorer]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-blue-rgb), 0.85);
content: "Files";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-tree-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-purple-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-tree-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-purple-rgb), 0.85);
content: "Alternate File Tree";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=bookmarks]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-cyan-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=bookmarks]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-cyan-rgb), 0.85);
content: "Bookmarks";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=all-properties]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-pink-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=all-properties]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-pink-rgb), 0.85);
content: "All Properties";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outline]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-green-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outline]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-green-rgb), 0.85);
content: "Outline";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-sidebar-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-yellow-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-sidebar-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-yellow-rgb), 0.85);
content: "Full Calendar | Sidebar";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=backlink]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-orange-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=backlink]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-orange-rgb), 0.85);
content: "Backlinks";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=review-queue-list-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-red-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=review-queue-list-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-red-rgb), 0.85);
content: "Review Queue";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-properties]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-blue-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-properties]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-blue-rgb), 0.85);
content: "Properties";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outgoing-link]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-purple-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outgoing-link]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-purple-rgb), 0.85);
content: "Outgoing Links";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=graph]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-cyan-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=graph]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-cyan-rgb), 0.85);
content: "Graph View";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-pink-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-pink-rgb), 0.85);
content: "Full Calendar";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=localgraph]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-green-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=localgraph]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-green-rgb), 0.85);
content: "Local Graph";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=calendar]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-yellow-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=calendar]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-yellow-rgb), 0.85);
content: "Calendar";
background-color: var(--color-base-00);
}`,
      light: `body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-explorer]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-blue-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-explorer]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-blue-rgb), 0.85);
content: "Files";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-tree-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-purple-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-tree-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-purple-rgb), 0.85);
content: "Alternate File Tree";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=bookmarks]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-cyan-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=bookmarks]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-cyan-rgb), 0.85);
content: "Bookmarks";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=all-properties]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-pink-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=all-properties]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-pink-rgb), 0.85);
content: "All Properties";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outline]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-green-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outline]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-green-rgb), 0.85);
content: "Outline";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-sidebar-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-yellow-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-sidebar-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-yellow-rgb), 0.85);
content: "Full Calendar | Sidebar";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=backlink]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-orange-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=backlink]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-orange-rgb), 0.85);
content: "Backlinks";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=review-queue-list-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-red-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=review-queue-list-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-red-rgb), 0.85);
content: "Review Queue";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-properties]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-blue-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-properties]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-blue-rgb), 0.85);
content: "Properties";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outgoing-link]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-purple-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outgoing-link]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-purple-rgb), 0.85);
content: "Outgoing Links";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=graph]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-cyan-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=graph]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-cyan-rgb), 0.85);
content: "Graph View";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-pink-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-pink-rgb), 0.85);
content: "Full Calendar";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=localgraph]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-green-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=localgraph]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-green-rgb), 0.85);
content: "Local Graph";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=calendar]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-yellow-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=calendar]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-yellow-rgb), 0.85);
content: "Calendar";
background-color: var(--color-base-00);
}`,
    },
    "flexcyon-workspace-angled-layout": {
      general: `body.flexcyon-workspace-angled-layout .view-header-breadcrumb-separator {
display: none;
}

body.flexcyon-workspace-angled-layout .view-header-title {
padding: var(--flexcyon-mode-view-header-title-verti-padding) var(--flexcyon-mode-view-header-title-horiz-padding);
background-color: var(--color-base-20);
border-radius: 0;
transform: skewX(-22.5deg);
}

body.flexcyon-workspace-angled-layout .view-header-title-parent {
transform: skewX(-22.5deg);
}

body.flexcyon-workspace-angled-layout .view-header-title-parent .view-header-breadcrumb {
padding: var(--flexcyon-mode-view-header-title-verti-padding) var(--flexcyon-mode-view-header-title-horiz-padding);
background-color: var(--color-base-05);
}

body.flexcyon-workspace-angled-layout .collapse-icon.is-collapsed svg.svg-icon {
transform: rotate(calc(var(--direction) * -1 * 90deg)) skewX(-5deg);
}

body.flexcyon-workspace-angled-layout .tree-item-self .collapse-icon svg {
transform: skewX(7.5deg);
}

body.flexcyon-workspace-angled-layout div.graph-controls.is-close {
transform: skewY(-5deg);
}

body.flexcyon-workspace-angled-layout .side-dock-actions, body.flexcyon-workspace-angled-layout .sidebar-toggle-button {
transform: skewY(-1.5deg);
}

body.flexcyon-workspace-angled-layout .modal-container {
transform: skewX(-1deg);
}

body.flexcyon-workspace-angled-layout .titlebar-button-container.mod-right, body.flexcyon-workspace-angled-layout .workspace-tab-header-tab-list span.clickable-icon svg, body.flexcyon-workspace-angled-layout span.clickable-icon[aria-label="New tab"] svg, body.flexcyon-workspace-angled-layout .nav-header, body.flexcyon-workspace-angled-layout div.oz-folders-action-items.file-tree-header-fixed, body.flexcyon-workspace-angled-layout div.oz-nav-buttons-right-block, body.flexcyon-workspace-angled-layout div.oz-nav-action-button, body.flexcyon-workspace-angled-layout .workspace-drawer-vault-actions, body.flexcyon-workspace-angled-layout button, body.flexcyon-workspace-angled-layout .workspace-tab-header-container-inner {
transform: skewX(-7.5deg);
}

body.flexcyon-workspace-angled-layout .nav-folder-title-content {
transform: skewX(-5deg);
}

body.flexcyon-workspace-angled-layout #calendar-container > div > div {
transform: skewX(-7.5deg);
}

body.flexcyon-workspace-angled-layout .oz-explorer-container .oz-file-tree-files div, body.flexcyon-workspace-angled-layout div.oz-folder-line {
transform: skewX(-5deg);
}`,
    },
    "flexcyon-workspace-pl10k-layout": {
      general: `body.flexcyon-workspace-pl10k-layout .view-header-title-parent :nth-of-type(5n + 1) {
background-color: var(--color-base-20);
}

body.flexcyon-workspace-pl10k-layout .view-header-title-parent :nth-of-type(5n + 1)::after {
background-color: var(--color-base-25);
}

body.flexcyon-workspace-pl10k-layout .view-header-title-parent :nth-of-type(5n + 3) {
background-color: var(--color-base-25);
}

body.flexcyon-workspace-pl10k-layout .view-header-title-parent :nth-of-type(5n + 3)::after {
background-color: var(--color-base-05);
}

body.flexcyon-workspace-pl10k-layout .view-header-title-parent :nth-of-type(5n) {
background-color: var(--color-base-05);
}

body.flexcyon-workspace-pl10k-layout .view-header-title-parent :nth-of-type(5n)::after {
background-color: var(--color-base-20);
}

body.flexcyon-workspace-pl10k-layout .view-header-title-parent :has(+ :last-child)::after {
background-color: var(--color-base-05);
}

body.flexcyon-workspace-pl10k-layout .view-header-title {
padding: var(--flexcyon-mode-view-header-title-verti-padding) var(--flexcyon-mode-view-header-title-horiz-padding);
margin-inline-start: -1.5px;
background-color: var(--color-base-05);
border-radius: var(--flexcyon-callout-radix);
border-start-start-radius: 0;
border-end-start-radius: 0;
}

body.flexcyon-workspace-pl10k-layout .view-header-breadcrumb-separator {
display: none;
padding: 0;
}

body.flexcyon-workspace-pl10k-layout .view-header, body.flexcyon-workspace-pl10k-layout .view-header-title-container {
gap: 0;
}

body.flexcyon-workspace-pl10k-layout .view-header-title-container:not(:has(.view-header-breadcrumb)) .view-header-title {
border-radius: var(--flexcyon-callout-radix);
}

body.flexcyon-workspace-pl10k-layout .view-header-title-parent .view-header-breadcrumb {
padding: 4px 0;
border-radius: 0;
}

body.flexcyon-workspace-pl10k-layout .view-header-title-parent .view-header-breadcrumb::after {
position: relative;
inline-size: inherit;
block-size: inherit;
padding: 10px 6px;
color: transparent;
content: "e";
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 70% 50%);
}

body.flexcyon-workspace-pl10k-layout .view-header-title-parent :first-child.view-header-breadcrumb {
padding-inline-start: 12px;
border-start-start-radius: 16px;
border-end-start-radius: 16px;
}

body.flexcyon-workspace-pl10k-layout .workspace-split.mod-sidedock .workspace-tab-header.is-active {
aspect-ratio: 0.8660254038;
clip-path: polygon(-50% 50%, 50% 100%, 150% 50%, 50% 0);
}

body.flexcyon-workspace-pl10k-layout .workspace-split.mod-sidedock .workspace-tab-header.is-active .workspace-tab-header-inner {
border-block-end: none;
}

body.flexcyon-workspace-pl10k-layout .view-actions, body.flexcyon-workspace-pl10k-layout .view-header-left .view-header-nav-buttons {
z-index: 10;
background-color: var(--color-base-20);
border: 1px solid var(--color-base-20);
border-radius: var(--flexcyon-callout-radix);
opacity: 1;
}

body.flexcyon-workspace-pl10k-layout .view-actions button, body.flexcyon-workspace-pl10k-layout .view-header-left .view-header-nav-buttons button {
border-radius: var(--flexcyon-callout-radix);
}

body.flexcyon-workspace-pl10k-layout .view-actions {
padding: 4px 2px;
margin-block-start: 8px;
}

body.flexcyon-workspace-pl10k-layout .view-actions button {
border-radius: var(--flexcyon-callout-radix);
}`,
    },
    "flexcyon-workspace-cards-tui-ext": {
      general: `body:not(.show-ribbon).flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .sidebar-toggle-button.mod-left {
padding-block-start: 9px;
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .sidebar-toggle-button.mod-left {
padding-block-start: 7px;
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .workspace-split:not(.mod-left-split, .mod-right-split) .metadata-container {
border: 2px solid rgb(var(--color-purple-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .metadata-properties-heading {
position: absolute;
inset-block-start: -15px;
inset-inline-start: 32px;
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .metadata-properties-heading * {
color: rgb(var(--color-purple-rgb), 0.9);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .metadata-properties-heading div.collapse-indicator, body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .metadata-properties-heading .metadata-properties-title {
padding: 0 8px;
background-color: var(--color-base-10);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .metadata-content {
margin-block-start: 4px;
}`,
      dark: `body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-explorer]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-blue-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-explorer]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-blue-rgb), 0.85);
content: "Files";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-tree-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-purple-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-tree-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-purple-rgb), 0.85);
content: "Alternate File Tree";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=bookmarks]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-cyan-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=bookmarks]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-cyan-rgb), 0.85);
content: "Bookmarks";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=all-properties]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-pink-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=all-properties]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-pink-rgb), 0.85);
content: "All Properties";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outline]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-green-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outline]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-green-rgb), 0.85);
content: "Outline";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-sidebar-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-yellow-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-sidebar-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-yellow-rgb), 0.85);
content: "Full Calendar | Sidebar";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=backlink]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-orange-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=backlink]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-orange-rgb), 0.85);
content: "Backlinks";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=review-queue-list-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-red-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=review-queue-list-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-red-rgb), 0.85);
content: "Review Queue";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-properties]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-blue-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-properties]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-blue-rgb), 0.85);
content: "Properties";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outgoing-link]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-purple-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outgoing-link]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-purple-rgb), 0.85);
content: "Outgoing Links";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=graph]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-cyan-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=graph]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-cyan-rgb), 0.85);
content: "Graph View";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-pink-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-pink-rgb), 0.85);
content: "Full Calendar";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=localgraph]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-green-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=localgraph]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-green-rgb), 0.85);
content: "Local Graph";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=calendar]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-yellow-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=calendar]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-yellow-rgb), 0.85);
content: "Calendar";
background-color: var(--color-base-00);
}`,
      light: `body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-explorer]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-blue-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-explorer]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-blue-rgb), 0.85);
content: "Files";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-tree-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-purple-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-tree-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-purple-rgb), 0.85);
content: "Alternate File Tree";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=bookmarks]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-cyan-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=bookmarks]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-cyan-rgb), 0.85);
content: "Bookmarks";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=all-properties]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-pink-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=all-properties]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-pink-rgb), 0.85);
content: "All Properties";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outline]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-green-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outline]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-green-rgb), 0.85);
content: "Outline";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-sidebar-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-yellow-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-sidebar-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-yellow-rgb), 0.85);
content: "Full Calendar | Sidebar";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=backlink]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-orange-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=backlink]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-orange-rgb), 0.85);
content: "Backlinks";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=review-queue-list-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-red-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=review-queue-list-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-red-rgb), 0.85);
content: "Review Queue";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-properties]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-blue-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=file-properties]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-blue-rgb), 0.85);
content: "Properties";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outgoing-link]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-purple-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=outgoing-link]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-purple-rgb), 0.85);
content: "Outgoing Links";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=graph]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-cyan-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=graph]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-cyan-rgb), 0.85);
content: "Graph View";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-view]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-pink-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=full-calendar-view]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-pink-rgb), 0.85);
content: "Full Calendar";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=localgraph]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-green-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=localgraph]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-green-rgb), 0.85);
content: "Local Graph";
background-color: var(--color-base-00);
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=calendar]) + .workspace-tab-container {
border: 2px solid rgb(var(--color-yellow-rgb), calc(var(--dimmed) - 0.15));
}

body.flexcyon-workspace-card-layout.flexcyon-workspace-cards-tui-ext .mod-sidedock .workspace-tab-header-container:has(.workspace-tab-header.is-active[data-type=calendar]) + .workspace-tab-container::before {
position: absolute;
inset-block-start: 44px;
inset-inline-start: 32px;
z-index: 1;
padding: 0 8px;
color: rgb(var(--color-yellow-rgb), 0.85);
content: "Calendar";
background-color: var(--color-base-00);
}`,
    },
    "flexcyon-tui-callouts": {
      general: `body.flexcyon-tui-no-icons .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-icon {
display: none;
}

body.flexcyon-tui-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) {
padding: 0;
margin: 0;
background-color: var(--background-primary);
--callout-color: var(--text-faint);
}

body.flexcyon-tui-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-fold {
display: none;
}

body.flexcyon-tui-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-title {
z-index: 2;
inline-size: max-content;
padding: 0 8px;
color: var(--text-faint);
background-color: var(--background-primary);
transform: translate(24px, 50%);
}

body.flexcyon-tui-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-title h1, body.flexcyon-tui-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-title h2, body.flexcyon-tui-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-title h3, body.flexcyon-tui-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-title h4, body.flexcyon-tui-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-title h5, body.flexcyon-tui-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-title h6 {
font-size: inherit;
color: unset;
}

body.flexcyon-tui-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-title div {
transform: translateY(-2px);
}

body.flexcyon-tui-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])).is-collapsed .callout-title {
min-block-size: 40px;
}

body.flexcyon-tui-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-title:not(:has(~ .callout-content)) {
block-size: 40px;
}

body.flexcyon-tui-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-content {
z-index: 1;
padding: 8px 16px;
border: 1px solid var(--text-faint);
border-radius: var(--flexcyon-callout-radix);
}`,
    },
    "flexcyon-plain-callouts": {
      general: `body.flexcyon-plain-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=tui], [data-callout-metadata*=vertical], [data-callout-metadata*=tui])) {
padding: 0;
border: 1px solid var(--color-blue);
border-radius: calc(0.5 * var(--flexcyon-callout-radix));
}

body.flexcyon-plain-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=tui], [data-callout-metadata*=vertical], [data-callout-metadata*=tui])) .callout-title {
padding: 4px 12px;
color: var(--background-primary);
background-color: var(--color-blue);
}

body.flexcyon-plain-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=tui], [data-callout-metadata*=vertical], [data-callout-metadata*=tui])) .callout-title .callout-icon {
display: none;
}

body.flexcyon-plain-callouts .callout:not(:is([data-callout*=vertical], [data-callout*=tui], [data-callout-metadata*=vertical], [data-callout-metadata*=tui])) .callout-content {
padding: 4px 12px;
}`,
    },
    "flexcyon-vert-callouts": {
      general: `body.flexcyon-vert-callouts .callout:not(:is([data-callout*=tui], [data-callout*=plain], [data-callout-metadata*=tui], [data-callout-metadata*=plain])) {
display: flex;
flex-direction: row;
padding: 0;
letter-spacing: 2px;
border: 1px solid var(--color-blue);
border-radius: calc(0.5 * var(--flexcyon-callout-radix));
}

body.flexcyon-vert-callouts .callout:not(:is([data-callout*=tui], [data-callout*=plain], [data-callout-metadata*=tui], [data-callout-metadata*=plain])) .callout-title {
justify-content: center;
padding: 8px 12px;
text-overflow: hidden;
color: var(--background-primary);
background-color: var(--color-blue);
writing-mode: vertical-lr;
}

body.flexcyon-vert-callouts .callout:not(:is([data-callout*=tui], [data-callout*=plain], [data-callout-metadata*=tui], [data-callout-metadata*=plain])) .callout-title .callout-icon svg {
color: var(--background-primary);
}

body.flexcyon-vert-callouts .callout:not(:is([data-callout*=tui], [data-callout*=plain], [data-callout-metadata*=tui], [data-callout-metadata*=plain])) .callout-content {
padding: 4px 12px;
margin-inline-start: 12px;
}`,
    },
    "flexcyon-tui-no-icons": {
      general: `body.flexcyon-tui-no-icons .callout[data-callout*=tui]:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-icon, body.flexcyon-tui-no-icons .callout[data-callout-metadata*=tui]:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-icon, body.flexcyon-tui-callouts.flexcyon-tui-no-icons .callout:not(:is([data-callout*=vertical], [data-callout*=plain], [data-callout-metadata*=vertical], [data-callout-metadata*=plain])) .callout-icon {
display: none;
}`,
    },
    "flexcyon-hr-no-reading": {
      general: `body.flexcyon-hr-no-reading .markdown-reading-view .el-hr {
display: none;
}`,
    },
    "flexcyon-cust-str-hr": {
      general: `body.flexcyon-cust-str-hr .el-hr::before, body.flexcyon-cust-str-hr .hr::before {
position: absolute;
inset-inline: 0px 0;
display: flex;
justify-content: center;
inline-size: fit-content;
max-inline-size: 85%;
padding: 0 var(--flexcyon-cust-hr-str-horiz-padding);
margin: 0 auto;
font-size: var(--flexcyon-cust-hr-str-font-size);
font-style: italic;
color: var(--hr-color);
content: var(--flexcyon-cust-hr-str);
background-color: var(--background-primary);
}

body.flexcyon-cust-str-hr .el-hr::before {
transform: translateY(-12px);
}

body.flexcyon-cust-str-hr .markdown-embed:has(.el-hr) .markdown-preview-sizer {
padding-block-end: 12px !important;
}`,
      dark: `body.flexcyon-cust-str-hr .hr::before {
background-color: var(--color-base-10);
}`,
      light: `body.flexcyon-cust-str-hr .hr::before {
background-color: var(--color-base-00);
}`,
    },
    "flexcyon-ascii-checkboxes-enabled": {
      general: `body.flexcyon-ascii-checkboxes-enabled input[data-task="!"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="!"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="!"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="!"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="!"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="!"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="!"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="!"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="!"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-purple);
text-align: center;
content: "!";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task=">"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task=">"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task=">"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task=">"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task=">"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task=">"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task=">"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task=">"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task=">"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-cyan);
text-align: center;
content: ">";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="?"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="?"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="?"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="?"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="?"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="?"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="?"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="?"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="?"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-pink);
text-align: center;
content: "?";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="#"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="#"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="#"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="#"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="#"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="#"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="#"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="#"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="#"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-green);
text-align: center;
content: "#";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="."]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="."] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="."] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="."]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="."] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="."] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="."]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="."] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="."] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-yellow);
text-align: center;
content: ".";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="<"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="<"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="<"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="<"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="<"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="<"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="<"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="<"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="<"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-orange);
text-align: center;
content: "<";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="$"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="$"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="$"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="$"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="$"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="$"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="$"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="$"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="$"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-red);
text-align: center;
content: "$";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="*"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="*"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="*"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="*"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="*"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="*"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="*"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="*"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="*"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-purple);
text-align: center;
content: "*";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="'"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="'"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="'"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="'"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="'"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="'"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="'"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="'"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="'"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-cyan);
text-align: center;
content: "'";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="@"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="@"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="@"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="@"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="@"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="@"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="@"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="@"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="@"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-blue);
text-align: center;
content: "@";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="%"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="%"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="%"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="%"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="%"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="%"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="%"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="%"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="%"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-pink);
text-align: center;
content: "%";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="+"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="+"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="+"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="+"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="+"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="+"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="+"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="+"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="+"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-green);
text-align: center;
content: "+";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="-"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="-"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="-"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="-"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="-"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="-"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="-"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="-"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="-"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-yellow);
text-align: center;
content: "-";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="/"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="/"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="/"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="/"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="/"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="/"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="/"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="/"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="/"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-orange);
text-align: center;
content: "/";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="~"]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="~"] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task="~"] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="~"]:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="~"] > input:checked:hover, body.flexcyon-ascii-checkboxes-enabled li[data-task="~"] > p > input:checked:hover {
filter: brightness(1.25);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="~"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="~"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="~"] > p > input:checked::after {
inset-block-start: -0.325em;
font-size: var(--flexcyon-ascii-checkboxes-font-size);
font-weight: 900;
color: var(--color-red);
text-align: center;
content: "~";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="?"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="?"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="?"] > p > input:checked::after, body.flexcyon-ascii-checkboxes-enabled input[data-task="!"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="!"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="!"] > p > input:checked::after {
inset-block-start: -0.15em;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="'"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="'"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="'"] > p > input:checked::after {
inset-block-start: -0.175rem;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) + 0.3rem);
content: "‘";
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="#"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="#"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="#"] > p > input:checked::after, body.flexcyon-ascii-checkboxes-enabled input[data-task="$"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="$"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="$"] > p > input:checked::after, body.flexcyon-ascii-checkboxes-enabled input[data-task="/"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="/"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="/"] > p > input:checked::after, body.flexcyon-ascii-checkboxes-enabled input[data-task="<"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="<"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="<"] > p > input:checked::after, body.flexcyon-ascii-checkboxes-enabled input[data-task=">"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task=">"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task=">"] > p > input:checked::after {
inset-block-start: -0.175rem;
transform: scaleY(1.1);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="."]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="."] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="."] > p > input:checked::after {
inset-block-start: -0.1rem;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) - 0.2rem);
letter-spacing: -0.5px;
content: "...";
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="*"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="*"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="*"] > p > input:checked::after {
inset-block-start: -0.25rem;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) + 0.75rem);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="@"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="@"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="@"] > p > input:checked::after {
inset-block-start: -0.125rem;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) - 0.1rem);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="%"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="%"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="%"] > p > input:checked::after {
inset-block-start: -0.05rem;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) - 0.2rem);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="+"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="+"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="+"] > p > input:checked::after {
inset-block-start: -0.1rem;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) - 0.05rem);
}

body.flexcyon-ascii-checkboxes-enabled input[data-task="-"]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="-"] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task="-"] > p > input:checked::after {
inset-block-start: -0.3rem;
margin-inline-start: -7.5%;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) + 0.2rem);
letter-spacing: var(--less-letter-spacing);
content: "--";
}

body.flexcyon-ascii-checkboxes-enabled input[data-task='"']:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task='"'] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task='"'] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task='"']:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task='"'] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task='"'] > p > input:checked::after {
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) + 0.3rem);
font-weight: 900;
color: var(--color-green);
text-align: center;
content: "“";
background-color: inherit;
mask-image: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task=i]:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task=i] > input:checked, body.flexcyon-ascii-checkboxes-enabled li[data-task=i] > p > input:checked {
padding-inline-end: 6px;
background-color: inherit;
border: none;
}

body.flexcyon-ascii-checkboxes-enabled input[data-task=i]:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task=i] > input:checked::after, body.flexcyon-ascii-checkboxes-enabled li[data-task=i] > p > input:checked::after {
inset-block-start: -0.075rem;
padding-block-start: 10%;
margin-inline-start: -1.5px;
font-size: calc(var(--flexcyon-ascii-checkboxes-font-size) - 0.425rem);
font-weight: 900;
line-height: 1.1;
color: var(--color-cyan);
text-align: center;
content: "i";
background-color: inherit;
border: 1.5px solid var(--color-blue);
border-radius: 50%;
mask-image: none;
scale: var(--upsize);
}`,
    },
    "flexcyon-clip-path-checkboxes-enabled": {
      general: `body.flexcyon-clip-path-checkboxes-enabled input[data-task=s]:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=s] > input:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=s] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-purple);
border: none;
clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=s]:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=s] > input:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=s] > p > input:checked::after {
display: none;
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=c]:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=c] > input:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=c] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-cyan);
border: none;
clip-path: circle();
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=c]:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=c] > input:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=c] > p > input:checked::after {
display: none;
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=h]:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=h] > input:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=h] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-blue);
border: none;
clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=h]:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=h] > input:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=h] > p > input:checked::after {
display: none;
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=m]:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=m] > input:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=m] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-pink);
border: none;
clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=m]:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=m] > input:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=m] > p > input:checked::after {
display: none;
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=t]:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=t] > input:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=t] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-green);
border: none;
clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=t]:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=t] > input:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=t] > p > input:checked::after {
display: none;
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=r]:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=r] > input:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=r] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-yellow);
border: none;
clip-path: rect();
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=r]:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=r] > input:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=r] > p > input:checked::after {
display: none;
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=d]:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=d] > input:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=d] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-orange);
border: none;
clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 50% 90%, 0% 25%);
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=d]:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=d] > input:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=d] > p > input:checked::after {
display: none;
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=l]:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=l] > input:checked, body.flexcyon-clip-path-checkboxes-enabled li[data-task=l] > p > input:checked {
padding-inline-end: 6px;
font-weight: 900;
background-color: var(--color-red);
border: none;
clip-path: polygon(30% 0%, 50% 15%, 70% 0%, 90% 10%, 100% 35%, 80% 70%, 50% 100%, 20% 70%, 0% 35%, 10% 10%);
}

body.flexcyon-clip-path-checkboxes-enabled input[data-task=l]:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=l] > input:checked::after, body.flexcyon-clip-path-checkboxes-enabled li[data-task=l] > p > input:checked::after {
display: none;
}`,
    },
    "flexcyon-rainbow-bullet-points": {
      general: `body.flexcyon-rainbow-bullet-points .HyperMD-list-line:nth-of-type(8n + 0) .list-bullet::after, body.flexcyon-rainbow-bullet-points ul :nth-of-type(8n + 0) .list-bullet::after {
--list-marker-color: var(--color-purple);
}

body.flexcyon-rainbow-bullet-points .HyperMD-list-line:nth-of-type(8n + 1) .list-bullet::after, body.flexcyon-rainbow-bullet-points ul :nth-of-type(8n + 1) .list-bullet::after {
--list-marker-color: var(--color-cyan);
}

body.flexcyon-rainbow-bullet-points .HyperMD-list-line:nth-of-type(8n + 2) .list-bullet::after, body.flexcyon-rainbow-bullet-points ul :nth-of-type(8n + 2) .list-bullet::after {
--list-marker-color: var(--color-blue);
}

body.flexcyon-rainbow-bullet-points .HyperMD-list-line:nth-of-type(8n + 3) .list-bullet::after, body.flexcyon-rainbow-bullet-points ul :nth-of-type(8n + 3) .list-bullet::after {
--list-marker-color: var(--color-pink);
}

body.flexcyon-rainbow-bullet-points .HyperMD-list-line:nth-of-type(8n + 4) .list-bullet::after, body.flexcyon-rainbow-bullet-points ul :nth-of-type(8n + 4) .list-bullet::after {
--list-marker-color: var(--color-green);
}

body.flexcyon-rainbow-bullet-points .HyperMD-list-line:nth-of-type(8n + 5) .list-bullet::after, body.flexcyon-rainbow-bullet-points ul :nth-of-type(8n + 5) .list-bullet::after {
--list-marker-color: var(--color-yellow);
}

body.flexcyon-rainbow-bullet-points .HyperMD-list-line:nth-of-type(8n + 6) .list-bullet::after, body.flexcyon-rainbow-bullet-points ul :nth-of-type(8n + 6) .list-bullet::after {
--list-marker-color: var(--color-orange);
}

body.flexcyon-rainbow-bullet-points .HyperMD-list-line:nth-of-type(8n + 7) .list-bullet::after, body.flexcyon-rainbow-bullet-points ul :nth-of-type(8n + 7) .list-bullet::after {
--list-marker-color: var(--color-red);
}`,
    },
    "flexcyon-alt-link-style": {
      general: `body.flexcyon-alt-link-style {
--link-decoration: none;
--link-color-hover: var(--color-base-05);
--link-color: var(--color-base-05);
--link-external-decoration: none;
--link-external-color: var(--color-base-05);
--link-external-color-hover: var(--color-base-05);
--link-unresolved-color: var(--color-base-05);
--link-unresolved-decoration-color: var(--color-base-05);
--link-unresolved-decoration-style: dashed;
}

body.flexcyon-alt-link-style a.style-settings-import {
margin-block-start: 1px;
}

body.flexcyon-alt-link-style a, body.flexcyon-alt-link-style .markdown-rendered .internal-link, body.flexcyon-alt-link-style .cm-s-obsidian span.cm-hmd-internal-link, body.flexcyon-alt-link-style .cm-link, body.flexcyon-alt-link-style .markdown-rendered .external-link, body.flexcyon-alt-link-style .cm-s-obsidian span.cm-hmd-external-link {
padding: 2px 4px;
}

body.flexcyon-alt-link-style a a, body.flexcyon-alt-link-style .markdown-rendered .internal-link a, body.flexcyon-alt-link-style .cm-s-obsidian span.cm-hmd-internal-link a, body.flexcyon-alt-link-style .cm-link a, body.flexcyon-alt-link-style .markdown-rendered .external-link a, body.flexcyon-alt-link-style .cm-s-obsidian span.cm-hmd-external-link a {
padding: unset;
}

body.flexcyon-alt-link-style .bases-rendered-value.markdown-rendered .internal-link {
padding: unset;
font-size: unset;
}

body.flexcyon-alt-link-style a:not(:is(.style-settings-import, .style-settings-export)), body.flexcyon-alt-link-style a.style-settings-import, body.flexcyon-alt-link-style .markdown-rendered .internal-link, body.flexcyon-alt-link-style .cm-s-obsidian span.cm-hmd-internal-link {
color: var(--color-base-05);
background-color: color-mix(in oklch, var(--flexcyon-link-color) var(--flexcyon-alt-link-opacity), transparent);
}

body.flexcyon-alt-link-style a:not(:is(.style-settings-import, .style-settings-export)) a, body.flexcyon-alt-link-style a.style-settings-import a, body.flexcyon-alt-link-style .markdown-rendered .internal-link a, body.flexcyon-alt-link-style .cm-s-obsidian span.cm-hmd-internal-link a {
padding: unset;
color: unset;
background-color: unset;
}

body.flexcyon-alt-link-style a.style-settings-export, body.flexcyon-alt-link-style .cm-link, body.flexcyon-alt-link-style .markdown-rendered .external-link, body.flexcyon-alt-link-style .cm-s-obsidian span.cm-hmd-external-link {
background-color: color-mix(in oklch, var(--flexcyon-external-link-color) var(--flexcyon-alt-link-opacity), transparent);
}

body.flexcyon-alt-link-style a.style-settings-export a, body.flexcyon-alt-link-style .cm-link a, body.flexcyon-alt-link-style .markdown-rendered .external-link a, body.flexcyon-alt-link-style .cm-s-obsidian span.cm-hmd-external-link a {
padding: unset;
color: unset;
background-color: unset;
}`,
    },
    "flexcyon-metadata-display-reading-disabled": {
      general: `body.flexcyon-metadata-display-reading-disabled {
--metadata-display-reading: none;
}`,
    },
    "flexcyon-metadata-display-editing-disabled": {
      general: `body.flexcyon-metadata-display-editing-disabled {
--metadata-display-editing: none;
}`,
    },
    "flexcyon-metadata-rainbow-icons": {
      general: `body.flexcyon-metadata-rainbow-icons .metadata-container .lucide-forward, body.flexcyon-metadata-rainbow-icons .workspace-leaf-content[data-type=all-properties] .lucide-forward {
color: var(--color-cyan);
opacity: calc(var(--dimmed) + 0.2);
}

body.flexcyon-metadata-rainbow-icons .metadata-container .lucide-binary, body.flexcyon-metadata-rainbow-icons .workspace-leaf-content[data-type=all-properties] .lucide-binary {
color: var(--color-blue);
opacity: calc(var(--dimmed) + 0.2);
}

body.flexcyon-metadata-rainbow-icons .metadata-container .lucide-text, body.flexcyon-metadata-rainbow-icons .workspace-leaf-content[data-type=all-properties] .lucide-text {
color: var(--color-green);
opacity: calc(var(--dimmed) + 0.2);
}

body.flexcyon-metadata-rainbow-icons .metadata-container .lucide-list, body.flexcyon-metadata-rainbow-icons .workspace-leaf-content[data-type=all-properties] .lucide-list {
color: var(--color-orange);
opacity: calc(var(--dimmed) + 0.2);
}

body.flexcyon-metadata-rainbow-icons .metadata-container .lucide-tags, body.flexcyon-metadata-rainbow-icons .workspace-leaf-content[data-type=all-properties] .lucide-tags {
color: var(--color-red);
opacity: calc(var(--dimmed) + 0.2);
}

body.flexcyon-metadata-rainbow-icons .metadata-container .lucide-check-square, body.flexcyon-metadata-rainbow-icons .workspace-leaf-content[data-type=all-properties] .lucide-check-square {
color: var(--color-yellow);
opacity: calc(var(--dimmed) + 0.2);
}

body.flexcyon-metadata-rainbow-icons .metadata-container .lucide-calendar, body.flexcyon-metadata-rainbow-icons .workspace-leaf-content[data-type=all-properties] .lucide-calendar {
color: var(--text-accent);
opacity: calc(var(--dimmed) + 0.2);
}

body.flexcyon-metadata-rainbow-icons .metadata-container .lucide-file-question, body.flexcyon-metadata-rainbow-icons .workspace-leaf-content[data-type=all-properties] .lucide-file-question {
color: var(--color-purple);
opacity: calc(var(--dimmed) + 0.2);
}`,
    },
    "flexcyon-metadata-no-properties-title": {
      general: `body.flexcyon-metadata-no-properties-title .metadata-properties-title {
display: none;
}`,
    },
    "flexcyon-status-hide-until-hover": {
      general: `body.flexcyon-status-hide-until-hover .status-bar:hover::before {
transform: translateY(var(--flexcyon-status-hide-trigger-translation));
transition: transform var(--flexcyon-status-hide-hover-duration) var(--flexcyon-status-hide-hover-function);
}

body.flexcyon-status-hide-until-hover .status-bar:hover {
transform: unset;
transition: transform var(--flexcyon-status-hide-hover-duration) var(--flexcyon-status-hide-hover-function);
}`,
    },
    "flexcyon-status-hide-until-hold": {
      general: `body.flexcyon-status-hide-until-hold .status-bar:active::before {
transform: translateY(var(--flexcyon-status-hide-trigger-translation));
transition: transform var(--flexcyon-status-hide-hover-duration) var(--flexcyon-status-hide-hover-function);
}

body.flexcyon-status-hide-until-hold .status-bar:active {
transform: unset;
transition: transform var(--flexcyon-status-hide-hover-duration) var(--flexcyon-status-hide-hover-function);
}`,
    },
    "flexcyon-status-centre-align": {
      general: `body:is(.flexcyon-status-hide-until-hover, .flexcyon-status-hide-until-hold).flexcyon-status-centre-align .status-bar::before, body:is(.flexcyon-status-hide-until-hover, .flexcyon-status-hide-until-hold).flexcyon-status-centre-align .status-bar {
position: absolute;
inset-inline: 36px 0;
display: flex;
justify-content: center;
inline-size: max-content;
max-inline-size: 85%;
margin: 0 auto;
}

body:is(.flexcyon-status-hide-until-hover, .flexcyon-status-hide-until-hold).flexcyon-status-centre-align .status-bar {
transform: translateY(var(--flexcyon-anim-slide-amount));
}

body:is(.flexcyon-status-hide-until-hover, .flexcyon-status-hide-until-hold).flexcyon-status-centre-align .status-bar::before {
transform: translateY(calc(-1 * var(--flexcyon-anim-slide-amount)));
}`,
    },
    "flexcyon-status-right-align": {
      general: `body:is(.flexcyon-status-hide-until-hover, .flexcyon-status-hide-until-hold).flexcyon-status-right-align .status-bar {
transform: translateX(var(--flexcyon-status-hide-until-hover-translation));
}

body:is(.flexcyon-status-hide-until-hover, .flexcyon-status-hide-until-hold).flexcyon-status-right-align .status-bar::before {
transform: translateX(calc(-1 * var(--flexcyon-status-hide-until-hover-translation)));
}`,
    },
    "flexcyon-status-text-mode": {
      general: `body.flexcyon-status-text-mode .plugin-editor-status .status-bar-item-icon svg {
display: none;
}

body.flexcyon-status-text-mode .plugin-editor-status::before {
font-weight: bold;
}

body.flexcyon-status-text-mode .plugin-editor-status[aria-label=Reading]::before {
content: var(--flexcyon-status-reading-text);
}

body.flexcyon-status-text-mode .plugin-editor-status[aria-label="Source mode"]::before {
content: var(--flexcyon-status-source-text);
}

body.flexcyon-status-text-mode .plugin-editor-status[aria-label="Live Preview"]::before {
content: var(--flexcyon-status-live-text);
}`,
    },
    "flexcyon-status-mobile-enabled": {
      general: `body.is-mobile.flexcyon-status-mobile-enabled .status-bar {
display: block;
}`,
    },
    "flexcyon-status-style-angled": {
      general: `body.flexcyon-status-style-angled .cm-editor .cm-scroller:not(.cm-vimMode) .cm-sizer:has(+ .cm-vimCursorLayer)::before, body.flexcyon-status-style-angled .cm-editor .cm-scroller.cm-vimMode:not(:has(+ .cm-panels)) .cm-sizer:has(+ .cm-vimCursorLayer)::before {
background-color: var(--color-base-25);
transform: skewX(-22.5deg);
}

body.flexcyon-status-style-angled .cm-panels .cm-panel {
background-color: var(--color-base-05);
}

body.flexcyon-status-style-angled .status-bar {
gap: 0;
margin: 0;
background-color: transparent;
border: none;
border-radius: 0;
}

body.flexcyon-status-style-angled .status-bar-item {
padding: 4px 8px;
background-color: var(--color-base-20);
border-radius: 0;
transform: skewX(-22.5deg);
}

body.flexcyon-status-style-angled .status-bar :nth-child(2n):is(.status-bar-item) {
background-color: var(--color-base-05);
}`,
    },
    "flexcyon-status-style-card": {
      general: `body.flexcyon-status-style-card .cm-editor .cm-scroller:not(.cm-vimMode) .cm-sizer:has(+ .cm-vimCursorLayer)::before, body.flexcyon-status-style-card .cm-editor .cm-scroller.cm-vimMode:not(:has(+ .cm-panels)) .cm-sizer:has(+ .cm-vimCursorLayer)::before {
margin: 0 8px;
line-height: 30px;
border: 2px solid var(--color-base-20);
border-radius: var(--flexcyon-callout-radix);
}

body.flexcyon-status-style-card .markdown-source-view.mod-cm6 .cm-panels.cm-panels-bottom .cm-panel.cm-vim-panel {
margin: 0 8px;
border: 2px solid var(--color-base-20);
border-radius: var(--flexcyon-callout-radix);
}

body.flexcyon-status-style-card div:has(.cm-vim-panel) + .status-bar {
margin-block-end: 50px;
}

body.flexcyon-status-style-card .status-bar {
inset-inline-end: 10px;
gap: 8px;
margin: 4px 8px;
background-color: transparent;
border: none;
}

body.flexcyon-status-style-card .status-bar :nth-child(2n).status-bar-item {
padding: 4px 8px;
background-color: var(--color-base-05);
border-radius: var(--flexcyon-callout-radix);
}

body.flexcyon-status-style-card .status-bar :nth-child(2n+1).status-bar-item {
padding: 4px 8px;
background-color: var(--color-base-25);
border-radius: var(--flexcyon-callout-radix);
}`,
    },
    "flexcyon-status-style-pl10k": {
      general: `body.flexcyon-status-style-pl10k:not(:has(.mod-active > [data-type=empty])) .status-bar::before {
inset-inline-end: 28px;
}

body.flexcyon-status-style-pl10k .status-bar {
gap: 0;
padding-inline-end: 1vw;
background-color: transparent;
border: transparent;
scale: var(--expand);
}

body.flexcyon-status-style-pl10k .status-bar::before {
inset-inline-end: 0;
}

body.flexcyon-status-style-pl10k .status-bar .status-bar-item .status-bar-item-icon {
transform: translateX(-1px);
}

body.flexcyon-status-style-pl10k .status-bar .status-bar-item[style="display: none;"] + .status-bar-item {
padding-inline-start: 12px;
border-start-start-radius: 16px;
border-end-start-radius: 16px;
}

body.flexcyon-status-style-pl10k .status-bar .status-bar-item {
padding: 0;
padding-inline-start: 2px;
}

body.flexcyon-status-style-pl10k .status-bar .status-bar-item::after {
position: relative;
inline-size: inherit;
block-size: inherit;
padding: 4px;
color: transparent;
content: "e";
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 70% 50%);
}

body.flexcyon-status-style-pl10k .status-bar :first-child:empty, body.flexcyon-status-style-pl10k .status-bar :first-child.status-bar-item {
padding-inline-start: 6px;
border-start-start-radius: 16px;
border-end-start-radius: 16px;
}

body.flexcyon-status-style-pl10k .status-bar :last-child.status-bar-item, body.flexcyon-status-style-pl10k .status-bar :nth-last-child(2).status-bar-item {
margin-inline-end: 1.25vw;
border-start-end-radius: 16px;
border-end-end-radius: 16px;
}

body.flexcyon-status-style-pl10k .status-bar :last-child.status-bar-item *, body.flexcyon-status-style-pl10k .status-bar :nth-last-child(2).status-bar-item * {
margin-inline-end: 0;
}

body.flexcyon-status-style-pl10k .status-bar :nth-child(2n+1).status-bar-item {
background-color: var(--color-base-20);
}

body.flexcyon-status-style-pl10k .status-bar :nth-child(2n+1).status-bar-item::after {
background-color: var(--color-base-05);
}

body.flexcyon-status-style-pl10k .status-bar :nth-child(2n).status-bar-item {
background-color: var(--color-base-05);
}

body.flexcyon-status-style-pl10k .status-bar :nth-child(2n).status-bar-item::after {
background-color: var(--color-base-20);
}

body.flexcyon-status-style-pl10k .status-bar :nth-last-child(2).status-bar-item::after, body.flexcyon-status-style-pl10k .status-bar :last-child.status-bar-item, body.flexcyon-status-style-pl10k .status-bar :last-child.status-bar-item::after {
background-color: transparent;
}`,
    },
    "flexcyon-status-text-enable-color": {
      general: `body.flexcyon-vim-mode-text-enable.flexcyon-status-text-enable-color .markdown-source-view.mod-cm6 .cm-panels.cm-panels-bottom {
padding-block-start: 6px;
border-block-start: unset;
}

body.flexcyon-vim-mode-text-enable.flexcyon-status-text-enable-color .cm-editor .cm-scroller:not(.cm-vimMode) .cm-sizer:has(+ .cm-vimCursorLayer)::before {
position: fixed;
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: var(--flexcyon-vim-left-positioning);
block-size: 30px;
padding: 0 8px;
color: var(--text-accent);
content: var(--flexcyon-vim-insert-text);
}

body.flexcyon-vim-mode-text-enable.flexcyon-status-text-enable-color .cm-editor .cm-scroller.cm-vimMode:not(:has(+ .cm-panels)) .cm-sizer:has(+ .cm-vimCursorLayer)::before {
position: fixed;
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: var(--flexcyon-vim-left-positioning);
block-size: 30px;
padding: 0 8px;
font-family: var(--font-interface);
color: var(--color-purple);
content: var(--flexcyon-vim-normal-text);
}

body.flexcyon-vim-mode-text-enable.flexcyon-status-text-enable-color .cm-panels .cm-panel div div:not(.cm-vim-message) span:first-child {
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: 75px;
}

body.flexcyon-vim-mode-text-enable.flexcyon-status-text-enable-color .cm-panels .cm-panel {
padding-block-start: 5px;
font-weight: 500;
background-color: var(--color-base-00);
}

body.flexcyon-vim-mode-text-enable.flexcyon-status-text-enable-color .cm-panels input {
z-index: 16;
font-size: 0.9rem;
transform: translateY(-4px);
}

body.flexcyon-vim-mode-text-enable.flexcyon-status-text-enable-color .cm-editor > .cm-scroller + .cm-panels .cm-panel div div:not(.cm-vim-message)::before {
inset-block-end: var(--flexcyon-vim-bottom-positioning);
padding-inline-end: 4px;
color: var(--color-blue);
content: var(--flexcyon-vim-command-text);
}

body.flexcyon-vim-mode-text-enable.flexcyon-status-text-enable-color .cm-editor > .cm-scroller + .cm-panels .cm-panel div {
color: var(--text-muted);
}

body.flexcyon-vim-mode-text-enable.flexcyon-status-text-enable-color div.cm-vim-message {
font-weight: bold;
color: var(--color-red) !important;
}

body.flexcyon-status-text-enable-color .plugin-editor-status[aria-label=Reading]::before {
color: var(--text-accent);
}

body.flexcyon-status-text-enable-color .plugin-editor-status[aria-label="Source mode"]::before {
color: var(--color-purple);
}

body.flexcyon-status-text-enable-color .plugin-editor-status[aria-label="Live Preview"]::before {
color: var(--color-blue);
}`,
    },
    "flexcyon-no-status-in-new-tab": {
      general: `body.flexcyon-no-status-in-new-tab:has(.mod-active > [data-type=empty]) .status-bar {
display: none;
}`,
    },
    "flexcyon-titlebar-button-effects": {
      general: `body.flexcyon-titlebar-button-effects .titlebar-button.mod-minimize:hover {
color: var(--color-cyan);
}

body.flexcyon-titlebar-button-effects .titlebar-button.mod-maximize:hover {
color: var(--color-blue);
}

body.flexcyon-titlebar-button-effects .titlebar-button.mod-close:hover {
color: var(--text-normal);
}

body.flexcyon-titlebar-button-effects .titlebar-button {
opacity: var(--dimmed);
}

body.flexcyon-titlebar-button-effects .titlebar-button:hover {
opacity: unset;
scale: var(--expand);
}`,
    },
    "flexcyon-highlight-active-line": {
      general: `body.flexcyon-highlight-active-line .cm-active.cm-line, body.flexcyon-highlight-active-line .cm-active > span.cm-quote {
background-color: color-mix(in oklch, var(--text-accent) var(--flexcyon-highlight-active-line-opacity), transparent);
}`,
    },
    "flexcyon-enable-rel-nums": {
      general: `body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + *, body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active) {
font-size: 0;
}

body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + *, body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active) {
font-size: 0;
}

body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + *, body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + .cm-active) {
font-size: 0;
}

body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + *, body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + *, body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + *, body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + *, body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + *, body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + *, body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + * + *, body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + * + * + *, body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active) {
font-size: 0;
}

body.flexcyon-relative-num-only:not(.is-mobile) .cm-lineNumbers .cm-gutterElement:not(.cm-active) {
font-size: 0;
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + *::before {
--flexcyon-rel-bel-1: "1";
content: var(--flexcyon-rel-bel-1);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active)::before {
--flexcyon-rel-abv-0: "0";
content: var(--flexcyon-rel-abv-0);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + *::before {
--flexcyon-rel-bel-2: "2";
content: var(--flexcyon-rel-bel-2);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active)::before {
--flexcyon-rel-abv-1: "1";
content: var(--flexcyon-rel-abv-1);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + *::before {
--flexcyon-rel-bel-3: "3";
content: var(--flexcyon-rel-bel-3);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + .cm-active)::before {
--flexcyon-rel-abv-2: "2";
content: var(--flexcyon-rel-abv-2);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + *::before {
--flexcyon-rel-bel-4: "4";
content: var(--flexcyon-rel-bel-4);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + .cm-active)::before {
--flexcyon-rel-abv-3: "3";
content: var(--flexcyon-rel-abv-3);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + *::before {
--flexcyon-rel-bel-5: "5";
content: var(--flexcyon-rel-bel-5);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + .cm-active)::before {
--flexcyon-rel-abv-4: "4";
content: var(--flexcyon-rel-abv-4);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + *::before {
--flexcyon-rel-bel-6: "6";
content: var(--flexcyon-rel-bel-6);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-5: "5";
content: var(--flexcyon-rel-abv-5);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-7: "7";
content: var(--flexcyon-rel-bel-7);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-6: "6";
content: var(--flexcyon-rel-abv-6);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-8: "8";
content: var(--flexcyon-rel-bel-8);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-7: "7";
content: var(--flexcyon-rel-abv-7);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-9: "9";
content: var(--flexcyon-rel-bel-9);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-8: "8";
content: var(--flexcyon-rel-abv-8);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-10: "10";
content: var(--flexcyon-rel-bel-10);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-9: "9";
content: var(--flexcyon-rel-abv-9);
}

body.flexcyon-enable-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-10: "10";
content: var(--flexcyon-rel-abv-10);
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active)::before {
--flexcyon-rel-abv-1: "α";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + .cm-active)::before {
--flexcyon-rel-abv-2: "β";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + .cm-active)::before {
--flexcyon-rel-abv-3: "γ";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + .cm-active)::before {
--flexcyon-rel-abv-4: "δ";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-5: "ε";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-6: "ζ";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-7: "η";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-8: "θ";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-9: "ι";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + .cm-active)::before {
font-size: 0.95rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-10: "κ";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + * + .cm-active)::before {
font-size: 0.95rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + *::before {
--flexcyon-rel-bel-1: "α";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + *::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + *::before {
--flexcyon-rel-bel-2: "β";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + *::before {
--flexcyon-rel-bel-3: "γ";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + *::before {
--flexcyon-rel-bel-4: "δ";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + *::before {
--flexcyon-rel-bel-5: "ε";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + *::before {
--flexcyon-rel-bel-6: "ζ";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-7: "η";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-8: "θ";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-9: "ι";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + *::before {
font-size: 0.95rem;
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-10: "κ";
}

body.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + * + *::before {
font-size: 0.95rem;
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active)::before {
--flexcyon-rel-abv-1: "I";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + .cm-active)::before {
--flexcyon-rel-abv-2: "II";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + .cm-active)::before {
--flexcyon-rel-abv-3: "III";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + .cm-active)::before {
--flexcyon-rel-abv-4: "IV";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-5: "V";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-6: "VI";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-7: "VII";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-8: "VIII";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-9: "IX";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-10: "X";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + *::before {
--flexcyon-rel-bel-1: "I";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + *::before {
--flexcyon-rel-bel-2: "II";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + *::before {
--flexcyon-rel-bel-3: "III";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + *::before {
--flexcyon-rel-bel-4: "IV";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + *::before {
--flexcyon-rel-bel-5: "V";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + *::before {
--flexcyon-rel-bel-6: "VI";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-7: "VII";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-8: "VIII";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-9: "IX";
}

body.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-10: "X";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active)::before {
--flexcyon-rel-abv-1: "一";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + .cm-active)::before {
--flexcyon-rel-abv-2: "二";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + .cm-active)::before {
--flexcyon-rel-abv-3: "三";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + .cm-active)::before {
--flexcyon-rel-abv-4: "四";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-5: "五";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-6: "六";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-7: "七";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-8: "八";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-9: "九";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-10: "十";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + *::before {
--flexcyon-rel-bel-1: "一";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + *::before {
--flexcyon-rel-bel-2: "二";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + *::before {
--flexcyon-rel-bel-3: "三";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + *::before {
--flexcyon-rel-bel-4: "四";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + *::before {
--flexcyon-rel-bel-5: "五";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + *::before {
--flexcyon-rel-bel-6: "六";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-7: "七";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-8: "八";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-9: "九";
}

body.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-10: "十";
}`,
    },
    "flexcyon-no-num-with-relative": {
      general: `body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + *, body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active) {
font-size: 0;
}

body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + *, body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active) {
font-size: 0;
}

body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + *, body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + .cm-active) {
font-size: 0;
}

body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + *, body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + *, body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + *, body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + *, body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + *, body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + *, body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + * + *, body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + * + * + *, body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + * + .cm-active) {
font-size: 0;
}

body.flexcyon-enable-rel-nums.flexcyon-no-num-with-relative:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active) {
font-size: 0;
}`,
    },
    "flexcyon-relative-num-only": {
      general: `body.flexcyon-enable-rel-nums.flexcyon-relative-num-only:not(.is-mobile) .cm-lineNumbers .cm-gutterElement:not(.cm-active) {
font-size: 0;
}`,
    },
    "flexcyon-roman-rel-nums": {
      general: `body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active)::before {
--flexcyon-rel-abv-1: "I";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + .cm-active)::before {
--flexcyon-rel-abv-2: "II";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + .cm-active)::before {
--flexcyon-rel-abv-3: "III";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + .cm-active)::before {
--flexcyon-rel-abv-4: "IV";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-5: "V";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-6: "VI";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-7: "VII";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-8: "VIII";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-9: "IX";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-10: "X";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + *::before {
--flexcyon-rel-bel-1: "I";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + *::before {
--flexcyon-rel-bel-2: "II";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + *::before {
--flexcyon-rel-bel-3: "III";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + *::before {
--flexcyon-rel-bel-4: "IV";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + *::before {
--flexcyon-rel-bel-5: "V";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + *::before {
--flexcyon-rel-bel-6: "VI";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-7: "VII";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-8: "VIII";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-9: "IX";
}

body.flexcyon-enable-rel-nums.flexcyon-roman-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-10: "X";
}`,
    },
    "flexcyon-greek-rel-nums": {
      general: `body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active)::before {
--flexcyon-rel-abv-1: "α";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + .cm-active)::before {
--flexcyon-rel-abv-2: "β";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + .cm-active)::before {
--flexcyon-rel-abv-3: "γ";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + .cm-active)::before {
--flexcyon-rel-abv-4: "δ";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-5: "ε";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-6: "ζ";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-7: "η";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-8: "θ";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + .cm-active)::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-9: "ι";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + .cm-active)::before {
font-size: 0.95rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-10: "κ";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + * + .cm-active)::before {
font-size: 0.95rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + *::before {
--flexcyon-rel-bel-1: "α";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + *::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + *::before {
--flexcyon-rel-bel-2: "β";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + *::before {
--flexcyon-rel-bel-3: "γ";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + *::before {
--flexcyon-rel-bel-4: "δ";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + *::before {
--flexcyon-rel-bel-5: "ε";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + *::before {
--flexcyon-rel-bel-6: "ζ";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-7: "η";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-8: "θ";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + *::before {
font-size: 0.925rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-9: "ι";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + *::before {
font-size: 0.95rem;
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-10: "κ";
}

body.flexcyon-enable-rel-nums.flexcyon-greek-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + * + *::before {
font-size: 0.95rem;
}`,
    },
    "flexcyon-chinese-rel-nums": {
      general: `body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ .cm-active)::before {
--flexcyon-rel-abv-1: "一";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + .cm-active)::before {
--flexcyon-rel-abv-2: "二";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + .cm-active)::before {
--flexcyon-rel-abv-3: "三";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + .cm-active)::before {
--flexcyon-rel-abv-4: "四";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-5: "五";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-6: "六";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-7: "七";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-8: "八";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-9: "九";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers *:has(+ * + * + * + * + * + * + * + * + * + .cm-active)::before {
--flexcyon-rel-abv-10: "十";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + *::before {
--flexcyon-rel-bel-1: "一";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + *::before {
--flexcyon-rel-bel-2: "二";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + *::before {
--flexcyon-rel-bel-3: "三";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + *::before {
--flexcyon-rel-bel-4: "四";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + *::before {
--flexcyon-rel-bel-5: "五";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + *::before {
--flexcyon-rel-bel-6: "六";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-7: "七";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-8: "八";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-9: "九";
}

body.flexcyon-enable-rel-nums.flexcyon-chinese-rel-nums:not(.is-mobile) .cm-lineNumbers .cm-active + * + * + * + * + * + * + * + * + * + *::before {
--flexcyon-rel-bel-10: "十";
}`,
    },
    "flexcyon-repl-active-line-num-str": {
      general: `body.flexcyon-repl-active-line-num-str .cm-gutterElement.cm-active {
font-size: 0;
}

body.flexcyon-repl-active-line-num-str .cm-gutterElement.cm-active::before {
font-size: calc(var(--font-ui-medium) + 0.07rem);
letter-spacing: var(--flexcyon-repl-active-str-space);
content: var(--flexcyon-repl-active-line-str);
}`,
    },
    "flexcyon-enable-smooth-cursor": {
      general: `body.flexcyon-enable-smooth-cursor {
--flexcyon-cursor-duration: 42.5ms;
--flexcyon-cursor-timing-fn: ease-in;
--flexcyon-cursor-min-width: unset;
}

body.flexcyon-enable-smooth-cursor .cm-cursor-primary {
min-inline-size: var(--flexcyon-cursor-min-width);
transition: transform var(--flexcyon-cursor-duration) var(--flexcyon-cursor-timing-fn);
}`,
    },
    "flexcyon-display-os": {
      general: `body.flexcyon-display-os .view-actions::before {
padding-inline: var(--flexcyon-os-detail-padding-l) var(--flexcyon-os-detail-padding-r);
font-size: var(--file-header-font-size);
color: var(--text-muted);
}

body.flexcyon-display-os:not(:has(.mod-stacked)) .titlebar::before, body.flexcyon-display-os .mod-stacked .view-actions::before {
display: none;
}

body.flexcyon-display-os .titlebar::before {
padding-block-start: 11.5px;
padding-inline-start: calc(5 * var(--flexcyon-os-detail-padding-r));
font-size: var(--file-header-font-size);
color: var(--text-muted);
}

body.flexcyon-display-os .titlebar::before, body.flexcyon-display-os:not(.is-mobile) .view-actions::before {
content: "Unknown Desktop";
}

body.is-mobile .view-actions::before, body.is-mobile .titlebar::before {
content: "Unknown Device";
}

body.flexcyon-display-os :not(.show-view-header) .mod-root .workspace-tab-container .mod-active .workspace-leaf-content::after {
position: fixed;
inset-block-start: 2px;
inset-inline-end: 16px;
}

body.flexcyon-display-os:not(.show-view-header) .mod-root .workspace-tab-container .mod-active .workspace-leaf-content {
padding-block-start: 6px;
}

body.is-mobile.emulate-mobile .view-actions::before, body.is-mobile.emulate-mobile .titlebar::before, body.is-mobile.emulate-mobile :not(.show-view-header) .mod-root .workspace-tab-container .mod-active .workspace-leaf-content::after {
content: "Mobile Emulation";
}

body.is-ios:not(.is-tablet) .view-actions::before, body.is-ios:not(.is-tablet) .titlebar::before, body.is-ios:not(.is-tablet) :not(.show-view-header) .mod-root .workspace-tab-container .mod-active .workspace-leaf-content::after {
content: "ios Device";
}

body.is-ios.is-tablet .view-actions::before, body.is-ios.is-tablet .titlebar::before, body.is-ios.is-tablet :not(.show-view-header) .mod-root .workspace-tab-container .mod-active .workspace-leaf-content::after {
content: "ios Tablet";
}

body.is-android:not(.is-tablet) .view-actions::before, body.is-android:not(.is-tablet) .titlebar::before, body.is-android:not(.is-tablet) :not(.show-view-header) .mod-root .workspace-tab-container .mod-active .workspace-leaf-content::after {
content: "Android Device";
}

body.is-android.is-tablet .view-actions::before, body.is-android.is-tablet .titlebar::before, body.is-android.is-tablet :not(.show-view-header) .mod-root .workspace-tab-container .mod-active .workspace-leaf-content::after {
content: "Android Tablet";
}

body.flexcyon-display-os:not(.is-mobile).mod-linux .view-actions::before, body.flexcyon-display-os:not(.is-mobile).mod-linux .titlebar::before, body.flexcyon-display-os:not(.is-mobile).mod-linux :not(.show-view-header) .mod-root .workspace-tab-container .mod-active .workspace-leaf-content::after {
content: "Linux Desktop";
}

body.flexcyon-display-os:not(.is-mobile).mod-windows .view-actions::before, body.flexcyon-display-os:not(.is-mobile).mod-windows .titlebar::before, body.flexcyon-display-os:not(.is-mobile).mod-windows :not(.show-view-header) .mod-root .workspace-tab-container .mod-active .workspace-leaf-content::after {
content: "Windows Desktop";
}

body.flexcyon-display-os:not(.is-mobile, .mod-windows, .mod-linux) .view-actions::before, body.flexcyon-display-os:not(.is-mobile, .mod-windows, .mod-linux) .titlebar::before, body.flexcyon-display-os:not(.is-mobile, .mod-windows, .mod-linux) :not(.show-view-header) .mod-root .workspace-tab-container .mod-active .workspace-leaf-content::after {
content: "MacOS Desktop";
}`,
    },
    "flexcyon-display-screen-dimens": {
      general: `body.flexcyon-display-screen-dimens .titlebar::after {
position: absolute;
inset-inline: 0px 0;
display: flex;
justify-content: center;
inline-size: fit-content;
max-inline-size: 85%;
margin: 0 auto;
}

body.flexcyon-display-screen-dimens .titlebar::after {
padding-block-start: 12px;
padding-inline-end: calc(8 * var(--flexcyon-screen-dimens-padding-l));
font-size: var(--file-header-font-size);
color: var(--text-muted);
content: counter(w) "x" counter(h);
counter-reset: h var(--h) w var(--w);
}

body.flexcyon-display-screen-dimens:not(:has(.mod-stacked)) .titlebar::after, body.flexcyon-display-screen-dimens .mod-stacked .view-header-left::after {
display: none;
}

body.flexcyon-display-screen-dimens:not(.show-view-header) .mod-root .workspace-tab-container .mod-active::before, body.flexcyon-display-screen-dimens:not(.mod-stacked) .view-header-left::after {
padding-block-start: -0.5vh;
padding-inline-start: var(--flexcyon-screen-dimens-padding-l);
font-size: var(--file-header-font-size);
color: var(--text-muted);
content: counter(w) "x" counter(h);
counter-reset: h var(--h) w var(--w);
}

body.flexcyon-display-screen-dimens:not(.show-view-header) .mod-root .workspace-tab-container .mod-active::before {
padding-block-start: 4px;
}`,
    },
    "flexcyon-number-tabs": {
      general: `body.flexcyon-number-tabs {
counter-reset: numTab 0;
}

body.flexcyon-number-tabs .workspace-tab-header-inner-title::before {
margin-inline-end: 12px;
overflow: hidden;
font-size: var(--font-ui-medium);
font-weight: bold;
color: inherit;
content: counter(numTab);
}

body.flexcyon-number-tabs .workspace-tab-header {
counter-increment: numTab;
}

body.flexcyon-number-tabs .mod-stacked .workspace-tab-header-inner-title::before {
margin-block-end: 12px;
}`,
    },
    "flexcyon-remove-tab-headers": {
      general: `body.flexcyon-remove-tab-headers {
--tab-stacked-font-size: 0px;
}

body.flexcyon-remove-tab-headers .workspace-tabs .workspace-tab-header {
--tab-width: 90px;
}

body.flexcyon-remove-tab-headers .workspace-tabs .workspace-tab-header .workspace-tab-header-inner-title {
font-size: 0;
}

body.flexcyon-remove-tab-headers .workspace-tabs .workspace-tab-header .workspace-tab-header-inner-title::before {
margin-inline-end: 0;
}`,
    },
    "flexcyon-reverse-tab-header-container": {
      general: `body.flexcyon-reverse-tab-header-container .workspace-tabs {
flex-direction: column-reverse;
}

body.flexcyon-reverse-tab-header-container .status-bar {
inset-block-end: 40px;
--flexcyon-status-hide-trigger-translation: 80px;
}`,
    },
    "flexcyon-settings-smiley-icons-enabled": {
      general: `body.flexcyon-ensure-plugin-icon:not([class*=iconic]) div.setting-item-control div.checkbox-container, body.flexcyon-settings-smiley-icons-enabled:not(.flexcyon-ensure-plugin-icon) div.setting-item-control div.checkbox-container {
font-weight: bolder;
background-color: var(--color-base-05);
box-shadow: unset;
}

body.flexcyon-ensure-plugin-icon:not([class*=iconic]) div.setting-item-control div.checkbox-container::after, body.flexcyon-settings-smiley-icons-enabled:not(.flexcyon-ensure-plugin-icon) div.setting-item-control div.checkbox-container::after {
inline-size: fit-content;
block-size: fit-content;
color: var(--color-red);
content: ":(";
background-color: inherit;
border-radius: 25%;
box-shadow: unset;
transform: translateY(-10%);
}

body.flexcyon-ensure-plugin-icon:not([class*=iconic]) div.setting-item-control div.checkbox-container.is-enabled::after, body.flexcyon-settings-smiley-icons-enabled:not(.flexcyon-ensure-plugin-icon) div.setting-item-control div.checkbox-container.is-enabled::after {
color: var(--color-green);
content: ":)";
transform: translate(16px, -10%);
}

body.flexcyon-ensure-plugin-icon:not([class*=iconic]) div.setting-item-control input.slider, body.flexcyon-settings-smiley-icons-enabled:not(.flexcyon-ensure-plugin-icon) div.setting-item-control input.slider {
border-radius: unset;
}`,
      light: `body.flexcyon-ensure-plugin-icon:not([class*=iconic]) div.setting-item-control div.checkbox-container::after, body.flexcyon-settings-smiley-icons-enabled:not(.flexcyon-ensure-plugin-icon) div.setting-item-control div.checkbox-container::after {
font-weight: bold;
filter: saturate(2.5);
}`,
    },
    "flexcyon-ascii-icon-set": {
      general: `body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .modal-close-button, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .modal-close-button {
position: absolute;
inset-block-start: 16px;
inset-inline-end: 2.5%;
inline-size: 24px;
padding-inline-end: 48px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .modal-close-button::before, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .modal-close-button::before {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .modal-close-button::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .modal-close-button::after {
font-size: var(--font-ui-small);
content: "x_x";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .search-input-container::before, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .search-input-container::before {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .search-input-container::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .search-input-container::after {
position: absolute;
inset-block-end: 6px;
inset-inline-start: 0;
margin: 0 8px;
font-size: var(--font-ui-small);
content: "?/";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .modal.mod-settings .vertical-tab-content, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .modal.mod-settings .vertical-tab-content {
padding-block-start: 48px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .iconic-add svg, body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .iconic-drag svg, body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .iconic-rule-icon svg, body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .omnisearch-result__icon svg, body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .workspace-tab-header-inner-close-button svg, body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .workspace-left-content[aria-label*=Back] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-add svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-drag svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-rule-icon svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .omnisearch-result__icon svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .workspace-tab-header-inner-close-button svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .workspace-left-content[aria-label*=Back] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .iconic-rule-icon, body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .iconic-add, body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .iconic-drag, body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .workspace-left-content[aria-label*=Back], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-rule-icon, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-add, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-drag, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .workspace-left-content[aria-label*=Back] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .iconic-rule-icon::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-rule-icon::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "./^";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .iconic-add::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-add::after {
font-size: var(--font-ui-small);
color: var(--color-green);
letter-spacing: -0.75px;
content: "[~]";
transform: translateX(-24px);
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .iconic-drag::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-drag::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "|||";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .omnisearch-result__icon:has(.lucide-file)::before, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .omnisearch-result__icon:has(.lucide-file)::before {
font-size: var(--font-ui-smaller);
letter-spacing: -2px;
content: "''";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .omnisearch-result__icon:has(.lucide-file-text)::before, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .omnisearch-result__icon:has(.lucide-file-text)::before {
font-size: var(--font-ui-smaller);
letter-spacing: -2px;
content: "\`\`";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .workspace-left-content[aria-label*=Back]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .workspace-left-content[aria-label*=Back]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "<";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .workspace-tab-header-inner-close-button, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .workspace-tab-header-inner-close-button {
color: inherit;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .workspace-tab-header-inner-close-button::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .workspace-tab-header-inner-close-button::after {
font-size: var(--font-ui-small);
content: "x_x";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Uninstall], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Uninstall] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Uninstall]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Uninstall]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "*_*";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Uninstall] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Uninstall] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Options], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Options] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Options]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Options]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[*]";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Options] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Options] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Hotkeys], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Hotkeys] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Hotkeys]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Hotkeys]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[%]";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Hotkeys] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Hotkeys] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Customise this command"], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Customise this command"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Customise this command"]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Customise this command"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[~]";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Customise this command"] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Customise this command"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Customize this command"], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Customize this command"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Customize this command"]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Customize this command"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[~]";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Customize this command"] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Customize this command"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Export settings"], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Export settings"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Export settings"]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Export settings"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: ".>";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Export settings"] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Export settings"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Donate], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Donate] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Donate]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Donate]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "<3";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Donate] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Donate] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Reload], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Reload] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Reload]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Reload]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[R]";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Reload] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Reload] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Change sort order"], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Change sort order"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Change sort order"]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Change sort order"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "|'|";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Change sort order"] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Change sort order"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=folder], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=folder] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=folder]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=folder]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "./^";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=folder] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=folder] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Restore default"], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Restore default"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Restore default"]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Restore default"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[0]";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Restore default"] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Restore default"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Reset all settings to default"], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Reset all settings to default"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Reset all settings to default"]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Reset all settings to default"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[0]";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Reset all settings to default"] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Reset all settings to default"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="New note"], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New note"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="New note"]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New note"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[N]";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="New note"] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New note"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Expand], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Expand] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Expand]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Expand]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[+]";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Expand] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Expand] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Collapse], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Collapse] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Collapse]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Collapse]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[-]";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Collapse] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Collapse] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Auto-reveal current file"], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Auto-reveal current file"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Auto-reveal current file"]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Auto-reveal current file"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[>]";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Auto-reveal current file"] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Auto-reveal current file"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Auto-scroll to current section"], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Auto-scroll to current section"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Auto-scroll to current section"]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Auto-scroll to current section"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[>]";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Auto-scroll to current section"] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Auto-scroll to current section"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Show search filter"], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Show search filter"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Show search filter"]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Show search filter"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "?/";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Show search filter"] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Show search filter"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Bookmark the active tab"], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Bookmark the active tab"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Bookmark the active tab"]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Bookmark the active tab"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[B]";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="Bookmark the active tab"] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Bookmark the active tab"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="New bookmark group"], body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New bookmark group"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="New bookmark group"]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New bookmark group"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "{+}";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="New bookmark group"] svg, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New bookmark group"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*="New bookmark group"]::after, body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Collapse]::after, body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) [aria-label*=Expand]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New bookmark group"]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Collapse]::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Expand]::after {
letter-spacing: -2px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .nav-buttons-container, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .nav-buttons-container {
gap: 6px;
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .search-input-clear-button::before, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .search-input-clear-button::before {
content: "x_x";
}

body.flexcyon-ascii-icon-set:not(.flexcyon-ensure-plugin-icon) .search-input-clear-button::after, body.flexcyon-ensure-plugin-icon:not([class*=iconic]) .search-input-clear-button::after {
opacity: 0;
}`,
    },
    "flexcyon-ensure-plugin-icon": {
      general: `body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .modal-close-button {
position: absolute;
inset-block-start: 16px;
inset-inline-end: 2.5%;
inline-size: 24px;
padding-inline-end: 48px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .modal-close-button::before {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .modal-close-button::after {
font-size: var(--font-ui-small);
content: "x_x";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .search-input-container::before {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .search-input-container::after {
position: absolute;
inset-block-end: 6px;
inset-inline-start: 0;
margin: 0 8px;
font-size: var(--font-ui-small);
content: "?/";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .modal.mod-settings .vertical-tab-content {
padding-block-start: 48px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-add svg, body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-drag svg, body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-rule-icon svg, body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .omnisearch-result__icon svg, body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .workspace-tab-header-inner-close-button svg, body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .workspace-left-content[aria-label*=Back] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-rule-icon, body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-add, body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-drag, body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .workspace-left-content[aria-label*=Back] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-rule-icon::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "./^";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-add::after {
font-size: var(--font-ui-small);
color: var(--color-green);
letter-spacing: -0.75px;
content: "[~]";
transform: translateX(-24px);
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .iconic-drag::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "|||";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .omnisearch-result__icon:has(.lucide-file)::before {
font-size: var(--font-ui-smaller);
letter-spacing: -2px;
content: "''";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .omnisearch-result__icon:has(.lucide-file-text)::before {
font-size: var(--font-ui-smaller);
letter-spacing: -2px;
content: "\`\`";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .workspace-left-content[aria-label*=Back]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "<";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .workspace-tab-header-inner-close-button {
color: inherit;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .workspace-tab-header-inner-close-button::after {
font-size: var(--font-ui-small);
content: "x_x";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Uninstall] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Uninstall]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "*_*";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Uninstall] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Options] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Options]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[*]";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Options] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Hotkeys] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Hotkeys]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[%]";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Hotkeys] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Customise this command"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Customise this command"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[~]";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Customise this command"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Customize this command"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Customize this command"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[~]";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Customize this command"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Export settings"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Export settings"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: ".>";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Export settings"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Donate] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Donate]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "<3";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Donate] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Reload] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Reload]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[R]";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Reload] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Change sort order"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Change sort order"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "|'|";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Change sort order"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=folder] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=folder]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "./^";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=folder] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Restore default"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Restore default"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[0]";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Restore default"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Reset all settings to default"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Reset all settings to default"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[0]";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Reset all settings to default"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New note"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New note"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[N]";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New note"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Expand] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Expand]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[+]";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Expand] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Collapse] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Collapse]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[-]";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Collapse] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Auto-reveal current file"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Auto-reveal current file"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[>]";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Auto-reveal current file"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Auto-scroll to current section"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Auto-scroll to current section"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[>]";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Auto-scroll to current section"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Show search filter"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Show search filter"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "?/";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Show search filter"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Bookmark the active tab"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Bookmark the active tab"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "[B]";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="Bookmark the active tab"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New bookmark group"] {
inline-size: 24px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New bookmark group"]::after {
font-size: var(--font-ui-small);
letter-spacing: -0.75px;
content: "{+}";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New bookmark group"] svg {
opacity: 0;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*="New bookmark group"]::after, body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Collapse]::after, body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) [aria-label*=Expand]::after {
letter-spacing: -2px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .nav-buttons-container {
gap: 6px;
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .search-input-clear-button::before {
content: "x_x";
}

body.flexcyon-ascii-icon-set.flexcyon-ensure-plugin-icon:not([class*=iconic]) .search-input-clear-button::after {
opacity: 0;
}

body.flexcyon-settings-smiley-icons-enabled.flexcyon-ensure-plugin-icon:not([class*=iconic]) div.setting-item-control div.checkbox-container {
font-weight: bolder;
background-color: var(--color-base-05);
box-shadow: unset;
}

body.flexcyon-settings-smiley-icons-enabled.flexcyon-ensure-plugin-icon:not([class*=iconic]) div.setting-item-control div.checkbox-container::after {
inline-size: fit-content;
block-size: fit-content;
color: var(--color-red);
content: ":(";
background-color: inherit;
border-radius: 25%;
box-shadow: unset;
transform: translateY(-10%);
}

body.flexcyon-settings-smiley-icons-enabled.flexcyon-ensure-plugin-icon:not([class*=iconic]) div.setting-item-control div.checkbox-container.is-enabled::after {
color: var(--color-green);
content: ":)";
transform: translate(16px, -10%);
}

body.flexcyon-settings-smiley-icons-enabled.flexcyon-ensure-plugin-icon:not([class*=iconic]) div.setting-item-control input.slider {
border-radius: unset;
}`,
      light: `body.flexcyon-settings-smiley-icons-enabled.flexcyon-ensure-plugin-icon:not([class*=iconic]) div.setting-item-control div.checkbox-container::after {
font-weight: bold;
filter: saturate(2.5);
}`,
    },
    "flexcyon-settings-coloured-icons": {
      general: `body.flexcyon-settings-coloured-icons [aria-label^=Uninstall] {
color: rgb(var(--color-red-rgb), 0.9);
}

body.flexcyon-settings-coloured-icons [aria-label^=Options] {
color: rgb(var(--color-blue-rgb), 0.9);
}

body.flexcyon-settings-coloured-icons [aria-label^="Customise this command"], body.flexcyon-settings-coloured-icons [aria-label^="Customize this command"], body.flexcyon-settings-coloured-icons [aria-label^=Hotkeys], body.flexcyon-settings-coloured-icons [aria-label^="Open snippets folder"], body.flexcyon-settings-coloured-icons [aria-label^="Open plugins folder"] {
color: rgb(var(--color-green-rgb), 0.9);
}

body.flexcyon-settings-coloured-icons [aria-label^="Donate to support"] {
color: rgb(var(--color-pink-rgb), 0.9);
}

body.flexcyon-settings-coloured-icons [aria-label^="Reload plugins"], body.flexcyon-settings-coloured-icons [aria-label^="Reload snippets"] {
color: rgb(var(--color-cyan-rgb), 0.9);
}

body.flexcyon-settings-coloured-icons [aria-label^="Restore default"] {
color: rgb(var(--color-purple-rgb), 0.9);
}`,
    },
    "flexcyon-stylised-pins": {
      general: `body.flexcyon-stylised-pins :is(.mod-left-split, .mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header-inner-icon + div + div.workspace-tab-header-status-container {
inline-size: 0;
}

body.flexcyon-stylised-pins :is(.mod-left-split, .mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header-inner-icon + div + div.workspace-tab-header-status-container .mod-pinned {
--icon-size: var(--icon-xs);
color: var(--color-accent-2);
transform: translate(-3px, -11px);
}

body.flexcyon-vertical-nav :is(.mod-left-split, .mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header-inner-icon:has(+ div + div.workspace-tab-header-status-container > .mod-pinned) {
transform: translateY(8px);
}

body.flexcyon-vertical-nav :is(.mod-left-split, .mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header-inner-icon + div + div.workspace-tab-header-status-container .mod-pinned {
--icon-size: var(--icon-xs);
color: var(--color-accent-2);
transform: translate(5px, -22px);
}`,
    },
    "flexcyon-settings-comm-item-enabled": {
      general: `body.flexcyon-settings-comm-item-enabled div.community-modal-search-results div.community-item {
opacity: var(--flexcyon-comm-item-opacity);
}

body.flexcyon-settings-comm-item-enabled div.community-modal-search-results div.community-item.is-selected {
font-weight: bold;
border: unset;
opacity: unset;
}

body.flexcyon-settings-comm-item-enabled div.community-item div.community-item-name span.flair.mod-pop {
position: absolute;
inset-block-start: 0.7rem;
inset-inline-end: 0.5rem;
color: var(--color-base-25);
background-color: var(--text-accent);
}

body.flexcyon-settings-comm-item-enabled div.community-item.is-selected div.community-item-name span.flair.mod-pop {
color: var(--text-normal);
background-color: var(--color-base-25);
}

body.flexcyon-settings-comm-item-enabled .community-item-name {
inline-size: 75%;
color: var(--color-blue);
overflow-wrap: break-word;
}

body.flexcyon-settings-comm-item-enabled .community-item-downloads, body.flexcyon-settings-comm-item-enabled .community-modal-info-downloads {
color: rgb(var(--color-cyan-rgb), var(--flexcyon-comm-item-opacity));
}

body.flexcyon-settings-comm-item-enabled .community-item-updated {
color: rgb(var(--color-blue-rgb), calc(var(--flexcyon-comm-item-opacity) - 0.1));
}

body.flexcyon-settings-comm-item-enabled .community-modal-info-version {
color: rgb(var(--color-green-rgb), calc(var(--flexcyon-comm-item-opacity) - 0.1));
}`,
      dark: `body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected {
background-color: var(--background-primary);
border: none;
}

body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected span.flair.mod-pop {
background-color: rgb(var(--color-yellow-rgb), var(--dimmed));
}

body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected .community-item-name {
font-weight: bold;
color: var(--color-red);
}

body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected .community-item-author {
font-weight: bold;
color: var(--color-blue);
}

body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected .community-item-downloads {
font-weight: bold;
color: var(--color-pink);
}

body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected .community-item-updated {
font-weight: bold;
color: var(--color-purple);
}

body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected .community-item-desc {
color: var(--text-normal);
}`,
      light: `body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected {
background-color: var(--background-primary);
border: none;
}

body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected span.flair.mod-pop {
background-color: rgb(var(--color-blue-rgb), var(--dimmed));
}

body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected .community-item-name {
font-weight: bold;
color: var(--color-red);
}

body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected .community-item-author {
font-weight: bold;
color: var(--color-yellow);
}

body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected .community-item-downloads {
font-weight: bold;
color: var(--color-purple);
}

body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected .community-item-updated {
font-weight: bold;
color: var(--color-green);
}

body.flexcyon-settings-comm-item-enabled:not(.is-phone) .community-item.is-selected .community-item-desc {
color: var(--text-normal);
}

body.flexcyon-settings-comm-item-enabled .community-item-name {
color: var(--color-yellow);
}`,
    },
    "flexcyon-settings-scrollbar-removed": {
      general: `body.flexcyon-settings-scrollbar-removed {
--scrollbar-bg: transparent;
}

body.flexcyon-settings-scrollbar-removed div.community-modal-search-results-wrapper ::-webkit-scrollbar-thumb, body.flexcyon-settings-scrollbar-removed div.modal.mod-settings .vertical-tab-header ::-webkit-scrollbar-thumb, body.flexcyon-settings-scrollbar-removed div.modal-content.vertical-tabs-container ::-webkit-scrollbar-thumb {
display: none;
}`,
    },
    "flexcyon-enable-alt-active-item-effect": {
      general: `body.flexcyon-enable-alt-active-item-effect .vertical-tab-nav-item {
padding-inline-start: 0.5rem;
}

body.flexcyon-enable-alt-active-item-effect .vertical-tab-nav-item.search-settings-input {
padding-inline-start: 0.1rem;
}

body.flexcyon-enable-alt-active-item-effect .vertical-tab-nav-item.is-active {
padding-inline-start: 0.75rem;
color: var(--text-accent);
background: linear-gradient(to right, transparent 0%, var(--text-on-accent) 7.5%, var(--text-on-accent) 87.5%, transparent 100%);
}

body.flexcyon-enable-alt-active-item-effect .vertical-tab-nav-item.is-active:hover {
font-weight: bold;
}`,
    },
    "flexcyon-style-settings-dim-collapsed-headings": {
      general: `body.flexcyon-style-settings-dim-collapsed-headings .style-settings-heading.is-collapsed {
opacity: calc(var(--dimmed) + 0.05);
}`,
    },
    "flexcyon-oz-folder-icons-disabled": {
      general: `body.flexcyon-oz-folder-icons-disabled div.oz-icon-div {
display: none;
}`,
    },
    "flexcyon-oz-file-tree-header-disabled": {
      general: `body.flexcyon-oz-file-tree-header-disabled div.oz-file-tree-header {
display: none;
}`,
    },
    "flexcyon-oz-alternate-folder-count": {
      general: `body.flexcyon-oz-alternate-folder-count div.oz-folder-line {
transition: transform hover 0.325ms ease-in-out;
}

body.flexcyon-oz-alternate-folder-count div.oz-folder-line div.oz-folder-count {
transform: translateY(1000px);
}

body.flexcyon-oz-alternate-folder-count div.oz-folder-line:hover {
max-inline-size: max-content;
}

body.flexcyon-oz-alternate-folder-count div.oz-folder-line:hover div.oz-folder-count span.oz-nav-file-tag {
display: inline;
margin-block-start: 0.5px;
font-weight: inherit;
text-align: start;
text-transform: none;
transform: translateY(-1000px);
}

body.flexcyon-oz-alternate-folder-count div.oz-folder-line:hover div.oz-folder-count span.oz-nav-file-tag::before {
content: "Count: ";
}`,
    },
    "flexcyon-oz-dimmed-file-exts-enabled": {
      general: `body.flexcyon-oz-dimmed-file-exts-enabled div.oz-nav-file-title div svg {
display: none;
}

body.flexcyon-oz-dimmed-file-exts-enabled div.oz-nav-file-title {
padding: var(--flexcyon-tree-item-verti-padding) var(--flexcyon-tree-item-horiz-padding);
}

body.flexcyon-oz-dimmed-file-exts-enabled div.oz-nav-file-title .oz-nav-file-title-content {
inline-size: unset;
}

body.flexcyon-oz-dimmed-file-exts-enabled div.oz-nav-file-title span.oz-nav-file-tag {
padding: unset;
margin: unset;
font-size: var(--font-ui-small);
font-weight: unset;
color: var(--oz-fta-file-pane-file-name-color);
text-transform: lowercase;
letter-spacing: unset;
background-color: unset;
border: unset;
opacity: var(--dimmed);
}

body.flexcyon-oz-dimmed-file-exts-enabled div.oz-nav-file-title span.oz-nav-file-tag::before {
content: ".";
}

body.flexcyon-oz-dimmed-file-exts-enabled div.oz-nav-file-title[data-path$=".md"] div svg {
display: none;
}

body.flexcyon-oz-dimmed-file-exts-enabled div.oz-nav-file-title[data-path$=".md"] span.oz-nav-file-tag {
display: none;
}

body.flexcyon-oz-dimmed-file-exts-enabled div.oz-nav-file-title[data-path$=".md"] div::after {
font-size: var(--font-ui-small);
content: ".md";
opacity: var(--dimmed);
}`,
    },
    "flexcyon-canvas-blur-inactive-nodes": {
      general: `body.flexcyon-canvas-blur-inactive-nodes .canvas:has(.canvas-node.is-editing) .canvas-edges, body.flexcyon-canvas-blur-inactive-nodes .canvas:has(.canvas-node.is-editing) .canvas-node:not(.is-editing) {
filter: blur(var(--flexcyon-canvas-blur-intensity));
}`,
    },
    "flexcyon-canvas-menu-bottom-left": {
      general: `body.flexcyon-canvas-menu-bottom-left .canvas-card-menu {
inset-inline-start: 1%;
transform: none;
}`,
    },
    "flexcyon-canvas-menu-bottom-right": {
      general: `body.flexcyon-canvas-menu-bottom-right .canvas-card-menu {
inset-inline-start: 89%;
transform: none;
}`,
    },
    "flexcyon-canvas-menu-top-center": {
      general: `body.flexcyon-canvas-menu-top-center .canvas-card-menu {
inset-block-end: 94%;
}`,
    },
    "flexcyon-canvas-menu-top-left": {
      general: `body.flexcyon-canvas-menu-top-left .canvas-card-menu {
inset-block-end: 94%;
inset-inline-start: 1%;
transform: none;
}`,
    },
    "flexcyon-canvas-menu-top-right": {
      general: `body.flexcyon-canvas-menu-top-right .canvas-card-menu {
inset-block-end: 94%;
inset-inline-start: 87.5%;
transform: none;
}`,
    },
    "flexcyon-canvas-menu-lcenter-center": {
      general: `body.flexcyon-canvas-menu-lcenter-center .canvas-card-menu {
inset-block-end: 50%;
inset-inline-start: 1%;
flex-direction: column;
transform: none;
}`,
    },
    "flexcyon-canvas-menu-lcenter-top": {
      general: `body.flexcyon-canvas-menu-lcenter-top .canvas-card-menu {
inset-block-end: 82.5%;
inset-inline-start: 1%;
flex-direction: column;
transform: none;
}`,
    },
    "flexcyon-canvas-menu-lcenter-bottom": {
      general: `body.flexcyon-canvas-menu-lcenter-bottom .canvas-card-menu {
inset-block-end: 2.5%;
inset-inline-start: 1%;
flex-direction: column;
transform: none;
}`,
    },
    "flexcyon-canvas-menu-rcenter-center": {
      general: `body.flexcyon-canvas-menu-rcenter-center .canvas-card-menu {
inset-block-end: 40%;
inset-inline-start: 96.1%;
flex-direction: column;
transform: none;
}`,
    },
    "flexcyon-canvas-menu-rcenter-top": {
      general: `body.flexcyon-canvas-menu-rcenter-top .canvas-card-menu {
inset-block-end: 82.5%;
inset-inline-start: 96.1%;
flex-direction: column;
transform: none;
}`,
    },
    "flexcyon-canvas-menu-rcenter-bottom": {
      general: `body.flexcyon-canvas-menu-rcenter-bottom .canvas-card-menu {
inset-block-end: 7.5%;
inset-inline-start: 96.1%;
flex-direction: column;
transform: none;
}`,
    },
    "flexcyon-canvas-menu-rcenter-align": {
      general: `body.flexcyon-canvas-menu-rcenter-align .canvas-card-menu {
inset-block-end: 40%;
inset-inline-start: 96.1%;
flex-direction: column;
transform: none;
}`,
    },
    "flexcyon-var-comps-compact-mode": {
      general: `body.flexcyon-var-comps-compact-mode .various-complements__suggestion-item {
padding: 4px 8px;
}`,
    },
    "flexcyon-omnisearch-no-icons": {
      general: `body.flexcyon-omnisearch-no-icons .omnisearch-result__icon {
display: none;
}`,
    },
    "flexcyon-vim-mode-text-enable": {
      general: `body.flexcyon-vim-mode-text-enable:not(.flexcyon-status-text-enable-color) .markdown-source-view.mod-cm6 .cm-panels.cm-panels-bottom {
padding-block-start: 6px;
border-block-start: unset;
}

body.flexcyon-vim-mode-text-enable:not(.flexcyon-status-text-enable-color) .markdown-source-view.mod-cm6 .cm-editor .cm-scroller:not(.cm-vimMode) .cm-sizer:has(+ .cm-vimCursorLayer)::before {
position: fixed;
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: var(--flexcyon-vim-left-positioning);
z-index: 2;
block-size: 30px;
padding: 0 8px;
font-family: var(--font-interface);
font-size: var(--cm-font-size);
color: var(--text-muted);
content: var(--flexcyon-vim-insert-text);
background-color: var(--cm-panel-bg);
}

body.flexcyon-vim-mode-text-enable:not(.flexcyon-status-text-enable-color) .markdown-source-view.mod-cm6 .cm-editor .cm-scroller.cm-vimMode:not(:has(+ .cm-panels)) .cm-sizer:has(+ .cm-vimCursorLayer)::before {
position: fixed;
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: var(--flexcyon-vim-left-positioning);
z-index: 2;
block-size: 30px;
padding: 0 8px;
font-family: var(--font-interface);
font-size: var(--cm-font-size);
color: var(--text-muted);
content: var(--flexcyon-vim-normal-text);
background-color: var(--cm-panel-bg);
}

body.flexcyon-vim-mode-text-enable:not(.flexcyon-status-text-enable-color) .cm-panels .cm-panel div div:not(.cm-vim-message) span:first-child {
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: 75px;
}

body.flexcyon-vim-mode-text-enable:not(.flexcyon-status-text-enable-color) .cm-panels .cm-panel {
padding-block-start: 5px;
font-weight: 500;
background-color: var(--color-base-00);
}

body.flexcyon-vim-mode-text-enable:not(.flexcyon-status-text-enable-color) .cm-panels input {
z-index: 16;
font-size: 0.9rem;
transform: translateY(-4px);
}

body.flexcyon-vim-mode-text-enable:not(.flexcyon-status-text-enable-color) .cm-editor > .cm-scroller + .cm-panels .cm-panel div div:not(.cm-vim-message)::before {
inset-block-end: var(--flexcyon-vim-bottom-positioning);
padding-inline-end: 4px;
font-family: var(--font-interface);
font-size: var(--cm-font-size);
content: var(--flexcyon-vim-command-text);
}

body.flexcyon-vim-mode-text-enable:not(.flexcyon-status-text-enable-color) .cm-editor > .cm-scroller + .cm-panels .cm-panel div {
color: var(--text-muted);
}

body.flexcyon-vim-mode-text-enable:not(.flexcyon-status-text-enable-color) div.cm-vim-message {
font-weight: bold;
color: var(--color-red) !important;
}

body.flexcyon-status-text-enable-color .markdown-source-view.mod-cm6 .cm-panels.cm-panels-bottom {
padding-block-start: 6px;
border-block-start: unset;
}

body.flexcyon-status-text-enable-color .cm-editor .cm-scroller:not(.cm-vimMode) .cm-sizer:has(+ .cm-vimCursorLayer)::before {
position: fixed;
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: var(--flexcyon-vim-left-positioning);
block-size: 30px;
padding: 0 8px;
color: var(--text-accent);
content: var(--flexcyon-vim-insert-text);
}

body.flexcyon-status-text-enable-color .cm-editor .cm-scroller.cm-vimMode:not(:has(+ .cm-panels)) .cm-sizer:has(+ .cm-vimCursorLayer)::before {
position: fixed;
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: var(--flexcyon-vim-left-positioning);
block-size: 30px;
padding: 0 8px;
font-family: var(--font-interface);
color: var(--color-purple);
content: var(--flexcyon-vim-normal-text);
}

body.flexcyon-status-text-enable-color .cm-panels .cm-panel div div:not(.cm-vim-message) span:first-child {
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: 75px;
}

body.flexcyon-status-text-enable-color .cm-panels .cm-panel {
padding-block-start: 5px;
font-weight: 500;
background-color: var(--color-base-00);
}

body.flexcyon-status-text-enable-color .cm-panels input {
z-index: 16;
font-size: 0.9rem;
transform: translateY(-4px);
}

body.flexcyon-status-text-enable-color .cm-editor > .cm-scroller + .cm-panels .cm-panel div div:not(.cm-vim-message)::before {
inset-block-end: var(--flexcyon-vim-bottom-positioning);
padding-inline-end: 4px;
color: var(--color-blue);
content: var(--flexcyon-vim-command-text);
}

body.flexcyon-status-text-enable-color .cm-editor > .cm-scroller + .cm-panels .cm-panel div {
color: var(--text-muted);
}

body.flexcyon-status-text-enable-color div.cm-vim-message {
font-weight: bold;
color: var(--color-red) !important;
}

body.is-mobile.flexcyon-vim-mode-text-enable .cm-editor .cm-scroller:not(.cm-vimMode) .cm-sizer:has(+ div + div + .cm-vimCursorLayer)::before {
position: fixed;
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: var(--flexcyon-vim-left-positioning);
block-size: 30px;
padding-inline-start: 4px;
content: var(--flexcyon-vim-insert-text);
}

body.is-mobile.flexcyon-vim-mode-text-enable .cm-editor .cm-scroller.cm-vimMode:not(:has(+ .cm-panels)) .cm-sizer:has(+ div + div + .cm-vimCursorLayer)::before {
position: fixed;
inset-block-end: var(--flexcyon-vim-bottom-positioning);
inset-inline-start: var(--flexcyon-vim-left-positioning);
block-size: 30px;
padding-inline-start: 4px;
content: var(--flexcyon-vim-normal-text);
}`,
    },
    "flexcyon-ascii-enable": {
      general: `body.flexcyon-ascii-enable div.empty-state {
content-visibility: auto;
}

body.flexcyon-ascii-enable div.empty-state-title {
display: unset;
}

body.flexcyon-ascii-enable div.empty-state-container {
max-inline-size: var(--flexcyon-ascii-max-width);
max-block-size: unset;
scale: var(--flexcyon-ascii-scaling-factor);
}

body.flexcyon-ascii-enable .reveal .pause-overlay::before, body.flexcyon-ascii-enable div.empty-state-container::before {
display: inline;
font-family: var(--flexcyon-new-tab-font-group);
font-size: min(5vw - 3.25px, var(--flexcyon-ascii-max-font-size));
font-weight: bold;
line-height: var(--flexcyon-ascii-line-height);
text-align: var(--flexcyon-ascii-alignment);
white-space: pre;
content: var(--flexcyon-ascii-art);
background: var(--flexcyon-new-tab-bg-wrapper);
background-clip: text;
-webkit-text-fill-color: transparent;
}

body.flexcyon-ascii-enable .reveal .pause-overlay::before {
position: absolute;
inset: 0 0 40px 36px;
max-inline-size: max-content;
max-block-size: max-content;
margin: auto;
line-height: calc(var(--flexcyon-ascii-line-height) + 0.25);
}

body.is-mobile.flexcyon-ascii-enable .workspace-leaf > div > div > div.empty-state > div.empty-state-container::before {
margin-block-end: 1rem;
font-size: min(3.5vw - 3px, var(--flexcyon-ascii-max-font-size));
line-height: 0.8;
}`,
    },
    "flexcyon-quote-enable": {
      general: `body.flexcyon-quote-enable .workspace-leaf > div > div > div.empty-state > div.empty-state-container::before {
display: inline;
font-family: var(--flexcyon-new-tab-font-group);
font-size: var(--flexcyon-quote-font-size);
font-weight: bold;
line-height: var(--flexcyon-ascii-line-height);
text-align: center;
white-space: pre;
content: var(--flexcyon-quote-val) "\\a\\a" var(--flexcyon-quote-credit-prefix) " " var(--flexcyon-quote-credit);
background: var(--flexcyon-new-tab-bg-wrapper);
background-clip: text;
-webkit-text-fill-color: transparent;
}

body.flexcyon-quote-enable .workspace-leaf > div > div > div.empty-state > div.empty-state-container {
transform: translateY(-105px);
}

body.flexcyon-quote-enable .workspace-leaf > div > div > div.empty-state > div.empty-state-container > div.empty-state-action-list {
margin-block-start: 32px;
}`,
    },
    "flexcyon-empty-state-title-disable": {
      general: `body.flexcyon-empty-state-title-disable .workspace-leaf > div > div > div.empty-state > div.empty-state-title {
display: none;
}`,
    },
    "flexcyon-empty-state-actions-disable": {
      general: `body.flexcyon-empty-state-actions-disable .workspace-leaf > div > div > div.empty-state > div > div.empty-state-action-list {
display: none;
}`,
    },
    "flexcyon-sidedock-icon-effects": {
      general: `body.flexcyon-sidedock-icon-effects div.side-dock-actions {
opacity: var(--dimmed);
scale: var(--upsize);
}

body.flexcyon-sidedock-icon-effects div.side-dock-actions:hover {
opacity: 1;
}

body.flexcyon-sidedock-icon-effects div.side-dock-actions :hover {
scale: var(--expand);
}

body.flexcyon-sidedock-icon-effects div.side-dock-actions :nth-of-type(8n + 0):hover {
color: var(--color-purple);
}

body.flexcyon-sidedock-icon-effects div.side-dock-actions :nth-of-type(8n + 1):hover {
color: var(--color-cyan);
}

body.flexcyon-sidedock-icon-effects div.side-dock-actions :nth-of-type(8n + 2):hover {
color: var(--color-blue);
}

body.flexcyon-sidedock-icon-effects div.side-dock-actions :nth-of-type(8n + 3):hover {
color: var(--color-pink);
}

body.flexcyon-sidedock-icon-effects div.side-dock-actions :nth-of-type(8n + 4):hover {
color: var(--color-green);
}

body.flexcyon-sidedock-icon-effects div.side-dock-actions :nth-of-type(8n + 5):hover {
color: var(--color-yellow);
}

body.flexcyon-sidedock-icon-effects div.side-dock-actions :nth-of-type(8n + 6):hover {
color: var(--color-orange);
}

body.flexcyon-sidedock-icon-effects div.side-dock-actions :nth-of-type(8n + 7):hover {
color: var(--color-red);
}`,
    },
    "flexcyon-ribbon-top": {
      general: `body.flexcyon-ribbon-top {
--ribbon-width: max-content;
}

body.flexcyon-ribbon-top .workspace .workspace-ribbon {
position: absolute;
inset-block-start: -42px;
padding-inline-start: 8px;
margin-inline-start: 8px;
}

body.flexcyon-ribbon-top .workspace .workspace-ribbon .side-dock-actions {
flex-direction: row;
padding-inline-end: 150vw;
margin-inline-start: 69px;
}

body.flexcyon-ribbon-top .workspace .workspace-split {
padding-block-start: 48px;
}`,
    },
    "flexcyon-vault-switch-top": {
      general: `body.flexcyon-vault-switch-top .workspace-split:has(> .workspace-sidedock-vault-profile) {
flex-direction: column-reverse;
}`,
    },
    "flexcyon-vault-reverse": {
      general: `body.flexcyon-vault-reverse .workspace-sidedock-vault-profile {
flex-direction: row-reverse;
}`,
    },
    "flexcyon-sidebar-bg-grid": {
      general: `body.flexcyon-sidebar-bg-grid div .mod-left-split .workspace-leaf-content:not([data-type=graph]) *, body.flexcyon-sidebar-bg-grid div .mod-right-split .workspace-leaf-content:not([data-type=graph]) * {
background-image: repeating-linear-gradient(var(--flexcyon-editor-bg-rotation), var(--flexcyon-editor-bg-color-2), var(--flexcyon-editor-bg-color-2) 1px, transparent 1px, transparent var(--flexcyon-editor-bg-width)), repeating-linear-gradient(calc(90deg + var(--flexcyon-editor-bg-rotation)), var(--flexcyon-editor-bg-color-2), var(--flexcyon-editor-bg-color-2) 1px, transparent 1px, transparent var(--flexcyon-editor-bg-width));
}

body.flexcyon-sidebar-bg-grid div .mod-left-split .workspace-leaf-content:not([data-type=graph]) * *, body.flexcyon-sidebar-bg-grid div .mod-right-split .workspace-leaf-content:not([data-type=graph]) * * {
background-image: none;
}`,
    },
    "flexcyon-sidebar-bg-dots": {
      general: `body.flexcyon-sidebar-bg-dots div .mod-left-split .workspace-leaf-content:not([data-type=graph]) *, body.flexcyon-sidebar-bg-dots div .mod-right-split .workspace-leaf-content:not([data-type=graph]) * {
background-image: radial-gradient(var(--flexcyon-editor-bg-color-2) var(--flexcyon-editor-dot-size), transparent 1px);
background-repeat: repeat;
background-size: var(--flexcyon-editor-bg-width) var(--flexcyon-editor-bg-width);
}

body.flexcyon-sidebar-bg-dots div .mod-left-split .workspace-leaf-content:not([data-type=graph]) * .canvas-background, body.flexcyon-sidebar-bg-dots div .mod-right-split .workspace-leaf-content:not([data-type=graph]) * .canvas-background {
display: none;
}

body.flexcyon-sidebar-bg-dots div .mod-left-split .workspace-leaf-content:not([data-type=graph]) * *, body.flexcyon-sidebar-bg-dots div .mod-right-split .workspace-leaf-content:not([data-type=graph]) * * {
background-image: none;
}`,
    },
    "flexcyon-sidebar-bg-rhombus": {
      general: `body.flexcyon-sidebar-bg-rhombus div .mod-left-split .workspace-leaf-content:not([data-type=graph]) *, body.flexcyon-sidebar-bg-rhombus div .mod-right-split .workspace-leaf-content:not([data-type=graph]) * {
background-image: repeating-linear-gradient(calc(30deg + var(--flexcyon-editor-bg-rotation)), var(--flexcyon-editor-bg-color-2), var(--flexcyon-editor-bg-color-2) 1px, transparent 1px, transparent var(--flexcyon-editor-bg-width)), repeating-linear-gradient(calc(150deg + var(--flexcyon-editor-bg-rotation)), var(--flexcyon-editor-bg-color-2), var(--flexcyon-editor-bg-color-2) 1px, transparent 1px, transparent var(--flexcyon-editor-bg-width));
}

body.flexcyon-sidebar-bg-rhombus div .mod-left-split .workspace-leaf-content:not([data-type=graph]) * .canvas-background, body.flexcyon-sidebar-bg-rhombus div .mod-right-split .workspace-leaf-content:not([data-type=graph]) * .canvas-background {
display: none;
}

body.flexcyon-sidebar-bg-rhombus div .mod-left-split .workspace-leaf-content:not([data-type=graph]) * *, body.flexcyon-sidebar-bg-rhombus div .mod-right-split .workspace-leaf-content:not([data-type=graph]) * * {
background-image: none;
}`,
    },
  },
};
