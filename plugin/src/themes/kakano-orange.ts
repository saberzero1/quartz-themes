import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "kakano.orange",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto", "sf-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-input: light-dark(var(--theme-color-baseTransparent12), var(--theme-color-darkenTransparent06));
  --background-modifier-active-hover: var(--theme-color-baseDarkened70, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --background-modifier-active-hover-alt: var(--theme-color-baseDarkened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --background-modifier-border: var(--theme-color-baseDarkened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --background-modifier-border-focus: var(--theme-color-baseDarkened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --background-modifier-error: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --background-modifier-error-hover: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --background-modifier-hover: var(--theme-color-base, hsl(30, 80%, 50%));
  --background-modifier-message: var(--theme-color-noticeBg, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --background-modifier-success: var(--color-green, hsl(from hsl(30, 80%, 50%) 124 s l));
  --background-primary: color-mix(
    in srgb,
    var(--theme-color-base),
    black 95%
  );
  --background-prompt: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --background-secondary: var(--theme-color-baseDarkened70, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --base-h: var(--accent-h, 30);
  --base-l: var(--accent-l, 50%);
  --base-s: var(--accent-s, 80%);
  --bases-cards-background: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --bases-cards-cover-background: light-dark(var(--theme-color-darkenTransparent06), var(--theme-color-lightenTransparent06));
  --bases-cards-radius: var(--radius-m, 0.5rem);
  --bases-cards-shadow: var(--shadow-s, 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 10%, transparent));
  --bases-cards-shadow-hover: var(--shadow-s, 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 10%, transparent));
  --bases-embed-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --bases-embed-border-radius: var(--radius-s, 0.25rem);
  --bases-group-heading-property-color: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --bases-group-heading-property-size: var(--font-ui-smaller, 0.7rem);
  --bases-header-padding-end: 0.5em;
  --bases-header-padding-start: 0.5em;
  --bases-table-border-color: var(--table-border-color, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --bases-table-cell-background-active: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --bases-table-container-border-radius: var(--radius-s, 0.25rem);
  --bases-table-header-background: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsl(30, 80%, 50%));
  --bases-table-header-color: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --bases-table-summary-background: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsl(30, 80%, 50%));
  --blockquote-border-color: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --bodyFont: var(--font-text-theme, var(--font-default, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"));
  --callout-padding: var(--theme-padding-block, 0.75em
    1.5em);
  --callout-radius: var(--radius-s, 0.25rem);
  --canvas-background: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --canvas-card-label-color: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --canvas-controls-radius: var(--radius-s, 0.25rem);
  --caret-color: hsl(var(--accent-h), 150%, 80%);
  --checkbox-border-color: var(--interactive-accent, hsl(30, 80%, 50%));
  --checkbox-border-color-hover: var(--interactive-accent-hover, hsl(255, 89.76%, 75.9%));
  --checkbox-color: var(--interactive-accent, hsl(30, 80%, 50%));
  --checkbox-marker-color: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --checkbox-radius: var(--radius-s, 0.25rem);
  --checklist-done-color: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --clickable-icon-radius: var(--radius-s, 0.25rem);
  --code-background: light-dark(
    var(--theme-color-darkenTransparent06),
    var(--theme-color-lightenTransparent06)
  );
  --code-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --code-bracket-background: var(--background-modifier-hover, hsl(30, 80%, 50%));
  --code-comment: light-dark(
    var(--theme-color-darkenTransparent50),
    var(--theme-color-lightenTransparent50)
  );
  --code-function: var(--color-yellow, hsl(from hsl(30, 80%, 50%) 57 s l));
  --code-important: var(--color-orange, hsl(from hsl(30, 80%, 50%) 27 s l));
  --code-keyword: var(--color-pink, hsl(from hsl(30, 80%, 50%) 331 s l));
  --code-normal: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --code-operator: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --code-property: var(--color-cyan, hsl(from hsl(30, 80%, 50%) 179 s l));
  --code-punctuation: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --code-radius: var(--radius-s, 0.25rem);
  --code-string: var(--color-green, hsl(from hsl(30, 80%, 50%) 124 s l));
  --code-tag: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --code-value: var(--color-purple, hsl(from hsl(30, 80%, 50%) 253 s l));
  --collapse-icon-color: var(--theme-color-base, hsl(30, 80%, 50%));
  --collapse-icon-color-collapsed: var(--theme-color-base, hsl(30, 80%, 50%));
  --color-blue: hsl(from var(--theme-color-base) 219 s l);
  --color-cyan: hsl(from var(--theme-color-base) 179 s l);
  --color-green: hsl(from var(--theme-color-base) 124 s l);
  --color-orange: hsl(from var(--theme-color-base) 27 s l);
  --color-pink: hsl(from var(--theme-color-base) 331 s l);
  --color-purple: hsl(from var(--theme-color-base) 253 s l);
  --color-red: hsl(from var(--theme-color-base) 356 s l);
  --color-yellow: hsl(from var(--theme-color-base) 57 s l);
  --dark: var(--text-normal, var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  )));
  --darkgray: var(--text-normal, var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  )));
  --divider-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --divider-color-hover: var(--interactive-accent, hsl(30, 80%, 50%));
  --divider-width: 0;
  --embed-background: var(--theme-color-baseTransparent12, hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --embed-border-left: none;
  --embed-border-right: none;
  --empty-pane-color: var(--theme-color-baseDarkened70, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --file-header-background: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --file-header-background-focused: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --file-header-font: var(--font-interface, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --file-header-font-size: var(--font-ui-small, 0.8rem);
  --file-line-width: calc(0.625rem*var(--theme-setting-lineWidth));
  --file-margins: var(--file-margins-y) var(--file-margins-x, 0 2em);
  --flair-background: var(--theme-color-base, hsl(30, 80%, 50%));
  --flair-color: var(--text-on-accent, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --font-default: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-interface-theme: var(--font-default, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --font-mermaid: var(--font-text, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --font-monospace-default: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace;
  --font-monospace-theme: var(--font-monospace-default, ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace);
  --font-text-theme: var(--font-default, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --font-ui-large: 1.125rem;
  --font-ui-medium: 1rem;
  --font-ui-small: 0.8rem;
  --font-ui-smaller: 0.7rem;
  --footnote-divider-color: var(--metadata-divider-color, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --footnote-id-color: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --footnote-id-color-no-occurrences: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --footnote-input-background-active: var(--metadata-input-background-active, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --footnote-radius: var(--radius-s, 0.25rem);
  --graph-node: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --graph-node-attachment: var(--color-yellow, hsl(from hsl(30, 80%, 50%) 57 s l));
  --graph-node-tag: var(--color-green, hsl(from hsl(30, 80%, 50%) 124 s l));
  --graph-node-unresolved: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --graph-text: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --gray: var(--text-muted, color-mix(in srgb, var(--text-normal), transparent 30%));
  --h1-line-height: var(--line-height-normal, 1.5);
  --h1-size: calc(var(--theme-value-headingScaleFactor)*var(--h2-size));
  --h1-weight: 100;
  --h2-line-height: var(--line-height-normal, 1.5);
  --h2-size: calc(var(--theme-value-headingScaleFactor)*var(--h3-size));
  --h2-weight: 200;
  --h3-line-height: var(--line-height-normal, 1.5);
  --h3-size: calc(var(--theme-value-headingScaleFactor)*var(--h4-size));
  --h3-weight: 300;
  --h4-line-height: var(--line-height-normal, 1.5);
  --h4-size: calc(var(--theme-value-headingScaleFactor)*var(--h5-size));
  --h4-weight: 400;
  --h5-size: calc(var(--theme-value-headingScaleFactor)*var(--h6-size));
  --h5-weight: 500;
  --h6-size: var(--font-text-size, 16px);
  --h6-weight: 500;
  --header-height: calc(var(--icon-size) + 1rem);
  --headerFont: var(--font-text-theme, var(--font-default, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"));
  --heading-formatting: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --highlight: var(--background-modifier-hover, var(--theme-color-base, hsl(30, 80%, 50%)));
  --hr-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --icon-color: var(--theme-color-base, hsl(30, 80%, 50%));
  --icon-color-active: var(--text-accent, light-dark(white, black));
  --icon-color-focused: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --icon-color-hover: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --inline-title-line-height: var(--line-height-normal, 1.5);
  --inline-title-size: var(--h3-size, 27.648px);
  --inline-title-weight: var(--h4-weight, 400);
  --input-border-width: var(--border-width, 2px);
  --input-date-separator: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --input-placeholder-color: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --input-shadow: var(--theme-shadow-control, 0px 1px 2px
    hsl(
      30,
      8%,
      5%,
      0.1
    ));
  --interactive-accent: var(--theme-color-base, hsl(30, 80%, 50%));
  --light: var(--background-primary, color-mix(
    in srgb,
    var(--theme-color-base),
    black 95%
  ));
  --lightgray: var(--background-secondary, var(--theme-color-baseDarkened70, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  )));
  --link-decoration-thickness: 1px;
  --link-unresolved-decoration-style: dashed;
  --list-bullet-size: 0.25em;
  --list-marker-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --list-marker-color-collapsed: var(--list-marker-color, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --list-marker-color-hover: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --menu-background: var(--background-secondary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --menu-radius: var(--radius-m, 0.5rem);
  --menu-shadow: var(--shadow-s, 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 10%, transparent));
  --metadata-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --metadata-divider-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --metadata-gap: 0.5em;
  --metadata-input-background-active: var(--theme-color-baseDarkened90, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --metadata-input-font: var(--font-interface, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --metadata-input-text-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --metadata-label-background-active: var(--theme-color-baseDarkened90, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --metadata-label-font: var(--font-interface, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --metadata-label-text-color: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --metadata-label-text-color-hover: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --metadata-property-background: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --metadata-property-background-active: var(--background-modifier-hover, hsl(30, 80%, 50%));
  --metadata-property-background-hover: var(--theme-color-baseTransparent12, hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 0.8rem);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 0.8rem);
  --modal-background: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --modal-border-width: var(--border-width, 0);
  --modal-max-height: calc(100vh - var(--safe-area-inset-top) - var(--safe-area-inset-bottom) - 2em);
  --modal-max-width: calc(100vw - var(--safe-area-inset-left) - var(--safe-area-inset-right) - 2em);
  --modal-radius: var(--radius-l, 0.75rem);
  --modal-width: 65rem;
  --nav-collapse-icon-color: var(--theme-color-baseTransparent75, hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  ));
  --nav-collapse-icon-color-collapsed: var(--theme-color-baseTransparent75, hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  ));
  --nav-heading-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --nav-heading-color-collapsed: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --nav-heading-color-hover: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --nav-indentation-guide-color: var(--theme-color-baseTransparent25, hsl(
    from hsl(30, 80%, 50%) h s l / 0.25
  ));
  --nav-item-background-active: var(--theme-color-base, hsl(30, 80%, 50%));
  --nav-item-background-hover: var(--theme-color-baseTransparent75, hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  ));
  --nav-item-background-selected: var(--theme-color-baseTransparent25, hsl(
    from hsl(30, 80%, 50%) h s l / 0.25
  ));
  --nav-item-children-margin-start: calc(var(--size-4-4)/2 - var(--nav-indentation-guide-width)/2);
  --nav-item-children-padding-start: calc(1em - var(--nav-indentation-guide-width)/2);
  --nav-item-color: var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --nav-item-color-active: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --nav-item-color-hover: var(--text-normal, black);
  --nav-item-color-selected: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --nav-item-padding: var(--size-4-1) var(--size-4-2) var(--size-4-1) var(--size-4-6, 0.375em 0.75em 0.375em 0.75em);
  --nav-item-parent-padding: var(--nav-item-padding, 0.25em 0 0.25em 0);
  --nav-item-radius: var(--radius-s, 0.25rem);
  --nav-item-size: var(--font-ui-small, 0.8rem);
  --nav-tag-color: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --nav-tag-color-active: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --nav-tag-color-hover: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --nav-tag-radius: var(--radius-s, 0.25rem);
  --obsidian-columns-def-span: 1;
  --obsidian-columns-gap: 1em;
  --obsidian-columns-min-width: 10em;
  --obsidian-columns-padding: 0 0;
  --p-spacing: 1em;
  --pdf-background: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --pdf-page-background: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --pdf-sidebar-background: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --pill-background: var(--theme-color-baseTransparent75, hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  ));
  --pill-background-hover: var(--theme-color-base, hsl(30, 80%, 50%));
  --pill-background-remove-hover: var(--theme-color-baseDarkened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --pill-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --pill-color: var(--text-muted, black);
  --pill-color-hover: var(--text-normal, black);
  --pill-color-remove: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --pill-color-remove-hover: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --pill-focus-left-adjust: 0;
  --pill-focus-width: 100%;
  --prompt-background: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --prompt-border-width: var(--border-width, 0);
  --r-background-color: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --r-block-margin: 20px;
  --r-code-font: var(--font-monospace-theme, ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace);
  --r-heading-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --r-heading-font-weight: var(--h1-weight, 100);
  --r-heading-letter-spacing: normal;
  --r-heading-line-height: 1.2;
  --r-heading-margin: 0.67em 0 0 0;
  --r-heading-text-shadow: none;
  --r-heading-text-transform: none;
  --r-heading1-size: 2.5em;
  --r-heading1-text-shadow: none;
  --r-heading2-size: 1.6em;
  --r-heading3-size: 1.3em;
  --r-heading4-size: 1em;
  --r-link-color: var(--link-color, hsl(255, 89.76%, 75.9%));
  --r-link-color-hover: var(--link-color-hover, hsl(253, 92.4%, 85.14%));
  --r-main-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --r-main-font: var(--font-text-theme, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --r-main-font-size: 42px;
  --radius-l: 0.75rem;
  --radius-m: 0.5rem;
  --radius-s: 0.25rem;
  --radius-xl: 1rem;
  --raised-background: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--background-primary, transparent);
  --ribbon-width: 3em;
  --scrollbar-radius: var(--radius-l, 0.75rem);
  --search-clear-button-color: var(--theme-color-base, hsl(30, 80%, 50%));
  --search-icon-color: var(--theme-color-base, hsl(30, 80%, 50%));
  --search-result-background: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --secondary: var(--interactive-accent, var(--theme-color-base, hsl(30, 80%, 50%)));
  --setting-group-heading-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --setting-group-heading-size: var(--font-ui-medium, 1rem);
  --setting-items-background: var(--background-primary-alt, none);
  --setting-items-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --setting-items-padding: var(--size-4-5, 0);
  --setting-items-radius: var(--radius-l, 0);
  --shadow-l: 0 0 0.2rem
      color-mix(in srgb, var(--theme-color-shadow) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, var(--theme-color-shadow) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, var(--theme-color-shadow) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, var(--theme-color-shadow) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, var(--theme-color-shadow) 10%, transparent);
  --shadow-s: 0 0 0.05rem
      color-mix(in srgb, var(--theme-color-shadow) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, var(--theme-color-shadow) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, var(--theme-color-shadow) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, var(--theme-color-shadow) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, var(--theme-color-shadow) 10%, transparent);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --shiki-code-background: var(--code-background, light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  ));
  --shiki-code-block-border-radius: var(--code-radius, 0.25rem);
  --shiki-code-block-spacing: var(--p-spacing, 1em);
  --shiki-code-comment: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --shiki-code-function: var(--color-green, hsl(from hsl(30, 80%, 50%) 124 s l));
  --shiki-code-important: var(--color-orange, hsl(from hsl(30, 80%, 50%) 27 s l));
  --shiki-code-keyword: var(--color-pink, hsl(from hsl(30, 80%, 50%) 331 s l));
  --shiki-code-normal: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --shiki-code-property: var(--color-cyan, hsl(from hsl(30, 80%, 50%) 179 s l));
  --shiki-code-punctuation: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --shiki-code-string: var(--color-yellow, hsl(from hsl(30, 80%, 50%) 57 s l));
  --shiki-code-value: var(--color-purple, hsl(from hsl(30, 80%, 50%) 253 s l));
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --shiki-gutter-text-color: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --shiki-terminal-dots-color: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --shiki-tooltip-background: var(--background-modifier-message, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --sidebar-markdown-font-size: calc(var(--font-text-size)*var(--theme-value-sidebarFontScalingFactor));
  --slider-track-background: var(--theme-color-baseTransparent50, hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  ));
  --status-bar-background: var(--theme-color-gradientTop, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 60%
  ));
  --status-bar-border-color: var(--divider-color, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --status-bar-font-size: var(--font-ui-smaller, 0.7rem);
  --status-bar-radius: var(--radius-m, 0.5rem 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --suggestion-background: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --sync-avatar-color-1: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --sync-avatar-color-2: var(--color-orange, hsl(from hsl(30, 80%, 50%) 27 s l));
  --sync-avatar-color-3: var(--color-yellow, hsl(from hsl(30, 80%, 50%) 57 s l));
  --sync-avatar-color-4: var(--color-green, hsl(from hsl(30, 80%, 50%) 124 s l));
  --sync-avatar-color-5: var(--color-cyan, hsl(from hsl(30, 80%, 50%) 179 s l));
  --sync-avatar-color-6: var(--color-blue, hsl(from hsl(30, 80%, 50%) 219 s l));
  --sync-avatar-color-7: var(--color-purple, hsl(from hsl(30, 80%, 50%) 253 s l));
  --sync-avatar-color-8: var(--color-pink, hsl(from hsl(30, 80%, 50%) 331 s l));
  --tab-background-active: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --tab-background-inactive: var(--theme-color-baseDarkened85, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 85%
  ));
  --tab-container-background: var(--background-secondary, transparent);
  --tab-curve: calc(var(--tab-radius)*0.5);
  --tab-font-size: var(--font-ui-small, 0.8rem);
  --tab-outline-color: var(--divider-color, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --tab-outline-width: 0;
  --tab-radius: var(--radius-s, 0.25em);
  --tab-radius-active: 0.25em;
  --tab-stacked-font-size: var(--font-ui-small, 0.8rem);
  --tab-stacked-header-width: var(--header-height, calc(18px + 1rem));
  --tab-switcher-background: var(--background-secondary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --tab-switcher-preview-background-shadow: var(--shadow-l, 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 10%, transparent));
  --tab-switcher-preview-radius: var(--radius-xl, 1rem);
  --tab-text-color: var(--theme-color-baseTransparent50, hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  ));
  --tab-text-color-active: var(--theme-color-baseTransparent50, hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  ));
  --tab-text-color-focused: var(--theme-color-baseLightened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --tab-text-color-focused-active: var(--theme-color-baseLightened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --tab-text-color-focused-active-current: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --tab-text-color-focused-highlighted: var(--theme-color-base, hsl(30, 80%, 50%));
  --table-add-button-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --table-border-color: var(--theme-color-baseDarkened70, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(30, 80%, 50%));
  --table-drag-handle-color: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --table-drag-handle-color-active: var(--text-on-accent, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --table-header-border-color: var(--theme-color-baseDarkened70, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --table-header-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --table-selection-border-color: var(--interactive-accent, hsl(30, 80%, 50%));
  --tag-background: hsl(var(--accent-h), var(--accent-s), var(--accent-l), 0.3);
  --tag-color: hsl(
    var(--accent-h),
    calc(var(--accent-s)*1.1),
    calc(var(--accent-l)*1.2)
  );
  --tag-weight: 400;
  --text-error: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --text-faint: var(--theme-color-baseLightened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --text-muted: color-mix(in srgb, var(--text-normal), transparent 30%);
  --text-normal: var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --text-on-accent: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --text-success: var(--color-green, hsl(from hsl(30, 80%, 50%) 124 s l));
  --text-warning: var(--color-orange, hsl(from hsl(30, 80%, 50%) 27 s l));
  --textHighlight: var(--background-modifier-hover, var(--theme-color-base, hsl(30, 80%, 50%)));
  --theme-cardAspectRatio: auto;
  --theme-cardImageFit: contain;
  --theme-color-activeLineHighlight: var(--theme-color-baseTransparent12, hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --theme-color-audioRecordingActive: var(--theme-color-redLightened, hsl(
    from hsl(from hsl(30, 80%, 50%) 356 s l) h calc(s * 1.5) calc(l * 1.5)
  ));
  --theme-color-base: hsl(var(--base-h), var(--base-s), var(--base-l));
  --theme-color-baseDarkened12: color-mix(
    in srgb,
    var(--theme-color-base),
    black 12.5%
  );
  --theme-color-baseDarkened25: color-mix(
    in srgb,
    var(--theme-color-base),
    black 25%
  );
  --theme-color-baseDarkened40: color-mix(
    in srgb,
    var(--theme-color-base),
    black 40%
  );
  --theme-color-baseDarkened60: color-mix(
    in srgb,
    var(--theme-color-base),
    black 60%
  );
  --theme-color-baseDarkened70: color-mix(
    in srgb,
    var(--theme-color-base),
    black 70%
  );
  --theme-color-baseDarkened80: color-mix(
    in srgb,
    var(--theme-color-base),
    black 80%
  );
  --theme-color-baseDarkened85: color-mix(
    in srgb,
    var(--theme-color-base),
    black 85%
  );
  --theme-color-baseDarkened90: color-mix(
    in srgb,
    var(--theme-color-base),
    black 90%
  );
  --theme-color-baseLightened12: color-mix(
    in srgb,
    var(--theme-color-base),
    white 12.5%
  );
  --theme-color-baseLightened25: color-mix(
    in srgb,
    var(--theme-color-base),
    white 25%
  );
  --theme-color-baseLightened40: color-mix(
    in srgb,
    var(--theme-color-base),
    white 40%
  );
  --theme-color-baseLightened60: color-mix(
    in srgb,
    var(--theme-color-base),
    white 60%
  );
  --theme-color-baseLightened70: color-mix(
    in srgb,
    var(--theme-color-base),
    white 70%
  );
  --theme-color-baseLightened80: color-mix(
    in srgb,
    var(--theme-color-base),
    white 80%
  );
  --theme-color-baseLightened85: color-mix(
    in srgb,
    var(--theme-color-base),
    white 85%
  );
  --theme-color-baseLightened95: color-mix(
    in srgb,
    var(--theme-color-base),
    white 95%
  );
  --theme-color-baseTransparent06: hsl(
    from var(--theme-color-base) h s l / 0.06
  );
  --theme-color-baseTransparent12: hsl(
    from var(--theme-color-base) h s l / 0.12
  );
  --theme-color-baseTransparent25: hsl(
    from var(--theme-color-base) h s l / 0.25
  );
  --theme-color-baseTransparent35: hsl(
    from var(--theme-color-base) h s l / 0.35
  );
  --theme-color-baseTransparent50: hsl(
    from var(--theme-color-base) h s l / 0.5
  );
  --theme-color-baseTransparent75: hsl(
    from var(--theme-color-base) h s l / 0.75
  );
  --theme-color-blockId: var(--theme-color-baseDarkened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --theme-color-blueDarkened: hsl(
    from var(--color-blue) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-blueLightened: hsl(
    from var(--color-blue) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-calendarBg: light-dark(var(--theme-color-baseLightened85), var(--theme-color-baseDarkened80));
  --theme-color-calendarDayBg: var(--theme-color-darkenTransparent50, hsl(from black h s l / 0.5));
  --theme-color-card: var(--nav-item-color, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --theme-color-cardBg: var(--background-primary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  ));
  --theme-color-cardBgHover: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-cardHover: var(--nav-item-color-hover, black);
  --theme-color-communityItemBg: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-communityItemBgActive: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-communityItemBgHover: var(--theme-color-baseDarkened70, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --theme-color-communityItemBgSelected: var(--theme-color-baseDarkened12, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 12.5%
  ));
  --theme-color-contentItemBg: rgb(0, 0, 0, 0.2);
  --theme-color-contentItemBgActive: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-contentItemBgHover: rgb(0, 0, 0, 0.1);
  --theme-color-control: light-dark(
    var(--theme-color-baseDarkened70),
    var(--theme-color-baseLightened60)
  );
  --theme-color-controlActive: light-dark(var(--theme-color-baseLightened95),var(--theme-color-baseDarkened90));
  --theme-color-controlBg: var(--theme-color-baseDarkened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --theme-color-controlBgActive: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-controlBgHover: light-dark(var(--theme-color-baseLightened40), var(--theme-color-baseDarkened40));
  --theme-color-controlContentArea: var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --theme-color-controlContentAreaHover: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-controlHasActiveMenu: light-dark(var(--theme-color-baseLightened80), var(--theme-color-baseDarkened80));
  --theme-color-controlHover: light-dark(var(--theme-color-baseLightened95), var(--theme-color-baseDarkened90));
  --theme-color-controlLightweightActive: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --theme-color-controlLowWeightBg: var(--theme-color-darkenTransparent25, hsl(from black h s l / 0.25));
  --theme-color-controlSetBg: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-controlText: var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --theme-color-controlTextHover: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-controlUIHover: var(--theme-color-baseDarkened70, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --theme-color-controlUISelected: var(--theme-color-baseDarkened70, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --theme-color-cyanDarkened: hsl(
    from var(--color-cyan) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-cyanLightened: hsl(
    from var(--color-cyan) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-darkenTransparent06: hsl(from black h s l / 0.06);
  --theme-color-darkenTransparent12: hsl(from black h s l / 0.12);
  --theme-color-darkenTransparent25: hsl(from black h s l / 0.25);
  --theme-color-darkenTransparent50: hsl(from black h s l / 0.5);
  --theme-color-darkenTransparent75: hsl(from black h s l / 0.75);
  --theme-color-dataviewEmpty: light-dark(
    var(--theme-color-baseLightened40),
    var(--theme-color-baseDarkened40)
  );
  --theme-color-dragTarget: var(--theme-color-baseTransparent50, hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  ));
  --theme-color-dragTargetBg: var(--theme-color-baseTransparent25, hsl(
    from hsl(30, 80%, 50%) h s l / 0.25
  ));
  --theme-color-emptyStateBg: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-gradientBottom: color-mix(
    in srgb,
    var(--theme-color-base),
    black calc(100%*(0.7 + var(--theme-value-gradientContrast)*0.5))
  );
  --theme-color-gradientCardsetBottom: var(--theme-color-baseTransparent12, hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --theme-color-gradientCardsetGeneratedBottom: var(
    --theme-color-baseTransparent25
  , hsl(
    from hsl(30, 80%, 50%) h s l / 0.25
  ));
  --theme-color-gradientCardsetGeneratedTop: var(
    --theme-color-baseTransparent12
  , hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --theme-color-gradientCardsetTop: var(--theme-color-baseTransparent06, hsl(
    from hsl(30, 80%, 50%) h s l / 0.06
  ));
  --theme-color-gradientTop: color-mix(
    in srgb,
    var(--theme-color-base),
    black calc(100%*(0.7 - var(--theme-value-gradientContrast)*0.5))
  );
  --theme-color-graphLine: white;
  --theme-color-graphViewBg: transparent;
  --theme-color-greenDarkened: hsl(
    from var(--color-green) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-greenLightened: hsl(
    from var(--color-green) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-greenTransparent25: hsl(from var(--color-green) h s l / 0.25);
  --theme-color-greenTransparent75: hsl(from var(--color-green) h s l / 0.75);
  --theme-color-hotkey: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-inputBorder: var(--theme-color-baseLightened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --theme-color-inputPlaceholder: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-interactiveActive: var(--theme-color-baseDarkened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --theme-color-jiraIssueDanger: white;
  --theme-color-jiraIssueDangerBg: var(--theme-color-redTransparent25, hsl(from hsl(from hsl(30, 80%, 50%) 356 s l) h s l / 0.25));
  --theme-color-jiraIssueDeleteBg: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --theme-color-jiraIssueInfoBg: light-dark(
    var(--theme-color-blueLightened),
    var(--theme-color-blueDarkened)
  );
  --theme-color-jiraIssueStatus: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --theme-color-jiraIssueStatusBg: light-dark(
    var(--theme-color-baseDarkened90),
    var(--theme-color-baseDarkened90)
  );
  --theme-color-jiraIssueSuccessBg: light-dark(
    var(--theme-color-greenLightened),
    var(--theme-color-greenDarkened)
  );
  --theme-color-jiraIssueTableStripe: light-dark(
    var(--theme-color-lightenTransparent50),
    var(--theme-color-darkenTransparent50)
  );
  --theme-color-jiraIssueWarningBg: light-dark(control
    var(--theme-color-yellowLightened),
    var(--theme-color-yellowDarkened)
  );
  --theme-color-kanbanLaneBg: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-lightenTransparent06: hsl(from white h s l / 0.06);
  --theme-color-lightenTransparent12: hsl(from white h s l / 0.12);
  --theme-color-lightenTransparent25: hsl(from white h s l / 0.25);
  --theme-color-lightenTransparent50: hsl(from white h s l / 0.5);
  --theme-color-lightenTransparent75: hsl(from white h s l / 0.75);
  --theme-color-lineNumbers: light-dark(var(--theme-color-baseLightened60), var(--theme-color-baseDarkened60));
  --theme-color-log: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-logBg: var(--theme-color-baseDarkened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --theme-color-menuBg: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-mobileToolbarBg: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-modalContentBg: var(--theme-color-baseDarkened70, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --theme-color-navFileTag: var(--theme-color-baseDarkened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --theme-color-navFileTagActive: var(--nav-item-color-active, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-navFileTagActiveBorder: var(--nav-item-color-active, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-navFileTagBorder: var(--theme-color-baseDarkened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --theme-color-navigationButtonBgHover: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-notice: var(--theme-color-baseDarkened90, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --theme-color-noticeBg: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --theme-color-orangeDarkened: hsl(
    from var(--color-orange) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-orangeLightened: hsl(
    from var(--color-orange) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-orangeTransparent25: hsl(from var(--color-orange) h s l / 0.25);
  --theme-color-orangeTransparent75: hsl(from var(--color-orange) h s l / 0.75);
  --theme-color-pinkDarkened: hsl(
    from var(--color-pink) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-pinkLightened: hsl(
    from var(--color-pink) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-promptInstructions: var(--theme-color-baseLightened40, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 40%
  ));
  --theme-color-purpleDarkened: hsl(
    from var(--color-purple) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-purpleLightened: hsl(
    from var(--color-purple) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-queryComponentBg: var(--theme-color-baseTransparent12, hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --theme-color-redDarkened: hsl(
    from var(--color-red) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-redLightened: hsl(
    from var(--color-red) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-redTransparent25: hsl(from var(--color-red) h s l / 0.25);
  --theme-color-redTransparent75: hsl(from var(--color-red) h s l / 0.75);
  --theme-color-settingsBg: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-settingsBgStripe: var(--theme-color-baseDarkened90, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --theme-color-settingsGroupBg: var(--theme-color-darkenTransparent50, hsl(from black h s l / 0.5));
  --theme-color-shadow: var(--theme-color-baseDarkened90, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --theme-color-suggestionBg: var(--theme-color-baseDarkened85, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 85%
  ));
  --theme-color-switcherBgActive: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-tabBgInactiveHover: var(--theme-color-baseTransparent75, hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  ));
  --theme-color-tabNavActiveBg: light-dark(var(--theme-color-baseLightened70), var(--theme-color-baseDarkened70));
  --theme-color-tabNavBg: light-dark(var(--theme-color-baseLightened60), var(--theme-color-baseDarkened60));
  --theme-color-tableHeaderBg: var(--theme-color-baseTransparent12, hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --theme-color-tagBgHover: hsl(
    var(--accent-h),
    calc(var(--accent-s)*1.2),
    calc(var(--accent-l)*0.8),
    0.75
  );
  --theme-color-tagBgSidebar: hsl(
    var(--accent-h),
    calc(var(--accent-s)*1.2),
    calc(var(--accent-l)*0.25),
    0.5
  );
  --theme-color-tagBgSidebarHover: hsl(
    var(--accent-h),
    calc(var(--accent-s)*1.1),
    calc(var(--accent-l)*0.8),
    0.5
  );
  --theme-color-tagHover: hsl(
    var(--accent-h),
    calc(var(--accent-s)*1.05),
    calc(var(--accent-l)*1.29)
  );
  --theme-color-tagSidebar: hsl(
    var(--accent-h),
    calc(var(--accent-s)*1.1),
    calc(var(--accent-l)*1.2)
  );
  --theme-color-tagSidebarHover: hsl(
    var(--accent-h),
    calc(var(--accent-s)*1.4),
    calc(var(--accent-l)*1.3)
  );
  --theme-color-textMeta: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-textSelected: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-warningBg: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --theme-color-yellowDarkened: hsl(
    from var(--color-yellow) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-yellowLightened: hsl(
    from var(--color-yellow) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-yellowTransparent25: hsl(from var(--color-yellow) h s l / 0.25);
  --theme-color-yellowTransparent75: hsl(from var(--color-yellow) h s l / 0.75);
  --theme-gradient-bottomToTop: linear-gradient(
    0deg,
    var(--theme-color-gradientBottom) 0%,
    var(--theme-color-gradientTop) 100%
  );
  --theme-gradient-topToBottom: linear-gradient(
    0deg,
    var(--theme-color-gradientTop) 0%,
    var(--theme-color-gradientBottom) 100%
  );
  --theme-grid-cardSet: repeat(
    auto-fit,
    minmax(var(--theme-length-cardMinWidth), var(--theme-length-cardMaxWidth))
  );
  --theme-length-cardImageHeight: 25em;
  --theme-length-cardMaxWidth: 1fr;
  --theme-length-cardMinWidth: 8em;
  --theme-length-checkboxBorderWidth: 1px;
  --theme-length-closeButtonWidth: 1.5rem;
  --theme-length-collapseIndicatorSize: 1.5rem;
  --theme-length-controlSetSpacing: 0.5rem;
  --theme-length-fullBorderRadius: 9999px;
  --theme-length-radiusXS: 0.125rem;
  --theme-length-statusBarHeight: 2rem;
  --theme-padding-block: var(--theme-padding-blockVertical)
    var(--theme-padding-blockHorizontal, 0.75em
    1.5em);
  --theme-padding-blockHorizontal: 1.5em;
  --theme-padding-blockVertical: 0.75em;
  --theme-setting-lineWidth: 60;
  --theme-shadow-control: 0px 1px 2px
    hsl(
      var(--base-h),
      calc(var(--base-s)*0.1),
      calc(var(--base-l)*0.1),
      0.1
    );
  --theme-shadow-indent: 0 0 0.2rem
      color-mix(in srgb, var(--theme-color-shadow) 3%, transparent),
    0 0 0.2rem color-mix(in srgb, var(--theme-color-shadow) 6%, transparent),
    0 0 0.4rem color-mix(in srgb, var(--theme-color-shadow) 9%, transparent),
    0 0 1.2rem color-mix(in srgb, var(--theme-color-shadow) 12%, transparent),
    0 0 2rem color-mix(in srgb, var(--theme-color-shadow) 15%, transparent);
  --theme-shadow-indent-small: 0 0 0.05rem
      color-mix(in srgb, var(--theme-color-shadow) 4%, transparent),
    0 0 0.2rem color-mix(in srgb, var(--theme-color-shadow) 8%, transparent),
    0 0 0.6rem color-mix(in srgb, var(--theme-color-shadow) 12%, transparent),
    0 0 1rem color-mix(in srgb, var(--theme-color-shadow) 16%, transparent),
    0 0 2rem color-mix(in srgb, var(--theme-color-shadow) 20%, transparent);
  --theme-shadow-input: 0px 1px 2px
      hsl(
        var(--base-h),
        calc(var(--base-s)*0.5),
        calc(var(--base-l)*0.1),
        0.5
      ),
    0px 3.4px 6.7px
      hsl(
        var(--base-h),
        calc(var(--base-s)*1),
        calc(var(--base-l)*0.1),
        0.25
      ),
    0px 15px 30px
      hsl(
        var(--base-h),
        calc(var(--base-s)*0.75),
        calc(var(--base-l)*0.1),
        0.15
      );
  --theme-value-gradientContrast: 0.2;
  --theme-value-headingScaleFactor: 1.2;
  --theme-value-sidebarFontScalingFactor: 0.8;
  --titleFont: var(--font-text-theme, var(--font-default, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --titlebar-text-color: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%));
  --titlebar-text-color-focused: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --traffic-lights-offset-x: var(--header-height, calc(18px + 1rem));
  --traffic-lights-offset-y: var(--header-height, calc(18px + 1rem));
  --vault-profile-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --vault-profile-color-hover: var(--theme-color-controlHover, light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  )));
  --vault-profile-font-size: var(--font-ui-small, 0.8rem);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --h6-size: calc(var(--theme-value-sidebarFontScalingFactor)*var(--font-text-size));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, color(srgb 0.045 0.025 0.005));
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.675 0.375 0.075);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --h6-size: calc(var(--theme-value-sidebarFontScalingFactor)*var(--font-text-size));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: color(srgb 0.675 0.375 0.075);
  color: color(srgb 0.96 0.8 0.64);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, color(srgb 0.96 0.8 0.64));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.96 0.8 0.64) none 0px;
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, color(srgb 0.96 0.8 0.64));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.96 0.8 0.64) none 0px;
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, color(srgb 0.96 0.8 0.64));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.96 0.8 0.64) none 0px;
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, color(srgb 0.96 0.8 0.64));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.96 0.8 0.64) none 0px;
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--text-normal, color(srgb 0.96 0.8 0.64));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.96 0.8 0.64) none 0px;
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body del {
  color: color(srgb 0.96 0.8 0.64);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.96 0.8 0.64) none 0px;
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--tab-text-color-focused-active-current, color(srgb 0.96 0.8 0.64));
  font-size: 12.8px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(230, 128, 26);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, color(srgb 0.96 0.8 0.64));
  border-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, color(srgb 0.96 0.8 0.64 / 0.7));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.96 0.8 0.64 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.96 0.8 0.64 / 0.7);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  --background-input: light-dark(hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ), hsl(from black h s l / 0.06));
  --background-modifier-active-hover: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --background-modifier-active-hover-alt: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --background-modifier-border: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --background-modifier-border-focus: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: hsl(from hsl(30, 80%, 50%) 356 s l);
  --background-modifier-error-hover: hsl(from hsl(30, 80%, 50%) 356 s l);
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: hsl(30, 80%, 50%);
  --background-modifier-message: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --background-modifier-success: hsl(from hsl(30, 80%, 50%) 124 s l);
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  );
  --background-primary-alt: #242424;
  --background-prompt: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --background-secondary: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --background-secondary-alt: #363636;
  --base-h: 30;
  --base-l: 50%;
  --base-s: 80%;
  --blockquote-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 0.75em
    1.5em;
  --callout-question: 233, 151, 63;
  --callout-radius: 0.25rem;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  );
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0.25rem;
  --canvas-dot-pattern: #363636;
  --caret-color: hsl(258, 150%, 80%);
  --checkbox-border-color: hsl(30, 80%, 50%);
  --checkbox-border-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-color: hsl(30, 80%, 50%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  );
  --checkbox-radius: 0.25rem;
  --checkbox-size: 16px;
  --checklist-done-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%);
  --clickable-icon-radius: 0.25rem;
  --code-background: light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  );
  --code-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --code-bracket-background: hsl(30, 80%, 50%);
  --code-comment: light-dark(
    hsl(from black h s l / 0.5),
    hsl(from white h s l / 0.5)
  );
  --code-function: hsl(from hsl(30, 80%, 50%) 57 s l);
  --code-important: hsl(from hsl(30, 80%, 50%) 27 s l);
  --code-keyword: hsl(from hsl(30, 80%, 50%) 331 s l);
  --code-normal: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --code-operator: hsl(from hsl(30, 80%, 50%) 356 s l);
  --code-property: hsl(from hsl(30, 80%, 50%) 179 s l);
  --code-punctuation: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%);
  --code-radius: 0.25rem;
  --code-size: 0.875em;
  --code-string: hsl(from hsl(30, 80%, 50%) 124 s l);
  --code-tag: hsl(from hsl(30, 80%, 50%) 356 s l);
  --code-value: hsl(from hsl(30, 80%, 50%) 253 s l);
  --collapse-icon-color: hsl(30, 80%, 50%);
  --collapse-icon-color-collapsed: hsl(30, 80%, 50%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-blue: hsl(from hsl(30, 80%, 50%) 219 s l);
  --color-cyan: hsl(from hsl(30, 80%, 50%) 179 s l);
  --color-green: hsl(from hsl(30, 80%, 50%) 124 s l);
  --color-orange: hsl(from hsl(30, 80%, 50%) 27 s l);
  --color-pink: hsl(from hsl(30, 80%, 50%) 331 s l);
  --color-purple: hsl(from hsl(30, 80%, 50%) 253 s l);
  --color-red: hsl(from hsl(30, 80%, 50%) 356 s l);
  --color-yellow: hsl(from hsl(30, 80%, 50%) 57 s l);
  --divider-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --divider-color-hover: hsl(30, 80%, 50%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --empty-pane-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --flair-background: hsl(30, 80%, 50%);
  --flair-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-interface-theme: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-mermaid: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-monospace: '??', ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace;
  --font-monospace-theme: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace;
  --font-print: '??', '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 'Arial';
  --font-text: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-text-theme: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-weight: var(--link-weight, 400);
  --graph-line: #3f3f3f;
  --graph-node: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%);
  --graph-node-attachment: hsl(from hsl(30, 80%, 50%) 57 s l);
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: hsl(from hsl(30, 80%, 50%) 124 s l);
  --graph-node-unresolved: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --graph-text: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --h1-line-height: 1.5;
  --h1-size: 39.81312px;
  --h2-line-height: 1.5;
  --h2-size: 33.1776px;
  --h3-line-height: 1.5;
  --h3-size: 27.648px;
  --h4-line-height: 1.5;
  --h4-size: 23.04px;
  --h5-line-height: 1.5;
  --h5-size: 19.2px;
  --h6-line-height: 1.5;
  --h6-size: 16px;
  --header-height: calc(18px + 1rem);
  --heading-formatting: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --heading-spacing: 0.67em;
  --hr-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --interactive-accent: hsl(30, 80%, 50%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0.5rem;
  --menu-shadow: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 10%, transparent);
  --pdf-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  );
  --pdf-page-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  );
  --pdf-shadow: 0 0 0 1px color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --pdf-sidebar-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  );
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --popover-font-size: 16px;
  --r-background-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  );
  --r-code-font: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace;
  --r-heading-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --r-heading-font-weight: 100;
  --r-link-color: hsl(255, 89.76%, 75.9%);
  --r-link-color-hover: hsl(253, 92.4%, 85.14%);
  --r-main-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --r-main-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --raised-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --resizer-size: 20px;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 0.75rem;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: hsl(30, 80%, 50%);
  --search-icon-color: hsl(30, 80%, 50%);
  --search-result-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  );
  --setting-group-heading-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --setting-group-heading-size: 1rem;
  --setting-group-heading-weight: 600;
  --setting-items-background: none;
  --setting-items-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --setting-items-padding: 0;
  --setting-items-radius: 0;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-l: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 10%, transparent);
  --shadow-s: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 10%, transparent);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --shiki-active-tab-border-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%);
  --shiki-code-background: light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  );
  --shiki-code-block-border-radius: 0.25rem;
  --shiki-code-block-spacing: 1em;
  --shiki-code-comment: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --shiki-code-function: hsl(from hsl(30, 80%, 50%) 124 s l);
  --shiki-code-important: hsl(from hsl(30, 80%, 50%) 27 s l);
  --shiki-code-keyword: hsl(from hsl(30, 80%, 50%) 331 s l);
  --shiki-code-normal: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%);
  --shiki-code-property: hsl(from hsl(30, 80%, 50%) 179 s l);
  --shiki-code-punctuation: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%);
  --shiki-code-string: hsl(from hsl(30, 80%, 50%) 57 s l);
  --shiki-code-value: hsl(from hsl(30, 80%, 50%) 253 s l);
  --shiki-gutter-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --shiki-gutter-text-color-highlight: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%);
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --shiki-tooltip-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --suggestion-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  );
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: hsl(from hsl(30, 80%, 50%) 356 s l);
  --sync-avatar-color-2: hsl(from hsl(30, 80%, 50%) 27 s l);
  --sync-avatar-color-3: hsl(from hsl(30, 80%, 50%) 57 s l);
  --sync-avatar-color-4: hsl(from hsl(30, 80%, 50%) 124 s l);
  --sync-avatar-color-5: hsl(from hsl(30, 80%, 50%) 179 s l);
  --sync-avatar-color-6: hsl(from hsl(30, 80%, 50%) 219 s l);
  --sync-avatar-color-7: hsl(from hsl(30, 80%, 50%) 253 s l);
  --sync-avatar-color-8: hsl(from hsl(30, 80%, 50%) 331 s l);
  --tab-background-active: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  );
  --tab-background-inactive: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 85%
  );
  --tab-curve: 0.125em;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 0.8rem;
  --tab-outline-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --tab-radius: 0.25em;
  --tab-stacked-font-size: 0.8rem;
  --tab-stacked-header-width: calc(18px + 1rem);
  --tab-switcher-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ), transparent);
  --tab-switcher-preview-background-shadow: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 10%, transparent);
  --tab-switcher-preview-radius: 1rem;
  --tab-switcher-preview-shadow: none;
  --tab-switcher-preview-shadow-active: none;
  --tab-text-color: hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  );
  --tab-text-color-active: hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  );
  --tab-text-color-focused: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --tab-text-color-focused-active: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --tab-text-color-focused-active-current: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --tab-text-color-focused-highlighted: hsl(30, 80%, 50%);
  --table-add-button-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(30, 80%, 50%);
  --table-drag-handle-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --table-drag-handle-color-active: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --table-header-background: transparent;
  --table-header-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --table-header-border-width: 1px;
  --table-header-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(30, 80%, 50%);
  --table-text-size: 16px;
  --tag-background: hsl(258, 88%, 66%, 0.3);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(
    258,
    96.8%,
    79.2%
  );
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: hsl(from hsl(30, 80%, 50%) 356 s l);
  --text-faint: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent 30%);
  --text-normal: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --text-on-accent: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: hsl(from hsl(30, 80%, 50%) 124 s l);
  --text-warning: hsl(from hsl(30, 80%, 50%) 27 s l);
  --theme-color-activeLineHighlight: hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  );
  --theme-color-audioRecordingActive: hsl(
    from hsl(from hsl(30, 80%, 50%) 356 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-base: hsl(30, 80%, 50%);
  --theme-color-baseDarkened12: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 12.5%
  );
  --theme-color-baseDarkened25: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --theme-color-baseDarkened40: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 40%
  );
  --theme-color-baseDarkened60: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 60%
  );
  --theme-color-baseDarkened70: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --theme-color-baseDarkened80: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-baseDarkened85: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 85%
  );
  --theme-color-baseDarkened90: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  );
  --theme-color-baseLightened12: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 12.5%
  );
  --theme-color-baseLightened25: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --theme-color-baseLightened40: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 40%
  );
  --theme-color-baseLightened60: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --theme-color-baseLightened70: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 70%
  );
  --theme-color-baseLightened80: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-baseLightened85: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 85%
  );
  --theme-color-baseLightened95: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --theme-color-baseTransparent06: hsl(
    from hsl(30, 80%, 50%) h s l / 0.06
  );
  --theme-color-baseTransparent12: hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  );
  --theme-color-baseTransparent25: hsl(
    from hsl(30, 80%, 50%) h s l / 0.25
  );
  --theme-color-baseTransparent35: hsl(
    from hsl(30, 80%, 50%) h s l / 0.35
  );
  --theme-color-baseTransparent50: hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  );
  --theme-color-baseTransparent75: hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  );
  --theme-color-blockId: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --theme-color-blueDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-blueLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-calendarBg: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 85%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-calendarDayBg: hsl(from black h s l / 0.5);
  --theme-color-card: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --theme-color-cardBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 95%
  );
  --theme-color-cardBgHover: hsl(30, 80%, 50%);
  --theme-color-cardHover: black;
  --theme-color-communityItemBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-communityItemBgActive: hsl(30, 80%, 50%);
  --theme-color-communityItemBgHover: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --theme-color-communityItemBgSelected: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 12.5%
  );
  --theme-color-contentItemBgActive: hsl(30, 80%, 50%);
  --theme-color-control: light-dark(
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ),
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  )
  );
  --theme-color-controlActive: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ),color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --theme-color-controlBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --theme-color-controlBgActive: hsl(30, 80%, 50%);
  --theme-color-controlBgHover: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 40%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 40%
  ));
  --theme-color-controlContentArea: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --theme-color-controlContentAreaHover: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-controlHasActiveMenu: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-controlHover: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --theme-color-controlLightweightActive: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --theme-color-controlLowWeightBg: hsl(from black h s l / 0.25);
  --theme-color-controlSetBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-controlText: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --theme-color-controlTextHover: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-controlUIHover: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --theme-color-controlUISelected: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --theme-color-cyanDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 179 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-cyanLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 179 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-dataviewEmpty: light-dark(
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 40%
  ),
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 40%
  )
  );
  --theme-color-dragTarget: hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  );
  --theme-color-dragTargetBg: hsl(
    from hsl(30, 80%, 50%) h s l / 0.25
  );
  --theme-color-emptyStateBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-gradientBottom: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-gradientCardsetBottom: hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  );
  --theme-color-gradientCardsetGeneratedBottom: hsl(
    from hsl(30, 80%, 50%) h s l / 0.25
  );
  --theme-color-gradientCardsetGeneratedTop: hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  );
  --theme-color-gradientCardsetTop: hsl(
    from hsl(30, 80%, 50%) h s l / 0.06
  );
  --theme-color-gradientTop: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 60%
  );
  --theme-color-greenDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-greenLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-greenTransparent25: hsl(from hsl(from hsl(30, 80%, 50%) 124 s l) h s l / 0.25);
  --theme-color-greenTransparent75: hsl(from hsl(from hsl(30, 80%, 50%) 124 s l) h s l / 0.75);
  --theme-color-hotkey: hsl(30, 80%, 50%);
  --theme-color-inputBorder: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --theme-color-inputPlaceholder: hsl(30, 80%, 50%);
  --theme-color-interactiveActive: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --theme-color-jiraIssueDangerBg: hsl(from hsl(from hsl(30, 80%, 50%) 356 s l) h s l / 0.25);
  --theme-color-jiraIssueDeleteBg: hsl(from hsl(30, 80%, 50%) 356 s l);
  --theme-color-jiraIssueInfoBg: light-dark(
    hsl(
    from hsl(from hsl(30, 80%, 50%) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from hsl(30, 80%, 50%) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  );
  --theme-color-jiraIssueStatus: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --theme-color-jiraIssueStatusBg: light-dark(
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ),
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  )
  );
  --theme-color-jiraIssueSuccessBg: light-dark(
    hsl(
    from hsl(from hsl(30, 80%, 50%) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from hsl(30, 80%, 50%) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  );
  --theme-color-jiraIssueTableStripe: light-dark(
    hsl(from white h s l / 0.5),
    hsl(from black h s l / 0.5)
  );
  --theme-color-jiraIssueWarningBg: light-dark(control
    hsl(
    from hsl(from hsl(30, 80%, 50%) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from hsl(30, 80%, 50%) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  );
  --theme-color-kanbanLaneBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-lineNumbers: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 60%
  ));
  --theme-color-log: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-logBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --theme-color-menuBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-mobileToolbarBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-modalContentBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --theme-color-navFileTag: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --theme-color-navFileTagActive: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-navFileTagActiveBorder: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-navFileTagBorder: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --theme-color-navigationButtonBgHover: hsl(30, 80%, 50%);
  --theme-color-notice: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  );
  --theme-color-noticeBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --theme-color-orangeDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 27 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-orangeLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 27 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-orangeTransparent25: hsl(from hsl(from hsl(30, 80%, 50%) 27 s l) h s l / 0.25);
  --theme-color-orangeTransparent75: hsl(from hsl(from hsl(30, 80%, 50%) 27 s l) h s l / 0.75);
  --theme-color-pinkDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 331 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-pinkLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 331 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-promptInstructions: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 40%
  );
  --theme-color-purpleDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 253 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-purpleLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 253 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-queryComponentBg: hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  );
  --theme-color-redDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 356 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-redLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 356 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-redTransparent25: hsl(from hsl(from hsl(30, 80%, 50%) 356 s l) h s l / 0.25);
  --theme-color-redTransparent75: hsl(from hsl(from hsl(30, 80%, 50%) 356 s l) h s l / 0.75);
  --theme-color-settingsBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-settingsBgStripe: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  );
  --theme-color-settingsGroupBg: hsl(from black h s l / 0.5);
  --theme-color-shadow: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  );
  --theme-color-suggestionBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 85%
  );
  --theme-color-switcherBgActive: hsl(30, 80%, 50%);
  --theme-color-tabBgInactiveHover: hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  );
  --theme-color-tabNavActiveBg: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 70%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --theme-color-tabNavBg: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 60%
  ));
  --theme-color-tableHeaderBg: hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  );
  --theme-color-tagBgHover: hsl(
    258,
    105.6%,
    52.8%,
    0.75
  );
  --theme-color-tagBgSidebar: hsl(
    258,
    105.6%,
    16.5%,
    0.5
  );
  --theme-color-tagBgSidebarHover: hsl(
    258,
    96.8%,
    52.8%,
    0.5
  );
  --theme-color-tagHover: hsl(
    258,
    92.4%,
    85.14%
  );
  --theme-color-tagSidebar: hsl(
    258,
    96.8%,
    79.2%
  );
  --theme-color-tagSidebarHover: hsl(
    258,
    123.2%,
    85.8%
  );
  --theme-color-textMeta: hsl(30, 80%, 50%);
  --theme-color-textSelected: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-warningBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --theme-color-yellowDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-yellowLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-yellowTransparent25: hsl(from hsl(from hsl(30, 80%, 50%) 57 s l) h s l / 0.25);
  --theme-color-yellowTransparent75: hsl(from hsl(from hsl(30, 80%, 50%) 57 s l) h s l / 0.75);
  --theme-gradient-bottomToTop: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ) 0%,
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 60%
  ) 100%
  );
  --theme-gradient-topToBottom: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 60%
  ) 0%,
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ) 100%
  );
  --theme-grid-cardSet: repeat(
    auto-fit,
    minmax(8em, 1fr)
  );
  --theme-padding-block: 0.75em
    1.5em;
  --theme-shadow-control: 0px 1px 2px
    hsl(
      30,
      8%,
      5%,
      0.1
    );
  --theme-shadow-indent: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 3%, transparent),
    0 0 0.2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 6%, transparent),
    0 0 0.4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 9%, transparent),
    0 0 1.2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 12%, transparent),
    0 0 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 15%, transparent);
  --theme-shadow-indent-small: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 4%, transparent),
    0 0 0.2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 8%, transparent),
    0 0 0.6rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 12%, transparent),
    0 0 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 16%, transparent),
    0 0 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ) 20%, transparent);
  --theme-shadow-input: 0px 1px 2px
      hsl(
        30,
        40%,
        5%,
        0.5
      ),
    0px 3.4px 6.7px
      hsl(
        30,
        80%,
        5%,
        0.25
      ),
    0px 15px 30px
      hsl(
        30,
        60%,
        5%,
        0.15
      );
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: calc(18px + 1rem);
  --traffic-lights-offset-y: calc(18px + 1rem);
  --zoom-multiplier: 1;
  background-color: rgb(166, 138, 249);
  border-bottom-color: rgb(166, 138, 249);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(166, 138, 249);
  border-left-width: 0px;
  border-right-color: rgb(166, 138, 249);
  border-right-width: 0px;
  border-top-color: rgb(166, 138, 249);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--link-external-color, rgb(166, 138, 249));
  content: "";
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--link-weight, 400);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 4px;
  margin-right: 0px;
  margin-top: -4px;
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 14 14\\' xmlns=\\'http://www.w3.org/2000/svg\\' stroke=\\'black\\' fill=\\'none\\' stroke-width=\\'1\\'%3E%3Cpath d=\\'M6.125,3.938L1.313,3.938L1.313,12.688L10.063,12.688L10.063,7.875M7.875,1.75L12.25,1.75L12.25,6.125M12.25,1.75L6.125,7.875\\'/%3E%3C/svg%3E");
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  scrollbar-color: var(--theme-color-baseTransparent25, color(srgb 0.9 0.5 0.1 / 0.25) rgba(0, 0, 0, 0)) transparent;
  text-decoration: underline 1px;
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px;
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html[saved-theme="dark"] body a.internal-link.broken {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px dashed rgba(138, 92, 245, 0.3);
  text-decoration-style: var(--link-unresolved-decoration-style, dashed);
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body dt {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body ol > li {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body ul > li {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, color(srgb 0.925 0.625 0.325));
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body table {
  color: color(srgb 0.96 0.8 0.64);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  width: 241.219px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: color(srgb 0.27 0.15 0.03);
  border-left-color: color(srgb 0.27 0.15 0.03);
  border-right-color: color(srgb 0.27 0.15 0.03);
  border-top-color: color(srgb 0.27 0.15 0.03);
  color: var(--table-text-color, color(srgb 0.96 0.8 0.64));
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body th {
  background-color: color(srgb 0.9 0.5 0.1 / 0.12);
  border-bottom-color: color(srgb 0.27 0.15 0.03);
  border-left-color: color(srgb 0.27 0.15 0.03);
  border-right-color: color(srgb 0.27 0.15 0.03);
  border-top-color: color(srgb 0.27 0.15 0.03);
  color: var(--table-header-color, color(srgb 0.96 0.8 0.64));
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, color(srgb 1 1 1 / 0.06));
  border-bottom-color: color(srgb 0.675 0.375 0.075);
  border-left-color: color(srgb 0.675 0.375 0.075);
  border-right-color: color(srgb 0.675 0.375 0.075);
  border-top-color: color(srgb 0.675 0.375 0.075);
  color: var(--code-normal, color(srgb 0.96 0.8 0.64));
  font-family: var(--font-monospace, "??", ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
  padding-bottom: 3.5px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 3.5px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, color(srgb 1 1 1 / 0.06));
  border-bottom-color: color(srgb 0.675 0.375 0.075);
  border-left-color: color(srgb 0.675 0.375 0.075);
  border-right-color: color(srgb 0.675 0.375 0.075);
  border-top-color: color(srgb 0.675 0.375 0.075);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body figcaption {
  color: color(srgb 0.96 0.8 0.64);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  ));
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body img {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body video {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-radius: 8px;
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: color(srgb 0.96 0.8 0.64 / 0.7);
  border-left-color: color(srgb 0.96 0.8 0.64 / 0.7);
  border-right-color: color(srgb 0.96 0.8 0.64 / 0.7);
  border-top-color: color(srgb 0.96 0.8 0.64 / 0.7);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: color(srgb 0.96 0.8 0.64);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--embed-background, color(srgb 0.9 0.5 0.1 / 0.12));
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-left-width: 0px;
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--background-primary, color(srgb 0.045 0.025 0.005));
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(230, 128, 26);
  border-left-color: rgb(230, 128, 26);
  border-right-color: rgb(230, 128, 26);
  border-top-color: rgb(230, 128, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: color(srgb 0.96 0.8 0.64 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: color(srgb 0.96 0.8 0.64 / 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.96 0.8 0.64);
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'4,10.5 20,10.5 20,13.5 4,13.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'4,10.5 20,10.5 20,13.5 4,13.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.045 0.025 0.005);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cline x1=\\'12\\' x2=\\'12\\' y1=\\'5\\' y2=\\'13\\'/%3E%3Cline x1=\\'12\\' x2=\\'12\\' y1=\\'19\\' y2=\\'19\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cline x1=\\'12\\' x2=\\'12\\' y1=\\'5\\' y2=\\'13\\'/%3E%3Cline x1=\\'12\\' x2=\\'12\\' y1=\\'19\\' y2=\\'19\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cpath d=\\'M7.5,6.852c0.463,-1.049 1.493,-2.872 4.5,-2.852c3.957,0.026 5.001,2.617 5,4.5c-0.002,2.952 -4.963,3.463 -5,7.5\\'/%3E%3Cpath d=\\'M12.25,20l-0.443,-0\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cpath d=\\'M7.5,6.852c0.463,-1.049 1.493,-2.872 4.5,-2.852c3.957,0.026 5.001,2.617 5,4.5c-0.002,2.952 -4.963,3.463 -5,7.5\\'/%3E%3Cpath d=\\'M12.25,20l-0.443,-0\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.86 0.1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'12,-12 48,-12 48,36 12,36\\' transform=\\'rotate(45) translate(5,-12)\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'12,-12 48,-12 48,36 12,36\\' transform=\\'rotate(45) translate(5,-12)\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'15,4.5 6,12 15,19.5 16.75,17.5 10,12 16.75,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'15,4.5 6,12 15,19.5 16.75,17.5 10,12 16.75,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'9,4.5 18,12 9,19.5 7.25,17.5 14,12 7.25,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'9,4.5 18,12 9,19.5 7.25,17.5 14,12 7.25,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.045 0.025 0.005);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.1 0.153333);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.1 0.153333);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.1 0.153333);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.1 0.153333);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1 0.38 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.86 0.1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.86 0.1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.273333 0.1 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.1 0.153333);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1 0.9 0.153333);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1 0.9 0.153333);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1 0.9 0.153333);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.045 0.025 0.005);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: color(srgb 0.96 0.8 0.64);
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
  background-color: color(srgb 0 0 0 / 0.06);
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-left-width: 0px;
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-right-width: 0px;
  border-top-color: color(srgb 0.96 0.8 0.64);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--text-normal, color(srgb 0.96 0.8 0.64));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--background-prompt, color(srgb 0.18 0.1 0.02));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  box-shadow: var(--shadow-l, color(srgb 0.09 0.05 0.01 / 0.02) 0px 0px 3.2px 0px, color(srgb 0.09 0.05 0.01 / 0.04) 0px 3.2px 6.4px 0px, color(srgb 0.09 0.05 0.01 / 0.06) 0px 6.4px 19.2px 0px, color(srgb 0.09 0.05 0.01 / 0.08) 0px 19.2px 32px 0px, color(srgb 0.09 0.05 0.01 / 0.1) 0px 32px 64px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.96 0.8 0.64);
  cursor: grab;
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.96 0.8 0.64) none 0px;
  text-decoration-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--theme-color-controlActive, color(srgb 0.09 0.05 0.01));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: var(--theme-color-controlActive, color(srgb 0.09 0.05 0.01));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--theme-color-controlBgActive, rgb(230, 128, 26));
  color: var(--theme-color-controlActive, color(srgb 0.09 0.05 0.01));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: color(srgb 0.27 0.15 0.03);
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--theme-color-controlBgActive, rgb(230, 128, 26));
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--theme-color-controlActive, color(srgb 0.09 0.05 0.01));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--theme-color-controlBgActive, rgb(230, 128, 26));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--theme-color-controlActive, color(srgb 0.09 0.05 0.01));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsl(258, 88%, 66%, 0.3));
  --pill-color: var(--tag-color, hsl(
    258,
    96.8%,
    79.2%
  ));
  --pill-color-remove: var(--tag-color, hsl(
    258,
    96.8%,
    79.2%
  ));
  --pill-padding-x: var(--tag-padding-x, 1em);
  --pill-weight: var(--tag-weight, 400);
  background-color: var(--theme-color-tagBgSidebar, rgba(25, 0, 84, 0.5));
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--tag-weight, 400);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(181, 151, 253);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 100);
  color: var(--h1-color, color(srgb 0.96 0.8 0.64));
  font-family: var(--theme-setting-headingFont), var(--font-text-theme);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, color(srgb 0.96 0.8 0.64));
  font-size: var(--inline-title-size, 27.648px);
  font-weight: var(--inline-title-weight, 400);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 200);
  color: var(--h2-color, color(srgb 0.96 0.8 0.64));
  font-family: var(--theme-setting-headingFont), var(--font-text-theme);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, color(srgb 0.96 0.8 0.64));
  font-family: var(--inline-title-font, "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 300);
  color: var(--h3-color, color(srgb 0.96 0.8 0.64));
  font-family: var(--theme-setting-headingFont), var(--font-text-theme);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 400);
  color: var(--h4-color, color(srgb 0.96 0.8 0.64));
  font-family: var(--theme-setting-headingFont), var(--font-text-theme);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 500);
  color: var(--h5-color, color(srgb 0.96 0.8 0.64));
  font-family: var(--theme-setting-headingFont), var(--font-text-theme);
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 500);
  color: var(--h6-color, color(srgb 0.96 0.8 0.64));
  font-family: var(--theme-setting-headingFont), var(--font-text-theme);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: color(srgb 0.675 0.375 0.075);
  border-left-color: color(srgb 0.675 0.375 0.075);
  border-right-color: color(srgb 0.675 0.375 0.075);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  padding-right: 24px;
}

html[saved-theme="dark"] body body {
  scrollbar-color: var(--theme-color-baseTransparent25, color(srgb 0.9 0.5 0.1 / 0.25) rgba(0, 0, 0, 0)) transparent;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: color(srgb 0.9 0.5 0.1 / 0.25);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-faint, color(srgb 0.925 0.625 0.325));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--font-medium, 500);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-faint, color(srgb 0.925 0.625 0.325));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--font-medium, 500);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--font-medium, 500);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  --icon-size: var(--icon-s, 16px);
  --icon-stroke: var(--icon-s-stroke-width, 2px);
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  color: var(--theme-color-control, color(srgb 0.96 0.8 0.64));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, color(srgb 0.36 0.2 0.04));
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-left-width: 0px;
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
  border-top-left-radius: var(--radius-m, 8px);
  border-top-right-radius: var(--radius-m, 8px);
  border-top-width: 0px;
  color: var(--status-bar-text-color, color(srgb 0.96 0.8 0.64));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body footer ul li a {
  color: var(--theme-color-control, color(srgb 0.96 0.8 0.64));
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: color(srgb 0.96 0.8 0.64);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.96 0.8 0.64));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.96 0.8 0.64);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: color(srgb 0.96 0.8 0.64);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.96 0.8 0.64));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
  color: var(--theme-color-control, color(srgb 0.96 0.8 0.64));
}

html[saved-theme="dark"] body .darkmode svg {
  color: color(srgb 0.96 0.8 0.64);
  stroke: color(srgb 0.96 0.8 0.64);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.96 0.8 0.64 / 0.7);
  border-left-color: color(srgb 0.96 0.8 0.64 / 0.7);
  border-right-color: color(srgb 0.96 0.8 0.64 / 0.7);
  border-top-color: color(srgb 0.96 0.8 0.64 / 0.7);
  color: color(srgb 0.96 0.8 0.64 / 0.7);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, color(srgb 0.925 0.625 0.325));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, color(srgb 0.96 0.8 0.64));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, color(srgb 0.27 0.15 0.03));
  border-color: color(srgb 0.96 0.8 0.64);
  box-shadow: var(--theme-shadow-input, rgba(18, 13, 8, 0.5) 0px 1px 2px 0px, rgba(23, 13, 3, 0.25) 0px 3.4px 6.7px 0px, rgba(20, 13, 5, 0.15) 0px 15px 30px 0px);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  background-color: color(srgb 0.9 0.5 0.1 / 0.12);
  border-color: color(srgb 0.27 0.15 0.03);
  color: var(--table-header-color, color(srgb 0.96 0.8 0.64));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: var(--metadata-property-background, color(srgb 0.18 0.1 0.02));
  border-bottom-color: color(srgb 0.96 0.8 0.64 / 0.7);
  border-left-color: color(srgb 0.96 0.8 0.64 / 0.7);
  border-right-color: color(srgb 0.96 0.8 0.64 / 0.7);
  border-top-color: color(srgb 0.96 0.8 0.64 / 0.7);
  color: var(--text-muted, color(srgb 0.96 0.8 0.64 / 0.7));
  font-family: var(--font-interface, "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  margin-bottom: 0px;
  padding-left: 32px;
  padding-right: 32px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: color(srgb 0.96 0.8 0.64 / 0.7);
  border-left-color: color(srgb 0.96 0.8 0.64 / 0.7);
  border-right-color: color(srgb 0.96 0.8 0.64 / 0.7);
  border-top-color: color(srgb 0.96 0.8 0.64 / 0.7);
  color: color(srgb 0.96 0.8 0.64 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .note-properties {
  background-color: var(--metadata-property-background, color(srgb 0.18 0.1 0.02));
  border-color: color(srgb 0.96 0.8 0.64 / 0.7);
}

html[saved-theme="dark"] body .note-properties-key {
  color: color(srgb 0.96 0.8 0.64 / 0.7);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: color(srgb 0.96 0.8 0.64 / 0.7);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsl(258, 88%, 66%, 0.3));
  --pill-color: var(--tag-color, hsl(
    258,
    96.8%,
    79.2%
  ));
  --pill-color-remove: var(--tag-color, hsl(
    258,
    96.8%,
    79.2%
  ));
  --pill-padding-x: var(--tag-padding-x, 1em);
  --pill-weight: var(--tag-weight, 400);
  background-color: var(--theme-color-tagBgSidebar, rgba(25, 0, 84, 0.5));
  border-radius: 22.4px;
  color: var(--theme-color-tagSidebar, rgb(181, 151, 253));
}

html[saved-theme="dark"] body .note-properties-value {
  color: color(srgb 0.96 0.8 0.64 / 0.7);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, color(srgb 0.045 0.025 0.005));
  color: var(--text-normal, color(srgb 0.96 0.8 0.64));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: color(srgb 0.96 0.8 0.64);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, color(srgb 0.36 0.2 0.04));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--tab-text-color-focused-active-current, color(srgb 0.96 0.8 0.64));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body abbr {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body details {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
  color: var(--text-normal, color(srgb 0.96 0.8 0.64));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding-bottom: 0px;
  padding-left: 5.6px;
  padding-right: 5.6px;
  padding-top: 0px;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: color(srgb 0.18 0.1 0.02);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.18 0.1 0.02);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.18 0.1 0.02);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.18 0.1 0.02);
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--theme-color-textSelected, color(srgb 0.18 0.1 0.02));
  font-family: var(--font-interface, "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  font-size: var(--font-ui-smaller, 11.2px);
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body sub {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body summary {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body sup {
  color: color(srgb 0.96 0.8 0.64);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(138, 92, 245, 0.3));
  color: var(--tag-color, rgb(181, 151, 253));
}`,
  },
  light: {
    base: `:root:root {
  --background-input: light-dark(var(--theme-color-baseTransparent12), var(--theme-color-darkenTransparent06));
  --background-modifier-active-hover: var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --background-modifier-active-hover-alt: var(--theme-color-baseLightened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --background-modifier-border: var(--theme-color-baseLightened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --background-modifier-border-focus: var(--theme-color-base, hsl(30, 80%, 50%));
  --background-modifier-error: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --background-modifier-error-hover: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --background-modifier-hover: var(--theme-color-base, hsl(30, 80%, 50%));
  --background-modifier-message: var(--theme-color-noticeBg, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --background-modifier-success: var(--color-green, hsl(from hsl(30, 80%, 50%) 124 s l));
  --background-primary: var(--color-base-00, white);
  --background-prompt: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --background-secondary: var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --base-h: var(--accent-h, 30);
  --base-l: var(--accent-l, 50%);
  --base-s: var(--accent-s, 80%);
  --bases-cards-background: var(--background-primary, white);
  --bases-cards-cover-background: light-dark(var(--theme-color-darkenTransparent06), var(--theme-color-lightenTransparent06));
  --bases-cards-radius: var(--radius-m, 0.5rem);
  --bases-cards-shadow: var(--shadow-s, 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 10%, transparent));
  --bases-cards-shadow-hover: var(--shadow-s, 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 10%, transparent));
  --bases-embed-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --bases-embed-border-radius: var(--radius-s, 0.25rem);
  --bases-group-heading-property-color: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --bases-group-heading-property-size: var(--font-ui-smaller, 0.7rem);
  --bases-header-padding-end: 0.5em;
  --bases-header-padding-start: 0.5em;
  --bases-table-border-color: var(--table-border-color, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --bases-table-cell-background-active: var(--background-primary, white);
  --bases-table-container-border-radius: var(--radius-s, 0.25rem);
  --bases-table-header-background: var(--background-primary, white);
  --bases-table-header-background-hover: var(--background-modifier-hover, hsl(30, 80%, 50%));
  --bases-table-header-color: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --bases-table-summary-background: var(--background-primary, white);
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsl(30, 80%, 50%));
  --blockquote-border-color: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --bodyFont: var(--font-text-theme, var(--font-default, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"));
  --callout-padding: var(--theme-padding-block, 0.75em
    1.5em);
  --callout-radius: var(--radius-s, 0.25rem);
  --canvas-background: var(--background-primary, white);
  --canvas-card-label-color: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --canvas-controls-radius: var(--radius-s, 0.25rem);
  --caret-color: hsl(var(--accent-h), 150%, 50%);
  --checkbox-border-color: var(--interactive-accent, hsl(30, 80%, 50%));
  --checkbox-border-color-hover: var(--interactive-accent-hover, hsl(30, 80%, 50%));
  --checkbox-color: var(--interactive-accent, hsl(30, 80%, 50%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(30, 80%, 50%));
  --checkbox-marker-color: var(--background-primary, white);
  --checkbox-radius: var(--radius-s, 0.25rem);
  --checklist-done-color: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --clickable-icon-radius: var(--radius-s, 0.25rem);
  --code-background: light-dark(
    var(--theme-color-darkenTransparent06),
    var(--theme-color-lightenTransparent06)
  );
  --code-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --code-bracket-background: var(--background-modifier-hover, hsl(30, 80%, 50%));
  --code-comment: light-dark(
    var(--theme-color-darkenTransparent50),
    var(--theme-color-lightenTransparent50)
  );
  --code-function: var(--color-yellow, hsl(from hsl(30, 80%, 50%) 57 s l));
  --code-important: var(--color-orange, hsl(from hsl(30, 80%, 50%) 27 s l));
  --code-keyword: var(--color-pink, hsl(from hsl(30, 80%, 50%) 331 s l));
  --code-normal: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --code-operator: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --code-property: var(--color-cyan, hsl(from hsl(30, 80%, 50%) 179 s l));
  --code-punctuation: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --code-radius: var(--radius-s, 0.25rem);
  --code-string: var(--color-green, hsl(from hsl(30, 80%, 50%) 124 s l));
  --code-tag: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --code-value: var(--color-purple, hsl(from hsl(30, 80%, 50%) 253 s l));
  --collapse-icon-color: var(--theme-color-base, hsl(30, 80%, 50%));
  --collapse-icon-color-collapsed: var(--theme-color-base, hsl(30, 80%, 50%));
  --color-blue: hsl(from var(--theme-color-base) 219 s l);
  --color-cyan: hsl(from var(--theme-color-base) 179 s l);
  --color-green: hsl(from var(--theme-color-base) 124 s l);
  --color-orange: hsl(from var(--theme-color-base) 27 s l);
  --color-pink: hsl(from var(--theme-color-base) 331 s l);
  --color-purple: hsl(from var(--theme-color-base) 253 s l);
  --color-red: hsl(from var(--theme-color-base) 356 s l);
  --color-yellow: hsl(from var(--theme-color-base) 57 s l);
  --dark: var(--text-normal, var(--theme-color-baseDarkened90, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  )));
  --darkgray: var(--text-normal, var(--theme-color-baseDarkened90, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  )));
  --divider-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --divider-color-hover: var(--interactive-accent, hsl(30, 80%, 50%));
  --divider-width: 0;
  --embed-background: var(--theme-color-baseTransparent12, hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --embed-border-left: none;
  --embed-border-right: none;
  --empty-pane-color: var(--theme-color-baseDarkened70, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --file-header-background: var(--background-primary, white);
  --file-header-background-focused: var(--background-primary, white);
  --file-header-font: var(--font-interface, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --file-header-font-size: var(--font-ui-small, 0.8rem);
  --file-line-width: calc(0.625rem*var(--theme-setting-lineWidth));
  --file-margins: var(--file-margins-y) var(--file-margins-x, 0 2em);
  --flair-background: var(--theme-color-base, hsl(30, 80%, 50%));
  --flair-color: var(--text-on-accent, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --font-default: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-interface-theme: var(--font-default, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --font-mermaid: var(--font-text, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --font-monospace-default: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace;
  --font-monospace-theme: var(--font-monospace-default, ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace);
  --font-text-theme: var(--font-default, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --font-ui-large: 1.125rem;
  --font-ui-medium: 1rem;
  --font-ui-small: 0.8rem;
  --font-ui-smaller: 0.7rem;
  --footnote-divider-color: var(--metadata-divider-color, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --footnote-id-color: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --footnote-id-color-no-occurrences: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --footnote-input-background-active: var(--metadata-input-background-active, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --footnote-radius: var(--radius-s, 0.25rem);
  --graph-node: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --graph-node-attachment: var(--color-yellow, hsl(from hsl(30, 80%, 50%) 57 s l));
  --graph-node-tag: var(--color-green, hsl(from hsl(30, 80%, 50%) 124 s l));
  --graph-node-unresolved: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --graph-text: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --gray: var(--text-muted, color-mix(in srgb, var(--text-normal), transparent 30%));
  --h1-line-height: var(--line-height-normal, 1.5);
  --h1-size: calc(var(--theme-value-headingScaleFactor)*var(--h2-size));
  --h1-weight: 100;
  --h2-line-height: var(--line-height-normal, 1.5);
  --h2-size: calc(var(--theme-value-headingScaleFactor)*var(--h3-size));
  --h2-weight: 200;
  --h3-line-height: var(--line-height-normal, 1.5);
  --h3-size: calc(var(--theme-value-headingScaleFactor)*var(--h4-size));
  --h3-weight: 300;
  --h4-line-height: var(--line-height-normal, 1.5);
  --h4-size: calc(var(--theme-value-headingScaleFactor)*var(--h5-size));
  --h4-weight: 400;
  --h5-size: calc(var(--theme-value-headingScaleFactor)*var(--h6-size));
  --h5-weight: 500;
  --h6-size: var(--font-text-size, 16px);
  --h6-weight: 500;
  --header-height: calc(var(--icon-size) + 1rem);
  --headerFont: var(--font-text-theme, var(--font-default, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"));
  --heading-formatting: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --highlight: var(--background-modifier-hover, var(--theme-color-base, hsl(30, 80%, 50%)));
  --hr-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --icon-color: var(--theme-color-base, hsl(30, 80%, 50%));
  --icon-color-active: var(--text-accent, light-dark(white, black));
  --icon-color-focused: var(--text-normal, white);
  --icon-color-hover: var(--text-muted, white);
  --inline-title-line-height: var(--line-height-normal, 1.5);
  --inline-title-size: var(--h3-size, 27.648px);
  --inline-title-weight: var(--h4-weight, 400);
  --input-border-width: var(--border-width, 2px);
  --input-date-separator: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --input-placeholder-color: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --input-shadow: var(--theme-shadow-control, 0 1px 2px
    hsl(
      30,
      120%,
      12.5%,
      0.5
    ));
  --interactive-accent: var(--theme-color-base, hsl(30, 80%, 50%));
  --interactive-accent-hover: var(--theme-color-base, hsl(30, 80%, 50%));
  --light: var(--background-primary, var(--color-base-00, white));
  --lightgray: var(--background-secondary, var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  )));
  --link-decoration-thickness: 1px;
  --link-unresolved-decoration-style: dashed;
  --list-bullet-size: 0.25em;
  --list-marker-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --list-marker-color-collapsed: var(--list-marker-color, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --list-marker-color-hover: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --menu-background: var(--background-secondary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --menu-radius: var(--radius-m, 0.5rem);
  --menu-shadow: var(--shadow-s, 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 10%, transparent));
  --metadata-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --metadata-divider-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --metadata-gap: 0.5em;
  --metadata-input-background-active: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --metadata-input-font: var(--font-interface, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --metadata-input-text-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --metadata-label-background-active: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --metadata-label-font: var(--font-interface, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --metadata-label-text-color: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --metadata-label-text-color-hover: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --metadata-property-background: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --metadata-property-background-active: var(--background-modifier-hover, hsl(30, 80%, 50%));
  --metadata-property-background-hover: var(--theme-color-baseTransparent12, hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 0.8rem);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 0.8rem);
  --modal-background: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --modal-border-width: var(--border-width, 0);
  --modal-max-height: calc(100vh - var(--safe-area-inset-top) - var(--safe-area-inset-bottom) - 2em);
  --modal-max-width: calc(100vw - var(--safe-area-inset-left) - var(--safe-area-inset-right) - 2em);
  --modal-radius: var(--radius-l, 0.75rem);
  --modal-width: 65rem;
  --nav-collapse-icon-color: var(--theme-color-baseTransparent75, hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  ));
  --nav-collapse-icon-color-collapsed: var(--theme-color-baseTransparent75, hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  ));
  --nav-heading-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --nav-heading-color-collapsed: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --nav-heading-color-hover: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --nav-indentation-guide-color: var(--theme-color-baseTransparent25, hsl(
    from hsl(30, 80%, 50%) h s l / 0.25
  ));
  --nav-item-background-active: var(--theme-color-base, hsl(30, 80%, 50%));
  --nav-item-background-hover: var(--theme-color-baseTransparent75, hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  ));
  --nav-item-background-selected: var(--theme-color-baseTransparent25, hsl(
    from hsl(30, 80%, 50%) h s l / 0.25
  ));
  --nav-item-children-margin-start: calc(var(--size-4-4)/2 - var(--nav-indentation-guide-width)/2);
  --nav-item-children-padding-start: calc(1em - var(--nav-indentation-guide-width)/2);
  --nav-item-color: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --nav-item-color-active: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --nav-item-color-hover: var(--text-normal, white);
  --nav-item-color-selected: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --nav-item-padding: var(--size-4-1) var(--size-4-2) var(--size-4-1) var(--size-4-6, 0.375em 0.75em 0.375em 0.75em);
  --nav-item-parent-padding: var(--nav-item-padding, 0.25em 0 0.25em 0);
  --nav-item-radius: var(--radius-s, 0.25rem);
  --nav-item-size: var(--font-ui-small, 0.8rem);
  --nav-tag-color: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --nav-tag-color-active: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --nav-tag-color-hover: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --nav-tag-radius: var(--radius-s, 0.25rem);
  --obsidian-columns-def-span: 1;
  --obsidian-columns-gap: 1em;
  --obsidian-columns-min-width: 10em;
  --obsidian-columns-padding: 0 0;
  --p-spacing: 1em;
  --pdf-background: var(--background-primary, white);
  --pdf-page-background: var(--background-primary, white);
  --pdf-sidebar-background: var(--background-primary, white);
  --pill-background: var(--theme-color-baseTransparent75, hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  ));
  --pill-background-hover: var(--theme-color-base, hsl(30, 80%, 50%));
  --pill-background-remove-hover: var(--theme-color-baseLightened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --pill-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --pill-color: var(--text-muted, white);
  --pill-color-hover: var(--text-normal, white);
  --pill-color-remove: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --pill-color-remove-hover: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --pill-focus-left-adjust: 0;
  --pill-focus-width: 100%;
  --prompt-background: var(--background-primary, white);
  --prompt-border-width: var(--border-width, 0);
  --r-background-color: var(--background-primary, white);
  --r-block-margin: 20px;
  --r-code-font: var(--font-monospace-theme, ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace);
  --r-heading-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --r-heading-font-weight: var(--h1-weight, 100);
  --r-heading-letter-spacing: normal;
  --r-heading-line-height: 1.2;
  --r-heading-margin: 0.67em 0 0 0;
  --r-heading-text-shadow: none;
  --r-heading-text-transform: none;
  --r-heading1-size: 2.5em;
  --r-heading1-text-shadow: none;
  --r-heading2-size: 1.6em;
  --r-heading3-size: 1.3em;
  --r-heading4-size: 1em;
  --r-link-color: var(--link-color, hsl(258, 88%, 66%));
  --r-link-color-hover: var(--link-color-hover, hsl(255, 89.76%, 75.9%));
  --r-main-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --r-main-font: var(--font-text-theme, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  --r-main-font-size: 42px;
  --radius-l: 0.75rem;
  --radius-m: 0.5rem;
  --radius-s: 0.25rem;
  --radius-xl: 1rem;
  --raised-background: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--background-primary, transparent);
  --ribbon-width: 3em;
  --scrollbar-radius: var(--radius-l, 0.75rem);
  --search-clear-button-color: var(--theme-color-base, hsl(30, 80%, 50%));
  --search-icon-color: var(--theme-color-base, hsl(30, 80%, 50%));
  --search-result-background: var(--background-primary, white);
  --secondary: var(--interactive-accent, var(--theme-color-base, hsl(30, 80%, 50%)));
  --setting-group-heading-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --setting-group-heading-size: var(--font-ui-medium, 1rem);
  --setting-items-background: var(--background-primary-alt, none);
  --setting-items-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --setting-items-padding: var(--size-4-5, 0);
  --setting-items-radius: var(--radius-l, 0);
  --shadow-l: 0 0 0.2rem
      color-mix(in srgb, var(--theme-color-shadow) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, var(--theme-color-shadow) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, var(--theme-color-shadow) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, var(--theme-color-shadow) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, var(--theme-color-shadow) 10%, transparent);
  --shadow-s: 0 0 0.05rem
      color-mix(in srgb, var(--theme-color-shadow) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, var(--theme-color-shadow) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, var(--theme-color-shadow) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, var(--theme-color-shadow) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, var(--theme-color-shadow) 10%, transparent);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --shiki-code-background: var(--code-background, light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  ));
  --shiki-code-block-border-radius: var(--code-radius, 0.25rem);
  --shiki-code-block-spacing: var(--p-spacing, 1em);
  --shiki-code-comment: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --shiki-code-function: var(--color-green, hsl(from hsl(30, 80%, 50%) 124 s l));
  --shiki-code-important: var(--color-orange, hsl(from hsl(30, 80%, 50%) 27 s l));
  --shiki-code-keyword: var(--color-pink, hsl(from hsl(30, 80%, 50%) 331 s l));
  --shiki-code-normal: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --shiki-code-property: var(--color-cyan, hsl(from hsl(30, 80%, 50%) 179 s l));
  --shiki-code-punctuation: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --shiki-code-string: var(--color-yellow, hsl(from hsl(30, 80%, 50%) 57 s l));
  --shiki-code-value: var(--color-purple, hsl(from hsl(30, 80%, 50%) 253 s l));
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --shiki-gutter-text-color: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --shiki-terminal-dots-color: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --shiki-tooltip-background: var(--background-modifier-message, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --sidebar-markdown-font-size: calc(var(--font-text-size)*var(--theme-value-sidebarFontScalingFactor));
  --slider-track-background: var(--theme-color-baseTransparent50, hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  ));
  --status-bar-background: var(--theme-color-gradientTop, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --status-bar-border-color: var(--divider-color, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --status-bar-font-size: var(--font-ui-smaller, 0.7rem);
  --status-bar-radius: var(--radius-m, 0.5rem 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-normal, black);
  --suggestion-background: var(--background-primary, white);
  --sync-avatar-color-1: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --sync-avatar-color-2: var(--color-orange, hsl(from hsl(30, 80%, 50%) 27 s l));
  --sync-avatar-color-3: var(--color-yellow, hsl(from hsl(30, 80%, 50%) 57 s l));
  --sync-avatar-color-4: var(--color-green, hsl(from hsl(30, 80%, 50%) 124 s l));
  --sync-avatar-color-5: var(--color-cyan, hsl(from hsl(30, 80%, 50%) 179 s l));
  --sync-avatar-color-6: var(--color-blue, hsl(from hsl(30, 80%, 50%) 219 s l));
  --sync-avatar-color-7: var(--color-purple, hsl(from hsl(30, 80%, 50%) 253 s l));
  --sync-avatar-color-8: var(--color-pink, hsl(from hsl(30, 80%, 50%) 331 s l));
  --tab-background-active: var(--background-primary, white);
  --tab-background-inactive: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --tab-container-background: var(--background-secondary, transparent);
  --tab-curve: calc(var(--tab-radius)*0.5);
  --tab-font-size: var(--font-ui-small, 0.8rem);
  --tab-outline-color: var(--divider-color, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --tab-outline-width: 0;
  --tab-radius: var(--radius-s, 0.25em);
  --tab-radius-active: 0.25em;
  --tab-stacked-font-size: var(--font-ui-small, 0.8rem);
  --tab-stacked-header-width: var(--header-height, calc(18px + 1rem));
  --tab-switcher-background: var(--background-secondary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --tab-switcher-preview-background-shadow: var(--shadow-l, 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 10%, transparent));
  --tab-switcher-preview-radius: var(--radius-xl, 1rem);
  --tab-text-color: var(--theme-color-baseTransparent50, hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  ));
  --tab-text-color-active: var(--theme-color-baseTransparent50, hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  ));
  --tab-text-color-focused: var(--theme-color-baseDarkened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --tab-text-color-focused-active: var(--theme-color-baseDarkened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --tab-text-color-focused-active-current: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --tab-text-color-focused-highlighted: var(--theme-color-base, hsl(30, 80%, 50%));
  --table-add-button-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --table-border-color: var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(30, 80%, 50%));
  --table-drag-handle-color: var(--text-faint, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --table-drag-handle-color-active: var(--text-on-accent, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --table-header-border-color: var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --table-header-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --table-selection-border-color: var(--interactive-accent, hsl(30, 80%, 50%));
  --tag-background: hsl(
    var(--accent-h),
    var(--accent-s),
    var(--accent-l),
    0.15
  );
  --tag-color: hsl(
    var(--accent-h),
    calc(var(--accent-s)),
    calc(var(--accent-l)*0.9)
  );
  --tag-weight: 400;
  --tertiary: var(--interactive-accent-hover, var(--theme-color-base, hsl(30, 80%, 50%)));
  --text-error: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --text-faint: var(--theme-color-baseDarkened70, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --text-muted: color-mix(in srgb, var(--text-normal), transparent 30%);
  --text-normal: var(--theme-color-baseDarkened90, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --text-on-accent: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --text-success: var(--color-green, hsl(from hsl(30, 80%, 50%) 124 s l));
  --text-warning: var(--color-orange, hsl(from hsl(30, 80%, 50%) 27 s l));
  --textHighlight: var(--background-modifier-hover, var(--theme-color-base, hsl(30, 80%, 50%)));
  --theme-cardAspectRatio: auto;
  --theme-cardImageFit: contain;
  --theme-color-activeLineHighlight: var(--theme-color-baseTransparent12, hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --theme-color-audioRecordingActive: var(--theme-color-redDarkened, hsl(
    from hsl(from hsl(30, 80%, 50%) 356 s l) h calc(s * 1.5) calc(l * 0.5)
  ));
  --theme-color-base: hsl(var(--base-h), var(--base-s), var(--base-l));
  --theme-color-baseDarkened12: color-mix(
    in srgb,
    var(--theme-color-base),
    black 12.5%
  );
  --theme-color-baseDarkened25: color-mix(
    in srgb,
    var(--theme-color-base),
    black 25%
  );
  --theme-color-baseDarkened40: color-mix(
    in srgb,
    var(--theme-color-base),
    black 40%
  );
  --theme-color-baseDarkened60: color-mix(
    in srgb,
    var(--theme-color-base),
    black 60%
  );
  --theme-color-baseDarkened70: color-mix(
    in srgb,
    var(--theme-color-base),
    black 70%
  );
  --theme-color-baseDarkened80: color-mix(
    in srgb,
    var(--theme-color-base),
    black 80%
  );
  --theme-color-baseDarkened85: color-mix(
    in srgb,
    var(--theme-color-base),
    black 85%
  );
  --theme-color-baseDarkened90: color-mix(
    in srgb,
    var(--theme-color-base),
    black 90%
  );
  --theme-color-baseLightened12: color-mix(
    in srgb,
    var(--theme-color-base),
    white 12.5%
  );
  --theme-color-baseLightened25: color-mix(
    in srgb,
    var(--theme-color-base),
    white 25%
  );
  --theme-color-baseLightened40: color-mix(
    in srgb,
    var(--theme-color-base),
    white 40%
  );
  --theme-color-baseLightened60: color-mix(
    in srgb,
    var(--theme-color-base),
    white 60%
  );
  --theme-color-baseLightened70: color-mix(
    in srgb,
    var(--theme-color-base),
    white 70%
  );
  --theme-color-baseLightened80: color-mix(
    in srgb,
    var(--theme-color-base),
    white 80%
  );
  --theme-color-baseLightened85: color-mix(
    in srgb,
    var(--theme-color-base),
    white 85%
  );
  --theme-color-baseLightened95: color-mix(
    in srgb,
    var(--theme-color-base),
    white 95%
  );
  --theme-color-baseTransparent06: hsl(
    from var(--theme-color-base) h s l / 0.06
  );
  --theme-color-baseTransparent12: hsl(
    from var(--theme-color-base) h s l / 0.12
  );
  --theme-color-baseTransparent25: hsl(
    from var(--theme-color-base) h s l / 0.25
  );
  --theme-color-baseTransparent35: hsl(
    from var(--theme-color-base) h s l / 0.35
  );
  --theme-color-baseTransparent50: hsl(
    from var(--theme-color-base) h s l / 0.5
  );
  --theme-color-baseTransparent75: hsl(
    from var(--theme-color-base) h s l / 0.75
  );
  --theme-color-blueDarkened: hsl(
    from var(--color-blue) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-blueLightened: hsl(
    from var(--color-blue) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-calendarBg: light-dark(var(--theme-color-baseLightened85), var(--theme-color-baseDarkened80));
  --theme-color-calendarDayBg: var(--theme-color-lightenTransparent75, hsl(from white h s l / 0.75));
  --theme-color-card: var(--nav-item-color, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-cardBg: var(--background-primary, white);
  --theme-color-cardBgHover: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-cardHover: var(--nav-item-color-hover, white);
  --theme-color-communityItemBg: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-communityItemBgActive: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-communityItemBgHover: var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --theme-color-communityItemBgSelected: var(--theme-color-baseLightened12, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 12.5%
  ));
  --theme-color-contentItemBg: var(--theme-color-lightenTransparent50, hsl(from white h s l / 0.5));
  --theme-color-contentItemBgActive: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-contentItemBgHover: var(--theme-color-lightenTransparent25, hsl(from white h s l / 0.25));
  --theme-color-control: light-dark(
    var(--theme-color-baseDarkened70),
    var(--theme-color-baseLightened60)
  );
  --theme-color-controlActive: light-dark(var(--theme-color-baseLightened95),var(--theme-color-baseDarkened90));
  --theme-color-controlBg: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --theme-color-controlBgActive: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-controlBgHover: light-dark(var(--theme-color-baseLightened40), var(--theme-color-baseDarkened40));
  --theme-color-controlContentArea: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-controlContentAreaHover: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-controlHasActiveMenu: light-dark(var(--theme-color-baseLightened80), var(--theme-color-baseDarkened80));
  --theme-color-controlHover: light-dark(var(--theme-color-baseLightened95), var(--theme-color-baseDarkened90));
  --theme-color-controlLightweightActive: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --theme-color-controlLowWeightBg: var(--theme-color-lightenTransparent50, hsl(from white h s l / 0.5));
  --theme-color-controlSetBg: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-controlText: var(--theme-color-baseDarkened70, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --theme-color-controlTextHover: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-controlUIHover: var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --theme-color-controlUISelected: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-cyanDarkened: hsl(
    from var(--color-cyan) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-cyanLightened: hsl(
    from var(--color-cyan) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-darkenTransparent06: hsl(from black h s l / 0.06);
  --theme-color-darkenTransparent12: hsl(from black h s l / 0.12);
  --theme-color-darkenTransparent25: hsl(from black h s l / 0.25);
  --theme-color-darkenTransparent50: hsl(from black h s l / 0.5);
  --theme-color-darkenTransparent75: hsl(from black h s l / 0.75);
  --theme-color-dataviewEmpty: light-dark(
    var(--theme-color-baseLightened40),
    var(--theme-color-baseDarkened40)
  );
  --theme-color-dragTarget: var(--theme-color-baseTransparent50, hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  ));
  --theme-color-dragTargetBg: var(--theme-color-baseTransparent25, hsl(
    from hsl(30, 80%, 50%) h s l / 0.25
  ));
  --theme-color-emptyStateBg: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-gradientBottom: color-mix(
    in srgb,
    var(--theme-color-base),
    white calc(100%*(0.5 - var(--theme-value-gradientContrast)*0.5))
  );
  --theme-color-gradientCardsetBottom: var(--theme-color-baseTransparent06, hsl(
    from hsl(30, 80%, 50%) h s l / 0.06
  ));
  --theme-color-gradientCardsetGeneratedBottom: var(
    --theme-color-baseTransparent12
  , hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --theme-color-gradientCardsetGeneratedTop: var(
    --theme-color-baseTransparent35
  , hsl(
    from hsl(30, 80%, 50%) h s l / 0.35
  ));
  --theme-color-gradientCardsetTop: var(--theme-color-baseTransparent12, hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --theme-color-gradientDarkenedBottom: color-mix(
    in srgb,
    var(--theme-color-base),
    white calc(100%*(0.5 - var(--theme-value-gradientContrast)*1.25))
  );
  --theme-color-gradientDarkenedTop: color-mix(
    in srgb,
    var(--theme-color-base),
    white calc(100%*(0.5 - var(--theme-value-gradientContrast)*0.25))
  );
  --theme-color-gradientTop: color-mix(
    in srgb,
    var(--theme-color-base),
    white calc(100%*(0.5 + var(--theme-value-gradientContrast)*0.5))
  );
  --theme-color-graphLine: black;
  --theme-color-graphViewBg: transparent;
  --theme-color-greenDarkened: hsl(
    from var(--color-green) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-greenLightened: hsl(
    from var(--color-green) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-greenTransparent25: hsl(from var(--color-green) h s l / 0.25);
  --theme-color-greenTransparent75: hsl(from var(--color-green) h s l / 0.75);
  --theme-color-hotkey: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-inputBorder: var(--theme-color-baseLightened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --theme-color-inputPlaceholder: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-interactiveActive: var(--theme-color-baseLightened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --theme-color-jiraIssueDanger: white;
  --theme-color-jiraIssueDangerBg: var(--theme-color-redTransparent25, hsl(from hsl(from hsl(30, 80%, 50%) 356 s l) h s l / 0.25));
  --theme-color-jiraIssueDeleteBg: var(--color-red, hsl(from hsl(30, 80%, 50%) 356 s l));
  --theme-color-jiraIssueInfoBg: light-dark(
    var(--theme-color-blueLightened),
    var(--theme-color-blueDarkened)
  );
  --theme-color-jiraIssueStatus: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --theme-color-jiraIssueStatusBg: light-dark(
    var(--theme-color-baseDarkened90),
    var(--theme-color-baseDarkened90)
  );
  --theme-color-jiraIssueSuccessBg: light-dark(
    var(--theme-color-greenLightened),
    var(--theme-color-greenDarkened)
  );
  --theme-color-jiraIssueTableStripe: light-dark(
    var(--theme-color-lightenTransparent50),
    var(--theme-color-darkenTransparent50)
  );
  --theme-color-jiraIssueWarningBg: light-dark(control
    var(--theme-color-yellowLightened),
    var(--theme-color-yellowDarkened)
  );
  --theme-color-kanbanLaneBg: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-lightenTransparent06: hsl(from white h s l / 0.06);
  --theme-color-lightenTransparent12: hsl(from white h s l / 0.12);
  --theme-color-lightenTransparent25: hsl(from white h s l / 0.25);
  --theme-color-lightenTransparent50: hsl(from white h s l / 0.5);
  --theme-color-lightenTransparent75: hsl(from white h s l / 0.75);
  --theme-color-lineNumbers: light-dark(var(--theme-color-baseLightened60), var(--theme-color-baseDarkened60));
  --theme-color-log: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-logBg: var(--theme-color-baseLightened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --theme-color-menuBg: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-mobileToolbarBg: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-modalContentBg: var(--theme-color-baseLightened60, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --theme-color-navFileTag: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-navFileTagActive: var(--nav-item-color-active, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-navFileTagActiveBorder: var(--nav-item-color-active, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-navFileTagBorder: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-navigationButtonBgHover: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-notice: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --theme-color-noticeBg: var(--theme-color-baseDarkened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-orangeDarkened: hsl(
    from var(--color-orange) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-orangeLightened: hsl(
    from var(--color-orange) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-orangeTransparent25: hsl(from var(--color-orange) h s l / 0.25);
  --theme-color-orangeTransparent75: hsl(from var(--color-orange) h s l / 0.75);
  --theme-color-pinkDarkened: hsl(
    from var(--color-pink) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-pinkLightened: hsl(
    from var(--color-pink) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-promptInstructions: var(--theme-color-baseDarkened40, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 40%
  ));
  --theme-color-purpleDarkened: hsl(
    from var(--color-purple) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-purpleLightened: hsl(
    from var(--color-purple) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-queryComponentBg: var(--theme-color-baseTransparent12, hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --theme-color-redDarkened: hsl(
    from var(--color-red) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-redLightened: hsl(
    from var(--color-red) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-redTransparent25: hsl(from var(--color-red) h s l / 0.25);
  --theme-color-redTransparent75: hsl(from var(--color-red) h s l / 0.75);
  --theme-color-settingsBg: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-settingsBgStripe: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --theme-color-settingsGroupBg: var(--theme-color-lightenTransparent50, hsl(from white h s l / 0.5));
  --theme-color-shadow: var(--theme-color-baseDarkened25, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ));
  --theme-color-suggestionBg: var(--theme-color-baseLightened85, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 85%
  ));
  --theme-color-switcherBgActive: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-tabBgInactiveHover: var(--theme-color-baseTransparent75, hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  ));
  --theme-color-tabNavActiveBg: light-dark(var(--theme-color-baseLightened70), var(--theme-color-baseDarkened70));
  --theme-color-tabNavBg: light-dark(var(--theme-color-baseLightened60), var(--theme-color-baseDarkened60));
  --theme-color-tableHeaderBg: var(--theme-color-baseTransparent12, hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ));
  --theme-color-tagBgHover: hsl(
    var(--accent-h),
    calc(var(--accent-s)*1.02),
    calc(var(--accent-l)*1.035),
    0.1
  );
  --theme-color-tagBgSidebar: hsl(
    var(--accent-h),
    calc(var(--accent-s)*1.2),
    calc(var(--accent-l)*1),
    0.15
  );
  --theme-color-tagBgSidebarHover: hsl(
    var(--accent-h),
    calc(var(--accent-s)*1.22),
    calc(var(--accent-l)*1.15),
    0.15
  );
  --theme-color-tagHover: hsl(
    var(--accent-h),
    calc(var(--accent-s)*1.02),
    calc(var(--accent-l)*1.035)
  );
  --theme-color-tagSidebar: hsl(
    var(--accent-h),
    calc(var(--accent-s)*1),
    calc(var(--accent-l)*0.4)
  );
  --theme-color-tagSidebarHover: hsl(
    var(--accent-h),
    calc(var(--accent-s)*1.02),
    calc(var(--accent-l)*0.46)
  );
  --theme-color-textMeta: var(--theme-color-base, hsl(30, 80%, 50%));
  --theme-color-textSelected: var(--theme-color-baseLightened80, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ));
  --theme-color-warningBg: var(--theme-color-baseLightened95, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ));
  --theme-color-yellowDarkened: hsl(
    from var(--color-yellow) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-yellowLightened: hsl(
    from var(--color-yellow) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-yellowTransparent25: hsl(from var(--color-yellow) h s l / 0.25);
  --theme-color-yellowTransparent75: hsl(from var(--color-yellow) h s l / 0.75);
  --theme-gradient-DarkenedTopToBottom: linear-gradient(
    0deg,
    var(--theme-color-gradientDarkenedTop) 0%,
    var(--theme-color-gradientDarkenedBottom) 100%
  );
  --theme-gradient-bottomToTop: linear-gradient(
    0deg,
    var(--theme-color-gradientBottom) 0%,
    var(--theme-color-gradientTop) 100%
  );
  --theme-gradient-topToBottom: linear-gradient(
    0deg,
    var(--theme-color-gradientTop) 0%,
    var(--theme-color-gradientBottom) 100%
  );
  --theme-grid-cardSet: repeat(
    auto-fit,
    minmax(var(--theme-length-cardMinWidth), var(--theme-length-cardMaxWidth))
  );
  --theme-length-cardImageHeight: 25em;
  --theme-length-cardMaxWidth: 1fr;
  --theme-length-cardMinWidth: 8em;
  --theme-length-checkboxBorderWidth: 1px;
  --theme-length-closeButtonWidth: 1.5rem;
  --theme-length-collapseIndicatorSize: 1.5rem;
  --theme-length-controlSetSpacing: 0.5rem;
  --theme-length-fullBorderRadius: 9999px;
  --theme-length-radiusXS: 0.125rem;
  --theme-length-statusBarHeight: 2rem;
  --theme-padding-block: var(--theme-padding-blockVertical)
    var(--theme-padding-blockHorizontal, 0.75em
    1.5em);
  --theme-padding-blockHorizontal: 1.5em;
  --theme-padding-blockVertical: 0.75em;
  --theme-setting-lineWidth: 60;
  --theme-shadow-control: 0 1px 2px
    hsl(
      var(--base-h),
      calc(var(--base-s)*1.5),
      calc(var(--base-l)*0.25),
      0.5
    );
  --theme-shadow-indent: 0 0 0.2rem
      color-mix(in srgb, var(--theme-color-shadow) 3%, transparent),
    0 0 0.2rem color-mix(in srgb, var(--theme-color-shadow) 6%, transparent),
    0 0 0.4rem color-mix(in srgb, var(--theme-color-shadow) 9%, transparent),
    0 0 1.2rem color-mix(in srgb, var(--theme-color-shadow) 12%, transparent),
    0 0 2rem color-mix(in srgb, var(--theme-color-shadow) 15%, transparent);
  --theme-shadow-indent-small: 0 0 0.05rem
      color-mix(in srgb, var(--theme-color-shadow) 4%, transparent),
    0 0 0.2rem color-mix(in srgb, var(--theme-color-shadow) 8%, transparent),
    0 0 0.6rem color-mix(in srgb, var(--theme-color-shadow) 12%, transparent),
    0 0 1rem color-mix(in srgb, var(--theme-color-shadow) 16%, transparent),
    0 0 2rem color-mix(in srgb, var(--theme-color-shadow) 20%, transparent);
  --theme-shadow-input: 0 1px 2px
      hsl(
        var(--base-h),
        calc(var(--base-s)*1.5),
        calc(var(--base-l)*0.25),
        0.2
      ),
    0 3.4px 6.7px
      hsl(
        var(--base-h),
        calc(var(--base-s)*1),
        calc(var(--base-l)*0.25),
        0.15
      ),
    0 15px 30px
      hsl(
        var(--base-h),
        calc(var(--base-s)*0.75),
        calc(var(--base-l)*0.25),
        0.05
      );
  --theme-value-gradientContrast: 0.2;
  --theme-value-headingScaleFactor: 1.2;
  --theme-value-sidebarFontScalingFactor: 0.8;
  --titleFont: var(--font-text-theme, var(--font-default, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  ));
  --titlebar-text-color: var(--text-muted, color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%));
  --titlebar-text-color-focused: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --traffic-lights-offset-x: var(--header-height, calc(18px + 1rem));
  --traffic-lights-offset-y: var(--header-height, calc(18px + 1rem));
  --vault-profile-color: var(--text-normal, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --vault-profile-color-hover: var(--theme-color-controlHover, light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  )));
  --vault-profile-font-size: var(--font-ui-small, 0.8rem);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --h6-size: calc(var(--theme-value-sidebarFontScalingFactor)*var(--font-text-size));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.925 0.625 0.325);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ));
  --h6-size: calc(var(--theme-value-sidebarFontScalingFactor)*var(--font-text-size));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: color(srgb 0.925 0.625 0.325);
  color: color(srgb 0.09 0.05 0.01);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, color(srgb 0.09 0.05 0.01));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.09 0.05 0.01) none 0px;
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, color(srgb 0.09 0.05 0.01));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.09 0.05 0.01) none 0px;
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, color(srgb 0.09 0.05 0.01));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.09 0.05 0.01) none 0px;
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, color(srgb 0.09 0.05 0.01));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.09 0.05 0.01) none 0px;
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .text-highlight {
  color: var(--text-normal, color(srgb 0.09 0.05 0.01));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.09 0.05 0.01) none 0px;
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body del {
  color: color(srgb 0.09 0.05 0.01);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.09 0.05 0.01) none 0px;
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--tab-text-color-focused-active-current, color(srgb 0.09 0.05 0.01));
  font-size: 12.8px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(230, 128, 26);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(230, 128, 26));
  border-color: rgb(230, 128, 26);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, color(srgb 0.09 0.05 0.01 / 0.7));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.09 0.05 0.01 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.09 0.05 0.01 / 0.7);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  --background-input: light-dark(hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  ), hsl(from black h s l / 0.06));
  --background-modifier-active-hover: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --background-modifier-active-hover-alt: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --background-modifier-border: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --background-modifier-border-focus: hsl(30, 80%, 50%);
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: hsl(from hsl(30, 80%, 50%) 356 s l);
  --background-modifier-error-hover: hsl(from hsl(30, 80%, 50%) 356 s l);
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: hsl(30, 80%, 50%);
  --background-modifier-message: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --background-modifier-success: hsl(from hsl(30, 80%, 50%) 124 s l);
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: white;
  --background-primary-alt: #fafafa;
  --background-prompt: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --background-secondary: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --background-secondary-alt: #fcfcfc;
  --base-h: 30;
  --base-l: 50%;
  --base-s: 80%;
  --blockquote-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --blur-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 0.75em
    1.5em;
  --callout-question: 236, 117, 0;
  --callout-radius: 0.25rem;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: white;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0.25rem;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: hsl(258, 150%, 50%);
  --checkbox-border-color: hsl(30, 80%, 50%);
  --checkbox-border-color-hover: hsl(30, 80%, 50%);
  --checkbox-color: hsl(30, 80%, 50%);
  --checkbox-color-hover: hsl(30, 80%, 50%);
  --checkbox-marker-color: white;
  --checkbox-radius: 0.25rem;
  --checkbox-size: 16px;
  --checklist-done-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%);
  --clickable-icon-radius: 0.25rem;
  --code-background: light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  );
  --code-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --code-bracket-background: hsl(30, 80%, 50%);
  --code-comment: light-dark(
    hsl(from black h s l / 0.5),
    hsl(from white h s l / 0.5)
  );
  --code-function: hsl(from hsl(30, 80%, 50%) 57 s l);
  --code-important: hsl(from hsl(30, 80%, 50%) 27 s l);
  --code-keyword: hsl(from hsl(30, 80%, 50%) 331 s l);
  --code-normal: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  );
  --code-operator: hsl(from hsl(30, 80%, 50%) 356 s l);
  --code-property: hsl(from hsl(30, 80%, 50%) 179 s l);
  --code-punctuation: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%);
  --code-radius: 0.25rem;
  --code-size: 0.875em;
  --code-string: hsl(from hsl(30, 80%, 50%) 124 s l);
  --code-tag: hsl(from hsl(30, 80%, 50%) 356 s l);
  --code-value: hsl(from hsl(30, 80%, 50%) 253 s l);
  --collapse-icon-color: hsl(30, 80%, 50%);
  --collapse-icon-color-collapsed: hsl(30, 80%, 50%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-blue: hsl(from hsl(30, 80%, 50%) 219 s l);
  --color-cyan: hsl(from hsl(30, 80%, 50%) 179 s l);
  --color-green: hsl(from hsl(30, 80%, 50%) 124 s l);
  --color-orange: hsl(from hsl(30, 80%, 50%) 27 s l);
  --color-pink: hsl(from hsl(30, 80%, 50%) 331 s l);
  --color-purple: hsl(from hsl(30, 80%, 50%) 253 s l);
  --color-red: hsl(from hsl(30, 80%, 50%) 356 s l);
  --color-yellow: hsl(from hsl(30, 80%, 50%) 57 s l);
  --divider-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --divider-color-hover: hsl(30, 80%, 50%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --empty-pane-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --flair-background: hsl(30, 80%, 50%);
  --flair-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-interface-theme: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-mermaid: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-monospace: '??', ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace;
  --font-monospace-theme: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace;
  --font-print: '??', '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 'Arial';
  --font-text: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-text-theme: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-weight: var(--link-weight, 400);
  --graph-line: #d4d4d4;
  --graph-node: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%);
  --graph-node-attachment: hsl(from hsl(30, 80%, 50%) 57 s l);
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: hsl(from hsl(30, 80%, 50%) 124 s l);
  --graph-node-unresolved: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --graph-text: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  );
  --h1-line-height: 1.5;
  --h1-size: 39.81312px;
  --h2-line-height: 1.5;
  --h2-size: 33.1776px;
  --h3-line-height: 1.5;
  --h3-size: 27.648px;
  --h4-line-height: 1.5;
  --h4-size: 23.04px;
  --h5-line-height: 1.5;
  --h5-size: 19.2px;
  --h6-line-height: 1.5;
  --h6-size: 16px;
  --header-height: calc(18px + 1rem);
  --heading-formatting: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --heading-spacing: 0.67em;
  --hr-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --interactive-accent: hsl(30, 80%, 50%);
  --interactive-accent-hover: hsl(30, 80%, 50%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 0.5rem;
  --menu-shadow: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 10%, transparent);
  --pdf-background: white;
  --pdf-page-background: white;
  --pdf-sidebar-background: white;
  --popover-font-size: 16px;
  --r-background-color: white;
  --r-code-font: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace;
  --r-heading-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  );
  --r-heading-font-weight: 100;
  --r-link-color: hsl(258, 88%, 66%);
  --r-link-color-hover: hsl(255, 89.76%, 75.9%);
  --r-main-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  );
  --r-main-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --raised-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --resizer-size: 20px;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 0.75rem;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: hsl(30, 80%, 50%);
  --search-icon-color: hsl(30, 80%, 50%);
  --search-result-background: white;
  --setting-group-heading-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  );
  --setting-group-heading-size: 1rem;
  --setting-group-heading-weight: 600;
  --setting-items-background: none;
  --setting-items-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --setting-items-padding: 0;
  --setting-items-radius: 0;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-l: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 10%, transparent);
  --shadow-s: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 10%, transparent);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --shiki-active-tab-border-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%);
  --shiki-code-background: light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  );
  --shiki-code-block-border-radius: 0.25rem;
  --shiki-code-block-spacing: 1em;
  --shiki-code-comment: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --shiki-code-function: hsl(from hsl(30, 80%, 50%) 124 s l);
  --shiki-code-important: hsl(from hsl(30, 80%, 50%) 27 s l);
  --shiki-code-keyword: hsl(from hsl(30, 80%, 50%) 331 s l);
  --shiki-code-normal: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%);
  --shiki-code-property: hsl(from hsl(30, 80%, 50%) 179 s l);
  --shiki-code-punctuation: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%);
  --shiki-code-string: hsl(from hsl(30, 80%, 50%) 57 s l);
  --shiki-code-value: hsl(from hsl(30, 80%, 50%) 253 s l);
  --shiki-gutter-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --shiki-gutter-text-color-highlight: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%);
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --shiki-tooltip-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --suggestion-background: white;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: hsl(from hsl(30, 80%, 50%) 356 s l);
  --sync-avatar-color-2: hsl(from hsl(30, 80%, 50%) 27 s l);
  --sync-avatar-color-3: hsl(from hsl(30, 80%, 50%) 57 s l);
  --sync-avatar-color-4: hsl(from hsl(30, 80%, 50%) 124 s l);
  --sync-avatar-color-5: hsl(from hsl(30, 80%, 50%) 179 s l);
  --sync-avatar-color-6: hsl(from hsl(30, 80%, 50%) 219 s l);
  --sync-avatar-color-7: hsl(from hsl(30, 80%, 50%) 253 s l);
  --sync-avatar-color-8: hsl(from hsl(30, 80%, 50%) 331 s l);
  --tab-background-active: white;
  --tab-background-inactive: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --tab-curve: 0.125em;
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 0.8rem;
  --tab-outline-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --tab-radius: 0.25em;
  --tab-stacked-font-size: 0.8rem;
  --tab-stacked-header-width: calc(18px + 1rem);
  --tab-switcher-background: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), transparent);
  --tab-switcher-preview-background-shadow: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 10%, transparent);
  --tab-switcher-preview-radius: 1rem;
  --tab-switcher-preview-shadow: none;
  --tab-switcher-preview-shadow-active: none;
  --tab-text-color: hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  );
  --tab-text-color-active: hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  );
  --tab-text-color-focused: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --tab-text-color-focused-active: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --tab-text-color-focused-active-current: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  );
  --tab-text-color-focused-highlighted: hsl(30, 80%, 50%);
  --table-add-button-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(30, 80%, 50%);
  --table-drag-handle-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --table-drag-handle-color-active: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --table-header-background: transparent;
  --table-header-border-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --table-header-border-width: 1px;
  --table-header-color: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  );
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(30, 80%, 50%);
  --table-text-size: 16px;
  --tag-background: hsl(
    258,
    88%,
    66%,
    0.15
  );
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(
    258,
    88%,
    59.4%
  );
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: hsl(from hsl(30, 80%, 50%) 356 s l);
  --text-faint: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ), transparent 30%);
  --text-normal: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  );
  --text-on-accent: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: hsl(from hsl(30, 80%, 50%) 124 s l);
  --text-warning: hsl(from hsl(30, 80%, 50%) 27 s l);
  --theme-color-activeLineHighlight: hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  );
  --theme-color-audioRecordingActive: hsl(
    from hsl(from hsl(30, 80%, 50%) 356 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-base: hsl(30, 80%, 50%);
  --theme-color-baseDarkened12: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 12.5%
  );
  --theme-color-baseDarkened25: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --theme-color-baseDarkened40: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 40%
  );
  --theme-color-baseDarkened60: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 60%
  );
  --theme-color-baseDarkened70: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --theme-color-baseDarkened80: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-baseDarkened85: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 85%
  );
  --theme-color-baseDarkened90: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  );
  --theme-color-baseLightened12: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 12.5%
  );
  --theme-color-baseLightened25: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --theme-color-baseLightened40: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 40%
  );
  --theme-color-baseLightened60: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --theme-color-baseLightened70: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 70%
  );
  --theme-color-baseLightened80: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-baseLightened85: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 85%
  );
  --theme-color-baseLightened95: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --theme-color-baseTransparent06: hsl(
    from hsl(30, 80%, 50%) h s l / 0.06
  );
  --theme-color-baseTransparent12: hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  );
  --theme-color-baseTransparent25: hsl(
    from hsl(30, 80%, 50%) h s l / 0.25
  );
  --theme-color-baseTransparent35: hsl(
    from hsl(30, 80%, 50%) h s l / 0.35
  );
  --theme-color-baseTransparent50: hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  );
  --theme-color-baseTransparent75: hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  );
  --theme-color-blueDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-blueLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-calendarBg: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 85%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-calendarDayBg: hsl(from white h s l / 0.75);
  --theme-color-card: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-cardBg: white;
  --theme-color-cardBgHover: hsl(30, 80%, 50%);
  --theme-color-cardHover: white;
  --theme-color-communityItemBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-communityItemBgActive: hsl(30, 80%, 50%);
  --theme-color-communityItemBgHover: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --theme-color-communityItemBgSelected: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 12.5%
  );
  --theme-color-contentItemBgActive: hsl(30, 80%, 50%);
  --theme-color-control: light-dark(
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ),
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  )
  );
  --theme-color-controlActive: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ),color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --theme-color-controlBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --theme-color-controlBgActive: hsl(30, 80%, 50%);
  --theme-color-controlBgHover: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 40%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 40%
  ));
  --theme-color-controlContentArea: hsl(30, 80%, 50%);
  --theme-color-controlContentAreaHover: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-controlHasActiveMenu: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  ));
  --theme-color-controlHover: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ));
  --theme-color-controlLightweightActive: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --theme-color-controlLowWeightBg: hsl(from white h s l / 0.5);
  --theme-color-controlSetBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-controlText: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  );
  --theme-color-controlTextHover: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-controlUIHover: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --theme-color-controlUISelected: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-cyanDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 179 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-cyanLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 179 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-dataviewEmpty: light-dark(
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 40%
  ),
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 40%
  )
  );
  --theme-color-dragTarget: hsl(
    from hsl(30, 80%, 50%) h s l / 0.5
  );
  --theme-color-dragTargetBg: hsl(
    from hsl(30, 80%, 50%) h s l / 0.25
  );
  --theme-color-emptyStateBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-gradientBottom: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 40%
  );
  --theme-color-gradientCardsetBottom: hsl(
    from hsl(30, 80%, 50%) h s l / 0.06
  );
  --theme-color-gradientCardsetGeneratedBottom: hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  );
  --theme-color-gradientCardsetGeneratedTop: hsl(
    from hsl(30, 80%, 50%) h s l / 0.35
  );
  --theme-color-gradientCardsetTop: hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  );
  --theme-color-gradientTop: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --theme-color-greenDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-greenLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-greenTransparent25: hsl(from hsl(from hsl(30, 80%, 50%) 124 s l) h s l / 0.25);
  --theme-color-greenTransparent75: hsl(from hsl(from hsl(30, 80%, 50%) 124 s l) h s l / 0.75);
  --theme-color-hotkey: hsl(30, 80%, 50%);
  --theme-color-inputBorder: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --theme-color-inputPlaceholder: hsl(30, 80%, 50%);
  --theme-color-interactiveActive: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --theme-color-jiraIssueDangerBg: hsl(from hsl(from hsl(30, 80%, 50%) 356 s l) h s l / 0.25);
  --theme-color-jiraIssueDeleteBg: hsl(from hsl(30, 80%, 50%) 356 s l);
  --theme-color-jiraIssueInfoBg: light-dark(
    hsl(
    from hsl(from hsl(30, 80%, 50%) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from hsl(30, 80%, 50%) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  );
  --theme-color-jiraIssueStatus: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --theme-color-jiraIssueStatusBg: light-dark(
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  ),
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 90%
  )
  );
  --theme-color-jiraIssueSuccessBg: light-dark(
    hsl(
    from hsl(from hsl(30, 80%, 50%) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from hsl(30, 80%, 50%) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  );
  --theme-color-jiraIssueTableStripe: light-dark(
    hsl(from white h s l / 0.5),
    hsl(from black h s l / 0.5)
  );
  --theme-color-jiraIssueWarningBg: light-dark(control
    hsl(
    from hsl(from hsl(30, 80%, 50%) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from hsl(30, 80%, 50%) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  );
  --theme-color-kanbanLaneBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-lineNumbers: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 60%
  ));
  --theme-color-log: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-logBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 25%
  );
  --theme-color-menuBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-mobileToolbarBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-modalContentBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  );
  --theme-color-navFileTag: hsl(30, 80%, 50%);
  --theme-color-navFileTagActive: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-navFileTagActiveBorder: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-navFileTagBorder: hsl(30, 80%, 50%);
  --theme-color-navigationButtonBgHover: hsl(30, 80%, 50%);
  --theme-color-notice: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --theme-color-noticeBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 80%
  );
  --theme-color-orangeDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 27 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-orangeLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 27 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-orangeTransparent25: hsl(from hsl(from hsl(30, 80%, 50%) 27 s l) h s l / 0.25);
  --theme-color-orangeTransparent75: hsl(from hsl(from hsl(30, 80%, 50%) 27 s l) h s l / 0.75);
  --theme-color-pinkDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 331 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-pinkLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 331 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-promptInstructions: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 40%
  );
  --theme-color-purpleDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 253 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-purpleLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 253 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-queryComponentBg: hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  );
  --theme-color-redDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 356 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-redLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 356 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-redTransparent25: hsl(from hsl(from hsl(30, 80%, 50%) 356 s l) h s l / 0.25);
  --theme-color-redTransparent75: hsl(from hsl(from hsl(30, 80%, 50%) 356 s l) h s l / 0.75);
  --theme-color-settingsBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-settingsBgStripe: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --theme-color-settingsGroupBg: hsl(from white h s l / 0.5);
  --theme-color-shadow: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  );
  --theme-color-suggestionBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 85%
  );
  --theme-color-switcherBgActive: hsl(30, 80%, 50%);
  --theme-color-tabBgInactiveHover: hsl(
    from hsl(30, 80%, 50%) h s l / 0.75
  );
  --theme-color-tabNavActiveBg: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 70%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 70%
  ));
  --theme-color-tabNavBg: light-dark(color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ), color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 60%
  ));
  --theme-color-tableHeaderBg: hsl(
    from hsl(30, 80%, 50%) h s l / 0.12
  );
  --theme-color-tagBgHover: hsl(
    258,
    89.76%,
    68.31%,
    0.1
  );
  --theme-color-tagBgSidebar: hsl(
    258,
    105.6%,
    66%,
    0.15
  );
  --theme-color-tagBgSidebarHover: hsl(
    258,
    107.36%,
    75.9%,
    0.15
  );
  --theme-color-tagHover: hsl(
    258,
    89.76%,
    68.31%
  );
  --theme-color-tagSidebar: hsl(
    258,
    88%,
    26.4%
  );
  --theme-color-tagSidebarHover: hsl(
    258,
    89.76%,
    30.36%
  );
  --theme-color-textMeta: hsl(30, 80%, 50%);
  --theme-color-textSelected: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 80%
  );
  --theme-color-warningBg: color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 95%
  );
  --theme-color-yellowDarkened: hsl(
    from hsl(from hsl(30, 80%, 50%) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-yellowLightened: hsl(
    from hsl(from hsl(30, 80%, 50%) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-yellowTransparent25: hsl(from hsl(from hsl(30, 80%, 50%) 57 s l) h s l / 0.25);
  --theme-color-yellowTransparent75: hsl(from hsl(from hsl(30, 80%, 50%) 57 s l) h s l / 0.75);
  --theme-gradient-bottomToTop: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 40%
  ) 0%,
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ) 100%
  );
  --theme-gradient-topToBottom: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 60%
  ) 0%,
    color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    white 40%
  ) 100%
  );
  --theme-grid-cardSet: repeat(
    auto-fit,
    minmax(8em, 1fr)
  );
  --theme-padding-block: 0.75em
    1.5em;
  --theme-shadow-control: 0 1px 2px
    hsl(
      30,
      120%,
      12.5%,
      0.5
    );
  --theme-shadow-indent: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 3%, transparent),
    0 0 0.2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 6%, transparent),
    0 0 0.4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 9%, transparent),
    0 0 1.2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 12%, transparent),
    0 0 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 15%, transparent);
  --theme-shadow-indent-small: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 4%, transparent),
    0 0 0.2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 8%, transparent),
    0 0 0.6rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 12%, transparent),
    0 0 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 16%, transparent),
    0 0 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(30, 80%, 50%),
    black 25%
  ) 20%, transparent);
  --theme-shadow-input: 0 1px 2px
      hsl(
        30,
        120%,
        12.5%,
        0.2
      ),
    0 3.4px 6.7px
      hsl(
        30,
        80%,
        12.5%,
        0.15
      ),
    0 15px 30px
      hsl(
        30,
        60%,
        12.5%,
        0.05
      );
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: calc(18px + 1rem);
  --traffic-lights-offset-y: calc(18px + 1rem);
  --zoom-multiplier: 1;
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--link-external-color, rgb(138, 92, 245));
  content: "";
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--link-weight, 400);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 4px;
  margin-right: 0px;
  margin-top: -4px;
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 14 14\\' xmlns=\\'http://www.w3.org/2000/svg\\' stroke=\\'black\\' fill=\\'none\\' stroke-width=\\'1\\'%3E%3Cpath d=\\'M6.125,3.938L1.313,3.938L1.313,12.688L10.063,12.688L10.063,7.875M7.875,1.75L12.25,1.75L12.25,6.125M12.25,1.75L6.125,7.875\\'/%3E%3C/svg%3E");
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  scrollbar-color: var(--theme-color-baseTransparent25, color(srgb 0.9 0.5 0.1 / 0.25) rgba(0, 0, 0, 0)) transparent;
  text-decoration: underline 1px;
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px;
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html[saved-theme="light"] body a.internal-link.broken {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px dashed rgba(138, 92, 245, 0.3);
  text-decoration-style: var(--link-unresolved-decoration-style, dashed);
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body dt {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body ol > li {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body ul > li {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, color(srgb 0.27 0.15 0.03));
}

html[saved-theme="light"] body blockquote {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body table {
  color: color(srgb 0.09 0.05 0.01);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  width: 241.219px;
}

html[saved-theme="light"] body td {
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
  color: var(--table-text-color, color(srgb 0.09 0.05 0.01));
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body th {
  background-color: color(srgb 0.9 0.5 0.1 / 0.12);
  border-bottom-color: color(srgb 0.96 0.8 0.64);
  border-left-color: color(srgb 0.96 0.8 0.64);
  border-right-color: color(srgb 0.96 0.8 0.64);
  border-top-color: color(srgb 0.96 0.8 0.64);
  color: var(--table-header-color, color(srgb 0.09 0.05 0.01));
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, color(srgb 0 0 0 / 0.06));
  border-bottom-color: color(srgb 0.925 0.625 0.325);
  border-left-color: color(srgb 0.925 0.625 0.325);
  border-right-color: color(srgb 0.925 0.625 0.325);
  border-top-color: color(srgb 0.925 0.625 0.325);
  color: var(--code-normal, color(srgb 0.09 0.05 0.01));
  font-family: var(--font-monospace, "??", ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
  padding-bottom: 3.5px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 3.5px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, color(srgb 0 0 0 / 0.06));
  border-bottom-color: color(srgb 0.925 0.625 0.325);
  border-left-color: color(srgb 0.925 0.625 0.325);
  border-right-color: color(srgb 0.925 0.625 0.325);
  border-top-color: color(srgb 0.925 0.625 0.325);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body figcaption {
  color: color(srgb 0.09 0.05 0.01);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  ));
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body img {
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body video {
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-radius: 8px;
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: color(srgb 0.09 0.05 0.01 / 0.7);
  border-left-color: color(srgb 0.09 0.05 0.01 / 0.7);
  border-right-color: color(srgb 0.09 0.05 0.01 / 0.7);
  border-top-color: color(srgb 0.09 0.05 0.01 / 0.7);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: color(srgb 0.09 0.05 0.01);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .transclude {
  background-color: var(--embed-background, color(srgb 0.9 0.5 0.1 / 0.12));
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-left-width: 0px;
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--background-primary, rgb(255, 255, 255));
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(230, 128, 26);
  border-left-color: rgb(230, 128, 26);
  border-right-color: rgb(230, 128, 26);
  border-top-color: rgb(230, 128, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: color(srgb 0.09 0.05 0.01 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: color(srgb 0.09 0.05 0.01 / 0.7);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.09 0.05 0.01);
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'4,10.5 20,10.5 20,13.5 4,13.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'4,10.5 20,10.5 20,13.5 4,13.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cline x1=\\'12\\' x2=\\'12\\' y1=\\'5\\' y2=\\'13\\'/%3E%3Cline x1=\\'12\\' x2=\\'12\\' y1=\\'19\\' y2=\\'19\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cline x1=\\'12\\' x2=\\'12\\' y1=\\'5\\' y2=\\'13\\'/%3E%3Cline x1=\\'12\\' x2=\\'12\\' y1=\\'19\\' y2=\\'19\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 128, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cpath d=\\'M7.5,6.852c0.463,-1.049 1.493,-2.872 4.5,-2.852c3.957,0.026 5.001,2.617 5,4.5c-0.002,2.952 -4.963,3.463 -5,7.5\\'/%3E%3Cpath d=\\'M12.25,20l-0.443,-0\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cpath d=\\'M7.5,6.852c0.463,-1.049 1.493,-2.872 4.5,-2.852c3.957,0.026 5.001,2.617 5,4.5c-0.002,2.952 -4.963,3.463 -5,7.5\\'/%3E%3Cpath d=\\'M12.25,20l-0.443,-0\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 128, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.86 0.1);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'12,-12 48,-12 48,36 12,36\\' transform=\\'rotate(45) translate(5,-12)\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'12,-12 48,-12 48,36 12,36\\' transform=\\'rotate(45) translate(5,-12)\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 128, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'15,4.5 6,12 15,19.5 16.75,17.5 10,12 16.75,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'15,4.5 6,12 15,19.5 16.75,17.5 10,12 16.75,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 128, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'9,4.5 18,12 9,19.5 7.25,17.5 14,12 7.25,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'9,4.5 18,12 9,19.5 7.25,17.5 14,12 7.25,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.1 0.153333);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.1 0.153333);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.1 0.153333);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.1 0.153333);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1 0.38 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.86 0.1);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.86 0.1);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.273333 0.1 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.9 0.1 0.153333);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1 0.9 0.153333);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1 0.9 0.153333);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.1 0.9 0.153333);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  color: rgb(255, 255, 255);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: color(srgb 0.09 0.05 0.01);
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
  background-color: color(srgb 0.9 0.5 0.1 / 0.12);
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-left-width: 0px;
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-right-width: 0px;
  border-top-color: color(srgb 0.09 0.05 0.01);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--text-normal, color(srgb 0.09 0.05 0.01));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--background-prompt, color(srgb 0.995 0.975 0.955));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  box-shadow: var(--shadow-l, color(srgb 0.675 0.375 0.075 / 0.02) 0px 0px 3.2px 0px, color(srgb 0.675 0.375 0.075 / 0.04) 0px 3.2px 6.4px 0px, color(srgb 0.675 0.375 0.075 / 0.06) 0px 6.4px 19.2px 0px, color(srgb 0.675 0.375 0.075 / 0.08) 0px 19.2px 32px 0px, color(srgb 0.675 0.375 0.075 / 0.1) 0px 32px 64px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.09 0.05 0.01);
  cursor: grab;
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.09 0.05 0.01) none 0px;
  text-decoration-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--theme-color-controlActive, color(srgb 0.995 0.975 0.955));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.995 0.975 0.955);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.995 0.975 0.955);
  border-right-color: color(srgb 0.995 0.975 0.955);
  border-top-color: color(srgb 0.995 0.975 0.955);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: var(--theme-color-controlActive, color(srgb 0.995 0.975 0.955));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--theme-color-controlBgActive, rgb(230, 128, 26));
  color: var(--theme-color-controlActive, color(srgb 0.995 0.975 0.955));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: color(srgb 0.96 0.8 0.64);
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--theme-color-controlBgActive, rgb(230, 128, 26));
  border-bottom-color: color(srgb 0.995 0.975 0.955);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.995 0.975 0.955);
  border-right-color: color(srgb 0.995 0.975 0.955);
  border-top-color: color(srgb 0.995 0.975 0.955);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--theme-color-controlActive, color(srgb 0.995 0.975 0.955));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--theme-color-controlBgActive, rgb(230, 128, 26));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--theme-color-controlActive, color(srgb 0.995 0.975 0.955));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsl(
    258,
    88%,
    66%,
    0.15
  ));
  --pill-color: var(--tag-color, hsl(
    258,
    88%,
    59.4%
  ));
  --pill-color-remove: var(--tag-color, hsl(
    258,
    88%,
    59.4%
  ));
  --pill-padding-x: var(--tag-padding-x, 1em);
  --pill-weight: var(--tag-weight, 400);
  background-color: var(--theme-color-tagBgSidebar, rgba(134, 82, 255, 0.15));
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--tag-weight, 400);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(44, 8, 127);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 100);
  color: var(--h1-color, color(srgb 0.09 0.05 0.01));
  font-family: var(--theme-setting-headingFont), var(--font-text-theme);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, color(srgb 0.09 0.05 0.01));
  font-size: var(--inline-title-size, 27.648px);
  font-weight: var(--inline-title-weight, 400);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 200);
  color: var(--h2-color, color(srgb 0.09 0.05 0.01));
  font-family: var(--theme-setting-headingFont), var(--font-text-theme);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, color(srgb 0.09 0.05 0.01));
  font-family: var(--inline-title-font, "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 300);
  color: var(--h3-color, color(srgb 0.09 0.05 0.01));
  font-family: var(--theme-setting-headingFont), var(--font-text-theme);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 400);
  color: var(--h4-color, color(srgb 0.09 0.05 0.01));
  font-family: var(--theme-setting-headingFont), var(--font-text-theme);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 500);
  color: var(--h5-color, color(srgb 0.09 0.05 0.01));
  font-family: var(--theme-setting-headingFont), var(--font-text-theme);
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 500);
  color: var(--h6-color, color(srgb 0.09 0.05 0.01));
  font-family: var(--theme-setting-headingFont), var(--font-text-theme);
}

html[saved-theme="light"] body hr {
  border-bottom-color: color(srgb 0.925 0.625 0.325);
  border-left-color: color(srgb 0.925 0.625 0.325);
  border-right-color: color(srgb 0.925 0.625 0.325);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  padding-right: 24px;
}

html[saved-theme="light"] body body {
  scrollbar-color: var(--theme-color-baseTransparent25, color(srgb 0.9 0.5 0.1 / 0.25) rgba(0, 0, 0, 0)) transparent;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: color(srgb 0.9 0.5 0.1 / 0.25);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--text-faint, color(srgb 0.27 0.15 0.03));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--font-medium, 500);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--text-faint, color(srgb 0.27 0.15 0.03));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: var(--font-medium, 500);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--font-medium, 500);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  --icon-size: var(--icon-s, 16px);
  --icon-stroke: var(--icon-s-stroke-width, 2px);
  border-bottom-color: color(srgb 0.27 0.15 0.03);
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  border-left-color: color(srgb 0.27 0.15 0.03);
  border-right-color: color(srgb 0.27 0.15 0.03);
  border-top-color: color(srgb 0.27 0.15 0.03);
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  color: var(--theme-color-control, color(srgb 0.27 0.15 0.03));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, color(srgb 0.96 0.8 0.64));
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: var(--radius-m, 8px);
  border-top-right-radius: var(--radius-m, 8px);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(0, 0, 0));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body footer ul li a {
  color: var(--theme-color-control, color(srgb 0.27 0.15 0.03));
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: color(srgb 0.09 0.05 0.01);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.18 0.1 0.02));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.18 0.1 0.02);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: color(srgb 0.18 0.1 0.02);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.18 0.1 0.02));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: color(srgb 0.27 0.15 0.03);
  border-left-color: color(srgb 0.27 0.15 0.03);
  border-right-color: color(srgb 0.27 0.15 0.03);
  border-top-color: color(srgb 0.27 0.15 0.03);
  color: var(--theme-color-control, color(srgb 0.27 0.15 0.03));
}

html[saved-theme="light"] body .darkmode svg {
  color: color(srgb 0.27 0.15 0.03);
  stroke: color(srgb 0.27 0.15 0.03);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.09 0.05 0.01 / 0.7);
  border-left-color: color(srgb 0.09 0.05 0.01 / 0.7);
  border-right-color: color(srgb 0.09 0.05 0.01 / 0.7);
  border-top-color: color(srgb 0.09 0.05 0.01 / 0.7);
  color: color(srgb 0.09 0.05 0.01 / 0.7);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, color(srgb 0.27 0.15 0.03));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .canvas-node-content {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, color(srgb 0.09 0.05 0.01));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, color(srgb 0.98 0.9 0.82));
  border-color: color(srgb 0.09 0.05 0.01);
  box-shadow: var(--theme-shadow-input, rgba(64, 32, 0, 0.2) 0px 1px 2px 0px, rgba(57, 32, 6, 0.15) 0px 3.4px 6.7px 0px, rgba(51, 32, 13, 0.05) 0px 15px 30px 0px);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  background-color: color(srgb 0.9 0.5 0.1 / 0.12);
  border-color: color(srgb 0.96 0.8 0.64);
  color: var(--table-header-color, color(srgb 0.09 0.05 0.01));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: var(--metadata-property-background, color(srgb 0.995 0.975 0.955));
  border-bottom-color: color(srgb 0.09 0.05 0.01 / 0.7);
  border-left-color: color(srgb 0.09 0.05 0.01 / 0.7);
  border-right-color: color(srgb 0.09 0.05 0.01 / 0.7);
  border-top-color: color(srgb 0.09 0.05 0.01 / 0.7);
  color: var(--text-muted, color(srgb 0.09 0.05 0.01 / 0.7));
  font-family: var(--font-interface, "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  margin-bottom: 0px;
  padding-left: 32px;
  padding-right: 32px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: color(srgb 0.09 0.05 0.01 / 0.7);
  border-left-color: color(srgb 0.09 0.05 0.01 / 0.7);
  border-right-color: color(srgb 0.09 0.05 0.01 / 0.7);
  border-top-color: color(srgb 0.09 0.05 0.01 / 0.7);
  color: color(srgb 0.09 0.05 0.01 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .note-properties {
  background-color: var(--metadata-property-background, color(srgb 0.995 0.975 0.955));
  border-color: color(srgb 0.09 0.05 0.01 / 0.7);
}

html[saved-theme="light"] body .note-properties-key {
  color: color(srgb 0.09 0.05 0.01 / 0.7);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: color(srgb 0.09 0.05 0.01 / 0.7);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsl(
    258,
    88%,
    66%,
    0.15
  ));
  --pill-color: var(--tag-color, hsl(
    258,
    88%,
    59.4%
  ));
  --pill-color-remove: var(--tag-color, hsl(
    258,
    88%,
    59.4%
  ));
  --pill-padding-x: var(--tag-padding-x, 1em);
  --pill-weight: var(--tag-weight, 400);
  background-color: var(--theme-color-tagBgSidebar, rgba(134, 82, 255, 0.15));
  border-radius: 22.4px;
  color: var(--theme-color-tagSidebar, rgb(44, 8, 127));
}

html[saved-theme="light"] body .note-properties-value {
  color: color(srgb 0.09 0.05 0.01 / 0.7);
}

html[saved-theme="light"] body div#quartz-root {
  color: var(--text-normal, color(srgb 0.09 0.05 0.01));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: color(srgb 0.09 0.05 0.01);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, color(srgb 0.96 0.8 0.64));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--tab-text-color-focused-active-current, color(srgb 0.09 0.05 0.01));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body abbr {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body details {
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: color(srgb 0.27 0.15 0.03);
  border-left-color: color(srgb 0.27 0.15 0.03);
  border-right-color: color(srgb 0.27 0.15 0.03);
  border-top-color: color(srgb 0.27 0.15 0.03);
  color: var(--text-normal, color(srgb 0.27 0.15 0.03));
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding-bottom: 0px;
  padding-left: 5.6px;
  padding-right: 5.6px;
  padding-top: 0px;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: color(srgb 0.98 0.9 0.82);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.98 0.9 0.82);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.98 0.9 0.82);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.98 0.9 0.82);
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--theme-color-textSelected, color(srgb 0.98 0.9 0.82));
  font-family: var(--font-interface, "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol");
  font-size: var(--font-ui-smaller, 11.2px);
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: color(srgb 0.09 0.05 0.01);
  border-left-color: color(srgb 0.09 0.05 0.01);
  border-right-color: color(srgb 0.09 0.05 0.01);
  border-top-color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body sub {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body summary {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body sup {
  color: color(srgb 0.09 0.05 0.01);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(138, 92, 245, 0.15));
  color: var(--tag-color, rgb(115, 60, 243));
}`,
  },
};
