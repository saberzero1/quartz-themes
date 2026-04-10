---
cssclass: source
---

# Syntax Highlighting Samples

## JavaScript

```javascript
// Single-line comment
/* Multi-line comment */
const keyword = "string literal";
let variable = 'another string';
function functionName(param, defaultVal = 42) {
  return param.property + defaultVal;
}
class ClassName extends BaseClass {
  #privateField = true;
  constructor() {
    super();
    this.value = null;
  }
  async method() {
    const result = await fetch('/api');
    if (result.ok && !result.error) {
      console.log(`template ${literal}`);
    }
  }
}
import { named } from 'package';
export default ClassName;
const regex = /pattern/gi;
const num = 3.14e-10;
const bool = true;
const nil = null;
const undef = undefined;
const arr = [1, 2, 3];
const obj = { key: "value" };
```

## Python

```python
# Comment
"""Docstring"""
import os
from pathlib import Path

def function_name(param: str, count: int = 0) -> bool:
    variable = "string"
    number = 42
    result = variable.upper() + str(number)
    return len(result) > count

class ClassName(BaseClass):
    class_var: str = "default"

    def __init__(self, value: int):
        super().__init__()
        self.value = value
        self._private = None

    @property
    def computed(self) -> float:
        return self.value * 3.14

    @staticmethod
    def static_method():
        pass

for i in range(10):
    if i % 2 == 0:
        print(f"even: {i}")
    elif i > 7:
        break
    else:
        continue

try:
    raise ValueError("error message")
except (TypeError, ValueError) as e:
    print(e)
finally:
    pass

lambda x: x * 2
[x for x in range(5) if x > 2]
{k: v for k, v in enumerate("abc")}
```

## TypeScript

```typescript
// Types and interfaces
interface Config {
  readonly name: string;
  value: number | null;
  optional?: boolean;
}

type Result<T> = {
  data: T;
  error?: Error;
};

enum Status {
  Active = "active",
  Inactive = "inactive",
}

const generic = <T extends Config>(input: T): Result<T> => {
  return { data: input };
};

async function* asyncGenerator(): AsyncGenerator<number> {
  yield 1;
  yield 2;
}
```

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="container" id="main" data-theme="dark">
  <h1>Heading</h1>
  <p>Paragraph with <strong>bold</strong> and <em>italic</em>.</p>
  <a href="https://example.com" target="_blank">Link</a>
  <img src="image.png" alt="Description" />
  <!-- Comment -->
  <script src="app.js" defer></script>
</body>
</html>
```

## CSS

```css
/* Comment */
:root {
  --primary: #ff7b72;
  --spacing: 1rem;
}

.selector,
#id-selector,
element[attr="value"] {
  color: var(--primary);
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  margin: 0 auto;
  display: flex;
  transition: all 0.3s ease;
}

.parent > .child:hover::before {
  content: "text";
  opacity: 0.8;
}

@media (max-width: 768px) {
  .responsive {
    flex-direction: column;
  }
}

@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## Rust

```rust
// Comment
use std::collections::HashMap;

#[derive(Debug, Clone)]
struct Config {
    name: String,
    value: i64,
    active: bool,
}

impl Config {
    fn new(name: &str) -> Self {
        Self {
            name: name.to_string(),
            value: 0,
            active: true,
        }
    }

    fn process(&self) -> Result<String, Box<dyn std::error::Error>> {
        let mut map: HashMap<&str, i64> = HashMap::new();
        map.insert("key", self.value);

        match self.value {
            0 => Ok("zero".to_string()),
            1..=10 => Ok(format!("small: {}", self.value)),
            _ => Err("too large".into()),
        }
    }
}

fn main() {
    let config = Config::new("test");
    let numbers: Vec<i64> = (0..10).filter(|x| x % 2 == 0).collect();
    println!("{:?} {:?}", config, numbers);
}
```

## JSON

```json
{
  "string": "value",
  "number": 42,
  "float": 3.14,
  "boolean": true,
  "null": null,
  "array": [1, "two", false],
  "object": {
    "nested": "value"
  }
}
```

## Shell

```bash
#!/bin/bash
# Comment
VARIABLE="value"
readonly CONSTANT=42

function greet() {
  local name="${1:-World}"
  echo "Hello, ${name}!"
  return 0
}

if [[ -f "$FILE" ]]; then
  cat "$FILE" | grep -E "pattern" | sort -u
elif [[ -d "$DIR" ]]; then
  find "$DIR" -name "*.txt" -exec wc -l {} \;
fi

for item in "${array[@]}"; do
  echo "$item"
done

greet "User" && echo "Success" || echo "Failed"
```
