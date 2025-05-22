# Things 3

[Things 3](https://medium.com/@paralloid)

## Preview

[Open live preview](https://quartz-themes.github.io/things-3/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: things-3
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh things-3
```

### Install script (Advanced)

After installing:

```bash
npm run theme things-3
```
