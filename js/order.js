// IMPORTS
import {fetchAPI} from './modules/fetchAPI.js';
import {appendItemInViewDropdownMenu} from './modules/appendItemsToNav.js';

// Lancement des fonctions quand la page "Produit" est chargée
window.onload = () => {
    initOrder();
}

// Ajout des contenus HTML dans la page produit pour un produit spécifique
async function initOrder() {
    let urlProduct = 'product.html';
    let items = await fetchAPI('/teddies');
    let i = 0

    for ( i ; i < items.length; i++) {
        appendItemInViewDropdownMenu(items[i], urlProduct);
    }

    return i;
}