# ITS Theme

[ITS Theme](https://github.com/SlRvb)

## Preview

[Open live preview](https://quartz-themes.github.io/its-theme/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: its-theme
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh its-theme
```

### Install script (Advanced)

After installing:

```bash
npm run theme its-theme
```
