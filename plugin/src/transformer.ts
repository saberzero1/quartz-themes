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
 * Font variable names to extract for inter-plugin communication.
 * Includes both the resolved font stacks (--font-text, etc.) and
 * the theme-specific slots (--font-text-theme, etc.) so downstream
 * consumers can identify the actual font families the theme uses.
 */
const FONT_VAR_NAMES = [
  "--font-text",
  "--font-text-theme",
  "--font-interface",
  "--font-interface-theme",
  "--font-monospace",
  "--font-monospace-theme",
  "--h1-font",
  "--h2-font",
  "--h3-font",
  "--h4-font",
  "--h5-font",
  "--h6-font",
] as const;

function extractFontVars(css: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const varName of FONT_VAR_NAMES) {
    const pattern = new RegExp(
      `${varName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*:\\s*([^;]+)`,
    );
    const match = css.match(pattern);
    if (match?.[1]) {
      const value = match[1].trim();
      if (value && !value.startsWith("var(") && value !== "inherit") {
        result[varName] = value;
      }
    }
  }
  return result;
}

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

  let cssResources: CSSResource[] | undefined;
  let jsResources: JSResource[] | undefined;

  function buildResources(): { css: CSSResource[]; js: JSResource[] } {
    if (cssResources && jsResources)
      return { css: cssResources, js: jsResources };

    const css: CSSResource[] = [];
    const js: JSResource[] = [];

    const {
      css: resolvedCSS,
      effectiveMode,
      styleSettingsId,
      classSettings,
      brokenVarLinks,
      themeMeta,
    } = composeCSS(options);

    if (resolvedCSS && themeMeta) {
      const fontVars = extractFontVars(resolvedCSS);
      (globalThis as Record<string, unknown>).__quartzFonts = {
        themeName: options.theme,
        fonts: fontVars,
        fontFiles: themeMeta.fontFiles,
        fontDir: themeMeta.fontDir,
      };
    }

    const isSingleMode = effectiveMode !== "both";

    if (resolvedCSS) {
      css.push({
        content:
          `@layer quartz-base, obsidian-theme, quartz-themes-base, obsidian-theme-overrides;\n` +
          `@layer obsidian-theme {\n${resolvedCSS}\n}`,
        inline: true,
      });

      css.push({
        content: `@layer quartz-themes-base {\n${TEMPLATE_OVERRIDE_CSS}\n}`,
        inline: true,
      });
    }

    if (isSingleMode) {
      css.push({
        content:
          `button.darkmode { display: none !important; }\n` +
          `:root { color-scheme: ${effectiveMode}; }\n`,
        inline: true,
      });

      js.push({
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
          brokenVarLinks,
        );

        if (overrideCSS) {
          css.push({
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

    cssResources = css;
    jsResources = js;
    return { css, js };
  }

  return {
    name: "QuartzTheme",
    textTransform(_ctx, src) {
      return src;
    },
    externalResources() {
      const { css, js } = buildResources();
      return { css, js, additionalHead: [] };
    },
  };
};
