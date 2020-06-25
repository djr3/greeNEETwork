import React from "react";
import Player from "react-player";

import { useStyletron } from "styletron-react";
import { motion } from "framer-motion";

import { Container, Row, Col, Div, Text, Button } from "atomize";
import { Image } from "components/Image/Image";

export const Hero = () => {
  const [css] = useStyletron();

  return (
    <motion.div
      initial="closed"
      animate="open"
      className={css({
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        // background:
        //   "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url('/img/parco_satellite.jpg') center center",
        // backgroundSize: "cover",
        // backgroundAttachment: "fixed",
      })}
    >
      <Container maxW="calc(100% - 200px)">
        <Row>
          <Col d="flex" flexDir="column" justify="center">
            <motion.h1
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 },
              }}
              className={css({
                color: "white",
                fontSize: "4rem",
                fontWeight: 600,
                lineHeight: 1,
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              })}
            >
              Il Parco Metropolitano delle Colline di Napoli
            </motion.h1>
            <Div
              d="flex"
              h="4rem"
              maxW="12rem"
              m={{ b: ".5rem" }}
              justify="space-between"
            >
              <Image
                className={css({
                  height: "100%",
                  width: "auto",
                })}
                src="/img/cdm_n.svg"
                alt="Presidenza del Consiglio dei Ministri - Logo"
              />
              <Image
                className={css({
                  height: "100%",
                  width: "auto",
                })}
                src="/img/comune_w.png"
                alt="Comune di Napoli - Logo"
              />
              <Image
                className={css({
                  height: "100%",
                  width: "auto",
                })}
                src="/img/anci_n.png"
                alt="Comune di Napoli - Logo"
              />
            </Div>
            <Text tag="h6" textSize="caption" textWeight="300">
              Iniziativa co-finanziata dalla Presidenza del Consiglio dei
              Ministri - Dipartimento della Gioventù e del Servizio Civile
              Nazionale e dal Comune di Napoli
            </Text>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </motion.div>
  );
};
