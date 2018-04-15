
require(['config'],function(){

    // 建议：有返回值的写前面
    require(['jquery','zoom'],function($,z){

        //返回顶部
        let toTop = document.querySelector('#to_top');

        window.onscroll = function(){

            // 获取滚动条滚动果的距离
            let scrollTop = window.scrollY;

            // 滚动到700时显示返回顶部效果
            if(scrollTop >= 700){
                toTop.style.display = 'block';
            }else{
                toTop.style.display = 'none';
            }
        }

        // 点击返回顶部
        toTop.onclick = function(){

            let timer = setInterval(function(){

                // 滚动过的距离越大，返回越快
                let scrollTop = window.scrollY;

                // 速度
                let speed = Math.floor(scrollTop/10);

                if(scrollTop<=10 || speed === 0){
                    clearInterval(timer);
                }
                window.scrollBy(0,-speed);
            },30);
        }

        // 接收参数
        var params = location.search.slice(1);
        console.log(params);

        $.ajax({
            url:'../api/datails.php',
            data:{
                id:params
            },
            dataType:'json',
            success:function(data){

                let goods_title = data.map(function(item){
                    return `<span class="goods_title">${item.title}</span>`

                }).join('');

                $('.details_fenlei').append(goods_title);



                let img_box = data.map(function(item){
                    return `<div class="big_img">
                                <img src="${item.img1}" alt="" />
                            </div>
                            <div class="small_img">
                                <img class="img_active" src="${item.img1}" alt="" />
                                <img src="${item.img2}" alt="" />
                                <img src="${item.img3}" alt="" />
                            </div>
                            <div class="img_footer">
                                <p class="goods_num">
                                    商品编号：100598788
                                </p>
                                <div class="fenxiang">
                                    <i></i>
                                    <a href="">分享</a>
                                    <i></i>
                                    <a href="">收藏</a>
                                </div>
                            </div>`

                }).join('');

                $('.img_box').append(img_box);


                
                let content = data.map(function(item){
                    return `<h1 class="details_title">${item.title}</h1>
                            <p>时尚铆钉，金属扣装饰</p>
                            <a href="">更多teenmix/天美意商品>></a>
                            <div class="d_price_box">
                                ¥
                                <b class="sale_price">${item.sale_price}</b>
                                <del>
                                    ¥
                                    <i class="goods_price">${item.goods_price}</i>
                                </del>
                            </div>`

                }).join('');

                $('.content_box').prepend(content);


                
                let choose = data.map(function(item){
                    return `<div class="color_box">
                                    <em>颜色</em>
                                    <span class="color_active" data-name="${item.color}">
                                        <img src="${item.img}" alt="" />
                                    </span>
                                </div>
                                <p class="size_box">
                                    <em>尺码</em>
                                    <span class="size_active">${item.size}</span>
                                </p>`

                }).join('');

                $('.choose_box').prepend(choose);



                let color = data.map(function(item){
                    return `<em class="choose_color">${item.color}</em>`

                }).join('');

                $('.qty_box').append(color);



                // 放大镜
                $('.big_img').gdsZoom({
                    position:'right'
                });

                $('.small_img').on('click','img',function(){

                    $('.big_img img').attr({
                        src:this.src,
                        'data-big':this.dataset.big || this.src
                    })

                    if($(this).hasClass('img_active')){
                        $(this).siblings().removeClass('img_active');
                    }else{
                        $(this).siblings().removeClass('img_active');
                        $(this).addClass('img_active');
                    }
                    
                })

                // 加入购物车
                $('#add_btn').on('click',function(){
                    console.log(params);

                    let $img = $('.color_active').find('img')[0].src;

                    let $title = $('.details_title').text();

                    let $color = $('.choose_color').text();

                    let $size = $('.size_active').text();
                  
                    let $price = $('.sale_price').text();

                    let $qty = $('.qty_txt').val();
                  
                    let xiaoji = $price*$qty;

                    console.log($img,$title,$color,$size,$price,$qty,xiaoji);

                    $.ajax({
                        url:'../api/addcar.php',
                        data:{
                            c_id:params,
                            img:$img,
                            title:$title,
                            color:$color,
                            size:$size,
                            price:$price,
                            qty:$qty,
                            xiaoji:xiaoji
                        },
                        dataType:'json',
                        success:function(data){
                            console.log(data);
                        }
                    
                    })

                    location.href = 'car.html';

                })

            }


        })

        

        // 增加数量
        $('.qty_more').on('click',function(){
            // console.log(666);
            let $qty_txt = $('.qty_txt').val()*1;
            $qty_txt += 1;
            $('.qty_txt').val($qty_txt);
            // console.log($('.qty_txt').val());
            
        })

        // 减少数量
        $('.qty_less').on('click',function(){
            // console.log(666);
            let $qty_txt = $('.qty_txt').val()*1;
            $qty_txt -= 1;
            if($qty_txt<=0){
                $qty_txt = 1;
            }
            $('.qty_txt').val($qty_txt);
            // console.log($('.qty_txt').val());
        })


         
    });

});