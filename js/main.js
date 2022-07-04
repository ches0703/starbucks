console.log("ches");

const searchEl = document.querySelector('.search');
const searchElInput = searchEl.querySelector('input');

searchEl.addEventListener("click",function(){
    searchElInput.focus();
});
searchElInput.addEventListener("focus",function(){
    searchEl.classList.add("focused");
    searchElInput.setAttribute("placeholder","통합검색");
});
searchElInput.addEventListener("blur",function(){
    searchEl.classList.remove("focused");
    searchElInput.setAttribute("placeholder","");
});

const badgeEL=document.querySelector("header .badges");

window.addEventListener("scroll",_.throttle(function(){
    if(window.scrollY>500){
        gsap.to(badgeEL,0.6,{
            opacity: 0,
            display: "none"
        });
    }
    else{
        gsap.to(badgeEL,0.6,{
            opacity: 1,
            display: "block"
        });
    }
},300));

const fadeEls=document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay: (index+1)*0.7,
        opacity: 1
    });
});

new Swiper('.notice-line .swiper-container',{
    direction: "vertical",
    autoplay: true,
    loop:true
});

new Swiper('.promotion .swiper-container',{
    slidesPerView:3,
    spaceBetween: 10,
    centeredSlides: true,
    loop:true,
    autoplay:{
        delay: 5000
    },
    pagination:{
        el: ".promotion .swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

const promotionEl =document.querySelector(".promotion");
const promotionToggleBtn =document.querySelector(".toggle-promotion");
let isHidePromotion=false;
promotionToggleBtn.addEventListener("click",function(){
    isHidePromotion=!isHidePromotion;
    if(isHidePromotion){
        promotionEl.classList.add("hide");
    }
    else{
        promotionEl.classList.remove("hide");
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5,2.5),{
        y:size,
        repeat:-1,
        yoyo:true,
        ease: Power2.easeInOut,
        delay: random(0,delay)
    });
}
floatingObject(".floating1",1,15)
floatingObject(".floating2",0.5,15)
floatingObject(".floating3",1.5,20)