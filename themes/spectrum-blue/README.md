# Spectrum Blue

[Spectrum Blue](https://github.com/ryanjrman)

## Preview

[Open live preview](https://quartz-themes.github.io/spectrum-blue/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: spectrum-blue
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh spectrum-blue
```

### Install script (Advanced)

After installing:

```bash
npm run theme spectrum-blue
```
