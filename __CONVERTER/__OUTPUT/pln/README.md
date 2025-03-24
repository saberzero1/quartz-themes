# PLN

[PLN](https://docs.dev0.sh)

## Preview

[Open live preview](https://quartz-themes.github.io/pln/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- pln
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh pln
```

```bash
just theme pln
```
