// IMPORTS
import {fetchAPI} from './modules/fetchAPI.js';
import {appendItemInViewDropdownMenu} from './modules/appendNavItems.js';

// Lancement des fonctions quand la page "Produit" est chargée
window.onload = () => {
    initOrder();
}

// Ajout des contenus HTML dans la page produit pour un produit spécifique
async function initOrder() {
    try {
        let urlProduct = 'product.html';
        let items = await fetchAPI('/teddies');
        let i = 0

        for ( i ; i < items.length; i++) {
            appendItemInViewDropdownMenu(items[i], urlProduct);
        }

        console.log(i);

        return i;
    }catch(err) {
        Swal.fire({
            icon: 'error',
            title: 'Oups...',
            text: "Une erreur est survenue pendant la confirmation de commande. Merci de réessayer plus tard.",
          })
    }
}