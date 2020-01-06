$(document).ready(function() {
    let openingAnimWindow = document.querySelector('#lottie4');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: 3,
        prerender: true,
        autoplay: true,
        path: './json/page2tx.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);

    // openingAnim.addEventListener('complete', loopanimate);

    // function loopanimate() {
    //     openingAnim.goToAndPlay(30900);
    // }
});