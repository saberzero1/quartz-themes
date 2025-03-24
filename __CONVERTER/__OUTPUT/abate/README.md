# Abate

[Abate](https://github.com/ricedev10)

## Preview

[Open live preview](https://quartz-themes.github.io/abate/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- abate
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh abate
```

```bash
just theme abate
```
