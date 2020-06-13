import React from "react";

// Container stylesheets
import { useStyletron } from "styletron-react";
import { Div, Text } from "atomize";

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
    <footer
      className={`
        ${css({
          display: "flex",
          justifyContent: "space-between",
        })} ${className}
      `}
    >
      <Div
        className={css({
          position: "fixed",
          bottom: 0,
          left: 0,
          lineHeight: 1.2,
          fontSize: "0.75rem",
          margin: "8px",
        })}
      >
        <Text tag="h6">Agritettura2.0</Text>
        <small>CF: 95207960634</small>
        <br />
        <small>&copy; Copyright 2019.</small>
      </Div>
      <Div
        d="flex"
        h="70px"
        align="center"
        p={{ x: "12px" }}
        // w={{ xs: "90%", sm: "62%" }}
        bg={bg === "dark" ? "#1c1c1c" : "#ececec"}
        fontSize="0.75rem"
        // lineHeight={1}
        textColor="#ccc"
        textSize=".75rem"
      >
        <Div d="flex" flexDir="row" justify="space-around" align="center">
          {/* <h4 className="sr-only">Enti Finanziatori</h4> */}
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
        <Div className={css({ maxWidth: "20rem" })}>
          <small style={{ lineHeight: 1.2 }}>
            Iniziativa co-finanziata dalla Presidenza del Consiglio dei Ministri
            - <br />
            Dipartimento della Gioventù e del Servizio Civile Nazionale e dal
            Comune di Napoli
          </small>
        </Div>
      </Div>
    </footer>
  );
};

export default Footer;
