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
          <Col size={{ xs: 12, sm: 10, lg: 12 }}>
            <Div tag="hgroup">
              <Text textSize="h1" tag="h1" fontFamily="primary">
                Reti Territoriali
              </Text>
              <Text textSize="h5" tag="h5">
                Reti locali, nazionali e internazionali attive nel Parco
                Metropolitano delle Colline di Napoli
              </Text>
            </Div>
            <Breadcrumbs />
          </Col>
        </Row>

        <Row justify="center">
          {reti.map((rete) => (
            <Col
              key={rete.slug}
              tag="article"
              size={{ xs: 12, sm: 10, md: 6, lg: 4 }}
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
              <h2>{rete.nome}</h2>
              {/* <span>Area geografica : {rete.area_geografica}</span> */}
              <Text>{rete.descrizione.substr(0, 160) + " ... "}</Text>
              <a href={rete.sito_web} />
              <Link href={"reti/" + rete.slug}>
                <Anchor>
                  <Button>Vedi la rete</Button>
                </Anchor>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Page>
  );
}
