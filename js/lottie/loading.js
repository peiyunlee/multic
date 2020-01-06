$(document).ready(function() {
    let openingAnimWindow = document.querySelector('#loadani');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: false,
        path: 'https://assets2.lottiefiles.com/packages/lf20_SJ8Jxv.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);
    openingAnim.addEventListener('DOMLoaded', loopanimate);

    function loopanimate() {
        openingAnim.playSegments([0, 16], true);
        console.log(1)
    }
    window.onload = function() {
        console.log(2)
        animate();
    };

    function animate() {
        console.log(3)
        openingAnim.addEventListener('complete', animatend);
        openingAnim.playSegments([0, 41], true);

        function animatend() {
            console.log(4)
            $('#load').css('display', 'none');
        }

    }
});