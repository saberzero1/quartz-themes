# Typomagical

[Typomagical](https://github.com/hungsu/)

## Preview

[Open live preview](https://quartz-themes.github.io/typomagical/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: typomagical
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh typomagical
```

### Install script (Advanced)

After installing:

```bash
npm run theme typomagical
```
