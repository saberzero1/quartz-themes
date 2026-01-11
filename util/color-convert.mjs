import postcss from "postcss"
import colorConverter from "postcss-color-converter"

export default function convertColors(css) {
  const result = postcss()
  .use(colorConverter({ outputColorFormat: 'hex' }))
  .process(css)
  .css

  return result;
}
