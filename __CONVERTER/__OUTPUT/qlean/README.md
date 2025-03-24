# Qlean

[Qlean](https://github.com/Fro-Q)

## Preview

[Open live preview](https://quartz-themes.github.io/qlean/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- qlean
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh qlean
```

```bash
just theme qlean
```
