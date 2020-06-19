// Core Components
import React from "react";

// Page Layout
import Page from "../containers/Main";

// Page Components
import Player from "react-player";
import { useStyletron } from "styletron-react";
import { Slideshow } from "components/Slideshow";
import { Hero } from "components/Hero";
import { Container, Row, Col, Div, Text, Image } from "atomize";
import { motion } from "framer-motion";
import { FadeIn, BlockReveal } from "components/Animations";

export default function Home() {
  const [css] = useStyletron();

  const images = [];
  for (let index = 0; index < 10; index++) {
    images.push(`/img/slides/${index + 1}.webp`);
  }

  return (
    <Page
      id="index"
      className={css({
        color: "white",
        background:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/img/parco_satellite.jpg'), left top",
      })}
      style={{
        paddingTop: 0,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <BlockReveal>
        <Hero />
      </BlockReveal>
      <Container>
        <Row justify="center">
          <Col size={{ xs: 12, sm: 10 }}>
            <Row>
              <FadeIn>
                <Col p={{ y: "1rem" }}>
                  <Text tag="h3" textSize="h3">
                    Il polmone verde di Napoli
                  </Text>
                  <Text>
                    Il Parco Metropolitano delle Colline di Napoli è un parco
                    regionale istituito nel 2003. Assieme al Parco Nazionale del
                    Vesuvio, al Parco Regionale dei Campi Flegrei, alla Riserva
                    degli Astroni e al Bosco di Capodimonte, rappresenta
                    l’infrastruttura verde dell’area metropolitana di Napoli.
                    Occupa un quinto del territorio comunale, 2.215 ettari sui
                    11.750 totali. Comprende la conca dei Pisani, la collina dei
                    Camaldoli, la selva di Chiaiano, lo Scudillo, il vallone San
                    Rocco, Capodimonte e la vigna di San Martino.
                  </Text>
                </Col>
              </FadeIn>
            </Row>
            <Row>
              <Col p={{ y: "1rem" }}>
                <BlockReveal color="#ccc">
                  <Div
                    h="auto"
                    pos="relative"
                    d="flex"
                    justify="center"
                    align="center"
                  >
                    <Slideshow images={images} />
                  </Div>
                </BlockReveal>
              </Col>
            </Row>
            <Row>
              <Col p={{ y: "1rem" }}>
                <BlockReveal>
                  <Text tag="h3" textSize="h3">
                    Un&apos;opportunità per la città e i suoi abitanti
                  </Text>
                </BlockReveal>
                <BlockReveal>
                  <Text>
                    Un’area poco conosciuta dai cittadini, interessata da
                    fenomeni di incuria ed abbandono, eppure popolata da aziende
                    agricole, fattorie didattiche, antiche masserie, dimore e
                    complessi storici, cave, sentieri, cupe, boschi, costoni,
                    selve, valloni, flora e fauna selvatica. La consapevolezza
                    di tale patrimonio indica la strada per la sopravvivenza
                    della città e degli abitanti di oggi e domani: ripartire dai
                    valori naturali, rurali e culturali del territorio;
                    recuperare ossigeno, cibo di qualità, senso di comunità,
                    spazio vitale, benessere; costruire conoscenze, opportunità
                    sostenibili di lavoro, turismo e svago. Collaborare
                  </Text>
                </BlockReveal>
              </Col>
            </Row>
            <Row>
              <Col p={{ y: "1rem" }}>
                <Text tag="h3" textSize="h3">
                  Un parco da riconoscere
                </Text>
                <Text>
                  Le storie di chi abita, studia e lavora nel Parco suggeriscono
                  soluzioni per un nuovo equilibrio tra uomo e natura. Le loro
                  parole descrivono un ventaglio di alternative e proposte, di
                  attività e servizi per tutti, a due passi dal centro della
                  città.
                </Text>
              </Col>
            </Row>
            <Row>
              <Col p={{ y: "1rem" }}>
                <Player
                  url="https://vimeo.com/415931307"
                  width="100%"
                  controls={true}
                />
                <Text>
                  Luoghi di interesse, itinerari, reti tra operatori del
                  territorio e storie disegnano una mappa - non esaustiva - per
                  conoscere e promuovere un Parco tutto da scoprire
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}
