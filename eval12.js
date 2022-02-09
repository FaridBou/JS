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

function addition(nombre1,nombre2) {
    let resultat;
    resultat = nombre1+nombre2;
    return (resultat);
}
function soustraction(nombre1,nombre2) {
    let resultat;
    resultat = nombre1-nombre2;
    return (resultat);
}
function multiplication(nombre1,nombre2) {
    let resultat;
    resultat = nombre1*nombre2;
    return (resultat);
}
function division(nombre1,nombre2) {
    let resultat;
    resultat = nombre1/nombre2;
    return (resultat);
}
function replay() {
    var nombre1;
    while (isNaN(nombre1)) {
        nombre1 = prompt("entre le premier nombre");
    }
    var nombre2;
    while (isNaN(nombre2)) {
        nombre2 = prompt("entre le second nombre");
    }

    nombre1 = parseInt(nombre1);
    nombre2 = parseInt(nombre2);

    var calcul = prompt("choisi un operateur:\n addition\n soustraction\n multiplication\n division ");
    switch (calcul) {
        case "addition":
            alert("resultat = " + addition(nombre1, nombre2));
            break;
        case "soustraction":
            alert("resultat = " + soustraction(nombre1, nombre2));
            break;
        case "multiplication":
            alert("resultat = " + multiplication(nombre1, nombre2));
            break;
        case "division":
            alert("resultat = " + division(nombre1, nombre2));
            break;
        default:
            alert("Faux, nul comme le PSG");
            break;
    }
}
function again() {
    do{
        replay();
    }
    while(confirm("Veux tu rejouer ?"));
}
again();