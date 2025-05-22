# Dracula for Obsidian

[Dracula for Obsidian](#)

## Preview

[Open live preview](https://quartz-themes.github.io/dracula-for-obsidian/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: dracula-for-obsidian
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh dracula-for-obsidian
```

### Install script (Advanced)

After installing:

```bash
npm run theme dracula-for-obsidian
```
