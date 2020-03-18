// IMPORTS
import {fetchAPI} from './modules/fetchAPI.js';
import {appendItemInViewDropdownMenu} from './modules/helpers/appendItemsToNav.js';
import {numberOfItemsInCart} from './modules/helpers/nbItemsInCart.js';
import {confirmedOrder} from './modules/order/confirmedOrder.js';
import {TeddyBear} from './objects/TeddyBear.js';

// Lancement des fonctions quand la page "Produit" est chargée
window.onload = () => {
    initOrder();
}

// Ajout des contenus HTML dans la page produit pour un produit spécifique
async function initOrder() {
    let urlProduct = 'product.html';
    let items = await fetchAPI('/teddies');
    let teddyBears = [];

    items.forEach((teddyBear) => {
        teddyBear = new TeddyBear(teddyBear._id, teddyBear.imageUrl, teddyBear.name, teddyBear.description, teddyBear.colors, teddyBear.price);
        teddyBears.push(teddyBear);
        console.log(teddyBear);
    })

    let i = 0

    for ( i ; i < teddyBears.length; i++) {
        appendItemInViewDropdownMenu(teddyBears[i], urlProduct);
    }

    confirmedOrder();
    numberOfItemsInCart();

    return i;
}