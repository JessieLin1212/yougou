
require(['config'],function(){

    // 建议：有返回值的写前面
    require(['jquery','zoom'],function($,z){

        let $reg_phone = $('#reg_phone');
        let $reg_code = $('#reg_code');
        let $reg_pwd = $('#reg_pwd');
        let $reg_ag_pwd = $('#reg_ag_pwd');

        let $reg_hint = $('.reg_hint');
        // console.log($reg_hint);
        
        let $phone_hint = $('.phone_hint');
        // console.log($phone_hint);
        
        let $code_hint = $('.code_hint');

        let $pwd_hint = $('.pwd_hint');

        let $pwd_ag_hint = $('.pwd_ag_hint'); 

        let $reg_btn = $('#reg_btn');
        // console.log($reg_btn);


        // 生成验证码
        
        let $code_txt = $('.code_txt');

        show();
        
        function show(){

            let res = '';

            let str = '0123456789abcdefghijklmnopqrstuvwxyz';

            for(let i=0;i<4;i++){
                let idx = parseInt(Math.random()*str.length);
                res += str.charAt(idx);
            }

            $code_txt.html(res);
        }

        $code_txt.on('click',function(){
            show();
        })

        // 验证用户名
        $reg_phone.on('blur',function(){
            let $username = $reg_phone.val();

            if(!/^1[34578]\d{9}$/.test($username)){
                $phone_hint.removeClass('hint_ok');
                $phone_hint.addClass('hint_no');
                $phone_hint.html("格式错误");
            }else{
                $.ajax({
                    url: '../api/reg.php',
                    data:{
                        username:$username
                    },
                    success:function(data){
                        if(data === 'success'){
                            $phone_hint.removeClass('hint_no');
                            $phone_hint.addClass('hint_ok');
                            $phone_hint.html("用户名可用");
                        }else{
                            $phone_hint.removeClass('hint_ok');
                            $phone_hint.addClass('hint_no');
                            $phone_hint.html("该用户名已被注册");
                        }
                    }
                })
            };
            
        })

        // 验证验证码
        $reg_code.on('blur',function(){
            let $code = $reg_code.val();

            if($code == ''){
                $code_hint.removeClass('hint_ok');
                $code_hint.addClass('hint_no');
                $code_hint.html("请输入验证码");
            }else if($code != $code_txt.text()){
                $code_hint.removeClass('hint_ok');
                $code_hint.addClass('hint_no');
                $code_hint.html("验证码错误");
            }else if($code == $code_txt.text()){
                $code_hint.removeClass('hint_no');
                $code_hint.addClass('hint_ok');
                $code_hint.html("验证码正确");
            };
        })

        // 验证密码
        $reg_pwd.on('blur',function(){
            let $password = $reg_pwd.val();

            if(!/^[a-z][a-z0-9\-]{5,24}$/.test($password)){
                $pwd_hint.removeClass('hint_ok');
                $pwd_hint.addClass('hint_no');
                $pwd_hint.html("密码格式错误");
            }else{
                $pwd_hint.removeClass('hint_no');
                $pwd_hint.addClass('hint_ok');
                $pwd_hint.html("密码格式正确");
            };
        })

        // 确认密码
        $reg_ag_pwd.on('blur',function(){
            // console.log(888);

            let $password = $reg_pwd.val();
            let $ag_pwd = $reg_ag_pwd.val();
            if($password == $ag_pwd && $password != ''){
                $pwd_ag_hint.removeClass('hint_no');
                $pwd_ag_hint.addClass('hint_ok');
                $pwd_ag_hint.html("密码一致");

            }else if($ag_pwd != $password){
                $pwd_ag_hint.addClass('hint_no');
                $pwd_ag_hint.html("两次输入密码不一致");
            }
        })

        // 注册
        $('#reg_btn').on('click',function(){
            
            let $username = $reg_phone.val();
            let $code = $reg_code.val();
            let $password = $reg_pwd.val();
            let $ag_password = $reg_ag_pwd.val();
            // console.log($username);
            // console.log($password);
            if($username == '' && $code == '' && $password == '' && $ag_password == ''){
                // console.log(666);    
                
                $phone_hint.removeClass('hint_ok');
                $phone_hint.addClass('hint_no');
                $phone_hint.html("请输入手机号码");

                $code_hint.removeClass('hint_ok');
                $code_hint.addClass('hint_no');
                $code_hint.html("请输入验证码");

                $pwd_hint.removeClass('hint_ok');
                $pwd_hint.addClass('hint_no');
                $pwd_hint.html("请输入密码格");

                $pwd_ag_hint.removeClass('hint_ok');
                $pwd_ag_hint.addClass('hint_no');
                $pwd_ag_hint.html("请输入确认密码");

            }else if(!$reg_hint.hasClass('hint_no')){
                $.ajax({
                    url:'../api/reg.php',
                    data:{
                        username:$username,
                        password:$password,
                        type:'reg'
                    },
                    success:function(data){
                        console.log(data);
                        if(data == 'ok'){
                            // alert('注册成功！');
                            window.location.href="../html/login.html";
                        }
                    }
                })
            }

        })
         
    });

});