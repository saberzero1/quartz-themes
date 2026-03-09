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
  --accent-h: 181;
  --accent-l: 35%;
  --accent-s: 100%;
  --anim-motion-swing: cubic-bezier(0.25, 0.05, 0.55, 0.95);
  --background-modifier-active-hover: rgba(0, 176, 179, 0.1);
  --background-modifier-border: rgb(41, 49, 61);
  --background-modifier-border-focus: rgb(64, 75, 94);
  --background-modifier-border-hover: rgb(56, 65, 82);
  --background-modifier-error: #ff4d3a;
  --background-modifier-error-hover: #ff4d3a;
  --background-modifier-error-rgb: 255, 77, 58;
  --background-modifier-form-field: rgb(41, 49, 61);
  --background-modifier-form-field-hover: rgb(41, 49, 61);
  --background-modifier-success: #7dcf2b;
  --background-modifier-success-rgb: 125, 207, 43;
  --background-primary: rgb(28, 32, 38);
  --background-primary-alt: rgb(30, 34, 42);
  --background-secondary: rgb(33, 39, 49);
  --background-secondary-alt: rgb(31, 36, 45);
  --bases-cards-background: rgb(28, 32, 38);
  --bases-cards-cover-background: rgb(30, 34, 42);
  --bases-cards-radius: 14px;
  --bases-cards-shadow: 0 0 0 1px rgb(41, 49, 61);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(56, 65, 82);
  --bases-embed-border-color: rgb(41, 49, 61);
  --bases-embed-border-radius: 7px;
  --bases-group-heading-property-color: rgb(154, 163, 183);
  --bases-table-border-color: rgb(41, 49, 61);
  --bases-table-cell-background-active: rgb(28, 32, 38);
  --bases-table-cell-background-disabled: rgb(30, 34, 42);
  --bases-table-cell-background-selected: rgba(0, 176, 179, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(64, 75, 94);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 176, 179);
  --bases-table-container-border-radius: 7px;
  --bases-table-group-background: rgb(30, 34, 42);
  --bases-table-header-background: rgb(28, 32, 38);
  --bases-table-header-color: rgb(154, 163, 183);
  --bases-table-row-background-hover: rgb(31, 36, 45);
  --bases-table-summary-background: rgb(28, 32, 38);
  --blockquote-border-color: rgb(0, 176, 179);
  --blur-background: color-mix(in srgb, rgb(31, 36, 45) 65%, transparent) linear-gradient(rgb(31, 36, 45), color-mix(in srgb, rgb(31, 36, 45) 65%, transparent));
  --button-background: hsl(
    183,
    105%,
    39%
  );
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
  --canvas-background: rgb(28, 32, 38);
  --canvas-card-label-color: rgb(114, 125, 146);
  --canvas-color-1: 255, 77, 58;
  --canvas-color-2: 246, 156, 0;
  --canvas-color-3: 232, 201, 0;
  --canvas-color-4: 125, 207, 43;
  --canvas-color-5: 0, 206, 203;
  --canvas-color-6: 180, 90, 245;
  --canvas-controls-icon-stroke: 1.3px;
  --canvas-controls-radius: 7px;
  --canvas-dot-pattern: rgb(31, 36, 45);
  --caret-color: #c8d4e6;
  --checkbox-border-color: #ff4d3a;
  --checkbox-border-color-hover: rgb(154, 163, 183);
  --checkbox-color: transparent;
  --checkbox-color-hover: rgb(0, 168, 160);
  --checkbox-marker-color: rgb(28, 32, 38);
  --checkbox-radius: 14px;
  --checkbox-size: 18px;
  --checklist-done-color: rgb(154, 163, 183);
  --checklist-done-decoration: none;
  --clickable-icon-radius: 7px;
  --code-background: rgb(30, 34, 42);
  --code-border-color: rgb(41, 49, 61);
  --code-comment: rgb(114, 125, 146);
  --code-function: #e8c900;
  --code-important: #f69c00;
  --code-keyword: #e66ab4;
  --code-normal: #c8d4e6;
  --code-operator: #ff4d3a;
  --code-property: #00cecb;
  --code-punctuation: rgb(154, 163, 183);
  --code-radius: 7px;
  --code-string: #7dcf2b;
  --code-tag: #ff4d3a;
  --code-value: #b45af5;
  --collapse-icon-color: rgb(114, 125, 146);
  --collapse-icon-color-collapsed: rgb(0, 168, 160);
  --color-accent: rgb(0, 176, 179);
  --color-accent-1: rgb(0, 168, 160);
  --color-accent-2: hsl(
    183,
    105%,
    39%
  );
  --color-accent-3: rgb(0, 96, 240);
  --color-accent-hsl: 181, 100%, 35%;
  --color-base-00: rgb(28, 32, 38);
  --color-base-10: rgb(30, 34, 42);
  --color-base-100: #c8d4e6;
  --color-base-20: rgb(33, 39, 49);
  --color-base-25: rgb(41, 49, 61);
  --color-base-30: rgb(31, 36, 45);
  --color-base-35: rgb(56, 65, 82);
  --color-base-40: rgb(64, 75, 94);
  --color-base-50: rgb(114, 125, 146);
  --color-base-60: rgb(134, 145, 167);
  --color-base-70: rgb(154, 163, 183);
  --color-blue: #009be3;
  --color-blue-rgb: 0, 155, 227;
  --color-cyan: #00cecb;
  --color-cyan-rgb: 0, 206, 203;
  --color-green: #7dcf2b;
  --color-green-rgb: 125, 207, 43;
  --color-orange: #f69c00;
  --color-orange-rgb: 246, 156, 0;
  --color-pink: #e66ab4;
  --color-pink-rgb: 230, 106, 180;
  --color-purple: #b45af5;
  --color-purple-rgb: 180, 90, 245;
  --color-red: #ff4d3a;
  --color-red-rgb: 255, 77, 58;
  --color-yellow: #e8c900;
  --color-yellow-rgb: 232, 201, 0;
  --custom-code-height: 1em;
  --custom-doc-bg: rgb(0, 168, 160);
  --custom-line-height: 2em;
  --divider-color: rgb(41, 49, 61);
  --divider-color-hover: rgb(0, 176, 179);
  --doc-background: rgb(43, 57, 70);
  --doc-bg: rgb(43, 57, 70);
  --dropdown-background: rgb(31, 36, 45);
  --dropdown-background-hover: rgb(56, 65, 82);
  --embed-block-shadow-hover: 0 0 0 1px rgb(41, 49, 61), inset 0 0 0 1px rgb(41, 49, 61);
  --embed-border-left: none;
  --embed-border-start: 2px solid rgb(0, 176, 179);
  --file-emoji: "Noto Emoji";
  --file-header-background: rgb(28, 32, 38);
  --file-header-background-focused: rgb(28, 32, 38);
  --file-header-font: '??', '??', '??', "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --file-line-width: 900px;
  --flair-background: rgb(31, 36, 45);
  --flair-color: #c8d4e6;
  --folder-1: "📒";
  --folder-1-open: "📖";
  --folder-2: "📑";
  --folder-2-open: "📑";
  --folder-3: "🔖";
  --folder-3-open: "🔖";
  --folder-emoji: "Noto Emoji";
  --folder-icon-size: 1.6em;
  --folder-padding: 4px;
  --font-default: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --font-emoji: "Noto Color Emoji";
  --font-interface: '??', '??', '??', "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --font-main: "Nunito Sans";
  --font-mermaid: '??', '??', "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --font-monospace: "DM Mono", monospace;
  --font-text: '??', '??', "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --footnote-divider-color: rgb(41, 49, 61);
  --footnote-id-color: rgb(154, 163, 183);
  --footnote-id-color-no-occurrences: rgb(114, 125, 146);
  --footnote-radius: 7px;
  --google-font-color-notocoloremoji: colrv1;
  --graph-line: rgb(56, 65, 82);
  --graph-node: rgb(154, 163, 183);
  --graph-node-attachment: #e8c900;
  --graph-node-focused: rgb(0, 168, 160);
  --graph-node-tag: #7dcf2b;
  --graph-node-unresolved: rgb(114, 125, 146);
  --graph-text: #c8d4e6;
  --h1-align: center;
  --h1-color-custom: #00cecb;
  --h1-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --h1-size: 2.2em;
  --h2-color-custom: #009be3;
  --h2-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --h2-size: 1.87em;
  --h2-weight: 700;
  --h3-color-custom: #b45af5;
  --h3-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --h3-size: 1.57em;
  --h3-weight: 700;
  --h4-color-custom: #e66ab4;
  --h4-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --h4-size: 1.35em;
  --h4-weight: 700;
  --h5-color-custom: #ff4d3a;
  --h5-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --h5-size: 1.3em;
  --h5-weight: 700;
  --h6-color-custom: #f69c00;
  --h6-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --h6-size: 1.1em;
  --h6-weight: 700;
  --heading-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --heading-font-2: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --heading-formatting: rgb(114, 125, 146);
  --heading-style: normal;
  --heading-variant: normal;
  --heading-weight: 700;
  --highlight-text: white;
  --hr-color: rgb(41, 49, 61);
  --icon-background: rgb(31, 36, 45);
  --icon-color: rgb(154, 163, 183);
  --icon-color-active: rgb(0, 168, 160);
  --icon-color-focused: #c8d4e6;
  --icon-color-hover: rgb(154, 163, 183);
  --icon-emoji: "Noto Color Emoji";
  --icon-l-stroke-width: 1.3px;
  --icon-m-stroke-width: 1.3px;
  --icon-s-stroke-width: 1.3px;
  --icon-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042) inset, 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042);
  --icon-stroke: 1.3px;
  --img-align: auto;
  --img-bg-size: cover;
  --img-blur: 3px;
  --img-position-x: 50%;
  --img-position-y: 50%;
  --img-sat: 100%;
  --indentation-guide-color: transparent;
  --inline-title-color: #c8d4e6;
  --inline-title-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --inline-title-size: 2.5em;
  --input-date-separator: rgb(114, 125, 146);
  --input-placeholder-color: rgb(114, 125, 146);
  --interactive-accent: rgb(0, 176, 179);
  --interactive-accent-hover: rgb(0, 168, 160);
  --interactive-accent-hsl: 181, 100%, 35%;
  --interactive-hover: rgb(56, 65, 82);
  --interactive-normal: rgb(31, 36, 45);
  --link-color: rgb(0, 168, 160);
  --link-color-hover: hsl(
    183,
    105%,
    39%
  );
  --link-external-color: rgb(0, 168, 160);
  --link-external-color-hover: hsl(
    183,
    105%,
    39%
  );
  --link-unresolved-color: rgb(114, 125, 146);
  --link-unresolved-decoration-color: rgb(56, 65, 82);
  --list-bullet-size: 0.45em;
  --list-marker-color: #00cecb;
  --list-marker-color-collapsed: rgb(0, 168, 160);
  --list-marker-color-hover: #e8c900;
  --menu-background: rgb(33, 39, 49);
  --menu-border-color: rgb(56, 65, 82);
  --menu-radius: 14px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
    0px 15px 30px rgba(0, 0, 0, 0.3);
  --metadata-border-color: rgb(41, 49, 61);
  --metadata-divider-color: rgb(41, 49, 61);
  --metadata-input-font: '??', '??', '??', "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --metadata-input-text-color: #c8d4e6;
  --metadata-label-font: '??', '??', '??', "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --metadata-label-text-color: rgb(154, 163, 183);
  --metadata-label-text-color-hover: rgb(154, 163, 183);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(64, 75, 94);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(56, 65, 82);
  --modal-background: rgb(28, 32, 38);
  --modal-border-color: rgb(64, 75, 94);
  --modal-community-sidebar-width: 25em;
  --modal-height: 100%;
  --modal-max-height: 100;
  --modal-max-width: 100%;
  --modal-max-width-narrow: 75%;
  --modal-radius: 0px;
  --modal-width: 100%;
  --nav-collapse-icon-color: rgb(114, 125, 146);
  --nav-collapse-icon-color-collapsed: rgb(114, 125, 146);
  --nav-heading-color: #c8d4e6;
  --nav-heading-color-collapsed: rgb(114, 125, 146);
  --nav-heading-color-collapsed-hover: rgb(154, 163, 183);
  --nav-heading-color-hover: #c8d4e6;
  --nav-indentation-guide-color: transparent;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-selected: rgba(0, 176, 179, 0.15);
  --nav-item-color: rgb(154, 163, 183);
  --nav-item-color-active: #c8d4e6;
  --nav-item-color-highlighted: rgb(0, 168, 160);
  --nav-item-color-hover: #c8d4e6;
  --nav-item-color-selected: #c8d4e6;
  --nav-item-radius: 7px;
  --nav-tag-color: rgb(114, 125, 146);
  --nav-tag-color-active: rgb(154, 163, 183);
  --nav-tag-color-hover: rgb(154, 163, 183);
  --nav-tag-radius: 7px;
  --normal-folder-1: "📒";
  --normal-folder-1-open: "📖";
  --normal-folder-2: "📑";
  --normal-folder-2-open: "📑";
  --normal-folder-3: "🔖";
  --normal-folder-3-open: "🔖";
  --page-transparency: 100%;
  --panel-child: rgb(30, 34, 42);
  --pdf-background: rgb(28, 32, 38);
  --pdf-page-background: rgb(28, 32, 38);
  --pdf-shadow: 0 0 0 1px rgb(41, 49, 61);
  --pdf-sidebar-background: rgb(28, 32, 38);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(41, 49, 61);
  --pill-border-color: rgb(41, 49, 61);
  --pill-border-color-hover: rgb(56, 65, 82);
  --pill-color: rgb(154, 163, 183);
  --pill-color-hover: #c8d4e6;
  --pill-color-remove: rgb(114, 125, 146);
  --pill-color-remove-hover: rgb(0, 168, 160);
  --prompt-background: rgb(28, 32, 38);
  --prompt-border-color: rgb(64, 75, 94);
  --radius-l: 19px;
  --radius-m: 14px;
  --radius-s: 7px;
  --radius-x: 28px;
  --raised-background: color-mix(in srgb, rgb(31, 36, 45) 65%, transparent) linear-gradient(rgb(31, 36, 45), color-mix(in srgb, rgb(31, 36, 45) 65%, transparent));
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --scrollbar-radius: 19px;
  --search-clear-button-color: rgb(154, 163, 183);
  --search-icon-color: rgb(154, 163, 183);
  --search-result-background: rgb(28, 32, 38);
  --setting-group-heading-color: #c8d4e6;
  --setting-items-background: rgb(30, 34, 42);
  --setting-items-border-color: rgb(41, 49, 61);
  --setting-items-radius: 19px;
  --shadow-color: rgba(0, 0, 0, 0.2);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
    0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179),
    0px 15px 30px rgba(0, 0, 0, 0.3);
  --shadow-ui: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042);
  --slider-thumb-border-color: rgb(56, 65, 82);
  --slider-track-background: rgb(41, 49, 61);
  --slider-track-height: 1.2px;
  --status-bar-background: rgb(33, 39, 49);
  --status-bar-border-color: rgb(41, 49, 61);
  --status-bar-radius: 14px 0 0 0;
  --status-bar-text-color: rgb(154, 163, 183);
  --suggestion-background: rgb(28, 32, 38);
  --sync-avatar-color-1: #ff4d3a;
  --sync-avatar-color-2: #f69c00;
  --sync-avatar-color-3: #e8c900;
  --sync-avatar-color-4: #7dcf2b;
  --sync-avatar-color-5: #00cecb;
  --sync-avatar-color-6: #009be3;
  --sync-avatar-color-7: #b45af5;
  --sync-avatar-color-8: #e66ab4;
  --tab-background-active: rgb(31, 36, 45);
  --tab-container-background: rgb(33, 39, 49);
  --tab-curve: 0px;
  --tab-divider-color: transparent;
  --tab-outline-color: rgb(41, 49, 61);
  --tab-outline-width: 0.8px;
  --tab-radius: 7px;
  --tab-radius-active: 7px;
  --tab-switcher-background: rgb(33, 39, 49);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(33, 39, 49), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 176, 179);
  --tab-text-color: rgb(114, 125, 146);
  --tab-text-color-active: rgb(154, 163, 183);
  --tab-text-color-focused: rgb(154, 163, 183);
  --tab-text-color-focused-active: rgb(154, 163, 183);
  --tab-text-color-focused-active-current: rgb(0, 168, 160);
  --tab-text-color-focused-highlighted: rgb(0, 168, 160);
  --table-add-button-border-color: rgb(41, 49, 61);
  --table-background: rgb(31, 36, 45);
  --table-border-color: rgb(41, 49, 61);
  --table-column-alt-background: rgb(31, 36, 45);
  --table-drag-handle-background-active: rgb(0, 176, 179);
  --table-drag-handle-color: rgb(114, 125, 146);
  --table-header-background: rgb(31, 36, 45);
  --table-header-border-color: rgb(41, 49, 61);
  --table-header-color: #c8d4e6;
  --table-header-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --table-header-weight: normal;
  --table-row-alt-background: rgb(31, 36, 45);
  --table-row-alt-background-hover: rgb(31, 36, 45);
  --table-row-background-hover: rgb(31, 36, 45);
  --table-selection: rgba(0, 176, 179, 0.1);
  --table-selection-border-color: rgb(0, 176, 179);
  --tag-background: rgba(0, 176, 179, 0.1);
  --tag-background-hover: rgba(0, 176, 179, 0.2);
  --tag-border-color: rgba(0, 176, 179, 0.15);
  --tag-border-color-hover: rgba(0, 176, 179, 0.15);
  --tag-color: rgb(0, 168, 160);
  --tag-color-hover: rgb(0, 168, 160);
  --text-accent: rgb(0, 168, 160);
  --text-accent-hover: hsl(
    183,
    105%,
    39%
  );
  --text-error: #ff4d3a;
  --text-faint: rgb(114, 125, 146);
  --text-highlight-bg: rgba(0, 176, 179, 0.475);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: rgb(154, 163, 183);
  --text-normal: #c8d4e6;
  --text-selection: rgba(0, 176, 179, 0.25);
  --text-success: #7dcf2b;
  --text-warning: #f69c00;
  --tile-field-padding: 5px;
  --tile-img-radius: 14px;
  --tile-padding: 8px;
  --tile-radius: 14px;
  --titlebar-background: rgb(33, 39, 49);
  --titlebar-background-focused: rgb(31, 36, 45);
  --titlebar-border-color: rgb(41, 49, 61);
  --titlebar-text-color: rgb(154, 163, 183);
  --titlebar-text-color-focused: #c8d4e6;
  --vault-font: "Noto Emoji";
  --vault-icon: "💎";
  --vault-name-font-size: 1.57em;
  --vault-name-font-weight: 700;
  --vault-profile-color: #c8d4e6;
  --vault-profile-color-hover: #c8d4e6;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 39, 49);
  color: rgb(200, 212, 230);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(28, 32, 38);
  color: rgb(200, 212, 230);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(200, 212, 230);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(41, 49, 61);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 39, 49);
  border-left-color: rgb(41, 49, 61);
  color: rgb(200, 212, 230);
}

body div#quartz-root {
  background-color: rgb(28, 32, 38);
  color: rgb(200, 212, 230);
}`,
    typography: `body .page article p > b, b {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body .page article p > em, em {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body .page article p > i, i {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body .page article p > strong, strong {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body .text-highlight {
  background-color: rgba(0, 176, 179, 0.475);
  color: rgb(255, 255, 255);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration: line-through rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body p {
  color: rgb(154, 163, 183);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(154, 163, 183) none 0px;
  text-decoration: rgb(154, 163, 183);
  text-decoration-color: rgb(154, 163, 183);
}`,
    links: `body a.external, footer a {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration: underline 1.5px rgb(41, 49, 61);
  text-decoration-color: rgb(41, 49, 61);
  text-decoration-thickness: 1.5px;
  transition: 0.25s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 168, 160);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(0, 168, 160) none 0px;
  text-decoration: underline 1.5px rgb(41, 49, 61);
  text-decoration-color: rgb(41, 49, 61);
  text-decoration-thickness: 1.5px;
  transition: 0.25s;
}

body a.internal.broken {
  color: rgb(114, 125, 146);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(114, 125, 146) none 0px;
  text-decoration: underline 1.5px rgb(56, 65, 82);
  text-decoration-color: rgb(56, 65, 82);
  text-decoration-thickness: 1.5px;
  transition: 0.25s;
}`,
    lists: `body dd {
  color: rgb(200, 212, 230);
}

body dt {
  color: rgb(200, 212, 230);
}

body ol > li {
  color: rgb(200, 212, 230);
}

body ol.overflow {
  background-color: rgb(28, 32, 38);
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

body ul > li {
  color: rgb(200, 212, 230);
}

body ul.overflow {
  background-color: rgb(28, 32, 38);
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(114, 125, 146);
  text-decoration: rgb(114, 125, 146);
}

body blockquote {
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

body table {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  margin-left: 218.5px;
  margin-right: 218.5px;
  width: 437px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(31, 36, 45);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(31, 36, 45);
}

body td {
  border-bottom-color: rgb(41, 49, 61);
  border-left-color: rgb(41, 49, 61);
  border-right-color: rgb(41, 49, 61);
  border-top-color: rgb(41, 49, 61);
  color: rgb(200, 212, 230);
}

body th {
  background-color: rgb(33, 39, 49);
  border-bottom-color: rgb(41, 49, 61);
  border-left-color: rgb(41, 49, 61);
  border-right-color: rgb(41, 49, 61);
  border-top-color: rgb(41, 49, 61);
  color: rgb(200, 212, 230);
  font-weight: 400;
}

body tr {
  background-color: rgb(31, 36, 45);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(232, 201, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(232, 201, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(232, 201, 0);
  border-left-color: rgb(232, 201, 0);
  border-right-color: rgb(232, 201, 0);
  border-top-color: rgb(232, 201, 0);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

body figcaption {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body figure {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

body img {
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

body video {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(200, 212, 230);
  color: rgb(200, 212, 230);
}

body .transclude {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(0, 176, 179);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

body .transclude-inner {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(0, 176, 179);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(154, 163, 183);
  text-decoration: rgb(154, 163, 183);
  text-decoration-color: rgb(154, 163, 183);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='*'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='-'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='/'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='>'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='?'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='I'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='S'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='b'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='c'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='d'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='f'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='i'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='k'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='l'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='p'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='u'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body li.task-list-item[data-task='w'] {
  color: rgb(200, 212, 230);
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(0, 155, 227);
  border-left-color: rgb(0, 155, 227);
  border-right-color: rgb(0, 155, 227);
  border-top-color: rgb(0, 155, 227);
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  background-color: rgb(41, 49, 61);
  border-bottom-color: rgb(41, 49, 61);
  border-left-color: rgb(41, 49, 61);
  border-right-color: rgb(41, 49, 61);
  border-top-color: rgb(41, 49, 61);
  color: rgb(200, 212, 230);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(200, 212, 230) none 0px;
  text-decoration: rgb(200, 212, 230);
  text-decoration-color: rgb(200, 212, 230);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(200, 212, 230);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(200, 212, 230);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(200, 212, 230);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(200, 212, 230);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(64, 75, 94);
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  border-left-color: rgb(64, 75, 94);
  border-right-color: rgb(64, 75, 94);
  border-top-color: rgb(64, 75, 94);
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 39, 49);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(200, 212, 230);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 176, 179, 0.1);
  border-bottom-color: rgba(0, 176, 179, 0.15);
  border-left-color: rgba(0, 176, 179, 0.15);
  border-right-color: rgba(0, 176, 179, 0.15);
  border-top-color: rgba(0, 176, 179, 0.15);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 168, 160);
}

body h1 {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body h2 {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body h3 {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body h4 {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body h5 {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body h6 {
  color: rgb(200, 212, 230);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body hr {
  border-bottom-color: rgb(41, 49, 61);
  border-left-color: rgb(41, 49, 61);
  border-right-color: rgb(41, 49, 61);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(28, 32, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 32, 38);
}

body ::-webkit-scrollbar-corner {
  background: rgb(28, 32, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 32, 38);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(28, 32, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 32, 38);
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 32, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 32, 38);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 32, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 32, 38);
}

body ::-webkit-scrollbar-track {
  background: rgb(28, 32, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 32, 38);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(154, 163, 183);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  text-decoration: rgb(154, 163, 183);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(154, 163, 183);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  text-decoration: rgb(154, 163, 183);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(154, 163, 183);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  font-weight: 300;
  text-decoration: rgb(154, 163, 183);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(33, 39, 49);
  border-bottom-color: rgb(41, 49, 61);
  border-left-color: rgb(41, 49, 61);
  border-right-color: rgb(41, 49, 61);
  border-top-color: rgb(41, 49, 61);
  border-top-left-radius: 14px;
  color: rgb(154, 163, 183);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body footer ul li a {
  color: rgb(154, 163, 183);
  text-decoration: rgb(154, 163, 183);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
  color: rgb(200, 212, 230);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(154, 163, 183);
  text-decoration: rgb(154, 163, 183);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(154, 163, 183);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

body li.section-li > .section .meta {
  color: rgb(154, 163, 183);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(154, 163, 183);
  text-decoration: rgb(154, 163, 183);
}

body ul.section-ul {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(154, 163, 183);
  stroke: rgb(154, 163, 183);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(114, 125, 146);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
  color: rgb(200, 212, 230);
}

body .metadata {
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

body .metadata-properties {
  border-bottom-color: rgb(154, 163, 183);
  border-left-color: rgb(154, 163, 183);
  border-right-color: rgb(154, 163, 183);
  border-top-color: rgb(154, 163, 183);
  color: rgb(154, 163, 183);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body .navigation-progress {
  background-color: rgb(33, 39, 49);
}

body .page-header h2.page-title {
  color: rgb(200, 212, 230);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body abbr {
  color: rgb(200, 212, 230);
  text-decoration: underline dotted rgb(200, 212, 230);
}

body details {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

body input[type=text] {
  border-bottom-color: rgb(154, 163, 183);
  border-left-color: rgb(154, 163, 183);
  border-right-color: rgb(154, 163, 183);
  border-top-color: rgb(154, 163, 183);
  color: rgb(154, 163, 183);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(200, 212, 230);
  border-left-color: rgb(200, 212, 230);
  border-right-color: rgb(200, 212, 230);
  border-top-color: rgb(200, 212, 230);
}

body sub {
  color: rgb(200, 212, 230);
}

body summary {
  color: rgb(200, 212, 230);
}

body sup {
  color: rgb(200, 212, 230);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 181;
  --accent-l: 35%;
  --accent-s: 100%;
  --anim-motion-swing: cubic-bezier(0.25, 0.05, 0.55, 0.95);
  --background-modifier-active-hover: rgba(0, 176, 179, 0.1);
  --background-modifier-border: #9f9f9f66;
  --background-modifier-border-focus: #d7d7d7;
  --background-modifier-border-hover: #dedede;
  --background-modifier-error: #c75f54;
  --background-modifier-error-hover: #c75f54;
  --background-modifier-error-rgb: 255, 77, 58;
  --background-modifier-form-field: rgb(255, 255, 255);
  --background-modifier-form-field-hover: rgb(255, 255, 255);
  --background-modifier-success: #8fb26b;
  --background-modifier-success-rgb: 125, 207, 43;
  --background-primary: rgb(255, 255, 255);
  --background-primary-alt: #fdfdfd;
  --background-secondary: rgb(245, 245, 245);
  --bases-cards-background: rgb(255, 255, 255);
  --bases-cards-cover-background: #fdfdfd;
  --bases-cards-radius: 14px;
  --bases-cards-shadow: 0 0 0 1px #9f9f9f66;
  --bases-cards-shadow-hover: 0 0 0 1px #dedede;
  --bases-embed-border-color: #9f9f9f66;
  --bases-embed-border-radius: 7px;
  --bases-group-heading-property-color: #7f7f7f;
  --bases-table-border-color: #9f9f9f66;
  --bases-table-cell-background-active: rgb(255, 255, 255);
  --bases-table-cell-background-disabled: #fdfdfd;
  --bases-table-cell-background-selected: rgba(0, 176, 179, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #d7d7d7;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 168, 160);
  --bases-table-container-border-radius: 7px;
  --bases-table-group-background: #fdfdfd;
  --bases-table-header-background: rgb(255, 255, 255);
  --bases-table-header-color: #7f7f7f;
  --bases-table-row-background-hover: #fcfcfc;
  --bases-table-summary-background: rgb(255, 255, 255);
  --blockquote-border-color: rgb(0, 168, 160);
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --button-background: hsl(
    183,
    105%,
    39%
  );
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
  --canvas-background: rgb(255, 255, 255);
  --canvas-card-label-color: #878787;
  --canvas-color-1: 255, 77, 58;
  --canvas-color-2: 246, 156, 0;
  --canvas-color-3: 232, 201, 0;
  --canvas-color-4: 125, 207, 43;
  --canvas-color-5: 0, 206, 203;
  --canvas-color-6: 180, 90, 245;
  --canvas-controls-icon-stroke: 1.3px;
  --canvas-controls-radius: 7px;
  --canvas-dot-pattern: #9f9f9f66;
  --caret-color: #252525;
  --checkbox-border-color: #c75f54;
  --checkbox-border-color-hover: #7f7f7f;
  --checkbox-color: transparent;
  --checkbox-color-hover: hsl(
    183,
    105%,
    39%
  );
  --checkbox-marker-color: rgb(255, 255, 255);
  --checkbox-radius: 14px;
  --checkbox-size: 18px;
  --checklist-done-color: #7f7f7f;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 7px;
  --code-background: #fdfdfd;
  --code-border-color: #9f9f9f66;
  --code-comment: #878787;
  --code-function: #dca931;
  --code-important: #d08344;
  --code-keyword: #ac7aaa;
  --code-normal: #252525;
  --code-operator: #c75f54;
  --code-property: #49a7ba;
  --code-punctuation: #7f7f7f;
  --code-radius: 7px;
  --code-string: #8fb26b;
  --code-tag: #c75f54;
  --code-value: #8076ad;
  --collapse-icon-color: #878787;
  --collapse-icon-color-collapsed: rgb(0, 176, 179);
  --color-accent: rgb(0, 176, 179);
  --color-accent-1: rgb(0, 168, 160);
  --color-accent-2: hsl(
    183,
    105%,
    39%
  );
  --color-accent-3: rgb(0, 96, 240);
  --color-accent-hsl: 181, 100%, 35%;
  --color-base-00: rgb(255, 255, 255);
  --color-base-10: #fdfdfd;
  --color-base-100: #252525;
  --color-base-20: rgb(245, 245, 245);
  --color-base-25: #efefef;
  --color-base-30: #9f9f9f66;
  --color-base-35: #dedede;
  --color-base-40: #d7d7d7;
  --color-base-50: #878787;
  --color-base-60: #939393;
  --color-base-70: #7f7f7f;
  --color-blue: #4e8aa6;
  --color-blue-rgb: 0, 155, 227;
  --color-cyan: #49a7ba;
  --color-cyan-rgb: 0, 206, 203;
  --color-green: #8fb26b;
  --color-green-rgb: 125, 207, 43;
  --color-orange: #d08344;
  --color-orange-rgb: 246, 156, 0;
  --color-pink: #ac7aaa;
  --color-pink-rgb: 230, 106, 180;
  --color-purple: #8076ad;
  --color-purple-rgb: 180, 90, 245;
  --color-red: #c75f54;
  --color-red-rgb: 255, 77, 58;
  --color-yellow: #dca931;
  --color-yellow-rgb: 232, 201, 0;
  --custom-code-height: 1em;
  --custom-doc-bg: rgb(0, 168, 160);
  --custom-line-height: 2em;
  --divider-color: #9f9f9f66;
  --divider-color-hover: rgb(0, 168, 160);
  --doc-background: rgb(240, 245, 245);
  --doc-bg: rgb(240, 245, 245);
  --dropdown-background: rgb(255, 255, 255);
  --dropdown-background-hover: #fdfdfd;
  --embed-block-shadow-hover: 0 0 0 1px #9f9f9f66, inset 0 0 0 1px #9f9f9f66;
  --embed-border-left: none;
  --embed-border-start: 2px solid rgb(0, 168, 160);
  --file-emoji: "Noto Emoji";
  --file-header-background: rgb(255, 255, 255);
  --file-header-background-focused: rgb(255, 255, 255);
  --file-header-font: '??', '??', '??', "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --file-line-width: 900px;
  --flair-background: rgb(255, 255, 255);
  --flair-color: #252525;
  --folder-1: "📒";
  --folder-1-open: "📖";
  --folder-2: "📑";
  --folder-2-open: "📑";
  --folder-3: "🔖";
  --folder-3-open: "🔖";
  --folder-emoji: "Noto Emoji";
  --folder-icon-size: 1.6em;
  --folder-padding: 4px;
  --font-default: "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --font-emoji: "Noto Color Emoji";
  --font-interface: '??', '??', '??', "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --font-main: "Nunito Sans";
  --font-mermaid: '??', '??', "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --font-monospace: "DM Mono", monospace;
  --font-text: '??', '??', "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --footnote-divider-color: #9f9f9f66;
  --footnote-id-color: #7f7f7f;
  --footnote-id-color-no-occurrences: #878787;
  --footnote-radius: 7px;
  --google-font-color-notocoloremoji: colrv1;
  --graph-line: #dedede;
  --graph-node: #7f7f7f;
  --graph-node-attachment: #dca931;
  --graph-node-focused: rgb(0, 176, 179);
  --graph-node-tag: #8fb26b;
  --graph-node-unresolved: #878787;
  --graph-text: #252525;
  --h1-align: center;
  --h1-color-custom: #49a7ba;
  --h1-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --h1-size: 2.2em;
  --h2-color-custom: #4e8aa6;
  --h2-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --h2-size: 1.87em;
  --h2-weight: 700;
  --h3-color-custom: #8076ad;
  --h3-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --h3-size: 1.57em;
  --h3-weight: 700;
  --h4-color-custom: #ac7aaa;
  --h4-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --h4-size: 1.35em;
  --h4-weight: 700;
  --h5-color-custom: #c75f54;
  --h5-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --h5-size: 1.3em;
  --h5-weight: 700;
  --h6-color-custom: #d08344;
  --h6-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --h6-size: 1.1em;
  --h6-weight: 700;
  --heading-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --heading-font-2: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --heading-formatting: #878787;
  --heading-style: normal;
  --heading-variant: normal;
  --heading-weight: 700;
  --highlight-text: #252525;
  --hr-color: #9f9f9f66;
  --icon-background: #fcfcfc;
  --icon-color: #7f7f7f;
  --icon-color-active: rgb(0, 176, 179);
  --icon-color-focused: #252525;
  --icon-color-hover: #7f7f7f;
  --icon-emoji: "Noto Color Emoji";
  --icon-l-stroke-width: 1.3px;
  --icon-m-stroke-width: 1.3px;
  --icon-s-stroke-width: 1.3px;
  --icon-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042) inset, 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042);
  --icon-stroke: 1.3px;
  --img-align: auto;
  --img-bg-size: cover;
  --img-blur: 3px;
  --img-position-x: 50%;
  --img-position-y: 50%;
  --img-sat: 100%;
  --indentation-guide-color: transparent;
  --inline-title-color: #252525;
  --inline-title-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --inline-title-size: 2.5em;
  --input-date-separator: #878787;
  --input-placeholder-color: #878787;
  --interactive-accent: rgb(0, 168, 160);
  --interactive-accent-hover: hsl(
    183,
    105%,
    39%
  );
  --interactive-accent-hsl: 181, 100%, 35%;
  --interactive-hover: #fdfdfd;
  --interactive-normal: rgb(255, 255, 255);
  --link-color: rgb(0, 176, 179);
  --link-color-hover: hsl(
    183,
    105%,
    39%
  );
  --link-external-color: rgb(0, 176, 179);
  --link-external-color-hover: hsl(
    183,
    105%,
    39%
  );
  --link-unresolved-color: #878787;
  --link-unresolved-decoration-color: #dedede;
  --list-bullet-size: 0.45em;
  --list-marker-color: #49a7ba;
  --list-marker-color-collapsed: rgb(0, 176, 179);
  --list-marker-color-hover: #dca931;
  --menu-background: rgb(245, 245, 245);
  --menu-border-color: #dedede;
  --menu-radius: 14px;
  --metadata-border-color: #9f9f9f66;
  --metadata-divider-color: #9f9f9f66;
  --metadata-input-font: '??', '??', '??', "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --metadata-input-text-color: #252525;
  --metadata-label-font: '??', '??', '??', "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --metadata-label-text-color: #7f7f7f;
  --metadata-label-text-color-hover: #7f7f7f;
  --metadata-property-box-shadow-focus: 0 0 0 2px #d7d7d7;
  --metadata-property-box-shadow-hover: 0 0 0 1px #dedede;
  --modal-background: rgb(255, 255, 255);
  --modal-border-color: #d7d7d7;
  --modal-community-sidebar-width: 25em;
  --modal-height: 100%;
  --modal-max-height: 100;
  --modal-max-width: 100%;
  --modal-max-width-narrow: 75%;
  --modal-radius: 0px;
  --modal-width: 100%;
  --nav-collapse-icon-color: #878787;
  --nav-collapse-icon-color-collapsed: #878787;
  --nav-heading-color: #252525;
  --nav-heading-color-collapsed: #878787;
  --nav-heading-color-collapsed-hover: #7f7f7f;
  --nav-heading-color-hover: #252525;
  --nav-indentation-guide-color: transparent;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-selected: rgba(0, 176, 179, 0.15);
  --nav-item-color: #7f7f7f;
  --nav-item-color-active: #252525;
  --nav-item-color-highlighted: rgb(0, 176, 179);
  --nav-item-color-hover: #252525;
  --nav-item-color-selected: #252525;
  --nav-item-radius: 7px;
  --nav-tag-color: #878787;
  --nav-tag-color-active: #7f7f7f;
  --nav-tag-color-hover: #7f7f7f;
  --nav-tag-radius: 7px;
  --normal-folder-1: "📒";
  --normal-folder-1-open: "📖";
  --normal-folder-2: "📑";
  --normal-folder-2-open: "📑";
  --normal-folder-3: "🔖";
  --normal-folder-3-open: "🔖";
  --page-transparency: 100%;
  --panel-child: #fdfdfd;
  --pdf-background: rgb(255, 255, 255);
  --pdf-page-background: rgb(255, 255, 255);
  --pdf-sidebar-background: rgb(255, 255, 255);
  --pill-border-color: #9f9f9f66;
  --pill-border-color-hover: #dedede;
  --pill-color: #7f7f7f;
  --pill-color-hover: #252525;
  --pill-color-remove: #878787;
  --pill-color-remove-hover: rgb(0, 176, 179);
  --prompt-background: rgb(255, 255, 255);
  --prompt-border-color: #d7d7d7;
  --radius-l: 19px;
  --radius-m: 14px;
  --radius-s: 7px;
  --radius-x: 28px;
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --scrollbar-radius: 19px;
  --search-clear-button-color: #7f7f7f;
  --search-icon-color: #7f7f7f;
  --search-result-background: rgb(255, 255, 255);
  --setting-group-heading-color: #252525;
  --setting-items-background: #fdfdfd;
  --setting-items-border-color: #9f9f9f66;
  --setting-items-radius: 19px;
  --shadow-color: rgb(245, 245, 245);
  --shadow-ui: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042);
  --slider-thumb-border-color: #dedede;
  --slider-track-background: #9f9f9f66;
  --slider-track-height: 1.2px;
  --status-bar-background: rgb(245, 245, 245);
  --status-bar-border-color: #9f9f9f66;
  --status-bar-radius: 14px 0 0 0;
  --status-bar-text-color: #7f7f7f;
  --suggestion-background: rgb(255, 255, 255);
  --sync-avatar-color-1: #c75f54;
  --sync-avatar-color-2: #d08344;
  --sync-avatar-color-3: #dca931;
  --sync-avatar-color-4: #8fb26b;
  --sync-avatar-color-5: #49a7ba;
  --sync-avatar-color-6: #4e8aa6;
  --sync-avatar-color-7: #8076ad;
  --sync-avatar-color-8: #ac7aaa;
  --tab-background-active: #fcfcfc;
  --tab-container-background: rgb(245, 245, 245);
  --tab-curve: 0px;
  --tab-divider-color: transparent;
  --tab-outline-color: #9f9f9f66;
  --tab-outline-width: 0.8px;
  --tab-radius: 7px;
  --tab-radius-active: 7px;
  --tab-switcher-background: rgb(245, 245, 245);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(245, 245, 245), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 176, 179);
  --tab-text-color: #878787;
  --tab-text-color-active: #7f7f7f;
  --tab-text-color-focused: #7f7f7f;
  --tab-text-color-focused-active: #7f7f7f;
  --tab-text-color-focused-active-current: rgb(0, 168, 160);
  --tab-text-color-focused-highlighted: rgb(0, 176, 179);
  --table-add-button-border-color: #9f9f9f66;
  --table-background: #fcfcfc;
  --table-border-color: #9f9f9f66;
  --table-column-alt-background: #fcfcfc;
  --table-drag-handle-background-active: rgb(0, 168, 160);
  --table-drag-handle-color: #878787;
  --table-header-background: #fcfcfc;
  --table-header-border-color: #9f9f9f66;
  --table-header-color: #252525;
  --table-header-font: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  --table-header-weight: normal;
  --table-row-alt-background: #fcfcfc;
  --table-row-alt-background-hover: #fcfcfc;
  --table-row-background-hover: #fcfcfc;
  --table-selection: rgba(0, 176, 179, 0.1);
  --table-selection-border-color: rgb(0, 168, 160);
  --tag-background: rgba(0, 176, 179, 0.1);
  --tag-background-hover: rgba(0, 176, 179, 0.2);
  --tag-border-color: rgba(0, 176, 179, 0.15);
  --tag-border-color-hover: rgba(0, 176, 179, 0.15);
  --tag-color: rgb(0, 176, 179);
  --tag-color-hover: rgb(0, 176, 179);
  --text-accent: rgb(0, 176, 179);
  --text-accent-hover: hsl(
    183,
    105%,
    39%
  );
  --text-error: #c75f54;
  --text-faint: #878787;
  --text-highlight-bg: rgba(255, 200, 0, 0.459);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: #7f7f7f;
  --text-normal: #252525;
  --text-selection: rgba(0, 176, 179, 0.2);
  --text-success: #8fb26b;
  --text-warning: #d08344;
  --tile-field-padding: 5px;
  --tile-img-radius: 14px;
  --tile-padding: 8px;
  --tile-radius: 14px;
  --titlebar-background: rgb(245, 245, 245);
  --titlebar-border-color: #9f9f9f66;
  --titlebar-text-color: #7f7f7f;
  --titlebar-text-color-focused: #252525;
  --vault-font: "Noto Emoji";
  --vault-icon: "💎";
  --vault-name-font-size: 1.57em;
  --vault-name-font-weight: 700;
  --vault-profile-color: #252525;
  --vault-profile-color-hover: #252525;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(37, 37, 37);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(37, 37, 37);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(37, 37, 37);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(159, 159, 159, 0.4);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  border-left-color: rgba(159, 159, 159, 0.4);
  color: rgb(37, 37, 37);
}

body div#quartz-root {
  color: rgb(37, 37, 37);
}`,
    typography: `body .page article p > b, b {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body .page article p > em, em {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body .page article p > i, i {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body .page article p > strong, strong {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body .text-highlight {
  background-color: rgba(255, 200, 0, 0.46);
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body del {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration: line-through rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body p {
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(127, 127, 127) none 0px;
  text-decoration: rgb(127, 127, 127);
  text-decoration-color: rgb(127, 127, 127);
}`,
    links: `body a.external, footer a {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration: underline 1.5px rgba(159, 159, 159, 0.4);
  text-decoration-color: rgba(159, 159, 159, 0.4);
  text-decoration-thickness: 1.5px;
  transition: 0.25s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 176, 179);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(0, 176, 179) none 0px;
  text-decoration: underline 1.5px rgba(159, 159, 159, 0.4);
  text-decoration-color: rgba(159, 159, 159, 0.4);
  text-decoration-thickness: 1.5px;
  transition: 0.25s;
}

body a.internal.broken {
  color: rgb(135, 135, 135);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(135, 135, 135) none 0px;
  text-decoration: underline 1.5px rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
  text-decoration-thickness: 1.5px;
  transition: 0.25s;
}`,
    lists: `body dd {
  color: rgb(37, 37, 37);
}

body dt {
  color: rgb(37, 37, 37);
}

body ol > li {
  color: rgb(37, 37, 37);
}

body ol.overflow {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

body ul > li {
  color: rgb(37, 37, 37);
}

body ul.overflow {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(135, 135, 135);
  text-decoration: rgb(135, 135, 135);
}

body blockquote {
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

body table {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  margin-left: 218.5px;
  margin-right: 218.5px;
  width: 437px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(252, 252, 252);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(252, 252, 252);
}

body td {
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-left-color: rgba(159, 159, 159, 0.4);
  border-right-color: rgba(159, 159, 159, 0.4);
  border-top-color: rgba(159, 159, 159, 0.4);
  color: rgb(37, 37, 37);
}

body th {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-left-color: rgba(159, 159, 159, 0.4);
  border-right-color: rgba(159, 159, 159, 0.4);
  border-top-color: rgba(159, 159, 159, 0.4);
  color: rgb(37, 37, 37);
  font-weight: 400;
}

body tr {
  background-color: rgb(252, 252, 252);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(220, 169, 49);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 169, 49);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 169, 49);
  border-left-color: rgb(220, 169, 49);
  border-right-color: rgb(220, 169, 49);
  border-top-color: rgb(220, 169, 49);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

body figcaption {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body figure {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

body img {
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

body video {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(37, 37, 37);
  color: rgb(37, 37, 37);
}

body .transclude {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(0, 168, 160);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

body .transclude-inner {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(0, 168, 160);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(127, 127, 127);
  text-decoration: rgb(127, 127, 127);
  text-decoration-color: rgb(127, 127, 127);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='*'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='-'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='/'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='>'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='?'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='I'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='S'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='b'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='c'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='d'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='f'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='i'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='k'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='l'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='p'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='u'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body li.task-list-item[data-task='w'] {
  color: rgb(37, 37, 37);
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(0, 155, 227);
  border-left-color: rgb(0, 155, 227);
  border-right-color: rgb(0, 155, 227);
  border-top-color: rgb(0, 155, 227);
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-left-color: rgba(159, 159, 159, 0.4);
  border-right-color: rgba(159, 159, 159, 0.4);
  border-top-color: rgba(159, 159, 159, 0.4);
  color: rgb(37, 37, 37);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(215, 215, 215);
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  border-left-color: rgb(215, 215, 215);
  border-right-color: rgb(215, 215, 215);
  border-top-color: rgb(215, 215, 215);
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
}

body .search > .search-container > .search-space > * {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  outline: rgb(37, 37, 37) none 0px;
  text-decoration: rgb(37, 37, 37);
  text-decoration-color: rgb(37, 37, 37);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(37, 37, 37);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(37, 37, 37);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(37, 37, 37);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(37, 37, 37);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(215, 215, 215);
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  border-left-color: rgb(215, 215, 215);
  border-right-color: rgb(215, 215, 215);
  border-top-color: rgb(215, 215, 215);
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(37, 37, 37);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 176, 179, 0.1);
  border-bottom-color: rgba(0, 176, 179, 0.15);
  border-left-color: rgba(0, 176, 179, 0.15);
  border-right-color: rgba(0, 176, 179, 0.15);
  border-top-color: rgba(0, 176, 179, 0.15);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 176, 179);
}

body h1 {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body h2 {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body h3 {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body h4 {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body h5 {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body h6 {
  color: rgb(37, 37, 37);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body hr {
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-left-color: rgba(159, 159, 159, 0.4);
  border-right-color: rgba(159, 159, 159, 0.4);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(127, 127, 127);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  text-decoration: rgb(127, 127, 127);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(127, 127, 127);
  font-family: "Merriweather Sans", "Book Antiqua", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif, "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  text-decoration: rgb(127, 127, 127);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
  font-weight: 300;
  text-decoration: rgb(127, 127, 127);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgba(159, 159, 159, 0.4);
  border-left-color: rgba(159, 159, 159, 0.4);
  border-right-color: rgba(159, 159, 159, 0.4);
  border-top-color: rgba(159, 159, 159, 0.4);
  border-top-left-radius: 14px;
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body footer ul li a {
  color: rgb(127, 127, 127);
  text-decoration: rgb(127, 127, 127);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
  color: rgb(37, 37, 37);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(127, 127, 127);
  text-decoration: rgb(127, 127, 127);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

body li.section-li > .section .meta {
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(127, 127, 127);
  text-decoration: rgb(127, 127, 127);
}

body ul.section-ul {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(127, 127, 127);
  stroke: rgb(127, 127, 127);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(135, 135, 135);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
  color: rgb(37, 37, 37);
}

body .metadata {
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

body .metadata-properties {
  border-bottom-color: rgb(127, 127, 127);
  border-left-color: rgb(127, 127, 127);
  border-right-color: rgb(127, 127, 127);
  border-top-color: rgb(127, 127, 127);
  color: rgb(127, 127, 127);
  font-family: "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body .navigation-progress {
  background-color: rgb(245, 245, 245);
}

body .page-header h2.page-title {
  color: rgb(37, 37, 37);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body abbr {
  color: rgb(37, 37, 37);
  text-decoration: underline dotted rgb(37, 37, 37);
}

body details {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

body input[type=text] {
  border-bottom-color: rgb(127, 127, 127);
  border-left-color: rgb(127, 127, 127);
  border-right-color: rgb(127, 127, 127);
  border-top-color: rgb(127, 127, 127);
  color: rgb(127, 127, 127);
  font-family: "??", "??", "??", "Nunito Sans", "Noto Color Emoji", Inter, sans-serif;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(37, 37, 37);
  border-left-color: rgb(37, 37, 37);
  border-right-color: rgb(37, 37, 37);
  border-top-color: rgb(37, 37, 37);
}

body sub {
  color: rgb(37, 37, 37);
}

body summary {
  color: rgb(37, 37, 37);
}

body sup {
  color: rgb(37, 37, 37);
}`,
  },
};
