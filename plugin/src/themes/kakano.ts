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
  ), hsl(from black h s l / 0.06)) !important;
  --background-modifier-active-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --background-modifier-active-hover-alt: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --background-modifier-border: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --background-modifier-border-focus: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --background-modifier-error: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --background-modifier-error-hover: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --background-modifier-hover: rgb(38, 102, 192) !important;
  --background-modifier-message: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --background-modifier-success: hsl(from rgb(38, 102, 192) 124 s l) !important;
  --background-primary: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --background-prompt: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --background-secondary: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --base-h: 215 !important;
  --base-l: 45% !important;
  --base-s: 67% !important;
  --bases-cards-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --bases-cards-cover-background: light-dark(hsl(from black h s l / 0.06), hsl(from white h s l / 0.06)) !important;
  --bases-cards-radius: 0.5rem !important;
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
  ) 10%, transparent) !important;
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
  ) 10%, transparent) !important;
  --bases-embed-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --bases-embed-border-radius: 0.25rem !important;
  --bases-group-heading-property-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --bases-group-heading-property-size: 0.7rem !important;
  --bases-header-padding-end: 0.5em !important;
  --bases-header-padding-start: 0.5em !important;
  --bases-table-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --bases-table-cell-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(38, 102, 192) !important;
  --bases-table-container-border-radius: 0.25rem !important;
  --bases-table-header-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --bases-table-header-background-hover: rgb(38, 102, 192) !important;
  --bases-table-header-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --bases-table-summary-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --bases-table-summary-background-hover: rgb(38, 102, 192) !important;
  --blockquote-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --blockquote-border-thickness: 0.25em !important;
  --bodyFont: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --bold-weight: 600 !important;
  --callout-padding: 0.75em
    1.5em;
  --callout-radius: 0.25rem;
  --callout-title-weight: 600;
  --canvas-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --canvas-card-label-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --canvas-controls-radius: 0.25rem !important;
  --caret-color: hsl(258, 150%, 80%) !important;
  --checkbox-border-color: rgb(38, 102, 192) !important;
  --checkbox-border-color-hover: rgb(166, 139, 249) !important;
  --checkbox-color: rgb(38, 102, 192) !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
  --checkbox-marker-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --checkbox-radius: 0.25rem !important;
  --checklist-done-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --clickable-icon-radius: 0.25rem !important;
  --code-background: light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  ) !important;
  --code-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --code-bracket-background: rgb(38, 102, 192) !important;
  --code-comment: light-dark(
    hsl(from black h s l / 0.5),
    hsl(from white h s l / 0.5)
  ) !important;
  --code-function: hsl(from rgb(38, 102, 192) 57 s l) !important;
  --code-important: hsl(from rgb(38, 102, 192) 27 s l) !important;
  --code-keyword: hsl(from rgb(38, 102, 192) 331 s l) !important;
  --code-normal: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --code-operator: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --code-property: hsl(from rgb(38, 102, 192) 179 s l) !important;
  --code-punctuation: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --code-radius: 0.25rem !important;
  --code-string: hsl(from rgb(38, 102, 192) 124 s l) !important;
  --code-tag: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --code-value: hsl(from rgb(38, 102, 192) 253 s l) !important;
  --codeFont: '??', ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(38, 102, 192) !important;
  --collapse-icon-color-collapsed: rgb(38, 102, 192) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(166, 139, 249) !important;
  --color-accent-2: rgb(197, 182, 252) !important;
  --color-blue: hsl(from rgb(38, 102, 192) 219 s l) !important;
  --color-cyan: hsl(from rgb(38, 102, 192) 179 s l) !important;
  --color-green: hsl(from rgb(38, 102, 192) 124 s l) !important;
  --color-orange: hsl(from rgb(38, 102, 192) 27 s l) !important;
  --color-pink: hsl(from rgb(38, 102, 192) 331 s l) !important;
  --color-purple: hsl(from rgb(38, 102, 192) 253 s l) !important;
  --color-red: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --color-yellow: hsl(from rgb(38, 102, 192) 57 s l) !important;
  --dark: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --darkgray: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --divider-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --divider-color-hover: rgb(38, 102, 192) !important;
  --divider-width: 0 !important;
  --embed-background: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ), inset 0 0 0 1px color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --embed-border-left: none !important;
  --embed-border-right: none !important;
  --embed-border-start: none !important;
  --embed-padding: 1em !important;
  --empty-pane-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --file-header-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --file-header-background-focused: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --file-header-font: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --file-header-font-size: 0.8rem !important;
  --file-line-width: 37.5rem !important;
  --file-margins: 0 2em !important;
  --flair-background: rgb(38, 102, 192) !important;
  --flair-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --font-default: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-interface: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-interface-theme: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-mermaid: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-monospace: '??', ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace !important;
  --font-monospace-default: ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace !important;
  --font-monospace-theme: ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace !important;
  --font-print: '??', '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 'Arial' !important;
  --font-text: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-text-theme: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-ui-large: 1.125rem !important;
  --font-ui-medium: 1rem !important;
  --font-ui-small: 0.8rem !important;
  --font-ui-smaller: 0.7rem !important;
  --footnote-divider-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --footnote-id-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --footnote-id-color-no-occurrences: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --footnote-input-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --footnote-radius: 0.25rem !important;
  --graph-node: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --graph-node-attachment: hsl(from rgb(38, 102, 192) 57 s l) !important;
  --graph-node-focused: rgb(166, 139, 249) !important;
  --graph-node-tag: hsl(from rgb(38, 102, 192) 124 s l) !important;
  --graph-node-unresolved: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --graph-text: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --gray: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 39.81312px !important;
  --h1-weight: 100 !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 33.1776px !important;
  --h2-weight: 200 !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 27.648px !important;
  --h3-weight: 300 !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 23.04px !important;
  --h4-weight: 400 !important;
  --h5-size: 19.2px !important;
  --h5-weight: 500 !important;
  --h6-size: 16px !important;
  --h6-weight: 500 !important;
  --header-height: calc(18px + 1rem) !important;
  --headerFont: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --heading-formatting: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --heading-spacing: 0.67em !important;
  --highlight: rgb(38, 102, 192) !important;
  --hr-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --icon-color: rgb(38, 102, 192) !important;
  --icon-color-active: light-dark(white, black) !important;
  --icon-color-focused: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --icon-color-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 27.648px !important;
  --inline-title-weight: 400 !important;
  --input-border-width: 2px !important;
  --input-date-separator: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --input-placeholder-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --input-shadow: 0px 1px 2px
    hsl(
      215,
      7%,
      5%,
      0.1
    ) !important;
  --interactive-accent: rgb(38, 102, 192) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --light: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --lightgray: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --link-color: rgb(166, 139, 249) !important;
  --link-color-hover: rgb(197, 182, 252) !important;
  --link-decoration-thickness: 1px !important;
  --link-external-color: rgb(166, 139, 249) !important;
  --link-external-color-hover: rgb(197, 182, 252) !important;
  --link-unresolved-color: rgb(166, 139, 249) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --link-unresolved-decoration-style: dashed !important;
  --list-bullet-size: 0.25em !important;
  --list-indent: 1.5em !important;
  --list-marker-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --list-marker-color-collapsed: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --list-marker-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --menu-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --menu-radius: 0.5rem !important;
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
  ) 10%, transparent) !important;
  --metadata-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --metadata-divider-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --metadata-gap: 0.5em !important;
  --metadata-input-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --metadata-input-font: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --metadata-label-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --metadata-label-font: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-label-text-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --metadata-label-text-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --metadata-property-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --metadata-property-background-active: rgb(38, 102, 192) !important;
  --metadata-property-background-hover: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --metadata-property-box-shadow-hover: none !important;
  --metadata-sidebar-input-font-size: 0.8rem !important;
  --metadata-sidebar-label-font-size: 0.8rem !important;
  --modal-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --modal-border-color: black !important;
  --modal-border-width: 0 !important;
  --modal-max-height: calc(100vh - 2em) !important;
  --modal-max-width: calc(100vw - 2em) !important;
  --modal-radius: 0.75rem !important;
  --modal-width: 65rem !important;
  --nav-collapse-icon-color: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  ) !important;
  --nav-collapse-icon-color-collapsed: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  ) !important;
  --nav-heading-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --nav-heading-color-collapsed: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --nav-heading-color-collapsed-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --nav-heading-color-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --nav-indentation-guide-color: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  ) !important;
  --nav-item-background-active: rgb(38, 102, 192) !important;
  --nav-item-background-hover: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  ) !important;
  --nav-item-background-selected: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  ) !important;
  --nav-item-children-margin-start: 7.5px !important;
  --nav-item-children-padding-start: calc(1em - 0.5px) !important;
  --nav-item-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --nav-item-color-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --nav-item-color-hover: black !important;
  --nav-item-color-selected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --nav-item-padding: 0.375em 0.75em 0.375em 0.75em !important;
  --nav-item-parent-padding: 0.25em 0 0.25em 0 !important;
  --nav-item-radius: 0.25rem !important;
  --nav-item-size: 0.8rem !important;
  --nav-tag-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --nav-tag-color-active: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --nav-tag-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --nav-tag-radius: 0.25rem !important;
  --obsidian-columns-def-span: 1 !important;
  --obsidian-columns-gap: 1em !important;
  --obsidian-columns-min-width: 10em !important;
  --obsidian-columns-padding: 0 0 !important;
  --p-spacing: 1em !important;
  --pdf-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --pdf-page-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --pdf-shadow: 0 0 0 1px color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --pdf-sidebar-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --pill-background: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  ) !important;
  --pill-background-hover: rgb(38, 102, 192) !important;
  --pill-background-remove-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --pill-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --pill-color: black !important;
  --pill-color-hover: black !important;
  --pill-color-remove: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --pill-color-remove-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --pill-focus-left-adjust: 0 !important;
  --pill-focus-width: 100% !important;
  --prompt-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --prompt-border-color: transparent !important;
  --prompt-border-width: 0 !important;
  --r-background-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --r-block-margin: 20px !important;
  --r-code-font: ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace !important;
  --r-heading-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --r-heading-font-weight: 100 !important;
  --r-heading-letter-spacing: normal !important;
  --r-heading-line-height: 1.2 !important;
  --r-heading-margin: 0.67em 0 0 0 !important;
  --r-heading-text-shadow: none !important;
  --r-heading-text-transform: none !important;
  --r-heading1-size: 2.5em !important;
  --r-heading1-text-shadow: none !important;
  --r-heading2-size: 1.6em !important;
  --r-heading3-size: 1.3em !important;
  --r-heading4-size: 1em !important;
  --r-link-color: rgb(166, 139, 249) !important;
  --r-link-color-hover: rgb(197, 182, 252) !important;
  --r-main-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --r-main-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --r-main-font-size: 42px !important;
  --radius-l: 0.75rem !important;
  --radius-m: 0.5rem !important;
  --radius-s: 0.25rem !important;
  --radius-xl: 1rem !important;
  --raised-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --ribbon-width: 3em !important;
  --scrollbar-radius: 0.75rem !important;
  --search-clear-button-color: rgb(38, 102, 192) !important;
  --search-icon-color: rgb(38, 102, 192) !important;
  --search-result-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --secondary: rgb(166, 139, 249) !important;
  --setting-group-heading-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --setting-group-heading-size: 1rem !important;
  --setting-items-background: none !important;
  --setting-items-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --setting-items-padding: 0 !important;
  --setting-items-radius: 0 !important;
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
  ) 10%, transparent) !important;
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
  ) 10%, transparent) !important;
  --sidebar-markdown-font-size: 12.8px !important;
  --slider-track-background: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  ) !important;
  --status-bar-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  ) !important;
  --status-bar-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --status-bar-font-size: 0.7rem !important;
  --status-bar-radius: 0.5rem 0 0 0 !important;
  --status-bar-text-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --suggestion-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --sync-avatar-color-1: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --sync-avatar-color-2: hsl(from rgb(38, 102, 192) 27 s l) !important;
  --sync-avatar-color-3: hsl(from rgb(38, 102, 192) 57 s l) !important;
  --sync-avatar-color-4: hsl(from rgb(38, 102, 192) 124 s l) !important;
  --sync-avatar-color-5: hsl(from rgb(38, 102, 192) 179 s l) !important;
  --sync-avatar-color-6: hsl(from rgb(38, 102, 192) 219 s l) !important;
  --sync-avatar-color-7: hsl(from rgb(38, 102, 192) 253 s l) !important;
  --sync-avatar-color-8: hsl(from rgb(38, 102, 192) 331 s l) !important;
  --tab-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --tab-background-inactive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 85%
  ) !important;
  --tab-container-background: transparent !important;
  --tab-curve: 0.125em !important;
  --tab-font-size: 0.8rem !important;
  --tab-outline-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --tab-outline-width: 0 !important;
  --tab-radius: 0.25em !important;
  --tab-radius-active: 0.25em !important;
  --tab-stacked-font-size: 0.8rem !important;
  --tab-stacked-header-width: calc(18px + 1rem) !important;
  --tab-switcher-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ), transparent) !important;
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
  ) 10%, transparent) !important;
  --tab-switcher-preview-radius: 1rem !important;
  --tab-switcher-preview-shadow: none !important;
  --tab-switcher-preview-shadow-active: none !important;
  --tab-text-color: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  ) !important;
  --tab-text-color-active: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  ) !important;
  --tab-text-color-focused: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --tab-text-color-focused-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --tab-text-color-focused-active-current: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --tab-text-color-focused-highlighted: rgb(38, 102, 192) !important;
  --table-add-button-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --table-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --table-drag-handle-background-active: rgb(38, 102, 192) !important;
  --table-drag-handle-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --table-drag-handle-color-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --table-header-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --table-header-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(38, 102, 192) !important;
  --tag-background: rgb(138, 92, 245) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(181, 150, 253) !important;
  --tag-color-hover: rgb(166, 139, 249) !important;
  --tag-weight: 400 !important;
  --tertiary: rgb(197, 182, 252) !important;
  --text-accent: rgb(166, 139, 249) !important;
  --text-accent-hover: rgb(197, 182, 252) !important;
  --text-error: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --text-faint: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --text-muted: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --text-normal: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --text-on-accent: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --text-selection: rgba(138, 92, 245, 0.33) !important;
  --text-success: hsl(from rgb(38, 102, 192) 124 s l) !important;
  --text-warning: hsl(from rgb(38, 102, 192) 27 s l) !important;
  --textHighlight: rgb(38, 102, 192) !important;
  --theme-cardAspectRatio: auto !important;
  --theme-cardImageFit: contain !important;
  --theme-color-activeLineHighlight: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --theme-color-audioRecordingActive: hsl(
    from hsl(from rgb(38, 102, 192) 356 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-base: rgb(38, 102, 192) !important;
  --theme-color-baseDarkened12: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 12.5%
  ) !important;
  --theme-color-baseDarkened25: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --theme-color-baseDarkened40: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 40%
  ) !important;
  --theme-color-baseDarkened60: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  ) !important;
  --theme-color-baseDarkened70: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --theme-color-baseDarkened80: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-baseDarkened85: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 85%
  ) !important;
  --theme-color-baseDarkened90: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --theme-color-baseLightened12: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 12.5%
  ) !important;
  --theme-color-baseLightened25: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --theme-color-baseLightened40: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  ) !important;
  --theme-color-baseLightened60: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --theme-color-baseLightened70: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 70%
  ) !important;
  --theme-color-baseLightened80: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-baseLightened85: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 85%
  ) !important;
  --theme-color-baseLightened95: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --theme-color-baseTransparent06: hsl(
    from rgb(38, 102, 192) h s l / 0.06
  ) !important;
  --theme-color-baseTransparent12: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --theme-color-baseTransparent25: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  ) !important;
  --theme-color-baseTransparent35: hsl(
    from rgb(38, 102, 192) h s l / 0.35
  ) !important;
  --theme-color-baseTransparent50: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  ) !important;
  --theme-color-baseTransparent75: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  ) !important;
  --theme-color-blockId: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --theme-color-blueDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-blueLightened: hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-calendarBg: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 85%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  )) !important;
  --theme-color-calendarDayBg: hsl(from black h s l / 0.5) !important;
  --theme-color-card: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --theme-color-cardBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 95%
  ) !important;
  --theme-color-cardBgHover: rgb(38, 102, 192) !important;
  --theme-color-cardHover: black !important;
  --theme-color-communityItemBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-communityItemBgActive: rgb(38, 102, 192) !important;
  --theme-color-communityItemBgHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --theme-color-communityItemBgSelected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 12.5%
  ) !important;
  --theme-color-contentItemBg: rgb(0, 0, 0, 0.2) !important;
  --theme-color-contentItemBgActive: rgb(38, 102, 192) !important;
  --theme-color-contentItemBgHover: rgb(0, 0, 0, 0.1) !important;
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
  ) !important;
  --theme-color-controlActive: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ),color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  )) !important;
  --theme-color-controlBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --theme-color-controlBgActive: rgb(38, 102, 192) !important;
  --theme-color-controlBgHover: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 40%
  )) !important;
  --theme-color-controlContentArea: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --theme-color-controlContentAreaHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-controlHasActiveMenu: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  )) !important;
  --theme-color-controlHover: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  )) !important;
  --theme-color-controlLightweightActive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --theme-color-controlLowWeightBg: hsl(from black h s l / 0.25) !important;
  --theme-color-controlSetBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-controlText: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --theme-color-controlTextHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-controlUIHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --theme-color-controlUISelected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --theme-color-cyanDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 179 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-cyanLightened: hsl(
    from hsl(from rgb(38, 102, 192) 179 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-darkenTransparent06: hsl(from black h s l / 0.06) !important;
  --theme-color-darkenTransparent12: hsl(from black h s l / 0.12) !important;
  --theme-color-darkenTransparent25: hsl(from black h s l / 0.25) !important;
  --theme-color-darkenTransparent50: hsl(from black h s l / 0.5) !important;
  --theme-color-darkenTransparent75: hsl(from black h s l / 0.75) !important;
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
  ) !important;
  --theme-color-dragTarget: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  ) !important;
  --theme-color-dragTargetBg: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  ) !important;
  --theme-color-emptyStateBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-gradientBottom: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-gradientCardsetBottom: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --theme-color-gradientCardsetGeneratedBottom: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  ) !important;
  --theme-color-gradientCardsetGeneratedTop: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --theme-color-gradientCardsetTop: hsl(
    from rgb(38, 102, 192) h s l / 0.06
  ) !important;
  --theme-color-gradientTop: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  ) !important;
  --theme-color-graphLine: white !important;
  --theme-color-graphViewBg: transparent !important;
  --theme-color-greenDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-greenLightened: hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-greenTransparent25: hsl(from hsl(from rgb(38, 102, 192) 124 s l) h s l / 0.25) !important;
  --theme-color-greenTransparent75: hsl(from hsl(from rgb(38, 102, 192) 124 s l) h s l / 0.75) !important;
  --theme-color-hotkey: rgb(38, 102, 192) !important;
  --theme-color-inputBorder: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --theme-color-inputPlaceholder: rgb(38, 102, 192) !important;
  --theme-color-interactiveActive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --theme-color-jiraIssueDanger: white !important;
  --theme-color-jiraIssueDangerBg: hsl(from hsl(from rgb(38, 102, 192) 356 s l) h s l / 0.25) !important;
  --theme-color-jiraIssueDeleteBg: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --theme-color-jiraIssueInfoBg: light-dark(
    hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  ) !important;
  --theme-color-jiraIssueStatus: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
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
  ) !important;
  --theme-color-jiraIssueSuccessBg: light-dark(
    hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  ) !important;
  --theme-color-jiraIssueTableStripe: light-dark(
    hsl(from white h s l / 0.5),
    hsl(from black h s l / 0.5)
  ) !important;
  --theme-color-jiraIssueWarningBg: light-dark(control
    hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  ) !important;
  --theme-color-kanbanLaneBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-lightenTransparent06: hsl(from white h s l / 0.06) !important;
  --theme-color-lightenTransparent12: hsl(from white h s l / 0.12) !important;
  --theme-color-lightenTransparent25: hsl(from white h s l / 0.25) !important;
  --theme-color-lightenTransparent50: hsl(from white h s l / 0.5) !important;
  --theme-color-lightenTransparent75: hsl(from white h s l / 0.75) !important;
  --theme-color-lineNumbers: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  )) !important;
  --theme-color-log: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-logBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --theme-color-menuBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-mobileToolbarBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-modalContentBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --theme-color-navFileTag: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --theme-color-navFileTagActive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-navFileTagActiveBorder: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-navFileTagBorder: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --theme-color-navigationButtonBgHover: rgb(38, 102, 192) !important;
  --theme-color-notice: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --theme-color-noticeBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --theme-color-orangeDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 27 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-orangeLightened: hsl(
    from hsl(from rgb(38, 102, 192) 27 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-orangeTransparent25: hsl(from hsl(from rgb(38, 102, 192) 27 s l) h s l / 0.25) !important;
  --theme-color-orangeTransparent75: hsl(from hsl(from rgb(38, 102, 192) 27 s l) h s l / 0.75) !important;
  --theme-color-pinkDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 331 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-pinkLightened: hsl(
    from hsl(from rgb(38, 102, 192) 331 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-promptInstructions: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  ) !important;
  --theme-color-purpleDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 253 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-purpleLightened: hsl(
    from hsl(from rgb(38, 102, 192) 253 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-queryComponentBg: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --theme-color-redDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 356 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-redLightened: hsl(
    from hsl(from rgb(38, 102, 192) 356 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-redTransparent25: hsl(from hsl(from rgb(38, 102, 192) 356 s l) h s l / 0.25) !important;
  --theme-color-redTransparent75: hsl(from hsl(from rgb(38, 102, 192) 356 s l) h s l / 0.75) !important;
  --theme-color-settingsBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-settingsBgStripe: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --theme-color-settingsGroupBg: hsl(from black h s l / 0.5) !important;
  --theme-color-shadow: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --theme-color-suggestionBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 85%
  ) !important;
  --theme-color-switcherBgActive: rgb(38, 102, 192) !important;
  --theme-color-tabBgInactiveHover: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  ) !important;
  --theme-color-tabNavActiveBg: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 70%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  )) !important;
  --theme-color-tabNavBg: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  )) !important;
  --theme-color-tableHeaderBg: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --theme-color-tagBgHover: hsl(
    258,
    105.6%,
    52.8%,
    0.75
  ) !important;
  --theme-color-tagBgSidebar: hsl(
    258,
    105.6%,
    16.5%,
    0.5
  ) !important;
  --theme-color-tagBgSidebarHover: hsl(
    258,
    97%,
    53%,
    0.5
  ) !important;
  --theme-color-tagHover: hsl(
    258,
    92.4%,
    85.14%
  ) !important;
  --theme-color-tagSidebar: rgb(181, 150, 253) !important;
  --theme-color-tagSidebarHover: hsl(
    258,
    123.2%,
    85.8%
  ) !important;
  --theme-color-textMeta: rgb(38, 102, 192) !important;
  --theme-color-textSelected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-warningBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --theme-color-yellowDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-yellowLightened: hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-yellowTransparent25: hsl(from hsl(from rgb(38, 102, 192) 57 s l) h s l / 0.25) !important;
  --theme-color-yellowTransparent75: hsl(from hsl(from rgb(38, 102, 192) 57 s l) h s l / 0.75) !important;
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
  ) !important;
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
  ) !important;
  --theme-grid-cardSet: repeat(
    auto-fit,
    minmax(8em, 1fr)
  ) !important;
  --theme-length-cardImageHeight: 25em !important;
  --theme-length-cardMaxWidth: 1fr !important;
  --theme-length-cardMinWidth: 8em !important;
  --theme-length-checkboxBorderWidth: 1px !important;
  --theme-length-closeButtonWidth: 1.5rem !important;
  --theme-length-collapseIndicatorSize: 1.5rem !important;
  --theme-length-controlSetSpacing: 0.5rem !important;
  --theme-length-fullBorderRadius: 9999px !important;
  --theme-length-radiusXS: 0.125rem !important;
  --theme-length-statusBarHeight: 2rem !important;
  --theme-padding-block: 0.75em
    1.5em !important;
  --theme-padding-blockHorizontal: 1.5em !important;
  --theme-padding-blockVertical: 0.75em !important;
  --theme-setting-lineWidth: 60 !important;
  --theme-shadow-control: 0px 1px 2px
    hsl(
      215,
      7%,
      5%,
      0.1
    ) !important;
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
  ) 15%, transparent) !important;
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
  ) 20%, transparent) !important;
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
      ) !important;
  --theme-value-gradientContrast: 0.2 !important;
  --theme-value-headingScaleFactor: 1.2 !important;
  --theme-value-sidebarFontScalingFactor: 0.8 !important;
  --titleFont: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --titlebar-text-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent 30%) !important;
  --titlebar-text-color-focused: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --traffic-lights-offset-x: calc(18px + 1rem) !important;
  --traffic-lights-offset-y: calc(18px + 1rem) !important;
  --vault-profile-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --vault-profile-color-hover: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  )) !important;
  --vault-profile-font-size: 0.8rem !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: color(srgb 0.007425 0.0199875 0.037575);
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: color(srgb 0.111375 0.299813 0.563625);
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: color(srgb 0.007425 0.0199875 0.037575);
  color: color(srgb 0.6594 0.7599 0.9006);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .text-highlight {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body del {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: line-through color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body p {
  color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006 / 0.7) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px rgb(166, 138, 249);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px rgb(166, 138, 249);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px dashed rgba(138, 92, 245, 0.3);
  text-decoration-style: dashed;
  text-decoration-thickness: 1px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body dt {
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body ol > li {
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: color(srgb 0.007425 0.0199875 0.037575);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body ul > li {
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: color(srgb 0.007425 0.0199875 0.037575);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: color(srgb 0.361375 0.549813 0.813625);
  text-decoration: color(srgb 0.361375 0.549813 0.813625);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body table {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin-left: 75.8906px;
  margin-right: 75.8906px;
  margin-top: 0px;
  width: 241.219px;
}

html[saved-theme="dark"] body td {
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

html[saved-theme="dark"] body th {
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
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 1 1 1 / 0.06);
  border-bottom-color: color(srgb 0.111375 0.299813 0.563625);
  border-left-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-color: color(srgb 0.111375 0.299813 0.563625);
  border-top-color: color(srgb 0.111375 0.299813 0.563625);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 1 1 1 / 0.06);
  border-bottom-color: color(srgb 0.111375 0.299813 0.563625);
  border-left-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-color: color(srgb 0.111375 0.299813 0.563625);
  border-top-color: color(srgb 0.111375 0.299813 0.563625);
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: color(srgb 0.7515 0.72135 0.1485);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: color(srgb 0.7515 0.72135 0.1485);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: color(srgb 0.7515 0.72135 0.1485);
  border-left-color: color(srgb 0.7515 0.72135 0.1485);
  border-right-color: color(srgb 0.7515 0.72135 0.1485);
  border-top-color: color(srgb 0.7515 0.72135 0.1485);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: color(srgb 1 1 1 / 0.06);
  border-bottom-color: color(srgb 0.111375 0.299813 0.563625);
  border-left-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-color: color(srgb 0.111375 0.299813 0.563625);
  border-top-color: color(srgb 0.111375 0.299813 0.563625);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: color(srgb 1 1 1 / 0.06);
  border-bottom-color: color(srgb 0.111375 0.299813 0.563625);
  border-left-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-color: color(srgb 0.111375 0.299813 0.563625);
  border-top-color: color(srgb 0.111375 0.299813 0.563625);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body figcaption {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body figure {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body img {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body video {
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
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: color(srgb 0.1485 0.39975 0.7515 / 0.12);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-left-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-right-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-top-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .transclude {
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

html[saved-theme="dark"] body .transclude-inner {
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
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  text-decoration: line-through color(srgb 0.6594 0.7599 0.9006 / 0.7);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(38, 102, 192);
  border-left-color: rgb(38, 102, 192);
  border-right-color: rgb(38, 102, 192);
  border-top-color: rgb(38, 102, 192);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
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

html[saved-theme="dark"] body .search > .search-container > .search-space {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(38, 102, 192);
  color: color(srgb 0.01485 0.039975 0.07515);
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(38, 102, 192);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(25, 0, 84, 0.5);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(181, 151, 253);
}

html[saved-theme="dark"] body h1 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h2 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h3 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h4 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h5 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body h6 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: color(srgb 0.111375 0.299813 0.563625);
  border-left-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-color: color(srgb 0.111375 0.299813 0.563625);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  padding-right: 24px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: color(srgb 0.007425 0.0199875 0.037575) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: color(srgb 0.007425 0.0199875 0.037575) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: color(srgb 0.007425 0.0199875 0.037575) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: color(srgb 0.007425 0.0199875 0.037575) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: color(srgb 0.007425 0.0199875 0.037575) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: color(srgb 0.007425 0.0199875 0.037575) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
}

html[saved-theme="dark"] body body {
  scrollbar-color: color(srgb 0.1485 0.39975 0.7515 / 0.25) rgba(0, 0, 0, 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.361375 0.549813 0.813625);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: color(srgb 0.361375 0.549813 0.813625);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.361375 0.549813 0.813625);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: color(srgb 0.361375 0.549813 0.813625);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(38, 102, 192);
  border-bottom-color: color(srgb 0.0297 0.07995 0.1503);
  border-left-color: color(srgb 0.0297 0.07995 0.1503);
  border-right-color: color(srgb 0.0297 0.07995 0.1503);
  border-top-color: color(srgb 0.0297 0.07995 0.1503);
  color: color(srgb 0.0297 0.07995 0.1503);
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body footer ul li a {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .darkmode svg {
  color: color(srgb 0.6594 0.7599 0.9006);
  stroke: color(srgb 0.6594 0.7599 0.9006);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-left-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-right-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-top-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: color(srgb 0.361375 0.549813 0.813625);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .metadata {
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

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-left-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-right-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  border-top-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: color(srgb 0.0594 0.1599 0.3006);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="dark"] body abbr {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration: underline dotted color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body details {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body input[type=text] {
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

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body sub {
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body summary {
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body sup {
  color: color(srgb 0.6594 0.7599 0.9006);
}`,
  },
  light: {
    base: `:root:root {
  --background-input: light-dark(hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ), hsl(from black h s l / 0.06)) !important;
  --background-modifier-active-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --background-modifier-active-hover-alt: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --background-modifier-border: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --background-modifier-border-focus: rgb(38, 102, 192) !important;
  --background-modifier-error: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --background-modifier-error-hover: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --background-modifier-hover: rgb(38, 102, 192) !important;
  --background-modifier-message: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --background-modifier-success: hsl(from rgb(38, 102, 192) 124 s l) !important;
  --background-primary: white !important;
  --background-prompt: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --background-secondary: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --base-h: 215 !important;
  --base-l: 45% !important;
  --base-s: 67% !important;
  --bases-cards-background: white !important;
  --bases-cards-cover-background: light-dark(hsl(from black h s l / 0.06), hsl(from white h s l / 0.06)) !important;
  --bases-cards-radius: 0.5rem !important;
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
  ) 10%, transparent) !important;
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
  ) 10%, transparent) !important;
  --bases-embed-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --bases-embed-border-radius: 0.25rem !important;
  --bases-group-heading-property-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --bases-group-heading-property-size: 0.7rem !important;
  --bases-header-padding-end: 0.5em !important;
  --bases-header-padding-start: 0.5em !important;
  --bases-table-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --bases-table-cell-background-active: white !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(38, 102, 192) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(38, 102, 192) !important;
  --bases-table-container-border-radius: 0.25rem !important;
  --bases-table-header-background: white !important;
  --bases-table-header-background-hover: rgb(38, 102, 192) !important;
  --bases-table-header-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --bases-table-summary-background: white !important;
  --bases-table-summary-background-hover: rgb(38, 102, 192) !important;
  --blockquote-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --blockquote-border-thickness: 0.25em !important;
  --blur-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent)) !important;
  --bodyFont: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --bold-weight: 600 !important;
  --callout-padding: 0.75em
    1.5em;
  --callout-radius: 0.25rem;
  --callout-title-weight: 600;
  --canvas-background: white !important;
  --canvas-card-label-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --canvas-controls-radius: 0.25rem !important;
  --caret-color: hsl(258, 150%, 50%) !important;
  --checkbox-border-color: rgb(38, 102, 192) !important;
  --checkbox-border-color-hover: rgb(38, 102, 192) !important;
  --checkbox-color: rgb(38, 102, 192) !important;
  --checkbox-color-hover: rgb(38, 102, 192) !important;
  --checkbox-marker-color: white !important;
  --checkbox-radius: 0.25rem !important;
  --checklist-done-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --clickable-icon-radius: 0.25rem !important;
  --code-background: light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  ) !important;
  --code-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --code-bracket-background: rgb(38, 102, 192) !important;
  --code-comment: light-dark(
    hsl(from black h s l / 0.5),
    hsl(from white h s l / 0.5)
  ) !important;
  --code-function: hsl(from rgb(38, 102, 192) 57 s l) !important;
  --code-important: hsl(from rgb(38, 102, 192) 27 s l) !important;
  --code-keyword: hsl(from rgb(38, 102, 192) 331 s l) !important;
  --code-normal: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --code-operator: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --code-property: hsl(from rgb(38, 102, 192) 179 s l) !important;
  --code-punctuation: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --code-radius: 0.25rem !important;
  --code-string: hsl(from rgb(38, 102, 192) 124 s l) !important;
  --code-tag: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --code-value: hsl(from rgb(38, 102, 192) 253 s l) !important;
  --codeFont: '??', ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(38, 102, 192) !important;
  --collapse-icon-color-collapsed: rgb(38, 102, 192) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(153, 115, 247) !important;
  --color-accent-2: rgb(166, 139, 249) !important;
  --color-blue: hsl(from rgb(38, 102, 192) 219 s l) !important;
  --color-cyan: hsl(from rgb(38, 102, 192) 179 s l) !important;
  --color-green: hsl(from rgb(38, 102, 192) 124 s l) !important;
  --color-orange: hsl(from rgb(38, 102, 192) 27 s l) !important;
  --color-pink: hsl(from rgb(38, 102, 192) 331 s l) !important;
  --color-purple: hsl(from rgb(38, 102, 192) 253 s l) !important;
  --color-red: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --color-yellow: hsl(from rgb(38, 102, 192) 57 s l) !important;
  --dark: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --darkgray: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --divider-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --divider-color-hover: rgb(38, 102, 192) !important;
  --divider-width: 0 !important;
  --embed-background: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ), inset 0 0 0 1px color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --embed-border-left: none !important;
  --embed-border-right: none !important;
  --embed-border-start: none !important;
  --embed-padding: 1em !important;
  --empty-pane-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --file-header-background: white !important;
  --file-header-background-focused: white !important;
  --file-header-font: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --file-header-font-size: 0.8rem !important;
  --file-line-width: 37.5rem !important;
  --file-margins: 0 2em !important;
  --flair-background: rgb(38, 102, 192) !important;
  --flair-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --font-default: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-interface: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-interface-theme: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-mermaid: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-monospace: '??', ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace !important;
  --font-monospace-default: ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace !important;
  --font-monospace-theme: ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace !important;
  --font-print: '??', '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 'Arial' !important;
  --font-text: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-text-theme: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-ui-large: 1.125rem !important;
  --font-ui-medium: 1rem !important;
  --font-ui-small: 0.8rem !important;
  --font-ui-smaller: 0.7rem !important;
  --footnote-divider-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --footnote-id-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --footnote-id-color-no-occurrences: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --footnote-input-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --footnote-radius: 0.25rem !important;
  --graph-node: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --graph-node-attachment: hsl(from rgb(38, 102, 192) 57 s l) !important;
  --graph-node-focused: rgb(138, 92, 245) !important;
  --graph-node-tag: hsl(from rgb(38, 102, 192) 124 s l) !important;
  --graph-node-unresolved: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --graph-text: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --gray: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 39.81312px !important;
  --h1-weight: 100 !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 33.1776px !important;
  --h2-weight: 200 !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 27.648px !important;
  --h3-weight: 300 !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 23.04px !important;
  --h4-weight: 400 !important;
  --h5-size: 19.2px !important;
  --h5-weight: 500 !important;
  --h6-size: 16px !important;
  --h6-weight: 500 !important;
  --header-height: calc(18px + 1rem) !important;
  --headerFont: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --heading-formatting: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --heading-spacing: 0.67em !important;
  --highlight: rgb(38, 102, 192) !important;
  --hr-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --icon-color: rgb(38, 102, 192) !important;
  --icon-color-active: light-dark(white, black) !important;
  --icon-color-focused: white !important;
  --icon-color-hover: white !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 27.648px !important;
  --inline-title-weight: 400 !important;
  --input-border-width: 2px !important;
  --input-date-separator: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --input-placeholder-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --input-shadow: 0 1px 2px
    hsl(
      215,
      100.5%,
      11.25%,
      0.5
    ) !important;
  --interactive-accent: rgb(38, 102, 192) !important;
  --interactive-accent-hover: rgb(38, 102, 192) !important;
  --light: white !important;
  --lightgray: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --link-color: rgb(138, 92, 245) !important;
  --link-color-hover: rgb(166, 139, 249) !important;
  --link-decoration-thickness: 1px !important;
  --link-external-color: rgb(138, 92, 245) !important;
  --link-external-color-hover: rgb(166, 139, 249) !important;
  --link-unresolved-color: rgb(138, 92, 245) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --link-unresolved-decoration-style: dashed !important;
  --list-bullet-size: 0.25em !important;
  --list-indent: 1.5em !important;
  --list-marker-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --list-marker-color-collapsed: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --list-marker-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --menu-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --menu-radius: 0.5rem !important;
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
  ) 10%, transparent) !important;
  --metadata-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --metadata-divider-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --metadata-gap: 0.5em !important;
  --metadata-input-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --metadata-input-font: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --metadata-label-background-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --metadata-label-font: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-label-text-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --metadata-label-text-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --metadata-property-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --metadata-property-background-active: rgb(38, 102, 192) !important;
  --metadata-property-background-hover: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(38, 102, 192) !important;
  --metadata-property-box-shadow-hover: none !important;
  --metadata-sidebar-input-font-size: 0.8rem !important;
  --metadata-sidebar-label-font-size: 0.8rem !important;
  --modal-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --modal-border-color: black !important;
  --modal-border-width: 0 !important;
  --modal-max-height: calc(100vh - 2em) !important;
  --modal-max-width: calc(100vw - 2em) !important;
  --modal-radius: 0.75rem !important;
  --modal-width: 65rem !important;
  --nav-collapse-icon-color: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  ) !important;
  --nav-collapse-icon-color-collapsed: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  ) !important;
  --nav-heading-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --nav-heading-color-collapsed: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --nav-heading-color-collapsed-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --nav-heading-color-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --nav-indentation-guide-color: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  ) !important;
  --nav-item-background-active: rgb(38, 102, 192) !important;
  --nav-item-background-hover: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  ) !important;
  --nav-item-background-selected: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  ) !important;
  --nav-item-children-margin-start: 7.5px !important;
  --nav-item-children-padding-start: calc(1em - 0.5px) !important;
  --nav-item-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --nav-item-color-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --nav-item-padding: 0.375em 0.75em 0.375em 0.75em !important;
  --nav-item-parent-padding: 0.25em 0 0.25em 0 !important;
  --nav-item-radius: 0.25rem !important;
  --nav-item-size: 0.8rem !important;
  --nav-tag-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --nav-tag-color-active: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --nav-tag-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --nav-tag-radius: 0.25rem !important;
  --obsidian-columns-def-span: 1 !important;
  --obsidian-columns-gap: 1em !important;
  --obsidian-columns-min-width: 10em !important;
  --obsidian-columns-padding: 0 0 !important;
  --p-spacing: 1em !important;
  --pdf-background: white !important;
  --pdf-page-background: white !important;
  --pdf-sidebar-background: white !important;
  --pill-background: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  ) !important;
  --pill-background-hover: rgb(38, 102, 192) !important;
  --pill-background-remove-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --pill-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --pill-color: white !important;
  --pill-color-hover: white !important;
  --pill-color-remove: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --pill-color-remove-hover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --pill-focus-left-adjust: 0 !important;
  --pill-focus-width: 100% !important;
  --prompt-background: white !important;
  --prompt-border-color: transparent !important;
  --prompt-border-width: 0 !important;
  --r-background-color: white !important;
  --r-block-margin: 20px !important;
  --r-code-font: ui-monospace, Menlo, SFMono-Regular, Consolas,
    "Roboto Mono", "Source Code Pro", monospace !important;
  --r-heading-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --r-heading-font-weight: 100 !important;
  --r-heading-letter-spacing: normal !important;
  --r-heading-line-height: 1.2 !important;
  --r-heading-margin: 0.67em 0 0 0 !important;
  --r-heading-text-shadow: none !important;
  --r-heading-text-transform: none !important;
  --r-heading1-size: 2.5em !important;
  --r-heading1-text-shadow: none !important;
  --r-heading2-size: 1.6em !important;
  --r-heading3-size: 1.3em !important;
  --r-heading4-size: 1em !important;
  --r-link-color: rgb(138, 92, 245) !important;
  --r-link-color-hover: rgb(166, 139, 249) !important;
  --r-main-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --r-main-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --r-main-font-size: 42px !important;
  --radius-l: 0.75rem !important;
  --radius-m: 0.5rem !important;
  --radius-s: 0.25rem !important;
  --radius-xl: 1rem !important;
  --raised-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --ribbon-width: 3em !important;
  --scrollbar-radius: 0.75rem !important;
  --search-clear-button-color: rgb(38, 102, 192) !important;
  --search-icon-color: rgb(38, 102, 192) !important;
  --search-result-background: white !important;
  --secondary: rgb(138, 92, 245) !important;
  --setting-group-heading-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --setting-group-heading-size: 1rem !important;
  --setting-items-background: none !important;
  --setting-items-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --setting-items-padding: 0 !important;
  --setting-items-radius: 0 !important;
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
  ) 10%, transparent) !important;
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
  ) 10%, transparent) !important;
  --sidebar-markdown-font-size: 12.8px !important;
  --slider-track-background: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  ) !important;
  --status-bar-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --status-bar-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --status-bar-font-size: 0.7rem !important;
  --status-bar-radius: 0.5rem 0 0 0 !important;
  --status-bar-text-color: black !important;
  --suggestion-background: white !important;
  --sync-avatar-color-1: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --sync-avatar-color-2: hsl(from rgb(38, 102, 192) 27 s l) !important;
  --sync-avatar-color-3: hsl(from rgb(38, 102, 192) 57 s l) !important;
  --sync-avatar-color-4: hsl(from rgb(38, 102, 192) 124 s l) !important;
  --sync-avatar-color-5: hsl(from rgb(38, 102, 192) 179 s l) !important;
  --sync-avatar-color-6: hsl(from rgb(38, 102, 192) 219 s l) !important;
  --sync-avatar-color-7: hsl(from rgb(38, 102, 192) 253 s l) !important;
  --sync-avatar-color-8: hsl(from rgb(38, 102, 192) 331 s l) !important;
  --tab-background-active: white !important;
  --tab-background-inactive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --tab-container-background: transparent !important;
  --tab-curve: 0.125em !important;
  --tab-font-size: 0.8rem !important;
  --tab-outline-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --tab-outline-width: 0 !important;
  --tab-radius: 0.25em !important;
  --tab-radius-active: 0.25em !important;
  --tab-stacked-font-size: 0.8rem !important;
  --tab-stacked-header-width: calc(18px + 1rem) !important;
  --tab-switcher-background: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), transparent) !important;
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
  ) 10%, transparent) !important;
  --tab-switcher-preview-radius: 1rem !important;
  --tab-switcher-preview-shadow: none !important;
  --tab-switcher-preview-shadow-active: none !important;
  --tab-text-color: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  ) !important;
  --tab-text-color-active: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  ) !important;
  --tab-text-color-focused: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --tab-text-color-focused-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --tab-text-color-focused-active-current: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --tab-text-color-focused-highlighted: rgb(38, 102, 192) !important;
  --table-add-button-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --table-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --table-drag-handle-background-active: rgb(38, 102, 192) !important;
  --table-drag-handle-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --table-drag-handle-color-active: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --table-header-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --table-header-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(38, 102, 192) !important;
  --tag-background: hsl(
    258,
    88%,
    66%,
    0.15
  ) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(114, 58, 242) !important;
  --tag-color-hover: rgb(138, 92, 245) !important;
  --tag-weight: 400 !important;
  --tertiary: rgb(166, 139, 249) !important;
  --text-accent: rgb(138, 92, 245) !important;
  --text-accent-hover: rgb(166, 139, 249) !important;
  --text-error: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --text-faint: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --text-muted: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --text-normal: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --text-on-accent: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --text-selection: rgba(138, 92, 245, 0.2) !important;
  --text-success: hsl(from rgb(38, 102, 192) 124 s l) !important;
  --text-warning: hsl(from rgb(38, 102, 192) 27 s l) !important;
  --textHighlight: rgb(38, 102, 192) !important;
  --theme-cardAspectRatio: auto !important;
  --theme-cardImageFit: contain !important;
  --theme-color-activeLineHighlight: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --theme-color-audioRecordingActive: hsl(
    from hsl(from rgb(38, 102, 192) 356 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-base: rgb(38, 102, 192) !important;
  --theme-color-baseDarkened12: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 12.5%
  ) !important;
  --theme-color-baseDarkened25: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --theme-color-baseDarkened40: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 40%
  ) !important;
  --theme-color-baseDarkened60: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  ) !important;
  --theme-color-baseDarkened70: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --theme-color-baseDarkened80: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-baseDarkened85: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 85%
  ) !important;
  --theme-color-baseDarkened90: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --theme-color-baseLightened12: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 12.5%
  ) !important;
  --theme-color-baseLightened25: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --theme-color-baseLightened40: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  ) !important;
  --theme-color-baseLightened60: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --theme-color-baseLightened70: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 70%
  ) !important;
  --theme-color-baseLightened80: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-baseLightened85: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 85%
  ) !important;
  --theme-color-baseLightened95: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --theme-color-baseTransparent06: hsl(
    from rgb(38, 102, 192) h s l / 0.06
  ) !important;
  --theme-color-baseTransparent12: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --theme-color-baseTransparent25: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  ) !important;
  --theme-color-baseTransparent35: hsl(
    from rgb(38, 102, 192) h s l / 0.35
  ) !important;
  --theme-color-baseTransparent50: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  ) !important;
  --theme-color-baseTransparent75: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  ) !important;
  --theme-color-blueDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-blueLightened: hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-calendarBg: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 85%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  )) !important;
  --theme-color-calendarDayBg: hsl(from white h s l / 0.75) !important;
  --theme-color-card: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-cardBg: white !important;
  --theme-color-cardBgHover: rgb(38, 102, 192) !important;
  --theme-color-cardHover: white !important;
  --theme-color-communityItemBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-communityItemBgActive: rgb(38, 102, 192) !important;
  --theme-color-communityItemBgHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --theme-color-communityItemBgSelected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 12.5%
  ) !important;
  --theme-color-contentItemBg: hsl(from white h s l / 0.5) !important;
  --theme-color-contentItemBgActive: rgb(38, 102, 192) !important;
  --theme-color-contentItemBgHover: hsl(from white h s l / 0.25) !important;
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
  ) !important;
  --theme-color-controlActive: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ),color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  )) !important;
  --theme-color-controlBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --theme-color-controlBgActive: rgb(38, 102, 192) !important;
  --theme-color-controlBgHover: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 40%
  )) !important;
  --theme-color-controlContentArea: rgb(38, 102, 192) !important;
  --theme-color-controlContentAreaHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-controlHasActiveMenu: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  )) !important;
  --theme-color-controlHover: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  )) !important;
  --theme-color-controlLightweightActive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --theme-color-controlLowWeightBg: hsl(from white h s l / 0.5) !important;
  --theme-color-controlSetBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-controlText: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  ) !important;
  --theme-color-controlTextHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-controlUIHover: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --theme-color-controlUISelected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-cyanDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 179 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-cyanLightened: hsl(
    from hsl(from rgb(38, 102, 192) 179 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-darkenTransparent06: hsl(from black h s l / 0.06) !important;
  --theme-color-darkenTransparent12: hsl(from black h s l / 0.12) !important;
  --theme-color-darkenTransparent25: hsl(from black h s l / 0.25) !important;
  --theme-color-darkenTransparent50: hsl(from black h s l / 0.5) !important;
  --theme-color-darkenTransparent75: hsl(from black h s l / 0.75) !important;
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
  ) !important;
  --theme-color-dragTarget: hsl(
    from rgb(38, 102, 192) h s l / 0.5
  ) !important;
  --theme-color-dragTargetBg: hsl(
    from rgb(38, 102, 192) h s l / 0.25
  ) !important;
  --theme-color-emptyStateBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-gradientBottom: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 40%
  ) !important;
  --theme-color-gradientCardsetBottom: hsl(
    from rgb(38, 102, 192) h s l / 0.06
  ) !important;
  --theme-color-gradientCardsetGeneratedBottom: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --theme-color-gradientCardsetGeneratedTop: hsl(
    from rgb(38, 102, 192) h s l / 0.35
  ) !important;
  --theme-color-gradientCardsetTop: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --theme-color-gradientDarkenedBottom: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --theme-color-gradientDarkenedTop: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 45%
  ) !important;
  --theme-color-gradientTop: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --theme-color-graphLine: black !important;
  --theme-color-graphViewBg: transparent !important;
  --theme-color-greenDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-greenLightened: hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-greenTransparent25: hsl(from hsl(from rgb(38, 102, 192) 124 s l) h s l / 0.25) !important;
  --theme-color-greenTransparent75: hsl(from hsl(from rgb(38, 102, 192) 124 s l) h s l / 0.75) !important;
  --theme-color-hotkey: rgb(38, 102, 192) !important;
  --theme-color-inputBorder: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --theme-color-inputPlaceholder: rgb(38, 102, 192) !important;
  --theme-color-interactiveActive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --theme-color-jiraIssueDanger: white !important;
  --theme-color-jiraIssueDangerBg: hsl(from hsl(from rgb(38, 102, 192) 356 s l) h s l / 0.25) !important;
  --theme-color-jiraIssueDeleteBg: hsl(from rgb(38, 102, 192) 356 s l) !important;
  --theme-color-jiraIssueInfoBg: light-dark(
    hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from rgb(38, 102, 192) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  ) !important;
  --theme-color-jiraIssueStatus: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
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
  ) !important;
  --theme-color-jiraIssueSuccessBg: light-dark(
    hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from rgb(38, 102, 192) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  ) !important;
  --theme-color-jiraIssueTableStripe: light-dark(
    hsl(from white h s l / 0.5),
    hsl(from black h s l / 0.5)
  ) !important;
  --theme-color-jiraIssueWarningBg: light-dark(control
    hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  ) !important;
  --theme-color-kanbanLaneBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-lightenTransparent06: hsl(from white h s l / 0.06) !important;
  --theme-color-lightenTransparent12: hsl(from white h s l / 0.12) !important;
  --theme-color-lightenTransparent25: hsl(from white h s l / 0.25) !important;
  --theme-color-lightenTransparent50: hsl(from white h s l / 0.5) !important;
  --theme-color-lightenTransparent75: hsl(from white h s l / 0.75) !important;
  --theme-color-lineNumbers: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  )) !important;
  --theme-color-log: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-logBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --theme-color-menuBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-mobileToolbarBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-modalContentBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ) !important;
  --theme-color-navFileTag: rgb(38, 102, 192) !important;
  --theme-color-navFileTagActive: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-navFileTagActiveBorder: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-navFileTagBorder: rgb(38, 102, 192) !important;
  --theme-color-navigationButtonBgHover: rgb(38, 102, 192) !important;
  --theme-color-notice: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --theme-color-noticeBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 80%
  ) !important;
  --theme-color-orangeDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 27 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-orangeLightened: hsl(
    from hsl(from rgb(38, 102, 192) 27 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-orangeTransparent25: hsl(from hsl(from rgb(38, 102, 192) 27 s l) h s l / 0.25) !important;
  --theme-color-orangeTransparent75: hsl(from hsl(from rgb(38, 102, 192) 27 s l) h s l / 0.75) !important;
  --theme-color-pinkDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 331 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-pinkLightened: hsl(
    from hsl(from rgb(38, 102, 192) 331 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-promptInstructions: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 40%
  ) !important;
  --theme-color-purpleDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 253 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-purpleLightened: hsl(
    from hsl(from rgb(38, 102, 192) 253 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-queryComponentBg: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --theme-color-redDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 356 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-redLightened: hsl(
    from hsl(from rgb(38, 102, 192) 356 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-redTransparent25: hsl(from hsl(from rgb(38, 102, 192) 356 s l) h s l / 0.25) !important;
  --theme-color-redTransparent75: hsl(from hsl(from rgb(38, 102, 192) 356 s l) h s l / 0.75) !important;
  --theme-color-settingsBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-settingsBgStripe: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --theme-color-settingsGroupBg: hsl(from white h s l / 0.5) !important;
  --theme-color-shadow: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 25%
  ) !important;
  --theme-color-suggestionBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 85%
  ) !important;
  --theme-color-switcherBgActive: rgb(38, 102, 192) !important;
  --theme-color-tabBgInactiveHover: hsl(
    from rgb(38, 102, 192) h s l / 0.75
  ) !important;
  --theme-color-tabNavActiveBg: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 70%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 70%
  )) !important;
  --theme-color-tabNavBg: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 60%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 60%
  )) !important;
  --theme-color-tableHeaderBg: hsl(
    from rgb(38, 102, 192) h s l / 0.12
  ) !important;
  --theme-color-tagBgHover: hsl(
    258,
    90%,
    68%,
    0.1
  ) !important;
  --theme-color-tagBgSidebar: hsl(
    258,
    105.6%,
    66%,
    0.15
  ) !important;
  --theme-color-tagBgSidebarHover: hsl(
    258,
    107.36%,
    75.9%,
    0.15
  ) !important;
  --theme-color-tagHover: rgb(144, 100, 247) !important;
  --theme-color-tagSidebar: rgb(43, 8, 125) !important;
  --theme-color-tagSidebarHover: rgb(49, 8, 145) !important;
  --theme-color-textMeta: rgb(38, 102, 192) !important;
  --theme-color-textSelected: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 80%
  ) !important;
  --theme-color-warningBg: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ) !important;
  --theme-color-yellowDarkened: hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-yellowLightened: hsl(
    from hsl(from rgb(38, 102, 192) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-yellowTransparent25: hsl(from hsl(from rgb(38, 102, 192) 57 s l) h s l / 0.25) !important;
  --theme-color-yellowTransparent75: hsl(from hsl(from rgb(38, 102, 192) 57 s l) h s l / 0.75) !important;
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
  ) !important;
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
  ) !important;
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
  ) !important;
  --theme-grid-cardSet: repeat(
    auto-fit,
    minmax(8em, 1fr)
  ) !important;
  --theme-length-cardImageHeight: 25em !important;
  --theme-length-cardMaxWidth: 1fr !important;
  --theme-length-cardMinWidth: 8em !important;
  --theme-length-checkboxBorderWidth: 1px !important;
  --theme-length-closeButtonWidth: 1.5rem !important;
  --theme-length-collapseIndicatorSize: 1.5rem !important;
  --theme-length-controlSetSpacing: 0.5rem !important;
  --theme-length-fullBorderRadius: 9999px !important;
  --theme-length-radiusXS: 0.125rem !important;
  --theme-length-statusBarHeight: 2rem !important;
  --theme-padding-block: 0.75em
    1.5em !important;
  --theme-padding-blockHorizontal: 1.5em !important;
  --theme-padding-blockVertical: 0.75em !important;
  --theme-setting-lineWidth: 60 !important;
  --theme-shadow-control: 0 1px 2px
    hsl(
      215,
      100.5%,
      11.25%,
      0.5
    ) !important;
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
  ) 15%, transparent) !important;
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
  ) 20%, transparent) !important;
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
      ) !important;
  --theme-value-gradientContrast: 0.2 !important;
  --theme-value-headingScaleFactor: 1.2 !important;
  --theme-value-sidebarFontScalingFactor: 0.8 !important;
  --titleFont: '??', system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 25%
  ) !important;
  --titlebar-text-color: color-mix(in srgb, color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ), transparent 30%) !important;
  --titlebar-text-color-focused: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --traffic-lights-offset-x: calc(18px + 1rem) !important;
  --traffic-lights-offset-y: calc(18px + 1rem) !important;
  --vault-profile-color: color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  ) !important;
  --vault-profile-color-hover: light-dark(color-mix(
    in srgb,
    rgb(38, 102, 192),
    white 95%
  ), color-mix(
    in srgb,
    rgb(38, 102, 192),
    black 90%
  )) !important;
  --vault-profile-font-size: 0.8rem !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: color(srgb 0.361375 0.549813 0.813625);
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body div#quartz-root {
  color: color(srgb 0.01485 0.039975 0.07515);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .text-highlight {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body del {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: line-through color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body p {
  color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515 / 0.7) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px rgb(138, 92, 245);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px rgb(138, 92, 245);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px dashed rgba(138, 92, 245, 0.3);
  text-decoration-style: dashed;
  text-decoration-thickness: 1px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body dt {
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body ol > li {
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body ul > li {
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: color(srgb 0.04455 0.119925 0.22545);
  text-decoration: color(srgb 0.04455 0.119925 0.22545);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body table {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin-left: 75.8906px;
  margin-right: 75.8906px;
  margin-top: 0px;
  width: 241.219px;
}

html[saved-theme="light"] body td {
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

html[saved-theme="light"] body th {
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
    code: `html[saved-theme="light"] body code {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0 0 0 / 0.06);
  border-bottom-color: color(srgb 0.361375 0.549813 0.813625);
  border-left-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-color: color(srgb 0.361375 0.549813 0.813625);
  border-top-color: color(srgb 0.361375 0.549813 0.813625);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0 0 0 / 0.06);
  border-bottom-color: color(srgb 0.361375 0.549813 0.813625);
  border-left-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-color: color(srgb 0.361375 0.549813 0.813625);
  border-top-color: color(srgb 0.361375 0.549813 0.813625);
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: color(srgb 0.7515 0.72135 0.1485);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: color(srgb 0.7515 0.72135 0.1485);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: color(srgb 0.7515 0.72135 0.1485);
  border-left-color: color(srgb 0.7515 0.72135 0.1485);
  border-right-color: color(srgb 0.7515 0.72135 0.1485);
  border-top-color: color(srgb 0.7515 0.72135 0.1485);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: color(srgb 0 0 0 / 0.06);
  border-bottom-color: color(srgb 0.361375 0.549813 0.813625);
  border-left-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-color: color(srgb 0.361375 0.549813 0.813625);
  border-top-color: color(srgb 0.361375 0.549813 0.813625);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: color(srgb 0 0 0 / 0.06);
  border-bottom-color: color(srgb 0.361375 0.549813 0.813625);
  border-left-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-color: color(srgb 0.361375 0.549813 0.813625);
  border-top-color: color(srgb 0.361375 0.549813 0.813625);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body figcaption {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body figure {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body img {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body video {
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
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: color(srgb 0.1485 0.39975 0.7515 / 0.12);
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-left-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-right-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-top-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .transclude {
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

html[saved-theme="light"] body .transclude-inner {
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
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  text-decoration: line-through color(srgb 0.01485 0.039975 0.07515 / 0.7);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(38, 102, 192);
  border-left-color: rgb(38, 102, 192);
  border-right-color: rgb(38, 102, 192);
  border-top-color: rgb(38, 102, 192);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
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

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.957425 0.969988 0.987575);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.957425 0.969988 0.987575);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.957425 0.969988 0.987575);
  border-right-color: color(srgb 0.957425 0.969988 0.987575);
  border-top-color: color(srgb 0.957425 0.969988 0.987575);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0.957425 0.969988 0.987575);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(38, 102, 192);
  color: color(srgb 0.957425 0.969988 0.987575);
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(38, 102, 192);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: color(srgb 0.957425 0.969988 0.987575);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(134, 82, 255, 0.15);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(44, 8, 127);
}

html[saved-theme="light"] body h1 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h2 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h3 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h4 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h5 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body h6 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body hr {
  border-bottom-color: color(srgb 0.361375 0.549813 0.813625);
  border-left-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-color: color(srgb 0.361375 0.549813 0.813625);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  padding-right: 24px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body body {
  scrollbar-color: color(srgb 0.1485 0.39975 0.7515 / 0.25) rgba(0, 0, 0, 0);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.04455 0.119925 0.22545);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: color(srgb 0.04455 0.119925 0.22545);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.04455 0.119925 0.22545);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  text-decoration: color(srgb 0.04455 0.119925 0.22545);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.0297 0.07995 0.1503);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: color(srgb 0.0297 0.07995 0.1503);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(38, 102, 192);
  border-bottom-color: color(srgb 0.8297 0.87995 0.9503);
  border-left-color: color(srgb 0.8297 0.87995 0.9503);
  border-right-color: color(srgb 0.8297 0.87995 0.9503);
  border-top-color: color(srgb 0.8297 0.87995 0.9503);
  color: color(srgb 0.8297 0.87995 0.9503);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="light"] body footer {
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

html[saved-theme="light"] body footer ul li a {
  color: color(srgb 0.04455 0.119925 0.22545);
  text-decoration: color(srgb 0.04455 0.119925 0.22545);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.0297 0.07995 0.1503);
  text-decoration: color(srgb 0.0297 0.07995 0.1503);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.0297 0.07995 0.1503);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: color(srgb 0.0297 0.07995 0.1503);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.0297 0.07995 0.1503);
  text-decoration: color(srgb 0.0297 0.07995 0.1503);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: color(srgb 0.04455 0.119925 0.22545);
  border-left-color: color(srgb 0.04455 0.119925 0.22545);
  border-right-color: color(srgb 0.04455 0.119925 0.22545);
  border-top-color: color(srgb 0.04455 0.119925 0.22545);
  color: color(srgb 0.04455 0.119925 0.22545);
}

html[saved-theme="light"] body .darkmode svg {
  color: color(srgb 0.04455 0.119925 0.22545);
  stroke: color(srgb 0.04455 0.119925 0.22545);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-left-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-right-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-top-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: color(srgb 0.04455 0.119925 0.22545);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .metadata {
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

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-left-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-right-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  border-top-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body .navigation-progress {
  background-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

html[saved-theme="light"] body abbr {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration: underline dotted color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body details {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body input[type=text] {
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

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body sub {
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body summary {
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body sup {
  color: color(srgb 0.01485 0.039975 0.07515);
}`,
  },
};
