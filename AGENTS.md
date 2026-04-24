# AGENTS.md

## Purpose

This repo should visually align with `https://www.home-start.org.uk/` while preserving Home-Start Nottingham's content, menu structure, URLs, downloads, and simple document-driven editing model.

## Source Of Truth

- Use `https://home-startnottingham.org.uk/` as the content source of truth.
- Use `https://www.home-start.org.uk/` as the visual, interaction, and layout reference.
- When there is tension between the two, preserve Nottingham's information architecture and copy first, then bring presentation closer to the national site.

## Non-Negotiables

- Keep the same textual information and meaning unless a copy cleanup is clearly editorial only.
- Keep the same menu structure from `_data/navigation.yml`.
- Keep the Jekyll + Decap CMS workflow. Content should stay editable through markdown, collections, and data files.
- Preserve existing permalinks, downloads, legal details, contact details, and third-party donation endpoints unless explicitly asked to change them.
- Reuse Nottingham-owned assets where possible. Do not copy national-site imagery directly.

## Layout Rules

- Prefer full-width and full-bleed sections over an artificially narrow page shell.
- Use generous gutters, but do not constrain the whole site to a tight centered column.
- Homepage splash imagery should span the full browser width.
- Keep the design bright, open, and lightweight rather than dense, boxed, or shadow-heavy.
- Avoid reintroducing the old rotating carousel. The homepage should use a static hero plus supporting promo sections.

## Header Rules

- Keep the site brand on the left.
- Align the rest of the header bar to the right.
- Do not add a separate social or utility strip above the main header unless explicitly requested.
- The logo or brand mark must not be cropped by rounded containers or overflow clipping.
- Use a clean, national-site-inspired header rhythm with clear spacing and compact utility actions.

## Navigation Rules

- Desktop menu items with children should show a down arrow.
- Desktop submenus should stay hidden until hover or focus.
- Desktop submenus should open on hover and keyboard focus, not only on click.
- When the header can no longer fit cleanly on one horizontal row, switch to a hamburger-triggered drawer instead of allowing the navigation to wrap awkwardly.
- Mobile or compact navigation should slide in from the right in a Home-Start-UK-style off-canvas panel rather than dropping inline beneath the header.
- In drawer mode, keep the primary `Get help` and `Donate` CTAs at the top and the social links at the bottom, using Nottingham's own social URLs.
- In drawer mode, keep the close control on the far right and use the Home-Start-style yellow `Get help` variant instead of the desktop purple version.
- In drawer mode, treat the CTA stack and close control as one aligned top row so the close button is vertically centered against the CTA block.
- Mobile navigation should remain toggle-driven and touch-friendly.
- Navigation should feel close to the national site: simple, quick to scan, and unobtrusive when closed.

## Button Rules

- The header `Get help` and `Donate` buttons should follow the Home-Start UK CTA style.
- The header `Get help` button should be a purple pill with white text and a yellow circular heart icon on the right.
- The header `Donate` button should be a yellow pill with dark text and a purple circular chevron icon on the right.
- Those header CTA icons should use the same full circular proportions as the live Home-Start UK header assets rather than reduced custom icon sizing.
- On hover and focus, those two header CTAs should invert into the alternate Home-Start UK state rather than switching to a generic darkened fill.
- Avoid inventing custom CTA treatments when there is already a clear Home-Start UK equivalent.

## Colour Rules

- Use white or near-white as the default page background.
- Keep the palette close to the national site: orange and yellow support tones, purple and magenta accents, and light warm neutral surfaces.
- Prefer bright, optimistic colour blocking over muted pink-grey custom palettes.
- Use accent colours deliberately. Do not let the whole site collapse into a single flat brand wash.

## Typography Rules

- Typography should feel warm, human, and close to the national site rather than generic app UI.
- Keep headings clear and expressive, with good contrast and generous spacing.
- Keep body copy highly readable and content-first.
- Header CTAs may use `Source Sans 3` to stay visually close to the national button treatment.

## Imagery Rules

- Main logos and icons must remain fully visible.
- Rounded corners are acceptable for supporting photography, but never when they hide important brand shapes or page content.
- Use local Nottingham imagery and illustrations where available.
- If a visual treatment makes local content feel clipped or secondary, simplify the treatment.

## Component Rules

- Prefer semantic cards, bands, split sections, accessible accordions, and styled download lists over legacy tables and brittle one-off markup.
- The homepage should follow this broad rhythm: hero, secondary promo cards, impact band, support or volunteer or fundraising promos, key links or resources, then closing CTA/footer prompt.
- Standard content pages should use a strong hero and readable content area.
- Donation pages should keep the existing donation methods and endpoints while adopting the refreshed visual system.
- Resource collections such as reports and case studies should stay document-driven and render as clean download cards or lists.
- Use Font Awesome brand icons for social media links instead of custom inline vector icon drawings.

## CMS And Structure Rules

- Keep content in `pages/**`, collections, and `_data/**` rather than hardcoding copy into templates.
- Keep the implementation maintainable: thin layouts, reusable includes, one main stylesheet, and one main script unless there is a strong reason to split further.
- Prefer reusable component classes and CSS variables over page-specific exceptions.
- Keep `accordion` as the standard spelling in layouts, includes, and CMS config.

## Accessibility And Responsive Rules

- Maintain semantic landmarks, heading order, keyboard navigation, and visible focus states.
- Desktop hover interactions must still work for keyboard users via focus behavior.
- Respect reduced-motion expectations and avoid unnecessary animation.
- Check the header, hero, dropdowns, cards, and footer at mobile, tablet, and desktop widths whenever they change.

## Self-Learning And Maintenance

- Treat this file as the current design canon for the repo.
- Whenever a visual rule becomes intentional and is kept after implementation, update this file in the same change.
- Prefer editing an existing section over appending loose notes at the bottom.
- Group new rules under the smallest relevant heading such as `Header Rules`, `Button Rules`, or `Colour Rules`.
- Remove or rewrite superseded rules immediately so this file stays current rather than historical.
- If a rule was taken directly from `home-start.org.uk`, name the relevant component or behavior clearly instead of writing a vague note.
- If the codebase and this file drift apart, bring them back into sync before closing the task.
- Keep this file concise, organized, and prescriptive. It should help future agents make consistent decisions quickly.
