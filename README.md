<!--L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.-->

1. Costruisco la struttura a griglia su html tramite javascript:
    - inserisco un contenitore su html;
    - tramite i controlli per manipolare il dom creo la struttura a griglia;
    - creo quindi una cella con create.Element e lo stile css;
    - con la gestione delle classi tramite js posso incollare la cella creata in precedenza quante volte voglio;
2. Inserisco un bottone che svolga un evento quando cliccato (addEventListener):
    - quando clicco il bottone una classe display block sarà applicata alla struttura a griglia che avrà di default la classe display none;
3. Dovrò utilizzare addEventListener anche sulla cella creata in precedenza:
    - quando clicco sulla cella dovro rimuovere la classe con il background-color di default e applicare una classe .azzurro con background-color che mi interessa e stamperò in console il numero della cella su cui ho cliccato.