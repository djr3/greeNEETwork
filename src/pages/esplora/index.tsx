// Core Components
import Head from "next/head";
import { useState, useEffect } from "react";
import { directus } from "core/cli";
import { getImageHashes } from "core/utils";

// Page Layout & Style
import Page from "containers/Main";

// Page Components
import Card from "components/Card";
import { Filter } from "components/Filters";
import { DynamicMap } from "components/Map";
import { Row, Col, Text, Button, Grid, useMediaQuery } from "@geist-ui/react";
import { ChevronLeft, ChevronRight } from "@geist-ui/react-icons";

// Typings
import type { ILuogo } from "@types";

// Static Props
export async function getStaticProps() {
  const { data: accessibilita } = await directus.getItems("accessibilita");
  const { data: luoghi } = await directus.getItems<ILuogo[]>("luoghi", {
    fields: [
      "id",
      "nome",
      "slug",
      "descrizione",
      "telefono",
      "email",
      "pagina_web",
      "pagina_facebook",
      "pagina_instagram",
      "geo_json",
      "accessibilita.id",
      "servizi.servizio",
      "galleria_immagini.directus_file.private_hash",
      "tipologie.tipologia",
    ],
    limit: 300,
  });
  const { data: servizi } = await directus.getItems("servizi");
  const { data: tipologie } = await directus.getItems("tipologie");

  return {
    props: {
      accessibilita,
      luoghi: JSON.parse(
        JSON.stringify(
          luoghi.map((l) => ({
            ...l,
            //@ts-ignore
            accessibilita: l.accessibilita ? l.accessibilita.id : null,
            galleria_immagini: getImageHashes(l),
            servizi: l.servizi.map(({ servizio }) => servizio),
            tipologie: l.tipologie.map(({ tipologia }) => tipologia),
          }))
        )
      ),
      servizi,
      tipologie,
    },
  };
}

/**
 * Page Component
 */
const Esplora = ({ accessibilita, luoghi, servizi, tipologie }) => {
  /**
   * Initializing state
   */
  const initialData = { places: luoghi, selPlace: undefined };

  const initialState = {
    selAccessibilita: [],
    selServizi: [],
    selTipologie: [],
  };

  const [state, setState] = useState(initialState);

  const [data, setData] = useState(initialData);

  const isLG = useMediaQuery("lg", { match: "up" });

  /**
   * Filter functions
   */
  const filterAccessibilita = (l) =>
    state.selAccessibilita.includes(l.accessibilita);

  const filterServizi = (l) =>
    l.servizi.some((s) => state.selServizi.includes(s));

  const filterTipologie = (l) =>
    l.tipologie.some((t) => state.selTipologie.includes(t));

  const filterAll = (l) =>
    filterTipologie(l) || filterAccessibilita(l) || filterServizi(l);

  /**
   * Utility functions
   */
  const findPlaceIdx = (arr, placeId) => arr.findIndex((e) => e.id === placeId);

  const findPlace = (arr, placeId) => arr[findPlaceIdx(arr, placeId)];

  /**
   * User Interactivity handles
   */
  const handleFilters = (property, value) => {
    setState((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

  const handleMarkerClick = (e, place) => {
    if (e.stopPropagation) e.stopPropagation();
    setData((prevData) => ({
      ...prevData,
      selPlace: findPlace(prevData.places, place),
    }));
  };

  const handleNext = () => {
    const arr = data.places.length;
    let idx = findPlaceIdx(data.places, data.selPlace.id) + 1;

    idx = idx % arr;
    setData((prevState) => ({
      ...prevState,
      selPlace: data.places[idx],
    }));
  };

  const handlePrev = () => {
    const arr = data.places.length;
    let idx = findPlaceIdx(data.places, data.selPlace.id);

    if (idx === 0) {
      idx = arr - 1;
    } else {
      idx = idx - 1;
    }

    setData((prevState) => ({
      ...prevState,
      selPlace: data.places[idx],
    }));
  };

  /**
   * Effects
   */
  useEffect(() => {
    const filteredPlaces = luoghi.filter((l) => filterAll(l));
    setData({
      places: filteredPlaces,
      selPlace: filteredPlaces[0],
    });
  }, [state]);

  return (
    <Page
      id="esplora"
      style={{
        // position: "absolute",
        // top: 0,
        // left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        paddingBottom: 0,
        paddingTop: 0,
        marginTop: 0,
      }}
      metaTags={{
        title: "Esplora | greeNEETwork",
        description:
          "Esplora la mappa del Parco Metropolitano delle Colline di Napoli e scopri le realtà attive sul territorio",
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
      <Row>
        <Col span={6} style={{ height: "100vh" }}>
          <aside
            style={{
              height: "100%",
              width: "100%",
              // padding: ".5rem .5rem 4rem .5rem",
            }}
          >
            <div
              style={{
                background: "#111",
                height: "4rem",
                // marginBottom: ".5rem",
                marginLeft: "6.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                h1
                // textSize="h6"
                style={{
                  color: "#fff",
                  fontSize: "1.125rem",
                  fontWeight: 300,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  marginBottom: 0,
                }}
              >
                Esplora
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                padding: ".5rem",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "calc(100% - 4rem)",
              }}
            >
              <div>
                <Text
                  style={{
                    margin: ".5rem 0",
                    fontSize: ".75rem",
                    fontWeight: 400,
                  }}
                >
                  Seleziona uno o più filtri di ricerca dai box sottostanti per
                  trovare i luoghi di tuo interesse
                </Text>

                <Grid.Container gap={1} justify="center">
                  <Grid xs={24}>
                    <Filter
                      name="Accessibilita"
                      filters={accessibilita}
                      type="select"
                      onChange={handleFilters}
                    />
                  </Grid>
                  <Grid xs={24}>
                    <Filter
                      name="Servizi"
                      filters={servizi}
                      type="select"
                      onChange={handleFilters}
                    />
                  </Grid>
                  <Grid xs={24}>
                    <Filter
                      filters={tipologie}
                      name="Tipologie"
                      type="select"
                      onChange={handleFilters}
                    />
                  </Grid>
                </Grid.Container>
              </div>

              {data.selPlace && (
                <>
                  <Card type="place" data={data.selPlace} mini />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      // justifyContent: "flex-start",
                      width: "100%",
                      // height: "48px",
                      // backgroundColor: "#000",
                    }}
                  >
                    <Button
                      auto
                      ghost
                      type="secondary"
                      onClick={handlePrev}
                      icon={<ChevronLeft />}
                      style={{ width: "50%" }}
                    >
                      <span>{isLG ? "Precedente" : "Prev"}</span>
                    </Button>
                    <Button
                      auto
                      ghost
                      type="secondary"
                      onClick={handleNext}
                      iconRight={<ChevronRight />}
                      style={{ width: "50%" }}
                    >
                      <span>{isLG ? "Successivo" : "Next"}</span>
                    </Button>
                  </div>
                </>
              )}
            </div>
          </aside>
        </Col>

        <Col span={18}>
          <DynamicMap
            // withPopup
            places={data.places}
            selPlace={data.selPlace}
            onMarkerClick={handleMarkerClick}
          />
        </Col>
      </Row>
    </Page>
  );
};

// Esplora.getLayout = getLayout;
Esplora.noFooter = true;

export default Esplora;
