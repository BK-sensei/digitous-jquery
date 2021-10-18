// Après avoir cliqué sur le bouton magique : ajouter à l'input la classe Bootstrap is-valid si le texte que vous entrez dans l'input est supérieur à 5 caractères, ou is-invalid dans le cas contraire

$(function(){

    $("button").click(function(){
        // var inputValue = $("input").val()
        if ( $("input").val().length > 5) {
            $("input").addClass("is-valid")
        } else $("input").addClass("is-invalid")
        
    });
    
});



// $(function(){

//     $("button").click(function(){
//         var inputValue = $("input").val()
//         if (inputValue.length > 5) {
//             $("input").addClass("is-valid")
//         } else $("input").addClass("is-invalid")
        
//     });
    
// });

