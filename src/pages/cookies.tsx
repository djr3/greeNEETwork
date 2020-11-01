// Core Components
import React from "react";

// Page Layout
import Page from "containers/Main";
import { Grid, Text, Collapse } from "@geist-ui/react";

// Page Components
import Breadcrumbs from "components/Breadcrumbs";

export default function Credits() {
  return (
    <Page
      id="credits"
      metaTags={{
        title: "Cookies | greeNEETwork",
        description: "Politica sui Cookie del sito greeNEETwork",
      }}
    >
      <Grid.Container justify="center">
        <Grid xs={22} md={20}>
          <Breadcrumbs />

          <Text h1>Politica sui Cookie</Text>
          <Text>
            I Cookie sono costituiti da porzioni di codice installate
            all'interno del browser che assistono il Titolare nell’erogazione
            del Servizio in base alle finalità descritte. Alcune delle finalità
            di installazione dei Cookie potrebbero, inoltre, necessitare del
            consenso dell'Utente.
          </Text>
          <Text>
            Quando l’installazione di Cookies avviene sulla base del consenso,
            tale consenso può essere revocato liberamente in ogni momento
            seguendo le istruzioni contenute in questo documento.
          </Text>

          <section style={{ marginBottom: "3rem" }}>
            <Text h2>Cookie tecnici di statistica aggregata</Text>
            <Collapse.Group>
              <Collapse title="Attività strettamente necessarie al funzionamento">
                <Text>
                  Questa Applicazione utilizza Cookie per salvare la sessione
                  dell'Utente e per svolgere altre attività strettamente
                  necessarie al funzionamento di questa Applicazione, ad esempio
                  in relazione alla distribuzione del traffico.
                </Text>
              </Collapse>
              <Collapse title="Attività di salvataggio delle preferenze, ottimizzazione e statistica">
                <Text>
                  Questa Applicazione utilizza Cookie per salvare le preferenze
                  di navigazione ed ottimizzare l'esperienza di navigazione
                  dell'Utente. Fra questi Cookie rientrano, ad esempio, quelli
                  per impostare la lingua e la valuta o per la gestione di
                  statistiche da parte del Titolare del sito.
                </Text>
              </Collapse>
            </Collapse.Group>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <Text h2>
              Altre tipologie di Cookie o strumenti terzi che potrebbero
              installarne
            </Text>
            <Text>
              Alcuni dei servizi elencati di seguito raccolgono statistiche in
              forma aggregata ed anonima e potrebbero non richiedere il consenso
              dell'Utente o potrebbero essere gestiti direttamente dal Titolare
              – a seconda di quanto descritto – senza l'ausilio di terzi.
            </Text>
            <Text>
              Qualora fra gli strumenti indicati in seguito fossero presenti
              servizi gestiti da terzi, questi potrebbero – in aggiunta a quanto
              specificato ed anche all’insaputa del Titolare – compiere attività
              di tracciamento dell’Utente. Per informazioni dettagliate in
              merito, si consiglia di consultare le privacy policy dei servizi
              elencati.
            </Text>
            <Collapse.Group>
              <Collapse title="Tag Manager">
                <Text>
                  Questo tipo di servizi è funzionale alla gestione
                  centralizzata dei tag o script utilizzati su questa
                  Applicazione.
                </Text>
                <Text>
                  L'uso di tali servizi comporta il fluire dei Dati dell'Utente
                  attraverso gli stessi e, se del caso, la loro ritenzione.
                </Text>
              </Collapse>
              <Collapse title="Hosting ed infrastruttura backend">
                <Text>
                  Questo tipo di servizi ha la funzione di ospitare Dati e file
                  che permettono a questa Applicazione di funzionare, ne
                  consentono la distribuzione e mettono a disposizione
                  un'infrastruttura pronta all'uso per erogare specifiche
                  funzionalità di questa Applicazione.
                </Text>
                <Text>
                  Alcuni di questi servizi funzionano attraverso server
                  dislocati geograficamente in luoghi differenti, rendendo
                  difficile la determinazione del luogo esatto in cui vengono
                  conservati i Dati Personali.
                </Text>
              </Collapse>
              <Collapse title="Interazione con social networks e piattaforme esterne">
                <Text>
                  Questo tipo di servizi permette di effettuare interazioni con
                  i social network, o con altre piattaforme esterne,
                  direttamente dalle pagine di questa Applicazione.
                </Text>
                <Text>
                  Le interazioni e le informazioni acquisite da questa
                  Applicazione sono in ogni caso soggette alle impostazioni
                  privacy dell’Utente relative ad ogni social network.
                </Text>
                <Text>
                  Questo tipo di servizio potrebbe comunque raccogliere dati sul
                  traffico per le pagine dove il servizio è installato, anche
                  quando gli Utenti non lo utilizzano.
                </Text>
                <Text>
                  Si raccomanda di disconnettersi dai rispettivi servizi per
                  assicurarsi che i dati elaborati su questa Applicazione non
                  vengano ricollegati al profilo dell'Utente.
                </Text>
              </Collapse>
              <Collapse title="Monitoraggio dell'infrastruttura">
                <Text>
                  Questo tipo di servizi permette a questa Applicazione di
                  monitorare l’utilizzo ed il comportamento di componenti della
                  stessa, per consentirne il miglioramento delle prestazioni e
                  delle funzionalità, la manutenzione o la risoluzione di
                  problemi.
                </Text>
                <Text>
                  I Dati Personali trattati dipendono dalle caratteristiche e
                  della modalità d’implementazione di questi servizi, che per
                  loro natura filtrano l’attività di questa Applicazione.
                </Text>
              </Collapse>
              <Collapse title="Statistica">
                <Text>
                  I servizi contenuti nella presente sezione permettono al
                  Titolare del Trattamento di monitorare e analizzare i dati di
                  traffico e servono a tener traccia del comportamento
                  dell’Utente.
                </Text>
                <Text h4>Google Analytics con IP anonimizzato</Text>
                <Text>
                  Google Analytics è un servizio di analisi web fornito da
                  Google Inc. (“Google”). Google utilizza i Dati Personali
                  raccolti allo scopo di tracciare ed esaminare l’utilizzo di
                  questa Applicazione, compilare report e condividerli con gli
                  altri servizi sviluppati da Google.
                  <br />
                  Google potrebbe utilizzare i Dati Personali per
                  contestualizzare e personalizzare gli annunci del proprio
                  network pubblicitario.
                  <br />
                  Questa integrazione di Google Analytics rende anonimo il tuo
                  indirizzo IP. L'anonimizzazione funziona abbreviando entro i
                  confini degli stati membri dell'Unione Europea o in altri
                  Paesi aderenti all'accordo sullo Spazio Economico Europeo
                  l'indirizzo IP degli Utenti. Solo in casi eccezionali,
                  l'indirizzo IP sarà inviato ai server di Google ed abbreviato
                  all'interno degli Stati Uniti.
                </Text>
                <Text>Dati Personali raccolti: Cookie e Dati di utilizzo.</Text>
                <Text>
                  Luogo del trattamento: Stati Uniti –{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>{" "}
                  –{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout?hl=it"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Opt Out
                  </a>
                  ; Irlanda –
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  . Soggetto aderente al Privacy Shield.
                </Text>
              </Collapse>
              <Collapse title="Visualizzazione di contenuti da piattaforme esterne">
                <Text>
                  Questo tipo di servizi permette di visualizzare contenuti
                  ospitati su piattaforme esterne direttamente dalle pagine di
                  questa Applicazione e di interagire con essi.
                </Text>
                <Text>
                  Nel caso in cui sia installato un servizio di questo tipo, è
                  possibile che, anche nel caso gli Utenti non utilizzino il
                  servizio, lo stesso raccolga dati di traffico relativi alle
                  pagine in cui è installato.
                </Text>
                <Text h4>Widget video Youtube</Text>
                <Text>
                  YouTube è un servizio di visualizzazione di contenuti video
                  gestito da Google Inc. che permette a questa Applicazione di
                  integrare tali contenuti all’interno delle proprie pagine.
                </Text>

                <Text>Dati Personali raccolti: Cookie e Dati di utilizzo.</Text>
                <Text>
                  Luogo del trattamento: Stati Uniti –{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  ; Irlanda –
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  . Soggetto aderente al Privacy Shield.
                </Text>
              </Collapse>
            </Collapse.Group>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <Text h2>
              Come posso esprimere il consenso all'installazione di Cookies
            </Text>
            <Text>
              In aggiunta a quanto indicato in questo documento, l'Utente può
              gestire le preferenze relative ai Cookie direttamente all'interno
              del proprio browser ed impedire – ad esempio – che terze parti
              possano installarne. Tramite le preferenze del browser è inoltre
              possibile eliminare i Cookie installati in passato, incluso il
              Cookie in cui venga eventualmente salvato il consenso
              all'installazione di Cookie da parte di questo sito. L'Utente può
              trovare informazioni su come gestire i Cookie con alcuni dei
              browser più diffusi ad esempio ai seguenti indirizzi:&nbsp;
              <a
                rel="noopener noreferrer nofollow"
                target="_blank"
                href="https://support.google.com/chrome/answer/95647?hl=it&amp;p=cpn_cookies"
              >
                Google Chrome
              </a>
              ,&nbsp;
              <a
                rel="noopener noreferrer nofollow"
                target="_blank"
                href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie"
              >
                Mozilla Firefox
              </a>
              ,&nbsp;
              <a
                rel="noopener noreferrer nofollow"
                target="_blank"
                href="https://support.apple.com/it-it/guide/safari/manage-cookies-and-website-data-sfri11471/"
              >
                Apple Safari
              </a>
              &nbsp; e&nbsp;
              <a
                rel="noopener noreferrer nofollow"
                target="_blank"
                href="http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies"
              >
                Microsoft Internet Explorer
              </a>
              .
            </Text>
            <Text>
              Con riferimento a Cookie installati da terze parti, l'Utente può
              inoltre gestire le proprie impostazioni e revocare il consenso
              visitando il relativo link di opt out (qualora disponibile),
              utilizzando gli strumenti descritti nella privacy policy della
              terza parte o contattando direttamente la stessa.
            </Text>
            <Text>
              Fermo restando quanto precede, l’Utente può avvalersi delle
              informazioni fornite da&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="http://www.youronlinechoices.eu/"
              >
                Your Online Choices
              </a>
              &nbsp; (UE),&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.networkadvertising.org/understanding-digital-advertising"
              >
                Network Advertising Initiative
              </a>
              &nbsp; (USA) e&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://www.aboutads.info/consumers/"
              >
                Digital Advertising Alliance
              </a>
              &nbsp; (USA),&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://youradchoices.ca/understanding-online-advertising/"
              >
                DAAC
              </a>
              &nbsp; (Canada),&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="http://www.ddai.info/optout"
              >
                DDAI
              </a>
              &nbsp; (Giappone) o altri servizi analoghi. Con questi servizi è
              possibile gestire le preferenze di tracciamento della maggior
              parte degli strumenti pubblicitari. Il Titolare, pertanto,
              consiglia agli Utenti di utilizzare tali risorse in aggiunta alle
              informazioni fornite dal presente documento.
            </Text>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <Text h2>Titolare del Trattamento dei Dati</Text>
            <Text>
              Agritettura2.0 - Salita Capodimonte 87 - 80131 - Napoli (IT)
            </Text>
            <Text>Indirizzo email del titolare : hello@agritettura.org</Text>

            <Text>
              Dal momento che l'installazione di Cookie e di altri sistemi di
              tracciamento operata da terze parti tramite i servizi utilizzati
              all'interno di questa Applicazione non può essere tecnicamente
              controllata dal Titolare, ogni riferimento specifico a Cookie e
              sistemi di tracciamento installati da terze parti è da
              considerarsi indicativo. Per ottenere informazioni complete,
              l’Utente è invitato a consultare la privacy policy degli eventuali
              servizi terzi elencati in questo documento.
            </Text>
          </section>
        </Grid>
      </Grid.Container>
    </Page>
  );
}
