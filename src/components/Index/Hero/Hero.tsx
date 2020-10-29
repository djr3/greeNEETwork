import React from "react";
import { Text } from "@geist-ui/react";

import styles from "./Hero.module.sass";

export default function Hero() {
  return (
    <div className={styles.main}>
      <Text h1 className={styles.title}>
        Il Parco Metropolitano delle Colline di Napoli
      </Text>
      {/* <div className={styles.scrolldown}>
        <div className={styles.scrolldown_graphic}></div>
      </div> */}
    </div>
    // <Grid.Container>
    //   <Grid>
    //     {/* <div className={styles.textcont}> */}
    //     {/* </div> */}
    //   </Grid>
    //   <Grid></Grid>
    // </Grid.Container>
  );
}
