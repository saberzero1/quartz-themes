# Shiba Inu

[Shiba Inu](https://github.com/faroukx)

## Preview

[Open live preview](https://quartz-themes.github.io/shiba-inu/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: shiba-inu
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh shiba-inu
```

### Install script (Advanced)

After installing:

```bash
npm run theme shiba-inu
```
