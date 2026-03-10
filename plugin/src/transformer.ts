/**
 * QuartzTheme — Transformer plugin that injects Obsidian theme CSS into Quartz sites.
 *
 * This is a pure transformer: no component needed. CSS is injected via externalResources()
 * and Quartz's built-in Darkmode() component handles light/dark switching via
 * :root.dark / :root.light CSS class toggles.
 */

import type { QuartzTransformerPlugin } from "@quartz-community/types";
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

  const resolvedCSS = composeCSS(options);

  return {
    name: "QuartzTheme",
    textTransform(_ctx, src) {
      return src;
    },
    externalResources() {
      return {
        css: resolvedCSS ? [{ content: resolvedCSS, inline: true }] : [],
        js: [],
        additionalHead: [],
      };
    },
  };
};
