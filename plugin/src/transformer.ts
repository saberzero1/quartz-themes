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

  const { css: resolvedCSS, effectiveMode } = composeCSS(options);

  const isSingleMode = effectiveMode !== "both";

  const cssResources: CSSResource[] = [];
  const jsResources: JSResource[] = [];

  if (resolvedCSS) {
    cssResources.push({ content: resolvedCSS, inline: true });
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
