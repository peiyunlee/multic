$(document).ready(function() {
    let openingAnimWindow = document.querySelector('#a_logo');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: false,
        path: '../json/logani.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);
    var myVar;
    myVar = setTimeout(function() { openingAnim.play(); }, 750);
});