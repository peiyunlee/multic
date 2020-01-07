$(document).ready(function() {
    let openingAnimWindow = document.querySelector('#loadani');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: false,
        path: 'https://assets2.lottiefiles.com/packages/lf20_SJ8Jxv.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);
    openingAnim.addEventListener('data_ready', loopanimate);

    function loopanimate() {
        openingAnim.playSegments([0, 16], false);
        console.log(1)
    }
    window.onload = function() {
        console.log(2)
        animate();
    };

    function animate() {
        console.log(3)
        openingAnim.loop = false;
        openingAnim.playSegments([0, 41], true);
        openingAnim.addEventListener('complete', animatend);

        function animatend() {
            console.log(4)
            $('#load').css('opacity', '0');
            $('#load').css('z-index', '-999');
        }
    }
});