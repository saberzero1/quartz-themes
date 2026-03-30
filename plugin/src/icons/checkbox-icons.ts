import { CHECKBOX_ICON_URIS } from "./generated.js";

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

export function resolveCheckboxIcon(taskChar: string): string | undefined {
  return CHECKBOX_ICON_URIS[taskChar];
}

export { CHECKBOX_ICON_URIS as CHECKBOX_ICON_MAP };
