import Link from "next/link";
import { useState } from "react";

import { Grid, Text, Link as Anchor, Input, Button } from "@geist-ui/react";
import { Edit3, PlusCircle, UserPlus } from "@geist-ui/react-icons";

import styles from "./Footer.module.sass";

const SubFooter = () => {
  const [email, setEmail] = useState("");
  return (
    <Grid.Container className={styles.top}>
      <Grid xs={24} sm={8}>
        <div className={styles.top_item}>
          <UserPlus size={48} />
          <Text h4>Iscriviti alla Newsletter</Text>
          <Input
            clearable
            onClearClick={() => setEmail("")}
            size="large"
            placeholder="email@address.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            width="100%"
          />
          <Button ghost style={{ marginTop: ".75rem" }}>
            Invia
          </Button>
        </div>
      </Grid>
      <Grid xs={24} sm={8}>
        <Link href="/storie/scrivi">
          <div className={styles.top_item}>
            <Edit3 size={48} />
            <Text h4>Scrivi la tua storia</Text>
            <Text>
              Vivi o lavori nel Parco delle Colline?
              <br />
              Raccontaci la storia della tua realtà
            </Text>
          </div>
        </Link>
      </Grid>
      <Grid xs={24} sm={8} className={styles.top_item}>
        <PlusCircle size={48} />
        <Text h4>Segnalaci un luogo</Text>
        <Text>
          Conosci un luogo, una attività o una masseria
          <br />
          all'interno del Parco delle Colline? Segnalacela
        </Text>
      </Grid>
    </Grid.Container>
  );
};

export default SubFooter;
