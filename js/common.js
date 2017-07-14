/**
 * Created by Administrator on 2017/7/13.
 */


//计算距离函数
function getjuli(lat1,lng1,lat2,lng2){
    var EARTH_RADIUS = 6378137.0;    //单位M
    var PI = Math.PI;

    function getRad(d){
        return d*PI/180.0;
    }
    var f = getRad((lat1 + lat2)/2);
    var g = getRad((lat1 - lat2)/2);
    var l = getRad((lng1 - lng2)/2);

    var sg = Math.sin(g);
    var sl = Math.sin(l);
    var sf = Math.sin(f);

    var s,c,w,r,d,h1,h2;
    var a = EARTH_RADIUS;
    var fl = 1/298.257;

    sg = sg*sg;
    sl = sl*sl;
    sf = sf*sf;

    s = sg*(1-sl) + (1-sf)*sl;
    c = (1-sg)*(1-sl) + sf*sl;

    w = Math.atan(Math.sqrt(s/c));
    r = Math.sqrt(s*c)/w;
    d = 2*w*a;
    h1 = (3*r -1)/2/c;
    h2 = (3*r +1)/2/s;

    return d*(1 + fl*(h1*sf*(1-sg) - h2*(1-sf)*sg));
}

//计算时间函数，今天，明天，后天，超过就用日期显示
function dateTimeFormat(dateNum){
    function getMinute(minute){
        var str=minute+'';
        if(str.length===1){
            str='0'+str;
        }
        return str;
    }
    var date=new Date(dateNum);
    var today=new Date();
    var dateString=null;
    if(date.getFullYear()==today.getFullYear()&&date.getMonth()==today.getMonth()){
        var diff=date.getDate()-today.getDate();
        switch(diff){
            case 0:
                dateString='今天'+(date.getHours()+':'+getMinute(date.getMinutes()));
                break;
            case 1:
                dateString='明天'+(date.getHours()+':'+getMinute(date.getMinutes()));
                break;
            case 2:
                dateString='后天'+(date.getHours()+':'+getMinute(date.getMinutes()));
                break;
            default:
                dateString=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+" "+date.getHours()+":"+getMinute(date.getMinutes());
                break;
        }
    }else{
        dateString=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+" "+date.getHours()+":"+getMinute(date.getMinutes());
    }
    return dateString;
}



$(document).ready(function () {
    $(window).load(function () {

        //最下方浮动块点击关闭按钮隐藏
        $(".cha").click(function () {
            $(".bom_xiazai").slideUp(500);
        });

    })
});


