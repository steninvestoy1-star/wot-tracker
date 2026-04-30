# GitHub build without local Node

Selle variandiga ei pea oma arvutis Node'i kasutama.

## Sammud

1. Tee GitHubis uus tühi repo.
2. Laadi selle ZIPi sisu sinna üles.
3. Ava repo vahekaart **Actions**.
4. Käivita workflow **Build Windows App**.
5. Oota kuni build valmis saab.
6. Ava workflow run.
7. Laadi alla artifact **wot-tracker-windows-build**.

Sealt saad:
- portable `.exe`
- installer `.exe`

## Pärast allalaadimist

Käivita valmis `.exe` oma Windowsis.
Esimesel korral ava appis Setup Wizard ja salvesta:
- Live WoT API
- sinu application_id
- sinu nickname
- region

Siis ei ole Node'i enam vaja.
