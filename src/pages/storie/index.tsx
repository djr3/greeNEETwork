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
import ReactPlayer from "react-player";

export async function getStaticProps() {
  const posts = await (
    await directus.getItems("articoli", {
      filter: { status: { eq: "published" } },
    })
  ).data;

  return {
    props: { posts },
  };
}

export default function Storie(props) {
  const [css] = useStyletron();
  // const posts = JSON.parse(props.posts);
  const { posts } = props;
  return (
    <Page
      id="blog"
      className={css({
        maxHeight: "100%",
        overflowY: "auto",
      })}
    >
      <Container
      // className={css({ maxWidth: "calc(100vw - 200px)" })}
      >
        <Row justify="center" m={{ b: "1rem" }}>
          <Col
          // size={{ xs: 12, md: 10 }}
          >
            <Breadcrumbs />

            <Div tag="hgroup">
              <Text textSize="display2" tag="h1" fontFamily="primary">
                Storie
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
                Racconti dal Parco Metropolitano delle Colline di Napoli
              </Text>
            </Div>
          </Col>
        </Row>
        <Row>
          {posts.map((post) => (
            <Col key={post.id} size={{ xs: 12, sm: 6, lg: 4 }} tag="article">
              <Div m={{ b: "1rem" }} shadow={3}>
                <Div tag="header">
                  <ReactPlayer
                    url={post.video_pillola}
                    width="100%"
                    height="240px"
                  />
                </Div>
                <Div p={{ x: ".5rem", y: "1rem" }}>
                  <Text textSize="h5" tag="h3" m={{ b: ".5rem" }}>
                    {post.titolo}
                  </Text>
                  <Text m={{ b: ".5rem" }}>{post.descrizione}</Text>
                  <Link href="storie/[slug]" as={`storie/${post.slug}`}>
                    <Anchor>
                      <Button
                        h="2rem"
                        p={{ x: "0.75rem" }}
                        textSize="caption"
                        bg="teal"
                      >
                        Leggi la storia
                      </Button>
                    </Anchor>
                  </Link>
                </Div>
              </Div>
            </Col>
          ))}
        </Row>
      </Container>
    </Page>
  );
}
