# Composer

[Composer](https://github.com/vran-dev)

## Preview

[Open live preview](https://quartz-themes.github.io/composer/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- composer
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh composer
```

### Install script (Advanced)

After installing:

```bash
npm run theme composer
```
