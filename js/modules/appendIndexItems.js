// Ajout du contenu HTML dans la div "products"
export async function appendItemInViewIndex(item) {
    let products = document.getElementById('products');
    products.innerHTML += `
        <article class="products__list--item col-md-5">
            <div class="products__img-box">
                <img src="${item.imageUrl}" alt="Image de l'ourson ${item.name}">
            </div>
            <div class="products__details-box">
                <h3 class="products__item-name">${item.name}</h3>
                <p class="products__price">${item.price / 100} €</p>
                <a href="pages/product.html?id=${item._id}" class="btn btn-outline-info">
                    <i class="far fa-eye"></i>
                    Voir le produit
                </a>
            </div>
        </article>
    `;
}