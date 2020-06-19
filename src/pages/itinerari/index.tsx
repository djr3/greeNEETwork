// Core Components
import Head from "next/head";
import { useState, useEffect } from "react";
import { directus } from "core/cli";

// import { Filters } from "components/Filters";
import { DynamicMap } from "components/Map";

// Page Layout & Style
import Page from "containers/Main";
import { useStyletron } from "styletron-react";

// Page Components
import { Row, Col, Div, Text } from "atomize";

// Typings
import { Itinerario, Luogo, Percorso } from "interfaces";
import Aside from "containers/Aside/Aside";

// Static Props
export async function getStaticProps() {
  const itinerari = await (
    await directus.getItems<{ id; itinerario }[]>("itinerari", {
      fields: ["id", "nome", "itinerario"],
    })
  ).data;

  const luoghi = await (
    await directus.getItems<{ itinerari }[]>("luoghi", {
      fields: ["id", "nome", "slug", "geo_json", "itinerari.itinerario"],
    })
  ).data.map((l) => ({
    ...l,
    itinerari: l.itinerari.map(({ itinerario }) => itinerario),
  }));

  const percorsi = await (
    await directus.getItems<{ itinerari }[]>("percorsi", {
      fields: ["id", "nome", "geo_json", "itinerari.itinerario"],
    })
  ).data.map((p) => ({
    ...p,
    itinerari: p.itinerari.map(({ itinerario }) => itinerario),
  }));

  function reshapeItin(items) {
    return items
      .filter((i) => i.itinerario === null)
      .map((i) =>
        Object.assign(i, {
          children: itinerari.filter((i2) => i2.itinerario === i.id),
        })
      );
  }

  return {
    props: {
      luoghi,
      percorsi,
      itinerari: reshapeItin(itinerari),
    },
  };
}

interface Props {
  itinerari: Itinerario[];
  luoghi: Luogo[];
  percorsi: Percorso[];
}

export default function Itinerari(props: Props) {
  const { itinerari, luoghi, percorsi } = props;

  const [selItinerary, setSelItinerary] = useState("");

  const [css] = useStyletron();

  const handleClick = (v) => setSelItinerary(v);

  function filterPlaces(items) {
    return items.filter((i) => i.itinerari.some((t) => selItinerary === t));
  }

  const filteredPlaces = [...filterPlaces(luoghi), ...filterPlaces(percorsi)];

  return (
    <Page
      id="itinerari"
      style={{
        height: "100vh",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
        paddingBottom: 0,
        paddingTop: 0,
      }}
    >
      <Head>
        {/* MapboxGL CSS */}
        <link
          key="mapbox-gl"
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.10.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Row h="100%">
        <Col size={3} p={{ b: "4rem" }} h="100vh">
          <Aside
            className={css({
              // height: "calc(100% - 4rem)",
              overflowY: "auto",
            })}
          >
            <Div bg="#fff" pos="sticky" top="0" shadow={2}>
              <Div
                bg="#111"
                h="4rem"
                m={{ l: "6.25rem" }}
                d="flex"
                align="center"
                justify="center"
              >
                <Text
                  tag="h1"
                  textSize="h6"
                  className={css({
                    color: "#fff",
                    fontWeight: 300,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                  })}
                >
                  Itinerari
                </Text>
              </Div>
              <Div p={{ x: "1rem", y: ".5rem" }}>
                <Text className={css({ fontSize: ".8rem", lineHeight: 1.2 })}>
                  Restituzione digitale del ‘viaggio’ di Leonardo Recchia e
                  Renato Ruotolo nel Parco Metropolitano delle Colline di
                  Napoli.
                </Text>
              </Div>
            </Div>
            <Div p=".5rem">
              {itinerari
                .filter((i) => i.itinerario === null)
                .map((i) => (
                  <Div key={i.id} cursor="pointer" p=".75rem">
                    <Text
                      tag="h5"
                      textSize="subheader"
                      textWeight="600"
                      m={{ b: ".75rem" }}
                      onClick={() => handleClick(i.id)}
                    >
                      {i.id}. {i.nome}
                    </Text>
                    {i.children &&
                      i.children.map((child) => (
                        <Div
                          key={child.id}
                          m={{ b: ".5rem" }}
                          p={{ l: ".75rem" }}
                        >
                          <Text
                            onClick={() => handleClick(child.id)}
                            className={css({ lineHeight: 1.2 })}
                          >
                            {(child.id as string).slice(-2)}. {child.nome}
                          </Text>
                        </Div>
                      ))}
                  </Div>
                ))}
            </Div>
          </Aside>
        </Col>
        <Col size={9}>
          <DynamicMap places={filteredPlaces} withPopup={true} />
        </Col>
      </Row>
    </Page>
  );
}
