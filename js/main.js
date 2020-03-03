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
        for( i ; i < items.length ; i++) {
            appendItemInViewIndex(items[i]);
            appendItemInViewDropdownMenu(items[i], urlIndexProduct);
        }
        console.log(i);
        return i;
    }catch(err) {
        Swal.fire({
            title: 'Désolé',
            text: 'Les teddies sont absents pour le moment. Merci de réessayer plus tard.',
            imageUrl: 'https://res.cloudinary.com/djcmfi03h/image/upload/w_400,f_auto/v1583233217/Orinoco/ourson_triste_sxvkwe.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Image d'un teddy",
        })
    }
}