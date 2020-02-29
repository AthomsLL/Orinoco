// Ajout du contenu HTML dans la liste ul "dropdown-list" de la page "Index"
export function appendItemInViewDropdownMenu(item, url) {
    try {
        /* let dropdownList = document.getElementById('products-menu-list');
        dropdownList.innerHTML += `
            <a class="dropdown-item" href="${url}?id=${item._id}">
                ${item.name}
            </a>`; */
        
        let dropdownItems = [...document.getElementsByClassName('dropdown-item')];
        console.log(dropdownItems)
        
        for (let dropdownItem of dropdownItems) {
            dropdownItem.setAttribute('href', `${url}?id=${item._id}`);
            dropdownItem.textContent = `${item.name}`;
        }
    }catch(err) {
        alert(err);
    }
}