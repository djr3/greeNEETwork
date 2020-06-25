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
import { Masonry } from "components/Masonry";
// import { Image } from "components/Image";

// Helpers
import { defaultMediaQuery } from "core/constants";
const { xs, sm, md, lg, xl } = defaultMediaQuery;

export async function getStaticProps() {
  const reti = await (await directus.getItems("reti_territoriali")).data;

  return {
    props: { reti },
  };
}

export default function Reti({ reti }) {
  const [css] = useStyletron();
  return (
    <Page id="reti">
      <Container
      // className={css({ maxWidth: "calc(100vw - 200px" })}
      >
        <Div justify="center" m={{ b: "1.5rem" }}>
          <Breadcrumbs />
          <Div tag="hgroup" m={{ b: "1rem" }}>
            <Text textSize="display2" tag="h1" fontFamily="primary">
              Reti Territoriali
            </Text>
            <Text
              textSize="body"
              tag="h5"
              textWeight="400"
              textTransform="uppercase"
              style={{
                letterSpacing: "1px",
              }}
            >
              Reti locali, nazionali e internazionali attive nel Parco
              Metropolitano delle Colline di Napoli
            </Text>
          </Div>
        </Div>

        <Div
          className={css({
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto",
            gridGap: "1.25rem 1.25rem",
            gridAutoFlow: "dense",
            maxWidth: "100%",
            [xs]: { gridTemplateColumns: "1fr" },
            [sm]: { gridTemplateColumns: "1fr 1fr" },
            [md]: { gridTemplateColumns: "repeat(2, 1fr)" },
            [lg]: { gridTemplateColumns: "repeat(3, 1fr)" },
            [xl]: { gridTemplateColumns: "repeat(4, 1fr)" },
          })}
        >
          {reti.map((rete) => (
            <Div
              key={rete.slug}
              tag="article"
              p={{}}
              shadow={3}
              h="fit-content"
            >
              <Div
                h="150px"
                bgImg={`/img/reti/${rete.id}.webp`}
                bgSize="contain"
                bgRepeat="no-repeat"
                bgPos="center"
              >
                {/* <Image src={`/img/reti/${rete.id}.webp`} alt={"Logo rete"} className={css({height: "100%", width: "100%"})}/> */}
              </Div>
              <Div p=".75rem">
                <Text tag="h3" textSize="subheader" m={{ b: ".5rem" }}>
                  {rete.nome}
                </Text>
                {/* <span>Area geografica : {rete.area_geografica}</span> */}
                <Text m={{ b: ".5rem" }}>
                  {rete.descrizione.substr(0, 120) + " ... "}
                </Text>
                {/* <a href={rete.sito_web} /> */}
                <Link href="reti/[slug]" as={`reti/${rete.slug}`}>
                  <Anchor>
                    <Button
                      h="2rem"
                      p={{ x: "0.75rem" }}
                      textSize="caption"
                      // bg="teal"
                    >
                      Scopri la rete
                    </Button>
                  </Anchor>
                </Link>
              </Div>
            </Div>
          ))}
        </Div>
      </Container>
    </Page>
  );
}
