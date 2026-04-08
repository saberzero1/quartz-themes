import { CHECKBOX_ICON_URIS } from "./generated.js";

export function generateCheckboxIconCSS(): string {
  // Specificity (0,3,4) override — exclude x/X which keep strikethrough
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
    `\n\nbody .page article li.task-list-item[data-task="x"],\n` +
    `body .page article li.task-list-item[data-task="X"] {\n` +
    `  text-decoration: line-through;\n` +
    `  text-decoration-color: var(--checkbox-color, var(--secondary));\n` +
    `  color: var(--checkbox-color, var(--secondary));\n` +
    `}`;

  const bgReset =
    `\n\nbody .page article input[type="checkbox"]:not(:checked),\n` +
    `body .page article li.task-list-item[data-task=" "] input[type="checkbox"]{\n` +
    `  background-color: transparent !important;\n` +
    `}`;

  return resetChecked + checkedTaskStyle + bgReset;
}

export function resolveCheckboxIcon(taskChar: string): string | undefined {
  return CHECKBOX_ICON_URIS[taskChar];
}

export { CHECKBOX_ICON_URIS as CHECKBOX_ICON_MAP };
