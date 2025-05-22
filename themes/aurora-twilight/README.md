# Aurora-Twilight

[Aurora-Twilight](https://quinta0.github.io/)

## Preview

[Open live preview](https://quartz-themes.github.io/aurora-twilight/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: aurora-twilight
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh aurora-twilight
```

### Install script (Advanced)

After installing:

```bash
npm run theme aurora-twilight
```
