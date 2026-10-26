# Salty Au-pair Guide

Die Website für den Guide zu Au-pair in Tahiti und Volunteering in Hawaii. Gebaut mit Astro, als statische Seite, kostenlos hostbar auf Netlify oder Vercel.

## Wo du was änderst

Name, Preis, Kauf Link, Worldpackers Code und Social Links stehen in `src/config.ts`.
Blogartikel liegen in `src/pages/blog/` als Markdown Dateien. Für einen neuen Artikel kopierst du einfach einen bestehenden und änderst Titel, Beschreibung, Datum und Text.
Gelbe Kästen (`<div class="todo">`) sind Platzhalter für deine eigenen Erfahrungen, rote Kästen (`<div class="check">`) sind Infos, die noch mit aktuellen offiziellen Quellen geprüft werden müssen. Vor dem Launch sollten alle weg sein.

## Lokal starten

```
npm install
npm run dev
```

## Veröffentlichen mit Netlify

Auf netlify.com mit GitHub anmelden, "Add new site" und "Import an existing project" wählen, dieses Repo aussuchen und auf Deploy klicken. Die Einstellungen kommen automatisch aus `netlify.toml`. Danach wird jede Änderung im main Branch automatisch online gestellt.
