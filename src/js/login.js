
require(['config'],function(){

    // 建议：有返回值的写前面
    require(['jquery','zoom'],function($,z){

        let $login_phone = $('#login_phone');
        let $login_pwd = $('#login_pwd');
        let $login_btn = $('#login_btn');

        let $login_hint = $('.login_hint');
        let $phone_hint = $('.phone_hint');
        let $pwd_hint = $('.pwd_hint');


        // 验证账号不能为空
        $login_phone.on('blur',function(){
            let $username = $login_phone.val();

            if($username == ''){
                $phone_hint.removeClass('hint_ok');
                $phone_hint.addClass('hint_no');
                $phone_hint.html("请输入账号");
            };
        })

        // 验证密码不能为空
        $login_pwd.on('blur',function(){
            let $password = $login_pwd.val();

            if($password == ''){
                $pwd_hint.removeClass('hint_ok');
                $pwd_hint.addClass('hint_no');
                $pwd_hint.html("请输入密码");
            };
        })

        // 验证用户名是否注册
        $login_btn.on('click',function(){
            let $username = $login_phone.val();
            let $password = $login_pwd.val();

            if($username == ''){
                $phone_hint.removeClass('hint_ok');
                $phone_hint.addClass('hint_no');
                $phone_hint.html("请输入账号");
            }else{
                $phone_hint.removeClass('hint_no hint_ok');
                $phone_hint.html("");
            };

            if($password == ''){
                // console.log(666);
                $pwd_hint.removeClass('hint_ok');
                $pwd_hint.addClass('hint_no');
                $pwd_hint.html("请输入密码");
            }else{
                $pwd_hint.removeClass('hint_no hint_ok');
                $pwd_hint.html("");
            };

            if($username != '' && $password != ''){
                $.ajax({
                    url:'../api/login.php',
                    data:{
                        username:$username,
                        password:$password
                    },
                    success:function(data){
                        console.log(data);
                        if(data === 'fail'){
                            $phone_hint.removeClass('hint_ok');
                            $phone_hint.addClass('hint_no');
                            $phone_hint.html("您的账号或密码有误");
                        }else if(data === 'success'){

                            $login_hint.removeClass('hint_no hint_ok');
                            $login_hint.html("");
                            // alert('登陆成功！');
                            window.location.href="../index.html";
                            
                        }
                        
                    }

                })
            }

        })
         
    });

});