# Serika

[Serika](https://github.com/Warrobot10)

## Preview

[Open live preview](https://quartz-themes.github.io/serika/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: serika
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh serika
```

### Install script (Advanced)

After installing:

```bash
npm run theme serika
```
