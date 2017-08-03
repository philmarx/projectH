/**
 * Created by Administrator on 2017/7/13.
 */


//获取url参数
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}


//马健原-获取url参数
function getUrlParams(url) {
    var url = url;
    if (url.indexOf('?')<0){
        return {};
    }
    url = decodeURI(url).split('?')[1];
    var paramsList = url.split('&');
    var params = {};
    for (var i = 0; i < paramsList.length; ++i) {
        var paramString = paramsList[i].split('=');
        params[paramString[0]] = paramString[1];
    }
    return params;
}

//去掉链接里‘#’后面 部分
function get_urlurl(url) {

    var m = url.match(/[^#]+(?=[#])/g);
//        console.log(m[0]);
    return m[0];

}



