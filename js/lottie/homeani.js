$(document).ready(function() {
    let openingAnimWindow = document.querySelector('#a_logo');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: true,
        path: '../json/logani.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);
})