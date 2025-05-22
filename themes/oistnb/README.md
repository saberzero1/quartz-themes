# OISTNB

[OISTNB](https://github.com/omsandippatil)

## Preview

[Open live preview](https://quartz-themes.github.io/oistnb/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: oistnb
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh oistnb
```

### Install script (Advanced)

After installing:

```bash
npm run theme oistnb
```
