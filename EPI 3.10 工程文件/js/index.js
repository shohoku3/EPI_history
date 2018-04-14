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
function dispalytime() {
    var elt = document.getElementById('clock');
    var now = new Date();
    elt.innerHTML=now.toLocaleTimeString()
    setTimeout(dispalytime, 1000);
}
//日历头显示实时日期3日内
function getday() {
    var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate1 = date.getDate();
    var strDate2 = date.getDate() + 1;
    var strDate3 = date.getDate() + 2;
    var currentdate1 = month + seperator1 + strDate1;
    var currentdate2 = month + seperator1 + strDate2;
    var currentdate3 = month + seperator1 + strDate3;
    document.getElementById('displaydate1').innerHTML = currentdate1.toString();
    document.getElementById('displaydate2').innerHTML = currentdate2.toString();
    document.getElementById('displaydate3').innerHTML = currentdate3.toString();
};
//日期后缀显示
function postfix() {
    var date = new Date();
    var strDate = date.getDate();
    switch (strDate) {
        case 1:
        case 11:
        case 31:
        document.getElementById('daypostfix1').innerHTML = "st";
        document.getElementById('daypostfix2').innerHTML = "st";
        document.getElementById('daypostfix3').innerHTML = "st"
        case 2:
        case 22:
        document.getElementById('daypostfix1').innerHTML = "nd";
        document.getElementById('daypostfix2').innerHTML = "st";
        document.getElementById('daypostfix3').innerHTML = "st"
        case 3:
        case 23:
        document.getElementById('daypostfix1').innerHTML = "rd";
        document.getElementById('daypostfix2').innerHTML = "rd";
        document.getElementById('daypostfix3').innerHTML = "rd";
        default:
        document.getElementById('daypostfix1').innerHTML = "th";
        document.getElementById('daypostfix2').innerHTML = "th";
        document.getElementById('daypostfix3').innerHTML = "th";
    }
}
//星期获取
function displayWeekday() {
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
    document.getElementById('weekday').innerHTML = t.toString();
    setTimeout(displayWeekday, 1000);
}
window.onload=function(){
displayWeekday();
dispalytime();
getday();
postfix();
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
                if (_w.t1 - _w.t2 > 10) {
                    alert(tq + "今天温差过大;要注意保暖");
                }
                if (10 > _w.t1 - _w.t2 > 0 || _w.t1 < 10 || _w.t2 < 10) {
                    alert(tq + "今天要冻成狗了");
                }
            }
        });
    });
}
