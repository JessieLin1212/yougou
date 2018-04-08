
require(['config'],function(){

    // 建议：有返回值的写前面
    require(['jquery','zoom'],function($,z){

        // console.log('name:',$);
        // console.log('aaaaa:',z);

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

        // console.log($('.img_big'));
        // $('.img_big').gdsZoom({
        //     position:'bottom'
        // })


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

                let res = data.map(function(item){

                    return `<div class="details_imgbox">
                               <div class="img_big">
                                   <img src="${item.img}" alt="" />
                               </div>
                               <div class="img_small">
                                   <ul>
                                       <li class="img_active">
                                           <img src="${item.img1}" alt="" />
                                       </li>
                                       <li>
                                           <img src="${item.img2}" alt="" />
                                       </li>
                                       <li>
                                           <img src="${item.img3}" alt="" />
                                       </li>
                                   </ul>
                               </div>
                           </div>`

                }).join('');

                // console.log(res);

                $('.details_xq_box').before(res);

                let price = data.map(function(item){

                    return `<p class="details_jiage">价格:
                                <span class="details_price">¥${item.price}</span>
                            </p>`

                }).join('');

                // console.log(res);

                $('.details_sl_box').before(price);

                
                let title = data.map(function(item){

                    return `<h2 class="details_title">${item.description}</h2>`

                }).join('');

                $('.details_title_box').append(title);

            }
        })


        // 增加数量
        $('.details_qty_more').on('click',function(){
            // console.log(666);
            let $details_qty = $('.details_qty').val()*1;
            $details_qty += 1;
            $('.details_qty').val($details_qty);
            // console.log($('.details_qty').val());
            
        })

        // 减少数量
        $('.details_qty_less').on('click',function(){
            // console.log(666);
            let $details_qty = $('.details_qty').val()*1;
            $details_qty -= 1;
            $('.details_qty').val($details_qty);
            // console.log($('.details_qty').val());
        })
        

        $('.addToCar').on('click',function(){
          console.log(params);

          let $img = $('.img_active').find('img')[0].src;

          let $description = $('.details_title').text();
          
          let $price = $('.details_price').text().slice(1);

          let $qty = $('.details_qty').val();
          console.log($qty);
          
          let xiaoji = $price*$qty;

          $.ajax({
              url:'../api/addcar.php',
              data:{
                  c_id:params,
                  img:$img,
                  description:$description,
                  price:$price,
                  qty:$qty,
                  xiaoji:xiaoji
              },
              dataType:'json',
              success:function(data){
                console.log(data);
                
              }
          })

          location.href = 'car.html'

        })



    })

});