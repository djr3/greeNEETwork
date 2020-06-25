// Core Components
import { directus } from "core/cli";

// Page Layout
import Page from "containers/Main";
import { useStyletron } from "styletron-react";

// Page Components
import { Container, Row, Col, Div, Text, Icon } from "atomize";
import { Breadcrumbs } from "components/Breadcrumbs";
import { SocialShare } from "components/Social";
import { RichText } from "components/RichText";
import ReactPlayer from "react-player";
import { PlacePreview } from "components/Map";

export async function getStaticPaths() {
  const posts = (
    await directus.getItems<{ slug }[]>("articoli", {
      filter: { status: { eq: "published" } },
      fields: ["*", "luoghi.*.*"],
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
  const post = (
    await directus.getItems("articoli", {
      filter: { slug: { eq: params.slug } },
      fields: ["*", "luoghi.luogo.*"],
    })
  ).data[0];

  return {
    props: { post },
  };
}

export default function Post({ post }) {
  const [css] = useStyletron();
  const {
    id,
    titolo,
    contenuto,
    created_on,
    modified_on,
    descrizione,
    slug,
    video_pillola,
    luoghi,
  } = post;
  // console.log("Rest : ", rest);
  return (
    <Page
      id={id}
      className={css({ overflowY: "visible", marginBottom: "4rem" })}
      //@ts-ignore
      metaTags={{ title: titolo, description: descrizione }}
    >
      {video_pillola && (
        <Container>
          <Row>
            <ReactPlayer url={video_pillola} width="100%" height="450px" />
          </Row>
        </Container>
      )}
      <Container className={css({ maxWidth: "30rem" })}>
        <Row align="flex-start">
          <Col size={{ xs: 12, md: 8, lg: 9 }}>
            <Div m={{ t: "4rem", b: "2rem" }} tag="header">
              <Breadcrumbs separator="/" />
              <Text
                textSize="h1"
                tag="h1"
                m={{ y: ".5rem" }}
                // className={css({ lineHeight: "1.125em !important" })}
              >
                {titolo}
              </Text>
              <Div d="flex" align="center">
                <Icon name="Timestamp" size="16px" m={{ r: ".5rem" }} />
                <Text
                  textSize="caption"
                  textWeight="400"
                  tag="h6"
                  d="inline"
                  className={css({
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginRight: "1rem",
                  })}
                >
                  Pubblicato il :&nbsp;
                  {new Date(created_on).toLocaleDateString("it", {
                    // weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>
                <br />
                <Text
                  textSize="caption"
                  textWeight="400"
                  tag="h6"
                  d="inline"
                  className={css({
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                  })}
                >
                  Ultima modifica :&nbsp;
                  {new Date(modified_on).toLocaleDateString("it", {
                    // weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>
              </Div>
            </Div>
            <Div>
              <RichText text={contenuto} />
            </Div>
          </Col>
          <Col
            size={{ xs: 12, md: 4, lg: 3 }}
            p="1rem"
            pos="sticky"
            top="2rem"
            tag="aside"
          >
            <Div m={{ t: "4rem", b: "1rem" }} w="100%">
              <SocialShare
                url={process.env.APP_URL + "/storie/" + slug}
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
            <Div>
              <Text>In questo articolo si parla di</Text>
              <ul className="luoghi_rel">
                {luoghi && luoghi.length > 0
                  ? luoghi.map(({ luogo }) => (
                      <li key={luogo.id}>
                        <PlacePreview place={luogo} />
                      </li>
                    ))
                  : null}
              </ul>
            </Div>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}
