# ingotui-icons

16,000+ line icons from [Ingot UI](https://ingotui.com/icons), all on one 24px grid with a live 1.5px stroke.

```bash
npm install ingotui-icons
```

## React

```tsx
import { Home01, Search01 } from "ingotui-icons/react/stroke-rounded";

<Home01 size={20} />
<Search01 size={20} strokeWidth={2} className="text-zinc-500" />
```

Styles: `stroke-rounded`, `solid`, `duotone`, `bulk`. Every icon takes `size`, `strokeWidth` and any SVG prop.

## SVG

Plain SVG files are in `ingotui-icons/svg/`.

Browse and search every icon at [ingotui.com/icons](https://ingotui.com/icons).

## Licence

The icons are redrawn from open-licence sets (MIT, ISC, Apache-2.0 and CC-BY-4.0). Their notices and
authors are in `THIRD_PARTY_LICENSES.md`, which must stay with the icons when you redistribute them.
