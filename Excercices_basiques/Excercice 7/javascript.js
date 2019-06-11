function contrôle_identite() {
    
    var age = prompt ("Quel age avez vous ?");
    
    if ("18"){
        alert("Vous êtes majeur");
        contrôle_identite();
    }
    else if (0 > 17){
        alert ("Vous n'êtes pas majeur")
    }
}

contrôle_identite();