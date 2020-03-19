// Ajout des infos produit dans la page produit
export function appendItemInfosInViewProduct(product) {
    try {
        let productImg = document.getElementById('product-img');
        let productName = document.getElementById('product-name');
        let productDescription = document.getElementById('product-description');
        let productPrice = document.getElementById('product-price');
        let colorSelect = document.getElementById('color-select');
        let colors = product.Colors;

        // Insertion de l'image du produit
        productImg.innerHTML += `<img src="${product.Image}" alt="Image de l'ourson ${product.Name}"/>`;

        // Insertion du nom du produit
        productName.textContent += `${product.Name}`;

        // Insertion de la description du produit
        productDescription.textContent = `${product.Description}`;

        // Insertion des couleurs disponibles du produit
        for (let i = 0; i < colors.length; i++) {
            colorSelect.innerHTML += 
                `<option class="item__color-option" value="${colors[i]}">${colors[i]}</option>`;
        }

        // Insertion du prix du produit 
        productPrice.textContent = `${product.Price} €`;

    } catch(err) {
        Swal.fire({
            icon: 'error',
            title: 'Oups...',
            html: "Impossible d'afficher les informations du produit. <br/> Merci de réessayer plus tard",
          })
    }
}