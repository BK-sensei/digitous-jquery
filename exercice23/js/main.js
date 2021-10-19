// Après avoir cliqué sur le bouton magique : mettre le carré en bas à droite de la boîte blanche avec la méthode animate.

$(function(){
  $("button").click(function(){
    $("#square").animate({
        right: '0px',
        bottom: '0px',
    }, 3000, function() { 

    });
});
})