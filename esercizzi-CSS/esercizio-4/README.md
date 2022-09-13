Esercizio 4 – Task 1

In questo esercizio, devi migliorare lo stile grafico con cui è rappresentato il menù di navigazione tra le varie
pagine. Usa le regole CSS che abbiamo visto per dare l'impressione che nella pagina siano presenti delle schede
(tab), come quelli usati dai browser. Di solito non sono dei veri contenitori, ma una semplice lista di link
visualizzata in modo particolare. Puoi provare a seguire questo procedimento:

inserisci all’intero di un div, con id = menu, i link alle pagine che compongono il tuo progetto;

seleziona un colore per delineare il contorno delle schede;

imposta il bordo inferiore dell'intera lista (​ul) di quel colore, scegliendo uno spessore;

imposta il ​display degli ​li della lista in questione ad ​inline-block. Questo permette di impostare una
dimensione fissa per tutte le schede (i nostri ​li) senza che questi vengano disegnati nella riga successiva;

imposta i bordi destro, sinistro e superiore degli li con il colore per il contorno delle schede;

imposta i margin degli ​li ed il padding del tag ​ul in modo che il bordo destro e sinistro delle schede tocchi il
bordo inferiore dell'​ul

Esercizio 4 – Task 1

Dovreste ottenere qualcosa del genere

Esercizio 4 – Task 2

Ora devi fare in modo che la scheda attuale sembri selezionata.
Generalmente questo si ottiene facendo in modo che il bordo sotto la scheda
non si veda:

per tutti gli ​li imposta la proprietà ​position: relative

‘abbassa’ gli ​li di un numero di pixel uguale allo spessore del bordo
dell’​ul utilizzando la proprietà ​top

imposta lo stesso colore sia al bordo che allo sfondo, bianco per
l'esempio.

Esercizio 4 – Task 2

Dovreste ottenere qualcosa del genere

Esercizio 4 – Task 3

Applica queste modifiche nelle altre pagine che compongono il progetto.