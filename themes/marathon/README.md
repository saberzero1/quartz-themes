# Marathon

[Marathon](https://github.com/Spekulucius)

## Preview

[Open live preview](https://quartz-themes.github.io/marathon/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: marathon
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh marathon
```

### Quartz Syncer

> [!IMPORTANT]
> This setup method is not yet available. It is currently being tested and will be released in the future.
