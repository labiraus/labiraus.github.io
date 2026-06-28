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

- Use the national-site rhythm of wide contained content shells rather than either a narrow blog column or edge-to-edge text. Normal page content should use the shared page-width variable.
- Use a separate near-full-width media variable for homepage and banner hero images so they keep the same small viewport gap as the national site.
- Reserve full-bleed treatment for the outer section background or hero framing, not for long text columns.
- Homepage splash imagery should feel nearly full width, with the image inset from the viewport edge in the same way as the national site rather than flush to the browser chrome.
- Homepage hero imagery must not underlap or visually collide with the opening text panel; reserve clear layout space for the copy block.
- The homepage hero should follow the national site pattern: a large inset rounded image with visible gap around it, plus an overlaid text card on desktop rather than a side-by-side split.
- On tablet and mobile widths, the homepage hero should step down like the national site by letting the text card sit beneath the image instead of forcing a cramped overlay.
- Default, boxed, and accordion interior content pages with header images should use the national `about-us` banner treatment: a near-full-width rounded hero image with a separate pale-lilac title card beneath it rather than a side-by-side image/text split.
- Interior pages without a hero image should keep their hero text shell on `--page-width` so the left edge matches the section content below instead of using the wider banner media track.
- On those banner pages, the first main content or intro block immediately under the hero should also sit in a pale-lilac rounded panel.
- Keep the design bright, open, and lightweight rather than dense, boxed, or shadow-heavy.
- Avoid reintroducing the old rotating carousel. The homepage should use a static hero plus supporting promo sections.

## Header Rules

- Keep the site brand on the left.
- Align the rest of the header bar to the right.
- The visible header bar should be a viewport-width band with the exact Home-Start pale lilac surface (`#F6F2F8`), no visible boxed border, `margin: 0`, and `1rem 1.5rem` internal padding to match the reference site's broad header band.
- The area immediately below the header should fade out from the same pale lilac surface where possible, matching the reference site's hero/header handoff rather than creating a hard lilac-to-white cut.
- Keep the base `.site-header__main` width, layout, and padding declarations in one CSS rule so DevTools clearly shows the intended full-width header row. Only drawer-specific overrides should be separate.
- Do not add a separate social or utility strip above the main header unless explicitly requested.
- The logo or brand mark must not be cropped by rounded containers or overflow clipping.
- When using Nottingham's square local logo asset, match the reference header logo height: roughly `80px` on desktop and `60px` in compact states.
- Use the transparent PNG version of the Nottingham logo in the header so it sits directly on the pale lilac Home-Start surface without a white square.
- Use a clean, national-site-inspired header rhythm with clear spacing and compact utility actions.

## Navigation Rules

- Use a desktop-first navigation pattern: at full width, show the section headers and CTA buttons in the header bar rather than hiding them behind the hamburger.
- Desktop menu items with children should show a down arrow and open their dropdowns on hover, click, and keyboard focus.
- Desktop dropdowns should stay hidden until hover, click, or focus, and should close when focus or pointer leaves the menu group, Escape is pressed, or the user clicks outside the navigation.
- Desktop menu headings should use a Home-Start-style purple underline that animates from left to right on hover, focus, open, and active states rather than a rounded pill background or orange bar.
- Desktop dropdown panels should sit directly against the menu heading with no dead hover gap, and should use a deep-purple background with white submenu links.
- Switch to the Home-Start UK right-hand drawer menu only when the navigation row would wrap or overflow, or at tablet/mobile widths.
- In drawer mode, keep the orange circular hamburger trigger visible at the far right of the header, with no visible text label.
- In drawer mode, keep `Get help` and `Donate` visible in the header beside the hamburger as primary actions, while also keeping them at the top of the opened drawer.
- In drawer mode, include the slim orange Home-Start divider between the visible header CTA group and the hamburger control.
- The drawer should slide in from the right as a deep-purple off-canvas panel, around `25rem` wide on desktop and `90vw` on smaller screens.
- Drawer top-level rows should be bold white accordion rows with a chevron indicator and an orange left accent bar on active, hover, focus, and open states.
- Drawer submenu rows should sit on a subtler translucent purple surface, use white text, and repeat the orange left accent treatment for current, hover, and focus states.
- In drawer mode, keep the primary `Get help` and `Donate` CTAs at the top and the social links at the bottom, using Nottingham's own social URLs.
- In drawer mode, keep the close control on the far right and use the Home-Start-style yellow `Get help` variant instead of the desktop purple version.
- In drawer mode, treat the CTA stack and close control as one aligned top row so the close button is vertically centered against the CTA block.
- Drawer navigation should remain toggle-driven, keyboard-accessible, and touch-friendly.
- Navigation should feel close to the national site: simple, quick to scan, and unobtrusive when closed.
- Page URLs should stay flat and should not include the top-level navigation/header section as a path prefix. Preserve the menu hierarchy in `_data/navigation.yml` and breadcrumbs instead of URL folders.
- Breadcrumbs should follow the reference style: a compact magenta ordered list showing the navigation section and current page, with slash separators and no leading `Home` crumb.

## Button Rules

- The header `Get help` and `Donate` buttons should follow the Home-Start UK CTA style.
- The header `Get help` button should be a purple pill with white text and a yellow circular heart icon on the right.
- The header `Donate` button should be a yellow pill with dark text and a purple circular chevron icon on the right.
- Those header CTA icons should use the same full circular proportions as the live Home-Start UK header assets rather than reduced custom icon sizing.
- On hover and focus, those two header CTAs should invert into the alternate Home-Start UK state rather than switching to a generic darkened fill.
- General site buttons should use the Home-Start-style orange pill treatment with purple text by default, with purple outline or inverse variants only where the surrounding section demands it.
- Avoid inventing custom CTA treatments when there is already a clear Home-Start UK equivalent.

## Colour Rules

- Use white or near-white as the default page background.
- Keep the palette close to the national site: deep purple for headings and strong sections, orange for primary actions and highlights, and pale lilac for secondary surfaces.
- Avoid reintroducing yellow page gradients or warm cream washes as a dominant site background treatment.
- Prefer pale lilac panels over beige or peach panels when a soft surface treatment is needed.
- Use accent colours deliberately. Do not let the whole site collapse into a single flat brand wash.

## Typography Rules

- Typography should feel warm, human, and close to the national site rather than generic app UI.
- Use `Source Sans 3` as the working typeface across the site to stay visually close to the live Home-Start styling.
- Keep headings clear and expressive, with good contrast and generous spacing.
- Keep body copy highly readable and content-first.

## Imagery Rules

- Main logos and icons must remain fully visible.
- Rounded corners are acceptable for supporting photography, but never when they hide important brand shapes or page content.
- Use local Nottingham imagery and illustrations where available.
- If a visual treatment makes local content feel clipped or secondary, simplify the treatment.

## Component Rules

- Prefer semantic cards, bands, split sections, accessible accordions, and styled download lists over legacy tables and brittle one-off markup.
- The homepage should follow this broad rhythm: hero, secondary promo cards, impact band, support or volunteer or fundraising promos, key links or resources, then closing CTA/footer prompt.
- Standard content pages should use a strong hero and readable content area.
- Cards and panels should rely on borders and surface colour more than shadows. The live Home-Start style is comparatively flat and crisp.
- Impact side panels should keep Nottingham-owned impact facts, with generous padding, centered text, and larger graphic icons inside pale-lilac Home-Start-style surfaces.
- Donation pages should keep the existing donation methods and endpoints while adopting the refreshed visual system.
- Resource collections such as reports and case studies should stay document-driven and render as clean download cards or lists.
- Use Font Awesome brand icons for social media links instead of custom inline vector icon drawings.
- The footer should follow the reference pattern: a separate rounded purple footer panel for navigation/social content, a labelled `Find us on social media` section, and a distinct credits/legal strip outside the purple panel.

## CMS And Structure Rules

- Keep content in `pages/**`, collections, and `_data/**` rather than hardcoding copy into templates.
- Keep the implementation maintainable: thin layouts, reusable includes, one main stylesheet, and one main script unless there is a strong reason to split further.
- Prefer reusable component classes and CSS variables over page-specific exceptions.
- Boxed content items should default to filled image cards; use `fill: false` on items such as supporter logos that must remain fully visible without cropping.
- Keep `accordion` as the standard spelling in layouts, includes, and CMS config.

## Accessibility And Responsive Rules

- Maintain semantic landmarks, heading order, keyboard navigation, and visible focus states.
- Desktop hover dropdown interactions must also work for keyboard users via focus behavior.
- Drawer accordion interactions must work for mouse, touch, keyboard, Escape-to-close, and overlay-click dismissal.
- Respect reduced-motion expectations and avoid unnecessary animation.
- Check the header, hero, drawer menus, cards, and footer at mobile, tablet, and desktop widths whenever they change.

## Self-Learning And Maintenance

- Treat this file as the current design canon for the repo.
- Whenever a visual rule becomes intentional and is kept after implementation, update this file in the same change.
- Prefer editing an existing section over appending loose notes at the bottom.
- Group new rules under the smallest relevant heading such as `Header Rules`, `Button Rules`, or `Colour Rules`.
- Remove or rewrite superseded rules immediately so this file stays current rather than historical.
- If a rule was taken directly from `home-start.org.uk`, name the relevant component or behavior clearly instead of writing a vague note.
- If the codebase and this file drift apart, bring them back into sync before closing the task.
- Keep this file concise, organized, and prescriptive. It should help future agents make consistent decisions quickly.
