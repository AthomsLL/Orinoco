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
    try {
        let items = await fetchAPI('/teddies');
        let urlIndexProduct = 'pages/product.html';
        let i = 0;
        for(;i < items.length; i++) {
            appendItemInViewIndex(items[i]);
            appendItemInViewDropdownMenu(items[i], urlIndexProduct);
        }
        return i;
    }catch(err) {
        alert(err);
    }
}