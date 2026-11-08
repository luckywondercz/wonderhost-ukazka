# WonderHost ukázka

Malá Next.js aplikace pro vyzkoušení nasazení z Gitu na [WonderHost](https://wonderhost.cz):

- úvodní stránka ukazuje **verzi** (z `package.json`) a **čas sestavení**, takže je hned vidět, která verze běží,
- `/api/health` je **kontrola stavu**, na kterou hosting čeká před přepnutím provozu na novou verzi,
- proměnná prostředí **`UKAZKA_ZPRAVA`** se zobrazí na stránce (nastavuje se v panelu, ne v repozitáři).

Nemá databázi ani tajné údaje.

## Spuštění

```bash
npm ci
npm run build
node .next/standalone/server.js
```

Pro vývoj `npm run dev` a otevřít http://localhost:3000.

## Vyzkoušení nové verze

Zvyšte `version` v `package.json` (např. na `0.2.0`), commitněte a pushněte. Po nasazení stránka ukáže novou verzi a čas sestavení.
