$(document).ready(function() {
    let openingAnimWindow = document.querySelector('#fall');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: true,
        path: 'json/light.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);
});