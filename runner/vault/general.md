---
tags:
  - "#tags"
  - "#sub/tags"
---

Text text [[https://example.com|external link]] text [[callouts|internal link]] text **bold text** text *italic text* text ***bold and italic text*** text ==highlighted text== text ~~strikethrough text~~ text.[^1]

---
> blockquote text

- text
- text
- text

1. text
2. text
3. text

text `inline code text` text

```
code block text
```

```js
console.log("code block text with language");
```

- [ ] unchecked text
- [x] checkex text
- [?] question text
- [>] greater than text

```dataviewjs
function renderGraph() {
  const search = document.querySelector(".search-input-container.global-search-input-container");
  if (search) {
    return search.innerHTML;
  } else {
    setTimeout(renderGraph(), 100);
  }
}
let result = renderGraph();
dv.span(result);
```

[^1]: footnote text
