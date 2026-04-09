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
  --bases-table-cell-background-selected: hsla(0, 0%, 90%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #404040 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(0, 0%, 80%) !important;
  --bases-table-container-border-radius: 0.125em !important;
  --bases-table-group-background: #262626 !important;
  --bases-table-header-background: #0a0a0a !important;
  --bases-table-header-color: #737373 !important;
  --bases-table-summary-background: #0a0a0a !important;
  --blockquote-border-color: hsl(0, 0%, 80%) !important;
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
  --checkbox-checked-color: hsla(0, 0%, 90%) !important;
  --checkbox-color: #22c55e !important;
  --checkbox-color-hover: hsla(0, 0%, 73%, 0.5) !important;
  --checkbox-marker-color: #0a0a0a !important;
  --checkbox-radius: 0.125em !important;
  --checkbox-unchecked-color-hover: hsla(0, 0%, 90%, 0.5) !important;
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
  --collapse-icon-color-collapsed: hsl(0, 0%, 90%) !important;
  --color-accent: hsl(0, 0%, 90%) !important;
  --color-accent-1: hsl(0, 0%, 90%) !important;
  --color-accent-2: hsl(-5, 0%, 116.1%) !important;
  --color-accent-h1: hsl(0, 0%, 90%) !important;
  --color-accent-h2: hsl(0, 0%, 90%) !important;
  --color-accent-h3: hsl(0, 0%, 90%) !important;
  --color-accent-h4: hsl(0, 0%, 90%) !important;
  --color-accent-h5: hsl(0, 0%, 90%) !important;
  --color-accent-h6: hsl(0, 0%, 90%) !important;
  --color-accent-hsl: 0, 0%, 90% !important;
  --color-accent-ln10: hsl(0, 0%, 80%) !important;
  --color-accent-ln15: hsl(0, 0%, 75%) !important;
  --color-accent-ln20: hsl(0, 0%, 70%) !important;
  --color-accent-ln5: hsl(0, 0%, 85%) !important;
  --color-accent-o10: hsla(0, 0%, 90%, 0.1) !important;
  --color-accent-o20: hsla(0, 0%, 90%, 0.2) !important;
  --color-accent-o30: hsla(0, 0%, 90%, 0.3) !important;
  --color-accent-o40: hsla(0, 0%, 90%, 0.4) !important;
  --color-accent-o50: hsla(0, 0%, 90%, 0.5) !important;
  --color-accent-o60: hsla(0, 0%, 90%, 0.6) !important;
  --color-accent-o70: hsla(0, 0%, 90%, 0.7) !important;
  --color-accent-o80: hsla(0, 0%, 90%, 0.8) !important;
  --color-accent-o90: hsla(0, 0%, 90%, 0.9) !important;
  --color-beige-h: 50 !important;
  --color-beige-l: 91% !important;
  --color-beige-main: hsl(50, 100%, 91%) !important;
  --color-beige-s: 100% !important;
  --color-blue-h: 207 !important;
  --color-blue-l: 73% !important;
  --color-blue-main: hsl(207, 47%, 73%) !important;
  --color-blue-s: 47% !important;
  --color-bw-h: 0 !important;
  --color-bw-s: 0% !important;
  --color-default-h1: #d4d4d4 !important;
  --color-default-h2: #d4d4d4 !important;
  --color-default-h3: #d4d4d4 !important;
  --color-default-h4: #d4d4d4 !important;
  --color-default-h5: #d4d4d4 !important;
  --color-default-h6: #d4d4d4 !important;
  --color-gradient-h1: hsla(0, 0%, 90%, 1) !important;
  --color-gradient-h2: hsla(0, 0%, 90%, 0.95) !important;
  --color-gradient-h3: hsla(0, 0%, 90%, 0.9) !important;
  --color-gradient-h4: hsla(0, 0%, 90%, 0.85) !important;
  --color-gradient-h5: hsla(0, 0%, 90%, 0.8) !important;
  --color-gradient-h6: hsla(0, 0%, 90%, 0.75) !important;
  --color-h: 0 !important;
  --color-l: 90% !important;
  --color-main: hsl(0, 0%, 90%) !important;
  --color-peach-h: 0 !important;
  --color-peach-l: 65% !important;
  --color-peach-main: hsl(0, 37%, 65%) !important;
  --color-peach-s: 37% !important;
  --color-pink-h: 0 !important;
  --color-pink-l: 91% !important;
  --color-pink-main: hsl(0, 100%, 91%) !important;
  --color-pink-s: 100% !important;
  --color-purple-h: 269 !important;
  --color-purple-l: 85% !important;
  --color-purple-main: hsl(269, 59%, 85%) !important;
  --color-purple-s: 59% !important;
  --color-s: 0% !important;
  --color-sage-h: 88 !important;
  --color-sage-l: 69% !important;
  --color-sage-main: hsl(88, 23%, 69%) !important;
  --color-sage-s: 23% !important;
  --dark: #d4d4d4 !important;
  --darkgray: #d4d4d4 !important;
  --divider-color: #404040 !important;
  --divider-color-hover: hsl(0, 0%, 80%) !important;
  --dropdown-background-hover: rgb(163 163 163 / 0.2) !important;
  --embed-border-start: 2px solid hsl(0, 0%, 80%) !important;
  --file-header-background: #0a0a0a !important;
  --file-header-background-focused: #0a0a0a !important;
  --file-header-font: "", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
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
  --font-highlight-bg-color: hsl(0, 0%, 90%) !important;
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
  --font-interface: "", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
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
  --graph-node-focused: hsl(0, 0%, 90%) !important;
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
  --icon-color-active: hsl(0, 0%, 90%) !important;
  --icon-color-focused: hsla(0, 0%, 90%, 0.8) !important;
  --icon-color-hover: #737373 !important;
  --icon-color-hovering: #f5f5f5 !important;
  --inactive-hover-opacity: 0.8 !important;
  --inactive-opacity: 0.3 !important;
  --inline-code-bg-color: rgba(38, 38, 38, 0.5) !important;
  --inline-code-text-color: #a3a3a3 !important;
  --inline-title-color: #d4d4d4 !important;
  --interactive-accent: hsl(0, 0%, 80%) !important;
  --interactive-accent-hover: hsl(0, 0%, 85%) !important;
  --interactive-accent-hsl: 0, 0%, 90% !important;
  --interactive-hover: rgb(163 163 163 / 0.2) !important;
  --light: #0a0a0a !important;
  --lightgray: #171717 !important;
  --link-color: hsl(0, 0%, 85%) !important;
  --link-color-hover: hsl(0, 0%, 85%) !important;
  --link-decoration-color: hsl(0, 0%, 85%) !important;
  --link-decoration-line: underline !important;
  --link-decoration-offset: 0.3em !important;
  --link-decoration-style: solid !important;
  --link-decoration-thickness: 1px !important;
  --link-external-color: hsl(0, 0%, 85%) !important;
  --link-external-color-hover: hsl(0, 0%, 85%) !important;
  --link-unresolved-color: hsla(0, 0%, 90%, 0.9) !important;
  --link-unresolved-color-hover: hsl(0, 0%, 90%) !important;
  --link-unresolved-decoration-color: hsla(hsla(0, 0%, 90%, 0.9), 0.3) !important;
  --link-unresolved-decoration-color-hover: hsla(hsl(0, 0%, 90%), 0.3) !important;
  --link-unresolved-decoration-line: underline !important;
  --link-unresolved-decoration-offset: 0.3em !important;
  --link-unresolved-decoration-style: dashed !important;
  --link-unresolved-decoration-width: 1px !important;
  --list-marker-color-collapsed: hsl(0, 0%, 90%) !important;
  --list-marker-color-hover: #737373 !important;
  --menu-background: #171717 !important;
  --metadata-input-font: "", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --metadata-input-text-color: #d4d4d4 !important;
  --metadata-label-font: "", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --metadata-label-text-color: #737373 !important;
  --metadata-label-text-color-hover: #737373 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #404040 !important;
  --modal-background: #0a0a0a !important;
  --nav-heading-color: #d4d4d4 !important;
  --nav-heading-color-collapsed-hover: #737373 !important;
  --nav-heading-color-hover: #d4d4d4 !important;
  --nav-item-background-selected: hsla(0, 0%, 90%, 0.15) !important;
  --nav-item-color: #737373 !important;
  --nav-item-color-active: #d4d4d4 !important;
  --nav-item-color-highlighted: hsl(0, 0%, 90%) !important;
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
  --pill-color-remove-hover: hsl(0, 0%, 90%) !important;
  --prompt-background: #0a0a0a !important;
  --quote-bg-color: rgba(250, 250, 250, 0.05) !important;
  --radius-s: 0.125em !important;
  --ribbon-background: #171717 !important;
  --ribbon-background-collapsed: #0a0a0a !important;
  --search-clear-button-color: #737373 !important;
  --search-icon-color: #737373 !important;
  --search-result-background: #0a0a0a !important;
  --secondary: hsl(0, 0%, 90%) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 0%, 90%) !important;
  --tab-text-color-active: #737373 !important;
  --tab-text-color-focused: #737373 !important;
  --tab-text-color-focused-active: #737373 !important;
  --tab-text-color-focused-active-current: #d4d4d4 !important;
  --tab-text-color-focused-highlighted: hsl(0, 0%, 90%) !important;
  --table-drag-handle-background-active: hsl(0, 0%, 80%) !important;
  --table-header-color: #d4d4d4 !important;
  --table-selection: hsla(0, 0%, 90%, 0.1) !important;
  --table-selection-border-color: hsl(0, 0%, 80%) !important;
  --tag-background: hsla(0, 0%, 90%, 0.1) !important;
  --tag-background-hover: hsla(0, 0%, 90%, 0.2) !important;
  --tag-border-color: hsla(0, 0%, 90%, 0.15) !important;
  --tag-border-color-hover: hsla(0, 0%, 90%, 0.15) !important;
  --tag-color: hsl(0, 0%, 90%) !important;
  --tag-color-hover: hsl(0, 0%, 90%) !important;
  --tag-radius: 0em !important;
  --tertiary: #f5f5f5 !important;
  --text-accent: hsl(0, 0%, 90%) !important;
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

html[saved-theme="dark"] body .bases-table {
  border-color: rgba(0, 0, 0, 0) rgb(128, 128, 128);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(212, 212, 212);
  color: rgb(245, 245, 245);
  font-weight: 400;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(23, 23, 23);
  border-color: rgb(64, 64, 64);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(115, 115, 115);
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

html[saved-theme="dark"] body h1.article-title {
  color: rgb(245, 245, 245);
  text-decoration: underline;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 255, 255);
  border-radius: 1.66667px;
  border-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: rgb(115, 115, 115);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(115, 115, 115) none 0px;
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
  text-decoration: underline 1px dashed;
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
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ul.overflow {
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
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
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
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(251, 70, 76);
  text-decoration-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M240 128c-64 0 0 88-64 88H80c-64 0 0-88-64-88c64 0 0-88 64-88h96c64 0 0 88 64 88\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M43.18 128a29.8 29.8 0 0 1 8 10.26c4.8 9.9 4.8 22 4.8 33.74c0 24.31 1 36 24 36a8 8 0 0 1 0 16c-17.48 0-29.32-6.14-35.2-18.26c-4.8-9.9-4.8-22-4.8-33.74c0-24.31-1-36-24-36a8 8 0 0 1 0-16c23 0 24-11.69 24-36c0-11.72 0-23.84 4.8-33.74C50.68 38.14 62.52 32 80 32a8 8 0 0 1 0 16c-23 0-24 11.69-24 36c0 11.72 0 23.84-4.8 33.74A29.8 29.8 0 0 1 43.18 128M240 120c-23 0-24-11.69-24-36c0-11.72 0-23.84-4.8-33.74C205.32 38.14 193.48 32 176 32a8 8 0 0 0 0 16c23 0 24 11.69 24 36c0 11.72 0 23.84 4.8 33.74a29.8 29.8 0 0 0 8 10.26a29.8 29.8 0 0 0-8 10.26c-4.8 9.9-4.8 22-4.8 33.74c0 24.31-1 36-24 36a8 8 0 0 0 0 16c17.48 0 29.32-6.14 35.2-18.26c4.8-9.9 4.8-22 4.8-33.74c0-24.31 1-36 24-36a8 8 0 0 0 0-16\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M240 128c-64 0 0 88-64 88H80c-64 0 0-88-64-88c64 0 0-88 64-88h96c64 0 0 88 64 88\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M43.18 128a29.8 29.8 0 0 1 8 10.26c4.8 9.9 4.8 22 4.8 33.74c0 24.31 1 36 24 36a8 8 0 0 1 0 16c-17.48 0-29.32-6.14-35.2-18.26c-4.8-9.9-4.8-22-4.8-33.74c0-24.31-1-36-24-36a8 8 0 0 1 0-16c23 0 24-11.69 24-36c0-11.72 0-23.84 4.8-33.74C50.68 38.14 62.52 32 80 32a8 8 0 0 1 0 16c-23 0-24 11.69-24 36c0 11.72 0 23.84-4.8 33.74A29.8 29.8 0 0 1 43.18 128M240 120c-23 0-24-11.69-24-36c0-11.72 0-23.84-4.8-33.74C205.32 38.14 193.48 32 176 32a8 8 0 0 0 0 16c23 0 24 11.69 24 36c0 11.72 0 23.84 4.8 33.74a29.8 29.8 0 0 0 8 10.26a29.8 29.8 0 0 0-8 10.26c-4.8 9.9-4.8 22-4.8 33.74c0 24.31-1 36-24 36a8 8 0 0 0 0 16c17.48 0 29.32-6.14 35.2-18.26c4.8-9.9 4.8-22 4.8-33.74c0-24.31 1-36 24-36a8 8 0 0 0 0-16\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M215.46 216H40.54c-12.62 0-20.54-13.21-14.41-23.91l87.46-151.87c6.3-11 22.52-11 28.82 0l87.46 151.87c6.13 10.7-1.79 23.91-14.41 23.91\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M215.46 216H40.54c-12.62 0-20.54-13.21-14.41-23.91l87.46-151.87c6.3-11 22.52-11 28.82 0l87.46 151.87c6.13 10.7-1.79 23.91-14.41 23.91\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 115, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M196 96c0 29.47-24.21 54.05-56 59.06v.94a12 12 0 0 1-24 0v-12a12 12 0 0 1 12-12c24.26 0 44-16.15 44-36s-19.74-36-44-36s-44 16.15-44 36a12 12 0 0 1-24 0c0-33.08 30.5-60 68-60s68 26.92 68 60m-68 92a20 20 0 1 0 20 20a20 20 0 0 0-20-20\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M196 96c0 29.47-24.21 54.05-56 59.06v.94a12 12 0 0 1-24 0v-12a12 12 0 0 1 12-12c24.26 0 44-16.15 44-36s-19.74-36-44-36s-44 16.15-44 36a12 12 0 0 1-24 0c0-33.08 30.5-60 68-60s68 26.92 68 60m-68 92a20 20 0 1 0 20 20a20 20 0 0 0-20-20\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 179, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 0 0 0 208c21.51 0 44.1-6.48 60.43-17.33a8 8 0 0 0-8.86-13.33C166 210.38 146.21 216 128 216a88 88 0 1 1 88-88c0 26.45-10.88 32-20 32s-20-5.55-20-32V88a8 8 0 0 0-16 0v4.26a48 48 0 1 0 5.93 65.1c6 12 16.35 18.64 30.07 18.64c22.54 0 36-17.94 36-48A104.11 104.11 0 0 0 128 24m0 136a32 32 0 1 1 32-32a32 32 0 0 1-32 32\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 0 0 0 208c21.51 0 44.1-6.48 60.43-17.33a8 8 0 0 0-8.86-13.33C166 210.38 146.21 216 128 216a88 88 0 1 1 88-88c0 26.45-10.88 32-20 32s-20-5.55-20-32V88a8 8 0 0 0-16 0v4.26a48 48 0 1 0 5.93 65.1c6 12 16.35 18.64 30.07 18.64c22.54 0 36-17.94 36-48A104.11 104.11 0 0 0 128 24m0 136a32 32 0 1 1 32-32a32 32 0 0 1-32 32\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 158, 11);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M200 128a72 72 0 1 1-72-72a72 72 0 0 1 72 72\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M214.86 180.12a8 8 0 0 1-11 2.74L136 142.13V216a8 8 0 0 1-16 0v-73.87l-67.88 40.73a8 8 0 1 1-8.23-13.72L112.45 128L43.89 86.86a8 8 0 1 1 8.23-13.72L120 113.87V40a8 8 0 0 1 16 0v73.87l67.88-40.73a8 8 0 1 1 8.23 13.72L143.55 128l68.56 41.14a8 8 0 0 1 2.75 10.98\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M200 128a72 72 0 1 1-72-72a72 72 0 0 1 72 72\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M214.86 180.12a8 8 0 0 1-11 2.74L136 142.13V216a8 8 0 0 1-16 0v-73.87l-67.88 40.73a8 8 0 1 1-8.23-13.72L112.45 128L43.89 86.86a8 8 0 1 1 8.23-13.72L120 113.87V40a8 8 0 0 1 16 0v73.87l67.88-40.73a8 8 0 1 1 8.23 13.72L143.55 128l68.56 41.14a8 8 0 0 1 2.75 10.98\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M208 76a28 28 0 0 1-28 28h-28V76a28 28 0 0 1 28-28a28 28 0 0 1 28 28M76 48a28 28 0 0 0-28 28a28 28 0 0 0 28 28h28V76a28 28 0 0 0-28-28m104 104h-28v28a28 28 0 0 0 28 28a28 28 0 0 0 28-28a28 28 0 0 0-28-28M48 180a28 28 0 0 0 28 28a28 28 0 0 0 28-28v-28H76a28 28 0 0 0-28 28\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M180 144h-20v-32h20a36 36 0 1 0-36-36v20h-32V76a36 36 0 1 0-36 36h20v32H76a36 36 0 1 0 36 36v-20h32v20a36 36 0 1 0 36-36m-20-68a20 20 0 1 1 20 20h-20ZM56 76a20 20 0 0 1 40 0v20H76a20 20 0 0 1-20-20m40 104a20 20 0 1 1-20-20h20Zm16-68h32v32h-32Zm68 88a20 20 0 0 1-20-20v-20h20a20 20 0 0 1 0 40\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M208 76a28 28 0 0 1-28 28h-28V76a28 28 0 0 1 28-28a28 28 0 0 1 28 28M76 48a28 28 0 0 0-28 28a28 28 0 0 0 28 28h28V76a28 28 0 0 0-28-28m104 104h-28v28a28 28 0 0 0 28 28a28 28 0 0 0 28-28a28 28 0 0 0-28-28M48 180a28 28 0 0 0 28 28a28 28 0 0 0 28-28v-28H76a28 28 0 0 0-28 28\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M180 144h-20v-32h20a36 36 0 1 0-36-36v20h-32V76a36 36 0 1 0-36 36h20v32H76a36 36 0 1 0 36 36v-20h32v20a36 36 0 1 0 36-36m-20-68a20 20 0 1 1 20 20h-20ZM56 76a20 20 0 0 1 40 0v20H76a20 20 0 0 1-20-20m40 104a20 20 0 1 1-20-20h20Zm16-68h32v32h-32Zm68 88a20 20 0 0 1-20-20v-20h20a20 20 0 0 1 0 40\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 115, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 14 14\\'%3E%3Cpath fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' d=\\'M12.753 13.33c-.846-.725-2.299-1.89-3.837-3.21m0 0C7.467 8.873 5.942 7.49 4.774 6.201m4.142 3.917l-2.749 2.587A2.92 2.92 0 1 1 2.26 8.37l2.514-2.167m4.142 3.917l1.691-1.591M4.774 6.202C3.595 4.9 2.782 3.697 2.782 2.834C2.782.796 4.284.5 5.164.5c1.287 0 2.341.76 2.341 2.334c0 1.05-2.261 2.963-2.261 2.963z\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 14 14\\'%3E%3Cpath fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' d=\\'M12.753 13.33c-.846-.725-2.299-1.89-3.837-3.21m0 0C7.467 8.873 5.942 7.49 4.774 6.201m4.142 3.917l-2.749 2.587A2.92 2.92 0 1 1 2.26 8.37l2.514-2.167m4.142 3.917l1.691-1.591M4.774 6.202C3.595 4.9 2.782 3.697 2.782 2.834C2.782.796 4.284.5 5.164.5c1.287 0 2.341.76 2.341 2.334c0 1.05-2.261 2.963-2.261 2.963z\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 158, 11);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m165.82 96l-11.64 64h-64l11.64-64Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 88h-48.6l8.47-46.57a8 8 0 0 0-15.74-2.86l-9 49.43H111.4l8.47-46.57a8 8 0 0 0-15.74-2.86L95.14 88H48a8 8 0 0 0 0 16h44.23l-8.73 48H32a8 8 0 0 0 0 16h48.6l-8.47 46.57a8 8 0 0 0 6.44 9.3A8 8 0 0 0 80 224a8 8 0 0 0 7.86-6.57l9-49.43h47.74l-8.47 46.57a8 8 0 0 0 6.44 9.3a8 8 0 0 0 1.43.13a8 8 0 0 0 7.86-6.57l9-49.43H208a8 8 0 0 0 0-16h-44.23l8.73-48H224a8 8 0 0 0 0-16m-76.5 64H99.77l8.73-48h47.73Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m165.82 96l-11.64 64h-64l11.64-64Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 88h-48.6l8.47-46.57a8 8 0 0 0-15.74-2.86l-9 49.43H111.4l8.47-46.57a8 8 0 0 0-15.74-2.86L95.14 88H48a8 8 0 0 0 0 16h44.23l-8.73 48H32a8 8 0 0 0 0 16h48.6l-8.47 46.57a8 8 0 0 0 6.44 9.3A8 8 0 0 0 80 224a8 8 0 0 0 7.86-6.57l9-49.43h47.74l-8.47 46.57a8 8 0 0 0 6.44 9.3a8 8 0 0 0 1.43.13a8 8 0 0 0 7.86-6.57l9-49.43H208a8 8 0 0 0 0-16h-44.23l8.73-48H224a8 8 0 0 0 0-16m-76.5 64H99.77l8.73-48h47.73Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 85, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M95.8 56.2a28 28 0 1 1-39.6 0a28 28 0 0 1 39.6 0m104 104a28 28 0 1 0 0 39.6a28 28 0 0 0 0-39.6\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m205.66 61.64l-144 144a8 8 0 0 1-11.32-11.32l144-144a8 8 0 0 1 11.32 11.31Zm-155.12 39.8a36 36 0 0 1 50.92-50.91a36 36 0 0 1-50.92 50.91M56 76a20 20 0 1 0 34.14-14.16A20 20 0 0 0 56 76m160 104a36 36 0 1 1-10.54-25.46A35.76 35.76 0 0 1 216 180m-16 0a20 20 0 1 0-5.86 14.14A19.87 19.87 0 0 0 200 180\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M95.8 56.2a28 28 0 1 1-39.6 0a28 28 0 0 1 39.6 0m104 104a28 28 0 1 0 0 39.6a28 28 0 0 0 0-39.6\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m205.66 61.64l-144 144a8 8 0 0 1-11.32-11.32l144-144a8 8 0 0 1 11.32 11.31Zm-155.12 39.8a36 36 0 0 1 50.92-50.91a36 36 0 0 1-50.92 50.91M56 76a20 20 0 1 0 34.14-14.16A20 20 0 0 0 56 76m160 104a36 36 0 1 1-10.54-25.46A35.76 35.76 0 0 1 216 180m-16 0a20 20 0 1 0-5.86 14.14A19.87 19.87 0 0 0 200 180\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(16, 185, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 160a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 104h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 160a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 104h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M108 72v72H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8m108-8h-60a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h68V72a8 8 0 0 0-8-8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M100 56H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16m0 80H40V72h60Zm116-80h-60a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16m0 80h-60V72h60Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M108 72v72H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8m108-8h-60a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h68V72a8 8 0 0 0-8-8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M100 56H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16m0 80H40V72h60Zm116-80h-60a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16m0 80h-60V72h60Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M204 168a52.06 52.06 0 0 1-52 52h-12v12a12 12 0 0 1-24 0v-12h-12a52.06 52.06 0 0 1-52-52a12 12 0 0 1 24 0a28 28 0 0 0 28 28h48a28 28 0 0 0 0-56h-40a52 52 0 0 1 0-104h4V24a12 12 0 0 1 24 0v12h4a52.06 52.06 0 0 1 52 52a12 12 0 0 1-24 0a28 28 0 0 0-28-28h-32a28 28 0 0 0 0 56h40a52.06 52.06 0 0 1 52 52\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M204 168a52.06 52.06 0 0 1-52 52h-12v12a12 12 0 0 1-24 0v-12h-12a52.06 52.06 0 0 1-52-52a12 12 0 0 1 24 0a28 28 0 0 0 28 28h48a28 28 0 0 0 0-56h-40a52 52 0 0 1 0-104h4V24a12 12 0 0 1 24 0v12h4a52.06 52.06 0 0 1 52 52a12 12 0 0 1-24 0a28 28 0 0 0-28-28h-32a28 28 0 0 0 0 56h40a52.06 52.06 0 0 1 52 52\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(16, 185, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M183.25 63.2C170.25 42.79 151.15 32 128 32S85.75 42.79 72.75 63.2C62 80.18 56 103.19 56 128s6 47.82 16.75 64.8c13 20.41 32.1 31.2 55.25 31.2s42.25-10.79 55.25-31.2c10.8-17 16.75-40 16.75-64.8s-5.95-47.82-16.75-64.8M128 208c-38.68 0-56-40.18-56-80s17.32-80 56-80s56 40.18 56 80s-17.32 80-56 80\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M183.25 63.2C170.25 42.79 151.15 32 128 32S85.75 42.79 72.75 63.2C62 80.18 56 103.19 56 128s6 47.82 16.75 64.8c13 20.41 32.1 31.2 55.25 31.2s42.25-10.79 55.25-31.2c10.8-17 16.75-40 16.75-64.8s-5.95-47.82-16.75-64.8M128 208c-38.68 0-56-40.18-56-80s17.32-80 56-80s56 40.18 56 80s-17.32 80-56 80\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M144 48v160a8 8 0 0 1-16 0V62.13l-27.88 16.73a8 8 0 1 1-8.24-13.72l40-24A8 8 0 0 1 144 48\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M144 48v160a8 8 0 0 1-16 0V62.13l-27.88 16.73a8 8 0 1 1-8.24-13.72l40-24A8 8 0 0 1 144 48\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 208a8 8 0 0 1-8 8H88a8 8 0 0 1-6.4-12.8l71.94-95.92a32 32 0 1 0-51.1-38.53a32.5 32.5 0 0 0-3.78 6.46A8 8 0 1 1 84 68.8a48 48 0 1 1 82.33 48.09L104 200h64a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 208a8 8 0 0 1-8 8H88a8 8 0 0 1-6.4-12.8l71.94-95.92a32 32 0 1 0-51.1-38.53a32.5 32.5 0 0 0-3.78 6.46A8 8 0 1 1 84 68.8a48 48 0 1 1 82.33 48.09L104 200h64a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92A40 40 0 1 0 120 120a8 8 0 0 1-6.4-12.8L152 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 6.4 12.8l-39.84 53.12A56.1 56.1 0 0 1 176 160\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92A40 40 0 1 0 120 120a8 8 0 0 1-6.4-12.8L152 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 6.4 12.8l-39.84 53.12A56.1 56.1 0 0 1 176 160\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M184 160h-16V48a8 8 0 0 0-14.25-5l-96 120A8 8 0 0 0 64 176h88v32a8 8 0 0 0 16 0v-32h16a8 8 0 0 0 0-16m-32 0H80.64L152 70.81Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M184 160h-16V48a8 8 0 0 0-14.25-5l-96 120A8 8 0 0 0 64 176h88v32a8 8 0 0 0 16 0v-32h16a8 8 0 0 0 0-16m-32 0H80.64L152 70.81Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92a40 40 0 1 0 .77-60.3a8 8 0 0 1-13-7.66l15.06-75.43A8 8 0 0 1 104 40h64a8 8 0 0 1 0 16h-57.44l-10.32 51.6A56 56 0 0 1 176 160\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92a40 40 0 1 0 .77-60.3a8 8 0 0 1-13-7.66l15.06-75.43A8 8 0 0 1 104 40h64a8 8 0 0 1 0 16h-57.44l-10.32 51.6A56 56 0 0 1 176 160\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 104a56 56 0 0 0-15.62 2.23L143 51.93a8 8 0 1 0-14-7.85l-49.55 88A56 56 0 1 0 128 104m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 104a56 56 0 0 0-15.62 2.23L143 51.93a8 8 0 1 0-14-7.85l-49.55 88A56 56 0 1 0 128 104m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m175.66 50.3l-48 160a8 8 0 0 1-15.32-4.6L157.25 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 7.66 10.3\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m175.66 50.3l-48 160a8 8 0 0 1-15.32-4.6L157.25 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 7.66 10.3\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M155.55 119.27a48 48 0 1 0-55.1 0a56 56 0 1 0 55.1 0M96 80a32 32 0 1 1 32 32a32 32 0 0 1-32-32m32 128a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M155.55 119.27a48 48 0 1 0-55.1 0a56 56 0 1 0 55.1 0M96 80a32 32 0 1 1 32 32a32 32 0 0 1-32-32m32 128a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 40a56 56 0 1 0 15.62 109.77L113 204.07a8 8 0 1 0 14 7.85l49.55-88A56 56 0 0 0 128 40m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 40a56 56 0 1 0 15.62 109.77L113 204.07a8 8 0 1 0 14 7.85l49.55-88A56 56 0 0 0 128 40m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 96v96a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 48H32a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16v88a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-16 144H48v-88h160Zm16-104H32V64h192zM96 136a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 96v96a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 48H32a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16v88a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-16 144H48v-88h160Zm16-104H32V64h192zM96 136a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M128 32a96 96 0 0 0-83.11 144.07l-12.47 37.39a8 8 0 0 0 10.12 10.12l37.39-12.47A96 96 0 1 0 128 32m24 152a80 80 0 0 1-80-80a32 32 0 0 1 32-32l16 32l-12.32 18.47a48.2 48.2 0 0 0 25.85 25.85L152 136l32 16a32 32 0 0 1-32 32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m187.58 144.84l-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40a88.1 88.1 0 0 0 88 88a40 40 0 0 0 40-40a8 8 0 0 0-4.42-7.16M152 176a72.08 72.08 0 0 1-72-72a24 24 0 0 1 19.29-23.54l11.48 23L101 118a8 8 0 0 0-.73 7.51a56.47 56.47 0 0 0 30.15 30.15A8 8 0 0 0 138 155l14.62-9.74l23 11.48A24 24 0 0 1 152 176M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M128 32a96 96 0 0 0-83.11 144.07l-12.47 37.39a8 8 0 0 0 10.12 10.12l37.39-12.47A96 96 0 1 0 128 32m24 152a80 80 0 0 1-80-80a32 32 0 0 1 32-32l16 32l-12.32 18.47a48.2 48.2 0 0 0 25.85 25.85L152 136l32 16a32 32 0 0 1-32 32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m187.58 144.84l-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40a88.1 88.1 0 0 0 88 88a40 40 0 0 0 40-40a8 8 0 0 0-4.42-7.16M152 176a72.08 72.08 0 0 1-72-72a24 24 0 0 1 19.29-23.54l11.48 23L101 118a8 8 0 0 0-.73 7.51a56.47 56.47 0 0 0 30.15 30.15A8 8 0 0 0 138 155l14.62-9.74l23 11.48A24 24 0 0 1 152 176M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M192 48v176l-64-40l-64 40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m0 177.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 209.57V48h112Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M192 48v176l-64-40l-64 40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m0 177.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 209.57V48h112Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 115, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M17.813 4.653h.854q2.266.08 3.773 1.574Q23.946 7.72 24 9.987v7.36q-.054 2.266-1.56 3.773c-1.506 1.507-2.262 1.524-3.773 1.56H5.333q-2.266-.054-3.773-1.56C.053 19.614.036 18.858 0 17.347v-7.36q.054-2.267 1.56-3.76t3.773-1.574h.774l-1.174-1.12a1.23 1.23 0 0 1-.373-.906q0-.534.373-.907l.027-.027q.4-.373.92-.373t.92.373L9.653 4.44q.107.106.187.213h4.267a.8.8 0 0 1 .16-.213l2.853-2.747q.4-.373.92-.373c.347 0 .662.151.929.4s.391.551.391.907q0 .532-.373.906zM5.333 7.24q-1.12.027-1.88.773q-.76.748-.786 1.894v7.52q.026 1.146.786 1.893t1.88.773h13.334q1.12-.026 1.88-.773t.786-1.893v-7.52q-.026-1.147-.786-1.894t-1.88-.773zM8 11.107q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q0-.56.386-.947q.387-.386.947-.386m8 0q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q.025-.586.4-.96q.373-.373.933-.373\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M17.813 4.653h.854q2.266.08 3.773 1.574Q23.946 7.72 24 9.987v7.36q-.054 2.266-1.56 3.773c-1.506 1.507-2.262 1.524-3.773 1.56H5.333q-2.266-.054-3.773-1.56C.053 19.614.036 18.858 0 17.347v-7.36q.054-2.267 1.56-3.76t3.773-1.574h.774l-1.174-1.12a1.23 1.23 0 0 1-.373-.906q0-.534.373-.907l.027-.027q.4-.373.92-.373t.92.373L9.653 4.44q.107.106.187.213h4.267a.8.8 0 0 1 .16-.213l2.853-2.747q.4-.373.92-.373c.347 0 .662.151.929.4s.391.551.391.907q0 .532-.373.906zM5.333 7.24q-1.12.027-1.88.773q-.76.748-.786 1.894v7.52q.026 1.146.786 1.893t1.88.773h13.334q1.12-.026 1.88-.773t.786-1.893v-7.52q-.026-1.147-.786-1.894t-1.88-.773zM8 11.107q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q0-.56.386-.947q.387-.386.947-.386m8 0q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q.025-.586.4-.96q.373-.373.933-.373\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 72, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M80 48v104H32a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m239.82 157l-12-96A24 24 0 0 0 204 40H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h43.06l37.78 75.58A8 8 0 0 0 120 240a40 40 0 0 0 40-40v-16h56a24 24 0 0 0 23.82-27M72 144H32V56h40Zm150 21.29a7.88 7.88 0 0 1-6 2.71h-64a8 8 0 0 0-8 8v24a24 24 0 0 1-19.29 23.54L88 150.11V56h116a8 8 0 0 1 7.94 7l12 96a7.87 7.87 0 0 1-1.94 6.29\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M80 48v104H32a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m239.82 157l-12-96A24 24 0 0 0 204 40H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h43.06l37.78 75.58A8 8 0 0 0 120 240a40 40 0 0 0 40-40v-16h56a24 24 0 0 0 23.82-27M72 144H32V56h40Zm150 21.29a7.88 7.88 0 0 1-6 2.71h-64a8 8 0 0 0-8 8v24a24 24 0 0 1-19.29 23.54L88 150.11V56h116a8 8 0 0 1 7.94 7l12 96a7.87 7.87 0 0 1-1.94 6.29\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M240 183.9c-9.25 8.69-31.45 4.61-42.66 10.78c-11 6.07-17.07 25.56-29.57 28.76c-12.08 3.09-26.72-7.56-39.77-7.56s-27.69 10.65-39.77 7.56c-12.5-3.2-18.53-22.69-29.57-28.76c-11.21-6.17-33.41-2.09-42.66-10.78c0 0 56-20 56-103.93a56 56 0 0 1 112 0c0 83.89 56 103.93 56 103.93\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M247.83 182.28a8 8 0 0 0-5.13-5.9c-.39-.14-28.95-10.88-43-49.23l19.3-7.72a8 8 0 1 0-6-14.86l-17.82 7.13A149 149 0 0 1 192 80a64 64 0 0 0-128 0a151.2 151.2 0 0 1-3.18 31.75L43 104.57a8 8 0 1 0-6 14.86l19.37 7.75a94 94 0 0 1-17.74 30.2c-12.52 14.14-25.27 19-25.36 19a8 8 0 0 0-2.77 13.36c7.1 6.67 17.67 7.71 27.89 8.72c6.3.62 12.82 1.27 16.38 3.23c3.37 1.86 6.85 6.62 10.21 11.22c5.4 7.41 11.53 15.8 21.24 18.28c9.07 2.33 18.35-.83 26.54-3.62c5.55-1.89 10.8-3.68 15.21-3.68s9.66 1.79 15.21 3.68c6.2 2.11 13 4.43 19.9 4.43a26.4 26.4 0 0 0 6.64-.81c9.7-2.48 15.83-10.87 21.23-18.28c3.36-4.6 6.84-9.36 10.21-11.22c3.56-2 10.08-2.61 16.39-3.23c10.21-1 20.78-2.05 27.88-8.72a8 8 0 0 0 2.4-7.46m-31.82.26c-7.91.78-16.08 1.59-22.53 5.13s-11 9.79-15.41 15.81c-4 5.48-8.15 11.16-12.28 12.21c-4.46 1.15-10.76-1-17.42-3.27s-13.31-4.53-20.37-4.53s-13.83 2.3-20.37 4.53s-13 4.42-17.42 3.27c-4.13-1.05-8.27-6.73-12.28-12.21c-4.39-6-8.93-12.24-15.41-15.81S47.9 183.32 40 182.54c-1.56-.15-3.15-.31-4.74-.49a97.3 97.3 0 0 0 14.69-13.29c8.37-9.27 17.72-23.23 23.74-43.13l.06-.13a8.6 8.6 0 0 0 .46-1.61A158.5 158.5 0 0 0 80 80a48 48 0 0 1 96 0a158.4 158.4 0 0 0 5.8 43.92a8.6 8.6 0 0 0 .46 1.61l.06.13c6 19.9 15.37 33.86 23.74 43.13a97.3 97.3 0 0 0 14.69 13.29c-1.59.15-3.18.31-4.75.46Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M240 183.9c-9.25 8.69-31.45 4.61-42.66 10.78c-11 6.07-17.07 25.56-29.57 28.76c-12.08 3.09-26.72-7.56-39.77-7.56s-27.69 10.65-39.77 7.56c-12.5-3.2-18.53-22.69-29.57-28.76c-11.21-6.17-33.41-2.09-42.66-10.78c0 0 56-20 56-103.93a56 56 0 0 1 112 0c0 83.89 56 103.93 56 103.93\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M247.83 182.28a8 8 0 0 0-5.13-5.9c-.39-.14-28.95-10.88-43-49.23l19.3-7.72a8 8 0 1 0-6-14.86l-17.82 7.13A149 149 0 0 1 192 80a64 64 0 0 0-128 0a151.2 151.2 0 0 1-3.18 31.75L43 104.57a8 8 0 1 0-6 14.86l19.37 7.75a94 94 0 0 1-17.74 30.2c-12.52 14.14-25.27 19-25.36 19a8 8 0 0 0-2.77 13.36c7.1 6.67 17.67 7.71 27.89 8.72c6.3.62 12.82 1.27 16.38 3.23c3.37 1.86 6.85 6.62 10.21 11.22c5.4 7.41 11.53 15.8 21.24 18.28c9.07 2.33 18.35-.83 26.54-3.62c5.55-1.89 10.8-3.68 15.21-3.68s9.66 1.79 15.21 3.68c6.2 2.11 13 4.43 19.9 4.43a26.4 26.4 0 0 0 6.64-.81c9.7-2.48 15.83-10.87 21.23-18.28c3.36-4.6 6.84-9.36 10.21-11.22c3.56-2 10.08-2.61 16.39-3.23c10.21-1 20.78-2.05 27.88-8.72a8 8 0 0 0 2.4-7.46m-31.82.26c-7.91.78-16.08 1.59-22.53 5.13s-11 9.79-15.41 15.81c-4 5.48-8.15 11.16-12.28 12.21c-4.46 1.15-10.76-1-17.42-3.27s-13.31-4.53-20.37-4.53s-13.83 2.3-20.37 4.53s-13 4.42-17.42 3.27c-4.13-1.05-8.27-6.73-12.28-12.21c-4.39-6-8.93-12.24-15.41-15.81S47.9 183.32 40 182.54c-1.56-.15-3.15-.31-4.74-.49a97.3 97.3 0 0 0 14.69-13.29c8.37-9.27 17.72-23.23 23.74-43.13l.06-.13a8.6 8.6 0 0 0 .46-1.61A158.5 158.5 0 0 0 80 80a48 48 0 0 1 96 0a158.4 158.4 0 0 0 5.8 43.92a8.6 8.6 0 0 0 .46 1.61l.06.13c6 19.9 15.37 33.86 23.74 43.13a97.3 97.3 0 0 0 14.69 13.29c-1.59.15-3.18.31-4.75.46Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 179, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 64v144H32V48h176a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v12.69l56 56l26.34-26.35a8 8 0 0 1 11.32 0L192 148.69V128a8 8 0 0 1 16 0v40a7 7 0 0 1 0 .8c0 .11 0 .21-.05.32s0 .3-.07.46a3 3 0 0 1-.09.37c0 .13-.06.26-.1.39s-.08.23-.12.35l-.14.39l-.15.31c-.06.13-.12.27-.19.4s-.11.18-.16.28l-.24.39l-.21.28l-.26.35c-.11.14-.24.27-.36.4l-.16.18l-.17.15a5 5 0 0 1-.42.37a4 4 0 0 1-.32.25l-.3.22l-.38.23a3 3 0 0 1-.3.17l-.37.19l-.34.15l-.36.13a3 3 0 0 1-.38.13l-.36.1c-.14 0-.26.07-.4.09l-.42.07l-.35.05a7 7 0 0 1-.79 0H160a8 8 0 0 1 0-16h20.69L128 107.31l-26.34 26.35a8 8 0 0 1-11.32 0L40 83.31V200h184a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 64v144H32V48h176a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v12.69l56 56l26.34-26.35a8 8 0 0 1 11.32 0L192 148.69V128a8 8 0 0 1 16 0v40a7 7 0 0 1 0 .8c0 .11 0 .21-.05.32s0 .3-.07.46a3 3 0 0 1-.09.37c0 .13-.06.26-.1.39s-.08.23-.12.35l-.14.39l-.15.31c-.06.13-.12.27-.19.4s-.11.18-.16.28l-.24.39l-.21.28l-.26.35c-.11.14-.24.27-.36.4l-.16.18l-.17.15a5 5 0 0 1-.42.37a4 4 0 0 1-.32.25l-.3.22l-.38.23a3 3 0 0 1-.3.17l-.37.19l-.34.15l-.36.13a3 3 0 0 1-.38.13l-.36.1c-.14 0-.26.07-.4.09l-.42.07l-.35.05a7 7 0 0 1-.79 0H160a8 8 0 0 1 0-16h20.69L128 107.31l-26.34 26.35a8 8 0 0 1-11.32 0L40 83.31V200h184a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m235.21 185.59l-67 29.7a8.15 8.15 0 0 1-11-4.56L147 183.06a191 191 0 0 1-19 .94a191 191 0 0 1-19-.94l-10.25 27.67a8.15 8.15 0 0 1-11 4.56l-67-29.7a8 8 0 0 1-4.55-9.24L45.77 60a8.08 8.08 0 0 1 6.54-6l36.06-5.92a8.1 8.1 0 0 1 9.21 6l5 19.63a192.3 192.3 0 0 1 50.88 0l5-19.63a8.1 8.1 0 0 1 9.21-6L203.69 54a8.08 8.08 0 0 1 6.54 6l29.53 116.37a8 8 0 0 1-4.55 9.22\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m74.45 64.9l-67 29.71a16.17 16.17 0 0 1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11 22a16.18 16.18 0 0 1-21.71 9.1l-67-29.71a15.94 15.94 0 0 1-9.06-18.51L38 58a16.08 16.08 0 0 1 13-11.87l36.06-5.92a16.21 16.21 0 0 1 18.26 11.88l3.26 12.83Q118.11 64 128 64t19.4.92l3.26-12.83a16.22 16.22 0 0 1 18.26-11.88L205 46.13A16.08 16.08 0 0 1 218 58l29.53 116.38a15.94 15.94 0 0 1-9.08 18.52M232 178.28L202.47 62h-.08l-36.06-6a.17.17 0 0 0-.17 0l-2.83 11.14c5 .94 10 2.06 14.83 3.42A8 8 0 0 1 176 86.31a8 8 0 0 1-2.16-.3A172.3 172.3 0 0 0 128 80a172.3 172.3 0 0 0-45.84 6a8 8 0 1 1-4.32-15.4c4.82-1.36 9.78-2.48 14.82-3.42L89.83 56a.2.2 0 0 0-.12 0l-36.1 5.92a.2.2 0 0 0-.09 0L24 178.33L91 208a.21.21 0 0 0 .22 0L98 189.72a173 173 0 0 1-20.14-4.32a8 8 0 0 1 4.3-15.4a172 172 0 0 0 45.84 6a172 172 0 0 0 45.84-6a8 8 0 0 1 4.32 15.41a173 173 0 0 1-20.16 4.31l6.75 18.28a.22.22 0 0 0 .21 0Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m235.21 185.59l-67 29.7a8.15 8.15 0 0 1-11-4.56L147 183.06a191 191 0 0 1-19 .94a191 191 0 0 1-19-.94l-10.25 27.67a8.15 8.15 0 0 1-11 4.56l-67-29.7a8 8 0 0 1-4.55-9.24L45.77 60a8.08 8.08 0 0 1 6.54-6l36.06-5.92a8.1 8.1 0 0 1 9.21 6l5 19.63a192.3 192.3 0 0 1 50.88 0l5-19.63a8.1 8.1 0 0 1 9.21-6L203.69 54a8.08 8.08 0 0 1 6.54 6l29.53 116.37a8 8 0 0 1-4.55 9.22\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m74.45 64.9l-67 29.71a16.17 16.17 0 0 1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11 22a16.18 16.18 0 0 1-21.71 9.1l-67-29.71a15.94 15.94 0 0 1-9.06-18.51L38 58a16.08 16.08 0 0 1 13-11.87l36.06-5.92a16.21 16.21 0 0 1 18.26 11.88l3.26 12.83Q118.11 64 128 64t19.4.92l3.26-12.83a16.22 16.22 0 0 1 18.26-11.88L205 46.13A16.08 16.08 0 0 1 218 58l29.53 116.38a15.94 15.94 0 0 1-9.08 18.52M232 178.28L202.47 62h-.08l-36.06-6a.17.17 0 0 0-.17 0l-2.83 11.14c5 .94 10 2.06 14.83 3.42A8 8 0 0 1 176 86.31a8 8 0 0 1-2.16-.3A172.3 172.3 0 0 0 128 80a172.3 172.3 0 0 0-45.84 6a8 8 0 1 1-4.32-15.4c4.82-1.36 9.78-2.48 14.82-3.42L89.83 56a.2.2 0 0 0-.12 0l-36.1 5.92a.2.2 0 0 0-.09 0L24 178.33L91 208a.21.21 0 0 0 .22 0L98 189.72a173 173 0 0 1-20.14-4.32a8 8 0 0 1 4.3-15.4a172 172 0 0 0 45.84 6a172 172 0 0 0 45.84-6a8 8 0 0 1 4.32 15.41a173 173 0 0 1-20.16 4.31l6.75 18.28a.22.22 0 0 0 .21 0Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 102, 241);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 14 14\\'%3E%3Cg fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cpath d=\\'M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13\\'/%3E%3Cpath d=\\'M9 10.464a3.5 3.5 0 0 0 1.281-4.78l-6.062 3.5A3.5 3.5 0 0 0 9 10.463Zm-.902-7.562L7.55 4.95l1.732-1m-6.38 1.952l2.049.549l-1.732 1\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 14 14\\'%3E%3Cg fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cpath d=\\'M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13\\'/%3E%3Cpath d=\\'M9 10.464a3.5 3.5 0 0 0 1.281-4.78l-6.062 3.5A3.5 3.5 0 0 0 9 10.463Zm-.902-7.562L7.55 4.95l1.732-1m-6.38 1.952l2.049.549l-1.732 1\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 179, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m224 96l-78.55 56h-34.9L32 96l96-64Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M96.72 152L40 192v-80.47Zm16.37 8h29.82l56.63 40H56.46Zm46.19-8L216 111.53V192ZM128 41.61l81.91 54.61l-67 47.78h-29.8l-67-47.78Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m224 96l-78.55 56h-34.9L32 96l96-64Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M96.72 152L40 192v-80.47Zm16.37 8h29.82l56.63 40H56.46Zm46.19-8L216 111.53V192ZM128 41.61l81.91 54.61l-67 47.78h-29.8l-67-47.78Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M72 128a134.6 134.6 0 0 1-14.16 60.47a8 8 0 1 1-14.32-7.12A118.8 118.8 0 0 0 56 128a71.73 71.73 0 0 1 27-56.2a8 8 0 1 1 10 12.49A55.76 55.76 0 0 0 72 128m56-8a8 8 0 0 0-8 8a184.1 184.1 0 0 1-23 89.1a8 8 0 0 0 14 7.76A200.2 200.2 0 0 0 136 128a8 8 0 0 0-8-8m0-32a40 40 0 0 0-40 40a8 8 0 0 0 16 0a24 24 0 0 1 48 0a214.1 214.1 0 0 1-20.51 92a8 8 0 1 0 14.51 6.83A230 230 0 0 0 168 128a40 40 0 0 0-40-40m0-64A104.11 104.11 0 0 0 24 128a87.8 87.8 0 0 1-5 29.33a8 8 0 0 0 15.09 5.33A103.9 103.9 0 0 0 40 128a88 88 0 0 1 176 0a282 282 0 0 1-5.29 54.45a8 8 0 0 0 6.3 9.4a8 8 0 0 0 1.55.15a8 8 0 0 0 7.84-6.45A298.4 298.4 0 0 0 232 128A104.12 104.12 0 0 0 128 24M94.4 152.17a8 8 0 0 0-9.4 6.25a151 151 0 0 1-17.21 45.44a8 8 0 0 0 13.86 8a166.7 166.7 0 0 0 19-50.25a8 8 0 0 0-6.25-9.44M128 56a73 73 0 0 0-9 .56a8 8 0 0 0 2 15.87A56.08 56.08 0 0 1 184 128a252 252 0 0 1-1.92 31a8 8 0 0 0 6.92 9a8 8 0 0 0 1 .06a8 8 0 0 0 7.92-7a267 267 0 0 0 2-33A72.08 72.08 0 0 0 128 56m57.93 128.25a8 8 0 0 0-9.75 5.75c-1.46 5.69-3.15 11.4-5 17a8 8 0 0 0 5 10.13a7.9 7.9 0 0 0 2.55.42a8 8 0 0 0 7.58-5.46c2-5.92 3.79-12 5.35-18.05a8 8 0 0 0-5.72-9.78Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M72 128a134.6 134.6 0 0 1-14.16 60.47a8 8 0 1 1-14.32-7.12A118.8 118.8 0 0 0 56 128a71.73 71.73 0 0 1 27-56.2a8 8 0 1 1 10 12.49A55.76 55.76 0 0 0 72 128m56-8a8 8 0 0 0-8 8a184.1 184.1 0 0 1-23 89.1a8 8 0 0 0 14 7.76A200.2 200.2 0 0 0 136 128a8 8 0 0 0-8-8m0-32a40 40 0 0 0-40 40a8 8 0 0 0 16 0a24 24 0 0 1 48 0a214.1 214.1 0 0 1-20.51 92a8 8 0 1 0 14.51 6.83A230 230 0 0 0 168 128a40 40 0 0 0-40-40m0-64A104.11 104.11 0 0 0 24 128a87.8 87.8 0 0 1-5 29.33a8 8 0 0 0 15.09 5.33A103.9 103.9 0 0 0 40 128a88 88 0 0 1 176 0a282 282 0 0 1-5.29 54.45a8 8 0 0 0 6.3 9.4a8 8 0 0 0 1.55.15a8 8 0 0 0 7.84-6.45A298.4 298.4 0 0 0 232 128A104.12 104.12 0 0 0 128 24M94.4 152.17a8 8 0 0 0-9.4 6.25a151 151 0 0 1-17.21 45.44a8 8 0 0 0 13.86 8a166.7 166.7 0 0 0 19-50.25a8 8 0 0 0-6.25-9.44M128 56a73 73 0 0 0-9 .56a8 8 0 0 0 2 15.87A56.08 56.08 0 0 1 184 128a252 252 0 0 1-1.92 31a8 8 0 0 0 6.92 9a8 8 0 0 0 1 .06a8 8 0 0 0 7.92-7a267 267 0 0 0 2-33A72.08 72.08 0 0 0 128 56m57.93 128.25a8 8 0 0 0-9.75 5.75c-1.46 5.69-3.15 11.4-5 17a8 8 0 0 0 5 10.13a7.9 7.9 0 0 0 2.55.42a8 8 0 0 0 7.58-5.46c2-5.92 3.79-12 5.35-18.05a8 8 0 0 0-5.72-9.78Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 63, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M176 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M248 120h-64.58a56 56 0 0 0-110.84 0H8a8 8 0 0 0 0 16h64.58a56 56 0 0 0 110.84 0H248a8 8 0 0 0 0-16m-120 48a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M176 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M248 120h-64.58a56 56 0 0 0-110.84 0H8a8 8 0 0 0 0 16h64.58a56 56 0 0 0 110.84 0H248a8 8 0 0 0 0-16m-120 48a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 115, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M208 104v8a48 48 0 0 1-48 48h-24a32 32 0 0 1 32 32v40h-64v-40a32 32 0 0 1 32-32h-24a48 48 0 0 1-48-48v-8a49.3 49.3 0 0 1 8.51-27.3A51.92 51.92 0 0 1 76 32a52 52 0 0 1 43.83 24h32.34A52 52 0 0 1 196 32a51.92 51.92 0 0 1 3.49 44.7A49.3 49.3 0 0 1 208 104\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M208.3 75.68A59.74 59.74 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58 58 0 0 0-7.7-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.8 43.8 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.8 43.8 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.76 41.76 0 0 1 7 22.52Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M208 104v8a48 48 0 0 1-48 48h-24a32 32 0 0 1 32 32v40h-64v-40a32 32 0 0 1 32-32h-24a48 48 0 0 1-48-48v-8a49.3 49.3 0 0 1 8.51-27.3A51.92 51.92 0 0 1 76 32a52 52 0 0 1 43.83 24h32.34A52 52 0 0 1 196 32a51.92 51.92 0 0 1 3.49 44.7A49.3 49.3 0 0 1 208 104\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M208.3 75.68A59.74 59.74 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58 58 0 0 0-7.7-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.8 43.8 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.8 43.8 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.76 41.76 0 0 1 7 22.52Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 85, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M128 56c-80 0-112 72-112 72s32 72 112 72s112-72 112-72s-32-72-112-72m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M53.92 34.62a8 8 0 1 0-11.84 10.76l19.24 21.17C25 88.84 9.38 123.2 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208a127.1 127.1 0 0 0 52.07-10.83l22 24.21a8 8 0 1 0 11.84-10.76Zm47.33 75.84l41.67 45.85a32 32 0 0 1-41.67-45.85M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.2 133.2 0 0 1 25 128c4.69-8.79 19.66-33.39 47.35-49.38l18 19.75a48 48 0 0 0 63.66 70l14.73 16.2A112 112 0 0 1 128 192m6-95.43a8 8 0 0 1 3-15.72a48.16 48.16 0 0 1 38.77 42.64a8 8 0 0 1-7.22 8.71a6 6 0 0 1-.75 0a8 8 0 0 1-8-7.26A32.09 32.09 0 0 0 134 96.57m113.28 34.69c-.42.94-10.55 23.37-33.36 43.8a8 8 0 1 1-10.67-11.92a132.8 132.8 0 0 0 27.8-35.14a133.2 133.2 0 0 0-23.12-30.77C185.67 75.19 158.78 64 128 64a118.4 118.4 0 0 0-19.36 1.57A8 8 0 1 1 106 49.79A134 134 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M128 56c-80 0-112 72-112 72s32 72 112 72s112-72 112-72s-32-72-112-72m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M53.92 34.62a8 8 0 1 0-11.84 10.76l19.24 21.17C25 88.84 9.38 123.2 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208a127.1 127.1 0 0 0 52.07-10.83l22 24.21a8 8 0 1 0 11.84-10.76Zm47.33 75.84l41.67 45.85a32 32 0 0 1-41.67-45.85M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.2 133.2 0 0 1 25 128c4.69-8.79 19.66-33.39 47.35-49.38l18 19.75a48 48 0 0 0 63.66 70l14.73 16.2A112 112 0 0 1 128 192m6-95.43a8 8 0 0 1 3-15.72a48.16 48.16 0 0 1 38.77 42.64a8 8 0 0 1-7.22 8.71a6 6 0 0 1-.75 0a8 8 0 0 1-8-7.26A32.09 32.09 0 0 0 134 96.57m113.28 34.69c-.42.94-10.55 23.37-33.36 43.8a8 8 0 1 1-10.67-11.92a132.8 132.8 0 0 0 27.8-35.14a133.2 133.2 0 0 0-23.12-30.77C185.67 75.19 158.78 64 128 64a118.4 118.4 0 0 0-19.36 1.57A8 8 0 1 1 106 49.79A134 134 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 116.69V216h-64v-64h-48v64H40v-99.31l82.34-82.35a8 8 0 0 1 11.32 0Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M240 208h-16v-72l2.34 2.34A8 8 0 0 0 237.66 127l-98.35-98.32a16 16 0 0 0-22.62 0L18.34 127a8 8 0 0 0 11.32 11.31L32 136v72H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M48 120l80-80l80 80v88h-48v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56H48Zm96 88h-32v-48h32Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 116.69V216h-64v-64h-48v64H40v-99.31l82.34-82.35a8 8 0 0 1 11.32 0Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M240 208h-16v-72l2.34 2.34A8 8 0 0 0 237.66 127l-98.35-98.32a16 16 0 0 0-22.62 0L18.34 127a8 8 0 0 0 11.32 11.31L32 136v72H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M48 120l80-80l80 80v88h-48v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56H48Zm96 88h-32v-48h32Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 8 8\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M5 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M3.5 2.5C2.67 2.5 2 3.17 2 4h1c0-.28.22-.5.5-.5s.5.22.5.5s-1 1.64-1 2.5S3.67 8 4.5 8S6 7.33 6 6.5H5c0 .28-.22.5-.5.5S4 6.78 4 6.5C4 6.14 5 4.66 5 4c0-.81-.67-1.5-1.5-1.5\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 8 8\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M5 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M3.5 2.5C2.67 2.5 2 3.17 2 4h1c0-.28.22-.5.5-.5s.5.22.5.5s-1 1.64-1 2.5S3.67 8 4.5 8S6 7.33 6 6.5H5c0 .28-.22.5-.5.5S4 6.78 4 6.5C4 6.14 5 4.66 5 4c0-.81-.67-1.5-1.5-1.5\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M176 32H80a48 48 0 0 0-48 48v96a48 48 0 0 0 48 48h96a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48m-48 136a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40Zm-88-96a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m64-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M176 32H80a48 48 0 0 0-48 48v96a48 48 0 0 0 48 48h96a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48m-48 136a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40Zm-88-96a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m64-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 72, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cg fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'1.5\\' color=\\'currentColor\\'%3E%3Cpath d=\\'M4 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m16 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4M4.967 17c-3.524-5.5 4.023-6-.008-10m1.42-2c1.104 0 3.62 1 3.62 3M5 17c5.217 1.452 8.328 1.209 14 0M4 20c5.963 1.452 9.518 1.209 16 0\\'/%3E%3Cpath d=\\'M18.03 6.044c-2.366.435-7.82 3.74-6.98 11.194m7.202-9.15c-1.215.573-3.126 1.8-.653 4.824c.78.955 1.687 2.967 1.352 3.957\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cg fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'1.5\\' color=\\'currentColor\\'%3E%3Cpath d=\\'M4 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m16 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4M4.967 17c-3.524-5.5 4.023-6-.008-10m1.42-2c1.104 0 3.62 1 3.62 3M5 17c5.217 1.452 8.328 1.209 14 0M4 20c5.963 1.452 9.518 1.209 16 0\\'/%3E%3Cpath d=\\'M18.03 6.044c-2.366.435-7.82 3.74-6.98 11.194m7.202-9.15c-1.215.573-3.126 1.8-.653 4.824c.78.955 1.687 2.967 1.352 3.957\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 63, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 64v88H32V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24M48 56h160a8 8 0 0 1 8 8v80H40V64a8 8 0 0 1 8-8m160 128H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 64v88H32V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24M48 56h160a8 8 0 0 1 8 8v80H40V64a8 8 0 0 1 8-8m160 128H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M232 98.36c-1.27 38.56-33.33 69.64-71.91 69.64a71.7 71.7 0 0 1-26.92-5.17L120 176H96v24H72v24H40a8 8 0 0 1-8-8v-28.69a8 8 0 0 1 2.34-5.65l58.83-58.83A71.7 71.7 0 0 1 88 95.91c0-38.58 31.08-70.64 69.64-71.87A72 72 0 0 1 232 98.36\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M216.57 39.43a80 80 0 0 0-132.66 81.35L28.69 176A15.86 15.86 0 0 0 24 187.31V216a16 16 0 0 0 16 16h32a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A79.7 79.7 0 0 0 160 176h.1a80 80 0 0 0 56.47-136.57M224 98.1c-1.09 34.09-29.75 61.86-63.89 61.9H160a63.7 63.7 0 0 1-23.65-4.51a8 8 0 0 0-8.84 1.68L116.69 168H96a8 8 0 0 0-8 8v16H72a8 8 0 0 0-8 8v16H40v-28.69l58.83-58.82a8 8 0 0 0 1.68-8.84A63.7 63.7 0 0 1 96 95.92c0-34.14 27.81-62.8 61.9-63.89A64 64 0 0 1 224 98.1M192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M232 98.36c-1.27 38.56-33.33 69.64-71.91 69.64a71.7 71.7 0 0 1-26.92-5.17L120 176H96v24H72v24H40a8 8 0 0 1-8-8v-28.69a8 8 0 0 1 2.34-5.65l58.83-58.83A71.7 71.7 0 0 1 88 95.91c0-38.58 31.08-70.64 69.64-71.87A72 72 0 0 1 232 98.36\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M216.57 39.43a80 80 0 0 0-132.66 81.35L28.69 176A15.86 15.86 0 0 0 24 187.31V216a16 16 0 0 0 16 16h32a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A79.7 79.7 0 0 0 160 176h.1a80 80 0 0 0 56.47-136.57M224 98.1c-1.09 34.09-29.75 61.86-63.89 61.9H160a63.7 63.7 0 0 1-23.65-4.51a8 8 0 0 0-8.84 1.68L116.69 168H96a8 8 0 0 0-8 8v16H72a8 8 0 0 0-8 8v16H40v-28.69l58.83-58.82a8 8 0 0 0 1.68-8.84A63.7 63.7 0 0 1 96 95.92c0-34.14 27.81-62.8 61.9-63.89A64 64 0 0 1 224 98.1M192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 158, 11);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M18.315 12.264c2.33 0 4.218 1.88 4.218 4.2V19.8c0 2.32-1.888 4.2-4.218 4.2h-6.202a4.22 4.22 0 0 1-4.023-2.938l-3.676 1.833a2.04 2.04 0 0 1-2.731-.903a2 2 0 0 1-.216-.907v-5.94a2.03 2.03 0 0 1 2.035-2.024a2.04 2.04 0 0 1 .919.218l3.673 1.85a4.22 4.22 0 0 1 4.02-2.925zm-.062 2.162h-6.078c-1.153 0-2.09.921-2.108 2.065v3.247c0 1.148.925 2.081 2.073 2.1h6.113c1.153 0 2.09-.922 2.109-2.065v-3.247a2.104 2.104 0 0 0-2.074-2.1zM4.18 15.72a.554.554 0 0 0-.555.542v3.734a.556.556 0 0 0 .798.496l.01-.004l3.463-1.756V17.51l-3.467-1.73a.56.56 0 0 0-.249-.06M9.28 0a5.67 5.67 0 0 1 4.98 2.965a4.92 4.92 0 0 1 3.36-1.317c2.714 0 4.913 2.177 4.913 4.863s-2.2 4.863-4.912 4.863a4.92 4.92 0 0 1-3.996-2.034a5.65 5.65 0 0 1-4.345 2.034c-3.131 0-5.67-2.546-5.67-5.687S6.149 0 9.28 0m8.34 3.926c-1.441 0-2.61 1.157-2.61 2.585s1.169 2.585 2.61 2.585c1.443 0 2.612-1.157 2.612-2.585s-1.169-2.585-2.611-2.585zM9.28 2.287a3.395 3.395 0 0 0-3.39 3.4c0 1.877 1.518 3.4 3.39 3.4a3.395 3.395 0 0 0 3.39-3.4c0-1.878-1.518-3.4-3.39-3.4\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M18.315 12.264c2.33 0 4.218 1.88 4.218 4.2V19.8c0 2.32-1.888 4.2-4.218 4.2h-6.202a4.22 4.22 0 0 1-4.023-2.938l-3.676 1.833a2.04 2.04 0 0 1-2.731-.903a2 2 0 0 1-.216-.907v-5.94a2.03 2.03 0 0 1 2.035-2.024a2.04 2.04 0 0 1 .919.218l3.673 1.85a4.22 4.22 0 0 1 4.02-2.925zm-.062 2.162h-6.078c-1.153 0-2.09.921-2.108 2.065v3.247c0 1.148.925 2.081 2.073 2.1h6.113c1.153 0 2.09-.922 2.109-2.065v-3.247a2.104 2.104 0 0 0-2.074-2.1zM4.18 15.72a.554.554 0 0 0-.555.542v3.734a.556.556 0 0 0 .798.496l.01-.004l3.463-1.756V17.51l-3.467-1.73a.56.56 0 0 0-.249-.06M9.28 0a5.67 5.67 0 0 1 4.98 2.965a4.92 4.92 0 0 1 3.36-1.317c2.714 0 4.913 2.177 4.913 4.863s-2.2 4.863-4.912 4.863a4.92 4.92 0 0 1-3.996-2.034a5.65 5.65 0 0 1-4.345 2.034c-3.131 0-5.67-2.546-5.67-5.687S6.149 0 9.28 0m8.34 3.926c-1.441 0-2.61 1.157-2.61 2.585s1.169 2.585 2.61 2.585c1.443 0 2.612-1.157 2.612-2.585s-1.169-2.585-2.611-2.585zM9.28 2.287a3.395 3.395 0 0 0-3.39 3.4c0 1.877 1.518 3.4 3.39 3.4a3.395 3.395 0 0 0 3.39-3.4c0-1.878-1.518-3.4-3.39-3.4\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 115, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m218.34 119.6l-34.74 34.74a46.58 46.58 0 0 1-44.31 12.26c-.31.34-.62.67-.95 1l-34.74 34.74a46.63 46.63 0 1 1-65.94-65.94l34.74-34.74a46.6 46.6 0 0 1 44.31-12.26c.31-.34.62-.67 1-1l34.69-34.74a46.63 46.63 0 0 1 65.94 65.94\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M240 88.23a54.43 54.43 0 0 1-16 37L189.25 160a54.27 54.27 0 0 1-38.63 16h-.05A54.63 54.63 0 0 1 96 119.84a8 8 0 0 1 16 .45A38.62 38.62 0 0 0 150.58 160a38.4 38.4 0 0 0 27.31-11.31l34.75-34.75a38.63 38.63 0 0 0-54.63-54.63l-11 11A8 8 0 0 1 135.7 59l11-11a54.65 54.65 0 0 1 77.3 0a54.86 54.86 0 0 1 16 40.23m-131 97.43l-11 11A38.4 38.4 0 0 1 70.6 208a38.63 38.63 0 0 1-27.29-65.94L78 107.31a38.63 38.63 0 0 1 66 28.4a8 8 0 0 0 7.78 8.22h.22a8 8 0 0 0 8-7.78A54.86 54.86 0 0 0 144 96a54.65 54.65 0 0 0-77.27 0L32 130.75A54.62 54.62 0 0 0 70.56 224a54.28 54.28 0 0 0 38.64-16l11-11a8 8 0 0 0-11.2-11.34\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m218.34 119.6l-34.74 34.74a46.58 46.58 0 0 1-44.31 12.26c-.31.34-.62.67-.95 1l-34.74 34.74a46.63 46.63 0 1 1-65.94-65.94l34.74-34.74a46.6 46.6 0 0 1 44.31-12.26c.31-.34.62-.67 1-1l34.69-34.74a46.63 46.63 0 0 1 65.94 65.94\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M240 88.23a54.43 54.43 0 0 1-16 37L189.25 160a54.27 54.27 0 0 1-38.63 16h-.05A54.63 54.63 0 0 1 96 119.84a8 8 0 0 1 16 .45A38.62 38.62 0 0 0 150.58 160a38.4 38.4 0 0 0 27.31-11.31l34.75-34.75a38.63 38.63 0 0 0-54.63-54.63l-11 11A8 8 0 0 1 135.7 59l11-11a54.65 54.65 0 0 1 77.3 0a54.86 54.86 0 0 1 16 40.23m-131 97.43l-11 11A38.4 38.4 0 0 1 70.6 208a38.63 38.63 0 0 1-27.29-65.94L78 107.31a38.63 38.63 0 0 1 66 28.4a8 8 0 0 0 7.78 8.22h.22a8 8 0 0 0 8-7.78A54.86 54.86 0 0 0 144 96a54.65 54.65 0 0 0-77.27 0L32 130.75A54.62 54.62 0 0 0 70.56 224a54.28 54.28 0 0 0 38.64-16l11-11a8 8 0 0 0-11.2-11.34\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 40v176a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H40V40h176zM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140m-84-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 40v176a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H40V40h176zM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140m-84-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M240 64v128a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M232 48H24A16 16 0 0 0 8 64v128a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H24V64h208zm-104-88v48a8 8 0 0 1-16 0v-28.69l-18.34 18.35a8 8 0 0 1-11.32 0L64 123.31V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.66L88 124.69l26.34-26.35A8 8 0 0 1 128 104m77.66 18.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L168 132.69V104a8 8 0 0 1 16 0v28.69l10.34-10.35a8 8 0 0 1 11.32 0\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M240 64v128a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M232 48H24A16 16 0 0 0 8 64v128a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H24V64h208zm-104-88v48a8 8 0 0 1-16 0v-28.69l-18.34 18.35a8 8 0 0 1-11.32 0L64 123.31V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.66L88 124.69l26.34-26.35A8 8 0 0 1 128 104m77.66 18.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L168 132.69V104a8 8 0 0 1 16 0v28.69l10.34-10.35a8 8 0 0 1 11.32 0\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 72v72a32 32 0 0 1-32 32H40V72a32 32 0 0 1 32-32h112a32 32 0 0 1 32 32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M184 32H72a40 40 0 0 0-40 40v120a40 40 0 0 0 40 40h88a8 8 0 0 0 0-16H72a24 24 0 0 1-24-24v-8h136a40 40 0 0 0 40-40V72a40 40 0 0 0-40-40m24 112a24 24 0 0 1-24 24H48V72a24 24 0 0 1 24-24h112a24 24 0 0 1 24 24Zm-24-40v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a32 32 0 0 1 56-21.13A32 32 0 0 1 184 104\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 72v72a32 32 0 0 1-32 32H40V72a32 32 0 0 1 32-32h112a32 32 0 0 1 32 32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M184 32H72a40 40 0 0 0-40 40v120a40 40 0 0 0 40 40h88a8 8 0 0 0 0-16H72a24 24 0 0 1-24-24v-8h136a40 40 0 0 0 40-40V72a40 40 0 0 0-40-40m24 112a24 24 0 0 1-24 24H48V72a24 24 0 0 1 24-24h112a24 24 0 0 1 24 24Zm-24-40v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a32 32 0 0 1 56-21.13A32 32 0 0 1 184 104\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 92, 246);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m216 160l-56 56v-56Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M88 96a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m32 16H96a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m96-104v108.69a15.86 15.86 0 0 1-4.69 11.31L168 219.31a15.86 15.86 0 0 1-11.31 4.69H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M48 208h104v-48a8 8 0 0 1 8-8h48V48H48Zm120-40v28.7l28.69-28.7Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m216 160l-56 56v-56Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M88 96a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m32 16H96a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m96-104v108.69a15.86 15.86 0 0 1-4.69 11.31L168 219.31a15.86 15.86 0 0 1-11.31 4.69H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M48 208h104v-48a8 8 0 0 1 8-8h48V48H48Zm120-40v28.7l28.69-28.7Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M10.422 11.375c-.294 1.028.012 2.065.784 2.653c1.061.81 2.565.3 2.874-.995c.08-.337.103-.722.027-1.056c-.23-1.001-.521-1.988-.792-2.996c-1.33.154-2.543 1.172-2.893 2.394m5.548-.287c.273 1.012.285 2.017-.127 3c-1.128 2.69-4.722 3.14-6.573.826c-1.302-1.627-1.28-3.961.06-5.734c.78-1.032 1.804-1.707 3.048-2.054l.379-.104c-.084-.415-.188-.816-.243-1.224c-.176-1.317.512-2.503 1.744-3.04c1.226-.535 2.708-.216 3.53.76c.406.479.395 1.08-.025 1.464c-.412.377-.997.346-1.435-.09c-.247-.246-.51-.44-.877-.436c-.525.006-.987.418-.945.937c.037.468.172.93.3 1.386c.022.078.216.135.338.153c1.333.197 2.504.731 3.472 1.676c2.558 2.493 2.861 6.531.672 9.44c-1.529 2.032-3.61 3.169-6.127 3.409c-4.621.44-8.664-2.53-9.7-7.058C2.516 10.255 4.84 5.831 8.796 4.25c.586-.234 1.143-.031 1.371.498c.232.537-.019 1.086-.61 1.35c-2.368 1.06-3.817 2.855-4.215 5.424c-.533 3.433 1.656 6.776 5 7.72c2.723.77 5.658-.166 7.308-2.33c1.586-2.08 1.4-5.099-.427-6.873A4 4 0 0 0 15.4 9.026c.198.716.389 1.388.57 2.062\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M10.422 11.375c-.294 1.028.012 2.065.784 2.653c1.061.81 2.565.3 2.874-.995c.08-.337.103-.722.027-1.056c-.23-1.001-.521-1.988-.792-2.996c-1.33.154-2.543 1.172-2.893 2.394m5.548-.287c.273 1.012.285 2.017-.127 3c-1.128 2.69-4.722 3.14-6.573.826c-1.302-1.627-1.28-3.961.06-5.734c.78-1.032 1.804-1.707 3.048-2.054l.379-.104c-.084-.415-.188-.816-.243-1.224c-.176-1.317.512-2.503 1.744-3.04c1.226-.535 2.708-.216 3.53.76c.406.479.395 1.08-.025 1.464c-.412.377-.997.346-1.435-.09c-.247-.246-.51-.44-.877-.436c-.525.006-.987.418-.945.937c.037.468.172.93.3 1.386c.022.078.216.135.338.153c1.333.197 2.504.731 3.472 1.676c2.558 2.493 2.861 6.531.672 9.44c-1.529 2.032-3.61 3.169-6.127 3.409c-4.621.44-8.664-2.53-9.7-7.058C2.516 10.255 4.84 5.831 8.796 4.25c.586-.234 1.143-.031 1.371.498c.232.537-.019 1.086-.61 1.35c-2.368 1.06-3.817 2.855-4.215 5.424c-.533 3.433 1.656 6.776 5 7.72c2.723.77 5.658-.166 7.308-2.33c1.586-2.08 1.4-5.099-.427-6.873A4 4 0 0 0 15.4 9.026c.198.716.389 1.388.57 2.062\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M19.355 18.538a68.967 68.959 0 0 0 1.858-2.954a.81.81 0 0 0-.062-.9c-.516-.685-1.504-2.075-2.042-3.362c-.553-1.321-.636-3.375-.64-4.377a1.7 1.7 0 0 0-.358-1.05l-3.198-4.064a4 4 0 0 1-.076.543c-.106.503-.307 1.004-.536 1.5c-.134.29-.29.6-.446.914l-.31.626c-.516 1.068-.997 2.227-1.132 3.59c-.124 1.26.046 2.73.815 4.481q.192.016.386.044a6.36 6.36 0 0 1 3.326 1.505c.916.79 1.744 1.922 2.415 3.5zM8.199 22.569q.11.019.22.02c.78.024 2.095.092 3.16.29c.87.16 2.593.64 4.01 1.055c1.083.316 2.198-.548 2.355-1.664c.114-.814.33-1.735.725-2.58l-.01.005c-.67-1.87-1.522-3.078-2.416-3.849a5.3 5.3 0 0 0-2.778-1.257c-1.54-.216-2.952.19-3.84.45c.532 2.218.368 4.829-1.425 7.531zM5.533 9.938q-.035.15-.098.29L2.82 16.059a1.6 1.6 0 0 0 .313 1.772l4.116 4.24c2.103-3.101 1.796-6.02.836-8.3c-.728-1.73-1.832-3.081-2.55-3.831zM9.32 14.01c.615-.183 1.606-.465 2.745-.534c-.683-1.725-.848-3.233-.716-4.577c.154-1.552.7-2.847 1.235-3.95q.17-.35.328-.664c.149-.297.288-.577.419-.86c.217-.47.379-.885.46-1.27c.08-.38.08-.72-.014-1.043c-.095-.325-.297-.675-.68-1.06a1.6 1.6 0 0 0-1.475.36l-4.95 4.452a1.6 1.6 0 0 0-.513.952l-.427 2.83c.672.59 2.328 2.316 3.335 4.711q.136.317.253.653\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M19.355 18.538a68.967 68.959 0 0 0 1.858-2.954a.81.81 0 0 0-.062-.9c-.516-.685-1.504-2.075-2.042-3.362c-.553-1.321-.636-3.375-.64-4.377a1.7 1.7 0 0 0-.358-1.05l-3.198-4.064a4 4 0 0 1-.076.543c-.106.503-.307 1.004-.536 1.5c-.134.29-.29.6-.446.914l-.31.626c-.516 1.068-.997 2.227-1.132 3.59c-.124 1.26.046 2.73.815 4.481q.192.016.386.044a6.36 6.36 0 0 1 3.326 1.505c.916.79 1.744 1.922 2.415 3.5zM8.199 22.569q.11.019.22.02c.78.024 2.095.092 3.16.29c.87.16 2.593.64 4.01 1.055c1.083.316 2.198-.548 2.355-1.664c.114-.814.33-1.735.725-2.58l-.01.005c-.67-1.87-1.522-3.078-2.416-3.849a5.3 5.3 0 0 0-2.778-1.257c-1.54-.216-2.952.19-3.84.45c.532 2.218.368 4.829-1.425 7.531zM5.533 9.938q-.035.15-.098.29L2.82 16.059a1.6 1.6 0 0 0 .313 1.772l4.116 4.24c2.103-3.101 1.796-6.02.836-8.3c-.728-1.73-1.832-3.081-2.55-3.831zM9.32 14.01c.615-.183 1.606-.465 2.745-.534c-.683-1.725-.848-3.233-.716-4.577c.154-1.552.7-2.847 1.235-3.95q.17-.35.328-.664c.149-.297.288-.577.419-.86c.217-.47.379-.885.46-1.27c.08-.38.08-.72-.014-1.043c-.095-.325-.297-.675-.68-1.06a1.6 1.6 0 0 0-1.475.36l-4.95 4.452a1.6 1.6 0 0 0-.513.952l-.427 2.83c.672.59 2.328 2.316 3.335 4.711q.136.317.253.653\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 85, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M176 40v176h-40v-56H88v56H48V40Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M248 208h-16V96a8 8 0 0 0 0-16h-48V48a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16v160H24a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M216 96v112h-32V96ZM56 48h112v160h-24v-48a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v48H56Zm72 160H96v-40h32ZM72 80a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M176 40v176h-40v-56H88v56H48V40Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M248 208h-16V96a8 8 0 0 0 0-16h-48V48a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16v160H24a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M216 96v112h-32V96ZM56 48h112v160h-24v-48a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v48H56Zm72 160H96v-40h32ZM72 80a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M80 104v104H32a8 8 0 0 1-8-8v-88a8 8 0 0 1 8-8Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M234 80.12A24 24 0 0 0 216 72h-56V56a40 40 0 0 0-40-40a8 8 0 0 0-7.16 4.42L75.06 96H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h172a24 24 0 0 0 23.82-21l12-96A24 24 0 0 0 234 80.12M32 112h40v88H32Zm191.94-15l-12 96a8 8 0 0 1-7.94 7H88v-94.11l36.71-73.43A24 24 0 0 1 144 56v24a8 8 0 0 0 8 8h64a8 8 0 0 1 7.94 9\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M80 104v104H32a8 8 0 0 1-8-8v-88a8 8 0 0 1 8-8Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M234 80.12A24 24 0 0 0 216 72h-56V56a40 40 0 0 0-40-40a8 8 0 0 0-7.16 4.42L75.06 96H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h172a24 24 0 0 0 23.82-21l12-96A24 24 0 0 0 234 80.12M32 112h40v88H32Zm191.94-15l-12 96a8 8 0 0 1-7.94 7H88v-94.11l36.71-73.43A24 24 0 0 1 144 56v24a8 8 0 0 0 8 8h64a8 8 0 0 1 7.94 9\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 200H56V40a160 160 0 0 1 160 160\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M106.91 149.09A71.53 71.53 0 0 1 128 200a8 8 0 0 1-16 0a56 56 0 0 0-56-56a8 8 0 0 1 0-16a71.53 71.53 0 0 1 50.91 21.09M56 80a8 8 0 0 0 0 16a104 104 0 0 1 104 104a8 8 0 0 0 16 0A120 120 0 0 0 56 80m118.79 1.21A166.9 166.9 0 0 0 56 32a8 8 0 0 0 0 16a151 151 0 0 1 107.48 44.52A151 151 0 0 1 208 200a8 8 0 0 0 16 0a166.9 166.9 0 0 0-49.21-118.79M60 184a12 12 0 1 0 12 12a12 12 0 0 0-12-12\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 200H56V40a160 160 0 0 1 160 160\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M106.91 149.09A71.53 71.53 0 0 1 128 200a8 8 0 0 1-16 0a56 56 0 0 0-56-56a8 8 0 0 1 0-16a71.53 71.53 0 0 1 50.91 21.09M56 80a8 8 0 0 0 0 16a104 104 0 0 1 104 104a8 8 0 0 0 16 0A120 120 0 0 0 56 80m118.79 1.21A166.9 166.9 0 0 0 56 32a8 8 0 0 0 0 16a151 151 0 0 1 107.48 44.52A151 151 0 0 1 208 200a8 8 0 0 0 16 0a166.9 166.9 0 0 0-49.21-118.79M60 184a12 12 0 1 0 12 12a12 12 0 0 0-12-12\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 56v144a16 16 0 0 1-16 16H48V40h160a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M120 216a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H56v160h56a8 8 0 0 1 8 8m109.66-93.66l-40-40a8 8 0 0 0-11.32 11.32L204.69 120H112a8 8 0 0 0 0 16h92.69l-26.35 26.34a8 8 0 0 0 11.32 11.32l40-40a8 8 0 0 0 0-11.32\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 56v144a16 16 0 0 1-16 16H48V40h160a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M120 216a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H56v160h56a8 8 0 0 1 8 8m109.66-93.66l-40-40a8 8 0 0 0-11.32 11.32L204.69 120H112a8 8 0 0 0 0 16h92.69l-26.35 26.34a8 8 0 0 0 11.32 11.32l40-40a8 8 0 0 0 0-11.32\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M5.897 3.087C7.188 1.24 9.213.012 11.997.013c2.786 0 4.81 1.228 6.102 3.074c1.261 1.804 1.789 4.138 1.789 6.385c0 .137-.004.331-.007.487l-.002.096l.914 2.286l.003.007c.273.712.55 1.47.755 2.132c.486 1.563.669 2.723.684 3.535c.007.401-.025.756-.104 1.046a1.7 1.7 0 0 1-.209.478a1.13 1.13 0 0 1-.8.51c-.436.052-.772-.156-.9-.242a3 3 0 0 1-.446-.382a6 6 0 0 1-.217-.239a7.3 7.3 0 0 1-.936 1.596c.196.103.383.216.55.34c.348.26.601.6.692 1.008c.087.39.003.753-.153 1.017a1.26 1.26 0 0 1-.523.475a2 2 0 0 1-.408.15a5.5 5.5 0 0 1-.828.135c-.592.059-1.34.08-2.097.078c-1.445-.002-3.035-.084-3.855-.168c-.82.084-2.41.166-3.855.168a22 22 0 0 1-2.097-.078a5.5 5.5 0 0 1-.828-.135a2 2 0 0 1-.408-.15a1.25 1.25 0 0 1-.522-.474l.002.004a1.4 1.4 0 0 1-.157-1.023c.09-.41.346-.75.695-1.008l.001-.001c.166-.123.352-.235.546-.337a7.3 7.3 0 0 1-.936-1.597a6 6 0 0 1-.218.239a3 3 0 0 1-.445.382c-.128.085-.464.295-.901.242h-.003a1.13 1.13 0 0 1-.796-.506a1.7 1.7 0 0 1-.21-.48a3.8 3.8 0 0 1-.106-1.048c.014-.813.196-1.972.681-3.534c.205-.661.482-1.42.756-2.134l.005-.013l.911-2.279l-.009-.583c0-2.247.528-4.581 1.79-6.385m-1.825 13.18l1.851-3.004v3.53c0 1.042.557 2.521 1.837 3.605l1.394 1.18l-1.319.407h.308c1.467-.002 3.062-.09 3.746-.167l.112-.013l.112.013c.684.077 2.28.165 3.746.167h.307l-1.32-.408l1.395-1.18c1.28-1.083 1.836-2.562 1.836-3.605v-3.53l1.852 3.006l.003.004l.01.017l.043.069l.01.016a18 18 0 0 0-.354-1.3a35 35 0 0 0-.71-2.004l-1.057-2.64v-.193l.007-.32c.003-.157.007-.332.007-.445c0-1.973-.47-3.867-1.428-5.239c-.929-1.328-2.35-2.22-4.462-2.22c-2.113 0-3.534.892-4.463 2.22C6.576 5.604 6.107 7.5 6.107 9.472c0 .2.009.557.012.694l.001.051l.004.203l-1.06 2.65a34 34 0 0 0-.71 2.003m-.282 1.195l-.003.004l-.01.017l-.043.069l-.017.026q.129-.575.355-1.31\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M5.897 3.087C7.188 1.24 9.213.012 11.997.013c2.786 0 4.81 1.228 6.102 3.074c1.261 1.804 1.789 4.138 1.789 6.385c0 .137-.004.331-.007.487l-.002.096l.914 2.286l.003.007c.273.712.55 1.47.755 2.132c.486 1.563.669 2.723.684 3.535c.007.401-.025.756-.104 1.046a1.7 1.7 0 0 1-.209.478a1.13 1.13 0 0 1-.8.51c-.436.052-.772-.156-.9-.242a3 3 0 0 1-.446-.382a6 6 0 0 1-.217-.239a7.3 7.3 0 0 1-.936 1.596c.196.103.383.216.55.34c.348.26.601.6.692 1.008c.087.39.003.753-.153 1.017a1.26 1.26 0 0 1-.523.475a2 2 0 0 1-.408.15a5.5 5.5 0 0 1-.828.135c-.592.059-1.34.08-2.097.078c-1.445-.002-3.035-.084-3.855-.168c-.82.084-2.41.166-3.855.168a22 22 0 0 1-2.097-.078a5.5 5.5 0 0 1-.828-.135a2 2 0 0 1-.408-.15a1.25 1.25 0 0 1-.522-.474l.002.004a1.4 1.4 0 0 1-.157-1.023c.09-.41.346-.75.695-1.008l.001-.001c.166-.123.352-.235.546-.337a7.3 7.3 0 0 1-.936-1.597a6 6 0 0 1-.218.239a3 3 0 0 1-.445.382c-.128.085-.464.295-.901.242h-.003a1.13 1.13 0 0 1-.796-.506a1.7 1.7 0 0 1-.21-.48a3.8 3.8 0 0 1-.106-1.048c.014-.813.196-1.972.681-3.534c.205-.661.482-1.42.756-2.134l.005-.013l.911-2.279l-.009-.583c0-2.247.528-4.581 1.79-6.385m-1.825 13.18l1.851-3.004v3.53c0 1.042.557 2.521 1.837 3.605l1.394 1.18l-1.319.407h.308c1.467-.002 3.062-.09 3.746-.167l.112-.013l.112.013c.684.077 2.28.165 3.746.167h.307l-1.32-.408l1.395-1.18c1.28-1.083 1.836-2.562 1.836-3.605v-3.53l1.852 3.006l.003.004l.01.017l.043.069l.01.016a18 18 0 0 0-.354-1.3a35 35 0 0 0-.71-2.004l-1.057-2.64v-.193l.007-.32c.003-.157.007-.332.007-.445c0-1.973-.47-3.867-1.428-5.239c-.929-1.328-2.35-2.22-4.462-2.22c-2.113 0-3.534.892-4.463 2.22C6.576 5.604 6.107 7.5 6.107 9.472c0 .2.009.557.012.694l.001.051l.004.203l-1.06 2.65a34 34 0 0 0-.71 2.003m-.282 1.195l-.003.004l-.01.017l-.043.069l-.017.026q.129-.575.355-1.31\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M240 56v48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h27.4l-26.59-24.36l-.25-.24a80 80 0 1 0-1.67 114.78a8 8 0 0 1 11 11.63A95.44 95.44 0 0 1 128 224h-1.32a96 96 0 1 1 69.07-164L224 85.8V56a8 8 0 1 1 16 0\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M240 56v48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h27.4l-26.59-24.36l-.25-.24a80 80 0 1 0-1.67 114.78a8 8 0 0 1 11 11.63A95.44 95.44 0 0 1 128 224h-1.32a96 96 0 1 1 69.07-164L224 85.8V56a8 8 0 1 1 16 0\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M228.21 124.67A51.6 51.6 0 0 1 232 144c0 39.76-46.56 72-104 72S24 183.76 24 144a51.6 51.6 0 0 1 3.79-19.33a24 24 0 1 1 31.62-34.79C77.72 78.75 101.72 72 128 72s50.28 6.75 68.59 17.88a24 24 0 1 1 31.62 34.79\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M248 104a32 32 0 0 0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17l17.72 2.72a24 24 0 1 0 2.87-15.74l-26-4a8 8 0 0 0-9.11 6.59l-6.87 41.48c-21.84.94-42.82 6.38-60.26 15.65a32 32 0 0 0-42.59 47.74A59 59 0 0 0 16 144c0 21.93 12 42.35 33.91 57.49C70.88 216 98.61 224 128 224s57.12-8 78.09-22.51C228 186.35 240 165.93 240 144a59 59 0 0 0-2.35-16.45A32.16 32.16 0 0 0 248 104m-64-80a8 8 0 1 1-8 8a8 8 0 0 1 8-8m40.13 93.78a8 8 0 0 0-3.29 10A43.6 43.6 0 0 1 224 144c0 16.53-9.59 32.27-27 44.33C178.67 201 154.17 208 128 208s-50.67-7-69-19.67c-17.41-12.06-27-27.8-27-44.33a43.8 43.8 0 0 1 3.14-16.17a8 8 0 0 0-3.27-10a16 16 0 1 1 21.07-23.24a8 8 0 0 0 10.63 2.12l.18-.11C81.45 85.9 104.25 80 128 80c23.73 0 46.53 5.9 64.23 16.6l.18.11a8 8 0 0 0 10.63-2.12a16 16 0 1 1 21.07 23.19ZM88 144a16 16 0 1 1 16-16a16 16 0 0 1-16 16m96-16a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-16.93 44.25a8 8 0 0 1-3.32 10.82a76.18 76.18 0 0 1-71.5 0a8 8 0 1 1 7.5-14.14a60.18 60.18 0 0 0 56.5 0a8 8 0 0 1 10.82 3.32\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M228.21 124.67A51.6 51.6 0 0 1 232 144c0 39.76-46.56 72-104 72S24 183.76 24 144a51.6 51.6 0 0 1 3.79-19.33a24 24 0 1 1 31.62-34.79C77.72 78.75 101.72 72 128 72s50.28 6.75 68.59 17.88a24 24 0 1 1 31.62 34.79\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M248 104a32 32 0 0 0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17l17.72 2.72a24 24 0 1 0 2.87-15.74l-26-4a8 8 0 0 0-9.11 6.59l-6.87 41.48c-21.84.94-42.82 6.38-60.26 15.65a32 32 0 0 0-42.59 47.74A59 59 0 0 0 16 144c0 21.93 12 42.35 33.91 57.49C70.88 216 98.61 224 128 224s57.12-8 78.09-22.51C228 186.35 240 165.93 240 144a59 59 0 0 0-2.35-16.45A32.16 32.16 0 0 0 248 104m-64-80a8 8 0 1 1-8 8a8 8 0 0 1 8-8m40.13 93.78a8 8 0 0 0-3.29 10A43.6 43.6 0 0 1 224 144c0 16.53-9.59 32.27-27 44.33C178.67 201 154.17 208 128 208s-50.67-7-69-19.67c-17.41-12.06-27-27.8-27-44.33a43.8 43.8 0 0 1 3.14-16.17a8 8 0 0 0-3.27-10a16 16 0 1 1 21.07-23.24a8 8 0 0 0 10.63 2.12l.18-.11C81.45 85.9 104.25 80 128 80c23.73 0 46.53 5.9 64.23 16.6l.18.11a8 8 0 0 0 10.63-2.12a16 16 0 1 1 21.07 23.19ZM88 144a16 16 0 1 1 16-16a16 16 0 0 1-16 16m96-16a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-16.93 44.25a8 8 0 0 1-3.32 10.82a76.18 76.18 0 0 1-71.5 0a8 8 0 1 1 7.5-14.14a60.18 60.18 0 0 0 56.5 0a8 8 0 0 1 10.82 3.32\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m96 240l16-80l-64-24L160 16l-16 80l64 24Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26M109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m96 240l16-80l-64-24L160 16l-16 80l64 24Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26M109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 179, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972a.794.794 0 0 0-.884-.618a.795.795 0 0 0-.692.794c0 .101-.002.666.001.777m-11.509 4.808c-.203.001-1.353.004-1.685.003a2.5 2.5 0 0 1-.766-.126a.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124c.66.01 1.32.002 1.981 0q.017 0 .023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01l-.01.08c-.027.397-.038.495-.234 3.06c-.012.24-.034.389-.135.607c-.026.057-.033.042.003.112c.046.092.681 1.523.787 1.74c.008.015.011.02.017.02c.008 0 .033-.026.047-.044q.219-.282.371-.606c.306-.635.44-1.325.486-1.706c.014-.11.021-.22.03-.33l.204-2.616l.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.4 1.4 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.4.4 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293q.114 1.473.233 2.946c.05.4.186 1.085.487 1.706c.103.215.223.419.37.606c.015.018.037.051.048.049c.02-.003.742-1.642.804-1.765c.036-.07.03-.055.003-.112m3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56q-.017 0-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.5.5 0 0 0-.02.191a.46.46 0 0 0 .23.378a1 1 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.5.5 0 0 0-.023.172a.47.47 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001q.017 0 .023-.015l.575-1.28a.025.025 0 0 0-.024-.035m-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829c0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047c.001.037.465 1.064.555 1.263c.01.02.03.033.051.033c.157.003.767.009.938-.014c.153-.02.3-.06.438-.132c.3-.156.49-.419.595-.765c.052-.172.075-.353.075-.533q.003-3.495-.007-6.991a.03.03 0 0 0-.032-.032zm11.784 6.896q-.002-.02-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084c-.37 0-1.11-.002-1.304 0c-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036s.013.008.058.008q2.622.003 5.243.002c.03-.001.034-.006.035-.033zm4.177-3.43q0 .021-.02.024c-.346.006-.692.004-1.037.004q-.021-.003-.022-.024q-.006-.651-.01-1.303c0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015c.093.025.16.107.165.204c.006.431.002 1.153.001 1.153m2.67.244a1.95 1.95 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21q.001-.198-.025-.394a1.8 1.8 0 0 0-.153-.53a1.53 1.53 0 0 0-.677-.71a2.2 2.2 0 0 0-1-.258c-.153-.003-.567 0-.72 0c-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007q-.008.008-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128v1.148s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003a.7.7 0 0 1 .28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185c0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033q.276.655.57 1.303a.05.05 0 0 0 .04.026c.17.005.34.002.51.003c.15-.002.517.004.666-.01a2 2 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981q.001-.191-.034-.38c0 .078-.029-.641-.724-.998\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972a.794.794 0 0 0-.884-.618a.795.795 0 0 0-.692.794c0 .101-.002.666.001.777m-11.509 4.808c-.203.001-1.353.004-1.685.003a2.5 2.5 0 0 1-.766-.126a.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124c.66.01 1.32.002 1.981 0q.017 0 .023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01l-.01.08c-.027.397-.038.495-.234 3.06c-.012.24-.034.389-.135.607c-.026.057-.033.042.003.112c.046.092.681 1.523.787 1.74c.008.015.011.02.017.02c.008 0 .033-.026.047-.044q.219-.282.371-.606c.306-.635.44-1.325.486-1.706c.014-.11.021-.22.03-.33l.204-2.616l.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.4 1.4 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.4.4 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293q.114 1.473.233 2.946c.05.4.186 1.085.487 1.706c.103.215.223.419.37.606c.015.018.037.051.048.049c.02-.003.742-1.642.804-1.765c.036-.07.03-.055.003-.112m3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56q-.017 0-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.5.5 0 0 0-.02.191a.46.46 0 0 0 .23.378a1 1 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.5.5 0 0 0-.023.172a.47.47 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001q.017 0 .023-.015l.575-1.28a.025.025 0 0 0-.024-.035m-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829c0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047c.001.037.465 1.064.555 1.263c.01.02.03.033.051.033c.157.003.767.009.938-.014c.153-.02.3-.06.438-.132c.3-.156.49-.419.595-.765c.052-.172.075-.353.075-.533q.003-3.495-.007-6.991a.03.03 0 0 0-.032-.032zm11.784 6.896q-.002-.02-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084c-.37 0-1.11-.002-1.304 0c-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036s.013.008.058.008q2.622.003 5.243.002c.03-.001.034-.006.035-.033zm4.177-3.43q0 .021-.02.024c-.346.006-.692.004-1.037.004q-.021-.003-.022-.024q-.006-.651-.01-1.303c0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015c.093.025.16.107.165.204c.006.431.002 1.153.001 1.153m2.67.244a1.95 1.95 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21q.001-.198-.025-.394a1.8 1.8 0 0 0-.153-.53a1.53 1.53 0 0 0-.677-.71a2.2 2.2 0 0 0-1-.258c-.153-.003-.567 0-.72 0c-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007q-.008.008-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128v1.148s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003a.7.7 0 0 1 .28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185c0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033q.276.655.57 1.303a.05.05 0 0 0 .04.026c.17.005.34.002.51.003c.15-.002.517.004.666-.01a2 2 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981q.001-.191-.034-.38c0 .078-.029-.641-.724-.998\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 136a88 88 0 1 1-88-88a88 88 0 0 1 88 88\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 136a88 88 0 1 1-88-88a88 88 0 0 1 88 88\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 120a95.55 95.55 0 0 1-56-18v54a68 68 0 0 1-136 0c0-33.46 24.17-62.33 56-68v42.69A28 28 0 1 0 128 156V24h40a56 56 0 0 0 56 56Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 72a48.05 48.05 0 0 1-48-48a8 8 0 0 0-8-8h-40a8 8 0 0 0-8 8v132a20 20 0 1 1-28.57-18.08a8 8 0 0 0 4.57-7.23V88a8 8 0 0 0-9.4-7.88C50.91 86.48 24 119.1 24 156a76 76 0 0 0 152 0v-39.71A103.25 103.25 0 0 0 224 128a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 39.64a87.2 87.2 0 0 1-43.33-16.15A8 8 0 0 0 160 102v54a60 60 0 0 1-120 0c0-25.9 16.64-49.13 40-57.6v27.67A36 36 0 1 0 136 156V32h24.5A64.14 64.14 0 0 0 216 87.5Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 120a95.55 95.55 0 0 1-56-18v54a68 68 0 0 1-136 0c0-33.46 24.17-62.33 56-68v42.69A28 28 0 1 0 128 156V24h40a56 56 0 0 0 56 56Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 72a48.05 48.05 0 0 1-48-48a8 8 0 0 0-8-8h-40a8 8 0 0 0-8 8v132a20 20 0 1 1-28.57-18.08a8 8 0 0 0 4.57-7.23V88a8 8 0 0 0-9.4-7.88C50.91 86.48 24 119.1 24 156a76 76 0 0 0 152 0v-39.71A103.25 103.25 0 0 0 224 128a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 39.64a87.2 87.2 0 0 1-43.33-16.15A8 8 0 0 0 160 102v54a60 60 0 0 1-120 0c0-25.9 16.64-49.13 40-57.6v27.67A36 36 0 1 0 136 156V32h24.5A64.14 64.14 0 0 0 216 87.5Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 64v144H32V48h176a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v108.69l50.34-50.35a8 8 0 0 1 11.32 0L128 132.69L180.69 80H160a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8v40a8 8 0 0 1-16 0V91.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-56 56V200h184a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 64v144H32V48h176a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v108.69l50.34-50.35a8 8 0 0 1 11.32 0L128 132.69L180.69 80H160a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8v40a8 8 0 0 1-16 0V91.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-56 56V200h184a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cg fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'1.5\\' color=\\'currentColor\\'%3E%3Cpath d=\\'M17.148 22C20.037 22 21 19.678 21 16.813c-.963 1.037-3.633 3.207-4.815-1.038C14.741 10.588 10.5 11.5 8 14c3.852 0 4.383.897 5.296 3.85c.963 3.112 2.408 4.15 3.852 4.15\\'/%3E%3Cpath d=\\'M6.515 11a8 8 0 0 1-.015-.5c0-3.314 2.015-6 4.5-6s4.5 2.686 4.5 6c0 .892-.238 1.739-.5 2.5\\'/%3E%3Cpath d=\\'M13.241 18.662A7.6 7.6 0 0 1 11 19c-4.418 0-8-3.806-8-8.5S6.582 2 11 2s8 3.806 8 8.5a8.9 8.9 0 0 1-.707 3.5\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cg fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'1.5\\' color=\\'currentColor\\'%3E%3Cpath d=\\'M17.148 22C20.037 22 21 19.678 21 16.813c-.963 1.037-3.633 3.207-4.815-1.038C14.741 10.588 10.5 11.5 8 14c3.852 0 4.383.897 5.296 3.85c.963 3.112 2.408 4.15 3.852 4.15\\'/%3E%3Cpath d=\\'M6.515 11a8 8 0 0 1-.015-.5c0-3.314 2.015-6 4.5-6s4.5 2.686 4.5 6c0 .892-.238 1.739-.5 2.5\\'/%3E%3Cpath d=\\'M13.241 18.662A7.6 7.6 0 0 1 11 19c-4.418 0-8-3.806-8-8.5S6.582 2 11 2s8 3.806 8 8.5a8.9 8.9 0 0 1-.707 3.5\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M19 5h-5v7l5 6zm-9 13v-6l-5 6z\\' opacity=\\'.3\\'/%3E%3Cpath fill=\\'currentColor\\' d=\\'M19 3h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-2h-2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2zm-2 17H5l5-6z\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M19 5h-5v7l5 6zm-9 13v-6l-5 6z\\' opacity=\\'.3\\'/%3E%3Cpath fill=\\'currentColor\\' d=\\'M19 3h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-2h-2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2zm-2 17H5l5-6z\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(16, 185, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M163.94 80.11C162.63 80 161.32 80 160 80a72 72 0 0 0-67.93 95.88a71.5 71.5 0 0 1-30-8.39l-27.76 8.16a8 8 0 0 1-9.93-9.93L32.5 138a72 72 0 1 1 131.44-57.89\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M144 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m51.34 83.47a16 16 0 0 1-19.87 19.87l-24.71-7.27a80 80 0 0 1-108.33-40.65a79 79 0 0 1-25.19-7.35l-24.71 7.27a16 16 0 0 1-19.87-19.87l7.27-24.71a80 80 0 1 1 145.65-66.17a80 80 0 0 1 62.49 114.17ZM81.3 166.3a79.94 79.94 0 0 1 70.38-93.87a64 64 0 0 0-112.13 61.76a8 8 0 0 1 .63 6L32 168l27.76-8.17a8 8 0 0 1 6 .63a63.5 63.5 0 0 0 15.54 5.84m135.15 15.89a64 64 0 1 0-26.26 26.26a8 8 0 0 1 6-.63L224 216l-8.17-27.76a8 8 0 0 1 .62-6.05\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M163.94 80.11C162.63 80 161.32 80 160 80a72 72 0 0 0-67.93 95.88a71.5 71.5 0 0 1-30-8.39l-27.76 8.16a8 8 0 0 1-9.93-9.93L32.5 138a72 72 0 1 1 131.44-57.89\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M144 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m51.34 83.47a16 16 0 0 1-19.87 19.87l-24.71-7.27a80 80 0 0 1-108.33-40.65a79 79 0 0 1-25.19-7.35l-24.71 7.27a16 16 0 0 1-19.87-19.87l7.27-24.71a80 80 0 1 1 145.65-66.17a80 80 0 0 1 62.49 114.17ZM81.3 166.3a79.94 79.94 0 0 1 70.38-93.87a64 64 0 0 0-112.13 61.76a8 8 0 0 1 .63 6L32 168l27.76-8.17a8 8 0 0 1 6 .63a63.5 63.5 0 0 0 15.54 5.84m135.15 15.89a64 64 0 1 0-26.26 26.26a8 8 0 0 1 6-.63L224 216l-8.17-27.76a8 8 0 0 1 .62-6.05\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(16, 185, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m238.2 87.69l-104 125.43a8 8 0 0 1-12.3 0L17.8 87.69a7.79 7.79 0 0 1 1.31-11.21a180.75 180.75 0 0 1 217.78 0a7.79 7.79 0 0 1 1.31 11.21\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89M128 208L24.09 82.74A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m238.2 87.69l-104 125.43a8 8 0 0 1-12.3 0L17.8 87.69a7.79 7.79 0 0 1 1.31-11.21a180.75 180.75 0 0 1 217.78 0a7.79 7.79 0 0 1 1.31 11.21\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89M128 208L24.09 82.74A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 20 20\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M14.812 9.801c-.778-.141-.4-.534-.4-.534s.761-1.178-.15-2.034c-1.13-1.061-3.877.135-3.877.135c-1.05.306-.77-.14-.622-.897c0-.892-.326-2.402-3.12-1.51C3.853 5.858 1.455 9 1.455 9C-.212 11.087.01 12.7.01 12.7c.416 3.562 4.448 4.54 7.584 4.771c3.299.243 7.752-1.067 9.102-3.76c1.35-2.696-1.104-3.763-1.884-3.91m-1.044 2.549c0 2.051-2.653 3.977-5.93 4.117c-3.276.144-5.923-1.398-5.923-3.45c0-2.054 2.647-3.7 5.923-3.842s5.93 1.126 5.93 3.175m-6.584-1.823c-3.293.362-2.913 3.259-2.913 3.259s-.034.917.883 1.384c1.927.98 3.912.387 4.915-.829s.415-4.173-2.885-3.814m.281 3.075c0 .48-.498.925-1.112.99c-.614.068-1.11-.265-1.11-.747s.44-.985 1.055-1.045c.707-.064 1.167.318 1.167.802m1.003-1.15c.11.174.031.437-.173.588c-.208.146-.464.126-.574-.05c-.115-.17-.072-.445.139-.588c.244-.171.498-.122.608.05m4.86-9.806c.335-.06 1.532-.281 2.696-.025c2.083.456 4.941 2.346 3.655 6.368c-.094.575-.398.62-.76.62c-.432 0-.781-.255-.781-.662c0-.352.155-.71.155-.71c.046-.148.411-1.07-.241-2.448c-1.198-1.887-3.609-1.915-3.893-1.807a3.5 3.5 0 0 1-.591.141l-.106.016l-.014.002c-.437 0-.786-.333-.786-.737a.75.75 0 0 1 .573-.715s.007-.011.018-.014c.024-.004.049-.027.075-.029m.66 2.611s3.367-.584 2.964 2.811a.2.2 0 0 1-.007.054c-.037.241-.264.426-.529.426c-.3 0-.543-.225-.543-.507c0 0 .534-2.269-1.885-1.768c-.299 0-.538-.227-.538-.505c0-.283.24-.51.538-.51\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 20 20\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M14.812 9.801c-.778-.141-.4-.534-.4-.534s.761-1.178-.15-2.034c-1.13-1.061-3.877.135-3.877.135c-1.05.306-.77-.14-.622-.897c0-.892-.326-2.402-3.12-1.51C3.853 5.858 1.455 9 1.455 9C-.212 11.087.01 12.7.01 12.7c.416 3.562 4.448 4.54 7.584 4.771c3.299.243 7.752-1.067 9.102-3.76c1.35-2.696-1.104-3.763-1.884-3.91m-1.044 2.549c0 2.051-2.653 3.977-5.93 4.117c-3.276.144-5.923-1.398-5.923-3.45c0-2.054 2.647-3.7 5.923-3.842s5.93 1.126 5.93 3.175m-6.584-1.823c-3.293.362-2.913 3.259-2.913 3.259s-.034.917.883 1.384c1.927.98 3.912.387 4.915-.829s.415-4.173-2.885-3.814m.281 3.075c0 .48-.498.925-1.112.99c-.614.068-1.11-.265-1.11-.747s.44-.985 1.055-1.045c.707-.064 1.167.318 1.167.802m1.003-1.15c.11.174.031.437-.173.588c-.208.146-.464.126-.574-.05c-.115-.17-.072-.445.139-.588c.244-.171.498-.122.608.05m4.86-9.806c.335-.06 1.532-.281 2.696-.025c2.083.456 4.941 2.346 3.655 6.368c-.094.575-.398.62-.76.62c-.432 0-.781-.255-.781-.662c0-.352.155-.71.155-.71c.046-.148.411-1.07-.241-2.448c-1.198-1.887-3.609-1.915-3.893-1.807a3.5 3.5 0 0 1-.591.141l-.106.016l-.014.002c-.437 0-.786-.333-.786-.737a.75.75 0 0 1 .573-.715s.007-.011.018-.014c.024-.004.049-.027.075-.029m.66 2.611s3.367-.584 2.964 2.811a.2.2 0 0 1-.007.054c-.037.241-.264.426-.529.426c-.3 0-.543-.225-.543-.507c0 0 .534-2.269-1.885-1.768c-.299 0-.538-.227-.538-.505c0-.283.24-.51.538-.51\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M208 216h-48L48 40h48Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M208 216h-48L48 40h48Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 0 1-96 96a48 48 0 0 1 0-96a48 48 0 0 0 0-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88.1 88.1 0 0 1 88-88a40 40 0 0 1 0 80a56 56 0 0 0-50.61 80A88 88 0 0 1 40 128m88 88a40 40 0 0 1 0-80a56 56 0 0 0 50.61-79.95A88 88 0 0 1 128 216m12-40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-24-96a12 12 0 1 1 12 12a12 12 0 0 1-12-12\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 0 1-96 96a48 48 0 0 1 0-96a48 48 0 0 0 0-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88.1 88.1 0 0 1 88-88a40 40 0 0 1 0 80a56 56 0 0 0-50.61 80A88 88 0 0 1 40 128m88 88a40 40 0 0 1 0-80a56 56 0 0 0 50.61-79.95A88 88 0 0 1 128 216m12-40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-24-96a12 12 0 1 1 12 12a12 12 0 0 1-12-12\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cg fill=\\'none\\'%3E%3Cpath fill=\\'currentColor\\' fill-opacity=\\'.16\\' fill-rule=\\'evenodd\\' d=\\'M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33M9.75 8.479v6.542l5.75-3.271z\\' clip-rule=\\'evenodd\\'/%3E%3Cpath stroke=\\'currentColor\\' stroke-linejoin=\\'round\\' stroke-miterlimit=\\'10\\' stroke-width=\\'1.5\\' d=\\'M20.595 4.463A2.77 2.77 0 0 1 22.54 6.42c.46 1.728.46 5.33.46 5.33s0 3.604-.46 5.33a2.77 2.77 0 0 1-1.945 1.958C18.88 19.5 12 19.5 12 19.5s-6.879 0-8.595-.462A2.77 2.77 0 0 1 1.46 17.08C1 15.353 1 11.75 1 11.75s0-3.602.46-5.33a2.77 2.77 0 0 1 1.945-1.957C5.12 4 12 4 12 4s6.88 0 8.595.463Z\\'/%3E%3Cpath stroke=\\'currentColor\\' stroke-linejoin=\\'round\\' stroke-miterlimit=\\'10\\' stroke-width=\\'1.5\\' d=\\'M9.75 15.021V8.48l5.75 3.271z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cg fill=\\'none\\'%3E%3Cpath fill=\\'currentColor\\' fill-opacity=\\'.16\\' fill-rule=\\'evenodd\\' d=\\'M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33M9.75 8.479v6.542l5.75-3.271z\\' clip-rule=\\'evenodd\\'/%3E%3Cpath stroke=\\'currentColor\\' stroke-linejoin=\\'round\\' stroke-miterlimit=\\'10\\' stroke-width=\\'1.5\\' d=\\'M20.595 4.463A2.77 2.77 0 0 1 22.54 6.42c.46 1.728.46 5.33.46 5.33s0 3.604-.46 5.33a2.77 2.77 0 0 1-1.945 1.958C18.88 19.5 12 19.5 12 19.5s-6.879 0-8.595-.462A2.77 2.77 0 0 1 1.46 17.08C1 15.353 1 11.75 1 11.75s0-3.602.46-5.33a2.77 2.77 0 0 1 1.945-1.957C5.12 4 12 4 12 4s6.88 0 8.595.463Z\\'/%3E%3Cpath stroke=\\'currentColor\\' stroke-linejoin=\\'round\\' stroke-miterlimit=\\'10\\' stroke-width=\\'1.5\\' d=\\'M9.75 15.021V8.48l5.75 3.271z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 32 32\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M27.662 8.552a1.5 1.5 0 0 1 .159 1.66l-5.446 10.113l5.8-1.29a1.5 1.5 0 0 1 .65 2.93l-9 2a1.5 1.5 0 0 1-1.646-2.176l5.283-9.812l-6.531 1.96a1.5 1.5 0 1 1-.862-2.874l10-3a1.5 1.5 0 0 1 1.593.489\\'/%3E%3Cpath d=\\'M9 19a1 1 0 0 1 1-1h7a1 1 0 0 1 .753 1.659L12.203 26H17a1 1 0 1 1 0 2h-7a1 1 0 0 1-.753-1.658L14.797 20H10a1 1 0 0 1-1-1\\'/%3E%3Cpath d=\\'M4.287 21.042a1 1 0 0 0-.574 1.916l3.102.93L2.4 27.2a1 1 0 0 0 .404 1.78l5 1a1 1 0 0 0 .392-1.96l-2.807-.562L9.6 24.3a1 1 0 0 0-.313-1.758z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 32 32\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M27.662 8.552a1.5 1.5 0 0 1 .159 1.66l-5.446 10.113l5.8-1.29a1.5 1.5 0 0 1 .65 2.93l-9 2a1.5 1.5 0 0 1-1.646-2.176l5.283-9.812l-6.531 1.96a1.5 1.5 0 1 1-.862-2.874l10-3a1.5 1.5 0 0 1 1.593.489\\'/%3E%3Cpath d=\\'M9 19a1 1 0 0 1 1-1h7a1 1 0 0 1 .753 1.659L12.203 26H17a1 1 0 1 1 0 2h-7a1 1 0 0 1-.753-1.658L14.797 20H10a1 1 0 0 1-1-1\\'/%3E%3Cpath d=\\'M4.287 21.042a1 1 0 0 0-.574 1.916l3.102.93L2.4 27.2a1 1 0 0 0 .404 1.78l5 1a1 1 0 0 0 .392-1.96l-2.807-.562L9.6 24.3a1 1 0 0 0-.313-1.758z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M13.374 18.897h1.452l.478 1.637l2.605-1.637h3.07V5.395h-7.605zM14.919 6.86h4.515v10.57h-1.732l-1.73 1.087l-.315-1.084l-.738-.003zm-2.83 4.712H8.846a70 70 0 0 0 .136-4.56h3.172s.122-1.4-.532-1.384H6.135q.325-1.22.814-2.524s-1.493 0-2.001 1.339c-.21.552-.82 2.677-1.903 4.848c.365-.04 1.573-.073 2.284-1.378c.13-.366.156-.414.318-.902h1.79c0 .651-.074 4.151-.105 4.558h-3.24c-.728 0-.964 1.466-.964 1.466h4.065c-.272 3.095-1.737 5.703-4.392 7.764c1.27.363 2.536-.057 3.162-.614c0 0 1.425-1.297 2.206-4.298l3.345 4.03s.491-1.668-.076-2.482c-.47-.553-1.74-2.051-2.281-2.594l-.907.72q.405-1.302.488-2.524h3.822s-.005-1.466-.47-1.466\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M13.374 18.897h1.452l.478 1.637l2.605-1.637h3.07V5.395h-7.605zM14.919 6.86h4.515v10.57h-1.732l-1.73 1.087l-.315-1.084l-.738-.003zm-2.83 4.712H8.846a70 70 0 0 0 .136-4.56h3.172s.122-1.4-.532-1.384H6.135q.325-1.22.814-2.524s-1.493 0-2.001 1.339c-.21.552-.82 2.677-1.903 4.848c.365-.04 1.573-.073 2.284-1.378c.13-.366.156-.414.318-.902h1.79c0 .651-.074 4.151-.105 4.558h-3.24c-.728 0-.964 1.466-.964 1.466h4.065c-.272 3.095-1.737 5.703-4.392 7.764c1.27.363 2.536-.057 3.162-.614c0 0 1.425-1.297 2.206-4.298l3.345 4.03s.491-1.668-.076-2.482c-.47-.553-1.74-2.051-2.281-2.594l-.907.72q.405-1.302.488-2.524h3.822s-.005-1.466-.47-1.466\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 168, 130, 255;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 233, 151, 63;
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
  --callout-color: 158, 158, 158;
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
  --callout-color: 68, 207, 110;
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
  --callout-color: 83, 223, 221;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 233, 151, 63;
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
  --callout-color: 2, 122, 255;
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
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(212, 212, 212);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(212, 212, 212);
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
}

html[saved-theme="dark"] body ul.tags > li {
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
  color: rgb(245, 245, 245);
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
  --bases-table-cell-background-selected: hsla(0, 0%, 10%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #d4d4d4 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(0, 0%, 0%) !important;
  --bases-table-container-border-radius: 0.125em !important;
  --bases-table-group-background: #e5e5e5 !important;
  --bases-table-header-background: #fafafa !important;
  --bases-table-header-color: #737373 !important;
  --bases-table-summary-background: #fafafa !important;
  --blockquote-border-color: hsl(0, 0%, 0%) !important;
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
  --checkbox-checked-color: hsla(0, 0%, 10%) !important;
  --checkbox-color: #22c55e !important;
  --checkbox-color-hover: hsla(0, 0%, 73%, 0.5) !important;
  --checkbox-marker-color: #fafafa !important;
  --checkbox-radius: 0.125em !important;
  --checkbox-unchecked-color-hover: hsla(0, 0%, 10%, 0.5) !important;
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
  --collapse-icon-color-collapsed: hsl(0, 0%, 10%) !important;
  --color-accent: hsl(0, 0%, 10%) !important;
  --color-accent-1: hsl(0, 0%, 10%) !important;
  --color-accent-2: hsl(-3, 0%, 11.5%) !important;
  --color-accent-h1: hsl(0, 0%, 10%) !important;
  --color-accent-h2: hsl(0, 0%, 10%) !important;
  --color-accent-h3: hsl(0, 0%, 10%) !important;
  --color-accent-h4: hsl(0, 0%, 10%) !important;
  --color-accent-h5: hsl(0, 0%, 10%) !important;
  --color-accent-h6: hsl(0, 0%, 10%) !important;
  --color-accent-hsl: 0, 0%, 10% !important;
  --color-accent-ln10: hsl(0, 0%, 0%) !important;
  --color-accent-ln15: hsl(0, 0%, -5%) !important;
  --color-accent-ln20: hsl(0, 0%, -10%) !important;
  --color-accent-ln5: hsl(0, 0%, 5%) !important;
  --color-accent-o10: hsla(0, 0%, 10%, 0.1) !important;
  --color-accent-o20: hsla(0, 0%, 10%, 0.2) !important;
  --color-accent-o30: hsla(0, 0%, 10%, 0.3) !important;
  --color-accent-o40: hsla(0, 0%, 10%, 0.4) !important;
  --color-accent-o50: hsla(0, 0%, 10%, 0.5) !important;
  --color-accent-o60: hsla(0, 0%, 10%, 0.6) !important;
  --color-accent-o70: hsla(0, 0%, 10%, 0.7) !important;
  --color-accent-o80: hsla(0, 0%, 10%, 0.8) !important;
  --color-accent-o90: hsla(0, 0%, 10%, 0.9) !important;
  --color-beige-h: 50 !important;
  --color-beige-l: 91% !important;
  --color-beige-main: hsl(50, 100%, 91%) !important;
  --color-beige-s: 100% !important;
  --color-blue-h: 207 !important;
  --color-blue-l: 73% !important;
  --color-blue-main: hsl(207, 47%, 73%) !important;
  --color-blue-s: 47% !important;
  --color-bw-h: 0 !important;
  --color-bw-s: 0% !important;
  --color-default-h1: #404040 !important;
  --color-default-h2: #404040 !important;
  --color-default-h3: #404040 !important;
  --color-default-h4: #404040 !important;
  --color-default-h5: #404040 !important;
  --color-default-h6: #404040 !important;
  --color-gradient-h1: hsla(0, 0%, 10%, 1) !important;
  --color-gradient-h2: hsla(0, 0%, 10%, 0.95) !important;
  --color-gradient-h3: hsla(0, 0%, 10%, 0.9) !important;
  --color-gradient-h4: hsla(0, 0%, 10%, 0.85) !important;
  --color-gradient-h5: hsla(0, 0%, 10%, 0.8) !important;
  --color-gradient-h6: hsla(0, 0%, 10%, 0.75) !important;
  --color-h: 0 !important;
  --color-l: 10% !important;
  --color-main: hsl(0, 0%, 10%) !important;
  --color-peach-h: 0 !important;
  --color-peach-l: 65% !important;
  --color-peach-main: hsl(0, 37%, 65%) !important;
  --color-peach-s: 37% !important;
  --color-pink-h: 0 !important;
  --color-pink-l: 91% !important;
  --color-pink-main: hsl(0, 100%, 91%) !important;
  --color-pink-s: 100% !important;
  --color-purple-h: 269 !important;
  --color-purple-l: 85% !important;
  --color-purple-main: hsl(269, 59%, 85%) !important;
  --color-purple-s: 59% !important;
  --color-s: 0% !important;
  --color-sage-h: 88 !important;
  --color-sage-l: 69% !important;
  --color-sage-main: hsl(88, 23%, 69%) !important;
  --color-sage-s: 23% !important;
  --dark: #404040 !important;
  --darkgray: #404040 !important;
  --divider-color: #d4d4d4 !important;
  --divider-color-hover: hsl(0, 0%, 0%) !important;
  --dropdown-background-hover: rgb(163 163 163 / 0.2) !important;
  --embed-border-start: 2px solid hsl(0, 0%, 0%) !important;
  --file-header-background: #fafafa !important;
  --file-header-background-focused: #fafafa !important;
  --file-header-font: "", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
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
  --font-highlight-bg-color: hsl(0, 0%, 10%) !important;
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
  --font-interface: "", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
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
  --graph-node-focused: hsl(0, 0%, 10%) !important;
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
  --icon-color-active: hsl(0, 0%, 10%) !important;
  --icon-color-focused: hsla(0, 0%, 10%, 0.8) !important;
  --icon-color-hover: #737373 !important;
  --icon-color-hovering: #171717 !important;
  --inactive-hover-opacity: 0.8 !important;
  --inactive-opacity: 0.3 !important;
  --inline-code-bg-color: rgba(229, 229, 229, 0.5) !important;
  --inline-code-text-color: #525252 !important;
  --inline-title-color: #404040 !important;
  --interactive-accent: hsl(0, 0%, 0%) !important;
  --interactive-accent-hover: hsl(0, 0%, 5%) !important;
  --interactive-accent-hsl: 0, 0%, 10% !important;
  --interactive-hover: rgb(163 163 163 / 0.2) !important;
  --light: #fafafa !important;
  --lightgray: #f5f5f5 !important;
  --link-color: hsl(0, 0%, 5%) !important;
  --link-color-hover: hsl(0, 0%, 5%) !important;
  --link-decoration-color: hsl(0, 0%, 5%) !important;
  --link-decoration-line: underline !important;
  --link-decoration-offset: 0.3em !important;
  --link-decoration-style: solid !important;
  --link-decoration-thickness: 1px !important;
  --link-external-color: hsl(0, 0%, 5%) !important;
  --link-external-color-hover: hsl(0, 0%, 5%) !important;
  --link-unresolved-color: hsla(0, 0%, 10%, 0.9) !important;
  --link-unresolved-color-hover: hsl(0, 0%, 10%) !important;
  --link-unresolved-decoration-color: hsla(hsla(0, 0%, 10%, 0.9), 0.3) !important;
  --link-unresolved-decoration-color-hover: hsla(hsl(0, 0%, 10%), 0.3) !important;
  --link-unresolved-decoration-line: underline !important;
  --link-unresolved-decoration-offset: 0.3em !important;
  --link-unresolved-decoration-style: dashed !important;
  --link-unresolved-decoration-width: 1px !important;
  --list-marker-color-collapsed: hsl(0, 0%, 10%) !important;
  --list-marker-color-hover: #737373 !important;
  --menu-background: #f5f5f5 !important;
  --metadata-input-font: "", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --metadata-input-text-color: #404040 !important;
  --metadata-label-font: "", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", "Helvetica", "Arial",
    sans-serif !important;
  --metadata-label-text-color: #737373 !important;
  --metadata-label-text-color-hover: #737373 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #d4d4d4 !important;
  --modal-background: #fafafa !important;
  --nav-heading-color: #404040 !important;
  --nav-heading-color-collapsed-hover: #737373 !important;
  --nav-heading-color-hover: #404040 !important;
  --nav-item-background-selected: hsla(0, 0%, 10%, 0.15) !important;
  --nav-item-color: #737373 !important;
  --nav-item-color-active: #404040 !important;
  --nav-item-color-highlighted: hsl(0, 0%, 10%) !important;
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
  --pill-color-remove-hover: hsl(0, 0%, 10%) !important;
  --prompt-background: #fafafa !important;
  --quote-bg-color: rgba(10, 10, 10, 0.05) !important;
  --radius-s: 0.125em !important;
  --raised-background: color-mix(in srgb, #fafafa 65%, transparent) linear-gradient(#fafafa, color-mix(in srgb, #fafafa 65%, transparent)) !important;
  --ribbon-background: #f5f5f5 !important;
  --ribbon-background-collapsed: #fafafa !important;
  --search-clear-button-color: #737373 !important;
  --search-icon-color: #737373 !important;
  --search-result-background: #fafafa !important;
  --secondary: hsl(0, 0%, 10%) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 0%, 10%) !important;
  --tab-text-color-active: #737373 !important;
  --tab-text-color-focused: #737373 !important;
  --tab-text-color-focused-active: #737373 !important;
  --tab-text-color-focused-active-current: #404040 !important;
  --tab-text-color-focused-highlighted: hsl(0, 0%, 10%) !important;
  --table-drag-handle-background-active: hsl(0, 0%, 0%) !important;
  --table-header-color: #404040 !important;
  --table-selection: hsla(0, 0%, 10%, 0.1) !important;
  --table-selection-border-color: hsl(0, 0%, 0%) !important;
  --tag-background: hsla(0, 0%, 10%, 0.1) !important;
  --tag-background-hover: hsla(0, 0%, 10%, 0.2) !important;
  --tag-border-color: hsla(0, 0%, 10%, 0.15) !important;
  --tag-border-color-hover: hsla(0, 0%, 10%, 0.15) !important;
  --tag-color: hsl(0, 0%, 10%) !important;
  --tag-color-hover: hsl(0, 0%, 10%) !important;
  --tag-radius: 0em !important;
  --tertiary: #171717 !important;
  --text-accent: hsl(0, 0%, 10%) !important;
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

html[saved-theme="light"] body .bases-table {
  border-color: rgba(0, 0, 0, 0) rgb(128, 128, 128);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(64, 64, 64);
  color: rgb(23, 23, 23);
  font-weight: 400;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(245, 245, 245);
  border-color: rgb(212, 212, 212);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(115, 115, 115);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(115, 115, 115);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  color: rgb(23, 23, 23);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(115, 115, 115);
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

html[saved-theme="light"] body h1.article-title {
  color: rgb(23, 23, 23);
  text-decoration: underline;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 0, 0);
  border-radius: 1.66667px;
  border-width: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(115, 115, 115);
  font-family: "", "??", "??", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
  outline: rgb(115, 115, 115) none 0px;
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
  text-decoration: underline 1px dashed;
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
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul > li {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul.overflow {
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
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
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
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(233, 49, 71);
  text-decoration-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M240 128c-64 0 0 88-64 88H80c-64 0 0-88-64-88c64 0 0-88 64-88h96c64 0 0 88 64 88\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M43.18 128a29.8 29.8 0 0 1 8 10.26c4.8 9.9 4.8 22 4.8 33.74c0 24.31 1 36 24 36a8 8 0 0 1 0 16c-17.48 0-29.32-6.14-35.2-18.26c-4.8-9.9-4.8-22-4.8-33.74c0-24.31-1-36-24-36a8 8 0 0 1 0-16c23 0 24-11.69 24-36c0-11.72 0-23.84 4.8-33.74C50.68 38.14 62.52 32 80 32a8 8 0 0 1 0 16c-23 0-24 11.69-24 36c0 11.72 0 23.84-4.8 33.74A29.8 29.8 0 0 1 43.18 128M240 120c-23 0-24-11.69-24-36c0-11.72 0-23.84-4.8-33.74C205.32 38.14 193.48 32 176 32a8 8 0 0 0 0 16c23 0 24 11.69 24 36c0 11.72 0 23.84 4.8 33.74a29.8 29.8 0 0 0 8 10.26a29.8 29.8 0 0 0-8 10.26c-4.8 9.9-4.8 22-4.8 33.74c0 24.31-1 36-24 36a8 8 0 0 0 0 16c17.48 0 29.32-6.14 35.2-18.26c4.8-9.9 4.8-22 4.8-33.74c0-24.31 1-36 24-36a8 8 0 0 0 0-16\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M240 128c-64 0 0 88-64 88H80c-64 0 0-88-64-88c64 0 0-88 64-88h96c64 0 0 88 64 88\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M43.18 128a29.8 29.8 0 0 1 8 10.26c4.8 9.9 4.8 22 4.8 33.74c0 24.31 1 36 24 36a8 8 0 0 1 0 16c-17.48 0-29.32-6.14-35.2-18.26c-4.8-9.9-4.8-22-4.8-33.74c0-24.31-1-36-24-36a8 8 0 0 1 0-16c23 0 24-11.69 24-36c0-11.72 0-23.84 4.8-33.74C50.68 38.14 62.52 32 80 32a8 8 0 0 1 0 16c-23 0-24 11.69-24 36c0 11.72 0 23.84-4.8 33.74A29.8 29.8 0 0 1 43.18 128M240 120c-23 0-24-11.69-24-36c0-11.72 0-23.84-4.8-33.74C205.32 38.14 193.48 32 176 32a8 8 0 0 0 0 16c23 0 24 11.69 24 36c0 11.72 0 23.84 4.8 33.74a29.8 29.8 0 0 0 8 10.26a29.8 29.8 0 0 0-8 10.26c-4.8 9.9-4.8 22-4.8 33.74c0 24.31-1 36-24 36a8 8 0 0 0 0 16c17.48 0 29.32-6.14 35.2-18.26c4.8-9.9 4.8-22 4.8-33.74c0-24.31 1-36 24-36a8 8 0 0 0 0-16\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M215.46 216H40.54c-12.62 0-20.54-13.21-14.41-23.91l87.46-151.87c6.3-11 22.52-11 28.82 0l87.46 151.87c6.13 10.7-1.79 23.91-14.41 23.91\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M215.46 216H40.54c-12.62 0-20.54-13.21-14.41-23.91l87.46-151.87c6.3-11 22.52-11 28.82 0l87.46 151.87c6.13 10.7-1.79 23.91-14.41 23.91\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 115, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M196 96c0 29.47-24.21 54.05-56 59.06v.94a12 12 0 0 1-24 0v-12a12 12 0 0 1 12-12c24.26 0 44-16.15 44-36s-19.74-36-44-36s-44 16.15-44 36a12 12 0 0 1-24 0c0-33.08 30.5-60 68-60s68 26.92 68 60m-68 92a20 20 0 1 0 20 20a20 20 0 0 0-20-20\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M196 96c0 29.47-24.21 54.05-56 59.06v.94a12 12 0 0 1-24 0v-12a12 12 0 0 1 12-12c24.26 0 44-16.15 44-36s-19.74-36-44-36s-44 16.15-44 36a12 12 0 0 1-24 0c0-33.08 30.5-60 68-60s68 26.92 68 60m-68 92a20 20 0 1 0 20 20a20 20 0 0 0-20-20\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 179, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 0 0 0 208c21.51 0 44.1-6.48 60.43-17.33a8 8 0 0 0-8.86-13.33C166 210.38 146.21 216 128 216a88 88 0 1 1 88-88c0 26.45-10.88 32-20 32s-20-5.55-20-32V88a8 8 0 0 0-16 0v4.26a48 48 0 1 0 5.93 65.1c6 12 16.35 18.64 30.07 18.64c22.54 0 36-17.94 36-48A104.11 104.11 0 0 0 128 24m0 136a32 32 0 1 1 32-32a32 32 0 0 1-32 32\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 0 0 0 208c21.51 0 44.1-6.48 60.43-17.33a8 8 0 0 0-8.86-13.33C166 210.38 146.21 216 128 216a88 88 0 1 1 88-88c0 26.45-10.88 32-20 32s-20-5.55-20-32V88a8 8 0 0 0-16 0v4.26a48 48 0 1 0 5.93 65.1c6 12 16.35 18.64 30.07 18.64c22.54 0 36-17.94 36-48A104.11 104.11 0 0 0 128 24m0 136a32 32 0 1 1 32-32a32 32 0 0 1-32 32\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 158, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M200 128a72 72 0 1 1-72-72a72 72 0 0 1 72 72\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M214.86 180.12a8 8 0 0 1-11 2.74L136 142.13V216a8 8 0 0 1-16 0v-73.87l-67.88 40.73a8 8 0 1 1-8.23-13.72L112.45 128L43.89 86.86a8 8 0 1 1 8.23-13.72L120 113.87V40a8 8 0 0 1 16 0v73.87l67.88-40.73a8 8 0 1 1 8.23 13.72L143.55 128l68.56 41.14a8 8 0 0 1 2.75 10.98\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M200 128a72 72 0 1 1-72-72a72 72 0 0 1 72 72\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M214.86 180.12a8 8 0 0 1-11 2.74L136 142.13V216a8 8 0 0 1-16 0v-73.87l-67.88 40.73a8 8 0 1 1-8.23-13.72L112.45 128L43.89 86.86a8 8 0 1 1 8.23-13.72L120 113.87V40a8 8 0 0 1 16 0v73.87l67.88-40.73a8 8 0 1 1 8.23 13.72L143.55 128l68.56 41.14a8 8 0 0 1 2.75 10.98\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M208 76a28 28 0 0 1-28 28h-28V76a28 28 0 0 1 28-28a28 28 0 0 1 28 28M76 48a28 28 0 0 0-28 28a28 28 0 0 0 28 28h28V76a28 28 0 0 0-28-28m104 104h-28v28a28 28 0 0 0 28 28a28 28 0 0 0 28-28a28 28 0 0 0-28-28M48 180a28 28 0 0 0 28 28a28 28 0 0 0 28-28v-28H76a28 28 0 0 0-28 28\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M180 144h-20v-32h20a36 36 0 1 0-36-36v20h-32V76a36 36 0 1 0-36 36h20v32H76a36 36 0 1 0 36 36v-20h32v20a36 36 0 1 0 36-36m-20-68a20 20 0 1 1 20 20h-20ZM56 76a20 20 0 0 1 40 0v20H76a20 20 0 0 1-20-20m40 104a20 20 0 1 1-20-20h20Zm16-68h32v32h-32Zm68 88a20 20 0 0 1-20-20v-20h20a20 20 0 0 1 0 40\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M208 76a28 28 0 0 1-28 28h-28V76a28 28 0 0 1 28-28a28 28 0 0 1 28 28M76 48a28 28 0 0 0-28 28a28 28 0 0 0 28 28h28V76a28 28 0 0 0-28-28m104 104h-28v28a28 28 0 0 0 28 28a28 28 0 0 0 28-28a28 28 0 0 0-28-28M48 180a28 28 0 0 0 28 28a28 28 0 0 0 28-28v-28H76a28 28 0 0 0-28 28\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M180 144h-20v-32h20a36 36 0 1 0-36-36v20h-32V76a36 36 0 1 0-36 36h20v32H76a36 36 0 1 0 36 36v-20h32v20a36 36 0 1 0 36-36m-20-68a20 20 0 1 1 20 20h-20ZM56 76a20 20 0 0 1 40 0v20H76a20 20 0 0 1-20-20m40 104a20 20 0 1 1-20-20h20Zm16-68h32v32h-32Zm68 88a20 20 0 0 1-20-20v-20h20a20 20 0 0 1 0 40\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 115, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 14 14\\'%3E%3Cpath fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' d=\\'M12.753 13.33c-.846-.725-2.299-1.89-3.837-3.21m0 0C7.467 8.873 5.942 7.49 4.774 6.201m4.142 3.917l-2.749 2.587A2.92 2.92 0 1 1 2.26 8.37l2.514-2.167m4.142 3.917l1.691-1.591M4.774 6.202C3.595 4.9 2.782 3.697 2.782 2.834C2.782.796 4.284.5 5.164.5c1.287 0 2.341.76 2.341 2.334c0 1.05-2.261 2.963-2.261 2.963z\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 14 14\\'%3E%3Cpath fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' d=\\'M12.753 13.33c-.846-.725-2.299-1.89-3.837-3.21m0 0C7.467 8.873 5.942 7.49 4.774 6.201m4.142 3.917l-2.749 2.587A2.92 2.92 0 1 1 2.26 8.37l2.514-2.167m4.142 3.917l1.691-1.591M4.774 6.202C3.595 4.9 2.782 3.697 2.782 2.834C2.782.796 4.284.5 5.164.5c1.287 0 2.341.76 2.341 2.334c0 1.05-2.261 2.963-2.261 2.963z\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 158, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m165.82 96l-11.64 64h-64l11.64-64Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 88h-48.6l8.47-46.57a8 8 0 0 0-15.74-2.86l-9 49.43H111.4l8.47-46.57a8 8 0 0 0-15.74-2.86L95.14 88H48a8 8 0 0 0 0 16h44.23l-8.73 48H32a8 8 0 0 0 0 16h48.6l-8.47 46.57a8 8 0 0 0 6.44 9.3A8 8 0 0 0 80 224a8 8 0 0 0 7.86-6.57l9-49.43h47.74l-8.47 46.57a8 8 0 0 0 6.44 9.3a8 8 0 0 0 1.43.13a8 8 0 0 0 7.86-6.57l9-49.43H208a8 8 0 0 0 0-16h-44.23l8.73-48H224a8 8 0 0 0 0-16m-76.5 64H99.77l8.73-48h47.73Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m165.82 96l-11.64 64h-64l11.64-64Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 88h-48.6l8.47-46.57a8 8 0 0 0-15.74-2.86l-9 49.43H111.4l8.47-46.57a8 8 0 0 0-15.74-2.86L95.14 88H48a8 8 0 0 0 0 16h44.23l-8.73 48H32a8 8 0 0 0 0 16h48.6l-8.47 46.57a8 8 0 0 0 6.44 9.3A8 8 0 0 0 80 224a8 8 0 0 0 7.86-6.57l9-49.43h47.74l-8.47 46.57a8 8 0 0 0 6.44 9.3a8 8 0 0 0 1.43.13a8 8 0 0 0 7.86-6.57l9-49.43H208a8 8 0 0 0 0-16h-44.23l8.73-48H224a8 8 0 0 0 0-16m-76.5 64H99.77l8.73-48h47.73Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 85, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M95.8 56.2a28 28 0 1 1-39.6 0a28 28 0 0 1 39.6 0m104 104a28 28 0 1 0 0 39.6a28 28 0 0 0 0-39.6\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m205.66 61.64l-144 144a8 8 0 0 1-11.32-11.32l144-144a8 8 0 0 1 11.32 11.31Zm-155.12 39.8a36 36 0 0 1 50.92-50.91a36 36 0 0 1-50.92 50.91M56 76a20 20 0 1 0 34.14-14.16A20 20 0 0 0 56 76m160 104a36 36 0 1 1-10.54-25.46A35.76 35.76 0 0 1 216 180m-16 0a20 20 0 1 0-5.86 14.14A19.87 19.87 0 0 0 200 180\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M95.8 56.2a28 28 0 1 1-39.6 0a28 28 0 0 1 39.6 0m104 104a28 28 0 1 0 0 39.6a28 28 0 0 0 0-39.6\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m205.66 61.64l-144 144a8 8 0 0 1-11.32-11.32l144-144a8 8 0 0 1 11.32 11.31Zm-155.12 39.8a36 36 0 0 1 50.92-50.91a36 36 0 0 1-50.92 50.91M56 76a20 20 0 1 0 34.14-14.16A20 20 0 0 0 56 76m160 104a36 36 0 1 1-10.54-25.46A35.76 35.76 0 0 1 216 180m-16 0a20 20 0 1 0-5.86 14.14A19.87 19.87 0 0 0 200 180\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(16, 185, 129);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 160a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 104h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 160a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 104h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M108 72v72H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8m108-8h-60a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h68V72a8 8 0 0 0-8-8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M100 56H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16m0 80H40V72h60Zm116-80h-60a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16m0 80h-60V72h60Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M108 72v72H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8m108-8h-60a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h68V72a8 8 0 0 0-8-8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M100 56H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16m0 80H40V72h60Zm116-80h-60a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h60v8a32 32 0 0 1-32 32a8 8 0 0 0 0 16a48.05 48.05 0 0 0 48-48V72a16 16 0 0 0-16-16m0 80h-60V72h60Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 115, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M204 168a52.06 52.06 0 0 1-52 52h-12v12a12 12 0 0 1-24 0v-12h-12a52.06 52.06 0 0 1-52-52a12 12 0 0 1 24 0a28 28 0 0 0 28 28h48a28 28 0 0 0 0-56h-40a52 52 0 0 1 0-104h4V24a12 12 0 0 1 24 0v12h4a52.06 52.06 0 0 1 52 52a12 12 0 0 1-24 0a28 28 0 0 0-28-28h-32a28 28 0 0 0 0 56h40a52.06 52.06 0 0 1 52 52\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M204 168a52.06 52.06 0 0 1-52 52h-12v12a12 12 0 0 1-24 0v-12h-12a52.06 52.06 0 0 1-52-52a12 12 0 0 1 24 0a28 28 0 0 0 28 28h48a28 28 0 0 0 0-56h-40a52 52 0 0 1 0-104h4V24a12 12 0 0 1 24 0v12h4a52.06 52.06 0 0 1 52 52a12 12 0 0 1-24 0a28 28 0 0 0-28-28h-32a28 28 0 0 0 0 56h40a52.06 52.06 0 0 1 52 52\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(16, 185, 129);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M183.25 63.2C170.25 42.79 151.15 32 128 32S85.75 42.79 72.75 63.2C62 80.18 56 103.19 56 128s6 47.82 16.75 64.8c13 20.41 32.1 31.2 55.25 31.2s42.25-10.79 55.25-31.2c10.8-17 16.75-40 16.75-64.8s-5.95-47.82-16.75-64.8M128 208c-38.68 0-56-40.18-56-80s17.32-80 56-80s56 40.18 56 80s-17.32 80-56 80\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M183.25 63.2C170.25 42.79 151.15 32 128 32S85.75 42.79 72.75 63.2C62 80.18 56 103.19 56 128s6 47.82 16.75 64.8c13 20.41 32.1 31.2 55.25 31.2s42.25-10.79 55.25-31.2c10.8-17 16.75-40 16.75-64.8s-5.95-47.82-16.75-64.8M128 208c-38.68 0-56-40.18-56-80s17.32-80 56-80s56 40.18 56 80s-17.32 80-56 80\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M144 48v160a8 8 0 0 1-16 0V62.13l-27.88 16.73a8 8 0 1 1-8.24-13.72l40-24A8 8 0 0 1 144 48\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M144 48v160a8 8 0 0 1-16 0V62.13l-27.88 16.73a8 8 0 1 1-8.24-13.72l40-24A8 8 0 0 1 144 48\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 208a8 8 0 0 1-8 8H88a8 8 0 0 1-6.4-12.8l71.94-95.92a32 32 0 1 0-51.1-38.53a32.5 32.5 0 0 0-3.78 6.46A8 8 0 1 1 84 68.8a48 48 0 1 1 82.33 48.09L104 200h64a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 208a8 8 0 0 1-8 8H88a8 8 0 0 1-6.4-12.8l71.94-95.92a32 32 0 1 0-51.1-38.53a32.5 32.5 0 0 0-3.78 6.46A8 8 0 1 1 84 68.8a48 48 0 1 1 82.33 48.09L104 200h64a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92A40 40 0 1 0 120 120a8 8 0 0 1-6.4-12.8L152 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 6.4 12.8l-39.84 53.12A56.1 56.1 0 0 1 176 160\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92A40 40 0 1 0 120 120a8 8 0 0 1-6.4-12.8L152 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 6.4 12.8l-39.84 53.12A56.1 56.1 0 0 1 176 160\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M184 160h-16V48a8 8 0 0 0-14.25-5l-96 120A8 8 0 0 0 64 176h88v32a8 8 0 0 0 16 0v-32h16a8 8 0 0 0 0-16m-32 0H80.64L152 70.81Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M184 160h-16V48a8 8 0 0 0-14.25-5l-96 120A8 8 0 0 0 64 176h88v32a8 8 0 0 0 16 0v-32h16a8 8 0 0 0 0-16m-32 0H80.64L152 70.81Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92a40 40 0 1 0 .77-60.3a8 8 0 0 1-13-7.66l15.06-75.43A8 8 0 0 1 104 40h64a8 8 0 0 1 0 16h-57.44l-10.32 51.6A56 56 0 0 1 176 160\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92a40 40 0 1 0 .77-60.3a8 8 0 0 1-13-7.66l15.06-75.43A8 8 0 0 1 104 40h64a8 8 0 0 1 0 16h-57.44l-10.32 51.6A56 56 0 0 1 176 160\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 104a56 56 0 0 0-15.62 2.23L143 51.93a8 8 0 1 0-14-7.85l-49.55 88A56 56 0 1 0 128 104m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 104a56 56 0 0 0-15.62 2.23L143 51.93a8 8 0 1 0-14-7.85l-49.55 88A56 56 0 1 0 128 104m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m175.66 50.3l-48 160a8 8 0 0 1-15.32-4.6L157.25 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 7.66 10.3\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m175.66 50.3l-48 160a8 8 0 0 1-15.32-4.6L157.25 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 7.66 10.3\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M155.55 119.27a48 48 0 1 0-55.1 0a56 56 0 1 0 55.1 0M96 80a32 32 0 1 1 32 32a32 32 0 0 1-32-32m32 128a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M155.55 119.27a48 48 0 1 0-55.1 0a56 56 0 1 0 55.1 0M96 80a32 32 0 1 1 32 32a32 32 0 0 1-32-32m32 128a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 40a56 56 0 1 0 15.62 109.77L113 204.07a8 8 0 1 0 14 7.85l49.55-88A56 56 0 0 0 128 40m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 40a56 56 0 1 0 15.62 109.77L113 204.07a8 8 0 1 0 14 7.85l49.55-88A56 56 0 0 0 128 40m0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 96v96a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 48H32a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16v88a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-16 144H48v-88h160Zm16-104H32V64h192zM96 136a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 96v96a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 48H32a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16v88a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-16 144H48v-88h160Zm16-104H32V64h192zM96 136a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 115, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M128 32a96 96 0 0 0-83.11 144.07l-12.47 37.39a8 8 0 0 0 10.12 10.12l37.39-12.47A96 96 0 1 0 128 32m24 152a80 80 0 0 1-80-80a32 32 0 0 1 32-32l16 32l-12.32 18.47a48.2 48.2 0 0 0 25.85 25.85L152 136l32 16a32 32 0 0 1-32 32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m187.58 144.84l-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40a88.1 88.1 0 0 0 88 88a40 40 0 0 0 40-40a8 8 0 0 0-4.42-7.16M152 176a72.08 72.08 0 0 1-72-72a24 24 0 0 1 19.29-23.54l11.48 23L101 118a8 8 0 0 0-.73 7.51a56.47 56.47 0 0 0 30.15 30.15A8 8 0 0 0 138 155l14.62-9.74l23 11.48A24 24 0 0 1 152 176M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M128 32a96 96 0 0 0-83.11 144.07l-12.47 37.39a8 8 0 0 0 10.12 10.12l37.39-12.47A96 96 0 1 0 128 32m24 152a80 80 0 0 1-80-80a32 32 0 0 1 32-32l16 32l-12.32 18.47a48.2 48.2 0 0 0 25.85 25.85L152 136l32 16a32 32 0 0 1-32 32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m187.58 144.84l-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40a88.1 88.1 0 0 0 88 88a40 40 0 0 0 40-40a8 8 0 0 0-4.42-7.16M152 176a72.08 72.08 0 0 1-72-72a24 24 0 0 1 19.29-23.54l11.48 23L101 118a8 8 0 0 0-.73 7.51a56.47 56.47 0 0 0 30.15 30.15A8 8 0 0 0 138 155l14.62-9.74l23 11.48A24 24 0 0 1 152 176M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M192 48v176l-64-40l-64 40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m0 177.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 209.57V48h112Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M192 48v176l-64-40l-64 40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m0 177.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 209.57V48h112Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 115, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M17.813 4.653h.854q2.266.08 3.773 1.574Q23.946 7.72 24 9.987v7.36q-.054 2.266-1.56 3.773c-1.506 1.507-2.262 1.524-3.773 1.56H5.333q-2.266-.054-3.773-1.56C.053 19.614.036 18.858 0 17.347v-7.36q.054-2.267 1.56-3.76t3.773-1.574h.774l-1.174-1.12a1.23 1.23 0 0 1-.373-.906q0-.534.373-.907l.027-.027q.4-.373.92-.373t.92.373L9.653 4.44q.107.106.187.213h4.267a.8.8 0 0 1 .16-.213l2.853-2.747q.4-.373.92-.373c.347 0 .662.151.929.4s.391.551.391.907q0 .532-.373.906zM5.333 7.24q-1.12.027-1.88.773q-.76.748-.786 1.894v7.52q.026 1.146.786 1.893t1.88.773h13.334q1.12-.026 1.88-.773t.786-1.893v-7.52q-.026-1.147-.786-1.894t-1.88-.773zM8 11.107q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q0-.56.386-.947q.387-.386.947-.386m8 0q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q.025-.586.4-.96q.373-.373.933-.373\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M17.813 4.653h.854q2.266.08 3.773 1.574Q23.946 7.72 24 9.987v7.36q-.054 2.266-1.56 3.773c-1.506 1.507-2.262 1.524-3.773 1.56H5.333q-2.266-.054-3.773-1.56C.053 19.614.036 18.858 0 17.347v-7.36q.054-2.267 1.56-3.76t3.773-1.574h.774l-1.174-1.12a1.23 1.23 0 0 1-.373-.906q0-.534.373-.907l.027-.027q.4-.373.92-.373t.92.373L9.653 4.44q.107.106.187.213h4.267a.8.8 0 0 1 .16-.213l2.853-2.747q.4-.373.92-.373c.347 0 .662.151.929.4s.391.551.391.907q0 .532-.373.906zM5.333 7.24q-1.12.027-1.88.773q-.76.748-.786 1.894v7.52q.026 1.146.786 1.893t1.88.773h13.334q1.12-.026 1.88-.773t.786-1.893v-7.52q-.026-1.147-.786-1.894t-1.88-.773zM8 11.107q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q0-.56.386-.947q.387-.386.947-.386m8 0q.56 0 .933.373q.375.374.4.96v1.173q-.025.586-.4.96q-.373.375-.933.374c-.56-.001-.684-.125-.933-.374q-.375-.373-.4-.96V12.44q.025-.586.4-.96q.373-.373.933-.373\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 72, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M80 48v104H32a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m239.82 157l-12-96A24 24 0 0 0 204 40H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h43.06l37.78 75.58A8 8 0 0 0 120 240a40 40 0 0 0 40-40v-16h56a24 24 0 0 0 23.82-27M72 144H32V56h40Zm150 21.29a7.88 7.88 0 0 1-6 2.71h-64a8 8 0 0 0-8 8v24a24 24 0 0 1-19.29 23.54L88 150.11V56h116a8 8 0 0 1 7.94 7l12 96a7.87 7.87 0 0 1-1.94 6.29\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M80 48v104H32a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m239.82 157l-12-96A24 24 0 0 0 204 40H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h43.06l37.78 75.58A8 8 0 0 0 120 240a40 40 0 0 0 40-40v-16h56a24 24 0 0 0 23.82-27M72 144H32V56h40Zm150 21.29a7.88 7.88 0 0 1-6 2.71h-64a8 8 0 0 0-8 8v24a24 24 0 0 1-19.29 23.54L88 150.11V56h116a8 8 0 0 1 7.94 7l12 96a7.87 7.87 0 0 1-1.94 6.29\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M240 183.9c-9.25 8.69-31.45 4.61-42.66 10.78c-11 6.07-17.07 25.56-29.57 28.76c-12.08 3.09-26.72-7.56-39.77-7.56s-27.69 10.65-39.77 7.56c-12.5-3.2-18.53-22.69-29.57-28.76c-11.21-6.17-33.41-2.09-42.66-10.78c0 0 56-20 56-103.93a56 56 0 0 1 112 0c0 83.89 56 103.93 56 103.93\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M247.83 182.28a8 8 0 0 0-5.13-5.9c-.39-.14-28.95-10.88-43-49.23l19.3-7.72a8 8 0 1 0-6-14.86l-17.82 7.13A149 149 0 0 1 192 80a64 64 0 0 0-128 0a151.2 151.2 0 0 1-3.18 31.75L43 104.57a8 8 0 1 0-6 14.86l19.37 7.75a94 94 0 0 1-17.74 30.2c-12.52 14.14-25.27 19-25.36 19a8 8 0 0 0-2.77 13.36c7.1 6.67 17.67 7.71 27.89 8.72c6.3.62 12.82 1.27 16.38 3.23c3.37 1.86 6.85 6.62 10.21 11.22c5.4 7.41 11.53 15.8 21.24 18.28c9.07 2.33 18.35-.83 26.54-3.62c5.55-1.89 10.8-3.68 15.21-3.68s9.66 1.79 15.21 3.68c6.2 2.11 13 4.43 19.9 4.43a26.4 26.4 0 0 0 6.64-.81c9.7-2.48 15.83-10.87 21.23-18.28c3.36-4.6 6.84-9.36 10.21-11.22c3.56-2 10.08-2.61 16.39-3.23c10.21-1 20.78-2.05 27.88-8.72a8 8 0 0 0 2.4-7.46m-31.82.26c-7.91.78-16.08 1.59-22.53 5.13s-11 9.79-15.41 15.81c-4 5.48-8.15 11.16-12.28 12.21c-4.46 1.15-10.76-1-17.42-3.27s-13.31-4.53-20.37-4.53s-13.83 2.3-20.37 4.53s-13 4.42-17.42 3.27c-4.13-1.05-8.27-6.73-12.28-12.21c-4.39-6-8.93-12.24-15.41-15.81S47.9 183.32 40 182.54c-1.56-.15-3.15-.31-4.74-.49a97.3 97.3 0 0 0 14.69-13.29c8.37-9.27 17.72-23.23 23.74-43.13l.06-.13a8.6 8.6 0 0 0 .46-1.61A158.5 158.5 0 0 0 80 80a48 48 0 0 1 96 0a158.4 158.4 0 0 0 5.8 43.92a8.6 8.6 0 0 0 .46 1.61l.06.13c6 19.9 15.37 33.86 23.74 43.13a97.3 97.3 0 0 0 14.69 13.29c-1.59.15-3.18.31-4.75.46Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M240 183.9c-9.25 8.69-31.45 4.61-42.66 10.78c-11 6.07-17.07 25.56-29.57 28.76c-12.08 3.09-26.72-7.56-39.77-7.56s-27.69 10.65-39.77 7.56c-12.5-3.2-18.53-22.69-29.57-28.76c-11.21-6.17-33.41-2.09-42.66-10.78c0 0 56-20 56-103.93a56 56 0 0 1 112 0c0 83.89 56 103.93 56 103.93\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M247.83 182.28a8 8 0 0 0-5.13-5.9c-.39-.14-28.95-10.88-43-49.23l19.3-7.72a8 8 0 1 0-6-14.86l-17.82 7.13A149 149 0 0 1 192 80a64 64 0 0 0-128 0a151.2 151.2 0 0 1-3.18 31.75L43 104.57a8 8 0 1 0-6 14.86l19.37 7.75a94 94 0 0 1-17.74 30.2c-12.52 14.14-25.27 19-25.36 19a8 8 0 0 0-2.77 13.36c7.1 6.67 17.67 7.71 27.89 8.72c6.3.62 12.82 1.27 16.38 3.23c3.37 1.86 6.85 6.62 10.21 11.22c5.4 7.41 11.53 15.8 21.24 18.28c9.07 2.33 18.35-.83 26.54-3.62c5.55-1.89 10.8-3.68 15.21-3.68s9.66 1.79 15.21 3.68c6.2 2.11 13 4.43 19.9 4.43a26.4 26.4 0 0 0 6.64-.81c9.7-2.48 15.83-10.87 21.23-18.28c3.36-4.6 6.84-9.36 10.21-11.22c3.56-2 10.08-2.61 16.39-3.23c10.21-1 20.78-2.05 27.88-8.72a8 8 0 0 0 2.4-7.46m-31.82.26c-7.91.78-16.08 1.59-22.53 5.13s-11 9.79-15.41 15.81c-4 5.48-8.15 11.16-12.28 12.21c-4.46 1.15-10.76-1-17.42-3.27s-13.31-4.53-20.37-4.53s-13.83 2.3-20.37 4.53s-13 4.42-17.42 3.27c-4.13-1.05-8.27-6.73-12.28-12.21c-4.39-6-8.93-12.24-15.41-15.81S47.9 183.32 40 182.54c-1.56-.15-3.15-.31-4.74-.49a97.3 97.3 0 0 0 14.69-13.29c8.37-9.27 17.72-23.23 23.74-43.13l.06-.13a8.6 8.6 0 0 0 .46-1.61A158.5 158.5 0 0 0 80 80a48 48 0 0 1 96 0a158.4 158.4 0 0 0 5.8 43.92a8.6 8.6 0 0 0 .46 1.61l.06.13c6 19.9 15.37 33.86 23.74 43.13a97.3 97.3 0 0 0 14.69 13.29c-1.59.15-3.18.31-4.75.46Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 179, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 64v144H32V48h176a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v12.69l56 56l26.34-26.35a8 8 0 0 1 11.32 0L192 148.69V128a8 8 0 0 1 16 0v40a7 7 0 0 1 0 .8c0 .11 0 .21-.05.32s0 .3-.07.46a3 3 0 0 1-.09.37c0 .13-.06.26-.1.39s-.08.23-.12.35l-.14.39l-.15.31c-.06.13-.12.27-.19.4s-.11.18-.16.28l-.24.39l-.21.28l-.26.35c-.11.14-.24.27-.36.4l-.16.18l-.17.15a5 5 0 0 1-.42.37a4 4 0 0 1-.32.25l-.3.22l-.38.23a3 3 0 0 1-.3.17l-.37.19l-.34.15l-.36.13a3 3 0 0 1-.38.13l-.36.1c-.14 0-.26.07-.4.09l-.42.07l-.35.05a7 7 0 0 1-.79 0H160a8 8 0 0 1 0-16h20.69L128 107.31l-26.34 26.35a8 8 0 0 1-11.32 0L40 83.31V200h184a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 64v144H32V48h176a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v12.69l56 56l26.34-26.35a8 8 0 0 1 11.32 0L192 148.69V128a8 8 0 0 1 16 0v40a7 7 0 0 1 0 .8c0 .11 0 .21-.05.32s0 .3-.07.46a3 3 0 0 1-.09.37c0 .13-.06.26-.1.39s-.08.23-.12.35l-.14.39l-.15.31c-.06.13-.12.27-.19.4s-.11.18-.16.28l-.24.39l-.21.28l-.26.35c-.11.14-.24.27-.36.4l-.16.18l-.17.15a5 5 0 0 1-.42.37a4 4 0 0 1-.32.25l-.3.22l-.38.23a3 3 0 0 1-.3.17l-.37.19l-.34.15l-.36.13a3 3 0 0 1-.38.13l-.36.1c-.14 0-.26.07-.4.09l-.42.07l-.35.05a7 7 0 0 1-.79 0H160a8 8 0 0 1 0-16h20.69L128 107.31l-26.34 26.35a8 8 0 0 1-11.32 0L40 83.31V200h184a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m235.21 185.59l-67 29.7a8.15 8.15 0 0 1-11-4.56L147 183.06a191 191 0 0 1-19 .94a191 191 0 0 1-19-.94l-10.25 27.67a8.15 8.15 0 0 1-11 4.56l-67-29.7a8 8 0 0 1-4.55-9.24L45.77 60a8.08 8.08 0 0 1 6.54-6l36.06-5.92a8.1 8.1 0 0 1 9.21 6l5 19.63a192.3 192.3 0 0 1 50.88 0l5-19.63a8.1 8.1 0 0 1 9.21-6L203.69 54a8.08 8.08 0 0 1 6.54 6l29.53 116.37a8 8 0 0 1-4.55 9.22\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m74.45 64.9l-67 29.71a16.17 16.17 0 0 1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11 22a16.18 16.18 0 0 1-21.71 9.1l-67-29.71a15.94 15.94 0 0 1-9.06-18.51L38 58a16.08 16.08 0 0 1 13-11.87l36.06-5.92a16.21 16.21 0 0 1 18.26 11.88l3.26 12.83Q118.11 64 128 64t19.4.92l3.26-12.83a16.22 16.22 0 0 1 18.26-11.88L205 46.13A16.08 16.08 0 0 1 218 58l29.53 116.38a15.94 15.94 0 0 1-9.08 18.52M232 178.28L202.47 62h-.08l-36.06-6a.17.17 0 0 0-.17 0l-2.83 11.14c5 .94 10 2.06 14.83 3.42A8 8 0 0 1 176 86.31a8 8 0 0 1-2.16-.3A172.3 172.3 0 0 0 128 80a172.3 172.3 0 0 0-45.84 6a8 8 0 1 1-4.32-15.4c4.82-1.36 9.78-2.48 14.82-3.42L89.83 56a.2.2 0 0 0-.12 0l-36.1 5.92a.2.2 0 0 0-.09 0L24 178.33L91 208a.21.21 0 0 0 .22 0L98 189.72a173 173 0 0 1-20.14-4.32a8 8 0 0 1 4.3-15.4a172 172 0 0 0 45.84 6a172 172 0 0 0 45.84-6a8 8 0 0 1 4.32 15.41a173 173 0 0 1-20.16 4.31l6.75 18.28a.22.22 0 0 0 .21 0Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m235.21 185.59l-67 29.7a8.15 8.15 0 0 1-11-4.56L147 183.06a191 191 0 0 1-19 .94a191 191 0 0 1-19-.94l-10.25 27.67a8.15 8.15 0 0 1-11 4.56l-67-29.7a8 8 0 0 1-4.55-9.24L45.77 60a8.08 8.08 0 0 1 6.54-6l36.06-5.92a8.1 8.1 0 0 1 9.21 6l5 19.63a192.3 192.3 0 0 1 50.88 0l5-19.63a8.1 8.1 0 0 1 9.21-6L203.69 54a8.08 8.08 0 0 1 6.54 6l29.53 116.37a8 8 0 0 1-4.55 9.22\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M104 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m60-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m74.45 64.9l-67 29.71a16.17 16.17 0 0 1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11 22a16.18 16.18 0 0 1-21.71 9.1l-67-29.71a15.94 15.94 0 0 1-9.06-18.51L38 58a16.08 16.08 0 0 1 13-11.87l36.06-5.92a16.21 16.21 0 0 1 18.26 11.88l3.26 12.83Q118.11 64 128 64t19.4.92l3.26-12.83a16.22 16.22 0 0 1 18.26-11.88L205 46.13A16.08 16.08 0 0 1 218 58l29.53 116.38a15.94 15.94 0 0 1-9.08 18.52M232 178.28L202.47 62h-.08l-36.06-6a.17.17 0 0 0-.17 0l-2.83 11.14c5 .94 10 2.06 14.83 3.42A8 8 0 0 1 176 86.31a8 8 0 0 1-2.16-.3A172.3 172.3 0 0 0 128 80a172.3 172.3 0 0 0-45.84 6a8 8 0 1 1-4.32-15.4c4.82-1.36 9.78-2.48 14.82-3.42L89.83 56a.2.2 0 0 0-.12 0l-36.1 5.92a.2.2 0 0 0-.09 0L24 178.33L91 208a.21.21 0 0 0 .22 0L98 189.72a173 173 0 0 1-20.14-4.32a8 8 0 0 1 4.3-15.4a172 172 0 0 0 45.84 6a172 172 0 0 0 45.84-6a8 8 0 0 1 4.32 15.41a173 173 0 0 1-20.16 4.31l6.75 18.28a.22.22 0 0 0 .21 0Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 102, 241);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 14 14\\'%3E%3Cg fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cpath d=\\'M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13\\'/%3E%3Cpath d=\\'M9 10.464a3.5 3.5 0 0 0 1.281-4.78l-6.062 3.5A3.5 3.5 0 0 0 9 10.463Zm-.902-7.562L7.55 4.95l1.732-1m-6.38 1.952l2.049.549l-1.732 1\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 14 14\\'%3E%3Cg fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'%3E%3Cpath d=\\'M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13\\'/%3E%3Cpath d=\\'M9 10.464a3.5 3.5 0 0 0 1.281-4.78l-6.062 3.5A3.5 3.5 0 0 0 9 10.463Zm-.902-7.562L7.55 4.95l1.732-1m-6.38 1.952l2.049.549l-1.732 1\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 179, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m224 96l-78.55 56h-34.9L32 96l96-64Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M96.72 152L40 192v-80.47Zm16.37 8h29.82l56.63 40H56.46Zm46.19-8L216 111.53V192ZM128 41.61l81.91 54.61l-67 47.78h-29.8l-67-47.78Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m224 96l-78.55 56h-34.9L32 96l96-64Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M96.72 152L40 192v-80.47Zm16.37 8h29.82l56.63 40H56.46Zm46.19-8L216 111.53V192ZM128 41.61l81.91 54.61l-67 47.78h-29.8l-67-47.78Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M72 128a134.6 134.6 0 0 1-14.16 60.47a8 8 0 1 1-14.32-7.12A118.8 118.8 0 0 0 56 128a71.73 71.73 0 0 1 27-56.2a8 8 0 1 1 10 12.49A55.76 55.76 0 0 0 72 128m56-8a8 8 0 0 0-8 8a184.1 184.1 0 0 1-23 89.1a8 8 0 0 0 14 7.76A200.2 200.2 0 0 0 136 128a8 8 0 0 0-8-8m0-32a40 40 0 0 0-40 40a8 8 0 0 0 16 0a24 24 0 0 1 48 0a214.1 214.1 0 0 1-20.51 92a8 8 0 1 0 14.51 6.83A230 230 0 0 0 168 128a40 40 0 0 0-40-40m0-64A104.11 104.11 0 0 0 24 128a87.8 87.8 0 0 1-5 29.33a8 8 0 0 0 15.09 5.33A103.9 103.9 0 0 0 40 128a88 88 0 0 1 176 0a282 282 0 0 1-5.29 54.45a8 8 0 0 0 6.3 9.4a8 8 0 0 0 1.55.15a8 8 0 0 0 7.84-6.45A298.4 298.4 0 0 0 232 128A104.12 104.12 0 0 0 128 24M94.4 152.17a8 8 0 0 0-9.4 6.25a151 151 0 0 1-17.21 45.44a8 8 0 0 0 13.86 8a166.7 166.7 0 0 0 19-50.25a8 8 0 0 0-6.25-9.44M128 56a73 73 0 0 0-9 .56a8 8 0 0 0 2 15.87A56.08 56.08 0 0 1 184 128a252 252 0 0 1-1.92 31a8 8 0 0 0 6.92 9a8 8 0 0 0 1 .06a8 8 0 0 0 7.92-7a267 267 0 0 0 2-33A72.08 72.08 0 0 0 128 56m57.93 128.25a8 8 0 0 0-9.75 5.75c-1.46 5.69-3.15 11.4-5 17a8 8 0 0 0 5 10.13a7.9 7.9 0 0 0 2.55.42a8 8 0 0 0 7.58-5.46c2-5.92 3.79-12 5.35-18.05a8 8 0 0 0-5.72-9.78Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M72 128a134.6 134.6 0 0 1-14.16 60.47a8 8 0 1 1-14.32-7.12A118.8 118.8 0 0 0 56 128a71.73 71.73 0 0 1 27-56.2a8 8 0 1 1 10 12.49A55.76 55.76 0 0 0 72 128m56-8a8 8 0 0 0-8 8a184.1 184.1 0 0 1-23 89.1a8 8 0 0 0 14 7.76A200.2 200.2 0 0 0 136 128a8 8 0 0 0-8-8m0-32a40 40 0 0 0-40 40a8 8 0 0 0 16 0a24 24 0 0 1 48 0a214.1 214.1 0 0 1-20.51 92a8 8 0 1 0 14.51 6.83A230 230 0 0 0 168 128a40 40 0 0 0-40-40m0-64A104.11 104.11 0 0 0 24 128a87.8 87.8 0 0 1-5 29.33a8 8 0 0 0 15.09 5.33A103.9 103.9 0 0 0 40 128a88 88 0 0 1 176 0a282 282 0 0 1-5.29 54.45a8 8 0 0 0 6.3 9.4a8 8 0 0 0 1.55.15a8 8 0 0 0 7.84-6.45A298.4 298.4 0 0 0 232 128A104.12 104.12 0 0 0 128 24M94.4 152.17a8 8 0 0 0-9.4 6.25a151 151 0 0 1-17.21 45.44a8 8 0 0 0 13.86 8a166.7 166.7 0 0 0 19-50.25a8 8 0 0 0-6.25-9.44M128 56a73 73 0 0 0-9 .56a8 8 0 0 0 2 15.87A56.08 56.08 0 0 1 184 128a252 252 0 0 1-1.92 31a8 8 0 0 0 6.92 9a8 8 0 0 0 1 .06a8 8 0 0 0 7.92-7a267 267 0 0 0 2-33A72.08 72.08 0 0 0 128 56m57.93 128.25a8 8 0 0 0-9.75 5.75c-1.46 5.69-3.15 11.4-5 17a8 8 0 0 0 5 10.13a7.9 7.9 0 0 0 2.55.42a8 8 0 0 0 7.58-5.46c2-5.92 3.79-12 5.35-18.05a8 8 0 0 0-5.72-9.78Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 63, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M176 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M248 120h-64.58a56 56 0 0 0-110.84 0H8a8 8 0 0 0 0 16h64.58a56 56 0 0 0 110.84 0H248a8 8 0 0 0 0-16m-120 48a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M176 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M248 120h-64.58a56 56 0 0 0-110.84 0H8a8 8 0 0 0 0 16h64.58a56 56 0 0 0 110.84 0H248a8 8 0 0 0 0-16m-120 48a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 115, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M208 104v8a48 48 0 0 1-48 48h-24a32 32 0 0 1 32 32v40h-64v-40a32 32 0 0 1 32-32h-24a48 48 0 0 1-48-48v-8a49.3 49.3 0 0 1 8.51-27.3A51.92 51.92 0 0 1 76 32a52 52 0 0 1 43.83 24h32.34A52 52 0 0 1 196 32a51.92 51.92 0 0 1 3.49 44.7A49.3 49.3 0 0 1 208 104\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M208.3 75.68A59.74 59.74 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58 58 0 0 0-7.7-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.8 43.8 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.8 43.8 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.76 41.76 0 0 1 7 22.52Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M208 104v8a48 48 0 0 1-48 48h-24a32 32 0 0 1 32 32v40h-64v-40a32 32 0 0 1 32-32h-24a48 48 0 0 1-48-48v-8a49.3 49.3 0 0 1 8.51-27.3A51.92 51.92 0 0 1 76 32a52 52 0 0 1 43.83 24h32.34A52 52 0 0 1 196 32a51.92 51.92 0 0 1 3.49 44.7A49.3 49.3 0 0 1 208 104\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M208.3 75.68A59.74 59.74 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58 58 0 0 0-7.7-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.8 43.8 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.8 43.8 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.76 41.76 0 0 1 7 22.52Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 85, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M128 56c-80 0-112 72-112 72s32 72 112 72s112-72 112-72s-32-72-112-72m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M53.92 34.62a8 8 0 1 0-11.84 10.76l19.24 21.17C25 88.84 9.38 123.2 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208a127.1 127.1 0 0 0 52.07-10.83l22 24.21a8 8 0 1 0 11.84-10.76Zm47.33 75.84l41.67 45.85a32 32 0 0 1-41.67-45.85M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.2 133.2 0 0 1 25 128c4.69-8.79 19.66-33.39 47.35-49.38l18 19.75a48 48 0 0 0 63.66 70l14.73 16.2A112 112 0 0 1 128 192m6-95.43a8 8 0 0 1 3-15.72a48.16 48.16 0 0 1 38.77 42.64a8 8 0 0 1-7.22 8.71a6 6 0 0 1-.75 0a8 8 0 0 1-8-7.26A32.09 32.09 0 0 0 134 96.57m113.28 34.69c-.42.94-10.55 23.37-33.36 43.8a8 8 0 1 1-10.67-11.92a132.8 132.8 0 0 0 27.8-35.14a133.2 133.2 0 0 0-23.12-30.77C185.67 75.19 158.78 64 128 64a118.4 118.4 0 0 0-19.36 1.57A8 8 0 1 1 106 49.79A134 134 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M128 56c-80 0-112 72-112 72s32 72 112 72s112-72 112-72s-32-72-112-72m0 112a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M53.92 34.62a8 8 0 1 0-11.84 10.76l19.24 21.17C25 88.84 9.38 123.2 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208a127.1 127.1 0 0 0 52.07-10.83l22 24.21a8 8 0 1 0 11.84-10.76Zm47.33 75.84l41.67 45.85a32 32 0 0 1-41.67-45.85M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.2 133.2 0 0 1 25 128c4.69-8.79 19.66-33.39 47.35-49.38l18 19.75a48 48 0 0 0 63.66 70l14.73 16.2A112 112 0 0 1 128 192m6-95.43a8 8 0 0 1 3-15.72a48.16 48.16 0 0 1 38.77 42.64a8 8 0 0 1-7.22 8.71a6 6 0 0 1-.75 0a8 8 0 0 1-8-7.26A32.09 32.09 0 0 0 134 96.57m113.28 34.69c-.42.94-10.55 23.37-33.36 43.8a8 8 0 1 1-10.67-11.92a132.8 132.8 0 0 0 27.8-35.14a133.2 133.2 0 0 0-23.12-30.77C185.67 75.19 158.78 64 128 64a118.4 118.4 0 0 0-19.36 1.57A8 8 0 1 1 106 49.79A134 134 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 115, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 116.69V216h-64v-64h-48v64H40v-99.31l82.34-82.35a8 8 0 0 1 11.32 0Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M240 208h-16v-72l2.34 2.34A8 8 0 0 0 237.66 127l-98.35-98.32a16 16 0 0 0-22.62 0L18.34 127a8 8 0 0 0 11.32 11.31L32 136v72H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M48 120l80-80l80 80v88h-48v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56H48Zm96 88h-32v-48h32Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 116.69V216h-64v-64h-48v64H40v-99.31l82.34-82.35a8 8 0 0 1 11.32 0Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M240 208h-16v-72l2.34 2.34A8 8 0 0 0 237.66 127l-98.35-98.32a16 16 0 0 0-22.62 0L18.34 127a8 8 0 0 0 11.32 11.31L32 136v72H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M48 120l80-80l80 80v88h-48v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56H48Zm96 88h-32v-48h32Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 8 8\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M5 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M3.5 2.5C2.67 2.5 2 3.17 2 4h1c0-.28.22-.5.5-.5s.5.22.5.5s-1 1.64-1 2.5S3.67 8 4.5 8S6 7.33 6 6.5H5c0 .28-.22.5-.5.5S4 6.78 4 6.5C4 6.14 5 4.66 5 4c0-.81-.67-1.5-1.5-1.5\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 8 8\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M5 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M3.5 2.5C2.67 2.5 2 3.17 2 4h1c0-.28.22-.5.5-.5s.5.22.5.5s-1 1.64-1 2.5S3.67 8 4.5 8S6 7.33 6 6.5H5c0 .28-.22.5-.5.5S4 6.78 4 6.5C4 6.14 5 4.66 5 4c0-.81-.67-1.5-1.5-1.5\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M176 32H80a48 48 0 0 0-48 48v96a48 48 0 0 0 48 48h96a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48m-48 136a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40Zm-88-96a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m64-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M176 32H80a48 48 0 0 0-48 48v96a48 48 0 0 0 48 48h96a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48m-48 136a40 40 0 1 1 40-40a40 40 0 0 1-40 40\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40Zm-88-96a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m64-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 72, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cg fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'1.5\\' color=\\'currentColor\\'%3E%3Cpath d=\\'M4 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m16 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4M4.967 17c-3.524-5.5 4.023-6-.008-10m1.42-2c1.104 0 3.62 1 3.62 3M5 17c5.217 1.452 8.328 1.209 14 0M4 20c5.963 1.452 9.518 1.209 16 0\\'/%3E%3Cpath d=\\'M18.03 6.044c-2.366.435-7.82 3.74-6.98 11.194m7.202-9.15c-1.215.573-3.126 1.8-.653 4.824c.78.955 1.687 2.967 1.352 3.957\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cg fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'1.5\\' color=\\'currentColor\\'%3E%3Cpath d=\\'M4 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m16 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4M4.967 17c-3.524-5.5 4.023-6-.008-10m1.42-2c1.104 0 3.62 1 3.62 3M5 17c5.217 1.452 8.328 1.209 14 0M4 20c5.963 1.452 9.518 1.209 16 0\\'/%3E%3Cpath d=\\'M18.03 6.044c-2.366.435-7.82 3.74-6.98 11.194m7.202-9.15c-1.215.573-3.126 1.8-.653 4.824c.78.955 1.687 2.967 1.352 3.957\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 63, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 64v88H32V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24M48 56h160a8 8 0 0 1 8 8v80H40V64a8 8 0 0 1 8-8m160 128H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 64v88H32V64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24M48 56h160a8 8 0 0 1 8 8v80H40V64a8 8 0 0 1 8-8m160 128H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M232 98.36c-1.27 38.56-33.33 69.64-71.91 69.64a71.7 71.7 0 0 1-26.92-5.17L120 176H96v24H72v24H40a8 8 0 0 1-8-8v-28.69a8 8 0 0 1 2.34-5.65l58.83-58.83A71.7 71.7 0 0 1 88 95.91c0-38.58 31.08-70.64 69.64-71.87A72 72 0 0 1 232 98.36\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M216.57 39.43a80 80 0 0 0-132.66 81.35L28.69 176A15.86 15.86 0 0 0 24 187.31V216a16 16 0 0 0 16 16h32a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A79.7 79.7 0 0 0 160 176h.1a80 80 0 0 0 56.47-136.57M224 98.1c-1.09 34.09-29.75 61.86-63.89 61.9H160a63.7 63.7 0 0 1-23.65-4.51a8 8 0 0 0-8.84 1.68L116.69 168H96a8 8 0 0 0-8 8v16H72a8 8 0 0 0-8 8v16H40v-28.69l58.83-58.82a8 8 0 0 0 1.68-8.84A63.7 63.7 0 0 1 96 95.92c0-34.14 27.81-62.8 61.9-63.89A64 64 0 0 1 224 98.1M192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M232 98.36c-1.27 38.56-33.33 69.64-71.91 69.64a71.7 71.7 0 0 1-26.92-5.17L120 176H96v24H72v24H40a8 8 0 0 1-8-8v-28.69a8 8 0 0 1 2.34-5.65l58.83-58.83A71.7 71.7 0 0 1 88 95.91c0-38.58 31.08-70.64 69.64-71.87A72 72 0 0 1 232 98.36\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M216.57 39.43a80 80 0 0 0-132.66 81.35L28.69 176A15.86 15.86 0 0 0 24 187.31V216a16 16 0 0 0 16 16h32a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A79.7 79.7 0 0 0 160 176h.1a80 80 0 0 0 56.47-136.57M224 98.1c-1.09 34.09-29.75 61.86-63.89 61.9H160a63.7 63.7 0 0 1-23.65-4.51a8 8 0 0 0-8.84 1.68L116.69 168H96a8 8 0 0 0-8 8v16H72a8 8 0 0 0-8 8v16H40v-28.69l58.83-58.82a8 8 0 0 0 1.68-8.84A63.7 63.7 0 0 1 96 95.92c0-34.14 27.81-62.8 61.9-63.89A64 64 0 0 1 224 98.1M192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 158, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M18.315 12.264c2.33 0 4.218 1.88 4.218 4.2V19.8c0 2.32-1.888 4.2-4.218 4.2h-6.202a4.22 4.22 0 0 1-4.023-2.938l-3.676 1.833a2.04 2.04 0 0 1-2.731-.903a2 2 0 0 1-.216-.907v-5.94a2.03 2.03 0 0 1 2.035-2.024a2.04 2.04 0 0 1 .919.218l3.673 1.85a4.22 4.22 0 0 1 4.02-2.925zm-.062 2.162h-6.078c-1.153 0-2.09.921-2.108 2.065v3.247c0 1.148.925 2.081 2.073 2.1h6.113c1.153 0 2.09-.922 2.109-2.065v-3.247a2.104 2.104 0 0 0-2.074-2.1zM4.18 15.72a.554.554 0 0 0-.555.542v3.734a.556.556 0 0 0 .798.496l.01-.004l3.463-1.756V17.51l-3.467-1.73a.56.56 0 0 0-.249-.06M9.28 0a5.67 5.67 0 0 1 4.98 2.965a4.92 4.92 0 0 1 3.36-1.317c2.714 0 4.913 2.177 4.913 4.863s-2.2 4.863-4.912 4.863a4.92 4.92 0 0 1-3.996-2.034a5.65 5.65 0 0 1-4.345 2.034c-3.131 0-5.67-2.546-5.67-5.687S6.149 0 9.28 0m8.34 3.926c-1.441 0-2.61 1.157-2.61 2.585s1.169 2.585 2.61 2.585c1.443 0 2.612-1.157 2.612-2.585s-1.169-2.585-2.611-2.585zM9.28 2.287a3.395 3.395 0 0 0-3.39 3.4c0 1.877 1.518 3.4 3.39 3.4a3.395 3.395 0 0 0 3.39-3.4c0-1.878-1.518-3.4-3.39-3.4\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M18.315 12.264c2.33 0 4.218 1.88 4.218 4.2V19.8c0 2.32-1.888 4.2-4.218 4.2h-6.202a4.22 4.22 0 0 1-4.023-2.938l-3.676 1.833a2.04 2.04 0 0 1-2.731-.903a2 2 0 0 1-.216-.907v-5.94a2.03 2.03 0 0 1 2.035-2.024a2.04 2.04 0 0 1 .919.218l3.673 1.85a4.22 4.22 0 0 1 4.02-2.925zm-.062 2.162h-6.078c-1.153 0-2.09.921-2.108 2.065v3.247c0 1.148.925 2.081 2.073 2.1h6.113c1.153 0 2.09-.922 2.109-2.065v-3.247a2.104 2.104 0 0 0-2.074-2.1zM4.18 15.72a.554.554 0 0 0-.555.542v3.734a.556.556 0 0 0 .798.496l.01-.004l3.463-1.756V17.51l-3.467-1.73a.56.56 0 0 0-.249-.06M9.28 0a5.67 5.67 0 0 1 4.98 2.965a4.92 4.92 0 0 1 3.36-1.317c2.714 0 4.913 2.177 4.913 4.863s-2.2 4.863-4.912 4.863a4.92 4.92 0 0 1-3.996-2.034a5.65 5.65 0 0 1-4.345 2.034c-3.131 0-5.67-2.546-5.67-5.687S6.149 0 9.28 0m8.34 3.926c-1.441 0-2.61 1.157-2.61 2.585s1.169 2.585 2.61 2.585c1.443 0 2.612-1.157 2.612-2.585s-1.169-2.585-2.611-2.585zM9.28 2.287a3.395 3.395 0 0 0-3.39 3.4c0 1.877 1.518 3.4 3.39 3.4a3.395 3.395 0 0 0 3.39-3.4c0-1.878-1.518-3.4-3.39-3.4\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 115, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m218.34 119.6l-34.74 34.74a46.58 46.58 0 0 1-44.31 12.26c-.31.34-.62.67-.95 1l-34.74 34.74a46.63 46.63 0 1 1-65.94-65.94l34.74-34.74a46.6 46.6 0 0 1 44.31-12.26c.31-.34.62-.67 1-1l34.69-34.74a46.63 46.63 0 0 1 65.94 65.94\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M240 88.23a54.43 54.43 0 0 1-16 37L189.25 160a54.27 54.27 0 0 1-38.63 16h-.05A54.63 54.63 0 0 1 96 119.84a8 8 0 0 1 16 .45A38.62 38.62 0 0 0 150.58 160a38.4 38.4 0 0 0 27.31-11.31l34.75-34.75a38.63 38.63 0 0 0-54.63-54.63l-11 11A8 8 0 0 1 135.7 59l11-11a54.65 54.65 0 0 1 77.3 0a54.86 54.86 0 0 1 16 40.23m-131 97.43l-11 11A38.4 38.4 0 0 1 70.6 208a38.63 38.63 0 0 1-27.29-65.94L78 107.31a38.63 38.63 0 0 1 66 28.4a8 8 0 0 0 7.78 8.22h.22a8 8 0 0 0 8-7.78A54.86 54.86 0 0 0 144 96a54.65 54.65 0 0 0-77.27 0L32 130.75A54.62 54.62 0 0 0 70.56 224a54.28 54.28 0 0 0 38.64-16l11-11a8 8 0 0 0-11.2-11.34\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m218.34 119.6l-34.74 34.74a46.58 46.58 0 0 1-44.31 12.26c-.31.34-.62.67-.95 1l-34.74 34.74a46.63 46.63 0 1 1-65.94-65.94l34.74-34.74a46.6 46.6 0 0 1 44.31-12.26c.31-.34.62-.67 1-1l34.69-34.74a46.63 46.63 0 0 1 65.94 65.94\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M240 88.23a54.43 54.43 0 0 1-16 37L189.25 160a54.27 54.27 0 0 1-38.63 16h-.05A54.63 54.63 0 0 1 96 119.84a8 8 0 0 1 16 .45A38.62 38.62 0 0 0 150.58 160a38.4 38.4 0 0 0 27.31-11.31l34.75-34.75a38.63 38.63 0 0 0-54.63-54.63l-11 11A8 8 0 0 1 135.7 59l11-11a54.65 54.65 0 0 1 77.3 0a54.86 54.86 0 0 1 16 40.23m-131 97.43l-11 11A38.4 38.4 0 0 1 70.6 208a38.63 38.63 0 0 1-27.29-65.94L78 107.31a38.63 38.63 0 0 1 66 28.4a8 8 0 0 0 7.78 8.22h.22a8 8 0 0 0 8-7.78A54.86 54.86 0 0 0 144 96a54.65 54.65 0 0 0-77.27 0L32 130.75A54.62 54.62 0 0 0 70.56 224a54.28 54.28 0 0 0 38.64-16l11-11a8 8 0 0 0-11.2-11.34\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 40v176a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H40V40h176zM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140m-84-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 40v176a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H40V40h176zM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140m-84-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M240 64v128a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M232 48H24A16 16 0 0 0 8 64v128a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H24V64h208zm-104-88v48a8 8 0 0 1-16 0v-28.69l-18.34 18.35a8 8 0 0 1-11.32 0L64 123.31V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.66L88 124.69l26.34-26.35A8 8 0 0 1 128 104m77.66 18.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L168 132.69V104a8 8 0 0 1 16 0v28.69l10.34-10.35a8 8 0 0 1 11.32 0\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M240 64v128a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M232 48H24A16 16 0 0 0 8 64v128a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H24V64h208zm-104-88v48a8 8 0 0 1-16 0v-28.69l-18.34 18.35a8 8 0 0 1-11.32 0L64 123.31V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.66L88 124.69l26.34-26.35A8 8 0 0 1 128 104m77.66 18.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L168 132.69V104a8 8 0 0 1 16 0v28.69l10.34-10.35a8 8 0 0 1 11.32 0\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 72v72a32 32 0 0 1-32 32H40V72a32 32 0 0 1 32-32h112a32 32 0 0 1 32 32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M184 32H72a40 40 0 0 0-40 40v120a40 40 0 0 0 40 40h88a8 8 0 0 0 0-16H72a24 24 0 0 1-24-24v-8h136a40 40 0 0 0 40-40V72a40 40 0 0 0-40-40m24 112a24 24 0 0 1-24 24H48V72a24 24 0 0 1 24-24h112a24 24 0 0 1 24 24Zm-24-40v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a32 32 0 0 1 56-21.13A32 32 0 0 1 184 104\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 72v72a32 32 0 0 1-32 32H40V72a32 32 0 0 1 32-32h112a32 32 0 0 1 32 32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M184 32H72a40 40 0 0 0-40 40v120a40 40 0 0 0 40 40h88a8 8 0 0 0 0-16H72a24 24 0 0 1-24-24v-8h136a40 40 0 0 0 40-40V72a40 40 0 0 0-40-40m24 112a24 24 0 0 1-24 24H48V72a24 24 0 0 1 24-24h112a24 24 0 0 1 24 24Zm-24-40v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a32 32 0 0 1 56-21.13A32 32 0 0 1 184 104\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 92, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m216 160l-56 56v-56Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M88 96a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m32 16H96a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m96-104v108.69a15.86 15.86 0 0 1-4.69 11.31L168 219.31a15.86 15.86 0 0 1-11.31 4.69H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M48 208h104v-48a8 8 0 0 1 8-8h48V48H48Zm120-40v28.7l28.69-28.7Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m216 160l-56 56v-56Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M88 96a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m32 16H96a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m96-104v108.69a15.86 15.86 0 0 1-4.69 11.31L168 219.31a15.86 15.86 0 0 1-11.31 4.69H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M48 208h104v-48a8 8 0 0 1 8-8h48V48H48Zm120-40v28.7l28.69-28.7Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M10.422 11.375c-.294 1.028.012 2.065.784 2.653c1.061.81 2.565.3 2.874-.995c.08-.337.103-.722.027-1.056c-.23-1.001-.521-1.988-.792-2.996c-1.33.154-2.543 1.172-2.893 2.394m5.548-.287c.273 1.012.285 2.017-.127 3c-1.128 2.69-4.722 3.14-6.573.826c-1.302-1.627-1.28-3.961.06-5.734c.78-1.032 1.804-1.707 3.048-2.054l.379-.104c-.084-.415-.188-.816-.243-1.224c-.176-1.317.512-2.503 1.744-3.04c1.226-.535 2.708-.216 3.53.76c.406.479.395 1.08-.025 1.464c-.412.377-.997.346-1.435-.09c-.247-.246-.51-.44-.877-.436c-.525.006-.987.418-.945.937c.037.468.172.93.3 1.386c.022.078.216.135.338.153c1.333.197 2.504.731 3.472 1.676c2.558 2.493 2.861 6.531.672 9.44c-1.529 2.032-3.61 3.169-6.127 3.409c-4.621.44-8.664-2.53-9.7-7.058C2.516 10.255 4.84 5.831 8.796 4.25c.586-.234 1.143-.031 1.371.498c.232.537-.019 1.086-.61 1.35c-2.368 1.06-3.817 2.855-4.215 5.424c-.533 3.433 1.656 6.776 5 7.72c2.723.77 5.658-.166 7.308-2.33c1.586-2.08 1.4-5.099-.427-6.873A4 4 0 0 0 15.4 9.026c.198.716.389 1.388.57 2.062\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M10.422 11.375c-.294 1.028.012 2.065.784 2.653c1.061.81 2.565.3 2.874-.995c.08-.337.103-.722.027-1.056c-.23-1.001-.521-1.988-.792-2.996c-1.33.154-2.543 1.172-2.893 2.394m5.548-.287c.273 1.012.285 2.017-.127 3c-1.128 2.69-4.722 3.14-6.573.826c-1.302-1.627-1.28-3.961.06-5.734c.78-1.032 1.804-1.707 3.048-2.054l.379-.104c-.084-.415-.188-.816-.243-1.224c-.176-1.317.512-2.503 1.744-3.04c1.226-.535 2.708-.216 3.53.76c.406.479.395 1.08-.025 1.464c-.412.377-.997.346-1.435-.09c-.247-.246-.51-.44-.877-.436c-.525.006-.987.418-.945.937c.037.468.172.93.3 1.386c.022.078.216.135.338.153c1.333.197 2.504.731 3.472 1.676c2.558 2.493 2.861 6.531.672 9.44c-1.529 2.032-3.61 3.169-6.127 3.409c-4.621.44-8.664-2.53-9.7-7.058C2.516 10.255 4.84 5.831 8.796 4.25c.586-.234 1.143-.031 1.371.498c.232.537-.019 1.086-.61 1.35c-2.368 1.06-3.817 2.855-4.215 5.424c-.533 3.433 1.656 6.776 5 7.72c2.723.77 5.658-.166 7.308-2.33c1.586-2.08 1.4-5.099-.427-6.873A4 4 0 0 0 15.4 9.026c.198.716.389 1.388.57 2.062\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M19.355 18.538a68.967 68.959 0 0 0 1.858-2.954a.81.81 0 0 0-.062-.9c-.516-.685-1.504-2.075-2.042-3.362c-.553-1.321-.636-3.375-.64-4.377a1.7 1.7 0 0 0-.358-1.05l-3.198-4.064a4 4 0 0 1-.076.543c-.106.503-.307 1.004-.536 1.5c-.134.29-.29.6-.446.914l-.31.626c-.516 1.068-.997 2.227-1.132 3.59c-.124 1.26.046 2.73.815 4.481q.192.016.386.044a6.36 6.36 0 0 1 3.326 1.505c.916.79 1.744 1.922 2.415 3.5zM8.199 22.569q.11.019.22.02c.78.024 2.095.092 3.16.29c.87.16 2.593.64 4.01 1.055c1.083.316 2.198-.548 2.355-1.664c.114-.814.33-1.735.725-2.58l-.01.005c-.67-1.87-1.522-3.078-2.416-3.849a5.3 5.3 0 0 0-2.778-1.257c-1.54-.216-2.952.19-3.84.45c.532 2.218.368 4.829-1.425 7.531zM5.533 9.938q-.035.15-.098.29L2.82 16.059a1.6 1.6 0 0 0 .313 1.772l4.116 4.24c2.103-3.101 1.796-6.02.836-8.3c-.728-1.73-1.832-3.081-2.55-3.831zM9.32 14.01c.615-.183 1.606-.465 2.745-.534c-.683-1.725-.848-3.233-.716-4.577c.154-1.552.7-2.847 1.235-3.95q.17-.35.328-.664c.149-.297.288-.577.419-.86c.217-.47.379-.885.46-1.27c.08-.38.08-.72-.014-1.043c-.095-.325-.297-.675-.68-1.06a1.6 1.6 0 0 0-1.475.36l-4.95 4.452a1.6 1.6 0 0 0-.513.952l-.427 2.83c.672.59 2.328 2.316 3.335 4.711q.136.317.253.653\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M19.355 18.538a68.967 68.959 0 0 0 1.858-2.954a.81.81 0 0 0-.062-.9c-.516-.685-1.504-2.075-2.042-3.362c-.553-1.321-.636-3.375-.64-4.377a1.7 1.7 0 0 0-.358-1.05l-3.198-4.064a4 4 0 0 1-.076.543c-.106.503-.307 1.004-.536 1.5c-.134.29-.29.6-.446.914l-.31.626c-.516 1.068-.997 2.227-1.132 3.59c-.124 1.26.046 2.73.815 4.481q.192.016.386.044a6.36 6.36 0 0 1 3.326 1.505c.916.79 1.744 1.922 2.415 3.5zM8.199 22.569q.11.019.22.02c.78.024 2.095.092 3.16.29c.87.16 2.593.64 4.01 1.055c1.083.316 2.198-.548 2.355-1.664c.114-.814.33-1.735.725-2.58l-.01.005c-.67-1.87-1.522-3.078-2.416-3.849a5.3 5.3 0 0 0-2.778-1.257c-1.54-.216-2.952.19-3.84.45c.532 2.218.368 4.829-1.425 7.531zM5.533 9.938q-.035.15-.098.29L2.82 16.059a1.6 1.6 0 0 0 .313 1.772l4.116 4.24c2.103-3.101 1.796-6.02.836-8.3c-.728-1.73-1.832-3.081-2.55-3.831zM9.32 14.01c.615-.183 1.606-.465 2.745-.534c-.683-1.725-.848-3.233-.716-4.577c.154-1.552.7-2.847 1.235-3.95q.17-.35.328-.664c.149-.297.288-.577.419-.86c.217-.47.379-.885.46-1.27c.08-.38.08-.72-.014-1.043c-.095-.325-.297-.675-.68-1.06a1.6 1.6 0 0 0-1.475.36l-4.95 4.452a1.6 1.6 0 0 0-.513.952l-.427 2.83c.672.59 2.328 2.316 3.335 4.711q.136.317.253.653\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 85, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M176 40v176h-40v-56H88v56H48V40Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M248 208h-16V96a8 8 0 0 0 0-16h-48V48a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16v160H24a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M216 96v112h-32V96ZM56 48h112v160h-24v-48a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v48H56Zm72 160H96v-40h32ZM72 80a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M176 40v176h-40v-56H88v56H48V40Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M248 208h-16V96a8 8 0 0 0 0-16h-48V48a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16v160H24a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M216 96v112h-32V96ZM56 48h112v160h-24v-48a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v48H56Zm72 160H96v-40h32ZM72 80a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8m-48 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m48 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M80 104v104H32a8 8 0 0 1-8-8v-88a8 8 0 0 1 8-8Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M234 80.12A24 24 0 0 0 216 72h-56V56a40 40 0 0 0-40-40a8 8 0 0 0-7.16 4.42L75.06 96H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h172a24 24 0 0 0 23.82-21l12-96A24 24 0 0 0 234 80.12M32 112h40v88H32Zm191.94-15l-12 96a8 8 0 0 1-7.94 7H88v-94.11l36.71-73.43A24 24 0 0 1 144 56v24a8 8 0 0 0 8 8h64a8 8 0 0 1 7.94 9\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M80 104v104H32a8 8 0 0 1-8-8v-88a8 8 0 0 1 8-8Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M234 80.12A24 24 0 0 0 216 72h-56V56a40 40 0 0 0-40-40a8 8 0 0 0-7.16 4.42L75.06 96H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h172a24 24 0 0 0 23.82-21l12-96A24 24 0 0 0 234 80.12M32 112h40v88H32Zm191.94-15l-12 96a8 8 0 0 1-7.94 7H88v-94.11l36.71-73.43A24 24 0 0 1 144 56v24a8 8 0 0 0 8 8h64a8 8 0 0 1 7.94 9\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 200H56V40a160 160 0 0 1 160 160\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M106.91 149.09A71.53 71.53 0 0 1 128 200a8 8 0 0 1-16 0a56 56 0 0 0-56-56a8 8 0 0 1 0-16a71.53 71.53 0 0 1 50.91 21.09M56 80a8 8 0 0 0 0 16a104 104 0 0 1 104 104a8 8 0 0 0 16 0A120 120 0 0 0 56 80m118.79 1.21A166.9 166.9 0 0 0 56 32a8 8 0 0 0 0 16a151 151 0 0 1 107.48 44.52A151 151 0 0 1 208 200a8 8 0 0 0 16 0a166.9 166.9 0 0 0-49.21-118.79M60 184a12 12 0 1 0 12 12a12 12 0 0 0-12-12\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 200H56V40a160 160 0 0 1 160 160\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M106.91 149.09A71.53 71.53 0 0 1 128 200a8 8 0 0 1-16 0a56 56 0 0 0-56-56a8 8 0 0 1 0-16a71.53 71.53 0 0 1 50.91 21.09M56 80a8 8 0 0 0 0 16a104 104 0 0 1 104 104a8 8 0 0 0 16 0A120 120 0 0 0 56 80m118.79 1.21A166.9 166.9 0 0 0 56 32a8 8 0 0 0 0 16a151 151 0 0 1 107.48 44.52A151 151 0 0 1 208 200a8 8 0 0 0 16 0a166.9 166.9 0 0 0-49.21-118.79M60 184a12 12 0 1 0 12 12a12 12 0 0 0-12-12\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 56v144a16 16 0 0 1-16 16H48V40h160a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M120 216a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H56v160h56a8 8 0 0 1 8 8m109.66-93.66l-40-40a8 8 0 0 0-11.32 11.32L204.69 120H112a8 8 0 0 0 0 16h92.69l-26.35 26.34a8 8 0 0 0 11.32 11.32l40-40a8 8 0 0 0 0-11.32\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 56v144a16 16 0 0 1-16 16H48V40h160a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M120 216a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H56v160h56a8 8 0 0 1 8 8m109.66-93.66l-40-40a8 8 0 0 0-11.32 11.32L204.69 120H112a8 8 0 0 0 0 16h92.69l-26.35 26.34a8 8 0 0 0 11.32 11.32l40-40a8 8 0 0 0 0-11.32\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M5.897 3.087C7.188 1.24 9.213.012 11.997.013c2.786 0 4.81 1.228 6.102 3.074c1.261 1.804 1.789 4.138 1.789 6.385c0 .137-.004.331-.007.487l-.002.096l.914 2.286l.003.007c.273.712.55 1.47.755 2.132c.486 1.563.669 2.723.684 3.535c.007.401-.025.756-.104 1.046a1.7 1.7 0 0 1-.209.478a1.13 1.13 0 0 1-.8.51c-.436.052-.772-.156-.9-.242a3 3 0 0 1-.446-.382a6 6 0 0 1-.217-.239a7.3 7.3 0 0 1-.936 1.596c.196.103.383.216.55.34c.348.26.601.6.692 1.008c.087.39.003.753-.153 1.017a1.26 1.26 0 0 1-.523.475a2 2 0 0 1-.408.15a5.5 5.5 0 0 1-.828.135c-.592.059-1.34.08-2.097.078c-1.445-.002-3.035-.084-3.855-.168c-.82.084-2.41.166-3.855.168a22 22 0 0 1-2.097-.078a5.5 5.5 0 0 1-.828-.135a2 2 0 0 1-.408-.15a1.25 1.25 0 0 1-.522-.474l.002.004a1.4 1.4 0 0 1-.157-1.023c.09-.41.346-.75.695-1.008l.001-.001c.166-.123.352-.235.546-.337a7.3 7.3 0 0 1-.936-1.597a6 6 0 0 1-.218.239a3 3 0 0 1-.445.382c-.128.085-.464.295-.901.242h-.003a1.13 1.13 0 0 1-.796-.506a1.7 1.7 0 0 1-.21-.48a3.8 3.8 0 0 1-.106-1.048c.014-.813.196-1.972.681-3.534c.205-.661.482-1.42.756-2.134l.005-.013l.911-2.279l-.009-.583c0-2.247.528-4.581 1.79-6.385m-1.825 13.18l1.851-3.004v3.53c0 1.042.557 2.521 1.837 3.605l1.394 1.18l-1.319.407h.308c1.467-.002 3.062-.09 3.746-.167l.112-.013l.112.013c.684.077 2.28.165 3.746.167h.307l-1.32-.408l1.395-1.18c1.28-1.083 1.836-2.562 1.836-3.605v-3.53l1.852 3.006l.003.004l.01.017l.043.069l.01.016a18 18 0 0 0-.354-1.3a35 35 0 0 0-.71-2.004l-1.057-2.64v-.193l.007-.32c.003-.157.007-.332.007-.445c0-1.973-.47-3.867-1.428-5.239c-.929-1.328-2.35-2.22-4.462-2.22c-2.113 0-3.534.892-4.463 2.22C6.576 5.604 6.107 7.5 6.107 9.472c0 .2.009.557.012.694l.001.051l.004.203l-1.06 2.65a34 34 0 0 0-.71 2.003m-.282 1.195l-.003.004l-.01.017l-.043.069l-.017.026q.129-.575.355-1.31\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M5.897 3.087C7.188 1.24 9.213.012 11.997.013c2.786 0 4.81 1.228 6.102 3.074c1.261 1.804 1.789 4.138 1.789 6.385c0 .137-.004.331-.007.487l-.002.096l.914 2.286l.003.007c.273.712.55 1.47.755 2.132c.486 1.563.669 2.723.684 3.535c.007.401-.025.756-.104 1.046a1.7 1.7 0 0 1-.209.478a1.13 1.13 0 0 1-.8.51c-.436.052-.772-.156-.9-.242a3 3 0 0 1-.446-.382a6 6 0 0 1-.217-.239a7.3 7.3 0 0 1-.936 1.596c.196.103.383.216.55.34c.348.26.601.6.692 1.008c.087.39.003.753-.153 1.017a1.26 1.26 0 0 1-.523.475a2 2 0 0 1-.408.15a5.5 5.5 0 0 1-.828.135c-.592.059-1.34.08-2.097.078c-1.445-.002-3.035-.084-3.855-.168c-.82.084-2.41.166-3.855.168a22 22 0 0 1-2.097-.078a5.5 5.5 0 0 1-.828-.135a2 2 0 0 1-.408-.15a1.25 1.25 0 0 1-.522-.474l.002.004a1.4 1.4 0 0 1-.157-1.023c.09-.41.346-.75.695-1.008l.001-.001c.166-.123.352-.235.546-.337a7.3 7.3 0 0 1-.936-1.597a6 6 0 0 1-.218.239a3 3 0 0 1-.445.382c-.128.085-.464.295-.901.242h-.003a1.13 1.13 0 0 1-.796-.506a1.7 1.7 0 0 1-.21-.48a3.8 3.8 0 0 1-.106-1.048c.014-.813.196-1.972.681-3.534c.205-.661.482-1.42.756-2.134l.005-.013l.911-2.279l-.009-.583c0-2.247.528-4.581 1.79-6.385m-1.825 13.18l1.851-3.004v3.53c0 1.042.557 2.521 1.837 3.605l1.394 1.18l-1.319.407h.308c1.467-.002 3.062-.09 3.746-.167l.112-.013l.112.013c.684.077 2.28.165 3.746.167h.307l-1.32-.408l1.395-1.18c1.28-1.083 1.836-2.562 1.836-3.605v-3.53l1.852 3.006l.003.004l.01.017l.043.069l.01.016a18 18 0 0 0-.354-1.3a35 35 0 0 0-.71-2.004l-1.057-2.64v-.193l.007-.32c.003-.157.007-.332.007-.445c0-1.973-.47-3.867-1.428-5.239c-.929-1.328-2.35-2.22-4.462-2.22c-2.113 0-3.534.892-4.463 2.22C6.576 5.604 6.107 7.5 6.107 9.472c0 .2.009.557.012.694l.001.051l.004.203l-1.06 2.65a34 34 0 0 0-.71 2.003m-.282 1.195l-.003.004l-.01.017l-.043.069l-.017.026q.129-.575.355-1.31\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M240 56v48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h27.4l-26.59-24.36l-.25-.24a80 80 0 1 0-1.67 114.78a8 8 0 0 1 11 11.63A95.44 95.44 0 0 1 128 224h-1.32a96 96 0 1 1 69.07-164L224 85.8V56a8 8 0 1 1 16 0\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 128a88 88 0 1 1-88-88a88 88 0 0 1 88 88\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M240 56v48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h27.4l-26.59-24.36l-.25-.24a80 80 0 1 0-1.67 114.78a8 8 0 0 1 11 11.63A95.44 95.44 0 0 1 128 224h-1.32a96 96 0 1 1 69.07-164L224 85.8V56a8 8 0 1 1 16 0\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M228.21 124.67A51.6 51.6 0 0 1 232 144c0 39.76-46.56 72-104 72S24 183.76 24 144a51.6 51.6 0 0 1 3.79-19.33a24 24 0 1 1 31.62-34.79C77.72 78.75 101.72 72 128 72s50.28 6.75 68.59 17.88a24 24 0 1 1 31.62 34.79\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M248 104a32 32 0 0 0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17l17.72 2.72a24 24 0 1 0 2.87-15.74l-26-4a8 8 0 0 0-9.11 6.59l-6.87 41.48c-21.84.94-42.82 6.38-60.26 15.65a32 32 0 0 0-42.59 47.74A59 59 0 0 0 16 144c0 21.93 12 42.35 33.91 57.49C70.88 216 98.61 224 128 224s57.12-8 78.09-22.51C228 186.35 240 165.93 240 144a59 59 0 0 0-2.35-16.45A32.16 32.16 0 0 0 248 104m-64-80a8 8 0 1 1-8 8a8 8 0 0 1 8-8m40.13 93.78a8 8 0 0 0-3.29 10A43.6 43.6 0 0 1 224 144c0 16.53-9.59 32.27-27 44.33C178.67 201 154.17 208 128 208s-50.67-7-69-19.67c-17.41-12.06-27-27.8-27-44.33a43.8 43.8 0 0 1 3.14-16.17a8 8 0 0 0-3.27-10a16 16 0 1 1 21.07-23.24a8 8 0 0 0 10.63 2.12l.18-.11C81.45 85.9 104.25 80 128 80c23.73 0 46.53 5.9 64.23 16.6l.18.11a8 8 0 0 0 10.63-2.12a16 16 0 1 1 21.07 23.19ZM88 144a16 16 0 1 1 16-16a16 16 0 0 1-16 16m96-16a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-16.93 44.25a8 8 0 0 1-3.32 10.82a76.18 76.18 0 0 1-71.5 0a8 8 0 1 1 7.5-14.14a60.18 60.18 0 0 0 56.5 0a8 8 0 0 1 10.82 3.32\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M228.21 124.67A51.6 51.6 0 0 1 232 144c0 39.76-46.56 72-104 72S24 183.76 24 144a51.6 51.6 0 0 1 3.79-19.33a24 24 0 1 1 31.62-34.79C77.72 78.75 101.72 72 128 72s50.28 6.75 68.59 17.88a24 24 0 1 1 31.62 34.79\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M248 104a32 32 0 0 0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17l17.72 2.72a24 24 0 1 0 2.87-15.74l-26-4a8 8 0 0 0-9.11 6.59l-6.87 41.48c-21.84.94-42.82 6.38-60.26 15.65a32 32 0 0 0-42.59 47.74A59 59 0 0 0 16 144c0 21.93 12 42.35 33.91 57.49C70.88 216 98.61 224 128 224s57.12-8 78.09-22.51C228 186.35 240 165.93 240 144a59 59 0 0 0-2.35-16.45A32.16 32.16 0 0 0 248 104m-64-80a8 8 0 1 1-8 8a8 8 0 0 1 8-8m40.13 93.78a8 8 0 0 0-3.29 10A43.6 43.6 0 0 1 224 144c0 16.53-9.59 32.27-27 44.33C178.67 201 154.17 208 128 208s-50.67-7-69-19.67c-17.41-12.06-27-27.8-27-44.33a43.8 43.8 0 0 1 3.14-16.17a8 8 0 0 0-3.27-10a16 16 0 1 1 21.07-23.24a8 8 0 0 0 10.63 2.12l.18-.11C81.45 85.9 104.25 80 128 80c23.73 0 46.53 5.9 64.23 16.6l.18.11a8 8 0 0 0 10.63-2.12a16 16 0 1 1 21.07 23.19ZM88 144a16 16 0 1 1 16-16a16 16 0 0 1-16 16m96-16a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-16.93 44.25a8 8 0 0 1-3.32 10.82a76.18 76.18 0 0 1-71.5 0a8 8 0 1 1 7.5-14.14a60.18 60.18 0 0 0 56.5 0a8 8 0 0 1 10.82 3.32\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m96 240l16-80l-64-24L160 16l-16 80l64 24Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26M109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m96 240l16-80l-64-24L160 16l-16 80l64 24Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26M109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 179, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972a.794.794 0 0 0-.884-.618a.795.795 0 0 0-.692.794c0 .101-.002.666.001.777m-11.509 4.808c-.203.001-1.353.004-1.685.003a2.5 2.5 0 0 1-.766-.126a.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124c.66.01 1.32.002 1.981 0q.017 0 .023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01l-.01.08c-.027.397-.038.495-.234 3.06c-.012.24-.034.389-.135.607c-.026.057-.033.042.003.112c.046.092.681 1.523.787 1.74c.008.015.011.02.017.02c.008 0 .033-.026.047-.044q.219-.282.371-.606c.306-.635.44-1.325.486-1.706c.014-.11.021-.22.03-.33l.204-2.616l.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.4 1.4 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.4.4 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293q.114 1.473.233 2.946c.05.4.186 1.085.487 1.706c.103.215.223.419.37.606c.015.018.037.051.048.049c.02-.003.742-1.642.804-1.765c.036-.07.03-.055.003-.112m3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56q-.017 0-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.5.5 0 0 0-.02.191a.46.46 0 0 0 .23.378a1 1 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.5.5 0 0 0-.023.172a.47.47 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001q.017 0 .023-.015l.575-1.28a.025.025 0 0 0-.024-.035m-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829c0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047c.001.037.465 1.064.555 1.263c.01.02.03.033.051.033c.157.003.767.009.938-.014c.153-.02.3-.06.438-.132c.3-.156.49-.419.595-.765c.052-.172.075-.353.075-.533q.003-3.495-.007-6.991a.03.03 0 0 0-.032-.032zm11.784 6.896q-.002-.02-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084c-.37 0-1.11-.002-1.304 0c-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036s.013.008.058.008q2.622.003 5.243.002c.03-.001.034-.006.035-.033zm4.177-3.43q0 .021-.02.024c-.346.006-.692.004-1.037.004q-.021-.003-.022-.024q-.006-.651-.01-1.303c0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015c.093.025.16.107.165.204c.006.431.002 1.153.001 1.153m2.67.244a1.95 1.95 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21q.001-.198-.025-.394a1.8 1.8 0 0 0-.153-.53a1.53 1.53 0 0 0-.677-.71a2.2 2.2 0 0 0-1-.258c-.153-.003-.567 0-.72 0c-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007q-.008.008-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128v1.148s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003a.7.7 0 0 1 .28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185c0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033q.276.655.57 1.303a.05.05 0 0 0 .04.026c.17.005.34.002.51.003c.15-.002.517.004.666-.01a2 2 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981q.001-.191-.034-.38c0 .078-.029-.641-.724-.998\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972a.794.794 0 0 0-.884-.618a.795.795 0 0 0-.692.794c0 .101-.002.666.001.777m-11.509 4.808c-.203.001-1.353.004-1.685.003a2.5 2.5 0 0 1-.766-.126a.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124c.66.01 1.32.002 1.981 0q.017 0 .023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01l-.01.08c-.027.397-.038.495-.234 3.06c-.012.24-.034.389-.135.607c-.026.057-.033.042.003.112c.046.092.681 1.523.787 1.74c.008.015.011.02.017.02c.008 0 .033-.026.047-.044q.219-.282.371-.606c.306-.635.44-1.325.486-1.706c.014-.11.021-.22.03-.33l.204-2.616l.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.4 1.4 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.4.4 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293q.114 1.473.233 2.946c.05.4.186 1.085.487 1.706c.103.215.223.419.37.606c.015.018.037.051.048.049c.02-.003.742-1.642.804-1.765c.036-.07.03-.055.003-.112m3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56q-.017 0-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.5.5 0 0 0-.02.191a.46.46 0 0 0 .23.378a1 1 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.5.5 0 0 0-.023.172a.47.47 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001q.017 0 .023-.015l.575-1.28a.025.025 0 0 0-.024-.035m-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829c0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047c.001.037.465 1.064.555 1.263c.01.02.03.033.051.033c.157.003.767.009.938-.014c.153-.02.3-.06.438-.132c.3-.156.49-.419.595-.765c.052-.172.075-.353.075-.533q.003-3.495-.007-6.991a.03.03 0 0 0-.032-.032zm11.784 6.896q-.002-.02-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084c-.37 0-1.11-.002-1.304 0c-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036s.013.008.058.008q2.622.003 5.243.002c.03-.001.034-.006.035-.033zm4.177-3.43q0 .021-.02.024c-.346.006-.692.004-1.037.004q-.021-.003-.022-.024q-.006-.651-.01-1.303c0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015c.093.025.16.107.165.204c.006.431.002 1.153.001 1.153m2.67.244a1.95 1.95 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21q.001-.198-.025-.394a1.8 1.8 0 0 0-.153-.53a1.53 1.53 0 0 0-.677-.71a2.2 2.2 0 0 0-1-.258c-.153-.003-.567 0-.72 0c-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007q-.008.008-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128v1.148s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003a.7.7 0 0 1 .28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185c0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033q.276.655.57 1.303a.05.05 0 0 0 .04.026c.17.005.34.002.51.003c.15-.002.517.004.666-.01a2 2 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981q.001-.191-.034-.38c0 .078-.029-.641-.724-.998\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 136a88 88 0 1 1-88-88a88 88 0 0 1 88 88\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M216 136a88 88 0 1 1-88-88a88 88 0 0 1 88 88\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 165, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 120a95.55 95.55 0 0 1-56-18v54a68 68 0 0 1-136 0c0-33.46 24.17-62.33 56-68v42.69A28 28 0 1 0 128 156V24h40a56 56 0 0 0 56 56Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 72a48.05 48.05 0 0 1-48-48a8 8 0 0 0-8-8h-40a8 8 0 0 0-8 8v132a20 20 0 1 1-28.57-18.08a8 8 0 0 0 4.57-7.23V88a8 8 0 0 0-9.4-7.88C50.91 86.48 24 119.1 24 156a76 76 0 0 0 152 0v-39.71A103.25 103.25 0 0 0 224 128a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 39.64a87.2 87.2 0 0 1-43.33-16.15A8 8 0 0 0 160 102v54a60 60 0 0 1-120 0c0-25.9 16.64-49.13 40-57.6v27.67A36 36 0 1 0 136 156V32h24.5A64.14 64.14 0 0 0 216 87.5Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 120a95.55 95.55 0 0 1-56-18v54a68 68 0 0 1-136 0c0-33.46 24.17-62.33 56-68v42.69A28 28 0 1 0 128 156V24h40a56 56 0 0 0 56 56Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M224 72a48.05 48.05 0 0 1-48-48a8 8 0 0 0-8-8h-40a8 8 0 0 0-8 8v132a20 20 0 1 1-28.57-18.08a8 8 0 0 0 4.57-7.23V88a8 8 0 0 0-9.4-7.88C50.91 86.48 24 119.1 24 156a76 76 0 0 0 152 0v-39.71A103.25 103.25 0 0 0 224 128a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 39.64a87.2 87.2 0 0 1-43.33-16.15A8 8 0 0 0 160 102v54a60 60 0 0 1-120 0c0-25.9 16.64-49.13 40-57.6v27.67A36 36 0 1 0 136 156V32h24.5A64.14 64.14 0 0 0 216 87.5Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 64v144H32V48h176a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v108.69l50.34-50.35a8 8 0 0 1 11.32 0L128 132.69L180.69 80H160a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8v40a8 8 0 0 1-16 0V91.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-56 56V200h184a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 64v144H32V48h176a16 16 0 0 1 16 16\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v108.69l50.34-50.35a8 8 0 0 1 11.32 0L128 132.69L180.69 80H160a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8v40a8 8 0 0 1-16 0V91.31l-58.34 58.35a8 8 0 0 1-11.32 0L96 123.31l-56 56V200h184a8 8 0 0 1 8 8\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cg fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'1.5\\' color=\\'currentColor\\'%3E%3Cpath d=\\'M17.148 22C20.037 22 21 19.678 21 16.813c-.963 1.037-3.633 3.207-4.815-1.038C14.741 10.588 10.5 11.5 8 14c3.852 0 4.383.897 5.296 3.85c.963 3.112 2.408 4.15 3.852 4.15\\'/%3E%3Cpath d=\\'M6.515 11a8 8 0 0 1-.015-.5c0-3.314 2.015-6 4.5-6s4.5 2.686 4.5 6c0 .892-.238 1.739-.5 2.5\\'/%3E%3Cpath d=\\'M13.241 18.662A7.6 7.6 0 0 1 11 19c-4.418 0-8-3.806-8-8.5S6.582 2 11 2s8 3.806 8 8.5a8.9 8.9 0 0 1-.707 3.5\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cg fill=\\'none\\' stroke=\\'currentColor\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'1.5\\' color=\\'currentColor\\'%3E%3Cpath d=\\'M17.148 22C20.037 22 21 19.678 21 16.813c-.963 1.037-3.633 3.207-4.815-1.038C14.741 10.588 10.5 11.5 8 14c3.852 0 4.383.897 5.296 3.85c.963 3.112 2.408 4.15 3.852 4.15\\'/%3E%3Cpath d=\\'M6.515 11a8 8 0 0 1-.015-.5c0-3.314 2.015-6 4.5-6s4.5 2.686 4.5 6c0 .892-.238 1.739-.5 2.5\\'/%3E%3Cpath d=\\'M13.241 18.662A7.6 7.6 0 0 1 11 19c-4.418 0-8-3.806-8-8.5S6.582 2 11 2s8 3.806 8 8.5a8.9 8.9 0 0 1-.707 3.5\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M19 5h-5v7l5 6zm-9 13v-6l-5 6z\\' opacity=\\'.3\\'/%3E%3Cpath fill=\\'currentColor\\' d=\\'M19 3h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-2h-2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2zm-2 17H5l5-6z\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M19 5h-5v7l5 6zm-9 13v-6l-5 6z\\' opacity=\\'.3\\'/%3E%3Cpath fill=\\'currentColor\\' d=\\'M19 3h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-2h-2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2zm-2 17H5l5-6z\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(16, 185, 129);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M163.94 80.11C162.63 80 161.32 80 160 80a72 72 0 0 0-67.93 95.88a71.5 71.5 0 0 1-30-8.39l-27.76 8.16a8 8 0 0 1-9.93-9.93L32.5 138a72 72 0 1 1 131.44-57.89\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M144 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m51.34 83.47a16 16 0 0 1-19.87 19.87l-24.71-7.27a80 80 0 0 1-108.33-40.65a79 79 0 0 1-25.19-7.35l-24.71 7.27a16 16 0 0 1-19.87-19.87l7.27-24.71a80 80 0 1 1 145.65-66.17a80 80 0 0 1 62.49 114.17ZM81.3 166.3a79.94 79.94 0 0 1 70.38-93.87a64 64 0 0 0-112.13 61.76a8 8 0 0 1 .63 6L32 168l27.76-8.17a8 8 0 0 1 6 .63a63.5 63.5 0 0 0 15.54 5.84m135.15 15.89a64 64 0 1 0-26.26 26.26a8 8 0 0 1 6-.63L224 216l-8.17-27.76a8 8 0 0 1 .62-6.05\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M163.94 80.11C162.63 80 161.32 80 160 80a72 72 0 0 0-67.93 95.88a71.5 71.5 0 0 1-30-8.39l-27.76 8.16a8 8 0 0 1-9.93-9.93L32.5 138a72 72 0 1 1 131.44-57.89\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M144 140a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m51.34 83.47a16 16 0 0 1-19.87 19.87l-24.71-7.27a80 80 0 0 1-108.33-40.65a79 79 0 0 1-25.19-7.35l-24.71 7.27a16 16 0 0 1-19.87-19.87l7.27-24.71a80 80 0 1 1 145.65-66.17a80 80 0 0 1 62.49 114.17ZM81.3 166.3a79.94 79.94 0 0 1 70.38-93.87a64 64 0 0 0-112.13 61.76a8 8 0 0 1 .63 6L32 168l27.76-8.17a8 8 0 0 1 6 .63a63.5 63.5 0 0 0 15.54 5.84m135.15 15.89a64 64 0 1 0-26.26 26.26a8 8 0 0 1 6-.63L224 216l-8.17-27.76a8 8 0 0 1 .62-6.05\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(16, 185, 129);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m238.2 87.69l-104 125.43a8 8 0 0 1-12.3 0L17.8 87.69a7.79 7.79 0 0 1 1.31-11.21a180.75 180.75 0 0 1 217.78 0a7.79 7.79 0 0 1 1.31 11.21\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89M128 208L24.09 82.74A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m238.2 87.69l-104 125.43a8 8 0 0 1-12.3 0L17.8 87.69a7.79 7.79 0 0 1 1.31-11.21a180.75 180.75 0 0 1 217.78 0a7.79 7.79 0 0 1 1.31 11.21\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M247.89 80.91a15.93 15.93 0 0 0-6.17-10.81A186.67 186.67 0 0 0 128 32A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81a15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l104-125.43a15.65 15.65 0 0 0 3.58-11.89M128 208L24.09 82.74A170.76 170.76 0 0 1 128 48a170.76 170.76 0 0 1 103.91 34.74Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 20 20\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M14.812 9.801c-.778-.141-.4-.534-.4-.534s.761-1.178-.15-2.034c-1.13-1.061-3.877.135-3.877.135c-1.05.306-.77-.14-.622-.897c0-.892-.326-2.402-3.12-1.51C3.853 5.858 1.455 9 1.455 9C-.212 11.087.01 12.7.01 12.7c.416 3.562 4.448 4.54 7.584 4.771c3.299.243 7.752-1.067 9.102-3.76c1.35-2.696-1.104-3.763-1.884-3.91m-1.044 2.549c0 2.051-2.653 3.977-5.93 4.117c-3.276.144-5.923-1.398-5.923-3.45c0-2.054 2.647-3.7 5.923-3.842s5.93 1.126 5.93 3.175m-6.584-1.823c-3.293.362-2.913 3.259-2.913 3.259s-.034.917.883 1.384c1.927.98 3.912.387 4.915-.829s.415-4.173-2.885-3.814m.281 3.075c0 .48-.498.925-1.112.99c-.614.068-1.11-.265-1.11-.747s.44-.985 1.055-1.045c.707-.064 1.167.318 1.167.802m1.003-1.15c.11.174.031.437-.173.588c-.208.146-.464.126-.574-.05c-.115-.17-.072-.445.139-.588c.244-.171.498-.122.608.05m4.86-9.806c.335-.06 1.532-.281 2.696-.025c2.083.456 4.941 2.346 3.655 6.368c-.094.575-.398.62-.76.62c-.432 0-.781-.255-.781-.662c0-.352.155-.71.155-.71c.046-.148.411-1.07-.241-2.448c-1.198-1.887-3.609-1.915-3.893-1.807a3.5 3.5 0 0 1-.591.141l-.106.016l-.014.002c-.437 0-.786-.333-.786-.737a.75.75 0 0 1 .573-.715s.007-.011.018-.014c.024-.004.049-.027.075-.029m.66 2.611s3.367-.584 2.964 2.811a.2.2 0 0 1-.007.054c-.037.241-.264.426-.529.426c-.3 0-.543-.225-.543-.507c0 0 .534-2.269-1.885-1.768c-.299 0-.538-.227-.538-.505c0-.283.24-.51.538-.51\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 20 20\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M14.812 9.801c-.778-.141-.4-.534-.4-.534s.761-1.178-.15-2.034c-1.13-1.061-3.877.135-3.877.135c-1.05.306-.77-.14-.622-.897c0-.892-.326-2.402-3.12-1.51C3.853 5.858 1.455 9 1.455 9C-.212 11.087.01 12.7.01 12.7c.416 3.562 4.448 4.54 7.584 4.771c3.299.243 7.752-1.067 9.102-3.76c1.35-2.696-1.104-3.763-1.884-3.91m-1.044 2.549c0 2.051-2.653 3.977-5.93 4.117c-3.276.144-5.923-1.398-5.923-3.45c0-2.054 2.647-3.7 5.923-3.842s5.93 1.126 5.93 3.175m-6.584-1.823c-3.293.362-2.913 3.259-2.913 3.259s-.034.917.883 1.384c1.927.98 3.912.387 4.915-.829s.415-4.173-2.885-3.814m.281 3.075c0 .48-.498.925-1.112.99c-.614.068-1.11-.265-1.11-.747s.44-.985 1.055-1.045c.707-.064 1.167.318 1.167.802m1.003-1.15c.11.174.031.437-.173.588c-.208.146-.464.126-.574-.05c-.115-.17-.072-.445.139-.588c.244-.171.498-.122.608.05m4.86-9.806c.335-.06 1.532-.281 2.696-.025c2.083.456 4.941 2.346 3.655 6.368c-.094.575-.398.62-.76.62c-.432 0-.781-.255-.781-.662c0-.352.155-.71.155-.71c.046-.148.411-1.07-.241-2.448c-1.198-1.887-3.609-1.915-3.893-1.807a3.5 3.5 0 0 1-.591.141l-.106.016l-.014.002c-.437 0-.786-.333-.786-.737a.75.75 0 0 1 .573-.715s.007-.011.018-.014c.024-.004.049-.027.075-.029m.66 2.611s3.367-.584 2.964 2.811a.2.2 0 0 1-.007.054c-.037.241-.264.426-.529.426c-.3 0-.543-.225-.543-.507c0 0 .534-2.269-1.885-1.768c-.299 0-.538-.227-.538-.505c0-.283.24-.51.538-.51\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'m237.66 85.26l-128.4 128.4a8 8 0 0 1-11.32 0l-71.6-72a8 8 0 0 1 0-11.31l24-24a8 8 0 0 1 11.32 0L104 147.43l98.34-97.09a8 8 0 0 1 11.32 0l24 23.6a8 8 0 0 1 0 11.32\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m243.28 68.24l-24-23.56a16 16 0 0 0-22.59 0L104 136.23l-36.69-35.6a16 16 0 0 0-22.58.05l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0L243.33 90.91a16 16 0 0 0-.05-22.67M103.62 208L32 136l24-24a.6.6 0 0 1 .08.08l42.35 41.09a8 8 0 0 0 11.19 0L208.06 56L232 79.6Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 197, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M208 216h-48L48 40h48Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M208 216h-48L48 40h48Z\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 0 1-96 96a48 48 0 0 1 0-96a48 48 0 0 0 0-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88.1 88.1 0 0 1 88-88a40 40 0 0 1 0 80a56 56 0 0 0-50.61 80A88 88 0 0 1 40 128m88 88a40 40 0 0 1 0-80a56 56 0 0 0 50.61-79.95A88 88 0 0 1 128 216m12-40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-24-96a12 12 0 1 1 12 12a12 12 0 0 1-12-12\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 256 256\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M224 128a96 96 0 0 1-96 96a48 48 0 0 1 0-96a48 48 0 0 0 0-96a96 96 0 0 1 96 96\\' opacity=\\'.2\\'/%3E%3Cpath d=\\'M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88.1 88.1 0 0 1 88-88a40 40 0 0 1 0 80a56 56 0 0 0-50.61 80A88 88 0 0 1 40 128m88 88a40 40 0 0 1 0-80a56 56 0 0 0 50.61-79.95A88 88 0 0 1 128 216m12-40a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-24-96a12 12 0 1 1 12 12a12 12 0 0 1-12-12\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cg fill=\\'none\\'%3E%3Cpath fill=\\'currentColor\\' fill-opacity=\\'.16\\' fill-rule=\\'evenodd\\' d=\\'M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33M9.75 8.479v6.542l5.75-3.271z\\' clip-rule=\\'evenodd\\'/%3E%3Cpath stroke=\\'currentColor\\' stroke-linejoin=\\'round\\' stroke-miterlimit=\\'10\\' stroke-width=\\'1.5\\' d=\\'M20.595 4.463A2.77 2.77 0 0 1 22.54 6.42c.46 1.728.46 5.33.46 5.33s0 3.604-.46 5.33a2.77 2.77 0 0 1-1.945 1.958C18.88 19.5 12 19.5 12 19.5s-6.879 0-8.595-.462A2.77 2.77 0 0 1 1.46 17.08C1 15.353 1 11.75 1 11.75s0-3.602.46-5.33a2.77 2.77 0 0 1 1.945-1.957C5.12 4 12 4 12 4s6.88 0 8.595.463Z\\'/%3E%3Cpath stroke=\\'currentColor\\' stroke-linejoin=\\'round\\' stroke-miterlimit=\\'10\\' stroke-width=\\'1.5\\' d=\\'M9.75 15.021V8.48l5.75 3.271z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cg fill=\\'none\\'%3E%3Cpath fill=\\'currentColor\\' fill-opacity=\\'.16\\' fill-rule=\\'evenodd\\' d=\\'M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33M9.75 8.479v6.542l5.75-3.271z\\' clip-rule=\\'evenodd\\'/%3E%3Cpath stroke=\\'currentColor\\' stroke-linejoin=\\'round\\' stroke-miterlimit=\\'10\\' stroke-width=\\'1.5\\' d=\\'M20.595 4.463A2.77 2.77 0 0 1 22.54 6.42c.46 1.728.46 5.33.46 5.33s0 3.604-.46 5.33a2.77 2.77 0 0 1-1.945 1.958C18.88 19.5 12 19.5 12 19.5s-6.879 0-8.595-.462A2.77 2.77 0 0 1 1.46 17.08C1 15.353 1 11.75 1 11.75s0-3.602.46-5.33a2.77 2.77 0 0 1 1.945-1.957C5.12 4 12 4 12 4s6.88 0 8.595.463Z\\'/%3E%3Cpath stroke=\\'currentColor\\' stroke-linejoin=\\'round\\' stroke-miterlimit=\\'10\\' stroke-width=\\'1.5\\' d=\\'M9.75 15.021V8.48l5.75 3.271z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 68, 68);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 32 32\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M27.662 8.552a1.5 1.5 0 0 1 .159 1.66l-5.446 10.113l5.8-1.29a1.5 1.5 0 0 1 .65 2.93l-9 2a1.5 1.5 0 0 1-1.646-2.176l5.283-9.812l-6.531 1.96a1.5 1.5 0 1 1-.862-2.874l10-3a1.5 1.5 0 0 1 1.593.489\\'/%3E%3Cpath d=\\'M9 19a1 1 0 0 1 1-1h7a1 1 0 0 1 .753 1.659L12.203 26H17a1 1 0 1 1 0 2h-7a1 1 0 0 1-.753-1.658L14.797 20H10a1 1 0 0 1-1-1\\'/%3E%3Cpath d=\\'M4.287 21.042a1 1 0 0 0-.574 1.916l3.102.93L2.4 27.2a1 1 0 0 0 .404 1.78l5 1a1 1 0 0 0 .392-1.96l-2.807-.562L9.6 24.3a1 1 0 0 0-.313-1.758z\\'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 32 32\\'%3E%3Cg fill=\\'currentColor\\'%3E%3Cpath d=\\'M27.662 8.552a1.5 1.5 0 0 1 .159 1.66l-5.446 10.113l5.8-1.29a1.5 1.5 0 0 1 .65 2.93l-9 2a1.5 1.5 0 0 1-1.646-2.176l5.283-9.812l-6.531 1.96a1.5 1.5 0 1 1-.862-2.874l10-3a1.5 1.5 0 0 1 1.593.489\\'/%3E%3Cpath d=\\'M9 19a1 1 0 0 1 1-1h7a1 1 0 0 1 .753 1.659L12.203 26H17a1 1 0 1 1 0 2h-7a1 1 0 0 1-.753-1.658L14.797 20H10a1 1 0 0 1-1-1\\'/%3E%3Cpath d=\\'M4.287 21.042a1 1 0 0 0-.574 1.916l3.102.93L2.4 27.2a1 1 0 0 0 .404 1.78l5 1a1 1 0 0 0 .392-1.96l-2.807-.562L9.6 24.3a1 1 0 0 0-.313-1.758z\\'/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 115, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M13.374 18.897h1.452l.478 1.637l2.605-1.637h3.07V5.395h-7.605zM14.919 6.86h4.515v10.57h-1.732l-1.73 1.087l-.315-1.084l-.738-.003zm-2.83 4.712H8.846a70 70 0 0 0 .136-4.56h3.172s.122-1.4-.532-1.384H6.135q.325-1.22.814-2.524s-1.493 0-2.001 1.339c-.21.552-.82 2.677-1.903 4.848c.365-.04 1.573-.073 2.284-1.378c.13-.366.156-.414.318-.902h1.79c0 .651-.074 4.151-.105 4.558h-3.24c-.728 0-.964 1.466-.964 1.466h4.065c-.272 3.095-1.737 5.703-4.392 7.764c1.27.363 2.536-.057 3.162-.614c0 0 1.425-1.297 2.206-4.298l3.345 4.03s.491-1.668-.076-2.482c-.47-.553-1.74-2.051-2.281-2.594l-.907.72q.405-1.302.488-2.524h3.822s-.005-1.466-.47-1.466\\'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1em\\' height=\\'1em\\' viewBox=\\'0 0 24 24\\'%3E%3Cpath fill=\\'currentColor\\' d=\\'M13.374 18.897h1.452l.478 1.637l2.605-1.637h3.07V5.395h-7.605zM14.919 6.86h4.515v10.57h-1.732l-1.73 1.087l-.315-1.084l-.738-.003zm-2.83 4.712H8.846a70 70 0 0 0 .136-4.56h3.172s.122-1.4-.532-1.384H6.135q.325-1.22.814-2.524s-1.493 0-2.001 1.339c-.21.552-.82 2.677-1.903 4.848c.365-.04 1.573-.073 2.284-1.378c.13-.366.156-.414.318-.902h1.79c0 .651-.074 4.151-.105 4.558h-3.24c-.728 0-.964 1.466-.964 1.466h4.065c-.272 3.095-1.737 5.703-4.392 7.764c1.27.363 2.536-.057 3.162-.614c0 0 1.425-1.297 2.206-4.298l3.345 4.03s.491-1.668-.076-2.482c-.47-.553-1.74-2.051-2.281-2.594l-.907.72q.405-1.302.488-2.524h3.822s-.005-1.466-.47-1.466\\'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 130, 246);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
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
  --callout-color: 233, 49, 71;
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
  --callout-color: 233, 49, 71;
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
  --callout-color: 120, 82, 238;
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
  --callout-color: 233, 49, 71;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 236, 117, 0;
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
  --callout-color: 158, 158, 158;
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
  --callout-color: 8, 185, 78;
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
  --callout-color: 0, 191, 188;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 236, 117, 0;
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
  --callout-color: 8, 109, 221;
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
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(64, 64, 64);
  font-family: "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "Helvetica Neue", "WenQuanYi Micro Hei", Helvetica, Arial, sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(64, 64, 64);
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
}

html[saved-theme="light"] body ul.tags > li {
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
  color: rgb(23, 23, 23);
}`,
  },
};
