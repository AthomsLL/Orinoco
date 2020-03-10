//IMPORTS
import {sendCartToLocalStorage} from './cartToLocalStorage.js';
import {numberOfItemsInCart} from './nbItemsInCart.js';
import {appearSuccessMessageAddToCart} from './successMessageAddToCart.js';
import {Id} from './helpers/getUrlParamId.js';

// Ajout des produits au panier en stockant dans le localStorage
export function addCartToLocalStorage(product) {
    try {

        // Stockage du bouton 'Ajouter au panier' dans une variable
        const btnCart = document.getElementById('btn-cart');

        // Déclenchement des évènements au clic sur le bouton 'Ajouter au panier'
        btnCart.addEventListener("click", () => {
            // Création des variables contenant les informations du produit à stocker
            let color = document.getElementById('color-select').value;
            let quantity = document.getElementById('quantity').value;
            let image = `${product.imageUrl}`;
            let id = `${Id}`;
            let name = `${product.name}`;
            let price = `${product.price / 100}`;

            // Récupération de la div qui contiendra le message de confirmation d'ajout au panier et stockage dans une variable
            let confirmedMessage = document.querySelector('.item-confirm');

            // Création de l'objet contenant les informations du produit qui sera stocké dans le localStorage
            let infosObject = {
                "id" : id,
                "image" : image,
                "name" : name,
                "color" : color,
                "quantity" : quantity,
                "price" : price
            };

            // Appel de la fonction récupérant et envoyant le panier au localStorage 
            sendCartToLocalStorage(infosObject);

            // Appel de la fonction mettant à jour le nombre de produits dans le panier dans le menu
            numberOfItemsInCart();

            // Appel de la fonction affichant le message de confirmation d'ajout au panier
            appearSuccessMessageAddToCart(confirmedMessage);
        })
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Oups...',
            text: "Impossible d'ajouter ce produit au panier.",
        })
    }
}