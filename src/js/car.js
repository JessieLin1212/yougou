
require(['config'],function(){

    // 建议：有返回值的写前面
    require(['jquery','zoom'],function($,z){

        $.ajax({
            url:'../api/carlist.php',
            dataType:'json',
            success:function(data){
                // console.log(data);
                let res = data.map(function(item){

                  return  `<li data-id="${item.id}" class="car_item_li">
                        <div class="item_check">
                            <input class="item_check" type="checkbox" />
                        </div>
                        <div class="car_img">
                            <img src="${item.img}" alt="" />
                        </div>
                        <div class="car_title goods_name">
                            <a href="">${item.title}</a>
                        </div>
                        <div class="color_box goods_color">
                            <p>颜色：<span class="item_color">${item.color}</span></p>
                            <p>尺码：<span class="goods_size">${item.size}</span></p>
                        </div>
                        <div class="goods_price sale_price">${item.sale_price}</div>
                        
                        <div class="item_qty goods_qty">
                            <span class="item_qty_less">-</span>
                            <input class="item_qty_txt" type="text" value="${item.qty}" />
                            <span class="item_qty_more">+</span>
                        </div>
                        <div class="item_xj_price goods_xj">${item.xiaoji}</div>
                        <div class="goods_cz">
                            <a href="">移入收藏夹</a>
                            <a href="">删除</a>
                        </div>
                    </li>`

                }).join('');

                $('.car_list').append(res);

                // 增加数量
                // function qty_more(){

                //     $.ajax({
                //         url:'../api/carlist.php',
                //         dataType:'json',
                //         data:{
                //             type:'more',
                //             id:$id,
                //             qty:$qty
                //         },
                //         success:function(data){

                //             // console.log(data);

                //             let car_qty = data.map(function(item){

                //                 return `<span class="item_qty_less">-</span>
                //                         <input class="item_qty_txt" type="text" value="${item.qty}" />
                //                         <span class="item_qty_more">+</span>`

                //             }).join('');

                //             $('.item_qty').append(car_qty);



                //             let sale_price = data.map(function(item){

                //                 return `<span class="item_qty_less">-</span>
                //                         <input class="item_qty_txt" type="text" value="${item.qty}" />
                //                         <span class="item_qty_more">+</span>`

                //             }).join('');

                //             $('.color_box').after(sale_price);

                //         }

                //     });
                // }
                $('.item_qty_more').on('click',function(){
                    // console.log(666);

                    let $item_qty_txt = $(this).siblings('.item_qty_txt').val()*1;
                    $item_qty_txt += 1;
                    $(this).siblings('.item_qty_txt').val($item_qty_txt);
                    let $qty = $(this).siblings('.item_qty_txt').val();
                    // let $id = $(this).closest('.car_item_li').data("id");
                    // console.log($id);
                    
                })

                // 减少数量
                $('.item_qty_less').on('click',function(){
                    // console.log(666);
                    let $item_qty_txt = $(this).siblings('.item_qty_txt').val()*1;
                    // console.log($item_qty_txt);
                    $item_qty_txt -= 1;
                    if($item_qty_txt<=0){
                        $item_qty_txt = 1;
                    }
                    $(this).siblings('.item_qty_txt').val($item_qty_txt);

                })

                // 全选
                let $checkAll = $('.checkAll');
                let $item_check = $('.item_check');

                $checkAll.on('click',function(){

                    // 勾选复选框
                    $item_check.prop('checked',this.checked);
                    $checkAll.prop('checked',this.checked);

                });

                $item_check.on('click',function(){

                    checkall();

                });

                function checkall(){

                    // 获取选中的复选框
                    let $checkeds = $item_check.filter(':checked');

                    // 判断勾选数量与checkbox的数量是否相等
                    $checkAll.prop('checked',$item_check.length===$checkeds.length);
                }
            }
        })
         
    });

});