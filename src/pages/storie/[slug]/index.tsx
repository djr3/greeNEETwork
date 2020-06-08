// Core Components
// import Head from 'next/head'
import { directus } from "core/cli";

// Page Layout
import Page from "containers/Main";
import { useStyletron } from "styletron-react";

// Page Components
import { Container, Row, Col, Div, Text, Icon } from "atomize";
import { Breadcrumbs } from "components/Breadcrumbs";
import ReactPlayer from "react-player";

export async function getStaticPaths() {
  const posts = await (
    await directus.getItems<{ slug }[]>("articoli", {
      filter: { status: { eq: "published" } },
    })
  ).data;

  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await (
    await directus.getItems("articoli", {
      filter: { slug: { eq: params.slug } },
    })
  ).data[0];

  return {
    props: { post },
  };
}

export default function Post({ post }) {
  const [css] = useStyletron();
  const { id, titolo, contenuto, video_pillola, ...rest } = post;

  return (
    <Page id={id} className={css({ overflowY: "auto", marginBottom: "100px" })}>
      <Container>
        <Row justify="center" textAlign="center">
          <Col size={10}>
            <Text
              tag="h1"
              textSize="h1"
              textWeight="600"
              align="center"
              m={{ x: "4rem", y: "1rem" }}
            >
              {titolo}
            </Text>
            <Div>
              <Icon name="Timestamp" size="16px" />
              <Text tag="span">
                Pubblicato il :{" "}
                {new Date(rest.created_on).toLocaleDateString("it", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </Div>
            <Breadcrumbs />
            <ReactPlayer url={video_pillola} width="100%" height="450px" />
          </Col>
        </Row>
        <Row justify="center" textAlign="center">
          <Col size={8}>
            <Div
              m={{ y: "1rem" }}
              dangerouslySetInnerHTML={{ __html: contenuto }}
            ></Div>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </Page>
  );
}
