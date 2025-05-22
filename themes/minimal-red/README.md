# Minimal Red

[Minimal Red](https://github.com/AfonsoMiranda02)

## Preview

[Open live preview](https://quartz-themes.github.io/minimal-red/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: minimal-red
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh minimal-red
```

### Install script (Advanced)

After installing:

```bash
npm run theme minimal-red
```
