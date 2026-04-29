import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vesnea-vibe",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["josefin-sans", "work-sans"],
    fontFiles: [
      {
        family: "Josefin Sans",
        style: "normal",
        weight: "350",
        file: "josefin-sans.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Work Sans",
        style: "normal",
        weight: "400",
        file: "work-sans.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --C-Arna_Pink: #ec6f97;
  --C-Arna_Red: #d62d64;
  --C-Deimev_Gray: #7c787e;
  --C-Deimev_Violet: #70488c;
  --C-Deimev_Void_Purple: #382f3c;
  --C-Korazu_Light_Yellow: #f5eeda;
  --C-Korazu_Orange: #fcba9f;
  --C-Korazu_White: #fbf8ee;
  --C-Korazu_Yellow: #ebd6a5;
  --C-MythSeavalanche_Blue: #e6f3f8;
  --C-MythSeavalanche_Dark_Green: #9ebb98;
  --C-MythSeavalanche_Dark_Yellow: #d8b86d;
  --C-MythSeavalanche_Green: #c1cc83;
  --C-MythSeavalanche_Light_Green: #e0e98b;
  --C-MythSeavalanche_Light_Yellow: #fbefa1;
  --C-MythSeavalanche_Peach: #f4cebd;
  --C-MythSeavalanche_Yellow: #f4df7e;
  --C-Sarchie_Cyan: #9be2c9;
  --C-Sarchie_Light_Cyan: #cef1e5;
  --C-Sarchie_Sky_Blue: #87d1f3;
  --C-Sarchie_Teal: #4e7f91;
  --C-Sarchie_Yellow: #f9e9ad;
  --C-SeaWeb_Dark_Purple: #181621;
  --C-SeaWeb_Purple: #2c233d;
  --C-Seava_Blue: #4c77ae;
  --C-Seava_Dark_Blue: #3e4f7b;
  --C-Seava_Light_Blue: #9bd0e2;
  --C-Seava_Lighter_Dark_Blue: #536e9d;
  --C-Seava_Yellow: #fcf3d9;
  --C-Seavalanche_Light_Blue: #bbe2f0;
  --C-Uzakon_Light_Purple: #c6b0cf;
  --C-Uzakon_Lighter_Light_Purple: #d8d3e5;
  --C-Uzakon_Purple: #958abf;
  --C-Uzakon_White: #eeecf4;
  --C-Vesnea_Light_Pink: #fdc4d3;
  --C-Vesnea_Pink: #f29cc2;
  --C-Vesnea_Purple: #4c2c57;
  --C-Vesnea_white: #fefcfc;
  --C-Zumiko_Light_Red: #f2cbd4;
  --C-Zumiko_Pink: #f8bed5;
  --C-Zumiko_Red: #e28094;
  --C-Zumiko_White: #f9e8ec;
  --accent-h: 333;
  --accent-l: 78%;
  --accent-s: 77%;
  --attribute-aether: #f4df7e;
  --attribute-darkness: #382f3c;
  --attribute-electric: #ffe941;
  --attribute-fire: #e1294d;
  --attribute-light: #ffffff;
  --attribute-magical: #fdc4d3;
  --attribute-metal: #5a6775;
  --attribute-nature: #70bb74;
  --attribute-psionic: #ce36be;
  --attribute-sound: #ec6f97;
  --attribute-spirit: #70488c;
  --attribute-text-seawebdarkpurple: var(--C-SeaWeb_Dark_Purple, #181621);
  --attribute-text-vesneawhite: var(--C-Vesnea_white, #fefcfc);
  --attribute-void: #1c1b1d;
  --attribute-water: #3e4f7b;
  --attribute-wind: #9be2c9;
  --background-modifier-border: var(--color-base-30, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --background-modifier-border-focus: var(--color-base-40, #f29cc2);
  --background-modifier-border-hover: var(--color-base-35, color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	));
  --background-modifier-form-field: var(--color-base-25, hsl(from #181621 h s calc(l - 3)));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(from #181621 h s calc(l - 3)));
  --background-primary: var(--C-SeaWeb_Purple, #2c233d);
  --background-primary-alt: var(--color-base-10, hsl(from #2c233d h s calc(l - 10)));
  --background-secondary: var(--C-SeaWeb_Dark_Purple, #181621);
  --background-secondary-alt: var(--color-base-30, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --bases-cards-background: var(--background-primary, #2c233d);
  --bases-cards-cover-background: var(--background-primary-alt, hsl(from #2c233d h s calc(l - 10)));
  --bases-cards-radius: var(--radius-m, 6px);
  --bases-embed-border-color: var(--background-modifier-border, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --bases-group-heading-property-color: var(--text-muted, #fdc4d3);
  --bases-table-border-color: var(--table-border-color, color-mix(
		in srgb,
		hsl(333, 77%, 78%) 40%,
		transparent
	));
  --bases-table-cell-background-active: var(--background-primary, #2c233d);
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(from #2c233d h s calc(l - 10)));
  --bases-table-cell-background-selected: var(--table-selection, hsla(333, 77%, 78%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(from #2c233d h s calc(l - 10)));
  --bases-table-header-background: var(--background-primary, #2c233d);
  --bases-table-header-color: var(--text-muted, #fdc4d3);
  --bases-table-summary-background: var(--background-primary, #2c233d);
  --blockquote-border-color: var(--interactive-accent, hsl(333, 77%, 78%));
  --bodyFont: var(--font-text-theme, Josefin Sans, sans-serif);
  --bold-color: var(--C-Vesnea_Pink, #f29cc2);
  --bold-modifier: 300;
  --button-radius: var(--input-radius, 4px);
  --canvas-background: var(--background-primary, #2c233d);
  --canvas-card-label-color: var(--text-faint, #c6b0cf);
  --canvas-dot-pattern: var(--color-base-30, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --caret-color: var(--text-normal, hsl(344, 93%, 88%));
  --checkbox-border-color: var(--attribute-psionic, #ce36be);
  --checkbox-border-color-hover: var(--attribute-nature, #70bb74);
  --checkbox-color: var(--attribute-nature, #70bb74);
  --checkbox-color-hover: var(--attribute-psionic, #ce36be);
  --checkbox-marker-color: var(--background-primary, #2c233d);
  --checklist-done-color: var(--attribute-nature, #70bb74);
  --code-background: var(--background-primary-alt, hsl(from #2c233d h s calc(l - 10)));
  --code-border-color: var(--background-modifier-border, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --code-comment: var(--text-faint, #c6b0cf);
  --code-normal: var(--text-normal, #f9e8ec);
  --code-punctuation: var(--text-muted, #fdc4d3);
  --collapse-icon-color: var(--text-faint, #c6b0cf);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(330, 78.54%, 89.7%));
  --color-base-00: var(--background-primary, #2c233d);
  --color-base-05: hsl(from var(--background-primary) h s calc(l - 5));
  --color-base-10: hsl(from var(--background-primary) h s calc(l - 10));
  --color-base-100: var(--C-Zumiko_White, #f9e8ec);
  --color-base-20: var(--background-secondary, #181621);
  --color-base-25: hsl(from var(--background-secondary) h s calc(l - 3));
  --color-base-30: hsl(
		from var(--background-secondary) h calc(s + 3) calc(l + 4)
	);
  --color-base-35: color-mix(
		in srgb,
		var(--background-primary) 30%,
		var(--background-secondary) 70%
	);
  --color-base-40: var(--C-Vesnea_Pink, #f29cc2);
  --color-base-50: var(--C-Uzakon_Light_Purple, #c6b0cf);
  --color-base-60: color-mix(
		in srgb,
		var(--C-Uzakon_Light_Purple) 50%,
		var(--C-Vesnea_Light_Pink) 50%
	);
  --color-base-70: var(--C-Vesnea_Light_Pink, #fdc4d3);
  --cutepink: #ff69b4;
  --cutepink2: #d63384;
  --dark: var(--text-normal, var(--color-base-100, #f9e8ec));
  --darkgray: var(--text-normal, var(--color-base-100, #f9e8ec));
  --divider-color: var(--background-modifier-border, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --divider-color-hover: var(--interactive-accent, hsl(333, 77%, 78%));
  --dropdown-background: var(--interactive-normal, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --dropdown-background-hover: var(--interactive-hover, color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	));
  --file-header-background: var(--background-primary, #2c233d);
  --file-header-background-focused: var(--background-primary, #2c233d);
  --file-header-font: var(--font-interface, Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --flair-color: var(--text-normal, #f9e8ec);
  --font-interface-theme: Work Sans, sans-serif;
  --font-mermaid: var(--font-text, Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: Josefin Sans, sans-serif;
  --footnote-divider-color: var(--metadata-divider-color, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --footnote-id-color: var(--text-muted, #fdc4d3);
  --footnote-id-color-no-occurrences: var(--text-faint, #c6b0cf);
  --graph-node: var(--text-muted, #fdc4d3);
  --graph-node-focused: var(--text-accent, hsl(330, 78.54%, 89.7%));
  --graph-node-unresolved: var(--text-faint, #c6b0cf);
  --graph-text: var(--text-normal, #f9e8ec);
  --gray: var(--text-muted, var(--color-base-70, #fdc4d3));
  --headerFont: var(--font-text-theme, Josefin Sans, sans-serif);
  --heading-formatting: var(--text-faint, #c6b0cf);
  --highlight: var(--text-highlight-bg, hsl(
		from var(--attribute-psionic) calc(h + 20) calc(s - 10) l / 0.85
	));
  --hr-color: var(--attribute-aether, #f4df7e);
  --icon-color: var(--text-muted, #fdc4d3);
  --icon-color-active: var(--text-accent, hsl(330, 78.54%, 89.7%));
  --icon-color-focused: var(--text-normal, #f9e8ec);
  --icon-color-hover: var(--text-muted, #fdc4d3);
  --input-date-separator: var(--text-faint, #c6b0cf);
  --input-placeholder-color: var(--text-faint, #c6b0cf);
  --input-radius: 4px;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
		0 4px 6px color-mix(in srgb, var(--color-accent) 50%, transparent);
  --interactive-accent: var(--color-accent, hsl(333, 77%, 78%));
  --interactive-accent-hover: var(--color-accent-1, hsl(330, 78.54%, 89.7%));
  --interactive-accent-hsl: var(--color-accent-hsl, 333, 77%, 78%);
  --interactive-hover: var(--color-base-35, color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	));
  --interactive-normal: var(--color-base-30, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --italic-color: var(--C-Vesnea_Light_Pink, #fdc4d3);
  --light: var(--background-primary, var(--C-SeaWeb_Purple, #2c233d));
  --lightgray: var(--background-secondary, var(--C-SeaWeb_Dark_Purple, #181621));
  --link-color: var(--text-accent, hsl(330, 78.54%, 89.7%));
  --link-color-hover: var(--text-accent-hover, hsl(328, 80.85%, 100.62%));
  --link-external-color: var(--text-accent, hsl(330, 78.54%, 89.7%));
  --link-external-color-hover: var(--text-accent-hover, hsl(328, 80.85%, 100.62%));
  --link-unresolved-color: var(--text-accent, hsl(330, 78.54%, 89.7%));
  --list-marker-color: var(--attribute-aether, #f4df7e);
  --list-marker-color-collapsed: var(--text-accent, hsl(330, 78.54%, 89.7%));
  --list-marker-color-hover: var(--text-muted, #fdc4d3);
  --list-spacing: 2px;
  --menu-background: var(--background-secondary, #181621);
  --menu-border-color: var(--background-modifier-border-hover, color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	));
  --menu-radius: var(--radius-m, 6px);
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 0px 60px color-mix(in srgb, hsl(333, 77%, 78%) 50%, transparent));
  --metadata-border-color: var(--background-modifier-border, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --metadata-divider-color: var(--background-modifier-border, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --metadata-input-font: var(--font-interface, Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #f9e8ec);
  --metadata-label-font: var(--font-interface, Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #fdc4d3);
  --metadata-label-text-color-hover: var(--text-muted, #fdc4d3);
  --modal-background: var(--background-primary, #2c233d);
  --modal-border-color: color-mix(
		in srgb,
		var(--color-accent) 20%,
		transparent
	);
  --modal-radius: var(--radius-l, 8px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #c6b0cf);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #c6b0cf);
  --nav-heading-color: var(--text-normal, #f9e8ec);
  --nav-heading-color-collapsed: var(--text-faint, #c6b0cf);
  --nav-heading-color-collapsed-hover: var(--text-muted, #fdc4d3);
  --nav-heading-color-hover: var(--text-normal, #f9e8ec);
  --nav-item-color: var(--text-muted, #fdc4d3);
  --nav-item-color-active: var(--text-normal, #f9e8ec);
  --nav-item-color-highlighted: var(--text-accent, hsl(330, 78.54%, 89.7%));
  --nav-item-color-hover: var(--text-normal, #f9e8ec);
  --nav-item-color-selected: var(--text-normal, #f9e8ec);
  --nav-tag-color: var(--text-faint, #c6b0cf);
  --nav-tag-color-active: var(--text-muted, #fdc4d3);
  --nav-tag-color-hover: var(--text-muted, #fdc4d3);
  --pdf-background: var(--background-primary, #2c233d);
  --pdf-page-background: var(--background-primary, #2c233d);
  --pdf-sidebar-background: var(--background-primary, #2c233d);
  --pill-border-color: var(--background-modifier-border, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --pill-border-color-hover: var(--background-modifier-border-hover, color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	));
  --pill-color: var(--text-muted, #fdc4d3);
  --pill-color-hover: var(--text-normal, #f9e8ec);
  --pill-color-remove: var(--text-faint, #c6b0cf);
  --pill-color-remove-hover: var(--text-accent, hsl(330, 78.54%, 89.7%));
  --prompt-background: var(--background-primary, #2c233d);
  --radius-l: 8px;
  --radius-m: 6px;
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent) linear-gradient(hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	), color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent)));
  --ribbon-background: var(--background-secondary, #181621);
  --ribbon-background-collapsed: var(--background-primary, #2c233d);
  --scrollbar-radius: var(--radius-l, 8px);
  --search-clear-button-color: var(--text-muted, #fdc4d3);
  --search-icon-color: var(--text-muted, #fdc4d3);
  --search-result-background: var(--background-primary, #2c233d);
  --secondary: var(--text-accent, var(--color-accent-1, hsl(330, 78.54%, 89.7%)));
  --setting-group-heading-color: var(--text-normal, #f9e8ec);
  --setting-items-background: var(--background-primary-alt, hsl(from #2c233d h s calc(l - 10)));
  --setting-items-border-color: var(--background-modifier-border, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --setting-items-radius: var(--radius-l, 8px);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
		0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
		0px 30px 90px color-mix(in srgb, var(--color-accent) 50%, transparent);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 0px 60px color-mix(in srgb, var(--color-accent) 50%, transparent);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #fdc4d3);
  --shiki-code-background: var(--code-background, hsl(from #2c233d h s calc(l - 10)));
  --shiki-code-comment: var(--text-faint, #c6b0cf);
  --shiki-code-normal: var(--text-muted, #fdc4d3);
  --shiki-code-punctuation: var(--text-muted, #fdc4d3);
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --shiki-gutter-text-color: var(--text-faint, #c6b0cf);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #fdc4d3);
  --shiki-highlight-neutral: var(--shiki-code-normal, #fdc4d3);
  --shiki-terminal-dots-color: var(--text-faint, #c6b0cf);
  --slider-thumb-border-color: var(--background-modifier-border-hover, color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	));
  --slider-thumb-radius: var(--slider-thumb-height, 4px);
  --slider-track-background: var(--background-modifier-border, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --status-bar-background: var(--background-secondary, #181621);
  --status-bar-border-color: var(--divider-color, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --status-bar-radius: var(--radius-m, 6px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #fdc4d3);
  --suggestion-background: var(--background-primary, #2c233d);
  --tab-background-active: var(--background-primary, #2c233d);
  --tab-container-background: var(--background-secondary, #181621);
  --tab-divider-color: var(--background-modifier-border-hover, color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	));
  --tab-outline-color: var(--divider-color, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --tab-radius-active: 4px;
  --tab-switcher-background: var(--background-secondary, #181621);
  --tab-text-color: var(--text-faint, #c6b0cf);
  --tab-text-color-active: var(--text-muted, #fdc4d3);
  --tab-text-color-focused: var(--text-muted, #fdc4d3);
  --tab-text-color-focused-active: var(--text-muted, #fdc4d3);
  --tab-text-color-focused-active-current: var(--text-normal, #f9e8ec);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(330, 78.54%, 89.7%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --table-border-color: color-mix(
		in srgb,
		var(--color-accent) 40%,
		transparent
	);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(333, 77%, 78%));
  --table-drag-handle-color: var(--text-faint, #c6b0cf);
  --table-drag-handle-color-active: var(--text-on-accent, #2c233d);
  --table-header-background: color-mix(
		in srgb,
		var(--color-accent) 20%,
		transparent
	);
  --table-header-background-hover: color-mix(
		in srgb,
		var(--color-accent) 60%,
		transparent
	);
  --table-header-border-color: var(--table-border-color, color-mix(
		in srgb,
		hsl(333, 77%, 78%) 40%,
		transparent
	));
  --table-header-color: var(--text-normal, #f9e8ec);
  --table-selection-border-color: var(--interactive-accent, hsl(333, 77%, 78%));
  --tag-color: var(--text-accent, hsl(330, 78.54%, 89.7%));
  --tag-color-hover: var(--text-accent, hsl(330, 78.54%, 89.7%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(328, 80.85%, 100.62%)));
  --text-accent: var(--color-accent-1, hsl(330, 78.54%, 89.7%));
  --text-accent-hover: var(--color-accent-2, hsl(328, 80.85%, 100.62%));
  --text-faint: var(--color-base-50, #c6b0cf);
  --text-highlight-bg: hsl(
		from var(--attribute-psionic) calc(h + 20) calc(s - 10) l / 0.85
	);
  --text-muted: var(--color-base-70, #fdc4d3);
  --text-normal: var(--color-base-100, #f9e8ec);
  --text-on-accent: var(--C-SeaWeb_Purple, #2c233d);
  --textHighlight: var(--text-highlight-bg, hsl(
		from var(--attribute-psionic) calc(h + 20) calc(s - 10) l / 0.85
	));
  --titleFont: var(--font-text-theme, Josefin Sans, sans-serif);
  --titlebar-background: var(--background-secondary, #181621);
  --titlebar-background-focused: var(--background-secondary-alt, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --titlebar-border-color: var(--background-modifier-border, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	));
  --titlebar-text-color: var(--text-muted, #fdc4d3);
  --titlebar-text-color-focused: var(--text-normal, #f9e8ec);
  --toggle-radius: 6px;
  --toggle-thumb-radius: 4px;
  --vault-profile-color: var(--text-normal, #f9e8ec);
  --vault-profile-color-hover: var(--vault-profile-color, #f9e8ec);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(24, 22, 33));
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(44, 35, 61));
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(24, 22, 33));
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(24, 22, 33));
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body html {
  --C-Arna_Pink: #ec6f97;
  --C-Arna_Red: #d62d64;
  --C-Deimev_Gray: #7c787e;
  --C-Deimev_Violet: #70488c;
  --C-Deimev_Void_Purple: #382f3c;
  --C-Korazu_Light_Yellow: #f5eeda;
  --C-Korazu_Orange: #fcba9f;
  --C-Korazu_White: #fbf8ee;
  --C-Korazu_Yellow: #ebd6a5;
  --C-MythSeavalanche_Blue: #e6f3f8;
  --C-MythSeavalanche_Dark_Green: #9ebb98;
  --C-MythSeavalanche_Dark_Yellow: #d8b86d;
  --C-MythSeavalanche_Green: #c1cc83;
  --C-MythSeavalanche_Light_Green: #e0e98b;
  --C-MythSeavalanche_Light_Yellow: #fbefa1;
  --C-MythSeavalanche_Peach: #f4cebd;
  --C-MythSeavalanche_Yellow: #f4df7e;
  --C-Sarchie_Cyan: #9be2c9;
  --C-Sarchie_Light_Cyan: #cef1e5;
  --C-Sarchie_Sky_Blue: #87d1f3;
  --C-Sarchie_Teal: #4e7f91;
  --C-Sarchie_Yellow: #f9e9ad;
  --C-SeaWeb_Dark_Purple: #181621;
  --C-SeaWeb_Purple: #2c233d;
  --C-Seava_Blue: #4c77ae;
  --C-Seava_Dark_Blue: #3e4f7b;
  --C-Seava_Light_Blue: #9bd0e2;
  --C-Seava_Lighter_Dark_Blue: #536e9d;
  --C-Seava_Yellow: #fcf3d9;
  --C-Seavalanche_Light_Blue: #bbe2f0;
  --C-Uzakon_Light_Purple: #c6b0cf;
  --C-Uzakon_Lighter_Light_Purple: #d8d3e5;
  --C-Uzakon_Purple: #958abf;
  --C-Uzakon_White: #eeecf4;
  --C-Vesnea_Light_Pink: #fdc4d3;
  --C-Vesnea_Pink: #f29cc2;
  --C-Vesnea_Purple: #4c2c57;
  --C-Vesnea_white: #fefcfc;
  --C-Zumiko_Light_Red: #f2cbd4;
  --C-Zumiko_Pink: #f8bed5;
  --C-Zumiko_Red: #e28094;
  --C-Zumiko_White: #f9e8ec;
  --attribute-aether: #f4df7e;
  --attribute-darkness: #382f3c;
  --attribute-electric: #ffe941;
  --attribute-fire: #e1294d;
  --attribute-light: #ffffff;
  --attribute-magical: #fdc4d3;
  --attribute-metal: #5a6775;
  --attribute-nature: #70bb74;
  --attribute-psionic: #ce36be;
  --attribute-sound: #ec6f97;
  --attribute-spirit: #70488c;
  --attribute-text-seawebdarkpurple: var(--C-SeaWeb_Dark_Purple, #181621);
  --attribute-text-vesneawhite: var(--C-Vesnea_white, #fefcfc);
  --attribute-void: #1c1b1d;
  --attribute-water: #3e4f7b;
  --attribute-wind: #9be2c9;
  --cutepink: #ff69b4;
  --cutepink2: #d63384;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(242, 156, 194));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 194) none 0px;
  text-decoration-color: rgb(242, 156, 194);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(253, 196, 211));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration-color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(253, 196, 211));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration-color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(242, 156, 194));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 194) none 0px;
  text-decoration-color: rgb(242, 156, 194);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, color(srgb 0.758824 0.260784 0.540385 / 0.85));
  color: var(--text-normal, rgb(249, 232, 236));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 232, 236) none 0px;
  text-decoration-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body del {
  color: color-mix(in srgb, var(--text-muted) 60%, transparent);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.992157 0.768627 0.827451 / 0.6) none 0px;
  text-decoration: line-through rgb(214, 51, 132);
  text-decoration-color: var(--cutepink2, rgb(214, 51, 132));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(249, 232, 236));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(206, 54, 190);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(112, 187, 116));
  border-color: rgb(112, 187, 116);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(253, 196, 211));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration-color: rgb(253, 196, 211);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(249, 208, 229));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration-color: rgb(249, 208, 229);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(249, 208, 229));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration-color: rgb(249, 208, 229);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(249, 208, 229));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration: underline rgba(242, 156, 195, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(242, 156, 195, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body dt {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(198, 176, 207));
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body table {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 183.156px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-left-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-right-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-top-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  color: var(--table-text-color, rgb(249, 232, 236));
}

html[saved-theme="dark"] body th {
  border-bottom-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-left-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-right-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-top-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  color: var(--table-header-color, rgb(249, 232, 236));
  font-weight: var(--table-header-weight, 700);
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, color(srgb 0.9494 0.6106 0.76306 / 0.2));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, color(srgb 0.0808824 0.0643382 0.112132));
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  color: var(--code-normal, rgb(249, 232, 236));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, color(srgb 0.0808824 0.0643382 0.112132));
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(249, 232, 236);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, color(srgb 0.0808824 0.0643382 0.112132));
  border-bottom-color: rgb(253, 196, 211);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(242, 156, 195);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(206, 54, 190);
  border-left-color: rgb(206, 54, 190);
  border-right-color: rgb(206, 54, 190);
  border-top-color: rgb(206, 54, 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(112, 187, 116);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(112, 187, 116);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(44, 35, 61);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(44, 35, 61);
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
  background-color: rgb(198, 176, 207);
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

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(249, 232, 236);
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
  background-color: color(srgb 0.0679358 0.0622745 0.0934118);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-normal, rgb(249, 232, 236));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(44, 35, 61));
  border-bottom-color: rgb(242, 156, 194);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(242, 156, 194);
  border-right-color: rgb(242, 156, 194);
  border-top-color: rgb(242, 156, 194);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, color(srgb 0.9494 0.6106 0.76306 / 0.5) 0px 30px 90px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 232, 236) none 0px;
  text-decoration-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(242, 156, 194);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(242, 156, 194);
  border-right-color: rgb(242, 156, 194);
  border-top-color: rgb(242, 156, 194);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 22, 33);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(242, 156, 195, 0.1));
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(249, 208, 229);
}

html[saved-theme="dark"] body h1 {
  color: var(--C-SeaWeb_Purple, rgb(44, 35, 61));
  font-family: var(--h1-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(249, 232, 236));
}

html[saved-theme="dark"] body h2 {
  color: var(--C-SeaWeb_Purple, rgb(44, 35, 61));
  font-family: var(--h2-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(249, 232, 236));
  font-family: var(--inline-title-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h3 {
  color: var(--C-SeaWeb_Purple, rgb(44, 35, 61));
  font-family: var(--h3-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  color: var(--C-SeaWeb_Purple, rgb(44, 35, 61));
  font-family: var(--h4-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  color: var(--C-SeaWeb_Purple, rgb(44, 35, 61));
  font-family: var(--h5-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--C-SeaWeb_Purple, rgb(44, 35, 61));
  font-family: var(--h6-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(253, 196, 211));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(253, 196, 211));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(249, 232, 236);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: var(--icon-color, rgb(253, 196, 211));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(24, 22, 33));
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-left-radius: 6px;
  color: var(--status-bar-text-color, rgb(253, 196, 211));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(253, 196, 211);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(249, 232, 236);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(253, 196, 211));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(253, 196, 211));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: var(--icon-color, rgb(253, 196, 211));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(253, 196, 211);
  stroke: rgb(253, 196, 211);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(198, 176, 207));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(249, 232, 236));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(24, 22, 33));
  border-color: rgb(249, 232, 236);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  color: var(--table-header-color, rgb(249, 232, 236));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  color: var(--text-muted, rgb(253, 196, 211));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: color(srgb 0.126204 0.113839 0.181847);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(242, 156, 195, 0.1));
  color: var(--pill-color, rgb(249, 208, 229));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(44, 35, 61));
  color: var(--text-normal, rgb(249, 232, 236));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(24, 22, 33));
  border-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, color(srgb 0.126204 0.113839 0.181847));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(249, 232, 236);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(24, 22, 33));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(249, 232, 236));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: var(--text-normal, rgb(253, 196, 211));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, color(srgb 0.0808824 0.0643382 0.112132));
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: var(--code-normal, rgb(249, 232, 236));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body sub {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body summary {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body sup {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(242, 156, 195, 0.1));
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  color: var(--tag-color, rgb(249, 208, 229));
}`,
  },
  light: {
    base: `:root:root {
  --C-Arna_Pink: #ec6f97;
  --C-Arna_Red: #d62d64;
  --C-Deimev_Gray: #7c787e;
  --C-Deimev_Violet: #70488c;
  --C-Deimev_Void_Purple: #382f3c;
  --C-Korazu_Light_Yellow: #f5eeda;
  --C-Korazu_Orange: #fcba9f;
  --C-Korazu_White: #fbf8ee;
  --C-Korazu_Yellow: #ebd6a5;
  --C-MythSeavalanche_Blue: #e6f3f8;
  --C-MythSeavalanche_Dark_Green: #9ebb98;
  --C-MythSeavalanche_Dark_Yellow: #d8b86d;
  --C-MythSeavalanche_Green: #c1cc83;
  --C-MythSeavalanche_Light_Green: #e0e98b;
  --C-MythSeavalanche_Light_Yellow: #fbefa1;
  --C-MythSeavalanche_Peach: #f4cebd;
  --C-MythSeavalanche_Yellow: #f4df7e;
  --C-Sarchie_Cyan: #9be2c9;
  --C-Sarchie_Light_Cyan: #cef1e5;
  --C-Sarchie_Sky_Blue: #87d1f3;
  --C-Sarchie_Teal: #4e7f91;
  --C-Sarchie_Yellow: #f9e9ad;
  --C-SeaWeb_Dark_Purple: #181621;
  --C-SeaWeb_Purple: #2c233d;
  --C-Seava_Blue: #4c77ae;
  --C-Seava_Dark_Blue: #3e4f7b;
  --C-Seava_Light_Blue: #9bd0e2;
  --C-Seava_Lighter_Dark_Blue: #536e9d;
  --C-Seava_Yellow: #fcf3d9;
  --C-Seavalanche_Light_Blue: #bbe2f0;
  --C-Uzakon_Light_Purple: #c6b0cf;
  --C-Uzakon_Lighter_Light_Purple: #d8d3e5;
  --C-Uzakon_Purple: #958abf;
  --C-Uzakon_White: #eeecf4;
  --C-Vesnea_Light_Pink: #fdc4d3;
  --C-Vesnea_Pink: #f29cc2;
  --C-Vesnea_Purple: #4c2c57;
  --C-Vesnea_white: #fefcfc;
  --C-Zumiko_Light_Red: #f2cbd4;
  --C-Zumiko_Pink: #f8bed5;
  --C-Zumiko_Red: #e28094;
  --C-Zumiko_White: #f9e8ec;
  --accent-h: 333;
  --accent-l: 78%;
  --accent-s: 77%;
  --attribute-aether: #f4df7e;
  --attribute-darkness: #382f3c;
  --attribute-electric: #ffe941;
  --attribute-fire: #e1294d;
  --attribute-light: #ffffff;
  --attribute-magical: #fdc4d3;
  --attribute-metal: #5a6775;
  --attribute-nature: #70bb74;
  --attribute-psionic: #ce36be;
  --attribute-sound: #ec6f97;
  --attribute-spirit: #70488c;
  --attribute-text-seawebdarkpurple: var(--C-SeaWeb_Dark_Purple, #181621);
  --attribute-text-vesneawhite: var(--C-Vesnea_white, #fefcfc);
  --attribute-void: #1c1b1d;
  --attribute-water: #3e4f7b;
  --attribute-wind: #9be2c9;
  --background-modifier-border: var(--color-base-30, #c6b0cf);
  --background-modifier-border-focus: var(--color-base-40, hsl(281, 24%, 60%));
  --background-modifier-border-hover: var(--color-base-35, hsl(281, 24%, 70%));
  --background-modifier-form-field: var(--color-base-00, hsl(0, 50%, 99%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(0, 50%, 99%));
  --background-primary: var(--color-base-00, hsl(0, 60%, 99%));
  --background-primary-alt: var(--color-base-10, hsl(281, 24%, 95%));
  --background-secondary: var(--color-base-20, hsl(252, 38%, 95%));
  --background-secondary-alt: var(--color-base-05, hsl(280, 23%, 97%));
  --bases-cards-background: var(--background-primary, hsl(0, 60%, 99%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(281, 24%, 95%));
  --bases-cards-radius: var(--radius-m, 6px);
  --bases-embed-border-color: var(--background-modifier-border, #c6b0cf);
  --bases-group-heading-property-color: var(--text-muted, hsl(251, 29%, 55%));
  --bases-table-border-color: var(--table-border-color, #c6b0cf);
  --bases-table-cell-background-active: var(--background-primary, hsl(0, 60%, 99%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(281, 24%, 95%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(333, 77%, 78%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(281, 24%, 95%));
  --bases-table-header-background: var(--background-primary, hsl(0, 60%, 99%));
  --bases-table-header-color: var(--text-muted, hsl(251, 29%, 55%));
  --bases-table-summary-background: var(--background-primary, hsl(0, 60%, 99%));
  --blockquote-border-color: var(--interactive-accent, hsl(332, 77.77%, 83.85%));
  --bodyFont: var(--font-text-theme, Josefin Sans, sans-serif);
  --bold-color: var(--C-Arna_Red, #d62d64);
  --bold-modifier: 300;
  --button-radius: var(--input-radius, 4px);
  --canvas-background: var(--background-primary, hsl(0, 60%, 99%));
  --canvas-card-label-color: var(--text-faint, hsl(275, 24%, 55%));
  --canvas-dot-pattern: var(--color-base-30, #c6b0cf);
  --caret-color: var(--C-Sarchie_Sky_Blue, #87d1f3);
  --checkbox-border-color: var(--attribute-psionic, #ce36be);
  --checkbox-border-color-hover: var(--attribute-nature, #70bb74);
  --checkbox-color: var(--attribute-nature, #70bb74);
  --checkbox-color-hover: var(--attribute-psionic, #ce36be);
  --checkbox-marker-color: var(--background-primary, hsl(0, 60%, 99%));
  --checklist-done-color: var(--attribute-nature, #70bb74);
  --code-background: var(--background-primary-alt, hsl(281, 24%, 95%));
  --code-border-color: var(--background-modifier-border, #c6b0cf);
  --code-comment: var(--text-faint, hsl(275, 24%, 55%));
  --code-normal: var(--text-normal, hsl(248, 31%, 20%));
  --code-punctuation: var(--text-muted, hsl(251, 29%, 55%));
  --collapse-icon-color: var(--text-faint, hsl(275, 24%, 55%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(333, 77%, 78%));
  --color-base-00: hsl(0, 50%, 99%);
  --color-base-05: hsl(280, 23%, 97%);
  --color-base-10: hsl(281, 24%, 95%);
  --color-base-100: hsl(248, 31%, 20%);
  --color-base-20: hsl(281, 24%, 85%);
  --color-base-25: hsl(281, 24%, 80%);
  --color-base-30: var(--C-Uzakon_Light_Purple, #c6b0cf);
  --color-base-35: hsl(281, 24%, 70%);
  --color-base-40: hsl(281, 24%, 60%);
  --color-base-50: hsl(275, 24%, 55%);
  --color-base-60: hsl(265, 27%, 55%);
  --color-base-70: hsl(251, 29%, 55%);
  --cutepink: #ff69b4;
  --cutepink2: #d63384;
  --dark: var(--text-normal, var(--color-base-100, hsl(248, 31%, 20%)));
  --darkgray: var(--text-normal, var(--color-base-100, hsl(248, 31%, 20%)));
  --divider-color: var(--background-modifier-border, #c6b0cf);
  --divider-color-hover: var(--interactive-accent, hsl(332, 77.77%, 83.85%));
  --dropdown-background: var(--interactive-normal, hsl(0, 50%, 99%));
  --dropdown-background-hover: var(--interactive-hover, hsl(281, 24%, 95%));
  --file-header-background: var(--background-primary, hsl(0, 60%, 99%));
  --file-header-background-focused: var(--background-primary, hsl(0, 60%, 99%));
  --file-header-font: var(--font-interface, Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, hsl(0, 50%, 99%));
  --flair-color: var(--text-normal, hsl(248, 31%, 20%));
  --font-interface-theme: Work Sans, sans-serif;
  --font-mermaid: var(--font-text, Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: Josefin Sans, sans-serif;
  --footnote-divider-color: var(--metadata-divider-color, #c6b0cf);
  --footnote-id-color: var(--text-muted, hsl(251, 29%, 55%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(275, 24%, 55%));
  --graph-node: var(--text-muted, hsl(251, 29%, 55%));
  --graph-node-focused: var(--text-accent, hsl(333, 77%, 78%));
  --graph-node-unresolved: var(--text-faint, hsl(275, 24%, 55%));
  --graph-text: var(--text-normal, hsl(248, 31%, 20%));
  --gray: var(--text-muted, var(--color-base-70, hsl(251, 29%, 55%)));
  --headerFont: var(--font-text-theme, Josefin Sans, sans-serif);
  --heading-formatting: var(--text-faint, hsl(275, 24%, 55%));
  --highlight: var(--text-highlight-bg, var(--C-Vesnea_Light_Pink, #fdc4d3));
  --hr-color: var(--background-modifier-border, #c6b0cf);
  --icon-color: var(--text-muted, hsl(251, 29%, 55%));
  --icon-color-active: var(--text-accent, hsl(333, 77%, 78%));
  --icon-color-focused: var(--text-normal, hsl(248, 31%, 20%));
  --icon-color-hover: var(--text-muted, hsl(251, 29%, 55%));
  --input-date-separator: var(--text-faint, hsl(275, 24%, 55%));
  --input-placeholder-color: var(--text-faint, hsl(275, 24%, 55%));
  --input-radius: 4px;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
		0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 0 0 0 transparent,
		0 4px 6px
			color-mix(in srgb, var(--C-Uzakon_Light_Purple) 50%, transparent);
  --interactive-accent: var(--color-accent-1, hsl(332, 77.77%, 83.85%));
  --interactive-accent-hover: var(--color-accent-2, hsl(330, 78.54%, 89.7%));
  --interactive-accent-hsl: var(--color-accent-hsl, 333, 77%, 78%);
  --interactive-hover: var(--color-base-10, hsl(281, 24%, 95%));
  --interactive-normal: var(--color-base-00, hsl(0, 50%, 99%));
  --italic-color: hsl(from var(--C-Sarchie_Sky_Blue) h s calc(l - 20));
  --light: var(--background-primary, var(--color-base-00, hsl(0, 60%, 99%)));
  --lightgray: var(--background-secondary, var(--color-base-20, hsl(252, 38%, 95%)));
  --link-color: var(--text-accent, hsl(333, 77%, 78%));
  --link-color-hover: var(--text-accent-hover, hsl(330, 78.54%, 89.7%));
  --link-external-color: var(--text-accent, hsl(333, 77%, 78%));
  --link-external-color-hover: var(--text-accent-hover, hsl(330, 78.54%, 89.7%));
  --link-unresolved-color: var(--text-accent, hsl(333, 77%, 78%));
  --list-marker-color: var(--text-faint, hsl(275, 24%, 55%));
  --list-marker-color-collapsed: var(--text-accent, hsl(333, 77%, 78%));
  --list-marker-color-hover: var(--text-muted, hsl(251, 29%, 55%));
  --list-spacing: 2px;
  --menu-background: var(--background-secondary, hsl(252, 38%, 95%));
  --menu-border-color: var(--background-modifier-border-hover, hsl(281, 24%, 70%));
  --menu-radius: var(--radius-m, 6px);
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 30px 90px
			color-mix(in srgb, #c6b0cf 50%, transparent));
  --metadata-border-color: var(--background-modifier-border, #c6b0cf);
  --metadata-divider-color: var(--background-modifier-border, #c6b0cf);
  --metadata-input-font: var(--font-interface, Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, hsl(248, 31%, 20%));
  --metadata-label-font: var(--font-interface, Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(251, 29%, 55%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(251, 29%, 55%));
  --modal-background: var(--background-primary, hsl(0, 60%, 99%));
  --modal-radius: var(--radius-l, 8px);
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(275, 24%, 55%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(275, 24%, 55%));
  --nav-heading-color: var(--text-normal, hsl(248, 31%, 20%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(275, 24%, 55%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(251, 29%, 55%));
  --nav-heading-color-hover: var(--text-normal, hsl(248, 31%, 20%));
  --nav-item-color: var(--text-muted, hsl(251, 29%, 55%));
  --nav-item-color-active: var(--text-normal, hsl(248, 31%, 20%));
  --nav-item-color-highlighted: var(--text-accent, hsl(333, 77%, 78%));
  --nav-item-color-hover: var(--text-normal, hsl(248, 31%, 20%));
  --nav-item-color-selected: var(--text-normal, hsl(248, 31%, 20%));
  --nav-tag-color: var(--text-faint, hsl(275, 24%, 55%));
  --nav-tag-color-active: var(--text-muted, hsl(251, 29%, 55%));
  --nav-tag-color-hover: var(--text-muted, hsl(251, 29%, 55%));
  --pdf-background: var(--background-primary, hsl(0, 60%, 99%));
  --pdf-page-background: var(--background-primary, hsl(0, 60%, 99%));
  --pdf-sidebar-background: var(--background-primary, hsl(0, 60%, 99%));
  --pill-border-color: var(--background-modifier-border, #c6b0cf);
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(281, 24%, 70%));
  --pill-color: var(--text-muted, hsl(251, 29%, 55%));
  --pill-color-hover: var(--text-normal, hsl(248, 31%, 20%));
  --pill-color-remove: var(--text-faint, hsl(275, 24%, 55%));
  --pill-color-remove-hover: var(--text-accent, hsl(333, 77%, 78%));
  --prompt-background: var(--background-primary, hsl(0, 60%, 99%));
  --radius-l: 8px;
  --radius-m: 6px;
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(0, 60%, 99%) 65%, transparent) linear-gradient(hsl(0, 60%, 99%), color-mix(in srgb, hsl(0, 60%, 99%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(252, 38%, 95%));
  --ribbon-background-collapsed: var(--background-primary, hsl(0, 60%, 99%));
  --scrollbar-radius: var(--radius-l, 8px);
  --search-clear-button-color: var(--text-muted, hsl(251, 29%, 55%));
  --search-icon-color: var(--text-muted, hsl(251, 29%, 55%));
  --search-result-background: var(--background-primary, hsl(0, 60%, 99%));
  --secondary: var(--text-accent, var(--color-accent, hsl(333, 77%, 78%)));
  --setting-group-heading-color: var(--text-normal, hsl(248, 31%, 20%));
  --setting-items-background: var(--background-primary-alt, hsl(281, 24%, 95%));
  --setting-items-border-color: var(--background-modifier-border, #c6b0cf);
  --setting-items-radius: var(--radius-l, 8px);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
		0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
		0px 30px 90px
			color-mix(in srgb, var(--C-Uzakon_Light_Purple) 50%, transparent);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 30px 90px
			color-mix(in srgb, var(--C-Uzakon_Light_Purple) 50%, transparent);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(251, 29%, 55%));
  --shiki-code-background: var(--code-background, hsl(281, 24%, 95%));
  --shiki-code-comment: var(--text-faint, hsl(275, 24%, 55%));
  --shiki-code-normal: var(--text-muted, hsl(251, 29%, 55%));
  --shiki-code-punctuation: var(--text-muted, hsl(251, 29%, 55%));
  --shiki-gutter-border-color: var(--background-modifier-border, #c6b0cf);
  --shiki-gutter-text-color: var(--text-faint, hsl(275, 24%, 55%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(251, 29%, 55%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(251, 29%, 55%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(275, 24%, 55%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(281, 24%, 70%));
  --slider-thumb-radius: var(--slider-thumb-height, 4px);
  --slider-track-background: var(--background-modifier-border, #c6b0cf);
  --status-bar-background: var(--background-secondary, hsl(252, 38%, 95%));
  --status-bar-border-color: var(--divider-color, #c6b0cf);
  --status-bar-radius: var(--radius-m, 6px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, hsl(251, 29%, 55%));
  --suggestion-background: var(--background-primary, hsl(0, 60%, 99%));
  --tab-background-active: var(--background-primary, hsl(0, 60%, 99%));
  --tab-container-background: var(--background-secondary, hsl(252, 38%, 95%));
  --tab-divider-color: var(--background-modifier-border-hover, hsl(281, 24%, 70%));
  --tab-outline-color: var(--divider-color, #c6b0cf);
  --tab-radius-active: 4px;
  --tab-switcher-background: var(--background-secondary, hsl(252, 38%, 95%));
  --tab-text-color: var(--text-faint, hsl(275, 24%, 55%));
  --tab-text-color-active: var(--text-muted, hsl(251, 29%, 55%));
  --tab-text-color-focused: var(--text-muted, hsl(251, 29%, 55%));
  --tab-text-color-focused-active: var(--text-muted, hsl(251, 29%, 55%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(248, 31%, 20%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(333, 77%, 78%));
  --table-add-button-border-color: var(--background-modifier-border, #c6b0cf);
  --table-border-color: var(--background-modifier-border, #c6b0cf);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(332, 77.77%, 83.85%));
  --table-drag-handle-color: var(--text-faint, hsl(275, 24%, 55%));
  --table-drag-handle-color-active: var(--text-on-accent, #2c233d);
  --table-header-background: color-mix(
		in srgb,
		var(--color-accent) 20%,
		transparent
	);
  --table-header-background-hover: color-mix(
		in srgb,
		var(--color-accent) 60%,
		transparent
	);
  --table-header-border-color: var(--table-border-color, #c6b0cf);
  --table-header-color: var(--text-normal, hsl(248, 31%, 20%));
  --table-selection-border-color: var(--interactive-accent, hsl(332, 77.77%, 83.85%));
  --tag-color: var(--text-accent, hsl(333, 77%, 78%));
  --tag-color-hover: var(--text-accent, hsl(333, 77%, 78%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(330, 78.54%, 89.7%)));
  --text-accent: var(--color-accent, hsl(333, 77%, 78%));
  --text-accent-hover: var(--color-accent-2, hsl(330, 78.54%, 89.7%));
  --text-faint: var(--color-base-50, hsl(275, 24%, 55%));
  --text-highlight-bg: var(--C-Vesnea_Light_Pink, #fdc4d3);
  --text-muted: var(--color-base-70, hsl(251, 29%, 55%));
  --text-normal: var(--color-base-100, hsl(248, 31%, 20%));
  --text-on-accent: var(--C-SeaWeb_Purple, #2c233d);
  --textHighlight: var(--text-highlight-bg, var(--C-Vesnea_Light_Pink, #fdc4d3));
  --titleFont: var(--font-text-theme, Josefin Sans, sans-serif);
  --titlebar-background: var(--background-secondary, hsl(252, 38%, 95%));
  --titlebar-background-focused: var(--background-secondary-alt, hsl(280, 23%, 97%));
  --titlebar-border-color: var(--background-modifier-border, #c6b0cf);
  --titlebar-text-color: var(--text-muted, hsl(251, 29%, 55%));
  --titlebar-text-color-focused: var(--text-normal, hsl(248, 31%, 20%));
  --toggle-radius: 6px;
  --toggle-thumb-radius: 4px;
  --vault-profile-color: var(--text-normal, hsl(248, 31%, 20%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(248, 31%, 20%));
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(239, 237, 247));
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(254, 251, 251));
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(239, 237, 247));
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(198, 176, 207);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(239, 237, 247));
  border-left-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body html {
  --C-Arna_Pink: #ec6f97;
  --C-Arna_Red: #d62d64;
  --C-Deimev_Gray: #7c787e;
  --C-Deimev_Violet: #70488c;
  --C-Deimev_Void_Purple: #382f3c;
  --C-Korazu_Light_Yellow: #f5eeda;
  --C-Korazu_Orange: #fcba9f;
  --C-Korazu_White: #fbf8ee;
  --C-Korazu_Yellow: #ebd6a5;
  --C-MythSeavalanche_Blue: #e6f3f8;
  --C-MythSeavalanche_Dark_Green: #9ebb98;
  --C-MythSeavalanche_Dark_Yellow: #d8b86d;
  --C-MythSeavalanche_Green: #c1cc83;
  --C-MythSeavalanche_Light_Green: #e0e98b;
  --C-MythSeavalanche_Light_Yellow: #fbefa1;
  --C-MythSeavalanche_Peach: #f4cebd;
  --C-MythSeavalanche_Yellow: #f4df7e;
  --C-Sarchie_Cyan: #9be2c9;
  --C-Sarchie_Light_Cyan: #cef1e5;
  --C-Sarchie_Sky_Blue: #87d1f3;
  --C-Sarchie_Teal: #4e7f91;
  --C-Sarchie_Yellow: #f9e9ad;
  --C-SeaWeb_Dark_Purple: #181621;
  --C-SeaWeb_Purple: #2c233d;
  --C-Seava_Blue: #4c77ae;
  --C-Seava_Dark_Blue: #3e4f7b;
  --C-Seava_Light_Blue: #9bd0e2;
  --C-Seava_Lighter_Dark_Blue: #536e9d;
  --C-Seava_Yellow: #fcf3d9;
  --C-Seavalanche_Light_Blue: #bbe2f0;
  --C-Uzakon_Light_Purple: #c6b0cf;
  --C-Uzakon_Lighter_Light_Purple: #d8d3e5;
  --C-Uzakon_Purple: #958abf;
  --C-Uzakon_White: #eeecf4;
  --C-Vesnea_Light_Pink: #fdc4d3;
  --C-Vesnea_Pink: #f29cc2;
  --C-Vesnea_Purple: #4c2c57;
  --C-Vesnea_white: #fefcfc;
  --C-Zumiko_Light_Red: #f2cbd4;
  --C-Zumiko_Pink: #f8bed5;
  --C-Zumiko_Red: #e28094;
  --C-Zumiko_White: #f9e8ec;
  --attribute-aether: #f4df7e;
  --attribute-darkness: #382f3c;
  --attribute-electric: #ffe941;
  --attribute-fire: #e1294d;
  --attribute-light: #ffffff;
  --attribute-magical: #fdc4d3;
  --attribute-metal: #5a6775;
  --attribute-nature: #70bb74;
  --attribute-psionic: #ce36be;
  --attribute-sound: #ec6f97;
  --attribute-spirit: #70488c;
  --attribute-text-seawebdarkpurple: var(--C-SeaWeb_Dark_Purple, #181621);
  --attribute-text-vesneawhite: var(--C-Vesnea_white, #fefcfc);
  --attribute-void: #1c1b1d;
  --attribute-water: #3e4f7b;
  --attribute-wind: #9be2c9;
  --cutepink: #ff69b4;
  --cutepink2: #d63384;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(214, 45, 100));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(214, 45, 100) none 0px;
  text-decoration-color: rgb(214, 45, 100);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, color(srgb 0.165775 0.680214 0.916578));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.165775 0.680214 0.916578) none 0px;
  text-decoration-color: color(srgb 0.165775 0.680214 0.916578);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, color(srgb 0.165775 0.680214 0.916578));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.165775 0.680214 0.916578) none 0px;
  text-decoration-color: color(srgb 0.165775 0.680214 0.916578);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(214, 45, 100));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(214, 45, 100) none 0px;
  text-decoration-color: rgb(214, 45, 100);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(253, 196, 211));
  color: var(--text-normal, rgb(39, 35, 67));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(39, 35, 67) none 0px;
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body del {
  color: color-mix(in srgb, var(--text-muted) 60%, transparent);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.46735 0.4195 0.6805 / 0.6) none 0px;
  text-decoration: line-through rgb(214, 51, 132);
  text-decoration-color: var(--cutepink2, rgb(214, 51, 132));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(39, 35, 67));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(206, 54, 190);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(112, 187, 116));
  border-color: rgb(112, 187, 116);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(119, 107, 174));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(119, 107, 174) none 0px;
  text-decoration-color: rgb(119, 107, 174);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(242, 156, 195));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration-color: rgb(242, 156, 195);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(242, 156, 195));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration-color: rgb(242, 156, 195);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(242, 156, 195));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration: underline rgba(242, 156, 195, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(242, 156, 195, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body dt {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body ol > li {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body ul > li {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(145, 113, 168));
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body table {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 183.156px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: var(--table-text-color, rgb(39, 35, 67));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: var(--table-header-color, rgb(39, 35, 67));
  font-weight: var(--table-header-weight, 700);
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, color(srgb 0.9494 0.6106 0.76306 / 0.2));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(243, 239, 245));
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: var(--code-normal, rgb(39, 35, 67));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(243, 239, 245));
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body figcaption {
  color: rgb(39, 35, 67);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(243, 239, 245));
  border-bottom-color: rgb(119, 107, 174);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(246, 182, 212);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(206, 54, 190);
  border-left-color: rgb(206, 54, 190);
  border-right-color: rgb(206, 54, 190);
  border-top-color: rgb(206, 54, 190);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(112, 187, 116);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(112, 187, 116);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 251, 251);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 251, 251);
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
  background-color: rgb(145, 113, 168);
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

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(39, 35, 67);
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
  background-color: rgb(254, 251, 251);
  border-bottom-color: rgb(198, 176, 207);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-normal, rgb(39, 35, 67));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(254, 251, 251));
  border-bottom-color: rgb(162, 129, 177);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(162, 129, 177);
  border-right-color: rgb(162, 129, 177);
  border-top-color: rgb(162, 129, 177);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, color(srgb 0.776471 0.690196 0.811765 / 0.5) 0px 30px 90px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(39, 35, 67) none 0px;
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(162, 129, 177);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(162, 129, 177);
  border-right-color: rgb(162, 129, 177);
  border-top-color: rgb(162, 129, 177);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 237, 247);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(242, 156, 195, 0.1));
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(242, 156, 195);
}

html[saved-theme="light"] body h1 {
  color: var(--C-SeaWeb_Purple, rgb(44, 35, 61));
  font-family: var(--h1-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(39, 35, 67));
}

html[saved-theme="light"] body h2 {
  color: var(--C-SeaWeb_Purple, rgb(44, 35, 61));
  font-family: var(--h2-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(39, 35, 67));
  font-family: var(--inline-title-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h3 {
  color: var(--C-SeaWeb_Purple, rgb(44, 35, 61));
  font-family: var(--h3-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  color: var(--C-SeaWeb_Purple, rgb(44, 35, 61));
  font-family: var(--h4-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  color: var(--C-SeaWeb_Purple, rgb(44, 35, 61));
  font-family: var(--h5-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--C-SeaWeb_Purple, rgb(44, 35, 61));
  font-family: var(--h6-font, "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(119, 107, 174));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(119, 107, 174));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(39, 35, 67);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: var(--icon-color, rgb(119, 107, 174));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(239, 237, 247));
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  border-top-left-radius: 6px;
  color: var(--status-bar-text-color, rgb(119, 107, 174));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(119, 107, 174);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(39, 35, 67);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(119, 107, 174));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(119, 107, 174));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: var(--icon-color, rgb(119, 107, 174));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(119, 107, 174);
  stroke: rgb(119, 107, 174);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(145, 113, 168));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(39, 35, 67));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(254, 251, 251));
  border-color: rgb(39, 35, 67);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(198, 176, 207);
  color: var(--table-header-color, rgb(39, 35, 67));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: var(--text-muted, rgb(119, 107, 174));
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(198, 176, 207);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(119, 107, 174);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(119, 107, 174);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(242, 156, 195, 0.1));
  color: var(--pill-color, rgb(242, 156, 195));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(119, 107, 174);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(254, 251, 251));
  color: var(--text-normal, rgb(39, 35, 67));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(239, 237, 247));
  border-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(248, 246, 249));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(39, 35, 67);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(239, 237, 247));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(39, 35, 67));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: var(--text-normal, rgb(119, 107, 174));
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(243, 239, 245));
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: var(--code-normal, rgb(39, 35, 67));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body sub {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body summary {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body sup {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(242, 156, 195, 0.1));
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  color: var(--tag-color, rgb(242, 156, 195));
}`,
  },
};
