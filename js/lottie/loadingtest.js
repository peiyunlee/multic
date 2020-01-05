window.onload = function() {

    $('#loader').hide(20000);
}
$(document).ready(function() {
    let openingAnimWindow = document.querySelector('#loader');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: true,
        path: '../json/cubeloading.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);

});