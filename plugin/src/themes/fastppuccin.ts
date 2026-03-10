import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "fastppuccin",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["noto-serif"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --anp-bold-color: 243, 139, 168;
  --anp-header-font: "Noto Serif";
  --anp-header-margin-value: 15px;
  --anp-highlight-color: 249, 226, 175;
  --anp-italic-color: 166, 227, 161;
  --anp-preview-width-max: 800px;
  --anp-preview-width-pct: 95%;
  --anp-rainbow-folder-bg-opacity: 1;
  --anp-rainbow-folder-border-opacity: 1;
  --anp-rainbow-folder-collapse-border-custom: #00000044;
  --anp-speech-bubble-opacity: 0.9;
  --anp-table-width-pct: 100%;
  --background-modifier-active: rgba(245, 224, 220, 0.1);
  --background-modifier-active-hover: rgba(245, 224, 220, 0.15);
  --background-modifier-border: rgb(49, 50, 68);
  --background-modifier-border-focus: rgb(86, 89, 112);
  --background-modifier-border-hover: rgb(67, 70, 90);
  --background-modifier-cover: rgba(24, 24, 37, 0.4);
  --background-modifier-error: rgb(243, 139, 168);
  --background-modifier-error-hover: rgba(243, 139, 168, 0.9);
  --background-modifier-error-rgb: 243, 139, 168;
  --background-modifier-form-field: rgba(17, 17, 27, 0.3);
  --background-modifier-form-field-hover: rgba(17, 17, 27, 0.3);
  --background-modifier-hover: rgba(198, 208, 245, 0.075);
  --background-modifier-message: rgba(17, 17, 27, 0.9);
  --background-modifier-success: rgb(166, 227, 161);
  --background-modifier-success-hover: rgba(166, 227, 161, 0.9);
  --background-modifier-success-rgb: 166, 227, 161;
  --background-primary: rgb(30, 30, 46);
  --background-primary-alt: rgb(24, 24, 37);
  --background-secondary: rgb(24, 24, 37);
  --background-secondary-alt: rgb(17, 17, 27);
  --bases-cards-background: rgb(30, 30, 46);
  --bases-cards-cover-background: rgb(24, 24, 37);
  --bases-cards-shadow: 0 0 0 1px rgb(49, 50, 68);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(67, 70, 90);
  --bases-embed-border-color: rgb(49, 50, 68);
  --bases-group-heading-property-color: rgb(142, 149, 179);
  --bases-table-border-color: rgb(49, 50, 68);
  --bases-table-cell-background-active: rgb(30, 30, 46);
  --bases-table-cell-background-disabled: rgb(24, 24, 37);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(86, 89, 112);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(245, 224, 220);
  --bases-table-group-background: rgb(24, 24, 37);
  --bases-table-header-background: rgb(30, 30, 46);
  --bases-table-header-background-hover: rgba(198, 208, 245, 0.075);
  --bases-table-header-color: rgb(142, 149, 179);
  --bases-table-summary-background: rgb(30, 30, 46);
  --bases-table-summary-background-hover: rgba(198, 208, 245, 0.075);
  --blockquote-background-color: rgba(17, 17, 27, 0.5);
  --blockquote-border-color: rgb(245, 224, 220);
  --blur-background: color-mix(in srgb, rgb(49, 50, 68) 65%, transparent) linear-gradient(rgb(49, 50, 68), color-mix(in srgb, rgb(49, 50, 68) 65%, transparent));
  --callout-blend-mode: none;
  --callout-bug: 243, 139, 168;
  --callout-content-padding: 8px;
  --callout-default: 135, 176, 249;
  --callout-error: 243, 139, 168;
  --callout-example: 180, 190, 254;
  --callout-fail: 243, 139, 168;
  --callout-important: 137, 220, 235;
  --callout-info: 135, 176, 249;
  --callout-padding: 0;
  --callout-question: 250, 179, 135;
  --callout-success: 166, 227, 161;
  --callout-summary: 137, 220, 235;
  --callout-tip: 137, 220, 235;
  --callout-title-padding: 8px;
  --callout-todo: 135, 176, 249;
  --callout-warning: 250, 179, 135;
  --canvas-background: rgb(30, 30, 46);
  --canvas-card-label-color: rgb(161, 168, 201);
  --canvas-color: 105, 109, 134;
  --canvas-color-1: 243, 139, 168;
  --canvas-color-2: 250, 179, 135;
  --canvas-color-3: 249, 226, 175;
  --canvas-color-4: 166, 227, 161;
  --canvas-color-5: 137, 220, 235;
  --canvas-color-6: 180, 190, 254;
  --canvas-dot-pattern: rgb(67, 70, 90);
  --card-background-color: rgb(17, 17, 27);
  --card-foreground-color: rgb(30, 30, 46);
  --caret-color: rgb(198, 208, 245);
  --checkbox-border-color: rgb(161, 168, 201);
  --checkbox-border-color-hover: rgb(142, 149, 179);
  --checkbox-color: rgb(245, 224, 220);
  --checkbox-color-hover: rgba(245, 224, 220, 0.9);
  --checkbox-marker-color: rgb(30, 30, 46);
  --checklist-done-color: rgb(142, 149, 179);
  --code-background: rgb(17, 17, 27);
  --code-border-color: rgb(49, 50, 68);
  --code-bracket-background: rgba(198, 208, 245, 0.075);
  --code-comment: rgb(161, 168, 201);
  --code-function: rgb(249, 226, 175);
  --code-important: rgb(250, 179, 135);
  --code-keyword: rgb(245, 194, 231);
  --code-normal: rgb(198, 208, 245);
  --code-operator: rgb(243, 139, 168);
  --code-property: rgb(137, 220, 235);
  --code-punctuation: rgb(142, 149, 179);
  --code-string: rgb(166, 227, 161);
  --code-tag: rgb(243, 139, 168);
  --code-value: rgb(180, 190, 254);
  --collapse-icon-color: rgb(161, 168, 201);
  --collapse-icon-color-collapsed: rgb(245, 224, 220);
  --color-accent: rgb(245, 224, 220);
  --color-accent-1: rgb(245, 224, 220);
  --color-accent-2: rgba(245, 224, 220, 0.9);
  --color-base-00: rgb(17, 17, 27);
  --color-base-10: rgb(24, 24, 37);
  --color-base-100: rgb(198, 208, 245);
  --color-base-20: rgb(30, 30, 46);
  --color-base-25: rgb(49, 50, 68);
  --color-base-30: rgb(67, 70, 90);
  --color-base-35: rgb(86, 89, 112);
  --color-base-40: rgb(105, 109, 134);
  --color-base-50: rgb(123, 129, 157);
  --color-base-60: rgb(142, 149, 179);
  --color-base-70: rgb(161, 168, 201);
  --color-blue: rgb(135, 176, 249);
  --color-blue-rgb: 135, 176, 249;
  --color-cyan: rgb(137, 220, 235);
  --color-cyan-rgb: 137, 220, 235;
  --color-green: rgb(166, 227, 161);
  --color-green-rgb: 166, 227, 161;
  --color-orange: rgb(250, 179, 135);
  --color-orange-rgb: 250, 179, 135;
  --color-pink: rgb(245, 194, 231);
  --color-pink-rgb: 245, 194, 231;
  --color-purple: rgb(180, 190, 254);
  --color-purple-rgb: 180, 190, 254;
  --color-red: rgb(243, 139, 168);
  --color-red-rgb: 243, 139, 168;
  --color-yellow: rgb(249, 226, 175);
  --color-yellow-rgb: 249, 226, 175;
  --ctp-accent: 245, 224, 220;
  --ctp-base: 30, 30, 46;
  --ctp-blue: 135, 176, 249;
  --ctp-crust: 17, 17, 27;
  --ctp-flamingo: 242, 205, 205;
  --ctp-green: 166, 227, 161;
  --ctp-lavender: 180, 190, 254;
  --ctp-mantle: 24, 24, 37;
  --ctp-maroon: 235, 160, 172;
  --ctp-mauve: 203, 166, 247;
  --ctp-overlay0: 105, 109, 134;
  --ctp-overlay1: 123, 129, 157;
  --ctp-overlay2: 142, 149, 179;
  --ctp-peach: 250, 179, 135;
  --ctp-pink: 245, 194, 231;
  --ctp-red: 243, 139, 168;
  --ctp-rosewater: 245, 224, 220;
  --ctp-sapphire: 116, 199, 236;
  --ctp-sky: 137, 220, 235;
  --ctp-subtext0: 161, 168, 201;
  --ctp-subtext1: 179, 188, 223;
  --ctp-surface0: 49, 50, 68;
  --ctp-surface1: 67, 70, 90;
  --ctp-surface2: 86, 89, 112;
  --ctp-teal: 148, 226, 213;
  --ctp-text: 198, 208, 245;
  --ctp-yellow: 249, 226, 175;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(49, 50, 68);
  --divider-color-hover: rgb(245, 224, 220);
  --drag-ghost-background: rgb(198, 208, 245);
  --drag-ghost-text-color: rgb(17, 17, 27);
  --dropdown-background: rgb(49, 50, 68);
  --dropdown-background-hover: rgb(67, 70, 90);
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(245, 224, 220);
  --file-header-background: rgb(30, 30, 46);
  --file-header-background-focused: rgb(30, 30, 46);
  --flair-background: rgb(49, 50, 68);
  --flair-color: rgb(198, 208, 245);
  --footnote-divider-color: rgb(49, 50, 68);
  --footnote-id-color: rgb(142, 149, 179);
  --footnote-id-color-no-occurrences: rgb(161, 168, 201);
  --footnote-input-background-active: rgba(198, 208, 245, 0.075);
  --graph-line: rgb(86, 89, 112);
  --graph-node: rgb(142, 149, 179);
  --graph-node-attachment: rgb(249, 226, 175);
  --graph-node-focused: rgb(245, 224, 220);
  --graph-node-tag: rgb(166, 227, 161);
  --graph-node-unresolved: rgb(161, 168, 201);
  --graph-text: rgb(198, 208, 245);
  --gray: var(--text-muted);
  --h1-color: rgb(243, 139, 168);
  --h2-color: rgb(250, 179, 135);
  --h3-color: rgb(166, 227, 161);
  --h4-color: rgb(148, 226, 213);
  --h5-color: rgb(180, 190, 254);
  --h6-color: rgb(203, 166, 247);
  --heading-formatting: rgb(245, 224, 220);
  --highlight: var(--text-highlight-bg);
  --highlight-mix-blend-mode: none;
  --hr-color: rgb(49, 50, 68);
  --icon-color: rgb(142, 149, 179);
  --icon-color-active: rgb(245, 224, 220);
  --icon-color-focused: rgb(245, 224, 220);
  --icon-color-hover: rgb(142, 149, 179);
  --indentation-guide-color: rgba(198, 208, 245, 0.12);
  --indentation-guide-color-active: rgba(198, 208, 245, 0.3);
  --inline-title-color: rgb(198, 208, 245);
  --input-date-separator: rgb(161, 168, 201);
  --input-placeholder-color: rgb(161, 168, 201);
  --interactive-accent: rgb(245, 224, 220);
  --interactive-accent-hover: rgba(245, 224, 220, 0.9);
  --interactive-accent-rgb: 245, 224, 220;
  --interactive-hover: rgb(67, 70, 90);
  --interactive-normal: rgb(49, 50, 68);
  --interactive-success: rgb(166, 227, 161);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(245, 224, 220);
  --link-color-hover: rgb(245, 224, 220);
  --link-external-color: rgb(245, 224, 220);
  --link-external-color-hover: rgb(245, 224, 220);
  --link-unresolved-color: rgb(245, 224, 220);
  --link-unresolved-decoration-color: rgba(245, 224, 220, 0.3);
  --list-marker-color: rgb(161, 168, 201);
  --list-marker-color-collapsed: rgb(245, 224, 220);
  --list-marker-color-hover: rgb(142, 149, 179);
  --max-width-image: 90%;
  --menu-background: rgb(24, 24, 37);
  --menu-border-color: rgb(67, 70, 90);
  --menu-shadow: 0px 1px 2px rgba(17, 17, 27, 0.121),
      0px 3.4px 6.7px rgba(17, 17, 27, 0.179),
      0px 15px 30px rgba(17, 17, 27, 0.3);
  --metadata-border-color: rgb(49, 50, 68);
  --metadata-divider-color: rgb(49, 50, 68);
  --metadata-input-background-active: rgba(198, 208, 245, 0.075);
  --metadata-input-text-color: rgb(198, 208, 245);
  --metadata-label-background-active: rgba(198, 208, 245, 0.075);
  --metadata-label-text-color: rgb(142, 149, 179);
  --metadata-label-text-color-hover: rgb(142, 149, 179);
  --metadata-property-background-active: rgba(198, 208, 245, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(86, 89, 112);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(67, 70, 90);
  --min-width-image: 50%;
  --modal-background: rgb(30, 30, 46);
  --modal-border-color: rgb(49, 50, 68);
  --mono-rgb-0: 17, 17, 27;
  --mono-rgb-100: 198, 208, 245;
  --nav-collapse-icon-color: rgb(161, 168, 201);
  --nav-collapse-icon-color-collapsed: rgb(161, 168, 201);
  --nav-heading-color: rgb(198, 208, 245);
  --nav-heading-color-collapsed: rgb(161, 168, 201);
  --nav-heading-color-collapsed-hover: rgb(142, 149, 179);
  --nav-heading-color-hover: rgb(198, 208, 245);
  --nav-indentation-guide-color: rgb(30, 30, 46);
  --nav-item-background-active: rgba(198, 208, 245, 0.075);
  --nav-item-background-hover: rgba(198, 208, 245, 0.075);
  --nav-item-background-selected: rgba(245, 224, 220, 0.2);
  --nav-item-color: rgb(142, 149, 179);
  --nav-item-color-active: rgb(198, 208, 245);
  --nav-item-color-highlighted: rgb(245, 224, 220);
  --nav-item-color-hover: rgb(198, 208, 245);
  --nav-item-color-selected: rgb(198, 208, 245);
  --nav-tag-color: rgb(161, 168, 201);
  --nav-tag-color-active: rgb(142, 149, 179);
  --nav-tag-color-hover: rgb(142, 149, 179);
  --pdf-background: rgb(30, 30, 46);
  --pdf-dark-opacity: 1;
  --pdf-page-background: rgb(30, 30, 46);
  --pdf-shadow: 0 0 0 1px rgb(49, 50, 68);
  --pdf-sidebar-background: rgb(30, 30, 46);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(49, 50, 68);
  --pill-border-color: rgb(49, 50, 68);
  --pill-border-color-hover: rgb(67, 70, 90);
  --pill-color: rgb(142, 149, 179);
  --pill-color-hover: rgb(198, 208, 245);
  --pill-color-remove: rgb(161, 168, 201);
  --pill-color-remove-hover: rgb(245, 224, 220);
  --prompt-background: rgb(30, 30, 46);
  --prompt-border-color: rgb(105, 109, 134);
  --raised-background: color-mix(in srgb, rgb(49, 50, 68) 65%, transparent) linear-gradient(rgb(49, 50, 68), color-mix(in srgb, rgb(49, 50, 68) 65%, transparent));
  --ribbon-background: rgb(24, 24, 37);
  --ribbon-background-collapsed: rgb(30, 30, 46);
  --scrollbar-active-thumb-bg: rgba(198, 208, 245, 0.2);
  --scrollbar-bg: rgba(198, 208, 245, 0.05);
  --scrollbar-thumb-bg: rgba(198, 208, 245, 0.1);
  --search-clear-button-color: rgb(142, 149, 179);
  --search-icon-color: rgb(142, 149, 179);
  --search-result-background: rgb(30, 30, 46);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(198, 208, 245);
  --setting-items-background: rgb(24, 24, 37);
  --setting-items-border-color: rgb(49, 50, 68);
  --shadow-l: 0px 1.8px 7.3px rgba(17, 17, 27, 0.071),
      0px 6.3px 24.7px rgba(17, 17, 27, 0.112),
      0px 30px 90px rgba(17, 17, 27, 0.2);
  --shadow-s: 0px 1px 2px rgba(17, 17, 27, 0.121),
      0px 3.4px 6.7px rgba(17, 17, 27, 0.179),
      0px 15px 30px rgba(17, 17, 27, 0.3);
  --slider-thumb-border-color: rgb(67, 70, 90);
  --slider-track-background: rgb(49, 50, 68);
  --status-bar-background: rgb(24, 24, 37);
  --status-bar-border-color: rgb(49, 50, 68);
  --status-bar-text-color: rgb(142, 149, 179);
  --suggestion-background: rgb(30, 30, 46);
  --swatch-shadow: inset 0 0 0 1px rgba(198, 208, 245, 0.15);
  --sync-avatar-color-1: rgb(243, 139, 168);
  --sync-avatar-color-2: rgb(250, 179, 135);
  --sync-avatar-color-3: rgb(249, 226, 175);
  --sync-avatar-color-4: rgb(166, 227, 161);
  --sync-avatar-color-5: rgb(137, 220, 235);
  --sync-avatar-color-6: rgb(135, 176, 249);
  --sync-avatar-color-7: rgb(180, 190, 254);
  --sync-avatar-color-8: rgb(245, 194, 231);
  --tab-background-active: rgb(30, 30, 46);
  --tab-container-background: rgb(24, 24, 37);
  --tab-divider-color: rgb(67, 70, 90);
  --tab-inactive-color: rgb(24, 24, 37);
  --tab-outline-color: rgb(49, 50, 68);
  --tab-stacked-pane-width: 700px;
  --tab-switcher-background: rgb(24, 24, 37);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(24, 24, 37), transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(198, 208, 245, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(245, 224, 220);
  --tab-text-color: rgb(161, 168, 201);
  --tab-text-color-active: rgb(142, 149, 179);
  --tab-text-color-focused: rgb(142, 149, 179);
  --tab-text-color-focused-active: rgb(142, 149, 179);
  --tab-text-color-focused-active-current: rgb(198, 208, 245);
  --tab-text-color-focused-highlighted: rgb(245, 224, 220);
  --table-add-button-border-color: rgb(49, 50, 68);
  --table-border-color: rgb(49, 50, 68);
  --table-drag-handle-background-active: rgb(245, 224, 220);
  --table-drag-handle-color: rgb(161, 168, 201);
  --table-drag-handle-color-active: rgb(30, 30, 46);
  --table-header-border-color: rgb(49, 50, 68);
  --table-header-color: rgb(198, 208, 245);
  --table-selection-blend-mode: none;
  --table-selection-border-color: rgb(245, 224, 220);
  --tag-background: rgba(245, 224, 220, 0.1);
  --tag-background-hover: rgba(245, 224, 220, 0.2);
  --tag-border-color: rgba(245, 224, 220, 0.15);
  --tag-border-color-hover: rgba(245, 224, 220, 0.15);
  --tag-color: rgb(245, 224, 220);
  --tag-color-hover: rgb(245, 224, 220);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(245, 224, 220);
  --text-accent-hover: rgb(245, 224, 220);
  --text-error: rgb(243, 139, 168);
  --text-error-hover: rgba(243, 139, 168, 0.8);
  --text-faint: rgb(161, 168, 201);
  --text-highlight-bg: rgba(249, 226, 175, 0.2);
  --text-highlight-bg-active: rgba(249, 226, 175, 0.4);
  --text-muted: rgb(142, 149, 179);
  --text-muted-rgb: 142, 149, 179;
  --text-normal: rgb(198, 208, 245);
  --text-on-accent: rgb(30, 30, 46);
  --text-selection: rgba(245, 224, 220, 0.25);
  --text-success: rgb(166, 227, 161);
  --text-warning: rgb(250, 179, 135);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(24, 24, 37);
  --titlebar-background-focused: rgb(17, 17, 27);
  --titlebar-border-color: rgb(49, 50, 68);
  --titlebar-text-color: rgb(142, 149, 179);
  --titlebar-text-color-focused: rgb(245, 224, 220);
  --vault-profile-color: rgb(198, 208, 245);
  --vault-profile-color-hover: rgb(198, 208, 245);
  --width-image-gallery: 200px;
  --workspace-background-translucent: rgba(17, 17, 27, 0.6);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 24, 37);
  color: rgb(198, 208, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(30, 30, 46);
  color: rgb(198, 208, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 24, 37);
  color: rgb(198, 208, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(49, 50, 68);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 24, 37);
  border-left-color: rgb(49, 50, 68);
  color: rgb(198, 208, 245);
}

body div#quartz-root {
  background-color: rgb(30, 30, 46);
  color: rgb(198, 208, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body .page article p > em, em {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body .page article p > i, i {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body .page article p > strong, strong {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body .text-highlight {
  background-color: rgba(249, 226, 175, 0.2);
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body del {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration: line-through rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body p {
  color: rgb(142, 149, 179);
  outline: rgb(142, 149, 179) none 0px;
  text-decoration: rgb(142, 149, 179);
  text-decoration-color: rgb(142, 149, 179);
}`,
    links: `body a.external, footer a {
  color: rgb(245, 224, 220);
  outline: rgb(245, 224, 220) none 0px;
  text-decoration: underline rgb(245, 224, 220);
  text-decoration-color: rgb(245, 224, 220);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(245, 224, 220);
  outline: rgb(245, 224, 220) none 0px;
  text-decoration: underline rgb(245, 224, 220);
  text-decoration-color: rgb(245, 224, 220);
}

body a.internal.broken {
  color: rgb(245, 224, 220);
  outline: rgb(245, 224, 220) none 0px;
  text-decoration: underline rgba(245, 224, 220, 0.3);
  text-decoration-color: rgba(245, 224, 220, 0.3);
}`,
    lists: `body dd {
  color: rgb(198, 208, 245);
}

body dt {
  color: rgb(198, 208, 245);
}

body ol > li {
  color: rgb(198, 208, 245);
}

body ol.overflow {
  background-color: rgb(30, 30, 46);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body ul > li {
  color: rgb(198, 208, 245);
}

body ul.overflow {
  background-color: rgb(30, 30, 46);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(161, 168, 201);
  text-decoration: rgb(161, 168, 201);
}

body blockquote {
  background-color: rgba(17, 17, 27, 0.5);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body table {
  color: rgb(198, 208, 245);
}

body td {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: rgb(198, 208, 245);
}

body th {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: rgb(198, 208, 245);
}`,
    code: `body code {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: rgb(198, 208, 245);
}

body pre > code > [data-line] {
  border-left-color: rgb(249, 226, 175);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(249, 226, 175);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(249, 226, 175);
  border-left-color: rgb(249, 226, 175);
  border-right-color: rgb(249, 226, 175);
  border-top-color: rgb(249, 226, 175);
}

body pre > code, pre:has(> code) {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
}

body pre:has(> code) {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
}`,
    images: `body audio {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body figcaption {
  color: rgb(198, 208, 245);
}

body figure {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body img {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body video {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    embeds: `body .file-embed {
  background-color: rgb(24, 24, 37);
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
}

body .footnotes {
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

body .transclude {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(245, 224, 220);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body .transclude-inner {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(245, 224, 220);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(142, 149, 179);
  text-decoration: line-through rgb(142, 149, 179);
  text-decoration-color: rgb(142, 149, 179);
}

body input[type=checkbox] {
  border-bottom-color: rgb(161, 168, 201);
  border-left-color: rgb(161, 168, 201);
  border-right-color: rgb(161, 168, 201);
  border-top-color: rgb(161, 168, 201);
}

body li.task-list-item[data-task='!'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='*'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='-'] {
  color: rgb(142, 149, 179);
  text-decoration: line-through rgb(142, 149, 179);
  text-decoration-color: rgb(142, 149, 179);
}

body li.task-list-item[data-task='/'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='>'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='?'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='I'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='S'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='b'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='c'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='d'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='f'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='i'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='k'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='l'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='p'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='u'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body li.task-list-item[data-task='w'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 137, 220, 235;
  background-color: rgba(137, 220, 235, 0.1);
  border-bottom-color: rgba(137, 220, 235, 0.25);
  border-left-color: rgba(137, 220, 235, 0.25);
  border-right-color: rgba(137, 220, 235, 0.25);
  border-top-color: rgba(137, 220, 235, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 243, 139, 168;
  background-color: rgba(243, 139, 168, 0.1);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.25);
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 243, 139, 168;
  background-color: rgba(243, 139, 168, 0.1);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.25);
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 180, 190, 254;
  background-color: rgba(180, 190, 254, 0.1);
  border-bottom-color: rgba(180, 190, 254, 0.25);
  border-left-color: rgba(180, 190, 254, 0.25);
  border-right-color: rgba(180, 190, 254, 0.25);
  border-top-color: rgba(180, 190, 254, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 243, 139, 168;
  background-color: rgba(243, 139, 168, 0.1);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.25);
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 135, 176, 249;
  background-color: rgba(135, 176, 249, 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 135, 176, 249;
  background-color: rgba(135, 176, 249, 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 250, 179, 135;
  background-color: rgba(250, 179, 135, 0.1);
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-left-color: rgba(250, 179, 135, 0.25);
  border-right-color: rgba(250, 179, 135, 0.25);
  border-top-color: rgba(250, 179, 135, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 166, 227, 161;
  background-color: rgba(166, 227, 161, 0.1);
  border-bottom-color: rgba(166, 227, 161, 0.25);
  border-left-color: rgba(166, 227, 161, 0.25);
  border-right-color: rgba(166, 227, 161, 0.25);
  border-top-color: rgba(166, 227, 161, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 137, 220, 235;
  background-color: rgba(137, 220, 235, 0.1);
  border-bottom-color: rgba(137, 220, 235, 0.25);
  border-left-color: rgba(137, 220, 235, 0.25);
  border-right-color: rgba(137, 220, 235, 0.25);
  border-top-color: rgba(137, 220, 235, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 135, 176, 249;
  background-color: rgba(135, 176, 249, 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 250, 179, 135;
  background-color: rgba(250, 179, 135, 0.1);
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-left-color: rgba(250, 179, 135, 0.25);
  border-right-color: rgba(250, 179, 135, 0.25);
  border-top-color: rgba(250, 179, 135, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgba(17, 17, 27, 0.3);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: rgb(198, 208, 245);
}

body .search > .search-container > .search-space {
  background-color: rgb(30, 30, 46);
  border-bottom-color: rgb(105, 109, 134);
  border-left-color: rgb(105, 109, 134);
  border-right-color: rgb(105, 109, 134);
  border-top-color: rgb(105, 109, 134);
  box-shadow: rgba(17, 17, 27, 0.07) 0px 1.8px 7.3px 0px, rgba(17, 17, 27, 0.114) 0px 6.3px 24.7px 0px, rgba(17, 17, 27, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 208, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(198, 208, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(198, 208, 245, 0.075);
  color: rgb(198, 208, 245);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(105, 109, 134);
  border-left-color: rgb(105, 109, 134);
  border-right-color: rgb(105, 109, 134);
  border-top-color: rgb(105, 109, 134);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 37);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(198, 208, 245, 0.075);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(198, 208, 245, 0.075);
  color: rgb(198, 208, 245);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(245, 224, 220, 0.1);
  border-bottom-color: rgba(245, 224, 220, 0.15);
  border-left-color: rgba(245, 224, 220, 0.15);
  border-right-color: rgba(245, 224, 220, 0.15);
  border-top-color: rgba(245, 224, 220, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(245, 224, 220);
}

body h1 {
  color: rgb(243, 139, 168);
}

body h2 {
  color: rgb(250, 179, 135);
}

body h2.page-title, h2.page-title a {
  color: rgb(198, 208, 245);
}

body h3 {
  color: rgb(166, 227, 161);
}

body h4 {
  color: rgb(148, 226, 213);
}

body h5 {
  color: rgb(180, 190, 254);
}

body h6 {
  color: rgb(203, 166, 247);
}

body hr {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
}`,
    scrollbars: `body .callout {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}

body ::-webkit-scrollbar-corner {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}

body ::-webkit-scrollbar-track {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(142, 149, 179);
  text-decoration: rgb(142, 149, 179);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(142, 149, 179);
  text-decoration: rgb(142, 149, 179);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(142, 149, 179);
  text-decoration: rgb(142, 149, 179);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(198, 208, 245, 0.075);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
}`,
    footer: `body footer {
  background-color: rgb(24, 24, 37);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: rgb(142, 149, 179);
}

body footer ul li a {
  color: rgb(142, 149, 179);
  text-decoration: rgb(142, 149, 179);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(198, 208, 245);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(142, 149, 179);
  text-decoration: rgb(142, 149, 179);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(142, 149, 179);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body li.section-li > .section .meta {
  color: rgb(142, 149, 179);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(142, 149, 179);
  text-decoration: rgb(142, 149, 179);
}

body ul.section-ul {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
}

body .darkmode svg {
  color: rgb(142, 149, 179);
  stroke: rgb(142, 149, 179);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
}

body .breadcrumb-element p {
  color: rgb(161, 168, 201);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

body .metadata {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: rgb(142, 149, 179);
}

body .metadata-properties {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
}

body .navigation-progress {
  background-color: rgb(24, 24, 37);
}

body .page-header h2.page-title {
  color: rgb(198, 208, 245);
}

body abbr {
  color: rgb(198, 208, 245);
  text-decoration: underline dotted rgb(198, 208, 245);
}

body details {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body input[type=text] {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
}

body kbd {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

body progress {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

body sub {
  color: rgb(198, 208, 245);
}

body summary {
  color: rgb(198, 208, 245);
}

body sup {
  color: rgb(198, 208, 245);
}`,
  },
  light: {
    base: `:root:root {
  --anp-bold-color: 210, 15, 57;
  --anp-header-font: "Noto Serif";
  --anp-header-margin-value: 15px;
  --anp-highlight-color: 228, 147, 32;
  --anp-italic-color: 64, 160, 43;
  --anp-preview-width-max: 800px;
  --anp-preview-width-pct: 95%;
  --anp-rainbow-folder-bg-opacity: 1;
  --anp-rainbow-folder-border-opacity: 1;
  --anp-rainbow-folder-collapse-border-custom: #00000044;
  --anp-speech-bubble-opacity: 0.5;
  --anp-table-width-pct: 100%;
  --background-modifier-active: rgba(222, 149, 132, 0.1);
  --background-modifier-active-hover: rgba(222, 149, 132, 0.15);
  --background-modifier-border: rgb(188, 192, 204);
  --background-modifier-border-focus: rgb(156, 160, 176);
  --background-modifier-border-hover: rgb(172, 176, 190);
  --background-modifier-cover: #00000022;
  --background-modifier-error: rgb(210, 15, 57);
  --background-modifier-error-hover: rgba(210, 15, 57, 0.9);
  --background-modifier-error-rgb: 210, 15, 57;
  --background-modifier-form-field: rgba(220, 224, 232, 0.3);
  --background-modifier-form-field-hover: rgba(220, 224, 232, 0.3);
  --background-modifier-hover: rgba(76, 79, 105, 0.075);
  --background-modifier-message: rgba(220, 224, 232, 0.9);
  --background-modifier-success: rgb(64, 160, 43);
  --background-modifier-success-hover: rgba(64, 160, 43, 0.9);
  --background-modifier-success-rgb: 64, 160, 43;
  --background-primary: rgb(239, 241, 245);
  --background-primary-alt: rgb(230, 233, 239);
  --background-secondary: rgb(230, 233, 239);
  --background-secondary-alt: rgb(220, 224, 232);
  --bases-cards-background: rgb(239, 241, 245);
  --bases-cards-cover-background: rgb(230, 233, 239);
  --bases-cards-shadow: 0 0 0 1px rgb(188, 192, 204);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(172, 176, 190);
  --bases-embed-border-color: rgb(188, 192, 204);
  --bases-group-heading-property-color: rgb(124, 127, 147);
  --bases-table-border-color: rgb(188, 192, 204);
  --bases-table-cell-background-active: rgb(239, 241, 245);
  --bases-table-cell-background-disabled: rgb(230, 233, 239);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(156, 160, 176);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(222, 149, 132);
  --bases-table-group-background: rgb(230, 233, 239);
  --bases-table-header-background: rgb(239, 241, 245);
  --bases-table-header-background-hover: rgba(76, 79, 105, 0.075);
  --bases-table-header-color: rgb(124, 127, 147);
  --bases-table-summary-background: rgb(239, 241, 245);
  --bases-table-summary-background-hover: rgba(76, 79, 105, 0.075);
  --blockquote-background-color: rgba(220, 224, 232, 0.5);
  --blockquote-border-color: rgb(222, 149, 132);
  --blur-background: color-mix(in srgb, rgb(239, 241, 245) 65%, transparent) linear-gradient(rgb(239, 241, 245), color-mix(in srgb, rgb(239, 241, 245) 65%, transparent));
  --callout-blend-mode: none;
  --callout-bug: 210, 15, 57;
  --callout-content-padding: 8px;
  --callout-default: 42, 110, 245;
  --callout-error: 210, 15, 57;
  --callout-example: 114, 135, 253;
  --callout-fail: 210, 15, 57;
  --callout-important: 4, 165, 229;
  --callout-info: 42, 110, 245;
  --callout-padding: 0;
  --callout-question: 254, 100, 11;
  --callout-success: 64, 160, 43;
  --callout-summary: 4, 165, 229;
  --callout-tip: 4, 165, 229;
  --callout-title-padding: 8px;
  --callout-todo: 42, 110, 245;
  --callout-warning: 254, 100, 11;
  --canvas-background: rgb(239, 241, 245);
  --canvas-card-label-color: rgb(108, 111, 133);
  --canvas-color: 156, 160, 176;
  --canvas-color-1: 210, 15, 57;
  --canvas-color-2: 254, 100, 11;
  --canvas-color-3: 228, 147, 32;
  --canvas-color-4: 64, 160, 43;
  --canvas-color-5: 4, 165, 229;
  --canvas-color-6: 114, 135, 253;
  --canvas-dot-pattern: rgb(188, 192, 204);
  --card-background-color: rgb(220, 224, 232);
  --card-foreground-color: rgb(239, 241, 245);
  --caret-color: rgb(76, 79, 105);
  --checkbox-border-color: rgb(108, 111, 133);
  --checkbox-border-color-hover: rgb(124, 127, 147);
  --checkbox-color: rgb(222, 149, 132);
  --checkbox-color-hover: rgba(222, 149, 132, 0.9);
  --checkbox-marker-color: rgb(239, 241, 245);
  --checklist-done-color: rgb(124, 127, 147);
  --code-background: rgb(220, 224, 232);
  --code-border-color: rgb(188, 192, 204);
  --code-bracket-background: rgba(76, 79, 105, 0.075);
  --code-comment: rgb(108, 111, 133);
  --code-function: rgb(228, 147, 32);
  --code-important: rgb(254, 100, 11);
  --code-keyword: rgb(236, 131, 208);
  --code-normal: rgb(76, 79, 105);
  --code-operator: rgb(210, 15, 57);
  --code-property: rgb(4, 165, 229);
  --code-punctuation: rgb(124, 127, 147);
  --code-string: rgb(64, 160, 43);
  --code-tag: rgb(210, 15, 57);
  --code-value: rgb(114, 135, 253);
  --collapse-icon-color: rgb(108, 111, 133);
  --collapse-icon-color-collapsed: rgb(222, 149, 132);
  --color-accent: rgb(222, 149, 132);
  --color-accent-1: rgb(222, 149, 132);
  --color-accent-2: rgba(222, 149, 132, 0.9);
  --color-base-00: rgb(220, 224, 232);
  --color-base-10: rgb(230, 233, 239);
  --color-base-100: rgb(76, 79, 105);
  --color-base-20: rgb(239, 241, 245);
  --color-base-25: rgb(204, 208, 218);
  --color-base-30: rgb(188, 192, 204);
  --color-base-35: rgb(172, 176, 190);
  --color-base-40: rgb(156, 160, 176);
  --color-base-50: rgb(140, 143, 161);
  --color-base-60: rgb(124, 127, 147);
  --color-base-70: rgb(108, 111, 133);
  --color-blue: rgb(42, 110, 245);
  --color-blue-rgb: 42, 110, 245;
  --color-cyan: rgb(4, 165, 229);
  --color-cyan-rgb: 4, 165, 229;
  --color-green: rgb(64, 160, 43);
  --color-green-rgb: 64, 160, 43;
  --color-orange: rgb(254, 100, 11);
  --color-orange-rgb: 254, 100, 11;
  --color-pink: rgb(236, 131, 208);
  --color-pink-rgb: 236, 131, 208;
  --color-purple: rgb(114, 135, 253);
  --color-purple-rgb: 114, 135, 253;
  --color-red: rgb(210, 15, 57);
  --color-red-rgb: 210, 15, 57;
  --color-yellow: rgb(228, 147, 32);
  --color-yellow-rgb: 228, 147, 32;
  --ctp-accent: 222, 149, 132;
  --ctp-base: 239, 241, 245;
  --ctp-blue: 42, 110, 245;
  --ctp-crust: 220, 224, 232;
  --ctp-flamingo: 221, 120, 120;
  --ctp-green: 64, 160, 43;
  --ctp-lavender: 114, 135, 253;
  --ctp-mantle: 230, 233, 239;
  --ctp-maroon: 230, 69, 83;
  --ctp-mauve: 136, 57, 239;
  --ctp-overlay0: 156, 160, 176;
  --ctp-overlay1: 140, 143, 161;
  --ctp-overlay2: 124, 127, 147;
  --ctp-peach: 254, 100, 11;
  --ctp-pink: 236, 131, 208;
  --ctp-red: 210, 15, 57;
  --ctp-rosewater: 222, 149, 132;
  --ctp-sapphire: 32, 159, 181;
  --ctp-sky: 4, 165, 229;
  --ctp-subtext0: 108, 111, 133;
  --ctp-subtext1: 92, 95, 119;
  --ctp-surface0: 204, 208, 218;
  --ctp-surface1: 188, 192, 204;
  --ctp-surface2: 172, 176, 190;
  --ctp-teal: 23, 146, 153;
  --ctp-text: 76, 79, 105;
  --ctp-yellow: 228, 147, 32;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(188, 192, 204);
  --divider-color-hover: rgb(222, 149, 132);
  --drag-ghost-background: rgb(76, 79, 105);
  --drag-ghost-text-color: rgb(220, 224, 232);
  --dropdown-background: rgb(204, 208, 218);
  --dropdown-background-hover: rgb(188, 192, 204);
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid rgb(222, 149, 132);
  --file-header-background: rgb(239, 241, 245);
  --file-header-background-focused: rgb(239, 241, 245);
  --flair-background: rgb(204, 208, 218);
  --flair-color: rgb(76, 79, 105);
  --footnote-divider-color: rgb(188, 192, 204);
  --footnote-id-color: rgb(124, 127, 147);
  --footnote-id-color-no-occurrences: rgb(108, 111, 133);
  --footnote-input-background-active: rgba(76, 79, 105, 0.075);
  --graph-line: rgb(172, 176, 190);
  --graph-node: rgb(124, 127, 147);
  --graph-node-attachment: rgb(228, 147, 32);
  --graph-node-focused: rgb(222, 149, 132);
  --graph-node-tag: rgb(64, 160, 43);
  --graph-node-unresolved: rgb(108, 111, 133);
  --graph-text: rgb(76, 79, 105);
  --gray: var(--text-muted);
  --h1-color: rgb(210, 15, 57);
  --h2-color: rgb(254, 100, 11);
  --h3-color: rgb(64, 160, 43);
  --h4-color: rgb(23, 146, 153);
  --h5-color: rgb(114, 135, 253);
  --h6-color: rgb(136, 57, 239);
  --heading-formatting: rgb(222, 149, 132);
  --highlight: var(--text-highlight-bg);
  --highlight-mix-blend-mode: none;
  --hr-color: rgb(188, 192, 204);
  --icon-color: rgb(124, 127, 147);
  --icon-color-active: rgb(222, 149, 132);
  --icon-color-focused: rgb(222, 149, 132);
  --icon-color-hover: rgb(124, 127, 147);
  --indentation-guide-color: rgba(76, 79, 105, 0.12);
  --indentation-guide-color-active: rgba(76, 79, 105, 0.3);
  --inline-title-color: rgb(76, 79, 105);
  --input-date-separator: rgb(108, 111, 133);
  --input-placeholder-color: rgb(108, 111, 133);
  --interactive-accent: rgb(222, 149, 132);
  --interactive-accent-hover: rgba(222, 149, 132, 0.9);
  --interactive-accent-rgb: 222, 149, 132;
  --interactive-hover: rgb(188, 192, 204);
  --interactive-normal: rgb(204, 208, 218);
  --interactive-success: rgb(64, 160, 43);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(222, 149, 132);
  --link-color-hover: rgb(222, 149, 132);
  --link-external-color: rgb(222, 149, 132);
  --link-external-color-hover: rgb(222, 149, 132);
  --link-unresolved-color: rgb(222, 149, 132);
  --link-unresolved-decoration-color: rgba(222, 149, 132, 0.3);
  --list-marker-color: rgb(108, 111, 133);
  --list-marker-color-collapsed: rgb(222, 149, 132);
  --list-marker-color-hover: rgb(124, 127, 147);
  --max-width-image: 90%;
  --menu-background: rgb(230, 233, 239);
  --menu-border-color: rgb(172, 176, 190);
  --menu-shadow: 0px 1px 2px rgba(220, 224, 232, 0.121),
      0px 3.4px 6.7px rgba(220, 224, 232, 0.179),
      0px 15px 30px rgba(220, 224, 232, 0.3);
  --metadata-border-color: rgb(188, 192, 204);
  --metadata-divider-color: rgb(188, 192, 204);
  --metadata-input-background-active: rgba(76, 79, 105, 0.075);
  --metadata-input-text-color: rgb(76, 79, 105);
  --metadata-label-background-active: rgba(76, 79, 105, 0.075);
  --metadata-label-text-color: rgb(124, 127, 147);
  --metadata-label-text-color-hover: rgb(124, 127, 147);
  --metadata-property-background-active: rgba(76, 79, 105, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(156, 160, 176);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(172, 176, 190);
  --min-width-image: 50%;
  --modal-background: rgb(239, 241, 245);
  --modal-border-color: rgb(204, 208, 218);
  --mono-rgb-0: 220, 224, 232;
  --mono-rgb-100: 76, 79, 105;
  --nav-collapse-icon-color: rgb(108, 111, 133);
  --nav-collapse-icon-color-collapsed: rgb(108, 111, 133);
  --nav-heading-color: rgb(76, 79, 105);
  --nav-heading-color-collapsed: rgb(108, 111, 133);
  --nav-heading-color-collapsed-hover: rgb(124, 127, 147);
  --nav-heading-color-hover: rgb(76, 79, 105);
  --nav-indentation-guide-color: rgb(239, 241, 245);
  --nav-item-background-active: rgba(76, 79, 105, 0.075);
  --nav-item-background-hover: rgba(76, 79, 105, 0.075);
  --nav-item-background-selected: rgba(222, 149, 132, 0.2);
  --nav-item-color: rgb(124, 127, 147);
  --nav-item-color-active: rgb(76, 79, 105);
  --nav-item-color-highlighted: rgb(222, 149, 132);
  --nav-item-color-hover: rgb(76, 79, 105);
  --nav-item-color-selected: rgb(76, 79, 105);
  --nav-tag-color: rgb(108, 111, 133);
  --nav-tag-color-active: rgb(124, 127, 147);
  --nav-tag-color-hover: rgb(124, 127, 147);
  --pdf-background: rgb(239, 241, 245);
  --pdf-dark-opacity: 1;
  --pdf-page-background: rgb(239, 241, 245);
  --pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 8px transparent;
  --pdf-sidebar-background: rgb(239, 241, 245);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 8px transparent;
  --pill-border-color: rgb(188, 192, 204);
  --pill-border-color-hover: rgb(172, 176, 190);
  --pill-color: rgb(124, 127, 147);
  --pill-color-hover: rgb(76, 79, 105);
  --pill-color-remove: rgb(108, 111, 133);
  --pill-color-remove-hover: rgb(222, 149, 132);
  --prompt-background: rgb(239, 241, 245);
  --prompt-border-color: rgb(156, 160, 176);
  --raised-background: color-mix(in srgb, rgb(239, 241, 245) 65%, transparent) linear-gradient(rgb(239, 241, 245), color-mix(in srgb, rgb(239, 241, 245) 65%, transparent));
  --ribbon-background: rgb(230, 233, 239);
  --ribbon-background-collapsed: rgb(239, 241, 245);
  --scrollbar-active-thumb-bg: rgba(76, 79, 105, 0.2);
  --scrollbar-bg: rgba(76, 79, 105, 0.05);
  --scrollbar-thumb-bg: rgba(76, 79, 105, 0.1);
  --search-clear-button-color: rgb(124, 127, 147);
  --search-icon-color: rgb(124, 127, 147);
  --search-result-background: rgb(239, 241, 245);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(76, 79, 105);
  --setting-items-background: rgb(230, 233, 239);
  --setting-items-border-color: rgb(188, 192, 204);
  --shadow-l: 0px 1.8px 7.3px rgba(220, 224, 232, 0.071),
      0px 6.3px 24.7px rgba(220, 224, 232, 0.112),
      0px 30px 90px rgba(220, 224, 232, 0.2);
  --shadow-s: 0px 1px 2px rgba(220, 224, 232, 0.121),
      0px 3.4px 6.7px rgba(220, 224, 232, 0.179),
      0px 15px 30px rgba(220, 224, 232, 0.3);
  --slider-thumb-border-color: rgb(172, 176, 190);
  --slider-track-background: rgb(188, 192, 204);
  --status-bar-background: rgb(230, 233, 239);
  --status-bar-border-color: rgb(188, 192, 204);
  --status-bar-text-color: rgb(124, 127, 147);
  --suggestion-background: rgb(239, 241, 245);
  --swatch-shadow: inset 0 0 0 1px rgba(76, 79, 105, 0.15);
  --sync-avatar-color-1: rgb(210, 15, 57);
  --sync-avatar-color-2: rgb(254, 100, 11);
  --sync-avatar-color-3: rgb(228, 147, 32);
  --sync-avatar-color-4: rgb(64, 160, 43);
  --sync-avatar-color-5: rgb(4, 165, 229);
  --sync-avatar-color-6: rgb(42, 110, 245);
  --sync-avatar-color-7: rgb(114, 135, 253);
  --sync-avatar-color-8: rgb(236, 131, 208);
  --tab-background-active: rgb(239, 241, 245);
  --tab-container-background: rgb(230, 233, 239);
  --tab-divider-color: rgb(172, 176, 190);
  --tab-inactive-color: rgb(230, 233, 239);
  --tab-outline-color: rgb(188, 192, 204);
  --tab-stacked-pane-width: 700px;
  --tab-switcher-background: rgb(230, 233, 239);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(230, 233, 239), transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(76, 79, 105, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(222, 149, 132);
  --tab-text-color: rgb(108, 111, 133);
  --tab-text-color-active: rgb(124, 127, 147);
  --tab-text-color-focused: rgb(124, 127, 147);
  --tab-text-color-focused-active: rgb(124, 127, 147);
  --tab-text-color-focused-active-current: rgb(76, 79, 105);
  --tab-text-color-focused-highlighted: rgb(222, 149, 132);
  --table-add-button-border-color: rgb(188, 192, 204);
  --table-border-color: rgb(188, 192, 204);
  --table-drag-handle-background-active: rgb(222, 149, 132);
  --table-drag-handle-color: rgb(108, 111, 133);
  --table-drag-handle-color-active: rgb(239, 241, 245);
  --table-header-border-color: rgb(188, 192, 204);
  --table-header-color: rgb(76, 79, 105);
  --table-selection-blend-mode: none;
  --table-selection-border-color: rgb(222, 149, 132);
  --tag-background: rgba(222, 149, 132, 0.1);
  --tag-background-hover: rgba(222, 149, 132, 0.2);
  --tag-border-color: rgba(222, 149, 132, 0.15);
  --tag-border-color-hover: rgba(222, 149, 132, 0.15);
  --tag-color: rgb(222, 149, 132);
  --tag-color-hover: rgb(222, 149, 132);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(222, 149, 132);
  --text-accent-hover: rgb(222, 149, 132);
  --text-error: rgb(210, 15, 57);
  --text-error-hover: rgba(210, 15, 57, 0.8);
  --text-faint: rgb(108, 111, 133);
  --text-highlight-bg: rgba(228, 147, 32, 0.2);
  --text-highlight-bg-active: rgba(228, 147, 32, 0.4);
  --text-muted: rgb(124, 127, 147);
  --text-muted-rgb: 124, 127, 147;
  --text-normal: rgb(76, 79, 105);
  --text-on-accent: rgb(239, 241, 245);
  --text-selection: rgba(222, 149, 132, 0.25);
  --text-success: rgb(64, 160, 43);
  --text-warning: rgb(254, 100, 11);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(230, 233, 239);
  --titlebar-background-focused: rgb(220, 224, 232);
  --titlebar-border-color: rgb(188, 192, 204);
  --titlebar-text-color: rgb(124, 127, 147);
  --titlebar-text-color-focused: rgb(222, 149, 132);
  --vault-profile-color: rgb(76, 79, 105);
  --vault-profile-color-hover: rgb(76, 79, 105);
  --width-image-gallery: 200px;
  --workspace-background-translucent: rgba(220, 224, 232, 0.6);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(230, 233, 239);
  color: rgb(76, 79, 105);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(239, 241, 245);
  color: rgb(76, 79, 105);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 233, 239);
  color: rgb(76, 79, 105);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(188, 192, 204);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(230, 233, 239);
  border-left-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

body div#quartz-root {
  background-color: rgb(239, 241, 245);
  color: rgb(76, 79, 105);
}`,
    typography: `body .page article p > b, b {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body .page article p > em, em {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body .page article p > i, i {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body .page article p > strong, strong {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body .text-highlight {
  background-color: rgba(228, 147, 32, 0.2);
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body del {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: line-through rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body p {
  color: rgb(124, 127, 147);
  outline: rgb(124, 127, 147) none 0px;
  text-decoration: rgb(124, 127, 147);
  text-decoration-color: rgb(124, 127, 147);
}`,
    links: `body a.external, footer a {
  color: rgb(222, 149, 132);
  outline: rgb(222, 149, 132) none 0px;
  text-decoration: underline rgb(222, 149, 132);
  text-decoration-color: rgb(222, 149, 132);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(222, 149, 132);
  outline: rgb(222, 149, 132) none 0px;
  text-decoration: underline rgb(222, 149, 132);
  text-decoration-color: rgb(222, 149, 132);
}

body a.internal.broken {
  color: rgb(222, 149, 132);
  outline: rgb(222, 149, 132) none 0px;
  text-decoration: underline rgba(222, 149, 132, 0.3);
  text-decoration-color: rgba(222, 149, 132, 0.3);
}`,
    lists: `body dd {
  color: rgb(76, 79, 105);
}

body dt {
  color: rgb(76, 79, 105);
}

body ol > li {
  color: rgb(76, 79, 105);
}

body ol.overflow {
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body ul > li {
  color: rgb(76, 79, 105);
}

body ul.overflow {
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(108, 111, 133);
  text-decoration: rgb(108, 111, 133);
}

body blockquote {
  background-color: rgba(220, 224, 232, 0.5);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body table {
  color: rgb(76, 79, 105);
}

body td {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

body th {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}`,
    code: `body code {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

body pre > code > [data-line] {
  border-left-color: rgb(228, 147, 32);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(228, 147, 32);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(228, 147, 32);
  border-left-color: rgb(228, 147, 32);
  border-right-color: rgb(228, 147, 32);
  border-top-color: rgb(228, 147, 32);
}

body pre > code, pre:has(> code) {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}

body pre:has(> code) {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}`,
    images: `body audio {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body figcaption {
  color: rgb(76, 79, 105);
}

body figure {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body img {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body video {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    embeds: `body .file-embed {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
}

body .footnotes {
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body .transclude {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(222, 149, 132);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body .transclude-inner {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(222, 149, 132);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(124, 127, 147);
  text-decoration: line-through rgb(124, 127, 147);
  text-decoration-color: rgb(124, 127, 147);
}

body input[type=checkbox] {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
}

body li.task-list-item[data-task='!'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='*'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='-'] {
  color: rgb(124, 127, 147);
  text-decoration: line-through rgb(124, 127, 147);
  text-decoration-color: rgb(124, 127, 147);
}

body li.task-list-item[data-task='/'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='>'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='?'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='I'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='S'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='b'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='c'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='d'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='f'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='i'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='k'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='l'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='p'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='u'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body li.task-list-item[data-task='w'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 4, 165, 229;
  background-color: rgba(4, 165, 229, 0.1);
  border-bottom-color: rgba(4, 165, 229, 0.25);
  border-left-color: rgba(4, 165, 229, 0.25);
  border-right-color: rgba(4, 165, 229, 0.25);
  border-top-color: rgba(4, 165, 229, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 210, 15, 57;
  background-color: rgba(210, 15, 57, 0.1);
  border-bottom-color: rgba(210, 15, 57, 0.25);
  border-left-color: rgba(210, 15, 57, 0.25);
  border-right-color: rgba(210, 15, 57, 0.25);
  border-top-color: rgba(210, 15, 57, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 210, 15, 57;
  background-color: rgba(210, 15, 57, 0.1);
  border-bottom-color: rgba(210, 15, 57, 0.25);
  border-left-color: rgba(210, 15, 57, 0.25);
  border-right-color: rgba(210, 15, 57, 0.25);
  border-top-color: rgba(210, 15, 57, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 114, 135, 253;
  background-color: rgba(114, 135, 253, 0.1);
  border-bottom-color: rgba(114, 135, 253, 0.25);
  border-left-color: rgba(114, 135, 253, 0.25);
  border-right-color: rgba(114, 135, 253, 0.25);
  border-top-color: rgba(114, 135, 253, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 210, 15, 57;
  background-color: rgba(210, 15, 57, 0.1);
  border-bottom-color: rgba(210, 15, 57, 0.25);
  border-left-color: rgba(210, 15, 57, 0.25);
  border-right-color: rgba(210, 15, 57, 0.25);
  border-top-color: rgba(210, 15, 57, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 42, 110, 245;
  background-color: rgba(42, 110, 245, 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 42, 110, 245;
  background-color: rgba(42, 110, 245, 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 254, 100, 11;
  background-color: rgba(254, 100, 11, 0.1);
  border-bottom-color: rgba(254, 100, 11, 0.25);
  border-left-color: rgba(254, 100, 11, 0.25);
  border-right-color: rgba(254, 100, 11, 0.25);
  border-top-color: rgba(254, 100, 11, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 64, 160, 43;
  background-color: rgba(64, 160, 43, 0.1);
  border-bottom-color: rgba(64, 160, 43, 0.25);
  border-left-color: rgba(64, 160, 43, 0.25);
  border-right-color: rgba(64, 160, 43, 0.25);
  border-top-color: rgba(64, 160, 43, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 4, 165, 229;
  background-color: rgba(4, 165, 229, 0.1);
  border-bottom-color: rgba(4, 165, 229, 0.25);
  border-left-color: rgba(4, 165, 229, 0.25);
  border-right-color: rgba(4, 165, 229, 0.25);
  border-top-color: rgba(4, 165, 229, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 42, 110, 245;
  background-color: rgba(42, 110, 245, 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 254, 100, 11;
  background-color: rgba(254, 100, 11, 0.1);
  border-bottom-color: rgba(254, 100, 11, 0.25);
  border-left-color: rgba(254, 100, 11, 0.25);
  border-right-color: rgba(254, 100, 11, 0.25);
  border-top-color: rgba(254, 100, 11, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgba(220, 224, 232, 0.3);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

body .search > .search-container > .search-space {
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
  box-shadow: rgba(220, 224, 232, 0.07) 0px 1.8px 7.3px 0px, rgba(220, 224, 232, 0.114) 0px 6.3px 24.7px 0px, rgba(220, 224, 232, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 79, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(76, 79, 105);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(76, 79, 105, 0.075);
  color: rgb(76, 79, 105);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(230, 233, 239);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(76, 79, 105, 0.075);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(76, 79, 105, 0.075);
  color: rgb(76, 79, 105);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(222, 149, 132, 0.1);
  border-bottom-color: rgba(222, 149, 132, 0.15);
  border-left-color: rgba(222, 149, 132, 0.15);
  border-right-color: rgba(222, 149, 132, 0.15);
  border-top-color: rgba(222, 149, 132, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(222, 149, 132);
}

body h1 {
  color: rgb(210, 15, 57);
}

body h2 {
  color: rgb(254, 100, 11);
}

body h2.page-title, h2.page-title a {
  color: rgb(76, 79, 105);
}

body h3 {
  color: rgb(64, 160, 43);
}

body h4 {
  color: rgb(23, 146, 153);
}

body h5 {
  color: rgb(114, 135, 253);
}

body h6 {
  color: rgb(136, 57, 239);
}

body hr {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
}`,
    scrollbars: `body .callout {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

body ::-webkit-scrollbar-corner {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

body ::-webkit-scrollbar-track {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(124, 127, 147);
  text-decoration: rgb(124, 127, 147);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(124, 127, 147);
  text-decoration: rgb(124, 127, 147);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(124, 127, 147);
  text-decoration: rgb(124, 127, 147);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(76, 79, 105, 0.075);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
}`,
    footer: `body footer {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(124, 127, 147);
}

body footer ul li a {
  color: rgb(124, 127, 147);
  text-decoration: rgb(124, 127, 147);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(76, 79, 105);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(124, 127, 147);
  text-decoration: rgb(124, 127, 147);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(124, 127, 147);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body li.section-li > .section .meta {
  color: rgb(124, 127, 147);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(124, 127, 147);
  text-decoration: rgb(124, 127, 147);
}

body ul.section-ul {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
}

body .darkmode svg {
  color: rgb(124, 127, 147);
  stroke: rgb(124, 127, 147);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
}

body .breadcrumb-element p {
  color: rgb(108, 111, 133);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body .metadata {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(124, 127, 147);
}

body .metadata-properties {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
}

body .navigation-progress {
  background-color: rgb(230, 233, 239);
}

body .page-header h2.page-title {
  color: rgb(76, 79, 105);
}

body abbr {
  color: rgb(76, 79, 105);
  text-decoration: underline dotted rgb(76, 79, 105);
}

body details {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body input[type=text] {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
}

body kbd {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

body progress {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

body sub {
  color: rgb(76, 79, 105);
}

body summary {
  color: rgb(76, 79, 105);
}

body sup {
  color: rgb(76, 79, 105);
}`,
  },
};
