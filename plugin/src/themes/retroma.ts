import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retroma",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-1: oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30));
  --accent-2: oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330));
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-modifier-border: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --background-modifier-border-focus: oklch(
    from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) 70% c h
  );
  --background-modifier-error: oklch(
    from #d32f2f 70% 20% h
  );
  --background-modifier-error-hover: oklch(
    from #d32f2f 70% 20% h
  );
  --background-modifier-success: oklch(
    from #4caf50 70% 20% h
  );
  --background-paper: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  );
  --background-primary: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --background-primary-alt: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 26% calc(c * 0.3) h
  );
  --background-secondary: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  );
  --background-secondary-alt: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 22% calc(c * 0.3) h
  );
  --background-tertiary: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  );
  --base-accent: oklch(from rgb(138, 92, 245) l c h);
  --bases-cards-background: oklch(from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  ) 25% c h);
  --bases-cards-border-width: 4px;
  --bases-cards-cover-background: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 26% calc(c * 0.3) h
  );
  --bases-cards-shadow: 0 0 0 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --bases-embed-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --bases-embed-border-radius: 12px;
  --bases-table-border-color: oklch(from #dadada 50% c h / 50%);
  --bases-table-cell-background-active: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --bases-table-cell-background-disabled: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 26% calc(c * 0.3) h
  );
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(
    from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) 70% c h
  );
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-container-border-radius: 8px;
  --bases-table-group-background: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 26% calc(c * 0.3) h
  );
  --bases-table-header-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --bases-table-header-weight: 100;
  --bases-table-summary-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --blockquote-background-color: oklch(
    from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h / 40%
  );
  --blockquote-border-color: oklch(from oklch(from rgb(138, 92, 245) l c h) 50% c h / 75%);
  --blockquote-border-thickness: 4px;
  --bold-color: oklch(
    from oklch(from rgb(138, 92, 245) l c h) calc(70% + 10%) 20%
      calc(h + 100)
  );
  --bold-weight: 600;
  --border-groove: 4px groove oklch(
    from oklch(from rgb(138, 92, 245) l c h) 26% calc(c * 0.3) h
  );
  --border-ridge: 4px ridge oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --border-solid: 4px solid oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 18% calc(c * 0.3) h
  );
  --box-shadow: inset -2px -2px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 0% c h),
    inset 2px 2px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 50% c h);
  --box-shadow-active: inset 2px 2px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 0% c h),
    inset -2px -2px oklch(from oklch(from rgb(138, 92, 245) l c h) 50% c h);
  --box-shadow-active-sm: inset 1px 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 0% c h),
    inset -1px -1px oklch(from oklch(from rgb(138, 92, 245) l c h) 50% c h);
  --box-shadow-sm: inset -1px -1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 0% c h),
    inset 1px 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 50% c h);
  --button-active: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 25% c h);
  --button-border-radius: 8px;
  --button-hover: oklch(from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  ) l c h);
  --button-normal: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --button-radius: 12px;
  --button-text: #dadada;
  --callout-border-width: 4px;
  --callout-radius: 12px;
  --callout-title-weight: 600;
  --canvas-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: #666666;
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-color-hover: rgb(166, 139, 249);
  --checkbox-marker-color: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  );
  --checkbox-radius: 12px;
  --chroma: 20%;
  --chroma-accent: 0.3;
  --chroma-folder: 20%;
  --clickable-icon-radius: 8px;
  --code-background: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) 10% c h / 50%);
  --code-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --code-function: oklch(
    from #ffeb3b 70% 20% h
  );
  --code-important: oklch(
    from #ff9800 70% 20% h
  );
  --code-operator: oklch(
    from #d32f2f 70% 20% h
  );
  --code-property: oklch(
    from #00bcd4 70% 20% h
  );
  --code-radius: 12px;
  --code-string: oklch(
    from #4caf50 70% 20% h
  );
  --code-tag: oklch(
    from #d32f2f 70% 20% h
  );
  --code-value: oklch(
    from #673ab7 70% 20% h
  );
  --collapse-icon-color-collapsed: rgb(166, 139, 249);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
  --color-amber: oklch(
    from #ffb300 70% 20% h
  );
  --color-blue: oklch(
    from #2196f3 70% 20% h
  );
  --color-cyan: oklch(
    from #00bcd4 70% 20% h
  );
  --color-green: oklch(
    from #4caf50 70% 20% h
  );
  --color-indigo: oklch(
    from #3f51b5 70% 20% h
  );
  --color-lime: oklch(
    from #8bc34a 70% 20% h
  );
  --color-magenta: oklch(
    from #e91e63 70% 20% h
  );
  --color-orange: oklch(
    from #ff9800 70% 20% h
  );
  --color-purple: oklch(
    from #673ab7 70% 20% h
  );
  --color-red: oklch(
    from #d32f2f 70% 20% h
  );
  --color-rose: oklch(
    from #f48fb1 70% 20% h
  );
  --color-teal: oklch(
    from #009688 70% 20% h
  );
  --color-vermillion: oklch(
    from #ff5722 70% 20% h
  );
  --color-violet: oklch(
    from #9c27b0 70% 20% h
  );
  --color-yellow: oklch(
    from #ffeb3b 70% 20% h
  );
  --divider-color: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 18% calc(c * 0.3) h
  );
  --divider-color-hover: rgb(138, 92, 245);
  --divider-width: 0px;
  --embed-block-shadow-hover: 0 0 0 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h), inset 0 0 0 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --embed-border-start: 2px solid rgb(138, 92, 245);
  --file-header-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --file-header-background-focused: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  );
  --file-margins: 16px;
  --folder-accent-1: oklch(
    from #d32f2f 70% 20% h
  );
  --folder-accent-10: oklch(
    from #8bc34a 70% 20% h
  );
  --folder-accent-11: oklch(
    from #009688 70% 20% h
  );
  --folder-accent-12: oklch(
    from #673ab7 70% 20% h
  );
  --folder-accent-13: oklch(
    from #e91e63 70% 20% h
  );
  --folder-accent-14: oklch(
    from #f48fb1 70% 20% h
  );
  --folder-accent-15: oklch(
    from #00bcd4 70% 20% h
  );
  --folder-accent-2: oklch(
    from #ff9800 70% 20% h
  );
  --folder-color-3: oklch(
    from #ffeb3b 70% 20% h
  );
  --folder-color-4: oklch(
    from #4caf50 70% 20% h
  );
  --folder-color-5: oklch(
    from #2196f3 70% 20% h
  );
  --folder-color-6: oklch(
    from #3f51b5 70% 20% h
  );
  --folder-color-7: oklch(
    from #9c27b0 70% 20% h
  );
  --folder-color-8: oklch(
    from #ff5722 70% 20% h
  );
  --folder-color-9: oklch(
    from #ffb300 70% 20% h
  );
  --footnote-divider-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --footnote-radius: 8px;
  --graph-node-attachment: oklch(
    from #ffeb3b 70% 20% h
  );
  --graph-node-focused: rgb(166, 139, 249);
  --graph-node-tag: oklch(
    from #4caf50 70% 20% h
  );
  --h1-color: oklch(
    from #d32f2f 70% 20% h
  );
  --h2-color: oklch(
    from #ff9800 70% 20% h
  );
  --h3-color: oklch(
    from #ffeb3b 70% 20% h
  );
  --h4-color: oklch(
    from #4caf50 70% 20% h
  );
  --h5-color: oklch(
    from #2196f3 70% 20% h
  );
  --h6-color: oklch(
    from #3f51b5 70% 20% h
  );
  --header-height: 48px;
  --heading-spacing: 2.5rem;
  --hr-color: oklch(from #dadada l c h / 25%);
  --hue-amber: #ffb300;
  --hue-blue: #2196f3;
  --hue-cyan: #00bcd4;
  --hue-green: #4caf50;
  --hue-indigo: #3f51b5;
  --hue-lime: #8bc34a;
  --hue-magenta: #e91e63;
  --hue-orange: #ff9800;
  --hue-purple: #673ab7;
  --hue-red: #d32f2f;
  --hue-rose: #f48fb1;
  --hue-teal: #009688;
  --hue-vermillion: #ff5722;
  --hue-violet: #9c27b0;
  --hue-yellow: #ffeb3b;
  --icon-color-active: rgb(166, 139, 249);
  --img-border-color: oklch(from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  ) l 20% h);
  --img-border-radius: 0px;
  --img-border-width: 0px;
  --inline-title-color: oklch(
    from #d32f2f 70% 20% h
  );
  --input-border-width: 2px;
  --input-radius: 12px;
  --interactive-accent: rgb(138, 92, 245);
  --interactive-accent-hover: rgb(166, 139, 249);
  --interactive-active: oklch(from oklch(from rgb(138, 92, 245) l c h) 50% c h / 50%);
  --italic-color: oklch(
    from oklch(from rgb(138, 92, 245) l c h) calc(70% + 10%) 20%
      calc(h + 200)
  );
  --lightness: 70%;
  --link-color: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 80% 20% h
  );
  --link-color-hover: oklch(
    from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 80% 20% h
  ) 80% 20% h / 80%
  );
  --link-external-color: oklch(
    from #d32f2f 70% 20% h
  );
  --link-external-color-hover: oklch(
    from oklch(
    from #d32f2f 70% 20% h
  ) 70% 20% h / 80%
  );
  --link-unresolved-color: oklch(
    from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 80% 20% h
  ) 80% 20% h / 60%
  );
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --link-weight: 700;
  --list-indent: 2.25em;
  --list-marker-color-collapsed: rgb(166, 139, 249);
  --menu-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  );
  --metadata-background: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h / 75%);
  --metadata-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --metadata-border-radius: 12px;
  --metadata-divider-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --metadata-gap: 8px;
  --metadata-input-height: 28px;
  --metadata-label-background: oklch(
    from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  ) l c h / 15%
  );
  --metadata-label-background-active: oklch(
    from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  ) l c h / 30%
  );
  --metadata-label-background-hover: oklch(
    from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  ) l c h / 30%
  );
  --metadata-label-font-weight: 700;
  --metadata-label-width: 8em;
  --metadata-property-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  );
  --metadata-property-background-hover: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  );
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(
    from oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  ) 70% c h
  );
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  );
  --metadata-property-radius: 12px;
  --metadata-property-radius-focus: 12px;
  --metadata-property-radius-hover: 12px;
  --mobile-sidebar-width: 100%;
  --modal-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --nav-indentation-guide-width: 2px;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(166, 139, 249);
  --nav-item-radius: 8px;
  --nav-tag-color: #b3b3b3;
  --nav-tag-radius: 8px;
  --outline-color: oklch(from oklch(from rgb(138, 92, 245) l c h) 25% c h);
  --pdf-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --pdf-page-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --pdf-shadow: 0 0 0 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --pdf-sidebar-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --pill-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --pill-color-remove-hover: rgb(166, 139, 249);
  --prompt-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --radius-s: 8px;
  --radius-xs: 8px;
  --radius-xxs: 8px;
  --ribbon-background: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  );
  --ribbon-background-collapsed: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  );
  --rotation-1: 30;
  --rotation-2: 330;
  --search-result-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --setting-items-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --setting-items-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --settings-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 32% calc(c * 0.3) h
  );
  --sidebar-markdown-font-size: 14.4px;
  --slider-track-background: oklch(from oklch(from rgb(138, 92, 245) l c h) 50% c h / 50%);
  --slider-track-height: 6px;
  --status-bar-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 20% calc(c * 0.3) h
  );
  --status-bar-border-color: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 18% calc(c * 0.3) h
  );
  --strong-emphasis: oklch(
    from oklch(from rgb(138, 92, 245) l c h) calc(70% + 10%) 20%
      calc(h + 200)
  );
  --suggestion-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --sync-avatar-color-1: oklch(
    from #d32f2f 70% 20% h
  );
  --sync-avatar-color-2: oklch(
    from #ff9800 70% 20% h
  );
  --sync-avatar-color-3: oklch(
    from #ffeb3b 70% 20% h
  );
  --sync-avatar-color-4: oklch(
    from #4caf50 70% 20% h
  );
  --sync-avatar-color-5: oklch(
    from #00bcd4 70% 20% h
  );
  --sync-avatar-color-6: oklch(
    from #2196f3 70% 20% h
  );
  --sync-avatar-color-7: oklch(
    from #673ab7 70% 20% h
  );
  --tab-background-active: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 28% calc(c * 0.3) h
  );
  --tab-container-background: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  );
  --tab-outline-color: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 18% calc(c * 0.3) h
  );
  --tab-radius: 8px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-background: oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  );
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ), transparent);
  --tab-switcher-preview-radius: 12px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color-focused-highlighted: rgb(166, 139, 249);
  --table-add-button-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --table-border-color: oklch(from #dadada 50% c h / 50%);
  --table-border-spacing: 2px;
  --table-data-background: oklch(from oklch(from rgb(138, 92, 245) l c h) l c h / 7%);
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-header-background: oklch(from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 50% c h / 30%);
  --table-header-border-color: oklch(from #dadada 50% c h / 50%);
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(138, 92, 245);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-border-width: 1px;
  --tag-color: oklch(from oklch(from rgb(138, 92, 245) l c h) 80% c h / 75%);
  --tag-color-hover: rgb(166, 139, 249);
  --tag-radius: 8px;
  --text-accent: rgb(166, 139, 249);
  --text-accent-hover: rgb(197, 182, 252);
  --text-error: oklch(
    from #d32f2f 70% 20% h
  );
  --text-highlight-bg: oklch(from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 50% 20% h / 75%);
  --text-selection: oklch(from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 330)) 45% c h / 75%);
  --text-success: oklch(
    from #4caf50 70% 20% h
  );
  --text-warning: oklch(
    from #ff9800 70% 20% h
  );
  --titlebar-background: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 18% calc(c * 0.3) h
  );
  --titlebar-background-focused: oklch(
    from oklch(from oklch(from rgb(138, 92, 245) l c h) l c calc(h + 30)) 18% calc(c * 0.3) h
  );
  --titlebar-border-color: oklch(from oklch(
    from oklch(from rgb(138, 92, 245) l c h) 24% calc(c * 0.3) h
  ) l c h);
  --touch-radius-m: 8px;
  --touch-radius-s: 8px;
  --touch-radius-xs: 8px;
  --touch-radius-xxs: 8px;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  --window-border-radius: 12px;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.24 0.0651598 292.488);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: oklch(0.28 0.0651598 262.488);
}

body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.28 0.0651598 262.488);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.18 0.0651598 322.488);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.24 0.0651598 292.488);
  border-left-color: oklch(0.18 0.0651598 322.488);
}

body div#quartz-root {
  background-color: oklch(0.28 0.0651598 262.488);
}`,
    typography: `body .page article p > b, b {
  color: oklch(0.8 0.08 32.4879);
  outline: oklch(0.8 0.08 32.4879) none 0px;
  text-decoration: oklch(0.8 0.08 32.4879);
  text-decoration-color: oklch(0.8 0.08 32.4879);
}

body .page article p > em, em {
  color: oklch(0.8 0.08 132.488);
  outline: oklch(0.8 0.08 132.488) none 0px;
  text-decoration: oklch(0.8 0.08 132.488);
  text-decoration-color: oklch(0.8 0.08 132.488);
}

body .page article p > i, i {
  color: oklch(0.8 0.08 132.488);
  outline: oklch(0.8 0.08 132.488) none 0px;
  text-decoration: oklch(0.8 0.08 132.488);
  text-decoration-color: oklch(0.8 0.08 132.488);
}

body .page article p > strong, strong {
  color: oklch(0.8 0.08 32.4879);
  outline: oklch(0.8 0.08 32.4879) none 0px;
  text-decoration: oklch(0.8 0.08 32.4879);
  text-decoration-color: oklch(0.8 0.08 32.4879);
}

body .text-highlight {
  background-color: oklch(0.5 0.08 322.488 / 0.75);
}`,
    links: `body a.external, footer a {
  color: oklch(0.7 0.08 26.4069);
  font-weight: 700;
  outline: oklch(0.7 0.08 26.4069) none 0px;
  text-decoration: underline oklch(0.7 0.08 26.4069);
  text-decoration-color: oklch(0.7 0.08 26.4069);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.8 0.08 292.488);
  font-weight: 700;
  outline: oklch(0.8 0.08 292.488) none 0px;
  text-decoration: underline oklch(0.8 0.08 292.488);
  text-decoration-color: oklch(0.8 0.08 292.488);
}

body a.internal.broken {
  color: oklch(0.8 0.08 292.488 / 0.6);
  font-weight: 700;
  outline: oklch(0.8 0.08 292.488 / 0.6) none 0px;
}`,
    lists: `body ol.overflow {
  background-color: oklch(0.28 0.0651598 262.488);
}

body ul.overflow {
  background-color: oklch(0.28 0.0651598 262.488);
}`,
    blockquotes: `body blockquote {
  background-color: oklch(0.24 0.0651598 292.488 / 0.4);
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `body table {
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.28 0.0651598 262.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  width: 240.219px;
}

body td {
  background-color: oklch(0.60342 0.217199 292.488 / 0.07);
  border-bottom-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-left-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-right-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-top-color: oklch(0.5 0.000044225 23.6802 / 0.5);
}

body th {
  border-bottom-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-left-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-right-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-top-color: oklch(0.5 0.000044225 23.6802 / 0.5);
  border-top-left-radius: 12px;
}

body thead {
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-top-color: oklch(0.28 0.0651598 262.488);
}

body tr {
  background-color: oklch(0.5 0.217199 322.488 / 0.3);
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-top-color: oklch(0.28 0.0651598 262.488);
}`,
    code: `body code {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.1 0.0651598 292.488 / 0.5);
  border-bottom-color: oklch(0.24 0.0651598 292.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.24 0.0651598 292.488);
  border-right-color: oklch(0.24 0.0651598 292.488);
  border-top-color: oklch(0.24 0.0651598 292.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.1 0.0651598 292.488 / 0.5);
  border-bottom-color: oklch(0.24 0.0651598 292.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.24 0.0651598 292.488);
  border-right-color: oklch(0.24 0.0651598 292.488);
  border-top-color: oklch(0.24 0.0651598 292.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre > code > [data-line] {
  border-left-color: oklch(0.7 0.08 102.472);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: oklch(0.7 0.08 102.472);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: oklch(0.7 0.08 102.472);
  border-left-color: oklch(0.7 0.08 102.472);
  border-right-color: oklch(0.7 0.08 102.472);
  border-top-color: oklch(0.7 0.08 102.472);
}

body pre > code, pre:has(> code) {
  background-color: oklch(0.1 0.0651598 292.488 / 0.5);
  border-bottom-color: oklch(0.24 0.0651598 292.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.24 0.0651598 292.488);
  border-right-color: oklch(0.24 0.0651598 292.488);
  border-top-color: oklch(0.24 0.0651598 292.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre:has(> code) {
  background-color: oklch(0.1 0.0651598 292.488 / 0.5);
  border-bottom-color: oklch(0.24 0.0651598 292.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.24 0.0651598 292.488);
  border-right-color: oklch(0.24 0.0651598 292.488);
  border-top-color: oklch(0.24 0.0651598 292.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    embeds: `body .file-embed {
  background-color: oklch(0.26 0.0651598 292.488);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}`,
    search: `body .search > .search-button {
  background-color: oklch(0.32 0.0651598 262.488);
  border-bottom-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-left-width: 2px;
  border-right-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-right-width: 2px;
  border-top-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space {
  background-color: oklch(0.28 0.0651598 262.488);
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.28 0.0651598 262.488);
  border-top-style: ridge;
  border-top-width: 4px;
  box-shadow: oklch(0 0 0 / 0.4) 0px 0px 12px 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.28 0.0651598 262.488);
  border-top-style: ridge;
  border-top-width: 4px;
}

body .search > .search-container > .search-space > input {
  background-color: oklch(0.32 0.0651598 262.488);
  border-bottom-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: oklch(0.766742 0.0000382729 23.6907 / 0.5);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 2px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.8 0.217199 292.488 / 0.75);
  border-left-width: 4px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body a.internal.tag-link::before {
  color: oklch(0.8 0.217199 292.488 / 0.75);
}

body h1 {
  color: oklch(0.7 0.08 26.4069);
}

body h2 {
  color: oklch(0.7 0.08 64.0404);
}

body h2.page-title, h2.page-title a {
  color: oklch(0.7 0.08 26.4069);
}

body h3 {
  color: oklch(0.7 0.08 102.472);
}

body h4 {
  color: oklch(0.7 0.08 144.2);
}

body h5 {
  color: oklch(0.7 0.08 248.819);
}

body h6 {
  color: oklch(0.7 0.08 271.406);
}

body hr {
  border-bottom-color: oklch(0.18 0.0651598 322.488);
  border-left-color: oklch(0.18 0.0651598 322.488);
  border-right-color: oklch(0.18 0.0651598 322.488);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body ::-webkit-scrollbar {
  background: oklch(0.28 0.0651598 262.488) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.28 0.0651598 262.488);
}

body ::-webkit-scrollbar-corner {
  background: oklch(0.28 0.0651598 262.488) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.28 0.0651598 262.488);
}

body ::-webkit-scrollbar-thumb {
  background: oklch(0.28 0.0651598 262.488) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.28 0.0651598 262.488);
}

body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.28 0.0651598 262.488) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.28 0.0651598 262.488);
}

body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.28 0.0651598 262.488) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.28 0.0651598 262.488);
}

body ::-webkit-scrollbar-track {
  background: oklch(0.28 0.0651598 262.488) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.28 0.0651598 262.488);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.7 0.08 64.0404);
  font-weight: 700;
  text-decoration: oklch(0.7 0.08 64.0404);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.7 0.08 64.0404);
  font-weight: 700;
  text-decoration: oklch(0.7 0.08 64.0404);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  background-color: oklch(0.28 0.0651598 262.488);
  border-bottom-color: oklch(0.25 0.217199 292.488);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.217199 292.488);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.217199 292.488);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.217199 292.488);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: oklch(0.2 0.0651598 262.488);
  border-bottom-color: oklch(0.18 0.0651598 322.488);
  border-left-color: oklch(0.18 0.0651598 322.488);
  border-left-width: 0px;
  border-right-color: oklch(0.18 0.0651598 322.488);
  border-top-color: oklch(0.18 0.0651598 322.488);
  border-top-left-radius: 0px;
  border-top-width: 0px;
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li {
  background-color: oklch(0.7 0.08 64.0404 / 0.3);
  border-bottom-color: oklch(0.55 0.08 262.488 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: oklch(0.55 0.08 262.488 / 0.5);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: oklch(0.55 0.08 262.488 / 0.5);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: oklch(0.55 0.08 262.488 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}`,
    listPage: `body li.section-li {
  background-color: oklch(0.7 0.08 64.0404 / 0.3);
  border-bottom-color: oklch(0.55 0.08 262.488 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: oklch(0.55 0.08 262.488 / 0.5);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: oklch(0.55 0.08 262.488 / 0.5);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: oklch(0.55 0.08 262.488 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

body ul.section-ul {
  background-color: oklch(0.32 0.0651598 262.488);
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.28 0.0651598 262.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    darkmode: `body .darkmode {
  background-color: oklch(0.28 0.0651598 262.488);
  border-bottom-color: oklch(0.25 0.217199 292.488);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.217199 292.488);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.217199 292.488);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.217199 292.488);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  cursor: pointer;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    misc: `body .metadata {
  background-color: oklch(0.24 0.0651598 292.488 / 0.75);
  border-bottom-color: oklch(0.28 0.0651598 262.488);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.28 0.0651598 262.488);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.28 0.0651598 262.488);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.28 0.0651598 262.488);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  margin-bottom: 0px;
  padding-left: 8px;
  padding-right: 8px;
}

body .navigation-progress {
  background-color: oklch(0.2 0.0651598 262.488);
}

body input[type=text] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body kbd {
  background-color: oklch(0.1 0.0651598 292.488 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: oklch(0.888303 0.000044225 23.6802 / 0.25) 0px 0px 0px 1px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-1: oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30));
  --accent-2: oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330));
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-modifier-border: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h);
  --background-modifier-border-focus: oklch(
    from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) 70% c h
  );
  --background-modifier-error: oklch(
    from #d32f2f 50% 30% h
  );
  --background-modifier-error-hover: oklch(
    from #d32f2f 50% 30% h
  );
  --background-modifier-success: oklch(
    from #4caf50 50% 30% h
  );
  --background-paper: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  );
  --background-primary: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --background-primary-alt: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  );
  --background-secondary: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  );
  --background-secondary-alt: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  );
  --background-tertiary: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  );
  --base-accent: oklch(from rgb(153, 115, 247) l c h);
  --bases-cards-background: oklch(from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) 85% c h);
  --bases-cards-border-width: 4px;
  --bases-cards-cover-background: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  );
  --bases-cards-shadow: 0 0 0 1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h);
  --bases-embed-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h);
  --bases-embed-border-radius: 12px;
  --bases-table-border-color: oklch(from #222222 50% c h / 50%);
  --bases-table-cell-background-active: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --bases-table-cell-background-disabled: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  );
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(
    from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) 70% c h
  );
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247);
  --bases-table-container-border-radius: 8px;
  --bases-table-group-background: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  );
  --bases-table-header-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --bases-table-header-weight: 100;
  --bases-table-summary-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --blockquote-background-color: oklch(
    from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h / 40%
  );
  --blockquote-border-color: oklch(from oklch(from rgb(153, 115, 247) l c h) 50% c h / 75%);
  --blockquote-border-thickness: 4px;
  --blur-background: color-mix(in srgb, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) 65%, transparent) linear-gradient(oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ), color-mix(in srgb, oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) 65%, transparent));
  --bold-color: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) calc(50% - 15%) 30%
      calc(h + 100)
  );
  --bold-weight: 600;
  --border-groove: 4px groove oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 75% calc(c * 0.4) h
  );
  --border-ridge: 4px ridge oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --border-solid: 4px solid oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  );
  --box-shadow: inset -2px -2px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 50% c h),
    inset 2px 2px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 100% c h);
  --box-shadow-active: inset 2px 2px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 50% c h),
    inset -2px -2px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 100% c h);
  --box-shadow-active-sm: inset 1px 1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 50% c h),
    inset -1px -1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 100% c h);
  --box-shadow-sm: inset -1px -1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 50% c h),
    inset 1px 1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 100% c h);
  --button-active: oklch(from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  ) 85% c h);
  --button-border-radius: 8px;
  --button-hover: oklch(from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  ) l c h);
  --button-normal: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --button-radius: 12px;
  --button-text: #222222;
  --callout-border-width: 4px;
  --callout-radius: 12px;
  --callout-title-weight: 600;
  --canvas-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: #ababab;
  --checkbox-color: rgb(153, 115, 247);
  --checkbox-color-hover: rgb(166, 139, 249);
  --checkbox-marker-color: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  );
  --checkbox-radius: 12px;
  --chroma: 30%;
  --chroma-accent: 0.4;
  --chroma-folder: 30%;
  --clickable-icon-radius: 8px;
  --code-background: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) 85% c h / 50%);
  --code-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h);
  --code-function: oklch(
    from #ffeb3b 50% 30% h
  );
  --code-important: oklch(
    from #ff9800 50% 30% h
  );
  --code-operator: oklch(
    from #d32f2f 50% 30% h
  );
  --code-property: oklch(
    from #00bcd4 50% 30% h
  );
  --code-radius: 12px;
  --code-string: oklch(
    from #4caf50 50% 30% h
  );
  --code-tag: oklch(
    from #d32f2f 50% 30% h
  );
  --code-value: oklch(
    from #673ab7 50% 30% h
  );
  --collapse-icon-color-collapsed: rgb(138, 92, 245);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
  --color-amber: oklch(
    from #ffb300 50% 30% h
  );
  --color-blue: oklch(
    from #2196f3 50% 30% h
  );
  --color-cyan: oklch(
    from #00bcd4 50% 30% h
  );
  --color-green: oklch(
    from #4caf50 50% 30% h
  );
  --color-indigo: oklch(
    from #3f51b5 50% 30% h
  );
  --color-lime: oklch(
    from #8bc34a 50% 30% h
  );
  --color-magenta: oklch(
    from #e91e63 50% 30% h
  );
  --color-orange: oklch(
    from #ff9800 50% 30% h
  );
  --color-purple: oklch(
    from #673ab7 50% 30% h
  );
  --color-red: oklch(
    from #d32f2f 50% 30% h
  );
  --color-rose: oklch(
    from #f48fb1 50% 30% h
  );
  --color-teal: oklch(
    from #009688 50% 30% h
  );
  --color-vermillion: oklch(
    from #ff5722 50% 30% h
  );
  --color-violet: oklch(
    from #9c27b0 50% 30% h
  );
  --color-yellow: oklch(
    from #ffeb3b 50% 30% h
  );
  --divider-color: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  );
  --divider-color-hover: rgb(153, 115, 247);
  --divider-width: 0px;
  --embed-block-shadow-hover: 0 0 0 1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h), inset 0 0 0 1px oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h);
  --embed-border-start: 2px solid rgb(153, 115, 247);
  --file-header-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --file-header-background-focused: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  );
  --file-margins: 16px;
  --folder-accent-1: oklch(
    from #d32f2f 50% 30% h
  );
  --folder-accent-10: oklch(
    from #8bc34a 50% 30% h
  );
  --folder-accent-11: oklch(
    from #009688 50% 30% h
  );
  --folder-accent-12: oklch(
    from #673ab7 50% 30% h
  );
  --folder-accent-13: oklch(
    from #e91e63 50% 30% h
  );
  --folder-accent-14: oklch(
    from #f48fb1 50% 30% h
  );
  --folder-accent-15: oklch(
    from #00bcd4 50% 30% h
  );
  --folder-accent-2: oklch(
    from #ff9800 50% 30% h
  );
  --folder-color-3: oklch(
    from #ffeb3b 50% 30% h
  );
  --folder-color-4: oklch(
    from #4caf50 50% 30% h
  );
  --folder-color-5: oklch(
    from #2196f3 50% 30% h
  );
  --folder-color-6: oklch(
    from #3f51b5 50% 30% h
  );
  --folder-color-7: oklch(
    from #9c27b0 50% 30% h
  );
  --folder-color-8: oklch(
    from #ff5722 50% 30% h
  );
  --folder-color-9: oklch(
    from #ffb300 50% 30% h
  );
  --footnote-divider-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h);
  --footnote-radius: 8px;
  --graph-node-attachment: oklch(
    from #ffeb3b 50% 30% h
  );
  --graph-node-focused: rgb(138, 92, 245);
  --graph-node-tag: oklch(
    from #4caf50 50% 30% h
  );
  --h1-color: oklch(
    from #d32f2f 50% 30% h
  );
  --h2-color: oklch(
    from #ff9800 50% 30% h
  );
  --h3-color: oklch(
    from #ffeb3b 50% 30% h
  );
  --h4-color: oklch(
    from #4caf50 50% 30% h
  );
  --h5-color: oklch(
    from #2196f3 50% 30% h
  );
  --h6-color: oklch(
    from #3f51b5 50% 30% h
  );
  --header-height: 48px;
  --heading-spacing: 2.5rem;
  --hr-color: oklch(from #222222 l c h / 25%);
  --hue-amber: #ffb300;
  --hue-blue: #2196f3;
  --hue-cyan: #00bcd4;
  --hue-green: #4caf50;
  --hue-indigo: #3f51b5;
  --hue-lime: #8bc34a;
  --hue-magenta: #e91e63;
  --hue-orange: #ff9800;
  --hue-purple: #673ab7;
  --hue-red: #d32f2f;
  --hue-rose: #f48fb1;
  --hue-teal: #009688;
  --hue-vermillion: #ff5722;
  --hue-violet: #9c27b0;
  --hue-yellow: #ffeb3b;
  --icon-color-active: rgb(138, 92, 245);
  --img-border-color: oklch(from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) l 30% h);
  --img-border-radius: 0px;
  --img-border-width: 0px;
  --inline-title-color: oklch(
    from #d32f2f 50% 30% h
  );
  --input-border-width: 2px;
  --input-radius: 12px;
  --interactive-accent: rgb(153, 115, 247);
  --interactive-accent-hover: rgb(166, 139, 249);
  --interactive-active: oklch(from oklch(from rgb(153, 115, 247) l c h) 50% c h / 50%);
  --italic-color: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) calc(50% - 15%) 30%
      calc(h + 200)
  );
  --lightness: 50%;
  --link-color: oklch(
    from oklch(from rgb(153, 115, 247) l c h) 35% 30% h
  );
  --link-color-hover: oklch(
    from oklch(
    from oklch(from rgb(153, 115, 247) l c h) 35% 30% h
  ) 50% 30% h / 80%
  );
  --link-external-color: oklch(
    from #d32f2f 50% 30% h
  );
  --link-external-color-hover: oklch(
    from oklch(
    from #d32f2f 50% 30% h
  ) 50% 30% h / 80%
  );
  --link-unresolved-color: oklch(
    from oklch(
    from oklch(from rgb(153, 115, 247) l c h) 35% 30% h
  ) 50% 30% h / 60%
  );
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --link-weight: 700;
  --list-indent: 2.25em;
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --menu-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  );
  --metadata-background: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h / 75%);
  --metadata-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h);
  --metadata-border-radius: 12px;
  --metadata-divider-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h);
  --metadata-gap: 8px;
  --metadata-input-height: 28px;
  --metadata-label-background: oklch(
    from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) l c h / 15%
  );
  --metadata-label-background-active: oklch(
    from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) l c h / 30%
  );
  --metadata-label-background-hover: oklch(
    from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  ) l c h / 30%
  );
  --metadata-label-font-weight: 700;
  --metadata-label-width: 8em;
  --metadata-property-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  );
  --metadata-property-background-hover: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  );
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(
    from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  ) 70% c h
  );
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  );
  --metadata-property-radius: 12px;
  --metadata-property-radius-focus: 12px;
  --metadata-property-radius-hover: 12px;
  --mobile-sidebar-width: 100%;
  --modal-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --nav-indentation-guide-width: 2px;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --nav-item-radius: 8px;
  --nav-tag-color: #5c5c5c;
  --nav-tag-radius: 8px;
  --outline-color: oklch(from oklch(from rgb(153, 115, 247) l c h) 25% c h);
  --pdf-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --pdf-page-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --pdf-sidebar-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --pill-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h);
  --pill-color-remove-hover: rgb(138, 92, 245);
  --prompt-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --radius-s: 8px;
  --radius-xs: 8px;
  --radius-xxs: 8px;
  --ribbon-background: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  );
  --ribbon-background-collapsed: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  );
  --rotation-1: 30;
  --rotation-2: 330;
  --search-result-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --setting-items-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --setting-items-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h);
  --settings-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  );
  --sidebar-markdown-font-size: 14.4px;
  --slider-track-background: oklch(from oklch(from rgb(153, 115, 247) l c h) 50% c h / 50%);
  --slider-track-height: 6px;
  --status-bar-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 60% calc(c * 0.4) h
  );
  --status-bar-border-color: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  );
  --strong-emphasis: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) calc(50% - 15%) 30%
      calc(h + 200)
  );
  --suggestion-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --sync-avatar-color-1: oklch(
    from #d32f2f 50% 30% h
  );
  --sync-avatar-color-2: oklch(
    from #ff9800 50% 30% h
  );
  --sync-avatar-color-3: oklch(
    from #ffeb3b 50% 30% h
  );
  --sync-avatar-color-4: oklch(
    from #4caf50 50% 30% h
  );
  --sync-avatar-color-5: oklch(
    from #00bcd4 50% 30% h
  );
  --sync-avatar-color-6: oklch(
    from #2196f3 50% 30% h
  );
  --sync-avatar-color-7: oklch(
    from #673ab7 50% 30% h
  );
  --tab-background-active: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 93% calc(c * 0.4) h
  );
  --tab-container-background: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  );
  --tab-outline-color: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  );
  --tab-radius: 8px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-background: oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  );
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ), transparent);
  --tab-switcher-preview-radius: 12px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color-focused-highlighted: rgb(138, 92, 245);
  --table-add-button-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h);
  --table-border-color: oklch(from #222222 50% c h / 50%);
  --table-border-spacing: 2px;
  --table-data-background: oklch(from oklch(from rgb(153, 115, 247) l c h) l c h / 7%);
  --table-drag-handle-background-active: rgb(153, 115, 247);
  --table-header-background: oklch(from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 50% c h / 30%);
  --table-header-border-color: oklch(from #222222 50% c h / 50%);
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(153, 115, 247);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-border-width: 1px;
  --tag-color: oklch(from oklch(from rgb(153, 115, 247) l c h) 40% c h / 75%);
  --tag-color-hover: rgb(138, 92, 245);
  --tag-radius: 8px;
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(166, 139, 249);
  --text-error: oklch(
    from #d32f2f 50% 30% h
  );
  --text-highlight-bg: oklch(from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 80% 30% h / 75%);
  --text-selection: oklch(from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 80% 30% h / 75%);
  --text-success: oklch(
    from #4caf50 50% 30% h
  );
  --text-warning: oklch(
    from #ff9800 50% 30% h
  );
  --titlebar-background: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  );
  --titlebar-background-focused: oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 30)) 65% calc(c * 0.4) h
  );
  --titlebar-border-color: oklch(from oklch(
    from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) 80% calc(c * 0.4) h
  ) l c h);
  --titlebar-text-color-focused: oklch(from oklch(
    from oklch(from oklch(from hsl(calc(258 - 1), calc(88% * 1.01), calc(66% * 1.075)) l c h) l c calc(h + 330)) 98% calc(c * 0.4) h
  ) 100% c h);
  --touch-radius-m: 8px;
  --touch-radius-s: 8px;
  --touch-radius-xs: 8px;
  --touch-radius-xxs: 8px;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  --window-border-radius: 12px;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.8 0.0756825 293.56);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: oklch(0.93 0.0756825 263.56);
}

body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.93 0.0756825 263.56);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.65 0.0756825 323.56);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.8 0.0756825 293.56);
  border-left-color: oklch(0.65 0.0756825 323.56);
}

body div#quartz-root {
  background-color: oklch(0.93 0.0756825 263.56);
}`,
    typography: `body .page article p > b, b {
  color: oklch(0.35 0.12 33.5595);
  outline: oklch(0.35 0.12 33.5595) none 0px;
  text-decoration: oklch(0.35 0.12 33.5595);
  text-decoration-color: oklch(0.35 0.12 33.5595);
}

body .page article p > em, em {
  color: oklch(0.35 0.12 133.56);
  outline: oklch(0.35 0.12 133.56) none 0px;
  text-decoration: oklch(0.35 0.12 133.56);
  text-decoration-color: oklch(0.35 0.12 133.56);
}

body .page article p > i, i {
  color: oklch(0.35 0.12 133.56);
  outline: oklch(0.35 0.12 133.56) none 0px;
  text-decoration: oklch(0.35 0.12 133.56);
  text-decoration-color: oklch(0.35 0.12 133.56);
}

body .page article p > strong, strong {
  color: oklch(0.35 0.12 33.5595);
  outline: oklch(0.35 0.12 33.5595) none 0px;
  text-decoration: oklch(0.35 0.12 33.5595);
  text-decoration-color: oklch(0.35 0.12 33.5595);
}

body .text-highlight {
  background-color: oklch(0.8 0.12 323.56 / 0.75);
}`,
    links: `body a.external, footer a {
  color: oklch(0.5 0.12 26.4069);
  font-weight: 700;
  outline: oklch(0.5 0.12 26.4069) none 0px;
  text-decoration: underline oklch(0.5 0.12 26.4069);
  text-decoration-color: oklch(0.5 0.12 26.4069);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.35 0.12 293.56);
  font-weight: 700;
  outline: oklch(0.35 0.12 293.56) none 0px;
  text-decoration: underline oklch(0.35 0.12 293.56);
  text-decoration-color: oklch(0.35 0.12 293.56);
}

body a.internal.broken {
  color: oklch(0.5 0.12 293.56 / 0.6);
  font-weight: 700;
  outline: oklch(0.5 0.12 293.56 / 0.6) none 0px;
}`,
    lists: `body ol.overflow {
  background-color: oklch(0.93 0.0756825 263.56);
}

body ul.overflow {
  background-color: oklch(0.93 0.0756825 263.56);
}`,
    blockquotes: `body blockquote {
  background-color: oklch(0.8 0.0756825 293.56 / 0.4);
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `body table {
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756825 263.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  width: 240.219px;
}

body td {
  background-color: oklch(0.653757 0.189206 293.56 / 0.07);
  border-bottom-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-left-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-right-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-top-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
}

body th {
  border-bottom-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-left-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-right-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-top-color: oklch(0.5 0.0000125861 23.5148 / 0.5);
  border-top-left-radius: 12px;
}

body thead {
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-top-color: oklch(0.93 0.0756825 263.56);
}

body tr {
  background-color: oklch(0.5 0.189206 323.56 / 0.3);
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-top-color: oklch(0.93 0.0756825 263.56);
}`,
    code: `body code {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.85 0.0756825 293.56 / 0.5);
  border-bottom-color: oklch(0.8 0.0756825 293.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.8 0.0756825 293.56);
  border-right-color: oklch(0.8 0.0756825 293.56);
  border-top-color: oklch(0.8 0.0756825 293.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.85 0.0756825 293.56 / 0.5);
  border-bottom-color: oklch(0.8 0.0756825 293.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.8 0.0756825 293.56);
  border-right-color: oklch(0.8 0.0756825 293.56);
  border-top-color: oklch(0.8 0.0756825 293.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre > code > [data-line] {
  border-left-color: oklch(0.5 0.12 102.472);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: oklch(0.5 0.12 102.472);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: oklch(0.5 0.12 102.472);
  border-left-color: oklch(0.5 0.12 102.472);
  border-right-color: oklch(0.5 0.12 102.472);
  border-top-color: oklch(0.5 0.12 102.472);
}

body pre > code, pre:has(> code) {
  background-color: oklch(0.85 0.0756825 293.56 / 0.5);
  border-bottom-color: oklch(0.8 0.0756825 293.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.8 0.0756825 293.56);
  border-right-color: oklch(0.8 0.0756825 293.56);
  border-top-color: oklch(0.8 0.0756825 293.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre:has(> code) {
  background-color: oklch(0.85 0.0756825 293.56 / 0.5);
  border-bottom-color: oklch(0.8 0.0756825 293.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.8 0.0756825 293.56);
  border-right-color: oklch(0.8 0.0756825 293.56);
  border-top-color: oklch(0.8 0.0756825 293.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    embeds: `body .file-embed {
  background-color: oklch(0.75 0.0756825 293.56);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}`,
    search: `body .search > .search-button {
  background-color: oklch(0.98 0.0756825 263.56);
  border-bottom-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-left-width: 2px;
  border-right-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-right-width: 2px;
  border-top-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space {
  background-color: oklch(0.93 0.0756825 263.56);
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756825 263.56);
  border-top-style: ridge;
  border-top-width: 4px;
  box-shadow: oklch(0 0 0 / 0.4) 0px 0px 12px 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756825 263.56);
  border-top-style: ridge;
  border-top-width: 4px;
}

body .search > .search-container > .search-space > input {
  background-color: oklch(0.98 0.0756825 263.56);
  border-bottom-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: oklch(0.474759 0.0000235681 23.6314 / 0.5);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 2px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.4 0.189206 293.56 / 0.75);
  border-left-width: 4px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body a.internal.tag-link::before {
  color: oklch(0.4 0.189206 293.56 / 0.75);
}

body h1 {
  color: oklch(0.5 0.12 26.4069);
}

body h2 {
  color: oklch(0.5 0.12 64.0404);
}

body h2.page-title, h2.page-title a {
  color: oklch(0.5 0.12 26.4069);
}

body h3 {
  color: oklch(0.5 0.12 102.472);
}

body h4 {
  color: oklch(0.5 0.12 144.2);
}

body h5 {
  color: oklch(0.5 0.12 248.819);
}

body h6 {
  color: oklch(0.5 0.12 271.406);
}

body hr {
  border-bottom-color: oklch(0.65 0.0756825 323.56);
  border-left-color: oklch(0.65 0.0756825 323.56);
  border-right-color: oklch(0.65 0.0756825 323.56);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-right-width: 4px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 4px;
}

body ::-webkit-scrollbar {
  background: oklch(0.93 0.0756825 263.56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756825 263.56);
}

body ::-webkit-scrollbar-corner {
  background: oklch(0.93 0.0756825 263.56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756825 263.56);
}

body ::-webkit-scrollbar-thumb {
  background: oklch(0.93 0.0756825 263.56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756825 263.56);
}

body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.93 0.0756825 263.56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756825 263.56);
}

body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.93 0.0756825 263.56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756825 263.56);
}

body ::-webkit-scrollbar-track {
  background: oklch(0.93 0.0756825 263.56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.93 0.0756825 263.56);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.5 0.12 64.0404);
  font-weight: 700;
  text-decoration: oklch(0.5 0.12 64.0404);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.5 0.12 64.0404);
  font-weight: 700;
  text-decoration: oklch(0.5 0.12 64.0404);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  background-color: oklch(0.93 0.0756825 263.56);
  border-bottom-color: oklch(0.25 0.189206 293.56);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.189206 293.56);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.189206 293.56);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.189206 293.56);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: oklch(0.6 0.0756825 263.56);
  border-bottom-color: oklch(0.65 0.0756825 323.56);
  border-left-color: oklch(0.65 0.0756825 323.56);
  border-left-width: 0px;
  border-right-color: oklch(0.65 0.0756825 323.56);
  border-top-color: oklch(0.65 0.0756825 323.56);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: oklch(1 0.0756825 263.56);
}

body footer ul li a {
  color: oklch(1 0.0756825 263.56);
  text-decoration: oklch(1 0.0756825 263.56);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li {
  background-color: oklch(0.5 0.12 64.0404 / 0.3);
  border-bottom-color: oklch(0.55 0.12 263.56 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: oklch(0.55 0.12 263.56 / 0.5);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: oklch(0.55 0.12 263.56 / 0.5);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: oklch(0.55 0.12 263.56 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}`,
    listPage: `body li.section-li {
  background-color: oklch(0.5 0.12 64.0404 / 0.3);
  border-bottom-color: oklch(0.55 0.12 263.56 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: oklch(0.55 0.12 263.56 / 0.5);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: oklch(0.55 0.12 263.56 / 0.5);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: oklch(0.55 0.12 263.56 / 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

body ul.section-ul {
  background-color: oklch(0.98 0.0756825 263.56);
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756825 263.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
}`,
    darkmode: `body .darkmode {
  background-color: oklch(0.93 0.0756825 263.56);
  border-bottom-color: oklch(0.25 0.189206 293.56);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: oklch(0.25 0.189206 293.56);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: oklch(0.25 0.189206 293.56);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: oklch(0.25 0.189206 293.56);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  cursor: pointer;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    misc: `body .metadata {
  background-color: oklch(0.8 0.0756825 293.56 / 0.75);
  border-bottom-color: oklch(0.93 0.0756825 263.56);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: ridge;
  border-bottom-width: 4px;
  border-left-color: oklch(0.93 0.0756825 263.56);
  border-left-style: ridge;
  border-left-width: 4px;
  border-right-color: oklch(0.93 0.0756825 263.56);
  border-right-style: ridge;
  border-right-width: 4px;
  border-top-color: oklch(0.93 0.0756825 263.56);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: ridge;
  border-top-width: 4px;
  margin-bottom: 0px;
  padding-left: 8px;
  padding-right: 8px;
}

body .navigation-progress {
  background-color: oklch(0.6 0.0756825 263.56);
}

body input[type=text] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body kbd {
  background-color: oklch(0.85 0.0756825 293.56 / 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: oklch(0.251961 0.0000125861 23.5148 / 0.25) 0px 0px 0px 1px;
}`,
  },
};
