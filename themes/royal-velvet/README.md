# Royal Velvet

[Royal Velvet](https://github.com/caro401)

## Preview

[Open live preview](https://quartz-themes.github.io/royal-velvet/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: royal-velvet
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh royal-velvet
```

### Install script (Advanced)

After installing:

```bash
npm run theme royal-velvet
```
