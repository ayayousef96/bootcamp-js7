var text =document.querySelector('.text');
var increase =document.querySelector(".increase");
var decrease =document.querySelector(".decrease");
var textSize=20;

increase.addEventListener('click',()=>{
    textSize = textSize + 5;
    text.style.fontSize= textSize +'px';
})

decrease.addEventListener('click',()=>{
    textSize = textSize - 5;
    text.style.fontSize= textSize +'px';
})

