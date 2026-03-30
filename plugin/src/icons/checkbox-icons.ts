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

  // Reset strikethrough for all custom checkboxes — only x/X should be struck through.
  // In Quartz, all non-empty data-task items get is-checked, but only x/X are actual completions.
  const strikethrough =
    `li.task-list-item.is-checked {\n` +
    `  text-decoration: none;\n` +
    `  color: inherit;\n` +
    `}\n\n` +
    `li.task-list-item[data-task="x"],\n` +
    `li.task-list-item[data-task="X"] {\n` +
    `  text-decoration: line-through;\n` +
    `  color: var(--text-faint, var(--gray, #b8b8b8));\n` +
    `}`;

  // Ensure checkbox icon color inherits from the li wrapper (theme CSS sets color on li[data-task="X"]).
  // The input inherits color from the li, and background-color: currentColor in the base rule
  // uses that inherited color for the mask-image icon.
  const colorInherit =
    `li.task-list-item[data-task] {\n` +
    `  color: inherit;\n` +
    `}\n\n` +
    `li.task-list-item[data-task] input[type="checkbox"] {\n` +
    `  color: inherit;\n` +
    `}`;

  return [base, colorInherit, strikethrough, perChar].join("\n\n");
}

export function resolveCheckboxIcon(taskChar: string): string | undefined {
  return CHECKBOX_ICON_URIS[taskChar];
}

export { CHECKBOX_ICON_URIS as CHECKBOX_ICON_MAP };
