//nav




var owl = $('.owl-carousel.owl-theme.o2');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    nav:true,
    autoplayHoverPause:true
});
var owl2=$('.owl-carousel.owl-theme.owl-menu')
owl2.owlCarousel({
    stagePadding: 0,
    items:3,
    margin:0,
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
var owl3=$('.owl-carousel.owl-theme.owl-offers')
owl3.owlCarousel({
    stagePadding: 0,
    items:1,
    margin:0,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
})

//reviwes
let reviwe=document.querySelector(".reviwe");

window.onscroll=function(){
let top=reviwe.offsetTop;
let reviweheight=reviwe.offsetHeight;
let page=window.innerHeight;
let pageY=window.pageYOffset;

if(pageY>(reviweheight+top)){
    console.log("mmm");
    reviwe.style.left="3%";
    reviwe.style.visibility="visible";
    let reviwe2=document.querySelector(".r2");
    reviwe2.style.left="10%";
    reviwe2.style.visibility="visible";
    let reviwemaker=document.querySelectorAll(".reviwe-maker");
    reviwemaker.forEach(element=>{
        element.style.visibility="visible";
        element.style.left="22%";
    })
    let reviwemaker2=document.querySelector(".reviwe-maker.m2");
        reviwemaker2.style.left="27%";
}
};
