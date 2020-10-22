// Core Components
import React from "react";

// Page Layout
import Page from "containers/Main";
import { Grid, Row, Col, Text } from "@geist-ui/react";

// Page Components
import Breadcrumbs from "components/Breadcrumbs";

export default function Credits() {
  return (
    <Page id="credits">
      <Row justify="center">
        <Col span={20}>
          <Grid.Container gap={2}>
            <Grid xs={24} style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Breadcrumbs />

              <Text h1>Credits</Text>
              <p>
                La mappatura del Parco (Luoghi, Itinerari, Reti Attive e
                Storie), il documentario URBANORURALE e la pagina internet che
                li ospita sono stati realizzati dall’associazione di promozione
                sociale Agritettura 2.0 come partner del progetto&nbsp;
                <a
                  href="http://www.greeneetwork.it"
                  target="_blank"
                  rel="noreferrer"
                  className="l1"
                >
                  GreeNEETwork
                </a>
                , Programma ANCI Restart.
              </p>
              <p>
                Il Progetto promuove un modello di valorizzazione sostenibile
                per il&nbsp;
                <a
                  className="l1"
                  href="http://www.parcometropolitanocollinenapoli.it/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Parco Metropolitano delle Colline di Napoli
                </a>
                &nbsp;ed ha come Capofila il Comune di Napoli - Assessorato ai
                Giovani, Politiche giovanili, Creatività e Innovazione e
                Servizio Giovani e Pari Opportunità. Le attività ideate e
                coordinate da Agritettura 2.0 sono state realizzate con il
                coinvolgimento di giovani NEET, studenti universitari e
                professionisti under 40, e grazie alla collaborazione con
                operatori sociali ed economici del territorio.
              </p>
            </Grid>
            <Grid xs={24} style={{ marginTop: "1rem" }}>
              <Text h4>Mappatura Luoghi e Reti Attive</Text>
              <ul>
                <li>
                  <strong>Federica Russillo</strong>
                  <span> (Agritettura2.0)</span>
                </li>
              </ul>
            </Grid>
            <Grid xs={24} md={12} style={{ marginTop: "1rem" }}>
              <Text h4>Digitalizzazione Itinerari</Text>
              <ul>
                <li>Maria Cerreta</li>
                <li>Giuliano Poli</li>
                <li>Ileana Abbate</li>
                <li>Valentina Albano</li>
                <li>Luca Latessa</li>
                <li>Immacolata Porpora</li>
                <li>Alfredo Salsano</li>
              </ul>
              <p>
                Corso “Servizi Ecosistemici Urbani: Approcci valutativi per una
                mappatura collaborativa dei valori complessi”,
                <br />
                Dipartimento di Architettura, Università degli Studi di Napoli
                Federico II
              </p>
            </Grid>
            <Grid xs={24} md={12} style={{ marginTop: "1rem" }}>
              <Text h4>Esplorazione e restituzione Itinerari</Text>
              <ul>
                <li>Evelina Pessetti</li>
                <li>Alfredo Campano</li>
                <li>Nicola Carangio</li>
                <li>Raffaella Caravecchia</li>
                <li>Roberta De Biase</li>
              </ul>
              <span>
                Percorso formativo “I mestieri del verde”, Progetto GreeNEETwork
              </span>
              <ul>
                <li>Francesco Calicchia</li>
                <li>Ilaria Garzillo</li>
                <li>Vicky Solli</li>
              </ul>
            </Grid>
            <Grid xs={24} md={12} style={{ marginTop: "1rem" }}>
              <Text h4>Documentario URBANORURALE</Text>
              <ul>
                <li>
                  <strong>Agritettura 2.0</strong>
                  <span> (Ideazione e Produzione)</span>
                </li>
                <li>
                  <strong>UNCOSO</strong>
                  <span> (Produzione esecutiva)</span>
                </li>
                <li>
                  <strong>
                    Jammo Bros - Diego D’Ambrosio, Raffaele Iardino
                  </strong>
                  <span> (Regia)</span>
                </li>
                <li>
                  <strong>The CBLab - Candida Bevilacqua</strong>
                  <span> (Motion Graphics)</span>
                </li>
                <li>
                  <strong>Mattia Falco</strong>
                  <span> (Fotografia)</span>
                </li>
              </ul>
            </Grid>
            <Grid xs={24} md={12} style={{ marginTop: "1rem" }}>
              <Text h4>
                Design &amp; sviluppo architettura informatica, web application
                e UI
              </Text>
              <ul>
                <li>
                  <strong>DigItalia - Danilo Panaro</strong>
                </li>
              </ul>
              <Text h4>Restituzione Storie</Text>
              <ul>
                <li>
                  <strong>Francesca Saturnino</strong>
                </li>
              </ul>
            </Grid>
            <Grid xs={24} style={{ marginTop: "1rem" }}>
              <Text h4>Principali fonti di ricerca e bibliografiche</Text>
              <ul>
                <li>
                  Parco Metropolitano delle Colline di Napoli, “Piano di
                  gestione partecipata per lo sviluppo sostenibile e per la
                  valorizzazione della biodiversità”, D.P.R. 120/2003
                </li>
                <li>
                  Parco Metropolitano delle Colline di Napoli, “La proposta di
                  piano territoriale del Parco”, 2009
                </li>
                <li>
                  Comune di Napoli, Direzione centrale pianificazione e gestione
                  del territorio – sito Unesco, Servizio affari generali e
                  controlli interni - Unità organizzativa sistema informativo
                  territoriale – SIT
                </li>
                <li>
                  Leonardo Recchia e Renato Ruotolo, “Parco Metropolitano delle
                  Colline di Napoli. Guida agli aspetti naturalistici, storici e
                  artistici”, CLEAN 2010
                </li>
                <li>
                  Progetto “Agritetture 2.0_Sustainability of urban farming in
                  the metropolitan area of Naples” Avv. MIUR n. 391/RIC. 5
                  luglio 2012 Smart cities and communities and social innovation
                </li>
              </ul>
            </Grid>
          </Grid.Container>
        </Col>
      </Row>
    </Page>
  );
}
