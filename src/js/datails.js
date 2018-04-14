
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

                // console.log(img_box);

                $('.img_box').append(img_box);


                


                



                // $('.img_big').gdsZoom({
                //   position:'right'
                // });

                // $('.img_small').on('click','img',function(){
                //   $('.img_big img').attr({
                //     src:this.src,
                //     'data-big':this.dataset.big || this.src
                //   })
                // })

            }


        })


        // 增加数量
        // $('.details_qty_more').on('click',function(){
        //     // console.log(666);
        //     let $details_qty = $('.details_qty').val()*1;
        //     $details_qty += 1;
        //     $('.details_qty').val($details_qty);
        //     // console.log($('.details_qty').val());
            
        // })

        // 减少数量
        // $('.details_qty_less').on('click',function(){
        //     // console.log(666);
        //     let $details_qty = $('.details_qty').val()*1;
        //     $details_qty -= 1;
        //     $('.details_qty').val($details_qty);
        //     // console.log($('.details_qty').val());
        // })
         
    });

});