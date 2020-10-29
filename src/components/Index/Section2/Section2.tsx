import React from "react";
import { Text } from "@geist-ui/react";
import styles from "./Section2.module.sass";

export default function Section2() {
  return (
    <div className={styles.main}>
      <div className={styles.main_landscape}>
        <img src="/img/slider/1.1.jpg" />
      </div>
      <div className={styles.main_portrait}>
        <img src="/img/slider/1.2.jpg" />
      </div>
      <div className={styles.main_titleBox}>
        <div className={styles.main_titleBox__title}>
          <Text h3>Un parco da riconoscere</Text>
        </div>
      </div>
      <div className={styles.main_content}>
        <Text style={{ fontSize: "1.25em" }}>
          Le storie di chi abita, studia e lavora nel Parco. Le loro parole
          suggeriscono soluzioni per un nuovo equilibrio tra uomo e natura,
          descrivono un ventaglio di alternative e proposte, di attività e
          servizi per tutti, a due passi dal centro della città.
          <a className="l1 l1--big" href="/storie">
            <span>Leggi le storie</span>
          </a>
        </Text>
      </div>
    </div>
  );
}
