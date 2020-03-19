// IMPORTS
import {fetchAPI} from './modules/fetchAPI.js';
import {appendItemInViewDropdownMenu} from './modules/helpers/appendItemsToNav.js';
import {numberOfItemsInCart} from './modules/helpers/nbItemsInCart.js';
import {appendProductsInViewCart} from './modules/cart/appendProductsToCartPage.js';
import {deleteItemOnCart} from './modules/cart/deleteItemOnCart.js';
import {postOrderToAPI} from './modules/cart/postOrder.js';
import {appendCartTotalCostInViewCart} from './modules/cart/appendCartTotalCostToCartPage.js';
import {TeddyBear} from './objects/TeddyBear.js';

// Lancement des fonctions quand la page "Produit" est chargée
window.onload = () => {
    initCart();
}

// Ajout des contenus HTML dans la page produit pour un produit spécifique
export async function initCart() {
    let urlProduct = 'product.html';
    let items = await fetchAPI('/teddies');
    let teddyBears = [];

    items.forEach((teddyBear) => {
        teddyBear = new TeddyBear(teddyBear._id, teddyBear.imageUrl, teddyBear.name, teddyBear.description, teddyBear.colors, teddyBear.price);
        teddyBears.push(teddyBear);
    })

    let i = 0

    for ( i ; i < teddyBears.length; i++) {
        appendItemInViewDropdownMenu(teddyBears[i], urlProduct);
    }

    appendProductsInViewCart();
    appendCartTotalCostInViewCart();
    deleteItemOnCart();
    postOrderToAPI();
    numberOfItemsInCart();

    return i;
}