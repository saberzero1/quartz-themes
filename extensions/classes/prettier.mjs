import prettier from "@prettier/sync";

const options = {
  printWidth: 80,
  quoteProps: "as-needed",
  trailingComma: "all",
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  objectWrap: "collapse",
  editorconfig: true,
};

export default class {
  constructor() {}

  format(code, language) {
    switch (language.toLowerCase()) {
      case "css":
        return prettier.format(code, { ...options, parser: "css" });
      case "scss":
        return prettier.format(code, { ...options, parser: "scss" });
      case "json":
        return prettier.format(code, { ...options, parser: "json" });
      case "html":
        return prettier.format(code, { ...options, parser: "html" });
      case "javascript":
        return prettier.format(code, { ...options, parser: "babel" });
      case "markdown":
        return prettier.format(code, { ...options, parser: "markdown" });
      default:
        throw new Error(`Unsupported language: ${language}`);
    }
  }

  check(code, language) {
    switch (language.toLowerCase()) {
      case "css":
        return prettier.check(code, { ...options, parser: "css" });
      case "scss":
        return prettier.check(code, { ...options, parser: "scss" });
      case "json":
        return prettier.check(code, { ...options, parser: "json" });
      case "html":
        return prettier.check(code, { ...options, parser: "html" });
      case "javascript":
        return prettier.check(code, { ...options, parser: "babel" });
      case "markdown":
        return prettier.check(code, { ...options, parser: "markdown" });
      default:
        throw new Error(`Unsupported language: ${language}`);
    }
  }
}
