let inputUserSelector = document.querySelector("#inputUser");
let buttonSelector = document.querySelector("#validUser");
let affichage = document.querySelector("#input");
let compteur = 1;
//Etape 3 - Générer un nombre aléatoire

let randNumb = Math.floor(Math.random()*1000);

//Etape 4 - Vérifier que l'utilisateur donne bien un nombre

buttonSelector.addEventListener("click", verification);

function rappel() {
    affichage = Number(inputUserSelector.value);
    if (compteur === 1) {
        inputUserSelector.textContent = 'Choix précédent: ';
    }
    inputUserSelector.textContent += inputUser + ' ';
}
function verification(){
    let inputUser = inputUserSelector.value;
        if(inputUser < randNumb){
            affichage.textContent = "C'est plus !";
        }else if (inputUser > randNumb) {
            affichage.textContent = "C'est moins";
        }else {
            affichage.textContent = "Bravo c'est gagné";
        }
    inputUserSelector.focus();
    compteur++;
}