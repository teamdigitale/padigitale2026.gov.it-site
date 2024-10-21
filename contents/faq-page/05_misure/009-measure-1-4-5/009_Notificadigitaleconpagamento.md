---
  - title: È possibile inviare una notifica digitale con un avviso di pagamento associato (es. Sanzioni al Codice della Strada) in modalità manuale, attraverso l’utilizzo dell’interfaccia web di SEND?
    tag:
      - comuni
    anchorLink: 009_Notificadigitaleconpagamento
---

È possibile implementare i servizi manualmente solo nei casi di servizi che non prevedano un pagamento.
Invece, per le notifiche di atti che prevedono un pagamento (Allegato 2), è necessario attualizzare la posizione debitoria, interrogando PND tramite API, per ottenere la data di perfezionamento e l’ammontare delle spese di notifica.
Dal momento che la notifica di violazione al codice della strada è finalizzata al pagamento della sanzione, per ritenersi concluso il processo di attivazione dei servizi deve quindi essere perfezionato anche il pagamento come sopra descritto.
