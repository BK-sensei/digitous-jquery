// Le texte Konexio! est dans le code HTML mais invisible à l'oeil de l'utilisateur. Après avoir cliqué sur le bouton magique : faites le apparaître avec la méthode show. 

$(function(){
    $("button").click(function(){
        $("#text").show(3000, function() {
        });
    });
})

// A quelle règle CSS correspond la méthode show ?
//---> display: block