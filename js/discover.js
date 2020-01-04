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

    new ScrollMagic.Scene({
        triggerElement: '#section1',
        offset: 450, duration: 2500
    }).setClassToggle('.con_scroll','fixed').addTo(controller).reverse(true);

})