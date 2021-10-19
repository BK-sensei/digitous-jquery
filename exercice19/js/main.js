// On ne peut pas écrire dans l'input. Après avoir cliquer sur le bouton magique, rendre l'input éditable

$(function(){
    $("button").click(function(){
        $("input").attr("disabled", false);
    });
})