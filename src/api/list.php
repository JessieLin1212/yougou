<?php
  
  // 引入其他文件
  require('connect.php');
  //include 'connect.php'

  // 获取前端数据
  $type = isset($_GET['type']) ? $_GET['type'] : null;
  $page = isset($_GET['page']) ? $_GET['page'] : 1;
  $qty = isset($_GET['qty']) ? $_GET['qty'] : 60;

  //获取查询结果集（集合）
  $idx = ($page-1)*$qty;

  if($type === 'zonghe'){
    $sql = "select * from goods order by id*1 limit $idx,$qty";

    // 查询sql语句,得到查询结果集合（对象）
    $res = $conn->query($sql);

    // 使用查询结果集,得到一个数组
    $row = $res->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集，避免资源浪费
    $res->close();

    // 关闭数据库，避免资源浪费
    $conn->close();
    echo json_encode($row,JSON_UNESCAPED_UNICODE);

  }else if($type === 'price'){
    $sql = "select * from goods order by price*1 limit $idx,$qty";

    $res = $conn->query($sql);

    $row = $res->fetch_all(MYSQLI_ASSOC);

    $res->close();

    $conn->close();
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
  }

?>