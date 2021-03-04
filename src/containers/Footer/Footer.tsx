import React from "react";
import Link from "next/link";

// Container stylesheets
import cn from "classnames";
import { Row, Col, Text, Link as Anchor } from "@geist-ui/react";

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
      <Col span={20} className={styles.bottom}>
        <img src="/img/a_ll_fluo.svg" width={200} />

        <nav className={styles.bottom_nav}>
          <Link href="/">
            <Anchor className={styles.l1}>Home</Anchor>
          </Link>
          <Link href="/esplora">
            <Anchor className={styles.l1}>Luoghi</Anchor>
          </Link>
          <Link href="/itinerari">
            <Anchor className={styles.l1}>Itinerari</Anchor>
          </Link>
          <Link href="/storie">
            <Anchor className={styles.l1}>Storie</Anchor>
          </Link>
          <Link href="/reti">
            <Anchor className={styles.l1}>Reti</Anchor>
          </Link>
          <Link href="/credits">
            <Anchor className={styles.l1}>Credits</Anchor>
          </Link>
        </nav>
        <Text>&copy; 2019. Associazione Agritettura2.0. C.F. 95207960634</Text>
        <div>
          <Link href="/privacy">
            <a className={styles.l1}>Privacy</a>
          </Link>
          <Link href="/cookies">
            <a className={styles.l1}>Cookies</a>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
