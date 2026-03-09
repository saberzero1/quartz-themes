import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "kakano",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto", "sf-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-input: light-dark(hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ), hsl(from black h s l / 0.06));
  --background-modifier-active-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --background-modifier-active-hover-alt: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --background-modifier-border: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --background-modifier-border-focus: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --background-modifier-error: hsl(from rgb(38, 102, 192) 356 s l);
  --background-modifier-error-hover: hsl(from rgb(38, 102, 192) 356 s l);
  --background-modifier-hover: rgb(38, 102, 192);
  --background-modifier-message: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --background-modifier-success: hsl(from rgb(38, 102, 192) 124 s l);
  --background-primary: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --background-prompt: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --background-secondary: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --base-h: 215;
  --base-l: 45%;
  --base-s: 67%;
  --bases-cards-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --bases-cards-cover-background: light-dark(hsl(from black h s l / 0.06), hsl(from white h s l / 0.06));
  --bases-cards-radius: 0.5rem;
  --bases-cards-shadow: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 10%, transparent);
  --bases-cards-shadow-hover: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 10%, transparent);
  --bases-embed-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --bases-embed-border-radius: 0.25rem;
  --bases-group-heading-property-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --bases-group-heading-property-size: 0.7rem;
  --bases-header-padding-end: 0.5em;
  --bases-header-padding-start: 0.5em;
  --bases-table-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --bases-table-cell-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(38, 102, 192);
  --bases-table-container-border-radius: 0.25rem;
  --bases-table-header-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --bases-table-header-background-hover: rgb(38, 102, 192);
  --bases-table-header-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --bases-table-summary-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --bases-table-summary-background-hover: rgb(38, 102, 192);
  --blockquote-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --blockquote-border-thickness: 0.25em;
  --bold-weight: 600;
  --callout-padding: 0.75em
    1.5em;
  --callout-radius: 0.25rem;
  --callout-title-weight: 600;
  --canvas-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --canvas-card-label-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --canvas-controls-radius: 0.25rem;
  --caret-color: hsl(258, 150%, 80%);
  --checkbox-border-color: rgb(38, 102, 192);
  --checkbox-border-color-hover: rgb(166, 139, 249);
  --checkbox-color: rgb(38, 102, 192);
  --checkbox-color-hover: rgb(166, 139, 249);
  --checkbox-marker-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --checkbox-radius: 0.25rem;
  --checklist-done-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --clickable-icon-radius: 0.25rem;
  --code-background: light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  );
  --code-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --code-bracket-background: rgb(38, 102, 192);
  --code-comment: light-dark(
    hsl(from black h s l / 0.5),
    hsl(from white h s l / 0.5)
  );
  --code-function: hsl(from rgb(38, 102, 192) 57 s l);
  --code-important: hsl(from rgb(38, 102, 192) 27 s l);
  --code-keyword: hsl(from rgb(38, 102, 192) 331 s l);
  --code-normal: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --code-operator: hsl(from rgb(38, 102, 192) 356 s l);
  --code-property: hsl(from rgb(38, 102, 192) 179 s l);
  --code-punctuation: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --code-radius: 0.25rem;
  --code-string: hsl(from rgb(38, 102, 192) 124 s l);
  --code-tag: hsl(from rgb(38, 102, 192) 356 s l);
  --code-value: hsl(from rgb(38, 102, 192) 253 s l);
  --collapse-icon-color: rgb(38, 102, 192);
  --collapse-icon-color-collapsed: rgb(38, 102, 192);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
  --color-blue: hsl(from rgb(38, 102, 192) 219 s l);
  --color-cyan: hsl(from rgb(38, 102, 192) 179 s l);
  --color-green: hsl(from rgb(38, 102, 192) 124 s l);
  --color-orange: hsl(from rgb(38, 102, 192) 27 s l);
  --color-pink: hsl(from rgb(38, 102, 192) 331 s l);
  --color-purple: hsl(from rgb(38, 102, 192) 253 s l);
  --color-red: hsl(from rgb(38, 102, 192) 356 s l);
  --color-yellow: hsl(from rgb(38, 102, 192) 57 s l);
  --divider-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --divider-color-hover: rgb(38, 102, 192);
  --divider-width: 0;
  --embed-background: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ), inset 0 0 0 1px color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --embed-border-left: none;
  --embed-border-right: none;
  --embed-border-start: none;
  --embed-padding: 1em;
  --empty-pane-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --file-header-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --file-header-background-focused: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --file-header-font: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --file-header-font-size: 0.8rem;
  --file-line-width: 37.5rem;
  --file-margins: 0 2em;
  --flair-background: rgb(38, 102, 192);
  --flair-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --font-default: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
  --font-monospace-default: ui-monospace, Menlo, SFMono-Regular, Consolas,
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
  --font-ui-large: 1.125rem;
  --font-ui-medium: 1rem;
  --font-ui-small: 0.8rem;
  --font-ui-smaller: 0.7rem;
  --footnote-divider-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --footnote-id-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --footnote-id-color-no-occurrences: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --footnote-input-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --footnote-radius: 0.25rem;
  --graph-node: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --graph-node-attachment: hsl(from rgb(38, 102, 192) 57 s l);
  --graph-node-focused: rgb(166, 139, 249);
  --graph-node-tag: hsl(from rgb(38, 102, 192) 124 s l);
  --graph-node-unresolved: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --graph-text: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --h1-line-height: 1.5;
  --h1-size: 39.81312px;
  --h1-weight: 100;
  --h2-line-height: 1.5;
  --h2-size: 33.1776px;
  --h2-weight: 200;
  --h3-line-height: 1.5;
  --h3-size: 27.648px;
  --h3-weight: 300;
  --h4-line-height: 1.5;
  --h4-size: 23.04px;
  --h4-weight: 400;
  --h5-size: 19.2px;
  --h5-weight: 500;
  --h6-size: 16px;
  --h6-weight: 500;
  --header-height: calc(18px + 1rem);
  --heading-formatting: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --heading-spacing: 0.67em;
  --hr-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --icon-color: rgb(38, 102, 192);
  --icon-color-active: light-dark(white, black);
  --icon-color-focused: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --icon-color-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --inline-title-line-height: 1.5;
  --inline-title-size: 27.648px;
  --inline-title-weight: 400;
  --input-border-width: 2px;
  --input-date-separator: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --input-placeholder-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --input-shadow: 0px 1px 2px
    hsl(
      215,
      7%,
      5%,
      0.1
    );
  --interactive-accent: rgb(38, 102, 192);
  --interactive-accent-hover: rgb(166, 139, 249);
  --link-color: rgb(166, 139, 249);
  --link-color-hover: rgb(197, 182, 252);
  --link-decoration-thickness: 1px;
  --link-external-color: rgb(166, 139, 249);
  --link-external-color-hover: rgb(197, 182, 252);
  --link-unresolved-color: rgb(166, 139, 249);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --link-unresolved-decoration-style: dashed;
  --list-bullet-size: 0.25em;
  --list-indent: 1.5em;
  --list-marker-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --list-marker-color-collapsed: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --list-marker-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --menu-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --menu-radius: 0.5rem;
  --menu-shadow: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 10%, transparent);
  --metadata-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --metadata-divider-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --metadata-gap: 0.5em;
  --metadata-input-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --metadata-input-font: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --metadata-input-height: 28px;
  --metadata-input-text-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --metadata-label-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --metadata-label-font: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --metadata-label-text-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --metadata-label-text-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --metadata-property-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --metadata-property-background-active: rgb(38, 102, 192);
  --metadata-property-background-hover: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --metadata-property-box-shadow-hover: none;
  --metadata-sidebar-input-font-size: 0.8rem;
  --metadata-sidebar-label-font-size: 0.8rem;
  --modal-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --modal-border-color: black;
  --modal-border-width: 0;
  --modal-max-height: calc(100vh - 2em);
  --modal-max-width: calc(100vw - 2em);
  --modal-radius: 0.75rem;
  --modal-width: 65rem;
  --nav-collapse-icon-color: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  );
  --nav-collapse-icon-color-collapsed: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  );
  --nav-heading-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --nav-heading-color-collapsed: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --nav-heading-color-collapsed-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --nav-heading-color-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --nav-indentation-guide-color: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  );
  --nav-item-background-active: rgb(38, 102, 192);
  --nav-item-background-hover: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  );
  --nav-item-background-selected: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  );
  --nav-item-children-margin-start: 7.5px;
  --nav-item-children-padding-start: calc(1em - 0.5px);
  --nav-item-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --nav-item-color-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --nav-item-color-hover: black;
  --nav-item-color-selected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --nav-item-padding: 0.375em 0.75em 0.375em 0.75em;
  --nav-item-parent-padding: 0.25em 0 0.25em 0;
  --nav-item-radius: 0.25rem;
  --nav-item-size: 0.8rem;
  --nav-tag-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --nav-tag-color-active: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --nav-tag-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --nav-tag-radius: 0.25rem;
  --obsidian-columns-def-span: 1;
  --obsidian-columns-gap: 1em;
  --obsidian-columns-min-width: 10em;
  --obsidian-columns-padding: 0 0;
  --p-spacing: 1em;
  --pdf-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --pdf-page-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --pdf-shadow: 0 0 0 1px color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --pdf-sidebar-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --pill-background: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  );
  --pill-background-hover: rgb(38, 102, 192);
  --pill-background-remove-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --pill-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --pill-color: black;
  --pill-color-hover: black;
  --pill-color-remove: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --pill-color-remove-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --pill-focus-left-adjust: 0;
  --pill-focus-width: 100%;
  --prompt-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --prompt-border-color: transparent;
  --prompt-border-width: 0;
  --r-background-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --r-block-margin: 20px;
  --r-code-font: ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace;
  --r-heading-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --r-heading-font-weight: 100;
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
  --r-link-color: rgb(166, 139, 249);
  --r-link-color-hover: rgb(197, 182, 252);
  --r-main-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --r-main-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --r-main-font-size: 42px;
  --radius-l: 0.75rem;
  --radius-m: 0.5rem;
  --radius-s: 0.25rem;
  --radius-xl: 1rem;
  --raised-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --ribbon-width: 3em;
  --scrollbar-radius: 0.75rem;
  --search-clear-button-color: rgb(38, 102, 192);
  --search-icon-color: rgb(38, 102, 192);
  --search-result-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --setting-group-heading-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --setting-group-heading-size: 1rem;
  --setting-items-background: none;
  --setting-items-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --setting-items-padding: 0;
  --setting-items-radius: 0;
  --shadow-l: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 10%, transparent);
  --shadow-s: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 10%, transparent);
  --sidebar-markdown-font-size: 12.8px;
  --slider-track-background: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  );
  --status-bar-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  );
  --status-bar-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --status-bar-font-size: 0.7rem;
  --status-bar-radius: 0.5rem 0 0 0;
  --status-bar-text-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --suggestion-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --sync-avatar-color-1: hsl(from rgb(38, 102, 192) 356 s l);
  --sync-avatar-color-2: hsl(from rgb(38, 102, 192) 27 s l);
  --sync-avatar-color-3: hsl(from rgb(38, 102, 192) 57 s l);
  --sync-avatar-color-4: hsl(from rgb(38, 102, 192) 124 s l);
  --sync-avatar-color-5: hsl(from rgb(38, 102, 192) 179 s l);
  --sync-avatar-color-6: hsl(from rgb(38, 102, 192) 219 s l);
  --sync-avatar-color-7: hsl(from rgb(38, 102, 192) 253 s l);
  --sync-avatar-color-8: hsl(from rgb(38, 102, 192) 331 s l);
  --tab-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --tab-background-inactive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 85%
  );
  --tab-container-background: transparent;
  --tab-curve: 0.125em;
  --tab-font-size: 0.8rem;
  --tab-outline-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --tab-outline-width: 0;
  --tab-radius: 0.25em;
  --tab-radius-active: 0.25em;
  --tab-stacked-font-size: 0.8rem;
  --tab-stacked-header-width: calc(18px + 1rem);
  --tab-switcher-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ), transparent);
  --tab-switcher-preview-background-shadow: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 10%, transparent);
  --tab-switcher-preview-radius: 1rem;
  --tab-switcher-preview-shadow: none;
  --tab-switcher-preview-shadow-active: none;
  --tab-text-color: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  );
  --tab-text-color-active: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  );
  --tab-text-color-focused: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --tab-text-color-focused-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --tab-text-color-focused-active-current: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --tab-text-color-focused-highlighted: rgb(38, 102, 192);
  --table-add-button-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --table-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --table-drag-handle-background-active: rgb(38, 102, 192);
  --table-drag-handle-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --table-drag-handle-color-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --table-header-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --table-header-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(38, 102, 192);
  --tag-background: rgb(138, 92, 245);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(181, 150, 253);
  --tag-color-hover: rgb(166, 139, 249);
  --tag-weight: 400;
  --text-accent: rgb(166, 139, 249);
  --text-accent-hover: rgb(197, 182, 252);
  --text-error: hsl(from rgb(38, 102, 192) 356 s l);
  --text-faint: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --text-muted: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --text-normal: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --text-on-accent: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --text-selection: rgba(138, 92, 245, 0.33);
  --text-success: hsl(from rgb(38, 102, 192) 124 s l);
  --text-warning: hsl(from rgb(38, 102, 192) 27 s l);
  --theme-cardAspectRatio: auto;
  --theme-cardImageFit: contain;
  --theme-color-activeLineHighlight: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --theme-color-audioRecordingActive: hsl(
    from hsl(from rgb(38, 102, 192) 356 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-base: rgb(38, 102, 192);
  --theme-color-baseDarkened12: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 12.5%
  );
  --theme-color-baseDarkened25: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --theme-color-baseDarkened40: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 40%
  );
  --theme-color-baseDarkened60: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  );
  --theme-color-baseDarkened70: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --theme-color-baseDarkened80: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-baseDarkened85: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 85%
  );
  --theme-color-baseDarkened90: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --theme-color-baseLightened12: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 12.5%
  );
  --theme-color-baseLightened25: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --theme-color-baseLightened40: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  );
  --theme-color-baseLightened60: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --theme-color-baseLightened70: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 70%
  );
  --theme-color-baseLightened80: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-baseLightened85: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 85%
  );
  --theme-color-baseLightened95: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --theme-color-baseTransparent06: hsl(
    from rgb(38, 102, 192) h s l / 0.06
  );
  --theme-color-baseTransparent12: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --theme-color-baseTransparent25: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  );
  --theme-color-baseTransparent35: hsl(
    from rgb(38, 102, 192) h s l / 0.35
  );
  --theme-color-baseTransparent50: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  );
  --theme-color-baseTransparent75: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  );
  --theme-color-blockId: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --theme-color-blueDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-blueLightened: hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-calendarBg: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 85%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ));
  --theme-color-calendarDayBg: hsl(from black h s l / 0.5);
  --theme-color-card: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --theme-color-cardBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  );
  --theme-color-cardBgHover: rgb(38, 102, 192);
  --theme-color-cardHover: black;
  --theme-color-communityItemBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-communityItemBgActive: rgb(38, 102, 192);
  --theme-color-communityItemBgHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --theme-color-communityItemBgSelected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 12.5%
  );
  --theme-color-contentItemBg: rgb(0, 0, 0, 0.2);
  --theme-color-contentItemBgActive: rgb(38, 102, 192);
  --theme-color-contentItemBgHover: rgb(0, 0, 0, 0.1);
  --theme-color-control: light-dark(
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ),
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  )
  );
  --theme-color-controlActive: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ),color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ));
  --theme-color-controlBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --theme-color-controlBgActive: rgb(38, 102, 192);
  --theme-color-controlBgHover: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 40%
  ));
  --theme-color-controlContentArea: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --theme-color-controlContentAreaHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-controlHasActiveMenu: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ));
  --theme-color-controlHover: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ));
  --theme-color-controlLightweightActive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --theme-color-controlLowWeightBg: hsl(from black h s l / 0.25);
  --theme-color-controlSetBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-controlText: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --theme-color-controlTextHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-controlUIHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --theme-color-controlUISelected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --theme-color-cyanDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 179 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-cyanLightened: hsl(
    from hsl(from rgb(38, 102, 192) 179 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-darkenTransparent06: hsl(from black h s l / 0.06);
  --theme-color-darkenTransparent12: hsl(from black h s l / 0.12);
  --theme-color-darkenTransparent25: hsl(from black h s l / 0.25);
  --theme-color-darkenTransparent50: hsl(from black h s l / 0.5);
  --theme-color-darkenTransparent75: hsl(from black h s l / 0.75);
  --theme-color-dataviewEmpty: light-dark(
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  ),
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 40%
  )
  );
  --theme-color-dragTarget: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  );
  --theme-color-dragTargetBg: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  );
  --theme-color-emptyStateBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-gradientBottom: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-gradientCardsetBottom: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --theme-color-gradientCardsetGeneratedBottom: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  );
  --theme-color-gradientCardsetGeneratedTop: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --theme-color-gradientCardsetTop: hsl(
    from rgb(38, 102, 192) h s l / 0.06
  );
  --theme-color-gradientTop: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  );
  --theme-color-graphLine: white;
  --theme-color-graphViewBg: transparent;
  --theme-color-greenDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-greenLightened: hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-greenTransparent25: hsl(from hsl(from rgb(38, 102, 192) 124 s l) h s l / 0.25);
  --theme-color-greenTransparent75: hsl(from hsl(from rgb(38, 102, 192) 124 s l) h s l / 0.75);
  --theme-color-hotkey: rgb(38, 102, 192);
  --theme-color-inputBorder: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --theme-color-inputPlaceholder: rgb(38, 102, 192);
  --theme-color-interactiveActive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --theme-color-jiraIssueDanger: white;
  --theme-color-jiraIssueDangerBg: hsl(from hsl(from rgb(38, 102, 192) 356 s l) h s l / 0.25);
  --theme-color-jiraIssueDeleteBg: hsl(from rgb(38, 102, 192) 356 s l);
  --theme-color-jiraIssueInfoBg: light-dark(
    hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  );
  --theme-color-jiraIssueStatus: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --theme-color-jiraIssueStatusBg: light-dark(
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ),
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  )
  );
  --theme-color-jiraIssueSuccessBg: light-dark(
    hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  );
  --theme-color-jiraIssueTableStripe: light-dark(
    hsl(from white h s l / 0.5),
    hsl(from black h s l / 0.5)
  );
  --theme-color-jiraIssueWarningBg: light-dark(control
    hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  );
  --theme-color-kanbanLaneBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-lightenTransparent06: hsl(from white h s l / 0.06);
  --theme-color-lightenTransparent12: hsl(from white h s l / 0.12);
  --theme-color-lightenTransparent25: hsl(from white h s l / 0.25);
  --theme-color-lightenTransparent50: hsl(from white h s l / 0.5);
  --theme-color-lightenTransparent75: hsl(from white h s l / 0.75);
  --theme-color-lineNumbers: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  ));
  --theme-color-log: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-logBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --theme-color-menuBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-mobileToolbarBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-modalContentBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --theme-color-navFileTag: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --theme-color-navFileTagActive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-navFileTagActiveBorder: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-navFileTagBorder: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --theme-color-navigationButtonBgHover: rgb(38, 102, 192);
  --theme-color-notice: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --theme-color-noticeBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --theme-color-orangeDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 27 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-orangeLightened: hsl(
    from hsl(from rgb(38, 102, 192) 27 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-orangeTransparent25: hsl(from hsl(from rgb(38, 102, 192) 27 s l) h s l / 0.25);
  --theme-color-orangeTransparent75: hsl(from hsl(from rgb(38, 102, 192) 27 s l) h s l / 0.75);
  --theme-color-pinkDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 331 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-pinkLightened: hsl(
    from hsl(from rgb(38, 102, 192) 331 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-promptInstructions: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  );
  --theme-color-purpleDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 253 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-purpleLightened: hsl(
    from hsl(from rgb(38, 102, 192) 253 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-queryComponentBg: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --theme-color-redDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 356 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-redLightened: hsl(
    from hsl(from rgb(38, 102, 192) 356 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-redTransparent25: hsl(from hsl(from rgb(38, 102, 192) 356 s l) h s l / 0.25);
  --theme-color-redTransparent75: hsl(from hsl(from rgb(38, 102, 192) 356 s l) h s l / 0.75);
  --theme-color-settingsBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-settingsBgStripe: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --theme-color-settingsGroupBg: hsl(from black h s l / 0.5);
  --theme-color-shadow: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --theme-color-suggestionBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 85%
  );
  --theme-color-switcherBgActive: rgb(38, 102, 192);
  --theme-color-tabBgInactiveHover: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  );
  --theme-color-tabNavActiveBg: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 70%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ));
  --theme-color-tabNavBg: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  ));
  --theme-color-tableHeaderBg: hsl(
    from rgb(38, 102, 192) h s l / 0.12
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
    97%,
    53%,
    0.5
  );
  --theme-color-tagHover: hsl(
    258,
    92.4%,
    85.14%
  );
  --theme-color-tagSidebar: rgb(181, 150, 253);
  --theme-color-tagSidebarHover: hsl(
    258,
    123.2%,
    85.8%
  );
  --theme-color-textMeta: rgb(38, 102, 192);
  --theme-color-textSelected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-warningBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --theme-color-yellowDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-yellowLightened: hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-yellowTransparent25: hsl(from hsl(from rgb(38, 102, 192) 57 s l) h s l / 0.25);
  --theme-color-yellowTransparent75: hsl(from hsl(from rgb(38, 102, 192) 57 s l) h s l / 0.75);
  --theme-gradient-bottomToTop: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) 0%,
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  ) 100%
  );
  --theme-gradient-topToBottom: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  ) 0%,
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) 100%
  );
  --theme-grid-cardSet: repeat(
    auto-fit,
    minmax(8em, 1fr)
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
  --theme-padding-block: 0.75em
    1.5em;
  --theme-padding-blockHorizontal: 1.5em;
  --theme-padding-blockVertical: 0.75em;
  --theme-setting-lineWidth: 60;
  --theme-shadow-control: 0px 1px 2px
    hsl(
      215,
      7%,
      5%,
      0.1
    );
  --theme-shadow-indent: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 3%, transparent),
    0 0 0.2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 6%, transparent),
    0 0 0.4rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 9%, transparent),
    0 0 1.2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 12%, transparent),
    0 0 2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 15%, transparent);
  --theme-shadow-indent-small: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 4%, transparent),
    0 0 0.2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 8%, transparent),
    0 0 0.6rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 12%, transparent),
    0 0 1rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 16%, transparent),
    0 0 2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) 20%, transparent);
  --theme-shadow-input: 0px 1px 2px
      hsl(
        215,
        34%,
        5%,
        0.5
      ),
    0px 3.4px 6.7px
      hsl(
        215,
        67%,
        5%,
        0.25
      ),
    0px 15px 30px
      hsl(
        215,
        50%,
        5%,
        0.15
      );
  --theme-value-gradientContrast: 0.2;
  --theme-value-headingScaleFactor: 1.2;
  --theme-value-sidebarFontScalingFactor: 0.8;
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --titlebar-text-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%);
  --titlebar-text-color-focused: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --traffic-lights-offset-x: calc(18px + 1rem);
  --traffic-lights-offset-y: calc(18px + 1rem);
  --vault-profile-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --vault-profile-color-hover: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ));
  --vault-profile-font-size: 0.8rem;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.6594 0.7599 0.9006);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: color(srgb 0.007425 0.0199875 0.037575);
  color: color(srgb 0.6594 0.7599 0.9006);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.6594 0.7599 0.9006);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: color(srgb 0.111375 0.299813 0.563625);
  color: color(srgb 0.6594 0.7599 0.9006);
}

body div#quartz-root {
  background-color: color(srgb 0.007425 0.0199875 0.037575);
  color: color(srgb 0.6594 0.7599 0.9006);
}`,
    typography: `body .page article p > b, b {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body .page article p > em, em {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body .page article p > i, i {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body .page article p > strong, strong {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body .text-highlight {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body del {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: line-through color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body p {
  color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006 / 0.7) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
}`,
    links: `body a.external, footer a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px rgb(166, 138, 249);
  text-decoration-thickness: 1px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px rgb(166, 138, 249);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px dashed rgba(138, 92, 245, 0.3);
  text-decoration-style: dashed;
  text-decoration-thickness: 1px;
}`,
    lists: `body dd {
  color: color(srgb 0.6594 0.7599 0.9006);
}

body dt {
  color: color(srgb 0.6594 0.7599 0.9006);
}

body ol > li {
  color: color(srgb 0.6594 0.7599 0.9006);
}

body ol.overflow {
  background-color: color(srgb 0.007425 0.0199875 0.037575);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

body ul > li {
  color: color(srgb 0.6594 0.7599 0.9006);
}

body ul.overflow {
  background-color: color(srgb 0.007425 0.0199875 0.037575);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}`,
    blockquotes: `body .data-footnote-backref {
  color: color(srgb 0.361375 0.549813 0.813625);
  text-decoration: color(srgb 0.361375 0.549813 0.813625);
}

body blockquote {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    tables: `body .table-container {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

body table {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin-left: 75.8906px;
  margin-right: 75.8906px;
  margin-top: 0px;
  width: 241.219px;
}

body td {
  border-bottom-color: color(srgb 0.04455 0.119925 0.22545);
  border-left-color: color(srgb 0.04455 0.119925 0.22545);
  border-right-color: color(srgb 0.04455 0.119925 0.22545);
  border-top-color: color(srgb 0.04455 0.119925 0.22545);
  color: color(srgb 0.6594 0.7599 0.9006);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

body th {
  background-color: color(srgb 0.1485 0.39975 0.7515 / 0.12);
  border-bottom-color: color(srgb 0.04455 0.119925 0.22545);
  border-left-color: color(srgb 0.04455 0.119925 0.22545);
  border-right-color: color(srgb 0.04455 0.119925 0.22545);
  border-top-color: color(srgb 0.04455 0.119925 0.22545);
  color: color(srgb 0.6594 0.7599 0.9006);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}`,
    code: `body code {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 1 1 1 / 0.06);
  border-bottom-color: color(srgb 0.111375 0.299813 0.563625);
  border-left-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-color: color(srgb 0.111375 0.299813 0.563625);
  border-top-color: color(srgb 0.111375 0.299813 0.563625);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 1 1 1 / 0.06);
  border-bottom-color: color(srgb 0.111375 0.299813 0.563625);
  border-left-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-color: color(srgb 0.111375 0.299813 0.563625);
  border-top-color: color(srgb 0.111375 0.299813 0.563625);
  color: color(srgb 0.6594 0.7599 0.9006);
}

body pre > code > [data-line] {
  border-left-color: color(srgb 0.7515 0.72135 0.1485);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: color(srgb 0.7515 0.72135 0.1485);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: color(srgb 0.7515 0.72135 0.1485);
  border-left-color: color(srgb 0.7515 0.72135 0.1485);
  border-right-color: color(srgb 0.7515 0.72135 0.1485);
  border-top-color: color(srgb 0.7515 0.72135 0.1485);
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 1 1 1 / 0.06);
  border-bottom-color: color(srgb 0.111375 0.299813 0.563625);
  border-left-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-color: color(srgb 0.111375 0.299813 0.563625);
  border-top-color: color(srgb 0.111375 0.299813 0.563625);
}

body pre:has(> code) {
  background-color: color(srgb 1 1 1 / 0.06);
  border-bottom-color: color(srgb 0.111375 0.299813 0.563625);
  border-left-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-color: color(srgb 0.111375 0.299813 0.563625);
  border-top-color: color(srgb 0.111375 0.299813 0.563625);
}`,
    images: `body audio {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

body figcaption {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body figure {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

body img {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

body video {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-radius: 8px;
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `body .file-embed {
  background-color: color(srgb 0.1485 0.39975 0.7515 / 0.12);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-left-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-right-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-top-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
}

body .footnotes {
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.6594 0.7599 0.9006);
}

body .transclude {
  background-color: color(srgb 0.1485 0.39975 0.7515 / 0.12);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-width: 0px;
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .transclude-inner {
  background-color: color(srgb 0.1485 0.39975 0.7515 / 0.12);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-width: 0px;
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body .katex-display > .katex > .katex-html {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  text-decoration: line-through color(srgb 0.6594 0.7599 0.9006 / 0.7);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
}

body input[type=checkbox] {
  border-bottom-color: rgb(38, 102, 192);
  border-left-color: rgb(38, 102, 192);
  border-right-color: rgb(38, 102, 192);
  border-top-color: rgb(38, 102, 192);
}

body li.task-list-item[data-task='!'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='*'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='-'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='/'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='>'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='?'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='I'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='S'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='b'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='c'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='d'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='f'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='i'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='k'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='l'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='p'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='u'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.task-list-item[data-task='w'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}`,
    search: `body .search > .search-button {
  background-color: color(srgb 0 0 0 / 0.06);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-width: 0px;
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-width: 0px;
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body .search > .search-container > .search-space {
  background-color: color(srgb 0.0297 0.07995 0.1503);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  box-shadow: color(srgb 0.01485 0.039975 0.07515 / 0.02) 0px 0px 3.2px 0px, color(srgb 0.01485 0.039975 0.07515 / 0.04) 0px 3.2px 6.4px 0px, color(srgb 0.01485 0.039975 0.07515 / 0.06) 0px 6.4px 19.2px 0px, color(srgb 0.01485 0.039975 0.07515 / 0.08) 0px 19.2px 32px 0px, color(srgb 0.01485 0.039975 0.07515 / 0.1) 0px 32px 64px 0px;
}

body .search > .search-container > .search-space > * {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.01485 0.039975 0.07515);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: color(srgb 0.01485 0.039975 0.07515);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(38, 102, 192);
  color: color(srgb 0.01485 0.039975 0.07515);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  background-color: color(srgb 0.04455 0.119925 0.22545);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(38, 102, 192);
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: color(srgb 0.01485 0.039975 0.07515);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(38, 102, 192);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: color(srgb 0.01485 0.039975 0.07515);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(25, 0, 84, 0.5);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body a.internal.tag-link::before {
  color: rgb(181, 151, 253);
}

body h1 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body h2 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body h2.page-title, h2.page-title a {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body h3 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body h4 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body h5 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body h6 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body hr {
  border-bottom-color: color(srgb 0.111375 0.299813 0.563625);
  border-left-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  padding-right: 24px;
}

body ::-webkit-scrollbar {
  background: color(srgb 0.007425 0.0199875 0.037575) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
}

body ::-webkit-scrollbar-corner {
  background: color(srgb 0.007425 0.0199875 0.037575) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
}

body ::-webkit-scrollbar-thumb {
  background: color(srgb 0.007425 0.0199875 0.037575) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

body ::-webkit-scrollbar-thumb:active {
  background: color(srgb 0.007425 0.0199875 0.037575) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
}

body ::-webkit-scrollbar-thumb:hover {
  background: color(srgb 0.007425 0.0199875 0.037575) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
}

body ::-webkit-scrollbar-track {
  background: color(srgb 0.007425 0.0199875 0.037575) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
}

body body {
  scrollbar-color: color(srgb 0.1485 0.39975 0.7515 / 0.25) rgba(0, 0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.361375 0.549813 0.813625);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: color(srgb 0.361375 0.549813 0.813625);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.361375 0.549813 0.813625);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: color(srgb 0.361375 0.549813 0.813625);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(38, 102, 192);
  border-bottom-color: color(srgb 0.0297 0.07995 0.1503);
  border-left-color: color(srgb 0.0297 0.07995 0.1503);
  border-right-color: color(srgb 0.0297 0.07995 0.1503);
  border-top-color: color(srgb 0.0297 0.07995 0.1503);
  color: color(srgb 0.0297 0.07995 0.1503);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  color: color(srgb 0.6594 0.7599 0.9006);
}`,
    footer: `body footer {
  background-color: color(srgb 0.0594 0.1599 0.3006);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-width: 0px;
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body footer ul li a {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.6594 0.7599 0.9006);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `body li.section-li {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

body li.section-li > .section .meta {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
}

body ul.section-ul {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.6594 0.7599 0.9006);
}

body .darkmode svg {
  color: color(srgb 0.6594 0.7599 0.9006);
  stroke: color(srgb 0.6594 0.7599 0.9006);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-left-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-right-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-top-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
}

body .breadcrumb-element p {
  color: color(srgb 0.361375 0.549813 0.813625);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    misc: `body .katex-display {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.6594 0.7599 0.9006);
}

body .metadata {
  background-color: color(srgb 0.0297 0.07995 0.1503);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-left-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-right-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-top-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin-bottom: 0px;
  padding-left: 32px;
  padding-right: 32px;
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-left-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-right-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-top-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body .navigation-progress {
  background-color: color(srgb 0.0594 0.1599 0.3006);
}

body .page-header h2.page-title {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body abbr {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: underline dotted color(srgb 0.6594 0.7599 0.9006);
}

body details {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

body input[type=text] {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding-bottom: 0px;
  padding-left: 5.6px;
  padding-right: 5.6px;
  padding-top: 0px;
}

body kbd {
  background-color: color(srgb 1 1 1 / 0.06);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-bottom-style: solid;
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-style: solid;
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-style: solid;
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-style: solid;
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

body sub {
  color: color(srgb 0.6594 0.7599 0.9006);
}

body summary {
  color: color(srgb 0.6594 0.7599 0.9006);
}

body sup {
  color: color(srgb 0.6594 0.7599 0.9006);
}`,
  },
  light: {
    base: `:root:root {
  --background-input: light-dark(hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ), hsl(from black h s l / 0.06));
  --background-modifier-active-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --background-modifier-active-hover-alt: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --background-modifier-border: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --background-modifier-border-focus: rgb(38, 102, 192);
  --background-modifier-error: hsl(from rgb(38, 102, 192) 356 s l);
  --background-modifier-error-hover: hsl(from rgb(38, 102, 192) 356 s l);
  --background-modifier-hover: rgb(38, 102, 192);
  --background-modifier-message: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --background-modifier-success: hsl(from rgb(38, 102, 192) 124 s l);
  --background-primary: white;
  --background-prompt: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --background-secondary: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --base-h: 215;
  --base-l: 45%;
  --base-s: 67%;
  --bases-cards-background: white;
  --bases-cards-cover-background: light-dark(hsl(from black h s l / 0.06), hsl(from white h s l / 0.06));
  --bases-cards-radius: 0.5rem;
  --bases-cards-shadow: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 10%, transparent);
  --bases-cards-shadow-hover: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 10%, transparent);
  --bases-embed-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --bases-embed-border-radius: 0.25rem;
  --bases-group-heading-property-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --bases-group-heading-property-size: 0.7rem;
  --bases-header-padding-end: 0.5em;
  --bases-header-padding-start: 0.5em;
  --bases-table-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --bases-table-cell-background-active: white;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(38, 102, 192);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(38, 102, 192);
  --bases-table-container-border-radius: 0.25rem;
  --bases-table-header-background: white;
  --bases-table-header-background-hover: rgb(38, 102, 192);
  --bases-table-header-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --bases-table-summary-background: white;
  --bases-table-summary-background-hover: rgb(38, 102, 192);
  --blockquote-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --blockquote-border-thickness: 0.25em;
  --blur-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent));
  --bold-weight: 600;
  --callout-padding: 0.75em
    1.5em;
  --callout-radius: 0.25rem;
  --callout-title-weight: 600;
  --canvas-background: white;
  --canvas-card-label-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --canvas-controls-radius: 0.25rem;
  --caret-color: hsl(258, 150%, 50%);
  --checkbox-border-color: rgb(38, 102, 192);
  --checkbox-border-color-hover: rgb(38, 102, 192);
  --checkbox-color: rgb(38, 102, 192);
  --checkbox-color-hover: rgb(38, 102, 192);
  --checkbox-marker-color: white;
  --checkbox-radius: 0.25rem;
  --checklist-done-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --clickable-icon-radius: 0.25rem;
  --code-background: light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  );
  --code-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --code-bracket-background: rgb(38, 102, 192);
  --code-comment: light-dark(
    hsl(from black h s l / 0.5),
    hsl(from white h s l / 0.5)
  );
  --code-function: hsl(from rgb(38, 102, 192) 57 s l);
  --code-important: hsl(from rgb(38, 102, 192) 27 s l);
  --code-keyword: hsl(from rgb(38, 102, 192) 331 s l);
  --code-normal: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --code-operator: hsl(from rgb(38, 102, 192) 356 s l);
  --code-property: hsl(from rgb(38, 102, 192) 179 s l);
  --code-punctuation: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --code-radius: 0.25rem;
  --code-string: hsl(from rgb(38, 102, 192) 124 s l);
  --code-tag: hsl(from rgb(38, 102, 192) 356 s l);
  --code-value: hsl(from rgb(38, 102, 192) 253 s l);
  --collapse-icon-color: rgb(38, 102, 192);
  --collapse-icon-color-collapsed: rgb(38, 102, 192);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
  --color-blue: hsl(from rgb(38, 102, 192) 219 s l);
  --color-cyan: hsl(from rgb(38, 102, 192) 179 s l);
  --color-green: hsl(from rgb(38, 102, 192) 124 s l);
  --color-orange: hsl(from rgb(38, 102, 192) 27 s l);
  --color-pink: hsl(from rgb(38, 102, 192) 331 s l);
  --color-purple: hsl(from rgb(38, 102, 192) 253 s l);
  --color-red: hsl(from rgb(38, 102, 192) 356 s l);
  --color-yellow: hsl(from rgb(38, 102, 192) 57 s l);
  --divider-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --divider-color-hover: rgb(38, 102, 192);
  --divider-width: 0;
  --embed-background: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ), inset 0 0 0 1px color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --embed-border-left: none;
  --embed-border-right: none;
  --embed-border-start: none;
  --embed-padding: 1em;
  --empty-pane-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --file-header-background: white;
  --file-header-background-focused: white;
  --file-header-font: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --file-header-font-size: 0.8rem;
  --file-line-width: 37.5rem;
  --file-margins: 0 2em;
  --flair-background: rgb(38, 102, 192);
  --flair-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --font-default: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
  --font-monospace-default: ui-monospace, Menlo, SFMono-Regular, Consolas,
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
  --font-ui-large: 1.125rem;
  --font-ui-medium: 1rem;
  --font-ui-small: 0.8rem;
  --font-ui-smaller: 0.7rem;
  --footnote-divider-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --footnote-id-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --footnote-id-color-no-occurrences: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --footnote-input-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --footnote-radius: 0.25rem;
  --graph-node: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --graph-node-attachment: hsl(from rgb(38, 102, 192) 57 s l);
  --graph-node-focused: rgb(138, 92, 245);
  --graph-node-tag: hsl(from rgb(38, 102, 192) 124 s l);
  --graph-node-unresolved: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --graph-text: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --h1-line-height: 1.5;
  --h1-size: 39.81312px;
  --h1-weight: 100;
  --h2-line-height: 1.5;
  --h2-size: 33.1776px;
  --h2-weight: 200;
  --h3-line-height: 1.5;
  --h3-size: 27.648px;
  --h3-weight: 300;
  --h4-line-height: 1.5;
  --h4-size: 23.04px;
  --h4-weight: 400;
  --h5-size: 19.2px;
  --h5-weight: 500;
  --h6-size: 16px;
  --h6-weight: 500;
  --header-height: calc(18px + 1rem);
  --heading-formatting: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --heading-spacing: 0.67em;
  --hr-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --icon-color: rgb(38, 102, 192);
  --icon-color-active: light-dark(white, black);
  --icon-color-focused: white;
  --icon-color-hover: white;
  --inline-title-line-height: 1.5;
  --inline-title-size: 27.648px;
  --inline-title-weight: 400;
  --input-border-width: 2px;
  --input-date-separator: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --input-placeholder-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --input-shadow: 0 1px 2px
    hsl(
      215,
      100.5%,
      11.25%,
      0.5
    );
  --interactive-accent: rgb(38, 102, 192);
  --interactive-accent-hover: rgb(38, 102, 192);
  --link-color: rgb(138, 92, 245);
  --link-color-hover: rgb(166, 139, 249);
  --link-decoration-thickness: 1px;
  --link-external-color: rgb(138, 92, 245);
  --link-external-color-hover: rgb(166, 139, 249);
  --link-unresolved-color: rgb(138, 92, 245);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --link-unresolved-decoration-style: dashed;
  --list-bullet-size: 0.25em;
  --list-indent: 1.5em;
  --list-marker-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --list-marker-color-collapsed: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --list-marker-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --menu-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --menu-radius: 0.5rem;
  --menu-shadow: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 10%, transparent);
  --metadata-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --metadata-divider-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --metadata-gap: 0.5em;
  --metadata-input-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --metadata-input-font: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --metadata-input-height: 28px;
  --metadata-input-text-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --metadata-label-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --metadata-label-font: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --metadata-label-text-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --metadata-label-text-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --metadata-property-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --metadata-property-background-active: rgb(38, 102, 192);
  --metadata-property-background-hover: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(38, 102, 192);
  --metadata-property-box-shadow-hover: none;
  --metadata-sidebar-input-font-size: 0.8rem;
  --metadata-sidebar-label-font-size: 0.8rem;
  --modal-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --modal-border-color: black;
  --modal-border-width: 0;
  --modal-max-height: calc(100vh - 2em);
  --modal-max-width: calc(100vw - 2em);
  --modal-radius: 0.75rem;
  --modal-width: 65rem;
  --nav-collapse-icon-color: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  );
  --nav-collapse-icon-color-collapsed: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  );
  --nav-heading-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --nav-heading-color-collapsed: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --nav-heading-color-collapsed-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --nav-heading-color-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --nav-indentation-guide-color: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  );
  --nav-item-background-active: rgb(38, 102, 192);
  --nav-item-background-hover: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  );
  --nav-item-background-selected: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  );
  --nav-item-children-margin-start: 7.5px;
  --nav-item-children-padding-start: calc(1em - 0.5px);
  --nav-item-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --nav-item-color-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --nav-item-color-hover: white;
  --nav-item-color-selected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --nav-item-padding: 0.375em 0.75em 0.375em 0.75em;
  --nav-item-parent-padding: 0.25em 0 0.25em 0;
  --nav-item-radius: 0.25rem;
  --nav-item-size: 0.8rem;
  --nav-tag-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --nav-tag-color-active: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --nav-tag-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --nav-tag-radius: 0.25rem;
  --obsidian-columns-def-span: 1;
  --obsidian-columns-gap: 1em;
  --obsidian-columns-min-width: 10em;
  --obsidian-columns-padding: 0 0;
  --p-spacing: 1em;
  --pdf-background: white;
  --pdf-page-background: white;
  --pdf-sidebar-background: white;
  --pill-background: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  );
  --pill-background-hover: rgb(38, 102, 192);
  --pill-background-remove-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --pill-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --pill-color: white;
  --pill-color-hover: white;
  --pill-color-remove: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --pill-color-remove-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --pill-focus-left-adjust: 0;
  --pill-focus-width: 100%;
  --prompt-background: white;
  --prompt-border-color: transparent;
  --prompt-border-width: 0;
  --r-background-color: white;
  --r-block-margin: 20px;
  --r-code-font: ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace;
  --r-heading-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --r-heading-font-weight: 100;
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
  --r-link-color: rgb(138, 92, 245);
  --r-link-color-hover: rgb(166, 139, 249);
  --r-main-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --r-main-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --r-main-font-size: 42px;
  --radius-l: 0.75rem;
  --radius-m: 0.5rem;
  --radius-s: 0.25rem;
  --radius-xl: 1rem;
  --raised-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --ribbon-width: 3em;
  --scrollbar-radius: 0.75rem;
  --search-clear-button-color: rgb(38, 102, 192);
  --search-icon-color: rgb(38, 102, 192);
  --search-result-background: white;
  --setting-group-heading-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --setting-group-heading-size: 1rem;
  --setting-items-background: none;
  --setting-items-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --setting-items-padding: 0;
  --setting-items-radius: 0;
  --shadow-l: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 10%, transparent);
  --shadow-s: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 10%, transparent);
  --sidebar-markdown-font-size: 12.8px;
  --slider-track-background: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  );
  --status-bar-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --status-bar-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --status-bar-font-size: 0.7rem;
  --status-bar-radius: 0.5rem 0 0 0;
  --status-bar-text-color: black;
  --suggestion-background: white;
  --sync-avatar-color-1: hsl(from rgb(38, 102, 192) 356 s l);
  --sync-avatar-color-2: hsl(from rgb(38, 102, 192) 27 s l);
  --sync-avatar-color-3: hsl(from rgb(38, 102, 192) 57 s l);
  --sync-avatar-color-4: hsl(from rgb(38, 102, 192) 124 s l);
  --sync-avatar-color-5: hsl(from rgb(38, 102, 192) 179 s l);
  --sync-avatar-color-6: hsl(from rgb(38, 102, 192) 219 s l);
  --sync-avatar-color-7: hsl(from rgb(38, 102, 192) 253 s l);
  --sync-avatar-color-8: hsl(from rgb(38, 102, 192) 331 s l);
  --tab-background-active: white;
  --tab-background-inactive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --tab-container-background: transparent;
  --tab-curve: 0.125em;
  --tab-font-size: 0.8rem;
  --tab-outline-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --tab-outline-width: 0;
  --tab-radius: 0.25em;
  --tab-radius-active: 0.25em;
  --tab-stacked-font-size: 0.8rem;
  --tab-stacked-header-width: calc(18px + 1rem);
  --tab-switcher-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent);
  --tab-switcher-preview-background-shadow: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 10%, transparent);
  --tab-switcher-preview-radius: 1rem;
  --tab-switcher-preview-shadow: none;
  --tab-switcher-preview-shadow-active: none;
  --tab-text-color: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  );
  --tab-text-color-active: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  );
  --tab-text-color-focused: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --tab-text-color-focused-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --tab-text-color-focused-active-current: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --tab-text-color-focused-highlighted: rgb(38, 102, 192);
  --table-add-button-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --table-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --table-drag-handle-background-active: rgb(38, 102, 192);
  --table-drag-handle-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --table-drag-handle-color-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --table-header-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --table-header-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(38, 102, 192);
  --tag-background: hsl(
    258,
    88%,
    66%,
    0.15
  );
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(114, 58, 242);
  --tag-color-hover: rgb(138, 92, 245);
  --tag-weight: 400;
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(166, 139, 249);
  --text-error: hsl(from rgb(38, 102, 192) 356 s l);
  --text-faint: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --text-muted: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --text-normal: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --text-on-accent: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --text-selection: rgba(138, 92, 245, 0.2);
  --text-success: hsl(from rgb(38, 102, 192) 124 s l);
  --text-warning: hsl(from rgb(38, 102, 192) 27 s l);
  --theme-cardAspectRatio: auto;
  --theme-cardImageFit: contain;
  --theme-color-activeLineHighlight: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --theme-color-audioRecordingActive: hsl(
    from hsl(from rgb(38, 102, 192) 356 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-base: rgb(38, 102, 192);
  --theme-color-baseDarkened12: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 12.5%
  );
  --theme-color-baseDarkened25: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --theme-color-baseDarkened40: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 40%
  );
  --theme-color-baseDarkened60: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  );
  --theme-color-baseDarkened70: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --theme-color-baseDarkened80: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-baseDarkened85: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 85%
  );
  --theme-color-baseDarkened90: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --theme-color-baseLightened12: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 12.5%
  );
  --theme-color-baseLightened25: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --theme-color-baseLightened40: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  );
  --theme-color-baseLightened60: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --theme-color-baseLightened70: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 70%
  );
  --theme-color-baseLightened80: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-baseLightened85: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 85%
  );
  --theme-color-baseLightened95: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --theme-color-baseTransparent06: hsl(
    from rgb(38, 102, 192) h s l / 0.06
  );
  --theme-color-baseTransparent12: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --theme-color-baseTransparent25: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  );
  --theme-color-baseTransparent35: hsl(
    from rgb(38, 102, 192) h s l / 0.35
  );
  --theme-color-baseTransparent50: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  );
  --theme-color-baseTransparent75: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  );
  --theme-color-blueDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-blueLightened: hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-calendarBg: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 85%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ));
  --theme-color-calendarDayBg: hsl(from white h s l / 0.75);
  --theme-color-card: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-cardBg: white;
  --theme-color-cardBgHover: rgb(38, 102, 192);
  --theme-color-cardHover: white;
  --theme-color-communityItemBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-communityItemBgActive: rgb(38, 102, 192);
  --theme-color-communityItemBgHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --theme-color-communityItemBgSelected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 12.5%
  );
  --theme-color-contentItemBg: hsl(from white h s l / 0.5);
  --theme-color-contentItemBgActive: rgb(38, 102, 192);
  --theme-color-contentItemBgHover: hsl(from white h s l / 0.25);
  --theme-color-control: light-dark(
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ),
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  )
  );
  --theme-color-controlActive: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ),color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ));
  --theme-color-controlBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --theme-color-controlBgActive: rgb(38, 102, 192);
  --theme-color-controlBgHover: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 40%
  ));
  --theme-color-controlContentArea: rgb(38, 102, 192);
  --theme-color-controlContentAreaHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-controlHasActiveMenu: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ));
  --theme-color-controlHover: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ));
  --theme-color-controlLightweightActive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --theme-color-controlLowWeightBg: hsl(from white h s l / 0.5);
  --theme-color-controlSetBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-controlText: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  );
  --theme-color-controlTextHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-controlUIHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --theme-color-controlUISelected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-cyanDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 179 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-cyanLightened: hsl(
    from hsl(from rgb(38, 102, 192) 179 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-darkenTransparent06: hsl(from black h s l / 0.06);
  --theme-color-darkenTransparent12: hsl(from black h s l / 0.12);
  --theme-color-darkenTransparent25: hsl(from black h s l / 0.25);
  --theme-color-darkenTransparent50: hsl(from black h s l / 0.5);
  --theme-color-darkenTransparent75: hsl(from black h s l / 0.75);
  --theme-color-dataviewEmpty: light-dark(
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  ),
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 40%
  )
  );
  --theme-color-dragTarget: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  );
  --theme-color-dragTargetBg: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  );
  --theme-color-emptyStateBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-gradientBottom: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  );
  --theme-color-gradientCardsetBottom: hsl(
    from rgb(38, 102, 192) h s l / 0.06
  );
  --theme-color-gradientCardsetGeneratedBottom: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --theme-color-gradientCardsetGeneratedTop: hsl(
    from rgb(38, 102, 192) h s l / 0.35
  );
  --theme-color-gradientCardsetTop: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --theme-color-gradientDarkenedBottom: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --theme-color-gradientDarkenedTop: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 45%
  );
  --theme-color-gradientTop: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --theme-color-graphLine: black;
  --theme-color-graphViewBg: transparent;
  --theme-color-greenDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-greenLightened: hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-greenTransparent25: hsl(from hsl(from rgb(38, 102, 192) 124 s l) h s l / 0.25);
  --theme-color-greenTransparent75: hsl(from hsl(from rgb(38, 102, 192) 124 s l) h s l / 0.75);
  --theme-color-hotkey: rgb(38, 102, 192);
  --theme-color-inputBorder: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --theme-color-inputPlaceholder: rgb(38, 102, 192);
  --theme-color-interactiveActive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --theme-color-jiraIssueDanger: white;
  --theme-color-jiraIssueDangerBg: hsl(from hsl(from rgb(38, 102, 192) 356 s l) h s l / 0.25);
  --theme-color-jiraIssueDeleteBg: hsl(from rgb(38, 102, 192) 356 s l);
  --theme-color-jiraIssueInfoBg: light-dark(
    hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  );
  --theme-color-jiraIssueStatus: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --theme-color-jiraIssueStatusBg: light-dark(
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ),
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  )
  );
  --theme-color-jiraIssueSuccessBg: light-dark(
    hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  );
  --theme-color-jiraIssueTableStripe: light-dark(
    hsl(from white h s l / 0.5),
    hsl(from black h s l / 0.5)
  );
  --theme-color-jiraIssueWarningBg: light-dark(control
    hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  );
  --theme-color-kanbanLaneBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-lightenTransparent06: hsl(from white h s l / 0.06);
  --theme-color-lightenTransparent12: hsl(from white h s l / 0.12);
  --theme-color-lightenTransparent25: hsl(from white h s l / 0.25);
  --theme-color-lightenTransparent50: hsl(from white h s l / 0.5);
  --theme-color-lightenTransparent75: hsl(from white h s l / 0.75);
  --theme-color-lineNumbers: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  ));
  --theme-color-log: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-logBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --theme-color-menuBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-mobileToolbarBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-modalContentBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  );
  --theme-color-navFileTag: rgb(38, 102, 192);
  --theme-color-navFileTagActive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-navFileTagActiveBorder: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-navFileTagBorder: rgb(38, 102, 192);
  --theme-color-navigationButtonBgHover: rgb(38, 102, 192);
  --theme-color-notice: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --theme-color-noticeBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  );
  --theme-color-orangeDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 27 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-orangeLightened: hsl(
    from hsl(from rgb(38, 102, 192) 27 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-orangeTransparent25: hsl(from hsl(from rgb(38, 102, 192) 27 s l) h s l / 0.25);
  --theme-color-orangeTransparent75: hsl(from hsl(from rgb(38, 102, 192) 27 s l) h s l / 0.75);
  --theme-color-pinkDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 331 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-pinkLightened: hsl(
    from hsl(from rgb(38, 102, 192) 331 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-promptInstructions: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 40%
  );
  --theme-color-purpleDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 253 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-purpleLightened: hsl(
    from hsl(from rgb(38, 102, 192) 253 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-queryComponentBg: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --theme-color-redDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 356 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-redLightened: hsl(
    from hsl(from rgb(38, 102, 192) 356 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-redTransparent25: hsl(from hsl(from rgb(38, 102, 192) 356 s l) h s l / 0.25);
  --theme-color-redTransparent75: hsl(from hsl(from rgb(38, 102, 192) 356 s l) h s l / 0.75);
  --theme-color-settingsBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-settingsBgStripe: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --theme-color-settingsGroupBg: hsl(from white h s l / 0.5);
  --theme-color-shadow: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  );
  --theme-color-suggestionBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 85%
  );
  --theme-color-switcherBgActive: rgb(38, 102, 192);
  --theme-color-tabBgInactiveHover: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  );
  --theme-color-tabNavActiveBg: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 70%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ));
  --theme-color-tabNavBg: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  ));
  --theme-color-tableHeaderBg: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  );
  --theme-color-tagBgHover: hsl(
    258,
    90%,
    68%,
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
  --theme-color-tagHover: rgb(144, 100, 247);
  --theme-color-tagSidebar: rgb(43, 8, 125);
  --theme-color-tagSidebarHover: rgb(49, 8, 145);
  --theme-color-textMeta: rgb(38, 102, 192);
  --theme-color-textSelected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  );
  --theme-color-warningBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  );
  --theme-color-yellowDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  );
  --theme-color-yellowLightened: hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  );
  --theme-color-yellowTransparent25: hsl(from hsl(from rgb(38, 102, 192) 57 s l) h s l / 0.25);
  --theme-color-yellowTransparent75: hsl(from hsl(from rgb(38, 102, 192) 57 s l) h s l / 0.75);
  --theme-gradient-DarkenedTopToBottom: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 45%
  ) 0%,
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) 100%
  );
  --theme-gradient-bottomToTop: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  ) 0%,
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) 100%
  );
  --theme-gradient-topToBottom: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) 0%,
    color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  ) 100%
  );
  --theme-grid-cardSet: repeat(
    auto-fit,
    minmax(8em, 1fr)
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
  --theme-padding-block: 0.75em
    1.5em;
  --theme-padding-blockHorizontal: 1.5em;
  --theme-padding-blockVertical: 0.75em;
  --theme-setting-lineWidth: 60;
  --theme-shadow-control: 0 1px 2px
    hsl(
      215,
      100.5%,
      11.25%,
      0.5
    );
  --theme-shadow-indent: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 3%, transparent),
    0 0 0.2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 6%, transparent),
    0 0 0.4rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 9%, transparent),
    0 0 1.2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 12%, transparent),
    0 0 2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 15%, transparent);
  --theme-shadow-indent-small: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 4%, transparent),
    0 0 0.2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 8%, transparent),
    0 0 0.6rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 12%, transparent),
    0 0 1rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 16%, transparent),
    0 0 2rem color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) 20%, transparent);
  --theme-shadow-input: 0 1px 2px
      hsl(
        215,
        100.5%,
        11%,
        0.2
      ),
    0 3.4px 6.7px
      hsl(
        215,
        67%,
        11%,
        0.15
      ),
    0 15px 30px
      hsl(
        215,
        50.25%,
        11.25%,
        0.05
      );
  --theme-value-gradientContrast: 0.2;
  --theme-value-headingScaleFactor: 1.2;
  --theme-value-sidebarFontScalingFactor: 0.8;
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  );
  --titlebar-text-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%);
  --titlebar-text-color-focused: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --traffic-lights-offset-x: calc(18px + 1rem);
  --traffic-lights-offset-y: calc(18px + 1rem);
  --vault-profile-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  );
  --vault-profile-color-hover: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ));
  --vault-profile-font-size: 0.8rem;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.01485 0.039975 0.07515);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: color(srgb 0.01485 0.039975 0.07515);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.01485 0.039975 0.07515);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: color(srgb 0.361375 0.549813 0.813625);
  color: color(srgb 0.01485 0.039975 0.07515);
}

body div#quartz-root {
  color: color(srgb 0.01485 0.039975 0.07515);
}`,
    typography: `body .page article p > b, b {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body .page article p > em, em {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body .page article p > i, i {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body .page article p > strong, strong {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body .text-highlight {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body del {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: line-through color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body p {
  color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515 / 0.7) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
}`,
    links: `body a.external, footer a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px rgb(138, 92, 245);
  text-decoration-thickness: 1px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px rgb(138, 92, 245);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px dashed rgba(138, 92, 245, 0.3);
  text-decoration-style: dashed;
  text-decoration-thickness: 1px;
}`,
    lists: `body dd {
  color: color(srgb 0.01485 0.039975 0.07515);
}

body dt {
  color: color(srgb 0.01485 0.039975 0.07515);
}

body ol > li {
  color: color(srgb 0.01485 0.039975 0.07515);
}

body ol.overflow {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

body ul > li {
  color: color(srgb 0.01485 0.039975 0.07515);
}

body ul.overflow {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}`,
    blockquotes: `body .data-footnote-backref {
  color: color(srgb 0.04455 0.119925 0.22545);
  text-decoration: color(srgb 0.04455 0.119925 0.22545);
}

body blockquote {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    tables: `body .table-container {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

body table {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin-left: 75.8906px;
  margin-right: 75.8906px;
  margin-top: 0px;
  width: 241.219px;
}

body td {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.01485 0.039975 0.07515);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

body th {
  background-color: color(srgb 0.1485 0.39975 0.7515 / 0.12);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.01485 0.039975 0.07515);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}`,
    code: `body code {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0 0 0 / 0.06);
  border-bottom-color: color(srgb 0.361375 0.549813 0.813625);
  border-left-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-color: color(srgb 0.361375 0.549813 0.813625);
  border-top-color: color(srgb 0.361375 0.549813 0.813625);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0 0 0 / 0.06);
  border-bottom-color: color(srgb 0.361375 0.549813 0.813625);
  border-left-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-color: color(srgb 0.361375 0.549813 0.813625);
  border-top-color: color(srgb 0.361375 0.549813 0.813625);
  color: color(srgb 0.01485 0.039975 0.07515);
}

body pre > code > [data-line] {
  border-left-color: color(srgb 0.7515 0.72135 0.1485);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: color(srgb 0.7515 0.72135 0.1485);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: color(srgb 0.7515 0.72135 0.1485);
  border-left-color: color(srgb 0.7515 0.72135 0.1485);
  border-right-color: color(srgb 0.7515 0.72135 0.1485);
  border-top-color: color(srgb 0.7515 0.72135 0.1485);
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0 0 0 / 0.06);
  border-bottom-color: color(srgb 0.361375 0.549813 0.813625);
  border-left-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-color: color(srgb 0.361375 0.549813 0.813625);
  border-top-color: color(srgb 0.361375 0.549813 0.813625);
}

body pre:has(> code) {
  background-color: color(srgb 0 0 0 / 0.06);
  border-bottom-color: color(srgb 0.361375 0.549813 0.813625);
  border-left-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-color: color(srgb 0.361375 0.549813 0.813625);
  border-top-color: color(srgb 0.361375 0.549813 0.813625);
}`,
    images: `body audio {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

body figcaption {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body figure {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

body img {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

body video {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-radius: 8px;
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `body .file-embed {
  background-color: color(srgb 0.1485 0.39975 0.7515 / 0.12);
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-left-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-right-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-top-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
}

body .footnotes {
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  color: color(srgb 0.01485 0.039975 0.07515);
}

body .transclude {
  background-color: color(srgb 0.1485 0.39975 0.7515 / 0.12);
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-width: 0px;
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .transclude-inner {
  background-color: color(srgb 0.1485 0.39975 0.7515 / 0.12);
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-width: 0px;
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body .katex-display > .katex > .katex-html {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  text-decoration: line-through color(srgb 0.01485 0.039975 0.07515 / 0.7);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
}

body input[type=checkbox] {
  border-bottom-color: rgb(38, 102, 192);
  border-left-color: rgb(38, 102, 192);
  border-right-color: rgb(38, 102, 192);
  border-top-color: rgb(38, 102, 192);
}

body li.task-list-item[data-task='!'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='*'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='-'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='/'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='>'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='?'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='I'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='S'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='b'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='c'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='d'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='f'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='i'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='k'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='l'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='p'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='u'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.task-list-item[data-task='w'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}`,
    search: `body .search > .search-button {
  background-color: color(srgb 0.1485 0.39975 0.7515 / 0.12);
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-width: 0px;
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-width: 0px;
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body .search > .search-container > .search-space {
  background-color: color(srgb 0.957425 0.969988 0.987575);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  box-shadow: color(srgb 0.111375 0.299813 0.563625 / 0.02) 0px 0px 3.2px 0px, color(srgb 0.111375 0.299813 0.563625 / 0.04) 0px 3.2px 6.4px 0px, color(srgb 0.111375 0.299813 0.563625 / 0.06) 0px 6.4px 19.2px 0px, color(srgb 0.111375 0.299813 0.563625 / 0.08) 0px 19.2px 32px 0px, color(srgb 0.111375 0.299813 0.563625 / 0.1) 0px 32px 64px 0px;
}

body .search > .search-container > .search-space > * {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.957425 0.969988 0.987575);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.957425 0.969988 0.987575);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.957425 0.969988 0.987575);
  border-right-color: color(srgb 0.957425 0.969988 0.987575);
  border-top-color: color(srgb 0.957425 0.969988 0.987575);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: color(srgb 0.957425 0.969988 0.987575);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(38, 102, 192);
  color: color(srgb 0.957425 0.969988 0.987575);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  background-color: color(srgb 0.6594 0.7599 0.9006);
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(38, 102, 192);
  border-bottom-color: color(srgb 0.957425 0.969988 0.987575);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.957425 0.969988 0.987575);
  border-right-color: color(srgb 0.957425 0.969988 0.987575);
  border-top-color: color(srgb 0.957425 0.969988 0.987575);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: color(srgb 0.957425 0.969988 0.987575);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(38, 102, 192);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: color(srgb 0.957425 0.969988 0.987575);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(134, 82, 255, 0.15);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body a.internal.tag-link::before {
  color: rgb(44, 8, 127);
}

body h1 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body h2 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body h2.page-title, h2.page-title a {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body h3 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body h4 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body h5 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body h6 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body hr {
  border-bottom-color: color(srgb 0.361375 0.549813 0.813625);
  border-left-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  padding-right: 24px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

body body {
  scrollbar-color: color(srgb 0.1485 0.39975 0.7515 / 0.25) rgba(0, 0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.04455 0.119925 0.22545);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: color(srgb 0.04455 0.119925 0.22545);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.04455 0.119925 0.22545);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: color(srgb 0.04455 0.119925 0.22545);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.0297 0.07995 0.1503);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: color(srgb 0.0297 0.07995 0.1503);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(38, 102, 192);
  border-bottom-color: color(srgb 0.8297 0.87995 0.9503);
  border-left-color: color(srgb 0.8297 0.87995 0.9503);
  border-right-color: color(srgb 0.8297 0.87995 0.9503);
  border-top-color: color(srgb 0.8297 0.87995 0.9503);
  color: color(srgb 0.8297 0.87995 0.9503);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.04455 0.119925 0.22545);
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  border-left-color: color(srgb 0.04455 0.119925 0.22545);
  border-right-color: color(srgb 0.04455 0.119925 0.22545);
  border-top-color: color(srgb 0.04455 0.119925 0.22545);
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  color: color(srgb 0.04455 0.119925 0.22545);
}`,
    footer: `body footer {
  background-color: color(srgb 0.6594 0.7599 0.9006);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(0, 0, 0);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body footer ul li a {
  color: color(srgb 0.04455 0.119925 0.22545);
  text-decoration: color(srgb 0.04455 0.119925 0.22545);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  color: color(srgb 0.01485 0.039975 0.07515);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.0297 0.07995 0.1503);
  text-decoration: color(srgb 0.0297 0.07995 0.1503);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.0297 0.07995 0.1503);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `body li.section-li {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

body li.section-li > .section .meta {
  color: color(srgb 0.0297 0.07995 0.1503);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.0297 0.07995 0.1503);
  text-decoration: color(srgb 0.0297 0.07995 0.1503);
}

body ul.section-ul {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: color(srgb 0.04455 0.119925 0.22545);
  border-left-color: color(srgb 0.04455 0.119925 0.22545);
  border-right-color: color(srgb 0.04455 0.119925 0.22545);
  border-top-color: color(srgb 0.04455 0.119925 0.22545);
  color: color(srgb 0.04455 0.119925 0.22545);
}

body .darkmode svg {
  color: color(srgb 0.04455 0.119925 0.22545);
  stroke: color(srgb 0.04455 0.119925 0.22545);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-left-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-right-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-top-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
}

body .breadcrumb-element p {
  color: color(srgb 0.04455 0.119925 0.22545);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    misc: `body .katex-display {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  color: color(srgb 0.01485 0.039975 0.07515);
}

body .metadata {
  background-color: color(srgb 0.957425 0.969988 0.987575);
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-left-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-right-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-top-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin-bottom: 0px;
  padding-left: 32px;
  padding-right: 32px;
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-left-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-right-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-top-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body .navigation-progress {
  background-color: color(srgb 0.6594 0.7599 0.9006);
}

body .page-header h2.page-title {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body abbr {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: underline dotted color(srgb 0.01485 0.039975 0.07515);
}

body details {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

body input[type=text] {
  border-bottom-color: color(srgb 0.04455 0.119925 0.22545);
  border-left-color: color(srgb 0.04455 0.119925 0.22545);
  border-right-color: color(srgb 0.04455 0.119925 0.22545);
  border-top-color: color(srgb 0.04455 0.119925 0.22545);
  color: color(srgb 0.04455 0.119925 0.22545);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  padding-bottom: 0px;
  padding-left: 5.6px;
  padding-right: 5.6px;
  padding-top: 0px;
}

body kbd {
  background-color: color(srgb 0 0 0 / 0.06);
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-bottom-style: solid;
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-style: solid;
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-style: solid;
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-style: solid;
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

body sub {
  color: color(srgb 0.01485 0.039975 0.07515);
}

body summary {
  color: color(srgb 0.01485 0.039975 0.07515);
}

body sup {
  color: color(srgb 0.01485 0.039975 0.07515);
}`,
  },
};
