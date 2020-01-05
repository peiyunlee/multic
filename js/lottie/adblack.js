$(document).ready(function() {
    let openingAnimWindow = document.querySelector('#lottie2');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: true,
        path: './json/adblack.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);

    openingAnim.addEventListener('complete', loopanimate);

    function loopanimate() {
        openingAnim.goToAndPlay(1000);
    }

});