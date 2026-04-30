# WoT Tracker Desktop — Branded Build

Täiendatud desktop-versioon tugevama brändinguga.

## Lisatud
- päris `.ico` ikoon
- installerile sobivad branding assetid
- värskendatud splash screen
- ühtlustatud metaandmed `package.json` failis

## Käivitus
```bash
npm install
cp .env.local.example .env.local
npm run dev
```

## Windows build
```bash
npm run dist:win
npm run dist:portable
```

Valmis failid tekivad `dist/` kausta.

## Märkus
NSIS kasutab nüüd sama ikoonibrändingut installeris ja rakenduse aknas.


## Kaardid

Selles versioonis on kaardivalikusse lisatud lai ametlike kaartide nimekiri.
Täielik detailne “kuhu minna” strateegia on praegu põhjalikult olemas kaartidele:
- Mines
- Himmelsdorf
- Prokhorovka

Ülejäänud kaardid on lisatud valikusse placeholder-kirjeldustega, et neid saaks järgmistes versioonides järk-järgult täita.


## Full guides

Selles buildis on kõigile lisatud kaartidele olemas täidetud kaardisoovitused.
Need on best-effort route-guide’id rakenduse jaoks, mitte ametlik WG taktikabaas.


## Fix applied

Selles buildis on parandatud Electron dev-mode splash probleem.
Dev-režiimis ei käivitata enam Next serverit teist korda Electroni seest.


## Setup Wizard

Selles buildis saad rakenduse sees salvestada:
- mock/live mode
- Wargaming API võtme
- default regioni
- oma nickname'i

Need salvestatakse projekti juurkausta faili `.wot-config.json`.
Live režiimis ei pea enam `.env.local` käsitsi muutma.


## Quick start without PowerShell

Topeltkliki failil:
- `start-wot-tracker.cmd` — käivitab appi
- `build-portable.cmd` — teeb portable `.exe` buildi

Esimesel käivitusel installib launcher vajadusel sõltuvused automaatselt.


## Build without local Node

Kui sa ei taha oma arvutis Node'i kasutada, siis kasuta GitHub Actions workflow'd:

- `.github/workflows/build-windows.yml`

Juhend:
- vaata faili `GITHUB-BUILD.md`


## Packaged build fix

Selles versioonis on parandatud packaged `.exe` runtime:
- production build ei kasuta enam `npx next start`
- Electron käivitab kohaliku Next serveri faili `electron/next-server.js` kaudu
- splash ei tohiks enam jääda lõpmatuseni ette, kui build on korrektne
