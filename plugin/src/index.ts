export { QuartzTheme } from "./transformer";

export type {
  ThemeOptions,
  ThemeData,
  ThemeMeta,
  AspectKey,
  AspectCSS,
  ThemeModule,
} from "./types";

export {
  resolveThemeId,
  loadTheme,
  getThemeMeta,
  getAvailableThemes,
  registerTheme,
} from "./registry";

// Re-export Quartz types for consumer convenience
export type {
  QuartzTransformerPlugin,
  StaticResources,
} from "@quartz-community/types";
