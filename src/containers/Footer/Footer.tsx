import React from "react";
import Link from "next/link";

// Container stylesheets
import { useStyletron } from "styletron-react";
import { Row, Col, Div, Text } from "atomize";

type Props = {
  className?: string;
  bg?: "dark" | "light";
};

// const footerMenu = [
//   { name: "Privacy", link: "/privacy" },
//   { name: "Cookies", link: "/cookies" },
// ];

const Footer: React.FC<Props> = ({ bg = "dark", className, ...rest }) => {
  // Container props

  // Container state & hooks
  const [css] = useStyletron();
  const isDark = bg === "dark" ? "_n" : "";

  return (
    <Row
      tag="footer"
      m={{ xs: 0 }}
      h="4rem"
      w="100%"
      d="flex"
      justify="space-between"
      bg="#fff"
      className={className}
    >
      <Col
        d={{ xs: "none", sm: "block" }}
        size={{ sm: 3 }}
        p={{ x: ".75rem", y: ".25rem" }}
        className={css({
          lineHeight: 1.2,
          fontSize: "0.75rem",
        })}
      >
        <Text tag="h6">Agritettura2.0</Text>
        <small>CF: 95207960634</small>
        <br />
        <small>&copy; Copyright 2019.</small>
      </Col>
      <Col
        d="flex"
        align="center"
        justify="center"
        p={{ x: { xs: ".5rem", sm: ".75rem" } }}
        bg={bg === "dark" ? "#1c1c1c" : "#ececec"}
        fontSize="0.75rem"
        textColor="#ccc"
        textSize=".75rem"
        size={{ xs: 12, sm: 9, md: 6 }}
      >
        <Div d="flex" justify="space-around" align="center">
          <img
            className={css({
              height: "3rem",
              width: "auto",
              margin: ".5rem",
            })}
            src={`/img/cdm${isDark}.svg`}
            alt="Logo Consiglio dei Ministri"
          />
          <a href="http://www.anci.it" target="_blank" rel="noreferrer">
            <img
              className={css({
                height: "3rem",
                width: "auto",
                margin: ".5rem",
              })}
              src={`/img/anci${isDark}.png`}
              alt="Logo ANCI"
            />
          </a>
          <a
            href="https://www.comune.napoli.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/26080"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={css({
                height: "3rem",
                width: "auto",
                margin: ".5rem",
              })}
              src={`/img/comune${isDark}.png`}
              alt="Logo Comune di Napoli"
            />
          </a>
        </Div>
        <Div className={css({ maxWidth: "16rem" })}>
          <small style={{ lineHeight: 1.2 }}>
            Iniziativa co-finanziata dalla Presidenza del Consiglio dei Ministri
            - Dipartimento della Gioventù e del Servizio Civile Nazionale e dal
            Comune di Napoli
          </small>
        </Div>
      </Col>
      <Col
        d={{ xs: "none", md: "block" }}
        textAlign={{ xs: "left", md: "right" }}
        size={{ sm: 3 }}
        p={{ x: ".75rem", y: ".25rem" }}
        className={css({
          lineHeight: 1.2,
          fontSize: "0.75rem",
        })}
      >
        <Link href="/privacy">
          <a className="l1">Privacy</a>
        </Link>
        <br />
        <Link href="/cookies">
          <a className="l1">Cookies</a>
        </Link>
        <br />
        <span>
          Made with love by&nbsp;
          <a
            href="https://digitalia.net.pl"
            target="_blank"
            rel="noreferrer"
            className="l1"
          >
            DigItalia
          </a>
        </span>
      </Col>
    </Row>
  );
};

export default Footer;
