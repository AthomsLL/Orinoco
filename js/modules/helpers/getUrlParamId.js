// On récupère la valeur de l'URL parameter équivalant à "id= ..." et on la stocke dans une constante
function getUrlParam(name) {
    try {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Oups...',
            text: 'Les paramètres URL semblent absents !',
        })
    }
};

console.log(getUrlParam('id'));


export const Id = getUrlParam('id');