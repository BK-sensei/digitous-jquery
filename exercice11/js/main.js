// Après avoir cliqué sur le bouton magique : changer la couleur du carré en rouge avec la méthode css

$(function(){
  $("button").click(function(){
    $("#square").css("background-color", "red");
  });
})
