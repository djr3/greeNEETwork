// Core Components
import { directus } from "core/cli";

// Page Layout &
import Page from "containers/Main";

// Page Components
import { Row, Col, Grid, Text } from "@geist-ui/react";
import Breadcrumbs from "components/Breadcrumbs";
import Card from "components/Card";

// Typings
import type { IPost } from "@types";

export async function getStaticProps() {
  const { data: posts } = await directus.getItems<IPost[]>("articoli", {
    filter: { status: { eq: "published" } },
  });

  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) },
  };
}

export default function Storie({ posts }) {
  return (
    <Page
      id="blog"
      metaTags={{
        title: "Storie | greeNEETwork",
        description: "Racconti dal Parco Metropolitano delle Colline di Napoli",
      }}
    >
      <Row justify="center">
        <Col span={20}>
          <Breadcrumbs />
          <hgroup>
            <Text h1>Storie</Text>
            <Text
              h5
              style={{
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Racconti dal Parco Metropolitano delle Colline di Napoli
            </Text>
          </hgroup>

          <Grid.Container gap={2}>
            {posts.map((post) => (
              <Grid key={post.id} xs={24} sm={12} lg={8} xl={6}>
                <Card type="post" data={post} />
              </Grid>
            ))}
          </Grid.Container>
        </Col>
      </Row>
    </Page>
  );
}
