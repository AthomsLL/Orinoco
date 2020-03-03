// Ajout de la personnalisation des couleurs du produit
export function appendItemColorsInViewProduct(product) {
    try {
        let colors = product.colors;
        let colorSelect = document.getElementById('color-select');
        for (let i = 0; i < colors.length; i++) {
            colorSelect.innerHTML += `
                <option class="item__color-option" value="${colors[i]}">${colors[i]}</option>
            `;
        }
    }catch(err) {
        Swal.fire({
            icon: 'error',
            title: 'Oups...',
            text: "Impossible d'afficher les couleurs pour ce produit.",
          })
    }
}