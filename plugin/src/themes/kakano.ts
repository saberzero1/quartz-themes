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
    from hsl(215, 67%, 45%) h s l / 0.12
  ), hsl(from black h s l / 0.06)) !important;
  --background-modifier-active-hover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --background-modifier-active-hover-alt: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --background-modifier-border: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --background-modifier-border-focus: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --background-modifier-error: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --background-modifier-error-hover: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --background-modifier-hover: hsl(215, 67%, 45%) !important;
  --background-modifier-message: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --background-modifier-success: hsl(from hsl(215, 67%, 45%) 124 s l) !important;
  --background-primary: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --background-prompt: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --background-secondary: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --base-h: 215 !important;
  --base-l: 45% !important;
  --base-s: 67% !important;
  --bases-cards-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --bases-cards-cover-background: light-dark(hsl(from black h s l / 0.06), hsl(from white h s l / 0.06)) !important;
  --bases-cards-radius: 0.5rem !important;
  --bases-cards-shadow: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 10%, transparent) !important;
  --bases-cards-shadow-hover: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 10%, transparent) !important;
  --bases-embed-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --bases-embed-border-radius: 0.25rem !important;
  --bases-group-heading-property-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent 30%) !important;
  --bases-group-heading-property-size: 0.7rem !important;
  --bases-header-padding-end: 0.5em !important;
  --bases-header-padding-start: 0.5em !important;
  --bases-table-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --bases-table-cell-background-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(215, 67%, 45%) !important;
  --bases-table-container-border-radius: 0.25rem !important;
  --bases-table-header-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --bases-table-header-background-hover: hsl(215, 67%, 45%) !important;
  --bases-table-header-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent 30%) !important;
  --bases-table-summary-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --bases-table-summary-background-hover: hsl(215, 67%, 45%) !important;
  --blockquote-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --bodyFont: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --callout-padding: 0.75em
    1.5em;
  --callout-radius: 0.25rem;
  --canvas-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --canvas-card-label-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --canvas-controls-radius: 0.25rem !important;
  --caret-color: hsl(258, 150%, 80%) !important;
  --checkbox-border-color: hsl(215, 67%, 45%) !important;
  --checkbox-border-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --checkbox-color: hsl(215, 67%, 45%) !important;
  --checkbox-marker-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --checkbox-radius: 0.25rem !important;
  --checklist-done-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent 30%) !important;
  --clickable-icon-radius: 0.25rem !important;
  --code-background: light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  ) !important;
  --code-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --code-bracket-background: hsl(215, 67%, 45%) !important;
  --code-comment: light-dark(
    hsl(from black h s l / 0.5),
    hsl(from white h s l / 0.5)
  ) !important;
  --code-function: hsl(from hsl(215, 67%, 45%) 57 s l) !important;
  --code-important: hsl(from hsl(215, 67%, 45%) 27 s l) !important;
  --code-keyword: hsl(from hsl(215, 67%, 45%) 331 s l) !important;
  --code-normal: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --code-operator: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --code-property: hsl(from hsl(215, 67%, 45%) 179 s l) !important;
  --code-punctuation: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent 30%) !important;
  --code-radius: 0.25rem !important;
  --code-string: hsl(from hsl(215, 67%, 45%) 124 s l) !important;
  --code-tag: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --code-value: hsl(from hsl(215, 67%, 45%) 253 s l) !important;
  --codeFont: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(215, 67%, 45%) !important;
  --collapse-icon-color-collapsed: hsl(215, 67%, 45%) !important;
  --color-blue: hsl(from hsl(215, 67%, 45%) 219 s l) !important;
  --color-cyan: hsl(from hsl(215, 67%, 45%) 179 s l) !important;
  --color-green: hsl(from hsl(215, 67%, 45%) 124 s l) !important;
  --color-orange: hsl(from hsl(215, 67%, 45%) 27 s l) !important;
  --color-pink: hsl(from hsl(215, 67%, 45%) 331 s l) !important;
  --color-purple: hsl(from hsl(215, 67%, 45%) 253 s l) !important;
  --color-red: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --color-yellow: hsl(from hsl(215, 67%, 45%) 57 s l) !important;
  --dark: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --darkgray: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --divider-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --divider-color-hover: hsl(215, 67%, 45%) !important;
  --divider-width: 0 !important;
  --embed-background: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ), inset 0 0 0 1px color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --embed-border-left: none !important;
  --embed-border-right: none !important;
  --embed-border-start: none !important;
  --embed-padding: 1em !important;
  --empty-pane-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --file-header-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --file-header-background-focused: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --file-header-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --file-header-font-size: 0.8rem !important;
  --file-line-width: 37.5rem !important;
  --file-margins: 0 2em !important;
  --flair-background: hsl(215, 67%, 45%) !important;
  --flair-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --font-default: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-interface: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-interface-theme: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-mermaid: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-monospace: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace !important;
  --font-monospace-default: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace !important;
  --font-monospace-theme: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace !important;
  --font-print: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", Arial' !important;
  --font-text: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
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
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --footnote-id-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent 30%) !important;
  --footnote-id-color-no-occurrences: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --footnote-input-background-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --footnote-radius: 0.25rem !important;
  --graph-node: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent 30%) !important;
  --graph-node-attachment: hsl(from hsl(215, 67%, 45%) 57 s l) !important;
  --graph-node-tag: hsl(from hsl(215, 67%, 45%) 124 s l) !important;
  --graph-node-unresolved: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --graph-text: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --gray: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
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
  --headerFont: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --heading-formatting: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --heading-spacing: 0.67em !important;
  --highlight: hsl(215, 67%, 45%) !important;
  --hr-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --icon-color: hsl(215, 67%, 45%) !important;
  --icon-color-active: light-dark(white, black) !important;
  --icon-color-focused: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --icon-color-hover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 27.648px !important;
  --inline-title-weight: 400 !important;
  --input-border-width: 2px !important;
  --input-date-separator: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --input-placeholder-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --input-shadow: 0px 1px 2px
    hsl(
      215,
      6.7%,
      4.5%,
      0.1
    ) !important;
  --interactive-accent: hsl(215, 67%, 45%) !important;
  --light: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --lightgray: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --link-decoration-thickness: 1px !important;
  --link-unresolved-decoration-style: dashed !important;
  --list-bullet-size: 0.25em !important;
  --list-indent: 1.5em !important;
  --list-marker-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --list-marker-color-collapsed: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --list-marker-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent 30%) !important;
  --menu-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --menu-radius: 0.5rem !important;
  --menu-shadow: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 10%, transparent) !important;
  --metadata-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --metadata-divider-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --metadata-gap: 0.5em !important;
  --metadata-input-background-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --metadata-input-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-input-text-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --metadata-label-background-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --metadata-label-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-label-text-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent 30%) !important;
  --metadata-label-text-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent 30%) !important;
  --metadata-property-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --metadata-property-background-active: hsl(215, 67%, 45%) !important;
  --metadata-property-background-hover: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --metadata-property-box-shadow-hover: none !important;
  --metadata-sidebar-input-font-size: 0.8rem !important;
  --metadata-sidebar-label-font-size: 0.8rem !important;
  --modal-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --modal-border-color: black !important;
  --modal-border-width: 0 !important;
  --modal-max-height: calc(100vh - 2em) !important;
  --modal-max-width: calc(100vw - 2em) !important;
  --modal-radius: 0.75rem !important;
  --modal-width: 65rem !important;
  --nav-collapse-icon-color: hsl(
    from hsl(215, 67%, 45%) h s l / 0.75
  ) !important;
  --nav-collapse-icon-color-collapsed: hsl(
    from hsl(215, 67%, 45%) h s l / 0.75
  ) !important;
  --nav-heading-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --nav-heading-color-collapsed: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --nav-heading-color-collapsed-hover: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent 30%) !important;
  --nav-heading-color-hover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --nav-indentation-guide-color: hsl(
    from hsl(215, 67%, 45%) h s l / 0.25
  ) !important;
  --nav-item-background-active: hsl(215, 67%, 45%) !important;
  --nav-item-background-hover: hsl(
    from hsl(215, 67%, 45%) h s l / 0.75
  ) !important;
  --nav-item-background-selected: hsl(
    from hsl(215, 67%, 45%) h s l / 0.25
  ) !important;
  --nav-item-children-margin-start: 7.5px !important;
  --nav-item-children-padding-start: calc(1em - 0.5px) !important;
  --nav-item-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --nav-item-color-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --nav-item-color-hover: black !important;
  --nav-item-color-selected: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --nav-item-padding: 0.375em 0.75em 0.375em 0.75em !important;
  --nav-item-parent-padding: 0.25em 0 0.25em 0 !important;
  --nav-item-radius: 0.25rem !important;
  --nav-item-size: 0.8rem !important;
  --nav-tag-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --nav-tag-color-active: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent 30%) !important;
  --nav-tag-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
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
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --pdf-page-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --pdf-shadow: 0 0 0 1px color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --pdf-sidebar-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --pill-background: hsl(
    from hsl(215, 67%, 45%) h s l / 0.75
  ) !important;
  --pill-background-hover: hsl(215, 67%, 45%) !important;
  --pill-background-remove-hover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --pill-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --pill-color: black !important;
  --pill-color-hover: black !important;
  --pill-color-remove: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --pill-color-remove-hover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --pill-focus-left-adjust: 0 !important;
  --pill-focus-width: 100% !important;
  --prompt-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --prompt-border-color: transparent !important;
  --prompt-border-width: 0 !important;
  --r-background-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --r-block-margin: 20px !important;
  --r-code-font: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace !important;
  --r-heading-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
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
  --r-link-color: hsl(255, 89.76%, 75.9%) !important;
  --r-link-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --r-main-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
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
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --ribbon-width: 3em !important;
  --scrollbar-radius: 0.75rem !important;
  --search-clear-button-color: hsl(215, 67%, 45%) !important;
  --search-icon-color: hsl(215, 67%, 45%) !important;
  --search-result-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --secondary: hsl(215, 67%, 45%) !important;
  --setting-group-heading-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --setting-group-heading-size: 1rem !important;
  --setting-items-background: none !important;
  --setting-items-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --setting-items-padding: 0 !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 10%, transparent) !important;
  --shadow-s: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 10%, transparent) !important;
  --sidebar-markdown-font-size: 12.8px !important;
  --slider-track-background: hsl(
    from hsl(215, 67%, 45%) h s l / 0.5
  ) !important;
  --status-bar-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 60%
  ) !important;
  --status-bar-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --status-bar-font-size: 0.7rem !important;
  --status-bar-radius: 0.5rem 0 0 0 !important;
  --status-bar-text-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --suggestion-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --sync-avatar-color-1: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --sync-avatar-color-2: hsl(from hsl(215, 67%, 45%) 27 s l) !important;
  --sync-avatar-color-3: hsl(from hsl(215, 67%, 45%) 57 s l) !important;
  --sync-avatar-color-4: hsl(from hsl(215, 67%, 45%) 124 s l) !important;
  --sync-avatar-color-5: hsl(from hsl(215, 67%, 45%) 179 s l) !important;
  --sync-avatar-color-6: hsl(from hsl(215, 67%, 45%) 219 s l) !important;
  --sync-avatar-color-7: hsl(from hsl(215, 67%, 45%) 253 s l) !important;
  --sync-avatar-color-8: hsl(from hsl(215, 67%, 45%) 331 s l) !important;
  --tab-background-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --tab-background-inactive: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 85%
  ) !important;
  --tab-container-background: transparent !important;
  --tab-curve: 0.125em !important;
  --tab-font-size: 0.8rem !important;
  --tab-outline-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --tab-outline-width: 0 !important;
  --tab-radius: 0.25em !important;
  --tab-radius-active: 0.25em !important;
  --tab-stacked-font-size: 0.8rem !important;
  --tab-stacked-header-width: calc(18px + 1rem) !important;
  --tab-switcher-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ), transparent) !important;
  --tab-switcher-preview-background-shadow: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 10%, transparent) !important;
  --tab-switcher-preview-radius: 1rem !important;
  --tab-switcher-preview-shadow: none !important;
  --tab-switcher-preview-shadow-active: none !important;
  --tab-text-color: hsl(
    from hsl(215, 67%, 45%) h s l / 0.5
  ) !important;
  --tab-text-color-active: hsl(
    from hsl(215, 67%, 45%) h s l / 0.5
  ) !important;
  --tab-text-color-focused: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --tab-text-color-focused-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --tab-text-color-focused-active-current: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --tab-text-color-focused-highlighted: hsl(215, 67%, 45%) !important;
  --table-add-button-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --table-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --table-drag-handle-background-active: hsl(215, 67%, 45%) !important;
  --table-drag-handle-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --table-drag-handle-color-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --table-header-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --table-header-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --table-selection-border-color: hsl(215, 67%, 45%) !important;
  --tag-background: hsl(258, 88%, 66%, 0.3) !important;
  --tag-color: hsl(
    258,
    96.8%,
    79.2%
  ) !important;
  --tag-weight: 400 !important;
  --text-error: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --text-faint: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --text-muted: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent 30%) !important;
  --text-normal: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --text-on-accent: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --text-success: hsl(from hsl(215, 67%, 45%) 124 s l) !important;
  --text-warning: hsl(from hsl(215, 67%, 45%) 27 s l) !important;
  --textHighlight: hsl(215, 67%, 45%) !important;
  --theme-cardAspectRatio: auto !important;
  --theme-cardImageFit: contain !important;
  --theme-color-activeLineHighlight: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --theme-color-audioRecordingActive: hsl(
    from hsl(from hsl(215, 67%, 45%) 356 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-base: hsl(215, 67%, 45%) !important;
  --theme-color-baseDarkened12: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 12.5%
  ) !important;
  --theme-color-baseDarkened25: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --theme-color-baseDarkened40: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 40%
  ) !important;
  --theme-color-baseDarkened60: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 60%
  ) !important;
  --theme-color-baseDarkened70: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --theme-color-baseDarkened80: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-baseDarkened85: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 85%
  ) !important;
  --theme-color-baseDarkened90: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --theme-color-baseLightened12: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 12.5%
  ) !important;
  --theme-color-baseLightened25: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --theme-color-baseLightened40: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 40%
  ) !important;
  --theme-color-baseLightened60: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --theme-color-baseLightened70: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 70%
  ) !important;
  --theme-color-baseLightened80: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-baseLightened85: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 85%
  ) !important;
  --theme-color-baseLightened95: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --theme-color-baseTransparent06: hsl(
    from hsl(215, 67%, 45%) h s l / 0.06
  ) !important;
  --theme-color-baseTransparent12: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --theme-color-baseTransparent25: hsl(
    from hsl(215, 67%, 45%) h s l / 0.25
  ) !important;
  --theme-color-baseTransparent35: hsl(
    from hsl(215, 67%, 45%) h s l / 0.35
  ) !important;
  --theme-color-baseTransparent50: hsl(
    from hsl(215, 67%, 45%) h s l / 0.5
  ) !important;
  --theme-color-baseTransparent75: hsl(
    from hsl(215, 67%, 45%) h s l / 0.75
  ) !important;
  --theme-color-blockId: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --theme-color-blueDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-blueLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-calendarBg: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 85%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  )) !important;
  --theme-color-calendarDayBg: hsl(from black h s l / 0.5) !important;
  --theme-color-card: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --theme-color-cardBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 95%
  ) !important;
  --theme-color-cardBgHover: hsl(215, 67%, 45%) !important;
  --theme-color-cardHover: black !important;
  --theme-color-communityItemBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-communityItemBgActive: hsl(215, 67%, 45%) !important;
  --theme-color-communityItemBgHover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --theme-color-communityItemBgSelected: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 12.5%
  ) !important;
  --theme-color-contentItemBg: rgb(0, 0, 0, 0.2) !important;
  --theme-color-contentItemBgActive: hsl(215, 67%, 45%) !important;
  --theme-color-contentItemBgHover: rgb(0, 0, 0, 0.1) !important;
  --theme-color-control: light-dark(
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ),
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  )
  ) !important;
  --theme-color-controlActive: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ),color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  )) !important;
  --theme-color-controlBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --theme-color-controlBgActive: hsl(215, 67%, 45%) !important;
  --theme-color-controlBgHover: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 40%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 40%
  )) !important;
  --theme-color-controlContentArea: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --theme-color-controlContentAreaHover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-controlHasActiveMenu: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  )) !important;
  --theme-color-controlHover: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  )) !important;
  --theme-color-controlLightweightActive: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --theme-color-controlLowWeightBg: hsl(from black h s l / 0.25) !important;
  --theme-color-controlSetBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-controlText: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --theme-color-controlTextHover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-controlUIHover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --theme-color-controlUISelected: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --theme-color-cyanDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 179 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-cyanLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 179 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-darkenTransparent06: hsl(from black h s l / 0.06) !important;
  --theme-color-darkenTransparent12: hsl(from black h s l / 0.12) !important;
  --theme-color-darkenTransparent25: hsl(from black h s l / 0.25) !important;
  --theme-color-darkenTransparent50: hsl(from black h s l / 0.5) !important;
  --theme-color-darkenTransparent75: hsl(from black h s l / 0.75) !important;
  --theme-color-dataviewEmpty: light-dark(
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 40%
  ),
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 40%
  )
  ) !important;
  --theme-color-dragTarget: hsl(
    from hsl(215, 67%, 45%) h s l / 0.5
  ) !important;
  --theme-color-dragTargetBg: hsl(
    from hsl(215, 67%, 45%) h s l / 0.25
  ) !important;
  --theme-color-emptyStateBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-gradientBottom: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-gradientCardsetBottom: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --theme-color-gradientCardsetGeneratedBottom: hsl(
    from hsl(215, 67%, 45%) h s l / 0.25
  ) !important;
  --theme-color-gradientCardsetGeneratedTop: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --theme-color-gradientCardsetTop: hsl(
    from hsl(215, 67%, 45%) h s l / 0.06
  ) !important;
  --theme-color-gradientTop: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 60%
  ) !important;
  --theme-color-graphLine: white !important;
  --theme-color-graphViewBg: transparent !important;
  --theme-color-greenDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-greenLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-greenTransparent25: hsl(from hsl(from hsl(215, 67%, 45%) 124 s l) h s l / 0.25) !important;
  --theme-color-greenTransparent75: hsl(from hsl(from hsl(215, 67%, 45%) 124 s l) h s l / 0.75) !important;
  --theme-color-hotkey: hsl(215, 67%, 45%) !important;
  --theme-color-inputBorder: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --theme-color-inputPlaceholder: hsl(215, 67%, 45%) !important;
  --theme-color-interactiveActive: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --theme-color-jiraIssueDanger: white !important;
  --theme-color-jiraIssueDangerBg: hsl(from hsl(from hsl(215, 67%, 45%) 356 s l) h s l / 0.25) !important;
  --theme-color-jiraIssueDeleteBg: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --theme-color-jiraIssueInfoBg: light-dark(
    hsl(
    from hsl(from hsl(215, 67%, 45%) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from hsl(215, 67%, 45%) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  ) !important;
  --theme-color-jiraIssueStatus: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --theme-color-jiraIssueStatusBg: light-dark(
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ),
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  )
  ) !important;
  --theme-color-jiraIssueSuccessBg: light-dark(
    hsl(
    from hsl(from hsl(215, 67%, 45%) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from hsl(215, 67%, 45%) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  ) !important;
  --theme-color-jiraIssueTableStripe: light-dark(
    hsl(from white h s l / 0.5),
    hsl(from black h s l / 0.5)
  ) !important;
  --theme-color-jiraIssueWarningBg: light-dark(control
    hsl(
    from hsl(from hsl(215, 67%, 45%) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from hsl(215, 67%, 45%) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  ) !important;
  --theme-color-kanbanLaneBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-lightenTransparent06: hsl(from white h s l / 0.06) !important;
  --theme-color-lightenTransparent12: hsl(from white h s l / 0.12) !important;
  --theme-color-lightenTransparent25: hsl(from white h s l / 0.25) !important;
  --theme-color-lightenTransparent50: hsl(from white h s l / 0.5) !important;
  --theme-color-lightenTransparent75: hsl(from white h s l / 0.75) !important;
  --theme-color-lineNumbers: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 60%
  )) !important;
  --theme-color-log: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-logBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --theme-color-menuBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-mobileToolbarBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-modalContentBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --theme-color-navFileTag: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --theme-color-navFileTagActive: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-navFileTagActiveBorder: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-navFileTagBorder: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --theme-color-navigationButtonBgHover: hsl(215, 67%, 45%) !important;
  --theme-color-notice: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --theme-color-noticeBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --theme-color-orangeDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 27 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-orangeLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 27 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-orangeTransparent25: hsl(from hsl(from hsl(215, 67%, 45%) 27 s l) h s l / 0.25) !important;
  --theme-color-orangeTransparent75: hsl(from hsl(from hsl(215, 67%, 45%) 27 s l) h s l / 0.75) !important;
  --theme-color-pinkDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 331 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-pinkLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 331 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-promptInstructions: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 40%
  ) !important;
  --theme-color-purpleDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 253 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-purpleLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 253 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-queryComponentBg: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --theme-color-redDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 356 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-redLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 356 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-redTransparent25: hsl(from hsl(from hsl(215, 67%, 45%) 356 s l) h s l / 0.25) !important;
  --theme-color-redTransparent75: hsl(from hsl(from hsl(215, 67%, 45%) 356 s l) h s l / 0.75) !important;
  --theme-color-settingsBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-settingsBgStripe: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --theme-color-settingsGroupBg: hsl(from black h s l / 0.5) !important;
  --theme-color-shadow: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --theme-color-suggestionBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 85%
  ) !important;
  --theme-color-switcherBgActive: hsl(215, 67%, 45%) !important;
  --theme-color-tabBgInactiveHover: hsl(
    from hsl(215, 67%, 45%) h s l / 0.75
  ) !important;
  --theme-color-tabNavActiveBg: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 70%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  )) !important;
  --theme-color-tabNavBg: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 60%
  )) !important;
  --theme-color-tableHeaderBg: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
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
    96.8%,
    52.8%,
    0.5
  ) !important;
  --theme-color-tagHover: hsl(
    258,
    92.4%,
    85.14%
  ) !important;
  --theme-color-tagSidebar: hsl(
    258,
    96.8%,
    79.2%
  ) !important;
  --theme-color-tagSidebarHover: hsl(
    258,
    123.2%,
    85.8%
  ) !important;
  --theme-color-textMeta: hsl(215, 67%, 45%) !important;
  --theme-color-textSelected: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-warningBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --theme-color-yellowDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-yellowLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-yellowTransparent25: hsl(from hsl(from hsl(215, 67%, 45%) 57 s l) h s l / 0.25) !important;
  --theme-color-yellowTransparent75: hsl(from hsl(from hsl(215, 67%, 45%) 57 s l) h s l / 0.75) !important;
  --theme-gradient-bottomToTop: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) 0%,
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 60%
  ) 100%
  ) !important;
  --theme-gradient-topToBottom: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 60%
  ) 0%,
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
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
      6.7%,
      4.5%,
      0.1
    ) !important;
  --theme-shadow-indent: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 3%, transparent),
    0 0 0.2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 6%, transparent),
    0 0 0.4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 9%, transparent),
    0 0 1.2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 12%, transparent),
    0 0 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 15%, transparent) !important;
  --theme-shadow-indent-small: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 4%, transparent),
    0 0 0.2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 8%, transparent),
    0 0 0.6rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 12%, transparent),
    0 0 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 16%, transparent),
    0 0 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) 20%, transparent) !important;
  --theme-shadow-input: 0px 1px 2px
      hsl(
        215,
        33.5%,
        4.5%,
        0.5
      ),
    0px 3.4px 6.7px
      hsl(
        215,
        67%,
        4.5%,
        0.25
      ),
    0px 15px 30px
      hsl(
        215,
        50.25%,
        4.5%,
        0.15
      ) !important;
  --theme-value-gradientContrast: 0.2 !important;
  --theme-value-headingScaleFactor: 1.2 !important;
  --theme-value-sidebarFontScalingFactor: 0.8 !important;
  --titleFont: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --titlebar-text-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent 30%) !important;
  --titlebar-text-color-focused: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --traffic-lights-offset-x: calc(18px + 1rem) !important;
  --traffic-lights-offset-y: calc(18px + 1rem) !important;
  --vault-profile-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --vault-profile-color-hover: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  )) !important;
  --vault-profile-font-size: 0.8rem !important;
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

html[saved-theme="dark"] body .bases-table thead th {
  background-color: color(srgb 0.1485 0.39975 0.7515 / 0.12);
  border-color: color(srgb 0.04455 0.119925 0.22545);
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: color(srgb 0.04455 0.119925 0.22545);
  border-color: color(srgb 0.6594 0.7599 0.9006);
  box-shadow: rgba(8, 11, 15, 0.5) 0px 1px 2px 0px, rgba(4, 10, 19, 0.25) 0px 3.4px 6.7px 0px, rgba(6, 11, 17, 0.15) 0px 15px 30px 0px;
}

html[saved-theme="dark"] body .note-properties {
  background-color: color(srgb 0.0297 0.07995 0.1503);
  border-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
}

html[saved-theme="dark"] body .note-properties-key {
  color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(25, 0, 84, 0.5);
  border-radius: 22.4px;
  color: rgb(181, 151, 253);
}

html[saved-theme="dark"] body .note-properties-value {
  color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
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
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body .text-highlight {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body del {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body h1.article-title {
  color: color(srgb 0.6594 0.7599 0.9006);
  font-size: 12.8px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(38, 102, 192);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: color(srgb 0.6594 0.7599 0.9006);
  border-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body p {
  color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006 / 0.7);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px;
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px;
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
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body ul > li {
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: color(srgb 0.361375 0.549813 0.813625);
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
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: color(srgb 0.007425 0.0199875 0.037575);
  border-bottom-color: color(srgb 0.6594 0.7599 0.9006);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.6594 0.7599 0.9006);
  border-right-color: color(srgb 0.6594 0.7599 0.9006);
  border-top-color: color(srgb 0.6594 0.7599 0.9006);
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
  border-bottom-color: rgb(38, 102, 192);
  border-left-color: rgb(38, 102, 192);
  border-right-color: rgb(38, 102, 192);
  border-top-color: rgb(38, 102, 192);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.6594 0.7599 0.9006);
  text-decoration-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'4,10.5 20,10.5 20,13.5 4,13.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'4,10.5 20,10.5 20,13.5 4,13.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cline x1=\\'12\\' x2=\\'12\\' y1=\\'5\\' y2=\\'13\\'/%3E%3Cline x1=\\'12\\' x2=\\'12\\' y1=\\'19\\' y2=\\'19\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cline x1=\\'12\\' x2=\\'12\\' y1=\\'5\\' y2=\\'13\\'/%3E%3Cline x1=\\'12\\' x2=\\'12\\' y1=\\'19\\' y2=\\'19\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cpath d=\\'M7.5,6.852c0.463,-1.049 1.493,-2.872 4.5,-2.852c3.957,0.026 5.001,2.617 5,4.5c-0.002,2.952 -4.963,3.463 -5,7.5\\'/%3E%3Cpath d=\\'M12.25,20l-0.443,-0\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cpath d=\\'M7.5,6.852c0.463,-1.049 1.493,-2.872 4.5,-2.852c3.957,0.026 5.001,2.617 5,4.5c-0.002,2.952 -4.963,3.463 -5,7.5\\'/%3E%3Cpath d=\\'M12.25,20l-0.443,-0\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'12,-12 48,-12 48,36 12,36\\' transform=\\'rotate(45) translate(5,-12)\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'12,-12 48,-12 48,36 12,36\\' transform=\\'rotate(45) translate(5,-12)\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'15,4.5 6,12 15,19.5 16.75,17.5 10,12 16.75,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'15,4.5 6,12 15,19.5 16.75,17.5 10,12 16.75,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'9,4.5 18,12 9,19.5 7.25,17.5 14,12 7.25,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'9,4.5 18,12 9,19.5 7.25,17.5 14,12 7.25,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'12px\\' height=\\'10px\\' viewBox=\\'0 0 12 8\\' version=\\'1.1\\' xmlns=\\'http://www.w3.org/2000/svg\\' xmlns:xlink=\\'http://www.w3.org/1999/xlink\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg transform=\\'translate(-4.000000, -6.000000)\\' fill=\\'%2523000000\\'%3E%3Cpath d=\\'M8.1043257,14.0367999 L4.52468714,10.5420499 C4.32525014,10.3497722 4.32525014,10.0368095 4.52468714,9.8424863 L5.24777413,9.1439454 C5.44721114,8.95166768 5.77142411,8.95166768 5.97086112,9.1439454 L8.46638057,11.5903727 L14.0291389,6.1442083 C14.2285759,5.95193057 14.5527889,5.95193057 14.7522259,6.1442083 L15.4753129,6.84377194 C15.6747499,7.03604967 15.6747499,7.35003511 15.4753129,7.54129009 L8.82741268,14.0367999 C8.62797568,14.2290777 8.3037627,14.2290777 8.1043257,14.0367999\\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.007425 0.0199875 0.037575);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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

html[saved-theme="dark"] body .callout[data-callout="col-md"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="col"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  cursor: grab;
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.6594 0.7599 0.9006) none 0px;
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
  --callout-color: 2, 122, 255;
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
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.361375 0.549813 0.813625);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: color(srgb 0.1485 0.39975 0.7515 / 0.25);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: color(srgb 0.6594 0.7599 0.9006);
}

html[saved-theme="dark"] body li.depth-0 {
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: color(srgb 0.0297 0.07995 0.1503);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.0297 0.07995 0.1503);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.0297 0.07995 0.1503);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.0297 0.07995 0.1503);
  border-top-style: solid;
  border-top-width: 1px;
  color: color(srgb 0.0297 0.07995 0.1503);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 11.2px;
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
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
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(138, 92, 245, 0.3);
  color: rgb(181, 151, 253);
}`,
  },
  light: {
    base: `:root:root {
  --background-input: light-dark(hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ), hsl(from black h s l / 0.06)) !important;
  --background-modifier-active-hover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --background-modifier-active-hover-alt: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --background-modifier-border: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --background-modifier-border-focus: hsl(215, 67%, 45%) !important;
  --background-modifier-error: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --background-modifier-error-hover: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --background-modifier-hover: hsl(215, 67%, 45%) !important;
  --background-modifier-message: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --background-modifier-success: hsl(from hsl(215, 67%, 45%) 124 s l) !important;
  --background-primary: white !important;
  --background-prompt: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --background-secondary: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
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
    hsl(215, 67%, 45%),
    black 25%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 10%, transparent) !important;
  --bases-cards-shadow-hover: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 10%, transparent) !important;
  --bases-embed-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --bases-embed-border-radius: 0.25rem !important;
  --bases-group-heading-property-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ), transparent 30%) !important;
  --bases-group-heading-property-size: 0.7rem !important;
  --bases-header-padding-end: 0.5em !important;
  --bases-header-padding-start: 0.5em !important;
  --bases-table-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --bases-table-cell-background-active: white !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(215, 67%, 45%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(215, 67%, 45%) !important;
  --bases-table-container-border-radius: 0.25rem !important;
  --bases-table-header-background: white !important;
  --bases-table-header-background-hover: hsl(215, 67%, 45%) !important;
  --bases-table-header-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ), transparent 30%) !important;
  --bases-table-summary-background: white !important;
  --bases-table-summary-background-hover: hsl(215, 67%, 45%) !important;
  --blockquote-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --blur-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent)) !important;
  --bodyFont: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --callout-padding: 0.75em
    1.5em;
  --callout-radius: 0.25rem;
  --canvas-background: white !important;
  --canvas-card-label-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --canvas-controls-radius: 0.25rem !important;
  --caret-color: hsl(258, 150%, 50%) !important;
  --checkbox-border-color: hsl(215, 67%, 45%) !important;
  --checkbox-border-color-hover: hsl(215, 67%, 45%) !important;
  --checkbox-color: hsl(215, 67%, 45%) !important;
  --checkbox-color-hover: hsl(215, 67%, 45%) !important;
  --checkbox-marker-color: white !important;
  --checkbox-radius: 0.25rem !important;
  --checklist-done-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ), transparent 30%) !important;
  --clickable-icon-radius: 0.25rem !important;
  --code-background: light-dark(
    hsl(from black h s l / 0.06),
    hsl(from white h s l / 0.06)
  ) !important;
  --code-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --code-bracket-background: hsl(215, 67%, 45%) !important;
  --code-comment: light-dark(
    hsl(from black h s l / 0.5),
    hsl(from white h s l / 0.5)
  ) !important;
  --code-function: hsl(from hsl(215, 67%, 45%) 57 s l) !important;
  --code-important: hsl(from hsl(215, 67%, 45%) 27 s l) !important;
  --code-keyword: hsl(from hsl(215, 67%, 45%) 331 s l) !important;
  --code-normal: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --code-operator: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --code-property: hsl(from hsl(215, 67%, 45%) 179 s l) !important;
  --code-punctuation: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ), transparent 30%) !important;
  --code-radius: 0.25rem !important;
  --code-string: hsl(from hsl(215, 67%, 45%) 124 s l) !important;
  --code-tag: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --code-value: hsl(from hsl(215, 67%, 45%) 253 s l) !important;
  --codeFont: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(215, 67%, 45%) !important;
  --collapse-icon-color-collapsed: hsl(215, 67%, 45%) !important;
  --color-blue: hsl(from hsl(215, 67%, 45%) 219 s l) !important;
  --color-cyan: hsl(from hsl(215, 67%, 45%) 179 s l) !important;
  --color-green: hsl(from hsl(215, 67%, 45%) 124 s l) !important;
  --color-orange: hsl(from hsl(215, 67%, 45%) 27 s l) !important;
  --color-pink: hsl(from hsl(215, 67%, 45%) 331 s l) !important;
  --color-purple: hsl(from hsl(215, 67%, 45%) 253 s l) !important;
  --color-red: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --color-yellow: hsl(from hsl(215, 67%, 45%) 57 s l) !important;
  --dark: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --darkgray: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --divider-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --divider-color-hover: hsl(215, 67%, 45%) !important;
  --divider-width: 0 !important;
  --embed-background: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ), inset 0 0 0 1px color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --embed-border-left: none !important;
  --embed-border-right: none !important;
  --embed-border-start: none !important;
  --embed-padding: 1em !important;
  --empty-pane-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --file-header-background: white !important;
  --file-header-background-focused: white !important;
  --file-header-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --file-header-font-size: 0.8rem !important;
  --file-line-width: 37.5rem !important;
  --file-margins: 0 2em !important;
  --flair-background: hsl(215, 67%, 45%) !important;
  --flair-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --font-default: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-interface: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-interface-theme: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-mermaid: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --font-monospace: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace, ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace !important;
  --font-monospace-default: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace !important;
  --font-monospace-theme: ui-monospace, Menlo, SFMono-Regular, Consolas,
        "Roboto Mono", "Source Code Pro", monospace !important;
  --font-print: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", Arial' !important;
  --font-text: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
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
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --footnote-id-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ), transparent 30%) !important;
  --footnote-id-color-no-occurrences: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --footnote-input-background-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --footnote-radius: 0.25rem !important;
  --graph-node: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ), transparent 30%) !important;
  --graph-node-attachment: hsl(from hsl(215, 67%, 45%) 57 s l) !important;
  --graph-node-tag: hsl(from hsl(215, 67%, 45%) 124 s l) !important;
  --graph-node-unresolved: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --graph-text: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --gray: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
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
  --headerFont: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --heading-formatting: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --heading-spacing: 0.67em !important;
  --highlight: hsl(215, 67%, 45%) !important;
  --hr-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --icon-color: hsl(215, 67%, 45%) !important;
  --icon-color-active: light-dark(white, black) !important;
  --icon-color-focused: white !important;
  --icon-color-hover: white !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 27.648px !important;
  --inline-title-weight: 400 !important;
  --input-border-width: 2px !important;
  --input-date-separator: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --input-placeholder-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --input-shadow: 0 1px 2px
    hsl(
      215,
      100.5%,
      11.25%,
      0.5
    ) !important;
  --interactive-accent: hsl(215, 67%, 45%) !important;
  --interactive-accent-hover: hsl(215, 67%, 45%) !important;
  --light: white !important;
  --lightgray: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --link-decoration-thickness: 1px !important;
  --link-unresolved-decoration-style: dashed !important;
  --list-bullet-size: 0.25em !important;
  --list-indent: 1.5em !important;
  --list-marker-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --list-marker-color-collapsed: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --list-marker-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ), transparent 30%) !important;
  --menu-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --menu-radius: 0.5rem !important;
  --menu-shadow: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 10%, transparent) !important;
  --metadata-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --metadata-divider-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --metadata-gap: 0.5em !important;
  --metadata-input-background-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --metadata-input-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-input-text-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --metadata-label-background-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --metadata-label-font: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --metadata-label-text-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ), transparent 30%) !important;
  --metadata-label-text-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ), transparent 30%) !important;
  --metadata-property-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --metadata-property-background-active: hsl(215, 67%, 45%) !important;
  --metadata-property-background-hover: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(215, 67%, 45%) !important;
  --metadata-property-box-shadow-hover: none !important;
  --metadata-sidebar-input-font-size: 0.8rem !important;
  --metadata-sidebar-label-font-size: 0.8rem !important;
  --modal-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --modal-border-color: black !important;
  --modal-border-width: 0 !important;
  --modal-max-height: calc(100vh - 2em) !important;
  --modal-max-width: calc(100vw - 2em) !important;
  --modal-radius: 0.75rem !important;
  --modal-width: 65rem !important;
  --nav-collapse-icon-color: hsl(
    from hsl(215, 67%, 45%) h s l / 0.75
  ) !important;
  --nav-collapse-icon-color-collapsed: hsl(
    from hsl(215, 67%, 45%) h s l / 0.75
  ) !important;
  --nav-heading-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --nav-heading-color-collapsed: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --nav-heading-color-collapsed-hover: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ), transparent 30%) !important;
  --nav-heading-color-hover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --nav-indentation-guide-color: hsl(
    from hsl(215, 67%, 45%) h s l / 0.25
  ) !important;
  --nav-item-background-active: hsl(215, 67%, 45%) !important;
  --nav-item-background-hover: hsl(
    from hsl(215, 67%, 45%) h s l / 0.75
  ) !important;
  --nav-item-background-selected: hsl(
    from hsl(215, 67%, 45%) h s l / 0.25
  ) !important;
  --nav-item-children-margin-start: 7.5px !important;
  --nav-item-children-padding-start: calc(1em - 0.5px) !important;
  --nav-item-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --nav-item-color-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --nav-item-padding: 0.375em 0.75em 0.375em 0.75em !important;
  --nav-item-parent-padding: 0.25em 0 0.25em 0 !important;
  --nav-item-radius: 0.25rem !important;
  --nav-item-size: 0.8rem !important;
  --nav-tag-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --nav-tag-color-active: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ), transparent 30%) !important;
  --nav-tag-color-hover: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
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
    from hsl(215, 67%, 45%) h s l / 0.75
  ) !important;
  --pill-background-hover: hsl(215, 67%, 45%) !important;
  --pill-background-remove-hover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --pill-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --pill-color: white !important;
  --pill-color-hover: white !important;
  --pill-color-remove: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --pill-color-remove-hover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
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
    hsl(215, 67%, 45%),
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
  --r-link-color: hsl(258, 88%, 66%) !important;
  --r-link-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --r-main-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
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
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --ribbon-width: 3em !important;
  --scrollbar-radius: 0.75rem !important;
  --search-clear-button-color: hsl(215, 67%, 45%) !important;
  --search-icon-color: hsl(215, 67%, 45%) !important;
  --search-result-background: white !important;
  --secondary: hsl(215, 67%, 45%) !important;
  --setting-group-heading-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --setting-group-heading-size: 1rem !important;
  --setting-items-background: none !important;
  --setting-items-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --setting-items-padding: 0 !important;
  --setting-items-radius: 0 !important;
  --shadow-l: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 10%, transparent) !important;
  --shadow-s: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 2%, transparent),
    0 0.05rem 0.1rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 4%, transparent),
    0 0.1rem 0.3rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 6%, transparent),
    0 0.3rem 0.5rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 8%, transparent),
    0 0.5rem 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 10%, transparent) !important;
  --sidebar-markdown-font-size: 12.8px !important;
  --slider-track-background: hsl(
    from hsl(215, 67%, 45%) h s l / 0.5
  ) !important;
  --status-bar-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --status-bar-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --status-bar-font-size: 0.7rem !important;
  --status-bar-radius: 0.5rem 0 0 0 !important;
  --status-bar-text-color: black !important;
  --suggestion-background: white !important;
  --sync-avatar-color-1: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --sync-avatar-color-2: hsl(from hsl(215, 67%, 45%) 27 s l) !important;
  --sync-avatar-color-3: hsl(from hsl(215, 67%, 45%) 57 s l) !important;
  --sync-avatar-color-4: hsl(from hsl(215, 67%, 45%) 124 s l) !important;
  --sync-avatar-color-5: hsl(from hsl(215, 67%, 45%) 179 s l) !important;
  --sync-avatar-color-6: hsl(from hsl(215, 67%, 45%) 219 s l) !important;
  --sync-avatar-color-7: hsl(from hsl(215, 67%, 45%) 253 s l) !important;
  --sync-avatar-color-8: hsl(from hsl(215, 67%, 45%) 331 s l) !important;
  --tab-background-active: white !important;
  --tab-background-inactive: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --tab-container-background: transparent !important;
  --tab-curve: 0.125em !important;
  --tab-font-size: 0.8rem !important;
  --tab-outline-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --tab-outline-width: 0 !important;
  --tab-radius: 0.25em !important;
  --tab-radius-active: 0.25em !important;
  --tab-stacked-font-size: 0.8rem !important;
  --tab-stacked-header-width: calc(18px + 1rem) !important;
  --tab-switcher-background: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), transparent) !important;
  --tab-switcher-preview-background-shadow: 0 0 0.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 2%, transparent),
    0 0.2rem 0.4rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 4%, transparent),
    0 0.4rem 1.2rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 6%, transparent),
    0 1.2rem 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 8%, transparent),
    0 2rem 4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 10%, transparent) !important;
  --tab-switcher-preview-radius: 1rem !important;
  --tab-switcher-preview-shadow: none !important;
  --tab-switcher-preview-shadow-active: none !important;
  --tab-text-color: hsl(
    from hsl(215, 67%, 45%) h s l / 0.5
  ) !important;
  --tab-text-color-active: hsl(
    from hsl(215, 67%, 45%) h s l / 0.5
  ) !important;
  --tab-text-color-focused: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --tab-text-color-focused-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --tab-text-color-focused-active-current: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --tab-text-color-focused-highlighted: hsl(215, 67%, 45%) !important;
  --table-add-button-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --table-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --table-drag-handle-background-active: hsl(215, 67%, 45%) !important;
  --table-drag-handle-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --table-drag-handle-color-active: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --table-header-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --table-header-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --table-selection-border-color: hsl(215, 67%, 45%) !important;
  --tag-background: hsl(
    258,
    88%,
    66%,
    0.15
  ) !important;
  --tag-color: hsl(
    258,
    88%,
    59.4%
  ) !important;
  --tag-weight: 400 !important;
  --tertiary: hsl(215, 67%, 45%) !important;
  --text-error: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --text-faint: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --text-muted: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ), transparent 30%) !important;
  --text-normal: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --text-on-accent: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --text-success: hsl(from hsl(215, 67%, 45%) 124 s l) !important;
  --text-warning: hsl(from hsl(215, 67%, 45%) 27 s l) !important;
  --textHighlight: hsl(215, 67%, 45%) !important;
  --theme-cardAspectRatio: auto !important;
  --theme-cardImageFit: contain !important;
  --theme-color-activeLineHighlight: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --theme-color-audioRecordingActive: hsl(
    from hsl(from hsl(215, 67%, 45%) 356 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-base: hsl(215, 67%, 45%) !important;
  --theme-color-baseDarkened12: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 12.5%
  ) !important;
  --theme-color-baseDarkened25: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --theme-color-baseDarkened40: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 40%
  ) !important;
  --theme-color-baseDarkened60: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 60%
  ) !important;
  --theme-color-baseDarkened70: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --theme-color-baseDarkened80: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-baseDarkened85: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 85%
  ) !important;
  --theme-color-baseDarkened90: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --theme-color-baseLightened12: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 12.5%
  ) !important;
  --theme-color-baseLightened25: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --theme-color-baseLightened40: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 40%
  ) !important;
  --theme-color-baseLightened60: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --theme-color-baseLightened70: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 70%
  ) !important;
  --theme-color-baseLightened80: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-baseLightened85: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 85%
  ) !important;
  --theme-color-baseLightened95: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --theme-color-baseTransparent06: hsl(
    from hsl(215, 67%, 45%) h s l / 0.06
  ) !important;
  --theme-color-baseTransparent12: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --theme-color-baseTransparent25: hsl(
    from hsl(215, 67%, 45%) h s l / 0.25
  ) !important;
  --theme-color-baseTransparent35: hsl(
    from hsl(215, 67%, 45%) h s l / 0.35
  ) !important;
  --theme-color-baseTransparent50: hsl(
    from hsl(215, 67%, 45%) h s l / 0.5
  ) !important;
  --theme-color-baseTransparent75: hsl(
    from hsl(215, 67%, 45%) h s l / 0.75
  ) !important;
  --theme-color-blueDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-blueLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-calendarBg: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 85%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  )) !important;
  --theme-color-calendarDayBg: hsl(from white h s l / 0.75) !important;
  --theme-color-card: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-cardBg: white !important;
  --theme-color-cardBgHover: hsl(215, 67%, 45%) !important;
  --theme-color-cardHover: white !important;
  --theme-color-communityItemBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-communityItemBgActive: hsl(215, 67%, 45%) !important;
  --theme-color-communityItemBgHover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --theme-color-communityItemBgSelected: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 12.5%
  ) !important;
  --theme-color-contentItemBg: hsl(from white h s l / 0.5) !important;
  --theme-color-contentItemBgActive: hsl(215, 67%, 45%) !important;
  --theme-color-contentItemBgHover: hsl(from white h s l / 0.25) !important;
  --theme-color-control: light-dark(
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ),
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  )
  ) !important;
  --theme-color-controlActive: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ),color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  )) !important;
  --theme-color-controlBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --theme-color-controlBgActive: hsl(215, 67%, 45%) !important;
  --theme-color-controlBgHover: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 40%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 40%
  )) !important;
  --theme-color-controlContentArea: hsl(215, 67%, 45%) !important;
  --theme-color-controlContentAreaHover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-controlHasActiveMenu: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  )) !important;
  --theme-color-controlHover: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  )) !important;
  --theme-color-controlLightweightActive: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --theme-color-controlLowWeightBg: hsl(from white h s l / 0.5) !important;
  --theme-color-controlSetBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-controlText: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  ) !important;
  --theme-color-controlTextHover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-controlUIHover: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --theme-color-controlUISelected: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-cyanDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 179 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-cyanLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 179 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-darkenTransparent06: hsl(from black h s l / 0.06) !important;
  --theme-color-darkenTransparent12: hsl(from black h s l / 0.12) !important;
  --theme-color-darkenTransparent25: hsl(from black h s l / 0.25) !important;
  --theme-color-darkenTransparent50: hsl(from black h s l / 0.5) !important;
  --theme-color-darkenTransparent75: hsl(from black h s l / 0.75) !important;
  --theme-color-dataviewEmpty: light-dark(
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 40%
  ),
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 40%
  )
  ) !important;
  --theme-color-dragTarget: hsl(
    from hsl(215, 67%, 45%) h s l / 0.5
  ) !important;
  --theme-color-dragTargetBg: hsl(
    from hsl(215, 67%, 45%) h s l / 0.25
  ) !important;
  --theme-color-emptyStateBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-gradientBottom: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 40%
  ) !important;
  --theme-color-gradientCardsetBottom: hsl(
    from hsl(215, 67%, 45%) h s l / 0.06
  ) !important;
  --theme-color-gradientCardsetGeneratedBottom: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --theme-color-gradientCardsetGeneratedTop: hsl(
    from hsl(215, 67%, 45%) h s l / 0.35
  ) !important;
  --theme-color-gradientCardsetTop: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --theme-color-gradientDarkenedBottom: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --theme-color-gradientDarkenedTop: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 45%
  ) !important;
  --theme-color-gradientTop: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --theme-color-graphLine: black !important;
  --theme-color-graphViewBg: transparent !important;
  --theme-color-greenDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-greenLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-greenTransparent25: hsl(from hsl(from hsl(215, 67%, 45%) 124 s l) h s l / 0.25) !important;
  --theme-color-greenTransparent75: hsl(from hsl(from hsl(215, 67%, 45%) 124 s l) h s l / 0.75) !important;
  --theme-color-hotkey: hsl(215, 67%, 45%) !important;
  --theme-color-inputBorder: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --theme-color-inputPlaceholder: hsl(215, 67%, 45%) !important;
  --theme-color-interactiveActive: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --theme-color-jiraIssueDanger: white !important;
  --theme-color-jiraIssueDangerBg: hsl(from hsl(from hsl(215, 67%, 45%) 356 s l) h s l / 0.25) !important;
  --theme-color-jiraIssueDeleteBg: hsl(from hsl(215, 67%, 45%) 356 s l) !important;
  --theme-color-jiraIssueInfoBg: light-dark(
    hsl(
    from hsl(from hsl(215, 67%, 45%) 219 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from hsl(215, 67%, 45%) 219 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  ) !important;
  --theme-color-jiraIssueStatus: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --theme-color-jiraIssueStatusBg: light-dark(
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ),
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  )
  ) !important;
  --theme-color-jiraIssueSuccessBg: light-dark(
    hsl(
    from hsl(from hsl(215, 67%, 45%) 124 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from hsl(215, 67%, 45%) 124 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  ) !important;
  --theme-color-jiraIssueTableStripe: light-dark(
    hsl(from white h s l / 0.5),
    hsl(from black h s l / 0.5)
  ) !important;
  --theme-color-jiraIssueWarningBg: light-dark(control
    hsl(
    from hsl(from hsl(215, 67%, 45%) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  ),
    hsl(
    from hsl(from hsl(215, 67%, 45%) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  )
  ) !important;
  --theme-color-kanbanLaneBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-lightenTransparent06: hsl(from white h s l / 0.06) !important;
  --theme-color-lightenTransparent12: hsl(from white h s l / 0.12) !important;
  --theme-color-lightenTransparent25: hsl(from white h s l / 0.25) !important;
  --theme-color-lightenTransparent50: hsl(from white h s l / 0.5) !important;
  --theme-color-lightenTransparent75: hsl(from white h s l / 0.75) !important;
  --theme-color-lineNumbers: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 60%
  )) !important;
  --theme-color-log: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-logBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --theme-color-menuBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-mobileToolbarBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-modalContentBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) !important;
  --theme-color-navFileTag: hsl(215, 67%, 45%) !important;
  --theme-color-navFileTagActive: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-navFileTagActiveBorder: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-navFileTagBorder: hsl(215, 67%, 45%) !important;
  --theme-color-navigationButtonBgHover: hsl(215, 67%, 45%) !important;
  --theme-color-notice: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --theme-color-noticeBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 80%
  ) !important;
  --theme-color-orangeDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 27 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-orangeLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 27 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-orangeTransparent25: hsl(from hsl(from hsl(215, 67%, 45%) 27 s l) h s l / 0.25) !important;
  --theme-color-orangeTransparent75: hsl(from hsl(from hsl(215, 67%, 45%) 27 s l) h s l / 0.75) !important;
  --theme-color-pinkDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 331 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-pinkLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 331 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-promptInstructions: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 40%
  ) !important;
  --theme-color-purpleDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 253 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-purpleLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 253 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-queryComponentBg: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --theme-color-redDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 356 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-redLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 356 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-redTransparent25: hsl(from hsl(from hsl(215, 67%, 45%) 356 s l) h s l / 0.25) !important;
  --theme-color-redTransparent75: hsl(from hsl(from hsl(215, 67%, 45%) 356 s l) h s l / 0.75) !important;
  --theme-color-settingsBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-settingsBgStripe: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --theme-color-settingsGroupBg: hsl(from white h s l / 0.5) !important;
  --theme-color-shadow: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) !important;
  --theme-color-suggestionBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 85%
  ) !important;
  --theme-color-switcherBgActive: hsl(215, 67%, 45%) !important;
  --theme-color-tabBgInactiveHover: hsl(
    from hsl(215, 67%, 45%) h s l / 0.75
  ) !important;
  --theme-color-tabNavActiveBg: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 70%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 70%
  )) !important;
  --theme-color-tabNavBg: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 60%
  )) !important;
  --theme-color-tableHeaderBg: hsl(
    from hsl(215, 67%, 45%) h s l / 0.12
  ) !important;
  --theme-color-tagBgHover: hsl(
    258,
    89.76%,
    68.31%,
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
  --theme-color-tagHover: hsl(
    258,
    89.76%,
    68.31%
  ) !important;
  --theme-color-tagSidebar: hsl(
    258,
    88%,
    26.4%
  ) !important;
  --theme-color-tagSidebarHover: hsl(
    258,
    89.76%,
    30.36%
  ) !important;
  --theme-color-textMeta: hsl(215, 67%, 45%) !important;
  --theme-color-textSelected: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 80%
  ) !important;
  --theme-color-warningBg: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ) !important;
  --theme-color-yellowDarkened: hsl(
    from hsl(from hsl(215, 67%, 45%) 57 s l) h calc(s * 1.5) calc(l * 0.5)
  ) !important;
  --theme-color-yellowLightened: hsl(
    from hsl(from hsl(215, 67%, 45%) 57 s l) h calc(s * 1.5) calc(l * 1.5)
  ) !important;
  --theme-color-yellowTransparent25: hsl(from hsl(from hsl(215, 67%, 45%) 57 s l) h s l / 0.25) !important;
  --theme-color-yellowTransparent75: hsl(from hsl(from hsl(215, 67%, 45%) 57 s l) h s l / 0.75) !important;
  --theme-gradient-DarkenedTopToBottom: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 45%
  ) 0%,
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) 100%
  ) !important;
  --theme-gradient-bottomToTop: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 40%
  ) 0%,
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) 100%
  ) !important;
  --theme-gradient-topToBottom: linear-gradient(
    0deg,
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 60%
  ) 0%,
    color-mix(
    in srgb,
    hsl(215, 67%, 45%),
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
    hsl(215, 67%, 45%),
    black 25%
  ) 3%, transparent),
    0 0 0.2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 6%, transparent),
    0 0 0.4rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 9%, transparent),
    0 0 1.2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 12%, transparent),
    0 0 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 15%, transparent) !important;
  --theme-shadow-indent-small: 0 0 0.05rem
      color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 4%, transparent),
    0 0 0.2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 8%, transparent),
    0 0 0.6rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 12%, transparent),
    0 0 1rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 16%, transparent),
    0 0 2rem color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 25%
  ) 20%, transparent) !important;
  --theme-shadow-input: 0 1px 2px
      hsl(
        215,
        100.5%,
        11.25%,
        0.2
      ),
    0 3.4px 6.7px
      hsl(
        215,
        67%,
        11.25%,
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
  --titleFont: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 25%
  ) !important;
  --titlebar-text-color: color-mix(in srgb, color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ), transparent 30%) !important;
  --titlebar-text-color-focused: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --traffic-lights-offset-x: calc(18px + 1rem) !important;
  --traffic-lights-offset-y: calc(18px + 1rem) !important;
  --vault-profile-color: color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  ) !important;
  --vault-profile-color-hover: light-dark(color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    white 95%
  ), color-mix(
    in srgb,
    hsl(215, 67%, 45%),
    black 90%
  )) !important;
  --vault-profile-font-size: 0.8rem !important;
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

html[saved-theme="light"] body .bases-table thead th {
  background-color: color(srgb 0.1485 0.39975 0.7515 / 0.12);
  border-color: color(srgb 0.6594 0.7599 0.9006);
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .canvas-node {
  border-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .canvas-node-content {
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .canvas-node-file {
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: color(srgb 0.8297 0.87995 0.9503);
  border-color: color(srgb 0.01485 0.039975 0.07515);
  box-shadow: rgba(0, 24, 57, 0.2) 0px 1px 2px 0px, rgba(9, 25, 48, 0.15) 0px 3.4px 6.7px 0px, rgba(14, 26, 43, 0.05) 0px 15px 30px 0px;
}

html[saved-theme="light"] body .note-properties {
  background-color: color(srgb 0.957425 0.969988 0.987575);
  border-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
}

html[saved-theme="light"] body .note-properties-key {
  color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(134, 82, 255, 0.15);
  border-radius: 22.4px;
  color: rgb(44, 8, 127);
}

html[saved-theme="light"] body .note-properties-value {
  color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
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
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body .text-highlight {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body del {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body h1.article-title {
  color: color(srgb 0.01485 0.039975 0.07515);
  font-size: 12.8px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(38, 102, 192);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(38, 102, 192);
  border-color: rgb(38, 102, 192);
}

html[saved-theme="light"] body p {
  color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515 / 0.7) none 0px;
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515 / 0.7);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px;
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-decoration: underline 1px;
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
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.01485 0.039975 0.07515);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.01485 0.039975 0.07515);
  border-right-color: color(srgb 0.01485 0.039975 0.07515);
  border-top-color: color(srgb 0.01485 0.039975 0.07515);
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
  border-bottom-color: rgb(38, 102, 192);
  border-left-color: rgb(38, 102, 192);
  border-right-color: rgb(38, 102, 192);
  border-top-color: rgb(38, 102, 192);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.01485 0.039975 0.07515);
  text-decoration-color: color(srgb 0.01485 0.039975 0.07515);
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
  background-color: rgb(38, 102, 192);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cpath d=\\'M7.5,6.852c0.463,-1.049 1.493,-2.872 4.5,-2.852c3.957,0.026 5.001,2.617 5,4.5c-0.002,2.952 -4.963,3.463 -5,7.5\\'/%3E%3Cpath d=\\'M12.25,20l-0.443,-0\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cpath d=\\'M7.5,6.852c0.463,-1.049 1.493,-2.872 4.5,-2.852c3.957,0.026 5.001,2.617 5,4.5c-0.002,2.952 -4.963,3.463 -5,7.5\\'/%3E%3Cpath d=\\'M12.25,20l-0.443,-0\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 102, 192);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'12,-12 48,-12 48,36 12,36\\' transform=\\'rotate(45) translate(5,-12)\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'12,-12 48,-12 48,36 12,36\\' transform=\\'rotate(45) translate(5,-12)\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 102, 192);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'15,4.5 6,12 15,19.5 16.75,17.5 10,12 16.75,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=\\'24px\\' height=\\'24px\\' viewBox=\\'0 0 24 24\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg stroke=\\'none\\' stroke-width=\\'1\\' fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2523000000\\'%3E%3Cpolyline points=\\'15,4.5 6,12 15,19.5 16.75,17.5 10,12 16.75,6.5\\'%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 102, 192);
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
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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

html[saved-theme="light"] body .callout[data-callout="col-md"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="col"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  cursor: grab;
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  outline: color(srgb 0.01485 0.039975 0.07515) none 0px;
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
  --callout-color: 8, 109, 221;
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
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.04455 0.119925 0.22545);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: color(srgb 0.1485 0.39975 0.7515 / 0.25);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: color(srgb 0.01485 0.039975 0.07515);
}

html[saved-theme="light"] body li.depth-0 {
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: color(srgb 0.8297 0.87995 0.9503);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.8297 0.87995 0.9503);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.8297 0.87995 0.9503);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.8297 0.87995 0.9503);
  border-top-style: solid;
  border-top-width: 1px;
  color: color(srgb 0.8297 0.87995 0.9503);
  font-family: "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "??", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 11.2px;
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
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
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(138, 92, 245, 0.15);
  color: rgb(115, 60, 243);
}`,
  },
};
