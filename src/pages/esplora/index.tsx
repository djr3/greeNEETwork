// Core Components
import Head from "next/head";
import { useState, useEffect } from "react";
import { directus } from "core/cli";
// import forceUpdate from "use-force-update";

// Page Layout & Style
import Page from "containers/Main";
import Aside from "containers/Aside";
import { useStyletron, styled } from "styletron-react";

// Page Components
import { Row, Col, Text, Icon, Div } from "atomize";
import { Filter } from "components/Filters";
import { DynamicMap, PlacePreview } from "components/Map";

// Static Props
export async function getStaticProps() {
  const accessibilita = await (await directus.getItems("accessibilita")).data;
  const luoghi = await (
    await directus.getItems<
      { accessibilita; servizi; tipologie; galleria_immagini }[]
    >("luoghi", {
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
        "galleria_immagini.directus_file.filename_download",
        "tipologie.tipologia",
      ],
    })
  ).data;
  const servizi = await (await directus.getItems("servizi")).data;
  const tipologie = await (await directus.getItems("tipologie")).data;

  return {
    props: {
      accessibilita,
      luoghi: luoghi.map((l) => ({
        ...l,
        accessibilita: l.accessibilita ? l.accessibilita.id : null,
        galleria_immagini:
          l.galleria_immagini && l.galleria_immagini.length > 0
            ? l.galleria_immagini.map(
                ({ directus_file }) => directus_file.filename_download
              )
            : null,
        servizi: l.servizi.map(({ servizio }) => servizio),
        tipologie: l.tipologie.map(({ tipologia }) => tipologia),
      })),
      servizi,
      tipologie,
    },
  };
}

const PagButton = styled("button", {
  padding: "8px",
  display: "flex",
  height: "100%",
  lineHeight: "1em",
  // flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "#000",
  // color: "white",
  width: "50%",
  fontSize: "12px",
});

export default function Esplora({ accessibilita, luoghi, servizi, tipologie }) {
  /**
   * Props Data Processing
   */
  const places = luoghi;
  const [css] = useStyletron();

  /**
   * Initializing state
   */

  const [state, setState] = useState({
    selAccessibilita: [""],
    selServizi: [""],
    selTipologie: [""],
  });

  const [data, setData] = useState({
    places,
    selPlace: undefined,
  });

  /**
   * Filter functions declaration
   */
  const filterAccessibilita = (l) =>
    state.selAccessibilita.length > 0
      ? state.selAccessibilita.includes(l.accessibilita)
      : true;

  const filterServizi = (l) =>
    state.selServizi.length > 0
      ? l.servizi.some((s) => state.selServizi.includes(s))
      : true;

  const filterTipologie = (l) =>
    state.selTipologie.length > 0
      ? l.tipologie.some((t) => state.selTipologie.includes(t))
      : true;

  const filterAll = (l) =>
    filterTipologie(l) || filterAccessibilita(l) || filterServizi(l);
  // const filters = [filterAccessibilita, filterTipologie];

  /**
   * User Interactivity handles
   */
  const updateData = () => {
    const filteredPlaces = places.filter((l) => filterAll(l));
    setData({
      places: filteredPlaces,
      selPlace: filteredPlaces[0],
    });
  };

  const findPlaceIdx = (arr, placeId) => arr.findIndex((e) => e.id === placeId);

  const findPlace = (arr, placeId) => arr[findPlaceIdx(arr, placeId)];

  const handleFilters = (property, value) => {
    // console.log(`Filtering by ${property}: ${value}`);
    setState((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

  const handleMarkerClick = (place) => {
    setData((prevData) => ({
      ...prevData,
      selPlace: findPlace(prevData.places, place),
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

  const handleNext = () => {
    const arr = data.places.length;
    let idx = findPlaceIdx(data.places, data.selPlace.id) + 1;

    idx = idx % arr;
    setData((prevState) => ({
      ...prevState,
      selPlace: data.places[idx],
    }));
  };

  useEffect(() => {
    updateData();
  }, [state]);

  return (
    <Page
      id="esplora"
      className={css({})}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        paddingBottom: 0,
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
        <Col size={3} h="100vh">
          <Aside
            className={css({
              padding: ".5rem .5rem 4rem .5rem",
            })}
          >
            <Div
              // bg="#799d43"
              bg="#ABC77F"
              h="3rem"
              m={{ b: "1rem", l: "90px" }}
              d="flex"
              align="center"
              justify="center"
            >
              <Text tag="h5" textSize="h5" textWeight="600" color="white">
                Mappa dei luoghi
              </Text>
            </Div>
            <Div
              d="flex"
              flexDir="column"
              justify="space-between"
              h="calc(100% - 4rem)"
            >
              <Div>
                <Text
                  m={{ b: ".5rem" }}
                  textSize="12px"
                  textWeight="400"
                  // lineHeight="1.25em"
                  // className={css({
                  //   lineHeight = "14px",
                  // })}
                >
                  Seleziona uno o più filtri di ricerca dai box sottostanti per
                  trovare i luoghi di tuo interesse
                </Text>
                {/* <Col size={12}></Col> */}
                <Div d="flex">
                  <Filter
                    name="Accessibilita"
                    filters={accessibilita}
                    type="select"
                    onChange={handleFilters}
                  />
                  <Filter
                    name="Servizi"
                    filters={servizi}
                    type="select"
                    onChange={handleFilters}
                  />
                </Div>

                <Filter
                  filters={tipologie}
                  name="Tipologie"
                  type="select"
                  onChange={handleFilters}
                />
              </Div>
              {/* </Row> */}

              {data.selPlace && (
                <>
                  <PlacePreview place={data.selPlace} />
                  <div
                    className={css({
                      display: "flex",
                      // justifyContent: "space-around",
                      justifyContent: "flex-start",
                      width: "100%",
                      height: "48px",
                      // backgroundColor: "#000",
                    })}
                  >
                    <PagButton onClick={handlePrev}>
                      {/* <Icon name="Back" color="#fff" size="24px" /> */}
                      <Icon name="Back" color="#000" size="24px" />
                      <span>Precedente</span>
                    </PagButton>
                    <PagButton onClick={handleNext}>
                      {/* <Icon name="Next" color="#fff" size="24px" /> */}
                      {/* <span>Successivo</span> */}
                      <span>Successivo</span>
                      <Icon name="Next" color="#000" size="24px" />
                    </PagButton>
                  </div>
                </>
              )}
            </Div>
          </Aside>
        </Col>

        <Col size={9}>
          <DynamicMap
            places={data.places}
            selPlace={data.selPlace}
            onMarkerClick={handleMarkerClick}
          />
        </Col>
      </Row>
    </Page>
  );
}
