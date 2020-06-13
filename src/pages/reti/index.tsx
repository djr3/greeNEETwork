// Core Components
// import Head from "next/head";
import Link from "next/link";
import { directus } from "core/cli";

// Page Layout
import Page from "containers/Main";
import { useStyletron } from "styletron-react";

// Page Components
import { Container, Row, Col, Div, Text, Anchor, Button } from "atomize";
import { Breadcrumbs } from "components/Breadcrumbs";
// import { Image } from "components/Image";

export async function getStaticProps() {
  const reti = await (await directus.getItems("reti_territoriali")).data;

  return {
    props: { reti },
  };
}

export default function Reti({ reti }) {
  const [css] = useStyletron();
  return (
    <Page id="reti" className={css({})}>
      <Container>
        <Row justify="center">
          <Col size={{ xs: 12, sm: 10, lg: 9 }}>
            <Row m={{ b: "1.5rem" }}>
              {/* <Col size={{ xs: 12, sm: 10, lg: 9 }}> */}
              <Col>
                <Breadcrumbs />
                <Div tag="hgroup">
                  <Text textSize="h1" tag="h1" fontFamily="primary">
                    Reti Territoriali
                  </Text>
                  <Text
                    textSize="body"
                    // textSize="caption"
                    // textSize="h5"
                    tag="h5"
                    className={css({
                      //   textTransform: "uppercase",
                      fontWeight: 400,
                      //   letterSpacing: "4px",
                    })}
                  >
                    Reti locali, nazionali e internazionali attive nel Parco
                    Metropolitano delle Colline di Napoli
                  </Text>
                </Div>
              </Col>
            </Row>

            <Row>
              {reti.map((rete) => (
                <Col
                  key={rete.slug}
                  tag="article"
                  size={{ xs: 12, sm: 6, lg: 4 }}
                  p="20px"
                >
                  <Div
                    h="150px"
                    bgImg={`/img/reti/${rete.id}.webp`}
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    bgPos="center"
                    m={{ b: "10px" }}
                  >
                    {/* <Image src={`/img/reti/${rete.id}.webp`} alt={"Logo rete"} className={css({height: "100%", width: "100%"})}/> */}
                  </Div>
                  <Text tag="h3" textSize="subheader" m={{ b: ".5rem" }}>
                    {rete.nome}
                  </Text>
                  {/* <span>Area geografica : {rete.area_geografica}</span> */}
                  <Text m={{ b: ".5rem" }}>
                    {rete.descrizione.substr(0, 160) + " ... "}
                  </Text>
                  {/* <a href={rete.sito_web} /> */}
                  <Link href="reti/[slug]" as={`reti/${rete.slug}`}>
                    <Anchor>
                      <Button>Scopri la rete</Button>
                    </Anchor>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}
