import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "flexoki-warm",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 175;
  --accent-l: 33%;
  --accent-s: 57%;
  --background-modifier-active-hover: rgba(36, 132, 124, 0.1);
  --background-modifier-border: #282726;
  --background-modifier-border-focus: #403E3C;
  --background-modifier-border-hover: #343331;
  --background-modifier-error: #D14D41;
  --background-modifier-error-hover: #D14D41;
  --background-modifier-error-rgb: 209, 77, 65;
  --background-modifier-form-field: #282726;
  --background-modifier-form-field-hover: #282726;
  --background-modifier-success: #879A39;
  --background-modifier-success-rgb: 135, 154, 57;
  --background-primary: #100F0F;
  --background-primary-alt: #1C1B1A;
  --background-secondary: #1C1B1A;
  --background-secondary-alt: #282726;
  --bases-cards-background: #100F0F;
  --bases-cards-cover-background: #1C1B1A;
  --bases-cards-shadow: 0 0 0 1px #282726;
  --bases-cards-shadow-hover: 0 0 0 1px #343331;
  --bases-embed-border-color: #282726;
  --bases-group-heading-property-color: #878580;
  --bases-table-border-color: #282726;
  --bases-table-cell-background-active: #100F0F;
  --bases-table-cell-background-disabled: #1C1B1A;
  --bases-table-cell-background-selected: rgba(36, 132, 124, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #403E3C;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(36, 132, 124);
  --bases-table-group-background: #1C1B1A;
  --bases-table-header-background: #100F0F;
  --bases-table-header-color: #878580;
  --bases-table-summary-background: #100F0F;
  --blockquote-border-color: rgb(36, 132, 124);
  --blur-background: color-mix(in srgb, #282726 65%, transparent) linear-gradient(#282726, color-mix(in srgb, #282726 65%, transparent));
  --callout-bug: 209, 77, 65;
  --callout-default: 67, 133, 190;
  --callout-error: 209, 77, 65;
  --callout-example: 139, 126, 200;
  --callout-fail: 209, 77, 65;
  --callout-important: 58, 169, 159;
  --callout-info: 67, 133, 190;
  --callout-question: 218, 112, 44;
  --callout-success: 135, 154, 57;
  --callout-summary: 58, 169, 159;
  --callout-tip: 58, 169, 159;
  --callout-todo: 67, 133, 190;
  --callout-warning: 218, 112, 44;
  --canvas-background: #100F0F;
  --canvas-card-label-color: #575653;
  --canvas-color-1: 209, 77, 65;
  --canvas-color-2: 218, 112, 44;
  --canvas-color-3: 208, 162, 21;
  --canvas-color-4: 135, 154, 57;
  --canvas-color-5: 58, 169, 159;
  --canvas-color-6: 139, 126, 200;
  --canvas-dot-pattern: #282726;
  --caret-color: #CECDC3;
  --checkbox-border-color: #575653;
  --checkbox-border-color-hover: #878580;
  --checkbox-color: rgb(36, 132, 124);
  --checkbox-color-hover: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --checkbox-marker-color: #100F0F;
  --checklist-done-color: #878580;
  --code-background: #1C1B1A;
  --code-border-color: #282726;
  --code-comment: #575653;
  --code-function: #D0A215;
  --code-important: #DA702C;
  --code-keyword: #CE5D97;
  --code-normal: #CECDC3;
  --code-operator: #D14D41;
  --code-property: #3AA99F;
  --code-punctuation: #878580;
  --code-string: #879A39;
  --code-tag: #D14D41;
  --code-value: #8B7EC8;
  --collapse-icon-color: #575653;
  --collapse-icon-color-collapsed: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --color-accent: rgb(36, 132, 124);
  --color-accent-1: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --color-accent-2: hsl(from rgb(36, 132, 124) calc(h - 5) calc(s * 1.05) calc(l * 1.29));
  --color-accent-hsl: 175, 57%, 33%;
  --color-accent-hsl-default: 175, 57%, 33%;
  --color-base-00: #100F0F;
  --color-base-05: #100F0F;
  --color-base-10: #1C1B1A;
  --color-base-100: #CECDC3;
  --color-base-20: #1C1B1A;
  --color-base-25: #282726;
  --color-base-30: #282726;
  --color-base-35: #343331;
  --color-base-40: #403E3C;
  --color-base-50: #575653;
  --color-base-60: #6F6E69;
  --color-base-70: #878580;
  --color-blue: #4385BE;
  --color-blue-rgb: 67, 133, 190;
  --color-cyan: #3AA99F;
  --color-cyan-rgb: 58, 169, 159;
  --color-green: #879A39;
  --color-green-rgb: 135, 154, 57;
  --color-orange: #DA702C;
  --color-orange-rgb: 218, 112, 44;
  --color-pink: #CE5D97;
  --color-pink-rgb: 206, 93, 151;
  --color-purple: #8B7EC8;
  --color-purple-rgb: 139, 126, 200;
  --color-red: #D14D41;
  --color-red-rgb: 209, 77, 65;
  --color-yellow: #D0A215;
  --color-yellow-rgb: 208, 162, 21;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #282726;
  --divider-color-hover: rgb(36, 132, 124);
  --dropdown-background: #282726;
  --dropdown-background-hover: #343331;
  --embed-block-shadow-hover: 0 0 0 1px #282726, inset 0 0 0 1px #282726;
  --embed-border-start: 2px solid rgb(36, 132, 124);
  --file-header-background: #100F0F;
  --file-header-background-focused: #100F0F;
  --flair-background: #282726;
  --flair-color: #CECDC3;
  --footnote-divider-color: #282726;
  --footnote-id-color: #878580;
  --footnote-id-color-no-occurrences: #575653;
  --graph-line: #343331;
  --graph-node: #878580;
  --graph-node-attachment: #D0A215;
  --graph-node-focused: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --graph-node-tag: #879A39;
  --graph-node-unresolved: #575653;
  --graph-text: #CECDC3;
  --gray: var(--text-muted);
  --heading-formatting: #575653;
  --highlight: var(--background-modifier-active-hover);
  --hr-color: #282726;
  --icon-color: #878580;
  --icon-color-active: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --icon-color-focused: #CECDC3;
  --icon-color-hover: #878580;
  --input-date-separator: #575653;
  --input-placeholder-color: #575653;
  --interactive-accent: rgb(36, 132, 124);
  --interactive-accent-hover: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --interactive-accent-hsl: 175, 57%, 33%;
  --interactive-hover: #343331;
  --interactive-normal: #282726;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --link-color-hover: hsl(from rgb(36, 132, 124) calc(h - 5) calc(s * 1.05) calc(l * 1.29));
  --link-external-color: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --link-external-color-hover: hsl(from rgb(36, 132, 124) calc(h - 5) calc(s * 1.05) calc(l * 1.29));
  --link-unresolved-color: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --link-unresolved-decoration-color: rgba(36, 132, 124, 0.3);
  --list-marker-color: #575653;
  --list-marker-color-collapsed: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --list-marker-color-hover: #878580;
  --menu-background: #1C1B1A;
  --menu-border-color: #343331;
  --metadata-border-color: #282726;
  --metadata-divider-color: #282726;
  --metadata-input-text-color: #CECDC3;
  --metadata-label-text-color: #878580;
  --metadata-label-text-color-hover: #878580;
  --metadata-property-box-shadow-focus: 0 0 0 2px #403E3C;
  --metadata-property-box-shadow-hover: 0 0 0 1px #343331;
  --modal-background: #100F0F;
  --modal-border-color: #403E3C;
  --nav-collapse-icon-color: #575653;
  --nav-collapse-icon-color-collapsed: #575653;
  --nav-heading-color: #CECDC3;
  --nav-heading-color-collapsed: #575653;
  --nav-heading-color-collapsed-hover: #878580;
  --nav-heading-color-hover: #CECDC3;
  --nav-item-background-selected: rgba(36, 132, 124, 0.15);
  --nav-item-color: #878580;
  --nav-item-color-active: #CECDC3;
  --nav-item-color-highlighted: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --nav-item-color-hover: #CECDC3;
  --nav-item-color-selected: #CECDC3;
  --nav-tag-color: #575653;
  --nav-tag-color-active: #878580;
  --nav-tag-color-hover: #878580;
  --pdf-background: #100F0F;
  --pdf-page-background: #100F0F;
  --pdf-shadow: 0 0 0 1px #282726;
  --pdf-sidebar-background: #100F0F;
  --pdf-thumbnail-shadow: 0 0 0 1px #282726;
  --pill-border-color: #282726;
  --pill-border-color-hover: #343331;
  --pill-color: #878580;
  --pill-color-hover: #CECDC3;
  --pill-color-remove: #575653;
  --pill-color-remove-hover: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --prompt-background: #100F0F;
  --prompt-border-color: #403E3C;
  --raised-background: color-mix(in srgb, #282726 65%, transparent) linear-gradient(#282726, color-mix(in srgb, #282726 65%, transparent));
  --ribbon-background: #1C1B1A;
  --ribbon-background-collapsed: #100F0F;
  --search-clear-button-color: #878580;
  --search-icon-color: #878580;
  --search-result-background: #100F0F;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #CECDC3;
  --setting-items-background: #1C1B1A;
  --setting-items-border-color: #282726;
  --slider-thumb-border-color: #343331;
  --slider-track-background: #282726;
  --status-bar-background: #1C1B1A;
  --status-bar-border-color: #282726;
  --status-bar-text-color: #878580;
  --suggestion-background: #100F0F;
  --sync-avatar-color-1: #D14D41;
  --sync-avatar-color-2: #DA702C;
  --sync-avatar-color-3: #D0A215;
  --sync-avatar-color-4: #879A39;
  --sync-avatar-color-5: #3AA99F;
  --sync-avatar-color-6: #4385BE;
  --sync-avatar-color-7: #8B7EC8;
  --sync-avatar-color-8: #CE5D97;
  --tab-background-active: #100F0F;
  --tab-container-background: #1C1B1A;
  --tab-divider-color: #343331;
  --tab-outline-color: #282726;
  --tab-switcher-background: #1C1B1A;
  --tab-switcher-menubar-background: linear-gradient(to top, #1C1B1A, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(36, 132, 124);
  --tab-text-color: #575653;
  --tab-text-color-active: #878580;
  --tab-text-color-focused: #878580;
  --tab-text-color-focused-active: #878580;
  --tab-text-color-focused-active-current: #CECDC3;
  --tab-text-color-focused-highlighted: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --table-add-button-border-color: #282726;
  --table-border-color: #282726;
  --table-drag-handle-background-active: rgb(36, 132, 124);
  --table-drag-handle-color: #575653;
  --table-header-border-color: #282726;
  --table-header-color: #CECDC3;
  --table-selection: rgba(36, 132, 124, 0.1);
  --table-selection-border-color: rgb(36, 132, 124);
  --tag-background: rgba(36, 132, 124, 0.1);
  --tag-background-hover: rgba(36, 132, 124, 0.2);
  --tag-border-color: rgba(36, 132, 124, 0.15);
  --tag-border-color-hover: rgba(36, 132, 124, 0.15);
  --tag-color: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --tag-color-hover: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --text-accent-hover: hsl(from rgb(36, 132, 124) calc(h - 5) calc(s * 1.05) calc(l * 1.29));
  --text-error: #D14D41;
  --text-faint: #575653;
  --text-muted: #878580;
  --text-normal: #CECDC3;
  --text-selection: rgba(36, 132, 124, 0.33);
  --text-success: #879A39;
  --text-warning: #DA702C;
  --textHighlight: var(--background-modifier-active-hover);
  --titlebar-background: #1C1B1A;
  --titlebar-background-focused: #282726;
  --titlebar-border-color: #282726;
  --titlebar-text-color: #878580;
  --titlebar-text-color-focused: #CECDC3;
  --vault-profile-color: #CECDC3;
  --vault-profile-color-hover: #CECDC3;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 27, 26);
  color: rgb(206, 205, 195);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(16, 15, 15);
  color: rgb(206, 205, 195);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 27, 26);
  color: rgb(206, 205, 195);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(40, 39, 38);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 27, 26);
  border-left-color: rgb(40, 39, 38);
  color: rgb(206, 205, 195);
}

body div#quartz-root {
  background-color: rgb(16, 15, 15);
  color: rgb(206, 205, 195);
}`,
    typography: `body .page article p > b, b {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body .page article p > em, em {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body .page article p > i, i {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body .page article p > strong, strong {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body .text-highlight {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body del {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration: line-through rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body p {
  color: rgb(135, 133, 128);
  outline: rgb(135, 133, 128) none 0px;
  text-decoration: rgb(135, 133, 128);
  text-decoration-color: rgb(135, 133, 128);
}`,
    links: `body a.external, footer a {
  color: color(srgb 0.158859 0.600141 0.541304);
  outline: color(srgb 0.158859 0.600141 0.541304) none 0px;
  text-decoration: underline color(srgb 0.158859 0.600141 0.541304);
  text-decoration-color: color(srgb 0.158859 0.600141 0.541304);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: color(srgb 0.158859 0.600141 0.541304);
  outline: color(srgb 0.158859 0.600141 0.541304) none 0px;
  text-decoration: underline color(srgb 0.158859 0.600141 0.541304);
  text-decoration-color: color(srgb 0.158859 0.600141 0.541304);
}

body a.internal.broken {
  color: color(srgb 0.158859 0.600141 0.541304);
  outline: color(srgb 0.158859 0.600141 0.541304) none 0px;
  text-decoration: underline rgba(36, 132, 124, 0.3);
  text-decoration-color: rgba(36, 132, 124, 0.3);
}`,
    lists: `body dd {
  color: rgb(206, 205, 195);
}

body dt {
  color: rgb(206, 205, 195);
}

body ol > li {
  color: rgb(206, 205, 195);
}

body ol.overflow {
  background-color: rgb(16, 15, 15);
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body ul > li {
  color: rgb(206, 205, 195);
}

body ul.overflow {
  background-color: rgb(16, 15, 15);
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(87, 86, 83);
  text-decoration: rgb(87, 86, 83);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body table {
  color: rgb(206, 205, 195);
}

body td {
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
  color: rgb(206, 205, 195);
}

body th {
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
  color: rgb(206, 205, 195);
}`,
    code: `body code {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
  color: rgb(206, 205, 195);
}

body pre > code > [data-line] {
  border-left-color: rgb(208, 162, 21);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(208, 162, 21);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(208, 162, 21);
  border-left-color: rgb(208, 162, 21);
  border-right-color: rgb(208, 162, 21);
  border-top-color: rgb(208, 162, 21);
}

body pre > code, pre:has(> code) {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
}

body pre:has(> code) {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
}`,
    images: `body audio {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body figcaption {
  color: rgb(206, 205, 195);
}

body figure {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body img {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body video {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}`,
    embeds: `body .file-embed {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(135, 133, 128);
  border-left-color: rgb(135, 133, 128);
  border-right-color: rgb(135, 133, 128);
  border-top-color: rgb(135, 133, 128);
}

body .footnotes {
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}

body .transclude {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(36, 132, 124);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body .transclude-inner {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(36, 132, 124);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(135, 133, 128);
  text-decoration: line-through rgb(135, 133, 128);
  text-decoration-color: rgb(135, 133, 128);
}

body input[type=checkbox] {
  border-bottom-color: rgb(87, 86, 83);
  border-left-color: rgb(87, 86, 83);
  border-right-color: rgb(87, 86, 83);
  border-top-color: rgb(87, 86, 83);
}

body li.task-list-item[data-task='!'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='*'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='-'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='/'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='>'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='?'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='I'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='S'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='b'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='c'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='d'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='f'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='i'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='k'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='l'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='p'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='u'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body li.task-list-item[data-task='w'] {
  color: rgb(206, 205, 195);
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
}

body .callout[data-callout="abstract"] {
  --callout-color: 58, 169, 159;
  background-color: rgba(58, 169, 159, 0.1);
  border-bottom-color: rgba(58, 169, 159, 0.25);
  border-left-color: rgba(58, 169, 159, 0.25);
  border-right-color: rgba(58, 169, 159, 0.25);
  border-top-color: rgba(58, 169, 159, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 209, 77, 65;
  background-color: rgba(209, 77, 65, 0.1);
  border-bottom-color: rgba(209, 77, 65, 0.25);
  border-left-color: rgba(209, 77, 65, 0.25);
  border-right-color: rgba(209, 77, 65, 0.25);
  border-top-color: rgba(209, 77, 65, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 209, 77, 65;
  background-color: rgba(209, 77, 65, 0.1);
  border-bottom-color: rgba(209, 77, 65, 0.25);
  border-left-color: rgba(209, 77, 65, 0.25);
  border-right-color: rgba(209, 77, 65, 0.25);
  border-top-color: rgba(209, 77, 65, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 139, 126, 200;
  background-color: rgba(139, 126, 200, 0.1);
  border-bottom-color: rgba(139, 126, 200, 0.25);
  border-left-color: rgba(139, 126, 200, 0.25);
  border-right-color: rgba(139, 126, 200, 0.25);
  border-top-color: rgba(139, 126, 200, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 209, 77, 65;
  background-color: rgba(209, 77, 65, 0.1);
  border-bottom-color: rgba(209, 77, 65, 0.25);
  border-left-color: rgba(209, 77, 65, 0.25);
  border-right-color: rgba(209, 77, 65, 0.25);
  border-top-color: rgba(209, 77, 65, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 67, 133, 190;
  background-color: rgba(67, 133, 190, 0.1);
  border-bottom-color: rgba(67, 133, 190, 0.25);
  border-left-color: rgba(67, 133, 190, 0.25);
  border-right-color: rgba(67, 133, 190, 0.25);
  border-top-color: rgba(67, 133, 190, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 67, 133, 190;
  background-color: rgba(67, 133, 190, 0.1);
  border-bottom-color: rgba(67, 133, 190, 0.25);
  border-left-color: rgba(67, 133, 190, 0.25);
  border-right-color: rgba(67, 133, 190, 0.25);
  border-top-color: rgba(67, 133, 190, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 218, 112, 44;
  background-color: rgba(218, 112, 44, 0.1);
  border-bottom-color: rgba(218, 112, 44, 0.25);
  border-left-color: rgba(218, 112, 44, 0.25);
  border-right-color: rgba(218, 112, 44, 0.25);
  border-top-color: rgba(218, 112, 44, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 135, 154, 57;
  background-color: rgba(135, 154, 57, 0.1);
  border-bottom-color: rgba(135, 154, 57, 0.25);
  border-left-color: rgba(135, 154, 57, 0.25);
  border-right-color: rgba(135, 154, 57, 0.25);
  border-top-color: rgba(135, 154, 57, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 58, 169, 159;
  background-color: rgba(58, 169, 159, 0.1);
  border-bottom-color: rgba(58, 169, 159, 0.25);
  border-left-color: rgba(58, 169, 159, 0.25);
  border-right-color: rgba(58, 169, 159, 0.25);
  border-top-color: rgba(58, 169, 159, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 67, 133, 190;
  background-color: rgba(67, 133, 190, 0.1);
  border-bottom-color: rgba(67, 133, 190, 0.25);
  border-left-color: rgba(67, 133, 190, 0.25);
  border-right-color: rgba(67, 133, 190, 0.25);
  border-top-color: rgba(67, 133, 190, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 218, 112, 44;
  background-color: rgba(218, 112, 44, 0.1);
  border-bottom-color: rgba(218, 112, 44, 0.25);
  border-left-color: rgba(218, 112, 44, 0.25);
  border-right-color: rgba(218, 112, 44, 0.25);
  border-top-color: rgba(218, 112, 44, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(40, 39, 38);
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
  color: rgb(206, 205, 195);
}

body .search > .search-container > .search-space {
  background-color: rgb(16, 15, 15);
  border-bottom-color: rgb(64, 62, 60);
  border-left-color: rgb(64, 62, 60);
  border-right-color: rgb(64, 62, 60);
  border-top-color: rgb(64, 62, 60);
}

body .search > .search-container > .search-space > * {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(206, 205, 195);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(206, 205, 195);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(206, 205, 195);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(64, 62, 60);
  border-left-color: rgb(64, 62, 60);
  border-right-color: rgb(64, 62, 60);
  border-top-color: rgb(64, 62, 60);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(28, 27, 26);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(206, 205, 195);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(36, 132, 124, 0.1);
  border-bottom-color: rgba(36, 132, 124, 0.15);
  border-left-color: rgba(36, 132, 124, 0.15);
  border-right-color: rgba(36, 132, 124, 0.15);
  border-top-color: rgba(36, 132, 124, 0.15);
}

body a.internal.tag-link::before {
  color: color(srgb 0.158859 0.600141 0.541304);
}

body h1 {
  color: rgb(206, 205, 195);
}

body h2 {
  color: rgb(206, 205, 195);
}

body h2.page-title, h2.page-title a {
  color: rgb(206, 205, 195);
}

body h3 {
  color: rgb(206, 205, 195);
}

body h4 {
  color: rgb(206, 205, 195);
}

body h5 {
  color: rgb(206, 205, 195);
}

body h6 {
  color: rgb(206, 205, 195);
}

body hr {
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
}`,
    scrollbars: `body .callout {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgba(67, 133, 190, 0.25);
  border-left-color: rgba(67, 133, 190, 0.25);
  border-right-color: rgba(67, 133, 190, 0.25);
  border-top-color: rgba(67, 133, 190, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(16, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 15, 15);
}

body ::-webkit-scrollbar-corner {
  background: rgb(16, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 15, 15);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(16, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 15, 15);
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(16, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 15, 15);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 15, 15);
}

body ::-webkit-scrollbar-track {
  background: rgb(16, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 15, 15);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(135, 133, 128);
  text-decoration: rgb(135, 133, 128);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(135, 133, 128);
  text-decoration: rgb(135, 133, 128);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(135, 133, 128);
  text-decoration: rgb(135, 133, 128);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(135, 133, 128);
  border-left-color: rgb(135, 133, 128);
  border-right-color: rgb(135, 133, 128);
  border-top-color: rgb(135, 133, 128);
  color: rgb(135, 133, 128);
}`,
    footer: `body footer {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
  color: rgb(135, 133, 128);
}

body footer ul li a {
  color: rgb(135, 133, 128);
  text-decoration: rgb(135, 133, 128);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(206, 205, 195);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(135, 133, 128);
  text-decoration: rgb(135, 133, 128);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(135, 133, 128);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body li.section-li > .section .meta {
  color: rgb(135, 133, 128);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(135, 133, 128);
  text-decoration: rgb(135, 133, 128);
}

body ul.section-ul {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(135, 133, 128);
  border-left-color: rgb(135, 133, 128);
  border-right-color: rgb(135, 133, 128);
  border-top-color: rgb(135, 133, 128);
  color: rgb(135, 133, 128);
}

body .darkmode svg {
  color: rgb(135, 133, 128);
  stroke: rgb(135, 133, 128);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(135, 133, 128);
  border-left-color: rgb(135, 133, 128);
  border-right-color: rgb(135, 133, 128);
  border-top-color: rgb(135, 133, 128);
  color: rgb(135, 133, 128);
}

body .breadcrumb-element p {
  color: rgb(87, 86, 83);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}

body .metadata {
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
  color: rgb(135, 133, 128);
}

body .metadata-properties {
  border-bottom-color: rgb(135, 133, 128);
  border-left-color: rgb(135, 133, 128);
  border-right-color: rgb(135, 133, 128);
  border-top-color: rgb(135, 133, 128);
  color: rgb(135, 133, 128);
}

body .navigation-progress {
  background-color: rgb(28, 27, 26);
}

body .page-header h2.page-title {
  color: rgb(206, 205, 195);
}

body abbr {
  color: rgb(206, 205, 195);
  text-decoration: underline dotted rgb(206, 205, 195);
}

body details {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body input[type=text] {
  border-bottom-color: rgb(135, 133, 128);
  border-left-color: rgb(135, 133, 128);
  border-right-color: rgb(135, 133, 128);
  border-top-color: rgb(135, 133, 128);
  color: rgb(135, 133, 128);
}

body kbd {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}

body progress {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body sub {
  color: rgb(206, 205, 195);
}

body summary {
  color: rgb(206, 205, 195);
}

body sup {
  color: rgb(206, 205, 195);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 175;
  --accent-l: 33%;
  --accent-s: 57%;
  --background-modifier-active-hover: rgba(36, 132, 124, 0.1);
  --background-modifier-border: #E6E4D9;
  --background-modifier-border-focus: #CECDC3;
  --background-modifier-border-hover: #DAD8CE;
  --background-modifier-error: #AF3029;
  --background-modifier-error-hover: #AF3029;
  --background-modifier-error-rgb: 175, 48, 41;
  --background-modifier-success: #66800B;
  --background-modifier-success-rgb: 102, 128, 11;
  --background-secondary: #fcfaf8;
  --bases-cards-shadow: 0 0 0 1px #E6E4D9;
  --bases-cards-shadow-hover: 0 0 0 1px #DAD8CE;
  --bases-embed-border-color: #E6E4D9;
  --bases-group-heading-property-color: #6F6E69;
  --bases-table-border-color: #E6E4D9;
  --bases-table-cell-background-selected: rgba(36, 132, 124, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #CECDC3;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --bases-table-header-color: #6F6E69;
  --blockquote-border-color: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --callout-bug: 175, 48, 41;
  --callout-default: 32, 94, 166;
  --callout-error: 175, 48, 41;
  --callout-example: 94, 64, 157;
  --callout-fail: 175, 48, 41;
  --callout-important: 36, 131, 123;
  --callout-info: 32, 94, 166;
  --callout-question: 188, 82, 21;
  --callout-success: 102, 128, 11;
  --callout-summary: 36, 131, 123;
  --callout-tip: 36, 131, 123;
  --callout-todo: 32, 94, 166;
  --callout-warning: 188, 82, 21;
  --canvas-card-label-color: #B7B5AC;
  --canvas-color-1: 175, 48, 41;
  --canvas-color-2: 188, 82, 21;
  --canvas-color-3: 173, 131, 1;
  --canvas-color-4: 102, 128, 11;
  --canvas-color-5: 36, 131, 123;
  --canvas-color-6: 94, 64, 157;
  --canvas-dot-pattern: #E6E4D9;
  --caret-color: #100F0F;
  --checkbox-border-color: #B7B5AC;
  --checkbox-border-color-hover: #6F6E69;
  --checkbox-color: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --checkbox-color-hover: hsl(from rgb(36, 132, 124) calc(h - 5) calc(s * 1.05) calc(l * 1.29));
  --checklist-done-color: #6F6E69;
  --code-border-color: #E6E4D9;
  --code-comment: #B7B5AC;
  --code-function: #AD8301;
  --code-important: #BC5215;
  --code-keyword: #A02F6F;
  --code-normal: #100F0F;
  --code-operator: #AF3029;
  --code-property: #24837B;
  --code-punctuation: #6F6E69;
  --code-string: #66800B;
  --code-tag: #AF3029;
  --code-value: #5E409D;
  --collapse-icon-color: #B7B5AC;
  --collapse-icon-color-collapsed: rgb(36, 132, 124);
  --color-accent: rgb(36, 132, 124);
  --color-accent-1: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --color-accent-2: hsl(from rgb(36, 132, 124) calc(h - 5) calc(s * 1.05) calc(l * 1.29));
  --color-accent-hsl: 175, 57%, 33%;
  --color-accent-hsl-default: 175, 57%, 33%;
  --color-base-100: #100F0F;
  --color-base-20: #fcfaf8;
  --color-base-25: #E6E4D9;
  --color-base-30: #E6E4D9;
  --color-base-35: #DAD8CE;
  --color-base-40: #CECDC3;
  --color-base-50: #B7B5AC;
  --color-base-60: #878580;
  --color-base-70: #6F6E69;
  --color-blue: #205EA6;
  --color-blue-rgb: 32, 94, 166;
  --color-cyan: #24837B;
  --color-cyan-rgb: 36, 131, 123;
  --color-green: #66800B;
  --color-green-rgb: 102, 128, 11;
  --color-orange: #BC5215;
  --color-orange-rgb: 188, 82, 21;
  --color-pink: #A02F6F;
  --color-pink-rgb: 160, 47, 111;
  --color-purple: #5E409D;
  --color-purple-rgb: 94, 64, 157;
  --color-red: #AF3029;
  --color-red-rgb: 175, 48, 41;
  --color-yellow: #AD8301;
  --color-yellow-rgb: 173, 131, 1;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #E6E4D9;
  --divider-color-hover: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --embed-block-shadow-hover: 0 0 0 1px #E6E4D9, inset 0 0 0 1px #E6E4D9;
  --embed-border-start: 2px solid hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --flair-color: #100F0F;
  --footnote-divider-color: #E6E4D9;
  --footnote-id-color: #6F6E69;
  --footnote-id-color-no-occurrences: #B7B5AC;
  --graph-line: #DAD8CE;
  --graph-node: #6F6E69;
  --graph-node-attachment: #AD8301;
  --graph-node-focused: rgb(36, 132, 124);
  --graph-node-tag: #66800B;
  --graph-node-unresolved: #B7B5AC;
  --graph-text: #100F0F;
  --gray: var(--text-muted);
  --heading-formatting: #B7B5AC;
  --highlight: var(--background-modifier-active-hover);
  --hr-color: #E6E4D9;
  --icon-color: #6F6E69;
  --icon-color-active: rgb(36, 132, 124);
  --icon-color-focused: #100F0F;
  --icon-color-hover: #6F6E69;
  --input-date-separator: #B7B5AC;
  --input-placeholder-color: #B7B5AC;
  --interactive-accent: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --interactive-accent-hover: hsl(from rgb(36, 132, 124) calc(h - 5) calc(s * 1.05) calc(l * 1.29));
  --interactive-accent-hsl: 175, 57%, 33%;
  --lightgray: var(--background-secondary);
  --link-color: rgb(36, 132, 124);
  --link-color-hover: hsl(from rgb(36, 132, 124) calc(h - 5) calc(s * 1.05) calc(l * 1.29));
  --link-external-color: rgb(36, 132, 124);
  --link-external-color-hover: hsl(from rgb(36, 132, 124) calc(h - 5) calc(s * 1.05) calc(l * 1.29));
  --link-unresolved-color: rgb(36, 132, 124);
  --link-unresolved-decoration-color: rgba(36, 132, 124, 0.3);
  --list-marker-color: #B7B5AC;
  --list-marker-color-collapsed: rgb(36, 132, 124);
  --list-marker-color-hover: #6F6E69;
  --menu-background: #fcfaf8;
  --menu-border-color: #DAD8CE;
  --metadata-border-color: #E6E4D9;
  --metadata-divider-color: #E6E4D9;
  --metadata-input-text-color: #100F0F;
  --metadata-label-text-color: #6F6E69;
  --metadata-label-text-color-hover: #6F6E69;
  --metadata-property-box-shadow-focus: 0 0 0 2px #CECDC3;
  --metadata-property-box-shadow-hover: 0 0 0 1px #DAD8CE;
  --modal-border-color: #CECDC3;
  --nav-collapse-icon-color: #B7B5AC;
  --nav-collapse-icon-color-collapsed: #B7B5AC;
  --nav-heading-color: #100F0F;
  --nav-heading-color-collapsed: #B7B5AC;
  --nav-heading-color-collapsed-hover: #6F6E69;
  --nav-heading-color-hover: #100F0F;
  --nav-item-background-selected: rgba(36, 132, 124, 0.15);
  --nav-item-color: #6F6E69;
  --nav-item-color-active: #100F0F;
  --nav-item-color-highlighted: rgb(36, 132, 124);
  --nav-item-color-hover: #100F0F;
  --nav-item-color-selected: #100F0F;
  --nav-tag-color: #B7B5AC;
  --nav-tag-color-active: #6F6E69;
  --nav-tag-color-hover: #6F6E69;
  --pill-border-color: #E6E4D9;
  --pill-border-color-hover: #DAD8CE;
  --pill-color: #6F6E69;
  --pill-color-hover: #100F0F;
  --pill-color-remove: #B7B5AC;
  --pill-color-remove-hover: rgb(36, 132, 124);
  --prompt-border-color: #CECDC3;
  --ribbon-background: #fcfaf8;
  --search-clear-button-color: #6F6E69;
  --search-icon-color: #6F6E69;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #100F0F;
  --setting-items-border-color: #E6E4D9;
  --slider-thumb-border-color: #DAD8CE;
  --slider-track-background: #E6E4D9;
  --status-bar-background: #fcfaf8;
  --status-bar-border-color: #E6E4D9;
  --status-bar-text-color: #6F6E69;
  --sync-avatar-color-1: #AF3029;
  --sync-avatar-color-2: #BC5215;
  --sync-avatar-color-3: #AD8301;
  --sync-avatar-color-4: #66800B;
  --sync-avatar-color-5: #24837B;
  --sync-avatar-color-6: #205EA6;
  --sync-avatar-color-7: #5E409D;
  --sync-avatar-color-8: #A02F6F;
  --tab-container-background: #fcfaf8;
  --tab-divider-color: #DAD8CE;
  --tab-outline-color: #E6E4D9;
  --tab-switcher-background: #fcfaf8;
  --tab-switcher-menubar-background: linear-gradient(to top, #fcfaf8, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(36, 132, 124);
  --tab-text-color: #B7B5AC;
  --tab-text-color-active: #6F6E69;
  --tab-text-color-focused: #6F6E69;
  --tab-text-color-focused-active: #6F6E69;
  --tab-text-color-focused-active-current: #100F0F;
  --tab-text-color-focused-highlighted: rgb(36, 132, 124);
  --table-add-button-border-color: #E6E4D9;
  --table-border-color: #E6E4D9;
  --table-drag-handle-background-active: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --table-drag-handle-color: #B7B5AC;
  --table-header-border-color: #E6E4D9;
  --table-header-color: #100F0F;
  --table-selection: rgba(36, 132, 124, 0.1);
  --table-selection-border-color: hsl(from rgb(36, 132, 124) calc(h - 3) calc(s * 1.02) calc(l * 1.15));
  --tag-background: rgba(36, 132, 124, 0.1);
  --tag-background-hover: rgba(36, 132, 124, 0.2);
  --tag-border-color: rgba(36, 132, 124, 0.15);
  --tag-border-color-hover: rgba(36, 132, 124, 0.15);
  --tag-color: rgb(36, 132, 124);
  --tag-color-hover: rgb(36, 132, 124);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(36, 132, 124);
  --text-accent-hover: hsl(from rgb(36, 132, 124) calc(h - 5) calc(s * 1.05) calc(l * 1.29));
  --text-error: #AF3029;
  --text-faint: #B7B5AC;
  --text-muted: #6F6E69;
  --text-normal: #100F0F;
  --text-selection: rgba(36, 132, 124, 0.2);
  --text-success: #66800B;
  --text-warning: #BC5215;
  --textHighlight: var(--background-modifier-active-hover);
  --titlebar-background: #fcfaf8;
  --titlebar-border-color: #E6E4D9;
  --titlebar-text-color: #6F6E69;
  --titlebar-text-color-focused: #100F0F;
  --vault-profile-color: #100F0F;
  --vault-profile-color-hover: #100F0F;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(252, 250, 248);
  color: rgb(16, 15, 15);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(16, 15, 15);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(252, 250, 248);
  color: rgb(16, 15, 15);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 228, 217);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(252, 250, 248);
  border-left-color: rgb(230, 228, 217);
  color: rgb(16, 15, 15);
}

body div#quartz-root {
  color: rgb(16, 15, 15);
}`,
    typography: `body .page article p > b, b {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body .page article p > em, em {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body .page article p > i, i {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body .page article p > strong, strong {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body .text-highlight {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body del {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration: line-through rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body p {
  color: rgb(111, 110, 105);
  outline: rgb(111, 110, 105) none 0px;
  text-decoration: rgb(111, 110, 105);
  text-decoration-color: rgb(111, 110, 105);
}`,
    links: `body a.external, footer a {
  color: rgb(36, 132, 124);
  outline: rgb(36, 132, 124) none 0px;
  text-decoration: underline rgb(36, 132, 124);
  text-decoration-color: rgb(36, 132, 124);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(36, 132, 124);
  outline: rgb(36, 132, 124) none 0px;
  text-decoration: underline rgb(36, 132, 124);
  text-decoration-color: rgb(36, 132, 124);
}

body a.internal.broken {
  color: rgb(36, 132, 124);
  outline: rgb(36, 132, 124) none 0px;
  text-decoration: underline rgba(36, 132, 124, 0.3);
  text-decoration-color: rgba(36, 132, 124, 0.3);
}`,
    lists: `body dd {
  color: rgb(16, 15, 15);
}

body dt {
  color: rgb(16, 15, 15);
}

body ol > li {
  color: rgb(16, 15, 15);
}

body ol.overflow {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

body ul > li {
  color: rgb(16, 15, 15);
}

body ul.overflow {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(183, 181, 172);
  text-decoration: rgb(183, 181, 172);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

body table {
  color: rgb(16, 15, 15);
}

body td {
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
  color: rgb(16, 15, 15);
}

body th {
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
  color: rgb(16, 15, 15);
}`,
    code: `body code {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
  color: rgb(16, 15, 15);
}

body pre > code > [data-line] {
  border-left-color: rgb(173, 131, 1);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(173, 131, 1);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(173, 131, 1);
  border-left-color: rgb(173, 131, 1);
  border-right-color: rgb(173, 131, 1);
  border-top-color: rgb(173, 131, 1);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
}

body pre:has(> code) {
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
}`,
    images: `body audio {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

body figcaption {
  color: rgb(16, 15, 15);
}

body figure {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

body img {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

body video {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(111, 110, 105);
  border-left-color: rgb(111, 110, 105);
  border-right-color: rgb(111, 110, 105);
  border-top-color: rgb(111, 110, 105);
}

body .footnotes {
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}

body .transclude {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: color(srgb 0.158859 0.600141 0.541304);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

body .transclude-inner {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: color(srgb 0.158859 0.600141 0.541304);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(111, 110, 105);
  text-decoration: line-through rgb(111, 110, 105);
  text-decoration-color: rgb(111, 110, 105);
}

body input[type=checkbox] {
  border-bottom-color: rgb(183, 181, 172);
  border-left-color: rgb(183, 181, 172);
  border-right-color: rgb(183, 181, 172);
  border-top-color: rgb(183, 181, 172);
}

body li.task-list-item[data-task='!'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='*'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='-'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='/'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='>'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='?'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='I'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='S'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='b'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='c'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='d'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='f'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='i'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='k'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='l'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='p'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='u'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body li.task-list-item[data-task='w'] {
  color: rgb(16, 15, 15);
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
}

body .callout[data-callout="abstract"] {
  --callout-color: 36, 131, 123;
  background-color: rgba(36, 131, 123, 0.1);
  border-bottom-color: rgba(36, 131, 123, 0.25);
  border-left-color: rgba(36, 131, 123, 0.25);
  border-right-color: rgba(36, 131, 123, 0.25);
  border-top-color: rgba(36, 131, 123, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 175, 48, 41;
  background-color: rgba(175, 48, 41, 0.1);
  border-bottom-color: rgba(175, 48, 41, 0.25);
  border-left-color: rgba(175, 48, 41, 0.25);
  border-right-color: rgba(175, 48, 41, 0.25);
  border-top-color: rgba(175, 48, 41, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 175, 48, 41;
  background-color: rgba(175, 48, 41, 0.1);
  border-bottom-color: rgba(175, 48, 41, 0.25);
  border-left-color: rgba(175, 48, 41, 0.25);
  border-right-color: rgba(175, 48, 41, 0.25);
  border-top-color: rgba(175, 48, 41, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 94, 64, 157;
  background-color: rgba(94, 64, 157, 0.1);
  border-bottom-color: rgba(94, 64, 157, 0.25);
  border-left-color: rgba(94, 64, 157, 0.25);
  border-right-color: rgba(94, 64, 157, 0.25);
  border-top-color: rgba(94, 64, 157, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 175, 48, 41;
  background-color: rgba(175, 48, 41, 0.1);
  border-bottom-color: rgba(175, 48, 41, 0.25);
  border-left-color: rgba(175, 48, 41, 0.25);
  border-right-color: rgba(175, 48, 41, 0.25);
  border-top-color: rgba(175, 48, 41, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 32, 94, 166;
  background-color: rgba(32, 94, 166, 0.1);
  border-bottom-color: rgba(32, 94, 166, 0.25);
  border-left-color: rgba(32, 94, 166, 0.25);
  border-right-color: rgba(32, 94, 166, 0.25);
  border-top-color: rgba(32, 94, 166, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 32, 94, 166;
  background-color: rgba(32, 94, 166, 0.1);
  border-bottom-color: rgba(32, 94, 166, 0.25);
  border-left-color: rgba(32, 94, 166, 0.25);
  border-right-color: rgba(32, 94, 166, 0.25);
  border-top-color: rgba(32, 94, 166, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 188, 82, 21;
  background-color: rgba(188, 82, 21, 0.1);
  border-bottom-color: rgba(188, 82, 21, 0.25);
  border-left-color: rgba(188, 82, 21, 0.25);
  border-right-color: rgba(188, 82, 21, 0.25);
  border-top-color: rgba(188, 82, 21, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 102, 128, 11;
  background-color: rgba(102, 128, 11, 0.1);
  border-bottom-color: rgba(102, 128, 11, 0.25);
  border-left-color: rgba(102, 128, 11, 0.25);
  border-right-color: rgba(102, 128, 11, 0.25);
  border-top-color: rgba(102, 128, 11, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 36, 131, 123;
  background-color: rgba(36, 131, 123, 0.1);
  border-bottom-color: rgba(36, 131, 123, 0.25);
  border-left-color: rgba(36, 131, 123, 0.25);
  border-right-color: rgba(36, 131, 123, 0.25);
  border-top-color: rgba(36, 131, 123, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 32, 94, 166;
  background-color: rgba(32, 94, 166, 0.1);
  border-bottom-color: rgba(32, 94, 166, 0.25);
  border-left-color: rgba(32, 94, 166, 0.25);
  border-right-color: rgba(32, 94, 166, 0.25);
  border-top-color: rgba(32, 94, 166, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 188, 82, 21;
  background-color: rgba(188, 82, 21, 0.1);
  border-bottom-color: rgba(188, 82, 21, 0.25);
  border-left-color: rgba(188, 82, 21, 0.25);
  border-right-color: rgba(188, 82, 21, 0.25);
  border-top-color: rgba(188, 82, 21, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
  color: rgb(16, 15, 15);
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body .search > .search-container > .search-space > * {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(16, 15, 15);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(16, 15, 15);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(16, 15, 15);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(252, 250, 248);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(16, 15, 15);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(36, 132, 124, 0.1);
  border-bottom-color: rgba(36, 132, 124, 0.15);
  border-left-color: rgba(36, 132, 124, 0.15);
  border-right-color: rgba(36, 132, 124, 0.15);
  border-top-color: rgba(36, 132, 124, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(36, 132, 124);
}

body h1 {
  color: rgb(16, 15, 15);
}

body h2 {
  color: rgb(16, 15, 15);
}

body h2.page-title, h2.page-title a {
  color: rgb(16, 15, 15);
}

body h3 {
  color: rgb(16, 15, 15);
}

body h4 {
  color: rgb(16, 15, 15);
}

body h5 {
  color: rgb(16, 15, 15);
}

body h6 {
  color: rgb(16, 15, 15);
}

body hr {
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
}`,
    scrollbars: `body .callout {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgba(32, 94, 166, 0.25);
  border-left-color: rgba(32, 94, 166, 0.25);
  border-right-color: rgba(32, 94, 166, 0.25);
  border-top-color: rgba(32, 94, 166, 0.25);
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(111, 110, 105);
  text-decoration: rgb(111, 110, 105);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(111, 110, 105);
  text-decoration: rgb(111, 110, 105);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(111, 110, 105);
  text-decoration: rgb(111, 110, 105);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(111, 110, 105);
  border-left-color: rgb(111, 110, 105);
  border-right-color: rgb(111, 110, 105);
  border-top-color: rgb(111, 110, 105);
  color: rgb(111, 110, 105);
}`,
    footer: `body footer {
  background-color: rgb(252, 250, 248);
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
  color: rgb(111, 110, 105);
}

body footer ul li a {
  color: rgb(111, 110, 105);
  text-decoration: rgb(111, 110, 105);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(16, 15, 15);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(111, 110, 105);
  text-decoration: rgb(111, 110, 105);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(111, 110, 105);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

body li.section-li > .section .meta {
  color: rgb(111, 110, 105);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(111, 110, 105);
  text-decoration: rgb(111, 110, 105);
}

body ul.section-ul {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(111, 110, 105);
  border-left-color: rgb(111, 110, 105);
  border-right-color: rgb(111, 110, 105);
  border-top-color: rgb(111, 110, 105);
  color: rgb(111, 110, 105);
}

body .darkmode svg {
  color: rgb(111, 110, 105);
  stroke: rgb(111, 110, 105);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(111, 110, 105);
  border-left-color: rgb(111, 110, 105);
  border-right-color: rgb(111, 110, 105);
  border-top-color: rgb(111, 110, 105);
  color: rgb(111, 110, 105);
}

body .breadcrumb-element p {
  color: rgb(183, 181, 172);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}

body .metadata {
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
  color: rgb(111, 110, 105);
}

body .metadata-properties {
  border-bottom-color: rgb(111, 110, 105);
  border-left-color: rgb(111, 110, 105);
  border-right-color: rgb(111, 110, 105);
  border-top-color: rgb(111, 110, 105);
  color: rgb(111, 110, 105);
}

body .navigation-progress {
  background-color: rgb(252, 250, 248);
}

body .page-header h2.page-title {
  color: rgb(16, 15, 15);
}

body abbr {
  color: rgb(16, 15, 15);
  text-decoration: underline dotted rgb(16, 15, 15);
}

body details {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

body input[type=text] {
  border-bottom-color: rgb(111, 110, 105);
  border-left-color: rgb(111, 110, 105);
  border-right-color: rgb(111, 110, 105);
  border-top-color: rgb(111, 110, 105);
  color: rgb(111, 110, 105);
}

body kbd {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}

body progress {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

body sub {
  color: rgb(16, 15, 15);
}

body summary {
  color: rgb(16, 15, 15);
}

body sup {
  color: rgb(16, 15, 15);
}`,
  },
};
