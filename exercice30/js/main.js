// Ajouter à l'input la classe Bootstrap is-valid si le texte que vous entrez dans l'input est supérieur à 5 caractères, ou is-invalid dans le cas contraire. 
// Cette fois, vous utiliserez l'événement keyup sur l'input.

$(function(){

    $("input").keyup(function(){
        var inputValue = $("input").val()

        if (inputValue.length > 5) {
            $("input").addClass("is-valid")
            $("input").remove("is-invalid")
        } else {
            $("input").addClass("is-invalid")
            $("input").remove("is-valid")
        }
        
    });
    
});
