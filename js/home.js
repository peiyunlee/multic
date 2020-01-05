// 待辦
// nav320
// nav320

$(document).ready(function () {

    $('#btn_hscroll').click(function () {
        $('html,body').animate({
            scrollTop: $('#section1').offset().top
        },1000);
        console.log("aa");
    });


    //list
    let current = 1
    let color = ["#FF5C85","#D33E40","#258EBA","#C04893","#A2CEDB"]
    
    //anim
    let city_anim = new TimelineMax()
        .to('.ar',0.75,{ opacity: "1",ease: "power2.inOut"} )

    $('#btn_right').click(function () {
        //anim
        new TimelineMax()
        .to('.ar_rs1',0,{ opacity: "0" })
        .to('.ar_rs1',0.75,{ opacity: "1" })

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
        //anim
        new TimelineMax()
        .to('.ar_rs1',0,{ opacity: "0" })
        .to('.ar_rs1',0.75,{ opacity: "1" })

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

	///////////////////////////////////// ScrollMagic
	var controller = new ScrollMagic.Controller();

    if(document.body.clientWidth <= 768){
        new ScrollMagic.Scene({
            triggerElement: '#section1',
            offset: 200,
        }).setTween(city_anim).addTo(controller).reverse(false);
        new ScrollMagic.Scene({
            triggerElement: '#section1',
            offset: 200,
        }).setClassToggle('.t_ls1','p_anim').addTo(controller).reverse(false);
        
        new ScrollMagic.Scene({
            triggerElement: '#section1',
            offset: 200,
        }).setClassToggle('.con_lcontents1_h3','hl_anim').addTo(controller).reverse(false);
    }
    else {
        new ScrollMagic.Scene({
            triggerElement: '#section1',
            offset: 300,
        }).setTween(city_anim).addTo(controller).reverse(false);
        new ScrollMagic.Scene({
            triggerElement: '#section1',
            offset: 300,
        }).setClassToggle('.t_ls1','p_anim').addTo(controller).reverse(false);
        
        new ScrollMagic.Scene({
            triggerElement: '#section1',
            offset: 300,
        }).setClassToggle('.con_lcontents1_h3','hl_anim').addTo(controller).reverse(false);
    }
    
    


})
