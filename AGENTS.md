# Notes for AI agents

Read `README.md` first for what the app does and how to run it.

## Ground rules

- **Accuracy beats jokes.** Every excuse must be a real astronomical event that astrology or folk belief
  really does treat as unlucky, and every explanation in `WHY` (in `excuses.js`) must be culturally and
  astrologically accurate. Humor is welcome only when it doesn't bend a fact. When you add or change a
  claim, check it against a source and say which claims you couldn't verify.
- **Only misfortune.** Don't add events that astrology treats as neutral or lucky (Jupiter retrograde, new
  moons, equinoxes, ordinary sign changes, benefic conjunctions).
- **No build step, no new dependencies.** It's a static page plus `excuses.js`. Astronomy Engine is the
  only dependency: `package.json` pins it for Node tests, and the import map in `index.html` loads the same
  version from jsDelivr. If you bump one, bump both.
- **Keep it private.** Nothing on the page sends data anywhere. The visitor's location is only used in
  the browser for Rahu Kalam.

## Coupling that's easy to break

- `index.html` picks each card's glyph from the first word of the excuse title (`Venus is retrograde` →
  ♀). Titles for planet-based excuses must start with the planet name.
- `test.js` matches parts of titles (`pre-shadow`, `Mars in Cancer`, `total solar`), so rewording a title
  can break a test.
- Excuse `id`s key both `WHY` in `excuses.js` and `LOOK` (category label and symbol) in `index.html`. A new
  excuse needs an entry in both.
- Glyphs get `︎` appended so iOS doesn't render ♀ ♂ as emoji. Keep it.

## Verifying a change

1. `nvm use && npm test`. Node 16 can't load Astronomy Engine's ESM build, so use Node 22.
2. For anything visible, serve the folder (`python3 -m http.server`) and screenshot it in headless Chrome
   at desktop and phone width. Pass `--force-prefers-reduced-motion`, or the cards are captured mid-fade.
   Headless Chrome won't go narrower than about 500px, so for a real 390px phone check, load the page in a
   390px-wide iframe.
3. Vercel deploys `main`, so pushing to `main` is a production deploy.

## Known simplifications

- One 3° orb for every aspect, where traditional orbs are wider and differ by planet.
- Station dates come from a day-by-day scan, so they're accurate to about a day.
- "Eclipse season" is ±17 days around an eclipse, an approximation of the astronomical definition.
- The void-of-course check includes Uranus, Neptune and Pluto (the modern method), even though the
  explanation cites William Lilly, who used only the seven classical planets.
