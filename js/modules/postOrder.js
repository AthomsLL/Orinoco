/* IMPORTS */
import { fetchAPI } from "./fetchAPI.js";

// Fonction permettant d'envoyer la commande au serveur
export function postOrderToAPI() {
    // Récupération et stockage dans une constante du bouton "Valider la commande"
    const btnValidateOrder = document.getElementById('btn-order');

    // Récupération et stockage dans une variable du panier présent dans le localStorage
    const cart = JSON.parse(localStorage.getItem('cart'));

     // Déclaration d'un tableau de produits vide
     const products = [];

     // Ajout de chaque produit présent dans le panier à l'array "product_id"
    cart.forEach(item => {
        products.push(item.id);
    });

    // Evènement au clic sur le bouton "Valider la commande"
    btnValidateOrder.addEventListener('click', async () => {

        // Récupération et stockage du formulaire dans une constante
        const Form = document.getElementById('form');

        // Récupération et stockage dans une variable du montant total de la commande
        let totalCost = document.querySelector('.cart-total-cost--text').innerHTML;
        
        // Création d'un objet "contact" contenant les informations du formulaire
        let contact = {
            firstName: document.getElementById('firstname').value,
            lastName: document.getElementById('name').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            email: document.getElementById('email').value
        }

        // Vérification que le formulaire est correctement rempli
        if(Form.checkValidity() == false) {
            // Si ce n'est pas le cas :
            alert('Veuillez remplir correctement le formulaire svp !');
        } else {
            // Sinon envoi de la commande au serveur
            let postOrder = await fetchAPI('/teddies/order', 'POST', JSON.stringify({contact, products}));

            // Récupération de l'id de commande dans la réponse du serveur
            let orderId = postOrder.orderId;

            // Création de l'objet à envoyer au sessionStorage
            let order = {
                orderId: orderId,
                totalCost: totalCost
            }

            // Envoi de l'objet "order" au sessionStorage
            sessionStorage.setItem('order', JSON.stringify(order));

            // Vidage du panier en supprimant le localStorage
            localStorage.clear();

            // Redirection vers la page de confirmation de commande
            window.location = 'order.html';
        }
    })
}