import {getCartFromLocalStorage} from './getCartFromLocalStorage.js';

//Affichage du titre et des produits dans la page 'Panier'
export function appendProductsInViewCart() {
    let teddyBears = getCartFromLocalStorage();

    // Récupération et stockage de la balise h2 dans une variable
    let title = document.querySelector('.section-cart--title');

    // Récupération et stockage dans une variable de la div qui va contenir les éléments du localStorage
    let cartContainer = document.getElementById('cart-container');

    // Si le panier est vide, on affiche le titre "Votre panier est vide"
    if(!teddyBears || teddyBears.length == 0) {
        title.textContent = 'Votre panier est vide';
    
    // Sinon on affiche le titre "Votre panier :" + la liste des produits stockés dans le localStorage en dessous
    } else {
        title.textContent = 'Votre panier :';

        teddyBears.forEach(cartItem => {
            cartContainer.innerHTML += `
                <div class="col-md-9 cart__item-container" data-id="${cartItem.Id}" data-color = "${cartItem.Color}">
                    <div class="cart__item-img">
                        <div class="cart__item-img--box">
                            <img src="${cartItem.Image}" alt="Image de l'ours en peluche ${cartItem.Name}"/>
                        </div>
                    </div>
                    <div class="cart__item-infos">
                        <div class="cart__item-name">
                            <h2 class="cart__item-name--title">
                                Ours - ${cartItem.Name}
                            </h2>
                        </div>

                        <div class="cart__item-color">
                            <p> Couleur : ${cartItem.Color} </p>
                        </div>

                        <div class="cart__item-quantity">
                            <p> Quantité : ${cartItem.Quantity} </p>
                        </div>

                        <div>
                            <p class="cart__item-price"> Prix unitaire : ${cartItem.Price} € </p>
                        </div>
                    </div>
                    <div class="cart__item-total-price">
                        <h3 class="cart__item-total-price--title">Prix total pour cet article :</h3>
                        <p><span class="item-total-price">${cartItem.Quantity * cartItem.Price}</span> €</p>
                    </div>
                    <button type="button" class="cart__item-cta" id="btn-delete">
                        <i class="fas fa-times-circle"></i>
                    </button>
                </div>`;
        });
    }
}

