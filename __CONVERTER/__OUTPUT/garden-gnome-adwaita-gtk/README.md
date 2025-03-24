# Garden Gnome (Adwaita, GTK)

[Garden Gnome (Adwaita, GTK)](https://github.com/oqipodev/)

## Preview

[Open live preview](https://quartz-themes.github.io/garden-gnome-adwaita-gtk/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- garden-gnome-adwaita-gtk
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh garden-gnome-adwaita-gtk
```

```bash
just theme garden-gnome-adwaita-gtk
```
