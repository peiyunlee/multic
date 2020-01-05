$(document).ready(function() {
    let openingAnimWindow = document.querySelector('#lottie3');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: true,
        path: '../json/box.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);

    openingAnim.addEventListener('complete', loopanimate);

    function loopanimate() {
        openingAnim.goToAndPlay(300);
    }

});