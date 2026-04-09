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
  --mu-folder-icon-closed-default: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-closed-op3: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3Cpath d='M2 10h20'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-closed-selected: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-closed-unfilled: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-color: #0048a3 !important;
  --mu-folder-icon-color-active: #00a3ff !important;
  --mu-folder-icon-opened-default: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-opened-op3: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-opened-selected: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-opened-unfilled: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E") !important;
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

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(0, 72, 130);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(0, 34, 72);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(0, 72, 130);
  border-color: rgb(225, 225, 225) rgb(0, 72, 130) rgb(225, 225, 225) rgb(225, 225, 225);
  color: rgb(225, 225, 225);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(0, 17, 34);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgba(0, 127, 255, 0.063);
  border-color: rgba(0, 127, 255, 0.125) rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(139, 108, 239, 0.1);
  border-radius: 14.928px;
  color: rgb(171, 154, 245);
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
}

html[saved-theme="dark"] body h1.article-title {
  font-size: 16px;
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 114, 211);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(0, 169, 221);
  outline: rgb(0, 169, 221) none 0px;
  text-decoration-color: rgb(0, 169, 221);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(211, 114, 255);
  outline: rgb(211, 114, 255) none 0px;
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
    images: `html[saved-theme="dark"] body img {
  border-bottom-color: rgb(0, 163, 255);
  border-left-color: rgb(0, 163, 255);
  border-right-color: rgb(0, 163, 255);
  border-top-color: rgb(0, 163, 255);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(139, 108, 239);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 114, 211);
  border-left-color: rgb(0, 114, 211);
  border-right-color: rgb(0, 114, 211);
  border-top-color: rgb(0, 114, 211);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(241, 53, 53);
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m96.9 209h318c0.264 0 0.476 0.154 0.476 0.345v92.4c0 0.191-0.212 0.345-0.476 0.345h-318c-0.264 0-0.476-0.154-0.476-0.345v-92.4c0-0.191 0.212-0.345 0.476-0.345z' fill='%23a30000' stroke-dashoffset='211' stroke-linecap='round' stroke-width='20'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m256 21c-130 0-235 105-235 235 0 130 105 235 235 235s235-105 235-235-105-235-235-235zm-34.7 58.9h69.3c5.14 0 9.27 25.5 9.27 57.2v128c0 31.7-4.14 57.2-9.27 57.2h-69.3c-5.14 0-9.27-25.5-9.27-57.2v-128c0-31.7 4.14-57.2 9.27-57.2zm3.77 272h59.5c3.46 0 6.45 1.26 8.97 3.78s3.78 5.51 3.78 8.97v47.7c0 3.46-1.26 6.45-3.78 8.97-2.52 2.52-5.51 3.78-8.97 3.78h-59.5c-3.46 0-6.45-1.26-8.97-3.78-2.52-2.52-3.78-5.51-3.78-8.97v-47.7c0-3.46 1.26-6.45 3.78-8.97 2.52-2.52 5.51-3.78 8.97-3.78z' fill='%23f13535' stroke-dashoffset='211' stroke-linecap='round' stroke-linejoin='round' stroke-width='9.98'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m256 21a235 235 0 0 0-235 235 235 235 0 0 0 235 235 235 235 0 0 0 235-235 235 235 0 0 0-235-235zm0.273 69.1c23.3 0 44.7 4.25 64.2 12.7 19.5 8.18 34.9 19.8 46.3 34.9 11.3 14.8 17 31.3 17 49.6 0 12.3-2.36 23.3-7.08 33.1-4.72 9.44-10.4 17.5-17 24.1-6.3 6.3-15 14-26 23.1-11.3 9.13-19.8 16.7-25.5 22.7s-9.6 12.9-11.8 20.8c-2.2 8.5-6.45 12.7-12.7 12.7h-57.6c-3.46 0-6.45-1.26-8.97-3.78-2.52-2.52-3.78-5.51-3.78-8.97 0-11 2.36-20.9 7.08-29.7 5.04-8.81 10.9-16.4 17.5-22.7 6.61-6.61 15.4-14.3 26.4-23.1 11.6-9.13 20.3-16.7 26-22.7 5.67-6.3 8.5-13.1 8.5-20.3 0-9.13-3.62-16.2-10.9-21.2-6.92-5.35-17.5-8.03-31.6-8.03-10.7 0-19.2 1.42-25.5 4.25-5.98 2.52-10.4 5.51-13.2 8.97s-5.67 7.87-8.5 13.2c-1.89 4.72-3.93 8.34-6.14 10.9-2.2 2.2-5.51 3.3-9.92 3.3h-57.6c-2.83 0-5.35-0.943-7.55-2.83-1.89-1.89-2.83-4.41-2.83-7.55 0.315-15.4 5.82-31.2 16.5-47.2 11-16.1 26.3-29.4 45.8-40.1 19.8-10.7 42.8-16.1 68.9-16.1zm-31.2 262h59.5c3.46 0 6.45 1.26 8.97 3.78s3.78 5.51 3.78 8.97v47.7c0 3.46-1.26 6.45-3.78 8.97-2.52 2.52-5.51 3.78-8.97 3.78h-59.5c-3.46 0-6.45-1.26-8.97-3.78-2.52-2.52-3.78-5.51-3.78-8.97v-47.7c0-3.46 1.26-6.45 3.78-8.97s5.51-3.78 8.97-3.78z' fill='%23ffa300' stroke-dashoffset='211' stroke-linecap='round' stroke-linejoin='round' stroke-width='9.98'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m185 89.2-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.26 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167zm206 0-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.25 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167z' color='%23000000' fill='%23828282' stroke-width='1px'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m411 473c-8.2 6.01-141-79-151-78.8-10.3 0.205-139 90.4-147 84.7-8.45-5.67 34.3-154 30.9-163-3.38-9.39-132-99.7-129-109 2.98-9.51 162-15.9 170-21.9 8.2-6.01 57.4-152 67.7-152 10.3-0.205 65.7 144 74.2 149 8.45 5.67 167 5.74 171 15.1s-121 105-124 114c-2.98 9.51 46.1 156 37.9 162z' color='%23000000' fill='%23ffc200' /%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m251 12.6c-28.8-5.53-39.7 19.7-38.7 43.6-10.9 21.3-37.4 32-60.5 31.5-21.3-6.79-42.7-36.9-63.3-8.33-23.5 14.9-32.4 45.2-6.55 62.6 11 22.3-1.02 49.4-16.4 66.6-15.7 15.8-53.5 0.874-52.4 33.5-2.96 21.6-2.45 59.8 29.2 55 28.9 0.315 42.7 32.2 45.5 56.8 3.43 24.1-37.6 40.1-13.9 63.3 13.1 17.4 40.7 44.6 59.7 19.1 20.5-20.5 52.9-7.78 72.4 7.64 20.2 13.5 1.27 52 32.1 54.2 20.5 2.15 59.2 6.38 58.6-23.9-2.82-30.1 28.6-46.3 54-50 25.2-7.34 39.3 35.5 63.4 15.8 17.4-13 48.3-40.3 23-60.8-21.8-20.6-8.97-54.3 7.26-74 14.9-18.9 55.2-1.47 54.3-35.4 2.96-21.6 2.45-59.8-29.2-55-28.9-0.313-42.7-32.2-45.5-56.8-3.43-24.1 37.6-40.1 13.9-63.3-13.1-17.4-40.7-44.6-59.7-19.1-20.5 20.5-52.9 7.78-72.4-7.64-20.2-13.5-1.27-51.9-32-54.2-7.51-1.32-15.2-1.38-22.8-1.28zm4.84 165c46.1-1.39 85.9 44 78.2 89.6-4.76 46.2-55.8 79.5-100 65.3-45.9-11.5-71.3-68.4-49.3-110 12.7-26.9 41.4-44.8 71.1-44.6z' color='%23000000' fill='%2300b3b3'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cg stroke-dashoffset='211' stroke-linecap='round'%3E%3Cpath d='m68.1 110h376c1.33 19.4 0.19 39.8 0.571 59.6-0.395 7.2 0.781 15-0.571 21.9h-376c-1.33-19.4-0.19-39.8-0.571-59.6 0.393-7.18-0.778-15.1 0.571-21.9z' fill='%230082ff' stroke-width='28.2' /%3E%3Cpath d='m68.1 191h376c1.33 19.4 0.19 39.8 0.571 59.6v216c-19.4 1.33-39.8 0.19-59.6 0.571h-317c-1.33-19.4-0.19-39.8-0.571-59.6v-216z' fill='%2368c0e1' stroke-width='51.9' /%3E%3Cpath d='m147 44.2c11.1 0.4 23-0.788 33.7 0.571v55.9c-10.8 1.33-22.5 0.19-33.7 0.571-1.33-18.4-0.19-37.7-0.571-56.5z' fill='%230082ff' stroke-width='29.7' /%3E%3Cpath d='m340 44.2c11.1 0.4 23-0.788 33.7 0.571v55.9c-10.8 1.33-22.5 0.19-33.7 0.571-1.33-18.4-0.19-37.7-0.571-56.5z' fill='%230082ff' stroke-width='29.7' /%3E%3Cpath d='m116 212c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6zm97.7 0c-1.43 3.85-0.119 9.01-0.572 13.3 0.381 19.8-0.761 40.2 0.572 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.761-40.2-0.572-59.6zm95.7 0c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6zm-193 82.8c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6zm97.7 0c-1.43 3.85-0.119 9.01-0.572 13.3 0.381 19.8-0.761 40.2 0.572 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.761-40.2-0.572-59.6zm95.7 0c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6z' fill='%23b9e2f1' stroke-width='28.2' /%3E%3C/g%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cg stroke-dashoffset='211' stroke-linecap='round'%3E%3Cpath d='m68.1 110h376c1.33 19.4 0.19 39.8 0.571 59.6-0.395 7.2 0.781 15-0.571 21.9h-376c-1.33-19.4-0.19-39.8-0.571-59.6 0.393-7.18-0.778-15.1 0.571-21.9z' color='%23000000' fill='%230082ff' stroke-width='28.2' /%3E%3Cpath d='m68.1 191h376c1.33 19.4 0.19 39.8 0.571 59.6v216c-19.4 1.33-39.8 0.19-59.6 0.571h-317c-1.33-19.4-0.19-39.8-0.571-59.6v-216z' color='%23000000' fill='%2368c0e1' stroke-width='51.9' /%3E%3Cpath d='m340 44.2c11.1 0.4 23-0.788 33.7 0.571v55.9c-10.8 1.33-22.5 0.19-33.7 0.571-1.33-18.4-0.19-37.7-0.571-56.5zm-193 0c11.1 0.4 23-0.788 33.7 0.571v55.9c-10.8 1.33-22.5 0.19-33.7 0.571-1.33-18.4-0.19-37.7-0.571-56.5z' fill='%230082ff' /%3E%3Cpath d='m116 212c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6zm97.7 0c-1.43 3.85-0.119 9.01-0.572 13.3 0.381 19.8-0.761 40.2 0.572 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.761-40.2-0.572-59.6zm95.7 0c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6zm-193 82.8c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6zm97.7 0c-1.43 3.85-0.119 9.01-0.572 13.3 0.381 19.8-0.761 40.2 0.572 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.761-40.2-0.572-59.6zm95.7 0c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6z' color='%23000000' fill='%23b9e2f1' stroke-width='28.2' /%3E%3C/g%3E%3Cpath d='m14.3 254 289-1.57 1.48-108 191 175-197 152v-104h-285z' fill='%23f14848'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m42.8 417h426l-201-322z' fill='%2300cf48'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m42.8 94.9h426l-201 322z' fill='%23f14848'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m94.9 469v-426l322 201z' fill='%230082ff'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300bf53' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M8 12h8'/%3E%3Cpath d='M12 8v8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300bf48' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 12h-4l-3 9L9 3l-3 9H2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m56.1 12.8h400c0.317 0 0.571 0.255 0.571 0.571v485c0 0.317-0.255 0.571-0.571 0.571l-206-127-194 127c-0.265 0.173-0.571-0.255-0.571-0.571v-485c0-0.317 0.255-0.571 0.571-0.571z' fill='%23c300ff' stroke-dashoffset='211' stroke-linecap='round' stroke-width='28.2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m125 364c0-154 260 2.7 260-162m72.5-68.9c0 33-26.7 59.7-59.7 59.7s-59.7-26.7-59.7-59.7 26.7-59.7 59.7-59.7 59.7 26.7 59.7 59.7zm-332-91c-33 0-59.7 26.7-59.7 59.7s26.7 59.7 59.7 59.7 59.7-26.7 59.7-59.7-26.7-59.7-59.7-59.7zm0 120v202zm0 204c-33 0-59.7 26.7-59.7 59.7s26.7 59.7 59.7 59.7 59.7-26.7 59.7-59.7-26.7-59.7-59.7-59.7z' fill='none' stroke='%23ff5f00' stroke-linecap='round' stroke-linejoin='round' stroke-width='40'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m15.4 68.6h121l-4.57 176-117 1.62zm277-26.2c-44.7 8.36-88.6 21.4-134 23.9v180c27.2 12.2 51 24.9 60.9 51 0 0 17.1 42.7 35.5 58 20.2 20.3 40.9 36.3 46.9 64.9 8.96 19.5 15.7 58.1 50.8 48.3 27.9-18.1 12.5-39 10.3-68.2-6.27-27.4-33-36.3-37.6-64.2 4.08-8.57 14.3-18.3 25.4-16.6 38.9-0.709 70.2 2.15 108-6.85 22.6-11.9 34.4-39.4 18.9-60.9-3.48-7.19-9.57-14.5-2-21.3 12.5-14.8 11.9-35-2.32-48.6-5.7-6.22-10-12.6-4.7-20.5 8.19-16.3-0.869-32.8-11.6-45.6-7.18-5.9-5.41-13.6-3.23-21.3 8.28-25.8-16.1-38.6-37.5-42.5-40.4-7.91-82.3-15.2-124-9.79z' fill='%23f14848'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff5f00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='8' cy='21' r='1'/%3E%3Ccircle cx='19' cy='21' r='1'/%3E%3Cpath d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f10000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='22 17 13.5 8.5 8.5 13.5 2 7'/%3E%3Cpolyline points='16 17 22 17 22 11'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m397 146v-54m0 197v-54m59.7 190a59.7 59.7 0 0 1-59.7 59.7 59.7 59.7 0 0 1-59.7-59.7 59.7 59.7 0 0 1 59.7-59.7 59.7 59.7 0 0 1 59.7 59.7zm-332-383a59.7 59.7 0 0 0-59.7 59.7 59.7 59.7 0 0 0 59.7 59.7 59.7 59.7 0 0 0 59.7-59.7 59.7 59.7 0 0 0-59.7-59.7zm0 120v202zm0 204a59.7 59.7 0 0 0-59.7 59.7 59.7 59.7 0 0 0 59.7 59.7 59.7 59.7 0 0 0 59.7-59.7 59.7 59.7 0 0 0-59.7-59.7z' fill='none' stroke='%23a3a3a3' stroke-linecap='round' stroke-width='33.8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Crect x='10.7' y='81.8' width='486' height='338' rx='22' ry='19.6' fill='%23cfcfcf'/%3E%3Cpath d='m43.9 396 128-177m284 177-128-177m-285-112 216 174 206-174' fill='none' stroke='%23484848' stroke-width='20.6'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a3ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath fill='none' d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'/%3E%3Ccircle fill='none' cx='12' cy='12' r='3'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m103 58.3c-11.2 10.1 1.66 23.2 7.94 32.2 24.3 33.6 48.1 67.6 72.7 101 8.87 11.6 21.5 3.91 30.4-2.66 10.3-7.37 22.8-12.4 31.5-21.4 4.28-14.5-10.2-24.8-16.7-36.2-22.5-31-44.4-62.5-67.2-93.3-8.87-11.6-21.5-3.91-30.4 2.66-9.42 5.92-18.8 11.8-28.3 17.7zm-15.5 30.7c-33.2 79-46.6 163-8.42 238 42.3 68.3 112 140 189 147 32.9 4 66.1 5.21 99.3 5.55-27-37.6-54-75.2-81-113-37.6 18.7-81.9-0.613-109-28.8-23-24.1-49.3-54.3-43.5-90.2 1.26-20.8 23.3-36.1 32.8-47.7-26.5-37-53.1-74-79.6-111zm218 252c-11.2 10.1 1.66 23.2 7.94 32.3 24.3 33.6 48.1 67.6 72.7 101 8.87 11.6 21.5 3.91 30.4-2.66 10.3-7.37 22.8-12.4 31.5-21.4 4.28-14.5-10.2-24.8-16.7-36.2-22.5-31-44.4-62.5-67.2-93.3-8.87-11.6-21.5-3.91-30.4 2.66-9.42 5.92-18.8 11.8-28.3 17.7z' fill='%2300cf48'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m177 81.6 73.5 125a240 49.8 0 0 0-157 13l-30-56.5h-46.5l34 67.2a240 49.8 0 0 0-36.1 26.1 240 49.8 0 0 0 36 26.1l-34 64 46.5 3.33 28.8-56.9a240 49.8 0 0 0 157 13.2l-73.2 118 101 6.23 76.1-129a240 49.8 0 0 0 142-45.4 240 49.8 0 0 0-138-45.1l-79.9-129z' fill='%23979797'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cg stroke-dashoffset='211' stroke-linecap='square' stroke-linejoin='round'%3E%3Cpath d='m37.1 257h116v221h-116z' fill='%2300a3ff' stroke-width='64.5' style='paint-order:fill markers stroke'/%3E%3Cpath d='m198 173h116v304h-116z' fill='%23ff8200' stroke-width='75.7' style='paint-order:fill markers stroke'/%3E%3Cpath d='m361 41.3h116v436h-116z' fill='%2300cf48' stroke-width='90.7' style='paint-order:fill markers stroke'/%3E%3C/g%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m147 239c-74 8e-5 -133 27-134 65-0.3 14-2 25-2 34-0.8 15 2 22 19 22h235c17 0 19-7 19-22 0.6-9-1-20-2-34-0.9-38-60-65-134-65-0.2 8e-5 -0.4 6e-3 -0.5 6e-3 -0.2-4e-4 -0.4-6e-3 -0.5-6e-3zm67-83a67 68 0 0 1-67 68 67 68 0 0 1-67-68 67 68 0 0 1 67-68 67 68 0 0 1 67 68zm167 239c-63 1e-5 -114 23-115 56-0.3 12-2 22-1 29-0.7 13 2 19 16 19h202c14 0 17-6 16-19 0.5-7-1-17-1-29-0.8-33-52-56-115-56-0.2 6e-5 -0.3 5e-3 -0.5 5e-3 -0.2-3e-4 -0.3-5e-3 -0.5-5e-3zm58-71a58 59 0 0 1-58 59 58 59 0 0 1-58-59 58 59 0 0 1 58-59 58 59 0 0 1 58 59zm-58-182c-63 1e-5 -114 23-115 56-0.3 12-2 22-1 29-0.7 13 2 19 16 19h202c14 0 17-6 16-19 0.5-7-1-17-1-29-0.8-33-52-56-115-56-0.2 6e-5 -0.3 5e-3 -0.5 5e-3 -0.2-3e-4 -0.3-5e-3 -0.5-5e-3zm58-71a58 59 0 0 1-58 59 58 59 0 0 1-58-59 58 59 0 0 1 58-59 58 59 0 0 1 58 59z' fill='%230072d3'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m258 57-248 195 70 0.3v203h135v-153h80v153h134v-201l73 0.3-105-85' fill='%2300a3ff' fill-rule='evenodd' stroke-dashoffset='211' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230072d3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='18.5' cy='17.5' r='3.5'/%3E%3Ccircle cx='5.5' cy='17.5' r='3.5'/%3E%3Ccircle cx='15' cy='5' r='1'/%3E%3Cpath d='M12 17.5V14l-3-3 4-3 2 3h2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m256 21a235 235 0 0 0-235 235 235 235 0 0 0 235 235 235 235 0 0 0 235-235 235 235 0 0 0-235-235zm0.293 120c7.44 0 13.3 1.96 17.6 5.87 4.31 3.72 6.46 8.81 6.46 15.3 0 6.46-2.15 11.6-6.46 15.6-4.31 3.72-10.2 5.58-17.6 5.58-7.44 0-13.3-1.86-17.6-5.58-4.31-3.92-6.46-9.1-6.46-15.6 0-6.46 2.15-11.6 6.46-15.3 4.31-3.92 10.2-5.87 17.6-5.87zm-65.2 69.3h86v128h49.6v33.2h-142v-33.2h55.2v-95.1h-49.3v-33.2z' fill='%2300a3f1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m173 331c-6.86-46.4-39-83.5-55.8-126-5.82-25.3-4.61-52-1.14-77.6 14.5-52.5 60.9-96.8 117-105 52.5-9.38 111 6.13 146 47.4 20.1 23.5 35.9 52.5 34.3 83.9 0.467 24.9 2.6 51.7-12.5 73.4-22.9 39.4-51.3 81-48.6 128-3.91 2.97-13.6 0.334-19.7 1.23h-156c-1.02-8.36-2.04-16.7-3.05-25.1z' fill='%23ffc300' stroke-width='4.85'/%3E%3Cpath d='m143 170c2.18-35.2 20.5-68.7 45.9-93.4 19.5-14.5 42.6-27.1 67.5-29.2 20.9 15.9-17 31.5-31.9 36-32.1 14.7-53.3 46.8-56.2 80.9 5.59 17.4-26 38.4-25.1 11.4l-0.0926-2.67z' fill='%23ffff00' fill-opacity='.492' stroke-width='6.57'/%3E%3Cpath d='m241 497c-16.7-3.43-56.3-21.9-40.9-40.6 33.9-4.44 68.5-1.85 103-2.15 15.4-3.65 38.6 6.63 19.6 21.5-15.5 18.6-39.6 22.8-62.7 23.5-6.3-0.234-12.6-1.05-18.8-2.26z' fill='%23ffc300' stroke-width='5.18'/%3E%3Cpath d='m173 413c61.1 0.239 122-0.479 183 0.36 13 7.12 11.4 37.2-6.7 35.2-59.6-0.239-119 0.479-179-0.36-11.5-6.19-11.7-31.7 2.08-35.2zm0-44.2c61.1 0.239 122-0.479 183 0.36 13 7.12 11.4 37.2-6.7 35.2-59.6-0.239-119 0.479-179-0.36-11.5-6.19-11.7-31.7 2.08-35.2z' fill='%23ffc300' stroke-dashoffset='211' stroke-linecap='round' stroke-linejoin='round' stroke-width='7.65'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffd700' stroke='%2348484882' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z'/%3E%3Ccircle cx='16.5' cy='7.5' r='.5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m252 15.3c-104 2e-6 -188 83-188 185 0 102 188 297 188 297s188-195 188-297c0-102-84.4-185-188-185zm0 123a64 64 0 0 1 64 64 64 64 0 0 1-64 64 64 64 0 0 1-64-64 64 64 0 0 1 64-64z' fill='%23f14848' stroke-linecap='round' stroke-width='2.8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m33 64h446v311h-446z' fill='%23f1f1f1' fill-rule='evenodd' stroke='%23828282' stroke-dashoffset='211' stroke-linecap='round' stroke-linejoin='round' stroke-width='40' /%3E%3Cpath d='m321 325c-99 7e-5 -178 35-180 86-0.4 19-3 33-2 45-1 20 3 30 25 30h315c22 0 26-9 25-30 0.8-11-2-26-2-45-1-51-81-86-180-86-0.2 1e-4 -0.5 8e-3 -0.7 8e-3 -0.2-5e-4 -0.5-8e-3 -0.7-8e-3zm90-109a90 90 0 0 1-90 90 90 90 0 0 1-90-90 90 90 0 0 1 90-90 90 90 0 0 1 90 90z' fill='%230072d3' fill-rule='evenodd'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m330 119c-2.01 1.32-32.1-20.3-34.6-20.4-2.43-0.0752-33.9 19.6-35.9 18.2-1.92-1.44 10.1-35.7 9.4-38-0.676-2.25-29.8-25-29-27.3 0.825-2.2 38.4-1.81 40.4-3.12s15.5-35.1 17.9-35c2.43 0.0753 13.6 34.6 15.6 36.1 1.92 1.44 39.4 3.36 40.1 5.61 0.676 2.25-29.9 23.2-30.8 25.4-0.825 2.2 8.86 37.2 6.85 38.5zm-230 207c-2.01 1.32-32.1-20.3-34.6-20.4-2.43-0.0752-33.9 19.6-35.9 18.2-1.92-1.44 10.1-35.7 9.4-38-0.676-2.25-29.8-25-29-27.3 0.825-2.2 38.4-1.81 40.4-3.12 2.01-1.32 15.5-35.1 17.9-35 2.43 0.0752 13.6 34.6 15.6 36.1 1.92 1.44 39.4 3.36 40.1 5.61 0.676 2.25-29.9 23.2-30.8 25.4-0.825 2.2 8.86 37.2 6.85 38.5zm317 136c-3.03 2.03-48.4-31.3-52-31.4-3.66-0.116-51.1 30.3-54 28.1-2.89-2.22 15.2-55.2 14.1-58.7-1.02-3.48-44.9-38.7-43.7-42.1 1.24-3.4 57.7-2.79 60.8-4.82 3.03-2.03 23.3-54.2 27-54.1 3.66 0.116 20.5 53.5 23.4 55.7 2.89 2.22 59.3 5.2 60.3 8.67 1.02 3.48-45.1 35.8-46.3 39.2-1.24 3.4 13.3 57.4 10.3 59.5zm60.6-202c-2.01 1.32-32.1-20.3-34.6-20.4-2.43-0.0752-33.9 19.6-35.9 18.2-1.92-1.44 10.1-35.7 9.4-38-0.676-2.25-29.8-25-29-27.3 0.825-2.2 38.4-1.81 40.4-3.12 2.01-1.32 15.5-35.1 17.9-35 2.43 0.0752 13.6 34.6 15.6 36.1 1.92 1.44 39.4 3.36 40.1 5.61 0.676 2.25-29.9 23.2-30.8 25.4-0.825 2.2 8.86 37.2 6.85 38.5zm-323-107c-2.01 1.32-32.1-20.3-34.6-20.4-2.43-0.0752-33.9 19.6-35.9 18.2-1.92-1.44 10.1-35.7 9.4-38-0.676-2.25-29.8-25-29-27.3 0.825-2.2 38.4-1.81 40.4-3.12 2.01-1.32 15.5-35.1 17.9-35 2.43 0.0752 13.6 34.6 15.6 36.1 1.92 1.44 39.4 3.36 40.1 5.61 0.676 2.25-29.9 23.2-30.8 25.4-0.825 2.2 8.86 37.2 6.85 38.5z' color='%23000000' fill='%23ffc200' stroke-dashoffset='211' stroke-linecap='square' stroke-linejoin='round' stroke-width='24.4' /%3E%3Cg stroke-width='62.4'%3E%3Cpath d='m152 367 219-222' fill='%23000000' stroke='%23000000'/%3E%3Cpath d='m372 145 91.7-93.2' fill='none' stroke='%23cfcfcf'/%3E%3Cpath d='m60.8 460 91.7-93.2' fill='none' stroke='%23cfcfcf'/%3E%3C/g%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m330 310s-199-12.1-205-92.5m332 96c0 33-26.7 59.7-59.7 59.7s-59.7-26.7-59.7-59.7 26.7-59.7 59.7-59.7 59.7 26.7 59.7 59.7zm-332-271c-33 0-59.7 26.7-59.7 59.7s26.7 59.7 59.7 59.7 59.7-26.7 59.7-59.7-26.7-59.7-59.7-59.7zm0 120v202zm0 204c-33 0-59.7 26.7-59.7 59.7s26.7 59.7 59.7 59.7 59.7-26.7 59.7-59.7-26.7-59.7-59.7-59.7z' fill='none' stroke='%23d228ff' stroke-width='40'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cg transform='matrix(.808 .76 -.732 .838 237 -150)'%3E%3Crect x='227' y='340' width='58.5' height='151' rx='26' ry='31.8' fill='%23979797'/%3E%3Cpath d='m181 43.1c-18.8 0-34 18-34 40.4v16.8c0 21.6 14.1 39.1 32.1 40.3-2.31 11.3-3.93 28.7-4.21 48.2l-0.629 44.1h-33.4c-29 0-52.3 23-52.3 51.6v21.4c0 28.6 23.3 51.6 52.3 51.6h230c29 0 52.3-23 52.3-51.6v-21.4c0-28.6-23.3-51.6-52.3-51.6h-33.7l0.568-39.9c0.314-22.1-1.16-41.4-3.64-52.5 17.2-2.03 30.6-19.2 30.6-40.2v-16.8c0-22.4-15.2-40.4-34-40.4z' fill='%23f13535' stroke-dashoffset='211' stroke-linecap='round' stroke-linejoin='round' stroke-width='9.75'/%3E%3C/g%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a3a3a3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Ccircle cx='12' cy='12' r='1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23dd28ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m15.4 442h121l-4.57-176-117-1.62zm277 26.2c-44.7-8.36-88.6-21.4-134-23.9v-180c27.2-12.2 51-24.9 60.9-51 0 0 17.1-42.7 35.5-58 20.2-20.3 40.9-36.3 46.9-64.9 8.96-19.5 15.7-58.1 50.8-48.3 27.9 18.1 12.5 39 10.3 68.2-6.27 27.4-33 36.3-37.6 64.2 4.08 8.57 14.3 18.3 25.4 16.6 38.9 0.709 70.2-2.15 108 6.85 22.6 11.9 34.4 39.4 18.9 60.9-3.48 7.19-9.57 14.5-2 21.3 12.5 14.8 11.9 35-2.32 48.6-5.7 6.22-10 12.6-4.7 20.5 8.19 16.3-0.869 32.8-11.6 45.6-7.18 5.9-5.41 13.6-3.23 21.3 8.28 25.8-16.1 38.6-37.5 42.5-40.4 7.91-82.3 15.2-124 9.79z' fill='%2300cf48'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m266 93.3 53.6 53.5m77.1 200 0.1-254h-131l55.6-55.7m135 387c0 33-26.7 59.7-59.7 59.7s-59.7-26.7-59.7-59.7 26.7-59.7 59.7-59.7 59.7 26.7 59.7 59.7zm-332-383c-33 0-59.7 26.7-59.7 59.7s26.7 59.7 59.7 59.7 59.7-26.7 59.7-59.7-26.7-59.7-59.7-59.7zm0 120v202zm0 204c-33 0-59.7 26.7-59.7 59.7s26.7 59.7 59.7 59.7 59.7-26.7 59.7-59.7-26.7-59.7-59.7-59.7z' fill='none' stroke='%2300bf53' stroke-linecap='round' stroke-linejoin='round' stroke-width='40'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m185 89.2-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.26 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167zm206 0-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.25 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167z' color='%23000000' fill='%23828282' stroke-width='1px'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300a3ff88' stroke='%2300a3ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 3h12l4 6-10 13L2 9Z'/%3E%3Cpath d='M11 3 8 9l4 13 4-13-3-6'/%3E%3Cpath d='M2 9h20'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff4848' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M8 12h8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23cf00ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20'/%3E%3Cpolyline fill='%23cf00ff' points='10 2 10 10 13 7 16 10 16 2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m411 473c-8.2 6.01-141-79-151-78.8-10.3 0.205-139 90.4-147 84.7-8.45-5.67 34.3-154 30.9-163-3.38-9.39-132-99.7-129-109 2.98-9.51 162-15.9 170-21.9 8.2-6.01 57.4-152 67.7-152 10.3-0.205 65.7 144 74.2 149 8.45 5.67 167 5.74 171 15.1s-121 105-124 114c-2.98 9.51 46.1 156 37.9 162z' color='%23000000' fill='%23ffc200' /%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m256 21a235 235 0 0 0-235 235 235 235 0 0 0 235 235 235 235 0 0 0 235-235 235 235 0 0 0-235-235zm-17.5 54h31.6v44.3c13 1.04 26 2.67 39 4.88 13 2.21 26.1 5.07 39.2 8.58v49.5c-13-5.46-26-9.68-39-12.7-13-3.12-26.1-5-39.2-5.65v56l6.24 1.17c33 5.2 56.2 13.9 69.4 26.1 13.4 12.1 20.1 30 20.1 53.8 0 23.9-7.93 42.3-23.8 55.2-15.9 12.7-39.8 20-71.9 21.8v59.1h-31.6l-0.195-58.7c-16.2-0.65-32-2.47-47.2-5.46s-30-7.15-44.5-12.5v-51.1c14.9 7.67 30 13.6 45.2 17.7 15.3 4.03 30.9 6.3 46.6 6.82v-60.6l-6.43-1.17c-31.1-5.46-53.2-14-66.3-25.7-13-11.7-19.5-28.5-19.5-50.5-1e-5 -23.3 7.93-41.4 23.8-54.4 16-13.1 38.7-20.3 68.2-21.4l0.195-45zm0 89.5c-9.23 0.52-16.6 3.05-22.2 7.6-5.46 4.42-8.19 10.1-8.19 17 0 7.67 2.53 13.7 7.6 18.1 5.07 4.29 12.7 7.02 22.8 8.19v-50.9zm31.6 114v54.2c11.3-0.13 19.8-2.34 25.3-6.63 5.72-4.29 8.58-10.7 8.58-19.3 0-8.84-2.6-15.4-7.8-19.7-5.2-4.42-13.9-7.28-26.1-8.58z' fill='%2300cf48'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cg%3E%3Crect x='159' y='1.32' width='195' height='511' fill='%23484848' style='paint-order:fill markers stroke'/%3E%3Ccircle cx='256' cy='256' r='210' fill='%23a3a3a3' /%3E%3Ccircle cx='256' cy='256' r='190' fill='%23cccccc' stroke='%23828282' stroke-dashoffset='211' stroke-linecap='square' stroke-linejoin='round' stroke-width='22' style='paint-order:fill markers stroke'/%3E%3C/g%3E%3Cpath d='m458 216h38.6v83.5h-38.6z' fill='%23828282' stroke-dashoffset='211' stroke-linecap='square' stroke-linejoin='round' stroke-width='69' style='paint-order:fill markers stroke'/%3E%3Cpath d='m271 260a15 15 0 0 1-15 15 15 15 0 0 1-15-15 15 15 0 0 1 15-15 15 15 0 0 1 15 15zm-13.9 11.8 4.28-176m-4.28 168 94.3 66.4' fill='%2300ff00' stroke='%23000000' stroke-dashoffset='211' stroke-linecap='square' stroke-linejoin='round' stroke-width='20' /%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300a3a348' stroke='%2300bfbf' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2'/%3E%3Cpath d='M8.5 2h7'/%3E%3Cpath d='M7 16h10'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300bf53' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='22 7 13.5 15.5 8.5 10.5 2 17'/%3E%3Cpolyline points='16 7 22 7 22 13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m256 291c-129 9e-5 -233 46.2-235 113-0.586 24.3-3.96 43.7-2.94 58.7-1.35 26.1 3.49 38.6 32.6 38.6h412c29.1 0 33.9-12.4 32.6-38.6 1.02-15-2.36-34.4-2.94-58.7-1.61-66.5-106-113-235-113-0.313 1.5e-4 -0.622 0.01-0.935 0.0102-0.313-6.9e-4 -0.621-0.0101-0.935-0.0102zm118-143a118 118 0 0 1-118 118 118 118 0 0 1-118-118 118 118 0 0 1 118-118 118 118 0 0 1 118 118z' fill='%230072d3' fill-rule='evenodd'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a300a3' stroke='%23bf00ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8'/%3E%3Cpath d='M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1'/%3E%3Cpath d='M2 21h20'/%3E%3Cpath d='M7 8v2'/%3E%3Cpath d='M12 8v2'/%3E%3Cpath d='M17 8v2'/%3E%3Cpath d='M7 4h.01'/%3E%3Cpath d='M12 4h.01'/%3E%3Cpath d='M17 4h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m258 22c-2.15-0.04-4.29-0.0365-6.42 0.0098-10.2 0.222-20.3 1.42-30 3.37-25.8 5.2-49.3 15.5-67.5 31.2-17.2 14.9-31.4 39.2-26 65.1l3.27 103c-35 1.57-62.8 30.2-62.8 65.6v134c0 36.4 29.3 65.7 65.7 65.7h243c36.4 0 65.7-29.3 65.7-65.7v-134c0-36.4-29.3-65.7-65.7-65.7h-4.05l1.28-120-3.19-13.9c-15.4-30.8-41.2-51.1-68.5-60.7-14.9-5.28-30.2-7.72-45.3-8zm-5.26 60.7c10.7-0.204 21.2 1.23 30.3 4.46 12.8 4.53 23.2 11.7 31.2 24.8l-1.2 113h-121l-3.42-108-1.22-7.53c0.0428-0.226 0.696-1.83 6.4-6.76 7.78-6.72 23-14.3 39.8-17.7 6.3-1.27 12.8-1.98 19.2-2.1zm1.62 204c22.9 1.8e-4 44.3 17.5 44.3 41.8-1.2e-4 12.9-6.14 23.8-15.2 31.3 0 0.0126 4e-3 0.0244 4e-3 0.0371v57.7c0 15.3-13 28.4-28.4 28.4h-0.562c-15.3 0-28.4-13-28.4-28.4v-57.2c-9.5-7.47-16-18.6-16-31.8 2.2e-4 -24.3 21.4-41.8 44.3-41.8z' fill='%23a3a3a3'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m45.9 241 167 151 249-309' fill='none' stroke='%23008200' stroke-width='88'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m45.9 241 167 151 249-309' fill='none' stroke='%23008200' stroke-width='88'/%3E%3C/svg%3E");
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(241, 241, 241);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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

html[saved-theme="dark"] body .callout[data-callout="b-blue"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="b-green"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="b-orange"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="b-pink"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="b-purple"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="b-red"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="b-yellow"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="book"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 7v14'/%3E%3Cpath d='M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="clip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="comment"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="con"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z'/%3E%3Cpath d='M17 14V2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="cons"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z'/%3E%3Cpath d='M17 14V2'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="fc-group"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 6 4 14'/%3E%3Cpath d='M12 6v14'/%3E%3Cpath d='M8 8v12'/%3E%3Cpath d='M4 4v16'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="fc"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="g-black"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z' fill='%2300a3ffcf' stroke='none' stroke-width='0'/%3E%3Cpath d='m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z' fill='currentColor' stroke='none' stroke-width='0'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="g-black"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z' fill='%2300a3ffcf' stroke='none' stroke-width='0'/%3E%3Cpath d='m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z' fill='currentColor' stroke='none' stroke-width='0'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="g-gray"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z' fill='%2300a3ffcf' stroke='none' stroke-width='0'/%3E%3Cpath d='m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z' fill='currentColor' stroke='none' stroke-width='0'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="g-gray"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z' fill='%2300a3ffcf' stroke='none' stroke-width='0'/%3E%3Cpath d='m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z' fill='currentColor' stroke='none' stroke-width='0'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="g-white"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z' fill='%2300a3ffcf' stroke='none' stroke-width='0'/%3E%3Cpath d='m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z' fill='currentColor' stroke='none' stroke-width='0'/%3E%3C/svg%3E'");
}

html[saved-theme="dark"] body .callout[data-callout="g-white"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z' fill='%2300a3ffcf' stroke='none' stroke-width='0'/%3E%3Cpath d='m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z' fill='currentColor' stroke='none' stroke-width='0'/%3E%3C/svg%3E'");
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
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
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
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 127, 255, 0.498);
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
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(139, 108, 239, 0.1);
  border-bottom-color: rgba(0, 114, 211, 0.247);
  border-bottom-left-radius: 13.062px;
  border-bottom-right-radius: 13.062px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 114, 211, 0.247);
  border-left-width: 1px;
  border-right-color: rgba(0, 114, 211, 0.247);
  border-right-width: 1px;
  border-top-color: rgba(0, 114, 211, 0.247);
  border-top-left-radius: 13.062px;
  border-top-right-radius: 13.062px;
  border-top-width: 1px;
  color: rgb(171, 154, 245);
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
  --mu-folder-icon-closed-default: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-closed-op3: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3Cpath d='M2 10h20'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-closed-selected: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-closed-unfilled: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-color: #0048a3 !important;
  --mu-folder-icon-color-active: #00a3ff !important;
  --mu-folder-icon-opened-default: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-opened-op3: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-opened-selected: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E") !important;
  --mu-folder-icon-opened-unfilled: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/%3E%3C/svg%3E") !important;
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

html[saved-theme="light"] body .bases-table {
  border-color: rgb(0, 72, 130);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(232, 239, 255);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(0, 72, 130);
  border-color: rgb(225, 225, 225) rgb(0, 72, 130) rgb(225, 225, 225) rgb(225, 225, 225);
  color: rgb(225, 225, 225);
  font-weight: 700;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgba(0, 127, 255, 0.157);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgba(0, 127, 255, 0.063);
  border-color: rgba(0, 127, 255, 0.125) rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(53, 53, 53);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(53, 53, 53);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(139, 108, 239, 0.1);
  border-radius: 14.928px;
  color: rgb(139, 108, 239);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(53, 53, 53);
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
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 255, 0, 0.533);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 114, 211);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(53, 53, 53);
  outline: rgb(53, 53, 53) none 0px;
  text-decoration-color: rgb(53, 53, 53);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 51, 255);
  outline: rgb(0, 51, 255) none 0px;
  text-decoration-color: rgb(0, 51, 255);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(162, 0, 255);
  outline: rgb(162, 0, 255) none 0px;
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
  border-bottom-color: rgb(0, 114, 211);
  border-left-color: rgb(0, 114, 211);
  border-right-color: rgb(0, 114, 211);
  border-top-color: rgb(0, 114, 211);
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
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 114, 211);
  border-left-color: rgb(0, 114, 211);
  border-right-color: rgb(0, 114, 211);
  border-top-color: rgb(0, 114, 211);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(241, 53, 53);
  color: rgb(255, 255, 255);
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m96.9 209h318c0.264 0 0.476 0.154 0.476 0.345v92.4c0 0.191-0.212 0.345-0.476 0.345h-318c-0.264 0-0.476-0.154-0.476-0.345v-92.4c0-0.191 0.212-0.345 0.476-0.345z' fill='%23a30000' stroke-dashoffset='211' stroke-linecap='round' stroke-width='20'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m256 21c-130 0-235 105-235 235 0 130 105 235 235 235s235-105 235-235-105-235-235-235zm-34.7 58.9h69.3c5.14 0 9.27 25.5 9.27 57.2v128c0 31.7-4.14 57.2-9.27 57.2h-69.3c-5.14 0-9.27-25.5-9.27-57.2v-128c0-31.7 4.14-57.2 9.27-57.2zm3.77 272h59.5c3.46 0 6.45 1.26 8.97 3.78s3.78 5.51 3.78 8.97v47.7c0 3.46-1.26 6.45-3.78 8.97-2.52 2.52-5.51 3.78-8.97 3.78h-59.5c-3.46 0-6.45-1.26-8.97-3.78-2.52-2.52-3.78-5.51-3.78-8.97v-47.7c0-3.46 1.26-6.45 3.78-8.97 2.52-2.52 5.51-3.78 8.97-3.78z' fill='%23f13535' stroke-dashoffset='211' stroke-linecap='round' stroke-linejoin='round' stroke-width='9.98'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m256 21a235 235 0 0 0-235 235 235 235 0 0 0 235 235 235 235 0 0 0 235-235 235 235 0 0 0-235-235zm0.273 69.1c23.3 0 44.7 4.25 64.2 12.7 19.5 8.18 34.9 19.8 46.3 34.9 11.3 14.8 17 31.3 17 49.6 0 12.3-2.36 23.3-7.08 33.1-4.72 9.44-10.4 17.5-17 24.1-6.3 6.3-15 14-26 23.1-11.3 9.13-19.8 16.7-25.5 22.7s-9.6 12.9-11.8 20.8c-2.2 8.5-6.45 12.7-12.7 12.7h-57.6c-3.46 0-6.45-1.26-8.97-3.78-2.52-2.52-3.78-5.51-3.78-8.97 0-11 2.36-20.9 7.08-29.7 5.04-8.81 10.9-16.4 17.5-22.7 6.61-6.61 15.4-14.3 26.4-23.1 11.6-9.13 20.3-16.7 26-22.7 5.67-6.3 8.5-13.1 8.5-20.3 0-9.13-3.62-16.2-10.9-21.2-6.92-5.35-17.5-8.03-31.6-8.03-10.7 0-19.2 1.42-25.5 4.25-5.98 2.52-10.4 5.51-13.2 8.97s-5.67 7.87-8.5 13.2c-1.89 4.72-3.93 8.34-6.14 10.9-2.2 2.2-5.51 3.3-9.92 3.3h-57.6c-2.83 0-5.35-0.943-7.55-2.83-1.89-1.89-2.83-4.41-2.83-7.55 0.315-15.4 5.82-31.2 16.5-47.2 11-16.1 26.3-29.4 45.8-40.1 19.8-10.7 42.8-16.1 68.9-16.1zm-31.2 262h59.5c3.46 0 6.45 1.26 8.97 3.78s3.78 5.51 3.78 8.97v47.7c0 3.46-1.26 6.45-3.78 8.97-2.52 2.52-5.51 3.78-8.97 3.78h-59.5c-3.46 0-6.45-1.26-8.97-3.78-2.52-2.52-3.78-5.51-3.78-8.97v-47.7c0-3.46 1.26-6.45 3.78-8.97s5.51-3.78 8.97-3.78z' fill='%23ffa300' stroke-dashoffset='211' stroke-linecap='round' stroke-linejoin='round' stroke-width='9.98'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m185 89.2-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.26 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167zm206 0-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.25 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167z' color='%23000000' fill='%23828282' stroke-width='1px'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m411 473c-8.2 6.01-141-79-151-78.8-10.3 0.205-139 90.4-147 84.7-8.45-5.67 34.3-154 30.9-163-3.38-9.39-132-99.7-129-109 2.98-9.51 162-15.9 170-21.9 8.2-6.01 57.4-152 67.7-152 10.3-0.205 65.7 144 74.2 149 8.45 5.67 167 5.74 171 15.1s-121 105-124 114c-2.98 9.51 46.1 156 37.9 162z' color='%23000000' fill='%23ffc200' /%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m251 12.6c-28.8-5.53-39.7 19.7-38.7 43.6-10.9 21.3-37.4 32-60.5 31.5-21.3-6.79-42.7-36.9-63.3-8.33-23.5 14.9-32.4 45.2-6.55 62.6 11 22.3-1.02 49.4-16.4 66.6-15.7 15.8-53.5 0.874-52.4 33.5-2.96 21.6-2.45 59.8 29.2 55 28.9 0.315 42.7 32.2 45.5 56.8 3.43 24.1-37.6 40.1-13.9 63.3 13.1 17.4 40.7 44.6 59.7 19.1 20.5-20.5 52.9-7.78 72.4 7.64 20.2 13.5 1.27 52 32.1 54.2 20.5 2.15 59.2 6.38 58.6-23.9-2.82-30.1 28.6-46.3 54-50 25.2-7.34 39.3 35.5 63.4 15.8 17.4-13 48.3-40.3 23-60.8-21.8-20.6-8.97-54.3 7.26-74 14.9-18.9 55.2-1.47 54.3-35.4 2.96-21.6 2.45-59.8-29.2-55-28.9-0.313-42.7-32.2-45.5-56.8-3.43-24.1 37.6-40.1 13.9-63.3-13.1-17.4-40.7-44.6-59.7-19.1-20.5 20.5-52.9 7.78-72.4-7.64-20.2-13.5-1.27-51.9-32-54.2-7.51-1.32-15.2-1.38-22.8-1.28zm4.84 165c46.1-1.39 85.9 44 78.2 89.6-4.76 46.2-55.8 79.5-100 65.3-45.9-11.5-71.3-68.4-49.3-110 12.7-26.9 41.4-44.8 71.1-44.6z' color='%23000000' fill='%2300b3b3'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cg stroke-dashoffset='211' stroke-linecap='round'%3E%3Cpath d='m68.1 110h376c1.33 19.4 0.19 39.8 0.571 59.6-0.395 7.2 0.781 15-0.571 21.9h-376c-1.33-19.4-0.19-39.8-0.571-59.6 0.393-7.18-0.778-15.1 0.571-21.9z' fill='%230082ff' stroke-width='28.2' /%3E%3Cpath d='m68.1 191h376c1.33 19.4 0.19 39.8 0.571 59.6v216c-19.4 1.33-39.8 0.19-59.6 0.571h-317c-1.33-19.4-0.19-39.8-0.571-59.6v-216z' fill='%2368c0e1' stroke-width='51.9' /%3E%3Cpath d='m147 44.2c11.1 0.4 23-0.788 33.7 0.571v55.9c-10.8 1.33-22.5 0.19-33.7 0.571-1.33-18.4-0.19-37.7-0.571-56.5z' fill='%230082ff' stroke-width='29.7' /%3E%3Cpath d='m340 44.2c11.1 0.4 23-0.788 33.7 0.571v55.9c-10.8 1.33-22.5 0.19-33.7 0.571-1.33-18.4-0.19-37.7-0.571-56.5z' fill='%230082ff' stroke-width='29.7' /%3E%3Cpath d='m116 212c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6zm97.7 0c-1.43 3.85-0.119 9.01-0.572 13.3 0.381 19.8-0.761 40.2 0.572 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.761-40.2-0.572-59.6zm95.7 0c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6zm-193 82.8c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6zm97.7 0c-1.43 3.85-0.119 9.01-0.572 13.3 0.381 19.8-0.761 40.2 0.572 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.761-40.2-0.572-59.6zm95.7 0c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6z' fill='%23b9e2f1' stroke-width='28.2' /%3E%3C/g%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cg stroke-dashoffset='211' stroke-linecap='round'%3E%3Cpath d='m68.1 110h376c1.33 19.4 0.19 39.8 0.571 59.6-0.395 7.2 0.781 15-0.571 21.9h-376c-1.33-19.4-0.19-39.8-0.571-59.6 0.393-7.18-0.778-15.1 0.571-21.9z' color='%23000000' fill='%230082ff' stroke-width='28.2' /%3E%3Cpath d='m68.1 191h376c1.33 19.4 0.19 39.8 0.571 59.6v216c-19.4 1.33-39.8 0.19-59.6 0.571h-317c-1.33-19.4-0.19-39.8-0.571-59.6v-216z' color='%23000000' fill='%2368c0e1' stroke-width='51.9' /%3E%3Cpath d='m340 44.2c11.1 0.4 23-0.788 33.7 0.571v55.9c-10.8 1.33-22.5 0.19-33.7 0.571-1.33-18.4-0.19-37.7-0.571-56.5zm-193 0c11.1 0.4 23-0.788 33.7 0.571v55.9c-10.8 1.33-22.5 0.19-33.7 0.571-1.33-18.4-0.19-37.7-0.571-56.5z' fill='%230082ff' /%3E%3Cpath d='m116 212c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6zm97.7 0c-1.43 3.85-0.119 9.01-0.572 13.3 0.381 19.8-0.761 40.2 0.572 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.761-40.2-0.572-59.6zm95.7 0c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6zm-193 82.8c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6zm97.7 0c-1.43 3.85-0.119 9.01-0.572 13.3 0.381 19.8-0.761 40.2 0.572 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.761-40.2-0.572-59.6zm95.7 0c-1.43 3.85-0.117 9.01-0.57 13.3 0.381 19.8-0.763 40.2 0.57 59.6h77.7c10.1 3.26 7.13-6.98 7.38-13.3-0.381-19.8 0.763-40.2-0.57-59.6z' color='%23000000' fill='%23b9e2f1' stroke-width='28.2' /%3E%3C/g%3E%3Cpath d='m14.3 254 289-1.57 1.48-108 191 175-197 152v-104h-285z' fill='%23f14848'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m42.8 417h426l-201-322z' fill='%2300cf48'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m42.8 94.9h426l-201 322z' fill='%23f14848'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m94.9 469v-426l322 201z' fill='%230082ff'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300bf53' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M8 12h8'/%3E%3Cpath d='M12 8v8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300bf48' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 12h-4l-3 9L9 3l-3 9H2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m56.1 12.8h400c0.317 0 0.571 0.255 0.571 0.571v485c0 0.317-0.255 0.571-0.571 0.571l-206-127-194 127c-0.265 0.173-0.571-0.255-0.571-0.571v-485c0-0.317 0.255-0.571 0.571-0.571z' fill='%23c300ff' stroke-dashoffset='211' stroke-linecap='round' stroke-width='28.2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m125 364c0-154 260 2.7 260-162m72.5-68.9c0 33-26.7 59.7-59.7 59.7s-59.7-26.7-59.7-59.7 26.7-59.7 59.7-59.7 59.7 26.7 59.7 59.7zm-332-91c-33 0-59.7 26.7-59.7 59.7s26.7 59.7 59.7 59.7 59.7-26.7 59.7-59.7-26.7-59.7-59.7-59.7zm0 120v202zm0 204c-33 0-59.7 26.7-59.7 59.7s26.7 59.7 59.7 59.7 59.7-26.7 59.7-59.7-26.7-59.7-59.7-59.7z' fill='none' stroke='%23ff5f00' stroke-linecap='round' stroke-linejoin='round' stroke-width='40'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m15.4 68.6h121l-4.57 176-117 1.62zm277-26.2c-44.7 8.36-88.6 21.4-134 23.9v180c27.2 12.2 51 24.9 60.9 51 0 0 17.1 42.7 35.5 58 20.2 20.3 40.9 36.3 46.9 64.9 8.96 19.5 15.7 58.1 50.8 48.3 27.9-18.1 12.5-39 10.3-68.2-6.27-27.4-33-36.3-37.6-64.2 4.08-8.57 14.3-18.3 25.4-16.6 38.9-0.709 70.2 2.15 108-6.85 22.6-11.9 34.4-39.4 18.9-60.9-3.48-7.19-9.57-14.5-2-21.3 12.5-14.8 11.9-35-2.32-48.6-5.7-6.22-10-12.6-4.7-20.5 8.19-16.3-0.869-32.8-11.6-45.6-7.18-5.9-5.41-13.6-3.23-21.3 8.28-25.8-16.1-38.6-37.5-42.5-40.4-7.91-82.3-15.2-124-9.79z' fill='%23f14848'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff5f00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='8' cy='21' r='1'/%3E%3Ccircle cx='19' cy='21' r='1'/%3E%3Cpath d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f10000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='22 17 13.5 8.5 8.5 13.5 2 7'/%3E%3Cpolyline points='16 17 22 17 22 11'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m397 146v-54m0 197v-54m59.7 190a59.7 59.7 0 0 1-59.7 59.7 59.7 59.7 0 0 1-59.7-59.7 59.7 59.7 0 0 1 59.7-59.7 59.7 59.7 0 0 1 59.7 59.7zm-332-383a59.7 59.7 0 0 0-59.7 59.7 59.7 59.7 0 0 0 59.7 59.7 59.7 59.7 0 0 0 59.7-59.7 59.7 59.7 0 0 0-59.7-59.7zm0 120v202zm0 204a59.7 59.7 0 0 0-59.7 59.7 59.7 59.7 0 0 0 59.7 59.7 59.7 59.7 0 0 0 59.7-59.7 59.7 59.7 0 0 0-59.7-59.7z' fill='none' stroke='%23a3a3a3' stroke-linecap='round' stroke-width='33.8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Crect x='10.7' y='81.8' width='486' height='338' rx='22' ry='19.6' fill='%23cfcfcf'/%3E%3Cpath d='m43.9 396 128-177m284 177-128-177m-285-112 216 174 206-174' fill='none' stroke='%23484848' stroke-width='20.6'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300a3ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath fill='none' d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'/%3E%3Ccircle fill='none' cx='12' cy='12' r='3'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m103 58.3c-11.2 10.1 1.66 23.2 7.94 32.2 24.3 33.6 48.1 67.6 72.7 101 8.87 11.6 21.5 3.91 30.4-2.66 10.3-7.37 22.8-12.4 31.5-21.4 4.28-14.5-10.2-24.8-16.7-36.2-22.5-31-44.4-62.5-67.2-93.3-8.87-11.6-21.5-3.91-30.4 2.66-9.42 5.92-18.8 11.8-28.3 17.7zm-15.5 30.7c-33.2 79-46.6 163-8.42 238 42.3 68.3 112 140 189 147 32.9 4 66.1 5.21 99.3 5.55-27-37.6-54-75.2-81-113-37.6 18.7-81.9-0.613-109-28.8-23-24.1-49.3-54.3-43.5-90.2 1.26-20.8 23.3-36.1 32.8-47.7-26.5-37-53.1-74-79.6-111zm218 252c-11.2 10.1 1.66 23.2 7.94 32.3 24.3 33.6 48.1 67.6 72.7 101 8.87 11.6 21.5 3.91 30.4-2.66 10.3-7.37 22.8-12.4 31.5-21.4 4.28-14.5-10.2-24.8-16.7-36.2-22.5-31-44.4-62.5-67.2-93.3-8.87-11.6-21.5-3.91-30.4 2.66-9.42 5.92-18.8 11.8-28.3 17.7z' fill='%2300cf48'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m177 81.6 73.5 125a240 49.8 0 0 0-157 13l-30-56.5h-46.5l34 67.2a240 49.8 0 0 0-36.1 26.1 240 49.8 0 0 0 36 26.1l-34 64 46.5 3.33 28.8-56.9a240 49.8 0 0 0 157 13.2l-73.2 118 101 6.23 76.1-129a240 49.8 0 0 0 142-45.4 240 49.8 0 0 0-138-45.1l-79.9-129z' fill='%23979797'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cg stroke-dashoffset='211' stroke-linecap='square' stroke-linejoin='round'%3E%3Cpath d='m37.1 257h116v221h-116z' fill='%2300a3ff' stroke-width='64.5' style='paint-order:fill markers stroke'/%3E%3Cpath d='m198 173h116v304h-116z' fill='%23ff8200' stroke-width='75.7' style='paint-order:fill markers stroke'/%3E%3Cpath d='m361 41.3h116v436h-116z' fill='%2300cf48' stroke-width='90.7' style='paint-order:fill markers stroke'/%3E%3C/g%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m147 239c-74 8e-5 -133 27-134 65-0.3 14-2 25-2 34-0.8 15 2 22 19 22h235c17 0 19-7 19-22 0.6-9-1-20-2-34-0.9-38-60-65-134-65-0.2 8e-5 -0.4 6e-3 -0.5 6e-3 -0.2-4e-4 -0.4-6e-3 -0.5-6e-3zm67-83a67 68 0 0 1-67 68 67 68 0 0 1-67-68 67 68 0 0 1 67-68 67 68 0 0 1 67 68zm167 239c-63 1e-5 -114 23-115 56-0.3 12-2 22-1 29-0.7 13 2 19 16 19h202c14 0 17-6 16-19 0.5-7-1-17-1-29-0.8-33-52-56-115-56-0.2 6e-5 -0.3 5e-3 -0.5 5e-3 -0.2-3e-4 -0.3-5e-3 -0.5-5e-3zm58-71a58 59 0 0 1-58 59 58 59 0 0 1-58-59 58 59 0 0 1 58-59 58 59 0 0 1 58 59zm-58-182c-63 1e-5 -114 23-115 56-0.3 12-2 22-1 29-0.7 13 2 19 16 19h202c14 0 17-6 16-19 0.5-7-1-17-1-29-0.8-33-52-56-115-56-0.2 6e-5 -0.3 5e-3 -0.5 5e-3 -0.2-3e-4 -0.3-5e-3 -0.5-5e-3zm58-71a58 59 0 0 1-58 59 58 59 0 0 1-58-59 58 59 0 0 1 58-59 58 59 0 0 1 58 59z' fill='%230072d3'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m258 57-248 195 70 0.3v203h135v-153h80v153h134v-201l73 0.3-105-85' fill='%2300a3ff' fill-rule='evenodd' stroke-dashoffset='211' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230072d3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='18.5' cy='17.5' r='3.5'/%3E%3Ccircle cx='5.5' cy='17.5' r='3.5'/%3E%3Ccircle cx='15' cy='5' r='1'/%3E%3Cpath d='M12 17.5V14l-3-3 4-3 2 3h2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m256 21a235 235 0 0 0-235 235 235 235 0 0 0 235 235 235 235 0 0 0 235-235 235 235 0 0 0-235-235zm0.293 120c7.44 0 13.3 1.96 17.6 5.87 4.31 3.72 6.46 8.81 6.46 15.3 0 6.46-2.15 11.6-6.46 15.6-4.31 3.72-10.2 5.58-17.6 5.58-7.44 0-13.3-1.86-17.6-5.58-4.31-3.92-6.46-9.1-6.46-15.6 0-6.46 2.15-11.6 6.46-15.3 4.31-3.92 10.2-5.87 17.6-5.87zm-65.2 69.3h86v128h49.6v33.2h-142v-33.2h55.2v-95.1h-49.3v-33.2z' fill='%2300a3f1'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m173 331c-6.86-46.4-39-83.5-55.8-126-5.82-25.3-4.61-52-1.14-77.6 14.5-52.5 60.9-96.8 117-105 52.5-9.38 111 6.13 146 47.4 20.1 23.5 35.9 52.5 34.3 83.9 0.467 24.9 2.6 51.7-12.5 73.4-22.9 39.4-51.3 81-48.6 128-3.91 2.97-13.6 0.334-19.7 1.23h-156c-1.02-8.36-2.04-16.7-3.05-25.1z' fill='%23ffc300' stroke-width='4.85'/%3E%3Cpath d='m143 170c2.18-35.2 20.5-68.7 45.9-93.4 19.5-14.5 42.6-27.1 67.5-29.2 20.9 15.9-17 31.5-31.9 36-32.1 14.7-53.3 46.8-56.2 80.9 5.59 17.4-26 38.4-25.1 11.4l-0.0926-2.67z' fill='%23ffff00' fill-opacity='.492' stroke-width='6.57'/%3E%3Cpath d='m241 497c-16.7-3.43-56.3-21.9-40.9-40.6 33.9-4.44 68.5-1.85 103-2.15 15.4-3.65 38.6 6.63 19.6 21.5-15.5 18.6-39.6 22.8-62.7 23.5-6.3-0.234-12.6-1.05-18.8-2.26z' fill='%23ffc300' stroke-width='5.18'/%3E%3Cpath d='m173 413c61.1 0.239 122-0.479 183 0.36 13 7.12 11.4 37.2-6.7 35.2-59.6-0.239-119 0.479-179-0.36-11.5-6.19-11.7-31.7 2.08-35.2zm0-44.2c61.1 0.239 122-0.479 183 0.36 13 7.12 11.4 37.2-6.7 35.2-59.6-0.239-119 0.479-179-0.36-11.5-6.19-11.7-31.7 2.08-35.2z' fill='%23ffc300' stroke-dashoffset='211' stroke-linecap='round' stroke-linejoin='round' stroke-width='7.65'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffd700' stroke='%2348484882' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z'/%3E%3Ccircle cx='16.5' cy='7.5' r='.5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m252 15.3c-104 2e-6 -188 83-188 185 0 102 188 297 188 297s188-195 188-297c0-102-84.4-185-188-185zm0 123a64 64 0 0 1 64 64 64 64 0 0 1-64 64 64 64 0 0 1-64-64 64 64 0 0 1 64-64z' fill='%23f14848' stroke-linecap='round' stroke-width='2.8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m33 64h446v311h-446z' fill='%23f1f1f1' fill-rule='evenodd' stroke='%23828282' stroke-dashoffset='211' stroke-linecap='round' stroke-linejoin='round' stroke-width='40' /%3E%3Cpath d='m321 325c-99 7e-5 -178 35-180 86-0.4 19-3 33-2 45-1 20 3 30 25 30h315c22 0 26-9 25-30 0.8-11-2-26-2-45-1-51-81-86-180-86-0.2 1e-4 -0.5 8e-3 -0.7 8e-3 -0.2-5e-4 -0.5-8e-3 -0.7-8e-3zm90-109a90 90 0 0 1-90 90 90 90 0 0 1-90-90 90 90 0 0 1 90-90 90 90 0 0 1 90 90z' fill='%230072d3' fill-rule='evenodd'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m330 119c-2.01 1.32-32.1-20.3-34.6-20.4-2.43-0.0752-33.9 19.6-35.9 18.2-1.92-1.44 10.1-35.7 9.4-38-0.676-2.25-29.8-25-29-27.3 0.825-2.2 38.4-1.81 40.4-3.12s15.5-35.1 17.9-35c2.43 0.0753 13.6 34.6 15.6 36.1 1.92 1.44 39.4 3.36 40.1 5.61 0.676 2.25-29.9 23.2-30.8 25.4-0.825 2.2 8.86 37.2 6.85 38.5zm-230 207c-2.01 1.32-32.1-20.3-34.6-20.4-2.43-0.0752-33.9 19.6-35.9 18.2-1.92-1.44 10.1-35.7 9.4-38-0.676-2.25-29.8-25-29-27.3 0.825-2.2 38.4-1.81 40.4-3.12 2.01-1.32 15.5-35.1 17.9-35 2.43 0.0752 13.6 34.6 15.6 36.1 1.92 1.44 39.4 3.36 40.1 5.61 0.676 2.25-29.9 23.2-30.8 25.4-0.825 2.2 8.86 37.2 6.85 38.5zm317 136c-3.03 2.03-48.4-31.3-52-31.4-3.66-0.116-51.1 30.3-54 28.1-2.89-2.22 15.2-55.2 14.1-58.7-1.02-3.48-44.9-38.7-43.7-42.1 1.24-3.4 57.7-2.79 60.8-4.82 3.03-2.03 23.3-54.2 27-54.1 3.66 0.116 20.5 53.5 23.4 55.7 2.89 2.22 59.3 5.2 60.3 8.67 1.02 3.48-45.1 35.8-46.3 39.2-1.24 3.4 13.3 57.4 10.3 59.5zm60.6-202c-2.01 1.32-32.1-20.3-34.6-20.4-2.43-0.0752-33.9 19.6-35.9 18.2-1.92-1.44 10.1-35.7 9.4-38-0.676-2.25-29.8-25-29-27.3 0.825-2.2 38.4-1.81 40.4-3.12 2.01-1.32 15.5-35.1 17.9-35 2.43 0.0752 13.6 34.6 15.6 36.1 1.92 1.44 39.4 3.36 40.1 5.61 0.676 2.25-29.9 23.2-30.8 25.4-0.825 2.2 8.86 37.2 6.85 38.5zm-323-107c-2.01 1.32-32.1-20.3-34.6-20.4-2.43-0.0752-33.9 19.6-35.9 18.2-1.92-1.44 10.1-35.7 9.4-38-0.676-2.25-29.8-25-29-27.3 0.825-2.2 38.4-1.81 40.4-3.12 2.01-1.32 15.5-35.1 17.9-35 2.43 0.0752 13.6 34.6 15.6 36.1 1.92 1.44 39.4 3.36 40.1 5.61 0.676 2.25-29.9 23.2-30.8 25.4-0.825 2.2 8.86 37.2 6.85 38.5z' color='%23000000' fill='%23ffc200' stroke-dashoffset='211' stroke-linecap='square' stroke-linejoin='round' stroke-width='24.4' /%3E%3Cg stroke-width='62.4'%3E%3Cpath d='m152 367 219-222' fill='%23000000' stroke='%23000000'/%3E%3Cpath d='m372 145 91.7-93.2' fill='none' stroke='%23cfcfcf'/%3E%3Cpath d='m60.8 460 91.7-93.2' fill='none' stroke='%23cfcfcf'/%3E%3C/g%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m330 310s-199-12.1-205-92.5m332 96c0 33-26.7 59.7-59.7 59.7s-59.7-26.7-59.7-59.7 26.7-59.7 59.7-59.7 59.7 26.7 59.7 59.7zm-332-271c-33 0-59.7 26.7-59.7 59.7s26.7 59.7 59.7 59.7 59.7-26.7 59.7-59.7-26.7-59.7-59.7-59.7zm0 120v202zm0 204c-33 0-59.7 26.7-59.7 59.7s26.7 59.7 59.7 59.7 59.7-26.7 59.7-59.7-26.7-59.7-59.7-59.7z' fill='none' stroke='%23d228ff' stroke-width='40'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cg transform='matrix(.808 .76 -.732 .838 237 -150)'%3E%3Crect x='227' y='340' width='58.5' height='151' rx='26' ry='31.8' fill='%23979797'/%3E%3Cpath d='m181 43.1c-18.8 0-34 18-34 40.4v16.8c0 21.6 14.1 39.1 32.1 40.3-2.31 11.3-3.93 28.7-4.21 48.2l-0.629 44.1h-33.4c-29 0-52.3 23-52.3 51.6v21.4c0 28.6 23.3 51.6 52.3 51.6h230c29 0 52.3-23 52.3-51.6v-21.4c0-28.6-23.3-51.6-52.3-51.6h-33.7l0.568-39.9c0.314-22.1-1.16-41.4-3.64-52.5 17.2-2.03 30.6-19.2 30.6-40.2v-16.8c0-22.4-15.2-40.4-34-40.4z' fill='%23f13535' stroke-dashoffset='211' stroke-linecap='round' stroke-linejoin='round' stroke-width='9.75'/%3E%3C/g%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a3a3a3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Ccircle cx='12' cy='12' r='1'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23dd28ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m15.4 442h121l-4.57-176-117-1.62zm277 26.2c-44.7-8.36-88.6-21.4-134-23.9v-180c27.2-12.2 51-24.9 60.9-51 0 0 17.1-42.7 35.5-58 20.2-20.3 40.9-36.3 46.9-64.9 8.96-19.5 15.7-58.1 50.8-48.3 27.9 18.1 12.5 39 10.3 68.2-6.27 27.4-33 36.3-37.6 64.2 4.08 8.57 14.3 18.3 25.4 16.6 38.9 0.709 70.2-2.15 108 6.85 22.6 11.9 34.4 39.4 18.9 60.9-3.48 7.19-9.57 14.5-2 21.3 12.5 14.8 11.9 35-2.32 48.6-5.7 6.22-10 12.6-4.7 20.5 8.19 16.3-0.869 32.8-11.6 45.6-7.18 5.9-5.41 13.6-3.23 21.3 8.28 25.8-16.1 38.6-37.5 42.5-40.4 7.91-82.3 15.2-124 9.79z' fill='%2300cf48'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m266 93.3 53.6 53.5m77.1 200 0.1-254h-131l55.6-55.7m135 387c0 33-26.7 59.7-59.7 59.7s-59.7-26.7-59.7-59.7 26.7-59.7 59.7-59.7 59.7 26.7 59.7 59.7zm-332-383c-33 0-59.7 26.7-59.7 59.7s26.7 59.7 59.7 59.7 59.7-26.7 59.7-59.7-26.7-59.7-59.7-59.7zm0 120v202zm0 204c-33 0-59.7 26.7-59.7 59.7s26.7 59.7 59.7 59.7 59.7-26.7 59.7-59.7-26.7-59.7-59.7-59.7z' fill='none' stroke='%2300bf53' stroke-linecap='round' stroke-linejoin='round' stroke-width='40'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m185 89.2-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.26 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167zm206 0-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.25 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167z' color='%23000000' fill='%23828282' stroke-width='1px'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300a3ff88' stroke='%2300a3ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 3h12l4 6-10 13L2 9Z'/%3E%3Cpath d='M11 3 8 9l4 13 4-13-3-6'/%3E%3Cpath d='M2 9h20'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff4848' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M8 12h8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23cf00ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20'/%3E%3Cpolyline fill='%23cf00ff' points='10 2 10 10 13 7 16 10 16 2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m411 473c-8.2 6.01-141-79-151-78.8-10.3 0.205-139 90.4-147 84.7-8.45-5.67 34.3-154 30.9-163-3.38-9.39-132-99.7-129-109 2.98-9.51 162-15.9 170-21.9 8.2-6.01 57.4-152 67.7-152 10.3-0.205 65.7 144 74.2 149 8.45 5.67 167 5.74 171 15.1s-121 105-124 114c-2.98 9.51 46.1 156 37.9 162z' color='%23000000' fill='%23ffc200' /%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m256 21a235 235 0 0 0-235 235 235 235 0 0 0 235 235 235 235 0 0 0 235-235 235 235 0 0 0-235-235zm-17.5 54h31.6v44.3c13 1.04 26 2.67 39 4.88 13 2.21 26.1 5.07 39.2 8.58v49.5c-13-5.46-26-9.68-39-12.7-13-3.12-26.1-5-39.2-5.65v56l6.24 1.17c33 5.2 56.2 13.9 69.4 26.1 13.4 12.1 20.1 30 20.1 53.8 0 23.9-7.93 42.3-23.8 55.2-15.9 12.7-39.8 20-71.9 21.8v59.1h-31.6l-0.195-58.7c-16.2-0.65-32-2.47-47.2-5.46s-30-7.15-44.5-12.5v-51.1c14.9 7.67 30 13.6 45.2 17.7 15.3 4.03 30.9 6.3 46.6 6.82v-60.6l-6.43-1.17c-31.1-5.46-53.2-14-66.3-25.7-13-11.7-19.5-28.5-19.5-50.5-1e-5 -23.3 7.93-41.4 23.8-54.4 16-13.1 38.7-20.3 68.2-21.4l0.195-45zm0 89.5c-9.23 0.52-16.6 3.05-22.2 7.6-5.46 4.42-8.19 10.1-8.19 17 0 7.67 2.53 13.7 7.6 18.1 5.07 4.29 12.7 7.02 22.8 8.19v-50.9zm31.6 114v54.2c11.3-0.13 19.8-2.34 25.3-6.63 5.72-4.29 8.58-10.7 8.58-19.3 0-8.84-2.6-15.4-7.8-19.7-5.2-4.42-13.9-7.28-26.1-8.58z' fill='%2300cf48'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cg%3E%3Crect x='159' y='1.32' width='195' height='511' fill='%23484848' style='paint-order:fill markers stroke'/%3E%3Ccircle cx='256' cy='256' r='210' fill='%23a3a3a3' /%3E%3Ccircle cx='256' cy='256' r='190' fill='%23cccccc' stroke='%23828282' stroke-dashoffset='211' stroke-linecap='square' stroke-linejoin='round' stroke-width='22' style='paint-order:fill markers stroke'/%3E%3C/g%3E%3Cpath d='m458 216h38.6v83.5h-38.6z' fill='%23828282' stroke-dashoffset='211' stroke-linecap='square' stroke-linejoin='round' stroke-width='69' style='paint-order:fill markers stroke'/%3E%3Cpath d='m271 260a15 15 0 0 1-15 15 15 15 0 0 1-15-15 15 15 0 0 1 15-15 15 15 0 0 1 15 15zm-13.9 11.8 4.28-176m-4.28 168 94.3 66.4' fill='%2300ff00' stroke='%23000000' stroke-dashoffset='211' stroke-linecap='square' stroke-linejoin='round' stroke-width='20' /%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300a3a348' stroke='%2300bfbf' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2'/%3E%3Cpath d='M8.5 2h7'/%3E%3Cpath d='M7 16h10'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300bf53' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='22 7 13.5 15.5 8.5 10.5 2 17'/%3E%3Cpolyline points='16 7 22 7 22 13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m256 291c-129 9e-5 -233 46.2-235 113-0.586 24.3-3.96 43.7-2.94 58.7-1.35 26.1 3.49 38.6 32.6 38.6h412c29.1 0 33.9-12.4 32.6-38.6 1.02-15-2.36-34.4-2.94-58.7-1.61-66.5-106-113-235-113-0.313 1.5e-4 -0.622 0.01-0.935 0.0102-0.313-6.9e-4 -0.621-0.0101-0.935-0.0102zm118-143a118 118 0 0 1-118 118 118 118 0 0 1-118-118 118 118 0 0 1 118-118 118 118 0 0 1 118 118z' fill='%230072d3' fill-rule='evenodd'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a300a3' stroke='%23bf00ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8'/%3E%3Cpath d='M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1'/%3E%3Cpath d='M2 21h20'/%3E%3Cpath d='M7 8v2'/%3E%3Cpath d='M12 8v2'/%3E%3Cpath d='M17 8v2'/%3E%3Cpath d='M7 4h.01'/%3E%3Cpath d='M12 4h.01'/%3E%3Cpath d='M17 4h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m258 22c-2.15-0.04-4.29-0.0365-6.42 0.0098-10.2 0.222-20.3 1.42-30 3.37-25.8 5.2-49.3 15.5-67.5 31.2-17.2 14.9-31.4 39.2-26 65.1l3.27 103c-35 1.57-62.8 30.2-62.8 65.6v134c0 36.4 29.3 65.7 65.7 65.7h243c36.4 0 65.7-29.3 65.7-65.7v-134c0-36.4-29.3-65.7-65.7-65.7h-4.05l1.28-120-3.19-13.9c-15.4-30.8-41.2-51.1-68.5-60.7-14.9-5.28-30.2-7.72-45.3-8zm-5.26 60.7c10.7-0.204 21.2 1.23 30.3 4.46 12.8 4.53 23.2 11.7 31.2 24.8l-1.2 113h-121l-3.42-108-1.22-7.53c0.0428-0.226 0.696-1.83 6.4-6.76 7.78-6.72 23-14.3 39.8-17.7 6.3-1.27 12.8-1.98 19.2-2.1zm1.62 204c22.9 1.8e-4 44.3 17.5 44.3 41.8-1.2e-4 12.9-6.14 23.8-15.2 31.3 0 0.0126 4e-3 0.0244 4e-3 0.0371v57.7c0 15.3-13 28.4-28.4 28.4h-0.562c-15.3 0-28.4-13-28.4-28.4v-57.2c-9.5-7.47-16-18.6-16-31.8 2.2e-4 -24.3 21.4-41.8 44.3-41.8z' fill='%23a3a3a3'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m45.9 241 167 151 249-309' fill='none' stroke='%23008200' stroke-width='88'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  content: url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap)--%3E%3Cpath d='m45.9 241 167 151 249-309' fill='none' stroke='%23008200' stroke-width='88'/%3E%3C/svg%3E");
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(0, 136, 255);
  border-left-color: rgb(0, 136, 255);
  border-right-color: rgb(0, 136, 255);
  border-top-color: rgb(0, 136, 255);
  color: rgb(0, 136, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
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

html[saved-theme="light"] body .callout[data-callout="b-blue"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="b-green"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="b-orange"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="b-pink"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="b-purple"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="b-red"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="b-yellow"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z' fill='currentColor' fill-rule='evenodd'/%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="book"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 7v14'/%3E%3Cpath d='M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="clip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="comment"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="con"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z'/%3E%3Cpath d='M17 14V2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="cons"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z'/%3E%3Cpath d='M17 14V2'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="fc-group"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 6 4 14'/%3E%3Cpath d='M12 6v14'/%3E%3Cpath d='M8 8v12'/%3E%3Cpath d='M4 4v16'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="fc"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="g-black"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z' fill='%2300a3ffcf' stroke='none' stroke-width='0'/%3E%3Cpath d='m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z' fill='currentColor' stroke='none' stroke-width='0'/%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="g-black"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z' fill='%2300a3ffcf' stroke='none' stroke-width='0'/%3E%3Cpath d='m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z' fill='currentColor' stroke='none' stroke-width='0'/%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="g-gray"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z' fill='%2300a3ffcf' stroke='none' stroke-width='0'/%3E%3Cpath d='m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z' fill='currentColor' stroke='none' stroke-width='0'/%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="g-gray"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z' fill='%2300a3ffcf' stroke='none' stroke-width='0'/%3E%3Cpath d='m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z' fill='currentColor' stroke='none' stroke-width='0'/%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="g-white"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z' fill='%2300a3ffcf' stroke='none' stroke-width='0'/%3E%3Cpath d='m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z' fill='currentColor' stroke='none' stroke-width='0'/%3E%3C/svg%3E'");
}

html[saved-theme="light"] body .callout[data-callout="g-white"] {
  --callout-icon: url("data:image/svg+xml,'%3Csvg version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --%3E%3Cpath d='m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z' fill='%2300a3ffcf' stroke='none' stroke-width='0'/%3E%3Cpath d='m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z' fill='currentColor' stroke='none' stroke-width='0'/%3E%3C/svg%3E'");
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
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
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
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 127, 255, 0.498);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(0, 0, 0);
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
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(139, 108, 239, 0.1);
  border-bottom-color: rgba(0, 114, 211, 0.247);
  border-bottom-left-radius: 13.062px;
  border-bottom-right-radius: 13.062px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 114, 211, 0.247);
  border-left-width: 1px;
  border-right-color: rgba(0, 114, 211, 0.247);
  border-right-width: 1px;
  border-top-color: rgba(0, 114, 211, 0.247);
  border-top-left-radius: 13.062px;
  border-top-right-radius: 13.062px;
  border-top-width: 1px;
  color: rgb(139, 108, 239);
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
