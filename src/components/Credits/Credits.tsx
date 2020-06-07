import React from "react";
import { useStyletron } from "styletron-react";

interface CreditsProps {
  bg: "dark" | "light";
}

export const Credits: React.FC<CreditsProps> = ({ bg }) => {
  const [css] = useStyletron();
  const isDark = bg === "dark" ? "_n" : "";

  return (
    <div
      className={css({
        height: "100%",
        textAlign: "center",
        zIndex: 10,
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
        })}
      >
        {/* <h4 className="sr-only">Enti Finanziatori</h4> */}
        <img
          className={css({ height: "60px", width: "auto" })}
          src={`/img/anci${isDark}.png`}
          alt="Logo Consiglio dei Ministri"
        />
        <img
          className={css({ height: "60px", width: "auto" })}
          src={`/img/anci${isDark}.png"`}
          alt="Logo ANCI"
        />
        <img
          className={css({ height: "60px", width: "auto" })}
          src={`/img/comune${isDark}.png`}
          alt="Logo Comune di Napoli"
        />
      </div>
      <div className={css({ fontSize: "0.5rem", lineHeight: "1" })}>
        <small>
          Iniziativa co-finanziata dalla Presidenza del Consiglio dei Ministri
          <br /> Dipartimento alla Gioventù e al Servizio Sociale Nazionale
        </small>
      </div>
    </div>
  );
};
