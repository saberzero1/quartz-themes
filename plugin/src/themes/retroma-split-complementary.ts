import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retroma.split-complementary",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "W95font",
        style: "normal",
        weight: "400",
        file: "w95font.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Cascadia Code",
        style: "normal",
        weight: "400",
        file: "cascadia-code.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "iA Writer Mono S",
        style: "normal",
        weight: "400",
        file: "ia-writer-mono-s.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Excalifont",
        style: "normal",
        weight: "400",
        file: "excalifont.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Caveat",
        style: "normal",
        weight: "400",
        file: "caveat.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-1: oklch(from var(--base-accent) l c calc(h + var(--rotation-1)));
  --accent-2: oklch(from var(--base-accent) l c calc(h + var(--rotation-2)));
  --background-modifier-border: oklch(from var(--background-secondary) l c h);
  --background-modifier-border-focus: oklch(
    from var(--background-primary) 70% c h
  );
  --background-modifier-error: var(--color-red, oklch(
    from #d32f2f 70% 20% h
  ));
  --background-modifier-error-hover: var(--color-red, oklch(
    from #d32f2f 70% 20% h
  ));
  --background-modifier-success: var(--color-green, oklch(
    from #4caf50 70% 20% h
  ));
  --background-paper: oklch(
    from var(--accent-2) var(--lightness-accent) calc(c * var(--chroma-accent))
      h
  );
  --background-primary: oklch(
    from var(--accent-2) calc(var(--lightness-accent) - 0.02)
      calc(c * var(--chroma-accent)) h
  );
  --background-primary-alt: oklch(
    from var(--base-accent) calc(var(--lightness-accent) - 0.04)
      calc(c * var(--chroma-accent)) h
  );
  --background-secondary: oklch(
    from var(--base-accent) calc(var(--lightness-accent) - 0.06)
      calc(c * var(--chroma-accent)) h
  );
  --background-secondary-alt: oklch(
    from var(--accent-1) calc(var(--lightness-accent) - 0.08)
      calc(c * var(--chroma-accent)) h
  );
  --background-tertiary: oklch(
    from var(--accent-2) calc(var(--lightness-accent) - 0.1)
      calc(c * var(--chroma-accent)) h
  );
  --base-accent: oklch(from var(--interactive-accent) l c h);
  --bases-cards-background: oklch(from var(--background-tertiary) 25% c h);
  --bases-cards-border-width: var(--border-width, 4px);
  --bases-cards-cover-background: var(--background-primary-alt, oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.04)
      calc(c * 0.3) h
  ));
  --bases-embed-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h));
  --bases-embed-border-radius: var(--window-border-radius, 12px);
  --bases-table-border-color: var(--table-border-color, oklch(from #dadada 50% c h / 50%));
  --bases-table-cell-background-active: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --bases-table-cell-background-disabled: var(--background-primary-alt, oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.04)
      calc(c * 0.3) h
  ));
  --bases-table-container-border-radius: var(--radius-s, 8px);
  --bases-table-group-background: var(--background-primary-alt, oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.04)
      calc(c * 0.3) h
  ));
  --bases-table-header-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --bases-table-header-weight: var(--font-weight, 100);
  --bases-table-summary-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --blockquote-background-color: oklch(
    from var(--background-secondary) l c h / 40%
  );
  --blockquote-border-color: oklch(from var(--base-accent) 50% c h / 75%);
  --blockquote-border-thickness: var(--size-2-2, 4px);
  --bold-color: oklch(
    from var(--base-accent) calc(var(--lightness) + 10%) var(--chroma)
      calc(h + 100)
  );
  --border-groove: 4px groove var(--background-primary-alt);
  --border-ridge: 4px ridge var(--background-primary);
  --border-solid: 4px solid var(--titlebar-background);
  --box-shadow: inset -2px -2px oklch(from var(--background-secondary) 0% c h),
    inset 2px 2px oklch(from var(--background-secondary) 50% c h);
  --box-shadow-active: inset 2px 2px oklch(from var(--background-secondary) 0% c h),
    inset -2px -2px oklch(from var(--base-accent) 50% c h);
  --box-shadow-active-sm: inset 1px 1px oklch(from var(--background-secondary) 0% c h),
    inset -1px -1px oklch(from var(--base-accent) 50% c h);
  --box-shadow-sm: inset -1px -1px oklch(from var(--background-secondary) 0% c h),
    inset 1px 1px oklch(from var(--background-secondary) 50% c h);
  --button-active: oklch(from var(--background-secondary) 25% c h);
  --button-border-radius: 8px;
  --button-hover: oklch(from var(--background-paper) l c h);
  --button-normal: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --button-radius: var(--input-radius, 12px);
  --button-text: var(--text-normal, #dadada);
  --callout-border-width: var(--size-4-1, 4px);
  --callout-radius: var(--window-border-radius, 12px);
  --canvas-background: var(--background-paper, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) 0.24 calc(c * 0.3)
      h
  ));
  --canvas-controls-radius: var(--radius-s, 8px);
  --canvas-dot-pattern: oklch(
    from var(--text-normal) l c h / var(--retroma-canvas-dot-opacity)
  );
  --checkbox-color: var(--background-secondary, oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ));
  --checkbox-color-hover: var(--background-secondary-alt, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 150)) calc(0.24 - 0.08)
      calc(c * 0.3) h
  ));
  --checkbox-marker-color: var(--background-paper, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) 0.24 calc(c * 0.3)
      h
  ));
  --checkbox-radius: var(--window-border-radius, 12px);
  --chroma: 20%;
  --chroma-accent: 0.3;
  --chroma-folder: 20%;
  --clickable-icon-radius: var(--radius-s, 8px);
  --code-background: oklch(from var(--background-secondary) 10% c h / 50%);
  --code-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h));
  --code-function: var(--color-yellow, oklch(
    from #ffeb3b 70% 20% h
  ));
  --code-important: var(--color-orange, oklch(
    from #ff9800 70% 20% h
  ));
  --code-operator: var(--color-red, oklch(
    from #d32f2f 70% 20% h
  ));
  --code-property: var(--color-cyan, oklch(
    from #00bcd4 70% 20% h
  ));
  --code-radius: var(--window-border-radius, 12px);
  --code-string: var(--color-green, oklch(
    from #4caf50 70% 20% h
  ));
  --code-tag: var(--color-red, oklch(
    from #d32f2f 70% 20% h
  ));
  --code-value: var(--color-purple, oklch(
    from #673ab7 70% 20% h
  ));
  --collapse-icon-color: var(--text-muted, #b3b3b3);
  --collapse-icon-color-collapsed: var(--text-faint, #666666);
  --color-amber: oklch(
    from var(--hue-amber) var(--lightness) var(--chroma) h
  );
  --color-blue: oklch(
    from var(--hue-blue) var(--lightness) var(--chroma) h
  );
  --color-cyan: oklch(
    from var(--hue-cyan) var(--lightness) var(--chroma) h
  );
  --color-green: oklch(
    from var(--hue-green) var(--lightness) var(--chroma) h
  );
  --color-indigo: oklch(
    from var(--hue-indigo) var(--lightness) var(--chroma) h
  );
  --color-lime: oklch(
    from var(--hue-lime) var(--lightness) var(--chroma) h
  );
  --color-magenta: oklch(
    from var(--hue-magenta) var(--lightness) var(--chroma) h
  );
  --color-orange: oklch(
    from var(--hue-orange) var(--lightness) var(--chroma) h
  );
  --color-purple: oklch(
    from var(--hue-purple) var(--lightness) var(--chroma) h
  );
  --color-red: oklch(
    from var(--hue-red) var(--lightness) var(--chroma) h
  );
  --color-rose: oklch(
    from var(--hue-rose) var(--lightness) var(--chroma) h
  );
  --color-teal: oklch(
    from var(--hue-teal) var(--lightness) var(--chroma) h
  );
  --color-vermillion: oklch(
    from var(--hue-vermillion) var(--lightness) var(--chroma) h
  );
  --color-violet: oklch(
    from var(--hue-violet) var(--lightness) var(--chroma) h
  );
  --color-yellow: oklch(
    from var(--hue-yellow) var(--lightness) var(--chroma) h
  );
  --divider-color: var(--titlebar-background, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 150)) calc(0.24 - 0.12)
      calc(c * 0.3) h
  ));
  --divider-width: 0px;
  --dropdown-background: var(--background-paper, #363636);
  --file-header-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --file-header-background-focused: var(--background-secondary, oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ));
  --file-margins: var(--size-4-4, 16px);
  --folder-accent: var(--base-accent, oklch(from hsl(258, 88%, 66%) l c h));
  --folder-color-1: oklch(
    from var(--hue-red) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-10: oklch(
    from var(--hue-lime) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-11: oklch(
    from var(--hue-teal) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-12: oklch(
    from var(--hue-purple) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-13: oklch(
    from var(--hue-magenta) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-14: oklch(
    from var(--hue-rose) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-15: oklch(
    from var(--hue-cyan) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-2: oklch(
    from var(--hue-orange) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-3: oklch(
    from var(--hue-yellow) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-4: oklch(
    from var(--hue-green) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-5: oklch(
    from var(--hue-blue) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-6: oklch(
    from var(--hue-indigo) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-7: oklch(
    from var(--hue-violet) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-8: oklch(
    from var(--hue-vermillion) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-9: oklch(
    from var(--hue-amber) var(--lightness) var(--chroma-folder) h
  );
  --footnote-divider-color: var(--metadata-divider-color, oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h));
  --footnote-radius: var(--radius-s, 8px);
  --graph-node-attachment: var(--color-yellow, oklch(
    from #ffeb3b 70% 20% h
  ));
  --graph-node-tag: var(--color-green, oklch(
    from #4caf50 70% 20% h
  ));
  --h1-color: var(--color-red, oklch(
    from #d32f2f 70% 20% h
  ));
  --h2-color: var(--color-orange, oklch(
    from #ff9800 70% 20% h
  ));
  --h3-color: var(--color-yellow, oklch(
    from #ffeb3b 70% 20% h
  ));
  --h4-color: var(--color-green, oklch(
    from #4caf50 70% 20% h
  ));
  --h5-color: var(--color-blue, oklch(
    from #2196f3 70% 20% h
  ));
  --h6-color: var(--color-indigo, oklch(
    from #3f51b5 70% 20% h
  ));
  --header-height: 48px;
  --highlight: var(--text-highlight-bg, oklch(from var(--accent-1) 50% var(--chroma) h / 75%));
  --hr-color: oklch(from var(--text-normal) l c h / 25%);
  --hue-amber: #ffb300;
  --hue-blue: #2196f3;
  --hue-cyan: #00bcd4;
  --hue-green: #4caf50;
  --hue-indigo: #3f51b5;
  --hue-lime: #8bc34a;
  --hue-magenta: #e91e63;
  --hue-orange: #ff9800;
  --hue-purple: #673ab7;
  --hue-red: #d32f2f;
  --hue-rose: #f48fb1;
  --hue-teal: #009688;
  --hue-vermillion: #ff5722;
  --hue-violet: #9c27b0;
  --hue-yellow: #ffeb3b;
  --img-border-color: oklch(from var(--background-tertiary) l var(--chroma) h);
  --img-border-radius: 0px;
  --img-border-width: 0px;
  --inline-title-color: var(--h1-color, oklch(
    from #d32f2f 70% 20% h
  ));
  --input-border-width: var(--border-width, 2px);
  --input-radius: var(--window-border-radius, 12px);
  --interactive-active: oklch(from var(--base-accent) 50% c h / 50%);
  --italic-color: oklch(
    from var(--base-accent) calc(var(--lightness) + 10%) var(--chroma)
      calc(h + 200)
  );
  --light: var(--background-primary, oklch(
    from var(--accent-2) calc(var(--lightness-accent) - 0.02)
      calc(c * var(--chroma-accent)) h
  ));
  --lightgray: var(--background-secondary, oklch(
    from var(--base-accent) calc(var(--lightness-accent) - 0.06)
      calc(c * var(--chroma-accent)) h
  ));
  --lightness: 70%;
  --lightness-accent: 0.24;
  --link-color: oklch(
    from var(--base-accent) calc(var(--lightness) + 10%) var(--chroma) h
  );
  --link-color-hover: oklch(
    from var(--link-color) calc(var(--lightness) + 10%) var(--chroma) h / 80%
  );
  --link-external-color: var(--color-red, oklch(
    from #d32f2f 70% 20% h
  ));
  --link-external-color-hover: oklch(
    from var(--link-external-color) var(--lightness) var(--chroma) h / 80%
  );
  --link-unresolved-color: oklch(
    from var(--link-color) calc(var(--lightness) + 10%) var(--chroma) h / 60%
  );
  --link-weight: var(--font-bold, 700);
  --menu-background: var(--background-paper, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) 0.24 calc(c * 0.3)
      h
  ));
  --metadata-background: oklch(from var(--background-secondary) l c h / 75%);
  --metadata-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h));
  --metadata-border-radius: var(--window-border-radius, 12px);
  --metadata-divider-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h));
  --metadata-gap: var(--size-4-2, 8px);
  --metadata-label-background: oklch(
    from var(--background-tertiary) l c h / 15%
  );
  --metadata-label-background-active: oklch(
    from var(--background-tertiary) l c h / 30%
  );
  --metadata-label-background-hover: oklch(
    from var(--background-tertiary) l c h / 30%
  );
  --metadata-label-font-weight: var(--font-bold, 700);
  --metadata-label-width: 8em;
  --metadata-property-background: var(--background-paper, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) 0.24 calc(c * 0.3)
      h
  ));
  --metadata-property-background-hover: var(--background-paper, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) 0.24 calc(c * 0.3)
      h
  ));
  --metadata-property-box-shadow-hover: 0 0 0 1px var(--background-tertiary);
  --metadata-property-radius: var(--window-border-radius, 12px);
  --metadata-property-radius-focus: var(--window-border-radius, 12px);
  --metadata-property-radius-hover: var(--window-border-radius, 12px);
  --mobile-sidebar-width: 100%;
  --modal-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --nav-collapse-icon-color: var(--collapse-icon-color, #b3b3b3);
  --nav-indentation-guide-width: var(--indentation-guide-width, 2px);
  --nav-item-background-selected: var(--text-selection, oklch(from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) 45% c h / 75%));
  --nav-item-radius: var(--button-border-radius, 8px);
  --nav-tag-color: var(--text-muted, #b3b3b3);
  --nav-tag-radius: var(--radius-s, 8px);
  --outline-color: oklch(from var(--base-accent) 25% c h);
  --pdf-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --pdf-page-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --pdf-sidebar-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --pill-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h));
  --prompt-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --radius-m: var(--button-border-radius, 8px);
  --radius-s: var(--button-border-radius, 8px);
  --radius-xs: var(--button-border-radius, 8px);
  --radius-xxs: var(--button-border-radius, 8px);
  --retroma-canvas-card-border-width: 3px;
  --retroma-canvas-card-embed-border-width: 3px;
  --retroma-canvas-dot-opacity: 0.3;
  --retroma-canvas-node-content-bg-opacity: 0.25;
  --retroma-folder-bg-color: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --retroma-folder-border: 1px solid
    oklch(from var(--accent-2) 55% var(--chroma-folder) h / 50%);
  --retroma-folder-box-shadow: -1px 1px 0px var(--background-tertiary);
  --ribbon-background: var(--background-secondary, oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ));
  --ribbon-background-collapsed: var(--ribbon-background, oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ));
  --rotation-1: 150;
  --rotation-2: 210;
  --search-result-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --setting-items-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --setting-items-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h));
  --settings-background: var(--background-paper, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) 0.24 calc(c * 0.3)
      h
  ));
  --shiki-code-background: var(--code-background, oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) 10% c h / 50%));
  --shiki-code-block-border-radius: var(--code-radius, 12px);
  --shiki-code-function: var(--color-green, oklch(
    from #4caf50 70% 20% h
  ));
  --shiki-code-important: var(--color-orange, oklch(
    from #ff9800 70% 20% h
  ));
  --shiki-code-property: var(--color-cyan, oklch(
    from #00bcd4 70% 20% h
  ));
  --shiki-code-string: var(--color-yellow, oklch(
    from #ffeb3b 70% 20% h
  ));
  --shiki-code-value: var(--color-purple, oklch(
    from #673ab7 70% 20% h
  ));
  --shiki-gutter-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h));
  --slider-track-background: var(--interactive-active, oklch(from oklch(from hsl(258, 88%, 66%) l c h) 50% c h / 50%));
  --slider-track-height: var(--size-2-3, 6px);
  --status-bar-background: var(--background-tertiary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.1)
      calc(c * 0.3) h
  ));
  --status-bar-border-color: var(--divider-color, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 150)) calc(0.24 - 0.12)
      calc(c * 0.3) h
  ));
  --strong-emphasis: var(--italic-color, oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(70% + 10%) 20%
      calc(h + 200)
  ));
  --suggestion-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --sync-avatar-color-1: var(--color-red, oklch(
    from #d32f2f 70% 20% h
  ));
  --sync-avatar-color-2: var(--color-orange, oklch(
    from #ff9800 70% 20% h
  ));
  --sync-avatar-color-3: var(--color-yellow, oklch(
    from #ffeb3b 70% 20% h
  ));
  --sync-avatar-color-4: var(--color-green, oklch(
    from #4caf50 70% 20% h
  ));
  --sync-avatar-color-5: var(--color-cyan, oklch(
    from #00bcd4 70% 20% h
  ));
  --sync-avatar-color-6: var(--color-blue, oklch(
    from #2196f3 70% 20% h
  ));
  --sync-avatar-color-7: var(--color-purple, oklch(
    from #673ab7 70% 20% h
  ));
  --tab-background-active: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 210)) calc(0.24 - 0.02)
      calc(c * 0.3) h
  ));
  --tab-container-background: var(--background-secondary, oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ));
  --tab-outline-color: var(--divider-color, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 150)) calc(0.24 - 0.12)
      calc(c * 0.3) h
  ));
  --tab-radius: var(--radius-s, 8px);
  --tab-stacked-header-width: var(--header-height, 48px);
  --tab-switcher-background: var(--background-secondary, oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ));
  --tab-switcher-preview-radius: var(--window-border-radius, 12px);
  --table-add-button-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h));
  --table-border-color: oklch(from var(--table-header-color) 50% c h / 50%);
  --table-border-spacing: 2px;
  --table-data-background: oklch(from var(--base-accent) l c h / 7%);
  --table-header-background: oklch(from var(--accent-1) 50% c h / 30%);
  --table-header-border-color: var(--table-border-color, oklch(from #dadada 50% c h / 50%));
  --tag-border-width: 1px;
  --tag-color: oklch(from var(--base-accent) 80% c h / 75%);
  --tag-radius: var(--button-border-radius, 8px);
  --text-error: var(--color-red, oklch(
    from #d32f2f 70% 20% h
  ));
  --text-highlight-bg: oklch(from var(--accent-1) 50% var(--chroma) h / 75%);
  --text-selection: oklch(from var(--accent-2) 45% c h / 75%);
  --text-success: var(--color-green, oklch(
    from #4caf50 70% 20% h
  ));
  --text-warning: var(--color-orange, oklch(
    from #ff9800 70% 20% h
  ));
  --textHighlight: var(--text-highlight-bg, oklch(from var(--accent-1) 50% var(--chroma) h / 75%));
  --titlebar-background: oklch(
    from var(--accent-1) calc(var(--lightness-accent) - 0.12)
      calc(c * var(--chroma-accent)) h
  );
  --titlebar-background-focused: var(--titlebar-background, oklch(
    from oklch(from oklch(from hsl(258, 88%, 66%) l c h) l c calc(h + 150)) calc(0.24 - 0.12)
      calc(c * 0.3) h
  ));
  --titlebar-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) l c h));
  --touch-radius-m: var(--button-border-radius, 8px);
  --touch-radius-s: var(--button-border-radius, 8px);
  --touch-radius-xs: var(--button-border-radius, 8px);
  --touch-radius-xxs: var(--button-border-radius, 8px);
  --traffic-lights-offset-x: var(--header-height, 48px);
  --traffic-lights-offset-y: var(--header-height, 48px);
  --window-border-radius: 12px;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ));
  background-color: var(--tab-container-background, oklch(0.18 0.0651659 292.489));
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, oklch(0.24 0.0651659 142.489));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-primary, oklch(0.22 0.0651659 142.489));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.12 0.0651659 82.4895);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ));
  background-color: var(--tab-container-background, oklch(0.18 0.0651659 292.489));
  border-left-color: oklch(0.12 0.0651659 82.4895);
}

html[saved-theme="dark"] body html {
  --hue-amber: #ffb300;
  --hue-blue: #2196f3;
  --hue-cyan: #00bcd4;
  --hue-green: #4caf50;
  --hue-indigo: #3f51b5;
  --hue-lime: #8bc34a;
  --hue-magenta: #e91e63;
  --hue-orange: #ff9800;
  --hue-purple: #673ab7;
  --hue-red: #d32f2f;
  --hue-rose: #f48fb1;
  --hue-teal: #009688;
  --hue-vermillion: #ff5722;
  --hue-violet: #9c27b0;
  --hue-yellow: #ffeb3b;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, oklch(0.8 0.08 32.4895));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.8 0.08 32.4895) none 0px;
  text-decoration-color: oklch(0.8 0.08 32.4895);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, oklch(0.8 0.08 132.489));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.8 0.08 132.489) none 0px;
  text-decoration-color: oklch(0.8 0.08 132.489);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, oklch(0.8 0.08 132.489));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.8 0.08 132.489) none 0px;
  text-decoration-color: oklch(0.8 0.08 132.489);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, oklch(0.8 0.08 32.4895));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.8 0.08 32.4895) none 0px;
  text-decoration-color: oklch(0.8 0.08 32.4895);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, oklch(0.5 0.08 82.4895 / 0.75));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body del {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: var(--background-paper, rgba(0, 0, 0, 0));
  border-radius: 12px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--background-paper, rgba(0, 0, 0, 0));
  border-color: rgb(255, 255, 255);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  --font-weight: var(--link-weight, 700);
  color: var(--link-external-color, oklch(0.7 0.08 26.4067));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: oklch(0.7 0.08 26.4067) none 0px;
  text-decoration-color: oklch(0.7 0.08 26.4067);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  --font-weight: var(--link-weight, 700);
  color: var(--link-color, oklch(0.8 0.08 292.489));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: oklch(0.8 0.08 292.489) none 0px;
  text-decoration-color: oklch(0.8 0.08 292.489);
}

html[saved-theme="dark"] body a.internal-link.broken {
  --font-weight: var(--link-weight, 700);
  color: var(--link-unresolved-color, oklch(0.8 0.08 292.489 / 0.6));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: oklch(0.8 0.08 292.489 / 0.6) none 0px;
}`,
    lists: `html[saved-theme="dark"] body ul.overflow {
  border-bottom-style: ridge;
  border-left-style: ridge;
  border-right-style: ridge;
  border-top-style: ridge;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  --font-weight: var(--link-weight, 700);
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, oklch(0.18 0.0651659 292.489 / 0.4));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="dark"] body table {
  border-bottom-color: oklch(0.22 0.0651659 142.489);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.22 0.0651659 142.489);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.22 0.0651659 142.489);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.22 0.0651659 142.489);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  width: 240.219px;
}

html[saved-theme="dark"] body td {
  background-color: var(--table-data-background, oklch(0.603458 0.21722 292.489 / 0.07));
  border-bottom-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-left-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-right-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-top-color: oklch(0.5 0.000044365 23.517 / 0.5);
}

html[saved-theme="dark"] body th {
  border-bottom-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-left-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-right-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-top-color: oklch(0.5 0.000044365 23.517 / 0.5);
  border-top-left-radius: var(--window-border-radius, 12px);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: oklch(0.22 0.0651659 142.489);
  border-left-color: oklch(0.22 0.0651659 142.489);
  border-right-color: oklch(0.22 0.0651659 142.489);
  border-top-color: oklch(0.22 0.0651659 142.489);
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, oklch(0.5 0.21722 82.4895 / 0.3));
  border-bottom-color: oklch(0.22 0.0651659 142.489);
  border-left-color: oklch(0.22 0.0651659 142.489);
  border-right-color: oklch(0.22 0.0651659 142.489);
  border-top-color: oklch(0.22 0.0651659 142.489);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, oklch(0.1 0.0651659 292.489 / 0.5));
  border-bottom-color: oklch(0.18 0.0651659 292.489);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.18 0.0651659 292.489);
  border-right-color: oklch(0.18 0.0651659 292.489);
  border-top-color: oklch(0.18 0.0651659 292.489);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 0px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, oklch(0.1 0.0651659 292.489 / 0.5));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, oklch(from oklch(
    from oklch(from hsl(258, 88%, 66%) l c h) calc(0.24 - 0.06)
      calc(c * 0.3) h
  ) 10% c h / 50%));
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: oklch(0.7 0.08 26.4067);
  border-left-color: oklch(0.7 0.08 26.4067);
  border-right-color: oklch(0.7 0.08 26.4067);
  border-top-color: oklch(0.7 0.08 26.4067);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, oklch(0.2 0.0651659 292.489));
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMTcxNiA4LjAwMDAzTDEuMDg1ODIgMy45MTQyNEwzLjkxNDI0IDEuMDg1ODJMOC4wMDAwMyA1LjE3MTZMMTIuMDg1OCAxLjA4NTgyTDE0LjkxNDIgMy45MTQyNEwxMC44Mjg1IDguMDAwMDNMMTQuOTE0MiAxMi4wODU4TDEyLjA4NTggMTQuOTE0Mkw4LjAwMDAzIDEwLjgyODVMMy45MTQyNCAxNC45MTQyTDEuMDg1ODIgMTIuMDg1OEw1LjE3MTYgOC4wMDAwM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMTcxNiA4LjAwMDAzTDEuMDg1ODIgMy45MTQyNEwzLjkxNDI0IDEuMDg1ODJMOC4wMDAwMyA1LjE3MTZMMTIuMDg1OCAxLjA4NTgyTDE0LjkxNDIgMy45MTQyNEwxMC44Mjg1IDguMDAwMDNMMTQuOTE0MiAxMi4wODU4TDEyLjA4NTggMTQuOTE0Mkw4LjAwMDAzIDEwLjgyODVMMy45MTQyNCAxNC45MTQyTDEuMDg1ODIgMTIuMDg1OEw1LjE3MTYgOC4wMDAwM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAxNUgwVjEyTDcgMEg5TDE2IDEyVjE1Wk03IDRIOVY5SDdWNFpNNyAxMUg5VjEzSDdWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAxNUgwVjEyTDcgMEg5TDE2IDEyVjE1Wk03IDRIOVY5SDdWNFpNNyAxMUg5VjEzSDdWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 64.0453);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNSA1LjVDNS41IDQuMTE5MjkgNi42MTkyOSAzIDggM0M5LjM4MDcxIDMgMTAuNSA0LjExOTI5IDEwLjUgNS41QzEwLjUgNi44ODA3MSA5LjM4MDcxIDggOCA4SDdWMTFIOEMxMS4wMzc2IDExIDEzLjUgOC41Mzc1NyAxMy41IDUuNUMxMy41IDIuNDYyNDMgMTEuMDM3NiAwIDggMEM0Ljk2MjQzIDAgMi41IDIuNDYyNDMgMi41IDUuNUg1LjVaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xMCAxM0g3VjE2SDEwVjEzWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNSA1LjVDNS41IDQuMTE5MjkgNi42MTkyOSAzIDggM0M5LjM4MDcxIDMgMTAuNSA0LjExOTI5IDEwLjUgNS41QzEwLjUgNi44ODA3MSA5LjM4MDcxIDggOCA4SDdWMTFIOEMxMS4wMzc2IDExIDEzLjUgOC41Mzc1NyAxMy41IDUuNUMxMy41IDIuNDYyNDMgMTEuMDM3NiAwIDggMEM0Ljk2MjQzIDAgMi41IDIuNDYyNDMgMi41IDUuNUg1LjVaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xMCAxM0g3VjE2SDEwVjEzWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjkyODkgMS4yOTI5MUw2LjcwNzExIDIuNzA3MTJMMyA2LjQxNDIzVjcuMDAwMDFIN1YxNEgxVjUuNTg1OEw1LjI5Mjg5IDEuMjkyOTFaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xNSA3LjAwMDAxSDExVjYuNDE0MjNMMTQuNzA3MSAyLjcwNzEyTDEzLjI5MjkgMS4yOTI5MUw5IDUuNTg1OFYxNEgxNVY3LjAwMDAxWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjkyODkgMS4yOTI5MUw2LjcwNzExIDIuNzA3MTJMMyA2LjQxNDIzVjcuMDAwMDFIN1YxNEgxVjUuNTg1OEw1LjI5Mjg5IDEuMjkyOTFaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xNSA3LjAwMDAxSDExVjYuNDE0MjNMMTQuNzA3MSAyLjcwNzEyTDEzLjI5MjkgMS4yOTI5MUw5IDUuNTg1OFYxNEgxNVY3LjAwMDAxWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 294.789);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDAwMDEgMEg3LjAwMDAxTDUuNTEyOTIgNC41NzY4MUwwLjcwMDU1NCA0LjU3NjgyTDAuMDgyNTE5NSA2LjQ3ODkzTDMuOTc1ODEgOS4zMDc1NkwyLjQ4ODczIDEzLjg4NDNMNC4xMDY3NyAxNS4wNTk5TDguMDAwMDIgMTIuMjMxM0wxMS44OTMzIDE1LjA1OTlMMTMuNTExMyAxMy44ODQzTDEyLjAyNDIgOS4zMDc1NEwxNS45MTc1IDYuNDc4OTJMMTUuMjk5NCA0LjU3NjgxTDEwLjQ4NzEgNC41NzY4MUw5LjAwMDAxIDBaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDAwMDEgMEg3LjAwMDAxTDUuNTEyOTIgNC41NzY4MUwwLjcwMDU1NCA0LjU3NjgyTDAuMDgyNTE5NSA2LjQ3ODkzTDMuOTc1ODEgOS4zMDc1NkwyLjQ4ODczIDEzLjg4NDNMNC4xMDY3NyAxNS4wNTk5TDguMDAwMDIgMTIuMjMxM0wxMS44OTMzIDE1LjA1OTlMMTMuNTExMyAxMy44ODQzTDEyLjAyNDIgOS4zMDc1NEwxNS45MTc1IDYuNDc4OTJMMTUuMjk5NCA0LjU3NjgxTDEwLjQ4NzEgNC41NzY4MUw5LjAwMDAxIDBaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 102.483);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAxNEgxNFYxNkgyVjE0SDNWMTEuNTg1OEw2LjU4NTc5IDhMMyA0LjQxNDIxVjJIMlYwSDE0VjJIMTNWNC40MTQyMUw5LjQxNDIxIDhMMTMgMTEuNTg1OFYxNFpNNSAxMi40MTQyVjE0SDExVjEyLjQxNDJMOCA5LjQxNDIxTDUgMTIuNDE0MloiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAxNEgxNFYxNkgyVjE0SDNWMTEuNTg1OEw2LjU4NTc5IDhMMyA0LjQxNDIxVjJIMlYwSDE0VjJIMTNWNC40MTQyMUw5LjQxNDIxIDhMMTMgMTEuNTg1OFYxNFpNNSAxMi40MTQyVjE0SDExVjEyLjQxNDJMOCA5LjQxNDIxTDUgMTIuNDE0MloiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(179, 179, 179);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMEgzVjJIMVY1SDE1VjJIMTNWMEgxMFYySDZWMFoiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTE1IDdIMVYxNUgxNVY3WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMEgzVjJIMVY1SDE1VjJIMTNWMEgxMFYySDZWMFoiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTE1IDdIMVYxNUgxNVY3WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 102.483);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMUg1TDE2IDdWOUw1IDE1SDJMMyA5SDhWN0gzTDIgMVoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMUg1TDE2IDdWOUw1IDE1SDJMMyA5SDhWN0gzTDIgMVoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 248.82);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMEgxNFYxNkgxMkw4IDEyTDQgMTZIMlYwWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMEgxNFYxNkgxMkw4IDEyTDQgMTZIMlYwWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTZMNSAxMVYySDE0TDE2IDhWMTFIMTBWMTRDMTAgMTUuMTA0NiA5LjEwNDU3IDE2IDggMTZIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTMgMTFIMFYySDNWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTZMNSAxMVYySDE0TDE2IDhWMTFIMTBWMTRDMTAgMTUuMTA0NiA5LjEwNDU3IDE2IDggMTZIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTMgMTFIMFYySDNWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEzTDkuMDAwMDEgMTJMMTEuMjkyOSA5LjcwNzEyTDguNTAwMDEgNi45MTQyM0w1LjUwMDAxIDkuOTE0MjNMMC4yOTI5MDggNC43MDcxMkwxLjcwNzEyIDMuMjkyOTFMNS41MDAwMSA3LjA4NThMOC41MDAwMSA0LjA4NThMMTIuNzA3MSA4LjI5MjkxTDE1IDYuMDAwMDFMMTYgNy4wMDAwMUwxNiAxM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEzTDkuMDAwMDEgMTJMMTEuMjkyOSA5LjcwNzEyTDguNTAwMDEgNi45MTQyM0w1LjUwMDAxIDkuOTE0MjNMMC4yOTI5MDggNC43MDcxMkwxLjcwNzEyIDMuMjkyOTFMNS41MDAwMSA3LjA4NThMOC41MDAwMSA0LjA4NThMMTIuNzA3MSA4LjI5MjkxTDE1IDYuMDAwMDFMMTYgNy4wMDAwMUwxNiAxM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSA5QzE1IDEyLjg2NiAxMS44NjYgMTYgOCAxNkM0LjEzNDAxIDE2IDEgMTIuODY2IDEgOUMxIDUuNSA0IDMgNCAzSDZWNC41QzYgNS4wNTIyOCA2LjQ0NzcyIDUuNSA3IDUuNUM3LjU1MjI4IDUuNSA4IDUuMDUyMjggOCA0LjVWMEgxMEMxMCAwIDE1IDMgMTUgOVpNMTAgMTJDMTAgMTMuMTA0NiA5LjEwNDU3IDE0IDggMTRDNi44OTU0MyAxNCA2IDEzLjEwNDYgNiAxMkM2IDkuNSA4IDggOCA4QzggOCAxMCA5LjUgMTAgMTJaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSA5QzE1IDEyLjg2NiAxMS44NjYgMTYgOCAxNkM0LjEzNDAxIDE2IDEgMTIuODY2IDEgOUMxIDUuNSA0IDMgNCAzSDZWNC41QzYgNS4wNTIyOCA2LjQ0NzcyIDUuNSA3IDUuNUM3LjU1MjI4IDUuNSA4IDUuMDUyMjggOCA0LjVWMEgxMEMxMCAwIDE1IDMgMTUgOVpNMTAgMTJDMTAgMTMuMTA0NiA5LjEwNDU3IDE0IDggMTRDNi44OTU0MyAxNCA2IDEzLjEwNDYgNiAxMkM2IDkuNSA4IDggOCA4QzggOCAxMCA5LjUgMTAgMTJaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDE2SDdMMCA5VjdMNyAwSDlMMTYgN1Y5TDkgMTZaTTcgM1Y5SDlWM0g3Wk03IDExVjEzSDlWMTFIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDE2SDdMMCA5VjdMNyAwSDlMMTYgN1Y5TDkgMTZaTTcgM1Y5SDlWM0g3Wk03IDExVjEzSDlWMTFIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 248.82);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDNDMTUgNS42MTUwNyAxMy4zMjcgNy44Mzk0IDEwLjk5MjkgOC42NjEwOEMxMC4zNjk0IDguODgwNTkgOS42OTg2NCA5IDkgOVYxM0gxM1YxNUgzVjEzSDdWMTFDMy42ODYyOSAxMSAxIDguMzEzNzEgMSA1VjNIM0M0LjcyNzE1IDMgNi4yODM4NiAzLjcyOTc3IDcuMzc4NTkgNC44OTc3OUM3LjkzOTcyIDUuNDk2NDcgOC4zNzk0NyA2LjIxMDMgOC42NTg1OSA3SDlDOS41ODc1MiA3IDEwLjE0NTUgNi44NzMzMyAxMC42NDggNi42NDU4MUMxMC4yMjc0IDUuMjc3NzIgOS40NDk3MyA0LjA2NTk2IDguNDIzODEgMy4xMTkyOEM5LjUyNDM5IDEuODIyNzUgMTEuMTY2MSAxIDEzIDFIMTVWM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDNDMTUgNS42MTUwNyAxMy4zMjcgNy44Mzk0IDEwLjk5MjkgOC42NjEwOEMxMC4zNjk0IDguODgwNTkgOS42OTg2NCA5IDkgOVYxM0gxM1YxNUgzVjEzSDdWMTFDMy42ODYyOSAxMSAxIDguMzEzNzEgMSA1VjNIM0M0LjcyNzE1IDMgNi4yODM4NiAzLjcyOTc3IDcuMzc4NTkgNC44OTc3OUM3LjkzOTcyIDUuNDk2NDcgOC4zNzk0NyA2LjIxMDMgOC42NTg1OSA3SDlDOS41ODc1MiA3IDEwLjE0NTUgNi44NzMzMyAxMC42NDggNi42NDU4MUMxMC4yMjc0IDUuMjc3NzIgOS40NDk3MyA0LjA2NTk2IDguNDIzODEgMy4xMTkyOEM5LjUyNDM5IDEuODIyNzUgMTEuMTY2MSAxIDEzIDFIMTVWM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 144.199);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA1LjVDMTYgOC41Mzc1NyAxMy41Mzc2IDExIDEwLjUgMTFIN1YxM0g1VjE1TDQgMTZIMFYxMkw1LjE2MzUxIDYuODM2NDlDNS4wNTY3IDYuNDA4NjMgNSA1Ljk2MDk0IDUgNS41QzUgMi40NjI0MyA3LjQ2MjQzIDAgMTAuNSAwQzEzLjUzNzYgMCAxNiAyLjQ2MjQzIDE2IDUuNVpNMTMgNEMxMyA0LjU1MjI4IDEyLjU1MjMgNSAxMiA1QzExLjQ0NzcgNSAxMSA0LjU1MjI4IDExIDRDMTEgMy40NDc3MiAxMS40NDc3IDMgMTIgM0MxMi41NTIzIDMgMTMgMy40NDc3MiAxMyA0WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA1LjVDMTYgOC41Mzc1NyAxMy41Mzc2IDExIDEwLjUgMTFIN1YxM0g1VjE1TDQgMTZIMFYxMkw1LjE2MzUxIDYuODM2NDlDNS4wNTY3IDYuNDA4NjMgNSA1Ljk2MDk0IDUgNS41QzUgMi40NjI0MyA3LjQ2MjQzIDAgMTAuNSAwQzEzLjUzNzYgMCAxNiAyLjQ2MjQzIDE2IDUuNVpNMTMgNEMxMyA0LjU1MjI4IDEyLjU1MjMgNSAxMiA1QzExLjQ0NzcgNSAxMSA0LjU1MjI4IDExIDRDMTEgMy40NDc3MiAxMS40NDc3IDMgMTIgM0MxMi41NTIzIDMgMTMgMy40NDc3MiAxMyA0WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 102.483);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjM3ODkyIDEwLjIyMzZMOCAxNkwxMi42MjExIDEwLjIyMzZDMTMuNTEzNyA5LjEwNzg4IDE0IDcuNzIxNTQgMTQgNi4yOTI2NlY2QzE0IDIuNjg2MjkgMTEuMzEzNyAwIDggMEM0LjY4NjI5IDAgMiAyLjY4NjI5IDIgNlY2LjI5MjY2QzIgNy43MjE1NCAyLjQ4NjMgOS4xMDc4OCAzLjM3ODkyIDEwLjIyMzZaTTggOEM5LjEwNDU3IDggMTAgNy4xMDQ1NyAxMCA2QzEwIDQuODk1NDMgOS4xMDQ1NyA0IDggNEM2Ljg5NTQzIDQgNiA0Ljg5NTQzIDYgNkM2IDcuMTA0NTcgNi44OTU0MyA4IDggOFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjM3ODkyIDEwLjIyMzZMOCAxNkwxMi42MjExIDEwLjIyMzZDMTMuNTEzNyA5LjEwNzg4IDE0IDcuNzIxNTQgMTQgNi4yOTI2NlY2QzE0IDIuNjg2MjkgMTEuMzEzNyAwIDggMEM0LjY4NjI5IDAgMiAyLjY4NjI5IDIgNlY2LjI5MjY2QzIgNy43MjE1NCAyLjQ4NjMgOS4xMDc4OCAzLjM3ODkyIDEwLjIyMzZaTTggOEM5LjEwNDU3IDggMTAgNy4xMDQ1NyAxMCA2QzEwIDQuODk1NDMgOS4xMDQ1NyA0IDggNEM2Ljg5NTQzIDQgNiA0Ljg5NTQzIDYgNkM2IDcuMTA0NTcgNi44OTU0MyA4IDggOFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 26.4067);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMEw1IDVWMTRIMTRMMTYgOFY1SDEwVjJDMTAgMC44OTU0MzEgOS4xMDQ1NyAwIDggMEg3WiIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNMyA1SDBWMTRIM1Y1WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMEw1IDVWMTRIMTRMMTYgOFY1SDEwVjJDMTAgMC44OTU0MzEgOS4xMDQ1NyAwIDggMEg3WiIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNMyA1SDBWMTRIM1Y1WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 144.199);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjIxNjA2IDE1TDYuMTA0OTUgMTZIOC4xMTcyNkw4LjIyODM3IDE1SDEwLjAwM0MxMi4yMTA1IDE1IDE0IDEzLjIxMDUgMTQgMTEuMDAzQzE0IDkuMTI5NjMgMTIuNjk4OSA3LjUwNzYgMTAuODcwMSA3LjEwMTJMOS4xNDg1MiA2LjcxODY0TDkuNDUwNTkgNEgxM1YxSDkuNzgzOTNMOS44OTUwNCAwSDcuODgyNzNMNy43NzE2MiAxSDUuOTk2OTlDMy43ODk1MSAxIDIgMi43ODk1MSAyIDQuOTk2OTlDMiA2Ljg3MDM3IDMuMzAxMTUgOC40OTI0IDUuMTI5OTIgOC44OTg4TDYuODUxNDcgOS4yODEzNkw2LjU0OTM5IDEySDNWMTVINi4yMTYwNlpNOC41NjE3IDEySDEwLjAwM0MxMC41NTM2IDEyIDExIDExLjU1MzYgMTEgMTEuMDAzQzExIDEwLjUzNTcgMTAuNjc1NCAxMC4xMzExIDEwLjIxOTMgMTAuMDI5OEw4LjgxNTI4IDkuNzE3NzZMOC41NjE3IDEyWk03LjE4NDcgNi4yODIyM0w3LjQzODI4IDRINS45OTY5OUM1LjQ0NjM3IDQgNSA0LjQ0NjM3IDUgNC45OTY5OUM1IDUuNDY0MjcgNS4zMjQ1NSA1Ljg2ODg3IDUuNzgwNzEgNS45NzAyM0w3LjE4NDcgNi4yODIyM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjIxNjA2IDE1TDYuMTA0OTUgMTZIOC4xMTcyNkw4LjIyODM3IDE1SDEwLjAwM0MxMi4yMTA1IDE1IDE0IDEzLjIxMDUgMTQgMTEuMDAzQzE0IDkuMTI5NjMgMTIuNjk4OSA3LjUwNzYgMTAuODcwMSA3LjEwMTJMOS4xNDg1MiA2LjcxODY0TDkuNDUwNTkgNEgxM1YxSDkuNzgzOTNMOS44OTUwNCAwSDcuODgyNzNMNy43NzE2MiAxSDUuOTk2OTlDMy43ODk1MSAxIDIgMi43ODk1MSAyIDQuOTk2OTlDMiA2Ljg3MDM3IDMuMzAxMTUgOC40OTI0IDUuMTI5OTIgOC44OTg4TDYuODUxNDcgOS4yODEzNkw2LjU0OTM5IDEySDNWMTVINi4yMTYwNlpNOC41NjE3IDEySDEwLjAwM0MxMC41NTM2IDEyIDExIDExLjU1MzYgMTEgMTEuMDAzQzExIDEwLjUzNTcgMTAuNjc1NCAxMC4xMzExIDEwLjIxOTMgMTAuMDI5OEw4LjgxNTI4IDkuNzE3NzZMOC41NjE3IDEyWk03LjE4NDcgNi4yODIyM0w3LjQzODI4IDRINS45OTY5OUM1LjQ0NjM3IDQgNSA0LjQ0NjM3IDUgNC45OTY5OUM1IDUuNDY0MjcgNS4zMjQ1NSA1Ljg2ODg3IDUuNzgwNzEgNS45NzAyM0w3LjE4NDcgNi4yODIyM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 144.199);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDNMOS4wMDAwMSA0TDExLjI5MjkgNi4yOTI4OUw4LjUwMDAxIDkuMDg1NzlMNS41MDAwMSA2LjA4NTc5TDAuMjkyOTA4IDExLjI5MjlMMS43MDcxMiAxMi43MDcxTDUuNTAwMDEgOC45MTQyMUw4LjUwMDAxIDExLjkxNDJMMTIuNzA3MSA3LjcwNzExTDE1IDEwTDE2IDlMMTYgM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDNMOS4wMDAwMSA0TDExLjI5MjkgNi4yOTI4OUw4LjUwMDAxIDkuMDg1NzlMNS41MDAwMSA2LjA4NTc5TDAuMjkyOTA4IDExLjI5MjlMMS43MDcxMiAxMi43MDcxTDUuNTAwMDEgOC45MTQyMUw4LjUwMDAxIDExLjkxNDJMMTIuNzA3MSA3LjcwNzExTDE1IDEwTDE2IDlMMTYgM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 144.199);
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDBIMTJWMkgxNlY0QzE2IDYuNDU2NDEgMTQuMjI4NiA4LjQ5OTA5IDExLjg5MzYgOC45MjAzOEMxMS41NTM3IDEwLjM2MzcgMTAuNDMyIDExLjUwNTQgOSAxMS44NzRWMTRIMTJWMTZINFYxNEg3VjExLjg3NEM1LjU2Nzk2IDExLjUwNTQgNC40NDYyOCAxMC4zNjM3IDQuMTA2NCA4LjkyMDM4QzEuNzcxMzYgOC40OTkwOSAwIDYuNDU2NDEgMCA0VjJINFYwWk0xMiA2LjgyOTI5VjRIMTRDMTQgNS4zMDYyMiAxMy4xNjUyIDYuNDE3NDYgMTIgNi44MjkyOVpNNCA0SDJDMiA1LjMwNjIyIDIuODM0ODEgNi40MTc0NiA0IDYuODI5MjlWNFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDBIMTJWMkgxNlY0QzE2IDYuNDU2NDEgMTQuMjI4NiA4LjQ5OTA5IDExLjg5MzYgOC45MjAzOEMxMS41NTM3IDEwLjM2MzcgMTAuNDMyIDExLjUwNTQgOSAxMS44NzRWMTRIMTJWMTZINFYxNEg3VjExLjg3NEM1LjU2Nzk2IDExLjUwNTQgNC40NDYyOCAxMC4zNjM3IDQuMTA2NCA4LjkyMDM4QzEuNzcxMzYgOC40OTkwOSAwIDYuNDU2NDEgMCA0VjJINFYwWk0xMiA2LjgyOTI5VjRIMTRDMTQgNS4zMDYyMiAxMy4xNjUyIDYuNDE3NDYgMTIgNi44MjkyOVpNNCA0SDJDMiA1LjMwNjIyIDIuODM0ODEgNi40MTc0NiA0IDYuODI5MjlWNFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7 0.08 102.483);
  color: rgb(218, 218, 218);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
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
  background-color: var(--background-paper, oklch(0.24 0.0651659 142.489));
  border-bottom-color: oklch(0.25 0.21722 292.489);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.25 0.21722 292.489);
  border-right-color: oklch(0.25 0.21722 292.489);
  border-top-color: oklch(0.25 0.21722 292.489);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, oklch(0.22 0.0651659 142.489));
  border-bottom-color: oklch(0.22 0.0651659 142.489);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.22 0.0651659 142.489);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.22 0.0651659 142.489);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.22 0.0651659 142.489);
  border-top-style: ridge;
  border-top-width: 4px;
  box-shadow: var(--shadow-l, oklch(0 0 0 / 0.4) 0px 0px 12px 2px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.22 0.0651659 142.489);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.22 0.0651659 142.489);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.22 0.0651659 142.489);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.22 0.0651659 142.489);
  border-top-style: ridge;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: var(--background-paper, oklch(0.24 0.0651659 142.489));
  border-bottom-color: oklch(0.25 0.21722 292.489);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.25 0.21722 292.489);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.21722 292.489);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.21722 292.489);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: var(--box-shadow-active, oklch(0 0.0651659 292.489) 2px 2px 0px 0px inset, oklch(0.5 0.21722 292.489) -2px -2px 0px 0px inset);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, oklch(from oklch(from hsl(258, 88%, 66%) l c h) 80% c h / 75%));
  --pill-color-remove: var(--tag-color, oklch(from oklch(from hsl(258, 88%, 66%) l c h) 80% c h / 75%));
  --pill-radius: var(--tag-radius, 8px);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.8 0.21722 292.489 / 0.75);
  border-left-width: 4px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: oklch(0.8 0.21722 292.489 / 0.75);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, oklch(0.7 0.08 26.4067));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, oklch(0.7 0.08 26.4067));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, oklch(0.7 0.08 64.0453));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, oklch(0.7 0.08 26.4067));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, oklch(0.7 0.08 102.483));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, oklch(0.7 0.08 144.199));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, oklch(0.7 0.08 248.82));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, oklch(0.7 0.08 271.409));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(0.12 0.0651659 82.4895);
  border-left-color: oklch(0.12 0.0651659 82.4895);
  border-right-color: oklch(0.12 0.0651659 82.4895);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container {
  background-color: var(--background-paper, oklch(0.24 0.0651659 142.489));
}

html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-width: 2px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--folder-color, oklch(0.7 0.08 26.4067));
  font-weight: var(--nav-item-weight, 700);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--folder-color, oklch(0.7 0.08 26.4067));
  font-weight: var(--nav-item-weight, 700);
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 700);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  background-color: var(--button-normal, oklch(0.22 0.0651659 142.489));
  border-bottom-color: oklch(0.25 0.21722 292.489);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.21722 292.489);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.21722 292.489);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.21722 292.489);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--text-muted, rgb(179, 179, 179));
  cursor: var(--cursor, pointer);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, oklch(0.14 0.0651659 142.489));
  border-bottom-color: oklch(0.12 0.0651659 82.4895);
  border-left-color: oklch(0.12 0.0651659 82.4895);
  border-left-width: 0px;
  border-right-color: oklch(0.12 0.0651659 82.4895);
  border-top-color: oklch(0.12 0.0651659 82.4895);
  border-top-left-radius: 0px;
  border-top-width: 0px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  --folder-color: var(--folder-color-1, oklch(
    from #d32f2f 70% 20% h
  ));
  background-color: oklch(
    from var(--folder-color) l var(--chroma-folder) h / 30%
  );
  border-bottom-color: oklch(0.55 0.08 142.489 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.55 0.08 142.489 / 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.55 0.08 142.489 / 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.55 0.08 142.489 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  --folder-color: var(--folder-color-1, oklch(
    from #d32f2f 70% 20% h
  ));
  background-color: oklch(
    from var(--folder-color) l var(--chroma-folder) h / 30%
  );
  border-bottom-color: oklch(0.55 0.08 142.489 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.55 0.08 142.489 / 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.55 0.08 142.489 / 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.55 0.08 142.489 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: var(--background-paper, oklch(0.24 0.0651659 142.489));
  border-bottom-color: oklch(0.22 0.0651659 142.489);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.22 0.0651659 142.489);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.22 0.0651659 142.489);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.22 0.0651659 142.489);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  background-color: var(--button-normal, oklch(0.22 0.0651659 142.489));
  border-bottom-color: oklch(0.25 0.21722 292.489);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.21722 292.489);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.21722 292.489);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.21722 292.489);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--text-muted, rgb(179, 179, 179));
  cursor: var(--cursor, pointer);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, oklch(0.18 0.0651659 292.489));
  border-color: oklch(0.2 0.0651659 292.489);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: oklch(0.22 0.0651659 142.489);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: oklch(0.5 0.000044365 23.517 / 0.5);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: var(--metadata-background, oklch(0.18 0.0651659 292.489 / 0.75));
  border-bottom-color: oklch(0.22 0.0651659 142.489);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.22 0.0651659 142.489);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.22 0.0651659 142.489);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.22 0.0651659 142.489);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  margin-bottom: 0px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .note-properties {
  background-color: var(--metadata-background, oklch(0.18 0.0651659 292.489 / 0.75));
  border-color: oklch(0.22 0.0651659 142.489);
  border-radius: 12px;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, oklch(from oklch(from hsl(258, 88%, 66%) l c h) 80% c h / 75%));
  --pill-color-remove: var(--tag-color, oklch(from oklch(from hsl(258, 88%, 66%) l c h) 80% c h / 75%));
  --pill-radius: var(--tag-radius, 8px);
  border-radius: 8px;
  color: var(--pill-color, oklch(0.8 0.21722 292.489 / 0.75));
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, oklch(0.22 0.0651659 142.489));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-style: ridge;
  border-left-style: ridge;
  border-right-style: ridge;
  border-top-style: ridge;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-primary, oklch(0.22 0.0651659 142.489));
  border-color: oklch(0.2 0.0651659 292.489);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, oklch(0.12 0.0651659 82.4895));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: oklch(0.2 0.0651659 292.489);
}`,
    misc: `html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, oklch(0.14 0.0651659 142.489));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, oklch(0.1 0.0651659 292.489 / 0.5));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0 0 0 1px oklch(from var(--text-normal) l c h / 25%);
}

html[saved-theme="dark"] body ul.tags > li {
  --font-weight: var(--link-weight, 700);
  --tag-background: oklch(from var(--tag-color) l c h / 10%);
  --tag-background-hover: oklch(from var(--tag-color) l c h / 30%);
  --tag-border-color: var(--tag-color, oklch(from oklch(from hsl(258, 88%, 66%) l c h) 80% c h / 75%));
  --tag-border-color-hover: var(--tag-border-color, oklch(from oklch(from hsl(258, 88%, 66%) l c h) 80% c h / 75%));
  --tag-color-hover: var(--tag-color, oklch(from oklch(from hsl(258, 88%, 66%) l c h) 80% c h / 75%));
  --tag-padding-x: var(--size-4-1, 4px);
  background-color: var(--tag-background, oklch(0.8 0.21722 292.489 / 0.1));
  border-bottom-color: oklch(0.8 0.21722 292.489 / 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.8 0.21722 292.489 / 0.75);
  border-left-width: 4px;
  border-right-color: oklch(0.8 0.21722 292.489 / 0.75);
  border-right-width: 1px;
  border-top-color: oklch(0.8 0.21722 292.489 / 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--tag-color, oklch(0.8 0.21722 292.489 / 0.75));
}`,
  },
  light: {
    base: `:root:root {
  --accent-1: oklch(from var(--base-accent) l c calc(h + var(--rotation-1)));
  --accent-2: oklch(from var(--base-accent) l c calc(h + var(--rotation-2)));
  --background-modifier-border: oklch(from var(--background-secondary) l c h);
  --background-modifier-border-focus: oklch(
    from var(--background-primary) 70% c h
  );
  --background-modifier-error: var(--color-red, oklch(
    from #d32f2f 50% 30% h
  ));
  --background-modifier-error-hover: var(--color-red, oklch(
    from #d32f2f 50% 30% h
  ));
  --background-modifier-success: var(--color-green, oklch(
    from #4caf50 50% 30% h
  ));
  --background-paper: oklch(
    from var(--accent-2) 98% calc(c * var(--chroma-accent)) h
  );
  --background-primary: oklch(
    from var(--accent-2) 93% calc(c * var(--chroma-accent)) h
  );
  --background-primary-alt: oklch(
    from var(--base-accent) 75% calc(c * var(--chroma-accent)) h
  );
  --background-secondary: oklch(
    from var(--base-accent) 80% calc(c * var(--chroma-accent)) h
  );
  --background-secondary-alt: oklch(
    from var(--accent-1) 65% calc(c * var(--chroma-accent)) h
  );
  --background-tertiary: oklch(
    from var(--accent-2) 60% calc(c * var(--chroma-accent)) h
  );
  --base-accent: oklch(from var(--interactive-accent) l c h);
  --bases-cards-background: oklch(from var(--background-tertiary) 85% c h);
  --bases-cards-border-width: var(--border-width, 4px);
  --bases-cards-cover-background: var(--background-primary-alt, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  ));
  --bases-embed-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h));
  --bases-embed-border-radius: var(--window-border-radius, 12px);
  --bases-table-border-color: var(--table-border-color, oklch(from #222222 50% c h / 50%));
  --bases-table-cell-background-active: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --bases-table-cell-background-disabled: var(--background-primary-alt, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  ));
  --bases-table-container-border-radius: var(--radius-s, 8px);
  --bases-table-group-background: var(--background-primary-alt, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  ));
  --bases-table-header-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --bases-table-header-weight: var(--font-weight, 100);
  --bases-table-summary-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --blockquote-background-color: oklch(
    from var(--background-secondary) l c h / 40%
  );
  --blockquote-border-color: oklch(from var(--base-accent) 50% c h / 75%);
  --blockquote-border-thickness: var(--size-2-2, 4px);
  --bold-color: oklch(
    from var(--base-accent) calc(var(--lightness) - 15%) var(--chroma)
      calc(h + 100)
  );
  --border-groove: 4px groove var(--background-primary-alt);
  --border-ridge: 4px ridge var(--background-primary);
  --border-solid: 4px solid var(--titlebar-background);
  --box-shadow: inset -2px -2px oklch(from var(--background-secondary) 50% c h),
    inset 2px 2px oklch(from var(--background-secondary) 100% c h);
  --box-shadow-active: inset 2px 2px oklch(from var(--background-secondary) 50% c h),
    inset -2px -2px oklch(from var(--background-secondary) 100% c h);
  --box-shadow-active-sm: inset 1px 1px oklch(from var(--background-secondary) 50% c h),
    inset -1px -1px oklch(from var(--background-secondary) 100% c h);
  --box-shadow-sm: inset -1px -1px oklch(from var(--background-secondary) 50% c h),
    inset 1px 1px oklch(from var(--background-secondary) 100% c h);
  --button-active: oklch(from var(--background-secondary-alt) 85% c h);
  --button-border-radius: 8px;
  --button-hover: oklch(from var(--background-paper) l c h);
  --button-normal: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --button-radius: var(--input-radius, 12px);
  --button-text: var(--text-normal, #222222);
  --callout-border-width: var(--size-4-1, 4px);
  --callout-radius: var(--window-border-radius, 12px);
  --canvas-background: var(--background-paper, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 98% calc(c * 0.4) h
  ));
  --canvas-controls-radius: var(--radius-s, 8px);
  --canvas-dot-pattern: oklch(
    from var(--text-normal) l c h / var(--retroma-canvas-dot-opacity)
  );
  --checkbox-color: var(--background-secondary, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ));
  --checkbox-color-hover: var(--background-secondary-alt, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 150)) 65% calc(c * 0.4) h
  ));
  --checkbox-marker-color: var(--background-paper, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 98% calc(c * 0.4) h
  ));
  --checkbox-radius: var(--window-border-radius, 12px);
  --chroma: 30%;
  --chroma-accent: 0.4;
  --chroma-folder: 30%;
  --clickable-icon-radius: var(--radius-s, 8px);
  --code-background: oklch(from var(--background-secondary) 85% c h / 50%);
  --code-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h));
  --code-function: var(--color-yellow, oklch(
    from #ffeb3b 50% 30% h
  ));
  --code-important: var(--color-orange, oklch(
    from #ff9800 50% 30% h
  ));
  --code-operator: var(--color-red, oklch(
    from #d32f2f 50% 30% h
  ));
  --code-property: var(--color-cyan, oklch(
    from #00bcd4 50% 30% h
  ));
  --code-radius: var(--window-border-radius, 12px);
  --code-string: var(--color-green, oklch(
    from #4caf50 50% 30% h
  ));
  --code-tag: var(--color-red, oklch(
    from #d32f2f 50% 30% h
  ));
  --code-value: var(--color-purple, oklch(
    from #673ab7 50% 30% h
  ));
  --collapse-icon-color: var(--text-muted, #5c5c5c);
  --collapse-icon-color-collapsed: var(--text-faint, #ababab);
  --color-amber: oklch(
    from var(--hue-amber) var(--lightness) var(--chroma) h
  );
  --color-blue: oklch(
    from var(--hue-blue) var(--lightness) var(--chroma) h
  );
  --color-cyan: oklch(
    from var(--hue-cyan) var(--lightness) var(--chroma) h
  );
  --color-green: oklch(
    from var(--hue-green) var(--lightness) var(--chroma) h
  );
  --color-indigo: oklch(
    from var(--hue-indigo) var(--lightness) var(--chroma) h
  );
  --color-lime: oklch(
    from var(--hue-lime) var(--lightness) var(--chroma) h
  );
  --color-magenta: oklch(
    from var(--hue-magenta) var(--lightness) var(--chroma) h
  );
  --color-orange: oklch(
    from var(--hue-orange) var(--lightness) var(--chroma) h
  );
  --color-purple: oklch(
    from var(--hue-purple) var(--lightness) var(--chroma) h
  );
  --color-red: oklch(
    from var(--hue-red) var(--lightness) var(--chroma) h
  );
  --color-rose: oklch(
    from var(--hue-rose) var(--lightness) var(--chroma) h
  );
  --color-teal: oklch(
    from var(--hue-teal) var(--lightness) var(--chroma) h
  );
  --color-vermillion: oklch(
    from var(--hue-vermillion) var(--lightness) var(--chroma) h
  );
  --color-violet: oklch(
    from var(--hue-violet) var(--lightness) var(--chroma) h
  );
  --color-yellow: oklch(
    from var(--hue-yellow) var(--lightness) var(--chroma) h
  );
  --divider-color: var(--titlebar-background, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 150)) 65% calc(c * 0.4) h
  ));
  --divider-width: 0px;
  --dropdown-background: var(--background-paper, #ffffff);
  --file-header-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --file-header-background-focused: var(--background-secondary, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ));
  --file-margins: var(--size-4-4, 16px);
  --folder-accent: var(--base-accent, oklch(from hsl(257, 88.88%, 70.95%) l c h));
  --folder-color-1: oklch(
    from var(--hue-red) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-10: oklch(
    from var(--hue-lime) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-11: oklch(
    from var(--hue-teal) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-12: oklch(
    from var(--hue-purple) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-13: oklch(
    from var(--hue-magenta) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-14: oklch(
    from var(--hue-rose) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-15: oklch(
    from var(--hue-cyan) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-2: oklch(
    from var(--hue-orange) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-3: oklch(
    from var(--hue-yellow) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-4: oklch(
    from var(--hue-green) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-5: oklch(
    from var(--hue-blue) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-6: oklch(
    from var(--hue-indigo) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-7: oklch(
    from var(--hue-violet) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-8: oklch(
    from var(--hue-vermillion) var(--lightness) var(--chroma-folder) h
  );
  --folder-color-9: oklch(
    from var(--hue-amber) var(--lightness) var(--chroma-folder) h
  );
  --footnote-divider-color: var(--metadata-divider-color, oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h));
  --footnote-radius: var(--radius-s, 8px);
  --graph-node-attachment: var(--color-yellow, oklch(
    from #ffeb3b 50% 30% h
  ));
  --graph-node-tag: var(--color-green, oklch(
    from #4caf50 50% 30% h
  ));
  --h1-color: var(--color-red, oklch(
    from #d32f2f 50% 30% h
  ));
  --h2-color: var(--color-orange, oklch(
    from #ff9800 50% 30% h
  ));
  --h3-color: var(--color-yellow, oklch(
    from #ffeb3b 50% 30% h
  ));
  --h4-color: var(--color-green, oklch(
    from #4caf50 50% 30% h
  ));
  --h5-color: var(--color-blue, oklch(
    from #2196f3 50% 30% h
  ));
  --h6-color: var(--color-indigo, oklch(
    from #3f51b5 50% 30% h
  ));
  --header-height: 48px;
  --highlight: var(--text-highlight-bg, oklch(from var(--accent-1) 80% var(--chroma) h / 75%));
  --hr-color: oklch(from var(--text-normal) l c h / 25%);
  --hue-amber: #ffb300;
  --hue-blue: #2196f3;
  --hue-cyan: #00bcd4;
  --hue-green: #4caf50;
  --hue-indigo: #3f51b5;
  --hue-lime: #8bc34a;
  --hue-magenta: #e91e63;
  --hue-orange: #ff9800;
  --hue-purple: #673ab7;
  --hue-red: #d32f2f;
  --hue-rose: #f48fb1;
  --hue-teal: #009688;
  --hue-vermillion: #ff5722;
  --hue-violet: #9c27b0;
  --hue-yellow: #ffeb3b;
  --img-border-color: oklch(from var(--background-tertiary) l var(--chroma) h);
  --img-border-radius: 0px;
  --img-border-width: 0px;
  --inline-title-color: var(--h1-color, oklch(
    from #d32f2f 50% 30% h
  ));
  --input-border-width: var(--border-width, 2px);
  --input-radius: var(--window-border-radius, 12px);
  --interactive-active: oklch(from var(--base-accent) 50% c h / 50%);
  --italic-color: oklch(
    from var(--base-accent) calc(var(--lightness) - 15%) var(--chroma)
      calc(h + 200)
  );
  --light: var(--background-primary, oklch(
    from var(--accent-2) 93% calc(c * var(--chroma-accent)) h
  ));
  --lightgray: var(--background-secondary, oklch(
    from var(--base-accent) 80% calc(c * var(--chroma-accent)) h
  ));
  --lightness: 50%;
  --link-color: oklch(
    from var(--base-accent) calc(var(--lightness) - 15%) var(--chroma) h
  );
  --link-color-hover: oklch(
    from var(--link-color) var(--lightness) var(--chroma) h / 80%
  );
  --link-external-color: var(--color-red, oklch(
    from #d32f2f 50% 30% h
  ));
  --link-external-color-hover: oklch(
    from var(--link-external-color) var(--lightness) var(--chroma) h / 80%
  );
  --link-unresolved-color: oklch(
    from var(--link-color) var(--lightness) var(--chroma) h / 60%
  );
  --link-weight: var(--font-bold, 700);
  --menu-background: var(--background-paper, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 98% calc(c * 0.4) h
  ));
  --metadata-background: oklch(from var(--background-secondary) l c h / 75%);
  --metadata-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h));
  --metadata-border-radius: var(--window-border-radius, 12px);
  --metadata-divider-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h));
  --metadata-gap: var(--size-4-2, 8px);
  --metadata-label-background: oklch(
    from var(--background-tertiary) l c h / 15%
  );
  --metadata-label-background-active: oklch(
    from var(--background-tertiary) l c h / 30%
  );
  --metadata-label-background-hover: oklch(
    from var(--background-tertiary) l c h / 30%
  );
  --metadata-label-font-weight: var(--font-bold, 700);
  --metadata-label-width: 8em;
  --metadata-property-background: var(--background-paper, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 98% calc(c * 0.4) h
  ));
  --metadata-property-background-hover: var(--background-paper, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 98% calc(c * 0.4) h
  ));
  --metadata-property-box-shadow-hover: 0 0 0 1px var(--background-tertiary);
  --metadata-property-radius: var(--window-border-radius, 12px);
  --metadata-property-radius-focus: var(--window-border-radius, 12px);
  --metadata-property-radius-hover: var(--window-border-radius, 12px);
  --mobile-sidebar-width: 100%;
  --modal-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --nav-collapse-icon-color: var(--collapse-icon-color, #5c5c5c);
  --nav-indentation-guide-width: var(--indentation-guide-width, 2px);
  --nav-item-background-selected: var(--text-selection, oklch(from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 80% 30% h / 75%));
  --nav-item-radius: var(--button-border-radius, 8px);
  --nav-tag-color: var(--text-muted, #5c5c5c);
  --nav-tag-radius: var(--radius-s, 8px);
  --outline-color: oklch(from var(--base-accent) 25% c h);
  --pdf-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --pdf-page-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --pdf-sidebar-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --pill-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h));
  --prompt-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --radius-m: var(--button-border-radius, 8px);
  --radius-s: var(--button-border-radius, 8px);
  --radius-xs: var(--button-border-radius, 8px);
  --radius-xxs: var(--button-border-radius, 8px);
  --retroma-canvas-card-border-width: 3px;
  --retroma-canvas-card-embed-border-width: 3px;
  --retroma-canvas-dot-opacity: 0.3;
  --retroma-canvas-node-content-bg-opacity: 0.25;
  --retroma-folder-bg-color: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --retroma-folder-border: 1px solid
    oklch(from var(--accent-2) 55% var(--chroma-folder) h / 50%);
  --retroma-folder-box-shadow: -1px 1px 0px var(--background-tertiary);
  --ribbon-background: var(--background-secondary, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ));
  --ribbon-background-collapsed: var(--ribbon-background, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ));
  --rotation-1: 150;
  --rotation-2: 210;
  --search-result-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --setting-items-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --setting-items-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h));
  --setting-items-radius: var(--window-border-radius, 12px);
  --settings-background: var(--background-paper, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 98% calc(c * 0.4) h
  ));
  --shiki-code-background: var(--code-background, oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 85% c h / 50%));
  --shiki-code-block-border-radius: var(--code-radius, 12px);
  --shiki-code-function: var(--color-green, oklch(
    from #4caf50 50% 30% h
  ));
  --shiki-code-important: var(--color-orange, oklch(
    from #ff9800 50% 30% h
  ));
  --shiki-code-property: var(--color-cyan, oklch(
    from #00bcd4 50% 30% h
  ));
  --shiki-code-string: var(--color-yellow, oklch(
    from #ffeb3b 50% 30% h
  ));
  --shiki-code-value: var(--color-purple, oklch(
    from #673ab7 50% 30% h
  ));
  --shiki-gutter-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h));
  --slider-track-background: var(--interactive-active, oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) 50% c h / 50%));
  --slider-track-height: var(--size-2-3, 6px);
  --status-bar-background: var(--background-tertiary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 60% calc(c * 0.4) h
  ));
  --status-bar-border-color: var(--divider-color, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 150)) 65% calc(c * 0.4) h
  ));
  --strong-emphasis: var(--italic-color, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) calc(50% - 15%) 30%
      calc(h + 200)
  ));
  --suggestion-background: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --sync-avatar-color-1: var(--color-red, oklch(
    from #d32f2f 50% 30% h
  ));
  --sync-avatar-color-2: var(--color-orange, oklch(
    from #ff9800 50% 30% h
  ));
  --sync-avatar-color-3: var(--color-yellow, oklch(
    from #ffeb3b 50% 30% h
  ));
  --sync-avatar-color-4: var(--color-green, oklch(
    from #4caf50 50% 30% h
  ));
  --sync-avatar-color-5: var(--color-cyan, oklch(
    from #00bcd4 50% 30% h
  ));
  --sync-avatar-color-6: var(--color-blue, oklch(
    from #2196f3 50% 30% h
  ));
  --sync-avatar-color-7: var(--color-purple, oklch(
    from #673ab7 50% 30% h
  ));
  --tab-background-active: var(--background-primary, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 210)) 93% calc(c * 0.4) h
  ));
  --tab-container-background: var(--background-secondary, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ));
  --tab-outline-color: var(--divider-color, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 150)) 65% calc(c * 0.4) h
  ));
  --tab-radius: var(--radius-s, 8px);
  --tab-stacked-header-width: var(--header-height, 48px);
  --tab-switcher-background: var(--background-secondary, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ));
  --tab-switcher-preview-radius: var(--window-border-radius, 12px);
  --table-add-button-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h));
  --table-border-color: oklch(from var(--table-header-color) 50% c h / 50%);
  --table-border-spacing: 2px;
  --table-data-background: oklch(from var(--base-accent) l c h / 7%);
  --table-header-background: oklch(from var(--accent-1) 50% c h / 30%);
  --table-header-border-color: var(--table-border-color, oklch(from #222222 50% c h / 50%));
  --tag-border-width: 1px;
  --tag-color: oklch(from var(--base-accent) 40% c h / 75%);
  --tag-radius: var(--button-border-radius, 8px);
  --text-error: var(--color-red, oklch(
    from #d32f2f 50% 30% h
  ));
  --text-highlight-bg: oklch(from var(--accent-1) 80% var(--chroma) h / 75%);
  --text-selection: oklch(from var(--accent-2) 80% var(--chroma) h / 75%);
  --text-success: var(--color-green, oklch(
    from #4caf50 50% 30% h
  ));
  --text-warning: var(--color-orange, oklch(
    from #ff9800 50% 30% h
  ));
  --textHighlight: var(--text-highlight-bg, oklch(from var(--accent-1) 80% var(--chroma) h / 75%));
  --titlebar-background: oklch(
    from var(--accent-1) 65% calc(c * var(--chroma-accent)) h
  );
  --titlebar-background-focused: var(--titlebar-background, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 150)) 65% calc(c * 0.4) h
  ));
  --titlebar-border-color: var(--background-modifier-border, oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h));
  --titlebar-text-color-focused: oklch(from var(--background-paper) 100% c h);
  --touch-radius-m: var(--button-border-radius, 8px);
  --touch-radius-s: var(--button-border-radius, 8px);
  --touch-radius-xs: var(--button-border-radius, 8px);
  --touch-radius-xxs: var(--button-border-radius, 8px);
  --traffic-lights-offset-x: var(--header-height, 48px);
  --traffic-lights-offset-y: var(--header-height, 48px);
  --window-border-radius: 12px;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ));
  background-color: var(--tab-container-background, oklch(0.8 0.0756873 293.559));
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, oklch(0.98 0.0756873 143.559));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-primary, oklch(0.93 0.0756873 143.559));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.65 0.0756873 83.5585);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ));
  background-color: var(--tab-container-background, oklch(0.8 0.0756873 293.559));
  border-left-color: oklch(0.65 0.0756873 83.5585);
}

html[saved-theme="light"] body html {
  --hue-amber: #ffb300;
  --hue-blue: #2196f3;
  --hue-cyan: #00bcd4;
  --hue-green: #4caf50;
  --hue-indigo: #3f51b5;
  --hue-lime: #8bc34a;
  --hue-magenta: #e91e63;
  --hue-orange: #ff9800;
  --hue-purple: #673ab7;
  --hue-red: #d32f2f;
  --hue-rose: #f48fb1;
  --hue-teal: #009688;
  --hue-vermillion: #ff5722;
  --hue-violet: #9c27b0;
  --hue-yellow: #ffeb3b;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, oklch(0.35 0.12 33.5585));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.35 0.12 33.5585) none 0px;
  text-decoration-color: oklch(0.35 0.12 33.5585);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, oklch(0.35 0.12 133.559));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.35 0.12 133.559) none 0px;
  text-decoration-color: oklch(0.35 0.12 133.559);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, oklch(0.35 0.12 133.559));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.35 0.12 133.559) none 0px;
  text-decoration-color: oklch(0.35 0.12 133.559);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, oklch(0.35 0.12 33.5585));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.35 0.12 33.5585) none 0px;
  text-decoration-color: oklch(0.35 0.12 33.5585);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, oklch(0.8 0.12 83.5585 / 0.75));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body del {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: var(--background-paper, rgba(0, 0, 0, 0));
  border-radius: 12px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--background-paper, rgba(0, 0, 0, 0));
  border-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  --font-weight: var(--link-weight, 700);
  color: var(--link-external-color, oklch(0.5 0.12 26.4067));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: oklch(0.5 0.12 26.4067) none 0px;
  text-decoration-color: oklch(0.5 0.12 26.4067);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  --font-weight: var(--link-weight, 700);
  color: var(--link-color, oklch(0.35 0.12 293.559));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: oklch(0.35 0.12 293.559) none 0px;
  text-decoration-color: oklch(0.35 0.12 293.559);
}

html[saved-theme="light"] body a.internal-link.broken {
  --font-weight: var(--link-weight, 700);
  color: var(--link-unresolved-color, oklch(0.5 0.12 293.559 / 0.6));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 700);
  outline: oklch(0.5 0.12 293.559 / 0.6) none 0px;
}`,
    lists: `html[saved-theme="light"] body ul.overflow {
  border-bottom-style: ridge;
  border-left-style: ridge;
  border-right-style: ridge;
  border-top-style: ridge;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  --font-weight: var(--link-weight, 700);
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, oklch(0.8 0.0756873 293.559 / 0.4));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="light"] body table {
  border-bottom-color: oklch(0.93 0.0756873 143.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756873 143.559);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756873 143.559);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756873 143.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  width: 240.219px;
}

html[saved-theme="light"] body td {
  background-color: var(--table-data-background, oklch(0.653792 0.189218 293.559 / 0.07));
  border-bottom-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-left-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-right-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-top-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
}

html[saved-theme="light"] body th {
  border-bottom-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-left-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-right-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-top-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
  border-top-left-radius: var(--window-border-radius, 12px);
}

html[saved-theme="light"] body thead {
  border-bottom-color: oklch(0.93 0.0756873 143.559);
  border-left-color: oklch(0.93 0.0756873 143.559);
  border-right-color: oklch(0.93 0.0756873 143.559);
  border-top-color: oklch(0.93 0.0756873 143.559);
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, oklch(0.5 0.189218 83.5585 / 0.3));
  border-bottom-color: oklch(0.93 0.0756873 143.559);
  border-left-color: oklch(0.93 0.0756873 143.559);
  border-right-color: oklch(0.93 0.0756873 143.559);
  border-top-color: oklch(0.93 0.0756873 143.559);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, oklch(0.85 0.0756873 293.559 / 0.5));
  border-bottom-color: oklch(0.8 0.0756873 293.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.8 0.0756873 293.559);
  border-right-color: oklch(0.8 0.0756873 293.559);
  border-top-color: oklch(0.8 0.0756873 293.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 0px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, oklch(0.85 0.0756873 293.559 / 0.5));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 85% c h / 50%));
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body img {
  border-bottom-color: oklch(0.5 0.12 26.4067);
  border-left-color: oklch(0.5 0.12 26.4067);
  border-right-color: oklch(0.5 0.12 26.4067);
  border-top-color: oklch(0.5 0.12 26.4067);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, oklch(0.75 0.0756873 293.559));
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMTcxNiA4LjAwMDAzTDEuMDg1ODIgMy45MTQyNEwzLjkxNDI0IDEuMDg1ODJMOC4wMDAwMyA1LjE3MTZMMTIuMDg1OCAxLjA4NTgyTDE0LjkxNDIgMy45MTQyNEwxMC44Mjg1IDguMDAwMDNMMTQuOTE0MiAxMi4wODU4TDEyLjA4NTggMTQuOTE0Mkw4LjAwMDAzIDEwLjgyODVMMy45MTQyNCAxNC45MTQyTDEuMDg1ODIgMTIuMDg1OEw1LjE3MTYgOC4wMDAwM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMTcxNiA4LjAwMDAzTDEuMDg1ODIgMy45MTQyNEwzLjkxNDI0IDEuMDg1ODJMOC4wMDAwMyA1LjE3MTZMMTIuMDg1OCAxLjA4NTgyTDE0LjkxNDIgMy45MTQyNEwxMC44Mjg1IDguMDAwMDNMMTQuOTE0MiAxMi4wODU4TDEyLjA4NTggMTQuOTE0Mkw4LjAwMDAzIDEwLjgyODVMMy45MTQyNCAxNC45MTQyTDEuMDg1ODIgMTIuMDg1OEw1LjE3MTYgOC4wMDAwM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAxNUgwVjEyTDcgMEg5TDE2IDEyVjE1Wk03IDRIOVY5SDdWNFpNNyAxMUg5VjEzSDdWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAxNUgwVjEyTDcgMEg5TDE2IDEyVjE1Wk03IDRIOVY5SDdWNFpNNyAxMUg5VjEzSDdWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 64.0453);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNSA1LjVDNS41IDQuMTE5MjkgNi42MTkyOSAzIDggM0M5LjM4MDcxIDMgMTAuNSA0LjExOTI5IDEwLjUgNS41QzEwLjUgNi44ODA3MSA5LjM4MDcxIDggOCA4SDdWMTFIOEMxMS4wMzc2IDExIDEzLjUgOC41Mzc1NyAxMy41IDUuNUMxMy41IDIuNDYyNDMgMTEuMDM3NiAwIDggMEM0Ljk2MjQzIDAgMi41IDIuNDYyNDMgMi41IDUuNUg1LjVaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xMCAxM0g3VjE2SDEwVjEzWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNSA1LjVDNS41IDQuMTE5MjkgNi42MTkyOSAzIDggM0M5LjM4MDcxIDMgMTAuNSA0LjExOTI5IDEwLjUgNS41QzEwLjUgNi44ODA3MSA5LjM4MDcxIDggOCA4SDdWMTFIOEMxMS4wMzc2IDExIDEzLjUgOC41Mzc1NyAxMy41IDUuNUMxMy41IDIuNDYyNDMgMTEuMDM3NiAwIDggMEM0Ljk2MjQzIDAgMi41IDIuNDYyNDMgMi41IDUuNUg1LjVaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xMCAxM0g3VjE2SDEwVjEzWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjkyODkgMS4yOTI5MUw2LjcwNzExIDIuNzA3MTJMMyA2LjQxNDIzVjcuMDAwMDFIN1YxNEgxVjUuNTg1OEw1LjI5Mjg5IDEuMjkyOTFaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xNSA3LjAwMDAxSDExVjYuNDE0MjNMMTQuNzA3MSAyLjcwNzEyTDEzLjI5MjkgMS4yOTI5MUw5IDUuNTg1OFYxNEgxNVY3LjAwMDAxWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjkyODkgMS4yOTI5MUw2LjcwNzExIDIuNzA3MTJMMyA2LjQxNDIzVjcuMDAwMDFIN1YxNEgxVjUuNTg1OEw1LjI5Mjg5IDEuMjkyOTFaIiBmaWxsPSIjMDAwMDAwIi8+CjxwYXRoIGQ9Ik0xNSA3LjAwMDAxSDExVjYuNDE0MjNMMTQuNzA3MSAyLjcwNzEyTDEzLjI5MjkgMS4yOTI5MUw5IDUuNTg1OFYxNEgxNVY3LjAwMDAxWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 294.789);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDAwMDEgMEg3LjAwMDAxTDUuNTEyOTIgNC41NzY4MUwwLjcwMDU1NCA0LjU3NjgyTDAuMDgyNTE5NSA2LjQ3ODkzTDMuOTc1ODEgOS4zMDc1NkwyLjQ4ODczIDEzLjg4NDNMNC4xMDY3NyAxNS4wNTk5TDguMDAwMDIgMTIuMjMxM0wxMS44OTMzIDE1LjA1OTlMMTMuNTExMyAxMy44ODQzTDEyLjAyNDIgOS4zMDc1NEwxNS45MTc1IDYuNDc4OTJMMTUuMjk5NCA0LjU3NjgxTDEwLjQ4NzEgNC41NzY4MUw5LjAwMDAxIDBaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDAwMDEgMEg3LjAwMDAxTDUuNTEyOTIgNC41NzY4MUwwLjcwMDU1NCA0LjU3NjgyTDAuMDgyNTE5NSA2LjQ3ODkzTDMuOTc1ODEgOS4zMDc1NkwyLjQ4ODczIDEzLjg4NDNMNC4xMDY3NyAxNS4wNTk5TDguMDAwMDIgMTIuMjMxM0wxMS44OTMzIDE1LjA1OTlMMTMuNTExMyAxMy44ODQzTDEyLjAyNDIgOS4zMDc1NEwxNS45MTc1IDYuNDc4OTJMMTUuMjk5NCA0LjU3NjgxTDEwLjQ4NzEgNC41NzY4MUw5LjAwMDAxIDBaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 102.483);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAxNEgxNFYxNkgyVjE0SDNWMTEuNTg1OEw2LjU4NTc5IDhMMyA0LjQxNDIxVjJIMlYwSDE0VjJIMTNWNC40MTQyMUw5LjQxNDIxIDhMMTMgMTEuNTg1OFYxNFpNNSAxMi40MTQyVjE0SDExVjEyLjQxNDJMOCA5LjQxNDIxTDUgMTIuNDE0MloiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAxNEgxNFYxNkgyVjE0SDNWMTEuNTg1OEw2LjU4NTc5IDhMMyA0LjQxNDIxVjJIMlYwSDE0VjJIMTNWNC40MTQyMUw5LjQxNDIxIDhMMTMgMTEuNTg1OFYxNFpNNSAxMi40MTQyVjE0SDExVjEyLjQxNDJMOCA5LjQxNDIxTDUgMTIuNDE0MloiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 92, 92);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMEgzVjJIMVY1SDE1VjJIMTNWMEgxMFYySDZWMFoiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTE1IDdIMVYxNUgxNVY3WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMEgzVjJIMVY1SDE1VjJIMTNWMEgxMFYySDZWMFoiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTE1IDdIMVYxNUgxNVY3WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 102.483);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMUg1TDE2IDdWOUw1IDE1SDJMMyA5SDhWN0gzTDIgMVoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMUg1TDE2IDdWOUw1IDE1SDJMMyA5SDhWN0gzTDIgMVoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 248.82);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMEgxNFYxNkgxMkw4IDEyTDQgMTZIMlYwWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMEgxNFYxNkgxMkw4IDEyTDQgMTZIMlYwWiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTZMNSAxMVYySDE0TDE2IDhWMTFIMTBWMTRDMTAgMTUuMTA0NiA5LjEwNDU3IDE2IDggMTZIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTMgMTFIMFYySDNWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTZMNSAxMVYySDE0TDE2IDhWMTFIMTBWMTRDMTAgMTUuMTA0NiA5LjEwNDU3IDE2IDggMTZIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTMgMTFIMFYySDNWMTFaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEzTDkuMDAwMDEgMTJMMTEuMjkyOSA5LjcwNzEyTDguNTAwMDEgNi45MTQyM0w1LjUwMDAxIDkuOTE0MjNMMC4yOTI5MDggNC43MDcxMkwxLjcwNzEyIDMuMjkyOTFMNS41MDAwMSA3LjA4NThMOC41MDAwMSA0LjA4NThMMTIuNzA3MSA4LjI5MjkxTDE1IDYuMDAwMDFMMTYgNy4wMDAwMUwxNiAxM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDEzTDkuMDAwMDEgMTJMMTEuMjkyOSA5LjcwNzEyTDguNTAwMDEgNi45MTQyM0w1LjUwMDAxIDkuOTE0MjNMMC4yOTI5MDggNC43MDcxMkwxLjcwNzEyIDMuMjkyOTFMNS41MDAwMSA3LjA4NThMOC41MDAwMSA0LjA4NThMMTIuNzA3MSA4LjI5MjkxTDE1IDYuMDAwMDFMMTYgNy4wMDAwMUwxNiAxM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSA5QzE1IDEyLjg2NiAxMS44NjYgMTYgOCAxNkM0LjEzNDAxIDE2IDEgMTIuODY2IDEgOUMxIDUuNSA0IDMgNCAzSDZWNC41QzYgNS4wNTIyOCA2LjQ0NzcyIDUuNSA3IDUuNUM3LjU1MjI4IDUuNSA4IDUuMDUyMjggOCA0LjVWMEgxMEMxMCAwIDE1IDMgMTUgOVpNMTAgMTJDMTAgMTMuMTA0NiA5LjEwNDU3IDE0IDggMTRDNi44OTU0MyAxNCA2IDEzLjEwNDYgNiAxMkM2IDkuNSA4IDggOCA4QzggOCAxMCA5LjUgMTAgMTJaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSA5QzE1IDEyLjg2NiAxMS44NjYgMTYgOCAxNkM0LjEzNDAxIDE2IDEgMTIuODY2IDEgOUMxIDUuNSA0IDMgNCAzSDZWNC41QzYgNS4wNTIyOCA2LjQ0NzcyIDUuNSA3IDUuNUM3LjU1MjI4IDUuNSA4IDUuMDUyMjggOCA0LjVWMEgxMEMxMCAwIDE1IDMgMTUgOVpNMTAgMTJDMTAgMTMuMTA0NiA5LjEwNDU3IDE0IDggMTRDNi44OTU0MyAxNCA2IDEzLjEwNDYgNiAxMkM2IDkuNSA4IDggOCA4QzggOCAxMCA5LjUgMTAgMTJaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDE2SDdMMCA5VjdMNyAwSDlMMTYgN1Y5TDkgMTZaTTcgM1Y5SDlWM0g3Wk03IDExVjEzSDlWMTFIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDE2SDdMMCA5VjdMNyAwSDlMMTYgN1Y5TDkgMTZaTTcgM1Y5SDlWM0g3Wk03IDExVjEzSDlWMTFIN1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 248.82);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDNDMTUgNS42MTUwNyAxMy4zMjcgNy44Mzk0IDEwLjk5MjkgOC42NjEwOEMxMC4zNjk0IDguODgwNTkgOS42OTg2NCA5IDkgOVYxM0gxM1YxNUgzVjEzSDdWMTFDMy42ODYyOSAxMSAxIDguMzEzNzEgMSA1VjNIM0M0LjcyNzE1IDMgNi4yODM4NiAzLjcyOTc3IDcuMzc4NTkgNC44OTc3OUM3LjkzOTcyIDUuNDk2NDcgOC4zNzk0NyA2LjIxMDMgOC42NTg1OSA3SDlDOS41ODc1MiA3IDEwLjE0NTUgNi44NzMzMyAxMC42NDggNi42NDU4MUMxMC4yMjc0IDUuMjc3NzIgOS40NDk3MyA0LjA2NTk2IDguNDIzODEgMy4xMTkyOEM5LjUyNDM5IDEuODIyNzUgMTEuMTY2MSAxIDEzIDFIMTVWM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDNDMTUgNS42MTUwNyAxMy4zMjcgNy44Mzk0IDEwLjk5MjkgOC42NjEwOEMxMC4zNjk0IDguODgwNTkgOS42OTg2NCA5IDkgOVYxM0gxM1YxNUgzVjEzSDdWMTFDMy42ODYyOSAxMSAxIDguMzEzNzEgMSA1VjNIM0M0LjcyNzE1IDMgNi4yODM4NiAzLjcyOTc3IDcuMzc4NTkgNC44OTc3OUM3LjkzOTcyIDUuNDk2NDcgOC4zNzk0NyA2LjIxMDMgOC42NTg1OSA3SDlDOS41ODc1MiA3IDEwLjE0NTUgNi44NzMzMyAxMC42NDggNi42NDU4MUMxMC4yMjc0IDUuMjc3NzIgOS40NDk3MyA0LjA2NTk2IDguNDIzODEgMy4xMTkyOEM5LjUyNDM5IDEuODIyNzUgMTEuMTY2MSAxIDEzIDFIMTVWM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 144.199);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA1LjVDMTYgOC41Mzc1NyAxMy41Mzc2IDExIDEwLjUgMTFIN1YxM0g1VjE1TDQgMTZIMFYxMkw1LjE2MzUxIDYuODM2NDlDNS4wNTY3IDYuNDA4NjMgNSA1Ljk2MDk0IDUgNS41QzUgMi40NjI0MyA3LjQ2MjQzIDAgMTAuNSAwQzEzLjUzNzYgMCAxNiAyLjQ2MjQzIDE2IDUuNVpNMTMgNEMxMyA0LjU1MjI4IDEyLjU1MjMgNSAxMiA1QzExLjQ0NzcgNSAxMSA0LjU1MjI4IDExIDRDMTEgMy40NDc3MiAxMS40NDc3IDMgMTIgM0MxMi41NTIzIDMgMTMgMy40NDc3MiAxMyA0WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA1LjVDMTYgOC41Mzc1NyAxMy41Mzc2IDExIDEwLjUgMTFIN1YxM0g1VjE1TDQgMTZIMFYxMkw1LjE2MzUxIDYuODM2NDlDNS4wNTY3IDYuNDA4NjMgNSA1Ljk2MDk0IDUgNS41QzUgMi40NjI0MyA3LjQ2MjQzIDAgMTAuNSAwQzEzLjUzNzYgMCAxNiAyLjQ2MjQzIDE2IDUuNVpNMTMgNEMxMyA0LjU1MjI4IDEyLjU1MjMgNSAxMiA1QzExLjQ0NzcgNSAxMSA0LjU1MjI4IDExIDRDMTEgMy40NDc3MiAxMS40NDc3IDMgMTIgM0MxMi41NTIzIDMgMTMgMy40NDc3MiAxMyA0WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 102.483);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjM3ODkyIDEwLjIyMzZMOCAxNkwxMi42MjExIDEwLjIyMzZDMTMuNTEzNyA5LjEwNzg4IDE0IDcuNzIxNTQgMTQgNi4yOTI2NlY2QzE0IDIuNjg2MjkgMTEuMzEzNyAwIDggMEM0LjY4NjI5IDAgMiAyLjY4NjI5IDIgNlY2LjI5MjY2QzIgNy43MjE1NCAyLjQ4NjMgOS4xMDc4OCAzLjM3ODkyIDEwLjIyMzZaTTggOEM5LjEwNDU3IDggMTAgNy4xMDQ1NyAxMCA2QzEwIDQuODk1NDMgOS4xMDQ1NyA0IDggNEM2Ljg5NTQzIDQgNiA0Ljg5NTQzIDYgNkM2IDcuMTA0NTcgNi44OTU0MyA4IDggOFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjM3ODkyIDEwLjIyMzZMOCAxNkwxMi42MjExIDEwLjIyMzZDMTMuNTEzNyA5LjEwNzg4IDE0IDcuNzIxNTQgMTQgNi4yOTI2NlY2QzE0IDIuNjg2MjkgMTEuMzEzNyAwIDggMEM0LjY4NjI5IDAgMiAyLjY4NjI5IDIgNlY2LjI5MjY2QzIgNy43MjE1NCAyLjQ4NjMgOS4xMDc4OCAzLjM3ODkyIDEwLjIyMzZaTTggOEM5LjEwNDU3IDggMTAgNy4xMDQ1NyAxMCA2QzEwIDQuODk1NDMgOS4xMDQ1NyA0IDggNEM2Ljg5NTQzIDQgNiA0Ljg5NTQzIDYgNkM2IDcuMTA0NTcgNi44OTU0MyA4IDggOFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 26.4067);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMEw1IDVWMTRIMTRMMTYgOFY1SDEwVjJDMTAgMC44OTU0MzEgOS4xMDQ1NyAwIDggMEg3WiIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNMyA1SDBWMTRIM1Y1WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMEw1IDVWMTRIMTRMMTYgOFY1SDEwVjJDMTAgMC44OTU0MzEgOS4xMDQ1NyAwIDggMEg3WiIgZmlsbD0iIzAwMDAwMCIvPgo8cGF0aCBkPSJNMyA1SDBWMTRIM1Y1WiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 144.199);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjIxNjA2IDE1TDYuMTA0OTUgMTZIOC4xMTcyNkw4LjIyODM3IDE1SDEwLjAwM0MxMi4yMTA1IDE1IDE0IDEzLjIxMDUgMTQgMTEuMDAzQzE0IDkuMTI5NjMgMTIuNjk4OSA3LjUwNzYgMTAuODcwMSA3LjEwMTJMOS4xNDg1MiA2LjcxODY0TDkuNDUwNTkgNEgxM1YxSDkuNzgzOTNMOS44OTUwNCAwSDcuODgyNzNMNy43NzE2MiAxSDUuOTk2OTlDMy43ODk1MSAxIDIgMi43ODk1MSAyIDQuOTk2OTlDMiA2Ljg3MDM3IDMuMzAxMTUgOC40OTI0IDUuMTI5OTIgOC44OTg4TDYuODUxNDcgOS4yODEzNkw2LjU0OTM5IDEySDNWMTVINi4yMTYwNlpNOC41NjE3IDEySDEwLjAwM0MxMC41NTM2IDEyIDExIDExLjU1MzYgMTEgMTEuMDAzQzExIDEwLjUzNTcgMTAuNjc1NCAxMC4xMzExIDEwLjIxOTMgMTAuMDI5OEw4LjgxNTI4IDkuNzE3NzZMOC41NjE3IDEyWk03LjE4NDcgNi4yODIyM0w3LjQzODI4IDRINS45OTY5OUM1LjQ0NjM3IDQgNSA0LjQ0NjM3IDUgNC45OTY5OUM1IDUuNDY0MjcgNS4zMjQ1NSA1Ljg2ODg3IDUuNzgwNzEgNS45NzAyM0w3LjE4NDcgNi4yODIyM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjIxNjA2IDE1TDYuMTA0OTUgMTZIOC4xMTcyNkw4LjIyODM3IDE1SDEwLjAwM0MxMi4yMTA1IDE1IDE0IDEzLjIxMDUgMTQgMTEuMDAzQzE0IDkuMTI5NjMgMTIuNjk4OSA3LjUwNzYgMTAuODcwMSA3LjEwMTJMOS4xNDg1MiA2LjcxODY0TDkuNDUwNTkgNEgxM1YxSDkuNzgzOTNMOS44OTUwNCAwSDcuODgyNzNMNy43NzE2MiAxSDUuOTk2OTlDMy43ODk1MSAxIDIgMi43ODk1MSAyIDQuOTk2OTlDMiA2Ljg3MDM3IDMuMzAxMTUgOC40OTI0IDUuMTI5OTIgOC44OTg4TDYuODUxNDcgOS4yODEzNkw2LjU0OTM5IDEySDNWMTVINi4yMTYwNlpNOC41NjE3IDEySDEwLjAwM0MxMC41NTM2IDEyIDExIDExLjU1MzYgMTEgMTEuMDAzQzExIDEwLjUzNTcgMTAuNjc1NCAxMC4xMzExIDEwLjIxOTMgMTAuMDI5OEw4LjgxNTI4IDkuNzE3NzZMOC41NjE3IDEyWk03LjE4NDcgNi4yODIyM0w3LjQzODI4IDRINS45OTY5OUM1LjQ0NjM3IDQgNSA0LjQ0NjM3IDUgNC45OTY5OUM1IDUuNDY0MjcgNS4zMjQ1NSA1Ljg2ODg3IDUuNzgwNzEgNS45NzAyM0w3LjE4NDcgNi4yODIyM1oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 144.199);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDNMOS4wMDAwMSA0TDExLjI5MjkgNi4yOTI4OUw4LjUwMDAxIDkuMDg1NzlMNS41MDAwMSA2LjA4NTc5TDAuMjkyOTA4IDExLjI5MjlMMS43MDcxMiAxMi43MDcxTDUuNTAwMDEgOC45MTQyMUw4LjUwMDAxIDExLjkxNDJMMTIuNzA3MSA3LjcwNzExTDE1IDEwTDE2IDlMMTYgM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDNMOS4wMDAwMSA0TDExLjI5MjkgNi4yOTI4OUw4LjUwMDAxIDkuMDg1NzlMNS41MDAwMSA2LjA4NTc5TDAuMjkyOTA4IDExLjI5MjlMMS43MDcxMiAxMi43MDcxTDUuNTAwMDEgOC45MTQyMUw4LjUwMDAxIDExLjkxNDJMMTIuNzA3MSA3LjcwNzExTDE1IDEwTDE2IDlMMTYgM0gxMFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 144.199);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDBIMTJWMkgxNlY0QzE2IDYuNDU2NDEgMTQuMjI4NiA4LjQ5OTA5IDExLjg5MzYgOC45MjAzOEMxMS41NTM3IDEwLjM2MzcgMTAuNDMyIDExLjUwNTQgOSAxMS44NzRWMTRIMTJWMTZINFYxNEg3VjExLjg3NEM1LjU2Nzk2IDExLjUwNTQgNC40NDYyOCAxMC4zNjM3IDQuMTA2NCA4LjkyMDM4QzEuNzcxMzYgOC40OTkwOSAwIDYuNDU2NDEgMCA0VjJINFYwWk0xMiA2LjgyOTI5VjRIMTRDMTQgNS4zMDYyMiAxMy4xNjUyIDYuNDE3NDYgMTIgNi44MjkyOVpNNCA0SDJDMiA1LjMwNjIyIDIuODM0ODEgNi40MTc0NiA0IDYuODI5MjlWNFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDBIMTJWMkgxNlY0QzE2IDYuNDU2NDEgMTQuMjI4NiA4LjQ5OTA5IDExLjg5MzYgOC45MjAzOEMxMS41NTM3IDEwLjM2MzcgMTAuNDMyIDExLjUwNTQgOSAxMS44NzRWMTRIMTJWMTZINFYxNEg3VjExLjg3NEM1LjU2Nzk2IDExLjUwNTQgNC40NDYyOCAxMC4zNjM3IDQuMTA2NCA4LjkyMDM4QzEuNzcxMzYgOC40OTkwOSAwIDYuNDU2NDEgMCA0VjJINFYwWk0xMiA2LjgyOTI5VjRIMTRDMTQgNS4zMDYyMiAxMy4xNjUyIDYuNDE3NDYgMTIgNi44MjkyOVpNNCA0SDJDMiA1LjMwNjIyIDIuODM0ODEgNi40MTc0NiA0IDYuODI5MjlWNFoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5 0.12 102.483);
  color: rgb(34, 34, 34);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
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
  background-color: var(--background-paper, oklch(0.98 0.0756873 143.559));
  border-bottom-color: oklch(0.25 0.189218 293.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.25 0.189218 293.559);
  border-right-color: oklch(0.25 0.189218 293.559);
  border-top-color: oklch(0.25 0.189218 293.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, oklch(0.93 0.0756873 143.559));
  border-bottom-color: oklch(0.93 0.0756873 143.559);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756873 143.559);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756873 143.559);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756873 143.559);
  border-top-style: ridge;
  border-top-width: 4px;
  box-shadow: var(--shadow-l, oklch(0 0 0 / 0.4) 0px 0px 12px 2px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.93 0.0756873 143.559);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756873 143.559);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756873 143.559);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756873 143.559);
  border-top-style: ridge;
  border-top-width: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: var(--background-paper, oklch(0.98 0.0756873 143.559));
  border-bottom-color: oklch(0.25 0.189218 293.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.25 0.189218 293.559);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.189218 293.559);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.189218 293.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: var(--box-shadow-active, oklch(0.5 0.0756873 293.559) 2px 2px 0px 0px inset, oklch(1 0.0756873 293.559) -2px -2px 0px 0px inset);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) 40% c h / 75%));
  --pill-color-remove: var(--tag-color, oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) 40% c h / 75%));
  --pill-radius: var(--tag-radius, 8px);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.4 0.189218 293.559 / 0.75);
  border-left-width: 4px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: oklch(0.4 0.189218 293.559 / 0.75);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, oklch(0.5 0.12 26.4067));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, oklch(0.5 0.12 26.4067));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, oklch(0.5 0.12 64.0453));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, oklch(0.5 0.12 26.4067));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, oklch(0.5 0.12 102.483));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, oklch(0.5 0.12 144.199));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, oklch(0.5 0.12 248.82));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, oklch(0.5 0.12 271.409));
}

html[saved-theme="light"] body hr {
  border-bottom-color: oklch(0.65 0.0756873 83.5585);
  border-left-color: oklch(0.65 0.0756873 83.5585);
  border-right-color: oklch(0.65 0.0756873 83.5585);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container {
  background-color: var(--background-paper, oklch(0.98 0.0756873 143.559));
}

html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-width: 2px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--folder-color, oklch(0.5 0.12 26.4067));
  font-weight: var(--nav-item-weight, 700);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--folder-color, oklch(0.5 0.12 26.4067));
  font-weight: var(--nav-item-weight, 700);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 700);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  background-color: var(--button-normal, oklch(0.93 0.0756873 143.559));
  border-bottom-color: oklch(0.25 0.189218 293.559);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.189218 293.559);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.189218 293.559);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.189218 293.559);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--text-muted, rgb(92, 92, 92));
  cursor: var(--cursor, pointer);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, oklch(0.6 0.0756873 143.559));
  border-bottom-color: oklch(0.65 0.0756873 83.5585);
  border-left-color: oklch(0.65 0.0756873 83.5585);
  border-left-width: 0px;
  border-right-color: oklch(0.65 0.0756873 83.5585);
  border-top-color: oklch(0.65 0.0756873 83.5585);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: oklch(from var(--background-paper) 100% c h);
}

html[saved-theme="light"] body footer ul li a {
  color: oklch(1 0.0756873 143.559);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  --folder-color: var(--folder-color-1, oklch(
    from #d32f2f 50% 30% h
  ));
  background-color: oklch(
    from var(--folder-color) l var(--chroma-folder) h / 30%
  );
  border-bottom-color: oklch(0.55 0.12 143.559 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.55 0.12 143.559 / 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.55 0.12 143.559 / 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.55 0.12 143.559 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  --folder-color: var(--folder-color-1, oklch(
    from #d32f2f 50% 30% h
  ));
  background-color: oklch(
    from var(--folder-color) l var(--chroma-folder) h / 30%
  );
  border-bottom-color: oklch(0.55 0.12 143.559 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.55 0.12 143.559 / 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.55 0.12 143.559 / 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.55 0.12 143.559 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body ul.section-ul {
  background-color: var(--background-paper, oklch(0.98 0.0756873 143.559));
  border-bottom-color: oklch(0.93 0.0756873 143.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756873 143.559);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756873 143.559);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756873 143.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  background-color: var(--button-normal, oklch(0.93 0.0756873 143.559));
  border-bottom-color: oklch(0.25 0.189218 293.559);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.189218 293.559);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.189218 293.559);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.189218 293.559);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--text-muted, rgb(92, 92, 92));
  cursor: var(--cursor, pointer);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    canvas: `html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-secondary, oklch(0.8 0.0756873 293.559));
  border-color: oklch(0.75 0.0756873 293.559);
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: oklch(0.93 0.0756873 143.559);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: oklch(0.5 0.0000125793 23.5283 / 0.5);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: var(--metadata-background, oklch(0.8 0.0756873 293.559 / 0.75));
  border-bottom-color: oklch(0.93 0.0756873 143.559);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756873 143.559);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756873 143.559);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756873 143.559);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  margin-bottom: 0px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .note-properties {
  background-color: var(--metadata-background, oklch(0.8 0.0756873 293.559 / 0.75));
  border-color: oklch(0.93 0.0756873 143.559);
  border-radius: 12px;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) 40% c h / 75%));
  --pill-color-remove: var(--tag-color, oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) 40% c h / 75%));
  --pill-radius: var(--tag-radius, 8px);
  border-radius: 8px;
  color: var(--pill-color, oklch(0.4 0.189218 293.559 / 0.75));
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, oklch(0.93 0.0756873 143.559));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-style: ridge;
  border-left-style: ridge;
  border-right-style: ridge;
  border-top-style: ridge;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-primary, oklch(0.93 0.0756873 143.559));
  border-color: oklch(0.75 0.0756873 293.559);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, oklch(0.65 0.0756873 83.5585));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: oklch(0.75 0.0756873 293.559);
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, oklch(0.6 0.0756873 143.559));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, oklch(0.85 0.0756873 293.559 / 0.5));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0 0 0 1px oklch(from var(--text-normal) l c h / 25%);
}

html[saved-theme="light"] body ul.tags > li {
  --font-weight: var(--link-weight, 700);
  --tag-background: oklch(from var(--tag-color) l c h / 10%);
  --tag-background-hover: oklch(from var(--tag-color) l c h / 30%);
  --tag-border-color: var(--tag-color, oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) 40% c h / 75%));
  --tag-border-color-hover: var(--tag-border-color, oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) 40% c h / 75%));
  --tag-color-hover: var(--tag-color, oklch(from oklch(from hsl(257, 88.88%, 70.95%) l c h) 40% c h / 75%));
  --tag-padding-x: var(--size-4-1, 4px);
  background-color: var(--tag-background, oklch(0.4 0.189218 293.559 / 0.1));
  border-bottom-color: oklch(0.4 0.189218 293.559 / 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.4 0.189218 293.559 / 0.75);
  border-left-width: 4px;
  border-right-color: oklch(0.4 0.189218 293.559 / 0.75);
  border-right-width: 1px;
  border-top-color: oklch(0.4 0.189218 293.559 / 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--tag-color, oklch(0.4 0.189218 293.559 / 0.75));
}`,
  },
};
