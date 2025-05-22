# Red-Shadow

[Red-Shadow](https://github.com/DKLiberty)

## Preview

[Open live preview](https://quartz-themes.github.io/red-shadow/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: red-shadow
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh red-shadow
```

### Install script (Advanced)

After installing:

```bash
npm run theme red-shadow
```
