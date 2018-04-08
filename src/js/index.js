
// document.addEventListener('DOMContentLoaded',function(){
// (function(){

require(['common'],function(){





    //吸顶菜单

    // window.onscroll = function(){
    //     let h_logo = document.querySelector('.h_logo');
    //     let logo_img = h_logo.querySelector('.h_logo img');
    //     let h_search_t = document.querySelector('.h_search_t');
        
    //     let scrolltop = window.scrollY;
    //     //console.log(scrolltop);
    //     if(scrolltop >= 691){
    //         h_logo.style = 'position:fixed;top:0;left:0;width:100%;height:50px;z-index:12;margin-left:220px;';
    //         logo_img.style = 'height:50px;';
    //     }else{
    //     }

    // }



    // --------------------轮播图--------------------

     let banner = document.querySelector('.banner_box');
     // console.log(banner);
     let ul = banner.querySelector('ul');


     // 无缝滚动,把第一张复制到最后
     ul.appendChild(ul.children[0].cloneNode(true));

     let idx = 0;
     let len = ul.children.length;
     let imgWidth = banner.clientWidth;
     // console.log(imgWidth);

     // 生成页码
     let page = document.createElement('div');
     page.classList.add('page');

     for(let i=1;i<len;i++){
        let span = document.createElement('span');
        span.innerText = i;
        if(i == idx+1){
            span.classList.add('active');
        }

        page.appendChild(span);
     }

     banner.appendChild(page);

    // 设置ul宽度，使图片水平排列
    ul.style.width = imgWidth*len + 'px';

    function show(){
        if(idx>=len){
            ul.style.left = 0;
            idx = 1;
        }
        let target = -idx*imgWidth;
        animate(ul,{left:target});

        // 高亮前先清除之前高亮的页码
        page.querySelector('.active').classList.remove('active');
        // 高亮页码
        if(idx<len-1){
            page.children[idx].className = 'active';
        }else{
            page.children[0].className = 'active';
        }
    }

    function autoPlay(){
        idx++;
        show();
    }

    // 设置定时器
    let timer = setInterval(autoPlay,3000);


    // 鼠标移入
    banner.addEventListener('mouseenter',()=>{
        clearInterval(timer);
    });

    // 鼠标移出
    banner.addEventListener('mouseleave',()=>{
        timer = setInterval(autoPlay,3000);
    });

    // 事件委托
    banner.addEventListener('click',e=>{
        if(e.target.parentNode.classList.contains('page')){
            idx = e.target.innerText-1;
            show();
        }
    });




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



    // 新品上架文字上滑

    let xinpin_b = document.querySelector('.xinpin_b');
    let items = xinpin_b.querySelectorAll('li');
    // console.log(items);

    for(let item of items){

        item.onmouseenter = function(e){

            clearInterval(item.timer);

            // 获取当前li下的.xinpin_neirong元素
            let xinpin_neirong = this.children[0].children[3];

            // 设置目标值
            let target = -30;

            item.timer = setInterval(()=>{
                // 获取当前top值
                let current = parseFloat(getComputedStyle(xinpin_neirong).top);

                // 计算速度
                let speed = Math.floor((target-current)/6);

                // 改变top值
                let top = current + speed;

                if(top === target || speed === 0){
                    clearInterval(item.timer);

                    // 改变目标值
                    top = target;
                }

                xinpin_neirong.style.top = top + 'px';

            },30)
        }

        // 鼠标移出
        item.onmouseleave = function(e){

            clearInterval(item.timer);

            // 获取当前li下的.xinpin_neirong元素
            let xinpin_neirong = this.children[0].children[3];

            // 设置目标值
            let target = 0;

            item.timer = setInterval(()=>{

                // 获取当前top值
                let current = parseFloat(getComputedStyle(xinpin_neirong).top);

                // 计算速度
                let speed = Math.floor((target-current)/6);

                // 改变top值
                let top = current + speed;

                if(top === target|| speed === 0){
                    clearInterval(item.timer);

                    // 改变目标值
                    top = target;
                }

                xinpin_neirong.style.top = top + 'px';

            },30);
        }
    }


    // 全球购图片上滑

    let quanqiugou_b = document.querySelector('.quanqiugou_b');
    let qqg_items = quanqiugou_b.querySelectorAll('a');
    // console.log(qqg_items);

    for(let item of qqg_items){

        item.onmouseenter = function(e){

            clearInterval(item.timer);

            // 获取当前li下的.xinpin_neirong元素
            let qqg_img = this;

            // 设置目标值
            let target = -30;

            item.timer = setInterval(()=>{
                // 获取当前top值
                let current = parseFloat(getComputedStyle(qqg_img).top);

                // 计算速度
                let speed = Math.floor((target-current)/3);

                // 改变top值
                let top = current + speed;

                if(top === target || speed === 0){
                    clearInterval(item.timer);

                    // 改变目标值
                    top = target;
                }

                qqg_img.style.top = top + 'px';

            },30)
        }

        // 鼠标移出
        item.onmouseleave = function(e){

            clearInterval(item.timer);

            // 获取当前li下的.xinpin_neirong元素
            let qqg_img = this;

            // 设置目标值
            let target = 0;

            item.timer = setInterval(()=>{

                // 获取当前top值
                let current = parseFloat(getComputedStyle(qqg_img).top);

                // 计算速度
                let speed = Math.floor((target-current)/3);

                // 改变top值
                let top = current + speed;

                if(top === target|| speed === 0){
                    clearInterval(item.timer);

                    // 改变目标值
                    top = target;
                }

                qqg_img.style.top = top + 'px';

            },30);
        }
    }


    let fenlei = document.querySelector('.fenlei').children[1];
    fenlei.onclick = function(){
        location.href = '../html/list.html'
    }

// })();


});