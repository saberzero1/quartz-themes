# Retro Windows

[Retro Windows](https://github.com/codeisconfusing)

## Preview

[Open live preview](https://quartz-themes.github.io/retro-windows/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: retro-windows
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh retro-windows
```

### Install script (Advanced)

After installing:

```bash
npm run theme retro-windows
```
