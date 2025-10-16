---
tags:
  - "#tags"
  - "#sub/tags"
---

Text text [[https://example.com|external link]] text [[callouts|internal link]] text [external](https://example.com) text **bold text** text *italic text* text ***bold and italic text*** text ==highlighted text== text ~~strikethrough text~~ text.[^1]

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
<div class="suggestion-item mod-complex is-selected"><div class="suggestion-content"><div class="suggestion-title"><span class="suggestion-prefix">Graph view</span><span>Open graph view</span></div></div><div class="suggestion-aux"><kbd class="suggestion-hotkey">⌘ G</kbd></div></div>

<div class="modal-container mod-dim"><div class="prompt"><div class="prompt-input-container"><input class="prompt-input" autocapitalize="off" spellcheck="false" enterkeyhint="done" type="text" placeholder="Select a command..."><div class="prompt-input-cta"></div><div class="search-input-clear-button"></div></div><div class="prompt-results"><div class="suggestion-item mod-complex"><div class="suggestion-content"><div class="suggestion-title"><span class="suggestion-prefix"><span class="suggestion-highlight">Dataview</span></span><span>Rebuild current view</span></div></div><div class="suggestion-aux"></div></div><div class="suggestion-item mod-complex"><div class="suggestion-content"><div class="suggestion-title"><span class="suggestion-prefix"><span class="suggestion-highlight">Dataview</span></span><span>Drop all cached file metadata</span></div></div><div class="suggestion-aux"></div></div><div class="suggestion-item mod-complex is-selected"><div class="suggestion-content"><div class="suggestion-title"><span class="suggestion-prefix"><span class="suggestion-highlight">Dataview</span></span><span>Force refresh all views and blocks</span></div></div><div class="suggestion-aux"></div></div></div><div class="prompt-instructions"><div class="prompt-instruction"><span class="prompt-instruction-command">↑↓</span><span>to navigate</span></div><div class="prompt-instruction"><span class="prompt-instruction-command">↵</span><span>to use</span></div><div class="prompt-instruction"><span class="prompt-instruction-command">esc</span><span>to dismiss</span></div></div></div></div>

<div class="quartz-icon-selector" style="--quartz-icon-color:var(--icon-color);">icon colors</div>

[^1]: footnote text
