// Core Components
// import Head from "next/head";
import { directus } from "core/cli";
import { getImageHashes } from "core/utils";

// Page Layout
import Page from "containers/Main";

// Page Components
import Breadcrumbs from "components/Breadcrumbs";
import Card from "components/Card";
import Icon from "components/Icon";
import { Grid, Image, Text, Link as Anchor, Divider } from "@geist-ui/react";

// Generate static pages
export async function getStaticPaths() {
  const { data: reti } = await directus.getItems<{ slug }[]>(
    "reti_territoriali"
  );

  const paths = reti.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const {
    data: [rete],
  } = await directus.getItems<{ luoghi }[]>("reti_territoriali", {
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

  return {
    props: {
      rete: {
        ...rete,
        luoghi: rete.luoghi.map(({ luogo }) => ({
          ...luogo,
          galleria_immagini: getImageHashes(luogo),
        })),
      },
    },
  };
}

export default function Rete({ rete }) {
  return (
    <Page
      id={"rete_ " + rete.id}
      metaTags={{
        title: rete.nome + " | greeNEETwork",
        description: rete.descrizione,
      }}
    >
      <Grid.Container gap={3} justify="center">
        <Grid xs={22} sm={6}>
          <Image
            alt={`Logo rete`}
            src={`/img/reti/${rete.id}.webp`}
            style={{ maxHeight: "280px", width: "auto" }}
          />
        </Grid>
        <Grid xs={22} sm={14}>
          <Breadcrumbs separator="/" withBorders />
          <Text h1 style={{ lineHeight: 1.125 }}>
            {rete.nome}
          </Text>
          <Text>{rete.descrizione}</Text>
        </Grid>
        <Grid xs={22} sm={20}>
          <pre>
            Tipologia : {rete.tipologia}
            <br />
            Area geografica : {rete.area_geografica}
            <br />
            <Anchor href={"/goto/" + rete.pagina_web} target="__blank">
              <Icon name="Globe" size={20} />
              Sito web
            </Anchor>
          </pre>
        </Grid>

        <Grid xs={22} sm={20}>
          <Text h3>Appartengono a questa rete :</Text>
          <Divider y={2} />
          <Grid.Container gap={2}>
            {rete.luoghi.map((luogo) => (
              <Grid
                key={luogo.id}
                sm={12}
                lg={8}
                // component="article"
                // span={{ xs: 12, md: 6, lg: 4 }}
              >
                <Card type="place" data={luogo} />
              </Grid>
            ))}
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Page>
  );
}
