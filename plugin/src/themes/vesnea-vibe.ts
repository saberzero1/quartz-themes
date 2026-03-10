import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vesnea-vibe",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["josefin-sans", "work-sans"],
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
  --attribute-text-seawebdarkpurple: #181621;
  --attribute-text-vesneawhite: #fefcfc;
  --attribute-void: #1c1b1d;
  --attribute-water: #3e4f7b;
  --attribute-wind: #9be2c9;
  --background-modifier-active-hover: rgba(242, 156, 195, 0.1);
  --background-modifier-border: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --background-modifier-border-focus: #f29cc2;
  --background-modifier-border-hover: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	);
  --background-modifier-form-field: hsl(from #181621 h s calc(l - 3));
  --background-modifier-form-field-hover: hsl(from #181621 h s calc(l - 3));
  --background-primary: #2c233d;
  --background-primary-alt: hsl(from #2c233d h s calc(l - 10));
  --background-secondary: #181621;
  --background-secondary-alt: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --bases-cards-background: #2c233d;
  --bases-cards-cover-background: hsl(from #2c233d h s calc(l - 10));
  --bases-cards-radius: 6px;
  --bases-cards-shadow: 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	);
  --bases-embed-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --bases-group-heading-property-color: #fdc4d3;
  --bases-table-border-color: color-mix(
		in srgb,
		rgb(242, 156, 195) 40%,
		transparent
	);
  --bases-table-cell-background-active: #2c233d;
  --bases-table-cell-background-disabled: hsl(from #2c233d h s calc(l - 10));
  --bases-table-cell-background-selected: rgba(242, 156, 195, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #f29cc2;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(242, 156, 195);
  --bases-table-group-background: hsl(from #2c233d h s calc(l - 10));
  --bases-table-header-background: #2c233d;
  --bases-table-header-color: #fdc4d3;
  --bases-table-summary-background: #2c233d;
  --blockquote-border-color: rgb(242, 156, 195);
  --blur-background: color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent) linear-gradient(hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	), color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: #f29cc2;
  --bold-modifier: 300;
  --bold-weight: 700;
  --button-radius: 4px;
  --callout-title-weight: 700;
  --canvas-background: #2c233d;
  --canvas-card-label-color: #c6b0cf;
  --canvas-dot-pattern: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --caret-color: rgb(253, 196, 211);
  --checkbox-border-color: #ce36be;
  --checkbox-border-color-hover: #70bb74;
  --checkbox-color: #70bb74;
  --checkbox-color-hover: #ce36be;
  --checkbox-marker-color: #2c233d;
  --checklist-done-color: #70bb74;
  --code-background: hsl(from #2c233d h s calc(l - 10));
  --code-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --code-comment: #c6b0cf;
  --code-normal: #f9e8ec;
  --code-punctuation: #fdc4d3;
  --codeFont: var(--font-text);
  --collapse-icon-color: #c6b0cf;
  --collapse-icon-color-collapsed: rgb(250, 209, 230);
  --color-accent: rgb(242, 156, 195);
  --color-accent-1: rgb(250, 209, 230);
  --color-accent-2: hsl(328, 80.85%, 100.62%);
  --color-accent-hsl: 333, 77%, 78%;
  --color-base-00: #2c233d;
  --color-base-05: hsl(from #2c233d h s calc(l - 5));
  --color-base-10: hsl(from #2c233d h s calc(l - 10));
  --color-base-100: #f9e8ec;
  --color-base-20: #181621;
  --color-base-25: hsl(from #181621 h s calc(l - 3));
  --color-base-30: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --color-base-35: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	);
  --color-base-40: #f29cc2;
  --color-base-50: #c6b0cf;
  --color-base-60: color-mix(
		in srgb,
		#c6b0cf 50%,
		#fdc4d3 50%
	);
  --color-base-70: #fdc4d3;
  --cutepink: #ff69b4;
  --cutepink2: #d63384;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --divider-color-hover: rgb(242, 156, 195);
  --dropdown-background: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --dropdown-background-hover: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	);
  --embed-block-shadow-hover: 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	), inset 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --embed-border-start: 2px solid rgb(242, 156, 195);
  --file-header-background: #2c233d;
  --file-header-background-focused: #2c233d;
  --file-header-font: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --flair-color: #f9e8ec;
  --font-interface: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Work Sans, sans-serif;
  --font-mermaid: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', Josefin Sans, sans-serif, 'Arial';
  --font-text: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Josefin Sans, sans-serif;
  --footnote-divider-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --footnote-id-color: #fdc4d3;
  --footnote-id-color-no-occurrences: #c6b0cf;
  --graph-line: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	);
  --graph-node: #fdc4d3;
  --graph-node-focused: rgb(250, 209, 230);
  --graph-node-unresolved: #c6b0cf;
  --graph-text: #f9e8ec;
  --gray: var(--text-muted);
  --headerFont: var(--font-text);
  --heading-formatting: #c6b0cf;
  --highlight: var(--text-highlight-bg);
  --hr-color: #f4df7e;
  --icon-color: #fdc4d3;
  --icon-color-active: rgb(250, 209, 230);
  --icon-color-focused: #f9e8ec;
  --icon-color-hover: #fdc4d3;
  --input-date-separator: #c6b0cf;
  --input-placeholder-color: #c6b0cf;
  --input-radius: 4px;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
		0 4px 6px color-mix(in srgb, rgb(242, 156, 195) 50%, transparent);
  --interactive-accent: rgb(242, 156, 195);
  --interactive-accent-hover: rgb(250, 209, 230);
  --interactive-accent-hsl: 333, 77%, 78%;
  --interactive-hover: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	);
  --interactive-normal: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --italic-color: #fdc4d3;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(250, 209, 230);
  --link-color-hover: hsl(328, 80.85%, 100.62%);
  --link-external-color: rgb(250, 209, 230);
  --link-external-color-hover: hsl(328, 80.85%, 100.62%);
  --link-unresolved-color: rgb(250, 209, 230);
  --link-unresolved-decoration-color: rgba(242, 156, 195, 0.3);
  --list-marker-color: #f4df7e;
  --list-marker-color-collapsed: rgb(250, 209, 230);
  --list-marker-color-hover: #fdc4d3;
  --list-spacing: 2px;
  --menu-background: #181621;
  --menu-border-color: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	);
  --menu-radius: 6px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 0px 60px color-mix(in srgb, rgb(242, 156, 195) 50%, transparent);
  --metadata-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --metadata-divider-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --metadata-input-font: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #f9e8ec;
  --metadata-label-font: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #fdc4d3;
  --metadata-label-text-color-hover: #fdc4d3;
  --metadata-property-box-shadow-focus: 0 0 0 2px #f29cc2;
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	);
  --modal-background: #2c233d;
  --modal-border-color: color-mix(
		in srgb,
		rgb(242, 156, 195) 20%,
		transparent
	);
  --modal-radius: 8px;
  --nav-collapse-icon-color: #c6b0cf;
  --nav-collapse-icon-color-collapsed: #c6b0cf;
  --nav-heading-color: #f9e8ec;
  --nav-heading-color-collapsed: #c6b0cf;
  --nav-heading-color-collapsed-hover: #fdc4d3;
  --nav-heading-color-hover: #f9e8ec;
  --nav-item-background-selected: rgba(242, 156, 195, 0.15);
  --nav-item-color: #fdc4d3;
  --nav-item-color-active: #f9e8ec;
  --nav-item-color-highlighted: rgb(250, 209, 230);
  --nav-item-color-hover: #f9e8ec;
  --nav-item-color-selected: #f9e8ec;
  --nav-tag-color: #c6b0cf;
  --nav-tag-color-active: #fdc4d3;
  --nav-tag-color-hover: #fdc4d3;
  --pdf-background: #2c233d;
  --pdf-page-background: #2c233d;
  --pdf-shadow: 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --pdf-sidebar-background: #2c233d;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --pill-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --pill-border-color-hover: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	);
  --pill-color: #fdc4d3;
  --pill-color-hover: #f9e8ec;
  --pill-color-remove: #c6b0cf;
  --pill-color-remove-hover: rgb(250, 209, 230);
  --prompt-background: #2c233d;
  --prompt-border-color: #f29cc2;
  --radius-l: 8px;
  --radius-m: 6px;
  --raised-background: color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent) linear-gradient(hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	), color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent));
  --ribbon-background: #181621;
  --ribbon-background-collapsed: #2c233d;
  --scrollbar-radius: 8px;
  --search-clear-button-color: #fdc4d3;
  --search-icon-color: #fdc4d3;
  --search-result-background: #2c233d;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #f9e8ec;
  --setting-items-background: hsl(from #2c233d h s calc(l - 10));
  --setting-items-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --setting-items-radius: 8px;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
		0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
		0px 30px 90px color-mix(in srgb, rgb(242, 156, 195) 50%, transparent);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 0px 60px color-mix(in srgb, rgb(242, 156, 195) 50%, transparent);
  --slider-thumb-border-color: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	);
  --slider-thumb-radius: 4px;
  --slider-track-background: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --status-bar-background: #181621;
  --status-bar-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --status-bar-radius: 6px 0 0 0;
  --status-bar-text-color: #fdc4d3;
  --suggestion-background: #2c233d;
  --tab-background-active: #2c233d;
  --tab-container-background: #181621;
  --tab-divider-color: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	);
  --tab-outline-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --tab-radius-active: 4px;
  --tab-switcher-background: #181621;
  --tab-switcher-menubar-background: linear-gradient(to top, #181621, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(242, 156, 195);
  --tab-text-color: #c6b0cf;
  --tab-text-color-active: #fdc4d3;
  --tab-text-color-focused: #fdc4d3;
  --tab-text-color-focused-active: #fdc4d3;
  --tab-text-color-focused-active-current: #f9e8ec;
  --tab-text-color-focused-highlighted: rgb(250, 209, 230);
  --table-add-button-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --table-border-color: color-mix(
		in srgb,
		rgb(242, 156, 195) 40%,
		transparent
	);
  --table-drag-handle-background-active: rgb(242, 156, 195);
  --table-drag-handle-color: #c6b0cf;
  --table-drag-handle-color-active: #2c233d;
  --table-header-background: color-mix(
		in srgb,
		rgb(242, 156, 195) 20%,
		transparent
	);
  --table-header-background-hover: color-mix(
		in srgb,
		rgb(242, 156, 195) 60%,
		transparent
	);
  --table-header-border-color: color-mix(
		in srgb,
		rgb(242, 156, 195) 40%,
		transparent
	);
  --table-header-color: #f9e8ec;
  --table-header-weight: 700;
  --table-selection: rgba(242, 156, 195, 0.1);
  --table-selection-border-color: rgb(242, 156, 195);
  --tag-background: rgba(242, 156, 195, 0.1);
  --tag-background-hover: rgba(242, 156, 195, 0.2);
  --tag-border-color: rgba(242, 156, 195, 0.15);
  --tag-border-color-hover: rgba(242, 156, 195, 0.15);
  --tag-color: rgb(250, 209, 230);
  --tag-color-hover: rgb(250, 209, 230);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(250, 209, 230);
  --text-accent-hover: hsl(328, 80.85%, 100.62%);
  --text-faint: #c6b0cf;
  --text-highlight-bg: hsl(
		from #ce36be calc(h + 20) calc(s - 10) l / 0.85
	);
  --text-muted: #fdc4d3;
  --text-normal: #f9e8ec;
  --text-on-accent: #2c233d;
  --text-selection: rgba(242, 156, 195, 0.33);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #181621;
  --titlebar-background-focused: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --titlebar-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	);
  --titlebar-text-color: #fdc4d3;
  --titlebar-text-color-focused: #f9e8ec;
  --toggle-radius: 6px;
  --toggle-thumb-radius: 4px;
  --vault-profile-color: #f9e8ec;
  --vault-profile-color-hover: #f9e8ec;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 22, 33);
  color: rgb(249, 232, 236);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(44, 35, 61);
  color: rgb(249, 232, 236);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 22, 33);
  color: rgb(249, 232, 236);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 22, 33);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  color: rgb(249, 232, 236);
}

body div#quartz-root {
  background-color: rgb(44, 35, 61);
  color: rgb(249, 232, 236);
}`,
    typography: `body .page article p > b, b {
  color: rgb(242, 156, 194);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(242, 156, 194) none 0px;
  text-decoration: rgb(242, 156, 194);
  text-decoration-color: rgb(242, 156, 194);
}

body .page article p > em, em {
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration: rgb(253, 196, 211);
  text-decoration-color: rgb(253, 196, 211);
}

body .page article p > i, i {
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration: rgb(253, 196, 211);
  text-decoration-color: rgb(253, 196, 211);
}

body .page article p > strong, strong {
  color: rgb(242, 156, 194);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(242, 156, 194) none 0px;
  text-decoration: rgb(242, 156, 194);
  text-decoration-color: rgb(242, 156, 194);
}

body .text-highlight {
  background-color: color(srgb 0.758824 0.260784 0.540385 / 0.85);
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 232, 236) none 0px;
  text-decoration: rgb(249, 232, 236);
  text-decoration-color: rgb(249, 232, 236);
}

body del {
  color: color(srgb 0.992157 0.768627 0.827451 / 0.6);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.992157 0.768627 0.827451 / 0.6) none 0px;
  text-decoration: line-through rgb(214, 51, 132);
  text-decoration-color: rgb(214, 51, 132);
}

body p {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration: rgb(253, 196, 211);
  text-decoration-color: rgb(253, 196, 211);
}`,
    links: `body a.external, footer a {
  color: rgb(249, 208, 229);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration: underline rgb(249, 208, 229);
  text-decoration-color: rgb(249, 208, 229);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(249, 208, 229);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration: underline rgb(249, 208, 229);
  text-decoration-color: rgb(249, 208, 229);
}

body a.internal.broken {
  color: rgb(249, 208, 229);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration: underline rgba(242, 156, 195, 0.3);
  text-decoration-color: rgba(242, 156, 195, 0.3);
}`,
    lists: `body dd {
  color: rgb(249, 232, 236);
}

body dt {
  color: rgb(249, 232, 236);
}

body ol > li {
  color: color(srgb 0.944282 0.475326 0.894918);
}

body ol.overflow {
  background-color: rgb(44, 35, 61);
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body ul > li {
  color: color(srgb 0.944282 0.475326 0.894918);
}

body ul.overflow {
  background-color: rgb(44, 35, 61);
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(198, 176, 207);
  text-decoration: rgb(198, 176, 207);
}

body blockquote {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body table {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 183.156px;
}

body td {
  border-bottom-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-left-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-right-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-top-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  color: rgb(249, 232, 236);
}

body th {
  border-bottom-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-left-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-right-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-top-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  color: rgb(249, 232, 236);
  font-weight: 700;
}

body tr {
  background-color: color(srgb 0.9494 0.6106 0.76306 / 0.2);
}`,
    code: `body code {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  color: rgb(249, 232, 236);
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
}

body pre:has(> code) {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
}`,
    images: `body audio {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body figcaption {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body img {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body video {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    embeds: `body .file-embed {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: rgb(253, 196, 211);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .footnotes {
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

body .transclude {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(242, 156, 195);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body .transclude-inner {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(242, 156, 195);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(112, 187, 116);
  text-decoration: line-through rgb(112, 187, 116);
  text-decoration-color: rgb(112, 187, 116);
}

body input[type=checkbox] {
  border-bottom-color: rgb(206, 54, 190);
  border-left-color: rgb(206, 54, 190);
  border-right-color: rgb(206, 54, 190);
  border-top-color: rgb(206, 54, 190);
}

body li.task-list-item[data-task='!'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='*'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='-'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='/'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='>'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='?'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='I'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='S'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='b'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='c'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='d'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='f'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='i'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='k'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='l'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='p'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='u'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}

body li.task-list-item[data-task='w'] {
  color: color(srgb 0.944282 0.475326 0.894918);
  text-decoration: color(srgb 0.944282 0.475326 0.894918);
  text-decoration-color: color(srgb 0.944282 0.475326 0.894918);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}`,
    search: `body .search > .search-button {
  background-color: color(srgb 0.0679358 0.0622745 0.0934118);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(249, 232, 236);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(44, 35, 61);
  border-bottom-color: rgb(242, 156, 194);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(242, 156, 194);
  border-right-color: rgb(242, 156, 194);
  border-top-color: rgb(242, 156, 194);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, color(srgb 0.9494 0.6106 0.76306 / 0.5) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 232, 236) none 0px;
  text-decoration: rgb(249, 232, 236);
  text-decoration-color: rgb(249, 232, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(249, 232, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(249, 232, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(249, 232, 236);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(242, 156, 194);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(242, 156, 194);
  border-right-color: rgb(242, 156, 194);
  border-top-color: rgb(242, 156, 194);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 22, 33);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(249, 232, 236);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(242, 156, 195, 0.1);
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(249, 208, 229);
}

body h1 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}

body ::-webkit-scrollbar-corner {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}

body ::-webkit-scrollbar-track {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(253, 196, 211);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(253, 196, 211);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(253, 196, 211);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
}`,
    footer: `body footer {
  background-color: rgb(24, 22, 33);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-left-radius: 6px;
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(253, 196, 211);
  text-decoration: rgb(253, 196, 211);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(249, 232, 236);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(253, 196, 211);
  text-decoration: rgb(253, 196, 211);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body li.section-li > .section .meta {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(253, 196, 211);
  text-decoration: rgb(253, 196, 211);
}

body ul.section-ul {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
}

body .darkmode svg {
  color: rgb(253, 196, 211);
  stroke: rgb(253, 196, 211);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
}

body .breadcrumb-element p {
  color: rgb(198, 176, 207);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

body .metadata {
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(24, 22, 33);
}

body .page-header h2.page-title {
  color: rgb(249, 232, 236);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(249, 232, 236);
  text-decoration: underline dotted rgb(249, 232, 236);
}

body details {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body input[type=text] {
  border-bottom-color: rgb(253, 196, 211);
  border-left-color: rgb(253, 196, 211);
  border-right-color: rgb(253, 196, 211);
  border-top-color: rgb(253, 196, 211);
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

body progress {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

body sub {
  color: rgb(249, 232, 236);
}

body summary {
  color: rgb(249, 232, 236);
}

body sup {
  color: rgb(249, 232, 236);
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
  --attribute-text-seawebdarkpurple: #181621;
  --attribute-text-vesneawhite: #fefcfc;
  --attribute-void: #1c1b1d;
  --attribute-water: #3e4f7b;
  --attribute-wind: #9be2c9;
  --background-modifier-active-hover: rgba(242, 156, 195, 0.1);
  --background-modifier-border: #c6b0cf;
  --background-modifier-border-focus: rgb(162, 129, 177);
  --background-modifier-border-hover: rgb(185, 160, 197);
  --background-modifier-form-field: rgb(254, 251, 251);
  --background-modifier-form-field-hover: rgb(254, 251, 251);
  --background-primary: rgb(254, 251, 251);
  --background-primary-alt: rgb(243, 239, 245);
  --background-secondary: rgb(239, 237, 247);
  --background-secondary-alt: rgb(248, 246, 249);
  --bases-cards-background: rgb(254, 251, 251);
  --bases-cards-cover-background: rgb(243, 239, 245);
  --bases-cards-radius: 6px;
  --bases-cards-shadow: 0 0 0 1px #c6b0cf;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(185, 160, 197);
  --bases-embed-border-color: #c6b0cf;
  --bases-group-heading-property-color: rgb(119, 107, 174);
  --bases-table-border-color: #c6b0cf;
  --bases-table-cell-background-active: rgb(254, 251, 251);
  --bases-table-cell-background-disabled: rgb(243, 239, 245);
  --bases-table-cell-background-selected: rgba(242, 156, 195, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(162, 129, 177);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(246, 182, 212);
  --bases-table-group-background: rgb(243, 239, 245);
  --bases-table-header-background: rgb(254, 251, 251);
  --bases-table-header-color: rgb(119, 107, 174);
  --bases-table-summary-background: rgb(254, 251, 251);
  --blockquote-border-color: rgb(246, 182, 212);
  --blur-background: color-mix(in srgb, rgb(254, 251, 251) 65%, transparent) linear-gradient(rgb(254, 251, 251), color-mix(in srgb, rgb(254, 251, 251) 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: #d62d64;
  --bold-modifier: 300;
  --bold-weight: 700;
  --button-radius: 4px;
  --callout-title-weight: 700;
  --canvas-background: rgb(254, 251, 251);
  --canvas-card-label-color: rgb(145, 113, 168);
  --canvas-dot-pattern: #c6b0cf;
  --caret-color: #87d1f3;
  --checkbox-border-color: #ce36be;
  --checkbox-border-color-hover: #70bb74;
  --checkbox-color: #70bb74;
  --checkbox-color-hover: #ce36be;
  --checkbox-marker-color: rgb(254, 251, 251);
  --checklist-done-color: #70bb74;
  --code-background: rgb(243, 239, 245);
  --code-border-color: #c6b0cf;
  --code-comment: rgb(145, 113, 168);
  --code-normal: rgb(39, 35, 67);
  --code-punctuation: rgb(119, 107, 174);
  --codeFont: var(--font-text);
  --collapse-icon-color: rgb(145, 113, 168);
  --collapse-icon-color-collapsed: rgb(242, 156, 195);
  --color-accent: rgb(242, 156, 195);
  --color-accent-1: rgb(246, 182, 212);
  --color-accent-2: rgb(250, 209, 230);
  --color-accent-hsl: 333, 77%, 78%;
  --color-base-00: rgb(254, 251, 251);
  --color-base-05: rgb(248, 246, 249);
  --color-base-10: rgb(243, 239, 245);
  --color-base-100: rgb(39, 35, 67);
  --color-base-20: rgb(220, 208, 226);
  --color-base-25: rgb(208, 192, 216);
  --color-base-30: #c6b0cf;
  --color-base-35: rgb(185, 160, 197);
  --color-base-40: rgb(162, 129, 177);
  --color-base-50: rgb(145, 113, 168);
  --color-base-60: rgb(135, 109, 171);
  --color-base-70: rgb(119, 107, 174);
  --cutepink: #ff69b4;
  --cutepink2: #d63384;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #c6b0cf;
  --divider-color-hover: rgb(246, 182, 212);
  --dropdown-background: rgb(254, 251, 251);
  --dropdown-background-hover: rgb(243, 239, 245);
  --embed-block-shadow-hover: 0 0 0 1px #c6b0cf, inset 0 0 0 1px #c6b0cf;
  --embed-border-start: 2px solid rgb(246, 182, 212);
  --file-header-background: rgb(254, 251, 251);
  --file-header-background-focused: rgb(254, 251, 251);
  --file-header-font: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(254, 251, 251);
  --flair-color: rgb(39, 35, 67);
  --font-interface: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Work Sans, sans-serif;
  --font-mermaid: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', Josefin Sans, sans-serif, 'Arial';
  --font-text: '??', Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Josefin Sans, sans-serif;
  --footnote-divider-color: #c6b0cf;
  --footnote-id-color: rgb(119, 107, 174);
  --footnote-id-color-no-occurrences: rgb(145, 113, 168);
  --graph-line: rgb(185, 160, 197);
  --graph-node: rgb(119, 107, 174);
  --graph-node-focused: rgb(242, 156, 195);
  --graph-node-unresolved: rgb(145, 113, 168);
  --graph-text: rgb(39, 35, 67);
  --gray: var(--text-muted);
  --headerFont: var(--font-text);
  --heading-formatting: rgb(145, 113, 168);
  --highlight: var(--text-highlight-bg);
  --hr-color: #c6b0cf;
  --icon-color: rgb(119, 107, 174);
  --icon-color-active: rgb(242, 156, 195);
  --icon-color-focused: rgb(39, 35, 67);
  --icon-color-hover: rgb(119, 107, 174);
  --input-date-separator: rgb(145, 113, 168);
  --input-placeholder-color: rgb(145, 113, 168);
  --input-radius: 4px;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
		0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 0 0 0 transparent,
		0 4px 6px
			color-mix(in srgb, #c6b0cf 50%, transparent);
  --interactive-accent: rgb(246, 182, 212);
  --interactive-accent-hover: rgb(250, 209, 230);
  --interactive-accent-hsl: 333, 77%, 78%;
  --interactive-hover: rgb(243, 239, 245);
  --interactive-normal: rgb(254, 251, 251);
  --italic-color: hsl(from #87d1f3 h s calc(l - 20));
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(242, 156, 195);
  --link-color-hover: rgb(250, 209, 230);
  --link-external-color: rgb(242, 156, 195);
  --link-external-color-hover: rgb(250, 209, 230);
  --link-unresolved-color: rgb(242, 156, 195);
  --link-unresolved-decoration-color: rgba(242, 156, 195, 0.3);
  --list-marker-color: rgb(145, 113, 168);
  --list-marker-color-collapsed: rgb(242, 156, 195);
  --list-marker-color-hover: rgb(119, 107, 174);
  --list-spacing: 2px;
  --menu-background: rgb(239, 237, 247);
  --menu-border-color: rgb(185, 160, 197);
  --menu-radius: 6px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 30px 90px
			color-mix(in srgb, #c6b0cf 50%, transparent);
  --metadata-border-color: #c6b0cf;
  --metadata-divider-color: #c6b0cf;
  --metadata-input-font: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(39, 35, 67);
  --metadata-label-font: '??', Work Sans, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(119, 107, 174);
  --metadata-label-text-color-hover: rgb(119, 107, 174);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(162, 129, 177);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(185, 160, 197);
  --modal-background: rgb(254, 251, 251);
  --modal-border-color: transparent;
  --modal-radius: 8px;
  --nav-collapse-icon-color: rgb(145, 113, 168);
  --nav-collapse-icon-color-collapsed: rgb(145, 113, 168);
  --nav-heading-color: rgb(39, 35, 67);
  --nav-heading-color-collapsed: rgb(145, 113, 168);
  --nav-heading-color-collapsed-hover: rgb(119, 107, 174);
  --nav-heading-color-hover: rgb(39, 35, 67);
  --nav-item-background-selected: rgba(242, 156, 195, 0.15);
  --nav-item-color: rgb(119, 107, 174);
  --nav-item-color-active: rgb(39, 35, 67);
  --nav-item-color-highlighted: rgb(242, 156, 195);
  --nav-item-color-hover: rgb(39, 35, 67);
  --nav-item-color-selected: rgb(39, 35, 67);
  --nav-tag-color: rgb(145, 113, 168);
  --nav-tag-color-active: rgb(119, 107, 174);
  --nav-tag-color-hover: rgb(119, 107, 174);
  --pdf-background: rgb(254, 251, 251);
  --pdf-page-background: rgb(254, 251, 251);
  --pdf-sidebar-background: rgb(254, 251, 251);
  --pill-border-color: #c6b0cf;
  --pill-border-color-hover: rgb(185, 160, 197);
  --pill-color: rgb(119, 107, 174);
  --pill-color-hover: rgb(39, 35, 67);
  --pill-color-remove: rgb(145, 113, 168);
  --pill-color-remove-hover: rgb(242, 156, 195);
  --prompt-background: rgb(254, 251, 251);
  --prompt-border-color: rgb(162, 129, 177);
  --radius-l: 8px;
  --radius-m: 6px;
  --raised-background: color-mix(in srgb, rgb(254, 251, 251) 65%, transparent) linear-gradient(rgb(254, 251, 251), color-mix(in srgb, rgb(254, 251, 251) 65%, transparent));
  --ribbon-background: rgb(239, 237, 247);
  --ribbon-background-collapsed: rgb(254, 251, 251);
  --scrollbar-radius: 8px;
  --search-clear-button-color: rgb(119, 107, 174);
  --search-icon-color: rgb(119, 107, 174);
  --search-result-background: rgb(254, 251, 251);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(39, 35, 67);
  --setting-items-background: rgb(243, 239, 245);
  --setting-items-border-color: #c6b0cf;
  --setting-items-radius: 8px;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
		0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
		0px 30px 90px
			color-mix(in srgb, #c6b0cf 50%, transparent);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 30px 90px
			color-mix(in srgb, #c6b0cf 50%, transparent);
  --slider-thumb-border-color: rgb(185, 160, 197);
  --slider-thumb-radius: 4px;
  --slider-track-background: #c6b0cf;
  --status-bar-background: rgb(239, 237, 247);
  --status-bar-border-color: #c6b0cf;
  --status-bar-radius: 6px 0 0 0;
  --status-bar-text-color: rgb(119, 107, 174);
  --suggestion-background: rgb(254, 251, 251);
  --tab-background-active: rgb(254, 251, 251);
  --tab-container-background: rgb(239, 237, 247);
  --tab-divider-color: rgb(185, 160, 197);
  --tab-outline-color: #c6b0cf;
  --tab-radius-active: 4px;
  --tab-switcher-background: rgb(239, 237, 247);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(239, 237, 247), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(242, 156, 195);
  --tab-text-color: rgb(145, 113, 168);
  --tab-text-color-active: rgb(119, 107, 174);
  --tab-text-color-focused: rgb(119, 107, 174);
  --tab-text-color-focused-active: rgb(119, 107, 174);
  --tab-text-color-focused-active-current: rgb(39, 35, 67);
  --tab-text-color-focused-highlighted: rgb(242, 156, 195);
  --table-add-button-border-color: #c6b0cf;
  --table-border-color: #c6b0cf;
  --table-drag-handle-background-active: rgb(246, 182, 212);
  --table-drag-handle-color: rgb(145, 113, 168);
  --table-drag-handle-color-active: #2c233d;
  --table-header-background: color-mix(
		in srgb,
		rgb(242, 156, 195) 20%,
		transparent
	);
  --table-header-background-hover: color-mix(
		in srgb,
		rgb(242, 156, 195) 60%,
		transparent
	);
  --table-header-border-color: #c6b0cf;
  --table-header-color: rgb(39, 35, 67);
  --table-header-weight: 700;
  --table-selection: rgba(242, 156, 195, 0.1);
  --table-selection-border-color: rgb(246, 182, 212);
  --tag-background: rgba(242, 156, 195, 0.1);
  --tag-background-hover: rgba(242, 156, 195, 0.2);
  --tag-border-color: rgba(242, 156, 195, 0.15);
  --tag-border-color-hover: rgba(242, 156, 195, 0.15);
  --tag-color: rgb(242, 156, 195);
  --tag-color-hover: rgb(242, 156, 195);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(242, 156, 195);
  --text-accent-hover: rgb(250, 209, 230);
  --text-faint: rgb(145, 113, 168);
  --text-highlight-bg: #fdc4d3;
  --text-muted: rgb(119, 107, 174);
  --text-normal: rgb(39, 35, 67);
  --text-on-accent: #2c233d;
  --text-selection: rgba(242, 156, 195, 0.2);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(239, 237, 247);
  --titlebar-background-focused: rgb(248, 246, 249);
  --titlebar-border-color: #c6b0cf;
  --titlebar-text-color: rgb(119, 107, 174);
  --titlebar-text-color-focused: rgb(39, 35, 67);
  --toggle-radius: 6px;
  --toggle-thumb-radius: 4px;
  --vault-profile-color: rgb(39, 35, 67);
  --vault-profile-color-hover: rgb(39, 35, 67);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 237, 247);
  color: rgb(39, 35, 67);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(254, 251, 251);
  color: rgb(39, 35, 67);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 237, 247);
  color: rgb(39, 35, 67);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(198, 176, 207);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 237, 247);
  border-left-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
}

body div#quartz-root {
  background-color: rgb(254, 251, 251);
  color: rgb(39, 35, 67);
}`,
    typography: `body .page article p > b, b {
  color: rgb(214, 45, 100);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(214, 45, 100) none 0px;
  text-decoration: rgb(214, 45, 100);
  text-decoration-color: rgb(214, 45, 100);
}

body .page article p > em, em {
  color: color(srgb 0.165775 0.680214 0.916578);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.165775 0.680214 0.916578) none 0px;
  text-decoration: color(srgb 0.165775 0.680214 0.916578);
  text-decoration-color: color(srgb 0.165775 0.680214 0.916578);
}

body .page article p > i, i {
  color: color(srgb 0.165775 0.680214 0.916578);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.165775 0.680214 0.916578) none 0px;
  text-decoration: color(srgb 0.165775 0.680214 0.916578);
  text-decoration-color: color(srgb 0.165775 0.680214 0.916578);
}

body .page article p > strong, strong {
  color: rgb(214, 45, 100);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(214, 45, 100) none 0px;
  text-decoration: rgb(214, 45, 100);
  text-decoration-color: rgb(214, 45, 100);
}

body .text-highlight {
  background-color: rgb(253, 196, 211);
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(39, 35, 67) none 0px;
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body del {
  color: color(srgb 0.46735 0.4195 0.6805 / 0.6);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.46735 0.4195 0.6805 / 0.6) none 0px;
  text-decoration: line-through rgb(214, 51, 132);
  text-decoration-color: rgb(214, 51, 132);
}

body p {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(119, 107, 174) none 0px;
  text-decoration: rgb(119, 107, 174);
  text-decoration-color: rgb(119, 107, 174);
}`,
    links: `body a.external, footer a {
  color: rgb(242, 156, 195);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration: underline rgb(242, 156, 195);
  text-decoration-color: rgb(242, 156, 195);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(242, 156, 195);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration: underline rgb(242, 156, 195);
  text-decoration-color: rgb(242, 156, 195);
}

body a.internal.broken {
  color: rgb(242, 156, 195);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration: underline rgba(242, 156, 195, 0.3);
  text-decoration-color: rgba(242, 156, 195, 0.3);
}`,
    lists: `body dd {
  color: rgb(39, 35, 67);
}

body dt {
  color: rgb(39, 35, 67);
}

body ol > li {
  color: rgb(39, 35, 67);
}

body ol.overflow {
  background-color: rgb(254, 251, 251);
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body ul > li {
  color: rgb(39, 35, 67);
}

body ul.overflow {
  background-color: rgb(254, 251, 251);
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(145, 113, 168);
  text-decoration: rgb(145, 113, 168);
}

body blockquote {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body table {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 183.156px;
}

body td {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
}

body th {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
  font-weight: 700;
}

body tr {
  background-color: color(srgb 0.9494 0.6106 0.76306 / 0.2);
}`,
    code: `body code {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
}

body pre > code, pre:has(> code) {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
}

body pre:has(> code) {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
}`,
    images: `body audio {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body figcaption {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body img {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body video {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    embeds: `body .file-embed {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(119, 107, 174);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .footnotes {
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

body .transclude {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(246, 182, 212);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body .transclude-inner {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(246, 182, 212);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(112, 187, 116);
  text-decoration: line-through rgb(112, 187, 116);
  text-decoration-color: rgb(112, 187, 116);
}

body input[type=checkbox] {
  border-bottom-color: rgb(206, 54, 190);
  border-left-color: rgb(206, 54, 190);
  border-right-color: rgb(206, 54, 190);
  border-top-color: rgb(206, 54, 190);
}

body li.task-list-item[data-task='!'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='*'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='-'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='/'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='>'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='?'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='I'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='S'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='b'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='c'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='d'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='f'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='i'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='k'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='l'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='p'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='u'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body li.task-list-item[data-task='w'] {
  color: rgb(39, 35, 67);
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}`,
    search: `body .search > .search-button {
  background-color: rgb(254, 251, 251);
  border-bottom-color: rgb(198, 176, 207);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(39, 35, 67);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(254, 251, 251);
  border-bottom-color: rgb(162, 129, 177);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(162, 129, 177);
  border-right-color: rgb(162, 129, 177);
  border-top-color: rgb(162, 129, 177);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, color(srgb 0.776471 0.690196 0.811765 / 0.5) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(39, 35, 67) none 0px;
  text-decoration: rgb(39, 35, 67);
  text-decoration-color: rgb(39, 35, 67);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(39, 35, 67);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(39, 35, 67);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(39, 35, 67);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(162, 129, 177);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(162, 129, 177);
  border-right-color: rgb(162, 129, 177);
  border-top-color: rgb(162, 129, 177);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 237, 247);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(39, 35, 67);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(242, 156, 195, 0.1);
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(242, 156, 195);
}

body h1 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}

body ::-webkit-scrollbar-corner {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}

body ::-webkit-scrollbar-track {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(119, 107, 174);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(119, 107, 174);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(119, 107, 174);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
}`,
    footer: `body footer {
  background-color: rgb(239, 237, 247);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  border-top-left-radius: 6px;
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(119, 107, 174);
  text-decoration: rgb(119, 107, 174);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(39, 35, 67);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(119, 107, 174);
  text-decoration: rgb(119, 107, 174);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body li.section-li > .section .meta {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(119, 107, 174);
  text-decoration: rgb(119, 107, 174);
}

body ul.section-ul {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
}

body .darkmode svg {
  color: rgb(119, 107, 174);
  stroke: rgb(119, 107, 174);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
}

body .breadcrumb-element p {
  color: rgb(145, 113, 168);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

body .metadata {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(119, 107, 174);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(239, 237, 247);
}

body .page-header h2.page-title {
  color: rgb(39, 35, 67);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(39, 35, 67);
  text-decoration: underline dotted rgb(39, 35, 67);
}

body details {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body input[type=text] {
  border-bottom-color: rgb(119, 107, 174);
  border-left-color: rgb(119, 107, 174);
  border-right-color: rgb(119, 107, 174);
  border-top-color: rgb(119, 107, 174);
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

body progress {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

body sub {
  color: rgb(39, 35, 67);
}

body summary {
  color: rgb(39, 35, 67);
}

body sup {
  color: rgb(39, 35, 67);
}`,
  },
};
