
require(['config'],function(){

    // 建议：有返回值的写前面
    require(['jquery','zoom'],function($,z){

        let $u_tishi = $('#phoneNum').next()[0];
        // console.log($u_tishi);
        
        let $p_tishi = $('#psd').next()[0];

        let $pa_tishi = $('#psd_again').next()[0]; 

        let $submit_button = $('.submit_button')[0];
        // console.log($submit_button)

        $('#phoneNum').on('blur',function(){
            let $username = $('#phoneNum').val();

            if(!/^1[34578]\d{9}$/.test($username)){
                $u_tishi.classList.remove('tishi_yes');
                $u_tishi.classList.add('tishi');
                $u_tishi.innerHTML = "请输入正确的手机号";
            }else{
                $.ajax({
                    url: '../api/reg.php',
                    data:{
                        username:$username
                    },
                    success:function(data){
                        if(data === 'success'){
                            $u_tishi.classList.remove('tishi');
                            $u_tishi.classList.add('tishi_yes');
                            $u_tishi.innerHTML = "用户名可用";
                        }else{
                            $u_tishi.classList.remove('tishi_yes');
                            $u_tishi.classList.add('tishi');
                            $u_tishi.innerHTML = "* 该用户名已被注册"
                        }
                    }
                })
            };
            
        })

        $('#psd').on('blur',function(){
            let $password = $('#psd').val();
            // let $psd_again = $('#psd_again').val();

            if(!/^[a-z][a-z0-9\-]{5,19}$/.test($password)){
                $p_tishi.classList.remove('tishi_yes');
                $p_tishi.classList.add('tishi');
                $p_tishi.innerText = '密码格式错误';
            }else{
                $p_tishi.classList.remove('tishi');
                $p_tishi.classList.add('tishi_yes');
                $p_tishi.innerText = '密码格式正确';
            };
        })

        $('.submit_button').on('click',function(){
            // console.log(666)
            let $username = $('#phoneNum').val();
            let $password = $('#psd').val();
            let $psd_again = $('#psd_again').val();

            if($password == $psd_again && $password != ''){
                $p_tishi.classList.remove('tishi');
                $p_tishi.classList.add('tishi_yes');
                $p_tishi.innerText = "密码一致";
                $pa_tishi.classList.remove('tishi');
                $pa_tishi.classList.add('tishi_yes');
                $pa_tishi.innerText = "密码一致";

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
                            alert('注册成功！');
                            window.location.href="../html/login.html";
                        }
                    }
                })

            }else if($psd_again != $password){

                $pa_tishi.classList.remove('tishi_yes');
                $pa_tishi.classList.add('tishi');
                $pa_tishi.innerText = '*两次输入密码不一致，请重新输入';
            }

        })

    })

});