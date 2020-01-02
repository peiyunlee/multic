$(document).ready(function () {

    $('#btn_hscroll').click(function () {
        $('html,body').animate({
            scrollTop: $('#section1').offset().top
        }, 1000);
        console.log("aa");
    });


    //list
    let current = 1
    let color = ["#FF5C85","#D33E40","#258EBA","#C04893","#A2CEDB"]

    $('#btn_right').click(function () {
        $("#li"+current).removeClass("list_current");
        $("#li"+current).css("border","none")
        $("#content"+current).removeClass("c_current");
        $("#tcm"+current).removeClass("tcm_current");
        $("#city"+current).removeClass("city_current");
        current++
        if(current == 6) current = 1
        $("#li"+current).addClass("list_current");
        $("#li"+current).css("border","1.5px solid "+color[current-1])
        $("#content"+current).addClass("c_current");
        $("#tcm"+current).addClass("tcm_current");
        $("#city"+current).addClass("city_current");
        $(".bg_triangle").css("border-color","transparent transparent "+color[current-1]+" transparent")
    })

    $('#btn_left').click(function () {
        $("#li"+current).removeClass("list_current");
        $("#li"+current).css("border","none")
        $("#content"+current).removeClass("c_current");
        $("#tcm"+current).removeClass("tcm_current");
        $("#city"+current).removeClass("city_current");
        current--
        if(current == 0) current = 5
        $("#li"+current).addClass("list_current");
        $("#li"+current).css("border","1.5px solid "+color[current-1])
        $("#content"+current).addClass("c_current");
        $("#tcm"+current).addClass("tcm_current");
        $("#city"+current).addClass("city_current");
        $(".bg_triangle").css("border-color","transparent transparent "+color[current-1]+" transparent")
    })
})


// 	///////////////////////////////////// ScrollMagic
// 	var controller = new ScrollMagic.Controller();

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_story",
// 		offset: 100,
// 	}).setClassToggle("#nav", "nav_bgcolor1").addTo(controller);

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_play",
// 		offset: 100,
// 	}).setClassToggle("#nav", "nav_bgcolor2").addTo(controller);


// 	// anim
// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_story",
// 		offset: 100,
// 	}).setClassToggle(".ar_sl", "showtoup1").reverse(false).addTo(controller);

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_character",
// 		offset: 100,
// 	}).setClassToggle(".con_cheader", "showtoup2").reverse(false).addTo(controller);

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_character",
// 		offset: 100,
// 	}).setClassToggle(".con_ccontent", "showup").reverse(false).addTo(controller);

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_play",
// 		offset: 100,
// 	}).setClassToggle(".ar_pl", "showtoup1").reverse(false).addTo(controller);

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_play",
// 		offset: 100,
// 	}).setClassToggle(".p_prp", "showtoright1").reverse(false).addTo(controller);

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_play",
// 		offset: 100,
// 	}).setClassToggle("#box_prc1", "showtoright2").reverse(false).addTo(controller);

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_play",
// 		offset: 100,
// 	}).setClassToggle("#box_prc2", "showtoright3").reverse(false).addTo(controller);

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_play",
// 		offset: 100,
// 	}).setClassToggle("#box_prc3", "showtoright4").reverse(false).addTo(controller);

// 	new ScrollMagic.Scene({
// 		triggerElement: "#sec_play",
// 		offset: 100,
// 	}).setClassToggle(".a_prahref", "showtoright5").reverse(false).addTo(controller);

// 	/////////////////////////////////////rock with mouse move

// 	var rockScene1 = new ScrollMagic.Scene({
// 		triggerElement: "#sec_story",
// 		offset: 100,
// 	}).addTo(controller);

// 	rockScene1.on("enter", function (event) {

// 		//rock with mouse move
// 		var rect = $('#sec_story')[0].getBoundingClientRect();
// 		var mouse = { x: 0, y: 0, moved: false };
// 		$("#sec_story").mousemove(function (e) {
// 			mouse.moved = true;
// 			mouse.x = e.clientX - rect.left;
// 			mouse.y = e.clientY - rect.top;
// 		});
// 		TweenLite.ticker.addEventListener('tick', function () {
// 			if (mouse.moved) {
// 				parallaxIt(".img_sbganim", -150);
// 			}
// 			mouse.moved = false;
// 		});
// 		function parallaxIt(target, movement) {
// 			TweenMax.to(target, 0.3, {
// 				x: (mouse.x - rect.width / 2) / rect.width * movement - rect.width / 2.5,
// 				y: (mouse.y - rect.height / 2) / rect.height * movement - rect.height / 5
// 			});
// 		}
// 		$(window).on('resize scroll', function(){
// 			rect = $('#sec_story')[0].getBoundingClientRect();
// 		  })
// 	});

// 	var rockScene2 = new ScrollMagic.Scene({
// 		triggerElement: "#sec_character",
// 		offset: 100,
// 	}).addTo(controller);

// 	rockScene2.on("enter", function (event) {

// 		//rock with mouse move
// 		var rect = $('#sec_character')[0].getBoundingClientRect();
// 		var mouse = { x: 0, y: 0, moved: false };
// 		$("#sec_character").mousemove(function (e) {
// 			mouse.moved = true;
// 			mouse.x = e.clientX - rect.left;
// 			mouse.y = e.clientY - rect.top;
// 		});
// 		TweenLite.ticker.addEventListener('tick', function () {
// 			if (mouse.moved) {
// 				parallaxIt(".img_cbganim", -150);
// 			}
// 			mouse.moved = false;
// 		});
// 		function parallaxIt(target, movement) {
// 			TweenMax.to(target, 0.3, {
// 				x: (mouse.x - rect.width / 2) / rect.width * movement - rect.width / 2.5,
// 				y: (mouse.y - rect.height / 2) / rect.height * movement - rect.height / 6
// 			});
// 		}
// 		$(window).on('resize scroll', function(){
// 			rect = $('#sec_character')[0].getBoundingClientRect();
// 		  })
// 	});
// })