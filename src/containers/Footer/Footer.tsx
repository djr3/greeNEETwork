import React from "react";

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

const Footer: React.FC<Props> = ({ className, bg = "dark" }) => {
  // Container props

  // Container state & hooks
  const [css] = useStyletron();
  const isDark = bg === "dark" ? "_n" : "";

  return (
    <Row
      tag="footer"
      className={`
        ${css({
          // position: "fixed",
          // position: "initial",
          bottom: 0,
          height: "4rem",
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
          background: "#fff",
        })} ${className}
      `}
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
        size={{ xs: 12, sm: 9 }}
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
    </Row>
  );
};

export default Footer;
