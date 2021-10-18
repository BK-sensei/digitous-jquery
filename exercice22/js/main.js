// Après avoir cliqué sur le bouton magique : changer la taille de la police de caractère à 50 pixels avec la méthode animate

$("button").click(function(){
    $("#text").animate({
        'font-size': '+=34px',
    }, 3000, function() { 
      console.log("animation terminée !");
    });
});