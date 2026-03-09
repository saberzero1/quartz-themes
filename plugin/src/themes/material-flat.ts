import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "material-flat",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto", "roboto-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background: rgb(30, 29, 32);
  --background-modifier-border: rgb(37, 35, 42);
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #9c2b2b;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-success: #197300;
  --background-primary: rgb(30, 29, 32);
  --background-primary-alt: rgb(
    36.7,
    35.15,
    41.25
    );
  --background-secondary: rgb(69, 66, 76);
  --background-secondary-alt: rgb(
    47.14,
    44.93,
    54.75
    );
  --bases-cards-background: rgb(30, 29, 32);
  --bases-cards-cover-background: rgb(
    36.7,
    35.15,
    41.25
    );
  --bases-cards-shadow: 0 0 0 1px rgb(37, 35, 42);
  --bases-embed-border-color: rgb(37, 35, 42);
  --bases-group-heading-property-color: rgb(198, 190, 218);
  --bases-table-border-color: rgb(37, 35, 42);
  --bases-table-cell-background-active: rgb(30, 29, 32);
  --bases-table-cell-background-disabled: rgb(
    36.7,
    35.15,
    41.25
    );
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(191, 170, 238);
  --bases-table-group-background: rgb(
    36.7,
    35.15,
    41.25
    );
  --bases-table-header-background: rgb(30, 29, 32);
  --bases-table-header-color: rgb(198, 190, 218);
  --bases-table-summary-background: rgb(30, 29, 32);
  --big-radius: 24px;
  --blockquote-border-color: rgb(191, 170, 238);
  --blur-background: color-mix(in srgb, rgb(69, 66, 76) 65%, transparent) linear-gradient(rgb(69, 66, 76), color-mix(in srgb, rgb(69, 66, 76) 65%, transparent));
  --bold: 650;
  --canvas-background: rgb(30, 29, 32);
  --caret-color: #E5E1E5;
  --checkbox-border-color-hover: rgb(198, 190, 218);
  --checkbox-color: rgb(191, 170, 238);
  --checkbox-color-hover: rgb(191, 170, 238);
  --checkbox-marker-color: rgb(30, 29, 32);
  --checklist-done-color: rgb(198, 190, 218);
  --code-background: rgb(
    36.7,
    35.15,
    41.25
    );
  --code-border-color: rgb(37, 35, 42);
  --code-normal: #E5E1E5;
  --code-punctuation: rgb(198, 190, 218);
  --collapse-icon-color-collapsed: rgb(226, 221, 238);
  --color-accent: rgb(162, 138, 219);
  --color-accent-1: rgb(191, 172, 236);
  --color-accent-2: rgb(222, 212, 247);
  --divider-color: transparent;
  --divider-color-hover: rgb(191, 170, 238);
  --dropdown-background: rgb(69, 66, 76);
  --dropdown-background-hover: rgb(69, 66, 76);
  --elevation1: 0.05;
  --elevation2: 0.08;
  --elevation3: 0.11;
  --elevation4: 0.12;
  --elevation5: 0.14;
  --embed-block-shadow-hover: 0 0 0 1px rgb(37, 35, 42), inset 0 0 0 1px rgb(37, 35, 42);
  --embed-border-start: 2px solid rgb(191, 170, 238);
  --error: #9c2b2b;
  --error-container: #930006;
  --errorContainer: #930006;
  --file-header-background: rgb(30, 29, 32);
  --file-header-background-focused: rgb(30, 29, 32);
  --file-header-font: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(69, 66, 76);
  --flair-color: #E5E1E5;
  --focus: rgb(
    48.88,
    46.56,
    57
    );
  --font-interface: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif;
  --font-mermaid: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas;
  --font-print: '??', '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, 'Arial';
  --font-text: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --footnote-divider-color: rgb(37, 35, 42);
  --footnote-id-color: rgb(198, 190, 218);
  --graph-node: rgb(198, 190, 218);
  --graph-node-focused: rgb(226, 221, 238);
  --graph-text: #E5E1E5;
  --h1: 2.25em;
  --h2: 20pt;
  --h3: 16pt;
  --h4: 15pt;
  --h5: 14pt;
  --h6: 12pt;
  --hover: rgb(
    41.92,
    40.04,
    48
    );
  --hr-color: rgb(69, 66, 76);
  --icon-color: rgb(198, 190, 218);
  --icon-color-active: rgb(226, 221, 238);
  --icon-color-focused: #E5E1E5;
  --icon-color-hover: rgb(198, 190, 218);
  --input-height: 32px;
  --input-shadow-hover: inset 0 1000px 0 0 #FFFFFF20;
  --interactive-accent: rgb(191, 170, 238);
  --interactive-accent-hover: rgb(191, 170, 238);
  --interactive-accent-rgb: rgb(191, 170, 238);
  --interactive-hover: rgb(69, 66, 76);
  --interactive-normal: rgb(69, 66, 76);
  --interactive-success: #197300;
  --inverse-on-surface: #1C1B1E;
  --inverse-surface: #E5E1E5;
  --light: 350;
  --link-color: rgb(226, 221, 238);
  --link-color-hover: rgb(191, 172, 236);
  --link-external-color: rgb(226, 221, 238);
  --link-external-color-hover: rgb(191, 172, 236);
  --link-unresolved-color: rgb(226, 221, 238);
  --list-marker-color-collapsed: rgb(226, 221, 238);
  --list-marker-color-hover: rgb(198, 190, 218);
  --medium: 500;
  --medium-radius: 16px;
  --menu-background: rgb(69, 66, 76);
  --metadata-border-color: rgb(37, 35, 42);
  --metadata-divider-color: rgb(37, 35, 42);
  --metadata-input-font: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #E5E1E5;
  --metadata-label-font: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(198, 190, 218);
  --metadata-label-text-color-hover: rgb(198, 190, 218);
  --modal-background: rgb(30, 29, 32);
  --nav-heading-color: #E5E1E5;
  --nav-heading-color-collapsed-hover: rgb(198, 190, 218);
  --nav-heading-color-hover: #E5E1E5;
  --nav-item-color: rgb(198, 190, 218);
  --nav-item-color-active: #E5E1E5;
  --nav-item-color-highlighted: rgb(226, 221, 238);
  --nav-item-color-hover: #E5E1E5;
  --nav-item-color-selected: #E5E1E5;
  --nav-tag-color-active: rgb(198, 190, 218);
  --nav-tag-color-hover: rgb(198, 190, 218);
  --on-accent: rgb(30, 29, 32);
  --on-background: #E5E1E5;
  --on-error: #680003;
  --on-error-container: #FFDAD4;
  --on-primary: rgb(30, 29, 32);
  --on-primary-container: rgb(222, 212, 247);
  --on-secondary: rgb(30, 29, 32);
  --on-secondary-container: rgb(191, 172, 236);
  --on-surface-variant: rgb(198, 190, 218);
  --on-tertiary: #482535;
  --on-tertiary-container: rgb(189, 174, 224);
  --onError: #680003;
  --onErrorContainer: #FFDAD4;
  --onTertiary: #482535;
  --outline: rgb(53, 36, 92);
  --pane-separation: 6px;
  --pdf-background: rgb(30, 29, 32);
  --pdf-page-background: rgb(30, 29, 32);
  --pdf-shadow: 0 0 0 1px rgb(37, 35, 42);
  --pdf-sidebar-background: rgb(30, 29, 32);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(37, 35, 42);
  --pill-border-color: rgb(37, 35, 42);
  --pill-color: rgb(198, 190, 218);
  --pill-color-hover: #E5E1E5;
  --pill-color-remove-hover: rgb(226, 221, 238);
  --primary: rgb(191, 170, 238);
  --primary-b: 255;
  --primary-container: rgb(191, 172, 236);
  --primary-g: 190;
  --primary-inverse: #5F4BBD;
  --primary-r: 202;
  --primaryInverse: #5F4BBD;
  --prompt-background: rgb(30, 29, 32);
  --raised-background: color-mix(in srgb, rgb(69, 66, 76) 65%, transparent) linear-gradient(rgb(69, 66, 76), color-mix(in srgb, rgb(69, 66, 76) 65%, transparent));
  --regular: 400;
  --ribbon-background: rgb(69, 66, 76);
  --ribbon-background-collapsed: rgb(30, 29, 32);
  --search-clear-button-color: rgb(198, 190, 218);
  --search-icon-color: rgb(198, 190, 218);
  --search-result-background: rgb(30, 29, 32);
  --secondary: rgb(168, 152, 205);
  --secondary-container: rgb(30, 29, 32);
  --setting-group-heading-color: #E5E1E5;
  --setting-items-background: rgb(
    36.7,
    35.15,
    41.25
    );
  --setting-items-border-color: rgb(37, 35, 42);
  --slider-track-background: rgb(69, 66, 76);
  --small-radius: 8px;
  --smaller: 0.875em;
  --smallest: 0.75em;
  --status-bar-background: rgb(69, 66, 76);
  --status-bar-border-color: transparent;
  --status-bar-text-color: rgb(198, 190, 218);
  --suggestion-background: rgb(30, 29, 32);
  --surface: rgb(37, 35, 42);
  --surface-b: 30;
  --surface-g: 27;
  --surface-mid: rgb(47, 45, 52);
  --surface-r: 28;
  --surface-variant: rgb(69, 66, 76);
  --surface1: rgb(
    36.7,
    35.15,
    41.25
    );
  --surface2: rgb(
    41.92,
    40.04,
    48
    );
  --surface3: rgb(
    47.14,
    44.93,
    54.75
    );
  --surface4: rgb(
    48.88,
    46.56,
    57
    );
  --surface5: rgb(
    52.36,
    49.82,
    61.5
    );
  --tab-background-active: rgb(37, 35, 42);
  --tab-container-background: rgb(69, 66, 76);
  --tab-outline-color: transparent;
  --tab-switcher-background: rgb(69, 66, 76);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(69, 66, 76), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(162, 138, 219);
  --tab-text-color-active: rgb(198, 190, 218);
  --tab-text-color-focused: rgb(198, 190, 218);
  --tab-text-color-focused-active: rgb(198, 190, 218);
  --tab-text-color-focused-active-current: #E5E1E5;
  --tab-text-color-focused-highlighted: rgb(226, 221, 238);
  --table-add-button-border-color: rgb(37, 35, 42);
  --table-border-color: rgb(37, 35, 42);
  --table-drag-handle-background-active: rgb(191, 170, 238);
  --table-drag-handle-color-active: rgb(30, 29, 32);
  --table-header-border-color: rgb(37, 35, 42);
  --table-header-color: #E5E1E5;
  --table-selection-border-color: rgb(191, 170, 238);
  --tag-color: rgb(226, 221, 238);
  --tag-color-hover: rgb(226, 221, 238);
  --tertiary: #EDB8CD;
  --tertiary-container: rgb(38, 26, 66);
  --text-accent: rgb(226, 221, 238);
  --text-accent-hover: rgb(191, 172, 236);
  --text-error: #cf6679;
  --text-error-hover: #990000;
  --text-highlight-bg: rgb(69, 66, 76);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: rgb(198, 190, 218);
  --text-muted-rgb: 153, 153, 153;
  --text-normal: #E5E1E5;
  --text-on-accent: rgb(30, 29, 32);
  --text-selection: rgb(46, 38, 64);
  --titlebar-background: rgb(69, 66, 76);
  --titlebar-background-focused: rgb(
    47.14,
    44.93,
    54.75
    );
  --titlebar-border-color: rgb(37, 35, 42);
  --titlebar-text-color: rgb(198, 190, 218);
  --titlebar-text-color-focused: #E5E1E5;
  --tooltip-color: rgb(69, 66, 76);
  --vault-profile-color: #E5E1E5;
  --vault-profile-color-hover: #E5E1E5;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(229, 225, 229);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(229, 225, 229);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(229, 225, 229);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(229, 225, 229);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(229, 225, 229);
}`,
    typography: `body .page article p > b, b {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body .page article p > em, em {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body .page article p > i, i {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body .page article p > strong, strong {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body .text-highlight {
  background-color: rgb(69, 66, 76);
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body del {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration: line-through rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body p {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 190, 218) none 0px;
  text-decoration: rgb(198, 190, 218);
  text-decoration-color: rgb(198, 190, 218);
}`,
    links: `body a.external, footer a {
  color: rgb(226, 221, 238);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 221, 238) none 0px;
  text-decoration: underline rgb(226, 221, 238);
  text-decoration-color: rgb(226, 221, 238);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(226, 221, 238);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(226, 221, 238) none 0px;
  text-decoration: rgb(226, 221, 238);
  text-decoration-color: rgb(226, 221, 238);
}

body a.internal.broken {
  color: rgb(226, 221, 238);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(226, 221, 238) none 0px;
  text-decoration: rgb(226, 221, 238);
  text-decoration-color: rgb(226, 221, 238);
}`,
    lists: `body dd {
  color: rgb(229, 225, 229);
}

body dt {
  color: rgb(229, 225, 229);
}

body ol > li {
  color: rgb(229, 225, 229);
}

body ol.overflow {
  background-color: rgb(29, 28, 31);
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

body ul > li {
  color: rgb(229, 225, 229);
}

body ul.overflow {
  background-color: rgb(29, 28, 31);
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(69, 66, 76);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

body table {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 132.125px;
}

body td {
  background-color: rgb(37, 35, 42);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 3px;
  color: rgb(229, 225, 229);
  padding-bottom: 1px;
  padding-top: 1px;
}

body th {
  background-color: rgb(69, 66, 76);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-width: 3px;
  color: rgb(198, 190, 218);
}

body tr {
  border-top-color: rgb(47, 45, 55);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    code: `body code {
  border-bottom-color: rgb(168, 152, 205);
  border-left-color: rgb(168, 152, 205);
  border-right-color: rgb(168, 152, 205);
  border-top-color: rgb(168, 152, 205);
  color: rgb(168, 152, 205);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(69, 66, 76);
  border-bottom-color: rgb(37, 35, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(69, 66, 76);
  border-bottom-color: rgb(37, 35, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(198, 190, 218);
  font-family: "??", "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body pre > code, pre:has(> code) {
  background-color: rgb(69, 66, 76);
  border-bottom-color: rgb(37, 35, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre:has(> code) {
  background-color: rgb(69, 66, 76);
  border-bottom-color: rgb(37, 35, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `body audio {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

body figcaption {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

body img {
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

body video {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}`,
    embeds: `body .file-embed {
  background-color: rgb(37, 35, 41);
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
}

body .footnotes {
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}

body .transclude {
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

body .transclude-inner {
  border-bottom-color: rgb(229, 225, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(229, 225, 229);
  border-left-width: 0px;
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(198, 190, 218);
  text-decoration: line-through rgb(198, 190, 218);
  text-decoration-color: rgb(198, 190, 218);
}

body li.task-list-item[data-task='!'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='*'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='-'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='/'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='>'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='?'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='I'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='S'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='b'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='c'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='d'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='f'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='i'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='k'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='l'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='p'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='u'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body li.task-list-item[data-task='w'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(37, 35, 42);
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  color: rgb(229, 225, 229);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(29, 28, 31);
}

body .search > .search-container > .search-space > * {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(229, 225, 229);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(229, 225, 229);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(229, 225, 229);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(69, 66, 76);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(229, 225, 229);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(226, 221, 238);
}

body h1 {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(222, 212, 247);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(222, 212, 247);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(198, 190, 218);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(198, 190, 218);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(198, 190, 218);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(37, 35, 42);
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: rgb(198, 190, 218);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(198, 190, 218);
  text-decoration: rgb(198, 190, 218);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(229, 225, 229);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(198, 190, 218);
  text-decoration: rgb(198, 190, 218);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

body li.section-li > .section .meta {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(198, 190, 218);
  text-decoration: rgb(198, 190, 218);
}

body ul.section-ul {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: rgb(198, 190, 218);
}

body .darkmode svg {
  color: rgb(198, 190, 218);
  stroke: rgb(198, 190, 218);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: rgb(198, 190, 218);
}

body .breadcrumb-element p {
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}

body .metadata {
  border-bottom-color: rgb(37, 35, 42);
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  color: rgb(198, 190, 218);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: rgb(198, 190, 218);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(229, 225, 229);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(229, 225, 229);
  text-decoration: underline dotted rgb(229, 225, 229);
}

body details {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

body input[type=text] {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(37, 35, 41);
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
  font-family: "??", "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

body sub {
  color: rgb(229, 225, 229);
}

body summary {
  color: rgb(229, 225, 229);
}

body sup {
  color: rgb(229, 225, 229);
}`,
  },
  light: {
    base: `:root:root {
  --background: #fff;
  --background-modifier-border: #fff;
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #BA1B1B;
  --background-modifier-error-hover: #b00020;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-highlighted: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-success: #a4e7c3;
  --background-primary: #fff;
  --background-primary-alt: rgb(
    247,
    242.2,
    251.7
    );
  --background-secondary: rgb(232, 225, 249);
  --background-secondary-alt: rgb(
    237.4,
    231.64,
    247.74
    );
  --bases-cards-background: #fff;
  --bases-cards-cover-background: rgb(
    247,
    242.2,
    251.7
    );
  --bases-cards-shadow: 0 0 0 1px #fff;
  --bases-embed-border-color: #fff;
  --bases-group-heading-property-color: rgb(46, 38, 64);
  --bases-table-border-color: #fff;
  --bases-table-cell-background-active: #fff;
  --bases-table-cell-background-disabled: rgb(
    247,
    242.2,
    251.7
    );
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(165, 134, 238);
  --bases-table-group-background: rgb(
    247,
    242.2,
    251.7
    );
  --bases-table-header-background: #fff;
  --bases-table-header-color: rgb(46, 38, 64);
  --bases-table-summary-background: #fff;
  --big-radius: 24px;
  --blockquote-border-color: rgb(165, 134, 238);
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --bold: 650;
  --canvas-background: #fff;
  --canvas-card-label-color: rgb(46, 38, 64);
  --caret-color: #111;
  --checkbox-border-color: rgb(46, 38, 64);
  --checkbox-border-color-hover: rgb(46, 38, 64);
  --checkbox-color: rgb(165, 134, 238);
  --checkbox-color-hover: rgb(165, 134, 238);
  --checkbox-marker-color: #fff;
  --checklist-done-color: rgb(46, 38, 64);
  --code-background: rgb(
    247,
    242.2,
    251.7
    );
  --code-border-color: #fff;
  --code-comment: rgb(46, 38, 64);
  --code-normal: #111;
  --code-punctuation: rgb(46, 38, 64);
  --collapse-icon-color: rgb(46, 38, 64);
  --collapse-icon-color-collapsed: rgb(100, 60, 195);
  --color-accent: rgb(173, 147, 236);
  --color-accent-1: rgb(191, 172, 236);
  --color-accent-2: rgb(209, 196, 237);
  --divider-color: transparent;
  --divider-color-hover: rgb(165, 134, 238);
  --dropdown-background: rgb(232, 225, 249);
  --dropdown-background-hover: rgb(214, 211, 222);
  --elevation1: 0.05;
  --elevation2: 0.08;
  --elevation3: 0.11;
  --elevation4: 0.12;
  --elevation5: 0.14;
  --embed-block-shadow-hover: 0 0 0 1px #fff, inset 0 0 0 1px #fff;
  --embed-border-start: 2px solid rgb(165, 134, 238);
  --error: #BA1B1B;
  --errorContainer: #FFDAD4;
  --file-header-background: #fff;
  --file-header-background-focused: #fff;
  --file-header-font: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(232, 225, 249);
  --flair-color: #111;
  --focus: rgb(
    235.8,
    229.88,
    247.08
    );
  --font-interface: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif;
  --font-mermaid: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas;
  --font-print: '??', '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, 'Arial';
  --font-text: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --footnote-divider-color: #fff;
  --footnote-id-color: rgb(46, 38, 64);
  --footnote-id-color-no-occurrences: rgb(46, 38, 64);
  --graph-node: rgb(46, 38, 64);
  --graph-node-focused: rgb(100, 60, 195);
  --graph-node-unresolved: rgb(46, 38, 64);
  --graph-text: #111;
  --h1: 2.25em;
  --h2: 20pt;
  --h3: 16pt;
  --h4: 15pt;
  --h5: 14pt;
  --h6: 12pt;
  --heading-formatting: rgb(46, 38, 64);
  --hover: rgb(
    242.2,
    236.92,
    249.72
    );
  --hr-color: rgb(232, 225, 249);
  --icon-color: rgb(46, 38, 64);
  --icon-color-active: rgb(100, 60, 195);
  --icon-color-focused: #111;
  --icon-color-hover: rgb(46, 38, 64);
  --input-date-separator: rgb(46, 38, 64);
  --input-height: 32px;
  --input-placeholder-color: rgb(46, 38, 64);
  --input-shadow-hover: inset 0 1000px 0 0 #FFFFFF20;
  --interactive-accent: rgb(165, 134, 238);
  --interactive-accent-hover: rgb(165, 134, 238);
  --interactive-accent-rgb: rgb(165, 134, 238);
  --interactive-hover: rgb(214, 211, 222);
  --interactive-normal: rgb(232, 225, 249);
  --interactive-success: #197300;
  --inverse-on-surface: #EEE;
  --inverse-surface: #111;
  --light: 350;
  --link-color: rgb(100, 60, 195);
  --link-color-hover: rgb(191, 172, 236);
  --link-external-color: rgb(100, 60, 195);
  --link-external-color-hover: rgb(191, 172, 236);
  --link-unresolved-color: rgb(100, 60, 195);
  --list-marker-color: rgb(46, 38, 64);
  --list-marker-color-collapsed: rgb(100, 60, 195);
  --list-marker-color-hover: rgb(46, 38, 64);
  --medium: 500;
  --medium-radius: 16px;
  --menu-background: rgb(232, 225, 249);
  --metadata-border-color: #fff;
  --metadata-divider-color: #fff;
  --metadata-input-font: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #111;
  --metadata-label-font: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(46, 38, 64);
  --metadata-label-text-color-hover: rgb(46, 38, 64);
  --modal-background: #fff;
  --nav-collapse-icon-color: rgb(46, 38, 64);
  --nav-collapse-icon-color-collapsed: rgb(46, 38, 64);
  --nav-heading-color: #111;
  --nav-heading-color-collapsed: rgb(46, 38, 64);
  --nav-heading-color-collapsed-hover: rgb(46, 38, 64);
  --nav-heading-color-hover: #111;
  --nav-item-color: rgb(46, 38, 64);
  --nav-item-color-active: #111;
  --nav-item-color-highlighted: rgb(100, 60, 195);
  --nav-item-color-hover: #111;
  --nav-item-color-selected: #111;
  --nav-tag-color: rgb(46, 38, 64);
  --nav-tag-color-active: rgb(46, 38, 64);
  --nav-tag-color-hover: rgb(46, 38, 64);
  --on-accent: rgb(46, 38, 64);
  --on-background: #111;
  --on-primary: #FFFFFF;
  --on-primary-container: rgb(173, 147, 236);
  --on-secondary: rgb(46, 38, 64);
  --on-secondary-container: rgb(191, 172, 236);
  --on-surface: #1C1B1E;
  --on-surface-variant: rgb(46, 38, 64);
  --on-tertiary-container: rgb(28, 25, 36);
  --onError: #FFFFFF;
  --onErrorContainer: #410001;
  --onTertiary: #FFFFFF;
  --outline: rgb(210, 200, 234);
  --pane-separation: 6px;
  --pdf-background: #fff;
  --pdf-page-background: #fff;
  --pdf-sidebar-background: #fff;
  --pill-border-color: #fff;
  --pill-color: rgb(46, 38, 64);
  --pill-color-hover: #111;
  --pill-color-remove: rgb(46, 38, 64);
  --pill-color-remove-hover: rgb(100, 60, 195);
  --primary: rgb(165, 134, 238);
  --primary-b: 189;
  --primary-container: rgb(191, 172, 236);
  --primary-g: 75;
  --primary-r: 95;
  --primaryInverse: #CABEFF;
  --prompt-background: #fff;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --regular: 400;
  --ribbon-background: rgb(232, 225, 249);
  --ribbon-background-collapsed: #fff;
  --search-clear-button-color: rgb(46, 38, 64);
  --search-icon-color: rgb(46, 38, 64);
  --search-result-background: #fff;
  --secondary: rgb(162, 138, 219);
  --secondary-container: rgb(46, 38, 64);
  --setting-group-heading-color: #111;
  --setting-items-background: rgb(
    247,
    242.2,
    251.7
    );
  --setting-items-border-color: #fff;
  --slider-track-background: rgb(232, 225, 249);
  --small-radius: 8px;
  --smaller: 0.875em;
  --smallest: 0.75em;
  --status-bar-background: rgb(232, 225, 249);
  --status-bar-border-color: transparent;
  --status-bar-text-color: rgb(46, 38, 64);
  --suggestion-background: #fff;
  --surface: #FFF;
  --surface-b: 255;
  --surface-g: 251;
  --surface-mid: rgb(235, 232, 243);
  --surface-r: 255;
  --surface-variant: rgb(232, 225, 249);
  --surface1: rgb(
    247,
    242.2,
    251.7
    );
  --surface2: rgb(
    242.2,
    236.92,
    249.72
    );
  --surface3: rgb(
    237.4,
    231.64,
    247.74
    );
  --surface4: rgb(
    235.8,
    229.88,
    247.08
    );
  --surface5: rgb(
    232.6,
    226.36,
    245.76
    );
  --tab-background-active: #fff;
  --tab-container-background: rgb(232, 225, 249);
  --tab-outline-color: transparent;
  --tab-switcher-background: rgb(232, 225, 249);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(232, 225, 249), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(173, 147, 236);
  --tab-text-color: rgb(46, 38, 64);
  --tab-text-color-active: rgb(46, 38, 64);
  --tab-text-color-focused: rgb(46, 38, 64);
  --tab-text-color-focused-active: rgb(46, 38, 64);
  --tab-text-color-focused-active-current: #111;
  --tab-text-color-focused-highlighted: rgb(100, 60, 195);
  --table-add-button-border-color: #fff;
  --table-border-color: #fff;
  --table-drag-handle-background-active: rgb(165, 134, 238);
  --table-drag-handle-color: rgb(46, 38, 64);
  --table-drag-handle-color-active: rgb(46, 38, 64);
  --table-header-border-color: #fff;
  --table-header-color: #111;
  --table-selection-border-color: rgb(165, 134, 238);
  --tag-color: rgb(100, 60, 195);
  --tag-color-hover: rgb(100, 60, 195);
  --tertiary: #7C5264;
  --tertiary-container: rgb(150, 122, 214);
  --text-accent: rgb(100, 60, 195);
  --text-accent-hover: rgb(191, 172, 236);
  --text-error: #800000;
  --text-error-hover: #990000;
  --text-faint: rgb(46, 38, 64);
  --text-highlight-bg: rgb(232, 225, 249);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: rgb(46, 38, 64);
  --text-muted-rgb: 136, 136, 136;
  --text-normal: #111;
  --text-on-accent: rgb(46, 38, 64);
  --text-selection: rgb(195, 182, 226);
  --titlebar-background: rgb(232, 225, 249);
  --titlebar-background-focused: rgb(
    237.4,
    231.64,
    247.74
    );
  --titlebar-border-color: #fff;
  --titlebar-text-color: rgb(46, 38, 64);
  --titlebar-text-color-focused: #111;
  --tooltip-color: white;
  --vault-profile-color: #111;
  --vault-profile-color-hover: #111;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(17, 17, 17);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(17, 17, 17);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(17, 17, 17);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(17, 17, 17);
}

body div#quartz-root {
  background-color: rgb(232, 225, 249);
  color: rgb(17, 17, 17);
}`,
    typography: `body .page article p > b, b {
  color: rgb(28, 27, 30);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(28, 27, 30) none 0px;
  text-decoration: rgb(28, 27, 30);
  text-decoration-color: rgb(28, 27, 30);
}

body .page article p > em, em {
  color: rgb(28, 27, 30);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(28, 27, 30) none 0px;
  text-decoration: rgb(28, 27, 30);
  text-decoration-color: rgb(28, 27, 30);
}

body .page article p > i, i {
  color: rgb(28, 27, 30);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(28, 27, 30) none 0px;
  text-decoration: rgb(28, 27, 30);
  text-decoration-color: rgb(28, 27, 30);
}

body .page article p > strong, strong {
  color: rgb(28, 27, 30);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(28, 27, 30) none 0px;
  text-decoration: rgb(28, 27, 30);
  text-decoration-color: rgb(28, 27, 30);
}

body .text-highlight {
  background-color: rgb(232, 225, 249);
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body del {
  color: rgb(28, 27, 30);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(28, 27, 30) none 0px;
  text-decoration: line-through rgb(28, 27, 30);
  text-decoration-color: rgb(28, 27, 30);
}

body p {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 38, 64) none 0px;
  text-decoration: rgb(46, 38, 64);
  text-decoration-color: rgb(46, 38, 64);
}`,
    links: `body a.external, footer a {
  color: rgb(101, 60, 195);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(101, 60, 195) none 0px;
  text-decoration: underline rgb(101, 60, 195);
  text-decoration-color: rgb(101, 60, 195);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(101, 60, 195);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(101, 60, 195) none 0px;
  text-decoration: rgb(101, 60, 195);
  text-decoration-color: rgb(101, 60, 195);
}

body a.internal.broken {
  color: rgb(101, 60, 195);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(101, 60, 195) none 0px;
  text-decoration: rgb(101, 60, 195);
  text-decoration-color: rgb(101, 60, 195);
}`,
    lists: `body dd {
  color: rgb(17, 17, 17);
}

body dt {
  color: rgb(17, 17, 17);
}

body ol > li {
  color: rgb(17, 17, 17);
}

body ol.overflow {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

body ul > li {
  color: rgb(17, 17, 17);
}

body ul.overflow {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(46, 38, 64);
  text-decoration: rgb(46, 38, 64);
}

body blockquote {
  background-color: rgb(232, 225, 249);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

body table {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 132.125px;
}

body td {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 3px;
  color: rgb(28, 27, 30);
  padding-bottom: 1px;
  padding-top: 1px;
}

body th {
  background-color: rgb(232, 225, 249);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-width: 3px;
  color: rgb(46, 38, 64);
}

body tr {
  border-top-color: rgb(237, 232, 248);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    code: `body code {
  border-bottom-color: rgb(162, 138, 219);
  border-left-color: rgb(162, 138, 219);
  border-right-color: rgb(162, 138, 219);
  border-top-color: rgb(162, 138, 219);
  color: rgb(162, 138, 219);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(232, 225, 249);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(232, 225, 249);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(46, 38, 64);
  font-family: "??", "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body pre > code, pre:has(> code) {
  background-color: rgb(232, 225, 249);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre:has(> code) {
  background-color: rgb(232, 225, 249);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `body audio {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

body figcaption {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

body img {
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

body video {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}`,
    embeds: `body .file-embed {
  background-color: rgb(247, 242, 252);
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
}

body .footnotes {
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

body .transclude {
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

body .transclude-inner {
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(17, 17, 17);
  border-left-width: 0px;
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(46, 38, 64);
  text-decoration: line-through rgb(46, 38, 64);
  text-decoration-color: rgb(46, 38, 64);
}

body input[type=checkbox] {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
}

body li.task-list-item[data-task='!'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='*'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='-'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='/'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='>'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='?'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='I'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='S'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='b'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='c'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='d'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='f'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='i'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='k'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='l'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='p'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='u'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body li.task-list-item[data-task='w'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(17, 17, 17);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > * {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(17, 17, 17);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(17, 17, 17);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(17, 17, 17);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(232, 225, 249);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(17, 17, 17);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(101, 60, 195);
}

body h1 {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(209, 197, 237);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(209, 197, 237);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body ::-webkit-scrollbar {
  background: rgb(232, 225, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 225, 249);
}

body ::-webkit-scrollbar-corner {
  background: rgb(232, 225, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 225, 249);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(232, 225, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 225, 249);
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(232, 225, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 225, 249);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(232, 225, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 225, 249);
}

body ::-webkit-scrollbar-track {
  background: rgb(232, 225, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 225, 249);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(46, 38, 64);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(46, 38, 64);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(46, 38, 64);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: rgb(46, 38, 64);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(46, 38, 64);
  text-decoration: rgb(46, 38, 64);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(17, 17, 17);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(46, 38, 64);
  text-decoration: rgb(46, 38, 64);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

body li.section-li > .section .meta {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(46, 38, 64);
  text-decoration: rgb(46, 38, 64);
}

body ul.section-ul {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: rgb(46, 38, 64);
}

body .darkmode svg {
  color: rgb(46, 38, 64);
  stroke: rgb(46, 38, 64);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: rgb(46, 38, 64);
}

body .breadcrumb-element p {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

body .metadata {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(46, 38, 64);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: rgb(46, 38, 64);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(17, 17, 17);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(17, 17, 17);
  text-decoration: underline dotted rgb(17, 17, 17);
}

body details {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

body input[type=text] {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(247, 242, 252);
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
  font-family: "??", "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

body sub {
  color: rgb(17, 17, 17);
}

body summary {
  color: rgb(17, 17, 17);
}

body sup {
  color: rgb(17, 17, 17);
}`,
  },
};
