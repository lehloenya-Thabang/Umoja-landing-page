# Umoja Landing Page Design System

## Atmosphere

Warm, direct and optimistic. The experience should feel like a trusted South African connectivity brand: energetic enough to make the offer memorable, but calm and precise enough to support a purchase decision. Use generous white space, soft grey-blue surfaces and a single Umoja pink accent. Avoid visual noise, novelty effects and generic “tech startup” styling.

## Color

- **Umoja pink / brand accent:** `#EC008C` — large display accents, prices and decorative emphasis.
- **Accessible action pink:** `#D0007C` — buttons, links and smaller interactive text requiring stronger contrast.
- **Ink:** `#101828` — headings and high-emphasis copy; never use pure black.
- **Body:** `#475467` — paragraphs and supporting information.
- **Canvas:** `#FFFFFF` — primary page background.
- **Soft surface:** `#F7F8FC` — section separation and quiet cards.
- **Border:** `#E4E7EC` — dividers and card edges.
- **Success:** `#12B76A` — availability and included-feature checks only.
- **Warm notice:** `#FFF8EB` with `#B54708` text — limited-time offer message.

Umoja pink is the only decorative accent. Success and warning colors are semantic, not decorative.

## Typography

- **Primary family:** Outfit, with system sans-serif fallbacks.
- **Display:** 700 weight, compact tracking (`-0.035em`), 1.0–1.08 line height.
- **Section heading:** 700 weight, 1.1 line height.
- **Body:** 400–500 weight, 1.6 line height.
- **Labels:** 600–700 weight, slightly tracked uppercase only for short eyebrow copy.

Desktop hero text may reach 64px; mobile hero text should remain between 40px and 48px. Long supporting copy should stay below roughly 65 characters per line.

## Components

### Navigation

Use a 72px translucent white bar with a subtle bottom border. The logo sits left; section links and one compact sign-in action sit right. Mobile uses a 44px minimum menu target and a single-column drawer.

### Hero

Use an asymmetric two-column layout: editorial offer copy on the left and the product on a soft pink/blue stage on the right. Keep one primary “Apply Now” action and one quieter text link. The offer notice is compact and semantic.

### Benefit cards

A wide community panel uses licensed stock photography of families using the internet at home. Treat the people as illustrative models, not as named customers or endorsers. A dark photographic gradient blends a live Wi-Fi signal, official Umoja wordmark and “5G HomeSpot” label directly into every slide so the service context feels native to the image rather than attached as a separate card. The selected photos contain no visible names, addresses, documents, number plates or precise location data. Four infographic cards then explain outcomes rather than features. Each combines a numbered marker, icon and large visual signal such as “HD” or “5G”, connected by a subtle desktop flow line. Cards use thin borders and restrained lift; avoid heavy shadows or excessive rounding.

### Plan cards

Three aligned comparison cards are allowed because the repeated structure makes price and feature comparison faster. All packages receive equal visual emphasis, and the cards remain informational without individual action buttons. The page-level application action remains the single primary CTA.

### Footer

Keep contact details, payment trust marks and legal links. Use restrained dividers and group information by purpose.

## Layout

- Content max width: 1180–1240px.
- Desktop sections: 88–112px vertical padding.
- Hero: asymmetric 7/5 visual balance, with the copy carrying more visual weight.
- Plan comparison: three aligned columns at desktop; single column below tablet widths.
- Mobile: strictly single-column, no horizontal scrolling, 20–24px page gutters and 44px minimum interactive targets.
- Section rhythm should alternate white and soft-surface backgrounds instead of relying on decorative gradients.

## Motion

- Animate only `transform` and `opacity` for entrance and hover behavior.
- Use a spring-like easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Card hover: translate no more than 4px with a restrained shadow.
- Buttons may lift 2px; icons may translate 2–3px to indicate direction.
- Respect `prefers-reduced-motion` and remove non-essential movement.

## Anti-patterns

- No neon purple/blue gradients, glassmorphism or pure black.
- No Inter typography or generic startup font treatment.
- No oversized hero headline that crowds out the offer.
- No multiple competing primary CTAs.
- No pill-shaped containers for ordinary text or every surface.
- No ornamental metrics, fake testimonials or invented trust claims.
- No stock-photo hero when the actual Umoja router can carry the story.
- No horizontal overflow or hover-only information on mobile.
