// CONSTANTES
const UrlAPI = "http://localhost:3000/api";

// Récupération des informations des items via l'API
export async function fetchAPI(endpoint, method='get', body=null) {
   try {
    let url = UrlAPI + endpoint;
    let response = await fetch(url, {
        body,
        method, 
        });
    let jsonResponse = await response.json();
    console.log("donnees api", jsonResponse);
    return jsonResponse;
   }catch(err) {
       alert(err);
   }
}