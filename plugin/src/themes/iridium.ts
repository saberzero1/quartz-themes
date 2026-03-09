import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "iridium",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: rgb(0, 0, 0);
  --background-modifier-border: rgb(51, 47, 60);
  --background-modifier-border-focus: rgb(80, 74, 94);
  --background-modifier-border-hover: rgb(61, 56, 71);
  --background-modifier-form-field: rgb(29, 27, 34);
  --background-modifier-form-field-hover: rgb(29, 27, 34);
  --background-modifier-hover: rgb(0, 0, 0);
  --background-primary: rgb(29, 27, 34);
  --background-primary-alt: rgb(34, 31, 40);
  --background-secondary: rgb(34, 31, 40);
  --background-secondary-alt: rgb(51, 47, 60);
  --bases-cards-background: rgb(29, 27, 34);
  --bases-cards-cover-background: rgb(34, 31, 40);
  --bases-cards-shadow: 0 0 0 1px rgb(0, 0, 0);
  --bases-cards-shadow-hover: 0 0 0 1px hsl(from hsl(258 12% calc(12% + 1 * 11%)) h s calc(l + 4 * 1));
  --bases-embed-border-color: rgb(0, 0, 0);
  --bases-embed-border-radius: 7px;
  --bases-embed-radius: 7px;
  --bases-group-heading-property-color: rgb(179, 179, 179);
  --bases-table-border-color: rgb(0, 0, 0);
  --bases-table-cell-background-active: rgb(29, 27, 34);
  --bases-table-cell-background-disabled: rgb(34, 31, 40);
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(80, 74, 94);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-group-background: rgb(34, 31, 40);
  --bases-table-header-background: rgb(29, 27, 34);
  --bases-table-header-background-hover: rgb(0, 0, 0);
  --bases-table-header-color: rgb(217, 217, 217);
  --bases-table-header-weight: 600;
  --bases-table-summary-background: rgb(29, 27, 34);
  --bases-table-summary-background-hover: rgb(0, 0, 0);
  --blockquote-background-color: rgba(138, 92, 245, 0.1);
  --blockquote-border-color: rgb(138, 92, 245);
  --blur-background: color-mix(in srgb, rgb(29, 27, 34) 65%, transparent) linear-gradient(rgb(29, 27, 34), color-mix(in srgb, rgb(29, 27, 34) 65%, transparent));
  --bold-modifier: 300;
  --bold-weight: 700;
  --callout-border-width: 1px;
  --callout-content-padding: 1em;
  --callout-padding: 0;
  --callout-radius: 7px;
  --callout-title-padding: 0.5em 1em;
  --callout-title-weight: 700;
  --canvas-background: rgb(29, 27, 34);
  --canvas-card-label-color: rgb(102, 102, 102);
  --canvas-dot-pattern: rgb(51, 47, 60);
  --caret-color: rgb(217, 217, 217);
  --checkbox-border-color: rgb(138, 92, 245);
  --checkbox-border-color-hover: oklch(from rgb(138, 92, 245) calc(l + 0.1) c h);
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-color-hover: oklch(from rgb(138, 92, 245) calc(l + 0.1) c h);
  --checkbox-marker-color: rgb(29, 27, 34);
  --checkbox-radius: 50%;
  --checklist-done-color: rgb(217, 217, 217);
  --checklist-done-decoration: none;
  --code-background: rgb(34, 31, 40);
  --code-border-color: rgb(0, 0, 0);
  --code-border-width: 1px;
  --code-bracket-background: rgb(0, 0, 0);
  --code-comment: rgb(102, 102, 102);
  --code-normal: rgb(217, 217, 217);
  --code-punctuation: rgb(179, 179, 179);
  --code-radius: 7px;
  --collapse-icon-color: rgb(138, 92, 245);
  --collapse-icon-color-collapsed: oklch(from rgb(138, 92, 245) calc(l + 0.1) c h);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
  --color-base-00: rgb(29, 27, 34);
  --color-base-05: rgb(32, 29, 37);
  --color-base-10: rgb(34, 31, 40);
  --color-base-100: rgb(215, 212, 221);
  --color-base-20: rgb(36, 34, 43);
  --color-base-25: rgb(39, 36, 46);
  --color-base-30: rgb(51, 47, 60);
  --color-base-35: rgb(61, 56, 71);
  --color-base-40: rgb(80, 74, 94);
  --color-base-50: rgb(97, 90, 114);
  --color-base-60: rgb(148, 141, 165);
  --color-base-70: rgb(175, 169, 188);
  --divider-color: rgb(51, 47, 60);
  --divider-color-hover: rgb(138, 92, 245);
  --dropdown-background: rgb(29, 27, 34);
  --dropdown-background-hover: rgb(49, 45, 57);
  --embed-block-shadow-hover: none;
  --embed-border-bottom: 1px solid rgb(0, 0, 0);
  --embed-border-end: 1px solid rgb(0, 0, 0);
  --embed-border-start: 1px solid rgb(0, 0, 0);
  --embed-border-top: 1px solid rgb(0, 0, 0);
  --embed-padding: 0;
  --file-header-background: rgb(29, 27, 34);
  --file-header-background-focused: rgb(29, 27, 34);
  --file-header-border: 0;
  --flair-background: rgb(29, 27, 34);
  --flair-color: rgb(217, 217, 217);
  --footnote-divider-color: rgb(51, 47, 60);
  --footnote-id-color: rgb(179, 179, 179);
  --footnote-id-color-no-occurrences: rgb(102, 102, 102);
  --footnote-input-background-active: rgb(0, 0, 0);
  --frame-right-space: 81px;
  --graph-line: rgb(61, 56, 71);
  --graph-node: rgb(175, 169, 188);
  --graph-node-focused: rgb(138, 92, 245);
  --graph-node-unresolved: rgb(97, 90, 114);
  --graph-text: rgb(217, 217, 217);
  --h1-letter-spacing: 0;
  --h1-line-height: 1.5;
  --h1-size: 1.5em;
  --h1-weight: 600;
  --h2-letter-spacing: 0;
  --h2-line-height: 1.5;
  --h2-size: 1.4em;
  --h2-weight: 600;
  --h3-letter-spacing: 0;
  --h3-line-height: 1.5;
  --h3-size: 1.3em;
  --h3-weight: 600;
  --h4-letter-spacing: 0;
  --h4-line-height: 1.5;
  --h4-size: 1.2em;
  --h4-weight: 600;
  --h5-letter-spacing: 0;
  --h5-size: 1.1em;
  --h5-weight: 600;
  --h6-letter-spacing: 0;
  --heading-formatting: rgb(102, 102, 102);
  --heading-spacing: 1.5rem;
  --hr-color: rgb(0, 0, 0);
  --i-0: rgb(32, 29, 37);
  --i-1: rgb(34, 31, 40);
  --i-2: rgb(39, 36, 46);
  --i-3: rgb(49, 45, 57);
  --i-4: rgb(53, 49, 63);
  --i-5: rgb(58, 54, 69);
  --i-6: rgb(63, 58, 74);
  --i-7: rgb(68, 63, 80);
  --i-8: rgb(73, 67, 86);
  --i-active-line-color: rgb(138, 92, 245);
  --i-active-line-highlight: oklch(from rgb(138, 92, 245) 0.65 c h / 0.1);
  --i-active-line-highlight-inactive: oklch(from oklch(from rgb(138, 92, 245) 0.65 c h / 0.1) l c h / 0.05);
  --i-border-radius: 8px;
  --i-bullet-color: rgb(138, 92, 245);
  --i-bullet-color-collapsed: oklch(from rgb(138, 92, 245) 0.8 0.05 h);
  --i-bullet-color-hover: oklch(from rgb(138, 92, 245) calc(l + 0.1) c h);
  --i-card-layout-border: rgb(58, 54, 69);
  --i-card-radius: 8px;
  --i-card-radius-macos: 10px;
  --i-dk-border-l: 11%;
  --i-dk-custom-layout-s: 12%;
  --i-dk-folder-bg-accent: rgb(138, 92, 245);
  --i-dk-folder-name-accent: rgb(138, 92, 245);
  --i-dk-h1-h: 0;
  --i-dk-h6-h: 300;
  --i-dk-heading-accent: rgb(138, 92, 245);
  --i-dk-heading-highlighted-padding: 0;
  --i-dk-l: 12%;
  --i-dk-l-multiplier: 1;
  --i-dk-layout-border-l: 8%;
  --i-dk-layout-l: 8%;
  --i-dk-layout-s: 12%;
  --i-dk-s: 12%;
  --i-dk-text-l-multiplier: 1;
  --i-editor-border: rgb(0, 0, 0);
  --i-editor-border-hover: hsl(from hsl(258 12% calc(12% + 1 * 11%)) h s calc(l + 4 * 1));
  --i-h1-size: 1.5em;
  --i-h2-size: 1.4em;
  --i-h3-size: 1.3em;
  --i-h4-size: 1.2em;
  --i-h5-size: 1.1em;
  --i-h6-size: 1em;
  --i-hr-style: solid;
  --i-image-border-color: rgb(0, 0, 0);
  --i-image-border-style: solid;
  --i-image-border-width: 0;
  --i-image-padding: 0;
  --i-layout-border-color: rgb(68, 63, 80);
  --i-layout-color: rgb(49, 45, 57);
  --i-link-bg-hover: rgb(49, 45, 57);
  --i-link-underline-color: oklch(from oklch(from rgb(138, 92, 245) 0.8 0.05 h) l c h / 0.35);
  --i-link-underline-offset: 0.1em;
  --i-link-underline-opacity-multiplier: 1;
  --i-link-underline-style: solid;
  --i-lt-custom-layout-s: 25%;
  --i-lt-folder-bg-accent: rgb(138, 92, 245);
  --i-lt-folder-name-accent: rgb(138, 92, 245);
  --i-lt-h1-h: 0;
  --i-lt-h6-h: 300;
  --i-lt-heading-accent: rgb(138, 92, 245);
  --i-lt-heading-highlighted-padding: 0;
  --i-lt-layout-border-l: 8%;
  --i-lt-layout-l: 12%;
  --i-pattern-color: hsl(from rgb(34, 31, 40) h s 15%);
  --i-pattern-dk-l: 3%;
  --i-pattern-height: 10px;
  --i-pattern-line-width: 1px;
  --i-pattern-lt-l: 3%;
  --i-pattern-width: 10px;
  --i-properties-s: 12%;
  --i-s: 12%;
  --i-scrollbar-color: rgb(68, 63, 80);
  --i-scrollbar-color-active: rgb(73, 67, 86);
  --i-scrollbar-thumb-size: 4px;
  --i-scrollbar-track-size: 9px;
  --i-slider-thumb-shadow: 0 0 0 5px rgb(127, 118, 147);
  --i-spacing-below-headings: 0.3rem;
  --i-translucent-floating-nav-opacity: 92%;
  --icon-color: rgb(217, 217, 217);
  --icon-color-active: rgb(138, 92, 245);
  --icon-color-focused: rgb(217, 217, 217);
  --icon-color-hover: rgb(217, 217, 217);
  --icon-opacity: 1;
  --indentation-guide-color: rgb(0, 0, 0);
  --indentation-guide-color-active: hsl(from hsl(258 12% calc(12% + 1 * 11%)) h s calc(l + 4 * 1));
  --inline-title-line-height: 1.5;
  --inline-title-size: 1.5em;
  --inline-title-weight: 600;
  --input-date-separator: rgb(102, 102, 102);
  --input-placeholder-color: rgb(102, 102, 102);
  --input-shadow: inset 0 0 0 1px rgb(51, 47, 60);
  --input-shadow-hover: inset 0 0 0 1px rgb(61, 56, 71);
  --interactive-accent: rgb(138, 92, 245);
  --interactive-accent-hover: oklch(from rgb(138, 92, 245) calc(l + 0.1) c h);
  --interactive-hover: rgb(49, 45, 57);
  --interactive-normal: rgb(29, 27, 34);
  --link-color: oklch(from rgb(138, 92, 245) 0.8 0.05 h);
  --link-color-hover: oklch(from rgb(138, 92, 245) 0.8 0.05 h);
  --link-external-color: oklch(from rgb(138, 92, 245) 0.8 0.05 h);
  --link-external-color-hover: oklch(from rgb(138, 92, 245) 0.8 0.05 h);
  --link-unresolved-color: oklch(from rgb(138, 92, 245) 0.8 0.05 h);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-marker-color: rgb(138, 92, 245);
  --list-marker-color-collapsed: oklch(from rgb(138, 92, 245) 0.8 0.05 h);
  --list-marker-color-hover: oklch(from rgb(138, 92, 245) calc(l + 0.1) c h);
  --menu-background: rgb(34, 31, 40);
  --menu-border-color: rgb(61, 56, 71);
  --metadata-border-color: rgb(51, 47, 60);
  --metadata-divider-color: rgb(51, 47, 60);
  --metadata-input-background-active: rgb(0, 0, 0);
  --metadata-input-height: 28px;
  --metadata-input-text-color: rgb(217, 217, 217);
  --metadata-label-background-active: rgb(0, 0, 0);
  --metadata-label-text-color: rgb(179, 179, 179);
  --metadata-label-text-color-hover: rgb(179, 179, 179);
  --metadata-padding: 0;
  --metadata-property-background-active: rgb(0, 0, 0);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(80, 74, 94);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(61, 56, 71);
  --modal-background: rgb(29, 27, 34);
  --modal-border-color: rgb(61, 56, 71);
  --nav-collapse-icon-color: rgb(138, 92, 245);
  --nav-collapse-icon-color-collapsed: rgb(102, 102, 102);
  --nav-heading-color: rgb(217, 217, 217);
  --nav-heading-color-collapsed: rgb(102, 102, 102);
  --nav-heading-color-collapsed-hover: rgb(179, 179, 179);
  --nav-heading-color-hover: rgb(217, 217, 217);
  --nav-indentation-guide-color: rgb(53, 49, 63);
  --nav-item-background-active: rgb(0, 0, 0);
  --nav-item-background-hover: rgb(0, 0, 0);
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color: rgb(217, 217, 217);
  --nav-item-color-active: rgb(217, 217, 217);
  --nav-item-color-highlighted: oklch(from rgb(138, 92, 245) 0.8 0.05 h);
  --nav-item-color-hover: rgb(217, 217, 217);
  --nav-item-color-selected: rgb(217, 217, 217);
  --nav-tag-color: rgb(102, 102, 102);
  --nav-tag-color-active: rgb(179, 179, 179);
  --nav-tag-color-hover: rgb(179, 179, 179);
  --nn-theme-file-selected-bg: rgb(0, 0, 0);
  --nn-theme-file-tag-bg: rgba(138, 92, 245, 0.25);
  --nn-theme-file-tag-border-radius: 4px;
  --nn-theme-file-tag-color: rgb(217, 217, 217);
  --nn-theme-mobile-toolbar-button-active-icon-color: rgb(138, 92, 245);
  --nn-theme-mobile-toolbar-button-icon-color: rgb(138, 92, 245);
  --nn-theme-nav-bg: rgb(29, 27, 34);
  --nn-theme-navitem-chevron-color: rgb(138, 92, 245);
  --nn-theme-navitem-selected-bg: rgb(0, 0, 0);
  --p-spacing: 1.5rem;
  --pdf-background: rgb(29, 27, 34);
  --pdf-page-background: rgb(29, 27, 34);
  --pdf-shadow: 0 0 0 1px rgb(51, 47, 60);
  --pdf-sidebar-background: rgb(29, 27, 34);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(51, 47, 60);
  --pill-border-color: rgb(51, 47, 60);
  --pill-border-color-hover: rgb(61, 56, 71);
  --pill-color: rgb(179, 179, 179);
  --pill-color-hover: rgb(217, 217, 217);
  --pill-color-remove: rgb(102, 102, 102);
  --pill-color-remove-hover: oklch(from rgb(138, 92, 245) 0.8 0.05 h);
  --prompt-background: rgb(29, 27, 34);
  --prompt-border-color: rgb(61, 56, 71);
  --raised-background: color-mix(in srgb, rgb(29, 27, 34) 65%, transparent) linear-gradient(rgb(29, 27, 34), color-mix(in srgb, rgb(29, 27, 34) 65%, transparent));
  --ribbon-background: rgb(49, 45, 57);
  --ribbon-background-collapsed: rgb(49, 45, 57);
  --ribbon-padding: 8px 0 12px;
  --search-clear-button-color: rgb(179, 179, 179);
  --search-icon-color: rgb(179, 179, 179);
  --search-result-background: rgb(29, 27, 34);
  --setting-group-heading-color: rgb(217, 217, 217);
  --setting-items-background: rgb(29, 27, 34);
  --setting-items-border-color: rgb(51, 47, 60);
  --setting-items-padding: 0 0 20px 0;
  --setting-items-radius: 0;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: rgb(61, 56, 71);
  --slider-track-background: rgb(51, 47, 60);
  --status-bar-background: rgb(32, 29, 37);
  --status-bar-border-color: rgb(51, 47, 60);
  --status-bar-text-color: rgb(217, 217, 217);
  --suggestion-background: rgb(29, 27, 34);
  --tab-background-active: rgb(29, 27, 34);
  --tab-container-background: rgb(32, 29, 37);
  --tab-divider-color: rgb(61, 56, 71);
  --tab-outline-color: rgb(51, 47, 60);
  --tab-switcher-background: rgb(34, 31, 40);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(34, 31, 40), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color: rgb(217, 217, 217);
  --tab-text-color-active: rgb(217, 217, 217);
  --tab-text-color-focused: rgb(217, 217, 217);
  --tab-text-color-focused-active: rgb(217, 217, 217);
  --tab-text-color-focused-active-current: rgb(217, 217, 217);
  --tab-text-color-focused-highlighted: oklch(from rgb(138, 92, 245) 0.8 0.05 h);
  --table-add-button-border-color: rgb(0, 0, 0);
  --table-border-color: rgb(0, 0, 0);
  --table-column-min-width: 4ch;
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-drag-handle-color: rgb(138, 92, 245);
  --table-header-background: rgb(39, 36, 46);
  --table-header-background-hover: rgb(39, 36, 46);
  --table-header-border-color: rgb(0, 0, 0);
  --table-header-color: rgb(217, 217, 217);
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(138, 92, 245);
  --table-selection-border-radius: 0;
  --tag-background: rgba(138, 92, 245, 0.25);
  --tag-background-hover: rgba(138, 92, 245, 0.25);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(217, 217, 217);
  --tag-color-hover: rgb(217, 217, 217);
  --tag-padding-x: 0.5em;
  --tag-radius: 4px;
  --text-accent: oklch(from rgb(138, 92, 245) 0.8 0.05 h);
  --text-accent-hover: oklch(from oklch(from rgb(138, 92, 245) 0.8 0.05 h) calc(l + 0.15) c h);
  --text-faint: rgb(102, 102, 102);
  --text-muted: rgb(179, 179, 179);
  --text-normal: rgb(217, 217, 217);
  --text-selection: rgba(138, 92, 245, 0.33);
  --titlebar-background: rgb(32, 29, 37);
  --titlebar-background-focused: rgb(32, 29, 37);
  --titlebar-border-color: rgb(51, 47, 60);
  --titlebar-text-color: rgb(179, 179, 179);
  --titlebar-text-color-focused: rgb(217, 217, 217);
  --toggle-thumb-color: rgb(217, 217, 217);
  --traffic-lights-offset-y: 58px;
  --vault-profile-color: rgb(217, 217, 217);
  --vault-profile-color-hover: rgb(217, 217, 217);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 45, 57);
  color: rgb(217, 217, 217);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(29, 27, 34);
  color: rgb(217, 217, 217);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 27, 34);
  color: rgb(217, 217, 217);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(49, 45, 57);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(217, 217, 217);
}

body div#quartz-root {
  background-color: rgb(29, 27, 34);
  color: rgb(217, 217, 217);
}`,
    typography: `body .page article p > b, b {
  color: rgb(217, 217, 217);
  font-weight: 700;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body .page article p > em, em {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body .page article p > i, i {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body .page article p > strong, strong {
  color: rgb(217, 217, 217);
  font-weight: 700;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body .text-highlight {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body del {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: line-through rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}`,
    links: `body a.external, footer a {
  color: oklch(0.8 0.05 292.488);
  outline: oklch(0.8 0.05 292.488) none 0px;
  text-decoration: underline oklch(0.8 0.05 292.488 / 0.35);
  text-decoration-color: oklch(0.8 0.05 292.488 / 0.35);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.8 0.05 292.488);
  outline: oklch(0.8 0.05 292.488) none 0px;
  text-decoration: underline oklch(0.8 0.05 292.488 / 0.35);
  text-decoration-color: oklch(0.8 0.05 292.488 / 0.35);
}

body a.internal.broken {
  color: oklch(0.8 0.05 292.488);
  outline: oklch(0.8 0.05 292.488) none 0px;
  text-decoration: oklch(0.8 0.05 292.488);
  text-decoration-color: oklch(0.8 0.05 292.488);
}`,
    lists: `body dd {
  color: rgb(217, 217, 217);
}

body dt {
  color: rgb(217, 217, 217);
}

body ol > li {
  color: rgb(217, 217, 217);
}

body ol.overflow {
  background-color: rgb(29, 27, 34);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body ul > li {
  color: rgb(217, 217, 217);
}

body ul.overflow {
  background-color: rgb(29, 27, 34);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(138, 92, 245, 0.1);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body table {
  color: rgb(217, 217, 217);
  margin-bottom: 16px;
}

body td {
  border-bottom-color: rgb(56, 52, 66);
  border-left-color: rgb(56, 52, 66);
  border-right-color: rgb(56, 52, 66);
  border-top-color: rgb(56, 52, 66);
  color: rgb(217, 217, 217);
}

body th {
  border-bottom-color: rgb(56, 52, 66);
  border-left-color: rgb(56, 52, 66);
  border-right-color: rgb(56, 52, 66);
  border-top-color: rgb(56, 52, 66);
  color: rgb(217, 217, 217);
}

body tr {
  background-color: rgb(39, 36, 46);
}`,
    code: `body code {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(34, 31, 40);
  border-bottom-color: rgb(56, 52, 66);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 52, 66);
  border-left-width: 1px;
  border-right-color: rgb(56, 52, 66);
  border-right-width: 1px;
  border-top-color: rgb(56, 52, 66);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(34, 31, 40);
  border-bottom-color: rgb(56, 52, 66);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 52, 66);
  border-left-width: 1px;
  border-right-color: rgb(56, 52, 66);
  border-right-width: 1px;
  border-top-color: rgb(56, 52, 66);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

body pre > code, pre:has(> code) {
  background-color: rgb(34, 31, 40);
  border-bottom-color: rgb(56, 52, 66);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 52, 66);
  border-left-width: 1px;
  border-right-color: rgb(56, 52, 66);
  border-right-width: 1px;
  border-top-color: rgb(56, 52, 66);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 21px;
  padding-top: 21px;
}

body pre:has(> code) {
  background-color: rgb(34, 31, 40);
  border-bottom-color: rgb(56, 52, 66);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 52, 66);
  border-left-width: 1px;
  border-right-color: rgb(56, 52, 66);
  border-right-width: 1px;
  border-top-color: rgb(56, 52, 66);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 21px;
  padding-top: 21px;
}`,
    images: `body audio {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body figcaption {
  color: rgb(217, 217, 217);
}

body figure {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body img {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body video {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    embeds: `body .file-embed {
  background-color: rgb(34, 31, 40);
}

body .footnotes {
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body .transclude {
  border-bottom-color: rgb(56, 52, 66);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 52, 66);
  border-left-width: 1px;
  border-right-color: rgb(56, 52, 66);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(56, 52, 66);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .transclude-inner {
  border-bottom-color: rgb(56, 52, 66);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 52, 66);
  border-left-width: 1px;
  border-right-color: rgb(56, 52, 66);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(56, 52, 66);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='*'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='-'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='/'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='>'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='?'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='I'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='S'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='b'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='c'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='d'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='f'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='i'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='k'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='l'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='p'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='u'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body li.task-list-item[data-task='w'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}`,
    callouts: `body .callout .callout-title {
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.179083 295.408 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.179083 295.408 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.179083 295.408 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.179083 295.408 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.216867 23.8101 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.0000347714 23.8628 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.0000347714 23.8628 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.0000347714 23.8628 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.0000347714 23.8628 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.180995 149.613 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.180995 149.613 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.180995 149.613 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.180995 149.613 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.118878 193.753 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.140751 64.0934 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(29, 27, 34);
  border-bottom-color: rgb(51, 47, 60);
  border-left-color: rgb(51, 47, 60);
  border-right-color: rgb(51, 47, 60);
  border-top-color: rgb(51, 47, 60);
  color: rgb(217, 217, 217);
}

body .search > .search-container > .search-space {
  background-color: rgb(29, 27, 34);
  border-bottom-color: rgb(61, 56, 71);
  border-left-color: rgb(61, 56, 71);
  border-right-color: rgb(61, 56, 71);
  border-top-color: rgb(61, 56, 71);
}

body .search > .search-container > .search-space > * {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(217, 217, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(217, 217, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(70, 65, 83, 0.49);
  color: rgb(217, 217, 217);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(61, 56, 71);
  border-left-color: rgb(61, 56, 71);
  border-right-color: rgb(61, 56, 71);
  border-top-color: rgb(61, 56, 71);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 31, 40);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(70, 65, 83, 0.49);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(70, 65, 83, 0.49);
  color: rgb(217, 217, 217);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 92, 245, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body a.internal.tag-link::before {
  color: rgb(217, 217, 217);
}

body h1 {
  color: oklch(0.8 0.08 292.488);
}

body h2 {
  color: oklch(0.8 0.08 352.488);
}

body h2.page-title, h2.page-title a {
  color: rgb(217, 217, 217);
}

body h3 {
  color: oklch(0.8 0.08 52.4879);
}

body h4 {
  color: oklch(0.8 0.08 112.488);
}

body h5 {
  color: oklch(0.8 0.08 172.488);
}

body h6 {
  color: oklch(0.8 0.08 232.488);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217558 257.504 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(29, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 34);
}

body ::-webkit-scrollbar-corner {
  background: rgb(29, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 34);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(29, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 34);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 34);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 34);
}

body ::-webkit-scrollbar-track {
  background: rgb(29, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 27, 34);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(70, 65, 83, 0.49);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}`,
    footer: `body footer {
  background-color: rgb(32, 29, 37);
  border-bottom-color: rgb(51, 47, 60);
  border-left-color: rgb(51, 47, 60);
  border-right-color: rgb(51, 47, 60);
  border-top-color: rgb(51, 47, 60);
  color: rgb(217, 217, 217);
}

body footer ul li a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(217, 217, 217);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(217, 217, 217);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body li.section-li > .section .meta {
  color: rgb(217, 217, 217);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}

body ul.section-ul {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body .darkmode svg {
  color: rgb(217, 217, 217);
  stroke: rgb(217, 217, 217);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: oklch(0.8 0.05 292.488);
  border-left-color: oklch(0.8 0.05 292.488);
  border-right-color: oklch(0.8 0.05 292.488);
  border-top-color: oklch(0.8 0.05 292.488);
  color: oklch(0.8 0.05 292.488);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body .metadata {
  border-bottom-color: rgb(51, 47, 60);
  border-left-color: rgb(51, 47, 60);
  border-right-color: rgb(51, 47, 60);
  border-top-color: rgb(51, 47, 60);
  margin-bottom: 24px;
  padding-bottom: 0px;
  padding-top: 12px;
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.2856 0.264 0.336);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.2856 0.264 0.336);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.2856 0.264 0.336);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.2856 0.264 0.336);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .navigation-progress {
  background-color: rgb(32, 29, 37);
}

body .page-header h2.page-title {
  color: rgb(217, 217, 217);
}

body abbr {
  color: rgb(217, 217, 217);
  text-decoration: underline dotted rgb(217, 217, 217);
}

body details {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body input[type=text] {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
  padding-left: 0px;
}

body kbd {
  background-color: rgb(34, 31, 40);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body progress {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body sub {
  color: rgb(217, 217, 217);
}

body summary {
  color: rgb(217, 217, 217);
}

body sup {
  color: rgb(217, 217, 217);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgb(0, 0, 0);
  --background-modifier-border: rgb(221, 217, 232);
  --background-modifier-border-focus: rgb(182, 172, 205);
  --background-modifier-border-hover: rgb(207, 201, 222);
  --background-modifier-hover: rgb(0, 0, 0);
  --background-primary-alt: rgb(249, 249, 251);
  --background-secondary: rgb(247, 245, 249);
  --background-secondary-alt: rgb(252, 252, 253);
  --bases-cards-cover-background: rgb(249, 249, 251);
  --bases-cards-shadow: 0 0 0 1px rgb(0, 0, 0);
  --bases-cards-shadow-hover: 0 0 0 1px hsl(from hsl(258 25% calc(100% - 1 * 14%)) h s calc(l - 5 * 1));
  --bases-embed-border-color: rgb(0, 0, 0);
  --bases-embed-border-radius: 7px;
  --bases-embed-radius: 7px;
  --bases-table-border-color: rgb(0, 0, 0);
  --bases-table-cell-background-disabled: rgb(249, 249, 251);
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(182, 172, 205);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-group-background: rgb(249, 249, 251);
  --bases-table-header-background-hover: rgb(0, 0, 0);
  --bases-table-header-color: #222222;
  --bases-table-header-weight: 600;
  --bases-table-summary-background-hover: rgb(0, 0, 0);
  --blockquote-background-color: rgba(138, 92, 245, 0.1);
  --blockquote-border-color: rgb(138, 92, 245);
  --bold-modifier: 300;
  --bold-weight: 700;
  --callout-border-width: 1px;
  --callout-content-padding: 1em;
  --callout-padding: 0;
  --callout-radius: 7px;
  --callout-title-padding: 0.5em 1em;
  --callout-title-weight: 700;
  --canvas-dot-pattern: rgb(221, 217, 232);
  --checkbox-border-color: rgb(138, 92, 245);
  --checkbox-border-color-hover: oklch(from rgb(138, 92, 245) calc(l - 0.1) c h);
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-color-hover: oklch(from rgb(138, 92, 245) calc(l - 0.1) c h);
  --checkbox-radius: 50%;
  --checklist-done-color: #222222;
  --checklist-done-decoration: none;
  --code-background: transparent;
  --code-border-color: rgb(0, 0, 0);
  --code-border-width: 1px;
  --code-bracket-background: rgb(0, 0, 0);
  --code-radius: 7px;
  --collapse-icon-color: rgb(138, 92, 245);
  --collapse-icon-color-collapsed: oklch(from rgb(138, 92, 245) calc(l - 0.1) c h);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
  --color-base-05: rgb(252, 252, 253);
  --color-base-10: rgb(249, 249, 251);
  --color-base-100: rgb(30, 25, 41);
  --color-base-20: rgb(244, 242, 247);
  --color-base-25: rgb(224, 220, 234);
  --color-base-30: rgb(221, 217, 232);
  --color-base-35: rgb(207, 201, 222);
  --color-base-40: rgb(182, 172, 205);
  --color-base-50: rgb(162, 150, 192);
  --color-base-60: rgb(101, 84, 140);
  --color-base-70: rgb(83, 69, 115);
  --divider-color: rgb(221, 217, 232);
  --divider-color-hover: rgb(138, 92, 245);
  --dropdown-background-hover: rgb(238, 236, 244);
  --embed-block-shadow-hover: none;
  --embed-border-bottom: 1px solid rgb(0, 0, 0);
  --embed-border-end: 1px solid rgb(0, 0, 0);
  --embed-border-start: 1px solid rgb(0, 0, 0);
  --embed-border-top: 1px solid rgb(0, 0, 0);
  --embed-padding: 0;
  --file-header-border: 0;
  --footnote-divider-color: rgb(221, 217, 232);
  --footnote-input-background-active: rgb(0, 0, 0);
  --frame-right-space: 81px;
  --graph-line: rgb(207, 201, 222);
  --graph-node: rgb(83, 69, 115);
  --graph-node-focused: rgb(138, 92, 245);
  --graph-node-unresolved: rgb(162, 150, 192);
  --h1-letter-spacing: 0;
  --h1-line-height: 1.5;
  --h1-size: 1.5em;
  --h1-weight: 600;
  --h2-letter-spacing: 0;
  --h2-line-height: 1.5;
  --h2-size: 1.4em;
  --h2-weight: 600;
  --h3-letter-spacing: 0;
  --h3-line-height: 1.5;
  --h3-size: 1.3em;
  --h3-weight: 600;
  --h4-letter-spacing: 0;
  --h4-line-height: 1.5;
  --h4-size: 1.2em;
  --h4-weight: 600;
  --h5-letter-spacing: 0;
  --h5-size: 1.1em;
  --h5-weight: 600;
  --h6-letter-spacing: 0;
  --heading-spacing: 1.5rem;
  --hr-color: rgb(0, 0, 0);
  --i-0: rgb(249, 249, 251);
  --i-1: rgb(247, 245, 249);
  --i-2: rgb(238, 236, 244);
  --i-3: rgb(227, 223, 236);
  --i-4: rgb(221, 217, 232);
  --i-5: rgb(216, 210, 228);
  --i-6: rgb(210, 204, 224);
  --i-7: rgb(205, 198, 221);
  --i-8: rgb(199, 191, 217);
  --i-active-line-color: rgb(138, 92, 245);
  --i-active-line-highlight: oklch(from rgb(138, 92, 245) 0.65 c h / 0.1);
  --i-active-line-highlight-inactive: oklch(from oklch(from rgb(138, 92, 245) 0.65 c h / 0.1) l c h / 0.05);
  --i-border-radius: 8px;
  --i-bullet-color: rgb(138, 92, 245);
  --i-bullet-color-collapsed: oklch(from rgb(138, 92, 245) 0.45 0.1 h);
  --i-bullet-color-hover: oklch(from rgb(138, 92, 245) calc(l - 0.1) c h);
  --i-card-layout-border: rgb(205, 198, 221);
  --i-card-radius: 8px;
  --i-card-radius-macos: 10px;
  --i-dk-custom-layout-s: 12%;
  --i-dk-folder-bg-accent: rgb(138, 92, 245);
  --i-dk-folder-name-accent: rgb(138, 92, 245);
  --i-dk-h1-h: 0;
  --i-dk-h6-h: 300;
  --i-dk-heading-accent: rgb(138, 92, 245);
  --i-dk-heading-highlighted-padding: 0;
  --i-dk-layout-border-l: 8%;
  --i-dk-layout-l: 8%;
  --i-editor-border: rgb(0, 0, 0);
  --i-editor-border-hover: hsl(from hsl(258 25% calc(100% - 1 * 14%)) h s calc(l - 5 * 1));
  --i-h1-size: 1.5em;
  --i-h2-size: 1.4em;
  --i-h3-size: 1.3em;
  --i-h4-size: 1.2em;
  --i-h5-size: 1.1em;
  --i-h6-size: 1em;
  --i-hr-style: solid;
  --i-image-border-color: rgb(0, 0, 0);
  --i-image-border-style: solid;
  --i-image-border-width: 0;
  --i-image-padding: 0;
  --i-layout-border-color: rgb(199, 191, 217);
  --i-layout-color: rgb(221, 217, 232);
  --i-link-bg-hover: rgb(238, 236, 244);
  --i-link-underline-color: oklch(from oklch(from rgb(138, 92, 245) 0.45 0.1 h) l c h / 0.25);
  --i-link-underline-offset: 0.1em;
  --i-link-underline-opacity-multiplier: 1;
  --i-link-underline-style: solid;
  --i-lt-border-l: 14%;
  --i-lt-custom-layout-s: 25%;
  --i-lt-folder-bg-accent: rgb(138, 92, 245);
  --i-lt-folder-name-accent: rgb(138, 92, 245);
  --i-lt-h1-h: 0;
  --i-lt-h6-h: 300;
  --i-lt-heading-accent: rgb(138, 92, 245);
  --i-lt-heading-highlighted-padding: 0;
  --i-lt-l-multiplier: 1;
  --i-lt-layout-border-l: 8%;
  --i-lt-layout-l: 12%;
  --i-lt-layout-s: 25%;
  --i-lt-s: 25%;
  --i-pattern-color: hsl(from rgb(247, 245, 249) h s 97%);
  --i-pattern-dk-l: 3%;
  --i-pattern-height: 10px;
  --i-pattern-line-width: 1px;
  --i-pattern-lt-l: 3%;
  --i-pattern-width: 10px;
  --i-properties-s: 88%;
  --i-s: 25%;
  --i-scrollbar-color: rgb(216, 210, 228);
  --i-scrollbar-color-active: rgb(205, 198, 221);
  --i-scrollbar-thumb-size: 4px;
  --i-scrollbar-track-size: 9px;
  --i-slider-thumb-shadow: 0 0 0 5px rgb(115, 96, 159);
  --i-spacing-below-headings: 0.3rem;
  --i-translucent-floating-nav-opacity: 92%;
  --icon-color: #222222;
  --icon-color-active: rgb(138, 92, 245);
  --icon-color-hover: #222222;
  --icon-opacity: 1;
  --indentation-guide-color: rgb(0, 0, 0);
  --indentation-guide-color-active: hsl(from hsl(258 25% calc(100% - 1 * 14%)) h s calc(l - 5 * 1));
  --inline-title-line-height: 1.5;
  --inline-title-size: 1.5em;
  --inline-title-weight: 600;
  --input-shadow: inset 0 0 0 1px rgb(221, 217, 232);
  --input-shadow-hover: inset 0 0 0 1px rgb(207, 201, 222);
  --interactive-accent: rgb(138, 92, 245);
  --interactive-accent-hover: oklch(from rgb(138, 92, 245) calc(l - 0.1) c h);
  --interactive-hover: rgb(238, 236, 244);
  --link-color: oklch(from rgb(138, 92, 245) 0.45 0.1 h);
  --link-color-hover: oklch(from rgb(138, 92, 245) 0.45 0.1 h);
  --link-external-color: oklch(from rgb(138, 92, 245) 0.45 0.1 h);
  --link-external-color-hover: oklch(from rgb(138, 92, 245) 0.45 0.1 h);
  --link-unresolved-color: oklch(from rgb(138, 92, 245) 0.45 0.1 h);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-marker-color: rgb(138, 92, 245);
  --list-marker-color-collapsed: oklch(from rgb(138, 92, 245) 0.45 0.1 h);
  --list-marker-color-hover: oklch(from rgb(138, 92, 245) calc(l - 0.1) c h);
  --menu-background: rgb(247, 245, 249);
  --menu-border-color: rgb(207, 201, 222);
  --metadata-border-color: rgb(221, 217, 232);
  --metadata-divider-color: rgb(221, 217, 232);
  --metadata-input-background-active: rgb(0, 0, 0);
  --metadata-input-height: 28px;
  --metadata-label-background-active: rgb(0, 0, 0);
  --metadata-padding: 0;
  --metadata-property-background-active: rgb(0, 0, 0);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(182, 172, 205);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(207, 201, 222);
  --modal-border-color: rgb(207, 201, 222);
  --nav-collapse-icon-color: rgb(138, 92, 245);
  --nav-indentation-guide-color: rgb(221, 217, 232);
  --nav-item-background-active: rgb(0, 0, 0);
  --nav-item-background-hover: rgb(0, 0, 0);
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color: #222222;
  --nav-item-color-highlighted: oklch(from rgb(138, 92, 245) 0.45 0.1 h);
  --nn-theme-file-selected-bg: rgb(0, 0, 0);
  --nn-theme-file-tag-bg: rgba(138, 92, 245, 0.2);
  --nn-theme-file-tag-border-radius: 4px;
  --nn-theme-file-tag-color: #222222;
  --nn-theme-mobile-toolbar-button-active-icon-color: rgb(138, 92, 245);
  --nn-theme-mobile-toolbar-button-icon-color: rgb(138, 92, 245);
  --nn-theme-nav-bg: #ffffff;
  --nn-theme-navitem-chevron-color: rgb(138, 92, 245);
  --nn-theme-navitem-selected-bg: rgb(0, 0, 0);
  --p-spacing: 1.5rem;
  --pill-border-color: rgb(221, 217, 232);
  --pill-border-color-hover: rgb(207, 201, 222);
  --pill-color-remove-hover: oklch(from rgb(138, 92, 245) 0.45 0.1 h);
  --prompt-border-color: rgb(207, 201, 222);
  --ribbon-background: rgb(221, 217, 232);
  --ribbon-background-collapsed: rgb(221, 217, 232);
  --ribbon-padding: 8px 0 12px;
  --setting-items-background: #ffffff;
  --setting-items-border-color: rgb(221, 217, 232);
  --setting-items-padding: 0 0 20px 0;
  --setting-items-radius: 0;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: rgb(207, 201, 222);
  --slider-track-background: rgb(221, 217, 232);
  --status-bar-background: rgb(249, 249, 251);
  --status-bar-border-color: rgb(221, 217, 232);
  --status-bar-text-color: #222222;
  --tab-container-background: rgb(249, 249, 251);
  --tab-divider-color: rgb(207, 201, 222);
  --tab-outline-color: rgb(221, 217, 232);
  --tab-switcher-background: rgb(247, 245, 249);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(247, 245, 249), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color: #222222;
  --tab-text-color-active: #222222;
  --tab-text-color-focused: #222222;
  --tab-text-color-focused-active: #222222;
  --tab-text-color-focused-highlighted: oklch(from rgb(138, 92, 245) 0.45 0.1 h);
  --table-add-button-border-color: rgb(0, 0, 0);
  --table-border-color: rgb(0, 0, 0);
  --table-column-min-width: 4ch;
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-drag-handle-color: rgb(138, 92, 245);
  --table-header-background: rgb(238, 236, 244);
  --table-header-background-hover: rgb(238, 236, 244);
  --table-header-border-color: rgb(0, 0, 0);
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(138, 92, 245);
  --table-selection-border-radius: 0;
  --tag-background: rgba(138, 92, 245, 0.2);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: #222222;
  --tag-color-hover: #222222;
  --tag-padding-x: 0.5em;
  --tag-radius: 4px;
  --text-accent: oklch(from rgb(138, 92, 245) 0.45 0.1 h);
  --text-accent-hover: oklch(from oklch(from rgb(138, 92, 245) 0.45 0.1 h) calc(l - 0.15) c h);
  --text-selection: rgba(138, 92, 245, 0.2);
  --titlebar-background: rgb(249, 249, 251);
  --titlebar-background-focused: rgb(249, 249, 251);
  --titlebar-border-color: rgb(221, 217, 232);
  --traffic-lights-offset-y: 58px;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(221, 217, 232);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(221, 217, 232);
  border-left-color: rgba(0, 0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  font-weight: 700;
}

body .page article p > strong, strong {
  font-weight: 700;
}`,
    links: `body a.external, footer a {
  color: oklch(0.45 0.1 292.488);
  outline: oklch(0.45 0.1 292.488) none 0px;
  text-decoration: underline oklch(0.45 0.1 292.488 / 0.25);
  text-decoration-color: oklch(0.45 0.1 292.488 / 0.25);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.45 0.1 292.488);
  outline: oklch(0.45 0.1 292.488) none 0px;
  text-decoration: underline oklch(0.45 0.1 292.488 / 0.25);
  text-decoration-color: oklch(0.45 0.1 292.488 / 0.25);
}

body a.internal.broken {
  color: oklch(0.45 0.1 292.488);
  outline: oklch(0.45 0.1 292.488) none 0px;
  text-decoration: oklch(0.45 0.1 292.488);
  text-decoration-color: oklch(0.45 0.1 292.488);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(138, 92, 245, 0.1);
}`,
    tables: `body table {
  margin-bottom: 16px;
}

body td {
  border-bottom-color: rgb(216, 210, 228);
  border-left-color: rgb(216, 210, 228);
  border-right-color: rgb(216, 210, 228);
  border-top-color: rgb(216, 210, 228);
}

body th {
  border-bottom-color: rgb(216, 210, 228);
  border-left-color: rgb(216, 210, 228);
  border-right-color: rgb(216, 210, 228);
  border-top-color: rgb(216, 210, 228);
}

body tr {
  background-color: rgb(238, 236, 244);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 210, 228);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 210, 228);
  border-left-width: 1px;
  border-right-color: rgb(216, 210, 228);
  border-right-width: 1px;
  border-top-color: rgb(216, 210, 228);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 210, 228);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 210, 228);
  border-left-width: 1px;
  border-right-color: rgb(216, 210, 228);
  border-right-width: 1px;
  border-top-color: rgb(216, 210, 228);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body pre > code, pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 210, 228);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 210, 228);
  border-left-width: 1px;
  border-right-color: rgb(216, 210, 228);
  border-right-width: 1px;
  border-top-color: rgb(216, 210, 228);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 21px;
  padding-top: 21px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 210, 228);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 210, 228);
  border-left-width: 1px;
  border-right-color: rgb(216, 210, 228);
  border-right-width: 1px;
  border-top-color: rgb(216, 210, 228);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 21px;
  padding-top: 21px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(249, 249, 251);
}

body .transclude {
  border-bottom-color: rgb(216, 210, 228);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 210, 228);
  border-left-width: 1px;
  border-right-color: rgb(216, 210, 228);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(216, 210, 228);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .transclude-inner {
  border-bottom-color: rgb(216, 210, 228);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 210, 228);
  border-left-width: 1px;
  border-right-color: rgb(216, 210, 228);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(216, 210, 228);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}

body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}`,
    callouts: `body .callout .callout-title {
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.221853 288.459 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.221853 288.459 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.221853 288.459 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.221853 288.459 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.216938 20.8401 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.0000347714 23.8628 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.0000347714 23.8628 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.0000347714 23.8628 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.0000347714 23.8628 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.19456 148.477 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.19456 148.477 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.19456 148.477 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.19456 148.477 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.124631 192.766 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.175848 52.5476 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(221, 217, 232);
  border-left-color: rgb(221, 217, 232);
  border-right-color: rgb(221, 217, 232);
  border-top-color: rgb(221, 217, 232);
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(207, 201, 222);
  border-left-color: rgb(207, 201, 222);
  border-right-color: rgb(207, 201, 222);
  border-top-color: rgb(207, 201, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(162, 150, 192, 0.18);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(207, 201, 222);
  border-left-color: rgb(207, 201, 222);
  border-right-color: rgb(207, 201, 222);
  border-top-color: rgb(207, 201, 222);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(247, 245, 249);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(162, 150, 192, 0.18);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(162, 150, 192, 0.18);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(138, 92, 245, 0.2);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body a.internal.tag-link::before {
  color: rgb(34, 34, 34);
}

body h1 {
  color: oklch(0.48 0.2 292.488);
}

body h2 {
  color: oklch(0.48 0.2 352.488);
}

body h3 {
  color: oklch(0.48 0.2 52.4879);
}

body h4 {
  color: oklch(0.48 0.2 112.488);
}

body h5 {
  color: oklch(0.48 0.2 172.488);
}

body h6 {
  color: oklch(0.48 0.2 232.488);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189734 256.788 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(162, 150, 192, 0.18);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}`,
    footer: `body footer {
  background-color: rgb(249, 249, 251);
  border-bottom-color: rgb(221, 217, 232);
  border-left-color: rgb(221, 217, 232);
  border-right-color: rgb(221, 217, 232);
  border-top-color: rgb(221, 217, 232);
  color: rgb(34, 34, 34);
}

body footer ul li a {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(34, 34, 34);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(34, 34, 34);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(34, 34, 34);
  text-decoration: rgb(34, 34, 34);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}

body .darkmode svg {
  color: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: oklch(0.45 0.1 292.488);
  border-left-color: oklch(0.45 0.1 292.488);
  border-right-color: oklch(0.45 0.1 292.488);
  border-top-color: oklch(0.45 0.1 292.488);
  color: oklch(0.45 0.1 292.488);
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(221, 217, 232);
  border-left-color: rgb(221, 217, 232);
  border-right-color: rgb(221, 217, 232);
  border-top-color: rgb(221, 217, 232);
  margin-bottom: 24px;
  padding-bottom: 0px;
  padding-top: 12px;
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.7296 0.624 0.976);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.7296 0.624 0.976);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.7296 0.624 0.976);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.7296 0.624 0.976);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .navigation-progress {
  background-color: rgb(249, 249, 251);
}

body input[type=text] {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
  padding-left: 0px;
}

body kbd {
  background-color: rgba(0, 0, 0, 0);
}`,
  },
};
