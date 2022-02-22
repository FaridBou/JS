class Personnage {
    constructor(pseudo, classe, sante, attaque, niveau=1) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = niveau;
    }evoluer() {
        this.niveau++;
        console.log(this.pseudo + " passe au niveau " + this.niveau);
    }verifierSante(){
            if (this.sante <= 0) {
                this.sante == 0;
                console.log(this.pseudo + " a perdu!");
            }else{
                console.log(this.pseudo+" a "+this.sante+" points de vie")
            }
    }
    get informations() {
        return this.pseudo + " le " + this.classe + " a " + this.sante + " points" +
            " de vie" + " , il est au niveau " + this.niveau;
    }
}
class Magicien extends Personnage{
    constructor(pseudo, classe, sante, attaque, niveau) {
        super(pseudo, "magicien", 170, 90, niveau);

    }attaquer(ennemi) {
        ennemi.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + ennemi.pseudo + " en lancant un sort de " + this.attaque + " points de degats")
        this.evoluer();
        ennemi.verifierSante();

    }coupSpecial(ennemi) {
        ennemi.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes " + ennemi.pseudo + " de " + this.attaque * 5+ " points de degats")
        this.evoluer();
        ennemi.verifierSante();
    }
}

class Guerrier extends Personnage{
    constructor(pseudo, classe, sante, attaque, niveau) {
        super(pseudo, "guerrier", 350, 50, niveau);

    }attaquer(ennemi) {
        ennemi.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + ennemi.pseudo + " avec son épée et fait " + this.attaque + " points de degats")
        this.evoluer();
        ennemi.verifierSante();

    }coupSpecial(ennemi) {
        ennemi.sante -= this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial haches de guerre " + ennemi.pseudo + " de " + this.attaque + " points de degats")
        this.evoluer();
        ennemi.verifierSante();
    }
}
let merlin = new Magicien("Merlin")
let aragorn = new Guerrier("Aragorn")

console.log(aragorn.informations);
console.log(merlin.informations);
merlin.attaquer(aragorn);
console.log(aragorn.informations);
aragorn.attaquer(merlin);
console.log(merlin.informations);
merlin.coupSpecial(aragorn);