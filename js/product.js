// IMPORTS
import {appendItemInfosInViewProduct} from './modules/appendInfosProduct.js';
import {appendItemColorsInViewProduct} from './modules/appendColorsProduct.js';
import {appendItemInViewDropdownMenu} from './modules/appendNavItems.js';
import {fetchAPI} from './modules/fetchAPI.js';

// On récupère la valeur de l'URL parameter équivalant à "id= ..." et on la stocke dans une constante
const Id = new URLSearchParams(window.location.search).get('id');
console.log(Id);

// Lancement des fonctions quand la page "Produit" est chargée
window.onload = () => {
    initProduct();
}

// Ajout des contenus HTML dans la page produit pour un produit spécifique
async function initProduct() {
    let urlProduct = 'product.html';
    let items = await fetchAPI('/teddies');
    let product = await fetchAPI(`/teddies/${Id}`);

    for (let i = 0; i < items.length; i++) {
        await appendItemInViewDropdownMenu(items[i], urlProduct);
    }

    await appendItemInfosInViewProduct(product);
    await appendItemColorsInViewProduct(product);
}




