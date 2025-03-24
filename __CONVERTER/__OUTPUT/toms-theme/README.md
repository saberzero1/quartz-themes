# Tom's Theme

[Tom's Theme](https://tomkay.dev)

## Preview

[Open live preview](https://quartz-themes.github.io/toms-theme/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- toms-theme
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh toms-theme
```

```bash
just theme toms-theme
```
