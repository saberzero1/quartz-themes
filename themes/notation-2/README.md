# Notation 2

[Notation 2](https://github.com/Bluemoondragon07)

## Preview

[Open live preview](https://quartz-themes.github.io/notation-2/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: notation-2
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh notation-2
```

### Install script (Advanced)

After installing:

```bash
npm run theme notation-2
```
