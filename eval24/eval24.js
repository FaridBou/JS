let inputUserSelector = document.querySelector("#inputUser");
let buttonSelector = document.querySelector("#validUser");
let affichage = document.querySelector("#input");
let compteur = 1;
//Etape 3 - Générer un nombre aléatoire

let randNumb = Math.floor(Math.random()*1000);

//Etape 4 - Vérifier que l'utilisateur donne bien un nombre

buttonSelector.addEventListener("click", verification);

function rappel() {
    affichage = inputUserSelector.value;  //pas la peine de convertir à ce moment
    if (compteur === 1) {
        inputUserSelector.textContent = 'Choix précédent: ';
    }
    inputUserSelector.textContent += inputUser + ' ';
}

function verification(){
    let inputUser = inputUserSelector.value;
        //Tu n'a pas fait la gestion des erreur     
    if(inputUser < 0 || inputUser > 1000 || isNaN(inputUser) || inputUser === ""){ //si plus petit que 0 ou plus grand que 1000 ou pas un nombre ou vide
        affichage.textContent = "Saisis incorrecte !";  //Affiche une erreur
        }else{                                          //sinon continue le code
            if(inputUser < randNumb){
                affichage.textContent = "C'est plus !";
            }else if (inputUser > randNumb) {
                affichage.textContent = "C'est moins";
            }else {
                affichage.textContent = "Bravo c'est gagné";
            }
        }
    
    inputUserSelector.focus();
    compteur++;
}