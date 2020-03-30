// CONSTANTES
const UrlAPI = "http://localhost:3000/api";

// Récupération des informations des items via l'API
export async function fetchAPI(endpoint, method='GET', body=null) {
   try {
    let url = UrlAPI + endpoint;
    let response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body,
        method, 
        });
    let jsonResponse = await response.json();
    console.log("donnees api", jsonResponse);
    return jsonResponse;
   } catch(err) {
        Swal.fire({
            icon: 'error',
            title: 'Oups une erreur est survenue.',
            text: "Impossible de communiquer avec l'API.",
        })
   }
}