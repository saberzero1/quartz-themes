import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "shiba-inu",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "shiba-theme-settings",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: var(--lily, 235, 188, 186);
  --background-modifier-active-hover: rgba(var(--accent), 0.15);
  --background-modifier-border: rgb(var(--surface0));
  --background-modifier-border-focus: rgb(var(--surface2));
  --background-modifier-border-hover: rgb(var(--surface1));
  --background-modifier-cover: rgba(var(--side), 0.4);
  --background-modifier-error: rgba(var(--red), 1);
  --background-modifier-error-hover: rgba(var(--red), 0.9);
  --background-modifier-error-rgb: var(--red, 255, 98, 107);
  --background-modifier-form-field: rgba(var(--exterior), 0.3);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgba(36, 39, 52, 0.3));
  --background-modifier-hover: rgba(var(--text), 0.075);
  --background-modifier-message: rgba(var(--exterior), 0.9);
  --background-modifier-success: rgba(var(--green), 1);
  --background-modifier-success-hover: rgba(var(--green), 0.9);
  --background-modifier-success-rgb: var(--green, 56, 198, 141);
  --background-primary: rgb(var(--base));
  --background-primary-alt: rgb(var(--side));
  --background-secondary: rgb(var(--side));
  --background-secondary-alt: rgb(var(--exterior));
  --background-secondary-translucent: rgba(var(--base), 0.1);
  --background-secondary-translucent-1: rgba(var(--base), 0.1);
  --base: 42, 45, 61;
  --bases-cards-background: var(--background-primary, rgb(42, 45, 61));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(38, 42, 58));
  --bases-embed-border-color: var(--background-modifier-border, rgb(65, 69, 89));
  --bases-group-heading-property-color: var(--text-muted, rgb(148, 155, 183));
  --bases-table-border-color: var(--table-border-color, rgb(65, 69, 89));
  --bases-table-cell-background-active: var(--background-primary, rgb(42, 45, 61));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(38, 42, 58));
  --bases-table-group-background: var(--background-primary-alt, rgb(38, 42, 58));
  --bases-table-header-background: var(--background-primary, rgb(42, 45, 61));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(198, 206, 239, 0.075));
  --bases-table-header-color: var(--text-muted, rgb(148, 155, 183));
  --bases-table-summary-background: var(--background-primary, rgb(42, 45, 61));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(198, 206, 239, 0.075));
  --bg-color-settings-0: #07070747;
  --bg-color-settings-0-1: #ffffff00;
  --bg-color-settings-1: rgba(var(--base), 0.15);
  --bg-color-settings-2: rgba(var(--base), 0.3);
  --bg-color-settings-3: rgba(var(--base), 0.8);
  --bg-color-settings-4: rgba(var(--base), 0.7);
  --bg-color-settings-5: #424242aa;
  --bg-color-settings-6: #191919c7;
  --blockquote-background-color: rgba(var(--exterior), 0.5);
  --blockquote-border-color: rgb(var(--accent));
  --blue: 147, 183, 245;
  --blur-depth: 10px;
  --blur-depth-cp: 10px;
  --bodyFont: var(--font-text-theme, var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif));
  --bold-color: rgb(var(--shib-bold-color, var(--red)));
  --callout-blend-mode: var(--highlight-mix-blend-mode, none);
  --callout-bug: var(--color-red-rgb, 255, 98, 107);
  --callout-content-padding: var(--size-4-2) var(--size-4-4, 0);
  --callout-default: var(--color-blue-rgb, 147, 183, 245);
  --callout-error: var(--color-red-rgb, 255, 98, 107);
  --callout-example: var(--color-purple-rgb, 196, 167, 231);
  --callout-fail: var(--color-red-rgb, 255, 98, 107);
  --callout-gallery-gap: 5px;
  --callout-important: var(--color-cyan-rgb, 104, 188, 204);
  --callout-info: var(--color-blue-rgb, 147, 183, 245);
  --callout-question: var(--color-orange-rgb, 247, 157, 124);
  --callout-success: var(--color-green-rgb, 56, 198, 141);
  --callout-summary: var(--color-cyan-rgb, 104, 188, 204);
  --callout-tip: var(--color-cyan-rgb, 104, 188, 204);
  --callout-title-padding: var(--size-4-4) var(--size-4-4, 8px);
  --callout-todo: var(--color-blue-rgb, 147, 183, 245);
  --callout-warning: var(--color-orange-rgb, 247, 157, 124);
  --canvas-background: var(--background-primary, rgb(42, 45, 61));
  --canvas-card-label-color: var(--text-faint, rgb(165, 172, 201));
  --canvas-color: var(--overlay0, 115, 120, 145);
  --canvas-color-1: var(--color-red-rgb, 255, 98, 107);
  --canvas-color-2: var(--color-orange-rgb, 247, 157, 124);
  --canvas-color-3: var(--color-yellow-rgb, 249, 226, 175);
  --canvas-color-4: var(--color-green-rgb, 56, 198, 141);
  --canvas-color-5: var(--color-cyan-rgb, 104, 188, 204);
  --canvas-color-6: var(--color-purple-rgb, 196, 167, 231);
  --canvas-dot-pattern: var(--color-base-30, rgb(81, 86, 108));
  --card-background-color: rgb(var(--exterior));
  --card-foreground-color: var(--background-primary, rgb(42, 45, 61));
  --cards-aspect-ratio: auto;
  --cards-background: rgb(var(--side));
  --cards-background-modifier-border: rgb(var(--surface0));
  --cards-border-width: 1px;
  --cards-columns: repeat;
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: var(--text-normal, rgb(198, 206, 239));
  --checkbox-border-color: var(--text-faint, rgb(165, 172, 201));
  --checkbox-border-color-hover: var(--text-muted, rgb(148, 155, 183));
  --checkbox-color: var(--interactive-accent, rgb(235, 188, 186));
  --checkbox-color-hover: var(--interactive-accent-hover, rgb(235, 188, 186));
  --checkbox-marker-color: var(--background-primary, rgb(42, 45, 61));
  --checklist-done-color: var(--text-muted, rgb(148, 155, 183));
  --code-background: var(--background-primary-alt, rgb(38, 42, 58));
  --code-border-color: var(--background-modifier-border, rgb(65, 69, 89));
  --code-bracket-background: var(--background-modifier-hover, rgba(198, 206, 239, 0.075));
  --code-comment: var(--text-faint, rgb(165, 172, 201));
  --code-function: var(--color-yellow, rgb(249, 226, 175));
  --code-important: var(--color-orange, rgb(247, 157, 124));
  --code-keyword: var(--color-pink, rgb(243, 137, 143));
  --code-normal: var(--text-normal, rgb(198, 206, 239));
  --code-operator: var(--color-red, rgb(255, 98, 107));
  --code-property: var(--color-cyan, rgb(104, 188, 204));
  --code-punctuation: var(--text-muted, rgb(148, 155, 183));
  --code-string: var(--color-green, rgb(56, 198, 141));
  --code-tag: var(--color-red, rgb(255, 98, 107));
  --code-value: var(--color-purple, rgb(196, 167, 231));
  --collapse-icon-color: var(--text-faint, rgb(165, 172, 201));
  --collapse-icon-color-collapsed: var(--text-accent, rgb(235, 188, 186));
  --color-accent: rgb(var(--accent));
  --color-accent-1: rgb(var(--accent));
  --color-accent-2: rgba(var(--accent), 0.9);
  --color-accent-translucent-001: hsla(var(--interactive-accent-hsl), 0.01);
  --color-accent-translucent-005: hsla(var(--interactive-accent-hsl), 0.05);
  --color-accent-translucent-01: hsla(var(--interactive-accent-hsl), 0.1);
  --color-accent-translucent-015: hsla(var(--interactive-accent-hsl), 0.15);
  --color-accent-translucent-02: hsla(var(--interactive-accent-hsl), 0.2);
  --color-accent-translucent-04: hsla(var(--interactive-accent-hsl), 0.4);
  --color-accent-translucent-06: hsla(var(--interactive-accent-hsl), 0.6);
  --color-base-00: rgb(var(--exterior));
  --color-base-10: rgb(var(--side));
  --color-base-100: rgb(var(--text));
  --color-base-20: rgb(var(--base));
  --color-base-25: rgb(var(--surface0));
  --color-base-30: rgb(var(--surface1));
  --color-base-35: rgb(var(--surface2));
  --color-base-40: rgb(var(--overlay0));
  --color-base-50: rgb(var(--overlay1));
  --color-base-60: rgb(var(--overlay2));
  --color-base-70: rgb(var(--subtext0));
  --color-black: hsl(27, 15%, 12%);
  --color-blue: rgb(var(--blue));
  --color-blue-rgb: var(--blue, 147, 183, 245);
  --color-cyan: rgb(var(--sea));
  --color-cyan-rgb: var(--sea, 104, 188, 204);
  --color-green: rgb(var(--green));
  --color-green-rgb: var(--green, 56, 198, 141);
  --color-lightorange: rgb(var(--lemon));
  --color-lightorange-rgb: var(--lemon, 246, 193, 119);
  --color-lightpink: rgb(var(--lily));
  --color-lightpink-rgb: var(--lily, 235, 188, 186);
  --color-orange: rgb(var(--orange));
  --color-orange-rgb: var(--orange, 247, 157, 124);
  --color-pink: rgb(var(--rose));
  --color-pink-rgb: var(--rose, 243, 137, 143);
  --color-purple: rgb(var(--violet));
  --color-purple-rgb: var(--violet, 196, 167, 231);
  --color-red: rgb(var(--red));
  --color-red-rgb: var(--red, 255, 98, 107);
  --color-white: hsl(36, 36%, 96.9%);
  --color-yellow: rgb(var(--yellow));
  --color-yellow-rgb: var(--yellow, 249, 226, 175);
  --cyan: 137, 199, 223;
  --dark: var(--text-normal, rgb(var(--text)));
  --darkgray: var(--text-normal, rgb(var(--text)));
  --divider-color: var(--background-modifier-border, rgb(65, 69, 89));
  --divider-color-hover: var(--interactive-accent, rgb(235, 188, 186));
  --dropdown-background: var(--interactive-normal, rgb(65, 69, 89));
  --dropdown-background-hover: var(--interactive-hover, rgb(81, 86, 108));
  --exterior: 36, 39, 52;
  --external-link-color: rgba(var(--accent), 0.8);
  --file-header-background: var(--background-primary, rgb(42, 45, 61));
  --file-header-background-focused: var(--background-primary, rgb(42, 45, 61));
  --flair-background: var(--interactive-normal, rgb(65, 69, 89));
  --flair-color: var(--text-normal, rgb(198, 206, 239));
  --font-family-folder-file-title: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-family-inline-code: var(--font-monospace-theme, monospace);
  --font-family-tag: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-family-vault: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-family-vertical-bar: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-mermaid: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: monospace;
  --font-size-code: 1em;
  --font-size-file-header-title: 0.93em;
  --font-size-folder-and-file: 0.95em;
  --font-size-vault-name: 0.95em;
  --font-text-theme: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --footnote-divider-color: var(--metadata-divider-color, rgb(65, 69, 89));
  --footnote-id-color: var(--text-muted, rgb(148, 155, 183));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(165, 172, 201));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(198, 206, 239, 0.075));
  --graph-arrow: rgb(var(--rose));
  --graph-circle-fill: rgb(var(--blue));
  --graph-circle-fill-highlight: rgb(var(--blue));
  --graph-circle-fill-unresolved: #ffa6e5;
  --graph-circle-outline: rgb(var(--rose));
  --graph-fill-attachment: rgb(var(--blue));
  --graph-fill-tag: rgb(var(--orange));
  --graph-line: var(--background-modifier-border, rgb(65, 69, 89));
  --graph-line-highlight: var(--interactive-accent, rgb(235, 188, 186));
  --graph-node: var(--text-muted, rgb(148, 155, 183));
  --graph-node-attachment: var(--color-yellow, rgb(249, 226, 175));
  --graph-node-focused: var(--text-accent, rgb(235, 188, 186));
  --graph-node-tag: var(--color-green, rgb(56, 198, 141));
  --graph-node-unresolved: var(--text-faint, rgb(165, 172, 201));
  --graph-text: var(--text-normal, rgb(198, 206, 239));
  --gray: var(--text-muted, rgb(var(--overlay2)));
  --green: 56, 198, 141;
  --h1-color: rgb(var(--red));
  --h1-font: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h2-color: rgb(var(--lily));
  --h2-font: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h3-color: rgb(var(--sea));
  --h3-font: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h4-color: rgb(var(--cyan));
  --h4-font: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h5-color: rgb(var(--blue));
  --h5-font: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h6-color: rgb(var(--turquoise));
  --h6-font: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --header-height: var(--shib-alt-tab-custom-height, 40px);
  --headerFont: var(--font-text-theme, var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif));
  --heading-formatting: rgb(var(--accent));
  --highlight: var(--text-highlight-bg, rgba(var(--orange), 0.2));
  --highlight-mix-blend-mode: none;
  --hr-color: var(--background-modifier-border, rgb(65, 69, 89));
  --hr-outline-color: var(--background-modifier-border, rgb(65, 69, 89));
  --icon-color: var(--text-muted, rgb(148, 155, 183));
  --icon-color-active: var(--text-accent, rgb(235, 188, 186));
  --icon-color-focused: var(--color-accent, rgb(235, 188, 186));
  --icon-color-hover: var(--text-muted, rgb(148, 155, 183));
  --img-border-radius: 15px;
  --img-max-height: 300px;
  --img-max-height-list: 270px;
  --img-max-width: 350px;
  --img-max-width-list: 300px;
  --inline-title-color: var(--h1-color, rgb(255, 98, 107));
  --inline-title-font: var(--h1-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --input-date-separator: var(--text-faint, rgb(165, 172, 201));
  --input-placeholder-color: var(--text-faint, rgb(165, 172, 201));
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(var(--text), 0.09), 0 2px 4px 0 rgba(var(--exterior), 0.15),
    0 1px 1.5px 0 rgba(var(--exterior), 0.1), 0 1px 2px 0 rgba(var(--exterior), 0.2), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(var(--text), 0.16), 0 2px 3px 0 rgba(var(--exterior), 0.3),
    0 1px 1.5px 0 rgba(var(--exterior), 0.2), 0 1px 2px 0 rgba(var(--exterior), 0.4), 0 0 0 0 transparent;
  --interactive-accent: rgb(var(--accent));
  --interactive-accent-hover: rgb(var(--accent));
  --interactive-accent-rgb: var(--accent, 235, 188, 186);
  --interactive-hover: rgb(var(--surface1));
  --interactive-normal: rgb(var(--surface0));
  --interactive-success: rgb(var(--green));
  --internal-link-color: rgba(var(--accent), 0.9);
  --italic-color: rgb(var(--shib-italic-color, var(--green)));
  --lemon: 246, 193, 119;
  --light: var(--background-primary, rgb(var(--base)));
  --lightgray: var(--background-secondary, rgb(var(--side)));
  --lily: 235, 188, 186;
  --link-color: var(--text-accent, rgb(235, 188, 186));
  --link-color-hover: var(--text-accent-hover, rgb(235, 188, 186));
  --link-external-color: var(--text-accent, rgb(235, 188, 186));
  --link-external-color-hover: var(--text-accent-hover, rgb(235, 188, 186));
  --link-unresolved-color: var(--text-accent, rgb(235, 188, 186));
  --list-marker-color: var(--text-faint, rgb(165, 172, 201));
  --list-marker-color-collapsed: var(--text-accent, rgb(235, 188, 186));
  --list-marker-color-hover: var(--text-muted, rgb(148, 155, 183));
  --max-width-image: 90%;
  --menu-background: var(--background-secondary, rgb(38, 42, 58));
  --menu-border-color: var(--background-modifier-border-hover, rgb(81, 86, 108));
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(36, 39, 52, 0.121), 0px 3.4px 6.7px rgba(36, 39, 52, 0.179),
    0px 15px 30px rgba(36, 39, 52, 0.3));
  --metadata-border-color: var(--background-modifier-border, rgb(65, 69, 89));
  --metadata-divider-color: var(--background-modifier-border, rgb(65, 69, 89));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(198, 206, 239, 0.075));
  --metadata-input-text-color: var(--text-normal, rgb(198, 206, 239));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(198, 206, 239, 0.075));
  --metadata-label-text-color: var(--text-muted, rgb(148, 155, 183));
  --metadata-label-text-color-hover: var(--text-muted, rgb(148, 155, 183));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(198, 206, 239, 0.075));
  --min-width-image: 50%;
  --modal-background: var(--background-primary, rgb(42, 45, 61));
  --modal-border-color: rgb(var(--surface0));
  --mono-rgb-100: var(--text, 198, 206, 239);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(165, 172, 201));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(165, 172, 201));
  --nav-folder-title-color: rgba(var(--base));
  --nav-heading-color: var(--text-normal, rgb(198, 206, 239));
  --nav-heading-color-collapsed: var(--text-faint, rgb(165, 172, 201));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(148, 155, 183));
  --nav-heading-color-hover: var(--text-normal, rgb(198, 206, 239));
  --nav-indentation-guide-color: rgba(var(--exterior), 0.4);
  --nav-item-background-active: var(--background-modifier-hover, rgba(198, 206, 239, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(198, 206, 239, 0.075));
  --nav-item-background-selected: rgba(var(--accent), 0.2);
  --nav-item-color: var(--text-muted, rgb(148, 155, 183));
  --nav-item-color-active: var(--text-normal, rgb(198, 206, 239));
  --nav-item-color-highlighted: var(--text-accent, rgb(235, 188, 186));
  --nav-item-color-hover: var(--text-normal, rgb(198, 206, 239));
  --nav-item-color-selected: var(--text-normal, rgb(198, 206, 239));
  --nav-tag-color: var(--text-faint, rgb(165, 172, 201));
  --nav-tag-color-active: var(--text-muted, rgb(148, 155, 183));
  --nav-tag-color-hover: var(--text-muted, rgb(148, 155, 183));
  --orange: 247, 157, 124;
  --outline-border: 2px;
  --overlay0: 115, 120, 145;
  --overlay1: 131, 138, 164;
  --overlay2: 148, 155, 183;
  --panel-page-opacity: 0.25;
  --pdf-background: var(--background-primary, rgb(42, 45, 61));
  --pdf-page-background: var(--background-primary, rgb(42, 45, 61));
  --pdf-sidebar-background: var(--background-primary, rgb(42, 45, 61));
  --pill-border-color: var(--background-modifier-border, rgb(65, 69, 89));
  --pill-border-color-hover: var(--background-modifier-border-hover, rgb(81, 86, 108));
  --pill-color: var(--text-muted, rgb(148, 155, 183));
  --pill-color-hover: var(--text-normal, rgb(198, 206, 239));
  --pill-color-remove: var(--text-faint, rgb(165, 172, 201));
  --pill-color-remove-hover: var(--text-accent, rgb(235, 188, 186));
  --prompt-background: var(--background-primary, rgb(42, 45, 61));
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(65, 69, 89) 65%, transparent) linear-gradient(rgb(65, 69, 89), color-mix(in srgb, rgb(65, 69, 89) 65%, transparent)));
  --red: 255, 98, 107;
  --ribbon-background: var(--background-secondary, rgb(38, 42, 58));
  --ribbon-background-collapsed: var(--background-primary, rgb(42, 45, 61));
  --rose: 243, 137, 143;
  --sea: 104, 188, 204;
  --search-clear-button-color: var(--text-muted, rgb(148, 155, 183));
  --search-icon-color: var(--text-muted, rgb(148, 155, 183));
  --search-result-background: var(--background-primary, rgb(42, 45, 61));
  --secondary: var(--text-accent, rgb(var(--accent)));
  --setting-group-heading-color: var(--text-normal, rgb(198, 206, 239));
  --setting-items-background: var(--background-primary-alt, rgb(38, 42, 58));
  --setting-items-border-color: var(--background-modifier-border, rgb(65, 69, 89));
  --shadow-l: 0px 1.8px 7.3px rgba(var(--exterior), 0.071), 0px 6.3px 24.7px rgba(var(--exterior), 0.112),
    0px 30px 90px rgba(var(--exterior), 0.2);
  --shadow-s: 0px 1px 2px rgba(var(--exterior), 0.121), 0px 3.4px 6.7px rgba(var(--exterior), 0.179),
    0px 15px 30px rgba(var(--exterior), 0.3);
  --shib-bold-color: var(--red, 255, 98, 107);
  --shib-callout-fold-position: 1;
  --shib-italic-color: var(--green, 56, 198, 141);
  --shib-speech-bubble-opacity: var(--shib-sp-op-dark, 0.9);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(148, 155, 183));
  --shiki-code-background: var(--code-background, rgb(38, 42, 58));
  --shiki-code-comment: var(--text-faint, rgb(165, 172, 201));
  --shiki-code-function: var(--color-green, rgb(56, 198, 141));
  --shiki-code-important: var(--color-orange, rgb(247, 157, 124));
  --shiki-code-keyword: var(--color-pink, rgb(243, 137, 143));
  --shiki-code-normal: var(--text-muted, rgb(148, 155, 183));
  --shiki-code-property: var(--color-cyan, rgb(104, 188, 204));
  --shiki-code-punctuation: var(--text-muted, rgb(148, 155, 183));
  --shiki-code-string: var(--color-yellow, rgb(249, 226, 175));
  --shiki-code-value: var(--color-purple, rgb(196, 167, 231));
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(65, 69, 89));
  --shiki-gutter-text-color: var(--text-faint, rgb(165, 172, 201));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(148, 155, 183));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(148, 155, 183));
  --shiki-terminal-dots-color: var(--text-faint, rgb(165, 172, 201));
  --shiki-tooltip-background: var(--background-modifier-message, rgba(36, 39, 52, 0.9));
  --side: 38, 42, 58;
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgb(81, 86, 108));
  --slider-track-background: var(--background-modifier-border, rgb(65, 69, 89));
  --status-bar-background: var(--background-secondary, rgb(38, 42, 58));
  --status-bar-border-color: var(--divider-color, rgb(65, 69, 89));
  --status-bar-text-color: var(--text-muted, rgb(148, 155, 183));
  --subtext0: 165, 172, 201;
  --subtext1: 181, 189, 220;
  --suggestion-background: var(--background-primary, rgb(42, 45, 61));
  --surface0: 65, 69, 89;
  --surface1: 81, 86, 108;
  --surface2: 98, 103, 126;
  --sync-avatar-color-1: var(--color-red, rgb(255, 98, 107));
  --sync-avatar-color-2: var(--color-orange, rgb(247, 157, 124));
  --sync-avatar-color-3: var(--color-yellow, rgb(249, 226, 175));
  --sync-avatar-color-4: var(--color-green, rgb(56, 198, 141));
  --sync-avatar-color-5: var(--color-cyan, rgb(104, 188, 204));
  --sync-avatar-color-6: var(--color-blue, rgb(147, 183, 245));
  --sync-avatar-color-7: var(--color-purple, rgb(196, 167, 231));
  --sync-avatar-color-8: var(--color-pink, rgb(243, 137, 143));
  --tab-background-active: var(--background-primary, rgb(42, 45, 61));
  --tab-container-background: var(--background-secondary, rgb(38, 42, 58));
  --tab-divider-color: var(--background-modifier-border-hover, rgb(81, 86, 108));
  --tab-inactive-color: rgb(var(--side));
  --tab-outline-color: var(--divider-color, rgb(65, 69, 89));
  --tab-radius: var(--radius-s, 0px);
  --tab-stacked-header-width: var(--shib-stacked-header-width, 40px);
  --tab-switcher-background: var(--background-secondary, rgb(38, 42, 58));
  --tab-text-color: var(--text-faint, rgb(165, 172, 201));
  --tab-text-color-active: var(--text-muted, rgb(148, 155, 183));
  --tab-text-color-focused: var(--text-muted, rgb(148, 155, 183));
  --tab-text-color-focused-active: var(--text-muted, rgb(148, 155, 183));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(198, 206, 239));
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(235, 188, 186));
  --table-add-button-border-color: var(--background-modifier-border, rgb(65, 69, 89));
  --table-border-color: var(--background-modifier-border, rgb(65, 69, 89));
  --table-border-width: var(--shib-table-thickness, 1px);
  --table-drag-handle-background-active: var(--table-selection-border-color, rgb(235, 188, 186));
  --table-drag-handle-color: var(--text-faint, rgb(165, 172, 201));
  --table-drag-handle-color-active: var(--text-on-accent, rgb(42, 45, 61));
  --table-header-border-color: var(--table-border-color, rgb(65, 69, 89));
  --table-header-color: var(--text-normal, rgb(198, 206, 239));
  --table-selection-blend-mode: var(--highlight-mix-blend-mode, none);
  --table-selection-border-color: var(--interactive-accent, rgb(235, 188, 186));
  --tag-background: rgba(var(--accent), 0.1);
  --tag-background-hover: rgba(var(--accent), 0.2);
  --tag-border-color: rgba(var(--accent), 0.15);
  --tag-border-color-hover: rgba(var(--accent), 0.15);
  --tag-color: var(--text-accent, rgb(235, 188, 186));
  --tag-color-hover: var(--text-accent, rgb(235, 188, 186));
  --tertiary: var(--text-accent-hover, rgb(var(--accent)));
  --text: 198, 206, 239;
  --text-accent: rgb(var(--accent));
  --text-accent-hover: rgb(var(--accent));
  --text-error: rgb(var(--red));
  --text-error-hover: rgba(var(--red), 0.8);
  --text-faint: rgb(var(--subtext0));
  --text-highlight-bg: rgba(var(--orange), 0.2);
  --text-highlight-bg-active: rgba(var(--orange), 0.4);
  --text-muted: rgb(var(--overlay2));
  --text-muted-rgb: var(--overlay2, 148, 155, 183);
  --text-normal: rgb(var(--text));
  --text-on-accent: rgb(var(--base));
  --text-selection: rgba(var(--blue), 0.15);
  --text-success: rgb(var(--green));
  --text-warning: var(--color-orange, rgb(247, 157, 124));
  --textHighlight: var(--text-highlight-bg, rgba(var(--orange), 0.2));
  --titleFont: var(--font-text-theme, var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif));
  --titlebar-background: var(--background-secondary, rgb(38, 42, 58));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(36, 39, 52));
  --titlebar-border-color: var(--background-modifier-border, rgb(65, 69, 89));
  --titlebar-text-color: var(--text-muted, rgb(148, 155, 183));
  --titlebar-text-color-focused: var(--color-accent, rgb(235, 188, 186));
  --turquoise: 128, 216, 220;
  --unresolved-link-color: rgba(var(--accent), 0.8);
  --vault-profile-color: var(--text-normal, rgb(198, 206, 239));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(198, 206, 239));
  --violet: 196, 167, 231;
  --width-image-gallery: 200px;
  --workspace-background-translucent: rgba(var(--exterior), 0.6);
  --yellow: 249, 226, 175;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, rgb(38, 42, 58));
  background-color: var(--tab-container-background, rgb(38, 42, 58));
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(42, 45, 61));
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(38, 42, 58));
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 69, 89);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, rgb(38, 42, 58));
  background-color: var(--tab-container-background, rgb(38, 42, 58));
  border-left-color: rgb(65, 69, 89);
  color: rgb(198, 206, 239);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(255, 98, 107));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 98, 107) none 0px;
  text-decoration-color: rgb(255, 98, 107);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(56, 198, 141));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(56, 198, 141) none 0px;
  text-decoration-color: rgb(56, 198, 141);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(56, 198, 141));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(56, 198, 141) none 0px;
  text-decoration-color: rgb(56, 198, 141);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(255, 98, 107));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 98, 107) none 0px;
  text-decoration-color: rgb(255, 98, 107);
}

html[saved-theme="dark"] body .text-highlight {
  --bold-color: rgb(var(--text));
  --italic-color: rgb(var(--text));
  background-color: var(--text-highlight-bg, rgba(247, 157, 124, 0.2));
  color: var(--text-normal, rgb(198, 206, 239));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 206, 239) none 0px;
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body del {
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 206, 239) none 0px;
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(165, 172, 201);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(235, 188, 186));
  border-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(148, 155, 183));
  outline: rgb(148, 155, 183) none 0px;
  text-decoration-color: rgb(148, 155, 183);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--external-link-color, rgba(235, 188, 186, 0.8));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(235, 188, 186, 0.8) none 0px;
  text-decoration-color: rgba(235, 188, 186, 0.8);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--internal-link-color, rgba(235, 188, 186, 0.9));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(235, 188, 186, 0.9) none 0px;
  text-decoration-color: rgba(235, 188, 186, 0.9);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--unresolved-link-color, rgba(235, 188, 186, 0.8));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(235, 188, 186, 0.8) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body dt {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(165, 172, 201));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(36, 39, 52, 0.5));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(65, 69, 89);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(65, 69, 89);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(65, 69, 89);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(65, 69, 89);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: var(--heading-spacing, 20px);
  width: 661px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: var(--table-text-color, rgb(198, 206, 239));
  text-align: var(--shib-table-align-td, center);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: var(--table-header-color, rgb(198, 206, 239));
  text-align: var(--shib-table-align-th, center);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(38, 42, 58));
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: var(--code-normal, rgb(198, 206, 239));
  font-family: var(--font-family-inline-code, monospace);
  padding-bottom: 1px;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(38, 42, 58));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, rgb(38, 42, 58));
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 98, 107);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(255, 98, 107);
  border-radius: 15px;
  border-right-color: rgb(255, 98, 107);
  border-top-color: rgb(255, 98, 107);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(38, 42, 58));
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(235, 188, 186);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(165, 172, 201);
  border-left-color: rgb(165, 172, 201);
  border-right-color: rgb(165, 172, 201);
  border-top-color: rgb(165, 172, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(148, 155, 183);
  text-decoration: line-through;
  text-decoration-color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(198, 206, 239);
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 530'%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 530'%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(42, 45, 61);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 550'%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 550'%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(42, 45, 61);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 179' version='1.1'%3E%3Cpath d='M 22.640 6.632 C 15.939 8.690, 8.886 15.824, 6.949 22.503 C 5.751 26.633, 5.500 38.514, 5.500 91 L 5.500 154.500 8.359 160.323 C 11.460 166.639, 16.745 171.265, 22.911 173.063 C 25.298 173.758, 48.615 174.007, 92.500 173.804 C 155.743 173.513, 158.625 173.419, 161.500 171.568 C 166.511 168.341, 170.073 164.704, 172.342 160.500 C 174.478 156.541, 174.503 155.858, 174.792 93.705 C 174.977 54.030, 174.709 28.880, 174.066 25.397 C 172.322 15.963, 165.208 8.466, 155.807 6.154 C 152.501 5.341, 132.856 5.021, 89.307 5.070 C 37.483 5.128, 26.715 5.380, 22.640 6.632 M 72.564 43.123 C 65.124 44.867, 58.092 52.842, 58.022 59.615 C 57.982 63.481, 61.727 67, 65.881 67 C 69.991 67, 71.779 65.891, 74.343 61.750 L 76.046 59 87.976 59 C 100.970 59, 104.518 59.944, 105.447 63.646 C 106.421 67.526, 104.509 69.604, 94.434 75.617 C 89.189 78.747, 84.246 82.238, 83.449 83.376 C 81.722 85.842, 81.548 92.914, 83.130 96.385 C 86.088 102.877, 96.867 101.553, 98.153 94.540 C 98.372 93.344, 101.499 90.811, 106.178 88.040 C 110.394 85.543, 114.842 82.600, 116.063 81.500 C 122.168 75.999, 123.935 62.981, 119.674 54.907 C 116.650 49.178, 110.395 44.465, 103.994 43.092 C 97.948 41.795, 78.146 41.815, 72.564 43.123 M 86.212 115.129 C 82.159 116.297, 79.009 121.125, 79.004 126.173 C 78.994 135.843, 91.548 140.543, 98.586 133.505 C 100.471 131.620, 101 130.033, 101 126.268 C 101 120.546, 99.053 117.338, 94.401 115.394 C 90.647 113.826, 90.721 113.828, 86.212 115.129' stroke='none' fill='%23142c4c' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 179' version='1.1'%3E%3Cpath d='M 22.640 6.632 C 15.939 8.690, 8.886 15.824, 6.949 22.503 C 5.751 26.633, 5.500 38.514, 5.500 91 L 5.500 154.500 8.359 160.323 C 11.460 166.639, 16.745 171.265, 22.911 173.063 C 25.298 173.758, 48.615 174.007, 92.500 173.804 C 155.743 173.513, 158.625 173.419, 161.500 171.568 C 166.511 168.341, 170.073 164.704, 172.342 160.500 C 174.478 156.541, 174.503 155.858, 174.792 93.705 C 174.977 54.030, 174.709 28.880, 174.066 25.397 C 172.322 15.963, 165.208 8.466, 155.807 6.154 C 152.501 5.341, 132.856 5.021, 89.307 5.070 C 37.483 5.128, 26.715 5.380, 22.640 6.632 M 72.564 43.123 C 65.124 44.867, 58.092 52.842, 58.022 59.615 C 57.982 63.481, 61.727 67, 65.881 67 C 69.991 67, 71.779 65.891, 74.343 61.750 L 76.046 59 87.976 59 C 100.970 59, 104.518 59.944, 105.447 63.646 C 106.421 67.526, 104.509 69.604, 94.434 75.617 C 89.189 78.747, 84.246 82.238, 83.449 83.376 C 81.722 85.842, 81.548 92.914, 83.130 96.385 C 86.088 102.877, 96.867 101.553, 98.153 94.540 C 98.372 93.344, 101.499 90.811, 106.178 88.040 C 110.394 85.543, 114.842 82.600, 116.063 81.500 C 122.168 75.999, 123.935 62.981, 119.674 54.907 C 116.650 49.178, 110.395 44.465, 103.994 43.092 C 97.948 41.795, 78.146 41.815, 72.564 43.123 M 86.212 115.129 C 82.159 116.297, 79.009 121.125, 79.004 126.173 C 78.994 135.843, 91.548 140.543, 98.586 133.505 C 100.471 131.620, 101 130.033, 101 126.268 C 101 120.546, 99.053 117.338, 94.401 115.394 C 90.647 113.826, 90.721 113.828, 86.212 115.129' stroke='none' fill='%23142c4c' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 188, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(131, 138, 164);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(56, 198, 141);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 444 502'%3E%3Cpath d='M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 444 502'%3E%3Cpath d='M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(128, 216, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 470 '%3E%3Cpath d='M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 470 '%3E%3Cpath d='M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(137, 199, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 98, 107);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 98, 107);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 98, 107);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3Cpath d='M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3Cpath d='M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(147, 183, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(147, 183, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(56, 198, 141);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 177 175' version='1.1'%3E%3Cpath d='M 40.344 3.037 C 30.953 4.904, 22.308 11.667, 17.923 20.577 L 15.500 25.500 15.500 86 C 15.500 145.687, 15.529 146.562, 17.637 151.122 C 20.705 157.757, 26.321 163.519, 32.839 166.720 L 38.500 169.500 100.250 169.779 L 162 170.059 162 159.529 L 162 149 156.500 149 L 151 149 151 138.500 L 151 128 156.508 128 L 162.015 128 161.758 65.250 L 161.500 2.500 103 2.356 C 70.825 2.276, 42.630 2.583, 40.344 3.037 M 57.195 49.750 L 57.500 54.500 93.500 54.500 L 129.500 54.500 129.805 49.750 L 130.110 45 93.500 45 L 56.890 45 57.195 49.750 M 57 70.500 L 57 75 93.500 75 L 130 75 130 70.500 L 130 66 93.500 66 L 57 66 57 70.500 M 42 129.273 C 40.625 129.956, 38.662 132.228, 37.638 134.320 C 35.970 137.728, 35.920 138.508, 37.163 141.812 C 39.877 149.030, 39.965 149.042, 87.500 148.754 L 129.500 148.500 129.785 138.250 L 130.070 128 87.285 128.015 C 55.215 128.026, 43.874 128.341, 42 129.273' stroke='none' fill='%23142b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 177 175' version='1.1'%3E%3Cpath d='M 40.344 3.037 C 30.953 4.904, 22.308 11.667, 17.923 20.577 L 15.500 25.500 15.500 86 C 15.500 145.687, 15.529 146.562, 17.637 151.122 C 20.705 157.757, 26.321 163.519, 32.839 166.720 L 38.500 169.500 100.250 169.779 L 162 170.059 162 159.529 L 162 149 156.500 149 L 151 149 151 138.500 L 151 128 156.508 128 L 162.015 128 161.758 65.250 L 161.500 2.500 103 2.356 C 70.825 2.276, 42.630 2.583, 40.344 3.037 M 57.195 49.750 L 57.500 54.500 93.500 54.500 L 129.500 54.500 129.805 49.750 L 130.110 45 93.500 45 L 56.890 45 57.195 49.750 M 57 70.500 L 57 75 93.500 75 L 130 75 130 70.500 L 130 66 93.500 66 L 57 66 57 70.500 M 42 129.273 C 40.625 129.956, 38.662 132.228, 37.638 134.320 C 35.970 137.728, 35.920 138.508, 37.163 141.812 C 39.877 149.030, 39.965 149.042, 87.500 148.754 L 129.500 148.500 129.785 138.250 L 130.070 128 87.285 128.015 C 55.215 128.026, 43.874 128.341, 42 129.273' stroke='none' fill='%23142b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 170' version='1.1'%3E%3Cpath d='M 73.633 4.553 C 45.770 10.089, 24.575 26.633, 12.450 52.309 C 6.771 64.334, 5.500 70.677, 5.500 87 C 5.500 103.323, 6.771 109.666, 12.450 121.691 C 24.186 146.544, 45.625 163.776, 71.436 169.103 C 120.309 179.190, 166.043 146.223, 172.153 96.501 C 176.830 58.443, 153.240 20.809, 116.500 7.718 C 103.999 3.264, 86.587 1.978, 73.633 4.553 M 84.949 41.840 C 83.486 43.025, 82.467 45.215, 82.088 47.992 C 81.552 51.922, 81.154 52.423, 77.591 53.654 C 71.868 55.632, 67.487 59.363, 65.102 64.289 C 62.395 69.882, 62.453 75.464, 65.271 80.500 C 67.957 85.299, 75.837 89.608, 89.275 93.627 C 102.498 97.582, 106.049 101.456, 100.471 105.844 C 96.083 109.296, 91.116 109.441, 79.440 106.461 C 67.550 103.427, 64.583 103.831, 63.374 108.647 C 62.105 113.701, 64.649 116.208, 73.782 118.907 L 82 121.335 82.015 125.417 C 82.024 127.663, 82.361 129.995, 82.765 130.600 C 84.145 132.667, 87.955 134.049, 90.506 133.409 C 93.612 132.630, 95 130.244, 95 125.684 C 95 122.470, 95.286 122.163, 99.250 121.129 C 110.133 118.289, 116 111.429, 116 101.543 C 116 91.121, 109.966 85.821, 91.606 80.116 C 86.165 78.425, 80.652 76.347, 79.356 75.498 C 76.283 73.484, 76.365 70.645, 79.570 68.123 C 83.524 65.014, 90.182 64.441, 98.792 66.471 C 106.048 68.182, 106.286 68.177, 108.862 66.263 C 114.645 61.965, 111.226 54.875, 102.687 53.461 C 96.414 52.422, 95.002 51.369, 94.985 47.715 C 94.967 43.940, 94.279 42.709, 91.316 41.150 C 88.379 39.604, 87.607 39.688, 84.949 41.840' stroke='none' fill='%23132b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 170' version='1.1'%3E%3Cpath d='M 73.633 4.553 C 45.770 10.089, 24.575 26.633, 12.450 52.309 C 6.771 64.334, 5.500 70.677, 5.500 87 C 5.500 103.323, 6.771 109.666, 12.450 121.691 C 24.186 146.544, 45.625 163.776, 71.436 169.103 C 120.309 179.190, 166.043 146.223, 172.153 96.501 C 176.830 58.443, 153.240 20.809, 116.500 7.718 C 103.999 3.264, 86.587 1.978, 73.633 4.553 M 84.949 41.840 C 83.486 43.025, 82.467 45.215, 82.088 47.992 C 81.552 51.922, 81.154 52.423, 77.591 53.654 C 71.868 55.632, 67.487 59.363, 65.102 64.289 C 62.395 69.882, 62.453 75.464, 65.271 80.500 C 67.957 85.299, 75.837 89.608, 89.275 93.627 C 102.498 97.582, 106.049 101.456, 100.471 105.844 C 96.083 109.296, 91.116 109.441, 79.440 106.461 C 67.550 103.427, 64.583 103.831, 63.374 108.647 C 62.105 113.701, 64.649 116.208, 73.782 118.907 L 82 121.335 82.015 125.417 C 82.024 127.663, 82.361 129.995, 82.765 130.600 C 84.145 132.667, 87.955 134.049, 90.506 133.409 C 93.612 132.630, 95 130.244, 95 125.684 C 95 122.470, 95.286 122.163, 99.250 121.129 C 110.133 118.289, 116 111.429, 116 101.543 C 116 91.121, 109.966 85.821, 91.606 80.116 C 86.165 78.425, 80.652 76.347, 79.356 75.498 C 76.283 73.484, 76.365 70.645, 79.570 68.123 C 83.524 65.014, 90.182 64.441, 98.792 66.471 C 106.048 68.182, 106.286 68.177, 108.862 66.263 C 114.645 61.965, 111.226 54.875, 102.687 53.461 C 96.414 52.422, 95.002 51.369, 94.985 47.715 C 94.967 43.940, 94.279 42.709, 91.316 41.150 C 88.379 39.604, 87.607 39.688, 84.949 41.840' stroke='none' fill='%23132b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(56, 198, 141);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(56, 198, 141);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 104, 188, 204);
  background: rgba(38, 42, 58, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(104, 188, 204, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 188, 204, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 188, 204, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 188, 204, 0.4);
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 255, 98, 107);
  background: rgba(38, 42, 58, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(255, 98, 107, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(255, 98, 107, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(255, 98, 107, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(255, 98, 107, 0.4);
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 98, 107);
  background: rgba(38, 42, 58, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(255, 98, 107, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(255, 98, 107, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(255, 98, 107, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(255, 98, 107, 0.4);
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 196, 167, 231);
  background: rgba(38, 42, 58, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(196, 167, 231, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(196, 167, 231, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(196, 167, 231, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(196, 167, 231, 0.4);
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 98, 107);
  background: rgba(38, 42, 58, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(255, 98, 107, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(255, 98, 107, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(255, 98, 107, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(255, 98, 107, 0.4);
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 147, 183, 245);
  background: rgba(38, 42, 58, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(147, 183, 245, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(147, 183, 245, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(147, 183, 245, 0.4);
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 147, 183, 245);
  background: rgba(38, 42, 58, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(147, 183, 245, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(147, 183, 245, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(147, 183, 245, 0.4);
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 247, 157, 124);
  background: rgba(38, 42, 58, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(247, 157, 124, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(247, 157, 124, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(247, 157, 124, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(247, 157, 124, 0.4);
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(38, 42, 58, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(158, 158, 158, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.4);
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="seealso"] {
  --accent: 235, 188, 186;
  --background-modifier-active-hover: rgba(235, 188, 186, 0.15);
  --background-modifier-border: rgb(65, 69, 89);
  --background-modifier-border-focus: rgb(98, 103, 126);
  --background-modifier-border-hover: rgb(81, 86, 108);
  --background-modifier-cover: rgba(38, 42, 58, 0.4);
  --background-modifier-error: rgb(255, 98, 107);
  --background-modifier-error-hover: rgba(255, 98, 107, 0.9);
  --background-modifier-error-rgb: 255, 98, 107;
  --background-modifier-form-field: rgba(36, 39, 52, 0.3);
  --background-modifier-form-field-hover: rgba(36, 39, 52, 0.3);
  --background-modifier-hover: rgba(198, 206, 239, 0.075);
  --background-modifier-message: rgba(36, 39, 52, 0.9);
  --background-modifier-success: rgb(56, 198, 141);
  --background-modifier-success-hover: rgba(56, 198, 141, 0.9);
  --background-modifier-success-rgb: 56, 198, 141;
  --background-primary: rgb(42, 45, 61);
  --background-primary-alt: rgb(38, 42, 58);
  --background-secondary: rgb(38, 42, 58);
  --background-secondary-alt: rgb(36, 39, 52);
  --background-secondary-translucent: rgba(42, 45, 61, 0.1);
  --background-secondary-translucent-1: rgba(42, 45, 61, 0.1);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-color-settings-1: rgba(42, 45, 61, 0.15);
  --bg-color-settings-2: rgba(42, 45, 61, 0.3);
  --bg-color-settings-3: rgba(42, 45, 61, 0.8);
  --bg-color-settings-4: rgba(42, 45, 61, 0.7);
  --blockquote-background-color: rgba(36, 39, 52, 0.5);
  --blockquote-border-color: rgb(235, 188, 186);
  --blur-background: color-mix(in srgb, rgb(65, 69, 89) 65%, transparent) linear-gradient(rgb(65, 69, 89), color-mix(in srgb, rgb(65, 69, 89) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(255, 98, 107);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: none;
  --callout-bug: 255, 98, 107;
  --callout-color: var(--callout-default, 147, 183, 245);
  --callout-content-padding: 0;
  --callout-default: 147, 183, 245;
  --callout-error: 255, 98, 107;
  --callout-example: 196, 167, 231;
  --callout-fail: 255, 98, 107;
  --callout-important: 104, 188, 204;
  --callout-info: 147, 183, 245;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 247, 157, 124;
  --callout-radius: 4px;
  --callout-success: 56, 198, 141;
  --callout-summary: 104, 188, 204;
  --callout-tip: 104, 188, 204;
  --callout-title-padding: 8px;
  --callout-title-weight: 600;
  --callout-todo: 147, 183, 245;
  --callout-warning: 247, 157, 124;
  --canvas-background: rgb(42, 45, 61);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: rgb(81, 86, 108);
  --card-background-color: rgb(36, 39, 52);
  --card-foreground-color: rgb(42, 45, 61);
  --cards-background: rgb(38, 42, 58);
  --cards-background-modifier-border: rgb(65, 69, 89);
  --caret-color: rgb(198, 206, 239);
  --checkbox-border-color: rgb(165, 172, 201);
  --checkbox-border-color-hover: rgb(148, 155, 183);
  --checkbox-color: rgb(235, 188, 186);
  --checkbox-color-hover: rgb(235, 188, 186);
  --checkbox-marker-color: rgb(42, 45, 61);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: rgb(148, 155, 183);
  --clickable-icon-radius: 4px;
  --code-background: rgb(38, 42, 58);
  --code-border-color: rgb(65, 69, 89);
  --code-bracket-background: rgba(198, 206, 239, 0.075);
  --code-comment: rgb(165, 172, 201);
  --code-function: rgb(249, 226, 175);
  --code-important: rgb(247, 157, 124);
  --code-keyword: rgb(243, 137, 143);
  --code-normal: rgb(198, 206, 239);
  --code-operator: rgb(255, 98, 107);
  --code-property: rgb(104, 188, 204);
  --code-punctuation: rgb(148, 155, 183);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(56, 198, 141);
  --code-tag: rgb(255, 98, 107);
  --code-value: rgb(196, 167, 231);
  --collapse-icon-color: rgb(165, 172, 201);
  --collapse-icon-color-collapsed: rgb(235, 188, 186);
  --color-accent: rgb(235, 188, 186);
  --color-accent-1: rgb(235, 188, 186);
  --color-accent-2: rgba(235, 188, 186, 0.9);
  --color-accent-hsl: 258, 88%, 66%;
  --color-accent-translucent-001: hsla(258, 88%, 66%, 0.01);
  --color-accent-translucent-005: hsla(258, 88%, 66%, 0.05);
  --color-accent-translucent-01: hsla(258, 88%, 66%, 0.1);
  --color-accent-translucent-015: hsla(258, 88%, 66%, 0.15);
  --color-accent-translucent-02: hsla(258, 88%, 66%, 0.2);
  --color-accent-translucent-04: hsla(258, 88%, 66%, 0.4);
  --color-accent-translucent-06: hsla(258, 88%, 66%, 0.6);
  --color-base-00: rgb(36, 39, 52);
  --color-base-10: rgb(38, 42, 58);
  --color-base-100: rgb(198, 206, 239);
  --color-base-20: rgb(42, 45, 61);
  --color-base-25: rgb(65, 69, 89);
  --color-base-30: rgb(81, 86, 108);
  --color-base-35: rgb(98, 103, 126);
  --color-base-40: rgb(115, 120, 145);
  --color-base-50: rgb(131, 138, 164);
  --color-base-60: rgb(148, 155, 183);
  --color-base-70: rgb(165, 172, 201);
  --color-blue: rgb(147, 183, 245);
  --color-blue-rgb: 147, 183, 245;
  --color-cyan: rgb(104, 188, 204);
  --color-cyan-rgb: 104, 188, 204;
  --color-green: rgb(56, 198, 141);
  --color-green-rgb: 56, 198, 141;
  --color-lightorange: rgb(246, 193, 119);
  --color-lightorange-rgb: 246, 193, 119;
  --color-lightpink: rgb(235, 188, 186);
  --color-lightpink-rgb: 235, 188, 186;
  --color-orange: rgb(247, 157, 124);
  --color-orange-rgb: 247, 157, 124;
  --color-pink: rgb(243, 137, 143);
  --color-pink-rgb: 243, 137, 143;
  --color-purple: rgb(196, 167, 231);
  --color-purple-rgb: 196, 167, 231;
  --color-red: rgb(255, 98, 107);
  --color-red-rgb: 255, 98, 107;
  --color-yellow: rgb(249, 226, 175);
  --color-yellow-rgb: 249, 226, 175;
  --divider-color: rgb(65, 69, 89);
  --divider-color-hover: rgb(235, 188, 186);
  --divider-vertical-height: 100%;
  --dropdown-background: rgb(65, 69, 89);
  --dropdown-background-hover: rgb(81, 86, 108);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: rgba(235, 188, 186, 0.8);
  --flair-background: rgb(65, 69, 89);
  --flair-color: rgb(198, 206, 239);
  --font-family-folder-file-title: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-family-inline-code: monospace;
  --font-family-tag: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-family-vault: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-family-vertical-bar: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-text: '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-arrow: rgb(243, 137, 143);
  --graph-circle-fill: rgb(147, 183, 245);
  --graph-circle-fill-highlight: rgb(147, 183, 245);
  --graph-circle-outline: rgb(243, 137, 143);
  --graph-fill-attachment: rgb(147, 183, 245);
  --graph-fill-tag: rgb(247, 157, 124);
  --graph-line: rgb(65, 69, 89);
  --graph-line-highlight: rgb(235, 188, 186);
  --graph-node: rgb(148, 155, 183);
  --graph-node-attachment: rgb(249, 226, 175);
  --graph-node-focused: rgb(235, 188, 186);
  --graph-node-tag: rgb(56, 198, 141);
  --graph-node-unresolved: rgb(165, 172, 201);
  --graph-text: rgb(198, 206, 239);
  --h1-color: rgb(255, 98, 107);
  --h1-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-color: rgb(235, 188, 186);
  --h2-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-color: rgb(104, 188, 204);
  --h3-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-color: rgb(137, 199, 223);
  --h4-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-color: rgb(147, 183, 245);
  --h5-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-line-height: 1.5;
  --h6-color: rgb(128, 216, 220);
  --h6-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h6-line-height: 1.5;
  --header-height: 40px;
  --heading-formatting: rgb(235, 188, 186);
  --heading-spacing: 2.5rem;
  --hr-color: rgb(65, 69, 89);
  --hr-outline-color: rgb(65, 69, 89);
  --interactive-accent: rgb(235, 188, 186);
  --interactive-accent-hover: rgb(235, 188, 186);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-accent-rgb: 235, 188, 186;
  --interactive-hover: rgb(81, 86, 108);
  --interactive-normal: rgb(65, 69, 89);
  --interactive-success: rgb(56, 198, 141);
  --internal-link-color: rgba(235, 188, 186, 0.9);
  --italic-color: rgb(56, 198, 141);
  --link-color: rgb(235, 188, 186);
  --link-color-hover: rgb(235, 188, 186);
  --link-external-color: rgb(235, 188, 186);
  --link-external-color-hover: rgb(235, 188, 186);
  --link-unresolved-color: rgb(235, 188, 186);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: rgb(38, 42, 58);
  --menu-border-color: rgb(81, 86, 108);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(36, 39, 52, 0.121), 0px 3.4px 6.7px rgba(36, 39, 52, 0.179),
    0px 15px 30px rgba(36, 39, 52, 0.3);
  --mono-rgb-100: 198, 206, 239;
  --pdf-background: rgb(42, 45, 61);
  --pdf-page-background: rgb(42, 45, 61);
  --pdf-shadow: 0 0 0 1px rgb(65, 69, 89);
  --pdf-sidebar-background: rgb(42, 45, 61);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(65, 69, 89);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(65, 69, 89) 65%, transparent) linear-gradient(rgb(65, 69, 89), color-mix(in srgb, rgb(65, 69, 89) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(198, 206, 239, 0.2);
  --scrollbar-bg: rgba(198, 206, 239, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(198, 206, 239, 0.1);
  --search-clear-button-color: rgb(148, 155, 183);
  --search-icon-color: rgb(148, 155, 183);
  --search-result-background: rgb(42, 45, 61);
  --setting-group-heading-color: rgb(198, 206, 239);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: rgb(38, 42, 58);
  --setting-items-border-color: rgb(65, 69, 89);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-l: 0px 1.8px 7.3px rgba(36, 39, 52, 0.071), 0px 6.3px 24.7px rgba(36, 39, 52, 0.112),
    0px 30px 90px rgba(36, 39, 52, 0.2);
  --shadow-s: 0px 1px 2px rgba(36, 39, 52, 0.121), 0px 3.4px 6.7px rgba(36, 39, 52, 0.179),
    0px 15px 30px rgba(36, 39, 52, 0.3);
  --shib-bold-color: 255, 98, 107;
  --shib-italic-color: 56, 198, 141;
  --shib-speech-bubble-opacity: 0.9;
  --shiki-active-tab-border-color: rgb(148, 155, 183);
  --shiki-code-background: rgb(38, 42, 58);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: rgb(165, 172, 201);
  --shiki-code-function: rgb(56, 198, 141);
  --shiki-code-important: rgb(247, 157, 124);
  --shiki-code-keyword: rgb(243, 137, 143);
  --shiki-code-normal: rgb(148, 155, 183);
  --shiki-code-property: rgb(104, 188, 204);
  --shiki-code-punctuation: rgb(148, 155, 183);
  --shiki-code-string: rgb(249, 226, 175);
  --shiki-code-value: rgb(196, 167, 231);
  --shiki-gutter-border-color: rgb(65, 69, 89);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: rgb(165, 172, 201);
  --shiki-gutter-text-color-highlight: rgb(148, 155, 183);
  --shiki-highlight-green: rgba(56, 198, 141, 0.5);
  --shiki-highlight-green-background: rgba(56, 198, 141, 0.1);
  --shiki-highlight-neutral: rgb(148, 155, 183);
  --shiki-highlight-neutral-background: rgba(198, 206, 239, 0.05);
  --shiki-highlight-red: rgba(255, 98, 107, 0.5);
  --shiki-highlight-red-background: rgba(255, 98, 107, 0.1);
  --shiki-terminal-dots-color: rgb(165, 172, 201);
  --shiki-tooltip-background: rgba(36, 39, 52, 0.9);
  --suggestion-background: rgb(42, 45, 61);
  --swatch-shadow: inset 0 0 0 1px rgba(198, 206, 239, 0.15);
  --sync-avatar-color-1: rgb(255, 98, 107);
  --sync-avatar-color-2: rgb(247, 157, 124);
  --sync-avatar-color-3: rgb(249, 226, 175);
  --sync-avatar-color-4: rgb(56, 198, 141);
  --sync-avatar-color-5: rgb(104, 188, 204);
  --sync-avatar-color-6: rgb(147, 183, 245);
  --sync-avatar-color-7: rgb(196, 167, 231);
  --sync-avatar-color-8: rgb(243, 137, 143);
  --tab-background: rgb(38, 42, 58);
  --tab-background-active: rgb(42, 45, 61);
  --tab-divider-color: rgb(81, 86, 108);
  --tab-font-size: 12.3px;
  --tab-height: 32px;
  --tab-inactive-color: rgb(38, 42, 58);
  --tab-max-width: 200px;
  --tab-max-width-active: 300px;
  --tab-outline-color: rgb(65, 69, 89);
  --tab-radius: 0px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(38, 42, 58);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(38, 42, 58), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(198, 206, 239, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(235, 188, 186);
  --tab-text-color: rgb(165, 172, 201);
  --tab-text-color-active: rgb(148, 155, 183);
  --tab-text-color-focused: rgb(148, 155, 183);
  --tab-text-color-focused-active: rgb(148, 155, 183);
  --tab-text-color-focused-active-current: rgb(198, 206, 239);
  --tab-text-color-focused-highlighted: rgb(235, 188, 186);
  --table-add-button-border-color: rgb(65, 69, 89);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-border-width: 1px;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgb(235, 188, 186);
  --table-drag-handle-color: rgb(165, 172, 201);
  --table-drag-handle-color-active: rgb(42, 45, 61);
  --table-header-background: transparent;
  --table-header-border-color: rgb(65, 69, 89);
  --table-header-border-width: 1px;
  --table-header-color: rgb(198, 206, 239);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: none;
  --table-selection-border-color: rgb(235, 188, 186);
  --table-text-size: 16px;
  --tag-background: rgba(235, 188, 186, 0.1);
  --tag-background-hover: rgba(235, 188, 186, 0.2);
  --tag-border-color: rgba(235, 188, 186, 0.15);
  --tag-border-color-hover: rgba(235, 188, 186, 0.15);
  --tag-color: rgb(235, 188, 186);
  --tag-color-hover: rgb(235, 188, 186);
  --tag-size: 0.875em;
  --text-accent: rgb(235, 188, 186);
  --text-accent-hover: rgb(235, 188, 186);
  --text-error: rgb(255, 98, 107);
  --text-error-hover: rgba(255, 98, 107, 0.8);
  --text-faint: rgb(165, 172, 201);
  --text-highlight-bg: rgba(247, 157, 124, 0.2);
  --text-highlight-bg-active: rgba(247, 157, 124, 0.4);
  --text-muted: rgb(148, 155, 183);
  --text-muted-rgb: 148, 155, 183;
  --text-normal: rgb(198, 206, 239);
  --text-on-accent: rgb(42, 45, 61);
  --text-selection: rgba(147, 183, 245, 0.15);
  --text-success: rgb(56, 198, 141);
  --text-warning: rgb(247, 157, 124);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link-color: rgba(235, 188, 186, 0.8);
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(147, 183, 245, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(147, 183, 245, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(147, 183, 245, 0.4);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 56, 198, 141);
  background: rgba(38, 42, 58, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(56, 198, 141, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(56, 198, 141, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(56, 198, 141, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(56, 198, 141, 0.4);
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 104, 188, 204);
  background: rgba(38, 42, 58, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(104, 188, 204, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 188, 204, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 188, 204, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 188, 204, 0.4);
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 147, 183, 245);
  background: rgba(38, 42, 58, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(147, 183, 245, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(147, 183, 245, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(147, 183, 245, 0.4);
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 247, 157, 124);
  background: rgba(38, 42, 58, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(247, 157, 124, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(247, 157, 124, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(247, 157, 124, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(247, 157, 124, 0.4);
  border-top-width: 1px;
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 147, 183, 245;
  background: rgba(147, 183, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-left-color: rgba(147, 183, 245, 0.4);
  border-right-color: rgba(147, 183, 245, 0.4);
  border-top-color: rgba(147, 183, 245, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(147, 183, 245));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(198, 206, 239);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
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

html[saved-theme="dark"] body .callout[data-callout="seealso"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgba(36, 39, 52, 0.3);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: var(--text-normal, rgb(198, 206, 239));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(42, 45, 61));
  border-bottom-color: rgb(115, 120, 145);
  border-left-color: rgb(115, 120, 145);
  border-right-color: rgb(115, 120, 145);
  border-top-color: rgb(115, 120, 145);
  box-shadow: var(--shadow-l, rgba(36, 39, 52, 0.07) 0px 1.8px 7.3px 0px, rgba(36, 39, 52, 0.114) 0px 6.3px 24.7px 0px, rgba(36, 39, 52, 0.2) 0px 30px 90px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(198, 206, 239);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 206, 239) none 0px;
  text-decoration-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(198, 206, 239, 0.075));
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(115, 120, 145);
  border-left-color: rgb(115, 120, 145);
  border-right-color: rgb(115, 120, 145);
  border-top-color: rgb(115, 120, 145);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 42, 58);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(198, 206, 239, 0.075));
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(198, 206, 239, 0.075));
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgba(235, 188, 186, 0.1));
  --pill-background-hover: var(--tag-background-hover, rgba(235, 188, 186, 0.2));
  --pill-border-color: var(--tag-border-color, rgba(235, 188, 186, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, rgba(235, 188, 186, 0.15));
  --pill-color: var(--tag-color, rgb(235, 188, 186));
  --pill-color-hover: var(--tag-color-hover, rgb(235, 188, 186));
  --pill-color-remove: var(--tag-color, rgb(235, 188, 186));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(235, 188, 186));
  background-color: var(--pill-background, rgba(235, 188, 186, 0.1));
  border-bottom-color: rgba(235, 188, 186, 0.15);
  border-left-color: rgba(235, 188, 186, 0.15);
  border-right-color: rgba(235, 188, 186, 0.15);
  border-top-color: rgba(235, 188, 186, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(255, 98, 107));
  font-family: var(--h1-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(255, 98, 107));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(235, 188, 186));
  font-family: var(--h2-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(255, 98, 107));
  font-family: var(--inline-title-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(104, 188, 204));
  font-family: var(--h3-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(137, 199, 223));
  font-family: var(--h4-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(147, 183, 245));
  font-family: var(--h5-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(128, 216, 220));
  font-family: var(--h6-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 147, 183, 245);
  border-bottom-color: rgba(147, 183, 245, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(147, 183, 245, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(147, 183, 245, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(147, 183, 245, 0.4);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(36, 39, 52, 0.4);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(148, 155, 183));
  font-family: var(--font-family-folder-file-title, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(148, 155, 183));
  font-family: var(--font-family-folder-file-title, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(198, 206, 239);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: var(--icon-color, rgb(148, 155, 183));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(38, 42, 58));
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: var(--status-bar-text-color, rgb(148, 155, 183));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(148, 155, 183);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(148, 155, 183));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(148, 155, 183);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(148, 155, 183);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(148, 155, 183));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: var(--icon-color, rgb(148, 155, 183));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(148, 155, 183);
  stroke: rgb(148, 155, 183);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(165, 172, 201));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: var(--blockquote-background-color, rgba(0, 0, 0, 0));
  color: var(--unresolved-link-color, rgb(198, 206, 239));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(38, 42, 58));
  border-color: rgb(198, 206, 239);
  box-shadow: var(--input-shadow, rgba(198, 206, 239, 0.09) 0px 0.5px 0.5px 0.5px inset, rgba(36, 39, 52, 0.15) 0px 2px 4px 0px, rgba(36, 39, 52, 0.1) 0px 1px 1.5px 0px, rgba(36, 39, 52, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgb(65, 69, 89);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(65, 69, 89);
  color: var(--table-header-color, rgb(198, 206, 239));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: var(--text-muted, rgb(148, 155, 183));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: rgb(148, 155, 183);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(65, 69, 89);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, rgba(235, 188, 186, 0.1));
  --pill-background-hover: var(--tag-background-hover, rgba(235, 188, 186, 0.2));
  --pill-border-color: var(--tag-border-color, rgba(235, 188, 186, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, rgba(235, 188, 186, 0.15));
  --pill-color: var(--tag-color, rgb(235, 188, 186));
  --pill-color-hover: var(--tag-color-hover, rgb(235, 188, 186));
  --pill-color-remove: var(--tag-color, rgb(235, 188, 186));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(235, 188, 186));
  background-color: var(--pill-background, rgba(235, 188, 186, 0.1));
  color: var(--pill-color, rgb(235, 188, 186));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(148, 155, 183);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(42, 45, 61));
  color: var(--text-normal, rgb(198, 206, 239));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(38, 42, 58));
  border-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(36, 39, 52));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(198, 206, 239);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(38, 42, 58));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(198, 206, 239));
}

html[saved-theme="dark"] body abbr {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(148, 155, 183);
  border-left-color: rgb(148, 155, 183);
  border-right-color: rgb(148, 155, 183);
  border-top-color: rgb(148, 155, 183);
  color: var(--text-normal, rgb(148, 155, 183));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(38, 42, 58));
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
  color: var(--code-normal, rgb(198, 206, 239));
  font-family: var(--font-monospace, "??", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(198, 206, 239);
  border-left-color: rgb(198, 206, 239);
  border-right-color: rgb(198, 206, 239);
  border-top-color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body sub {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body summary {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body sup {
  color: rgb(198, 206, 239);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(235, 188, 186, 0.1));
  border-bottom-color: rgb(235, 188, 186);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-left-color: rgb(235, 188, 186);
  border-right-color: rgb(235, 188, 186);
  border-top-color: rgb(235, 188, 186);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  color: var(--text-accent, rgb(235, 188, 186));
}`,
  },
  light: {
    base: `:root:root {
  --accent: var(--lily, 222, 149, 132);
  --background-modifier-active-hover: rgba(var(--accent), 0.15);
  --background-modifier-border: rgb(var(--surface1));
  --background-modifier-border-focus: rgb(var(--overlay0));
  --background-modifier-border-hover: rgb(var(--surface2));
  --background-modifier-cover: #00000022;
  --background-modifier-error: rgba(var(--red), 1);
  --background-modifier-error-hover: rgba(var(--red), 0.9);
  --background-modifier-error-rgb: var(--red, 240, 68, 114);
  --background-modifier-form-field: rgba(var(--exterior), 0.3);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgba(254, 241, 241, 0.3));
  --background-modifier-hover: rgba(var(--text), 0.075);
  --background-modifier-message: rgba(var(--exterior), 0.9);
  --background-modifier-success: rgba(var(--green), 1);
  --background-modifier-success-hover: rgba(var(--green), 0.9);
  --background-modifier-success-rgb: var(--green, 64, 155, 40);
  --background-primary: rgb(var(--base));
  --background-primary-alt: rgb(var(--side));
  --background-secondary: rgb(var(--side));
  --background-secondary-alt: rgb(var(--exterior));
  --background-secondary-translucent: rgba(var(--base), 0.1);
  --background-secondary-translucent-1: rgba(var(--base), 0.1);
  --base: 252, 252, 252;
  --bases-cards-background: var(--background-primary, rgb(252, 252, 252));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(243, 236, 243));
  --bases-embed-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --bases-group-heading-property-color: var(--text-muted, rgb(76, 79, 105));
  --bases-table-border-color: var(--table-border-color, rgb(188, 192, 204));
  --bases-table-cell-background-active: var(--background-primary, rgb(252, 252, 252));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(243, 236, 243));
  --bases-table-group-background: var(--background-primary-alt, rgb(243, 236, 243));
  --bases-table-header-background: var(--background-primary, rgb(252, 252, 252));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --bases-table-header-color: var(--text-muted, rgb(76, 79, 105));
  --bases-table-summary-background: var(--background-primary, rgb(252, 252, 252));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --bg-color-settings-0: #7d7d7d6b;
  --bg-color-settings-0-1: #ffffff77;
  --bg-color-settings-1: rgba(var(--base), 0.15);
  --bg-color-settings-2: rgba(var(--base), 0.3);
  --bg-color-settings-3: rgba(var(--base), 0.8);
  --bg-color-settings-4: rgba(var(--base), 0.7);
  --bg-color-settings-5: #d4d4d464;
  --bg-color-settings-6: #ffffff85;
  --blockquote-background-color: rgba(var(--exterior), 0.5);
  --blockquote-border-color: rgb(var(--accent));
  --blue: 71, 143, 238;
  --blur-depth: 10px;
  --blur-depth-cp: 10px;
  --bodyFont: var(--font-text-theme, var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif));
  --bold-color: rgb(var(--shib-bold-color, var(--red)));
  --callout-blend-mode: var(--highlight-mix-blend-mode, none);
  --callout-bug: var(--color-red-rgb, 240, 68, 114);
  --callout-content-padding: var(--size-4-2) var(--size-4-4, 0);
  --callout-default: var(--color-blue-rgb, 71, 143, 238);
  --callout-error: var(--color-red-rgb, 240, 68, 114);
  --callout-example: var(--color-purple-rgb, 176, 110, 201);
  --callout-fail: var(--color-red-rgb, 240, 68, 114);
  --callout-gallery-gap: 5px;
  --callout-important: var(--color-cyan-rgb, 23, 146, 153);
  --callout-info: var(--color-blue-rgb, 71, 143, 238);
  --callout-question: var(--color-orange-rgb, 249, 102, 50);
  --callout-success: var(--color-green-rgb, 64, 155, 40);
  --callout-summary: var(--color-cyan-rgb, 23, 146, 153);
  --callout-tip: var(--color-cyan-rgb, 23, 146, 153);
  --callout-title-padding: var(--size-4-4) var(--size-4-4, 8px);
  --callout-todo: var(--color-blue-rgb, 71, 143, 238);
  --callout-warning: var(--color-orange-rgb, 249, 102, 50);
  --canvas-background: var(--background-primary, rgb(252, 252, 252));
  --canvas-card-label-color: var(--text-faint, rgb(108, 111, 133));
  --canvas-color: var(--overlay0, 156, 160, 176);
  --canvas-color-1: var(--color-red-rgb, 240, 68, 114);
  --canvas-color-2: var(--color-orange-rgb, 249, 102, 50);
  --canvas-color-3: var(--color-yellow-rgb, 228, 147, 32);
  --canvas-color-4: var(--color-green-rgb, 64, 155, 40);
  --canvas-color-5: var(--color-cyan-rgb, 23, 146, 153);
  --canvas-color-6: var(--color-purple-rgb, 176, 110, 201);
  --canvas-dot-pattern: var(--color-base-30, rgb(188, 192, 204));
  --card-background-color: rgb(var(--exterior));
  --card-foreground-color: var(--background-primary, rgb(252, 252, 252));
  --cards-aspect-ratio: auto;
  --cards-background: rgb(var(--side));
  --cards-background-modifier-border: rgb(var(--surface1));
  --cards-border-width: 1px;
  --cards-columns: repeat;
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: var(--text-normal, rgb(76, 79, 105));
  --checkbox-border-color: var(--text-faint, rgb(108, 111, 133));
  --checkbox-border-color-hover: var(--text-muted, rgb(76, 79, 105));
  --checkbox-color: var(--interactive-accent, rgb(222, 149, 132));
  --checkbox-color-hover: var(--interactive-accent-hover, rgb(222, 149, 132));
  --checkbox-marker-color: var(--background-primary, rgb(252, 252, 252));
  --checklist-done-color: var(--text-muted, rgb(76, 79, 105));
  --code-background: var(--background-primary-alt, rgb(243, 236, 243));
  --code-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --code-bracket-background: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --code-comment: var(--text-faint, rgb(108, 111, 133));
  --code-function: var(--color-yellow, rgb(228, 147, 32));
  --code-important: var(--color-orange, rgb(249, 102, 50));
  --code-keyword: var(--color-pink, rgb(215, 125, 146));
  --code-normal: var(--text-normal, rgb(76, 79, 105));
  --code-operator: var(--color-red, rgb(240, 68, 114));
  --code-property: var(--color-cyan, rgb(23, 146, 153));
  --code-punctuation: var(--text-muted, rgb(76, 79, 105));
  --code-string: var(--color-green, rgb(64, 155, 40));
  --code-tag: var(--color-red, rgb(240, 68, 114));
  --code-value: var(--color-purple, rgb(176, 110, 201));
  --collapse-icon-color: var(--text-faint, rgb(108, 111, 133));
  --collapse-icon-color-collapsed: var(--text-accent, rgb(222, 149, 132));
  --color-accent: rgb(var(--accent));
  --color-accent-1: rgb(var(--accent));
  --color-accent-2: rgba(var(--accent), 0.9);
  --color-accent-translucent-001: hsla(var(--interactive-accent-hsl), 0.01);
  --color-accent-translucent-005: hsla(var(--interactive-accent-hsl), 0.05);
  --color-accent-translucent-01: hsla(var(--interactive-accent-hsl), 0.1);
  --color-accent-translucent-015: hsla(var(--interactive-accent-hsl), 0.15);
  --color-accent-translucent-02: hsla(var(--interactive-accent-hsl), 0.2);
  --color-accent-translucent-04: hsla(var(--interactive-accent-hsl), 0.4);
  --color-accent-translucent-06: hsla(var(--interactive-accent-hsl), 0.6);
  --color-base-00: rgb(var(--exterior));
  --color-base-10: rgb(var(--side));
  --color-base-100: rgb(var(--text));
  --color-base-20: rgb(var(--base));
  --color-base-25: rgb(var(--surface0));
  --color-base-30: rgb(var(--surface1));
  --color-base-35: rgb(var(--surface2));
  --color-base-40: rgb(var(--overlay0));
  --color-base-50: rgb(var(--overlay1));
  --color-base-60: rgb(var(--overlay2));
  --color-base-70: rgb(var(--subtext0));
  --color-black: hsl(27, 15%, 12%);
  --color-blue: rgb(var(--blue));
  --color-blue-rgb: var(--blue, 71, 143, 238);
  --color-cyan: rgb(var(--sea));
  --color-cyan-rgb: var(--sea, 23, 146, 153);
  --color-green: rgb(var(--green));
  --color-green-rgb: var(--green, 64, 155, 40);
  --color-lightorange: rgb(var(--lemon));
  --color-lightorange-rgb: var(--lemon, 195, 173, 87);
  --color-lightpink: rgb(var(--lily));
  --color-lightpink-rgb: var(--lily, 222, 149, 132);
  --color-orange: rgb(var(--orange));
  --color-orange-rgb: var(--orange, 249, 102, 50);
  --color-pink: rgb(var(--rose));
  --color-pink-rgb: var(--rose, 215, 125, 146);
  --color-purple: rgb(var(--violet));
  --color-purple-rgb: var(--violet, 176, 110, 201);
  --color-red: rgb(var(--red));
  --color-red-rgb: var(--red, 240, 68, 114);
  --color-white: hsl(36, 36%, 96.9%);
  --color-yellow: rgb(var(--yellow));
  --color-yellow-rgb: var(--yellow, 228, 147, 32);
  --cyan: 37, 189, 209;
  --dark: var(--text-normal, rgb(var(--text)));
  --darkgray: var(--text-normal, rgb(var(--text)));
  --divider-color: var(--background-modifier-border, rgb(188, 192, 204));
  --divider-color-hover: var(--interactive-accent, rgb(222, 149, 132));
  --dropdown-background: var(--interactive-normal, rgb(221, 225, 238));
  --dropdown-background-hover: var(--interactive-hover, rgb(188, 192, 204));
  --exterior: 254, 241, 241;
  --external-link-color: rgba(var(--accent), 0.8);
  --file-header-background: var(--background-primary, rgb(252, 252, 252));
  --file-header-background-focused: var(--background-primary, rgb(252, 252, 252));
  --flair-background: var(--interactive-normal, rgb(221, 225, 238));
  --flair-color: var(--text-normal, rgb(76, 79, 105));
  --font-family-folder-file-title: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-family-inline-code: var(--font-monospace-theme, monospace);
  --font-family-tag: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-family-vault: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-family-vertical-bar: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-mermaid: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: monospace;
  --font-size-code: 1em;
  --font-size-file-header-title: 0.93em;
  --font-size-folder-and-file: 0.95em;
  --font-size-vault-name: 0.95em;
  --font-text-theme: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --footnote-divider-color: var(--metadata-divider-color, rgb(188, 192, 204));
  --footnote-id-color: var(--text-muted, rgb(76, 79, 105));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(108, 111, 133));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(76, 79, 105, 0.075));
  --graph-arrow: rgb(var(--violet));
  --graph-circle-fill: rgb(var(--blue));
  --graph-circle-fill-highlight: rgb(var(--blue));
  --graph-circle-fill-unresolved: rgb(var(--red));
  --graph-circle-outline: rgb(var(--rose));
  --graph-fill-attachment: rgb(var(--sea));
  --graph-fill-tag: rgb(var(--orange));
  --graph-line: var(--text-muted, rgb(76, 79, 105));
  --graph-line-highlight: var(--interactive-accent, rgb(222, 149, 132));
  --graph-node: var(--text-muted, rgb(76, 79, 105));
  --graph-node-attachment: var(--color-yellow, rgb(228, 147, 32));
  --graph-node-focused: var(--text-accent, rgb(222, 149, 132));
  --graph-node-tag: var(--color-green, rgb(64, 155, 40));
  --graph-node-unresolved: var(--text-faint, rgb(108, 111, 133));
  --graph-text: var(--text-normal, rgb(76, 79, 105));
  --gray: var(--text-muted, rgb(var(--overlay2)));
  --green: 64, 155, 40;
  --h1-color: rgb(var(--red));
  --h1-font: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h2-color: rgb(var(--lily));
  --h2-font: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h3-color: rgb(var(--sea));
  --h3-font: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h4-color: rgb(var(--cyan));
  --h4-font: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h5-color: rgb(var(--blue));
  --h5-font: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h6-color: rgb(var(--turquoise));
  --h6-font: var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --header-height: var(--shib-alt-tab-custom-height, 40px);
  --headerFont: var(--font-text-theme, var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif));
  --heading-formatting: rgb(var(--accent));
  --highlight: var(--text-highlight-bg, rgba(var(--orange), 0.2));
  --highlight-mix-blend-mode: none;
  --hr-color: var(--background-modifier-border, rgb(188, 192, 204));
  --hr-outline-color: var(--background-modifier-border, rgb(188, 192, 204));
  --icon-color: var(--text-muted, rgb(76, 79, 105));
  --icon-color-active: var(--text-accent, rgb(222, 149, 132));
  --icon-color-focused: var(--color-accent, rgb(222, 149, 132));
  --icon-color-hover: var(--text-muted, rgb(76, 79, 105));
  --img-border-radius: 15px;
  --img-max-height: 300px;
  --img-max-height-list: 270px;
  --img-max-width: 350px;
  --img-max-width-list: 300px;
  --inline-title-color: var(--h1-color, rgb(240, 68, 114));
  --inline-title-font: var(--h1-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --input-date-separator: var(--text-faint, rgb(108, 111, 133));
  --input-placeholder-color: var(--text-faint, rgb(108, 111, 133));
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(var(--text), 0.09), 0 2px 4px 0 rgba(var(--exterior), 0.15),
    0 1px 1.5px 0 rgba(var(--exterior), 0.1), 0 1px 2px 0 rgba(var(--exterior), 0.2), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(var(--text), 0.16), 0 2px 3px 0 rgba(var(--exterior), 0.3),
    0 1px 1.5px 0 rgba(var(--exterior), 0.2), 0 1px 2px 0 rgba(var(--exterior), 0.4), 0 0 0 0 transparent;
  --interactive-accent: rgb(var(--accent));
  --interactive-accent-hover: rgb(var(--accent));
  --interactive-accent-rgb: var(--accent, 222, 149, 132);
  --interactive-hover: rgb(var(--surface1));
  --interactive-normal: rgb(var(--surface0));
  --interactive-success: rgb(var(--green));
  --internal-link-color: rgba(var(--accent), 0.9);
  --italic-color: rgb(var(--shib-italic-color, var(--green)));
  --lemon: 195, 173, 87;
  --light: var(--background-primary, rgb(var(--base)));
  --lightgray: var(--background-secondary, rgb(var(--side)));
  --lily: 222, 149, 132;
  --link-color: var(--text-accent, rgb(222, 149, 132));
  --link-color-hover: var(--text-accent-hover, rgb(222, 149, 132));
  --link-external-color: var(--text-accent, rgb(222, 149, 132));
  --link-external-color-hover: var(--text-accent-hover, rgb(222, 149, 132));
  --link-unresolved-color: var(--text-accent, rgb(222, 149, 132));
  --list-marker-color: var(--text-faint, rgb(108, 111, 133));
  --list-marker-color-collapsed: var(--text-accent, rgb(222, 149, 132));
  --list-marker-color-hover: var(--text-muted, rgb(76, 79, 105));
  --max-width-image: 90%;
  --menu-background: var(--background-secondary, rgb(243, 236, 243));
  --menu-border-color: var(--background-modifier-border-hover, rgb(221, 225, 238));
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(254, 241, 241, 0.121), 0px 3.4px 6.7px rgba(254, 241, 241, 0.179),
    0px 15px 30px rgba(254, 241, 241, 0.3));
  --metadata-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --metadata-divider-color: var(--background-modifier-border, rgb(188, 192, 204));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --metadata-input-text-color: var(--text-normal, rgb(76, 79, 105));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --metadata-label-text-color: var(--text-muted, rgb(76, 79, 105));
  --metadata-label-text-color-hover: var(--text-muted, rgb(76, 79, 105));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --min-width-image: 50%;
  --modal-background: var(--background-primary, rgb(252, 252, 252));
  --modal-border-color: rgb(var(--surface0));
  --mono-rgb-100: var(--text, 76, 79, 105);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(108, 111, 133));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(108, 111, 133));
  --nav-folder-title-color: rgba(var(--base));
  --nav-heading-color: var(--text-normal, rgb(76, 79, 105));
  --nav-heading-color-collapsed: var(--text-faint, rgb(108, 111, 133));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(76, 79, 105));
  --nav-heading-color-hover: var(--text-normal, rgb(76, 79, 105));
  --nav-indentation-guide-color: rgba(var(--exterior), 0.4);
  --nav-item-background-active: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  --nav-item-background-selected: rgba(var(--accent), 0.2);
  --nav-item-color: var(--text-muted, rgb(76, 79, 105));
  --nav-item-color-active: var(--text-normal, rgb(76, 79, 105));
  --nav-item-color-highlighted: var(--text-accent, rgb(222, 149, 132));
  --nav-item-color-hover: var(--text-normal, rgb(76, 79, 105));
  --nav-item-color-selected: var(--text-normal, rgb(76, 79, 105));
  --nav-tag-color: var(--text-faint, rgb(108, 111, 133));
  --nav-tag-color-active: var(--text-muted, rgb(76, 79, 105));
  --nav-tag-color-hover: var(--text-muted, rgb(76, 79, 105));
  --orange: 249, 102, 50;
  --outline-border: 2px;
  --overlay0: 156, 160, 176;
  --overlay1: 140, 143, 161;
  --overlay2: 76, 79, 105;
  --panel-page-opacity: 0.25;
  --pdf-background: var(--background-primary, rgb(252, 252, 252));
  --pdf-page-background: var(--background-primary, rgb(252, 252, 252));
  --pdf-sidebar-background: var(--background-primary, rgb(252, 252, 252));
  --pill-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --pill-border-color-hover: var(--background-modifier-border-hover, rgb(221, 225, 238));
  --pill-color: var(--text-muted, rgb(76, 79, 105));
  --pill-color-hover: var(--text-normal, rgb(76, 79, 105));
  --pill-color-remove: var(--text-faint, rgb(108, 111, 133));
  --pill-color-remove-hover: var(--text-accent, rgb(222, 149, 132));
  --prompt-background: var(--background-primary, rgb(252, 252, 252));
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(252, 252, 252) 65%, transparent) linear-gradient(rgb(252, 252, 252), color-mix(in srgb, rgb(252, 252, 252) 65%, transparent)));
  --red: 240, 68, 114;
  --ribbon-background: var(--background-secondary, rgb(243, 236, 243));
  --ribbon-background-collapsed: var(--background-primary, rgb(252, 252, 252));
  --rose: 215, 125, 146;
  --sea: 23, 146, 153;
  --search-clear-button-color: var(--text-muted, rgb(76, 79, 105));
  --search-icon-color: var(--text-muted, rgb(76, 79, 105));
  --search-result-background: var(--background-primary, rgb(252, 252, 252));
  --secondary: var(--text-accent, rgb(var(--accent)));
  --setting-group-heading-color: var(--text-normal, rgb(76, 79, 105));
  --setting-items-background: var(--background-primary-alt, rgb(243, 236, 243));
  --setting-items-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --shadow-l: 0px 1.8px 7.3px rgba(var(--exterior), 0.071), 0px 6.3px 24.7px rgba(var(--exterior), 0.112),
    0px 30px 90px rgba(var(--exterior), 0.2);
  --shadow-s: 0px 1px 2px rgba(var(--exterior), 0.121), 0px 3.4px 6.7px rgba(var(--exterior), 0.179),
    0px 15px 30px rgba(var(--exterior), 0.3);
  --shib-bold-color: var(--red, 240, 68, 114);
  --shib-callout-fold-position: 1;
  --shib-italic-color: var(--green, 64, 155, 40);
  --shib-speech-bubble-opacity: var(--shib-sp-op-light, 0.5);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(76, 79, 105));
  --shiki-code-background: var(--code-background, rgb(243, 236, 243));
  --shiki-code-comment: var(--text-faint, rgb(108, 111, 133));
  --shiki-code-function: var(--color-green, rgb(64, 155, 40));
  --shiki-code-important: var(--color-orange, rgb(249, 102, 50));
  --shiki-code-keyword: var(--color-pink, rgb(215, 125, 146));
  --shiki-code-normal: var(--text-muted, rgb(76, 79, 105));
  --shiki-code-property: var(--color-cyan, rgb(23, 146, 153));
  --shiki-code-punctuation: var(--text-muted, rgb(76, 79, 105));
  --shiki-code-string: var(--color-yellow, rgb(228, 147, 32));
  --shiki-code-value: var(--color-purple, rgb(176, 110, 201));
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --shiki-gutter-text-color: var(--text-faint, rgb(108, 111, 133));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(76, 79, 105));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(76, 79, 105));
  --shiki-terminal-dots-color: var(--text-faint, rgb(108, 111, 133));
  --shiki-tooltip-background: var(--background-modifier-message, rgba(254, 241, 241, 0.9));
  --side: 243, 236, 243;
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgb(221, 225, 238));
  --slider-track-background: var(--background-modifier-border, rgb(188, 192, 204));
  --status-bar-background: var(--background-secondary, rgb(243, 236, 243));
  --status-bar-border-color: var(--divider-color, rgb(188, 192, 204));
  --status-bar-text-color: var(--text-muted, rgb(76, 79, 105));
  --subtext0: 108, 111, 133;
  --subtext1: 92, 95, 119;
  --suggestion-background: var(--background-primary, rgb(252, 252, 252));
  --surface0: 221, 225, 238;
  --surface1: 188, 192, 204;
  --surface2: 221, 225, 238;
  --sync-avatar-color-1: var(--color-red, rgb(240, 68, 114));
  --sync-avatar-color-2: var(--color-orange, rgb(249, 102, 50));
  --sync-avatar-color-3: var(--color-yellow, rgb(228, 147, 32));
  --sync-avatar-color-4: var(--color-green, rgb(64, 155, 40));
  --sync-avatar-color-5: var(--color-cyan, rgb(23, 146, 153));
  --sync-avatar-color-6: var(--color-blue, rgb(71, 143, 238));
  --sync-avatar-color-7: var(--color-purple, rgb(176, 110, 201));
  --sync-avatar-color-8: var(--color-pink, rgb(215, 125, 146));
  --tab-background-active: var(--background-primary, rgb(252, 252, 252));
  --tab-container-background: var(--background-secondary, rgb(243, 236, 243));
  --tab-divider-color: var(--background-modifier-border-hover, rgb(221, 225, 238));
  --tab-inactive-color: rgb(var(--side));
  --tab-outline-color: var(--divider-color, rgb(188, 192, 204));
  --tab-radius: var(--radius-s, 0px);
  --tab-stacked-header-width: var(--shib-stacked-header-width, 40px);
  --tab-switcher-background: var(--background-secondary, rgb(243, 236, 243));
  --tab-text-color: var(--text-faint, rgb(108, 111, 133));
  --tab-text-color-active: var(--text-muted, rgb(76, 79, 105));
  --tab-text-color-focused: var(--text-muted, rgb(76, 79, 105));
  --tab-text-color-focused-active: var(--text-muted, rgb(76, 79, 105));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(76, 79, 105));
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(222, 149, 132));
  --table-add-button-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --table-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --table-border-width: var(--shib-table-thickness, 1px);
  --table-drag-handle-background-active: var(--table-selection-border-color, rgb(222, 149, 132));
  --table-drag-handle-color: var(--text-faint, rgb(108, 111, 133));
  --table-drag-handle-color-active: var(--text-on-accent, rgb(252, 252, 252));
  --table-header-border-color: var(--table-border-color, rgb(188, 192, 204));
  --table-header-color: var(--text-normal, rgb(76, 79, 105));
  --table-selection-blend-mode: var(--highlight-mix-blend-mode, none);
  --table-selection-border-color: var(--interactive-accent, rgb(222, 149, 132));
  --tag-background: rgba(var(--accent), 0.1);
  --tag-background-hover: rgba(var(--accent), 0.2);
  --tag-border-color: rgba(var(--accent), 0.15);
  --tag-border-color-hover: rgba(var(--accent), 0.15);
  --tag-color: var(--text-accent, rgb(222, 149, 132));
  --tag-color-hover: var(--text-accent, rgb(222, 149, 132));
  --tertiary: var(--text-accent-hover, rgb(var(--accent)));
  --text: 76, 79, 105;
  --text-accent: rgb(var(--accent));
  --text-accent-hover: rgb(var(--accent));
  --text-error: rgb(var(--red));
  --text-error-hover: rgba(var(--red), 0.8);
  --text-faint: rgb(var(--subtext0));
  --text-highlight-bg: rgba(var(--orange), 0.2);
  --text-highlight-bg-active: rgba(var(--orange), 0.4);
  --text-muted: rgb(var(--overlay2));
  --text-muted-rgb: var(--overlay2, 76, 79, 105);
  --text-normal: rgb(var(--text));
  --text-on-accent: rgb(var(--base));
  --text-selection: rgba(var(--blue), 0.15);
  --text-success: rgb(var(--green));
  --text-warning: var(--color-orange, rgb(249, 102, 50));
  --textHighlight: var(--text-highlight-bg, rgba(var(--orange), 0.2));
  --titleFont: var(--font-text-theme, var(--font-default, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif));
  --titlebar-background: var(--background-secondary, rgb(243, 236, 243));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(254, 241, 241));
  --titlebar-border-color: var(--background-modifier-border, rgb(188, 192, 204));
  --titlebar-text-color: var(--text-muted, rgb(76, 79, 105));
  --titlebar-text-color-focused: var(--color-accent, rgb(222, 149, 132));
  --turquoise: 58, 161, 182;
  --unresolved-link-color: rgba(var(--accent), 0.8);
  --vault-profile-color: var(--text-normal, rgb(76, 79, 105));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(76, 79, 105));
  --violet: 176, 110, 201;
  --width-image-gallery: 200px;
  --workspace-background-translucent: rgba(var(--exterior), 0.6);
  --yellow: 228, 147, 32;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, rgb(243, 236, 243));
  background-color: var(--tab-container-background, rgb(243, 236, 243));
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(252, 252, 252));
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(243, 236, 243));
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, rgb(243, 236, 243));
  background-color: var(--tab-container-background, rgb(243, 236, 243));
  border-left-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(240, 68, 114));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 68, 114) none 0px;
  text-decoration-color: rgb(240, 68, 114);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(64, 155, 40));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(64, 155, 40) none 0px;
  text-decoration-color: rgb(64, 155, 40);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(64, 155, 40));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(64, 155, 40) none 0px;
  text-decoration-color: rgb(64, 155, 40);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(240, 68, 114));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(240, 68, 114) none 0px;
  text-decoration-color: rgb(240, 68, 114);
}

html[saved-theme="light"] body .text-highlight {
  --bold-color: rgb(var(--text));
  --italic-color: rgb(var(--text));
  background-color: var(--text-highlight-bg, rgba(249, 102, 50, 0.2));
  color: var(--text-normal, rgb(76, 79, 105));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body del {
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(222, 149, 132));
  border-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(76, 79, 105));
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--external-link-color, rgba(222, 149, 132, 0.8));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(222, 149, 132, 0.8) none 0px;
  text-decoration-color: rgba(222, 149, 132, 0.8);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--internal-link-color, rgba(222, 149, 132, 0.9));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(222, 149, 132, 0.9) none 0px;
  text-decoration-color: rgba(222, 149, 132, 0.9);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--unresolved-link-color, rgba(222, 149, 132, 0.8));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(222, 149, 132, 0.8) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body dt {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ol > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(108, 111, 133));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(254, 241, 241, 0.5));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(188, 192, 204);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(188, 192, 204);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(188, 192, 204);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(188, 192, 204);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: var(--heading-spacing, 20px);
  width: 661px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--table-text-color, rgb(76, 79, 105));
  text-align: var(--shib-table-align-td, center);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--table-header-color, rgb(76, 79, 105));
  text-align: var(--shib-table-align-th, center);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(243, 236, 243));
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--code-normal, rgb(76, 79, 105));
  font-family: var(--font-family-inline-code, monospace);
  padding-bottom: 1px;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(243, 236, 243));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figcaption {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, rgb(243, 236, 243));
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(240, 68, 114);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(240, 68, 114);
  border-radius: 15px;
  border-right-color: rgb(240, 68, 114);
  border-top-color: rgb(240, 68, 114);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(243, 236, 243));
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(222, 149, 132);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(76, 79, 105);
  text-decoration: line-through;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 530'%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 530'%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 550'%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 550'%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 179' version='1.1'%3E%3Cpath d='M 22.640 6.632 C 15.939 8.690, 8.886 15.824, 6.949 22.503 C 5.751 26.633, 5.500 38.514, 5.500 91 L 5.500 154.500 8.359 160.323 C 11.460 166.639, 16.745 171.265, 22.911 173.063 C 25.298 173.758, 48.615 174.007, 92.500 173.804 C 155.743 173.513, 158.625 173.419, 161.500 171.568 C 166.511 168.341, 170.073 164.704, 172.342 160.500 C 174.478 156.541, 174.503 155.858, 174.792 93.705 C 174.977 54.030, 174.709 28.880, 174.066 25.397 C 172.322 15.963, 165.208 8.466, 155.807 6.154 C 152.501 5.341, 132.856 5.021, 89.307 5.070 C 37.483 5.128, 26.715 5.380, 22.640 6.632 M 72.564 43.123 C 65.124 44.867, 58.092 52.842, 58.022 59.615 C 57.982 63.481, 61.727 67, 65.881 67 C 69.991 67, 71.779 65.891, 74.343 61.750 L 76.046 59 87.976 59 C 100.970 59, 104.518 59.944, 105.447 63.646 C 106.421 67.526, 104.509 69.604, 94.434 75.617 C 89.189 78.747, 84.246 82.238, 83.449 83.376 C 81.722 85.842, 81.548 92.914, 83.130 96.385 C 86.088 102.877, 96.867 101.553, 98.153 94.540 C 98.372 93.344, 101.499 90.811, 106.178 88.040 C 110.394 85.543, 114.842 82.600, 116.063 81.500 C 122.168 75.999, 123.935 62.981, 119.674 54.907 C 116.650 49.178, 110.395 44.465, 103.994 43.092 C 97.948 41.795, 78.146 41.815, 72.564 43.123 M 86.212 115.129 C 82.159 116.297, 79.009 121.125, 79.004 126.173 C 78.994 135.843, 91.548 140.543, 98.586 133.505 C 100.471 131.620, 101 130.033, 101 126.268 C 101 120.546, 99.053 117.338, 94.401 115.394 C 90.647 113.826, 90.721 113.828, 86.212 115.129' stroke='none' fill='%23142c4c' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 179' version='1.1'%3E%3Cpath d='M 22.640 6.632 C 15.939 8.690, 8.886 15.824, 6.949 22.503 C 5.751 26.633, 5.500 38.514, 5.500 91 L 5.500 154.500 8.359 160.323 C 11.460 166.639, 16.745 171.265, 22.911 173.063 C 25.298 173.758, 48.615 174.007, 92.500 173.804 C 155.743 173.513, 158.625 173.419, 161.500 171.568 C 166.511 168.341, 170.073 164.704, 172.342 160.500 C 174.478 156.541, 174.503 155.858, 174.792 93.705 C 174.977 54.030, 174.709 28.880, 174.066 25.397 C 172.322 15.963, 165.208 8.466, 155.807 6.154 C 152.501 5.341, 132.856 5.021, 89.307 5.070 C 37.483 5.128, 26.715 5.380, 22.640 6.632 M 72.564 43.123 C 65.124 44.867, 58.092 52.842, 58.022 59.615 C 57.982 63.481, 61.727 67, 65.881 67 C 69.991 67, 71.779 65.891, 74.343 61.750 L 76.046 59 87.976 59 C 100.970 59, 104.518 59.944, 105.447 63.646 C 106.421 67.526, 104.509 69.604, 94.434 75.617 C 89.189 78.747, 84.246 82.238, 83.449 83.376 C 81.722 85.842, 81.548 92.914, 83.130 96.385 C 86.088 102.877, 96.867 101.553, 98.153 94.540 C 98.372 93.344, 101.499 90.811, 106.178 88.040 C 110.394 85.543, 114.842 82.600, 116.063 81.500 C 122.168 75.999, 123.935 62.981, 119.674 54.907 C 116.650 49.178, 110.395 44.465, 103.994 43.092 C 97.948 41.795, 78.146 41.815, 72.564 43.123 M 86.212 115.129 C 82.159 116.297, 79.009 121.125, 79.004 126.173 C 78.994 135.843, 91.548 140.543, 98.586 133.505 C 100.471 131.620, 101 130.033, 101 126.268 C 101 120.546, 99.053 117.338, 94.401 115.394 C 90.647 113.826, 90.721 113.828, 86.212 115.129' stroke='none' fill='%23142c4c' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(23, 146, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 143, 161);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 155, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 444 502'%3E%3Cpath d='M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 444 502'%3E%3Cpath d='M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(58, 161, 182);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 470 '%3E%3Cpath d='M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 470 '%3E%3Cpath d='M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(37, 189, 209);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 68, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 68, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 68, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3Cpath d='M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3Cpath d='M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(71, 143, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(195, 173, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(71, 143, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(195, 173, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 155, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(195, 173, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 177 175' version='1.1'%3E%3Cpath d='M 40.344 3.037 C 30.953 4.904, 22.308 11.667, 17.923 20.577 L 15.500 25.500 15.500 86 C 15.500 145.687, 15.529 146.562, 17.637 151.122 C 20.705 157.757, 26.321 163.519, 32.839 166.720 L 38.500 169.500 100.250 169.779 L 162 170.059 162 159.529 L 162 149 156.500 149 L 151 149 151 138.500 L 151 128 156.508 128 L 162.015 128 161.758 65.250 L 161.500 2.500 103 2.356 C 70.825 2.276, 42.630 2.583, 40.344 3.037 M 57.195 49.750 L 57.500 54.500 93.500 54.500 L 129.500 54.500 129.805 49.750 L 130.110 45 93.500 45 L 56.890 45 57.195 49.750 M 57 70.500 L 57 75 93.500 75 L 130 75 130 70.500 L 130 66 93.500 66 L 57 66 57 70.500 M 42 129.273 C 40.625 129.956, 38.662 132.228, 37.638 134.320 C 35.970 137.728, 35.920 138.508, 37.163 141.812 C 39.877 149.030, 39.965 149.042, 87.500 148.754 L 129.500 148.500 129.785 138.250 L 130.070 128 87.285 128.015 C 55.215 128.026, 43.874 128.341, 42 129.273' stroke='none' fill='%23142b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 177 175' version='1.1'%3E%3Cpath d='M 40.344 3.037 C 30.953 4.904, 22.308 11.667, 17.923 20.577 L 15.500 25.500 15.500 86 C 15.500 145.687, 15.529 146.562, 17.637 151.122 C 20.705 157.757, 26.321 163.519, 32.839 166.720 L 38.500 169.500 100.250 169.779 L 162 170.059 162 159.529 L 162 149 156.500 149 L 151 149 151 138.500 L 151 128 156.508 128 L 162.015 128 161.758 65.250 L 161.500 2.500 103 2.356 C 70.825 2.276, 42.630 2.583, 40.344 3.037 M 57.195 49.750 L 57.500 54.500 93.500 54.500 L 129.500 54.500 129.805 49.750 L 130.110 45 93.500 45 L 56.890 45 57.195 49.750 M 57 70.500 L 57 75 93.500 75 L 130 75 130 70.500 L 130 66 93.500 66 L 57 66 57 70.500 M 42 129.273 C 40.625 129.956, 38.662 132.228, 37.638 134.320 C 35.970 137.728, 35.920 138.508, 37.163 141.812 C 39.877 149.030, 39.965 149.042, 87.500 148.754 L 129.500 148.500 129.785 138.250 L 130.070 128 87.285 128.015 C 55.215 128.026, 43.874 128.341, 42 129.273' stroke='none' fill='%23142b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 170' version='1.1'%3E%3Cpath d='M 73.633 4.553 C 45.770 10.089, 24.575 26.633, 12.450 52.309 C 6.771 64.334, 5.500 70.677, 5.500 87 C 5.500 103.323, 6.771 109.666, 12.450 121.691 C 24.186 146.544, 45.625 163.776, 71.436 169.103 C 120.309 179.190, 166.043 146.223, 172.153 96.501 C 176.830 58.443, 153.240 20.809, 116.500 7.718 C 103.999 3.264, 86.587 1.978, 73.633 4.553 M 84.949 41.840 C 83.486 43.025, 82.467 45.215, 82.088 47.992 C 81.552 51.922, 81.154 52.423, 77.591 53.654 C 71.868 55.632, 67.487 59.363, 65.102 64.289 C 62.395 69.882, 62.453 75.464, 65.271 80.500 C 67.957 85.299, 75.837 89.608, 89.275 93.627 C 102.498 97.582, 106.049 101.456, 100.471 105.844 C 96.083 109.296, 91.116 109.441, 79.440 106.461 C 67.550 103.427, 64.583 103.831, 63.374 108.647 C 62.105 113.701, 64.649 116.208, 73.782 118.907 L 82 121.335 82.015 125.417 C 82.024 127.663, 82.361 129.995, 82.765 130.600 C 84.145 132.667, 87.955 134.049, 90.506 133.409 C 93.612 132.630, 95 130.244, 95 125.684 C 95 122.470, 95.286 122.163, 99.250 121.129 C 110.133 118.289, 116 111.429, 116 101.543 C 116 91.121, 109.966 85.821, 91.606 80.116 C 86.165 78.425, 80.652 76.347, 79.356 75.498 C 76.283 73.484, 76.365 70.645, 79.570 68.123 C 83.524 65.014, 90.182 64.441, 98.792 66.471 C 106.048 68.182, 106.286 68.177, 108.862 66.263 C 114.645 61.965, 111.226 54.875, 102.687 53.461 C 96.414 52.422, 95.002 51.369, 94.985 47.715 C 94.967 43.940, 94.279 42.709, 91.316 41.150 C 88.379 39.604, 87.607 39.688, 84.949 41.840' stroke='none' fill='%23132b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 170' version='1.1'%3E%3Cpath d='M 73.633 4.553 C 45.770 10.089, 24.575 26.633, 12.450 52.309 C 6.771 64.334, 5.500 70.677, 5.500 87 C 5.500 103.323, 6.771 109.666, 12.450 121.691 C 24.186 146.544, 45.625 163.776, 71.436 169.103 C 120.309 179.190, 166.043 146.223, 172.153 96.501 C 176.830 58.443, 153.240 20.809, 116.500 7.718 C 103.999 3.264, 86.587 1.978, 73.633 4.553 M 84.949 41.840 C 83.486 43.025, 82.467 45.215, 82.088 47.992 C 81.552 51.922, 81.154 52.423, 77.591 53.654 C 71.868 55.632, 67.487 59.363, 65.102 64.289 C 62.395 69.882, 62.453 75.464, 65.271 80.500 C 67.957 85.299, 75.837 89.608, 89.275 93.627 C 102.498 97.582, 106.049 101.456, 100.471 105.844 C 96.083 109.296, 91.116 109.441, 79.440 106.461 C 67.550 103.427, 64.583 103.831, 63.374 108.647 C 62.105 113.701, 64.649 116.208, 73.782 118.907 L 82 121.335 82.015 125.417 C 82.024 127.663, 82.361 129.995, 82.765 130.600 C 84.145 132.667, 87.955 134.049, 90.506 133.409 C 93.612 132.630, 95 130.244, 95 125.684 C 95 122.470, 95.286 122.163, 99.250 121.129 C 110.133 118.289, 116 111.429, 116 101.543 C 116 91.121, 109.966 85.821, 91.606 80.116 C 86.165 78.425, 80.652 76.347, 79.356 75.498 C 76.283 73.484, 76.365 70.645, 79.570 68.123 C 83.524 65.014, 90.182 64.441, 98.792 66.471 C 106.048 68.182, 106.286 68.177, 108.862 66.263 C 114.645 61.965, 111.226 54.875, 102.687 53.461 C 96.414 52.422, 95.002 51.369, 94.985 47.715 C 94.967 43.940, 94.279 42.709, 91.316 41.150 C 88.379 39.604, 87.607 39.688, 84.949 41.840' stroke='none' fill='%23132b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 155, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 155, 40);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 23, 146, 153);
  background: rgba(243, 236, 243, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(23, 146, 153, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(23, 146, 153, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(23, 146, 153, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(23, 146, 153, 0.4);
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 240, 68, 114);
  background: rgba(243, 236, 243, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(240, 68, 114, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(240, 68, 114, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(240, 68, 114, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(240, 68, 114, 0.4);
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 240, 68, 114);
  background: rgba(243, 236, 243, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(240, 68, 114, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(240, 68, 114, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(240, 68, 114, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(240, 68, 114, 0.4);
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 176, 110, 201);
  background: rgba(243, 236, 243, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(176, 110, 201, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(176, 110, 201, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(176, 110, 201, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(176, 110, 201, 0.4);
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 240, 68, 114);
  background: rgba(243, 236, 243, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(240, 68, 114, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(240, 68, 114, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(240, 68, 114, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(240, 68, 114, 0.4);
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 71, 143, 238);
  background: rgba(243, 236, 243, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(71, 143, 238, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(71, 143, 238, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(71, 143, 238, 0.4);
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 71, 143, 238);
  background: rgba(243, 236, 243, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(71, 143, 238, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(71, 143, 238, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(71, 143, 238, 0.4);
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 249, 102, 50);
  background: rgba(243, 236, 243, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(249, 102, 50, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(249, 102, 50, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(249, 102, 50, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(249, 102, 50, 0.4);
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(243, 236, 243, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(158, 158, 158, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.4);
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="seealso"] {
  --accent: 222, 149, 132;
  --background-modifier-active-hover: rgba(222, 149, 132, 0.15);
  --background-modifier-border: rgb(188, 192, 204);
  --background-modifier-border-focus: rgb(156, 160, 176);
  --background-modifier-border-hover: rgb(221, 225, 238);
  --background-modifier-error: rgb(240, 68, 114);
  --background-modifier-error-hover: rgba(240, 68, 114, 0.9);
  --background-modifier-error-rgb: 240, 68, 114;
  --background-modifier-form-field: rgba(254, 241, 241, 0.3);
  --background-modifier-form-field-hover: rgba(254, 241, 241, 0.3);
  --background-modifier-hover: rgba(76, 79, 105, 0.075);
  --background-modifier-message: rgba(254, 241, 241, 0.9);
  --background-modifier-success: rgb(64, 155, 40);
  --background-modifier-success-hover: rgba(64, 155, 40, 0.9);
  --background-modifier-success-rgb: 64, 155, 40;
  --background-primary: rgb(252, 252, 252);
  --background-primary-alt: rgb(243, 236, 243);
  --background-secondary: rgb(243, 236, 243);
  --background-secondary-alt: rgb(254, 241, 241);
  --background-secondary-translucent: rgba(252, 252, 252, 0.1);
  --background-secondary-translucent-1: rgba(252, 252, 252, 0.1);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-color-settings-1: rgba(252, 252, 252, 0.15);
  --bg-color-settings-2: rgba(252, 252, 252, 0.3);
  --bg-color-settings-3: rgba(252, 252, 252, 0.8);
  --bg-color-settings-4: rgba(252, 252, 252, 0.7);
  --blockquote-background-color: rgba(254, 241, 241, 0.5);
  --blockquote-border-color: rgb(222, 149, 132);
  --blur-background: color-mix(in srgb, rgb(252, 252, 252) 65%, transparent) linear-gradient(rgb(252, 252, 252), color-mix(in srgb, rgb(252, 252, 252) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: rgb(240, 68, 114);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: none;
  --callout-bug: 240, 68, 114;
  --callout-color: var(--callout-default, 71, 143, 238);
  --callout-content-padding: 0;
  --callout-default: 71, 143, 238;
  --callout-error: 240, 68, 114;
  --callout-example: 176, 110, 201;
  --callout-fail: 240, 68, 114;
  --callout-important: 23, 146, 153;
  --callout-info: 71, 143, 238;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 249, 102, 50;
  --callout-radius: 4px;
  --callout-success: 64, 155, 40;
  --callout-summary: 23, 146, 153;
  --callout-tip: 23, 146, 153;
  --callout-title-padding: 8px;
  --callout-title-weight: 600;
  --callout-todo: 71, 143, 238;
  --callout-warning: 249, 102, 50;
  --canvas-background: rgb(252, 252, 252);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: rgb(188, 192, 204);
  --card-background-color: rgb(254, 241, 241);
  --card-foreground-color: rgb(252, 252, 252);
  --cards-background: rgb(243, 236, 243);
  --cards-background-modifier-border: rgb(188, 192, 204);
  --caret-color: rgb(76, 79, 105);
  --checkbox-border-color: rgb(108, 111, 133);
  --checkbox-border-color-hover: rgb(76, 79, 105);
  --checkbox-color: rgb(222, 149, 132);
  --checkbox-color-hover: rgb(222, 149, 132);
  --checkbox-marker-color: rgb(252, 252, 252);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: rgb(76, 79, 105);
  --clickable-icon-radius: 4px;
  --code-background: rgb(243, 236, 243);
  --code-border-color: rgb(188, 192, 204);
  --code-bracket-background: rgba(76, 79, 105, 0.075);
  --code-comment: rgb(108, 111, 133);
  --code-function: rgb(228, 147, 32);
  --code-important: rgb(249, 102, 50);
  --code-keyword: rgb(215, 125, 146);
  --code-normal: rgb(76, 79, 105);
  --code-operator: rgb(240, 68, 114);
  --code-property: rgb(23, 146, 153);
  --code-punctuation: rgb(76, 79, 105);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: rgb(64, 155, 40);
  --code-tag: rgb(240, 68, 114);
  --code-value: rgb(176, 110, 201);
  --collapse-icon-color: rgb(108, 111, 133);
  --collapse-icon-color-collapsed: rgb(222, 149, 132);
  --color-accent: rgb(222, 149, 132);
  --color-accent-1: rgb(222, 149, 132);
  --color-accent-2: rgba(222, 149, 132, 0.9);
  --color-accent-hsl: 258, 88%, 66%;
  --color-accent-translucent-001: hsla(258, 88%, 66%, 0.01);
  --color-accent-translucent-005: hsla(258, 88%, 66%, 0.05);
  --color-accent-translucent-01: hsla(258, 88%, 66%, 0.1);
  --color-accent-translucent-015: hsla(258, 88%, 66%, 0.15);
  --color-accent-translucent-02: hsla(258, 88%, 66%, 0.2);
  --color-accent-translucent-04: hsla(258, 88%, 66%, 0.4);
  --color-accent-translucent-06: hsla(258, 88%, 66%, 0.6);
  --color-base-00: rgb(254, 241, 241);
  --color-base-10: rgb(243, 236, 243);
  --color-base-100: rgb(76, 79, 105);
  --color-base-20: rgb(252, 252, 252);
  --color-base-25: rgb(221, 225, 238);
  --color-base-30: rgb(188, 192, 204);
  --color-base-35: rgb(221, 225, 238);
  --color-base-40: rgb(156, 160, 176);
  --color-base-50: rgb(140, 143, 161);
  --color-base-60: rgb(76, 79, 105);
  --color-base-70: rgb(108, 111, 133);
  --color-blue: rgb(71, 143, 238);
  --color-blue-rgb: 71, 143, 238;
  --color-cyan: rgb(23, 146, 153);
  --color-cyan-rgb: 23, 146, 153;
  --color-green: rgb(64, 155, 40);
  --color-green-rgb: 64, 155, 40;
  --color-lightorange: rgb(195, 173, 87);
  --color-lightorange-rgb: 195, 173, 87;
  --color-lightpink: rgb(222, 149, 132);
  --color-lightpink-rgb: 222, 149, 132;
  --color-orange: rgb(249, 102, 50);
  --color-orange-rgb: 249, 102, 50;
  --color-pink: rgb(215, 125, 146);
  --color-pink-rgb: 215, 125, 146;
  --color-purple: rgb(176, 110, 201);
  --color-purple-rgb: 176, 110, 201;
  --color-red: rgb(240, 68, 114);
  --color-red-rgb: 240, 68, 114;
  --color-yellow: rgb(228, 147, 32);
  --color-yellow-rgb: 228, 147, 32;
  --divider-color: rgb(188, 192, 204);
  --divider-color-hover: rgb(222, 149, 132);
  --divider-vertical-height: 100%;
  --dropdown-background: rgb(221, 225, 238);
  --dropdown-background-hover: rgb(188, 192, 204);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --external-link-color: rgba(222, 149, 132, 0.8);
  --flair-background: rgb(221, 225, 238);
  --flair-color: rgb(76, 79, 105);
  --font-family-folder-file-title: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-family-inline-code: monospace;
  --font-family-tag: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-family-vault: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-family-vertical-bar: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-text: '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-arrow: rgb(176, 110, 201);
  --graph-circle-fill: rgb(71, 143, 238);
  --graph-circle-fill-highlight: rgb(71, 143, 238);
  --graph-circle-outline: rgb(215, 125, 146);
  --graph-fill-attachment: rgb(23, 146, 153);
  --graph-fill-tag: rgb(249, 102, 50);
  --graph-line: rgb(76, 79, 105);
  --graph-line-highlight: rgb(222, 149, 132);
  --graph-node: rgb(76, 79, 105);
  --graph-node-attachment: rgb(228, 147, 32);
  --graph-node-focused: rgb(222, 149, 132);
  --graph-node-tag: rgb(64, 155, 40);
  --graph-node-unresolved: rgb(108, 111, 133);
  --graph-text: rgb(76, 79, 105);
  --h1-color: rgb(240, 68, 114);
  --h1-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-color: rgb(222, 149, 132);
  --h2-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-color: rgb(23, 146, 153);
  --h3-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-color: rgb(37, 189, 209);
  --h4-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-color: rgb(71, 143, 238);
  --h5-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-line-height: 1.5;
  --h6-color: rgb(58, 161, 182);
  --h6-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h6-line-height: 1.5;
  --header-height: 40px;
  --heading-formatting: rgb(222, 149, 132);
  --heading-spacing: 2.5rem;
  --hr-color: rgb(188, 192, 204);
  --hr-outline-color: rgb(188, 192, 204);
  --interactive-accent: rgb(222, 149, 132);
  --interactive-accent-hover: rgb(222, 149, 132);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-accent-rgb: 222, 149, 132;
  --interactive-hover: rgb(188, 192, 204);
  --interactive-normal: rgb(221, 225, 238);
  --interactive-success: rgb(64, 155, 40);
  --internal-link-color: rgba(222, 149, 132, 0.9);
  --italic-color: rgb(64, 155, 40);
  --link-color: rgb(222, 149, 132);
  --link-color-hover: rgb(222, 149, 132);
  --link-external-color: rgb(222, 149, 132);
  --link-external-color-hover: rgb(222, 149, 132);
  --link-unresolved-color: rgb(222, 149, 132);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: rgb(243, 236, 243);
  --menu-border-color: rgb(221, 225, 238);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(254, 241, 241, 0.121), 0px 3.4px 6.7px rgba(254, 241, 241, 0.179),
    0px 15px 30px rgba(254, 241, 241, 0.3);
  --mono-rgb-100: 76, 79, 105;
  --pdf-background: rgb(252, 252, 252);
  --pdf-page-background: rgb(252, 252, 252);
  --pdf-sidebar-background: rgb(252, 252, 252);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(252, 252, 252) 65%, transparent) linear-gradient(rgb(252, 252, 252), color-mix(in srgb, rgb(252, 252, 252) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(76, 79, 105, 0.2);
  --scrollbar-bg: rgba(76, 79, 105, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(76, 79, 105, 0.1);
  --search-clear-button-color: rgb(76, 79, 105);
  --search-icon-color: rgb(76, 79, 105);
  --search-result-background: rgb(252, 252, 252);
  --setting-group-heading-color: rgb(76, 79, 105);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: rgb(243, 236, 243);
  --setting-items-border-color: rgb(188, 192, 204);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-l: 0px 1.8px 7.3px rgba(254, 241, 241, 0.071), 0px 6.3px 24.7px rgba(254, 241, 241, 0.112),
    0px 30px 90px rgba(254, 241, 241, 0.2);
  --shadow-s: 0px 1px 2px rgba(254, 241, 241, 0.121), 0px 3.4px 6.7px rgba(254, 241, 241, 0.179),
    0px 15px 30px rgba(254, 241, 241, 0.3);
  --shib-bold-color: 240, 68, 114;
  --shib-italic-color: 64, 155, 40;
  --shib-speech-bubble-opacity: 0.5;
  --shiki-active-tab-border-color: rgb(76, 79, 105);
  --shiki-code-background: rgb(243, 236, 243);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: rgb(108, 111, 133);
  --shiki-code-function: rgb(64, 155, 40);
  --shiki-code-important: rgb(249, 102, 50);
  --shiki-code-keyword: rgb(215, 125, 146);
  --shiki-code-normal: rgb(76, 79, 105);
  --shiki-code-property: rgb(23, 146, 153);
  --shiki-code-punctuation: rgb(76, 79, 105);
  --shiki-code-string: rgb(228, 147, 32);
  --shiki-code-value: rgb(176, 110, 201);
  --shiki-gutter-border-color: rgb(188, 192, 204);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: rgb(108, 111, 133);
  --shiki-gutter-text-color-highlight: rgb(76, 79, 105);
  --shiki-highlight-green: rgba(64, 155, 40, 0.5);
  --shiki-highlight-green-background: rgba(64, 155, 40, 0.1);
  --shiki-highlight-neutral: rgb(76, 79, 105);
  --shiki-highlight-neutral-background: rgba(76, 79, 105, 0.05);
  --shiki-highlight-red: rgba(240, 68, 114, 0.5);
  --shiki-highlight-red-background: rgba(240, 68, 114, 0.1);
  --shiki-terminal-dots-color: rgb(108, 111, 133);
  --shiki-tooltip-background: rgba(254, 241, 241, 0.9);
  --suggestion-background: rgb(252, 252, 252);
  --swatch-shadow: inset 0 0 0 1px rgba(76, 79, 105, 0.15);
  --sync-avatar-color-1: rgb(240, 68, 114);
  --sync-avatar-color-2: rgb(249, 102, 50);
  --sync-avatar-color-3: rgb(228, 147, 32);
  --sync-avatar-color-4: rgb(64, 155, 40);
  --sync-avatar-color-5: rgb(23, 146, 153);
  --sync-avatar-color-6: rgb(71, 143, 238);
  --sync-avatar-color-7: rgb(176, 110, 201);
  --sync-avatar-color-8: rgb(215, 125, 146);
  --tab-background: rgb(243, 236, 243);
  --tab-background-active: rgb(252, 252, 252);
  --tab-divider-color: rgb(221, 225, 238);
  --tab-font-size: 12.3px;
  --tab-height: 32px;
  --tab-inactive-color: rgb(243, 236, 243);
  --tab-max-width: 200px;
  --tab-max-width-active: 300px;
  --tab-outline-color: rgb(188, 192, 204);
  --tab-radius: 0px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(243, 236, 243);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(243, 236, 243), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(76, 79, 105, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(222, 149, 132);
  --tab-text-color: rgb(108, 111, 133);
  --tab-text-color-active: rgb(76, 79, 105);
  --tab-text-color-focused: rgb(76, 79, 105);
  --tab-text-color-focused-active: rgb(76, 79, 105);
  --tab-text-color-focused-active-current: rgb(76, 79, 105);
  --tab-text-color-focused-highlighted: rgb(222, 149, 132);
  --table-add-button-border-color: rgb(188, 192, 204);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-border-width: 1px;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgb(222, 149, 132);
  --table-drag-handle-color: rgb(108, 111, 133);
  --table-drag-handle-color-active: rgb(252, 252, 252);
  --table-header-background: transparent;
  --table-header-border-color: rgb(188, 192, 204);
  --table-header-border-width: 1px;
  --table-header-color: rgb(76, 79, 105);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: none;
  --table-selection-border-color: rgb(222, 149, 132);
  --table-text-size: 16px;
  --tag-background: rgba(222, 149, 132, 0.1);
  --tag-background-hover: rgba(222, 149, 132, 0.2);
  --tag-border-color: rgba(222, 149, 132, 0.15);
  --tag-border-color-hover: rgba(222, 149, 132, 0.15);
  --tag-color: rgb(222, 149, 132);
  --tag-color-hover: rgb(222, 149, 132);
  --tag-size: 0.875em;
  --text-accent: rgb(222, 149, 132);
  --text-accent-hover: rgb(222, 149, 132);
  --text-error: rgb(240, 68, 114);
  --text-error-hover: rgba(240, 68, 114, 0.8);
  --text-faint: rgb(108, 111, 133);
  --text-highlight-bg: rgba(249, 102, 50, 0.2);
  --text-highlight-bg-active: rgba(249, 102, 50, 0.4);
  --text-muted: rgb(76, 79, 105);
  --text-muted-rgb: 76, 79, 105;
  --text-normal: rgb(76, 79, 105);
  --text-on-accent: rgb(252, 252, 252);
  --text-selection: rgba(71, 143, 238, 0.15);
  --text-success: rgb(64, 155, 40);
  --text-warning: rgb(249, 102, 50);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --unresolved-link-color: rgba(222, 149, 132, 0.8);
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(71, 143, 238, 0.4);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(71, 143, 238, 0.4);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(71, 143, 238, 0.4);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 64, 155, 40);
  background: rgba(243, 236, 243, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(64, 155, 40, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(64, 155, 40, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(64, 155, 40, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(64, 155, 40, 0.4);
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 23, 146, 153);
  background: rgba(243, 236, 243, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(23, 146, 153, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(23, 146, 153, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(23, 146, 153, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(23, 146, 153, 0.4);
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 71, 143, 238);
  background: rgba(243, 236, 243, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(71, 143, 238, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(71, 143, 238, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(71, 143, 238, 0.4);
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 249, 102, 50);
  background: rgba(243, 236, 243, 0.4) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--side), 0.4);
  border-bottom-color: rgba(249, 102, 50, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(249, 102, 50, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(249, 102, 50, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(249, 102, 50, 0.4);
  border-top-width: 1px;
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 71, 143, 238;
  background: rgba(71, 143, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-left-color: rgba(71, 143, 238, 0.4);
  border-right-color: rgba(71, 143, 238, 0.4);
  border-top-color: rgba(71, 143, 238, 0.4);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(71, 143, 238));
  font-weight: var(--font-weight, 400);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(76, 79, 105);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
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

html[saved-theme="light"] body .callout[data-callout="seealso"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgba(254, 241, 241, 0.3);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(252, 252, 252));
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
  box-shadow: var(--shadow-l, rgba(254, 241, 241, 0.07) 0px 1.8px 7.3px 0px, rgba(254, 241, 241, 0.114) 0px 6.3px 24.7px 0px, rgba(254, 241, 241, 0.2) 0px 30px 90px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(243, 236, 243);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(76, 79, 105, 0.075));
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgba(222, 149, 132, 0.1));
  --pill-background-hover: var(--tag-background-hover, rgba(222, 149, 132, 0.2));
  --pill-border-color: var(--tag-border-color, rgba(222, 149, 132, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, rgba(222, 149, 132, 0.15));
  --pill-color: var(--tag-color, rgb(222, 149, 132));
  --pill-color-hover: var(--tag-color-hover, rgb(222, 149, 132));
  --pill-color-remove: var(--tag-color, rgb(222, 149, 132));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(222, 149, 132));
  background-color: var(--pill-background, rgba(222, 149, 132, 0.1));
  border-bottom-color: rgba(222, 149, 132, 0.15);
  border-left-color: rgba(222, 149, 132, 0.15);
  border-right-color: rgba(222, 149, 132, 0.15);
  border-top-color: rgba(222, 149, 132, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(222, 149, 132);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(240, 68, 114));
  font-family: var(--h1-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(240, 68, 114));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(222, 149, 132));
  font-family: var(--h2-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(240, 68, 114));
  font-family: var(--inline-title-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(23, 146, 153));
  font-family: var(--h3-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(37, 189, 209));
  font-family: var(--h4-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(71, 143, 238));
  font-family: var(--h5-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(58, 161, 182));
  font-family: var(--h6-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 71, 143, 238);
  border-bottom-color: rgba(71, 143, 238, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(71, 143, 238, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(71, 143, 238, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(71, 143, 238, 0.4);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(254, 241, 241, 0.4);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(76, 79, 105));
  font-family: var(--font-family-folder-file-title, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(76, 79, 105));
  font-family: var(--font-family-folder-file-title, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(76, 79, 105);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: var(--icon-color, rgb(76, 79, 105));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(243, 236, 243));
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--status-bar-text-color, rgb(76, 79, 105));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(76, 79, 105);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(76, 79, 105));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(76, 79, 105);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(76, 79, 105);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(76, 79, 105));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: var(--icon-color, rgb(76, 79, 105));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(76, 79, 105);
  stroke: rgb(76, 79, 105);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(108, 111, 133));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: var(--blockquote-background-color, rgba(0, 0, 0, 0));
  color: var(--unresolved-link-color, rgb(76, 79, 105));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(252, 252, 252));
  border-color: rgb(76, 79, 105);
  box-shadow: var(--input-shadow, rgba(76, 79, 105, 0.09) 0px 0.5px 0.5px 0.5px inset, rgba(254, 241, 241, 0.15) 0px 2px 4px 0px, rgba(254, 241, 241, 0.1) 0px 1px 1.5px 0px, rgba(254, 241, 241, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px);
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(188, 192, 204);
  color: var(--table-header-color, rgb(76, 79, 105));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: var(--text-muted, rgb(76, 79, 105));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, rgba(222, 149, 132, 0.1));
  --pill-background-hover: var(--tag-background-hover, rgba(222, 149, 132, 0.2));
  --pill-border-color: var(--tag-border-color, rgba(222, 149, 132, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, rgba(222, 149, 132, 0.15));
  --pill-color: var(--tag-color, rgb(222, 149, 132));
  --pill-color-hover: var(--tag-color-hover, rgb(222, 149, 132));
  --pill-color-remove: var(--tag-color, rgb(222, 149, 132));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(222, 149, 132));
  background-color: var(--pill-background, rgba(222, 149, 132, 0.1));
  color: var(--pill-color, rgb(222, 149, 132));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(252, 252, 252));
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(243, 236, 243));
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(254, 241, 241));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(76, 79, 105);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(243, 236, 243));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body abbr {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: var(--text-normal, rgb(76, 79, 105));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(243, 236, 243));
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: var(--code-normal, rgb(76, 79, 105));
  font-family: var(--font-monospace, "??", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sub {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body summary {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sup {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(222, 149, 132, 0.1));
  border-bottom-color: rgb(222, 149, 132);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-left-color: rgb(222, 149, 132);
  border-right-color: rgb(222, 149, 132);
  border-top-color: rgb(222, 149, 132);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  color: var(--text-accent, rgb(222, 149, 132));
}`,
  },
  classSettings: {
    "default-light-theme": {
      light: `.default-light-theme {
--text: 76, 79, 105;
--subtext1: 92, 95, 119;
--subtext0: 108, 111, 133;
--overlay2: 76, 79, 105;
--overlay1: 140, 143, 161;
--overlay0: 156, 160, 176;
--surface2: 221, 225, 238;
--surface1: 188, 192, 204;
--surface0: 221, 225, 238;
--exterior: 254, 241, 241;
--side: 243, 236, 243;
--base: 252, 252, 252;
}

.default-light-theme {
--lily: 222, 149, 132;
--red: 240, 68, 114;
--rose: 215, 125, 146;
--violet: 176, 110, 201;
--blue: 71, 143, 238;
--sea: 23, 146, 153;
--cyan: 37, 189, 209;
--turquoise: 58, 161, 182;
--green: 64, 155, 40;
--yellow: 228, 147, 32;
--lemon: 195, 173, 87;
--orange: 249, 102, 50;
}`,
    },
    "lily-light": {
      light: `.lily-light {
--subtext1: 97, 92, 132;
--overlay2: 86, 100, 122;
--overlay1: 152, 147, 165;
--subtext0: 108, 111, 133;
--text: 86, 100, 122;
}

.lily-light {
--overlay0: 161, 156, 173;
--surface2: 241, 183, 153;
--surface1: 203, 194, 186;
--surface0: 242, 194, 163;
--exterior: 245, 203, 181;
--side: 245, 209, 185;
--base: 245, 219, 195;
}

.lily-light {
--lily: 208, 109, 108;
--red: 215, 67, 72;
--rose: 219, 75, 146;
--violet: 152, 88, 185;
--blue: 50, 145, 207;
--sea: 16, 103, 78;
--cyan: 4, 165, 229;
--turquoise: 56, 126, 127;
--green: 63, 130, 48;
--yellow: 228, 147, 32;
--lemon: 195, 173, 87;
--orange: 211, 126, 17;
}`,
    },
    "ivory-light": {
      light: `.ivory-light {
--subtext1: 97, 92, 132;
--overlay2: 86, 100, 122;
--overlay1: 152, 147, 165;
--subtext0: 108, 111, 133;
--text: 86, 100, 122;
}

.ivory-light {
--overlay0: 231, 215, 198;
--surface2: 231, 215, 198;
--surface1: 209, 201, 194;
--surface0: 233, 204, 176;
--exterior: 242, 226, 209;
--side: 235, 225, 206;
--base: 242, 226, 209;
}

.ivory-light {
--lily: 208, 109, 108;
--red: 215, 67, 72;
--rose: 219, 75, 146;
--violet: 152, 88, 185;
--blue: 50, 145, 207;
--sea: 16, 103, 78;
--cyan: 4, 165, 229;
--turquoise: 56, 126, 127;
--green: 63, 130, 48;
--yellow: 228, 147, 32;
--lemon: 195, 173, 87;
--orange: 211, 126, 17;
}`,
    },
    "sky-light": {
      light: `.sky-light {
--text: 86, 100, 122;
--subtext1: 92, 95, 119;
--subtext0: 108, 111, 133;
--overlay2: 76, 79, 105;
--overlay1: 140, 143, 161;
--overlay0: 156, 160, 176;
--surface2: 221, 225, 238;
--surface1: 188, 192, 204;
--surface0: 224, 240, 255;
--exterior: 232, 243, 255;
--side: 232, 243, 255;
--base: 255, 255, 255;
}

.sky-light {
--lily: 222, 149, 132;
--red: 240, 68, 114;
--rose: 215, 125, 146;
--violet: 176, 110, 201;
--blue: 71, 143, 238;
--sea: 23, 146, 153;
--cyan: 37, 189, 209;
--turquoise: 58, 161, 182;
--green: 64, 155, 40;
--yellow: 228, 147, 32;
--lemon: 195, 173, 87;
--orange: 249, 102, 50;
}`,
    },
    "stone-light": {
      light: `.stone-light {
--text: 86, 100, 122;
--subtext1: 97, 92, 132;
--subtext0: 0, 0, 0;
--overlay2: 86, 100, 122;
--overlay1: 152, 147, 165;
--overlay0: 166, 172, 146;
--surface2: 166, 172, 146;
--surface1: 209, 201, 194;
--surface0: 210, 213, 200;
--exterior: 247, 227, 213;
--side: 247, 227, 213;
--base: 248, 235, 224;
}

.stone-light {
--lily: 208, 109, 108;
--red: 215, 67, 72;
--rose: 219, 75, 146;
--violet: 152, 88, 185;
--blue: 50, 145, 207;
--sea: 16, 103, 78;
--cyan: 4, 165, 229;
--turquoise: 56, 126, 127;
--green: 63, 130, 48;
--yellow: 228, 147, 32;
--lemon: 195, 173, 87;
--orange: 211, 126, 17;
}`,
    },
    "default-dark-theme": {
      dark: `.default-dark-theme {
--text: 198, 206, 239;
--subtext1: 181, 189, 220;
--subtext0: 165, 172, 201;
--overlay2: 148, 155, 183;
--overlay1: 131, 138, 164;
--overlay0: 115, 120, 145;
--surface2: 98, 103, 126;
--surface1: 81, 86, 108;
--surface0: 65, 69, 89;
--base: 42, 45, 61;
--side: 38, 42, 58;
--exterior: 36, 39, 52;
}

.default-dark-theme {
--lily: 235, 188, 186;
--red: 255, 98, 107;
--rose: 243, 137, 143;
--violet: 196, 167, 231;
--blue: 147, 183, 245;
--sea: 104, 188, 204;
--cyan: 137, 199, 223;
--turquoise: 128, 216, 220;
--green: 56, 198, 141;
--yellow: 249, 226, 175;
--lemon: 246, 193, 119;
--orange: 247, 157, 124;
}`,
    },
    "warm-dark": {
      dark: `.warm-dark {
--text: 197, 207, 245;
--subtext1: 179, 188, 224;
--subtext0: 161, 170, 203;
--overlay2: 143, 151, 183;
--overlay1: 125, 132, 162;
--overlay0: 108, 114, 141;
--surface2: 90, 95, 120;
--surface1: 72, 76, 100;
--surface0: 54, 58, 79;
--base: 32, 36, 51;
--side: 30, 32, 48;
--exterior: 28, 29, 42;
}

.warm-dark {
--lily: 235, 188, 186;
--red: 255, 98, 107;
--rose: 243, 137, 143;
--violet: 196, 167, 231;
--blue: 147, 183, 245;
--sea: 104, 188, 204;
--cyan: 137, 199, 223;
--turquoise: 128, 216, 220;
--green: 56, 198, 141;
--yellow: 249, 226, 175;
--lemon: 246, 193, 119;
--orange: 247, 157, 124;
}`,
    },
    "Lilac-dark": {
      dark: `.Lilac-dark {
--text: 198, 208, 245;
--subtext1: 179, 188, 223;
--subtext0: 161, 168, 201;
--overlay2: 142, 149, 179;
--overlay1: 123, 129, 157;
--overlay0: 105, 109, 134;
--surface2: 86, 89, 112;
--surface1: 67, 70, 90;
--surface0: 49, 50, 68;
--base: 28, 28, 42;
--side: 24, 24, 37;
--exterior: 17, 17, 27;
}

.Lilac-dark {
--lily: 235, 188, 186;
--red: 255, 98, 107;
--rose: 243, 137, 143;
--violet: 196, 167, 231;
--blue: 147, 183, 245;
--sea: 104, 188, 204;
--cyan: 137, 199, 223;
--turquoise: 128, 216, 220;
--green: 56, 198, 141;
--yellow: 249, 226, 175;
--lemon: 246, 193, 119;
--orange: 247, 157, 124;
}`,
    },
    "pure-dark": {
      dark: `.pure-dark {
--text: 217, 224, 238;
--subtext1: 211, 205, 214;
--subtext0: 190, 179, 193;
--overlay2: 167, 156, 176;
--overlay1: 152, 139, 162;
--overlay0: 109, 107, 125;
--surface2: 87, 82, 105;
--surface1: 45, 40, 72;
--surface0: 48, 45, 65;
--base: 20, 20, 20;
--side: 25, 26, 29;
--exterior: 26, 33, 42;
}

.pure-dark {
--lily: 235, 188, 186;
--red: 255, 98, 107;
--rose: 243, 137, 143;
--violet: 196, 167, 231;
--blue: 147, 183, 245;
--sea: 104, 188, 204;
--cyan: 137, 199, 223;
--turquoise: 128, 216, 220;
--green: 56, 198, 141;
--yellow: 249, 226, 175;
--lemon: 246, 193, 119;
--orange: 247, 157, 124;
}`,
    },
    "shiba-accent-style": {
      general: `.accent-orange {
--accent: var(--orange);
}

.accent-lemon {
--accent: var(--lemon);
}

.accent-rose {
--accent: var(--rose);
}

.accent-violet {
--accent: var(--violet);
}

.accent-red {
--accent: var(--red);
}

.accent-yellow {
--accent: var(--yellow);
}

.accent-green {
--accent: var(--green);
}

.accent-sea {
--accent: var(--sea);
}

.accent-cyan {
--accent: var(--cyan);
}

.accent-turquoise {
--accent: var(--turquoise);
}

.accent-blue {
--accent: var(--blue);
}

.accent-lily {
--accent: var(--lily);
}

.shiba-accent-style {
--color-accent: rgb(var(--accent));
--color-accent-1: rgb(var(--accent));
--color-accent-2: rgba(var(--accent), 0.9);
--text-selection: rgba(var(--blue), 0.15);
--interactive-accent: rgb(var(--accent));
--interactive-accent-hover: rgba(var(--accent), 0.9);
--text-accent: rgb(var(--accent));
--text-accent-hover: rgb(var(--accent));
--text-highlight-bg: rgba(var(--yellow), 0.2);
--text-highlight-bg-active: rgba(var(--yellow), 0.3);
--interactive-accent: rgb(var(--accent));
--interactive-accent-rgb: var(--accent);
--interactive-accent-hover: rgb(var(--accent));
--blockquote-border-color: rgb(var(--accent));
--background-modifier-active-hover: rgba(var(--accent), 0.15);
--internal-link-color: rgba(var(--accent), 0.9);
--external-link-color: rgba(var(--accent), 0.8);
--unresolved-link-color: rgba(var(--accent), 0.8);
--tag-background: rgba(var(--accent), 0.1);
--tag-background-hover: rgba(var(--accent), 0.2);
--tag-border-color: rgba(var(--accent), 0.15);
--tag-border-color-hover: rgba(var(--accent), 0.15);
--nav-item-background-selected: rgba(var(--accent), 0.2);
--heading-formatting: rgb(var(--accent));
--icon-color-focused: rgb(var(--accent));
}

.shib-callout-color-toggle.shiba-accent-style .callout[data-callout="note"] {
--callout-color: var(--accent);
}

.shiba-accent-style .style-settings-heading[data-id="shiba-theme-settings-extended"], .shiba-accent-style .style-settings-heading[data-id="shiba-theme-settings"] {
border-color: rgba(var(--color-accent), 0.2);
}`,
    },
    "accent-lily": {
      general: `.shiba-accent-style.accent-lily {
--accent: var(--lily);
}`,
    },
    "accent-red": {
      general: `.shiba-accent-style.accent-red {
--accent: var(--red);
}`,
    },
    "accent-rose": {
      general: `.shiba-accent-style.accent-rose {
--accent: var(--rose);
}`,
    },
    "accent-violet": {
      general: `.shiba-accent-style.accent-violet {
--accent: var(--violet);
}`,
    },
    "accent-blue": {
      general: `.shiba-accent-style.accent-blue {
--accent: var(--blue);
}`,
    },
    "accent-sea": {
      general: `.shiba-accent-style.accent-sea {
--accent: var(--sea);
}`,
    },
    "accent-cyan": {
      general: `.shiba-accent-style.accent-cyan {
--accent: var(--cyan);
}`,
    },
    "accent-turquoise": {
      general: `.shiba-accent-style.accent-turquoise {
--accent: var(--turquoise);
}`,
    },
    "accent-green": {
      general: `.shiba-accent-style.accent-green {
--accent: var(--green);
}`,
    },
    "accent-yellow": {
      general: `.shiba-accent-style.accent-yellow {
--accent: var(--yellow);
}`,
    },
    "accent-lemon": {
      general: `.shiba-accent-style.accent-lemon {
--accent: var(--lemon);
}`,
    },
    "accent-orange": {
      general: `.shiba-accent-style.accent-orange {
--accent: var(--orange);
}`,
    },
    "shib-header-color-toggle": {
      general: `.shib-h1-lily {
--h1-color: rgb(var(--lily));
}

.shib-h1-red {
--h1-color: rgb(var(--red));
}

.shib-h1-rose {
--h1-color: rgb(var(--rose));
}

.shib-h1-violet {
--h1-color: rgb(var(--violet));
}

.shib-h1-blue {
--h1-color: rgb(var(--blue));
}

.shib-h1-sea {
--h1-color: rgb(var(--sea));
}

.shib-h1-cyan {
--h1-color: rgb(var(--cyan));
}

.shib-h1-turquoise {
--h1-color: rgb(var(--turquoise));
}

.shib-h1-green {
--h1-color: rgb(var(--green));
}

.shib-h1-yellow {
--h1-color: rgb(var(--yellow));
}

.shib-h1-lemon {
--h1-color: rgb(var(--lemon));
}

.shib-h1-orange {
--h1-color: rgb(var(--orange));
}

.shib-h2-lily {
--h2-color: rgb(var(--lily));
}

.shib-h2-red {
--h2-color: rgb(var(--red));
}

.shib-h2-rose {
--h2-color: rgb(var(--rose));
}

.shib-h2-violet {
--h2-color: rgb(var(--violet));
}

.shib-h2-blue {
--h2-color: rgb(var(--blue));
}

.shib-h2-sea {
--h2-color: rgb(var(--sea));
}

.shib-h2-cyan {
--h2-color: rgb(var(--cyan));
}

.shib-h2-turquoise {
--h2-color: rgb(var(--turquoise));
}

.shib-h2-green {
--h2-color: rgb(var(--green));
}

.shib-h2-yellow {
--h2-color: rgb(var(--yellow));
}

.shib-h2-lemon {
--h2-color: rgb(var(--lemon));
}

.shib-h2-orange {
--h2-color: rgb(var(--orange));
}

.shib-h3-lily {
--h3-color: rgb(var(--lily));
}

.shib-h3-red {
--h3-color: rgb(var(--red));
}

.shib-h3-rose {
--h3-color: rgb(var(--rose));
}

.shib-h3-violet {
--h3-color: rgb(var(--violet));
}

.shib-h3-blue {
--h3-color: rgb(var(--blue));
}

.shib-h3-sea {
--h3-color: rgb(var(--sea));
}

.shib-h3-cyan {
--h3-color: rgb(var(--cyan));
}

.shib-h3-turquoise {
--h3-color: rgb(var(--turquoise));
}

.shib-h3-green {
--h3-color: rgb(var(--green));
}

.shib-h3-yellow {
--h3-color: rgb(var(--yellow));
}

.shib-h3-lemon {
--h3-color: rgb(var(--lemon));
}

.shib-h3-orange {
--h3-color: rgb(var(--orange));
}

.shib-h4-lily {
--h4-color: rgb(var(--lily));
}

.shib-h4-red {
--h4-color: rgb(var(--red));
}

.shib-h4-rose {
--h4-color: rgb(var(--rose));
}

.shib-h4-violet {
--h4-color: rgb(var(--violet));
}

.shib-h4-blue {
--h4-color: rgb(var(--blue));
}

.shib-h4-sea {
--h4-color: rgb(var(--sea));
}

.shib-h4-cyan {
--h4-color: rgb(var(--cyan));
}

.shib-h4-turquoise {
--h4-color: rgb(var(--turquoise));
}

.shib-h4-green {
--h4-color: rgb(var(--green));
}

.shib-h4-yellow {
--h4-color: rgb(var(--yellow));
}

.shib-h4-lemon {
--h4-color: rgb(var(--lemon));
}

.shib-h4-orange {
--h4-color: rgb(var(--orange));
}

.shib-h5-lily {
--h5-color: rgb(var(--lily));
}

.shib-h5-red {
--h5-color: rgb(var(--red));
}

.shib-h5-rose {
--h5-color: rgb(var(--rose));
}

.shib-h5-violet {
--h5-color: rgb(var(--violet));
}

.shib-h5-blue {
--h5-color: rgb(var(--blue));
}

.shib-h5-sea {
--h5-color: rgb(var(--sea));
}

.shib-h5-cyan {
--h5-color: rgb(var(--cyan));
}

.shib-h5-turquoise {
--h5-color: rgb(var(--turquoise));
}

.shib-h5-green {
--h5-color: rgb(var(--green));
}

.shib-h5-yellow {
--h5-color: rgb(var(--yellow));
}

.shib-h5-lemon {
--h5-color: rgb(var(--lemon));
}

.shib-h5-orange {
--h5-color: rgb(var(--orange));
}

.shib-h6-lily {
--h6-color: rgb(var(--lily));
}

.shib-h6-red {
--h6-color: rgb(var(--red));
}

.shib-h6-rose {
--h6-color: rgb(var(--rose));
}

.shib-h6-violet {
--h6-color: rgb(var(--violet));
}

.shib-h6-blue {
--h6-color: rgb(var(--blue));
}

.shib-h6-sea {
--h6-color: rgb(var(--sea));
}

.shib-h6-cyan {
--h6-color: rgb(var(--cyan));
}

.shib-h6-turquoise {
--h6-color: rgb(var(--turquoise));
}

.shib-h6-green {
--h6-color: rgb(var(--green));
}

.shib-h6-yellow {
--h6-color: rgb(var(--yellow));
}

.shib-h6-lemon {
--h6-color: rgb(var(--lemon));
}

.shib-h6-orange {
--h6-color: rgb(var(--orange));
}`,
    },
    "shiba-clutter-free-headings": {
      general: `body.shiba-clutter-free-headings div.mod-cm6.is-live-preview div:not(.cm-active).cm-line .cm-header.cm-hmd-internal-link::before, body.shiba-clutter-free-headings div.mod-cm6.is-live-preview div:not(.cm-active).cm-line .cm-header ~ span.cm-header::before, body.shiba-clutter-free-headings div.mod-cm6:not(.is-live-preview) div:not(.cm-active).cm-line span.cm-formatting-header, body.shiba-clutter-free-headings div.mod-cm6:not(.is-live-preview) div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header ~ span.cm-header::before {
display: none;
}

body.shiba-clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header):not(.cm-hashtag):not(.cm-inline-code):not(.cm-highlight).cm-header::before {
font-size: 0.6rem;
width: auto;
margin-right: 1px;
border-radius: var(--radius-xs);
color: var(--text-muted);
overflow: visible;
font-family: var(--font-default);
font-weight: 400 !important;
}

body.shiba-clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header-1::before {
content: "H1";
margin-top: calc(var(--h1-size) - 0.1em);
}

body.shiba-clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header-2::before {
content: "H2";
margin-top: calc(var(--h2-size) - 0.2em);
}

body.shiba-clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header-3::before {
content: "H3";
margin-top: calc(var(--h3-size) - 0.2em);
}

body.shiba-clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header-4::before {
content: "H4";
margin-top: calc(var(--h4-size) - 0.3em);
}

body.shiba-clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header-5::before {
content: "H5";
margin-top: calc(var(--h5-size) - 0.4em);
}

body.shiba-clutter-free-headings div:not(.cm-active).cm-line span:not(.cm-formatting-header).cm-header-6::before {
content: "H6";
margin-top: calc(var(--h6-size) - 0.4em);
}

body.shiba-clutter-free-headings div:not(.CodeMirror-activeline) > .CodeMirror-line.hmd-inactive-line span.cm-formatting-header::before {
position: absolute;
margin-top: 10px;
font-size: 0.7rem;
width: auto;
margin-left: -18px;
padding: 0 2px;
border-radius: var(--radius-xs);
color: var(--text-muted);
overflow: visible;
font-family: var(--font-default);
font-weight: 400 !important;
}

body.shiba-clutter-free-headings div:not(.CodeMirror-activeline) > .CodeMirror-line:not(.hmd-inactive-line) span.cm-formatting-header::before {
position: absolute;
margin-top: 10px;
font-size: 0.7rem;
width: auto;
margin-left: -6px;
border-radius: var(--radius-xs);
color: var(--text-muted);
overflow: visible;
font-family: var(--font-default);
font-weight: 400 !important;
}

body.shiba-clutter-free-headings div:not(.CodeMirror-activeline) > .CodeMirror-line span.cm-formatting-header {
color: transparent !important;
background: 0 0;
}

body.shiba-clutter-free-headings div:not(.CodeMirror-activeline) > .CodeMirror-line span.cm-formatting-header-1::before {
content: "H1";
}

body.shiba-clutter-free-headings div:not(.CodeMirror-activeline) > .CodeMirror-line span.cm-formatting-header-2::before {
content: "H2";
}

body.shiba-clutter-free-headings div:not(.CodeMirror-activeline) > .CodeMirror-line span.cm-formatting-header-3::before {
content: "H3";
}

body.shiba-clutter-free-headings div:not(.CodeMirror-activeline) > .CodeMirror-line span.cm-formatting-header-4::before {
content: "H4";
}

body.shiba-clutter-free-headings div:not(.CodeMirror-activeline) > .CodeMirror-line span.cm-formatting-header-5::before {
content: "H5";
}

body.shiba-clutter-free-headings div:not(.CodeMirror-activeline) > .CodeMirror-line span.cm-formatting-header-6::before {
content: "H6";
}`,
    },
    "shib-h1-lily": {
      general: `.shib-header-color-toggle.shib-h1-lily {
--h1-color: rgb(var(--lily));
}`,
    },
    "shib-h1-red": {
      general: `.shib-header-color-toggle.shib-h1-red {
--h1-color: rgb(var(--red));
}`,
    },
    "shib-h1-rose": {
      general: `.shib-header-color-toggle.shib-h1-rose {
--h1-color: rgb(var(--rose));
}`,
    },
    "shib-h1-violet": {
      general: `.shib-header-color-toggle.shib-h1-violet {
--h1-color: rgb(var(--violet));
}`,
    },
    "shib-h1-blue": {
      general: `.shib-header-color-toggle.shib-h1-blue {
--h1-color: rgb(var(--blue));
}`,
    },
    "shib-h1-sea": {
      general: `.shib-header-color-toggle.shib-h1-sea {
--h1-color: rgb(var(--sea));
}`,
    },
    "shib-h1-cyan": {
      general: `.shib-header-color-toggle.shib-h1-cyan {
--h1-color: rgb(var(--cyan));
}`,
    },
    "shib-h1-turquoise": {
      general: `.shib-header-color-toggle.shib-h1-turquoise {
--h1-color: rgb(var(--turquoise));
}`,
    },
    "shib-h1-green": {
      general: `.shib-header-color-toggle.shib-h1-green {
--h1-color: rgb(var(--green));
}`,
    },
    "shib-h1-yellow": {
      general: `.shib-header-color-toggle.shib-h1-yellow {
--h1-color: rgb(var(--yellow));
}`,
    },
    "shib-h1-lemon": {
      general: `.shib-header-color-toggle.shib-h1-lemon {
--h1-color: rgb(var(--lemon));
}`,
    },
    "shib-h1-orange": {
      general: `.shib-header-color-toggle.shib-h1-orange {
--h1-color: rgb(var(--orange));
}`,
    },
    "shib-h1-underline": {
      general: `.shib-h1-underline .markdown-source-view.is-live-preview .HyperMD-header.HyperMD-header-1.cm-line, .shib-h1-underline :is(.markdown-preview-view, .markdown-rendered) h1 {
border-bottom: var(--hr-thickness) solid var(--h1-color);
padding-bottom: 2px;
}`,
    },
    "shib-h2-lily": {
      general: `.shib-header-color-toggle.shib-h2-lily {
--h2-color: rgb(var(--lily));
}`,
    },
    "shib-h2-red": {
      general: `.shib-header-color-toggle.shib-h2-red {
--h2-color: rgb(var(--red));
}`,
    },
    "shib-h2-rose": {
      general: `.shib-header-color-toggle.shib-h2-rose {
--h2-color: rgb(var(--rose));
}`,
    },
    "shib-h2-violet": {
      general: `.shib-header-color-toggle.shib-h2-violet {
--h2-color: rgb(var(--violet));
}`,
    },
    "shib-h2-blue": {
      general: `.shib-header-color-toggle.shib-h2-blue {
--h2-color: rgb(var(--blue));
}`,
    },
    "shib-h2-sea": {
      general: `.shib-header-color-toggle.shib-h2-sea {
--h2-color: rgb(var(--sea));
}`,
    },
    "shib-h2-cyan": {
      general: `.shib-header-color-toggle.shib-h2-cyan {
--h2-color: rgb(var(--cyan));
}`,
    },
    "shib-h2-turquoise": {
      general: `.shib-header-color-toggle.shib-h2-turquoise {
--h2-color: rgb(var(--turquoise));
}`,
    },
    "shib-h2-green": {
      general: `.shib-header-color-toggle.shib-h2-green {
--h2-color: rgb(var(--green));
}`,
    },
    "shib-h2-yellow": {
      general: `.shib-header-color-toggle.shib-h2-yellow {
--h2-color: rgb(var(--yellow));
}`,
    },
    "shib-h2-lemon": {
      general: `.shib-header-color-toggle.shib-h2-lemon {
--h2-color: rgb(var(--lemon));
}`,
    },
    "shib-h2-orange": {
      general: `.shib-header-color-toggle.shib-h2-orange {
--h2-color: rgb(var(--orange));
}`,
    },
    "shib-h2-underline": {
      general: `.shib-h2-underline .markdown-source-view.is-live-preview .HyperMD-header.HyperMD-header-2.cm-line, .shib-h2-underline :is(.markdown-preview-view, .markdown-rendered) h2 {
border-bottom: var(--hr-thickness) solid var(--h2-color);
padding-bottom: 2px;
}`,
    },
    "shib-h3-lily": {
      general: `.shib-header-color-toggle.shib-h3-lily {
--h3-color: rgb(var(--lily));
}`,
    },
    "shib-h3-red": {
      general: `.shib-header-color-toggle.shib-h3-red {
--h3-color: rgb(var(--red));
}`,
    },
    "shib-h3-rose": {
      general: `.shib-header-color-toggle.shib-h3-rose {
--h3-color: rgb(var(--rose));
}`,
    },
    "shib-h3-violet": {
      general: `.shib-header-color-toggle.shib-h3-violet {
--h3-color: rgb(var(--violet));
}`,
    },
    "shib-h3-blue": {
      general: `.shib-header-color-toggle.shib-h3-blue {
--h3-color: rgb(var(--blue));
}`,
    },
    "shib-h3-sea": {
      general: `.shib-header-color-toggle.shib-h3-sea {
--h3-color: rgb(var(--sea));
}`,
    },
    "shib-h3-cyan": {
      general: `.shib-header-color-toggle.shib-h3-cyan {
--h3-color: rgb(var(--cyan));
}`,
    },
    "shib-h3-turquoise": {
      general: `.shib-header-color-toggle.shib-h3-turquoise {
--h3-color: rgb(var(--turquoise));
}`,
    },
    "shib-h3-green": {
      general: `.shib-header-color-toggle.shib-h3-green {
--h3-color: rgb(var(--green));
}`,
    },
    "shib-h3-yellow": {
      general: `.shib-header-color-toggle.shib-h3-yellow {
--h3-color: rgb(var(--yellow));
}`,
    },
    "shib-h3-lemon": {
      general: `.shib-header-color-toggle.shib-h3-lemon {
--h3-color: rgb(var(--lemon));
}`,
    },
    "shib-h3-orange": {
      general: `.shib-header-color-toggle.shib-h3-orange {
--h3-color: rgb(var(--orange));
}`,
    },
    "shib-h3-underline": {
      general: `.shib-h3-underline .markdown-source-view.is-live-preview .HyperMD-header.HyperMD-header-3.cm-line, .shib-h3-underline :is(.markdown-preview-view, .markdown-rendered) h3 {
border-bottom: var(--hr-thickness) solid var(--h3-color);
padding-bottom: 2px;
}`,
    },
    "shib-h4-lily": {
      general: `.shib-header-color-toggle.shib-h4-lily {
--h4-color: rgb(var(--lily));
}`,
    },
    "shib-h4-red": {
      general: `.shib-header-color-toggle.shib-h4-red {
--h4-color: rgb(var(--red));
}`,
    },
    "shib-h4-rose": {
      general: `.shib-header-color-toggle.shib-h4-rose {
--h4-color: rgb(var(--rose));
}`,
    },
    "shib-h4-violet": {
      general: `.shib-header-color-toggle.shib-h4-violet {
--h4-color: rgb(var(--violet));
}`,
    },
    "shib-h4-blue": {
      general: `.shib-header-color-toggle.shib-h4-blue {
--h4-color: rgb(var(--blue));
}`,
    },
    "shib-h4-sea": {
      general: `.shib-header-color-toggle.shib-h4-sea {
--h4-color: rgb(var(--sea));
}`,
    },
    "shib-h4-cyan": {
      general: `.shib-header-color-toggle.shib-h4-cyan {
--h4-color: rgb(var(--cyan));
}`,
    },
    "shib-h4-turquoise": {
      general: `.shib-header-color-toggle.shib-h4-turquoise {
--h4-color: rgb(var(--turquoise));
}`,
    },
    "shib-h4-green": {
      general: `.shib-header-color-toggle.shib-h4-green {
--h4-color: rgb(var(--green));
}`,
    },
    "shib-h4-yellow": {
      general: `.shib-header-color-toggle.shib-h4-yellow {
--h4-color: rgb(var(--yellow));
}`,
    },
    "shib-h4-lemon": {
      general: `.shib-header-color-toggle.shib-h4-lemon {
--h4-color: rgb(var(--lemon));
}`,
    },
    "shib-h4-orange": {
      general: `.shib-header-color-toggle.shib-h4-orange {
--h4-color: rgb(var(--orange));
}`,
    },
    "shib-h4-underline": {
      general: `.shib-h4-underline .markdown-source-view.is-live-preview .HyperMD-header.HyperMD-header-4.cm-line, .shib-h4-underline :is(.markdown-preview-view, .markdown-rendered) h4 {
border-bottom: var(--hr-thickness) solid var(--h4-color);
padding-bottom: 2px;
}`,
    },
    "shib-h5-lily": {
      general: `.shib-header-color-toggle.shib-h5-lily {
--h5-color: rgb(var(--lily));
}`,
    },
    "shib-h5-red": {
      general: `.shib-header-color-toggle.shib-h5-red {
--h5-color: rgb(var(--red));
}`,
    },
    "shib-h5-rose": {
      general: `.shib-header-color-toggle.shib-h5-rose {
--h5-color: rgb(var(--rose));
}`,
    },
    "shib-h5-violet": {
      general: `.shib-header-color-toggle.shib-h5-violet {
--h5-color: rgb(var(--violet));
}`,
    },
    "shib-h5-blue": {
      general: `.shib-header-color-toggle.shib-h5-blue {
--h5-color: rgb(var(--blue));
}`,
    },
    "shib-h5-sea": {
      general: `.shib-header-color-toggle.shib-h5-sea {
--h5-color: rgb(var(--sea));
}`,
    },
    "shib-h5-cyan": {
      general: `.shib-header-color-toggle.shib-h5-cyan {
--h5-color: rgb(var(--cyan));
}`,
    },
    "shib-h5-turquoise": {
      general: `.shib-header-color-toggle.shib-h5-turquoise {
--h5-color: rgb(var(--turquoise));
}`,
    },
    "shib-h5-green": {
      general: `.shib-header-color-toggle.shib-h5-green {
--h5-color: rgb(var(--green));
}`,
    },
    "shib-h5-yellow": {
      general: `.shib-header-color-toggle.shib-h5-yellow {
--h5-color: rgb(var(--yellow));
}`,
    },
    "shib-h5-lemon": {
      general: `.shib-header-color-toggle.shib-h5-lemon {
--h5-color: rgb(var(--lemon));
}`,
    },
    "shib-h5-orange": {
      general: `.shib-header-color-toggle.shib-h5-orange {
--h5-color: rgb(var(--orange));
}`,
    },
    "shib-h5-underline": {
      general: `.shib-h5-underline .markdown-source-view.is-live-preview .HyperMD-header.HyperMD-header-5.cm-line, .shib-h5-underline :is(.markdown-preview-view, .markdown-rendered) h5 {
border-bottom: var(--hr-thickness) solid var(--h5-color);
padding-bottom: 2px;
}`,
    },
    "shib-h6-lily": {
      general: `.shib-header-color-toggle.shib-h6-lily {
--h6-color: rgb(var(--lily));
}`,
    },
    "shib-h6-red": {
      general: `.shib-header-color-toggle.shib-h6-red {
--h6-color: rgb(var(--red));
}`,
    },
    "shib-h6-rose": {
      general: `.shib-header-color-toggle.shib-h6-rose {
--h6-color: rgb(var(--rose));
}`,
    },
    "shib-h6-violet": {
      general: `.shib-header-color-toggle.shib-h6-violet {
--h6-color: rgb(var(--violet));
}`,
    },
    "shib-h6-blue": {
      general: `.shib-header-color-toggle.shib-h6-blue {
--h6-color: rgb(var(--blue));
}`,
    },
    "shib-h6-sea": {
      general: `.shib-header-color-toggle.shib-h6-sea {
--h6-color: rgb(var(--sea));
}`,
    },
    "shib-h6-cyan": {
      general: `.shib-header-color-toggle.shib-h6-cyan {
--h6-color: rgb(var(--cyan));
}`,
    },
    "shib-h6-turquoise": {
      general: `.shib-header-color-toggle.shib-h6-turquoise {
--h6-color: rgb(var(--turquoise));
}`,
    },
    "shib-h6-green": {
      general: `.shib-header-color-toggle.shib-h6-green {
--h6-color: rgb(var(--green));
}`,
    },
    "shib-h6-yellow": {
      general: `.shib-header-color-toggle.shib-h6-yellow {
--h6-color: rgb(var(--yellow));
}`,
    },
    "shib-h6-lemon": {
      general: `.shib-header-color-toggle.shib-h6-lemon {
--h6-color: rgb(var(--lemon));
}`,
    },
    "shib-h6-orange": {
      general: `.shib-header-color-toggle.shib-h6-orange {
--h6-color: rgb(var(--orange));
}`,
    },
    "shib-h6-underline": {
      general: `.shib-h6-underline .markdown-source-view.is-live-preview .HyperMD-header.HyperMD-header-6.cm-line, .shib-h6-underline :is(.markdown-preview-view, .markdown-rendered) h6 {
border-bottom: var(--hr-thickness) solid var(--h6-color);
padding-bottom: 2px;
}`,
    },
    "shiba-italic-bold-style": {
      general: `.shiba-italic-bold-style {
--italic-color: rgb(var(--shib-italic-color, var(--green)));
--bold-color: rgb(var(--shib-bold-color, var(--red)));
}`,
    },
    "shib-italic-lily": {
      general: `.shib-italic-lily {
--shib-italic-color: var(--lily);
}`,
    },
    "shib-italic-red": {
      general: `.shib-italic-red {
--shib-italic-color: var(--red);
}`,
    },
    "shib-italic-rose": {
      general: `.shib-italic-rose {
--shib-italic-color: var(--rose);
}`,
    },
    "shib-italic-violet": {
      general: `.shib-italic-violet {
--shib-italic-color: var(--violet);
}`,
    },
    "shib-italic-blue": {
      general: `.shib-italic-blue {
--shib-italic-color: var(--blue);
}`,
    },
    "shib-italic-sea": {
      general: `.shib-italic-sea {
--shib-italic-color: var(--sea);
}`,
    },
    "shib-italic-cyan": {
      general: `.shib-italic-cyan {
--shib-italic-color: var(--cyan);
}`,
    },
    "shib-italic-green": {
      general: `.shib-italic-green {
--shib-italic-color: var(--green);
}`,
    },
    "shib-italic-yellow": {
      general: `.shib-italic-yellow {
--shib-italic-color: var(--yellow);
}`,
    },
    "shib-italic-lemon": {
      general: `.shib-italic-lemon {
--shib-italic-color: var(--lemon);
}`,
    },
    "shib-italic-orange": {
      general: `.shib-italic-orange {
--shib-italic-color: var(--orange);
}`,
    },
    "shib-bold-red": {
      general: `.shib-bold-red {
--shib-bold-color: var(--red);
}`,
    },
    "shib-bold-rose": {
      general: `.shib-bold-rose {
--shib-bold-color: var(--rose);
}`,
    },
    "shib-bold-violet": {
      general: `.shib-bold-violet {
--shib-bold-color: var(--violet);
}`,
    },
    "shib-bold-blue": {
      general: `.shib-bold-blue {
--shib-bold-color: var(--blue);
--shib-bold-color: var(--lily);
}`,
    },
    "shib-bold-sea": {
      general: `.shib-bold-sea {
--shib-bold-color: var(--sea);
}`,
    },
    "shib-bold-cyan": {
      general: `.shib-bold-cyan {
--shib-bold-color: var(--cyan);
}`,
    },
    "shib-bold-turquoise": {
      general: `.shib-bold-turquoise {
--shib-bold-color: var(--turquoise);
}`,
    },
    "shib-bold-green": {
      general: `.shib-bold-green {
--shib-bold-color: var(--green);
}`,
    },
    "shib-bold-yellow": {
      general: `.shib-bold-yellow {
--shib-bold-color: var(--yellow);
}`,
    },
    "shib-bold-lemon": {
      general: `.shib-bold-lemon {
--shib-bold-color: var(--lemon);
}`,
    },
    "shib-bold-orange": {
      general: `.shib-bold-orange {
--shib-bold-color: var(--orange);
}`,
    },
    "image-zoom": {
      general: `.image-zoom .view-content :is(.cm-editor, .markdown-preview-view) img {
max-width: 100%;
cursor: zoom-in;
}

.image-zoom :is(.HyperMD-list-line, ul) .image-embed.image-embed img:active, body.image-zoom:not(.is-mobile) .view-content .image-embed:active, body.image-zoom:not(.is-mobile) .view-content :is(.cm-editor, .markdown-preview-view) img:active {
cursor: zoom-out;
display: block;
background: rgba(0, 0, 0, 0.5);
max-height: calc(100% + 1px);
max-width: calc(100% - 20px);
height: calc(100% + 1px);
width: 100%;
object-fit: contain;
margin: -0.5px auto 0;
padding: 0;
text-align: center;
position: fixed;
left: 0;
right: 0;
bottom: 0;
z-index: 100;
}`,
    },
    "link-underline-external": {
      general: `body.link-underline-external .markdown-source-view.mod-cm6 .cm-link .cm-underline, body.link-underline-external a.external-link {
text-decoration-line: none;
}`,
    },
    "link-underline-unresolved": {
      general: `body.link-underline-unresolved * > .internal-link.is-unresolved, body.link-underline-unresolved .cm-hmd-internal-link .is-unresolved .cm-underline, body.link-underline-unresolved .markdown-source-view.mod-cm6 .cm-hmd-internal-link .is-unresolved, body.link-underline-unresolved .markdown-source-view.mod-cm6 .is-unresolved, body.link-underline-unresolved :is(.markdown-preview-view, .markdown-rendered) .internal-link.is-unresolved, body.link-underline-unresolved :is(.markdown-preview-view, .markdown-rendered) .internal-link.is-unresolved > * {
text-decoration: none !important;
}`,
    },
    "shib-default-tab": {
      general: `.shib-default-tab {
--header-height: var(--shib-alt-tab-custom-height, 40px);
--tab-stacked-header-width: var(--shib-stacked-header-width, 40px);
}`,
    },
    "shib-solid-tab-toggle": {
      general: `.shib-solid-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header::after, .shib-solid-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header::before, .shib-solid-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header:not(.workspace-tab-header.is-active) ::after {
display: none;
}

.shib-solid-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header {
box-shadow: none;
}

.shib-solid-tab-toggle {
--header-height: var(--shib-alt-tab-custom-height, 40px);
--tab-stacked-header-width: var(--shib-stacked-header-width, 40px);
}

.shib-solid-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header.is-active {
border-radius: var(--tab-radius);
border-left: 1px solid var(--tab-outline-color);
border-right: 1px solid var(--tab-outline-color);
border-top: 1px solid var(--tab-outline-color);
border-bottom: 1px solid var(--tab-background-active);
margin-bottom: 0;
padding-bottom: 0;
}

.shib-solid-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header.is-active .workspace-tab-header-inner {
border-radius: var(--tab-radius);
margin-top: 0.5px;
padding-bottom: 4px;
}

.shib-solid-tab-toggle .workspace-split:not(.mod-left-split):not(.mod-right-split) .workspace-tab-header-container-inner .workspace-tab-header:hover:not(.workspace-tab-header.is-active) .workspace-tab-header-inner {
background-color: var(--background-secondary);
border-radius: var(--tab-radius);
margin-bottom: 0;
padding-bottom: 0;
}`,
    },
    "shib-floating-tab-toggle": {
      general: `.shib-floating-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header::after, .shib-floating-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header::before {
display: none;
}

.shib-floating-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner {
background-color: transparent;
}

.shib-floating-tab-toggle .workspace-split.mod-vertical.mod-root {
--tab-background-inactive: var(--background-secondary-alt);
--tab-background-active: var(--background-primary);
--tab-background-inactive-hover: var(--background-primary-secondary);
--tab-text-color: var(--text-faint);
--tab-text-color-active: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
--tab-text-color-focused-active: var(--text-muted);
--tab-text-color-focused-highlighted: var(--text-accent);
--tab-text-color-focused-active-current: var(--text-accent);
--tab-divider-color: var(--background-modifier-border-hover);
}

.shib-floating-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner {
margin: 3px 0 !important;
gap: var(--shib-floating-tab-gap, 5px);
}

.shib-floating-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header {
border-radius: var(--tab-radius);
border: var(--shib-floating-border-width, 1px) solid var(--tab-outline-color);
background-color: var(--tab-background-inactive);
color: var(--text-muted);
max-width: var(--tab-max-width);
}

.shib-floating-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header .workspace-tab-header-inner .workspace-tab-header-inner-title {
margin-top: 3px;
}

.shib-floating-tab-toggle .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header.is-active {
background-color: var(--tab-background-active);
max-width: var(--tab-max-width);
box-shadow: none;
}

.shib-floating-tab-toggle:not(.shib-disable-newtab-align) .workspace-tab-header-container-inner {
width: 100%;
}

.shib-floating-tab-animated .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header {
transition:
    max-width 0.4s ease-in-out,
    width 0.4s ease-in-out,
    flex-grow 0.4s,
    background-color 150ms;
}

.shib-floating-tab-animated .workspace-split.mod-vertical.mod-root .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner .workspace-tab-header.is-active {
flex-grow: 1.67;
max-width: var(--tab-max-width-active);
}

.shib-floating-tab-toggle {
--header-height: var(--shib-alt-tab-custom-height, 40px);
--tab-stacked-header-width: var(--shib-stacked-header-width, 40px);
}

.shib-floating-tab-toggle .workspace-tabs:not(.mod-stacked) {
--tab-background: var(--background-secondary);
--tab-background-active: var(--background-primary);
--tab-font-size: 12.3px;
--tab-height: calc(var(--header-height) * 0.8);
--tab-max-width: 200px;
--tab-max-width-active: 300px;
}`,
    },
    "shib-floating-animated-tab-toggle": {
      general: `.shib-floating-animated-tab-toggle .workspace .mod-root .workspace-tab-header-inner::after, .shib-floating-animated-tab-toggle .workspace .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner::after, .shib-floating-animated-tab-toggle .workspace-tabs:not(.mod-stacked) .workspace-tab-header::after, .shib-floating-animated-tab-toggle .workspace-tabs:not(.mod-stacked) .workspace-tab-header::before {
display: none;
}

.shib-floating-animated-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner, .shib-floating-animated-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner-close-button, .shib-floating-animated-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner-icon {
color: var(--text-muted);
}

.shib-floating-animated-tab-toggle {
--header-height: var(--shib-alt-tab-custom-height, 40px);
--tab-stacked-header-width: var(--shib-stacked-header-width, 40px);
}

.shib-floating-animated-tab-toggle .workspace-tabs:not(.mod-stacked) {
--tab-background: var(--background-secondary);
--tab-background-active: var(--background-primary);
--tab-font-size: 12.3px;
--tab-height: calc(var(--header-height) * 0.8);
--tab-max-width: 200px;
--tab-max-width-active: 300px;
}

.shib-floating-animated-tab-toggle .workspace-ribbon.mod-left {
margin-top: var(--header-height);
}

.shib-floating-animated-tab-toggle .workspace-ribbon.mod-left:before {
padding-bottom: 0;
}

.shib-floating-animated-tab-toggle .mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner, .shib-floating-animated-tab-toggle .mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner {
font-size: var(--font-size-folder-and-file);
font-family: var(--font-family-folder-file-title);
align-items: center;
justify-content: var(--shib-floating-tab-align, center);
margin: 0;
width: 100%;
gap: var(--shib-floating-tab-gap, 10px);
}

.shib-disable-newtab-align.shib-floating-animated-tab-toggle .mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner, .shib-disable-newtab-align.shib-floating-animated-tab-toggle .mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner {
width: unset;
gap: var(--shib-floating-tab-gap, 10px);
}

.shib-floating-animated-tab-toggle .mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header, .shib-floating-animated-tab-toggle .mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
background: var(--tab-background);
border-radius: var(--tab-radius);
box-shadow: none !important;
height: var(--tab-height);
padding: 0 !important;
transition:
    0.4s,
    background-color 150ms ease-in-out;
}

.shib-floating-animated-tab-toggle .mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header, .shib-floating-animated-tab-toggle:is(.shib-card-layout) .mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
background: var(--tab-background);
border-radius: var(--shib-floating-tab-radius, 6px);
box-shadow: none !important;
height: var(--tab-height);
padding: 0 !important;
transition:
    0.4s,
    background-color 150ms ease-in-out;
}

.shib-floating-animated-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
max-width: var(--tab-max-width);
border: var(--shib-floating-border-width, 1px) solid var(--tab-outline-color);
}

.shib-alt-tab-anim-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
transition:
    0.4s,
    background-color 150ms ease-in-out;
}

.shib-floating-animated-tab-toggle .workspace-tabs:not(.mod-stacked) .workspace-tab-header:first-child {
margin-left: 0;
}

.shib-floating-animated-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner {
padding: 0 4px 0 8px;
transition:
    0.4s,
    background-color 150ms ease-in-out,
    max-width 0.4s;
}

.shib-floating-animated-tab-toggle .mod-root:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active {
flex-grow: 1.23;
max-width: var(--tab-max-width-active);
background-color: var(--background-primary);
}

.shib-floating-animated-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color: var(--text-muted);
font-weight: 500;
}

.shib-floating-animated-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner, .shib-floating-animated-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, .shib-floating-animated-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .shib-floating-animated-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color: var(--text-faint);
}

.shib-floating-animated-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner:hover {
background-color: rgba(var(--background-secondary), 0.4);
}

.shib-floating-animated-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked).mod-active .workspace-tab-header.is-active .workspace-tab-header-inner, .shib-floating-animated-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked).mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, .shib-floating-animated-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked).mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .shib-floating-animated-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked).mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color: var(--text-normal) !important;
}

.shib-floating-animated-tab-toggle .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active:hover {
background-color: var(--background-modifier-border);
}

.shib-floating-animated-tab-toggle .sidebar-toggle-button.mod-left, .shib-floating-animated-tab-toggle .sidebar-toggle-button.mod-right {
align-items: center;
}

.shib-floating-animated-tab-toggle .sidebar-toggle-button.mod-left .clickable-icon, .shib-floating-animated-tab-toggle .sidebar-toggle-button.mod-right .clickable-icon {
height: var(--tab-height);
}`,
    },
    "shib-disable-newtab-align": {
      general: `.shib-floating-animated-tab-toggle .mod-horizontal:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner, .shib-floating-animated-tab-toggle .mod-vertical:not(.mod-left-split):not(.mod-right-split) .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner {
width: unset;
gap: var(--shib-floating-tab-gap, 10px);
}`,
    },
    "shib-table-toggle": {
      general: `.shib-table-auto.shib-table-toggle .markdown-rendered.cards:not(.table-disable) table:not(.dataview), .shib-table-auto.shib-table-toggle .markdown-rendered:not(.cards):not(.table-disable) table {
margin: 0 auto;
}

.shib-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview), .shib-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) td, .shib-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) th, .shib-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) thead tr > th, .shib-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) thead tr > th:first-child, .shib-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) thead tr > th:last-child, .shib-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) .shib-table-toggle .is-live-preview:not(.cards):not(.table-disable) table, .shib-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) .shib-table-toggle .is-live-preview:not(.cards):not(.table-disable) table td, .shib-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) .shib-table-toggle .is-live-preview:not(.cards):not(.table-disable) table th, .shib-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) .shib-table-toggle .is-live-preview:not(.cards):not(.table-disable) table thead tr > th, .shib-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) .shib-table-toggle .is-live-preview:not(.cards):not(.table-disable) table thead tr > th:first-child, .shib-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) .shib-table-toggle .is-live-preview:not(.cards):not(.table-disable) table thead tr > th:last-child, .shib-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table, .shib-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table td, .shib-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table th, .shib-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table thead tr > th, .shib-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table thead tr > th:first-child, .shib-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table thead tr > th:last-child {
border: var(--shib-table-thickness, 1px) solid var(--table-border-color);
}

.shib-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) th, .shib-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) thead tr > th, .shib-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) thead tr > th:first-child, .shib-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) thead tr > th:last-child, .shib-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) .shib-table-toggle .is-live-preview:not(.cards):not(.table-disable) table th, .shib-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) .shib-table-toggle .is-live-preview:not(.cards):not(.table-disable) table thead tr > th, .shib-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) .shib-table-toggle .is-live-preview:not(.cards):not(.table-disable) table thead tr > th:first-child, .shib-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) .shib-table-toggle .is-live-preview:not(.cards):not(.table-disable) table thead tr > th:last-child, .shib-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table th, .shib-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table thead tr > th, .shib-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table thead tr > th:first-child, .shib-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table thead tr > th:last-child {
text-align: var(--shib-table-align-th, center);
}

.shib-table-toggle .is-live-preview.cards:not(.table-disable) table:not(.dataview) td, .shib-table-toggle .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) .shib-table-toggle .is-live-preview:not(.cards):not(.table-disable) table td, .shib-table-toggle .markdown-preview-view:not(.cards):not(.table-disable) table td {
text-align: var(--shib-table-align-td, center);
}

.shib-td-alt-cols .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .shib-td-alt-cols .is-live-preview:not(.cards):not(.table-disable) table tr td:nth-child(2n), .shib-td-alt-cols .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .shib-td-alt-cols .markdown-preview-view:not(.cards):not(.table-disable) table tr td:nth-child(2n), .shib-td-alt-rows .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td, .shib-td-alt-rows .is-live-preview:not(.cards):not(.table-disable) table tr:nth-child(2n) td, .shib-td-alt-rows .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td, .shib-td-alt-rows .markdown-preview-view:not(.cards):not(.table-disable) table tr:nth-child(2n) td, .shib-td-checkered .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .shib-td-checkered .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td, .shib-td-checkered .is-live-preview:not(.cards):not(.table-disable) table tr td:nth-child(2n), .shib-td-checkered .is-live-preview:not(.cards):not(.table-disable) table tr:nth-child(2n) td, .shib-td-checkered .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .shib-td-checkered .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td, .shib-td-checkered .markdown-preview-view:not(.cards):not(.table-disable) table tr td:nth-child(2n), .shib-td-checkered .markdown-preview-view:not(.cards):not(.table-disable) table tr:nth-child(2n) td, .shib-td-full .is-live-preview.cards:not(.table-disable) table:not(.dataview) td, .shib-td-full .is-live-preview:not(.cards:not(.table-disable)) table td, .shib-td-full .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) td, .shib-td-full .markdown-preview-view:not(.cards):not(.table-disable) table td, .shib-th-highlight .is-live-preview.cards:not(.table-disable) table:not(.dataview) th, .shib-th-highlight .is-live-preview:not(.cards):not(.table-disable) th, .shib-th-highlight .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) th, .shib-th-highlight .markdown-preview-view:not(.cards):not(.table-disable) th {
background-color: rgba(var(--side), var(--shib-table-highlight-opacity, 0.5));
}

.shib-td-checkered .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td:nth-child(2n), .shib-td-checkered .is-live-preview:not(.cards):not(.table-disable) table tr:nth-child(2n) td:nth-child(2n), .shib-td-checkered .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td:nth-child(2n), .shib-td-checkered .markdown-preview-view:not(.cards):not(.table-disable) table tr:nth-child(2n) td:nth-child(2n) {
background-color: rgba(var(--exterior), var(--shib-table-highlight-opacity, 0.5));
}

.shib-table-width.shib-table-toggle .markdown-rendered.cards:not(.table-disable) table:not(.dataview), .shib-table-width.shib-table-toggle .markdown-rendered:not(.cards):not(.table-disable) table {
width: var(--shib-table-width-pct);
margin-left: calc(50% - var(--shib-table-width-pct) / 2);
margin-right: calc(50% - var(--shib-table-width-pct) / 2);
}`,
    },
    "shib-table-auto": {
      general: `.markdown-rendered.cards:not(.table-disable) table:not(.dataview), .markdown-rendered:not(.cards):not(.table-disable) table, .shib-table-toggle .markdown-rendered.cards:not(.table-disable) table:not(.dataview), .shib-table-toggle .markdown-rendered:not(.cards):not(.table-disable) table {
margin: 0 auto;
}`,
    },
    "shib-th-highlight": {
      general: `.shib-table-toggle.shib-th-highlight .is-live-preview.cards:not(.table-disable) table:not(.dataview) th, .shib-table-toggle.shib-th-highlight .is-live-preview:not(.cards):not(.table-disable) th, .shib-table-toggle.shib-th-highlight .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) th, .shib-table-toggle.shib-th-highlight .markdown-preview-view:not(.cards):not(.table-disable) th {
background-color: rgba(var(--side), var(--shib-table-highlight-opacity, 0.5));
}`,
    },
    "shib-td-alt-rows": {
      general: `.shib-table-toggle.shib-td-alt-rows .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td, .shib-table-toggle.shib-td-alt-rows .is-live-preview:not(.cards):not(.table-disable) table tr:nth-child(2n) td, .shib-table-toggle.shib-td-alt-rows .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td, .shib-table-toggle.shib-td-alt-rows .markdown-preview-view:not(.cards):not(.table-disable) table tr:nth-child(2n) td {
background-color: rgba(var(--side), var(--shib-table-highlight-opacity, 0.5));
}`,
    },
    "shib-td-alt-cols": {
      general: `.shib-table-toggle.shib-td-alt-cols .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .shib-table-toggle.shib-td-alt-cols .is-live-preview:not(.cards):not(.table-disable) table tr td:nth-child(2n), .shib-table-toggle.shib-td-alt-cols .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .shib-table-toggle.shib-td-alt-cols .markdown-preview-view:not(.cards):not(.table-disable) table tr td:nth-child(2n) {
background-color: rgba(var(--side), var(--shib-table-highlight-opacity, 0.5));
}`,
    },
    "shib-td-checkered": {
      general: `.shib-table-toggle.shib-td-checkered .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .shib-table-toggle.shib-td-checkered .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td, .shib-table-toggle.shib-td-checkered .is-live-preview:not(.cards):not(.table-disable) table tr td:nth-child(2n), .shib-table-toggle.shib-td-checkered .is-live-preview:not(.cards):not(.table-disable) table tr:nth-child(2n) td, .shib-table-toggle.shib-td-checkered .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr td:nth-child(2n), .shib-table-toggle.shib-td-checkered .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td, .shib-table-toggle.shib-td-checkered .markdown-preview-view:not(.cards):not(.table-disable) table tr td:nth-child(2n), .shib-table-toggle.shib-td-checkered .markdown-preview-view:not(.cards):not(.table-disable) table tr:nth-child(2n) td {
background-color: rgba(var(--side), var(--shib-table-highlight-opacity, 0.5));
}

.shib-table-toggle.shib-td-checkered .is-live-preview.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td:nth-child(2n), .shib-table-toggle.shib-td-checkered .is-live-preview:not(.cards):not(.table-disable) table tr:nth-child(2n) td:nth-child(2n), .shib-table-toggle.shib-td-checkered .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) tr:nth-child(2n) td:nth-child(2n), .shib-table-toggle.shib-td-checkered .markdown-preview-view:not(.cards):not(.table-disable) table tr:nth-child(2n) td:nth-child(2n) {
background-color: rgba(var(--exterior), var(--shib-table-highlight-opacity, 0.5));
}`,
    },
    "shib-td-full": {
      general: `.shib-table-toggle.shib-td-full .is-live-preview.cards:not(.table-disable) table:not(.dataview) td, .shib-table-toggle.shib-td-full .is-live-preview:not(.cards:not(.table-disable)) table td, .shib-table-toggle.shib-td-full .markdown-preview-view.cards:not(.table-disable) table:not(.dataview) td, .shib-table-toggle.shib-td-full .markdown-preview-view:not(.cards):not(.table-disable) table td {
background-color: rgba(var(--side), var(--shib-table-highlight-opacity, 0.5));
}`,
    },
    "shib-callout-toggle": {
      general: `.shib-callout-toggle .callout[data-callout="quote"] .callout-title .callout-title-inner, .shib-callout-style-2 .callout.is-collapsible.is-collapsed .callout-content, .shib-callout-style-3 .callout.is-collapsible.is-collapsed .callout-content {
display: none;
}

.shib-callout-toggle:not(:checked) + body:not( .shib-callout-style-1, .shib-callout-style-2, .shib-callout-style-3, .shib-callout-style-4, .shib-callout-block ) {
--callout-border-width: 0 0 0 4px;
--callout-border-opacity: 1;
--callout-radius: 0;
--callout-padding: 0;
--callout-title-padding: var(--size-4-4) var(--size-4-4);
--callout-content-padding: var(--size-4-2) var(--size-4-4);
}

.shib-callout-style-2 .callout, .shib-callout-style-2 .callout.is-collapsible.is-collapsed, .shib-callout-style-2 .callout:not(.is-collapsible), .shib-callout-style-3 .callout, .shib-callout-style-3 .callout.is-collapsible.is-collapsed, .shib-callout-style-3 .callout:not(.is-collapsible), .shib-callout-style-4 .callout, .shib-callout-style-4 .callout:not(.is-collapsible) {
padding: 0;
}

.shib-callout-style-2 .callout .callout-content, .shib-callout-style-2 .callout:not(.is-collapsible) .callout-content, .shib-callout-style-3 .callout .callout-content, .shib-callout-style-3 .callout:not(.is-collapsible) .callout-content {
padding: 0 var(--callout-title-padding) var(--callout-title-padding) var(--callout-title-padding);
}

.shib-callout-style-2 .callout .callout-title, .shib-callout-style-2 .callout:not(.is-collapsible) .callout-title, .shib-callout-style-3 .callout .callout-title, .shib-callout-style-3 .callout:not(.is-collapsible) .callout-title {
background-color: rgba(var(--callout-color), 0 0.5);
padding: var(--callout-title-padding);
cursor: pointer;
}

.shib-callout-style-2 .callout .callout-title .callout-title-inner, .shib-callout-style-2 .callout:not(.is-collapsible) .callout-title .callout-title-inner, .shib-callout-style-3 .callout .callout-title .callout-title-inner, .shib-callout-style-3 .callout:not(.is-collapsible) .callout-title .callout-title-inner {
font-weight: 400;
}

.shib-callout-style-2 .callout:not(.is-collapsible), .shib-callout-style-3 .callout:not(.is-collapsible) {
border-color: rgba(var(--callout-color), 0.4);
border-width: 1px;
border-radius: var(--callout-radius);
background-color: rgba(var(--side), 0.4);
}

.shib-callout-style-3 .callout .callout-content {
padding: var(--callout-title-padding) var(--callout-title-padding) var(--callout-title-padding)
    calc(var(--callout-title-padding) * 1.5);
border-top: 1px solid rgba(var(--callout-color), 0.4);
}

.shib-callout-style-1 .callout .callout-fold, .shib-callout-style-1 .callout.is-collapsible .callout-fold, .shib-callout-style-2 .callout .callout-fold, .shib-callout-style-2 .callout.is-collapsible .callout-fold, .shib-callout-style-3 .callout .callout-fold, .shib-callout-style-3 .callout.is-collapsible .callout-fold, .shib-callout-style-4 .callout.is-collapsible .callout-fold {
padding-right: 0;
}

.shib-callout-style-1 .callout.is-collapsible .callout-title-inner, .shib-callout-style-2 .callout .callout-title-inner, .shib-callout-style-2 .callout.is-collapsible .callout-title-inner, .shib-callout-style-3 .callout .callout-title-inner, .shib-callout-style-3 .callout.is-collapsible .callout-title-inner, .shib-callout-style-4 .callout .callout-title-inner, .shib-callout-style-4 .callout.is-collapsible .callout-title-inner {
flex-grow: var(--shib-callout-fold-position, unset);
}

.shib-callout-style-2 .callout.is-collapsible, .shib-callout-style-3 .callout.is-collapsible {
border-color: rgba(var(--callout-color), 0.4);
border-width: 1px;
border-radius: var(--callout-radius);
background-color: rgba(var(--side), 0.4);
--bold-weight: bolder;
}

.shib-callout-style-2 .callout.is-collapsible.is-collapsed .callout-title, .shib-callout-style-3 .callout.is-collapsible.is-collapsed .callout-title {
background-color: rgba(var(--callout-color), 0.1);
padding: var(--callout-title-padding);
cursor: pointer;
}

.shib-callout-style-2 .callout.is-collapsible:not(.is-collapsed), .shib-callout-style-3 .callout.is-collapsible:not(.is-collapsed) {
padding: 0 0 var(--callout-title-padding) 0;
}

.shib-callout-style-2 .callout.is-collapsible:not(.is-collapsed) .callout-title, .shib-callout-style-3 .callout.is-collapsible:not(.is-collapsed) .callout-title {
background-color: rgba(var(--callout-color), 0.1);
padding: var(--callout-title-padding);
border-color: rgba(var(--callout-color), 0.4);
cursor: pointer;
}

.shib-callout-style-3 .callout.is-collapsible:not(.is-collapsed) .callout-content {
padding: var(--callout-title-padding) var(--callout-title-padding) 0 calc(var(--callout-title-padding) * 1.5);
border-top: 2px solid rgba(var(--callout-color), 0.4);
}

.shib-callout-style-2 .callout:not(.is-collapsible) .callout-title, .shib-callout-style-3 .callout:not(.is-collapsible) .callout-title {
background-color: rgba(var(--callout-color), 0.1);
padding: var(--callout-title-padding);
border-color: rgba(var(--callout-color), 0.4);
}

.shib-callout-style-2 .callout .list-collapse-indicator, .shib-callout-style-3 .callout .list-collapse-indicator {
margin-left: -35px;
padding-right: 3px;
}

.shib-callout-style-1 {
--callout-padding: 4px;
--callout-radius: var(--radius-m);
--callout-padding: 0px;
}

.shib-callout-style-1 .callout {
background-color: unset;
}

.shib-callout-style-1 .callout .callout-title {
position: relative;
align-items: center;
min-height: 36px;
border: 2px solid;
border-radius: 10px;
background-color: rgba(var(--callout-color), 0.1);
border-color: rgba(var(--callout-color), 0.4);
}

.shib-callout-style-1 .callout .callout-title:empty + .callout-content {
padding: 12px;
border-top-style: solid;
border-top-width: 1px;
border-radius: 10px;
}

.shib-callout-style-1 .callout .callout-title-inner {
padding: 0;
margin: 0 var(--size-4-1);
flex-grow: var(--shib-callout-fold-position, unset);
}

.shib-callout-style-1 .callout .callout-icon {
border-radius: 10px;
}

.shib-callout-style-1 .callout .callout-content {
padding: 20px;
margin-top: -8px;
border-color: rgba(var(--callout-color), 0.4);
}

.shib-callout-style-1 .callout.is-collapsible:not(.is-collapsed) .callout-content {
border-right: 1px solid;
border-bottom: 1px solid;
border-left: 1px solid;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
border-color: rgba(var(--callout-color), 0.4);
padding: var(--size-4-4);
}

.shib-callout-block .callout.is-collapsible, .shib-callout-style-1 .callout.is-collapsible {
background-color: rgba(var(--side), 0.4);
--bold-weight: bolder;
}

.shib-callout-style-2 .callout .callout-content {
padding: var(--callout-title-padding) var(--callout-title-padding) var(--callout-title-padding)
    calc(var(--callout-title-padding) * 1.5);
border-top: 1px dashed rgba(var(--callout-color), 0.4);
}

.shib-callout-style-2 .callout.is-collapsible:not(.is-collapsed) .callout-content {
padding: var(--callout-title-padding) var(--callout-title-padding) 0 calc(var(--callout-title-padding) * 1.5);
border-top: 1px dashed rgba(var(--callout-color), 0.4);
}

.shib-callout-style-4 .callout {
padding: 0;
border: 1px solid rgba(var(--callout-color), 0.2);
overflow: hidden;
}

.shib-callout-style-4 .callout.is-collapsible:not(.is-collapsed) .callout-fold {
padding-right: 0;
color: rgba(var(--callout-color), 1);
}

.shib-callout-block .callout {
border-top: 2px solid rgb(var(--callout-color));
border-left: 2px solid rgb(var(--callout-color));
border-right: 2px solid rgb(var(--callout-color));
border-bottom: 2px solid rgb(var(--callout-color));
border-radius: 10px;
border-color: rgba(var(--callout-color), 0.5);
background-color: unset;
border-radius: var(--callout-radius);
}

.shib-callout-block .callout .callout-title {
align-self: auto;
margin-left: -15px;
}

.shib-callout-toggle .callout-content > ol:first-child, .shib-callout-toggle .callout-content > p:first-child, .shib-callout-toggle .callout-content > ul:first-child, .shib-callout-toggle .callout[data-callout="quote"] .callout-content p:first-child {
margin-top: 0;
}

.shib-callout-toggle .callout-content > ol:last-child, .shib-callout-toggle .callout-content > p:last-child, .shib-callout-toggle .callout-content > ul:last-child {
margin-bottom: 0;
}

.shib-callout-toggle .callout[data-callout="quote"] .callout-title .callout-icon {
margin: 0 auto;
}

.shib-callout-toggle .callout[data-callout="quote"] .callout-content {
padding-top: 20px;
}

.shib-callout-toggle .callout[data-callout="quote"] .callout-content p {
font-style: italic;
text-align: center;
}

.shib-callout-toggle .callout[data-callout="quote"] .callout-content p:last-child {
font-style: normal;
color: rgb(var(--yellow, 153, 122, 0));
text-align: right;
margin-bottom: 0;
}`,
      dark: `.shib-callout-style-4.shib-callout-style-4.theme-dark .callout {
box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
}

.shib-callout-style-4.theme-dark .callout-title {
background: rgba(var(--callout-color), 0.2);
}

.shib-callout-style-4.theme-dark .callout-title .callout-icon {
border-radius: 10px;
filter: brightness(1);
}

.shib-callout-style-4.theme-dark .callout.is-collapsed:not(.is-collapsed) .callout-title {
padding: 0;
box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.175) inset;
}

.shib-callout-style-4.theme-dark .callout-fold {
filter: brightness(1);
}

.shib-callout-style-4.theme-dark .callout-content {
padding: var(--size-4-4);
background: var(--color-d-black);
box-shadow: 0 -2px 0 0 rgba(0, 0, 0, 0.175) inset;
}`,
      light: `.shib-callout-style-4.shib-callout-style-4.theme-light .callout {
box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
}

.shib-callout-style-4.theme-light .callout-title {
background: rgba(var(--callout-color), 0.2);
padding: var(--callout-title-padding);
cursor: pointer;
}

.shib-callout-style-4.theme-light .callout-title .callout-icon {
border-radius: 10px;
filter: brightness(0.75);
}

.shib-callout-style-4.theme-light .callout.is-collapsed:not(.is-collapsed) .callout-title {
padding: 0;
box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05) inset;
}

.shib-callout-style-4.theme-light .callout-fold {
filter: brightness(0.75);
}

.shib-callout-style-4.theme-light .callout-content {
padding: var(--size-4-4);
background-color: rgba(var(--side), 1);
box-shadow: 0 -2px 0 0 rgba(0, 0, 0, 0.05) inset;
}

.shib-callout-toggle .callout-title-inner, .shib-callout-default .callout:not(.is-collapsible) .callout-title-inner {
color: var(--text-normal);
--bold-color: var(--text-normal);
--italic-color: var(--text-normal);
}`,
    },
    "shib-callout-default": {
      light: `.shib-callout-toggle.shib-callout-default .callout:not(.is-collapsible) .callout-title-inner {
color: var(--text-normal);
--bold-color: var(--text-normal);
--italic-color: var(--text-normal);
}`,
    },
    "shib-callout-style-1": {
      general: `.shib-callout-toggle.shib-callout-style-1 .callout .callout-fold, .shib-callout-toggle.shib-callout-style-1 .callout.is-collapsible .callout-fold {
padding-right: 0;
}

.shib-callout-toggle.shib-callout-style-1 .callout.is-collapsible .callout-title-inner {
flex-grow: var(--shib-callout-fold-position, unset);
}

.shib-callout-toggle.shib-callout-style-1 {
--callout-padding: 4px;
--callout-radius: var(--radius-m);
--callout-padding: 0px;
}

.shib-callout-toggle.shib-callout-style-1 .callout {
background-color: unset;
}

.shib-callout-toggle.shib-callout-style-1 .callout .callout-title {
position: relative;
align-items: center;
min-height: 36px;
border: 2px solid;
border-radius: 10px;
background-color: rgba(var(--callout-color), 0.1);
border-color: rgba(var(--callout-color), 0.4);
}

.shib-callout-toggle.shib-callout-style-1 .callout .callout-title:empty + .callout-content {
padding: 12px;
border-top-style: solid;
border-top-width: 1px;
border-radius: 10px;
}

.shib-callout-toggle.shib-callout-style-1 .callout .callout-title-inner {
padding: 0;
margin: 0 var(--size-4-1);
flex-grow: var(--shib-callout-fold-position, unset);
}

.shib-callout-toggle.shib-callout-style-1 .callout .callout-icon {
border-radius: 10px;
}

.shib-callout-toggle.shib-callout-style-1 .callout .callout-content {
padding: 20px;
margin-top: -8px;
border-color: rgba(var(--callout-color), 0.4);
}

.shib-callout-toggle.shib-callout-style-1 .callout.is-collapsible:not(.is-collapsed) .callout-content {
border-right: 1px solid;
border-bottom: 1px solid;
border-left: 1px solid;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
border-color: rgba(var(--callout-color), 0.4);
padding: var(--size-4-4);
}

.shib-callout-toggle.shib-callout-style-1 .callout.is-collapsible {
background-color: rgba(var(--side), 0.4);
--bold-weight: bolder;
}`,
    },
    "shib-callout-style-2": {
      general: `.shib-callout-toggle.shib-callout-style-2 .callout.is-collapsible.is-collapsed .callout-content {
display: none;
}

.shib-callout-toggle.shib-callout-style-2 .callout, .shib-callout-toggle.shib-callout-style-2 .callout.is-collapsible.is-collapsed, .shib-callout-toggle.shib-callout-style-2 .callout:not(.is-collapsible) {
padding: 0;
}

.shib-callout-toggle.shib-callout-style-2 .callout .callout-content, .shib-callout-toggle.shib-callout-style-2 .callout:not(.is-collapsible) .callout-content {
padding: 0 var(--callout-title-padding) var(--callout-title-padding) var(--callout-title-padding);
}

.shib-callout-toggle.shib-callout-style-2 .callout .callout-title, .shib-callout-toggle.shib-callout-style-2 .callout:not(.is-collapsible) .callout-title {
background-color: rgba(var(--callout-color), 0 0.5);
padding: var(--callout-title-padding);
cursor: pointer;
}

.shib-callout-toggle.shib-callout-style-2 .callout .callout-title .callout-title-inner, .shib-callout-toggle.shib-callout-style-2 .callout:not(.is-collapsible) .callout-title .callout-title-inner {
font-weight: 400;
}

.shib-callout-toggle.shib-callout-style-2 .callout:not(.is-collapsible) {
border-color: rgba(var(--callout-color), 0.4);
border-width: 1px;
border-radius: var(--callout-radius);
background-color: rgba(var(--side), 0.4);
}

.shib-callout-toggle.shib-callout-style-2 .callout .callout-fold, .shib-callout-toggle.shib-callout-style-2 .callout.is-collapsible .callout-fold {
padding-right: 0;
}

.shib-callout-toggle.shib-callout-style-2 .callout .callout-title-inner, .shib-callout-toggle.shib-callout-style-2 .callout.is-collapsible .callout-title-inner {
flex-grow: var(--shib-callout-fold-position, unset);
}

.shib-callout-toggle.shib-callout-style-2 .callout.is-collapsible {
border-color: rgba(var(--callout-color), 0.4);
border-width: 1px;
border-radius: var(--callout-radius);
background-color: rgba(var(--side), 0.4);
--bold-weight: bolder;
}

.shib-callout-toggle.shib-callout-style-2 .callout.is-collapsible.is-collapsed .callout-title {
background-color: rgba(var(--callout-color), 0.1);
padding: var(--callout-title-padding);
cursor: pointer;
}

.shib-callout-toggle.shib-callout-style-2 .callout.is-collapsible:not(.is-collapsed) {
padding: 0 0 var(--callout-title-padding) 0;
}

.shib-callout-toggle.shib-callout-style-2 .callout.is-collapsible:not(.is-collapsed) .callout-title {
background-color: rgba(var(--callout-color), 0.1);
padding: var(--callout-title-padding);
border-color: rgba(var(--callout-color), 0.4);
cursor: pointer;
}

.shib-callout-toggle.shib-callout-style-2 .callout:not(.is-collapsible) .callout-title {
background-color: rgba(var(--callout-color), 0.1);
padding: var(--callout-title-padding);
border-color: rgba(var(--callout-color), 0.4);
}

.shib-callout-toggle.shib-callout-style-2 .callout .list-collapse-indicator {
margin-left: -35px;
padding-right: 3px;
}

.shib-callout-toggle.shib-callout-style-2 .callout .callout-content {
padding: var(--callout-title-padding) var(--callout-title-padding) var(--callout-title-padding)
    calc(var(--callout-title-padding) * 1.5);
border-top: 1px dashed rgba(var(--callout-color), 0.4);
}

.shib-callout-toggle.shib-callout-style-2 .callout.is-collapsible:not(.is-collapsed) .callout-content {
padding: var(--callout-title-padding) var(--callout-title-padding) 0 calc(var(--callout-title-padding) * 1.5);
border-top: 1px dashed rgba(var(--callout-color), 0.4);
}`,
    },
    "shib-callout-style-3": {
      general: `.shib-callout-toggle.shib-callout-style-3 .callout.is-collapsible.is-collapsed .callout-content {
display: none;
}

.shib-callout-toggle.shib-callout-style-3 .callout, .shib-callout-toggle.shib-callout-style-3 .callout.is-collapsible.is-collapsed, .shib-callout-toggle.shib-callout-style-3 .callout:not(.is-collapsible) {
padding: 0;
}

.shib-callout-toggle.shib-callout-style-3 .callout .callout-content, .shib-callout-toggle.shib-callout-style-3 .callout:not(.is-collapsible) .callout-content {
padding: 0 var(--callout-title-padding) var(--callout-title-padding) var(--callout-title-padding);
}

.shib-callout-toggle.shib-callout-style-3 .callout .callout-title, .shib-callout-toggle.shib-callout-style-3 .callout:not(.is-collapsible) .callout-title {
background-color: rgba(var(--callout-color), 0 0.5);
padding: var(--callout-title-padding);
cursor: pointer;
}

.shib-callout-toggle.shib-callout-style-3 .callout .callout-title .callout-title-inner, .shib-callout-toggle.shib-callout-style-3 .callout:not(.is-collapsible) .callout-title .callout-title-inner {
font-weight: 400;
}

.shib-callout-toggle.shib-callout-style-3 .callout:not(.is-collapsible) {
border-color: rgba(var(--callout-color), 0.4);
border-width: 1px;
border-radius: var(--callout-radius);
background-color: rgba(var(--side), 0.4);
}

.shib-callout-toggle.shib-callout-style-3 .callout .callout-content {
padding: var(--callout-title-padding) var(--callout-title-padding) var(--callout-title-padding)
    calc(var(--callout-title-padding) * 1.5);
border-top: 1px solid rgba(var(--callout-color), 0.4);
}

.shib-callout-toggle.shib-callout-style-3 .callout .callout-fold, .shib-callout-toggle.shib-callout-style-3 .callout.is-collapsible .callout-fold {
padding-right: 0;
}

.shib-callout-toggle.shib-callout-style-3 .callout .callout-title-inner, .shib-callout-toggle.shib-callout-style-3 .callout.is-collapsible .callout-title-inner {
flex-grow: var(--shib-callout-fold-position, unset);
}

.shib-callout-toggle.shib-callout-style-3 .callout.is-collapsible {
border-color: rgba(var(--callout-color), 0.4);
border-width: 1px;
border-radius: var(--callout-radius);
background-color: rgba(var(--side), 0.4);
--bold-weight: bolder;
}

.shib-callout-toggle.shib-callout-style-3 .callout.is-collapsible.is-collapsed .callout-title {
background-color: rgba(var(--callout-color), 0.1);
padding: var(--callout-title-padding);
cursor: pointer;
}

.shib-callout-toggle.shib-callout-style-3 .callout.is-collapsible:not(.is-collapsed) {
padding: 0 0 var(--callout-title-padding) 0;
}

.shib-callout-toggle.shib-callout-style-3 .callout.is-collapsible:not(.is-collapsed) .callout-title {
background-color: rgba(var(--callout-color), 0.1);
padding: var(--callout-title-padding);
border-color: rgba(var(--callout-color), 0.4);
cursor: pointer;
}

.shib-callout-toggle.shib-callout-style-3 .callout.is-collapsible:not(.is-collapsed) .callout-content {
padding: var(--callout-title-padding) var(--callout-title-padding) 0 calc(var(--callout-title-padding) * 1.5);
border-top: 2px solid rgba(var(--callout-color), 0.4);
}

.shib-callout-toggle.shib-callout-style-3 .callout:not(.is-collapsible) .callout-title {
background-color: rgba(var(--callout-color), 0.1);
padding: var(--callout-title-padding);
border-color: rgba(var(--callout-color), 0.4);
}

.shib-callout-toggle.shib-callout-style-3 .callout .list-collapse-indicator {
margin-left: -35px;
padding-right: 3px;
}`,
    },
    "shib-callout-style-4": {
      general: `.shib-callout-toggle.shib-callout-style-4 .callout, .shib-callout-toggle.shib-callout-style-4 .callout:not(.is-collapsible) {
padding: 0;
}

.shib-callout-toggle.shib-callout-style-4 .callout.is-collapsible .callout-fold {
padding-right: 0;
}

.shib-callout-toggle.shib-callout-style-4 .callout .callout-title-inner, .shib-callout-toggle.shib-callout-style-4 .callout.is-collapsible .callout-title-inner {
flex-grow: var(--shib-callout-fold-position, unset);
}

.shib-callout-toggle.shib-callout-style-4 .callout {
padding: 0;
border: 1px solid rgba(var(--callout-color), 0.2);
overflow: hidden;
}

.shib-callout-toggle.shib-callout-style-4 .callout.is-collapsible:not(.is-collapsed) .callout-fold {
padding-right: 0;
color: rgba(var(--callout-color), 1);
}`,
      dark: `.shib-callout-toggle.shib-callout-toggle.theme-dark .callout {
box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
}

.shib-callout-toggle.theme-dark .callout-title {
background: rgba(var(--callout-color), 0.2);
}

.shib-callout-toggle.theme-dark .callout-title .callout-icon {
border-radius: 10px;
filter: brightness(1);
}

.shib-callout-toggle.theme-dark .callout.is-collapsed:not(.is-collapsed) .callout-title {
padding: 0;
box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.175) inset;
}

.shib-callout-toggle.theme-dark .callout-fold {
filter: brightness(1);
}

.shib-callout-toggle.theme-dark .callout-content {
padding: var(--size-4-4);
background: var(--color-d-black);
box-shadow: 0 -2px 0 0 rgba(0, 0, 0, 0.175) inset;
}`,
      light: `.shib-callout-toggle.shib-callout-toggle.theme-light .callout {
box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
}

.shib-callout-toggle.theme-light .callout-title {
background: rgba(var(--callout-color), 0.2);
padding: var(--callout-title-padding);
cursor: pointer;
}

.shib-callout-toggle.theme-light .callout-title .callout-icon {
border-radius: 10px;
filter: brightness(0.75);
}

.shib-callout-toggle.theme-light .callout.is-collapsed:not(.is-collapsed) .callout-title {
padding: 0;
box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05) inset;
}

.shib-callout-toggle.theme-light .callout-fold {
filter: brightness(0.75);
}

.shib-callout-toggle.theme-light .callout-content {
padding: var(--size-4-4);
background-color: rgba(var(--side), 1);
box-shadow: 0 -2px 0 0 rgba(0, 0, 0, 0.05) inset;
}`,
    },
    "shib-callout-block": {
      general: `.shib-callout-toggle.shib-callout-block .callout.is-collapsible {
background-color: rgba(var(--side), 0.4);
--bold-weight: bolder;
}

.shib-callout-toggle.shib-callout-block .callout {
border-top: 2px solid rgb(var(--callout-color));
border-left: 2px solid rgb(var(--callout-color));
border-right: 2px solid rgb(var(--callout-color));
border-bottom: 2px solid rgb(var(--callout-color));
border-radius: 10px;
border-color: rgba(var(--callout-color), 0.5);
background-color: unset;
border-radius: var(--callout-radius);
}

.shib-callout-toggle.shib-callout-block .callout .callout-title {
align-self: auto;
margin-left: -15px;
}`,
    },
    "shib-callout-fold-position": {
      general: `.shib-callout-fold-position {
--shib-callout-fold-position: 1;
}`,
    },
    "shib-callout-color-toggle": {
      general: `.shib-callout-color-toggle .callout[data-callout="abstract"], .shib-callout-color-toggle .callout[data-callout="note"], .shib-callout-color-toggle .callout[data-callout="seealso"], .shib-callout-color-toggle .callout[data-callout="summary"], .shib-callout-color-toggle .callout[data-callout="tldr"] {
--callout-color: var(--blue);
}

.shib-callout-color-toggle .callout[data-callout="hint"], .shib-callout-color-toggle .callout[data-callout="important"], .shib-callout-color-toggle .callout[data-callout="info"], .shib-callout-color-toggle .callout[data-callout="tip"], .shib-callout-color-toggle .callout[data-callout="todo"] {
--callout-color: var(--sea);
}

.shib-callout-color-toggle .callout[data-callout="check"], .shib-callout-color-toggle .callout[data-callout="done"], .shib-callout-color-toggle .callout[data-callout="faq"], .shib-callout-color-toggle .callout[data-callout="help"], .shib-callout-color-toggle .callout[data-callout="question"], .shib-callout-color-toggle .callout[data-callout="success"] {
--callout-color: var(--green);
}

.shib-callout-color-toggle .callout[data-callout="attention"], .shib-callout-color-toggle .callout[data-callout="caution"], .shib-callout-color-toggle .callout[data-callout="warning"] {
--callout-color: var(--yellow);
}

.shib-callout-color-toggle .callout[data-callout="bug"], .shib-callout-color-toggle .callout[data-callout="danger"], .shib-callout-color-toggle .callout[data-callout="error"] {
--callout-color: var(--red);
}

.shib-callout-color-toggle .callout[data-callout="example"] {
--callout-color: var(--violet);
}

.shib-callout-color-toggle .callout[data-callout="cite"], .shib-callout-color-toggle .callout[data-callout="quote"] {
--callout-color: var(--surface1);
}

.shiba-accent-style .callout[data-callout="note"] {
--callout-color: var(--accent);
}`,
    },
    "shiba-hb-default": {
      general: `.shiba-hb-default .markdown-preview-view hr {
border: none;
border-top: var(--outline-border) solid;
border-color: var(--hr-outline-color);
}`,
    },
    "shiba-hb-style": {
      general: `.shiba-hb-style .markdown-preview-view hr {
border: none;
border-top: var(--outline-border) dashed;
border-color: var(--hr-outline-color);
}

.shiba-hb-style2 .markdown-preview-view hr {
border: none;
border-top: var(--outline-border) dotted;
border-color: var(--hr-outline-color);
}`,
    },
    "shiba-hb-style2": {
      general: `.shiba-hb-style2 .markdown-preview-view hr {
border: none;
border-top: var(--outline-border) dotted;
border-color: var(--hr-outline-color);
}`,
    },
    "custom-checkboxes": {
      general: `.custom-checkboxes [data-task="x"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="x"][type="checkbox"]:checked {
--checkbox-color: rgb(var(--green));
--checkbox-color-hover: rgb(var(--green));
}

.custom-checkboxes [data-task="*"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="*"][type="checkbox"]:checked, .custom-checkboxes [data-task="/"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="/"][type="checkbox"]:checked, .custom-checkboxes [data-task="<"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="<"][type="checkbox"]:checked, .custom-checkboxes [data-task=">"] input[type="checkbox"]:checked, .custom-checkboxes [data-task=">"][type="checkbox"]:checked, .custom-checkboxes [data-task="?"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="?"][type="checkbox"]:checked, .custom-checkboxes [data-task="I"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="I"][type="checkbox"]:checked, .custom-checkboxes [data-task="S"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="S"][type="checkbox"]:checked, .custom-checkboxes [data-task="b"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="b"][type="checkbox"]:checked, .custom-checkboxes [data-task="c"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="c"][type="checkbox"]:checked, .custom-checkboxes [data-task="l"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="l"][type="checkbox"]:checked, .custom-checkboxes [data-task="n"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="n"][type="checkbox"]:checked, .custom-checkboxes [data-task="p"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="p"][type="checkbox"]:checked, .custom-checkboxes [data-task="r"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="s"] input[type="checkbox"]:checked {
--checkbox-color: transparent;
--checkbox-color-hover: transparent;
border-width: 0;
}

.custom-checkboxes [data-task=">"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task=">"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 470 '%3E%3Cpath d='M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--cyan));
left: 0;
}

.custom-checkboxes [data-task=">"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task=">"][type="checkbox"]:checked:before {
color: rgb(var(--cyan));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: 700;
}

.custom-checkboxes [data-task="<"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="<"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 444 502'%3E%3Cpath d='M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--turquoise));
left: 0;
}

.custom-checkboxes [data-task="<"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="<"][type="checkbox"]:checked:before {
color: rgb(var(--turquoise));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: 700;
}

.custom-checkboxes [data-task="!"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="!"][type="checkbox"]:checked, .custom-checkboxes [data-task="i"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="i"][type="checkbox"]:checked {
--checkbox-color: rgb(var(--orange));
--checkbox-color-hover: rgb(var(--orange));
}

.custom-checkboxes [data-task="!"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="!"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 550'%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
-webkit-mask-size: 20%;
}

.custom-checkboxes [data-task="!"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="!"][type="checkbox"]:checked:before, .custom-checkboxes [data-task="-"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="-"][type="checkbox"]:checked:before, .custom-checkboxes [data-task="c"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="c"][type="checkbox"]:checked:before, .custom-checkboxes [data-task="i"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="i"][type="checkbox"]:checked:before {
color: var(--checkbox-color);
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: 700;
}

.custom-checkboxes [data-task="-"] {
text-decoration: var(--checklist-done-decoration);
color: var(--checklist-done-color);
}

.custom-checkboxes [data-task="-"] input[type="checkbox"]:checked, .custom-checkboxes [data-task="-"][type="checkbox"]:checked {
--checkbox-color: rgb(var(--red));
--checkbox-color-hover: rgb(var(--red));
}

.custom-checkboxes [data-task="-"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="-"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 530'%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
-webkit-mask-size: 55%;
}

.custom-checkboxes [data-task="/"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="/"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--green));
left: 0;
}

.custom-checkboxes [data-task="/"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="/"][type="checkbox"]:checked:before, .custom-checkboxes [data-task="S"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="S"][type="checkbox"]:checked:before, .custom-checkboxes [data-task="p"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="p"][type="checkbox"]:checked:before {
color: rgb(var(--green));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: 700;
}

.custom-checkboxes [data-task="?"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="?"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 179' version='1.1'%3E%3Cpath d='M 22.640 6.632 C 15.939 8.690, 8.886 15.824, 6.949 22.503 C 5.751 26.633, 5.500 38.514, 5.500 91 L 5.500 154.500 8.359 160.323 C 11.460 166.639, 16.745 171.265, 22.911 173.063 C 25.298 173.758, 48.615 174.007, 92.500 173.804 C 155.743 173.513, 158.625 173.419, 161.500 171.568 C 166.511 168.341, 170.073 164.704, 172.342 160.500 C 174.478 156.541, 174.503 155.858, 174.792 93.705 C 174.977 54.030, 174.709 28.880, 174.066 25.397 C 172.322 15.963, 165.208 8.466, 155.807 6.154 C 152.501 5.341, 132.856 5.021, 89.307 5.070 C 37.483 5.128, 26.715 5.380, 22.640 6.632 M 72.564 43.123 C 65.124 44.867, 58.092 52.842, 58.022 59.615 C 57.982 63.481, 61.727 67, 65.881 67 C 69.991 67, 71.779 65.891, 74.343 61.750 L 76.046 59 87.976 59 C 100.970 59, 104.518 59.944, 105.447 63.646 C 106.421 67.526, 104.509 69.604, 94.434 75.617 C 89.189 78.747, 84.246 82.238, 83.449 83.376 C 81.722 85.842, 81.548 92.914, 83.130 96.385 C 86.088 102.877, 96.867 101.553, 98.153 94.540 C 98.372 93.344, 101.499 90.811, 106.178 88.040 C 110.394 85.543, 114.842 82.600, 116.063 81.500 C 122.168 75.999, 123.935 62.981, 119.674 54.907 C 116.650 49.178, 110.395 44.465, 103.994 43.092 C 97.948 41.795, 78.146 41.815, 72.564 43.123 M 86.212 115.129 C 82.159 116.297, 79.009 121.125, 79.004 126.173 C 78.994 135.843, 91.548 140.543, 98.586 133.505 C 100.471 131.620, 101 130.033, 101 126.268 C 101 120.546, 99.053 117.338, 94.401 115.394 C 90.647 113.826, 90.721 113.828, 86.212 115.129' stroke='none' fill='%23142c4c' fill-rule='evenodd'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--sea));
left: 0;
}

.custom-checkboxes [data-task="?"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="?"][type="checkbox"]:checked:before {
color: rgb(var(--sea));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: 700;
}

.custom-checkboxes [data-task="*"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="*"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--yellow));
left: 0;
}

.custom-checkboxes [data-task="*"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="*"][type="checkbox"]:checked:before {
color: rgb(var(--yellow));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: 700;
}

.custom-checkboxes [data-task="n"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="n"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--lemon));
left: 0;
}

.custom-checkboxes [data-task="I"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="I"][type="checkbox"]:checked:before, .custom-checkboxes [data-task="c"][type="checkbox"]:checked:before, .custom-checkboxes [data-task="n"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="n"][type="checkbox"]:checked:before, .custom-checkboxes [data-task="s"] input[type="checkbox"]:checked:before {
color: rgb(var(--lemon));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: 700;
}

.custom-checkboxes [data-task="l"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="l"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--blue));
left: 0;
}

.custom-checkboxes [data-task="l"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="l"][type="checkbox"]:checked:before {
color: rgb(var(--blue));
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: 700;
}

.custom-checkboxes [data-task="i"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="i"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 512'%3E%3Cpath d='M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
}

.custom-checkboxes [data-task="I"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="I"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--lemon));
left: 0;
}

.custom-checkboxes [data-task="S"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="S"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 170' version='1.1'%3E%3Cpath d='M 73.633 4.553 C 45.770 10.089, 24.575 26.633, 12.450 52.309 C 6.771 64.334, 5.500 70.677, 5.500 87 C 5.500 103.323, 6.771 109.666, 12.450 121.691 C 24.186 146.544, 45.625 163.776, 71.436 169.103 C 120.309 179.190, 166.043 146.223, 172.153 96.501 C 176.830 58.443, 153.240 20.809, 116.500 7.718 C 103.999 3.264, 86.587 1.978, 73.633 4.553 M 84.949 41.840 C 83.486 43.025, 82.467 45.215, 82.088 47.992 C 81.552 51.922, 81.154 52.423, 77.591 53.654 C 71.868 55.632, 67.487 59.363, 65.102 64.289 C 62.395 69.882, 62.453 75.464, 65.271 80.500 C 67.957 85.299, 75.837 89.608, 89.275 93.627 C 102.498 97.582, 106.049 101.456, 100.471 105.844 C 96.083 109.296, 91.116 109.441, 79.440 106.461 C 67.550 103.427, 64.583 103.831, 63.374 108.647 C 62.105 113.701, 64.649 116.208, 73.782 118.907 L 82 121.335 82.015 125.417 C 82.024 127.663, 82.361 129.995, 82.765 130.600 C 84.145 132.667, 87.955 134.049, 90.506 133.409 C 93.612 132.630, 95 130.244, 95 125.684 C 95 122.470, 95.286 122.163, 99.250 121.129 C 110.133 118.289, 116 111.429, 116 101.543 C 116 91.121, 109.966 85.821, 91.606 80.116 C 86.165 78.425, 80.652 76.347, 79.356 75.498 C 76.283 73.484, 76.365 70.645, 79.570 68.123 C 83.524 65.014, 90.182 64.441, 98.792 66.471 C 106.048 68.182, 106.286 68.177, 108.862 66.263 C 114.645 61.965, 111.226 54.875, 102.687 53.461 C 96.414 52.422, 95.002 51.369, 94.985 47.715 C 94.967 43.940, 94.279 42.709, 91.316 41.150 C 88.379 39.604, 87.607 39.688, 84.949 41.840' stroke='none' fill='%23132b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--green));
left: 0;
}

.custom-checkboxes [data-task="p"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="p"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: rgb(var(--green));
left: 0;
}

.custom-checkboxes [data-task="c"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="c"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
-webkit-mask-size: 100%;
background-color: rgb(var(--red));
left: 0;
}

.custom-checkboxes [data-task="b"] input[type="checkbox"]:checked:after, .custom-checkboxes [data-task="b"][type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
-webkit-mask-size: contain;
background-color: var(--color-accent);
left: 0;
}

.custom-checkboxes [data-task="b"] input[type="checkbox"]:checked:before, .custom-checkboxes [data-task="b"][type="checkbox"]:checked:before {
color: var(--color-accent);
margin: 0 3px;
position: absolute;
left: calc(var(--checkbox-size) * 1);
font-weight: 700;
}

.custom-checkboxes [data-task="c"][type="checkbox"]:checked:after, .custom-checkboxes [data-task="s"] input[type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 177 175' version='1.1'%3E%3Cpath d='M 40.344 3.037 C 30.953 4.904, 22.308 11.667, 17.923 20.577 L 15.500 25.500 15.500 86 C 15.500 145.687, 15.529 146.562, 17.637 151.122 C 20.705 157.757, 26.321 163.519, 32.839 166.720 L 38.500 169.500 100.250 169.779 L 162 170.059 162 159.529 L 162 149 156.500 149 L 151 149 151 138.500 L 151 128 156.508 128 L 162.015 128 161.758 65.250 L 161.500 2.500 103 2.356 C 70.825 2.276, 42.630 2.583, 40.344 3.037 M 57.195 49.750 L 57.500 54.500 93.500 54.500 L 129.500 54.500 129.805 49.750 L 130.110 45 93.500 45 L 56.890 45 57.195 49.750 M 57 70.500 L 57 75 93.500 75 L 130 75 130 70.500 L 130 66 93.500 66 L 57 66 57 70.500 M 42 129.273 C 40.625 129.956, 38.662 132.228, 37.638 134.320 C 35.970 137.728, 35.920 138.508, 37.163 141.812 C 39.877 149.030, 39.965 149.042, 87.500 148.754 L 129.500 148.500 129.785 138.250 L 130.070 128 87.285 128.015 C 55.215 128.026, 43.874 128.341, 42 129.273' stroke='none' fill='%23142b4b' fill-rule='evenodd'/%3E%3C/svg%3E");
-webkit-mask-size: 100%;
background-color: var(--color-accent);
left: 0;
}

.custom-checkboxes [data-task="c"][type="checkbox"]:checked:before, .custom-checkboxes [data-task="s"] input[type="checkbox"]:checked:before {
color: var(--color-accent);
left: calc(var(--checkbox-size) * 1);
}

.custom-checkboxes [data-task="c"][type="checkbox"]:checked:after, .custom-checkboxes [data-task="r"] input[type="checkbox"]:checked:after {
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z'/%3E%3C/svg%3E");
-webkit-mask-size: 100%;
background-color: rgb(var(--lemon));
left: 0;
}`,
    },
    "blockquote-style-outline": {
      general: `body.blockquote-style-outline :is(.markdown-preview-view, .markdown-rendered) blockquote {
border: 1px solid var(--color-accent);
background-color: rgba(var(--side), 0.3);
border-radius: var(--radius-m);
}`,
    },
    "blockquote-style-border-left": {
      general: `body.blockquote-style-border-left :is(.markdown-preview-view, .markdown-rendered) blockquote {
border: 1px solid var(--color-accent);
border-left: 4px solid var(--color-accent);
background-color: rgba(var(--side), 0.3);
border-radius: var(--radius-m);
}`,
    },
    "blockquote-style-quotation-mark": {
      general: `body.blockquote-style-quotation-mark .markdown-source-view.mod-cm6 .cm-blockquote-border:before, body.blockquote-style-quotation-mark .markdown-source-view.mod-cm6.is-live-preview .HyperMD-quote:before {
border-left: none;
}

body.blockquote-style-quotation-mark :is(.markdown-preview-view, .markdown-rendered) blockquote {
color: var(--text-normal);
box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
padding-left: 35px;
padding-right: 10px;
margin-inline-start: 1%;
margin-inline-end: 1%;
border-left-width: 0;
}

body.blockquote-style-quotation-mark :is(.markdown-preview-view, .markdown-rendered) blockquote p {
position: relative;
margin-left: 0.7em;
margin-right: 0;
font-size: 1em;
}

body.blockquote-style-quotation-mark :is(.markdown-preview-view, .markdown-rendered) blockquote p:first-of-type::before {
content: "“";
font-size: 3em;
font-family: boxicons;
color: var(--color-accent);
position: absolute;
top: -0.2em;
left: -0.8em;
}`,
    },
    "buttons-plugin-style": {
      general: `body.buttons-plugin-style button.circle_btn {
font-size: 12px;
word-break: keep-all;
margin: 4px;
padding: 0;
height: 50px;
position: relative;
border-radius: 5px;
display: inline-grid;
text-align: center;
justify-items: center;
}

body.buttons-plugin-style button.blank {
background: unset;
padding: 0;
}

body.buttons-plugin-style button.blank:hover {
animation: 0.8s linear swing_image;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

body.buttons-plugin-style .admonition-content span > button.grad_button {
margin: 3px;
}

body.buttons-plugin-style button.grad_button {
margin: 5px;
line-height: inherit;
display: inline-flex;
justify-content: center;
align-items: center;
min-width: 90px;
padding: 0 18px;
height: 38px;
font-size: 16px;
color: #fff;
text-align: center;
box-sizing: border-box;
font-weight: 500;
cursor: pointer;
border-radius: 30px;
transition:
    box-shadow 0.5s,
    transform 0.2s;
will-change: transform;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

body.buttons-plugin-style button.grad_button:hover {
animation: 0.8s linear swing_image;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

body.buttons-plugin-style button.btn_red {
background: linear-gradient(135deg, #e74c4c, #eda8a8);
}

body.buttons-plugin-style button.btn_purple {
background: linear-gradient(135deg, #6e8efb, #a777e3);
}

body.buttons-plugin-style button.btn_blue {
background: linear-gradient(135deg, #3370ff, #9fb9f6);
}

body.buttons-plugin-style button.btn_green {
background: linear-gradient(135deg, #0eb347, #5be08a);
}

body.buttons-plugin-style button.btn_lightgreen {
color: #17695e;
background: linear-gradient(135deg, #adfdad, #dafdda);
}

body.buttons-plugin-style button.btn_cyan {
color: #fff;
background: linear-gradient(135deg, #787bd7, #1bffff);
border: 1px solid #1abeff;
}

body.buttons-plugin-style button.btn_yellow {
color: #836f20;
background: linear-gradient(135deg, #fcd539, #ffeb9b);
}

body.buttons-plugin-style button.btn_pink {
color: #686868;
background: linear-gradient(135deg, #ee9ca7, #ffdde1);
border: 1px solid #eb9edb;
}`,
      dark: `body.theme-dark button.btn_pink {
color: #f3b4bb;
background: 0 0;
border: 1px solid !important;
}

body.theme-dark button.btn_green {
color: #19bc8b;
background: 0 0;
border: 1px solid !important;
}

body.theme-dark button.btn_lightgreen {
color: #8fc866;
background: 0 0;
border: 1px solid !important;
}

body.theme-dark button.btn_cyan {
color: #7fd0ff;
background: 0 0;
border: 1px solid !important;
}

body.theme-dark button.btn_red {
color: #f77;
background: 0 0;
border: 1px solid !important;
}

body.theme-dark button.btn_purple {
color: #ba60ff;
background: 0 0;
border: 1px solid !important;
}

body.theme-dark button.btn_blue {
color: #739df9;
background: 0 0;
border: 1px solid !important;
}

body.theme-dark .grad_button:hover {
color: var(--text-accent);
}`,
    },
    "buttons-workspace-style": {
      dark: `body.theme-dark .graph-controls button, body.theme-dark .modal button, body.theme-dark .popover button, body.theme-dark:not(.buttons-plugin-style) .workspace button {
border: 1px solid rgba(0, 0, 0, 0.43);
box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.4) inset;
-webkit-box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.4) inset;
-moz-box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.3) inset;
border-radius: 5px;
}

body.theme-dark .graph-controls button:active, body.theme-dark .modal button:active, body.theme-dark .popover button:active, body.theme-dark .workspace button:active {
box-shadow:
    0 0 0 2px rgba(0, 0, 0, 0.15) inset,
    0 1px 1px 0 rgba(0, 0, 0, 0.1);
}`,
      light: `body.theme-light .graph-controls button, body.theme-light .modal button, body.theme-light .popover button, body.theme-light:not(.buttons-plugin-style) .workspace button {
border: 1px solid rgba(100, 100, 100, 0.3);
box-shadow: 0 -1px 6px -1px rgba(172, 172, 172, 0.4) inset;
-webkit-box-shadow: 0 -1px 6px -1px rgba(118, 118, 118, 0.4) inset;
border-radius: 5px;
}

body.theme-light .graph-controls button:active, body.theme-light .modal button:active, body.theme-light .popover button:active, body.theme-light .workspace button:active {
box-shadow:
    0 0 0 2px rgba(100, 100, 100, 0.3) inset,
    0 1px 1px 0 rgba(100, 100, 100, 0.1);
}`,
    },
    "shib-setting-default-frosted-glass": {
      general: `.shib-setting-default-frosted-glass .prompt {
background-color: var(--bg-color-settings-4);
backdrop-filter: blur(3px);
}

.shib-setting-default-frosted-glass .vertical-tab-header-group-title {
color: var(--text-normal);
border-top: 1px dashed var(--text-muted);
border-top: none;
}

.shib-setting-default-frosted-glass .modal-bg {
background-color: var(--bg-color-settings-0);
backdrop-filter: blur(5px);
}

.shib-setting-default-frosted-glass .modal.mod-settings {
background-color: rgba(var(--base), 0.5);
box-shadow: 0 0 20px var(--bg-color-settings-1);
border: none;
}

.shib-setting-default-frosted-glass .vertical-tab-header {
background-color: rgba(var(--base), 0.5);
}

.shib-setting-default-frosted-glass .horizontal-tab-nav-item, .shib-setting-default-frosted-glass .vertical-tab-nav-item {
background-color: transparent;
}

.shib-setting-default-frosted-glass .horizontal-tab-nav-item.is-active, .shib-setting-default-frosted-glass .horizontal-tab-nav-item:hover, .shib-setting-default-frosted-glass .vertical-tab-nav-item.is-active, .shib-setting-default-frosted-glass .vertical-tab-nav-item:hover {
background-color: var(--bg-color-settings-2);
color: var(--text-normal);
font-weight: 700;
}

.shib-setting-default-frosted-glass .horizontal-tab-content, .shib-setting-default-frosted-glass .vertical-tab-content {
background-color: rgba(var(--base), 1);
}`,
      dark: `.theme-dark .prompt {
backdrop-filter: blur(8px);
}`,
    },
    "shib-translucent-setting-panel": {
      general: `.shib-translucent-setting-panel .modal-bg {
background-color: var(--background-secondary-translucent-1);
}

.shib-translucent-setting-panel .modal-bg {
background-color: var(--bg-color-settings-0);
backdrop-filter: blur(5px);
}

.shib-translucent-setting-panel .modal.mod-settings {
background-color: rgba(var(--base), 0.5);
box-shadow: 0 0 20px var(--bg-color-settings-1);
border: none;
}

.shib-translucent-setting-panel .vertical-tab-content, .shib-translucent-setting-panel .vertical-tab-header {
background-color: rgba(var(--base), 0.5);
}

.shib-translucent-setting-panel .horizontal-tab-nav-item, .shib-translucent-setting-panel .vertical-tab-nav-item {
background-color: transparent;
}

.shib-translucent-setting-panel .horizontal-tab-nav-item.is-active, .shib-translucent-setting-panel .horizontal-tab-nav-item:hover, .shib-translucent-setting-panel .vertical-tab-nav-item.is-active, .shib-translucent-setting-panel .vertical-tab-nav-item:hover {
background-color: var(--bg-color-settings-2);
color: var(--text-normal);
font-weight: 700;
}

.shib-translucent-setting-panel .horizontal-tab-content, .shib-translucent-setting-panel .vertical-tab-content {
background-color: rgba(var(--base), 1);
}`,
    },
    "shib-transparent-setting-panel": {
      general: `.shib-transparent-setting-panel .horizontal-tab-content, .shib-transparent-setting-panel .horizontal-tab-nav-item, .shib-transparent-setting-panel .modal.mod-settings .vertical-tab-content-container, .shib-transparent-setting-panel .vertical-tab-content, .shib-transparent-setting-panel .vertical-tab-header, .shib-transparent-setting-panel .vertical-tab-nav-item {
background-color: var(--background-secondary-translucent) !important;
}

.shib-transparent-setting-panel .modal-bg, .shib-transparent-setting-panel .modal.mod-settings {
background-color: var(--background-secondary-translucent) !important;
backdrop-filter: blur(0) !important;
}

.shib-transparent-setting-panel .modal, .shib-transparent-setting-panel .modal.mod-settings, .shib-transparent-setting-panel .vertical-tab-content {
background-color: transparent !important;
}

.shib-transparent-setting-panel .vertical-tab-nav-item.is-active {
color: var(--text-normal) !important;
font-weight: bolder;
}`,
    },
    "hide-vault-title": {
      general: `body.hide-vault-title .nav-folder.mod-root > .nav-folder-title {
display: none;
}`,
    },
    "shib-floating-header": {
      general: `.shib-floating-header .nav-folder.mod-root > .nav-folder-title {
background-color: var(--background-secondary);
position: fixed;
z-index: 1;
margin-left: calc(-0.5 * var(--size-4-3));
width: calc(100% - 1.22 * var(--size-4-3));
border: 1px solid rgba(100, 100, 100, 0.3);
box-shadow:
    1px -1px 0 0 rgba(100, 100, 100, 0.1) inset,
    0 2px 4px 0 rgba(100, 100, 100, 0.1);
border-radius: var(--radius-s);
}

.shib-floating-header .nav-folder.mod-root > .nav-folder-title:hover {
background-color: var(--background-secondary);
width: calc(100% - 1.2 * var(--size-4-3));
margin-left: calc(-0.5 * var(--size-4-3));
}

.shib-floating-header .nav-folder.mod-root > .nav-folder-children {
padding-top: 32px;
}

.shib-custom-vault-folder-toggle .nav-folder.mod-root > .nav-folder-title {
padding-top: 6px;
}

.shib-custom-vault-folder-toggle .nav-folder.mod-root > .nav-folder-children {
padding-top: 45px;
}

.shib-custom-vault-shiba-toggle .nav-folder.mod-root > .nav-folder-title {
padding-top: 10px;
}

.shib-custom-vault-shiba-toggle .nav-folder.mod-root > .nav-folder-children {
padding-top: 50px;
}

.shib-workspace-background-image-toggle.shib-floating-header .nav-folder.mod-root > .nav-folder-title {
background-color: var(--tab-inactive-color);
}`,
    },
    "shib-custom-vault-folder-toggle": {
      general: `.shib-custom-vault-folder-custom-icon .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content, .shib-custom-vault-folder-folder-icon .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content, .shib-custom-vault-folder-shiba-icon .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content {
font-family: var(--font-family-vault);
font-weight: 700;
text-align: left;
margin-left: 30px;
opacity: 1 !important;
}

.shib-custom-vault-folder-folder-icon .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content:before {
content: " ";
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg width='26px' height='26px' viewBox='0 -2.5 24 24' id='meteor-icon-kit__regular-folder-open' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M21.1679 7H21.6679C22.7724 7 23.6679 7.8954 23.6679 9C23.6679 9.2641 23.6156 9.5255 23.514 9.7692L20.1807 17.7692C19.8702 18.5145 19.1419 19 18.3345 19H4.36866C2.83339 19 1.54587 17.8409 1.38515 16.3141L0.0167269 3.31405C-0.156721 1.6663 1.03844 0.18993 2.68619 0.01648C2.79051 0.0055 2.89534 0 3.00024 0H8.94712C9.37755 0 9.75969 0.27543 9.8958 0.68377L10.6679 3H19.4023C20.5069 3 21.4023 3.89543 21.4023 5C21.4023 5.08293 21.3972 5.16578 21.3869 5.24807L21.1679 7zM19.1523 7L19.4023 5H9.22636L8.22636 2H3.00024C2.96528 2 2.93033 2.00183 2.89556 2.00549C2.34631 2.06331 1.94792 2.55543 2.00574 3.10468L3.27334 15.1469L6.15506 8.2308C6.4656 7.4855 7.19381 7 8.00121 7H19.1523zM8.00121 9L4.66788 17H18.3345L21.6679 9H8.00121z' fill='%23758CA3'/%3E%3C/svg%3E");
text-align: left;
width: 26px;
height: 26px;
margin-left: -30px;
margin-top: -4px;
position: absolute;
background-color: var(--color-accent);
}

.shib-custom-vault-folder-shiba-icon .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content:before {
content: " ";
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' version='1.1'%3E%3Cpath d='M 322.412 7.335 C 307.060 15.315, 289.743 26.740, 279.572 35.596 C 275.212 39.393, 267.629 47.450, 262.720 53.500 C 252.603 65.970, 236.380 89.909, 230.668 100.800 C 228.562 104.814, 224.103 111.024, 220.759 114.599 C 213.127 122.757, 202.320 128.355, 190.720 130.158 L 183 131.359 183 134.721 C 183 139.778, 180.243 152.117, 177.462 159.506 C 174.240 168.064, 169.368 177.673, 162.545 188.926 L 157.029 198.023 155.906 214.761 C 155.288 223.968, 154.719 231.567, 154.642 231.649 C 154.564 231.731, 151.350 230.559, 147.500 229.045 C 143.650 227.531, 134.984 224.162, 128.242 221.559 C 114.185 216.131, 109.028 211.960, 103.959 201.919 C 97.897 189.909, 93.624 167.551, 93.560 147.500 C 93.514 133.044, 94.892 127.918, 99.374 125.875 C 108.007 121.942, 112.322 131.442, 113.553 157.088 C 114.607 179.044, 118.694 195.647, 124.300 200.747 C 125.510 201.848, 129.160 203.726, 132.412 204.921 C 139.412 207.493, 139.962 207.077, 139.985 199.200 C 140.002 193.317, 140.512 192.144, 149.731 176.775 C 160.323 159.117, 166.016 143.411, 165.985 131.936 C 165.964 124.023, 163.481 114.673, 158.832 105 C 153.359 93.612, 141.165 81.247, 130 75.766 C 116.497 69.137, 101.596 67.335, 86.500 70.504 C 65.335 74.948, 47.266 92.042, 42.540 112.093 C 39.585 124.630, 41.048 141.399, 45.978 151.500 L 48.907 157.500 46.128 160.500 C 38.200 169.058, 31.827 180.329, 28.116 192.353 C 23.445 207.490, 22.997 216.800, 23.042 297.801 C 23.079 366.627, 23.238 373.927, 24.792 378.203 C 27.725 386.279, 32.102 391.395, 39.043 394.864 L 45.319 398 71.160 398 L 97 398 97 390.210 C 97 381.707, 95.157 373.187, 91.961 366.924 C 89.201 361.513, 83.640 355.508, 79.989 353.996 L 77 352.757 77 335.108 L 77 317.458 84.944 313.650 C 95.175 308.746, 108.882 299.667, 116.500 292.749 C 126.598 283.578, 126.890 283.490, 147 283.567 C 165.785 283.638, 182.225 285.895, 207 291.801 L 218.500 294.543 219 335.522 L 219.500 376.500 222.203 381.623 C 223.689 384.441, 226.977 388.570, 229.508 390.798 C 237.030 397.419, 240.027 398, 266.678 398 L 290 398 290.193 392.750 C 290.760 377.317, 288.169 366.745, 282.142 359.899 C 279.996 357.461, 277.062 354.836, 275.621 354.065 L 273 352.662 273 323.716 L 273 294.770 280.946 286.375 C 294.780 271.761, 306.412 254.333, 311.995 239.858 C 313.689 235.464, 319.896 212.661, 325.788 189.185 L 336.500 146.500 341.150 144.192 C 344.769 142.396, 348.591 141.673, 358.391 140.931 C 377.260 139.503, 386.195 135.314, 394.500 124 C 398.383 118.711, 408.231 96.531, 407.766 94.122 C 407.610 93.316, 399.220 89.790, 387.522 85.617 C 368.608 78.869, 367.497 78.330, 366.650 75.495 C 362.673 62.172, 358.701 56.067, 350.322 50.397 C 346.988 48.140, 341.552 45.483, 338.244 44.492 L 332.229 42.690 333.203 39.595 C 334.132 36.644, 335.687 0.972, 334.885 1.025 C 334.673 1.039, 329.060 3.878, 322.412 7.335' stroke='none' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E");
text-align: left;
width: 29px;
height: 29px;
margin-left: -30px;
margin-top: -2px;
position: absolute;
background-color: var(--color-accent);
}

.shib-custom-vault-folder-custom-icon .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content:before {
content: " ";
-webkit-mask-image: var(--shib-custom-vault-folder-custom-icon-url);
text-align: left;
width: 26px;
height: 26px;
margin-left: -30px;
margin-top: -4px;
position: absolute;
background-color: var(--color-accent);
}

.shib-floating-header.shib-custom-vault-folder-toggle .nav-folder.mod-root > .nav-folder-title {
padding-top: 6px;
}

.shib-floating-header.shib-custom-vault-folder-toggle .nav-folder.mod-root > .nav-folder-children {
padding-top: 45px;
}`,
    },
    "shib-custom-vault-folder-folder-icon": {
      general: `.shib-custom-vault-folder-toggle.shib-custom-vault-folder-folder-icon .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content {
font-family: var(--font-family-vault);
font-weight: 700;
text-align: left;
margin-left: 30px;
opacity: 1 !important;
}

.shib-custom-vault-folder-toggle.shib-custom-vault-folder-folder-icon .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content:before {
content: " ";
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg width='26px' height='26px' viewBox='0 -2.5 24 24' id='meteor-icon-kit__regular-folder-open' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M21.1679 7H21.6679C22.7724 7 23.6679 7.8954 23.6679 9C23.6679 9.2641 23.6156 9.5255 23.514 9.7692L20.1807 17.7692C19.8702 18.5145 19.1419 19 18.3345 19H4.36866C2.83339 19 1.54587 17.8409 1.38515 16.3141L0.0167269 3.31405C-0.156721 1.6663 1.03844 0.18993 2.68619 0.01648C2.79051 0.0055 2.89534 0 3.00024 0H8.94712C9.37755 0 9.75969 0.27543 9.8958 0.68377L10.6679 3H19.4023C20.5069 3 21.4023 3.89543 21.4023 5C21.4023 5.08293 21.3972 5.16578 21.3869 5.24807L21.1679 7zM19.1523 7L19.4023 5H9.22636L8.22636 2H3.00024C2.96528 2 2.93033 2.00183 2.89556 2.00549C2.34631 2.06331 1.94792 2.55543 2.00574 3.10468L3.27334 15.1469L6.15506 8.2308C6.4656 7.4855 7.19381 7 8.00121 7H19.1523zM8.00121 9L4.66788 17H18.3345L21.6679 9H8.00121z' fill='%23758CA3'/%3E%3C/svg%3E");
text-align: left;
width: 26px;
height: 26px;
margin-left: -30px;
margin-top: -4px;
position: absolute;
background-color: var(--color-accent);
}`,
    },
    "shib-custom-vault-folder-shiba-icon": {
      general: `.shib-custom-vault-folder-toggle.shib-custom-vault-folder-shiba-icon .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content {
font-family: var(--font-family-vault);
font-weight: 700;
text-align: left;
margin-left: 30px;
opacity: 1 !important;
}

.shib-custom-vault-folder-toggle.shib-custom-vault-folder-shiba-icon .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content:before {
content: " ";
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' version='1.1'%3E%3Cpath d='M 322.412 7.335 C 307.060 15.315, 289.743 26.740, 279.572 35.596 C 275.212 39.393, 267.629 47.450, 262.720 53.500 C 252.603 65.970, 236.380 89.909, 230.668 100.800 C 228.562 104.814, 224.103 111.024, 220.759 114.599 C 213.127 122.757, 202.320 128.355, 190.720 130.158 L 183 131.359 183 134.721 C 183 139.778, 180.243 152.117, 177.462 159.506 C 174.240 168.064, 169.368 177.673, 162.545 188.926 L 157.029 198.023 155.906 214.761 C 155.288 223.968, 154.719 231.567, 154.642 231.649 C 154.564 231.731, 151.350 230.559, 147.500 229.045 C 143.650 227.531, 134.984 224.162, 128.242 221.559 C 114.185 216.131, 109.028 211.960, 103.959 201.919 C 97.897 189.909, 93.624 167.551, 93.560 147.500 C 93.514 133.044, 94.892 127.918, 99.374 125.875 C 108.007 121.942, 112.322 131.442, 113.553 157.088 C 114.607 179.044, 118.694 195.647, 124.300 200.747 C 125.510 201.848, 129.160 203.726, 132.412 204.921 C 139.412 207.493, 139.962 207.077, 139.985 199.200 C 140.002 193.317, 140.512 192.144, 149.731 176.775 C 160.323 159.117, 166.016 143.411, 165.985 131.936 C 165.964 124.023, 163.481 114.673, 158.832 105 C 153.359 93.612, 141.165 81.247, 130 75.766 C 116.497 69.137, 101.596 67.335, 86.500 70.504 C 65.335 74.948, 47.266 92.042, 42.540 112.093 C 39.585 124.630, 41.048 141.399, 45.978 151.500 L 48.907 157.500 46.128 160.500 C 38.200 169.058, 31.827 180.329, 28.116 192.353 C 23.445 207.490, 22.997 216.800, 23.042 297.801 C 23.079 366.627, 23.238 373.927, 24.792 378.203 C 27.725 386.279, 32.102 391.395, 39.043 394.864 L 45.319 398 71.160 398 L 97 398 97 390.210 C 97 381.707, 95.157 373.187, 91.961 366.924 C 89.201 361.513, 83.640 355.508, 79.989 353.996 L 77 352.757 77 335.108 L 77 317.458 84.944 313.650 C 95.175 308.746, 108.882 299.667, 116.500 292.749 C 126.598 283.578, 126.890 283.490, 147 283.567 C 165.785 283.638, 182.225 285.895, 207 291.801 L 218.500 294.543 219 335.522 L 219.500 376.500 222.203 381.623 C 223.689 384.441, 226.977 388.570, 229.508 390.798 C 237.030 397.419, 240.027 398, 266.678 398 L 290 398 290.193 392.750 C 290.760 377.317, 288.169 366.745, 282.142 359.899 C 279.996 357.461, 277.062 354.836, 275.621 354.065 L 273 352.662 273 323.716 L 273 294.770 280.946 286.375 C 294.780 271.761, 306.412 254.333, 311.995 239.858 C 313.689 235.464, 319.896 212.661, 325.788 189.185 L 336.500 146.500 341.150 144.192 C 344.769 142.396, 348.591 141.673, 358.391 140.931 C 377.260 139.503, 386.195 135.314, 394.500 124 C 398.383 118.711, 408.231 96.531, 407.766 94.122 C 407.610 93.316, 399.220 89.790, 387.522 85.617 C 368.608 78.869, 367.497 78.330, 366.650 75.495 C 362.673 62.172, 358.701 56.067, 350.322 50.397 C 346.988 48.140, 341.552 45.483, 338.244 44.492 L 332.229 42.690 333.203 39.595 C 334.132 36.644, 335.687 0.972, 334.885 1.025 C 334.673 1.039, 329.060 3.878, 322.412 7.335' stroke='none' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E");
text-align: left;
width: 29px;
height: 29px;
margin-left: -30px;
margin-top: -2px;
position: absolute;
background-color: var(--color-accent);
}`,
    },
    "shib-custom-vault-folder-custom-icon": {
      general: `.shib-custom-vault-folder-toggle.shib-custom-vault-folder-custom-icon .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content {
font-family: var(--font-family-vault);
font-weight: 700;
text-align: left;
margin-left: 30px;
opacity: 1 !important;
}

.shib-custom-vault-folder-toggle.shib-custom-vault-folder-custom-icon .nav-folder.mod-root > .nav-folder-title > .nav-folder-title-content:before {
content: " ";
-webkit-mask-image: var(--shib-custom-vault-folder-custom-icon-url);
text-align: left;
width: 26px;
height: 26px;
margin-left: -30px;
margin-top: -4px;
position: absolute;
background-color: var(--color-accent);
}`,
    },
    "shiba-toggle-folder-icons": {
      general: `.shiba-toggle-folder-icons .nav-folder-collapse-indicator svg.svg-icon {
color: transparent !important;
}

.shiba-toggle-folder-icons-cute .nav-folder .nav-folder-collapse-indicator {
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 6C2 4.34315 3.34315 3 5 3H7.75093C8.82997 3 9.86325 3.43595 10.6162 4.20888L9.94852 4.85927L10.6162 4.20888L11.7227 5.34484C11.911 5.53807 12.1693 5.64706 12.4391 5.64706H16.4386C18.5513 5.64706 20.281 7.28495 20.4284 9.35939C21.7878 9.88545 22.5642 11.4588 21.977 12.927L20.1542 17.4853C19.5468 19.0041 18.0759 20 16.4402 20H6C4.88522 20 3.87543 19.5427 3.15116 18.8079C2.44035 18.0867 2 17.0938 2 16V6ZM18.3829 9.17647C18.1713 8.29912 17.3812 7.64706 16.4386 7.64706H12.4391C11.6298 7.64706 10.8548 7.3201 10.2901 6.7404L9.18356 5.60444L9.89987 4.90666L9.18356 5.60444C8.80709 5.21798 8.29045 5 7.75093 5H5C4.44772 5 4 5.44772 4 6V14.4471L5.03813 11.25C5.43958 10.0136 6.59158 9.17647 7.89147 9.17647H18.3829ZM5.03034 17.7499L6.94036 11.8676C7.07417 11.4555 7.45817 11.1765 7.89147 11.1765H19.4376C19.9575 11.1765 20.3131 11.7016 20.12 12.1844L18.2972 16.7426C17.9935 17.502 17.258 18 16.4402 18H6C5.64785 18 5.31756 17.9095 5.03034 17.7499Z' fill='%230F1729'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
background-color: currentColor;
height: auto;
width: var((--font-size-folder-and-file), 1.0625em);
margin-right: 4px;
}

.shiba-toggle-folder-icons-cute .nav-folder.is-collapsed .nav-folder-collapse-indicator {
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 6C2 4.34315 3.34315 3 5 3H8.74586C9.80773 3 10.826 3.42223 11.5763 4.17364L13.4 6H16.9925C19.7576 6 21.9977 8.2443 21.9925 11.0094L21.9812 17.0094C21.976 19.7671 19.739 22 16.9812 22H7C4.23858 22 2 19.7614 2 17V6ZM11.5722 7L10.1611 5.58682C9.78595 5.21111 9.27679 5 8.74586 5H5C4.44772 5 4 5.44772 4 6V9H8.74586C9.2768 9 9.78595 8.78889 10.1611 8.41318L11.5722 7ZM4 11V17C4 18.6569 5.34315 20 7 20H16.9812C18.6359 20 19.9781 18.6603 19.9812 17.0056L19.9925 11.0056C19.9956 9.34658 18.6515 8 16.9925 8H13.4L11.5763 9.82636C10.826 10.5778 9.80773 11 8.74586 11H4Z' fill='%230F1729'/%3E%3C/svg%3E");
}

.shiba-toggle-folder-icons-normal .nav-folder .nav-folder-collapse-indicator {
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000000' d='M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
background-color: currentColor;
height: auto;
width: var((--font-size-folder-and-file), 1.0625em);
margin-right: 4px;
}

.shiba-toggle-folder-icons-normal .nav-folder.is-collapsed .nav-folder-collapse-indicator {
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000000' d='M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z'/%3E%3C/svg%3E");
}

.shiba-toggle-folder-icons-arrows .nav-folder .nav-folder-collapse-indicator {
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 4C12.5523 4 13 4.44772 13 5V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z' fill='%230F1729'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
background-color: currentColor;
height: auto;
width: var((--font-size-folder-and-file), 1.0625em);
margin-right: 4px;
}

.shiba-toggle-folder-icons-arrows .nav-folder.is-collapsed .nav-folder-collapse-indicator {
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z' fill='%230F1729'/%3E%3C/svg%3E");
}`,
    },
    "shiba-toggle-folder-icons-cute": {
      general: `.shiba-toggle-folder-icons.shiba-toggle-folder-icons-cute .nav-folder .nav-folder-collapse-indicator {
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 6C2 4.34315 3.34315 3 5 3H7.75093C8.82997 3 9.86325 3.43595 10.6162 4.20888L9.94852 4.85927L10.6162 4.20888L11.7227 5.34484C11.911 5.53807 12.1693 5.64706 12.4391 5.64706H16.4386C18.5513 5.64706 20.281 7.28495 20.4284 9.35939C21.7878 9.88545 22.5642 11.4588 21.977 12.927L20.1542 17.4853C19.5468 19.0041 18.0759 20 16.4402 20H6C4.88522 20 3.87543 19.5427 3.15116 18.8079C2.44035 18.0867 2 17.0938 2 16V6ZM18.3829 9.17647C18.1713 8.29912 17.3812 7.64706 16.4386 7.64706H12.4391C11.6298 7.64706 10.8548 7.3201 10.2901 6.7404L9.18356 5.60444L9.89987 4.90666L9.18356 5.60444C8.80709 5.21798 8.29045 5 7.75093 5H5C4.44772 5 4 5.44772 4 6V14.4471L5.03813 11.25C5.43958 10.0136 6.59158 9.17647 7.89147 9.17647H18.3829ZM5.03034 17.7499L6.94036 11.8676C7.07417 11.4555 7.45817 11.1765 7.89147 11.1765H19.4376C19.9575 11.1765 20.3131 11.7016 20.12 12.1844L18.2972 16.7426C17.9935 17.502 17.258 18 16.4402 18H6C5.64785 18 5.31756 17.9095 5.03034 17.7499Z' fill='%230F1729'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
background-color: currentColor;
height: auto;
width: var((--font-size-folder-and-file), 1.0625em);
margin-right: 4px;
}

.shiba-toggle-folder-icons.shiba-toggle-folder-icons-cute .nav-folder.is-collapsed .nav-folder-collapse-indicator {
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 6C2 4.34315 3.34315 3 5 3H8.74586C9.80773 3 10.826 3.42223 11.5763 4.17364L13.4 6H16.9925C19.7576 6 21.9977 8.2443 21.9925 11.0094L21.9812 17.0094C21.976 19.7671 19.739 22 16.9812 22H7C4.23858 22 2 19.7614 2 17V6ZM11.5722 7L10.1611 5.58682C9.78595 5.21111 9.27679 5 8.74586 5H5C4.44772 5 4 5.44772 4 6V9H8.74586C9.2768 9 9.78595 8.78889 10.1611 8.41318L11.5722 7ZM4 11V17C4 18.6569 5.34315 20 7 20H16.9812C18.6359 20 19.9781 18.6603 19.9812 17.0056L19.9925 11.0056C19.9956 9.34658 18.6515 8 16.9925 8H13.4L11.5763 9.82636C10.826 10.5778 9.80773 11 8.74586 11H4Z' fill='%230F1729'/%3E%3C/svg%3E");
}`,
    },
    "shiba-toggle-folder-icons-normal": {
      general: `.shiba-toggle-folder-icons.shiba-toggle-folder-icons-normal .nav-folder .nav-folder-collapse-indicator {
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000000' d='M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
background-color: currentColor;
height: auto;
width: var((--font-size-folder-and-file), 1.0625em);
margin-right: 4px;
}

.shiba-toggle-folder-icons.shiba-toggle-folder-icons-normal .nav-folder.is-collapsed .nav-folder-collapse-indicator {
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000000' d='M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z'/%3E%3C/svg%3E");
}`,
    },
    "shiba-toggle-folder-icons-arrows": {
      general: `.shiba-toggle-folder-icons.shiba-toggle-folder-icons-arrows .nav-folder .nav-folder-collapse-indicator {
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 4C12.5523 4 13 4.44772 13 5V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z' fill='%230F1729'/%3E%3C/svg%3E");
-webkit-mask-repeat: no-repeat;
background-color: currentColor;
height: auto;
width: var((--font-size-folder-and-file), 1.0625em);
margin-right: 4px;
}

.shiba-toggle-folder-icons.shiba-toggle-folder-icons-arrows .nav-folder.is-collapsed .nav-folder-collapse-indicator {
-webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z' fill='%230F1729'/%3E%3C/svg%3E");
}`,
    },
    "shiba-toggle-indent-colors": {
      general: `.shiba-toggle-indent-colors .nav-folder.mod-root .nav-folder > .nav-folder-children {
transition: color 0.4s;
border-color: rgba(var(--rainbow-folder-color), 0.5);
}

.shiba-toggle-indent-colors-accent .nav-folder.mod-root .nav-folder > .nav-folder-children {
transition: color 0.4s;
border-color: rgba(var(--accent), 0.7);
}`,
    },
    "shiba-toggle-indent-colors-accent": {
      general: `.shiba-toggle-indent-colors-accent .nav-folder.mod-root .nav-folder > .nav-folder-children {
transition: color 0.4s;
border-color: rgba(var(--accent), 0.7);
}`,
    },
    "shiba-color-folder-background": {
      general: `.folder-colorful-one:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .folder-colorful-one:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .folder-colorful-one:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title {
color: var(--nav-folder-title-color);
font-weight: 400;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder, .folder-colorful-five:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder, .folder-colorful-four:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder, .folder-colorful-one:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder, .folder-colorful-six:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder, .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder, .folder-colorful-two:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder {
background-color: inherit;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) {
background-color: rgba(var(--red), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) {
background-color: rgba(var(--lily), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) {
background-color: rgba(var(--orange), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) {
background-color: rgba(var(--yellow), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) {
background-color: rgba(var(--lemon), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) {
background-color: rgba(var(--green), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) {
background-color: rgba(var(--sea), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) {
background-color: rgba(var(--turquoise), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) {
background-color: rgba(var(--cyan), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) {
background-color: rgba(var(--blue), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title, .folder-colorful-five:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .folder-colorful-five:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .folder-colorful-five:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title, .folder-colorful-four:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .folder-colorful-four:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .folder-colorful-four:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title, .folder-colorful-six:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .folder-colorful-six:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .folder-colorful-six:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title, .folder-colorful-three:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title, .folder-colorful-two:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .folder-colorful-two:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .folder-colorful-two:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title {
color: var(--nav-folder-title-color);
}

.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) {
background-color: rgba(var(--red), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) {
background-color: rgba(var(--lily), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) {
background-color: rgba(var(--orange), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) {
background-color: rgba(var(--yellow), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) {
background-color: rgba(var(--lemon), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) {
background-color: rgba(var(--green), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2), .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8), .folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) {
background-color: rgba(var(--sea), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3), .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7), .folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) {
background-color: rgba(var(--turquoise), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11), .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4), .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6), .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9), .folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) {
background-color: rgba(var(--cyan), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10), .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5), .folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) {
background-color: rgba(var(--blue), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) {
background-color: #b67b66;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) {
background-color: #d09d7b;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11), .folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) {
background-color: #d3a984;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10), .folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) {
background-color: #73a788;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6), .folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) {
background-color: #478966;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7), .folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) {
background-color: #135e45;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2), .folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) {
background-color: #a68877;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3), .folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) {
background-color: #b38f7a;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10), .folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) {
background-color: #b99780;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11), .folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) {
background-color: #c1a28a;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) {
background-color: #cab199;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) {
background-color: #d2bfa7;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) {
background-color: #7779a6;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) {
background-color: #897ab3;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) {
background-color: #8780b9;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) {
background-color: #998ac1;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) {
background-color: #9d99ca;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) {
background-color: #a8a7d2;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) {
background-color: #7d77a6;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) {
background-color: #827ab3;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) {
background-color: #8080b9;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) {
background-color: #908ac1;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) {
background-color: var(--folder-colorful-custom-color);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) {
background-color: var(--folder-colorful-custom-color2);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) {
background-color: var(--folder-colorful-custom-color3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) {
background-color: var(--folder-colorful-custom-color4);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) {
background-color: var(--folder-colorful-custom-color5);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) {
background-color: var(--folder-colorful-custom-color6);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) {
background-color: var(--folder-colorful-custom-color7);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) {
background-color: var(--folder-colorful-custom-color8);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) {
background-color: var(--folder-colorful-custom-color9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) {
background-color: var(--folder-colorful-custom-color10);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}`,
    },
    "shiba-color-folder-title": {
      general: `.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title {
color: rgba(var(--red));
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title {
color: rgba(var(--lily));
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title {
color: rgba(var(--orange));
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: rgba(var(--yellow));
opacity: 0.8;
font-weight: 700;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title {
color: rgba(var(--lemon));
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title {
color: rgba(var(--green));
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title {
color: rgba(var(--sea));
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title {
color: rgba(var(--turquoise));
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title {
color: rgba(var(--cyan));
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title {
color: rgba(var(--blue));
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title {
color: rgba(var(--rose), 0.9);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title {
color: rgba(var(--lily), 0.9);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title {
color: rgba(var(--orange), 0.9);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: rgba(var(--yellow), 0.9);
opacity: 0.8;
font-weight: 700;
}

.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title, .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title, .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title, .folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title {
color: rgba(var(--turquoise), 0.9);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title {
color: rgba(var(--green), 0.9);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title, .folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title {
color: rgba(var(--sea), 0.9);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title, .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title, .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title, .folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title {
color: rgba(var(--cyan), 0.9);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title, .folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title, .folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title {
color: rgba(var(--blue), 0.9);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title {
color: rgba(var(--red), 0.9);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: rgba(var(--cyan), 0.9);
opacity: 0.8;
font-weight: 700;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title {
color: #e29696;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title {
color: #df978b;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title {
color: #d7ae72;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: #c0af5a;
opacity: 0.8;
font-weight: 700;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title {
color: #5eba51;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title {
color: #57b978;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title {
color: #acba55;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title {
color: #c6b451;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title, .folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title {
color: #dc975f;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title, .folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title {
color: #a68877;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title, .folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title {
color: #b38f7a;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title, .folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title {
color: #b99780;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: #c1a28a;
opacity: 0.8;
font-weight: 700;
}

.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title {
color: #cab199;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title {
color: #d2bfa7;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title {
color: #c1a28a;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title {
color: #3a41c9;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title {
color: #39207d;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title {
color: #31248f;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: #322b7f;
opacity: 0.8;
font-weight: 700;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title {
color: #3b3992;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title {
color: #3b2f8b;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title {
color: #31257e;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title {
color: #131366;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title {
color: #211485;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title {
color: #20156f;
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title {
color: var(--folder-colorful-custom-color);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title {
color: var(--folder-colorful-custom-color2);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title {
color: var(--folder-colorful-custom-color3);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: var(--folder-colorful-custom-color4);
opacity: 0.8;
font-weight: 700;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title {
color: var(--folder-colorful-custom-color5);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title {
color: var(--folder-colorful-custom-color6);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title {
color: var(--folder-colorful-custom-color7);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title {
color: var(--folder-colorful-custom-color8);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title {
color: var(--folder-colorful-custom-color9);
opacity: 0.9;
font-weight: 700;
}

.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title {
color: var(--folder-colorful-custom-color10);
opacity: 0.9;
font-weight: 700;
}`,
    },
    "folder-colorful-one": {
      general: `.shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title {
color: var(--nav-folder-title-color);
font-weight: 400;
}

.shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder {
background-color: inherit;
}

.shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) {
background-color: rgba(var(--red), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) {
background-color: rgba(var(--lily), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) {
background-color: rgba(var(--orange), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) {
background-color: rgba(var(--yellow), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) {
background-color: rgba(var(--lemon), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) {
background-color: rgba(var(--green), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) {
background-color: rgba(var(--sea), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) {
background-color: rgba(var(--turquoise), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) {
background-color: rgba(var(--cyan), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) {
background-color: rgba(var(--blue), 0.3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-title.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title {
color: rgba(var(--red));
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title {
color: rgba(var(--lily));
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title {
color: rgba(var(--orange));
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: rgba(var(--yellow));
opacity: 0.8;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title {
color: rgba(var(--lemon));
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title {
color: rgba(var(--green));
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title {
color: rgba(var(--sea));
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title {
color: rgba(var(--turquoise));
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title {
color: rgba(var(--cyan));
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-one:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title {
color: rgba(var(--blue));
opacity: 0.9;
font-weight: 700;
}`,
    },
    "folder-colorful-two": {
      general: `.shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder {
background-color: inherit;
}

.shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title {
color: var(--nav-folder-title-color);
}

.shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) {
background-color: rgba(var(--red), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) {
background-color: rgba(var(--lily), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) {
background-color: rgba(var(--orange), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) {
background-color: rgba(var(--yellow), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) {
background-color: rgba(var(--lemon), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) {
background-color: rgba(var(--green), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) {
background-color: rgba(var(--sea), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) {
background-color: rgba(var(--turquoise), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) {
background-color: rgba(var(--cyan), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) {
background-color: rgba(var(--blue), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-title.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title {
color: rgba(var(--rose), 0.9);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title {
color: rgba(var(--lily), 0.9);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title {
color: rgba(var(--orange), 0.9);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: rgba(var(--yellow), 0.9);
opacity: 0.8;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title {
color: rgba(var(--turquoise), 0.9);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title {
color: rgba(var(--green), 0.9);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title {
color: rgba(var(--sea), 0.9);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title {
color: rgba(var(--cyan), 0.9);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title {
color: rgba(var(--blue), 0.9);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-two:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title {
color: rgba(var(--red), 0.9);
opacity: 0.9;
font-weight: 700;
}`,
    },
    "folder-colorful-three": {
      general: `.shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder {
background-color: inherit;
}

.shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title {
color: var(--nav-folder-title-color);
}

.shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2), .shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) {
background-color: rgba(var(--sea), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3), .shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) {
background-color: rgba(var(--turquoise), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11), .shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4), .shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6), .shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) {
background-color: rgba(var(--cyan), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10), .shiba-color-folder-background.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) {
background-color: rgba(var(--blue), 0.9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-title.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title, .shiba-color-folder-title.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title, .shiba-color-folder-title.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title {
color: rgba(var(--turquoise), 0.9);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title {
color: rgba(var(--sea), 0.9);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title, .shiba-color-folder-title.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title, .shiba-color-folder-title.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title {
color: rgba(var(--cyan), 0.9);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title, .shiba-color-folder-title.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title {
color: rgba(var(--blue), 0.9);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-three:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: rgba(var(--cyan), 0.9);
opacity: 0.8;
font-weight: 700;
}`,
    },
    "folder-colorful-four": {
      general: `.shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder {
background-color: inherit;
}

.shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title {
color: var(--nav-folder-title-color);
}

.shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) {
background-color: #b67b66;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) {
background-color: #d09d7b;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11), .shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) {
background-color: #d3a984;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10), .shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) {
background-color: #73a788;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6), .shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) {
background-color: #478966;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7), .shiba-color-folder-background.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) {
background-color: #135e45;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-title.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title {
color: #e29696;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title {
color: #df978b;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title {
color: #d7ae72;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: #c0af5a;
opacity: 0.8;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title {
color: #5eba51;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title {
color: #57b978;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title {
color: #acba55;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title {
color: #c6b451;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title, .shiba-color-folder-title.folder-colorful-four:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title {
color: #dc975f;
opacity: 0.9;
font-weight: 700;
}`,
    },
    "folder-colorful-five": {
      general: `.shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder {
background-color: inherit;
}

.shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title {
color: var(--nav-folder-title-color);
}

.shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2), .shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) {
background-color: #a68877;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3), .shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) {
background-color: #b38f7a;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10), .shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) {
background-color: #b99780;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11), .shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) {
background-color: #c1a28a;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) {
background-color: #cab199;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) {
background-color: #d2bfa7;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-title.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title, .shiba-color-folder-title.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title {
color: #a68877;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title, .shiba-color-folder-title.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title {
color: #b38f7a;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title, .shiba-color-folder-title.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title {
color: #b99780;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: #c1a28a;
opacity: 0.8;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title {
color: #cab199;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title {
color: #d2bfa7;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-five:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title {
color: #c1a28a;
opacity: 0.9;
font-weight: 700;
}`,
    },
    "folder-colorful-six": {
      general: `.shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder {
background-color: inherit;
}

.shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title {
color: var(--nav-folder-title-color);
}

.shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) {
background-color: #7779a6;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) {
background-color: #897ab3;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) {
background-color: #8780b9;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) {
background-color: #998ac1;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) {
background-color: #9d99ca;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) {
background-color: #a8a7d2;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) {
background-color: #7d77a6;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) {
background-color: #827ab3;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) {
background-color: #8080b9;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) {
background-color: #908ac1;
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-title.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title {
color: #3a41c9;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title {
color: #39207d;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title {
color: #31248f;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: #322b7f;
opacity: 0.8;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title {
color: #3b3992;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title {
color: #3b2f8b;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title {
color: #31257e;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title {
color: #131366;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title {
color: #211485;
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-six:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title {
color: #20156f;
opacity: 0.9;
font-weight: 700;
}`,
    },
    "folder-colorful-custom": {
      general: `.shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder.mod-root .nav-folder .nav-folder {
background-color: inherit;
}

.shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .is-collapsed .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-collapse-indicator svg, .shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-file-title, .shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder.mod-root > .nav-folder-children > .nav-folder .nav-folder-title {
color: var(--nav-folder-title-color);
}

.shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) {
background-color: var(--folder-colorful-custom-color);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) {
background-color: var(--folder-colorful-custom-color2);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) {
background-color: var(--folder-colorful-custom-color3);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) {
background-color: var(--folder-colorful-custom-color4);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) {
background-color: var(--folder-colorful-custom-color5);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) {
background-color: var(--folder-colorful-custom-color6);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) {
background-color: var(--folder-colorful-custom-color7);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) {
background-color: var(--folder-colorful-custom-color8);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) {
background-color: var(--folder-colorful-custom-color9);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-background.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) {
background-color: var(--folder-colorful-custom-color10);
opacity: var(--shib-colorful-folders-opacity);
border-radius: var(--shib-colorful-folders-radius, 2px);
margin-bottom: 2px;
}

.shiba-color-folder-title.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 2) .nav-folder-title {
color: var(--folder-colorful-custom-color);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 3) .nav-folder-title {
color: var(--folder-colorful-custom-color2);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 4) .nav-folder-title {
color: var(--folder-colorful-custom-color3);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 5) .nav-folder-title {
color: var(--folder-colorful-custom-color4);
opacity: 0.8;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 6) .nav-folder-title {
color: var(--folder-colorful-custom-color5);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 7) .nav-folder-title {
color: var(--folder-colorful-custom-color6);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 8) .nav-folder-title {
color: var(--folder-colorful-custom-color7);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 9) .nav-folder-title {
color: var(--folder-colorful-custom-color8);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 10) .nav-folder-title {
color: var(--folder-colorful-custom-color9);
opacity: 0.9;
font-weight: 700;
}

.shiba-color-folder-title.folder-colorful-custom:not(.shiba-color-folder-default) .nav-folder-children > .nav-folder:nth-child(10n + 11) .nav-folder-title {
color: var(--folder-colorful-custom-color10);
opacity: 0.9;
font-weight: 700;
}`,
    },
    "shib-hide-scrollbars": {
      general: `.shib-hide-scrollbars ::-webkit-scrollbar {
display: none;
visibility: hidden;
width: 30px;
height: 100px;
border-radius: 100px;
background-color: #fff;
}`,
    },
    "shib-styled-scrollbars": {
      general: `body:not(.shib-hide-scrollbars).shib-styled-scrollbars ::-webkit-scrollbar {
width: 13px;
background-color: transparent;
}

body:not(.shib-hide-scrollbars).shib-styled-scrollbars ::-webkit-scrollbar:horizontal {
height: 11px;
}

body:not(.shib-hide-scrollbars).shib-styled-scrollbars ::-webkit-scrollbar-corner {
background-color: transparent;
}

body:not(.shib-hide-scrollbars).shib-styled-scrollbars ::-webkit-scrollbar-track {
background-color: transparent;
}

body:not(.shib-hide-scrollbars).shib-styled-scrollbars ::-webkit-scrollbar-thumb {
background-clip: padding-box;
border-radius: 20px;
border: 3px solid transparent;
background-color: var(--background-modifier-border);
min-height: 45px;
}

body:not(.shib-hide-scrollbars).shib-styled-scrollbars .mod-left-split .workspace-tabs ::-webkit-scrollbar-thumb:hover, body:not(.shib-hide-scrollbars).shib-styled-scrollbars .modal .vertical-tab-header::-webkit-scrollbar-thumb:hover, body:not(.shib-hide-scrollbars).shib-styled-scrollbars ::-webkit-scrollbar-thumb:hover {
background-color: var(--background-modifier-border-hover);
}

body:not(.shib-hide-scrollbars).shib-styled-scrollbars .mod-left-split .workspace-tabs ::-webkit-scrollbar-thumb:active, body:not(.shib-hide-scrollbars).shib-styled-scrollbars .modal .vertical-tab-header::-webkit-scrollbar-thumb:active, body:not(.shib-hide-scrollbars).shib-styled-scrollbars ::-webkit-scrollbar-thumb:active {
background-color: var(--background-modifier-border-focus);
}`,
    },
    "shib-card-layout": {
      general: `.shib-card-layout .mod-left-split, .shib-card-layout .mod-left-split .workspace-tabs .workspace-leaf, .shib-card-layout .mod-right-split .workspace-tabs .workspace-leaf, .shib-card-layout .mod-root .workspace-tabs .workspace-leaf, .shib-card-layout .mod-vertical, .shib-card-layout .mod-vertical .workspace-tab-container, .shib-card-layout .mod-vertical .workspace-tabs, .shib-card-layout .workspace-fake-target-overlay:not(.is-in-sidebar) .workspace-tabs .workspace-leaf, .shib-card-layout .workspace-split.mod-vertical {
background-color: var(--tab-container-background);
}

.shib-card-layout .workspace-split:not(.mod-root) .graph-controls, .shib-card-layout .workspace-split:not(.mod-root) .graph-controls.is-close, .shib-card-layout .workspace-split:not(.mod-root) .graph-controls:not(.is-close) {
background-color: rgb(var(--side));
}

.shib-card-layout .sidebar-toggle-button, .shib-card-layout .workspace-tabs.mod-top, body.shib-card-layout {
--tab-container-background: var(--card-background-color);
--file-header-border: var(--border-width) dotted var(--background-modifier-border);
}

body.is-focused.shib-card-layout, body.is-focused.shib-card-layout .sidebar-toggle-button, body.is-focused.shib-card-layout .workspace-tabs.mod-top {
--tab-container-background: var(--card-background-color);
}

.shib-card-layout .mod-left-split .workspace-tab-header-container, .shib-card-layout .workspace-tab-header-container {
border-bottom: none;
}

.shib-card-layout .workspace-ribbon.mod-left {
padding: 0;
background-color: var(--tab-container-background);
border: none;
}

.shib-card-layout-actions.shib-card-layout .workspace-ribbon.mod-left {
margin-right: var(--shib-card-layout-padding, 10px);
}

.shib-card-layout .workspace-ribbon.mod-left:before {
border-bottom: none;
background-color: var(--tab-container-background) !important;
}

.shib-card-layout .side-dock-actions, .shib-card-layout .side-dock-settings {
padding: var(--ribbon-padding);
}

.shib-card-layout-actions.shib-card-layout .side-dock-actions {
border-radius: 0 var(--shib-card-radius, var(--radius-xl)) var(--shib-card-radius, var(--radius-xl)) 0;
border: 1px solid var(--tab-outline-color);
background-color: var(--card-foreground-color);
margin-top: 2px;
}

.shib-card-layout-actions.shib-card-layout .side-dock-settings {
border-radius: 0 var(--shib-card-radius, var(--radius-xl)) 0 0;
border: 1px solid var(--tab-outline-color);
background-color: var(--card-foreground-color);
}

.shib-card-layout .workspace-ribbon.mod-left {
margin-top: calc(var(--header-height) - 1px) !important;
}

.shib-card-layout .mod-vertical .workspace-tab-header-container {
padding-left: var(--shib-card-header-left-padding, 20px);
}

.shib-card-layout .mod-vertical .workspace-tab-header-container-inner {
margin: 6px -5px calc(var(--tab-outline-width) * -1);
z-index: 1;
}

.shib-card-layout .mod-vertical .workspace-tabs {
padding-left: var(--shib-card-layout-padding, 10px);
padding-right: var(--shib-card-layout-padding, 10px);
}

.shib-card-layout .mod-left-split .workspace-tab-container, .shib-card-layout .mod-right-split .workspace-tab-container {
padding-left: var(--shib-card-layout-padding, 10px);
padding-right: var(--shib-card-layout-padding, 10px);
background-color: var(--tab-container-background);
}

.shib-card-layout .workspace-split.mod-horizontal > * > .workspace-leaf-resize-handle, .shib-card-layout .workspace-split.mod-left-split > .workspace-leaf-resize-handle, .shib-card-layout .workspace-split.mod-right-split > .workspace-leaf-resize-handle {
border: 2px solid transparent;
}

.shib-card-layout .workspace-split .workspace-leaf-content {
border-radius: var(--shib-card-radius, var(--radius-xl));
background-color: var(--card-foreground-color);
border: 1px solid var(--tab-outline-color);
margin-bottom: var(--shib-card-layout-padding, 10px);
}

.shib-card-shadows .side-dock-actions, .shib-card-shadows .workspace-split .workspace-leaf-content, .shib-card-shadows.shib-card-layout-fileexplorer .workspace-split .workspace-leaf-content[data-type="file-explorer"] {
box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.05);
}

.shib-card-layout .workspace-split .workspace-leaf-content[data-type="file-explorer"] {
background-color: var(--tab-container-background);
box-shadow: none;
border-width: 0;
}

.shib-card-layout-fileexplorer .workspace-split .workspace-leaf-content[data-type="file-explorer"] {
background-color: var(--card-foreground-color);
border-width: 1px;
}

.shib-card-layout .workspace-split .mod-stacked .workspace-leaf-content {
border-radius: 0;
border: none;
margin-bottom: 0;
border-left: none;
}

.shib-card-layout .workspace-split.mod-horizontal > * {
width: unset;
}

.shib-card-layout .mod-stacked .workspace-tab-header {
border-style: solid;
border-radius: var(--shib-card-radius, var(--radius-xl)) 0 0 var(--shib-card-radius, var(--radius-xl)) !important;
border-width: var(--tab-outline-width);
border-color: var(--tab-outline-color);
border-right: var(--tab-outline-width) dashed var(--tab-outline-color);
}

.shib-card-layout .mod-stacked .workspace-leaf {
border-left-width: 0;
border-top-width: var(--tab-outline-width);
border-bottom-width: var(--tab-outline-width);
border-style: solid;
border-color: var(--tab-outline-color);
border-radius: 0 var(--shib-card-radius, var(--radius-xl)) var(--shib-card-radius, var(--radius-xl)) 0;
}

.shib-card-layout .mod-stacked .workspace-tab-container {
padding-bottom: var(--shib-card-layout-padding, 10px);
}

.shib-card-layout .mod-top .workspace-leaf-resize-handle {
border-color: transparent;
}

.shib-card-layout .workspace-drop-overlay:before {
width: calc(100% - 6px - var(--shib-card-layout-padding, 0) * 2);
height: calc(100% - 6px - var(--shib-card-layout-padding, 0) * 2);
margin: auto;
}

.shib-card-layout .workspace .mod-root .workspace-tabs.mod-stacked .workspace-tab-container .workspace-leaf {
background-color: var(--background-primary);
}

.shib-workspace-background-image-toggle .shib-card-layout .workspace-tab-header-container, .shib-workspace-background-image-toggle.shib-card-layout .view-header, .shib-workspace-background-image-toggle.shib-card-layout .workspace-ribbon.mod-left:before {
background-color: transparent;
}

.shib-workspace-background-image-toggle.is-focused.shib-card-layout .workspace-leaf.mod-active .view-header, .shib-workspace-background-image-toggle.shib-card-layout .workspace-ribbon, .shib-workspace-background-image-toggle.shib-card-layout .workspace-split.mod-root .view-content {
background: 0 0;
}`,
    },
    "shib-disable-borders": {
      general: `body.shib-disable-borders, body.shib-workspace-background-image-toggle {
--divider-color: transparent;
}`,
    },
    "shib-card-shadows": {
      general: `.shib-card-layout.shib-card-shadows .side-dock-actions, .shib-card-layout.shib-card-shadows .workspace-split .workspace-leaf-content, .shib-card-layout.shib-card-layout-fileexplorer .workspace-split .workspace-leaf-content[data-type="file-explorer"] {
box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.05);
}`,
    },
    "shib-card-layout-actions": {
      general: `.shib-card-layout .workspace-ribbon.mod-left {
margin-right: var(--shib-card-layout-padding, 10px);
}

.shib-card-layout .side-dock-actions {
border-radius: 0 var(--shib-card-radius, var(--radius-xl)) var(--shib-card-radius, var(--radius-xl)) 0;
border: 1px solid var(--tab-outline-color);
background-color: var(--card-foreground-color);
margin-top: 2px;
}

.shib-card-layout .side-dock-settings {
border-radius: 0 var(--shib-card-radius, var(--radius-xl)) 0 0;
border: 1px solid var(--tab-outline-color);
background-color: var(--card-foreground-color);
}`,
    },
    "shib-card-layout-fileexplorer": {
      general: `.shib-card-layout.shib-card-shadows.shib-card-layout-fileexplorer .workspace-split .workspace-leaf-content[data-type="file-explorer"] {
box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.05);
}

.shib-card-layout.shib-card-layout-fileexplorer .workspace-split .workspace-leaf-content[data-type="file-explorer"] {
background-color: var(--card-foreground-color);
border-width: 1px;
}`,
    },
    "shib-workspace-background-image-toggle": {
      general: `.shib-workspace-background-image-toggle .view-header-title-container:not(.mod-at-end):after {
display: none;
}

body.shib-disable-borders.shib-workspace-background-image-toggle {
--divider-color: transparent;
}

.shib-workspace-background-image-toggle .canvas-wrapper, .shib-workspace-background-image-toggle .is-focused .workspace-leaf.mod-active .view-header, .shib-workspace-background-image-toggle .mod-macos.is-hidden-frameless:not(.is-popout-window) .sidebar-toggle-button.mod-right, .shib-workspace-background-image-toggle .mod-root .workspace-tabs .workspace-leaf, .shib-workspace-background-image-toggle .shib-card-layout .workspace-tab-header-container, .shib-workspace-background-image-toggle .workspace-fake-target-overlay:not(.is-in-sidebar) .workspace-tabs .workspace-leaf, .shib-workspace-background-image-toggle .workspace-split.mod-root, .shib-canvas-dark-bg .canvas-wrapper, .shib-card-layout .view-header, .shib-card-layout .workspace-ribbon.mod-left:before, .shib-workspace-background-image-toggle:not(.shib-card-layout).mod-macos.is-hidden-frameless:not(.is-popout-window) .sidebar-toggle-button.mod-right, body.layout-style-options-default.shib-workspace-background-image-toggle .workspace-tab-container-after.is-after-active, body.layout-style-options-default.shib-workspace-background-image-toggle .workspace-tab-container-after.is-after-active .workspace-tab-header-inner, body.layout-style-options-default.shib-workspace-background-image-toggle .workspace-tab-container-before.is-before-active, body.layout-style-options-default.shib-workspace-background-image-toggle .workspace-tab-container-before.is-before-active .workspace-tab-header-inner, body.layout-style-options-default.shib-workspace-background-image-toggle .workspace-tab-header.is-after-active, body.layout-style-options-default.shib-workspace-background-image-toggle .workspace-tab-header.is-after-active .workspace-tab-header-inner, body.layout-style-options-default.shib-workspace-background-image-toggle .workspace-tab-header.is-before-active, body.layout-style-options-default.shib-workspace-background-image-toggle .workspace-tab-header.is-before-active .workspace-tab-header-inner {
background-color: transparent;
}

.shib-workspace-background-image-toggle {
--card-background-color: transparent;
--card-foreground-color: rgba(var(--base), var(--shib-custom-bg-card-fg-opacity, 0.4));
--tab-inactive-color: rgba(var(--side), var(--shib-custom-bg-card-fg-opacity, 0.4));
--code-background: var(--card-foreground-color);
}

.shib-workspace-background-image-toggle .horizontal-main-container, .shib-bg-fix .horizontal-main-container {
background: var(--shib-background-image);
background-size: cover;
background-color: transparent;
}

.shib-workspace-background-image-toggle .workspace, .shib-bg-fix .workspace {
backdrop-filter: brightness(var(--shib-custom-bg-brightness, 0.5)) blur(var(--shib-custom-bg-blur, 5px));
background-color: transparent;
}

.shib-workspace-background-image-toggle .kanban-plugin__item-title-wrapper, .is-focused.shib-card-layout .workspace-leaf.mod-active .view-header, .shib-card-layout .workspace-ribbon, .shib-card-layout .workspace-split.mod-root .view-content {
background: 0 0;
}

.shib-alternate-tab-toggle .workspace-tabs:not(.mod-stacked), .shib-safari-tab-toggle .workspace-tabs:not(.mod-stacked) {
--tab-background: var(--tab-inactive-color);
--tab-background-active: var(--card-foreground-color);
--tab-background-inactive: var(--tab-inactive-color);
}

.shib-floating-header .nav-folder.mod-root > .nav-folder-title {
background-color: var(--tab-inactive-color);
}

.shib-workspace-background-image-toggle .kanban-plugin .kanban-plugin__lane button:hover, .shib-workspace-background-image-toggle .kanban-plugin__item-content-wrapper, .shib-workspace-background-image-toggle .kanban-plugin__lane, .is-focused:not(.shib-card-layout) .workspace-leaf.mod-active .view-header, .shib-workspace-background-image-toggle:not(.shib-card-layout) .view-header, .shib-workspace-background-image-toggle:not(.shib-card-layout) .workspace-ribbon, .shib-workspace-background-image-toggle:not(.shib-card-layout) .workspace-ribbon.mod-left:before, .shib-workspace-background-image-toggle:not(.shib-card-layout) .workspace-split.mod-root .view-content, .shib-workspace-background-image-toggle:not(.shib-card-layout) .workspace-tab-header-container, .shib-workspace-background-image-toggle:not(.shib-card-layout) .workspace-tabs .workspace-leaf {
background-color: var(--card-foreground-color);
}

.shib-workspace-background-image-toggle :is( .tree-item-inner, .tree-item-flair, .workspace-ribbon-collapse-btn, .side-dock-ribbon-tab, .side-dock-ribbon-action ):not(:hover) {
color: var(--text-normal);
}

.background-settings-workplace-mountain-light {
--mountain: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibauni/mountain.jpg?raw=true");
--shib-background-image: var(--mountain);
}

.background-settings-workplace-mountain2-light {
--mountain2: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/mountain2.jpeg?raw=true");
--shib-background-image: var(--mountain2);
}`,
      dark: `.theme-dark {
--background-primary-bg-4-bt: #1414148a;
--background-secondary-bg-4-bt: #16161680;
--background-secondary-alt-bg-4-bt: #16161680;
--background-primary-alt-bg-4-bt: #1c1c1ccf;
--text-normal: #cccccc;
--page-border-bottom: var(--color-base-30);
}

.is-mobile {
--background-primary-bg-4-bt: #1f1f1fbf;
--background-secondary-bg-4-bt: #00000069;
--background-secondary-alt-bg-4-bt: #16161680;
--background-primary-alt-bg-4-bt: #00000082;
--text-normal: #d4d4d4;
--page-border-bottom: var(--color-base-30);
}

.background-settings-workplace-theme-dark-cute-town-d.theme-dark {
--cute-town-d: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/cute-town-dark%20(2).png?raw=true");
--shib-background-image: var(--cute-town-d);
}

.background-settings-workplace-theme-dark-in-the-sky.theme-dark {
--in-the-sky: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/in-the-sky.jpg?raw=true");
--shib-background-image: var(--in-the-sky);
}

.background-settings-workplace-theme-dark-tokyo.theme-dark {
--tokyo: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/tokyo.jpeg?raw=true");
--shib-background-image: var(--tokyo);
}

.background-settings-workplace-theme-dark-thunder.theme-dark {
--thunder: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/thunder.jpg?raw=true");
--shib-background-image: var(--thunder);
}

.background-settings-workplace-theme-dark-lofi.theme-dark {
--lofi: url("https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/bici.jpg");
--shib-background-image: var(--lofi);
}

.background-settings-workplace-theme-dark-lofi2.theme-dark {
--lofi2: url("https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/nord-street.png");
--shib-background-image: var(--lofi2);
}

.background-settings-workplace-theme-dark-lofi3.theme-dark {
--lofi3: url("https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/room.jpg");
--shib-background-image: var(--lofi3);
}

.background-settings-workplace-theme-dark-lofi4.theme-dark {
--lofi4: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/lofi4.jpg?raw=true");
--shib-background-image: var(--lofi4);
}

.background-settings-workplace-theme-dark-custom-option.theme-dark {
--shib-background-image: var(--background-settings-workplace-theme-dark-custom);
}

.background-settings-markdown-page-custom-option.theme-dark {
--shib-background-image: var(--background-settings-markdown-page-custom);
}`,
      light: `.background-settings-workplace-theme-light-cute-town-l.theme-light {
--cute-town-l: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/cute-town.png?raw=true");
--shib-background-image: var(--cute-town-l);
}

.background-settings-workplace-theme-light-japan.theme-light {
--japan: url("https://i.redd.it/7lnk3bmktpv81.jpg");
--shib-background-image: var(--japan);
}

.background-settings-workplace-theme-light-robot.theme-light {
--robot: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/robot.jpg?raw=true");
--shib-background-image: var(--robot);
}

.background-settings-workplace-theme-light-neocity.theme-light {
--neocity: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/neocity.png?raw=true");
--shib-background-image: var(--neocity);
}

.background-settings-workplace-theme-light-custom-option.theme-light {
--shib-background-image: var(--background-settings-workplace-theme-light-custom);
}`,
    },
    "background-settings-workplace-theme-light-cute-town-l": {
      light: `.shib-workspace-background-image-toggle.theme-light {
--cute-town-l: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/cute-town.png?raw=true");
--shib-background-image: var(--cute-town-l);
}`,
    },
    "background-settings-workplace-theme-light-japan": {
      light: `.shib-workspace-background-image-toggle.theme-light {
--japan: url("https://i.redd.it/7lnk3bmktpv81.jpg");
--shib-background-image: var(--japan);
}`,
    },
    "background-settings-workplace-theme-light-robot": {
      light: `.shib-workspace-background-image-toggle.theme-light {
--robot: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/robot.jpg?raw=true");
--shib-background-image: var(--robot);
}`,
    },
    "background-settings-workplace-theme-light-neocity": {
      light: `.shib-workspace-background-image-toggle.theme-light {
--neocity: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/neocity.png?raw=true");
--shib-background-image: var(--neocity);
}`,
    },
    "background-settings-workplace-mountain-light": {
      general: `.shib-workspace-background-image-toggle.background-settings-workplace-mountain-light {
--mountain: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibauni/mountain.jpg?raw=true");
--shib-background-image: var(--mountain);
}`,
    },
    "background-settings-workplace-mountain2-light": {
      general: `.shib-workspace-background-image-toggle.background-settings-workplace-mountain2-light {
--mountain2: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/mountain2.jpeg?raw=true");
--shib-background-image: var(--mountain2);
}`,
    },
    "background-settings-workplace-theme-light-custom-option": {
      light: `.shib-workspace-background-image-toggle.theme-light {
--shib-background-image: var(--background-settings-workplace-theme-light-custom);
}`,
    },
    "background-settings-workplace-theme-dark-cute-town-d": {
      dark: `.shib-workspace-background-image-toggle.theme-dark {
--cute-town-d: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/cute-town-dark%20(2).png?raw=true");
--shib-background-image: var(--cute-town-d);
}`,
    },
    "background-settings-workplace-theme-dark-in-the-sky": {
      dark: `.shib-workspace-background-image-toggle.theme-dark {
--in-the-sky: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/in-the-sky.jpg?raw=true");
--shib-background-image: var(--in-the-sky);
}`,
    },
    "background-settings-workplace-theme-dark-tokyo": {
      dark: `.shib-workspace-background-image-toggle.theme-dark {
--tokyo: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/tokyo.jpeg?raw=true");
--shib-background-image: var(--tokyo);
}`,
    },
    "background-settings-workplace-theme-dark-thunder": {
      dark: `.shib-workspace-background-image-toggle.theme-dark {
--thunder: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/thunder.jpg?raw=true");
--shib-background-image: var(--thunder);
}`,
    },
    "background-settings-workplace-theme-dark-lofi": {
      dark: `.shib-workspace-background-image-toggle.theme-dark {
--lofi: url("https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/bici.jpg");
--shib-background-image: var(--lofi);
}

.shib-workspace-background-image-toggle.background-settings-workplace-theme-dark-lofi2.theme-dark {
--lofi2: url("https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/nord-street.png");
--shib-background-image: var(--lofi2);
}

.shib-workspace-background-image-toggle.background-settings-workplace-theme-dark-lofi3.theme-dark {
--lofi3: url("https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/room.jpg");
--shib-background-image: var(--lofi3);
}

.shib-workspace-background-image-toggle.background-settings-workplace-theme-dark-lofi4.theme-dark {
--lofi4: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/lofi4.jpg?raw=true");
--shib-background-image: var(--lofi4);
}`,
    },
    "background-settings-workplace-theme-dark-lofi2": {
      dark: `.shib-workspace-background-image-toggle.theme-dark {
--lofi2: url("https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/nord-street.png");
--shib-background-image: var(--lofi2);
}`,
    },
    "background-settings-workplace-theme-dark-lofi3": {
      dark: `.shib-workspace-background-image-toggle.theme-dark {
--lofi3: url("https://raw.githubusercontent.com/D3Ext/aesthetic-wallpapers/main/images/room.jpg");
--shib-background-image: var(--lofi3);
}`,
    },
    "background-settings-workplace-theme-dark-lofi4": {
      dark: `.shib-workspace-background-image-toggle.theme-dark {
--lofi4: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/lofi4.jpg?raw=true");
--shib-background-image: var(--lofi4);
}`,
    },
    "background-settings-workplace-theme-dark-custom-option": {
      dark: `.shib-workspace-background-image-toggle.theme-dark {
--shib-background-image: var(--background-settings-workplace-theme-dark-custom);
}`,
    },
    "toggle-bg-panel-page": {
      general: `body.toggle-bg-panel-page :is( .nav-files-container, .file-tree-plugin-view, [data-type="search"], [data-type="starred"], [data-type="recent-files"] )::before {
content: "";
display: block;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: no-repeat center/cover var(--panel-page-background-url-theme);
z-index: -1;
}`,
      dark: `body.theme-dark:is(.shib-card-layout) :is( .nav-files-container, .file-tree-plugin-view, [data-type="search"], [data-type="starred"], [data-type="recent-files"] )::before {
opacity: var(--panel-page-opacity);
border-radius: var(--shib-card-radius, var(--radius-xl));
}

body.theme-dark:not(.shib-card-layout) :is( .nav-files-container, .file-tree-plugin-view, [data-type="search"], [data-type="starred"], [data-type="recent-files"] )::before {
opacity: var(--panel-page-opacity);
}

body.panel-page-bg-theme-dark-robot.theme-dark {
--panel-page-background-url-theme: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/robot.jpeg?raw=true");
}

body.panel-page-bg-theme-dark-paradise.theme-dark {
--panel-page-background-url-theme: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/paradise2.jpeg?raw=true");
}

body.panel-page-bg-theme-dark-apple.theme-dark {
--panel-page-background-url-theme: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/iphone.jpeg?raw=true");
}

body.panel-page-bg-theme-dark-custom.theme-dark {
--panel-page-background-url-theme: var(--background-panel-page-theme-dark-custom);
}`,
      light: `body.theme-light:is(.shib-card-layout) :is( .nav-files-container, .file-tree-plugin-view, [data-type="search"], [data-type="starred"], [data-type="recent-files"] )::before {
opacity: var(--panel-page-opacity);
border-radius: var(--shib-card-radius, var(--radius-xl));
}

body.theme-light:not(.shib-card-layout) :is( .nav-files-container, .file-tree-plugin-view, [data-type="search"], [data-type="starred"], [data-type="recent-files"] )::before {
opacity: var(--panel-page-opacity);
}

body.panel-page-bg-theme-light-space.theme-light {
--panel-page-background-url-theme: url("https://i.pinimg.com/originals/52/e5/6f/52e56fb927b170294ccc035f02c6477d.jpg");
}

body.panel-page-bg-theme-light-paradise.theme-light {
--panel-page-background-url-theme: url("https://www.enjpg.com/img/2020/summer-aesthetic-wallpaper-iphone-15.jpg");
}

body.panel-page-bg-theme-light-custom.theme-light {
--panel-page-background-url-theme: var(--background-panel-page-theme-light-custom);
}`,
    },
    "panel-page-bg-theme-light-space": {
      light: `body.toggle-bg-panel-page.theme-light {
--panel-page-background-url-theme: url("https://i.pinimg.com/originals/52/e5/6f/52e56fb927b170294ccc035f02c6477d.jpg");
}`,
    },
    "panel-page-bg-theme-light-paradise": {
      light: `body.toggle-bg-panel-page.theme-light {
--panel-page-background-url-theme: url("https://www.enjpg.com/img/2020/summer-aesthetic-wallpaper-iphone-15.jpg");
}`,
    },
    "panel-page-bg-theme-light-custom": {
      light: `body.toggle-bg-panel-page.theme-light {
--panel-page-background-url-theme: var(--background-panel-page-theme-light-custom);
}`,
    },
    "panel-page-bg-theme-dark-paradise": {
      dark: `body.toggle-bg-panel-page.theme-dark {
--panel-page-background-url-theme: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/paradise2.jpeg?raw=true");
}`,
    },
    "panel-page-bg-theme-dark-robot": {
      dark: `body.toggle-bg-panel-page.theme-dark {
--panel-page-background-url-theme: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/robot.jpeg?raw=true");
}`,
    },
    "panel-page-bg-theme-dark-apple": {
      dark: `body.toggle-bg-panel-page.theme-dark {
--panel-page-background-url-theme: url("https://github.com/faroukx/aesthetic-wallpapers/blob/main/shibainu/iphone.jpeg?raw=true");
}`,
    },
    "panel-page-bg-theme-dark-custom": {
      dark: `body.toggle-bg-panel-page.theme-dark {
--panel-page-background-url-theme: var(--background-panel-page-theme-dark-custom);
}`,
    },
    "minimal-cards-style": {
      general: `.minimal-cards-style1 .cards table.dataview > tbody > tr, .minimal-cards-style2 .cards table.dataview > tbody > tr, .minimal-cards-style3 .cards table.dataview > tbody > tr {
box-shadow:
    0 4px 6px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px 1px rgba(0, 0, 0, 0.025);
transition: box-shadow 0.15s linear;
}

.minimal-cards-style .cards .table-view-table > tbody > tr > td {
border-bottom: 1px solid var(--cards-background-modifier-border) !important;
margin: 10 !important;
}

.minimal-cards-style .cards .table-view-table > tbody > tr > td:last-child {
border-bottom-color: transparent !important;
}

.minimal-cards-style .cards .table-view-table > tbody > tr > td:first-child {
width: 100% !important;
border-bottom: 1px solid var(--cards-background-modifier-border) !important;
}

.minimal-cards-style .cards .table-view-table > tbody > tr > td:first-child span {
margin: 2px calc(var(--cards-padding) * 0.5) 0 calc(var(--cards-padding) * 0.5);
}

.minimal-cards-style .cards .table-view-table > tbody > tr > td:first-child span a {
padding: 0 !important;
}

.minimal-cards-style .cards table.dataview > tbody > tr {
background-color: var(--cards-background) !important;
}

.minimal-cards-style1 .cards table.dataview > tbody > tr {
border: var(--cards-border-width) solid var(--cards-background-modifier-border);
}

.minimal-cards-style2 .cards table.dataview > tbody > tr {
border: var(--cards-border-width) dashed var(--cards-background-modifier-border);
}

.minimal-cards-style3 .cards table.dataview > tbody > tr {
border: var(--cards-border-width) dotted var(--cards-background-modifier-border);
}`,
    },
    "minimal-cards-style1": {
      general: `.minimal-cards-style1 .cards table.dataview > tbody > tr {
box-shadow:
    0 4px 6px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px 1px rgba(0, 0, 0, 0.025);
transition: box-shadow 0.15s linear;
}

.minimal-cards-style1 .cards table.dataview > tbody > tr {
border: var(--cards-border-width) solid var(--cards-background-modifier-border);
}`,
    },
    "minimal-cards-style2": {
      general: `.minimal-cards-style2 .cards table.dataview > tbody > tr {
box-shadow:
    0 4px 6px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px 1px rgba(0, 0, 0, 0.025);
transition: box-shadow 0.15s linear;
}

.minimal-cards-style2 .cards table.dataview > tbody > tr {
border: var(--cards-border-width) dashed var(--cards-background-modifier-border);
}`,
    },
    "minimal-cards-style3": {
      general: `.minimal-cards-style3 .cards table.dataview > tbody > tr {
box-shadow:
    0 4px 6px 0 rgba(0, 0, 0, 0.05),
    0 1px 3px 1px rgba(0, 0, 0, 0.025);
transition: box-shadow 0.15s linear;
}

.minimal-cards-style3 .cards table.dataview > tbody > tr {
border: var(--cards-border-width) dotted var(--cards-background-modifier-border);
}`,
    },
  },
};
