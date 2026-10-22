# Stitch landing page improvement log

Date: 2026-10-21

## Objective

Bring the strongest additions from the supplied Google Stitch prototype into the production Umoja landing-page source without changing the existing portal destinations or deployment configuration.

## Prototype additions selected

- Clearer hero hierarchy and router-focused visual stage.
- Primary package CTA plus a quieter plan-exploration link.
- Refined four-benefit band.
- New 20Mbps, 30Mbps and 50Mbps plan comparison.
- “Most popular” emphasis on the 30Mbps plan.
- Package-aware navigation and footer links.

## Guardrails

- Existing sign-in and application URLs remain unchanged.
- No secrets or environment files are read, stored or committed.
- No containers, deployments or remote files are changed as part of this local implementation.
- Business copy and prices are taken from the user-supplied prototype.

## Verification plan

1. Run the TypeScript check.
2. Build the production bundle.
3. Test the page at desktop and mobile widths.
4. Verify navigation, application links and responsive behavior.

## Preview feedback

- Restored the original clean router-image presentation at the user's request.
- Removed the prototype-inspired blue stage, image label and floating proof card.
- Retained the new hero copy, plan comparison, benefits and navigation improvements.
- Removed all plan-card action buttons so the comparison is informational only.
- Removed the “Most popular” treatment and gave all three packages equal emphasis because the 30Mbps and 50Mbps packages are newly introduced.
- Simplified the hero primary action label to “Apply Now” and removed its decorative icon.
- Converted the benefits into an infographic presentation with large visual signals, numbered icon markers and a connected desktop flow.
- Replaced the identifiable community photograph with an original AI-generated editorial illustration of fictional people. The image contains no real-person likenesses, names, personal data, logos or QR codes.
- After user feedback, replaced the AI illustration with Umoja’s official “How it works” community network diagram from `umoja.network/community-wifi`. The selected asset depicts infrastructure and homes without identifiable people or personal data.
- After further feedback requesting human photography, replaced the diagram in the live layout with a Pexels-licensed stock photo of a mother and daughter using a laptop at home. The image is presented as illustrative stock and not as a customer testimonial or endorsement. Source: `https://www.pexels.com/photo/a-woman-and-girl-looking-in-the-laptop-6297625/`.
- Expanded the community photo into a three-image rotating gallery. It advances every 5.5 seconds, pauses during hover or keyboard interaction, supports previous/next controls, and does not auto-rotate when reduced motion is enabled.
- Added a consistent “Connected — Umoja 5G HomeSpot” overlay with the official router product image to every gallery slide. This makes the service being used unmistakable while keeping the stock models clearly illustrative rather than presenting them as customer endorsers.
- Removed the visible “Illustrative image” tag and redesigned the connection treatment as a photographic lower-third: a dark image gradient, animated Wi-Fi signal, official Umoja wordmark and “5G HomeSpot” label blend directly into each slide.
- Hid the gallery arrow controls and image counter while retaining automatic rotation, hover/focus pause behaviour and reduced-motion support.
