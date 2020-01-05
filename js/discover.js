$(document).ready(function () {

    let current=1;
    $('#box'+current).css('width','100%')
    $('#s1c'+current).css('display','grid')


    $('#li1').click(function () {
        $('#box'+current).css('width','0%')
        $('#s1c'+current).css('display','none')
        current=1
        $('#box'+current).css('width','100%')
        $('#s1c'+current).css('display','grid')
    });
    $('#li2').click(function () {
        $('#box'+current).css('width','0%')
        $('#s1c'+current).css('display','none')
        current=2
        $('#box'+current).css('width','100%')
        $('#s1c'+current).css('display','grid')
    });
    $('#li3').click(function () {
        $('#box'+current).css('width','0%')
        $('#s1c'+current).css('display','none')
        current=3
        $('#box'+current).css('width','100%')
        $('#s1c'+current).css('display','grid')
    });
    $('#li4').click(function () {
        $('#box'+current).css('width','0%')
        $('#s1c'+current).css('display','none')
        current=4
        $('#box'+current).css('width','100%')
        $('#s1c'+current).css('display','grid')
    });
    $('#li5').click(function () {
        $('#box'+current).css('width','0%')
        $('#s1c'+current).css('display','none')
        current=5
        $('#box'+current).css('width','100%')
        $('#s1c'+current).css('display','grid')
    });
    $('#li6').click(function () {
        $('#box'+current).css('width','0%')
        $('#s1c'+current).css('display','none')
        current=6
        $('#box'+current).css('width','100%')
        $('#s1c'+current).css('display','grid')
    });

    

    $('#btn_hscroll').click(function () {
        $('html,body').animate({
            scrollTop: $('#section1').offset().top
        },1000);
    });

    $('#btn_secscroll').click(function () {
        $('html,body').animate({
            scrollTop: $('#section1').offset().top
        }, 1000)
    })

    ///////////////////////////////////// ScrollMagic
	var controller = new ScrollMagic.Controller();

    if(document.body.clientWidth <= 320){
        new ScrollMagic.Scene({
            triggerElement: '#section1',
            offset: 450
        }).setClassToggle('.con_scroll','fixed').addTo(controller).reverse(true);
        new ScrollMagic.Scene({
            triggerElement: '#footer',
            offset: -400
        }).setClassToggle('.con_scroll','absolute').addTo(controller).reverse(true);
    
    }
    else if(document.body.clientWidth <= 768){
        new ScrollMagic.Scene({
            triggerElement: '#section1',
            offset: 450
        }).setClassToggle('.con_scroll','fixed').addTo(controller).reverse(true)
        new ScrollMagic.Scene({
            triggerElement: '#footer',
            offset: -400
        }).setClassToggle('.con_scroll','absolute').addTo(controller).reverse(true);
    }
    else{
        new ScrollMagic.Scene({
            triggerElement: '#section1',
            offset: 450, duration: 2500
        }).setClassToggle('.con_scroll','fixed').addTo(controller).reverse(true);
    }

    $('.scrolldown').click(function () {
        new TimelineMax()
        .addLabel('a')
        .to('.ul_s',0.5,{ opacity: "1"})
        .to('.scrolldown',0.3,{ opacity:'0',ease:'power2.inOut'},"a")
        .to('.scrolldown',0,{ display: 'none'},"a+=0.25")
        .to('.scrollup',0.3,{ opacity: '1',ease:'power2.inOut'},"a+=0.25")
    })
    $('.scrollup').click(function () {
        new TimelineMax()
        .addLabel('b')
        .to('.ul_s',0.25,{ opacity: "0"})
        .to('.scrollup',0.3,{ opacity:'0',ease:'power2.inOut'},"b")
        .to('.scrolldown',0,{ display: 'block'},"b+=0.25")
        .to('.scrolldown',0.3,{ opacity: '1',ease:'power2.inOut'},"b+=0.25")
    })

    
    $('#li_s_1').click(function () {
        new TimelineMax()
        .addLabel('c')
        .to('.ul_s',0.5,{ opacity: "0"})
        .to('.scrollup',0.3,{ opacity:'0',ease:'power2.inOut'},"c")
        .to('.scrolldown',0,{ display: 'block'},"c+=0.25")
        .to('.scrolldown',0.3,{ opacity: '1',ease:'power2.inOut'},"c+=0.25")
        $('#s1c'+current).css('display','none')
        current=1
        $('#s1c'+current).css('display','grid')

        $('#t_li_current').html("ALL")
    })
    $('#li_s_2').click(function () {
        new TimelineMax()
        .addLabel('c')
        .to('.ul_s',0.5,{ opacity: "0"})
        .to('.scrollup',0.3,{ opacity:'0',ease:'power2.inOut'},"c")
        .to('.scrolldown',0,{ display: 'block'},"c+=0.25")
        .to('.scrolldown',0.3,{ opacity: '1',ease:'power2.inOut'},"c+=0.25")
        $('#s1c'+current).css('display','none')
        current=2
        $('#s1c'+current).css('display','grid')

        $('#t_li_current').html("POP")
    })
    $('#li_s_3').click(function () {
        new TimelineMax()
        .addLabel('c')
        .to('.ul_s',0.5,{ opacity: "0"})
        .to('.scrollup',0.3,{ opacity:'0',ease:'power2.inOut'},"c")
        .to('.scrolldown',0,{ display: 'block'},"c+=0.25")
        .to('.scrolldown',0.3,{ opacity: '1',ease:'power2.inOut'},"c+=0.25")
        $('#s1c'+current).css('display','none')
        current=3
        $('#s1c'+current).css('display','grid')

        $('#t_li_current').html("ROCK")
    })
    $('#li_s_4').click(function () {
        new TimelineMax()
        .addLabel('c')
        .to('.ul_s',0.5,{ opacity: "0"})
        .to('.scrollup',0.3,{ opacity:'0',ease:'power2.inOut'},"c")
        .to('.scrolldown',0,{ display: 'block'},"c+=0.25")
        .to('.scrolldown',0.3,{ opacity: '1',ease:'power2.inOut'},"c+=0.25")
        $('#s1c'+current).css('display','none')
        current=4
        $('#s1c'+current).css('display','grid')

        $('#t_li_current').html("COUNTRY")
    })
    $('#li_s_5').click(function () {
        new TimelineMax()
        .addLabel('c')
        .to('.ul_s',0.5,{ opacity: "0"})
        .to('.scrollup',0.3,{ opacity:'0',ease:'power2.inOut'},"c")
        .to('.scrolldown',0,{ display: 'block'},"c+=0.25")
        .to('.scrolldown',0.3,{ opacity: '1',ease:'power2.inOut'},"c+=0.25")
        $('#s1c'+current).css('display','none')
        current=5
        $('#s1c'+current).css('display','grid')

        $('#t_li_current').html("HIP HOP")
    })
    $('#li_s_6').click(function () {
        new TimelineMax()
        .addLabel('c')
        .to('.ul_s',0.5,{ opacity: "0"})
        .to('.scrollup',0.3,{ opacity:'0',ease:'power2.inOut'},"c")
        .to('.scrolldown',0,{ display: 'block'},"c+=0.25")
        .to('.scrolldown',0.3,{ opacity: '1',ease:'power2.inOut'},"c+=0.25")
        $('#s1c'+current).css('display','none')
        current=6
        $('#s1c'+current).css('display','grid')

        $('#t_li_current').html("EDM")
    })

})