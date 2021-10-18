// Le texte Konexio! est dans le code HTML mais invisible à l'oeil de l'utilisateur. Faites le apparaître après un clic sur le bouton magique. Ce bouton appelera la fonction displaySecretText.

$("button").click(function(displaySecretText){
  $("#text").show(3000, function() {
    console.log("Animation terminée !"); // callback optionnelle appelée après 3 secondes
  });
});

