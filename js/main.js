// IMPORTS
import {appendItemInViewIndex} from './modules/appendIndexItems.js';
import {appendItemInViewDropdownMenu} from './modules/appendNavItems.js';
import {fetchAPI} from './modules/fetchAPI.js';

// Lancement des fonctions quand la page est chargée
window.onload = () => {
    initItems();
}

// Ajout des contenus HTML dans la page pour chaque item produit
async function initItems() {
    let items = await fetchAPI('/teddies');
    let urlIndexProduct = 'pages/product.html';
    for(let i = 0; i < items.length; i++) {
        await appendItemInViewDropdownMenu(items[i], urlIndexProduct);
        await appendItemInViewIndex(items[i]);
    }
}