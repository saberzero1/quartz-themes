import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "magicuser",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 254 !important;
  --accent-l: 68% !important;
  --accent-s: 80% !important;
  --background-modifier-active-hover: #007fff28 !important;
  --background-modifier-border: #007fff38 !important;
  --background-modifier-border-focus: #007fff !important;
  --background-modifier-border-hover: #007fff48 !important;
  --background-modifier-hover: #007fff28 !important;
  --background-primary: #002248 !important;
  --background-primary-alt: #212121 !important;
  --background-secondary: #001122 !important;
  --background-secondary-alt: #383838 !important;
  --bases-cards-background: #002248 !important;
  --bases-cards-cover-background: #212121 !important;
  --bases-cards-shadow: 0 0 0 1px #007fff38 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #007fff48 !important;
  --bases-embed-border-color: #007fff38 !important;
  --bases-table-border-color: #007fff38 !important;
  --bases-table-cell-background-active: #002248 !important;
  --bases-table-cell-background-disabled: transparent !important;
  --bases-table-cell-background-selected: hsla(254, 80%, 68%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #007fff !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(254, 80%, 68%) !important;
  --bases-table-group-background: #002248 !important;
  --bases-table-header-background: #002248 !important;
  --bases-table-header-background-hover: #007fff28 !important;
  --bases-table-header-color: #dadada !important;
  --bases-table-header-weight: 600 !important;
  --bases-table-row-background-hover: #0088ff33 !important;
  --bases-table-summary-background: #002248 !important;
  --bases-table-summary-background-hover: #007fff28 !important;
  --blockquote-background-color: #cfcfcf20 !important;
  --blockquote-border-color: #007fff !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-color: #dadada !important;
  --blur-background: color-mix(in srgb, #007fff18 65%, transparent) linear-gradient(#007fff18, color-mix(in srgb, #007fff18 65%, transparent)) !important;
  --bold-weight: 700 !important;
  --callout-blend-mode: normal;
  --callout-title-weight: 600;
  --canvas-background: #002248 !important;
  --cards-th-display: none !important;
  --checkbox-border-color: #0072d3 !important;
  --checkbox-border-color-hover: #00bfff !important;
  --checkbox-color: #00bfff !important;
  --checkbox-color-hover: #00cfff !important;
  --checkbox-marker-color: #002248 !important;
  --checklist-done-color: #00cf48 !important;
  --checklist-done-decoration: underline !important;
  --code-background: #001122 !important;
  --code-border-color: #007fff38 !important;
  --code-bracket-background: #007fff28 !important;
  --code-comment: #a3a3a3 !important;
  --code-function: #48f148 !important;
  --code-important: #ff7f00 !important;
  --code-keyword: #d372ff !important;
  --code-normal: #f1f1f1 !important;
  --code-operator: #d372ff !important;
  --code-property: #0088f1 !important;
  --code-punctuation: #d372ff !important;
  --code-string: #00d8ff !important;
  --code-tag: #d372ff !important;
  --code-value: #ffa300 !important;
  --collapse-icon-color: #0072d3 !important;
  --collapse-icon-color-collapsed: #0072d3 !important;
  --color-accent: hsl(254, 80%, 68%) !important;
  --color-accent-1: hsl(251, 81.6%, 78.2%) !important;
  --color-accent-2: hsl(249, 84%, 87.72%) !important;
  --color-accent-hsl: 254, 80%, 68% !important;
  --divider-color: #007fff10 !important;
  --divider-color-hover: #007fff !important;
  --divider-width: 1px !important;
  --divider-width-hover: 3px !important;
  --dropdown-background: #007fff18 !important;
  --dropdown-background-hover: #007fff38 !important;
  --embed-block-shadow-hover: 0 0 0 1px #007fff38, inset 0 0 0 1px #007fff38 !important;
  --embed-border-left: 2px solid #0072d348 !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(254, 80%, 68%) !important;
  --file-header-background: #002248 !important;
  --file-header-background-focused: #002248 !important;
  --file-header-border: 1px solid #007fff20 !important;
  --file-header-font-size: 16px !important;
  --file-header-font-weight: 600 !important;
  --file-header-justify: left !important;
  --file-line-width: 700px !important;
  --file-margins: 32px !important;
  --flair-background: #007fff18 !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --footnote-divider-color: transparent !important;
  --footnote-input-background-active: #002248 !important;
  --graph-line: #007fff !important;
  --graph-node: #d372ff !important;
  --graph-node-attachment: #007fff !important;
  --graph-node-focused: #00cfff !important;
  --graph-node-tag: #20f120 !important;
  --graph-node-unresolved: #a3a3a3 !important;
  --graph-text: #f1f1f1 !important;
  --h1-color: #00a3ff !important;
  --h1-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --h1-size: 2em !important;
  --h1-weight: 800 !important;
  --h2-color: #00a3ff !important;
  --h2-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --h2-size: 1.5em !important;
  --h2-weight: 800 !important;
  --h3-color: #00a3ff !important;
  --h3-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --h3-size: 1.17em !important;
  --h3-weight: 800 !important;
  --h4-color: #00a3ff !important;
  --h4-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --h4-size: 1em !important;
  --h4-weight: 800 !important;
  --h5-color: #00a3ff !important;
  --h5-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --h5-size: .83em !important;
  --h5-weight: 800 !important;
  --h6-color: #00a3ff !important;
  --h6-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --h6-size: .67em !important;
  --h6-weight: 800 !important;
  --heading-spacing: 2.5rem !important;
  --hidden-text-underline-background-color: #ffff0088 !important;
  --hidden-text-underline-foreground-color: #dadada !important;
  --highlight: #ffff0088 !important;
  --highlight-mix-blend-mode: normal !important;
  --hr-color: #0072d3 !important;
  --hr-thickness: 1px !important;
  --icon-color: #5382d3 !important;
  --icon-color-active: #007fff !important;
  --icon-color-focused: #00a3ff !important;
  --icon-color-hover: #007fff !important;
  --icon-opacity: 0.95 !important;
  --indentation-guide-color: #007fff7f !important;
  --indentation-guide-color-active: #bf00ff !important;
  --inline-title-color: #00a3ff !important;
  --inline-title-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --inline-title-margin-bottom: .5em !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 800 !important;
  --interactive-accent: hsl(254, 80%, 68%) !important;
  --interactive-accent-hover: hsl(251, 81.6%, 78.2%) !important;
  --interactive-accent-hsl: 254, 80%, 68% !important;
  --interactive-hover: #007fff38 !important;
  --interactive-normal: #007fff18 !important;
  --light: #002248 !important;
  --lightgray: #001122 !important;
  --link-color: #d372ff !important;
  --link-color-hover: #db8fff !important;
  --link-external-color: #00a9dd !important;
  --link-external-color-hover: #00c3ff !important;
  --link-unresolved-color: #d372ff !important;
  --link-unresolved-decoration-color: hsla(254, 80%, 68%, 0.3) !important;
  --list-indent: 2em !important;
  --list-marker-color: #007fff !important;
  --list-marker-color-collapsed: #f100f1 !important;
  --list-marker-color-hover: #007fff !important;
  --menu-background: #001122 !important;
  --menu-border-color: #007fff48 !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-gap: 2px !important;
  --metadata-input-background-active: #002248 !important;
  --metadata-input-font-size: 0.933em !important;
  --metadata-input-height: 28px !important;
  --metadata-label-background-active: #002248 !important;
  --metadata-label-font-size: 0.933em !important;
  --metadata-label-text-color: #00a3ff !important;
  --metadata-label-text-color-hover: #00bfff !important;
  --metadata-padding: 8px 2px !important;
  --metadata-property-background-active: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #007fff !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #007fff48 !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: #002248 !important;
  --modal-border-color: #007fff30 !important;
  --modal-border-width: 1px !important;
  --modal-height: 92vh !important;
  --mu-amulet-hue: 224 !important;
  --mu-amulet-sat: 50% !important;
  --mu-amulet-sat-value: 50 !important;
  --mu-background-color-1: #002248 !important;
  --mu-background-color-2: #001122 !important;
  --mu-bg-image-overlay: 0.0 !important;
  --mu-bg-search-results: #001836 !important;
  --mu-blockquote-background: #cfcfcf20 !important;
  --mu-blockquote-border: #007fff !important;
  --mu-bookmarked-note-icon-bg: #007fff40 !important;
  --mu-border-width: 1px !important;
  --mu-border-width-value: 1 !important;
  --mu-box-callout-icon: '<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --><path d="m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z" fill="currentColor" fill-rule="evenodd"/></svg>' !important;
  --mu-callout-blue: 0, 136, 255 !important;
  --mu-callout-book: 0, 163, 255 !important;
  --mu-callout-comment: 0, 188, 188 !important;
  --mu-callout-con: 228, 48, 48 !important;
  --mu-callout-green: 0, 180, 88 !important;
  --mu-callout-link: 48, 142, 255 !important;
  --mu-callout-magic: 207, 88, 255 !important;
  --mu-callout-mic: 0, 188, 82 !important;
  --mu-callout-orange: 255, 97, 0 !important;
  --mu-callout-paperclip: 255, 163, 33 !important;
  --mu-callout-pink: 255, 18, 241 !important;
  --mu-callout-pro: 0, 197, 88 !important;
  --mu-callout-purple: 201, 0, 255 !important;
  --mu-callout-red: 255, 48, 48 !important;
  --mu-callout-target: 255, 72, 72 !important;
  --mu-callout-video: 237, 48, 48 !important;
  --mu-callout-yellow: 237, 188, 0 !important;
  --mu-cards-border: #002248 !important;
  --mu-caret-color: #00cfff !important;
  --mu-code-attribute: #ffa3a3 !important;
  --mu-code-block-border: #0072d3 !important;
  --mu-collapse-icon-size: 1.2 !important;
  --mu-color-lig: #007fff !important;
  --mu-column-stripped-background: #00000082 !important;
  --mu-dark-sidebar-color: #001122 !important;
  --mu-default-mode-border-color: #0088ff !important;
  --mu-default-mode-border-value: 1 !important;
  --mu-default-mode-border-width: 1px !important;
  --mu-divider-color: #007fff10 !important;
  --mu-divider-color-hover: #007fff !important;
  --mu-divider-hover-width-value: 3 !important;
  --mu-divider-width-value: 1 !important;
  --mu-external-link: #00a9dd !important;
  --mu-external-link-hover: #00c3ff !important;
  --mu-fc-answer-border-color: #bf00ff !important;
  --mu-fc-bg-color: #007fff20 !important;
  --mu-fc-fg-color: #dadada !important;
  --mu-fc-height: 400px !important;
  --mu-fc-height-value: 400 !important;
  --mu-fc-width: 280px !important;
  --mu-fc-width-value: 280 !important;
  --mu-file-header-border-color: #007fff20 !important;
  --mu-file-header-border-value: 1 !important;
  --mu-file-header-border-width: 1px !important;
  --mu-file-icon-color: #0072d3 !important;
  --mu-file-line-width-value: 700 !important;
  --mu-folder-area-background: #007fff10 !important;
  --mu-folder-area-border: #007fff30 !important;
  --mu-folder-icon-closed-default: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>') !important;
  --mu-folder-icon-closed-op3: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M2 10h20"/></svg>') !important;
  --mu-folder-icon-closed-selected: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>') !important;
  --mu-folder-icon-closed-unfilled: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>') !important;
  --mu-folder-icon-color: #0048a3 !important;
  --mu-folder-icon-color-active: #00a3ff !important;
  --mu-folder-icon-opened-default: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>') !important;
  --mu-folder-icon-opened-op3: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>') !important;
  --mu-folder-icon-opened-selected: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>') !important;
  --mu-folder-icon-opened-unfilled: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>') !important;
  --mu-folder-text-color: #72a3ff !important;
  --mu-folder-zoom: 82% !important;
  --mu-font-headings: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --mu-font-mono: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace !important;
  --mu-font-ui: Inter, Helvetica, Arial, sans-serif !important;
  --mu-footnote-color: #f07f48 !important;
  --mu-gallery-callout-icon: '<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --><path d="m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z" fill="#00a3ffcf" stroke="none" stroke-width="0"/><path d="m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z" fill="currentColor" stroke="none" stroke-width="0"/></svg>' !important;
  --mu-global-font: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, monospace !important;
  --mu-global-font-letter-spacing: normal !important;
  --mu-global-font-size: 16px !important;
  --mu-global-font-size-value: 16 !important;
  --mu-global-font-stylistic-set: normal !important;
  --mu-gray-1: #a3a3a3 !important;
  --mu-green-1: #20f120 !important;
  --mu-green-2: #20a320 !important;
  --mu-h1: #00a3ff !important;
  --mu-h2: #00a3ff !important;
  --mu-h3: #00a3ff !important;
  --mu-h4: #00a3ff !important;
  --mu-h5: #00a3ff !important;
  --mu-h6: #00a3ff !important;
  --mu-header-title-drag: no-drag !important;
  --mu-hover-underline-color: #ff0000cf !important;
  --mu-hover-underline-offset: 2px !important;
  --mu-hover-underline-offset-value: 2 !important;
  --mu-hover-underline-style: solid !important;
  --mu-hover-underline-thickness: 2px !important;
  --mu-hover-underline-thickness-value: 2 !important;
  --mu-hr-color: #0072d3 !important;
  --mu-icon: #5382d3 !important;
  --mu-icon-active: #007fff !important;
  --mu-icon-focused: #00a3ff !important;
  --mu-icon-hover: #007fff !important;
  --mu-icon-statusbar-menu: #0072d3 !important;
  --mu-indent-color-level-1: #007fff7f !important;
  --mu-indent-color-level-2: #d372ff7f !important;
  --mu-indent-color-level-3: #ff7f007f !important;
  --mu-indent-color-level-4: #00a3487f !important;
  --mu-indent-color-level-5: #e500007f !important;
  --mu-indent-color-level-6: #8282007f !important;
  --mu-inline-code-border: #0072d3 !important;
  --mu-inline-title-font-size: 0.88em !important;
  --mu-inline-title-font-size-value: 0.88 !important;
  --mu-input-bg-color: #001836 !important;
  --mu-label-h1: #a35fbf !important;
  --mu-label-h2: #a35fbf !important;
  --mu-label-h3: #a35fbf !important;
  --mu-label-h4: #a35fbf !important;
  --mu-label-h5: #a35fbf !important;
  --mu-label-h6: #a35fbf !important;
  --mu-laser-area: 82px !important;
  --mu-laser-area-value: 82 !important;
  --mu-laser-color-bg: #00f1ff !important;
  --mu-laser-color-glow: #00a3ff !important;
  --mu-laser-intensity: 1.5 !important;
  --mu-laser-top: 50% !important;
  --mu-laser-top-value: 50 !important;
  --mu-line-highlight-background: transparent !important;
  --mu-line-highlight-border: transparent !important;
  --mu-link: #d372ff !important;
  --mu-link-hover: #db8fff !important;
  --mu-magenta-1: #f100f1 !important;
  --mu-max-letter-spacing: 2px !important;
  --mu-menu-separator-color: #0072d322 !important;
  --mu-mobile-side-margins: 16px !important;
  --mu-mobile-side-margins-value: 16 !important;
  --mu-modal-background: #000 !important;
  --mu-neon-mode-glow-intensity: 0.5em !important;
  --mu-neon-mode-glow-value: 0.5 !important;
  --mu-new-window-border-color: #007fff !important;
  --mu-new-window-border-value: 1 !important;
  --mu-new-window-border-width: 1px !important;
  --mu-notes-icon-zoom: 72% !important;
  --mu-num-table-bg-col: #00000082 !important;
  --mu-num-table-bg-row: #00000022 !important;
  --mu-o-ui-border: #0072d3 !important;
  --mu-properties-container-color: #007fff10 !important;
  --mu-property-color: #00a3ff !important;
  --mu-property-title-color: #00a3ff !important;
  --mu-purple-1: #d372ff !important;
  --mu-purple-2: #a273d8 !important;
  --mu-quote-icon: '<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --><path d="m185 89.2-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.26 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167zm206 0-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.25 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167z" fill="currentColor" stroke="currentColor"/></svg>' !important;
  --mu-rainbow-hue-1: 0 !important;
  --mu-rainbow-hue-10: 270 !important;
  --mu-rainbow-hue-2: 30 !important;
  --mu-rainbow-hue-3: 60 !important;
  --mu-rainbow-hue-4: 90 !important;
  --mu-rainbow-hue-5: 120 !important;
  --mu-rainbow-hue-6: 150 !important;
  --mu-rainbow-hue-7: 180 !important;
  --mu-rainbow-hue-8: 210 !important;
  --mu-rainbow-hue-9: 240 !important;
  --mu-rainbow-hue-start-value: 0 !important;
  --mu-reading-glow-border-size: 3px !important;
  --mu-reading-glow-border-size-value: 3 !important;
  --mu-reading-glow-color: #00a3ff !important;
  --mu-reading-glow-radius: 4px !important;
  --mu-reading-glow-radius-value: 1 !important;
  --mu-reading-indicator-color: #007fffa3 !important;
  --mu-reading-indicator-width: -0.3rem !important;
  --mu-reading-indicator-width-value-rem: 0.3 !important;
  --mu-scrollbar-thumb-bg: #84848422 !important;
  --mu-scrollbar-thumb-bg-hover: #84848433 !important;
  --mu-scrollbar-thumb-size: 2px !important;
  --mu-scrollbar-thumb-size-adjusted-value: 2 !important;
  --mu-scrollbar-thumb-size-value: 10 !important;
  --mu-scrollbar-track-bg: transparent !important;
  --mu-scrollbar-track-bg-hover: #00000021 !important;
  --mu-scrollbar-width: 12px !important;
  --mu-scrollbar-width-value: 12 !important;
  --mu-sidebar-bottom-vault-profile-bg-color: #001122 !important;
  --mu-sidebar-pane-numbers: #007fff !important;
  --mu-sidebar-top-buttons-container-bg-color: transparent !important;
  --mu-special-folder-color: #000 !important;
  --mu-stacked-mode-border-color: #0088ff !important;
  --mu-stacked-mode-border-value: 1 !important;
  --mu-stacked-mode-border-width: 1px !important;
  --mu-style-settings-indent-color-1: #007fff7f !important;
  --mu-style-settings-indent-color-2: #d372ff7f !important;
  --mu-style-settings-indent-color-3: #ff7f007f !important;
  --mu-suggestion-color: #00d3ff !important;
  --mu-suggestion-search-panel-bg-color: #001122 !important;
  --mu-table-color-1: #001122 !important;
  --mu-table-color-2: #002248 !important;
  --mu-table-inner-border-width: 0px !important;
  --mu-table-inner-border-width-value: 0 !important;
  --mu-table-outer-border-width: 2px !important;
  --mu-table-outer-border-width-value: 2 !important;
  --mu-table-row-hover: #0088ff33 !important;
  --mu-table-th-background: #004882 !important;
  --mu-table-th-foreground-edit: #f1f1f1 !important;
  --mu-table-th-foreground-main: #e1e1e1 !important;
  --mu-tag-border-color: #0072d3 !important;
  --mu-tags-hashtag-padding: 2px !important;
  --mu-tags-hashtag-padding-value: 2 !important;
  --mu-text-1: #f1f1f1 !important;
  --mu-text-highlight-fg: #dadada !important;
  --mu-text-selection: #0051f1a3 !important;
  --mu-text-title: hsl(278, 80%, 60%) !important;
  --mu-titlebar-background: #003388 !important;
  --mu-titlebar-button-fg: #5382d3 !important;
  --mu-titlebar-text: #f1f1f1 !important;
  --mu-transparency-blur-level: 8px !important;
  --mu-transparency-blur-level-value: 8 !important;
  --mu-transparency-menus-level: 0.5 !important;
  --mu-underline-text-color-rgb: 255, 40, 72 !important;
  --mu-vault-title: #a273d8 !important;
  --mu-warm-screen-mode: 0 !important;
  --muc-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16px' height='16px' viewBox='0 0 24 24' fill='%23ffff4848' stroke='%23ffbf00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/%3E%3C/svg%3E") !important;
  --muc-icon-active: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16px' height='16px' viewBox='0 0 24 24' fill='%23ffbf00' stroke='%23ffbf00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/%3E%3C/svg%3E") !important;
  --nav-collapse-icon-color: #0072d3 !important;
  --nav-collapse-icon-color-collapsed: #0072d3 !important;
  --nav-indentation-guide-color: #007fff7f !important;
  --nav-item-background-active: #007fff28 !important;
  --nav-item-background-hover: #007fff28 !important;
  --nav-item-background-selected: #0072d338 !important;
  --nav-item-color: #dadada !important;
  --nav-item-color-highlighted: hsl(249, 84%, 87.72%) !important;
  --nav-item-size: 14px !important;
  --nav-item-weight-active: 600 !important;
  --nav-item-white-space: nowrap !important;
  --pdf-background: #002248 !important;
  --pdf-page-background: #002248 !important;
  --pdf-shadow: 0 0 0 1px #007fff38 !important;
  --pdf-sidebar-background: #002248 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #007fff38 !important;
  --pill-border-color: #007fff38 !important;
  --pill-border-color-hover: #007fff48 !important;
  --pill-color-remove-hover: hsl(251, 81.6%, 78.2%) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #002248 !important;
  --prompt-border-color: #007fff30 !important;
  --prompt-border-width: 1px !important;
  --raised-background: color-mix(in srgb, #007fff18 65%, transparent) linear-gradient(#007fff18, color-mix(in srgb, #007fff18 65%, transparent)) !important;
  --ribbon-background: #003388 !important;
  --ribbon-background-collapsed: #003388 !important;
  --search-icon-color: #007fff !important;
  --search-result-background: #002248 !important;
  --secondary: hsl(251, 81.6%, 78.2%) !important;
  --setting-group-heading-color: #00a3ff !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #001122 !important;
  --setting-items-border-color: #007fff38 !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: #007fff48 !important;
  --slider-thumb-border-width: 2px !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #007fff38 !important;
  --slider-track-height: 5px !important;
  --status-bar-background: #001122 !important;
  --status-bar-border-color: #007fff10 !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #f1f1f1 !important;
  --suggestion-background: #002248 !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --tab-background-active: #002248 !important;
  --tab-container-background: #001122 !important;
  --tab-divider-color: #003364 !important;
  --tab-font-size: 14px !important;
  --tab-font-weight: 500 !important;
  --tab-outline-color: #007fff10 !important;
  --tab-outline-width: 0 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #001122 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #001122, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(254, 80%, 68%) !important;
  --tab-text-color: #b3b3b3 !important;
  --tab-text-color-focused-active: #dadada !important;
  --tab-text-color-focused-highlighted: #dadada !important;
  --table-add-button-border-color: #007fff38 !important;
  --table-background: #001122 !important;
  --table-column-first-border-width: 0 !important;
  --table-column-last-border-width: 0 !important;
  --table-drag-handle-background-active: hsl(254, 80%, 68%) !important;
  --table-header-background: #001122 !important;
  --table-header-border-width: 0 !important;
  --table-header-color: #f1f1f1 !important;
  --table-header-weight: 700 !important;
  --table-row-alt-background: #002248 !important;
  --table-row-alt-background-hover: #001122 !important;
  --table-row-background-hover: #0088ff33 !important;
  --table-row-last-border-width: 0 !important;
  --table-selection: hsla(254, 80%, 68%, 0.1) !important;
  --table-selection-blend-mode: normal !important;
  --table-selection-border-color: hsl(254, 80%, 68%) !important;
  --table-white-space: normal !important;
  --tag-background: hsla(254, 80%, 68%, 0.1) !important;
  --tag-background-hover: hsla(254, 80%, 68%, 0.2) !important;
  --tag-border-color: #0072d33f !important;
  --tag-border-color-hover: #00bfff !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl(251, 81.6%, 78.2%) !important;
  --tag-color-hover: hsl(249, 84%, 87.72%) !important;
  --tag-padding-x: 8px !important;
  --tag-padding-y: 4px !important;
  --tag-radius: 1em !important;
  --tag-radius-value: 1 !important;
  --tag-size: 0.933em !important;
  --tertiary: hsl(249, 84%, 87.72%) !important;
  --text-accent: hsl(251, 81.6%, 78.2%) !important;
  --text-accent-hover: hsl(249, 84%, 87.72%) !important;
  --text-highlight-bg: #ffff0088 !important;
  --text-selection: hsla(254, 80%, 68%, 0.33) !important;
  --textHighlight: #ffff0088 !important;
  --titlebar-background: #003388 !important;
  --titlebar-background-focused: #003388 !important;
  --titlebar-border-color: #007fff38 !important;
  --titlebar-text-color: #f1f1f1 !important;
  --titlebar-text-color-focused: #f1f1f1 !important;
  --titlebar-text-weight: 600 !important;
  --ui-display-vault-title: flex !important;
  --ui-distraction-free-toggle-button: flex !important;
  --ui-nav-buttons-container: flex !important;
  --ui-side-dock-actions: 1 !important;
  --ui-side-dock-settings: 1 !important;
  --ui-status-bar: 1 !important;
  --ui-titlebar-top-left-buttons: 1 !important;
  --ui-view-header-nav-buttons: flex !important;
  --vault-name-color: #a273d8 !important;
  --vault-name-font-size: 14px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-font-size: 14px !important;
  --workspace-background-translucent: rgba(0, 0, 0, 0.8) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 17, 34);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(0, 34, 72);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 17, 34);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 127, 255, 0.063);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 17, 34);
  border-left-color: rgba(0, 127, 255, 0.063);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(0, 34, 72);
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 255, 0, 0.533);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(0, 169, 221);
  outline: rgb(0, 169, 221) none 0px;
  text-decoration: underline rgb(0, 169, 221);
  text-decoration-color: rgb(0, 169, 221);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(211, 114, 255);
  outline: rgb(211, 114, 255) none 0px;
  text-decoration: underline rgb(211, 114, 255);
  text-decoration-color: rgb(211, 114, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(211, 114, 255);
  outline: rgb(211, 114, 255) none 0px;
  text-decoration: underline rgba(139, 108, 239, 0.3);
  text-decoration-color: rgba(139, 108, 239, 0.3);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgba(207, 207, 207, 0.125);
}`,
    tables: `html[saved-theme="dark"] body table {
  border-bottom-color: rgb(0, 72, 130);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 72, 130);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(0, 72, 130);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(0, 72, 130);
  border-top-style: solid;
  border-top-width: 2px;
  width: 662px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(0, 17, 34);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(0, 34, 72);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(0, 72, 130);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(0, 72, 130);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

html[saved-theme="dark"] body th {
  background-color: rgb(0, 72, 130);
  border-bottom-color: rgb(225, 225, 225);
  border-bottom-width: 0px;
  border-left-color: rgb(225, 225, 225);
  border-left-width: 0px;
  border-right-color: rgb(0, 72, 130);
  border-right-width: 0px;
  border-top-color: rgb(225, 225, 225);
  border-top-width: 0px;
  color: rgb(225, 225, 225);
  font-weight: 700;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(0, 72, 130);
  border-left-color: rgb(0, 72, 130);
  border-right-color: rgb(0, 72, 130);
  border-top-color: rgb(0, 72, 130);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(0, 17, 34);
  border-bottom-color: rgb(0, 72, 130);
  border-left-color: rgb(0, 72, 130);
  border-right-color: rgb(0, 72, 130);
  border-top-color: rgb(0, 72, 130);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(241, 241, 241);
  border-left-color: rgb(241, 241, 241);
  border-right-color: rgb(241, 241, 241);
  border-top-color: rgb(241, 241, 241);
  color: rgb(241, 241, 241);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 17, 34);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 17, 34);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(72, 241, 72);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(72, 241, 72);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(72, 241, 72);
  border-left-color: rgb(72, 241, 72);
  border-right-color: rgb(72, 241, 72);
  border-top-color: rgb(72, 241, 72);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(0, 17, 34);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(0, 17, 34);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(139, 108, 239);
}

html[saved-theme="dark"] body .transclude-inner {
  border-left-color: rgb(139, 108, 239);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 207, 72);
  text-decoration: underline rgb(0, 207, 72);
  text-decoration-color: rgb(0, 207, 72);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 114, 211);
  border-left-color: rgb(0, 114, 211);
  border-right-color: rgb(0, 114, 211);
  border-top-color: rgb(0, 114, 211);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(0, 24, 54);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
  color: rgb(0, 207, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(0, 34, 72);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
  box-shadow: rgba(0, 127, 255, 0.19) 0px 0px 0px 1px, rgba(0, 127, 255, 0.19) 0px 0px 0px 1px, rgba(0, 127, 255, 0.19) 0px 0px 0px 1px, rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(0, 127, 255, 0.157);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(0, 24, 54);
  border-bottom-color: rgb(0, 17, 34);
  border-left-color: rgb(0, 207, 255);
  border-right-color: rgb(0, 207, 255);
  border-top-color: rgb(0, 207, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(0, 127, 255, 0.157);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(0, 127, 255, 0.157);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(139, 108, 239, 0.1);
  border-bottom-color: rgba(0, 114, 211, 0.247);
  border-bottom-left-radius: 14.928px;
  border-bottom-right-radius: 14.928px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 114, 211, 0.247);
  border-left-width: 1px;
  border-right-color: rgba(0, 114, 211, 0.247);
  border-right-width: 1px;
  border-top-color: rgba(0, 114, 211, 0.247);
  border-top-left-radius: 14.928px;
  border-top-right-radius: 14.928px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(171, 154, 245);
}

html[saved-theme="dark"] body h1 {
  color: rgb(0, 163, 255);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(0, 163, 255);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(175, 71, 235);
  font-family: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace;
}

html[saved-theme="dark"] body h3 {
  color: rgb(0, 163, 255);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(0, 163, 255);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(0, 163, 255);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(0, 163, 255);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 127, 255, 0.063);
  border-left-color: rgba(0, 127, 255, 0.063);
  border-right-color: rgba(0, 127, 255, 0.063);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(0, 34, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 72);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(0, 34, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 72);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(0, 34, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 72);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 34, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 72);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 34, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 72);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(0, 34, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 72);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(83, 130, 211);
  border-left-color: rgb(83, 130, 211);
  border-right-color: rgb(83, 130, 211);
  border-top-color: rgb(83, 130, 211);
  color: rgb(83, 130, 211);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(0, 17, 34);
  border-bottom-color: rgba(0, 127, 255, 0.063);
  border-left-color: rgba(0, 127, 255, 0.063);
  border-right-color: rgba(0, 127, 255, 0.063);
  border-top-color: rgba(0, 127, 255, 0.063);
  color: rgb(241, 241, 241);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(241, 241, 241);
  text-decoration: rgb(241, 241, 241);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  background-color: rgba(0, 127, 255, 0.063);
  border-bottom-color: rgba(0, 127, 255, 0.19);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 127, 255, 0.19);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 127, 255, 0.19);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 127, 255, 0.19);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(218, 218, 218);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  background-color: rgba(0, 127, 255, 0.063);
  border-bottom-color: rgba(0, 127, 255, 0.19);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 127, 255, 0.19);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 127, 255, 0.19);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 127, 255, 0.19);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(83, 130, 211);
  border-left-color: rgb(83, 130, 211);
  border-right-color: rgb(83, 130, 211);
  border-top-color: rgb(83, 130, 211);
  color: rgb(83, 130, 211);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(83, 130, 211);
  stroke: rgb(83, 130, 211);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  background-color: rgba(0, 127, 255, 0.063);
  border-bottom-color: rgba(0, 127, 255, 0.19);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 127, 255, 0.19);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 127, 255, 0.19);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 127, 255, 0.19);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(114, 163, 255);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(163, 163, 163, 0.282);
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  background-color: rgba(0, 127, 255, 0.063);
  border-bottom-color: rgba(0, 127, 255, 0.125);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 127, 255, 0.125);
  border-top-width: 1px;
  font-family: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace;
  padding-left: 4px;
  padding-right: 4px;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(0, 17, 34);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(0, 163, 255);
  border-left-color: rgb(0, 163, 255);
  border-right-color: rgb(0, 163, 255);
  border-top-color: rgb(0, 163, 255);
  color: rgb(0, 163, 255);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(0, 17, 34);
  border-bottom-color: rgb(241, 241, 241);
  border-left-color: rgb(241, 241, 241);
  border-right-color: rgb(241, 241, 241);
  border-top-color: rgb(241, 241, 241);
  color: rgb(241, 241, 241);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 254 !important;
  --accent-l: 68% !important;
  --accent-s: 80% !important;
  --background-modifier-active-hover: #007fff28 !important;
  --background-modifier-border: #007fff38 !important;
  --background-modifier-border-focus: #007fff !important;
  --background-modifier-border-hover: #007fff48 !important;
  --background-modifier-form-field: #007fff21 !important;
  --background-modifier-form-field-hover: #007fff21 !important;
  --background-modifier-hover: #007fff28 !important;
  --background-primary: #e8efff !important;
  --background-primary-alt: #e1e1e1 !important;
  --background-secondary: #d1dfff !important;
  --background-secondary-alt: #ffffff !important;
  --bases-cards-background: #e8efff !important;
  --bases-cards-cover-background: #e1e1e1 !important;
  --bases-cards-shadow: 0 0 0 1px #007fff38 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #007fff48 !important;
  --bases-embed-border-color: #007fff38 !important;
  --bases-group-heading-property-color: #353535 !important;
  --bases-table-border-color: #007fff38 !important;
  --bases-table-cell-background-active: #e8efff !important;
  --bases-table-cell-background-disabled: transparent !important;
  --bases-table-cell-background-selected: hsla(254, 80%, 68%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #007fff !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(253, 80.8%, 73.1%) !important;
  --bases-table-group-background: #e8efff !important;
  --bases-table-header-background: #e8efff !important;
  --bases-table-header-background-hover: #007fff28 !important;
  --bases-table-header-color: #000 !important;
  --bases-table-header-weight: 600 !important;
  --bases-table-row-background-hover: #0088ff33 !important;
  --bases-table-summary-background: #e8efff !important;
  --bases-table-summary-background-hover: #007fff28 !important;
  --blockquote-background-color: #cfcfcf88 !important;
  --blockquote-border-color: #007fff !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-color: #000 !important;
  --blur-background: color-mix(in srgb, #e8efff 65%, transparent) linear-gradient(#e8efff, color-mix(in srgb, #e8efff 65%, transparent)) !important;
  --bold-weight: 700 !important;
  --callout-blend-mode: normal;
  --callout-title-weight: 600;
  --canvas-background: #e8efff !important;
  --cards-th-display: none !important;
  --caret-color: #000 !important;
  --checkbox-border-color: #0072d3 !important;
  --checkbox-border-color-hover: #00bfff !important;
  --checkbox-color: #00bfff !important;
  --checkbox-color-hover: #00cfff !important;
  --checkbox-marker-color: #e8efff !important;
  --checklist-done-color: #00cf48 !important;
  --checklist-done-decoration: underline !important;
  --code-background: #f1f1ff !important;
  --code-border-color: #007fff38 !important;
  --code-bracket-background: #007fff28 !important;
  --code-comment: #a3a3a3 !important;
  --code-function: #00a300 !important;
  --code-important: #ff7f00 !important;
  --code-keyword: #c300f1 !important;
  --code-normal: #000 !important;
  --code-operator: #c300f1 !important;
  --code-property: #0048a3 !important;
  --code-punctuation: #c300f1 !important;
  --code-string: #0000f1 !important;
  --code-tag: #c300f1 !important;
  --code-value: #f18f00 !important;
  --collapse-icon-color: #0072d3 !important;
  --collapse-icon-color-collapsed: #0072d3 !important;
  --color-accent: hsl(254, 80%, 68%) !important;
  --color-accent-1: hsl(253, 80.8%, 73.1%) !important;
  --color-accent-2: hsl(251, 81.6%, 78.2%) !important;
  --color-accent-hsl: 254, 80%, 68% !important;
  --dark: #000 !important;
  --darkgray: #000 !important;
  --divider-color: #007fff10 !important;
  --divider-color-hover: #007fff !important;
  --divider-width: 1px !important;
  --divider-width-hover: 3px !important;
  --dropdown-background: #007fff18 !important;
  --dropdown-background-hover: #007fff38 !important;
  --embed-block-shadow-hover: 0 0 0 1px #007fff38, inset 0 0 0 1px #007fff38 !important;
  --embed-border-left: 2px solid #0072d348 !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(253, 80.8%, 73.1%) !important;
  --file-header-background: #e8efff !important;
  --file-header-background-focused: #e8efff !important;
  --file-header-border: 1px solid #007fff20 !important;
  --file-header-font-size: 16px !important;
  --file-header-font-weight: 600 !important;
  --file-header-justify: left !important;
  --file-line-width: 700px !important;
  --file-margins: 32px !important;
  --flair-background: #007fff18 !important;
  --flair-color: #000 !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --footnote-divider-color: transparent !important;
  --footnote-id-color: #353535 !important;
  --footnote-input-background-active: #e8efff !important;
  --graph-line: #007fff !important;
  --graph-node: #d372ff !important;
  --graph-node-attachment: #007fff !important;
  --graph-node-focused: #0048a3 !important;
  --graph-node-tag: #20cf20 !important;
  --graph-node-unresolved: #a3a3a3 !important;
  --graph-text: #000 !important;
  --gray: #353535 !important;
  --h1-color: #0072d3 !important;
  --h1-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --h1-size: 2em !important;
  --h1-weight: 800 !important;
  --h2-color: #0072d3 !important;
  --h2-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --h2-size: 1.5em !important;
  --h2-weight: 800 !important;
  --h3-color: #0072d3 !important;
  --h3-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --h3-size: 1.17em !important;
  --h3-weight: 800 !important;
  --h4-color: #0072d3 !important;
  --h4-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --h4-size: 1em !important;
  --h4-weight: 800 !important;
  --h5-color: #0072d3 !important;
  --h5-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --h5-size: .83em !important;
  --h5-weight: 800 !important;
  --h6-color: #0072d3 !important;
  --h6-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --h6-size: .67em !important;
  --h6-weight: 800 !important;
  --heading-spacing: 2.5rem !important;
  --hidden-text-underline-background-color: #ffff0088 !important;
  --hidden-text-underline-foreground-color: #000 !important;
  --highlight: #ffff0088 !important;
  --highlight-mix-blend-mode: normal !important;
  --hr-color: #0072d3 !important;
  --hr-thickness: 1px !important;
  --icon-color: #5382d3 !important;
  --icon-color-active: #007fff !important;
  --icon-color-focused: #00a3ff !important;
  --icon-color-hover: #007fff !important;
  --icon-opacity: 0.95 !important;
  --indentation-guide-color: #007fff7f !important;
  --indentation-guide-color-active: #bf00ff !important;
  --inline-title-color: #0072d3 !important;
  --inline-title-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --inline-title-margin-bottom: .5em !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 800 !important;
  --interactive-accent: hsl(253, 80.8%, 73.1%) !important;
  --interactive-accent-hover: hsl(251, 81.6%, 78.2%) !important;
  --interactive-accent-hsl: 254, 80%, 68% !important;
  --interactive-hover: #007fff38 !important;
  --interactive-normal: #007fff18 !important;
  --light: #e8efff !important;
  --lightgray: #d1dfff !important;
  --link-color: #a200ff !important;
  --link-color-hover: #c300ff !important;
  --link-external-color: #0033ff !important;
  --link-external-color-hover: #00a3ff !important;
  --link-unresolved-color: #a200ff !important;
  --link-unresolved-decoration-color: hsla(254, 80%, 68%, 0.3) !important;
  --list-indent: 2em !important;
  --list-marker-color: #007fff !important;
  --list-marker-color-collapsed: #f100f1 !important;
  --list-marker-color-hover: #007fff !important;
  --menu-background: #d1dfff !important;
  --menu-border-color: #007fff48 !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-gap: 2px !important;
  --metadata-input-background-active: #e8efff !important;
  --metadata-input-font-size: 0.933em !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #000 !important;
  --metadata-label-background-active: #e8efff !important;
  --metadata-label-font-size: 0.933em !important;
  --metadata-label-text-color: #0072d3 !important;
  --metadata-label-text-color-hover: #00bfff !important;
  --metadata-padding: 8px 2px !important;
  --metadata-property-background-active: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #007fff !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #007fff48 !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: #e8efff !important;
  --modal-border-color: #007fff30 !important;
  --modal-border-width: 1px !important;
  --modal-height: 92vh !important;
  --mu-amulet-hue: 224 !important;
  --mu-amulet-sat: 50% !important;
  --mu-amulet-sat-value: 50 !important;
  --mu-background-color-1: #e8efff !important;
  --mu-background-color-2: #d1dfff !important;
  --mu-bg-image-overlay: 0.0 !important;
  --mu-bg-search-results: #001836 !important;
  --mu-blockquote-background: #cfcfcf88 !important;
  --mu-blockquote-border: #007fff !important;
  --mu-bookmarked-note-icon-bg: #007fff30 !important;
  --mu-border-width: 1px !important;
  --mu-border-width-value: 1 !important;
  --mu-box-callout-icon: '<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --><path d="m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z" fill="currentColor" fill-rule="evenodd"/></svg>' !important;
  --mu-callout-blue: 0, 136, 255 !important;
  --mu-callout-book: 0, 163, 255 !important;
  --mu-callout-comment: 0, 188, 188 !important;
  --mu-callout-con: 228, 48, 48 !important;
  --mu-callout-green: 0, 180, 88 !important;
  --mu-callout-link: 48, 142, 255 !important;
  --mu-callout-magic: 207, 88, 255 !important;
  --mu-callout-mic: 0, 188, 82 !important;
  --mu-callout-orange: 255, 97, 0 !important;
  --mu-callout-paperclip: 255, 163, 33 !important;
  --mu-callout-pink: 255, 18, 241 !important;
  --mu-callout-pro: 0, 197, 88 !important;
  --mu-callout-purple: 201, 0, 255 !important;
  --mu-callout-red: 255, 48, 48 !important;
  --mu-callout-target: 255, 72, 72 !important;
  --mu-callout-video: 237, 48, 48 !important;
  --mu-callout-yellow: 237, 188, 0 !important;
  --mu-cards-border: #e8efff !important;
  --mu-caret-color: #cf00ff !important;
  --mu-code-attribute: #e50000 !important;
  --mu-code-block-border: #0072d3 !important;
  --mu-collapse-icon-size: 1.2 !important;
  --mu-color-lig: #007fff !important;
  --mu-column-stripped-background: #00000011 !important;
  --mu-dark-sidebar-color: #001122 !important;
  --mu-default-mode-border-color: #0088ff !important;
  --mu-default-mode-border-value: 1 !important;
  --mu-default-mode-border-width: 1px !important;
  --mu-divider-color: #007fff10 !important;
  --mu-divider-color-hover: #007fff !important;
  --mu-divider-hover-width-value: 3 !important;
  --mu-divider-width-value: 1 !important;
  --mu-external-link: #0033ff !important;
  --mu-external-link-hover: #00a3ff !important;
  --mu-fc-answer-border-color: #bf00ff !important;
  --mu-fc-bg-color: #007fff20 !important;
  --mu-fc-fg-color: #000 !important;
  --mu-fc-height: 400px !important;
  --mu-fc-height-value: 400 !important;
  --mu-fc-width: 280px !important;
  --mu-fc-width-value: 280 !important;
  --mu-file-header-border-color: #007fff20 !important;
  --mu-file-header-border-value: 1 !important;
  --mu-file-header-border-width: 1px !important;
  --mu-file-icon-color: #0072d3 !important;
  --mu-file-line-width-value: 700 !important;
  --mu-folder-area-background: #007fff10 !important;
  --mu-folder-area-border: #007fff30 !important;
  --mu-folder-icon-closed-default: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>') !important;
  --mu-folder-icon-closed-op3: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M2 10h20"/></svg>') !important;
  --mu-folder-icon-closed-selected: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>') !important;
  --mu-folder-icon-closed-unfilled: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>') !important;
  --mu-folder-icon-color: #0048a3 !important;
  --mu-folder-icon-color-active: #00a3ff !important;
  --mu-folder-icon-opened-default: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>') !important;
  --mu-folder-icon-opened-op3: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>') !important;
  --mu-folder-icon-opened-selected: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>') !important;
  --mu-folder-icon-opened-unfilled: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>') !important;
  --mu-folder-text-color: #0048a3 !important;
  --mu-folder-zoom: 82% !important;
  --mu-font-headings: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
  --mu-font-mono: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace !important;
  --mu-font-ui: Inter, Helvetica, Arial, sans-serif !important;
  --mu-footnote-color: #f07f48 !important;
  --mu-gallery-callout-icon: '<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --><path d="m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z" fill="#00a3ffcf" stroke="none" stroke-width="0"/><path d="m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z" fill="currentColor" stroke="none" stroke-width="0"/></svg>' !important;
  --mu-global-font: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, monospace !important;
  --mu-global-font-letter-spacing: normal !important;
  --mu-global-font-size: 16px !important;
  --mu-global-font-size-value: 16 !important;
  --mu-global-font-stylistic-set: normal !important;
  --mu-gray-1: #a3a3a3 !important;
  --mu-green-1: #20cf20 !important;
  --mu-green-2: #20a320 !important;
  --mu-h1: #0072d3 !important;
  --mu-h2: #0072d3 !important;
  --mu-h3: #0072d3 !important;
  --mu-h4: #0072d3 !important;
  --mu-h5: #0072d3 !important;
  --mu-h6: #0072d3 !important;
  --mu-header-title-drag: no-drag !important;
  --mu-hover-underline-color: #ff0000cf !important;
  --mu-hover-underline-offset: 2px !important;
  --mu-hover-underline-offset-value: 2 !important;
  --mu-hover-underline-style: solid !important;
  --mu-hover-underline-thickness: 2px !important;
  --mu-hover-underline-thickness-value: 2 !important;
  --mu-hr-color: #0072d3 !important;
  --mu-icon: #5382d3 !important;
  --mu-icon-active: #007fff !important;
  --mu-icon-focused: #00a3ff !important;
  --mu-icon-hover: #007fff !important;
  --mu-icon-statusbar-menu: #0072d3 !important;
  --mu-indent-color-level-1: #007fff7f !important;
  --mu-indent-color-level-2: #d372ff7f !important;
  --mu-indent-color-level-3: #ff7f007f !important;
  --mu-indent-color-level-4: #00a3487f !important;
  --mu-indent-color-level-5: #e500007f !important;
  --mu-indent-color-level-6: #8282007f !important;
  --mu-inline-code-border: #0072d3 !important;
  --mu-inline-title-font-size: 0.88em !important;
  --mu-inline-title-font-size-value: 0.88 !important;
  --mu-input-bg-color: #fff !important;
  --mu-label-h1: #bf72d8 !important;
  --mu-label-h2: #bf72d8 !important;
  --mu-label-h3: #bf72d8 !important;
  --mu-label-h4: #bf72d8 !important;
  --mu-label-h5: #bf72d8 !important;
  --mu-label-h6: #bf72d8 !important;
  --mu-laser-area: 82px !important;
  --mu-laser-area-value: 82 !important;
  --mu-laser-color-bg: #00a3ff !important;
  --mu-laser-color-glow: #00a3ff88 !important;
  --mu-laser-intensity: 1.5 !important;
  --mu-laser-top: 50% !important;
  --mu-laser-top-value: 50 !important;
  --mu-line-highlight-background: transparent !important;
  --mu-line-highlight-border: transparent !important;
  --mu-link: #a200ff !important;
  --mu-link-hover: #c300ff !important;
  --mu-magenta-1: #f100f1 !important;
  --mu-max-letter-spacing: 2px !important;
  --mu-menu-separator-color: #0072d322 !important;
  --mu-mobile-side-margins: 16px !important;
  --mu-mobile-side-margins-value: 16 !important;
  --mu-modal-background: #cfcfcf !important;
  --mu-neon-mode-glow-intensity: 0.5em !important;
  --mu-neon-mode-glow-value: 0.5 !important;
  --mu-new-window-border-color: #007fff !important;
  --mu-new-window-border-value: 1 !important;
  --mu-new-window-border-width: 1px !important;
  --mu-notes-icon-zoom: 72% !important;
  --mu-num-table-bg-col: #00000082 !important;
  --mu-num-table-bg-row: #00000022 !important;
  --mu-o-ui-border: #0072d3 !important;
  --mu-properties-container-color: #007fff10 !important;
  --mu-property-color: #0072d3 !important;
  --mu-property-title-color: #0072d3 !important;
  --mu-purple-1: #d372ff !important;
  --mu-purple-2: #b10aff !important;
  --mu-quote-icon: '<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --><path d="m185 89.2-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.26 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167zm206 0-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.25 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167z" fill="currentColor" stroke="currentColor"/></svg>' !important;
  --mu-rainbow-hue-1: 0 !important;
  --mu-rainbow-hue-10: 270 !important;
  --mu-rainbow-hue-2: 30 !important;
  --mu-rainbow-hue-3: 60 !important;
  --mu-rainbow-hue-4: 90 !important;
  --mu-rainbow-hue-5: 120 !important;
  --mu-rainbow-hue-6: 150 !important;
  --mu-rainbow-hue-7: 180 !important;
  --mu-rainbow-hue-8: 210 !important;
  --mu-rainbow-hue-9: 240 !important;
  --mu-rainbow-hue-start-value: 0 !important;
  --mu-reading-glow-border-size: 3px !important;
  --mu-reading-glow-border-size-value: 3 !important;
  --mu-reading-glow-color: #00a3ff !important;
  --mu-reading-glow-radius: 4px !important;
  --mu-reading-glow-radius-value: 1 !important;
  --mu-reading-indicator-color: #007fffa3 !important;
  --mu-reading-indicator-width: -0.3rem !important;
  --mu-reading-indicator-width-value-rem: 0.3 !important;
  --mu-scrollbar-thumb-bg: #48484822 !important;
  --mu-scrollbar-thumb-bg-hover: #48484833 !important;
  --mu-scrollbar-thumb-size: 2px !important;
  --mu-scrollbar-thumb-size-adjusted-value: 2 !important;
  --mu-scrollbar-thumb-size-value: 10 !important;
  --mu-scrollbar-track-bg: transparent !important;
  --mu-scrollbar-track-bg-hover: #82828221 !important;
  --mu-scrollbar-width: 12px !important;
  --mu-scrollbar-width-value: 12 !important;
  --mu-sidebar-bottom-vault-profile-bg-color: #d1dfff !important;
  --mu-sidebar-pane-numbers: #007fff !important;
  --mu-sidebar-top-buttons-container-bg-color: transparent !important;
  --mu-special-folder-color: #000 !important;
  --mu-stacked-mode-border-color: #0088ff !important;
  --mu-stacked-mode-border-value: 1 !important;
  --mu-stacked-mode-border-width: 1px !important;
  --mu-style-settings-indent-color-1: #007fff7f !important;
  --mu-style-settings-indent-color-2: #d372ff7f !important;
  --mu-style-settings-indent-color-3: #ff7f007f !important;
  --mu-suggestion-color: #0072d3 !important;
  --mu-suggestion-search-panel-bg-color: #d1dfff !important;
  --mu-table-color-1: #d1dfff !important;
  --mu-table-color-2: #e8efff !important;
  --mu-table-inner-border-width: 0px !important;
  --mu-table-inner-border-width-value: 0 !important;
  --mu-table-outer-border-width: 2px !important;
  --mu-table-outer-border-width-value: 2 !important;
  --mu-table-row-hover: #0088ff33 !important;
  --mu-table-th-background: #004882 !important;
  --mu-table-th-foreground-edit: #000 !important;
  --mu-table-th-foreground-main: #e1e1e1 !important;
  --mu-tag-border-color: #0072d3 !important;
  --mu-tags-hashtag-padding: 2px !important;
  --mu-tags-hashtag-padding-value: 2 !important;
  --mu-text-1: #000 !important;
  --mu-text-highlight-fg: #000 !important;
  --mu-text-selection: #0051f136 !important;
  --mu-text-title: #a300cf !important;
  --mu-titlebar-background: #003388 !important;
  --mu-titlebar-button-fg: #5382d3 !important;
  --mu-titlebar-text: #f1f1f1 !important;
  --mu-transparency-blur-level: 8px !important;
  --mu-transparency-blur-level-value: 8 !important;
  --mu-transparency-menus-level: 0.5 !important;
  --mu-underline-text-color-rgb: 255, 40, 72 !important;
  --mu-vault-title: #a300cf !important;
  --mu-warm-screen-mode: 0 !important;
  --muc-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16px' height='16px' viewBox='0 0 24 24' fill='%23ffff4848' stroke='%23ffbf00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/%3E%3C/svg%3E") !important;
  --muc-icon-active: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16px' height='16px' viewBox='0 0 24 24' fill='%23ffbf00' stroke='%23ffbf00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/%3E%3C/svg%3E") !important;
  --nav-collapse-icon-color: #0072d3 !important;
  --nav-collapse-icon-color-collapsed: #0072d3 !important;
  --nav-heading-color: #000 !important;
  --nav-heading-color-collapsed-hover: #353535 !important;
  --nav-heading-color-hover: #000 !important;
  --nav-indentation-guide-color: #007fff7f !important;
  --nav-item-background-active: #007fff28 !important;
  --nav-item-background-hover: #007fff28 !important;
  --nav-item-background-selected: #0072d338 !important;
  --nav-item-color: #000 !important;
  --nav-item-color-active: #000 !important;
  --nav-item-color-highlighted: hsl(251, 81.6%, 78.2%) !important;
  --nav-item-color-hover: #000 !important;
  --nav-item-color-selected: #000 !important;
  --nav-item-size: 14px !important;
  --nav-item-weight-active: 600 !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color-active: #353535 !important;
  --nav-tag-color-hover: #353535 !important;
  --pdf-background: #e8efff !important;
  --pdf-page-background: #e8efff !important;
  --pdf-sidebar-background: #e8efff !important;
  --pill-border-color: #007fff38 !important;
  --pill-border-color-hover: #007fff48 !important;
  --pill-color: #353535 !important;
  --pill-color-hover: #000 !important;
  --pill-color-remove-hover: hsl(254, 80%, 68%) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #e8efff !important;
  --prompt-border-color: #007fff30 !important;
  --prompt-border-width: 1px !important;
  --raised-background: color-mix(in srgb, #e8efff 65%, transparent) linear-gradient(#e8efff, color-mix(in srgb, #e8efff 65%, transparent)) !important;
  --ribbon-background: #003388 !important;
  --ribbon-background-collapsed: #003388 !important;
  --search-clear-button-color: #353535 !important;
  --search-icon-color: #007fff !important;
  --search-result-background: #e8efff !important;
  --secondary: hsl(254, 80%, 68%) !important;
  --setting-group-heading-color: #0048f1 !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #d1dfff !important;
  --setting-items-border-color: #007fff38 !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: #007fff48 !important;
  --slider-thumb-border-width: 2px !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #007fff38 !important;
  --slider-track-height: 5px !important;
  --status-bar-background: #d1dfff !important;
  --status-bar-border-color: #007fff10 !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #000 !important;
  --suggestion-background: #e8efff !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --tab-background-active: #e8efff !important;
  --tab-container-background: #d1dfff !important;
  --tab-divider-color: #003364 !important;
  --tab-font-size: 14px !important;
  --tab-font-weight: 500 !important;
  --tab-outline-color: #007fff10 !important;
  --tab-outline-width: 0 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #d1dfff !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #d1dfff, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(254, 80%, 68%) !important;
  --tab-text-color: #353535 !important;
  --tab-text-color-active: #353535 !important;
  --tab-text-color-focused: #353535 !important;
  --tab-text-color-focused-active: #000 !important;
  --tab-text-color-focused-active-current: #000 !important;
  --tab-text-color-focused-highlighted: #000 !important;
  --table-add-button-border-color: #007fff38 !important;
  --table-background: #d1dfff !important;
  --table-column-first-border-width: 0 !important;
  --table-column-last-border-width: 0 !important;
  --table-drag-handle-background-active: hsl(253, 80.8%, 73.1%) !important;
  --table-header-background: #d1dfff !important;
  --table-header-border-width: 0 !important;
  --table-header-color: #000 !important;
  --table-header-weight: 700 !important;
  --table-row-alt-background: #e8efff !important;
  --table-row-alt-background-hover: #d1dfff !important;
  --table-row-background-hover: #0088ff33 !important;
  --table-row-last-border-width: 0 !important;
  --table-selection: hsla(254, 80%, 68%, 0.1) !important;
  --table-selection-blend-mode: normal !important;
  --table-selection-border-color: hsl(253, 80.8%, 73.1%) !important;
  --table-white-space: normal !important;
  --tag-background: hsla(254, 80%, 68%, 0.1) !important;
  --tag-background-hover: hsla(254, 80%, 68%, 0.2) !important;
  --tag-border-color: #0072d33f !important;
  --tag-border-color-hover: #00bfff !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl(254, 80%, 68%) !important;
  --tag-color-hover: hsl(251, 81.6%, 78.2%) !important;
  --tag-padding-x: 8px !important;
  --tag-padding-y: 4px !important;
  --tag-radius: 1em !important;
  --tag-radius-value: 1 !important;
  --tag-size: 0.933em !important;
  --tertiary: hsl(251, 81.6%, 78.2%) !important;
  --text-accent: hsl(254, 80%, 68%) !important;
  --text-accent-hover: hsl(251, 81.6%, 78.2%) !important;
  --text-highlight-bg: #ffff0088 !important;
  --text-muted: #353535 !important;
  --text-normal: #000 !important;
  --text-selection: hsla(254, 80%, 68%, 0.2) !important;
  --textHighlight: #ffff0088 !important;
  --titlebar-background: #003388 !important;
  --titlebar-background-focused: #003388 !important;
  --titlebar-border-color: #007fff38 !important;
  --titlebar-text-color: #f1f1f1 !important;
  --titlebar-text-color-focused: #f1f1f1 !important;
  --titlebar-text-weight: 600 !important;
  --ui-display-vault-title: flex !important;
  --ui-distraction-free-toggle-button: flex !important;
  --ui-nav-buttons-container: flex !important;
  --ui-side-dock-actions: 1 !important;
  --ui-side-dock-settings: 1 !important;
  --ui-status-bar: 1 !important;
  --ui-titlebar-top-left-buttons: 1 !important;
  --ui-view-header-nav-buttons: flex !important;
  --vault-name-color: #a300cf !important;
  --vault-name-font-size: 14px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #000 !important;
  --vault-profile-color-hover: #000 !important;
  --vault-profile-font-size: 14px !important;
  --workspace-background-translucent: rgba(255, 255, 255, 0.8) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(209, 223, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(209, 223, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(209, 223, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 127, 255, 0.063);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(209, 223, 255);
  border-left-color: rgba(0, 127, 255, 0.063);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(232, 239, 255);
  color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 255, 0, 0.533);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(53, 53, 53);
  outline: rgb(53, 53, 53) none 0px;
  text-decoration: rgb(53, 53, 53);
  text-decoration-color: rgb(53, 53, 53);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 51, 255);
  outline: rgb(0, 51, 255) none 0px;
  text-decoration: underline rgb(0, 51, 255);
  text-decoration-color: rgb(0, 51, 255);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(162, 0, 255);
  outline: rgb(162, 0, 255) none 0px;
  text-decoration: underline rgb(162, 0, 255);
  text-decoration-color: rgb(162, 0, 255);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(162, 0, 255);
  outline: rgb(162, 0, 255) none 0px;
  text-decoration: underline rgba(139, 108, 239, 0.3);
  text-decoration-color: rgba(139, 108, 239, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body dt {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgba(207, 207, 207, 0.533);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(0, 72, 130);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 72, 130);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(0, 72, 130);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(0, 72, 130);
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(0, 0, 0);
  width: 662px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(209, 223, 255);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(232, 239, 255);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(0, 72, 130);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 72, 130);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body th {
  background-color: rgb(0, 72, 130);
  border-bottom-color: rgb(225, 225, 225);
  border-bottom-width: 0px;
  border-left-color: rgb(225, 225, 225);
  border-left-width: 0px;
  border-right-color: rgb(0, 72, 130);
  border-right-width: 0px;
  border-top-color: rgb(225, 225, 225);
  border-top-width: 0px;
  color: rgb(225, 225, 225);
  font-weight: 700;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(0, 72, 130);
  border-left-color: rgb(0, 72, 130);
  border-right-color: rgb(0, 72, 130);
  border-top-color: rgb(0, 72, 130);
}

html[saved-theme="light"] body tr {
  background-color: rgb(209, 223, 255);
  border-bottom-color: rgb(0, 72, 130);
  border-left-color: rgb(0, 72, 130);
  border-right-color: rgb(0, 72, 130);
  border-top-color: rgb(0, 72, 130);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(241, 241, 255);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(241, 241, 255);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(0, 163, 0);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(0, 163, 0);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(0, 163, 0);
  border-left-color: rgb(0, 163, 0);
  border-right-color: rgb(0, 163, 0);
  border-top-color: rgb(0, 163, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(241, 241, 255);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(241, 241, 255);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(53, 53, 53);
  border-left-color: rgb(53, 53, 53);
  border-right-color: rgb(53, 53, 53);
  border-top-color: rgb(53, 53, 53);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(155, 131, 242);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(155, 131, 242);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 207, 72);
  text-decoration: underline rgb(0, 207, 72);
  text-decoration-color: rgb(0, 207, 72);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 114, 211);
  border-left-color: rgb(0, 114, 211);
  border-right-color: rgb(0, 114, 211);
  border-top-color: rgb(0, 114, 211);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
  color: rgb(207, 0, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(232, 239, 255);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  box-shadow: rgba(0, 127, 255, 0.19) 0px 0px 0px 1px, rgba(0, 127, 255, 0.19) 0px 0px 0px 1px, rgba(0, 127, 255, 0.19) 0px 0px 0px 1px, rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.1) 0px 15px 30px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 127, 255, 0.157);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(209, 223, 255);
  border-left-color: rgb(207, 0, 255);
  border-right-color: rgb(207, 0, 255);
  border-top-color: rgb(207, 0, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 127, 255, 0.157);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 127, 255, 0.157);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(139, 108, 239, 0.1);
  border-bottom-color: rgba(0, 114, 211, 0.247);
  border-bottom-left-radius: 14.928px;
  border-bottom-right-radius: 14.928px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 114, 211, 0.247);
  border-left-width: 1px;
  border-right-color: rgba(0, 114, 211, 0.247);
  border-right-width: 1px;
  border-top-color: rgba(0, 114, 211, 0.247);
  border-top-left-radius: 14.928px;
  border-top-right-radius: 14.928px;
  border-top-width: 1px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(139, 108, 239);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 114, 211);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 114, 211);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(163, 0, 207);
  font-family: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace;
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 114, 211);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 114, 211);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(0, 114, 211);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 114, 211);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 127, 255, 0.063);
  border-left-color: rgba(0, 127, 255, 0.063);
  border-right-color: rgba(0, 127, 255, 0.063);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(232, 239, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 239, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(232, 239, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 239, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(232, 239, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 239, 255);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(232, 239, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 239, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(232, 239, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 239, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(232, 239, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 239, 255);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(83, 130, 211);
  border-left-color: rgb(83, 130, 211);
  border-right-color: rgb(83, 130, 211);
  border-top-color: rgb(83, 130, 211);
  color: rgb(83, 130, 211);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(209, 223, 255);
  border-bottom-color: rgba(0, 127, 255, 0.063);
  border-left-color: rgba(0, 127, 255, 0.063);
  border-right-color: rgba(0, 127, 255, 0.063);
  border-top-color: rgba(0, 127, 255, 0.063);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  background-color: rgba(0, 127, 255, 0.063);
  border-bottom-color: rgba(0, 127, 255, 0.19);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 127, 255, 0.19);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 127, 255, 0.19);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 127, 255, 0.19);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  background-color: rgba(0, 127, 255, 0.063);
  border-bottom-color: rgba(0, 127, 255, 0.19);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 127, 255, 0.19);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 127, 255, 0.19);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 127, 255, 0.19);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(83, 130, 211);
  border-left-color: rgb(83, 130, 211);
  border-right-color: rgb(83, 130, 211);
  border-top-color: rgb(83, 130, 211);
  color: rgb(83, 130, 211);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(83, 130, 211);
  stroke: rgb(83, 130, 211);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  background-color: rgba(0, 127, 255, 0.063);
  border-bottom-color: rgba(0, 127, 255, 0.19);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 127, 255, 0.19);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 127, 255, 0.19);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 127, 255, 0.19);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(0, 72, 163);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(163, 163, 163, 0.282);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .metadata {
  background-color: rgba(0, 127, 255, 0.063);
  border-bottom-color: rgba(0, 127, 255, 0.125);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 127, 255, 0.125);
  border-top-width: 1px;
  color: rgb(53, 53, 53);
  font-family: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace;
  padding-left: 4px;
  padding-right: 4px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(53, 53, 53);
  border-left-color: rgb(53, 53, 53);
  border-right-color: rgb(53, 53, 53);
  border-top-color: rgb(53, 53, 53);
  color: rgb(53, 53, 53);
  font-family: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(209, 223, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(0, 114, 211);
  border-left-color: rgb(0, 114, 211);
  border-right-color: rgb(0, 114, 211);
  border-top-color: rgb(0, 114, 211);
  color: rgb(0, 114, 211);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(241, 241, 255);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sub {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body summary {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sup {
  color: rgb(0, 0, 0);
}`,
  },
  extras: `/* Warm screen overlay */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 225, 170, var(--mu-warm-screen-mode));
  mix-blend-mode: multiply;
  z-index: 10000;
  pointer-events: none;
}
`,
};
