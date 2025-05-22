# Vanilla Palettes

[Vanilla Palettes](https://github.com/GnRlLeclerc)

## Preview

[Open live preview](https://quartz-themes.github.io/vanilla-palettes/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: vanilla-palettes
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh vanilla-palettes
```

### Install script (Advanced)

After installing:

```bash
npm run theme vanilla-palettes
```
