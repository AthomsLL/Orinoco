// IMPORTS
import {appendItemInfosInViewProduct} from './modules/appendInfosProduct.js';
import {appendItemColorsInViewProduct} from './modules/appendColorsProduct.js';
import {appendItemInViewDropdownMenu} from './modules/appendNavItems.js';
import {Id} from './modules/getUrlParamId.js';
import {fetchAPI} from './modules/fetchAPI.js';
import {addCartToLocalStorage} from './modules/addToCart.js';

// Lancement des fonctions quand la page "Produit" est chargée
window.onload = () => {
    initProduct();
}

// Ajout des contenus HTML dans la page produit pour un produit spécifique
async function initProduct() {
    try {
        let urlProduct = 'product.html';
        let items = await fetchAPI('/teddies');
        let product = await fetchAPI(`/teddies/${Id}`);
        let i = 0

        for ( i ; i < items.length; i++) {
            appendItemInViewDropdownMenu(items[i], urlProduct);
        }

        appendItemInfosInViewProduct(product);
        appendItemColorsInViewProduct(product);
        addCartToLocalStorage(product);

        console.log(i);

        return i;
    }catch(err) {
        Swal.fire({
            title: 'Désolé',
            text: 'Le teddy demandé est absent pour le moment. Merci de réessayer plus tard.',
            imageUrl: 'https://res.cloudinary.com/djcmfi03h/image/upload/w_400,f_auto/v1583233217/Orinoco/ourson_triste_sxvkwe.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Image d'un teddy",
        })
    }
}




