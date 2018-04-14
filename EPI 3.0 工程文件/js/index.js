//浏览器检测
function detectBrowser() {
    var browser = navigator.appName
    var b_version = navigator.appVersion
    var version = parseFloat(b_version)
    if ((browser == "Netscape" || browser == "Microsoft Internet Explorer") && (version >= 4)) {
        alert("您的浏览器够先进了！");
    } else {
        alert("是时候升级您的浏览器了！");
    }
};
//时间获取
function getNowFormatDate() {
    var date = new Date();
    var seperator2 = ":";
    var strDate = date.getDate();
    var currentdate = date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();

    alert(currentdate);
}
//日期获取
function day() {
    var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;

    alert(currentdate);
}
//星期获取
function weekday() {
    var d = new Date()
    var weekday = new Array(7)
    weekday[0] = "星期日"
    weekday[1] = "星期一"
    weekday[2] = "星期二"
    weekday[3] = "星期三"
    weekday[4] = "星期四"
    weekday[5] = "星期五"
    weekday[6] = "星期六"
    var t = weekday[d.getDay()]
    alert(t);
};
//IP定位 新浪{
function showIpcity(){
$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function(_result) {
            if (remote_ip_info.ret == '1') {
                alert(remote_ip_info.country +' '+ remote_ip_info.province + '省'+' '+ remote_ip_info.city + '市');
            } else {
                alert('没有找到匹配的IP地址信息！');
            }
        });
}
//天气获取
function showLocale(objD) {
    var str, colorhead, colorfoot;
    var yy = objD.getYear();
    if (yy < 1900) yy = yy + 1900;
    var MM = objD.getMonth() + 1;
    if (MM < 10) MM = '0' + MM;
    var dd = objD.getDate();
    if (dd < 10) dd = '0' + dd;
    var hh = objD.getHours();
    if (hh < 10) hh = '0' + hh;
    var mm = objD.getMinutes();
    if (mm < 10) mm = '0' + mm;
    var ss = objD.getSeconds();
    if (ss < 10) ss = '0' + ss;
    var ww = objD.getDay();
    if (ww == 0) colorhead = "";
    if (ww > 0 && ww < 6) colorhead = "";
    if (ww == 6) colorhead = "";
    if (ww == 0) ww = "星期日";
    if (ww == 1) ww = "星期一";
    if (ww == 2) ww = "星期二";
    if (ww == 3) ww = "星期三";
    if (ww == 4) ww = "星期四";
    if (ww == 5) ww = "星期五";
    if (ww == 6) ww = "星期六";
    colorfoot = ""
    str = colorhead + yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + " " + ww + colorfoot;
    return (str);
}

function tick() {
    var today;
    today = new Date();
    document.getElementById("sj").innerHTML = showLocale(today);
    window.setTimeout("tick()", 1000);
}
tick();

function findWeather() {
    var cityUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';
    $.getScript(cityUrl, function(script, textStatus, jqXHR) {
        var citytq = remote_ip_info.city; // 通过IP获取城市

        citytq = "西安";
        var url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + citytq + "&day=0&dfc=3";
        $.ajax({
            url: url,
            dataType: "script",
            scriptCharset: "gbk",
            success: function(data) {
                var _w = window.SWther.w[citytq][0];
                var tq = citytq + " " + _w.s1 + " " + _w.t1 + "℃～" + _w.t2 + "℃ ";
                if(_w.t1-_w.t2>10)
                {
                    alert(tq+"今天温差过大;要注意保暖");
                }
                if(10>_w.t1-_w.t2>0||_w.t1<10||_w.t2<10)
                {
                    alert(tq+"今天要冻成狗了");
                }
            }
        });
    });
}

