# Material Gruvbox

[Material Gruvbox](https://github.com/AllJavi)

## Preview

[Open live preview](https://quartz-themes.github.io/material-gruvbox/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: material-gruvbox
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh material-gruvbox
```

### Install script (Advanced)

After installing:

```bash
npm run theme material-gruvbox
```
