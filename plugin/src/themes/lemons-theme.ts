import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "lemons-theme", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 46deg;
  --accent-l: 65%;
  --accent-s: 95%;
  --background-modifier-active-hover: rgba(81, 81, 81, 0.15);
  --background-modifier-border: #404040;
  --background-modifier-border-focus: #707070;
  --background-modifier-border-hover: #707070;
  --background-modifier-error: #ff6b81;
  --background-modifier-error-hover: #ff6b81;
  --background-modifier-error-rgb: 255,
    107,
    129;
  --background-modifier-form-field: #383838;
  --background-modifier-form-field-hover: #383838;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #7bed9f;
  --background-modifier-success-rgb: 123,
    237,
    159;
  --background-primary: #202020;
  --background-primary-alt: #282828;
  --background-secondary: #303030;
  --background-secondary-alt: #383838;
  --bases-cards-background: #202020;
  --bases-cards-cover-background: #282828;
  --bases-cards-shadow: 0 0 0 1px #404040;
  --bases-cards-shadow-hover: 0 0 0 1px #707070;
  --bases-embed-border-color: #404040;
  --bases-group-heading-property-color: #a0a0a0;
  --bases-table-border-color: #404040;
  --bases-table-cell-background-active: #202020;
  --bases-table-cell-background-disabled: #282828;
  --bases-table-cell-background-selected: rgba(81, 81, 81, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #707070;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(81, 81, 81);
  --bases-table-group-background: #282828;
  --bases-table-header-background: #202020;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075);
  --bases-table-header-color: #a0a0a0;
  --bases-table-summary-background: #202020;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075);
  --blockquote-background-color: rgb(158, 158, 158, 0.10);
  --blockquote-border-color: rgb(81, 81, 81);
  --blockquote-border-thickness: 0px;
  --blur-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --callout-bug: 255,
    107,
    129;
  --callout-default: 83,
    82,
    237;
  --callout-error: 255,
    107,
    129;
  --callout-example: 168,
    130,
    255;
  --callout-fail: 255,
    107,
    129;
  --callout-important: 112,
    161,
    255;
  --callout-info: 83,
    82,
    237;
  --callout-question: 255,
    127,
    80;
  --callout-radius: 8px;
  --callout-success: 123,
    237,
    159;
  --callout-summary: 112,
    161,
    255;
  --callout-tip: 112,
    161,
    255;
  --callout-todo: 83,
    82,
    237;
  --callout-warning: 255,
    127,
    80;
  --canvas-background: #202020;
  --canvas-card-label-color: #707070;
  --canvas-color: 80,
    80,
    80;
  --canvas-color-1: 255,
    107,
    129;
  --canvas-color-2: 255,
    127,
    80;
  --canvas-color-3: 251,
    211,
    81;
  --canvas-color-4: 123,
    237,
    159;
  --canvas-color-5: 112,
    161,
    255;
  --canvas-color-6: 168,
    130,
    255;
  --canvas-dot-pattern: #404040;
  --caret-color: #ffffff;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #a0a0a0;
  --checkbox-color: rgb(81, 81, 81);
  --checkbox-color-hover: rgb(61, 61, 61);
  --checkbox-marker-color: #202020;
  --checklist-done-color: #a0a0a0;
  --code-background: #282828;
  --code-border-color: #404040;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #707070;
  --code-function: rgb(81, 81, 81);
  --code-important: #ff7f50;
  --code-normal: #ffffff;
  --code-operator: #ff6b81;
  --code-property: #70a1ff;
  --code-punctuation: #a0a0a0;
  --code-string: #7bed9f;
  --code-tag: #ff6b81;
  --collapse-icon-color: #707070;
  --collapse-icon-color-collapsed: rgb(61, 61, 61);
  --color-accent: rgb(81, 81, 81);
  --color-accent-1: rgb(61, 61, 61);
  --color-accent-2: rgb(101, 101, 101);
  --color-accent-hsl: 46deg,
    95%,
    65%;
  --color-base-00: #202020;
  --color-base-05: #242424;
  --color-base-10: #282828;
  --color-base-100: #ffffff;
  --color-base-15: #2b2b2b;
  --color-base-20: #303030;
  --color-base-25: #383838;
  --color-base-30: #404040;
  --color-base-35: #484848;
  --color-base-40: #505050;
  --color-base-50: #707070;
  --color-base-60: #909090;
  --color-base-70: #a0a0a0;
  --color-base-80: #c0c0c0;
  --color-base-90: #e0e0e0;
  --color-blue: #5352ed;
  --color-blue-rgb: 83,
    82,
    237;
  --color-cyan: #70a1ff;
  --color-cyan-rgb: 112,
    161,
    255;
  --color-green: #7bed9f;
  --color-green-rgb: 123,
    237,
    159;
  --color-orange: #ff7f50;
  --color-orange-rgb: 255,
    127,
    80;
  --color-pink-rgb: 250,
    153,
    205;
  --color-purple-rgb: 168,
    130,
    255;
  --color-red: #ff6b81;
  --color-red-rgb: 255,
    107,
    129;
  --color-yellow: rgb(81, 81, 81);
  --color-yellow-rgb: 251,
    211,
    81;
  --divider-color: #404040;
  --divider-color-hover: rgb(81, 81, 81);
  --divider-width: 0px;
  --dropdown-background: #404040;
  --dropdown-background-hover: #484848;
  --embed-block-shadow-hover: 0 0 0 1px rgb(81, 81, 81);
  --embed-border-start: 2px solid rgb(81, 81, 81);
  --file-header-background: #202020;
  --file-header-background-focused: #202020;
  --file-header-font: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --flair-background: #404040;
  --flair-color: #ffffff;
  --font-default: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-interface: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-interface-override: "??";
  --font-interface-theme: "??";
  --font-mermaid: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-monospace: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-monospace-default: Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-monospace-override: "??";
  --font-monospace-theme: "??";
  --font-print: '??', "??", "??", 'Arial';
  --font-text: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-text-override: "??";
  --font-text-theme: "??";
  --footnote-divider-color: #404040;
  --footnote-id-color: #a0a0a0;
  --footnote-id-color-no-occurrences: #707070;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075);
  --graph-line: #484848;
  --graph-node: #a0a0a0;
  --graph-node-attachment: rgb(81, 81, 81);
  --graph-node-focused: rgb(61, 61, 61);
  --graph-node-tag: #7bed9f;
  --graph-node-unresolved: #707070;
  --graph-text: #ffffff;
  --heading-formatting: #707070;
  --hr-color: #404040;
  --icon-color: #a0a0a0;
  --icon-color-active: rgb(61, 61, 61);
  --icon-color-focused: rgb(61, 61, 61);
  --icon-color-hover: rgb(61, 61, 61);
  --indentation-guide-color: rgba(255, 255, 255, 0.12);
  --indentation-guide-color-active: rgb(61, 61, 61);
  --input-date-separator: #707070;
  --input-placeholder-color: #707070;
  --input-shadow: 0 0 0 0 transparent;
  --input-shadow-hover: 0 0 0 0 transparent;
  --interactive-accent: rgb(81, 81, 81);
  --interactive-accent-hover: rgb(61, 61, 61);
  --interactive-accent-hsl: 46deg,
    95%,
    65%;
  --interactive-hover: #484848;
  --interactive-normal: #404040;
  --link-color: rgb(61, 61, 61);
  --link-color-hover: rgb(101, 101, 101);
  --link-external-color: rgb(61, 61, 61);
  --link-external-color-hover: rgb(101, 101, 101);
  --link-unresolved-color: rgb(61, 61, 61);
  --link-unresolved-decoration-color: rgba(81, 81, 81, 0.3);
  --list-bullet-border: 0px;
  --list-bullet-radius: 1px;
  --list-marker-color: #707070;
  --list-marker-color-collapsed: rgb(61, 61, 61);
  --list-marker-color-hover: #a0a0a0;
  --lt-canvas-hover-color: 112,
    112,
    112;
  --lt-file-icon-color: #707070;
  --lt-gradient-gay: linear-gradient(to right, rgb(7, 141, 111), rgb(152, 202, 153), rgb(255, 255, 255) 45%, rgb(255, 255, 255), rgb(255, 255, 255) 55%, rgb(205, 208, 234), rgb(123, 173, 226) 70%, rgb(69, 76, 189), rgb(63, 26, 121));
  --lt-gradient-lesbian: linear-gradient(to right, rgb(213, 44, 0), rgb(226, 150, 136), rgb(255, 255, 255) 45%, rgb(255, 255, 255), rgb(255, 255, 255) 55%, rgb(210, 127, 164), rgb(162, 2, 98));
  --lt-gradient-non-bin: linear-gradient(to right, rgb(253, 219, 0), rgb(238, 212, 143), rgb(255, 255, 255) 30%, rgb(255, 255, 255), rgb(255, 255, 255) 36%, rgb(212, 181, 222), rgb(156, 92, 212), rgb(88, 50, 96), rgb(0, 0, 0));
  --lt-gradient-pride: linear-gradient(to right, rgb(237, 34, 36), rgb(243, 91, 34), rgb(249, 150, 33), rgb(245, 193, 30), rgb(241, 235, 27) 27%, rgb(241, 235, 27), rgb(241, 235, 27) 33%, rgb(99, 199, 32), rgb(12, 155, 73), rgb(33, 135, 141), rgb(57, 84, 165), rgb(97, 55, 155), rgb(147, 40, 142));
  --lt-gradient-trans: linear-gradient(to right, rgb(85, 205, 252), rgb(179, 157, 233), rgb(247, 168, 184), rgb(246, 216, 221), rgb(255, 255, 255) 45%, rgb(255, 255, 255), rgb(255, 255, 255) 55%, rgb(246, 216, 221), rgb(247, 168, 184), rgb(179, 157, 233), rgb(85, 205, 252));
  --lt-list-bullet-height: 2px;
  --lt-list-bullet-width: 6px;
  --menu-background: #303030;
  --menu-border-color: #707070;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15);
  --metadata-border-color: #404040;
  --metadata-divider-color: #404040;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075);
  --metadata-input-font: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --metadata-input-text-color: #ffffff;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075);
  --metadata-label-font: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --metadata-label-text-color: #a0a0a0;
  --metadata-label-text-color-hover: #a0a0a0;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px #707070;
  --metadata-property-box-shadow-hover: 0 0 0 1px #707070;
  --modal-background: #202020;
  --modal-border-color: #505050;
  --modal-border-width: 0px;
  --mono-rgb-0: 0,
    0,
    0;
  --mono-rgb-100: 255,
    255,
    255;
  --nav-collapse-icon-color: #707070;
  --nav-collapse-icon-color-collapsed: #707070;
  --nav-heading-color: #ffffff;
  --nav-heading-color-collapsed: #707070;
  --nav-heading-color-collapsed-hover: #a0a0a0;
  --nav-heading-color-hover: #ffffff;
  --nav-indentation-guide-color: rgba(255, 255, 255, 0.12);
  --nav-item-background-active: rgb(81, 81, 81);
  --nav-item-background-hover: rgba(255, 255, 255, 0.075);
  --nav-item-background-selected: rgba(81, 81, 81, 0.15);
  --nav-item-children-padding-left: 8px;
  --nav-item-color: #a0a0a0;
  --nav-item-color-active: #202020;
  --nav-item-color-highlighted: rgb(61, 61, 61);
  --nav-item-color-hover: rgb(61, 61, 61);
  --nav-item-color-selected: #ffffff;
  --nav-tag-color: #707070;
  --nav-tag-color-active: #a0a0a0;
  --nav-tag-color-hover: #a0a0a0;
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #404040;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #404040;
  --pill-border-color: #404040;
  --pill-border-color-hover: #707070;
  --pill-color: #a0a0a0;
  --pill-color-hover: #ffffff;
  --pill-color-remove: #707070;
  --pill-color-remove-hover: rgb(61, 61, 61);
  --prompt-background: #202020;
  --prompt-border-color: #505050;
  --prompt-border-width: 0px;
  --raised-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --ribbon-background: #303030;
  --ribbon-background-collapsed: #202020;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #a0a0a0;
  --search-icon-color: #a0a0a0;
  --search-result-background: #202020;
  --setting-group-heading-color: #ffffff;
  --setting-items-background: #282828;
  --setting-items-border-color: #404040;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.05),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.1),
    0px 30px 90px rgba(0, 0, 0, 0.15);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15);
  --slider-thumb-border-color: #707070;
  --slider-track-background: #404040;
  --status-bar-background: #383838;
  --status-bar-border-color: #404040;
  --status-bar-border-width: 0px;
  --status-bar-radius: 0px;
  --status-bar-text-color: #a0a0a0;
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ff6b81;
  --sync-avatar-color-2: #ff7f50;
  --sync-avatar-color-3: rgb(81, 81, 81);
  --sync-avatar-color-4: #7bed9f;
  --sync-avatar-color-5: #70a1ff;
  --sync-avatar-color-6: #5352ed;
  --tab-background-active: #202020;
  --tab-container-background: #303030;
  --tab-divider-color: transparent;
  --tab-outline-color: #404040;
  --tab-outline-width: 0px;
  --tab-switcher-background: #303030;
  --tab-switcher-menubar-background: linear-gradient(to top, #303030, transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(81, 81, 81);
  --tab-text-color: #707070;
  --tab-text-color-active: #a0a0a0;
  --tab-text-color-focused: #a0a0a0;
  --tab-text-color-focused-active: #a0a0a0;
  --tab-text-color-focused-active-current: rgb(61, 61, 61);
  --tab-text-color-focused-highlighted: rgb(61, 61, 61);
  --table-add-button-border-color: #404040;
  --table-border-color: #404040;
  --table-drag-handle-background-active: rgb(81, 81, 81);
  --table-drag-handle-color: #707070;
  --table-drag-handle-color-active: #202020;
  --table-header-border-color: #404040;
  --table-header-color: #ffffff;
  --table-selection: rgba(81, 81, 81, 0.1);
  --table-selection-border-color: rgb(81, 81, 81);
  --table-selection-border-radius: 8px;
  --tag-background: rgba(81, 81, 81, 0.1);
  --tag-background-hover: rgba(81, 81, 81, 0.2);
  --tag-border-color: rgba(81, 81, 81, 0.15);
  --tag-border-color-hover: rgba(81, 81, 81, 0.15);
  --tag-color: rgb(61, 61, 61);
  --tag-color-hover: rgb(61, 61, 61);
  --text-accent: rgb(61, 61, 61);
  --text-accent-hover: rgb(101, 101, 101);
  --text-error: #ff6b81;
  --text-faint: #707070;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: #a0a0a0;
  --text-normal: #ffffff;
  --text-on-accent: #202020;
  --text-selection: rgba(255, 255, 255, 0.2);
  --text-success: #7bed9f;
  --text-warning: #ff7f50;
  --titlebar-background: #383838;
  --titlebar-background-focused: #383838;
  --titlebar-border-color: #404040;
  --titlebar-text-color: #a0a0a0;
  --titlebar-text-color-focused: #ffffff;
  --vault-profile-color: #ffffff;
  --vault-profile-color-hover: #ffffff;
  --workspace-background-translucent: rgba(0, 0, 0, 0.6);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(48, 48, 48);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(32, 32, 32);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(48, 48, 48);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 64, 64);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(48, 48, 48);
  border-left-color: rgb(64, 64, 64);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(32, 32, 32);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}`,
    links: `body a.external, footer a {
  color: rgb(250, 206, 62);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(250, 206, 62) none 0px;
  text-decoration: underline rgb(250, 206, 62);
  text-decoration-color: rgb(250, 206, 62);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(250, 206, 62);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(250, 206, 62) none 0px;
  text-decoration: underline rgb(250, 206, 62);
  text-decoration-color: rgb(250, 206, 62);
}

body a.internal.broken {
  color: rgb(250, 206, 62);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(250, 206, 62) none 0px;
  text-decoration: underline rgba(251, 211, 81, 0.3);
  text-decoration-color: rgba(251, 211, 81, 0.3);
}`,
    lists: `body dd {
  color: rgb(255, 255, 255);
}

body dt {
  color: rgb(255, 255, 255);
}

body ol > li {
  color: rgb(255, 255, 255);
}

body ol.overflow {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}

body blockquote {
  background-color: rgba(158, 158, 158, 0.1);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  width: 246.422px;
}

body td {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body th {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body tr {
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}`,
    code: `body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(255, 255, 255);
}

body pre > code > [data-line] {
  border-left-color: rgb(251, 211, 81);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(251, 211, 81);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(251, 211, 81);
  border-left-color: rgb(251, 211, 81);
  border-right-color: rgb(251, 211, 81);
  border-top-color: rgb(251, 211, 81);
}

body pre > code, pre:has(> code) {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body pre:has(> code) {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `body .file-embed {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(251, 211, 81);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(251, 211, 81);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body input[type=checkbox] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

body .callout > .callout-content {
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 112,
    161,
    255;
  background-color: rgba(112, 161, 255, 0.1);
  border-bottom-color: rgba(112, 161, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(112, 161, 255, 0.25);
  border-right-color: rgba(112, 161, 255, 0.25);
  border-top-color: rgba(112, 161, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  --callout-color: 255,
    107,
    129;
  background-color: rgba(255, 107, 129, 0.1);
  border-bottom-color: rgba(255, 107, 129, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 107, 129, 0.25);
  border-right-color: rgba(255, 107, 129, 0.25);
  border-top-color: rgba(255, 107, 129, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  --callout-color: 255,
    107,
    129;
  background-color: rgba(255, 107, 129, 0.1);
  border-bottom-color: rgba(255, 107, 129, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 107, 129, 0.25);
  border-right-color: rgba(255, 107, 129, 0.25);
  border-top-color: rgba(255, 107, 129, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  --callout-color: 168,
    130,
    255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  --callout-color: 255,
    107,
    129;
  background-color: rgba(255, 107, 129, 0.1);
  border-bottom-color: rgba(255, 107, 129, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 107, 129, 0.25);
  border-right-color: rgba(255, 107, 129, 0.25);
  border-top-color: rgba(255, 107, 129, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  --callout-color: 83,
    82,
    237;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgba(83, 82, 237, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(83, 82, 237, 0.25);
  border-right-color: rgba(83, 82, 237, 0.25);
  border-top-color: rgba(83, 82, 237, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  --callout-color: 83,
    82,
    237;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgba(83, 82, 237, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(83, 82, 237, 0.25);
  border-right-color: rgba(83, 82, 237, 0.25);
  border-top-color: rgba(83, 82, 237, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  --callout-color: 255,
    127,
    80;
  background-color: rgba(255, 127, 80, 0.1);
  border-bottom-color: rgba(255, 127, 80, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 127, 80, 0.25);
  border-right-color: rgba(255, 127, 80, 0.25);
  border-top-color: rgba(255, 127, 80, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  --callout-color: 123,
    237,
    159;
  background-color: rgba(123, 237, 159, 0.1);
  border-bottom-color: rgba(123, 237, 159, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(123, 237, 159, 0.25);
  border-right-color: rgba(123, 237, 159, 0.25);
  border-top-color: rgba(123, 237, 159, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  --callout-color: 112,
    161,
    255;
  background-color: rgba(112, 161, 255, 0.1);
  border-bottom-color: rgba(112, 161, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(112, 161, 255, 0.25);
  border-right-color: rgba(112, 161, 255, 0.25);
  border-top-color: rgba(112, 161, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  --callout-color: 83,
    82,
    237;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgba(83, 82, 237, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(83, 82, 237, 0.25);
  border-right-color: rgba(83, 82, 237, 0.25);
  border-top-color: rgba(83, 82, 237, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  --callout-color: 255,
    127,
    80;
  background-color: rgba(255, 127, 80, 0.1);
  border-bottom-color: rgba(255, 127, 80, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 127, 80, 0.25);
  border-right-color: rgba(255, 127, 80, 0.25);
  border-top-color: rgba(255, 127, 80, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(56, 56, 56);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-width: 0px;
  border-left-color: rgb(80, 80, 80);
  border-left-width: 0px;
  border-right-color: rgb(80, 80, 80);
  border-right-width: 0px;
  border-top-color: rgb(80, 80, 80);
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.1) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.15) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 206, 62);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 206, 62);
  border-left-color: rgb(250, 206, 62);
  border-right-color: rgb(250, 206, 62);
  border-top-color: rgb(250, 206, 62);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(250, 206, 62);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(250, 206, 62);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-width: 0px;
  border-left-color: rgb(80, 80, 80);
  border-left-width: 0px;
  border-right-color: rgb(80, 80, 80);
  border-right-width: 0px;
  border-top-color: rgb(80, 80, 80);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(48, 48, 48);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(250, 206, 62);
  border-left-color: rgb(250, 206, 62);
  border-right-color: rgb(250, 206, 62);
  border-top-color: rgb(250, 206, 62);
  color: rgb(250, 206, 62);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(250, 206, 62);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(251, 211, 81, 0.1);
  border-bottom-color: rgba(251, 211, 81, 0.15);
  border-left-color: rgba(251, 211, 81, 0.15);
  border-right-color: rgba(251, 211, 81, 0.15);
  border-top-color: rgba(251, 211, 81, 0.15);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body a.internal.tag-link::before {
  color: rgb(250, 206, 62);
}

body h1 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body h2 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body h4 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body h5 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body h6 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body hr {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  --callout-color: 83,
    82,
    237;
  border-bottom-color: rgba(83, 82, 237, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(83, 82, 237, 0.25);
  border-right-color: rgba(83, 82, 237, 0.25);
  border-top-color: rgba(83, 82, 237, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-corner {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-track {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  text-decoration: rgb(160, 160, 160);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  text-decoration: rgb(160, 160, 160);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  text-decoration: rgb(160, 160, 160);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(251, 211, 81);
  border-bottom-color: rgb(32, 32, 32);
  border-left-color: rgb(32, 32, 32);
  border-right-color: rgb(32, 32, 32);
  border-top-color: rgb(32, 32, 32);
  color: rgb(32, 32, 32);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}`,
    footer: `body footer {
  background-color: rgb(56, 56, 56);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-left-width: 0px;
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body footer ul li a {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

body .darkmode svg {
  color: rgb(160, 160, 160);
  stroke: rgb(160, 160, 160);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

body .breadcrumb-element p {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body .metadata-properties {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body .navigation-progress {
  background-color: rgb(56, 56, 56);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body input[type=text] {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body kbd {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(255, 255, 255);
}

body summary {
  color: rgb(255, 255, 255);
}

body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {},
};
