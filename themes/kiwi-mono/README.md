# Kiwi Mono

[Kiwi Mono](https://www.kiwisflight.com)

## Preview

[Open live preview](https://quartz-themes.github.io/kiwi-mono/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: kiwi-mono
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh kiwi-mono
```

### Install script (Advanced)

After installing:

```bash
npm run theme kiwi-mono
```
