# Blame the Stars

Every real astrological excuse for whatever is going wrong in your life right now.

Live at https://blamethestars-sage.vercel.app

The planet positions are real: they're calculated in the browser with
[Astronomy Engine](https://github.com/cosinekitty/astronomy). The blame is traditional: each excuse is
an event that astrology or folk belief really does link to bad luck, with a short (and hopefully funny)
explanation of why.

## What it checks

| Excuse | How it's detected |
|---|---|
| Mercury, Venus, Mars, Saturn retrograde | The planet's geocentric ecliptic longitude is decreasing |
| Mercury pre-/post-shadow | Mercury is direct but inside the arc it retraces during its nearest retrograde |
| Squares and oppositions | Two planets (Sun through Pluto) within 3° of 90° or 180° apart |
| Conjunctions with Mars or Saturn | A planet within 3° of a traditional malefic |
| Detriment and fall | A traditional planet in the sign of its detriment or fall |
| Full moon | Within about a day of exactly full |
| Eclipse / eclipse season | Within a day of an eclipse / within 17 days of one |
| Void-of-course Moon | The Moon makes no more exact major aspects before it changes sign |
| Rahu Kalam | The weekday's eighth of local daylight, after the visitor shares their location |

Events that astrology treats as neutral or lucky (Jupiter retrograde, new moons, equinoxes, most sign
changes) are left out on purpose.

## Running it

There's no build step. It's a static page plus one ES module, and the browser loads Astronomy Engine from
jsDelivr through an import map.

```sh
nvm use                     # Node 22
npm install
npm test                    # checks the calculations against known 2023–2025 events
python3 -m http.server      # then open http://localhost:8000
```

Opening `index.html` straight from disk doesn't work, because ES modules need a server. Location
(for Rahu Kalam) and the share button's clipboard fallback need HTTPS or localhost.

## Deploying

Vercel deploys `main` automatically. Push and the change is live in under a minute.

## Files

- `excuses.js`: all astronomy and excuse logic, plus the explanation for each excuse (`WHY`)
- `index.html`: the page, styles and rendering
- `test.js`: tests against published ephemeris dates
