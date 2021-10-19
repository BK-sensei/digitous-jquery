// Après avoir cliqué sur le bouton magique : ajouter le texte Konexio! dans la boîte rouge avec la méthode html

$(function(){
    $("button").click(function(){
        $("#text").html("Konexio!");
    });
})