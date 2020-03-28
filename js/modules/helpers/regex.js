// Vérifications pour la validation du formulaire

/*
[A-Z]? 0 ou 1
[A-Z]+ 1 ou plusieurs
[A-Z]* 0 ou plusieurs

const postalCode = 75000;
const regex = /^[0-9]{5}$/;
const boolean = regex.test(postalCode) ? 'YES' : 'WRONG'; 
*/

// Regex pour la vérification du prénom et du nom de famille
export const nameRegex = /^([a-zA-Z\u00C0-\u00FF]+([\s'-.]?)[a-zA-Z\u00C0-\u00FF]+)$/;

/* // Regex pour la vérification de l'adresse
export const addressRegex; */

// Regex pour la vérification de la ville
export const cityRegex = /^([a-zA-Z\u00C0-\u00FF]+([\s'-.]?)[a-zA-Z\u00C0-\u00FF]+)$/;

// Regex pour la vérification de l'email
export const emailRegex = /^.+\@\S+\.\S+$/;
