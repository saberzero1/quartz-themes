# Ayu Light & Mirage

[Ayu Light & Mirage](https://taronull.substack.com)

## Preview

[Open live preview](https://quartz-themes.github.io/ayu-light-mirage/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: ayu-light-mirage
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh ayu-light-mirage
```

### Install script (Advanced)

After installing:

```bash
npm run theme ayu-light-mirage
```
