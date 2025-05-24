# Dark Clarity

[Dark Clarity](https://github.com/chenbihao)

## Preview

[Open live preview](https://quartz-themes.github.io/dark-clarity/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: dark-clarity
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh dark-clarity
```

### Quartz Syncer

> [!IMPORTANT]
> This setup method is not yet available. It is currently being tested and will be released in the future.
