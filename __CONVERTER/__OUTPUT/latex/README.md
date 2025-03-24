# LaTeX

[LaTeX](https://phooey.foo)

## Preview

[Open live preview](https://quartz-themes.github.io/latex/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- latex
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh latex
```

```bash
just theme latex
```
