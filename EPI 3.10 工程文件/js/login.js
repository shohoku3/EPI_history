 //用户名失去焦点
 $('.username').blur(function() {
     reg = /^0[2|3|4|5]1[2|3|4|5|6]\d{4,8}$/i; //正则学号验证
     if ($('.username').val() == "") {
         $('.username').css("border", "2px solid red");
         $('.username').parent().addClass("errorC"); //遍历
         $('.error1').html("请输入用户名");
         $('.error1').css("display", "block");
         /*$("#mz_Float").hide();*/
         $('#login-button').click(function() {
            window.location.href = "login.html";
         })
     } else if ($('.username').val().length < 8) {
         $('.username').parent().addClass("errorC");
         $('.error1').html("用户名长度有问题哦");
         $('.error1').css("display", "block");
         $('.username').css("border", "2px solid red");
         /*$("#mz_Float").hide();*/
         $('#login-button').click(function() {
             window.location.href = "login.html";
         })
     } else if (!reg.test($('.username').val())) {
         $('.username').parent().addClass("errorC");
         $('.error1').html("你丫逗我呢，这是你学号");
         $('.error1').css("display", "block");
         $('.username').css("border", "2px solid red");
         /*$("#mz_Float").hide();*/
         $('#login-button').click(function() {
             window.location.href = "login.html";
         })
     } else {
         $('.username').css("border", "2px solid green");
         $('.error1').hide();
         /*$("#mz_Float").hide();*/
     }
 });
 //密码栏失去焦点
 $('.password').blur(function() {
     reg = /^1[2|3|4|5|6]\d{3,6}$/i; //密码正则验证
     if ($('.password').val() == "") {
         $('.password').css("border", "2px solid red");
         $('.password').parent().addClass("errorC");
         $('.error2').html("请输入密码");
         $('.error2').css("display", "block");
         $("#mz_Float").hide();
         $('#login-button').click(function() {
             window.location.href = "login.html";
         });
     } else if ($('.password').val().length < 6) {
         $('.password').parent().addClass("errorC");
         $('.error2').html("密码长度有问题哦");
         $('.error2').css("display", "blcok");
         /*$("#mz_Float").hide();*/
         $('.password').css("border", "2px solid red");
         $('#login-button').click(function() {
             window.location.href = "login.html";
         });
     } else if (!reg.test($('.password').val())) {
         $('.password').parent().addClass("errorC");
         $('.error2').html("这密码我看不懂，傲娇~");
         $('.error2').css("display", "block");
         $('.password').css("border", "2px solid red");
         /*$("#mz_Float").hide();*/
         $('#login-button').click(function() {
             window.location.href = "login.html";
         })
     } else {
         $('.password').css("border", "2px solid green");
         $('.error2').hide();
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
 //密码获得焦点
 $('.password').focus(function() {
     $('.password').parent().removeClass("errorC");
     $('.error2').hide();
     $("#mz_Float").css("top", "260px");
     $("#mz_Float").find(".bRadius2").html("输入6位密码，<a href='forget.html' style='color:#fff'>忘记密码点我</a>");
 });
 //登陆动画
 $('#login-button').click(function(event) {
     event.preventDefault();
     $('#login-form').fadeOut(500);
     $('#login-box').addClass('success');
     setTimeout(function() {
         $('#bonfire-pageloader').show();
     }, 500);
     setTimeout(function() {
         $('#bonfire-pageloader').hide();
     }, 3000);
     setTimeout(function() {
         $('#login-box h2').show();
     }, 3100);
     setTimeout(function() {
         $('#login-box').hide();
     }, 4000);
     setTimeout(function() {
         window.location.href = "mange.html";
     }, 4200);
 });
 //皆空
 $('#login-button').click(function() {
     if ($('.username').val() == "" && $('.password').val() == "") {
         window.location.href = "login.html"
     }
 });
 $('#login-button').click(function() {
     if ($('.username').val() == "") {
         window.location.href = "login.html"
     }
 });
 $('#login-button').click(function() {
     if ($('.password').val() == "") {
         window.location.href = "login.html"
     }
 });

//正则表达式 检测登陆名和密码某几位是否一致 
