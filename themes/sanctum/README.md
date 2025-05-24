# Sanctum

[Sanctum](https://github.com/jdanielmourao/)

## Preview

[Open live preview](https://quartz-themes.github.io/sanctum/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: sanctum
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh sanctum
```

### Quartz Syncer

> [!IMPORTANT]
> This setup method is not yet available. It is currently being tested and will be released in the future.
