# Minimal-Resources

[Minimal-Resources](https://github.com/jonsnow231)

## Preview

[Open live preview](https://quartz-themes.github.io/minimal-resources/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- minimal-resources
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh minimal-resources
```

### Install script (Advanced)

After installing:

```bash
npm run theme minimal-resources
```
