# NotSwift

[NotSwift](https://github.com/davidjroos)

## Preview

[Open live preview](https://quartz-themes.github.io/notswift/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- notswift
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh notswift
```

```bash
just theme notswift
```
