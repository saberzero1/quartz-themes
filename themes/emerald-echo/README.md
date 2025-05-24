# Emerald Echo

[Emerald Echo](https://codeberg.org/MalcolmMielle)

## Preview

[Open live preview](https://quartz-themes.github.io/emerald-echo/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: emerald-echo
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh emerald-echo
```

### Quartz Syncer

> [!IMPORTANT]
> This setup method is not yet available. It is currently being tested and will be released in the future.
