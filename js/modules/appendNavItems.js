// Ajout du contenu HTML dans la liste ul "dropdown-list" de la page "Index"
export function appendItemInViewDropdownMenu(item, url) {
    try {
        let dropdownList = document.getElementById('products-menu-list');
        dropdownList.innerHTML += `
            <a class="dropdown-item" href="${url}?id=${item._id}">
                ${item.name}
            </a>`;
    }catch(err) {
        Swal.fire({
            icon: 'error',
            title: 'Oups...',
            text: "Une erreur est survenue pendant l'affichage du menu.",
          })
    }
}