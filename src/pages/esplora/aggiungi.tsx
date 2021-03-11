// Core Components
import React, { useEffect, useState } from "react";
import { directus } from "core/cli";

// Page Layout
import Page from "containers/Main";
import {
  Grid,
  Input,
  Select,
  Note,
  Text,
  Textarea,
  Button,
  Link as Anchor,
} from "@geist-ui/react";

// Page Components
import Breadcrumbs from "components/Breadcrumbs";

export async function getStaticProps() {
  const { data: accessibilita } = await directus.getItems("accessibilita");
  const { data: servizi } = await directus.getItems("servizi");
  const { data: tipologie } = await directus.getItems("tipologie");
  return { props: { accessibilita, servizi, tipologie } };
}

export default function AddPlace({ accessibilita, servizi, tipologie }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [place, setPlace] = useState({
    nome: "",
    descrizione: "",
    indirizzo: "",
    telefono: "",
    email: "",
    pagina_web: "",
    pagina_facebook: "",
    pagina_instagram: "",
    accessibilita: "",
    servizi: [],
    tipologie: [],
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    k
  ) => {
    if (e.persist) e.persist();
    setPlace((prevState) => ({ ...prevState, [k]: e.target.value }));
  };

  const handleFilters = (value, key) => {
    setPlace((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleSubmit = (e) => {
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      console.log("State : ", place);
      fetch("/api/esplora/add", { method: "POST", body: JSON.stringify(place) })
        .then((r) => console.log("Response : ", r))
        .catch((e) => console.error(e));
    }
  }, [isSubmitted]);

  return (
    <Page id="newPlace">
      <Grid.Container gap={2} justify="center">
        <Grid xs={22} md={20} direction="column">
          <Breadcrumbs />
          <hgroup>
            <Text h1>Segnala un Luogo</Text>
            <Text
              h5
              style={{
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Entra a far parte del nostro network
            </Text>
          </hgroup>
          <p>
            Sei titolare o conosci una azienda, un ente che opera nell'area del
            Parco delle Colline di Napoli? Segnalacelo!
          </p>
        </Grid>
        {isSubmitted ? (
          <Grid xs={22} md={20} direction="column">
            <Note
              type="secondary"
              label={false}
              className=""
              small={false}
              filled={false}
            >
              <Text h4>Il tuo luogo è stato inviato con successo</Text>
              <Text>
                A breve verrà revisionato dal nostro staff. Se ritenuto congruo,
                verrà pubblicato e sarà visualizzabile da tutto il network
              </Text>
              <Anchor block href="/">
                Torna alla Home
              </Anchor>
            </Note>
          </Grid>
        ) : (
          <>
            <Grid xs={22} md={8} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Input
                  onChange={(e) => handleInput(e, "nome")}
                  placeholder="Nome luogo"
                  size="large"
                  width="100%"
                >
                  <Text h5>Denominazione</Text>
                </Input>
              </div>
            </Grid>
            <Grid xs={22} sm={11} md={6} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Text h5>Servizi</Text>
                <Select
                  size="small"
                  key="servizi"
                  multiple
                  placeholder="Servizi"
                  width="100%"
                  onChange={(val) => handleFilters(val, "servizi")}
                >
                  {servizi.map((filter) => (
                    <Select.Option key={filter.id} value={filter.id}>
                      {filter.nome}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            </Grid>
            <Grid xs={22} sm={11} md={6} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Text h5>Accessibilità</Text>
                <Select
                  size="medium"
                  key="accessibilita"
                  placeholder="Accessibilità"
                  width="100%"
                  onChange={(val) => handleFilters(val, "accessibilita")}
                >
                  {accessibilita.map((filter) => (
                    <Select.Option key={filter.id} value={filter.id}>
                      {filter.nome}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            </Grid>
            <Grid xs={22} md={6} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Text h5>Tipologia</Text>
                <Select
                  size="small"
                  key="tipologie"
                  multiple
                  placeholder="Tipologie"
                  width="100%"
                  onChange={(val) => handleFilters(val, "tipologie")}
                >
                  {tipologie.map((filter) => (
                    <Select.Option key={filter.id} value={filter.id}>
                      {filter.nome}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            </Grid>
            <Grid xs={22} md={8} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Input
                  onChange={(e) => handleInput(e, "indirizzo")}
                  placeholder="Viale delle Galassie 1, Napoli, NA"
                  size="large"
                  width="100%"
                >
                  <Text h5>Indirizzo</Text>
                </Input>
              </div>
            </Grid>
            <Grid xs={22} sm={11} md={6} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Input
                  onChange={(e) => handleInput(e, "telefono")}
                  placeholder="+39 123 456 789"
                  size="large"
                  width="100%"
                >
                  <Text h5>Telefono</Text>
                </Input>
              </div>
            </Grid>
            <Grid xs={22} sm={11} md={10} lg={5} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Input
                  onChange={(e) => handleInput(e, "email")}
                  placeholder="email@dominio.com"
                  type="email"
                  size="large"
                  width="100%"
                >
                  <Text h5>E-Mail</Text>
                </Input>
              </div>
            </Grid>
            <Grid xs={22} md={10} lg={5} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Input
                  onChange={(e) => handleInput(e, "pagina_web")}
                  placeholder="https://www.tuosito.it"
                  size="large"
                  width="100%"
                >
                  <Text h5>Pagina Web</Text>
                </Input>
              </div>
            </Grid>
            <Grid xs={22} sm={11} md={10} lg={5} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Input
                  onChange={(e) => handleInput(e, "pagina_facebook")}
                  placeholder="https://www.facebook.com/tuonome"
                  size="large"
                  width="100%"
                >
                  <Text h5>Pagina Facebook</Text>
                </Input>
              </div>
            </Grid>
            <Grid xs={22} sm={11} md={10} lg={5} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Input
                  onChange={(e) => handleInput(e, "pagina_instagram")}
                  placeholder="https://www.instagram.com/tuonome"
                  size="large"
                  width="100%"
                >
                  <Text h5>Pagina Instagram</Text>
                </Input>
              </div>
            </Grid>
            <Grid xs={22} md={20} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Text h5>Descrizione</Text>
                <Textarea
                  onChange={(e) => handleInput(e, "descrizione")}
                  placeholder="Descrizione"
                  width="100%"
                />
              </div>
            </Grid>
            <Grid xs={22} md={20} direction="column">
              <Button type="secondary-light" onClick={handleSubmit}>
                Invia
              </Button>
            </Grid>
          </>
        )}
      </Grid.Container>
    </Page>
  );
}
