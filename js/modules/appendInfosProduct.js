// Ajout des infos produit dans la page produit
export async function appendItemInfosInViewProduct(product) {
    let productImg = document.getElementById('product-img');
    let productName = document.getElementById('product-name');
    let productDescription = document.getElementById('product-description');
    let productPrice = document.getElementById('product-price');

    // Insertion de l'image du produit
    productImg.innerHTML += `<img src="${product.imageUrl}" alt="Image de l'ourson ${product.name}"/>`;

    // Insertion du nom du produit
    productName.textContent += `${product.name}`;

    // Insertion de la description du produit
    productDescription.textContent = `${product.description}`;

    // Insertion du prix du produit 
    productPrice.textContent = `${product.price / 100} €`;
}