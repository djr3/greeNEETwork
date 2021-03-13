// Core Components
import Head from "next/head";
import { SyntheticEvent, useMemo, useState } from "react";
import { directus } from "core/cli";

// Page Layout & Style
import Page from "containers/Main";

// Page Components
import { DynamicMap } from "components/Map";
import { Row, Col, Text, Collapse } from "@geist-ui/react";

// Typings
import type { IItinerario, ILuogo, IPercorso } from "@types";

// Styled Items
const StyledItem = (props) => (
  <li {...props}>
    {props.children}
    <style jsx>{`
      li {
        padding: 0.5rem 1rem;
        border-left: 1px solid green;
        cursor: pointer;
      }
      li:hover {
        background: #69b6d5aa;
      }
      li:before {
        content: " ";
      }
    `}</style>
  </li>
);
export const stripeKeys = (keys: string[], object: object) => {
  for (const key in object) {
    if (keys.includes(key)) delete object[key];
  }
  return object;
};

// Static Props
export async function getStaticProps() {
  const itinerari = (
    await directus.getItems<IItinerario[]>("itinerari", { limit: 50 })
  ).data;

  const luoghi = (
    await directus.getItems<ILuogo[]>("luoghi", {
      limit: 500,
      fields: ["id", "nome", "slug", "geo_json", "itinerari.itinerario"],
    })
  ).data.map((l) => ({
    ...l,
    geo_json: { ...l.geo_json, properties: stripeKeys(["geo_json"], l) },
    itinerari: l.itinerari.map(({ itinerario }) => itinerario),
  }));

  const percorsi = (
    await directus.getItems<IPercorso[]>("percorsi", {
      limit: 50,
      fields: ["id", "nome", "geo_json", "itinerari.itinerario"],
    })
  ).data.map((p) => ({
    ...p,
    geo_json: { ...p.geo_json, properties: stripeKeys(["geo_json"], p) },
    itinerari: p.itinerari.map(({ itinerario }) => itinerario),
  }));

  function reshapeItin(items) {
    return items
      .filter((i) => !i.itinerario)
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
  itinerari: IItinerario[];
  luoghi: ILuogo[];
  percorsi: IPercorso[];
}

const Itinerari = (props: Props) => {
  const { itinerari, luoghi, percorsi } = props;

  const [selItinerary, setSelItinerary] = useState(null);
  const [selPlace, setSelPlace] = useState(null);

  /**
   * User Interactivity handles
   */
  const handleItin = (
    type: "main" | "child",
    e: SyntheticEvent<HTMLUListElement, MouseEvent>,
    v: string
  ) => {
    if (type === "child") e.stopPropagation();
    v === selItinerary ? setSelItinerary(null) : setSelItinerary(v);
  };

  const handlePlace = (
    e: SyntheticEvent<HTMLLIElement, MouseEvent>,
    v: ILuogo
  ) => {
    if (e.stopPropagation) e.stopPropagation();
    if (v && v.id && (selPlace === null || selPlace.id !== v.id))
      setSelPlace(v);
  };

  const filterPlaces = (items) =>
    useMemo(
      () => items.filter((i) => i.itinerari.some((t) => selItinerary === t)),
      [selItinerary]
    );

  const filteredPlaces = [...filterPlaces(luoghi), ...filterPlaces(percorsi)];

  // useEffect(() => {
  //   console.log("State : ", { selItinerary, selPlace });
  //   console.log("Filtered Places : ", filteredPlaces);
  // }, [selItinerary]);

  // const MemoMap = () => {
  //   const filteredPlaces = useMemo(
  //     () => [...filterPlaces(luoghi), ...filterPlaces(percorsi)],
  //     [selItinerary, selPlace]
  //   );
  //   return <Map places={filteredPlaces} selPlace={selPlace} />;
  // };

  return (
    <Page
      id="itinerari"
      style={{
        paddingBottom: 0,
        marginTop: 0,
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
      <Row style={{ height: "100%" }}>
        <Col span={6} style={{ height: "100vh" }}>
          <aside style={{ height: "100%", overflowY: "auto" }}>
            <div style={{ background: "#fff", position: "sticky", top: 0 }}>
              <div
                style={{
                  background: "#111",
                  height: "4rem",
                  marginLeft: "6.25rem",
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  h1
                  style={{
                    color: "#fff",
                    fontSize: "1.125rem",
                    fontWeight: 300,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: 0,
                  }}
                >
                  Itinerari
                </Text>
              </div>
              <div style={{ padding: ".5rem", paddingBlock: "1rem" }}>
                <Text style={{ fontSize: ".8rem", lineHeight: 1.2 }}>
                  Restituzione digitale del ‘viaggio’ di Leonardo Recchia e
                  Renato Ruotolo nel Parco Metropolitano delle Colline di
                  Napoli.
                </Text>
              </div>
            </div>
            <div style={{ height: "100%" }}>
              {itinerari
                .filter((i) => !i.itinerario)
                .map((i) => (
                  <Collapse.Group key={i.id}>
                    <Collapse
                      title={i.id.slice(0, -2)}
                      subtitle={i.nome}
                      onClick={(e) => handleItin("main", e, i.id)}
                    >
                      {i.children && (
                        <Collapse.Group>
                          {i.children.map((child) => (
                            <Collapse
                              key={child.id}
                              title={
                                child.id.slice(0, 3) +
                                "." +
                                child.id.slice(3, 5)
                              }
                              subtitle={child.nome}
                              onClick={(e) => handleItin("child", e, child.id)}
                            >
                              <ul style={{ margin: 0 }}>
                                {filterPlaces(luoghi).map((place) => (
                                  <StyledItem
                                    key={place.id}
                                    onClick={(e) => handlePlace(e, place)}
                                  >
                                    {place.nome}
                                  </StyledItem>
                                ))}
                              </ul>
                            </Collapse>
                          ))}
                        </Collapse.Group>
                      )}
                    </Collapse>
                  </Collapse.Group>
                ))}
            </div>
          </aside>
        </Col>
        <Col span={18}>
          <DynamicMap
            places={filteredPlaces}
            selPlace={selPlace}
            onClick={handlePlace}
            withPopup
          />
          {/* <MemoMap /> */}
        </Col>
      </Row>
    </Page>
  );
};

// Itinerari.getLayout = getLayout;
Itinerari.noFooter = true;

export default Itinerari;
