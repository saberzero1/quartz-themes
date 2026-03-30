import { CHECKBOX_ICON_URIS } from "./generated.js";

const DEFAULT_CHECKBOX_ICON =
  "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E\")";

export function generateCheckboxIconCSS(): string {
  // Only x/X get strikethrough — other custom checkboxes (!, ?, * etc.) keep normal text
  const strikethrough =
    `li.task-list-item.is-checked {\n` +
    `  text-decoration: none;\n` +
    `}\n\n` +
    `li.task-list-item[data-task="x"],\n` +
    `li.task-list-item[data-task="X"] {\n` +
    `  text-decoration: line-through;\n` +
    `  color: var(--text-faint, var(--gray, #b8b8b8));\n` +
    `}`;

  return strikethrough;
}

export function generateCheckboxInputBaseCSS(): string {
  return (
    `li.task-list-item.is-checked input[type="checkbox"] {\n` +
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
    `}\n\n` +
    `li.task-list-item.is-checked {\n` +
    `  color: inherit;\n` +
    `}\n\n` +
    `li.task-list-item.is-checked input[type="checkbox"] {\n` +
    `  color: inherit;\n` +
    `}`
  );
}

export function resolveCheckboxIcon(taskChar: string): string | undefined {
  return CHECKBOX_ICON_URIS[taskChar];
}

export { CHECKBOX_ICON_URIS as CHECKBOX_ICON_MAP };
