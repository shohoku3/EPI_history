//用户名失去焦点
$('.username').blur(function() {
    reg = /^0[2|3|4|5]1[2|3|4|5|6]\d{4,8}$/i; //正则学号验证
    if ($('.username').val() == "") {
        $('.username').css("border", "2px solid red");
        $('.username').parent().addClass("errorC"); //遍历
        $('.error1').html("请输入用户名");
        $('.error1').css("display", "block");
        /*$("#mz_Float").hide();*/
        $('#register-button').click(function() {
            window.location.href = "register.html";
        })
    } else if ($('.username').val().length < 8) {
        $('.username').parent().addClass("errorC");
        $('.error1').html("用户名长度有问题哦");
        $('.error1').css("display", "block");
        $('.username').css("border", "2px solid red");
        /*$("#mz_Float").hide();*/
        $('#register-button').click(function() {
            window.location.href = "register.html";
        })
    } else if (!reg.test($('.username').val())) {
        $('.username').parent().addClass("errorC");
        $('.error1').html("你丫逗我呢，这是你学号");
        $('.error1').css("display", "block");
        $('.username').css("border", "2px solid red");
        /*$("#mz_Float").hide();*/
        $('#register-button').click(function() {
            window.location.href = "register.html";
        })
    } else {
        $('.username').css("border", "2px solid green");
        $('.error1').hide();
        /*$("#mz_Float").hide();*/
    }
});
//手机失去焦点
$('.phone').blur(function() {
    reg = /^1[3|4|5|8][0-9]\d{4,8}$/i; //正则手机号验证
    if ($('.phone').val() == "") {
        $('.phone').css("border", "2px solid red");
        $('.phone').parent().addClass("errorC"); //遍历
        $('.error2').html("请输入手机名");
        $('.error2').css("display", "block");
        $("#mz_Float").hide();
        $('#register-button').click(function() {
            window.location.href = "register.html";
        })
    } else if ($('.phone').val().length < 11) {
        $('.phone').parent().addClass("errorC");
        $('.error2').html("用户名长度有问题哦");
        $('.error2').css("display", "block");
        $('.phone').css("border", "2px solid red");
        /*$("#mz_Float").hide();*/
        $('#register-button').click(function() {
            window.location.href = "register.html";
        })
    } else if (!reg.test($('.phone').val())) {
        $('.phone').parent().addClass("errorC");
        $('.error2').html("你丫逗我呢，这是你手机号");
        $('.error2').css("display", "block");
        $('.phone').css("border", "2px solid red");
        /*$("#mz_Float").hide();*/
        $('#register-button').click(function() {
            window.location.href = "register.html";
        })
    } else {
        $('.phone').css("border", "2px solid green");
        $('.error2').hide();
        $("#mz_Float").hide();
    }
});
//邮箱失去焦点
$('.email').blur(function() {
    reg = /^\w+[@]\w+((.com)|(.net)|(.cn)|(.org)|(.gmail))$$/; //正则学号验证
    if ($('.email').val() == "") {
        $('.email').css("border", "2px solid red");
        $('.email').parent().addClass("errorC"); //遍历
        $('.error3').html("邮箱不能为空");
        $('.error3').css("display", "block");
        /*$("#mz_Float").hide();*/
        $('#register-button').click(function() {
            window.location.href = "register.html";
        })
    } else if (!reg.test($('.email').val())) {
        $('.email').parent().addClass("errorC");
        $('.error3').html("邮箱格式错误");
        $('.error3').css("display", "block");
        $('.email').css("border", "2px solid red");
        /*$("#mz_Float").hide();*/
        $('#register-button').click(function() {
            window.location.href = "register.html";
        })
    } else {
        $('.email').css("border", "2px solid green");
        $('.error3').hide();
        /*$("#mz_Float").hide();*/
    }
});
//密码栏失去焦点
$('.password').blur(function() {
    reg = /^1[2|3|4|5|6]\d{3,6}$/i; //密码正则验证
    if ($('.password').val() == "") {
        $('.password').css("border", "2px solid red");
        $('.password').parent().addClass("errorC");
        $('.error4').html("请输入密码");
        $('.error4').css("display", "block");
        /*$("#mz_Float").hide();*/
        $('#login-button').click(function() {
            window.location.href = "register.html";
        });
    } else if ($('.password').val().length < 6) {
        $('.password').parent().addClass("errorC");
        $('.error4').html("密码长度有问题哦");
        $('.error4').css("display", "blcok");
        /*$("#mz_Float").hide();*/
        $('.password').css("border", "2px solid red");
        $('#login-button').click(function() {
            window.location.href = "register.html";
        });
    } else if (!reg.test($('.password').val())) {
        $('.password').parent().addClass("errorC");
        $('.error4').html("这密码太简单了");
        $('.error4').css("display", "block");
        $('.password').css("border", "2px solid red");
        /*$("#mz_Float").hide();*/
        $('#login-button').click(function() {
            window.location.href = "register.html";
        })
    } else {
        $('.password').css("border", "2px solid green");
        $('.error4').hide();
        $("#mz_Float").hide();
    }
});
//用户名获得焦点
$('.username').focus(function() {
    $('.username').parent().removeClass("errorC");
    $('.error1').hide();
    $("#mz_Float").css("top", "185px");
    $("#mz_Float").find(".bRadius2").html("输入8位学号，可用于登录和找回密码");
});
//手机号获得焦点
$('.phone').focus(function() {
    $('.phone').parent().removeClass("errorC");
    $('.error2').hide();
    $("#mz_Float").css("top", "250px");
    $("#mz_Float").find(".bRadius2").html("输入11位手机号，可用于装逼");
});
//密码获得焦点
$('.password').focus(function() {
    $('.password').parent().removeClass("errorC");
    $('.error2').hide();
    $("#mz_Float").css("top", "385px");
    $("#mz_Float").find(".bRadius2").html("输入6位密码，<a href='forget.html' style='color:#fff'>忘记密码戳我</a>");
});
//按钮动画
$('#register-button').click(function(event) {
    event.preventDefault();
    $('#register-form').fadeOut(500);
    $('#register-box').addClass('success');
    setTimeout(function() {
        $('#bonfire-pageloader').show();
    }, 500);
    setTimeout(function() {
        $('#bonfire-pageloader').hide();
    }, 3000);
    setTimeout(function() {
        $('#register-box h2').show();
    }, 3100);
    setTimeout(function() {
        $('#register-box').hide();
    }, 4000);
    setTimeout(function() {
        window.location.href = "mange.html";
    }, 4000);
});
//皆空
$('#register-button').click(function() {
    if ($('.username').val() == "" && $('.password').val() == "" && $('.phone').val() == "" && $('.mail').val() == "") {
        window.location.href = "register.html"
    }
});
//邮箱栏键盘操作
$(".email").keyup(function() { //键盘监听keyup,keydown,keypress
    var emailVal = $(".email").val();
    emailValN = emailVal.replace(/\s/g, ''); //去空
    emailValN = emailValN.replace(/[\u4e00-\u9fa5]/g, ''); //屏蔽中文
    if (emailValN != emailVal) {
        $(".email").val(emailValN);
    }

    var mailVal = emailValN.split("@");
    var mailHtml = mailVal[0];
    if (mailHtml.length > 15) {
        mailHtml = mailHtml.slice(0, 15) + "..."; //字数超加省略
    }

    for (var i = 1; i < 6; i++) {
        var M = $(".item" + i).attr("data-mail");
        $(".item" + i).html(mailHtml + M);
    }
});
//邮箱提示
$(".item").click(function() {
    var a = $(".email").val();
    var b = $(this).attr("data-mail");
    $(".email").val(a + b);
    $(".email").trigger("focus"); //setTimeout($(".email").("focus") );效果同，时间设多少无所谓
});
$(".email").click(function() {
    if ($(".error1").css("display") == "block" && $(".error3").css("display") == "block") {
        $(".mail").css("top", "489px");
    } else if ($(".error1").css("display") == "block" || $(".error3").css("display") == "block") {
        $(".mail").css("top", "459px");
    } else {
        $(".mail").css("top", "429px");
    }
    $(".mail").show();
    return false;
});
$(document).click(function() {
    $(".mail").hide();
});
