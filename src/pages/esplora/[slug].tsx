// Core Components
import Link from "next/link";
import { useRouter } from "next/router";
import { directus } from "core/cli";

// Page Layout
import Page from "containers/Main";
import { useStyletron } from "styletron-react";

// Page Components
import { Image } from "components/Image";
// import { Slideshow } from "components/Slideshow";
import { DynamicMap } from "components/Map";
// import { getCoordinates } from "components/Map/utils";
import { Breadcrumbs } from "components/Breadcrumbs";
import { Container, Row, Col, Div, Text, Anchor } from "atomize";
import { SocialShare, SocialMenu } from "components/Social";

// Carousel
import Carousel from "@brainhubeu/react-carousel";

// const getAddress = (address) => {
//   return [
//     address.road,
//     address.suburb,
//     address.city,
//     address.state,
//     address.country,
//   ]
//     .filter((i) => i != undefined)
//     .join(", ");
// };

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

  // const { latitude, longitude } = getCoordinates(luogo.geo_json);

  // const { address } = await (
  //   await fetch(
  //     "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" +
  //       latitude +
  //       "&lon=" +
  //       longitude +
  //       "&accept-language=it-IT&zoom=18"
  //   )
  // ).json();

  // const indirizzo = await (
  //   await directus.updateItem("luoghi", luogo.id, {
  //     indirizzo: getAddress(address),
  //   })
  // ).data.indirizzo;

  return {
    props: {
      luogo: {
        ...luogo,
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
    indirizzo,
    accessibilita,
    galleria_immagini,
    reti_territoriali,
    servizi,
    tipologie,
  } = luogo;

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

  const formatLink = (s: string) => {
    if (s.includes("http")) return s;
    if (s.includes("@")) return "mailto:" + s;
    return "tel:+39" + s;
  };

  const checkLength = (string) => (string && string.length > 7 ? true : false);

  const makeMenu = (obj): { name: string; link: string }[] => {
    const menu = [];

    if (checkLength(obj.telefono))
      menu.push({ name: "Info", link: formatLink(obj.telefono) });
    if (checkLength(obj.email))
      menu.push({ name: "Email", link: formatLink(obj.email) });
    if (checkLength(obj.pagina_web))
      menu.push({ name: "Home", link: formatLink(obj.pagina_web) });
    if (checkLength(obj.pagina_facebook))
      menu.push({ name: "Facebook", link: formatLink(obj.pagina_facebook) });
    if (checkLength(obj.pagina_instagram))
      menu.push({ name: "Instagram", link: formatLink(obj.pagina_instagram) });

    return menu;
  };

  const socialMenu = makeMenu(luogo);

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
              <Text textSize="caption">{indirizzo}</Text>
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
                    Reti territoriali di appartenenza :
                  </Text>
                </Col>
                {reti_territoriali.map(({ rete_territoriale }) => (
                  <Col
                    key={rete_territoriale.id}
                    tag="article"
                    size={{ xs: 6, md: 4, lg: 3 }}
                  >
                    <Link
                      href="/reti/[slug]"
                      as={`/reti/${rete_territoriale.slug}`}
                    >
                      <Anchor d="flex" align="center" justify="center" h="100%">
                        {/* <Text textSize="h6" tag="h6">
                          {rete.nome}
                        </Text> */}
                        <Image
                          src={`/img/reti/${rete_territoriale.id}.webp`}
                          alt={rete_territoriale.nome}
                          maxH="100%"
                          w="auto"
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
                <SocialMenu menu={socialMenu} type="icons" d="flex" />
              </Div>
            )}
          </Col>
        </Row>
      </Container>
    </Page>
  );
}
