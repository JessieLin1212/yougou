
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

        // 请求加载数据
        auto_ajax();

        function auto_ajax(){
            let $page = $('.fenye_active').text();
            $('.goods_ul').html('');
            $.ajax({
                url:'../api/list.php',
                dataType:'json',
                data:{
                    type:'zonghe',
                    page:$page,
                    qty:60
                },
                success:function(data){
                    // console.log(data);
                    // console.log($('.goods_ul'));

                    let res = data.map(function(item){

                        return `<li data-id="${item.id}">
                                    <a>
                                        <img src="${item.img}" alt="" />
                                        <p class="guoche_icon"><i class="iconfont icon-xiaohuoche"></i></p>
                                    </a>
                                    <div class="goods_xiangqi">
                                        <div class="good_jieshao">
                                            <p>
                                                <a class="description">${item.description}</a>
                                            </p>
                                            <p class="goods_price">¥<span class="goods_lx_jg">${item.price}</span></p>
                                        </div>
                                        
                                        <div class="goods_guojia">
                                            <i></i>
                                            <p>中国</p>
                                        </div>
                                    </div>
                                </li>`

                    }).join('');

                    // console.log(res);

                   $('.goods_ul').append(res);

                }

            });

        }

        $('.lx_zh').on('click',function(){
            // console.log(666)
            auto_ajax();
        })

        // $paixu = $('.goods_box').find('.paixu');
        // // console.log($paixu)
        // $paixu.on('click','span',function(){
        //     console.log(this.parentNode.children)
        //     this.classList.add('active')
        // })

    
        let $paixus = $('.paixu').find('span');
        // console.log($paixus)
        for(var i=0 ;i<$paixus.length;i++){
            $paixus[i].idx = i;
            $paixus[i].onclick = function(i){
                // console.log(this.idx);
                for(var i=0 ;i<$paixus.length;i++){
                    $paixus[i].classList.remove('active');
                }
                this.classList.add('active')
            }
        }


        let $goods_fenyes = $('.goods_fenye').find('span');
        // console.log($goods_fenyes)
        for(var i=0 ;i<$goods_fenyes.length;i++){
            $goods_fenyes[i].idx = i;
            $goods_fenyes[i].onclick = function(i){
                // console.log(this.idx);
                for(var i=0 ;i<$goods_fenyes.length;i++){
                    $goods_fenyes[i].classList.remove('fenye_active');
                }
                this.classList.add('fenye_active');
                let $page = $('.fenye_active').text();

            }
        }



        // 价格排序
        $('.lx_jg').on('click',function(){
            let $page = $('.fenye_active').text();
            $('.goods_ul').html('');
            console.log(this);
            console.log($page);
            $.ajax({
                url:'../api/list.php',
                dataType:'json',
                data:{
                    type:'price',
                    page:$page,
                    qty:60
                },
                success:function(data){

                    let res = data.map(function(item){

                        return `<li data-id="${item.id}">
                                    <a>
                                        <img src="${item.img}" alt="" />
                                        <p class="guoche_icon"><i class="iconfont icon-xiaohuoche"></i></p>
                                    </a>
                                    <div class="goods_xiangqi">
                                        <div class="good_jieshao">
                                            <p>
                                                <a class="description">${item.description}</a>
                                            </p>
                                            <p class="goods_price">¥<span class="goods_lx_jg">${item.price}</span></p>
                                        </div>
                                        
                                        <div class="goods_guojia">
                                            <i></i>
                                            <p>中国</p>
                                        </div>
                                    </div>
                                </li>`

                    }).join('');

                    // console.log(res);

                   $('.goods_ul').append(res);

                }

            });

        })

            
        //传参
        let $lis =$('.goods_box').find('.goods_ul');

        $lis.on("click","li",function(){
            let params = this.getAttribute('data-id');
            console.log(params);
            location.href = 'details.html?' + params;

        }) ;


       
    });

});