# Vibrant

[Vibrant](https://github.com/JamesLemony)

## Preview

[Open live preview](https://quartz-themes.github.io/vibrant/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: vibrant
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh vibrant
```

### Install script (Advanced)

After installing:

```bash
npm run theme vibrant
```
