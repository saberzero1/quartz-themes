# Obsidian Nord

[Obsidian Nord](https://insanum.com)

## Preview

[Open live preview](https://quartz-themes.github.io/obsidian-nord/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: obsidian-nord
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh obsidian-nord
```

### Quartz Syncer

> [!IMPORTANT]
> This setup method is not yet available. It is currently being tested and will be released in the future.
