// Après avoir cliqué sur le bouton magique : animer la largeur du carré à 500 pixels avec la méthode animate

$("button").click(function(){
    $("#square").animate({
        width: '+=400px'
    }, 3000, function() { 
      console.log("animation terminée !");
    });
});