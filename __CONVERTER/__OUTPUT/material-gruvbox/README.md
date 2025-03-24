# Material Gruvbox

[Material Gruvbox](https://github.com/AllJavi)

## Preview

[Open live preview](https://quartz-themes.github.io/material-gruvbox/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- material-gruvbox
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh material-gruvbox
```

```bash
just theme material-gruvbox
```
