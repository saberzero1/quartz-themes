import { CALLOUT_ICON_URIS, CALLOUT_ALIASES } from "./generated.js";

export function generateCalloutIconCSS(): string {
  const iconVars = Object.entries(CALLOUT_ICON_URIS)
    .map(([type, uri]) => `  --callout-icon-${type}: ${uri};`)
    .join("\n");

  const typeSelectors = Object.entries(CALLOUT_ICON_URIS)
    .map(
      ([type]) =>
        `  &[data-callout="${type}"] { --callout-icon: var(--callout-icon-${type}); }`,
    )
    .join("\n");

  const aliasSelectors = Object.entries(CALLOUT_ALIASES)
    .map(
      ([alias, canonical]) =>
        `  &[data-callout="${alias}"] { --callout-icon: var(--callout-icon-${canonical}); }`,
    )
    .join("\n");

  return `.callout {\n${iconVars}\n\n  &[data-callout] { --callout-icon: var(--callout-icon-note); }\n${typeSelectors}\n${aliasSelectors}\n}`;
}

export function resolveCalloutIcon(calloutType: string): string | undefined {
  const canonical = CALLOUT_ALIASES[calloutType] ?? calloutType;
  return CALLOUT_ICON_URIS[canonical];
}

export { CALLOUT_ICON_URIS as CALLOUT_ICON_MAP, CALLOUT_ALIASES };
