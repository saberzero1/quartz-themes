import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "material-flat",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto", "roboto-mono"],
    styleSettingsId: "title",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background: hsl(var(--accent-h), calc(var(--accent-s)*0.06), 11.5%);
  --background-modifier-border: var(--surface, hsl(258, 8.8%, 15%));
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: var(--error, #9c2b2b);
  --background-modifier-error-hover: var(--color-red, #470000);
  --background-modifier-error-rgb: var(--color-red-rgb, 61, 0, 0);
  --background-modifier-form-field: var(--color-base-25, rgba(0, 0, 0, 0.3));
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgba(0, 0, 0, 0.3));
  --background-modifier-success: var(--color-green, #197300);
  --background-primary: var(--background, hsl(258, 5.28%, 11.5%));
  --background-primary-alt: var(--surface1, rgb(
    36.7,
    35.15,
    41.25
    ));
  --background-secondary: var(--surface-variant, hsl(258, 7.04%, 28%));
  --background-secondary-alt: var(--surface3, rgb(
    47.14,
    44.93,
    54.75
    ));
  --bases-cards-background: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(
    36.7,
    35.15,
    41.25
    ));
  --bases-embed-border-color: var(--background-modifier-border, hsl(258, 8.8%, 15%));
  --bases-group-heading-property-color: var(--text-muted, hsl(258, 27.28%, 80%));
  --bases-table-border-color: var(--table-border-color, hsl(258, 8.8%, 15%));
  --bases-table-cell-background-active: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(
    36.7,
    35.15,
    41.25
    ));
  --bases-table-group-background: var(--background-primary-alt, rgb(
    36.7,
    35.15,
    41.25
    ));
  --bases-table-header-background: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --bases-table-header-color: var(--text-muted, hsl(258, 27.28%, 80%));
  --bases-table-summary-background: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --big-radius: 24px;
  --blockquote-border-color: var(--interactive-accent, hsl(258, 66%, 80%));
  --bodyFont: var(--font-text-theme, "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --bold: 650;
  --canvas-background: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --caret-color: var(--text-normal, #E5E1E5);
  --checkbox-border-color-hover: var(--text-muted, hsl(258, 27.28%, 80%));
  --checkbox-color: var(--interactive-accent, hsl(258, 66%, 80%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(258, 66%, 80%));
  --checkbox-marker-color: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --checklist-done-color: var(--text-muted, hsl(258, 27.28%, 80%));
  --code-background: var(--background-primary-alt, rgb(
    36.7,
    35.15,
    41.25
    ));
  --code-border-color: var(--background-modifier-border, hsl(258, 8.8%, 15%));
  --code-normal: var(--text-normal, #E5E1E5);
  --code-punctuation: var(--text-muted, hsl(258, 27.28%, 80%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(258, 35.2%, 90%));
  --color-accent: hsl(var(--accent-h), calc(var(--accent-s)*0.6), 70%);
  --color-accent-1: hsl(var(--accent-h), calc(var(--accent-s)*0.7), 80%);
  --color-accent-2: hsl(var(--accent-h), calc(var(--accent-s)*0.8), 90%);
  --dark: var(--text-normal, var(--on-background, #E5E1E5));
  --darkgray: var(--text-normal, var(--on-background, #E5E1E5));
  --divider-color: var(--background-modifier-border, transparent);
  --divider-color-hover: var(--interactive-accent, hsl(258, 66%, 80%));
  --dropdown-background: var(--interactive-normal, hsl(258, 7.04%, 28%));
  --dropdown-background-hover: var(--interactive-hover, hsl(258, 7.04%, 28%));
  --elevation1: 0.05;
  --elevation2: 0.08;
  --elevation3: 0.11;
  --elevation4: 0.12;
  --elevation5: 0.14;
  --error: #9c2b2b;
  --error-container: var(--errorContainer, #930006);
  --errorContainer: #930006;
  --file-header-background: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --file-header-background-focused: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --file-header-font: var(--font-interface, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, hsl(258, 7.04%, 28%));
  --flair-color: var(--text-normal, #E5E1E5);
  --focus: var(--surface4, rgb(
    48.88,
    46.56,
    57
    ));
  --font-interface-theme: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif;
  --font-mermaid: var(--font-text, "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas;
  --font-text-theme: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --footnote-divider-color: var(--metadata-divider-color, hsl(258, 8.8%, 15%));
  --footnote-id-color: var(--text-muted, hsl(258, 27.28%, 80%));
  --graph-node: var(--text-muted, hsl(258, 27.28%, 80%));
  --graph-node-focused: var(--text-accent, hsl(258, 35.2%, 90%));
  --graph-text: var(--text-normal, #E5E1E5);
  --gray: var(--text-muted, var(--on-surface-variant, hsl(258, 27.28%, 80%)));
  --h1: 2.25em;
  --h2: 20pt;
  --h3: 16pt;
  --h4: 15pt;
  --h5: 14pt;
  --h6: 12pt;
  --headerFont: var(--font-text-theme, "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --highlight: var(--text-highlight-bg, var(--surface-variant, hsl(258, 7.04%, 28%)));
  --hover: var(--surface2, rgb(
    41.92,
    40.04,
    48
    ));
  --hr-color: var(--surface-variant, hsl(258, 7.04%, 28%));
  --icon-color: var(--text-muted, hsl(258, 27.28%, 80%));
  --icon-color-active: var(--text-accent, hsl(258, 35.2%, 90%));
  --icon-color-focused: var(--text-normal, #E5E1E5);
  --icon-color-hover: var(--text-muted, hsl(258, 27.28%, 80%));
  --input-height: 32px;
  --input-shadow-hover: inset 0 1000px 0 0 #FFFFFF20;
  --interactive-accent: var(--primary, hsl(258, 66%, 80%));
  --interactive-accent-hover: var(--primary, hsl(258, 66%, 80%));
  --interactive-accent-rgb: var(--primary, hsl(258, 66%, 80%));
  --interactive-hover: var(--surface-variant, hsl(258, 7.04%, 28%));
  --interactive-normal: var(--surface-variant, hsl(258, 7.04%, 28%));
  --interactive-success: #197300;
  --inverse-on-surface: var(--inverse-on-surface, #1C1B1E);
  --inverse-surface: var(--inverse-surface, #E5E1E5);
  --light: 350;
  --lightgray: var(--background-secondary, var(--surface-variant, hsl(258, 7.04%, 28%)));
  --link-color: var(--text-accent, hsl(258, 35.2%, 90%));
  --link-color-hover: var(--text-accent-hover, hsl(258, 61.6%, 80%));
  --link-external-color: var(--text-accent, hsl(258, 35.2%, 90%));
  --link-external-color-hover: var(--text-accent-hover, hsl(258, 61.6%, 80%));
  --link-unresolved-color: var(--text-accent, hsl(258, 35.2%, 90%));
  --list-marker-color-collapsed: var(--text-accent, hsl(258, 35.2%, 90%));
  --list-marker-color-hover: var(--text-muted, hsl(258, 27.28%, 80%));
  --medium: 500;
  --medium-radius: 16px;
  --menu-background: var(--background-secondary, hsl(258, 7.04%, 28%));
  --metadata-border-color: var(--background-modifier-border, hsl(258, 8.8%, 15%));
  --metadata-divider-color: var(--background-modifier-border, hsl(258, 8.8%, 15%));
  --metadata-input-font: var(--font-interface, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #E5E1E5);
  --metadata-label-font: var(--font-interface, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(258, 27.28%, 80%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(258, 27.28%, 80%));
  --modal-background: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --nav-heading-color: var(--text-normal, #E5E1E5);
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(258, 27.28%, 80%));
  --nav-heading-color-hover: var(--text-normal, #E5E1E5);
  --nav-item-color: var(--text-muted, hsl(258, 27.28%, 80%));
  --nav-item-color-active: var(--text-normal, #E5E1E5);
  --nav-item-color-highlighted: var(--text-accent, hsl(258, 35.2%, 90%));
  --nav-item-color-hover: var(--text-normal, #E5E1E5);
  --nav-item-color-selected: var(--text-normal, #E5E1E5);
  --nav-tag-color-active: var(--text-muted, hsl(258, 27.28%, 80%));
  --nav-tag-color-hover: var(--text-muted, hsl(258, 27.28%, 80%));
  --on-accent: var(--background, hsl(258, 5.28%, 11.5%));
  --on-background: var(--on-background, #E5E1E5);
  --on-error: var(--onError, #680003);
  --on-error-container: var(--onErrorContainer, #FFDAD4);
  --on-primary: var(--text-on-accent, hsl(258, 5.28%, 11.5%));
  --on-primary-container: var(--color-accent-2, hsl(258, 70.4%, 90%));
  --on-secondary: var(--text-on-accent, hsl(258, 5.28%, 11.5%));
  --on-secondary-container: var(--color-accent-1, hsl(258, 61.6%, 80%));
  --on-surface-variant: hsl(var(--accent-h), calc(var(--accent-s)*0.31), 80%);
  --on-tertiary: var(--onTertiary, #482535);
  --on-tertiary-container: hsl(var(--accent-h), calc(var(--accent-s)*0.5), 78%);
  --onError: #680003;
  --onErrorContainer: #FFDAD4;
  --onTertiary: #482535;
  --outline: hsl(var(--accent-h), calc(var(--accent-s)*0.5), 25%);
  --pane-separation: 6px;
  --pdf-background: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --pdf-page-background: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --pdf-sidebar-background: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --pill-border-color: var(--background-modifier-border, hsl(258, 8.8%, 15%));
  --pill-color: var(--text-muted, hsl(258, 27.28%, 80%));
  --pill-color-hover: var(--text-normal, #E5E1E5);
  --pill-color-remove-hover: var(--text-accent, hsl(258, 35.2%, 90%));
  --primary: hsl(var(--accent-h), calc(var(--accent-s)*0.75), 80%);
  --primary-b: 255;
  --primary-container: var(--color-accent-1, hsl(258, 61.6%, 80%));
  --primary-g: 190;
  --primary-inverse: var(--primaryInverse, #5F4BBD);
  --primary-r: 202;
  --primaryInverse: #5F4BBD;
  --prompt-background: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(258, 7.04%, 28%) 65%, transparent) linear-gradient(hsl(258, 7.04%, 28%), color-mix(in srgb, hsl(258, 7.04%, 28%) 65%, transparent)));
  --regular: 400;
  --ribbon-background: var(--background-secondary, hsl(258, 7.04%, 28%));
  --ribbon-background-collapsed: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --search-clear-button-color: var(--text-muted, hsl(258, 27.28%, 80%));
  --search-icon-color: var(--text-muted, hsl(258, 27.28%, 80%));
  --search-result-background: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --secondary: hsl(var(--accent-h), calc(var(--accent-s)*0.4), 70%);
  --secondary-container: var(--text-on-accent, hsl(258, 5.28%, 11.5%));
  --setting-group-heading-color: var(--text-normal, #E5E1E5);
  --setting-items-background: var(--background-primary-alt, rgb(
    36.7,
    35.15,
    41.25
    ));
  --setting-items-border-color: var(--background-modifier-border, hsl(258, 8.8%, 15%));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(258, 27.28%, 80%));
  --shiki-code-background: var(--code-background, rgb(
    36.7,
    35.15,
    41.25
    ));
  --shiki-code-normal: var(--text-muted, hsl(258, 27.28%, 80%));
  --shiki-code-punctuation: var(--text-muted, hsl(258, 27.28%, 80%));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(258, 8.8%, 15%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(258, 27.28%, 80%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(258, 27.28%, 80%));
  --slider-track-background: var(--surface-variant, hsl(258, 7.04%, 28%));
  --small-radius: 8px;
  --smaller: 0.875em;
  --smallest: 0.75em;
  --status-bar-background: var(--background-secondary, hsl(258, 7.04%, 28%));
  --status-bar-border-color: var(--divider-color, transparent);
  --status-bar-text-color: var(--text-muted, hsl(258, 27.28%, 80%));
  --suggestion-background: var(--background-primary, hsl(258, 5.28%, 11.5%));
  --surface: hsl(var(--accent-h), calc(var(--accent-s)*0.1), 15%);
  --surface-b: 30;
  --surface-g: 27;
  --surface-mid: hsl(var(--accent-h), calc(var(--accent-s)*0.09), 19%);
  --surface-r: 28;
  --surface-variant: hsl(var(--accent-h), calc(var(--accent-s)*0.08), 28%);
  --surface1: rgb(
    calc(var(--primary-r)*var(--elevation1) + var(--surface-r)*(1 - var(--elevation1))),
    calc(var(--primary-g)*var(--elevation1) + var(--surface-g)*(1 - var(--elevation1))),
    calc(var(--primary-b)*var(--elevation1) + var(--surface-b)*(1 - var(--elevation1)))
    );
  --surface2: rgb(
    calc(var(--primary-r)*var(--elevation2) + var(--surface-r)*(1 - var(--elevation2))),
    calc(var(--primary-g)*var(--elevation2) + var(--surface-g)*(1 - var(--elevation2))),
    calc(var(--primary-b)*var(--elevation2) + var(--surface-b)*(1 - var(--elevation2)))
    );
  --surface3: rgb(
    calc(var(--primary-r)*var(--elevation3) + var(--surface-r)*(1 - var(--elevation3))),
    calc(var(--primary-g)*var(--elevation3) + var(--surface-g)*(1 - var(--elevation3))),
    calc(var(--primary-b)*var(--elevation3) + var(--surface-b)*(1 - var(--elevation3)))
    );
  --surface4: rgb(
    calc(var(--primary-r)*var(--elevation4) + var(--surface-r)*(1 - var(--elevation4))),
    calc(var(--primary-g)*var(--elevation4) + var(--surface-g)*(1 - var(--elevation4))),
    calc(var(--primary-b)*var(--elevation4) + var(--surface-b)*(1 - var(--elevation4)))
    );
  --surface5: rgb(
    calc(var(--primary-r)*var(--elevation5) + var(--surface-r)*(1 - var(--elevation5))),
    calc(var(--primary-g)*var(--elevation5) + var(--surface-g)*(1 - var(--elevation5))),
    calc(var(--primary-b)*var(--elevation5) + var(--surface-b)*(1 - var(--elevation5)))
    );
  --tab-background-active: var(--surface, hsl(258, 8.8%, 15%));
  --tab-container-background: var(--background-secondary, hsl(258, 7.04%, 28%));
  --tab-outline-color: var(--divider-color, transparent);
  --tab-switcher-background: var(--background-secondary, hsl(258, 7.04%, 28%));
  --tab-text-color-active: var(--text-muted, hsl(258, 27.28%, 80%));
  --tab-text-color-focused: var(--text-muted, hsl(258, 27.28%, 80%));
  --tab-text-color-focused-active: var(--text-muted, hsl(258, 27.28%, 80%));
  --tab-text-color-focused-active-current: var(--text-normal, #E5E1E5);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(258, 35.2%, 90%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(258, 8.8%, 15%));
  --table-border-color: var(--background-modifier-border, hsl(258, 8.8%, 15%));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(258, 66%, 80%));
  --table-drag-handle-color-active: var(--text-on-accent, hsl(258, 5.28%, 11.5%));
  --table-header-border-color: var(--table-border-color, hsl(258, 8.8%, 15%));
  --table-header-color: var(--text-normal, #E5E1E5);
  --table-selection-border-color: var(--interactive-accent, hsl(258, 66%, 80%));
  --tag-color: var(--text-accent, hsl(258, 35.2%, 90%));
  --tag-color-hover: var(--text-accent, hsl(258, 35.2%, 90%));
  --tertiary: #EDB8CD;
  --tertiary-container: hsl(var(--accent-h), calc(var(--accent-s)*0.5), 18%);
  --text-accent: hsl(var(--accent-h), calc(var(--accent-s)*0.4), 90%);
  --text-accent-hover: var(--primary-container, hsl(258, 61.6%, 80%));
  --text-error: var(--color-red, #cf6679);
  --text-error-hover: #990000;
  --text-highlight-bg: var(--surface-variant, hsl(258, 7.04%, 28%));
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: var(--on-surface-variant, hsl(258, 27.28%, 80%));
  --text-muted-rgb: 153, 153, 153;
  --text-normal: var(--on-background, #E5E1E5);
  --text-on-accent: var(--background, hsl(258, 5.28%, 11.5%));
  --text-selection: hsl(var(--accent-h), calc(var(--accent-s)*0.3), 20%);
  --textHighlight: var(--text-highlight-bg, var(--surface-variant, hsl(258, 7.04%, 28%)));
  --titleFont: var(--font-text-theme, "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --titlebar-background: var(--background-secondary, hsl(258, 7.04%, 28%));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(
    47.14,
    44.93,
    54.75
    ));
  --titlebar-border-color: var(--background-modifier-border, hsl(258, 8.8%, 15%));
  --titlebar-text-color: var(--text-muted, hsl(258, 27.28%, 80%));
  --titlebar-text-color-focused: var(--text-normal, #E5E1E5);
  --tooltip-color: var(--surface-variant, hsl(258, 7.04%, 28%));
  --vault-profile-color: var(--text-normal, #E5E1E5);
  --vault-profile-color-hover: var(--vault-profile-color, #E5E1E5);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(258, 7.04%, 28%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(258, 7.04%, 28%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body html {
  --big-radius: 24px;
  --bold: 650;
  --elevation1: 0.05;
  --elevation2: 0.08;
  --elevation3: 0.11;
  --elevation4: 0.12;
  --elevation5: 0.14;
  --h1: 2.25em;
  --h2: 2em;
  --h3: 1.75em;
  --h4: 1.5em;
  --h5: 1.375em;
  --h6: 1em;
  --light: 350;
  --medium: 500;
  --medium-radius: 16px;
  --regular: 400;
  --small-radius: 8px;
  --smaller: 0.875em;
  --smallest: 0.75em;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(229, 225, 229));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--bold, 650);
  outline: rgb(229, 225, 229) none 0px;
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(229, 225, 229));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(229, 225, 229));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(229, 225, 229));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--bold, 650);
  outline: rgb(229, 225, 229) none 0px;
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--surface-variant, rgb(69, 66, 76));
  color: var(--on-surface-variant, rgb(198, 190, 218));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 190, 218) none 0px;
  text-decoration-color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body del {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body footer {
  opacity: 0.1;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(229, 225, 229));
  font-size: var(--h5, 16px);
  font-weight: var(--regular, 400);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(191, 170, 238));
  border-color: rgb(191, 170, 238);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(198, 190, 218));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 190, 218) none 0px;
  text-decoration-color: rgb(198, 190, 218);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(226, 221, 238));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 221, 238) none 0px;
  text-decoration-color: rgb(226, 221, 238);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(226, 221, 238));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--medium, 500);
  outline: rgb(226, 221, 238) none 0px;
  text-decoration-color: rgb(226, 221, 238);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(226, 221, 238));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--medium, 500);
  outline: rgb(226, 221, 238) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(226, 221, 238));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body dt {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: var(--surface-variant, rgb(69, 66, 76));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body table {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 132.125px;
}

html[saved-theme="dark"] body td {
  background-color: rgb(37, 35, 42);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 3px;
  color: var(--on-surface, rgb(229, 225, 229));
  padding-bottom: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body th {
  background-color: rgb(69, 66, 76);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-width: var(--table-header-border-width, 3px);
  color: var(--on-surface-variant, rgb(198, 190, 218));
}

html[saved-theme="dark"] body tr {
  border-top-color: rgb(47, 45, 55);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--surface-variant, rgb(69, 66, 76));
  border-bottom-color: rgb(37, 35, 42);
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  color: var(--on-surface-variant, rgb(198, 190, 218));
  font-family: var(--font-monospace, "??", "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--surface-variant, rgb(69, 66, 76));
  border-bottom-color: rgb(37, 35, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(229, 225, 229);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, rgb(
    36.7,
    35.15,
    41.25
    ));
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(229, 225, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(229, 225, 229);
  border-radius: 8px;
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(37, 35, 41));
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(229, 225, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(229, 225, 229);
  border-left-width: 0px;
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 28, 31);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 28, 31);
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
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(229, 225, 229);
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
  border-bottom-color: rgb(37, 35, 42);
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  color: var(--text-normal, rgb(229, 225, 229));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(29, 28, 31));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(69, 66, 76);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, hsl(258, 35.2%, 90%));
  --pill-color-hover: var(--tag-color-hover, hsl(258, 35.2%, 90%));
  --pill-color-remove: var(--tag-color, hsl(258, 35.2%, 90%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(258, 35.2%, 90%));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(226, 221, 238);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(229, 225, 229));
  font-family: var(--h1-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(229, 225, 229));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(229, 225, 229));
  font-family: var(--h2-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(229, 225, 229));
  font-family: var(--inline-title-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(229, 225, 229));
  font-family: var(--h3-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(229, 225, 229));
  font-family: var(--h4-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  color: var(--color-accent-2, rgb(222, 212, 247));
  font-family: var(--h5-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--color-accent-2, rgb(222, 212, 247));
  font-family: var(--h6-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(198, 190, 218));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(198, 190, 218));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(229, 225, 229);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: var(--icon-color, rgb(198, 190, 218));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: var(--status-bar-text-color, rgb(198, 190, 218));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(198, 190, 218);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(229, 225, 229);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(198, 190, 218));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(198, 190, 218));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: var(--icon-color, rgb(198, 190, 218));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(198, 190, 218);
  stroke: rgb(198, 190, 218);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(229, 225, 229);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.376) 0px 3px 5px 0px;
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(229, 225, 229));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(69, 66, 76));
  border-color: rgb(229, 225, 229);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(69, 66, 76);
  border-color: rgba(0, 0, 0, 0);
  color: var(--on-surface-variant, rgb(198, 190, 218));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(37, 35, 42);
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  color: var(--text-muted, rgb(198, 190, 218));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: rgb(198, 190, 218);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(37, 35, 42);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-color: var(--tag-color, hsl(258, 35.2%, 90%));
  --pill-color-hover: var(--tag-color-hover, hsl(258, 35.2%, 90%));
  --pill-color-remove: var(--tag-color, hsl(258, 35.2%, 90%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(258, 35.2%, 90%));
  color: var(--pill-color, rgb(226, 221, 238));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(0, 0, 0));
  color: var(--text-normal, rgb(229, 225, 229));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(229, 225, 229);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(229, 225, 229));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: var(--text-normal, rgb(198, 190, 218));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(37, 35, 41));
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: var(--code-normal, rgb(229, 225, 229));
  font-family: var(--font-monospace, "??", "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body sub {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body summary {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body sup {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tertiary-container, rgb(38, 26, 66));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--on-tertiary-container, rgb(189, 174, 224));
}`,
  },
  light: {
    base: `:root:root {
  --background: #fff;
  --background-modifier-border: var(--color-base-30, #fff);
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: var(--error, #BA1B1B);
  --background-modifier-error-hover: var(--color-red, #b00020);
  --background-modifier-error-rgb: var(--color-red-rgb, 230, 135, 135);
  --background-modifier-form-field: var(--color-base-00, #fff);
  --background-modifier-form-field-highlighted: #fff;
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #fff);
  --background-modifier-success: var(--color-green, #a4e7c3);
  --background-primary: var(--background, #fff);
  --background-primary-alt: var(--surface1, rgb(
    247,
    242.2,
    251.7
    ));
  --background-secondary: var(--surface-variant, hsl(258, 66%, 93%));
  --background-secondary-alt: var(--surface3, rgb(
    237.4,
    231.64,
    247.74
    ));
  --bases-cards-background: var(--background-primary, #fff);
  --bases-cards-cover-background: var(--background-primary-alt, rgb(
    247,
    242.2,
    251.7
    ));
  --bases-embed-border-color: var(--background-modifier-border, #fff);
  --bases-group-heading-property-color: var(--text-muted, hsl(258, 26.4%, 20%));
  --bases-table-border-color: var(--table-border-color, #fff);
  --bases-table-cell-background-active: var(--background-primary, #fff);
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(
    247,
    242.2,
    251.7
    ));
  --bases-table-group-background: var(--background-primary-alt, rgb(
    247,
    242.2,
    251.7
    ));
  --bases-table-header-background: var(--background-primary, #fff);
  --bases-table-header-color: var(--text-muted, hsl(258, 26.4%, 20%));
  --bases-table-summary-background: var(--background-primary, #fff);
  --big-radius: 24px;
  --blockquote-border-color: var(--interactive-accent, hsl(258, 75.68%, 73%));
  --bodyFont: var(--font-text-theme, "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --bold: 650;
  --canvas-background: var(--background-primary, #fff);
  --canvas-card-label-color: var(--text-faint, hsl(258, 26.4%, 20%));
  --caret-color: var(--text-normal, #111);
  --checkbox-border-color: var(--text-faint, hsl(258, 26.4%, 20%));
  --checkbox-border-color-hover: var(--text-muted, hsl(258, 26.4%, 20%));
  --checkbox-color: var(--interactive-accent, hsl(258, 75.68%, 73%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(258, 75.68%, 73%));
  --checkbox-marker-color: var(--background-primary, #fff);
  --checklist-done-color: var(--text-muted, hsl(258, 26.4%, 20%));
  --code-background: var(--background-primary-alt, rgb(
    247,
    242.2,
    251.7
    ));
  --code-border-color: var(--background-modifier-border, #fff);
  --code-comment: var(--text-faint, hsl(258, 26.4%, 20%));
  --code-normal: var(--text-normal, #111);
  --code-punctuation: var(--text-muted, hsl(258, 26.4%, 20%));
  --collapse-icon-color: var(--text-faint, hsl(258, 26.4%, 20%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(258, 52.8%, 50%));
  --color-accent: hsl(var(--accent-h), calc(var(--accent-s)*0.8), 75%);
  --color-accent-1: hsl(var(--accent-h), calc(var(--accent-s)*0.7), 80%);
  --color-accent-2: hsl(var(--accent-h), calc(var(--accent-s)*0.6), 85%);
  --dark: var(--text-normal, var(--on-background, #111));
  --darkgray: var(--text-normal, var(--on-background, #111));
  --divider-color: var(--background-modifier-border, transparent);
  --divider-color-hover: var(--interactive-accent, hsl(258, 75.68%, 73%));
  --dropdown-background: var(--interactive-normal, hsl(258, 66%, 93%));
  --dropdown-background-hover: var(--interactive-hover, hsl(258, 15%, 85%));
  --elevation1: 0.05;
  --elevation2: 0.08;
  --elevation3: 0.11;
  --elevation4: 0.12;
  --elevation5: 0.14;
  --error: #BA1B1B;
  --errorContainer: #FFDAD4;
  --file-header-background: var(--background-primary, #fff);
  --file-header-background-focused: var(--background-primary, #fff);
  --file-header-font: var(--font-interface, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, hsl(258, 66%, 93%));
  --flair-color: var(--text-normal, #111);
  --focus: var(--surface4, rgb(
    235.8,
    229.88,
    247.08
    ));
  --font-interface-theme: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif;
  --font-mermaid: var(--font-text, "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas;
  --font-text-theme: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --footnote-divider-color: var(--metadata-divider-color, #fff);
  --footnote-id-color: var(--text-muted, hsl(258, 26.4%, 20%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(258, 26.4%, 20%));
  --graph-node: var(--text-muted, hsl(258, 26.4%, 20%));
  --graph-node-focused: var(--text-accent, hsl(258, 52.8%, 50%));
  --graph-node-unresolved: var(--text-faint, hsl(258, 26.4%, 20%));
  --graph-text: var(--text-normal, #111);
  --gray: var(--text-muted, var(--on-surface-variant, hsl(258, 26.4%, 20%)));
  --h1: 2.25em;
  --h2: 20pt;
  --h3: 16pt;
  --h4: 15pt;
  --h5: 14pt;
  --h6: 12pt;
  --headerFont: var(--font-text-theme, "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --heading-formatting: var(--text-faint, hsl(258, 26.4%, 20%));
  --highlight: var(--text-highlight-bg, var(--surface-variant, hsl(258, 66%, 93%)));
  --hover: var(--surface2, rgb(
    242.2,
    236.92,
    249.72
    ));
  --hr-color: var(--surface-variant, hsl(258, 66%, 93%));
  --icon-color: var(--text-muted, hsl(258, 26.4%, 20%));
  --icon-color-active: var(--text-accent, hsl(258, 52.8%, 50%));
  --icon-color-focused: var(--text-normal, #111);
  --icon-color-hover: var(--text-muted, hsl(258, 26.4%, 20%));
  --input-date-separator: var(--text-faint, hsl(258, 26.4%, 20%));
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, hsl(258, 26.4%, 20%));
  --input-shadow-hover: inset 0 1000px 0 0 #FFFFFF20;
  --interactive-accent: var(--primary, hsl(258, 75.68%, 73%));
  --interactive-accent-hover: var(--primary, hsl(258, 75.68%, 73%));
  --interactive-accent-rgb: var(--primary, hsl(258, 75.68%, 73%));
  --interactive-hover: hsl(var(--accent-h), 15%, 85%);
  --interactive-normal: var(--surface-variant, hsl(258, 66%, 93%));
  --interactive-success: #197300;
  --inverse-on-surface: #EEE;
  --inverse-surface: #111;
  --light: 350;
  --lightgray: var(--background-secondary, var(--surface-variant, hsl(258, 66%, 93%)));
  --link-color: var(--text-accent, hsl(258, 52.8%, 50%));
  --link-color-hover: var(--text-accent-hover, hsl(258, 61.6%, 80%));
  --link-external-color: var(--text-accent, hsl(258, 52.8%, 50%));
  --link-external-color-hover: var(--text-accent-hover, hsl(258, 61.6%, 80%));
  --link-unresolved-color: var(--text-accent, hsl(258, 52.8%, 50%));
  --list-marker-color: var(--text-faint, hsl(258, 26.4%, 20%));
  --list-marker-color-collapsed: var(--text-accent, hsl(258, 52.8%, 50%));
  --list-marker-color-hover: var(--text-muted, hsl(258, 26.4%, 20%));
  --medium: 500;
  --medium-radius: 16px;
  --menu-background: var(--background-secondary, hsl(258, 66%, 93%));
  --metadata-border-color: var(--background-modifier-border, #fff);
  --metadata-divider-color: var(--background-modifier-border, #fff);
  --metadata-input-font: var(--font-interface, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #111);
  --metadata-label-font: var(--font-interface, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(258, 26.4%, 20%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(258, 26.4%, 20%));
  --modal-background: var(--background-primary, #fff);
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(258, 26.4%, 20%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(258, 26.4%, 20%));
  --nav-heading-color: var(--text-normal, #111);
  --nav-heading-color-collapsed: var(--text-faint, hsl(258, 26.4%, 20%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(258, 26.4%, 20%));
  --nav-heading-color-hover: var(--text-normal, #111);
  --nav-item-color: var(--text-muted, hsl(258, 26.4%, 20%));
  --nav-item-color-active: var(--text-normal, #111);
  --nav-item-color-highlighted: var(--text-accent, hsl(258, 52.8%, 50%));
  --nav-item-color-hover: var(--text-normal, #111);
  --nav-item-color-selected: var(--text-normal, #111);
  --nav-tag-color: var(--text-faint, hsl(258, 26.4%, 20%));
  --nav-tag-color-active: var(--text-muted, hsl(258, 26.4%, 20%));
  --nav-tag-color-hover: var(--text-muted, hsl(258, 26.4%, 20%));
  --on-accent: var(--text-muted, hsl(258, 26.4%, 20%));
  --on-background: #111;
  --on-primary: #FFFFFF;
  --on-primary-container: var(--color-accent, hsl(258, 70.4%, 75%));
  --on-secondary: var(--text-on-accent, hsl(258, 26.4%, 20%));
  --on-secondary-container: var(--color-accent-1, hsl(258, 61.6%, 80%));
  --on-surface: #1C1B1E;
  --on-surface-variant: hsl(var(--accent-h), calc(var(--accent-s)*0.3), 20%);
  --on-tertiary-container: hsl(var(--accent-h), calc(var(--accent-s)*0.2), 12%);
  --onError: #FFFFFF;
  --onErrorContainer: #410001;
  --onTertiary: #FFFFFF;
  --outline: hsl(var(--accent-h), calc(var(--accent-s)*0.5), 85%);
  --pane-separation: 6px;
  --pdf-background: var(--background-primary, #fff);
  --pdf-page-background: var(--background-primary, #fff);
  --pdf-sidebar-background: var(--background-primary, #fff);
  --pill-border-color: var(--background-modifier-border, #fff);
  --pill-color: var(--text-muted, hsl(258, 26.4%, 20%));
  --pill-color-hover: var(--text-normal, #111);
  --pill-color-remove: var(--text-faint, hsl(258, 26.4%, 20%));
  --pill-color-remove-hover: var(--text-accent, hsl(258, 52.8%, 50%));
  --primary: hsl(var(--accent-h), calc(var(--accent-s)*0.86), 73%);
  --primary-b: 189;
  --primary-container: var(--color-accent-1, hsl(258, 61.6%, 80%));
  --primary-g: 75;
  --primary-r: 95;
  --primaryInverse: #CABEFF;
  --prompt-background: var(--background-primary, #fff);
  --raised-background: var(--blur-background, color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)));
  --regular: 400;
  --ribbon-background: var(--background-secondary, hsl(258, 66%, 93%));
  --ribbon-background-collapsed: var(--background-primary, #fff);
  --search-clear-button-color: var(--text-muted, hsl(258, 26.4%, 20%));
  --search-icon-color: var(--text-muted, hsl(258, 26.4%, 20%));
  --search-result-background: var(--background-primary, #fff);
  --secondary: hsl(var(--accent-h), calc(var(--accent-s)*0.6), 70%);
  --secondary-container: var(--text-on-accent, hsl(258, 26.4%, 20%));
  --setting-group-heading-color: var(--text-normal, #111);
  --setting-items-background: var(--background-primary-alt, rgb(
    247,
    242.2,
    251.7
    ));
  --setting-items-border-color: var(--background-modifier-border, #fff);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(258, 26.4%, 20%));
  --shiki-code-background: var(--code-background, rgb(
    247,
    242.2,
    251.7
    ));
  --shiki-code-comment: var(--text-faint, hsl(258, 26.4%, 20%));
  --shiki-code-normal: var(--text-muted, hsl(258, 26.4%, 20%));
  --shiki-code-punctuation: var(--text-muted, hsl(258, 26.4%, 20%));
  --shiki-gutter-border-color: var(--background-modifier-border, #fff);
  --shiki-gutter-text-color: var(--text-faint, hsl(258, 26.4%, 20%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(258, 26.4%, 20%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(258, 26.4%, 20%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(258, 26.4%, 20%));
  --slider-track-background: var(--surface-variant, hsl(258, 66%, 93%));
  --small-radius: 8px;
  --smaller: 0.875em;
  --smallest: 0.75em;
  --status-bar-background: var(--background-secondary, hsl(258, 66%, 93%));
  --status-bar-border-color: var(--divider-color, transparent);
  --status-bar-text-color: var(--text-muted, hsl(258, 26.4%, 20%));
  --suggestion-background: var(--background-primary, #fff);
  --surface: #FFF;
  --surface-b: 255;
  --surface-g: 251;
  --surface-mid: hsl(var(--accent-h), calc(var(--accent-s)*0.35), 93%);
  --surface-r: 255;
  --surface-variant: hsl(var(--accent-h), calc(var(--accent-s)*0.75), 93%);
  --surface1: rgb(
    calc(var(--primary-r)*var(--elevation1) + var(--surface-r)*(1 - var(--elevation1))),
    calc(var(--primary-g)*var(--elevation1) + var(--surface-g)*(1 - var(--elevation1))),
    calc(var(--primary-b)*var(--elevation1) + var(--surface-b)*(1 - var(--elevation1)))
    );
  --surface2: rgb(
    calc(var(--primary-r)*var(--elevation2) + var(--surface-r)*(1 - var(--elevation2))),
    calc(var(--primary-g)*var(--elevation2) + var(--surface-g)*(1 - var(--elevation2))),
    calc(var(--primary-b)*var(--elevation2) + var(--surface-b)*(1 - var(--elevation2)))
    );
  --surface3: rgb(
    calc(var(--primary-r)*var(--elevation3) + var(--surface-r)*(1 - var(--elevation3))),
    calc(var(--primary-g)*var(--elevation3) + var(--surface-g)*(1 - var(--elevation3))),
    calc(var(--primary-b)*var(--elevation3) + var(--surface-b)*(1 - var(--elevation3)))
    );
  --surface4: rgb(
    calc(var(--primary-r)*var(--elevation4) + var(--surface-r)*(1 - var(--elevation4))),
    calc(var(--primary-g)*var(--elevation4) + var(--surface-g)*(1 - var(--elevation4))),
    calc(var(--primary-b)*var(--elevation4) + var(--surface-b)*(1 - var(--elevation4)))
    );
  --surface5: rgb(
    calc(var(--primary-r)*var(--elevation5) + var(--surface-r)*(1 - var(--elevation5))),
    calc(var(--primary-g)*var(--elevation5) + var(--surface-g)*(1 - var(--elevation5))),
    calc(var(--primary-b)*var(--elevation5) + var(--surface-b)*(1 - var(--elevation5)))
    );
  --tab-background-active: var(--background-primary, #fff);
  --tab-container-background: var(--background-secondary, hsl(258, 66%, 93%));
  --tab-outline-color: var(--divider-color, transparent);
  --tab-switcher-background: var(--background-secondary, hsl(258, 66%, 93%));
  --tab-text-color: var(--text-faint, hsl(258, 26.4%, 20%));
  --tab-text-color-active: var(--text-muted, hsl(258, 26.4%, 20%));
  --tab-text-color-focused: var(--text-muted, hsl(258, 26.4%, 20%));
  --tab-text-color-focused-active: var(--text-muted, hsl(258, 26.4%, 20%));
  --tab-text-color-focused-active-current: var(--text-normal, #111);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(258, 52.8%, 50%));
  --table-add-button-border-color: var(--background-modifier-border, #fff);
  --table-border-color: var(--background-modifier-border, #fff);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(258, 75.68%, 73%));
  --table-drag-handle-color: var(--text-faint, hsl(258, 26.4%, 20%));
  --table-drag-handle-color-active: var(--text-on-accent, hsl(258, 26.4%, 20%));
  --table-header-border-color: var(--table-border-color, #fff);
  --table-header-color: var(--text-normal, #111);
  --table-selection-border-color: var(--interactive-accent, hsl(258, 75.68%, 73%));
  --tag-color: var(--text-accent, hsl(258, 52.8%, 50%));
  --tag-color-hover: var(--text-accent, hsl(258, 52.8%, 50%));
  --tertiary: #7C5264;
  --tertiary-container: hsl(var(--accent-h), calc(var(--accent-s)*0.6), 66%);
  --text-accent: hsl(var(--accent-h), calc(var(--accent-s)*0.6), 50%);
  --text-accent-hover: var(--primary-container, hsl(258, 61.6%, 80%));
  --text-error: var(--color-red, #800000);
  --text-error-hover: #990000;
  --text-faint: var(--on-surface-variant, hsl(258, 26.4%, 20%));
  --text-highlight-bg: var(--surface-variant, hsl(258, 66%, 93%));
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: var(--on-surface-variant, hsl(258, 26.4%, 20%));
  --text-muted-rgb: 136, 136, 136;
  --text-normal: var(--on-background, #111);
  --text-on-accent: var(--text-muted, hsl(258, 26.4%, 20%));
  --text-selection: hsl(var(--accent-h), calc(var(--accent-s)*0.5), 80%);
  --textHighlight: var(--text-highlight-bg, var(--surface-variant, hsl(258, 66%, 93%)));
  --titleFont: var(--font-text-theme, "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --titlebar-background: var(--background-secondary, hsl(258, 66%, 93%));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(
    237.4,
    231.64,
    247.74
    ));
  --titlebar-border-color: var(--background-modifier-border, #fff);
  --titlebar-text-color: var(--text-muted, hsl(258, 26.4%, 20%));
  --titlebar-text-color-focused: var(--text-normal, #111);
  --tooltip-color: white;
  --vault-profile-color: var(--text-normal, #111);
  --vault-profile-color-hover: var(--vault-profile-color, #111);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(258, 66%, 93%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(258, 66%, 93%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body html {
  --big-radius: 24px;
  --bold: 650;
  --elevation1: 0.05;
  --elevation2: 0.08;
  --elevation3: 0.11;
  --elevation4: 0.12;
  --elevation5: 0.14;
  --h1: 2.25em;
  --h2: 2em;
  --h3: 1.75em;
  --h4: 1.5em;
  --h5: 1.375em;
  --h6: 1em;
  --light: 350;
  --medium: 500;
  --medium-radius: 16px;
  --regular: 400;
  --small-radius: 8px;
  --smaller: 0.875em;
  --smallest: 0.75em;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(17, 17, 17));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--bold, 650);
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(17, 17, 17));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(17, 17, 17));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(17, 17, 17));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--bold, 650);
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--surface-variant, rgb(232, 225, 249));
  color: var(--on-surface-variant, rgb(46, 38, 64));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 38, 64) none 0px;
  text-decoration-color: rgb(46, 38, 64);
}

html[saved-theme="light"] body del {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body footer {
  opacity: 0.1;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(17, 17, 17));
  font-size: var(--h5, 16px);
  font-weight: var(--regular, 400);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(46, 38, 64);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(165, 134, 238));
  border-color: rgb(165, 134, 238);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(46, 38, 64));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 38, 64) none 0px;
  text-decoration-color: rgb(46, 38, 64);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(101, 60, 195));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(101, 60, 195) none 0px;
  text-decoration-color: rgb(101, 60, 195);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(101, 60, 195));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--medium, 500);
  outline: rgb(101, 60, 195) none 0px;
  text-decoration-color: rgb(101, 60, 195);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(101, 60, 195));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--medium, 500);
  outline: rgb(101, 60, 195) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(101, 60, 195));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body dt {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ol > li {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ul > li {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(46, 38, 64));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--surface-variant, rgb(232, 225, 249));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body table {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 132.125px;
}

html[saved-theme="light"] body td {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 3px;
  color: var(--on-surface, rgb(28, 27, 30));
  padding-bottom: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body th {
  background-color: rgb(232, 225, 249);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: var(--radius-l, 12px);
  border-top-width: var(--table-header-border-width, 3px);
  color: var(--on-surface-variant, rgb(46, 38, 64));
}

html[saved-theme="light"] body tr {
  border-top-color: rgb(237, 232, 248);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--surface-variant, rgb(232, 225, 249));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--on-surface-variant, rgb(46, 38, 64));
  font-family: var(--font-monospace, "??", "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--surface-variant, rgb(232, 225, 249));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body figcaption {
  color: rgb(17, 17, 17);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, rgb(
    247,
    242.2,
    251.7
    ));
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(17, 17, 17);
  border-radius: 8px;
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(247, 242, 252));
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(17, 17, 17);
  border-left-width: 0px;
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(17, 17, 17);
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
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--text-normal, rgb(17, 17, 17));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(232, 225, 249);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, hsl(258, 52.8%, 50%));
  --pill-color-hover: var(--tag-color-hover, hsl(258, 52.8%, 50%));
  --pill-color-remove: var(--tag-color, hsl(258, 52.8%, 50%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(258, 52.8%, 50%));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(101, 60, 195);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(17, 17, 17));
  font-family: var(--h1-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(17, 17, 17));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(17, 17, 17));
  font-family: var(--h2-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(17, 17, 17));
  font-family: var(--inline-title-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(17, 17, 17));
  font-family: var(--h3-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(17, 17, 17));
  font-family: var(--h4-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  color: var(--color-accent-2, rgb(209, 197, 237));
  font-family: var(--h5-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--color-accent-2, rgb(209, 197, 237));
  font-family: var(--h6-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(46, 38, 64));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(46, 38, 64));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(17, 17, 17);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: var(--icon-color, rgb(46, 38, 64));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: var(--status-bar-text-color, rgb(46, 38, 64));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(46, 38, 64);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(17, 17, 17);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(46, 38, 64));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(46, 38, 64));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: var(--icon-color, rgb(46, 38, 64));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(46, 38, 64);
  stroke: rgb(46, 38, 64);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(46, 38, 64));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(17, 17, 17);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 3px 10px 0px;
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(17, 17, 17));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(17, 17, 17);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(232, 225, 249);
  border-color: rgba(0, 0, 0, 0);
  color: var(--on-surface-variant, rgb(46, 38, 64));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--text-muted, rgb(46, 38, 64));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: rgb(46, 38, 64);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(46, 38, 64);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-color: var(--tag-color, hsl(258, 52.8%, 50%));
  --pill-color-hover: var(--tag-color-hover, hsl(258, 52.8%, 50%));
  --pill-color-remove: var(--tag-color, hsl(258, 52.8%, 50%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(258, 52.8%, 50%));
  color: var(--pill-color, rgb(101, 60, 195));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--surface-variant, rgb(232, 225, 249));
  color: var(--text-normal, rgb(17, 17, 17));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(17, 17, 17);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(17, 17, 17));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: var(--text-normal, rgb(46, 38, 64));
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(247, 242, 252));
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: var(--code-normal, rgb(17, 17, 17));
  font-family: var(--font-monospace, "??", "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body sub {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body summary {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body sup {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tertiary-container, rgb(150, 123, 214));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: var(--on-tertiary-container, rgb(28, 25, 36));
}`,
  },
  classSettings: {
    "hide-toolbar-desktop": {
      general: `body.mod-windows.hide-toolbar-desktop .workspace-ribbon.side-dock-ribbon.mod-left.is-collapsed, body.mod-linux.hide-toolbar-desktop .workspace-ribbon.side-dock-ribbon.mod-left.is-collapsed {
max-width: 0px;
margin: 0;
padding: 0;
margin-top: calc(var(--header-height) * 2 + 3px);
padding-top: 4px;
padding-bottom: 12px;
overflow: hidden;
border: none;
}

body.mod-windows.hide-toolbar-desktop .workspace-ribbon.side-dock-ribbon.mod-left.is-collapsed::before, body.mod-linux.hide-toolbar-desktop .workspace-ribbon.side-dock-ribbon.mod-left.is-collapsed::before {
display: none;
}

body.mod-windows.hide-toolbar-desktop .workspace-ribbon.side-dock-ribbon.mod-left, body.mod-linux.hide-toolbar-desktop .workspace-ribbon.side-dock-ribbon.mod-left {
transition-duration: 0s;
}

body.mod-windows.hide-toolbar-desktop .workspace-ribbon.side-dock-ribbon.mod-left.is-collapsed:hover::after, body.mod-linux.hide-toolbar-desktop .workspace-ribbon.side-dock-ribbon.mod-left.is-collapsed:hover::after {
opacity: 0.4;
}

body.mod-windows.hide-toolbar-desktop .workspace-tabs.mod-top-left-space .workspace-tab-header-container, body.mod-linux.hide-toolbar-desktop .workspace-tabs.mod-top-left-space .workspace-tab-header-container {
margin-left: var(--ribbon-width);
}

body.mod-windows.hide-toolbar-desktop .mod-left-split .workspace-tabs.mod-top-left-space .workspace-tab-header-container, body.mod-linux.hide-toolbar-desktop .mod-left-split .workspace-tabs.mod-top-left-space .workspace-tab-header-container {
padding-left: 0;
margin-left: 0;
}

body.mod-windows.hide-toolbar-desktop .workspace-ribbon.side-dock-ribbon.mod-left.is-collapsed .side-dock-actions, body.mod-windows.hide-toolbar-desktop .workspace-ribbon.side-dock-ribbon.mod-left.is-collapsed .side-dock-settings, body.mod-linux.hide-toolbar-desktop .workspace-ribbon.side-dock-ribbon.mod-left.is-collapsed .side-dock-actions, body.mod-linux.hide-toolbar-desktop .workspace-ribbon.side-dock-ribbon.mod-left.is-collapsed .side-dock-settings {
padding-left: 7px;
opacity: 0;
}

body.hide-toolbar-desktop .mod-root .workspace-tabs:not(.mod-top-left-space) .workspace-tab-header.is-active:first-of-type {
margin-bottom: -9px;
padding-bottom: 13px;
}

body.hide-toolbar-desktop .mod-root .workspace-tabs:not(.mod-top-left-space) .workspace-tab-header.is-active:first-of-type::after {
bottom: 9px;
}`,
    },
    "more-drag-desktop": {
      general: `body.more-drag-desktop .view-header, body.more-drag-desktop .titlebar-inner, body.more-drag-desktop .workspace-ribbon.side-dock-ribbon {
-webkit-app-region: drag;
}

body.more-drag-desktop .mod-root .workspace-tab-header {
-webkit-app-region: drag;
}

body.more-drag-desktop .mod-root .workspace-tab-header .workspace-tab-header-inner-title {
-webkit-app-region: no-drag;
margin-bottom: -5px;
padding-bottom: 5px;
}`,
    },
    "tab-drag-desktop": {
      general: `body.tab-drag-desktop .mod-root .workspace-tab-header.is-active {
-webkit-app-region: drag;
}

body.tab-drag-desktop .mod-root .workspace-tab-header.is-active .workspace-tab-header-inner-title {
-webkit-app-region: drag;
}`,
    },
    "pen-mode": {
      general: `body.pen-mode .view-content.excalidraw-view {
--excalidraw-button-size: 25px;
}

body.pen-mode .view-content.excalidraw-view {
--excalidraw-button-size: 20px;
}

body.pen-mode .view-content.excalidraw-view {
--excalidraw-button-size: 15px;
}

body.pen-mode .view-content.excalidraw-view .App-top-bar {
flex-direction: row !important;
}

body.pen-mode .view-content.excalidraw-view .App-top-bar .Stack_horizontal {
grid-auto-flow: row;
}

body.pen-mode .view-content.excalidraw-view .App-top-bar .Stack_vertical {
margin-bottom: 170px;
}

body.pen-mode .view-content.excalidraw-view .App-top-bar .mobile-misc-tools-container {
right: inherit;
top: inherit;
bottom: 0;
border-radius: 10px;
}

body.pen-mode .view-content.excalidraw-view .App-top-bar .App-toolbar__divider {
height: 1px;
width: auto;
}

body.pen-mode .view-content.excalidraw-view .App-bottom-bar {
padding-left: calc(var(--excalidraw-button-size) + 12px);
}

body.pen-mode .view-content.excalidraw-view .excalidraw--mobile .HintViewer span {
position: absolute !important;
top: auto !important;
bottom: 10px !important;
right: 10px !important;
opacity: 0.2;
}

body.pen-mode .view-content.excalidraw-view .excalidraw--mobile .welcome-screen-center {
display: none !important;
}

body.pen-mode .view-content.excalidraw-view .App-toolbar__extra-tools-dropdown {
left: 0 !important;
}`,
    },
    "dim-light-mode": {
      light: `body.dim-light-mode {
--background: hsl(var(--accent-h), calc(var(--accent-s) * 0.15), 95%);
--surface: hsl(var(--accent-h), calc(var(--accent-s) * 0.10), 98%);
}`,
    },
    "space-above-document": {
      general: `body.space-above-document .cm-editor .cm-scroller .cm-sizer, body.space-above-document .markdown-reading-view .markdown-preview-view .markdown-preview-sizer {
padding-top: 25vh;
}

body.space-above-document .markdown-embed-content .markdown-preview-sizer, body.space-above-document .markdown-embed-content .cm-sizer, body.space-above-document .canvas-node-container .markdown-preview-sizer, body.space-above-document .canvas-node-container .cm-sizer {
padding-top: inherit !important;
}`,
    },
    "disable-tooltip-animation": {
      general: `body.disable-tooltip-animation .tooltip {
animation: none !important;
}`,
    },
    "enable-mica": {
      general: `body.mod-windows.enable-mica, body.mod-mac.enable-mica, body.mod-linux.enable-mica {
background-color: transparent !important;
}

body.mod-windows.enable-mica .cm-line:not(.HyperMD-quote, .HyperMD-codeblock), body.mod-mac.enable-mica .cm-line:not(.HyperMD-quote, .HyperMD-codeblock), body.mod-linux.enable-mica .cm-line:not(.HyperMD-quote, .HyperMD-codeblock) {
background-color: var(--background);
}

body.mod-windows.enable-mica .cm-line.HyperMD-quote + .cm-line:not(.HyperMD-quote, .HyperMD-codeblock), body.mod-mac.enable-mica .cm-line.HyperMD-quote + .cm-line:not(.HyperMD-quote, .HyperMD-codeblock), body.mod-linux.enable-mica .cm-line.HyperMD-quote + .cm-line:not(.HyperMD-quote, .HyperMD-codeblock) {
background-color: transparent;
}

body.mod-windows.win-menu.enable-mica div.menu {
background-color: rgba(250, 250, 250, 0.9411764706) !important;
-webkit-backdrop-filter: blur(8px) !important;
backdrop-filter: blur(8px) !important;
}`,
      dark: `body.mod-windows.is-popout-window.theme-dark {
background: #202020 !important;
}

body.mod-windows.win-menu.theme-dark div.menu {
background-color: rgba(39, 38, 39, 0.9411764706) !important;
}`,
      light: `body.mod-windows.is-popout-window.theme-light {
background: var(--surface-variant) !important;
}`,
    },
    "win-menu": {
      general: `body.mod-windows.win-menu div.menu {
background-color: rgba(248, 248, 248, 0.6274509804) !important;
border: 1px solid rgba(54, 54, 54, 0.0705882353);
padding: 1px 5px;
-webkit-backdrop-filter: blur(20px);
backdrop-filter: blur(20px);
--menu-text-color: black;
--win-blue: #0078d4;
box-shadow: 0px 8px 8px 3px rgba(0, 0, 0, 0.05), 0px 7px 9px -7px rgba(0, 0, 0, 0.13);
font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body.mod-windows.win-menu div.menu .menu-item {
border-radius: 4px !important;
margin: 4px 0;
padding: 5px 8px;
font-size: 14px;
transition: 0.09s;
font-weight: 400;
border-radius: 4px;
}

body.mod-windows.win-menu div.menu .menu-item .menu-item-icon {
color: var(--menu-text-color);
}

body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg {
fill: white;
stroke-width: 1px;
transform: scale(1.2);
}

body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg path[d="m9 14 2 2 4-4"], body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg path[d="M9 12v-1h6v1"], body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg path[d="M11 17h2"], body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg path[d="M12 11v6"], body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg path[d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg path[d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg path[d="M21 14H11"], body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg path[d="m15 10-4 4 4 4"], body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg path[d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"] {
color: var(--win-blue);
}

body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg rect, body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg circle {
color: var(--win-blue);
}

body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg rect[y="2"], body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg rect[y="3"] {
color: var(--menu-text-color);
}

body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg path[d="M15 6a9 9 0 0 0-9 9"], body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg path[d="m15 10-4 4 4 4"], body.mod-windows.win-menu div.menu .menu-item .menu-item-icon svg polyline {
fill: none;
}

body.mod-windows.win-menu div.menu .menu-item .menu-item-title {
color: var(--menu-text-color);
}

body.mod-windows.win-menu div.menu .menu-item .cmdr-menu-more-options {
color: var(--menu-text-color);
opacity: 0.5;
}

body.mod-windows.win-menu div.menu .menu-item .cmdr-menu-more-options:hover {
opacity: 1;
}

body.mod-windows.win-menu div.menu .menu-item.is-disabled {
opacity: 0.5;
}

body.mod-windows.win-menu div.menu .menu-item.selected:not(.is-disabled):not(.is-label) {
background-color: rgba(54, 54, 54, 0.0431372549);
}

body.mod-windows.win-menu div.menu .menu-separator {
border-color: rgba(54, 54, 54, 0.0705882353);
margin: 6px 0 !important;
}

body.mod-windows.enable-mica div.menu {
background-color: rgba(250, 250, 250, 0.9411764706) !important;
-webkit-backdrop-filter: blur(8px) !important;
backdrop-filter: blur(8px) !important;
}`,
      dark: `body.mod-windows.theme-dark div.menu {
background-color: rgba(32, 31, 33, 0.8352941176) !important;
border-color: rgba(255, 255, 255, 0.062745098);
}

body.mod-windows.theme-dark div.menu .menu-item.selected:not(.is-disabled):not(.is-label) {
background-color: rgba(255, 255, 255, 0.062745098);
}

body.mod-windows.theme-dark div.menu .menu-separator {
border-color: rgba(255, 255, 255, 0.062745098);
}

body.mod-windows.theme-dark div.menu .menu-item {
--menu-text-color: white;
}

body.mod-windows.theme-dark div.menu .menu-item .menu-item-icon svg {
fill: none;
}

body.mod-windows.enable-mica.theme-dark div.menu {
background-color: rgba(39, 38, 39, 0.9411764706) !important;
}`,
    },
    "no-top-space": {
      general: `body.no-top-space .app-container {
margin-top: -7px;
height: calc(100% + 7px);
}`,
    },
    "hide-sidebar-header": {
      general: `body.hide-sidebar-header .nav-folder.mod-root > .nav-file-title, body.hide-sidebar-header .nav-folder.mod-root > .nav-folder-title, body.hide-sidebar-header .workspace-drawer-header-name, body.hide-sidebar-header .workspace-drawer-header-icon, body.hide-sidebar-header .workspace-drawer-header-left {
display: none;
}`,
    },
    "button-shapes-mobile": {
      general: `body.is-phone .mobile-navbar .clickable-icon {
background-color: var(--surface-variant);
height: 30px;
width: 60px;
max-width: 15vw;
border-radius: 15px;
}

body.is-phone .mobile-toolbar {
height: 45px;
}

body.is-phone .mobile-toolbar-option {
background-color: var(--surface-variant);
height: 30px;
width: 50px;
margin: 7px 5px;
border-radius: 15px;
}

body.is-phone .nav-action-button {
background-color: var(--surface);
height: 40px;
min-width: 65px;
border-radius: 20px;
color: var(--on-surface);
}`,
    },
    "fab-enabled-mobile": {
      general: `body.is-phone.fab-enabled-mobile:not(.custom-page-header) {
/* Advanced Mobile Toolbar Mode */
/* Shrink FAB on small displays */
}

body.is-phone.fab-enabled-mobile:not(.custom-page-header) .view-action:nth-last-of-type(4) {
color: var(--on-tertiary-container);
background-color: var(--tertiary-container);
display: flex;
padding: 0px;
margin: 0;
margin: 16px;
position: absolute;
transform: translate(-50%, -50%);
left: calc(100% - 44px - 16px);
justify-content: center;
align-items: center;
width: 56px;
height: 56px;
border-radius: var(--medium-radius);
box-shadow: 0.4px 0.8px 4px rgba(0, 0, 0, 0.03), 1.2px 2.7px 13.4px rgba(0, 0, 0, 0.15), 8px 18px 80px rgba(0, 0, 0, 0.4);
top: calc(100vh - 48px - 44px - 16px);
}

body.is-phone.fab-enabled-mobile:not(.custom-page-header) .view-action:nth-last-of-type(4) > *:first-child {
width: 24px;
height: 24px;
}

body.is-phone.fab-enabled-mobile:not(.custom-page-header) body:not(:not(.advanced-toolbar-mode)) .view-action:nth-of-type(4) {
top: calc(90vh - var(--at-button-height) * var(--at-row-count));
}

body.is-phone.fab-enabled-mobile:not(.custom-page-header) .view-action:nth-of-type(4) {
transform: scale(0.8) translate(-50%, -50%);
}

body.is-phone.custom-page-header {
/* Advanced Mobile Toolbar Mode */
/* Shrink FAB on small displays */
}

body.is-phone.custom-page-header .view-action:first-child {
color: var(--on-tertiary-container);
background-color: var(--tertiary-container);
display: flex;
padding: 0px;
margin: 0;
margin: 16px;
position: absolute;
transform: translate(-50%, -50%);
left: calc(100% - 44px - 16px);
justify-content: center;
align-items: center;
width: 56px;
height: 56px;
border-radius: var(--medium-radius);
box-shadow: 0.4px 0.8px 4px rgba(0, 0, 0, 0.03), 1.2px 2.7px 13.4px rgba(0, 0, 0, 0.15), 8px 18px 80px rgba(0, 0, 0, 0.4);
top: calc(100vh - 48px - 44px - 16px);
}

body.is-phone.custom-page-header .view-action:first-child > *:first-child {
width: 24px;
height: 24px;
}

body.is-phone.custom-page-header body:not(:not(.advanced-toolbar-mode)) .view-action:nth-last-of-type(5) {
top: calc(90vh - var(--at-button-height) * var(--at-row-count));
}

body.is-phone.custom-page-header .view-action:nth-last-of-type(5) {
transform: scale(0.8) translate(-50%, -50%);
}`,
    },
    "fab-enabled-desktop": {
      general: `body:not(.is-phone).fab-enabled-desktop:not(.custom-page-header) {
/* Advanced Mobile Toolbar Mode */
/* Shrink FAB on small displays */
}

body:not(.is-phone).fab-enabled-desktop:not(.custom-page-header) .view-action:nth-last-of-type(4) {
color: var(--on-tertiary-container);
background-color: var(--tertiary-container);
display: flex;
padding: 0px;
margin: 0;
margin: 16px;
position: absolute;
transform: translate(-50%, -50%);
left: calc(100% - 44px - 16px);
justify-content: center;
align-items: center;
width: 56px;
height: 56px;
border-radius: var(--medium-radius);
box-shadow: 0.4px 0.8px 4px rgba(0, 0, 0, 0.03), 1.2px 2.7px 13.4px rgba(0, 0, 0, 0.15), 8px 18px 80px rgba(0, 0, 0, 0.4);
top: calc(100vh - 48px - 44px - 16px);
}

body:not(.is-phone).fab-enabled-desktop:not(.custom-page-header) .view-action:nth-last-of-type(4) > *:first-child {
width: 24px;
height: 24px;
}

body:not(.is-phone).fab-enabled-desktop:not(.custom-page-header) body:not(:not(.advanced-toolbar-mode)) .view-action:nth-of-type(4) {
top: calc(90vh - var(--at-button-height) * var(--at-row-count));
}

body:not(.is-phone).fab-enabled-desktop:not(.custom-page-header) .view-action:nth-of-type(4) {
transform: scale(0.8) translate(-50%, -50%);
}

body:not(.is-phone).custom-page-header {
/* Advanced Mobile Toolbar Mode */
/* Shrink FAB on small displays */
}

body:not(.is-phone).custom-page-header .view-action:first-child {
color: var(--on-tertiary-container);
background-color: var(--tertiary-container);
display: flex;
padding: 0px;
margin: 0;
margin: 16px;
position: absolute;
transform: translate(-50%, -50%);
left: calc(100% - 44px - 16px);
justify-content: center;
align-items: center;
width: 56px;
height: 56px;
border-radius: var(--medium-radius);
box-shadow: 0.4px 0.8px 4px rgba(0, 0, 0, 0.03), 1.2px 2.7px 13.4px rgba(0, 0, 0, 0.15), 8px 18px 80px rgba(0, 0, 0, 0.4);
top: calc(100vh - 48px - 44px - 16px);
}

body:not(.is-phone).custom-page-header .view-action:first-child > *:first-child {
width: 24px;
height: 24px;
}

body:not(.is-phone).custom-page-header body:not(:not(.advanced-toolbar-mode)) .view-action:nth-last-of-type(5) {
top: calc(90vh - var(--at-button-height) * var(--at-row-count));
}

body:not(.is-phone).custom-page-header .view-action:nth-last-of-type(5) {
transform: scale(0.8) translate(-50%, -50%);
}

body:not(.is-phone).custom-page-header:has(.titlebar) .view-action:first-child {
top: calc(100vh - 48px - 44px - 16px - 40px);
}`,
    },
    "hide-buttons-mobile": {
      general: `body.is-phone.hide-buttons-mobile .view-action:not(.page-header-button) {
display: none;
}`,
    },
    "custom-page-header": {
      general: `body.is-phone.fab-enabled-mobile.custom-page-header, body:not(.is-phone).fab-enabled-desktop.custom-page-header {
/* Advanced Mobile Toolbar Mode */
/* Shrink FAB on small displays */
}

body.is-phone.fab-enabled-mobile.custom-page-header .view-action:first-child, body:not(.is-phone).fab-enabled-desktop.custom-page-header .view-action:first-child {
color: var(--on-tertiary-container);
background-color: var(--tertiary-container);
display: flex;
padding: 0px;
margin: 0;
margin: 16px;
position: absolute;
transform: translate(-50%, -50%);
left: calc(100% - 44px - 16px);
justify-content: center;
align-items: center;
width: 56px;
height: 56px;
border-radius: var(--medium-radius);
box-shadow: 0.4px 0.8px 4px rgba(0, 0, 0, 0.03), 1.2px 2.7px 13.4px rgba(0, 0, 0, 0.15), 8px 18px 80px rgba(0, 0, 0, 0.4);
top: calc(100vh - 48px - 44px - 16px);
}

body.is-phone.fab-enabled-mobile.custom-page-header .view-action:first-child > *:first-child, body:not(.is-phone).fab-enabled-desktop.custom-page-header .view-action:first-child > *:first-child {
width: 24px;
height: 24px;
}

body.is-phone.fab-enabled-mobile.custom-page-header body:not(:not(.advanced-toolbar-mode)) .view-action:nth-last-of-type(5), body:not(.is-phone).fab-enabled-desktop.custom-page-header body:not(:not(.advanced-toolbar-mode)) .view-action:nth-last-of-type(5) {
top: calc(90vh - var(--at-button-height) * var(--at-row-count));
}

body.is-phone.fab-enabled-mobile.custom-page-header .view-action:nth-last-of-type(5), body:not(.is-phone).fab-enabled-desktop.custom-page-header .view-action:nth-last-of-type(5) {
transform: scale(0.8) translate(-50%, -50%);
}

body:not(.is-phone).fab-enabled-desktop.custom-page-header:has(.titlebar) .view-action:first-child {
top: calc(100vh - 48px - 44px - 16px - 40px);
}`,
    },
  },
};
