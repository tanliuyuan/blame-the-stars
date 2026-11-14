// Checks against published 2023–2025 ephemeris dates. Run with `npm test` (sets TZ=America/New_York).
import test from 'node:test';
import assert from 'node:assert/strict';
import { findExcuses, rahuKalam, voidOfCourse, lon, PLANETS, SIGNS, DETRIMENT, FALL, MALEFICS } from './excuses.js';

const has = (iso, id, title = '') => findExcuses(new Date(iso)).some((e) => e.id === id && e.title.includes(title));

test('retrogrades', () => {
  assert.ok(has('2024-04-10T12:00Z', 'retrograde:Mercury')); // Apr 1–25, 2024
  assert.ok(!has('2024-06-15T12:00Z', 'retrograde:Mercury'));
  assert.ok(has('2023-08-10T12:00Z', 'retrograde:Venus')); // Jul 22–Sep 3, 2023
  assert.ok(has('2025-01-15T12:00Z', 'retrograde:Mars')); // Dec 6, 2024–Feb 23, 2025
  assert.ok(has('2024-09-01T12:00Z', 'retrograde:Saturn')); // Jun 29–Nov 15, 2024
});

test('Mercury shadows around the Apr 2024 retrograde', () => {
  assert.ok(has('2024-03-25T12:00Z', 'shadow:Mercury', 'pre-shadow')); // from Mar 18
  assert.ok(has('2024-05-05T12:00Z', 'shadow:Mercury', 'post-shadow')); // until May 13
  assert.ok(!has('2024-06-15T12:00Z', 'shadow:Mercury'));
});

test('dignities, moon and eclipses', () => {
  assert.ok(has('2024-10-01T12:00Z', 'fall', 'Mars in Cancer')); // Sep 4–Nov 4, 2024
  assert.ok(has('2024-01-25T18:00Z', 'full-moon'));
  assert.ok(!has('2024-01-11T12:00Z', 'full-moon')); // new moon
  assert.ok(has('2024-04-08T18:00Z', 'eclipse', 'total solar'));
  assert.ok(has('2024-04-01T12:00Z', 'eclipse-season'));
});

test('void of course ends exactly when the Moon changes sign', () => {
  for (let t = Date.parse('2024-01-01T00:00Z'), found = 0; found < 3; t += 6 * 36e5) {
    const voc = voidOfCourse(new Date(t));
    if (!voc) continue;
    found++;
    const moonSign = (ms) => Math.floor(lon('Moon', new Date(ms)) / 30);
    assert.notEqual(moonSign(+voc.end), moonSign(t));
    assert.equal(moonSign(+voc.end - 10 * 6e4), moonSign(t));
  }
});

test('Rahu Kalam is the 5th eighth of daylight on a Wednesday in NYC', () => {
  const { start, end } = rahuKalam(new Date('2024-06-12T12:00:00'), 40.71, -74.01); // sunrise ~5:25, sunset ~8:29 EDT
  assert.equal(start.getHours(), 12);
  assert.ok(Math.abs((end - start) / 6e4 - 113) < 3, `${(end - start) / 6e4} min`);
  assert.ok(Math.abs(((lon('Sun', new Date('2024-03-20T03:06Z')) + 180) % 360) - 180) < 0.1); // sanity: tropical zodiac, equinox at 0° Aries
});

test('every card back has specific text', async () => {
  const { PAIR, CONJ, DEBILITY } = await import('./details.js');
  const never = ['Sun-Mercury', 'Sun-Venus', 'Mercury-Venus', 'Neptune-Pluto']; // can't square or oppose in our era
  PLANETS.forEach((a, i) => PLANETS.slice(i + 1).forEach((b) => {
    const key = `${a}-${b}`;
    if (!never.includes(key)) assert.ok(PAIR[key], `PAIR ${key}`);
    if ([a, b].some((p) => MALEFICS.includes(p))) assert.ok(CONJ[key], `CONJ ${key}`);
  }));
  for (const [id, table] of [['detriment', DETRIMENT], ['fall', FALL]]) {
    for (const [p, signs] of Object.entries(table)) signs.forEach((s) => assert.ok(DEBILITY[`${id}:${p}:${SIGNS[s]}`], `${id} ${p} ${SIGNS[s]}`));
  }
  // End to end on dates that hit most card types (incl. Rahu Kalam on a Wednesday in NYC).
  for (const iso of ['2024-04-08T18:00Z', '2024-03-25T12:00Z', '2024-01-25T18:00Z', '2024-10-01T12:00Z', '2025-01-15T12:00Z', '2024-06-12T16:30Z']) {
    for (const e of findExcuses(new Date(iso), { latitude: 40.71, longitude: -74.01 })) {
      assert.ok(e.more.length, `${iso} ${e.title}: no back`);
      for (const [h, t] of e.more) assert.ok(h && t && !t.includes('undefined'), `${iso} ${e.title}: "${h}"`);
    }
  }
});
