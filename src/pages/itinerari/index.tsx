// Core Components
import Head from "next/head";
import { useState } from "react";
import { directus } from "core/cli";

// Page Layout & Style
import Page from "containers/Main";
import { getLayout } from "layouts/Horizontal";
import { useStyletron, styled } from "styletron-react";

// Page Components
import { DynamicMap, PlacePreview } from "components/Map";
import { Row, Col, Div, Text, Collapse, Icon } from "atomize";

// Typings
import { Itinerario, Luogo, Percorso } from "interfaces";
import Aside from "containers/Aside/Aside";

const StyledItem = styled("li", {
  ":hover": {
    background: "#69b6d5AA",
  },
  ":before": {
    content: " ",
    position: "relative",
    left: "-1rem",
    display: "inline-block",
    width: "15px",
    height: "15px",
    borderRadius: "7.5px",
    backgroundColor: "#69b6d5",
  },
  padding: ".5rem 1rem",
  borderLeft: "1px solid green",
});

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

const Itinerari = (props: Props) => {
  const { itinerari, luoghi, percorsi } = props;

  const [selItinerary, setSelItinerary] = useState("");
  const [selPlace, setSelPlace] = useState(undefined);

  const [css] = useStyletron();

  // const handleClick = (v) => setSelItinerary(v);
  const handleItin = (v) =>
    v === selItinerary ? setSelItinerary("") : setSelItinerary(v);
  const handlePlace = (v) =>
    v.id === selPlace ? setSelPlace(undefined) : setSelPlace(v);

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
        <Col size={4} p={{ b: "4rem" }} h="100vh">
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
            <Div>
              {itinerari
                .filter((i) => i.itinerario === null)
                .map((i) => (
                  <Div
                    key={i.id}
                    cursor="pointer"
                    p={{ x: "1rem", y: ".5rem" }}
                  >
                    <Text
                      tag="h5"
                      textSize="subheader"
                      textWeight="600"
                      m={{ b: "1rem" }}
                      onClick={() => handleItin(i.id)}
                    >
                      {i.id}. {i.nome}
                    </Text>
                    {i.children &&
                      i.children.map((child) => (
                        <Div
                          key={child.id}
                          m={{ b: ".75rem" }}
                          p={{ l: ".75rem" }}
                        >
                          <Div
                            d="flex"
                            justify="space-between"
                            onClick={() => handleItin(child.id)}
                          >
                            <Text
                              tag="h6"
                              textSize="paragraph"
                              m={{ b: ".5rem" }}
                              className={css({ lineHeight: 1.2 })}
                            >
                              {(child.id as string).slice(-2)}. {child.nome}
                            </Text>
                            <Icon
                              name={
                                selItinerary === child.id
                                  ? "UpArrow"
                                  : "DownArrow"
                              }
                              size="1.5rem"
                            />
                          </Div>
                          <Collapse isOpen={selItinerary === child.id}>
                            <Div tag="ul">
                              {filteredPlaces.map((place) => (
                                <StyledItem
                                  key={place.id}
                                  onClick={() => handlePlace(place)}
                                >
                                  <Div d="flex">{place.nome}</Div>
                                </StyledItem>
                              ))}
                            </Div>
                          </Collapse>
                        </Div>
                      ))}
                  </Div>
                ))}
            </Div>
          </Aside>
        </Col>
        <Col size={8}>
          <DynamicMap places={filteredPlaces} selPlace={selPlace} withPopup />
        </Col>
      </Row>
    </Page>
  );
};

Itinerari.getLayout = getLayout;

export default Itinerari;
