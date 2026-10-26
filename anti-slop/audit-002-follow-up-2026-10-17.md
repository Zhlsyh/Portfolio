# Anti-Slop Audit 002 Follow-up (2026-10-17)

Mode: AFTER. The approved repair set: findings 1-9 and proposals P-1..P-5 from [Audit 002](audit-002-2026-10-17.md). Dials stay ENERGY 3 / RHYTHM 3 / MOTION 3.

## Resolutions

1. **Error color (R-25):** new theme token `--error` in `styles/globals.css`. Dark keeps `#f87171` (about 5.5:1); light uses `#b42318` (about 5.8:1 on `#eef3ea`). `Contact.tsx` now reads the token; verified in-browser: dark renders `rgb(248,113,113)`, light renders `rgb(180,35,24)` for the same validation message.
2. **Scroll rail fake numbers (R-17, R-31):** the `0000-3600` ticks and the `</>` glyph are removed. The rail keeps the current section tag and gains a real readout: `NN/06` using the actual nav index of the active section.
3. **Em dash (R-02):** the default certification description in `data/content.ts` now reads "(2026), dinyatakan Kompeten". Live Firestore text was already clean; only the fallback was affected.
4. **Icon relevance (R-04):** `travel_explore` replaced with `view_in_ar` for "Three.js, WebRTC & Socket.IO", matching the 3D/graphics meaning of the item.
5. **Button hierarchy (R-11, R-06, P-4):** one primary register (stadium, extrabold, sentence case, no uppercase) and one secondary register (rounded-xl, font-bold, sentence case, no uppercase/tracking). Applied to hero CTAs, nav links and Resume button, project tabs, and the org flip-card buttons. Card chips (`category`, `badge`) use `rounded-md` to separate labels from controls. The mono uppercase labels keep their written reason as part of the "signal" identity.
6. **Section rhythm (R-05, R-19, P-3):** Arsip Karya is now a full-bleed band (`--bg-soft`, border-y) breaking the container rhythm; Pengalaman tightened to `py-20 md:py-28`; Lisensi to `py-20 md:py-24`; Kontak's top padding reduced to `pt-16 md:pt-24` to remove the doubled gap after Lisensi.
7. **Hero badges (R-14, C-3, P-1):** the four identical cards are gone; capabilities render as one inline strip under an accent-topped hairline, removing both the duplicate card grid and the icon-rotate gimmick.
8. **Weight scale (R-06, P-5):** `font-extrabold` now belongs to display headings only (h1, h2, menu links, modal titles). Card-level and control text moved to 700 (`.uno-card-title` in CSS, project/experience/certification/capability headings, org card internals, dialog titles).
9. **StatsBar dead branch (C-2):** the unreachable empty-state block was removed.
10. **P-1 (hero bio):** the fallback `HERO.description` in `data/content.ts` is now a two-sentence version. The live value lives in Firestore, so the hero description must still be updated through the Admin CMS (Hero editor) by the owner.
11. **P-2 (identity motif):** new `signal-ruler` element in `SectionHeader` (and `globals.css`): a repeating tick ruler with one taller accent tick, extending the engine/instrumentation language of the mono labels. Static element, no motion cost, consistent across sections.
12. **Single-certificate layout:** the new asymmetric Lisensi grid collapses to a single readable two-column card when the CMS lists only one certification (verified live: currently only the BNSP card is present), and uses col-span-7 / col-span-5 plus `md:mt-14` stagger when both exist.

## Verification

- `npm run build`: PASS (Next.js 15.5.23, type check and static export clean; `/`, `/404`, `/admin` exported).
- Dev run and interactive click-through at 127.0.0.1:3000 (light and dark):
  - Full-screen menu: opened, Escape closed it.
  - Project dialog: first card opened, title matched the card, Escape closed it.
  - Resume dialog: opened, all three PDF hrefs present (`Umum_ID`, `General_EN`, `Creative_EN`), Escape closed it.
  - Contact form: short-name submit produced the validation message rendered with `var(--error)` in both themes.
  - Theme toggle: light and dark both render; body background verified `rgb(11,23,18)` in dark.
  - "Kembali ke Atas" scrolled to `#home`.
- Console: no application errors; only React DevTools/HMR infos and one `NotAllowedError` from `clipboard.writeText`, caused by the automation browser's clipboard permission, not by a code path change (the copy handler is unchanged from Audit 001).
- The scroll rail renders only at `lg` (1024px+); the automation window is 800px wide, so its new index readout was verified by code inspection (real nav index, not constants), consistent with its prior functional verification in Audit 001.
- Mobile re-check was not automated in this pass (no viewport emulator available in the test browser); layout changes are flex-wrap/grid based and accept the overflow rules, but a 320px pass on the hero strip and Lisensi grid is still recommended before shipping.

## Addendum (2026-10-17, later same day): Org flip-card recolor, then REVERTED

The owner initially asked for a solid green background with contrasting text on the organizational flip cards; the change was implemented (`.uno-card-face` on `var(--accent)`, inner surfaces via `color-mix()`, inverted "Perbesar" button) and verified in both themes (dark: about 9:1, light: about 5.8:1; build PASS).

The owner then asked to cancel it. The recolor was fully reverted: `.uno-card-face` back to the `--bg-elevated`-to-`--bg-soft` gradient with `--border-strong` border, oval/chips/corners back to their pre-recolor tokens, and `OrgFlipCard.tsx` inline styles restored. The font-weight refinements from proposal P-5 (700 instead of 800 on card-level titles) were kept, since they belong to the approved P-1..P-5 set.

Re-verified after the revert: served CSS shows `linear-gradient(150deg, rgb(18,42,33), rgb(14,32,25))` with inherited `--text` color in dark theme; light-mode screenshot shows the original bright-surface cards with green ovals and accent period text. `npm run build`: PASS.

## Delivery Gate status

- R-02 PASS, R-25 PASS (measured), R-17 PASS (fake readout removed), R-26/R-32 PASS for tested flows, R-34 PASS (both themes), R-33 PASS (source edits only), R-36/R-38 PASS (no new claims), R-11/R-06 reasons recorded above, R-05 rhythm now varies visibly.
- R-35 PARTIAL: everything except an automated 320px pass (impossible in this environment) and the live hero description, which only the owner can update in the CMS.
