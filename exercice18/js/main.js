// Après avoir cliqué sur le bouton magique : faites disparaître avec la méthode hide. 

$("button").click(function(){
    $("#text").hide(3000, function() {
    });
});

// A quelle règle CSS correspond la méthode hide ?
//---> visibility: hidden;