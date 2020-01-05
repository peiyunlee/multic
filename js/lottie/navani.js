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

    let openingAnimWindow1 = document.querySelector('#a_logo2');
    let openingAnimData1 = {
        container: openingAnimWindow1,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: false,
        path: '../json/logani.json'
    };
    // set bodymovin
    let openingAnim1 = bodymovin.loadAnimation(openingAnimData1);
    var myVar1;
    myVar1 = setTimeout(function() { openingAnim1.play(); }, 750);

    let openingAnimWindow2 = document.querySelector('#a_logo3');
    let openingAnimData2 = {
        container: openingAnimWindow2,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: false,
        path: '../json/logani.json'
    };
    // set bodymovin
    let openingAnim2 = bodymovin.loadAnimation(openingAnimData2);
    var myVar2;
    myVar2 = setTimeout(function() { openingAnim2.play(); }, 750);

});