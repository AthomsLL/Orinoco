// Récupération du contenu du localStorage à afficher dans la page 'Panier'
export const cartItems = JSON.parse(localStorage.getItem('cart'));

//Affichage du titre et des produits dans la page 'Panier'
export function appendProductsInViewCart() {

    // Récupération et stockage de la balise h2 dans une variable
    let title = document.querySelector('.section-cart--title');

    // Récupération et stockage dans une variable de la div qui va contenir les éléments du localStorage
    let cartContainer = document.getElementById('cart-container');

    // Si le panier est vide, on affiche le titre "Votre panier est vide"
    if(cartItems.length < 1) {
        title.textContent = 'Votre panier est vide';
    
    // Sinon on affiche le titre "Votre panier :" + la liste des produits stockés dans le localStorage en dessous
    } else {
        title.textContent = 'Votre panier :';

        cartItems.forEach(cartItem => {
            cartContainer.innerHTML += `
                <div class="col-md-9 cart__item-container" data-id="${cartItem.id}" data-color = "${cartItem.color}">
                    <div class="cart__item-img">
                        <div class="cart__item-img--box">
                            <img src="${cartItem.image}" alt="Image de l'ours en peluche ${cartItem.name}"/>
                        </div>
                    </div>
                    <div class="cart__item-infos">
                        <div class="cart__item-name">
                            <h2 class="cart__item-name--title">
                                Ours - ${cartItem.name}
                            </h2>
                        </div>

                        <div class="cart__item-color">
                            <p> Couleur : ${cartItem.color} </p>
                        </div>

                        <div class="cart__item-quantity">
                            <p> Quantité : ${cartItem.quantity} </p>
                        </div>

                        <div>
                            <p class="cart__item-price"> Prix unitaire : ${cartItem.price} € </p>
                        </div>
                    </div>
                    <div class="cart__item-total-price">
                        <h3 class="cart__item-total-price--title">Prix total pour cet article :</h3>
                        <p><span class="item-total-price">${cartItem.quantity * cartItem.price}</span> €</p>
                    </div>
                    <button type="button" class="cart__item-cta" id="btn-delete">
                        <i class="fas fa-times-circle"></i>
                    </button>
                </div>`;
        });
    }
}

