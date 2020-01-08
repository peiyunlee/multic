$(document).ready(function() {
    let openingAnimWindow = document.querySelector('#img_hclogo');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: false,
        path: './json/logotype.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);

    var myVar;
    myVar = setTimeout(function() { openingAnim.play(); }, 2500);

});