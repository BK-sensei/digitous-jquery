// Après avoir cliqué sur le bouton magique : mettre le carré en bas à droite de la boîte blanche avec la méthode animate.

$("button").click(function(){
    $("#square").animate({
        left: '380px',
        top: '180px',
    }, 3000, function() { 
      console.log("animation terminée !");
    });
});