# Vercel Geist

[Vercel Geist](https://github.com/en3sis)

## Preview

[Open live preview](https://quartz-themes.github.io/vercel-geist/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- vercel-geist
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh vercel-geist
```

### Install script (Advanced)

After installing:

```bash
npm run theme vercel-geist
```
