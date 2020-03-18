// Déclaration d'une variable qui contiendra le prix total de tous les articles
let itemTotalCost = 0;

// Récupération du paragraphe qui affichera le montant total de la commande et stockage dans une constante
const cartTotalCost = document.querySelector('.cart-total-cost--text');

// Fonction qui va contenir le montant total de la commande
export function appendCartTotalCostInViewCart() {

    // Récupération des prix totaux de chaque article*quantité sous forme d'array
    const ItemsTotalPrice = [...document.getElementsByClassName('item-total-price')];

    // Boucle permettant de récupérer chaque valeur "string" de chaque item de l'array et conversion en nombre
    ItemsTotalPrice.forEach(item => {
        let itemTotalPriceNumber = parseInt(item.innerHTML, 10);
        // Puis ajout du nombre converti à la variable déclarée plus haut
        itemTotalCost += itemTotalPriceNumber;
    })

    // Si la variable "itemTotalPrice" est = à 0 alors on affiche "0 €" sur la page "Panier"
    if(itemTotalCost == 0) {
        cartTotalCost.innerHTML = "0 €";
        
    // Sinon on affiche la valeur de la variable "itemTotalPrice" + "€"
    } else {
        cartTotalCost.innerHTML = itemTotalCost + "€";
    }
}