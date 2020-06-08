// Core Components
// import Head from "next/head";
import Link from "next/link";
import { directus } from "core/cli";

// Page Layout
import Page from "containers/Main/Main";

// Page Components
import { useStyletron } from "styletron-react";
import { Image } from "components/Image";
import { Breadcrumbs } from "components/Breadcrumbs";
import { Container, Row, Col, Div, Text, Anchor, Icon } from "atomize";
import { PlacePreview } from "components/Map";

// Generate static pages
export async function getStaticPaths() {
  const reti = await (await directus.getItems<{ slug }[]>("reti_territoriali"))
    .data;

  const paths = reti.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const rete = await (
    await directus.getItems<{ luoghi }[]>("reti_territoriali", {
      filter: { slug: { eq: params.slug } },
      fields: ["*", "luoghi.luogo.*", "luoghi.luogo.galleria_immagini.*"],
    })
  ).data[0];

  return {
    props: { rete: { ...rete, luoghi: rete.luoghi.map(({ luogo }) => luogo) } },
  };
}

export default function Rete({ rete }) {
  const [css] = useStyletron();

  console.log("Rete : ", rete);
  return (
    <Page
      id={`rete`}
      className={css({
        overflowY: "auto",
        padding: "20px",
        marginBottom: "80px",
      })}
    >
      <Container className={css({ maxWidth: "30rem" })}>
        <Row justify="center">
          <Col size={{ xs: 12, md: 10 }}>
            <Row>
              <Col size={4}>
                <Image
                  alt={`Logo rete`}
                  src={`/img/reti/${rete.id}.webp`}
                  className={css({ maxHeight: "280px", width: "auto" })}
                />
              </Col>
              <Col size={8}>
                <Text textSize="h1" tag="h1">
                  {rete.nome}
                </Text>
                <pre>
                  Tipologia : {rete.tipologia}
                  <br />
                  Area geografica : {rete.area_geografica}
                  <br />
                  <Anchor href={"/goto/" + rete.pagina_web} target="__blank">
                    <Icon name="Link" size="20px" />
                    Sito web
                  </Anchor>
                </pre>
                <p>{rete.descrizione}</p>
              </Col>
            </Row>

            <Row>
              <Breadcrumbs separator="/" />
            </Row>

            <Row>
              <Div m={{ y: "1rem" }}>
                <Text textSize="h4" tag="h4">
                  Appartengono a questa rete :
                </Text>
              </Div>
            </Row>

            <Row>
              {rete.luoghi.map((luogo) => (
                <Col
                  key={luogo.id}
                  tag="article"
                  size={{ xs: 12, md: 6, lg: 4 }}
                >
                  <PlacePreview place={luogo} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}
