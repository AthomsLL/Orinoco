// Ajout de la personnalisation des couleurs du produit
export async function appendItemColorsInViewProduct(product) {
    let colors = product.colors;
    let colorSelect = document.getElementById('color-select');
    for (let i = 0; i < colors.length; i++) {
        colorSelect.innerHTML += `
            <option value="${colors[i]}">${colors[i]}</option>
        `;
    }
}