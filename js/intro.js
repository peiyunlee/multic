$(document).ready(function () {

    $('#btn_hscroll').click(function () {
        $('html,body').animate({
            scrollTop: $('#section1').offset().top
        }, 1000)
    })

    $('#btn_sec1scroll').click(function () {
        $('html,body').animate({
            scrollTop: $('#section2').offset().top
        }, 1000)
    })

    $('#btn_sec2scroll').click(function () {
        $('html,body').animate({
            scrollTop: $('#section1').offset().top
        }, 1000)
    })

    $('#btn_sec2scroll2').click(function () {
        $('html,body').animate({
            scrollTop: $('#section1').offset().top
        }, 1000)
    })


    
    //list
    let current = 1
    let bgcolor = ["#FF5C85","#D33E40","#258EBA","#C04893","#A2CEDB"]
    let maincolor = ["#FF2E63","#CB2433","#20799F","#B5008D","#229DCB"]
    let circlecolor = ["#0FD5D3","#FFFFFF","#DFE780","#ED6900","#00FF01"]
    // let seccolor = ["#08D9D6","#000000","#DFE780","#ED6900","#00FF01"]
    
    // //anim
    TweenLite.to(".img_playbox", 2,{ease: "power2.in", y: "+=750px",x: "-=1500px",opacity:"1" });
    
    TweenLite.to(".img_cbg", 0.3,{delay:2.75 , ease: "none",opacity:"1" });
    TweenLite.to(".con_hccontent", 0.25,{delay:1.75 , ease: "none",opacity:"1" });
    TweenLite.to(".con_genre", 0.3,{delay:2 , ease: "power1.in",opacity:"1" });
    TweenLite.to(".img_crossgroup",  0.3,{delay:2 , ease: "power1.in",opacity:"1" });
    TweenLite.to(".img_topcg", 0.3,{delay:2 , ease: "power1.in",opacity:"1" });
    
    $('#btn_right').click(function () {

        $("#city"+current).css("opacity","0")
        $("#t_city"+current).css("opacity","0")
        
        //sidenav
        TweenLite.to(".t_nav_anim1", 0.5, {
            y: "-=107.5px"
        });

        TweenLite.to(".t_nav_anim3", 0.5, {
            y: "-=107.5px"
        });

        new TimelineMax()
        .to('.t_nav_anim2',0.2,{ opacity: "0" })
        .to('.t_nav_anim2',0,{ y: "+=430px"})
        .to('.t_nav_anim2',0.2,{ opacity: "1"})

        $(".t_nav_anim2").removeClass("t_nav_anim2")
        $(".t_nav_anim3").addClass("t_nav_anim1")
        $(".t_nav_anim3").removeClass("t_nav_anim3")
        $("#t_nav"+current).addClass("t_nav_anim3")
        if(current==5){
            $("#t_nav"+1).removeClass("t_nav_anim1")
            $("#t_nav"+1).addClass("t_nav_anim2")
        }
        else{
            k=current+1
            $("#t_nav"+k).removeClass("t_nav_anim1")
            $("#t_nav"+k).addClass("t_nav_anim2")
        }

        //change
        $("#city"+current).removeClass("city_current")
        $("#ttbox"+current).removeClass("tbox_current")
        $("#tbbox"+current).removeClass("tbox_current")
        $("#represent"+current).removeClass("represent_current")
        $("#represent_s_"+current).removeClass("represent_current")
        $("#t_bg"+current).removeClass("t_current")
        $("#s2hl"+current).removeClass("s2hl_current")
        $("#con_re"+current).removeClass("represent_current")
        $("#s1h4_"+current).removeClass("represent_current")
        $("#t_city"+current).removeClass("represent_current")
        $("#p1-"+current).removeClass("represent_current")
        $("#p2-"+current).removeClass("represent_current")
        current++
        if(current == 6) current = 1
        $("#city"+current).addClass("city_current")
        $("#ttbox"+current).addClass("tbox_current")
        $("#tbbox"+current).addClass("tbox_current")
        $("#represent"+current).addClass("represent_current")
        $("#represent_s_"+current).addClass("represent_current")
        $("#t_bg"+current).addClass("t_current")
        $("#s2hl"+current).addClass("s2hl_current")
        $("#con_re"+current).addClass("represent_current")
        $("#s1h4_"+current).addClass("represent_current")
        $("#t_city"+current).addClass("represent_current")
        $("#p1-"+current).addClass("represent_current")
        $("#p2-"+current).addClass("represent_current")
        $(".box_s1headline").css("background-color",maincolor[current-1])
        $("#citycross").css("fill",maincolor[current-1])
        $("#section1").css("background-color",bgcolor[current-1])
        $(".box_s2bg").css("background-color",bgcolor[current-1])
        $(".box_s1c").css("background-color",circlecolor[current-1])
        $(".t_s2lhl2").css("color",bgcolor[current-1])
        $(".t_colorn").css("color",bgcolor[current-1])
        $(".t_colorm").css("color",bgcolor[current-1])
        $(".icon_color").css("fill",bgcolor[current-1])
        $(".box_s2csmall").css("background-color",bgcolor[current-1])
        $(".bgcorss").css("fill",bgcolor[current-1])
        $(".t_bg").css("color",bgcolor[current-1])
        $("#btn_s2scroll_s").css("fill",bgcolor[current-1])
        $(".icon_color1").css("fill","#fff")
        if(document.body.clientWidth <= 768){
            $(".t_color1").css("color",bgcolor[current-1])
            $(".icon_color1").css("fill",bgcolor[current-1])
            $(".t_s2rhl").css("color",bgcolor[current-1])
        }
        if(document.body.clientWidth <=320){
            $(".t_s2scroll").css("color",bgcolor[current-1])
        }
        if(current == 1){
            $(".greenbox").css("fill","#08D9D6")
            $(".c").css("fill","#08D9D6")
        }
        else if(current == 2){
            $(".greenbox").css("fill","#ffffff")
            $('#sec2greenbox').css("fill","#000000")
            $(".c").css("fill","#000000")
        }
        else{
            $(".greenbox").css("fill",circlecolor[current-1])
            $(".c").css("fill",circlecolor[current-1])
        }

        
        new TimelineMax()
        .to(".svg_citycross", 0.5, {
            y: "30px",scaleX:0.95, scaleY:0.95,opacity:"0"
        })
        .to(".svg_citycross", 1, {
            y: "0px",scaleX:1, scaleY:1,opacity:"1"
        })

        new TimelineMax()
        .to("#city"+current, 0, {
            opacity:"0"
        })
        .to("#city"+current, 0.5, {
            delay:0.75,
            opacity:"1",ease:"power2.in"
        })
        new TimelineMax()
        .to("#t_city"+current, 0, {
            opacity:"0"
        })
        .to("#t_city"+current, 0.5, {
            delay:1.25,
            opacity:"1",ease:"power2.in"
        })
    })

    $('#btn_left').click(function () {

        $("#city"+current).css("opacity","0")
        $("#t_city"+current).css("opacity","0")

        //change
        $("#city"+current).removeClass("city_current")
        $("#ttbox"+current).removeClass("tbox_current")
        $("#tbbox"+current).removeClass("tbox_current")
        $("#represent"+current).removeClass("represent_current")
        $("#represent_s_"+current).removeClass("represent_current")
        $("#t_bg"+current).removeClass("t_current")
        $("#s2hl"+current).removeClass("s2hl_current")
        $("#con_re"+current).removeClass("represent_current")
        $("#s1h4_"+current).removeClass("represent_current")
        $("#t_city"+current).removeClass("represent_current")
        $("#p1-"+current).removeClass("represent_current")
        $("#p2-"+current).removeClass("represent_current")
        current--
        if(current == 0) current = 5
        $("#city"+current).addClass("city_current")
        $("#ttbox"+current).addClass("tbox_current")
        $("#tbbox"+current).addClass("tbox_current")
        $("#represent"+current).addClass("represent_current")
        $("#represent_s_"+current).addClass("represent_current")
        $("#t_bg"+current).addClass("t_current")
        $("#s2hl"+current).addClass("s2hl_current")
        $("#con_re"+current).addClass("represent_current")
        $("#s1h4_"+current).addClass("represent_current")
        $("#t_city"+current).addClass("represent_current")
        $("#p1-"+current).addClass("represent_current")
        $("#p2-"+current).addClass("represent_current")
        $(".box_s1headline").css("background-color",maincolor[current-1])
        $("#citycross").css("fill",maincolor[current-1])
        $("#section1").css("background-color",bgcolor[current-1])
        $(".box_s2bg").css("background-color",bgcolor[current-1])
        $(".box_s1c").css("background-color",circlecolor[current-1])
        $(".t_s2lhl2").css("color",bgcolor[current-1])
        $(".t_colorn").css("color",bgcolor[current-1])
        $(".t_colorm").css("color",bgcolor[current-1])
        $(".icon_color").css("fill",bgcolor[current-1])
        $(".box_s2csmall").css("background-color",bgcolor[current-1])
        $(".bgcorss").css("fill",bgcolor[current-1])
        $(".t_bg").css("color",bgcolor[current-1])
        $("#btn_s2scroll_s").css("fill",bgcolor[current-1])
        $(".icon_color1").css("fill","#fff")
        if(document.body.clientWidth <= 768){
            $(".t_color1").css("color",bgcolor[current-1])
            $(".icon_color1").css("fill",bgcolor[current-1])
            $(".t_s2rhl").css("color",bgcolor[current-1])
        }
        if(document.body.clientWidth <=320){
            $(".t_s2scroll").css("color",bgcolor[current-1])
        }
        if(current == 1){
            $(".greenbox").css("fill","#08D9D6")
            $('#sec2greenbox').css("fill","#000000")
            $(".c").css("fill","#08D9D6")
        }
        else if(current == 2){
            $(".greenbox").css("fill","#ffffff")
            $('#sec2greenbox').css("fill","#000000")
            $(".c").css("fill","#000000")
        }
        else{
            $(".greenbox").css("fill",circlecolor[current-1])
            $(".c").css("fill",circlecolor[current-1])
        }

        //sidenav
        TweenLite.to(".t_nav_anim1", 0.5, {
            y: "+=107.5px"
        });

        TweenLite.to(".t_nav_anim2", 0.5, {
            y: "+=107.5px"
        });

        new TimelineMax()
            .to('.t_nav_anim3',0.2,{ opacity: "0" })
            .to('.t_nav_anim3',0,{ y: "-=430px"})
            .to('.t_nav_anim3',0.2,{ opacity: "1"})

        $(".t_nav_anim3").removeClass("t_nav_anim3")
        $(".t_nav_anim2").addClass("t_nav_anim1")
        $(".t_nav_anim2").removeClass("t_nav_anim2")
        $("#t_nav"+current).addClass("t_nav_anim2")
        if(current==1){
            $("#t_nav"+5).removeClass("t_nav_anim1")
            $("#t_nav"+5).addClass("t_nav_anim3")
        }
        else{
            k=current-1
            $("#t_nav"+k).removeClass("t_nav_anim1")
            $("#t_nav"+k).addClass("t_nav_anim3")
        }

        
        new TimelineMax()
        .to(".svg_citycross", 0.5, {
            y: "30px",scaleX:0.95, scaleY:0.95,opacity:"0"
        })
        .to(".svg_citycross", 1, {
            y: "0px",scaleX:1, scaleY:1,opacity:"1"
        })

        new TimelineMax()
        .to("#city"+current, 0, {
            opacity:"0"
        })
        .to("#city"+current, 0.5, {
            delay:0.75,
            opacity:"1",ease:"power2.in"
        })
        new TimelineMax()
        .to("#t_city"+current, 0, {
            opacity:"0"
        })
        .to("#t_city"+current, 0.5, {
            delay:1.25,
            opacity:"1",ease:"power2.in"
        })
    })

    //music
    var audio = []
    for (var i = 0; i < 14; i+=3) {
        audio[i] = new Audio('../Maroon 5 - Sugar_cut.mp3')
        audio[i+1] = new Audio('../think.mp3')
        audio[i+2] = new Audio('../havana.mp3')
    }


    $('#btn_play1').click(function () {
        audio[0].play()
        $('#btn_pause1').css("display", "block")
        $('#btn_play1').css("display", "none")
    })
    $('#btn_pause1').click(function () {
        audio[0].pause()
        $('#btn_play1').css("display", "block")
        $('#btn_pause1').css("display", "none")
    })

    $('#btn_play2').click(function () {
        audio[1].play()
        $('#btn_pause2').css("display", "block")
        $('#btn_play2').css("display", "none")
    })
    $('#btn_pause2').click(function () {
        audio[1].pause()
        $('#btn_play2').css("display", "block")
        $('#btn_pause2').css("display", "none")
    })

    $('#btn_play3').click(function () {
        audio[2].play()
        $('#btn_pause3').css("display", "block")
        $('#btn_play3').css("display", "none")
    })
    $('#btn_pause3').click(function () {
        audio[2].pause()
        $('#btn_play3').css("display", "block")
        $('#btn_pause3').css("display", "none")
    })


    ///////////////////////////////////// ScrollMagic
	var controller = new ScrollMagic.Controller();

    let sec1_anim=new TimelineMax()
    .to(".con_s1headline", 0.5, {
        opacity:"1"
    })
    .to(".box_s1c", 0.5, {
        opacity:"0.4"
    })
    .to(".svg_citycross", 0.5, {
        y: "30px",scaleX:0.95, scaleY:0.95,opacity:"0"
    })
    .to(".svg_citycross", 1, {
        y: "0px",scaleX:1, scaleY:1,opacity:"1"
    })
    .to("#city1", 0, {
        opacity:"0"
    })
    .to("#city1", 0.5, {
        opacity:"1",ease:"power2.in"
    })
    .to("#t_city1", 0, {
        opacity:"0"
    })
    .to("#t_city1", 0.5, {
        opacity:"1",ease:"power2.in"
    })
    // .to(".con_s1content", 0.25, {
    //     y: "30px",scaleX:0.95, scaleY:0.95,opacity:"0"
    // })
    // .to(".con_s1content", 1, {
    //     y: "0px",scaleX:1, scaleY:1,opacity:"1"
    // })
    // .to(".con_s1content", 0.25, {
    //     y: "30px",scaleX:0.95, scaleY:0.95,opacity:"0"
    // })
    // .to(".con_s1content", 1, {
    //     y: "0px",scaleX:1, scaleY:1,opacity:"1"
    // })        new TimelineMax()
    // .to(".svg_citycross", 0.5, {
    //     y: "30px",scaleX:0.95, scaleY:0.95,opacity:"0"
    // })
    // .to(".svg_citycross", 1, {
    //     y: "0px",scaleX:1, scaleY:1,opacity:"1"
    // })

    new ScrollMagic.Scene({
		triggerElement: '#section1',
        offset: 450,
    }).setTween(sec1_anim).addIndicators().addTo(controller).reverse(false);

})