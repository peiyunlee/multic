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
    TweenLite.to(".img_playbox", 2.5,{ease: "power2.in", y: "+=750px",x: "-=1500px" });
    
    $('#btn_right').click(function () {
        
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

    })

    $('#btn_left').click(function () {

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

    // $('#btn_play4').click(function () {
    //     audio[3].play()
    //     $('#btn_pause4').css("display", "block")
    //     $('#btn_play4').css("display", "none")
    // })
    // $('#btn_pause4').click(function () {
    //     audio[3].pause()
    //     $('#btn_play4').css("display", "block")
    //     $('#btn_pause4').css("display", "none")
    // })

    // $('#btn_play5').click(function () {
    //     audio[4].play()
    //     $('#btn_pause5').css("display", "block")
    //     $('#btn_play5').css("display", "none")
    // })
    // $('#btn_pause5').click(function () {
    //     audio[4].pause()
    //     $('#btn_play5').css("display", "block")
    //     $('#btn_pause5').css("display", "none")
    // })

    // $('#btn_play6').click(function () {
    //     audio[5].play()
    //     $('#btn_pause6').css("display", "block")
    //     $('#btn_play6').css("display", "none")
    // })
    // $('#btn_pause6').click(function () {
    //     audio[5].pause()
    //     $('#btn_play6').css("display", "block")
    //     $('#btn_pause6').css("display", "none")
    // })

    // $('#btn_play7').click(function () {
    //     audio[6].play()
    //     $('#btn_pause7').css("display", "block")
    //     $('#btn_play7').css("display", "none")
    // })
    // $('#btn_pause7').click(function () {
    //     audio[6].pause()
    //     $('#btn_play7').css("display", "block")
    //     $('#btn_pause7').css("display", "none")
    // })

    // $('#btn_play8').click(function () {
    //     audio[7].play()
    //     $('#btn_pause8').css("display", "block")
    //     $('#btn_play8').css("display", "none")
    // })
    // $('#btn_pause8').click(function () {
    //     audio[7].pause()
    //     $('#btn_play8').css("display", "block")
    //     $('#btn_pause8').css("display", "none")
    // })

    // $('#btn_play9').click(function () {
    //     audio[8].play()
    //     $('#btn_pause9').css("display", "block")
    //     $('#btn_play9').css("display", "none")
    // })
    // $('#btn_pause9').click(function () {
    //     audio[8].pause()
    //     $('#btn_play9').css("display", "block")
    //     $('#btn_pause9').css("display", "none")
    // })

    // $('#btn_play10').click(function () {
    //     audio[9].play()
    //     $('#btn_pause10').css("display", "block")
    //     $('#btn_play10').css("display", "none")
    // })
    // $('#btn_pause10').click(function () {
    //     audio[9].pause()
    //     $('#btn_play10').css("display", "block")
    //     $('#btn_pause10').css("display", "none")
    // })

    // $('#btn_play11').click(function () {
    //     audio[10].play()
    //     $('#btn_pause11').css("display", "block")
    //     $('#btn_play11').css("display", "none")
    // })
    // $('#btn_pause11').click(function () {
    //     audio[10].pause()
    //     $('#btn_play11').css("display", "block")
    //     $('#btn_pause11').css("display", "none")
    // })

    // $('#btn_play12').click(function () {
    //     audio[11].play()
    //     $('#btn_pause12').css("display", "block")
    //     $('#btn_play12').css("display", "none")
    // })
    // $('#btn_pause12').click(function () {
    //     audio[11].pause()
    //     $('#btn_play12').css("display", "block")
    //     $('#btn_pause12').css("display", "none")
    // })

    // $('#btn_play13').click(function () {
    //     audio[12].play()
    //     $('#btn_pause13').css("display", "block")
    //     $('#btn_play13').css("display", "none")
    // })
    // $('#btn_pause13').click(function () {
    //     audio[12].pause()
    //     $('#btn_play13').css("display", "block")
    //     $('#btn_pause13').css("display", "none")
    // })

    // $('#btn_play14').click(function () {
    //     audio[13].play()
    //     $('#btn_pause14').css("display", "block")
    //     $('#btn_play14').css("display", "none")
    // })
    // $('#btn_pause14').click(function () {
    //     audio[13].pause()
    //     $('#btn_play14').css("display", "block")
    //     $('#btn_pause14').css("display", "none")
    // })

    // $('#btn_play15').click(function () {
    //     audio[14].play()
    //     $('#btn_pause15').css("display", "block")
    //     $('#btn_play15').css("display", "none")
    // })
    // $('#btn_pause15').click(function () {
    //     audio[14].pause()
    //     $('#btn_play15').css("display", "block")
    //     $('#btn_pause15').css("display", "none")
    // })

})