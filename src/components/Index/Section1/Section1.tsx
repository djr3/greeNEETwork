import React from "react";
import { Text } from "@geist-ui/react";

import { Slider } from "components/Slider";

import styles from "./Section1.module.sass";

export default function Section1() {
  const images = [];
  for (let index = 0; index < 10; index++) {
    images.push(`/img/slider/2.${index + 1}.jpg`);
  }

  return (
    <div className={styles.grid}>
      <div className={styles.text}>
        <Text h3>Un parco da riconoscere</Text>
        <Text>
          Le storie di chi abita, studia e lavora nel Parco. Le loro parole
          suggeriscono soluzioni per un nuovo equilibrio tra uomo e natura,
          descrivono un ventaglio di alternative e proposte, di attività e
          servizi per tutti, a due passi dal centro della città.
          <a className="l1 l1--big" href="/storie">
            <span>Leggi le storie</span>
          </a>
        </Text>
      </div>
      <div className={styles.media}>
        <Slider
          // id="homeSlider"
          images={images}
          // media={images.map((image) => ({ source: image }))}
        />
      </div>
    </div>
  );
}
