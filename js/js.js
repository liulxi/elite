  //banner 轮播

  $(function(){
     var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
  });
  
  //切换
$(function(){
	$(".school-subnav #tab:gt(0)").hide();
	$(".school .school-nav ul").find('li').each(function(index){
		$(this).click(function(){
			$(this).stop(true,true).addClass('on').siblings().removeClass('on');
			$(".school-subnav #tab").hide().eq(index).show();
		})	
	});
});

//点击加载更多
$(function(){
	var flag=1;
	$(".school-subnav #tab ul li:gt(2)").hide();
	$(".click").click(function(){
		if(flag==1){
			$(".school-subnav").animate({"height":"8.78rem"},500);
			$(".school-subnav #tab ul li:gt(2)").show();
			$(".click").html("点击收起更多");
			flag=2;
			
		}else if(flag==2){
			$(".school-subnav").animate({"height":"4.38rem"},500);
			$(".school-subnav #tab ul li:gt(2)").hide();
			$(".click").html("点击加载更多");
			flag=1;
		}
	});
});


//侧边栏
$(function(){
	var flag=1;
	$("#menu").click(function(){
		if(flag==1){
			$("#aside").animate({"right":"0rem"},1000);
			$("#main").animate({"right":"3rem"},1000);
			$("#menu").attr("src","images/ico_btn2.png");
			flag=2;	
		}else if(flag==2){
			$("#aside").animate({"right":"-3rem"},1000);
			$("#main").animate({"right":"0"},1000);
			$("#menu").attr("src","images/ico_btn2_hov.png")
			flag=1;
		}
	});

});

//优选留学方案
$(function(){
	var flag=true;
	$("#optimize1").hide();
	$("#xiala").click(function(){
		if(flag){
			$("#optimize1").slideDown();
			flag=false;
		}else{
			$("#optimize1").slideUp();
			flag=true;
		}
	});
});
 
 //footer
   $(function(){
   	var flage=1;
       $(".footer  li:first-of-type").click(function(){
       		if(flage==1){
       			$(".footer  li:first-of-type >h2").css("color","#fe3c24");
          		$(".footer  li:first-of-type >img").attr("src","images/ico-b-nav-1-on.png");
          		flage=2;
       		}else if(flage==2){
       			$(".footer  li:first-of-type >h2").css("color","#919191");
          		$(".footer  li:first-of-type >img").attr("src","images/ico-b-nav-1.png");
          		flage=1;
       		}
 
       });
       
        $(".footer  li:nth-of-type(2)").click(function(){
       		if(flage==1){
       			$(".footer  li:nth-of-type(2) >h2").css("color","#fe3c24");
          		$(".footer  li:nth-of-type(2) >img").attr("src","images/ico-b-nav-2-on.png");
          		flage=2;
       		}else if(flage==2){
       			$(".footer  li:nth-of-type(2) >h2").css("color","#919191");
          		$(".footer  li:nth-of-type(2) >img").attr("src","images/ico-b-nav-2.png");
          		flage=1;
       		}
 
       });
       
         $(".footer  li:nth-of-type(3)").click(function(){
       		if(flage==1){
       			$(".footer  li:nth-of-type(3) >h2").css("color","#fe3c24");
          		$(".footer  li:nth-of-type(3) >img").attr("src","images/ico-b-nav-3-on.png");
          		flage=2;
       		}else if(flage==2){
       			$(".footer  li:nth-of-type(3) >h2").css("color","#919191");
          		$(".footer  li:nth-of-type(3) >img").attr("src","images/ico-b-nav-3.png");
          		flage=1;
       		}
 
       });
     
      $(".footer  li:last-of-type").click(function(){
       		if(flage==1){
       			$(".footer  li:last-of-type >h2").css("color","#fe3c24");
          		$(".footer  li:last-of-type >img").attr("src","images/ico-b-nav-4-on.png");
          		flage=2;
       		}else if(flage==2){
       			$(".footer  li:last-of-type >h2").css("color","#919191");
          		$(".footer  li:last-of-type >img").attr("src","images/ico-b-nav-4.png");
          		flage=1;
       		}
 
       });   
   });

//指纹
$(function(){
    var flage=1;
    $("#finger1").click(function(event) {
        if (flage==1) {
            $("#finger1").attr("src","images/ico_btn23.png");
            $("#f-content #ico1").animate({"left":"1rem"});
            $("#f-content #ico2").animate({"left":"2rem"});
            $("#f-content #ico3").animate({"left":"3rem"});
            $("#f-content #ico4").animate({"left":"4rem"});
            $("#f-content #ico5").animate({"left":"5rem"});
           flage=2;
        }else if (flage==2) {
            $("#finger1").attr("src","images/ico_btn22.png")
            $("#f-content img").animate({"left":"0.1rem"},500);
            flage=1;
        }        
    });
});
/*点击按钮 缓慢回到顶部*/
$(function(){
    $("#ico5").click(function() {
        $("html,body").animate({ "scrollTop": 0 }, 1000);
    });
})

//电话
function callme(){
    $(".phoneN").removeClass("none");
    $(".dark").removeClass("none");
};
 // var timerP=setInterval(callme,10000);

$(function(){
    $(".phone").click(function(event){
        // clearInterval(timerP);
        $(".phoneN").removeClass("none");
        $(".dark").removeClass("none");
    });
    $(".phoneClose").click(function(event){
        // clearInterval(timerP);
        $(".phoneN").addClass("none");
        $(".dark").addClass("none");
        // timerP=setInterval(callme,10000);
    })
});
//留学头条
function roll(){
  $(".abroad ul li:first").animate({"marginTop": "-0.3rem"},1000,function(){
    $(this).css("marginTop", 0).appendTo($(".abroad ul"));
  });
}
setInterval(roll,1000);


