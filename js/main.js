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

function numberValue (item, value) {
   return item.innerText = value
};

function appentToContainer (container, cell) {
   return container.append(cell);
};

/*
---------
Main
---------
*/

const button = document.querySelector('.start-button');

button.addEventListener('click', function() {
    const container = document.getElementById('container');
    container.classList.remove('d-none');
    container.classList.add('d-flex');
});

for (let i = 1; i <= 100; i++) {
    const createdItem = createCell('div', 'cell', i);
    const container = document.getElementById('container');
    appentToContainer(container, createdItem);
    numberValue(createdItem, i);
};