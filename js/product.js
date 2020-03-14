// IMPORTS
import {appendItemInfosInViewProduct} from './modules/appendInfosProduct.js';
import {appendItemColorsInViewProduct} from './modules/appendColorsProduct.js';
import {appendItemInViewDropdownMenu} from './modules/appendItemsToNav.js';
import {numberOfItemsInCart} from './modules/nbItemsInCart.js';
import {Id} from './modules/helpers/getUrlParamId.js';
import {fetchAPI} from './modules/fetchAPI.js';
import {addCartToLocalStorage} from './modules/addToCart.js';

// Lancement des fonctions quand la page "Produit" est chargée
window.onload = () => {
    initProduct();
}

// Ajout des contenus HTML dans la page produit pour un produit spécifique
async function initProduct() {
    let urlProduct = 'product.html';
    let items = await fetchAPI('/teddies');
    let product = await fetchAPI(`/teddies/${Id}`);
    let i = 0

    /* let teddyBear = new teddyBear(product.name) */

    for ( i ; i < items.length; i++) {
        appendItemInViewDropdownMenu(items[i], urlProduct);
    }

    appendItemInfosInViewProduct(product);
    appendItemColorsInViewProduct(product);
    addCartToLocalStorage(product);
    numberOfItemsInCart();

    return i;
}




