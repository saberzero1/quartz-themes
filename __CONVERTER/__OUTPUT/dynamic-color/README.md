# Dynamic Color

[Dynamic Color](https://rodydavis.com)

## Preview

[Open live preview](https://quartz-themes.github.io/dynamic-color/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- dynamic-color
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh dynamic-color
```

```bash
just theme dynamic-color
```
