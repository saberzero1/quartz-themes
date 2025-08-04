import Formatter from "./classes/prettier.mjs";

const formatter = new Formatter();
export function format(code, language, silent = false) {
  try {
    return formatter.format(code, language);
  } catch (error) {
    if (!silent) {
      console.error(`Error formatting code: ${error.message}`);
      console.error(`This function was called by: ${new Error().stack}`);
    }
    return code; // Return original code if formatting fails
  }
}
export function check(code, language) {
  try {
    return formatter.check(code, language);
  } catch (error) {
    console.error(`Error checking code: ${error.message}`);
    return false; // Return false if check fails
  }
}
export function checkAndFormat(code, language) {
  if (check(code, language)) {
    return format(code, language);
  } else {
    console.warn("Code does not conform to formatting standards.");
    return code; // Return original code if check fails
  }
}
