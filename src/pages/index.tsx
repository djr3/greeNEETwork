// Core Components
import React from "react";

// Page Layout
import Page from "containers/Main";

// Page Components
import Player from "react-player";
import { Row, Col, Text } from "@geist-ui/react";

import Hero from "components/Hero";
import Section from "components/Section";
import { BlockReveal } from "components/Animations";

export default function Home() {
  return (
    <Page id="index" style={{ paddingBottom: 0 }}>
      <Row justify="center">
        <Col span={20}>
          <Hero />
        </Col>
      </Row>

      <Row
        style={{
          padding: "4rem 0",
          background: "linear-gradient(to right, #f0f5e9 35%, #fff 35%)",
        }}
      >
        <Col span={10} offset={4}>
          <BlockReveal>
            <Text style={{ fontSize: "1.5rem", textAlign: "justify" }}>
              Il Parco Metropolitano delle Colline di Napoli è un parco
              regionale istituito nel 2003. Assieme al Parco Nazionale del
              Vesuvio, al Parco Regionale dei Campi Flegrei, alla Riserva degli
              Astroni e al Bosco di Capodimonte, rappresenta l’infrastruttura
              verde dell’area metropolitana di Napoli. Occupa un quinto del
              territorio comunale, 2.215 ettari sui 11.750 totali. Comprende la
              conca dei Pisani, la collina dei Camaldoli, la selva di Chiaiano,
              lo Scudillo, il vallone San Rocco, Capodimonte e la vigna di San
              Martino.
            </Text>
          </BlockReveal>
        </Col>
      </Row>
      <Row
        style={{
          margin: "8rem 0",
          padding: "4rem 0",
          background: "linear-gradient(to left, #dbe7c9 35%, #fff 35%)",
        }}
      >
        <Col span={10} offset={10}>
          <BlockReveal dir="r2l">
            <Text h2>Un&apos;opportunità per la città e i suoi abitanti</Text>
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
              opportunità sostenibili di lavoro, turismo e svago. Collaborare
            </Text>
          </BlockReveal>
        </Col>
      </Row>
      <Row>
        <Col span={16} offset={4}>
          <Section />
        </Col>
      </Row>
      {/* <Row justify="center">
        <Col span={20}>
          <Text style={{ fontSize: "1.5rem" }}>
            Luoghi di interesse, itinerari, reti tra operatori del territorio e
            storie disegnano una mappa - non esaustiva - per conoscere e
            promuovere un Parco tutto da scoprire
          </Text>
        </Col>
      </Row> */}
      <Row
        justify="center"
        style={{
          backgroundColor: "#000",
          marginTop: "8rem",
          paddingTop: "4rem",
        }}
      >
        <Col span={20}>
          <Player
            url={[
              { src: "/video/UrbanoRurale_720p.webm", type: "video/webm" },
              { src: "/video/UrbanoRurale_720p.mp4", type: "video/mp4" },
            ]}
            width="100%"
            height="auto"
            controls={true}
            config={{
              file: { attributes: { poster: "/video/UrbanoRurale_thumb.jpg" } },
            }}
          />
        </Col>
      </Row>
    </Page>
  );
}
