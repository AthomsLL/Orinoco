// IMPORTS
import {appendItemInViewIndex} from './modules/index/appendItemsToIndexPage.js';
import {appendItemInViewDropdownMenu} from './modules/helpers/appendItemsToNav.js';
import {numberOfItemsInCart} from './modules/helpers/nbItemsInCart.js';
import {fetchAPI} from './modules/fetchAPI.js';
import {TeddyBear} from './objects/TeddyBear.js';

// Lancement des fonctions quand la page est chargée
window.onload = () => {
    initItems();
}

// Ajout des contenus HTML dans la page pour chaque item produit
async function initItems() {
    let items = await fetchAPI('/teddies');
    let teddyBears = [];

    items.forEach((teddyBear) => {
        teddyBear = new TeddyBear(teddyBear._id, teddyBear.imageUrl, teddyBear.name, teddyBear.description, teddyBear.colors, teddyBear.price);
        teddyBears.push(teddyBear);
        console.log(teddyBear);
    })
    
    let urlIndexProduct = 'pages/product.html';
    let i = 0;

    for( i ; i < teddyBears.length ; i++) {
        appendItemInViewIndex(teddyBears[i]);
        appendItemInViewDropdownMenu(teddyBears[i], urlIndexProduct);
    }

    numberOfItemsInCart();

    return i;
}