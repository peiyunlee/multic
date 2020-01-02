$(document).ready(function() {

    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: "#sec_plays",
        offset: 100,
    }).setClassToggle(".sw", "upshow").reverse(false).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#sec_plays",
        offset: 100,
    }).setClassToggle(".wdm", "upshow").reverse(false).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#sec_plays",
        offset: 100,
    }).setClassToggle(".iframe", "upshow_i").reverse(false).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#sec_plays",
        offset: 100,
    }).setClassToggle(".ca", "upshow").reverse(false).addTo(controller);
});