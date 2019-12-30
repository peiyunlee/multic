// $(document).ready(function () {

// 	/////////////////////////////////////// clickscroll
// 	$('#hbottom').click(function () {
// 		$('html,body').animate({
// 			scrollTop: $('#sec_story').offset().top
// 		}, 1000);
// 	});

// 	var left=0;
// 	var right=0;

// 	$('#btn_left').click(function () {
// 		if(left<0)left=0-left;

// 		$("#list"+(right)%5).removeClass("rtoleft2");
// 		$("#box_cname"+(right+2)%5).removeClass("box_cname_center");
// 		$("#list"+(right+1)%5).removeClass("rtoleft1");
// 		$("#list"+(right+2)%5).removeClass("rtocenter");
// 		$("#list"+(right+3)%5).removeClass("rtoright1");
// 		$("#list"+(right-1)%5).removeClass("rtoright2");


// 		$("#list"+(left)%5).removeClass("ltoleft2");
// 		$("#list"+(left)%5).addClass("ltoright2");

// 		$("#list"+(left+1)%5).removeClass("ltoleft1");
// 		$("#list"+(left+1)%5).addClass("ltoleft2");

// 		$("#list"+(left+2)%5).removeClass("ltocenter");
// 		$("#list"+(left+2)%5).addClass("ltoleft1");
// 		$("#box_cname"+(left+2)%5).removeClass("box_cname_center");

// 		$("#list"+(left+3)%5).removeClass("ltoright1");
// 		$("#list"+(left+3)%5).addClass("ltocenter");
// 		$("#box_cname"+(left+3)%5).addClass("box_cname_center");

// 		$("#list"+(left+4)%5).removeClass("ltoright2");
// 		$("#list"+(left+4)%5).addClass("ltoright1");

// 		right+=6;
// 		left++;
// 		console.log(right)
// 		console.log(left)
// 	});

// 	$('#btn_right').click(function () {
// 		if(right<0)right=0-right;
// 		$("#list"+(left)%5).removeClass("ltoleft2");
// 		$("#list"+(left+1)%5).removeClass("ltoleft1");
// 		$("#list"+(left+2)%5).removeClass("ltocenter");
// 		$("#box_cname"+(left+2)%5).removeClass("box_cname_center");
// 		$("#list"+(left+3)%5).removeClass("ltoright1");
// 		$("#list"+(left+4)%5).removeClass("ltoright2");


// 		$("#list"+(right)%5).removeClass("rtoleft2");
// 		$("#box_cname"+(right+2)%5).removeClass("box_cname_center");
// 		$("#list"+(right)%5).addClass("rtoleft1");

// 		$("#list"+(right+1)%5).removeClass("rtoleft1");
// 		$("#list"+(right+1)%5).addClass("rtocenter");
// 		$("#box_cname"+(right+1)%5).addClass("box_cname_center");

// 		$("#list"+(right+2)%5).removeClass("rtocenter");
// 		$("#list"+(right+2)%5).addClass("rtoright1");

// 		$("#list"+(right+3)%5).removeClass("rtoright1");
// 		$("#list"+(right+3)%5).addClass("rtoright2");
		
// 		$("#list"+(right-1)%5).removeClass("rtoright2");
// 		$("#list"+(right+4)%5).addClass("rtoleft2");

// 		right+=4;
// 		left+=4;
// 		console.log(right)
// 		console.log(left)
// 	});


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
// });