// Après avoir cliqué sur le bouton magique : afficher dans la console, le texte dans l'input avec la méthode val

$(function(){

    $("button").click(function(){
        console.log($("input").val());
    });
    
});