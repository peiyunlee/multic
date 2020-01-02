$(document).ready(function () {

	// ScrollMagic
	var controller = new ScrollMagic.Controller();
	
	new ScrollMagic.Scene({
		triggerElement: "#section1",
		offset:100,
	}).setClassToggle("#nav", "nav_bgcolor3").addTo(controller);

	// ar_sec1-1
	new ScrollMagic.Scene({
		triggerElement: "#ar_sec1-1",
		offset:-300,
	}).setClassToggle(".con_ar", "con_aranim").reverse(false).addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: "#ar_sec1-1",
		offset:350,
	}).setClassToggle("#img_drip1", "img_drip_anim1").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#ar_sec1-1",
		offset:350,
	}).setClassToggle("#img_drip2", "img_drip_anim2").reverse(false).addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: "#ar_sec1-1",
		offset:350,
	}).setClassToggle("#img_drip3", "img_drip_anim3").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#ar_sec1-1",
		offset:350,
	}).setClassToggle("#img_drip4", "img_drip_anim4").reverse(false).addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: "#ar_sec1-1",
		offset:350,
	}).setClassToggle("#img_drip5", "img_drip_anim5").reverse(false).addTo(controller);

	// ar_sec1-2
	new ScrollMagic.Scene({
		triggerElement: "#ar_sec1-2",
		offset:-150,
	}).setClassToggle(".p_seccontent2", "con_aranim").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#ar_sec1-2",
		offset:-150,
	}).setClassToggle(".img_type", "img_type_anim").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#ar_sec1-2",
		offset:-150,
	}).setClassToggle(".t_typehl", "img_type_anim").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#ar_sec1-2",
		offset:200,
	}).setClassToggle(".p_type", "p_type_anim").reverse(false).addTo(controller);

	// section2
	new ScrollMagic.Scene({
		triggerElement: "#section2",
		offset:-50,
	}).setClassToggle(".p_seccontent3", "con_aranim").reverse(false).addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: "#section2",
		offset:350,
	}).setClassToggle("#img_fdot1", "img_dot_anim1").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#section2",
		offset:350,
	}).setClassToggle("#img_fdot2", "img_dot_anim2").reverse(false).addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: "#section2",
		offset:350,
	}).setClassToggle("#img_sdot3", "img_dot_anim3").reverse(false).addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#section2",
		offset:350,
	}).setClassToggle("#img_fdot4", "img_dot_anim4").reverse(false).addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: "#section2",
		offset:350,
	}).setClassToggle("#img_fdot5", "img_dot_anim5").reverse(false).addTo(controller);

	
});