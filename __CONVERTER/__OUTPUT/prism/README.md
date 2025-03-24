# Prism

[Prism](https://github.com/damiankorcz)

## Preview

[Open live preview](https://quartz-themes.github.io/prism/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- prism
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh prism
```

```bash
just theme prism
```
