// Après avoir cliqué sur le bouton magique : déplacer l'image de 100 pixels vers la droite avec animate

$(function(){
    $("button").click(function(){
        $("#bg").animate({
            'margin-left': '+=100px',
        }, 3000)
    });
})