// Focntion test affichage infos API
fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(data => {
        console.log("donnees api", data)
    })

// CONSTANTES
const UrlAPI = "http://localhost:3000/api";

// Lancement des fonctions quand la page est chargée
window.onload = () => {
    initItemsInIndex();
}

// Affichage d'un article pour chaque item produit
async function initItemsInIndex() {
    let items = await fetchAPI('/teddies');
    for(let i = 0; i < items.length; i++) {
        await appendItemInView(items[i]);
    }
}

// Ajout du contenu HTML dans la div "products"
async function appendItemInView(item) {
    let products = document.getElementById('products');
    let article = document.createElement('article');
    article.classList.add('products__list--item');
    article.innerHTML = `
        <div class="products__img-box">
            <img src="${item.imageUrl}" alt="Image de l'ourson ${item.name}">
        </div>
        <div class="products__details-box">
            <h3 class="products__item-name">${item.name}</h3>
            <p class="product__price">${item.price} €</p>
            <a href="#" class="btn btn-view">Voir le produit</a>
        </div>
        `;
    products.append(article);
}

// Récupération des informations des items via l'API
async function fetchAPI(endpoint, method='get', body=null) {
    let url = UrlAPI + endpoint;
    let response = await fetch(url, {
        body,
        method, 
        });
    let jsonResponse = await response.json();
    return jsonResponse;
}