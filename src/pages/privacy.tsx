// Core Components
import React from "react";
import Link from "next/link";

// Page Layout
import Page from "containers/Main";
import { Grid, Text, Link as Anchor } from "@geist-ui/react";

// Page Components
import Breadcrumbs from "components/Breadcrumbs";

export default function Privacy() {
  return (
    <Page
      id="privacy"
      metaTags={{
        title: "Privacy | greeNEETwork",
        description: "Informativa privacy greeNEETwork",
      }}
    >
      <Grid.Container justify="center">
        <Grid xs={22} md={20} direction="column">
          <Breadcrumbs />
          <Text h1>Informativa sulla Privacy</Text>
          <section>
            <Text h2>Proprietario e gestore dei dati</Text>
            <Text>
              Agritettura2.0 - Salita Capodimonte 87 - 80131 Napoli (IT)
            </Text>
            <Text>
              <strong>
                Indirizzo di posta elettronica del proprietario :{" "}
              </strong>
              hello@agritettura.org
            </Text>
          </section>
          <section>
            <Text h2>Tipi di Dati raccolti</Text>
            <Text>
              Tra i tipi di Dati Personali che questa Applicazione raccoglie, da
              sola o tramite terzi, ci sono:
            </Text>
            <ul>
              <li>Cookies</li>
              <li>Dati di utilizzo</li>
            </ul>
            <Text>
              I dettagli completi su ogni tipo di Dati Personali raccolti sono
              forniti nelle sezioni dedicate della presente informativa sulla
              privacy o da testi di spiegazione specifici visualizzati prima
              della raccolta dei dati.
            </Text>
            <Text>
              I Dati Personali possono essere forniti gratuitamente dall'Utente
              o, in caso di dati di utilizzo, raccolti automaticamente quando si
              utilizza questa Applicazione.
            </Text>
            <Text>
              Se non diversamente specificato, tutti i Dati richiesti dalla
              presente Applicazione sono obbligatori e la mancata conseti da
              parte di questi Dati potrebbe rendere impossibile per la presente
              Applicazione fornire i propri servizi. Nei casi in cui la presente
              Applicazione afferma specificamente che alcuni Dati non sono
              obbligatori, gli Utenti sono liberi di non comunicare questi Dati
              senza conseguenze sulla disponibilità o sul funzionamento del
              Servizio.
            </Text>
            <Text>
              Gli utenti che sono incerti su quali dati personali sono
              obbligatori sono invitati a contattare il Proprietario.
            </Text>
            <Text>
              Qualsiasi utilizzo dei Cookie – o di altri strumenti di
              tracciamento – da parte della presente Applicazione o dei
              proprietari di servizi di terze parti utilizzati dalla presente
              Applicazione ha lo scopo di fornire il Servizio richiesto
              dall'Utente, oltre a qualsiasi altro scopo descritto nel presente
              documento e nella{" "}
              <Link prefetch={false} href="/cookies">
                <Anchor>Politica sui Cookie</Anchor>
              </Link>
              , se disponibile.
            </Text>
            <Text>
              Gli utenti sono responsabili di eventuali Dati Personali di terze
              parti ottenuti, pubblicati o condivisi tramite questa Applicazione
              e confermano di avere il consenso della terza parte a fornire i
              Dati al Proprietario.
            </Text>
          </section>
          <section>
            <Text h2>Modalità e luogo di elaborazione dei dati</Text>
            <Text h3>Modalità di elaborazione</Text>
            <Text>
              Il Proprietario adotta le misure di sicurezza appropriate per
              impedire l'accesso non autorizzato, la divulgazione, la modifica o
              la distruzione non autorizzata dei Dati.
            </Text>
            <Text>
              L'elaborazione dei dati viene effettuata utilizzando computer e/o
              strumenti abilitati per l'IT, seguendo le procedure organizzative
              e le modalità strettamente correlate agli scopi indicati. Oltre al
              Titolare, in alcuni casi, i Dati possono essere accessibili a
              determinati tipi di persone in carica, coinvolte nel funzionamento
              della presente Applicazione (amministrazione, vendita, marketing,
              legale, amministrazione del sistema) o di parti esterne (come
              fornitori di servizi tecnici di terze parti, operatori di posta,
              fornitori di hosting, società IT, agenzie di comunicazione)
              nominati, se necessario, come Data Processor dal Proprietario.
              L'elenco aggiornato di queste parti può essere richiesto al
              Proprietario in qualsiasi momento.
            </Text>
            <Text h3>Base giuridica di elaborazione</Text>
            <Text>
              Il Titolare può elaborare i Dati Personali relativi agli Utenti se
              si verifica una delle seguenti condizioni:
            </Text>
            <ul>
              <li>
                <Text span>
                  Gli utenti hanno dato il loro consenso per uno o più scopi
                  specifici. Nota: In base ad alcune legislazioni, il
                  Proprietario può essere autorizzato a elaborare i Dati
                  Personali fino a quando l'Utente non si avamerà a tale
                  trattamento ("opt-out"), senza dover fare affidamento sul
                  consenso o su qualsiasi altra delle seguenti basi legali. Ciò,
                  tuttavia, non si applica, ogniqualvolta il trattamento dei
                  dati personali sia soggetto alla legge europea sulla
                  protezione dei dati
                </Text>
              </li>
              <li>
                <Text span>
                  la fornitura di dati è necessaria per l'esecuzione di un
                  accordo con l'Utente e/o per eventuali obblighi
                  precontrattuali
                </Text>
              </li>
              <li>
                <Text span>
                  il trattamento è necessario per il rispetto di un obbligo
                  giuridico a cui il Proprietario è soggetto
                </Text>
              </li>
              <li>
                <Text span>
                  il trattamento è correlato ad un compito che viene svolto
                  nell'interesse pubblico o nell'esercizio dell'autorità
                  ufficiale conferita al Proprietario
                </Text>
              </li>
              <li>
                <Text span>
                  trattamento è necessario ai fini degli interessi legittimi
                  perseguiti dal Titolare o da un terzo
                </Text>
              </li>
            </ul>
            <Text>
              In ogni caso, il Titolare contribuirà volentieri a chiarire la
              base giuridica specifica che si applica al trattamento, e in
              particolare se la fornitura di dati personali è un requisito
              legale o contrattuale, o un requisito necessario per svasarsi in
              un contratto.
            </Text>
            <Text h3>Luogo del trattamento</Text>
            <Text>
              I dati vengono elaborati presso gli uffici operativi del
              Proprietario e in qualsiasi altro luogo in cui si trovano le parti
              coinvolte nel trattamento.
            </Text>
            <Text>
              A seconda della posizione dell'Utente, i trasferimenti di dati
              possono comportare il trasferimento dei Dati dell'Utente in un
              paese diverso dal proprio. Per saperne di più sul luogo di
              trattamento di tali dati trasferiti, gli utenti possono
              controllare la sezione contenente i dettagli sul trattamento dei
              dati personali.
            </Text>
            <Text>
              Gli utenti hanno inoltre il diritto di conoscere la base giuridica
              dei trasferimenti di dati verso un paese al di fuori dell'Unione
              europea o a qualsiasi organizzazione internazionale disciplinata
              dal diritto internazionale pubblico o istituito da due o più
              paesi, come l'ONU, e sulle misure di sicurezza adottate dal
              Proprietario per salvaguardare i loro dati.
            </Text>
            <Text>
              Se tale trasferimento ha luogo, gli utenti possono saperne di più
              controllando le sezioni pertinenti di questo documento o
              informarsi con il Proprietario utilizzando le informazioni fornite
              nella sezione di contatto.
            </Text>
            <Text h3>Tempo di conservazione</Text>
            <Text>
              I dati personali devono essere trattati e conservati per tutto il
              tempo richiesto dallo scopo per cui sono stati raccolti.
            </Text>

            <Text>Quindi:</Text>
            <ul>
              <li>
                <Text span>
                  I dati personali raccolti per scopi relativi all'esecuzione di
                  un contratto tra il Titolare e l'Utente devono essere
                  conservati fino a quando tale contratto non sia stato
                  pienamente eseguito.
                </Text>
              </li>
              <li>
                <Text span>
                  I dati personali raccolti ai fini dei legittimi interessi del
                  Titolare sono conservati per tutto il tempo necessario per
                  adempiere a tali scopi. Gli utenti possono trovare
                  informazioni specifiche riguardanti gli interessi legittimi
                  perseguiti dal Titolare all'interno delle sezioni pertinenti
                  del presente documento o contattando il Proprietario.
                </Text>
              </li>
            </ul>
            <Text>
              Il Titolare può essere autorizzato a conservare i Dati Personali
              per un periodo più lungo ogni volta che l'Utente ha dato il
              consenso a tale trattamento, purché tale consenso non venga
              ritirato. Inoltre, il Titolare può essere obbligato a conservare i
              Dati Personali per un periodo più lungo quando necessario per
              l'esecuzione di un obbligo legale o su ordine di un'autorità.
            </Text>
            <Text>
              Una volta che il periodo di conservazione scade, i dati personali
              vengono eliminati. Pertanto, il diritto di accesso, il diritto
              alla cancellazione, il diritto alla rettifica e il diritto alla
              portabilità dei dati non possono essere applicati dopo la scadenza
              del periodo di conservazione.
            </Text>
          </section>
          <section>
            <Text h2>Finalità del trattamento Dati</Text>
            <Text>
              I Dati relativi all'Utente vengono raccolti per consentire al
              Proprietario di fornire i suoi Servizi, nonché per i seguenti
              scopi: Analytics.
            </Text>
            <Text>
              Gli utenti possono trovare ulteriori informazioni dettagliate su
              tali scopi di trattamento e sui dati personali specifici
              utilizzati per ogni scopo nelle rispettive sezioni del presente
              documento.
            </Text>
          </section>
          <section>
            <Text h2>
              Informazioni dettagliate sul trattamento dei Dati personali
            </Text>
            <Text>
              I dati personali vengono raccolti per i seguenti scopi e
              utilizzando i seguenti servizi:
            </Text>
            <Text></Text>
            <Text></Text>
          </section>
          <section>
            <Text h2>Diritti dell'Utente</Text>
            <Text>
              Gli utenti possono esercitare determinati diritti relativi ai loro
              dati trattati dal Proprietario. In particolare, gli utenti hanno
              il diritto di effettuare le seguenti operazioni:
            </Text>
            <ul>
              <li>
                <Text b>Ritirare il loro consenso in qualsiasi momento.</Text>
                <Text>
                  Gli utenti hanno il diritto di revocare il consenso dove hanno
                  precedentemente dato il loro consenso al trattamento dei loro
                  dati personali.
                </Text>
              </li>
              <li>
                <Text b>Opporsi all'elaborazione dei dati.</Text>
                <Text>
                  Gli utenti hanno il diritto di obiezioni al trattamento dei
                  loro dati se il trattamento viene effettuato su base giuridica
                  diversa dal consenso. Ulteriori dettagli sono forniti nella
                  sezione dedicata qui sotto.
                </Text>
              </li>
              <li>
                <Text b>Accedere ai propri dati.</Text>
                <Text>
                  Gli utenti hanno il diritto di sapere se i dati sono in fase
                  di elaborazione da parte del Proprietario, ottenere
                  informazioni su alcuni aspetti del trattamento e ottenere una
                  copia dei dati in fase di trattamento.
                </Text>
              </li>
              <li>
                <Text b>Verificare e cercare la rettifica.</Text>
                <Text>
                  Gli utenti hanno il diritto di verificare l'accuratezza dei
                  loro dati e chiedere che siano aggiornati o corretti.
                </Text>
              </li>
              <li>
                <Text b>Limitare l'elaborazione dei relativi dati.</Text>
                <Text>
                  Gli utenti hanno il diritto, in determinate circostanze, di
                  limitare il trattamento dei propri Dati. In questo caso, il
                  Proprietario non elamenterà i propri Dati per scopi diversi
                  dall'archiviazione.
                </Text>
              </li>
              <li>
                <Text b>Rimuovere i propri dati personali</Text>
                <Text>
                  Gli utenti hanno il diritto, in determinate circostanze, di
                  ottenere la cancellazione dei propri dati dal Proprietario.
                </Text>
              </li>
              <li>
                <Text b>
                  Ricevere i propri dati e/o trasferirli ad altro controller
                </Text>
                <Text>
                  Gli utenti hanno il diritto di ricevere i propri Dati in un
                  formato strutturato, comunemente usato e leggibile dalla
                  macchina e, se tecnicamente fattibile, di trasmetterlo a un
                  altro controller senza alcun ostacolo. Questa disposizione è
                  applicabile a condizione che i Dati siano trattati con mezzi
                  automatizzati e che il trattamento si basa sul consenso
                  dell'Utente, su un contratto di cui l'Utente fa parte o su
                  obblighi preconditi.
                </Text>
              </li>
              <li>
                <Text b>Presentare un reclamo</Text>
                <Text>
                  Gli utenti hanno il diritto di richiedere un reclamo dinanzi
                  alla propria autorità competente per la protezione dei dati.
                </Text>
              </li>
            </ul>
            <Text h3>Dettagli sull'opposizione al trattamento</Text>
            <Text>
              Qualora i dati personali vengano trattati per un interesse
              pubblico, nell'esercizio di un'autorità ufficiale conferita al
              Titolare o ai fini dei legittimi interessi perseguiti dal
              Titolare, gli Utenti possono obiezione a tale trattamento fornendo
              un terreno relativo alla loro particolare situazione per
              giustificare l'obiezione.
            </Text>
            <Text>
              Gli utenti devono sapere che, tuttavia, se i loro dati personali
              vengono trattati per scopi di marketing diretto, possono obiersi a
              tale trattamento in qualsiasi momento senza fornire alcuna
              giustificazione. Per sapere se il Proprietario sta elaborando i
              Dati Personali per scopi di marketing diretto, gli Utenti possono
              fare riferimento alle sezioni pertinenti di questo documento.
            </Text>
            <Text h3>Come esercitare questi diritti</Text>
            <Text>
              Qualsiasi richiesta di esercizio dei diritti utente può essere
              indirizzata al Proprietario attraverso i dettagli di contatto
              forniti in questo documento. Queste richieste possono essere
              esercitate gratuitamente e saranno indirizzate dal Proprietario il
              prima possibile e sempre entro un mese.
            </Text>
          </section>
          <section>
            <Text h2>
              Ulteriori informazioni sulla raccolta e l'elaborazione dei Dati
            </Text>
            <Text h3>Azioni legali</Text>
            <Text>
              I Dati Personali dell'Utente possono essere utilizzati per scopi
              legali dal Titolare in tribunale o nelle fasi che portano a
              possibili azioni legali derivanti da un uso improprio della
              presente Applicazione o dei Servizi correlati. L'Utente dichiara
              di essere a conoscenza del fatto che il Proprietario potrebbe
              essere tenuto a rivelare i dati personali su richiesta delle
              autorità pubbliche.
            </Text>
            <Text h3>
              Ulteriori informazioni sui dati personali dell'utente
            </Text>
            <Text>
              Oltre alle informazioni contenute nella presente Informativa sulla
              privacy, la presente Applicazione può fornire all'Utente
              informazioni aggiuntive e contestuali relative a particolari
              Servizi o alla raccolta e all'elaborazione dei Dati Personali su
              richiesta.
            </Text>
            <Text h3>Registri di sistema e manutenzione</Text>
            <Text>
              Ai fini del funzionamento e della manutenzione, questa
              Applicazione e tutti i servizi di terze parti possono raccogliere
              file che registrano l'interazione con questa Applicazione
              (registri di sistema) utilizzare altri dati personali (come
              l'indirizzo IP) per questo scopo.
            </Text>
            <Text h3>Informazioni non contenute in questa Informativa</Text>
            <Text>
              Ulteriori dettagli relativi alla raccolta o al trattamento dei
              Dati Personali possono essere richiesti al Titolare in qualsiasi
              momento. Si prega di consultare le informazioni di contatto
              all'inizio di questo documento.
            </Text>
            <Text h3>Modalità di gestione delle richieste "Do Not Track"</Text>
            <Text>
              Questa applicazione non supporta le richieste "Do Not Track". Per
              determinare se uno qualsiasi dei servizi di terze parti che
              utilizza onorano le richieste "Do Not Track", si prega di leggere
              le loro politiche sulla privacy.
            </Text>
            <Text h3>Modifiche alla presente informativa sulla privacy</Text>
            <Text>
              Il Titolare si riserva il diritto di apportare modifiche alla
              presente informativa sulla privacy in qualsiasi momento, fornendo
              un avviso ai suoi Utenti su questa pagina ed eventualmente
              all'interno della presente Applicazione e/o - per quanto
              tecnicamente e giuridicamente fattibile - inviando un avviso agli
              Utenti tramite qualsiasi informazione di contatto disponibile al
              Titolare. Si consiglia vivamente di controllare spesso questa
              pagina, riferendosi alla data dell'ultima modifica elencata in
              basso.
            </Text>
            <Text>
              Qualora le modifiche influenzino le attività di trattamento svolte
              sulla base del consenso dell'Utente, il Titolare raccoglie il
              nuovo consenso dell'Utente, ove richiesto.
            </Text>
            <Text h3>Definizioni e riferimenti giuridici</Text>
            <Text h4>Dati personali (o dati)</Text>
            <Text>
              Qualsiasi informazione che direttamente, indirettamente o in
              relazione ad altre informazioni, compreso un numero di
              identificazione personale, consente l'identificazione o
              l'identificazione di una persona naturale.
            </Text>
            <Text h4>Dati di utilizzo</Text>
            <Text>
              Informazioni raccolte automaticamente tramite questa Applicazione
              (o servizi di terze parti impiegati in questa Applicazione), che
              possono includere: gli indirizzi IP o i nomi di dominio dei
              computer utilizzati dagli utenti che utilizzano questa
              applicazione, gli indirizzi URI (Uniform Resource Identifier),
              l'ora della richiesta, il metodo utilizzato per inviare la
              richiesta al server, la dimensione del file ricevuto in risposta,
              il codice numerico che indica lo stato della risposta del server
              (esito positivo, errore, ecc.), il paese di origine, le
              caratteristiche del browser e del sistema operativo utilizzato
              dall'Utente, i vari dettagli di tempo per visita (ad esempio, il
              tempo trascorso su ogni pagina all'interno dell'applicazione) e i
              dettagli sul percorso seguito all'interno dell'applicazione con
              particolare riferimento alla sequenza e altri parametri sul
              sistema operativo del dispositivo e/o sull'ambiente IT
              dell'utente.
            </Text>
            <Text h4>Utente</Text>
            <Text>
              La persona che utilizza questa Applicazione che, se non
              diversamente specificato, coincide con l'Oggetto dati.
            </Text>
            <Text h4>Oggetto dei dati</Text>
            <Text>
              La persona naturale a cui si riferiscono i Dati Personali.
            </Text>
            <Text h4>Processore dei dati (o Supervisore dati)</Text>
            <Text>
              La persona naturale o giuridica, l'autorità pubblica, l'agenzia o
              un altro organismo che elabora i Dati Personali per conto del
              Controllore, come descritto nella presente informativa sulla
              privacy.
            </Text>
            <Text h4>Controller dati (o proprietario)</Text>
            <Text>
              La persona naturale o giuridica, l'autorità pubblica, l'agenzia o
              un altro organismo che, da solo o congiuntamente con altri,
              determina gli scopi e i mezzi del trattamento dei dati personali,
              comprese le misure di sicurezza relative al funzionamento e
              all'uso della presente Applicazione. Il controller di dati, se non
              diversamente specificato, è il proprietario di questa
              applicazione.
            </Text>
            <Text h4>Questa applicazione</Text>
            <Text>
              I mezzi con cui i Dati Personali dell'Utente vengono raccolti ed
              elaborati.
            </Text>
            <Text h4>Servizio</Text>
            <Text>
              Il servizio fornito da questa Applicazione come descritto nei
              termini relativi (se disponibili) e in questo sito/applicazione.
            </Text>
            <Text h4>Unione Europea (o UE)</Text>
            <Text>
              Se non diversamente specificato, tutti i riferimenti fatti
              all'interno di questo documento all'Unione europea comprendono
              tutti gli attuali Stati membri dell'Unione europea e dello Stato
              economico europeo.
            </Text>
            <Text h4>Cookies</Text>
            <Text>
              Piccoli set di dati memorizzati nel dispositivo dell'Utente.
            </Text>
            <Text h4>Informazioni Legali</Text>
            <Text>
              La presente informativa sulla privacy è stata preparata sulla base
              di disposizioni di più legislazioni, tra cui Art. 13/14 of
              Regulation (EU) 2016/679 (General Data Protection Regulation).
            </Text>
            <Text>
              La presente informativa sulla privacy si riferisce esclusivamente
              alla presente Applicazione, se non diversamente indicata
              all'interno del presente documento.
            </Text>
            <Text>Ultimo aggiornamento: 1 Novembre 2020</Text>
          </section>
        </Grid>
      </Grid.Container>
    </Page>
  );
}
