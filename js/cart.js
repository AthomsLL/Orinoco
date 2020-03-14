// IMPORTS
import {fetchAPI} from './modules/fetchAPI.js';
import {appendItemInViewDropdownMenu} from './modules/appendItemsToNav.js';
import {numberOfItemsInCart} from './modules/nbItemsInCart.js';
import {appendProductsInViewCart} from './modules/appendProductsToCartPage.js';
import {deleteItemOnCart} from './modules/deleteItemOnCart.js';
import {postOrderToAPI} from './modules/postOrder.js';
import {appendCartTotalCostInViewCart} from './modules/appendCartTotalCostToCartPage.js';

// Lancement des fonctions quand la page "Produit" est chargée
window.onload = () => {
    initCart();
}

// Ajout des contenus HTML dans la page produit pour un produit spécifique
export async function initCart() {
    let urlProduct = 'product.html';
    let items = await fetchAPI('/teddies');
    let i = 0

    for ( i ; i < items.length; i++) {
        appendItemInViewDropdownMenu(items[i], urlProduct);
    }

    appendProductsInViewCart();
    appendCartTotalCostInViewCart();
    numberOfItemsInCart();
    deleteItemOnCart();
    postOrderToAPI();

    return i;
}