# Fusion

[Fusion](https://github.com/zamsyt)

## Preview

[Open live preview](https://quartz-themes.github.io/fusion/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: fusion
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh fusion
```

### Install script (Advanced)

After installing:

```bash
npm run theme fusion
```
