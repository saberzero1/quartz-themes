import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "material-3",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: hsla(255.4545454545deg, 100%, 87%, 0.1);
  --background-modifier-border: #494455;
  --background-modifier-border-focus: #494455;
  --background-modifier-border-hover: #494455;
  --background-modifier-cover: rgba( from #000000 r g b / 0.32 );
  --background-modifier-error: #ffb4ab;
  --background-modifier-error-hover: #ffb4ab;
  --background-modifier-error-rgb: 255, 180, 171;
  --background-modifier-form-field: #0f0d16;
  --background-modifier-form-field-hover: #0f0d16;
  --background-modifier-hover: rgba( from #cbc3d8 r g b / 0.08 );
  --background-modifier-message: #e7e0ee;
  --background-modifier-success: rgb(77, 223, 162);
  --background-modifier-success-rgb: 77, 223, 162;
  --background-primary: #14121b;
  --background-primary-alt: #1d1a24;
  --background-secondary: #211e28;
  --background-secondary-alt: #36333e;
  --bases-cards-background: #14121b;
  --bases-cards-cover-background: #1d1a24;
  --bases-cards-radius: 12px;
  --bases-cards-shadow: 0 0 0 1px #494455;
  --bases-cards-shadow-hover: 0 0 0 1px #494455;
  --bases-embed-border-color: #494455;
  --bases-embed-border-radius: 8px;
  --bases-group-heading-property-color: #cbc3d8;
  --bases-table-border-color: #494455;
  --bases-table-cell-background-active: #14121b;
  --bases-table-cell-background-disabled: #1d1a24;
  --bases-table-cell-background-selected: hsla(255.4545454545deg, 100%, 87%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #494455;
  --bases-table-cell-shadow-focus: 0 0 0 2px #cebdff;
  --bases-table-container-border-radius: 8px;
  --bases-table-group-background: #1d1a24;
  --bases-table-header-background: #14121b;
  --bases-table-header-background-hover: rgba( from #cbc3d8 r g b / 0.08 );
  --bases-table-header-color: #cbc3d8;
  --bases-table-summary-background: #14121b;
  --bases-table-summary-background-hover: rgba( from #cbc3d8 r g b / 0.08 );
  --blockquote-border-color: #cebdff;
  --blur-background: color-mix(in srgb, #36333e 65%, transparent) linear-gradient(#36333e, color-mix(in srgb, #36333e 65%, transparent));
  --button-radius: 28px;
  --callout-radius: 8px;
  --canvas-background: #14121b;
  --canvas-card-label-color: #cbc3d8;
  --canvas-controls-radius: 8px;
  --caret-color: #e7e0ee;
  --checkbox-border-color: #cbc3d8;
  --checkbox-border-color-hover: #cbc3d8;
  --checkbox-color: #cebdff;
  --checkbox-color-hover: rgb( from #cebdff r g b / 0.9 );
  --checkbox-marker-color: #14121b;
  --checkbox-radius: 2px;
  --checklist-done-color: #cbc3d8;
  --clickable-icon-radius: 8px;
  --code-background: #1d1a24;
  --code-border-color: #494455;
  --code-bracket-background: rgba( from #cbc3d8 r g b / 0.08 );
  --code-comment: #cbc3d8;
  --code-normal: #e7e0ee;
  --code-punctuation: #cbc3d8;
  --code-radius: 8px;
  --collapse-icon-color: #cbc3d8;
  --collapse-icon-color-collapsed: #cebdff;
  --color-accent: #cebdff;
  --color-accent-hsl: 255.4545454545deg, 100%, 87.0588235294%;
  --divider-color: #494455;
  --divider-color-hover: #cebdff;
  --dropdown-background: #36333e;
  --dropdown-background-hover: rgba( from #cbc3d8 r g b / 0.08 );
  --dropdown-background-position: right 16px top 50%, 0 0;
  --embed-block-shadow-hover: 0 0 0 1px #494455, inset 0 0 0 1px #494455;
  --embed-border-start: 2px solid #cebdff;
  --file-header-background: #14121b;
  --file-header-background-focused: #14121b;
  --file-header-font: '??', "Roboto", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #36333e;
  --flair-color: #e7e0ee;
  --font-interface: '??', "Roboto", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Roboto";
  --font-mermaid: '??', "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Roboto", 'Arial';
  --font-text: '??', "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Roboto";
  --footnote-divider-color: #494455;
  --footnote-id-color: #cbc3d8;
  --footnote-id-color-no-occurrences: #cbc3d8;
  --footnote-input-background-active: rgba( from #cbc3d8 r g b / 0.08 );
  --footnote-radius: 8px;
  --graph-node: #cbc3d8;
  --graph-node-focused: #cebdff;
  --graph-node-unresolved: #cbc3d8;
  --graph-text: #e7e0ee;
  --heading-formatting: #cbc3d8;
  --hr-color: #494455;
  --icon-color: #cbc3d8;
  --icon-color-active: #cebdff;
  --icon-color-focused: #cbc3d8;
  --icon-color-hover: #cbc3d8;
  --icon-opacity: 1;
  --input-date-separator: #cbc3d8;
  --input-height: 40px;
  --input-placeholder-color: #cbc3d8;
  --input-radius: 28px;
  --interactive-accent: #cebdff;
  --interactive-accent-hover: rgb( from #cebdff r g b / 0.9 );
  --interactive-accent-hsl: 255.4545454545deg, 100%, 87.0588235294%;
  --interactive-hover: rgba( from #cbc3d8 r g b / 0.08 );
  --interactive-normal: #36333e;
  --link-color: #cebdff;
  --link-external-color: #cebdff;
  --link-unresolved-color: #ffb4ab;
  --link-unresolved-decoration-color: hsla(255.4545454545deg, 100%, 87%, 0.3);
  --link-unresolved-opacity: 1;
  --list-marker-color: #cbc3d8;
  --list-marker-color-collapsed: #cebdff;
  --list-marker-color-hover: #cbc3d8;
  --md-extended-blue-color: rgb(187, 195, 255);
  --md-extended-blue-color-container: rgb(71, 91, 214);
  --md-extended-blue-on-color: rgb(0, 27, 150);
  --md-extended-blue-on-color-container: rgb(255, 255, 255);
  --md-extended-blue-seed: rgb(8, 109, 221);
  --md-extended-blue-value: rgb(81, 100, 224);
  --md-extended-cyan-color: rgb(77, 223, 242);
  --md-extended-cyan-color-container: rgb(0, 180, 199);
  --md-extended-cyan-on-color: rgb(0, 54, 61);
  --md-extended-cyan-on-color-container: rgb(0, 28, 32);
  --md-extended-cyan-seed: rgb(0, 191, 188);
  --md-extended-cyan-value: rgb(5, 189, 208);
  --md-extended-green-color: rgb(77, 223, 162);
  --md-extended-green-color-container: rgb(0, 173, 119);
  --md-extended-green-color-rgb: 77, 223, 162;
  --md-extended-green-on-color: rgb(0, 56, 36);
  --md-extended-green-on-color-container: rgb(0, 7, 3);
  --md-extended-green-seed: rgb(8, 185, 78);
  --md-extended-green-value: rgb(0, 183, 126);
  --md-extended-orange-color: rgb(255, 181, 156);
  --md-extended-orange-color-container: rgb(199, 77, 30);
  --md-extended-orange-on-color: rgb(92, 25, 0);
  --md-extended-orange-on-color-container: rgb(255, 255, 255);
  --md-extended-orange-seed: rgb(236, 117, 0);
  --md-extended-orange-value: rgb(244, 109, 60);
  --md-extended-pink-color: rgb(255, 173, 227);
  --md-extended-pink-color-container: rgb(193, 49, 163);
  --md-extended-pink-on-color: rgb(95, 0, 79);
  --md-extended-pink-on-color-container: rgb(255, 255, 255);
  --md-extended-pink-seed: rgb(213, 57, 132);
  --md-extended-pink-value: rgb(203, 59, 172);
  --md-extended-purple-color: rgb(205, 189, 255);
  --md-extended-purple-color-container: rgb(113, 71, 228);
  --md-extended-purple-on-color: rgb(55, 0, 149);
  --md-extended-purple-on-color-container: rgb(255, 255, 255);
  --md-extended-purple-seed: rgb(120, 82, 238);
  --md-extended-purple-value: rgb(122, 81, 237);
  --md-extended-red-color: rgb(255, 177, 196);
  --md-extended-red-color-container: rgb(220, 31, 111);
  --md-extended-red-on-color: rgb(101, 0, 46);
  --md-extended-red-on-color-container: rgb(255, 255, 255);
  --md-extended-red-seed: rgb(233, 49, 71);
  --md-extended-red-value: rgb(231, 42, 119);
  --md-extended-yellow-color: rgb(255, 207, 146);
  --md-extended-yellow-color-container: rgb(237, 157, 12);
  --md-extended-yellow-on-color: rgb(69, 43, 0);
  --md-extended-yellow-on-color-container: rgb(51, 30, 0);
  --md-extended-yellow-seed: rgb(224, 172, 0);
  --md-extended-yellow-value: rgb(244, 163, 23);
  --md-key-colors-primary: rgb(134, 88, 255);
  --md-source-seed: rgb(134, 88, 255);
  --md-sys-color-background: #14121b;
  --md-sys-color-error: #ffb4ab;
  --md-sys-color-error-container: #93000a;
  --md-sys-color-inverse-on-surface: #322f39;
  --md-sys-color-inverse-primary: #6b36e2;
  --md-sys-color-inverse-surface: #e7e0ee;
  --md-sys-color-on-background: #e7e0ee;
  --md-sys-color-on-error: #690005;
  --md-sys-color-on-error-container: #ffdad6;
  --md-sys-color-on-primary: #390093;
  --md-sys-color-on-primary-container: #e8ddff;
  --md-sys-color-on-primary-fixed: #21005d;
  --md-sys-color-on-primary-fixed-variant: #5208ca;
  --md-sys-color-on-secondary: #36226b;
  --md-sys-color-on-secondary-container: #e8ddff;
  --md-sys-color-on-secondary-fixed: #210656;
  --md-sys-color-on-secondary-fixed-variant: #4d3a83;
  --md-sys-color-on-surface: #e7e0ee;
  --md-sys-color-on-surface-variant: #cbc3d8;
  --md-sys-color-on-tertiary: #4c2700;
  --md-sys-color-on-tertiary-container: #ffdcc1;
  --md-sys-color-on-tertiary-fixed: #2e1500;
  --md-sys-color-on-tertiary-fixed-variant: #6c3a00;
  --md-sys-color-outline: #948ea1;
  --md-sys-color-outline-variant: #494455;
  --md-sys-color-primary: #cebdff;
  --md-sys-color-primary-container: #5208ca;
  --md-sys-color-primary-fixed: #e8ddff;
  --md-sys-color-primary-fixed-dim: #cebdff;
  --md-sys-color-scrim: #000000;
  --md-sys-color-secondary: #cebdff;
  --md-sys-color-secondary-container: #4d3a83;
  --md-sys-color-secondary-fixed: #e8ddff;
  --md-sys-color-secondary-fixed-dim: #cebdff;
  --md-sys-color-shadow: #000000;
  --md-sys-color-surface: #14121b;
  --md-sys-color-surface-bright: #3b3742;
  --md-sys-color-surface-container: #211e28;
  --md-sys-color-surface-container-high: #2b2833;
  --md-sys-color-surface-container-highest: #36333e;
  --md-sys-color-surface-container-low: #1d1a24;
  --md-sys-color-surface-container-lowest: #0f0d16;
  --md-sys-color-surface-dim: #14121b;
  --md-sys-color-surface-tint: #cebdff;
  --md-sys-color-surface-variant: #494455;
  --md-sys-color-tertiary: #ffb779;
  --md-sys-color-tertiary-container: #6c3a00;
  --md-sys-color-tertiary-fixed: #ffdcc1;
  --md-sys-color-tertiary-fixed-dim: #ffb779;
  --md-sys-motion-duration-extra-long1: 700ms;
  --md-sys-motion-duration-extra-long2: 800ms;
  --md-sys-motion-duration-extra-long3: 900ms;
  --md-sys-motion-duration-extra-long4: 1000ms;
  --md-sys-motion-duration-long1: 450ms;
  --md-sys-motion-duration-long2: 500ms;
  --md-sys-motion-duration-long3: 550ms;
  --md-sys-motion-duration-long4: 600ms;
  --md-sys-motion-duration-medium1: 250ms;
  --md-sys-motion-duration-medium2: 300ms;
  --md-sys-motion-duration-medium3: 350ms;
  --md-sys-motion-duration-medium4: 400ms;
  --md-sys-motion-duration-short1: 50ms;
  --md-sys-motion-duration-short2: 100ms;
  --md-sys-motion-duration-short3: 150ms;
  --md-sys-motion-duration-short4: 200ms;
  --md-sys-motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
  --md-sys-motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);
  --md-sys-motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
  --md-sys-motion-easing-legacy: cubic-bezier(0.4, 0, 0.2, 1);
  --md-sys-motion-easing-legacy-accelerate: cubic-bezier(0.4, 0, 1, 1);
  --md-sys-motion-easing-legacy-decelerate: cubic-bezier(0, 0, 0.2, 1);
  --md-sys-motion-easing-linear: cubic-bezier(0, 0, 1, 1);
  --md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --md-sys-motion-easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);
  --md-sys-motion-easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);
  --md-sys-shape-corner-extra-large: 28px;
  --md-sys-shape-corner-extra-small: 4px;
  --md-sys-shape-corner-full: 9999px;
  --md-sys-shape-corner-large: 16px;
  --md-sys-shape-corner-medium: 12px;
  --md-sys-shape-corner-none: 0px;
  --md-sys-shape-corner-small: 8px;
  --md-sys-state-dragged-state-layer-opacity: 0.16;
  --md-sys-state-focus-state-layer-opacity: 0.12;
  --md-sys-state-hover-state-layer-opacity: 0.08;
  --md-sys-state-pressed-state-layer-opacity: 0.12;
  --menu-background: #211e28;
  --menu-border-color: #494455;
  --menu-radius: 12px;
  --metadata-border-color: #494455;
  --metadata-divider-color: #494455;
  --metadata-input-background-active: rgba( from #cbc3d8 r g b / 0.08 );
  --metadata-input-font: '??', "Roboto", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #e7e0ee;
  --metadata-label-background-active: rgba( from #cbc3d8 r g b / 0.08 );
  --metadata-label-font: '??', "Roboto", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #cbc3d8;
  --metadata-label-text-color-hover: #cbc3d8;
  --metadata-property-background-active: rgba( from #cbc3d8 r g b / 0.08 );
  --metadata-property-box-shadow-focus: 0 0 0 2px #494455;
  --metadata-property-box-shadow-hover: 0 0 0 1px #494455;
  --modal-background: #14121b;
  --nav-collapse-icon-color: #cbc3d8;
  --nav-collapse-icon-color-collapsed: #cbc3d8;
  --nav-heading-color: #e7e0ee;
  --nav-heading-color-collapsed: #cbc3d8;
  --nav-heading-color-collapsed-hover: #cbc3d8;
  --nav-heading-color-hover: #e7e0ee;
  --nav-item-background-active: #4d3a83;
  --nav-item-background-hover: rgba( from #cbc3d8 r g b / 0.08 );
  --nav-item-background-selected: hsla(255.4545454545deg, 100%, 87%, 0.15);
  --nav-item-color: #cbc3d8;
  --nav-item-color-active: #e8ddff;
  --nav-item-color-highlighted: #cebdff;
  --nav-item-color-hover: #e7e0ee;
  --nav-item-color-selected: #e7e0ee;
  --nav-item-radius: 8px;
  --nav-tag-color: #cbc3d8;
  --nav-tag-color-active: #cbc3d8;
  --nav-tag-color-hover: #cbc3d8;
  --nav-tag-radius: 8px;
  --pdf-background: #14121b;
  --pdf-page-background: #14121b;
  --pdf-shadow: 0 0 0 1px #494455;
  --pdf-sidebar-background: #14121b;
  --pdf-thumbnail-shadow: 0 0 0 1px #494455;
  --pill-border-color: #494455;
  --pill-border-color-hover: #494455;
  --pill-color: #cbc3d8;
  --pill-color-hover: #e7e0ee;
  --pill-color-remove: #cbc3d8;
  --pill-color-remove-hover: #cebdff;
  --prompt-background: #14121b;
  --radius-l: 16px;
  --radius-m: 12px;
  --radius-s: 8px;
  --raised-background: color-mix(in srgb, #36333e 65%, transparent) linear-gradient(#36333e, color-mix(in srgb, #36333e 65%, transparent));
  --ribbon-background: #211e28;
  --ribbon-background-collapsed: #14121b;
  --scrollbar-active-thumb-bg: #948ea1;
  --scrollbar-bg: #948ea1;
  --scrollbar-radius: 16px;
  --scrollbar-thumb-bg: #494455;
  --search-clear-button-color: #cbc3d8;
  --search-icon-color: #cbc3d8;
  --search-result-background: #14121b;
  --setting-group-heading-color: #e7e0ee;
  --setting-items-background: #1d1a24;
  --setting-items-border-color: #494455;
  --setting-items-radius: 16px;
  --slider-thumb-border-color: #494455;
  --slider-thumb-border-width: 0px;
  --slider-thumb-radius: 9999px;
  --slider-track-background: #4d3a83;
  --status-bar-background: #211e28;
  --status-bar-border-color: #494455;
  --status-bar-radius: 12px 0 0 0;
  --status-bar-text-color: #cbc3d8;
  --suggestion-background: #14121b;
  --tab-background-active: #14121b;
  --tab-container-background: #211e28;
  --tab-divider-color: #494455;
  --tab-outline-color: #494455;
  --tab-radius: 8px;
  --tab-radius-active: 4px 4px 0px 0px;
  --tab-switcher-background: #211e28;
  --tab-switcher-menubar-background: linear-gradient(to top, #211e28, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #cebdff;
  --tab-text-color: #cbc3d8;
  --tab-text-color-active: #cbc3d8;
  --tab-text-color-focused: #cbc3d8;
  --tab-text-color-focused-active: #cbc3d8;
  --tab-text-color-focused-active-current: #e7e0ee;
  --tab-text-color-focused-highlighted: #cebdff;
  --table-add-button-border-color: #494455;
  --table-border-color: #494455;
  --table-drag-handle-background-active: #cebdff;
  --table-drag-handle-color: #cbc3d8;
  --table-drag-handle-color-active: #390093;
  --table-header-border-color: #494455;
  --table-header-color: #e7e0ee;
  --table-selection: hsla(255.4545454545deg, 100%, 87%, 0.1);
  --table-selection-border-color: #cebdff;
  --tag-background: hsla(255.4545454545deg, 100%, 87%, 0.1);
  --tag-background-hover: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.2);
  --tag-border-color: hsla(255.4545454545deg, 100%, 87%, 0.15);
  --tag-border-color-hover: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.15);
  --tag-color: #cebdff;
  --tag-color-hover: #cebdff;
  --text-accent: #cebdff;
  --text-faint: #cbc3d8;
  --text-muted: #cbc3d8;
  --text-normal: #e7e0ee;
  --text-on-accent: #390093;
  --text-selection: hsla(255.4545454545deg, 100%, 87%, 0.33);
  --titlebar-background: #211e28;
  --titlebar-background-focused: #36333e;
  --titlebar-border-color: #494455;
  --titlebar-text-color: #cbc3d8;
  --titlebar-text-color-focused: #e7e0ee;
  --vault-profile-color: #e7e0ee;
  --vault-profile-color-hover: #e7e0ee;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 30, 40);
  color: rgb(231, 224, 238);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(20, 18, 27);
  color: rgb(231, 224, 238);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 30, 40);
  color: rgb(231, 224, 238);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(73, 68, 85);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 30, 40);
  border-left-color: rgb(73, 68, 85);
  color: rgb(231, 224, 238);
}

body div#quartz-root {
  background-color: rgb(20, 18, 27);
  color: rgb(231, 224, 238);
}`,
    typography: `body .page article p > b, b {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body .page article p > em, em {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body .page article p > i, i {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body .page article p > strong, strong {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body .text-highlight {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body del {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration: line-through rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body p {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(203, 195, 216) none 0px;
  text-decoration: rgb(203, 195, 216);
  text-decoration-color: rgb(203, 195, 216);
}`,
    links: `body a.external, footer a {
  color: rgb(206, 189, 255);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(206, 189, 255) none 0px;
  text-decoration: underline rgb(206, 189, 255);
  text-decoration-color: rgb(206, 189, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(206, 189, 255);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(206, 189, 255) none 0px;
  text-decoration: underline rgb(206, 189, 255);
  text-decoration-color: rgb(206, 189, 255);
}

body a.internal.broken {
  color: rgb(255, 180, 171);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 180, 171) none 0px;
  text-decoration: underline rgba(206, 189, 255, 0.3);
  text-decoration-color: rgba(206, 189, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(231, 224, 238);
}

body dt {
  color: rgb(231, 224, 238);
}

body ol > li {
  color: rgb(231, 224, 238);
}

body ol.overflow {
  background-color: rgb(20, 18, 27);
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

body ul > li {
  color: rgb(231, 224, 238);
}

body ul.overflow {
  background-color: rgb(20, 18, 27);
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(203, 195, 216);
  text-decoration: rgb(203, 195, 216);
}

body blockquote {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

body table {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.188px;
}

body td {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: rgb(231, 224, 238);
}

body th {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: rgb(231, 224, 238);
}`,
    code: `body code {
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(29, 26, 36);
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(29, 26, 36);
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

body pre > code, pre:has(> code) {
  background-color: rgb(29, 26, 36);
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  background-color: rgb(29, 26, 36);
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `body audio {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

body figcaption {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

body img {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

body video {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}`,
    embeds: `body .file-embed {
  background-color: rgb(29, 26, 36);
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .footnotes {
  border-top-color: rgb(231, 224, 238);
  color: rgb(231, 224, 238);
}

body .transclude {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(206, 189, 255);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

body .transclude-inner {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(206, 189, 255);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(203, 195, 216);
  text-decoration: line-through rgb(203, 195, 216);
  text-decoration-color: rgb(203, 195, 216);
}

body input[type=checkbox] {
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='*'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='-'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='/'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='>'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='?'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='I'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='S'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='b'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='c'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='d'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='f'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='i'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='k'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='l'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='p'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='u'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body li.task-list-item[data-task='w'] {
  color: rgb(231, 224, 238);
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(231, 224, 238);
  border-left-width: 0px;
  border-right-color: rgb(231, 224, 238);
  border-right-width: 0px;
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(20, 18, 27);
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-bottom-width: 0px;
  border-left-color: rgb(231, 224, 238);
  border-left-width: 0px;
  border-right-color: rgb(231, 224, 238);
  border-right-width: 0px;
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > * {
  background-color: rgb(20, 18, 27);
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(231, 224, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(231, 224, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.796078 0.764706 0.847059 / 0.08);
  color: rgb(231, 224, 238);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-bottom-width: 0px;
  border-left-color: rgb(231, 224, 238);
  border-left-width: 0px;
  border-right-color: rgb(231, 224, 238);
  border-right-width: 0px;
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: color(srgb 0.796078 0.764706 0.847059 / 0.08);
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.796078 0.764706 0.847059 / 0.08);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(148, 142, 161);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(148, 142, 161);
  border-left-width: 1px;
  border-right-color: rgb(148, 142, 161);
  border-right-width: 1px;
  border-top-color: rgb(148, 142, 161);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(206, 189, 255);
}

body h1 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(20, 18, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 18, 27);
}

body ::-webkit-scrollbar-corner {
  background: rgb(20, 18, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 18, 27);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(20, 18, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 18, 27);
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(20, 18, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 18, 27);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(20, 18, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 18, 27);
}

body ::-webkit-scrollbar-track {
  background: rgb(20, 18, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 18, 27);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(203, 195, 216);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(203, 195, 216);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(203, 195, 216);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(77, 58, 131);
  border-bottom-color: rgb(232, 221, 255);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(232, 221, 255);
  border-right-color: rgb(232, 221, 255);
  border-top-color: rgb(232, 221, 255);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(232, 221, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(203, 195, 216);
}`,
    footer: `body footer {
  background-color: rgb(33, 30, 40);
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 12px;
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(203, 195, 216);
  text-decoration: rgb(203, 195, 216);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  color: rgb(231, 224, 238);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(203, 195, 216);
  text-decoration: rgb(203, 195, 216);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

body li.section-li > .section .meta {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(203, 195, 216);
  text-decoration: rgb(203, 195, 216);
}

body ul.section-ul {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(203, 195, 216);
}

body .darkmode svg {
  color: rgb(203, 195, 216);
  stroke: rgb(203, 195, 216);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(203, 195, 216);
}

body .breadcrumb-element p {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  color: rgb(231, 224, 238);
}

body .metadata {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(33, 30, 40);
}

body .page-header h2.page-title {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(231, 224, 238);
  text-decoration: underline dotted rgb(231, 224, 238);
}

body details {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

body input[type=text] {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(29, 26, 36);
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

body progress {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

body sub {
  color: rgb(231, 224, 238);
}

body summary {
  color: rgb(231, 224, 238);
}

body sup {
  color: rgb(231, 224, 238);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: hsla(258.488372093deg, 75%, 55%, 0.1);
  --background-modifier-border: #cbc3d8;
  --background-modifier-border-focus: #cbc3d8;
  --background-modifier-border-hover: #cbc3d8;
  --background-modifier-cover: rgba( from #000000 r g b / 0.32 );
  --background-modifier-error: #ba1a1a;
  --background-modifier-error-hover: #ba1a1a;
  --background-modifier-error-rgb: 186, 26, 26;
  --background-modifier-hover: rgba( from #494455 r g b / 0.08 );
  --background-modifier-message: #322f39;
  --background-modifier-success: rgb(0, 108, 73);
  --background-modifier-success-rgb: 0, 108, 73;
  --background-primary: #fdf7ff;
  --background-primary-alt: #f8f1ff;
  --background-secondary: #f2ebf9;
  --background-secondary-alt: #e7e0ee;
  --bases-cards-background: #fdf7ff;
  --bases-cards-cover-background: #f8f1ff;
  --bases-cards-radius: 12px;
  --bases-cards-shadow: 0 0 0 1px #cbc3d8;
  --bases-cards-shadow-hover: 0 0 0 1px #cbc3d8;
  --bases-embed-border-color: #cbc3d8;
  --bases-embed-border-radius: 8px;
  --bases-group-heading-property-color: #494455;
  --bases-table-border-color: #cbc3d8;
  --bases-table-cell-background-active: #fdf7ff;
  --bases-table-cell-background-disabled: #f8f1ff;
  --bases-table-cell-background-selected: hsla(258.488372093deg, 75%, 55%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #cbc3d8;
  --bases-table-cell-shadow-focus: 0 0 0 2px #6b36e2;
  --bases-table-container-border-radius: 8px;
  --bases-table-group-background: #f8f1ff;
  --bases-table-header-background: #fdf7ff;
  --bases-table-header-background-hover: rgba( from #494455 r g b / 0.08 );
  --bases-table-header-color: #494455;
  --bases-table-summary-background: #fdf7ff;
  --bases-table-summary-background-hover: rgba( from #494455 r g b / 0.08 );
  --blockquote-border-color: #6b36e2;
  --blur-background: color-mix(in srgb, #fdf7ff 65%, transparent) linear-gradient(#fdf7ff, color-mix(in srgb, #fdf7ff 65%, transparent));
  --button-radius: 28px;
  --callout-radius: 8px;
  --canvas-background: #fdf7ff;
  --canvas-card-label-color: #494455;
  --canvas-controls-radius: 8px;
  --caret-color: #1d1a24;
  --checkbox-border-color: #494455;
  --checkbox-border-color-hover: #494455;
  --checkbox-color: #6b36e2;
  --checkbox-color-hover: rgb( from #6b36e2 r g b / 0.9 );
  --checkbox-marker-color: #fdf7ff;
  --checkbox-radius: 2px;
  --checklist-done-color: #494455;
  --clickable-icon-radius: 8px;
  --code-background: #f8f1ff;
  --code-border-color: #cbc3d8;
  --code-bracket-background: rgba( from #494455 r g b / 0.08 );
  --code-comment: #494455;
  --code-normal: #1d1a24;
  --code-punctuation: #494455;
  --code-radius: 8px;
  --collapse-icon-color: #494455;
  --collapse-icon-color-collapsed: #6b36e2;
  --color-accent: #6b36e2;
  --color-accent-hsl: 258.488372093deg, 74.7826086957%, 54.9019607843%;
  --divider-color: #cbc3d8;
  --divider-color-hover: #6b36e2;
  --dropdown-background: #e7e0ee;
  --dropdown-background-hover: rgba( from #494455 r g b / 0.08 );
  --dropdown-background-position: right 16px top 50%, 0 0;
  --embed-block-shadow-hover: 0 0 0 1px #cbc3d8, inset 0 0 0 1px #cbc3d8;
  --embed-border-start: 2px solid #6b36e2;
  --file-header-background: #fdf7ff;
  --file-header-background-focused: #fdf7ff;
  --file-header-font: '??', "Roboto", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #e7e0ee;
  --flair-color: #1d1a24;
  --font-interface: '??', "Roboto", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Roboto";
  --font-mermaid: '??', "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Roboto", 'Arial';
  --font-text: '??', "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Roboto";
  --footnote-divider-color: #cbc3d8;
  --footnote-id-color: #494455;
  --footnote-id-color-no-occurrences: #494455;
  --footnote-input-background-active: rgba( from #494455 r g b / 0.08 );
  --footnote-radius: 8px;
  --graph-node: #494455;
  --graph-node-focused: #6b36e2;
  --graph-node-unresolved: #494455;
  --graph-text: #1d1a24;
  --heading-formatting: #494455;
  --hr-color: #cbc3d8;
  --icon-color: #494455;
  --icon-color-active: #6b36e2;
  --icon-color-focused: #494455;
  --icon-color-hover: #494455;
  --icon-opacity: 1;
  --input-date-separator: #494455;
  --input-height: 40px;
  --input-placeholder-color: #494455;
  --input-radius: 28px;
  --interactive-accent: #6b36e2;
  --interactive-accent-hover: rgb( from #6b36e2 r g b / 0.9 );
  --interactive-accent-hsl: 258.488372093deg, 74.7826086957%, 54.9019607843%;
  --interactive-hover: rgba( from #494455 r g b / 0.08 );
  --interactive-normal: #e7e0ee;
  --link-color: #6b36e2;
  --link-external-color: #6b36e2;
  --link-unresolved-color: #ba1a1a;
  --link-unresolved-decoration-color: hsla(258.488372093deg, 75%, 55%, 0.3);
  --link-unresolved-opacity: 1;
  --list-marker-color: #494455;
  --list-marker-color-collapsed: #6b36e2;
  --list-marker-color-hover: #494455;
  --md-extended-blue-color: rgb(40, 60, 186);
  --md-extended-blue-color-container: rgb(81, 100, 224);
  --md-extended-blue-on-color: rgb(255, 255, 255);
  --md-extended-blue-on-color-container: rgb(255, 255, 255);
  --md-extended-blue-seed: rgb(8, 109, 221);
  --md-extended-blue-value: rgb(81, 100, 224);
  --md-extended-cyan-color: rgb(0, 104, 116);
  --md-extended-cyan-color-container: rgb(40, 200, 219);
  --md-extended-cyan-on-color: rgb(255, 255, 255);
  --md-extended-cyan-on-color-container: rgb(0, 47, 53);
  --md-extended-cyan-seed: rgb(0, 191, 188);
  --md-extended-cyan-value: rgb(5, 189, 208);
  --md-extended-green-color: rgb(0, 108, 73);
  --md-extended-green-color-container: rgb(37, 195, 137);
  --md-extended-green-color-rgb: 0, 108, 73;
  --md-extended-green-on-color: rgb(255, 255, 255);
  --md-extended-green-on-color-container: rgb(0, 40, 24);
  --md-extended-green-seed: rgb(8, 185, 78);
  --md-extended-green-value: rgb(0, 183, 126);
  --md-extended-orange-color: rgb(169, 56, 6);
  --md-extended-orange-color-container: rgb(255, 123, 76);
  --md-extended-orange-on-color: rgb(255, 255, 255);
  --md-extended-orange-on-color-container: rgb(48, 9, 0);
  --md-extended-orange-seed: rgb(236, 117, 0);
  --md-extended-orange-value: rgb(244, 109, 60);
  --md-extended-pink-color: rgb(150, 0, 126);
  --md-extended-pink-color-container: rgb(198, 55, 168);
  --md-extended-pink-on-color: rgb(255, 255, 255);
  --md-extended-pink-on-color-container: rgb(255, 255, 255);
  --md-extended-pink-seed: rgb(213, 57, 132);
  --md-extended-pink-value: rgb(203, 59, 172);
  --md-extended-purple-color: rgb(85, 34, 199);
  --md-extended-purple-color-container: rgb(122, 81, 237);
  --md-extended-purple-on-color: rgb(255, 255, 255);
  --md-extended-purple-on-color-container: rgb(255, 255, 255);
  --md-extended-purple-seed: rgb(120, 82, 238);
  --md-extended-purple-value: rgb(122, 81, 237);
  --md-extended-red-color: rgb(160, 0, 76);
  --md-extended-red-color-container: rgb(221, 32, 112);
  --md-extended-red-on-color: rgb(255, 255, 255);
  --md-extended-red-on-color-container: rgb(255, 255, 255);
  --md-extended-red-seed: rgb(233, 49, 71);
  --md-extended-red-value: rgb(231, 42, 119);
  --md-extended-yellow-color: rgb(131, 85, 0);
  --md-extended-yellow-color-container: rgb(255, 172, 35);
  --md-extended-yellow-on-color: rgb(255, 255, 255);
  --md-extended-yellow-on-color-container: rgb(68, 42, 0);
  --md-extended-yellow-seed: rgb(224, 172, 0);
  --md-extended-yellow-value: rgb(244, 163, 23);
  --md-key-colors-primary: rgb(134, 88, 255);
  --md-source-seed: rgb(134, 88, 255);
  --md-sys-color-background: #fdf7ff;
  --md-sys-color-error: #ba1a1a;
  --md-sys-color-error-container: #ffdad6;
  --md-sys-color-inverse-on-surface: #f5eefc;
  --md-sys-color-inverse-primary: #cebdff;
  --md-sys-color-inverse-surface: #322f39;
  --md-sys-color-on-background: #1d1a24;
  --md-sys-color-on-error: #ffffff;
  --md-sys-color-on-error-container: #410002;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-on-primary-container: #21005d;
  --md-sys-color-on-primary-fixed: #21005d;
  --md-sys-color-on-primary-fixed-variant: #5208ca;
  --md-sys-color-on-secondary: #ffffff;
  --md-sys-color-on-secondary-container: #210656;
  --md-sys-color-on-secondary-fixed: #210656;
  --md-sys-color-on-secondary-fixed-variant: #4d3a83;
  --md-sys-color-on-surface: #1d1a24;
  --md-sys-color-on-surface-variant: #494455;
  --md-sys-color-on-tertiary: #ffffff;
  --md-sys-color-on-tertiary-container: #2e1500;
  --md-sys-color-on-tertiary-fixed: #2e1500;
  --md-sys-color-on-tertiary-fixed-variant: #6c3a00;
  --md-sys-color-outline: #7a7487;
  --md-sys-color-outline-variant: #cbc3d8;
  --md-sys-color-primary: #6b36e2;
  --md-sys-color-primary-container: #e8ddff;
  --md-sys-color-primary-fixed: #e8ddff;
  --md-sys-color-primary-fixed-dim: #cebdff;
  --md-sys-color-scrim: #000000;
  --md-sys-color-secondary: #65529d;
  --md-sys-color-secondary-container: #e8ddff;
  --md-sys-color-secondary-fixed: #e8ddff;
  --md-sys-color-secondary-fixed-dim: #cebdff;
  --md-sys-color-shadow: #000000;
  --md-sys-color-surface: #fdf7ff;
  --md-sys-color-surface-bright: #fdf7ff;
  --md-sys-color-surface-container: #f2ebf9;
  --md-sys-color-surface-container-high: #ece5f4;
  --md-sys-color-surface-container-highest: #e7e0ee;
  --md-sys-color-surface-container-low: #f8f1ff;
  --md-sys-color-surface-container-lowest: #ffffff;
  --md-sys-color-surface-dim: #ded7e5;
  --md-sys-color-surface-tint: #6b36e2;
  --md-sys-color-surface-variant: #e7dff4;
  --md-sys-color-tertiary: #8f4e00;
  --md-sys-color-tertiary-container: #ffdcc1;
  --md-sys-color-tertiary-fixed: #ffdcc1;
  --md-sys-color-tertiary-fixed-dim: #ffb779;
  --md-sys-motion-duration-extra-long1: 700ms;
  --md-sys-motion-duration-extra-long2: 800ms;
  --md-sys-motion-duration-extra-long3: 900ms;
  --md-sys-motion-duration-extra-long4: 1000ms;
  --md-sys-motion-duration-long1: 450ms;
  --md-sys-motion-duration-long2: 500ms;
  --md-sys-motion-duration-long3: 550ms;
  --md-sys-motion-duration-long4: 600ms;
  --md-sys-motion-duration-medium1: 250ms;
  --md-sys-motion-duration-medium2: 300ms;
  --md-sys-motion-duration-medium3: 350ms;
  --md-sys-motion-duration-medium4: 400ms;
  --md-sys-motion-duration-short1: 50ms;
  --md-sys-motion-duration-short2: 100ms;
  --md-sys-motion-duration-short3: 150ms;
  --md-sys-motion-duration-short4: 200ms;
  --md-sys-motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
  --md-sys-motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);
  --md-sys-motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
  --md-sys-motion-easing-legacy: cubic-bezier(0.4, 0, 0.2, 1);
  --md-sys-motion-easing-legacy-accelerate: cubic-bezier(0.4, 0, 1, 1);
  --md-sys-motion-easing-legacy-decelerate: cubic-bezier(0, 0, 0.2, 1);
  --md-sys-motion-easing-linear: cubic-bezier(0, 0, 1, 1);
  --md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --md-sys-motion-easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);
  --md-sys-motion-easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);
  --md-sys-shape-corner-extra-large: 28px;
  --md-sys-shape-corner-extra-small: 4px;
  --md-sys-shape-corner-full: 9999px;
  --md-sys-shape-corner-large: 16px;
  --md-sys-shape-corner-medium: 12px;
  --md-sys-shape-corner-none: 0px;
  --md-sys-shape-corner-small: 8px;
  --md-sys-state-dragged-state-layer-opacity: 0.16;
  --md-sys-state-focus-state-layer-opacity: 0.12;
  --md-sys-state-hover-state-layer-opacity: 0.08;
  --md-sys-state-pressed-state-layer-opacity: 0.12;
  --menu-background: #f2ebf9;
  --menu-border-color: #cbc3d8;
  --menu-radius: 12px;
  --metadata-border-color: #cbc3d8;
  --metadata-divider-color: #cbc3d8;
  --metadata-input-background-active: rgba( from #494455 r g b / 0.08 );
  --metadata-input-font: '??', "Roboto", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #1d1a24;
  --metadata-label-background-active: rgba( from #494455 r g b / 0.08 );
  --metadata-label-font: '??', "Roboto", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #494455;
  --metadata-label-text-color-hover: #494455;
  --metadata-property-background-active: rgba( from #494455 r g b / 0.08 );
  --metadata-property-box-shadow-focus: 0 0 0 2px #cbc3d8;
  --metadata-property-box-shadow-hover: 0 0 0 1px #cbc3d8;
  --modal-background: #fdf7ff;
  --nav-collapse-icon-color: #494455;
  --nav-collapse-icon-color-collapsed: #494455;
  --nav-heading-color: #1d1a24;
  --nav-heading-color-collapsed: #494455;
  --nav-heading-color-collapsed-hover: #494455;
  --nav-heading-color-hover: #1d1a24;
  --nav-item-background-active: #e8ddff;
  --nav-item-background-hover: rgba( from #494455 r g b / 0.08 );
  --nav-item-background-selected: hsla(258.488372093deg, 75%, 55%, 0.15);
  --nav-item-color: #494455;
  --nav-item-color-active: #210656;
  --nav-item-color-highlighted: #6b36e2;
  --nav-item-color-hover: #1d1a24;
  --nav-item-color-selected: #1d1a24;
  --nav-item-radius: 8px;
  --nav-tag-color: #494455;
  --nav-tag-color-active: #494455;
  --nav-tag-color-hover: #494455;
  --nav-tag-radius: 8px;
  --pdf-background: #fdf7ff;
  --pdf-page-background: #fdf7ff;
  --pdf-sidebar-background: #fdf7ff;
  --pill-border-color: #cbc3d8;
  --pill-border-color-hover: #cbc3d8;
  --pill-color: #494455;
  --pill-color-hover: #1d1a24;
  --pill-color-remove: #494455;
  --pill-color-remove-hover: #6b36e2;
  --prompt-background: #fdf7ff;
  --radius-l: 16px;
  --radius-m: 12px;
  --radius-s: 8px;
  --raised-background: color-mix(in srgb, #fdf7ff 65%, transparent) linear-gradient(#fdf7ff, color-mix(in srgb, #fdf7ff 65%, transparent));
  --ribbon-background: #f2ebf9;
  --ribbon-background-collapsed: #fdf7ff;
  --scrollbar-active-thumb-bg: #7a7487;
  --scrollbar-bg: #7a7487;
  --scrollbar-radius: 16px;
  --scrollbar-thumb-bg: #cbc3d8;
  --search-clear-button-color: #494455;
  --search-icon-color: #494455;
  --search-result-background: #fdf7ff;
  --setting-group-heading-color: #1d1a24;
  --setting-items-background: #f8f1ff;
  --setting-items-border-color: #cbc3d8;
  --setting-items-radius: 16px;
  --slider-thumb-border-color: #cbc3d8;
  --slider-thumb-border-width: 0px;
  --slider-thumb-radius: 9999px;
  --slider-track-background: #e8ddff;
  --status-bar-background: #f2ebf9;
  --status-bar-border-color: #cbc3d8;
  --status-bar-radius: 12px 0 0 0;
  --status-bar-text-color: #494455;
  --suggestion-background: #fdf7ff;
  --tab-background-active: #fdf7ff;
  --tab-container-background: #f2ebf9;
  --tab-divider-color: #cbc3d8;
  --tab-outline-color: #cbc3d8;
  --tab-radius: 8px;
  --tab-radius-active: 4px 4px 0px 0px;
  --tab-switcher-background: #f2ebf9;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2ebf9, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #6b36e2;
  --tab-text-color: #494455;
  --tab-text-color-active: #494455;
  --tab-text-color-focused: #494455;
  --tab-text-color-focused-active: #494455;
  --tab-text-color-focused-active-current: #1d1a24;
  --tab-text-color-focused-highlighted: #6b36e2;
  --table-add-button-border-color: #cbc3d8;
  --table-border-color: #cbc3d8;
  --table-drag-handle-background-active: #6b36e2;
  --table-drag-handle-color: #494455;
  --table-drag-handle-color-active: #ffffff;
  --table-header-border-color: #cbc3d8;
  --table-header-color: #1d1a24;
  --table-selection: hsla(258.488372093deg, 75%, 55%, 0.1);
  --table-selection-border-color: #6b36e2;
  --tag-background: hsla(258.488372093deg, 75%, 55%, 0.1);
  --tag-background-hover: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.2);
  --tag-border-color: hsla(258.488372093deg, 75%, 55%, 0.15);
  --tag-border-color-hover: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.15);
  --tag-color: #6b36e2;
  --tag-color-hover: #6b36e2;
  --text-accent: #6b36e2;
  --text-faint: #494455;
  --text-muted: #494455;
  --text-normal: #1d1a24;
  --text-on-accent: #ffffff;
  --text-selection: hsla(258.488372093deg, 75%, 55%, 0.2);
  --titlebar-background: #f2ebf9;
  --titlebar-background-focused: #e7e0ee;
  --titlebar-border-color: #cbc3d8;
  --titlebar-text-color: #494455;
  --titlebar-text-color-focused: #1d1a24;
  --vault-profile-color: #1d1a24;
  --vault-profile-color-hover: #1d1a24;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 235, 249);
  color: rgb(29, 26, 36);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(253, 247, 255);
  color: rgb(29, 26, 36);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 235, 249);
  color: rgb(29, 26, 36);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(203, 195, 216);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 235, 249);
  border-left-color: rgb(203, 195, 216);
  color: rgb(29, 26, 36);
}

body div#quartz-root {
  background-color: rgb(253, 247, 255);
  color: rgb(29, 26, 36);
}`,
    typography: `body .page article p > b, b {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body .page article p > em, em {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body .page article p > i, i {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body .page article p > strong, strong {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body .text-highlight {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body del {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration: line-through rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body p {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(73, 68, 85) none 0px;
  text-decoration: rgb(73, 68, 85);
  text-decoration-color: rgb(73, 68, 85);
}`,
    links: `body a.external, footer a {
  color: rgb(107, 54, 226);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(107, 54, 226) none 0px;
  text-decoration: underline rgb(107, 54, 226);
  text-decoration-color: rgb(107, 54, 226);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(107, 54, 226);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(107, 54, 226) none 0px;
  text-decoration: underline rgb(107, 54, 226);
  text-decoration-color: rgb(107, 54, 226);
}

body a.internal.broken {
  color: rgb(186, 26, 26);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 26, 26) none 0px;
  text-decoration: underline rgba(107, 54, 226, 0.3);
  text-decoration-color: rgba(107, 54, 226, 0.3);
}`,
    lists: `body dd {
  color: rgb(29, 26, 36);
}

body dt {
  color: rgb(29, 26, 36);
}

body ol > li {
  color: rgb(29, 26, 36);
}

body ol.overflow {
  background-color: rgb(253, 247, 255);
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

body ul > li {
  color: rgb(29, 26, 36);
}

body ul.overflow {
  background-color: rgb(253, 247, 255);
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(73, 68, 85);
  text-decoration: rgb(73, 68, 85);
}

body blockquote {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

body table {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.188px;
}

body td {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: rgb(29, 26, 36);
}

body th {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: rgb(29, 26, 36);
}`,
    code: `body code {
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 241, 255);
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 241, 255);
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

body pre > code, pre:has(> code) {
  background-color: rgb(248, 241, 255);
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  background-color: rgb(248, 241, 255);
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `body audio {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

body figcaption {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

body img {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

body video {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}`,
    embeds: `body .file-embed {
  background-color: rgb(248, 241, 255);
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .footnotes {
  border-top-color: rgb(29, 26, 36);
  color: rgb(29, 26, 36);
}

body .transclude {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(107, 54, 226);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

body .transclude-inner {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(107, 54, 226);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(73, 68, 85);
  text-decoration: line-through rgb(73, 68, 85);
  text-decoration-color: rgb(73, 68, 85);
}

body input[type=checkbox] {
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='*'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='-'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='/'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='>'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='?'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='I'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='S'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='b'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='c'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='d'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='f'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='i'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='k'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='l'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='p'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='u'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body li.task-list-item[data-task='w'] {
  color: rgb(29, 26, 36);
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(29, 26, 36);
  border-left-width: 0px;
  border-right-color: rgb(29, 26, 36);
  border-right-width: 0px;
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(253, 247, 255);
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-bottom-width: 0px;
  border-left-color: rgb(29, 26, 36);
  border-left-width: 0px;
  border-right-color: rgb(29, 26, 36);
  border-right-width: 0px;
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > * {
  background-color: rgb(253, 247, 255);
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(29, 26, 36);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(29, 26, 36);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.286275 0.266667 0.333333 / 0.08);
  color: rgb(29, 26, 36);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-bottom-width: 0px;
  border-left-color: rgb(29, 26, 36);
  border-left-width: 0px;
  border-right-color: rgb(29, 26, 36);
  border-right-width: 0px;
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: color(srgb 0.286275 0.266667 0.333333 / 0.08);
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.286275 0.266667 0.333333 / 0.08);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(122, 116, 135);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(122, 116, 135);
  border-left-width: 1px;
  border-right-color: rgb(122, 116, 135);
  border-right-width: 1px;
  border-top-color: rgb(122, 116, 135);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(107, 54, 226);
}

body h1 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(253, 247, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 247, 255);
}

body ::-webkit-scrollbar-corner {
  background: rgb(253, 247, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 247, 255);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(253, 247, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 247, 255);
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 247, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 247, 255);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 247, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 247, 255);
}

body ::-webkit-scrollbar-track {
  background: rgb(253, 247, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 247, 255);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(73, 68, 85);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(73, 68, 85);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(73, 68, 85);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(232, 221, 255);
  border-bottom-color: rgb(33, 6, 86);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(33, 6, 86);
  border-right-color: rgb(33, 6, 86);
  border-top-color: rgb(33, 6, 86);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(33, 6, 86);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(73, 68, 85);
}`,
    footer: `body footer {
  background-color: rgb(242, 235, 249);
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 12px;
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(73, 68, 85);
  text-decoration: rgb(73, 68, 85);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  color: rgb(29, 26, 36);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(73, 68, 85);
  text-decoration: rgb(73, 68, 85);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

body li.section-li > .section .meta {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(73, 68, 85);
  text-decoration: rgb(73, 68, 85);
}

body ul.section-ul {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(73, 68, 85);
}

body .darkmode svg {
  color: rgb(73, 68, 85);
  stroke: rgb(73, 68, 85);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(73, 68, 85);
}

body .breadcrumb-element p {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  color: rgb(29, 26, 36);
}

body .metadata {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(242, 235, 249);
}

body .page-header h2.page-title {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(29, 26, 36);
  text-decoration: underline dotted rgb(29, 26, 36);
}

body details {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

body input[type=text] {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(248, 241, 255);
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

body progress {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

body sub {
  color: rgb(29, 26, 36);
}

body summary {
  color: rgb(29, 26, 36);
}

body sup {
  color: rgb(29, 26, 36);
}`,
  },
};
