// Zweisprachigkeit: Deutsch liegt unter /, Englisch unter /en/.
export type Lang = 'de' | 'en';
export const LANGS: Lang[] = ['de', 'en'];

// Welche Seite welcher Übersetzung entspricht (für hreflang und den Sprachumschalter).
// Neue übersetzte Seite? Einfach hier ein Paar ergänzen.
export const PAIRS: [string, string][] = [
  ['/', '/en/'],
  ['/blog/', '/en/blog/'],
  ['/guide/', '/en/guide/'],
  ['/blog/au-pair-tahiti-ohne-agentur/', '/en/blog/au-pair-tahiti-without-agency/'],
  ['/blog/volunteering-hawaii-worldpackers/', '/en/blog/volunteering-hawaii-worldpackers/'],
];

export function langFromPath(path: string): Lang {
  return path.startsWith('/en/') || path === '/en' ? 'en' : 'de';
}

export function alternates(path: string): Partial<Record<Lang, string>> {
  const p = path.endsWith('/') ? path : path + '/';
  const pair = PAIRS.find(([de, en]) => de === p || en === p);
  return pair ? { de: pair[0], en: pair[1] } : { [langFromPath(p)]: p };
}

export const home = (lang: Lang) => (lang === 'en' ? '/en/' : '/');

export const UI = {
  de: {
    locale: 'de_AT',
    dateLocale: 'de-AT',
    navBlog: 'Blog',
    navGuide: 'Der Guide',
    switchTo: 'English',
    footerBig: 'Mauruuru und Mahalo<br />fürs Vorbeischauen!',
    footerHand: 'Fragen? Schreib mir einfach auf Insta 💌',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    by: 'von',
    readMore: 'Weiterlesen →',
    ctaTitle: 'Du willst es Schritt für Schritt?',
    ctaText: 'Im Guide findest du alles gesammelt, mit Vorlagen für dein Profil und für die Nachrichten an Familien.',
    ctaBtn: 'Zum Guide',
    buy: 'Guide holen für',
    soon: 'Bald verfügbar ✨',
    only: 'nur',
    ticketHand: 'mein Code für dich',
    ticketText: 'spart dir was bei der Worldpackers Mitgliedschaft',
    copy: 'Kopieren',
    copied: 'Kopiert ✓',
    toWorldpackers: 'Zu Worldpackers →',
    play: 'Video abspielen',
    videoHint: 'Hier kommt dein Video hin. Link in src/config.ts eintragen.',
    videoNote: (p: string) => `Beim Abspielen lädt ${p} Inhalte von deren Servern.`,
    reelHint: 'MP4 ablegen in',
  },
  en: {
    locale: 'en_US',
    dateLocale: 'en-GB',
    navBlog: 'Blog',
    navGuide: 'The Guide',
    switchTo: 'Deutsch',
    footerBig: 'Mauruuru and Mahalo<br />for stopping by!',
    footerHand: 'Questions? Just DM me on Insta 💌',
    imprint: 'Legal notice (German)',
    privacy: 'Privacy (German)',
    by: 'by',
    readMore: 'Read more →',
    ctaTitle: 'Want it step by step?',
    ctaText: 'The guide has everything in one place, with templates for your profile and for your messages to families.',
    ctaBtn: 'Get the guide',
    buy: 'Get the guide for',
    soon: 'Coming soon ✨',
    only: 'only',
    ticketHand: 'my code for you',
    ticketText: 'saves you money on your Worldpackers membership',
    copy: 'Copy',
    copied: 'Copied ✓',
    toWorldpackers: 'Go to Worldpackers →',
    play: 'Play video',
    videoHint: 'Your video goes here. Add the link in src/config.ts.',
    videoNote: (p: string) => `Playing loads content from ${p}'s servers.`,
    reelHint: 'Put an MP4 at',
  },
} as const;
