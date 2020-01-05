$(document).ready(function () {
  let i=0;
  $('#hamberger1').click(function (){
    i++;
    console.log("click")
    if(i==1){
        $('#con_navbar1').css("position",'fixed');
        TweenLite.to("#s_nav1", 0.5, {
            opacity:"1",display:"grid"
        })
        TweenLite.to("#con_navbar2", 0 , {
            opacity:"0",display:"none"
        })
    }
    else{
        $('#con_navbar1').css("position",'absolute');
        TweenLite.to("#s_nav1", 0.5, {
            opacity:"0",display:"none"
        })
        TweenLite.to("#con_navbar2", 0 , {
            opacity:"1",display:"flex"
        })
      i=0
    }
  })

  let j=0;
  $('#hamberger2').click(function (){
    j++;
    if(j==1){
        $('#con_navbar2').css("position",'fixed');
        TweenLite.to("#s_nav2", 0.5, {
            opacity:"1",display:"grid"
        })
        TweenLite.to("#con_navbar1", 0 , {
            opacity:"0",display:"none"
        })
        TweenLite.to(".con_htop", 0 , {
            opacity:"0",display:"none"
        })
        TweenLite.to("#a_logo", 0 , {
            opacity:"0"
        })
    }
    else{
        $('#con_navbar2').css("position",'absolute');
        TweenLite.to("#s_nav2", 0.5, {
            opacity:"0",display:"none"
        })
        TweenLite.to("#con_navbar1", 0 , {
            opacity:"1",display:"flex"
        })
        TweenLite.to(".con_htop", 0 , {
            opacity:"1",display:"flex"
        })
        TweenLite.to("#a_logo", 0 , {
            opacity:"1"
        })
      j=0
    }
  })
})