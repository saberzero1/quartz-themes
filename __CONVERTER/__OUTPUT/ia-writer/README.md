# iA Writer

[iA Writer](http://github.com/mrowa44)

## Preview

[Open live preview](https://quartz-themes.github.io/ia-writer/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- ia-writer
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh ia-writer
```

```bash
just theme ia-writer
```
