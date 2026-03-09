import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "prism",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono", "source-sans-3"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-border-width: 2px;
  --background-modifier-active-hover: rgba(188, 158, 224, 0.1);
  --background-modifier-border: rgb(77, 77, 77);
  --background-modifier-border-focus: rgb(132, 76, 184);
  --background-modifier-border-hover: rgb(132, 76, 184);
  --background-modifier-error: rgb(238, 146, 140);
  --background-modifier-error-hover: rgb(238, 146, 140);
  --background-modifier-form-field: rgb(20, 20, 20);
  --background-modifier-form-field-hover: rgb(20, 20, 20);
  --background-modifier-hover: rgba(54, 28, 79, 0.9);
  --background-modifier-success: rgb(81, 194, 89);
  --background-primary: rgb(46, 46, 46);
  --background-primary-alt: rgb(77, 77, 77);
  --background-primary-alt-hsl: 0, 0%, 30%;
  --background-primary-blur: rgb(46, 46, 46);
  --background-primary-hsl: 0, 0%, 18%;
  --background-secondary: rgb(31, 31, 31);
  --background-secondary-alt: rgb(20, 20, 20);
  --background-secondary-alt-blur: rgba(20, 20, 20, 0.8);
  --background-secondary-alt-hsl: 0, 0%, 8%;
  --background-secondary-blur: rgba(33, 33, 33, 0.8);
  --background-secondary-blur-hsl: 0, 0%, 13%;
  --background-secondary-hsl: 0, 0%, 12%;
  --bases-cards-background: rgb(46, 46, 46);
  --bases-cards-cover-background: rgb(77, 77, 77);
  --bases-cards-shadow: 0 0 0 1px rgb(77, 77, 77);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(132, 76, 184);
  --bases-embed-border-color: rgb(77, 77, 77);
  --bases-group-heading-property-color: rgb(219, 219, 219);
  --bases-table-border-color: rgb(77, 77, 77);
  --bases-table-cell-background-active: rgb(20, 20, 20);
  --bases-table-cell-background-disabled: rgb(31, 31, 31);
  --bases-table-cell-background-selected: rgba(188, 158, 224, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(132, 76, 184);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(132, 76, 184);
  --bases-table-group-background: rgb(77, 77, 77);
  --bases-table-header-background: rgb(20, 20, 20);
  --bases-table-header-background-hover: rgba(54, 28, 79, 0.9);
  --bases-table-header-color: rgb(219, 219, 219);
  --bases-table-summary-background: rgb(46, 46, 46);
  --bases-table-summary-background-hover: rgba(54, 28, 79, 0.9);
  --blockquote-background-color: rgb(31, 31, 31);
  --blockquote-border-color: rgb(77, 77, 77);
  --blur-background: color-mix(in srgb, rgb(31, 31, 31) 65%, transparent) linear-gradient(rgb(31, 31, 31), color-mix(in srgb, rgb(31, 31, 31) 65%, transparent));
  --blur-intensity: 8px;
  --bold-color: rgb(232, 232, 232);
  --button-radius: 4px;
  --callout-background-alpha: 20%;
  --callout-padding: 4px;
  --callout-radius: 8px;
  --canvas-background: rgb(46, 46, 46);
  --canvas-background-color: 0, 0%, 16%;
  --canvas-card-label-color: rgb(207, 207, 207);
  --canvas-color: 0, 0%, 40%;
  --canvas-dot-pattern: rgba(77, 77, 77, 0.8);
  --canvas-highlight-color: 0, 0%, 67%;
  --caret-color: rgb(232, 232, 232);
  --cg-nt-tbar-bg-color: rgb(31, 31, 31);
  --cg-nt-tbar-top-sticky-pos-desktop: -33px;
  --checkbox-border-color: rgb(77, 77, 77);
  --checkbox-border-color-hover: rgb(132, 76, 184);
  --checkbox-color: rgb(46, 46, 46);
  --checkbox-color-hover: rgb(132, 76, 184);
  --checkbox-marker-color: rgb(188, 158, 224);
  --checklist-done-color: rgb(132, 76, 184);
  --code-background: rgb(20, 20, 20);
  --code-border-color: rgb(77, 77, 77);
  --code-border-width: 1px;
  --code-bracket-background: rgba(54, 28, 79, 0.9);
  --code-comment: rgb(171, 171, 171);
  --code-function: rgb(207, 169, 63);
  --code-important: rgb(241, 150, 80);
  --code-keyword: rgb(231, 146, 189);
  --code-normal: rgb(232, 232, 232);
  --code-operator: rgb(238, 146, 140);
  --code-property: rgb(74, 185, 222);
  --code-punctuation: rgb(219, 219, 219);
  --code-string: rgb(81, 194, 89);
  --code-tag: rgb(238, 146, 140);
  --code-value: rgb(188, 158, 224);
  --collapse-icon-color: rgb(207, 207, 207);
  --collapse-icon-color-collapsed: rgb(232, 232, 232);
  --color-accent: rgb(188, 158, 224);
  --color-accent-1: rgb(132, 76, 184);
  --color-accent-2: rgb(54, 28, 79);
  --color-accent-base-dt: 2, 55%, 19%;
  --color-accent-base-lt: 2, 55%, 19%;
  --color-accent-hsl: 267, 52%, 75%;
  --color-accent-text-dt: 4, 74%, 74%;
  --color-accent-text-lt: 4, 74%, 74%;
  --color-accent-tint-dt: 3, 49%, 46%;
  --color-accent-tint-lt: 3, 49%, 46%;
  --color-blue: rgb(152, 172, 230);
  --color-blue-base: rgb(25, 38, 77);
  --color-blue-base-hsl: 225, 50%, 20%;
  --color-blue-text: rgb(152, 172, 230);
  --color-blue-text-hsl: 225, 61%, 75%;
  --color-blue-tint: rgb(70, 99, 180);
  --color-blue-tint-hsl: 224, 44%, 49%;
  --color-cyan: rgb(74, 185, 222);
  --color-cyan-base: rgb(12, 44, 55);
  --color-cyan-base-hsl: 195, 65%, 13%;
  --color-cyan-text: rgb(74, 185, 222);
  --color-cyan-text-hsl: 195, 69%, 58%;
  --color-cyan-tint: rgb(42, 109, 132);
  --color-cyan-tint-hsl: 195, 52%, 34%;
  --color-green: rgb(81, 194, 89);
  --color-green-base: rgb(14, 47, 16);
  --color-green-base-hsl: 124, 54%, 12%;
  --color-green-text: rgb(81, 194, 89);
  --color-green-text-hsl: 124, 48%, 54%;
  --color-green-tint: rgb(47, 117, 50);
  --color-green-tint-hsl: 123, 43%, 32%;
  --color-grey-base: rgb(41, 41, 41);
  --color-grey-base-hsl: 0, 0%, 16%;
  --color-grey-text: rgb(171, 171, 171);
  --color-grey-text-hsl: 0, 0%, 67%;
  --color-grey-tint: rgb(102, 102, 102);
  --color-grey-tint-hsl: 0, 0%, 40%;
  --color-mint-base: rgb(3, 48, 37);
  --color-mint-base-hsl: 165, 88%, 10%;
  --color-mint-text: rgb(38, 192, 156);
  --color-mint-text-hsl: 166, 67%, 45%;
  --color-mint-tint: rgb(18, 115, 92);
  --color-mint-tint-hsl: 166, 73%, 26%;
  --color-orange: rgb(241, 150, 80);
  --color-orange-base: rgb(63, 35, 13);
  --color-orange-base-hsl: 26, 65%, 15%;
  --color-orange-text: rgb(241, 150, 80);
  --color-orange-text-hsl: 26, 85%, 63%;
  --color-orange-tint: rgb(144, 89, 44);
  --color-orange-tint-hsl: 27, 53%, 37%;
  --color-pink: rgb(231, 146, 189);
  --color-pink-base: rgb(71, 21, 50);
  --color-pink-base-hsl: 325, 55%, 18%;
  --color-pink-text: rgb(231, 146, 189);
  --color-pink-text-hsl: 330, 64%, 74%;
  --color-pink-tint: rgb(169, 61, 124);
  --color-pink-tint-hsl: 325, 47%, 45%;
  --color-purple: rgb(188, 158, 224);
  --color-purple-base: rgb(54, 28, 79);
  --color-purple-base-hsl: 271, 48%, 21%;
  --color-purple-text: rgb(188, 158, 224);
  --color-purple-text-hsl: 267, 52%, 75%;
  --color-purple-tint: rgb(132, 76, 184);
  --color-purple-tint-hsl: 271, 43%, 51%;
  --color-red: rgb(238, 146, 140);
  --color-red-base: rgb(75, 24, 22);
  --color-red-base-hsl: 2, 55%, 19%;
  --color-red-text: rgb(238, 146, 140);
  --color-red-text-hsl: 4, 74%, 74%;
  --color-red-tint: rgb(175, 66, 60);
  --color-red-tint-hsl: 3, 49%, 46%;
  --color-yellow: rgb(207, 169, 63);
  --color-yellow-base: rgb(53, 40, 8);
  --color-yellow-base-hsl: 43, 73%, 12%;
  --color-yellow-text: rgb(207, 169, 63);
  --color-yellow-text-hsl: 44, 60%, 53%;
  --color-yellow-tint: rgb(126, 101, 32);
  --color-yellow-tint-hsl: 44, 59%, 31%;
  --custom-vault-banner-icon-url: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'%0Awidth='40' height='40'%0AviewBox='0 0 40 40'%0Astyle=' fill:%23000000'%3E%3Cpath fill='%23dbb065' d='M1.5 35.5L1.5 4.5 11.793 4.5 14.793 7.5 35.5 7.5 35.5 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M11.586,5l2.707,2.707L14.586,8H15h20v27H2V5H11.586 M12,4H1v32h35V7H15L12,4L12,4z'%3E%3C/path%3E%3Cg%3E%3Cpath fill='%23f5ce85' d='M1.599 35.5L5.417 14.5 16.151 14.5 19.151 12.5 39.41 12.5 35.577 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M38.82,13l-3.667,22H2.198l3.636-20H16h0.303l0.252-0.168L19.303,13H38.82 M40,12H19l-3,2H5L1,36 h35L40,12L40,12z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  --divider-color: rgb(77, 77, 77);
  --divider-color-hover: rgb(132, 76, 184);
  --drag-ghost-text-color: rgb(232, 232, 232);
  --dropdown-background: rgb(31, 31, 31);
  --dropdown-background-hover: rgb(46, 46, 46);
  --embed-block-shadow-hover: 0 0 0 1px rgb(77, 77, 77), inset 0 0 0 1px rgb(77, 77, 77);
  --embed-border-bottom: 1px solid rgb(77, 77, 77);
  --embed-border-end: 1px solid rgb(77, 77, 77);
  --embed-border-start: 2px solid rgb(132, 76, 184);
  --embed-border-top: 1px solid rgb(77, 77, 77);
  --embed-max-height: 800px;
  --embed-padding: 8px 16px;
  --fade-away-delay: 850ms;
  --fade-away-opacity: 0.25;
  --file-folding-offset: 20px;
  --file-header-background: rgb(46, 46, 46);
  --file-header-background-focused: rgb(46, 46, 46);
  --file-header-font: '??', "Source Sans 3", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 15px;
  --flair-background: rgb(31, 31, 31);
  --flair-color: rgb(232, 232, 232);
  --font-interface: '??', "Source Sans 3", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Source Sans 3";
  --font-mermaid: '??', "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "JetBrains Mono";
  --font-print: '??', '??', "Source Sans 3", 'Arial';
  --font-text: '??', "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Source Sans 3";
  --footnote-divider-color: rgb(77, 77, 77);
  --footnote-id-color: rgb(219, 219, 219);
  --footnote-id-color-no-occurrences: rgb(207, 207, 207);
  --footnote-input-background-active: rgb(31, 31, 31);
  --graph-attachment-color-dt: rgb(207, 169, 63);
  --graph-controls-width: 150px;
  --graph-fill-color-dt: rgb(171, 171, 171);
  --graph-fill-focused-color-dt: rgb(188, 158, 224);
  --graph-line: rgb(77, 77, 77);
  --graph-line-color-dt: rgb(77, 77, 77);
  --graph-node: rgb(171, 171, 171);
  --graph-node-attachment: rgb(207, 169, 63);
  --graph-node-focused: rgb(188, 158, 224);
  --graph-node-tag: rgb(152, 172, 230);
  --graph-node-unresolved: rgb(238, 146, 140);
  --graph-tag-color-dt: rgb(152, 172, 230);
  --graph-text: rgb(232, 232, 232);
  --graph-unresolved-color-dt: rgb(238, 146, 140);
  --h1-color: rgb(232, 232, 232);
  --h1-line-height: 1.3;
  --h1-size: 2.2em;
  --h1-text-color-dt: rgb(232, 232, 232);
  --h1-weight: 800;
  --h2-color: rgb(232, 232, 232);
  --h2-line-height: 1.3;
  --h2-size: 2em;
  --h2-text-color-dt: rgb(232, 232, 232);
  --h2-weight: 800;
  --h3-color: rgb(232, 232, 232);
  --h3-line-height: 1.35;
  --h3-size: 1.8em;
  --h3-text-color-dt: rgb(232, 232, 232);
  --h3-weight: 800;
  --h4-color: rgb(232, 232, 232);
  --h4-size: 1.6em;
  --h4-text-color-dt: rgb(232, 232, 232);
  --h4-weight: 800;
  --h5-color: rgb(232, 232, 232);
  --h5-size: 1.4em;
  --h5-text-color-dt: rgb(232, 232, 232);
  --h5-weight: 800;
  --h6-color: rgb(232, 232, 232);
  --h6-size: 1.2em;
  --h6-text-color-dt: rgb(232, 232, 232);
  --h6-weight: 800;
  --header-height: 41px;
  --heading-formatting: rgb(207, 207, 207);
  --heading-spacing: 1.25em;
  --highlight-text-normal: rgb(188, 158, 224);
  --hr-color: rgb(77, 77, 77);
  --icon-color: rgb(219, 219, 219);
  --icon-color-active: rgb(132, 76, 184);
  --icon-color-focused: rgb(188, 158, 224);
  --icon-color-hover: rgb(188, 158, 224);
  --indentation-guide-color: rgba(77, 77, 77, 0.8);
  --indentation-guide-color-active: rgb(132, 76, 184);
  --indentation-guide-reading-indent: -0.55em;
  --indentation-guide-source-indent: 0.85em;
  --inline-title-line-height: 1.3;
  --inline-title-size: 2.2em;
  --inline-title-weight: 800;
  --input-date-separator: rgb(207, 207, 207);
  --input-height: 32px;
  --input-placeholder-color: rgb(207, 207, 207);
  --input-radius: 4px;
  --interactive-accent: rgb(132, 76, 184);
  --interactive-accent-base: rgb(54, 28, 79);
  --interactive-accent-base-hsl: 271, 48%, 21%;
  --interactive-accent-hover: rgb(132, 76, 184);
  --interactive-accent-hsl: 267, 52%, 75%;
  --interactive-accent-text: rgb(188, 158, 224);
  --interactive-accent-text-hsl: 267, 52%, 75%;
  --interactive-accent-tint: rgb(132, 76, 184);
  --interactive-accent-tint-hsl: 271, 43%, 51%;
  --interactive-hover: rgb(46, 46, 46);
  --interactive-normal: rgb(31, 31, 31);
  --italic-color: rgb(232, 232, 232);
  --link-color: rgb(188, 158, 224);
  --link-color-hover: rgba(188, 158, 224, 0.6);
  --link-external-color: rgb(188, 158, 224);
  --link-external-color-dt: 267, 52%, 75%;
  --link-external-color-hover: rgba(188, 158, 224, 0.6);
  --link-internal-color-dt: 267, 52%, 75%;
  --link-unresolved-color: rgb(188, 158, 224);
  --link-unresolved-decoration-color: rgba(188, 158, 224, 0.3);
  --list-bullet-end-padding: 3rem;
  --list-indent: 2em;
  --list-indent-source: 0.75em;
  --list-marker-color: rgb(207, 207, 207);
  --list-marker-color-collapsed: rgb(132, 76, 184);
  --list-marker-color-hover: rgb(219, 219, 219);
  --mark-highlight-base: rgb(53, 40, 8);
  --menu-background: rgb(31, 31, 31);
  --menu-border-color: rgb(132, 76, 184);
  --menu-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0;
  --metadata-border-color: rgb(77, 77, 77);
  --metadata-divider-color: rgb(77, 77, 77);
  --metadata-gap: 2px;
  --metadata-input-background-active: rgb(31, 31, 31);
  --metadata-input-font: '??', "Source Sans 3", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(232, 232, 232);
  --metadata-label-background-active: rgb(31, 31, 31);
  --metadata-label-font: '??', "Source Sans 3", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(219, 219, 219);
  --metadata-label-text-color-hover: rgb(219, 219, 219);
  --metadata-property-background-active: rgba(54, 28, 79, 0.9);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(132, 76, 184);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(132, 76, 184);
  --modal-background: rgb(20, 20, 20);
  --modal-border-color: rgb(77, 77, 77);
  --nav-collapse-icon-color: rgb(207, 207, 207);
  --nav-collapse-icon-color-collapsed: rgb(207, 207, 207);
  --nav-header-padding-bottom: 40px;
  --nav-heading-color: rgb(232, 232, 232);
  --nav-heading-color-collapsed: rgb(207, 207, 207);
  --nav-heading-color-collapsed-hover: rgb(219, 219, 219);
  --nav-heading-color-hover: rgb(232, 232, 232);
  --nav-indentation-guide-color: rgba(77, 77, 77, 0.8);
  --nav-item-background-active: rgba(54, 28, 79, 0.9);
  --nav-item-background-hover: rgba(54, 28, 79, 0.9);
  --nav-item-background-selected: rgba(188, 158, 224, 0.15);
  --nav-item-children-margin-left: 13px;
  --nav-item-color: rgb(219, 219, 219);
  --nav-item-color-active: rgb(232, 232, 232);
  --nav-item-color-highlighted: rgb(132, 76, 184);
  --nav-item-color-hover: rgb(188, 158, 224);
  --nav-item-color-selected: rgb(232, 232, 232);
  --nav-item-padding: 2px 8px 2px 24px;
  --nav-item-parent-padding: 2px 8px 2px 24px;
  --nav-tag-color: rgb(207, 207, 207);
  --nav-tag-color-active: rgb(219, 219, 219);
  --nav-tag-color-hover: rgb(219, 219, 219);
  --p-spacing: 0.5em;
  --pdf-background: rgb(20, 20, 20);
  --pdf-page-background: rgb(46, 46, 46);
  --pdf-shadow: 0 0 0 1px rgb(77, 77, 77);
  --pdf-sidebar-background: rgb(20, 20, 20);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(77, 77, 77);
  --pill-border-color: rgb(77, 77, 77);
  --pill-border-color-hover: rgb(132, 76, 184);
  --pill-color: rgb(219, 219, 219);
  --pill-color-hover: rgb(232, 232, 232);
  --pill-color-remove: rgb(207, 207, 207);
  --pill-color-remove-hover: rgb(132, 76, 184);
  --pill-radius: 4px;
  --prompt-background: rgb(46, 46, 46);
  --prompt-border-color: rgb(77, 77, 77);
  --raised-background: color-mix(in srgb, rgb(31, 31, 31) 65%, transparent) linear-gradient(rgb(31, 31, 31), color-mix(in srgb, rgb(31, 31, 31) 65%, transparent));
  --ribbon-background: rgb(31, 31, 31);
  --ribbon-background-collapsed: rgb(31, 31, 31);
  --scroll-bar-size: 12px;
  --scroll-button-background-color: rgb(46, 46, 46);
  --scrollbar-active-thumb-bg: rgb(54, 28, 79);
  --scrollbar-bg: rgb(31, 31, 31);
  --scrollbar-thumb-bg: rgb(77, 77, 77);
  --search-clear-button-color: rgb(219, 219, 219);
  --search-icon-color: rgb(219, 219, 219);
  --search-result-background: rgb(46, 46, 46);
  --setting-group-heading-color: rgb(232, 232, 232);
  --setting-items-background: rgb(20, 20, 20);
  --setting-items-border-color: rgb(77, 77, 77);
  --setting-items-padding: 8px;
  --shadow-color-hsl: 0, 0%, 0%;
  --shadow-l: rgba(0, 0, 0, 0.05) 0 1px 2px, rgba(0, 0, 0, 0.05) 0 2px 4px,
  	rgba(0, 0, 0, 0.05) 0 4px 8px, rgba(0, 0, 0, 0.05) 0 6px 12px;
  --shadow-s: rgba(0, 0, 0, 0.1) 0 1px 2px 0;
  --slider-thumb-border-color: rgb(132, 76, 184);
  --slider-thumb-radius: 4px;
  --slider-thumb-width: 10px;
  --slider-track-background: rgb(77, 77, 77);
  --status-bar-background: rgb(31, 31, 31);
  --status-bar-background-color-dt: #2b2b2b;
  --status-bar-background-color-lt: #ebecef;
  --status-bar-border-color: rgb(77, 77, 77);
  --status-bar-font-size: 13px;
  --status-bar-text-color: rgb(219, 219, 219);
  --strikethrough-line-color: rgb(219, 219, 219);
  --strikethrough-line-color-dt: rgb(219, 219, 219);
  --strikethrough-text-color: rgb(219, 219, 219);
  --strikethrough-text-color-dt: rgb(219, 219, 219);
  --suggestion-background: rgb(46, 46, 46);
  --sync-avatar-color-1: rgb(238, 146, 140);
  --sync-avatar-color-2: rgb(241, 150, 80);
  --sync-avatar-color-3: rgb(207, 169, 63);
  --sync-avatar-color-4: rgb(81, 194, 89);
  --sync-avatar-color-5: rgb(74, 185, 222);
  --sync-avatar-color-6: rgb(152, 172, 230);
  --sync-avatar-color-7: rgb(188, 158, 224);
  --sync-avatar-color-8: rgb(231, 146, 189);
  --tab-background-active: rgb(46, 46, 46);
  --tab-container-background: rgb(31, 31, 31);
  --tab-divider-color: rgb(132, 76, 184);
  --tab-outline-color: rgb(77, 77, 77);
  --tab-radius-active: 8px;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 41px;
  --tab-stacked-shadow: 0;
  --tab-switcher-background: rgb(31, 31, 31);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(31, 31, 31), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(188, 158, 224);
  --tab-text-color: rgb(207, 207, 207);
  --tab-text-color-active: rgb(219, 219, 219);
  --tab-text-color-focused: rgb(219, 219, 219);
  --tab-text-color-focused-active: rgb(219, 219, 219);
  --tab-text-color-focused-active-current: rgb(232, 232, 232);
  --tab-text-color-focused-highlighted: rgb(132, 76, 184);
  --table-add-button-border-color: rgb(77, 77, 77);
  --table-border-color: rgb(77, 77, 77);
  --table-drag-handle-background-active: rgb(132, 76, 184);
  --table-drag-handle-color: rgb(207, 207, 207);
  --table-drag-handle-color-active: rgb(188, 158, 224);
  --table-header-border-color: rgb(77, 77, 77);
  --table-header-color: rgb(232, 232, 232);
  --table-selection: rgba(188, 158, 224, 0.1);
  --table-selection-border-color: rgb(132, 76, 184);
  --tag-background: rgba(188, 158, 224, 0.1);
  --tag-background-hover: rgba(188, 158, 224, 0.2);
  --tag-border-color: rgba(188, 158, 224, 0.15);
  --tag-border-color-hover: rgba(188, 158, 224, 0.15);
  --tag-border-width: 2px;
  --tag-color: rgb(132, 76, 184);
  --tag-color-hover: rgb(132, 76, 184);
  --tag-padding-x: 0.75ch;
  --tag-padding-y: 0;
  --tag-radius: 4px;
  --tag-size: 0.8em;
  --text-accent: rgb(132, 76, 184);
  --text-accent-hover: rgb(132, 76, 184);
  --text-bold-color-dt: rgb(232, 232, 232);
  --text-error: rgb(238, 146, 140);
  --text-faint: rgb(207, 207, 207);
  --text-faint-hsl: 0, 0%, 81%;
  --text-highlight-bg: rgb(54, 28, 79);
  --text-italic-bold-color-dt: rgb(232, 232, 232);
  --text-italic-color-dt: rgb(232, 232, 232);
  --text-muted: rgb(219, 219, 219);
  --text-muted-hsl: 0, 0%, 86%;
  --text-normal: rgb(232, 232, 232);
  --text-normal-hsl: 0, 0%, 91%;
  --text-on-accent: rgb(188, 158, 224);
  --text-on-accent-inverted: rgb(232, 232, 232);
  --text-selection: rgba(132, 76, 184, 0.55);
  --text-success: rgb(81, 194, 89);
  --text-warning: rgb(241, 150, 80);
  --titlebar-background: rgb(31, 31, 31);
  --titlebar-background-focused: rgb(31, 31, 31);
  --titlebar-border-color: rgb(77, 77, 77);
  --titlebar-text-color: rgb(219, 219, 219);
  --titlebar-text-color-focused: rgb(232, 232, 232);
  --toggle-radius: 4px;
  --toggle-s-border-width: 1px;
  --toggle-s-thumb-height: 18px;
  --toggle-s-thumb-width: 18px;
  --toggle-s-width: 44px;
  --toggle-thumb-color: rgb(232, 232, 232);
  --toggle-thumb-height: 20px;
  --toggle-thumb-radius: 3px;
  --toggle-thumb-width: 20px;
  --toggle-width: 42px;
  --traffic-lights-offset-x: 41px;
  --traffic-lights-offset-y: 41px;
  --underline-line-color: rgb(232, 232, 232);
  --underline-line-color-dt: rgb(232, 232, 232);
  --underline-text-color: rgb(232, 232, 232);
  --underline-text-color-dt: rgb(232, 232, 232);
  --vault-name-font-size: 15px;
  --vault-profile-color: rgb(232, 232, 232);
  --vault-profile-color-hover: rgb(232, 232, 232);
  --vault-profile-font-size: 15px;
  --window-border: 1px solid rgb(77, 77, 77);
  --window-border-color: rgb(77, 77, 77);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(31, 31, 31);
  color: rgb(232, 232, 232);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(20, 20, 20);
  color: rgb(232, 232, 232);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(232, 232, 232);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(77, 77, 77);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(31, 31, 31);
  border-left-color: rgb(77, 77, 77);
  color: rgb(232, 232, 232);
}

body div#quartz-root {
  background-color: rgb(46, 46, 46);
  color: rgb(232, 232, 232);
}`,
    typography: `body .page article p > b, b {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body .page article p > em, em {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body .page article p > i, i {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body .page article p > strong, strong {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body .text-highlight {
  background-color: rgb(54, 28, 79);
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body del {
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 219, 219) none 0px;
  text-decoration: line-through 2px rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
  text-decoration-thickness: 2px;
}

body p {
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 219, 219) none 0px;
  text-decoration: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}`,
    links: `body a.external, footer a {
  color: rgb(188, 158, 224);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 158, 224) none 0px;
  text-decoration: underline rgb(188, 158, 224);
  text-decoration-color: rgb(188, 158, 224);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(188, 158, 224);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 158, 224) none 0px;
  text-decoration: underline rgb(188, 158, 224);
  text-decoration-color: rgb(188, 158, 224);
}

body a.internal.broken {
  color: rgb(188, 158, 224);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 158, 224) none 0px;
  text-decoration: underline rgba(188, 158, 224, 0.3);
  text-decoration-color: rgba(188, 158, 224, 0.3);
}`,
    lists: `body dd {
  color: rgb(232, 232, 232);
}

body dt {
  color: rgb(232, 232, 232);
}

body ol > li {
  color: rgb(232, 232, 232);
}

body ol.overflow {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body ul > li {
  color: rgb(232, 232, 232);
}

body ul.overflow {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(207, 207, 207);
  text-decoration: rgb(207, 207, 207);
}

body blockquote {
  background-color: rgb(31, 31, 31);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body table {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 8px;
  width: 178.25px;
}

body td {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(232, 232, 232);
}

body th {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(232, 232, 232);
}`,
    code: `body code {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
  font-family: "??", "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-width: 1px;
  color: rgb(232, 232, 232);
}

body pre > code > [data-line] {
  border-left-color: rgb(207, 169, 63);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(207, 169, 63);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(207, 169, 63);
  border-left-color: rgb(207, 169, 63);
  border-right-color: rgb(207, 169, 63);
  border-top-color: rgb(207, 169, 63);
}

body pre > code, pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-width: 1px;
}

body pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-width: 1px;
}`,
    images: `body audio {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body figcaption {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body img {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body video {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    embeds: `body .file-embed {
  background-color: rgb(77, 77, 77);
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
}

body .footnotes {
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

body .transclude {
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(132, 76, 184);
  border-right-color: rgb(77, 77, 77);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-style: solid;
  border-top-width: 1px;
}

body .transclude-inner {
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(132, 76, 184);
  border-right-color: rgb(77, 77, 77);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(132, 76, 184);
  text-decoration: line-through rgb(132, 76, 184);
  text-decoration-color: rgb(132, 76, 184);
}

body input[type=checkbox] {
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-width: 2px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 2px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 2px;
  border-top-color: rgb(77, 77, 77);
  border-top-width: 2px;
  margin-left: -18.4px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='*'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='-'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='/'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='>'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='?'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='I'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='S'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='b'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='c'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='d'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='f'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='i'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='k'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='l'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='p'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='u'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body li.task-list-item[data-task='w'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(102, 102, 102);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(102, 102, 102);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(102, 102, 102);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

body .callout > .callout-content {
  background-color: rgba(41, 41, 41, 0.2);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(46, 46, 46);
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 4px 8px 0px, rgba(0, 0, 0, 0.05) 0px 6px 12px 0px;
}

body .search > .search-container > .search-space > * {
  background-color: rgb(20, 20, 20);
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(188, 158, 224);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(188, 158, 224);
  border-left-color: rgb(188, 158, 224);
  border-right-color: rgb(188, 158, 224);
  border-top-color: rgb(188, 158, 224);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(188, 158, 224);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(54, 28, 79);
  color: rgb(188, 158, 224);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(77, 77, 77);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(54, 28, 79);
  border-bottom-color: rgb(188, 158, 224);
  border-left-color: rgb(188, 158, 224);
  border-right-color: rgb(188, 158, 224);
  border-top-color: rgb(188, 158, 224);
  color: rgb(188, 158, 224);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(54, 28, 79);
  color: rgb(188, 158, 224);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(188, 158, 224, 0.1);
  border-bottom-color: rgba(188, 158, 224, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgba(188, 158, 224, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(188, 158, 224, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(188, 158, 224, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(132, 76, 184);
}

body h1 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body ::-webkit-scrollbar {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-corner {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-track {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(232, 232, 232);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(232, 232, 232);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(219, 219, 219);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(54, 28, 79);
  border-bottom-color: rgb(132, 76, 184);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(132, 76, 184);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(132, 76, 184);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(132, 76, 184);
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(188, 158, 224);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: rgb(219, 219, 219);
}`,
    footer: `body footer {
  background-color: rgba(33, 33, 33, 0.8);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(219, 219, 219);
  text-decoration: rgb(219, 219, 219);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(219, 219, 219);
  text-decoration: rgb(219, 219, 219);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body li.section-li > .section .meta {
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(219, 219, 219);
  text-decoration: rgb(219, 219, 219);
}

body ul.section-ul {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: rgb(219, 219, 219);
}

body .darkmode svg {
  color: rgb(188, 158, 224);
  stroke: rgb(188, 158, 224);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: rgb(219, 219, 219);
}

body .breadcrumb-element p {
  color: rgb(207, 207, 207);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

body .metadata {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgba(33, 33, 33, 0.8);
}

body .page-header h2.page-title {
  color: rgb(188, 158, 224);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(232, 232, 232);
  text-decoration: underline dotted rgb(232, 232, 232);
}

body details {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body input[type=text] {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(232, 232, 232);
  font-family: "??", "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

body progress {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

body sub {
  color: rgb(232, 232, 232);
}

body summary {
  color: rgb(232, 232, 232);
}

body sup {
  color: rgb(232, 232, 232);
}`,
  },
  light: {
    base: `:root:root {
  --accent-border-width: 2px;
  --background-modifier-active-hover: rgba(132, 90, 231, 0.1);
  --background-modifier-border: rgb(176, 176, 176);
  --background-modifier-border-focus: rgb(190, 175, 248);
  --background-modifier-border-hover: rgb(190, 175, 248);
  --background-modifier-error: rgb(216, 58, 49);
  --background-modifier-error-hover: rgb(216, 58, 49);
  --background-modifier-form-field: rgb(255, 255, 255);
  --background-modifier-form-field-hover: rgb(255, 255, 255);
  --background-modifier-hover: rgba(231, 226, 253, 0.9);
  --background-modifier-success: rgb(62, 138, 0);
  --background-primary: rgb(255, 255, 255);
  --background-primary-alt: rgb(245, 245, 245);
  --background-primary-alt-hsl: 0, 0%, 96%;
  --background-primary-blur: rgb(255, 255, 255);
  --background-primary-hsl: 0, 0%, 100%;
  --background-secondary: rgb(237, 237, 237);
  --background-secondary-alt: rgb(176, 176, 176);
  --background-secondary-alt-blur: rgba(176, 176, 176, 0.8);
  --background-secondary-alt-hsl: 0, 0%, 69%;
  --background-secondary-blur: rgba(235, 235, 235, 0.8);
  --background-secondary-blur-hsl: 0, 0%, 92%;
  --background-secondary-hsl: 0, 0%, 93%;
  --bases-cards-background: rgb(255, 255, 255);
  --bases-cards-cover-background: rgb(245, 245, 245);
  --bases-cards-shadow: 0 0 0 1px rgb(176, 176, 176);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(190, 175, 248);
  --bases-embed-border-color: rgb(176, 176, 176);
  --bases-group-heading-property-color: rgb(51, 51, 51);
  --bases-table-border-color: rgb(176, 176, 176);
  --bases-table-cell-background-active: rgb(255, 255, 255);
  --bases-table-cell-background-disabled: rgb(245, 245, 245);
  --bases-table-cell-background-selected: rgba(132, 90, 231, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(190, 175, 248);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(190, 175, 248);
  --bases-table-group-background: rgb(245, 245, 245);
  --bases-table-header-background: rgb(255, 255, 255);
  --bases-table-header-background-hover: rgba(231, 226, 253, 0.9);
  --bases-table-header-color: rgb(51, 51, 51);
  --bases-table-summary-background: rgb(255, 255, 255);
  --bases-table-summary-background-hover: rgba(231, 226, 253, 0.9);
  --blockquote-background-color: rgb(245, 245, 245);
  --blockquote-border-color: rgb(176, 176, 176);
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --blur-intensity: 8px;
  --bold-color: rgb(38, 38, 38);
  --button-radius: 4px;
  --callout-background-alpha: 20%;
  --callout-padding: 4px;
  --callout-radius: 8px;
  --canvas-background: rgb(255, 255, 255);
  --canvas-background-color: 0, 0%, 90%;
  --canvas-card-label-color: rgb(89, 89, 89);
  --canvas-color: 0, 0%, 73%;
  --canvas-dot-pattern: rgba(176, 176, 176, 0.75);
  --canvas-highlight-color: 0, 0%, 47%;
  --caret-color: rgb(38, 38, 38);
  --cg-nt-tbar-top-sticky-pos-desktop: -33px;
  --checkbox-border-color: rgb(176, 176, 176);
  --checkbox-border-color-hover: rgb(190, 175, 248);
  --checkbox-color: rgb(245, 245, 245);
  --checkbox-color-hover: rgb(190, 175, 248);
  --checkbox-marker-color: rgb(132, 90, 231);
  --checklist-done-color: rgb(190, 175, 248);
  --code-background: rgb(255, 255, 255);
  --code-border-color: rgb(176, 176, 176);
  --code-border-width: 1px;
  --code-bracket-background: rgba(231, 226, 253, 0.9);
  --code-comment: rgb(120, 120, 120);
  --code-function: rgb(153, 110, 36);
  --code-important: rgb(184, 95, 0);
  --code-keyword: rgb(204, 51, 153);
  --code-normal: rgb(38, 38, 38);
  --code-operator: rgb(216, 58, 49);
  --code-property: rgb(0, 133, 143);
  --code-punctuation: rgb(51, 51, 51);
  --code-string: rgb(62, 138, 0);
  --code-tag: rgb(216, 58, 49);
  --code-value: rgb(132, 90, 231);
  --collapse-icon-color: rgb(89, 89, 89);
  --collapse-icon-color-collapsed: rgb(38, 38, 38);
  --color-accent: rgb(132, 90, 231);
  --color-accent-1: rgb(190, 175, 248);
  --color-accent-2: rgb(231, 226, 253);
  --color-accent-base-dt: 7, 90%, 92%;
  --color-accent-base-lt: 7, 90%, 92%;
  --color-accent-hsl: 258, 75%, 63%;
  --color-accent-text-dt: 3, 68%, 52%;
  --color-accent-text-lt: 3, 68%, 52%;
  --color-accent-tint-dt: 7, 82%, 78%;
  --color-accent-tint-lt: 7, 82%, 78%;
  --color-blue: rgb(68, 115, 218);
  --color-blue-base: rgb(219, 231, 250);
  --color-blue-base-hsl: 217, 76%, 92%;
  --color-blue-text: rgb(68, 115, 218);
  --color-blue-text-hsl: 221, 67%, 56%;
  --color-blue-tint: rgb(158, 187, 240);
  --color-blue-tint-hsl: 219, 73%, 78%;
  --color-cyan: rgb(0, 133, 143);
  --color-cyan-base: rgb(194, 237, 240);
  --color-cyan-base-hsl: 184, 60%, 85%;
  --color-cyan-text: rgb(0, 133, 143);
  --color-cyan-text-hsl: 184, 100%, 28%;
  --color-cyan-tint: rgb(74, 202, 211);
  --color-cyan-tint-hsl: 184, 61%, 56%;
  --color-green: rgb(62, 138, 0);
  --color-green-base: rgb(210, 235, 198);
  --color-green-base-hsl: 101, 49%, 85%;
  --color-green-text: rgb(62, 138, 0);
  --color-green-text-hsl: 93, 100%, 27%;
  --color-green-tint: rgb(135, 203, 98);
  --color-green-tint-hsl: 99, 50%, 59%;
  --color-grey-base: rgb(230, 230, 230);
  --color-grey-base-hsl: 0, 0%, 90%;
  --color-grey-text: rgb(120, 120, 120);
  --color-grey-text-hsl: 0, 0%, 47%;
  --color-grey-tint: rgb(186, 186, 186);
  --color-grey-tint-hsl: 0, 0%, 73%;
  --color-mint-base: rgb(193, 240, 218);
  --color-mint-base-hsl: 152, 62%, 85%;
  --color-mint-text: rgb(0, 133, 91);
  --color-mint-text-hsl: 161, 100%, 26%;
  --color-mint-tint: rgb(73, 208, 158);
  --color-mint-tint-hsl: 158, 59%, 55%;
  --color-orange: rgb(184, 95, 0);
  --color-orange-base: rgb(251, 224, 203);
  --color-orange-base-hsl: 26, 85%, 89%;
  --color-orange-text: rgb(184, 95, 0);
  --color-orange-text-hsl: 31, 100%, 36%;
  --color-orange-tint: rgb(239, 170, 113);
  --color-orange-tint-hsl: 27, 80%, 69%;
  --color-pink: rgb(204, 51, 153);
  --color-pink-base: rgb(251, 223, 238);
  --color-pink-base-hsl: 328, 79%, 93%;
  --color-pink-text: rgb(204, 51, 153);
  --color-pink-text-hsl: 320, 60%, 50%;
  --color-pink-tint: rgb(240, 163, 205);
  --color-pink-tint-hsl: 327, 72%, 79%;
  --color-purple: rgb(132, 90, 231);
  --color-purple-base: rgb(231, 226, 253);
  --color-purple-base-hsl: 251, 87%, 94%;
  --color-purple-text: rgb(132, 90, 231);
  --color-purple-text-hsl: 258, 75%, 63%;
  --color-purple-tint: rgb(190, 175, 248);
  --color-purple-tint-hsl: 252, 84%, 83%;
  --color-red: rgb(216, 58, 49);
  --color-red-base: rgb(253, 221, 216);
  --color-red-base-hsl: 7, 90%, 92%;
  --color-red-text: rgb(216, 58, 49);
  --color-red-text-hsl: 3, 68%, 52%;
  --color-red-tint: rgb(245, 164, 153);
  --color-red-tint-hsl: 7, 82%, 78%;
  --color-yellow: rgb(153, 110, 36);
  --color-yellow-base: rgb(250, 227, 174);
  --color-yellow-base-hsl: 42, 88%, 83%;
  --color-yellow-text: rgb(153, 110, 36);
  --color-yellow-text-hsl: 38, 62%, 37%;
  --color-yellow-tint: rgb(220, 181, 76);
  --color-yellow-tint-hsl: 44, 67%, 58%;
  --custom-vault-banner-icon-url: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'%0Awidth='40' height='40'%0AviewBox='0 0 40 40'%0Astyle=' fill:%23000000'%3E%3Cpath fill='%23dbb065' d='M1.5 35.5L1.5 4.5 11.793 4.5 14.793 7.5 35.5 7.5 35.5 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M11.586,5l2.707,2.707L14.586,8H15h20v27H2V5H11.586 M12,4H1v32h35V7H15L12,4L12,4z'%3E%3C/path%3E%3Cg%3E%3Cpath fill='%23f5ce85' d='M1.599 35.5L5.417 14.5 16.151 14.5 19.151 12.5 39.41 12.5 35.577 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M38.82,13l-3.667,22H2.198l3.636-20H16h0.303l0.252-0.168L19.303,13H38.82 M40,12H19l-3,2H5L1,36 h35L40,12L40,12z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  --divider-color: rgb(176, 176, 176);
  --divider-color-hover: rgb(190, 175, 248);
  --drag-ghost-text-color: rgb(38, 38, 38);
  --dropdown-background: rgb(255, 255, 255);
  --dropdown-background-hover: rgb(255, 255, 255);
  --embed-block-shadow-hover: 0 0 0 1px rgb(176, 176, 176), inset 0 0 0 1px rgb(176, 176, 176);
  --embed-border-bottom: 1px solid rgb(176, 176, 176);
  --embed-border-end: 1px solid rgb(176, 176, 176);
  --embed-border-start: 2px solid rgb(190, 175, 248);
  --embed-border-top: 1px solid rgb(176, 176, 176);
  --embed-max-height: 800px;
  --embed-padding: 8px 16px;
  --fade-away-delay: 850ms;
  --fade-away-opacity: 0.25;
  --file-folding-offset: 20px;
  --file-header-background: rgb(255, 255, 255);
  --file-header-background-focused: rgb(255, 255, 255);
  --file-header-font: '??', "Source Sans 3", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 15px;
  --flair-background: rgb(255, 255, 255);
  --flair-color: rgb(38, 38, 38);
  --font-interface: '??', "Source Sans 3", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Source Sans 3";
  --font-mermaid: '??', "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "JetBrains Mono";
  --font-print: '??', '??', "Source Sans 3", 'Arial';
  --font-text: '??', "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Source Sans 3";
  --footnote-divider-color: rgb(176, 176, 176);
  --footnote-id-color: rgb(51, 51, 51);
  --footnote-id-color-no-occurrences: rgb(89, 89, 89);
  --footnote-input-background-active: rgb(237, 237, 237);
  --graph-attachment-color-lt: rgb(220, 181, 76);
  --graph-controls-width: 150px;
  --graph-fill-color-lt: rgb(186, 186, 186);
  --graph-fill-focused-color-lt: rgb(190, 175, 248);
  --graph-line: rgb(176, 176, 176);
  --graph-line-color-lt: rgb(176, 176, 176);
  --graph-node: rgb(186, 186, 186);
  --graph-node-attachment: rgb(220, 181, 76);
  --graph-node-focused: rgb(190, 175, 248);
  --graph-node-tag: rgb(158, 187, 240);
  --graph-node-unresolved: rgb(245, 164, 153);
  --graph-tag-color-lt: rgb(158, 187, 240);
  --graph-text: rgb(38, 38, 38);
  --graph-unresolved-color-lt: rgb(245, 164, 153);
  --h1-color: rgb(38, 38, 38);
  --h1-line-height: 1.3;
  --h1-size: 2.2em;
  --h1-text-color-lt: rgb(38, 38, 38);
  --h1-weight: 800;
  --h2-color: rgb(38, 38, 38);
  --h2-line-height: 1.3;
  --h2-size: 2em;
  --h2-text-color-lt: rgb(38, 38, 38);
  --h2-weight: 800;
  --h3-color: rgb(38, 38, 38);
  --h3-line-height: 1.35;
  --h3-size: 1.8em;
  --h3-text-color-lt: rgb(38, 38, 38);
  --h3-weight: 800;
  --h4-color: rgb(38, 38, 38);
  --h4-size: 1.6em;
  --h4-text-color-lt: rgb(38, 38, 38);
  --h4-weight: 800;
  --h5-color: rgb(38, 38, 38);
  --h5-size: 1.4em;
  --h5-text-color-lt: rgb(38, 38, 38);
  --h5-weight: 800;
  --h6-color: rgb(38, 38, 38);
  --h6-size: 1.2em;
  --h6-text-color-lt: rgb(38, 38, 38);
  --h6-weight: 800;
  --header-height: 41px;
  --heading-formatting: rgb(89, 89, 89);
  --heading-spacing: 1.25em;
  --highlight-text-normal: rgb(132, 90, 231);
  --hr-color: rgb(176, 176, 176);
  --icon-color: rgb(51, 51, 51);
  --icon-color-active: rgb(132, 90, 231);
  --icon-color-focused: rgb(132, 90, 231);
  --icon-color-hover: rgb(132, 90, 231);
  --indentation-guide-color: rgba(176, 176, 176, 0.75);
  --indentation-guide-color-active: rgb(190, 175, 248);
  --indentation-guide-reading-indent: -0.55em;
  --indentation-guide-source-indent: 0.85em;
  --inline-title-line-height: 1.3;
  --inline-title-size: 2.2em;
  --inline-title-weight: 800;
  --input-date-separator: rgb(89, 89, 89);
  --input-height: 32px;
  --input-placeholder-color: rgb(89, 89, 89);
  --input-radius: 4px;
  --interactive-accent: rgb(190, 175, 248);
  --interactive-accent-base: rgb(231, 226, 253);
  --interactive-accent-base-hsl: 251, 87%, 94%;
  --interactive-accent-hover: rgb(190, 175, 248);
  --interactive-accent-hsl: 258, 75%, 63%;
  --interactive-accent-text: rgb(132, 90, 231);
  --interactive-accent-text-hsl: 258, 75%, 63%;
  --interactive-accent-tint: rgb(190, 175, 248);
  --interactive-accent-tint-hsl: 252, 84%, 83%;
  --interactive-hover: rgb(255, 255, 255);
  --interactive-normal: rgb(255, 255, 255);
  --italic-color: rgb(38, 38, 38);
  --link-color: rgb(132, 90, 231);
  --link-color-hover: rgba(132, 90, 231, 0.6);
  --link-external-color: rgb(132, 90, 231);
  --link-external-color-hover: rgba(132, 90, 231, 0.6);
  --link-external-color-lt: 258, 75%, 63%;
  --link-internal-color-lt: 258, 75%, 63%;
  --link-unresolved-color: rgb(132, 90, 231);
  --link-unresolved-decoration-color: rgba(132, 90, 231, 0.3);
  --list-bullet-end-padding: 3rem;
  --list-indent: 2em;
  --list-indent-source: 0.75em;
  --list-marker-color: rgb(89, 89, 89);
  --list-marker-color-collapsed: rgb(132, 90, 231);
  --list-marker-color-hover: rgb(51, 51, 51);
  --mark-highlight-base: rgb(250, 227, 174);
  --menu-background: rgb(237, 237, 237);
  --menu-border-color: rgb(190, 175, 248);
  --menu-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0;
  --metadata-border-color: rgb(176, 176, 176);
  --metadata-divider-color: rgb(176, 176, 176);
  --metadata-gap: 2px;
  --metadata-input-background-active: rgb(237, 237, 237);
  --metadata-input-font: '??', "Source Sans 3", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(38, 38, 38);
  --metadata-label-background-active: rgb(237, 237, 237);
  --metadata-label-font: '??', "Source Sans 3", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(51, 51, 51);
  --metadata-label-text-color-hover: rgb(51, 51, 51);
  --metadata-property-background-active: rgba(231, 226, 253, 0.9);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(190, 175, 248);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(190, 175, 248);
  --modal-background: rgb(255, 255, 255);
  --modal-border-color: rgb(176, 176, 176);
  --nav-collapse-icon-color: rgb(89, 89, 89);
  --nav-collapse-icon-color-collapsed: rgb(89, 89, 89);
  --nav-header-padding-bottom: 40px;
  --nav-heading-color: rgb(38, 38, 38);
  --nav-heading-color-collapsed: rgb(89, 89, 89);
  --nav-heading-color-collapsed-hover: rgb(51, 51, 51);
  --nav-heading-color-hover: rgb(38, 38, 38);
  --nav-indentation-guide-color: rgba(176, 176, 176, 0.75);
  --nav-item-background-active: rgba(231, 226, 253, 0.9);
  --nav-item-background-hover: rgba(231, 226, 253, 0.9);
  --nav-item-background-selected: rgba(132, 90, 231, 0.15);
  --nav-item-children-margin-left: 13px;
  --nav-item-color: rgb(51, 51, 51);
  --nav-item-color-active: rgb(38, 38, 38);
  --nav-item-color-highlighted: rgb(132, 90, 231);
  --nav-item-color-hover: rgb(132, 90, 231);
  --nav-item-color-selected: rgb(38, 38, 38);
  --nav-item-padding: 2px 8px 2px 24px;
  --nav-item-parent-padding: 2px 8px 2px 24px;
  --nav-tag-color: rgb(89, 89, 89);
  --nav-tag-color-active: rgb(51, 51, 51);
  --nav-tag-color-hover: rgb(51, 51, 51);
  --p-spacing: 0.5em;
  --pdf-background: rgb(255, 255, 255);
  --pdf-page-background: rgb(255, 255, 255);
  --pdf-sidebar-background: rgb(255, 255, 255);
  --pill-border-color: rgb(176, 176, 176);
  --pill-border-color-hover: rgb(190, 175, 248);
  --pill-color: rgb(51, 51, 51);
  --pill-color-hover: rgb(38, 38, 38);
  --pill-color-remove: rgb(89, 89, 89);
  --pill-color-remove-hover: rgb(132, 90, 231);
  --pill-radius: 4px;
  --prompt-background: rgb(255, 255, 255);
  --prompt-border-color: rgb(176, 176, 176);
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --ribbon-background: rgb(237, 237, 237);
  --ribbon-background-collapsed: rgb(237, 237, 237);
  --scroll-bar-size: 12px;
  --scroll-button-background-color: rgb(255, 255, 255);
  --scrollbar-active-thumb-bg: rgb(231, 226, 253);
  --scrollbar-bg: rgb(237, 237, 237);
  --scrollbar-thumb-bg: rgb(245, 245, 245);
  --search-clear-button-color: rgb(51, 51, 51);
  --search-icon-color: rgb(51, 51, 51);
  --search-result-background: rgb(255, 255, 255);
  --setting-group-heading-color: rgb(38, 38, 38);
  --setting-items-background: rgb(255, 255, 255);
  --setting-items-border-color: rgb(176, 176, 176);
  --setting-items-padding: 8px;
  --shadow-color-hsl: 0, 0%, 0%;
  --shadow-l: rgba(0, 0, 0, 0.03) 0 1px 2px, rgba(0, 0, 0, 0.03) 0 2px 4px,
  	rgba(0, 0, 0, 0.03) 0 4px 8px, rgba(0, 0, 0, 0.03) 0 6px 12px;
  --shadow-s: rgba(0, 0, 0, 0.1) 0 1px 2px 0;
  --slider-thumb-border-color: rgb(190, 175, 248);
  --slider-thumb-radius: 4px;
  --slider-thumb-width: 10px;
  --slider-track-background: rgb(176, 176, 176);
  --status-bar-background: rgb(237, 237, 237);
  --status-bar-background-color-dt: #2b2b2b;
  --status-bar-background-color-lt: #ebecef;
  --status-bar-border-color: rgb(176, 176, 176);
  --status-bar-font-size: 13px;
  --status-bar-text-color: rgb(51, 51, 51);
  --strikethrough-line-color: rgb(51, 51, 51);
  --strikethrough-line-color-lt: rgb(51, 51, 51);
  --strikethrough-text-color: rgb(51, 51, 51);
  --strikethrough-text-color-lt: rgb(51, 51, 51);
  --suggestion-background: rgb(255, 255, 255);
  --sync-avatar-color-1: rgb(216, 58, 49);
  --sync-avatar-color-2: rgb(184, 95, 0);
  --sync-avatar-color-3: rgb(153, 110, 36);
  --sync-avatar-color-4: rgb(62, 138, 0);
  --sync-avatar-color-5: rgb(0, 133, 143);
  --sync-avatar-color-6: rgb(68, 115, 218);
  --sync-avatar-color-7: rgb(132, 90, 231);
  --sync-avatar-color-8: rgb(204, 51, 153);
  --tab-background-active: rgb(255, 255, 255);
  --tab-container-background: rgb(237, 237, 237);
  --tab-divider-color: rgb(190, 175, 248);
  --tab-outline-color: rgb(176, 176, 176);
  --tab-radius-active: 8px;
  --tab-stacked-font-size: 15px;
  --tab-stacked-header-width: 41px;
  --tab-stacked-shadow: 0;
  --tab-switcher-background: rgb(237, 237, 237);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(237, 237, 237), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(132, 90, 231);
  --tab-text-color: rgb(89, 89, 89);
  --tab-text-color-active: rgb(51, 51, 51);
  --tab-text-color-focused: rgb(51, 51, 51);
  --tab-text-color-focused-active: rgb(51, 51, 51);
  --tab-text-color-focused-active-current: rgb(38, 38, 38);
  --tab-text-color-focused-highlighted: rgb(132, 90, 231);
  --table-add-button-border-color: rgb(176, 176, 176);
  --table-border-color: rgb(176, 176, 176);
  --table-drag-handle-background-active: rgb(190, 175, 248);
  --table-drag-handle-color: rgb(89, 89, 89);
  --table-drag-handle-color-active: rgb(132, 90, 231);
  --table-header-border-color: rgb(176, 176, 176);
  --table-header-color: rgb(38, 38, 38);
  --table-selection: rgba(132, 90, 231, 0.1);
  --table-selection-border-color: rgb(190, 175, 248);
  --tag-background: rgba(132, 90, 231, 0.1);
  --tag-background-hover: rgba(132, 90, 231, 0.2);
  --tag-border-color: rgba(132, 90, 231, 0.15);
  --tag-border-color-hover: rgba(132, 90, 231, 0.15);
  --tag-border-width: 2px;
  --tag-color: rgb(132, 90, 231);
  --tag-color-hover: rgb(132, 90, 231);
  --tag-padding-x: 0.75ch;
  --tag-padding-y: 0;
  --tag-radius: 4px;
  --tag-size: 0.8em;
  --text-accent: rgb(132, 90, 231);
  --text-accent-hover: rgb(190, 175, 248);
  --text-bold-color-lt: rgb(38, 38, 38);
  --text-error: rgb(216, 58, 49);
  --text-faint: rgb(89, 89, 89);
  --text-faint-hsl: 0, 0%, 35%;
  --text-highlight-bg: rgb(231, 226, 253);
  --text-italic-bold-color-lt: rgb(38, 38, 38);
  --text-italic-color-lt: rgb(38, 38, 38);
  --text-muted: rgb(51, 51, 51);
  --text-muted-hsl: 0, 0%, 20%;
  --text-normal: rgb(38, 38, 38);
  --text-normal-hsl: 0, 0%, 15%;
  --text-on-accent: rgb(132, 90, 231);
  --text-on-accent-inverted: rgb(38, 38, 38);
  --text-selection: rgba(190, 175, 248, 0.55);
  --text-success: rgb(62, 138, 0);
  --text-warning: rgb(184, 95, 0);
  --titlebar-background: rgb(237, 237, 237);
  --titlebar-background-focused: rgb(237, 237, 237);
  --titlebar-border-color: rgb(176, 176, 176);
  --titlebar-text-color: rgb(51, 51, 51);
  --titlebar-text-color-focused: rgb(38, 38, 38);
  --toggle-radius: 4px;
  --toggle-s-border-width: 1px;
  --toggle-s-thumb-height: 18px;
  --toggle-s-thumb-width: 18px;
  --toggle-s-width: 44px;
  --toggle-thumb-color: rgb(255, 255, 255);
  --toggle-thumb-height: 20px;
  --toggle-thumb-radius: 3px;
  --toggle-thumb-width: 20px;
  --toggle-width: 42px;
  --traffic-lights-offset-x: 41px;
  --traffic-lights-offset-y: 41px;
  --underline-line-color: rgb(38, 38, 38);
  --underline-line-color-lt: rgb(38, 38, 38);
  --underline-text-color: rgb(38, 38, 38);
  --underline-text-color-lt: rgb(38, 38, 38);
  --vault-name-font-size: 15px;
  --vault-profile-color: rgb(38, 38, 38);
  --vault-profile-color-hover: rgb(38, 38, 38);
  --vault-profile-font-size: 15px;
  --window-border: 1px solid rgb(176, 176, 176);
  --window-border-color: rgb(176, 176, 176);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(237, 237, 237);
  color: rgb(38, 38, 38);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(176, 176, 176);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(237, 237, 237);
  border-left-color: rgb(176, 176, 176);
  color: rgb(38, 38, 38);
}

body div#quartz-root {
  color: rgb(38, 38, 38);
}`,
    typography: `body .page article p > b, b {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > em, em {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > i, i {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > strong, strong {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .text-highlight {
  background-color: rgb(231, 226, 253);
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body del {
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: line-through 2px rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
  text-decoration-thickness: 2px;
}

body p {
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}`,
    links: `body a.external, footer a {
  color: rgb(132, 90, 231);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 90, 231) none 0px;
  text-decoration: underline rgb(132, 90, 231);
  text-decoration-color: rgb(132, 90, 231);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(132, 90, 231);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 90, 231) none 0px;
  text-decoration: underline rgb(132, 90, 231);
  text-decoration-color: rgb(132, 90, 231);
}

body a.internal.broken {
  color: rgb(132, 90, 231);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 90, 231) none 0px;
  text-decoration: underline rgba(132, 90, 231, 0.3);
  text-decoration-color: rgba(132, 90, 231, 0.3);
}`,
    lists: `body dd {
  color: rgb(38, 38, 38);
}

body dt {
  color: rgb(38, 38, 38);
}

body ol > li {
  color: rgb(38, 38, 38);
}

body ol.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body ul > li {
  color: rgb(38, 38, 38);
}

body ul.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(89, 89, 89);
  text-decoration: rgb(89, 89, 89);
}

body blockquote {
  background-color: rgb(245, 245, 245);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body table {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 8px;
  width: 178.25px;
}

body td {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  color: rgb(38, 38, 38);
}

body th {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  color: rgb(38, 38, 38);
}`,
    code: `body code {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
  font-family: "??", "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-width: 1px;
  color: rgb(38, 38, 38);
}

body pre > code > [data-line] {
  border-left-color: rgb(153, 110, 36);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(153, 110, 36);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(153, 110, 36);
  border-left-color: rgb(153, 110, 36);
  border-right-color: rgb(153, 110, 36);
  border-top-color: rgb(153, 110, 36);
}

body pre > code, pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-width: 1px;
}

body pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-width: 1px;
}`,
    images: `body audio {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body figcaption {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body img {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body video {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    embeds: `body .file-embed {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .footnotes {
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .transclude {
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(190, 175, 248);
  border-right-color: rgb(176, 176, 176);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-style: solid;
  border-top-width: 1px;
}

body .transclude-inner {
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(190, 175, 248);
  border-right-color: rgb(176, 176, 176);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(190, 175, 248);
  text-decoration: line-through rgb(190, 175, 248);
  text-decoration-color: rgb(190, 175, 248);
}

body input[type=checkbox] {
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-width: 2px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 2px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 2px;
  border-top-color: rgb(176, 176, 176);
  border-top-width: 2px;
  margin-left: -18.4px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(186, 186, 186);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(186, 186, 186);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

body .callout > .callout-content {
  background-color: rgba(230, 230, 230, 0.2);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  box-shadow: rgba(0, 0, 0, 0.03) 0px 1px 2px 0px, rgba(0, 0, 0, 0.03) 0px 2px 4px 0px, rgba(0, 0, 0, 0.03) 0px 4px 8px 0px, rgba(0, 0, 0, 0.03) 0px 6px 12px 0px;
}

body .search > .search-container > .search-space > * {
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(132, 90, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(132, 90, 231);
  border-left-color: rgb(132, 90, 231);
  border-right-color: rgb(132, 90, 231);
  border-top-color: rgb(132, 90, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(132, 90, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(231, 226, 253);
  color: rgb(132, 90, 231);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(176, 176, 176);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(231, 226, 253);
  border-bottom-color: rgb(132, 90, 231);
  border-left-color: rgb(132, 90, 231);
  border-right-color: rgb(132, 90, 231);
  border-top-color: rgb(132, 90, 231);
  color: rgb(132, 90, 231);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(231, 226, 253);
  color: rgb(132, 90, 231);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(132, 90, 231, 0.1);
  border-bottom-color: rgba(132, 90, 231, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgba(132, 90, 231, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(132, 90, 231, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(132, 90, 231, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(132, 90, 231);
}

body h1 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(38, 38, 38);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(38, 38, 38);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(51, 51, 51);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(231, 226, 253);
  border-bottom-color: rgb(190, 175, 248);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(190, 175, 248);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(190, 175, 248);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(190, 175, 248);
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(132, 90, 231);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}`,
    footer: `body footer {
  background-color: rgba(235, 235, 235, 0.8);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body li.section-li > .section .meta {
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
}

body ul.section-ul {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .darkmode svg {
  color: rgb(132, 90, 231);
  stroke: rgb(132, 90, 231);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .breadcrumb-element p {
  color: rgb(89, 89, 89);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .metadata {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgba(235, 235, 235, 0.8);
}

body .page-header h2.page-title {
  color: rgb(132, 90, 231);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(38, 38, 38);
  text-decoration: underline dotted rgb(38, 38, 38);
}

body details {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body input[type=text] {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(38, 38, 38);
  font-family: "??", "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

body progress {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body sub {
  color: rgb(38, 38, 38);
}

body summary {
  color: rgb(38, 38, 38);
}

body sup {
  color: rgb(38, 38, 38);
}`,
  },
};
