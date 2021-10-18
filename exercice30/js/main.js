// Ajouter à l'input la classe Bootstrap is-valid si le texte que vous entrez dans l'input est supérieur à 5 caractères, ou is-invalid dans le cas contraire. 
// Cette fois, vous utiliserez l'événement keyup sur l'input.

$(function(){

    $("input").keyup(function(){
        if ( $("input").val().length > 5) {
            $("input").addClass("is-valid")
        } else $("input").addClass("is-invalid")
        
    });
    
});
