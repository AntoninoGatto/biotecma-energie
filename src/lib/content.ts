export type AccordionSection = {
  slug: string;
  title: string;
  intro: string;
  documenti: string;
  inviare: string;
  foto: string;
  aiuto: string;
  fonti?: string[];
};

export type ImpiantoService = {
  slug: string;
  title: string;
  aiuto: string;
  valutiamo: string;
  foto: string;
  linkExtra?: { label: string; href: string };
};

export type FormField = {
  label: string;
  name: string;
  multiline?: boolean;
};

export type RequestModule = {
  slug: string;
  title: string;
  category: "documenti" | "impianti";
  fields: FormField[];
  allegati: string;
};

export const homePillars = [
  {
    title: "Abitazioni e condomìni",
    text: "Realizziamo e adeguiamo impianti elettrici, quadri, protezioni, prese e illuminazione. Interveniamo su abitazioni, garage e parti comuni e cerchiamo la causa dei guasti prima di definire il lavoro.",
  },
  {
    title: "Attività commerciali e industrie",
    text: "Valutiamo quadri, linee di alimentazione, illuminazione e manutenzione programmata. Per le imprese organizziamo il sopralluogo tenendo conto di accessi, orari e possibili fermi.",
  },
  {
    title: "Documenti per l'immobile",
    text: "Ti serve una dichiarazione per un immobile, un affitto o una pratica comunale? Indica l'anno presunto dell'impianto, i lavori eseguiti e i documenti disponibili. Ti aiutiamo a capire quali verifiche occorrono.",
  },
  {
    title: "Energia e nuovi carichi",
    text: "Per fotovoltaico, accumulo e ricarica partiamo da potenza disponibile, protezioni e compatibilità del quadro. Definiamo interventi e documenti sulla base delle condizioni riscontrate.",
  },
] as const;

export const presentation = {
  title: "Impianti, manutenzione e documenti",
  body: "Operiamo a Vigevano e in Lomellina nel settore degli impianti tecnologici civili, commerciali e industriali. Ci occupiamo di installazioni e adeguamenti elettrici, ricerca guasti, manutenzione e valutazione della documentazione tecnica. Dal primo contatto raccogliamo le informazioni utili per definire i lavori e organizzare il sopralluogo.",
  audience:
    "Privati e condomìni, proprietari e inquilini, CAF e patronati, agenzie immobiliari, negozi e uffici, laboratori e industrie. Per le pratiche immobiliari e di idoneità alloggiativa esaminiamo le dichiarazioni disponibili e verifichiamo il percorso tecnico applicabile.",
  howTo:
    "Scegli il percorso che descrive la tua esigenza, compila la scheda e prepara le foto. Per concordare il sopralluogo contattaci al 347 229 5125.",
};

export const dicoDiri = {
  title: "Quale dichiarazione serve?",
  intro:
    "Per individuare il percorso servono la data di realizzazione dell'impianto, gli interventi successivi e le dichiarazioni già disponibili.",
  dico: {
    title: "DiCo · Dichiarazione di conformità",
    text: "La rilascia l'impresa installatrice abilitata al termine dei lavori svolti e dopo le verifiche previste. Conserva la dichiarazione con il progetto, la relazione sui materiali e gli altri allegati applicabili. In un rifacimento parziale la DiCo riguarda le opere eseguite e indica la compatibilità con le parti preesistenti.",
  },
  diri: {
    title: "DiRi · Dichiarazione di rispondenza",
    text: "Se la DiCo manca o è irreperibile, la DiRi si può valutare per gli impianti eseguiti prima del 27 marzo 2008. Servono sopralluogo e accertamenti. Firma un professionista iscritto all'albo con almeno cinque anni di esercizio nel settore. Fuori dai casi dell'articolo 5, comma 2, può firmare anche chi svolge da almeno cinque anni il ruolo di responsabile tecnico di un'impresa abilitata nello specifico settore.",
  },
  missing: {
    title: "Se manca il documento",
    text: "Per lavori dal 27 marzo 2008 cerca una copia presso l'impresa esecutrice, il proprietario o l'amministratore. Se l'impianto è stato modificato più volte, raccogli fatture, schemi e dichiarazioni indicando le date e le parti interessate.",
  },
  fonte: "D.M. 37/2008, art. 7",
};

export const accordionSections: AccordionSection[] = [
  {
    slug: "idoneita-alloggiativa",
    title: "Idoneità alloggiativa",
    intro:
      "Prima domanda a Vigevano: dichiarazioni gas ed elettrico, firmate e timbrate secondo la modulistica, con copia dell'iscrizione alla Camera di Commercio. Per il gas serve anche la dichiarazione sul rispetto della scadenza del tubo di collegamento ai fornelli. Il Comune rilascia l'attestazione; per rinnovi, immobili senza gas e altri Comuni verifica la procedura applicabile.",
    documenti:
      "Domanda e allegati comunali, documenti personali e di soggiorno richiesti, titolo di disponibilità registrato se previsto, planimetria catastale, scheda asseverata e rapporti aeroilluminanti, bollette, libretto caldaia o documenti sui fumi se applicabili, bolli e ricevuta dei diritti. Usa l'elenco comunale per i casi particolari.",
    inviare:
      "Comune e scadenza, proprietario o affittuario, referente e recapito CAF, dati dell'alloggio, dichiarazioni e allegati già disponibili, anno degli impianti, tipo di cottura e riscaldamento.",
    foto: "Salvavita e quadro chiuso, boiler o caldaia e targhetta visibile, piano a induzione oppure rubinetto gas e collegamento visibile. Se il tubo in gomma reca una scadenza leggibile senza muoverlo, fotografala.",
    aiuto:
      "Esame dei documenti, sopralluogo elettrico, valutazione delle dichiarazioni e degli interventi necessari. Per gas e asseverazione si verifica chi possiede i requisiti per l'incarico.",
    fonti: ["Comune di Vigevano"],
  },
  {
    slug: "compravendita-immobiliare",
    title: "Compravendita immobiliare",
    intro:
      "Il notaio definisce i documenti del rogito. Le dichiarazioni degli impianti disponibili sono utili per descrivere lo stato dell'immobile e gli accordi tra le parti. La loro assenza non impedisce, di per sé, il rogito.",
    documenti:
      "Preparare per il notaio: dati delle parti, provenienza, visura e planimetria, titoli edilizi e pratiche, agibilità se disponibile o pertinente, APE quando dovuto, eventuali dati condominiali, ipoteche e vincoli. Il notaio indica gli allegati per il caso concreto.",
    inviare:
      "Indirizzo e unità, data prevista del rogito, elenco impianti e modifiche, DiCo/DiRi con allegati, schemi, fatture che datano le opere, eventuale richiesta scritta del notaio o del tecnico.",
    foto: "Quadro chiuso e contatore, locali interessati, caldaia e targhetta visibile, apparecchi e collegamenti gas visibili se pertinenti, eventuali punti modificati o anomalie visibili.",
    aiuto:
      "Esame di quali parti risultano documentate, sopralluogo, relazione tecnica se concordata e preventivo per adeguamenti. DiCo per i lavori eseguiti e valutazione DiRi nei soli casi ammessi.",
    fonti: [
      "Consiglio Nazionale del Notariato",
      "Notariato, dichiarazioni degli impianti",
    ],
  },
  {
    slug: "affitti-e-consegna",
    title: "Affitti e consegna dell'immobile",
    intro:
      "Il locatore prepara il contratto e verifica gli adempimenti di registrazione. Quando dovuto, mette a disposizione e consegna l'APE. Per i nuovi contratti soggetti a registrazione si verifica la clausola di ricezione e l'obbligo di allegazione, con l'eccezione per la locazione di singole unità immobiliari.",
    documenti:
      "Dati delle parti e catastali, contratto, APE quando dovuto, ricevuta RLI ove prevista, inventario, letture e verbale di consegna se utili. Raccogliere le dichiarazioni impiantistiche esistenti e i libretti pertinenti.",
    inviare:
      "Indirizzo, referente proprietario e accesso, data di consegna, uso abitativo o commerciale, anno e lavori sugli impianti, DiCo/DiRi e allegati disponibili, ultime manutenzioni e guasti riferiti.",
    foto: "Quadro chiuso, protezioni visibili dall'esterno, contatori e letture se pertinenti, boiler o caldaia e targhetta visibile, foto dei punti segnalati.",
    aiuto:
      "Sopralluogo e valutazione degli impianti documentati, individuazione delle carenze, preventivo per lavori e documentazione relativa alle opere svolte.",
    fonti: ["Agenzia delle Entrate, modello RLI", "D.Lgs. 192/2005, art. 6"],
  },
  {
    slug: "manutenzioni-e-adeguamenti",
    title: "Manutenzioni e adeguamenti",
    intro:
      "La manutenzione ordinaria è documentata con rapporti e registrazioni pertinenti. Per trasformazione, ampliamento o rifacimento si verifica l'applicazione del D.M. 37/2008 e l'eventuale progetto. In caso di rifacimento parziale la DiCo copre le opere eseguite.",
    documenti:
      "Libretto e manuali, precedenti rapporti, dichiarazioni e progetti esistenti; per impianti termici verifica regole regionali, libretto, controlli di efficienza e catasto impianti. Frequenze secondo impianto, istruzioni e disciplina applicabile.",
    inviare:
      "Guasto e da quando si verifica, storia degli interventi, ultima manutenzione, marca e modello, orari e accessi; specifica se vuoi sostituzione, nuovo circuito o revisione del quadro.",
    foto: "Foto esterne di quadro, dispositivo e targhetta accessibile; panoramica della zona interessata ed eventuali messaggi di errore visibili.",
    aiuto:
      "Ricerca guasti, manutenzione, interventi programmati, report e preventivo per adeguamenti; documentazione dei nuovi lavori quando prevista.",
    fonti: ["D.M. 37/2008", "CURIT Lombardia"],
  },
  {
    slug: "negozi-uffici",
    title: "Negozi, uffici e attività commerciali",
    intro:
      "Gli obblighi dipendono dall'attività, dalla presenza di lavoratori e dai locali. Verifica con SUAP e professionisti le pratiche applicabili all'apertura o al subentro, inclusa la prevenzione incendi per le attività soggette.",
    documenti:
      "Titolo dei locali e pratiche SUAP pertinenti, progetti e DiCo, documentazione rischio elettrico se applicabile, verbali di terra e ricevute pertinenti, piano e registro antincendio ove dovuti, SCIA e rinnovi per attività soggette, rapporti su luci di emergenza e impianti pertinenti.",
    inviare:
      "Attività e destinazione dei locali, orari, data di apertura, potenza, planimetria, elenco utenze, dichiarazioni, verbali e ultime scadenze. Per ristorazione indica anche presenza di gas, apparecchi e cucina.",
    foto: "Quadri chiusi, contatore, illuminazione e lampade di emergenza, targhette visibili delle utenze, apparecchi e collegamenti gas accessibili.",
    aiuto:
      "Quadri, linee, illuminazione e manutenzione elettrica, esame documentale e supporto per individuare tecnici qualificati o organismi abilitati.",
    fonti: [
      "Vigili del Fuoco, Decreto controlli",
      "Vigili del Fuoco, attività soggette e SCIA",
    ],
  },
  {
    slug: "industrie-laboratori",
    title: "Industrie, laboratori e capannoni",
    intro:
      "Per i luoghi di lavoro si applicano gli obblighi pertinenti di valutazione del rischio elettrico, manutenzione e controlli. Le verifiche DPR 462/2001, se dovute, sono affidate ad ASL, ARPA o organismo abilitato. Verifica separatamente incendi, ATEX e impianti speciali se presenti. Per gli impianti di terra soggetti, la periodicità è in genere di cinque anni e scende a due per cantieri, locali medici e ambienti a maggior rischio in caso di incendio.",
    documenti:
      "Schemi, progetti, dichiarazioni, parte pertinente della valutazione dei rischi, registro controlli e rapporti, pratiche di terra/CIVA e verbali, documenti su scariche atmosferiche o ATEX ove applicabili, fascicolo antincendio, istruzioni macchine e documentazione dei confini tra impianto fisso e macchinari.",
    inviare:
      "Sito e reparti, tensione e potenza, quadro generale e sottosistemi, referente tecnico, fermate consentite, vincoli di accesso, tipologia di attività, ultimi verbali e scadenze; condividi solo gli estratti pertinenti.",
    foto: "Panoramiche autorizzate dei reparti, targhette e quadri chiusi, lampade di emergenza e punti interessati. Le immagini dei locali riservati seguono le regole del sito produttivo.",
    aiuto:
      "Diagnosi e manutenzione elettrica, pianificazione del fermo, adeguamenti, report e supporto alla preparazione delle verifiche. Gli atti riservati sono affidati ai soggetti competenti.",
    fonti: [
      "D.Lgs. 81/2008",
      "INAIL, controlli elettrici",
      "INAIL, denuncia e comunicazioni DPR 462/2001",
    ],
  },
];

export const cafContent = {
  title: "Idoneità alloggiativa",
  subtitle: "Messaggi pronti per lo sportello e guida essenziale in inglese.",
  sportello:
    "Verifica il Comune competente, la scadenza, se si tratta di prima domanda o rinnovo e quali allegati impiantistici sono richiesti. Chiedi alla famiglia se sono già disponibili le dichiarazioni. Se occorre un sopralluogo, consegna la scheda rapida e indica il recapito del referente CAF, così possiamo chiedere eventuali integrazioni.",
  famiglia:
    "Chiedi al proprietario i documenti degli impianti e indica come accedere all'alloggio. Per la prima valutazione invia la scheda tecnica e le foto accessibili. I documenti di identità e di soggiorno seguono il canale previsto per la pratica comunale.",
  english: {
    title: "Housing suitability",
    text: "For a first application in Vigevano, check the city's checklist for electrical and gas declarations. Ask your landlord for existing documents. Tell us the address, your deadline and what paperwork you have. The Municipality issues the housing suitability certificate. Biotecma Energie can assess the technical documents and arrange an inspection.",
  },
  fonte: "Comune di Vigevano",
};

export const energiaService = {
  title: "Fotovoltaico, accumulo e ricarica",
  intro:
    "La valutazione parte dal quadro elettrico, dai consumi e dai nuovi carichi previsti.",
  fv: {
    title: "Fotovoltaico e accumulo",
    text: "Raccogliamo le informazioni sull'impianto esistente, sulle abitudini di consumo e sugli spazi disponibili. Esaminiamo il quadro, le protezioni e le esigenze di integrazione. In base al sopralluogo definiamo la parte elettrica dell'intervento e gli eventuali passaggi con i professionisti e i soggetti competenti.",
  },
  ricarica: {
    title: "Ricarica per veicoli elettrici",
    text: "Valutiamo la potenza disponibile, la posizione del posto auto e il percorso della linea. Per condomìni e aziende chiediamo anche chi gestisce le parti comuni o l'area di parcheggio e se sono previsti nuovi punti di ricarica.",
  },
  inviare:
    "Indirizzo, destinazione dell'immobile, potenza in kW se nota, foto esterna del quadro chiuso e pianta o foto della zona interessata da un punto accessibile. Per un impianto già esistente invia le dichiarazioni e gli schemi disponibili. Evita di salire sul tetto per scattare foto.",
};

export const impiantoServices: ImpiantoService[] = [
  {
    slug: "nuovi-impianti-elettrici",
    title: "Nuovi impianti elettrici",
    aiuto:
      "Per una nuova costruzione, un ampliamento o una ristrutturazione, partiamo dall'uso dei locali e dalle utenze previste. Valutiamo quadri, circuiti, punti luce, prese, comandi e predisposizioni per rete, automazione e altri impianti. Concordiamo sopralluogo, ambito e fasi di lavoro.",
    valutiamo:
      "Una planimetria quotata o uno schizzo aiuta a definire la disposizione. Segnala cucina, pompe di calore, climatizzazione, ricarica o altre utenze rilevanti. Il progetto e la documentazione dell'intervento seguono i requisiti applicabili.",
    foto: "Planimetria con destinazioni e punti desiderati, foto dei locali e del quadro chiuso esistente, se presente.",
  },
  {
    slug: "illuminazione-led-casa",
    title: "Illuminazione LED per la casa",
    aiuto:
      "Progettiamo l'illuminazione a partire da come vivi ogni stanza. Valutiamo luce diffusa, punti di lettura e lavoro, illuminazione sottopensile e scenari dimmerabili, in base alle predisposizioni e agli apparecchi compatibili.",
    valutiamo:
      "Segnala se desideri luce calda o neutra, comandi esistenti da mantenere e zone dove evitare abbagliamento o riflessi.",
    foto: "Panoramiche dei locali di giorno, foto dei punti luce e comandi a parete, misure indicative e altezza dei soffitti.",
  },
  {
    slug: "illuminazione-led-negozi",
    title: "Illuminazione LED per negozi e uffici",
    aiuto:
      "Valutiamo l'illuminazione per vetrine, espositori, banconi e postazioni di lavoro. Possiamo proporre zone indipendenti e apparecchi scelti per resa cromatica, comfort visivo e facilità di manutenzione.",
    valutiamo:
      "Indica gli orari di apertura e le finestre di intervento. Se il progetto riguarda anche luci di emergenza, separa le esigenze di illuminazione ordinaria e di sicurezza.",
    foto: "Vetrina, aree vendita, bancone, soffitto e apparecchi esistenti. Aggiungi pianta e misure, se disponibili.",
  },
  {
    slug: "led-esterni",
    title: "LED per giardini, terrazze e dehors",
    aiuto:
      "Definiamo percorsi, ingressi, gradini, pergole e tavoli da illuminare. Scegliamo la distribuzione della luce in funzione dell'uso, delle condizioni esterne e dei punti di alimentazione disponibili.",
    valutiamo:
      "Per un dehors o per parti comuni, indica chi gestisce lo spazio e quali vincoli o autorizzazioni sono già noti. Valutiamo anche temporizzazioni e sensori in base all'uso.",
    foto: "Panoramiche degli spazi, percorsi e gradini, apparecchi esistenti, punti di alimentazione visibili dall'esterno.",
  },
  {
    slug: "vimar-plana",
    title: "Vimar Plana e diffusione sonora",
    aiuto:
      "Valutiamo la sostituzione di prese, interruttori, pulsanti e placche con componenti Vimar Plana. Il sopralluogo verifica scatole, supporti, cablaggio e funzioni per definire cosa può essere sostituito e quali opere servono.",
    valutiamo:
      "Per la sonorizzazione di ambienti o utenze, possiamo valutare una soluzione separata con sorgenti, diffusori, zone e comandi adatti. Indica se ti interessa musica, annunci, oppure un segnale acustico legato a una specifica utenza.",
    foto: "Foto frontali di placche e comandi senza smontaggio, panoramiche degli ambienti e dei punti desiderati per i diffusori.",
    linkExtra: {
      label: "Vimar · Catalogo della serie Plana",
      href: "https://www.vimar.com/it/it/catalog/product/index/series/plana",
    },
  },
  {
    slug: "controllo-consumi",
    title: "Controllo consumi e monitoraggio remoto",
    aiuto:
      "Possiamo valutare la misura dei consumi generali o di circuiti dedicati, la visualizzazione dei dati e le notifiche sui carichi. Per l'accesso remoto si definiscono con il cliente rete, utenze autorizzate e disponibilità dei dati.",
    valutiamo:
      "Indica se l'obiettivo è capire i consumi, confrontare fasce orarie, monitorare una macchina o ricevere avvisi. L'eventuale gestione dei carichi si valuta separatamente con priorità e limiti di esercizio.",
    foto: "Quadro chiuso, display accessibili, elenco utenze e schermate o estratti dei consumi con identificativi non necessari oscurati.",
  },
  {
    slug: "videosorveglianza",
    title: "Videosorveglianza",
    aiuto:
      "Valutiamo inquadrature, luce diurna e notturna, rete e alimentazione per proteggere accessi e spazi pertinenti. Concordiamo visualizzazione, registrazione e accesso remoto in base al contesto.",
    valutiamo:
      "Per l'uso domestico delimita l'area di esclusiva pertinenza. In condominio o nei luoghi di lavoro occorre verificare le regole e gli adempimenti applicabili prima di installare. Il cliente indica chi gestirà accessi, registrazioni e cartelli dove previsti.",
    foto: "Schizzo delle zone, foto del proprio accesso e punti di montaggio ipotizzati. Evita persone, targhe e interni di terzi.",
    linkExtra: {
      label: "Garante Privacy · FAQ sulla videosorveglianza",
      href: "https://www.garanteprivacy.it/temi/videosorveglianza",
    },
  },
  {
    slug: "videocitofoni-abitazioni",
    title: "Videocitofoni per abitazioni",
    aiuto:
      "Valutiamo la sostituzione del citofono o l'installazione di un sistema video con posto esterno e monitor interni. Possiamo esaminare apertura di cancello e portone, più ingressi e gestione da smartphone se compatibile.",
    valutiamo:
      "Marca e modello esistenti, percorsi e distanze indicativi aiutano a capire se si possono riutilizzare i collegamenti.",
    foto: "Foto frontale di pulsantiera, monitor e cancello, senza aprire dispositivi. Oscura nome e indirizzo se non utili alla foto.",
  },
  {
    slug: "videocitofoni-condominiali",
    title: "Videocitofoni condominiali",
    aiuto:
      "Con l'amministratore rileviamo scale, ingressi, numero di unità, postazioni e aperture. Valutiamo compatibilità della rete esistente, lavori nelle parti comuni e modalità di accesso agli appartamenti.",
    valutiamo:
      "Per preventivo e organizzazione servono il referente autorizzato, le esigenze delle unità e le eventuali decisioni già adottate dal condominio.",
    foto: "Pulsantiere, ingressi, portineria se presente e dispositivi rappresentativi. Oscura cognomi sulle targhette e chiedi l'autorizzazione per le aree comuni.",
  },
];

export const requestHowTo = {
  title: "Come inviare la richiesta",
  steps: [
    {
      title: "Scegli il percorso e compila la scheda",
      text: 'Indica nome, recapito, indirizzo, ruolo e impianto interessato. Descrivi la richiesta, la scadenza e i lavori già eseguiti. Inserisci il referente CAF, notaio, agenzia o responsabile tecnico quando pertinente. Se un dato manca, scrivi "non so".',
    },
    {
      title: "Prepara documenti e foto",
      text: "Raccogli le dichiarazioni disponibili con allegati e seleziona le foto richieste dalla scheda. Fotografa solo punti accessibili e autorizzati. Lascia chiusi quadri e pannelli e non muovere tubi o apparecchi. Se un dettaglio è inaccessibile, segnalalo per il sopralluogo.",
    },
    {
      title: "Leggi l'autorizzazione e invia",
      text: "L'autorizzazione riguarda l'esame preliminare dei materiali per rispondere alla richiesta e preparare un eventuale preventivo. Incarico, lavori e costi si concordano a parte. Invia i soli dati pertinenti e chiedi l'informativa privacy prima di trasmettere copie integrali. Salva il PDF e allegalo in WhatsApp insieme alle foto.",
    },
  ],
};

const commonFields: FormField[] = [
  { label: "Nome / azienda e recapito telefonico o email", name: "contatto" },
  {
    label: "Comune, indirizzo, unità o reparto e ruolo del richiedente",
    name: "indirizzo",
  },
];

const noteField: FormField = {
  label: "Note, scadenza e disponibilità per il sopralluogo",
  name: "note",
  multiline: true,
};

export const requestModules: RequestModule[] = [
  {
    slug: "idoneita-alloggiativa",
    title: "Idoneità alloggiativa",
    category: "documenti",
    fields: [
      ...commonFields,
      {
        label: "Proprietario o affittuario, prima domanda o rinnovo",
        name: "ruolo",
      },
      { label: "CAF: nome e sede", name: "caf" },
      { label: "CAF: responsabile e telefono", name: "caf_ref" },
      {
        label: "Comune richiedente e termine per integrazioni",
        name: "comune_termine",
      },
      {
        label: "Tipo di cottura, tubo gas, boiler o caldaia",
        name: "impianti_termici",
      },
      {
        label:
          "DiCo/DiRi per elettrico e gas, dichiarazione tubo e iscrizione CCIAA disponibili",
        name: "documenti",
        multiline: true,
      },
      noteField,
    ],
    allegati:
      "Comune e scadenza, proprietario o affittuario, referente e recapito CAF, dati dell'alloggio, dichiarazioni e allegati già disponibili, anno degli impianti, tipo di cottura e riscaldamento. Salvavita e quadro chiuso, boiler o caldaia e targhetta visibile, piano a induzione oppure rubinetto gas e collegamento visibile. Se il tubo in gomma reca una scadenza leggibile senza muoverlo, fotografala.",
  },
  {
    slug: "compravendita-immobiliare",
    title: "Compravendita immobiliare",
    category: "documenti",
    fields: [
      ...commonFields,
      {
        label: "Ruolo nella vendita e data prevista del rogito",
        name: "ruolo_rogito",
      },
      { label: "Notaio o agenzia e recapito", name: "notaio" },
      { label: "Impianti interessati e modifiche note", name: "impianti" },
      { label: "Richiesta specifica del notaio", name: "richiesta_notaio" },
      {
        label: "Documenti e allegati disponibili",
        name: "documenti",
        multiline: true,
      },
      { label: "Accesso, occupazione e orari", name: "accesso" },
      noteField,
    ],
    allegati:
      "Indirizzo e unità, data prevista del rogito, elenco impianti e modifiche, DiCo/DiRi con allegati, schemi, fatture che datano le opere, eventuale richiesta scritta del notaio o del tecnico. Quadro chiuso e contatore, locali interessati, caldaia e targhetta visibile, apparecchi e collegamenti gas visibili se pertinenti, eventuali punti modificati o anomalie visibili.",
  },
  {
    slug: "affitti-e-consegna",
    title: "Affitti e consegna dell'immobile",
    category: "documenti",
    fields: [
      ...commonFields,
      { label: "Locatore o conduttore, tipo di locazione", name: "locazione" },
      {
        label: "Data di consegna e disponibilità delle chiavi",
        name: "consegna",
      },
      { label: "Guasti o interventi da valutare", name: "guasti" },
      { label: "Libretto e ultima manutenzione", name: "manutenzione" },
      {
        label: "Dichiarazioni e allegati disponibili",
        name: "documenti",
        multiline: true,
      },
      { label: "Referente per accesso e urgenza", name: "referente" },
      noteField,
    ],
    allegati:
      "Indirizzo, referente proprietario e accesso, data di consegna, uso abitativo o commerciale, anno e lavori sugli impianti, DiCo/DiRi e allegati disponibili, ultime manutenzioni e guasti riferiti. Quadro chiuso, protezioni visibili dall'esterno, contatori e letture se pertinenti, boiler o caldaia e targhetta visibile, foto dei punti segnalati.",
  },
  {
    slug: "manutenzioni-e-adeguamenti",
    title: "Manutenzioni e adeguamenti",
    category: "documenti",
    fields: [
      ...commonFields,
      { label: "Impianto, marca e modello", name: "impianto" },
      { label: "Guasto, frequenza e data di comparsa", name: "guasto" },
      {
        label: "Intervento richiesto e parti interessate",
        name: "intervento",
      },
      { label: "Ultimo rapporto e lavori precedenti", name: "storico" },
      { label: "Permessi o orari di fermo", name: "fermo" },
      {
        label: "Manuali, targhette, schemi o dichiarazioni presenti",
        name: "documenti",
        multiline: true,
      },
      noteField,
    ],
    allegati:
      "Guasto e da quando si verifica, storia degli interventi, ultima manutenzione, marca e modello, orari e accessi; specifica se vuoi sostituzione, nuovo circuito o revisione del quadro. Foto esterne di quadro, dispositivo e targhetta accessibile; panoramica della zona interessata ed eventuali messaggi di errore visibili.",
  },
  {
    slug: "negozi-uffici",
    title: "Negozi, uffici e attività commerciali",
    category: "documenti",
    fields: [
      ...commonFields,
      { label: "Tipo di attività, apertura o subentro", name: "attivita" },
      {
        label: "Numero locali, utenze, potenza e gas",
        name: "utenze",
      },
      { label: "Orari e finestre di lavoro", name: "orari" },
      {
        label: "Verbali e scadenze per terra o emergenza",
        name: "verbali",
      },
      {
        label: "Pratiche SUAP, antincendio e referenti",
        name: "pratiche",
      },
      { label: "Impianto e intervento richiesti", name: "intervento" },
      noteField,
    ],
    allegati:
      "Attività e destinazione dei locali, orari, data di apertura, potenza, planimetria, elenco utenze, dichiarazioni, verbali e ultime scadenze. Per ristorazione indica anche presenza di gas, apparecchi e cucina. Quadri chiusi, contatore, illuminazione e lampade di emergenza, targhette visibili delle utenze, apparecchi e collegamenti gas accessibili.",
  },
  {
    slug: "industrie-laboratori",
    title: "Industrie, laboratori e capannoni",
    category: "documenti",
    fields: [
      ...commonFields,
      {
        label: "Reparti, tipo di attività e referente tecnico",
        name: "reparti",
      },
      {
        label: "Potenza, tensione e numero di quadri",
        name: "potenza",
      },
      {
        label: "Fermo disponibile e accessi autorizzati",
        name: "fermo",
      },
      {
        label: "Ultimi rapporti, terra/CIVA e scadenze",
        name: "rapporti",
      },
      {
        label: "Zone speciali e antincendio, se pertinenti",
        name: "zone",
      },
      {
        label: "Schemi, DiCo, verbali e anomalie riscontrate",
        name: "documenti",
        multiline: true,
      },
      noteField,
    ],
    allegati:
      "Sito e reparti, tensione e potenza, quadro generale e sottosistemi, referente tecnico, fermate consentite, vincoli di accesso, tipologia di attività, ultimi verbali e scadenze; condividi solo gli estratti pertinenti. Panoramiche autorizzate dei reparti, targhette e quadri chiusi, lampade di emergenza e punti interessati.",
  },
  {
    slug: "dico-diri",
    title: "Richiesta DiCo o DiRi",
    category: "documenti",
    fields: [
      ...commonFields,
      { label: "Documento richiesto e motivo", name: "documento" },
      { label: "Tipo di impianto e data presunta", name: "impianto_data" },
      { label: "Impresa esecutrice e lavori per data", name: "impresa" },
      {
        label: "Dichiarazioni disponibili e parti coperte",
        name: "dichiarazioni",
        multiline: true,
      },
      {
        label: "Dati noti: potenza, destinazione e numero quadri",
        name: "dati",
      },
      { label: "Ente richiedente e scadenza", name: "ente" },
      noteField,
    ],
    allegati:
      "Dichiarazioni e allegati, fatture datate, schema o progetto, eventuale richiesta scritta. Quadro chiuso, contatore, apparecchi e zone modificate pertinenti.",
  },
  {
    slug: "fotovoltaico-accumulo-ricarica",
    title: "Fotovoltaico, accumulo e ricarica",
    category: "impianti",
    fields: [
      ...commonFields,
      {
        label: "Fotovoltaico, accumulo, ricarica o più interventi",
        name: "tipo",
      },
      {
        label: "Potenza disponibile e consumi, se noti",
        name: "potenza",
      },
      {
        label: "Sistema esistente e componenti principali",
        name: "sistema",
      },
      {
        label: "Spazio disponibile e distanza dal quadro",
        name: "spazio",
      },
      {
        label: "Posti auto, potenza ricarica e orari d'uso",
        name: "ricarica",
      },
      { label: "Parti comuni, vincoli e referente", name: "vincoli" },
      noteField,
    ],
    allegati:
      "Schemi e dichiarazioni, potenza disponibile e consumi indicativi. Quadro chiuso e zona di installazione da terra. Per ricarica, posto auto e percorso possibile.",
  },
  {
    slug: "nuovi-impianti-elettrici",
    title: "Nuovi impianti elettrici",
    category: "impianti",
    fields: [
      ...commonFields,
      {
        label: "Tipo di immobile, superficie e numero di locali",
        name: "immobile",
      },
      {
        label: "Nuova costruzione, ampliamento o ristrutturazione",
        name: "tipo_lavoro",
      },
      { label: "Fase del cantiere e data prevista", name: "fase" },
      {
        label: "Utenze e potenza disponibile, se nota",
        name: "utenze",
      },
      {
        label: "Punti luce, prese, rete e predisposizioni desiderate",
        name: "punti",
        multiline: true,
      },
      {
        label: "Progetto, planimetria e referente del cantiere",
        name: "progetto",
      },
      noteField,
    ],
    allegati:
      "Planimetria con destinazioni e punti desiderati, foto dei locali e del quadro chiuso esistente, se presente. Segnala cucina, pompe di calore, climatizzazione, ricarica o altre utenze rilevanti.",
  },
  {
    slug: "illuminazione-led-casa",
    title: "Illuminazione LED per la casa",
    category: "impianti",
    fields: [
      ...commonFields,
      { label: "Locali, misure e altezza indicativa", name: "locali" },
      { label: "Uso principale di ogni ambiente", name: "uso" },
      {
        label: "Punti luce da mantenere o sostituire",
        name: "punti",
      },
      {
        label: "Luce calda o neutra, dimmer e scenari desiderati",
        name: "preferenze",
      },
      {
        label: "Vincoli: controsoffitto, finiture o accesso",
        name: "vincoli",
      },
      {
        label: "Finestra di intervento e budget indicativo",
        name: "finestra",
      },
      noteField,
    ],
    allegati:
      "Panoramiche dei locali di giorno, foto dei punti luce e comandi a parete, misure indicative e altezza dei soffitti.",
  },
  {
    slug: "illuminazione-led-negozi",
    title: "Illuminazione LED per negozi e uffici",
    category: "impianti",
    fields: [
      ...commonFields,
      {
        label: "Attività, superficie e zone da illuminare",
        name: "zone",
      },
      { label: "Orari e finestre per i lavori", name: "orari" },
      {
        label: "Vetrina, espositori, bancone o scrivanie",
        name: "aree",
      },
      {
        label: "Apparecchi esistenti, quantità e potenza nota",
        name: "apparecchi",
      },
      {
        label: "Effetto desiderato, dimmer o programmazione",
        name: "effetto",
      },
      {
        label: "Illuminazione di emergenza interessata e vincoli",
        name: "emergenza",
      },
      noteField,
    ],
    allegati:
      "Vetrina, aree vendita, bancone, soffitto e apparecchi esistenti. Aggiungi pianta e misure, se disponibili.",
  },
  {
    slug: "led-esterni",
    title: "LED per giardini, terrazze e dehors",
    category: "impianti",
    fields: [
      ...commonFields,
      {
        label: "Giardino privato, terrazza o dehors commerciale",
        name: "tipo",
      },
      {
        label: "Aree da illuminare, metratura e ostacoli",
        name: "aree",
      },
      { label: "Uso serale, orari e stagione", name: "uso" },
      {
        label: "Tracce, scavi o canalizzazioni disponibili",
        name: "tracce",
      },
      {
        label: "Comandi, sensori, timer o dimmer desiderati",
        name: "comandi",
      },
      {
        label: "Referente, vincoli all'installazione e scadenza",
        name: "vincoli",
      },
      noteField,
    ],
    allegati:
      "Panoramiche degli spazi, percorsi e gradini, apparecchi esistenti, punti di alimentazione visibili dall'esterno.",
  },
  {
    slug: "vimar-plana",
    title: "Vimar Plana e diffusione sonora",
    category: "impianti",
    fields: [
      ...commonFields,
      {
        label: "Serie attuale e quantità di prese, comandi e placche",
        name: "serie",
      },
      {
        label: "Funzioni da mantenere e colore o finitura preferita",
        name: "funzioni",
      },
      { label: "Scatole e predisposizioni già note", name: "scatole" },
      {
        label: "Musica, annunci o segnalazione di quale utenza",
        name: "audio",
      },
      {
        label: "Zone audio, sorgenti e comandi desiderati",
        name: "zone",
      },
      {
        label: "Diffusori esistenti, vincoli e scadenza",
        name: "diffusori",
      },
      noteField,
    ],
    allegati:
      "Foto frontali di placche e comandi senza smontaggio, panoramiche degli ambienti e dei punti desiderati per i diffusori.",
  },
  {
    slug: "controllo-consumi",
    title: "Controllo consumi e monitoraggio remoto",
    category: "impianti",
    fields: [
      ...commonFields,
      {
        label: "Obiettivo e carichi o zone da monitorare",
        name: "obiettivo",
      },
      {
        label: "Monofase o trifase, potenza nota e numero di quadri",
        name: "impianto",
      },
      {
        label: "Fotovoltaico o accumulo già presente",
        name: "fv",
      },
      {
        label: "Storico consumi e frequenza dei dati desiderata",
        name: "storico",
      },
      {
        label: "Rete disponibile, accesso remoto e ruoli",
        name: "rete",
      },
      {
        label: "Avvisi richiesti e carichi da gestire",
        name: "avvisi",
      },
      noteField,
    ],
    allegati:
      "Quadro chiuso, display accessibili, elenco utenze e schermate o estratti dei consumi con identificativi non necessari oscurati.",
  },
  {
    slug: "videosorveglianza",
    title: "Videosorveglianza",
    category: "impianti",
    fields: [
      ...commonFields,
      { label: "Casa, condominio o luogo di lavoro", name: "contesto" },
      {
        label: "Zone di propria pertinenza e obiettivo",
        name: "zone",
      },
      {
        label: "Numero punti, luce notturna e distanza",
        name: "punti",
      },
      {
        label: "Registrazione, visione remota e utenti previsti",
        name: "registrazione",
      },
      {
        label: "Rete, alimentazione e impianto esistente",
        name: "rete",
      },
      {
        label: "Parti comuni, lavoratori e referente autorizzato",
        name: "autorizzato",
      },
      noteField,
    ],
    allegati:
      "Schizzo delle zone, foto del proprio accesso e punti di montaggio ipotizzati. Evita persone, targhe e interni di terzi.",
  },
  {
    slug: "videocitofoni-abitazioni",
    title: "Videocitofoni per abitazioni",
    category: "impianti",
    fields: [
      ...commonFields,
      {
        label: "Numero di ingressi e postazioni interne",
        name: "ingressi",
      },
      {
        label: "Marca e modello esistenti, se noti",
        name: "marca",
      },
      {
        label: "Portone, cancello o più comandi di apertura",
        name: "aperture",
      },
      {
        label: "Audio, video e smartphone desiderati",
        name: "funzioni",
      },
      { label: "Distanze e passaggi disponibili", name: "distanze" },
      { label: "Tipo di rete e data desiderata", name: "rete" },
      noteField,
    ],
    allegati:
      "Foto frontale di pulsantiera, monitor e cancello, senza aprire dispositivi. Oscura nome e indirizzo se non utili alla foto.",
  },
  {
    slug: "videocitofoni-condominiali",
    title: "Videocitofoni condominiali",
    category: "impianti",
    fields: [
      ...commonFields,
      {
        label: "Amministratore, recapito e referente in loco",
        name: "amm",
      },
      {
        label: "Numero ingressi, scale e appartamenti",
        name: "numeri",
      },
      {
        label: "Impianto esistente e problemi riscontrati",
        name: "esistente",
      },
      {
        label: "Funzioni richieste: apertura, video e accessibilità",
        name: "funzioni",
      },
      {
        label: "Accessi alle unità e vincoli comuni",
        name: "accessi",
      },
      {
        label: "Delibera o incarico, tempi e fasi previste",
        name: "delibera",
      },
      noteField,
    ],
    allegati:
      "Pulsantiere, ingressi, portineria se presente e dispositivi rappresentativi. Oscura cognomi sulle targhette e chiedi l'autorizzazione per le aree comuni.",
  },
];

export function getRequestModule(slug: string) {
  return requestModules.find((m) => m.slug === slug);
}

export function getImpiantoService(slug: string) {
  return impiantoServices.find((s) => s.slug === slug);
}

export function getAccordionSection(slug: string) {
  return accordionSections.find((s) => s.slug === slug);
}

export const moduleIndex = [
  { slug: "idoneita-alloggiativa", title: "Idoneità alloggiativa" },
  { slug: "compravendita-immobiliare", title: "Compravendita immobiliare" },
  { slug: "affitti-e-consegna", title: "Affitti e consegna dell'immobile" },
  { slug: "manutenzioni-e-adeguamenti", title: "Manutenzioni e adeguamenti" },
  { slug: "negozi-uffici", title: "Negozi, uffici e attività commerciali" },
  { slug: "industrie-laboratori", title: "Industrie, laboratori e capannoni" },
  { slug: "dico-diri", title: "Richiesta DiCo o DiRi" },
  {
    slug: "fotovoltaico-accumulo-ricarica",
    title: "Fotovoltaico, accumulo e ricarica",
  },
  { slug: "nuovi-impianti-elettrici", title: "Nuovi impianti elettrici" },
  { slug: "illuminazione-led-casa", title: "Illuminazione LED per la casa" },
  {
    slug: "illuminazione-led-negozi",
    title: "Illuminazione LED per negozi e uffici",
  },
  { slug: "led-esterni", title: "LED per giardini, terrazze e dehors" },
  { slug: "vimar-plana", title: "Vimar Plana e diffusione sonora" },
  {
    slug: "controllo-consumi",
    title: "Controllo consumi e monitoraggio remoto",
  },
  { slug: "videosorveglianza", title: "Videosorveglianza" },
  { slug: "videocitofoni-abitazioni", title: "Videocitofoni per abitazioni" },
  {
    slug: "videocitofoni-condominiali",
    title: "Videocitofoni condominiali",
  },
] as const;
