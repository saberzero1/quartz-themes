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
