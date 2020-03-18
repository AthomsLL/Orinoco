export function numberOfItemsInCart() {
    // Récupération et stockage dans une variable du nombre de produits contenus dans le localStorage
    const cart = JSON.parse(localStorage.getItem('cart'));

    // Sélection de la div contenant la quantité de produits dans le panier
    let itemsQty = document.querySelector('.cart-qty');

    // Si le localStorage ne contient rien, afficher "0"
    if(cart == null || cart.length < 1) {
        itemsQty.innerHTML = 0;
    } else {
        // Insertion de la quantité de produits dans le contenu de la div
        itemsQty.innerHTML = cart.length;
    }
}