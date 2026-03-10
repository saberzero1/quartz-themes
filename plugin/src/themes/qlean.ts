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
  --accent-color-dark-hue-default: 254 !important;
  --accent-color-dark-lightness-default: 68% !important;
  --accent-color-dark-saturation-default: 80% !important;
  --accent-color-light-hue-default: 254 !important;
  --accent-color-light-lightness-default: 68% !important;
  --accent-color-light-saturation-default: 80% !important;
  --accent-h: 0 !important;
  --accent-l: 90% !important;
  --accent-s: 0% !important;
  --background-color-glass: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-active-hover: #404040 !important;
  --background-modifier-border-focus: #404040 !important;
  --background-modifier-error-rgb: #ef4444 !important;
  --background-primary: #0a0a0a !important;
  --background-primary-alt: #262626 !important;
  --background-secondary: #171717 !important;
  --background-secondary-alt: #404040 !important;
  --bases-cards-background: #0a0a0a !important;
  --bases-cards-cover-background: #262626 !important;
  --bases-embed-border-radius: 0.125em !important;
  --bases-group-heading-property-color: #737373 !important;
  --bases-table-cell-background-active: #0a0a0a !important;
  --bases-table-cell-background-disabled: #262626 !important;
  --bases-table-cell-background-selected: rgba(230, 230, 230, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #404040 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(204, 204, 204) !important;
  --bases-table-container-border-radius: 0.125em !important;
  --bases-table-group-background: #262626 !important;
  --bases-table-header-background: #0a0a0a !important;
  --bases-table-header-color: #737373 !important;
  --bases-table-summary-background: #0a0a0a !important;
  --blockquote-border-color: rgb(204, 204, 204) !important;
  --bodyFont: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --border-color: #404040 !important;
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
  --canvas-background: #0a0a0a !important;
  --canvas-controls-radius: 0.125em !important;
  --caret-color: #d4d4d4 !important;
  --checkbox-border-color: #b3b3b3 !important;
  --checkbox-border-color-hover: #737373 !important;
  --checkbox-checked-color: rgba(230, 230, 230, 0) !important;
  --checkbox-color: #22c55e !important;
  --checkbox-color-hover: rgba(186, 186, 186, 0.5) !important;
  --checkbox-marker-color: #0a0a0a !important;
  --checkbox-radius: 0.125em !important;
  --checkbox-unchecked-color-hover: rgba(230, 230, 230, 0.5) !important;
  --checklist-decoration-color: #d4d4d4 !important;
  --checklist-decoration-line: none !important;
  --checklist-delete-decoration-color: #fb464c !important;
  --checklist-delete-decoration-line: line-through !important;
  --checklist-done-color: #737373 !important;
  --checklist-done-decoration-color: #737373 !important;
  --checklist-done-decoration-line: none !important;
  --clickable-icon-radius: 0.125em !important;
  --close-button-hover-bg-color: rgba(255, 255, 255, 0.1) !important;
  --code-background: #262626 !important;
  --code-bg-color: #171717 !important;
  --code-normal: #d4d4d4 !important;
  --code-punctuation: #737373 !important;
  --code-radius: 0.125em !important;
  --codeFont: iawriter-mono, Nitti, Menlo, Courier, monospace !important;
  --collapse-icon-color-collapsed: rgb(230, 230, 230) !important;
  --color-accent: rgb(230, 230, 230) !important;
  --color-accent-1: rgb(230, 230, 230) !important;
  --color-accent-2: hsl(-5, 0%, 116.1%) !important;
  --color-accent-h1: rgb(230, 230, 230) !important;
  --color-accent-h2: rgb(230, 230, 230) !important;
  --color-accent-h3: rgb(230, 230, 230) !important;
  --color-accent-h4: rgb(230, 230, 230) !important;
  --color-accent-h5: rgb(230, 230, 230) !important;
  --color-accent-h6: rgb(230, 230, 230) !important;
  --color-accent-hsl: 0, 0%, 90% !important;
  --color-accent-ln10: rgb(204, 204, 204) !important;
  --color-accent-ln15: rgb(191, 191, 191) !important;
  --color-accent-ln20: rgb(179, 179, 179) !important;
  --color-accent-ln5: rgb(217, 217, 217) !important;
  --color-accent-o10: rgba(230, 230, 230, 0.1) !important;
  --color-accent-o20: rgba(230, 230, 230, 0.2) !important;
  --color-accent-o30: rgba(230, 230, 230, 0.3) !important;
  --color-accent-o40: rgba(230, 230, 230, 0.4) !important;
  --color-accent-o50: rgba(230, 230, 230, 0.5) !important;
  --color-accent-o60: rgba(230, 230, 230, 0.6) !important;
  --color-accent-o70: rgba(230, 230, 230, 0.7) !important;
  --color-accent-o80: rgba(230, 230, 230, 0.8) !important;
  --color-accent-o90: rgba(230, 230, 230, 0.9) !important;
  --color-beige-h: 50 !important;
  --color-beige-l: 91% !important;
  --color-beige-main: rgb(255, 247, 209) !important;
  --color-beige-s: 100% !important;
  --color-blue-h: 207 !important;
  --color-blue-l: 73% !important;
  --color-blue-main: rgb(154, 189, 219) !important;
  --color-blue-s: 47% !important;
  --color-bw-h: 0 !important;
  --color-bw-s: 0% !important;
  --color-default-h1: #d4d4d4 !important;
  --color-default-h2: #d4d4d4 !important;
  --color-default-h3: #d4d4d4 !important;
  --color-default-h4: #d4d4d4 !important;
  --color-default-h5: #d4d4d4 !important;
  --color-default-h6: #d4d4d4 !important;
  --color-gradient-h1: rgb(230, 230, 230) !important;
  --color-gradient-h2: rgba(230, 230, 230, 0.95) !important;
  --color-gradient-h3: rgba(230, 230, 230, 0.9) !important;
  --color-gradient-h4: rgba(230, 230, 230, 0.85) !important;
  --color-gradient-h5: rgba(230, 230, 230, 0.8) !important;
  --color-gradient-h6: rgba(230, 230, 230, 0.75) !important;
  --color-h: 0 !important;
  --color-l: 90% !important;
  --color-main: rgb(230, 230, 230) !important;
  --color-peach-h: 0 !important;
  --color-peach-l: 65% !important;
  --color-peach-main: rgb(199, 133, 133) !important;
  --color-peach-s: 37% !important;
  --color-pink-h: 0 !important;
  --color-pink-l: 91% !important;
  --color-pink-main: rgb(255, 209, 209) !important;
  --color-pink-s: 100% !important;
  --color-purple-h: 269 !important;
  --color-purple-l: 85% !important;
  --color-purple-main: rgb(216, 194, 239) !important;
  --color-purple-s: 59% !important;
  --color-s: 0% !important;
  --color-sage-h: 88 !important;
  --color-sage-l: 69% !important;
  --color-sage-main: rgb(177, 194, 158) !important;
  --color-sage-s: 23% !important;
  --dark: #d4d4d4 !important;
  --darkgray: #d4d4d4 !important;
  --divider-color: #404040 !important;
  --divider-color-hover: rgb(204, 204, 204) !important;
  --dropdown-background-hover: rgb(163 163 163 / 0.2) !important;
  --embed-border-start: 2px solid rgb(204, 204, 204) !important;
  --file-header-background: #0a0a0a !important;
  --file-header-background-focused: #0a0a0a !important;
  --file-header-font: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --flair-color: #d4d4d4 !important;
  --focus-transition-duration: 0.2s !important;
  --font-default: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-em-color: #d4d4d4 !important;
  --font-em-decoration-color: #d4d4d4 !important;
  --font-em-decoration-line: none !important;
  --font-em-decoration-offset: 2px !important;
  --font-em-decoration-style: solid !important;
  --font-em-decoration-width: 1px !important;
  --font-em-size: 1em !important;
  --font-em-style: italic !important;
  --font-em-weight: normal !important;
  --font-file-tree: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-file-tree-size: 0.95em !important;
  --font-file-tree-weight: 400 !important;
  --font-h1-size: 2.25em !important;
  --font-h1-weight: normal !important;
  --font-h2-size: 1.875em !important;
  --font-h2-weight: normal !important;
  --font-h3-size: 1.5em !important;
  --font-h3-weight: normal !important;
  --font-h4-size: 1.25em !important;
  --font-h4-weight: normal !important;
  --font-h5-size: 1.125em !important;
  --font-h5-weight: normal !important;
  --font-h6-size: 1em !important;
  --font-h6-weight: normal !important;
  --font-header: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-highlight-bg-color: rgb(230, 230, 230) !important;
  --font-highlight-color: #0a0a0a !important;
  --font-highlight-decoration-color: #d4d4d4 !important;
  --font-highlight-decoration-line: none !important;
  --font-highlight-decoration-offset: 3px !important;
  --font-highlight-decoration-style: solid !important;
  --font-highlight-decoration-width: 2px !important;
  --font-highlight-size: 1em !important;
  --font-highlight-style: normal !important;
  --font-highlight-weight: normal !important;
  --font-inline-tile-color: #d4d4d4 !important;
  --font-inline-title: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-inline-title-size: 2em !important;
  --font-inline-title-weight: 900 !important;
  --font-interface: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-interface-override: "" !important;
  --font-latex-size: 1em !important;
  --font-latex-weight: 400 !important;
  --font-mermaid: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-monospace: iawriter-mono, Nitti, Menlo, Courier, monospace !important;
  --font-monospace-default: iawriter-mono, Nitti, Menlo, Courier, monospace !important;
  --font-monospace-size: 1em !important;
  --font-monospace-weight: 400 !important;
  --font-source-view: iawriter-mono, Nitti, Menlo, Courier, monospace !important;
  --font-source-view-size: 1em !important;
  --font-source-view-weight: 400 !important;
  --font-strikethrough-color: #737373 !important;
  --font-strikethrough-decoration-color: #737373 !important;
  --font-strikethrough-decoration-line: line-through !important;
  --font-strikethrough-decoration-style: solid !important;
  --font-strikethrough-decoration-width: 2px !important;
  --font-strikethrough-size: 1em !important;
  --font-strikethrough-style: normal !important;
  --font-strikethrough-weight: normal !important;
  --font-strong-color: #f5f5f5 !important;
  --font-strong-decoration-color: #f5f5f5 !important;
  --font-strong-decoration-line: none !important;
  --font-strong-decoration-offset: 2px !important;
  --font-strong-decoration-style: solid !important;
  --font-strong-decoration-width: 1px !important;
  --font-strong-size: 1em !important;
  --font-strong-style: normal !important;
  --font-strong-weight: 900 !important;
  --font-tag: iawriter-mono, Nitti, Menlo, Courier, monospace !important;
  --font-tag-size: 1em !important;
  --font-tag-weight: 400 !important;
  --font-text: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-text-weight: 400 !important;
  --font-underlined-color: #d4d4d4 !important;
  --font-underlined-decoration-color: #d4d4d4 !important;
  --font-underlined-decoration-line: underline !important;
  --font-underlined-decoration-offset: 6px !important;
  --font-underlined-decoration-style: wavy !important;
  --font-underlined-decoration-width: 2px !important;
  --font-underlined-size: 1em !important;
  --font-underlined-weight: normal !important;
  --font-vault-name: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-vault-name-size: 1.25em !important;
  --font-vault-name-weight: 400 !important;
  --footnote-id-color: #737373 !important;
  --footnote-radius: 0.125em !important;
  --graph-node: #737373 !important;
  --graph-node-focused: rgb(230, 230, 230) !important;
  --graph-text: #d4d4d4 !important;
  --gray: #737373 !important;
  --h1-color: #d4d4d4 !important;
  --h2-color: #d4d4d4 !important;
  --h3-color: #d4d4d4 !important;
  --h4-color: #d4d4d4 !important;
  --h5-color: #d4d4d4 !important;
  --h6-color: #d4d4d4 !important;
  --headerFont: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --highlight: #404040 !important;
  --icon-color: #737373 !important;
  --icon-color-active: rgb(230, 230, 230) !important;
  --icon-color-focused: rgba(230, 230, 230, 0.8) !important;
  --icon-color-hover: #737373 !important;
  --icon-color-hovering: #f5f5f5 !important;
  --inactive-hover-opacity: 0.8 !important;
  --inactive-opacity: 0.3 !important;
  --inline-code-bg-color: rgba(38, 38, 38, 0.5) !important;
  --inline-code-text-color: #a3a3a3 !important;
  --inline-title-color: #d4d4d4 !important;
  --interactive-accent: rgb(204, 204, 204) !important;
  --interactive-accent-hover: rgb(217, 217, 217) !important;
  --interactive-accent-hsl: 0, 0%, 90% !important;
  --interactive-hover: rgb(163 163 163 / 0.2) !important;
  --light: #0a0a0a !important;
  --lightgray: #171717 !important;
  --link-color: rgb(217, 217, 217) !important;
  --link-color-hover: rgb(217, 217, 217) !important;
  --link-decoration-color: rgb(217, 217, 217) !important;
  --link-decoration-line: underline !important;
  --link-decoration-offset: 0.3em !important;
  --link-decoration-style: solid !important;
  --link-decoration-thickness: 1px !important;
  --link-external-color: rgb(217, 217, 217) !important;
  --link-external-color-hover: rgb(217, 217, 217) !important;
  --link-unresolved-color: rgba(230, 230, 230, 0.9) !important;
  --link-unresolved-color-hover: rgb(230, 230, 230) !important;
  --link-unresolved-decoration-color: hsla(rgba(230, 230, 230, 0.9), 0.3) !important;
  --link-unresolved-decoration-color-hover: hsla(rgb(230, 230, 230), 0.3) !important;
  --link-unresolved-decoration-line: underline !important;
  --link-unresolved-decoration-offset: 0.3em !important;
  --link-unresolved-decoration-style: dashed !important;
  --link-unresolved-decoration-width: 1px !important;
  --list-marker-color-collapsed: rgb(230, 230, 230) !important;
  --list-marker-color-hover: #737373 !important;
  --menu-background: #171717 !important;
  --metadata-input-font: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --metadata-input-text-color: #d4d4d4 !important;
  --metadata-label-font: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --metadata-label-text-color: #737373 !important;
  --metadata-label-text-color-hover: #737373 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #404040 !important;
  --modal-background: #0a0a0a !important;
  --nav-heading-color: #d4d4d4 !important;
  --nav-heading-color-collapsed-hover: #737373 !important;
  --nav-heading-color-hover: #d4d4d4 !important;
  --nav-item-background-selected: rgba(230, 230, 230, 0.15) !important;
  --nav-item-color: #737373 !important;
  --nav-item-color-active: #d4d4d4 !important;
  --nav-item-color-highlighted: rgb(230, 230, 230) !important;
  --nav-item-color-hover: #d4d4d4 !important;
  --nav-item-color-selected: #d4d4d4 !important;
  --nav-item-radius: 0.125em !important;
  --nav-tag-color-active: #737373 !important;
  --nav-tag-color-hover: #737373 !important;
  --nav-tag-radius: 0.125em !important;
  --pdf-background: #0a0a0a !important;
  --pdf-page-background: #0a0a0a !important;
  --pdf-sidebar-background: #0a0a0a !important;
  --pill-color: #737373 !important;
  --pill-color-hover: #d4d4d4 !important;
  --pill-color-remove-hover: rgb(230, 230, 230) !important;
  --prompt-background: #0a0a0a !important;
  --quote-bg-color: rgba(250, 250, 250, 0.05) !important;
  --radius-s: 0.125em !important;
  --ribbon-background: #171717 !important;
  --ribbon-background-collapsed: #0a0a0a !important;
  --search-clear-button-color: #737373 !important;
  --search-icon-color: #737373 !important;
  --search-result-background: #0a0a0a !important;
  --secondary: rgb(230, 230, 230) !important;
  --setting-group-heading-color: #d4d4d4 !important;
  --setting-items-background: #262626 !important;
  --status-bar-background: #171717 !important;
  --status-bar-border-color: #404040 !important;
  --status-bar-text-color: #737373 !important;
  --suggestion-background: #0a0a0a !important;
  --switch-inset-shadow-color: rgba(0, 0, 0, 0.2) !important;
  --tab-active-bg-color: #262626 !important;
  --tab-background-active: #0a0a0a !important;
  --tab-bg-color: #171717 !important;
  --tab-container-background: #171717 !important;
  --tab-hover-bg-color: #404040 !important;
  --tab-outline-color: #404040 !important;
  --tab-radius: 0.125em !important;
  --tab-switcher-background: #171717 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #171717, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(230, 230, 230) !important;
  --tab-text-color-active: #737373 !important;
  --tab-text-color-focused: #737373 !important;
  --tab-text-color-focused-active: #737373 !important;
  --tab-text-color-focused-active-current: #d4d4d4 !important;
  --tab-text-color-focused-highlighted: rgb(230, 230, 230) !important;
  --table-drag-handle-background-active: rgb(204, 204, 204) !important;
  --table-header-color: #d4d4d4 !important;
  --table-selection: rgba(230, 230, 230, 0.1) !important;
  --table-selection-border-color: rgb(204, 204, 204) !important;
  --tag-background: rgba(230, 230, 230, 0.1) !important;
  --tag-background-hover: rgba(230, 230, 230, 0.2) !important;
  --tag-border-color: rgba(230, 230, 230, 0.15) !important;
  --tag-border-color-hover: rgba(230, 230, 230, 0.15) !important;
  --tag-color: rgb(230, 230, 230) !important;
  --tag-color-hover: rgb(230, 230, 230) !important;
  --tag-radius: 0em !important;
  --tertiary: #f5f5f5 !important;
  --text-accent: rgb(230, 230, 230) !important;
  --text-accent-hover: #f5f5f5 !important;
  --text-muted: #737373 !important;
  --text-normal: #d4d4d4 !important;
  --text-reversed: #0a0a0a !important;
  --text-selection: rgb(163 163 163 / 0.2) !important;
  --text-strong: #f5f5f5 !important;
  --textHighlight: #404040 !important;
  --titleFont: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --titlebar-background: #171717 !important;
  --titlebar-background-focused: #404040 !important;
  --titlebar-isfocused: #171514 !important;
  --titlebar-not-focused: #4c4c4d !important;
  --titlebar-text-color: #737373 !important;
  --titlebar-text-color-focused: #d4d4d4 !important;
  --vault-profile-color: #d4d4d4 !important;
  --vault-profile-color-hover: #d4d4d4 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(23, 23, 23);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 23, 23);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 64, 64);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(23, 23, 23);
  border-left-color: rgb(64, 64, 64);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(245, 245, 245);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  font-weight: 900;
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: 1px rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: 1px rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: 1px rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(245, 245, 245);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  font-weight: 900;
  outline: rgb(245, 245, 245) none 0px;
  text-decoration: 1px rgb(245, 245, 245);
  text-decoration-color: rgb(245, 245, 245);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(230, 230, 230);
  color: rgb(10, 10, 10);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(10, 10, 10) none 0px;
  text-decoration: 2px rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body del {
  color: rgb(115, 115, 115);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: line-through 2px rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body p {
  color: rgb(115, 115, 115);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(217, 217, 217);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: underline 1px rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(217, 217, 217);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: underline 1px rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgba(230, 230, 230, 0.9);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgba(230, 230, 230, 0.9) none 0px;
  text-decoration: underline 1px dashed rgba(230, 230, 230, 0.9);
  text-decoration-color: rgba(230, 230, 230, 0.9);
  text-decoration-style: dashed;
  text-decoration-thickness: 1px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body dt {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(217, 217, 217);
  text-decoration: underline 1px rgb(217, 217, 217);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(250, 250, 250, 0.05);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  padding-bottom: 20px;
  padding-top: 20px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  width: 662px;
}

html[saved-theme="dark"] body td {
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

html[saved-theme="dark"] body th {
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

html[saved-theme="dark"] body thead {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `html[saved-theme="dark"] body code {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body input[type=checkbox] {
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

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(251, 70, 76);
  text-decoration: rgb(251, 70, 76);
  text-decoration-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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

html[saved-theme="dark"] body .callout[data-callout="bug"] {
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
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

html[saved-theme="dark"] body .callout[data-callout="example"] {
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

html[saved-theme="dark"] body .callout[data-callout="failure"] {
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
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

html[saved-theme="dark"] body .callout[data-callout="question"] {
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

html[saved-theme="dark"] body .callout[data-callout="quote"] {
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
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

html[saved-theme="dark"] body .callout[data-callout="tip"] {
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

html[saved-theme="dark"] body .callout[data-callout="todo"] {
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

html[saved-theme="dark"] body .callout[data-callout="warning"] {
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
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-left-radius: 1.625px;
  border-bottom-right-radius: 1.625px;
  border-top-left-radius: 1.625px;
  border-top-right-radius: 1.625px;
  color: rgb(212, 212, 212);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(230, 230, 230, 0.6);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(230, 230, 230, 0.6);
  border-right-color: rgba(230, 230, 230, 0.6);
  border-top-color: rgba(230, 230, 230, 0.6);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body h1 {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(245, 245, 245);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
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

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  text-decoration: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  text-decoration: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  text-decoration: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body footer ul li a {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(212, 212, 212);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
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

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(115, 115, 115);
  stroke: rgb(115, 115, 115);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
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

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(115, 115, 115);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(23, 23, 23);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(245, 245, 245);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(212, 212, 212);
  text-decoration: underline dotted rgb(212, 212, 212);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body sub {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body summary {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body sup {
  color: rgb(212, 212, 212);
}`,
  },
  light: {
    base: `:root:root {
  --accent-color-dark-hue-default: 254 !important;
  --accent-color-dark-lightness-default: 68% !important;
  --accent-color-dark-saturation-default: 80% !important;
  --accent-color-light-hue-default: 254 !important;
  --accent-color-light-lightness-default: 68% !important;
  --accent-color-light-saturation-default: 80% !important;
  --accent-h: 0 !important;
  --accent-l: 10% !important;
  --accent-s: 0% !important;
  --background-color-glass: rgba(255, 255, 255, 0.8) !important;
  --background-modifier-active-hover: #d4d4d4 !important;
  --background-modifier-border-focus: #d4d4d4 !important;
  --background-modifier-error-rgb: #ef4444 !important;
  --background-primary: #fafafa !important;
  --background-primary-alt: #e5e5e5 !important;
  --background-secondary: #f5f5f5 !important;
  --background-secondary-alt: #d4d4d4 !important;
  --bases-cards-background: #fafafa !important;
  --bases-cards-cover-background: #e5e5e5 !important;
  --bases-embed-border-radius: 0.125em !important;
  --bases-group-heading-property-color: #737373 !important;
  --bases-table-cell-background-active: #fafafa !important;
  --bases-table-cell-background-disabled: #e5e5e5 !important;
  --bases-table-cell-background-selected: rgba(26, 26, 26, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #d4d4d4 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 0, 0) !important;
  --bases-table-container-border-radius: 0.125em !important;
  --bases-table-group-background: #e5e5e5 !important;
  --bases-table-header-background: #fafafa !important;
  --bases-table-header-color: #737373 !important;
  --bases-table-summary-background: #fafafa !important;
  --blockquote-border-color: rgb(0, 0, 0) !important;
  --blur-background: color-mix(in srgb, #fafafa 65%, transparent) linear-gradient(#fafafa, color-mix(in srgb, #fafafa 65%, transparent)) !important;
  --bodyFont: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --border-color: #d4d4d4 !important;
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
  --canvas-background: #fafafa !important;
  --canvas-controls-radius: 0.125em !important;
  --caret-color: #404040 !important;
  --checkbox-border-color: #5c5c5c !important;
  --checkbox-border-color-hover: #737373 !important;
  --checkbox-checked-color: rgba(26, 26, 26, 0) !important;
  --checkbox-color: #22c55e !important;
  --checkbox-color-hover: rgba(186, 186, 186, 0.5) !important;
  --checkbox-marker-color: #fafafa !important;
  --checkbox-radius: 0.125em !important;
  --checkbox-unchecked-color-hover: rgba(26, 26, 26, 0.5) !important;
  --checklist-decoration-color: #404040 !important;
  --checklist-decoration-line: none !important;
  --checklist-delete-decoration-color: #e93147 !important;
  --checklist-delete-decoration-line: line-through !important;
  --checklist-done-color: #737373 !important;
  --checklist-done-decoration-color: #737373 !important;
  --checklist-done-decoration-line: none !important;
  --clickable-icon-radius: 0.125em !important;
  --close-button-hover-bg-color: rgba(0, 0, 0, 0.1) !important;
  --code-background: #e5e5e5 !important;
  --code-bg-color: #f5f5f5 !important;
  --code-normal: #404040 !important;
  --code-punctuation: #737373 !important;
  --code-radius: 0.125em !important;
  --codeFont: iawriter-mono, Nitti, Menlo, Courier, monospace !important;
  --collapse-icon-color-collapsed: rgb(26, 26, 26) !important;
  --color-accent: rgb(26, 26, 26) !important;
  --color-accent-1: rgb(26, 26, 26) !important;
  --color-accent-2: rgb(31, 31, 31) !important;
  --color-accent-h1: rgb(26, 26, 26) !important;
  --color-accent-h2: rgb(26, 26, 26) !important;
  --color-accent-h3: rgb(26, 26, 26) !important;
  --color-accent-h4: rgb(26, 26, 26) !important;
  --color-accent-h5: rgb(26, 26, 26) !important;
  --color-accent-h6: rgb(26, 26, 26) !important;
  --color-accent-hsl: 0, 0%, 10% !important;
  --color-accent-ln10: rgb(0, 0, 0) !important;
  --color-accent-ln15: hsl(0, 0%, -5%) !important;
  --color-accent-ln20: hsl(0, 0%, -10%) !important;
  --color-accent-ln5: rgb(13, 13, 13) !important;
  --color-accent-o10: rgba(26, 26, 26, 0.1) !important;
  --color-accent-o20: rgba(26, 26, 26, 0.2) !important;
  --color-accent-o30: rgba(26, 26, 26, 0.3) !important;
  --color-accent-o40: rgba(26, 26, 26, 0.4) !important;
  --color-accent-o50: rgba(26, 26, 26, 0.5) !important;
  --color-accent-o60: rgba(26, 26, 26, 0.6) !important;
  --color-accent-o70: rgba(26, 26, 26, 0.7) !important;
  --color-accent-o80: rgba(26, 26, 26, 0.8) !important;
  --color-accent-o90: rgba(26, 26, 26, 0.9) !important;
  --color-beige-h: 50 !important;
  --color-beige-l: 91% !important;
  --color-beige-main: rgb(255, 247, 209) !important;
  --color-beige-s: 100% !important;
  --color-blue-h: 207 !important;
  --color-blue-l: 73% !important;
  --color-blue-main: rgb(154, 189, 219) !important;
  --color-blue-s: 47% !important;
  --color-bw-h: 0 !important;
  --color-bw-s: 0% !important;
  --color-default-h1: #404040 !important;
  --color-default-h2: #404040 !important;
  --color-default-h3: #404040 !important;
  --color-default-h4: #404040 !important;
  --color-default-h5: #404040 !important;
  --color-default-h6: #404040 !important;
  --color-gradient-h1: rgb(26, 26, 26) !important;
  --color-gradient-h2: rgba(26, 26, 26, 0.95) !important;
  --color-gradient-h3: rgba(26, 26, 26, 0.9) !important;
  --color-gradient-h4: rgba(26, 26, 26, 0.85) !important;
  --color-gradient-h5: rgba(26, 26, 26, 0.8) !important;
  --color-gradient-h6: rgba(26, 26, 26, 0.75) !important;
  --color-h: 0 !important;
  --color-l: 10% !important;
  --color-main: rgb(26, 26, 26) !important;
  --color-peach-h: 0 !important;
  --color-peach-l: 65% !important;
  --color-peach-main: rgb(199, 133, 133) !important;
  --color-peach-s: 37% !important;
  --color-pink-h: 0 !important;
  --color-pink-l: 91% !important;
  --color-pink-main: rgb(255, 209, 209) !important;
  --color-pink-s: 100% !important;
  --color-purple-h: 269 !important;
  --color-purple-l: 85% !important;
  --color-purple-main: rgb(216, 194, 239) !important;
  --color-purple-s: 59% !important;
  --color-s: 0% !important;
  --color-sage-h: 88 !important;
  --color-sage-l: 69% !important;
  --color-sage-main: rgb(177, 194, 158) !important;
  --color-sage-s: 23% !important;
  --dark: #404040 !important;
  --darkgray: #404040 !important;
  --divider-color: #d4d4d4 !important;
  --divider-color-hover: rgb(0, 0, 0) !important;
  --dropdown-background-hover: rgb(163 163 163 / 0.2) !important;
  --embed-border-start: 2px solid rgb(0, 0, 0) !important;
  --file-header-background: #fafafa !important;
  --file-header-background-focused: #fafafa !important;
  --file-header-font: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --flair-color: #404040 !important;
  --focus-transition-duration: 0.2s !important;
  --font-default: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-em-color: #404040 !important;
  --font-em-decoration-color: #404040 !important;
  --font-em-decoration-line: none !important;
  --font-em-decoration-offset: 2px !important;
  --font-em-decoration-style: solid !important;
  --font-em-decoration-width: 1px !important;
  --font-em-size: 1em !important;
  --font-em-style: italic !important;
  --font-em-weight: normal !important;
  --font-file-tree: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-file-tree-size: 0.95em !important;
  --font-file-tree-weight: 400 !important;
  --font-h1-size: 2.25em !important;
  --font-h1-weight: normal !important;
  --font-h2-size: 1.875em !important;
  --font-h2-weight: normal !important;
  --font-h3-size: 1.5em !important;
  --font-h3-weight: normal !important;
  --font-h4-size: 1.25em !important;
  --font-h4-weight: normal !important;
  --font-h5-size: 1.125em !important;
  --font-h5-weight: normal !important;
  --font-h6-size: 1em !important;
  --font-h6-weight: normal !important;
  --font-header: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-highlight-bg-color: rgb(26, 26, 26) !important;
  --font-highlight-color: #fafafa !important;
  --font-highlight-decoration-color: #404040 !important;
  --font-highlight-decoration-line: none !important;
  --font-highlight-decoration-offset: 3px !important;
  --font-highlight-decoration-style: solid !important;
  --font-highlight-decoration-width: 2px !important;
  --font-highlight-size: 1em !important;
  --font-highlight-style: normal !important;
  --font-highlight-weight: normal !important;
  --font-inline-tile-color: #404040 !important;
  --font-inline-title: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-inline-title-size: 2em !important;
  --font-inline-title-weight: 900 !important;
  --font-interface: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-interface-override: "" !important;
  --font-latex-size: 1em !important;
  --font-latex-weight: 400 !important;
  --font-mermaid: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-monospace: iawriter-mono, Nitti, Menlo, Courier, monospace !important;
  --font-monospace-default: iawriter-mono, Nitti, Menlo, Courier, monospace !important;
  --font-monospace-size: 1em !important;
  --font-monospace-weight: 400 !important;
  --font-source-view: iawriter-mono, Nitti, Menlo, Courier, monospace !important;
  --font-source-view-size: 1em !important;
  --font-source-view-weight: 400 !important;
  --font-strikethrough-color: #737373 !important;
  --font-strikethrough-decoration-color: #737373 !important;
  --font-strikethrough-decoration-line: line-through !important;
  --font-strikethrough-decoration-style: solid !important;
  --font-strikethrough-decoration-width: 2px !important;
  --font-strikethrough-size: 1em !important;
  --font-strikethrough-style: normal !important;
  --font-strikethrough-weight: normal !important;
  --font-strong-color: #171717 !important;
  --font-strong-decoration-color: #171717 !important;
  --font-strong-decoration-line: none !important;
  --font-strong-decoration-offset: 2px !important;
  --font-strong-decoration-style: solid !important;
  --font-strong-decoration-width: 1px !important;
  --font-strong-size: 1em !important;
  --font-strong-style: normal !important;
  --font-strong-weight: 900 !important;
  --font-tag: iawriter-mono, Nitti, Menlo, Courier, monospace !important;
  --font-tag-size: 1em !important;
  --font-tag-weight: 400 !important;
  --font-text: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-text-weight: 400 !important;
  --font-underlined-color: #404040 !important;
  --font-underlined-decoration-color: #404040 !important;
  --font-underlined-decoration-line: underline !important;
  --font-underlined-decoration-offset: 6px !important;
  --font-underlined-decoration-style: wavy !important;
  --font-underlined-decoration-width: 2px !important;
  --font-underlined-size: 1em !important;
  --font-underlined-weight: normal !important;
  --font-vault-name: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --font-vault-name-size: 1.25em !important;
  --font-vault-name-weight: 400 !important;
  --footnote-id-color: #737373 !important;
  --footnote-radius: 0.125em !important;
  --graph-node: #737373 !important;
  --graph-node-focused: rgb(26, 26, 26) !important;
  --graph-text: #404040 !important;
  --gray: #737373 !important;
  --h1-color: #404040 !important;
  --h2-color: #404040 !important;
  --h3-color: #404040 !important;
  --h4-color: #404040 !important;
  --h5-color: #404040 !important;
  --h6-color: #404040 !important;
  --headerFont: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --highlight: #d4d4d4 !important;
  --icon-color: #737373 !important;
  --icon-color-active: rgb(26, 26, 26) !important;
  --icon-color-focused: rgba(26, 26, 26, 0.8) !important;
  --icon-color-hover: #737373 !important;
  --icon-color-hovering: #171717 !important;
  --inactive-hover-opacity: 0.8 !important;
  --inactive-opacity: 0.3 !important;
  --inline-code-bg-color: rgba(229, 229, 229, 0.5) !important;
  --inline-code-text-color: #525252 !important;
  --inline-title-color: #404040 !important;
  --interactive-accent: rgb(0, 0, 0) !important;
  --interactive-accent-hover: rgb(13, 13, 13) !important;
  --interactive-accent-hsl: 0, 0%, 10% !important;
  --interactive-hover: rgb(163 163 163 / 0.2) !important;
  --light: #fafafa !important;
  --lightgray: #f5f5f5 !important;
  --link-color: rgb(13, 13, 13) !important;
  --link-color-hover: rgb(13, 13, 13) !important;
  --link-decoration-color: rgb(13, 13, 13) !important;
  --link-decoration-line: underline !important;
  --link-decoration-offset: 0.3em !important;
  --link-decoration-style: solid !important;
  --link-decoration-thickness: 1px !important;
  --link-external-color: rgb(13, 13, 13) !important;
  --link-external-color-hover: rgb(13, 13, 13) !important;
  --link-unresolved-color: rgba(26, 26, 26, 0.9) !important;
  --link-unresolved-color-hover: rgb(26, 26, 26) !important;
  --link-unresolved-decoration-color: hsla(rgba(26, 26, 26, 0.9), 0.3) !important;
  --link-unresolved-decoration-color-hover: hsla(rgb(26, 26, 26), 0.3) !important;
  --link-unresolved-decoration-line: underline !important;
  --link-unresolved-decoration-offset: 0.3em !important;
  --link-unresolved-decoration-style: dashed !important;
  --link-unresolved-decoration-width: 1px !important;
  --list-marker-color-collapsed: rgb(26, 26, 26) !important;
  --list-marker-color-hover: #737373 !important;
  --menu-background: #f5f5f5 !important;
  --metadata-input-font: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --metadata-input-text-color: #404040 !important;
  --metadata-label-font: "", '??', '??', "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --metadata-label-text-color: #737373 !important;
  --metadata-label-text-color-hover: #737373 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #d4d4d4 !important;
  --modal-background: #fafafa !important;
  --nav-heading-color: #404040 !important;
  --nav-heading-color-collapsed-hover: #737373 !important;
  --nav-heading-color-hover: #404040 !important;
  --nav-item-background-selected: rgba(26, 26, 26, 0.15) !important;
  --nav-item-color: #737373 !important;
  --nav-item-color-active: #404040 !important;
  --nav-item-color-highlighted: rgb(26, 26, 26) !important;
  --nav-item-color-hover: #404040 !important;
  --nav-item-color-selected: #404040 !important;
  --nav-item-radius: 0.125em !important;
  --nav-tag-color-active: #737373 !important;
  --nav-tag-color-hover: #737373 !important;
  --nav-tag-radius: 0.125em !important;
  --pdf-background: #fafafa !important;
  --pdf-page-background: #fafafa !important;
  --pdf-sidebar-background: #fafafa !important;
  --pill-color: #737373 !important;
  --pill-color-hover: #404040 !important;
  --pill-color-remove-hover: rgb(26, 26, 26) !important;
  --prompt-background: #fafafa !important;
  --quote-bg-color: rgba(10, 10, 10, 0.05) !important;
  --radius-s: 0.125em !important;
  --raised-background: color-mix(in srgb, #fafafa 65%, transparent) linear-gradient(#fafafa, color-mix(in srgb, #fafafa 65%, transparent)) !important;
  --ribbon-background: #f5f5f5 !important;
  --ribbon-background-collapsed: #fafafa !important;
  --search-clear-button-color: #737373 !important;
  --search-icon-color: #737373 !important;
  --search-result-background: #fafafa !important;
  --secondary: rgb(26, 26, 26) !important;
  --setting-group-heading-color: #404040 !important;
  --setting-items-background: #e5e5e5 !important;
  --status-bar-background: #f5f5f5 !important;
  --status-bar-border-color: #d4d4d4 !important;
  --status-bar-text-color: #737373 !important;
  --suggestion-background: #fafafa !important;
  --switch-inset-shadow-color: rgba(0, 0, 0, 0.2) !important;
  --tab-active-bg-color: #e5e5e5 !important;
  --tab-background-active: #fafafa !important;
  --tab-bg-color: #f5f5f5 !important;
  --tab-container-background: #f5f5f5 !important;
  --tab-hover-bg-color: #d4d4d4 !important;
  --tab-outline-color: #d4d4d4 !important;
  --tab-radius: 0.125em !important;
  --tab-switcher-background: #f5f5f5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f5f5f5, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(26, 26, 26) !important;
  --tab-text-color-active: #737373 !important;
  --tab-text-color-focused: #737373 !important;
  --tab-text-color-focused-active: #737373 !important;
  --tab-text-color-focused-active-current: #404040 !important;
  --tab-text-color-focused-highlighted: rgb(26, 26, 26) !important;
  --table-drag-handle-background-active: rgb(0, 0, 0) !important;
  --table-header-color: #404040 !important;
  --table-selection: rgba(26, 26, 26, 0.1) !important;
  --table-selection-border-color: rgb(0, 0, 0) !important;
  --tag-background: rgba(26, 26, 26, 0.1) !important;
  --tag-background-hover: rgba(26, 26, 26, 0.2) !important;
  --tag-border-color: rgba(26, 26, 26, 0.15) !important;
  --tag-border-color-hover: rgba(26, 26, 26, 0.15) !important;
  --tag-color: rgb(26, 26, 26) !important;
  --tag-color-hover: rgb(26, 26, 26) !important;
  --tag-radius: 0em !important;
  --tertiary: #171717 !important;
  --text-accent: rgb(26, 26, 26) !important;
  --text-accent-hover: #171717 !important;
  --text-muted: #737373 !important;
  --text-normal: #404040 !important;
  --text-reversed: #fafafa !important;
  --text-selection: rgb(163 163 163 / 0.2) !important;
  --text-strong: #171717 !important;
  --textHighlight: #d4d4d4 !important;
  --titleFont: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --titlebar-background: #f5f5f5 !important;
  --titlebar-background-focused: #d4d4d4 !important;
  --titlebar-isfocused: #ebebeb !important;
  --titlebar-not-focused: #b3b3b3 !important;
  --titlebar-text-color: #737373 !important;
  --titlebar-text-color-focused: #404040 !important;
  --vault-profile-color: #404040 !important;
  --vault-profile-color-hover: #404040 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 245, 245);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(212, 212, 212);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  border-left-color: rgb(212, 212, 212);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 250, 250);
  color: rgb(64, 64, 64);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(23, 23, 23);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  font-weight: 900;
  outline: rgb(23, 23, 23) none 0px;
  text-decoration: 1px rgb(23, 23, 23);
  text-decoration-color: rgb(23, 23, 23);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: 1px rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: 1px rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(23, 23, 23);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  font-weight: 900;
  outline: rgb(23, 23, 23) none 0px;
  text-decoration: 1px rgb(23, 23, 23);
  text-decoration-color: rgb(23, 23, 23);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(26, 26, 26);
  color: rgb(250, 250, 250);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(250, 250, 250) none 0px;
  text-decoration: 2px rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body del {
  color: rgb(115, 115, 115);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: line-through 2px rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body p {
  color: rgb(115, 115, 115);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(13, 13, 13);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(13, 13, 13) none 0px;
  text-decoration: underline 1px rgb(13, 13, 13);
  text-decoration-color: rgb(13, 13, 13);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(13, 13, 13);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(13, 13, 13) none 0px;
  text-decoration: underline 1px rgb(13, 13, 13);
  text-decoration-color: rgb(13, 13, 13);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgba(26, 26, 26, 0.9);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgba(26, 26, 26, 0.9) none 0px;
  text-decoration: underline 1px dashed rgba(26, 26, 26, 0.9);
  text-decoration-color: rgba(26, 26, 26, 0.9);
  text-decoration-style: dashed;
  text-decoration-thickness: 1px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body dt {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ol > li {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ol.overflow {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul > li {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(13, 13, 13);
  text-decoration: underline 1px rgb(13, 13, 13);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(10, 10, 10, 0.05);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  padding-bottom: 20px;
  padding-top: 20px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  width: 662px;
}

html[saved-theme="light"] body td {
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

html[saved-theme="light"] body th {
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

html[saved-theme="light"] body thead {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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

html[saved-theme="light"] body pre:has(> code) {
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
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body figcaption {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(229, 229, 229);
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}

html[saved-theme="light"] body input[type=checkbox] {
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

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(233, 49, 71);
  text-decoration: rgb(233, 49, 71);
  text-decoration-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
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

html[saved-theme="light"] body .callout[data-callout="bug"] {
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
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

html[saved-theme="light"] body .callout[data-callout="example"] {
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
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

html[saved-theme="light"] body .callout[data-callout="info"] {
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

html[saved-theme="light"] body .callout[data-callout="note"] {
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

html[saved-theme="light"] body .callout[data-callout="question"] {
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

html[saved-theme="light"] body .callout[data-callout="quote"] {
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

html[saved-theme="light"] body .callout[data-callout="success"] {
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
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

html[saved-theme="light"] body .callout[data-callout="todo"] {
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

html[saved-theme="light"] body .callout[data-callout="warning"] {
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
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-left-radius: 1.625px;
  border-bottom-right-radius: 1.625px;
  border-top-left-radius: 1.625px;
  border-top-right-radius: 1.625px;
  color: rgb(64, 64, 64);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(26, 26, 26, 0.6);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(26, 26, 26, 0.6);
  border-right-color: rgba(26, 26, 26, 0.6);
  border-top-color: rgba(26, 26, 26, 0.6);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 1.875px;
  border-bottom-right-radius: 1.875px;
  border-top-left-radius: 1.875px;
  border-top-right-radius: 1.875px;
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(23, 23, 23);
}

html[saved-theme="light"] body h1 {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(23, 23, 23);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
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

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  text-decoration: rgb(64, 64, 64);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  text-decoration: rgb(64, 64, 64);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  text-decoration: rgb(64, 64, 64);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="light"] body footer {
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

html[saved-theme="light"] body footer ul li a {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(64, 64, 64);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
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

html[saved-theme="light"] body .darkmode svg {
  color: rgb(115, 115, 115);
  stroke: rgb(115, 115, 115);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
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

html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(23, 23, 23);
  border-left-color: rgb(23, 23, 23);
  border-right-color: rgb(23, 23, 23);
  border-top-color: rgb(23, 23, 23);
  color: rgb(23, 23, 23);
}

html[saved-theme="light"] body .metadata {
  color: rgb(115, 115, 115);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(23, 23, 23);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(64, 64, 64);
  text-decoration: underline dotted rgb(64, 64, 64);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body sub {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body summary {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body sup {
  color: rgb(64, 64, 64);
}`,
  },
};
