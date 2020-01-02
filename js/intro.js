$(document).ready(function () {

    $('#btn_hscroll').click(function () {
        $('html,body').animate({
            scrollTop: $('#section1').offset().top
        }, 1000);
    });

    $('#btn_sec1scroll').click(function () {
        $('html,body').animate({
            scrollTop: $('#section2').offset().top
        }, 1000);
    });

    $('#btn_sec2scroll').click(function () {
        $('html,body').animate({
            scrollTop: $('#section1').offset().top
        }, 1000);
    });

    $('#btn_sec2scroll2').click(function () {
        $('html,body').animate({
            scrollTop: $('#section1').offset().top
        }, 1000);
    });


    
    //list
    let current = 1
    let color = ["#FF5C85","#D33E40","#258EBA","#C04893","#A2CEDB"]

    $('#btn_right').click(function () {
        $("#city"+current).removeClass("city_current");
        current++
        if(current == 6) current = 1
        $("#city"+current).addClass("city_current");
        $("#citycross").css("fill",color[current-1])
    })

    $('#btn_left').click(function () {
        $("#city"+current).removeClass("city_current");
        current--
        if(current == 0) current = 5
        $("#city"+current).addClass("city_current");
        $("#citycross").css("fill",color[current-1])
    })


    //music
    var audio = []
    for (var i = 0; i < 14; i++) {
        audio[i] = new Audio('../Maroon 5 - Sugar_cut.mp3')
    }


    $('#btn_play1').click(function () {
        audio[0].play()
        $('#btn_pause1').css("display", "block")
        $('#btn_play1').css("display", "none")
    });
    $('#btn_pause1').click(function () {
        audio[0].pause()
        $('#btn_play1').css("display", "block")
        $('#btn_pause1').css("display", "none")
    });

    $('#btn_play2').click(function () {
        audio[1].play()
        $('#btn_pause2').css("display", "block")
        $('#btn_play2').css("display", "none")
    });
    $('#btn_pause2').click(function () {
        audio[1].pause()
        $('#btn_play2').css("display", "block")
        $('#btn_pause2').css("display", "none")
    });

    $('#btn_play3').click(function () {
        audio[2].play()
        $('#btn_pause3').css("display", "block")
        $('#btn_play3').css("display", "none")
    });
    $('#btn_pause3').click(function () {
        audio[2].pause()
        $('#btn_play3').css("display", "block")
        $('#btn_pause3').css("display", "none")
    });

    $('#btn_play4').click(function () {
        audio[3].play()
        $('#btn_pause4').css("display", "block")
        $('#btn_play4').css("display", "none")
    });
    $('#btn_pause4').click(function () {
        audio[3].pause()
        $('#btn_play4').css("display", "block")
        $('#btn_pause4').css("display", "none")
    });

    $('#btn_play5').click(function () {
        audio[4].play()
        $('#btn_pause5').css("display", "block")
        $('#btn_play5').css("display", "none")
    });
    $('#btn_pause5').click(function () {
        audio[4].pause()
        $('#btn_play5').css("display", "block")
        $('#btn_pause5').css("display", "none")
    });

    $('#btn_play6').click(function () {
        audio[5].play()
        $('#btn_pause6').css("display", "block")
        $('#btn_play6').css("display", "none")
    });
    $('#btn_pause6').click(function () {
        audio[5].pause()
        $('#btn_play6').css("display", "block")
        $('#btn_pause6').css("display", "none")
    });

    $('#btn_play7').click(function () {
        audio[6].play()
        $('#btn_pause7').css("display", "block")
        $('#btn_play7').css("display", "none")
    });
    $('#btn_pause7').click(function () {
        audio[6].pause()
        $('#btn_play7').css("display", "block")
        $('#btn_pause7').css("display", "none")
    });

    //8
})

// 	// ScrollMagic
// 	var controller = new ScrollMagic.Controller();

// 	// ar_sec1-1
// 	new ScrollMagic.Scene({
// 		triggerElement: "#ar_sec1-1",
// 		offset:-300,
// 	}).setClassToggle(".con_ar", "con_aranim").reverse(false).addTo(controller);

// 	// ar_main
// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_intro1",
// 		offset:100,
// 	}).setClassToggle("#con_armain1", "con_armain_anim").reverse(false).addTo(controller);

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_intro2",
// 		offset:100,
// 	}).setClassToggle("#con_armain2", "con_armain_anim").reverse(false).addTo(controller);

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_intro3",
// 		offset:100,
// 	}).setClassToggle("#con_armain3", "con_armain_anim").reverse(false).addTo(controller);

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_intro4",
// 		offset:100,
// 	}).setClassToggle("#con_armain4", "con_armain_anim").reverse(false).addTo(controller);

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_intro5",
// 		offset:100,
// 	}).setClassToggle("#con_armain5", "con_armain_anim").reverse(false).addTo(controller);

// // img_anim
// new ScrollMagic.Scene({
// 	triggerElement: "#sec_intro1",
// 	offset:100,
// }).setClassToggle(".img_secphill", "img_anim").reverse(false).addTo(controller);

// new ScrollMagic.Scene({
// 	triggerElement: "#sec_intro2",
// 	offset:100,
// }).setClassToggle(".img_secodelia", "img_anim").reverse(false).addTo(controller);

// new ScrollMagic.Scene({
// 	triggerElement: "#sec_intro3",
// 	offset:100,
// }).setClassToggle(".img_secbill", "img_anim").reverse(false).addTo(controller);

// new ScrollMagic.Scene({
// 	triggerElement: "#sec_intro4",
// 	offset:100,
// }).setClassToggle(".img_secjulie", "img_anim").reverse(false).addTo(controller);

// new ScrollMagic.Scene({
// 	triggerElement: "#sec_intro5",
// 	offset:100,
// }).setClassToggle(".img_secdana", "img_anim").reverse(false).addTo(controller);

// // box

// new ScrollMagic.Scene({
// 	triggerElement: "#sec_intro1",
// 	offset:100,
// }).setClassToggle("#box_sileft1", "box_siright_anim").reverse(false).addTo(controller);

// new ScrollMagic.Scene({
// 	triggerElement: "#sec_intro2",
// 	offset:100,
// }).setClassToggle("#box_siright1", "box_sileft_anim").reverse(false).addTo(controller);

// new ScrollMagic.Scene({
// 	triggerElement: "#sec_intro3",
// 	offset:100,
// }).setClassToggle("#box_sileft2", "box_siright_anim").reverse(false).addTo(controller);

// new ScrollMagic.Scene({
// 	triggerElement: "#sec_intro4",
// 	offset:100,
// }).setClassToggle("#box_siright2", "box_sileft_anim").reverse(false).addTo(controller);

// new ScrollMagic.Scene({
// 	triggerElement: "#sec_intro5",
// 	offset:100,
// }).setClassToggle("#box_sileft3", "box_siright_anim").reverse(false).addTo(controller);


// });