import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "agate",
    modes: ["light"],
    variations: [],
    fonts: ["noto-serif", "pretendard", "noto-sans-kr", "itc-slimbach"],
    fontFiles: [
      {
        family: "noto-serif-kr-medium",
        style: "normal",
        weight: "400",
        file: "noto-serif-kr-medium.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "noto-serif-kr-black",
        style: "normal",
        weight: "900",
        file: "noto-serif-kr-black.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Pretendard-Regular",
        style: "normal",
        weight: "400",
        file: "pretendard-regular.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Pretendard-Bold",
        style: "normal",
        weight: "700",
        file: "pretendard-bold.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "ITC Slimbach Std",
        style: "normal",
        weight: "400",
        file: "itc-slimbach-std.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent-color: 55, 0, 255;
  --background-modifier-border: var(--color-base-30, rgba(20, 19, 19, 0.172));
  --background-modifier-border-focus: var(--color-base-40, #d5d0d034);
  --background-modifier-border-hover: var(--color-base-35, #d5d0d034);
  --background-modifier-form-field: var(--color-base-00, #f7f7f730);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #f7f7f730);
  --background-primary: linear-gradient(to left, #ffffff00 93%, var(--line-color));
  --background-primary-alt: var(--color-base-10, #f7f7f7c1);
  --background-secondary: linear-gradient(to left, var(--bg-color) 100%, var(--line-color));
  --background-secondary-alt: var(--color-base-05, #d5d0d034);
  --bases-cards-background: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --bases-cards-cover-background: var(--background-primary-alt, #f7f7f7c1);
  --bases-embed-border-color: var(--background-modifier-border, rgba(20, 19, 19, 0.172));
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-table-border-color: var(--table-border-color, rgba(20, 19, 19, 0.172));
  --bases-table-cell-background-active: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --bases-table-cell-background-disabled: var(--background-primary-alt, #f7f7f7c1);
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-group-background: var(--background-primary-alt, #f7f7f7c1);
  --bases-table-header-background: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --bases-table-summary-background: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --bg-color: rgba(var(--light-color), var(--light-alpha-color));
  --blockquote-border-color: rgba(var(--accent-color), 0.6);
  --blockquote-border-thickness: 3px;
  --blockquote-font-style: italic;
  --bodyFont: var(--font-text-theme, 'Noto Serif KR', serif);
  --bold-modifier: 500;
  --button-radius: var(--radius-s, 2px);
  --callout-blend-mode: var(--highlight-mix-blend-mode, multiply);
  --callout-border-opacity: 100%;
  --callout-border-width: 1px;
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 15px 20px);
  --callout-radius: var(--radius-s, 20px);
  --canvas-background: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --canvas-card-label-color: var(--text-faint, rgb(20, 20, 20));
  --canvas-controls-radius: var(--radius-s, 2px);
  --canvas-dot-pattern: var(--color-base-30, rgba(20, 19, 19, 0.172));
  --caret-color: var(--text-normal, rgb(20, 20, 20));
  --checkbox-border-color: var(--text-faint, rgb(20, 20, 20));
  --checkbox-color: var(--interactive-accent, rgba(152, 151, 151, 0.766));
  --checkbox-marker-color: var(--background-primary, rgb(101, 101, 101));
  --checkbox-radius: var(--radius-s, 0px);
  --clickable-icon-radius: var(--radius-s, 2px);
  --code-background: var(--background-primary-alt, #f7f7f7c1);
  --code-border-color: var(--background-modifier-border, rgba(20, 19, 19, 0.172));
  --code-comment: var(--text-faint, #5b6a6a);
  --code-function: var(--color-yellow, #b500e7);
  --code-important: var(--color-orange, #d64609);
  --code-keyword: var(--color-pink, #098800);
  --code-normal: var(--text-normal, #333d40);
  --code-operator: var(--color-red, #c45b00);
  --code-property: var(--color-cyan, #333d40);
  --code-punctuation: var(--text-muted, #00b4f0);
  --code-radius: var(--radius-s, 2px);
  --code-string: var(--color-green, #b58900);
  --code-tag: var(--color-red, #dc322f);
  --code-value: rgb(var(--accent-color));
  --collapse-icon-color: var(--text-faint, rgb(20, 20, 20));
  --color-base-00: #f7f7f730;
  --color-base-05: #d5d0d034;
  --color-base-10: #f7f7f7c1;
  --color-base-100: rgb(20, 20, 20);
  --color-base-20: #d5d0d034;
  --color-base-25: #d5d0d034;
  --color-base-30: rgba(20, 19, 19, 0.172);
  --color-base-35: #d5d0d034;
  --color-base-40: #d5d0d034;
  --color-base-50: rgb(20, 20, 20);
  --color-base-60: #d5d0d034;
  --dark: var(--text-normal, var(--color-base-100, rgb(20, 20, 20)));
  --darkgray: var(--text-normal, var(--color-base-100, rgb(20, 20, 20)));
  --divider-color: var(--background-modifier-border, rgba(20, 19, 19, 0.172));
  --dropdown-background: var(--interactive-normal, #f7f7f730);
  --dropdown-background-hover: var(--interactive-hover, #f7f7f7c1);
  --file-folding-offset: 300px;
  --file-header-background: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --file-header-background-focused: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --file-header-border: 1px solid var(--line-color);
  --file-header-font: var(--font-interface, Pretendard-Regular, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-line-width: 630px;
  --file-margins: var(--file-margins-y) var(--file-margins-x, 30px 10px);
  --flair-background: var(--interactive-normal, #f7f7f730);
  --flair-color: var(--text-normal, rgb(20, 20, 20));
  --font-interface-theme: 'Pretendard-Regular', serif;
  --font-mermaid: var(--font-text, Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: 'Noto Serif KR', serif;
  --footnote-divider-color: var(--metadata-divider-color, rgba(20, 19, 19, 0.172));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(20, 20, 20));
  --footnote-line-height: var(--line-height-normal, 2em);
  --footnote-radius: var(--radius-s, 2px);
  --graph-line: var(--line-color, rgba(20, 20, 20, 0.2));
  --graph-node-unresolved: var(--text-faint, rgb(20, 20, 20));
  --graph-text: var(--text-normal, rgb(20, 20, 20));
  --gray: var(--text-faint, var(--color-base-50, rgb(20, 20, 20)));
  --h1-font: 'Pretendard-Bold';
  --h1-size: 2em;
  --h2-font: 'Pretendard-Bold';
  --h2-size: 1.8em;
  --h2-weight: 700;
  --h3-font: 'Pretendard-Bold';
  --h3-size: 1.4em;
  --h3-weight: 700;
  --h4-font: 'Pretendard-Bold';
  --h4-size: 1.2em;
  --h4-weight: 700;
  --h5-font: 'Pretendard-Bold';
  --h5-line-height: var(--line-height-normal, 2em);
  --h5-size: 1.1em;
  --h5-weight: 700;
  --h6-font: 'Pretendard-Bold';
  --h6-line-height: var(--line-height-normal, 2em);
  --h6-weight: 700;
  --headerFont: var(--font-text-theme, 'Noto Serif KR', serif);
  --heading-formatting: var(--text-faint, rgb(20, 20, 20));
  --highlight: var(--text-highlight-bg, rgba(var(--accent-color), 0.2));
  --hr-color: var(--line-color, rgba(20, 20, 20, 0.2));
  --hr-thickness: var(--border-width, 1px);
  --icon-color-focused: var(--text-normal, rgb(20, 20, 20));
  --inline-title-color: var(--color-base-100, rgb(20, 20, 20));
  --inline-title-font: var(--h1-font, "ITC Slimbach Std", 'Noto Serif KR');
  --inline-title-line-height: var(--h1-line-height, 1.2em);
  --inline-title-size: var(--h1-size, 3.5em);
  --input-date-separator: var(--text-faint, rgb(20, 20, 20));
  --input-placeholder-color: var(--text-faint, rgb(20, 20, 20));
  --input-radius: 0px;
  --interactive-hover: var(--color-base-10, #f7f7f7c1);
  --interactive-normal: var(--color-base-00, #f7f7f730);
  --light: var(--background-primary, linear-gradient(to left, #ffffff00 93%, var(--line-color)));
  --light-alpha-color: 0;
  --light-color: 170, 170, 170;
  --lightgray: var(--background-secondary, linear-gradient(to left, var(--bg-color) 100%, var(--line-color)));
  --line-color: rgba(20, 20, 20, 0.2);
  --line-height-normal: 2em;
  --link-color: rgb(var(--accent-color));
  --link-external-color: rgb(var(--accent-color));
  --link-unresolved-color: rgb(var(--accent-color));
  --link-unresolved-decoration-color: rgb(var(--accent-color));
  --list-indent-editing: 2em;
  --list-indent-source: 2em;
  --list-marker-color: var(--color-base-100, rgb(20, 20, 20));
  --list-marker-color-collapsed: var(--color-base-100, rgb(20, 20, 20));
  --list-marker-color-hover: var(--color-base-100, rgb(20, 20, 20));
  --list-spacing: 0px;
  --menu-background: var(--background-secondary, linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)));
  --menu-border-color: var(--background-modifier-border-hover, #d5d0d034);
  --metadata-background: rgba(20, 20, 20, 0.05);
  --metadata-border-color: var(--background-modifier-border, rgba(20, 19, 19, 0.172));
  --metadata-border-radius: 10px;
  --metadata-divider-color: var(--background-modifier-border, rgba(20, 19, 19, 0.172));
  --metadata-gap: 0px;
  --metadata-input-font: var(--font-interface, Pretendard-Regular, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, rgb(20, 20, 20));
  --metadata-label-font: var(--font-interface, Pretendard-Regular, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-max-width: 100%;
  --metadata-padding: var(--size-4-2, 5px 20px) 0;
  --modal-background: var(--modal-color, rgb(170, 170, 170));
  --modal-color: rgba(var(--light-color), 1);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(20, 20, 20));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(20, 20, 20));
  --nav-heading-color: var(--text-normal, rgb(20, 20, 20));
  --nav-heading-color-collapsed: var(--text-faint, rgb(20, 20, 20));
  --nav-heading-color-hover: var(--text-normal, rgb(20, 20, 20));
  --nav-item-color-active: var(--text-normal, rgb(20, 20, 20));
  --nav-item-color-hover: var(--text-normal, rgb(20, 20, 20));
  --nav-item-color-selected: var(--text-normal, rgb(20, 20, 20));
  --nav-item-radius: var(--radius-s, 2px);
  --nav-tag-color: var(--text-faint, rgb(20, 20, 20));
  --nav-tag-radius: var(--radius-s, 2px);
  --pdf-background: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --pdf-page-background: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --pdf-sidebar-background: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --pill-border-color: var(--background-modifier-border, rgba(20, 19, 19, 0.172));
  --pill-border-color-hover: var(--background-modifier-border-hover, #d5d0d034);
  --pill-color-hover: var(--text-normal, rgb(20, 20, 20));
  --pill-color-remove: var(--text-faint, rgb(20, 20, 20));
  --popover-font-size: var(--font-text-size, 0.9em);
  --popover-height: 300px;
  --prompt-background: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --radius-s: 2px;
  --raised-background: var(--blur-background, color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent) linear-gradient(linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)), color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent)));
  --ribbon-background: var(--background-secondary, linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)));
  --ribbon-background-collapsed: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --search-result-background: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --setting-group-heading-color: var(--text-normal, rgb(20, 20, 20));
  --setting-items-background: var(--background-primary-alt, #f7f7f7c1);
  --setting-items-border-color: var(--background-modifier-border, rgba(20, 19, 19, 0.172));
  --shiki-code-background: var(--code-background, #f7f7f7c1);
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-comment: var(--text-faint, rgb(20, 20, 20));
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(20, 19, 19, 0.172));
  --shiki-gutter-text-color: var(--text-faint, rgb(20, 20, 20));
  --shiki-terminal-dots-color: var(--text-faint, rgb(20, 20, 20));
  --slider-thumb-border-color: var(--background-modifier-border-hover, #d5d0d034);
  --slider-thumb-radius: var(--slider-thumb-height, 0px);
  --slider-track-background: var(--background-modifier-border, rgba(20, 19, 19, 0.172));
  --status-bar-background: var(--modal-background, rgb(170, 170, 170));
  --status-bar-border-color: var(--line-color, rgba(20, 20, 20, 0.2));
  --status-bar-border-width: var(--border-width, 1px);
  --status-bar-radius: var(--radius-s, 2px);
  --suggestion-background: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --tab-background-active: var(--background-primary, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)));
  --tab-container-background: var(--background-secondary, linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)));
  --tab-divider-color: var(--background-modifier-border-hover, #d5d0d034);
  --tab-outline-color: var(--divider-color, rgba(20, 19, 19, 0.172));
  --tab-radius: var(--radius-s, 2px);
  --tab-radius-active: 0px;
  --tab-switcher-background: var(--background-secondary, linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)));
  --tab-text-color: var(--text-faint, rgb(20, 20, 20));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(20, 20, 20));
  --table-add-button-border-color: var(--background-modifier-border, rgba(20, 19, 19, 0.172));
  --table-border-color: var(--background-modifier-border, rgba(20, 19, 19, 0.172));
  --table-column-first-border-width: var(--table-border-width, 0);
  --table-column-last-border-width: var(--table-border-width, 0);
  --table-drag-handle-color: var(--text-faint, rgb(20, 20, 20));
  --table-header-border-color: var(--table-border-color, rgba(20, 19, 19, 0.172));
  --table-header-border-width: var(--table-border-width, 0);
  --table-header-color: var(--text-normal, rgb(20, 20, 20));
  --table-last-border-width: 0;
  --table-row-last-border-width: var(--table-border-width, 0);
  --tag-background: rgba(var(--accent-color), 0.2);
  --tag-color: rgb(var(--accent-color));
  --text-faint: var(--color-base-50, rgb(20, 20, 20));
  --text-highlight-bg: rgba(var(--accent-color), 0.2);
  --text-normal: var(--color-base-100, rgb(20, 20, 20));
  --text-selection: rgba(var(--accent-color), 0.2);
  --textHighlight: var(--text-highlight-bg, rgba(var(--accent-color), 0.2));
  --titleFont: var(--font-text-theme, 'Noto Serif KR', serif);
  --titlebar-background: var(--background-secondary, linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)));
  --titlebar-background-focused: var(--background-secondary-alt, #d5d0d034);
  --titlebar-border-color: var(--background-modifier-border, rgba(20, 19, 19, 0.172));
  --titlebar-text-color-focused: var(--text-normal, rgb(20, 20, 20));
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: var(--text-normal, rgb(20, 20, 20));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(20, 20, 20));
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(20, 20, 20);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(20, 20, 20);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(20, 20, 20);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(20, 19, 19, 0.173);
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(20, 19, 19, 0.173);
  color: rgb(20, 20, 20);
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--bold-color, rgb(20, 20, 20));
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, rgb(20, 20, 20));
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, rgb(20, 20, 20));
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--bold-color, rgb(20, 20, 20));
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(55, 0, 255, 0.2));
  color: var(--text-normal, rgb(20, 20, 20));
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html body del {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration: line-through 1px;
  text-decoration-color: rgb(20, 20, 20);
  text-decoration-thickness: 1px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(20, 20, 20);
  border-radius: 0px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(152, 151, 151, 0.765));
  border-color: rgba(152, 151, 151, 0.765);
}

html body p {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html body a.external-link, html footer a {
  color: var(--link-external-color, rgb(55, 0, 255));
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 255) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(55, 0, 255);
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(55, 0, 255));
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 255) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(55, 0, 255);
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(55, 0, 255));
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 255) none 0px;
  text-decoration: underline 1px rgb(55, 0, 255);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(55, 0, 255));
  text-decoration-thickness: var(--link-decoration-thickness, 1px);
}`,
    lists: `html body dd {
  color: rgb(20, 20, 20);
}

html body dt {
  color: rgb(20, 20, 20);
}

html body ol > li {
  color: rgb(20, 20, 20);
}

html body ul > li {
  color: rgb(20, 20, 20);
}

html body ul.overflow {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgb(20, 20, 20));
}

html body blockquote {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: var(--blockquote-font-style, italic);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body table {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 178.766px;
}

html body td {
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-left-color: rgba(20, 19, 19, 0.173);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  color: var(--table-text-color, rgb(20, 20, 20));
}

html body th {
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-left-color: rgba(20, 19, 19, 0.173);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(20, 20, 20));
  font-weight: var(--table-header-weight, 900);
}`,
    code: `html body code {
  background-color: var(--code-background, rgba(247, 247, 247, 0.757));
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(20, 19, 19, 0.173);
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(51, 61, 64));
}

html body pre:has(> code) {
  background-color: var(--code-background, rgba(247, 247, 247, 0.757));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body figcaption {
  color: rgb(20, 20, 20);
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  --code-background: var(--ec-frm-edBg, #f7f7f7c1);
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body img {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body video {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgba(247, 247, 247, 0.757));
}

html body .footnotes {
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html body .transclude {
  border-bottom-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body .transclude-inner {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body li.task-list-item[data-task="#"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(20, 20, 20);
}

html li.task-list-item[data-task="body"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="."] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="="] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(101, 101, 101);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(101, 101, 101);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 20, 20);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 142, 123);
  background: rgba(0, 142, 123, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(0, 142, 123);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 142, 123);
  border-left-width: 1px;
  border-right-color: rgb(0, 142, 123);
  border-right-width: 1px;
  border-top-color: rgb(0, 142, 123);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 149, 0, 0);
  background: rgba(149, 0, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(149, 0, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(149, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(149, 0, 0);
  border-right-width: 1px;
  border-top-color: rgb(149, 0, 0);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="callout"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgba(20, 19, 19, 0.172);
  --background-modifier-border-focus: #d5d0d034;
  --background-modifier-border-hover: #d5d0d034;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #f7f7f730;
  --background-modifier-form-field-hover: #f7f7f730;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --background-primary-alt: #f7f7f7c1;
  --background-secondary: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2));
  --background-secondary-alt: #d5d0d034;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-color: rgba(170, 170, 170, 0);
  --blockquote-border-color: rgba(55, 0, 255, 0.6);
  --blur-background: color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent) linear-gradient(linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)), color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 900;
  --button-corner-shape: round;
  --button-radius: 2px;
  --callout-blend-mode: multiply;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--accent-color, 55, 0, 255);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 15px 20px;
  --callout-question: 236, 117, 0;
  --callout-radius: 20px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 900;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: rgba(20, 19, 19, 0.172);
  --caret-color: rgb(20, 20, 20);
  --checkbox-border-color: rgb(20, 20, 20);
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: rgba(152, 151, 151, 0.766);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: rgb(101, 101, 101);
  --checkbox-radius: 0px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 2px;
  --code-background: #f7f7f7c1;
  --code-border-color: rgba(20, 19, 19, 0.172);
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #5b6a6a;
  --code-function: #b500e7;
  --code-important: #d64609;
  --code-keyword: #098800;
  --code-normal: #333d40;
  --code-operator: #c45b00;
  --code-property: #333d40;
  --code-punctuation: #00b4f0;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #b58900;
  --code-tag: #dc322f;
  --code-value: rgb(55, 0, 255);
  --collapse-icon-color: rgb(20, 20, 20);
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgba(20, 19, 19, 0.172);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #f7f7f730;
  --dropdown-background-hover: #f7f7f7c1;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #f7f7f730;
  --flair-color: rgb(20, 20, 20);
  --font-interface: '??', 'Pretendard-Regular', serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Noto Serif KR', serif, 'Arial';
  --font-text: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: rgba(20, 20, 20, 0.2);
  --graph-node: #5c5c5c;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: rgb(20, 20, 20);
  --graph-text: rgb(20, 20, 20);
  --h5-line-height: 2em;
  --h6-line-height: 2em;
  --heading-formatting: rgb(20, 20, 20);
  --heading-spacing: 2.5rem;
  --hr-color: rgba(20, 20, 20, 0.2);
  --hr-thickness: 1px;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #f7f7f7c1;
  --interactive-normal: #f7f7f730;
  --link-color: rgb(55, 0, 255);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: rgb(55, 0, 255);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: rgb(55, 0, 255);
  --link-unresolved-decoration-color: rgb(55, 0, 255);
  --link-weight: 400;
  --list-indent: 2em;
  --menu-background: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2));
  --menu-border-color: #d5d0d034;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --pdf-page-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --pdf-sidebar-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --popover-font-size: 0.9em;
  --raised-background: color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent) linear-gradient(linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)), color-mix(in srgb, linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2)) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --raised-shadow: 0 1px 6px rgba(0, 0, 0, 0.015), 0 4px 24px rgba(0, 0, 0, 0.065), 0 0 transparent;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --setting-group-heading-color: rgb(20, 20, 20);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #f7f7f7c1;
  --setting-items-border-color: rgba(20, 19, 19, 0.172);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-xs: 0 1px 6px rgba(0, 0, 0, 0.015), 0 4px 24px rgba(0, 0, 0, 0.065), 0 0 transparent;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #f7f7f7c1;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: rgb(20, 20, 20);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: rgba(20, 19, 19, 0.172);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: rgb(20, 20, 20);
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: rgb(20, 20, 20);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: linear-gradient(to left, #ffffff00 93%, rgba(20, 20, 20, 0.2));
  --tab-divider-color: #d5d0d034;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(20, 19, 19, 0.172);
  --tab-radius: 2px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2));
  --tab-switcher-menubar-background: linear-gradient(to top, linear-gradient(to left, rgba(170, 170, 170, 0) 100%, rgba(20, 20, 20, 0.2)), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: rgb(20, 20, 20);
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #5c5c5c;
  --tab-text-color-focused-active-current: rgb(20, 20, 20);
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: rgba(20, 19, 19, 0.172);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 0;
  --table-column-last-border-width: 0;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: rgb(20, 20, 20);
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(20, 19, 19, 0.172);
  --table-header-border-width: 0;
  --table-header-color: rgb(20, 20, 20);
  --table-header-size: 16px;
  --table-header-weight: 900;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 0;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: rgba(55, 0, 255, 0.2);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: rgb(55, 0, 255);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: rgb(20, 20, 20);
  --text-highlight-bg: rgba(55, 0, 255, 0.2);
  --text-muted: #5c5c5c;
  --text-normal: rgb(20, 20, 20);
  --text-selection: rgba(55, 0, 255, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(55, 0, 255);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(55, 0, 255);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(55, 0, 255);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(55, 0, 255);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 32px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 149, 0, 0);
  background: rgba(149, 0, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(149, 0, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(149, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(149, 0, 0);
  border-right-width: 1px;
  border-top-color: rgb(149, 0, 0);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  border-bottom-color: rgb(120, 82, 238);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(120, 82, 238);
  border-left-width: 1px;
  border-right-color: rgb(120, 82, 238);
  border-right-width: 1px;
  border-top-color: rgb(120, 82, 238);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 149, 0, 0);
  background: rgba(149, 0, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(149, 0, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(149, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(149, 0, 0);
  border-right-width: 1px;
  border-top-color: rgb(149, 0, 0);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 1px;
  border-right-color: rgb(8, 109, 221);
  border-right-width: 1px;
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--accent-color, 55, 0, 255);
  background: rgba(55, 0, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(55, 0, 255);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(55, 0, 255);
  border-left-width: 1px;
  border-right-color: rgb(55, 0, 255);
  border-right-width: 1px;
  border-top-color: rgb(55, 0, 255);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 149, 92, 0);
  background: rgba(149, 92, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(149, 92, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(149, 92, 0);
  border-left-width: 1px;
  border-right-color: rgb(149, 92, 0);
  border-right-width: 1px;
  border-top-color: rgb(149, 92, 0);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 1px;
  border-right-color: rgb(158, 158, 158);
  border-right-width: 1px;
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 0, 124, 37);
  background: rgba(0, 124, 37, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(0, 124, 37);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 124, 37);
  border-left-width: 1px;
  border-right-color: rgb(0, 124, 37);
  border-right-width: 1px;
  border-top-color: rgb(0, 124, 37);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 142, 123);
  background: rgba(0, 142, 123, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(0, 142, 123);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 142, 123);
  border-left-width: 1px;
  border-right-color: rgb(0, 142, 123);
  border-right-width: 1px;
  border-top-color: rgb(0, 142, 123);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 1px;
  border-right-color: rgb(8, 109, 221);
  border-right-width: 1px;
  border-top-color: rgb(8, 109, 221);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 149, 92, 0);
  background: rgba(149, 92, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgb(149, 92, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(149, 92, 0);
  border-left-width: 1px;
  border-right-color: rgb(149, 92, 0);
  border-right-width: 1px;
  border-top-color: rgb(149, 92, 0);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 55, 0, 255;
  border-bottom-color: rgb(55, 0, 255);
  border-left-color: rgb(55, 0, 255);
  border-right-color: rgb(55, 0, 255);
  border-top-color: rgb(55, 0, 255);
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 900);
  color: var(--callout-title-color, rgb(55, 0, 255));
  font-weight: var(--font-weight, 900);
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(20, 20, 20);
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="callout"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgba(247, 247, 247, 0.19);
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(20, 19, 19, 0.173);
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-normal, rgb(20, 20, 20));
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: var(--modal-color, rgb(170, 170, 170));
  border-bottom-color: rgba(213, 208, 208, 0.204);
  border-left-color: rgba(213, 208, 208, 0.204);
  border-right-color: rgba(213, 208, 208, 0.204);
  border-top-color: rgba(213, 208, 208, 0.204);
}

html body .search > .search-container > .search-space > * {
  color: rgb(20, 20, 20);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(20, 20, 20);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(20, 20, 20);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(20, 20, 20);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(213, 208, 208, 0.204);
  border-left-color: rgba(213, 208, 208, 0.204);
  border-right-color: rgba(213, 208, 208, 0.204);
  border-top-color: rgba(213, 208, 208, 0.204);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-width: 0px;
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(20, 20, 20);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(20, 20, 20);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgba(55, 0, 255, 0.2));
  --pill-color: var(--tag-color, rgb(55, 0, 255));
  --pill-color-remove: var(--tag-color, rgb(55, 0, 255));
  background-color: var(--pill-background, rgba(55, 0, 255, 0.2));
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal-link.tag-link::before {
  color: rgb(55, 0, 255);
}

html body h1 {
  color: var(--h1-color, rgb(20, 20, 20));
  font-family: var(--h1-font, Pretendard-Bold);
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(20, 20, 20));
  font-size: var(--inline-title-size, 56px);
}

html body h2 {
  --font-weight: var(--h2-weight, 700);
  color: var(--h2-color, rgb(20, 20, 20));
  font-family: var(--h2-font, Pretendard-Bold);
}

html body h2.page-title, html h2.page-title a {
  color: var(--inline-title-color, rgb(20, 20, 20));
  font-family: var(--inline-title-font, "ITC Slimbach Std", "Noto Serif KR");
}

html body h3 {
  --font-weight: var(--h3-weight, 700);
  color: var(--h3-color, rgb(20, 20, 20));
  font-family: var(--h3-font, Pretendard-Bold);
}

html body h4 {
  --font-weight: var(--h4-weight, 700);
  color: var(--h4-color, rgb(20, 20, 20));
  font-family: var(--h4-font, Pretendard-Bold);
}

html body h5 {
  --font-weight: var(--h5-weight, 700);
  color: var(--h5-color, rgb(20, 20, 20));
  font-family: var(--h5-font, Pretendard-Bold);
}

html body h6 {
  --font-weight: var(--h6-weight, 700);
  color: var(--h6-color, rgb(20, 20, 20));
  font-family: var(--h6-font, Pretendard-Bold);
}

html body hr {
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-left-color: rgba(20, 19, 19, 0.173);
  border-right-color: rgba(20, 19, 19, 0.173);
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--accent-color, 55, 0, 255);
  border-bottom-color: rgb(55, 0, 255);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 1px;
  border-left-color: rgb(55, 0, 255);
  border-left-width: 1px;
  border-right-color: rgb(55, 0, 255);
  border-right-width: 1px;
  border-top-color: rgb(55, 0, 255);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 1px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(20, 20, 20);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgb(170, 170, 170));
  border-bottom-color: rgba(20, 20, 20, 0.2);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(20, 20, 20, 0.2);
  border-right-color: rgba(20, 20, 20, 0.2);
  border-right-width: 1px;
  border-top-color: rgba(20, 20, 20, 0.2);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(20, 20, 20);
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body li.section-li > .section .meta {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body ul.section-ul {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    darkmode: `html body .darkmode {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgb(20, 20, 20));
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(20, 20, 20);
}

html body .canvas-node-content {
  color: rgb(20, 20, 20);
}

html body .canvas-node-file {
  color: var(--text-normal, rgb(20, 20, 20));
}

html body .canvas-node-group {
  border-color: rgb(20, 20, 20);
}

html body .canvas-sidebar {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  border-color: rgb(20, 20, 20);
}`,
    bases: `html body .bases-table thead th {
  border-color: rgba(20, 19, 19, 0.173);
  color: var(--table-header-color, rgb(20, 20, 20));
  font-weight: var(--table-header-weight, 900);
}`,
    properties: `html body .metadata {
  background-color: var(--metadata-background, rgba(20, 20, 20, 0.05));
  border-bottom-color: rgba(20, 19, 19, 0.173);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(20, 19, 19, 0.173);
  border-right-color: rgba(20, 19, 19, 0.173);
  border-top-color: rgba(20, 19, 19, 0.173);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

html body .metadata-properties {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .note-properties {
  background-color: var(--metadata-background, rgba(20, 20, 20, 0.05));
  border-color: rgba(20, 19, 19, 0.173);
  border-radius: 10px;
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, rgba(55, 0, 255, 0.2));
  --pill-color: var(--tag-color, rgb(55, 0, 255));
  --pill-color-remove: var(--tag-color, rgb(55, 0, 255));
  background-color: var(--pill-background, rgba(55, 0, 255, 0.2));
  color: var(--pill-color, rgb(55, 0, 255));
}

html body div#quartz-root {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(20, 20, 20));
}

html body ol.overflow {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(20, 20, 20);
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(213, 208, 208, 0.204));
}

html body .stacked-page.active {
  border-color: rgb(20, 20, 20);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html body .navigation-progress {
  background-color: var(--status-bar-background, rgb(170, 170, 170));
}

html body .page-header h2.page-title {
  color: var(--text-normal, rgb(20, 20, 20));
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(20, 20, 20);
}

html body details {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body input[type=text] {
  font-family: "??", Pretendard-Regular, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: var(--code-background, rgba(247, 247, 247, 0.757));
  border-bottom-color: rgb(51, 61, 64);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(51, 61, 64);
  border-right-color: rgb(51, 61, 64);
  border-top-color: rgb(51, 61, 64);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(51, 61, 64));
}

html body progress {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html body sub {
  color: rgb(20, 20, 20);
}

html body summary {
  color: rgb(20, 20, 20);
}

html body sup {
  color: rgb(20, 20, 20);
}

html body ul.tags > li {
  background-color: var(--tag-background, rgba(55, 0, 255, 0.2));
  color: var(--tag-color, rgb(55, 0, 255));
}`,
  },
};
