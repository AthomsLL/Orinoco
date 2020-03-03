// Ajout du contenu HTML dans la div "products"
export function appendItemInViewIndex(item) {
    try {
        let products = document.getElementById('products');
        products.innerHTML += `
            <article class="card col-md-5">
                <div class="card__side card__side--front">
                    <div class="card__picture">
                        <img src="${item.imageUrl}" alt="Image de l'ourson ${item.name}">
                    </div>
                    <h3 class="card__heading">
                        ${item.name}
                    </h3>
                    <div class="card__details">
                        <ul>
                            <li>Ours en peluche fait à la main</li>
                            <li>Personnalisable</li>
                            <li>100% naturel</li>
                        </ul>
                    </div>
                </div>
                <div class="card__side card__side--back">
                    <div class="card__cta">
                        <div class="card__price-box">
                            <p class="card__price-only">Seulement</p>
                            <p class="card__price-value">${item.price / 100} €</p>
                        </div>
                        <a href="pages/product.html?id=${item._id}" class="btn btn-outline-danger">
                            <i class="far fa-eye"></i>
                            Voir le produit
                        </a>
                    </div>
                </div>
            </article>`;
    }catch(err) {
        Swal.fire({
            title: 'Désolé',
            text: 'Les teddies sont absents pour le moment. Merci de réessayer plus tard.',
            imageUrl: 'https://res.cloudinary.com/djcmfi03h/image/upload/w_400,f_auto/v1583233217/Orinoco/ourson_triste_sxvkwe.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Image de teddy',
          })
    }
}