// Core Components
import React, { useEffect, useState } from "react";
import { directus } from "core/cli";

// Page Layout
import Page from "containers/Main";
import {
  // Select,
  Grid,
  Input,
  Note,
  Text,
  Textarea,
  Button,
  Link as Anchor,
} from "@geist-ui/react";

// Page Components
import Breadcrumbs from "components/Breadcrumbs";

export default function AddStory() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [articolo, setArticolo] = useState({
    titolo: "",
    video_pillola: "",
    descrizione: "",
    contenuto: "",
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    k
  ) => {
    if (e.persist) e.persist();
    setArticolo((prevState) => ({ ...prevState, [k]: e.target.value }));
  };

  const handleSubmit = (e) => {
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      console.log("State : ", articolo);
      fetch("/api/storie/new", {
        method: "POST",
        body: JSON.stringify(articolo),
      })
        .then((r) => console.log("Response : ", r))
        .catch((e) => console.error(e));
    }
  }, [isSubmitted]);

  return (
    <Page
      id="newStory"
      metaTags={{
        title: "Scrivi una Storia | greeNEETwork",
        description:
          "Raccontaci la storia di una realtà operante nel Parco Metropolitano delle Colline di Napoli",
      }}
    >
      <Grid.Container gap={2} justify="center">
        <Grid xs={22} md={20} direction="column">
          <Breadcrumbs />
          <hgroup>
            <Text h1>Scrivi una storia</Text>
            <Text
              h5
              style={{
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Raccontaci la storia di un luogo, le attività svolte sul
              territorio
            </Text>
          </hgroup>
          <p>
            Sei titolare o conosci una azienda, un ente che opera nell'area del
            Parco delle Colline di Napoli? Segnalacelo!
          </p>
        </Grid>
        {isSubmitted ? (
          <Grid xs={22} md={20} lg={18} direction="column">
            <Note
              type="secondary"
              label={false}
              className=""
              small={false}
              filled={false}
            >
              <Text h4>La tua storia è stata inviata con successo</Text>
              <Text>
                A breve verrà revisionata dal nostro staff. Se approvata, verrà
                pubblicata e sarà visualizzabile da tutto il network
              </Text>
              <Anchor block href="/">
                Torna alla Home
              </Anchor>
            </Note>
          </Grid>
        ) : (
          <>
            <Grid xs={22} md={10} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Input
                  onChange={(e) => handleInput(e, "titolo")}
                  size="large"
                  width="100%"
                >
                  <Text h5>Titolo</Text>
                </Input>
              </div>
            </Grid>

            <Grid xs={22} md={10} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Input
                  onChange={(e) => handleInput(e, "video_pillola")}
                  placeholder="https://youtube.com/abcdefgh"
                  size="large"
                  width="100%"
                  label="URL"
                >
                  <Text h5>Video Pillola</Text>
                </Input>
                <Text small i>
                  Se hai pubblicato un video che parla di questa realtà,
                  inserisci l'url del video su YouTube
                </Text>
              </div>
            </Grid>
            <Grid xs={22} md={20} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Text h5>Introduzione</Text>
                <Textarea
                  onChange={(e) => handleInput(e, "descrizione")}
                  placeholder="Introduzione"
                  width="100%"
                />
                <Text small i>
                  Inserisci una descrizione breve del contenuto di questo
                  articolo (max. 160 caratteri)
                </Text>
              </div>
            </Grid>
            <Grid xs={22} md={20} direction="column">
              <div style={{ marginBottom: "1rem" }}>
                <Text h5>Contenuto della Storia</Text>
                <Textarea
                  onChange={(e) => handleInput(e, "contenuto")}
                  placeholder="Lorem ipsum dolor sit amet numquam..."
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
