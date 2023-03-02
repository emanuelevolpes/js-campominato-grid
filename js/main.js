'use strict';

/*
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/*
----------
Functions
----------
*/

function createCell (element1, element2) {
    const cell = document.createElement(element1);
    cell.classList.add(element2);
    return cell;
};

function appentToContainer (container, cell) {
    container.append(cell);
}

/*
---------
Main
---------
*/

for (let i = 0; i < 100; i++) {
    const createdItem = createCell('div', 'cell');
    const container = document.getElementById('container');
    appentToContainer(container, createdItem);
}