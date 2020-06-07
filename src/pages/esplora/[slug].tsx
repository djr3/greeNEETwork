// Core Components
import Link from "next/link";
import { useRouter } from "next/router";
import { directus } from "@/core/cli";

// Page Layout
import Page from "@/containers/Main";
import { useStyletron } from "styletron-react";

// Page Components
import { Image } from "@/components/Image";
import { Slideshow } from "@/components/Slideshow";
import { DynamicMap } from "@/components/Map";
import { getCoordinates } from "@/components/Map/utils";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, Row, Col, Div, Text, Anchor, Icon } from "atomize";
import { SocialShare, SocialMenu } from "@/components/Social";
import { Contacts } from "@/components/Contacts";

// Carousel
import Carousel from "@brainhubeu/react-carousel";

// Generate static pages
export async function getStaticPaths() {
  const luoghi = await (
    await directus.getItems<{ slug: string }[]>("luoghi", {
      fields: ["id", "slug"],
    })
  ).data;

  const paths = luoghi.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const luogo = await (
    await directus.getItems<
      {
        id: string;
        geo_json;
        galleria_immagini;
        reti_territoriali;
        servizi;
        tipologie;
      }[]
    >("luoghi", {
      filter: { slug: { eq: params.slug } },
      fields: [
        "id",
        "nome",
        "contenuto",
        "telefono",
        "email",
        "pagina_web",
        "pagina_facebook",
        "pagina_instagram",
        "geo_json",
        "accessibilita.*",
        "galleria_immagini.directus_file.*",
        "reti_territoriali.rete_territoriale.*",
        "servizi.servizio.*",
        "tipologie.tipologia.*",
      ],
    })
  ).data[0];

  const { latitude, longitude } = getCoordinates(luogo.geo_json);

  const { address: indirizzo } = await (
    await fetch(
      "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&accept-language=it-IT&zoom=18"
    )
  ).json();

  //@ts-ignore
  return {
    props: {
      luogo: {
        ...luogo,
        indirizzo,
        galleria_immagini:
          luogo.galleria_immagini && luogo.galleria_immagini.length > 0
            ? luogo.galleria_immagini.map(
                ({ directus_file }) => directus_file.filename_download
              )
            : null,
      },
    },
  };
}

export default function Luogo({ luogo }) {
  /**
   * Hooks
   */
  const [css] = useStyletron();
  const router = useRouter();

  /**
   * Data Props Processing
   */
  const {
    id,
    nome,
    contenuto,
    contatti,
    indirizzo,
    accessibilita,
    galleria_immagini,
    reti_territoriali,
    servizi,
    tipologie,
  } = luogo;

  const contacts = [];

  /**
   * Utility functions
   */
  const hasContacts = ({
    email,
    telefono,
    pagina_web,
    pagina_facebook,
    pagina_instagram,
  }) => {
    return new Boolean(
      email || telefono || pagina_web || pagina_facebook || pagina_instagram
    );
  };

  const getAddress = (address) => {
    return [
      address.road,
      address.suburb,
      address.city,
      address.state,
      address.country,
    ].map((i) => (i ? i + ", " : null));
  };

  const getContacts = (place) => {
    return [
      place.telefono,
      place.email,
      place.pagina_web,
      place.pagina_facebook,
      place.pagina_instagram,
    ].map((c) => (c ? <p key={c}>{c}</p> : null));
  };

  return (
    <Page
      id={id}
      className={css({
        overflowY: "visible",
        padding: "20px",
        marginBottom: "4rem",
      })}
    >
      <Container>
        <Row justify="center">
          <Col size={{ xs: 12 }}>
            {galleria_immagini && (
              <Carousel
                slidesPerPage={2}
                slidesPerScroll={1}
                arrows
                itemWidth={640}
                infinite
                centered
                // offset={4}
              >
                {galleria_immagini.length > 0 &&
                  galleria_immagini.map((i) => <img key={i} src={i} />)}
              </Carousel>
            )}
            {/* {galleria_immagini && <Slideshow images={galleria_immagini} />} */}
          </Col>
        </Row>
      </Container>

      <Container className={css({ maxWidth: "30rem" })}>
        <Row align="flex-start">
          <Col size={{ xs: 12, md: 8, lg: 9 }} tag="header">
            <Div p={{ t: "4rem" }}>
              <Breadcrumbs separator="/" />
              <Text textSize="h1" tag="h1">
                {nome}
              </Text>
              <Text textSize="caption">{getAddress(indirizzo)}</Text>
            </Div>

            {/* <Text tag="h3" textSize="h3">
              Dove si trova
            </Text> */}
            <Div h="400px" m={{ y: "1rem" }}>
              <DynamicMap places={[luogo]} selPlace={luogo} />
            </Div>
            <Div m={{ y: "3rem" }}>
              <Text tag="h3" textSize="h3">
                Descrizione
              </Text>
              <div dangerouslySetInnerHTML={{ __html: contenuto }} />
              {/* <Text m={{ b: "3rem" }}>
                  {descrizione.split("Tratto da:")[0]}
                </Text> */}
              {/* <Text m={{ b: "3rem" }}>
                  Tratto da : {descrizione.split("Tratto da:")[1]}
                </Text> */}
            </Div>
            {reti_territoriali && reti_territoriali.length > 0 ? (
              <Row>
                <Col
                  p={{ y: "1rem" }}
                  size={12}
                  className={css({
                    marginBottom: "1rem",
                    borderTop: "1px solid #ccc",
                    borderBottom: "1px solid #ccc",
                  })}
                >
                  <Text textSize="h5" tag="h5">
                    Appartenente alle reti territoriali :
                  </Text>
                </Col>
                {reti_territoriali.map(({ rete_territoriale }) => (
                  <Col
                    key={rete_territoriale.id}
                    m={{ y: "3rem" }}
                    tag="article"
                    size={{ xs: 6, md: 4, lg: 3 }}
                  >
                    <Link href={`/reti/${rete_territoriale.slug}`}>
                      <Anchor m={{ y: "3rem" }}>
                        {/* <Text textSize="h6" tag="h6">
                          {rete.nome}
                        </Text> */}
                        <Image
                          src={`/img/reti/${rete_territoriale.id}.webp`}
                          alt={rete_territoriale.nome}
                        />
                      </Anchor>
                    </Link>
                  </Col>
                ))}
              </Row>
            ) : null}
          </Col>

          <Col size={{ xs: 12, md: 4, lg: 3 }} pos="sticky" top="2rem">
            <Div p={{ t: "4rem" }} m={{ b: "1rem" }} w="100%">
              <SocialShare
                url={process.env.APP_URL + router.asPath}
                className={css({
                  display: "flex",
                  justifyContent: "space-evenly",
                })}
              />
              <Text
                textAlign="center"
                textWeight="400"
                textSize="caption"
                tag="h6"
                className={css({
                  textTransform: "uppercase",
                  letterSpacing: "4px",
                })}
              >
                Condividi sui social
              </Text>
            </Div>

            {/* <Text tag="h3" textSize="h3" m={{ b: "1rem" }}>
              Dettagli
            </Text> */}
            {accessibilita && (
              <Div d="block" m={{ b: ".5rem" }} p=".5rem">
                <Text tag="h6" textSize="h6">
                  Accessibilità
                </Text>
                {accessibilita.nome}
              </Div>
            )}
            {tipologie && tipologie.length > 0 ? (
              <Div d="block" m={{ b: ".5rem" }} p=".5rem">
                <Text tag="h6" textSize="h6">
                  Tipologia
                </Text>
                <Div tag="ul" m={{ l: "1rem" }}>
                  {tipologie.map(
                    ({ tipologia }) =>
                      tipologia && <li key={tipologia.id}>{tipologia.nome}</li>
                  )}
                </Div>
              </Div>
            ) : null}
            {servizi && servizi.length > 0 ? (
              <Div d="block" m={{ b: ".5rem" }} p=".5rem">
                <Text tag="h6" textSize="h6">
                  Servizi
                </Text>
                <Div tag="ul" m={{ l: "1rem" }}>
                  {servizi.map(({ servizio }) => (
                    <li key={servizio.id}>{servizio.nome}</li>
                  ))}
                </Div>
              </Div>
            ) : null}
            {hasContacts(luogo) && (
              <Div d="block" m={{ b: ".5rem" }} p=".5rem">
                <Text tag="h6" textSize="h6">
                  Contatti
                </Text>
                <Contacts luogo={luogo} />
              </Div>
            )}
          </Col>
        </Row>
      </Container>
    </Page>
  );
}
