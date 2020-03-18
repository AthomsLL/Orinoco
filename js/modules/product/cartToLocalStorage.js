export function sendCartToLocalStorage(object) {
    try {
        // Stockage du contenu du localStorage dans une variable "cart", si le contenu du localStorage est vide, crée un array vide
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Condition pour véirifer si le panier est vide
        if(!cart) {

            // Insertion des informations du produit au localStorage
            localStorage.setItem('cart', JSON.stringify(object));

        } else {
            let itemHasChanged = false;

            /* Boucle sur cart qui vérifie si produit existe et si la couleur est identique */
            for (let i = 0 ; i < cart.length ; i++) {
                try {
                    // Si la couleur et le nom sont identiques, on ajoute la quantité du produit existant avec celle de l'objet ajouté
                    if ((cart[i].name == object.name) && (cart[i].color == object.color)) {
                        let cartQuantity = parseInt(cart[i].quantity, 10);
                        let objectQuantity = parseInt(object.quantity, 10);
                        let sumQuantity = cartQuantity + objectQuantity;
                        cart[i].quantity = sumQuantity.toString();
                        itemHasChanged = true;
                    }
                } catch (error) {
                    console.log(error);
                }
            }

            // Si le produit cliqué (infosObject) n'existe pas dans le panier (localStorage), on le push dans l'array 'cart'
            if(itemHasChanged == false) { 
                cart.push(object);
            }

            // Puis insertion du nouvel objet mis à jour dans le localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Oups...',
            text: 'Une erreur est survenue !',
        })
    }
}