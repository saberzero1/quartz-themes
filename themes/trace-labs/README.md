# Trace Labs

[Trace Labs](https://github.com/tracelabs)

## Preview

[Open live preview](https://quartz-themes.github.io/trace-labs/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: trace-labs
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh trace-labs
```

### Quartz Syncer

> [!IMPORTANT]
> This setup method is not yet available. It is currently being tested and will be released in the future.
