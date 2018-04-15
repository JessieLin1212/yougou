<?php
    // 引入其他文件
    require('connect.php');

    // 获取前端数据
    $c_id = isset($_GET['c_id']) ? $_GET['c_id'] : null;
    $img = isset($_GET['img']) ? $_GET['img'] : null;
    $title = isset($_GET['title']) ? $_GET['title'] : null;
    $color = isset($_GET['color']) ? $_GET['color'] : null;
    $size = isset($_GET['size']) ? $_GET['size'] : null;
    $price = isset($_GET['price']) ? $_GET['price'] : null;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : null;
    $xiaoji = isset($_GET['xiaoji']) ? $_GET['xiaoji'] : null;

    $sql = "select c_id from car where c_id='$c_id'";

    $result = $conn->query($sql);

    if($result->num_rows>0){

        $sql = "update car set qty='$qty'+qty,xiaoji=qty*'$price' where c_id='$c_id'";

        // 执行sql语句
        $res = $conn->query($sql);
        // if($res){
        //     echo "you_ok";
        // }else{
        //     echo "you_error";
        // }
        echo "ok";
    }else{
        // 加入购物车（保存到数据库）
        $sql = "insert into car(c_id,img,title,color,size,sale_price,qty,xiaoji) values('$c_id','$img','$title','$color','$size','$price','$qty','$xiaoji')";

        // 执行sql语句
        $res = $conn->query($sql);

        // if($res){
        //     echo "wu_error";
        // }else{
        //     echo "wu_ok";
        // }
        echo "wu_ok";
    }

?>