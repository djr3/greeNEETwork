// Core Components
import React, { useEffect, useState } from "react";

// Page Layout
import Page from "containers/Main";

// Page Components
import Player from "react-player";
import { Grid, Text, Link as Anchor } from "@geist-ui/react";

import { Hero, Section1, Section2 } from "components/Index";
import { BlockReveal } from "components/Animations";

export default function Home() {
  const [state, setState] = useState(null);
  useEffect(() => {}, []);

  return (
    <Page id="index" style={{ paddingBottom: 0 }}>
      <Grid.Container justify="center" style={{ margin: "8rem 0" }}>
        <Grid xs={22} md={20} lg={18}>
          <Hero />
        </Grid>
      </Grid.Container>
      <Grid.Container justify="center" style={{ margin: "8rem 0" }}>
        <Grid
          xs={20}
          md={18}
          lg={16}
          style={{
            padding: "4rem",
            background: "linear-gradient(to left, #dbe7c9 35%, #fff 35%)",
          }}
        >
          <BlockReveal dir="r2l">
            <Text style={{ fontSize: "1.5rem", textAlign: "justify" }}>
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
          </BlockReveal>
        </Grid>

        <Grid
          xs={22}
          md={20}
          lg={18}
          style={{ margin: "8rem 0", padding: "0 2rem" }}
        >
          <Section1 />
        </Grid>

        <Grid
          xs={20}
          md={18}
          lg={16}
          style={{
            padding: "4rem",
            background: "linear-gradient(to left, #dbe7c9 35%, #fff 35%)",
          }}
        >
          <BlockReveal>
            <Text h3>Un&apos;opportunità per la città e i suoi abitanti</Text>
            <Text style={{ fontSize: "1.25rem", textAlign: "justify" }}>
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
          </BlockReveal>
        </Grid>

        {/* <Row justify="center">
              <Col span={20}>
                <Text style={{ fontSize: "1.5rem" }}>
                  Luoghi di interesse, itinerari, reti tra operatori del territorio e
                  storie disegnano una mappa - non esaustiva - per conoscere e
                  promuovere un Parco tutto da scoprire
                </Text>
              </Col>
            </Row> 
        */}
      </Grid.Container>

      <Grid.Container
        justify="center"
        style={{
          backgroundColor: "#000",
          padding: "4rem",
        }}
      >
        <Grid xs={22} md={20} lg={18}>
          <Player
            url={[
              { src: "/video/UrbanoRurale_720p.webm", type: "video/webm" },
              // { src: "/video/UrbanoRurale_720p.mp4", type: "video/mp4" },
            ]}
            width="100%"
            height="auto"
            controls={true}
            config={{
              file: { attributes: { poster: "/video/UrbanoRurale_thumb.jpg" } },
            }}
          />
        </Grid>
      </Grid.Container>
    </Page>
  );
}
