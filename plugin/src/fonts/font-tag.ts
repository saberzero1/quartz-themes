/**
 * jsDelivr tag used to serve font files from the quartz-themes repository.
 * This MUST match an existing git tag in https://github.com/saberzero1/quartz-themes
 *
 * Bump this value when releasing a new version that includes font changes.
 * The tag and plugin version are implicitly tied — they release together.
 */
export const FONT_TAG = "v4.0.11";

/** Base URL for font files served via jsDelivr. */
export const FONT_BASE_URL =
  `https://cdn.jsdelivr.net/gh/saberzero1/quartz-themes@${FONT_TAG}/fonts` as const;
