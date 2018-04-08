<?php

    // 引入其他connect.php文件(连接数据库)
    require('connect.php');

    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;
    $type = isset($_GET['type']) ? $_GET['type'] : null;

    // 查找数据库判断用户名是否存在
    $sql = "select username from user where username='$username'";

    $result = $conn->query($sql);

    if($result->num_rows>0){
        echo "fail";
    }else{

        if($type === 'reg'){

            // 加密密码
            $password = md5($password);

            // 注册（保存到数据库）
            $sql = "insert into user(username,password) values('$username','$password')";

            // 执行sql语句
            $res = $conn->query($sql);

            if($res){
                echo "ok";
            }else{
                echo "error";
            }
            
        }else{

            echo "success";

        }
    }

?>