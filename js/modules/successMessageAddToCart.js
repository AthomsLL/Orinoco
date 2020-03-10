/* IMPORTS */
import {successMessage} from './helpers/successMessage.js';

// Fonction permettant d'afficher le message de confirmation d'ajout au panier
export function appearSuccessMessageAddToCart(messageContainer) {
    // Appel de la fonction affichant le message de confirmation d'ajout au panier
    messageContainer.classList.add('item-confirm-clicked');
    successMessage(messageContainer, 'Merci. Votre produit a bien été ajouté au panier !');

    // Suppression de la classe 'item-confirm-clicked' et du message après la durée de l'animation
    setTimeout(() => {
        messageContainer.classList.remove('item-confirm-clicked');
        successMessage(messageContainer, '')
    }, 6000)
}