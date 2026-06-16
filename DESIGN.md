---
name: Blossom & Gilded
colors:
  surface: '#fff8f7'
  surface-dim: '#e7d6d6'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#fceae9'
  surface-container-high: '#f6e4e4'
  surface-container-highest: '#f0dfde'
  on-surface: '#221919'
  on-surface-variant: '#594045'
  inverse-surface: '#382e2e'
  inverse-on-surface: '#feedec'
  outline: '#8c7075'
  outline-variant: '#e0bec4'
  surface-tint: '#b61558'
  primary: '#b41256'
  on-primary: '#ffffff'
  primary-container: '#d6336e'
  on-primary-container: '#fffdff'
  inverse-primary: '#ffb1c3'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#635a5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#7c7277'
  on-tertiary-container: '#fffcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e0'
  primary-fixed-dim: '#ffb1c3'
  on-primary-fixed: '#3f0019'
  on-primary-fixed-variant: '#8f0041'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#eddfe4'
  tertiary-fixed-dim: '#d0c3c8'
  on-tertiary-fixed: '#201a1d'
  on-tertiary-fixed-variant: '#4d4448'
  background: '#fff8f7'
  on-background: '#221919'
  surface-variant: '#f0dfde'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  container-padding: 24px
  gutter: 20px
---

## Brand & Style
This design system captures the romantic and artisanal essence of premium invitation design. The visual narrative is built on the concept of "The Modern Heirloom"—combining traditional elegance with contemporary digital precision. It targets individuals celebrating life’s most significant milestones, evoking feelings of anticipation, warmth, and luxury.

The style is a blend of **Minimalism** and **Tactile Elegance**. It utilizes generous whitespace to let floral imagery breathe, paired with delicate hairline borders and subtle gold accents that mimic foil-stamping. The interface should feel light and airy, avoiding heavy shadows in favor of subtle tonal shifts and refined ornamental details.

## Colors
The palette is rooted in a spectrum of rose-inspired hues and metallic accents.

- **Primary (Rose):** A vibrant yet sophisticated pink used for call-to-action elements and brand identifiers.
- **Secondary (Gold):** A muted, champagne-gold used for decorative borders, iconography, and subtle highlights to convey premium quality.
- **Tertiary (Blush):** A very soft pink used for large background sections and card surfaces to prevent the "starkness" of pure white.
- **Neutral (Charcoal):** A warm, brownish-gray used for typography to maintain high legibility while appearing softer and more organic than pure black.
- **Background:** Primary workspace should be a mix of pure `#FFFFFF` and the Tertiary Blush.

## Typography
The typographic hierarchy relies on the contrast between the classic, high-contrast serifs of **Playfair Display** and the clean, modern geometric forms of **Plus Jakarta Sans**.

- **Display & Headlines:** Use Playfair Display for all major headings. It provides the "editorial" feel necessary for luxury invitations.
- **Body Text:** Plus Jakarta Sans is used for descriptions and functional text, ensuring clarity and a friendly, approachable tone.
- **Labels & Navigation:** Montserrat is utilized in uppercase with generous letter spacing for a structured, professional appearance in menus and small metadata.
- **Ornaments:** Script-like flourishes should be used sparingly as SVG decorative elements rather than functional text.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop (1200px max-width) to mimic the contained feel of a physical invitation card. 

- **Rhythm:** An 8px base unit drives all spacing. 
- **Margins:** Generous outer margins (minimum 24px on mobile, 80px+ on desktop) are essential to maintain the minimalist, airy aesthetic.
- **Grid:** A 12-column grid is used for desktop galleries, while mobile transitions to a single-column stacked layout with 16px gutters.
- **Composition:** Elements should often be centered to reflect the traditional formal layout of printed invitations.

## Elevation & Depth
This design system avoids heavy shadows. Depth is achieved through:

- **Tonal Layering:** Floating cards use a very subtle 1px border in Gold (`#C5A059`) at 20% opacity rather than a drop shadow.
- **Soft Glows:** High-priority buttons may use a very soft, primary-colored glow (blur: 20px, opacity: 10%) to indicate interactivity.
- **Hairline Borders:** Use thin (0.5px - 1px) borders for containers to create "rooms" within the layout, inspired by traditional stationery framing.
- **Backdrop Blurs:** Modals and navigation overlays should use a light blur (10px) over a white-translucent background to maintain a "glassy" but soft feel.

## Shapes
Shapes are intentionally soft to mirror the organic curves of rose petals. 

- **Primary Containers:** Use the `rounded-lg` (1rem) setting for most cards and input fields.
- **Call-to-Action:** Buttons should be fully rounded (pill-shaped) to provide a soft, touchable interface.
- **Decorative Elements:** Circular frames for icons or profile pictures reinforce the feminine and romantic theme. 
- **Borders:** Double-line "frame" borders (one thin gold, one thick white) can be used on hero sections to reference invitation card edges.

## Components
- **Buttons:** Primary buttons are pill-shaped, using a solid Rose gradient. Secondary buttons use a Rose-colored hairline border with transparent centers.
- **Cards:** Cards for invitation categories should feature a full-bleed floral header with typography centered in a Blush-colored footer.
- **Input Fields:** Use a floating label pattern with a bottom-only border in Gold to mimic high-end calligraphy paper.
- **Chips/Badges:** Small, pill-shaped tags with Blush backgrounds and Rose text for categories (e.g., "New," "Trending").
- **Icons:** Use thin-stroke (1.5pt) icons in Gold or Rose. Avoid filled icons to keep the interface feeling light.
- **Dividers:** Use a custom "heart-and-line" SVG divider for section transitions, as seen in the reference brand marks.