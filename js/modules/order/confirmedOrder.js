// Récupération du contenu du sessionStorage
const order = JSON.parse(sessionStorage.getItem('order'));

// Fonction permettant d'afficher le numéro de commande et le prix total sur la page de confirmation
export function confirmedOrder() {
    // Récupération et stockage dans des variables des span qui afficheront le numéro de commande et le prix total
    let confirmedOrderId = document.getElementById('order-id');
    let confirmedTotalCost = document.getElementById('total-cost');

    // Affichage de l'id de commande et du montant total dans la page 'order.html'
    confirmedOrderId.innerHTML += order.orderId;
    confirmedTotalCost.innerHTML += order.totalCost;
}