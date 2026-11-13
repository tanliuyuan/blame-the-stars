import * as A from 'astronomy-engine';

const DAY = 864e5;
const SIGNS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const PLANETS = ['Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
// shortcut: one 3° orb for every aspect; astrologers use wider, planet-specific orbs. Widen if the site feels too quiet.
const ORB = 3;
// Traditional dignities, as sign indexes into SIGNS.
const DETRIMENT = { Sun: [10], Moon: [9], Mercury: [8, 11], Venus: [0, 7], Mars: [1, 6], Jupiter: [2, 5], Saturn: [3, 4] };
const FALL = { Sun: [6], Moon: [7], Mercury: [11], Venus: [5], Mars: [3], Jupiter: [9], Saturn: [0] };
// Which eighth of daylight is Rahu Kalam, indexed by Date.getDay() (Sunday = 0).
const RAHU_PART = [8, 2, 7, 5, 6, 4, 3];

export const WHY = {
  'retrograde:Mercury': 'Mercury, named for the messenger god, rules communication, travel and contracts. When it appears to move backward, astrologers say all three go haywire: lost emails, delayed flights, deals that fall apart.',
  'shadow:Mercury': 'Astrologers say Mercury retrograde is felt from the moment Mercury first crosses the stretch of sky it will later retrace (pre-shadow) until it has crossed it for the third time (post-shadow).',
  'retrograde:Venus': 'Venus rules love, beauty and money. Retrograde Venus is blamed for exes reappearing, relationships souring, and regrettable haircuts and purchases.',
  'retrograde:Mars': 'Mars, the god of war, rules drive and aggression. Retrograde Mars is said to stall plans and turn that energy into frustration, arguments and accidents.',
  'retrograde:Saturn': 'Saturn is the "greater malefic" of traditional astrology and rules limits, duty and hard lessons. Retrograde, it is said to drag old burdens and unfinished business back into your life.',
  square: 'Since Ptolemy, planets 90° apart have been read as hostile: two agendas at cross purposes, producing friction and obstacles.',
  opposition: 'Planets 180° apart sit on opposite sides of the sky. Tradition reads this as a hostile aspect: tug-of-war, confrontation, things pulling apart.',
  conjunction: 'Mars (the "lesser malefic") and Saturn (the "greater malefic") are the two troublemakers of traditional astrology. A planet sitting right on top of one is said to be corrupted by it.',
  detriment: 'A planet in the sign opposite one it rules is in "detriment": a fish out of water, working against its own nature.',
  fall: 'A planet in the sign opposite its exaltation is in its "fall": at its weakest and least able to do any good.',
  'full-moon': 'Folk belief in many cultures ties the full moon to madness ("lunatic" comes from Luna), and nurses, police and bartenders still swear the night gets weird.',
  eclipse: 'Eclipses have been bad omens for millennia. Babylonian astrologers read them as threats to the king, and in Hindu myth the demon Rahu swallows the Sun or Moon.',
  'eclipse-season': 'Modern astrologers treat the weeks around an eclipse as "eclipse season": a time of sudden endings and upheaval, when you are told not to start anything important.',
  voc: 'Between its last major aspect in a sign and its move into the next, the Moon is "void of course". Astrologers since William Lilly say whatever you start now comes to nothing.',
  'rahu-kalam': 'Vedic astrology splits each day\'s daylight into eight parts and gives one to Rahu, the shadow planet that causes eclipses. Many people in India still won\'t start anything important during Rahu Kalam.',
};

export const lon = (body, date) => (body === 'Moon' ? A.EclipticGeoMoon(date).lon : A.Ecliptic(A.GeoVector(body, date, true)).elon);
const wrap = (d) => ((((d % 360) + 540) % 360) - 180); // to (-180, 180]
const sign = (l) => Math.floor(l / 30);
const speed = (body, t) => wrap(lon(body, new Date(+t + DAY / 2)) - lon(body, new Date(+t - DAY / 2)));
const between = (l, from, to) => wrap(l - from) >= 0 && wrap(to - l) >= 0;

// Walks day by day until the planet changes direction. Forward: first day of the new direction.
// Backward: first day of the current direction. Accurate to about a day.
function flip(body, t, dir) {
  const s0 = Math.sign(speed(body, t));
  for (let i = 1; i <= 400; i++) {
    const u = new Date(+t + dir * i * DAY);
    if (Math.sign(speed(body, u)) !== s0) return dir > 0 ? u : new Date(+u + DAY);
  }
}

function retrogrades(date) {
  const out = [];
  for (const body of ['Mercury', 'Venus', 'Mars', 'Saturn']) {
    if (speed(body, date) < 0) {
      out.push({ id: `retrograde:${body}`, title: `${body} is retrograde`, start: flip(body, date, -1), end: flip(body, date, 1) });
    } else if (body === 'Mercury') {
      const l = lon(body, date);
      const nextR = flip(body, date, 1), nextD = flip(body, nextR, 1);
      const lastD = flip(body, date, -1), lastR = flip(body, new Date(+lastD - DAY), -1);
      if (between(l, lon(body, nextD), lon(body, nextR))) {
        out.push({ id: 'shadow:Mercury', title: 'Mercury is in its pre-shadow', detail: `Retrograde starts ${fmtDay(nextR)}` });
      } else if (between(l, lon(body, lastD), lon(body, lastR))) {
        out.push({ id: 'shadow:Mercury', title: 'Mercury is in its post-shadow', detail: `Retrograde ended ${fmtDay(lastD)}` });
      }
    }
  }
  return out.map((e) => (e.start ? { ...e, detail: `${fmtDay(e.start)} – ${fmtDay(e.end)}` } : e));
}

function aspects(date) {
  const l = Object.fromEntries(PLANETS.map((p) => [p, lon(p, date)]));
  const out = [];
  PLANETS.forEach((a, i) => PLANETS.slice(i + 1).forEach((b) => {
    const sep = Math.abs(wrap(l[a] - l[b]));
    const hit = (kind, exact) => Math.abs(sep - exact) <= ORB
      && out.push({ id: kind, title: `${a} ${{ square: 'square', opposition: 'opposite', conjunction: 'conjunct' }[kind]} ${b}`, detail: `${Math.abs(sep - exact).toFixed(1)}° from exact` });
    hit('square', 90);
    hit('opposition', 180);
    if ([a, b].some((p) => p === 'Mars' || p === 'Saturn')) hit('conjunction', 0);
  }));
  return out;
}

function debilities(date) {
  const out = [];
  for (const p of Object.keys(FALL)) {
    const s = sign(lon(p, date));
    for (const [id, table] of [['detriment', DETRIMENT], ['fall', FALL]]) {
      if (table[p].includes(s)) out.push({ id, title: `${p} in ${SIGNS[s]} is in its ${id}` });
    }
  }
  return out;
}

function moonStuff(date) {
  const out = [];
  if (Math.abs(A.MoonPhase(date) - 180) <= 12) { // the Moon moves ~12° a day against the Sun, so within about a day of full
    out.push({ id: 'full-moon', title: 'It\'s a full moon', detail: `Exactly full ${fmt(A.SearchMoonPhase(180, new Date(+date - 2 * DAY), 4).date)}` });
  }
  const from = new Date(+date - 20 * DAY);
  const near = [['lunar', A.SearchLunarEclipse(from)], ['solar', A.SearchGlobalSolarEclipse(from)]]
    .map(([type, e]) => ({ name: `${e.kind} ${type} eclipse`, at: e.peak.date, days: Math.abs(e.peak.date - date) / DAY }))
    .filter((e) => e.days <= 17)
    .sort((x, y) => x.days - y.days);
  if (near[0]?.days <= 1) out.push({ id: 'eclipse', title: `There's a ${near[0].name}`, detail: fmt(near[0].at) });
  else if (near.length) out.push({ id: 'eclipse-season', title: 'It\'s eclipse season', detail: near.map((e) => `${cap(e.name)}: ${fmtDay(e.at)}`).join(' · ') });
  return out;
}

// Void of course: the Moon makes no more exact major aspects to a planet before it changes sign.
export function voidOfCourse(date) {
  const step = 10 * 60e3, s = sign(lon('Moon', date));
  let end = +date;
  while (sign(lon('Moon', new Date(end))) === s) end += step;
  const targets = [0, 60, -60, 90, -90, 120, -120, 180];
  let prev;
  for (let t = +date; t <= end; t += step) {
    const m = lon('Moon', new Date(t));
    const cur = PLANETS.flatMap((p) => { const d = wrap(m - lon(p, new Date(t))); return targets.map((a) => wrap(d - a)); });
    if (prev && cur.some((c, i) => Math.abs(c) < 5 && Math.sign(c) !== Math.sign(prev[i]))) return null;
    prev = cur;
  }
  return { id: 'voc', title: 'The Moon is void of course', detail: `Until ${fmt(new Date(end))}`, end: new Date(end) };
}

// The day's Rahu Kalam window for an observer, in the runtime's local time zone.
export function rahuKalam(date, latitude, longitude) {
  const midnight = new Date(date);
  midnight.setHours(0, 0, 0, 0);
  const obs = new A.Observer(latitude, longitude, 0);
  const rise = A.SearchRiseSet('Sun', obs, 1, midnight, 1);
  const set = rise && A.SearchRiseSet('Sun', obs, -1, rise.date, 1);
  if (!set) return null; // polar day or night: no sunrise/sunset to divide
  const part = (set.date - rise.date) / 8;
  const start = new Date(+rise.date + (RAHU_PART[midnight.getDay()] - 1) * part);
  return { start, end: new Date(+start + part) };
}

export function findExcuses(date = new Date(), coords = null) {
  const out = [...retrogrades(date), ...aspects(date), ...debilities(date), ...moonStuff(date)];
  const voc = voidOfCourse(date);
  if (voc) out.push(voc);
  const rk = coords && rahuKalam(date, coords.latitude, coords.longitude);
  if (rk && date >= rk.start && date < rk.end) {
    out.push({ id: 'rahu-kalam', title: 'It\'s Rahu Kalam', detail: `${fmtTime(rk.start)} – ${fmtTime(rk.end)}` });
  }
  return out.map((e) => ({ ...e, why: WHY[e.id] }));
}

const cap = (s) => s[0].toUpperCase() + s.slice(1);
const fmt = (d) => d.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
const fmtDay = (d) => d.toLocaleDateString(undefined, { dateStyle: 'medium' });
const fmtTime = (d) => d.toLocaleTimeString(undefined, { timeStyle: 'short' });
