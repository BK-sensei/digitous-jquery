// Après avoir cliqué sur le bouton magique : ajouter à l'input la classe Bootstrap is-valid si le texte que vous entrez dans l'input est supérieur à 5 caractères, ou is-invalid dans le cas contraire

$(function(){

    $("button").click(function(){
        if ($("input").val().length > 5) {
            $("input").addClass("is-valid")
        } else $("input").addClass("is-invalid")
        
    });
    
});


