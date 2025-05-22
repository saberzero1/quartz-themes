# Material 3

[Material 3](https://github.com/HarmfulBreeze)

## Preview

[Open live preview](https://quartz-themes.github.io/material-3/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: material-3
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh material-3
```

### Install script (Advanced)

After installing:

```bash
npm run theme material-3
```
