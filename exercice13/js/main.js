// Après avoir cliqué sur le bouton magique : changer la taille de la police de caractère à 50 pixels avec la méthode css

$(function(){
    $("button").click(function () {
        $("#text").css('font-size', "50px");   
    });
})