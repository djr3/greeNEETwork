// Core Components
import Image from "next/image";
import { directus } from "core/cli";
import { getImageHashes } from "core/utils";

// Page Layout
import Page from "containers/Main";

// Page Components
import Breadcrumbs from "components/Breadcrumbs";
import Card from "components/Card";
import Icon from "components/Icon";
import { DynamicMap } from "components/Map";
import { Grid, Text, Link as Anchor, Divider } from "@geist-ui/react";

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
      "luoghi.luogo.geo_json",
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
      <Grid.Container gap={2} justify="center">
        <Grid xs={22} sm={20} md={6} direction="column" alignItems="flex-start">
          <Image
            layout="intrinsic"
            alt={`Logo rete`}
            src={`/img/reti/${rete.id}.webp`}
            height="200"
            width="200"
            objectFit="contain"
          />
          <Breadcrumbs separator="/" withBorders />
          <Text h1 style={{ lineHeight: 1.125 }}>
            {rete.nome}
          </Text>
          <dl
            style={{
              backgroundColor: "#f7f7f7",
              width: "100%",
              padding: "1rem",
            }}
          >
            <dt style={{ fontWeight: 600 }}>Tipologia :</dt>
            <dd>{rete.tipologia}</dd>
            <br />

            <dt style={{ fontWeight: 600 }}>Area geografica :</dt>
            <dd>{rete.area_geografica}</dd>
            <br />

            <dt style={{ fontWeight: 600 }}>Sito web : </dt>
            <dd>
              <Anchor href={"/goto/" + rete.pagina_web} target="__blank">
                <Icon name="Globe" size={20} />
                {rete.pagina_web}
              </Anchor>
            </dd>
          </dl>
          <Text>{rete.descrizione}</Text>
        </Grid>

        <Grid xs={22} sm={20} md={14}>
          <div style={{ minHeight: "400px", width: "100%" }}>
            <DynamicMap places={rete.luoghi} />
          </div>
        </Grid>

        <Grid xs={22} sm={20} direction="column">
          <Text h3>Appartengono a questa rete :</Text>
          <Divider y={2} />
          <Grid.Container gap={2}>
            {rete.luoghi.map((luogo) => (
              <Grid key={luogo.id} xs={24} sm={12} lg={8} xl={6}>
                <Card type="place" data={luogo} />
              </Grid>
            ))}
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Page>
  );
}
