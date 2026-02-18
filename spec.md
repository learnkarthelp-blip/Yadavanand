# Specification

## Summary
**Goal:** Build a multi-page website for Yadav Family Restaurant with consistent layout, theme, and required content across Home, About, Menu, Gallery, and Contact pages.

**Planned changes:**
- Implement persistent site layout with header (logo + nav links) and footer (address, phone, social links).
- Add client-side routed pages: Home, About, Menu, Gallery, Contact.
- Home: name, tagline, welcome message, opening hours, “Call Now” (tel:) and “Order Online” (placeholder) CTAs.
- About: origin (started in 2020 in Meerut), mission statement, and highlights list.
- Menu: render the provided categories and items with prices.
- Gallery: create three labeled sections and display locally stored placeholder images.
- Contact: show address, clickable phone/email, and Google Map embed via iframe (no API key).
- Apply a cohesive, restaurant-appropriate visual theme (warm/earth tones; not primarily blue/purple).
- Add and render required generated images from `frontend/public/assets/generated` (logo, hero, gallery placeholders).

**User-visible outcome:** Visitors can navigate between all pages without full reloads, view restaurant info (hours, about, menu), browse a placeholder gallery, and contact the restaurant via click-to-call/email and an embedded map.
