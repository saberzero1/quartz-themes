import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "osaka-jade",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --autumnGreen: #143614;
  --autumnRed: #db9f9c;
  --autumnYellow: #E5C736;
  --background-modifier-border: var(--katanaGray, #81B8A8);
  --background-primary: var(--osakaInk0, #111c18);
  --background-primary-alt: var(--osakaInk1, #23372B);
  --background-secondary: var(--osakaInk2, #32473B);
  --background-secondary-alt: var(--osakaInk3, #364538);
  --bases-cards-background: var(--background-primary, #111c18);
  --bases-cards-cover-background: var(--background-primary-alt, #23372B);
  --bases-embed-border-color: var(--background-modifier-border, #81B8A8);
  --bases-table-border-color: var(--table-border-color, #81B8A8);
  --bases-table-cell-background-active: var(--background-primary, #111c18);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #23372B);
  --bases-table-group-background: var(--background-primary-alt, #23372B);
  --bases-table-header-background: var(--background-primary, #111c18);
  --bases-table-summary-background: var(--background-primary, #111c18);
  --blockquote-border-color: var(--interactive-accent, #81B8A8);
  --boatYellow1: #DEB266;
  --boatYellow2: #E5C736;
  --bodyFont: var(--font-text-theme, system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji);
  --bold-color: var(--oldWhite, #C1C497);
  --bright-aqua: #8ec07c;
  --bright-blue: #83a598;
  --bright-green: #b8bb26;
  --bright-orange: #fe8019;
  --bright-purple: #d3869b;
  --bright-red: #fb4934;
  --bright-yellow: #fabd2f;
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-info: var(--callout-info, 2, 122, 255);
  --callout-question: var(--callout-question, 233, 151, 63);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 68, 207, 110);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 2, 122, 255);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, #111c18);
  --canvas-card-label-color: var(--text-faint, #D6D5BC);
  --caret-color: var(--text-normal, #F7E8B2);
  --carpYellow: #D7C995;
  --checkbox-border-color: var(--text-faint, #D6D5BC);
  --checkbox-color: var(--interactive-accent, #81B8A8);
  --checkbox-marker-color: var(--background-primary, #111c18);
  --code-background: var(--background-primary-alt, #23372B);
  --code-block: var(--fujiGray, #D6D5BC);
  --code-border-color: var(--background-modifier-border, #81B8A8);
  --code-comment: var(--text-faint, #D6D5BC);
  --code-normal: var(--text-normal, #F7E8B2);
  --collapse-icon-color: var(--text-faint, #D6D5BC);
  --collapse-icon-color-collapsed: var(--text-accent, #549e6a);
  --cool-off-white: #F0F5F5;
  --crystalBlue: #75bbb3;
  --dark: var(--text-normal, var(--fujiWhite, #F7E8B2));
  --dark0: #282828;
  --dark0-hard: #1d2021;
  --dark0-soft: #32302f;
  --dark1: #3c3836;
  --dark2: #504945;
  --dark3: #665c54;
  --dark4: #7c6f64;
  --darkgray: var(--text-normal, var(--fujiWhite, #F7E8B2));
  --divider-color: var(--background-modifier-border, #81B8A8);
  --divider-color-hover: var(--interactive-accent, #81B8A8);
  --dragonBlue: #75bbb3;
  --faded-aqua: #427b58;
  --faded-blue: #076678;
  --faded-green: #79740e;
  --faded-orange: #af3a03;
  --faded-purple: #8f3f71;
  --faded-red: #9d0006;
  --faded-yellow: #b57614;
  --file-header-background: var(--background-primary, #111c18);
  --file-header-background-focused: var(--background-primary, #111c18);
  --flair-color: var(--text-normal, #F7E8B2);
  --font-mermaid: var(--font-text, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  --footnote-divider-color: var(--metadata-divider-color, #81B8A8);
  --footnote-id-color-no-occurrences: var(--text-faint, #D6D5BC);
  --fujiGray: #D6D5BC;
  --fujiWhite: #F7E8B2;
  --graph-node-focused: var(--text-accent, #549e6a);
  --graph-node-unresolved: var(--text-faint, #D6D5BC);
  --graph-text: var(--text-normal, #F7E8B2);
  --gray: #928374;
  --headerFont: var(--font-text-theme, system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji);
  --heading-formatting: var(--text-faint, #D6D5BC);
  --highlight: var(--text-highlight-bg, var(--osakaInk3, #364538));
  --hr-color: var(--background-modifier-border, #81B8A8);
  --icon-color-active: var(--text-accent, #549e6a);
  --icon-color-focused: var(--text-normal, #F7E8B2);
  --inline-code: var(--springGreen, #549e6a);
  --input-date-separator: var(--text-faint, #D6D5BC);
  --input-placeholder-color: var(--text-faint, #D6D5BC);
  --interactive-accent: var(--katanaGray, #81B8A8);
  --interactive-accent-rgb: var(--springGreen, #549e6a);
  --interactive-before: var(--osakaInk4, #53685B);
  --katanaGray: #81B8A8;
  --light: var(--background-primary, var(--osakaInk0, #111c18));
  --light0: #fbf1c7;
  --light0-hard: #f9f5d7;
  --light0-soft: #f2e5bc;
  --light1: #ebdbb2;
  --light2: #d5c4a1;
  --light3: #bdae93;
  --light4: #a89984;
  --lightBlue: #ACD4CF;
  --lightgray: var(--background-secondary, var(--osakaInk2, #32473B));
  --link-color: var(--text-accent, #549e6a);
  --link-external-color: var(--text-accent, #549e6a);
  --link-unresolved-color: var(--text-accent, #549e6a);
  --list-marker-color: var(--text-faint, #D6D5BC);
  --list-marker-color-collapsed: var(--text-accent, #549e6a);
  --lotusAqua: #7AB5A6;
  --lotusAqua2: #85BFB1;
  --lotusBlue1: #D7EFEB;
  --lotusBlue2: #BEEBE6;
  --lotusBlue3: #A5E7E1;
  --lotusBlue4: #407A6F;
  --lotusBlue5: #3E6B62;
  --lotusCyan: #E8F3EA;
  --lotusGray: #E8E6D4;
  --lotusGray2: #C7C5B3;
  --lotusGray3: #B5B3A1;
  --lotusGreen: #76B88C;
  --lotusGreen2: #6AAB82;
  --lotusGreen3: #C4E4B0;
  --lotusInk1: #2F4A37;
  --lotusInk2: #1A2E20;
  --lotusOrange: #F5A588;
  --lotusOrange2: #F2B195;
  --lotusPink: #E2A4C6;
  --lotusRed: #FF7668;
  --lotusRed2: #FF8A7C;
  --lotusRed3: #FF5345;
  --lotusRed4: #E6BEBC;
  --lotusTeal1: #6EACBE;
  --lotusTeal2: #8BC2D4;
  --lotusTeal3: #7AA5B7;
  --lotusViolet1: #E2A4C6;
  --lotusViolet2: #D68BB4;
  --lotusViolet3: #F2E4E8;
  --lotusViolet4: #B85080;
  --lotusWhite0: #F9F7E5;
  --lotusWhite1: #F6F4E2;
  --lotusWhite2: #F3F1DF;
  --lotusWhite3: #F0EEDC;
  --lotusWhite4: #EDEBD9;
  --lotusWhite5: #EAE8D6;
  --lotusYellow: #74824D;
  --lotusYellow2: #8B9159;
  --lotusYellow3: #F0DC5A;
  --lotusYellow4: #EBD8B9;
  --menu-background: var(--background-secondary, #32473B);
  --metadata-border-color: var(--background-modifier-border, #81B8A8);
  --metadata-divider-color: var(--background-modifier-border, #81B8A8);
  --metadata-input-text-color: var(--text-normal, #F7E8B2);
  --modal-background: var(--background-primary, #111c18);
  --nav-collapse-icon-color: var(--collapse-icon-color, #D6D5BC);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #D6D5BC);
  --nav-heading-color: var(--text-normal, #F7E8B2);
  --nav-heading-color-collapsed: var(--text-faint, #D6D5BC);
  --nav-heading-color-hover: var(--text-normal, #F7E8B2);
  --nav-item-color-active: var(--text-normal, #F7E8B2);
  --nav-item-color-highlighted: var(--text-accent, #549e6a);
  --nav-item-color-hover: var(--text-normal, #F7E8B2);
  --nav-item-color-selected: var(--text-normal, #F7E8B2);
  --nav-tag-color: var(--text-faint, #D6D5BC);
  --neutral-aqua: #689d6a;
  --neutral-blue: #458588;
  --neutral-green: #98971a;
  --neutral-orange: #d65d0e;
  --neutral-purple: #b16286;
  --neutral-red: #cc241d;
  --neutral-yellow: #d79921;
  --oldWhite: #C1C497;
  --oniViolet: #D2689C;
  --osakaBlue1: #509475;
  --osakaBlue2: #ACD4CF;
  --osakaInk0: #111c18;
  --osakaInk1: #23372B;
  --osakaInk2: #32473B;
  --osakaInk3: #364538;
  --osakaInk4: #53685B;
  --paper-like: #F2EFE9;
  --pdf-background: var(--background-primary, #111c18);
  --pdf-page-background: var(--background-primary, #111c18);
  --pdf-sidebar-background: var(--background-primary, #111c18);
  --peachRed: #db9f9c;
  --pill-border-color: var(--background-modifier-border, #81B8A8);
  --pill-color-hover: var(--text-normal, #F7E8B2);
  --pill-color-remove: var(--text-faint, #D6D5BC);
  --pill-color-remove-hover: var(--text-accent, #549e6a);
  --pre-code: var(--osakaInk1, #23372B);
  --prompt-background: var(--background-primary, #111c18);
  --ribbon-background: var(--background-secondary, #32473B);
  --ribbon-background-collapsed: var(--background-primary, #111c18);
  --roninYellow: #E5C736;
  --sakuraPink: #D2689C;
  --samuraiRed: #FF5345;
  --search-result-background: var(--background-primary, #111c18);
  --secondary: var(--text-accent, var(--springGreen, #549e6a));
  --setting-group-heading-color: var(--text-normal, #F7E8B2);
  --setting-items-background: var(--background-primary-alt, #23372B);
  --setting-items-border-color: var(--background-modifier-border, #81B8A8);
  --shiki-code-background: var(--code-background, #23372B);
  --shiki-code-comment: var(--text-faint, #D6D5BC);
  --shiki-gutter-border-color: var(--background-modifier-border, #81B8A8);
  --shiki-gutter-text-color: var(--text-faint, #D6D5BC);
  --shiki-terminal-dots-color: var(--text-faint, #D6D5BC);
  --slider-track-background: var(--background-modifier-border, #81B8A8);
  --soft-white: #F8F8F8;
  --springBlue: #2DD5B7;
  --springGreen: #549e6a;
  --springViolet1: #D2689C;
  --springViolet2: #8CD3CB;
  --status-bar-background: var(--background-secondary, #32473B);
  --status-bar-border-color: var(--divider-color, #81B8A8);
  --suggestion-background: var(--background-primary, #111c18);
  --surimiOrange: #E67D64;
  --tab-background-active: var(--background-primary, #111c18);
  --tab-container-background: var(--background-secondary, #32473B);
  --tab-outline-color: var(--divider-color, #81B8A8);
  --tab-switcher-background: var(--background-secondary, #32473B);
  --tab-text-color: var(--text-faint, #D6D5BC);
  --tab-text-color-focused-active-current: var(--text-normal, #F7E8B2);
  --tab-text-color-focused-highlighted: var(--text-accent, #549e6a);
  --table-add-button-border-color: var(--background-modifier-border, #81B8A8);
  --table-border-color: var(--background-modifier-border, #81B8A8);
  --table-drag-handle-background-active: var(--table-selection-border-color, #81B8A8);
  --table-drag-handle-color: var(--text-faint, #D6D5BC);
  --table-header: var(--osakaInk2, #32473B);
  --table-header-border-color: var(--table-border-color, #81B8A8);
  --table-header-color: var(--text-normal, #F7E8B2);
  --table-hover: var(--osakaInk3, #364538);
  --table-row-even: var(--osakaInk1, #23372B);
  --table-row-odd: var(--osakaInk0, #111c18);
  --table-selection-border-color: var(--interactive-accent, #81B8A8);
  --tag-color: var(--text-accent, #549e6a);
  --tag-color-hover: var(--text-accent, #549e6a);
  --task-checkbox: var(--osakaInk4, #53685B);
  --tertiary: var(--text-accent, var(--springGreen, #549e6a));
  --text-a: var(--dragonBlue, #75bbb3);
  --text-a-hover: var(--peachRed, #db9f9c);
  --text-a-url: var(--katanaGray, #81B8A8);
  --text-accent: var(--springGreen, #549e6a);
  --text-faint: var(--fujiGray, #D6D5BC);
  --text-highlight-bg: var(--osakaInk3, #364538);
  --text-link: var(--springBlue, #2DD5B7);
  --text-mark: rgba(80, 148, 117, 0.4);
  --text-normal: var(--fujiWhite, #F7E8B2);
  --text-tag: var(--sakuraPink, #D2689C);
  --text-title-h1: var(--waveRed, #FF5345);
  --text-title-h2: var(--surimiOrange, #E67D64);
  --text-title-h3: var(--boatYellow2, #E5C736);
  --text-title-h4: var(--springGreen, #549e6a);
  --text-title-h5: var(--waveAqua1, #2DD5B7);
  --text-title-h6: var(--osakaBlue1, #509475);
  --textHighlight: var(--text-highlight-bg, var(--osakaInk3, #364538));
  --titleFont: var(--font-text-theme, system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji);
  --titlebar-background: var(--background-secondary, #32473B);
  --titlebar-background-focused: var(--background-secondary-alt, #364538);
  --titlebar-border-color: var(--background-modifier-border, #81B8A8);
  --titlebar-text-color-focused: var(--text-normal, #F7E8B2);
  --vault-profile-color: var(--text-normal, #F7E8B2);
  --vault-profile-color-hover: var(--vault-profile-color, #F7E8B2);
  --vim-cursor-backgroung: var(--carpYellow, #D7C995);
  --vim-cursor-color: var(--osakaInk0, #111c18);
  --warm-off-white: #F5F5F0;
  --waveAqua1: #2DD5B7;
  --waveAqua2: #8CD3CB;
  --waveRed: #FF5345;
  --winterBlue: #509475;
  --winterGreen: #549e6a;
  --winterRed: #FF5345;
  --winterYellow: #459451;
  --quartz-icon-color: currentColor;
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #32473B);
  background-color: var(--tab-container-background, rgb(50, 71, 59));
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(17, 28, 24));
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(50, 71, 59));
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(129, 184, 168);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #32473B);
  background-color: var(--tab-container-background, rgb(50, 71, 59));
  border-left-color: rgb(129, 184, 168);
  border-left-width: 0px;
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body html {
  --autumnGreen: #143614;
  --autumnRed: #db9f9c;
  --autumnYellow: #E5C736;
  --boatYellow1: #DEB266;
  --boatYellow2: #E5C736;
  --bright-aqua: #8ec07c;
  --bright-blue: #83a598;
  --bright-green: #b8bb26;
  --bright-orange: #fe8019;
  --bright-purple: #d3869b;
  --bright-red: #fb4934;
  --bright-yellow: #fabd2f;
  --carpYellow: #D7C995;
  --cool-off-white: #F0F5F5;
  --crystalBlue: #75bbb3;
  --dark0: #282828;
  --dark0-hard: #1d2021;
  --dark0-soft: #32302f;
  --dark1: #3c3836;
  --dark2: #504945;
  --dark3: #665c54;
  --dark4: #7c6f64;
  --dragonBlue: #75bbb3;
  --faded-aqua: #427b58;
  --faded-blue: #076678;
  --faded-green: #79740e;
  --faded-orange: #af3a03;
  --faded-purple: #8f3f71;
  --faded-red: #9d0006;
  --faded-yellow: #b57614;
  --fujiGray: #D6D5BC;
  --fujiWhite: #F7E8B2;
  --gray: #928374;
  --katanaGray: #81B8A8;
  --light0: #fbf1c7;
  --light0-hard: #f9f5d7;
  --light0-soft: #f2e5bc;
  --light1: #ebdbb2;
  --light2: #d5c4a1;
  --light3: #bdae93;
  --light4: #a89984;
  --lightBlue: #ACD4CF;
  --lotusAqua: #7AB5A6;
  --lotusAqua2: #85BFB1;
  --lotusBlue1: #D7EFEB;
  --lotusBlue2: #BEEBE6;
  --lotusBlue3: #A5E7E1;
  --lotusBlue4: #407A6F;
  --lotusBlue5: #3E6B62;
  --lotusCyan: #E8F3EA;
  --lotusGray: #E8E6D4;
  --lotusGray2: #C7C5B3;
  --lotusGray3: #B5B3A1;
  --lotusGreen: #76B88C;
  --lotusGreen2: #6AAB82;
  --lotusGreen3: #C4E4B0;
  --lotusInk1: #2F4A37;
  --lotusInk2: #1A2E20;
  --lotusOrange: #F5A588;
  --lotusOrange2: #F2B195;
  --lotusPink: #E2A4C6;
  --lotusRed: #FF7668;
  --lotusRed2: #FF8A7C;
  --lotusRed3: #FF5345;
  --lotusRed4: #E6BEBC;
  --lotusTeal1: #6EACBE;
  --lotusTeal2: #8BC2D4;
  --lotusTeal3: #7AA5B7;
  --lotusViolet1: #E2A4C6;
  --lotusViolet2: #D68BB4;
  --lotusViolet3: #F2E4E8;
  --lotusViolet4: #B85080;
  --lotusWhite0: #F9F7E5;
  --lotusWhite1: #F6F4E2;
  --lotusWhite2: #F3F1DF;
  --lotusWhite3: #F0EEDC;
  --lotusWhite4: #EDEBD9;
  --lotusWhite5: #EAE8D6;
  --lotusYellow: #74824D;
  --lotusYellow2: #8B9159;
  --lotusYellow3: #F0DC5A;
  --lotusYellow4: #EBD8B9;
  --neutral-aqua: #689d6a;
  --neutral-blue: #458588;
  --neutral-green: #98971a;
  --neutral-orange: #d65d0e;
  --neutral-purple: #b16286;
  --neutral-red: #cc241d;
  --neutral-yellow: #d79921;
  --oldWhite: #C1C497;
  --oniViolet: #D2689C;
  --osakaBlue1: #509475;
  --osakaBlue2: #ACD4CF;
  --osakaInk0: #111c18;
  --osakaInk1: #23372B;
  --osakaInk2: #32473B;
  --osakaInk3: #364538;
  --osakaInk4: #53685B;
  --paper-like: #F2EFE9;
  --peachRed: #db9f9c;
  --roninYellow: #E5C736;
  --sakuraPink: #D2689C;
  --samuraiRed: #FF5345;
  --soft-white: #F8F8F8;
  --springBlue: #2DD5B7;
  --springGreen: #549e6a;
  --springViolet1: #D2689C;
  --springViolet2: #8CD3CB;
  --surimiOrange: #E67D64;
  --warm-off-white: #F5F5F0;
  --waveAqua1: #2DD5B7;
  --waveAqua2: #8CD3CB;
  --waveRed: #FF5345;
  --winterBlue: #509475;
  --winterGreen: #549e6a;
  --winterRed: #FF5345;
  --winterYellow: #459451;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(193, 196, 151));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(193, 196, 151) none 0px;
  text-decoration-color: rgb(193, 196, 151);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(247, 232, 178));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(247, 232, 178) none 0px;
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(247, 232, 178));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(247, 232, 178) none 0px;
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgb(193, 196, 151));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(193, 196, 151) none 0px;
  text-decoration-color: rgb(193, 196, 151);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(193, 196, 151));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(193, 196, 151) none 0px;
  text-decoration-color: rgb(193, 196, 151);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(54, 69, 56));
  color: var(--text-normal, rgb(247, 232, 178));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(247, 232, 178) none 0px;
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body del {
  color: rgb(247, 232, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(247, 232, 178) none 0px;
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(214, 213, 188);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(83, 104, 91));
  border-color: rgb(129, 184, 168);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--text-a, rgb(117, 187, 179));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(117, 187, 179) none 0px;
  text-decoration-color: rgb(117, 187, 179);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--text-a, rgb(117, 187, 179));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(117, 187, 179) none 0px;
  text-decoration-color: rgb(117, 187, 179);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--text-a, rgb(117, 187, 179));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(117, 187, 179) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(117, 187, 179));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
  color: rgb(247, 232, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
  color: rgb(247, 232, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(247, 232, 178);
  margin-bottom: 0px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(247, 232, 178);
  margin-bottom: 0px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-a, rgb(117, 187, 179));
}

html[saved-theme="dark"] body blockquote {
  color: var(--blockquote-color, rgb(247, 232, 178));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(50, 71, 59);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 71, 59);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(50, 71, 59);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(50, 71, 59);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(247, 232, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: var(--table-row-even, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(50, 71, 59);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(129, 184, 168);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(247, 232, 178));
}

html[saved-theme="dark"] body th {
  background-color: var(--table-header, rgb(50, 71, 59));
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(247, 232, 178));
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(129, 184, 168);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 71, 59);
  border-left-width: 0px;
  border-right-color: rgb(50, 71, 59);
  border-right-width: 0px;
  border-top-color: rgb(50, 71, 59);
  border-top-width: 0px;
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-row-odd, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(129, 184, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(50, 71, 59);
  border-left-width: 0px;
  border-right-color: rgb(50, 71, 59);
  border-right-width: 0px;
  border-top-color: rgb(50, 71, 59);
  border-top-width: 0px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--pre-code, rgb(35, 55, 43));
  border-bottom-color: rgb(129, 184, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(129, 184, 168);
  border-left-width: 0px;
  border-right-color: rgb(129, 184, 168);
  border-right-width: 0px;
  border-top-color: rgb(129, 184, 168);
  border-top-width: 0px;
  color: var(--inline-code, rgb(84, 158, 106));
  font-family: var(--font-monospace, "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(35, 55, 43));
  border-bottom-color: rgb(129, 184, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(129, 184, 168);
  border-left-width: 0px;
  border-right-color: rgb(129, 184, 168);
  border-right-width: 0px;
  border-top-color: rgb(129, 184, 168);
  border-top-width: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #23372B);
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 83, 69);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 83, 69);
  border-left-width: 0px;
  border-right-color: rgb(255, 83, 69);
  border-right-width: 0px;
  border-top-color: rgb(255, 83, 69);
  border-top-width: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(35, 55, 43));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(129, 184, 168);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
  color: rgb(247, 232, 178);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
  color: rgb(247, 232, 178);
  margin-bottom: 0px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(83, 104, 91);
  border-bottom-width: 0px;
  border-left-color: rgb(83, 104, 91);
  border-left-width: 0px;
  border-right-color: rgb(83, 104, 91);
  border-right-width: 0px;
  border-top-color: rgb(83, 104, 91);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(17, 28, 24);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(17, 28, 24);
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
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(247, 232, 178);
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
  border-bottom-color: rgb(129, 184, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(129, 184, 168);
  border-left-width: 0px;
  border-right-color: rgb(129, 184, 168);
  border-right-width: 0px;
  border-top-color: rgb(129, 184, 168);
  border-top-width: 0px;
  color: var(--text-normal, rgb(247, 232, 178));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(17, 28, 24));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(247, 232, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(247, 232, 178) none 0px;
  text-decoration-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(50, 71, 59));
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(50, 71, 59);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-secondary, rgb(50, 71, 59));
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(50, 71, 59));
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, #549e6a);
  --pill-color-hover: var(--tag-color-hover, #549e6a);
  --pill-color-remove: var(--tag-color, #549e6a);
  --pill-color-remove-hover: var(--tag-color-hover, #549e6a);
  color: var(--pill-color, rgb(84, 158, 106));
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(84, 158, 106);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(255, 83, 69);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 83, 69);
  border-left-width: 0px;
  border-right-color: rgb(255, 83, 69);
  border-right-width: 0px;
  border-top-color: rgb(255, 83, 69);
  border-top-width: 0px;
  color: var(--text-title-h1, rgb(255, 83, 69));
  font-family: var(--h1-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 35.2px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h1-letter-spacing, -0.528px);
  line-height: var(--h1-line-height, 42.24px);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(247, 232, 178));
}

html[saved-theme="dark"] body h2 {
  border-bottom-color: rgb(230, 125, 100);
  border-bottom-width: 0px;
  border-left-color: rgb(230, 125, 100);
  border-left-width: 0px;
  border-right-color: rgb(230, 125, 100);
  border-right-width: 0px;
  border-top-color: rgb(230, 125, 100);
  border-top-width: 0px;
  color: var(--text-title-h2, rgb(230, 125, 100));
  font-family: var(--h2-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 32px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h2-letter-spacing, -0.352px);
  line-height: var(--h2-line-height, 38.4px);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(247, 232, 178));
  font-family: var(--inline-title-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h3 {
  border-bottom-color: rgb(229, 199, 54);
  border-bottom-width: 0px;
  border-left-color: rgb(229, 199, 54);
  border-left-width: 0px;
  border-right-color: rgb(229, 199, 54);
  border-right-width: 0px;
  border-top-color: rgb(229, 199, 54);
  border-top-width: 0px;
  color: var(--text-title-h3, rgb(229, 199, 54));
  font-family: var(--h3-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 28.8px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h3-letter-spacing, -0.2304px);
  line-height: var(--h3-line-height, 37.44px);
}

html[saved-theme="dark"] body h4 {
  border-bottom-color: rgb(84, 158, 106);
  border-bottom-width: 0px;
  border-left-color: rgb(84, 158, 106);
  border-left-width: 0px;
  border-right-color: rgb(84, 158, 106);
  border-right-width: 0px;
  border-top-color: rgb(84, 158, 106);
  border-top-width: 0px;
  color: var(--text-title-h4, rgb(84, 158, 106));
  font-family: var(--h4-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 25.6px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h4-letter-spacing, -0.128px);
  line-height: var(--h4-line-height, 35.84px);
}

html[saved-theme="dark"] body h5 {
  border-bottom-color: rgb(45, 213, 183);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 213, 183);
  border-left-width: 0px;
  border-right-color: rgb(45, 213, 183);
  border-right-width: 0px;
  border-top-color: rgb(45, 213, 183);
  border-top-width: 0px;
  color: var(--text-title-h5, rgb(45, 213, 183));
  font-family: var(--h5-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 22.4px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h5-letter-spacing, -0.0448px);
  line-height: var(--h5-line-height, 33.6px);
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(80, 148, 117);
  border-bottom-width: 0px;
  border-left-color: rgb(80, 148, 117);
  border-left-width: 0px;
  border-right-color: rgb(80, 148, 117);
  border-right-width: 0px;
  border-top-color: rgb(80, 148, 117);
  border-top-width: 0px;
  color: var(--text-title-h6, rgb(80, 148, 117));
  font-family: var(--h6-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 19.2px);
  font-weight: var(--font-weight, 500);
  line-height: var(--h6-line-height, 28.8px);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(129, 184, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(129, 184, 168);
  border-left-width: 0px;
  border-right-color: rgb(129, 184, 168);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(247, 232, 178);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(50, 71, 59));
  border-bottom-color: rgb(129, 184, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(129, 184, 168);
  border-left-width: 0px;
  border-right-color: rgb(129, 184, 168);
  border-right-width: 0px;
  border-top-color: rgb(129, 184, 168);
  border-top-width: 0px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
  color: rgb(247, 232, 178);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(214, 213, 188));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(247, 232, 178));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(50, 71, 59));
  border-color: rgb(247, 232, 178);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgb(50, 71, 59);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: var(--table-header, rgb(50, 71, 59));
  border-color: rgb(247, 232, 178);
  color: var(--table-header-color, rgb(247, 232, 178));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(129, 184, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(129, 184, 168);
  border-left-width: 0px;
  border-right-color: rgb(129, 184, 168);
  border-right-width: 0px;
  border-top-color: rgb(129, 184, 168);
  border-top-width: 0px;
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(129, 184, 168);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-color: var(--tag-color, #549e6a);
  --pill-color-hover: var(--tag-color-hover, #549e6a);
  --pill-color-remove: var(--tag-color, #549e6a);
  --pill-color-remove-hover: var(--tag-color-hover, #549e6a);
  color: var(--pill-color, rgb(84, 158, 106));
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(17, 28, 24));
  color: var(--text-normal, rgb(247, 232, 178));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(50, 71, 59));
  border-color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(54, 69, 56));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(247, 232, 178);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(50, 71, 59));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
  color: var(--text-normal, rgb(247, 232, 178));
}

html[saved-theme="dark"] body abbr {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(35, 55, 43));
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
  color: var(--code-normal, rgb(247, 232, 178));
  font-family: var(--font-monospace, "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body summary {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body sup {
  color: rgb(247, 232, 178);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--background-secondary-alt, rgb(54, 69, 56));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-tag, rgb(210, 104, 156));
}`,
  },
  light: {
    base: `:root:root {
  --autumnGreen: #143614;
  --autumnRed: #db9f9c;
  --autumnYellow: #E5C736;
  --background-modifier-border: var(--lotusBlue3, #A5E7E1);
  --background-primary: var(--paper-like, #F2EFE9);
  --background-primary-alt: var(--lotusWhite4, #EDEBD9);
  --background-secondary: var(--soft-white, #F8F8F8);
  --background-secondary-alt: var(--lotusWhite3, #F0EEDC);
  --bases-cards-background: var(--background-primary, #F2EFE9);
  --bases-cards-cover-background: var(--background-primary-alt, #EDEBD9);
  --bases-embed-border-color: var(--background-modifier-border, #A5E7E1);
  --bases-table-border-color: var(--table-border-color, #A5E7E1);
  --bases-table-cell-background-active: var(--background-primary, #F2EFE9);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #EDEBD9);
  --bases-table-group-background: var(--background-primary-alt, #EDEBD9);
  --bases-table-header-background: var(--background-primary, #F2EFE9);
  --bases-table-summary-background: var(--background-primary, #F2EFE9);
  --blockquote-border-color: var(--interactive-accent, #A5E7E1);
  --boatYellow1: #DEB266;
  --boatYellow2: #E5C736;
  --bodyFont: var(--font-text-theme, system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji);
  --bold-color: var(--lotusInk1, #2F4A37);
  --bright-aqua: #8ec07c;
  --bright-blue: #83a598;
  --bright-green: #b8bb26;
  --bright-orange: #fe8019;
  --bright-purple: #d3869b;
  --bright-red: #fb4934;
  --bright-yellow: #fabd2f;
  --callout-bug: var(--callout-bug, 233, 49, 71);
  --callout-default: var(--callout-default, 8, 109, 221);
  --callout-error: var(--callout-error, 233, 49, 71);
  --callout-example: var(--callout-example, 120, 82, 238);
  --callout-fail: var(--callout-fail, 233, 49, 71);
  --callout-info: var(--callout-info, 8, 109, 221);
  --callout-question: var(--callout-question, 236, 117, 0);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 8, 185, 78);
  --callout-summary: var(--callout-summary, 0, 191, 188);
  --callout-tip: var(--callout-tip, 0, 191, 188);
  --callout-todo: var(--callout-todo, 8, 109, 221);
  --callout-warning: var(--callout-warning, 236, 117, 0);
  --canvas-background: var(--background-primary, #F2EFE9);
  --canvas-card-label-color: var(--text-faint, #B5B3A1);
  --caret-color: var(--text-normal, #2F4A37);
  --carpYellow: #D7C995;
  --checkbox-border-color: var(--text-faint, #B5B3A1);
  --checkbox-color: var(--interactive-accent, #A5E7E1);
  --checkbox-marker-color: var(--background-primary, #F2EFE9);
  --code-background: var(--background-primary-alt, #EDEBD9);
  --code-block: var(--lotusGray3, #B5B3A1);
  --code-border-color: var(--background-modifier-border, #A5E7E1);
  --code-comment: var(--text-faint, #B5B3A1);
  --code-normal: var(--text-normal, #2F4A37);
  --collapse-icon-color: var(--text-faint, #B5B3A1);
  --collapse-icon-color-collapsed: var(--text-accent, #76B88C);
  --cool-off-white: #F0F5F5;
  --crystalBlue: #75bbb3;
  --dark: var(--text-normal, var(--lotusInk1, #2F4A37));
  --dark0: #282828;
  --dark0-hard: #1d2021;
  --dark0-soft: #32302f;
  --dark1: #3c3836;
  --dark2: #504945;
  --dark3: #665c54;
  --dark4: #7c6f64;
  --darkgray: var(--text-normal, var(--lotusInk1, #2F4A37));
  --divider-color: var(--background-modifier-border, #A5E7E1);
  --divider-color-hover: var(--interactive-accent, #A5E7E1);
  --dragonBlue: #75bbb3;
  --faded-aqua: #427b58;
  --faded-blue: #076678;
  --faded-green: #79740e;
  --faded-orange: #af3a03;
  --faded-purple: #8f3f71;
  --faded-red: #9d0006;
  --faded-yellow: #b57614;
  --file-header-background: var(--background-primary, #F2EFE9);
  --file-header-background-focused: var(--background-primary, #F2EFE9);
  --flair-color: var(--text-normal, #2F4A37);
  --font-mermaid: var(--font-text, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  --footnote-divider-color: var(--metadata-divider-color, #A5E7E1);
  --footnote-id-color-no-occurrences: var(--text-faint, #B5B3A1);
  --fujiGray: #D6D5BC;
  --fujiWhite: #F7E8B2;
  --graph-node-focused: var(--text-accent, #76B88C);
  --graph-node-unresolved: var(--text-faint, #B5B3A1);
  --graph-text: var(--text-normal, #2F4A37);
  --gray: #928374;
  --headerFont: var(--font-text-theme, system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji);
  --heading-formatting: var(--text-faint, #B5B3A1);
  --highlight: var(--text-highlight-bg, var(--lotusBlue2, #BEEBE6));
  --hr-color: var(--background-modifier-border, #A5E7E1);
  --icon-color-active: var(--text-accent, #76B88C);
  --icon-color-focused: var(--text-normal, #2F4A37);
  --inline-code: var(--lotusGreen, #76B88C);
  --input-date-separator: var(--text-faint, #B5B3A1);
  --input-placeholder-color: var(--text-faint, #B5B3A1);
  --interactive-accent: var(--lotusBlue3, #A5E7E1);
  --interactive-accent-rgb: var(--lotusGreen, #76B88C);
  --interactive-before: var(--lotusGray2, #C7C5B3);
  --katanaGray: #81B8A8;
  --light: var(--background-primary, var(--paper-like, #F2EFE9));
  --light0: #fbf1c7;
  --light0-hard: #f9f5d7;
  --light0-soft: #f2e5bc;
  --light1: #ebdbb2;
  --light2: #d5c4a1;
  --light3: #bdae93;
  --light4: #a89984;
  --lightBlue: #ACD4CF;
  --lightgray: var(--background-secondary, var(--soft-white, #F8F8F8));
  --link-color: var(--text-accent, #76B88C);
  --link-external-color: var(--text-accent, #76B88C);
  --link-unresolved-color: var(--text-accent, #76B88C);
  --list-marker-color: var(--text-faint, #B5B3A1);
  --list-marker-color-collapsed: var(--text-accent, #76B88C);
  --lotusAqua: #7AB5A6;
  --lotusAqua2: #85BFB1;
  --lotusBlue1: #D7EFEB;
  --lotusBlue2: #BEEBE6;
  --lotusBlue3: #A5E7E1;
  --lotusBlue4: #407A6F;
  --lotusBlue5: #3E6B62;
  --lotusCyan: #E8F3EA;
  --lotusGray: #E8E6D4;
  --lotusGray2: #C7C5B3;
  --lotusGray3: #B5B3A1;
  --lotusGreen: #76B88C;
  --lotusGreen2: #6AAB82;
  --lotusGreen3: #C4E4B0;
  --lotusInk1: #2F4A37;
  --lotusInk2: #1A2E20;
  --lotusOrange: #F5A588;
  --lotusOrange2: #F2B195;
  --lotusPink: #E2A4C6;
  --lotusRed: #FF7668;
  --lotusRed2: #FF8A7C;
  --lotusRed3: #FF5345;
  --lotusRed4: #E6BEBC;
  --lotusTeal1: #6EACBE;
  --lotusTeal2: #8BC2D4;
  --lotusTeal3: #7AA5B7;
  --lotusViolet1: #E2A4C6;
  --lotusViolet2: #D68BB4;
  --lotusViolet3: #F2E4E8;
  --lotusViolet4: #B85080;
  --lotusWhite0: #F9F7E5;
  --lotusWhite1: #F6F4E2;
  --lotusWhite2: #F3F1DF;
  --lotusWhite3: #F0EEDC;
  --lotusWhite4: #EDEBD9;
  --lotusWhite5: #EAE8D6;
  --lotusYellow: #74824D;
  --lotusYellow2: #8B9159;
  --lotusYellow3: #F0DC5A;
  --lotusYellow4: #EBD8B9;
  --menu-background: var(--background-secondary, #F8F8F8);
  --metadata-border-color: var(--background-modifier-border, #A5E7E1);
  --metadata-divider-color: var(--background-modifier-border, #A5E7E1);
  --metadata-input-text-color: var(--text-normal, #2F4A37);
  --modal-background: var(--background-primary, #F2EFE9);
  --nav-collapse-icon-color: var(--collapse-icon-color, #B5B3A1);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #B5B3A1);
  --nav-heading-color: var(--text-normal, #2F4A37);
  --nav-heading-color-collapsed: var(--text-faint, #B5B3A1);
  --nav-heading-color-hover: var(--text-normal, #2F4A37);
  --nav-item-color-active: var(--text-normal, #2F4A37);
  --nav-item-color-highlighted: var(--text-accent, #76B88C);
  --nav-item-color-hover: var(--text-normal, #2F4A37);
  --nav-item-color-selected: var(--text-normal, #2F4A37);
  --nav-tag-color: var(--text-faint, #B5B3A1);
  --neutral-aqua: #689d6a;
  --neutral-blue: #458588;
  --neutral-green: #98971a;
  --neutral-orange: #d65d0e;
  --neutral-purple: #b16286;
  --neutral-red: #cc241d;
  --neutral-yellow: #d79921;
  --oldWhite: #C1C497;
  --oniViolet: #D2689C;
  --osakaBlue1: #509475;
  --osakaBlue2: #ACD4CF;
  --osakaInk0: #111c18;
  --osakaInk1: #23372B;
  --osakaInk2: #32473B;
  --osakaInk3: #364538;
  --osakaInk4: #53685B;
  --paper-like: #F2EFE9;
  --pdf-background: var(--background-primary, #F2EFE9);
  --pdf-page-background: var(--background-primary, #F2EFE9);
  --pdf-sidebar-background: var(--background-primary, #F2EFE9);
  --peachRed: #db9f9c;
  --pill-border-color: var(--background-modifier-border, #A5E7E1);
  --pill-color-hover: var(--text-normal, #2F4A37);
  --pill-color-remove: var(--text-faint, #B5B3A1);
  --pill-color-remove-hover: var(--text-accent, #76B88C);
  --pre-code: var(--lotusGray, #E8E6D4);
  --prompt-background: var(--background-primary, #F2EFE9);
  --raised-background: var(--blur-background, color-mix(in srgb, #F2EFE9 65%, transparent) linear-gradient(#F2EFE9, color-mix(in srgb, #F2EFE9 65%, transparent)));
  --ribbon-background: var(--background-secondary, #F8F8F8);
  --ribbon-background-collapsed: var(--background-primary, #F2EFE9);
  --roninYellow: #E5C736;
  --sakuraPink: #D2689C;
  --samuraiRed: #FF5345;
  --search-result-background: var(--background-primary, #F2EFE9);
  --secondary: var(--text-accent, var(--lotusGreen, #76B88C));
  --setting-group-heading-color: var(--text-normal, #2F4A37);
  --setting-items-background: var(--background-primary-alt, #EDEBD9);
  --setting-items-border-color: var(--background-modifier-border, #A5E7E1);
  --shiki-code-background: var(--code-background, #EDEBD9);
  --shiki-code-comment: var(--text-faint, #B5B3A1);
  --shiki-gutter-border-color: var(--background-modifier-border, #A5E7E1);
  --shiki-gutter-text-color: var(--text-faint, #B5B3A1);
  --shiki-terminal-dots-color: var(--text-faint, #B5B3A1);
  --slider-track-background: var(--background-modifier-border, #A5E7E1);
  --soft-white: #F8F8F8;
  --springBlue: #2DD5B7;
  --springGreen: #549e6a;
  --springViolet1: #D2689C;
  --springViolet2: #8CD3CB;
  --status-bar-background: var(--background-secondary, #F8F8F8);
  --status-bar-border-color: var(--divider-color, #A5E7E1);
  --suggestion-background: var(--background-primary, #F2EFE9);
  --surimiOrange: #E67D64;
  --tab-background-active: var(--background-primary, #F2EFE9);
  --tab-container-background: var(--background-secondary, #F8F8F8);
  --tab-outline-color: var(--divider-color, #A5E7E1);
  --tab-switcher-background: var(--background-secondary, #F8F8F8);
  --tab-text-color: var(--text-faint, #B5B3A1);
  --tab-text-color-focused-active-current: var(--text-normal, #2F4A37);
  --tab-text-color-focused-highlighted: var(--text-accent, #76B88C);
  --table-add-button-border-color: var(--background-modifier-border, #A5E7E1);
  --table-border-color: var(--background-modifier-border, #A5E7E1);
  --table-drag-handle-background-active: var(--table-selection-border-color, #A5E7E1);
  --table-drag-handle-color: var(--text-faint, #B5B3A1);
  --table-header: hsl(42, 33%, 91%);
  --table-header-border-color: var(--table-border-color, #A5E7E1);
  --table-header-color: var(--text-normal, #2F4A37);
  --table-hover: var(--lotusWhite1, #F6F4E2);
  --table-row-even: hsl(42, 35%, 94%);
  --table-row-odd: hsl(42, 37%, 97%);
  --table-selection-border-color: var(--interactive-accent, #A5E7E1);
  --tag-color: var(--text-accent, #76B88C);
  --tag-color-hover: var(--text-accent, #76B88C);
  --task-checkbox: var(--lotusGray2, #C7C5B3);
  --tertiary: var(--text-accent, var(--lotusGreen, #76B88C));
  --text-a: var(--lotusTeal1, #6EACBE);
  --text-a-hover: var(--lotusRed, #FF7668);
  --text-a-url: var(--lotusTeal2, #8BC2D4);
  --text-accent: var(--lotusGreen, #76B88C);
  --text-faint: var(--lotusGray3, #B5B3A1);
  --text-highlight-bg: var(--lotusBlue2, #BEEBE6);
  --text-link: var(--lotusBlue5, #3E6B62);
  --text-mark: rgba(183, 208, 174, 0.4);
  --text-normal: var(--lotusInk1, #2F4A37);
  --text-tag: var(--lotusAqua, #7AB5A6);
  --text-title-h1: var(--lotusRed, #FF7668);
  --text-title-h2: var(--lotusOrange, #F5A588);
  --text-title-h3: var(--lotusYellow, #74824D);
  --text-title-h4: var(--lotusGreen, #76B88C);
  --text-title-h5: var(--lotusAqua, #7AB5A6);
  --text-title-h6: var(--lotusBlue4, #407A6F);
  --textHighlight: var(--text-highlight-bg, var(--lotusBlue2, #BEEBE6));
  --titleFont: var(--font-text-theme, system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji);
  --titlebar-background: var(--background-secondary, #F8F8F8);
  --titlebar-background-focused: var(--background-secondary-alt, #F0EEDC);
  --titlebar-border-color: var(--background-modifier-border, #A5E7E1);
  --titlebar-text-color-focused: var(--text-normal, #2F4A37);
  --vault-profile-color: var(--text-normal, #2F4A37);
  --vault-profile-color-hover: var(--vault-profile-color, #2F4A37);
  --vim-cursor-backgroung: var(--lotusGray, #E8E6D4);
  --vim-cursor-color: var(--lotusInk1, #2F4A37);
  --warm-off-white: #F5F5F0;
  --waveAqua1: #2DD5B7;
  --waveAqua2: #8CD3CB;
  --waveRed: #FF5345;
  --winterBlue: #509475;
  --winterGreen: #549e6a;
  --winterRed: #FF5345;
  --winterYellow: #459451;
  --quartz-icon-color: currentColor;
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #F8F8F8);
  background-color: var(--tab-container-background, rgb(248, 248, 248));
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(242, 239, 233));
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(248, 248, 248));
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(165, 231, 225);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #F8F8F8);
  background-color: var(--tab-container-background, rgb(248, 248, 248));
  border-left-color: rgb(165, 231, 225);
  border-left-width: 0px;
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body html {
  --autumnGreen: #143614;
  --autumnRed: #db9f9c;
  --autumnYellow: #E5C736;
  --boatYellow1: #DEB266;
  --boatYellow2: #E5C736;
  --bright-aqua: #8ec07c;
  --bright-blue: #83a598;
  --bright-green: #b8bb26;
  --bright-orange: #fe8019;
  --bright-purple: #d3869b;
  --bright-red: #fb4934;
  --bright-yellow: #fabd2f;
  --carpYellow: #D7C995;
  --cool-off-white: #F0F5F5;
  --crystalBlue: #75bbb3;
  --dark0: #282828;
  --dark0-hard: #1d2021;
  --dark0-soft: #32302f;
  --dark1: #3c3836;
  --dark2: #504945;
  --dark3: #665c54;
  --dark4: #7c6f64;
  --dragonBlue: #75bbb3;
  --faded-aqua: #427b58;
  --faded-blue: #076678;
  --faded-green: #79740e;
  --faded-orange: #af3a03;
  --faded-purple: #8f3f71;
  --faded-red: #9d0006;
  --faded-yellow: #b57614;
  --fujiGray: #D6D5BC;
  --fujiWhite: #F7E8B2;
  --gray: #928374;
  --katanaGray: #81B8A8;
  --light0: #fbf1c7;
  --light0-hard: #f9f5d7;
  --light0-soft: #f2e5bc;
  --light1: #ebdbb2;
  --light2: #d5c4a1;
  --light3: #bdae93;
  --light4: #a89984;
  --lightBlue: #ACD4CF;
  --lotusAqua: #7AB5A6;
  --lotusAqua2: #85BFB1;
  --lotusBlue1: #D7EFEB;
  --lotusBlue2: #BEEBE6;
  --lotusBlue3: #A5E7E1;
  --lotusBlue4: #407A6F;
  --lotusBlue5: #3E6B62;
  --lotusCyan: #E8F3EA;
  --lotusGray: #E8E6D4;
  --lotusGray2: #C7C5B3;
  --lotusGray3: #B5B3A1;
  --lotusGreen: #76B88C;
  --lotusGreen2: #6AAB82;
  --lotusGreen3: #C4E4B0;
  --lotusInk1: #2F4A37;
  --lotusInk2: #1A2E20;
  --lotusOrange: #F5A588;
  --lotusOrange2: #F2B195;
  --lotusPink: #E2A4C6;
  --lotusRed: #FF7668;
  --lotusRed2: #FF8A7C;
  --lotusRed3: #FF5345;
  --lotusRed4: #E6BEBC;
  --lotusTeal1: #6EACBE;
  --lotusTeal2: #8BC2D4;
  --lotusTeal3: #7AA5B7;
  --lotusViolet1: #E2A4C6;
  --lotusViolet2: #D68BB4;
  --lotusViolet3: #F2E4E8;
  --lotusViolet4: #B85080;
  --lotusWhite0: #F9F7E5;
  --lotusWhite1: #F6F4E2;
  --lotusWhite2: #F3F1DF;
  --lotusWhite3: #F0EEDC;
  --lotusWhite4: #EDEBD9;
  --lotusWhite5: #EAE8D6;
  --lotusYellow: #74824D;
  --lotusYellow2: #8B9159;
  --lotusYellow3: #F0DC5A;
  --lotusYellow4: #EBD8B9;
  --neutral-aqua: #689d6a;
  --neutral-blue: #458588;
  --neutral-green: #98971a;
  --neutral-orange: #d65d0e;
  --neutral-purple: #b16286;
  --neutral-red: #cc241d;
  --neutral-yellow: #d79921;
  --oldWhite: #C1C497;
  --oniViolet: #D2689C;
  --osakaBlue1: #509475;
  --osakaBlue2: #ACD4CF;
  --osakaInk0: #111c18;
  --osakaInk1: #23372B;
  --osakaInk2: #32473B;
  --osakaInk3: #364538;
  --osakaInk4: #53685B;
  --paper-like: #F2EFE9;
  --peachRed: #db9f9c;
  --roninYellow: #E5C736;
  --sakuraPink: #D2689C;
  --samuraiRed: #FF5345;
  --soft-white: #F8F8F8;
  --springBlue: #2DD5B7;
  --springGreen: #549e6a;
  --springViolet1: #D2689C;
  --springViolet2: #8CD3CB;
  --surimiOrange: #E67D64;
  --warm-off-white: #F5F5F0;
  --waveAqua1: #2DD5B7;
  --waveAqua2: #8CD3CB;
  --waveRed: #FF5345;
  --winterBlue: #509475;
  --winterGreen: #549e6a;
  --winterRed: #FF5345;
  --winterYellow: #459451;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(47, 74, 55));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(47, 74, 55));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(47, 74, 55));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, rgb(47, 74, 55));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(47, 74, 55));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(190, 235, 230));
  color: var(--text-normal, rgb(47, 74, 55));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body del {
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(181, 179, 161);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(199, 197, 179));
  border-color: rgb(165, 231, 225);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--text-a, rgb(110, 172, 190));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(110, 172, 190) none 0px;
  text-decoration-color: rgb(110, 172, 190);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--text-a, rgb(110, 172, 190));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(110, 172, 190) none 0px;
  text-decoration-color: rgb(110, 172, 190);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--text-a, rgb(110, 172, 190));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(110, 172, 190) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(110, 172, 190));
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body ol > li {
  color: rgb(47, 74, 55);
  margin-bottom: 0px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(47, 74, 55);
  margin-bottom: 0px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-a, rgb(110, 172, 190));
}

html[saved-theme="light"] body blockquote {
  color: var(--blockquote-color, rgb(47, 74, 55));
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(248, 248, 248);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(248, 248, 248);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(248, 248, 248);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(248, 248, 248);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: var(--table-row-even, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(248, 248, 248);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(165, 231, 225);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(47, 74, 55));
}

html[saved-theme="light"] body th {
  background-color: var(--table-header, rgb(240, 235, 224));
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(47, 74, 55));
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(165, 231, 225);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(248, 248, 248);
  border-left-width: 0px;
  border-right-color: rgb(248, 248, 248);
  border-right-width: 0px;
  border-top-color: rgb(248, 248, 248);
  border-top-width: 0px;
}

html[saved-theme="light"] body tr {
  background-color: var(--table-row-odd, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(165, 231, 225);
  border-bottom-width: 0px;
  border-left-color: rgb(248, 248, 248);
  border-left-width: 0px;
  border-right-color: rgb(248, 248, 248);
  border-right-width: 0px;
  border-top-color: rgb(248, 248, 248);
  border-top-width: 0px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--pre-code, rgb(232, 230, 212));
  border-bottom-color: rgb(165, 231, 225);
  border-bottom-width: 0px;
  border-left-color: rgb(165, 231, 225);
  border-left-width: 0px;
  border-right-color: rgb(165, 231, 225);
  border-right-width: 0px;
  border-top-color: rgb(165, 231, 225);
  border-top-width: 0px;
  color: var(--inline-code, rgb(118, 184, 140));
  font-family: var(--font-monospace, "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(237, 235, 217));
  border-bottom-color: rgb(165, 231, 225);
  border-bottom-width: 0px;
  border-left-color: rgb(165, 231, 225);
  border-left-width: 0px;
  border-right-color: rgb(165, 231, 225);
  border-right-width: 0px;
  border-top-color: rgb(165, 231, 225);
  border-top-width: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #EDEBD9);
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(255, 118, 104);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 118, 104);
  border-left-width: 0px;
  border-right-color: rgb(255, 118, 104);
  border-right-width: 0px;
  border-top-color: rgb(255, 118, 104);
  border-top-width: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(237, 235, 217));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(165, 231, 225);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
  color: rgb(47, 74, 55);
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
  color: rgb(47, 74, 55);
  margin-bottom: 0px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(199, 197, 179);
  border-bottom-width: 0px;
  border-left-color: rgb(199, 197, 179);
  border-left-width: 0px;
  border-right-color: rgb(199, 197, 179);
  border-right-width: 0px;
  border-top-color: rgb(199, 197, 179);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 239, 233);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 239, 233);
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
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(47, 74, 55);
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
  border-bottom-color: rgb(165, 231, 225);
  border-bottom-width: 0px;
  border-left-color: rgb(165, 231, 225);
  border-left-width: 0px;
  border-right-color: rgb(165, 231, 225);
  border-right-width: 0px;
  border-top-color: rgb(165, 231, 225);
  border-top-width: 0px;
  color: var(--text-normal, rgb(47, 74, 55));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(242, 239, 233));
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(248, 248, 248));
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 248, 248);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-secondary, rgb(248, 248, 248));
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-secondary, rgb(248, 248, 248));
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, #76B88C);
  --pill-color-hover: var(--tag-color-hover, #76B88C);
  --pill-color-remove: var(--tag-color, #76B88C);
  --pill-color-remove-hover: var(--tag-color-hover, #76B88C);
  color: var(--pill-color, rgb(118, 184, 140));
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(118, 184, 140);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(255, 118, 104);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 118, 104);
  border-left-width: 0px;
  border-right-color: rgb(255, 118, 104);
  border-right-width: 0px;
  border-top-color: rgb(255, 118, 104);
  border-top-width: 0px;
  color: var(--text-title-h1, rgb(255, 118, 104));
  font-family: var(--h1-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 35.2px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h1-letter-spacing, -0.528px);
  line-height: var(--h1-line-height, 42.24px);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(47, 74, 55));
}

html[saved-theme="light"] body h2 {
  border-bottom-color: rgb(245, 165, 136);
  border-bottom-width: 0px;
  border-left-color: rgb(245, 165, 136);
  border-left-width: 0px;
  border-right-color: rgb(245, 165, 136);
  border-right-width: 0px;
  border-top-color: rgb(245, 165, 136);
  border-top-width: 0px;
  color: var(--text-title-h2, rgb(245, 165, 136));
  font-family: var(--h2-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 32px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h2-letter-spacing, -0.352px);
  line-height: var(--h2-line-height, 38.4px);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(47, 74, 55));
  font-family: var(--inline-title-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h3 {
  border-bottom-color: rgb(116, 130, 77);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 130, 77);
  border-left-width: 0px;
  border-right-color: rgb(116, 130, 77);
  border-right-width: 0px;
  border-top-color: rgb(116, 130, 77);
  border-top-width: 0px;
  color: var(--text-title-h3, rgb(116, 130, 77));
  font-family: var(--h3-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 28.8px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h3-letter-spacing, -0.2304px);
  line-height: var(--h3-line-height, 37.44px);
}

html[saved-theme="light"] body h4 {
  border-bottom-color: rgb(118, 184, 140);
  border-bottom-width: 0px;
  border-left-color: rgb(118, 184, 140);
  border-left-width: 0px;
  border-right-color: rgb(118, 184, 140);
  border-right-width: 0px;
  border-top-color: rgb(118, 184, 140);
  border-top-width: 0px;
  color: var(--text-title-h4, rgb(118, 184, 140));
  font-family: var(--h4-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 25.6px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h4-letter-spacing, -0.128px);
  line-height: var(--h4-line-height, 35.84px);
}

html[saved-theme="light"] body h5 {
  border-bottom-color: rgb(122, 181, 166);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 181, 166);
  border-left-width: 0px;
  border-right-color: rgb(122, 181, 166);
  border-right-width: 0px;
  border-top-color: rgb(122, 181, 166);
  border-top-width: 0px;
  color: var(--text-title-h5, rgb(122, 181, 166));
  font-family: var(--h5-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 22.4px);
  font-weight: var(--font-weight, 500);
  letter-spacing: var(--h5-letter-spacing, -0.0448px);
  line-height: var(--h5-line-height, 33.6px);
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(64, 122, 111);
  border-bottom-width: 0px;
  border-left-color: rgb(64, 122, 111);
  border-left-width: 0px;
  border-right-color: rgb(64, 122, 111);
  border-right-width: 0px;
  border-top-color: rgb(64, 122, 111);
  border-top-width: 0px;
  color: var(--text-title-h6, rgb(64, 122, 111));
  font-family: var(--h6-font, "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 19.2px);
  font-weight: var(--font-weight, 500);
  line-height: var(--h6-line-height, 28.8px);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(165, 231, 225);
  border-bottom-width: 0px;
  border-left-color: rgb(165, 231, 225);
  border-left-width: 0px;
  border-right-color: rgb(165, 231, 225);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(47, 74, 55);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(248, 248, 248));
  border-bottom-color: rgb(165, 231, 225);
  border-bottom-width: 0px;
  border-left-color: rgb(165, 231, 225);
  border-left-width: 0px;
  border-right-color: rgb(165, 231, 225);
  border-right-width: 0px;
  border-top-color: rgb(165, 231, 225);
  border-top-width: 0px;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
  color: rgb(47, 74, 55);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(181, 179, 161));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(47, 74, 55));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(242, 239, 233));
  border-color: rgb(47, 74, 55);
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgb(248, 248, 248);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: var(--table-header, rgb(240, 235, 224));
  border-color: rgb(47, 74, 55);
  color: var(--table-header-color, rgb(47, 74, 55));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(165, 231, 225);
  border-bottom-width: 0px;
  border-left-color: rgb(165, 231, 225);
  border-left-width: 0px;
  border-right-color: rgb(165, 231, 225);
  border-right-width: 0px;
  border-top-color: rgb(165, 231, 225);
  border-top-width: 0px;
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(165, 231, 225);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-color: var(--tag-color, #76B88C);
  --pill-color-hover: var(--tag-color-hover, #76B88C);
  --pill-color-remove: var(--tag-color, #76B88C);
  --pill-color-remove-hover: var(--tag-color-hover, #76B88C);
  color: var(--pill-color, rgb(118, 184, 140));
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(242, 239, 233));
  color: var(--text-normal, rgb(47, 74, 55));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(248, 248, 248));
  border-color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(240, 238, 220));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(47, 74, 55);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(248, 248, 248));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
  color: var(--text-normal, rgb(47, 74, 55));
}

html[saved-theme="light"] body abbr {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(237, 235, 217));
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
  color: var(--code-normal, rgb(47, 74, 55));
  font-family: var(--font-monospace, "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
}

html[saved-theme="light"] body sub {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body summary {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body sup {
  color: rgb(47, 74, 55);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--background-secondary-alt, rgb(240, 238, 220));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-tag, rgb(122, 181, 166));
}`,
  },
};
