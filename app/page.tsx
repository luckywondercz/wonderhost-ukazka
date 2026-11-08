import { Suspense } from "react";
import { connection } from "next/server";

import styles from "./page.module.css";

// Údaje z doby běhu: proměnná prostředí a čas odpovědi serveru.
// connection() zajistí, že se čtou při každém požadavku, ne při buildu.
async function Runtime() {
  await connection();
  const message = process.env.UKAZKA_ZPRAVA;
  return (
    <>
      <div className={styles.row}>
        <dt>Zpráva z proměnné prostředí</dt>
        <dd>{message ? message : <span className={styles.muted}>UKAZKA_ZPRAVA není nastavená</span>}</dd>
      </div>
      <div className={styles.row}>
        <dt>Odpověď serveru</dt>
        <dd>
          {new Date().toLocaleString("cs-CZ", { timeZone: "Europe/Prague" })}
        </dd>
      </div>
    </>
  );
}

export default function Home() {
  const built = new Date(process.env.BUILD_TIME ?? 0);
  return (
    <main className={styles.page}>
      <h1>Ukázková aplikace</h1>
      <p className={styles.lead}>
        Tahle stránka slouží k vyzkoušení nasazení z Gitu na WonderHost: nová verze, návrat zpět
        a proměnné prostředí.
      </p>
      <dl className={styles.facts}>
        <div className={styles.row}>
          <dt>Verze</dt>
          <dd>{process.env.APP_VERSION}</dd>
        </div>
        <div className={styles.row}>
          <dt>Sestaveno</dt>
          <dd>{built.toLocaleString("cs-CZ", { timeZone: "Europe/Prague" })}</dd>
        </div>
        <Suspense
          fallback={
            <div className={styles.row}>
              <dt>Údaje ze serveru</dt>
              <dd className={styles.muted}>načítám…</dd>
            </div>
          }
        >
          <Runtime />
        </Suspense>
      </dl>
    </main>
  );
}
