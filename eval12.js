// Pour voir si tout vas bien jusque ici nous allons créer un calculateur en boite de dialogue
// (une sorte de calculatrice simplifiée).
// Objectif :
//     - Demandez de faire un choix entre addition – soustraction – multiplication – division
// - Indice : pour un retour à la ligne « \n » tant que l’utilisateur ne choisis pas une des quatre
// proposition il serait bien de répéter la question.
// - Demandez de rentrer un nombre, puis un deuxieme
// - Indice : Répéter la demande si un nombre n’est pas rentré, je vous laisse chercher la
// fonction qui permet de checker cela.
// - Crée 4 fonctions correspond aux 4 méthodes de calculs
// - Selon le choix de l’utilisateur appelé la fonction correspondante
// - Affichez le résultat isNaN
// - Proposez à l’utilisateur de recommencer \n\n

alert("Bienvenue dans le supercalculator");

var nombre1,nombre2,resultat,operateur;

var nombre1=prompt("entre le premier nombre");
var nombre2=prompt("entre le second nombre");
var operateur=prompt("entre un operateur");

function add(nombre1,nombre2) {
    resultat=Number(nombre1)+Number(nombre2);
    return(resultat);
}
function div(nombre1,nombre2) {
    resultat=Number(nombre1)/Number(nombre2);
    return(resultat);
}
function mult(nombre1,nombre2) {
    resultat=Number(nombre1)*Number(nombre2);
    return(resultat);
}
function sous(nombre1,nombre2) {
    resultat=Number(nombre1)-Number(nombre2);
    return(resultat);
}
prompt(resultat);