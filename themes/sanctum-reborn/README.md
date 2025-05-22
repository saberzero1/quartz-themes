# Sanctum reborn

[Sanctum reborn](https://github.com/antoKeinanen/)

## Preview

[Open live preview](https://quartz-themes.github.io/sanctum-reborn/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: sanctum-reborn
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh sanctum-reborn
```

### Install script (Advanced)

After installing:

```bash
npm run theme sanctum-reborn
```
