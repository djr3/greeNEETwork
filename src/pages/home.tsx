// Core Components

// Page Layout
import Page from "../containers/Main";

// Page Components
import Player from "react-player";
import { useStyletron } from "styletron-react";
import { Slideshow } from "../components/Slideshow";
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
    <Page id="index" className={css({})}>
      <Container>
        <Row justify="center">
          <Col size={{ xs: 12, sm: 10 }}>
            <motion.div
              initial={"closed"}
              animate={"open"}
              className={css({
                width: "100%",
                display: "grid",
                gridGap: "12px",
                gridTemplateColumns: "repeat(6, 1fr)",
                gridTemplateRows: "repeat(4, 1fr)",
                gridTemplateAreas: "auto repeat(6, 1fr)",
              })}
            >
              <motion.div
                className={css({
                  gridArea: "1 / 1 / span 3 / span 3",
                  background: "#C8DCC5",
                  padding: "2rem",
                  zIndex: 1,
                  position: "relative",
                })}
                variants={{
                  open: {
                    width: "100%",
                    height: "100%",
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.3 },
                  },
                  closed: { width: "0%", height: "0%", opacity: 0, y: -50 },
                }}
              >
                <Text
                  tag="h1"
                  textSize={{ xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" }}
                  // className={css({
                  //   backgroundClip: "text",
                  //   filter: "invert(1) grayscale(1) contrast(9)",
                  // })}
                >
                  IL PARCO METROPOLITANO DELLE COLLINE DI NAPOLI
                </Text>
              </motion.div>
              <motion.div
                className={css({
                  gridArea: "2 / 3 / span 4 / span 4",
                  position: "relative",
                })}
                variants={{
                  open: { width: "100%", height: "100%", opacity: 1 },
                  closed: { width: "0%", height: "0%", opacity: 0 },
                }}
              >
                <Image
                  alt="Parco delle Colline, vista dal satellite"
                  src="/img/parco_satellite.webp"
                />
              </motion.div>
            </motion.div>

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
                <BlockReveal>
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
