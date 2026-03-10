import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "amoled-serenity",
    modes: ["dark"],
    variations: [],
    fonts: ["bricolage-grotesque", "roboto", "montserrat"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #333333;
  --background-modifier-border-focus: #4a4a4a;
  --background-modifier-border-hover: #363636;
  --background-modifier-form-field: #262626;
  --background-modifier-form-field-hover: #262626;
  --background-primary: #0e0e0e;
  --background-secondary: #0e0e0e;
  --background-secondary-alt: #333333;
  --bases-cards-background: #0e0e0e;
  --bases-cards-shadow: 0 0 0 1px #333333;
  --bases-cards-shadow-hover: 0 0 0 1px #363636;
  --bases-embed-border-color: #333333;
  --bases-group-heading-property-color: #bbbbbb;
  --bases-table-border-color: #333333;
  --bases-table-cell-background-active: #0e0e0e;
  --bases-table-cell-shadow-active: 0 0 0 2px #4a4a4a;
  --bases-table-header-background: #0e0e0e;
  --bases-table-header-color: #bbbbbb;
  --bases-table-summary-background: #0e0e0e;
  --blur-background: color-mix(in srgb, #333333 65%, transparent) linear-gradient(#333333, color-mix(in srgb, #333333 65%, transparent));
  --body-font: "Inter";
  --bodyFont: var(--font-text);
  --button-background: #0e0e0e;
  --button-border: #0e0e0e;
  --button-text: #dddddd;
  --canvas-background: #0e0e0e;
  --canvas-dot-pattern: #333333;
  --caret-color: #ffffff;
  --checkbox-border-color-hover: #bbbbbb;
  --checkbox-marker-color: #0e0e0e;
  --checklist-done-color: #bbbbbb;
  --code-background: #0e0e0e;
  --code-border-color: #333333;
  --code-function: rgb(235, 203, 139);
  --code-important: rgb(208, 135, 112);
  --code-keyword: rgb(180, 142, 173);
  --code-normal: #dddddd;
  --code-property: rgb(143, 188, 187);
  --code-punctuation: #999999;
  --code-string: rgb(163, 190, 140);
  --code-tag: rgb(191, 97, 106);
  --code-value: rgb(180, 142, 173);
  --codeFont: var(--font-text);
  --color-base-00: #0e0e0e;
  --color-base-05: #343434;
  --color-base-100: #ffffff;
  --color-base-20: #1a1a1a;
  --color-base-25: #262626;
  --color-base-30: #333333;
  --color-base-35: #363636;
  --color-base-40: #4a4a4a;
  --color-base-70: #bbbbbb;
  --color-base-80: #dddddd;
  --color-base-90: #eeeeee;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #333333;
  --dropdown-background: #333333;
  --dropdown-background-hover: #363636;
  --embed-block-shadow-hover: 0 0 0 1px #333333, inset 0 0 0 1px #333333;
  --file-header-background: #0e0e0e;
  --file-header-background-focused: #0e0e0e;
  --file-header-font: "Inter";
  --flair-background: #333333;
  --flair-color: #ffffff;
  --focus-border: rgb(180, 142, 173);
  --font-mermaid: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Inter", 'Arial';
  --font-text: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Inter";
  --footnote-divider-color: #333333;
  --footnote-id-color: #bbbbbb;
  --frost0: rgb(143, 188, 187);
  --frost0_x: 143, 188, 187;
  --frost2: rgb(129, 161, 193);
  --frost2_x: 129, 161, 193;
  --graph-line: #363636;
  --graph-node: #bbbbbb;
  --graph-text: #ffffff;
  --gray: var(--text-muted);
  --green: rgb(163, 190, 140);
  --green_x: 163, 190, 140;
  --h1-color: rgb(191, 97, 106);
  --h1-font: "Inter";
  --h2-color: rgb(235, 203, 139);
  --h2-font: "Inter";
  --h3-color: rgb(163, 190, 140);
  --h3-font: "Inter";
  --h4-color: rgb(180, 142, 173);
  --h4-font: "Inter";
  --h5-color: rgb(143, 188, 187);
  --h5-font: "Inter";
  --h6-color: rgb(129, 161, 193);
  --h6-font: "Inter";
  --header-font: "Inter";
  --headerFont: var(--font-text);
  --hr-color: #333333;
  --icon-color: #bbbbbb;
  --icon-color-focused: #ffffff;
  --icon-color-hover: #bbbbbb;
  --inline-title-color: rgb(191, 97, 106);
  --inline-title-font: "Inter";
  --interactive-hover: #363636;
  --interactive-normal: #333333;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --list-marker-color-hover: #bbbbbb;
  --menu-background: #0e0e0e;
  --menu-border-color: #363636;
  --metadata-border-color: #333333;
  --metadata-divider-color: #333333;
  --metadata-input-text-color: #ffffff;
  --metadata-label-text-color: #bbbbbb;
  --metadata-label-text-color-hover: #bbbbbb;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4a4a4a;
  --metadata-property-box-shadow-hover: 0 0 0 1px #363636;
  --modal-background: #0e0e0e;
  --modal-border-color: #4a4a4a;
  --nav-heading-color: #ffffff;
  --nav-heading-color-collapsed-hover: #bbbbbb;
  --nav-heading-color-hover: #ffffff;
  --nav-item-color: #bbbbbb;
  --nav-item-color-active: #ffffff;
  --nav-item-color-hover: #ffffff;
  --nav-item-color-selected: #ffffff;
  --nav-tag-color-active: #bbbbbb;
  --nav-tag-color-hover: #bbbbbb;
  --orange: rgb(208, 135, 112);
  --orange_x: 208, 135, 112;
  --pdf-background: #0e0e0e;
  --pdf-page-background: #0e0e0e;
  --pdf-shadow: 0 0 0 1px #333333;
  --pdf-sidebar-background: #0e0e0e;
  --pdf-thumbnail-shadow: 0 0 0 1px #333333;
  --pill-border-color: #333333;
  --pill-border-color-hover: #363636;
  --pill-color: #bbbbbb;
  --pill-color-hover: #ffffff;
  --prompt-background: #0e0e0e;
  --prompt-border-color: #4a4a4a;
  --purple: rgb(180, 142, 173);
  --purple_x: 180, 142, 173;
  --raised-background: color-mix(in srgb, #333333 65%, transparent) linear-gradient(#333333, color-mix(in srgb, #333333 65%, transparent));
  --red: rgb(191, 97, 106);
  --red_x: 191, 97, 106;
  --ribbon-background: #0e0e0e;
  --ribbon-background-collapsed: #0e0e0e;
  --search-clear-button-color: #bbbbbb;
  --search-icon-color: #bbbbbb;
  --search-result-background: #0e0e0e;
  --selection-background: rgba(163, 190, 140, 0.35);
  --setting-group-heading-color: #ffffff;
  --setting-items-border-color: #333333;
  --slider-thumb-border-color: #363636;
  --slider-track-background: #333333;
  --status-bar-background: #343434;
  --status-bar-border-color: #333333;
  --status-bar-foreground: #ffffff;
  --status-bar-text-color: #bbbbbb;
  --style-settings-section-accent-colors: "Accent Colors";
  --style-settings-section-buttons: "Buttons";
  --style-settings-section-colors: "Base Colors";
  --style-settings-section-headings: "Headings";
  --style-settings-section-selection-focus: "Selections and Focus";
  --style-settings-section-status-bar: "Status Bar";
  --style-settings-section-text-colors: "Text Colors";
  --style-settings-var-button-background: [color, Button Background Color, #0e0e0e];
  --style-settings-var-button-border: [color, Button Border Color, #0e0e0e];
  --style-settings-var-button-text: [color, Button Text Color, #dddddd];
  --style-settings-var-color-base-00: [color, Base Dark, #0e0e0e];
  --style-settings-var-color-base-05: [color, Darker Secondary, #343434];
  --style-settings-var-color-base-10: [color, Slightly Lighter Dark, #242424];
  --style-settings-var-color-base-100: [color, Pure White, #ffffff];
  --style-settings-var-color-base-20: [color, Even Lighter Dark, #1a1a1a];
  --style-settings-var-color-base-25: [color, Soft Highlight Color, #262626];
  --style-settings-var-color-base-30: [color, Dark Gray, #333333];
  --style-settings-var-color-base-35: [color, Medium Dark, #363636];
  --style-settings-var-color-base-40: [color, Mid-Tone Gray, #4a4a4a];
  --style-settings-var-color-base-50: [color, Light Gray, #666666];
  --style-settings-var-color-base-60: [color, Lighter Gray, #999999];
  --style-settings-var-color-base-70: [color, Almost White Gray, #bbbbbb];
  --style-settings-var-color-base-80: [color, Very Light Gray, #dddddd];
  --style-settings-var-color-base-90: [color, Almost White, #eeeeee];
  --style-settings-var-focus-border: [color, Focus Border Color, rgb(180, 142, 173)];
  --style-settings-var-frost0_x: [color, Cyan Frost, #8fbcbb];
  --style-settings-var-frost2_x: [color, Blue Frost, #81a1c1];
  --style-settings-var-green_x: [color, Green Base, #a3be8c];
  --style-settings-var-h1-color: [color, Heading 1 Color, rgb(191, 97, 106)];
  --style-settings-var-h2-color: [color, Heading 2 Color, rgb(235, 203, 139)];
  --style-settings-var-h3-color: [color, Heading 3 Color, rgb(163, 190, 140)];
  --style-settings-var-h4-color: [color, Heading 4 Color, rgb(180, 142, 173)];
  --style-settings-var-h5-color: [color, Heading 5 Color, rgb(143, 188, 187)];
  --style-settings-var-h6-color: [color, Heading 6 Color, rgb(129, 161, 193)];
  --style-settings-var-orange_x: [color, Orange Base, #d08770];
  --style-settings-var-purple_x: [color, Purple Base, #b48ead];
  --style-settings-var-red_x: [color, Red Base, #bf616a];
  --style-settings-var-selection-background: [color, Selection Background Color, rgba(163, 190, 140, 0.25)];
  --style-settings-var-status-bar-background: [color, Status Bar Background, #343434];
  --style-settings-var-status-bar-foreground: [color, Status Bar Foreground, #ffffff];
  --style-settings-var-text-error: [color, Error Text Color, rgb(191, 97, 106)];
  --style-settings-var-text-primary: [color, Primary Text Color, #dddddd];
  --style-settings-var-text-secondary: [color, Secondary Text Color, #666666];
  --style-settings-var-text-warning: [color, Warning Text Color, rgb(235, 203, 139)];
  --style-settings-var-yellow_x: [color, Yellow Base, #ebcb8b];
  --suggestion-background: #0e0e0e;
  --tab-background-active: #0e0e0e;
  --tab-container-background: #0e0e0e;
  --tab-divider-color: #363636;
  --tab-outline-color: #333333;
  --tab-switcher-background: #0e0e0e;
  --tab-switcher-menubar-background: linear-gradient(to top, #0e0e0e, transparent);
  --tab-text-color-active: #bbbbbb;
  --tab-text-color-focused: #bbbbbb;
  --tab-text-color-focused-active: #bbbbbb;
  --tab-text-color-focused-active-current: #ffffff;
  --table-add-button-border-color: #333333;
  --table-border-color: #333333;
  --table-header-border-color: #333333;
  --table-header-color: #ffffff;
  --text-error: rgb(191, 97, 106);
  --text-muted: #bbbbbb;
  --text-normal: #ffffff;
  --text-primary: #dddddd;
  --text-secondary: #666666;
  --text-warning: rgb(235, 203, 139);
  --titleFont: var(--font-text);
  --titlebar-background: #0e0e0e;
  --titlebar-background-focused: #242424;
  --titlebar-border-color: #333333;
  --titlebar-text-color: #bbbbbb;
  --titlebar-text-color-focused: #ffffff;
  --vault-profile-color: #ffffff;
  --vault-profile-color-hover: #ffffff;
  --yellow: rgb(235, 203, 139);
  --yellow_x: 235, 203, 139;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(14, 14, 14);
  color: rgb(221, 221, 221);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(14, 14, 14);
  color: rgb(221, 221, 221);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(14, 14, 14);
  color: rgb(221, 221, 221);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(51, 51, 51);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(14, 14, 14);
  border-left-color: rgb(51, 51, 51);
  color: rgb(221, 221, 221);
}

body div#quartz-root {
  background-color: rgb(14, 14, 14);
  color: rgb(221, 221, 221);
}`,
    typography: `body .page article p > b, b {
  color: rgb(221, 221, 221);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(221, 221, 221) none 0px;
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body .page article p > em, em {
  color: rgb(221, 221, 221);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(221, 221, 221) none 0px;
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body .page article p > i, i {
  color: rgb(221, 221, 221);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(221, 221, 221) none 0px;
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body .page article p > strong, strong {
  color: rgb(221, 221, 221);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(221, 221, 221) none 0px;
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body .text-highlight {
  color: rgb(255, 255, 255);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(221, 221, 221);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(221, 221, 221) none 0px;
  text-decoration: line-through rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body p {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}`,
    links: `body a.external, footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body table {
  color: rgb(255, 255, 255);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

body th {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

body pre > code, pre:has(> code) {
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body pre:has(> code) {
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    images: `body audio {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body figcaption {
  color: rgb(221, 221, 221);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body img {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body video {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body .transclude-inner {
  border-bottom-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(187, 187, 187);
  text-decoration: line-through rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
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
    search: `body .search > .search-button {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(74, 74, 74);
  border-left-color: rgb(74, 74, 74);
  border-right-color: rgb(74, 74, 74);
  border-top-color: rgb(74, 74, 74);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(74, 74, 74);
  border-left-color: rgb(74, 74, 74);
  border-right-color: rgb(74, 74, 74);
  border-top-color: rgb(74, 74, 74);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(14, 14, 14);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body h1 {
  color: rgb(191, 97, 106);
  font-family: Inter;
}

body h2 {
  color: rgb(235, 203, 139);
  font-family: Inter;
}

body h2.page-title, h2.page-title a {
  color: rgb(191, 97, 106);
  font-family: Inter;
}

body h3 {
  color: rgb(163, 190, 140);
  font-family: Inter;
}

body h4 {
  color: rgb(180, 142, 173);
  font-family: Inter;
}

body h5 {
  color: rgb(143, 188, 187);
  font-family: Inter;
}

body h6 {
  color: rgb(129, 161, 193);
  font-family: Inter;
}

body hr {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(14, 14, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 14, 14);
}

body ::-webkit-scrollbar-corner {
  background: rgb(14, 14, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 14, 14);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(14, 14, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(14, 14, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 14, 14);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(14, 14, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 14, 14);
}

body ::-webkit-scrollbar-track {
  background: rgb(14, 14, 14) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 14, 14);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    footer: `body footer {
  background-color: rgb(52, 52, 52);
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(255, 255, 255);
}

body footer ul li a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(221, 221, 221);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(187, 187, 187);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body li.section-li > .section .meta {
  color: rgb(187, 187, 187);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}

body ul.section-ul {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body .darkmode svg {
  color: rgb(187, 187, 187);
  stroke: rgb(187, 187, 187);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body .breadcrumb-element p {
  font-family: Inter;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

body .metadata {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(187, 187, 187);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(52, 52, 52);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: Inter;
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
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body kbd {
  background-color: rgb(14, 14, 14);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

body progress {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
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
