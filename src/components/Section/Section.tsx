import React from "react";
import { Text } from "@geist-ui/react";

import { Slider } from "components/Slider";

import styles from "./Section.module.sass";

export default function Section() {
  const images = [];
  for (let index = 0; index < 10; index++) {
    images.push(`/img/slider/1.${index + 1}.jpg`);
  }

  return (
    <div className={styles.grid}>
      <div className={styles.text}>
        <Text h3>Un parco da riconoscere</Text>
        <Text>
          Le storie di chi abita, studia e lavora nel Parco suggeriscono
          soluzioni per un nuovo equilibrio tra uomo e natura. Le loro parole
          descrivono un ventaglio di alternative e proposte, di attività e
          servizi per tutti, a due passi dal centro della città.
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
