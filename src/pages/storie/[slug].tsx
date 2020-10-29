// Core Components
import { directus } from "core/cli";
import { getImageHashes } from "core/utils";

// Page Layout
import Page from "containers/Main";

// Page Components
import Breadcrumbs from "components/Breadcrumbs";
import Card from "components/Card";
import Icon from "components/Icon";
import { Grid, Text, Divider } from "@geist-ui/react";
import { SocialShare } from "components/Social";
import { RichText } from "components/RichText";
import ReactPlayer from "react-player";

// Typings
import type { IPost } from "@types";

export async function getStaticPaths() {
  const { data: posts } = await directus.getItems<{ slug }[]>("articoli", {
    filter: { status: { eq: "published" } },
    fields: ["slug"],
  });

  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const {
    data: [post],
  } = await directus.getItems<IPost[]>("articoli", {
    filter: { slug: { eq: params.slug } },
    fields: [
      "*",
      "luoghi.luogo.id",
      "luoghi.luogo.nome",
      "luoghi.luogo.slug",
      "luoghi.luogo.descrizione",
      "luoghi.luogo.galleria_immagini.directus_file.private_hash",
    ],
  });

  const { data: posts } = await directus.getItems<IPost[]>("articoli", {
    filter: { id: { neq: post.id }, status: { eq: "published" } },
    fields: ["id", "slug", "titolo", "descrizione", "video_pillola"],
    limit: 3,
    sort: "?",
  });

  const luoghi = post.luoghi.map(({ luogo }) => ({
    ...luogo,
    galleria_immagini: getImageHashes(luogo),
  }));

  return { props: { post, posts, luoghi } };
}

export default function Post({ post, posts, luoghi }) {
  const {
    id,
    titolo,
    contenuto,
    created_on,
    modified_on,
    descrizione,
    slug,
    video_pillola,
  } = post;

  return (
    <Page id={id} metaTags={{ title: titolo, description: descrizione }}>
      {video_pillola && (
        <Grid.Container>
          <ReactPlayer
            url={video_pillola}
            controls={false}
            width="100%"
            height="61.8vh"
            config={{ youtube: { playerVars: { showinfo: 0, controls: 0 } } }}
          />
        </Grid.Container>
      )}

      <Grid.Container gap={2} justify="center">
        <Grid xs={22} md={14} lg={14}>
          <header style={{ marginTop: "4rem" }}>
            <Breadcrumbs separator="/" />
            <Text h1 style={{ margin: "1rem 0", lineHeight: 1.125 }}>
              {titolo}
            </Text>
            <div style={{ display: "flex", alignContent: "center" }}>
              <Icon name="Clock" size={16} style={{ marginRight: ".5rem" }} />
              <Text
                h6
                style={{
                  fontWeight: 400,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginRight: "1rem",
                  display: "inline",
                }}
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
                h6
                style={{
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  display: "inline",
                }}
              >
                Ultima modifica :&nbsp;
                {new Date(modified_on).toLocaleDateString("it", {
                  // weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </div>
          </header>
          <Divider y={4} />
          <div>
            <RichText text={contenuto} />
          </div>
        </Grid>
        <Grid xs={22} md={8} lg={6}>
          <div
            style={{ marginTop: "4rem", marginBottom: "1rem", width: "100%" }}
          >
            <SocialShare
              url={process.env.VERCEL_URL + "/storie/" + slug}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            />
            <Text
              h6
              style={{
                textAlign: "center",
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: ".25rem",
              }}
            >
              Condividi sui social
            </Text>
          </div>
          <Divider y={2} />
          <div>
            <Text h5>Questo post parla di : </Text>
            <Divider y={2} />
            <ul className="luoghi_rel">
              {luoghi && luoghi.length > 0
                ? luoghi.map((luogo) => (
                    <li key={luogo.id}>
                      <Card type="place" data={luogo} />
                    </li>
                  ))
                : null}
            </ul>
            <Divider y={2} />
          </div>
        </Grid>
        {posts && (
          <Grid xs={22} lg={20}>
            <Divider y={2} />
            <Text h3>Storie collegate</Text>
            <Divider y={2} />
            <Grid.Container gap={2}>
              {posts.map((p) => (
                <Grid key={p.id} sm={12} lg={8}>
                  <Card type="post" data={p} />
                </Grid>
              ))}
            </Grid.Container>
          </Grid>
        )}
      </Grid.Container>
    </Page>
  );
}
