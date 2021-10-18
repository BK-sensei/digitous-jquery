// Le texte Konexio! est dans le code HTML mais invisible à l'oeil de l'utilisateur. Faites le apparaître après un clic sur le bouton magique. Ce bouton appelera une fonction que vous aurez créé et qui affichera le texte avec la méthode css

function showHiddenText() {
    $('#exercise #text').show();
}

$("button").click(function(showHiddenText){
    $("#text").show(3000, function() {
      console.log("Animation terminée !"); // callback optionnelle appelée après 3 secondes
    });
  });