
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

        // --------------------轮播图--------------------

        let banner = document.querySelector('.banner');
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
        banner.addEventListener('mouseover',e=>{
            if(e.target.parentNode.classList.contains('page')){
                idx = e.target.innerText-1;
                show();
            }
        });
       
    });

});