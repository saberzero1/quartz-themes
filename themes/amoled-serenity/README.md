# AMOLED Serenity

[AMOLED Serenity](https://darthdemono.rf.gd/)

## Preview

[Open live preview](https://quartz-themes.github.io/amoled-serenity/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: amoled-serenity
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh amoled-serenity
```

### Install script (Advanced)

After installing:

```bash
npm run theme amoled-serenity
```
