# Sparkling Day

[Sparkling Day](https://github.com/isax785)

## Preview

[Open live preview](https://quartz-themes.github.io/sparkling-day/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: sparkling-day
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh sparkling-day
```

### Install script (Advanced)

After installing:

```bash
npm run theme sparkling-day
```
