# Sparkling Night

[Sparkling Night](https://github.com/isax785/obsidian-sparkling-night)

## Preview

[Open live preview](https://quartz-themes.github.io/sparkling-night/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: sparkling-night
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh sparkling-night
```

### Quartz Syncer

> [!IMPORTANT]
> This setup method is not yet available. It is currently being tested and will be released in the future.
