
require(['config'],function(){

    // 建议：有返回值的写前面
    require(['jquery','zoom'],function($,z){

        let $code_tishi = $('.code_num').next()[0];

        // 生成验证码
        show();

        function randomNumber(min,max){
            return parseInt(Math.random()*(max-min+1)) + min
        }
        
        function show(){
            let res = [];

            for(var i=0;i<4;i++){
                res.push(randomNumber(0,9))
            }
            res = res.join('');
            $('.code_num')[0].innerHTML = res;
        }
        $('.code_num').on('click',function(){
            show();
        })


        // 验证用户名是否注册
        $('.login_button').on('click',function(){
            let $username = $('#userName').val();
            let $password = $('#login_psd').val();
            let $tishi = $('#login_psd').next()[0];
            // console.log($tishi);
            $.ajax({
                url:'../api/login.php',
                data:{
                    username:$username,
                    password:$password
                },
                success:function(data){
                    console.log(data);
                    if(data === 'fail'){
                        $tishi.classList.remove('tishi_yes');
                        $tishi.classList.add('tishi');
                        $tishi.innerHTML = "用户名或密码错误";
                    }else if(data === 'success'){

                        let $code = $('#code').val();
                        if($code != $('.code_num')[0].innerHTML){
                            show();
                            $code_tishi.classList.remove('tishi_yes');
                            $code_tishi.classList.add('tishi');
                            $code_tishi.innerText = "* 验证码不正确";
                        }else{
                            $code_tishi.classList.remove('tishi');
                            $code_tishi.classList.add('tishi_yes');
                            $code_tishi.innerText = "验证码一致";

                            $tishi.classList.remove('tishi');
                            $tishi.classList.add('tishi_yes');
                            $tishi.innerHTML = "用户名验证通过";
                            alert('登陆成功！');
                            window.location.href="../index.html";
                        }
                        
                    }
                    
                }

            })

        })

       
    })

});