
/*回到顶部start*/
~function(){
    var aLink = document.getElementById('link');
    aLink.onclick = function (){
        var duration = 500;
        var distance = utils.win('scrollTop');
        var interval = 10;
        var step = (distance/duration)*interval;
        var timer = window.setInterval(function (){
            if(utils.win('scrollTop') <= 0){
                window.clearInterval(timer);
                window.onscroll = showBtn;
                return;
            }
            var srcollTop = utils.win('scrollTop');
            srcollTop -= step;
            utils.win('scrollTop',srcollTop);
        },interval);
        window.onscroll = null;
        this.style.display = 'none';
    };
    window.onscroll = showBtn;

    function showBtn(){
        var winScrollTop = utils.win('scrollTop');
        var screenHeight = utils.win('clientHeight');
        if(winScrollTop-screenHeight > 0){
            aLink.style.display = 'block';
        }else{
            aLink.style.display = 'none';
        }
        callBack();
    }

    function callBack(){
        var reTurn=document.getElementById("return"),
            link=document.getElementById("link");
        link.onmouseenter=function(e){
            reTurn.style.display="block";
        };
        link.onmouseleave=function(e){
            reTurn.style.display="none";
        };

    }

}();
/*回到顶部end*/


/*登录页start*/
~function(){
    var login = document.getElementsByClassName("log")[0];
    var close = document.getElementsByClassName("close")[0];
    var oWrap = document.getElementById("wrap");
    login.addEventListener("click",function(){
        oWrap.style.display="block";
    },false);
    close.addEventListener("click",function(){
        oWrap.style.display="none";
    },false);
}();
/*登录页end*/









