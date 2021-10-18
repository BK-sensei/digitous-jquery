// Après avoir cliqué sur le bouton magique : changer la largeur du carré à 500 pixels avec la méthode css

$("button").click('resize', function() {
    $(square).width( 500 );
});