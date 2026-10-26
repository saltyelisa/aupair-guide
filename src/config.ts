// Alles, was du öfter ändern willst, steht hier an einem Ort.
export const SITE = {
  name: 'The Pacific Gap',
  description: {
    de: 'Als Au-pair nach Tahiti ohne Agentur oder Volunteering in Hawaii: ehrliche Infos aus erster Hand, Vorlagen und ein Guide, der dir die Fragen beantwortet, die ich ständig in den DMs bekomme.',
    en: 'Au pair in Tahiti without an agency or volunteering in Hawaii: honest first hand info, templates and a guide that answers the questions I get in my DMs every day.',
  },
  author: 'Elisaveta',
  // Dein Worldpackers Code und Link (Platzhalter, bitte ersetzen)
  worldpackersCode: 'DEINCODE',
  worldpackersLink: 'https://www.worldpackers.com/',
  // Link zum Kauf Button (Payhip, Digistore24 oder was anderes). Leer lassen = Button zeigt "bald verfügbar".
  buyLink: '',
  price: '9,90 €',
  socials: {
    tiktok: 'https://www.tiktok.com/@elisaveta.schwarz',
    instagram: 'https://www.instagram.com/elisaveta.schwarz',
    youtube: 'https://www.youtube.com/@saltyelisa',
  },
};

// Deine Videos für die Video Wand auf der Startseite.
// Einfach den Link aus TikTok ("Teilen" > "Link kopieren") oder Instagram (Reel > "Link kopieren") einfügen.
// Solange "DEINNAME" drinsteht, wird ein Platzhalter angezeigt.
export const VIDEOS = [
  { url: 'https://www.tiktok.com/@elisaveta.schwarz/video/7489746920173309206', caption: { de: 'Aus meinem TikTok', en: 'From my TikTok' } },
  { url: 'https://www.instagram.com/reel/DEINNAME/', caption: { de: 'So hab ich meine Gastfamilie gefunden', en: 'How I found my host family' } },
  { url: 'https://www.tiktok.com/@DEINNAME/video/2', caption: { de: 'Was Tahiti wirklich kostet', en: 'What Tahiti really costs' } },
  { url: 'https://www.tiktok.com/@DEINNAME/video/3', caption: { de: 'Volunteering auf Hawaii', en: 'Volunteering in Hawaii' } },
];

// Kurze eigene Clips (MP4, Hochformat, ohne Ton, ein paar Sekunden), die von selbst abspielen.
// Datei in public/videos/ legen, z. B. public/videos/hero.mp4
export const HERO_VIDEO = '/videos/hero.mp4';

// Deine Spotify Playlist (Link aus Spotify: Teilen > Link zur Playlist kopieren). Leer = Platzhalter.
export const SPOTIFY_PLAYLIST = '';

// Deine Podcast Folge mit Wayfinders (Link von Spotify oder Apple Podcasts). Leer = Platzhalter.
export const PODCAST_EPISODE = '';
