import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "big-bold",
    modes: ["dark", "light"],
    variations: [],
    fonts: [
      "eb-garamond",
      "fira-code",
      "merriweather-sans",
      "noto-serif",
      "noto-color-emoji",
      "noto-emoji",
      "nunito-sans",
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 181 !important;
  --accent-l: 35% !important;
  --accent-s: 100% !important;
  --anim-motion-swing: cubic-bezier(0.25, 0.05, 0.55, 0.95) !important;
  --background-modifier-active-hover: hsla(181, 100%, 35%, 0.1) !important;
  --background-modifier-border: hsl(216, 20%, 20%) !important;
  --background-modifier-border-focus: hsl(218, 19%, 31%) !important;
  --background-modifier-border-hover: hsl(218, 19%, 27%) !important;
  --background-modifier-error: #ff4d3a !important;
  --background-modifier-error-hover: #ff4d3a !important;
  --background-modifier-error-rgb: 255, 77, 58 !important;
  --background-modifier-form-field: hsl(216, 20%, 20%) !important;
  --background-modifier-form-field-hover: hsl(216, 20%, 20%) !important;
  --background-modifier-success: #7dcf2b !important;
  --background-modifier-success-rgb: 125, 207, 43 !important;
  --background-primary: hsla(216, 16%, 13%, 100%) !important;
  --background-primary-alt: hsl(216, 17%, 14%) !important;
  --background-secondary: hsl(216, 19%, 16%) !important;
  --background-secondary-alt: hsl(218, 18%, 15%) !important;
  --bases-cards-background: hsla(216, 16%, 13%, 100%) !important;
  --bases-cards-cover-background: hsl(216, 17%, 14%) !important;
  --bases-cards-radius: 14px !important;
  --bases-cards-shadow: 0 0 0 1px hsl(216, 20%, 20%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(218, 19%, 27%) !important;
  --bases-embed-border-color: hsl(216, 20%, 20%) !important;
  --bases-embed-border-radius: 7px !important;
  --bases-group-heading-property-color: hsl(220, 17%, 66%) !important;
  --bases-table-border-color: hsl(216, 20%, 20%) !important;
  --bases-table-cell-background-active: hsla(216, 16%, 13%, 100%) !important;
  --bases-table-cell-background-disabled: hsl(216, 17%, 14%) !important;
  --bases-table-cell-background-selected: hsla(181, 100%, 35%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(218, 19%, 31%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(181, 100%, 35%) !important;
  --bases-table-container-border-radius: 7px !important;
  --bases-table-group-background: hsl(216, 17%, 14%) !important;
  --bases-table-header-background: hsla(216, 16%, 13%, 100%) !important;
  --bases-table-header-color: hsl(220, 17%, 66%) !important;
  --bases-table-row-background-hover: hsl(218, 18%, 15%) !important;
  --bases-table-summary-background: hsla(216, 16%, 13%, 100%) !important;
  --blockquote-border-color: hsl(181, 100%, 35%) !important;
  --blur-background: color-mix(in srgb, hsl(218, 18%, 15%) 65%, transparent) linear-gradient(hsl(218, 18%, 15%), color-mix(in srgb, hsl(218, 18%, 15%) 65%, transparent)) !important;
  --bodyFont: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --button-background: hsl(
    183,
    105%,
    39%
  ) !important;
  --callout-bug: 230, 106, 180;
  --callout-default: 0, 155, 227;
  --callout-error: 246, 156, 0;
  --callout-example: 180, 90, 245;
  --callout-fail: 255, 77, 58;
  --callout-important: 0, 206, 203;
  --callout-info: 0, 155, 227;
  --callout-question: 232, 201, 0;
  --callout-radius: 7px;
  --callout-success: 125, 207, 43;
  --callout-summary: 125, 207, 43;
  --callout-tip: 232, 201, 0;
  --callout-todo: 0, 155, 227;
  --callout-warning: 246, 156, 0;
  --canvas-background: hsla(216, 16%, 13%, 100%) !important;
  --canvas-card-label-color: hsl(219, 13%, 51%) !important;
  --canvas-color-1: 255, 77, 58 !important;
  --canvas-color-2: 246, 156, 0 !important;
  --canvas-color-3: 232, 201, 0 !important;
  --canvas-color-4: 125, 207, 43 !important;
  --canvas-color-5: 0, 206, 203 !important;
  --canvas-color-6: 180, 90, 245 !important;
  --canvas-controls-icon-stroke: 1.3px !important;
  --canvas-controls-radius: 7px !important;
  --canvas-dot-pattern: hsl(218, 18%, 15%) !important;
  --caret-color: #c8d4e6 !important;
  --checkbox-border-color: #ff4d3a !important;
  --checkbox-border-color-hover: hsl(220, 17%, 66%) !important;
  --checkbox-color: transparent !important;
  --checkbox-color-hover: hsl(
    177,
    100%,
    33%
  ) !important;
  --checkbox-marker-color: hsla(216, 16%, 13%, 100%) !important;
  --checkbox-radius: 14px !important;
  --checkbox-size: 18px !important;
  --checklist-done-color: hsl(220, 17%, 66%) !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 7px !important;
  --code-background: hsl(216, 17%, 14%) !important;
  --code-border-color: hsl(216, 20%, 20%) !important;
  --code-comment: hsl(219, 13%, 51%) !important;
  --code-function: #e8c900 !important;
  --code-important: #f69c00 !important;
  --code-keyword: #e66ab4 !important;
  --code-normal: #c8d4e6 !important;
  --code-operator: #ff4d3a !important;
  --code-property: #00cecb !important;
  --code-punctuation: hsl(220, 17%, 66%) !important;
  --code-radius: 7px !important;
  --code-string: #7dcf2b !important;
  --code-tag: #ff4d3a !important;
  --code-value: #b45af5 !important;
  --codeFont: "DM Mono", monospace !important;
  --collapse-icon-color: hsl(219, 13%, 51%) !important;
  --collapse-icon-color-collapsed: hsl(
    177,
    100%,
    33%
  ) !important;
  --color-accent: hsl(181, 100%, 35%) !important;
  --color-accent-1: hsl(
    177,
    100%,
    33%
  ) !important;
  --color-accent-2: hsl(
    183,
    105%,
    39%
  ) !important;
  --color-accent-3: hsl(
    216,
    100%,
    47%
  ) !important;
  --color-accent-hsl: 181, 100%, 35% !important;
  --color-base-00: hsla(216, 16%, 13%, 100%) !important;
  --color-base-10: hsl(216, 17%, 14%) !important;
  --color-base-100: #c8d4e6 !important;
  --color-base-20: hsl(216, 19%, 16%) !important;
  --color-base-25: hsl(216, 20%, 20%) !important;
  --color-base-30: hsl(218, 18%, 15%) !important;
  --color-base-35: hsl(218, 19%, 27%) !important;
  --color-base-40: hsl(218, 19%, 31%) !important;
  --color-base-50: hsl(219, 13%, 51%) !important;
  --color-base-60: hsl(219, 16%, 59%) !important;
  --color-base-70: hsl(220, 17%, 66%) !important;
  --color-blue: #009be3 !important;
  --color-blue-rgb: 0, 155, 227 !important;
  --color-cyan: #00cecb !important;
  --color-cyan-rgb: 0, 206, 203 !important;
  --color-green: #7dcf2b !important;
  --color-green-rgb: 125, 207, 43 !important;
  --color-orange: #f69c00 !important;
  --color-orange-rgb: 246, 156, 0 !important;
  --color-pink: #e66ab4 !important;
  --color-pink-rgb: 230, 106, 180 !important;
  --color-purple: #b45af5 !important;
  --color-purple-rgb: 180, 90, 245 !important;
  --color-red: #ff4d3a !important;
  --color-red-rgb: 255, 77, 58 !important;
  --color-yellow: #e8c900 !important;
  --color-yellow-rgb: 232, 201, 0 !important;
  --custom-code-height: 1em !important;
  --custom-doc-bg: hsl(
    177,
    100%,
    33%
  ) !important;
  --custom-line-height: 2em !important;
  --dark: #c8d4e6 !important;
  --darkgray: #c8d4e6 !important;
  --divider-color: hsl(216, 20%, 20%) !important;
  --divider-color-hover: hsl(181, 100%, 35%) !important;
  --doc-background: hsl(207, 24%, 22%) !important;
  --doc-bg: hsl(207, 24%, 22%) !important;
  --dropdown-background: hsl(218, 18%, 15%) !important;
  --dropdown-background-hover: hsl(218, 19%, 27%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(216, 20%, 20%), inset 0 0 0 1px hsl(216, 20%, 20%) !important;
  --embed-border-left: none !important;
  --embed-border-start: 2px solid hsl(181, 100%, 35%) !important;
  --file-emoji: "Noto Emoji" !important;
  --file-header-background: hsla(216, 16%, 13%, 100%) !important;
  --file-header-background-focused: hsla(216, 16%, 13%, 100%) !important;
  --file-header-font: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --file-line-width: 900px !important;
  --flair-background: hsl(218, 18%, 15%) !important;
  --flair-color: #c8d4e6 !important;
  --folder-1: "📒" !important;
  --folder-1-open: "📖" !important;
  --folder-2: "📑" !important;
  --folder-2-open: "📑" !important;
  --folder-3: "🔖" !important;
  --folder-3-open: "🔖" !important;
  --folder-emoji: "Noto Emoji" !important;
  --folder-icon-size: 1.6em !important;
  --folder-padding: 4px !important;
  --font-default: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --font-emoji: "Noto Color Emoji" !important;
  --font-interface: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --font-main: "Nunito Sans" !important;
  --font-mermaid: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --font-monospace: "DM Mono", monospace !important;
  --font-text: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --footnote-divider-color: hsl(216, 20%, 20%) !important;
  --footnote-id-color: hsl(220, 17%, 66%) !important;
  --footnote-id-color-no-occurrences: hsl(219, 13%, 51%) !important;
  --footnote-radius: 7px !important;
  --google-font-color-notocoloremoji: colrv1 !important;
  --graph-line: hsl(218, 19%, 27%) !important;
  --graph-node: hsl(220, 17%, 66%) !important;
  --graph-node-attachment: #e8c900 !important;
  --graph-node-focused: hsl(
    177,
    100%,
    33%
  ) !important;
  --graph-node-tag: #7dcf2b !important;
  --graph-node-unresolved: hsl(219, 13%, 51%) !important;
  --graph-text: #c8d4e6 !important;
  --gray: hsl(220, 17%, 66%) !important;
  --h1-align: center !important;
  --h1-color-custom: #00cecb !important;
  --h1-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --h1-size: 2.2em !important;
  --h2-color-custom: #009be3 !important;
  --h2-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --h2-size: 1.87em !important;
  --h2-weight: 700 !important;
  --h3-color-custom: #b45af5 !important;
  --h3-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --h3-size: 1.57em !important;
  --h3-weight: 700 !important;
  --h4-color-custom: #e66ab4 !important;
  --h4-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --h4-size: 1.35em !important;
  --h4-weight: 700 !important;
  --h5-color-custom: #ff4d3a !important;
  --h5-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --h5-size: 1.3em !important;
  --h5-weight: 700 !important;
  --h6-color-custom: #f69c00 !important;
  --h6-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --h6-size: 1.1em !important;
  --h6-weight: 700 !important;
  --headerFont: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --heading-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --heading-font-2: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --heading-formatting: hsl(219, 13%, 51%) !important;
  --heading-style: normal !important;
  --heading-variant: normal !important;
  --heading-weight: 700 !important;
  --highlight: hsla(181, 100%, 35%, 0.475) !important;
  --highlight-text: white !important;
  --hr-color: hsl(216, 20%, 20%) !important;
  --icon-background: hsl(218, 18%, 15%) !important;
  --icon-color: hsl(220, 17%, 66%) !important;
  --icon-color-active: hsl(
    177,
    100%,
    33%
  ) !important;
  --icon-color-focused: #c8d4e6 !important;
  --icon-color-hover: hsl(220, 17%, 66%) !important;
  --icon-emoji: "Noto Color Emoji" !important;
  --icon-l-stroke-width: 1.3px !important;
  --icon-m-stroke-width: 1.3px !important;
  --icon-s-stroke-width: 1.3px !important;
  --icon-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042) inset, 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042) !important;
  --icon-stroke: 1.3px !important;
  --img-align: auto !important;
  --img-bg-size: cover !important;
  --img-blur: 3px !important;
  --img-position-x: 50% !important;
  --img-position-y: 50% !important;
  --img-sat: 100% !important;
  --indentation-guide-color: transparent !important;
  --inline-title-color: #c8d4e6 !important;
  --inline-title-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --inline-title-size: 2.5em !important;
  --input-date-separator: hsl(219, 13%, 51%) !important;
  --input-placeholder-color: hsl(219, 13%, 51%) !important;
  --interactive-accent: hsl(181, 100%, 35%) !important;
  --interactive-accent-hover: hsl(
    177,
    100%,
    33%
  ) !important;
  --interactive-accent-hsl: 181, 100%, 35% !important;
  --interactive-hover: hsl(218, 19%, 27%) !important;
  --interactive-normal: hsl(218, 18%, 15%) !important;
  --light: hsla(216, 16%, 13%, 100%) !important;
  --lightgray: hsl(216, 19%, 16%) !important;
  --link-color: hsl(
    177,
    100%,
    33%
  ) !important;
  --link-color-hover: hsl(
    183,
    105%,
    39%
  ) !important;
  --link-external-color: hsl(
    177,
    100%,
    33%
  ) !important;
  --link-external-color-hover: hsl(
    183,
    105%,
    39%
  ) !important;
  --link-unresolved-color: hsl(219, 13%, 51%) !important;
  --link-unresolved-decoration-color: hsl(218, 19%, 27%) !important;
  --list-bullet-size: 0.45em !important;
  --list-marker-color: #00cecb !important;
  --list-marker-color-collapsed: hsl(
    177,
    100%,
    33%
  ) !important;
  --list-marker-color-hover: #e8c900 !important;
  --menu-background: hsl(216, 19%, 16%) !important;
  --menu-border-color: hsl(218, 19%, 27%) !important;
  --menu-radius: 14px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
    0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --metadata-border-color: hsl(216, 20%, 20%) !important;
  --metadata-divider-color: hsl(216, 20%, 20%) !important;
  --metadata-input-font: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --metadata-input-text-color: #c8d4e6 !important;
  --metadata-label-font: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --metadata-label-text-color: hsl(220, 17%, 66%) !important;
  --metadata-label-text-color-hover: hsl(220, 17%, 66%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(218, 19%, 31%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(218, 19%, 27%) !important;
  --modal-background: hsla(216, 16%, 13%, 100%) !important;
  --modal-border-color: hsl(218, 19%, 31%) !important;
  --modal-community-sidebar-width: 25em !important;
  --modal-height: 100% !important;
  --modal-max-height: 100 !important;
  --modal-max-width: 100% !important;
  --modal-max-width-narrow: 75% !important;
  --modal-radius: 0px !important;
  --modal-width: 100% !important;
  --nav-collapse-icon-color: hsl(219, 13%, 51%) !important;
  --nav-collapse-icon-color-collapsed: hsl(219, 13%, 51%) !important;
  --nav-heading-color: #c8d4e6 !important;
  --nav-heading-color-collapsed: hsl(219, 13%, 51%) !important;
  --nav-heading-color-collapsed-hover: hsl(220, 17%, 66%) !important;
  --nav-heading-color-hover: #c8d4e6 !important;
  --nav-indentation-guide-color: transparent !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-selected: hsla(181, 100%, 35%, 0.15) !important;
  --nav-item-color: hsl(220, 17%, 66%) !important;
  --nav-item-color-active: #c8d4e6 !important;
  --nav-item-color-highlighted: hsl(
    177,
    100%,
    33%
  ) !important;
  --nav-item-color-hover: #c8d4e6 !important;
  --nav-item-color-selected: #c8d4e6 !important;
  --nav-item-radius: 7px !important;
  --nav-tag-color: hsl(219, 13%, 51%) !important;
  --nav-tag-color-active: hsl(220, 17%, 66%) !important;
  --nav-tag-color-hover: hsl(220, 17%, 66%) !important;
  --nav-tag-radius: 7px !important;
  --normal-folder-1: "📒" !important;
  --normal-folder-1-open: "📖" !important;
  --normal-folder-2: "📑" !important;
  --normal-folder-2-open: "📑" !important;
  --normal-folder-3: "🔖" !important;
  --normal-folder-3-open: "🔖" !important;
  --page-transparency: 100% !important;
  --panel-child: hsl(216, 17%, 14%) !important;
  --pdf-background: hsla(216, 16%, 13%, 100%) !important;
  --pdf-page-background: hsla(216, 16%, 13%, 100%) !important;
  --pdf-shadow: 0 0 0 1px hsl(216, 20%, 20%) !important;
  --pdf-sidebar-background: hsla(216, 16%, 13%, 100%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(216, 20%, 20%) !important;
  --pill-border-color: hsl(216, 20%, 20%) !important;
  --pill-border-color-hover: hsl(218, 19%, 27%) !important;
  --pill-color: hsl(220, 17%, 66%) !important;
  --pill-color-hover: #c8d4e6 !important;
  --pill-color-remove: hsl(219, 13%, 51%) !important;
  --pill-color-remove-hover: hsl(
    177,
    100%,
    33%
  ) !important;
  --prompt-background: hsla(216, 16%, 13%, 100%) !important;
  --prompt-border-color: hsl(218, 19%, 31%) !important;
  --radius-l: 19px !important;
  --radius-m: 14px !important;
  --radius-s: 7px !important;
  --radius-x: 28px !important;
  --raised-background: color-mix(in srgb, hsl(218, 18%, 15%) 65%, transparent) linear-gradient(hsl(218, 18%, 15%), color-mix(in srgb, hsl(218, 18%, 15%) 65%, transparent)) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --scrollbar-radius: 19px !important;
  --search-clear-button-color: hsl(220, 17%, 66%) !important;
  --search-icon-color: hsl(220, 17%, 66%) !important;
  --search-result-background: hsla(216, 16%, 13%, 100%) !important;
  --secondary: hsl(
    177,
    100%,
    33%
  ) !important;
  --setting-group-heading-color: #c8d4e6 !important;
  --setting-items-background: hsl(216, 17%, 14%) !important;
  --setting-items-border-color: hsl(216, 20%, 20%) !important;
  --setting-items-radius: 19px !important;
  --shadow-color: rgba(0, 0, 0, 0.2) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
    0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
    0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --shadow-ui: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042) !important;
  --slider-thumb-border-color: hsl(218, 19%, 27%) !important;
  --slider-track-background: hsl(216, 20%, 20%) !important;
  --slider-track-height: 1.2px !important;
  --status-bar-background: hsl(216, 19%, 16%) !important;
  --status-bar-border-color: hsl(216, 20%, 20%) !important;
  --status-bar-radius: 14px 0 0 0 !important;
  --status-bar-text-color: hsl(220, 17%, 66%) !important;
  --suggestion-background: hsla(216, 16%, 13%, 100%) !important;
  --sync-avatar-color-1: #ff4d3a !important;
  --sync-avatar-color-2: #f69c00 !important;
  --sync-avatar-color-3: #e8c900 !important;
  --sync-avatar-color-4: #7dcf2b !important;
  --sync-avatar-color-5: #00cecb !important;
  --sync-avatar-color-6: #009be3 !important;
  --sync-avatar-color-7: #b45af5 !important;
  --sync-avatar-color-8: #e66ab4 !important;
  --tab-background-active: hsl(218, 18%, 15%) !important;
  --tab-container-background: hsl(216, 19%, 16%) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: hsl(216, 20%, 20%) !important;
  --tab-outline-width: 0.8px !important;
  --tab-radius: 7px !important;
  --tab-radius-active: 7px !important;
  --tab-switcher-background: hsl(216, 19%, 16%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(216, 19%, 16%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(181, 100%, 35%) !important;
  --tab-text-color: hsl(219, 13%, 51%) !important;
  --tab-text-color-active: hsl(220, 17%, 66%) !important;
  --tab-text-color-focused: hsl(220, 17%, 66%) !important;
  --tab-text-color-focused-active: hsl(220, 17%, 66%) !important;
  --tab-text-color-focused-active-current: hsl(
    177,
    100%,
    33%
  ) !important;
  --tab-text-color-focused-highlighted: hsl(
    177,
    100%,
    33%
  ) !important;
  --table-add-button-border-color: hsl(216, 20%, 20%) !important;
  --table-background: hsl(218, 18%, 15%) !important;
  --table-border-color: hsl(216, 20%, 20%) !important;
  --table-column-alt-background: hsl(218, 18%, 15%) !important;
  --table-drag-handle-background-active: hsl(181, 100%, 35%) !important;
  --table-drag-handle-color: hsl(219, 13%, 51%) !important;
  --table-header-background: hsl(218, 18%, 15%) !important;
  --table-header-border-color: hsl(216, 20%, 20%) !important;
  --table-header-color: #c8d4e6 !important;
  --table-header-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --table-header-weight: normal !important;
  --table-row-alt-background: hsl(218, 18%, 15%) !important;
  --table-row-alt-background-hover: hsl(218, 18%, 15%) !important;
  --table-row-background-hover: hsl(218, 18%, 15%) !important;
  --table-selection: hsla(181, 100%, 35%, 0.1) !important;
  --table-selection-border-color: hsl(181, 100%, 35%) !important;
  --tag-background: hsla(181, 100%, 35%, 0.1) !important;
  --tag-background-hover: hsla(181, 100%, 35%, 0.2) !important;
  --tag-border-color: hsla(181, 100%, 35%, 0.15) !important;
  --tag-border-color-hover: hsla(181, 100%, 35%, 0.15) !important;
  --tag-color: hsl(
    177,
    100%,
    33%
  ) !important;
  --tag-color-hover: hsl(
    177,
    100%,
    33%
  ) !important;
  --tertiary: hsl(
    183,
    105%,
    39%
  ) !important;
  --text-accent: hsl(
    177,
    100%,
    33%
  ) !important;
  --text-accent-hover: hsl(
    183,
    105%,
    39%
  ) !important;
  --text-error: #ff4d3a !important;
  --text-faint: hsl(219, 13%, 51%) !important;
  --text-highlight-bg: hsla(181, 100%, 35%, 0.475) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: hsl(220, 17%, 66%) !important;
  --text-normal: #c8d4e6 !important;
  --text-selection: hsla(181, 100%, 35%, 0.25) !important;
  --text-success: #7dcf2b !important;
  --text-warning: #f69c00 !important;
  --textHighlight: hsla(181, 100%, 35%, 0.475) !important;
  --tile-field-padding: 5px !important;
  --tile-img-radius: 14px !important;
  --tile-padding: 8px !important;
  --tile-radius: 14px !important;
  --titleFont: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --titlebar-background: hsl(216, 19%, 16%) !important;
  --titlebar-background-focused: hsl(218, 18%, 15%) !important;
  --titlebar-border-color: hsl(216, 20%, 20%) !important;
  --titlebar-text-color: hsl(220, 17%, 66%) !important;
  --titlebar-text-color-focused: #c8d4e6 !important;
  --vault-font: "Noto Emoji" !important;
  --vault-icon: "💎" !important;
  --vault-name-font-size: 1.57em !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #c8d4e6 !important;
  --vault-profile-color-hover: #c8d4e6 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 39, 49);
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(28, 32, 38);
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(31, 36, 45);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(33, 39, 49);
  border-color: rgb(41, 49, 61);
  color: rgb(200, 212, 230);
  font-weight: 400;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(33, 39, 49);
  border-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(31, 36, 45);
  border-color: rgb(41, 49, 61);
  border-radius: 7px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(154, 163, 183);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(41, 49, 61);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 176, 179, 0.1);
  color: rgb(0, 168, 160);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(154, 163, 183);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(41, 49, 61);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 39, 49);
  border-left-color: rgb(41, 49, 61);
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(28, 32, 38);
  color: rgb(200, 212, 230);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 176, 179, 0.475);
  color: rgb(255, 255, 255);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(200, 212, 230);
  font-size: 14.3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgba(255, 77, 58, 0.1);
  border-color: rgb(255, 77, 58);
  border-radius: 14px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(125, 207, 43, 0.1);
  border-color: rgb(125, 207, 43);
}

html[saved-theme="dark"] body p {
  color: rgb(154, 163, 183);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(154, 163, 183) none 0px;
  text-decoration-color: rgb(154, 163, 183);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration: underline 1.5px rgb(41, 49, 61);
  text-decoration-color: rgb(41, 49, 61);
  text-decoration-thickness: 1.5px;
  transition: 0.25s;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 168, 160);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(0, 168, 160) none 0px;
  text-decoration: underline 1.5px rgb(41, 49, 61);
  text-decoration-color: rgb(41, 49, 61);
  text-decoration-thickness: 1.5px;
  transition: 0.25s;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(114, 125, 146);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(114, 125, 146) none 0px;
  text-decoration: underline 1.5px rgb(56, 65, 82);
  text-decoration-color: rgb(56, 65, 82);
  text-decoration-thickness: 1.5px;
  transition: 0.25s;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body dt {
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(114, 125, 146);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body table {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  margin-left: 218.5px;
  margin-right: 218.5px;
  width: 437px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(31, 36, 45);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(31, 36, 45);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(41, 49, 61);
  border-left-color: rgb(41, 49, 61);
  border-right-color: rgb(41, 49, 61);
  border-top-color: rgb(41, 49, 61);
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body th {
  background-color: rgb(33, 39, 49);
  border-bottom-color: rgb(41, 49, 61);
  border-left-color: rgb(41, 49, 61);
  border-right-color: rgb(41, 49, 61);
  border-top-color: rgb(41, 49, 61);
  color: rgb(200, 212, 230);
  font-weight: 400;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(31, 36, 45);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(200, 212, 230);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(200, 212, 230);
  font-family: "DM Mono", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(30, 34, 42);
  border-bottom-color: rgb(41, 49, 61);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(41, 49, 61);
  border-left-width: 1px;
  border-right-color: rgb(41, 49, 61);
  border-right-width: 1px;
  border-top-color: rgb(41, 49, 61);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(30, 34, 42);
  border-bottom-color: rgb(41, 49, 61);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(41, 49, 61);
  border-left-width: 1px;
  border-right-color: rgb(41, 49, 61);
  border-right-width: 1px;
  border-top-color: rgb(41, 49, 61);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(232, 201, 0);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(232, 201, 0);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(232, 201, 0);
  border-left-color: rgb(232, 201, 0);
  border-right-color: rgb(232, 201, 0);
  border-top-color: rgb(232, 201, 0);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(30, 34, 42);
  border-bottom-color: rgb(41, 49, 61);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(41, 49, 61);
  border-left-width: 1px;
  border-right-color: rgb(41, 49, 61);
  border-right-width: 1px;
  border-top-color: rgb(41, 49, 61);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 32px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(30, 34, 42);
  border-bottom-color: rgb(41, 49, 61);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(41, 49, 61);
  border-left-width: 1px;
  border-right-color: rgb(41, 49, 61);
  border-right-width: 1px;
  border-top-color: rgb(41, 49, 61);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 32px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(200, 212, 230);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(200, 212, 230);
  border-radius: 7px;
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 2px 0px, rgba(0, 0, 0, 0.18) 0px 3.4px 6.7px 0px, rgba(0, 0, 0, 0.3) 0px 15px 30px 0px;
  filter: brightness(0.9);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(30, 34, 42);
  border-bottom-color: rgb(154, 163, 183);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-left-color: rgb(154, 163, 183);
  border-right-color: rgb(154, 163, 183);
  border-top-color: rgb(154, 163, 183);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(200, 212, 230);
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(0, 176, 179);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 77, 58);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-left-color: rgb(255, 77, 58);
  border-right-color: rgb(255, 77, 58);
  border-top-color: rgb(255, 77, 58);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  margin-left: -27px;
  transition: 0.25s;
  width: 18px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(0, 155, 227);
  border-left-color: rgb(0, 155, 227);
  border-right-color: rgb(0, 155, 227);
  border-top-color: rgb(0, 155, 227);
  color: rgb(0, 155, 227);
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 155, 227);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 125, 207, 43;
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgba(125, 207, 43, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(125, 207, 43, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(125, 207, 43, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(125, 207, 43, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 230, 106, 180;
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgba(230, 106, 180, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 106, 180, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(230, 106, 180, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(230, 106, 180, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 246, 156, 0;
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgba(246, 156, 0, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(246, 156, 0, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(246, 156, 0, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(246, 156, 0, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 180, 90, 245;
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgba(180, 90, 245, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(180, 90, 245, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(180, 90, 245, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(180, 90, 245, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 255, 77, 58;
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgba(255, 77, 58, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 77, 58, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(255, 77, 58, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(255, 77, 58, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 0, 155, 227;
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgba(0, 155, 227, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 155, 227, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(0, 155, 227, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(0, 155, 227, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 0, 155, 227;
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgba(0, 155, 227, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 155, 227, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(0, 155, 227, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(0, 155, 227, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 232, 201, 0;
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgba(232, 201, 0, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 201, 0, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(232, 201, 0, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(232, 201, 0, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgba(158, 158, 158, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 125, 207, 43;
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgba(125, 207, 43, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(125, 207, 43, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(125, 207, 43, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(125, 207, 43, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 232, 201, 0;
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgba(232, 201, 0, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 201, 0, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(232, 201, 0, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(232, 201, 0, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 0, 155, 227;
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgba(0, 155, 227, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 155, 227, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(0, 155, 227, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(0, 155, 227, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 246, 156, 0;
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgba(246, 156, 0, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(246, 156, 0, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(246, 156, 0, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(246, 156, 0, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='7' x='3' y='3' rx='1'/%3E%3Crect width='7' height='7' x='3' y='14' rx='1'/%3E%3Cpath d='M14 4h7'/%3E%3Cpath d='M14 9h7'/%3E%3Cpath d='M14 15h7'/%3E%3Cpath d='M14 20h7'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2'/%3E%3Cpath d='M6 6h.01'/%3E%3Cpath d='M6 18h.01'/%3E%3Cpath d='m13 6-4 6h6l-4 6'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 2 2 22'/%3E%3C/svg%3E");
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
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.801 10A10 10 0 1 1 17 3.335'/%3E%3Cpath d='m9 11 3 3L22 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 16h.01'/%3E%3Cpath d='M12 8v4'/%3E%3Cpath d='M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(41, 49, 61);
  border-bottom-color: rgb(41, 49, 61);
  border-left-color: rgb(41, 49, 61);
  border-right-color: rgb(41, 49, 61);
  border-top-color: rgb(41, 49, 61);
  color: rgb(200, 212, 230);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(28, 32, 38);
  border-bottom-color: rgb(64, 75, 94);
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  border-left-color: rgb(64, 75, 94);
  border-right-color: rgb(64, 75, 94);
  border-top-color: rgb(64, 75, 94);
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(200, 212, 230);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(64, 75, 94);
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  border-left-color: rgb(64, 75, 94);
  border-right-color: rgb(64, 75, 94);
  border-top-color: rgb(64, 75, 94);
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 39, 49);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(200, 212, 230);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 176, 179, 0.1);
  border-bottom-color: rgba(0, 176, 179, 0.15);
  border-left-color: rgba(0, 176, 179, 0.15);
  border-right-color: rgba(0, 176, 179, 0.15);
  border-top-color: rgba(0, 176, 179, 0.15);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(0, 168, 160);
}

html[saved-theme="dark"] body h1 {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(41, 49, 61);
  border-left-color: rgb(41, 49, 61);
  border-right-color: rgb(41, 49, 61);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 0, 155, 227;
  border-bottom-color: rgba(0, 155, 227, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 155, 227, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(0, 155, 227, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(0, 155, 227, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(28, 32, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 32, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(28, 32, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 32, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(28, 32, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 32, 38);
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 32, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 32, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 32, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 32, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(28, 32, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 32, 38);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(154, 163, 183);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(154, 163, 183);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(200, 212, 230);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(154, 163, 183);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(154, 163, 183);
  border-right-color: rgb(154, 163, 183);
  border-top-color: rgb(154, 163, 183);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(154, 163, 183);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(33, 39, 49);
  border-bottom-color: rgb(41, 49, 61);
  border-left-color: rgb(41, 49, 61);
  border-right-color: rgb(41, 49, 61);
  border-top-color: rgb(41, 49, 61);
  border-top-left-radius: 14px;
  color: rgb(154, 163, 183);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(154, 163, 183);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(154, 163, 183);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(154, 163, 183);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(154, 163, 183);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(154, 163, 183);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(154, 163, 183);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(154, 163, 183);
  border-right-color: rgb(154, 163, 183);
  border-top-color: rgb(154, 163, 183);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(154, 163, 183);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(154, 163, 183);
  stroke: rgb(154, 163, 183);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(200, 212, 230);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(114, 125, 146);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body .metadata {
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgb(41, 49, 61);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(41, 49, 61);
  border-left-width: 1px;
  border-right-color: rgb(41, 49, 61);
  border-right-width: 1px;
  border-top-color: rgb(41, 49, 61);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(154, 163, 183);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(154, 163, 183);
  border-left-color: rgb(154, 163, 183);
  border-right-color: rgb(154, 163, 183);
  border-top-color: rgb(154, 163, 183);
  color: rgb(154, 163, 183);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(33, 39, 49);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(154, 163, 183);
  border-left-color: rgb(154, 163, 183);
  border-right-color: rgb(154, 163, 183);
  border-top-color: rgb(154, 163, 183);
  color: rgb(154, 163, 183);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(30, 34, 42);
  border-bottom-color: rgb(200, 212, 230);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(200, 212, 230);
  font-family: "DM Mono", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body sub {
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body summary {
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body sup {
  color: rgb(200, 212, 230);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(31, 36, 45);
  border-bottom-color: rgb(41, 49, 61);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(41, 49, 61);
  border-left-width: 1px;
  border-right-color: rgb(41, 49, 61);
  border-right-width: 1px;
  border-top-color: rgb(41, 49, 61);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(0, 168, 160);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 181 !important;
  --accent-l: 35% !important;
  --accent-s: 100% !important;
  --anim-motion-swing: cubic-bezier(0.25, 0.05, 0.55, 0.95) !important;
  --background-modifier-active-hover: hsla(181, 100%, 35%, 0.1) !important;
  --background-modifier-border: #9f9f9f66 !important;
  --background-modifier-border-focus: #d7d7d7 !important;
  --background-modifier-border-hover: #dedede !important;
  --background-modifier-error: #c75f54 !important;
  --background-modifier-error-hover: #c75f54 !important;
  --background-modifier-error-rgb: 255, 77, 58 !important;
  --background-modifier-form-field: hsla(0, 0%, 100%, 100%) !important;
  --background-modifier-form-field-hover: hsla(0, 0%, 100%, 100%) !important;
  --background-modifier-success: #8fb26b !important;
  --background-modifier-success-rgb: 125, 207, 43 !important;
  --background-primary: hsla(0, 0%, 100%, 100%) !important;
  --background-primary-alt: #fdfdfd !important;
  --background-secondary: hsl(0, 0%, 96%) !important;
  --bases-cards-background: hsla(0, 0%, 100%, 100%) !important;
  --bases-cards-cover-background: #fdfdfd !important;
  --bases-cards-radius: 14px !important;
  --bases-cards-shadow: 0 0 0 1px #9f9f9f66 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #dedede !important;
  --bases-embed-border-color: #9f9f9f66 !important;
  --bases-embed-border-radius: 7px !important;
  --bases-group-heading-property-color: #7f7f7f !important;
  --bases-table-border-color: #9f9f9f66 !important;
  --bases-table-cell-background-active: hsla(0, 0%, 100%, 100%) !important;
  --bases-table-cell-background-disabled: #fdfdfd !important;
  --bases-table-cell-background-selected: hsla(181, 100%, 35%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #d7d7d7 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
    177,
    100%,
    33%
  ) !important;
  --bases-table-container-border-radius: 7px !important;
  --bases-table-group-background: #fdfdfd !important;
  --bases-table-header-background: hsla(0, 0%, 100%, 100%) !important;
  --bases-table-header-color: #7f7f7f !important;
  --bases-table-row-background-hover: #fcfcfc !important;
  --bases-table-summary-background: hsla(0, 0%, 100%, 100%) !important;
  --blockquote-border-color: hsl(
    177,
    100%,
    33%
  ) !important;
  --blur-background: color-mix(in srgb, hsla(0, 0%, 100%, 100%) 65%, transparent) linear-gradient(hsla(0, 0%, 100%, 100%), color-mix(in srgb, hsla(0, 0%, 100%, 100%) 65%, transparent)) !important;
  --bodyFont: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --button-background: hsl(
    183,
    105%,
    39%
  ) !important;
  --callout-bug: 230, 106, 180;
  --callout-default: 0, 155, 227;
  --callout-error: 246, 156, 0;
  --callout-example: 180, 90, 245;
  --callout-fail: 255, 77, 58;
  --callout-important: 0, 206, 203;
  --callout-info: 0, 155, 227;
  --callout-question: 232, 201, 0;
  --callout-radius: 7px;
  --callout-success: 125, 207, 43;
  --callout-summary: 125, 207, 43;
  --callout-tip: 232, 201, 0;
  --callout-todo: 0, 155, 227;
  --callout-warning: 246, 156, 0;
  --canvas-background: hsla(0, 0%, 100%, 100%) !important;
  --canvas-card-label-color: #878787 !important;
  --canvas-color-1: 255, 77, 58 !important;
  --canvas-color-2: 246, 156, 0 !important;
  --canvas-color-3: 232, 201, 0 !important;
  --canvas-color-4: 125, 207, 43 !important;
  --canvas-color-5: 0, 206, 203 !important;
  --canvas-color-6: 180, 90, 245 !important;
  --canvas-controls-icon-stroke: 1.3px !important;
  --canvas-controls-radius: 7px !important;
  --canvas-dot-pattern: #9f9f9f66 !important;
  --caret-color: #252525 !important;
  --checkbox-border-color: #c75f54 !important;
  --checkbox-border-color-hover: #7f7f7f !important;
  --checkbox-color: transparent !important;
  --checkbox-color-hover: hsl(
    183,
    105%,
    39%
  ) !important;
  --checkbox-marker-color: hsla(0, 0%, 100%, 100%) !important;
  --checkbox-radius: 14px !important;
  --checkbox-size: 18px !important;
  --checklist-done-color: #7f7f7f !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 7px !important;
  --code-background: #fdfdfd !important;
  --code-border-color: #9f9f9f66 !important;
  --code-comment: #878787 !important;
  --code-function: #dca931 !important;
  --code-important: #d08344 !important;
  --code-keyword: #ac7aaa !important;
  --code-normal: #252525 !important;
  --code-operator: #c75f54 !important;
  --code-property: #49a7ba !important;
  --code-punctuation: #7f7f7f !important;
  --code-radius: 7px !important;
  --code-string: #8fb26b !important;
  --code-tag: #c75f54 !important;
  --code-value: #8076ad !important;
  --codeFont: "DM Mono", monospace !important;
  --collapse-icon-color: #878787 !important;
  --collapse-icon-color-collapsed: hsl(181, 100%, 35%) !important;
  --color-accent: hsl(181, 100%, 35%) !important;
  --color-accent-1: hsl(
    177,
    100%,
    33%
  ) !important;
  --color-accent-2: hsl(
    183,
    105%,
    39%
  ) !important;
  --color-accent-3: hsl(
    216,
    100%,
    47%
  ) !important;
  --color-accent-hsl: 181, 100%, 35% !important;
  --color-base-00: hsla(0, 0%, 100%, 100%) !important;
  --color-base-10: #fdfdfd !important;
  --color-base-100: #252525 !important;
  --color-base-20: hsl(0, 0%, 96%) !important;
  --color-base-25: #efefef !important;
  --color-base-30: #9f9f9f66 !important;
  --color-base-35: #dedede !important;
  --color-base-40: #d7d7d7 !important;
  --color-base-50: #878787 !important;
  --color-base-60: #939393 !important;
  --color-base-70: #7f7f7f !important;
  --color-blue: #4e8aa6 !important;
  --color-blue-rgb: 0, 155, 227 !important;
  --color-cyan: #49a7ba !important;
  --color-cyan-rgb: 0, 206, 203 !important;
  --color-green: #8fb26b !important;
  --color-green-rgb: 125, 207, 43 !important;
  --color-orange: #d08344 !important;
  --color-orange-rgb: 246, 156, 0 !important;
  --color-pink: #ac7aaa !important;
  --color-pink-rgb: 230, 106, 180 !important;
  --color-purple: #8076ad !important;
  --color-purple-rgb: 180, 90, 245 !important;
  --color-red: #c75f54 !important;
  --color-red-rgb: 255, 77, 58 !important;
  --color-yellow: #dca931 !important;
  --color-yellow-rgb: 232, 201, 0 !important;
  --custom-code-height: 1em !important;
  --custom-doc-bg: hsl(
    177,
    100%,
    33%
  ) !important;
  --custom-line-height: 2em !important;
  --dark: #252525 !important;
  --darkgray: #252525 !important;
  --divider-color: #9f9f9f66 !important;
  --divider-color-hover: hsl(
    177,
    100%,
    33%
  ) !important;
  --doc-background: hsl(181, 20%, 95%) !important;
  --doc-bg: hsl(181, 20%, 95%) !important;
  --dropdown-background: hsla(0, 0%, 100%, 100%) !important;
  --dropdown-background-hover: #fdfdfd !important;
  --embed-block-shadow-hover: 0 0 0 1px #9f9f9f66, inset 0 0 0 1px #9f9f9f66 !important;
  --embed-border-left: none !important;
  --embed-border-start: 2px solid hsl(
    177,
    100%,
    33%
  ) !important;
  --file-emoji: "Noto Emoji" !important;
  --file-header-background: hsla(0, 0%, 100%, 100%) !important;
  --file-header-background-focused: hsla(0, 0%, 100%, 100%) !important;
  --file-header-font: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --file-line-width: 900px !important;
  --flair-background: hsla(0, 0%, 100%, 100%) !important;
  --flair-color: #252525 !important;
  --folder-1: "📒" !important;
  --folder-1-open: "📖" !important;
  --folder-2: "📑" !important;
  --folder-2-open: "📑" !important;
  --folder-3: "🔖" !important;
  --folder-3-open: "🔖" !important;
  --folder-emoji: "Noto Emoji" !important;
  --folder-icon-size: 1.6em !important;
  --folder-padding: 4px !important;
  --font-default: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --font-emoji: "Noto Color Emoji" !important;
  --font-interface: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --font-main: "Nunito Sans" !important;
  --font-mermaid: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --font-monospace: "DM Mono", monospace !important;
  --font-text: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --footnote-divider-color: #9f9f9f66 !important;
  --footnote-id-color: #7f7f7f !important;
  --footnote-id-color-no-occurrences: #878787 !important;
  --footnote-radius: 7px !important;
  --google-font-color-notocoloremoji: colrv1 !important;
  --graph-line: #dedede !important;
  --graph-node: #7f7f7f !important;
  --graph-node-attachment: #dca931 !important;
  --graph-node-focused: hsl(181, 100%, 35%) !important;
  --graph-node-tag: #8fb26b !important;
  --graph-node-unresolved: #878787 !important;
  --graph-text: #252525 !important;
  --gray: #7f7f7f !important;
  --h1-align: center !important;
  --h1-color-custom: #49a7ba !important;
  --h1-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --h1-size: 2.2em !important;
  --h2-color-custom: #4e8aa6 !important;
  --h2-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --h2-size: 1.87em !important;
  --h2-weight: 700 !important;
  --h3-color-custom: #8076ad !important;
  --h3-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --h3-size: 1.57em !important;
  --h3-weight: 700 !important;
  --h4-color-custom: #ac7aaa !important;
  --h4-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --h4-size: 1.35em !important;
  --h4-weight: 700 !important;
  --h5-color-custom: #c75f54 !important;
  --h5-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --h5-size: 1.3em !important;
  --h5-weight: 700 !important;
  --h6-color-custom: #d08344 !important;
  --h6-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --h6-size: 1.1em !important;
  --h6-weight: 700 !important;
  --headerFont: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --heading-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --heading-font-2: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --heading-formatting: #878787 !important;
  --heading-style: normal !important;
  --heading-variant: normal !important;
  --heading-weight: 700 !important;
  --highlight: rgba(255, 200, 0, 0.459) !important;
  --highlight-text: #252525 !important;
  --hr-color: #9f9f9f66 !important;
  --icon-background: #fcfcfc !important;
  --icon-color: #7f7f7f !important;
  --icon-color-active: hsl(181, 100%, 35%) !important;
  --icon-color-focused: #252525 !important;
  --icon-color-hover: #7f7f7f !important;
  --icon-emoji: "Noto Color Emoji" !important;
  --icon-l-stroke-width: 1.3px !important;
  --icon-m-stroke-width: 1.3px !important;
  --icon-s-stroke-width: 1.3px !important;
  --icon-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042) inset, 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042) !important;
  --icon-stroke: 1.3px !important;
  --img-align: auto !important;
  --img-bg-size: cover !important;
  --img-blur: 3px !important;
  --img-position-x: 50% !important;
  --img-position-y: 50% !important;
  --img-sat: 100% !important;
  --indentation-guide-color: transparent !important;
  --inline-title-color: #252525 !important;
  --inline-title-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --inline-title-size: 2.5em !important;
  --input-date-separator: #878787 !important;
  --input-placeholder-color: #878787 !important;
  --interactive-accent: hsl(
    177,
    100%,
    33%
  ) !important;
  --interactive-accent-hover: hsl(
    183,
    105%,
    39%
  ) !important;
  --interactive-accent-hsl: 181, 100%, 35% !important;
  --interactive-hover: #fdfdfd !important;
  --interactive-normal: hsla(0, 0%, 100%, 100%) !important;
  --light: hsla(0, 0%, 100%, 100%) !important;
  --lightgray: hsl(0, 0%, 96%) !important;
  --link-color: hsl(181, 100%, 35%) !important;
  --link-color-hover: hsl(
    183,
    105%,
    39%
  ) !important;
  --link-external-color: hsl(181, 100%, 35%) !important;
  --link-external-color-hover: hsl(
    183,
    105%,
    39%
  ) !important;
  --link-unresolved-color: #878787 !important;
  --link-unresolved-decoration-color: #dedede !important;
  --list-bullet-size: 0.45em !important;
  --list-marker-color: #49a7ba !important;
  --list-marker-color-collapsed: hsl(181, 100%, 35%) !important;
  --list-marker-color-hover: #dca931 !important;
  --menu-background: hsl(0, 0%, 96%) !important;
  --menu-border-color: #dedede !important;
  --menu-radius: 14px !important;
  --metadata-border-color: #9f9f9f66 !important;
  --metadata-divider-color: #9f9f9f66 !important;
  --metadata-input-font: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --metadata-input-text-color: #252525 !important;
  --metadata-label-font: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --metadata-label-text-color: #7f7f7f !important;
  --metadata-label-text-color-hover: #7f7f7f !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #d7d7d7 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #dedede !important;
  --modal-background: hsla(0, 0%, 100%, 100%) !important;
  --modal-border-color: #d7d7d7 !important;
  --modal-community-sidebar-width: 25em !important;
  --modal-height: 100% !important;
  --modal-max-height: 100 !important;
  --modal-max-width: 100% !important;
  --modal-max-width-narrow: 75% !important;
  --modal-radius: 0px !important;
  --modal-width: 100% !important;
  --nav-collapse-icon-color: #878787 !important;
  --nav-collapse-icon-color-collapsed: #878787 !important;
  --nav-heading-color: #252525 !important;
  --nav-heading-color-collapsed: #878787 !important;
  --nav-heading-color-collapsed-hover: #7f7f7f !important;
  --nav-heading-color-hover: #252525 !important;
  --nav-indentation-guide-color: transparent !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-selected: hsla(181, 100%, 35%, 0.15) !important;
  --nav-item-color: #7f7f7f !important;
  --nav-item-color-active: #252525 !important;
  --nav-item-color-highlighted: hsl(181, 100%, 35%) !important;
  --nav-item-color-hover: #252525 !important;
  --nav-item-color-selected: #252525 !important;
  --nav-item-radius: 7px !important;
  --nav-tag-color: #878787 !important;
  --nav-tag-color-active: #7f7f7f !important;
  --nav-tag-color-hover: #7f7f7f !important;
  --nav-tag-radius: 7px !important;
  --normal-folder-1: "📒" !important;
  --normal-folder-1-open: "📖" !important;
  --normal-folder-2: "📑" !important;
  --normal-folder-2-open: "📑" !important;
  --normal-folder-3: "🔖" !important;
  --normal-folder-3-open: "🔖" !important;
  --page-transparency: 100% !important;
  --panel-child: #fdfdfd !important;
  --pdf-background: hsla(0, 0%, 100%, 100%) !important;
  --pdf-page-background: hsla(0, 0%, 100%, 100%) !important;
  --pdf-sidebar-background: hsla(0, 0%, 100%, 100%) !important;
  --pill-border-color: #9f9f9f66 !important;
  --pill-border-color-hover: #dedede !important;
  --pill-color: #7f7f7f !important;
  --pill-color-hover: #252525 !important;
  --pill-color-remove: #878787 !important;
  --pill-color-remove-hover: hsl(181, 100%, 35%) !important;
  --prompt-background: hsla(0, 0%, 100%, 100%) !important;
  --prompt-border-color: #d7d7d7 !important;
  --radius-l: 19px !important;
  --radius-m: 14px !important;
  --radius-s: 7px !important;
  --radius-x: 28px !important;
  --raised-background: color-mix(in srgb, hsla(0, 0%, 100%, 100%) 65%, transparent) linear-gradient(hsla(0, 0%, 100%, 100%), color-mix(in srgb, hsla(0, 0%, 100%, 100%) 65%, transparent)) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --scrollbar-radius: 19px !important;
  --search-clear-button-color: #7f7f7f !important;
  --search-icon-color: #7f7f7f !important;
  --search-result-background: hsla(0, 0%, 100%, 100%) !important;
  --secondary: hsl(181, 100%, 35%) !important;
  --setting-group-heading-color: #252525 !important;
  --setting-items-background: #fdfdfd !important;
  --setting-items-border-color: #9f9f9f66 !important;
  --setting-items-radius: 19px !important;
  --shadow-color: hsl(0, 0%, 96%) !important;
  --shadow-ui: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042) !important;
  --slider-thumb-border-color: #dedede !important;
  --slider-track-background: #9f9f9f66 !important;
  --slider-track-height: 1.2px !important;
  --status-bar-background: hsl(0, 0%, 96%) !important;
  --status-bar-border-color: #9f9f9f66 !important;
  --status-bar-radius: 14px 0 0 0 !important;
  --status-bar-text-color: #7f7f7f !important;
  --suggestion-background: hsla(0, 0%, 100%, 100%) !important;
  --sync-avatar-color-1: #c75f54 !important;
  --sync-avatar-color-2: #d08344 !important;
  --sync-avatar-color-3: #dca931 !important;
  --sync-avatar-color-4: #8fb26b !important;
  --sync-avatar-color-5: #49a7ba !important;
  --sync-avatar-color-6: #4e8aa6 !important;
  --sync-avatar-color-7: #8076ad !important;
  --sync-avatar-color-8: #ac7aaa !important;
  --tab-background-active: #fcfcfc !important;
  --tab-container-background: hsl(0, 0%, 96%) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: #9f9f9f66 !important;
  --tab-outline-width: 0.8px !important;
  --tab-radius: 7px !important;
  --tab-radius-active: 7px !important;
  --tab-switcher-background: hsl(0, 0%, 96%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 96%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(181, 100%, 35%) !important;
  --tab-text-color: #878787 !important;
  --tab-text-color-active: #7f7f7f !important;
  --tab-text-color-focused: #7f7f7f !important;
  --tab-text-color-focused-active: #7f7f7f !important;
  --tab-text-color-focused-active-current: hsl(
    177,
    100%,
    33%
  ) !important;
  --tab-text-color-focused-highlighted: hsl(181, 100%, 35%) !important;
  --table-add-button-border-color: #9f9f9f66 !important;
  --table-background: #fcfcfc !important;
  --table-border-color: #9f9f9f66 !important;
  --table-column-alt-background: #fcfcfc !important;
  --table-drag-handle-background-active: hsl(
    177,
    100%,
    33%
  ) !important;
  --table-drag-handle-color: #878787 !important;
  --table-header-background: #fcfcfc !important;
  --table-header-border-color: #9f9f9f66 !important;
  --table-header-color: #252525 !important;
  --table-header-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --table-header-weight: normal !important;
  --table-row-alt-background: #fcfcfc !important;
  --table-row-alt-background-hover: #fcfcfc !important;
  --table-row-background-hover: #fcfcfc !important;
  --table-selection: hsla(181, 100%, 35%, 0.1) !important;
  --table-selection-border-color: hsl(
    177,
    100%,
    33%
  ) !important;
  --tag-background: hsla(181, 100%, 35%, 0.1) !important;
  --tag-background-hover: hsla(181, 100%, 35%, 0.2) !important;
  --tag-border-color: hsla(181, 100%, 35%, 0.15) !important;
  --tag-border-color-hover: hsla(181, 100%, 35%, 0.15) !important;
  --tag-color: hsl(181, 100%, 35%) !important;
  --tag-color-hover: hsl(181, 100%, 35%) !important;
  --tertiary: hsl(
    183,
    105%,
    39%
  ) !important;
  --text-accent: hsl(181, 100%, 35%) !important;
  --text-accent-hover: hsl(
    183,
    105%,
    39%
  ) !important;
  --text-error: #c75f54 !important;
  --text-faint: #878787 !important;
  --text-highlight-bg: rgba(255, 200, 0, 0.459) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #7f7f7f !important;
  --text-normal: #252525 !important;
  --text-selection: hsla(181, 100%, 35%, 0.2) !important;
  --text-success: #8fb26b !important;
  --text-warning: #d08344 !important;
  --textHighlight: rgba(255, 200, 0, 0.459) !important;
  --tile-field-padding: 5px !important;
  --tile-img-radius: 14px !important;
  --tile-padding: 8px !important;
  --tile-radius: 14px !important;
  --titleFont: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif !important;
  --titlebar-background: hsl(0, 0%, 96%) !important;
  --titlebar-border-color: #9f9f9f66 !important;
  --titlebar-text-color: #7f7f7f !important;
  --titlebar-text-color-focused: #252525 !important;
  --vault-font: "Noto Emoji" !important;
  --vault-icon: "💎" !important;
  --vault-name-font-size: 1.57em !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #252525 !important;
  --vault-profile-color-hover: #252525 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(245, 245, 245);
  border-color: rgba(159, 159, 159, 0.4);
  color: rgb(37, 37, 37);
  font-weight: 400;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(252, 252, 252);
  border-color: rgba(159, 159, 159, 0.4);
  border-radius: 7px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(127, 127, 127);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(159, 159, 159, 0.4);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 176, 179, 0.1);
  color: rgb(0, 176, 179);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(127, 127, 127);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(159, 159, 159, 0.4);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  border-left-color: rgba(159, 159, 159, 0.4);
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(37, 37, 37);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 200, 0, 0.46);
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body del {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(37, 37, 37);
  font-size: 14.3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgba(255, 77, 58, 0.1);
  border-color: rgb(199, 95, 84);
  border-radius: 14px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(125, 207, 43, 0.1);
  border-color: rgb(143, 178, 107);
}

html[saved-theme="light"] body p {
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(127, 127, 127) none 0px;
  text-decoration-color: rgb(127, 127, 127);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration: underline 1.5px rgba(159, 159, 159, 0.4);
  text-decoration-color: rgba(159, 159, 159, 0.4);
  text-decoration-thickness: 1.5px;
  transition: 0.25s;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 176, 179);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(0, 176, 179) none 0px;
  text-decoration: underline 1.5px rgba(159, 159, 159, 0.4);
  text-decoration-color: rgba(159, 159, 159, 0.4);
  text-decoration-thickness: 1.5px;
  transition: 0.25s;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(135, 135, 135);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(135, 135, 135) none 0px;
  text-decoration: underline 1.5px rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
  text-decoration-thickness: 1.5px;
  transition: 0.25s;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body dt {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body ol > li {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body ul > li {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(135, 135, 135);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body table {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  margin-left: 218.5px;
  margin-right: 218.5px;
  width: 437px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-left-color: rgba(159, 159, 159, 0.4);
  border-right-color: rgba(159, 159, 159, 0.4);
  border-top-color: rgba(159, 159, 159, 0.4);
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body th {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-left-color: rgba(159, 159, 159, 0.4);
  border-right-color: rgba(159, 159, 159, 0.4);
  border-top-color: rgba(159, 159, 159, 0.4);
  color: rgb(37, 37, 37);
  font-weight: 400;
}

html[saved-theme="light"] body tr {
  background-color: rgb(252, 252, 252);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(37, 37, 37);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(37, 37, 37);
  font-family: "DM Mono", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(253, 253, 253);
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgba(159, 159, 159, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(159, 159, 159, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(159, 159, 159, 0.4);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(253, 253, 253);
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgba(159, 159, 159, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(159, 159, 159, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(159, 159, 159, 0.4);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(220, 169, 49);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 169, 49);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 169, 49);
  border-left-color: rgb(220, 169, 49);
  border-right-color: rgb(220, 169, 49);
  border-top-color: rgb(220, 169, 49);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(253, 253, 253);
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgba(159, 159, 159, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(159, 159, 159, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(159, 159, 159, 0.4);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 32px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(253, 253, 253);
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgba(159, 159, 159, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(159, 159, 159, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(159, 159, 159, 0.4);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 32px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body figcaption {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(37, 37, 37);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(37, 37, 37);
  border-radius: 7px;
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.027) 0px 1px 2px 0px, rgba(0, 0, 0, 0.043) 0px 3.4px 6.7px 0px, rgba(0, 0, 0, 0.07) 0px 15px 30px 0px;
  filter: contrast(1.04) saturate(1.05);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(253, 253, 253);
  border-bottom-color: rgb(127, 127, 127);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-left-color: rgb(127, 127, 127);
  border-right-color: rgb(127, 127, 127);
  border-top-color: rgb(127, 127, 127);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(37, 37, 37);
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(0, 168, 160);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(199, 95, 84);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-left-color: rgb(199, 95, 84);
  border-right-color: rgb(199, 95, 84);
  border-top-color: rgb(199, 95, 84);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  margin-left: -27px;
  transition: 0.25s;
  width: 18px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(0, 155, 227);
  border-left-color: rgb(0, 155, 227);
  border-right-color: rgb(0, 155, 227);
  border-top-color: rgb(0, 155, 227);
  color: rgb(0, 155, 227);
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 155, 227);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 125, 207, 43;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(125, 207, 43, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(125, 207, 43, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(125, 207, 43, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(125, 207, 43, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 230, 106, 180;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(230, 106, 180, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 106, 180, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(230, 106, 180, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(230, 106, 180, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 246, 156, 0;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(246, 156, 0, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(246, 156, 0, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(246, 156, 0, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(246, 156, 0, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 180, 90, 245;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(180, 90, 245, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(180, 90, 245, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(180, 90, 245, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(180, 90, 245, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 255, 77, 58;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(255, 77, 58, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 77, 58, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(255, 77, 58, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(255, 77, 58, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 0, 155, 227;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(0, 155, 227, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 155, 227, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(0, 155, 227, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(0, 155, 227, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 0, 155, 227;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(0, 155, 227, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 155, 227, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(0, 155, 227, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(0, 155, 227, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 232, 201, 0;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(232, 201, 0, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 201, 0, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(232, 201, 0, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(232, 201, 0, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(158, 158, 158, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 125, 207, 43;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(125, 207, 43, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(125, 207, 43, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(125, 207, 43, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(125, 207, 43, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 232, 201, 0;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(232, 201, 0, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 201, 0, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(232, 201, 0, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(232, 201, 0, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 0, 155, 227;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(0, 155, 227, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 155, 227, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(0, 155, 227, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(0, 155, 227, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 246, 156, 0;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(246, 156, 0, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(246, 156, 0, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(246, 156, 0, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(246, 156, 0, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='7' height='7' x='3' y='3' rx='1'/%3E%3Crect width='7' height='7' x='3' y='14' rx='1'/%3E%3Cpath d='M14 4h7'/%3E%3Cpath d='M14 9h7'/%3E%3Cpath d='M14 15h7'/%3E%3Cpath d='M14 20h7'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2'/%3E%3Cpath d='M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2'/%3E%3Cpath d='M6 6h.01'/%3E%3Cpath d='M6 18h.01'/%3E%3Cpath d='m13 6-4 6h6l-4 6'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 2 2 22'/%3E%3C/svg%3E");
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
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.801 10A10 10 0 1 1 17 3.335'/%3E%3Cpath d='m9 11 3 3L22 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 16h.01'/%3E%3Cpath d='M12 8v4'/%3E%3Cpath d='M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-left-color: rgba(159, 159, 159, 0.4);
  border-right-color: rgba(159, 159, 159, 0.4);
  border-top-color: rgba(159, 159, 159, 0.4);
  color: rgb(37, 37, 37);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(215, 215, 215);
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  border-left-color: rgb(215, 215, 215);
  border-right-color: rgb(215, 215, 215);
  border-top-color: rgb(215, 215, 215);
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(37, 37, 37);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(215, 215, 215);
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  border-left-color: rgb(215, 215, 215);
  border-right-color: rgb(215, 215, 215);
  border-top-color: rgb(215, 215, 215);
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(37, 37, 37);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 176, 179, 0.1);
  border-bottom-color: rgba(0, 176, 179, 0.15);
  border-left-color: rgba(0, 176, 179, 0.15);
  border-right-color: rgba(0, 176, 179, 0.15);
  border-top-color: rgba(0, 176, 179, 0.15);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(0, 176, 179);
}

html[saved-theme="light"] body h1 {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-left-color: rgba(159, 159, 159, 0.4);
  border-right-color: rgba(159, 159, 159, 0.4);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 0, 155, 227;
  border-bottom-color: rgba(0, 155, 227, 0.35);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 155, 227, 0.35);
  border-left-width: 1px;
  border-right-color: rgba(0, 155, 227, 0.35);
  border-right-width: 1px;
  border-top-color: rgba(0, 155, 227, 0.35);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(127, 127, 127);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(127, 127, 127);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(37, 37, 37);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(127, 127, 127);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(127, 127, 127);
  border-right-color: rgb(127, 127, 127);
  border-top-color: rgb(127, 127, 127);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(127, 127, 127);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-left-color: rgba(159, 159, 159, 0.4);
  border-right-color: rgba(159, 159, 159, 0.4);
  border-top-color: rgba(159, 159, 159, 0.4);
  border-top-left-radius: 14px;
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(127, 127, 127);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(127, 127, 127);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(127, 127, 127);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(127, 127, 127);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(127, 127, 127);
  border-right-color: rgb(127, 127, 127);
  border-top-color: rgb(127, 127, 127);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(127, 127, 127);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(127, 127, 127);
  stroke: rgb(127, 127, 127);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(37, 37, 37);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(135, 135, 135);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body .metadata {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgba(159, 159, 159, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(159, 159, 159, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(159, 159, 159, 0.4);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(127, 127, 127);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(127, 127, 127);
  border-left-color: rgb(127, 127, 127);
  border-right-color: rgb(127, 127, 127);
  border-top-color: rgb(127, 127, 127);
  color: rgb(127, 127, 127);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(127, 127, 127);
  border-left-color: rgb(127, 127, 127);
  border-right-color: rgb(127, 127, 127);
  border-top-color: rgb(127, 127, 127);
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(253, 253, 253);
  border-bottom-color: rgb(37, 37, 37);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(37, 37, 37);
  font-family: "DM Mono", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body sub {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body summary {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body sup {
  color: rgb(37, 37, 37);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgba(159, 159, 159, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(159, 159, 159, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(159, 159, 159, 0.4);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(0, 176, 179);
}`,
  },
};
