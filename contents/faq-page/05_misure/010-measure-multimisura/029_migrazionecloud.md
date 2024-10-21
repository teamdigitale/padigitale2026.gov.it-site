---
  - title: Quale soluzione può essere implementata per la migrazione al Cloud di servizi di diagnostica strumentale che producono dati di grandi dimensioni e con sistemi hardware ad alta intensità di lavoro?
    tag:
      - Generale
    anchorLink: 029_migrazionecloud
---

Per la migrazione di tali servizi può essere sviluppata una soluzione che permetta di scrivere localmente i dati degli applicativi e trasferirli quanto prima, anche attraverso operazioni programmate per gestire lotti massivi (ad es. scheduled job), presso uno o più repository Cloud. 
I dati primari, che l'applicazione deve utilizzare e di cui deve verificarne la correttezza, devono essere quelli presenti sui sistemi Cloud. 
I dati presenti localmente devono essere puramente temporanei e ad uso e consumo per la gestione ordinaria. In particolare, in virtù della natura della soluzione, questa dovrà prevedere la memorizzazione dei dati trattati per il solo tempo necessario allo scopo ovvero configurabile a cura degli amministratori. Inoltre, la soluzione architettura in esame deve essere progettata e implementata senza comportare un detrimento dei requisiti di sicurezza previsti per la protezione del dato in transito (ad es. tra terminale e sistema di caching, nonché tra sistema di caching e servizio cloud centralizzato) e memorizzato, anche a livello di rete locale. Completata la gestione, il dato deve poter essere cancellato. 
Tutte le operazioni CRUD (create, read, update, e delete) sulle informazioni devono essere fatte direttamente sul Cloud che poi successivamente, se necessario, provvede a propagarlo sui sistemi locali. 
La modalità di funzionamento descritta potrà essere verificata procedendo ad una cancellazione dei dati salvati in locale per poi andare a reperire le stesse informazioni dal Cloud, ricopiando in locale solo quanto strettamente necessario. 
