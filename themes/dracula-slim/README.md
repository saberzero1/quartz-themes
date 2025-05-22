# Dracula Slim

[Dracula Slim](#)

## Preview

[Open live preview](https://quartz-themes.github.io/dracula-slim/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: dracula-slim
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh dracula-slim
```

### Install script (Advanced)

After installing:

```bash
npm run theme dracula-slim
```
