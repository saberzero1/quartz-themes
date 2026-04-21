import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "yin-and-yang",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "mox-icons",
        style: "normal",
        weight: "normal",
        file: "mox-icons.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Karmilla",
        style: "normal",
        weight: "normal",
        file: "karmilla.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-hsl: 317, 100%, 90% !important;
  --as-filter: blur(0px) brightness(90%) saturate(0%) !important;
  --as-repeat: repeat !important;
  --as-size: 50px !important;
  --ash: #232630 !important;
  --background-match-highlight: hsla(317, 40%, 62%, 0.2) !important;
  --background-modifier-accent: hsl(
    317,
    100%,
    83%
  ) !important;
  --background-modifier-border: hsl(
    205,
    23%,
    19%
  ) !important;
  --background-modifier-cover: hsla(
    205,
    23%,
    15%,
    0.5
  ) !important;
  --background-modifier-error: #e60026 !important;
  --background-modifier-error-hover: red !important;
  --background-modifier-form-field: hsla(
    205,
    23%,
    10%,
    0.8
  ) !important;
  --background-modifier-form-field-highlighted: hsla(
    205,
    23%,
    10%,
    0.8
  ) !important;
  --background-modifier-form-field-hover: hsla(
    205,
    23%,
    10%,
    0.8
  ) !important;
  --background-primary: hsl(205, 23%, 5%) !important;
  --background-primary-alt: hsla(
    205,
    23%,
    10%,
    0.8
  ) !important;
  --background-secondary: hsl(
    205,
    23%,
    7%
  ) !important;
  --background-secondary-alt: hsl(
    205,
    23%,
    7%
  ) !important;
  --background-tertiary: hsl(
    205,
    23%,
    15%
  ) !important;
  --background-translucent: hsla(
    205,
    23%,
    5%,
    0.8
  ) !important;
  --background-transparent: hsla(
    205,
    23%,
    5%,
    0
  ) !important;
  --background-zero: hsla(
    205,
    23%,
    10%,
    1
  ) !important;
  --base-d: 5% !important;
  --base-h: 205 !important;
  --base-l: 94% !important;
  --base-s: 23% !important;
  --bases-cards-background: hsl(205, 23%, 5%) !important;
  --bases-cards-cover-background: hsla(
    205,
    23%,
    10%,
    0.8
  ) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(
    205,
    23%,
    19%
  ) !important;
  --bases-embed-border-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --bases-group-heading-property-color: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --bases-table-border-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --bases-table-cell-background-active: hsl(205, 23%, 5%) !important;
  --bases-table-cell-background-disabled: hsla(
    205,
    23%,
    10%,
    0.8
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
    317,
    100%,
    90%
  ) !important;
  --bases-table-group-background: hsla(
    205,
    23%,
    10%,
    0.8
  ) !important;
  --bases-table-header-background: hsl(205, 23%, 5%) !important;
  --bases-table-header-color: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --bases-table-summary-background: hsl(205, 23%, 5%) !important;
  --blockquote-bg: hsla(310, 100%,
    84%, 0.05) !important;
  --blockquote-border: 310, 100%,
    84% !important;
  --blockquote-border-color: hsl(
    317,
    100%,
    90%
  ) !important;
  --blue-highlighter: #adccffa6 !important;
  --bodyFont: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --boldblue: #99e7ff !important;
  --boldgreen: #85ffa4 !important;
  --boldlightpink: 310, 100%, 84% !important;
  --boldorange: #ffb86c !important;
  --boldpink: 310, 100%, 70% !important;
  --boldpurple: #7322e6 !important;
  --boldred: #ff5555 !important;
  --boldyellow: #ffff00 !important;
  --bp-filter: blur(0px) brightness(90%) saturate(0%) !important;
  --bp-repeat: repeat !important;
  --bp-size: 50px !important;
  --canvas-background: hsl(205, 23%, 5%) !important;
  --canvas-card-label-color: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --caret-color: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --cerulean: #84b6ff !important;
  --checkbox-after: hsl(
    317,
    100%,
    90%
  ) !important;
  --checkbox-base: hsl(205, 23%, 15%) !important;
  --checkbox-border-color: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --checkbox-border-color-hover: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --checkbox-color: hsl(
    317,
    100%,
    90%
  ) !important;
  --checkbox-color-hover: hsl(
    317,
    100%,
    85%
  ) !important;
  --checkbox-marker-color: hsl(205, 23%, 5%) !important;
  --checklist-done-color: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --code-background: hsla(
    205,
    23%,
    10%,
    0.8
  ) !important;
  --code-block: #bdd2ff !important;
  --code-block-border: #d8dee9 !important;
  --code-border-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --code-comment: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --code-font-size: 0.9em !important;
  --code-line-height: 1.50667em !important;
  --code-normal: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --code-punctuation: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --codeFont: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --collapse-icon-color-collapsed: hsl(
    317,
    100%,
    88%
  ) !important;
  --cornflower-blue: #a1c4fd !important;
  --cp-filter: blur(0px) brightness(90%) saturate(0%) !important;
  --cp-repeat: repeat !important;
  --cp-size: 50px !important;
  --custom-ed-line-thickness: 1px !important;
  --custom-line-indent: 40px !important;
  --custom-pre-line-thickness: 1px !important;
  --d-accent-h: 317 !important;
  --d-accent-l: 90% !important;
  --d-accent-s: 100% !important;
  --d-blockquote-h: 310 !important;
  --d-blockquote-l: 84% !important;
  --d-blockquote-s: 100% !important;
  --dark: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --dark0: #2e3440 !important;
  --dark1: #3b4252 !important;
  --dark2: #434c5e !important;
  --dark3: #4c566a !important;
  --dark4: #0f0e14 !important;
  --dark5: #0b0b0b !important;
  --darkbrown: #34343d !important;
  --darkgray: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --default-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --divider-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --divider-color-hover: hsl(
    317,
    100%,
    90%
  ) !important;
  --dusk: #474e5e !important;
  --duskblue: #a2acc3 !important;
  --editor-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --editor-font-size: 1rem !important;
  --editor-font-weight: 400 !important;
  --editor-line-height: 1.756666em !important;
  --em-color: #84b6ff !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(
    205,
    23%,
    19%
  ), inset 0 0 0 1px hsl(
    205,
    23%,
    19%
  ) !important;
  --embed-border-start: 2px solid hsl(
    317,
    100%,
    90%
  ) !important;
  --f-header-1-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-1-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-2-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-2-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-3-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-3-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-4-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-4-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-5-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-5-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-6-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-6-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --fairpink: #eed3e1 !important;
  --file-header-background: hsl(205, 23%, 5%) !important;
  --file-header-background-focused: hsl(205, 23%, 5%) !important;
  --file-header-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --font-interface: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-size-notes: 0.875rem !important;
  --footnote-divider-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --footnote-id-color: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --footnote-id-color-no-occurrences: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --frost0: #e69ca2 !important;
  --frost1: #88c0d0 !important;
  --frost2: #81a1c1 !important;
  --frost3: #f1ced0 !important;
  --fx-filter: blur(0px) brightness(90%) saturate(0%) !important;
  --fx-repeat: repeat !important;
  --fx-size: 50px !important;
  --gp-filter: blur(0px) brightness(90%) saturate(0%) !important;
  --gp-repeat: repeat !important;
  --gp-size: 50px !important;
  --graph-arrow: hsl(310, 100%, 70%) !important;
  --graph-circle-fill: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --graph-circle-fill-highlight: hsl(
    317,
    100%,
    90%
  ) !important;
  --graph-circle-fill-unresolved: hsl(310, 100%, 84%) !important;
  --graph-circle-outline: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --graph-fill-attachment: #84b6ff !important;
  --graph-fill-tag: hsl(
    317,
    100%,
    83%
  ) !important;
  --graph-line: hsl(
    205,
    23%,
    19%
  ) !important;
  --graph-line-highlight: hsl(
    317,
    100%,
    85%
  ) !important;
  --graph-node: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --graph-node-focused: hsl(
    317,
    100%,
    88%
  ) !important;
  --graph-node-unresolved: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --graph-text: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --gray: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --green-highlighter: #bbfabba6 !important;
  --grey-highlighter: #cacfd9a6 !important;
  --h1: 1rem !important;
  --h2: 0.95rem !important;
  --h3: 0.9rem !important;
  --h4: 0.85rem !important;
  --h5: 0.8rem !important;
  --h6: 0.75rem !important;
  --header-font-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --header-font-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headerFont: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --hr-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --icon-color: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --icon-color-active: hsl(
    317,
    100%,
    88%
  ) !important;
  --icon-color-focused: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --icon-color-hover: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --inline-code: #adccff !important;
  --input-date-separator: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --input-placeholder-color: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --interactive-accent: hsl(
    317,
    100%,
    90%
  ) !important;
  --interactive-accent-hover: hsl(
    317,
    100%,
    85%
  ) !important;
  --interactive-accent-rgb: 66, 66, 66 !important;
  --l-accent-h: 272 !important;
  --l-accent-l: 84% !important;
  --l-accent-s: 100% !important;
  --large-font-size: 18px !important;
  --light: hsl(205, 23%, 5%) !important;
  --light-cornflower-blue: #adccff !important;
  --light0: #d8dee9 !important;
  --light1: #e5e9f0 !important;
  --light2: #cacfd9 !important;
  --light3: #ffffff !important;
  --light4: #f9fafb !important;
  --light5: #eff1f5 !important;
  --lightgray: hsl(
    205,
    23%,
    7%
  ) !important;
  --line-width: 47rem !important;
  --linen: #fcecec !important;
  --link-color: hsl(
    317,
    100%,
    88%
  ) !important;
  --link-color-hover: hsl(
    272,
    100%,
    78%
  ) !important;
  --link-external-color: hsl(
    317,
    100%,
    88%
  ) !important;
  --link-external-color-hover: hsl(
    272,
    100%,
    78%
  ) !important;
  --link-unresolved-color: hsl(
    317,
    100%,
    88%
  ) !important;
  --list-marker-color: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --list-marker-color-collapsed: hsl(
    317,
    100%,
    88%
  ) !important;
  --list-marker-color-hover: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --max-width: 97% !important;
  --medium-font-size: 16px !important;
  --menu-background: hsl(
    205,
    23%,
    7%
  ) !important;
  --mermaid-font: "Source Code Pro", monospace !important;
  --metadata-border-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --metadata-divider-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --metadata-input-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --metadata-label-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --metadata-label-text-color-hover: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --mod-button: hsl(205, 23%, 8%) !important;
  --mod-button-hover: hsl(
    205,
    23%,
    9%
  ) !important;
  --modal-background: hsl(205, 23%, 5%) !important;
  --nav-collapse-icon-color: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --nav-collapse-icon-color-collapsed: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --nav-heading-color: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --nav-heading-color-collapsed: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --nav-heading-color-collapsed-hover: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --nav-heading-color-hover: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --nav-item-color: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --nav-item-color-active: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --nav-item-color-highlighted: hsl(
    317,
    100%,
    88%
  ) !important;
  --nav-item-color-hover: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --nav-item-color-selected: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --nav-tag-color: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --nav-tag-color-active: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --nav-tag-color-hover: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --normal-font-size: 17px !important;
  --normal-weight: 400 !important;
  --opacity-translucency: 1 !important;
  --orange-highlighter: #ffb86ca6 !important;
  --paleblue: #bdd2ff !important;
  --palegreen: #a1ffa1 !important;
  --pastelcoral: #ffe896 !important;
  --pastelgreen: #bbf3c0 !important;
  --pastelperiwinkle: #abbfff !important;
  --pastelpink: #fbcdf2 !important;
  --pastelpurple: #e8befa !important;
  --pastelyellow: #fcf4c9 !important;
  --pdf-background: hsl(205, 23%, 5%) !important;
  --pdf-page-background: hsl(205, 23%, 5%) !important;
  --pdf-shadow: 0 0 0 1px hsl(
    205,
    23%,
    19%
  ) !important;
  --pdf-sidebar-background: hsl(205, 23%, 5%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(
    205,
    23%,
    19%
  ) !important;
  --pill-border-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --pill-color: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --pill-color-hover: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --pill-color-remove: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --pill-color-remove-hover: hsl(
    317,
    100%,
    88%
  ) !important;
  --pink: #f2b3cf !important;
  --pink-highlighter: #ffb8eba6 !important;
  --pre-code: hsl(
    205,
    19%,
    11%
  ) !important;
  --preview-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --preview-font-size: 1rem !important;
  --preview-font-weight: 400 !important;
  --preview-line-height: 1.756666em !important;
  --prompt-background: hsl(205, 23%, 5%) !important;
  --pureblack: #080808 !important;
  --purple: #d2b3ff !important;
  --purple-highlighter: #d2b3ffa6 !important;
  --red: #ff5582 !important;
  --red-highlighter: #ff5582a6 !important;
  --ribbon-background: hsl(
    205,
    23%,
    7%
  ) !important;
  --ribbon-background-collapsed: hsl(205, 23%, 5%) !important;
  --royalblue: #879bff !important;
  --s-header-1-ed: 1.98rem !important;
  --s-header-1-pre: 1.98em !important;
  --s-header-2-ed: 1.88rem !important;
  --s-header-2-pre: 1.88em !important;
  --s-header-3-ed: 1.68rem !important;
  --s-header-3-pre: 1.68em !important;
  --s-header-4-ed: 1.48rem !important;
  --s-header-4-pre: 1.48em !important;
  --s-header-5-ed: 1.28rem !important;
  --s-header-5-pre: 1.28em !important;
  --s-header-6-ed: 1.08rem !important;
  --s-header-6-pre: 1.08em !important;
  --search-clear-button-color: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --search-icon-color: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --search-result-background: hsl(205, 23%, 5%) !important;
  --secondary: hsl(
    317,
    100%,
    88%
  ) !important;
  --setting-group-heading-color: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --setting-items-background: hsla(
    205,
    23%,
    10%,
    0.8
  ) !important;
  --setting-items-border-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --slider-track-background: hsl(
    205,
    23%,
    19%
  ) !important;
  --small-font-size: 15px !important;
  --status-bar-background: hsl(
    205,
    23%,
    7%
  ) !important;
  --status-bar-border-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --status-bar-text-color: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --strong-color: hsl(310, 100%, 84%) !important;
  --strong-weight: 600 !important;
  --suggestion-background: hsl(205, 23%, 5%) !important;
  --svg-faint: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --tab-background-active: hsl(205, 23%, 5%) !important;
  --tab-container-background: hsl(
    205,
    23%,
    7%
  ) !important;
  --tab-outline-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --tab-switcher-background: hsl(
    205,
    23%,
    7%
  ) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(
    205,
    23%,
    7%
  ), transparent) !important;
  --tab-text-color: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --tab-text-color-active: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --tab-text-color-focused: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --tab-text-color-focused-active: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --tab-text-color-focused-active-current: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --tab-text-color-focused-highlighted: hsl(
    317,
    100%,
    88%
  ) !important;
  --table-add-button-border-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --table-border-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --table-drag-handle-background-active: hsl(
    317,
    100%,
    90%
  ) !important;
  --table-drag-handle-color: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --table-header-border-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --table-header-color: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --table-selection-border-color: hsl(
    317,
    100%,
    90%
  ) !important;
  --tag-base: hsl(205, 23%, 5%) !important;
  --tag-color: hsl(
    317,
    100%,
    88%
  ) !important;
  --tag-color-hover: hsl(
    317,
    100%,
    88%
  ) !important;
  --tertiary: hsl(
    272,
    100%,
    78%
  ) !important;
  --text-a-hover: #f2b3cf !important;
  --text-accent: hsl(
    317,
    100%,
    88%
  ) !important;
  --text-accent-hover: hsl(
    272,
    100%,
    78%
  ) !important;
  --text-faint: hsla(
    205,
    19%,
    37%,
    1
  ) !important;
  --text-highlight-color: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --text-highlight-rgb: #ffb8eba6 !important;
  --text-link: #e69ca2 !important;
  --text-muted: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --text-normal: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --text-selection: hsl(317, 72%, 20%) !important;
  --text-title-h1: #f2b3cf !important;
  --text-title-h2: #d2b3ff !important;
  --text-title-h3: #ff5582 !important;
  --text-title-h4: #ffb86c !important;
  --text-title-h5: #85ffa4 !important;
  --text-title-h6: #bdd2ff !important;
  --titleFont: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(
    205,
    23%,
    7%
  ) !important;
  --titlebar-background-focused: hsl(
    205,
    23%,
    7%
  ) !important;
  --titlebar-border-color: hsl(
    205,
    23%,
    19%
  ) !important;
  --titlebar-text-color: hsla(
    205,
    22%,
    63%,
    1
  ) !important;
  --titlebar-text-color-focused: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --tp-filter: blur(0px) brightness(90%) saturate(0%) !important;
  --tp-repeat: repeat !important;
  --tp-size: 50px !important;
  --vault-profile-color: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --vault-profile-color-hover: hsla(
    205,
    68%,
    97%,
    0.9
  ) !important;
  --vim-cursor: hsl(
    317,
    100%,
    90%
  ) !important;
  --yellow: #fff3a3 !important;
  --yellow-highlighter: #fff3a3a6 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(14, 19, 22);
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(10, 13, 16);
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(37, 50, 60);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgba(20, 26, 31, 0.8);
  border-color: rgb(37, 50, 60);
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(14, 19, 22);
  border-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(37, 50, 60);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(140, 164, 181);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(140, 164, 181);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(255, 194, 238);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(140, 164, 181);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(14, 19, 22);
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(14, 19, 22);
  border-left-color: rgb(37, 50, 60);
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(10, 13, 16);
  color: rgba(242, 248, 253, 0.9);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 173, 241);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(255, 173, 241) none 0px;
  text-decoration-color: rgb(255, 173, 241);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(132, 182, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(132, 182, 255) none 0px;
  text-decoration-color: rgb(132, 182, 255);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(132, 182, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(132, 182, 255) none 0px;
  text-decoration-color: rgb(132, 182, 255);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 173, 241);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(255, 173, 241) none 0px;
  text-decoration-color: rgb(255, 173, 241);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 184, 235, 0.65);
  color: rgba(242, 248, 253, 0.9);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgba(242, 248, 253, 0.9) none 0px;
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body del {
  color: rgba(242, 248, 253, 0.9);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgba(242, 248, 253, 0.9) none 0px;
  text-decoration: line-through 2px rgb(140, 164, 181);
  text-decoration-color: rgb(140, 164, 181);
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgba(242, 248, 253, 0.9);
  font-size: 15px;
  font-weight: 500;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgba(20, 26, 31, 0.8);
  border-color: rgb(37, 50, 60);
  border-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 168, 230);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: rgb(140, 164, 181);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(140, 164, 181) none 0px;
  text-decoration-color: rgb(140, 164, 181);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(255, 194, 238);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(255, 194, 238) none 0px;
  text-decoration-color: rgb(255, 194, 238);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 194, 238);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(255, 194, 238) none 0px;
  text-decoration-color: rgb(255, 194, 238);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(255, 194, 238);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(255, 194, 238) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body dt {
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body ol > li {
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body ul > li {
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(255, 179, 233);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(255, 173, 241, 0.05);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(37, 50, 60);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(37, 50, 60);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(37, 50, 60);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(37, 50, 60);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgba(242, 248, 253, 0.9);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 606.25px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(37, 50, 60);
  border-left-color: rgb(37, 50, 60);
  border-right-color: rgb(37, 50, 60);
  border-top-color: rgb(37, 50, 60);
  color: rgba(242, 248, 253, 0.9);
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body th {
  background-color: rgba(20, 26, 31, 0.8);
  border-bottom-color: rgb(37, 50, 60);
  border-bottom-width: 0px;
  border-left-color: rgb(37, 50, 60);
  border-right-color: rgb(37, 50, 60);
  border-top-color: rgb(37, 50, 60);
  color: rgba(242, 248, 253, 0.9);
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(37, 50, 60);
  border-left-color: rgb(37, 50, 60);
  border-right-color: rgb(37, 50, 60);
  border-top-color: rgb(37, 50, 60);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(37, 50, 60);
  border-left-color: rgb(37, 50, 60);
  border-right-color: rgb(37, 50, 60);
  border-top-color: rgb(37, 50, 60);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(140, 164, 181);
  border-left-color: rgb(140, 164, 181);
  border-right-color: rgb(140, 164, 181);
  border-top-color: rgb(140, 164, 181);
  color: rgb(140, 164, 181);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(23, 29, 33);
  border-bottom-color: rgb(216, 222, 233);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 222, 233);
  border-left-width: 1px;
  border-right-color: rgb(216, 222, 233);
  border-right-width: 1px;
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(23, 29, 33);
  border-bottom-color: rgb(216, 222, 233);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 222, 233);
  border-left-width: 1px;
  border-right-color: rgb(216, 222, 233);
  border-right-width: 1px;
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  color: rgba(242, 248, 253, 0.9);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(23, 29, 33);
  border-bottom-color: rgb(216, 222, 233);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 222, 233);
  border-left-width: 1px;
  border-right-color: rgb(216, 222, 233);
  border-right-width: 1px;
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(23, 29, 33);
  border-bottom-color: rgb(216, 222, 233);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 222, 233);
  border-left-width: 1px;
  border-right-color: rgb(216, 222, 233);
  border-right-width: 1px;
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 255, 255);
  font-style: italic;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
  text-align: center;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgba(20, 26, 31, 0.8);
  border-bottom-color: rgb(140, 164, 181);
  border-left-color: rgb(140, 164, 181);
  border-right-color: rgb(140, 164, 181);
  border-top-color: rgb(140, 164, 181);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgba(242, 248, 253, 0.9);
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgb(255, 204, 241);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(37, 50, 60);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(37, 50, 60);
  border-right-color: rgb(37, 50, 60);
  border-top-color: rgb(37, 50, 60);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 4px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgba(242, 248, 253, 0.9);
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 13, 16);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 13, 16);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
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
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
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
  background-color: rgba(20, 26, 31, 0.8);
  border-bottom-color: rgb(37, 50, 60);
  border-left-color: rgb(37, 50, 60);
  border-right-color: rgb(37, 50, 60);
  border-top-color: rgb(37, 50, 60);
  color: rgb(140, 164, 181);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(10, 13, 16);
  border-bottom-color: rgb(37, 50, 60);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(37, 50, 60);
  border-right-color: rgb(37, 50, 60);
  border-top-color: rgb(37, 50, 60);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(86, 117, 138, 0.15) 0px 3px 15px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgba(242, 248, 253, 0.9);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgba(242, 248, 253, 0.9) none 0px;
  text-decoration-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 204, 241, 0.5);
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(37, 50, 60);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(37, 50, 60);
  border-right-color: rgb(37, 50, 60);
  border-top-color: rgb(37, 50, 60);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(37, 50, 60);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(37, 50, 60);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(37, 50, 60);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(37, 50, 60);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(255, 204, 241, 0.5);
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 204, 241, 0.5);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 194, 238);
}

html[saved-theme="dark"] body h1 {
  color: rgba(242, 248, 253, 0.9);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgba(242, 248, 253, 0.9);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgba(242, 248, 253, 0.9);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgba(242, 248, 253, 0.9);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgba(242, 248, 253, 0.9);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgba(242, 248, 253, 0.9);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgba(242, 248, 253, 0.9);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(37, 50, 60);
  border-left-color: rgb(37, 50, 60);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(140, 164, 181);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(140, 164, 181);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgba(242, 248, 253, 0.9);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(140, 164, 181);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(140, 164, 181);
  border-right-color: rgb(140, 164, 181);
  border-top-color: rgb(140, 164, 181);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(140, 164, 181);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(14, 19, 22);
  border-bottom-color: rgb(37, 50, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(37, 50, 60);
  border-right-color: rgb(37, 50, 60);
  border-right-width: 1px;
  border-top-color: rgb(37, 50, 60);
  color: rgba(242, 248, 253, 0.9);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(140, 164, 181);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgba(242, 248, 253, 0.9);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(140, 164, 181);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(140, 164, 181);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(140, 164, 181);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(140, 164, 181);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(140, 164, 181);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(140, 164, 181);
  border-right-color: rgb(140, 164, 181);
  border-top-color: rgb(140, 164, 181);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(140, 164, 181);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(140, 164, 181);
  stroke: rgb(140, 164, 181);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(140, 164, 181);
  border-left-color: rgb(140, 164, 181);
  border-right-color: rgb(140, 164, 181);
  border-top-color: rgb(140, 164, 181);
  color: rgb(140, 164, 181);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(76, 97, 112);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(37, 50, 60);
  border-left-color: rgb(37, 50, 60);
  border-right-color: rgb(37, 50, 60);
  border-top-color: rgb(37, 50, 60);
  color: rgb(140, 164, 181);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(140, 164, 181);
  border-left-color: rgb(140, 164, 181);
  border-right-color: rgb(140, 164, 181);
  border-top-color: rgb(140, 164, 181);
  color: rgb(140, 164, 181);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(14, 19, 22);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgba(242, 248, 253, 0.9);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(37, 50, 60);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(37, 50, 60);
  border-left-width: 1px;
  border-right-color: rgb(37, 50, 60);
  border-right-width: 1px;
  border-top-color: rgb(37, 50, 60);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  color: rgb(140, 164, 181);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(14, 19, 22);
  border-bottom-color: rgb(37, 50, 60);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(37, 50, 60);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(37, 50, 60);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(37, 50, 60);
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1.5px 1px 0px, rgba(255, 255, 255, 0.25) 0px 2px 0px 0px inset;
  color: rgba(242, 248, 253, 0.9);
  padding-bottom: 4px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgba(242, 248, 253, 0.9);
  border-left-color: rgba(242, 248, 253, 0.9);
  border-right-color: rgba(242, 248, 253, 0.9);
  border-top-color: rgba(242, 248, 253, 0.9);
}

html[saved-theme="dark"] body sub {
  color: rgba(242, 248, 253, 0.9);
  font-size: 12px;
  vertical-align: baseline;
}

html[saved-theme="dark"] body summary {
  color: rgba(242, 248, 253, 0.9);
  cursor: pointer;
}

html[saved-theme="dark"] body sup {
  color: rgba(242, 248, 253, 0.9);
  font-size: 12px;
  vertical-align: baseline;
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(255, 194, 238);
}`,
  },
  light: {
    base: `:root:root {
  --accent-hsl: 272, 100%, 84% !important;
  --as-filter: blur(0px) brightness(90%) saturate(0%) !important;
  --as-repeat: repeat !important;
  --as-size: 50px !important;
  --ash: #232630 !important;
  --background-match-highlight: hsla(272, 40%, 62%, 0.2) !important;
  --background-modifier-accent: hsl(
    272,
    100%,
    74%
  ) !important;
  --background-modifier-border: hsl(
    205,
    23%,
    90%
  ) !important;
  --background-modifier-cover: hsla(
    205,
    23%,
    95%,
    0.5
  ) !important;
  --background-modifier-error: #e60026 !important;
  --background-modifier-error-hover: red !important;
  --background-modifier-form-field: hsl(
    205,
    23%,
    99%
  ) !important;
  --background-modifier-form-field-highlighted: hsl(
    205,
    23%,
    99%
  ) !important;
  --background-modifier-form-field-hover: hsl(
    205,
    23%,
    99%
  ) !important;
  --background-primary: hsl(
    205,
    23%,
    99%
  ) !important;
  --background-primary-alt: hsla(
    205,
    23%,
    95%,
    0.75
  ) !important;
  --background-secondary: hsl(205, 23%, 94%) !important;
  --background-secondary-alt: hsl(205, 23%, 94%) !important;
  --background-tertiary: hsl(
    205,
    23%,
    89%
  ) !important;
  --background-translucent: hsla(
    205,
    23%,
    94%,
    0.8
  ) !important;
  --background-transparent: hsla(
    205,
    23%,
    94%,
    0
  ) !important;
  --background-zero: hsla(
    205,
    23%,
    97%,
    1
  ) !important;
  --base-d: 5% !important;
  --base-h: 205 !important;
  --base-l: 94% !important;
  --base-s: 23% !important;
  --bases-cards-background: hsl(
    205,
    23%,
    99%
  ) !important;
  --bases-cards-cover-background: hsla(
    205,
    23%,
    95%,
    0.75
  ) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(
    205,
    23%,
    90%
  ) !important;
  --bases-embed-border-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --bases-group-heading-property-color: hsl(
    205,
    22%,
    52%
  ) !important;
  --bases-table-border-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --bases-table-cell-background-active: hsl(
    205,
    23%,
    99%
  ) !important;
  --bases-table-cell-background-disabled: hsla(
    205,
    23%,
    95%,
    0.75
  ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
    272,
    100%,
    84%
  ) !important;
  --bases-table-group-background: hsla(
    205,
    23%,
    95%,
    0.75
  ) !important;
  --bases-table-header-background: hsl(
    205,
    23%,
    99%
  ) !important;
  --bases-table-header-color: hsl(
    205,
    22%,
    52%
  ) !important;
  --bases-table-summary-background: hsl(
    205,
    23%,
    99%
  ) !important;
  --blockquote-bg: hsla(310, 100%,
    70%, 0.05) !important;
  --blockquote-border: 310, 100%,
    70% !important;
  --blockquote-border-color: hsl(
    272,
    100%,
    84%
  ) !important;
  --blue-highlighter: #adccffa6 !important;
  --blur-background: color-mix(in srgb, hsl(
    205,
    23%,
    99%
  ) 65%, transparent) linear-gradient(hsl(
    205,
    23%,
    99%
  ), color-mix(in srgb, hsl(
    205,
    23%,
    99%
  ) 65%, transparent)) !important;
  --bodyFont: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --boldblue: #99e7ff !important;
  --boldgreen: #85ffa4 !important;
  --boldlightpink: 310, 100%, 84% !important;
  --boldorange: #ffb86c !important;
  --boldpink: 310, 100%, 70% !important;
  --boldpurple: #7322e6 !important;
  --boldred: #ff5555 !important;
  --boldyellow: #ffff00 !important;
  --bp-filter: blur(0px) brightness(90%) saturate(0%) !important;
  --bp-repeat: repeat !important;
  --bp-size: 50px !important;
  --canvas-background: hsl(
    205,
    23%,
    99%
  ) !important;
  --canvas-card-label-color: hsl(
    205,
    21%,
    74%
  ) !important;
  --caret-color: hsl(205, 23%, 15%) !important;
  --cerulean: #4a94ff !important;
  --checkbox-after: hsl(
    272,
    100%,
    84%
  ) !important;
  --checkbox-base: hsl(
    205,
    15%,
    89%
  ) !important;
  --checkbox-border-color: hsl(
    205,
    21%,
    74%
  ) !important;
  --checkbox-border-color-hover: hsl(
    205,
    22%,
    52%
  ) !important;
  --checkbox-color: hsl(
    272,
    100%,
    84%
  ) !important;
  --checkbox-color-hover: hsl(
    272,
    100%,
    87%
  ) !important;
  --checkbox-marker-color: hsl(
    205,
    23%,
    99%
  ) !important;
  --checklist-done-color: hsl(
    205,
    22%,
    52%
  ) !important;
  --code-background: hsla(
    205,
    23%,
    95%,
    0.75
  ) !important;
  --code-block: #81a1c1 !important;
  --code-block-border: #cacfd9 !important;
  --code-border-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --code-comment: hsl(
    205,
    21%,
    74%
  ) !important;
  --code-font-size: 0.9em !important;
  --code-line-height: 1.50667em !important;
  --code-normal: hsl(205, 23%, 15%) !important;
  --code-punctuation: hsl(
    205,
    22%,
    52%
  ) !important;
  --codeFont: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsl(
    205,
    21%,
    74%
  ) !important;
  --collapse-icon-color-collapsed: hsl(
    272,
    100%,
    79%
  ) !important;
  --cornflower-blue: #a1c4fd !important;
  --cp-filter: blur(0px) brightness(90%) saturate(0%) !important;
  --cp-repeat: repeat !important;
  --cp-size: 50px !important;
  --custom-ed-line-thickness: 1px !important;
  --custom-line-indent: 40px !important;
  --custom-pre-line-thickness: 1px !important;
  --d-accent-h: 317 !important;
  --d-accent-l: 90% !important;
  --d-accent-s: 100% !important;
  --dark: hsl(205, 23%, 15%) !important;
  --dark0: #2e3440 !important;
  --dark1: #3b4252 !important;
  --dark2: #434c5e !important;
  --dark3: #4c566a !important;
  --dark4: #0f0e14 !important;
  --dark5: #0b0b0b !important;
  --darkbrown: #34343d !important;
  --darkgray: hsl(205, 23%, 15%) !important;
  --default-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --divider-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --divider-color-hover: hsl(
    272,
    100%,
    84%
  ) !important;
  --dusk: #474e5e !important;
  --duskblue: #a2acc3 !important;
  --editor-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --editor-font-size: 1rem !important;
  --editor-font-weight: 400 !important;
  --editor-line-height: 1.756666em !important;
  --em-color: #4a94ff !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(
    205,
    23%,
    90%
  ), inset 0 0 0 1px hsl(
    205,
    23%,
    90%
  ) !important;
  --embed-border-start: 2px solid hsl(
    272,
    100%,
    84%
  ) !important;
  --f-header-1-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-1-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-2-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-2-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-3-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-3-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-4-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-4-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-5-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-5-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-6-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --f-header-6-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --fairpink: #eed3e1 !important;
  --file-header-background: hsl(
    205,
    23%,
    99%
  ) !important;
  --file-header-background-focused: hsl(
    205,
    23%,
    99%
  ) !important;
  --file-header-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: hsl(205, 23%, 15%) !important;
  --font-interface: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-size-notes: 0.875rem !important;
  --footnote-divider-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --footnote-id-color: hsl(
    205,
    22%,
    52%
  ) !important;
  --footnote-id-color-no-occurrences: hsl(
    205,
    21%,
    74%
  ) !important;
  --frost0: #e69ca2 !important;
  --frost1: #88c0d0 !important;
  --frost2: #81a1c1 !important;
  --frost3: #f1ced0 !important;
  --fx-filter: blur(0px) brightness(90%) saturate(0%) !important;
  --fx-repeat: repeat !important;
  --fx-size: 50px !important;
  --gp-filter: blur(0px) brightness(90%) saturate(0%) !important;
  --gp-repeat: repeat !important;
  --gp-size: 50px !important;
  --graph-arrow: #7322e6 !important;
  --graph-circle-fill: hsl(205, 23%, 15%) !important;
  --graph-circle-fill-highlight: hsl(
    272,
    100%,
    84%
  ) !important;
  --graph-circle-fill-unresolved: hsl(205, 23%, 15%) !important;
  --graph-circle-outline: hsl(
    205,
    21%,
    74%
  ) !important;
  --graph-fill-attachment: #4a94ff !important;
  --graph-fill-tag: hsl(
    272,
    100%,
    74%
  ) !important;
  --graph-line: hsl(
    205,
    22%,
    52%
  ) !important;
  --graph-line-highlight: hsl(
    272,
    100%,
    87%
  ) !important;
  --graph-node: hsl(
    205,
    22%,
    52%
  ) !important;
  --graph-node-focused: hsl(
    272,
    100%,
    79%
  ) !important;
  --graph-node-unresolved: hsl(
    205,
    21%,
    74%
  ) !important;
  --graph-text: hsl(205, 23%, 15%) !important;
  --gray: hsl(
    205,
    22%,
    52%
  ) !important;
  --green-highlighter: #bbfabba6 !important;
  --grey-highlighter: #cacfd9a6 !important;
  --h1: 1rem !important;
  --h2: 0.95rem !important;
  --h3: 0.9rem !important;
  --h4: 0.85rem !important;
  --h5: 0.8rem !important;
  --h6: 0.75rem !important;
  --header-font-ed: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --header-font-pre: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --headerFont: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(
    205,
    21%,
    74%
  ) !important;
  --hr-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --icon-color: hsl(
    205,
    22%,
    52%
  ) !important;
  --icon-color-active: hsl(
    272,
    100%,
    79%
  ) !important;
  --icon-color-focused: hsl(205, 23%, 15%) !important;
  --icon-color-hover: hsl(
    205,
    22%,
    52%
  ) !important;
  --inline-code: #879bff !important;
  --input-date-separator: hsl(
    205,
    21%,
    74%
  ) !important;
  --input-placeholder-color: hsl(
    205,
    21%,
    74%
  ) !important;
  --interactive-accent: hsl(
    272,
    100%,
    84%
  ) !important;
  --interactive-accent-hover: hsl(
    272,
    100%,
    87%
  ) !important;
  --interactive-accent-rgb: 200, 200, 200 !important;
  --l-accent-h: 272 !important;
  --l-accent-l: 84% !important;
  --l-accent-s: 100% !important;
  --l-blockquote-h: 310 !important;
  --l-blockquote-l: 70% !important;
  --l-blockquote-s: 100% !important;
  --large-font-size: 18px !important;
  --light: hsl(
    205,
    23%,
    99%
  ) !important;
  --light-cornflower-blue: #adccff !important;
  --light0: #d8dee9 !important;
  --light1: #e5e9f0 !important;
  --light2: #cacfd9 !important;
  --light3: #ffffff !important;
  --light4: #f9fafb !important;
  --light5: #eff1f5 !important;
  --lightgray: hsl(205, 23%, 94%) !important;
  --line-width: 47rem !important;
  --linen: #fcecec !important;
  --link-color: hsl(
    272,
    100%,
    79%
  ) !important;
  --link-color-hover: hsl(
    272,
    100%,
    72%
  ) !important;
  --link-external-color: hsl(
    272,
    100%,
    79%
  ) !important;
  --link-external-color-hover: hsl(
    272,
    100%,
    72%
  ) !important;
  --link-unresolved-color: hsl(
    272,
    100%,
    79%
  ) !important;
  --list-marker-color: hsl(
    205,
    21%,
    74%
  ) !important;
  --list-marker-color-collapsed: hsl(
    272,
    100%,
    79%
  ) !important;
  --list-marker-color-hover: hsl(
    205,
    22%,
    52%
  ) !important;
  --max-width: 97% !important;
  --medium-font-size: 16px !important;
  --menu-background: hsl(205, 23%, 94%) !important;
  --mermaid-font: "Source Code Pro", monospace !important;
  --metadata-border-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --metadata-divider-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --metadata-input-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(205, 23%, 15%) !important;
  --metadata-label-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(
    205,
    22%,
    52%
  ) !important;
  --metadata-label-text-color-hover: hsl(
    205,
    22%,
    52%
  ) !important;
  --mod-button: hsl(205, 23%, 96%) !important;
  --mod-button-hover: hsl(
    205,
    23%,
    97%
  ) !important;
  --modal-background: hsl(
    205,
    23%,
    99%
  ) !important;
  --nav-collapse-icon-color: hsl(
    205,
    21%,
    74%
  ) !important;
  --nav-collapse-icon-color-collapsed: hsl(
    205,
    21%,
    74%
  ) !important;
  --nav-heading-color: hsl(205, 23%, 15%) !important;
  --nav-heading-color-collapsed: hsl(
    205,
    21%,
    74%
  ) !important;
  --nav-heading-color-collapsed-hover: hsl(
    205,
    22%,
    52%
  ) !important;
  --nav-heading-color-hover: hsl(205, 23%, 15%) !important;
  --nav-item-color: hsl(
    205,
    22%,
    52%
  ) !important;
  --nav-item-color-active: hsl(205, 23%, 15%) !important;
  --nav-item-color-highlighted: hsl(
    272,
    100%,
    79%
  ) !important;
  --nav-item-color-hover: hsl(205, 23%, 15%) !important;
  --nav-item-color-selected: hsl(205, 23%, 15%) !important;
  --nav-tag-color: hsl(
    205,
    21%,
    74%
  ) !important;
  --nav-tag-color-active: hsl(
    205,
    22%,
    52%
  ) !important;
  --nav-tag-color-hover: hsl(
    205,
    22%,
    52%
  ) !important;
  --normal-font-size: 17px !important;
  --normal-weight: 400 !important;
  --opacity-translucency: 1 !important;
  --orange-highlighter: #ffb86ca6 !important;
  --paleblue: #bdd2ff !important;
  --palegreen: #a1ffa1 !important;
  --pastelcoral: #ffe896 !important;
  --pastelgreen: #bbf3c0 !important;
  --pastelperiwinkle: #abbfff !important;
  --pastelpink: #fbcdf2 !important;
  --pastelpurple: #e8befa !important;
  --pastelyellow: #fcf4c9 !important;
  --pdf-background: hsl(
    205,
    23%,
    99%
  ) !important;
  --pdf-page-background: hsl(
    205,
    23%,
    99%
  ) !important;
  --pdf-sidebar-background: hsl(
    205,
    23%,
    99%
  ) !important;
  --pill-border-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --pill-color: hsl(
    205,
    22%,
    52%
  ) !important;
  --pill-color-hover: hsl(205, 23%, 15%) !important;
  --pill-color-remove: hsl(
    205,
    21%,
    74%
  ) !important;
  --pill-color-remove-hover: hsl(
    272,
    100%,
    79%
  ) !important;
  --pink: #f2b3cf !important;
  --pink-highlighter: #ffb8eba6 !important;
  --pre-code: hsl(
    205,
    15%,
    95%
  ) !important;
  --preview-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --preview-font-size: 1rem !important;
  --preview-font-weight: 400 !important;
  --preview-line-height: 1.756666em !important;
  --prompt-background: hsl(
    205,
    23%,
    99%
  ) !important;
  --pureblack: #080808 !important;
  --purple: #d2b3ff !important;
  --purple-highlighter: #d2b3ffa6 !important;
  --raised-background: color-mix(in srgb, hsl(
    205,
    23%,
    99%
  ) 65%, transparent) linear-gradient(hsl(
    205,
    23%,
    99%
  ), color-mix(in srgb, hsl(
    205,
    23%,
    99%
  ) 65%, transparent)) !important;
  --red: #ff5582 !important;
  --red-highlighter: #ff5582a6 !important;
  --ribbon-background: hsl(205, 23%, 94%) !important;
  --ribbon-background-collapsed: hsl(
    205,
    23%,
    99%
  ) !important;
  --royalblue: #879bff !important;
  --s-header-1-ed: 1.98rem !important;
  --s-header-1-pre: 1.98em !important;
  --s-header-2-ed: 1.88rem !important;
  --s-header-2-pre: 1.88em !important;
  --s-header-3-ed: 1.68rem !important;
  --s-header-3-pre: 1.68em !important;
  --s-header-4-ed: 1.48rem !important;
  --s-header-4-pre: 1.48em !important;
  --s-header-5-ed: 1.28rem !important;
  --s-header-5-pre: 1.28em !important;
  --s-header-6-ed: 1.08rem !important;
  --s-header-6-pre: 1.08em !important;
  --search-clear-button-color: hsl(
    205,
    22%,
    52%
  ) !important;
  --search-icon-color: hsl(
    205,
    22%,
    52%
  ) !important;
  --search-result-background: hsl(
    205,
    23%,
    99%
  ) !important;
  --secondary: hsl(
    272,
    100%,
    79%
  ) !important;
  --setting-group-heading-color: hsl(205, 23%, 15%) !important;
  --setting-items-background: hsla(
    205,
    23%,
    95%,
    0.75
  ) !important;
  --setting-items-border-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --slider-track-background: hsl(
    205,
    23%,
    90%
  ) !important;
  --small-font-size: 15px !important;
  --status-bar-background: hsl(205, 23%, 94%) !important;
  --status-bar-border-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --status-bar-text-color: hsl(
    205,
    22%,
    52%
  ) !important;
  --strong-color: hsl(310, 100%, 70%) !important;
  --strong-weight: 600 !important;
  --suggestion-background: hsl(
    205,
    23%,
    99%
  ) !important;
  --svg-faint: hsl(
    205,
    21%,
    74%
  ) !important;
  --tab-background-active: hsl(
    205,
    23%,
    99%
  ) !important;
  --tab-container-background: hsl(205, 23%, 94%) !important;
  --tab-outline-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --tab-switcher-background: hsl(205, 23%, 94%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(205, 23%, 94%), transparent) !important;
  --tab-text-color: hsl(
    205,
    21%,
    74%
  ) !important;
  --tab-text-color-active: hsl(
    205,
    22%,
    52%
  ) !important;
  --tab-text-color-focused: hsl(
    205,
    22%,
    52%
  ) !important;
  --tab-text-color-focused-active: hsl(
    205,
    22%,
    52%
  ) !important;
  --tab-text-color-focused-active-current: hsl(205, 23%, 15%) !important;
  --tab-text-color-focused-highlighted: hsl(
    272,
    100%,
    79%
  ) !important;
  --table-add-button-border-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --table-border-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --table-drag-handle-background-active: hsl(
    272,
    100%,
    84%
  ) !important;
  --table-drag-handle-color: hsl(
    205,
    21%,
    74%
  ) !important;
  --table-header-border-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --table-header-color: hsl(205, 23%, 15%) !important;
  --table-selection-border-color: hsl(
    272,
    100%,
    84%
  ) !important;
  --tag-base: hsl(
    205,
    23%,
    99%
  ) !important;
  --tag-color: hsl(
    272,
    100%,
    79%
  ) !important;
  --tag-color-hover: hsl(
    272,
    100%,
    79%
  ) !important;
  --tertiary: hsl(
    272,
    100%,
    72%
  ) !important;
  --text-a-hover: #a1c4fd !important;
  --text-accent: hsl(
    272,
    100%,
    79%
  ) !important;
  --text-accent-hover: hsl(
    272,
    100%,
    72%
  ) !important;
  --text-faint: hsl(
    205,
    21%,
    74%
  ) !important;
  --text-highlight-color: hsl(205, 23%, 15%) !important;
  --text-highlight-rgb: #fff3a3a6 !important;
  --text-link: #a1c4fd !important;
  --text-muted: hsl(
    205,
    22%,
    52%
  ) !important;
  --text-normal: hsl(205, 23%, 15%) !important;
  --text-selection: hsl(272, 100%, 94.5%) !important;
  --text-title-h1: hsl(310, 100%, 84%) !important;
  --text-title-h2: #d2b3ff !important;
  --text-title-h3: #ff5582 !important;
  --text-title-h4: #ffb86c !important;
  --text-title-h5: #85ffa4 !important;
  --text-title-h6: #a1c4fd !important;
  --titleFont: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(205, 23%, 94%) !important;
  --titlebar-background-focused: hsl(205, 23%, 94%) !important;
  --titlebar-border-color: hsl(
    205,
    23%,
    90%
  ) !important;
  --titlebar-text-color: hsl(
    205,
    22%,
    52%
  ) !important;
  --titlebar-text-color-focused: hsl(205, 23%, 15%) !important;
  --tp-filter: blur(0px) brightness(90%) saturate(0%) !important;
  --tp-repeat: repeat !important;
  --tp-size: 50px !important;
  --vault-profile-color: hsl(205, 23%, 15%) !important;
  --vault-profile-color-hover: hsl(205, 23%, 15%) !important;
  --vim-cursor: hsl(
    272,
    100%,
    84%
  ) !important;
  --yellow: #fff3a3 !important;
  --yellow-highlighter: #fff3a3a6 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(236, 240, 243);
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(252, 253, 253);
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(224, 230, 235);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgba(239, 243, 245, 0.75);
  border-color: rgb(224, 230, 235);
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(252, 253, 253);
  border-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(224, 230, 235);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(106, 137, 160);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(106, 137, 160);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(205, 148, 255);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(106, 137, 160);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(236, 240, 243);
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(236, 240, 243);
  border-left-color: rgb(224, 230, 235);
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(252, 253, 253);
  color: rgb(29, 40, 47);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(255, 102, 230);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(255, 102, 230) none 0px;
  text-decoration-color: rgb(255, 102, 230);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(74, 148, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(74, 148, 255) none 0px;
  text-decoration-color: rgb(74, 148, 255);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(74, 148, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(74, 148, 255) none 0px;
  text-decoration-color: rgb(74, 148, 255);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(255, 102, 230);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(255, 102, 230) none 0px;
  text-decoration-color: rgb(255, 102, 230);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 243, 163, 0.65);
  color: rgb(29, 40, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(29, 40, 47) none 0px;
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body del {
  color: rgb(29, 40, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(29, 40, 47) none 0px;
  text-decoration: line-through 2px rgb(106, 137, 160);
  text-decoration-color: rgb(106, 137, 160);
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(29, 40, 47);
  font-size: 15px;
  font-weight: 500;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgba(239, 243, 245, 0.75);
  border-color: rgb(224, 230, 235);
  border-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(193, 122, 255);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(106, 137, 160);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(106, 137, 160) none 0px;
  text-decoration-color: rgb(106, 137, 160);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(205, 148, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(205, 148, 255) none 0px;
  text-decoration-color: rgb(205, 148, 255);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(205, 148, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(205, 148, 255) none 0px;
  text-decoration-color: rgb(205, 148, 255);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(205, 148, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(205, 148, 255) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body dt {
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body ol > li {
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body ul > li {
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(224, 189, 255);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(255, 102, 230, 0.05);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(224, 230, 235);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 230, 235);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 230, 235);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 230, 235);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(29, 40, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  width: 606.25px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(224, 230, 235);
  border-left-color: rgb(224, 230, 235);
  border-right-color: rgb(224, 230, 235);
  border-top-color: rgb(224, 230, 235);
  color: rgb(29, 40, 47);
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body th {
  background-color: rgba(239, 243, 245, 0.75);
  border-bottom-color: rgb(224, 230, 235);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 230, 235);
  border-right-color: rgb(224, 230, 235);
  border-top-color: rgb(224, 230, 235);
  color: rgb(29, 40, 47);
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(224, 230, 235);
  border-left-color: rgb(224, 230, 235);
  border-right-color: rgb(224, 230, 235);
  border-top-color: rgb(224, 230, 235);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(224, 230, 235);
  border-left-color: rgb(224, 230, 235);
  border-right-color: rgb(224, 230, 235);
  border-top-color: rgb(224, 230, 235);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(106, 137, 160);
  border-left-color: rgb(106, 137, 160);
  border-right-color: rgb(106, 137, 160);
  border-top-color: rgb(106, 137, 160);
  color: rgb(106, 137, 160);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(240, 243, 244);
  border-bottom-color: rgb(202, 207, 217);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(202, 207, 217);
  border-left-width: 1px;
  border-right-color: rgb(202, 207, 217);
  border-right-width: 1px;
  border-top-color: rgb(202, 207, 217);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(240, 243, 244);
  border-bottom-color: rgb(202, 207, 217);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(202, 207, 217);
  border-left-width: 1px;
  border-right-color: rgb(202, 207, 217);
  border-right-width: 1px;
  border-top-color: rgb(202, 207, 217);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  color: rgb(29, 40, 47);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(240, 243, 244);
  border-bottom-color: rgb(202, 207, 217);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(202, 207, 217);
  border-left-width: 1px;
  border-right-color: rgb(202, 207, 217);
  border-right-width: 1px;
  border-top-color: rgb(202, 207, 217);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(240, 243, 244);
  border-bottom-color: rgb(202, 207, 217);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(202, 207, 217);
  border-left-width: 1px;
  border-right-color: rgb(202, 207, 217);
  border-right-width: 1px;
  border-top-color: rgb(202, 207, 217);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body figcaption {
  color: rgb(255, 255, 255);
  font-style: italic;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
  text-align: center;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgba(239, 243, 245, 0.75);
  border-bottom-color: rgb(106, 137, 160);
  border-left-color: rgb(106, 137, 160);
  border-right-color: rgb(106, 137, 160);
  border-top-color: rgb(106, 137, 160);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(29, 40, 47);
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(217, 173, 255);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(224, 230, 235);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(224, 230, 235);
  border-right-color: rgb(224, 230, 235);
  border-top-color: rgb(224, 230, 235);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 4px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(29, 40, 47);
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 253, 253);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 253, 253);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
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
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
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
  background-color: rgb(252, 253, 253);
  border-bottom-color: rgb(224, 230, 235);
  border-left-color: rgb(224, 230, 235);
  border-right-color: rgb(224, 230, 235);
  border-top-color: rgb(224, 230, 235);
  color: rgb(106, 137, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(252, 253, 253);
  border-bottom-color: rgb(224, 230, 235);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(224, 230, 235);
  border-right-color: rgb(224, 230, 235);
  border-top-color: rgb(224, 230, 235);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(59, 79, 94, 0.15) 0px 3px 15px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(29, 40, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(29, 40, 47) none 0px;
  text-decoration-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(29, 40, 47);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(217, 173, 255, 0.5);
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(224, 230, 235);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(224, 230, 235);
  border-right-color: rgb(224, 230, 235);
  border-top-color: rgb(224, 230, 235);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(224, 230, 235);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(224, 230, 235);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 230, 235);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 230, 235);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(217, 173, 255, 0.5);
  border-bottom-color: rgb(29, 40, 47);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(217, 173, 255, 0.5);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(205, 148, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(29, 40, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(29, 40, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(29, 40, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(29, 40, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(29, 40, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(29, 40, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(29, 40, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(224, 230, 235);
  border-left-color: rgb(224, 230, 235);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(106, 137, 160);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(106, 137, 160);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(29, 40, 47);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(106, 137, 160);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(106, 137, 160);
  border-right-color: rgb(106, 137, 160);
  border-top-color: rgb(106, 137, 160);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(106, 137, 160);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(236, 240, 243);
  border-bottom-color: rgb(224, 230, 235);
  border-bottom-width: 1px;
  border-left-color: rgb(224, 230, 235);
  border-right-color: rgb(224, 230, 235);
  border-right-width: 1px;
  border-top-color: rgb(224, 230, 235);
  color: rgb(29, 40, 47);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(106, 137, 160);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(29, 40, 47);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(106, 137, 160);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(106, 137, 160);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(106, 137, 160);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(106, 137, 160);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(106, 137, 160);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(106, 137, 160);
  border-right-color: rgb(106, 137, 160);
  border-top-color: rgb(106, 137, 160);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(106, 137, 160);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(106, 137, 160);
  stroke: rgb(106, 137, 160);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(106, 137, 160);
  border-left-color: rgb(106, 137, 160);
  border-right-color: rgb(106, 137, 160);
  border-top-color: rgb(106, 137, 160);
  color: rgb(106, 137, 160);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(175, 191, 203);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(224, 230, 235);
  border-left-color: rgb(224, 230, 235);
  border-right-color: rgb(224, 230, 235);
  border-top-color: rgb(224, 230, 235);
  color: rgb(106, 137, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(106, 137, 160);
  border-left-color: rgb(106, 137, 160);
  border-right-color: rgb(106, 137, 160);
  border-top-color: rgb(106, 137, 160);
  color: rgb(106, 137, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(236, 240, 243);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(29, 40, 47);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(29, 40, 47);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(224, 230, 235);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 230, 235);
  border-left-width: 1px;
  border-right-color: rgb(224, 230, 235);
  border-right-width: 1px;
  border-top-color: rgb(224, 230, 235);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  color: rgb(106, 137, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(236, 240, 243);
  border-bottom-color: rgb(224, 230, 235);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 230, 235);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 230, 235);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 230, 235);
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1.5px 1px 0px, rgba(255, 255, 255, 0.25) 0px 2px 0px 0px inset;
  color: rgb(29, 40, 47);
  padding-bottom: 4px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 4px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(29, 40, 47);
  border-left-color: rgb(29, 40, 47);
  border-right-color: rgb(29, 40, 47);
  border-top-color: rgb(29, 40, 47);
}

html[saved-theme="light"] body sub {
  color: rgb(29, 40, 47);
  font-size: 12px;
  vertical-align: baseline;
}

html[saved-theme="light"] body summary {
  color: rgb(29, 40, 47);
  cursor: pointer;
}

html[saved-theme="light"] body sup {
  color: rgb(29, 40, 47);
  font-size: 12px;
  vertical-align: baseline;
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(205, 148, 255);
}`,
  },
};
