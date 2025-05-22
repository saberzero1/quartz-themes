# Purple Owl

[Purple Owl](https://zacharyc.com)

## Preview

[Open live preview](https://quartz-themes.github.io/purple-owl/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: purple-owl
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh purple-owl
```

### Install script (Advanced)

After installing:

```bash
npm run theme purple-owl
```
