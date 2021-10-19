// Après avoir cliqué sur le bouton magique : ajouter l'attribut class de valeur float-right sur le texte avec la méthode addClass

$(function(){
    $("button").click(function(){
        $("#text").addClass('float-right');
    });
})