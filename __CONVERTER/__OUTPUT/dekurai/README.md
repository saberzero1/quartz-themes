# Dekurai

[Dekurai](https://github.com/sergey900553)

## Preview

[Open live preview](https://quartz-themes.github.io/dekurai/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- dekurai
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh dekurai
```

```bash
just theme dekurai
```
