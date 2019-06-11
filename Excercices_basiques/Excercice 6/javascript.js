alert("Ceci est un message d'avertissement")

console.log("Ceci est un message qui permet le debugguage")

var nom = prompt("Votre nom est :");

var prenom = prompt("Votre prénom est :");
alert("Votre nom d'utilisateur est :" + nom + " " + prenom);

function don_de_bille() {
    var billes = 14
    
    var demand = prompt("Combien de bille voulez-vous ?");
    if (billes <= demande) {
        alert("Tu n'es vraiment pas gentil, je ne peux pas t'en donner autant");
        don_de_bille();
    } else if (billes > demande) {

    var rest = billes - demande
        alert("D'accord, tu m'en a pris " + demande + " et il m'en reste" + reste);
    }
}

don_de_bille();