$(function(){
    // $("a[href*='#']").click(function(e){
    //     e.preventDefault();
    //     return false;
    // })
    $('.nav a').click(function(e){
        //获取当前窗口高度
        var winh = $(window).height();
        //获取自定义属性
        var num = $(this).attr('common-index');
        viewScroll('body,html', winh*num,num*1)
        e.preventDefault();
        return false;
    })
    $('.scroll-tip').click(function(){
        //获取按钮数值
        var index = $(this).attr('data-index');
        //获取屏幕高度 
        var winH = $(window).height();
        //获取自定义属性
        var name = $(this).attr('next-name');
        //获取自定义属性
        var cotactname = $(this).attr('contact-name');

        viewScroll('body,html', winH*index,index*1)
        
        if(name){
            $(name).find('.fade').addClass('fade-in');
        }else{
            $('.fade').removeClass('fade-in');
        }
        if(cotactname){
            $(cotactname).find('.fade').addClass('fade-in');
        }
    })
    // 统一同理滚动,el:要滚动的元素，height：滚动的值,
    // fixed:是否需要固定导航栏,isAdd:是否需要增加viewIndex的值
   function viewScroll(el, height, fixed){
   
    $(el).animate({
        scrollTop: height
    },600,function(){
       
    })
    fixedNav(fixed);
   }
   //固定导航栏，flag表示是否需要固定
   function fixedNav(flag){
        if (flag) {
            $('.section-header .nav').addClass('fixed');
        } else {
            $('.section-header .nav').removeClass('fixed');
        }
   }
})