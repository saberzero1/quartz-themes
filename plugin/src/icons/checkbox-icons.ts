import { CHECKBOX_ICON_URIS } from "./generated.js";

export function generateCheckboxIconCSS(): string {
  const resetChecked =
    `body .page article li:has(> input[type="checkbox"]:checked):not([data-task="x"]):not([data-task="X"]) {\n` +
    `  text-decoration: none;\n` +
    `  color: inherit;\n` +
    `}\n\n` +
    `body .page article li.task-list-item.is-checked:not([data-task="x"]):not([data-task="X"]) {\n` +
    `  text-decoration: none;\n` +
    `  color: inherit;\n` +
    `}`;

  const checkedTaskStyle =
    `body .page article li.task-list-item[data-task="x"],\n` +
    `body .page article li.task-list-item[data-task="X"] {\n` +
    `  text-decoration: line-through;\n` +
    `  text-decoration-color: var(--checkbox-color, var(--secondary));\n` +
    `  color: var(--checkbox-color, var(--secondary));\n` +
    `}`;

  return [resetChecked, checkedTaskStyle].join("\n\n");
}

export function resolveCheckboxIcon(taskChar: string): string | undefined {
  return CHECKBOX_ICON_URIS[taskChar];
}

export { CHECKBOX_ICON_URIS as CHECKBOX_ICON_MAP };
