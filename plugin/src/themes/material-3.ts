import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "material-3",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto"],
    fontFiles: [
      {
        family: "Roboto",
        style: "normal",
        weight: "400",
        file: "roboto.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Roboto",
        style: "italic",
        weight: "400",
        file: "roboto-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: var(--color-base-30, #494455);
  --background-modifier-border-focus: var(--color-base-40, #494455);
  --background-modifier-border-hover: var(--color-base-35, #494455);
  --background-modifier-cover: rgba( from #000000 r g b / 0.32 );
  --background-modifier-error: var(--color-red, #ffb4ab);
  --background-modifier-error-hover: var(--color-red, #ffb4ab);
  --background-modifier-error-rgb: var(--color-red-rgb, 255, 180, 171);
  --background-modifier-form-field: var(--color-base-25, #0f0d16);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #0f0d16);
  --background-modifier-message: #e7e0ee;
  --background-modifier-success: var(--md-extended-green-color, rgb(77, 223, 162));
  --background-modifier-success-rgb: var(--md-extended-green-color-rgb, 77, 223, 162);
  --background-primary: var(--color-base-00, #14121b);
  --background-primary-alt: var(--color-base-10, #1d1a24);
  --background-secondary: var(--color-base-20, #211e28);
  --background-secondary-alt: var(--color-base-30, #36333e);
  --bases-cards-background: var(--background-primary, #14121b);
  --bases-cards-cover-background: var(--background-primary-alt, #1d1a24);
  --bases-cards-radius: var(--radius-m, 12px);
  --bases-embed-border-color: var(--background-modifier-border, #494455);
  --bases-embed-border-radius: var(--radius-s, 8px);
  --bases-group-heading-property-color: var(--text-muted, #cbc3d8);
  --bases-table-border-color: var(--table-border-color, #494455);
  --bases-table-cell-background-active: var(--background-primary, #14121b);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #1d1a24);
  --bases-table-cell-background-selected: var(--table-selection, hsla(255.4545454545deg, 100%, 87.0588235294%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 8px);
  --bases-table-group-background: var(--background-primary-alt, #1d1a24);
  --bases-table-header-background: var(--background-primary, #14121b);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba( from #cbc3d8 r g b / 0.08 ));
  --bases-table-header-color: var(--text-muted, #cbc3d8);
  --bases-table-summary-background: var(--background-primary, #14121b);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba( from #cbc3d8 r g b / 0.08 ));
  --blockquote-border-color: var(--interactive-accent, #cebdff);
  --bodyFont: var(--font-text-theme, "Roboto");
  --button-radius: var(--input-radius, 28px);
  --callout-radius: var(--radius-s, 8px);
  --canvas-background: var(--background-primary, #14121b);
  --canvas-card-label-color: var(--text-faint, #cbc3d8);
  --canvas-controls-radius: var(--radius-s, 8px);
  --caret-color: var(--text-normal, #e7e0ee);
  --checkbox-border-color: var(--text-faint, #cbc3d8);
  --checkbox-border-color-hover: var(--text-muted, #cbc3d8);
  --checkbox-color: var(--interactive-accent, #cebdff);
  --checkbox-color-hover: var(--interactive-accent-hover, rgb( from #cebdff r g b / 0.9 ));
  --checkbox-marker-color: var(--background-primary, #14121b);
  --checkbox-radius: var(--radius-s, 2px);
  --checklist-done-color: var(--text-muted, #cbc3d8);
  --clickable-icon-radius: var(--radius-s, 8px);
  --code-background: var(--background-primary-alt, #1d1a24);
  --code-border-color: var(--background-modifier-border, #494455);
  --code-bracket-background: var(--background-modifier-hover, rgba( from #cbc3d8 r g b / 0.08 ));
  --code-comment: var(--text-faint, #cbc3d8);
  --code-normal: var(--text-normal, #e7e0ee);
  --code-punctuation: var(--text-muted, #cbc3d8);
  --code-radius: var(--radius-s, 8px);
  --collapse-icon-color: var(--text-faint, #cbc3d8);
  --collapse-icon-color-collapsed: var(--text-accent, #cebdff);
  --dark: var(--text-normal, var(--color-base-100, #e7e0ee));
  --darkgray: var(--text-normal, var(--color-base-100, #e7e0ee));
  --divider-color: var(--background-modifier-border, #494455);
  --divider-color-hover: var(--interactive-accent, #cebdff);
  --dropdown-background: var(--interactive-normal, #36333e);
  --dropdown-background-hover: var(--interactive-hover, rgba( from #cbc3d8 r g b / 0.08 ));
  --file-header-background: var(--background-primary, #14121b);
  --file-header-background-focused: var(--background-primary, #14121b);
  --file-header-font: var(--font-interface, "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #36333e);
  --flair-color: var(--text-normal, #e7e0ee);
  --font-interface-theme: "Roboto";
  --font-mermaid: var(--font-text, "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: "Roboto";
  --footnote-divider-color: var(--metadata-divider-color, #494455);
  --footnote-id-color: var(--text-muted, #cbc3d8);
  --footnote-id-color-no-occurrences: var(--text-faint, #cbc3d8);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba( from #cbc3d8 r g b / 0.08 ));
  --footnote-radius: var(--radius-s, 8px);
  --graph-node: var(--text-muted, #cbc3d8);
  --graph-node-focused: var(--text-accent, #cebdff);
  --graph-node-unresolved: var(--text-faint, #cbc3d8);
  --graph-text: var(--text-normal, #e7e0ee);
  --gray: var(--text-muted, var(--color-base-70, #cbc3d8));
  --headerFont: var(--font-text-theme, "Roboto");
  --heading-formatting: var(--text-faint, #cbc3d8);
  --hr-color: var(--background-modifier-border, #494455);
  --icon-color: var(--text-muted, #cbc3d8);
  --icon-color-active: var(--text-accent, #cebdff);
  --icon-color-focused: var(--text-normal, #cbc3d8);
  --icon-color-hover: var(--text-muted, #cbc3d8);
  --icon-opacity: 1;
  --input-date-separator: var(--text-faint, #cbc3d8);
  --input-height: 40px;
  --input-placeholder-color: var(--text-faint, #cbc3d8);
  --input-radius: 28px;
  --interactive-accent: var(--color-accent, #cebdff);
  --interactive-accent-hover: var(--color-accent-1, rgb( from #cebdff r g b / 0.9 ));
  --interactive-accent-hsl: var(--color-accent-hsl, 255.4545454545deg, 100%, 87.0588235294%);
  --interactive-hover: var(--background-modifier-hover, rgba( from #cbc3d8 r g b / 0.08 ));
  --interactive-normal: var(--color-base-30, #36333e);
  --light: var(--background-primary, var(--color-base-00, #14121b));
  --lightgray: var(--background-secondary, var(--color-base-20, #211e28));
  --link-color: var(--text-accent, #cebdff);
  --link-external-color: var(--text-accent, #cebdff);
  --link-unresolved-color: var(--text-accent, #ffb4ab);
  --link-unresolved-opacity: 1;
  --list-marker-color: var(--text-faint, #cbc3d8);
  --list-marker-color-collapsed: var(--text-accent, #cebdff);
  --list-marker-color-hover: var(--text-muted, #cbc3d8);
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
  --md-extended-green-color: rgb(var(--md-extended-green-color-rgb));
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
  --menu-background: var(--background-secondary, #211e28);
  --menu-border-color: var(--background-modifier-border-hover, #494455);
  --menu-radius: var(--radius-m, 12px);
  --metadata-border-color: var(--background-modifier-border, #494455);
  --metadata-divider-color: var(--background-modifier-border, #494455);
  --metadata-input-background-active: var(--background-modifier-hover, rgba( from #cbc3d8 r g b / 0.08 ));
  --metadata-input-font: var(--font-interface, "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #e7e0ee);
  --metadata-label-background-active: var(--background-modifier-hover, rgba( from #cbc3d8 r g b / 0.08 ));
  --metadata-label-font: var(--font-interface, "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #cbc3d8);
  --metadata-label-text-color-hover: var(--text-muted, #cbc3d8);
  --metadata-property-background-active: var(--background-modifier-hover, rgba( from #cbc3d8 r g b / 0.08 ));
  --modal-background: var(--background-primary, #14121b);
  --nav-collapse-icon-color: var(--collapse-icon-color, #cbc3d8);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #cbc3d8);
  --nav-heading-color: var(--text-normal, #e7e0ee);
  --nav-heading-color-collapsed: var(--text-faint, #cbc3d8);
  --nav-heading-color-collapsed-hover: var(--text-muted, #cbc3d8);
  --nav-heading-color-hover: var(--text-normal, #e7e0ee);
  --nav-item-background-active: var(--background-modifier-hover, #4d3a83);
  --nav-item-background-hover: var(--background-modifier-hover, rgba( from #cbc3d8 r g b / 0.08 ));
  --nav-item-color: var(--text-muted, #cbc3d8);
  --nav-item-color-active: var(--text-normal, #e8ddff);
  --nav-item-color-highlighted: var(--text-accent, #cebdff);
  --nav-item-color-hover: var(--text-normal, #e7e0ee);
  --nav-item-color-selected: var(--text-normal, #e7e0ee);
  --nav-item-radius: var(--radius-s, 8px);
  --nav-tag-color: var(--text-faint, #cbc3d8);
  --nav-tag-color-active: var(--text-muted, #cbc3d8);
  --nav-tag-color-hover: var(--text-muted, #cbc3d8);
  --nav-tag-radius: var(--radius-s, 8px);
  --pdf-background: var(--background-primary, #14121b);
  --pdf-page-background: var(--background-primary, #14121b);
  --pdf-sidebar-background: var(--background-primary, #14121b);
  --pill-border-color: var(--background-modifier-border, #494455);
  --pill-border-color-hover: var(--background-modifier-border-hover, #494455);
  --pill-color: var(--text-muted, #cbc3d8);
  --pill-color-hover: var(--text-normal, #e7e0ee);
  --pill-color-remove: var(--text-faint, #cbc3d8);
  --pill-color-remove-hover: var(--text-accent, #cebdff);
  --prompt-background: var(--background-primary, #14121b);
  --radius-l: 16px;
  --radius-m: 12px;
  --radius-s: 8px;
  --raised-background: var(--blur-background, color-mix(in srgb, #36333e 65%, transparent) linear-gradient(#36333e, color-mix(in srgb, #36333e 65%, transparent)));
  --ribbon-background: var(--background-secondary, #211e28);
  --ribbon-background-collapsed: var(--background-primary, #14121b);
  --scrollbar-radius: var(--radius-l, 16px);
  --search-clear-button-color: var(--text-muted, #cbc3d8);
  --search-icon-color: var(--text-muted, #cbc3d8);
  --search-result-background: var(--background-primary, #14121b);
  --secondary: var(--text-accent, var(--color-accent-1, #cebdff));
  --setting-group-heading-color: var(--text-normal, #e7e0ee);
  --setting-items-background: var(--background-primary-alt, #1d1a24);
  --setting-items-border-color: var(--background-modifier-border, #494455);
  --setting-items-radius: var(--radius-l, 16px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #cbc3d8);
  --shiki-code-background: var(--code-background, #1d1a24);
  --shiki-code-block-border-radius: var(--code-radius, 8px);
  --shiki-code-comment: var(--text-faint, #cbc3d8);
  --shiki-code-normal: var(--text-muted, #cbc3d8);
  --shiki-code-punctuation: var(--text-muted, #cbc3d8);
  --shiki-gutter-border-color: var(--background-modifier-border, #494455);
  --shiki-gutter-text-color: var(--text-faint, #cbc3d8);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #cbc3d8);
  --shiki-highlight-neutral: var(--shiki-code-normal, #cbc3d8);
  --shiki-terminal-dots-color: var(--text-faint, #cbc3d8);
  --shiki-tooltip-background: var(--background-modifier-message, #e7e0ee);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #494455);
  --slider-thumb-border-width: var(--border-width, 0px);
  --slider-thumb-radius: var(--slider-thumb-height, 9999px);
  --slider-track-background: var(--background-modifier-border, #4d3a83);
  --status-bar-background: var(--background-secondary, #211e28);
  --status-bar-border-color: var(--divider-color, #494455);
  --status-bar-radius: var(--radius-m, 12px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #cbc3d8);
  --suggestion-background: var(--background-primary, #14121b);
  --tab-background-active: var(--background-primary, #14121b);
  --tab-container-background: var(--background-secondary, #211e28);
  --tab-divider-color: var(--background-modifier-border-hover, #494455);
  --tab-outline-color: var(--divider-color, #494455);
  --tab-radius: var(--radius-s, 8px);
  --tab-radius-active: 4px 4px 0px 0px;
  --tab-switcher-background: var(--background-secondary, #211e28);
  --tab-text-color: var(--text-faint, #cbc3d8);
  --tab-text-color-active: var(--text-muted, #cbc3d8);
  --tab-text-color-focused: var(--text-muted, #cbc3d8);
  --tab-text-color-focused-active: var(--text-muted, #cbc3d8);
  --tab-text-color-focused-active-current: var(--text-normal, #e7e0ee);
  --tab-text-color-focused-highlighted: var(--text-accent, #cebdff);
  --table-add-button-border-color: var(--background-modifier-border, #494455);
  --table-border-color: var(--background-modifier-border, #494455);
  --table-drag-handle-background-active: var(--table-selection-border-color, #cebdff);
  --table-drag-handle-color: var(--text-faint, #cbc3d8);
  --table-drag-handle-color-active: var(--text-on-accent, #390093);
  --table-header-border-color: var(--table-border-color, #494455);
  --table-header-color: var(--text-normal, #e7e0ee);
  --table-selection-border-color: var(--interactive-accent, #cebdff);
  --tag-color: var(--text-accent, #cebdff);
  --tag-color-hover: var(--text-accent, #cebdff);
  --tertiary: var(--interactive-accent-hover, var(--color-accent-1, rgb( from #cebdff r g b / 0.9 )));
  --text-accent: var(--color-accent-1, #cebdff);
  --text-faint: var(--color-base-50, #cbc3d8);
  --text-muted: var(--color-base-70, #cbc3d8);
  --text-normal: var(--color-base-100, #e7e0ee);
  --text-on-accent: #390093;
  --titleFont: var(--font-text-theme, "Roboto");
  --titlebar-background: var(--background-secondary, #211e28);
  --titlebar-background-focused: var(--background-secondary-alt, #36333e);
  --titlebar-border-color: var(--background-modifier-border, #494455);
  --titlebar-text-color: var(--text-muted, #cbc3d8);
  --titlebar-text-color-focused: var(--text-normal, #e7e0ee);
  --vault-profile-color: var(--text-normal, #e7e0ee);
  --vault-profile-color-hover: var(--vault-profile-color, #e7e0ee);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(33, 30, 40));
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(20, 18, 27));
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(33, 30, 40));
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(73, 68, 85);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(33, 30, 40));
  border-left-color: rgb(73, 68, 85);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body html {
  --md-extended-blue-seed: rgb(8, 109, 221);
  --md-extended-blue-value: rgb(81, 100, 224);
  --md-extended-cyan-seed: rgb(0, 191, 188);
  --md-extended-cyan-value: rgb(5, 189, 208);
  --md-extended-green-seed: rgb(8, 185, 78);
  --md-extended-green-value: rgb(0, 183, 126);
  --md-extended-orange-seed: rgb(236, 117, 0);
  --md-extended-orange-value: rgb(244, 109, 60);
  --md-extended-pink-seed: rgb(213, 57, 132);
  --md-extended-pink-value: rgb(203, 59, 172);
  --md-extended-purple-seed: rgb(120, 82, 238);
  --md-extended-purple-value: rgb(122, 81, 237);
  --md-extended-red-seed: rgb(233, 49, 71);
  --md-extended-red-value: rgb(231, 42, 119);
  --md-extended-yellow-seed: rgb(224, 172, 0);
  --md-extended-yellow-value: rgb(244, 163, 23);
  --md-key-colors-primary: rgb(134, 88, 255);
  --md-source-seed: rgb(134, 88, 255);
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
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(231, 224, 238));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(231, 224, 238));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(231, 224, 238));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(231, 224, 238));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--text-normal, rgb(231, 224, 238));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body del {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(231, 224, 238));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(203, 195, 216);
  border-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(206, 189, 255));
  border-color: rgb(206, 189, 255);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(203, 195, 216));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(203, 195, 216) none 0px;
  text-decoration-color: rgb(203, 195, 216);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(206, 189, 255));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(206, 189, 255) none 0px;
  text-decoration-color: rgb(206, 189, 255);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(206, 189, 255));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(206, 189, 255) none 0px;
  text-decoration-color: rgb(206, 189, 255);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(255, 180, 171));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 180, 171) none 0px;
  text-decoration: underline rgba(206, 189, 255, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(206, 189, 255, 0.3));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --background-modifier-active-hover: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.1);
  --background-modifier-border: transparent;
  --background-modifier-border-focus: #494455;
  --background-modifier-border-hover: #494455;
  --background-modifier-error: #ffb4ab;
  --background-modifier-error-hover: #ffb4ab;
  --background-modifier-error-rgb: 255, 180, 171;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: #0f0d16;
  --background-modifier-hover: rgba( from #cbc3d8 r g b / 0.08 );
  --background-modifier-success: rgb(77, 223, 162);
  --background-modifier-success-rgb: 77, 223, 162;
  --background-primary: #14121b;
  --background-primary-alt: #1d1a24;
  --background-secondary: #211e28;
  --background-secondary-alt: #36333e;
  --blockquote-border-color: #cebdff;
  --blur-background: color-mix(in srgb, #36333e 65%, transparent) linear-gradient(#36333e, color-mix(in srgb, #36333e 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 28px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 8px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #14121b;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e7e0ee;
  --checkbox-border-color: #cbc3d8;
  --checkbox-border-color-hover: #cbc3d8;
  --checkbox-color: #cebdff;
  --checkbox-color-hover: rgb( from #cebdff r g b / 0.9 );
  --checkbox-marker-color: #14121b;
  --checkbox-radius: 2px;
  --checkbox-size: 16px;
  --checklist-done-color: #cbc3d8;
  --clickable-icon-radius: 8px;
  --code-background: #1d1a24;
  --code-border-color: #494455;
  --code-bracket-background: rgba( from #cbc3d8 r g b / 0.08 );
  --code-comment: #cbc3d8;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e7e0ee;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #cbc3d8;
  --code-radius: 8px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #cbc3d8;
  --collapse-icon-color-collapsed: #cebdff;
  --color-accent: #cebdff;
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 255.4545454545deg, 100%, 87.0588235294%;
  --divider-color: #494455;
  --divider-color-hover: #cebdff;
  --divider-vertical-height: 100%;
  --dropdown-background: #36333e;
  --dropdown-background-hover: rgba( from #cbc3d8 r g b / 0.08 );
  --dropdown-background-position: right 16px top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #36333e;
  --flair-color: #e7e0ee;
  --font-interface: '??', "Roboto", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', "Roboto", 'Arial';
  --font-text: '??', "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #cbc3d8;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #cebdff;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #cbc3d8;
  --graph-text: #e7e0ee;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #cbc3d8;
  --heading-spacing: 2.5rem;
  --hr-color: #494455;
  --interactive-accent: #cebdff;
  --interactive-accent-hover: rgb( from #cebdff r g b / 0.9 );
  --interactive-accent-hsl: 255.4545454545deg, 100%, 87.0588235294%;
  --interactive-hover: rgba( from #cbc3d8 r g b / 0.08 );
  --interactive-normal: #36333e;
  --link-color: #cebdff;
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: #cebdff;
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: #ffb4ab;
  --link-unresolved-decoration-color: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --md-extended-green-color: rgb(77, 223, 162);
  --md-ripple-height: 32px;
  --md-ripple-hover-color: #cbc3d8;
  --md-ripple-hover-opacity: 0.08;
  --md-ripple-pressed-color: #cbc3d8;
  --md-ripple-pressed-opacity: 0.12;
  --md-ripple-shape: var(--md-sys-shape-corner-small, 8px);
  --menu-background: #211e28;
  --menu-border-color: #494455;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 12px;
  --pdf-background: #14121b;
  --pdf-page-background: #14121b;
  --pdf-shadow: 0 0 0 1px #494455;
  --pdf-sidebar-background: #14121b;
  --pdf-thumbnail-shadow: 0 0 0 1px #494455;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #36333e 65%, transparent) linear-gradient(#36333e, color-mix(in srgb, #36333e 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --resizer-size: 20px;
  --scrollbar-active-thumb-bg: #948ea1;
  --scrollbar-bg: #948ea1;
  --scrollbar-radius: 16px;
  --scrollbar-thumb-bg: #494455;
  --search-clear-button-color: #cbc3d8;
  --search-icon-color: #cbc3d8;
  --search-result-background: #14121b;
  --setting-group-heading-color: #e7e0ee;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #1d1a24;
  --setting-items-border-color: #494455;
  --setting-items-padding: 20px;
  --setting-items-radius: 16px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --shiki-active-tab-border-color: #cbc3d8;
  --shiki-code-background: #1d1a24;
  --shiki-code-block-border-radius: 8px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #cbc3d8;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #cbc3d8;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #cbc3d8;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #494455;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #cbc3d8;
  --shiki-gutter-text-color-highlight: #cbc3d8;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #cbc3d8;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #cbc3d8;
  --shiki-tooltip-background: #e7e0ee;
  --suggestion-background: #14121b;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #14121b;
  --tab-divider-color: #494455;
  --tab-font-size: 13px;
  --tab-outline-color: #494455;
  --tab-radius: 8px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #211e28;
  --tab-switcher-menubar-background: linear-gradient(to top, #211e28, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #cebdff;
  --tab-text-color: #cbc3d8;
  --tab-text-color-active: #cbc3d8;
  --tab-text-color-focused: #cbc3d8;
  --tab-text-color-focused-active: #cbc3d8;
  --tab-text-color-focused-active-current: #e7e0ee;
  --tab-text-color-focused-highlighted: #cebdff;
  --table-add-button-border-color: #494455;
  --table-add-button-border-width: 1px;
  --table-border-color: #494455;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #cebdff;
  --table-drag-handle-color: #cbc3d8;
  --table-drag-handle-color-active: #390093;
  --table-header-background: transparent;
  --table-header-border-color: #494455;
  --table-header-border-width: 1px;
  --table-header-color: #e7e0ee;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #cebdff;
  --table-text-size: 16px;
  --tag-background: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.1);
  --tag-background-hover: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.2);
  --tag-border-color: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.15);
  --tag-border-color-hover: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.15);
  --tag-color: #cebdff;
  --tag-color-hover: #cebdff;
  --tag-size: 0.875em;
  --text-accent: #cebdff;
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #cbc3d8;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #cbc3d8;
  --text-normal: #e7e0ee;
  --text-selection: hsla(255.4545454545deg, 100%, 87.0588235294%, 0.33);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --zoom-multiplier: 1;
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(206, 189, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(206, 189, 255);
  border-left-width: 0px;
  border-right-color: rgb(206, 189, 255);
  border-right-width: 0px;
  border-top-color: rgb(206, 189, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--pill-color, rgb(206, 189, 255));
  content: "";
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 14px;
  font-weight: var(--pill-weight, 400);
  line-height: var(--line-height-tight, 14px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, -36.6484, -16);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body dt {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(203, 195, 216));
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body table {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.188px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: var(--table-text-color, rgb(231, 224, 238));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: var(--table-header-color, rgb(231, 224, 238));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(29, 26, 36));
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, rgb(231, 224, 238));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(29, 26, 36));
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(29, 26, 36));
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(231, 224, 238);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(206, 189, 255);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(203, 195, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(203, 195, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(231, 224, 238);
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 18, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 18, 27);
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
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(231, 224, 238);
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
  color: var(--text-normal, rgb(231, 224, 238));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--md-sys-color-surface, rgb(20, 18, 27));
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

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  background-color: var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 224, 238) none 0px;
  text-decoration-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.796078 0.764706 0.847059 / 0.08));
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-width: 0px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, color(srgb 0.796078 0.764706 0.847059 / 0.08));
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.796078 0.764706 0.847059 / 0.08));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
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

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(206, 189, 255);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(231, 224, 238));
  font-family: var(--h1-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(231, 224, 238));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(231, 224, 238));
  font-family: var(--h2-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(231, 224, 238));
  font-family: var(--inline-title-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(231, 224, 238));
  font-family: var(--h3-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(231, 224, 238));
  font-family: var(--h4-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(231, 224, 238));
  font-family: var(--h5-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(231, 224, 238));
  font-family: var(--h6-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(203, 195, 216));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(203, 195, 216));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(231, 224, 238);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--icon-color, rgb(203, 195, 216));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(33, 30, 40));
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 12px;
  color: var(--status-bar-text-color, rgb(203, 195, 216));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(203, 195, 216);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(231, 224, 238);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(203, 195, 216));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(203, 195, 216));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--icon-color, rgb(203, 195, 216));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(203, 195, 216);
  stroke: rgb(203, 195, 216);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
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

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(203, 195, 216));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(231, 224, 238));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(33, 30, 40));
  border-color: rgb(231, 224, 238);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(73, 68, 85);
  color: var(--table-header-color, rgb(231, 224, 238));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: var(--text-muted, rgb(203, 195, 216));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: rgb(203, 195, 216);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(73, 68, 85);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(203, 195, 216);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(203, 195, 216);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 8px;
  color: var(--pill-color, rgb(206, 189, 255));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(203, 195, 216);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(20, 18, 27));
  color: var(--text-normal, rgb(231, 224, 238));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(33, 30, 40));
  border-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(54, 51, 62));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(231, 224, 238);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(33, 30, 40));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(231, 224, 238));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: var(--text-normal, rgb(203, 195, 216));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(29, 26, 36));
  border-bottom-color: rgb(231, 224, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, rgb(231, 224, 238));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(231, 224, 238);
  border-left-color: rgb(231, 224, 238);
  border-right-color: rgb(231, 224, 238);
  border-top-color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body sub {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body summary {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body sup {
  color: rgb(231, 224, 238);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(206, 189, 255, 0.1));
  border-bottom-color: rgba(206, 189, 255, 0.15);
  border-left-color: rgba(206, 189, 255, 0.15);
  border-right-color: rgba(206, 189, 255, 0.15);
  border-top-color: rgba(206, 189, 255, 0.15);
  color: var(--tag-color, rgb(206, 189, 255));
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: var(--color-base-30, #cbc3d8);
  --background-modifier-border-focus: var(--color-base-40, #cbc3d8);
  --background-modifier-border-hover: var(--color-base-35, #cbc3d8);
  --background-modifier-cover: rgba( from #000000 r g b / 0.32 );
  --background-modifier-error: var(--color-red, #ba1a1a);
  --background-modifier-error-hover: var(--color-red, #ba1a1a);
  --background-modifier-error-rgb: var(--color-red-rgb, 186, 26, 26);
  --background-modifier-message: #322f39;
  --background-modifier-success: var(--md-extended-green-color, rgb(0, 108, 73));
  --background-modifier-success-rgb: var(--md-extended-green-color-rgb, 0, 108, 73);
  --background-primary: var(--color-base-00, #fdf7ff);
  --background-primary-alt: var(--color-base-10, #f8f1ff);
  --background-secondary: var(--color-base-20, #f2ebf9);
  --background-secondary-alt: var(--color-base-05, #e7e0ee);
  --bases-cards-background: var(--background-primary, #fdf7ff);
  --bases-cards-cover-background: var(--background-primary-alt, #f8f1ff);
  --bases-cards-radius: var(--radius-m, 12px);
  --bases-embed-border-color: var(--background-modifier-border, #cbc3d8);
  --bases-embed-border-radius: var(--radius-s, 8px);
  --bases-group-heading-property-color: var(--text-muted, #494455);
  --bases-table-border-color: var(--table-border-color, #cbc3d8);
  --bases-table-cell-background-active: var(--background-primary, #fdf7ff);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #f8f1ff);
  --bases-table-cell-background-selected: var(--table-selection, hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 8px);
  --bases-table-group-background: var(--background-primary-alt, #f8f1ff);
  --bases-table-header-background: var(--background-primary, #fdf7ff);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba( from #494455 r g b / 0.08 ));
  --bases-table-header-color: var(--text-muted, #494455);
  --bases-table-summary-background: var(--background-primary, #fdf7ff);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba( from #494455 r g b / 0.08 ));
  --blockquote-border-color: var(--interactive-accent, #6b36e2);
  --bodyFont: var(--font-text-theme, "Roboto");
  --button-radius: var(--input-radius, 28px);
  --callout-radius: var(--radius-s, 8px);
  --canvas-background: var(--background-primary, #fdf7ff);
  --canvas-card-label-color: var(--text-faint, #494455);
  --canvas-controls-radius: var(--radius-s, 8px);
  --caret-color: var(--text-normal, #1d1a24);
  --checkbox-border-color: var(--text-faint, #494455);
  --checkbox-border-color-hover: var(--text-muted, #494455);
  --checkbox-color: var(--interactive-accent, #6b36e2);
  --checkbox-color-hover: var(--interactive-accent-hover, rgb( from #6b36e2 r g b / 0.9 ));
  --checkbox-marker-color: var(--background-primary, #fdf7ff);
  --checkbox-radius: var(--radius-s, 2px);
  --checklist-done-color: var(--text-muted, #494455);
  --clickable-icon-radius: var(--radius-s, 8px);
  --code-background: var(--background-primary-alt, #f8f1ff);
  --code-border-color: var(--background-modifier-border, #cbc3d8);
  --code-bracket-background: var(--background-modifier-hover, rgba( from #494455 r g b / 0.08 ));
  --code-comment: var(--text-faint, #494455);
  --code-normal: var(--text-normal, #1d1a24);
  --code-punctuation: var(--text-muted, #494455);
  --code-radius: var(--radius-s, 8px);
  --collapse-icon-color: var(--text-faint, #494455);
  --collapse-icon-color-collapsed: var(--text-accent, #6b36e2);
  --dark: var(--text-normal, var(--color-base-100, #1d1a24));
  --darkgray: var(--text-normal, var(--color-base-100, #1d1a24));
  --divider-color: var(--background-modifier-border, #cbc3d8);
  --divider-color-hover: var(--interactive-accent, #6b36e2);
  --dropdown-background: var(--interactive-normal, #e7e0ee);
  --dropdown-background-hover: var(--interactive-hover, rgba( from #494455 r g b / 0.08 ));
  --file-header-background: var(--background-primary, #fdf7ff);
  --file-header-background-focused: var(--background-primary, #fdf7ff);
  --file-header-font: var(--font-interface, "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, #e7e0ee);
  --flair-color: var(--text-normal, #1d1a24);
  --font-interface-theme: "Roboto";
  --font-mermaid: var(--font-text, "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: "Roboto";
  --footnote-divider-color: var(--metadata-divider-color, #cbc3d8);
  --footnote-id-color: var(--text-muted, #494455);
  --footnote-id-color-no-occurrences: var(--text-faint, #494455);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba( from #494455 r g b / 0.08 ));
  --footnote-radius: var(--radius-s, 8px);
  --graph-node: var(--text-muted, #494455);
  --graph-node-focused: var(--text-accent, #6b36e2);
  --graph-node-unresolved: var(--text-faint, #494455);
  --graph-text: var(--text-normal, #1d1a24);
  --gray: var(--text-muted, var(--color-base-70, #494455));
  --headerFont: var(--font-text-theme, "Roboto");
  --heading-formatting: var(--text-faint, #494455);
  --hr-color: var(--background-modifier-border, #cbc3d8);
  --icon-color: var(--text-muted, #494455);
  --icon-color-active: var(--text-accent, #6b36e2);
  --icon-color-focused: var(--text-normal, #494455);
  --icon-color-hover: var(--text-muted, #494455);
  --icon-opacity: 1;
  --input-date-separator: var(--text-faint, #494455);
  --input-height: 40px;
  --input-placeholder-color: var(--text-faint, #494455);
  --input-radius: 28px;
  --interactive-accent: var(--color-accent-1, #6b36e2);
  --interactive-accent-hover: var(--color-accent-2, rgb( from #6b36e2 r g b / 0.9 ));
  --interactive-accent-hsl: var(--color-accent-hsl, 258.488372093deg, 74.7826086957%, 54.9019607843%);
  --interactive-hover: var(--background-modifier-hover, rgba( from #494455 r g b / 0.08 ));
  --interactive-normal: var(--color-base-00, #e7e0ee);
  --light: var(--background-primary, var(--color-base-00, #fdf7ff));
  --lightgray: var(--background-secondary, var(--color-base-20, #f2ebf9));
  --link-color: var(--text-accent, #6b36e2);
  --link-external-color: var(--text-accent, #6b36e2);
  --link-unresolved-color: var(--text-accent, #ba1a1a);
  --link-unresolved-opacity: 1;
  --list-marker-color: var(--text-faint, #494455);
  --list-marker-color-collapsed: var(--text-accent, #6b36e2);
  --list-marker-color-hover: var(--text-muted, #494455);
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
  --md-extended-green-color: rgb(var(--md-extended-green-color-rgb));
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
  --menu-background: var(--background-secondary, #f2ebf9);
  --menu-border-color: var(--background-modifier-border-hover, #cbc3d8);
  --menu-radius: var(--radius-m, 12px);
  --metadata-border-color: var(--background-modifier-border, #cbc3d8);
  --metadata-divider-color: var(--background-modifier-border, #cbc3d8);
  --metadata-input-background-active: var(--background-modifier-hover, rgba( from #494455 r g b / 0.08 ));
  --metadata-input-font: var(--font-interface, "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #1d1a24);
  --metadata-label-background-active: var(--background-modifier-hover, rgba( from #494455 r g b / 0.08 ));
  --metadata-label-font: var(--font-interface, "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #494455);
  --metadata-label-text-color-hover: var(--text-muted, #494455);
  --metadata-property-background-active: var(--background-modifier-hover, rgba( from #494455 r g b / 0.08 ));
  --modal-background: var(--background-primary, #fdf7ff);
  --nav-collapse-icon-color: var(--collapse-icon-color, #494455);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #494455);
  --nav-heading-color: var(--text-normal, #1d1a24);
  --nav-heading-color-collapsed: var(--text-faint, #494455);
  --nav-heading-color-collapsed-hover: var(--text-muted, #494455);
  --nav-heading-color-hover: var(--text-normal, #1d1a24);
  --nav-item-background-active: var(--background-modifier-hover, #e8ddff);
  --nav-item-background-hover: var(--background-modifier-hover, rgba( from #494455 r g b / 0.08 ));
  --nav-item-color: var(--text-muted, #494455);
  --nav-item-color-active: var(--text-normal, #210656);
  --nav-item-color-highlighted: var(--text-accent, #6b36e2);
  --nav-item-color-hover: var(--text-normal, #1d1a24);
  --nav-item-color-selected: var(--text-normal, #1d1a24);
  --nav-item-radius: var(--radius-s, 8px);
  --nav-tag-color: var(--text-faint, #494455);
  --nav-tag-color-active: var(--text-muted, #494455);
  --nav-tag-color-hover: var(--text-muted, #494455);
  --nav-tag-radius: var(--radius-s, 8px);
  --pdf-background: var(--background-primary, #fdf7ff);
  --pdf-page-background: var(--background-primary, #fdf7ff);
  --pdf-sidebar-background: var(--background-primary, #fdf7ff);
  --pill-border-color: var(--background-modifier-border, #cbc3d8);
  --pill-border-color-hover: var(--background-modifier-border-hover, #cbc3d8);
  --pill-color: var(--text-muted, #494455);
  --pill-color-hover: var(--text-normal, #1d1a24);
  --pill-color-remove: var(--text-faint, #494455);
  --pill-color-remove-hover: var(--text-accent, #6b36e2);
  --prompt-background: var(--background-primary, #fdf7ff);
  --radius-l: 16px;
  --radius-m: 12px;
  --radius-s: 8px;
  --raised-background: var(--blur-background, color-mix(in srgb, #fdf7ff 65%, transparent) linear-gradient(#fdf7ff, color-mix(in srgb, #fdf7ff 65%, transparent)));
  --ribbon-background: var(--background-secondary, #f2ebf9);
  --ribbon-background-collapsed: var(--background-primary, #fdf7ff);
  --scrollbar-radius: var(--radius-l, 16px);
  --search-clear-button-color: var(--text-muted, #494455);
  --search-icon-color: var(--text-muted, #494455);
  --search-result-background: var(--background-primary, #fdf7ff);
  --secondary: var(--text-accent, var(--color-accent, #6b36e2));
  --setting-group-heading-color: var(--text-normal, #1d1a24);
  --setting-items-background: var(--background-primary-alt, #f8f1ff);
  --setting-items-border-color: var(--background-modifier-border, #cbc3d8);
  --setting-items-radius: var(--radius-l, 16px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #494455);
  --shiki-code-background: var(--code-background, #f8f1ff);
  --shiki-code-block-border-radius: var(--code-radius, 8px);
  --shiki-code-comment: var(--text-faint, #494455);
  --shiki-code-normal: var(--text-muted, #494455);
  --shiki-code-punctuation: var(--text-muted, #494455);
  --shiki-gutter-border-color: var(--background-modifier-border, #cbc3d8);
  --shiki-gutter-text-color: var(--text-faint, #494455);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #494455);
  --shiki-highlight-neutral: var(--shiki-code-normal, #494455);
  --shiki-terminal-dots-color: var(--text-faint, #494455);
  --shiki-tooltip-background: var(--background-modifier-message, #322f39);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #cbc3d8);
  --slider-thumb-border-width: var(--border-width, 0px);
  --slider-thumb-radius: var(--slider-thumb-height, 9999px);
  --slider-track-background: var(--background-modifier-border, #e8ddff);
  --status-bar-background: var(--background-secondary, #f2ebf9);
  --status-bar-border-color: var(--divider-color, #cbc3d8);
  --status-bar-radius: var(--radius-m, 12px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #494455);
  --suggestion-background: var(--background-primary, #fdf7ff);
  --tab-background-active: var(--background-primary, #fdf7ff);
  --tab-container-background: var(--background-secondary, #f2ebf9);
  --tab-divider-color: var(--background-modifier-border-hover, #cbc3d8);
  --tab-outline-color: var(--divider-color, #cbc3d8);
  --tab-radius: var(--radius-s, 8px);
  --tab-radius-active: 4px 4px 0px 0px;
  --tab-switcher-background: var(--background-secondary, #f2ebf9);
  --tab-text-color: var(--text-faint, #494455);
  --tab-text-color-active: var(--text-muted, #494455);
  --tab-text-color-focused: var(--text-muted, #494455);
  --tab-text-color-focused-active: var(--text-muted, #494455);
  --tab-text-color-focused-active-current: var(--text-normal, #1d1a24);
  --tab-text-color-focused-highlighted: var(--text-accent, #6b36e2);
  --table-add-button-border-color: var(--background-modifier-border, #cbc3d8);
  --table-border-color: var(--background-modifier-border, #cbc3d8);
  --table-drag-handle-background-active: var(--table-selection-border-color, #6b36e2);
  --table-drag-handle-color: var(--text-faint, #494455);
  --table-drag-handle-color-active: var(--text-on-accent, #ffffff);
  --table-header-border-color: var(--table-border-color, #cbc3d8);
  --table-header-color: var(--text-normal, #1d1a24);
  --table-selection-border-color: var(--interactive-accent, #6b36e2);
  --tag-color: var(--text-accent, #6b36e2);
  --tag-color-hover: var(--text-accent, #6b36e2);
  --tertiary: var(--interactive-accent-hover, var(--color-accent-2, rgb( from #6b36e2 r g b / 0.9 )));
  --text-accent: var(--color-accent, #6b36e2);
  --text-faint: var(--color-base-50, #494455);
  --text-muted: var(--color-base-70, #494455);
  --text-normal: var(--color-base-100, #1d1a24);
  --text-on-accent: #ffffff;
  --titleFont: var(--font-text-theme, "Roboto");
  --titlebar-background: var(--background-secondary, #f2ebf9);
  --titlebar-background-focused: var(--background-secondary-alt, #e7e0ee);
  --titlebar-border-color: var(--background-modifier-border, #cbc3d8);
  --titlebar-text-color: var(--text-muted, #494455);
  --titlebar-text-color-focused: var(--text-normal, #1d1a24);
  --vault-profile-color: var(--text-normal, #1d1a24);
  --vault-profile-color-hover: var(--vault-profile-color, #1d1a24);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(242, 235, 249));
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(253, 247, 255));
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(242, 235, 249));
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(203, 195, 216);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(242, 235, 249));
  border-left-color: rgb(203, 195, 216);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body html {
  --md-extended-blue-seed: rgb(8, 109, 221);
  --md-extended-blue-value: rgb(81, 100, 224);
  --md-extended-cyan-seed: rgb(0, 191, 188);
  --md-extended-cyan-value: rgb(5, 189, 208);
  --md-extended-green-seed: rgb(8, 185, 78);
  --md-extended-green-value: rgb(0, 183, 126);
  --md-extended-orange-seed: rgb(236, 117, 0);
  --md-extended-orange-value: rgb(244, 109, 60);
  --md-extended-pink-seed: rgb(213, 57, 132);
  --md-extended-pink-value: rgb(203, 59, 172);
  --md-extended-purple-seed: rgb(120, 82, 238);
  --md-extended-purple-value: rgb(122, 81, 237);
  --md-extended-red-seed: rgb(233, 49, 71);
  --md-extended-red-value: rgb(231, 42, 119);
  --md-extended-yellow-seed: rgb(224, 172, 0);
  --md-extended-yellow-value: rgb(244, 163, 23);
  --md-key-colors-primary: rgb(134, 88, 255);
  --md-source-seed: rgb(134, 88, 255);
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
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(29, 26, 36));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(29, 26, 36));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(29, 26, 36));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(29, 26, 36));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .text-highlight {
  color: var(--text-normal, rgb(29, 26, 36));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body del {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(29, 26, 36));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(73, 68, 85);
  border-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(107, 54, 226));
  border-color: rgb(107, 54, 226);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(73, 68, 85));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(73, 68, 85) none 0px;
  text-decoration-color: rgb(73, 68, 85);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(107, 54, 226));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(107, 54, 226) none 0px;
  text-decoration-color: rgb(107, 54, 226);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(107, 54, 226));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(107, 54, 226) none 0px;
  text-decoration-color: rgb(107, 54, 226);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(186, 26, 26));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 26, 26) none 0px;
  text-decoration: underline rgba(107, 54, 226, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(107, 54, 226, 0.3));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --background-modifier-active-hover: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.1);
  --background-modifier-border: transparent;
  --background-modifier-border-focus: #cbc3d8;
  --background-modifier-border-hover: #cbc3d8;
  --background-modifier-error: #ba1a1a;
  --background-modifier-error-hover: #ba1a1a;
  --background-modifier-error-rgb: 186, 26, 26;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba( from #494455 r g b / 0.08 );
  --background-modifier-success: rgb(0, 108, 73);
  --background-modifier-success-rgb: 0, 108, 73;
  --background-primary: #fdf7ff;
  --background-primary-alt: #f8f1ff;
  --background-secondary: #f2ebf9;
  --background-secondary-alt: #e7e0ee;
  --blockquote-border-color: #6b36e2;
  --blur-background: color-mix(in srgb, #fdf7ff 65%, transparent) linear-gradient(#fdf7ff, color-mix(in srgb, #fdf7ff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 28px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 8px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #fdf7ff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #1d1a24;
  --checkbox-border-color: #494455;
  --checkbox-border-color-hover: #494455;
  --checkbox-color: #6b36e2;
  --checkbox-color-hover: rgb( from #6b36e2 r g b / 0.9 );
  --checkbox-marker-color: #fdf7ff;
  --checkbox-radius: 2px;
  --checkbox-size: 16px;
  --checklist-done-color: #494455;
  --clickable-icon-radius: 8px;
  --code-background: #f8f1ff;
  --code-border-color: #cbc3d8;
  --code-bracket-background: rgba( from #494455 r g b / 0.08 );
  --code-comment: #494455;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #1d1a24;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #494455;
  --code-radius: 8px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #494455;
  --collapse-icon-color-collapsed: #6b36e2;
  --color-accent: #6b36e2;
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258.488372093deg, 74.7826086957%, 54.9019607843%;
  --divider-color: #cbc3d8;
  --divider-color-hover: #6b36e2;
  --divider-vertical-height: 100%;
  --dropdown-background: #e7e0ee;
  --dropdown-background-hover: rgba( from #494455 r g b / 0.08 );
  --dropdown-background-position: right 16px top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #e7e0ee;
  --flair-color: #1d1a24;
  --font-interface: '??', "Roboto", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', "Roboto", 'Arial';
  --font-text: '??', "Roboto", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #494455;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: #6b36e2;
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #494455;
  --graph-text: #1d1a24;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #494455;
  --heading-spacing: 2.5rem;
  --hr-color: #cbc3d8;
  --interactive-accent: #6b36e2;
  --interactive-accent-hover: rgb( from #6b36e2 r g b / 0.9 );
  --interactive-accent-hsl: 258.488372093deg, 74.7826086957%, 54.9019607843%;
  --interactive-hover: rgba( from #494455 r g b / 0.08 );
  --interactive-normal: #e7e0ee;
  --link-color: #6b36e2;
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: #6b36e2;
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: #ba1a1a;
  --link-unresolved-decoration-color: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --md-extended-green-color: rgb(0, 108, 73);
  --md-ripple-height: 32px;
  --md-ripple-hover-color: #494455;
  --md-ripple-hover-opacity: 0.08;
  --md-ripple-pressed-color: #494455;
  --md-ripple-pressed-opacity: 0.12;
  --md-ripple-shape: var(--md-sys-shape-corner-small, 8px);
  --menu-background: #f2ebf9;
  --menu-border-color: #cbc3d8;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 12px;
  --pdf-background: #fdf7ff;
  --pdf-page-background: #fdf7ff;
  --pdf-sidebar-background: #fdf7ff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #fdf7ff 65%, transparent) linear-gradient(#fdf7ff, color-mix(in srgb, #fdf7ff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --resizer-size: 20px;
  --scrollbar-active-thumb-bg: #7a7487;
  --scrollbar-bg: #7a7487;
  --scrollbar-radius: 16px;
  --scrollbar-thumb-bg: #cbc3d8;
  --search-clear-button-color: #494455;
  --search-icon-color: #494455;
  --search-result-background: #fdf7ff;
  --setting-group-heading-color: #1d1a24;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #f8f1ff;
  --setting-items-border-color: #cbc3d8;
  --setting-items-padding: 20px;
  --setting-items-radius: 16px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --shiki-active-tab-border-color: #494455;
  --shiki-code-background: #f8f1ff;
  --shiki-code-block-border-radius: 8px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #494455;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #494455;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #494455;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #cbc3d8;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #494455;
  --shiki-gutter-text-color-highlight: #494455;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #494455;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #494455;
  --shiki-tooltip-background: #322f39;
  --suggestion-background: #fdf7ff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #fdf7ff;
  --tab-divider-color: #cbc3d8;
  --tab-font-size: 13px;
  --tab-outline-color: #cbc3d8;
  --tab-radius: 8px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f2ebf9;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2ebf9, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #6b36e2;
  --tab-text-color: #494455;
  --tab-text-color-active: #494455;
  --tab-text-color-focused: #494455;
  --tab-text-color-focused-active: #494455;
  --tab-text-color-focused-active-current: #1d1a24;
  --tab-text-color-focused-highlighted: #6b36e2;
  --table-add-button-border-color: #cbc3d8;
  --table-add-button-border-width: 1px;
  --table-border-color: #cbc3d8;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #6b36e2;
  --table-drag-handle-color: #494455;
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: transparent;
  --table-header-border-color: #cbc3d8;
  --table-header-border-width: 1px;
  --table-header-color: #1d1a24;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #6b36e2;
  --table-text-size: 16px;
  --tag-background: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.1);
  --tag-background-hover: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.2);
  --tag-border-color: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.15);
  --tag-border-color-hover: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.15);
  --tag-color: #6b36e2;
  --tag-color-hover: #6b36e2;
  --tag-size: 0.875em;
  --text-accent: #6b36e2;
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #494455;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #494455;
  --text-normal: #1d1a24;
  --text-selection: hsla(258.488372093deg, 74.7826086957%, 54.9019607843%, 0.2);
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
  --zoom-multiplier: 1;
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(107, 54, 226);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(107, 54, 226);
  border-left-width: 0px;
  border-right-color: rgb(107, 54, 226);
  border-right-width: 0px;
  border-top-color: rgb(107, 54, 226);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--pill-color, rgb(107, 54, 226));
  content: "";
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 14px;
  font-weight: var(--pill-weight, 400);
  line-height: var(--line-height-tight, 14px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  transform: matrix(1, 0, 0, 1, -36.6484, -16);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body dt {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body ol > li {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body ul > li {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(73, 68, 85));
}

html[saved-theme="light"] body blockquote {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body table {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.188px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: var(--table-text-color, rgb(29, 26, 36));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: var(--table-header-color, rgb(29, 26, 36));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(248, 241, 255));
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, rgb(29, 26, 36));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(248, 241, 255));
  border-bottom-color: rgb(203, 195, 216);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body figcaption {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(248, 241, 255));
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(29, 26, 36);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(107, 54, 226);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(73, 68, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(73, 68, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(29, 26, 36);
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 247, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 247, 255);
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
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(29, 26, 36);
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
  color: var(--text-normal, rgb(29, 26, 36));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--md-sys-color-surface, rgb(253, 247, 255));
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  background-color: var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(29, 26, 36) none 0px;
  text-decoration-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.286275 0.266667 0.333333 / 0.08));
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-width: 0px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, color(srgb 0.286275 0.266667 0.333333 / 0.08));
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.286275 0.266667 0.333333 / 0.08));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
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

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(107, 54, 226);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(29, 26, 36));
  font-family: var(--h1-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(29, 26, 36));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(29, 26, 36));
  font-family: var(--h2-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(29, 26, 36));
  font-family: var(--inline-title-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(29, 26, 36));
  font-family: var(--h3-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(29, 26, 36));
  font-family: var(--h4-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(29, 26, 36));
  font-family: var(--h5-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(29, 26, 36));
  font-family: var(--h6-font, "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(73, 68, 85));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(73, 68, 85));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(29, 26, 36);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--icon-color, rgb(73, 68, 85));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(242, 235, 249));
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  border-top-left-radius: 12px;
  color: var(--status-bar-text-color, rgb(73, 68, 85));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(73, 68, 85);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(29, 26, 36);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(73, 68, 85));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(73, 68, 85));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(73, 68, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--icon-color, rgb(73, 68, 85));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(73, 68, 85);
  stroke: rgb(73, 68, 85);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
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

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(73, 68, 85));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(29, 26, 36));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(253, 247, 255));
  border-color: rgb(29, 26, 36);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(203, 195, 216);
  color: var(--table-header-color, rgb(29, 26, 36));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(203, 195, 216);
  border-left-color: rgb(203, 195, 216);
  border-right-color: rgb(203, 195, 216);
  border-top-color: rgb(203, 195, 216);
  color: var(--text-muted, rgb(73, 68, 85));
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: rgb(73, 68, 85);
  font-family: "??", Roboto, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(203, 195, 216);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(73, 68, 85);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(73, 68, 85);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 8px;
  color: var(--pill-color, rgb(107, 54, 226));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(73, 68, 85);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(253, 247, 255));
  color: var(--text-normal, rgb(29, 26, 36));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(242, 235, 249));
  border-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(231, 224, 238));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(29, 26, 36);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(242, 235, 249));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(29, 26, 36));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(73, 68, 85);
  border-left-color: rgb(73, 68, 85);
  border-right-color: rgb(73, 68, 85);
  border-top-color: rgb(73, 68, 85);
  color: var(--text-normal, rgb(73, 68, 85));
  font-family: "??", Roboto, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(248, 241, 255));
  border-bottom-color: rgb(29, 26, 36);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, rgb(29, 26, 36));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(29, 26, 36);
  border-left-color: rgb(29, 26, 36);
  border-right-color: rgb(29, 26, 36);
  border-top-color: rgb(29, 26, 36);
}

html[saved-theme="light"] body sub {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body summary {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body sup {
  color: rgb(29, 26, 36);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(107, 54, 226, 0.1));
  border-bottom-color: rgba(107, 54, 226, 0.15);
  border-left-color: rgba(107, 54, 226, 0.15);
  border-right-color: rgba(107, 54, 226, 0.15);
  border-top-color: rgba(107, 54, 226, 0.15);
  color: var(--tag-color, rgb(107, 54, 226));
}`,
  },
};
