// Core Components
import React from "react";

// Page Layout
import Page from "containers/Main";

// Page Components
import Image from "next/image";
import { Grid, Text } from "@geist-ui/react";

// import { Carousel } from "components/Carousel";
import { Hero } from "components/Hero";
import SubFooter from "containers/Footer/SubFooter";

import styles from "styles/pages/index.module.sass";

export default function Home() {
  // Generate Slider Image URLs
  const sliderImages = [];
  for (let index = 1; index <= 10; index++) {
    sliderImages.push(`/img/slider/2.${index}.jpg`);
  }

  return (
    <Page
      id="index"
      className={styles.main}
      style={{ backgroundColor: "#0e1012" }}
    >
      <Grid.Container justify="center" gap={4}>
        <Grid xs={22} md={20} className={styles.hero}>
          <Hero />
        </Grid>
      </Grid.Container>

      <Grid.Container justify="center" className={styles.section}>
        <Grid xs={22} md={18} lg={16} className={styles.infoBox}>
          <div className={styles.infoBox_inner}>
            <Text span>Informazioni</Text>
            <Text h3 className={styles.heading}>
              Il Parco in numeri
            </Text>
            <Text className={styles.textDisplay}>
              Il Parco Metropolitano delle Colline di Napoli è un parco
              regionale istituito nel 2003. Assieme al Parco Nazionale del
              Vesuvio, al Parco Regionale dei Campi Flegrei, alla Riserva degli
              Astroni e al Bosco di Capodimonte, rappresenta l’infrastruttura
              verde dell’area metropolitana di Napoli. Occupa un quinto del
              territorio comunale, 2.215 ettari sui 11.750 totali, e comprende
              la conca dei Pisani, la collina dei Camaldoli, la selva di
              Chiaiano, lo Scudillo, il vallone San Rocco, Capodimonte e la
              vigna di San Martino.
            </Text>
          </div>
        </Grid>
      </Grid.Container>

      <Grid.Container justify="center" gap={2} className={styles.section}>
        {/* <Grid xs={24}> */}
        {/* <Carousel
          loop
          margin={20}
          autoWidth
          center
          // lazyLoad
          dots={false}
          nav
          items={2}
          height={365}
        > */}
        {sliderImages.map((img, idx) => (
          <Grid key={"carImg_" + idx}>
            <Image
              src={img}
              alt={"Immagine parco " + idx}
              layout="intrinsic"
              objectFit="fill"
              width="260px"
              height="146px"
            />
          </Grid>
        ))}
        {/* </Carousel> */}
        {/* </Grid> */}
      </Grid.Container>

      <Grid.Container justify="center" className={styles.section}>
        <Grid xs={22} md={18} lg={16} className={styles.infoBox}>
          <div className={styles.infoBox_inner}>
            <Text h3 className={styles.heading}>
              Un parco da riconoscere
            </Text>
            <Text className={styles.textDisplay}>
              Le storie di chi abita, studia e lavora nel Parco. Le loro parole
              suggeriscono soluzioni per un nuovo equilibrio tra uomo e natura,
              descrivono un ventaglio di alternative e proposte, di attività e
              servizi per tutti, a due passi dal centro della città.
              <a
                aria-label="Leggi le storie"
                className="l1 l1--big"
                href="/storie"
              >
                <span>Leggi le storie</span>
              </a>
            </Text>
          </div>
        </Grid>
      </Grid.Container>

      <Grid.Container justify="center" className={styles.section}>
        <Grid xs={22} md={18} lg={16} className={styles.infoBox}>
          <div className={styles.infoBox_inner}>
            <Text span>Mappa dei Luoghi</Text>
            <Text h3 className={styles.heading}>
              Un&apos;opportunità per la città e i suoi abitanti
            </Text>
            <Text className={styles.textDisplay}>
              Un’area poco conosciuta dai cittadini, interessata da fenomeni di
              incuria ed abbandono, eppure popolata da aziende agricole,
              fattorie didattiche, antiche masserie, dimore e complessi storici,
              cave, sentieri, cupe, boschi, costoni, selve, valloni, flora e
              fauna selvatica. La consapevolezza di tale patrimonio indica la
              strada per la sopravvivenza della città e degli abitanti di oggi e
              domani: ripartire dai valori naturali, rurali e culturali del
              territorio; recuperare ossigeno, cibo di qualità, senso di
              comunità, spazio vitale, benessere; costruire conoscenze,
              opportunità sostenibili di lavoro, turismo e svago.
              <a className="l1 l1--big" href="/esplora">
                <span>Esplora i luoghi sulla mappa</span>
              </a>
            </Text>
          </div>
        </Grid>
      </Grid.Container>

      <SubFooter />

      {/* 
        <Row justify="center">
          <Col span={20}>
            <Text style={{ fontSize: "1.5rem" }}>
              Luoghi di interesse, itinerari, reti tra operatori del territorio e
              storie disegnano una mappa - non esaustiva - per conoscere e
              promuovere un Parco tutto da scoprire
            </Text>
          </Col>
        </Row> 
      */}
    </Page>
  );
}
