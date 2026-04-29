import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sanguine",
    modes: ["dark"],
    variations: [],
    fonts: ["slasher-film"],
    fontFiles: [
      {
        family: "Slasher Title",
        style: "normal",
        weight: "400",
        file: "slasher-title.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Slasher Regular",
        style: "normal",
        weight: "400",
        file: "slasher-regular.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root {
  --background-modifier-active-hover: var(--col-important, #D8B131);
  --background-modifier-border: var(--col-muted-plus, #232221);
  --background-modifier-border-focus: var(--col-important, #D8B131);
  --background-modifier-border-hover: var(--col-muted-plus, #232221);
  --background-modifier-error: var(--col-muted-plus-plus, #191919);
  --background-modifier-error-hover: var(--col-accent, #D92926);
  --background-modifier-error-rgb: var(--col-important, #D8B131);
  --background-modifier-form-field: var(--col-muted-plus-plus, #191919);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #191919);
  --background-modifier-hover: var(--col-important, #D8B131);
  --background-modifier-message: var(--col-accent, #D92926);
  --background-modifier-success: var(--col-muted-plus, #232221);
  --background-modifier-success-rgb: var(--col-accent-plus, #FF4949);
  --background-primary: var(--col-base-background, #030308);
  --background-primary-alt: var(--color-base-10, black);
  --background-secondary: var(--col-base-background, #030308);
  --background-secondary-alt: var(--col-base-background, #030308);
  --bases-cards-background: var(--background-primary, #030308);
  --bases-cards-cover-background: var(--background-primary-alt, black);
  --bases-embed-border-color: var(--background-modifier-border, #232221);
  --bases-group-heading-property-color: var(--text-muted, #83888C);
  --bases-table-border-color: var(--table-border-color, #232221);
  --bases-table-cell-background-active: var(--background-primary, #030308);
  --bases-table-cell-background-disabled: var(--background-primary-alt, black);
  --bases-table-group-background: var(--background-primary-alt, black);
  --bases-table-header-background: var(--background-primary, #030308);
  --bases-table-header-background-hover: var(--background-modifier-hover, #D8B131);
  --bases-table-header-color: var(--text-muted, #83888C);
  --bases-table-summary-background: var(--background-primary, #030308);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #D8B131);
  --blockquote-border-color: var(--interactive-accent, #D92926);
  --bodyFont: var(--font-interface, var(--fnt-head-p, "Slasher Regular"));
  --canvas-background: var(--background-primary, #030308);
  --canvas-card-label-color: var(--text-faint, #83888C);
  --caret-color: var(--text-normal, #83888C);
  --checkbox-border-color: var(--text-faint, #83888C);
  --checkbox-border-color-hover: var(--text-muted, #83888C);
  --checkbox-color: var(--interactive-accent, #D92926);
  --checkbox-color-hover: var(--interactive-accent-hover, #D8B131);
  --checkbox-marker-color: var(--background-primary, #030308);
  --checklist-done-color: var(--text-muted, #83888C);
  --code-background: var(--background-primary-alt, black);
  --code-border-color: var(--background-modifier-border, #232221);
  --code-bracket-background: var(--background-modifier-hover, #D8B131);
  --code-comment: var(--text-faint, #83888C);
  --code-normal: var(--text-normal, #83888C);
  --code-punctuation: var(--text-muted, #83888C);
  --codeFont: var(--font-interface, var(--fnt-head-p, "Slasher Regular"));
  --col-accent: #D92926;
  --col-accent-plus: #FF4949;
  --col-base: #E4E5E0;
  --col-base-background: #030308;
  --col-bckg-filetreeheader: var(--col-base-background, #030308);
  --col-bckg-mainpanels: var(--col-muted-plus-plus, #191919);
  --col-bckg-menudropdownhover: var(--col-muted-plus, #232221);
  --col-bckg-menudropdowns: var(--col-muted-plus-plus, #191919);
  --col-bckg-selectedtitles: var(--col-important, #D8B131);
  --col-danger: #232221;
  --col-ed-background: var(--col-base-background, #030308);
  --col-ed-bckg-checkbox-empty: var(--col-accent, #D92926);
  --col-ed-bckg-checkbox-full: var(--col-muted, #83888C);
  --col-ed-bckg-codeblock: var(--col-muted-plus, #232221);
  --col-ed-bckg-highlight: var(--col-important, #D8B131);
  --col-ed-bckg-hyperlink-broken: var(--col-danger, #232221);
  --col-ed-bckg-quote: var(--col-base-background, #030308);
  --col-ed-bckg-quote-callout: var(--col-safety, #232221);
  --col-ed-bckg-quote-warning: var(--col-danger, #232221);
  --col-ed-bckg-table: var(--col-base-background, #030308);
  --col-ed-bckg-tableh: var(--col-muted-plus, #232221);
  --col-ed-bckg-tagbeg: var(--col-muted-plus, #232221);
  --col-ed-bckg-tagend: var(--col-muted-plus, #232221);
  --col-ed-caret: var(--col-accent-plus, #FF4949);
  --col-ed-hr: var(--col-muted, #83888C);
  --col-ed-hyperlink: var(--col-important, #D8B131);
  --col-ed-hyperlink-broken: red;
  --col-ed-hyperlink-highlight-hover: var(--col-muted-plus, #232221);
  --col-ed-hyperlink-hover: var(--col-important-plus, #FFD059);
  --col-ed-hyperlink-strikethrough: var(--col-important-muted, #9B7F31);
  --col-ed-txt-checkbox-full: var(--col-muted, #83888C);
  --col-ed-txt-codeblock: var(--col-accent, #D92926);
  --col-ed-txt-h1: var(--col-accent, #D92926);
  --col-ed-txt-h2: var(--col-accent, #D92926);
  --col-ed-txt-h3: var(--col-accent, #D92926);
  --col-ed-txt-h4: var(--col-accent, #D92926);
  --col-ed-txt-h5: var(--col-accent, #D92926);
  --col-ed-txt-h6: var(--col-accent, #D92926);
  --col-ed-txt-highlight: var(--col-muted-plus, #232221);
  --col-ed-txt-italic: var(--col-accent, #D92926);
  --col-ed-txt-ol-bullet: var(--col-accent-plus, #FF4949);
  --col-ed-txt-p: var(--col-base, #E4E5E0);
  --col-ed-txt-quote: var(--col-accent-plus, #FF4949);
  --col-ed-txt-strikethrough: var(--col-muted, #83888C);
  --col-ed-txt-strong: var(--col-accent, #D92926);
  --col-ed-txt-table: var(--col-base, #E4E5E0);
  --col-ed-txt-tableh: var(--col-accent, #D92926);
  --col-ed-txt-tagbeg: var(--col-important, #D8B131);
  --col-ed-txt-tagend: var(--col-important, #D8B131);
  --col-ed-txt-title: var(--col-accent, #D92926);
  --col-ed-txt-ul-bullet: var(--col-accent-plus, #FF4949);
  --col-icons: var(--col-muted, #83888C);
  --col-important: #D8B131;
  --col-important-muted: #9B7F31;
  --col-important-plus: #FFD059;
  --col-menucheckbox: var(--col-accent, #D92926);
  --col-muted: #83888C;
  --col-muted-plus: #232221;
  --col-muted-plus-plus: #191919;
  --col-pr-background: var(--col-base-background, #030308);
  --col-pr-bckg-checkbox-empty: var(--col-accent, #D92926);
  --col-pr-bckg-checkbox-full: var(--col-muted, #83888C);
  --col-pr-bckg-codeblock: var(--col-muted-plus, #232221);
  --col-pr-bckg-highlight: var(--col-important, #D8B131);
  --col-pr-bckg-quote: var(--col-base-background, #030308);
  --col-pr-bckg-quote-callout: var(--col-safety, #232221);
  --col-pr-bckg-quote-warning: var(--col-danger, #232221);
  --col-pr-bckg-table: var(--col-base-background, #030308);
  --col-pr-bckg-tableh: var(--col-muted-plus, #232221);
  --col-pr-bckg-tag: var(--col-important, #D8B131);
  --col-pr-hr: var(--col-muted, #83888C);
  --col-pr-hyperlink-broken: red;
  --col-pr-txt-checkbox-full: var(--col-muted, #83888C);
  --col-pr-txt-codeblock: var(--col-accent, #D92926);
  --col-pr-txt-h1: var(--col-accent, #D92926);
  --col-pr-txt-h2: var(--col-accent, #D92926);
  --col-pr-txt-h3: var(--col-accent, #D92926);
  --col-pr-txt-h4: var(--col-accent, #D92926);
  --col-pr-txt-h5: var(--col-accent, #D92926);
  --col-pr-txt-h6: var(--col-accent, #D92926);
  --col-pr-txt-highlight: var(--col-muted-plus, #232221);
  --col-pr-txt-hyperlink: var(--col-important, #D8B131);
  --col-pr-txt-hyperlink-highlight-hover: var(--col-muted-plus, #232221);
  --col-pr-txt-hyperlink-hover: var(--col-important-plus, #FFD059);
  --col-pr-txt-hyperlink-strikethrough: var(--col-important-muted, #9B7F31);
  --col-pr-txt-hyperlink-unresolved: var(--col-important, #D8B131);
  --col-pr-txt-italic: var(--col-accent, #D92926);
  --col-pr-txt-ol-bullet: var(--col-accent-plus, #FF4949);
  --col-pr-txt-p: var(--col-base, #E4E5E0);
  --col-pr-txt-quote: var(--col-accent-plus, #FF4949);
  --col-pr-txt-strikethrough: var(--col-muted, #83888C);
  --col-pr-txt-strong: var(--col-accent, #D92926);
  --col-pr-txt-table: var(--col-base, #E4E5E0);
  --col-pr-txt-tableh: var(--col-accent, #D92926);
  --col-pr-txt-tag: var(--col-muted-plus, #232221);
  --col-pr-txt-title: var(--col-accent, #D92926);
  --col-pr-txt-ul-bullet: var(--col-accent-plus, #FF4949);
  --col-safety: #232221;
  --col-txt-files: var(--col-base, #E4E5E0);
  --col-txt-menudropdownhover: var(--col-accent, #D92926);
  --col-txt-menudropdowns: var(--col-accent, #D92926);
  --col-txt-selectedtitles: var(--col-muted-plus, #232221);
  --col-txt-titlebars: var(--col-base-background, #030308);
  --col-txt-titles: var(--col-accent, #D92926);
  --collapse-icon-color: var(--text-faint, #83888C);
  --collapse-icon-color-collapsed: var(--text-accent, #FF4949);
  --dark: var(--text-normal, var(--col-muted, #83888C));
  --darkgray: var(--text-normal, var(--col-muted, #83888C));
  --divider-color: var(--background-modifier-border, #232221);
  --divider-color-hover: var(--interactive-accent, #D92926);
  --dropdown-background: var(--interactive-normal, #E4E5E0);
  --dropdown-background-hover: var(--interactive-hover, #D8B131);
  --file-header-background: var(--background-primary, #030308);
  --file-header-background-focused: var(--background-primary, #030308);
  --file-header-font: var(--font-interface, "Slasher Regular");
  --files-font-size: 1em;
  --flair-background: var(--interactive-normal, #E4E5E0);
  --flair-color: var(--text-normal, #83888C);
  --fnt-ed-headers: var(--fnt-head-p, "Slasher Regular");
  --fnt-ed-text: var(--fnt-head-p, "Slasher Regular");
  --fnt-ed-title: var(--fnt-title, "Slasher Title");
  --fnt-head-p: "Slasher Regular";
  --fnt-pr-headers: var(--fnt-head-p, "Slasher Regular");
  --fnt-pr-text: var(--fnt-head-p, "Slasher Regular");
  --fnt-pr-title: var(--fnt-title, "Slasher Title");
  --fnt-title: "Slasher Title";
  --folders-font-size: 1em;
  --font-interface: var(--fnt-head-p, "Slasher Regular");
  --footnote-divider-color: var(--metadata-divider-color, #232221);
  --footnote-id-color: var(--text-muted, #83888C);
  --footnote-id-color-no-occurrences: var(--text-faint, #83888C);
  --footnote-input-background-active: var(--metadata-input-background-active, #D8B131);
  --graph-node: var(--text-muted, #83888C);
  --graph-node-focused: var(--text-accent, #FF4949);
  --graph-node-unresolved: var(--text-faint, #83888C);
  --graph-text: var(--text-normal, #83888C);
  --gray: var(--text-muted, var(--col-muted, #83888C));
  --headerFont: var(--font-interface, var(--fnt-head-p, "Slasher Regular"));
  --heading-formatting: var(--text-faint, #83888C);
  --highlight: var(--background-modifier-hover, var(--col-important, #D8B131));
  --hr-color: var(--background-modifier-border, #232221);
  --icon-color: var(--text-muted, #83888C);
  --icon-color-active: var(--text-accent, #FF4949);
  --icon-color-focused: var(--text-normal, #83888C);
  --icon-color-hover: var(--text-muted, #83888C);
  --input-date-separator: var(--text-faint, #83888C);
  --input-placeholder-color: var(--text-faint, #83888C);
  --interactive-accent: var(--col-accent, #D92926);
  --interactive-accent-hover: var(--col-important, #D8B131);
  --interactive-accent-hsl: var(--col-accent, #D92926);
  --interactive-hover: var(--col-important, #D8B131);
  --interactive-normal: var(--col-base, #E4E5E0);
  --letterspacing-ed-headers: var(--letterspacing-txt-headers, 1.5px);
  --letterspacing-ed-text: var(--letterspacing-txt-p, 0.5px);
  --letterspacing-pr-headers: var(--letterspacing-txt-headers, 1.5px);
  --letterspacing-pr-text: var(--letterspacing-txt-p, 0.5px);
  --letterspacing-txt-headers: 1.5px;
  --letterspacing-txt-p: 0.5px;
  --light: var(--background-primary, var(--col-base-background, #030308));
  --lightgray: var(--background-secondary, var(--col-base-background, #030308));
  --line-height-ed-headers: 20px;
  --line-height-ed-text: 20px;
  --line-height-pr-headers: 20px;
  --line-height-pr-text: 20px;
  --link-color: var(--text-accent, #FF4949);
  --link-color-hover: var(--text-accent-hover, #FFD059);
  --link-external-color: var(--text-accent, #FF4949);
  --link-external-color-hover: var(--text-accent-hover, #FFD059);
  --link-unresolved-color: var(--text-accent, #FF4949);
  --list-marker-color: var(--text-faint, #83888C);
  --list-marker-color-collapsed: var(--text-accent, #FF4949);
  --list-marker-color-hover: var(--text-muted, #83888C);
  --menu-background: var(--background-secondary, #030308);
  --menu-border-color: var(--background-modifier-border-hover, #232221);
  --metadata-border-color: var(--background-modifier-border, #232221);
  --metadata-divider-color: var(--background-modifier-border, #232221);
  --metadata-input-background-active: var(--background-modifier-hover, #D8B131);
  --metadata-input-font: var(--font-interface, "Slasher Regular");
  --metadata-input-text-color: var(--text-normal, #83888C);
  --metadata-label-background-active: var(--background-modifier-hover, #D8B131);
  --metadata-label-font: var(--font-interface, "Slasher Regular");
  --metadata-label-text-color: var(--text-muted, #83888C);
  --metadata-label-text-color-hover: var(--text-muted, #83888C);
  --metadata-property-background-active: var(--background-modifier-hover, #D8B131);
  --modal-background: var(--background-primary, #030308);
  --nav-collapse-icon-color: var(--collapse-icon-color, #83888C);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #83888C);
  --nav-heading-color: var(--text-normal, #83888C);
  --nav-heading-color-collapsed: var(--text-faint, #83888C);
  --nav-heading-color-collapsed-hover: var(--text-muted, #83888C);
  --nav-heading-color-hover: var(--text-normal, #83888C);
  --nav-item-background-active: var(--background-modifier-hover, #D8B131);
  --nav-item-background-hover: var(--background-modifier-hover, #D8B131);
  --nav-item-color: var(--text-muted, #83888C);
  --nav-item-color-active: var(--text-normal, #83888C);
  --nav-item-color-highlighted: var(--text-accent, #FF4949);
  --nav-item-color-hover: var(--text-normal, #83888C);
  --nav-item-color-selected: var(--text-normal, #83888C);
  --nav-tag-color: var(--text-faint, #83888C);
  --nav-tag-color-active: var(--text-muted, #83888C);
  --nav-tag-color-hover: var(--text-muted, #83888C);
  --oz-fta-file-font-size: 1em;
  --oz-fta-folder-font-size: 1em;
  --pad-ed-headers: 5px;
  --pdf-background: var(--background-primary, #030308);
  --pdf-page-background: var(--background-primary, #030308);
  --pdf-sidebar-background: var(--background-primary, #030308);
  --pill-border-color: var(--background-modifier-border, #232221);
  --pill-border-color-hover: var(--background-modifier-border-hover, #232221);
  --pill-color: var(--text-muted, #83888C);
  --pill-color-hover: var(--text-normal, #83888C);
  --pill-color-remove: var(--text-faint, #83888C);
  --pill-color-remove-hover: var(--text-accent, #FF4949);
  --prompt-background: var(--background-primary, #030308);
  --raised-background: var(--blur-background, color-mix(in srgb, #E4E5E0 65%, transparent) linear-gradient(#E4E5E0, color-mix(in srgb, #E4E5E0 65%, transparent)));
  --ribbon-background: var(--background-secondary, #030308);
  --ribbon-background-collapsed: var(--background-primary, #030308);
  --search-clear-button-color: var(--text-muted, #83888C);
  --search-icon-color: var(--text-muted, #83888C);
  --search-result-background: var(--background-primary, #030308);
  --secondary: var(--text-accent, var(--col-accent-plus, #FF4949));
  --setting-group-heading-color: var(--text-normal, #83888C);
  --setting-items-background: var(--background-primary-alt, black);
  --setting-items-border-color: var(--background-modifier-border, #232221);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #83888C);
  --shiki-code-background: var(--code-background, black);
  --shiki-code-comment: var(--text-faint, #83888C);
  --shiki-code-normal: var(--text-muted, #83888C);
  --shiki-code-punctuation: var(--text-muted, #83888C);
  --shiki-gutter-border-color: var(--background-modifier-border, #232221);
  --shiki-gutter-text-color: var(--text-faint, #83888C);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #83888C);
  --shiki-highlight-neutral: var(--shiki-code-normal, #83888C);
  --shiki-terminal-dots-color: var(--text-faint, #83888C);
  --shiki-tooltip-background: var(--background-modifier-message, #D92926);
  --siz-ed-txt-codeblock: var(--siz-txt-p, 1em);
  --siz-ed-txt-h1: var(--siz-txt-h1, 1.75em);
  --siz-ed-txt-h2: var(--siz-txt-h2, 1.6em);
  --siz-ed-txt-h3: var(--siz-txt-h3, 1.45em);
  --siz-ed-txt-h4: var(--siz-txt-h4, 1.3em);
  --siz-ed-txt-h5: var(--siz-txt-h5, 1.15em);
  --siz-ed-txt-h6: var(--siz-txt-h6, 1em);
  --siz-ed-txt-highlight: var(--siz-txt-p, 1em);
  --siz-ed-txt-italic: var(--siz-txt-p, 1em);
  --siz-ed-txt-p: var(--siz-txt-p, 1em);
  --siz-ed-txt-quote: var(--siz-txt-p, 1em);
  --siz-ed-txt-strong: var(--siz-txt-p, 1em);
  --siz-ed-txt-table: var(--siz-txt-p, 1em);
  --siz-ed-txt-title: var(--siz-txt-title, 2em);
  --siz-pr-txt-codeblock: var(--siz-txt-p, 1em);
  --siz-pr-txt-h1: var(--siz-txt-h1, 1.75em);
  --siz-pr-txt-h2: var(--siz-txt-h2, 1.6em);
  --siz-pr-txt-h3: var(--siz-txt-h3, 1.45em);
  --siz-pr-txt-h4: var(--siz-txt-h4, 1.3em);
  --siz-pr-txt-h5: var(--siz-txt-h5, 1.15em);
  --siz-pr-txt-h6: var(--siz-txt-h6, 1em);
  --siz-pr-txt-highlight: var(--siz-txt-p, 1em);
  --siz-pr-txt-italic: var(--siz-txt-p, 1em);
  --siz-pr-txt-p: var(--siz-txt-p, 1em);
  --siz-pr-txt-quote: var(--siz-txt-p, 1em);
  --siz-pr-txt-strong: var(--siz-txt-p, 1em);
  --siz-pr-txt-table: var(--siz-txt-p, 1em);
  --siz-pr-txt-title: var(--siz-txt-title, 2em);
  --siz-txt-h1: 1.75em;
  --siz-txt-h2: 1.6em;
  --siz-txt-h3: 1.45em;
  --siz-txt-h4: 1.3em;
  --siz-txt-h5: 1.15em;
  --siz-txt-h6: 1em;
  --siz-txt-p: 1em;
  --siz-txt-title: 2em;
  --slider-thumb-border-color: var(--background-modifier-border-hover, #232221);
  --slider-track-background: var(--background-modifier-border, #232221);
  --status-bar-background: var(--background-secondary, #030308);
  --status-bar-border-color: var(--divider-color, #232221);
  --status-bar-text-color: var(--text-muted, #83888C);
  --suggestion-background: var(--background-primary, #030308);
  --tab-background-active: var(--background-primary, #030308);
  --tab-container-background: var(--background-secondary, #030308);
  --tab-divider-color: var(--background-modifier-border-hover, #232221);
  --tab-outline-color: var(--divider-color, #232221);
  --tab-switcher-background: var(--background-secondary, #030308);
  --tab-text-color: var(--text-faint, #83888C);
  --tab-text-color-active: var(--text-muted, #83888C);
  --tab-text-color-focused: var(--text-muted, #83888C);
  --tab-text-color-focused-active: var(--text-muted, #83888C);
  --tab-text-color-focused-active-current: var(--text-normal, #83888C);
  --tab-text-color-focused-highlighted: var(--text-accent, #FF4949);
  --table-add-button-border-color: var(--background-modifier-border, #232221);
  --table-border-color: var(--background-modifier-border, #232221);
  --table-drag-handle-background-active: var(--table-selection-border-color, #D92926);
  --table-drag-handle-color: var(--text-faint, #83888C);
  --table-drag-handle-color-active: var(--text-on-accent, #232221);
  --table-header-border-color: var(--table-border-color, #232221);
  --table-header-color: var(--text-normal, #83888C);
  --table-selection-border-color: var(--interactive-accent, #D92926);
  --tag-color: var(--text-accent, #FF4949);
  --tag-color-hover: var(--text-accent, #FF4949);
  --tertiary: var(--text-accent-hover, var(--col-important-plus, #FFD059));
  --text-accent: var(--col-accent-plus, #FF4949);
  --text-accent-hover: var(--col-important-plus, #FFD059);
  --text-error: var(--col-important, #D8B131);
  --text-faint: var(--col-muted, #83888C);
  --text-muted: var(--col-muted, #83888C);
  --text-normal: var(--col-muted, #83888C);
  --text-on-accent: var(--col-muted-plus, #232221);
  --text-selection: var(--col-muted, #83888C);
  --text-success: var(--col-accent, #D92926);
  --textHighlight: var(--background-modifier-hover, var(--col-important, #D8B131));
  --titleFont: var(--font-interface, var(--fnt-head-p, "Slasher Regular"));
  --titlebar-background: var(--background-secondary, #030308);
  --titlebar-background-focused: var(--background-secondary-alt, #030308);
  --titlebar-border-color: var(--background-modifier-border, #232221);
  --titlebar-text-color: var(--text-muted, #83888C);
  --titlebar-text-color-focused: var(--text-normal, #83888C);
  --vault-profile-color: var(--text-normal, #83888C);
  --vault-profile-color-hover: var(--vault-profile-color, #83888C);
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(3, 3, 8));
  color: rgb(131, 136, 140);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(3, 3, 8));
  color: rgb(131, 136, 140);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(3, 3, 8));
  color: rgb(131, 136, 140);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(35, 34, 33);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(3, 3, 8));
  border-left-color: rgb(35, 34, 33);
  color: rgb(131, 136, 140);
}

html body html {
  --files-font-size: 1em;
  --fnt-head-p: "Slasher Regular";
  --fnt-title: "Slasher Title";
  --folders-font-size: 1em;
  --letterspacing-txt-headers: 1.5px;
  --letterspacing-txt-p: 0.5px;
  --oz-fta-file-font-size: 1em;
  --oz-fta-folder-font-size: 1em;
  --siz-txt-h1: 1.75em;
  --siz-txt-h2: 1.6em;
  --siz-txt-h3: 1.45em;
  --siz-txt-h4: 1.3em;
  --siz-txt-h5: 1.15em;
  --siz-txt-h6: 1em;
  --siz-txt-p: 1em;
  --siz-txt-title: 2em;
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--col-pr-txt-strong, rgb(217, 41, 38));
  font-family: "Slasher Regular";
  outline: rgb(217, 41, 38) none 0px;
  text-decoration-color: rgb(217, 41, 38);
}

html body .markdown-rendered p > em, html em {
  color: var(--col-pr-txt-italic, rgb(217, 41, 38));
  font-family: "Slasher Regular";
  outline: rgb(217, 41, 38) none 0px;
  text-decoration-color: rgb(217, 41, 38);
}

html body .markdown-rendered p > i, html i {
  color: var(--col-pr-txt-italic, rgb(217, 41, 38));
  font-family: "Slasher Regular";
  outline: rgb(217, 41, 38) none 0px;
  text-decoration-color: rgb(217, 41, 38);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--col-pr-txt-strong, rgb(217, 41, 38));
  font-family: "Slasher Regular";
  outline: rgb(217, 41, 38) none 0px;
  text-decoration-color: rgb(217, 41, 38);
}

html body .text-highlight {
  background-color: var(--col-ed-bckg-highlight, rgb(216, 177, 49));
  color: var(--col-ed-txt-highlight, rgb(35, 34, 33));
  font-family: "Slasher Regular";
  outline: rgb(35, 34, 33) none 0px;
  text-decoration-color: rgb(35, 34, 33);
}

html body del {
  color: var(--col-pr-txt-strikethrough, rgb(131, 136, 140));
  font-family: "Slasher Regular";
  outline: rgb(131, 136, 140) none 0px;
  text-decoration-color: rgb(131, 136, 140);
}

html body h1.article-title {
  color: var(--text-normal, rgb(131, 136, 140));
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(131, 136, 140);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--col-ed-bckg-checkbox-full, rgb(131, 136, 140));
  border-color: rgb(131, 136, 140);
}

html body p {
  color: var(--text-muted, rgb(131, 136, 140));
  font-family: "Slasher Regular";
  outline: rgb(131, 136, 140) none 0px;
  text-decoration-color: rgb(131, 136, 140);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--col-ed-hyperlink, rgb(216, 177, 49));
  font-family: "Slasher Regular";
  outline: rgb(216, 177, 49) none 0px;
  text-decoration-color: rgb(216, 177, 49);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  background-color: var(--col-ed-hyperlink, rgba(0, 0, 0, 0));
  color: var(--col-ed-hyperlink, rgb(216, 177, 49));
  font-family: "Slasher Regular";
  outline: rgb(216, 177, 49) none 0px;
  text-decoration-color: rgb(216, 177, 49);
}

html body a.internal-link.broken {
  background-color: var(--col-ed-hyperlink, rgba(0, 0, 0, 0));
  color: var(--col-pr-hyperlink-broken, rgb(255, 0, 0));
  font-family: "Slasher Regular";
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: underline;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(255, 0, 0));
}`,
    lists: `html body dd {
  color: rgb(131, 136, 140);
}

html body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html body dt {
  color: rgb(131, 136, 140);
}

html body ol > li {
  color: rgb(228, 229, 224);
}

html body ul > li {
  color: rgb(228, 229, 224);
}

html body ul.overflow {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgb(131, 136, 140));
}

html body blockquote {
  font-family: "Slasher Regular";
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body table {
  background-color: var(--col-ed-bckg-table, rgb(3, 3, 8));
  color: var(--col-ed-txt-table, rgb(228, 229, 224));
  font-family: "Slasher Regular";
  width: 196.234px;
}

html body tbody {
  background-color: var(--col-pr-bckg-table, rgb(3, 3, 8));
}

html body td {
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: var(--table-text-color, rgb(228, 229, 224));
}

html body th {
  background-color: var(--col-pr-bckg-tableh, rgb(35, 34, 33));
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: var(--col-pr-txt-tableh, rgb(217, 41, 38));
}

html body thead {
  background-color: var(--col-pr-bckg-tableh, rgb(35, 34, 33));
}`,
    code: `html body code {
  background-color: var(--code-background, rgb(0, 0, 0));
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: var(--code-normal, rgb(131, 136, 140));
  padding-bottom: 1.96875px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.96875px;
}

html body pre:has(> code) {
  background-color: var(--col-pr-bckg-codeblock, rgb(35, 34, 33));
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
}`,
    images: `html body audio {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body figcaption {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

html body figure {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body img {
  border-bottom-color: rgb(217, 41, 38);
  border-left-color: rgb(217, 41, 38);
  border-right-color: rgb(217, 41, 38);
  border-top-color: rgb(217, 41, 38);
}

html body video {
  border-bottom-color: rgb(228, 229, 224);
  border-left-color: rgb(228, 229, 224);
  border-right-color: rgb(228, 229, 224);
  border-top-color: rgb(228, 229, 224);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(0, 0, 0));
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body .footnotes {
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

html body .transclude {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(217, 41, 38);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body .transclude-inner {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "Slasher Regular";
}

html body .katex-display > .katex > .katex-html {
  font-family: "Slasher Regular";
}

html body input[type=checkbox] {
  border-bottom-color: rgb(217, 41, 38);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-bottom-width: 2px;
  border-left-color: rgb(217, 41, 38);
  border-left-width: 2px;
  border-right-color: rgb(217, 41, 38);
  border-right-width: 2px;
  border-top-color: rgb(217, 41, 38);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  border-top-width: 2px;
}

html body li.task-list-item[data-task="#"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(131, 136, 140);
}

html li.task-list-item[data-task="body"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="."] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="="] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  background: rgb(35, 34, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--col-ed-bckg-quote-callout, rgb(35, 34, 33));
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  background: rgb(35, 34, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--col-ed-bckg-quote-callout, rgb(35, 34, 33));
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  background: rgb(35, 34, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--col-ed-bckg-quote-callout, rgb(35, 34, 33));
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  background: rgb(35, 34, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--col-ed-bckg-quote-callout, rgb(35, 34, 33));
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  background: rgb(35, 34, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--col-ed-bckg-quote-callout, rgb(35, 34, 33));
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  background: rgb(35, 34, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--col-ed-bckg-quote-callout, rgb(35, 34, 33));
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  background: rgb(35, 34, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--col-ed-bckg-quote-callout, rgb(35, 34, 33));
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  background: rgb(35, 34, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--col-ed-bckg-quote-callout, rgb(35, 34, 33));
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgb(35, 34, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--col-pr-bckg-quote-callout, rgb(35, 34, 33));
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  background: rgb(35, 34, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--col-ed-bckg-quote-callout, rgb(35, 34, 33));
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  background: rgb(35, 34, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--col-ed-bckg-quote-callout, rgb(35, 34, 33));
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  background: rgb(35, 34, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--col-ed-bckg-quote-callout, rgb(35, 34, 33));
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  background: rgb(35, 34, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--col-ed-bckg-quote-warning, rgb(35, 34, 33));
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--col-ed-txt-quote, rgb(255, 73, 73));
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(131, 136, 140);
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: var(--text-normal, rgb(131, 136, 140));
  font-family: "Slasher Regular";
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(3, 3, 8));
}

html body .search > .search-container > .search-space > * {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
  outline: rgb(131, 136, 140) none 0px;
  text-decoration-color: rgb(131, 136, 140);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(131, 136, 140);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(131, 136, 140);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(216, 177, 49));
  color: rgb(131, 136, 140);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(3, 3, 8);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(216, 177, 49));
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(216, 177, 49));
  color: rgb(131, 136, 140);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(255, 73, 73);
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-left-color: rgb(255, 73, 73);
  border-right-color: rgb(255, 73, 73);
  border-top-color: rgb(255, 73, 73);
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
  font-family: "Slasher Regular";
}

html body a.internal-link.tag-link::before {
  color: rgb(255, 73, 73);
}

html body h1 {
  color: var(--col-pr-txt-h1, rgb(217, 41, 38));
  font-family: var(--fnt-pr-headers, "Slasher Regular");
}

html body h1.article-title {
  color: var(--col-pr-txt-title, rgb(217, 41, 38));
  font-size: var(--inline-title-size, 30px);
}

html body h2 {
  color: var(--col-pr-txt-h2, rgb(217, 41, 38));
  font-family: var(--fnt-pr-headers, "Slasher Regular");
}

html body h2.page-title, html h2.page-title a {
  color: var(--col-pr-txt-title, rgb(217, 41, 38));
  font-family: var(--inline-title-font, "Slasher Title");
}

html body h3 {
  color: var(--col-pr-txt-h3, rgb(217, 41, 38));
  font-family: var(--fnt-pr-headers, "Slasher Regular");
}

html body h4 {
  color: var(--col-pr-txt-h4, rgb(217, 41, 38));
  font-family: var(--fnt-pr-headers, "Slasher Regular");
}

html body h5 {
  color: var(--col-pr-txt-h5, rgb(217, 41, 38));
  font-family: var(--fnt-pr-headers, "Slasher Regular");
}

html body h6 {
  color: var(--col-pr-txt-h6, rgb(217, 41, 38));
  font-family: var(--fnt-pr-headers, "Slasher Regular");
}

html body hr {
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html body .nav-files-container {
  background-color: var(--col-bckg-mainpanels, rgb(25, 25, 25));
}

html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--col-txt-titles, rgb(217, 41, 38));
  font-family: "Slasher Regular";
  font-weight: var(--nav-item-weight, 700);
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--col-txt-titles, rgb(217, 41, 38));
  font-family: "Slasher Regular";
  font-weight: var(--nav-item-weight, 700);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(131, 136, 140);
}

html body li.depth-0 {
  font-weight: var(--nav-item-weight, 700);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: var(--icon-color, rgb(131, 136, 140));
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgb(3, 3, 8));
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: var(--status-bar-text-color, rgb(131, 136, 140));
  font-family: "Slasher Regular";
}

html body footer ul li a {
  color: rgb(131, 136, 140);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(131, 136, 140));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: var(--col-txt-files, rgb(228, 229, 224));
  font-family: "Slasher Regular";
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body li.section-li > .section .meta {
  color: var(--col-txt-files, rgb(228, 229, 224));
  font-family: "Slasher Regular";
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(131, 136, 140));
}

html body ul.section-ul {
  background-color: var(--col-bckg-mainpanels, rgb(25, 25, 25));
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: var(--col-icons, rgb(131, 136, 140));
}

html body .darkmode svg {
  color: rgb(131, 136, 140);
  stroke: rgb(131, 136, 140);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgb(131, 136, 140));
  font-family: "Slasher Regular";
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(131, 136, 140);
}

html body .canvas-node-content {
  color: rgb(131, 136, 140);
}

html body .canvas-node-file {
  background-color: var(--col-pr-background, rgb(3, 3, 8));
  color: var(--text-normal, rgb(131, 136, 140));
}

html body .canvas-node-group {
  border-color: rgb(131, 136, 140);
}

html body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(3, 3, 8));
  border-color: rgb(131, 136, 140);
}`,
    bases: `html body .bases-table thead th {
  background-color: var(--col-pr-bckg-tableh, rgb(35, 34, 33));
  border-color: rgb(35, 34, 33);
  color: var(--col-pr-txt-tableh, rgb(217, 41, 38));
}`,
    properties: `html body .metadata {
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: var(--text-muted, rgb(131, 136, 140));
  font-family: "Slasher Regular";
}

html body .metadata-properties {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

html body .note-properties {
  border-color: rgb(35, 34, 33);
}

html body .note-properties-key {
  color: rgb(131, 136, 140);
}

html body .note-properties-row {
  border-color: rgb(131, 136, 140);
}

html body .note-properties-tags {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 26.25px;
  color: var(--pill-color, rgb(255, 73, 73));
}

html body .note-properties-value {
  color: rgb(131, 136, 140);
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(3, 3, 8));
  color: var(--text-normal, rgb(131, 136, 140));
}

html body ol.overflow {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(3, 3, 8));
  border-color: rgb(131, 136, 140);
}

html body .stacked-page-header {
  background-color: var(--col-txt-titlebars, rgb(3, 3, 8));
}

html body .stacked-page.active {
  border-color: rgb(131, 136, 140);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

html body .navigation-progress {
  background-color: var(--status-bar-background, rgb(3, 3, 8));
}

html body .page-header h2.page-title {
  color: var(--text-normal, rgb(131, 136, 140));
  font-family: "Slasher Regular";
}

html body abbr {
  color: rgb(228, 229, 224);
}

html body details {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body input[type=text] {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: var(--text-normal, rgb(131, 136, 140));
  font-family: "Slasher Regular";
}

html body kbd {
  background-color: var(--code-background, rgb(0, 0, 0));
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: var(--code-normal, rgb(131, 136, 140));
  font-size: var(--code-size, 13.125px);
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

html body progress {
  border-bottom-color: rgb(228, 229, 224);
  border-left-color: rgb(228, 229, 224);
  border-right-color: rgb(228, 229, 224);
  border-top-color: rgb(228, 229, 224);
}

html body sub {
  color: rgb(228, 229, 224);
  font-size: 12.5px;
}

html body summary {
  color: rgb(131, 136, 140);
}

html body sup {
  color: var(--col-pr-txt-strikethrough, rgb(131, 136, 140));
  font-size: 12.5px;
}

html body ul.tags > li {
  background-color: var(--col-pr-bckg-tag, rgb(216, 177, 49));
  border-bottom-color: rgb(35, 34, 33);
  border-bottom-left-radius: 22.9688px;
  border-bottom-right-radius: 22.9688px;
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  border-top-left-radius: 22.9688px;
  border-top-right-radius: 22.9688px;
  color: var(--col-pr-txt-tag, rgb(35, 34, 33));
}`,
  },
  light: {},
};
