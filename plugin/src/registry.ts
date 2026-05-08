import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { ThemeData, ThemeMeta } from "./types";
import { themeMetas } from "./themes/_registry";

const __dirname = dirname(fileURLToPath(import.meta.url));
const themesDir = resolve(__dirname, "themes");

// Cache loaded themes to avoid re-reading from disk
const themeCache = new Map<string, ThemeData>();

export function resolveThemeId(theme: string, variation?: string): string {
  if (variation) {
    const variantId = `${theme}.${variation}`;
    if (variantId in themeMetas) return variantId;
  }
  if (theme in themeMetas) return theme;
  throw new Error(
    `[QuartzTheme] Unknown theme: "${theme}"${variation ? ` (variation: "${variation}")` : ""}. ` +
      `Available themes: ${Object.keys(themeMetas).join(", ")}`,
  );
}

export function loadTheme(themeId: string): ThemeData {
  const cached = themeCache.get(themeId);
  if (cached) return cached;

  if (!(themeId in themeMetas)) {
    throw new Error(`[QuartzTheme] No theme data for "${themeId}".`);
  }

  const fileName = themeId.replace(/[^a-zA-Z0-9-_]/g, "-") + ".json";
  const filePath = resolve(themesDir, fileName);

  try {
    const raw = readFileSync(filePath, "utf8");
    const theme: ThemeData = JSON.parse(raw);
    themeCache.set(themeId, theme);
    return theme;
  } catch (err) {
    throw new Error(
      `[QuartzTheme] Failed to load theme "${themeId}" from ${filePath}: ${err}`,
    );
  }
}

export function getThemeMeta(themeId: string): ThemeMeta | undefined {
  return themeMetas[themeId];
}

export function getAvailableThemes(): string[] {
  return Object.keys(themeMetas);
}

export function registerTheme(
  id: string,
  meta: ThemeMeta,
  loader: () => Promise<{ theme: ThemeData }>,
): void {
  loader().then((mod) => {
    themeCache.set(id, mod.theme);
  });
  themeMetas[id] = meta;
}
