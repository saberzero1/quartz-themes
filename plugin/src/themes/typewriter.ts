import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "typewriter",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ia-writer-mono", "ia-writer-quattro-s", "jetbrains-mono"],
    fontFiles: [
      {
        family: "iA Writer Quattro S",
        style: "italic",
        weight: "bold",
        file: "ia-writer-quattro-s.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "iA Writer Quattro S",
        style: "normal",
        weight: "normal",
        file: "ia-writer-quattro-s-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "iA Writer Quattro S",
        style: "normal",
        weight: "bold",
        file: "ia-writer-quattro-s-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "iA Writer Quattro S",
        style: "italic",
        weight: "normal",
        file: "ia-writer-quattro-s-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "obsidian-typewriter",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: var(--color-base-30, #333);
  --background-modifier-border-focus: hsl(
    var(--base-h),
    var(--base-s),
    calc(var(--base-l) - 60%)
  );
  --background-modifier-border-hover: var(--color-base-35, rgb(94, 94, 94));
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: var(--color-red, #3d0000);
  --background-modifier-error-hover: var(--color-red, #470000);
  --background-modifier-error-rgb: var(--color-red-rgb, 61, 0, 0);
  --background-modifier-form-field: var(--color-base-25, rgba(0, 0, 0, 0.3));
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgba(0, 0, 0, 0.3));
  --background-modifier-success: var(--color-green, #197300);
  --background-primary: hsl(var(--base-h), var(--base-s), var(--base-d));
  --background-primary-alt: var(--color-base-10, #202020);
  --background-secondary: hsl(
    calc(var(--base-h) + 30),
    calc(var(--base-s) + 11.5%),
    calc(var(--base-l) - 75.6%)
  );
  --background-secondary-alt: var(--color-base-30, #000000);
  --base-d: 15%;
  --base-h: 0;
  --base-l: 96%;
  --base-s: 0%;
  --bases-cards-background: var(--background-primary, hsl(0, 0%, 15%));
  --bases-cards-cover-background: var(--background-primary-alt, #202020);
  --bases-cards-font-size: var(--font-smaller, 0.688em);
  --bases-cards-radius: var(--radius-m, 5px);
  --bases-embed-border-color: var(--background-modifier-border, #333);
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-group-heading-property-color: var(--text-muted, hsl(0, 0%, 60%));
  --bases-group-heading-value-size: var(--font-smaller, 0.688em);
  --bases-table-border-color: var(--table-border-color, #333);
  --bases-table-cell-background-active: var(--background-primary, hsl(0, 0%, 15%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, #202020);
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-font-size: var(--font-normal-size, 1em);
  --bases-table-group-background: var(--background-primary-alt, #202020);
  --bases-table-header-background: var(--background-primary, hsl(0, 0%, 15%));
  --bases-table-header-color: var(--text-muted, hsl(0, 0%, 60%));
  --bases-table-summary-background: var(--background-primary, hsl(0, 0%, 15%));
  --blockquote-border-color: var(--interactive-accent, hsl(
    129,
    31.9%,
    56.7%
  ));
  --blue: #6c99bb;
  --bodyFont: var(--font-text-theme, "iA Writer Quattro S");
  --border-width-alt: 1px;
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-info: var(--callout-info, 2, 122, 255);
  --callout-question: var(--callout-question, 233, 151, 63);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 2px);
  --callout-success: var(--callout-success, 68, 207, 110);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 2, 122, 255);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, hsl(0, 0%, 15%));
  --canvas-card-label-color: var(--text-faint, hsl(0, 0%, 62%));
  --canvas-controls-radius: var(--radius-s, 2px);
  --caret-color: var(--text-normal, rgb(197, 184, 161));
  --checkbox-border-color: var(--text-faint, hsl(0, 0%, 62%));
  --checkbox-border-color-hover: var(--text-muted, hsl(0, 0%, 60%));
  --checkbox-color: var(--interactive-accent, hsl(
    129,
    31.9%,
    56.7%
  ));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(
    129,
    31.9%,
    46.7%
  ));
  --checkbox-marker-color: var(--background-primary, hsl(0, 0%, 15%));
  --checkbox-radius: var(--radius-s, 2px);
  --checklist-done-color: var(--text-muted, hsl(0, 0%, 60%));
  --clickable-icon-radius: var(--radius-s, 2px);
  --code-background: var(--background-primary-alt, #202020);
  --code-border-color: var(--background-modifier-border, #333);
  --code-comment: var(--text-faint, hsl(0, 0%, 62%));
  --code-normal: var(--blue, #6c99bb);
  --code-punctuation: var(--text-muted, hsl(0, 0%, 60%));
  --code-radius: var(--radius-s, 2px);
  --code-size: var(--font-normal-size, 1em);
  --collapse-icon-color: var(--text-faint, hsl(0, 0%, 62%));
  --color-accent: hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    var(--theme-accent-d)
  );
  --dark: var(--text-normal, var(--color-base-100, rgb(197, 184, 161)));
  --darkgray: var(--text-normal, var(--color-base-100, rgb(197, 184, 161)));
  --divider-color: var(--background-modifier-border, #333);
  --divider-color-hover: var(--interactive-accent, hsl(
    129,
    31.9%,
    56.7%
  ));
  --dropdown-background: var(--interactive-normal, #2a2a2a);
  --dropdown-background-hover: var(--interactive-hover, #303030);
  --file-header-background: var(--background-primary, hsl(0, 0%, 15%));
  --file-header-background-focused: var(--background-primary, hsl(0, 0%, 15%));
  --file-header-font: var(--font-interface, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #2a2a2a);
  --flair-color: var(--text-normal, rgb(197, 184, 161));
  --font-editor: var(--font-text-theme), var(--font-text-override), var(--font-editor-theme);
  --font-editor-theme: "iA Writer Mono V";
  --font-interface-theme: var(--font-text-theme, "iA Writer Quattro S");
  --font-mermaid: var(--font-text, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-default: "JetBrains Mono";
  --font-normal-size: 1em;
  --font-small: 0.813em;
  --font-smaller: 0.688em;
  --font-smallest: 0.625em;
  --font-text-theme: "iA Writer Quattro S";
  --footnote-divider-color: var(--metadata-divider-color, #333);
  --footnote-id-color: var(--text-muted, hsl(0, 0%, 60%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(0, 0%, 62%));
  --footnote-radius: var(--radius-s, 2px);
  --footnote-size: var(--font-smaller, 0.688em);
  --graph-line-color: #6f7577;
  --graph-node: var(--text-muted, hsl(0, 0%, 60%));
  --graph-node-unresolved: var(--text-faint, hsl(0, 0%, 62%));
  --graph-text: var(--text-normal, rgb(197, 184, 161));
  --gray: var(--text-muted, hsl(var(--base-h), var(--base-s), calc(var(--base-d) + 45%)));
  --green: #b4d273;
  --h1: 1.8em;
  --h1-color: var(--text-normal, rgb(197, 184, 161));
  --h1-weight: 600;
  --h2: 1.55em;
  --h2-color: var(--text-normal, rgb(197, 184, 161));
  --h2-weight: 600;
  --h3: 1.35em;
  --h3-color: var(--text-normal, rgb(197, 184, 161));
  --h3-weight: 550;
  --h4: 1.15em;
  --h4-color: var(--text-normal, rgb(197, 184, 161));
  --h4-weight: 550;
  --h5: 1em;
  --h5-color: var(--text-normal, rgb(197, 184, 161));
  --h5-weight: 550;
  --h6: 0.95em;
  --h6-color: var(--text-normal, rgb(197, 184, 161));
  --h6-weight: 550;
  --headerFont: var(--font-text-theme, "iA Writer Quattro S");
  --heading-formatting: var(--text-faint, hsl(0, 0%, 62%));
  --hr-color: var(--background-modifier-border, #333);
  --icon-color: var(--text-muted, hsl(0, 0%, 60%));
  --icon-color-focused: var(--text-normal, rgb(197, 184, 161));
  --icon-color-hover: var(--text-muted, hsl(0, 0%, 60%));
  --icon-muted: 0.5;
  --inline-title-color: var(--h1-color, rgb(197, 184, 161));
  --inline-title-weight: var(--h1-weight, 600);
  --input-date-separator: var(--text-faint, hsl(0, 0%, 62%));
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, hsl(0, 0%, 62%));
  --interactive-accent: hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    calc(var(--theme-accent-d) + 10%)
  );
  --interactive-accent-hover: hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    calc(var(--theme-accent-l))
  );
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: var(--color-base-35, #303030);
  --interactive-normal: var(--color-base-30, #2a2a2a);
  --interactive-success: #197300;
  --light: var(--background-primary, hsl(var(--base-h), var(--base-s), var(--base-d)));
  --lightgray: var(--background-secondary, hsl(
    calc(var(--base-h) + 30),
    calc(var(--base-s) + 11.5%),
    calc(var(--base-l) - 75.6%)
  ));
  --line-height: 1.5;
  --line-width: 40rem;
  --link-color-hover: var(--text-accent-hover, hsl(
    129,
    31.9%,
    36.7%
  ));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color-hover: var(--text-accent-hover, hsl(
    129,
    31.9%,
    36.7%
  ));
  --list-marker-color: var(--text-faint, hsl(0, 0%, 62%));
  --list-marker-color-hover: var(--text-muted, hsl(0, 0%, 60%));
  --max-width: 88%;
  --menu-background: var(--background-secondary, hsl(
    30,
    11.5%,
    20.4%
  ));
  --menu-border-color: var(--background-modifier-border-hover, rgb(94, 94, 94));
  --menu-radius: var(--radius-m, 5px);
  --metadata-border-color: var(--background-modifier-border, #333);
  --metadata-divider-color: var(--background-modifier-border, #333);
  --metadata-input-font: var(--font-interface, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-font-size: var(--font-small, 0.813em);
  --metadata-input-text-color: var(--text-normal, rgb(197, 184, 161));
  --metadata-label-font: var(--font-interface, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font-size: var(--font-smaller, 0.688em);
  --metadata-label-text-color: var(--text-muted, hsl(0, 0%, 60%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(0, 0%, 60%));
  --modal-background: var(--background-primary, hsl(0, 0%, 15%));
  --modal-radius: var(--radius-l, 10px);
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(0, 0%, 62%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(0, 0%, 62%));
  --nav-heading-color: var(--text-normal, rgb(197, 184, 161));
  --nav-heading-color-collapsed: var(--text-faint, hsl(0, 0%, 62%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(0, 0%, 60%));
  --nav-heading-color-hover: var(--text-normal, rgb(197, 184, 161));
  --nav-item-color: var(--text-muted, hsl(0, 0%, 60%));
  --nav-item-color-active: var(--text-normal, rgb(197, 184, 161));
  --nav-item-color-hover: var(--text-normal, rgb(197, 184, 161));
  --nav-item-color-selected: var(--text-normal, rgb(197, 184, 161));
  --nav-item-radius: var(--radius-s, 2px);
  --nav-tag-color: var(--text-faint, hsl(0, 0%, 62%));
  --nav-tag-color-active: var(--text-muted, hsl(0, 0%, 60%));
  --nav-tag-color-hover: var(--text-muted, hsl(0, 0%, 60%));
  --nav-tag-radius: var(--radius-s, 2px);
  --normal-weight: 500;
  --orange: #e87d3e;
  --pdf-background: var(--background-primary, hsl(0, 0%, 15%));
  --pdf-page-background: var(--background-primary, hsl(0, 0%, 15%));
  --pdf-sidebar-background: var(--background-primary, hsl(0, 0%, 15%));
  --pill-border-color: var(--background-modifier-border, #333);
  --pill-border-color-hover: var(--background-modifier-border-hover, rgb(94, 94, 94));
  --pill-color: var(--text-muted, hsl(0, 0%, 60%));
  --pill-color-hover: var(--text-normal, rgb(197, 184, 161));
  --pill-color-remove: var(--text-faint, hsl(0, 0%, 62%));
  --pink: #b05279;
  --prompt-background: var(--background-primary, hsl(0, 0%, 15%));
  --purple: #9e86c8;
  --radius-l: 10px;
  --radius-m: 5px;
  --radius-s: 2px;
  --raised-background: var(--blur-background, color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(
    30,
    11.5%,
    20.4%
  ));
  --ribbon-background-collapsed: var(--background-primary, hsl(0, 0%, 15%));
  --scrollbar-radius: var(--radius-l, 10px);
  --search-clear-button-color: var(--text-muted, hsl(0, 0%, 60%));
  --search-icon-color: var(--text-muted, hsl(0, 0%, 60%));
  --search-result-background: var(--background-primary, hsl(0, 0%, 15%));
  --secondary: var(--color-accent, hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    var(--theme-accent-d)
  ));
  --setting-group-heading-color: var(--text-normal, rgb(197, 184, 161));
  --setting-items-background: var(--background-primary-alt, #202020);
  --setting-items-border-color: var(--background-modifier-border, #333);
  --setting-items-radius: var(--radius-l, 10px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(0, 0%, 60%));
  --shiki-code-background: var(--code-background, #202020);
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-comment: var(--text-faint, hsl(0, 0%, 62%));
  --shiki-code-normal: var(--text-muted, hsl(0, 0%, 60%));
  --shiki-code-punctuation: var(--text-muted, hsl(0, 0%, 60%));
  --shiki-gutter-border-color: var(--background-modifier-border, #333);
  --shiki-gutter-text-color: var(--text-faint, hsl(0, 0%, 62%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(0, 0%, 60%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(0, 0%, 60%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(0, 0%, 62%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgb(94, 94, 94));
  --slider-track-background: var(--background-modifier-border, #333);
  --status-bar-background: var(--background-secondary, hsl(
    30,
    11.5%,
    20.4%
  ));
  --status-bar-border-color: var(--divider-color, #333);
  --status-bar-radius: var(--radius-m, 5px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, hsl(0, 0%, 60%));
  --suggestion-background: var(--background-primary, hsl(0, 0%, 15%));
  --tab-background-active: var(--background-primary, hsl(0, 0%, 15%));
  --tab-container-background: var(--background-secondary, hsl(
    30,
    11.5%,
    20.4%
  ));
  --tab-divider-color: var(--background-modifier-border-hover, rgb(94, 94, 94));
  --tab-outline-color: var(--divider-color, #333);
  --tab-radius: var(--radius-s, 2px);
  --tab-switcher-background: var(--background-secondary, hsl(
    30,
    11.5%,
    20.4%
  ));
  --tab-text-color: var(--text-faint, hsl(0, 0%, 62%));
  --tab-text-color-active: var(--text-muted, hsl(0, 0%, 60%));
  --tab-text-color-focused: var(--text-muted, hsl(0, 0%, 60%));
  --tab-text-color-focused-active: var(--text-muted, hsl(0, 0%, 60%));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(197, 184, 161));
  --table-add-button-border-color: var(--background-modifier-border, #333);
  --table-border-color: var(--background-modifier-border, #333);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(
    129,
    31.9%,
    56.7%
  ));
  --table-drag-handle-color: var(--text-faint, hsl(0, 0%, 62%));
  --table-drag-handle-color-active: var(--text-on-accent, #dcddde);
  --table-header-border-color: var(--table-border-color, #333);
  --table-header-color: var(--text-normal, rgb(197, 184, 161));
  --table-selection-border-color: var(--interactive-accent, hsl(
    129,
    31.9%,
    56.7%
  ));
  --tag-size: var(--font-smaller, 0.688em);
  --tertiary: var(--text-accent-hover, hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    calc(var(--theme-accent-d) - 10%)
  ));
  --text-accent-hover: hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    calc(var(--theme-accent-d) - 10%)
  );
  --text-error: var(--color-red, rgb(230, 60, 60));
  --text-error-hover: #990000;
  --text-faint: hsl(var(--base-h), var(--base-s), calc(var(--base-d) + 47%));
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: hsl(var(--base-h), var(--base-s), calc(var(--base-d) + 45%));
  --text-normal: var(--color-base-100, rgb(197, 184, 161));
  --text-on-accent: #dcddde;
  --theme-accent-d: var(--theme-accent-sel-d, 46.7%);
  --theme-accent-h: var(--theme-accent-sel-h, 129);
  --theme-accent-l: var(--theme-accent-sel-l, 46.7%);
  --theme-accent-s: var(--theme-accent-sel-s, 31.9%);
  --titleFont: var(--font-text-theme, "iA Writer Quattro S");
  --titlebar-background: var(--background-secondary, hsl(
    30,
    11.5%,
    20.4%
  ));
  --titlebar-background-focused: var(--background-secondary-alt, #000000);
  --titlebar-border-color: var(--background-modifier-border, #333);
  --titlebar-text-color: var(--text-muted, hsl(0, 0%, 60%));
  --titlebar-text-color-focused: var(--text-normal, rgb(197, 184, 161));
  --vault-profile-color: var(--text-normal, rgb(197, 184, 161));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(197, 184, 161));
  --vim-cursor: hsla(
    var(--theme-accent-h),
    var(--theme-accent-s),
    var(--theme-accent-d),
    0.8
  );
  --yellow: #e5b567;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(
    30,
    11.5%,
    20.4%
  ));
  background-color: var(--tab-container-background, rgb(58, 52, 46));
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(38, 38, 38));
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(58, 52, 46));
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(
    30,
    11.5%,
    20.4%
  ));
  background-color: var(--tab-container-background, rgb(58, 52, 46));
  border-left-color: rgb(51, 51, 51);
  color: rgb(197, 184, 161);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(197, 184, 161));
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(197, 184, 161));
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(197, 184, 161));
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgb(197, 184, 161));
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(197, 184, 161));
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 177, 80, 0.3));
  color: var(--text-normal, rgb(197, 184, 161));
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body del {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(158, 158, 158);
  border-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(109, 180, 120));
  border-color: rgb(109, 180, 120);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(153, 153, 153));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body a.internal-link.broken {
  font-family: "iA Writer Quattro S";
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body ol > li {
  color: rgb(197, 184, 161);
  margin-left: 28.8001px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(197, 184, 161);
  margin-left: 28.8001px;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(158, 158, 158));
}

html[saved-theme="dark"] body blockquote {
  color: var(--blockquote-color, rgb(197, 184, 161));
  font-family: "iA Writer Quattro S";
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body table {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--table-text-color, rgb(197, 184, 161));
  padding-bottom: 2.66667px;
  padding-left: 10.6667px;
  padding-right: 10.6667px;
  padding-top: 2.66667px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--table-header-color, rgb(197, 184, 161));
  padding-bottom: 5.33333px;
  padding-left: 10.6667px;
  padding-right: 10.6667px;
  padding-top: 5.33333px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(32, 32, 32));
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(108, 153, 187));
  font-family: var(--font-monospace, "??", "??", "JetBrains Mono");
  padding-bottom: 2.4px;
  padding-left: 4.8px;
  padding-right: 4.8px;
  padding-top: 2.4px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(32, 32, 32));
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #202020);
  border-bottom-color: rgb(197, 184, 161);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(32, 32, 32));
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(153, 153, 153);
  border-radius: 5px;
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--text-muted, rgb(153, 153, 153));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(197, 184, 161);
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(109, 180, 120);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: rgb(197, 184, 161);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(197, 184, 161);
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(197, 184, 161);
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
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--text-normal, rgb(197, 184, 161));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(38, 38, 38));
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(197, 184, 161);
  font-family: "iA Writer Quattro S";
  outline: rgb(197, 184, 161) none 0px;
  text-decoration-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(197, 184, 161);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(58, 52, 46);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(197, 184, 161);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.016px;
  border-bottom-right-radius: 26.016px;
  border-top-left-radius: 26.016px;
  border-top-right-radius: 26.016px;
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 13.008px;
  line-height: var(--line-height-tight, 13.008px);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 600);
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: var(--h1-color, rgb(197, 184, 161));
  font-family: var(--h1-font, "iA Writer Quattro S");
  font-weight: var(--font-weight, 600);
  margin-bottom: 0px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(197, 184, 161));
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 600);
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: var(--h2-color, rgb(197, 184, 161));
  font-family: var(--h2-font, "iA Writer Quattro S");
  font-weight: var(--font-weight, 600);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: var(--inline-title-color, rgb(197, 184, 161));
  font-family: var(--inline-title-font, "iA Writer Quattro S");
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 550);
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: var(--h3-color, rgb(197, 184, 161));
  font-family: var(--h3-font, "iA Writer Quattro S");
  font-weight: var(--font-weight, 550);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 550);
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: var(--h4-color, rgb(197, 184, 161));
  font-family: var(--h4-font, "iA Writer Quattro S");
  font-weight: var(--font-weight, 550);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 550);
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: var(--h5-color, rgb(197, 184, 161));
  font-family: var(--h5-font, "iA Writer Quattro S");
  font-weight: var(--font-weight, 550);
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 550);
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: var(--h6-color, rgb(197, 184, 161));
  font-family: var(--h6-font, "iA Writer Quattro S");
  font-weight: var(--font-weight, 550);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(153, 153, 153));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(153, 153, 153));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(197, 184, 161);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--icon-color, rgb(153, 153, 153));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(58, 52, 46));
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 5px;
  color: var(--status-bar-text-color, rgb(153, 153, 153));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(153, 153, 153);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(197, 184, 161);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(153, 153, 153));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(153, 153, 153));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--icon-color, rgb(153, 153, 153));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(158, 158, 158));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(197, 184, 161));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(58, 52, 46));
  border-color: rgb(197, 184, 161);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(51, 51, 51);
  color: var(--table-header-color, rgb(197, 184, 161));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  --input-height: var(--metadata-input-height, 2rem);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: var(--text-muted, rgb(153, 153, 153));
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(153, 153, 153);
  font-family: var(--metadata-label-font, "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(153, 153, 153);
  font-family: var(--metadata-input-font, "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .note-properties {
  --input-height: var(--metadata-input-height, 2rem);
  border-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-tags {
  border-radius: 26.016px;
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(38, 38, 38));
  color: var(--text-normal, rgb(197, 184, 161));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(58, 52, 46));
  border-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--background-primary, rgb(38, 38, 38));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(197, 184, 161);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(58, 52, 46));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
  color: var(--text-normal, rgb(197, 184, 161));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 19.5px;
}

html[saved-theme="dark"] body abbr {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: var(--text-normal, rgb(153, 153, 153));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(32, 32, 32));
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(108, 153, 187));
  font-family: var(--font-monospace, "??", "??", "JetBrains Mono");
  font-size: var(--code-size, 16px);
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(197, 184, 161);
  border-left-color: rgb(197, 184, 161);
  border-right-color: rgb(197, 184, 161);
  border-top-color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body sub {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body summary {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body sup {
  color: rgb(197, 184, 161);
}

html[saved-theme="dark"] body ul.tags > li {
  border-bottom-left-radius: 22.016px;
  border-bottom-right-radius: 22.016px;
  border-top-left-radius: 22.016px;
  border-top-right-radius: 22.016px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-accent: hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    calc(var(--theme-accent-l) + 10%)
  );
  --background-modifier-border: hsl(
    var(--base-h),
    var(--base-s),
    calc(var(--base-l) - 6%)
  );
  --background-modifier-border-focus: hsl(
    var(--base-h),
    var(--base-s),
    calc(var(--base-l) - 20%)
  );
  --background-modifier-border-hover: hsl(
    var(--base-h),
    var(--base-s),
    calc(var(--base-l) - 12%)
  );
  --background-modifier-form-field: hsl(
    var(--base-h),
    var(--base-s),
    calc(var(--base-l) + 6%)
  );
  --background-modifier-form-field-highlighted: hsl(
    var(--base-h),
    var(--base-s),
    calc(var(--base-l) + 8%)
  );
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(
    0,
    0%,
    102%
  ));
  --background-primary: hsl(
    calc(var(--base-h) + 44),
    calc(var(--base-s) + 79%),
    calc(var(--base-l) - 2%)
  );
  --background-primary-alt: var(--color-base-10, #fcf5e4);
  --background-secondary: hsl(
    calc(var(--base-h) + 42),
    calc(var(--base-s) + 34%),
    calc(var(--base-l) - 12%)
  );
  --background-secondary-alt: var(--color-base-05, #fcf5e4);
  --background-translucent: rgba(255, 255, 255, 0.85);
  --background-transparent: hsla(
    var(--base-h),
    var(--base-s),
    var(--base-l),
    0
  );
  --base-d: 15%;
  --base-h: 0;
  --base-l: 96%;
  --base-s: 0%;
  --bases-cards-background: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --bases-cards-cover-background: var(--background-primary-alt, #fcf5e4);
  --bases-cards-font-size: var(--font-smaller, 0.688em);
  --bases-cards-radius: var(--radius-m, 5px);
  --bases-embed-border-color: var(--background-modifier-border, hsl(
    0,
    0%,
    90%
  ));
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-group-heading-property-color: var(--text-muted, hsl(0, 0%, 35%));
  --bases-group-heading-value-size: var(--font-smaller, 0.688em);
  --bases-table-border-color: var(--table-border-color, hsl(
    0,
    0%,
    90%
  ));
  --bases-table-cell-background-active: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --bases-table-cell-background-disabled: var(--background-primary-alt, #fcf5e4);
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-font-size: var(--font-normal-size, 1em);
  --bases-table-group-background: var(--background-primary-alt, #fcf5e4);
  --bases-table-header-background: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --bases-table-header-color: var(--text-muted, hsl(0, 0%, 35%));
  --bases-table-summary-background: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --blockquote-border-color: var(--interactive-accent, hsl(
    129,
    31.9%,
    56.7%
  ));
  --blue: #6c99bb;
  --bodyFont: var(--font-text-theme, "iA Writer Quattro S");
  --border-width-alt: 1px;
  --callout-bug: var(--callout-bug, 233, 49, 71);
  --callout-default: var(--callout-default, 8, 109, 221);
  --callout-error: var(--callout-error, 233, 49, 71);
  --callout-example: var(--callout-example, 120, 82, 238);
  --callout-fail: var(--callout-fail, 233, 49, 71);
  --callout-info: var(--callout-info, 8, 109, 221);
  --callout-question: var(--callout-question, 236, 117, 0);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 2px);
  --callout-success: var(--callout-success, 8, 185, 78);
  --callout-summary: var(--callout-summary, 0, 191, 188);
  --callout-tip: var(--callout-tip, 0, 191, 188);
  --callout-todo: var(--callout-todo, 8, 109, 221);
  --callout-warning: var(--callout-warning, 236, 117, 0);
  --canvas-background: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --canvas-card-label-color: var(--text-faint, hsl(0, 0%, 62%));
  --canvas-controls-radius: var(--radius-s, 2px);
  --caret-color: var(--text-normal, hsl(0, 0%, 15%));
  --checkbox-border-color: var(--text-faint, hsl(0, 0%, 62%));
  --checkbox-border-color-hover: var(--text-muted, hsl(0, 0%, 35%));
  --checkbox-color: var(--interactive-accent, hsl(
    129,
    31.9%,
    56.7%
  ));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(
    129,
    31.9%,
    46.7%
  ));
  --checkbox-marker-color: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --checkbox-radius: var(--radius-s, 2px);
  --checklist-done-color: var(--text-muted, hsl(0, 0%, 35%));
  --clickable-icon-radius: var(--radius-s, 2px);
  --code-background: var(--background-primary-alt, #eee8d5);
  --code-border-color: var(--background-modifier-border, hsl(
    0,
    0%,
    90%
  ));
  --code-comment: var(--text-faint, hsl(0, 0%, 62%));
  --code-normal: var(--blue, #6c99bb);
  --code-punctuation: var(--text-muted, hsl(0, 0%, 35%));
  --code-radius: var(--radius-s, 2px);
  --code-size: var(--font-normal-size, 1em);
  --collapse-icon-color: var(--text-faint, hsl(0, 0%, 62%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(
    129,
    31.9%,
    46.7%
  ));
  --color-accent: hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    var(--theme-accent-l)
  );
  --dark: var(--text-normal, hsl(var(--base-h), var(--base-s), var(--base-d)));
  --darkgray: var(--text-normal, hsl(var(--base-h), var(--base-s), var(--base-d)));
  --divider-color: var(--background-modifier-border, hsl(
    0,
    0%,
    90%
  ));
  --divider-color-hover: var(--interactive-accent, hsl(
    129,
    31.9%,
    56.7%
  ));
  --dropdown-background: var(--interactive-normal, #f2f3f5);
  --dropdown-background-hover: var(--interactive-hover, #e9e9e9);
  --file-header-background: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --file-header-background-focused: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --file-header-font: var(--font-interface, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #f2f3f5);
  --flair-color: var(--text-normal, hsl(0, 0%, 15%));
  --font-editor: var(--font-text-theme), var(--font-text-override), var(--font-editor-theme);
  --font-editor-theme: "iA Writer Mono V";
  --font-interface-theme: var(--font-text-theme, "iA Writer Quattro S");
  --font-mermaid: var(--font-text, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-default: "JetBrains Mono";
  --font-normal-size: 1em;
  --font-small: 0.813em;
  --font-smaller: 0.688em;
  --font-smallest: 0.625em;
  --font-text-theme: "iA Writer Quattro S";
  --footnote-divider-color: var(--metadata-divider-color, hsl(
    0,
    0%,
    90%
  ));
  --footnote-id-color: var(--text-muted, hsl(0, 0%, 35%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(0, 0%, 62%));
  --footnote-radius: var(--radius-s, 2px);
  --footnote-size: var(--font-smaller, 0.688em);
  --graph-line-color: #c0c9ce;
  --graph-node: var(--text-muted, hsl(0, 0%, 35%));
  --graph-node-focused: var(--text-accent, hsl(
    129,
    31.9%,
    46.7%
  ));
  --graph-node-unresolved: var(--text-faint, hsl(0, 0%, 62%));
  --graph-text: var(--text-normal, hsl(0, 0%, 15%));
  --gray: var(--text-muted, hsl(var(--base-h), var(--base-s), calc(var(--base-d) + 20%)));
  --green: #b4d273;
  --h1: 1.8em;
  --h1-color: var(--text-normal, hsl(0, 0%, 15%));
  --h1-weight: 600;
  --h2: 1.55em;
  --h2-color: var(--text-normal, hsl(0, 0%, 15%));
  --h2-weight: 600;
  --h3: 1.35em;
  --h3-color: var(--text-normal, hsl(0, 0%, 15%));
  --h3-weight: 550;
  --h4: 1.15em;
  --h4-color: var(--text-normal, hsl(0, 0%, 15%));
  --h4-weight: 550;
  --h5: 1em;
  --h5-color: var(--text-normal, hsl(0, 0%, 15%));
  --h5-weight: 550;
  --h6: 0.95em;
  --h6-color: var(--text-normal, hsl(0, 0%, 15%));
  --h6-weight: 550;
  --headerFont: var(--font-text-theme, "iA Writer Quattro S");
  --heading-formatting: var(--text-faint, hsl(0, 0%, 62%));
  --hr-color: var(--background-modifier-border, hsl(
    0,
    0%,
    90%
  ));
  --icon-color: var(--text-muted, hsl(0, 0%, 35%));
  --icon-color-active: var(--text-accent, hsl(
    129,
    31.9%,
    46.7%
  ));
  --icon-color-focused: var(--text-normal, hsl(0, 0%, 15%));
  --icon-color-hover: var(--text-muted, hsl(0, 0%, 35%));
  --icon-hex: 000;
  --icon-muted: 0.5;
  --inline-title-color: var(--h1-color, hsl(0, 0%, 15%));
  --inline-title-weight: var(--h1-weight, 600);
  --input-date-separator: var(--text-faint, hsl(0, 0%, 62%));
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, hsl(0, 0%, 62%));
  --interactive-accent: hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    calc(var(--theme-accent-l) + 10%)
  );
  --interactive-accent-hover: hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    calc(var(--theme-accent-l))
  );
  --interactive-accent-rgb: 123, 108, 217;
  --interactive-hover: var(--color-base-10, #e9e9e9);
  --interactive-normal: var(--color-base-00, #f2f3f5);
  --interactive-success: #197300;
  --light: var(--background-primary, hsl(
    calc(var(--base-h) + 44),
    calc(var(--base-s) + 79%),
    calc(var(--base-l) - 2%)
  ));
  --lightgray: var(--background-secondary, hsl(
    calc(var(--base-h) + 42),
    calc(var(--base-s) + 34%),
    calc(var(--base-l) - 12%)
  ));
  --line-height: 1.5;
  --line-width: 40rem;
  --link-color: var(--text-accent, hsl(
    129,
    31.9%,
    46.7%
  ));
  --link-color-hover: var(--text-accent-hover, hsl(
    129,
    31.9%,
    36.7%
  ));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, hsl(
    129,
    31.9%,
    46.7%
  ));
  --link-external-color-hover: var(--text-accent-hover, hsl(
    129,
    31.9%,
    36.7%
  ));
  --link-unresolved-color: var(--text-accent, hsl(
    129,
    31.9%,
    46.7%
  ));
  --list-marker-color: var(--text-faint, hsl(0, 0%, 62%));
  --list-marker-color-collapsed: var(--text-accent, hsl(
    129,
    31.9%,
    46.7%
  ));
  --list-marker-color-hover: var(--text-muted, hsl(0, 0%, 35%));
  --max-width: 88%;
  --menu-background: var(--background-secondary, hsl(
    42,
    34%,
    84%
  ));
  --menu-border-color: var(--background-modifier-border-hover, hsl(
    0,
    0%,
    84%
  ));
  --menu-radius: var(--radius-m, 5px);
  --metadata-border-color: var(--background-modifier-border, hsl(
    0,
    0%,
    90%
  ));
  --metadata-divider-color: var(--background-modifier-border, hsl(
    0,
    0%,
    90%
  ));
  --metadata-input-font: var(--font-interface, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-font-size: var(--font-small, 0.813em);
  --metadata-input-text-color: var(--text-normal, hsl(0, 0%, 15%));
  --metadata-label-font: var(--font-interface, "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font-size: var(--font-smaller, 0.688em);
  --metadata-label-text-color: var(--text-muted, hsl(0, 0%, 35%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(0, 0%, 35%));
  --modal-background: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --modal-radius: var(--radius-l, 10px);
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(0, 0%, 62%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(0, 0%, 62%));
  --nav-heading-color: var(--text-normal, hsl(0, 0%, 15%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(0, 0%, 62%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(0, 0%, 35%));
  --nav-heading-color-hover: var(--text-normal, hsl(0, 0%, 15%));
  --nav-item-color: var(--text-muted, hsl(0, 0%, 35%));
  --nav-item-color-active: var(--text-normal, hsl(0, 0%, 15%));
  --nav-item-color-highlighted: var(--text-accent, hsl(
    129,
    31.9%,
    46.7%
  ));
  --nav-item-color-hover: var(--text-normal, hsl(0, 0%, 15%));
  --nav-item-color-selected: var(--text-normal, hsl(0, 0%, 15%));
  --nav-item-radius: var(--radius-s, 2px);
  --nav-tag-color: var(--text-faint, hsl(0, 0%, 62%));
  --nav-tag-color-active: var(--text-muted, hsl(0, 0%, 35%));
  --nav-tag-color-hover: var(--text-muted, hsl(0, 0%, 35%));
  --nav-tag-radius: var(--radius-s, 2px);
  --normal-weight: 500;
  --orange: #e87d3e;
  --pdf-background: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --pdf-page-background: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --pdf-sidebar-background: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --pill-border-color: var(--background-modifier-border, hsl(
    0,
    0%,
    90%
  ));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(
    0,
    0%,
    84%
  ));
  --pill-color: var(--text-muted, hsl(0, 0%, 35%));
  --pill-color-hover: var(--text-normal, hsl(0, 0%, 15%));
  --pill-color-remove: var(--text-faint, hsl(0, 0%, 62%));
  --pill-color-remove-hover: var(--text-accent, hsl(
    129,
    31.9%,
    46.7%
  ));
  --pink: #b05279;
  --prompt-background: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --purple: #9e86c8;
  --radius-l: 10px;
  --radius-m: 5px;
  --radius-s: 2px;
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(
    44,
    79%,
    94%
  ) 65%, transparent) linear-gradient(hsl(
    44,
    79%,
    94%
  ), color-mix(in srgb, hsl(
    44,
    79%,
    94%
  ) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(
    42,
    34%,
    84%
  ));
  --ribbon-background-collapsed: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --scrollbar-radius: var(--radius-l, 10px);
  --search-clear-button-color: var(--text-muted, hsl(0, 0%, 35%));
  --search-icon-color: var(--text-muted, hsl(0, 0%, 35%));
  --search-result-background: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --secondary: var(--text-accent, hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    var(--theme-accent-l)
  ));
  --setting-group-heading-color: var(--text-normal, hsl(0, 0%, 15%));
  --setting-items-background: var(--background-primary-alt, #fcf5e4);
  --setting-items-border-color: var(--background-modifier-border, hsl(
    0,
    0%,
    90%
  ));
  --setting-items-radius: var(--radius-l, 10px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(0, 0%, 35%));
  --shiki-code-background: var(--code-background, #eee8d5);
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-comment: var(--text-faint, hsl(0, 0%, 62%));
  --shiki-code-normal: var(--text-muted, hsl(0, 0%, 35%));
  --shiki-code-punctuation: var(--text-muted, hsl(0, 0%, 35%));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(
    0,
    0%,
    90%
  ));
  --shiki-gutter-text-color: var(--text-faint, hsl(0, 0%, 62%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(0, 0%, 35%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(0, 0%, 35%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(0, 0%, 62%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(
    0,
    0%,
    84%
  ));
  --slider-track-background: var(--background-modifier-border, hsl(
    0,
    0%,
    90%
  ));
  --status-bar-background: var(--background-secondary, hsl(
    42,
    34%,
    84%
  ));
  --status-bar-border-color: var(--divider-color, hsl(
    0,
    0%,
    90%
  ));
  --status-bar-radius: var(--radius-m, 5px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, hsl(0, 0%, 35%));
  --suggestion-background: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --tab-background-active: var(--background-primary, hsl(
    44,
    79%,
    94%
  ));
  --tab-container-background: var(--background-secondary, hsl(
    42,
    34%,
    84%
  ));
  --tab-divider-color: var(--background-modifier-border-hover, hsl(
    0,
    0%,
    84%
  ));
  --tab-outline-color: var(--divider-color, hsl(
    0,
    0%,
    90%
  ));
  --tab-radius: var(--radius-s, 2px);
  --tab-switcher-background: var(--background-secondary, hsl(
    42,
    34%,
    84%
  ));
  --tab-text-color: var(--text-faint, hsl(0, 0%, 62%));
  --tab-text-color-active: var(--text-muted, hsl(0, 0%, 35%));
  --tab-text-color-focused: var(--text-muted, hsl(0, 0%, 35%));
  --tab-text-color-focused-active: var(--text-muted, hsl(0, 0%, 35%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(0, 0%, 15%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(
    129,
    31.9%,
    46.7%
  ));
  --table-add-button-border-color: var(--background-modifier-border, hsl(
    0,
    0%,
    90%
  ));
  --table-border-color: var(--background-modifier-border, hsl(
    0,
    0%,
    90%
  ));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(
    129,
    31.9%,
    56.7%
  ));
  --table-drag-handle-color: var(--text-faint, hsl(0, 0%, 62%));
  --table-drag-handle-color-active: var(--text-on-accent, #f2f2f2);
  --table-header-border-color: var(--table-border-color, hsl(
    0,
    0%,
    90%
  ));
  --table-header-color: var(--text-normal, hsl(0, 0%, 15%));
  --table-selection-border-color: var(--interactive-accent, hsl(
    129,
    31.9%,
    56.7%
  ));
  --tag-color: var(--text-accent, hsl(
    129,
    31.9%,
    46.7%
  ));
  --tag-color-hover: var(--text-accent, hsl(
    129,
    31.9%,
    46.7%
  ));
  --tag-size: var(--font-smaller, 0.688em);
  --tertiary: var(--text-accent-hover, hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    calc(var(--theme-accent-l) - 10%)
  ));
  --text-accent: hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    var(--theme-accent-l)
  );
  --text-accent-hover: hsl(
    var(--theme-accent-h),
    var(--theme-accent-s),
    calc(var(--theme-accent-l) - 10%)
  );
  --text-faint: hsl(var(--base-h), var(--base-s), calc(var(--base-d) + 47%));
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: hsl(var(--base-h), var(--base-s), calc(var(--base-d) + 20%));
  --text-normal: hsl(var(--base-h), var(--base-s), var(--base-d));
  --text-on-accent: #f2f2f2;
  --theme-accent-d: var(--theme-accent-sel-d, 46.7%);
  --theme-accent-h: var(--theme-accent-sel-h, 129);
  --theme-accent-l: var(--theme-accent-sel-l, 46.7%);
  --theme-accent-s: var(--theme-accent-sel-s, 31.9%);
  --titleFont: var(--font-text-theme, "iA Writer Quattro S");
  --titlebar-background: var(--background-secondary, hsl(
    42,
    34%,
    84%
  ));
  --titlebar-background-focused: var(--background-secondary-alt, #fcf5e4);
  --titlebar-border-color: var(--background-modifier-border, hsl(
    0,
    0%,
    90%
  ));
  --titlebar-text-color: var(--text-muted, hsl(0, 0%, 35%));
  --titlebar-text-color-focused: var(--text-normal, hsl(0, 0%, 15%));
  --vault-profile-color: var(--text-normal, hsl(0, 0%, 15%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(0, 0%, 15%));
  --vim-cursor: hsla(
    var(--theme-accent-h),
    var(--theme-accent-s),
    var(--theme-accent-l),
    0.8
  );
  --yellow: #e5b567;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(
    42,
    34%,
    84%
  ));
  background-color: var(--tab-container-background, rgb(228, 220, 200));
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(252, 245, 228));
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(228, 220, 200));
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(
    42,
    34%,
    84%
  ));
  background-color: var(--tab-container-background, rgb(228, 220, 200));
  border-left-color: rgb(230, 230, 230);
  color: rgb(38, 38, 38);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(38, 38, 38));
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(38, 38, 38));
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(38, 38, 38));
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, rgb(38, 38, 38));
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(38, 38, 38));
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 225, 0, 0.5));
  color: var(--text-normal, rgb(38, 38, 38));
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body del {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(158, 158, 158);
  border-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(109, 180, 120));
  border-color: rgb(109, 180, 120);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(89, 89, 89));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 89, 89) none 0px;
  text-decoration-color: rgb(89, 89, 89);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(81, 157, 92));
  font-family: "iA Writer Quattro S";
  outline: rgb(81, 157, 92) none 0px;
  text-decoration-color: rgb(81, 157, 92);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(81, 157, 92));
  font-family: "iA Writer Quattro S";
  outline: rgb(81, 157, 92) none 0px;
  text-decoration-color: rgb(81, 157, 92);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(81, 157, 92));
  font-family: "iA Writer Quattro S";
  outline: rgb(81, 157, 92) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body ol > li {
  color: rgb(38, 38, 38);
  margin-left: 28.8001px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(38, 38, 38);
  margin-left: 28.8001px;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(158, 158, 158));
}

html[saved-theme="light"] body blockquote {
  color: var(--blockquote-color, rgb(38, 38, 38));
  font-family: "iA Writer Quattro S";
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body table {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--table-text-color, rgb(38, 38, 38));
  padding-bottom: 2.66667px;
  padding-left: 10.6667px;
  padding-right: 10.6667px;
  padding-top: 2.66667px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--table-header-color, rgb(38, 38, 38));
  padding-bottom: 5.33333px;
  padding-left: 10.6667px;
  padding-right: 10.6667px;
  padding-top: 5.33333px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(238, 232, 213));
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(108, 153, 187));
  font-family: var(--font-monospace, "??", "??", "JetBrains Mono");
  padding-bottom: 2.4px;
  padding-left: 4.8px;
  padding-right: 4.8px;
  padding-top: 2.4px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(238, 232, 213));
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body figcaption {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #eee8d5);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(252, 245, 228));
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(89, 89, 89);
  border-radius: 5px;
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--text-muted, rgb(89, 89, 89));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(109, 180, 120);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(89, 89, 89);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(89, 89, 89);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 245, 228);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 245, 228);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(38, 38, 38);
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
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--text-normal, rgb(38, 38, 38));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(252, 245, 228));
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(38, 38, 38);
  font-family: "iA Writer Quattro S";
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(228, 220, 200);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, hsl(
    129,
    31.9%,
    46.7%
  ));
  --pill-color-hover: var(--tag-color-hover, hsl(
    129,
    31.9%,
    46.7%
  ));
  --pill-color-remove: var(--tag-color, hsl(
    129,
    31.9%,
    46.7%
  ));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(
    129,
    31.9%,
    46.7%
  ));
  border-bottom-left-radius: 26.016px;
  border-bottom-right-radius: 26.016px;
  border-top-left-radius: 26.016px;
  border-top-right-radius: 26.016px;
  color: var(--pill-color, rgb(81, 157, 92));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 13.008px;
  line-height: var(--line-height-tight, 13.008px);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(81, 157, 92);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 600);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--h1-color, rgb(38, 38, 38));
  font-family: var(--h1-font, "iA Writer Quattro S");
  font-weight: var(--font-weight, 600);
  margin-bottom: 0px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(38, 38, 38));
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 600);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--h2-color, rgb(38, 38, 38));
  font-family: var(--h2-font, "iA Writer Quattro S");
  font-weight: var(--font-weight, 600);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--inline-title-color, rgb(38, 38, 38));
  font-family: var(--inline-title-font, "iA Writer Quattro S");
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 550);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--h3-color, rgb(38, 38, 38));
  font-family: var(--h3-font, "iA Writer Quattro S");
  font-weight: var(--font-weight, 550);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 550);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--h4-color, rgb(38, 38, 38));
  font-family: var(--h4-font, "iA Writer Quattro S");
  font-weight: var(--font-weight, 550);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 550);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--h5-color, rgb(38, 38, 38));
  font-family: var(--h5-font, "iA Writer Quattro S");
  font-weight: var(--font-weight, 550);
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 550);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--h6-color, rgb(38, 38, 38));
  font-family: var(--h6-font, "iA Writer Quattro S");
  font-weight: var(--font-weight, 550);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(89, 89, 89));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(89, 89, 89));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(38, 38, 38);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--icon-color, rgb(89, 89, 89));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(228, 220, 200));
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 5px;
  color: var(--status-bar-text-color, rgb(89, 89, 89));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(89, 89, 89);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(38, 38, 38);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(89, 89, 89));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(89, 89, 89);
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(89, 89, 89));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--icon-color, rgb(89, 89, 89));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(89, 89, 89);
  stroke: rgb(89, 89, 89);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(89, 89, 89);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(158, 158, 158));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(38, 38, 38));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(252, 245, 228));
  border-color: rgb(38, 38, 38);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(230, 230, 230);
  color: var(--table-header-color, rgb(38, 38, 38));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  --input-height: var(--metadata-input-height, 2rem);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--text-muted, rgb(89, 89, 89));
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(89, 89, 89);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(89, 89, 89);
  font-family: "iA Writer Quattro S";
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(89, 89, 89);
  font-family: var(--metadata-label-font, "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(89, 89, 89);
  font-family: var(--metadata-input-font, "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .note-properties {
  --input-height: var(--metadata-input-height, 2rem);
  border-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(89, 89, 89);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(89, 89, 89);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-color: var(--tag-color, hsl(
    129,
    31.9%,
    46.7%
  ));
  --pill-color-hover: var(--tag-color-hover, hsl(
    129,
    31.9%,
    46.7%
  ));
  --pill-color-remove: var(--tag-color, hsl(
    129,
    31.9%,
    46.7%
  ));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(
    129,
    31.9%,
    46.7%
  ));
  border-radius: 26.016px;
  color: var(--pill-color, rgb(81, 157, 92));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(89, 89, 89);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(252, 245, 228));
  color: var(--text-normal, rgb(38, 38, 38));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(228, 220, 200));
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--background-primary, rgb(252, 245, 228));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(38, 38, 38);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(228, 220, 200));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: var(--text-normal, rgb(38, 38, 38));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 19.5px;
}

html[saved-theme="light"] body abbr {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: var(--text-normal, rgb(89, 89, 89));
  font-family: "??", "iA Writer Quattro S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(238, 232, 213));
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(108, 153, 187));
  font-family: var(--font-monospace, "??", "??", "JetBrains Mono");
  font-size: var(--code-size, 16px);
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sub {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body summary {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sup {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-left-radius: 22.016px;
  border-bottom-right-radius: 22.016px;
  border-top-left-radius: 22.016px;
  border-top-right-radius: 22.016px;
  color: var(--tag-color, rgb(81, 157, 92));
}`,
  },
  classSettings: {
    "shrink-formatting": {
      general: `.shrink-formatting .CodeMirror-line span.cm-formatting:not(.cm-s-obsidian span.cm-link, .cm-s-obsidian span.cm-hmd-internal-link, .cm-s-obsidian span.cm-url, .cm-s-obsidian span.cm-attribute, .cm-s-obsidian span.cm-quote, span.cm-hashtag.cm-hashtag-begin, .cm-s-obsidian span.cm-formatting-list), .shrink-formatting .markdown-source-view.mod-cm6 .cm-line span.cm-formatting:not(.cm-s-obsidian span.cm-link, .cm-s-obsidian span.cm-hmd-internal-link, .cm-s-obsidian span.cm-url, .cm-s-obsidian span.cm-attribute, .cm-s-obsidian span.cm-quote, span.cm-hashtag.cm-hashtag-begin, .cm-s-obsidian span.cm-formatting-list) {
color: var(--text-faint);
font-size: var(--font-smaller) !important;
}`,
    },
    "active-line-highlight": {
      general: `.active-line-highlight .markdown-source-view .CodeMirror-activeline, .active-line-highlight .markdown-source-view.mod-cm6 .cm-active.cm-line {
background: var(--background-secondary);
border-radius: 8px;
}`,
    },
  },
};
