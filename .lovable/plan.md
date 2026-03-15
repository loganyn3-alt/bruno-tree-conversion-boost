

## Aesthetic Restoration Plan

### 1. Global Theme (index.css + tailwind.config.ts)

**Typography**: Add Playfair Display as the primary serif font (more elegant than Lora alone). Update the Google Fonts import and tailwind font config.

**Colors**: Adjust CSS custom properties:
- `--primary` (forest green): shift to `#1b4332` / `#2d4a22` range — deeper, muted
- `--forest` / `--forest-dark`: match the same deep green
- `--background` / `--surface`: shift to cream `#f2ede4` / `#eeeae3`
- `--secondary`: warm cream variant
- `--card`: cream-toned

### 2. BrunoTreeService.tsx Changes

**Hero Section**:
- Reduce H1 size (from `text-7xl` to `text-5xl` max), increase elegance with Playfair Display
- "Get a Free Quote" button: deep forest green bg (already forest, will update with new color)
- "Call Now" button: ghost style — transparent bg, thin border, no backdrop-blur tint

**Services Section**:
- Remove `bg-forest` full-section green background → use cream/background color instead
- Service cards: remove heavy colored containers, use minimal style — cream bg, thin border or no border, line-art icons (use `strokeWidth={1}` on lucide icons)
- Text colors: dark foreground instead of white

**Section Dividers**:
- Add SVG wave/organic divider between Hero→Services and Services→Testimonials sections
- Subtle cream-to-cream or cream-to-white organic curves

### 3. Files to Modify
- `src/index.css` — font import + CSS variables
- `tailwind.config.ts` — font family update
- `src/pages/BrunoTreeService.tsx` — all visual changes above

