export { QuartzTheme } from "./transformer";
export { QuartzTheme as QuartzThemes } from "./transformer";
export { QuartzTheme as quartzThemes } from "./transformer";
export { QuartzTheme as transformer } from "./transformer";
export { QuartzTheme as default } from "./transformer";

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

export type {
  QuartzTransformerPlugin,
  StaticResources,
} from "@quartz-community/types";
