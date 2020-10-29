// Core Components
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { directus } from "core/cli";
import { makeMenu, getImageHashes } from "core/utils";

// Types
import type { ILuogo } from "@types";

// Page Layout
import Page from "containers/Main";

// Page Components
// TODO : Images + SocialMenu + Address
import Card from "components/Card";
import Breadcrumbs from "components/Breadcrumbs";
import { Slider } from "components/Slider";
import { DynamicMap, getCoordinates } from "components/Map";
import {
  Tag,
  Text,
  // Image,
  Divider,
  Link as Anchor,
  Grid,
  Row,
  Col,
} from "@geist-ui/react";
import { SocialShare, SocialMenu } from "components/Social";

// Generate Static Pages
export async function getStaticPaths() {
  const { data: luoghi } = await directus.getItems<
    Pick<ILuogo, "id" | "slug">[]
  >("luoghi", { limit: 500, fields: ["id", "slug"] });

  const paths = luoghi.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch place
  const {
    data: [luogo],
  } = await directus.getItems<ILuogo[]>("luoghi", {
    filter: { slug: { eq: params.slug } },
    fields: [
      "*",
      "accessibilita.*",
      "galleria_immagini.directus_file.private_hash",
      "reti_territoriali.rete_territoriale.*",
      "servizi.servizio.*",
      "tipologie.tipologia.*",
    ],
  });

  // Extract coordinates and fetch street address
  const { latitude, longitude } = getCoordinates(luogo.geo_json);
  const address = await (
    await fetch(
      "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&accept-language=it-IT&zoom=18"
    )
  ).json();

  // Fetch places related by typology
  const { data: luoghi } = await directus.getItems<ILuogo[]>("luoghi", {
    fields: [
      "id",
      "slug",
      "nome",
      "descrizione",
      "galleria_immagini.directus_file.private_hash",
    ],
    filter: {
      id: { neq: luogo.id },
      "tipologie.tipologia.id": { eq: luogo.tipologie[0].tipologia.id },
    },
    limit: 3,
    sort: "?",
  });

  return {
    props: {
      luoghi: JSON.parse(
        JSON.stringify(
          luoghi.map((l) => ({
            ...l,
            galleria_immagini: getImageHashes(l),
          }))
        )
      ),
      luogo: JSON.parse(
        JSON.stringify({
          ...luogo,
          indirizzo: { address, latitude, longitude },
          galleria_immagini: getImageHashes(luogo),
        })
      ),
    },
  };
}

export default function Luogo({ luogo, luoghi }) {
  /**
   * Hooks
   */
  const router = useRouter();

  /**
   * Data Props Processing
   */
  const {
    id,
    nome,
    descrizione,
    contenuto,
    indirizzo,
    accessibilita,
    galleria_immagini,
    reti_territoriali,
    servizi,
    tipologie,
  } = luogo;

  /**
   * Utility functions
   */
  const hasContacts = ({
    email,
    telefono,
    pagina_web,
    pagina_facebook,
    pagina_instagram,
  }) => {
    return (
      email || telefono || pagina_web || pagina_facebook || pagina_instagram
    );
  };

  const socialMenu = makeMenu(luogo);

  return (
    <Page
      id={id}
      metaTags={{ title: nome + " | greeNEETwork", description: descrizione }}
    >
      <Row justify="center">
        <Col span={20}>
          <Grid.Container gap={3} justify="center">
            {/* <Grid xs={24} style={{ height: "auto" }}>
            </Grid> */}
            <Grid xs={24} md={18}>
              {galleria_immagini && (
                <Slider id={"slider_" + id} images={galleria_immagini} />
              )}
              <Divider y={4} />
              <Breadcrumbs separator="/" />
              <Text h1 style={{ margin: "1rem 0", lineHeight: 1.125 }}>
                {nome}
              </Text>
              <Text span>{indirizzo.address.display_name}</Text>
              <Anchor
                block
                icon
                // href={`https://www.google.com/maps/search/?&api=1&query=${indirizzo.latitude},${indirizzo.longitude}`}
                href={`https://www.google.com/maps/dir/?&api=1&query=${indirizzo.latitude},${indirizzo.longitude}`}
                target="_blank"
              >
                Indicazioni Stradali
              </Anchor>
              {/* </Link> */}
              <Divider y={4} />
              <div style={{ height: "350px", marginBlock: "1rem" }}>
                <DynamicMap places={[luogo]} selPlace={luogo} />
              </div>
              <Divider y={4} />
              <div>
                <Text h3>Descrizione</Text>
                <div dangerouslySetInnerHTML={{ __html: contenuto }} />
                {/* <Text>{contenuto.split("Tratto da:")[0]}</Text> */}
                {/* <Text>Tratto da : {contenuto.split("Tratto da:")[1]}</Text> */}
              </div>
            </Grid>
            <Grid xs={24} md={6}>
              <div
                style={{
                  marginBottom: "1rem",
                  width: "100%",
                }}
              >
                <SocialShare
                  url={process.env.VERCEL_URL + router.asPath}
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: 400,
                    fontSize: ".75rem",
                    textTransform: "uppercase",
                    letterSpacing: "4px",
                  }}
                >
                  Condividi sui social
                </Text>
              </div>

              <Divider y={2} />

              {accessibilita && (
                <>
                  <div
                    style={{
                      display: "block",
                      marginBottom: ".5rem",
                      padding: ".5rem",
                    }}
                  >
                    <Text h4>Accessibilità</Text>
                    {accessibilita.nome}
                  </div>
                  <Divider y={2} />
                </>
              )}
              {tipologie && (
                <>
                  <div
                    style={{
                      display: "block",
                      marginBottom: ".5rem",
                      padding: ".5rem",
                    }}
                  >
                    <Text h4>Tipologia</Text>
                    {tipologie.map(({ tipologia }) => (
                      <Tag
                        type="lite"
                        key={tipologia.id}
                        style={{
                          marginBlockEnd: ".25rem",
                          marginInlineEnd: ".25rem",
                        }}
                      >
                        {tipologia.nome}
                      </Tag>
                    ))}
                  </div>
                  <Divider y={2} />
                </>
              )}
              {servizi && (
                <>
                  <div
                    style={{
                      display: "block",
                      marginBottom: ".5rem",
                      padding: ".5rem",
                    }}
                  >
                    <Text h4>Servizi</Text>
                    {/* <ul style={{ marginLeft: "1rem" }}> */}
                    {servizi.map(({ servizio }) => (
                      // <li key={servizio.id}>{servizio.nome}</li>
                      <Tag
                        type="lite"
                        key={servizio.id}
                        style={{
                          marginInlineEnd: ".5rem",
                          marginBlockEnd: ".25rem",
                        }}
                      >
                        {servizio.nome}
                      </Tag>
                    ))}
                    {/* </ul> */}
                  </div>
                  <Divider y={2} />
                </>
              )}
              {hasContacts(luogo) && (
                <>
                  <div
                    style={{
                      display: "block",
                      marginBottom: ".5rem",
                      padding: ".5rem",
                    }}
                  >
                    <Text h4>Contatti</Text>
                    <SocialMenu
                      menu={socialMenu}
                      type="icons"
                      style={{ columns: 3 }}
                    />
                  </div>
                  <Divider y={2} />
                </>
              )}
              {reti_territoriali && reti_territoriali.length > 0 && (
                <div style={{ display: "block" }}>
                  <Text h5>Reti territoriali di appartenenza :</Text>

                  {reti_territoriali.map(({ rete_territoriale }) => (
                    <Link
                      key={rete_territoriale.slug}
                      href="/reti/[slug]"
                      as={`/reti/${rete_territoriale.slug}`}
                    >
                      <Anchor
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        <Image
                          src={`/img/reti/${rete_territoriale.id}.webp`}
                          alt={rete_territoriale.nome}
                          height={100}
                          width={160}
                        />
                        <Text h5>{rete_territoriale.nome}</Text>
                      </Anchor>
                    </Link>
                  ))}
                </div>
              )}
            </Grid>
            {luoghi && (
              <Grid xs={24}>
                <Divider y={2} />
                <Text h3>Luoghi collegati</Text>
                <Divider y={2} />
                <Grid.Container gap={2}>
                  {luoghi.map((l) => (
                    <Grid key={l.id} sm={12} lg={8}>
                      <Card type="place" data={l} />
                    </Grid>
                  ))}
                </Grid.Container>
              </Grid>
            )}
          </Grid.Container>
        </Col>
      </Row>
    </Page>
  );
}
