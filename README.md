# The Pacific Gap

Die Website für den Guide zu Au-pair in Tahiti und Volunteering in Hawaii. Gebaut mit Astro, als statische Seite, kostenlos hostbar auf Netlify oder Vercel.

## Wo du was änderst

Name, Preis, Kauf Link, Worldpackers Code und Social Links stehen in `src/config.ts`.
Deine TikTok und Instagram Videos für die Video Wand trägst du in `src/config.ts` bei `VIDEOS` ein (einfach den geteilten Link reinkopieren). Sie werden aus Datenschutzgründen erst nach einem Klick geladen. Einen kurzen eigenen Clip, der im Handy auf der Startseite von selbst abspielt, legst du als `public/videos/hero.mp4` ab.

Die Seite ist zweisprachig: Deutsch liegt unter `/`, Englisch unter `/en/`. Deutsche Blogartikel liegen in `src/pages/blog/`, englische in `src/pages/en/blog/`, beides als Markdown Dateien. Für einen neuen Artikel kopierst du einfach einen bestehenden und änderst Titel, Beschreibung, Datum und Text. Wenn es ihn in beiden Sprachen gibt, trag das Paar in `src/i18n.ts` bei `PAIRS` ein, damit der Sprachumschalter und Google die Übersetzung finden. Texte der Startseite und der Guide Seite stehen in `src/views/`.
Fotos legst du in `public/fotos/` ab und gibst sie bei den `Photo` Komponenten in `src/views/Home.astro` an. Gelbe Kästen (`<div class="todo">`) sind Platzhalter für deine eigenen Erfahrungen, rote Kästen (`<div class="check">`) sind Infos, die noch mit aktuellen offiziellen Quellen geprüft werden müssen. Vor dem Launch sollten alle weg sein.

## Lokal starten

```
npm install
npm run dev
```

## Veröffentlichen mit Netlify

Auf netlify.com mit GitHub anmelden, "Add new site" und "Import an existing project" wählen, dieses Repo aussuchen und auf Deploy klicken. Die Einstellungen kommen automatisch aus `netlify.toml`. Danach wird jede Änderung im main Branch automatisch online gestellt.
