# Lavender-Mist

[Lavender-Mist](https://quinta0.github.io/)

## Preview

[Open live preview](https://quartz-themes.github.io/lavender-mist/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: lavender-mist
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh lavender-mist
```

### Install script (Advanced)

After installing:

```bash
npm run theme lavender-mist
```
