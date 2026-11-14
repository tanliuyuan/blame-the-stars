// The back of each card: a specific explanation for this exact excuse (this planet pair, this sign...).
// Same rule as WHY in excuses.js: accuracy beats jokes. Keys use the planet order in excuses.js PLANETS.

export const PLANET = {
  Sun: 'In astrology the Sun is you at your core: identity, vitality, willpower and pride. It also stands for whoever is in charge, from your father to your boss. It rules Leo.',
  Moon: 'The Moon rules feelings, moods, instincts and habits, plus home, family and your mother. It moves faster than anything else in the sky, so astrologers use it to read the mood of the day. It rules Cancer.',
  Mercury: 'Named for the messenger of the gods, Mercury runs the mind: thinking, talking, writing, deals, short trips and paperwork. Modern astrologers hand it your phone and laptop too. It rules Gemini and Virgo.',
  Venus: 'Venus is love, attraction, beauty, pleasure and money. Traditional astrology calls her the "lesser benefic", one of the two planets that bring good things. She rules Taurus and Libra.',
  Mars: 'Mars is drive, courage, desire and anger: the planet of fights, fevers, cuts and burns. Traditional astrology calls him the "lesser malefic". He rules Aries and, traditionally, Scorpio.',
  Jupiter: 'Jupiter is growth, luck, generosity, optimism, faith, law and higher learning: the "greater benefic" of traditional astrology. His weakness is excess. He rules Sagittarius and, traditionally, Pisces.',
  Saturn: 'Saturn is time, limits, duty, discipline, fear, delay and loss: the "greater malefic" of traditional astrology. Whatever Saturn touches gets slower, colder and heavier. He rules Capricorn and, traditionally, Aquarius.',
  Uranus: 'Uranus wasn\'t discovered until 1781, so its meanings all come from modern astrologers: sudden change, shocks, rebellion, freedom, inventions and technology. It\'s the planet of "nobody saw that coming". Modern ruler of Aquarius.',
  Neptune: 'Discovered in 1846, Neptune means (to modern astrologers) dreams, imagination, spirituality, illusion, confusion, deception and escapism. Wherever Neptune goes, things get foggy. Modern ruler of Pisces.',
  Pluto: 'Discovered in 1930, Pluto means (to modern astrologers) power, control, obsession, secrets, and destruction followed by rebirth. Astronomers demoted it to a dwarf planet in 2006. Astrologers did not. Modern ruler of Scorpio.',
};

const ASPECT = {
  square: 'Traditional astrologers counted the square (90°) as an aspect of enmity. Modern astrologers describe it as friction: two planets getting in each other\'s way until something gives.',
  opposition: 'Traditional astrologers counted the opposition (180°) as the most hostile aspect of all, with the two planets as far apart as they can get. Modern astrologers describe it as a standoff, often acted out with other people.',
};

// Square or opposition between the pair. Sun–Mercury, Sun–Venus and Mercury–Venus are missing on purpose: those
// planets never get that far apart in our sky. Neptune–Pluto is missing because they've sat in a sextile since the 1940s.
export const PAIR = {
  'Sun-Mars': 'Your will runs straight into Mars\'s anger and drive. Astrologers read it as impatience, ego clashes, picking fights, burnout and accident-prone haste. Everyone is a little too ready to prove a point.',
  'Sun-Jupiter': 'Jupiter inflates whatever it touches, and here it inflates the ego. Astrologers read it as overconfidence, overpromising, overspending and overeating. A benefic in a hard aspect won\'t hurt you. It just lets you hurt yourself.',
  'Sun-Saturn': 'Saturn squeezes the Sun, so vitality meets restriction. Astrologers read it as low energy, self-doubt, feeling blocked or unappreciated, and clashes with bosses and authority.',
  'Sun-Uranus': 'Uranus jolts your sense of self and your plans. Astrologers read it as sudden disruptions, restlessness, rebellion, and changes forced on you instead of chosen.',
  'Sun-Neptune': 'Neptune fogs up the Sun. Astrologers read it as low energy, confusion about what you actually want, wishful thinking, and being fooled by others or by yourself.',
  'Sun-Pluto': 'Pluto turns the ego into a battleground. Astrologers read it as power struggles, control issues, obsession, and run-ins with people who want power over you.',
  'Mercury-Mars': 'Mars puts an edge on Mercury\'s words. Astrologers read it as sharp tongues, arguments, rash decisions and angry messages sent too fast. Road rage gets filed here too.',
  'Mercury-Jupiter': 'Jupiter blows Mercury\'s thinking out of proportion. Astrologers read it as exaggeration, overcommitting, talking more than listening, and missing the details while chasing the big picture.',
  'Mercury-Saturn': 'Saturn slows and chills Mercury. Astrologers read it as pessimistic thinking, harsh criticism, stalled conversations, communication delays and paperwork that drags on forever.',
  'Mercury-Uranus': 'Uranus electrifies Mercury. Astrologers read it as scattered thoughts, nervous tension, blurting things out, abrupt news and tech glitches.',
  'Mercury-Neptune': 'Neptune muddies Mercury\'s clear thinking. Astrologers read it as confusion, forgetfulness, misunderstandings and misinformation, from little white lies to outright scams.',
  'Mercury-Pluto': 'Pluto drags Mercury into the deep end. Astrologers read it as obsessive thoughts, prying, manipulative talk, and arguments that someone absolutely has to win.',
  'Venus-Mars': 'Mythology\'s favorite couple, at odds. Venus wants harmony and Mars wants to conquer, so astrologers read it as romantic friction, jealousy, flirting that turns into fighting, and desire out of sync with affection.',
  'Venus-Jupiter': 'Two benefics, too much of a good thing. Astrologers read it as overindulgence, overspending, laziness, and loving the idea of someone more than the actual person.',
  'Venus-Saturn': 'Saturn puts Venus on ice. Astrologers read it as loneliness, feeling unloved or rejected, cold relationships and tight money.',
  'Venus-Uranus': 'Uranus shakes up Venus. Astrologers read it as sudden attractions and sudden breakups, needing space in love, and impulse purchases.',
  'Venus-Neptune': 'Neptune hands Venus rose-colored glasses. Astrologers read it as idealizing someone, romantic disillusionment, and being deceived in love or money.',
  'Venus-Pluto': 'Pluto turns Venus obsessive. Astrologers read it as jealousy, possessiveness, and power games over love or money.',
  'Mars-Jupiter': 'Jupiter amplifies Mars. Astrologers read it as overreach, recklessness, taking on far too much, and the kind of righteous anger that is sure it is right.',
  'Mars-Saturn': 'The two malefics, at war. Mars wants to go and Saturn says stop, so astrologers read it as frustration, wasted effort and bottled-up anger. Traditional astrologers also linked Mars–Saturn trouble to accidents and injuries.',
  'Mars-Uranus': 'Uranus makes Mars explosive. Astrologers read it as sudden anger, impulsive risks, and their favorite warning of all: accidents.',
  'Mars-Neptune': 'Neptune dissolves Mars\'s drive. Astrologers read it as low energy, misdirected effort, passive aggression and acting on bad information.',
  'Mars-Pluto': 'Pluto supercharges Mars. Astrologers read it as power struggles, rage, ruthlessness, and conflicts that escalate far past the point of sense.',
  'Jupiter-Saturn': 'Growth meets limits: Jupiter expands, Saturn contracts. Astrologers read it as plans stalling, optimism colliding with reality, and strain in money, work or the wider world.',
  'Jupiter-Uranus': 'Jupiter amplifies Uranus. Astrologers read it as restlessness, sudden leaps for freedom, overreaching on a whim, and wild swings, including in the markets.',
  'Jupiter-Neptune': 'Jupiter inflates Neptune\'s dreams. Astrologers read it as wishful thinking, misplaced faith, bubbles and scams: anything too good to be true.',
  'Jupiter-Pluto': 'Jupiter amplifies Pluto\'s hunger for power. Astrologers read it as ruthless ambition, grabs for wealth and control, and clashes with powerful people.',
  'Saturn-Uranus': 'The old order against the new: Saturn\'s rules versus Uranus\'s rebellion. Astrologers read it as tension between security and freedom, and structures that crack suddenly under pressure.',
  'Saturn-Neptune': 'Hard reality against beautiful illusion. Astrologers read it as disillusionment, anxiety, confusion about what is real, and dreams dissolving on contact with facts.',
  'Saturn-Pluto': 'Two heavy hitters, both about control. Astrologers read it as hardship, grim power struggles, and pressure on institutions and structures.',
  'Uranus-Neptune': 'A slow, generational aspect that lasts years. Astrologers read it as sudden upheaval clashing with collective ideals and illusions.',
  'Uranus-Pluto': 'A slow, generational aspect that lasts years. Astrologers tie it to eras of upheaval and revolt: the conjunction of the mid-1960s and the squares of 2012–2015.',
};

// Conjunctions with a malefic: the malefic damages what the other planet stands for.
export const CONJ = {
  'Sun-Mars': 'Mars fuses its heat with the Sun: anger, impatience, ego fights and burnout. Bonus problem: a planet this close to the Sun is "combust" (burned up) in traditional astrology, so even Mars isn\'t at his best.',
  'Mercury-Mars': 'Mars sets Mercury\'s words on fire. Astrologers read it as a sharp tongue, heated arguments, hasty decisions, and thinking fast but not well.',
  'Venus-Mars': 'Venus is said to soften Mars, but she pays for it: love turns heated, impulsive and quarrelsome, and attraction comes with jealousy and fights.',
  'Mars-Jupiter': 'Traditionally a malefic damages whatever a benefic stands for, so Jupiter\'s luck and good judgment pick up Mars\'s haste: rash bets, overconfidence, and fights over beliefs or legal matters. Jupiter is said to calm Mars down in return, so this is one of the gentler versions.',
  'Mars-Saturn': 'Both malefics in one spot: Mars\'s heat trapped under Saturn\'s cold. Astrologers read it as stop-start effort, simmering frustration and suppressed anger. Traditional astrologers saw it as one of the most dangerous combinations, linked with accidents, injuries and hardship.',
  'Mars-Uranus': 'Mars and Uranus together are pure volatility. Astrologers read it as sudden outbursts, reckless risks, breakaways and accidents.',
  'Mars-Neptune': 'Mars\'s drive dissolves in Neptune\'s fog. Astrologers read it as fatigue, confusion about what to fight for, misdirected effort and passive aggression.',
  'Mars-Pluto': 'Mars and Pluto together are raw power. Astrologers read it as intensity, rage, power struggles and conflicts that go nuclear.',
  'Sun-Saturn': 'Saturn sits on the Sun, so vitality, confidence and recognition get rationed. Astrologers read it as tiredness, self-doubt and trouble with authority. Saturn is also "combust" this close to the Sun, which doesn\'t improve his mood.',
  'Mercury-Saturn': 'Saturn weighs on the mind. Astrologers read it as slow, pessimistic thinking, delays in communication, criticism and heavy conversations.',
  'Venus-Saturn': 'Saturn puts Venus on a strict budget. Astrologers read it as loneliness, rejection, cold or duty-bound relationships, and tight money.',
  'Jupiter-Saturn': 'The "great conjunction", which comes around about every 20 years. Medieval astrologers used it to mark the turning points of history. Saturn restricts Jupiter\'s growth, so plans and optimism run into hard limits.',
  'Saturn-Uranus': 'Saturn\'s rules meet Uranus\'s revolution in the same spot. Astrologers read it as clashes between tradition and change, and old structures cracking suddenly.',
  'Saturn-Neptune': 'Saturn\'s hard reality fuses with Neptune\'s dreams. Astrologers read it as disillusionment, anxiety and confusion about what is real, as ideals meet hard facts.',
  'Saturn-Pluto': 'Two planets of control and hardship in one spot. Astrologers read it as grim, heavy times and power struggles over institutions. Many pointed to the conjunction of January 2020 once that year got going.',
};

// Detriment: opposite the sign a planet rules. Fall: opposite the sign it is exalted in.
export const DEBILITY = {
  'detriment:Sun:Aquarius': 'The Sun rules Leo, the sign of the spotlight. Aquarius is its opposite: the group, the collective, everybody equal. The Sun\'s pride and individuality get lost in the crowd.',
  'detriment:Moon:Capricorn': 'The Moon rules Cancer, the sign of home and feelings. Capricorn is its opposite: cold, practical, ruled by Saturn. Emotions get rationed, nurturing turns businesslike, and loneliness creeps in.',
  'detriment:Mercury:Sagittarius': 'Mercury rules Gemini, the sign of facts and details. Sagittarius is its opposite: big-picture and preachy. Mercury gets tactless, careless with facts, and overconfident in what it thinks it knows.',
  'detriment:Mercury:Pisces': 'Mercury rules Virgo, the sign of analysis and precision. Pisces is its opposite: dreamy, intuitive, boundless. Logic dissolves into fog, and details go missing.',
  'fall:Mercury:Pisces': 'Mercury is also exalted in Virgo, so Pisces is its fall as well as its detriment: the only planet that gets debilitated twice over by the same sign. Clear thinking has truly left the building.',
  'detriment:Venus:Aries': 'Venus rules Libra, the sign of partnership and grace. Aries is its opposite, ruled by Mars: impatient and self-first. Love turns impulsive, selfish and quick to move on.',
  'detriment:Venus:Scorpio': 'Venus rules Taurus, the sign of simple pleasures. Scorpio is its opposite, traditionally ruled by Mars: intense and secretive. Love turns jealous, possessive and all-or-nothing.',
  'fall:Venus:Virgo': 'Venus is exalted in Pisces, the sign of unconditional love. Virgo is its opposite: critical and exacting. Love turns nitpicky, and romance gets treated like a performance review.',
  'detriment:Mars:Taurus': 'Mars rules Scorpio, the sign of intensity. Taurus is its opposite, ruled by Venus: slow, comfortable, immovable. Drive turns sluggish and stubborn, and anger smolders instead of flaring.',
  'detriment:Mars:Libra': 'Mars rules Aries, the sign of charging ahead. Libra is its opposite, ruled by Venus: diplomatic and eager to please. Mars can\'t pick a fight or a direction, so astrologers read it as indecision and passive aggression.',
  'fall:Mars:Cancer': 'Mars is exalted in Capricorn, the sign of disciplined ambition. Cancer is its opposite: emotional, defensive, homebound. Mars\'s energy turns into moodiness, sulking and anger aimed at the people closest to you.',
  'detriment:Jupiter:Gemini': 'Jupiter rules Sagittarius, the sign of wisdom and the big picture. Gemini is its opposite: curious, scattered, collecting facts. Jupiter\'s growth spreads too thin across too many things at once.',
  'detriment:Jupiter:Virgo': 'Jupiter traditionally rules Pisces, the sign of boundless faith. Virgo is its opposite: careful and critical. Jupiter\'s generosity and optimism shrink into worry and nitpicking.',
  'fall:Jupiter:Capricorn': 'Jupiter is exalted in Cancer, the sign of caring and protection. Capricorn is its opposite, ruled by Saturn. Growth gets restricted, generosity turns stingy, and faith turns into pure ambition.',
  'detriment:Saturn:Cancer': 'Saturn rules Capricorn, the sign of public duty and achievement. Cancer is its opposite: home, family and feelings. Saturn\'s cold discipline lands on your emotional life, so astrologers read it as insecurity, family burdens and a chilly home.',
  'detriment:Saturn:Leo': 'Saturn traditionally rules Aquarius, the sign of the group. Leo is its opposite: the spotlight, play and pride. Saturn restricts joy and self-expression, so fun turns rigid and authority turns proud.',
  'fall:Saturn:Aries': 'Saturn is exalted in Libra, the sign of balance and fair rules. Aries is its opposite, ruled by Mars: impulsive, impatient, act-first. Saturn\'s patience and structure clash with Aries\'s rush, so astrologers read it as rash decisions about long-term matters and authority wielded clumsily or harshly.',
  'fall:Sun:Libra': 'The Sun is exalted in Aries, where it sits at the spring equinox as days grow longer in the Northern Hemisphere. In Libra the days are shrinking, and the Sun of independence has to wait for everybody else\'s approval.',
  'fall:Moon:Scorpio': 'The Moon is exalted in Taurus, the sign of calm and comfort. Scorpio is its opposite, traditionally ruled by Mars: intense and secretive. Feelings turn brooding, jealous and stormy.',
};

const RETRO = {
  Mercury: 'Mercury turns retrograde about three times a year, for about three weeks each time, as it laps Earth on its inside track. It isn\'t really moving backward; it only looks that way from here. Traditional astrologers already counted a retrograde planet as weakened, and since Mercury runs messages, contracts and travel, those are what break. The standard advice: back up your files, reread before you hit send, and don\'t sign anything you haven\'t checked three times.',
  Venus: 'Venus turns retrograde only about every 19 months, for about six weeks, as she passes between Earth and the Sun. Since she runs love, beauty and money, astrologers advise against starting relationships, getting married, making big purchases or changing your look. Exes, unfortunately, don\'t read the ephemeris.',
  Mars: 'Mars turns retrograde about every two years, for two to two and a half months, as Earth overtakes it. That\'s also when Mars is closest and brightest, glowing red all night. Since Mars is drive and aggression, astrologers say effort stalls and anger either turns inward or erupts, and the usual advice is to avoid starting fights, big projects or elective surgery.',
  Saturn: 'Saturn is retrograde for about four and a half months of every year, as Earth overtakes it. Astrologers say its lessons turn inward: old duties, delays and unfinished business come back for review, and progress on long-term goals slows down. Think of it as being held back a grade.',
};

const ECLIPSE = {
  solar: 'In a solar eclipse the new Moon slides in front of the Sun, and day turns to dusk or even night. The Sun stands for rulers, so ancient Chinese court astronomers read solar eclipses as a warning to the emperor. In Hindu tradition, many people still avoid eating, cooking or going outside during one.',
  lunar: 'In a lunar eclipse Earth\'s shadow falls across the full Moon, sometimes turning it red. Assyrian kings took them so seriously that they put a substitute king on the throne to absorb the bad omen, then took their crown back once the danger passed. The substitute did not get to enjoy retirement.',
};
const ECLIPSE_KIND = {
  total: 'This one is total, the most dramatic kind.',
  annular: 'This one is annular: the Moon is too far away to cover the Sun completely, leaving a "ring of fire".',
  partial: 'This one is partial, but astrologers count partial eclipses too.',
  penumbral: 'This one is penumbral: the Moon only skims Earth\'s outer shadow and dims a little. Astrologers count it anyway.',
};

const ORDINAL = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'];
const KIND_WORD = { square: 'square', opposition: 'opposite', conjunction: 'conjunct' };

// Turns one excuse (with the extra fields excuses.js attaches) into [heading, text] sections.
export function details(e) {
  const planets = (...ps) => ps.map((p) => [p, PLANET[p]]);
  switch (e.id.split(':')[0]) {
    case 'square':
    case 'opposition':
    case 'conjunction': {
      const key = `${e.a}-${e.b}`;
      const why = e.id === 'conjunction' ? CONJ[key] : `${ASPECT[e.id]} ${PAIR[key] ?? ''}`.trim();
      return [...planets(e.a, e.b), [`Why ${e.a} ${KIND_WORD[e.id]} ${e.b} is trouble`, why]];
    }
    case 'detriment':
    case 'fall':
      return [...planets(e.planet), [`Why ${e.sign} is a bad fit`, DEBILITY[`${e.id}:${e.planet}:${e.sign}`]]];
    case 'retrograde':
      return [...planets(e.planet), [`Why ${e.planet} retrograde is trouble`, RETRO[e.planet]]];
    case 'shadow':
      return [...planets('Mercury'), ['The shadow zone', `The shadow is the stretch of sky Mercury will cover three times: forward, backward while retrograde, then forward again. This time it runs ${e.zone}. Mercury crosses it once in the couple of weeks before the retrograde (pre-shadow) and once more in the couple of weeks after (post-shadow). The shadow is a modern idea, not a traditional one.`]];
    case 'full-moon':
      return [...planets('Moon'), ['This full moon', `The Moon is full in ${e.moonSign}, directly across the sky from the Sun in ${e.sunSign}. Astrologers read it as a tug of war between what those two signs stand for, with emotions peaking and things coming to a head. Large studies mostly find no full-moon effect on hospitals or crime, which has not stopped anyone from blaming it.`]];
    case 'eclipse':
      return [['The eclipse', ECLIPSE[e.type]], ['This eclipse', ECLIPSE_KIND[e.kind] ?? '']];
    case 'eclipse-season':
      return [['Why eclipses come in seasons', 'Eclipses only happen when a new or full moon lines up with the lunar nodes, the two points where the Moon\'s tilted orbit crosses the Sun\'s path. That alignment comes around about every six months, so there are two eclipse seasons a year. In Vedic astrology those two nodes are Rahu and Ketu, the demon\'s head and body, which is why eclipses get pinned on them.']];
    case 'voc':
      return [...planets('Moon'), ['This void', `The Moon is in ${e.sign} and won't make another major aspect before it moves into ${e.next}. ${['Taurus', 'Cancer', 'Sagittarius', 'Pisces'].includes(e.sign)
        ? `One consolation: Lilly allowed that a void Moon can still get something done in Taurus, Cancer, Sagittarius or Pisces, signs that belong to the benefics. ${e.sign} is one of them, so this is the milder kind.`
        : `Lilly allowed that a void Moon can still get something done in Taurus, Cancer, Sagittarius or Pisces. ${e.sign} isn't one of them, so this is the full-strength version.`}`]];
    case 'rahu-kalam':
      return [
        ['Rahu', 'When the gods and demons churned the ocean for the nectar of immortality, the demon Svarbhanu slipped in among the gods and took a sip. The Sun and Moon spotted him and told Vishnu, who cut off his head, but the nectar had already made it immortal. The head became Rahu, and he has been chasing the Sun and Moon ever since.'],
        ['Today\'s slot', `Divide the daylight into eight parts. On ${e.weekday}s, Rahu gets the ${ORDINAL[e.part]}. Tradition says not to start anything new in it, like a journey, a ceremony, a purchase or a business deal. Things already underway can carry on.`],
      ];
    default:
      return [];
  }
}
