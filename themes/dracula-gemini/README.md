# Dracula Gemini

[Dracula Gemini](https://github.com/clbn)

## Preview

[Open live preview](https://quartz-themes.github.io/dracula-gemini/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: dracula-gemini
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh dracula-gemini
```

### Install script (Advanced)

After installing:

```bash
npm run theme dracula-gemini
```
