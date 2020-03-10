export function numberOfItemsInCart() {
    // Sélection de la div contenant la quantité de produits dans le panier
    let itemsQty = document.querySelector('.cart-qty');

    // Insertion de la quantité de produits dans le contenu de la div
    itemsQty.innerHTML = JSON.parse(localStorage.getItem('cart')).length;
}