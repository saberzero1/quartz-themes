import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "qlean",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ia-writer-mono", "noto-sans-jp"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-color-dark-hue-default: 254;
  --accent-color-dark-lightness-default: 68%;
  --accent-color-dark-saturation-default: 80%;
  --accent-color-light-hue-default: 254;
  --accent-color-light-lightness-default: 68%;
  --accent-color-light-saturation-default: 80%;
  --accent-h: 0;
  --accent-l: 90%;
  --accent-s: 0%;
  --background-color-glass: rgba(0, 0, 0, 0.8);
  --background-modifier-active-hover: #404040;
  --background-modifier-border-focus: #404040;
  --background-modifier-error-rgb: #ef4444;
  --background-primary: #0a0a0a;
  --background-primary-alt: #262626;
  --background-secondary: #171717;
  --background-secondary-alt: #404040;
  --bases-cards-background: #0a0a0a;
  --bases-cards-cover-background: #262626;
  --bases-embed-border-radius: 0.125em;
  --bases-group-heading-property-color: #737373;
  --bases-table-cell-background-active: #0a0a0a;
  --bases-table-cell-background-disabled: #262626;
  --bases-table-cell-background-selected: rgba(230, 230, 230, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #404040;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(204, 204, 204);
  --bases-table-container-border-radius: 0.125em;
  --bases-table-group-background: #262626;
  --bases-table-header-background: #0a0a0a;
  --bases-table-header-color: #737373;
  --bases-table-summary-background: #0a0a0a;
  --blockquote-border-color: rgb(204, 204, 204);
  --bodyFont: var(--font-text);
  --border-color: #404040;
  --callout-attention-bg-color: rgb(47, 36, 25);
  --callout-attention-text-color: #f97316;
  --callout-bug-bg-color: rgb(50, 26, 26);
  --callout-bug-text-color: #ef4444;
  --callout-caution-bg-color: rgb(47, 36, 25);
  --callout-caution-text-color: #f97316;
  --callout-check-bg-color: rgb(26, 43, 30);
  --callout-check-text-color: #22c55e;
  --callout-cite-bg-color: rgb(36, 36, 36);
  --callout-cite-text-color: #f5f5f5;
  --callout-danger-bg-color: rgb(50, 26, 26);
  --callout-danger-text-color: #ef4444;
  --callout-dogs-ear-size: 2em;
  --callout-done-bg-color: rgb(26, 43, 30);
  --callout-done-text-color: #22c55e;
  --callout-error-bg-color: rgb(50, 26, 26);
  --callout-error-text-color: #ef4444;
  --callout-example-bg-color: rgb(38, 32, 48);
  --callout-example-text-color: #8b5cf6;
  --callout-fail-bg-color: rgb(50, 26, 26);
  --callout-fail-text-color: #ef4444;
  --callout-failure-bg-color: rgb(50, 26, 26);
  --callout-failure-text-color: #ef4444;
  --callout-faq-bg-color: rgb(47, 36, 25);
  --callout-faq-text-color: #eab308;
  --callout-help-bg-color: rgb(47, 36, 25);
  --callout-help-text-color: #eab308;
  --callout-hint-bg-color: rgb(30, 44, 44);
  --callout-hint-text-color: #0ea5e9;
  --callout-important-bg-color: rgb(30, 44, 44);
  --callout-important-text-color: #0ea5e9;
  --callout-info-bg-color: rgb(20, 32, 49);
  --callout-info-text-color: #f5f5f5;
  --callout-missing-bg-color: rgb(50, 26, 26);
  --callout-missing-text-color: #ef4444;
  --callout-note--text-color: #f5f5f5;
  --callout-note-bg-color: rgb(20, 32, 49);
  --callout-question-bg-color: rgb(47, 36, 25);
  --callout-question-text-color: #eab308;
  --callout-quote-bg-color: rgb(36, 36, 36);
  --callout-quote-text-color: #f5f5f5;
  --callout-radius: 0.125em;
  --callout-success-bg-color: rgb(26, 43, 30);
  --callout-success-text-color: #22c55e;
  --callout-tip-bg-color: rgb(30, 44, 44);
  --callout-tip-text-color: #0ea5e9;
  --callout-todo-bg-color: rgb(20, 32, 49);
  --callout-todo-text-color: #0ea5e9;
  --callout-warning-bg-color: rgb(47, 36, 25);
  --callout-warning-text-color: #f97316;
  --canvas-background: #0a0a0a;
  --canvas-controls-radius: 0.125em;
  --caret-color: #d4d4d4;
  --checkbox-border-color: #b3b3b3;
  --checkbox-border-color-hover: #737373;
  --checkbox-checked-color: rgba(230, 230, 230, 0);
  --checkbox-color: #22c55e;
  --checkbox-color-hover: rgba(186, 186, 186, 0.5);
  --checkbox-marker-color: #0a0a0a;
  --checkbox-radius: 0.125em;
  --checkbox-unchecked-color-hover: rgba(230, 230, 230, 0.5);
  --checklist-decoration-color: #d4d4d4;
  --checklist-decoration-line: none;
  --checklist-delete-decoration-color: #fb464c;
  --checklist-delete-decoration-line: line-through;
  --checklist-done-color: #737373;
  --checklist-done-decoration-color: #737373;
  --checklist-done-decoration-line: none;
  --clickable-icon-radius: 0.125em;
  --close-button-hover-bg-color: rgba(255, 255, 255, 0.1);
  --code-background: #262626;
  --code-bg-color: #171717;
  --code-normal: #d4d4d4;
  --code-punctuation: #737373;
  --code-radius: 0.125em;
  --codeFont: var(--font-monospace);
  --collapse-icon-color-collapsed: rgb(230, 230, 230);
  --color-accent: rgb(230, 230, 230);
  --color-accent-1: rgb(230, 230, 230);
  --color-accent-2: hsl(-5, 0%, 116.1%);
  --color-accent-h1: rgb(230, 230, 230);
  --color-accent-h2: rgb(230, 230, 230);
  --color-accent-h3: rgb(230, 230, 230);
  --color-accent-h4: rgb(230, 230, 230);
  --color-accent-h5: rgb(230, 230, 230);
  --color-accent-h6: rgb(230, 230, 230);
  --color-accent-hsl: 0, 0%, 90%;
  --color-accent-ln10: rgb(204, 204, 204);
  --color-accent-ln15: rgb(191, 191, 191);
  --color-accent-ln20: rgb(179, 179, 179);
  --color-accent-ln5: rgb(217, 217, 217);
  --color-accent-o10: rgba(230, 230, 230, 0.1);
  --color-accent-o20: rgba(230, 230, 230, 0.2);
  --color-accent-o30: rgba(230, 230, 230, 0.3);
  --color-accent-o40: rgba(230, 230, 230, 0.4);
  --color-accent-o50: rgba(230, 230, 230, 0.5);
  --color-accent-o60: rgba(230, 230, 230, 0.6);
  --color-accent-o70: rgba(230, 230, 230, 0.7);
  --color-accent-o80: rgba(230, 230, 230, 0.8);
  --color-accent-o90: rgba(230, 230, 230, 0.9);
  --color-beige-h: 50;
  --color-beige-l: 91%;
  --color-beige-main: rgb(255, 247, 209);
  --color-beige-s: 100%;
  --color-blue-h: 207;
  --color-blue-l: 73%;
  --color-blue-main: rgb(154, 189, 219);
  --color-blue-s: 47%;
  --color-bw-h: 0;
  --color-bw-s: 0%;
  --color-default-h1: #d4d4d4;
  --color-default-h2: #d4d4d4;
  --color-default-h3: #d4d4d4;
  --color-default-h4: #d4d4d4;
  --color-default-h5: #d4d4d4;
  --color-default-h6: #d4d4d4;
  --color-gradient-h1: rgb(230, 230, 230);
  --color-gradient-h2: rgba(230, 230, 230, 0.95);
  --color-gradient-h3: rgba(230, 230, 230, 0.9);
  --color-gradient-h4: rgba(230, 230, 230, 0.85);
  --color-gradient-h5: rgba(230, 230, 230, 0.8);
  --color-gradient-h6: rgba(230, 230, 230, 0.75);
  --color-h: 0;
  --color-l: 90%;
  --color-main: rgb(230, 230, 230);
  --color-peach-h: 0;
  --color-peach-l: 65%;
  --color-peach-main: rgb(199, 133, 133);
  --color-peach-s: 37%;
  --color-pink-h: 0;
  --color-pink-l: 91%;
  --color-pink-main: rgb(255, 209, 209);
  --color-pink-s: 100%;
  --color-purple-h: 269;
  --color-purple-l: 85%;
  --color-purple-main: rgb(216, 194, 239);
  --color-purple-s: 59%;
  --color-s: 0%;
  --color-sage-h: 88;
  --color-sage-l: 69%;
  --color-sage-main: rgb(177, 194, 158);
  --color-sage-s: 23%;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #404040;
  --divider-color-hover: rgb(204, 204, 204);
  --dropdown-background-hover: rgb(163 163 163 / 0.2);
  --embed-border-start: 2px solid rgb(204, 204, 204);
  --file-header-background: #0a0a0a;
  --file-header-background-focused: #0a0a0a;
  --file-header-font: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --flair-color: #d4d4d4;
  --focus-transition-duration: 0.2s;
  --font-default: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-em-color: #d4d4d4;
  --font-em-decoration-color: #d4d4d4;
  --font-em-decoration-line: none;
  --font-em-decoration-offset: 2px;
  --font-em-decoration-style: solid;
  --font-em-decoration-width: 1px;
  --font-em-size: 1em;
  --font-em-style: italic;
  --font-em-weight: normal;
  --font-file-tree: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-file-tree-size: 0.95em;
  --font-file-tree-weight: 400;
  --font-h1-size: 2.25em;
  --font-h1-weight: normal;
  --font-h2-size: 1.875em;
  --font-h2-weight: normal;
  --font-h3-size: 1.5em;
  --font-h3-weight: normal;
  --font-h4-size: 1.25em;
  --font-h4-weight: normal;
  --font-h5-size: 1.125em;
  --font-h5-weight: normal;
  --font-h6-size: 1em;
  --font-h6-weight: normal;
  --font-header: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-highlight-bg-color: rgb(230, 230, 230);
  --font-highlight-color: #0a0a0a;
  --font-highlight-decoration-color: #d4d4d4;
  --font-highlight-decoration-line: none;
  --font-highlight-decoration-offset: 3px;
  --font-highlight-decoration-style: solid;
  --font-highlight-decoration-width: 2px;
  --font-highlight-size: 1em;
  --font-highlight-style: normal;
  --font-highlight-weight: normal;
  --font-inline-tile-color: #d4d4d4;
  --font-inline-title: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-inline-title-size: 2em;
  --font-inline-title-weight: 900;
  --font-interface: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-interface-override: "";
  --font-latex-size: 1em;
  --font-latex-weight: 400;
  --font-mermaid: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-monospace: iawriter-mono, Nitti, Menlo, Courier, monospace;
  --font-monospace-default: iawriter-mono, Nitti, Menlo, Courier, monospace;
  --font-monospace-size: 1em;
  --font-monospace-weight: 400;
  --font-source-view: iawriter-mono, Nitti, Menlo, Courier, monospace;
  --font-source-view-size: 1em;
  --font-source-view-weight: 400;
  --font-strikethrough-color: #737373;
  --font-strikethrough-decoration-color: #737373;
  --font-strikethrough-decoration-line: line-through;
  --font-strikethrough-decoration-style: solid;
  --font-strikethrough-decoration-width: 2px;
  --font-strikethrough-size: 1em;
  --font-strikethrough-style: normal;
  --font-strikethrough-weight: normal;
  --font-strong-color: #f5f5f5;
  --font-strong-decoration-color: #f5f5f5;
  --font-strong-decoration-line: none;
  --font-strong-decoration-offset: 2px;
  --font-strong-decoration-style: solid;
  --font-strong-decoration-width: 1px;
  --font-strong-size: 1em;
  --font-strong-style: normal;
  --font-strong-weight: 900;
  --font-tag: iawriter-mono, Nitti, Menlo, Courier, monospace;
  --font-tag-size: 1em;
  --font-tag-weight: 400;
  --font-text: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-text-weight: 400;
  --font-underlined-color: #d4d4d4;
  --font-underlined-decoration-color: #d4d4d4;
  --font-underlined-decoration-line: underline;
  --font-underlined-decoration-offset: 6px;
  --font-underlined-decoration-style: wavy;
  --font-underlined-decoration-width: 2px;
  --font-underlined-size: 1em;
  --font-underlined-weight: normal;
  --font-vault-name: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-vault-name-size: 1.25em;
  --font-vault-name-weight: 400;
  --footnote-id-color: #737373;
  --footnote-radius: 0.125em;
  --graph-node: #737373;
  --graph-node-focused: rgb(230, 230, 230);
  --graph-text: #d4d4d4;
  --gray: var(--text-muted);
  --h1-color: #d4d4d4;
  --h2-color: #d4d4d4;
  --h3-color: #d4d4d4;
  --h4-color: #d4d4d4;
  --h5-color: #d4d4d4;
  --h6-color: #d4d4d4;
  --headerFont: var(--font-text);
  --highlight: var(--background-modifier-active-hover);
  --icon-color: #737373;
  --icon-color-active: rgb(230, 230, 230);
  --icon-color-focused: rgba(230, 230, 230, 0.8);
  --icon-color-hover: #737373;
  --icon-color-hovering: #f5f5f5;
  --inactive-hover-opacity: 0.8;
  --inactive-opacity: 0.3;
  --inline-code-bg-color: rgba(38, 38, 38, 0.5);
  --inline-code-text-color: #a3a3a3;
  --inline-title-color: #d4d4d4;
  --interactive-accent: rgb(204, 204, 204);
  --interactive-accent-hover: rgb(217, 217, 217);
  --interactive-accent-hsl: 0, 0%, 90%;
  --interactive-hover: rgb(163 163 163 / 0.2);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(217, 217, 217);
  --link-color-hover: rgb(217, 217, 217);
  --link-decoration-color: rgb(217, 217, 217);
  --link-decoration-line: underline;
  --link-decoration-offset: 0.3em;
  --link-decoration-style: solid;
  --link-decoration-thickness: 1px;
  --link-external-color: rgb(217, 217, 217);
  --link-external-color-hover: rgb(217, 217, 217);
  --link-unresolved-color: rgba(230, 230, 230, 0.9);
  --link-unresolved-color-hover: rgb(230, 230, 230);
  --link-unresolved-decoration-color: hsla(rgba(230, 230, 230, 0.9), 0.3);
  --link-unresolved-decoration-color-hover: hsla(rgb(230, 230, 230), 0.3);
  --link-unresolved-decoration-line: underline;
  --link-unresolved-decoration-offset: 0.3em;
  --link-unresolved-decoration-style: dashed;
  --link-unresolved-decoration-width: 1px;
  --list-marker-color-collapsed: rgb(230, 230, 230);
  --list-marker-color-hover: #737373;
  --menu-background: #171717;
  --metadata-input-font: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --metadata-input-text-color: #d4d4d4;
  --metadata-label-font: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --metadata-label-text-color: #737373;
  --metadata-label-text-color-hover: #737373;
  --metadata-property-box-shadow-focus: 0 0 0 2px #404040;
  --modal-background: #0a0a0a;
  --nav-heading-color: #d4d4d4;
  --nav-heading-color-collapsed-hover: #737373;
  --nav-heading-color-hover: #d4d4d4;
  --nav-item-background-selected: rgba(230, 230, 230, 0.15);
  --nav-item-color: #737373;
  --nav-item-color-active: #d4d4d4;
  --nav-item-color-highlighted: rgb(230, 230, 230);
  --nav-item-color-hover: #d4d4d4;
  --nav-item-color-selected: #d4d4d4;
  --nav-item-radius: 0.125em;
  --nav-tag-color-active: #737373;
  --nav-tag-color-hover: #737373;
  --nav-tag-radius: 0.125em;
  --pdf-background: #0a0a0a;
  --pdf-page-background: #0a0a0a;
  --pdf-sidebar-background: #0a0a0a;
  --pill-color: #737373;
  --pill-color-hover: #d4d4d4;
  --pill-color-remove-hover: rgb(230, 230, 230);
  --prompt-background: #0a0a0a;
  --quote-bg-color: rgba(250, 250, 250, 0.05);
  --radius-s: 0.125em;
  --ribbon-background: #171717;
  --ribbon-background-collapsed: #0a0a0a;
  --search-clear-button-color: #737373;
  --search-icon-color: #737373;
  --search-result-background: #0a0a0a;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #d4d4d4;
  --setting-items-background: #262626;
  --status-bar-background: #171717;
  --status-bar-border-color: #404040;
  --status-bar-text-color: #737373;
  --suggestion-background: #0a0a0a;
  --switch-inset-shadow-color: rgba(0, 0, 0, 0.2);
  --tab-active-bg-color: #262626;
  --tab-background-active: #0a0a0a;
  --tab-bg-color: #171717;
  --tab-container-background: #171717;
  --tab-hover-bg-color: #404040;
  --tab-outline-color: #404040;
  --tab-radius: 0.125em;
  --tab-switcher-background: #171717;
  --tab-switcher-menubar-background: linear-gradient(to top, #171717, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(230, 230, 230);
  --tab-text-color-active: #737373;
  --tab-text-color-focused: #737373;
  --tab-text-color-focused-active: #737373;
  --tab-text-color-focused-active-current: #d4d4d4;
  --tab-text-color-focused-highlighted: rgb(230, 230, 230);
  --table-drag-handle-background-active: rgb(204, 204, 204);
  --table-header-color: #d4d4d4;
  --table-selection: rgba(230, 230, 230, 0.1);
  --table-selection-border-color: rgb(204, 204, 204);
  --tag-background: rgba(230, 230, 230, 0.1);
  --tag-background-hover: rgba(230, 230, 230, 0.2);
  --tag-border-color: rgba(230, 230, 230, 0.15);
  --tag-border-color-hover: rgba(230, 230, 230, 0.15);
  --tag-color: rgb(230, 230, 230);
  --tag-color-hover: rgb(230, 230, 230);
  --tag-radius: 0em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(230, 230, 230);
  --text-accent-hover: #f5f5f5;
  --text-muted: #737373;
  --text-normal: #d4d4d4;
  --text-reversed: #0a0a0a;
  --text-selection: rgb(163 163 163 / 0.2);
  --text-strong: #f5f5f5;
  --textHighlight: var(--background-modifier-active-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #171717;
  --titlebar-background-focused: #404040;
  --titlebar-isfocused: #171514;
  --titlebar-not-focused: #4c4c4d;
  --titlebar-text-color: #737373;
  --titlebar-text-color-focused: #d4d4d4;
  --vault-profile-color: #d4d4d4;
  --vault-profile-color-hover: #d4d4d4;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(23, 23, 23);
  color: rgb(212, 212, 212);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 23, 23);
  color: rgb(212, 212, 212);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 64, 64);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(23, 23, 23);
  border-left-color: rgb(64, 64, 64);
  color: rgb(212, 212, 212);
}

body div#quartz-root {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}`,
    typography: `body .page article p > b, b {
  color: rgb(245, 245, 245);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  font-weight: 900;
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: 1px rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
  text-decoration-thickness: 1px;
}

body .page article p > em, em {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: 1px rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
  text-decoration-thickness: 1px;
}

body .page article p > i, i {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: 1px rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
  text-decoration-thickness: 1px;
}

body .page article p > strong, strong {
  color: rgb(245, 245, 245);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  font-weight: 900;
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: 1px rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
  text-decoration-thickness: 1px;
}

body .text-highlight {
  background-color: rgb(230, 230, 230);
  color: rgb(10, 10, 10);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(10, 10, 10) none 0px;
  text-decoration: 2px rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
  text-decoration-thickness: 2px;
}

body del {
  color: rgb(115, 115, 115);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: line-through 2px rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
  text-decoration-thickness: 2px;
}

body p {
  color: rgb(115, 115, 115);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}`,
    links: `body a.external, footer a {
  color: rgb(217, 217, 217);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: underline 1px rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
  text-decoration-thickness: 1px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(217, 217, 217);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: underline 1px rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgba(230, 230, 230, 0.9);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgba(230, 230, 230, 0.9) none 0px;
  text-decoration: underline 1px dashed rgba(230, 230, 230, 0.9);
  text-decoration-color: rgba(230, 230, 230, 0.9);
  text-decoration-style: dashed;
  text-decoration-thickness: 1px;
}`,
    lists: `body dd {
  color: rgb(212, 212, 212);
}

body dt {
  color: rgb(212, 212, 212);
}

body ol > li {
  color: rgb(212, 212, 212);
}

body ol.overflow {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body ul > li {
  color: rgb(212, 212, 212);
}

body ul.overflow {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(217, 217, 217);
  text-decoration: underline 1px rgb(217, 217, 217);
}

body blockquote {
  background-color: rgba(250, 250, 250, 0.05);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  padding-bottom: 20px;
  padding-top: 20px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body table {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  width: 662px;
}

body td {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(115, 115, 115);
  color: rgb(212, 212, 212);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  vertical-align: middle;
}

body th {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(245, 245, 245);
  font-weight: 400;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  text-align: center;
  vertical-align: middle;
}

body thead {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body tr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 1.75px;
  border-bottom-right-radius: 1.75px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 1.75px;
  border-top-right-radius: 1.75px;
  color: rgb(212, 212, 212);
  font-family: iawriter-mono, Nitti, Menlo, Courier, monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(23, 23, 23);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 1px;
  border-right-color: rgb(64, 64, 64);
  border-right-width: 1px;
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(23, 23, 23);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 1px;
  border-right-color: rgb(64, 64, 64);
  border-right-width: 1px;
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(212, 212, 212);
}

body pre > code, pre:has(> code) {
  background-color: rgb(23, 23, 23);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 1px;
  border-right-color: rgb(64, 64, 64);
  border-right-width: 1px;
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-bottom: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 20px;
}

body pre:has(> code) {
  background-color: rgb(23, 23, 23);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 1px;
  border-right-color: rgb(64, 64, 64);
  border-right-width: 1px;
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body figcaption {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body figure {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body img {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body video {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    embeds: `body .file-embed {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
}

body .footnotes {
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

body .transclude {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body .transclude-inner {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}

body input[type=checkbox] {
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  transition: background-color 0.2s, border-color 0.2s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='*'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='-'] {
  color: rgb(251, 70, 76);
  text-decoration: rgb(251, 70, 76);
  text-decoration-color: rgb(251, 70, 76);
}

body li.task-list-item[data-task='/'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='>'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='?'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='I'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='S'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='b'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='c'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='d'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='f'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='i'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='k'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='l'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='p'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='u'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='w'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: color(srgb 0.196078 0.101961 0.101961 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: color(srgb 0.196078 0.101961 0.101961 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: color(srgb 0.14902 0.12549 0.188235 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: color(srgb 0.196078 0.101961 0.101961 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: color(srgb 0.0784314 0.12549 0.192157 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: color(srgb 0.0784314 0.12549 0.192157 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: color(srgb 0.184314 0.141176 0.0980392 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: color(srgb 0.141176 0.141176 0.141176 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: color(srgb 0.101961 0.168627 0.117647 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: color(srgb 0.117647 0.172549 0.172549 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: color(srgb 0.0784314 0.12549 0.192157 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: color(srgb 0.184314 0.141176 0.0980392 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 1.625px;
  border-bottom-right-radius: 1.625px;
  border-top-left-radius: 1.625px;
  border-top-right-radius: 1.625px;
  color: rgb(212, 212, 212);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0.8);
  border-bottom-color: rgba(230, 230, 230, 0.6);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(230, 230, 230, 0.6);
  border-right-color: rgba(230, 230, 230, 0.6);
  border-top-color: rgba(230, 230, 230, 0.6);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(212, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(212, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(212, 212, 212);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(230, 230, 230, 0.6);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(230, 230, 230, 0.6);
  border-right-color: rgba(230, 230, 230, 0.6);
  border-top-color: rgba(230, 230, 230, 0.6);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
  color: rgb(212, 212, 212);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
  color: rgb(212, 212, 212);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(230, 230, 230, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 230, 230, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(230, 230, 230, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(230, 230, 230, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  font-family: iawriter-mono, Nitti, Menlo, Courier, monospace;
}

body a.internal.tag-link::before {
  color: rgb(245, 245, 245);
}

body h1 {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body h2 {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(245, 245, 245);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body h3 {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body h4 {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body h5 {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body h6 {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body hr {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

body ::-webkit-scrollbar-corner {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

body ::-webkit-scrollbar-track {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  text-decoration: rgb(212, 212, 212);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  text-decoration: rgb(212, 212, 212);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  text-decoration: rgb(212, 212, 212);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 1.78125px;
  border-bottom-right-radius: 1.78125px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 1.78125px;
  border-top-right-radius: 1.78125px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(245, 245, 245);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
  color: rgb(115, 115, 115);
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: rgb(23, 23, 23);
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 1.5px;
  border-bottom-right-radius: 1.5px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 1.5px;
  border-top-right-radius: 1.5px;
  color: rgb(212, 212, 212);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body footer ul li a {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(212, 212, 212);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body li.section-li > .section .meta {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
}

body ul.section-ul {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
  color: rgb(115, 115, 115);
  cursor: pointer;
}

body .darkmode svg {
  color: rgb(115, 115, 115);
  stroke: rgb(115, 115, 115);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 1.625px;
  border-bottom-right-radius: 1.625px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 1.625px;
  border-top-right-radius: 1.625px;
  color: rgb(115, 115, 115);
}

body .breadcrumb-element p {
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

body .metadata {
  color: rgb(115, 115, 115);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body .navigation-progress {
  background-color: rgb(23, 23, 23);
}

body .page-header h2.page-title {
  color: rgb(245, 245, 245);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body abbr {
  color: rgb(212, 212, 212);
  text-decoration: underline dotted rgb(212, 212, 212);
}

body details {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body input[type=text] {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body kbd {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 1.75px;
  border-bottom-right-radius: 1.75px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 1.75px;
  border-top-right-radius: 1.75px;
  color: rgb(212, 212, 212);
  font-family: iawriter-mono, Nitti, Menlo, Courier, monospace;
}

body progress {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body sub {
  color: rgb(212, 212, 212);
}

body summary {
  color: rgb(212, 212, 212);
}

body sup {
  color: rgb(212, 212, 212);
}`,
  },
  light: {
    base: `:root:root {
  --accent-color-dark-hue-default: 254;
  --accent-color-dark-lightness-default: 68%;
  --accent-color-dark-saturation-default: 80%;
  --accent-color-light-hue-default: 254;
  --accent-color-light-lightness-default: 68%;
  --accent-color-light-saturation-default: 80%;
  --accent-h: 0;
  --accent-l: 10%;
  --accent-s: 0%;
  --background-color-glass: rgba(255, 255, 255, 0.8);
  --background-modifier-active-hover: #d4d4d4;
  --background-modifier-border-focus: #d4d4d4;
  --background-modifier-error-rgb: #ef4444;
  --background-primary: #fafafa;
  --background-primary-alt: #e5e5e5;
  --background-secondary: #f5f5f5;
  --background-secondary-alt: #d4d4d4;
  --bases-cards-background: #fafafa;
  --bases-cards-cover-background: #e5e5e5;
  --bases-embed-border-radius: 0.125em;
  --bases-group-heading-property-color: #737373;
  --bases-table-cell-background-active: #fafafa;
  --bases-table-cell-background-disabled: #e5e5e5;
  --bases-table-cell-background-selected: rgba(26, 26, 26, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #d4d4d4;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 0, 0);
  --bases-table-container-border-radius: 0.125em;
  --bases-table-group-background: #e5e5e5;
  --bases-table-header-background: #fafafa;
  --bases-table-header-color: #737373;
  --bases-table-summary-background: #fafafa;
  --blockquote-border-color: rgb(0, 0, 0);
  --blur-background: color-mix(in srgb, #fafafa 65%, transparent) linear-gradient(#fafafa, color-mix(in srgb, #fafafa 65%, transparent));
  --bodyFont: var(--font-text);
  --border-color: #d4d4d4;
  --callout-attention-bg-color: rgb(255, 240, 229);
  --callout-attention-text-color: #f97316;
  --callout-bug-bg-color: rgb(255, 232, 234);
  --callout-bug-text-color: #ef4444;
  --callout-caution-bg-color: rgb(255, 240, 229);
  --callout-caution-text-color: #f97316;
  --callout-check-bg-color: rgb(232, 248, 234);
  --callout-check-text-color: #22c55e;
  --callout-cite-bg-color: rgb(244, 244, 244);
  --callout-cite-text-color: #171717;
  --callout-danger-bg-color: rgb(255, 232, 234);
  --callout-danger-text-color: #ef4444;
  --callout-dogs-ear-size: 2em;
  --callout-done-bg-color: rgb(232, 248, 234);
  --callout-done-text-color: #22c55e;
  --callout-error-bg-color: rgb(255, 232, 234);
  --callout-error-text-color: #ef4444;
  --callout-example-bg-color: rgb(239, 235, 254);
  --callout-example-text-color: #8b5cf6;
  --callout-fail-bg-color: rgb(255, 232, 234);
  --callout-fail-text-color: #ef4444;
  --callout-failure-bg-color: rgb(255, 232, 234);
  --callout-failure-text-color: #ef4444;
  --callout-faq-bg-color: rgb(255, 240, 229);
  --callout-faq-text-color: #eab308;
  --callout-help-bg-color: rgb(255, 240, 229);
  --callout-help-text-color: #eab308;
  --callout-hint-bg-color: rgb(232, 248, 248);
  --callout-hint-text-color: #0ea5e9;
  --callout-important-bg-color: rgb(232, 248, 248);
  --callout-important-text-color: #0ea5e9;
  --callout-info-bg-color: rgb(228, 238, 253);
  --callout-info-text-color: #171717;
  --callout-missing-bg-color: rgb(255, 232, 234);
  --callout-missing-text-color: #ef4444;
  --callout-note--text-color: #171717;
  --callout-note-bg-color: rgb(228, 238, 253);
  --callout-question-bg-color: rgb(255, 240, 229);
  --callout-question-text-color: #eab308;
  --callout-quote-bg-color: rgb(244, 244, 244);
  --callout-quote-text-color: #171717;
  --callout-radius: 0.125em;
  --callout-success-bg-color: rgb(232, 248, 234);
  --callout-success-text-color: #22c55e;
  --callout-tip-bg-color: rgb(232, 248, 248);
  --callout-tip-text-color: #0ea5e9;
  --callout-todo-bg-color: rgb(228, 238, 253);
  --callout-todo-text-color: #0ea5e9;
  --callout-warning-bg-color: rgb(255, 240, 229);
  --callout-warning-text-color: #f97316;
  --canvas-background: #fafafa;
  --canvas-controls-radius: 0.125em;
  --caret-color: #404040;
  --checkbox-border-color: #5c5c5c;
  --checkbox-border-color-hover: #737373;
  --checkbox-checked-color: rgba(26, 26, 26, 0);
  --checkbox-color: #22c55e;
  --checkbox-color-hover: rgba(186, 186, 186, 0.5);
  --checkbox-marker-color: #fafafa;
  --checkbox-radius: 0.125em;
  --checkbox-unchecked-color-hover: rgba(26, 26, 26, 0.5);
  --checklist-decoration-color: #404040;
  --checklist-decoration-line: none;
  --checklist-delete-decoration-color: #e93147;
  --checklist-delete-decoration-line: line-through;
  --checklist-done-color: #737373;
  --checklist-done-decoration-color: #737373;
  --checklist-done-decoration-line: none;
  --clickable-icon-radius: 0.125em;
  --close-button-hover-bg-color: rgba(0, 0, 0, 0.1);
  --code-background: #e5e5e5;
  --code-bg-color: #f5f5f5;
  --code-normal: #404040;
  --code-punctuation: #737373;
  --code-radius: 0.125em;
  --codeFont: var(--font-monospace);
  --collapse-icon-color-collapsed: rgb(26, 26, 26);
  --color-accent: rgb(26, 26, 26);
  --color-accent-1: rgb(26, 26, 26);
  --color-accent-2: rgb(31, 31, 31);
  --color-accent-h1: rgb(26, 26, 26);
  --color-accent-h2: rgb(26, 26, 26);
  --color-accent-h3: rgb(26, 26, 26);
  --color-accent-h4: rgb(26, 26, 26);
  --color-accent-h5: rgb(26, 26, 26);
  --color-accent-h6: rgb(26, 26, 26);
  --color-accent-hsl: 0, 0%, 10%;
  --color-accent-ln10: rgb(0, 0, 0);
  --color-accent-ln15: hsl(0, 0%, -5%);
  --color-accent-ln20: hsl(0, 0%, -10%);
  --color-accent-ln5: rgb(13, 13, 13);
  --color-accent-o10: rgba(26, 26, 26, 0.1);
  --color-accent-o20: rgba(26, 26, 26, 0.2);
  --color-accent-o30: rgba(26, 26, 26, 0.3);
  --color-accent-o40: rgba(26, 26, 26, 0.4);
  --color-accent-o50: rgba(26, 26, 26, 0.5);
  --color-accent-o60: rgba(26, 26, 26, 0.6);
  --color-accent-o70: rgba(26, 26, 26, 0.7);
  --color-accent-o80: rgba(26, 26, 26, 0.8);
  --color-accent-o90: rgba(26, 26, 26, 0.9);
  --color-beige-h: 50;
  --color-beige-l: 91%;
  --color-beige-main: rgb(255, 247, 209);
  --color-beige-s: 100%;
  --color-blue-h: 207;
  --color-blue-l: 73%;
  --color-blue-main: rgb(154, 189, 219);
  --color-blue-s: 47%;
  --color-bw-h: 0;
  --color-bw-s: 0%;
  --color-default-h1: #404040;
  --color-default-h2: #404040;
  --color-default-h3: #404040;
  --color-default-h4: #404040;
  --color-default-h5: #404040;
  --color-default-h6: #404040;
  --color-gradient-h1: rgb(26, 26, 26);
  --color-gradient-h2: rgba(26, 26, 26, 0.95);
  --color-gradient-h3: rgba(26, 26, 26, 0.9);
  --color-gradient-h4: rgba(26, 26, 26, 0.85);
  --color-gradient-h5: rgba(26, 26, 26, 0.8);
  --color-gradient-h6: rgba(26, 26, 26, 0.75);
  --color-h: 0;
  --color-l: 10%;
  --color-main: rgb(26, 26, 26);
  --color-peach-h: 0;
  --color-peach-l: 65%;
  --color-peach-main: rgb(199, 133, 133);
  --color-peach-s: 37%;
  --color-pink-h: 0;
  --color-pink-l: 91%;
  --color-pink-main: rgb(255, 209, 209);
  --color-pink-s: 100%;
  --color-purple-h: 269;
  --color-purple-l: 85%;
  --color-purple-main: rgb(216, 194, 239);
  --color-purple-s: 59%;
  --color-s: 0%;
  --color-sage-h: 88;
  --color-sage-l: 69%;
  --color-sage-main: rgb(177, 194, 158);
  --color-sage-s: 23%;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #d4d4d4;
  --divider-color-hover: rgb(0, 0, 0);
  --dropdown-background-hover: rgb(163 163 163 / 0.2);
  --embed-border-start: 2px solid rgb(0, 0, 0);
  --file-header-background: #fafafa;
  --file-header-background-focused: #fafafa;
  --file-header-font: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --flair-color: #404040;
  --focus-transition-duration: 0.2s;
  --font-default: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-em-color: #404040;
  --font-em-decoration-color: #404040;
  --font-em-decoration-line: none;
  --font-em-decoration-offset: 2px;
  --font-em-decoration-style: solid;
  --font-em-decoration-width: 1px;
  --font-em-size: 1em;
  --font-em-style: italic;
  --font-em-weight: normal;
  --font-file-tree: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-file-tree-size: 0.95em;
  --font-file-tree-weight: 400;
  --font-h1-size: 2.25em;
  --font-h1-weight: normal;
  --font-h2-size: 1.875em;
  --font-h2-weight: normal;
  --font-h3-size: 1.5em;
  --font-h3-weight: normal;
  --font-h4-size: 1.25em;
  --font-h4-weight: normal;
  --font-h5-size: 1.125em;
  --font-h5-weight: normal;
  --font-h6-size: 1em;
  --font-h6-weight: normal;
  --font-header: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-highlight-bg-color: rgb(26, 26, 26);
  --font-highlight-color: #fafafa;
  --font-highlight-decoration-color: #404040;
  --font-highlight-decoration-line: none;
  --font-highlight-decoration-offset: 3px;
  --font-highlight-decoration-style: solid;
  --font-highlight-decoration-width: 2px;
  --font-highlight-size: 1em;
  --font-highlight-style: normal;
  --font-highlight-weight: normal;
  --font-inline-tile-color: #404040;
  --font-inline-title: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-inline-title-size: 2em;
  --font-inline-title-weight: 900;
  --font-interface: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-interface-override: "";
  --font-latex-size: 1em;
  --font-latex-weight: 400;
  --font-mermaid: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-monospace: iawriter-mono, Nitti, Menlo, Courier, monospace;
  --font-monospace-default: iawriter-mono, Nitti, Menlo, Courier, monospace;
  --font-monospace-size: 1em;
  --font-monospace-weight: 400;
  --font-source-view: iawriter-mono, Nitti, Menlo, Courier, monospace;
  --font-source-view-size: 1em;
  --font-source-view-weight: 400;
  --font-strikethrough-color: #737373;
  --font-strikethrough-decoration-color: #737373;
  --font-strikethrough-decoration-line: line-through;
  --font-strikethrough-decoration-style: solid;
  --font-strikethrough-decoration-width: 2px;
  --font-strikethrough-size: 1em;
  --font-strikethrough-style: normal;
  --font-strikethrough-weight: normal;
  --font-strong-color: #171717;
  --font-strong-decoration-color: #171717;
  --font-strong-decoration-line: none;
  --font-strong-decoration-offset: 2px;
  --font-strong-decoration-style: solid;
  --font-strong-decoration-width: 1px;
  --font-strong-size: 1em;
  --font-strong-style: normal;
  --font-strong-weight: 900;
  --font-tag: iawriter-mono, Nitti, Menlo, Courier, monospace;
  --font-tag-size: 1em;
  --font-tag-weight: 400;
  --font-text: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-text-weight: 400;
  --font-underlined-color: #404040;
  --font-underlined-decoration-color: #404040;
  --font-underlined-decoration-line: underline;
  --font-underlined-decoration-offset: 6px;
  --font-underlined-decoration-style: wavy;
  --font-underlined-decoration-width: 2px;
  --font-underlined-size: 1em;
  --font-underlined-weight: normal;
  --font-vault-name: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --font-vault-name-size: 1.25em;
  --font-vault-name-weight: 400;
  --footnote-id-color: #737373;
  --footnote-radius: 0.125em;
  --graph-node: #737373;
  --graph-node-focused: rgb(26, 26, 26);
  --graph-text: #404040;
  --gray: var(--text-muted);
  --h1-color: #404040;
  --h2-color: #404040;
  --h3-color: #404040;
  --h4-color: #404040;
  --h5-color: #404040;
  --h6-color: #404040;
  --headerFont: var(--font-text);
  --highlight: var(--background-modifier-active-hover);
  --icon-color: #737373;
  --icon-color-active: rgb(26, 26, 26);
  --icon-color-focused: rgba(26, 26, 26, 0.8);
  --icon-color-hover: #737373;
  --icon-color-hovering: #171717;
  --inactive-hover-opacity: 0.8;
  --inactive-opacity: 0.3;
  --inline-code-bg-color: rgba(229, 229, 229, 0.5);
  --inline-code-text-color: #525252;
  --inline-title-color: #404040;
  --interactive-accent: rgb(0, 0, 0);
  --interactive-accent-hover: rgb(13, 13, 13);
  --interactive-accent-hsl: 0, 0%, 10%;
  --interactive-hover: rgb(163 163 163 / 0.2);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(13, 13, 13);
  --link-color-hover: rgb(13, 13, 13);
  --link-decoration-color: rgb(13, 13, 13);
  --link-decoration-line: underline;
  --link-decoration-offset: 0.3em;
  --link-decoration-style: solid;
  --link-decoration-thickness: 1px;
  --link-external-color: rgb(13, 13, 13);
  --link-external-color-hover: rgb(13, 13, 13);
  --link-unresolved-color: rgba(26, 26, 26, 0.9);
  --link-unresolved-color-hover: rgb(26, 26, 26);
  --link-unresolved-decoration-color: hsla(rgba(26, 26, 26, 0.9), 0.3);
  --link-unresolved-decoration-color-hover: hsla(rgb(26, 26, 26), 0.3);
  --link-unresolved-decoration-line: underline;
  --link-unresolved-decoration-offset: 0.3em;
  --link-unresolved-decoration-style: dashed;
  --link-unresolved-decoration-width: 1px;
  --list-marker-color-collapsed: rgb(26, 26, 26);
  --list-marker-color-hover: #737373;
  --menu-background: #f5f5f5;
  --metadata-input-font: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --metadata-input-text-color: #404040;
  --metadata-label-font: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif;
  --metadata-label-text-color: #737373;
  --metadata-label-text-color-hover: #737373;
  --metadata-property-box-shadow-focus: 0 0 0 2px #d4d4d4;
  --modal-background: #fafafa;
  --nav-heading-color: #404040;
  --nav-heading-color-collapsed-hover: #737373;
  --nav-heading-color-hover: #404040;
  --nav-item-background-selected: rgba(26, 26, 26, 0.15);
  --nav-item-color: #737373;
  --nav-item-color-active: #404040;
  --nav-item-color-highlighted: rgb(26, 26, 26);
  --nav-item-color-hover: #404040;
  --nav-item-color-selected: #404040;
  --nav-item-radius: 0.125em;
  --nav-tag-color-active: #737373;
  --nav-tag-color-hover: #737373;
  --nav-tag-radius: 0.125em;
  --pdf-background: #fafafa;
  --pdf-page-background: #fafafa;
  --pdf-sidebar-background: #fafafa;
  --pill-color: #737373;
  --pill-color-hover: #404040;
  --pill-color-remove-hover: rgb(26, 26, 26);
  --prompt-background: #fafafa;
  --quote-bg-color: rgba(10, 10, 10, 0.05);
  --radius-s: 0.125em;
  --raised-background: color-mix(in srgb, #fafafa 65%, transparent) linear-gradient(#fafafa, color-mix(in srgb, #fafafa 65%, transparent));
  --ribbon-background: #f5f5f5;
  --ribbon-background-collapsed: #fafafa;
  --search-clear-button-color: #737373;
  --search-icon-color: #737373;
  --search-result-background: #fafafa;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #404040;
  --setting-items-background: #e5e5e5;
  --status-bar-background: #f5f5f5;
  --status-bar-border-color: #d4d4d4;
  --status-bar-text-color: #737373;
  --suggestion-background: #fafafa;
  --switch-inset-shadow-color: rgba(0, 0, 0, 0.2);
  --tab-active-bg-color: #e5e5e5;
  --tab-background-active: #fafafa;
  --tab-bg-color: #f5f5f5;
  --tab-container-background: #f5f5f5;
  --tab-hover-bg-color: #d4d4d4;
  --tab-outline-color: #d4d4d4;
  --tab-radius: 0.125em;
  --tab-switcher-background: #f5f5f5;
  --tab-switcher-menubar-background: linear-gradient(to top, #f5f5f5, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(26, 26, 26);
  --tab-text-color-active: #737373;
  --tab-text-color-focused: #737373;
  --tab-text-color-focused-active: #737373;
  --tab-text-color-focused-active-current: #404040;
  --tab-text-color-focused-highlighted: rgb(26, 26, 26);
  --table-drag-handle-background-active: rgb(0, 0, 0);
  --table-header-color: #404040;
  --table-selection: rgba(26, 26, 26, 0.1);
  --table-selection-border-color: rgb(0, 0, 0);
  --tag-background: rgba(26, 26, 26, 0.1);
  --tag-background-hover: rgba(26, 26, 26, 0.2);
  --tag-border-color: rgba(26, 26, 26, 0.15);
  --tag-border-color-hover: rgba(26, 26, 26, 0.15);
  --tag-color: rgb(26, 26, 26);
  --tag-color-hover: rgb(26, 26, 26);
  --tag-radius: 0em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(26, 26, 26);
  --text-accent-hover: #171717;
  --text-muted: #737373;
  --text-normal: #404040;
  --text-reversed: #fafafa;
  --text-selection: rgb(163 163 163 / 0.2);
  --text-strong: #171717;
  --textHighlight: var(--background-modifier-active-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #f5f5f5;
  --titlebar-background-focused: #d4d4d4;
  --titlebar-isfocused: #ebebeb;
  --titlebar-not-focused: #b3b3b3;
  --titlebar-text-color: #737373;
  --titlebar-text-color-focused: #404040;
  --vault-profile-color: #404040;
  --vault-profile-color-hover: #404040;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(64, 64, 64);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
  color: rgb(64, 64, 64);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 245, 245);
  color: rgb(64, 64, 64);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(212, 212, 212);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  border-left-color: rgb(212, 212, 212);
  color: rgb(64, 64, 64);
}

body div#quartz-root {
  background-color: rgb(250, 250, 250);
  color: rgb(64, 64, 64);
}`,
    typography: `body .page article p > b, b {
  color: rgb(23, 23, 23);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  font-weight: 900;
  outline: rgb(23, 23, 23) none 0px;
  text-decoration: 1px rgb(23, 23, 23);
  text-decoration-color: rgb(23, 23, 23);
  text-decoration-thickness: 1px;
}

body .page article p > em, em {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: 1px rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
  text-decoration-thickness: 1px;
}

body .page article p > i, i {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: 1px rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
  text-decoration-thickness: 1px;
}

body .page article p > strong, strong {
  color: rgb(23, 23, 23);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  font-weight: 900;
  outline: rgb(23, 23, 23) none 0px;
  text-decoration: 1px rgb(23, 23, 23);
  text-decoration-color: rgb(23, 23, 23);
  text-decoration-thickness: 1px;
}

body .text-highlight {
  background-color: rgb(26, 26, 26);
  color: rgb(250, 250, 250);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(250, 250, 250) none 0px;
  text-decoration: 2px rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
  text-decoration-thickness: 2px;
}

body del {
  color: rgb(115, 115, 115);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: line-through 2px rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
  text-decoration-thickness: 2px;
}

body p {
  color: rgb(115, 115, 115);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}`,
    links: `body a.external, footer a {
  color: rgb(13, 13, 13);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(13, 13, 13) none 0px;
  text-decoration: underline 1px rgb(13, 13, 13);
  text-decoration-color: rgb(13, 13, 13);
  text-decoration-thickness: 1px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(13, 13, 13);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(13, 13, 13) none 0px;
  text-decoration: underline 1px rgb(13, 13, 13);
  text-decoration-color: rgb(13, 13, 13);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgba(26, 26, 26, 0.9);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgba(26, 26, 26, 0.9) none 0px;
  text-decoration: underline 1px dashed rgba(26, 26, 26, 0.9);
  text-decoration-color: rgba(26, 26, 26, 0.9);
  text-decoration-style: dashed;
  text-decoration-thickness: 1px;
}`,
    lists: `body dd {
  color: rgb(64, 64, 64);
}

body dt {
  color: rgb(64, 64, 64);
}

body ol > li {
  color: rgb(64, 64, 64);
}

body ol.overflow {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body ul > li {
  color: rgb(64, 64, 64);
}

body ul.overflow {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(13, 13, 13);
  text-decoration: underline 1px rgb(13, 13, 13);
}

body blockquote {
  background-color: rgba(10, 10, 10, 0.05);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  padding-bottom: 20px;
  padding-top: 20px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body table {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  width: 662px;
}

body td {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(115, 115, 115);
  color: rgb(64, 64, 64);
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  vertical-align: middle;
}

body th {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(23, 23, 23);
  font-weight: 400;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  text-align: center;
  vertical-align: middle;
}

body thead {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body tr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 1.75px;
  border-bottom-right-radius: 1.75px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 1.75px;
  border-top-right-radius: 1.75px;
  color: rgb(64, 64, 64);
  font-family: iawriter-mono, Nitti, Menlo, Courier, monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(212, 212, 212);
  border-left-width: 1px;
  border-right-color: rgb(212, 212, 212);
  border-right-width: 1px;
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(212, 212, 212);
  border-left-width: 1px;
  border-right-color: rgb(212, 212, 212);
  border-right-width: 1px;
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(64, 64, 64);
}

body pre > code, pre:has(> code) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(212, 212, 212);
  border-left-width: 1px;
  border-right-color: rgb(212, 212, 212);
  border-right-width: 1px;
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-bottom: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 20px;
}

body pre:has(> code) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(212, 212, 212);
  border-left-width: 1px;
  border-right-color: rgb(212, 212, 212);
  border-right-width: 1px;
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body figcaption {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body figure {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body img {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body video {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    embeds: `body .file-embed {
  background-color: rgb(229, 229, 229);
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
}

body .footnotes {
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

body .transclude {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body .transclude-inner {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}

body input[type=checkbox] {
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  transition: background-color 0.2s, border-color 0.2s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='*'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='-'] {
  color: rgb(233, 49, 71);
  text-decoration: rgb(233, 49, 71);
  text-decoration-color: rgb(233, 49, 71);
}

body li.task-list-item[data-task='/'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='>'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='?'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='I'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='S'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='b'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='c'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='d'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='f'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='i'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='k'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='l'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='p'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='u'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='w'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: color(srgb 1 0.909804 0.917647 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: color(srgb 1 0.909804 0.917647 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: color(srgb 0.937255 0.921569 0.996078 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: color(srgb 1 0.909804 0.917647 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: color(srgb 0.894118 0.933333 0.992157 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: color(srgb 0.894118 0.933333 0.992157 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: color(srgb 1 0.941176 0.898039 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: color(srgb 0.956863 0.956863 0.956863 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: color(srgb 0.909804 0.972549 0.917647 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: color(srgb 0.909804 0.972549 0.972549 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: color(srgb 0.894118 0.933333 0.992157 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: color(srgb 1 0.941176 0.898039 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 1.625px;
  border-bottom-right-radius: 1.625px;
  border-top-left-radius: 1.625px;
  border-top-right-radius: 1.625px;
  color: rgb(64, 64, 64);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom-color: rgba(26, 26, 26, 0.6);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(26, 26, 26, 0.6);
  border-right-color: rgba(26, 26, 26, 0.6);
  border-top-color: rgba(26, 26, 26, 0.6);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(26, 26, 26, 0.6);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(26, 26, 26, 0.6);
  border-right-color: rgba(26, 26, 26, 0.6);
  border-top-color: rgba(26, 26, 26, 0.6);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
  color: rgb(64, 64, 64);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
  color: rgb(64, 64, 64);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(26, 26, 26, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(26, 26, 26, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(26, 26, 26, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(26, 26, 26, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  font-family: iawriter-mono, Nitti, Menlo, Courier, monospace;
}

body a.internal.tag-link::before {
  color: rgb(23, 23, 23);
}

body h1 {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body h2 {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(23, 23, 23);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body h3 {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body h4 {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body h5 {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body h6 {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body hr {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-corner {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-track {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  text-decoration: rgb(64, 64, 64);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  text-decoration: rgb(64, 64, 64);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  text-decoration: rgb(64, 64, 64);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 1.78125px;
  border-bottom-right-radius: 1.78125px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 1.78125px;
  border-top-right-radius: 1.78125px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(23, 23, 23);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
  color: rgb(115, 115, 115);
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 1.5px;
  border-bottom-right-radius: 1.5px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 1.5px;
  border-top-right-radius: 1.5px;
  color: rgb(64, 64, 64);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body footer ul li a {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(64, 64, 64);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body li.section-li > .section .meta {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
}

body ul.section-ul {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
  color: rgb(115, 115, 115);
  cursor: pointer;
}

body .darkmode svg {
  color: rgb(115, 115, 115);
  stroke: rgb(115, 115, 115);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 1.625px;
  border-bottom-right-radius: 1.625px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 1.625px;
  border-top-right-radius: 1.625px;
  color: rgb(115, 115, 115);
}

body .breadcrumb-element p {
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(23, 23, 23);
  border-left-color: rgb(23, 23, 23);
  border-right-color: rgb(23, 23, 23);
  border-top-color: rgb(23, 23, 23);
  color: rgb(23, 23, 23);
}

body .metadata {
  color: rgb(115, 115, 115);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body .navigation-progress {
  background-color: rgb(245, 245, 245);
}

body .page-header h2.page-title {
  color: rgb(23, 23, 23);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body abbr {
  color: rgb(64, 64, 64);
  text-decoration: underline dotted rgb(64, 64, 64);
}

body details {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body input[type=text] {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

body kbd {
  background-color: rgb(229, 229, 229);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 1.75px;
  border-bottom-right-radius: 1.75px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 1.75px;
  border-top-right-radius: 1.75px;
  color: rgb(64, 64, 64);
  font-family: iawriter-mono, Nitti, Menlo, Courier, monospace;
}

body progress {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body sub {
  color: rgb(64, 64, 64);
}

body summary {
  color: rgb(64, 64, 64);
}

body sup {
  color: rgb(64, 64, 64);
}`,
  },
};
