# Perso

[Perso](https://blog.behrouze.com)

## Preview

[Open live preview](https://quartz-themes.github.io/perso/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: perso
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh perso
```

### Install script (Advanced)

After installing:

```bash
npm run theme perso
```
