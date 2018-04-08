
require(['config'],function(){

    // 建议：有返回值的写前面
    require(['jquery','zoom'],function($,z){

        $.ajax({
            url:'../api/carlist.php',
            dataType:'json',
            success:function(data){
                // console.log(data);
                let res = data.map(function(item){

                  return  `<li data-id="${item.id}" class="car_item_li clearfix">
                            <div class="fl w818">
                              <input class="item_danxuan" type="checkbox" />
                            </div>
                            <div class="fl w245">
                              <div class="car_item_img">
                                <img src="${item.img}" alt="" />
                              </div>
                              <div class="car_item_xq">
                                <p class="car_item_bt">
                                  <a href="">${item.description}</a>
                                </p>
                                <p class="car_item_bm">商品编码: 81619284-1</p>
                                <p class="car_item_gj">此商品在中国有售</p>
                              </div>
                            </div>
                            <div class="item_sx w818"></div>
                            <div class="item_price w1636">
                                ¥${item.price}
                            </div>
                            <div class="item_qty w1636">
                              <span class="item_qty_less">-</span>
                              <input class="item_qty_txt" type="text" value="${item.qty}" />
                              <span class="item_qty_more">+</span>
                            </div>
                            <div class="item_xj_price w1636">
                              ¥${item.xiaoji}
                            </div>
                            <div class="del_item w818">
                              <span class="iconfont icon-shanchu"></span>
                            </div>
                          </li>`

                }).join('');

                $('.lx_create_ul').append(res);

            }
        })


        var lx_create_ul = document.querySelector('.lx_create_ul');
        console.log(lx_create_ul);

        var item_qty_less = document.querySelector('.item_qty_less');
        console.log(item_qty_less);
        
        // 增加数量
        $('.item_qty_more').on('click',function(){
            // console.log(666);
            let $item_qty_txt = $('.item_qty_txt').val()*1;
            $item_qty_txt += 1;
            $('.item_qty_txt').val($item_qty_txt);
            // console.log($('.item_qty_txt').val());
            
        })

        // 减少数量
        $('.item_qty_less').on('click',function(){
            // console.log(666);
            let $item_qty_txt = $('.item_qty_txt').val()*1;
            console.log($item_qty_txt);
            $item_qty_txt -= 1;
            $('.item_qty_txt').val($item_qty_txt);
            // console.log($('.item_qty_txt').val());
        })
  

    })

});