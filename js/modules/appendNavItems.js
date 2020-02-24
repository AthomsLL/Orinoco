// Ajout du contenu HTML dans la liste ul "dropdown-list" de la page "Index"
export async function appendItemInViewDropdownMenu(item, url) {
    let dropdownList = document.getElementById('products-menu-list');
    dropdownList.innerHTML += `
        <a class="dropdown-item" href="${url}?id=${item._id}">
            ${item.name}
        </a>
    `;
}