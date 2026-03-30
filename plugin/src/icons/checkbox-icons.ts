import { CHECKBOX_ICON_URIS } from "./generated.js";

export function generateCheckboxIconCSS(): string {
  // Override Quartz's `.page article li:has(> input:checked) { text-decoration: line-through }`
  // which has specificity (0,3,3). We use `body .page article li...` for (0,3,4).
  const strikethrough =
    `body .page article li.task-list-item.is-checked {\n` +
    `  text-decoration: none;\n` +
    `}\n\n` +
    `body .page article li.task-list-item[data-task="x"],\n` +
    `body .page article li.task-list-item[data-task="X"] {\n` +
    `  text-decoration: line-through;\n` +
    `  color: var(--text-faint, var(--gray, #b8b8b8));\n` +
    `}`;

  return strikethrough;
}

export function resolveCheckboxIcon(taskChar: string): string | undefined {
  return CHECKBOX_ICON_URIS[taskChar];
}

export { CHECKBOX_ICON_URIS as CHECKBOX_ICON_MAP };
