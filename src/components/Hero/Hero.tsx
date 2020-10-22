import React from "react";
import { Row, Col, Grid, Text, Container } from "@geist-ui/react";

import styles from "./Hero.module.sass";

export default function Hero() {
  return (
    <Container className={styles.main}>
      {/* <div className={styles.textcont}> */}
      <Text h1 className={styles.title}>
        Il polmone verde di Napoli
      </Text>
      {/* </div> */}
    </Container>
  );
}
