/* IMPORTS */
import {getCartFromLocalStorage} from './getCartFromLocalStorage.js';

export function deleteItemOnCart() {
    let teddyBears = getCartFromLocalStorage();

    // Création d'un array contenant tous les produits affichés sur la page "Panier"
    const cartListItems = [...document.getElementsByClassName('cart__item-container')];

    // Création d'un array contenant les boutons "Supprimer" de chaque produit
    const buttonsDelete = [...document.getElementsByClassName('cart__item-cta')];
    
    for(let i = 0; i < cartListItems.length; i++) {
        // Récupération et stockage dans des variables de l'ID et de la couleur du produit à supprimer
        const id = cartListItems[i].dataset.id;
        const color = cartListItems[i].dataset.color;

        for(let n = 0; n < teddyBears.length; n++) {
            if(teddyBears[n].id == id && teddyBears[n].color == color) {
                let deleteIndex = n;

                buttonsDelete[i].addEventListener("click", () => {
                    // On retire l'index du produit à supprimer
                    teddyBears.splice(deleteIndex, 1);
        
                    // Puis on renvoie le panier mis à jour au localStorage
                    localStorage.setItem("cart", JSON.stringify(teddyBears));
        
                    // Affichage d'un message de confirmation de suppression
                    Swal.fire({
                        icon: 'success',
                        text: 'Le produit a bien été supprimé du panier !',
                      })
        
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000);
                })
            }
        }        
    }
}