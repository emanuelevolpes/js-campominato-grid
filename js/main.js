'use strict';

/*
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/*
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
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
    container.classList.replace('d-none', 'd-flex');
});

button.addEventListener('dblclick', function() {  //non resetta ma nasconde
    const container = document.getElementById('container');
    container.classList.replace('d-flex', 'd-none');
});

const e = document.getElementById("difficult-select");
let value = e.value;

if (value === 'Easy') {
    for (let i = 1; i <= 100; i++) {
        const createdItem = createCell('div', 'cell', i);
        const container = document.getElementById('container');
        appentToContainer(container, createdItem);
        numberValue(createdItem, i);
    };
};

if (value === 'Medium') {
    for (let i = 1; i <= 81; i++) {
        const createdItem = createCell('div', 'cell-medium', i);
        const container = document.getElementById('container');
        appentToContainer(container, createdItem);
        numberValue(createdItem, i);
    };
};

if (value === 'Hard') {
    for (let i = 1; i <= 49; i++) {
        const createdItem = createCell('div', 'cell-hard', i);
        const container = document.getElementById('container');
        appentToContainer(container, createdItem);
        numberValue(createdItem, i);
    };
};

const cell = document.querySelectorAll('.cell');

 for (let i = 0; i < cell.length; i++) {
     cell[i].addEventListener('click', function() {
       cell[i].classList.toggle('clicked-cell');
     });
 };
