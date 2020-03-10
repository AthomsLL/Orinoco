// IMPORTS
import {appendItemInViewIndex} from './modules/appendItemsToIndexPage.js';
import {appendItemInViewDropdownMenu} from './modules/appendItemsToNav.js';
import {numberOfItemsInCart} from './modules/nbItemsInCart.js';
import {fetchAPI} from './modules/fetchAPI.js';

// Lancement des fonctions quand la page est chargée
window.onload = () => {
    initItems();
}

// Ajout des contenus HTML dans la page pour chaque item produit
async function initItems() {
    let items = await fetchAPI('/teddies');
    let urlIndexProduct = 'pages/product.html';
    let i = 0;

    for( i ; i < items.length ; i++) {
        appendItemInViewIndex(items[i]);
        appendItemInViewDropdownMenu(items[i], urlIndexProduct);
    }

    numberOfItemsInCart();

    return i;
}