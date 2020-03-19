// IMPORTS
import {appendItemInfosInViewProduct} from './modules/product/appendInfosProduct.js';
import {appendItemInViewDropdownMenu} from './modules/helpers/appendItemsToNav.js';
import {numberOfItemsInCart} from './modules/helpers/nbItemsInCart.js';
import {Id} from './modules/helpers/getUrlParamId.js';
import {fetchAPI} from './modules/fetchAPI.js';
import {addCartToLocalStorage} from './modules/product/addToCart.js';
import {TeddyBear} from './objects/TeddyBear.js';

// Lancement des fonctions quand la page "Produit" est chargée
window.onload = () => {
    initProduct();
}

// Ajout des contenus HTML dans la page produit pour un produit spécifique
async function initProduct() {
    let urlProduct = 'product.html';
    let items = await fetchAPI('/teddies');
    let teddyBears = [];

    items.forEach((teddyBear) => {
        teddyBear = new TeddyBear(teddyBear._id, teddyBear.imageUrl, teddyBear.name, teddyBear.description, teddyBear.colors, teddyBear.price);
        teddyBears.push(teddyBear);
    })

    let product = await fetchAPI(`/teddies/${Id}`);

    let teddyBear = new TeddyBear(product._id, product.imageUrl, product.name, product.description, product.colors, product.price);
    console.log(teddyBear);
    
    let i = 0

    for ( i ; i < teddyBears.length; i++) {
        appendItemInViewDropdownMenu(teddyBears[i], urlProduct);
    }

    appendItemInfosInViewProduct(teddyBear);
    addCartToLocalStorage(teddyBear);
    numberOfItemsInCart();

    return i;
}




