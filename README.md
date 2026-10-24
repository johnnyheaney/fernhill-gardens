# Fernhill Garden Transformations: sample website (Tier 1)

Portfolio concept for a fictional UK garden design and landscaping business. Not a real client.
Brief and intake answers are in `CLAUDE.md`.

## What was built
- Pages: `index.html` (Home), `transformations.html` (all three before/afters), `small-gardens.html`, `family-gardens.html`, `large-gardens.html`, `services.html`, `about.html` (Meet Sam), `contact.html`, plus `privacy.html` and `404.html`.
- Three garden types, each with a sunny design visualisation, a before/after slider and a feature list: small terrace (bamboo screening, deck, fire pit, sail awning, festoon lights), family garden (patio, BBQ, play area with climbing frame and swing), large showpiece (stone terrace, rill, hedges, topiary, summerhouse, wildflowers).
- Main action: **Get a free quote**. In the header on desktop, a sticky Call / Get a free quote bar on mobile, and a call-to-action band at the end of each page.
- Before/after slider: drag, tap, or use arrow keys (it is a native range input, so it works with keyboards and screen readers). One on Home, three on Transformations, one on each garden page.
- Starter brand pack in `brand/`: `logo.svg`, `logo-reversed.svg`, `logo-mark.svg`, `logo-mark-reversed.svg`, and `brand-guide.html` (colours, fonts, voice). Clearly marked as an AI-generated starter brand.
- Plain HTML, CSS and vanilla JS. No build step, no third-party requests. Fonts (Fraunces, Karla, SIL OFL) are self-hosted.

## Honesty rules applied
- "Sample website - concept" banner on every page and a footer note explaining it is fictional.
- Every garden image is an SVG illustration. "Before" images carry "Illustration: before" and "after" images carry "Design visualisation", baked into the image and also shown as a tag over the slider. A notice on Transformations and each garden page says none are photos of finished jobs.
- Testimonials are tagged "Sample" with "Sample client" attributions.
- Phone 01632 960418 is in Ofcom's drama range, email uses the reserved `.example` domain.
- Sam Hollis is fictional. Experience and stats (years, gardens built, radius) are shown in [square brackets] as placeholders. No accreditations, insurance or prices claimed.
- `noindex` on every page and `robots.txt` disallows all, so the fictional business stays out of search results.

## Photos
24 free stock photos from Pexels (23 plus the home hero, family-hero-2, an English cottage garden) (Pexels License: free commercial use, no attribution required) are in `images/photos/` as WebP at 1600px and 800px. Originals and full credits are in `/mnt/project-files/fernhill-gardens-photos/credits.md`, and the site has a `credits.html` page linked from the footer.
- Photos fill the page heroes, garden type cards, service cards and an "inspiration" section on each garden page. Every photo carries a "Stock photo" tag.
- The main before/after sliders stay as illustrations, because they show the *same* garden transformed. Each garden page also has a photo slider, clearly captioned as an illustrative pairing of two different gardens, not a Fernhill project.
- Some large-garden photos are famous public gardens (Hever Castle, Dyrham Park). They are never captioned as client work.
- No free photo had an awning, so the small-garden awning only appears in the illustration.
- Unsplash and Wikimedia stayed blocked, so Pexels was the only source.

## Pre-launch checklist results (24 Oct 2026)
Passed
- No horizontal scroll and exactly one H1 on all eight main pages and the credits page at 375px and 1280px.
- All internal links return 200. `tel:` and `mailto:` links present. 404 page links home.
- Slider responds to the keyboard. Mobile menu opens. Form validates required fields, then opens the email app with the details filled in, and tells the visitor nothing is sent until they press Send.
- Contrast: body text 13.2:1, white on the enquiry button 5.7:1, footer text 7.4:1.
- Skip link, visible focus styles, labelled form fields, `prefers-reduced-motion` respected.
- Unique title and meta description per page. Privacy notice page (template text). No cookies or trackers, so no cookie banner needed.
- Page weight: home page well under 1 MB (fonts about 90 KB, each illustration 35 to 60 KB).

Deliberately not done for a fictional business
- LocalBusiness JSON-LD and sitemap: left out because there is no real business and the site is noindex. Add both for a real client.
- Map: placeholder box. Add an embed for a real client (Google Maps embeds set cookies, so check the consent setup).
- Google Business Profile: not applicable.

Still to check before or after deploy
- Real phone test on mobile data, and a Lighthouse run once hosted.
- `og:url` and `og:image` once there is a live address.

## Deploy
Not deployed. Waiting for Johnny's go-ahead. Any static host works (Netlify, Cloudflare Pages, GitHub Pages): upload the folder as-is. If reused for a real client: real domain in the client's name, HTTPS, remove `noindex` and the robots block, swap the form to Formspree or similar, and replace every placeholder in square brackets.
