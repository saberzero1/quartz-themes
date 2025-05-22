# RetroOS 98

[RetroOS 98](https://github.com/ThePharaohArt/)

## Preview

[Open live preview](https://quartz-themes.github.io/retroos-98/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: retroos-98
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh retroos-98
```

### Install script (Advanced)

After installing:

```bash
npm run theme retroos-98
```
