// Récupération du contenu du sessionStorage
const order = JSON.parse(sessionStorage.getItem('order'));

//Récupération et stockage dans une variable de la section order
let orderSection = document.querySelector('.section-order');

// Récupération et stockage dans des variables des span qui afficheront le numéro de commande et le prix total
let confirmedOrderId = document.getElementById('order-id');
let confirmedTotalCost = document.getElementById('total-cost');

// Fonction permettant d'afficher le numéro de commande et le prix total sur la page de confirmation
export function confirmedOrder() {
    // Si le sessionStorage est vide, vidage du contenu de la section, affichage d'un message d'erreur et retour à l'accueil
    if (!order) {
        orderSection.innerHTML = "";

        Swal.fire({
            icon: 'error',
            title: '',
            html: "Mille sabords ! <br/> Une erreur s'est produite pendant la confirmation de votre commande. <br/> Vous allez être redirigé vers l'accueil.",
        })

        setTimeout(() => {
            window.location = '../index.html';
        }, 5000);
    } else {
        // Affichage de l'id de commande et du montant total dans la page 'order.html'
        confirmedOrderId.innerHTML += order.orderId;
        confirmedTotalCost.innerHTML += order.totalCost;

        // Suppression du contenu du sessionStorage après la confirmation de la commande
        sessionStorage.clear();
    }
}