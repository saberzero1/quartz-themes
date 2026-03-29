import { CHECKBOX_ICON_URIS } from "./generated.js";

const DEFAULT_CHECKBOX_ICON =
  "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E\")";

export function generateCheckboxIconCSS(): string {
  const base =
    `li.task-list-item[data-task] input[type="checkbox"] {\n` +
    `  appearance: none;\n` +
    `  -webkit-appearance: none;\n` +
    `  width: 1em;\n` +
    `  height: 1em;\n` +
    `  display: inline-block;\n` +
    `  vertical-align: middle;\n` +
    `  background-color: currentColor;\n` +
    `  mask-image: ${DEFAULT_CHECKBOX_ICON};\n` +
    `  -webkit-mask-image: ${DEFAULT_CHECKBOX_ICON};\n` +
    `  mask-size: contain;\n` +
    `  -webkit-mask-size: contain;\n` +
    `  mask-repeat: no-repeat;\n` +
    `  -webkit-mask-repeat: no-repeat;\n` +
    `}`;

  const perChar = Object.entries(CHECKBOX_ICON_URIS)
    .map(
      ([char, uri]) =>
        `li.task-list-item[data-task="${char}"] input[type="checkbox"] {\n` +
        `  mask-image: ${uri};\n` +
        `  -webkit-mask-image: ${uri};\n` +
        `}`,
    )
    .join("\n\n");

  return base + "\n\n" + perChar;
}

export function resolveCheckboxIcon(taskChar: string): string | undefined {
  return CHECKBOX_ICON_URIS[taskChar];
}

export { CHECKBOX_ICON_URIS as CHECKBOX_ICON_MAP };
