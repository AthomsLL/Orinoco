/* IMPORTS */
import { fetchAPI } from "../fetchAPI.js";
import * as Regex from '../helpers/regex.js';

// Fonction permettant d'envoyer la commande au serveur
export function postOrderToAPI() {
    // Récupération et stockage dans une constante du bouton "Valider la commande"
    const btnValidateOrder = document.getElementById('btn-order');

    // Récupération et stockage dans une variable du panier présent dans le localStorage
    const cart = JSON.parse(localStorage.getItem('cart'));

     // Déclaration d'un tableau de produits vide
     const products = [];

     // Ajout de chaque id de produit présent dans le panier à l'array "products"
    if(cart > 0) {
        cart.forEach(item => {
            products.push(item.id);
        });
    }

    // Evènement au clic sur le bouton "Valider la commande"
    btnValidateOrder.addEventListener('click', async () => {

        // Récupération et stockage des input du formulaire
        let firstName = document.getElementById('firstname');
        let lastName = document.getElementById('name');
        let address = document.getElementById('address');
        let city = document.getElementById('city');
        let email = document.getElementById('email');
       
        // Récupération et stockage dans une variable du montant total de la commande
        let totalCost = document.querySelector('.cart-total-cost--text').innerHTML;
        
        // Création d'un objet "contact" contenant les informations du formulaire
        let contact = {
            "firstName": firstName.value,
            "lastName": lastName.value,
            "address": address.value,
            "city": city.value,
            "email": email.value
        }

        let hasError = false;

        // Vérification si le panier est vide
        if (!cart) {
            // Si c'est le cas, on affiche un message pour demander d'ajouter au moins un produit
            Swal.fire({
                icon: 'error',
                title: '',
                text: "Aucun produit n'est présent dans votre panier ! Merci d'ajouter au moins un ours.",
            }) 
            hasError = true;
        }
        // Vérification que le formulaire est correctement rempli
        else if (!Regex.nameRegex.test(firstName.value)) {
            // Si ce n'est pas le cas, on affiche un message pour demander le remplissage du prénom :
            Swal.fire({
                icon: 'error',
                title: '',
                text: "Merci d'indiquer votre prénom avant de confirmer votre commande.",
            }) 
            hasError = true;
        } 
        else if (!Regex.nameRegex.test(lastName.value)) {
            // Si ce n'est pas le cas, on affiche un message pour demander le remplissage du nom :
            Swal.fire({
                icon: 'error',
                title: '',
                text: "Merci d'indiquer votre nom avant de confirmer votre commande.",
            })
            hasError = true;
        } 
        else if (!Regex.emailRegex.test(email.value)) {
            // Si ce n'est pas le cas, on affiche un message pour demander le remplissage de l'email :
            Swal.fire({
                icon: 'error',
                title: '',
                text: "Merci d'indiquer votre email complet avant de confirmer votre commande.",
            })
            hasError = true;
        }
        else if (!Regex.addressRegex.test(address.value)) {
            // Si ce n'est pas le cas, on affiche un message pour demander le remplissage de l'adresse :
            Swal.fire({
                icon: 'error',
                title: '',
                text: "Merci d'indiquer votre adresse complète avant de confirmer votre commande.",
            })
            hasError = true;
        }
        else if (!Regex.cityRegex.test(city.value)) {
            // Si ce n'est pas le cas, on affiche un message pour demander le remplissage de la ville :
            Swal.fire({
                icon: 'error',
                title: '',
                text: "Merci d'indiquer votre ville avant de confirmer votre commande.",
            })
            hasError = true;
        }
        else {
            // Sinon envoi de la commande au serveur
            let postOrder = await fetchAPI('/teddies/order', 'POST', JSON.stringify({contact, products}));

            // Récupération de l'id de commande dans la réponse du serveur
            let orderId = postOrder.orderId;

            // Création de l'objet à envoyer au sessionStorage
            let order = {
                "orderId": orderId,
                "totalCost": totalCost
            }

            // Envoi de l'objet "order" au sessionStorage
            sessionStorage.setItem('order', JSON.stringify(order));

            // Vidage du panier en supprimant le localStorage
            localStorage.clear();

            setTimeout(() => {
                // Redirection vers la page de confirmation de commande après 1 seconde
                window.location = 'order.html';
            }, 1000);
        }
    })
}