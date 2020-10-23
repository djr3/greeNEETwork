import React from "react";
import Link from "next/link";

// Container stylesheets
import cn from "classnames";
import { Row, Col, Grid, Text, Divider, Link as Anchor } from "@geist-ui/react";
import styles from "./Footer.module.sass";

type Props = {
  className?: string;
  bg?: "dark" | "light";
};

const Footer: React.FC<Props> = ({ bg = "dark", className, ...rest }) => {
  return (
    <Row
      component="footer"
      justify="center"
      className={cn(styles.main, className)}
      {...rest}
    >
      <Col span={20}>
        <Divider />
        <Grid.Container>
          <Grid xs>
            <Text h5>Associazione Agritettura2.0</Text>
            <Text>Cod.Fisc: 95207960634</Text>
            <Text>&copy; Copyright 2019.</Text>
          </Grid>
          <Grid xs>
            <Text h5>Contatti</Text>
            <Text>hello@agritettura.org</Text>
            <Text>+39 081 1234 5678</Text>
          </Grid>
          <Grid xs>
            <Text h5>Legal</Text>
            <Link href="/privacy">
              <a className={styles.l1}>Privacy</a>
            </Link>
            <Link href="/cookies">
              <a className={styles.l1}>Cookies</a>
            </Link>
          </Grid>
        </Grid.Container>
      </Col>
    </Row>
  );
};

export default Footer;
