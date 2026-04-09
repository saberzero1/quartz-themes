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
  --C-Arna_Pink: #ec6f97 !important;
  --C-Arna_Red: #d62d64 !important;
  --C-Deimev_Gray: #7c787e !important;
  --C-Deimev_Violet: #70488c !important;
  --C-Deimev_Void_Purple: #382f3c !important;
  --C-Korazu_Light_Yellow: #f5eeda !important;
  --C-Korazu_Orange: #fcba9f !important;
  --C-Korazu_White: #fbf8ee !important;
  --C-Korazu_Yellow: #ebd6a5 !important;
  --C-MythSeavalanche_Blue: #e6f3f8 !important;
  --C-MythSeavalanche_Dark_Green: #9ebb98 !important;
  --C-MythSeavalanche_Dark_Yellow: #d8b86d !important;
  --C-MythSeavalanche_Green: #c1cc83 !important;
  --C-MythSeavalanche_Light_Green: #e0e98b !important;
  --C-MythSeavalanche_Light_Yellow: #fbefa1 !important;
  --C-MythSeavalanche_Peach: #f4cebd !important;
  --C-MythSeavalanche_Yellow: #f4df7e !important;
  --C-Sarchie_Cyan: #9be2c9 !important;
  --C-Sarchie_Light_Cyan: #cef1e5 !important;
  --C-Sarchie_Sky_Blue: #87d1f3 !important;
  --C-Sarchie_Teal: #4e7f91 !important;
  --C-Sarchie_Yellow: #f9e9ad !important;
  --C-SeaWeb_Dark_Purple: #181621 !important;
  --C-SeaWeb_Purple: #2c233d !important;
  --C-Seava_Blue: #4c77ae !important;
  --C-Seava_Dark_Blue: #3e4f7b !important;
  --C-Seava_Light_Blue: #9bd0e2 !important;
  --C-Seava_Lighter_Dark_Blue: #536e9d !important;
  --C-Seava_Yellow: #fcf3d9 !important;
  --C-Seavalanche_Light_Blue: #bbe2f0 !important;
  --C-Uzakon_Light_Purple: #c6b0cf !important;
  --C-Uzakon_Lighter_Light_Purple: #d8d3e5 !important;
  --C-Uzakon_Purple: #958abf !important;
  --C-Uzakon_White: #eeecf4 !important;
  --C-Vesnea_Light_Pink: #fdc4d3 !important;
  --C-Vesnea_Pink: #f29cc2 !important;
  --C-Vesnea_Purple: #4c2c57 !important;
  --C-Vesnea_white: #fefcfc !important;
  --C-Zumiko_Light_Red: #f2cbd4 !important;
  --C-Zumiko_Pink: #f8bed5 !important;
  --C-Zumiko_Red: #e28094 !important;
  --C-Zumiko_White: #f9e8ec !important;
  --accent-h: 333 !important;
  --accent-l: 78% !important;
  --accent-s: 77% !important;
  --attribute-aether: #f4df7e !important;
  --attribute-darkness: #382f3c !important;
  --attribute-electric: #ffe941 !important;
  --attribute-fire: #e1294d !important;
  --attribute-light: #ffffff !important;
  --attribute-magical: #fdc4d3 !important;
  --attribute-metal: #5a6775 !important;
  --attribute-nature: #70bb74 !important;
  --attribute-psionic: #ce36be !important;
  --attribute-sound: #ec6f97 !important;
  --attribute-spirit: #70488c !important;
  --attribute-text-seawebdarkpurple: #181621 !important;
  --attribute-text-vesneawhite: #fefcfc !important;
  --attribute-void: #1c1b1d !important;
  --attribute-water: #3e4f7b !important;
  --attribute-wind: #9be2c9 !important;
  --background-modifier-active-hover: hsla(333, 77%, 78%, 0.1) !important;
  --background-modifier-border: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --background-modifier-border-focus: #f29cc2 !important;
  --background-modifier-border-hover: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --background-modifier-form-field: hsl(from #181621 h s calc(l - 3)) !important;
  --background-modifier-form-field-hover: hsl(from #181621 h s calc(l - 3)) !important;
  --background-primary: #2c233d !important;
  --background-primary-alt: hsl(from #2c233d h s calc(l - 10)) !important;
  --background-secondary: #181621 !important;
  --background-secondary-alt: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --bases-cards-background: #2c233d !important;
  --bases-cards-cover-background: hsl(from #2c233d h s calc(l - 10)) !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --bases-embed-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --bases-group-heading-property-color: #fdc4d3 !important;
  --bases-table-border-color: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 40%,
		transparent
	) !important;
  --bases-table-cell-background-active: #2c233d !important;
  --bases-table-cell-background-disabled: hsl(from #2c233d h s calc(l - 10)) !important;
  --bases-table-cell-background-selected: hsla(333, 77%, 78%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #f29cc2 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(333, 77%, 78%) !important;
  --bases-table-group-background: hsl(from #2c233d h s calc(l - 10)) !important;
  --bases-table-header-background: #2c233d !important;
  --bases-table-header-color: #fdc4d3 !important;
  --bases-table-summary-background: #2c233d !important;
  --blockquote-border-color: hsl(333, 77%, 78%) !important;
  --blur-background: color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent) linear-gradient(hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	), color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent)) !important;
  --bodyFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #f29cc2 !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --button-radius: 4px !important;
  --callout-title-weight: 700;
  --canvas-background: #2c233d !important;
  --canvas-card-label-color: #c6b0cf !important;
  --canvas-dot-pattern: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --caret-color: hsl(344, 93%, 88%) !important;
  --checkbox-border-color: #ce36be !important;
  --checkbox-border-color-hover: #70bb74 !important;
  --checkbox-color: #70bb74 !important;
  --checkbox-color-hover: #ce36be !important;
  --checkbox-marker-color: #2c233d !important;
  --checklist-done-color: #70bb74 !important;
  --code-background: hsl(from #2c233d h s calc(l - 10)) !important;
  --code-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --code-comment: #c6b0cf !important;
  --code-normal: #f9e8ec !important;
  --code-punctuation: #fdc4d3 !important;
  --codeFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #c6b0cf !important;
  --collapse-icon-color-collapsed: hsl(330, 78.54%, 89.7%) !important;
  --color-accent: hsl(333, 77%, 78%) !important;
  --color-accent-1: hsl(330, 78.54%, 89.7%) !important;
  --color-accent-2: hsl(328, 80.85%, 100.62%) !important;
  --color-accent-hsl: 333, 77%, 78% !important;
  --color-base-00: #2c233d !important;
  --color-base-05: hsl(from #2c233d h s calc(l - 5)) !important;
  --color-base-10: hsl(from #2c233d h s calc(l - 10)) !important;
  --color-base-100: #f9e8ec !important;
  --color-base-20: #181621 !important;
  --color-base-25: hsl(from #181621 h s calc(l - 3)) !important;
  --color-base-30: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --color-base-35: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --color-base-40: #f29cc2 !important;
  --color-base-50: #c6b0cf !important;
  --color-base-60: color-mix(
		in srgb,
		#c6b0cf 50%,
		#fdc4d3 50%
	) !important;
  --color-base-70: #fdc4d3 !important;
  --cutepink: #ff69b4 !important;
  --cutepink2: #d63384 !important;
  --dark: #f9e8ec !important;
  --darkgray: #f9e8ec !important;
  --divider-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --divider-color-hover: hsl(333, 77%, 78%) !important;
  --dropdown-background: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --dropdown-background-hover: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	), inset 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --embed-border-start: 2px solid hsl(333, 77%, 78%) !important;
  --file-header-background: #2c233d !important;
  --file-header-background-focused: #2c233d !important;
  --file-header-font: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --flair-color: #f9e8ec !important;
  --font-interface: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Work Sans, sans-serif !important;
  --font-mermaid: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Josefin Sans, sans-serif, Arial' !important;
  --font-text: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Josefin Sans, sans-serif !important;
  --footnote-divider-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --footnote-id-color: #fdc4d3 !important;
  --footnote-id-color-no-occurrences: #c6b0cf !important;
  --graph-line: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --graph-node: #fdc4d3 !important;
  --graph-node-focused: hsl(330, 78.54%, 89.7%) !important;
  --graph-node-unresolved: #c6b0cf !important;
  --graph-text: #f9e8ec !important;
  --gray: #fdc4d3 !important;
  --headerFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #c6b0cf !important;
  --highlight: hsl(
		from #ce36be calc(h + 20) calc(s - 10) l / 0.85
	) !important;
  --hr-color: #f4df7e !important;
  --icon-color: #fdc4d3 !important;
  --icon-color-active: hsl(330, 78.54%, 89.7%) !important;
  --icon-color-focused: #f9e8ec !important;
  --icon-color-hover: #fdc4d3 !important;
  --input-date-separator: #c6b0cf !important;
  --input-placeholder-color: #c6b0cf !important;
  --input-radius: 4px !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
		0 4px 6px color-mix(in srgb, hsl(333, 77%, 78%) 50%, transparent) !important;
  --interactive-accent: hsl(333, 77%, 78%) !important;
  --interactive-accent-hover: hsl(330, 78.54%, 89.7%) !important;
  --interactive-accent-hsl: 333, 77%, 78% !important;
  --interactive-hover: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --interactive-normal: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --italic-color: #fdc4d3 !important;
  --light: #2c233d !important;
  --lightgray: #181621 !important;
  --link-color: hsl(330, 78.54%, 89.7%) !important;
  --link-color-hover: hsl(328, 80.85%, 100.62%) !important;
  --link-external-color: hsl(330, 78.54%, 89.7%) !important;
  --link-external-color-hover: hsl(328, 80.85%, 100.62%) !important;
  --link-unresolved-color: hsl(330, 78.54%, 89.7%) !important;
  --link-unresolved-decoration-color: hsla(333, 77%, 78%, 0.3) !important;
  --list-marker-color: #f4df7e !important;
  --list-marker-color-collapsed: hsl(330, 78.54%, 89.7%) !important;
  --list-marker-color-hover: #fdc4d3 !important;
  --list-spacing: 2px !important;
  --menu-background: #181621 !important;
  --menu-border-color: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --menu-radius: 6px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 0px 60px color-mix(in srgb, hsl(333, 77%, 78%) 50%, transparent) !important;
  --metadata-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --metadata-divider-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --metadata-input-font: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #f9e8ec !important;
  --metadata-label-font: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #fdc4d3 !important;
  --metadata-label-text-color-hover: #fdc4d3 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #f29cc2 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --modal-background: #2c233d !important;
  --modal-border-color: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 20%,
		transparent
	) !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: #c6b0cf !important;
  --nav-collapse-icon-color-collapsed: #c6b0cf !important;
  --nav-heading-color: #f9e8ec !important;
  --nav-heading-color-collapsed: #c6b0cf !important;
  --nav-heading-color-collapsed-hover: #fdc4d3 !important;
  --nav-heading-color-hover: #f9e8ec !important;
  --nav-item-background-selected: hsla(333, 77%, 78%, 0.15) !important;
  --nav-item-color: #fdc4d3 !important;
  --nav-item-color-active: #f9e8ec !important;
  --nav-item-color-highlighted: hsl(330, 78.54%, 89.7%) !important;
  --nav-item-color-hover: #f9e8ec !important;
  --nav-item-color-selected: #f9e8ec !important;
  --nav-tag-color: #c6b0cf !important;
  --nav-tag-color-active: #fdc4d3 !important;
  --nav-tag-color-hover: #fdc4d3 !important;
  --pdf-background: #2c233d !important;
  --pdf-page-background: #2c233d !important;
  --pdf-shadow: 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --pdf-sidebar-background: #2c233d !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --pill-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --pill-border-color-hover: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --pill-color: #fdc4d3 !important;
  --pill-color-hover: #f9e8ec !important;
  --pill-color-remove: #c6b0cf !important;
  --pill-color-remove-hover: hsl(330, 78.54%, 89.7%) !important;
  --prompt-background: #2c233d !important;
  --prompt-border-color: #f29cc2 !important;
  --radius-l: 8px !important;
  --radius-m: 6px !important;
  --raised-background: color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent) linear-gradient(hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	), color-mix(in srgb, hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) 65%, transparent)) !important;
  --ribbon-background: #181621 !important;
  --ribbon-background-collapsed: #2c233d !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: #fdc4d3 !important;
  --search-icon-color: #fdc4d3 !important;
  --search-result-background: #2c233d !important;
  --secondary: hsl(330, 78.54%, 89.7%) !important;
  --setting-group-heading-color: #f9e8ec !important;
  --setting-items-background: hsl(from #2c233d h s calc(l - 10)) !important;
  --setting-items-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --setting-items-radius: 8px !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
		0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
		0px 30px 90px color-mix(in srgb, hsl(333, 77%, 78%) 50%, transparent) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 0px 60px color-mix(in srgb, hsl(333, 77%, 78%) 50%, transparent) !important;
  --slider-thumb-border-color: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --slider-thumb-radius: 4px !important;
  --slider-track-background: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --status-bar-background: #181621 !important;
  --status-bar-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --status-bar-radius: 6px 0 0 0 !important;
  --status-bar-text-color: #fdc4d3 !important;
  --suggestion-background: #2c233d !important;
  --tab-background-active: #2c233d !important;
  --tab-container-background: #181621 !important;
  --tab-divider-color: color-mix(
		in srgb,
		#2c233d 30%,
		#181621 70%
	) !important;
  --tab-outline-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #181621 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #181621, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(333, 77%, 78%) !important;
  --tab-text-color: #c6b0cf !important;
  --tab-text-color-active: #fdc4d3 !important;
  --tab-text-color-focused: #fdc4d3 !important;
  --tab-text-color-focused-active: #fdc4d3 !important;
  --tab-text-color-focused-active-current: #f9e8ec !important;
  --tab-text-color-focused-highlighted: hsl(330, 78.54%, 89.7%) !important;
  --table-add-button-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --table-border-color: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 40%,
		transparent
	) !important;
  --table-drag-handle-background-active: hsl(333, 77%, 78%) !important;
  --table-drag-handle-color: #c6b0cf !important;
  --table-drag-handle-color-active: #2c233d !important;
  --table-header-background: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 20%,
		transparent
	) !important;
  --table-header-background-hover: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 60%,
		transparent
	) !important;
  --table-header-border-color: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 40%,
		transparent
	) !important;
  --table-header-color: #f9e8ec !important;
  --table-header-weight: 700 !important;
  --table-selection: hsla(333, 77%, 78%, 0.1) !important;
  --table-selection-border-color: hsl(333, 77%, 78%) !important;
  --tag-background: hsla(333, 77%, 78%, 0.1) !important;
  --tag-background-hover: hsla(333, 77%, 78%, 0.2) !important;
  --tag-border-color: hsla(333, 77%, 78%, 0.15) !important;
  --tag-border-color-hover: hsla(333, 77%, 78%, 0.15) !important;
  --tag-color: hsl(330, 78.54%, 89.7%) !important;
  --tag-color-hover: hsl(330, 78.54%, 89.7%) !important;
  --tertiary: hsl(328, 80.85%, 100.62%) !important;
  --text-accent: hsl(330, 78.54%, 89.7%) !important;
  --text-accent-hover: hsl(328, 80.85%, 100.62%) !important;
  --text-faint: #c6b0cf !important;
  --text-highlight-bg: hsl(
		from #ce36be calc(h + 20) calc(s - 10) l / 0.85
	) !important;
  --text-muted: #fdc4d3 !important;
  --text-normal: #f9e8ec !important;
  --text-on-accent: #2c233d !important;
  --text-selection: hsla(333, 77%, 78%, 0.33) !important;
  --textHighlight: hsl(
		from #ce36be calc(h + 20) calc(s - 10) l / 0.85
	) !important;
  --titleFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #181621 !important;
  --titlebar-background-focused: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --titlebar-border-color: hsl(
		from #181621 h calc(s + 3) calc(l + 4)
	) !important;
  --titlebar-text-color: #fdc4d3 !important;
  --titlebar-text-color-focused: #f9e8ec !important;
  --toggle-radius: 6px !important;
  --toggle-thumb-radius: 4px !important;
  --vault-profile-color: #f9e8ec !important;
  --vault-profile-color-hover: #f9e8ec !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 22, 33);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(44, 35, 61);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  color: rgb(249, 232, 236);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(24, 22, 33);
  border-color: rgb(249, 232, 236);
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
  background-color: rgba(242, 156, 195, 0.1);
  color: rgb(249, 208, 229);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 22, 33);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 22, 33);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(44, 35, 61);
  color: rgb(249, 232, 236);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(242, 156, 194);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(242, 156, 194) none 0px;
  text-decoration-color: rgb(242, 156, 194);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration-color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(253, 196, 211);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration-color: rgb(253, 196, 211);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(242, 156, 194);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(242, 156, 194) none 0px;
  text-decoration-color: rgb(242, 156, 194);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.758824 0.260784 0.540385 / 0.85);
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 232, 236) none 0px;
  text-decoration-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body del {
  color: color(srgb 0.992157 0.768627 0.827451 / 0.6);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.992157 0.768627 0.827451 / 0.6) none 0px;
  text-decoration: line-through rgb(214, 51, 132);
  text-decoration-color: rgb(214, 51, 132);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(206, 54, 190);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(112, 187, 116);
  border-color: rgb(112, 187, 116);
}

html[saved-theme="dark"] body p {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(253, 196, 211) none 0px;
  text-decoration-color: rgb(253, 196, 211);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(249, 208, 229);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration-color: rgb(249, 208, 229);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(249, 208, 229);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration-color: rgb(249, 208, 229);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(249, 208, 229);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 208, 229) none 0px;
  text-decoration: underline rgba(242, 156, 195, 0.3);
  text-decoration-color: rgba(242, 156, 195, 0.3);
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

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
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
  color: rgb(198, 176, 207);
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
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body th {
  border-bottom-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-left-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-right-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  border-top-color: color(srgb 0.9494 0.6106 0.76306 / 0.4);
  color: rgb(249, 232, 236);
  font-weight: 700;
}

html[saved-theme="dark"] body tr {
  background-color: color(srgb 0.9494 0.6106 0.76306 / 0.2);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
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
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  color: rgb(249, 232, 236);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
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

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(242, 156, 195, 0.1);
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(249, 208, 229);
}

html[saved-theme="dark"] body h1 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(249, 232, 236);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(44, 35, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 35, 61);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(253, 196, 211);
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
  color: rgb(253, 196, 211);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 22, 33);
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-left-radius: 6px;
  color: rgb(253, 196, 211);
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
  color: rgb(253, 196, 211);
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
  color: rgb(253, 196, 211);
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
  color: rgb(253, 196, 211);
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
  color: rgb(198, 176, 207);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: color(srgb 0.126204 0.113839 0.181847);
  border-left-color: color(srgb 0.126204 0.113839 0.181847);
  border-right-color: color(srgb 0.126204 0.113839 0.181847);
  border-top-color: color(srgb 0.126204 0.113839 0.181847);
  color: rgb(253, 196, 211);
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

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 22, 33);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(249, 232, 236);
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
  color: rgb(253, 196, 211);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: color(srgb 0.0808824 0.0643382 0.112132);
  border-bottom-color: rgb(249, 232, 236);
  border-left-color: rgb(249, 232, 236);
  border-right-color: rgb(249, 232, 236);
  border-top-color: rgb(249, 232, 236);
  color: rgb(249, 232, 236);
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
  background-color: rgba(242, 156, 195, 0.1);
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  color: rgb(249, 208, 229);
}`,
  },
  light: {
    base: `:root:root {
  --C-Arna_Pink: #ec6f97 !important;
  --C-Arna_Red: #d62d64 !important;
  --C-Deimev_Gray: #7c787e !important;
  --C-Deimev_Violet: #70488c !important;
  --C-Deimev_Void_Purple: #382f3c !important;
  --C-Korazu_Light_Yellow: #f5eeda !important;
  --C-Korazu_Orange: #fcba9f !important;
  --C-Korazu_White: #fbf8ee !important;
  --C-Korazu_Yellow: #ebd6a5 !important;
  --C-MythSeavalanche_Blue: #e6f3f8 !important;
  --C-MythSeavalanche_Dark_Green: #9ebb98 !important;
  --C-MythSeavalanche_Dark_Yellow: #d8b86d !important;
  --C-MythSeavalanche_Green: #c1cc83 !important;
  --C-MythSeavalanche_Light_Green: #e0e98b !important;
  --C-MythSeavalanche_Light_Yellow: #fbefa1 !important;
  --C-MythSeavalanche_Peach: #f4cebd !important;
  --C-MythSeavalanche_Yellow: #f4df7e !important;
  --C-Sarchie_Cyan: #9be2c9 !important;
  --C-Sarchie_Light_Cyan: #cef1e5 !important;
  --C-Sarchie_Sky_Blue: #87d1f3 !important;
  --C-Sarchie_Teal: #4e7f91 !important;
  --C-Sarchie_Yellow: #f9e9ad !important;
  --C-SeaWeb_Dark_Purple: #181621 !important;
  --C-SeaWeb_Purple: #2c233d !important;
  --C-Seava_Blue: #4c77ae !important;
  --C-Seava_Dark_Blue: #3e4f7b !important;
  --C-Seava_Light_Blue: #9bd0e2 !important;
  --C-Seava_Lighter_Dark_Blue: #536e9d !important;
  --C-Seava_Yellow: #fcf3d9 !important;
  --C-Seavalanche_Light_Blue: #bbe2f0 !important;
  --C-Uzakon_Light_Purple: #c6b0cf !important;
  --C-Uzakon_Lighter_Light_Purple: #d8d3e5 !important;
  --C-Uzakon_Purple: #958abf !important;
  --C-Uzakon_White: #eeecf4 !important;
  --C-Vesnea_Light_Pink: #fdc4d3 !important;
  --C-Vesnea_Pink: #f29cc2 !important;
  --C-Vesnea_Purple: #4c2c57 !important;
  --C-Vesnea_white: #fefcfc !important;
  --C-Zumiko_Light_Red: #f2cbd4 !important;
  --C-Zumiko_Pink: #f8bed5 !important;
  --C-Zumiko_Red: #e28094 !important;
  --C-Zumiko_White: #f9e8ec !important;
  --accent-h: 333 !important;
  --accent-l: 78% !important;
  --accent-s: 77% !important;
  --attribute-aether: #f4df7e !important;
  --attribute-darkness: #382f3c !important;
  --attribute-electric: #ffe941 !important;
  --attribute-fire: #e1294d !important;
  --attribute-light: #ffffff !important;
  --attribute-magical: #fdc4d3 !important;
  --attribute-metal: #5a6775 !important;
  --attribute-nature: #70bb74 !important;
  --attribute-psionic: #ce36be !important;
  --attribute-sound: #ec6f97 !important;
  --attribute-spirit: #70488c !important;
  --attribute-text-seawebdarkpurple: #181621 !important;
  --attribute-text-vesneawhite: #fefcfc !important;
  --attribute-void: #1c1b1d !important;
  --attribute-water: #3e4f7b !important;
  --attribute-wind: #9be2c9 !important;
  --background-modifier-active-hover: hsla(333, 77%, 78%, 0.1) !important;
  --background-modifier-border: #c6b0cf !important;
  --background-modifier-border-focus: hsl(281, 24%, 60%) !important;
  --background-modifier-border-hover: hsl(281, 24%, 70%) !important;
  --background-modifier-form-field: hsl(0, 50%, 99%) !important;
  --background-modifier-form-field-hover: hsl(0, 50%, 99%) !important;
  --background-primary: hsl(0, 60%, 99%) !important;
  --background-primary-alt: hsl(281, 24%, 95%) !important;
  --background-secondary: hsl(252, 38%, 95%) !important;
  --background-secondary-alt: hsl(280, 23%, 97%) !important;
  --bases-cards-background: hsl(0, 60%, 99%) !important;
  --bases-cards-cover-background: hsl(281, 24%, 95%) !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px #c6b0cf !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(281, 24%, 70%) !important;
  --bases-embed-border-color: #c6b0cf !important;
  --bases-group-heading-property-color: hsl(251, 29%, 55%) !important;
  --bases-table-border-color: #c6b0cf !important;
  --bases-table-cell-background-active: hsl(0, 60%, 99%) !important;
  --bases-table-cell-background-disabled: hsl(281, 24%, 95%) !important;
  --bases-table-cell-background-selected: hsla(333, 77%, 78%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(281, 24%, 60%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(332, 77.77%, 83.85%) !important;
  --bases-table-group-background: hsl(281, 24%, 95%) !important;
  --bases-table-header-background: hsl(0, 60%, 99%) !important;
  --bases-table-header-color: hsl(251, 29%, 55%) !important;
  --bases-table-summary-background: hsl(0, 60%, 99%) !important;
  --blockquote-border-color: hsl(332, 77.77%, 83.85%) !important;
  --blur-background: color-mix(in srgb, hsl(0, 60%, 99%) 65%, transparent) linear-gradient(hsl(0, 60%, 99%), color-mix(in srgb, hsl(0, 60%, 99%) 65%, transparent)) !important;
  --bodyFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #d62d64 !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --button-radius: 4px !important;
  --callout-title-weight: 700;
  --canvas-background: hsl(0, 60%, 99%) !important;
  --canvas-card-label-color: hsl(275, 24%, 55%) !important;
  --canvas-dot-pattern: #c6b0cf !important;
  --caret-color: #87d1f3 !important;
  --checkbox-border-color: #ce36be !important;
  --checkbox-border-color-hover: #70bb74 !important;
  --checkbox-color: #70bb74 !important;
  --checkbox-color-hover: #ce36be !important;
  --checkbox-marker-color: hsl(0, 60%, 99%) !important;
  --checklist-done-color: #70bb74 !important;
  --code-background: hsl(281, 24%, 95%) !important;
  --code-border-color: #c6b0cf !important;
  --code-comment: hsl(275, 24%, 55%) !important;
  --code-normal: hsl(248, 31%, 20%) !important;
  --code-punctuation: hsl(251, 29%, 55%) !important;
  --codeFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsl(275, 24%, 55%) !important;
  --collapse-icon-color-collapsed: hsl(333, 77%, 78%) !important;
  --color-accent: hsl(333, 77%, 78%) !important;
  --color-accent-1: hsl(332, 77.77%, 83.85%) !important;
  --color-accent-2: hsl(330, 78.54%, 89.7%) !important;
  --color-accent-hsl: 333, 77%, 78% !important;
  --color-base-00: hsl(0, 50%, 99%) !important;
  --color-base-05: hsl(280, 23%, 97%) !important;
  --color-base-10: hsl(281, 24%, 95%) !important;
  --color-base-100: hsl(248, 31%, 20%) !important;
  --color-base-20: hsl(281, 24%, 85%) !important;
  --color-base-25: hsl(281, 24%, 80%) !important;
  --color-base-30: #c6b0cf !important;
  --color-base-35: hsl(281, 24%, 70%) !important;
  --color-base-40: hsl(281, 24%, 60%) !important;
  --color-base-50: hsl(275, 24%, 55%) !important;
  --color-base-60: hsl(265, 27%, 55%) !important;
  --color-base-70: hsl(251, 29%, 55%) !important;
  --cutepink: #ff69b4 !important;
  --cutepink2: #d63384 !important;
  --dark: hsl(248, 31%, 20%) !important;
  --darkgray: hsl(248, 31%, 20%) !important;
  --divider-color: #c6b0cf !important;
  --divider-color-hover: hsl(332, 77.77%, 83.85%) !important;
  --dropdown-background: hsl(0, 50%, 99%) !important;
  --dropdown-background-hover: hsl(281, 24%, 95%) !important;
  --embed-block-shadow-hover: 0 0 0 1px #c6b0cf, inset 0 0 0 1px #c6b0cf !important;
  --embed-border-start: 2px solid hsl(332, 77.77%, 83.85%) !important;
  --file-header-background: hsl(0, 60%, 99%) !important;
  --file-header-background-focused: hsl(0, 60%, 99%) !important;
  --file-header-font: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(0, 50%, 99%) !important;
  --flair-color: hsl(248, 31%, 20%) !important;
  --font-interface: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Work Sans, sans-serif !important;
  --font-mermaid: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Josefin Sans, sans-serif, Arial' !important;
  --font-text: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Josefin Sans, sans-serif !important;
  --footnote-divider-color: #c6b0cf !important;
  --footnote-id-color: hsl(251, 29%, 55%) !important;
  --footnote-id-color-no-occurrences: hsl(275, 24%, 55%) !important;
  --graph-line: hsl(281, 24%, 70%) !important;
  --graph-node: hsl(251, 29%, 55%) !important;
  --graph-node-focused: hsl(333, 77%, 78%) !important;
  --graph-node-unresolved: hsl(275, 24%, 55%) !important;
  --graph-text: hsl(248, 31%, 20%) !important;
  --gray: hsl(251, 29%, 55%) !important;
  --headerFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(275, 24%, 55%) !important;
  --highlight: #fdc4d3 !important;
  --hr-color: #c6b0cf !important;
  --icon-color: hsl(251, 29%, 55%) !important;
  --icon-color-active: hsl(333, 77%, 78%) !important;
  --icon-color-focused: hsl(248, 31%, 20%) !important;
  --icon-color-hover: hsl(251, 29%, 55%) !important;
  --input-date-separator: hsl(275, 24%, 55%) !important;
  --input-placeholder-color: hsl(275, 24%, 55%) !important;
  --input-radius: 4px !important;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
		0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 0 0 0 transparent,
		0 4px 6px
			color-mix(in srgb, #c6b0cf 50%, transparent) !important;
  --interactive-accent: hsl(332, 77.77%, 83.85%) !important;
  --interactive-accent-hover: hsl(330, 78.54%, 89.7%) !important;
  --interactive-accent-hsl: 333, 77%, 78% !important;
  --interactive-hover: hsl(281, 24%, 95%) !important;
  --interactive-normal: hsl(0, 50%, 99%) !important;
  --italic-color: hsl(from #87d1f3 h s calc(l - 20)) !important;
  --light: hsl(0, 60%, 99%) !important;
  --lightgray: hsl(252, 38%, 95%) !important;
  --link-color: hsl(333, 77%, 78%) !important;
  --link-color-hover: hsl(330, 78.54%, 89.7%) !important;
  --link-external-color: hsl(333, 77%, 78%) !important;
  --link-external-color-hover: hsl(330, 78.54%, 89.7%) !important;
  --link-unresolved-color: hsl(333, 77%, 78%) !important;
  --link-unresolved-decoration-color: hsla(333, 77%, 78%, 0.3) !important;
  --list-marker-color: hsl(275, 24%, 55%) !important;
  --list-marker-color-collapsed: hsl(333, 77%, 78%) !important;
  --list-marker-color-hover: hsl(251, 29%, 55%) !important;
  --list-spacing: 2px !important;
  --menu-background: hsl(252, 38%, 95%) !important;
  --menu-border-color: hsl(281, 24%, 70%) !important;
  --menu-radius: 6px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 30px 90px
			color-mix(in srgb, #c6b0cf 50%, transparent) !important;
  --metadata-border-color: #c6b0cf !important;
  --metadata-divider-color: #c6b0cf !important;
  --metadata-input-font: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(248, 31%, 20%) !important;
  --metadata-label-font: Work Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(251, 29%, 55%) !important;
  --metadata-label-text-color-hover: hsl(251, 29%, 55%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(281, 24%, 60%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(281, 24%, 70%) !important;
  --modal-background: hsl(0, 60%, 99%) !important;
  --modal-border-color: transparent !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: hsl(275, 24%, 55%) !important;
  --nav-collapse-icon-color-collapsed: hsl(275, 24%, 55%) !important;
  --nav-heading-color: hsl(248, 31%, 20%) !important;
  --nav-heading-color-collapsed: hsl(275, 24%, 55%) !important;
  --nav-heading-color-collapsed-hover: hsl(251, 29%, 55%) !important;
  --nav-heading-color-hover: hsl(248, 31%, 20%) !important;
  --nav-item-background-selected: hsla(333, 77%, 78%, 0.15) !important;
  --nav-item-color: hsl(251, 29%, 55%) !important;
  --nav-item-color-active: hsl(248, 31%, 20%) !important;
  --nav-item-color-highlighted: hsl(333, 77%, 78%) !important;
  --nav-item-color-hover: hsl(248, 31%, 20%) !important;
  --nav-item-color-selected: hsl(248, 31%, 20%) !important;
  --nav-tag-color: hsl(275, 24%, 55%) !important;
  --nav-tag-color-active: hsl(251, 29%, 55%) !important;
  --nav-tag-color-hover: hsl(251, 29%, 55%) !important;
  --pdf-background: hsl(0, 60%, 99%) !important;
  --pdf-page-background: hsl(0, 60%, 99%) !important;
  --pdf-sidebar-background: hsl(0, 60%, 99%) !important;
  --pill-border-color: #c6b0cf !important;
  --pill-border-color-hover: hsl(281, 24%, 70%) !important;
  --pill-color: hsl(251, 29%, 55%) !important;
  --pill-color-hover: hsl(248, 31%, 20%) !important;
  --pill-color-remove: hsl(275, 24%, 55%) !important;
  --pill-color-remove-hover: hsl(333, 77%, 78%) !important;
  --prompt-background: hsl(0, 60%, 99%) !important;
  --prompt-border-color: hsl(281, 24%, 60%) !important;
  --radius-l: 8px !important;
  --radius-m: 6px !important;
  --raised-background: color-mix(in srgb, hsl(0, 60%, 99%) 65%, transparent) linear-gradient(hsl(0, 60%, 99%), color-mix(in srgb, hsl(0, 60%, 99%) 65%, transparent)) !important;
  --ribbon-background: hsl(252, 38%, 95%) !important;
  --ribbon-background-collapsed: hsl(0, 60%, 99%) !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: hsl(251, 29%, 55%) !important;
  --search-icon-color: hsl(251, 29%, 55%) !important;
  --search-result-background: hsl(0, 60%, 99%) !important;
  --secondary: hsl(333, 77%, 78%) !important;
  --setting-group-heading-color: hsl(248, 31%, 20%) !important;
  --setting-items-background: hsl(281, 24%, 95%) !important;
  --setting-items-border-color: #c6b0cf !important;
  --setting-items-radius: 8px !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
		0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
		0px 30px 90px
			color-mix(in srgb, #c6b0cf 50%, transparent) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 30px 90px
			color-mix(in srgb, #c6b0cf 50%, transparent) !important;
  --slider-thumb-border-color: hsl(281, 24%, 70%) !important;
  --slider-thumb-radius: 4px !important;
  --slider-track-background: #c6b0cf !important;
  --status-bar-background: hsl(252, 38%, 95%) !important;
  --status-bar-border-color: #c6b0cf !important;
  --status-bar-radius: 6px 0 0 0 !important;
  --status-bar-text-color: hsl(251, 29%, 55%) !important;
  --suggestion-background: hsl(0, 60%, 99%) !important;
  --tab-background-active: hsl(0, 60%, 99%) !important;
  --tab-container-background: hsl(252, 38%, 95%) !important;
  --tab-divider-color: hsl(281, 24%, 70%) !important;
  --tab-outline-color: #c6b0cf !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: hsl(252, 38%, 95%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(252, 38%, 95%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(333, 77%, 78%) !important;
  --tab-text-color: hsl(275, 24%, 55%) !important;
  --tab-text-color-active: hsl(251, 29%, 55%) !important;
  --tab-text-color-focused: hsl(251, 29%, 55%) !important;
  --tab-text-color-focused-active: hsl(251, 29%, 55%) !important;
  --tab-text-color-focused-active-current: hsl(248, 31%, 20%) !important;
  --tab-text-color-focused-highlighted: hsl(333, 77%, 78%) !important;
  --table-add-button-border-color: #c6b0cf !important;
  --table-border-color: #c6b0cf !important;
  --table-drag-handle-background-active: hsl(332, 77.77%, 83.85%) !important;
  --table-drag-handle-color: hsl(275, 24%, 55%) !important;
  --table-drag-handle-color-active: #2c233d !important;
  --table-header-background: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 20%,
		transparent
	) !important;
  --table-header-background-hover: color-mix(
		in srgb,
		hsl(333, 77%, 78%) 60%,
		transparent
	) !important;
  --table-header-border-color: #c6b0cf !important;
  --table-header-color: hsl(248, 31%, 20%) !important;
  --table-header-weight: 700 !important;
  --table-selection: hsla(333, 77%, 78%, 0.1) !important;
  --table-selection-border-color: hsl(332, 77.77%, 83.85%) !important;
  --tag-background: hsla(333, 77%, 78%, 0.1) !important;
  --tag-background-hover: hsla(333, 77%, 78%, 0.2) !important;
  --tag-border-color: hsla(333, 77%, 78%, 0.15) !important;
  --tag-border-color-hover: hsla(333, 77%, 78%, 0.15) !important;
  --tag-color: hsl(333, 77%, 78%) !important;
  --tag-color-hover: hsl(333, 77%, 78%) !important;
  --tertiary: hsl(330, 78.54%, 89.7%) !important;
  --text-accent: hsl(333, 77%, 78%) !important;
  --text-accent-hover: hsl(330, 78.54%, 89.7%) !important;
  --text-faint: hsl(275, 24%, 55%) !important;
  --text-highlight-bg: #fdc4d3 !important;
  --text-muted: hsl(251, 29%, 55%) !important;
  --text-normal: hsl(248, 31%, 20%) !important;
  --text-on-accent: #2c233d !important;
  --text-selection: hsla(333, 77%, 78%, 0.2) !important;
  --textHighlight: #fdc4d3 !important;
  --titleFont: Josefin Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(252, 38%, 95%) !important;
  --titlebar-background-focused: hsl(280, 23%, 97%) !important;
  --titlebar-border-color: #c6b0cf !important;
  --titlebar-text-color: hsl(251, 29%, 55%) !important;
  --titlebar-text-color-focused: hsl(248, 31%, 20%) !important;
  --toggle-radius: 6px !important;
  --toggle-thumb-radius: 4px !important;
  --vault-profile-color: hsl(248, 31%, 20%) !important;
  --vault-profile-color-hover: hsl(248, 31%, 20%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 237, 247);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(254, 251, 251);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
  font-weight: 700;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(254, 251, 251);
  border-color: rgb(39, 35, 67);
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
  background-color: rgba(242, 156, 195, 0.1);
  color: rgb(242, 156, 195);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(119, 107, 174);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 237, 247);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(198, 176, 207);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 237, 247);
  border-left-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(254, 251, 251);
  color: rgb(39, 35, 67);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(214, 45, 100);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(214, 45, 100) none 0px;
  text-decoration-color: rgb(214, 45, 100);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: color(srgb 0.165775 0.680214 0.916578);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.165775 0.680214 0.916578) none 0px;
  text-decoration-color: color(srgb 0.165775 0.680214 0.916578);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: color(srgb 0.165775 0.680214 0.916578);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.165775 0.680214 0.916578) none 0px;
  text-decoration-color: color(srgb 0.165775 0.680214 0.916578);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(214, 45, 100);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(214, 45, 100) none 0px;
  text-decoration-color: rgb(214, 45, 100);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(253, 196, 211);
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(39, 35, 67) none 0px;
  text-decoration-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body del {
  color: color(srgb 0.46735 0.4195 0.6805 / 0.6);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.46735 0.4195 0.6805 / 0.6) none 0px;
  text-decoration: line-through rgb(214, 51, 132);
  text-decoration-color: rgb(214, 51, 132);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(206, 54, 190);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(112, 187, 116);
  border-color: rgb(112, 187, 116);
}

html[saved-theme="light"] body p {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(119, 107, 174) none 0px;
  text-decoration-color: rgb(119, 107, 174);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(242, 156, 195);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration-color: rgb(242, 156, 195);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(242, 156, 195);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration-color: rgb(242, 156, 195);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(242, 156, 195);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(242, 156, 195) none 0px;
  text-decoration: underline rgba(242, 156, 195, 0.3);
  text-decoration-color: rgba(242, 156, 195, 0.3);
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

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
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
  color: rgb(145, 113, 168);
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
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
  font-weight: 700;
}

html[saved-theme="light"] body tr {
  background-color: color(srgb 0.9494 0.6106 0.76306 / 0.2);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(243, 239, 245);
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
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
  color: rgb(39, 35, 67);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(242, 156, 195, 0.1);
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(242, 156, 195);
}

html[saved-theme="light"] body h1 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(39, 35, 67);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(44, 35, 61);
  font-family: "??", "Josefin Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(254, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 251, 251);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(119, 107, 174);
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
  color: rgb(119, 107, 174);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(239, 237, 247);
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  border-top-left-radius: 6px;
  color: rgb(119, 107, 174);
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
  color: rgb(119, 107, 174);
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
  color: rgb(119, 107, 174);
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
  color: rgb(119, 107, 174);
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
  color: rgb(145, 113, 168);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(198, 176, 207);
  border-left-color: rgb(198, 176, 207);
  border-right-color: rgb(198, 176, 207);
  border-top-color: rgb(198, 176, 207);
  color: rgb(119, 107, 174);
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

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(239, 237, 247);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(39, 35, 67);
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
  color: rgb(119, 107, 174);
  font-family: "??", "Work Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(243, 239, 245);
  border-bottom-color: rgb(39, 35, 67);
  border-left-color: rgb(39, 35, 67);
  border-right-color: rgb(39, 35, 67);
  border-top-color: rgb(39, 35, 67);
  color: rgb(39, 35, 67);
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
  background-color: rgba(242, 156, 195, 0.1);
  border-bottom-color: rgba(242, 156, 195, 0.15);
  border-left-color: rgba(242, 156, 195, 0.15);
  border-right-color: rgba(242, 156, 195, 0.15);
  border-top-color: rgba(242, 156, 195, 0.15);
  color: rgb(242, 156, 195);
}`,
  },
};
