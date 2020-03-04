//IMPORTS
import {Id} from './getUrlParamId.js';

// Ajout des produits au panier en stockant dans le localStorage
export function addCartToLocalStorage(product) {
    try {

        //VARIABLES
        // Stockage du bouton 'Ajouter au panier' dans une variable
        let btnCart = document.getElementById('btn-cart');

        // Déclenchement des évènements au clic sur le bouton 'Ajouter au panier'
        btnCart.addEventListener("click", () => {
            // Création des variables contenant les informations du produit à stocker
            let color = document.getElementById('color-select').value;
            let quantity = document.getElementById('quantity').value;
            let image = `${product.imageUrl}`;
            let id = `${Id}`;
            let name = `${product.name}`;
            let price = `${product.price / 100}`;

            // Stockage du contenu du localStorage dans une variable "cart", si le contenu du localStorage est vide, crée un array à la place
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Création de l'objet contenant les informations du produit qui sera stocké dans le localStorage
            let infosObject = {
                "id" : id,
                "image" : image,
                "name" : name,
                "color" : color,
                "quantity" : quantity,
                "price" : price
            };

            // Condition pour véirifer si le panier est vide
            if(!cart) {
                // Insertion des informations du produit à ajouter au localStorage
                localStorage.setItem('cart', JSON.stringify(infosObject));
            } else {

                // Sinon rajout des informations du produit cliqué à l'objet 'infosObject'
                cart.push(infosObject);

                // Puis insertion du nouvel objet mis à jour dans le localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
            }

            // Affichage d'un message de succès lors de l'ajout du produit dans le panier
            Swal.fire(
                'Merci !',
                'Votre produit a bien été ajouté au panier.',
                'success'
            )
        })
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Oups...',
            text: "Impossible d'ajouter ce produit au panier.",
        })
    }
}