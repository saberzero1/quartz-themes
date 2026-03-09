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
  --accent-h: 254;
  --accent-l: 68%;
  --accent-s: 80%;
  --background-modifier-active-hover: #007fff28;
  --background-modifier-border: #007fff38;
  --background-modifier-border-focus: #007fff;
  --background-modifier-border-hover: #007fff48;
  --background-modifier-hover: #007fff28;
  --background-primary: #002248;
  --background-primary-alt: #212121;
  --background-secondary: #001122;
  --background-secondary-alt: #383838;
  --bases-cards-background: #002248;
  --bases-cards-cover-background: #212121;
  --bases-cards-shadow: 0 0 0 1px #007fff38;
  --bases-cards-shadow-hover: 0 0 0 1px #007fff48;
  --bases-embed-border-color: #007fff38;
  --bases-table-border-color: #007fff38;
  --bases-table-cell-background-active: #002248;
  --bases-table-cell-background-disabled: transparent;
  --bases-table-cell-background-selected: rgba(139, 108, 239, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #007fff;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(139, 108, 239);
  --bases-table-group-background: #002248;
  --bases-table-header-background: #002248;
  --bases-table-header-background-hover: #007fff28;
  --bases-table-header-color: #dadada;
  --bases-table-header-weight: 600;
  --bases-table-row-background-hover: #0088ff33;
  --bases-table-summary-background: #002248;
  --bases-table-summary-background-hover: #007fff28;
  --blockquote-background-color: #cfcfcf20;
  --blockquote-border-color: #007fff;
  --blockquote-border-thickness: 4px;
  --blockquote-color: #dadada;
  --blur-background: color-mix(in srgb, #007fff18 65%, transparent) linear-gradient(#007fff18, color-mix(in srgb, #007fff18 65%, transparent));
  --bold-weight: 700;
  --callout-blend-mode: normal;
  --callout-title-weight: 600;
  --canvas-background: #002248;
  --cards-th-display: none;
  --checkbox-border-color: #0072d3;
  --checkbox-border-color-hover: #00bfff;
  --checkbox-color: #00bfff;
  --checkbox-color-hover: #00cfff;
  --checkbox-marker-color: #002248;
  --checklist-done-color: #00cf48;
  --checklist-done-decoration: underline;
  --code-background: #001122;
  --code-border-color: #007fff38;
  --code-bracket-background: #007fff28;
  --code-comment: #a3a3a3;
  --code-function: #48f148;
  --code-important: #ff7f00;
  --code-keyword: #d372ff;
  --code-normal: #f1f1f1;
  --code-operator: #d372ff;
  --code-property: #0088f1;
  --code-punctuation: #d372ff;
  --code-string: #00d8ff;
  --code-tag: #d372ff;
  --code-value: #ffa300;
  --collapse-icon-color: #0072d3;
  --collapse-icon-color-collapsed: #0072d3;
  --color-accent: rgb(139, 108, 239);
  --color-accent-1: rgb(170, 153, 245);
  --color-accent-2: rgb(206, 199, 250);
  --color-accent-hsl: 254, 80%, 68%;
  --divider-color: #007fff10;
  --divider-color-hover: #007fff;
  --divider-width: 1px;
  --divider-width-hover: 3px;
  --dropdown-background: #007fff18;
  --dropdown-background-hover: #007fff38;
  --embed-block-shadow-hover: 0 0 0 1px #007fff38, inset 0 0 0 1px #007fff38;
  --embed-border-left: 2px solid #0072d348;
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(139, 108, 239);
  --file-header-background: #002248;
  --file-header-background-focused: #002248;
  --file-header-border: 1px solid #007fff20;
  --file-header-font-size: 16px;
  --file-header-font-weight: 600;
  --file-header-justify: left;
  --file-line-width: 700px;
  --file-margins: 32px;
  --flair-background: #007fff18;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --footnote-divider-color: transparent;
  --footnote-input-background-active: #002248;
  --graph-line: #007fff;
  --graph-node: #d372ff;
  --graph-node-attachment: #007fff;
  --graph-node-focused: #00cfff;
  --graph-node-tag: #20f120;
  --graph-node-unresolved: #a3a3a3;
  --graph-text: #f1f1f1;
  --h1-color: #00a3ff;
  --h1-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --h1-size: 2em;
  --h1-weight: 800;
  --h2-color: #00a3ff;
  --h2-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --h2-size: 1.5em;
  --h2-weight: 800;
  --h3-color: #00a3ff;
  --h3-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --h3-size: 1.17em;
  --h3-weight: 800;
  --h4-color: #00a3ff;
  --h4-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --h4-size: 1em;
  --h4-weight: 800;
  --h5-color: #00a3ff;
  --h5-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --h5-size: .83em;
  --h5-weight: 800;
  --h6-color: #00a3ff;
  --h6-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --h6-size: .67em;
  --h6-weight: 800;
  --heading-spacing: 2.5rem;
  --hidden-text-underline-background-color: #ffff0088;
  --hidden-text-underline-foreground-color: #dadada;
  --highlight-mix-blend-mode: normal;
  --hr-color: #0072d3;
  --hr-thickness: 1px;
  --icon-color: #5382d3;
  --icon-color-active: #007fff;
  --icon-color-focused: #00a3ff;
  --icon-color-hover: #007fff;
  --icon-opacity: 0.95;
  --indentation-guide-color: #007fff7f;
  --indentation-guide-color-active: #bf00ff;
  --inline-title-color: #00a3ff;
  --inline-title-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --inline-title-margin-bottom: .5em;
  --inline-title-size: 2em;
  --inline-title-weight: 800;
  --interactive-accent: rgb(139, 108, 239);
  --interactive-accent-hover: rgb(170, 153, 245);
  --interactive-accent-hsl: 254, 80%, 68%;
  --interactive-hover: #007fff38;
  --interactive-normal: #007fff18;
  --link-color: #d372ff;
  --link-color-hover: #db8fff;
  --link-external-color: #00a9dd;
  --link-external-color-hover: #00c3ff;
  --link-unresolved-color: #d372ff;
  --link-unresolved-decoration-color: rgba(139, 108, 239, 0.3);
  --list-indent: 2em;
  --list-marker-color: #007fff;
  --list-marker-color-collapsed: #f100f1;
  --list-marker-color-hover: #007fff;
  --menu-background: #001122;
  --menu-border-color: #007fff48;
  --metadata-border-color: transparent;
  --metadata-divider-color: transparent;
  --metadata-gap: 2px;
  --metadata-input-background-active: #002248;
  --metadata-input-font-size: 0.933em;
  --metadata-input-height: 28px;
  --metadata-label-background-active: #002248;
  --metadata-label-font-size: 0.933em;
  --metadata-label-text-color: #00a3ff;
  --metadata-label-text-color-hover: #00bfff;
  --metadata-padding: 8px 2px;
  --metadata-property-background-active: transparent;
  --metadata-property-box-shadow-focus: 0 0 0 2px #007fff;
  --metadata-property-box-shadow-hover: 0 0 0 1px #007fff48;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: #002248;
  --modal-border-color: #007fff30;
  --modal-border-width: 1px;
  --modal-height: 92vh;
  --mu-amulet-hue: 224;
  --mu-amulet-sat: 50%;
  --mu-amulet-sat-value: 50;
  --mu-background-color-1: #002248;
  --mu-background-color-2: #001122;
  --mu-bg-image-overlay: 0.0;
  --mu-bg-search-results: #001836;
  --mu-blockquote-background: #cfcfcf20;
  --mu-blockquote-border: #007fff;
  --mu-bookmarked-note-icon-bg: #007fff40;
  --mu-border-width: 1px;
  --mu-border-width-value: 1;
  --mu-box-callout-icon: '<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --><path d="m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z" fill="currentColor" fill-rule="evenodd"/></svg>';
  --mu-callout-blue: 0, 136, 255;
  --mu-callout-book: 0, 163, 255;
  --mu-callout-comment: 0, 188, 188;
  --mu-callout-con: 228, 48, 48;
  --mu-callout-green: 0, 180, 88;
  --mu-callout-link: 48, 142, 255;
  --mu-callout-magic: 207, 88, 255;
  --mu-callout-mic: 0, 188, 82;
  --mu-callout-orange: 255, 97, 0;
  --mu-callout-paperclip: 255, 163, 33;
  --mu-callout-pink: 255, 18, 241;
  --mu-callout-pro: 0, 197, 88;
  --mu-callout-purple: 201, 0, 255;
  --mu-callout-red: 255, 48, 48;
  --mu-callout-target: 255, 72, 72;
  --mu-callout-video: 237, 48, 48;
  --mu-callout-yellow: 237, 188, 0;
  --mu-cards-border: #002248;
  --mu-caret-color: #00cfff;
  --mu-code-attribute: #ffa3a3;
  --mu-code-block-border: #0072d3;
  --mu-collapse-icon-size: 1.2;
  --mu-color-lig: #007fff;
  --mu-column-stripped-background: #00000082;
  --mu-dark-sidebar-color: #001122;
  --mu-default-mode-border-color: #0088ff;
  --mu-default-mode-border-value: 1;
  --mu-default-mode-border-width: 1px;
  --mu-divider-color: #007fff10;
  --mu-divider-color-hover: #007fff;
  --mu-divider-hover-width-value: 3;
  --mu-divider-width-value: 1;
  --mu-external-link: #00a9dd;
  --mu-external-link-hover: #00c3ff;
  --mu-fc-answer-border-color: #bf00ff;
  --mu-fc-bg-color: #007fff20;
  --mu-fc-fg-color: #dadada;
  --mu-fc-height: 400px;
  --mu-fc-height-value: 400;
  --mu-fc-width: 280px;
  --mu-fc-width-value: 280;
  --mu-file-header-border-color: #007fff20;
  --mu-file-header-border-value: 1;
  --mu-file-header-border-width: 1px;
  --mu-file-icon-color: #0072d3;
  --mu-file-line-width-value: 700;
  --mu-folder-area-background: #007fff10;
  --mu-folder-area-border: #007fff30;
  --mu-folder-icon-closed-default: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>');
  --mu-folder-icon-closed-op3: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M2 10h20"/></svg>');
  --mu-folder-icon-closed-selected: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>');
  --mu-folder-icon-closed-unfilled: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>');
  --mu-folder-icon-color: #0048a3;
  --mu-folder-icon-color-active: #00a3ff;
  --mu-folder-icon-opened-default: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>');
  --mu-folder-icon-opened-op3: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>');
  --mu-folder-icon-opened-selected: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>');
  --mu-folder-icon-opened-unfilled: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>');
  --mu-folder-text-color: #72a3ff;
  --mu-folder-zoom: 82%;
  --mu-font-headings: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --mu-font-mono: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace;
  --mu-font-ui: Inter, Helvetica, Arial, sans-serif;
  --mu-footnote-color: #f07f48;
  --mu-gallery-callout-icon: '<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --><path d="m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z" fill="#00a3ffcf" stroke="none" stroke-width="0"/><path d="m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z" fill="currentColor" stroke="none" stroke-width="0"/></svg>';
  --mu-global-font: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, monospace;
  --mu-global-font-letter-spacing: normal;
  --mu-global-font-size: 16px;
  --mu-global-font-size-value: 16;
  --mu-global-font-stylistic-set: normal;
  --mu-gray-1: #a3a3a3;
  --mu-green-1: #20f120;
  --mu-green-2: #20a320;
  --mu-h1: #00a3ff;
  --mu-h2: #00a3ff;
  --mu-h3: #00a3ff;
  --mu-h4: #00a3ff;
  --mu-h5: #00a3ff;
  --mu-h6: #00a3ff;
  --mu-header-title-drag: no-drag;
  --mu-hover-underline-color: #ff0000cf;
  --mu-hover-underline-offset: 2px;
  --mu-hover-underline-offset-value: 2;
  --mu-hover-underline-style: solid;
  --mu-hover-underline-thickness: 2px;
  --mu-hover-underline-thickness-value: 2;
  --mu-hr-color: #0072d3;
  --mu-icon: #5382d3;
  --mu-icon-active: #007fff;
  --mu-icon-focused: #00a3ff;
  --mu-icon-hover: #007fff;
  --mu-icon-statusbar-menu: #0072d3;
  --mu-indent-color-level-1: #007fff7f;
  --mu-indent-color-level-2: #d372ff7f;
  --mu-indent-color-level-3: #ff7f007f;
  --mu-indent-color-level-4: #00a3487f;
  --mu-indent-color-level-5: #e500007f;
  --mu-indent-color-level-6: #8282007f;
  --mu-inline-code-border: #0072d3;
  --mu-inline-title-font-size: 0.88em;
  --mu-inline-title-font-size-value: 0.88;
  --mu-input-bg-color: #001836;
  --mu-label-h1: #a35fbf;
  --mu-label-h2: #a35fbf;
  --mu-label-h3: #a35fbf;
  --mu-label-h4: #a35fbf;
  --mu-label-h5: #a35fbf;
  --mu-label-h6: #a35fbf;
  --mu-laser-area: 82px;
  --mu-laser-area-value: 82;
  --mu-laser-color-bg: #00f1ff;
  --mu-laser-color-glow: #00a3ff;
  --mu-laser-intensity: 1.5;
  --mu-laser-top: 50%;
  --mu-laser-top-value: 50;
  --mu-line-highlight-background: transparent;
  --mu-line-highlight-border: transparent;
  --mu-link: #d372ff;
  --mu-link-hover: #db8fff;
  --mu-magenta-1: #f100f1;
  --mu-max-letter-spacing: 2px;
  --mu-menu-separator-color: #0072d322;
  --mu-mobile-side-margins: 16px;
  --mu-mobile-side-margins-value: 16;
  --mu-modal-background: #000;
  --mu-neon-mode-glow-intensity: 0.5em;
  --mu-neon-mode-glow-value: 0.5;
  --mu-new-window-border-color: #007fff;
  --mu-new-window-border-value: 1;
  --mu-new-window-border-width: 1px;
  --mu-notes-icon-zoom: 72%;
  --mu-num-table-bg-col: #00000082;
  --mu-num-table-bg-row: #00000022;
  --mu-o-ui-border: #0072d3;
  --mu-properties-container-color: #007fff10;
  --mu-property-color: #00a3ff;
  --mu-property-title-color: #00a3ff;
  --mu-purple-1: #d372ff;
  --mu-purple-2: #a273d8;
  --mu-quote-icon: '<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --><path d="m185 89.2-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.26 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167zm206 0-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.25 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167z" fill="currentColor" stroke="currentColor"/></svg>';
  --mu-rainbow-hue-1: 0;
  --mu-rainbow-hue-10: 270;
  --mu-rainbow-hue-2: 30;
  --mu-rainbow-hue-3: 60;
  --mu-rainbow-hue-4: 90;
  --mu-rainbow-hue-5: 120;
  --mu-rainbow-hue-6: 150;
  --mu-rainbow-hue-7: 180;
  --mu-rainbow-hue-8: 210;
  --mu-rainbow-hue-9: 240;
  --mu-rainbow-hue-start-value: 0;
  --mu-reading-glow-border-size: 3px;
  --mu-reading-glow-border-size-value: 3;
  --mu-reading-glow-color: #00a3ff;
  --mu-reading-glow-radius: 4px;
  --mu-reading-glow-radius-value: 1;
  --mu-reading-indicator-color: #007fffa3;
  --mu-reading-indicator-width: -0.3rem;
  --mu-reading-indicator-width-value-rem: 0.3;
  --mu-scrollbar-thumb-bg: #84848422;
  --mu-scrollbar-thumb-bg-hover: #84848433;
  --mu-scrollbar-thumb-size: 2px;
  --mu-scrollbar-thumb-size-adjusted-value: 2;
  --mu-scrollbar-thumb-size-value: 10;
  --mu-scrollbar-track-bg: transparent;
  --mu-scrollbar-track-bg-hover: #00000021;
  --mu-scrollbar-width: 12px;
  --mu-scrollbar-width-value: 12;
  --mu-sidebar-bottom-vault-profile-bg-color: #001122;
  --mu-sidebar-pane-numbers: #007fff;
  --mu-sidebar-top-buttons-container-bg-color: transparent;
  --mu-special-folder-color: #000;
  --mu-stacked-mode-border-color: #0088ff;
  --mu-stacked-mode-border-value: 1;
  --mu-stacked-mode-border-width: 1px;
  --mu-style-settings-indent-color-1: #007fff7f;
  --mu-style-settings-indent-color-2: #d372ff7f;
  --mu-style-settings-indent-color-3: #ff7f007f;
  --mu-suggestion-color: #00d3ff;
  --mu-suggestion-search-panel-bg-color: #001122;
  --mu-table-color-1: #001122;
  --mu-table-color-2: #002248;
  --mu-table-inner-border-width: 0px;
  --mu-table-inner-border-width-value: 0;
  --mu-table-outer-border-width: 2px;
  --mu-table-outer-border-width-value: 2;
  --mu-table-row-hover: #0088ff33;
  --mu-table-th-background: #004882;
  --mu-table-th-foreground-edit: #f1f1f1;
  --mu-table-th-foreground-main: #e1e1e1;
  --mu-tag-border-color: #0072d3;
  --mu-tags-hashtag-padding: 2px;
  --mu-tags-hashtag-padding-value: 2;
  --mu-text-1: #f1f1f1;
  --mu-text-highlight-fg: #dadada;
  --mu-text-selection: #0051f1a3;
  --mu-text-title: rgb(175, 71, 235);
  --mu-titlebar-background: #003388;
  --mu-titlebar-button-fg: #5382d3;
  --mu-titlebar-text: #f1f1f1;
  --mu-transparency-blur-level: 8px;
  --mu-transparency-blur-level-value: 8;
  --mu-transparency-menus-level: 0.5;
  --mu-underline-text-color-rgb: 255, 40, 72;
  --mu-vault-title: #a273d8;
  --mu-warm-screen-mode: 0;
  --muc-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16px' height='16px' viewBox='0 0 24 24' fill='%23ffff4848' stroke='%23ffbf00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  --muc-icon-active: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16px' height='16px' viewBox='0 0 24 24' fill='%23ffbf00' stroke='%23ffbf00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  --nav-collapse-icon-color: #0072d3;
  --nav-collapse-icon-color-collapsed: #0072d3;
  --nav-indentation-guide-color: #007fff7f;
  --nav-item-background-active: #007fff28;
  --nav-item-background-hover: #007fff28;
  --nav-item-background-selected: #0072d338;
  --nav-item-color: #dadada;
  --nav-item-color-highlighted: rgb(206, 199, 250);
  --nav-item-size: 14px;
  --nav-item-weight-active: 600;
  --nav-item-white-space: nowrap;
  --pdf-background: #002248;
  --pdf-page-background: #002248;
  --pdf-shadow: 0 0 0 1px #007fff38;
  --pdf-sidebar-background: #002248;
  --pdf-thumbnail-shadow: 0 0 0 1px #007fff38;
  --pill-border-color: #007fff38;
  --pill-border-color-hover: #007fff48;
  --pill-color-remove-hover: rgb(170, 153, 245);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: #002248;
  --prompt-border-color: #007fff30;
  --prompt-border-width: 1px;
  --raised-background: color-mix(in srgb, #007fff18 65%, transparent) linear-gradient(#007fff18, color-mix(in srgb, #007fff18 65%, transparent));
  --ribbon-background: #003388;
  --ribbon-background-collapsed: #003388;
  --search-icon-color: #007fff;
  --search-result-background: #002248;
  --setting-group-heading-color: #00a3ff;
  --setting-group-heading-size: 16px;
  --setting-items-background: #001122;
  --setting-items-border-color: #007fff38;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: #007fff48;
  --slider-thumb-border-width: 2px;
  --slider-thumb-radius: 50%;
  --slider-track-background: #007fff38;
  --slider-track-height: 5px;
  --status-bar-background: #001122;
  --status-bar-border-color: #007fff10;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: #f1f1f1;
  --suggestion-background: #002248;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --tab-background-active: #002248;
  --tab-container-background: #001122;
  --tab-divider-color: #003364;
  --tab-font-size: 14px;
  --tab-font-weight: 500;
  --tab-outline-color: #007fff10;
  --tab-outline-width: 0;
  --tab-stacked-font-size: 14px;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #001122;
  --tab-switcher-menubar-background: linear-gradient(to top, #001122, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(139, 108, 239);
  --tab-text-color: #b3b3b3;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-highlighted: #dadada;
  --table-add-button-border-color: #007fff38;
  --table-background: #001122;
  --table-column-first-border-width: 0;
  --table-column-last-border-width: 0;
  --table-drag-handle-background-active: rgb(139, 108, 239);
  --table-header-background: #001122;
  --table-header-border-width: 0;
  --table-header-color: #f1f1f1;
  --table-header-weight: 700;
  --table-row-alt-background: #002248;
  --table-row-alt-background-hover: #001122;
  --table-row-background-hover: #0088ff33;
  --table-row-last-border-width: 0;
  --table-selection: rgba(139, 108, 239, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: rgb(139, 108, 239);
  --table-white-space: normal;
  --tag-background: rgba(139, 108, 239, 0.1);
  --tag-background-hover: rgba(139, 108, 239, 0.2);
  --tag-border-color: #0072d33f;
  --tag-border-color-hover: #00bfff;
  --tag-border-width: 1px;
  --tag-color: rgb(170, 153, 245);
  --tag-color-hover: rgb(206, 199, 250);
  --tag-padding-x: 8px;
  --tag-padding-y: 4px;
  --tag-radius: 1em;
  --tag-radius-value: 1;
  --tag-size: 0.933em;
  --text-accent: rgb(170, 153, 245);
  --text-accent-hover: rgb(206, 199, 250);
  --text-highlight-bg: #ffff0088;
  --text-selection: rgba(139, 108, 239, 0.33);
  --titlebar-background: #003388;
  --titlebar-background-focused: #003388;
  --titlebar-border-color: #007fff38;
  --titlebar-text-color: #f1f1f1;
  --titlebar-text-color-focused: #f1f1f1;
  --titlebar-text-weight: 600;
  --ui-display-vault-title: flex;
  --ui-distraction-free-toggle-button: flex;
  --ui-nav-buttons-container: flex;
  --ui-side-dock-actions: 1;
  --ui-side-dock-settings: 1;
  --ui-status-bar: 1;
  --ui-titlebar-top-left-buttons: 1;
  --ui-view-header-nav-buttons: flex;
  --vault-name-color: #a273d8;
  --vault-name-font-size: 14px;
  --vault-name-font-weight: 500;
  --vault-profile-font-size: 14px;
  --workspace-background-translucent: rgba(0, 0, 0, 0.8);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 17, 34);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 34, 72);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 17, 34);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 127, 255, 0.063);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 17, 34);
  border-left-color: rgba(0, 127, 255, 0.063);
}

body div#quartz-root {
  background-color: rgb(0, 34, 72);
}`,
    typography: `body .text-highlight {
  background-color: rgba(255, 255, 0, 0.533);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 169, 221);
  outline: rgb(0, 169, 221) none 0px;
  text-decoration: underline rgb(0, 169, 221);
  text-decoration-color: rgb(0, 169, 221);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(211, 114, 255);
  outline: rgb(211, 114, 255) none 0px;
  text-decoration: underline rgb(211, 114, 255);
  text-decoration-color: rgb(211, 114, 255);
}

body a.internal.broken {
  color: rgb(211, 114, 255);
  outline: rgb(211, 114, 255) none 0px;
  text-decoration: underline rgba(139, 108, 239, 0.3);
  text-decoration-color: rgba(139, 108, 239, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(0, 34, 72);
}

body ul.overflow {
  background-color: rgb(0, 34, 72);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(207, 207, 207, 0.125);
}`,
    tables: `body table {
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

body tbody tr:nth-child(even) {
  background-color: rgb(0, 17, 34);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(0, 34, 72);
}

body td {
  border-bottom-color: rgb(0, 72, 130);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(0, 72, 130);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

body th {
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

body thead {
  border-bottom-color: rgb(0, 72, 130);
  border-left-color: rgb(0, 72, 130);
  border-right-color: rgb(0, 72, 130);
  border-top-color: rgb(0, 72, 130);
}

body tr {
  background-color: rgb(0, 17, 34);
  border-bottom-color: rgb(0, 72, 130);
  border-left-color: rgb(0, 72, 130);
  border-right-color: rgb(0, 72, 130);
  border-top-color: rgb(0, 72, 130);
}`,
    code: `body code {
  border-bottom-color: rgb(241, 241, 241);
  border-left-color: rgb(241, 241, 241);
  border-right-color: rgb(241, 241, 241);
  border-top-color: rgb(241, 241, 241);
  color: rgb(241, 241, 241);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 17, 34);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 17, 34);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}

body pre > code > [data-line] {
  border-left-color: rgb(72, 241, 72);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(72, 241, 72);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(72, 241, 72);
  border-left-color: rgb(72, 241, 72);
  border-right-color: rgb(72, 241, 72);
  border-top-color: rgb(72, 241, 72);
}

body pre > code, pre:has(> code) {
  background-color: rgb(0, 17, 34);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}

body pre:has(> code) {
  background-color: rgb(0, 17, 34);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}`,
    embeds: `body .file-embed {
  background-color: rgb(33, 33, 33);
}

body .transclude {
  border-left-color: rgb(139, 108, 239);
}

body .transclude-inner {
  border-left-color: rgb(139, 108, 239);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 207, 72);
  text-decoration: underline rgb(0, 207, 72);
  text-decoration-color: rgb(0, 207, 72);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 114, 211);
  border-left-color: rgb(0, 114, 211);
  border-right-color: rgb(0, 114, 211);
  border-top-color: rgb(0, 114, 211);
}`,
    search: `body .search > .search-button {
  background-color: rgb(0, 24, 54);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
  color: rgb(0, 207, 255);
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 127, 255, 0.157);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(0, 24, 54);
  border-bottom-color: rgb(0, 17, 34);
  border-left-color: rgb(0, 207, 255);
  border-right-color: rgb(0, 207, 255);
  border-top-color: rgb(0, 207, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 127, 255, 0.157);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 127, 255, 0.157);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(171, 154, 245);
}

body h1 {
  color: rgb(0, 163, 255);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2 {
  color: rgb(0, 163, 255);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(175, 71, 235);
  font-family: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace;
}

body h3 {
  color: rgb(0, 163, 255);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h4 {
  color: rgb(0, 163, 255);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h5 {
  color: rgb(0, 163, 255);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h6 {
  color: rgb(0, 163, 255);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 127, 255, 0.063);
  border-left-color: rgba(0, 127, 255, 0.063);
  border-right-color: rgba(0, 127, 255, 0.063);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(0, 34, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 72);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 34, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 72);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 34, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 72);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 34, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 72);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 34, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 72);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 34, 72) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 34, 72);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 127, 255, 0.157);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(83, 130, 211);
  border-left-color: rgb(83, 130, 211);
  border-right-color: rgb(83, 130, 211);
  border-top-color: rgb(83, 130, 211);
  color: rgb(83, 130, 211);
}`,
    footer: `body footer {
  background-color: rgb(0, 17, 34);
  border-bottom-color: rgba(0, 127, 255, 0.063);
  border-left-color: rgba(0, 127, 255, 0.063);
  border-right-color: rgba(0, 127, 255, 0.063);
  border-top-color: rgba(0, 127, 255, 0.063);
  color: rgb(241, 241, 241);
}

body footer ul li a {
  color: rgb(241, 241, 241);
  text-decoration: rgb(241, 241, 241);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li {
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

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(218, 218, 218);
}`,
    listPage: `body li.section-li {
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

body li.section-li > .section .meta {
  color: rgb(218, 218, 218);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(218, 218, 218);
  text-decoration: rgb(218, 218, 218);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(83, 130, 211);
  border-left-color: rgb(83, 130, 211);
  border-right-color: rgb(83, 130, 211);
  border-top-color: rgb(83, 130, 211);
  color: rgb(83, 130, 211);
}

body .darkmode svg {
  color: rgb(83, 130, 211);
  stroke: rgb(83, 130, 211);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgba(163, 163, 163, 0.282);
}`,
    misc: `body .metadata {
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

body .metadata-properties {
  font-family: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace;
}

body .navigation-progress {
  background-color: rgb(0, 17, 34);
}

body input[type=text] {
  border-bottom-color: rgb(0, 163, 255);
  border-left-color: rgb(0, 163, 255);
  border-right-color: rgb(0, 163, 255);
  border-top-color: rgb(0, 163, 255);
  color: rgb(0, 163, 255);
}

body kbd {
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
  --accent-h: 254;
  --accent-l: 68%;
  --accent-s: 80%;
  --background-modifier-active-hover: #007fff28;
  --background-modifier-border: #007fff38;
  --background-modifier-border-focus: #007fff;
  --background-modifier-border-hover: #007fff48;
  --background-modifier-form-field: #007fff21;
  --background-modifier-form-field-hover: #007fff21;
  --background-modifier-hover: #007fff28;
  --background-primary: #e8efff;
  --background-primary-alt: #e1e1e1;
  --background-secondary: #d1dfff;
  --background-secondary-alt: #ffffff;
  --bases-cards-background: #e8efff;
  --bases-cards-cover-background: #e1e1e1;
  --bases-cards-shadow: 0 0 0 1px #007fff38;
  --bases-cards-shadow-hover: 0 0 0 1px #007fff48;
  --bases-embed-border-color: #007fff38;
  --bases-group-heading-property-color: #353535;
  --bases-table-border-color: #007fff38;
  --bases-table-cell-background-active: #e8efff;
  --bases-table-cell-background-disabled: transparent;
  --bases-table-cell-background-selected: rgba(139, 108, 239, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #007fff;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(155, 130, 242);
  --bases-table-group-background: #e8efff;
  --bases-table-header-background: #e8efff;
  --bases-table-header-background-hover: #007fff28;
  --bases-table-header-color: #000;
  --bases-table-header-weight: 600;
  --bases-table-row-background-hover: #0088ff33;
  --bases-table-summary-background: #e8efff;
  --bases-table-summary-background-hover: #007fff28;
  --blockquote-background-color: #cfcfcf88;
  --blockquote-border-color: #007fff;
  --blockquote-border-thickness: 4px;
  --blockquote-color: #000;
  --blur-background: color-mix(in srgb, #e8efff 65%, transparent) linear-gradient(#e8efff, color-mix(in srgb, #e8efff 65%, transparent));
  --bold-weight: 700;
  --callout-blend-mode: normal;
  --callout-title-weight: 600;
  --canvas-background: #e8efff;
  --cards-th-display: none;
  --caret-color: #000;
  --checkbox-border-color: #0072d3;
  --checkbox-border-color-hover: #00bfff;
  --checkbox-color: #00bfff;
  --checkbox-color-hover: #00cfff;
  --checkbox-marker-color: #e8efff;
  --checklist-done-color: #00cf48;
  --checklist-done-decoration: underline;
  --code-background: #f1f1ff;
  --code-border-color: #007fff38;
  --code-bracket-background: #007fff28;
  --code-comment: #a3a3a3;
  --code-function: #00a300;
  --code-important: #ff7f00;
  --code-keyword: #c300f1;
  --code-normal: #000;
  --code-operator: #c300f1;
  --code-property: #0048a3;
  --code-punctuation: #c300f1;
  --code-string: #0000f1;
  --code-tag: #c300f1;
  --code-value: #f18f00;
  --collapse-icon-color: #0072d3;
  --collapse-icon-color-collapsed: #0072d3;
  --color-accent: rgb(139, 108, 239);
  --color-accent-1: rgb(155, 130, 242);
  --color-accent-2: rgb(170, 153, 245);
  --color-accent-hsl: 254, 80%, 68%;
  --divider-color: #007fff10;
  --divider-color-hover: #007fff;
  --divider-width: 1px;
  --divider-width-hover: 3px;
  --dropdown-background: #007fff18;
  --dropdown-background-hover: #007fff38;
  --embed-block-shadow-hover: 0 0 0 1px #007fff38, inset 0 0 0 1px #007fff38;
  --embed-border-left: 2px solid #0072d348;
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(155, 130, 242);
  --file-header-background: #e8efff;
  --file-header-background-focused: #e8efff;
  --file-header-border: 1px solid #007fff20;
  --file-header-font-size: 16px;
  --file-header-font-weight: 600;
  --file-header-justify: left;
  --file-line-width: 700px;
  --file-margins: 32px;
  --flair-background: #007fff18;
  --flair-color: #000;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --footnote-divider-color: transparent;
  --footnote-id-color: #353535;
  --footnote-input-background-active: #e8efff;
  --graph-line: #007fff;
  --graph-node: #d372ff;
  --graph-node-attachment: #007fff;
  --graph-node-focused: #0048a3;
  --graph-node-tag: #20cf20;
  --graph-node-unresolved: #a3a3a3;
  --graph-text: #000;
  --h1-color: #0072d3;
  --h1-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --h1-size: 2em;
  --h1-weight: 800;
  --h2-color: #0072d3;
  --h2-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --h2-size: 1.5em;
  --h2-weight: 800;
  --h3-color: #0072d3;
  --h3-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --h3-size: 1.17em;
  --h3-weight: 800;
  --h4-color: #0072d3;
  --h4-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --h4-size: 1em;
  --h4-weight: 800;
  --h5-color: #0072d3;
  --h5-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --h5-size: .83em;
  --h5-weight: 800;
  --h6-color: #0072d3;
  --h6-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --h6-size: .67em;
  --h6-weight: 800;
  --heading-spacing: 2.5rem;
  --hidden-text-underline-background-color: #ffff0088;
  --hidden-text-underline-foreground-color: #000;
  --highlight-mix-blend-mode: normal;
  --hr-color: #0072d3;
  --hr-thickness: 1px;
  --icon-color: #5382d3;
  --icon-color-active: #007fff;
  --icon-color-focused: #00a3ff;
  --icon-color-hover: #007fff;
  --icon-opacity: 0.95;
  --indentation-guide-color: #007fff7f;
  --indentation-guide-color-active: #bf00ff;
  --inline-title-color: #0072d3;
  --inline-title-font: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --inline-title-margin-bottom: .5em;
  --inline-title-size: 2em;
  --inline-title-weight: 800;
  --interactive-accent: rgb(155, 130, 242);
  --interactive-accent-hover: rgb(170, 153, 245);
  --interactive-accent-hsl: 254, 80%, 68%;
  --interactive-hover: #007fff38;
  --interactive-normal: #007fff18;
  --link-color: #a200ff;
  --link-color-hover: #c300ff;
  --link-external-color: #0033ff;
  --link-external-color-hover: #00a3ff;
  --link-unresolved-color: #a200ff;
  --link-unresolved-decoration-color: rgba(139, 108, 239, 0.3);
  --list-indent: 2em;
  --list-marker-color: #007fff;
  --list-marker-color-collapsed: #f100f1;
  --list-marker-color-hover: #007fff;
  --menu-background: #d1dfff;
  --menu-border-color: #007fff48;
  --metadata-border-color: transparent;
  --metadata-divider-color: transparent;
  --metadata-gap: 2px;
  --metadata-input-background-active: #e8efff;
  --metadata-input-font-size: 0.933em;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #000;
  --metadata-label-background-active: #e8efff;
  --metadata-label-font-size: 0.933em;
  --metadata-label-text-color: #0072d3;
  --metadata-label-text-color-hover: #00bfff;
  --metadata-padding: 8px 2px;
  --metadata-property-background-active: transparent;
  --metadata-property-box-shadow-focus: 0 0 0 2px #007fff;
  --metadata-property-box-shadow-hover: 0 0 0 1px #007fff48;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: #e8efff;
  --modal-border-color: #007fff30;
  --modal-border-width: 1px;
  --modal-height: 92vh;
  --mu-amulet-hue: 224;
  --mu-amulet-sat: 50%;
  --mu-amulet-sat-value: 50;
  --mu-background-color-1: #e8efff;
  --mu-background-color-2: #d1dfff;
  --mu-bg-image-overlay: 0.0;
  --mu-bg-search-results: #001836;
  --mu-blockquote-background: #cfcfcf88;
  --mu-blockquote-border: #007fff;
  --mu-bookmarked-note-icon-bg: #007fff30;
  --mu-border-width: 1px;
  --mu-border-width-value: 1;
  --mu-box-callout-icon: '<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --><path d="m135 97.8h242c20.6 0 37.3 17.2 37.3 38.7v239c0 21.4-16.6 38.7-37.3 38.7h-242c-20.6 0-37.3-17.2-37.3-38.7v-239c0-21.4 16.6-38.7 37.3-38.7z" fill="currentColor" fill-rule="evenodd"/></svg>';
  --mu-callout-blue: 0, 136, 255;
  --mu-callout-book: 0, 163, 255;
  --mu-callout-comment: 0, 188, 188;
  --mu-callout-con: 228, 48, 48;
  --mu-callout-green: 0, 180, 88;
  --mu-callout-link: 48, 142, 255;
  --mu-callout-magic: 207, 88, 255;
  --mu-callout-mic: 0, 188, 82;
  --mu-callout-orange: 255, 97, 0;
  --mu-callout-paperclip: 255, 163, 33;
  --mu-callout-pink: 255, 18, 241;
  --mu-callout-pro: 0, 197, 88;
  --mu-callout-purple: 201, 0, 255;
  --mu-callout-red: 255, 48, 48;
  --mu-callout-target: 255, 72, 72;
  --mu-callout-video: 237, 48, 48;
  --mu-callout-yellow: 237, 188, 0;
  --mu-cards-border: #e8efff;
  --mu-caret-color: #cf00ff;
  --mu-code-attribute: #e50000;
  --mu-code-block-border: #0072d3;
  --mu-collapse-icon-size: 1.2;
  --mu-color-lig: #007fff;
  --mu-column-stripped-background: #00000011;
  --mu-dark-sidebar-color: #001122;
  --mu-default-mode-border-color: #0088ff;
  --mu-default-mode-border-value: 1;
  --mu-default-mode-border-width: 1px;
  --mu-divider-color: #007fff10;
  --mu-divider-color-hover: #007fff;
  --mu-divider-hover-width-value: 3;
  --mu-divider-width-value: 1;
  --mu-external-link: #0033ff;
  --mu-external-link-hover: #00a3ff;
  --mu-fc-answer-border-color: #bf00ff;
  --mu-fc-bg-color: #007fff20;
  --mu-fc-fg-color: #000;
  --mu-fc-height: 400px;
  --mu-fc-height-value: 400;
  --mu-fc-width: 280px;
  --mu-fc-width-value: 280;
  --mu-file-header-border-color: #007fff20;
  --mu-file-header-border-value: 1;
  --mu-file-header-border-width: 1px;
  --mu-file-icon-color: #0072d3;
  --mu-file-line-width-value: 700;
  --mu-folder-area-background: #007fff10;
  --mu-folder-area-border: #007fff30;
  --mu-folder-icon-closed-default: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>');
  --mu-folder-icon-closed-op3: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="M2 10h20"/></svg>');
  --mu-folder-icon-closed-selected: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>');
  --mu-folder-icon-closed-unfilled: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>');
  --mu-folder-icon-color: #0048a3;
  --mu-folder-icon-color-active: #00a3ff;
  --mu-folder-icon-opened-default: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>');
  --mu-folder-icon-opened-op3: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>');
  --mu-folder-icon-opened-selected: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>');
  --mu-folder-icon-opened-unfilled: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>');
  --mu-folder-text-color: #0048a3;
  --mu-folder-zoom: 82%;
  --mu-font-headings: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --mu-font-mono: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace;
  --mu-font-ui: Inter, Helvetica, Arial, sans-serif;
  --mu-footnote-color: #f07f48;
  --mu-gallery-callout-icon: '<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --><path d="m304 45c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm-245 240c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142zm245 0c-12 0-22 10-22 23v140c0 13 10 23 22 23h142c12 0 22-10 22-23v-140c0-13-10-23-22-23h-142z" fill="#00a3ffcf" stroke="none" stroke-width="0"/><path d="m61 47h142c12 0 22 10 22 23v140c0 13-10 23-22 23h-142c-12 0-22-10-22-23v-140c0-13 10-23 22-23z" fill="currentColor" stroke="none" stroke-width="0"/></svg>';
  --mu-global-font: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, monospace;
  --mu-global-font-letter-spacing: normal;
  --mu-global-font-size: 16px;
  --mu-global-font-size-value: 16;
  --mu-global-font-stylistic-set: normal;
  --mu-gray-1: #a3a3a3;
  --mu-green-1: #20cf20;
  --mu-green-2: #20a320;
  --mu-h1: #0072d3;
  --mu-h2: #0072d3;
  --mu-h3: #0072d3;
  --mu-h4: #0072d3;
  --mu-h5: #0072d3;
  --mu-h6: #0072d3;
  --mu-header-title-drag: no-drag;
  --mu-hover-underline-color: #ff0000cf;
  --mu-hover-underline-offset: 2px;
  --mu-hover-underline-offset-value: 2;
  --mu-hover-underline-style: solid;
  --mu-hover-underline-thickness: 2px;
  --mu-hover-underline-thickness-value: 2;
  --mu-hr-color: #0072d3;
  --mu-icon: #5382d3;
  --mu-icon-active: #007fff;
  --mu-icon-focused: #00a3ff;
  --mu-icon-hover: #007fff;
  --mu-icon-statusbar-menu: #0072d3;
  --mu-indent-color-level-1: #007fff7f;
  --mu-indent-color-level-2: #d372ff7f;
  --mu-indent-color-level-3: #ff7f007f;
  --mu-indent-color-level-4: #00a3487f;
  --mu-indent-color-level-5: #e500007f;
  --mu-indent-color-level-6: #8282007f;
  --mu-inline-code-border: #0072d3;
  --mu-inline-title-font-size: 0.88em;
  --mu-inline-title-font-size-value: 0.88;
  --mu-input-bg-color: #fff;
  --mu-label-h1: #bf72d8;
  --mu-label-h2: #bf72d8;
  --mu-label-h3: #bf72d8;
  --mu-label-h4: #bf72d8;
  --mu-label-h5: #bf72d8;
  --mu-label-h6: #bf72d8;
  --mu-laser-area: 82px;
  --mu-laser-area-value: 82;
  --mu-laser-color-bg: #00a3ff;
  --mu-laser-color-glow: #00a3ff88;
  --mu-laser-intensity: 1.5;
  --mu-laser-top: 50%;
  --mu-laser-top-value: 50;
  --mu-line-highlight-background: transparent;
  --mu-line-highlight-border: transparent;
  --mu-link: #a200ff;
  --mu-link-hover: #c300ff;
  --mu-magenta-1: #f100f1;
  --mu-max-letter-spacing: 2px;
  --mu-menu-separator-color: #0072d322;
  --mu-mobile-side-margins: 16px;
  --mu-mobile-side-margins-value: 16;
  --mu-modal-background: #cfcfcf;
  --mu-neon-mode-glow-intensity: 0.5em;
  --mu-neon-mode-glow-value: 0.5;
  --mu-new-window-border-color: #007fff;
  --mu-new-window-border-value: 1;
  --mu-new-window-border-width: 1px;
  --mu-notes-icon-zoom: 72%;
  --mu-num-table-bg-col: #00000082;
  --mu-num-table-bg-row: #00000022;
  --mu-o-ui-border: #0072d3;
  --mu-properties-container-color: #007fff10;
  --mu-property-color: #0072d3;
  --mu-property-title-color: #0072d3;
  --mu-purple-1: #d372ff;
  --mu-purple-2: #b10aff;
  --mu-quote-icon: '<svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><!-- MagicUser Theme for Obsidian (c) Bernardo Pires (drbap) --><path d="m185 89.2-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.26 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167zm206 0-124 177a84.4 91.3 0 0 0-15.6 22.2l-5.09 7.25 2.05-0.186a84.4 91.3 0 0 0-7.11 35.9 84.4 91.3 0 0 0 84.4 91.3 84.4 91.3 0 0 0 84.4-91.3 84.4 91.3 0 0 0-36.5-74.8l103-167z" fill="currentColor" stroke="currentColor"/></svg>';
  --mu-rainbow-hue-1: 0;
  --mu-rainbow-hue-10: 270;
  --mu-rainbow-hue-2: 30;
  --mu-rainbow-hue-3: 60;
  --mu-rainbow-hue-4: 90;
  --mu-rainbow-hue-5: 120;
  --mu-rainbow-hue-6: 150;
  --mu-rainbow-hue-7: 180;
  --mu-rainbow-hue-8: 210;
  --mu-rainbow-hue-9: 240;
  --mu-rainbow-hue-start-value: 0;
  --mu-reading-glow-border-size: 3px;
  --mu-reading-glow-border-size-value: 3;
  --mu-reading-glow-color: #00a3ff;
  --mu-reading-glow-radius: 4px;
  --mu-reading-glow-radius-value: 1;
  --mu-reading-indicator-color: #007fffa3;
  --mu-reading-indicator-width: -0.3rem;
  --mu-reading-indicator-width-value-rem: 0.3;
  --mu-scrollbar-thumb-bg: #48484822;
  --mu-scrollbar-thumb-bg-hover: #48484833;
  --mu-scrollbar-thumb-size: 2px;
  --mu-scrollbar-thumb-size-adjusted-value: 2;
  --mu-scrollbar-thumb-size-value: 10;
  --mu-scrollbar-track-bg: transparent;
  --mu-scrollbar-track-bg-hover: #82828221;
  --mu-scrollbar-width: 12px;
  --mu-scrollbar-width-value: 12;
  --mu-sidebar-bottom-vault-profile-bg-color: #d1dfff;
  --mu-sidebar-pane-numbers: #007fff;
  --mu-sidebar-top-buttons-container-bg-color: transparent;
  --mu-special-folder-color: #000;
  --mu-stacked-mode-border-color: #0088ff;
  --mu-stacked-mode-border-value: 1;
  --mu-stacked-mode-border-width: 1px;
  --mu-style-settings-indent-color-1: #007fff7f;
  --mu-style-settings-indent-color-2: #d372ff7f;
  --mu-style-settings-indent-color-3: #ff7f007f;
  --mu-suggestion-color: #0072d3;
  --mu-suggestion-search-panel-bg-color: #d1dfff;
  --mu-table-color-1: #d1dfff;
  --mu-table-color-2: #e8efff;
  --mu-table-inner-border-width: 0px;
  --mu-table-inner-border-width-value: 0;
  --mu-table-outer-border-width: 2px;
  --mu-table-outer-border-width-value: 2;
  --mu-table-row-hover: #0088ff33;
  --mu-table-th-background: #004882;
  --mu-table-th-foreground-edit: #000;
  --mu-table-th-foreground-main: #e1e1e1;
  --mu-tag-border-color: #0072d3;
  --mu-tags-hashtag-padding: 2px;
  --mu-tags-hashtag-padding-value: 2;
  --mu-text-1: #000;
  --mu-text-highlight-fg: #000;
  --mu-text-selection: #0051f136;
  --mu-text-title: #a300cf;
  --mu-titlebar-background: #003388;
  --mu-titlebar-button-fg: #5382d3;
  --mu-titlebar-text: #f1f1f1;
  --mu-transparency-blur-level: 8px;
  --mu-transparency-blur-level-value: 8;
  --mu-transparency-menus-level: 0.5;
  --mu-underline-text-color-rgb: 255, 40, 72;
  --mu-vault-title: #a300cf;
  --mu-warm-screen-mode: 0;
  --muc-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16px' height='16px' viewBox='0 0 24 24' fill='%23ffff4848' stroke='%23ffbf00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  --muc-icon-active: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16px' height='16px' viewBox='0 0 24 24' fill='%23ffbf00' stroke='%23ffbf00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/%3E%3C/svg%3E");
  --nav-collapse-icon-color: #0072d3;
  --nav-collapse-icon-color-collapsed: #0072d3;
  --nav-heading-color: #000;
  --nav-heading-color-collapsed-hover: #353535;
  --nav-heading-color-hover: #000;
  --nav-indentation-guide-color: #007fff7f;
  --nav-item-background-active: #007fff28;
  --nav-item-background-hover: #007fff28;
  --nav-item-background-selected: #0072d338;
  --nav-item-color: #000;
  --nav-item-color-active: #000;
  --nav-item-color-highlighted: rgb(170, 153, 245);
  --nav-item-color-hover: #000;
  --nav-item-color-selected: #000;
  --nav-item-size: 14px;
  --nav-item-weight-active: 600;
  --nav-item-white-space: nowrap;
  --nav-tag-color-active: #353535;
  --nav-tag-color-hover: #353535;
  --pdf-background: #e8efff;
  --pdf-page-background: #e8efff;
  --pdf-sidebar-background: #e8efff;
  --pill-border-color: #007fff38;
  --pill-border-color-hover: #007fff48;
  --pill-color: #353535;
  --pill-color-hover: #000;
  --pill-color-remove-hover: rgb(139, 108, 239);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: #e8efff;
  --prompt-border-color: #007fff30;
  --prompt-border-width: 1px;
  --raised-background: color-mix(in srgb, #e8efff 65%, transparent) linear-gradient(#e8efff, color-mix(in srgb, #e8efff 65%, transparent));
  --ribbon-background: #003388;
  --ribbon-background-collapsed: #003388;
  --search-clear-button-color: #353535;
  --search-icon-color: #007fff;
  --search-result-background: #e8efff;
  --setting-group-heading-color: #0048f1;
  --setting-group-heading-size: 16px;
  --setting-items-background: #d1dfff;
  --setting-items-border-color: #007fff38;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: #007fff48;
  --slider-thumb-border-width: 2px;
  --slider-thumb-radius: 50%;
  --slider-track-background: #007fff38;
  --slider-track-height: 5px;
  --status-bar-background: #d1dfff;
  --status-bar-border-color: #007fff10;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: #000;
  --suggestion-background: #e8efff;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --tab-background-active: #e8efff;
  --tab-container-background: #d1dfff;
  --tab-divider-color: #003364;
  --tab-font-size: 14px;
  --tab-font-weight: 500;
  --tab-outline-color: #007fff10;
  --tab-outline-width: 0;
  --tab-stacked-font-size: 14px;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #d1dfff;
  --tab-switcher-menubar-background: linear-gradient(to top, #d1dfff, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(139, 108, 239);
  --tab-text-color: #353535;
  --tab-text-color-active: #353535;
  --tab-text-color-focused: #353535;
  --tab-text-color-focused-active: #000;
  --tab-text-color-focused-active-current: #000;
  --tab-text-color-focused-highlighted: #000;
  --table-add-button-border-color: #007fff38;
  --table-background: #d1dfff;
  --table-column-first-border-width: 0;
  --table-column-last-border-width: 0;
  --table-drag-handle-background-active: rgb(155, 130, 242);
  --table-header-background: #d1dfff;
  --table-header-border-width: 0;
  --table-header-color: #000;
  --table-header-weight: 700;
  --table-row-alt-background: #e8efff;
  --table-row-alt-background-hover: #d1dfff;
  --table-row-background-hover: #0088ff33;
  --table-row-last-border-width: 0;
  --table-selection: rgba(139, 108, 239, 0.1);
  --table-selection-blend-mode: normal;
  --table-selection-border-color: rgb(155, 130, 242);
  --table-white-space: normal;
  --tag-background: rgba(139, 108, 239, 0.1);
  --tag-background-hover: rgba(139, 108, 239, 0.2);
  --tag-border-color: #0072d33f;
  --tag-border-color-hover: #00bfff;
  --tag-border-width: 1px;
  --tag-color: rgb(139, 108, 239);
  --tag-color-hover: rgb(170, 153, 245);
  --tag-padding-x: 8px;
  --tag-padding-y: 4px;
  --tag-radius: 1em;
  --tag-radius-value: 1;
  --tag-size: 0.933em;
  --text-accent: rgb(139, 108, 239);
  --text-accent-hover: rgb(170, 153, 245);
  --text-highlight-bg: #ffff0088;
  --text-muted: #353535;
  --text-normal: #000;
  --text-selection: rgba(139, 108, 239, 0.2);
  --titlebar-background: #003388;
  --titlebar-background-focused: #003388;
  --titlebar-border-color: #007fff38;
  --titlebar-text-color: #f1f1f1;
  --titlebar-text-color-focused: #f1f1f1;
  --titlebar-text-weight: 600;
  --ui-display-vault-title: flex;
  --ui-distraction-free-toggle-button: flex;
  --ui-nav-buttons-container: flex;
  --ui-side-dock-actions: 1;
  --ui-side-dock-settings: 1;
  --ui-status-bar: 1;
  --ui-titlebar-top-left-buttons: 1;
  --ui-view-header-nav-buttons: flex;
  --vault-name-color: #a300cf;
  --vault-name-font-size: 14px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #000;
  --vault-profile-color-hover: #000;
  --vault-profile-font-size: 14px;
  --workspace-background-translucent: rgba(255, 255, 255, 0.8);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(209, 223, 255);
  color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(209, 223, 255);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(209, 223, 255);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 127, 255, 0.063);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(209, 223, 255);
  border-left-color: rgba(0, 127, 255, 0.063);
  color: rgb(0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(232, 239, 255);
  color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  background-color: rgba(255, 255, 0, 0.533);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body p {
  color: rgb(53, 53, 53);
  outline: rgb(53, 53, 53) none 0px;
  text-decoration: rgb(53, 53, 53);
  text-decoration-color: rgb(53, 53, 53);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 51, 255);
  outline: rgb(0, 51, 255) none 0px;
  text-decoration: underline rgb(0, 51, 255);
  text-decoration-color: rgb(0, 51, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(162, 0, 255);
  outline: rgb(162, 0, 255) none 0px;
  text-decoration: underline rgb(162, 0, 255);
  text-decoration-color: rgb(162, 0, 255);
}

body a.internal.broken {
  color: rgb(162, 0, 255);
  outline: rgb(162, 0, 255) none 0px;
  text-decoration: underline rgba(139, 108, 239, 0.3);
  text-decoration-color: rgba(139, 108, 239, 0.3);
}`,
    lists: `body dd {
  color: rgb(0, 0, 0);
}

body dt {
  color: rgb(0, 0, 0);
}

body ol > li {
  color: rgb(0, 0, 0);
}

body ol.overflow {
  background-color: rgb(232, 239, 255);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ul > li {
  color: rgb(0, 0, 0);
}

body ul.overflow {
  background-color: rgb(232, 239, 255);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(207, 207, 207, 0.533);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body table {
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

body tbody tr:nth-child(even) {
  background-color: rgb(209, 223, 255);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(232, 239, 255);
}

body td {
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

body th {
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

body thead {
  border-bottom-color: rgb(0, 72, 130);
  border-left-color: rgb(0, 72, 130);
  border-right-color: rgb(0, 72, 130);
  border-top-color: rgb(0, 72, 130);
}

body tr {
  background-color: rgb(209, 223, 255);
  border-bottom-color: rgb(0, 72, 130);
  border-left-color: rgb(0, 72, 130);
  border-right-color: rgb(0, 72, 130);
  border-top-color: rgb(0, 72, 130);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(241, 241, 255);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(241, 241, 255);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
  color: rgb(0, 0, 0);
}

body pre > code > [data-line] {
  border-left-color: rgb(0, 163, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(0, 163, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(0, 163, 0);
  border-left-color: rgb(0, 163, 0);
  border-right-color: rgb(0, 163, 0);
  border-top-color: rgb(0, 163, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(241, 241, 255);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}

body pre:has(> code) {
  background-color: rgb(241, 241, 255);
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
}`,
    images: `body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body figcaption {
  color: rgb(0, 0, 0);
}

body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `body .file-embed {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(53, 53, 53);
  border-left-color: rgb(53, 53, 53);
  border-right-color: rgb(53, 53, 53);
  border-top-color: rgb(53, 53, 53);
}

body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(155, 131, 242);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(155, 131, 242);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 207, 72);
  text-decoration: underline rgb(0, 207, 72);
  text-decoration-color: rgb(0, 207, 72);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 114, 211);
  border-left-color: rgb(0, 114, 211);
  border-right-color: rgb(0, 114, 211);
  border-top-color: rgb(0, 114, 211);
}

body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(0, 127, 255, 0.22);
  border-left-color: rgba(0, 127, 255, 0.22);
  border-right-color: rgba(0, 127, 255, 0.22);
  border-top-color: rgba(0, 127, 255, 0.22);
  color: rgb(207, 0, 255);
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 127, 255, 0.157);
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(209, 223, 255);
  border-left-color: rgb(207, 0, 255);
  border-right-color: rgb(207, 0, 255);
  border-top-color: rgb(207, 0, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 127, 255, 0.157);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 127, 255, 0.157);
  color: rgb(0, 0, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(139, 108, 239);
}

body h1 {
  color: rgb(0, 114, 211);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2 {
  color: rgb(0, 114, 211);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(163, 0, 207);
  font-family: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace;
}

body h3 {
  color: rgb(0, 114, 211);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h4 {
  color: rgb(0, 114, 211);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h5 {
  color: rgb(0, 114, 211);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body h6 {
  color: rgb(0, 114, 211);
  font-family: system, BlinkMacSystemFont, Inter, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 127, 255, 0.063);
  border-left-color: rgba(0, 127, 255, 0.063);
  border-right-color: rgba(0, 127, 255, 0.063);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(232, 239, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 239, 255);
}

body ::-webkit-scrollbar-corner {
  background: rgb(232, 239, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 239, 255);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(232, 239, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 239, 255);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(232, 239, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 239, 255);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(232, 239, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 239, 255);
}

body ::-webkit-scrollbar-track {
  background: rgb(232, 239, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 239, 255);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 127, 255, 0.157);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(83, 130, 211);
  border-left-color: rgb(83, 130, 211);
  border-right-color: rgb(83, 130, 211);
  border-top-color: rgb(83, 130, 211);
  color: rgb(83, 130, 211);
}`,
    footer: `body footer {
  background-color: rgb(209, 223, 255);
  border-bottom-color: rgba(0, 127, 255, 0.063);
  border-left-color: rgba(0, 127, 255, 0.063);
  border-right-color: rgba(0, 127, 255, 0.063);
  border-top-color: rgba(0, 127, 255, 0.063);
  color: rgb(0, 0, 0);
}

body footer ul li a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li {
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

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
}`,
    listPage: `body li.section-li {
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

body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(83, 130, 211);
  border-left-color: rgb(83, 130, 211);
  border-right-color: rgb(83, 130, 211);
  border-top-color: rgb(83, 130, 211);
  color: rgb(83, 130, 211);
}

body .darkmode svg {
  color: rgb(83, 130, 211);
  stroke: rgb(83, 130, 211);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgba(163, 163, 163, 0.282);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .metadata {
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

body .metadata-properties {
  border-bottom-color: rgb(53, 53, 53);
  border-left-color: rgb(53, 53, 53);
  border-right-color: rgb(53, 53, 53);
  border-top-color: rgb(53, 53, 53);
  color: rgb(53, 53, 53);
  font-family: "JetBrains Mono", Consolas, "Roboto Mono", Menlo, Monaco, "Courier New", monospace;
}

body .navigation-progress {
  background-color: rgb(209, 223, 255);
}

body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body input[type=text] {
  border-bottom-color: rgb(0, 114, 211);
  border-left-color: rgb(0, 114, 211);
  border-right-color: rgb(0, 114, 211);
  border-top-color: rgb(0, 114, 211);
  color: rgb(0, 114, 211);
}

body kbd {
  background-color: rgb(241, 241, 255);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body sub {
  color: rgb(0, 0, 0);
}

body summary {
  color: rgb(0, 0, 0);
}

body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
