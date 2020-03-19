/* IMPORTS */
import {TeddyBear} from '../../objects/TeddyBear.js';

export function getCartFromLocalStorage() {
    // Récupération du contenu du localStorage à afficher dans la page 'Panier'
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    
    // Création d'un array vide
    const teddyBears = [];
    
    // On crée un nouvel objet TeddyBear pour chaque produit présent dans le localStorage
    if(cartItems.length > 0) {
        for(let i = 0; i < cartItems.length; i++) {
            teddyBears.push(new TeddyBear(cartItems[i].id, cartItems[i].image, cartItems[i].name, cartItems[i].description, cartItems[i].colors, cartItems[i].price, cartItems[i].quantity, cartItems[i].color))        
        }
    }

    return teddyBears;
}