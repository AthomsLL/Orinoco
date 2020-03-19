//IMPORTS
import {sendCartToLocalStorage} from './cartToLocalStorage.js';
import {numberOfItemsInCart} from '../helpers/nbItemsInCart.js';
import {appearSuccessMessageAddToCart} from './successMessageAddToCart.js';

// Ajout des produits au panier en stockant dans le localStorage
export function addCartToLocalStorage(product) {
    try {

        // Stockage du bouton 'Ajouter au panier' dans une variable
        const btnCart = document.getElementById('btn-cart');

        // Déclenchement des évènements au clic sur le bouton 'Ajouter au panier'
        btnCart.addEventListener("click", () => {
            product.ChosenColor = document.getElementById('color-select').value;
            product.Quantity = document.getElementById('quantity').value;

            // Récupération de la div qui contiendra le message de confirmation d'ajout au panier et stockage dans une variable
            let confirmedMessage = document.querySelector('.item-confirm');

            // Appel de la fonction récupérant et envoyant le panier au localStorage 
            sendCartToLocalStorage(product);

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