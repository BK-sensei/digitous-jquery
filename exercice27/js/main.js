// Après avoir cliqué sur le bouton magique : ajouter la classe Bootstrap is-valid à l'input

$(function(){

    $("button").click(function(){
        $("input").addClass("is-valid");
    });
    
});