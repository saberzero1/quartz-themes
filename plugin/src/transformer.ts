/**
 * QuartzTheme — Transformer plugin that injects Obsidian theme CSS into Quartz sites.
 *
 * This is a pure transformer: no component needed. CSS is injected via externalResources()
 * and Quartz's built-in Darkmode() component handles light/dark switching via
 * :root.dark / :root.light CSS class toggles.
 */

import type {
  QuartzTransformerPlugin,
  JSResource,
  CSSResource,
} from "@quartz-community/types";
import type { ThemeOptions } from "./types";
import { composeCSS } from "./composer";
import { processStyleSettings, loadStyleSettings } from "./styleSettings";
import { TEMPLATE_OVERRIDE_CSS } from "./templateCSS";

const defaultOptions: ThemeOptions = { theme: "tokyo-night", mode: "both" };

/**
 * QuartzTheme transformer plugin.
 *
 * @example
 * ```ts
 * // Basic usage
 * QuartzTheme({ theme: "tokyo-night", mode: "both" })
 *
 * // With variation
 * QuartzTheme({ theme: "catppuccin", variation: "frappe", mode: "both" })
 *
 * // Mix-and-match aspects
 * QuartzTheme({
 *   theme: "tokyo-night",
 *   mode: "both",
 *   aspects: {
 *     callouts: "anuppuccin",
 *     tables: "minimal",
 *     code: false,
 *   },
 * })
 * ```
 */
export const QuartzTheme: QuartzTransformerPlugin<Partial<ThemeOptions>> = (
  userOptions?: Partial<ThemeOptions>,
) => {
  const options: ThemeOptions = { ...defaultOptions, ...userOptions };

  const {
    css: resolvedCSS,
    effectiveMode,
    styleSettingsId,
    classSettings,
  } = composeCSS(options);

  const isSingleMode = effectiveMode !== "both";

  const cssResources: CSSResource[] = [];
  const jsResources: JSResource[] = [];

  if (resolvedCSS) {
    cssResources.push({
      content:
        `@layer quartz-base, obsidian-theme, quartz-themes-base, obsidian-theme-overrides;\n` +
        `@layer obsidian-theme {\n${resolvedCSS}\n}`,
      inline: true,
    });

    cssResources.push({
      content: `@layer quartz-themes-base {\n${TEMPLATE_OVERRIDE_CSS}\n}`,
      inline: true,
    });
  }

  if (isSingleMode) {
    cssResources.push({
      content:
        `button.darkmode { display: none !important; }\n` +
        `:root { color-scheme: ${effectiveMode}; }\n`,
      inline: true,
    });

    jsResources.push({
      loadTime: "beforeDOMReady",
      contentType: "inline",
      script:
        `document.documentElement.setAttribute("saved-theme", "${effectiveMode}");\n` +
        `localStorage.setItem("theme", "${effectiveMode}");`,
    });
  }

  if (options.styleSettings) {
    if (
      styleSettingsId &&
      (!Array.isArray(styleSettingsId) || styleSettingsId.length > 0)
    ) {
      const settings = loadStyleSettings(options.styleSettings);
      const { css: overrideCSS } = processStyleSettings(
        settings,
        styleSettingsId,
        classSettings,
      );

      if (overrideCSS) {
        cssResources.push({
          content: `@layer obsidian-theme-overrides {\n${overrideCSS}\n}`,
          inline: true,
        });
      }
    } else {
      console.warn(
        `[QuartzTheme] styleSettings provided but theme "${options.theme}" has no Style Settings id. ` +
          `Style Settings overrides will be ignored.`,
      );
    }
  }

  return {
    name: "QuartzTheme",
    textTransform(_ctx, src) {
      return src;
    },
    externalResources() {
      return { css: cssResources, js: jsResources, additionalHead: [] };
    },
  };
};
