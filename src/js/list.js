
require(['config'],function(){

    // 建议：有返回值的写前面
    require(['jquery','zoom'],function($,z){

        // 请求加载数据
        auto_ajax();

        // 综合排序
        function auto_ajax(){
            let $page = $('.page_active').text();
            $('.goodslist').html('');
            $.ajax({
                url:'../api/list.php',
                dataType:'json',
                data:{
                    type:'recommend',
                    page:$page,
                    qty:15
                },
                success:function(data){

                    // console.log(data);

                    let res = data.map(function(item){

                        return `<li data-id="${item.id}">
                                    <div class="img_box">
                                        <img src="${item.img}" alt="" />
                                        <p>限时抢<b>¥<span>${item.sale_price}</span></b></p>
                                    </div>
                                    <div class="goods_jieshao">
                                        <span class="goods_title">${item.title}</span>
                                        <p class="price_box">
                                            ¥<b class="sale_price">${item.sale_price}</b>
                                            <del>¥<i class="goods_price">${item.goods_price}</i></del>
                                        </p>
                                    </div>
                                </li>`

                    }).join('');

                    // console.log(res);

                    $('.goodslist').append(res);

                }

            });

        }

        $('.list_recommend').on('click',function(){
            // console.log(666);

            if($(this).hasClass('sort_active')){
                $(this).siblings().removeClass('sort_active');
                // $(this).addClass('sort_active');
            }else{
                $(this).siblings().removeClass('sort_active');
                $(this).addClass('sort_active');
            }

            auto_ajax();
        })

        // 分页
        $('.list_page').on('click',function(){

            // console.log($(this));

            if($(this).hasClass('page_active')){
                $(this).siblings().removeClass('page_active');
            }else{
                $(this).siblings().removeClass('page_active');
                $(this).addClass('page_active');
            }

            if($('.price_sort').hasClass('sort_active')){

                price_ajax();
                
            }else{
                auto_ajax();
            }
            
        })

        // 价格排序
        function price_ajax(){
            let $page = $('.page_active').text();
            // console.log($page);
            $('.goodslist').html('');
            $.ajax({
                url:'../api/list.php',
                dataType:'json',
                data:{
                    type:'price',
                    page:$page,
                    qty:15
                },
                success:function(data){

                    // console.log(data);

                    let res = data.map(function(item){

                        return `<li data-id="${item.id}">
                                    <div class="img_box">
                                        <img src="${item.img}" alt="" />
                                        <p>限时抢<b>¥<span>${item.sale_price}</span></b></p>
                                    </div>
                                    <div class="goods_jieshao">
                                        <span class="goods_title">${item.title}</span>
                                        <p class="price_box">
                                            ¥<b class="sale_price">${item.sale_price}</b>
                                            <del>¥<i class="goods_price">${item.goods_price}</i></del>
                                        </p>
                                    </div>
                                </li>`

                    }).join('');

                    // console.log(res);

                    $('.goodslist').append(res);

                }

            });
        }

        $('.price_sort').on('click',function(){

            if($(this).hasClass('sort_active')){
                $(this).siblings().removeClass('sort_active');
            }else{
                $(this).siblings().removeClass('sort_active');
                $(this).addClass('sort_active');
            }

            price_ajax()
        })

        //传参
        $('.goodslist').on("click","li",function(){
            let params = this.getAttribute('data-id');
            console.log(params);
            location.href = 'details.html?' + params;

        }) ;
         
    });

});