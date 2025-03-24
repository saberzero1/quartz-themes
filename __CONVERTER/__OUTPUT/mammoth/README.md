# Mammoth

[Mammoth](https://github.com/wittionary)

## Preview

[Open live preview](https://quartz-themes.github.io/mammoth/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- mammoth
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh mammoth
```

```bash
just theme mammoth
```
