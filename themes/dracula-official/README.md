# Dracula Official

[Dracula Official](https://gitlab.com/chrismettal)

## Preview

[Open live preview](https://quartz-themes.github.io/dracula-official/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: dracula-official
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh dracula-official
```

### Quartz Syncer

> [!IMPORTANT]
> This setup method is not yet available. It is currently being tested and will be released in the future.
