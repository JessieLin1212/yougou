
document.addEventListener('DOMContentLoaded',function(){

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

});