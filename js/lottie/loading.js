$(document).ready(function() {
    let openingAnimWindow = document.querySelector('#loadani');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: false,
        path: '../json/cubeloading.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);
    openingAnim.addEventListener('DOMLoaded', loopanimate);

    function loopanimate() {
        openingAnim.play();
    }
    window.onload = function() {
        console.log(2)
        openingAnim.play();
        $('#load').css('display', 'none');
    };
});