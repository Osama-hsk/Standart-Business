# Config Control Room

This folder is the only place you should edit when adapting the template for a new local business client.

Do not edit components for normal client customization. Components read from these config files.

## Recommended Edit Order

1. `site.ts`
   - Start here.
   - Change the public business name.
   - Enable or disable pages.
   - Enable or disable features such as booking, FAQ, map, offer strip, trust bar, and floating WhatsApp.
   - Reorder homepage sections.
   - Configure map visibility and branch/location data.

2. `content.ts`
   - Replace all marketing copy.
   - Replace logo, hero, about, and contact images.
   - Edit navbar links.
   - Edit hero CTA buttons.
   - Edit contact details, WhatsApp link, social links, footer, testimonials, and FAQ.

3. `services.ts`
   - Add, remove, enable, or disable services.
   - Edit each service image, title, short description, detail title, and long paragraphs.
   - Each enabled service automatically gets a card and a detail page.

4. `booking.ts`
   - Configure appointment types.
   - Edit booking form field labels, placeholders, and required rules.
   - Choose where booking data goes: local file, webhook, or email.
   - Configure recipient email, webhook URL, or local JSON storage path.

5. `theme.ts`
   - Choose the default dark theme and light mode theme.
   - Edit colors and UI theme tokens.
   - Check `themeContrastWarnings` during build/runtime logs if colors become hard to read.

6. `seo.ts`
   - Set the production domain in `siteUrl`.
   - Edit default metadata.
   - Edit page-specific SEO titles and descriptions.
   - Sitemap and robots use this file.

7. `locales.ts` and `translations.ts`
   - Control supported static languages.
   - Add a language only after adding its matching file in `/translations`.
   - There is no runtime auto-translation system.

## Client Setup Checklist

- Update `site.ts` brand, feature flags, page visibility, map, and branches.
- Update `content.ts` copy, images, contact info, WhatsApp link, footer, FAQ, and testimonials.
- Update `services.ts` service list and service detail content.
- Update `booking.ts` storage provider and form fields.
- Update `theme.ts` colors and active themes.
- Update `seo.ts` domain and metadata.
- Update `translations` only if the client needs static multilingual UI text.

## Safe Editing Rules

- Keep route links valid, for example `/`, `/about`, `/services`, `/contact`, `/book`.
- Keep service `slug` values URL-safe, for example `web-design`.
- Disable items with `enabled: false` instead of deleting them when testing.
- Use iframe embed URLs for maps. Do not add a Google Maps API key.
- Keep all client-specific values inside `config` or `/translations`.
