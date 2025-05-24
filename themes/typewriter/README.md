# Typewriter

[Typewriter](https://github.com/crashmoney)

## Preview

[Open live preview](https://quartz-themes.github.io/typewriter/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: typewriter
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh typewriter
```

### Quartz Syncer

> [!IMPORTANT]
> This setup method is not yet available. It is currently being tested and will be released in the future.
