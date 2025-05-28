import { getValueFromDictionary, readJsonFileAsDictionary, getCurrentFolder } from "./util/util.mjs"

export const themes = getValueFromDictionary(
  readJsonFileAsDictionary(getCurrentFolder(), "themes.json"),
  "themes",
)
