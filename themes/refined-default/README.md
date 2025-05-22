# Refined Default

[Refined Default](https://github.com/faisaltamanojr)

## Preview

[Open live preview](https://quartz-themes.github.io/refined-default/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: refined-default
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh refined-default
```

### Install script (Advanced)

After installing:

```bash
npm run theme refined-default
```
